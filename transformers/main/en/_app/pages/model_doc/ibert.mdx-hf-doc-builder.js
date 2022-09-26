import{S as al,i as il,s as ll,e as r,k as u,w as v,t as l,M as dl,c as a,d as o,m as f,a as i,x as w,h as d,b as m,G as e,g as k,y as $,q as T,o as y,B as I,v as cl,L as Q}from"../../chunks/vendor-hf-doc-builder.js";import{T as vo}from"../../chunks/Tip-hf-doc-builder.js";import{D as O}from"../../chunks/Docstring-hf-doc-builder.js";import{C as H}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ve}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as W}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function pl(B){let s,g,c,p,b;return{c(){s=r("p"),g=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=a(n,"P",{});var h=i(s);g=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(h,"CODE",{});var q=i(c);p=d(q,"Module"),q.forEach(o),b=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){k(n,s,h),e(s,g),e(s,c),e(c,p),e(s,b)},d(n){n&&o(s)}}}function hl(B){let s,g,c,p,b;return p=new H({props:{code:`from transformers import RobertaTokenizer, IBertModel
import torch

tokenizer = RobertaTokenizer.from_pretrained("kssteven/ibert-roberta-base")
model = IBertModel.from_pretrained("kssteven/ibert-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, IBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kssteven/ibert-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = IBertModel.from_pretrained(<span class="hljs-string">&quot;kssteven/ibert-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){s=r("p"),g=l("Example:"),c=u(),v(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);g=d(h,"Example:"),h.forEach(o),c=f(n),w(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,g),k(n,c,h),$(p,n,h),b=!0},p:Q,i(n){b||(T(p.$$.fragment,n),b=!0)},o(n){y(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),I(p,n)}}}function ml(B){let s,g,c,p,b;return{c(){s=r("p"),g=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=a(n,"P",{});var h=i(s);g=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(h,"CODE",{});var q=i(c);p=d(q,"Module"),q.forEach(o),b=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){k(n,s,h),e(s,g),e(s,c),e(c,p),e(s,b)},d(n){n&&o(s)}}}function ul(B){let s,g,c,p,b;return p=new H({props:{code:`from transformers import RobertaTokenizer, IBertForMaskedLM
import torch

tokenizer = RobertaTokenizer.from_pretrained("kssteven/ibert-roberta-base")
model = IBertForMaskedLM.from_pretrained("kssteven/ibert-roberta-base")

inputs = tokenizer("The capital of France is <mask>.", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of <mask>
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, IBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kssteven/ibert-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = IBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;kssteven/ibert-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){s=r("p"),g=l("Example:"),c=u(),v(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);g=d(h,"Example:"),h.forEach(o),c=f(n),w(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,g),k(n,c,h),$(p,n,h),b=!0},p:Q,i(n){b||(T(p.$$.fragment,n),b=!0)},o(n){y(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),I(p,n)}}}function fl(B){let s,g;return s=new H({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(s.$$.fragment)},l(c){w(s.$$.fragment,c)},m(c,p){$(s,c,p),g=!0},p:Q,i(c){g||(T(s.$$.fragment,c),g=!0)},o(c){y(s.$$.fragment,c),g=!1},d(c){I(s,c)}}}function gl(B){let s,g,c,p,b;return{c(){s=r("p"),g=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=a(n,"P",{});var h=i(s);g=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(h,"CODE",{});var q=i(c);p=d(q,"Module"),q.forEach(o),b=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){k(n,s,h),e(s,g),e(s,c),e(c,p),e(s,b)},d(n){n&&o(s)}}}function _l(B){let s,g,c,p,b;return p=new H({props:{code:`import torch
from transformers import RobertaTokenizer, IBertForSequenceClassification

tokenizer = RobertaTokenizer.from_pretrained("kssteven/ibert-roberta-base")
model = IBertForSequenceClassification.from_pretrained("kssteven/ibert-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, IBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kssteven/ibert-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = IBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;kssteven/ibert-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){s=r("p"),g=l("Example of single-label classification:"),c=u(),v(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);g=d(h,"Example of single-label classification:"),h.forEach(o),c=f(n),w(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,g),k(n,c,h),$(p,n,h),b=!0},p:Q,i(n){b||(T(p.$$.fragment,n),b=!0)},o(n){y(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),I(p,n)}}}function bl(B){let s,g;return s=new H({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = IBertForSequenceClassification.from_pretrained("kssteven/ibert-roberta-base", num_labels=num_labels)

labels = torch.tensor([1])
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = IBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;kssteven/ibert-roberta-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(s.$$.fragment)},l(c){w(s.$$.fragment,c)},m(c,p){$(s,c,p),g=!0},p:Q,i(c){g||(T(s.$$.fragment,c),g=!0)},o(c){y(s.$$.fragment,c),g=!1},d(c){I(s,c)}}}function kl(B){let s,g,c,p,b;return p=new H({props:{code:`import torch
from transformers import RobertaTokenizer, IBertForSequenceClassification

tokenizer = RobertaTokenizer.from_pretrained("kssteven/ibert-roberta-base")
model = IBertForSequenceClassification.from_pretrained("kssteven/ibert-roberta-base", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, IBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kssteven/ibert-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = IBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;kssteven/ibert-roberta-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){s=r("p"),g=l("Example of multi-label classification:"),c=u(),v(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);g=d(h,"Example of multi-label classification:"),h.forEach(o),c=f(n),w(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,g),k(n,c,h),$(p,n,h),b=!0},p:Q,i(n){b||(T(p.$$.fragment,n),b=!0)},o(n){y(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),I(p,n)}}}function vl(B){let s,g;return s=new H({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = IBertForSequenceClassification.from_pretrained(
    "kssteven/ibert-roberta-base", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = IBertForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;kssteven/ibert-roberta-base&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(s.$$.fragment)},l(c){w(s.$$.fragment,c)},m(c,p){$(s,c,p),g=!0},p:Q,i(c){g||(T(s.$$.fragment,c),g=!0)},o(c){y(s.$$.fragment,c),g=!1},d(c){I(s,c)}}}function wl(B){let s,g,c,p,b;return{c(){s=r("p"),g=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=a(n,"P",{});var h=i(s);g=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(h,"CODE",{});var q=i(c);p=d(q,"Module"),q.forEach(o),b=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){k(n,s,h),e(s,g),e(s,c),e(c,p),e(s,b)},d(n){n&&o(s)}}}function $l(B){let s,g,c,p,b;return p=new H({props:{code:`from transformers import RobertaTokenizer, IBertForMultipleChoice
import torch

tokenizer = RobertaTokenizer.from_pretrained("kssteven/ibert-roberta-base")
model = IBertForMultipleChoice.from_pretrained("kssteven/ibert-roberta-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, IBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kssteven/ibert-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = IBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;kssteven/ibert-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){s=r("p"),g=l("Example:"),c=u(),v(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);g=d(h,"Example:"),h.forEach(o),c=f(n),w(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,g),k(n,c,h),$(p,n,h),b=!0},p:Q,i(n){b||(T(p.$$.fragment,n),b=!0)},o(n){y(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),I(p,n)}}}function Tl(B){let s,g,c,p,b;return{c(){s=r("p"),g=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=a(n,"P",{});var h=i(s);g=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(h,"CODE",{});var q=i(c);p=d(q,"Module"),q.forEach(o),b=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){k(n,s,h),e(s,g),e(s,c),e(c,p),e(s,b)},d(n){n&&o(s)}}}function yl(B){let s,g,c,p,b;return p=new H({props:{code:`from transformers import RobertaTokenizer, IBertForTokenClassification
import torch

tokenizer = RobertaTokenizer.from_pretrained("kssteven/ibert-roberta-base")
model = IBertForTokenClassification.from_pretrained("kssteven/ibert-roberta-base")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, IBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kssteven/ibert-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = IBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;kssteven/ibert-roberta-base&quot;</span>)

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
`}}),{c(){s=r("p"),g=l("Example:"),c=u(),v(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);g=d(h,"Example:"),h.forEach(o),c=f(n),w(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,g),k(n,c,h),$(p,n,h),b=!0},p:Q,i(n){b||(T(p.$$.fragment,n),b=!0)},o(n){y(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),I(p,n)}}}function Il(B){let s,g;return s=new H({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(s.$$.fragment)},l(c){w(s.$$.fragment,c)},m(c,p){$(s,c,p),g=!0},p:Q,i(c){g||(T(s.$$.fragment,c),g=!0)},o(c){y(s.$$.fragment,c),g=!1},d(c){I(s,c)}}}function Bl(B){let s,g,c,p,b;return{c(){s=r("p"),g=l("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=l("Module"),b=l(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){s=a(n,"P",{});var h=i(s);g=d(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(h,"CODE",{});var q=i(c);p=d(q,"Module"),q.forEach(o),b=d(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(o)},m(n,h){k(n,s,h),e(s,g),e(s,c),e(c,p),e(s,b)},d(n){n&&o(s)}}}function ql(B){let s,g,c,p,b;return p=new H({props:{code:`from transformers import RobertaTokenizer, IBertForQuestionAnswering
import torch

tokenizer = RobertaTokenizer.from_pretrained("kssteven/ibert-roberta-base")
model = IBertForQuestionAnswering.from_pretrained("kssteven/ibert-roberta-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, IBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kssteven/ibert-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = IBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;kssteven/ibert-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){s=r("p"),g=l("Example:"),c=u(),v(p.$$.fragment)},l(n){s=a(n,"P",{});var h=i(s);g=d(h,"Example:"),h.forEach(o),c=f(n),w(p.$$.fragment,n)},m(n,h){k(n,s,h),e(s,g),k(n,c,h),$(p,n,h),b=!0},p:Q,i(n){b||(T(p.$$.fragment,n),b=!0)},o(n){y(p.$$.fragment,n),b=!1},d(n){n&&o(s),n&&o(c),I(p,n)}}}function Ml(B){let s,g;return s=new H({props:{code:`# target is "nice puppet"
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
`}}),{c(){v(s.$$.fragment)},l(c){w(s.$$.fragment,c)},m(c,p){$(s,c,p),g=!0},p:Q,i(c){g||(T(s.$$.fragment,c),g=!0)},o(c){y(s.$$.fragment,c),g=!1},d(c){I(s,c)}}}function Fl(B){let s,g,c,p,b,n,h,q,Yn,pn,oe,we,wo,Ke,Zn,$o,Xn,hn,$e,es,Ye,ts,os,mn,Ut,ns,un,Vt,To,ss,fn,V,rs,Ze,as,is,Xe,ls,ds,gn,ne,Te,yo,et,cs,Io,ps,_n,U,tt,hs,se,ms,Gt,us,fs,ot,gs,_s,bs,re,ks,Jt,vs,ws,Kt,$s,Ts,bn,ae,ye,Bo,nt,ys,qo,Is,kn,F,st,Bs,Mo,qs,Ms,rt,Fs,Yt,zs,xs,Cs,at,Es,it,js,Ps,As,lt,Ls,dt,Ss,Os,Rs,R,ct,Ns,ie,Ds,Zt,Ws,Qs,Fo,Hs,Us,Vs,Ie,Gs,Be,vn,le,qe,zo,pt,Js,xo,Ks,wn,z,ht,Ys,mt,Zs,Co,Xs,er,tr,ut,or,Xt,nr,sr,rr,ft,ar,gt,ir,lr,dr,P,_t,cr,de,pr,eo,hr,mr,Eo,ur,fr,gr,Me,_r,Fe,br,ze,$n,ce,xe,jo,bt,kr,Po,vr,Tn,x,kt,wr,Ao,$r,Tr,vt,yr,to,Ir,Br,qr,wt,Mr,$t,Fr,zr,xr,M,Tt,Cr,pe,Er,oo,jr,Pr,Lo,Ar,Lr,Sr,Ce,Or,Ee,Rr,je,Nr,Pe,Dr,Ae,yn,he,Le,So,yt,Wr,Oo,Qr,In,C,It,Hr,Ro,Ur,Vr,Bt,Gr,no,Jr,Kr,Yr,qt,Zr,Mt,Xr,ea,ta,N,Ft,oa,me,na,so,sa,ra,No,aa,ia,la,Se,da,Oe,Bn,ue,Re,Do,zt,ca,Wo,pa,qn,E,xt,ha,Qo,ma,ua,Ct,fa,ro,ga,_a,ba,Et,ka,jt,va,wa,$a,A,Pt,Ta,fe,ya,ao,Ia,Ba,Ho,qa,Ma,Fa,Ne,za,De,xa,We,Mn,ge,Qe,Uo,At,Ca,Vo,Ea,Fn,j,Lt,ja,_e,Pa,Go,Aa,La,Jo,Sa,Oa,Ra,St,Na,io,Da,Wa,Qa,Ot,Ha,Rt,Ua,Va,Ga,L,Nt,Ja,be,Ka,lo,Ya,Za,Ko,Xa,ei,ti,He,oi,Ue,ni,Ve,zn;return n=new ve({}),Ke=new ve({}),et=new ve({}),tt=new O({props:{name:"class transformers.IBertConfig",anchor:"transformers.IBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"quant_mode",val:" = False"},{name:"force_dequant",val:" = 'none'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.IBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the I-BERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/ibert#transformers.IBertModel">IBertModel</a>`,name:"vocab_size"},{anchor:"transformers.IBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.IBertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.IBertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.IBertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.IBertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.IBertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.IBertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.IBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.IBertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/ibert#transformers.IBertModel">IBertModel</a>`,name:"type_vocab_size"},{anchor:"transformers.IBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.IBertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.IBertConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.IBertConfig.quant_mode",description:`<strong>quant_mode</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to quantize the model or not.`,name:"quant_mode"},{anchor:"transformers.IBertConfig.force_dequant",description:`<strong>force_dequant</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;none&quot;</code>) &#x2014;
Force dequantize specific nonlinear layer. Dequatized layers are then executed with full precision.
<code>&quot;none&quot;</code>, <code>&quot;gelu&quot;</code>, <code>&quot;softmax&quot;</code>, <code>&quot;layernorm&quot;</code> and <code>&quot;nonlinear&quot;</code> are supported. As deafult, it is set as
<code>&quot;none&quot;</code>, which does not dequantize any layers. Please specify <code>&quot;gelu&quot;</code>, <code>&quot;softmax&quot;</code>, or <code>&quot;layernorm&quot;</code> to
dequantize GELU, Softmax, or LayerNorm, respectively. <code>&quot;nonlinear&quot;</code> will dequantize all nonlinear layers,
i.e., GELU, Softmax, and LayerNorm.`,name:"force_dequant"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ibert/configuration_ibert.py#L38"}}),nt=new ve({}),st=new O({props:{name:"class transformers.IBertModel",anchor:"transformers.IBertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.IBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ibert#transformers.IBertConfig">IBertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ibert/modeling_ibert.py#L734"}}),ct=new O({props:{name:"forward",anchor:"transformers.IBertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.IBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.IBertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.IBertModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.IBertModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.IBertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.IBertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.IBertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.IBertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.IBertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ibert/modeling_ibert.py#L773",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/ibert#transformers.IBertConfig"
>IBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) after further processing
through the layers used for the auxiliary pretraining task. E.g. for BERT-family of models, this returns
the classification token after processing through a linear layer and a tanh activation function. The linear
layer weights are trained from the next sentence prediction (classification) objective during pretraining.</p>
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
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ie=new vo({props:{$$slots:{default:[pl]},$$scope:{ctx:B}}}),Be=new W({props:{anchor:"transformers.IBertModel.forward.example",$$slots:{default:[hl]},$$scope:{ctx:B}}}),pt=new ve({}),ht=new O({props:{name:"class transformers.IBertForMaskedLM",anchor:"transformers.IBertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.IBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ibert#transformers.IBertConfig">IBertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ibert/modeling_ibert.py#L858"}}),_t=new O({props:{name:"forward",anchor:"transformers.IBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.IBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.IBertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.IBertForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.IBertForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.IBertForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.IBertForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.IBertForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.IBertForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.IBertForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.IBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.IBertForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ibert/modeling_ibert.py#L877",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/ibert#transformers.IBertConfig"
>IBertConfig</a>) and inputs.</p>
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
`}}),Me=new vo({props:{$$slots:{default:[ml]},$$scope:{ctx:B}}}),Fe=new W({props:{anchor:"transformers.IBertForMaskedLM.forward.example",$$slots:{default:[ul]},$$scope:{ctx:B}}}),ze=new W({props:{anchor:"transformers.IBertForMaskedLM.forward.example-2",$$slots:{default:[fl]},$$scope:{ctx:B}}}),bt=new ve({}),kt=new O({props:{name:"class transformers.IBertForSequenceClassification",anchor:"transformers.IBertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.IBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ibert#transformers.IBertConfig">IBertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ibert/modeling_ibert.py#L973"}}),Tt=new O({props:{name:"forward",anchor:"transformers.IBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.IBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.IBertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.IBertForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.IBertForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.IBertForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.IBertForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.IBertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.IBertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.IBertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.IBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ibert/modeling_ibert.py#L986",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/ibert#transformers.IBertConfig"
>IBertConfig</a>) and inputs.</p>
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
`}}),Ce=new vo({props:{$$slots:{default:[gl]},$$scope:{ctx:B}}}),Ee=new W({props:{anchor:"transformers.IBertForSequenceClassification.forward.example",$$slots:{default:[_l]},$$scope:{ctx:B}}}),je=new W({props:{anchor:"transformers.IBertForSequenceClassification.forward.example-2",$$slots:{default:[bl]},$$scope:{ctx:B}}}),Pe=new W({props:{anchor:"transformers.IBertForSequenceClassification.forward.example-3",$$slots:{default:[kl]},$$scope:{ctx:B}}}),Ae=new W({props:{anchor:"transformers.IBertForSequenceClassification.forward.example-4",$$slots:{default:[vl]},$$scope:{ctx:B}}}),yt=new ve({}),It=new O({props:{name:"class transformers.IBertForMultipleChoice",anchor:"transformers.IBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.IBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ibert#transformers.IBertConfig">IBertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ibert/modeling_ibert.py#L1069"}}),Ft=new O({props:{name:"forward",anchor:"transformers.IBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.IBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.IBertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.IBertForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.IBertForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.IBertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.IBertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.IBertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.IBertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.IBertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.IBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ibert/modeling_ibert.py#L1082",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/ibert#transformers.IBertConfig"
>IBertConfig</a>) and inputs.</p>
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
`}}),Se=new vo({props:{$$slots:{default:[wl]},$$scope:{ctx:B}}}),Oe=new W({props:{anchor:"transformers.IBertForMultipleChoice.forward.example",$$slots:{default:[$l]},$$scope:{ctx:B}}}),zt=new ve({}),xt=new O({props:{name:"class transformers.IBertForTokenClassification",anchor:"transformers.IBertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.IBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ibert#transformers.IBertConfig">IBertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ibert/modeling_ibert.py#L1162"}}),Pt=new O({props:{name:"forward",anchor:"transformers.IBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.IBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.IBertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.IBertForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.IBertForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.IBertForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.IBertForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.IBertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.IBertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.IBertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.IBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ibert/modeling_ibert.py#L1177",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/ibert#transformers.IBertConfig"
>IBertConfig</a>) and inputs.</p>
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
`}}),Ne=new vo({props:{$$slots:{default:[Tl]},$$scope:{ctx:B}}}),De=new W({props:{anchor:"transformers.IBertForTokenClassification.forward.example",$$slots:{default:[yl]},$$scope:{ctx:B}}}),We=new W({props:{anchor:"transformers.IBertForTokenClassification.forward.example-2",$$slots:{default:[Il]},$$scope:{ctx:B}}}),At=new ve({}),Lt=new O({props:{name:"class transformers.IBertForQuestionAnswering",anchor:"transformers.IBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.IBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ibert#transformers.IBertConfig">IBertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ibert/modeling_ibert.py#L1263"}}),Nt=new O({props:{name:"forward",anchor:"transformers.IBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.IBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.IBertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.IBertForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.IBertForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.IBertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.IBertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.IBertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.IBertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.IBertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.IBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.IBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/ibert/modeling_ibert.py#L1277",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/ibert#transformers.IBertConfig"
>IBertConfig</a>) and inputs.</p>
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
`}}),He=new vo({props:{$$slots:{default:[Bl]},$$scope:{ctx:B}}}),Ue=new W({props:{anchor:"transformers.IBertForQuestionAnswering.forward.example",$$slots:{default:[ql]},$$scope:{ctx:B}}}),Ve=new W({props:{anchor:"transformers.IBertForQuestionAnswering.forward.example-2",$$slots:{default:[Ml]},$$scope:{ctx:B}}}),{c(){s=r("meta"),g=u(),c=r("h1"),p=r("a"),b=r("span"),v(n.$$.fragment),h=u(),q=r("span"),Yn=l("I-BERT"),pn=u(),oe=r("h2"),we=r("a"),wo=r("span"),v(Ke.$$.fragment),Zn=u(),$o=r("span"),Xn=l("Overview"),hn=u(),$e=r("p"),es=l("The I-BERT model was proposed in "),Ye=r("a"),ts=l("I-BERT: Integer-only BERT Quantization"),os=l(` by
Sehoon Kim, Amir Gholami, Zhewei Yao, Michael W. Mahoney and Kurt Keutzer. It\u2019s a quantized version of RoBERTa running
inference up to four times faster.`),mn=u(),Ut=r("p"),ns=l("The abstract from the paper is the following:"),un=u(),Vt=r("p"),To=r("em"),ss=l(`Transformer based models, like BERT and RoBERTa, have achieved state-of-the-art results in many Natural Language
Processing tasks. However, their memory footprint, inference latency, and power consumption are prohibitive for
efficient inference at the edge, and even at the data center. While quantization can be a viable solution for this,
previous work on quantizing Transformer based models use floating-point arithmetic during inference, which cannot
efficiently utilize integer-only logical units such as the recent Turing Tensor Cores, or traditional integer-only ARM
processors. In this work, we propose I-BERT, a novel quantization scheme for Transformer based models that quantizes
the entire inference with integer-only arithmetic. Based on lightweight integer-only approximation methods for
nonlinear operations, e.g., GELU, Softmax, and Layer Normalization, I-BERT performs an end-to-end integer-only BERT
inference without any floating point calculation. We evaluate our approach on GLUE downstream tasks using
RoBERTa-Base/Large. We show that for both cases, I-BERT achieves similar (and slightly higher) accuracy as compared to
the full-precision baseline. Furthermore, our preliminary implementation of I-BERT shows a speedup of 2.4 - 4.0x for
INT8 inference on a T4 GPU system as compared to FP32 inference. The framework has been developed in PyTorch and has
been open-sourced.`),fn=u(),V=r("p"),rs=l("This model was contributed by "),Ze=r("a"),as=l("kssteven"),is=l(". The original code can be found "),Xe=r("a"),ls=l("here"),ds=l("."),gn=u(),ne=r("h2"),Te=r("a"),yo=r("span"),v(et.$$.fragment),cs=u(),Io=r("span"),ps=l("IBertConfig"),_n=u(),U=r("div"),v(tt.$$.fragment),hs=u(),se=r("p"),ms=l("This is the configuration class to store the configuration of a "),Gt=r("a"),us=l("IBertModel"),fs=l(`. It is used to instantiate a I-BERT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the IBERT
`),ot=r("a"),gs=l("kssteven/ibert-roberta-base"),_s=l(" architecture."),bs=u(),re=r("p"),ks=l("Configuration objects inherit from "),Jt=r("a"),vs=l("PretrainedConfig"),ws=l(` and can be used to control the model outputs. Read the
documentation from `),Kt=r("a"),$s=l("PretrainedConfig"),Ts=l(" for more information."),bn=u(),ae=r("h2"),ye=r("a"),Bo=r("span"),v(nt.$$.fragment),ys=u(),qo=r("span"),Is=l("IBertModel"),kn=u(),F=r("div"),v(st.$$.fragment),Bs=u(),Mo=r("p"),qs=l("The bare I-BERT Model transformer outputting raw hidden-states without any specific head on top."),Ms=u(),rt=r("p"),Fs=l("This model inherits from "),Yt=r("a"),zs=l("PreTrainedModel"),xs=l(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cs=u(),at=r("p"),Es=l("This model is also a PyTorch "),it=r("a"),js=l("torch.nn.Module"),Ps=l(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),As=u(),lt=r("p"),Ls=l(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),dt=r("a"),Ss=l(`Attention is
all you need`),Os=l(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Rs=u(),R=r("div"),v(ct.$$.fragment),Ns=u(),ie=r("p"),Ds=l("The "),Zt=r("a"),Ws=l("IBertModel"),Qs=l(" forward method, overrides the "),Fo=r("code"),Hs=l("__call__"),Us=l(" special method."),Vs=u(),v(Ie.$$.fragment),Gs=u(),v(Be.$$.fragment),vn=u(),le=r("h2"),qe=r("a"),zo=r("span"),v(pt.$$.fragment),Js=u(),xo=r("span"),Ks=l("IBertForMaskedLM"),wn=u(),z=r("div"),v(ht.$$.fragment),Ys=u(),mt=r("p"),Zs=l("I-BERT Model with a "),Co=r("code"),Xs=l("language modeling"),er=l(" head on top."),tr=u(),ut=r("p"),or=l("This model inherits from "),Xt=r("a"),nr=l("PreTrainedModel"),sr=l(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rr=u(),ft=r("p"),ar=l("This model is also a PyTorch "),gt=r("a"),ir=l("torch.nn.Module"),lr=l(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dr=u(),P=r("div"),v(_t.$$.fragment),cr=u(),de=r("p"),pr=l("The "),eo=r("a"),hr=l("IBertForMaskedLM"),mr=l(" forward method, overrides the "),Eo=r("code"),ur=l("__call__"),fr=l(" special method."),gr=u(),v(Me.$$.fragment),_r=u(),v(Fe.$$.fragment),br=u(),v(ze.$$.fragment),$n=u(),ce=r("h2"),xe=r("a"),jo=r("span"),v(bt.$$.fragment),kr=u(),Po=r("span"),vr=l("IBertForSequenceClassification"),Tn=u(),x=r("div"),v(kt.$$.fragment),wr=u(),Ao=r("p"),$r=l(`I-BERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Tr=u(),vt=r("p"),yr=l("This model inherits from "),to=r("a"),Ir=l("PreTrainedModel"),Br=l(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qr=u(),wt=r("p"),Mr=l("This model is also a PyTorch "),$t=r("a"),Fr=l("torch.nn.Module"),zr=l(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xr=u(),M=r("div"),v(Tt.$$.fragment),Cr=u(),pe=r("p"),Er=l("The "),oo=r("a"),jr=l("IBertForSequenceClassification"),Pr=l(" forward method, overrides the "),Lo=r("code"),Ar=l("__call__"),Lr=l(" special method."),Sr=u(),v(Ce.$$.fragment),Or=u(),v(Ee.$$.fragment),Rr=u(),v(je.$$.fragment),Nr=u(),v(Pe.$$.fragment),Dr=u(),v(Ae.$$.fragment),yn=u(),he=r("h2"),Le=r("a"),So=r("span"),v(yt.$$.fragment),Wr=u(),Oo=r("span"),Qr=l("IBertForMultipleChoice"),In=u(),C=r("div"),v(It.$$.fragment),Hr=u(),Ro=r("p"),Ur=l(`I-BERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Vr=u(),Bt=r("p"),Gr=l("This model inherits from "),no=r("a"),Jr=l("PreTrainedModel"),Kr=l(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yr=u(),qt=r("p"),Zr=l("This model is also a PyTorch "),Mt=r("a"),Xr=l("torch.nn.Module"),ea=l(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ta=u(),N=r("div"),v(Ft.$$.fragment),oa=u(),me=r("p"),na=l("The "),so=r("a"),sa=l("IBertForMultipleChoice"),ra=l(" forward method, overrides the "),No=r("code"),aa=l("__call__"),ia=l(" special method."),la=u(),v(Se.$$.fragment),da=u(),v(Oe.$$.fragment),Bn=u(),ue=r("h2"),Re=r("a"),Do=r("span"),v(zt.$$.fragment),ca=u(),Wo=r("span"),pa=l("IBertForTokenClassification"),qn=u(),E=r("div"),v(xt.$$.fragment),ha=u(),Qo=r("p"),ma=l(`I-BERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ua=u(),Ct=r("p"),fa=l("This model inherits from "),ro=r("a"),ga=l("PreTrainedModel"),_a=l(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ba=u(),Et=r("p"),ka=l("This model is also a PyTorch "),jt=r("a"),va=l("torch.nn.Module"),wa=l(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$a=u(),A=r("div"),v(Pt.$$.fragment),Ta=u(),fe=r("p"),ya=l("The "),ao=r("a"),Ia=l("IBertForTokenClassification"),Ba=l(" forward method, overrides the "),Ho=r("code"),qa=l("__call__"),Ma=l(" special method."),Fa=u(),v(Ne.$$.fragment),za=u(),v(De.$$.fragment),xa=u(),v(We.$$.fragment),Mn=u(),ge=r("h2"),Qe=r("a"),Uo=r("span"),v(At.$$.fragment),Ca=u(),Vo=r("span"),Ea=l("IBertForQuestionAnswering"),Fn=u(),j=r("div"),v(Lt.$$.fragment),ja=u(),_e=r("p"),Pa=l(`I-BERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Go=r("code"),Aa=l("span start logits"),La=l(" and "),Jo=r("code"),Sa=l("span end logits"),Oa=l(")."),Ra=u(),St=r("p"),Na=l("This model inherits from "),io=r("a"),Da=l("PreTrainedModel"),Wa=l(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qa=u(),Ot=r("p"),Ha=l("This model is also a PyTorch "),Rt=r("a"),Ua=l("torch.nn.Module"),Va=l(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ga=u(),L=r("div"),v(Nt.$$.fragment),Ja=u(),be=r("p"),Ka=l("The "),lo=r("a"),Ya=l("IBertForQuestionAnswering"),Za=l(" forward method, overrides the "),Ko=r("code"),Xa=l("__call__"),ei=l(" special method."),ti=u(),v(He.$$.fragment),oi=u(),v(Ue.$$.fragment),ni=u(),v(Ve.$$.fragment),this.h()},l(t){const _=dl('[data-svelte="svelte-1phssyn"]',document.head);s=a(_,"META",{name:!0,content:!0}),_.forEach(o),g=f(t),c=a(t,"H1",{class:!0});var Dt=i(c);p=a(Dt,"A",{id:!0,class:!0,href:!0});var Yo=i(p);b=a(Yo,"SPAN",{});var Zo=i(b);w(n.$$.fragment,Zo),Zo.forEach(o),Yo.forEach(o),h=f(Dt),q=a(Dt,"SPAN",{});var Xo=i(q);Yn=d(Xo,"I-BERT"),Xo.forEach(o),Dt.forEach(o),pn=f(t),oe=a(t,"H2",{class:!0});var Wt=i(oe);we=a(Wt,"A",{id:!0,class:!0,href:!0});var en=i(we);wo=a(en,"SPAN",{});var tn=i(wo);w(Ke.$$.fragment,tn),tn.forEach(o),en.forEach(o),Zn=f(Wt),$o=a(Wt,"SPAN",{});var on=i($o);Xn=d(on,"Overview"),on.forEach(o),Wt.forEach(o),hn=f(t),$e=a(t,"P",{});var Qt=i($e);es=d(Qt,"The I-BERT model was proposed in "),Ye=a(Qt,"A",{href:!0,rel:!0});var nn=i(Ye);ts=d(nn,"I-BERT: Integer-only BERT Quantization"),nn.forEach(o),os=d(Qt,` by
Sehoon Kim, Amir Gholami, Zhewei Yao, Michael W. Mahoney and Kurt Keutzer. It\u2019s a quantized version of RoBERTa running
inference up to four times faster.`),Qt.forEach(o),mn=f(t),Ut=a(t,"P",{});var sn=i(Ut);ns=d(sn,"The abstract from the paper is the following:"),sn.forEach(o),un=f(t),Vt=a(t,"P",{});var rn=i(Vt);To=a(rn,"EM",{});var an=i(To);ss=d(an,`Transformer based models, like BERT and RoBERTa, have achieved state-of-the-art results in many Natural Language
Processing tasks. However, their memory footprint, inference latency, and power consumption are prohibitive for
efficient inference at the edge, and even at the data center. While quantization can be a viable solution for this,
previous work on quantizing Transformer based models use floating-point arithmetic during inference, which cannot
efficiently utilize integer-only logical units such as the recent Turing Tensor Cores, or traditional integer-only ARM
processors. In this work, we propose I-BERT, a novel quantization scheme for Transformer based models that quantizes
the entire inference with integer-only arithmetic. Based on lightweight integer-only approximation methods for
nonlinear operations, e.g., GELU, Softmax, and Layer Normalization, I-BERT performs an end-to-end integer-only BERT
inference without any floating point calculation. We evaluate our approach on GLUE downstream tasks using
RoBERTa-Base/Large. We show that for both cases, I-BERT achieves similar (and slightly higher) accuracy as compared to
the full-precision baseline. Furthermore, our preliminary implementation of I-BERT shows a speedup of 2.4 - 4.0x for
INT8 inference on a T4 GPU system as compared to FP32 inference. The framework has been developed in PyTorch and has
been open-sourced.`),an.forEach(o),rn.forEach(o),fn=f(t),V=a(t,"P",{});var ke=i(V);rs=d(ke,"This model was contributed by "),Ze=a(ke,"A",{href:!0,rel:!0});var ln=i(Ze);as=d(ln,"kssteven"),ln.forEach(o),is=d(ke,". The original code can be found "),Xe=a(ke,"A",{href:!0,rel:!0});var dn=i(Xe);ls=d(dn,"here"),dn.forEach(o),ds=d(ke,"."),ke.forEach(o),gn=f(t),ne=a(t,"H2",{class:!0});var Ht=i(ne);Te=a(Ht,"A",{id:!0,class:!0,href:!0});var cn=i(Te);yo=a(cn,"SPAN",{});var si=i(yo);w(et.$$.fragment,si),si.forEach(o),cn.forEach(o),cs=f(Ht),Io=a(Ht,"SPAN",{});var ri=i(Io);ps=d(ri,"IBertConfig"),ri.forEach(o),Ht.forEach(o),_n=f(t),U=a(t,"DIV",{class:!0});var co=i(U);w(tt.$$.fragment,co),hs=f(co),se=a(co,"P",{});var po=i(se);ms=d(po,"This is the configuration class to store the configuration of a "),Gt=a(po,"A",{href:!0});var ai=i(Gt);us=d(ai,"IBertModel"),ai.forEach(o),fs=d(po,`. It is used to instantiate a I-BERT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the IBERT
`),ot=a(po,"A",{href:!0,rel:!0});var ii=i(ot);gs=d(ii,"kssteven/ibert-roberta-base"),ii.forEach(o),_s=d(po," architecture."),po.forEach(o),bs=f(co),re=a(co,"P",{});var ho=i(re);ks=d(ho,"Configuration objects inherit from "),Jt=a(ho,"A",{href:!0});var li=i(Jt);vs=d(li,"PretrainedConfig"),li.forEach(o),ws=d(ho,` and can be used to control the model outputs. Read the
documentation from `),Kt=a(ho,"A",{href:!0});var di=i(Kt);$s=d(di,"PretrainedConfig"),di.forEach(o),Ts=d(ho," for more information."),ho.forEach(o),co.forEach(o),bn=f(t),ae=a(t,"H2",{class:!0});var xn=i(ae);ye=a(xn,"A",{id:!0,class:!0,href:!0});var ci=i(ye);Bo=a(ci,"SPAN",{});var pi=i(Bo);w(nt.$$.fragment,pi),pi.forEach(o),ci.forEach(o),ys=f(xn),qo=a(xn,"SPAN",{});var hi=i(qo);Is=d(hi,"IBertModel"),hi.forEach(o),xn.forEach(o),kn=f(t),F=a(t,"DIV",{class:!0});var D=i(F);w(st.$$.fragment,D),Bs=f(D),Mo=a(D,"P",{});var mi=i(Mo);qs=d(mi,"The bare I-BERT Model transformer outputting raw hidden-states without any specific head on top."),mi.forEach(o),Ms=f(D),rt=a(D,"P",{});var Cn=i(rt);Fs=d(Cn,"This model inherits from "),Yt=a(Cn,"A",{href:!0});var ui=i(Yt);zs=d(ui,"PreTrainedModel"),ui.forEach(o),xs=d(Cn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cn.forEach(o),Cs=f(D),at=a(D,"P",{});var En=i(at);Es=d(En,"This model is also a PyTorch "),it=a(En,"A",{href:!0,rel:!0});var fi=i(it);js=d(fi,"torch.nn.Module"),fi.forEach(o),Ps=d(En,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),En.forEach(o),As=f(D),lt=a(D,"P",{});var jn=i(lt);Ls=d(jn,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),dt=a(jn,"A",{href:!0,rel:!0});var gi=i(dt);Ss=d(gi,`Attention is
all you need`),gi.forEach(o),Os=d(jn,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),jn.forEach(o),Rs=f(D),R=a(D,"DIV",{class:!0});var Ge=i(R);w(ct.$$.fragment,Ge),Ns=f(Ge),ie=a(Ge,"P",{});var mo=i(ie);Ds=d(mo,"The "),Zt=a(mo,"A",{href:!0});var _i=i(Zt);Ws=d(_i,"IBertModel"),_i.forEach(o),Qs=d(mo," forward method, overrides the "),Fo=a(mo,"CODE",{});var bi=i(Fo);Hs=d(bi,"__call__"),bi.forEach(o),Us=d(mo," special method."),mo.forEach(o),Vs=f(Ge),w(Ie.$$.fragment,Ge),Gs=f(Ge),w(Be.$$.fragment,Ge),Ge.forEach(o),D.forEach(o),vn=f(t),le=a(t,"H2",{class:!0});var Pn=i(le);qe=a(Pn,"A",{id:!0,class:!0,href:!0});var ki=i(qe);zo=a(ki,"SPAN",{});var vi=i(zo);w(pt.$$.fragment,vi),vi.forEach(o),ki.forEach(o),Js=f(Pn),xo=a(Pn,"SPAN",{});var wi=i(xo);Ks=d(wi,"IBertForMaskedLM"),wi.forEach(o),Pn.forEach(o),wn=f(t),z=a(t,"DIV",{class:!0});var G=i(z);w(ht.$$.fragment,G),Ys=f(G),mt=a(G,"P",{});var An=i(mt);Zs=d(An,"I-BERT Model with a "),Co=a(An,"CODE",{});var $i=i(Co);Xs=d($i,"language modeling"),$i.forEach(o),er=d(An," head on top."),An.forEach(o),tr=f(G),ut=a(G,"P",{});var Ln=i(ut);or=d(Ln,"This model inherits from "),Xt=a(Ln,"A",{href:!0});var Ti=i(Xt);nr=d(Ti,"PreTrainedModel"),Ti.forEach(o),sr=d(Ln,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ln.forEach(o),rr=f(G),ft=a(G,"P",{});var Sn=i(ft);ar=d(Sn,"This model is also a PyTorch "),gt=a(Sn,"A",{href:!0,rel:!0});var yi=i(gt);ir=d(yi,"torch.nn.Module"),yi.forEach(o),lr=d(Sn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sn.forEach(o),dr=f(G),P=a(G,"DIV",{class:!0});var J=i(P);w(_t.$$.fragment,J),cr=f(J),de=a(J,"P",{});var uo=i(de);pr=d(uo,"The "),eo=a(uo,"A",{href:!0});var Ii=i(eo);hr=d(Ii,"IBertForMaskedLM"),Ii.forEach(o),mr=d(uo," forward method, overrides the "),Eo=a(uo,"CODE",{});var Bi=i(Eo);ur=d(Bi,"__call__"),Bi.forEach(o),fr=d(uo," special method."),uo.forEach(o),gr=f(J),w(Me.$$.fragment,J),_r=f(J),w(Fe.$$.fragment,J),br=f(J),w(ze.$$.fragment,J),J.forEach(o),G.forEach(o),$n=f(t),ce=a(t,"H2",{class:!0});var On=i(ce);xe=a(On,"A",{id:!0,class:!0,href:!0});var qi=i(xe);jo=a(qi,"SPAN",{});var Mi=i(jo);w(bt.$$.fragment,Mi),Mi.forEach(o),qi.forEach(o),kr=f(On),Po=a(On,"SPAN",{});var Fi=i(Po);vr=d(Fi,"IBertForSequenceClassification"),Fi.forEach(o),On.forEach(o),Tn=f(t),x=a(t,"DIV",{class:!0});var K=i(x);w(kt.$$.fragment,K),wr=f(K),Ao=a(K,"P",{});var zi=i(Ao);$r=d(zi,`I-BERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),zi.forEach(o),Tr=f(K),vt=a(K,"P",{});var Rn=i(vt);yr=d(Rn,"This model inherits from "),to=a(Rn,"A",{href:!0});var xi=i(to);Ir=d(xi,"PreTrainedModel"),xi.forEach(o),Br=d(Rn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rn.forEach(o),qr=f(K),wt=a(K,"P",{});var Nn=i(wt);Mr=d(Nn,"This model is also a PyTorch "),$t=a(Nn,"A",{href:!0,rel:!0});var Ci=i($t);Fr=d(Ci,"torch.nn.Module"),Ci.forEach(o),zr=d(Nn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nn.forEach(o),xr=f(K),M=a(K,"DIV",{class:!0});var S=i(M);w(Tt.$$.fragment,S),Cr=f(S),pe=a(S,"P",{});var fo=i(pe);Er=d(fo,"The "),oo=a(fo,"A",{href:!0});var Ei=i(oo);jr=d(Ei,"IBertForSequenceClassification"),Ei.forEach(o),Pr=d(fo," forward method, overrides the "),Lo=a(fo,"CODE",{});var ji=i(Lo);Ar=d(ji,"__call__"),ji.forEach(o),Lr=d(fo," special method."),fo.forEach(o),Sr=f(S),w(Ce.$$.fragment,S),Or=f(S),w(Ee.$$.fragment,S),Rr=f(S),w(je.$$.fragment,S),Nr=f(S),w(Pe.$$.fragment,S),Dr=f(S),w(Ae.$$.fragment,S),S.forEach(o),K.forEach(o),yn=f(t),he=a(t,"H2",{class:!0});var Dn=i(he);Le=a(Dn,"A",{id:!0,class:!0,href:!0});var Pi=i(Le);So=a(Pi,"SPAN",{});var Ai=i(So);w(yt.$$.fragment,Ai),Ai.forEach(o),Pi.forEach(o),Wr=f(Dn),Oo=a(Dn,"SPAN",{});var Li=i(Oo);Qr=d(Li,"IBertForMultipleChoice"),Li.forEach(o),Dn.forEach(o),In=f(t),C=a(t,"DIV",{class:!0});var Y=i(C);w(It.$$.fragment,Y),Hr=f(Y),Ro=a(Y,"P",{});var Si=i(Ro);Ur=d(Si,`I-BERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Si.forEach(o),Vr=f(Y),Bt=a(Y,"P",{});var Wn=i(Bt);Gr=d(Wn,"This model inherits from "),no=a(Wn,"A",{href:!0});var Oi=i(no);Jr=d(Oi,"PreTrainedModel"),Oi.forEach(o),Kr=d(Wn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wn.forEach(o),Yr=f(Y),qt=a(Y,"P",{});var Qn=i(qt);Zr=d(Qn,"This model is also a PyTorch "),Mt=a(Qn,"A",{href:!0,rel:!0});var Ri=i(Mt);Xr=d(Ri,"torch.nn.Module"),Ri.forEach(o),ea=d(Qn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qn.forEach(o),ta=f(Y),N=a(Y,"DIV",{class:!0});var Je=i(N);w(Ft.$$.fragment,Je),oa=f(Je),me=a(Je,"P",{});var go=i(me);na=d(go,"The "),so=a(go,"A",{href:!0});var Ni=i(so);sa=d(Ni,"IBertForMultipleChoice"),Ni.forEach(o),ra=d(go," forward method, overrides the "),No=a(go,"CODE",{});var Di=i(No);aa=d(Di,"__call__"),Di.forEach(o),ia=d(go," special method."),go.forEach(o),la=f(Je),w(Se.$$.fragment,Je),da=f(Je),w(Oe.$$.fragment,Je),Je.forEach(o),Y.forEach(o),Bn=f(t),ue=a(t,"H2",{class:!0});var Hn=i(ue);Re=a(Hn,"A",{id:!0,class:!0,href:!0});var Wi=i(Re);Do=a(Wi,"SPAN",{});var Qi=i(Do);w(zt.$$.fragment,Qi),Qi.forEach(o),Wi.forEach(o),ca=f(Hn),Wo=a(Hn,"SPAN",{});var Hi=i(Wo);pa=d(Hi,"IBertForTokenClassification"),Hi.forEach(o),Hn.forEach(o),qn=f(t),E=a(t,"DIV",{class:!0});var Z=i(E);w(xt.$$.fragment,Z),ha=f(Z),Qo=a(Z,"P",{});var Ui=i(Qo);ma=d(Ui,`I-BERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Ui.forEach(o),ua=f(Z),Ct=a(Z,"P",{});var Un=i(Ct);fa=d(Un,"This model inherits from "),ro=a(Un,"A",{href:!0});var Vi=i(ro);ga=d(Vi,"PreTrainedModel"),Vi.forEach(o),_a=d(Un,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Un.forEach(o),ba=f(Z),Et=a(Z,"P",{});var Vn=i(Et);ka=d(Vn,"This model is also a PyTorch "),jt=a(Vn,"A",{href:!0,rel:!0});var Gi=i(jt);va=d(Gi,"torch.nn.Module"),Gi.forEach(o),wa=d(Vn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vn.forEach(o),$a=f(Z),A=a(Z,"DIV",{class:!0});var X=i(A);w(Pt.$$.fragment,X),Ta=f(X),fe=a(X,"P",{});var _o=i(fe);ya=d(_o,"The "),ao=a(_o,"A",{href:!0});var Ji=i(ao);Ia=d(Ji,"IBertForTokenClassification"),Ji.forEach(o),Ba=d(_o," forward method, overrides the "),Ho=a(_o,"CODE",{});var Ki=i(Ho);qa=d(Ki,"__call__"),Ki.forEach(o),Ma=d(_o," special method."),_o.forEach(o),Fa=f(X),w(Ne.$$.fragment,X),za=f(X),w(De.$$.fragment,X),xa=f(X),w(We.$$.fragment,X),X.forEach(o),Z.forEach(o),Mn=f(t),ge=a(t,"H2",{class:!0});var Gn=i(ge);Qe=a(Gn,"A",{id:!0,class:!0,href:!0});var Yi=i(Qe);Uo=a(Yi,"SPAN",{});var Zi=i(Uo);w(At.$$.fragment,Zi),Zi.forEach(o),Yi.forEach(o),Ca=f(Gn),Vo=a(Gn,"SPAN",{});var Xi=i(Vo);Ea=d(Xi,"IBertForQuestionAnswering"),Xi.forEach(o),Gn.forEach(o),Fn=f(t),j=a(t,"DIV",{class:!0});var ee=i(j);w(Lt.$$.fragment,ee),ja=f(ee),_e=a(ee,"P",{});var bo=i(_e);Pa=d(bo,`I-BERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Go=a(bo,"CODE",{});var el=i(Go);Aa=d(el,"span start logits"),el.forEach(o),La=d(bo," and "),Jo=a(bo,"CODE",{});var tl=i(Jo);Sa=d(tl,"span end logits"),tl.forEach(o),Oa=d(bo,")."),bo.forEach(o),Ra=f(ee),St=a(ee,"P",{});var Jn=i(St);Na=d(Jn,"This model inherits from "),io=a(Jn,"A",{href:!0});var ol=i(io);Da=d(ol,"PreTrainedModel"),ol.forEach(o),Wa=d(Jn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jn.forEach(o),Qa=f(ee),Ot=a(ee,"P",{});var Kn=i(Ot);Ha=d(Kn,"This model is also a PyTorch "),Rt=a(Kn,"A",{href:!0,rel:!0});var nl=i(Rt);Ua=d(nl,"torch.nn.Module"),nl.forEach(o),Va=d(Kn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kn.forEach(o),Ga=f(ee),L=a(ee,"DIV",{class:!0});var te=i(L);w(Nt.$$.fragment,te),Ja=f(te),be=a(te,"P",{});var ko=i(be);Ka=d(ko,"The "),lo=a(ko,"A",{href:!0});var sl=i(lo);Ya=d(sl,"IBertForQuestionAnswering"),sl.forEach(o),Za=d(ko," forward method, overrides the "),Ko=a(ko,"CODE",{});var rl=i(Ko);Xa=d(rl,"__call__"),rl.forEach(o),ei=d(ko," special method."),ko.forEach(o),ti=f(te),w(He.$$.fragment,te),oi=f(te),w(Ue.$$.fragment,te),ni=f(te),w(Ve.$$.fragment,te),te.forEach(o),ee.forEach(o),this.h()},h(){m(s,"name","hf:doc:metadata"),m(s,"content",JSON.stringify(zl)),m(p,"id","ibert"),m(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(p,"href","#ibert"),m(c,"class","relative group"),m(we,"id","overview"),m(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(we,"href","#overview"),m(oe,"class","relative group"),m(Ye,"href","https://arxiv.org/abs/2101.01321"),m(Ye,"rel","nofollow"),m(Ze,"href","https://huggingface.co/kssteven"),m(Ze,"rel","nofollow"),m(Xe,"href","https://github.com/kssteven418/I-BERT"),m(Xe,"rel","nofollow"),m(Te,"id","transformers.IBertConfig"),m(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Te,"href","#transformers.IBertConfig"),m(ne,"class","relative group"),m(Gt,"href","/docs/transformers/main/en/model_doc/ibert#transformers.IBertModel"),m(ot,"href","https://huggingface.co/kssteven/ibert-roberta-base"),m(ot,"rel","nofollow"),m(Jt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(Kt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ye,"id","transformers.IBertModel"),m(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ye,"href","#transformers.IBertModel"),m(ae,"class","relative group"),m(Yt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(it,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(it,"rel","nofollow"),m(dt,"href","https://arxiv.org/abs/1706.03762"),m(dt,"rel","nofollow"),m(Zt,"href","/docs/transformers/main/en/model_doc/ibert#transformers.IBertModel"),m(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(qe,"id","transformers.IBertForMaskedLM"),m(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(qe,"href","#transformers.IBertForMaskedLM"),m(le,"class","relative group"),m(Xt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(gt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(gt,"rel","nofollow"),m(eo,"href","/docs/transformers/main/en/model_doc/ibert#transformers.IBertForMaskedLM"),m(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(xe,"id","transformers.IBertForSequenceClassification"),m(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(xe,"href","#transformers.IBertForSequenceClassification"),m(ce,"class","relative group"),m(to,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m($t,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m($t,"rel","nofollow"),m(oo,"href","/docs/transformers/main/en/model_doc/ibert#transformers.IBertForSequenceClassification"),m(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Le,"id","transformers.IBertForMultipleChoice"),m(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Le,"href","#transformers.IBertForMultipleChoice"),m(he,"class","relative group"),m(no,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Mt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Mt,"rel","nofollow"),m(so,"href","/docs/transformers/main/en/model_doc/ibert#transformers.IBertForMultipleChoice"),m(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Re,"id","transformers.IBertForTokenClassification"),m(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Re,"href","#transformers.IBertForTokenClassification"),m(ue,"class","relative group"),m(ro,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(jt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(jt,"rel","nofollow"),m(ao,"href","/docs/transformers/main/en/model_doc/ibert#transformers.IBertForTokenClassification"),m(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Qe,"id","transformers.IBertForQuestionAnswering"),m(Qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Qe,"href","#transformers.IBertForQuestionAnswering"),m(ge,"class","relative group"),m(io,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Rt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Rt,"rel","nofollow"),m(lo,"href","/docs/transformers/main/en/model_doc/ibert#transformers.IBertForQuestionAnswering"),m(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,_){e(document.head,s),k(t,g,_),k(t,c,_),e(c,p),e(p,b),$(n,b,null),e(c,h),e(c,q),e(q,Yn),k(t,pn,_),k(t,oe,_),e(oe,we),e(we,wo),$(Ke,wo,null),e(oe,Zn),e(oe,$o),e($o,Xn),k(t,hn,_),k(t,$e,_),e($e,es),e($e,Ye),e(Ye,ts),e($e,os),k(t,mn,_),k(t,Ut,_),e(Ut,ns),k(t,un,_),k(t,Vt,_),e(Vt,To),e(To,ss),k(t,fn,_),k(t,V,_),e(V,rs),e(V,Ze),e(Ze,as),e(V,is),e(V,Xe),e(Xe,ls),e(V,ds),k(t,gn,_),k(t,ne,_),e(ne,Te),e(Te,yo),$(et,yo,null),e(ne,cs),e(ne,Io),e(Io,ps),k(t,_n,_),k(t,U,_),$(tt,U,null),e(U,hs),e(U,se),e(se,ms),e(se,Gt),e(Gt,us),e(se,fs),e(se,ot),e(ot,gs),e(se,_s),e(U,bs),e(U,re),e(re,ks),e(re,Jt),e(Jt,vs),e(re,ws),e(re,Kt),e(Kt,$s),e(re,Ts),k(t,bn,_),k(t,ae,_),e(ae,ye),e(ye,Bo),$(nt,Bo,null),e(ae,ys),e(ae,qo),e(qo,Is),k(t,kn,_),k(t,F,_),$(st,F,null),e(F,Bs),e(F,Mo),e(Mo,qs),e(F,Ms),e(F,rt),e(rt,Fs),e(rt,Yt),e(Yt,zs),e(rt,xs),e(F,Cs),e(F,at),e(at,Es),e(at,it),e(it,js),e(at,Ps),e(F,As),e(F,lt),e(lt,Ls),e(lt,dt),e(dt,Ss),e(lt,Os),e(F,Rs),e(F,R),$(ct,R,null),e(R,Ns),e(R,ie),e(ie,Ds),e(ie,Zt),e(Zt,Ws),e(ie,Qs),e(ie,Fo),e(Fo,Hs),e(ie,Us),e(R,Vs),$(Ie,R,null),e(R,Gs),$(Be,R,null),k(t,vn,_),k(t,le,_),e(le,qe),e(qe,zo),$(pt,zo,null),e(le,Js),e(le,xo),e(xo,Ks),k(t,wn,_),k(t,z,_),$(ht,z,null),e(z,Ys),e(z,mt),e(mt,Zs),e(mt,Co),e(Co,Xs),e(mt,er),e(z,tr),e(z,ut),e(ut,or),e(ut,Xt),e(Xt,nr),e(ut,sr),e(z,rr),e(z,ft),e(ft,ar),e(ft,gt),e(gt,ir),e(ft,lr),e(z,dr),e(z,P),$(_t,P,null),e(P,cr),e(P,de),e(de,pr),e(de,eo),e(eo,hr),e(de,mr),e(de,Eo),e(Eo,ur),e(de,fr),e(P,gr),$(Me,P,null),e(P,_r),$(Fe,P,null),e(P,br),$(ze,P,null),k(t,$n,_),k(t,ce,_),e(ce,xe),e(xe,jo),$(bt,jo,null),e(ce,kr),e(ce,Po),e(Po,vr),k(t,Tn,_),k(t,x,_),$(kt,x,null),e(x,wr),e(x,Ao),e(Ao,$r),e(x,Tr),e(x,vt),e(vt,yr),e(vt,to),e(to,Ir),e(vt,Br),e(x,qr),e(x,wt),e(wt,Mr),e(wt,$t),e($t,Fr),e(wt,zr),e(x,xr),e(x,M),$(Tt,M,null),e(M,Cr),e(M,pe),e(pe,Er),e(pe,oo),e(oo,jr),e(pe,Pr),e(pe,Lo),e(Lo,Ar),e(pe,Lr),e(M,Sr),$(Ce,M,null),e(M,Or),$(Ee,M,null),e(M,Rr),$(je,M,null),e(M,Nr),$(Pe,M,null),e(M,Dr),$(Ae,M,null),k(t,yn,_),k(t,he,_),e(he,Le),e(Le,So),$(yt,So,null),e(he,Wr),e(he,Oo),e(Oo,Qr),k(t,In,_),k(t,C,_),$(It,C,null),e(C,Hr),e(C,Ro),e(Ro,Ur),e(C,Vr),e(C,Bt),e(Bt,Gr),e(Bt,no),e(no,Jr),e(Bt,Kr),e(C,Yr),e(C,qt),e(qt,Zr),e(qt,Mt),e(Mt,Xr),e(qt,ea),e(C,ta),e(C,N),$(Ft,N,null),e(N,oa),e(N,me),e(me,na),e(me,so),e(so,sa),e(me,ra),e(me,No),e(No,aa),e(me,ia),e(N,la),$(Se,N,null),e(N,da),$(Oe,N,null),k(t,Bn,_),k(t,ue,_),e(ue,Re),e(Re,Do),$(zt,Do,null),e(ue,ca),e(ue,Wo),e(Wo,pa),k(t,qn,_),k(t,E,_),$(xt,E,null),e(E,ha),e(E,Qo),e(Qo,ma),e(E,ua),e(E,Ct),e(Ct,fa),e(Ct,ro),e(ro,ga),e(Ct,_a),e(E,ba),e(E,Et),e(Et,ka),e(Et,jt),e(jt,va),e(Et,wa),e(E,$a),e(E,A),$(Pt,A,null),e(A,Ta),e(A,fe),e(fe,ya),e(fe,ao),e(ao,Ia),e(fe,Ba),e(fe,Ho),e(Ho,qa),e(fe,Ma),e(A,Fa),$(Ne,A,null),e(A,za),$(De,A,null),e(A,xa),$(We,A,null),k(t,Mn,_),k(t,ge,_),e(ge,Qe),e(Qe,Uo),$(At,Uo,null),e(ge,Ca),e(ge,Vo),e(Vo,Ea),k(t,Fn,_),k(t,j,_),$(Lt,j,null),e(j,ja),e(j,_e),e(_e,Pa),e(_e,Go),e(Go,Aa),e(_e,La),e(_e,Jo),e(Jo,Sa),e(_e,Oa),e(j,Ra),e(j,St),e(St,Na),e(St,io),e(io,Da),e(St,Wa),e(j,Qa),e(j,Ot),e(Ot,Ha),e(Ot,Rt),e(Rt,Ua),e(Ot,Va),e(j,Ga),e(j,L),$(Nt,L,null),e(L,Ja),e(L,be),e(be,Ka),e(be,lo),e(lo,Ya),e(be,Za),e(be,Ko),e(Ko,Xa),e(be,ei),e(L,ti),$(He,L,null),e(L,oi),$(Ue,L,null),e(L,ni),$(Ve,L,null),zn=!0},p(t,[_]){const Dt={};_&2&&(Dt.$$scope={dirty:_,ctx:t}),Ie.$set(Dt);const Yo={};_&2&&(Yo.$$scope={dirty:_,ctx:t}),Be.$set(Yo);const Zo={};_&2&&(Zo.$$scope={dirty:_,ctx:t}),Me.$set(Zo);const Xo={};_&2&&(Xo.$$scope={dirty:_,ctx:t}),Fe.$set(Xo);const Wt={};_&2&&(Wt.$$scope={dirty:_,ctx:t}),ze.$set(Wt);const en={};_&2&&(en.$$scope={dirty:_,ctx:t}),Ce.$set(en);const tn={};_&2&&(tn.$$scope={dirty:_,ctx:t}),Ee.$set(tn);const on={};_&2&&(on.$$scope={dirty:_,ctx:t}),je.$set(on);const Qt={};_&2&&(Qt.$$scope={dirty:_,ctx:t}),Pe.$set(Qt);const nn={};_&2&&(nn.$$scope={dirty:_,ctx:t}),Ae.$set(nn);const sn={};_&2&&(sn.$$scope={dirty:_,ctx:t}),Se.$set(sn);const rn={};_&2&&(rn.$$scope={dirty:_,ctx:t}),Oe.$set(rn);const an={};_&2&&(an.$$scope={dirty:_,ctx:t}),Ne.$set(an);const ke={};_&2&&(ke.$$scope={dirty:_,ctx:t}),De.$set(ke);const ln={};_&2&&(ln.$$scope={dirty:_,ctx:t}),We.$set(ln);const dn={};_&2&&(dn.$$scope={dirty:_,ctx:t}),He.$set(dn);const Ht={};_&2&&(Ht.$$scope={dirty:_,ctx:t}),Ue.$set(Ht);const cn={};_&2&&(cn.$$scope={dirty:_,ctx:t}),Ve.$set(cn)},i(t){zn||(T(n.$$.fragment,t),T(Ke.$$.fragment,t),T(et.$$.fragment,t),T(tt.$$.fragment,t),T(nt.$$.fragment,t),T(st.$$.fragment,t),T(ct.$$.fragment,t),T(Ie.$$.fragment,t),T(Be.$$.fragment,t),T(pt.$$.fragment,t),T(ht.$$.fragment,t),T(_t.$$.fragment,t),T(Me.$$.fragment,t),T(Fe.$$.fragment,t),T(ze.$$.fragment,t),T(bt.$$.fragment,t),T(kt.$$.fragment,t),T(Tt.$$.fragment,t),T(Ce.$$.fragment,t),T(Ee.$$.fragment,t),T(je.$$.fragment,t),T(Pe.$$.fragment,t),T(Ae.$$.fragment,t),T(yt.$$.fragment,t),T(It.$$.fragment,t),T(Ft.$$.fragment,t),T(Se.$$.fragment,t),T(Oe.$$.fragment,t),T(zt.$$.fragment,t),T(xt.$$.fragment,t),T(Pt.$$.fragment,t),T(Ne.$$.fragment,t),T(De.$$.fragment,t),T(We.$$.fragment,t),T(At.$$.fragment,t),T(Lt.$$.fragment,t),T(Nt.$$.fragment,t),T(He.$$.fragment,t),T(Ue.$$.fragment,t),T(Ve.$$.fragment,t),zn=!0)},o(t){y(n.$$.fragment,t),y(Ke.$$.fragment,t),y(et.$$.fragment,t),y(tt.$$.fragment,t),y(nt.$$.fragment,t),y(st.$$.fragment,t),y(ct.$$.fragment,t),y(Ie.$$.fragment,t),y(Be.$$.fragment,t),y(pt.$$.fragment,t),y(ht.$$.fragment,t),y(_t.$$.fragment,t),y(Me.$$.fragment,t),y(Fe.$$.fragment,t),y(ze.$$.fragment,t),y(bt.$$.fragment,t),y(kt.$$.fragment,t),y(Tt.$$.fragment,t),y(Ce.$$.fragment,t),y(Ee.$$.fragment,t),y(je.$$.fragment,t),y(Pe.$$.fragment,t),y(Ae.$$.fragment,t),y(yt.$$.fragment,t),y(It.$$.fragment,t),y(Ft.$$.fragment,t),y(Se.$$.fragment,t),y(Oe.$$.fragment,t),y(zt.$$.fragment,t),y(xt.$$.fragment,t),y(Pt.$$.fragment,t),y(Ne.$$.fragment,t),y(De.$$.fragment,t),y(We.$$.fragment,t),y(At.$$.fragment,t),y(Lt.$$.fragment,t),y(Nt.$$.fragment,t),y(He.$$.fragment,t),y(Ue.$$.fragment,t),y(Ve.$$.fragment,t),zn=!1},d(t){o(s),t&&o(g),t&&o(c),I(n),t&&o(pn),t&&o(oe),I(Ke),t&&o(hn),t&&o($e),t&&o(mn),t&&o(Ut),t&&o(un),t&&o(Vt),t&&o(fn),t&&o(V),t&&o(gn),t&&o(ne),I(et),t&&o(_n),t&&o(U),I(tt),t&&o(bn),t&&o(ae),I(nt),t&&o(kn),t&&o(F),I(st),I(ct),I(Ie),I(Be),t&&o(vn),t&&o(le),I(pt),t&&o(wn),t&&o(z),I(ht),I(_t),I(Me),I(Fe),I(ze),t&&o($n),t&&o(ce),I(bt),t&&o(Tn),t&&o(x),I(kt),I(Tt),I(Ce),I(Ee),I(je),I(Pe),I(Ae),t&&o(yn),t&&o(he),I(yt),t&&o(In),t&&o(C),I(It),I(Ft),I(Se),I(Oe),t&&o(Bn),t&&o(ue),I(zt),t&&o(qn),t&&o(E),I(xt),I(Pt),I(Ne),I(De),I(We),t&&o(Mn),t&&o(ge),I(At),t&&o(Fn),t&&o(j),I(Lt),I(Nt),I(He),I(Ue),I(Ve)}}}const zl={local:"ibert",sections:[{local:"overview",title:"Overview"},{local:"transformers.IBertConfig",title:"IBertConfig"},{local:"transformers.IBertModel",title:"IBertModel"},{local:"transformers.IBertForMaskedLM",title:"IBertForMaskedLM"},{local:"transformers.IBertForSequenceClassification",title:"IBertForSequenceClassification"},{local:"transformers.IBertForMultipleChoice",title:"IBertForMultipleChoice"},{local:"transformers.IBertForTokenClassification",title:"IBertForTokenClassification"},{local:"transformers.IBertForQuestionAnswering",title:"IBertForQuestionAnswering"}],title:"I-BERT"};function xl(B){return cl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Sl extends al{constructor(s){super();il(this,s,xl,Fl,ll,{})}}export{Sl as default,zl as metadata};
