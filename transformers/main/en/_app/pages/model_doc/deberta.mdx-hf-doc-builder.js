import{S as B_,i as A_,s as L_,e as a,k as h,w as T,t as n,M as R_,c as r,d as t,m,a as i,x as y,h as s,b as u,G as e,g as _,y as $,q as v,o as D,B as E,v as O_,L as Ee}from"../../chunks/vendor-hf-doc-builder.js";import{T as at}from"../../chunks/Tip-hf-doc-builder.js";import{D as ee}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Fe}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as rt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as De}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function I_(q){let d,g,c,f,w;return f=new Fe({props:{code:`from transformers import DebertaTokenizer
tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[15496, 995]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[18435, 995]`}}),{c(){d=a("p"),g=n("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c=h(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),p.forEach(t),c=m(l),y(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(f,l,p),w=!0},p:Ee,i(l){w||(v(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function S_(q){let d,g,c,f,w;return{c(){d=a("p"),g=n("When used with "),c=a("code"),f=n("is_split_into_words=True"),w=n(", this tokenizer will add a space before each word (even the first one).")},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"When used with "),c=r(p,"CODE",{});var z=i(c);f=s(z,"is_split_into_words=True"),z.forEach(t),w=s(p,", this tokenizer will add a space before each word (even the first one)."),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,w)},d(l){l&&t(d)}}}function N_(q){let d,g,c,f,w;return f=new Fe({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=a("p"),g=n("sequence pair mask has the following format:"),c=h(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"sequence pair mask has the following format:"),p.forEach(t),c=m(l),y(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(f,l,p),w=!0},p:Ee,i(l){w||(v(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function W_(q){let d,g,c,f,w;return f=new Fe({props:{code:`from transformers import DebertaTokenizerFast
tokenizer = DebertaTokenizerFast.from_pretrained("microsoft/deberta-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = DebertaTokenizerFast.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[15496, 995]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[18435, 995]`}}),{c(){d=a("p"),g=n("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c=h(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),p.forEach(t),c=m(l),y(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(f,l,p),w=!0},p:Ee,i(l){w||(v(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function H_(q){let d,g,c,f,w,l,p,z;return{c(){d=a("p"),g=n("When used with "),c=a("code"),f=n("is_split_into_words=True"),w=n(", this tokenizer needs to be instantiated with "),l=a("code"),p=n("add_prefix_space=True"),z=n(".")},l(ae){d=r(ae,"P",{});var V=i(d);g=s(V,"When used with "),c=r(V,"CODE",{});var L=i(c);f=s(L,"is_split_into_words=True"),L.forEach(t),w=s(V,", this tokenizer needs to be instantiated with "),l=r(V,"CODE",{});var te=i(l);p=s(te,"add_prefix_space=True"),te.forEach(t),z=s(V,"."),V.forEach(t)},m(ae,V){_(ae,d,V),e(d,g),e(d,c),e(c,f),e(d,w),e(d,l),e(l,p),e(d,z)},d(ae){ae&&t(d)}}}function U_(q){let d,g,c,f,w;return f=new Fe({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=a("p"),g=n("sequence pair mask has the following format:"),c=h(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"sequence pair mask has the following format:"),p.forEach(t),c=m(l),y(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(f,l,p),w=!0},p:Ee,i(l){w||(v(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function K_(q){let d,g,c,f,w;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,w)},d(l){l&&t(d)}}}function Q_(q){let d,g,c,f,w;return f=new Fe({props:{code:`from transformers import DebertaTokenizer, DebertaModel
import torch

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaModel.from_pretrained("microsoft/deberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaModel.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),c=h(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),y(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(f,l,p),w=!0},p:Ee,i(l){w||(v(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function G_(q){let d,g,c,f,w;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,w)},d(l){l&&t(d)}}}function V_(q){let d,g,c,f,w;return f=new Fe({props:{code:`from transformers import DebertaTokenizer, DebertaForMaskedLM
import torch

tokenizer = DebertaTokenizer.from_pretrained("lsanochkin/deberta-large-feedback")
model = DebertaForMaskedLM.from_pretrained("lsanochkin/deberta-large-feedback")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;lsanochkin/deberta-large-feedback&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;lsanochkin/deberta-large-feedback&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),c=h(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),y(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(f,l,p),w=!0},p:Ee,i(l){w||(v(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function J_(q){let d,g;return d=new Fe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.54</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,f){$(d,c,f),g=!0},p:Ee,i(c){g||(v(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function X_(q){let d,g,c,f,w;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,w)},d(l){l&&t(d)}}}function Y_(q){let d,g,c,f,w;return f=new Fe({props:{code:`import torch
from transformers import DebertaTokenizer, DebertaForSequenceClassification

tokenizer = DebertaTokenizer.from_pretrained("hf-internal-testing/tiny-random-deberta")
model = DebertaForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-deberta")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-deberta&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-deberta&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=a("p"),g=n("Example of single-label classification:"),c=h(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example of single-label classification:"),p.forEach(t),c=m(l),y(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(f,l,p),w=!0},p:Ee,i(l){w||(v(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function Z_(q){let d,g;return d=new Fe({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = DebertaForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-deberta", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-deberta&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.69</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,f){$(d,c,f),g=!0},p:Ee,i(c){g||(v(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function eb(q){let d,g,c,f,w;return f=new Fe({props:{code:`import torch
from transformers import DebertaTokenizer, DebertaForSequenceClassification

tokenizer = DebertaTokenizer.from_pretrained("hf-internal-testing/tiny-random-deberta")
model = DebertaForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-deberta", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-deberta&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-deberta&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=a("p"),g=n("Example of multi-label classification:"),c=h(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example of multi-label classification:"),p.forEach(t),c=m(l),y(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(f,l,p),w=!0},p:Ee,i(l){w||(v(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function tb(q){let d,g;return d=new Fe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = DebertaForSequenceClassification.from_pretrained(
    "hf-internal-testing/tiny-random-deberta", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;hf-internal-testing/tiny-random-deberta&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,f){$(d,c,f),g=!0},p:Ee,i(c){g||(v(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function ob(q){let d,g,c,f,w;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,w)},d(l){l&&t(d)}}}function nb(q){let d,g,c,f,w;return f=new Fe({props:{code:`from transformers import DebertaTokenizer, DebertaForTokenClassification
import torch

tokenizer = DebertaTokenizer.from_pretrained("dbsamu/deberta-base-finetuned-ner")
model = DebertaForTokenClassification.from_pretrained("dbsamu/deberta-base-finetuned-ner")

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
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;dbsamu/deberta-base-finetuned-ner&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;dbsamu/deberta-base-finetuned-ner&quot;</span>)

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
[<span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>]`}}),{c(){d=a("p"),g=n("Example:"),c=h(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),y(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(f,l,p),w=!0},p:Ee,i(l){w||(v(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function sb(q){let d,g;return d=new Fe({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.04</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,f){$(d,c,f),g=!0},p:Ee,i(c){g||(v(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function ab(q){let d,g,c,f,w;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,w)},d(l){l&&t(d)}}}function rb(q){let d,g,c,f,w;return f=new Fe({props:{code:`from transformers import DebertaTokenizer, DebertaForQuestionAnswering
import torch

tokenizer = DebertaTokenizer.from_pretrained("Palak/microsoft_deberta-large_squad")
model = DebertaForQuestionAnswering.from_pretrained("Palak/microsoft_deberta-large_squad")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;Palak/microsoft_deberta-large_squad&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;Palak/microsoft_deberta-large_squad&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27; a nice puppet&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),c=h(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),y(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(f,l,p),w=!0},p:Ee,i(l){w||(v(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function ib(q){let d,g;return d=new Fe({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([12])
target_end_index = torch.tensor([14])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">12</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">14</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.14</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,f){$(d,c,f),g=!0},p:Ee,i(c){g||(v(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function lb(q){let d,g,c,f,w,l,p,z,ae,V,L,te,se,F,qe,G,xe,be,I,ze,de,J,je,ke,U,Me,we,K,Ce,Te,oe,M,C,ce,X,Pe,ye,R,Be,pe,P,Ae,W,Le,Re,H,Oe,Ie,O,re,S,ue,Z,B,ge,A,$e,ne;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),w=n(" accept two formats as input:"),l=h(),p=a("ul"),z=a("li"),ae=n("having all inputs as keyword arguments (like PyTorch models), or"),V=h(),L=a("li"),te=n("having all inputs as a list, tuple or dict in the first positional argument."),se=h(),F=a("p"),qe=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=a("code"),xe=n("model.fit()"),be=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),ze=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),je=n("fit()"),ke=n(" and "),U=a("code"),Me=n("predict()"),we=n(`, such as when creating your own layers or models with
the Keras `),K=a("code"),Ce=n("Functional"),Te=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=h(),M=a("ul"),C=a("li"),ce=n("a single Tensor with "),X=a("code"),Pe=n("input_ids"),ye=n(" only and nothing else: "),R=a("code"),Be=n("model(input_ids)"),pe=h(),P=a("li"),Ae=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a("code"),Le=n("model([input_ids, attention_mask])"),Re=n(" or "),H=a("code"),Oe=n("model([input_ids, attention_mask, token_type_ids])"),Ie=h(),O=a("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ue=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=h(),B=a("p"),ge=n(`Note that when creating models and layers with
`),A=a("a"),$e=n("subclassing"),ne=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=r(k,"P",{});var x=i(d);g=s(x,"TensorFlow models and layers in "),c=r(x,"CODE",{});var me=i(c);f=s(me,"transformers"),me.forEach(t),w=s(x," accept two formats as input:"),x.forEach(t),l=m(k),p=r(k,"UL",{});var ie=i(p);z=r(ie,"LI",{});var We=i(z);ae=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),V=m(ie),L=r(ie,"LI",{});var Ke=i(L);te=s(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),ie.forEach(t),se=m(k),F=r(k,"P",{});var j=i(F);qe=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=r(j,"CODE",{});var He=i(G);xe=s(He,"model.fit()"),He.forEach(t),be=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(j,"CODE",{});var Qe=i(I);ze=s(Qe,"model.fit()"),Qe.forEach(t),de=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(j,"CODE",{});var Ge=i(J);je=s(Ge,"fit()"),Ge.forEach(t),ke=s(j," and "),U=r(j,"CODE",{});var Ne=i(U);Me=s(Ne,"predict()"),Ne.forEach(t),we=s(j,`, such as when creating your own layers or models with
the Keras `),K=r(j,"CODE",{});var Ve=i(K);Ce=s(Ve,"Functional"),Ve.forEach(t),Te=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=m(k),M=r(k,"UL",{});var N=i(M);C=r(N,"LI",{});var Y=i(C);ce=s(Y,"a single Tensor with "),X=r(Y,"CODE",{});var ve=i(X);Pe=s(ve,"input_ids"),ve.forEach(t),ye=s(Y," only and nothing else: "),R=r(Y,"CODE",{});var Je=i(R);Be=s(Je,"model(input_ids)"),Je.forEach(t),Y.forEach(t),pe=m(N),P=r(N,"LI",{});var Q=i(P);Ae=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r(Q,"CODE",{});var Xe=i(W);Le=s(Xe,"model([input_ids, attention_mask])"),Xe.forEach(t),Re=s(Q," or "),H=r(Q,"CODE",{});var Ye=i(H);Oe=s(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),Q.forEach(t),Ie=m(N),O=r(N,"LI",{});var fe=i(O);re=s(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(fe,"CODE",{});var Ze=i(S);ue=s(Ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ze.forEach(t),fe.forEach(t),N.forEach(t),Z=m(k),B=r(k,"P",{});var le=i(B);ge=s(le,`Note that when creating models and layers with
`),A=r(le,"A",{href:!0,rel:!0});var Ue=i(A);$e=s(Ue,"subclassing"),Ue.forEach(t),ne=s(le,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),le.forEach(t),this.h()},h(){u(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(A,"rel","nofollow")},m(k,x){_(k,d,x),e(d,g),e(d,c),e(c,f),e(d,w),_(k,l,x),_(k,p,x),e(p,z),e(z,ae),e(p,V),e(p,L),e(L,te),_(k,se,x),_(k,F,x),e(F,qe),e(F,G),e(G,xe),e(F,be),e(F,I),e(I,ze),e(F,de),e(F,J),e(J,je),e(F,ke),e(F,U),e(U,Me),e(F,we),e(F,K),e(K,Ce),e(F,Te),_(k,oe,x),_(k,M,x),e(M,C),e(C,ce),e(C,X),e(X,Pe),e(C,ye),e(C,R),e(R,Be),e(M,pe),e(M,P),e(P,Ae),e(P,W),e(W,Le),e(P,Re),e(P,H),e(H,Oe),e(M,Ie),e(M,O),e(O,re),e(O,S),e(S,ue),_(k,Z,x),_(k,B,x),e(B,ge),e(B,A),e(A,$e),e(B,ne)},d(k){k&&t(d),k&&t(l),k&&t(p),k&&t(se),k&&t(F),k&&t(oe),k&&t(M),k&&t(Z),k&&t(B)}}}function db(q){let d,g,c,f,w;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,w)},d(l){l&&t(d)}}}function cb(q){let d,g,c,f,w;return f=new Fe({props:{code:`from transformers import DebertaTokenizer, TFDebertaModel
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaModel.from_pretrained("kamalkraj/deberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaModel.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),c=h(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),y(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(f,l,p),w=!0},p:Ee,i(l){w||(v(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function pb(q){let d,g,c,f,w,l,p,z,ae,V,L,te,se,F,qe,G,xe,be,I,ze,de,J,je,ke,U,Me,we,K,Ce,Te,oe,M,C,ce,X,Pe,ye,R,Be,pe,P,Ae,W,Le,Re,H,Oe,Ie,O,re,S,ue,Z,B,ge,A,$e,ne;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),w=n(" accept two formats as input:"),l=h(),p=a("ul"),z=a("li"),ae=n("having all inputs as keyword arguments (like PyTorch models), or"),V=h(),L=a("li"),te=n("having all inputs as a list, tuple or dict in the first positional argument."),se=h(),F=a("p"),qe=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=a("code"),xe=n("model.fit()"),be=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),ze=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),je=n("fit()"),ke=n(" and "),U=a("code"),Me=n("predict()"),we=n(`, such as when creating your own layers or models with
the Keras `),K=a("code"),Ce=n("Functional"),Te=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=h(),M=a("ul"),C=a("li"),ce=n("a single Tensor with "),X=a("code"),Pe=n("input_ids"),ye=n(" only and nothing else: "),R=a("code"),Be=n("model(input_ids)"),pe=h(),P=a("li"),Ae=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a("code"),Le=n("model([input_ids, attention_mask])"),Re=n(" or "),H=a("code"),Oe=n("model([input_ids, attention_mask, token_type_ids])"),Ie=h(),O=a("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ue=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=h(),B=a("p"),ge=n(`Note that when creating models and layers with
`),A=a("a"),$e=n("subclassing"),ne=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=r(k,"P",{});var x=i(d);g=s(x,"TensorFlow models and layers in "),c=r(x,"CODE",{});var me=i(c);f=s(me,"transformers"),me.forEach(t),w=s(x," accept two formats as input:"),x.forEach(t),l=m(k),p=r(k,"UL",{});var ie=i(p);z=r(ie,"LI",{});var We=i(z);ae=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),V=m(ie),L=r(ie,"LI",{});var Ke=i(L);te=s(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),ie.forEach(t),se=m(k),F=r(k,"P",{});var j=i(F);qe=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=r(j,"CODE",{});var He=i(G);xe=s(He,"model.fit()"),He.forEach(t),be=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(j,"CODE",{});var Qe=i(I);ze=s(Qe,"model.fit()"),Qe.forEach(t),de=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(j,"CODE",{});var Ge=i(J);je=s(Ge,"fit()"),Ge.forEach(t),ke=s(j," and "),U=r(j,"CODE",{});var Ne=i(U);Me=s(Ne,"predict()"),Ne.forEach(t),we=s(j,`, such as when creating your own layers or models with
the Keras `),K=r(j,"CODE",{});var Ve=i(K);Ce=s(Ve,"Functional"),Ve.forEach(t),Te=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=m(k),M=r(k,"UL",{});var N=i(M);C=r(N,"LI",{});var Y=i(C);ce=s(Y,"a single Tensor with "),X=r(Y,"CODE",{});var ve=i(X);Pe=s(ve,"input_ids"),ve.forEach(t),ye=s(Y," only and nothing else: "),R=r(Y,"CODE",{});var Je=i(R);Be=s(Je,"model(input_ids)"),Je.forEach(t),Y.forEach(t),pe=m(N),P=r(N,"LI",{});var Q=i(P);Ae=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r(Q,"CODE",{});var Xe=i(W);Le=s(Xe,"model([input_ids, attention_mask])"),Xe.forEach(t),Re=s(Q," or "),H=r(Q,"CODE",{});var Ye=i(H);Oe=s(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),Q.forEach(t),Ie=m(N),O=r(N,"LI",{});var fe=i(O);re=s(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(fe,"CODE",{});var Ze=i(S);ue=s(Ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ze.forEach(t),fe.forEach(t),N.forEach(t),Z=m(k),B=r(k,"P",{});var le=i(B);ge=s(le,`Note that when creating models and layers with
`),A=r(le,"A",{href:!0,rel:!0});var Ue=i(A);$e=s(Ue,"subclassing"),Ue.forEach(t),ne=s(le,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),le.forEach(t),this.h()},h(){u(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(A,"rel","nofollow")},m(k,x){_(k,d,x),e(d,g),e(d,c),e(c,f),e(d,w),_(k,l,x),_(k,p,x),e(p,z),e(z,ae),e(p,V),e(p,L),e(L,te),_(k,se,x),_(k,F,x),e(F,qe),e(F,G),e(G,xe),e(F,be),e(F,I),e(I,ze),e(F,de),e(F,J),e(J,je),e(F,ke),e(F,U),e(U,Me),e(F,we),e(F,K),e(K,Ce),e(F,Te),_(k,oe,x),_(k,M,x),e(M,C),e(C,ce),e(C,X),e(X,Pe),e(C,ye),e(C,R),e(R,Be),e(M,pe),e(M,P),e(P,Ae),e(P,W),e(W,Le),e(P,Re),e(P,H),e(H,Oe),e(M,Ie),e(M,O),e(O,re),e(O,S),e(S,ue),_(k,Z,x),_(k,B,x),e(B,ge),e(B,A),e(A,$e),e(B,ne)},d(k){k&&t(d),k&&t(l),k&&t(p),k&&t(se),k&&t(F),k&&t(oe),k&&t(M),k&&t(Z),k&&t(B)}}}function hb(q){let d,g,c,f,w;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,w)},d(l){l&&t(d)}}}function mb(q){let d,g,c,f,w;return f=new Fe({props:{code:`from transformers import DebertaTokenizer, TFDebertaForMaskedLM
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForMaskedLM.from_pretrained("kamalkraj/deberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=a("p"),g=n("Example:"),c=h(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),y(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(f,l,p),w=!0},p:Ee,i(l){w||(v(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function fb(q){let d,g;return d=new Fe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,f){$(d,c,f),g=!0},p:Ee,i(c){g||(v(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function ub(q){let d,g,c,f,w,l,p,z,ae,V,L,te,se,F,qe,G,xe,be,I,ze,de,J,je,ke,U,Me,we,K,Ce,Te,oe,M,C,ce,X,Pe,ye,R,Be,pe,P,Ae,W,Le,Re,H,Oe,Ie,O,re,S,ue,Z,B,ge,A,$e,ne;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),w=n(" accept two formats as input:"),l=h(),p=a("ul"),z=a("li"),ae=n("having all inputs as keyword arguments (like PyTorch models), or"),V=h(),L=a("li"),te=n("having all inputs as a list, tuple or dict in the first positional argument."),se=h(),F=a("p"),qe=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=a("code"),xe=n("model.fit()"),be=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),ze=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),je=n("fit()"),ke=n(" and "),U=a("code"),Me=n("predict()"),we=n(`, such as when creating your own layers or models with
the Keras `),K=a("code"),Ce=n("Functional"),Te=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=h(),M=a("ul"),C=a("li"),ce=n("a single Tensor with "),X=a("code"),Pe=n("input_ids"),ye=n(" only and nothing else: "),R=a("code"),Be=n("model(input_ids)"),pe=h(),P=a("li"),Ae=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a("code"),Le=n("model([input_ids, attention_mask])"),Re=n(" or "),H=a("code"),Oe=n("model([input_ids, attention_mask, token_type_ids])"),Ie=h(),O=a("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ue=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=h(),B=a("p"),ge=n(`Note that when creating models and layers with
`),A=a("a"),$e=n("subclassing"),ne=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=r(k,"P",{});var x=i(d);g=s(x,"TensorFlow models and layers in "),c=r(x,"CODE",{});var me=i(c);f=s(me,"transformers"),me.forEach(t),w=s(x," accept two formats as input:"),x.forEach(t),l=m(k),p=r(k,"UL",{});var ie=i(p);z=r(ie,"LI",{});var We=i(z);ae=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),V=m(ie),L=r(ie,"LI",{});var Ke=i(L);te=s(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),ie.forEach(t),se=m(k),F=r(k,"P",{});var j=i(F);qe=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=r(j,"CODE",{});var He=i(G);xe=s(He,"model.fit()"),He.forEach(t),be=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(j,"CODE",{});var Qe=i(I);ze=s(Qe,"model.fit()"),Qe.forEach(t),de=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(j,"CODE",{});var Ge=i(J);je=s(Ge,"fit()"),Ge.forEach(t),ke=s(j," and "),U=r(j,"CODE",{});var Ne=i(U);Me=s(Ne,"predict()"),Ne.forEach(t),we=s(j,`, such as when creating your own layers or models with
the Keras `),K=r(j,"CODE",{});var Ve=i(K);Ce=s(Ve,"Functional"),Ve.forEach(t),Te=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=m(k),M=r(k,"UL",{});var N=i(M);C=r(N,"LI",{});var Y=i(C);ce=s(Y,"a single Tensor with "),X=r(Y,"CODE",{});var ve=i(X);Pe=s(ve,"input_ids"),ve.forEach(t),ye=s(Y," only and nothing else: "),R=r(Y,"CODE",{});var Je=i(R);Be=s(Je,"model(input_ids)"),Je.forEach(t),Y.forEach(t),pe=m(N),P=r(N,"LI",{});var Q=i(P);Ae=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r(Q,"CODE",{});var Xe=i(W);Le=s(Xe,"model([input_ids, attention_mask])"),Xe.forEach(t),Re=s(Q," or "),H=r(Q,"CODE",{});var Ye=i(H);Oe=s(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),Q.forEach(t),Ie=m(N),O=r(N,"LI",{});var fe=i(O);re=s(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(fe,"CODE",{});var Ze=i(S);ue=s(Ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ze.forEach(t),fe.forEach(t),N.forEach(t),Z=m(k),B=r(k,"P",{});var le=i(B);ge=s(le,`Note that when creating models and layers with
`),A=r(le,"A",{href:!0,rel:!0});var Ue=i(A);$e=s(Ue,"subclassing"),Ue.forEach(t),ne=s(le,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),le.forEach(t),this.h()},h(){u(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(A,"rel","nofollow")},m(k,x){_(k,d,x),e(d,g),e(d,c),e(c,f),e(d,w),_(k,l,x),_(k,p,x),e(p,z),e(z,ae),e(p,V),e(p,L),e(L,te),_(k,se,x),_(k,F,x),e(F,qe),e(F,G),e(G,xe),e(F,be),e(F,I),e(I,ze),e(F,de),e(F,J),e(J,je),e(F,ke),e(F,U),e(U,Me),e(F,we),e(F,K),e(K,Ce),e(F,Te),_(k,oe,x),_(k,M,x),e(M,C),e(C,ce),e(C,X),e(X,Pe),e(C,ye),e(C,R),e(R,Be),e(M,pe),e(M,P),e(P,Ae),e(P,W),e(W,Le),e(P,Re),e(P,H),e(H,Oe),e(M,Ie),e(M,O),e(O,re),e(O,S),e(S,ue),_(k,Z,x),_(k,B,x),e(B,ge),e(B,A),e(A,$e),e(B,ne)},d(k){k&&t(d),k&&t(l),k&&t(p),k&&t(se),k&&t(F),k&&t(oe),k&&t(M),k&&t(Z),k&&t(B)}}}function gb(q){let d,g,c,f,w;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,w)},d(l){l&&t(d)}}}function _b(q){let d,g,c,f,w;return f=new Fe({props:{code:`from transformers import DebertaTokenizer, TFDebertaForSequenceClassification
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForSequenceClassification.from_pretrained("kamalkraj/deberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),g=n("Example:"),c=h(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),y(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(f,l,p),w=!0},p:Ee,i(l){w||(v(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function bb(q){let d,g;return d=new Fe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFDebertaForSequenceClassification.from_pretrained("kamalkraj/deberta-base", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,f){$(d,c,f),g=!0},p:Ee,i(c){g||(v(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function kb(q){let d,g,c,f,w,l,p,z,ae,V,L,te,se,F,qe,G,xe,be,I,ze,de,J,je,ke,U,Me,we,K,Ce,Te,oe,M,C,ce,X,Pe,ye,R,Be,pe,P,Ae,W,Le,Re,H,Oe,Ie,O,re,S,ue,Z,B,ge,A,$e,ne;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),w=n(" accept two formats as input:"),l=h(),p=a("ul"),z=a("li"),ae=n("having all inputs as keyword arguments (like PyTorch models), or"),V=h(),L=a("li"),te=n("having all inputs as a list, tuple or dict in the first positional argument."),se=h(),F=a("p"),qe=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=a("code"),xe=n("model.fit()"),be=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),ze=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),je=n("fit()"),ke=n(" and "),U=a("code"),Me=n("predict()"),we=n(`, such as when creating your own layers or models with
the Keras `),K=a("code"),Ce=n("Functional"),Te=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=h(),M=a("ul"),C=a("li"),ce=n("a single Tensor with "),X=a("code"),Pe=n("input_ids"),ye=n(" only and nothing else: "),R=a("code"),Be=n("model(input_ids)"),pe=h(),P=a("li"),Ae=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a("code"),Le=n("model([input_ids, attention_mask])"),Re=n(" or "),H=a("code"),Oe=n("model([input_ids, attention_mask, token_type_ids])"),Ie=h(),O=a("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ue=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=h(),B=a("p"),ge=n(`Note that when creating models and layers with
`),A=a("a"),$e=n("subclassing"),ne=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=r(k,"P",{});var x=i(d);g=s(x,"TensorFlow models and layers in "),c=r(x,"CODE",{});var me=i(c);f=s(me,"transformers"),me.forEach(t),w=s(x," accept two formats as input:"),x.forEach(t),l=m(k),p=r(k,"UL",{});var ie=i(p);z=r(ie,"LI",{});var We=i(z);ae=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),V=m(ie),L=r(ie,"LI",{});var Ke=i(L);te=s(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),ie.forEach(t),se=m(k),F=r(k,"P",{});var j=i(F);qe=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=r(j,"CODE",{});var He=i(G);xe=s(He,"model.fit()"),He.forEach(t),be=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(j,"CODE",{});var Qe=i(I);ze=s(Qe,"model.fit()"),Qe.forEach(t),de=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(j,"CODE",{});var Ge=i(J);je=s(Ge,"fit()"),Ge.forEach(t),ke=s(j," and "),U=r(j,"CODE",{});var Ne=i(U);Me=s(Ne,"predict()"),Ne.forEach(t),we=s(j,`, such as when creating your own layers or models with
the Keras `),K=r(j,"CODE",{});var Ve=i(K);Ce=s(Ve,"Functional"),Ve.forEach(t),Te=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=m(k),M=r(k,"UL",{});var N=i(M);C=r(N,"LI",{});var Y=i(C);ce=s(Y,"a single Tensor with "),X=r(Y,"CODE",{});var ve=i(X);Pe=s(ve,"input_ids"),ve.forEach(t),ye=s(Y," only and nothing else: "),R=r(Y,"CODE",{});var Je=i(R);Be=s(Je,"model(input_ids)"),Je.forEach(t),Y.forEach(t),pe=m(N),P=r(N,"LI",{});var Q=i(P);Ae=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r(Q,"CODE",{});var Xe=i(W);Le=s(Xe,"model([input_ids, attention_mask])"),Xe.forEach(t),Re=s(Q," or "),H=r(Q,"CODE",{});var Ye=i(H);Oe=s(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),Q.forEach(t),Ie=m(N),O=r(N,"LI",{});var fe=i(O);re=s(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(fe,"CODE",{});var Ze=i(S);ue=s(Ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ze.forEach(t),fe.forEach(t),N.forEach(t),Z=m(k),B=r(k,"P",{});var le=i(B);ge=s(le,`Note that when creating models and layers with
`),A=r(le,"A",{href:!0,rel:!0});var Ue=i(A);$e=s(Ue,"subclassing"),Ue.forEach(t),ne=s(le,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),le.forEach(t),this.h()},h(){u(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(A,"rel","nofollow")},m(k,x){_(k,d,x),e(d,g),e(d,c),e(c,f),e(d,w),_(k,l,x),_(k,p,x),e(p,z),e(z,ae),e(p,V),e(p,L),e(L,te),_(k,se,x),_(k,F,x),e(F,qe),e(F,G),e(G,xe),e(F,be),e(F,I),e(I,ze),e(F,de),e(F,J),e(J,je),e(F,ke),e(F,U),e(U,Me),e(F,we),e(F,K),e(K,Ce),e(F,Te),_(k,oe,x),_(k,M,x),e(M,C),e(C,ce),e(C,X),e(X,Pe),e(C,ye),e(C,R),e(R,Be),e(M,pe),e(M,P),e(P,Ae),e(P,W),e(W,Le),e(P,Re),e(P,H),e(H,Oe),e(M,Ie),e(M,O),e(O,re),e(O,S),e(S,ue),_(k,Z,x),_(k,B,x),e(B,ge),e(B,A),e(A,$e),e(B,ne)},d(k){k&&t(d),k&&t(l),k&&t(p),k&&t(se),k&&t(F),k&&t(oe),k&&t(M),k&&t(Z),k&&t(B)}}}function wb(q){let d,g,c,f,w;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,w)},d(l){l&&t(d)}}}function Tb(q){let d,g,c,f,w;return f=new Fe({props:{code:`from transformers import DebertaTokenizer, TFDebertaForTokenClassification
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForTokenClassification.from_pretrained("kamalkraj/deberta-base")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

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
`}}),{c(){d=a("p"),g=n("Example:"),c=h(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),y(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(f,l,p),w=!0},p:Ee,i(l){w||(v(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function yb(q){let d,g;return d=new Fe({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,f){$(d,c,f),g=!0},p:Ee,i(c){g||(v(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function $b(q){let d,g,c,f,w,l,p,z,ae,V,L,te,se,F,qe,G,xe,be,I,ze,de,J,je,ke,U,Me,we,K,Ce,Te,oe,M,C,ce,X,Pe,ye,R,Be,pe,P,Ae,W,Le,Re,H,Oe,Ie,O,re,S,ue,Z,B,ge,A,$e,ne;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),w=n(" accept two formats as input:"),l=h(),p=a("ul"),z=a("li"),ae=n("having all inputs as keyword arguments (like PyTorch models), or"),V=h(),L=a("li"),te=n("having all inputs as a list, tuple or dict in the first positional argument."),se=h(),F=a("p"),qe=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=a("code"),xe=n("model.fit()"),be=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),ze=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),je=n("fit()"),ke=n(" and "),U=a("code"),Me=n("predict()"),we=n(`, such as when creating your own layers or models with
the Keras `),K=a("code"),Ce=n("Functional"),Te=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=h(),M=a("ul"),C=a("li"),ce=n("a single Tensor with "),X=a("code"),Pe=n("input_ids"),ye=n(" only and nothing else: "),R=a("code"),Be=n("model(input_ids)"),pe=h(),P=a("li"),Ae=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a("code"),Le=n("model([input_ids, attention_mask])"),Re=n(" or "),H=a("code"),Oe=n("model([input_ids, attention_mask, token_type_ids])"),Ie=h(),O=a("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ue=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=h(),B=a("p"),ge=n(`Note that when creating models and layers with
`),A=a("a"),$e=n("subclassing"),ne=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=r(k,"P",{});var x=i(d);g=s(x,"TensorFlow models and layers in "),c=r(x,"CODE",{});var me=i(c);f=s(me,"transformers"),me.forEach(t),w=s(x," accept two formats as input:"),x.forEach(t),l=m(k),p=r(k,"UL",{});var ie=i(p);z=r(ie,"LI",{});var We=i(z);ae=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),V=m(ie),L=r(ie,"LI",{});var Ke=i(L);te=s(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),ie.forEach(t),se=m(k),F=r(k,"P",{});var j=i(F);qe=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=r(j,"CODE",{});var He=i(G);xe=s(He,"model.fit()"),He.forEach(t),be=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(j,"CODE",{});var Qe=i(I);ze=s(Qe,"model.fit()"),Qe.forEach(t),de=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(j,"CODE",{});var Ge=i(J);je=s(Ge,"fit()"),Ge.forEach(t),ke=s(j," and "),U=r(j,"CODE",{});var Ne=i(U);Me=s(Ne,"predict()"),Ne.forEach(t),we=s(j,`, such as when creating your own layers or models with
the Keras `),K=r(j,"CODE",{});var Ve=i(K);Ce=s(Ve,"Functional"),Ve.forEach(t),Te=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),oe=m(k),M=r(k,"UL",{});var N=i(M);C=r(N,"LI",{});var Y=i(C);ce=s(Y,"a single Tensor with "),X=r(Y,"CODE",{});var ve=i(X);Pe=s(ve,"input_ids"),ve.forEach(t),ye=s(Y," only and nothing else: "),R=r(Y,"CODE",{});var Je=i(R);Be=s(Je,"model(input_ids)"),Je.forEach(t),Y.forEach(t),pe=m(N),P=r(N,"LI",{});var Q=i(P);Ae=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r(Q,"CODE",{});var Xe=i(W);Le=s(Xe,"model([input_ids, attention_mask])"),Xe.forEach(t),Re=s(Q," or "),H=r(Q,"CODE",{});var Ye=i(H);Oe=s(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),Q.forEach(t),Ie=m(N),O=r(N,"LI",{});var fe=i(O);re=s(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(fe,"CODE",{});var Ze=i(S);ue=s(Ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ze.forEach(t),fe.forEach(t),N.forEach(t),Z=m(k),B=r(k,"P",{});var le=i(B);ge=s(le,`Note that when creating models and layers with
`),A=r(le,"A",{href:!0,rel:!0});var Ue=i(A);$e=s(Ue,"subclassing"),Ue.forEach(t),ne=s(le,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),le.forEach(t),this.h()},h(){u(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(A,"rel","nofollow")},m(k,x){_(k,d,x),e(d,g),e(d,c),e(c,f),e(d,w),_(k,l,x),_(k,p,x),e(p,z),e(z,ae),e(p,V),e(p,L),e(L,te),_(k,se,x),_(k,F,x),e(F,qe),e(F,G),e(G,xe),e(F,be),e(F,I),e(I,ze),e(F,de),e(F,J),e(J,je),e(F,ke),e(F,U),e(U,Me),e(F,we),e(F,K),e(K,Ce),e(F,Te),_(k,oe,x),_(k,M,x),e(M,C),e(C,ce),e(C,X),e(X,Pe),e(C,ye),e(C,R),e(R,Be),e(M,pe),e(M,P),e(P,Ae),e(P,W),e(W,Le),e(P,Re),e(P,H),e(H,Oe),e(M,Ie),e(M,O),e(O,re),e(O,S),e(S,ue),_(k,Z,x),_(k,B,x),e(B,ge),e(B,A),e(A,$e),e(B,ne)},d(k){k&&t(d),k&&t(l),k&&t(p),k&&t(se),k&&t(F),k&&t(oe),k&&t(M),k&&t(Z),k&&t(B)}}}function vb(q){let d,g,c,f,w;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,f),e(d,w)},d(l){l&&t(d)}}}function Db(q){let d,g,c,f,w;return f=new Fe({props:{code:`from transformers import DebertaTokenizer, TFDebertaForQuestionAnswering
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForQuestionAnswering.from_pretrained("kamalkraj/deberta-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=a("p"),g=n("Example:"),c=h(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),y(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),$(f,l,p),w=!0},p:Ee,i(l){w||(v(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function Eb(q){let d,g;return d=new Fe({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,f){$(d,c,f),g=!0},p:Ee,i(c){g||(v(d.$$.fragment,c),g=!0)},o(c){D(d.$$.fragment,c),g=!1},d(c){E(d,c)}}}function Fb(q){let d,g,c,f,w,l,p,z,ae,V,L,te,se,F,qe,G,xe,be,I,ze,de,J,je,ke,U,Me,we,K,Ce,Te,oe,M,C,ce,X,Pe,ye,R,Be,pe,P,Ae,W,Le,Re,H,Oe,Ie,O,re,S,ue,Z,B,ge,A,$e,ne,k,x,me,ie,We,Ke,j,He,Qe,Ge,Ne,Ve,N,Y,ve,Je,Q,Xe,Ye,fe,Ze,le,Ue,Vt,zo,cr,In,kd,pr,wd,rl,he,Sn,Td,hr,yd,$d,mr,vd,Dd,jo,Ed,Nn,Fd,fr,qd,xd,zd,Mo,jd,Wn,Md,ja,Cd,Pd,Bd,Pt,Hn,Ad,ur,Ld,Rd,Un,gr,Od,Id,_r,Sd,Nd,Co,Kn,Wd,Jt,Hd,br,Ud,Kd,kr,Qd,Gd,Vd,$t,Qn,Jd,wr,Xd,Yd,Po,Zd,Xt,ec,Tr,tc,oc,yr,nc,sc,ac,Ma,Gn,il,Yt,Bo,$r,Vn,rc,vr,ic,ll,Se,Jn,lc,Xn,dc,Dr,cc,pc,hc,Er,mc,fc,Ao,uc,Yn,gc,Fr,_c,bc,kc,Lo,wc,Zn,Tc,Ca,yc,$c,vc,Bt,es,Dc,qr,Ec,Fc,ts,xr,qc,xc,zr,zc,jc,vt,os,Mc,jr,Cc,Pc,Ro,Bc,Zt,Ac,Mr,Lc,Rc,Cr,Oc,Ic,dl,eo,Oo,Pr,ns,Sc,Br,Nc,cl,wt,ss,Wc,as,Hc,rs,Uc,Kc,Qc,is,Gc,ls,Vc,Jc,Xc,Dt,ds,Yc,to,Zc,Pa,ep,tp,Ar,op,np,sp,Io,ap,So,pl,oo,No,Lr,cs,rp,Rr,ip,hl,no,ps,lp,Or,dp,ml,so,Wo,Ir,hs,cp,Sr,pp,fl,Tt,ms,hp,ao,mp,Nr,fp,up,fs,gp,_p,bp,us,kp,gs,wp,Tp,yp,ht,_s,$p,ro,vp,Ba,Dp,Ep,Wr,Fp,qp,xp,Ho,zp,Uo,jp,Ko,ul,io,Qo,Hr,bs,Mp,Ur,Cp,gl,it,ks,Pp,Kr,Bp,Ap,ws,Lp,Ts,Rp,Op,Ip,ys,Sp,$s,Np,Wp,Hp,et,vs,Up,lo,Kp,Aa,Qp,Gp,Qr,Vp,Jp,Xp,Go,Yp,Vo,Zp,Jo,eh,Xo,th,Yo,_l,co,Zo,Gr,Ds,oh,Vr,nh,bl,lt,Es,sh,Jr,ah,rh,Fs,ih,qs,lh,dh,ch,xs,ph,zs,hh,mh,fh,mt,js,uh,po,gh,La,_h,bh,Xr,kh,wh,Th,en,yh,tn,$h,on,kl,ho,nn,Yr,Ms,vh,Zr,Dh,wl,dt,Cs,Eh,mo,Fh,ei,qh,xh,ti,zh,jh,Mh,Ps,Ch,Bs,Ph,Bh,Ah,As,Lh,Ls,Rh,Oh,Ih,ft,Rs,Sh,fo,Nh,Ra,Wh,Hh,oi,Uh,Kh,Qh,sn,Gh,an,Vh,rn,Tl,uo,ln,ni,Os,Jh,si,Xh,yl,ct,Is,Yh,Ss,Zh,Ns,em,tm,om,Ws,nm,Hs,sm,am,rm,dn,im,Et,Us,lm,go,dm,Oa,cm,pm,ai,hm,mm,fm,cn,um,pn,$l,_o,hn,ri,Ks,gm,ii,_m,vl,jt,Qs,bm,li,km,wm,Ft,Gs,Tm,di,ym,$m,Vs,vm,ci,Dm,Em,Fm,yt,qm,pi,xm,zm,hi,jm,Mm,mi,Cm,Pm,fi,Bm,Am,Dl,bo,mn,ui,Js,Lm,gi,Rm,El,pt,Xs,Om,ko,Im,_i,Sm,Nm,Ys,Wm,Hm,Um,Zs,Km,ea,Qm,Gm,Vm,fn,Jm,ut,ta,Xm,wo,Ym,Ia,Zm,ef,bi,tf,of,nf,un,sf,gn,af,_n,Fl,To,bn,ki,oa,rf,wi,lf,ql,ot,na,df,Ti,cf,pf,sa,hf,aa,mf,ff,uf,ra,gf,ia,_f,bf,kf,kn,wf,gt,la,Tf,yo,yf,Sa,$f,vf,yi,Df,Ef,Ff,wn,qf,Tn,xf,yn,xl,$o,$n,$i,da,zf,vi,jf,zl,nt,ca,Mf,Di,Cf,Pf,pa,Bf,ha,Af,Lf,Rf,ma,Of,fa,If,Sf,Nf,vn,Wf,_t,ua,Hf,vo,Uf,Na,Kf,Qf,Ei,Gf,Vf,Jf,Dn,Xf,En,Yf,Fn,jl,Do,qn,Fi,ga,Zf,qi,eu,Ml,st,_a,tu,Eo,ou,xi,nu,su,zi,au,ru,iu,ba,lu,ka,du,cu,pu,wa,hu,Ta,mu,fu,uu,xn,gu,bt,ya,_u,Fo,bu,Wa,ku,wu,ji,Tu,yu,$u,zn,vu,jn,Du,Mn,Cl;return l=new rt({}),F=new rt({}),Z=new rt({}),k=new ee({props:{name:"class transformers.DebertaConfig",anchor:"transformers.DebertaConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-07"},{name:"relative_attention",val:" = False"},{name:"max_relative_positions",val:" = -1"},{name:"pad_token_id",val:" = 0"},{name:"position_biased_input",val:" = True"},{name:"pos_att_type",val:" = None"},{name:"pooler_dropout",val:" = 0"},{name:"pooler_hidden_act",val:" = 'gelu'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the DeBERTa model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaModel">DebertaModel</a> or <a href="/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaModel">TFDebertaModel</a>.`,name:"vocab_size"},{anchor:"transformers.DebertaConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.DebertaConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.DebertaConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.DebertaConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.DebertaConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code>, <code>&quot;gelu&quot;</code>, <code>&quot;tanh&quot;</code>, <code>&quot;gelu_fast&quot;</code>, <code>&quot;mish&quot;</code>, <code>&quot;linear&quot;</code>, <code>&quot;sigmoid&quot;</code> and <code>&quot;gelu_new&quot;</code>
are supported.`,name:"hidden_act"},{anchor:"transformers.DebertaConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.DebertaConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.DebertaConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.DebertaConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaModel">DebertaModel</a> or <a href="/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaModel">TFDebertaModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.DebertaConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DebertaConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.DebertaConfig.relative_attention",description:`<strong>relative_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether use relative position encoding.`,name:"relative_attention"},{anchor:"transformers.DebertaConfig.max_relative_positions",description:`<strong>max_relative_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The range of relative positions <code>[-max_position_embeddings, max_position_embeddings]</code>. Use the same value
as <code>max_position_embeddings</code>.`,name:"max_relative_positions"},{anchor:"transformers.DebertaConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The value used to pad input_ids.`,name:"pad_token_id"},{anchor:"transformers.DebertaConfig.position_biased_input",description:`<strong>position_biased_input</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether add absolute position embedding to content embedding.`,name:"position_biased_input"},{anchor:"transformers.DebertaConfig.pos_att_type",description:`<strong>pos_att_type</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
The type of relative position attention, it can be a combination of <code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>, e.g. <code>[&quot;p2c&quot;]</code>,
<code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>.`,name:"pos_att_type"},{anchor:"transformers.DebertaConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, optional, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/configuration_deberta.py#L40"}}),In=new rt({}),Sn=new ee({props:{name:"class transformers.DebertaTokenizer",anchor:"transformers.DebertaTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"add_prefix_space",val:" = False"},{name:"add_bos_token",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.DebertaTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.DebertaTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.DebertaTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.DebertaTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.DebertaTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.DebertaTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.DebertaTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.DebertaTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.DebertaTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.DebertaTokenizer.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (Deberta tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.DebertaTokenizer.add_bos_token",description:`<strong>add_bos_token</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial &lt;|endoftext|&gt; to the input. This allows to treat the leading word just as
any other word.`,name:"add_bos_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta.py#L112"}}),jo=new De({props:{anchor:"transformers.DebertaTokenizer.example",$$slots:{default:[I_]},$$scope:{ctx:q}}}),Mo=new at({props:{$$slots:{default:[S_]},$$scope:{ctx:q}}}),Hn=new ee({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta.py#L289",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Kn=new ee({props:{name:"get_special_tokens_mask",anchor:"transformers.DebertaTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta.py#L314",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Qn=new ee({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta.py#L341",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Po=new De({props:{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[N_]},$$scope:{ctx:q}}}),Gn=new ee({props:{name:"save_vocabulary",anchor:"transformers.DebertaTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta.py#L400"}}),Vn=new rt({}),Jn=new ee({props:{name:"class transformers.DebertaTokenizerFast",anchor:"transformers.DebertaTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.DebertaTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.DebertaTokenizerFast.tokenizer_file",description:`<strong>tokenizer_file</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The path to a tokenizer file to use instead of the vocab file.`,name:"tokenizer_file"},{anchor:"transformers.DebertaTokenizerFast.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.DebertaTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.DebertaTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.DebertaTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.DebertaTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.DebertaTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.DebertaTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.DebertaTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.DebertaTokenizerFast.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (Deberta tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta_fast.py#L74"}}),Ao=new De({props:{anchor:"transformers.DebertaTokenizerFast.example",$$slots:{default:[W_]},$$scope:{ctx:q}}}),Lo=new at({props:{$$slots:{default:[H_]},$$scope:{ctx:q}}}),es=new ee({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta_fast.py#L210",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),os=new ee({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta_fast.py#L235",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ro=new De({props:{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[U_]},$$scope:{ctx:q}}}),ns=new rt({}),ss=new ee({props:{name:"class transformers.DebertaModel",anchor:"transformers.DebertaModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L927"}}),ds=new ee({props:{name:"forward",anchor:"transformers.DebertaModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L951",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
`}}),Io=new at({props:{$$slots:{default:[K_]},$$scope:{ctx:q}}}),So=new De({props:{anchor:"transformers.DebertaModel.forward.example",$$slots:{default:[Q_]},$$scope:{ctx:q}}}),cs=new rt({}),ps=new ee({props:{name:"class transformers.DebertaPreTrainedModel",anchor:"transformers.DebertaPreTrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L832"}}),hs=new rt({}),ms=new ee({props:{name:"class transformers.DebertaForMaskedLM",anchor:"transformers.DebertaForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1039"}}),_s=new ee({props:{name:"forward",anchor:"transformers.DebertaForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1058",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
`}}),Ho=new at({props:{$$slots:{default:[G_]},$$scope:{ctx:q}}}),Uo=new De({props:{anchor:"transformers.DebertaForMaskedLM.forward.example",$$slots:{default:[V_]},$$scope:{ctx:q}}}),Ko=new De({props:{anchor:"transformers.DebertaForMaskedLM.forward.example-2",$$slots:{default:[J_]},$$scope:{ctx:q}}}),bs=new rt({}),ks=new ee({props:{name:"class transformers.DebertaForSequenceClassification",anchor:"transformers.DebertaForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1177"}}),vs=new ee({props:{name:"forward",anchor:"transformers.DebertaForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1202",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
`}}),Go=new at({props:{$$slots:{default:[X_]},$$scope:{ctx:q}}}),Vo=new De({props:{anchor:"transformers.DebertaForSequenceClassification.forward.example",$$slots:{default:[Y_]},$$scope:{ctx:q}}}),Jo=new De({props:{anchor:"transformers.DebertaForSequenceClassification.forward.example-2",$$slots:{default:[Z_]},$$scope:{ctx:q}}}),Xo=new De({props:{anchor:"transformers.DebertaForSequenceClassification.forward.example-3",$$slots:{default:[eb]},$$scope:{ctx:q}}}),Yo=new De({props:{anchor:"transformers.DebertaForSequenceClassification.forward.example-4",$$slots:{default:[tb]},$$scope:{ctx:q}}}),Ds=new rt({}),Es=new ee({props:{name:"class transformers.DebertaForTokenClassification",anchor:"transformers.DebertaForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1298"}}),js=new ee({props:{name:"forward",anchor:"transformers.DebertaForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1312",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
`}}),en=new at({props:{$$slots:{default:[ob]},$$scope:{ctx:q}}}),tn=new De({props:{anchor:"transformers.DebertaForTokenClassification.forward.example",$$slots:{default:[nb]},$$scope:{ctx:q}}}),on=new De({props:{anchor:"transformers.DebertaForTokenClassification.forward.example-2",$$slots:{default:[sb]},$$scope:{ctx:q}}}),Ms=new rt({}),Cs=new ee({props:{name:"class transformers.DebertaForQuestionAnswering",anchor:"transformers.DebertaForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1376"}}),Rs=new ee({props:{name:"forward",anchor:"transformers.DebertaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DebertaForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1389",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
`}}),sn=new at({props:{$$slots:{default:[ab]},$$scope:{ctx:q}}}),an=new De({props:{anchor:"transformers.DebertaForQuestionAnswering.forward.example",$$slots:{default:[rb]},$$scope:{ctx:q}}}),rn=new De({props:{anchor:"transformers.DebertaForQuestionAnswering.forward.example-2",$$slots:{default:[ib]},$$scope:{ctx:q}}}),Os=new rt({}),Is=new ee({props:{name:"class transformers.TFDebertaModel",anchor:"transformers.TFDebertaModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1095"}}),dn=new at({props:{$$slots:{default:[lb]},$$scope:{ctx:q}}}),Us=new ee({props:{name:"call",anchor:"transformers.TFDebertaModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaModel.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1101",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
`}}),cn=new at({props:{$$slots:{default:[db]},$$scope:{ctx:q}}}),pn=new De({props:{anchor:"transformers.TFDebertaModel.call.example",$$slots:{default:[cb]},$$scope:{ctx:q}}}),Ks=new rt({}),Qs=new ee({props:{name:"class transformers.TFDebertaPreTrainedModel",anchor:"transformers.TFDebertaPreTrainedModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L995"}}),Gs=new ee({props:{name:"call",anchor:"transformers.TFDebertaPreTrainedModel.call",parameters:[{name:"inputs",val:""},{name:"training",val:" = None"},{name:"mask",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/keras/engine/training.py#L559",returnDescription:`
<p>A tensor if there is a single output, or
a list of tensors if there are more than one outputs.</p>
`}}),Js=new rt({}),Xs=new ee({props:{name:"class transformers.TFDebertaForMaskedLM",anchor:"transformers.TFDebertaForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1143"}}),fn=new at({props:{$$slots:{default:[pb]},$$scope:{ctx:q}}}),ta=new ee({props:{name:"call",anchor:"transformers.TFDebertaForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaForMaskedLM.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1159",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
`}}),un=new at({props:{$$slots:{default:[hb]},$$scope:{ctx:q}}}),gn=new De({props:{anchor:"transformers.TFDebertaForMaskedLM.call.example",$$slots:{default:[mb]},$$scope:{ctx:q}}}),_n=new De({props:{anchor:"transformers.TFDebertaForMaskedLM.call.example-2",$$slots:{default:[fb]},$$scope:{ctx:q}}}),oa=new rt({}),na=new ee({props:{name:"class transformers.TFDebertaForSequenceClassification",anchor:"transformers.TFDebertaForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1226"}}),kn=new at({props:{$$slots:{default:[ub]},$$scope:{ctx:q}}}),la=new ee({props:{name:"call",anchor:"transformers.TFDebertaForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaForSequenceClassification.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1244",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
`}}),wn=new at({props:{$$slots:{default:[gb]},$$scope:{ctx:q}}}),Tn=new De({props:{anchor:"transformers.TFDebertaForSequenceClassification.call.example",$$slots:{default:[_b]},$$scope:{ctx:q}}}),yn=new De({props:{anchor:"transformers.TFDebertaForSequenceClassification.call.example-2",$$slots:{default:[bb]},$$scope:{ctx:q}}}),da=new rt({}),ca=new ee({props:{name:"class transformers.TFDebertaForTokenClassification",anchor:"transformers.TFDebertaForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1314"}}),vn=new at({props:{$$slots:{default:[kb]},$$scope:{ctx:q}}}),ua=new ee({props:{name:"call",anchor:"transformers.TFDebertaForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaForTokenClassification.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1326",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
`}}),Dn=new at({props:{$$slots:{default:[wb]},$$scope:{ctx:q}}}),En=new De({props:{anchor:"transformers.TFDebertaForTokenClassification.call.example",$$slots:{default:[Tb]},$$scope:{ctx:q}}}),Fn=new De({props:{anchor:"transformers.TFDebertaForTokenClassification.call.example-2",$$slots:{default:[yb]},$$scope:{ctx:q}}}),ga=new rt({}),_a=new ee({props:{name:"class transformers.TFDebertaForQuestionAnswering",anchor:"transformers.TFDebertaForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1392"}}),xn=new at({props:{$$slots:{default:[$b]},$$scope:{ctx:q}}}),ya=new ee({props:{name:"call",anchor:"transformers.TFDebertaForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1403",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
`}}),zn=new at({props:{$$slots:{default:[vb]},$$scope:{ctx:q}}}),jn=new De({props:{anchor:"transformers.TFDebertaForQuestionAnswering.call.example",$$slots:{default:[Db]},$$scope:{ctx:q}}}),Mn=new De({props:{anchor:"transformers.TFDebertaForQuestionAnswering.call.example-2",$$slots:{default:[Eb]},$$scope:{ctx:q}}}),{c(){d=a("meta"),g=h(),c=a("h1"),f=a("a"),w=a("span"),T(l.$$.fragment),p=h(),z=a("span"),ae=n("DeBERTa"),V=h(),L=a("h2"),te=a("a"),se=a("span"),T(F.$$.fragment),qe=h(),G=a("span"),xe=n("Overview"),be=h(),I=a("p"),ze=n("The DeBERTa model was proposed in "),de=a("a"),J=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),je=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),ke=h(),U=a("p"),Me=n(`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),we=h(),K=a("p"),Ce=n("The abstract from the paper is the following:"),Te=h(),oe=a("p"),M=a("em"),C=n(`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),ce=a("a"),X=n("https://github.com/microsoft/DeBERTa"),Pe=n("."),ye=h(),R=a("p"),Be=n("This model was contributed by "),pe=a("a"),P=n("DeBERTa"),Ae=n(`. This model TF 2.0 implementation was
contributed by `),W=a("a"),Le=n("kamalkraj"),Re=n(" . The original code can be found "),H=a("a"),Oe=n("here"),Ie=n("."),O=h(),re=a("h2"),S=a("a"),ue=a("span"),T(Z.$$.fragment),B=h(),ge=a("span"),A=n("DebertaConfig"),$e=h(),ne=a("div"),T(k.$$.fragment),x=h(),me=a("p"),ie=n("This is the configuration class to store the configuration of a "),We=a("a"),Ke=n("DebertaModel"),j=n(" or a "),He=a("a"),Qe=n("TFDebertaModel"),Ge=n(`. It is
used to instantiate a DeBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Ne=a("a"),Ve=n("microsoft/deberta-base"),N=n(" architecture."),Y=h(),ve=a("p"),Je=n("Configuration objects inherit from "),Q=a("a"),Xe=n("PretrainedConfig"),Ye=n(` and can be used to control the model outputs. Read the
documentation from `),fe=a("a"),Ze=n("PretrainedConfig"),le=n(" for more information."),Ue=h(),Vt=a("h2"),zo=a("a"),cr=a("span"),T(In.$$.fragment),kd=h(),pr=a("span"),wd=n("DebertaTokenizer"),rl=h(),he=a("div"),T(Sn.$$.fragment),Td=h(),hr=a("p"),yd=n("Construct a DeBERTa tokenizer. Based on byte-level Byte-Pair-Encoding."),$d=h(),mr=a("p"),vd=n("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Dd=h(),T(jo.$$.fragment),Ed=h(),Nn=a("p"),Fd=n("You can get around that behavior by passing "),fr=a("code"),qd=n("add_prefix_space=True"),xd=n(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),zd=h(),T(Mo.$$.fragment),jd=h(),Wn=a("p"),Md=n("This tokenizer inherits from "),ja=a("a"),Cd=n("PreTrainedTokenizer"),Pd=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Bd=h(),Pt=a("div"),T(Hn.$$.fragment),Ad=h(),ur=a("p"),Ld=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Rd=h(),Un=a("ul"),gr=a("li"),Od=n("single sequence: [CLS] X [SEP]"),Id=h(),_r=a("li"),Sd=n("pair of sequences: [CLS] A [SEP] B [SEP]"),Nd=h(),Co=a("div"),T(Kn.$$.fragment),Wd=h(),Jt=a("p"),Hd=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),br=a("code"),Ud=n("prepare_for_model"),Kd=n(" or "),kr=a("code"),Qd=n("encode_plus"),Gd=n(" methods."),Vd=h(),$t=a("div"),T(Qn.$$.fragment),Jd=h(),wr=a("p"),Xd=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),Yd=h(),T(Po.$$.fragment),Zd=h(),Xt=a("p"),ec=n("If "),Tr=a("code"),tc=n("token_ids_1"),oc=n(" is "),yr=a("code"),nc=n("None"),sc=n(", this method only returns the first portion of the mask (0s)."),ac=h(),Ma=a("div"),T(Gn.$$.fragment),il=h(),Yt=a("h2"),Bo=a("a"),$r=a("span"),T(Vn.$$.fragment),rc=h(),vr=a("span"),ic=n("DebertaTokenizerFast"),ll=h(),Se=a("div"),T(Jn.$$.fragment),lc=h(),Xn=a("p"),dc=n("Construct a \u201Cfast\u201D DeBERTa tokenizer (backed by HuggingFace\u2019s "),Dr=a("em"),cc=n("tokenizers"),pc=n(` library). Based on byte-level
Byte-Pair-Encoding.`),hc=h(),Er=a("p"),mc=n("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),fc=h(),T(Ao.$$.fragment),uc=h(),Yn=a("p"),gc=n("You can get around that behavior by passing "),Fr=a("code"),_c=n("add_prefix_space=True"),bc=n(` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),kc=h(),T(Lo.$$.fragment),wc=h(),Zn=a("p"),Tc=n("This tokenizer inherits from "),Ca=a("a"),yc=n("PreTrainedTokenizerFast"),$c=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),vc=h(),Bt=a("div"),T(es.$$.fragment),Dc=h(),qr=a("p"),Ec=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Fc=h(),ts=a("ul"),xr=a("li"),qc=n("single sequence: [CLS] X [SEP]"),xc=h(),zr=a("li"),zc=n("pair of sequences: [CLS] A [SEP] B [SEP]"),jc=h(),vt=a("div"),T(os.$$.fragment),Mc=h(),jr=a("p"),Cc=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),Pc=h(),T(Ro.$$.fragment),Bc=h(),Zt=a("p"),Ac=n("If "),Mr=a("code"),Lc=n("token_ids_1"),Rc=n(" is "),Cr=a("code"),Oc=n("None"),Ic=n(", this method only returns the first portion of the mask (0s)."),dl=h(),eo=a("h2"),Oo=a("a"),Pr=a("span"),T(ns.$$.fragment),Sc=h(),Br=a("span"),Nc=n("DebertaModel"),cl=h(),wt=a("div"),T(ss.$$.fragment),Wc=h(),as=a("p"),Hc=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),rs=a("a"),Uc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Kc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Qc=h(),is=a("p"),Gc=n("This model is also a PyTorch "),ls=a("a"),Vc=n("torch.nn.Module"),Jc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xc=h(),Dt=a("div"),T(ds.$$.fragment),Yc=h(),to=a("p"),Zc=n("The "),Pa=a("a"),ep=n("DebertaModel"),tp=n(" forward method, overrides the "),Ar=a("code"),op=n("__call__"),np=n(" special method."),sp=h(),T(Io.$$.fragment),ap=h(),T(So.$$.fragment),pl=h(),oo=a("h2"),No=a("a"),Lr=a("span"),T(cs.$$.fragment),rp=h(),Rr=a("span"),ip=n("DebertaPreTrainedModel"),hl=h(),no=a("div"),T(ps.$$.fragment),lp=h(),Or=a("p"),dp=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),ml=h(),so=a("h2"),Wo=a("a"),Ir=a("span"),T(hs.$$.fragment),cp=h(),Sr=a("span"),pp=n("DebertaForMaskedLM"),fl=h(),Tt=a("div"),T(ms.$$.fragment),hp=h(),ao=a("p"),mp=n("DeBERTa Model with a "),Nr=a("code"),fp=n("language modeling"),up=n(` head on top.
The DeBERTa model was proposed in `),fs=a("a"),gp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),_p=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),bp=h(),us=a("p"),kp=n("This model is also a PyTorch "),gs=a("a"),wp=n("torch.nn.Module"),Tp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yp=h(),ht=a("div"),T(_s.$$.fragment),$p=h(),ro=a("p"),vp=n("The "),Ba=a("a"),Dp=n("DebertaForMaskedLM"),Ep=n(" forward method, overrides the "),Wr=a("code"),Fp=n("__call__"),qp=n(" special method."),xp=h(),T(Ho.$$.fragment),zp=h(),T(Uo.$$.fragment),jp=h(),T(Ko.$$.fragment),ul=h(),io=a("h2"),Qo=a("a"),Hr=a("span"),T(bs.$$.fragment),Mp=h(),Ur=a("span"),Cp=n("DebertaForSequenceClassification"),gl=h(),it=a("div"),T(ks.$$.fragment),Pp=h(),Kr=a("p"),Bp=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Ap=h(),ws=a("p"),Lp=n("The DeBERTa model was proposed in "),Ts=a("a"),Rp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Op=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ip=h(),ys=a("p"),Sp=n("This model is also a PyTorch "),$s=a("a"),Np=n("torch.nn.Module"),Wp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hp=h(),et=a("div"),T(vs.$$.fragment),Up=h(),lo=a("p"),Kp=n("The "),Aa=a("a"),Qp=n("DebertaForSequenceClassification"),Gp=n(" forward method, overrides the "),Qr=a("code"),Vp=n("__call__"),Jp=n(" special method."),Xp=h(),T(Go.$$.fragment),Yp=h(),T(Vo.$$.fragment),Zp=h(),T(Jo.$$.fragment),eh=h(),T(Xo.$$.fragment),th=h(),T(Yo.$$.fragment),_l=h(),co=a("h2"),Zo=a("a"),Gr=a("span"),T(Ds.$$.fragment),oh=h(),Vr=a("span"),nh=n("DebertaForTokenClassification"),bl=h(),lt=a("div"),T(Es.$$.fragment),sh=h(),Jr=a("p"),ah=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),rh=h(),Fs=a("p"),ih=n("The DeBERTa model was proposed in "),qs=a("a"),lh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),dh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ch=h(),xs=a("p"),ph=n("This model is also a PyTorch "),zs=a("a"),hh=n("torch.nn.Module"),mh=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fh=h(),mt=a("div"),T(js.$$.fragment),uh=h(),po=a("p"),gh=n("The "),La=a("a"),_h=n("DebertaForTokenClassification"),bh=n(" forward method, overrides the "),Xr=a("code"),kh=n("__call__"),wh=n(" special method."),Th=h(),T(en.$$.fragment),yh=h(),T(tn.$$.fragment),$h=h(),T(on.$$.fragment),kl=h(),ho=a("h2"),nn=a("a"),Yr=a("span"),T(Ms.$$.fragment),vh=h(),Zr=a("span"),Dh=n("DebertaForQuestionAnswering"),wl=h(),dt=a("div"),T(Cs.$$.fragment),Eh=h(),mo=a("p"),Fh=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ei=a("code"),qh=n("span start logits"),xh=n(" and "),ti=a("code"),zh=n("span end logits"),jh=n(")."),Mh=h(),Ps=a("p"),Ch=n("The DeBERTa model was proposed in "),Bs=a("a"),Ph=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Bh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ah=h(),As=a("p"),Lh=n("This model is also a PyTorch "),Ls=a("a"),Rh=n("torch.nn.Module"),Oh=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ih=h(),ft=a("div"),T(Rs.$$.fragment),Sh=h(),fo=a("p"),Nh=n("The "),Ra=a("a"),Wh=n("DebertaForQuestionAnswering"),Hh=n(" forward method, overrides the "),oi=a("code"),Uh=n("__call__"),Kh=n(" special method."),Qh=h(),T(sn.$$.fragment),Gh=h(),T(an.$$.fragment),Vh=h(),T(rn.$$.fragment),Tl=h(),uo=a("h2"),ln=a("a"),ni=a("span"),T(Os.$$.fragment),Jh=h(),si=a("span"),Xh=n("TFDebertaModel"),yl=h(),ct=a("div"),T(Is.$$.fragment),Yh=h(),Ss=a("p"),Zh=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Ns=a("a"),em=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),tm=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),om=h(),Ws=a("p"),nm=n("This model is also a "),Hs=a("a"),sm=n("tf.keras.Model"),am=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rm=h(),T(dn.$$.fragment),im=h(),Et=a("div"),T(Us.$$.fragment),lm=h(),go=a("p"),dm=n("The "),Oa=a("a"),cm=n("TFDebertaModel"),pm=n(" forward method, overrides the "),ai=a("code"),hm=n("__call__"),mm=n(" special method."),fm=h(),T(cn.$$.fragment),um=h(),T(pn.$$.fragment),$l=h(),_o=a("h2"),hn=a("a"),ri=a("span"),T(Ks.$$.fragment),gm=h(),ii=a("span"),_m=n("TFDebertaPreTrainedModel"),vl=h(),jt=a("div"),T(Qs.$$.fragment),bm=h(),li=a("p"),km=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),wm=h(),Ft=a("div"),T(Gs.$$.fragment),Tm=h(),di=a("p"),ym=n("Calls the model on new inputs and returns the outputs as tensors."),$m=h(),Vs=a("p"),vm=n("In this case "),ci=a("code"),Dm=n("call()"),Em=n(` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),Fm=h(),yt=a("p"),qm=n(`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),pi=a("code"),xm=n("tf.keras.Model"),zm=n(`.
To call a model on an input, always use the `),hi=a("code"),jm=n("__call__()"),Mm=n(` method,
i.e. `),mi=a("code"),Cm=n("model(inputs)"),Pm=n(", which relies on the underlying "),fi=a("code"),Bm=n("call()"),Am=n(" method."),Dl=h(),bo=a("h2"),mn=a("a"),ui=a("span"),T(Js.$$.fragment),Lm=h(),gi=a("span"),Rm=n("TFDebertaForMaskedLM"),El=h(),pt=a("div"),T(Xs.$$.fragment),Om=h(),ko=a("p"),Im=n("DeBERTa Model with a "),_i=a("code"),Sm=n("language modeling"),Nm=n(` head on top.
The DeBERTa model was proposed in `),Ys=a("a"),Wm=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Hm=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Um=h(),Zs=a("p"),Km=n("This model is also a "),ea=a("a"),Qm=n("tf.keras.Model"),Gm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vm=h(),T(fn.$$.fragment),Jm=h(),ut=a("div"),T(ta.$$.fragment),Xm=h(),wo=a("p"),Ym=n("The "),Ia=a("a"),Zm=n("TFDebertaForMaskedLM"),ef=n(" forward method, overrides the "),bi=a("code"),tf=n("__call__"),of=n(" special method."),nf=h(),T(un.$$.fragment),sf=h(),T(gn.$$.fragment),af=h(),T(_n.$$.fragment),Fl=h(),To=a("h2"),bn=a("a"),ki=a("span"),T(oa.$$.fragment),rf=h(),wi=a("span"),lf=n("TFDebertaForSequenceClassification"),ql=h(),ot=a("div"),T(na.$$.fragment),df=h(),Ti=a("p"),cf=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),pf=h(),sa=a("p"),hf=n("The DeBERTa model was proposed in "),aa=a("a"),mf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),ff=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),uf=h(),ra=a("p"),gf=n("This model is also a "),ia=a("a"),_f=n("tf.keras.Model"),bf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kf=h(),T(kn.$$.fragment),wf=h(),gt=a("div"),T(la.$$.fragment),Tf=h(),yo=a("p"),yf=n("The "),Sa=a("a"),$f=n("TFDebertaForSequenceClassification"),vf=n(" forward method, overrides the "),yi=a("code"),Df=n("__call__"),Ef=n(" special method."),Ff=h(),T(wn.$$.fragment),qf=h(),T(Tn.$$.fragment),xf=h(),T(yn.$$.fragment),xl=h(),$o=a("h2"),$n=a("a"),$i=a("span"),T(da.$$.fragment),zf=h(),vi=a("span"),jf=n("TFDebertaForTokenClassification"),zl=h(),nt=a("div"),T(ca.$$.fragment),Mf=h(),Di=a("p"),Cf=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Pf=h(),pa=a("p"),Bf=n("The DeBERTa model was proposed in "),ha=a("a"),Af=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Lf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Rf=h(),ma=a("p"),Of=n("This model is also a "),fa=a("a"),If=n("tf.keras.Model"),Sf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nf=h(),T(vn.$$.fragment),Wf=h(),_t=a("div"),T(ua.$$.fragment),Hf=h(),vo=a("p"),Uf=n("The "),Na=a("a"),Kf=n("TFDebertaForTokenClassification"),Qf=n(" forward method, overrides the "),Ei=a("code"),Gf=n("__call__"),Vf=n(" special method."),Jf=h(),T(Dn.$$.fragment),Xf=h(),T(En.$$.fragment),Yf=h(),T(Fn.$$.fragment),jl=h(),Do=a("h2"),qn=a("a"),Fi=a("span"),T(ga.$$.fragment),Zf=h(),qi=a("span"),eu=n("TFDebertaForQuestionAnswering"),Ml=h(),st=a("div"),T(_a.$$.fragment),tu=h(),Eo=a("p"),ou=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),xi=a("code"),nu=n("span start logits"),su=n(" and "),zi=a("code"),au=n("span end logits"),ru=n(")."),iu=h(),ba=a("p"),lu=n("The DeBERTa model was proposed in "),ka=a("a"),du=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),cu=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),pu=h(),wa=a("p"),hu=n("This model is also a "),Ta=a("a"),mu=n("tf.keras.Model"),fu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),uu=h(),T(xn.$$.fragment),gu=h(),bt=a("div"),T(ya.$$.fragment),_u=h(),Fo=a("p"),bu=n("The "),Wa=a("a"),ku=n("TFDebertaForQuestionAnswering"),wu=n(" forward method, overrides the "),ji=a("code"),Tu=n("__call__"),yu=n(" special method."),$u=h(),T(zn.$$.fragment),vu=h(),T(jn.$$.fragment),Du=h(),T(Mn.$$.fragment),this.h()},l(o){const b=R_('[data-svelte="svelte-1phssyn"]',document.head);d=r(b,"META",{name:!0,content:!0}),b.forEach(t),g=m(o),c=r(o,"H1",{class:!0});var $a=i(c);f=r($a,"A",{id:!0,class:!0,href:!0});var Mi=i(f);w=r(Mi,"SPAN",{});var Ci=i(w);y(l.$$.fragment,Ci),Ci.forEach(t),Mi.forEach(t),p=m($a),z=r($a,"SPAN",{});var Pi=i(z);ae=s(Pi,"DeBERTa"),Pi.forEach(t),$a.forEach(t),V=m(o),L=r(o,"H2",{class:!0});var va=i(L);te=r(va,"A",{id:!0,class:!0,href:!0});var Bi=i(te);se=r(Bi,"SPAN",{});var Ai=i(se);y(F.$$.fragment,Ai),Ai.forEach(t),Bi.forEach(t),qe=m(va),G=r(va,"SPAN",{});var Li=i(G);xe=s(Li,"Overview"),Li.forEach(t),va.forEach(t),be=m(o),I=r(o,"P",{});var Da=i(I);ze=s(Da,"The DeBERTa model was proposed in "),de=r(Da,"A",{href:!0,rel:!0});var Ri=i(de);J=s(Ri,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),Ri.forEach(t),je=s(Da,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),Da.forEach(t),ke=m(o),U=r(o,"P",{});var Oi=i(U);Me=s(Oi,`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),Oi.forEach(t),we=m(o),K=r(o,"P",{});var Ii=i(K);Ce=s(Ii,"The abstract from the paper is the following:"),Ii.forEach(t),Te=m(o),oe=r(o,"P",{});var Si=i(oe);M=r(Si,"EM",{});var Ea=i(M);C=s(Ea,`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),ce=r(Ea,"A",{href:!0,rel:!0});var Ni=i(ce);X=s(Ni,"https://github.com/microsoft/DeBERTa"),Ni.forEach(t),Pe=s(Ea,"."),Ea.forEach(t),Si.forEach(t),ye=m(o),R=r(o,"P",{});var Mt=i(R);Be=s(Mt,"This model was contributed by "),pe=r(Mt,"A",{href:!0,rel:!0});var Wi=i(pe);P=s(Wi,"DeBERTa"),Wi.forEach(t),Ae=s(Mt,`. This model TF 2.0 implementation was
contributed by `),W=r(Mt,"A",{href:!0,rel:!0});var Hi=i(W);Le=s(Hi,"kamalkraj"),Hi.forEach(t),Re=s(Mt," . The original code can be found "),H=r(Mt,"A",{href:!0,rel:!0});var Ui=i(H);Oe=s(Ui,"here"),Ui.forEach(t),Ie=s(Mt,"."),Mt.forEach(t),O=m(o),re=r(o,"H2",{class:!0});var Fa=i(re);S=r(Fa,"A",{id:!0,class:!0,href:!0});var Ki=i(S);ue=r(Ki,"SPAN",{});var Qi=i(ue);y(Z.$$.fragment,Qi),Qi.forEach(t),Ki.forEach(t),B=m(Fa),ge=r(Fa,"SPAN",{});var Gi=i(ge);A=s(Gi,"DebertaConfig"),Gi.forEach(t),Fa.forEach(t),$e=m(o),ne=r(o,"DIV",{class:!0});var qo=i(ne);y(k.$$.fragment,qo),x=m(qo),me=r(qo,"P",{});var Ct=i(me);ie=s(Ct,"This is the configuration class to store the configuration of a "),We=r(Ct,"A",{href:!0});var Vi=i(We);Ke=s(Vi,"DebertaModel"),Vi.forEach(t),j=s(Ct," or a "),He=r(Ct,"A",{href:!0});var Ji=i(He);Qe=s(Ji,"TFDebertaModel"),Ji.forEach(t),Ge=s(Ct,`. It is
used to instantiate a DeBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Ne=r(Ct,"A",{href:!0,rel:!0});var Xi=i(Ne);Ve=s(Xi,"microsoft/deberta-base"),Xi.forEach(t),N=s(Ct," architecture."),Ct.forEach(t),Y=m(qo),ve=r(qo,"P",{});var xo=i(ve);Je=s(xo,"Configuration objects inherit from "),Q=r(xo,"A",{href:!0});var Yi=i(Q);Xe=s(Yi,"PretrainedConfig"),Yi.forEach(t),Ye=s(xo,` and can be used to control the model outputs. Read the
documentation from `),fe=r(xo,"A",{href:!0});var Zi=i(fe);Ze=s(Zi,"PretrainedConfig"),Zi.forEach(t),le=s(xo," for more information."),xo.forEach(t),qo.forEach(t),Ue=m(o),Vt=r(o,"H2",{class:!0});var qa=i(Vt);zo=r(qa,"A",{id:!0,class:!0,href:!0});var el=i(zo);cr=r(el,"SPAN",{});var tl=i(cr);y(In.$$.fragment,tl),tl.forEach(t),el.forEach(t),kd=m(qa),pr=r(qa,"SPAN",{});var ol=i(pr);wd=s(ol,"DebertaTokenizer"),ol.forEach(t),qa.forEach(t),rl=m(o),he=r(o,"DIV",{class:!0});var _e=i(he);y(Sn.$$.fragment,_e),Td=m(_e),hr=r(_e,"P",{});var nl=i(hr);yd=s(nl,"Construct a DeBERTa tokenizer. Based on byte-level Byte-Pair-Encoding."),nl.forEach(t),$d=m(_e),mr=r(_e,"P",{});var sl=i(mr);vd=s(sl,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),sl.forEach(t),Dd=m(_e),y(jo.$$.fragment,_e),Ed=m(_e),Nn=r(_e,"P",{});var xa=i(Nn);Fd=s(xa,"You can get around that behavior by passing "),fr=r(xa,"CODE",{});var al=i(fr);qd=s(al,"add_prefix_space=True"),al.forEach(t),xd=s(xa,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),xa.forEach(t),zd=m(_e),y(Mo.$$.fragment,_e),jd=m(_e),Wn=r(_e,"P",{});var za=i(Wn);Md=s(za,"This tokenizer inherits from "),ja=r(za,"A",{href:!0});var Eu=i(ja);Cd=s(Eu,"PreTrainedTokenizer"),Eu.forEach(t),Pd=s(za,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),za.forEach(t),Bd=m(_e),Pt=r(_e,"DIV",{class:!0});var Ha=i(Pt);y(Hn.$$.fragment,Ha),Ad=m(Ha),ur=r(Ha,"P",{});var Fu=i(ur);Ld=s(Fu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Fu.forEach(t),Rd=m(Ha),Un=r(Ha,"UL",{});var Pl=i(Un);gr=r(Pl,"LI",{});var qu=i(gr);Od=s(qu,"single sequence: [CLS] X [SEP]"),qu.forEach(t),Id=m(Pl),_r=r(Pl,"LI",{});var xu=i(_r);Sd=s(xu,"pair of sequences: [CLS] A [SEP] B [SEP]"),xu.forEach(t),Pl.forEach(t),Ha.forEach(t),Nd=m(_e),Co=r(_e,"DIV",{class:!0});var Bl=i(Co);y(Kn.$$.fragment,Bl),Wd=m(Bl),Jt=r(Bl,"P",{});var Ua=i(Jt);Hd=s(Ua,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),br=r(Ua,"CODE",{});var zu=i(br);Ud=s(zu,"prepare_for_model"),zu.forEach(t),Kd=s(Ua," or "),kr=r(Ua,"CODE",{});var ju=i(kr);Qd=s(ju,"encode_plus"),ju.forEach(t),Gd=s(Ua," methods."),Ua.forEach(t),Bl.forEach(t),Vd=m(_e),$t=r(_e,"DIV",{class:!0});var Cn=i($t);y(Qn.$$.fragment,Cn),Jd=m(Cn),wr=r(Cn,"P",{});var Mu=i(wr);Xd=s(Mu,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),Mu.forEach(t),Yd=m(Cn),y(Po.$$.fragment,Cn),Zd=m(Cn),Xt=r(Cn,"P",{});var Ka=i(Xt);ec=s(Ka,"If "),Tr=r(Ka,"CODE",{});var Cu=i(Tr);tc=s(Cu,"token_ids_1"),Cu.forEach(t),oc=s(Ka," is "),yr=r(Ka,"CODE",{});var Pu=i(yr);nc=s(Pu,"None"),Pu.forEach(t),sc=s(Ka,", this method only returns the first portion of the mask (0s)."),Ka.forEach(t),Cn.forEach(t),ac=m(_e),Ma=r(_e,"DIV",{class:!0});var Bu=i(Ma);y(Gn.$$.fragment,Bu),Bu.forEach(t),_e.forEach(t),il=m(o),Yt=r(o,"H2",{class:!0});var Al=i(Yt);Bo=r(Al,"A",{id:!0,class:!0,href:!0});var Au=i(Bo);$r=r(Au,"SPAN",{});var Lu=i($r);y(Vn.$$.fragment,Lu),Lu.forEach(t),Au.forEach(t),rc=m(Al),vr=r(Al,"SPAN",{});var Ru=i(vr);ic=s(Ru,"DebertaTokenizerFast"),Ru.forEach(t),Al.forEach(t),ll=m(o),Se=r(o,"DIV",{class:!0});var tt=i(Se);y(Jn.$$.fragment,tt),lc=m(tt),Xn=r(tt,"P",{});var Ll=i(Xn);dc=s(Ll,"Construct a \u201Cfast\u201D DeBERTa tokenizer (backed by HuggingFace\u2019s "),Dr=r(Ll,"EM",{});var Ou=i(Dr);cc=s(Ou,"tokenizers"),Ou.forEach(t),pc=s(Ll,` library). Based on byte-level
Byte-Pair-Encoding.`),Ll.forEach(t),hc=m(tt),Er=r(tt,"P",{});var Iu=i(Er);mc=s(Iu,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Iu.forEach(t),fc=m(tt),y(Ao.$$.fragment,tt),uc=m(tt),Yn=r(tt,"P",{});var Rl=i(Yn);gc=s(Rl,"You can get around that behavior by passing "),Fr=r(Rl,"CODE",{});var Su=i(Fr);_c=s(Su,"add_prefix_space=True"),Su.forEach(t),bc=s(Rl,` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),Rl.forEach(t),kc=m(tt),y(Lo.$$.fragment,tt),wc=m(tt),Zn=r(tt,"P",{});var Ol=i(Zn);Tc=s(Ol,"This tokenizer inherits from "),Ca=r(Ol,"A",{href:!0});var Nu=i(Ca);yc=s(Nu,"PreTrainedTokenizerFast"),Nu.forEach(t),$c=s(Ol,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Ol.forEach(t),vc=m(tt),Bt=r(tt,"DIV",{class:!0});var Qa=i(Bt);y(es.$$.fragment,Qa),Dc=m(Qa),qr=r(Qa,"P",{});var Wu=i(qr);Ec=s(Wu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Wu.forEach(t),Fc=m(Qa),ts=r(Qa,"UL",{});var Il=i(ts);xr=r(Il,"LI",{});var Hu=i(xr);qc=s(Hu,"single sequence: [CLS] X [SEP]"),Hu.forEach(t),xc=m(Il),zr=r(Il,"LI",{});var Uu=i(zr);zc=s(Uu,"pair of sequences: [CLS] A [SEP] B [SEP]"),Uu.forEach(t),Il.forEach(t),Qa.forEach(t),jc=m(tt),vt=r(tt,"DIV",{class:!0});var Pn=i(vt);y(os.$$.fragment,Pn),Mc=m(Pn),jr=r(Pn,"P",{});var Ku=i(jr);Cc=s(Ku,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),Ku.forEach(t),Pc=m(Pn),y(Ro.$$.fragment,Pn),Bc=m(Pn),Zt=r(Pn,"P",{});var Ga=i(Zt);Ac=s(Ga,"If "),Mr=r(Ga,"CODE",{});var Qu=i(Mr);Lc=s(Qu,"token_ids_1"),Qu.forEach(t),Rc=s(Ga," is "),Cr=r(Ga,"CODE",{});var Gu=i(Cr);Oc=s(Gu,"None"),Gu.forEach(t),Ic=s(Ga,", this method only returns the first portion of the mask (0s)."),Ga.forEach(t),Pn.forEach(t),tt.forEach(t),dl=m(o),eo=r(o,"H2",{class:!0});var Sl=i(eo);Oo=r(Sl,"A",{id:!0,class:!0,href:!0});var Vu=i(Oo);Pr=r(Vu,"SPAN",{});var Ju=i(Pr);y(ns.$$.fragment,Ju),Ju.forEach(t),Vu.forEach(t),Sc=m(Sl),Br=r(Sl,"SPAN",{});var Xu=i(Br);Nc=s(Xu,"DebertaModel"),Xu.forEach(t),Sl.forEach(t),cl=m(o),wt=r(o,"DIV",{class:!0});var Bn=i(wt);y(ss.$$.fragment,Bn),Wc=m(Bn),as=r(Bn,"P",{});var Nl=i(as);Hc=s(Nl,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),rs=r(Nl,"A",{href:!0,rel:!0});var Yu=i(rs);Uc=s(Yu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Yu.forEach(t),Kc=s(Nl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Nl.forEach(t),Qc=m(Bn),is=r(Bn,"P",{});var Wl=i(is);Gc=s(Wl,"This model is also a PyTorch "),ls=r(Wl,"A",{href:!0,rel:!0});var Zu=i(ls);Vc=s(Zu,"torch.nn.Module"),Zu.forEach(t),Jc=s(Wl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wl.forEach(t),Xc=m(Bn),Dt=r(Bn,"DIV",{class:!0});var An=i(Dt);y(ds.$$.fragment,An),Yc=m(An),to=r(An,"P",{});var Va=i(to);Zc=s(Va,"The "),Pa=r(Va,"A",{href:!0});var eg=i(Pa);ep=s(eg,"DebertaModel"),eg.forEach(t),tp=s(Va," forward method, overrides the "),Ar=r(Va,"CODE",{});var tg=i(Ar);op=s(tg,"__call__"),tg.forEach(t),np=s(Va," special method."),Va.forEach(t),sp=m(An),y(Io.$$.fragment,An),ap=m(An),y(So.$$.fragment,An),An.forEach(t),Bn.forEach(t),pl=m(o),oo=r(o,"H2",{class:!0});var Hl=i(oo);No=r(Hl,"A",{id:!0,class:!0,href:!0});var og=i(No);Lr=r(og,"SPAN",{});var ng=i(Lr);y(cs.$$.fragment,ng),ng.forEach(t),og.forEach(t),rp=m(Hl),Rr=r(Hl,"SPAN",{});var sg=i(Rr);ip=s(sg,"DebertaPreTrainedModel"),sg.forEach(t),Hl.forEach(t),hl=m(o),no=r(o,"DIV",{class:!0});var Ul=i(no);y(ps.$$.fragment,Ul),lp=m(Ul),Or=r(Ul,"P",{});var ag=i(Or);dp=s(ag,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),ag.forEach(t),Ul.forEach(t),ml=m(o),so=r(o,"H2",{class:!0});var Kl=i(so);Wo=r(Kl,"A",{id:!0,class:!0,href:!0});var rg=i(Wo);Ir=r(rg,"SPAN",{});var ig=i(Ir);y(hs.$$.fragment,ig),ig.forEach(t),rg.forEach(t),cp=m(Kl),Sr=r(Kl,"SPAN",{});var lg=i(Sr);pp=s(lg,"DebertaForMaskedLM"),lg.forEach(t),Kl.forEach(t),fl=m(o),Tt=r(o,"DIV",{class:!0});var Ln=i(Tt);y(ms.$$.fragment,Ln),hp=m(Ln),ao=r(Ln,"P",{});var Ja=i(ao);mp=s(Ja,"DeBERTa Model with a "),Nr=r(Ja,"CODE",{});var dg=i(Nr);fp=s(dg,"language modeling"),dg.forEach(t),up=s(Ja,` head on top.
The DeBERTa model was proposed in `),fs=r(Ja,"A",{href:!0,rel:!0});var cg=i(fs);gp=s(cg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),cg.forEach(t),_p=s(Ja,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ja.forEach(t),bp=m(Ln),us=r(Ln,"P",{});var Ql=i(us);kp=s(Ql,"This model is also a PyTorch "),gs=r(Ql,"A",{href:!0,rel:!0});var pg=i(gs);wp=s(pg,"torch.nn.Module"),pg.forEach(t),Tp=s(Ql,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ql.forEach(t),yp=m(Ln),ht=r(Ln,"DIV",{class:!0});var At=i(ht);y(_s.$$.fragment,At),$p=m(At),ro=r(At,"P",{});var Xa=i(ro);vp=s(Xa,"The "),Ba=r(Xa,"A",{href:!0});var hg=i(Ba);Dp=s(hg,"DebertaForMaskedLM"),hg.forEach(t),Ep=s(Xa," forward method, overrides the "),Wr=r(Xa,"CODE",{});var mg=i(Wr);Fp=s(mg,"__call__"),mg.forEach(t),qp=s(Xa," special method."),Xa.forEach(t),xp=m(At),y(Ho.$$.fragment,At),zp=m(At),y(Uo.$$.fragment,At),jp=m(At),y(Ko.$$.fragment,At),At.forEach(t),Ln.forEach(t),ul=m(o),io=r(o,"H2",{class:!0});var Gl=i(io);Qo=r(Gl,"A",{id:!0,class:!0,href:!0});var fg=i(Qo);Hr=r(fg,"SPAN",{});var ug=i(Hr);y(bs.$$.fragment,ug),ug.forEach(t),fg.forEach(t),Mp=m(Gl),Ur=r(Gl,"SPAN",{});var gg=i(Ur);Cp=s(gg,"DebertaForSequenceClassification"),gg.forEach(t),Gl.forEach(t),gl=m(o),it=r(o,"DIV",{class:!0});var Lt=i(it);y(ks.$$.fragment,Lt),Pp=m(Lt),Kr=r(Lt,"P",{});var _g=i(Kr);Bp=s(_g,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),_g.forEach(t),Ap=m(Lt),ws=r(Lt,"P",{});var Vl=i(ws);Lp=s(Vl,"The DeBERTa model was proposed in "),Ts=r(Vl,"A",{href:!0,rel:!0});var bg=i(Ts);Rp=s(bg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),bg.forEach(t),Op=s(Vl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Vl.forEach(t),Ip=m(Lt),ys=r(Lt,"P",{});var Jl=i(ys);Sp=s(Jl,"This model is also a PyTorch "),$s=r(Jl,"A",{href:!0,rel:!0});var kg=i($s);Np=s(kg,"torch.nn.Module"),kg.forEach(t),Wp=s(Jl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jl.forEach(t),Hp=m(Lt),et=r(Lt,"DIV",{class:!0});var kt=i(et);y(vs.$$.fragment,kt),Up=m(kt),lo=r(kt,"P",{});var Ya=i(lo);Kp=s(Ya,"The "),Aa=r(Ya,"A",{href:!0});var wg=i(Aa);Qp=s(wg,"DebertaForSequenceClassification"),wg.forEach(t),Gp=s(Ya," forward method, overrides the "),Qr=r(Ya,"CODE",{});var Tg=i(Qr);Vp=s(Tg,"__call__"),Tg.forEach(t),Jp=s(Ya," special method."),Ya.forEach(t),Xp=m(kt),y(Go.$$.fragment,kt),Yp=m(kt),y(Vo.$$.fragment,kt),Zp=m(kt),y(Jo.$$.fragment,kt),eh=m(kt),y(Xo.$$.fragment,kt),th=m(kt),y(Yo.$$.fragment,kt),kt.forEach(t),Lt.forEach(t),_l=m(o),co=r(o,"H2",{class:!0});var Xl=i(co);Zo=r(Xl,"A",{id:!0,class:!0,href:!0});var yg=i(Zo);Gr=r(yg,"SPAN",{});var $g=i(Gr);y(Ds.$$.fragment,$g),$g.forEach(t),yg.forEach(t),oh=m(Xl),Vr=r(Xl,"SPAN",{});var vg=i(Vr);nh=s(vg,"DebertaForTokenClassification"),vg.forEach(t),Xl.forEach(t),bl=m(o),lt=r(o,"DIV",{class:!0});var Rt=i(lt);y(Es.$$.fragment,Rt),sh=m(Rt),Jr=r(Rt,"P",{});var Dg=i(Jr);ah=s(Dg,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Dg.forEach(t),rh=m(Rt),Fs=r(Rt,"P",{});var Yl=i(Fs);ih=s(Yl,"The DeBERTa model was proposed in "),qs=r(Yl,"A",{href:!0,rel:!0});var Eg=i(qs);lh=s(Eg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Eg.forEach(t),dh=s(Yl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Yl.forEach(t),ch=m(Rt),xs=r(Rt,"P",{});var Zl=i(xs);ph=s(Zl,"This model is also a PyTorch "),zs=r(Zl,"A",{href:!0,rel:!0});var Fg=i(zs);hh=s(Fg,"torch.nn.Module"),Fg.forEach(t),mh=s(Zl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zl.forEach(t),fh=m(Rt),mt=r(Rt,"DIV",{class:!0});var Ot=i(mt);y(js.$$.fragment,Ot),uh=m(Ot),po=r(Ot,"P",{});var Za=i(po);gh=s(Za,"The "),La=r(Za,"A",{href:!0});var qg=i(La);_h=s(qg,"DebertaForTokenClassification"),qg.forEach(t),bh=s(Za," forward method, overrides the "),Xr=r(Za,"CODE",{});var xg=i(Xr);kh=s(xg,"__call__"),xg.forEach(t),wh=s(Za," special method."),Za.forEach(t),Th=m(Ot),y(en.$$.fragment,Ot),yh=m(Ot),y(tn.$$.fragment,Ot),$h=m(Ot),y(on.$$.fragment,Ot),Ot.forEach(t),Rt.forEach(t),kl=m(o),ho=r(o,"H2",{class:!0});var ed=i(ho);nn=r(ed,"A",{id:!0,class:!0,href:!0});var zg=i(nn);Yr=r(zg,"SPAN",{});var jg=i(Yr);y(Ms.$$.fragment,jg),jg.forEach(t),zg.forEach(t),vh=m(ed),Zr=r(ed,"SPAN",{});var Mg=i(Zr);Dh=s(Mg,"DebertaForQuestionAnswering"),Mg.forEach(t),ed.forEach(t),wl=m(o),dt=r(o,"DIV",{class:!0});var It=i(dt);y(Cs.$$.fragment,It),Eh=m(It),mo=r(It,"P",{});var er=i(mo);Fh=s(er,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ei=r(er,"CODE",{});var Cg=i(ei);qh=s(Cg,"span start logits"),Cg.forEach(t),xh=s(er," and "),ti=r(er,"CODE",{});var Pg=i(ti);zh=s(Pg,"span end logits"),Pg.forEach(t),jh=s(er,")."),er.forEach(t),Mh=m(It),Ps=r(It,"P",{});var td=i(Ps);Ch=s(td,"The DeBERTa model was proposed in "),Bs=r(td,"A",{href:!0,rel:!0});var Bg=i(Bs);Ph=s(Bg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Bg.forEach(t),Bh=s(td,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),td.forEach(t),Ah=m(It),As=r(It,"P",{});var od=i(As);Lh=s(od,"This model is also a PyTorch "),Ls=r(od,"A",{href:!0,rel:!0});var Ag=i(Ls);Rh=s(Ag,"torch.nn.Module"),Ag.forEach(t),Oh=s(od,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),od.forEach(t),Ih=m(It),ft=r(It,"DIV",{class:!0});var St=i(ft);y(Rs.$$.fragment,St),Sh=m(St),fo=r(St,"P",{});var tr=i(fo);Nh=s(tr,"The "),Ra=r(tr,"A",{href:!0});var Lg=i(Ra);Wh=s(Lg,"DebertaForQuestionAnswering"),Lg.forEach(t),Hh=s(tr," forward method, overrides the "),oi=r(tr,"CODE",{});var Rg=i(oi);Uh=s(Rg,"__call__"),Rg.forEach(t),Kh=s(tr," special method."),tr.forEach(t),Qh=m(St),y(sn.$$.fragment,St),Gh=m(St),y(an.$$.fragment,St),Vh=m(St),y(rn.$$.fragment,St),St.forEach(t),It.forEach(t),Tl=m(o),uo=r(o,"H2",{class:!0});var nd=i(uo);ln=r(nd,"A",{id:!0,class:!0,href:!0});var Og=i(ln);ni=r(Og,"SPAN",{});var Ig=i(ni);y(Os.$$.fragment,Ig),Ig.forEach(t),Og.forEach(t),Jh=m(nd),si=r(nd,"SPAN",{});var Sg=i(si);Xh=s(Sg,"TFDebertaModel"),Sg.forEach(t),nd.forEach(t),yl=m(o),ct=r(o,"DIV",{class:!0});var Nt=i(ct);y(Is.$$.fragment,Nt),Yh=m(Nt),Ss=r(Nt,"P",{});var sd=i(Ss);Zh=s(sd,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Ns=r(sd,"A",{href:!0,rel:!0});var Ng=i(Ns);em=s(Ng,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ng.forEach(t),tm=s(sd,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),sd.forEach(t),om=m(Nt),Ws=r(Nt,"P",{});var ad=i(Ws);nm=s(ad,"This model is also a "),Hs=r(ad,"A",{href:!0,rel:!0});var Wg=i(Hs);sm=s(Wg,"tf.keras.Model"),Wg.forEach(t),am=s(ad,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ad.forEach(t),rm=m(Nt),y(dn.$$.fragment,Nt),im=m(Nt),Et=r(Nt,"DIV",{class:!0});var Rn=i(Et);y(Us.$$.fragment,Rn),lm=m(Rn),go=r(Rn,"P",{});var or=i(go);dm=s(or,"The "),Oa=r(or,"A",{href:!0});var Hg=i(Oa);cm=s(Hg,"TFDebertaModel"),Hg.forEach(t),pm=s(or," forward method, overrides the "),ai=r(or,"CODE",{});var Ug=i(ai);hm=s(Ug,"__call__"),Ug.forEach(t),mm=s(or," special method."),or.forEach(t),fm=m(Rn),y(cn.$$.fragment,Rn),um=m(Rn),y(pn.$$.fragment,Rn),Rn.forEach(t),Nt.forEach(t),$l=m(o),_o=r(o,"H2",{class:!0});var rd=i(_o);hn=r(rd,"A",{id:!0,class:!0,href:!0});var Kg=i(hn);ri=r(Kg,"SPAN",{});var Qg=i(ri);y(Ks.$$.fragment,Qg),Qg.forEach(t),Kg.forEach(t),gm=m(rd),ii=r(rd,"SPAN",{});var Gg=i(ii);_m=s(Gg,"TFDebertaPreTrainedModel"),Gg.forEach(t),rd.forEach(t),vl=m(o),jt=r(o,"DIV",{class:!0});var nr=i(jt);y(Qs.$$.fragment,nr),bm=m(nr),li=r(nr,"P",{});var Vg=i(li);km=s(Vg,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Vg.forEach(t),wm=m(nr),Ft=r(nr,"DIV",{class:!0});var On=i(Ft);y(Gs.$$.fragment,On),Tm=m(On),di=r(On,"P",{});var Jg=i(di);ym=s(Jg,"Calls the model on new inputs and returns the outputs as tensors."),Jg.forEach(t),$m=m(On),Vs=r(On,"P",{});var id=i(Vs);vm=s(id,"In this case "),ci=r(id,"CODE",{});var Xg=i(ci);Dm=s(Xg,"call()"),Xg.forEach(t),Em=s(id,` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),id.forEach(t),Fm=m(On),yt=r(On,"P",{});var Wt=i(yt);qm=s(Wt,`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),pi=r(Wt,"CODE",{});var Yg=i(pi);xm=s(Yg,"tf.keras.Model"),Yg.forEach(t),zm=s(Wt,`.
To call a model on an input, always use the `),hi=r(Wt,"CODE",{});var Zg=i(hi);jm=s(Zg,"__call__()"),Zg.forEach(t),Mm=s(Wt,` method,
i.e. `),mi=r(Wt,"CODE",{});var e_=i(mi);Cm=s(e_,"model(inputs)"),e_.forEach(t),Pm=s(Wt,", which relies on the underlying "),fi=r(Wt,"CODE",{});var t_=i(fi);Bm=s(t_,"call()"),t_.forEach(t),Am=s(Wt," method."),Wt.forEach(t),On.forEach(t),nr.forEach(t),Dl=m(o),bo=r(o,"H2",{class:!0});var ld=i(bo);mn=r(ld,"A",{id:!0,class:!0,href:!0});var o_=i(mn);ui=r(o_,"SPAN",{});var n_=i(ui);y(Js.$$.fragment,n_),n_.forEach(t),o_.forEach(t),Lm=m(ld),gi=r(ld,"SPAN",{});var s_=i(gi);Rm=s(s_,"TFDebertaForMaskedLM"),s_.forEach(t),ld.forEach(t),El=m(o),pt=r(o,"DIV",{class:!0});var Ht=i(pt);y(Xs.$$.fragment,Ht),Om=m(Ht),ko=r(Ht,"P",{});var sr=i(ko);Im=s(sr,"DeBERTa Model with a "),_i=r(sr,"CODE",{});var a_=i(_i);Sm=s(a_,"language modeling"),a_.forEach(t),Nm=s(sr,` head on top.
The DeBERTa model was proposed in `),Ys=r(sr,"A",{href:!0,rel:!0});var r_=i(Ys);Wm=s(r_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),r_.forEach(t),Hm=s(sr,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),sr.forEach(t),Um=m(Ht),Zs=r(Ht,"P",{});var dd=i(Zs);Km=s(dd,"This model is also a "),ea=r(dd,"A",{href:!0,rel:!0});var i_=i(ea);Qm=s(i_,"tf.keras.Model"),i_.forEach(t),Gm=s(dd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dd.forEach(t),Vm=m(Ht),y(fn.$$.fragment,Ht),Jm=m(Ht),ut=r(Ht,"DIV",{class:!0});var Ut=i(ut);y(ta.$$.fragment,Ut),Xm=m(Ut),wo=r(Ut,"P",{});var ar=i(wo);Ym=s(ar,"The "),Ia=r(ar,"A",{href:!0});var l_=i(Ia);Zm=s(l_,"TFDebertaForMaskedLM"),l_.forEach(t),ef=s(ar," forward method, overrides the "),bi=r(ar,"CODE",{});var d_=i(bi);tf=s(d_,"__call__"),d_.forEach(t),of=s(ar," special method."),ar.forEach(t),nf=m(Ut),y(un.$$.fragment,Ut),sf=m(Ut),y(gn.$$.fragment,Ut),af=m(Ut),y(_n.$$.fragment,Ut),Ut.forEach(t),Ht.forEach(t),Fl=m(o),To=r(o,"H2",{class:!0});var cd=i(To);bn=r(cd,"A",{id:!0,class:!0,href:!0});var c_=i(bn);ki=r(c_,"SPAN",{});var p_=i(ki);y(oa.$$.fragment,p_),p_.forEach(t),c_.forEach(t),rf=m(cd),wi=r(cd,"SPAN",{});var h_=i(wi);lf=s(h_,"TFDebertaForSequenceClassification"),h_.forEach(t),cd.forEach(t),ql=m(o),ot=r(o,"DIV",{class:!0});var qt=i(ot);y(na.$$.fragment,qt),df=m(qt),Ti=r(qt,"P",{});var m_=i(Ti);cf=s(m_,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),m_.forEach(t),pf=m(qt),sa=r(qt,"P",{});var pd=i(sa);hf=s(pd,"The DeBERTa model was proposed in "),aa=r(pd,"A",{href:!0,rel:!0});var f_=i(aa);mf=s(f_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),f_.forEach(t),ff=s(pd,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),pd.forEach(t),uf=m(qt),ra=r(qt,"P",{});var hd=i(ra);gf=s(hd,"This model is also a "),ia=r(hd,"A",{href:!0,rel:!0});var u_=i(ia);_f=s(u_,"tf.keras.Model"),u_.forEach(t),bf=s(hd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hd.forEach(t),kf=m(qt),y(kn.$$.fragment,qt),wf=m(qt),gt=r(qt,"DIV",{class:!0});var Kt=i(gt);y(la.$$.fragment,Kt),Tf=m(Kt),yo=r(Kt,"P",{});var rr=i(yo);yf=s(rr,"The "),Sa=r(rr,"A",{href:!0});var g_=i(Sa);$f=s(g_,"TFDebertaForSequenceClassification"),g_.forEach(t),vf=s(rr," forward method, overrides the "),yi=r(rr,"CODE",{});var __=i(yi);Df=s(__,"__call__"),__.forEach(t),Ef=s(rr," special method."),rr.forEach(t),Ff=m(Kt),y(wn.$$.fragment,Kt),qf=m(Kt),y(Tn.$$.fragment,Kt),xf=m(Kt),y(yn.$$.fragment,Kt),Kt.forEach(t),qt.forEach(t),xl=m(o),$o=r(o,"H2",{class:!0});var md=i($o);$n=r(md,"A",{id:!0,class:!0,href:!0});var b_=i($n);$i=r(b_,"SPAN",{});var k_=i($i);y(da.$$.fragment,k_),k_.forEach(t),b_.forEach(t),zf=m(md),vi=r(md,"SPAN",{});var w_=i(vi);jf=s(w_,"TFDebertaForTokenClassification"),w_.forEach(t),md.forEach(t),zl=m(o),nt=r(o,"DIV",{class:!0});var xt=i(nt);y(ca.$$.fragment,xt),Mf=m(xt),Di=r(xt,"P",{});var T_=i(Di);Cf=s(T_,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),T_.forEach(t),Pf=m(xt),pa=r(xt,"P",{});var fd=i(pa);Bf=s(fd,"The DeBERTa model was proposed in "),ha=r(fd,"A",{href:!0,rel:!0});var y_=i(ha);Af=s(y_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),y_.forEach(t),Lf=s(fd,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),fd.forEach(t),Rf=m(xt),ma=r(xt,"P",{});var ud=i(ma);Of=s(ud,"This model is also a "),fa=r(ud,"A",{href:!0,rel:!0});var $_=i(fa);If=s($_,"tf.keras.Model"),$_.forEach(t),Sf=s(ud,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ud.forEach(t),Nf=m(xt),y(vn.$$.fragment,xt),Wf=m(xt),_t=r(xt,"DIV",{class:!0});var Qt=i(_t);y(ua.$$.fragment,Qt),Hf=m(Qt),vo=r(Qt,"P",{});var ir=i(vo);Uf=s(ir,"The "),Na=r(ir,"A",{href:!0});var v_=i(Na);Kf=s(v_,"TFDebertaForTokenClassification"),v_.forEach(t),Qf=s(ir," forward method, overrides the "),Ei=r(ir,"CODE",{});var D_=i(Ei);Gf=s(D_,"__call__"),D_.forEach(t),Vf=s(ir," special method."),ir.forEach(t),Jf=m(Qt),y(Dn.$$.fragment,Qt),Xf=m(Qt),y(En.$$.fragment,Qt),Yf=m(Qt),y(Fn.$$.fragment,Qt),Qt.forEach(t),xt.forEach(t),jl=m(o),Do=r(o,"H2",{class:!0});var gd=i(Do);qn=r(gd,"A",{id:!0,class:!0,href:!0});var E_=i(qn);Fi=r(E_,"SPAN",{});var F_=i(Fi);y(ga.$$.fragment,F_),F_.forEach(t),E_.forEach(t),Zf=m(gd),qi=r(gd,"SPAN",{});var q_=i(qi);eu=s(q_,"TFDebertaForQuestionAnswering"),q_.forEach(t),gd.forEach(t),Ml=m(o),st=r(o,"DIV",{class:!0});var zt=i(st);y(_a.$$.fragment,zt),tu=m(zt),Eo=r(zt,"P",{});var lr=i(Eo);ou=s(lr,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),xi=r(lr,"CODE",{});var x_=i(xi);nu=s(x_,"span start logits"),x_.forEach(t),su=s(lr," and "),zi=r(lr,"CODE",{});var z_=i(zi);au=s(z_,"span end logits"),z_.forEach(t),ru=s(lr,")."),lr.forEach(t),iu=m(zt),ba=r(zt,"P",{});var _d=i(ba);lu=s(_d,"The DeBERTa model was proposed in "),ka=r(_d,"A",{href:!0,rel:!0});var j_=i(ka);du=s(j_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),j_.forEach(t),cu=s(_d,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),_d.forEach(t),pu=m(zt),wa=r(zt,"P",{});var bd=i(wa);hu=s(bd,"This model is also a "),Ta=r(bd,"A",{href:!0,rel:!0});var M_=i(Ta);mu=s(M_,"tf.keras.Model"),M_.forEach(t),fu=s(bd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bd.forEach(t),uu=m(zt),y(xn.$$.fragment,zt),gu=m(zt),bt=r(zt,"DIV",{class:!0});var Gt=i(bt);y(ya.$$.fragment,Gt),_u=m(Gt),Fo=r(Gt,"P",{});var dr=i(Fo);bu=s(dr,"The "),Wa=r(dr,"A",{href:!0});var C_=i(Wa);ku=s(C_,"TFDebertaForQuestionAnswering"),C_.forEach(t),wu=s(dr," forward method, overrides the "),ji=r(dr,"CODE",{});var P_=i(ji);Tu=s(P_,"__call__"),P_.forEach(t),yu=s(dr," special method."),dr.forEach(t),$u=m(Gt),y(zn.$$.fragment,Gt),vu=m(Gt),y(jn.$$.fragment,Gt),Du=m(Gt),y(Mn.$$.fragment,Gt),Gt.forEach(t),zt.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(qb)),u(f,"id","deberta"),u(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(f,"href","#deberta"),u(c,"class","relative group"),u(te,"id","overview"),u(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(te,"href","#overview"),u(L,"class","relative group"),u(de,"href","https://arxiv.org/abs/2006.03654"),u(de,"rel","nofollow"),u(ce,"href","https://github.com/microsoft/DeBERTa"),u(ce,"rel","nofollow"),u(pe,"href","https://huggingface.co/DeBERTa"),u(pe,"rel","nofollow"),u(W,"href","https://huggingface.co/kamalkraj"),u(W,"rel","nofollow"),u(H,"href","https://github.com/microsoft/DeBERTa"),u(H,"rel","nofollow"),u(S,"id","transformers.DebertaConfig"),u(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(S,"href","#transformers.DebertaConfig"),u(re,"class","relative group"),u(We,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaModel"),u(He,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaModel"),u(Ne,"href","https://huggingface.co/microsoft/deberta-base"),u(Ne,"rel","nofollow"),u(Q,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(fe,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(zo,"id","transformers.DebertaTokenizer"),u(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(zo,"href","#transformers.DebertaTokenizer"),u(Vt,"class","relative group"),u(ja,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ma,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Bo,"id","transformers.DebertaTokenizerFast"),u(Bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Bo,"href","#transformers.DebertaTokenizerFast"),u(Yt,"class","relative group"),u(Ca,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oo,"id","transformers.DebertaModel"),u(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Oo,"href","#transformers.DebertaModel"),u(eo,"class","relative group"),u(rs,"href","https://arxiv.org/abs/2006.03654"),u(rs,"rel","nofollow"),u(ls,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ls,"rel","nofollow"),u(Pa,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaModel"),u(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(No,"id","transformers.DebertaPreTrainedModel"),u(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(No,"href","#transformers.DebertaPreTrainedModel"),u(oo,"class","relative group"),u(no,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Wo,"id","transformers.DebertaForMaskedLM"),u(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Wo,"href","#transformers.DebertaForMaskedLM"),u(so,"class","relative group"),u(fs,"href","https://arxiv.org/abs/2006.03654"),u(fs,"rel","nofollow"),u(gs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(gs,"rel","nofollow"),u(Ba,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaForMaskedLM"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qo,"id","transformers.DebertaForSequenceClassification"),u(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Qo,"href","#transformers.DebertaForSequenceClassification"),u(io,"class","relative group"),u(Ts,"href","https://arxiv.org/abs/2006.03654"),u(Ts,"rel","nofollow"),u($s,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u($s,"rel","nofollow"),u(Aa,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaForSequenceClassification"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Zo,"id","transformers.DebertaForTokenClassification"),u(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Zo,"href","#transformers.DebertaForTokenClassification"),u(co,"class","relative group"),u(qs,"href","https://arxiv.org/abs/2006.03654"),u(qs,"rel","nofollow"),u(zs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(zs,"rel","nofollow"),u(La,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaForTokenClassification"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nn,"id","transformers.DebertaForQuestionAnswering"),u(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(nn,"href","#transformers.DebertaForQuestionAnswering"),u(ho,"class","relative group"),u(Bs,"href","https://arxiv.org/abs/2006.03654"),u(Bs,"rel","nofollow"),u(Ls,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ls,"rel","nofollow"),u(Ra,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaForQuestionAnswering"),u(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ln,"id","transformers.TFDebertaModel"),u(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ln,"href","#transformers.TFDebertaModel"),u(uo,"class","relative group"),u(Ns,"href","https://arxiv.org/abs/2006.03654"),u(Ns,"rel","nofollow"),u(Hs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Hs,"rel","nofollow"),u(Oa,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaModel"),u(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(hn,"id","transformers.TFDebertaPreTrainedModel"),u(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(hn,"href","#transformers.TFDebertaPreTrainedModel"),u(_o,"class","relative group"),u(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mn,"id","transformers.TFDebertaForMaskedLM"),u(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(mn,"href","#transformers.TFDebertaForMaskedLM"),u(bo,"class","relative group"),u(Ys,"href","https://arxiv.org/abs/2006.03654"),u(Ys,"rel","nofollow"),u(ea,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ea,"rel","nofollow"),u(Ia,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaForMaskedLM"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bn,"id","transformers.TFDebertaForSequenceClassification"),u(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(bn,"href","#transformers.TFDebertaForSequenceClassification"),u(To,"class","relative group"),u(aa,"href","https://arxiv.org/abs/2006.03654"),u(aa,"rel","nofollow"),u(ia,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ia,"rel","nofollow"),u(Sa,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaForSequenceClassification"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($n,"id","transformers.TFDebertaForTokenClassification"),u($n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($n,"href","#transformers.TFDebertaForTokenClassification"),u($o,"class","relative group"),u(ha,"href","https://arxiv.org/abs/2006.03654"),u(ha,"rel","nofollow"),u(fa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(fa,"rel","nofollow"),u(Na,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaForTokenClassification"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qn,"id","transformers.TFDebertaForQuestionAnswering"),u(qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(qn,"href","#transformers.TFDebertaForQuestionAnswering"),u(Do,"class","relative group"),u(ka,"href","https://arxiv.org/abs/2006.03654"),u(ka,"rel","nofollow"),u(Ta,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ta,"rel","nofollow"),u(Wa,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaForQuestionAnswering"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,b){e(document.head,d),_(o,g,b),_(o,c,b),e(c,f),e(f,w),$(l,w,null),e(c,p),e(c,z),e(z,ae),_(o,V,b),_(o,L,b),e(L,te),e(te,se),$(F,se,null),e(L,qe),e(L,G),e(G,xe),_(o,be,b),_(o,I,b),e(I,ze),e(I,de),e(de,J),e(I,je),_(o,ke,b),_(o,U,b),e(U,Me),_(o,we,b),_(o,K,b),e(K,Ce),_(o,Te,b),_(o,oe,b),e(oe,M),e(M,C),e(M,ce),e(ce,X),e(M,Pe),_(o,ye,b),_(o,R,b),e(R,Be),e(R,pe),e(pe,P),e(R,Ae),e(R,W),e(W,Le),e(R,Re),e(R,H),e(H,Oe),e(R,Ie),_(o,O,b),_(o,re,b),e(re,S),e(S,ue),$(Z,ue,null),e(re,B),e(re,ge),e(ge,A),_(o,$e,b),_(o,ne,b),$(k,ne,null),e(ne,x),e(ne,me),e(me,ie),e(me,We),e(We,Ke),e(me,j),e(me,He),e(He,Qe),e(me,Ge),e(me,Ne),e(Ne,Ve),e(me,N),e(ne,Y),e(ne,ve),e(ve,Je),e(ve,Q),e(Q,Xe),e(ve,Ye),e(ve,fe),e(fe,Ze),e(ve,le),_(o,Ue,b),_(o,Vt,b),e(Vt,zo),e(zo,cr),$(In,cr,null),e(Vt,kd),e(Vt,pr),e(pr,wd),_(o,rl,b),_(o,he,b),$(Sn,he,null),e(he,Td),e(he,hr),e(hr,yd),e(he,$d),e(he,mr),e(mr,vd),e(he,Dd),$(jo,he,null),e(he,Ed),e(he,Nn),e(Nn,Fd),e(Nn,fr),e(fr,qd),e(Nn,xd),e(he,zd),$(Mo,he,null),e(he,jd),e(he,Wn),e(Wn,Md),e(Wn,ja),e(ja,Cd),e(Wn,Pd),e(he,Bd),e(he,Pt),$(Hn,Pt,null),e(Pt,Ad),e(Pt,ur),e(ur,Ld),e(Pt,Rd),e(Pt,Un),e(Un,gr),e(gr,Od),e(Un,Id),e(Un,_r),e(_r,Sd),e(he,Nd),e(he,Co),$(Kn,Co,null),e(Co,Wd),e(Co,Jt),e(Jt,Hd),e(Jt,br),e(br,Ud),e(Jt,Kd),e(Jt,kr),e(kr,Qd),e(Jt,Gd),e(he,Vd),e(he,$t),$(Qn,$t,null),e($t,Jd),e($t,wr),e(wr,Xd),e($t,Yd),$(Po,$t,null),e($t,Zd),e($t,Xt),e(Xt,ec),e(Xt,Tr),e(Tr,tc),e(Xt,oc),e(Xt,yr),e(yr,nc),e(Xt,sc),e(he,ac),e(he,Ma),$(Gn,Ma,null),_(o,il,b),_(o,Yt,b),e(Yt,Bo),e(Bo,$r),$(Vn,$r,null),e(Yt,rc),e(Yt,vr),e(vr,ic),_(o,ll,b),_(o,Se,b),$(Jn,Se,null),e(Se,lc),e(Se,Xn),e(Xn,dc),e(Xn,Dr),e(Dr,cc),e(Xn,pc),e(Se,hc),e(Se,Er),e(Er,mc),e(Se,fc),$(Ao,Se,null),e(Se,uc),e(Se,Yn),e(Yn,gc),e(Yn,Fr),e(Fr,_c),e(Yn,bc),e(Se,kc),$(Lo,Se,null),e(Se,wc),e(Se,Zn),e(Zn,Tc),e(Zn,Ca),e(Ca,yc),e(Zn,$c),e(Se,vc),e(Se,Bt),$(es,Bt,null),e(Bt,Dc),e(Bt,qr),e(qr,Ec),e(Bt,Fc),e(Bt,ts),e(ts,xr),e(xr,qc),e(ts,xc),e(ts,zr),e(zr,zc),e(Se,jc),e(Se,vt),$(os,vt,null),e(vt,Mc),e(vt,jr),e(jr,Cc),e(vt,Pc),$(Ro,vt,null),e(vt,Bc),e(vt,Zt),e(Zt,Ac),e(Zt,Mr),e(Mr,Lc),e(Zt,Rc),e(Zt,Cr),e(Cr,Oc),e(Zt,Ic),_(o,dl,b),_(o,eo,b),e(eo,Oo),e(Oo,Pr),$(ns,Pr,null),e(eo,Sc),e(eo,Br),e(Br,Nc),_(o,cl,b),_(o,wt,b),$(ss,wt,null),e(wt,Wc),e(wt,as),e(as,Hc),e(as,rs),e(rs,Uc),e(as,Kc),e(wt,Qc),e(wt,is),e(is,Gc),e(is,ls),e(ls,Vc),e(is,Jc),e(wt,Xc),e(wt,Dt),$(ds,Dt,null),e(Dt,Yc),e(Dt,to),e(to,Zc),e(to,Pa),e(Pa,ep),e(to,tp),e(to,Ar),e(Ar,op),e(to,np),e(Dt,sp),$(Io,Dt,null),e(Dt,ap),$(So,Dt,null),_(o,pl,b),_(o,oo,b),e(oo,No),e(No,Lr),$(cs,Lr,null),e(oo,rp),e(oo,Rr),e(Rr,ip),_(o,hl,b),_(o,no,b),$(ps,no,null),e(no,lp),e(no,Or),e(Or,dp),_(o,ml,b),_(o,so,b),e(so,Wo),e(Wo,Ir),$(hs,Ir,null),e(so,cp),e(so,Sr),e(Sr,pp),_(o,fl,b),_(o,Tt,b),$(ms,Tt,null),e(Tt,hp),e(Tt,ao),e(ao,mp),e(ao,Nr),e(Nr,fp),e(ao,up),e(ao,fs),e(fs,gp),e(ao,_p),e(Tt,bp),e(Tt,us),e(us,kp),e(us,gs),e(gs,wp),e(us,Tp),e(Tt,yp),e(Tt,ht),$(_s,ht,null),e(ht,$p),e(ht,ro),e(ro,vp),e(ro,Ba),e(Ba,Dp),e(ro,Ep),e(ro,Wr),e(Wr,Fp),e(ro,qp),e(ht,xp),$(Ho,ht,null),e(ht,zp),$(Uo,ht,null),e(ht,jp),$(Ko,ht,null),_(o,ul,b),_(o,io,b),e(io,Qo),e(Qo,Hr),$(bs,Hr,null),e(io,Mp),e(io,Ur),e(Ur,Cp),_(o,gl,b),_(o,it,b),$(ks,it,null),e(it,Pp),e(it,Kr),e(Kr,Bp),e(it,Ap),e(it,ws),e(ws,Lp),e(ws,Ts),e(Ts,Rp),e(ws,Op),e(it,Ip),e(it,ys),e(ys,Sp),e(ys,$s),e($s,Np),e(ys,Wp),e(it,Hp),e(it,et),$(vs,et,null),e(et,Up),e(et,lo),e(lo,Kp),e(lo,Aa),e(Aa,Qp),e(lo,Gp),e(lo,Qr),e(Qr,Vp),e(lo,Jp),e(et,Xp),$(Go,et,null),e(et,Yp),$(Vo,et,null),e(et,Zp),$(Jo,et,null),e(et,eh),$(Xo,et,null),e(et,th),$(Yo,et,null),_(o,_l,b),_(o,co,b),e(co,Zo),e(Zo,Gr),$(Ds,Gr,null),e(co,oh),e(co,Vr),e(Vr,nh),_(o,bl,b),_(o,lt,b),$(Es,lt,null),e(lt,sh),e(lt,Jr),e(Jr,ah),e(lt,rh),e(lt,Fs),e(Fs,ih),e(Fs,qs),e(qs,lh),e(Fs,dh),e(lt,ch),e(lt,xs),e(xs,ph),e(xs,zs),e(zs,hh),e(xs,mh),e(lt,fh),e(lt,mt),$(js,mt,null),e(mt,uh),e(mt,po),e(po,gh),e(po,La),e(La,_h),e(po,bh),e(po,Xr),e(Xr,kh),e(po,wh),e(mt,Th),$(en,mt,null),e(mt,yh),$(tn,mt,null),e(mt,$h),$(on,mt,null),_(o,kl,b),_(o,ho,b),e(ho,nn),e(nn,Yr),$(Ms,Yr,null),e(ho,vh),e(ho,Zr),e(Zr,Dh),_(o,wl,b),_(o,dt,b),$(Cs,dt,null),e(dt,Eh),e(dt,mo),e(mo,Fh),e(mo,ei),e(ei,qh),e(mo,xh),e(mo,ti),e(ti,zh),e(mo,jh),e(dt,Mh),e(dt,Ps),e(Ps,Ch),e(Ps,Bs),e(Bs,Ph),e(Ps,Bh),e(dt,Ah),e(dt,As),e(As,Lh),e(As,Ls),e(Ls,Rh),e(As,Oh),e(dt,Ih),e(dt,ft),$(Rs,ft,null),e(ft,Sh),e(ft,fo),e(fo,Nh),e(fo,Ra),e(Ra,Wh),e(fo,Hh),e(fo,oi),e(oi,Uh),e(fo,Kh),e(ft,Qh),$(sn,ft,null),e(ft,Gh),$(an,ft,null),e(ft,Vh),$(rn,ft,null),_(o,Tl,b),_(o,uo,b),e(uo,ln),e(ln,ni),$(Os,ni,null),e(uo,Jh),e(uo,si),e(si,Xh),_(o,yl,b),_(o,ct,b),$(Is,ct,null),e(ct,Yh),e(ct,Ss),e(Ss,Zh),e(Ss,Ns),e(Ns,em),e(Ss,tm),e(ct,om),e(ct,Ws),e(Ws,nm),e(Ws,Hs),e(Hs,sm),e(Ws,am),e(ct,rm),$(dn,ct,null),e(ct,im),e(ct,Et),$(Us,Et,null),e(Et,lm),e(Et,go),e(go,dm),e(go,Oa),e(Oa,cm),e(go,pm),e(go,ai),e(ai,hm),e(go,mm),e(Et,fm),$(cn,Et,null),e(Et,um),$(pn,Et,null),_(o,$l,b),_(o,_o,b),e(_o,hn),e(hn,ri),$(Ks,ri,null),e(_o,gm),e(_o,ii),e(ii,_m),_(o,vl,b),_(o,jt,b),$(Qs,jt,null),e(jt,bm),e(jt,li),e(li,km),e(jt,wm),e(jt,Ft),$(Gs,Ft,null),e(Ft,Tm),e(Ft,di),e(di,ym),e(Ft,$m),e(Ft,Vs),e(Vs,vm),e(Vs,ci),e(ci,Dm),e(Vs,Em),e(Ft,Fm),e(Ft,yt),e(yt,qm),e(yt,pi),e(pi,xm),e(yt,zm),e(yt,hi),e(hi,jm),e(yt,Mm),e(yt,mi),e(mi,Cm),e(yt,Pm),e(yt,fi),e(fi,Bm),e(yt,Am),_(o,Dl,b),_(o,bo,b),e(bo,mn),e(mn,ui),$(Js,ui,null),e(bo,Lm),e(bo,gi),e(gi,Rm),_(o,El,b),_(o,pt,b),$(Xs,pt,null),e(pt,Om),e(pt,ko),e(ko,Im),e(ko,_i),e(_i,Sm),e(ko,Nm),e(ko,Ys),e(Ys,Wm),e(ko,Hm),e(pt,Um),e(pt,Zs),e(Zs,Km),e(Zs,ea),e(ea,Qm),e(Zs,Gm),e(pt,Vm),$(fn,pt,null),e(pt,Jm),e(pt,ut),$(ta,ut,null),e(ut,Xm),e(ut,wo),e(wo,Ym),e(wo,Ia),e(Ia,Zm),e(wo,ef),e(wo,bi),e(bi,tf),e(wo,of),e(ut,nf),$(un,ut,null),e(ut,sf),$(gn,ut,null),e(ut,af),$(_n,ut,null),_(o,Fl,b),_(o,To,b),e(To,bn),e(bn,ki),$(oa,ki,null),e(To,rf),e(To,wi),e(wi,lf),_(o,ql,b),_(o,ot,b),$(na,ot,null),e(ot,df),e(ot,Ti),e(Ti,cf),e(ot,pf),e(ot,sa),e(sa,hf),e(sa,aa),e(aa,mf),e(sa,ff),e(ot,uf),e(ot,ra),e(ra,gf),e(ra,ia),e(ia,_f),e(ra,bf),e(ot,kf),$(kn,ot,null),e(ot,wf),e(ot,gt),$(la,gt,null),e(gt,Tf),e(gt,yo),e(yo,yf),e(yo,Sa),e(Sa,$f),e(yo,vf),e(yo,yi),e(yi,Df),e(yo,Ef),e(gt,Ff),$(wn,gt,null),e(gt,qf),$(Tn,gt,null),e(gt,xf),$(yn,gt,null),_(o,xl,b),_(o,$o,b),e($o,$n),e($n,$i),$(da,$i,null),e($o,zf),e($o,vi),e(vi,jf),_(o,zl,b),_(o,nt,b),$(ca,nt,null),e(nt,Mf),e(nt,Di),e(Di,Cf),e(nt,Pf),e(nt,pa),e(pa,Bf),e(pa,ha),e(ha,Af),e(pa,Lf),e(nt,Rf),e(nt,ma),e(ma,Of),e(ma,fa),e(fa,If),e(ma,Sf),e(nt,Nf),$(vn,nt,null),e(nt,Wf),e(nt,_t),$(ua,_t,null),e(_t,Hf),e(_t,vo),e(vo,Uf),e(vo,Na),e(Na,Kf),e(vo,Qf),e(vo,Ei),e(Ei,Gf),e(vo,Vf),e(_t,Jf),$(Dn,_t,null),e(_t,Xf),$(En,_t,null),e(_t,Yf),$(Fn,_t,null),_(o,jl,b),_(o,Do,b),e(Do,qn),e(qn,Fi),$(ga,Fi,null),e(Do,Zf),e(Do,qi),e(qi,eu),_(o,Ml,b),_(o,st,b),$(_a,st,null),e(st,tu),e(st,Eo),e(Eo,ou),e(Eo,xi),e(xi,nu),e(Eo,su),e(Eo,zi),e(zi,au),e(Eo,ru),e(st,iu),e(st,ba),e(ba,lu),e(ba,ka),e(ka,du),e(ba,cu),e(st,pu),e(st,wa),e(wa,hu),e(wa,Ta),e(Ta,mu),e(wa,fu),e(st,uu),$(xn,st,null),e(st,gu),e(st,bt),$(ya,bt,null),e(bt,_u),e(bt,Fo),e(Fo,bu),e(Fo,Wa),e(Wa,ku),e(Fo,wu),e(Fo,ji),e(ji,Tu),e(Fo,yu),e(bt,$u),$(zn,bt,null),e(bt,vu),$(jn,bt,null),e(bt,Du),$(Mn,bt,null),Cl=!0},p(o,[b]){const $a={};b&2&&($a.$$scope={dirty:b,ctx:o}),jo.$set($a);const Mi={};b&2&&(Mi.$$scope={dirty:b,ctx:o}),Mo.$set(Mi);const Ci={};b&2&&(Ci.$$scope={dirty:b,ctx:o}),Po.$set(Ci);const Pi={};b&2&&(Pi.$$scope={dirty:b,ctx:o}),Ao.$set(Pi);const va={};b&2&&(va.$$scope={dirty:b,ctx:o}),Lo.$set(va);const Bi={};b&2&&(Bi.$$scope={dirty:b,ctx:o}),Ro.$set(Bi);const Ai={};b&2&&(Ai.$$scope={dirty:b,ctx:o}),Io.$set(Ai);const Li={};b&2&&(Li.$$scope={dirty:b,ctx:o}),So.$set(Li);const Da={};b&2&&(Da.$$scope={dirty:b,ctx:o}),Ho.$set(Da);const Ri={};b&2&&(Ri.$$scope={dirty:b,ctx:o}),Uo.$set(Ri);const Oi={};b&2&&(Oi.$$scope={dirty:b,ctx:o}),Ko.$set(Oi);const Ii={};b&2&&(Ii.$$scope={dirty:b,ctx:o}),Go.$set(Ii);const Si={};b&2&&(Si.$$scope={dirty:b,ctx:o}),Vo.$set(Si);const Ea={};b&2&&(Ea.$$scope={dirty:b,ctx:o}),Jo.$set(Ea);const Ni={};b&2&&(Ni.$$scope={dirty:b,ctx:o}),Xo.$set(Ni);const Mt={};b&2&&(Mt.$$scope={dirty:b,ctx:o}),Yo.$set(Mt);const Wi={};b&2&&(Wi.$$scope={dirty:b,ctx:o}),en.$set(Wi);const Hi={};b&2&&(Hi.$$scope={dirty:b,ctx:o}),tn.$set(Hi);const Ui={};b&2&&(Ui.$$scope={dirty:b,ctx:o}),on.$set(Ui);const Fa={};b&2&&(Fa.$$scope={dirty:b,ctx:o}),sn.$set(Fa);const Ki={};b&2&&(Ki.$$scope={dirty:b,ctx:o}),an.$set(Ki);const Qi={};b&2&&(Qi.$$scope={dirty:b,ctx:o}),rn.$set(Qi);const Gi={};b&2&&(Gi.$$scope={dirty:b,ctx:o}),dn.$set(Gi);const qo={};b&2&&(qo.$$scope={dirty:b,ctx:o}),cn.$set(qo);const Ct={};b&2&&(Ct.$$scope={dirty:b,ctx:o}),pn.$set(Ct);const Vi={};b&2&&(Vi.$$scope={dirty:b,ctx:o}),fn.$set(Vi);const Ji={};b&2&&(Ji.$$scope={dirty:b,ctx:o}),un.$set(Ji);const Xi={};b&2&&(Xi.$$scope={dirty:b,ctx:o}),gn.$set(Xi);const xo={};b&2&&(xo.$$scope={dirty:b,ctx:o}),_n.$set(xo);const Yi={};b&2&&(Yi.$$scope={dirty:b,ctx:o}),kn.$set(Yi);const Zi={};b&2&&(Zi.$$scope={dirty:b,ctx:o}),wn.$set(Zi);const qa={};b&2&&(qa.$$scope={dirty:b,ctx:o}),Tn.$set(qa);const el={};b&2&&(el.$$scope={dirty:b,ctx:o}),yn.$set(el);const tl={};b&2&&(tl.$$scope={dirty:b,ctx:o}),vn.$set(tl);const ol={};b&2&&(ol.$$scope={dirty:b,ctx:o}),Dn.$set(ol);const _e={};b&2&&(_e.$$scope={dirty:b,ctx:o}),En.$set(_e);const nl={};b&2&&(nl.$$scope={dirty:b,ctx:o}),Fn.$set(nl);const sl={};b&2&&(sl.$$scope={dirty:b,ctx:o}),xn.$set(sl);const xa={};b&2&&(xa.$$scope={dirty:b,ctx:o}),zn.$set(xa);const al={};b&2&&(al.$$scope={dirty:b,ctx:o}),jn.$set(al);const za={};b&2&&(za.$$scope={dirty:b,ctx:o}),Mn.$set(za)},i(o){Cl||(v(l.$$.fragment,o),v(F.$$.fragment,o),v(Z.$$.fragment,o),v(k.$$.fragment,o),v(In.$$.fragment,o),v(Sn.$$.fragment,o),v(jo.$$.fragment,o),v(Mo.$$.fragment,o),v(Hn.$$.fragment,o),v(Kn.$$.fragment,o),v(Qn.$$.fragment,o),v(Po.$$.fragment,o),v(Gn.$$.fragment,o),v(Vn.$$.fragment,o),v(Jn.$$.fragment,o),v(Ao.$$.fragment,o),v(Lo.$$.fragment,o),v(es.$$.fragment,o),v(os.$$.fragment,o),v(Ro.$$.fragment,o),v(ns.$$.fragment,o),v(ss.$$.fragment,o),v(ds.$$.fragment,o),v(Io.$$.fragment,o),v(So.$$.fragment,o),v(cs.$$.fragment,o),v(ps.$$.fragment,o),v(hs.$$.fragment,o),v(ms.$$.fragment,o),v(_s.$$.fragment,o),v(Ho.$$.fragment,o),v(Uo.$$.fragment,o),v(Ko.$$.fragment,o),v(bs.$$.fragment,o),v(ks.$$.fragment,o),v(vs.$$.fragment,o),v(Go.$$.fragment,o),v(Vo.$$.fragment,o),v(Jo.$$.fragment,o),v(Xo.$$.fragment,o),v(Yo.$$.fragment,o),v(Ds.$$.fragment,o),v(Es.$$.fragment,o),v(js.$$.fragment,o),v(en.$$.fragment,o),v(tn.$$.fragment,o),v(on.$$.fragment,o),v(Ms.$$.fragment,o),v(Cs.$$.fragment,o),v(Rs.$$.fragment,o),v(sn.$$.fragment,o),v(an.$$.fragment,o),v(rn.$$.fragment,o),v(Os.$$.fragment,o),v(Is.$$.fragment,o),v(dn.$$.fragment,o),v(Us.$$.fragment,o),v(cn.$$.fragment,o),v(pn.$$.fragment,o),v(Ks.$$.fragment,o),v(Qs.$$.fragment,o),v(Gs.$$.fragment,o),v(Js.$$.fragment,o),v(Xs.$$.fragment,o),v(fn.$$.fragment,o),v(ta.$$.fragment,o),v(un.$$.fragment,o),v(gn.$$.fragment,o),v(_n.$$.fragment,o),v(oa.$$.fragment,o),v(na.$$.fragment,o),v(kn.$$.fragment,o),v(la.$$.fragment,o),v(wn.$$.fragment,o),v(Tn.$$.fragment,o),v(yn.$$.fragment,o),v(da.$$.fragment,o),v(ca.$$.fragment,o),v(vn.$$.fragment,o),v(ua.$$.fragment,o),v(Dn.$$.fragment,o),v(En.$$.fragment,o),v(Fn.$$.fragment,o),v(ga.$$.fragment,o),v(_a.$$.fragment,o),v(xn.$$.fragment,o),v(ya.$$.fragment,o),v(zn.$$.fragment,o),v(jn.$$.fragment,o),v(Mn.$$.fragment,o),Cl=!0)},o(o){D(l.$$.fragment,o),D(F.$$.fragment,o),D(Z.$$.fragment,o),D(k.$$.fragment,o),D(In.$$.fragment,o),D(Sn.$$.fragment,o),D(jo.$$.fragment,o),D(Mo.$$.fragment,o),D(Hn.$$.fragment,o),D(Kn.$$.fragment,o),D(Qn.$$.fragment,o),D(Po.$$.fragment,o),D(Gn.$$.fragment,o),D(Vn.$$.fragment,o),D(Jn.$$.fragment,o),D(Ao.$$.fragment,o),D(Lo.$$.fragment,o),D(es.$$.fragment,o),D(os.$$.fragment,o),D(Ro.$$.fragment,o),D(ns.$$.fragment,o),D(ss.$$.fragment,o),D(ds.$$.fragment,o),D(Io.$$.fragment,o),D(So.$$.fragment,o),D(cs.$$.fragment,o),D(ps.$$.fragment,o),D(hs.$$.fragment,o),D(ms.$$.fragment,o),D(_s.$$.fragment,o),D(Ho.$$.fragment,o),D(Uo.$$.fragment,o),D(Ko.$$.fragment,o),D(bs.$$.fragment,o),D(ks.$$.fragment,o),D(vs.$$.fragment,o),D(Go.$$.fragment,o),D(Vo.$$.fragment,o),D(Jo.$$.fragment,o),D(Xo.$$.fragment,o),D(Yo.$$.fragment,o),D(Ds.$$.fragment,o),D(Es.$$.fragment,o),D(js.$$.fragment,o),D(en.$$.fragment,o),D(tn.$$.fragment,o),D(on.$$.fragment,o),D(Ms.$$.fragment,o),D(Cs.$$.fragment,o),D(Rs.$$.fragment,o),D(sn.$$.fragment,o),D(an.$$.fragment,o),D(rn.$$.fragment,o),D(Os.$$.fragment,o),D(Is.$$.fragment,o),D(dn.$$.fragment,o),D(Us.$$.fragment,o),D(cn.$$.fragment,o),D(pn.$$.fragment,o),D(Ks.$$.fragment,o),D(Qs.$$.fragment,o),D(Gs.$$.fragment,o),D(Js.$$.fragment,o),D(Xs.$$.fragment,o),D(fn.$$.fragment,o),D(ta.$$.fragment,o),D(un.$$.fragment,o),D(gn.$$.fragment,o),D(_n.$$.fragment,o),D(oa.$$.fragment,o),D(na.$$.fragment,o),D(kn.$$.fragment,o),D(la.$$.fragment,o),D(wn.$$.fragment,o),D(Tn.$$.fragment,o),D(yn.$$.fragment,o),D(da.$$.fragment,o),D(ca.$$.fragment,o),D(vn.$$.fragment,o),D(ua.$$.fragment,o),D(Dn.$$.fragment,o),D(En.$$.fragment,o),D(Fn.$$.fragment,o),D(ga.$$.fragment,o),D(_a.$$.fragment,o),D(xn.$$.fragment,o),D(ya.$$.fragment,o),D(zn.$$.fragment,o),D(jn.$$.fragment,o),D(Mn.$$.fragment,o),Cl=!1},d(o){t(d),o&&t(g),o&&t(c),E(l),o&&t(V),o&&t(L),E(F),o&&t(be),o&&t(I),o&&t(ke),o&&t(U),o&&t(we),o&&t(K),o&&t(Te),o&&t(oe),o&&t(ye),o&&t(R),o&&t(O),o&&t(re),E(Z),o&&t($e),o&&t(ne),E(k),o&&t(Ue),o&&t(Vt),E(In),o&&t(rl),o&&t(he),E(Sn),E(jo),E(Mo),E(Hn),E(Kn),E(Qn),E(Po),E(Gn),o&&t(il),o&&t(Yt),E(Vn),o&&t(ll),o&&t(Se),E(Jn),E(Ao),E(Lo),E(es),E(os),E(Ro),o&&t(dl),o&&t(eo),E(ns),o&&t(cl),o&&t(wt),E(ss),E(ds),E(Io),E(So),o&&t(pl),o&&t(oo),E(cs),o&&t(hl),o&&t(no),E(ps),o&&t(ml),o&&t(so),E(hs),o&&t(fl),o&&t(Tt),E(ms),E(_s),E(Ho),E(Uo),E(Ko),o&&t(ul),o&&t(io),E(bs),o&&t(gl),o&&t(it),E(ks),E(vs),E(Go),E(Vo),E(Jo),E(Xo),E(Yo),o&&t(_l),o&&t(co),E(Ds),o&&t(bl),o&&t(lt),E(Es),E(js),E(en),E(tn),E(on),o&&t(kl),o&&t(ho),E(Ms),o&&t(wl),o&&t(dt),E(Cs),E(Rs),E(sn),E(an),E(rn),o&&t(Tl),o&&t(uo),E(Os),o&&t(yl),o&&t(ct),E(Is),E(dn),E(Us),E(cn),E(pn),o&&t($l),o&&t(_o),E(Ks),o&&t(vl),o&&t(jt),E(Qs),E(Gs),o&&t(Dl),o&&t(bo),E(Js),o&&t(El),o&&t(pt),E(Xs),E(fn),E(ta),E(un),E(gn),E(_n),o&&t(Fl),o&&t(To),E(oa),o&&t(ql),o&&t(ot),E(na),E(kn),E(la),E(wn),E(Tn),E(yn),o&&t(xl),o&&t($o),E(da),o&&t(zl),o&&t(nt),E(ca),E(vn),E(ua),E(Dn),E(En),E(Fn),o&&t(jl),o&&t(Do),E(ga),o&&t(Ml),o&&t(st),E(_a),E(xn),E(ya),E(zn),E(jn),E(Mn)}}}const qb={local:"deberta",sections:[{local:"overview",title:"Overview"},{local:"transformers.DebertaConfig",title:"DebertaConfig"},{local:"transformers.DebertaTokenizer",title:"DebertaTokenizer"},{local:"transformers.DebertaTokenizerFast",title:"DebertaTokenizerFast"},{local:"transformers.DebertaModel",title:"DebertaModel"},{local:"transformers.DebertaPreTrainedModel",title:"DebertaPreTrainedModel"},{local:"transformers.DebertaForMaskedLM",title:"DebertaForMaskedLM"},{local:"transformers.DebertaForSequenceClassification",title:"DebertaForSequenceClassification"},{local:"transformers.DebertaForTokenClassification",title:"DebertaForTokenClassification"},{local:"transformers.DebertaForQuestionAnswering",title:"DebertaForQuestionAnswering"},{local:"transformers.TFDebertaModel",title:"TFDebertaModel"},{local:"transformers.TFDebertaPreTrainedModel",title:"TFDebertaPreTrainedModel"},{local:"transformers.TFDebertaForMaskedLM",title:"TFDebertaForMaskedLM"},{local:"transformers.TFDebertaForSequenceClassification",title:"TFDebertaForSequenceClassification"},{local:"transformers.TFDebertaForTokenClassification",title:"TFDebertaForTokenClassification"},{local:"transformers.TFDebertaForQuestionAnswering",title:"TFDebertaForQuestionAnswering"}],title:"DeBERTa"};function xb(q){return O_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ab extends B_{constructor(d){super();A_(this,d,xb,Fb,L_,{})}}export{Ab as default,qb as metadata};
