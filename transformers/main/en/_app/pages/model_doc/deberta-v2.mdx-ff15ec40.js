import{S as nb,i as sb,s as ab,e as a,k as p,w as T,t as n,M as rb,c as r,d as t,m,a as i,x as w,h as s,b as u,F as e,g as _,y as $,q as y,o as D,B as E,v as ib,L as ve}from"../../chunks/vendor-6b77c823.js";import{T as Be}from"../../chunks/Tip-39098574.js";import{D as G}from"../../chunks/Docstring-1088f2fb.js";import{C as Te}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Re}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as ke}from"../../chunks/ExampleCodeBlock-5212b321.js";function lb(F){let l,g,c,h,v;return h=new Te({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){l=a("p"),g=n("sequence pair mask has the following format:"),c=p(),T(h.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"sequence pair mask has the following format:"),f.forEach(t),c=m(d),w(h.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(h,d,f),v=!0},p:ve,i(d){v||(y(h.$$.fragment,d),v=!0)},o(d){D(h.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(h,d)}}}function db(F){let l,g,c,h,v;return h=new Te({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){l=a("p"),g=n("sequence pair mask has the following format:"),c=p(),T(h.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"sequence pair mask has the following format:"),f.forEach(t),c=m(d),w(h.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(h,d,f),v=!0},p:ve,i(d){v||(y(h.$$.fragment,d),v=!0)},o(d){D(h.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(h,d)}}}function cb(F){let l,g,c,h,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var q=i(c);h=s(q,"Module"),q.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,h),e(l,v)},d(d){d&&t(l)}}}function pb(F){let l,g,c,h,v;return h=new Te({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2Model
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=n("Example:"),c=p(),T(h.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=m(d),w(h.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(h,d,f),v=!0},p:ve,i(d){v||(y(h.$$.fragment,d),v=!0)},o(d){D(h.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(h,d)}}}function mb(F){let l,g,c,h,v;return{c(){l=a("p"),g=n(`Although the recipe for forward pass needs to be defined within
this function, one should call the `),c=a("code"),h=n("Module"),v=n(` instance afterwards
instead of this since the former takes care of running the
registered hooks while the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,`Although the recipe for forward pass needs to be defined within
this function, one should call the `),c=r(f,"CODE",{});var q=i(c);h=s(q,"Module"),q.forEach(t),v=s(f,` instance afterwards
instead of this since the former takes care of running the
registered hooks while the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,h),e(l,v)},d(d){d&&t(l)}}}function hb(F){let l,g,c,h,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var q=i(c);h=s(q,"Module"),q.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,h),e(l,v)},d(d){d&&t(l)}}}function fb(F){let l,g,c,h,v;return h=new Te({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForMaskedLM
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
`}}),{c(){l=a("p"),g=n("Example:"),c=p(),T(h.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=m(d),w(h.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(h,d,f),v=!0},p:ve,i(d){v||(y(h.$$.fragment,d),v=!0)},o(d){D(h.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(h,d)}}}function ub(F){let l,g;return l=new Te({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,h){$(l,c,h),g=!0},p:ve,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function gb(F){let l,g,c,h,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var q=i(c);h=s(q,"Module"),q.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,h),e(l,v)},d(d){d&&t(l)}}}function _b(F){let l,g,c,h,v;return h=new Te({props:{code:`import torch
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
`}}),{c(){l=a("p"),g=n("Example of single-label classification:"),c=p(),T(h.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example of single-label classification:"),f.forEach(t),c=m(d),w(h.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(h,d,f),v=!0},p:ve,i(d){v||(y(h.$$.fragment,d),v=!0)},o(d){D(h.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(h,d)}}}function bb(F){let l,g;return l=new Te({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,h){$(l,c,h),g=!0},p:ve,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function kb(F){let l,g,c,h,v;return h=new Te({props:{code:`import torch
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
`}}),{c(){l=a("p"),g=n("Example of multi-label classification:"),c=p(),T(h.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example of multi-label classification:"),f.forEach(t),c=m(d),w(h.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(h,d,f),v=!0},p:ve,i(d){v||(y(h.$$.fragment,d),v=!0)},o(d){D(h.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(h,d)}}}function vb(F){let l,g;return l=new Te({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = DebertaV2ForSequenceClassification.from_pretrained(
    "microsoft/deberta-v2-xlarge", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,h){$(l,c,h),g=!0},p:ve,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function Tb(F){let l,g,c,h,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var q=i(c);h=s(q,"Module"),q.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,h),e(l,v)},d(d){d&&t(l)}}}function wb(F){let l,g,c,h,v;return h=new Te({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForTokenClassification
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
`}}),{c(){l=a("p"),g=n("Example:"),c=p(),T(h.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=m(d),w(h.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(h,d,f),v=!0},p:ve,i(d){v||(y(h.$$.fragment,d),v=!0)},o(d){D(h.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(h,d)}}}function $b(F){let l,g;return l=new Te({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,h){$(l,c,h),g=!0},p:ve,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function yb(F){let l,g,c,h,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var q=i(c);h=s(q,"Module"),q.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,h),e(l,v)},d(d){d&&t(l)}}}function Db(F){let l,g,c,h,v;return h=new Te({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForQuestionAnswering
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
`}}),{c(){l=a("p"),g=n("Example:"),c=p(),T(h.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=m(d),w(h.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(h,d,f),v=!0},p:ve,i(d){v||(y(h.$$.fragment,d),v=!0)},o(d){D(h.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(h,d)}}}function Eb(F){let l,g;return l=new Te({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,h){$(l,c,h),g=!0},p:ve,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function Fb(F){let l,g,c,h,v,d,f,q,de,J,x,Y,S,ee,ce,I,pe,re,N,R,te,Z,z,j,ne,W,ie,se,H,le,ae,M,me,A,he,fe,O,X,ue,P,ge,U,oe;return{c(){l=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=p(),h=a("ul"),v=a("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),q=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=p(),x=a("p"),Y=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),N=p(),R=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=p(),z=a("ul"),j=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=p(),M=a("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),he=n("model([input_ids, attention_mask])"),fe=n(" or "),O=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=p(),P=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(k){l=r(k,"P",{});var V=i(l);g=s(V,"TF 2.0 models accepts two formats as inputs:"),V.forEach(t),c=m(k),h=r(k,"UL",{});var K=i(h);v=r(K,"LI",{});var Ee=i(v);d=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=m(K),q=r(K,"LI",{});var De=i(q);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),K.forEach(t),J=m(k),x=r(k,"P",{});var C=i(x);Y=s(C,"This second option is useful when using "),S=r(C,"CODE",{});var _e=i(S);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(C,"CODE",{});var $e=i(I);pe=s($e,"model(inputs)"),$e.forEach(t),re=s(C,"."),C.forEach(t),N=m(k),R=r(k,"P",{});var Fe=i(R);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),Z=m(k),z=r(k,"UL",{});var B=i(z);j=r(B,"LI",{});var L=i(j);ne=s(L,"a single Tensor with "),W=r(L,"CODE",{});var Ve=i(W);ie=s(Ve,"input_ids"),Ve.forEach(t),se=s(L," only and nothing else: "),H=r(L,"CODE",{});var qe=i(H);le=s(qe,"model(inputs_ids)"),qe.forEach(t),L.forEach(t),ae=m(B),M=r(B,"LI",{});var Q=i(M);me=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(Q,"CODE",{});var we=i(A);he=s(we,"model([input_ids, attention_mask])"),we.forEach(t),fe=s(Q," or "),O=r(Q,"CODE",{});var ye=i(O);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Q.forEach(t),ue=m(B),P=r(B,"LI",{});var be=i(P);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var xe=i(U);oe=s(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),be.forEach(t),B.forEach(t)},m(k,V){_(k,l,V),e(l,g),_(k,c,V),_(k,h,V),e(h,v),e(v,d),e(h,f),e(h,q),e(q,de),_(k,J,V),_(k,x,V),e(x,Y),e(x,S),e(S,ee),e(x,ce),e(x,I),e(I,pe),e(x,re),_(k,N,V),_(k,R,V),e(R,te),_(k,Z,V),_(k,z,V),e(z,j),e(j,ne),e(j,W),e(W,ie),e(j,se),e(j,H),e(H,le),e(z,ae),e(z,M),e(M,me),e(M,A),e(A,he),e(M,fe),e(M,O),e(O,X),e(z,ue),e(z,P),e(P,ge),e(P,U),e(U,oe)},d(k){k&&t(l),k&&t(c),k&&t(h),k&&t(J),k&&t(x),k&&t(N),k&&t(R),k&&t(Z),k&&t(z)}}}function Vb(F){let l,g,c,h,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var q=i(c);h=s(q,"Module"),q.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,h),e(l,v)},d(d){d&&t(l)}}}function qb(F){let l,g,c,h,v;return h=new Te({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2Model
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=n("Example:"),c=p(),T(h.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=m(d),w(h.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(h,d,f),v=!0},p:ve,i(d){v||(y(h.$$.fragment,d),v=!0)},o(d){D(h.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(h,d)}}}function xb(F){let l,g,c,h,v,d,f,q,de,J,x,Y,S,ee,ce,I,pe,re,N,R,te,Z,z,j,ne,W,ie,se,H,le,ae,M,me,A,he,fe,O,X,ue,P,ge,U,oe;return{c(){l=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=p(),h=a("ul"),v=a("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),q=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=p(),x=a("p"),Y=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),N=p(),R=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=p(),z=a("ul"),j=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=p(),M=a("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),he=n("model([input_ids, attention_mask])"),fe=n(" or "),O=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=p(),P=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(k){l=r(k,"P",{});var V=i(l);g=s(V,"TF 2.0 models accepts two formats as inputs:"),V.forEach(t),c=m(k),h=r(k,"UL",{});var K=i(h);v=r(K,"LI",{});var Ee=i(v);d=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=m(K),q=r(K,"LI",{});var De=i(q);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),K.forEach(t),J=m(k),x=r(k,"P",{});var C=i(x);Y=s(C,"This second option is useful when using "),S=r(C,"CODE",{});var _e=i(S);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(C,"CODE",{});var $e=i(I);pe=s($e,"model(inputs)"),$e.forEach(t),re=s(C,"."),C.forEach(t),N=m(k),R=r(k,"P",{});var Fe=i(R);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),Z=m(k),z=r(k,"UL",{});var B=i(z);j=r(B,"LI",{});var L=i(j);ne=s(L,"a single Tensor with "),W=r(L,"CODE",{});var Ve=i(W);ie=s(Ve,"input_ids"),Ve.forEach(t),se=s(L," only and nothing else: "),H=r(L,"CODE",{});var qe=i(H);le=s(qe,"model(inputs_ids)"),qe.forEach(t),L.forEach(t),ae=m(B),M=r(B,"LI",{});var Q=i(M);me=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(Q,"CODE",{});var we=i(A);he=s(we,"model([input_ids, attention_mask])"),we.forEach(t),fe=s(Q," or "),O=r(Q,"CODE",{});var ye=i(O);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Q.forEach(t),ue=m(B),P=r(B,"LI",{});var be=i(P);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var xe=i(U);oe=s(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),be.forEach(t),B.forEach(t)},m(k,V){_(k,l,V),e(l,g),_(k,c,V),_(k,h,V),e(h,v),e(v,d),e(h,f),e(h,q),e(q,de),_(k,J,V),_(k,x,V),e(x,Y),e(x,S),e(S,ee),e(x,ce),e(x,I),e(I,pe),e(x,re),_(k,N,V),_(k,R,V),e(R,te),_(k,Z,V),_(k,z,V),e(z,j),e(j,ne),e(j,W),e(W,ie),e(j,se),e(j,H),e(H,le),e(z,ae),e(z,M),e(M,me),e(M,A),e(A,he),e(M,fe),e(M,O),e(O,X),e(z,ue),e(z,P),e(P,ge),e(P,U),e(U,oe)},d(k){k&&t(l),k&&t(c),k&&t(h),k&&t(J),k&&t(x),k&&t(N),k&&t(R),k&&t(Z),k&&t(z)}}}function zb(F){let l,g,c,h,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var q=i(c);h=s(q,"Module"),q.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,h),e(l,v)},d(d){d&&t(l)}}}function Mb(F){let l,g,c,h,v;return h=new Te({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForMaskedLM
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2ForMaskedLM.from_pretrained("kamalkraj/deberta-v2-xlarge")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForMaskedLM.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){l=a("p"),g=n("Example:"),c=p(),T(h.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=m(d),w(h.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(h,d,f),v=!0},p:ve,i(d){v||(y(h.$$.fragment,d),v=!0)},o(d){D(h.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(h,d)}}}function jb(F){let l,g;return l=new Te({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,h){$(l,c,h),g=!0},p:ve,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function Cb(F){let l,g,c,h,v,d,f,q,de,J,x,Y,S,ee,ce,I,pe,re,N,R,te,Z,z,j,ne,W,ie,se,H,le,ae,M,me,A,he,fe,O,X,ue,P,ge,U,oe;return{c(){l=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=p(),h=a("ul"),v=a("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),q=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=p(),x=a("p"),Y=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),N=p(),R=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=p(),z=a("ul"),j=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=p(),M=a("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),he=n("model([input_ids, attention_mask])"),fe=n(" or "),O=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=p(),P=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(k){l=r(k,"P",{});var V=i(l);g=s(V,"TF 2.0 models accepts two formats as inputs:"),V.forEach(t),c=m(k),h=r(k,"UL",{});var K=i(h);v=r(K,"LI",{});var Ee=i(v);d=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=m(K),q=r(K,"LI",{});var De=i(q);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),K.forEach(t),J=m(k),x=r(k,"P",{});var C=i(x);Y=s(C,"This second option is useful when using "),S=r(C,"CODE",{});var _e=i(S);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(C,"CODE",{});var $e=i(I);pe=s($e,"model(inputs)"),$e.forEach(t),re=s(C,"."),C.forEach(t),N=m(k),R=r(k,"P",{});var Fe=i(R);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),Z=m(k),z=r(k,"UL",{});var B=i(z);j=r(B,"LI",{});var L=i(j);ne=s(L,"a single Tensor with "),W=r(L,"CODE",{});var Ve=i(W);ie=s(Ve,"input_ids"),Ve.forEach(t),se=s(L," only and nothing else: "),H=r(L,"CODE",{});var qe=i(H);le=s(qe,"model(inputs_ids)"),qe.forEach(t),L.forEach(t),ae=m(B),M=r(B,"LI",{});var Q=i(M);me=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(Q,"CODE",{});var we=i(A);he=s(we,"model([input_ids, attention_mask])"),we.forEach(t),fe=s(Q," or "),O=r(Q,"CODE",{});var ye=i(O);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Q.forEach(t),ue=m(B),P=r(B,"LI",{});var be=i(P);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var xe=i(U);oe=s(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),be.forEach(t),B.forEach(t)},m(k,V){_(k,l,V),e(l,g),_(k,c,V),_(k,h,V),e(h,v),e(v,d),e(h,f),e(h,q),e(q,de),_(k,J,V),_(k,x,V),e(x,Y),e(x,S),e(S,ee),e(x,ce),e(x,I),e(I,pe),e(x,re),_(k,N,V),_(k,R,V),e(R,te),_(k,Z,V),_(k,z,V),e(z,j),e(j,ne),e(j,W),e(W,ie),e(j,se),e(j,H),e(H,le),e(z,ae),e(z,M),e(M,me),e(M,A),e(A,he),e(M,fe),e(M,O),e(O,X),e(z,ue),e(z,P),e(P,ge),e(P,U),e(U,oe)},d(k){k&&t(l),k&&t(c),k&&t(h),k&&t(J),k&&t(x),k&&t(N),k&&t(R),k&&t(Z),k&&t(z)}}}function Pb(F){let l,g,c,h,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var q=i(c);h=s(q,"Module"),q.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,h),e(l,v)},d(d){d&&t(l)}}}function Rb(F){let l,g,c,h,v;return h=new Te({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForSequenceClassification
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
`}}),{c(){l=a("p"),g=n("Example:"),c=p(),T(h.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=m(d),w(h.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(h,d,f),v=!0},p:ve,i(d){v||(y(h.$$.fragment,d),v=!0)},o(d){D(h.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(h,d)}}}function Bb(F){let l,g;return l=new Te({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,h){$(l,c,h),g=!0},p:ve,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function Ab(F){let l,g,c,h,v,d,f,q,de,J,x,Y,S,ee,ce,I,pe,re,N,R,te,Z,z,j,ne,W,ie,se,H,le,ae,M,me,A,he,fe,O,X,ue,P,ge,U,oe;return{c(){l=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=p(),h=a("ul"),v=a("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),q=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=p(),x=a("p"),Y=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),N=p(),R=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=p(),z=a("ul"),j=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=p(),M=a("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),he=n("model([input_ids, attention_mask])"),fe=n(" or "),O=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=p(),P=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(k){l=r(k,"P",{});var V=i(l);g=s(V,"TF 2.0 models accepts two formats as inputs:"),V.forEach(t),c=m(k),h=r(k,"UL",{});var K=i(h);v=r(K,"LI",{});var Ee=i(v);d=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=m(K),q=r(K,"LI",{});var De=i(q);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),K.forEach(t),J=m(k),x=r(k,"P",{});var C=i(x);Y=s(C,"This second option is useful when using "),S=r(C,"CODE",{});var _e=i(S);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(C,"CODE",{});var $e=i(I);pe=s($e,"model(inputs)"),$e.forEach(t),re=s(C,"."),C.forEach(t),N=m(k),R=r(k,"P",{});var Fe=i(R);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),Z=m(k),z=r(k,"UL",{});var B=i(z);j=r(B,"LI",{});var L=i(j);ne=s(L,"a single Tensor with "),W=r(L,"CODE",{});var Ve=i(W);ie=s(Ve,"input_ids"),Ve.forEach(t),se=s(L," only and nothing else: "),H=r(L,"CODE",{});var qe=i(H);le=s(qe,"model(inputs_ids)"),qe.forEach(t),L.forEach(t),ae=m(B),M=r(B,"LI",{});var Q=i(M);me=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(Q,"CODE",{});var we=i(A);he=s(we,"model([input_ids, attention_mask])"),we.forEach(t),fe=s(Q," or "),O=r(Q,"CODE",{});var ye=i(O);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Q.forEach(t),ue=m(B),P=r(B,"LI",{});var be=i(P);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var xe=i(U);oe=s(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),be.forEach(t),B.forEach(t)},m(k,V){_(k,l,V),e(l,g),_(k,c,V),_(k,h,V),e(h,v),e(v,d),e(h,f),e(h,q),e(q,de),_(k,J,V),_(k,x,V),e(x,Y),e(x,S),e(S,ee),e(x,ce),e(x,I),e(I,pe),e(x,re),_(k,N,V),_(k,R,V),e(R,te),_(k,Z,V),_(k,z,V),e(z,j),e(j,ne),e(j,W),e(W,ie),e(j,se),e(j,H),e(H,le),e(z,ae),e(z,M),e(M,me),e(M,A),e(A,he),e(M,fe),e(M,O),e(O,X),e(z,ue),e(z,P),e(P,ge),e(P,U),e(U,oe)},d(k){k&&t(l),k&&t(c),k&&t(h),k&&t(J),k&&t(x),k&&t(N),k&&t(R),k&&t(Z),k&&t(z)}}}function Lb(F){let l,g,c,h,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var q=i(c);h=s(q,"Module"),q.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,h),e(l,v)},d(d){d&&t(l)}}}function Sb(F){let l,g,c,h,v;return h=new Te({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForTokenClassification
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
`}}),{c(){l=a("p"),g=n("Example:"),c=p(),T(h.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=m(d),w(h.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(h,d,f),v=!0},p:ve,i(d){v||(y(h.$$.fragment,d),v=!0)},o(d){D(h.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(h,d)}}}function Ib(F){let l,g;return l=new Te({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,h){$(l,c,h),g=!0},p:ve,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function Ob(F){let l,g,c,h,v,d,f,q,de,J,x,Y,S,ee,ce,I,pe,re,N,R,te,Z,z,j,ne,W,ie,se,H,le,ae,M,me,A,he,fe,O,X,ue,P,ge,U,oe;return{c(){l=a("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=p(),h=a("ul"),v=a("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),q=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=p(),x=a("p"),Y=n("This second option is useful when using "),S=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),N=p(),R=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=p(),z=a("ul"),j=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=p(),M=a("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=a("code"),he=n("model([input_ids, attention_mask])"),fe=n(" or "),O=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=p(),P=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(k){l=r(k,"P",{});var V=i(l);g=s(V,"TF 2.0 models accepts two formats as inputs:"),V.forEach(t),c=m(k),h=r(k,"UL",{});var K=i(h);v=r(K,"LI",{});var Ee=i(v);d=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=m(K),q=r(K,"LI",{});var De=i(q);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),K.forEach(t),J=m(k),x=r(k,"P",{});var C=i(x);Y=s(C,"This second option is useful when using "),S=r(C,"CODE",{});var _e=i(S);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(C,"CODE",{});var $e=i(I);pe=s($e,"model(inputs)"),$e.forEach(t),re=s(C,"."),C.forEach(t),N=m(k),R=r(k,"P",{});var Fe=i(R);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),Z=m(k),z=r(k,"UL",{});var B=i(z);j=r(B,"LI",{});var L=i(j);ne=s(L,"a single Tensor with "),W=r(L,"CODE",{});var Ve=i(W);ie=s(Ve,"input_ids"),Ve.forEach(t),se=s(L," only and nothing else: "),H=r(L,"CODE",{});var qe=i(H);le=s(qe,"model(inputs_ids)"),qe.forEach(t),L.forEach(t),ae=m(B),M=r(B,"LI",{});var Q=i(M);me=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),A=r(Q,"CODE",{});var we=i(A);he=s(we,"model([input_ids, attention_mask])"),we.forEach(t),fe=s(Q," or "),O=r(Q,"CODE",{});var ye=i(O);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Q.forEach(t),ue=m(B),P=r(B,"LI",{});var be=i(P);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var xe=i(U);oe=s(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),be.forEach(t),B.forEach(t)},m(k,V){_(k,l,V),e(l,g),_(k,c,V),_(k,h,V),e(h,v),e(v,d),e(h,f),e(h,q),e(q,de),_(k,J,V),_(k,x,V),e(x,Y),e(x,S),e(S,ee),e(x,ce),e(x,I),e(I,pe),e(x,re),_(k,N,V),_(k,R,V),e(R,te),_(k,Z,V),_(k,z,V),e(z,j),e(j,ne),e(j,W),e(W,ie),e(j,se),e(j,H),e(H,le),e(z,ae),e(z,M),e(M,me),e(M,A),e(A,he),e(M,fe),e(M,O),e(O,X),e(z,ue),e(z,P),e(P,ge),e(P,U),e(U,oe)},d(k){k&&t(l),k&&t(c),k&&t(h),k&&t(J),k&&t(x),k&&t(N),k&&t(R),k&&t(Z),k&&t(z)}}}function Nb(F){let l,g,c,h,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),h=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(f,"CODE",{});var q=i(c);h=s(q,"Module"),q.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,h),e(l,v)},d(d){d&&t(l)}}}function Wb(F){let l,g,c,h,v;return h=new Te({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForQuestionAnswering
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
`}}),{c(){l=a("p"),g=n("Example:"),c=p(),T(h.$$.fragment)},l(d){l=r(d,"P",{});var f=i(l);g=s(f,"Example:"),f.forEach(t),c=m(d),w(h.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(h,d,f),v=!0},p:ve,i(d){v||(y(h.$$.fragment,d),v=!0)},o(d){D(h.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),E(h,d)}}}function Hb(F){let l,g;return l=new Te({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,h){$(l,c,h),g=!0},p:ve,i(c){g||(y(l.$$.fragment,c),g=!0)},o(c){D(l.$$.fragment,c),g=!1},d(c){E(l,c)}}}function Ub(F){let l,g,c,h,v,d,f,q,de,J,x,Y,S,ee,ce,I,pe,re,N,R,te,Z,z,j,ne,W,ie,se,H,le,ae,M,me,A,he,fe,O,X,ue,P,ge,U,oe,k,V,K,Ee,De,C,_e,$e,Fe,B,L,Ve,qe,Q,we,ye,be,xe,vd,ka,cr,Td,wd,$d,va,pr,yd,Dd,Ed,Ta,mr,Fd,Vd,sl,ot,qd,Dn,xd,zd,En,Md,jd,Fn,Cd,Pd,al,Mt,ho,hr,Vn,Rd,fr,Bd,rl,ht,qn,Ad,jt,Ld,wa,Sd,Id,xn,Od,Nd,Wd,Ct,Hd,$a,Ud,Qd,ya,Gd,Kd,il,Pt,fo,ur,zn,Jd,gr,Xd,ll,Me,Mn,Yd,jn,Zd,Cn,ec,tc,oc,_t,Pn,nc,_r,sc,ac,Rn,br,rc,ic,kr,lc,dc,uo,Bn,cc,Rt,pc,vr,mc,hc,Tr,fc,uc,gc,nt,An,_c,wr,bc,kc,go,vc,Bt,Tc,$r,wc,$c,yr,yc,Dc,Ec,Da,Ln,dl,At,_o,Dr,Sn,Fc,Er,Vc,cl,Xe,In,qc,On,xc,Nn,zc,Mc,jc,bt,Wn,Cc,Fr,Pc,Rc,Hn,Vr,Bc,Ac,qr,Lc,Sc,st,Un,Ic,xr,Oc,Nc,bo,Wc,Lt,Hc,zr,Uc,Qc,Mr,Gc,Kc,pl,St,ko,jr,Qn,Jc,Cr,Xc,ml,Ye,Gn,Yc,Kn,Zc,Jn,ep,tp,op,Xn,np,Yn,sp,ap,rp,at,Zn,ip,It,lp,Ea,dp,cp,Pr,pp,mp,hp,vo,fp,To,hl,Ot,wo,Rr,es,up,Br,gp,fl,ft,ts,_p,Ar,bp,kp,rt,os,vp,Lr,Tp,wp,Sr,$p,yp,$o,ul,Nt,yo,Ir,ns,Dp,Or,Ep,gl,Ze,ss,Fp,Wt,Vp,Nr,qp,xp,as,zp,Mp,jp,rs,Cp,is,Pp,Rp,Bp,Ne,ls,Ap,Ht,Lp,Fa,Sp,Ip,Wr,Op,Np,Wp,Do,Hp,Eo,Up,Fo,_l,Ut,Vo,Hr,ds,Qp,Ur,Gp,bl,Ae,cs,Kp,Qr,Jp,Xp,ps,Yp,ms,Zp,em,tm,hs,om,fs,nm,sm,am,ze,us,rm,Qt,im,Va,lm,dm,Gr,cm,pm,mm,qo,hm,xo,fm,zo,um,Mo,gm,jo,kl,Gt,Co,Kr,gs,_m,Jr,bm,vl,Le,_s,km,Xr,vm,Tm,bs,wm,ks,$m,ym,Dm,vs,Em,Ts,Fm,Vm,qm,We,ws,xm,Kt,zm,qa,Mm,jm,Yr,Cm,Pm,Rm,Po,Bm,Ro,Am,Bo,Tl,Jt,Ao,Zr,$s,Lm,ei,Sm,wl,Se,ys,Im,Xt,Om,ti,Nm,Wm,oi,Hm,Um,Qm,Ds,Gm,Es,Km,Jm,Xm,Fs,Ym,Vs,Zm,eh,th,He,qs,oh,Yt,nh,xa,sh,ah,ni,rh,ih,lh,Lo,dh,So,ch,Io,$l,Zt,Oo,si,xs,ph,ai,mh,yl,Ie,zs,hh,Ms,fh,js,uh,gh,_h,Cs,bh,Ps,kh,vh,Th,No,wh,it,Rs,$h,eo,yh,za,Dh,Eh,ri,Fh,Vh,qh,Wo,xh,Ho,Dl,to,Uo,ii,Bs,zh,li,Mh,El,ut,As,jh,di,Ch,Ph,lt,Ls,Rh,ci,Bh,Ah,Ss,Lh,pi,Sh,Ih,Oh,et,Nh,mi,Wh,Hh,hi,Uh,Qh,fi,Gh,Kh,ui,Jh,Xh,Fl,oo,Qo,gi,Is,Yh,_i,Zh,Vl,Oe,Os,ef,no,tf,bi,of,nf,Ns,sf,af,rf,Ws,lf,Hs,df,cf,pf,Go,mf,Ue,Us,hf,so,ff,Ma,uf,gf,ki,_f,bf,kf,Ko,vf,Jo,Tf,Xo,ql,ao,Yo,vi,Qs,wf,Ti,$f,xl,je,Gs,yf,wi,Df,Ef,Ks,Ff,Js,Vf,qf,xf,Xs,zf,Ys,Mf,jf,Cf,Zo,Pf,Qe,Zs,Rf,ro,Bf,ja,Af,Lf,$i,Sf,If,Of,en,Nf,tn,Wf,on,zl,io,nn,yi,ea,Hf,Di,Uf,Ml,Ce,ta,Qf,Ei,Gf,Kf,oa,Jf,na,Xf,Yf,Zf,sa,eu,aa,tu,ou,nu,sn,su,Ge,ra,au,lo,ru,Ca,iu,lu,Fi,du,cu,pu,an,mu,rn,hu,ln,jl,co,dn,Vi,ia,fu,qi,uu,Cl,Pe,la,gu,po,_u,xi,bu,ku,zi,vu,Tu,wu,da,$u,ca,yu,Du,Eu,pa,Fu,ma,Vu,qu,xu,cn,zu,Ke,ha,Mu,mo,ju,Pa,Cu,Pu,Mi,Ru,Bu,Au,pn,Lu,mn,Su,hn,Pl;return d=new Re({}),ee=new Re({}),Vn=new Re({}),qn=new G({props:{name:"class transformers.DebertaV2Config",anchor:"transformers.DebertaV2Config",parameters:[{name:"vocab_size",val:" = 128100"},{name:"hidden_size",val:" = 1536"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 24"},{name:"intermediate_size",val:" = 6144"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-07"},{name:"relative_attention",val:" = False"},{name:"max_relative_positions",val:" = -1"},{name:"pad_token_id",val:" = 0"},{name:"position_biased_input",val:" = True"},{name:"pos_att_type",val:" = None"},{name:"pooler_dropout",val:" = 0"},{name:"pooler_hidden_act",val:" = 'gelu'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128100) &#x2014;
Vocabulary size of the DeBERTa-v2 model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Model">DebertaV2Model</a>.`,name:"vocab_size"},{anchor:"transformers.DebertaV2Config.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1536) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaModel">DebertaModel</a> or <a href="/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaModel">TFDebertaModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.DebertaV2Config.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DebertaV2Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-7) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.DebertaV2Config.relative_attention",description:`<strong>relative_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether use relative position encoding.`,name:"relative_attention"},{anchor:"transformers.DebertaV2Config.max_relative_positions",description:`<strong>max_relative_positions</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The range of relative positions <code>[-max_position_embeddings, max_position_embeddings]</code>. Use the same value
as <code>max_position_embeddings</code>.`,name:"max_relative_positions"},{anchor:"transformers.DebertaV2Config.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The value used to pad input_ids.`,name:"pad_token_id"},{anchor:"transformers.DebertaV2Config.position_biased_input",description:`<strong>position_biased_input</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether add absolute position embedding to content embedding.`,name:"position_biased_input"},{anchor:"transformers.DebertaV2Config.pos_att_type",description:`<strong>pos_att_type</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
The type of relative position attention, it can be a combination of <code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>, e.g. <code>[&quot;p2c&quot;]</code>,
<code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>, <code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>.`,name:"pos_att_type"},{anchor:"transformers.DebertaV2Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, optional, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/deberta_v2/configuration_deberta_v2.py#L31"}}),zn=new Re({}),Mn=new G({props:{name:"class transformers.DebertaV2Tokenizer",anchor:"transformers.DebertaV2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = False"},{name:"split_by_punct",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.DebertaV2Tokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.DebertaV2Tokenizer.bos_token",description:`<strong>bos_token</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The beginning of sequence token that was used during pre-training. Can be used a sequence classifier token.
When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.`,name:"bos_token"},{anchor:"transformers.DebertaV2Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L53"}}),Pn=new G({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L179",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Bn=new G({props:{name:"get_special_tokens_mask",anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"},{name:"already_has_special_tokens",val:" = False"}],parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L203",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),An=new G({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L229",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),go=new ke({props:{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[lb]},$$scope:{ctx:F}}}),Ln=new G({props:{name:"save_vocabulary",anchor:"transformers.DebertaV2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L262"}}),Sn=new Re({}),In=new G({props:{name:"class transformers.DebertaV2TokenizerFast",anchor:"transformers.DebertaV2TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = False"},{name:"split_by_punct",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.DebertaV2TokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.DebertaV2TokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The beginning of sequence token that was used during pre-training. Can be used a sequence classifier token.
When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.`,name:"bos_token"},{anchor:"transformers.DebertaV2TokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The end of sequence token. When building a sequence using special tokens, this is not the token that is
used for the end of sequence. The token used is the <code>sep_token</code>.`,name:"eos_token"},{anchor:"transformers.DebertaV2TokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.DebertaV2TokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.DebertaV2TokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.DebertaV2TokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.DebertaV2TokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.DebertaV2TokenizerFast.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/deberta_v2/tokenization_deberta_v2_fast.py#L59"}}),Wn=new G({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaV2TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.DebertaV2TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/deberta_v2/tokenization_deberta_v2_fast.py#L149",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Un=new G({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaV2TokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.DebertaV2TokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2TokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/deberta_v2/tokenization_deberta_v2_fast.py#L199",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),bo=new ke({props:{anchor:"transformers.DebertaV2TokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[db]},$$scope:{ctx:F}}}),Qn=new Re({}),Gn=new G({props:{name:"class transformers.DebertaV2Model",anchor:"transformers.DebertaV2Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L977"}}),Zn=new G({props:{name:"forward",anchor:"transformers.DebertaV2Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1001",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vo=new Be({props:{$$slots:{default:[cb]},$$scope:{ctx:F}}}),To=new ke({props:{anchor:"transformers.DebertaV2Model.forward.example",$$slots:{default:[pb]},$$scope:{ctx:F}}}),es=new Re({}),ts=new G({props:{name:"class transformers.DebertaV2PreTrainedModel",anchor:"transformers.DebertaV2PreTrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L881"}}),os=new G({props:{name:"_forward_unimplemented",anchor:"transformers.DebertaV2PreTrainedModel.forward",parameters:[{name:"*input",val:": typing.Any"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/torch/nn/modules/module.py#L190"}}),$o=new Be({props:{$$slots:{default:[mb]},$$scope:{ctx:F}}}),ns=new Re({}),ss=new G({props:{name:"class transformers.DebertaV2ForMaskedLM",anchor:"transformers.DebertaV2ForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1090"}}),ls=new G({props:{name:"forward",anchor:"transformers.DebertaV2ForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1109",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Do=new Be({props:{$$slots:{default:[hb]},$$scope:{ctx:F}}}),Eo=new ke({props:{anchor:"transformers.DebertaV2ForMaskedLM.forward.example",$$slots:{default:[fb]},$$scope:{ctx:F}}}),Fo=new ke({props:{anchor:"transformers.DebertaV2ForMaskedLM.forward.example-2",$$slots:{default:[ub]},$$scope:{ctx:F}}}),ds=new Re({}),cs=new G({props:{name:"class transformers.DebertaV2ForSequenceClassification",anchor:"transformers.DebertaV2ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1226"}}),us=new G({props:{name:"forward",anchor:"transformers.DebertaV2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1251",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qo=new Be({props:{$$slots:{default:[gb]},$$scope:{ctx:F}}}),xo=new ke({props:{anchor:"transformers.DebertaV2ForSequenceClassification.forward.example",$$slots:{default:[_b]},$$scope:{ctx:F}}}),zo=new ke({props:{anchor:"transformers.DebertaV2ForSequenceClassification.forward.example-2",$$slots:{default:[bb]},$$scope:{ctx:F}}}),Mo=new ke({props:{anchor:"transformers.DebertaV2ForSequenceClassification.forward.example-3",$$slots:{default:[kb]},$$scope:{ctx:F}}}),jo=new ke({props:{anchor:"transformers.DebertaV2ForSequenceClassification.forward.example-4",$$slots:{default:[vb]},$$scope:{ctx:F}}}),gs=new Re({}),_s=new G({props:{name:"class transformers.DebertaV2ForTokenClassification",anchor:"transformers.DebertaV2ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1346"}}),ws=new G({props:{name:"forward",anchor:"transformers.DebertaV2ForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1360",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Po=new Be({props:{$$slots:{default:[Tb]},$$scope:{ctx:F}}}),Ro=new ke({props:{anchor:"transformers.DebertaV2ForTokenClassification.forward.example",$$slots:{default:[wb]},$$scope:{ctx:F}}}),Bo=new ke({props:{anchor:"transformers.DebertaV2ForTokenClassification.forward.example-2",$$slots:{default:[$b]},$$scope:{ctx:F}}}),$s=new Re({}),ys=new G({props:{name:"class transformers.DebertaV2ForQuestionAnswering",anchor:"transformers.DebertaV2ForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1423"}}),qs=new G({props:{name:"forward",anchor:"transformers.DebertaV2ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1436",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Lo=new Be({props:{$$slots:{default:[yb]},$$scope:{ctx:F}}}),So=new ke({props:{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.example",$$slots:{default:[Db]},$$scope:{ctx:F}}}),Io=new ke({props:{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.example-2",$$slots:{default:[Eb]},$$scope:{ctx:F}}}),xs=new Re({}),zs=new G({props:{name:"class transformers.TFDebertaV2Model",anchor:"transformers.TFDebertaV2Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1175"}}),No=new Be({props:{$$slots:{default:[Fb]},$$scope:{ctx:F}}}),Rs=new G({props:{name:"call",anchor:"transformers.TFDebertaV2Model.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaV2Model.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2Model.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1181",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Wo=new Be({props:{$$slots:{default:[Vb]},$$scope:{ctx:F}}}),Ho=new ke({props:{anchor:"transformers.TFDebertaV2Model.call.example",$$slots:{default:[qb]},$$scope:{ctx:F}}}),Bs=new Re({}),As=new G({props:{name:"class transformers.TFDebertaV2PreTrainedModel",anchor:"transformers.TFDebertaV2PreTrainedModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1079"}}),Ls=new G({props:{name:"call",anchor:"transformers.TFDebertaV2PreTrainedModel.call",parameters:[{name:"inputs",val:""},{name:"training",val:" = None"},{name:"mask",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/keras/engine/training.py#L450",returnDescription:`
<p>A tensor if there is a single output, or
a list of tensors if there are more than one outputs.</p>
`}}),Is=new Re({}),Os=new G({props:{name:"class transformers.TFDebertaV2ForMaskedLM",anchor:"transformers.TFDebertaV2ForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1224"}}),Go=new Be({props:{$$slots:{default:[xb]},$$scope:{ctx:F}}}),Us=new G({props:{name:"call",anchor:"transformers.TFDebertaV2ForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1240",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ko=new Be({props:{$$slots:{default:[zb]},$$scope:{ctx:F}}}),Jo=new ke({props:{anchor:"transformers.TFDebertaV2ForMaskedLM.call.example",$$slots:{default:[Mb]},$$scope:{ctx:F}}}),Xo=new ke({props:{anchor:"transformers.TFDebertaV2ForMaskedLM.call.example-2",$$slots:{default:[jb]},$$scope:{ctx:F}}}),Qs=new Re({}),Gs=new G({props:{name:"class transformers.TFDebertaV2ForSequenceClassification",anchor:"transformers.TFDebertaV2ForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1308"}}),Zo=new Be({props:{$$slots:{default:[Cb]},$$scope:{ctx:F}}}),Zs=new G({props:{name:"call",anchor:"transformers.TFDebertaV2ForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1326",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),en=new Be({props:{$$slots:{default:[Pb]},$$scope:{ctx:F}}}),tn=new ke({props:{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.example",$$slots:{default:[Rb]},$$scope:{ctx:F}}}),on=new ke({props:{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.example-2",$$slots:{default:[Bb]},$$scope:{ctx:F}}}),ea=new Re({}),ta=new G({props:{name:"class transformers.TFDebertaV2ForTokenClassification",anchor:"transformers.TFDebertaV2ForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1397"}}),sn=new Be({props:{$$slots:{default:[Ab]},$$scope:{ctx:F}}}),ra=new G({props:{name:"call",anchor:"transformers.TFDebertaV2ForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1409",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),an=new Be({props:{$$slots:{default:[Lb]},$$scope:{ctx:F}}}),rn=new ke({props:{anchor:"transformers.TFDebertaV2ForTokenClassification.call.example",$$slots:{default:[Sb]},$$scope:{ctx:F}}}),ln=new ke({props:{anchor:"transformers.TFDebertaV2ForTokenClassification.call.example-2",$$slots:{default:[Ib]},$$scope:{ctx:F}}}),ia=new Re({}),la=new G({props:{name:"class transformers.TFDebertaV2ForQuestionAnswering",anchor:"transformers.TFDebertaV2ForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1476"}}),cn=new Be({props:{$$slots:{default:[Ob]},$$scope:{ctx:F}}}),ha=new G({props:{name:"call",anchor:"transformers.TFDebertaV2ForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1487",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),pn=new Be({props:{$$slots:{default:[Nb]},$$scope:{ctx:F}}}),mn=new ke({props:{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.example",$$slots:{default:[Wb]},$$scope:{ctx:F}}}),hn=new ke({props:{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.example-2",$$slots:{default:[Hb]},$$scope:{ctx:F}}}),{c(){l=a("meta"),g=p(),c=a("h1"),h=a("a"),v=a("span"),T(d.$$.fragment),f=p(),q=a("span"),de=n("DeBERTa-v2"),J=p(),x=a("h2"),Y=a("a"),S=a("span"),T(ee.$$.fragment),ce=p(),I=a("span"),pe=n("Overview"),re=p(),N=a("p"),R=n("The DeBERTa model was proposed in "),te=a("a"),Z=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),z=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),j=p(),ne=a("p"),W=n(`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),ie=p(),se=a("p"),H=n("The abstract from the paper is the following:"),le=p(),ae=a("p"),M=a("em"),me=n(`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),A=a("a"),he=n("https://github.com/microsoft/DeBERTa"),fe=n("."),O=p(),X=a("p"),ue=n("The following information is visible directly on the "),P=a("a"),ge=n(`original implementation
repository`),U=n(`. DeBERTa v2 is the second version of the DeBERTa model. It includes
the 1.5B model used for the SuperGLUE single-model submission and achieving 89.9, versus human baseline 89.8. You can
find more details about this submission in the authors\u2019
`),oe=a("a"),k=n("blog"),V=p(),K=a("p"),Ee=n("New in v2:"),De=p(),C=a("ul"),_e=a("li"),$e=a("strong"),Fe=n("Vocabulary"),B=n(` In v2 the tokenizer is changed to use a new vocabulary of size 128K built from the training data.
Instead of a GPT2-based tokenizer, the tokenizer is now
`),L=a("a"),Ve=n("sentencepiece-based"),qe=n(" tokenizer."),Q=p(),we=a("li"),ye=a("strong"),be=n("nGiE(nGram Induced Input Encoding)"),xe=n(` The DeBERTa-v2 model uses an additional convolution layer aside with the first
transformer layer to better learn the local dependency of input tokens.`),vd=p(),ka=a("li"),cr=a("strong"),Td=n("Sharing position projection matrix with content projection matrix in attention layer"),wd=n(` Based on previous
experiments, this can save parameters without affecting the performance.`),$d=p(),va=a("li"),pr=a("strong"),yd=n("Apply bucket to encode relative positions"),Dd=n(` The DeBERTa-v2 model uses log bucket to encode relative positions
similar to T5.`),Ed=p(),Ta=a("li"),mr=a("strong"),Fd=n("900M model & 1.5B model"),Vd=n(` Two additional model sizes are available: 900M and 1.5B, which significantly improves the
performance of downstream tasks.`),sl=p(),ot=a("p"),qd=n("This model was contributed by "),Dn=a("a"),xd=n("DeBERTa"),zd=n(`. This model TF 2.0 implementation was
contributed by `),En=a("a"),Md=n("kamalkraj"),jd=n(". The original code can be found "),Fn=a("a"),Cd=n("here"),Pd=n("."),al=p(),Mt=a("h2"),ho=a("a"),hr=a("span"),T(Vn.$$.fragment),Rd=p(),fr=a("span"),Bd=n("DebertaV2Config"),rl=p(),ht=a("div"),T(qn.$$.fragment),Ad=p(),jt=a("p"),Ld=n("This is the configuration class to store the configuration of a "),wa=a("a"),Sd=n("DebertaV2Model"),Id=n(`. It is used to instantiate a
DeBERTa-v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),xn=a("a"),Od=n("microsoft/deberta-v2-xlarge"),Nd=n(" architecture."),Wd=p(),Ct=a("p"),Hd=n("Configuration objects inherit from "),$a=a("a"),Ud=n("PretrainedConfig"),Qd=n(` and can be used to control the model outputs. Read the
documentation from `),ya=a("a"),Gd=n("PretrainedConfig"),Kd=n(" for more information."),il=p(),Pt=a("h2"),fo=a("a"),ur=a("span"),T(zn.$$.fragment),Jd=p(),gr=a("span"),Xd=n("DebertaV2Tokenizer"),ll=p(),Me=a("div"),T(Mn.$$.fragment),Yd=p(),jn=a("p"),Zd=n("Constructs a DeBERTa-v2 tokenizer. Based on "),Cn=a("a"),ec=n("SentencePiece"),tc=n("."),oc=p(),_t=a("div"),T(Pn.$$.fragment),nc=p(),_r=a("p"),sc=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),ac=p(),Rn=a("ul"),br=a("li"),rc=n("single sequence: [CLS] X [SEP]"),ic=p(),kr=a("li"),lc=n("pair of sequences: [CLS] A [SEP] B [SEP]"),dc=p(),uo=a("div"),T(Bn.$$.fragment),cc=p(),Rt=a("p"),pc=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),vr=a("code"),mc=n("prepare_for_model"),hc=n(" or "),Tr=a("code"),fc=n("encode_plus"),uc=n(" methods."),gc=p(),nt=a("div"),T(An.$$.fragment),_c=p(),wr=a("p"),bc=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),kc=p(),T(go.$$.fragment),vc=p(),Bt=a("p"),Tc=n("If "),$r=a("code"),wc=n("token_ids_1"),$c=n(" is "),yr=a("code"),yc=n("None"),Dc=n(", this method only returns the first portion of the mask (0s)."),Ec=p(),Da=a("div"),T(Ln.$$.fragment),dl=p(),At=a("h2"),_o=a("a"),Dr=a("span"),T(Sn.$$.fragment),Fc=p(),Er=a("span"),Vc=n("DebertaV2TokenizerFast"),cl=p(),Xe=a("div"),T(In.$$.fragment),qc=p(),On=a("p"),xc=n("Constructs a DeBERTa-v2 fast tokenizer. Based on "),Nn=a("a"),zc=n("SentencePiece"),Mc=n("."),jc=p(),bt=a("div"),T(Wn.$$.fragment),Cc=p(),Fr=a("p"),Pc=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Rc=p(),Hn=a("ul"),Vr=a("li"),Bc=n("single sequence: [CLS] X [SEP]"),Ac=p(),qr=a("li"),Lc=n("pair of sequences: [CLS] A [SEP] B [SEP]"),Sc=p(),st=a("div"),T(Un.$$.fragment),Ic=p(),xr=a("p"),Oc=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),Nc=p(),T(bo.$$.fragment),Wc=p(),Lt=a("p"),Hc=n("If "),zr=a("code"),Uc=n("token_ids_1"),Qc=n(" is "),Mr=a("code"),Gc=n("None"),Kc=n(", this method only returns the first portion of the mask (0s)."),pl=p(),St=a("h2"),ko=a("a"),jr=a("span"),T(Qn.$$.fragment),Jc=p(),Cr=a("span"),Xc=n("DebertaV2Model"),ml=p(),Ye=a("div"),T(Gn.$$.fragment),Yc=p(),Kn=a("p"),Zc=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Jn=a("a"),ep=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),tp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),op=p(),Xn=a("p"),np=n("This model is also a PyTorch "),Yn=a("a"),sp=n("torch.nn.Module"),ap=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),rp=p(),at=a("div"),T(Zn.$$.fragment),ip=p(),It=a("p"),lp=n("The "),Ea=a("a"),dp=n("DebertaV2Model"),cp=n(" forward method, overrides the "),Pr=a("code"),pp=n("__call__"),mp=n(" special method."),hp=p(),T(vo.$$.fragment),fp=p(),T(To.$$.fragment),hl=p(),Ot=a("h2"),wo=a("a"),Rr=a("span"),T(es.$$.fragment),up=p(),Br=a("span"),gp=n("DebertaV2PreTrainedModel"),fl=p(),ft=a("div"),T(ts.$$.fragment),_p=p(),Ar=a("p"),bp=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),kp=p(),rt=a("div"),T(os.$$.fragment),vp=p(),Lr=a("p"),Tp=n("Defines the computation performed at every call."),wp=p(),Sr=a("p"),$p=n("Should be overridden by all subclasses."),yp=p(),T($o.$$.fragment),ul=p(),Nt=a("h2"),yo=a("a"),Ir=a("span"),T(ns.$$.fragment),Dp=p(),Or=a("span"),Ep=n("DebertaV2ForMaskedLM"),gl=p(),Ze=a("div"),T(ss.$$.fragment),Fp=p(),Wt=a("p"),Vp=n("DeBERTa Model with a "),Nr=a("code"),qp=n("language modeling"),xp=n(` head on top.
The DeBERTa model was proposed in `),as=a("a"),zp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Mp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),jp=p(),rs=a("p"),Cp=n("This model is also a PyTorch "),is=a("a"),Pp=n("torch.nn.Module"),Rp=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Bp=p(),Ne=a("div"),T(ls.$$.fragment),Ap=p(),Ht=a("p"),Lp=n("The "),Fa=a("a"),Sp=n("DebertaV2ForMaskedLM"),Ip=n(" forward method, overrides the "),Wr=a("code"),Op=n("__call__"),Np=n(" special method."),Wp=p(),T(Do.$$.fragment),Hp=p(),T(Eo.$$.fragment),Up=p(),T(Fo.$$.fragment),_l=p(),Ut=a("h2"),Vo=a("a"),Hr=a("span"),T(ds.$$.fragment),Qp=p(),Ur=a("span"),Gp=n("DebertaV2ForSequenceClassification"),bl=p(),Ae=a("div"),T(cs.$$.fragment),Kp=p(),Qr=a("p"),Jp=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Xp=p(),ps=a("p"),Yp=n("The DeBERTa model was proposed in "),ms=a("a"),Zp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),em=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),tm=p(),hs=a("p"),om=n("This model is also a PyTorch "),fs=a("a"),nm=n("torch.nn.Module"),sm=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),am=p(),ze=a("div"),T(us.$$.fragment),rm=p(),Qt=a("p"),im=n("The "),Va=a("a"),lm=n("DebertaV2ForSequenceClassification"),dm=n(" forward method, overrides the "),Gr=a("code"),cm=n("__call__"),pm=n(" special method."),mm=p(),T(qo.$$.fragment),hm=p(),T(xo.$$.fragment),fm=p(),T(zo.$$.fragment),um=p(),T(Mo.$$.fragment),gm=p(),T(jo.$$.fragment),kl=p(),Gt=a("h2"),Co=a("a"),Kr=a("span"),T(gs.$$.fragment),_m=p(),Jr=a("span"),bm=n("DebertaV2ForTokenClassification"),vl=p(),Le=a("div"),T(_s.$$.fragment),km=p(),Xr=a("p"),vm=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Tm=p(),bs=a("p"),wm=n("The DeBERTa model was proposed in "),ks=a("a"),$m=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),ym=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Dm=p(),vs=a("p"),Em=n("This model is also a PyTorch "),Ts=a("a"),Fm=n("torch.nn.Module"),Vm=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),qm=p(),We=a("div"),T(ws.$$.fragment),xm=p(),Kt=a("p"),zm=n("The "),qa=a("a"),Mm=n("DebertaV2ForTokenClassification"),jm=n(" forward method, overrides the "),Yr=a("code"),Cm=n("__call__"),Pm=n(" special method."),Rm=p(),T(Po.$$.fragment),Bm=p(),T(Ro.$$.fragment),Am=p(),T(Bo.$$.fragment),Tl=p(),Jt=a("h2"),Ao=a("a"),Zr=a("span"),T($s.$$.fragment),Lm=p(),ei=a("span"),Sm=n("DebertaV2ForQuestionAnswering"),wl=p(),Se=a("div"),T(ys.$$.fragment),Im=p(),Xt=a("p"),Om=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ti=a("code"),Nm=n("span start logits"),Wm=n(" and "),oi=a("code"),Hm=n("span end logits"),Um=n(")."),Qm=p(),Ds=a("p"),Gm=n("The DeBERTa model was proposed in "),Es=a("a"),Km=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Jm=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Xm=p(),Fs=a("p"),Ym=n("This model is also a PyTorch "),Vs=a("a"),Zm=n("torch.nn.Module"),eh=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),th=p(),He=a("div"),T(qs.$$.fragment),oh=p(),Yt=a("p"),nh=n("The "),xa=a("a"),sh=n("DebertaV2ForQuestionAnswering"),ah=n(" forward method, overrides the "),ni=a("code"),rh=n("__call__"),ih=n(" special method."),lh=p(),T(Lo.$$.fragment),dh=p(),T(So.$$.fragment),ch=p(),T(Io.$$.fragment),$l=p(),Zt=a("h2"),Oo=a("a"),si=a("span"),T(xs.$$.fragment),ph=p(),ai=a("span"),mh=n("TFDebertaV2Model"),yl=p(),Ie=a("div"),T(zs.$$.fragment),hh=p(),Ms=a("p"),fh=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),js=a("a"),uh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),gh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),_h=p(),Cs=a("p"),bh=n("This model is also a "),Ps=a("a"),kh=n("tf.keras.Model"),vh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Th=p(),T(No.$$.fragment),wh=p(),it=a("div"),T(Rs.$$.fragment),$h=p(),eo=a("p"),yh=n("The "),za=a("a"),Dh=n("TFDebertaV2Model"),Eh=n(" forward method, overrides the "),ri=a("code"),Fh=n("__call__"),Vh=n(" special method."),qh=p(),T(Wo.$$.fragment),xh=p(),T(Ho.$$.fragment),Dl=p(),to=a("h2"),Uo=a("a"),ii=a("span"),T(Bs.$$.fragment),zh=p(),li=a("span"),Mh=n("TFDebertaV2PreTrainedModel"),El=p(),ut=a("div"),T(As.$$.fragment),jh=p(),di=a("p"),Ch=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Ph=p(),lt=a("div"),T(Ls.$$.fragment),Rh=p(),ci=a("p"),Bh=n("Calls the model on new inputs and returns the outputs as tensors."),Ah=p(),Ss=a("p"),Lh=n("In this case "),pi=a("code"),Sh=n("call()"),Ih=n(` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),Oh=p(),et=a("p"),Nh=n(`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),mi=a("code"),Wh=n("tf.keras.Model"),Hh=n(`.
To call a model on an input, always use the `),hi=a("code"),Uh=n("__call__()"),Qh=n(` method,
i.e. `),fi=a("code"),Gh=n("model(inputs)"),Kh=n(", which relies on the underlying "),ui=a("code"),Jh=n("call()"),Xh=n(" method."),Fl=p(),oo=a("h2"),Qo=a("a"),gi=a("span"),T(Is.$$.fragment),Yh=p(),_i=a("span"),Zh=n("TFDebertaV2ForMaskedLM"),Vl=p(),Oe=a("div"),T(Os.$$.fragment),ef=p(),no=a("p"),tf=n("DeBERTa Model with a "),bi=a("code"),of=n("language modeling"),nf=n(` head on top.
The DeBERTa model was proposed in `),Ns=a("a"),sf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),af=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),rf=p(),Ws=a("p"),lf=n("This model is also a "),Hs=a("a"),df=n("tf.keras.Model"),cf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pf=p(),T(Go.$$.fragment),mf=p(),Ue=a("div"),T(Us.$$.fragment),hf=p(),so=a("p"),ff=n("The "),Ma=a("a"),uf=n("TFDebertaV2ForMaskedLM"),gf=n(" forward method, overrides the "),ki=a("code"),_f=n("__call__"),bf=n(" special method."),kf=p(),T(Ko.$$.fragment),vf=p(),T(Jo.$$.fragment),Tf=p(),T(Xo.$$.fragment),ql=p(),ao=a("h2"),Yo=a("a"),vi=a("span"),T(Qs.$$.fragment),wf=p(),Ti=a("span"),$f=n("TFDebertaV2ForSequenceClassification"),xl=p(),je=a("div"),T(Gs.$$.fragment),yf=p(),wi=a("p"),Df=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Ef=p(),Ks=a("p"),Ff=n("The DeBERTa model was proposed in "),Js=a("a"),Vf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),qf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),xf=p(),Xs=a("p"),zf=n("This model is also a "),Ys=a("a"),Mf=n("tf.keras.Model"),jf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cf=p(),T(Zo.$$.fragment),Pf=p(),Qe=a("div"),T(Zs.$$.fragment),Rf=p(),ro=a("p"),Bf=n("The "),ja=a("a"),Af=n("TFDebertaV2ForSequenceClassification"),Lf=n(" forward method, overrides the "),$i=a("code"),Sf=n("__call__"),If=n(" special method."),Of=p(),T(en.$$.fragment),Nf=p(),T(tn.$$.fragment),Wf=p(),T(on.$$.fragment),zl=p(),io=a("h2"),nn=a("a"),yi=a("span"),T(ea.$$.fragment),Hf=p(),Di=a("span"),Uf=n("TFDebertaV2ForTokenClassification"),Ml=p(),Ce=a("div"),T(ta.$$.fragment),Qf=p(),Ei=a("p"),Gf=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Kf=p(),oa=a("p"),Jf=n("The DeBERTa model was proposed in "),na=a("a"),Xf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Yf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Zf=p(),sa=a("p"),eu=n("This model is also a "),aa=a("a"),tu=n("tf.keras.Model"),ou=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nu=p(),T(sn.$$.fragment),su=p(),Ge=a("div"),T(ra.$$.fragment),au=p(),lo=a("p"),ru=n("The "),Ca=a("a"),iu=n("TFDebertaV2ForTokenClassification"),lu=n(" forward method, overrides the "),Fi=a("code"),du=n("__call__"),cu=n(" special method."),pu=p(),T(an.$$.fragment),mu=p(),T(rn.$$.fragment),hu=p(),T(ln.$$.fragment),jl=p(),co=a("h2"),dn=a("a"),Vi=a("span"),T(ia.$$.fragment),fu=p(),qi=a("span"),uu=n("TFDebertaV2ForQuestionAnswering"),Cl=p(),Pe=a("div"),T(la.$$.fragment),gu=p(),po=a("p"),_u=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),xi=a("code"),bu=n("span start logits"),ku=n(" and "),zi=a("code"),vu=n("span end logits"),Tu=n(")."),wu=p(),da=a("p"),$u=n("The DeBERTa model was proposed in "),ca=a("a"),yu=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Du=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Eu=p(),pa=a("p"),Fu=n("This model is also a "),ma=a("a"),Vu=n("tf.keras.Model"),qu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xu=p(),T(cn.$$.fragment),zu=p(),Ke=a("div"),T(ha.$$.fragment),Mu=p(),mo=a("p"),ju=n("The "),Pa=a("a"),Cu=n("TFDebertaV2ForQuestionAnswering"),Pu=n(" forward method, overrides the "),Mi=a("code"),Ru=n("__call__"),Bu=n(" special method."),Au=p(),T(pn.$$.fragment),Lu=p(),T(mn.$$.fragment),Su=p(),T(hn.$$.fragment),this.h()},l(o){const b=rb('[data-svelte="svelte-1phssyn"]',document.head);l=r(b,"META",{name:!0,content:!0}),b.forEach(t),g=m(o),c=r(o,"H1",{class:!0});var fa=i(c);h=r(fa,"A",{id:!0,class:!0,href:!0});var ji=i(h);v=r(ji,"SPAN",{});var Ci=i(v);w(d.$$.fragment,Ci),Ci.forEach(t),ji.forEach(t),f=m(fa),q=r(fa,"SPAN",{});var Pi=i(q);de=s(Pi,"DeBERTa-v2"),Pi.forEach(t),fa.forEach(t),J=m(o),x=r(o,"H2",{class:!0});var ua=i(x);Y=r(ua,"A",{id:!0,class:!0,href:!0});var Ri=i(Y);S=r(Ri,"SPAN",{});var Bi=i(S);w(ee.$$.fragment,Bi),Bi.forEach(t),Ri.forEach(t),ce=m(ua),I=r(ua,"SPAN",{});var Ai=i(I);pe=s(Ai,"Overview"),Ai.forEach(t),ua.forEach(t),re=m(o),N=r(o,"P",{});var ga=i(N);R=s(ga,"The DeBERTa model was proposed in "),te=r(ga,"A",{href:!0,rel:!0});var Li=i(te);Z=s(Li,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),Li.forEach(t),z=s(ga,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),ga.forEach(t),j=m(o),ne=r(o,"P",{});var Si=i(ne);W=s(Si,`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),Si.forEach(t),ie=m(o),se=r(o,"P",{});var Ii=i(se);H=s(Ii,"The abstract from the paper is the following:"),Ii.forEach(t),le=m(o),ae=r(o,"P",{});var Oi=i(ae);M=r(Oi,"EM",{});var _a=i(M);me=s(_a,`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),A=r(_a,"A",{href:!0,rel:!0});var Ni=i(A);he=s(Ni,"https://github.com/microsoft/DeBERTa"),Ni.forEach(t),fe=s(_a,"."),_a.forEach(t),Oi.forEach(t),O=m(o),X=r(o,"P",{});var fn=i(X);ue=s(fn,"The following information is visible directly on the "),P=r(fn,"A",{href:!0,rel:!0});var Wi=i(P);ge=s(Wi,`original implementation
repository`),Wi.forEach(t),U=s(fn,`. DeBERTa v2 is the second version of the DeBERTa model. It includes
the 1.5B model used for the SuperGLUE single-model submission and achieving 89.9, versus human baseline 89.8. You can
find more details about this submission in the authors\u2019
`),oe=r(fn,"A",{href:!0,rel:!0});var Hi=i(oe);k=s(Hi,"blog"),Hi.forEach(t),fn.forEach(t),V=m(o),K=r(o,"P",{});var Ui=i(K);Ee=s(Ui,"New in v2:"),Ui.forEach(t),De=m(o),C=r(o,"UL",{});var tt=i(C);_e=r(tt,"LI",{});var un=i(_e);$e=r(un,"STRONG",{});var Qi=i($e);Fe=s(Qi,"Vocabulary"),Qi.forEach(t),B=s(un,` In v2 the tokenizer is changed to use a new vocabulary of size 128K built from the training data.
Instead of a GPT2-based tokenizer, the tokenizer is now
`),L=r(un,"A",{href:!0,rel:!0});var Gi=i(L);Ve=s(Gi,"sentencepiece-based"),Gi.forEach(t),qe=s(un," tokenizer."),un.forEach(t),Q=m(tt),we=r(tt,"LI",{});var Ra=i(we);ye=r(Ra,"STRONG",{});var Ki=i(ye);be=s(Ki,"nGiE(nGram Induced Input Encoding)"),Ki.forEach(t),xe=s(Ra,` The DeBERTa-v2 model uses an additional convolution layer aside with the first
transformer layer to better learn the local dependency of input tokens.`),Ra.forEach(t),vd=m(tt),ka=r(tt,"LI",{});var Ba=i(ka);cr=r(Ba,"STRONG",{});var Ji=i(cr);Td=s(Ji,"Sharing position projection matrix with content projection matrix in attention layer"),Ji.forEach(t),wd=s(Ba,` Based on previous
experiments, this can save parameters without affecting the performance.`),Ba.forEach(t),$d=m(tt),va=r(tt,"LI",{});var Aa=i(va);pr=r(Aa,"STRONG",{});var Xi=i(pr);yd=s(Xi,"Apply bucket to encode relative positions"),Xi.forEach(t),Dd=s(Aa,` The DeBERTa-v2 model uses log bucket to encode relative positions
similar to T5.`),Aa.forEach(t),Ed=m(tt),Ta=r(tt,"LI",{});var La=i(Ta);mr=r(La,"STRONG",{});var Yi=i(mr);Fd=s(Yi,"900M model & 1.5B model"),Yi.forEach(t),Vd=s(La,` Two additional model sizes are available: 900M and 1.5B, which significantly improves the
performance of downstream tasks.`),La.forEach(t),tt.forEach(t),sl=m(o),ot=r(o,"P",{});var gt=i(ot);qd=s(gt,"This model was contributed by "),Dn=r(gt,"A",{href:!0,rel:!0});var Zi=i(Dn);xd=s(Zi,"DeBERTa"),Zi.forEach(t),zd=s(gt,`. This model TF 2.0 implementation was
contributed by `),En=r(gt,"A",{href:!0,rel:!0});var el=i(En);Md=s(el,"kamalkraj"),el.forEach(t),jd=s(gt,". The original code can be found "),Fn=r(gt,"A",{href:!0,rel:!0});var tl=i(Fn);Cd=s(tl,"here"),tl.forEach(t),Pd=s(gt,"."),gt.forEach(t),al=m(o),Mt=r(o,"H2",{class:!0});var ba=i(Mt);ho=r(ba,"A",{id:!0,class:!0,href:!0});var ol=i(ho);hr=r(ol,"SPAN",{});var nl=i(hr);w(Vn.$$.fragment,nl),nl.forEach(t),ol.forEach(t),Rd=m(ba),fr=r(ba,"SPAN",{});var Iu=i(fr);Bd=s(Iu,"DebertaV2Config"),Iu.forEach(t),ba.forEach(t),rl=m(o),ht=r(o,"DIV",{class:!0});var Sa=i(ht);w(qn.$$.fragment,Sa),Ad=m(Sa),jt=r(Sa,"P",{});var Ia=i(jt);Ld=s(Ia,"This is the configuration class to store the configuration of a "),wa=r(Ia,"A",{href:!0});var Ou=i(wa);Sd=s(Ou,"DebertaV2Model"),Ou.forEach(t),Id=s(Ia,`. It is used to instantiate a
DeBERTa-v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),xn=r(Ia,"A",{href:!0,rel:!0});var Nu=i(xn);Od=s(Nu,"microsoft/deberta-v2-xlarge"),Nu.forEach(t),Nd=s(Ia," architecture."),Ia.forEach(t),Wd=m(Sa),Ct=r(Sa,"P",{});var Oa=i(Ct);Hd=s(Oa,"Configuration objects inherit from "),$a=r(Oa,"A",{href:!0});var Wu=i($a);Ud=s(Wu,"PretrainedConfig"),Wu.forEach(t),Qd=s(Oa,` and can be used to control the model outputs. Read the
documentation from `),ya=r(Oa,"A",{href:!0});var Hu=i(ya);Gd=s(Hu,"PretrainedConfig"),Hu.forEach(t),Kd=s(Oa," for more information."),Oa.forEach(t),Sa.forEach(t),il=m(o),Pt=r(o,"H2",{class:!0});var Rl=i(Pt);fo=r(Rl,"A",{id:!0,class:!0,href:!0});var Uu=i(fo);ur=r(Uu,"SPAN",{});var Qu=i(ur);w(zn.$$.fragment,Qu),Qu.forEach(t),Uu.forEach(t),Jd=m(Rl),gr=r(Rl,"SPAN",{});var Gu=i(gr);Xd=s(Gu,"DebertaV2Tokenizer"),Gu.forEach(t),Rl.forEach(t),ll=m(o),Me=r(o,"DIV",{class:!0});var dt=i(Me);w(Mn.$$.fragment,dt),Yd=m(dt),jn=r(dt,"P",{});var Bl=i(jn);Zd=s(Bl,"Constructs a DeBERTa-v2 tokenizer. Based on "),Cn=r(Bl,"A",{href:!0,rel:!0});var Ku=i(Cn);ec=s(Ku,"SentencePiece"),Ku.forEach(t),tc=s(Bl,"."),Bl.forEach(t),oc=m(dt),_t=r(dt,"DIV",{class:!0});var Na=i(_t);w(Pn.$$.fragment,Na),nc=m(Na),_r=r(Na,"P",{});var Ju=i(_r);sc=s(Ju,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Ju.forEach(t),ac=m(Na),Rn=r(Na,"UL",{});var Al=i(Rn);br=r(Al,"LI",{});var Xu=i(br);rc=s(Xu,"single sequence: [CLS] X [SEP]"),Xu.forEach(t),ic=m(Al),kr=r(Al,"LI",{});var Yu=i(kr);lc=s(Yu,"pair of sequences: [CLS] A [SEP] B [SEP]"),Yu.forEach(t),Al.forEach(t),Na.forEach(t),dc=m(dt),uo=r(dt,"DIV",{class:!0});var Ll=i(uo);w(Bn.$$.fragment,Ll),cc=m(Ll),Rt=r(Ll,"P",{});var Wa=i(Rt);pc=s(Wa,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),vr=r(Wa,"CODE",{});var Zu=i(vr);mc=s(Zu,"prepare_for_model"),Zu.forEach(t),hc=s(Wa," or "),Tr=r(Wa,"CODE",{});var eg=i(Tr);fc=s(eg,"encode_plus"),eg.forEach(t),uc=s(Wa," methods."),Wa.forEach(t),Ll.forEach(t),gc=m(dt),nt=r(dt,"DIV",{class:!0});var gn=i(nt);w(An.$$.fragment,gn),_c=m(gn),wr=r(gn,"P",{});var tg=i(wr);bc=s(tg,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),tg.forEach(t),kc=m(gn),w(go.$$.fragment,gn),vc=m(gn),Bt=r(gn,"P",{});var Ha=i(Bt);Tc=s(Ha,"If "),$r=r(Ha,"CODE",{});var og=i($r);wc=s(og,"token_ids_1"),og.forEach(t),$c=s(Ha," is "),yr=r(Ha,"CODE",{});var ng=i(yr);yc=s(ng,"None"),ng.forEach(t),Dc=s(Ha,", this method only returns the first portion of the mask (0s)."),Ha.forEach(t),gn.forEach(t),Ec=m(dt),Da=r(dt,"DIV",{class:!0});var sg=i(Da);w(Ln.$$.fragment,sg),sg.forEach(t),dt.forEach(t),dl=m(o),At=r(o,"H2",{class:!0});var Sl=i(At);_o=r(Sl,"A",{id:!0,class:!0,href:!0});var ag=i(_o);Dr=r(ag,"SPAN",{});var rg=i(Dr);w(Sn.$$.fragment,rg),rg.forEach(t),ag.forEach(t),Fc=m(Sl),Er=r(Sl,"SPAN",{});var ig=i(Er);Vc=s(ig,"DebertaV2TokenizerFast"),ig.forEach(t),Sl.forEach(t),cl=m(o),Xe=r(o,"DIV",{class:!0});var _n=i(Xe);w(In.$$.fragment,_n),qc=m(_n),On=r(_n,"P",{});var Il=i(On);xc=s(Il,"Constructs a DeBERTa-v2 fast tokenizer. Based on "),Nn=r(Il,"A",{href:!0,rel:!0});var lg=i(Nn);zc=s(lg,"SentencePiece"),lg.forEach(t),Mc=s(Il,"."),Il.forEach(t),jc=m(_n),bt=r(_n,"DIV",{class:!0});var Ua=i(bt);w(Wn.$$.fragment,Ua),Cc=m(Ua),Fr=r(Ua,"P",{});var dg=i(Fr);Pc=s(dg,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),dg.forEach(t),Rc=m(Ua),Hn=r(Ua,"UL",{});var Ol=i(Hn);Vr=r(Ol,"LI",{});var cg=i(Vr);Bc=s(cg,"single sequence: [CLS] X [SEP]"),cg.forEach(t),Ac=m(Ol),qr=r(Ol,"LI",{});var pg=i(qr);Lc=s(pg,"pair of sequences: [CLS] A [SEP] B [SEP]"),pg.forEach(t),Ol.forEach(t),Ua.forEach(t),Sc=m(_n),st=r(_n,"DIV",{class:!0});var bn=i(st);w(Un.$$.fragment,bn),Ic=m(bn),xr=r(bn,"P",{});var mg=i(xr);Oc=s(mg,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),mg.forEach(t),Nc=m(bn),w(bo.$$.fragment,bn),Wc=m(bn),Lt=r(bn,"P",{});var Qa=i(Lt);Hc=s(Qa,"If "),zr=r(Qa,"CODE",{});var hg=i(zr);Uc=s(hg,"token_ids_1"),hg.forEach(t),Qc=s(Qa," is "),Mr=r(Qa,"CODE",{});var fg=i(Mr);Gc=s(fg,"None"),fg.forEach(t),Kc=s(Qa,", this method only returns the first portion of the mask (0s)."),Qa.forEach(t),bn.forEach(t),_n.forEach(t),pl=m(o),St=r(o,"H2",{class:!0});var Nl=i(St);ko=r(Nl,"A",{id:!0,class:!0,href:!0});var ug=i(ko);jr=r(ug,"SPAN",{});var gg=i(jr);w(Qn.$$.fragment,gg),gg.forEach(t),ug.forEach(t),Jc=m(Nl),Cr=r(Nl,"SPAN",{});var _g=i(Cr);Xc=s(_g,"DebertaV2Model"),_g.forEach(t),Nl.forEach(t),ml=m(o),Ye=r(o,"DIV",{class:!0});var kn=i(Ye);w(Gn.$$.fragment,kn),Yc=m(kn),Kn=r(kn,"P",{});var Wl=i(Kn);Zc=s(Wl,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Jn=r(Wl,"A",{href:!0,rel:!0});var bg=i(Jn);ep=s(bg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),bg.forEach(t),tp=s(Wl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Wl.forEach(t),op=m(kn),Xn=r(kn,"P",{});var Hl=i(Xn);np=s(Hl,"This model is also a PyTorch "),Yn=r(Hl,"A",{href:!0,rel:!0});var kg=i(Yn);sp=s(kg,"torch.nn.Module"),kg.forEach(t),ap=s(Hl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Hl.forEach(t),rp=m(kn),at=r(kn,"DIV",{class:!0});var vn=i(at);w(Zn.$$.fragment,vn),ip=m(vn),It=r(vn,"P",{});var Ga=i(It);lp=s(Ga,"The "),Ea=r(Ga,"A",{href:!0});var vg=i(Ea);dp=s(vg,"DebertaV2Model"),vg.forEach(t),cp=s(Ga," forward method, overrides the "),Pr=r(Ga,"CODE",{});var Tg=i(Pr);pp=s(Tg,"__call__"),Tg.forEach(t),mp=s(Ga," special method."),Ga.forEach(t),hp=m(vn),w(vo.$$.fragment,vn),fp=m(vn),w(To.$$.fragment,vn),vn.forEach(t),kn.forEach(t),hl=m(o),Ot=r(o,"H2",{class:!0});var Ul=i(Ot);wo=r(Ul,"A",{id:!0,class:!0,href:!0});var wg=i(wo);Rr=r(wg,"SPAN",{});var $g=i(Rr);w(es.$$.fragment,$g),$g.forEach(t),wg.forEach(t),up=m(Ul),Br=r(Ul,"SPAN",{});var yg=i(Br);gp=s(yg,"DebertaV2PreTrainedModel"),yg.forEach(t),Ul.forEach(t),fl=m(o),ft=r(o,"DIV",{class:!0});var Ka=i(ft);w(ts.$$.fragment,Ka),_p=m(Ka),Ar=r(Ka,"P",{});var Dg=i(Ar);bp=s(Dg,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Dg.forEach(t),kp=m(Ka),rt=r(Ka,"DIV",{class:!0});var Tn=i(rt);w(os.$$.fragment,Tn),vp=m(Tn),Lr=r(Tn,"P",{});var Eg=i(Lr);Tp=s(Eg,"Defines the computation performed at every call."),Eg.forEach(t),wp=m(Tn),Sr=r(Tn,"P",{});var Fg=i(Sr);$p=s(Fg,"Should be overridden by all subclasses."),Fg.forEach(t),yp=m(Tn),w($o.$$.fragment,Tn),Tn.forEach(t),Ka.forEach(t),ul=m(o),Nt=r(o,"H2",{class:!0});var Ql=i(Nt);yo=r(Ql,"A",{id:!0,class:!0,href:!0});var Vg=i(yo);Ir=r(Vg,"SPAN",{});var qg=i(Ir);w(ns.$$.fragment,qg),qg.forEach(t),Vg.forEach(t),Dp=m(Ql),Or=r(Ql,"SPAN",{});var xg=i(Or);Ep=s(xg,"DebertaV2ForMaskedLM"),xg.forEach(t),Ql.forEach(t),gl=m(o),Ze=r(o,"DIV",{class:!0});var wn=i(Ze);w(ss.$$.fragment,wn),Fp=m(wn),Wt=r(wn,"P",{});var Ja=i(Wt);Vp=s(Ja,"DeBERTa Model with a "),Nr=r(Ja,"CODE",{});var zg=i(Nr);qp=s(zg,"language modeling"),zg.forEach(t),xp=s(Ja,` head on top.
The DeBERTa model was proposed in `),as=r(Ja,"A",{href:!0,rel:!0});var Mg=i(as);zp=s(Mg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Mg.forEach(t),Mp=s(Ja,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ja.forEach(t),jp=m(wn),rs=r(wn,"P",{});var Gl=i(rs);Cp=s(Gl,"This model is also a PyTorch "),is=r(Gl,"A",{href:!0,rel:!0});var jg=i(is);Pp=s(jg,"torch.nn.Module"),jg.forEach(t),Rp=s(Gl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Gl.forEach(t),Bp=m(wn),Ne=r(wn,"DIV",{class:!0});var kt=i(Ne);w(ls.$$.fragment,kt),Ap=m(kt),Ht=r(kt,"P",{});var Xa=i(Ht);Lp=s(Xa,"The "),Fa=r(Xa,"A",{href:!0});var Cg=i(Fa);Sp=s(Cg,"DebertaV2ForMaskedLM"),Cg.forEach(t),Ip=s(Xa," forward method, overrides the "),Wr=r(Xa,"CODE",{});var Pg=i(Wr);Op=s(Pg,"__call__"),Pg.forEach(t),Np=s(Xa," special method."),Xa.forEach(t),Wp=m(kt),w(Do.$$.fragment,kt),Hp=m(kt),w(Eo.$$.fragment,kt),Up=m(kt),w(Fo.$$.fragment,kt),kt.forEach(t),wn.forEach(t),_l=m(o),Ut=r(o,"H2",{class:!0});var Kl=i(Ut);Vo=r(Kl,"A",{id:!0,class:!0,href:!0});var Rg=i(Vo);Hr=r(Rg,"SPAN",{});var Bg=i(Hr);w(ds.$$.fragment,Bg),Bg.forEach(t),Rg.forEach(t),Qp=m(Kl),Ur=r(Kl,"SPAN",{});var Ag=i(Ur);Gp=s(Ag,"DebertaV2ForSequenceClassification"),Ag.forEach(t),Kl.forEach(t),bl=m(o),Ae=r(o,"DIV",{class:!0});var vt=i(Ae);w(cs.$$.fragment,vt),Kp=m(vt),Qr=r(vt,"P",{});var Lg=i(Qr);Jp=s(Lg,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Lg.forEach(t),Xp=m(vt),ps=r(vt,"P",{});var Jl=i(ps);Yp=s(Jl,"The DeBERTa model was proposed in "),ms=r(Jl,"A",{href:!0,rel:!0});var Sg=i(ms);Zp=s(Sg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Sg.forEach(t),em=s(Jl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Jl.forEach(t),tm=m(vt),hs=r(vt,"P",{});var Xl=i(hs);om=s(Xl,"This model is also a PyTorch "),fs=r(Xl,"A",{href:!0,rel:!0});var Ig=i(fs);nm=s(Ig,"torch.nn.Module"),Ig.forEach(t),sm=s(Xl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Xl.forEach(t),am=m(vt),ze=r(vt,"DIV",{class:!0});var Je=i(ze);w(us.$$.fragment,Je),rm=m(Je),Qt=r(Je,"P",{});var Ya=i(Qt);im=s(Ya,"The "),Va=r(Ya,"A",{href:!0});var Og=i(Va);lm=s(Og,"DebertaV2ForSequenceClassification"),Og.forEach(t),dm=s(Ya," forward method, overrides the "),Gr=r(Ya,"CODE",{});var Ng=i(Gr);cm=s(Ng,"__call__"),Ng.forEach(t),pm=s(Ya," special method."),Ya.forEach(t),mm=m(Je),w(qo.$$.fragment,Je),hm=m(Je),w(xo.$$.fragment,Je),fm=m(Je),w(zo.$$.fragment,Je),um=m(Je),w(Mo.$$.fragment,Je),gm=m(Je),w(jo.$$.fragment,Je),Je.forEach(t),vt.forEach(t),kl=m(o),Gt=r(o,"H2",{class:!0});var Yl=i(Gt);Co=r(Yl,"A",{id:!0,class:!0,href:!0});var Wg=i(Co);Kr=r(Wg,"SPAN",{});var Hg=i(Kr);w(gs.$$.fragment,Hg),Hg.forEach(t),Wg.forEach(t),_m=m(Yl),Jr=r(Yl,"SPAN",{});var Ug=i(Jr);bm=s(Ug,"DebertaV2ForTokenClassification"),Ug.forEach(t),Yl.forEach(t),vl=m(o),Le=r(o,"DIV",{class:!0});var Tt=i(Le);w(_s.$$.fragment,Tt),km=m(Tt),Xr=r(Tt,"P",{});var Qg=i(Xr);vm=s(Qg,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Qg.forEach(t),Tm=m(Tt),bs=r(Tt,"P",{});var Zl=i(bs);wm=s(Zl,"The DeBERTa model was proposed in "),ks=r(Zl,"A",{href:!0,rel:!0});var Gg=i(ks);$m=s(Gg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Gg.forEach(t),ym=s(Zl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Zl.forEach(t),Dm=m(Tt),vs=r(Tt,"P",{});var ed=i(vs);Em=s(ed,"This model is also a PyTorch "),Ts=r(ed,"A",{href:!0,rel:!0});var Kg=i(Ts);Fm=s(Kg,"torch.nn.Module"),Kg.forEach(t),Vm=s(ed," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),ed.forEach(t),qm=m(Tt),We=r(Tt,"DIV",{class:!0});var wt=i(We);w(ws.$$.fragment,wt),xm=m(wt),Kt=r(wt,"P",{});var Za=i(Kt);zm=s(Za,"The "),qa=r(Za,"A",{href:!0});var Jg=i(qa);Mm=s(Jg,"DebertaV2ForTokenClassification"),Jg.forEach(t),jm=s(Za," forward method, overrides the "),Yr=r(Za,"CODE",{});var Xg=i(Yr);Cm=s(Xg,"__call__"),Xg.forEach(t),Pm=s(Za," special method."),Za.forEach(t),Rm=m(wt),w(Po.$$.fragment,wt),Bm=m(wt),w(Ro.$$.fragment,wt),Am=m(wt),w(Bo.$$.fragment,wt),wt.forEach(t),Tt.forEach(t),Tl=m(o),Jt=r(o,"H2",{class:!0});var td=i(Jt);Ao=r(td,"A",{id:!0,class:!0,href:!0});var Yg=i(Ao);Zr=r(Yg,"SPAN",{});var Zg=i(Zr);w($s.$$.fragment,Zg),Zg.forEach(t),Yg.forEach(t),Lm=m(td),ei=r(td,"SPAN",{});var e_=i(ei);Sm=s(e_,"DebertaV2ForQuestionAnswering"),e_.forEach(t),td.forEach(t),wl=m(o),Se=r(o,"DIV",{class:!0});var $t=i(Se);w(ys.$$.fragment,$t),Im=m($t),Xt=r($t,"P",{});var er=i(Xt);Om=s(er,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ti=r(er,"CODE",{});var t_=i(ti);Nm=s(t_,"span start logits"),t_.forEach(t),Wm=s(er," and "),oi=r(er,"CODE",{});var o_=i(oi);Hm=s(o_,"span end logits"),o_.forEach(t),Um=s(er,")."),er.forEach(t),Qm=m($t),Ds=r($t,"P",{});var od=i(Ds);Gm=s(od,"The DeBERTa model was proposed in "),Es=r(od,"A",{href:!0,rel:!0});var n_=i(Es);Km=s(n_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),n_.forEach(t),Jm=s(od,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),od.forEach(t),Xm=m($t),Fs=r($t,"P",{});var nd=i(Fs);Ym=s(nd,"This model is also a PyTorch "),Vs=r(nd,"A",{href:!0,rel:!0});var s_=i(Vs);Zm=s(s_,"torch.nn.Module"),s_.forEach(t),eh=s(nd," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),nd.forEach(t),th=m($t),He=r($t,"DIV",{class:!0});var yt=i(He);w(qs.$$.fragment,yt),oh=m(yt),Yt=r(yt,"P",{});var tr=i(Yt);nh=s(tr,"The "),xa=r(tr,"A",{href:!0});var a_=i(xa);sh=s(a_,"DebertaV2ForQuestionAnswering"),a_.forEach(t),ah=s(tr," forward method, overrides the "),ni=r(tr,"CODE",{});var r_=i(ni);rh=s(r_,"__call__"),r_.forEach(t),ih=s(tr," special method."),tr.forEach(t),lh=m(yt),w(Lo.$$.fragment,yt),dh=m(yt),w(So.$$.fragment,yt),ch=m(yt),w(Io.$$.fragment,yt),yt.forEach(t),$t.forEach(t),$l=m(o),Zt=r(o,"H2",{class:!0});var sd=i(Zt);Oo=r(sd,"A",{id:!0,class:!0,href:!0});var i_=i(Oo);si=r(i_,"SPAN",{});var l_=i(si);w(xs.$$.fragment,l_),l_.forEach(t),i_.forEach(t),ph=m(sd),ai=r(sd,"SPAN",{});var d_=i(ai);mh=s(d_,"TFDebertaV2Model"),d_.forEach(t),sd.forEach(t),yl=m(o),Ie=r(o,"DIV",{class:!0});var Dt=i(Ie);w(zs.$$.fragment,Dt),hh=m(Dt),Ms=r(Dt,"P",{});var ad=i(Ms);fh=s(ad,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),js=r(ad,"A",{href:!0,rel:!0});var c_=i(js);uh=s(c_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),c_.forEach(t),gh=s(ad,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ad.forEach(t),_h=m(Dt),Cs=r(Dt,"P",{});var rd=i(Cs);bh=s(rd,"This model is also a "),Ps=r(rd,"A",{href:!0,rel:!0});var p_=i(Ps);kh=s(p_,"tf.keras.Model"),p_.forEach(t),vh=s(rd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rd.forEach(t),Th=m(Dt),w(No.$$.fragment,Dt),wh=m(Dt),it=r(Dt,"DIV",{class:!0});var $n=i(it);w(Rs.$$.fragment,$n),$h=m($n),eo=r($n,"P",{});var or=i(eo);yh=s(or,"The "),za=r(or,"A",{href:!0});var m_=i(za);Dh=s(m_,"TFDebertaV2Model"),m_.forEach(t),Eh=s(or," forward method, overrides the "),ri=r(or,"CODE",{});var h_=i(ri);Fh=s(h_,"__call__"),h_.forEach(t),Vh=s(or," special method."),or.forEach(t),qh=m($n),w(Wo.$$.fragment,$n),xh=m($n),w(Ho.$$.fragment,$n),$n.forEach(t),Dt.forEach(t),Dl=m(o),to=r(o,"H2",{class:!0});var id=i(to);Uo=r(id,"A",{id:!0,class:!0,href:!0});var f_=i(Uo);ii=r(f_,"SPAN",{});var u_=i(ii);w(Bs.$$.fragment,u_),u_.forEach(t),f_.forEach(t),zh=m(id),li=r(id,"SPAN",{});var g_=i(li);Mh=s(g_,"TFDebertaV2PreTrainedModel"),g_.forEach(t),id.forEach(t),El=m(o),ut=r(o,"DIV",{class:!0});var nr=i(ut);w(As.$$.fragment,nr),jh=m(nr),di=r(nr,"P",{});var __=i(di);Ch=s(__,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),__.forEach(t),Ph=m(nr),lt=r(nr,"DIV",{class:!0});var yn=i(lt);w(Ls.$$.fragment,yn),Rh=m(yn),ci=r(yn,"P",{});var b_=i(ci);Bh=s(b_,"Calls the model on new inputs and returns the outputs as tensors."),b_.forEach(t),Ah=m(yn),Ss=r(yn,"P",{});var ld=i(Ss);Lh=s(ld,"In this case "),pi=r(ld,"CODE",{});var k_=i(pi);Sh=s(k_,"call()"),k_.forEach(t),Ih=s(ld,` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),ld.forEach(t),Oh=m(yn),et=r(yn,"P",{});var Et=i(et);Nh=s(Et,`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),mi=r(Et,"CODE",{});var v_=i(mi);Wh=s(v_,"tf.keras.Model"),v_.forEach(t),Hh=s(Et,`.
To call a model on an input, always use the `),hi=r(Et,"CODE",{});var T_=i(hi);Uh=s(T_,"__call__()"),T_.forEach(t),Qh=s(Et,` method,
i.e. `),fi=r(Et,"CODE",{});var w_=i(fi);Gh=s(w_,"model(inputs)"),w_.forEach(t),Kh=s(Et,", which relies on the underlying "),ui=r(Et,"CODE",{});var $_=i(ui);Jh=s($_,"call()"),$_.forEach(t),Xh=s(Et," method."),Et.forEach(t),yn.forEach(t),nr.forEach(t),Fl=m(o),oo=r(o,"H2",{class:!0});var dd=i(oo);Qo=r(dd,"A",{id:!0,class:!0,href:!0});var y_=i(Qo);gi=r(y_,"SPAN",{});var D_=i(gi);w(Is.$$.fragment,D_),D_.forEach(t),y_.forEach(t),Yh=m(dd),_i=r(dd,"SPAN",{});var E_=i(_i);Zh=s(E_,"TFDebertaV2ForMaskedLM"),E_.forEach(t),dd.forEach(t),Vl=m(o),Oe=r(o,"DIV",{class:!0});var Ft=i(Oe);w(Os.$$.fragment,Ft),ef=m(Ft),no=r(Ft,"P",{});var sr=i(no);tf=s(sr,"DeBERTa Model with a "),bi=r(sr,"CODE",{});var F_=i(bi);of=s(F_,"language modeling"),F_.forEach(t),nf=s(sr,` head on top.
The DeBERTa model was proposed in `),Ns=r(sr,"A",{href:!0,rel:!0});var V_=i(Ns);sf=s(V_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),V_.forEach(t),af=s(sr,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),sr.forEach(t),rf=m(Ft),Ws=r(Ft,"P",{});var cd=i(Ws);lf=s(cd,"This model is also a "),Hs=r(cd,"A",{href:!0,rel:!0});var q_=i(Hs);df=s(q_,"tf.keras.Model"),q_.forEach(t),cf=s(cd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cd.forEach(t),pf=m(Ft),w(Go.$$.fragment,Ft),mf=m(Ft),Ue=r(Ft,"DIV",{class:!0});var Vt=i(Ue);w(Us.$$.fragment,Vt),hf=m(Vt),so=r(Vt,"P",{});var ar=i(so);ff=s(ar,"The "),Ma=r(ar,"A",{href:!0});var x_=i(Ma);uf=s(x_,"TFDebertaV2ForMaskedLM"),x_.forEach(t),gf=s(ar," forward method, overrides the "),ki=r(ar,"CODE",{});var z_=i(ki);_f=s(z_,"__call__"),z_.forEach(t),bf=s(ar," special method."),ar.forEach(t),kf=m(Vt),w(Ko.$$.fragment,Vt),vf=m(Vt),w(Jo.$$.fragment,Vt),Tf=m(Vt),w(Xo.$$.fragment,Vt),Vt.forEach(t),Ft.forEach(t),ql=m(o),ao=r(o,"H2",{class:!0});var pd=i(ao);Yo=r(pd,"A",{id:!0,class:!0,href:!0});var M_=i(Yo);vi=r(M_,"SPAN",{});var j_=i(vi);w(Qs.$$.fragment,j_),j_.forEach(t),M_.forEach(t),wf=m(pd),Ti=r(pd,"SPAN",{});var C_=i(Ti);$f=s(C_,"TFDebertaV2ForSequenceClassification"),C_.forEach(t),pd.forEach(t),xl=m(o),je=r(o,"DIV",{class:!0});var ct=i(je);w(Gs.$$.fragment,ct),yf=m(ct),wi=r(ct,"P",{});var P_=i(wi);Df=s(P_,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),P_.forEach(t),Ef=m(ct),Ks=r(ct,"P",{});var md=i(Ks);Ff=s(md,"The DeBERTa model was proposed in "),Js=r(md,"A",{href:!0,rel:!0});var R_=i(Js);Vf=s(R_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),R_.forEach(t),qf=s(md,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),md.forEach(t),xf=m(ct),Xs=r(ct,"P",{});var hd=i(Xs);zf=s(hd,"This model is also a "),Ys=r(hd,"A",{href:!0,rel:!0});var B_=i(Ys);Mf=s(B_,"tf.keras.Model"),B_.forEach(t),jf=s(hd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hd.forEach(t),Cf=m(ct),w(Zo.$$.fragment,ct),Pf=m(ct),Qe=r(ct,"DIV",{class:!0});var qt=i(Qe);w(Zs.$$.fragment,qt),Rf=m(qt),ro=r(qt,"P",{});var rr=i(ro);Bf=s(rr,"The "),ja=r(rr,"A",{href:!0});var A_=i(ja);Af=s(A_,"TFDebertaV2ForSequenceClassification"),A_.forEach(t),Lf=s(rr," forward method, overrides the "),$i=r(rr,"CODE",{});var L_=i($i);Sf=s(L_,"__call__"),L_.forEach(t),If=s(rr," special method."),rr.forEach(t),Of=m(qt),w(en.$$.fragment,qt),Nf=m(qt),w(tn.$$.fragment,qt),Wf=m(qt),w(on.$$.fragment,qt),qt.forEach(t),ct.forEach(t),zl=m(o),io=r(o,"H2",{class:!0});var fd=i(io);nn=r(fd,"A",{id:!0,class:!0,href:!0});var S_=i(nn);yi=r(S_,"SPAN",{});var I_=i(yi);w(ea.$$.fragment,I_),I_.forEach(t),S_.forEach(t),Hf=m(fd),Di=r(fd,"SPAN",{});var O_=i(Di);Uf=s(O_,"TFDebertaV2ForTokenClassification"),O_.forEach(t),fd.forEach(t),Ml=m(o),Ce=r(o,"DIV",{class:!0});var pt=i(Ce);w(ta.$$.fragment,pt),Qf=m(pt),Ei=r(pt,"P",{});var N_=i(Ei);Gf=s(N_,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),N_.forEach(t),Kf=m(pt),oa=r(pt,"P",{});var ud=i(oa);Jf=s(ud,"The DeBERTa model was proposed in "),na=r(ud,"A",{href:!0,rel:!0});var W_=i(na);Xf=s(W_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),W_.forEach(t),Yf=s(ud,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ud.forEach(t),Zf=m(pt),sa=r(pt,"P",{});var gd=i(sa);eu=s(gd,"This model is also a "),aa=r(gd,"A",{href:!0,rel:!0});var H_=i(aa);tu=s(H_,"tf.keras.Model"),H_.forEach(t),ou=s(gd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gd.forEach(t),nu=m(pt),w(sn.$$.fragment,pt),su=m(pt),Ge=r(pt,"DIV",{class:!0});var xt=i(Ge);w(ra.$$.fragment,xt),au=m(xt),lo=r(xt,"P",{});var ir=i(lo);ru=s(ir,"The "),Ca=r(ir,"A",{href:!0});var U_=i(Ca);iu=s(U_,"TFDebertaV2ForTokenClassification"),U_.forEach(t),lu=s(ir," forward method, overrides the "),Fi=r(ir,"CODE",{});var Q_=i(Fi);du=s(Q_,"__call__"),Q_.forEach(t),cu=s(ir," special method."),ir.forEach(t),pu=m(xt),w(an.$$.fragment,xt),mu=m(xt),w(rn.$$.fragment,xt),hu=m(xt),w(ln.$$.fragment,xt),xt.forEach(t),pt.forEach(t),jl=m(o),co=r(o,"H2",{class:!0});var _d=i(co);dn=r(_d,"A",{id:!0,class:!0,href:!0});var G_=i(dn);Vi=r(G_,"SPAN",{});var K_=i(Vi);w(ia.$$.fragment,K_),K_.forEach(t),G_.forEach(t),fu=m(_d),qi=r(_d,"SPAN",{});var J_=i(qi);uu=s(J_,"TFDebertaV2ForQuestionAnswering"),J_.forEach(t),_d.forEach(t),Cl=m(o),Pe=r(o,"DIV",{class:!0});var mt=i(Pe);w(la.$$.fragment,mt),gu=m(mt),po=r(mt,"P",{});var lr=i(po);_u=s(lr,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),xi=r(lr,"CODE",{});var X_=i(xi);bu=s(X_,"span start logits"),X_.forEach(t),ku=s(lr," and "),zi=r(lr,"CODE",{});var Y_=i(zi);vu=s(Y_,"span end logits"),Y_.forEach(t),Tu=s(lr,")."),lr.forEach(t),wu=m(mt),da=r(mt,"P",{});var bd=i(da);$u=s(bd,"The DeBERTa model was proposed in "),ca=r(bd,"A",{href:!0,rel:!0});var Z_=i(ca);yu=s(Z_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Z_.forEach(t),Du=s(bd,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),bd.forEach(t),Eu=m(mt),pa=r(mt,"P",{});var kd=i(pa);Fu=s(kd,"This model is also a "),ma=r(kd,"A",{href:!0,rel:!0});var eb=i(ma);Vu=s(eb,"tf.keras.Model"),eb.forEach(t),qu=s(kd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kd.forEach(t),xu=m(mt),w(cn.$$.fragment,mt),zu=m(mt),Ke=r(mt,"DIV",{class:!0});var zt=i(Ke);w(ha.$$.fragment,zt),Mu=m(zt),mo=r(zt,"P",{});var dr=i(mo);ju=s(dr,"The "),Pa=r(dr,"A",{href:!0});var tb=i(Pa);Cu=s(tb,"TFDebertaV2ForQuestionAnswering"),tb.forEach(t),Pu=s(dr," forward method, overrides the "),Mi=r(dr,"CODE",{});var ob=i(Mi);Ru=s(ob,"__call__"),ob.forEach(t),Bu=s(dr," special method."),dr.forEach(t),Au=m(zt),w(pn.$$.fragment,zt),Lu=m(zt),w(mn.$$.fragment,zt),Su=m(zt),w(hn.$$.fragment,zt),zt.forEach(t),mt.forEach(t),this.h()},h(){u(l,"name","hf:doc:metadata"),u(l,"content",JSON.stringify(Qb)),u(h,"id","debertav2"),u(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(h,"href","#debertav2"),u(c,"class","relative group"),u(Y,"id","overview"),u(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Y,"href","#overview"),u(x,"class","relative group"),u(te,"href","https://arxiv.org/abs/2006.03654"),u(te,"rel","nofollow"),u(A,"href","https://github.com/microsoft/DeBERTa"),u(A,"rel","nofollow"),u(P,"href","https://github.com/microsoft/DeBERTa"),u(P,"rel","nofollow"),u(oe,"href","https://www.microsoft.com/en-us/research/blog/microsoft-deberta-surpasses-human-performance-on-the-superglue-benchmark/"),u(oe,"rel","nofollow"),u(L,"href","https://github.com/google/sentencepiece"),u(L,"rel","nofollow"),u(Dn,"href","https://huggingface.co/DeBERTa"),u(Dn,"rel","nofollow"),u(En,"href","https://huggingface.co/kamalkraj"),u(En,"rel","nofollow"),u(Fn,"href","https://github.com/microsoft/DeBERTa"),u(Fn,"rel","nofollow"),u(ho,"id","transformers.DebertaV2Config"),u(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ho,"href","#transformers.DebertaV2Config"),u(Mt,"class","relative group"),u(wa,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Model"),u(xn,"href","https://huggingface.co/microsoft/deberta-v2-xlarge"),u(xn,"rel","nofollow"),u($a,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(ya,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fo,"id","transformers.DebertaV2Tokenizer"),u(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(fo,"href","#transformers.DebertaV2Tokenizer"),u(Pt,"class","relative group"),u(Cn,"href","https://github.com/google/sentencepiece"),u(Cn,"rel","nofollow"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Da,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_o,"id","transformers.DebertaV2TokenizerFast"),u(_o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_o,"href","#transformers.DebertaV2TokenizerFast"),u(At,"class","relative group"),u(Nn,"href","https://github.com/google/sentencepiece"),u(Nn,"rel","nofollow"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ko,"id","transformers.DebertaV2Model"),u(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ko,"href","#transformers.DebertaV2Model"),u(St,"class","relative group"),u(Jn,"href","https://arxiv.org/abs/2006.03654"),u(Jn,"rel","nofollow"),u(Yn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Yn,"rel","nofollow"),u(Ea,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Model"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wo,"id","transformers.DebertaV2PreTrainedModel"),u(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(wo,"href","#transformers.DebertaV2PreTrainedModel"),u(Ot,"class","relative group"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(yo,"id","transformers.DebertaV2ForMaskedLM"),u(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(yo,"href","#transformers.DebertaV2ForMaskedLM"),u(Nt,"class","relative group"),u(as,"href","https://arxiv.org/abs/2006.03654"),u(as,"rel","nofollow"),u(is,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(is,"rel","nofollow"),u(Fa,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2ForMaskedLM"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vo,"id","transformers.DebertaV2ForSequenceClassification"),u(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Vo,"href","#transformers.DebertaV2ForSequenceClassification"),u(Ut,"class","relative group"),u(ms,"href","https://arxiv.org/abs/2006.03654"),u(ms,"rel","nofollow"),u(fs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(fs,"rel","nofollow"),u(Va,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2ForSequenceClassification"),u(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Co,"id","transformers.DebertaV2ForTokenClassification"),u(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Co,"href","#transformers.DebertaV2ForTokenClassification"),u(Gt,"class","relative group"),u(ks,"href","https://arxiv.org/abs/2006.03654"),u(ks,"rel","nofollow"),u(Ts,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ts,"rel","nofollow"),u(qa,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2ForTokenClassification"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ao,"id","transformers.DebertaV2ForQuestionAnswering"),u(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ao,"href","#transformers.DebertaV2ForQuestionAnswering"),u(Jt,"class","relative group"),u(Es,"href","https://arxiv.org/abs/2006.03654"),u(Es,"rel","nofollow"),u(Vs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Vs,"rel","nofollow"),u(xa,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2ForQuestionAnswering"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oo,"id","transformers.TFDebertaV2Model"),u(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Oo,"href","#transformers.TFDebertaV2Model"),u(Zt,"class","relative group"),u(js,"href","https://arxiv.org/abs/2006.03654"),u(js,"rel","nofollow"),u(Ps,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ps,"rel","nofollow"),u(za,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.TFDebertaV2Model"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Uo,"id","transformers.TFDebertaV2PreTrainedModel"),u(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Uo,"href","#transformers.TFDebertaV2PreTrainedModel"),u(to,"class","relative group"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qo,"id","transformers.TFDebertaV2ForMaskedLM"),u(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Qo,"href","#transformers.TFDebertaV2ForMaskedLM"),u(oo,"class","relative group"),u(Ns,"href","https://arxiv.org/abs/2006.03654"),u(Ns,"rel","nofollow"),u(Hs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Hs,"rel","nofollow"),u(Ma,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.TFDebertaV2ForMaskedLM"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Yo,"id","transformers.TFDebertaV2ForSequenceClassification"),u(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Yo,"href","#transformers.TFDebertaV2ForSequenceClassification"),u(ao,"class","relative group"),u(Js,"href","https://arxiv.org/abs/2006.03654"),u(Js,"rel","nofollow"),u(Ys,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ys,"rel","nofollow"),u(ja,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.TFDebertaV2ForSequenceClassification"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nn,"id","transformers.TFDebertaV2ForTokenClassification"),u(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(nn,"href","#transformers.TFDebertaV2ForTokenClassification"),u(io,"class","relative group"),u(na,"href","https://arxiv.org/abs/2006.03654"),u(na,"rel","nofollow"),u(aa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(aa,"rel","nofollow"),u(Ca,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.TFDebertaV2ForTokenClassification"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dn,"id","transformers.TFDebertaV2ForQuestionAnswering"),u(dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(dn,"href","#transformers.TFDebertaV2ForQuestionAnswering"),u(co,"class","relative group"),u(ca,"href","https://arxiv.org/abs/2006.03654"),u(ca,"rel","nofollow"),u(ma,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ma,"rel","nofollow"),u(Pa,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.TFDebertaV2ForQuestionAnswering"),u(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,b){e(document.head,l),_(o,g,b),_(o,c,b),e(c,h),e(h,v),$(d,v,null),e(c,f),e(c,q),e(q,de),_(o,J,b),_(o,x,b),e(x,Y),e(Y,S),$(ee,S,null),e(x,ce),e(x,I),e(I,pe),_(o,re,b),_(o,N,b),e(N,R),e(N,te),e(te,Z),e(N,z),_(o,j,b),_(o,ne,b),e(ne,W),_(o,ie,b),_(o,se,b),e(se,H),_(o,le,b),_(o,ae,b),e(ae,M),e(M,me),e(M,A),e(A,he),e(M,fe),_(o,O,b),_(o,X,b),e(X,ue),e(X,P),e(P,ge),e(X,U),e(X,oe),e(oe,k),_(o,V,b),_(o,K,b),e(K,Ee),_(o,De,b),_(o,C,b),e(C,_e),e(_e,$e),e($e,Fe),e(_e,B),e(_e,L),e(L,Ve),e(_e,qe),e(C,Q),e(C,we),e(we,ye),e(ye,be),e(we,xe),e(C,vd),e(C,ka),e(ka,cr),e(cr,Td),e(ka,wd),e(C,$d),e(C,va),e(va,pr),e(pr,yd),e(va,Dd),e(C,Ed),e(C,Ta),e(Ta,mr),e(mr,Fd),e(Ta,Vd),_(o,sl,b),_(o,ot,b),e(ot,qd),e(ot,Dn),e(Dn,xd),e(ot,zd),e(ot,En),e(En,Md),e(ot,jd),e(ot,Fn),e(Fn,Cd),e(ot,Pd),_(o,al,b),_(o,Mt,b),e(Mt,ho),e(ho,hr),$(Vn,hr,null),e(Mt,Rd),e(Mt,fr),e(fr,Bd),_(o,rl,b),_(o,ht,b),$(qn,ht,null),e(ht,Ad),e(ht,jt),e(jt,Ld),e(jt,wa),e(wa,Sd),e(jt,Id),e(jt,xn),e(xn,Od),e(jt,Nd),e(ht,Wd),e(ht,Ct),e(Ct,Hd),e(Ct,$a),e($a,Ud),e(Ct,Qd),e(Ct,ya),e(ya,Gd),e(Ct,Kd),_(o,il,b),_(o,Pt,b),e(Pt,fo),e(fo,ur),$(zn,ur,null),e(Pt,Jd),e(Pt,gr),e(gr,Xd),_(o,ll,b),_(o,Me,b),$(Mn,Me,null),e(Me,Yd),e(Me,jn),e(jn,Zd),e(jn,Cn),e(Cn,ec),e(jn,tc),e(Me,oc),e(Me,_t),$(Pn,_t,null),e(_t,nc),e(_t,_r),e(_r,sc),e(_t,ac),e(_t,Rn),e(Rn,br),e(br,rc),e(Rn,ic),e(Rn,kr),e(kr,lc),e(Me,dc),e(Me,uo),$(Bn,uo,null),e(uo,cc),e(uo,Rt),e(Rt,pc),e(Rt,vr),e(vr,mc),e(Rt,hc),e(Rt,Tr),e(Tr,fc),e(Rt,uc),e(Me,gc),e(Me,nt),$(An,nt,null),e(nt,_c),e(nt,wr),e(wr,bc),e(nt,kc),$(go,nt,null),e(nt,vc),e(nt,Bt),e(Bt,Tc),e(Bt,$r),e($r,wc),e(Bt,$c),e(Bt,yr),e(yr,yc),e(Bt,Dc),e(Me,Ec),e(Me,Da),$(Ln,Da,null),_(o,dl,b),_(o,At,b),e(At,_o),e(_o,Dr),$(Sn,Dr,null),e(At,Fc),e(At,Er),e(Er,Vc),_(o,cl,b),_(o,Xe,b),$(In,Xe,null),e(Xe,qc),e(Xe,On),e(On,xc),e(On,Nn),e(Nn,zc),e(On,Mc),e(Xe,jc),e(Xe,bt),$(Wn,bt,null),e(bt,Cc),e(bt,Fr),e(Fr,Pc),e(bt,Rc),e(bt,Hn),e(Hn,Vr),e(Vr,Bc),e(Hn,Ac),e(Hn,qr),e(qr,Lc),e(Xe,Sc),e(Xe,st),$(Un,st,null),e(st,Ic),e(st,xr),e(xr,Oc),e(st,Nc),$(bo,st,null),e(st,Wc),e(st,Lt),e(Lt,Hc),e(Lt,zr),e(zr,Uc),e(Lt,Qc),e(Lt,Mr),e(Mr,Gc),e(Lt,Kc),_(o,pl,b),_(o,St,b),e(St,ko),e(ko,jr),$(Qn,jr,null),e(St,Jc),e(St,Cr),e(Cr,Xc),_(o,ml,b),_(o,Ye,b),$(Gn,Ye,null),e(Ye,Yc),e(Ye,Kn),e(Kn,Zc),e(Kn,Jn),e(Jn,ep),e(Kn,tp),e(Ye,op),e(Ye,Xn),e(Xn,np),e(Xn,Yn),e(Yn,sp),e(Xn,ap),e(Ye,rp),e(Ye,at),$(Zn,at,null),e(at,ip),e(at,It),e(It,lp),e(It,Ea),e(Ea,dp),e(It,cp),e(It,Pr),e(Pr,pp),e(It,mp),e(at,hp),$(vo,at,null),e(at,fp),$(To,at,null),_(o,hl,b),_(o,Ot,b),e(Ot,wo),e(wo,Rr),$(es,Rr,null),e(Ot,up),e(Ot,Br),e(Br,gp),_(o,fl,b),_(o,ft,b),$(ts,ft,null),e(ft,_p),e(ft,Ar),e(Ar,bp),e(ft,kp),e(ft,rt),$(os,rt,null),e(rt,vp),e(rt,Lr),e(Lr,Tp),e(rt,wp),e(rt,Sr),e(Sr,$p),e(rt,yp),$($o,rt,null),_(o,ul,b),_(o,Nt,b),e(Nt,yo),e(yo,Ir),$(ns,Ir,null),e(Nt,Dp),e(Nt,Or),e(Or,Ep),_(o,gl,b),_(o,Ze,b),$(ss,Ze,null),e(Ze,Fp),e(Ze,Wt),e(Wt,Vp),e(Wt,Nr),e(Nr,qp),e(Wt,xp),e(Wt,as),e(as,zp),e(Wt,Mp),e(Ze,jp),e(Ze,rs),e(rs,Cp),e(rs,is),e(is,Pp),e(rs,Rp),e(Ze,Bp),e(Ze,Ne),$(ls,Ne,null),e(Ne,Ap),e(Ne,Ht),e(Ht,Lp),e(Ht,Fa),e(Fa,Sp),e(Ht,Ip),e(Ht,Wr),e(Wr,Op),e(Ht,Np),e(Ne,Wp),$(Do,Ne,null),e(Ne,Hp),$(Eo,Ne,null),e(Ne,Up),$(Fo,Ne,null),_(o,_l,b),_(o,Ut,b),e(Ut,Vo),e(Vo,Hr),$(ds,Hr,null),e(Ut,Qp),e(Ut,Ur),e(Ur,Gp),_(o,bl,b),_(o,Ae,b),$(cs,Ae,null),e(Ae,Kp),e(Ae,Qr),e(Qr,Jp),e(Ae,Xp),e(Ae,ps),e(ps,Yp),e(ps,ms),e(ms,Zp),e(ps,em),e(Ae,tm),e(Ae,hs),e(hs,om),e(hs,fs),e(fs,nm),e(hs,sm),e(Ae,am),e(Ae,ze),$(us,ze,null),e(ze,rm),e(ze,Qt),e(Qt,im),e(Qt,Va),e(Va,lm),e(Qt,dm),e(Qt,Gr),e(Gr,cm),e(Qt,pm),e(ze,mm),$(qo,ze,null),e(ze,hm),$(xo,ze,null),e(ze,fm),$(zo,ze,null),e(ze,um),$(Mo,ze,null),e(ze,gm),$(jo,ze,null),_(o,kl,b),_(o,Gt,b),e(Gt,Co),e(Co,Kr),$(gs,Kr,null),e(Gt,_m),e(Gt,Jr),e(Jr,bm),_(o,vl,b),_(o,Le,b),$(_s,Le,null),e(Le,km),e(Le,Xr),e(Xr,vm),e(Le,Tm),e(Le,bs),e(bs,wm),e(bs,ks),e(ks,$m),e(bs,ym),e(Le,Dm),e(Le,vs),e(vs,Em),e(vs,Ts),e(Ts,Fm),e(vs,Vm),e(Le,qm),e(Le,We),$(ws,We,null),e(We,xm),e(We,Kt),e(Kt,zm),e(Kt,qa),e(qa,Mm),e(Kt,jm),e(Kt,Yr),e(Yr,Cm),e(Kt,Pm),e(We,Rm),$(Po,We,null),e(We,Bm),$(Ro,We,null),e(We,Am),$(Bo,We,null),_(o,Tl,b),_(o,Jt,b),e(Jt,Ao),e(Ao,Zr),$($s,Zr,null),e(Jt,Lm),e(Jt,ei),e(ei,Sm),_(o,wl,b),_(o,Se,b),$(ys,Se,null),e(Se,Im),e(Se,Xt),e(Xt,Om),e(Xt,ti),e(ti,Nm),e(Xt,Wm),e(Xt,oi),e(oi,Hm),e(Xt,Um),e(Se,Qm),e(Se,Ds),e(Ds,Gm),e(Ds,Es),e(Es,Km),e(Ds,Jm),e(Se,Xm),e(Se,Fs),e(Fs,Ym),e(Fs,Vs),e(Vs,Zm),e(Fs,eh),e(Se,th),e(Se,He),$(qs,He,null),e(He,oh),e(He,Yt),e(Yt,nh),e(Yt,xa),e(xa,sh),e(Yt,ah),e(Yt,ni),e(ni,rh),e(Yt,ih),e(He,lh),$(Lo,He,null),e(He,dh),$(So,He,null),e(He,ch),$(Io,He,null),_(o,$l,b),_(o,Zt,b),e(Zt,Oo),e(Oo,si),$(xs,si,null),e(Zt,ph),e(Zt,ai),e(ai,mh),_(o,yl,b),_(o,Ie,b),$(zs,Ie,null),e(Ie,hh),e(Ie,Ms),e(Ms,fh),e(Ms,js),e(js,uh),e(Ms,gh),e(Ie,_h),e(Ie,Cs),e(Cs,bh),e(Cs,Ps),e(Ps,kh),e(Cs,vh),e(Ie,Th),$(No,Ie,null),e(Ie,wh),e(Ie,it),$(Rs,it,null),e(it,$h),e(it,eo),e(eo,yh),e(eo,za),e(za,Dh),e(eo,Eh),e(eo,ri),e(ri,Fh),e(eo,Vh),e(it,qh),$(Wo,it,null),e(it,xh),$(Ho,it,null),_(o,Dl,b),_(o,to,b),e(to,Uo),e(Uo,ii),$(Bs,ii,null),e(to,zh),e(to,li),e(li,Mh),_(o,El,b),_(o,ut,b),$(As,ut,null),e(ut,jh),e(ut,di),e(di,Ch),e(ut,Ph),e(ut,lt),$(Ls,lt,null),e(lt,Rh),e(lt,ci),e(ci,Bh),e(lt,Ah),e(lt,Ss),e(Ss,Lh),e(Ss,pi),e(pi,Sh),e(Ss,Ih),e(lt,Oh),e(lt,et),e(et,Nh),e(et,mi),e(mi,Wh),e(et,Hh),e(et,hi),e(hi,Uh),e(et,Qh),e(et,fi),e(fi,Gh),e(et,Kh),e(et,ui),e(ui,Jh),e(et,Xh),_(o,Fl,b),_(o,oo,b),e(oo,Qo),e(Qo,gi),$(Is,gi,null),e(oo,Yh),e(oo,_i),e(_i,Zh),_(o,Vl,b),_(o,Oe,b),$(Os,Oe,null),e(Oe,ef),e(Oe,no),e(no,tf),e(no,bi),e(bi,of),e(no,nf),e(no,Ns),e(Ns,sf),e(no,af),e(Oe,rf),e(Oe,Ws),e(Ws,lf),e(Ws,Hs),e(Hs,df),e(Ws,cf),e(Oe,pf),$(Go,Oe,null),e(Oe,mf),e(Oe,Ue),$(Us,Ue,null),e(Ue,hf),e(Ue,so),e(so,ff),e(so,Ma),e(Ma,uf),e(so,gf),e(so,ki),e(ki,_f),e(so,bf),e(Ue,kf),$(Ko,Ue,null),e(Ue,vf),$(Jo,Ue,null),e(Ue,Tf),$(Xo,Ue,null),_(o,ql,b),_(o,ao,b),e(ao,Yo),e(Yo,vi),$(Qs,vi,null),e(ao,wf),e(ao,Ti),e(Ti,$f),_(o,xl,b),_(o,je,b),$(Gs,je,null),e(je,yf),e(je,wi),e(wi,Df),e(je,Ef),e(je,Ks),e(Ks,Ff),e(Ks,Js),e(Js,Vf),e(Ks,qf),e(je,xf),e(je,Xs),e(Xs,zf),e(Xs,Ys),e(Ys,Mf),e(Xs,jf),e(je,Cf),$(Zo,je,null),e(je,Pf),e(je,Qe),$(Zs,Qe,null),e(Qe,Rf),e(Qe,ro),e(ro,Bf),e(ro,ja),e(ja,Af),e(ro,Lf),e(ro,$i),e($i,Sf),e(ro,If),e(Qe,Of),$(en,Qe,null),e(Qe,Nf),$(tn,Qe,null),e(Qe,Wf),$(on,Qe,null),_(o,zl,b),_(o,io,b),e(io,nn),e(nn,yi),$(ea,yi,null),e(io,Hf),e(io,Di),e(Di,Uf),_(o,Ml,b),_(o,Ce,b),$(ta,Ce,null),e(Ce,Qf),e(Ce,Ei),e(Ei,Gf),e(Ce,Kf),e(Ce,oa),e(oa,Jf),e(oa,na),e(na,Xf),e(oa,Yf),e(Ce,Zf),e(Ce,sa),e(sa,eu),e(sa,aa),e(aa,tu),e(sa,ou),e(Ce,nu),$(sn,Ce,null),e(Ce,su),e(Ce,Ge),$(ra,Ge,null),e(Ge,au),e(Ge,lo),e(lo,ru),e(lo,Ca),e(Ca,iu),e(lo,lu),e(lo,Fi),e(Fi,du),e(lo,cu),e(Ge,pu),$(an,Ge,null),e(Ge,mu),$(rn,Ge,null),e(Ge,hu),$(ln,Ge,null),_(o,jl,b),_(o,co,b),e(co,dn),e(dn,Vi),$(ia,Vi,null),e(co,fu),e(co,qi),e(qi,uu),_(o,Cl,b),_(o,Pe,b),$(la,Pe,null),e(Pe,gu),e(Pe,po),e(po,_u),e(po,xi),e(xi,bu),e(po,ku),e(po,zi),e(zi,vu),e(po,Tu),e(Pe,wu),e(Pe,da),e(da,$u),e(da,ca),e(ca,yu),e(da,Du),e(Pe,Eu),e(Pe,pa),e(pa,Fu),e(pa,ma),e(ma,Vu),e(pa,qu),e(Pe,xu),$(cn,Pe,null),e(Pe,zu),e(Pe,Ke),$(ha,Ke,null),e(Ke,Mu),e(Ke,mo),e(mo,ju),e(mo,Pa),e(Pa,Cu),e(mo,Pu),e(mo,Mi),e(Mi,Ru),e(mo,Bu),e(Ke,Au),$(pn,Ke,null),e(Ke,Lu),$(mn,Ke,null),e(Ke,Su),$(hn,Ke,null),Pl=!0},p(o,[b]){const fa={};b&2&&(fa.$$scope={dirty:b,ctx:o}),go.$set(fa);const ji={};b&2&&(ji.$$scope={dirty:b,ctx:o}),bo.$set(ji);const Ci={};b&2&&(Ci.$$scope={dirty:b,ctx:o}),vo.$set(Ci);const Pi={};b&2&&(Pi.$$scope={dirty:b,ctx:o}),To.$set(Pi);const ua={};b&2&&(ua.$$scope={dirty:b,ctx:o}),$o.$set(ua);const Ri={};b&2&&(Ri.$$scope={dirty:b,ctx:o}),Do.$set(Ri);const Bi={};b&2&&(Bi.$$scope={dirty:b,ctx:o}),Eo.$set(Bi);const Ai={};b&2&&(Ai.$$scope={dirty:b,ctx:o}),Fo.$set(Ai);const ga={};b&2&&(ga.$$scope={dirty:b,ctx:o}),qo.$set(ga);const Li={};b&2&&(Li.$$scope={dirty:b,ctx:o}),xo.$set(Li);const Si={};b&2&&(Si.$$scope={dirty:b,ctx:o}),zo.$set(Si);const Ii={};b&2&&(Ii.$$scope={dirty:b,ctx:o}),Mo.$set(Ii);const Oi={};b&2&&(Oi.$$scope={dirty:b,ctx:o}),jo.$set(Oi);const _a={};b&2&&(_a.$$scope={dirty:b,ctx:o}),Po.$set(_a);const Ni={};b&2&&(Ni.$$scope={dirty:b,ctx:o}),Ro.$set(Ni);const fn={};b&2&&(fn.$$scope={dirty:b,ctx:o}),Bo.$set(fn);const Wi={};b&2&&(Wi.$$scope={dirty:b,ctx:o}),Lo.$set(Wi);const Hi={};b&2&&(Hi.$$scope={dirty:b,ctx:o}),So.$set(Hi);const Ui={};b&2&&(Ui.$$scope={dirty:b,ctx:o}),Io.$set(Ui);const tt={};b&2&&(tt.$$scope={dirty:b,ctx:o}),No.$set(tt);const un={};b&2&&(un.$$scope={dirty:b,ctx:o}),Wo.$set(un);const Qi={};b&2&&(Qi.$$scope={dirty:b,ctx:o}),Ho.$set(Qi);const Gi={};b&2&&(Gi.$$scope={dirty:b,ctx:o}),Go.$set(Gi);const Ra={};b&2&&(Ra.$$scope={dirty:b,ctx:o}),Ko.$set(Ra);const Ki={};b&2&&(Ki.$$scope={dirty:b,ctx:o}),Jo.$set(Ki);const Ba={};b&2&&(Ba.$$scope={dirty:b,ctx:o}),Xo.$set(Ba);const Ji={};b&2&&(Ji.$$scope={dirty:b,ctx:o}),Zo.$set(Ji);const Aa={};b&2&&(Aa.$$scope={dirty:b,ctx:o}),en.$set(Aa);const Xi={};b&2&&(Xi.$$scope={dirty:b,ctx:o}),tn.$set(Xi);const La={};b&2&&(La.$$scope={dirty:b,ctx:o}),on.$set(La);const Yi={};b&2&&(Yi.$$scope={dirty:b,ctx:o}),sn.$set(Yi);const gt={};b&2&&(gt.$$scope={dirty:b,ctx:o}),an.$set(gt);const Zi={};b&2&&(Zi.$$scope={dirty:b,ctx:o}),rn.$set(Zi);const el={};b&2&&(el.$$scope={dirty:b,ctx:o}),ln.$set(el);const tl={};b&2&&(tl.$$scope={dirty:b,ctx:o}),cn.$set(tl);const ba={};b&2&&(ba.$$scope={dirty:b,ctx:o}),pn.$set(ba);const ol={};b&2&&(ol.$$scope={dirty:b,ctx:o}),mn.$set(ol);const nl={};b&2&&(nl.$$scope={dirty:b,ctx:o}),hn.$set(nl)},i(o){Pl||(y(d.$$.fragment,o),y(ee.$$.fragment,o),y(Vn.$$.fragment,o),y(qn.$$.fragment,o),y(zn.$$.fragment,o),y(Mn.$$.fragment,o),y(Pn.$$.fragment,o),y(Bn.$$.fragment,o),y(An.$$.fragment,o),y(go.$$.fragment,o),y(Ln.$$.fragment,o),y(Sn.$$.fragment,o),y(In.$$.fragment,o),y(Wn.$$.fragment,o),y(Un.$$.fragment,o),y(bo.$$.fragment,o),y(Qn.$$.fragment,o),y(Gn.$$.fragment,o),y(Zn.$$.fragment,o),y(vo.$$.fragment,o),y(To.$$.fragment,o),y(es.$$.fragment,o),y(ts.$$.fragment,o),y(os.$$.fragment,o),y($o.$$.fragment,o),y(ns.$$.fragment,o),y(ss.$$.fragment,o),y(ls.$$.fragment,o),y(Do.$$.fragment,o),y(Eo.$$.fragment,o),y(Fo.$$.fragment,o),y(ds.$$.fragment,o),y(cs.$$.fragment,o),y(us.$$.fragment,o),y(qo.$$.fragment,o),y(xo.$$.fragment,o),y(zo.$$.fragment,o),y(Mo.$$.fragment,o),y(jo.$$.fragment,o),y(gs.$$.fragment,o),y(_s.$$.fragment,o),y(ws.$$.fragment,o),y(Po.$$.fragment,o),y(Ro.$$.fragment,o),y(Bo.$$.fragment,o),y($s.$$.fragment,o),y(ys.$$.fragment,o),y(qs.$$.fragment,o),y(Lo.$$.fragment,o),y(So.$$.fragment,o),y(Io.$$.fragment,o),y(xs.$$.fragment,o),y(zs.$$.fragment,o),y(No.$$.fragment,o),y(Rs.$$.fragment,o),y(Wo.$$.fragment,o),y(Ho.$$.fragment,o),y(Bs.$$.fragment,o),y(As.$$.fragment,o),y(Ls.$$.fragment,o),y(Is.$$.fragment,o),y(Os.$$.fragment,o),y(Go.$$.fragment,o),y(Us.$$.fragment,o),y(Ko.$$.fragment,o),y(Jo.$$.fragment,o),y(Xo.$$.fragment,o),y(Qs.$$.fragment,o),y(Gs.$$.fragment,o),y(Zo.$$.fragment,o),y(Zs.$$.fragment,o),y(en.$$.fragment,o),y(tn.$$.fragment,o),y(on.$$.fragment,o),y(ea.$$.fragment,o),y(ta.$$.fragment,o),y(sn.$$.fragment,o),y(ra.$$.fragment,o),y(an.$$.fragment,o),y(rn.$$.fragment,o),y(ln.$$.fragment,o),y(ia.$$.fragment,o),y(la.$$.fragment,o),y(cn.$$.fragment,o),y(ha.$$.fragment,o),y(pn.$$.fragment,o),y(mn.$$.fragment,o),y(hn.$$.fragment,o),Pl=!0)},o(o){D(d.$$.fragment,o),D(ee.$$.fragment,o),D(Vn.$$.fragment,o),D(qn.$$.fragment,o),D(zn.$$.fragment,o),D(Mn.$$.fragment,o),D(Pn.$$.fragment,o),D(Bn.$$.fragment,o),D(An.$$.fragment,o),D(go.$$.fragment,o),D(Ln.$$.fragment,o),D(Sn.$$.fragment,o),D(In.$$.fragment,o),D(Wn.$$.fragment,o),D(Un.$$.fragment,o),D(bo.$$.fragment,o),D(Qn.$$.fragment,o),D(Gn.$$.fragment,o),D(Zn.$$.fragment,o),D(vo.$$.fragment,o),D(To.$$.fragment,o),D(es.$$.fragment,o),D(ts.$$.fragment,o),D(os.$$.fragment,o),D($o.$$.fragment,o),D(ns.$$.fragment,o),D(ss.$$.fragment,o),D(ls.$$.fragment,o),D(Do.$$.fragment,o),D(Eo.$$.fragment,o),D(Fo.$$.fragment,o),D(ds.$$.fragment,o),D(cs.$$.fragment,o),D(us.$$.fragment,o),D(qo.$$.fragment,o),D(xo.$$.fragment,o),D(zo.$$.fragment,o),D(Mo.$$.fragment,o),D(jo.$$.fragment,o),D(gs.$$.fragment,o),D(_s.$$.fragment,o),D(ws.$$.fragment,o),D(Po.$$.fragment,o),D(Ro.$$.fragment,o),D(Bo.$$.fragment,o),D($s.$$.fragment,o),D(ys.$$.fragment,o),D(qs.$$.fragment,o),D(Lo.$$.fragment,o),D(So.$$.fragment,o),D(Io.$$.fragment,o),D(xs.$$.fragment,o),D(zs.$$.fragment,o),D(No.$$.fragment,o),D(Rs.$$.fragment,o),D(Wo.$$.fragment,o),D(Ho.$$.fragment,o),D(Bs.$$.fragment,o),D(As.$$.fragment,o),D(Ls.$$.fragment,o),D(Is.$$.fragment,o),D(Os.$$.fragment,o),D(Go.$$.fragment,o),D(Us.$$.fragment,o),D(Ko.$$.fragment,o),D(Jo.$$.fragment,o),D(Xo.$$.fragment,o),D(Qs.$$.fragment,o),D(Gs.$$.fragment,o),D(Zo.$$.fragment,o),D(Zs.$$.fragment,o),D(en.$$.fragment,o),D(tn.$$.fragment,o),D(on.$$.fragment,o),D(ea.$$.fragment,o),D(ta.$$.fragment,o),D(sn.$$.fragment,o),D(ra.$$.fragment,o),D(an.$$.fragment,o),D(rn.$$.fragment,o),D(ln.$$.fragment,o),D(ia.$$.fragment,o),D(la.$$.fragment,o),D(cn.$$.fragment,o),D(ha.$$.fragment,o),D(pn.$$.fragment,o),D(mn.$$.fragment,o),D(hn.$$.fragment,o),Pl=!1},d(o){t(l),o&&t(g),o&&t(c),E(d),o&&t(J),o&&t(x),E(ee),o&&t(re),o&&t(N),o&&t(j),o&&t(ne),o&&t(ie),o&&t(se),o&&t(le),o&&t(ae),o&&t(O),o&&t(X),o&&t(V),o&&t(K),o&&t(De),o&&t(C),o&&t(sl),o&&t(ot),o&&t(al),o&&t(Mt),E(Vn),o&&t(rl),o&&t(ht),E(qn),o&&t(il),o&&t(Pt),E(zn),o&&t(ll),o&&t(Me),E(Mn),E(Pn),E(Bn),E(An),E(go),E(Ln),o&&t(dl),o&&t(At),E(Sn),o&&t(cl),o&&t(Xe),E(In),E(Wn),E(Un),E(bo),o&&t(pl),o&&t(St),E(Qn),o&&t(ml),o&&t(Ye),E(Gn),E(Zn),E(vo),E(To),o&&t(hl),o&&t(Ot),E(es),o&&t(fl),o&&t(ft),E(ts),E(os),E($o),o&&t(ul),o&&t(Nt),E(ns),o&&t(gl),o&&t(Ze),E(ss),E(ls),E(Do),E(Eo),E(Fo),o&&t(_l),o&&t(Ut),E(ds),o&&t(bl),o&&t(Ae),E(cs),E(us),E(qo),E(xo),E(zo),E(Mo),E(jo),o&&t(kl),o&&t(Gt),E(gs),o&&t(vl),o&&t(Le),E(_s),E(ws),E(Po),E(Ro),E(Bo),o&&t(Tl),o&&t(Jt),E($s),o&&t(wl),o&&t(Se),E(ys),E(qs),E(Lo),E(So),E(Io),o&&t($l),o&&t(Zt),E(xs),o&&t(yl),o&&t(Ie),E(zs),E(No),E(Rs),E(Wo),E(Ho),o&&t(Dl),o&&t(to),E(Bs),o&&t(El),o&&t(ut),E(As),E(Ls),o&&t(Fl),o&&t(oo),E(Is),o&&t(Vl),o&&t(Oe),E(Os),E(Go),E(Us),E(Ko),E(Jo),E(Xo),o&&t(ql),o&&t(ao),E(Qs),o&&t(xl),o&&t(je),E(Gs),E(Zo),E(Zs),E(en),E(tn),E(on),o&&t(zl),o&&t(io),E(ea),o&&t(Ml),o&&t(Ce),E(ta),E(sn),E(ra),E(an),E(rn),E(ln),o&&t(jl),o&&t(co),E(ia),o&&t(Cl),o&&t(Pe),E(la),E(cn),E(ha),E(pn),E(mn),E(hn)}}}const Qb={local:"debertav2",sections:[{local:"overview",title:"Overview"},{local:"transformers.DebertaV2Config",title:"DebertaV2Config"},{local:"transformers.DebertaV2Tokenizer",title:"DebertaV2Tokenizer"},{local:"transformers.DebertaV2TokenizerFast",title:"DebertaV2TokenizerFast"},{local:"transformers.DebertaV2Model",title:"DebertaV2Model"},{local:"transformers.DebertaV2PreTrainedModel",title:"DebertaV2PreTrainedModel"},{local:"transformers.DebertaV2ForMaskedLM",title:"DebertaV2ForMaskedLM"},{local:"transformers.DebertaV2ForSequenceClassification",title:"DebertaV2ForSequenceClassification"},{local:"transformers.DebertaV2ForTokenClassification",title:"DebertaV2ForTokenClassification"},{local:"transformers.DebertaV2ForQuestionAnswering",title:"DebertaV2ForQuestionAnswering"},{local:"transformers.TFDebertaV2Model",title:"TFDebertaV2Model"},{local:"transformers.TFDebertaV2PreTrainedModel",title:"TFDebertaV2PreTrainedModel"},{local:"transformers.TFDebertaV2ForMaskedLM",title:"TFDebertaV2ForMaskedLM"},{local:"transformers.TFDebertaV2ForSequenceClassification",title:"TFDebertaV2ForSequenceClassification"},{local:"transformers.TFDebertaV2ForTokenClassification",title:"TFDebertaV2ForTokenClassification"},{local:"transformers.TFDebertaV2ForQuestionAnswering",title:"TFDebertaV2ForQuestionAnswering"}],title:"DeBERTa-v2"};function Gb(F){return ib(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class t2 extends nb{constructor(l){super();sb(this,l,Gb,Ub,ab,{})}}export{t2 as default,Qb as metadata};
