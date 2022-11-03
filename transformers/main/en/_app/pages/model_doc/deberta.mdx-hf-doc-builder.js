import{S as L_,i as R_,s as O_,e as a,k as h,w as T,t as n,M as I_,c as r,d as t,m,a as i,x as y,h as s,b as g,G as e,g as _,y as $,q as v,o as D,B as E,v as S_,L as ke}from"../../chunks/vendor-hf-doc-builder.js";import{T as at}from"../../chunks/Tip-hf-doc-builder.js";import{D as te}from"../../chunks/Docstring-hf-doc-builder.js";import{C as we}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as rt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as be}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function N_(q){let d,u,c,f,w;return f=new we({props:{code:`from transformers import DebertaConfig, DebertaModel

# Initializing a DeBERTa microsoft/deberta-base style configuration
configuration = DebertaConfig()

# Initializing a model (with random weights) from the microsoft/deberta-base style configuration
model = DebertaModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaConfig, DebertaModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a DeBERTa microsoft/deberta-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = DebertaConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the microsoft/deberta-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),u=n("Example:"),c=h(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Example:"),p.forEach(t),c=m(l),y(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,u),_(l,c,p),$(f,l,p),w=!0},p:ke,i(l){w||(v(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function W_(q){let d,u,c,f,w;return f=new we({props:{code:`from transformers import DebertaTokenizer
tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[15496, 995]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[18435, 995]`}}),{c(){d=a("p"),u=n("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c=h(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),p.forEach(t),c=m(l),y(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,u),_(l,c,p),$(f,l,p),w=!0},p:ke,i(l){w||(v(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function H_(q){let d,u,c,f,w;return{c(){d=a("p"),u=n("When used with "),c=a("code"),f=n("is_split_into_words=True"),w=n(", this tokenizer will add a space before each word (even the first one).")},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"When used with "),c=r(p,"CODE",{});var z=i(c);f=s(z,"is_split_into_words=True"),z.forEach(t),w=s(p,", this tokenizer will add a space before each word (even the first one)."),p.forEach(t)},m(l,p){_(l,d,p),e(d,u),e(d,c),e(c,f),e(d,w)},d(l){l&&t(d)}}}function U_(q){let d,u,c,f,w;return f=new we({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=a("p"),u=n("sequence pair mask has the following format:"),c=h(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"sequence pair mask has the following format:"),p.forEach(t),c=m(l),y(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,u),_(l,c,p),$(f,l,p),w=!0},p:ke,i(l){w||(v(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function K_(q){let d,u,c,f,w;return f=new we({props:{code:`from transformers import DebertaTokenizerFast
tokenizer = DebertaTokenizerFast.from_pretrained("microsoft/deberta-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = DebertaTokenizerFast.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[15496, 995]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[18435, 995]`}}),{c(){d=a("p"),u=n("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c=h(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),p.forEach(t),c=m(l),y(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,u),_(l,c,p),$(f,l,p),w=!0},p:ke,i(l){w||(v(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function Q_(q){let d,u,c,f,w,l,p,z;return{c(){d=a("p"),u=n("When used with "),c=a("code"),f=n("is_split_into_words=True"),w=n(", this tokenizer needs to be instantiated with "),l=a("code"),p=n("add_prefix_space=True"),z=n(".")},l(ae){d=r(ae,"P",{});var V=i(d);u=s(V,"When used with "),c=r(V,"CODE",{});var L=i(c);f=s(L,"is_split_into_words=True"),L.forEach(t),w=s(V,", this tokenizer needs to be instantiated with "),l=r(V,"CODE",{});var oe=i(l);p=s(oe,"add_prefix_space=True"),oe.forEach(t),z=s(V,"."),V.forEach(t)},m(ae,V){_(ae,d,V),e(d,u),e(d,c),e(c,f),e(d,w),e(d,l),e(l,p),e(d,z)},d(ae){ae&&t(d)}}}function G_(q){let d,u,c,f,w;return f=new we({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=a("p"),u=n("sequence pair mask has the following format:"),c=h(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"sequence pair mask has the following format:"),p.forEach(t),c=m(l),y(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,u),_(l,c,p),$(f,l,p),w=!0},p:ke,i(l){w||(v(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function V_(q){let d,u,c,f,w;return{c(){d=a("p"),u=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,u),e(d,c),e(c,f),e(d,w)},d(l){l&&t(d)}}}function J_(q){let d,u,c,f,w;return f=new we({props:{code:`from transformers import DebertaTokenizer, DebertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),u=n("Example:"),c=h(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Example:"),p.forEach(t),c=m(l),y(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,u),_(l,c,p),$(f,l,p),w=!0},p:ke,i(l){w||(v(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function X_(q){let d,u,c,f,w;return{c(){d=a("p"),u=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,u),e(d,c),e(c,f),e(d,w)},d(l){l&&t(d)}}}function Y_(q){let d,u,c,f,w;return f=new we({props:{code:`from transformers import DebertaTokenizer, DebertaForMaskedLM
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
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){d=a("p"),u=n("Example:"),c=h(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Example:"),p.forEach(t),c=m(l),y(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,u),_(l,c,p),$(f,l,p),w=!0},p:ke,i(l){w||(v(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function Z_(q){let d,u;return d=new we({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.54</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,f){$(d,c,f),u=!0},p:ke,i(c){u||(v(d.$$.fragment,c),u=!0)},o(c){D(d.$$.fragment,c),u=!1},d(c){E(d,c)}}}function eb(q){let d,u,c,f,w;return{c(){d=a("p"),u=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,u),e(d,c),e(c,f),e(d,w)},d(l){l&&t(d)}}}function tb(q){let d,u,c,f,w;return f=new we({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=a("p"),u=n("Example of single-label classification:"),c=h(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Example of single-label classification:"),p.forEach(t),c=m(l),y(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,u),_(l,c,p),$(f,l,p),w=!0},p:ke,i(l){w||(v(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function ob(q){let d,u;return d=new we({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = DebertaForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-deberta", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-deberta&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.69</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,f){$(d,c,f),u=!0},p:ke,i(c){u||(v(d.$$.fragment,c),u=!0)},o(c){D(d.$$.fragment,c),u=!1},d(c){E(d,c)}}}function nb(q){let d,u,c,f,w;return f=new we({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=a("p"),u=n("Example of multi-label classification:"),c=h(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Example of multi-label classification:"),p.forEach(t),c=m(l),y(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,u),_(l,c,p),$(f,l,p),w=!0},p:ke,i(l){w||(v(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function sb(q){let d,u;return d=new we({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,f){$(d,c,f),u=!0},p:ke,i(c){u||(v(d.$$.fragment,c),u=!0)},o(c){D(d.$$.fragment,c),u=!1},d(c){E(d,c)}}}function ab(q){let d,u,c,f,w;return{c(){d=a("p"),u=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,u),e(d,c),e(c,f),e(d,w)},d(l){l&&t(d)}}}function rb(q){let d,u,c,f,w;return f=new we({props:{code:`from transformers import DebertaTokenizer, DebertaForTokenClassification
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
[<span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>]`}}),{c(){d=a("p"),u=n("Example:"),c=h(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Example:"),p.forEach(t),c=m(l),y(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,u),_(l,c,p),$(f,l,p),w=!0},p:ke,i(l){w||(v(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function ib(q){let d,u;return d=new we({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.04</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,f){$(d,c,f),u=!0},p:ke,i(c){u||(v(d.$$.fragment,c),u=!0)},o(c){D(d.$$.fragment,c),u=!1},d(c){E(d,c)}}}function lb(q){let d,u,c,f,w;return{c(){d=a("p"),u=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,u),e(d,c),e(c,f),e(d,w)},d(l){l&&t(d)}}}function db(q){let d,u,c,f,w;return f=new we({props:{code:`from transformers import DebertaTokenizer, DebertaForQuestionAnswering
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
tokenizer.decode(predict_answer_tokens, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-string">&#x27; a nice puppet&#x27;</span>`}}),{c(){d=a("p"),u=n("Example:"),c=h(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Example:"),p.forEach(t),c=m(l),y(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,u),_(l,c,p),$(f,l,p),w=!0},p:ke,i(l){w||(v(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function cb(q){let d,u;return d=new we({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.14</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,f){$(d,c,f),u=!0},p:ke,i(c){u||(v(d.$$.fragment,c),u=!0)},o(c){D(d.$$.fragment,c),u=!1},d(c){E(d,c)}}}function pb(q){let d,u,c,f,w,l,p,z,ae,V,L,oe,se,F,qe,G,xe,Te,I,ze,de,J,je,ye,U,Me,$e,K,Ce,ve,ne,M,C,ce,X,Pe,De,R,Be,pe,P,Ae,W,Le,Re,H,Oe,Ie,O,re,S,ue,ee,B,ge,A,Ee,Y;return{c(){d=a("p"),u=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),w=n(" accept two formats as input:"),l=h(),p=a("ul"),z=a("li"),ae=n("having all inputs as keyword arguments (like PyTorch models), or"),V=h(),L=a("li"),oe=n("having all inputs as a list, tuple or dict in the first positional argument."),se=h(),F=a("p"),qe=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=a("code"),xe=n("model.fit()"),Te=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),ze=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),je=n("fit()"),ye=n(" and "),U=a("code"),Me=n("predict()"),$e=n(`, such as when creating your own layers or models with
the Keras `),K=a("code"),Ce=n("Functional"),ve=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=h(),M=a("ul"),C=a("li"),ce=n("a single Tensor with "),X=a("code"),Pe=n("input_ids"),De=n(" only and nothing else: "),R=a("code"),Be=n("model(input_ids)"),pe=h(),P=a("li"),Ae=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a("code"),Le=n("model([input_ids, attention_mask])"),Re=n(" or "),H=a("code"),Oe=n("model([input_ids, attention_mask, token_type_ids])"),Ie=h(),O=a("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ue=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),B=a("p"),ge=n(`Note that when creating models and layers with
`),A=a("a"),Ee=n("subclassing"),Y=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=r(k,"P",{});var x=i(d);u=s(x,"TensorFlow models and layers in "),c=r(x,"CODE",{});var me=i(c);f=s(me,"transformers"),me.forEach(t),w=s(x," accept two formats as input:"),x.forEach(t),l=m(k),p=r(k,"UL",{});var ie=i(p);z=r(ie,"LI",{});var We=i(z);ae=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),V=m(ie),L=r(ie,"LI",{});var Ue=i(L);oe=s(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(t),ie.forEach(t),se=m(k),F=r(k,"P",{});var j=i(F);qe=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=r(j,"CODE",{});var He=i(G);xe=s(He,"model.fit()"),He.forEach(t),Te=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(j,"CODE",{});var Ke=i(I);ze=s(Ke,"model.fit()"),Ke.forEach(t),de=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(j,"CODE",{});var Qe=i(J);je=s(Qe,"fit()"),Qe.forEach(t),ye=s(j," and "),U=r(j,"CODE",{});var Ne=i(U);Me=s(Ne,"predict()"),Ne.forEach(t),$e=s(j,`, such as when creating your own layers or models with
the Keras `),K=r(j,"CODE",{});var Ge=i(K);Ce=s(Ge,"Functional"),Ge.forEach(t),ve=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),ne=m(k),M=r(k,"UL",{});var N=i(M);C=r(N,"LI",{});var Z=i(C);ce=s(Z,"a single Tensor with "),X=r(Z,"CODE",{});var Fe=i(X);Pe=s(Fe,"input_ids"),Fe.forEach(t),De=s(Z," only and nothing else: "),R=r(Z,"CODE",{});var Ve=i(R);Be=s(Ve,"model(input_ids)"),Ve.forEach(t),Z.forEach(t),pe=m(N),P=r(N,"LI",{});var Q=i(P);Ae=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r(Q,"CODE",{});var Je=i(W);Le=s(Je,"model([input_ids, attention_mask])"),Je.forEach(t),Re=s(Q," or "),H=r(Q,"CODE",{});var Xe=i(H);Oe=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Q.forEach(t),Ie=m(N),O=r(N,"LI",{});var fe=i(O);re=s(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(fe,"CODE",{});var Ye=i(S);ue=s(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(t),fe.forEach(t),N.forEach(t),ee=m(k),B=r(k,"P",{});var le=i(B);ge=s(le,`Note that when creating models and layers with
`),A=r(le,"A",{href:!0,rel:!0});var Ze=i(A);Ee=s(Ze,"subclassing"),Ze.forEach(t),Y=s(le,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),le.forEach(t),this.h()},h(){g(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(A,"rel","nofollow")},m(k,x){_(k,d,x),e(d,u),e(d,c),e(c,f),e(d,w),_(k,l,x),_(k,p,x),e(p,z),e(z,ae),e(p,V),e(p,L),e(L,oe),_(k,se,x),_(k,F,x),e(F,qe),e(F,G),e(G,xe),e(F,Te),e(F,I),e(I,ze),e(F,de),e(F,J),e(J,je),e(F,ye),e(F,U),e(U,Me),e(F,$e),e(F,K),e(K,Ce),e(F,ve),_(k,ne,x),_(k,M,x),e(M,C),e(C,ce),e(C,X),e(X,Pe),e(C,De),e(C,R),e(R,Be),e(M,pe),e(M,P),e(P,Ae),e(P,W),e(W,Le),e(P,Re),e(P,H),e(H,Oe),e(M,Ie),e(M,O),e(O,re),e(O,S),e(S,ue),_(k,ee,x),_(k,B,x),e(B,ge),e(B,A),e(A,Ee),e(B,Y)},d(k){k&&t(d),k&&t(l),k&&t(p),k&&t(se),k&&t(F),k&&t(ne),k&&t(M),k&&t(ee),k&&t(B)}}}function hb(q){let d,u,c,f,w;return{c(){d=a("p"),u=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,u),e(d,c),e(c,f),e(d,w)},d(l){l&&t(d)}}}function mb(q){let d,u,c,f,w;return f=new we({props:{code:`from transformers import DebertaTokenizer, TFDebertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),u=n("Example:"),c=h(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Example:"),p.forEach(t),c=m(l),y(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,u),_(l,c,p),$(f,l,p),w=!0},p:ke,i(l){w||(v(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function fb(q){let d,u,c,f,w,l,p,z,ae,V,L,oe,se,F,qe,G,xe,Te,I,ze,de,J,je,ye,U,Me,$e,K,Ce,ve,ne,M,C,ce,X,Pe,De,R,Be,pe,P,Ae,W,Le,Re,H,Oe,Ie,O,re,S,ue,ee,B,ge,A,Ee,Y;return{c(){d=a("p"),u=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),w=n(" accept two formats as input:"),l=h(),p=a("ul"),z=a("li"),ae=n("having all inputs as keyword arguments (like PyTorch models), or"),V=h(),L=a("li"),oe=n("having all inputs as a list, tuple or dict in the first positional argument."),se=h(),F=a("p"),qe=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=a("code"),xe=n("model.fit()"),Te=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),ze=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),je=n("fit()"),ye=n(" and "),U=a("code"),Me=n("predict()"),$e=n(`, such as when creating your own layers or models with
the Keras `),K=a("code"),Ce=n("Functional"),ve=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=h(),M=a("ul"),C=a("li"),ce=n("a single Tensor with "),X=a("code"),Pe=n("input_ids"),De=n(" only and nothing else: "),R=a("code"),Be=n("model(input_ids)"),pe=h(),P=a("li"),Ae=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a("code"),Le=n("model([input_ids, attention_mask])"),Re=n(" or "),H=a("code"),Oe=n("model([input_ids, attention_mask, token_type_ids])"),Ie=h(),O=a("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ue=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),B=a("p"),ge=n(`Note that when creating models and layers with
`),A=a("a"),Ee=n("subclassing"),Y=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=r(k,"P",{});var x=i(d);u=s(x,"TensorFlow models and layers in "),c=r(x,"CODE",{});var me=i(c);f=s(me,"transformers"),me.forEach(t),w=s(x," accept two formats as input:"),x.forEach(t),l=m(k),p=r(k,"UL",{});var ie=i(p);z=r(ie,"LI",{});var We=i(z);ae=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),V=m(ie),L=r(ie,"LI",{});var Ue=i(L);oe=s(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(t),ie.forEach(t),se=m(k),F=r(k,"P",{});var j=i(F);qe=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=r(j,"CODE",{});var He=i(G);xe=s(He,"model.fit()"),He.forEach(t),Te=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(j,"CODE",{});var Ke=i(I);ze=s(Ke,"model.fit()"),Ke.forEach(t),de=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(j,"CODE",{});var Qe=i(J);je=s(Qe,"fit()"),Qe.forEach(t),ye=s(j," and "),U=r(j,"CODE",{});var Ne=i(U);Me=s(Ne,"predict()"),Ne.forEach(t),$e=s(j,`, such as when creating your own layers or models with
the Keras `),K=r(j,"CODE",{});var Ge=i(K);Ce=s(Ge,"Functional"),Ge.forEach(t),ve=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),ne=m(k),M=r(k,"UL",{});var N=i(M);C=r(N,"LI",{});var Z=i(C);ce=s(Z,"a single Tensor with "),X=r(Z,"CODE",{});var Fe=i(X);Pe=s(Fe,"input_ids"),Fe.forEach(t),De=s(Z," only and nothing else: "),R=r(Z,"CODE",{});var Ve=i(R);Be=s(Ve,"model(input_ids)"),Ve.forEach(t),Z.forEach(t),pe=m(N),P=r(N,"LI",{});var Q=i(P);Ae=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r(Q,"CODE",{});var Je=i(W);Le=s(Je,"model([input_ids, attention_mask])"),Je.forEach(t),Re=s(Q," or "),H=r(Q,"CODE",{});var Xe=i(H);Oe=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Q.forEach(t),Ie=m(N),O=r(N,"LI",{});var fe=i(O);re=s(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(fe,"CODE",{});var Ye=i(S);ue=s(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(t),fe.forEach(t),N.forEach(t),ee=m(k),B=r(k,"P",{});var le=i(B);ge=s(le,`Note that when creating models and layers with
`),A=r(le,"A",{href:!0,rel:!0});var Ze=i(A);Ee=s(Ze,"subclassing"),Ze.forEach(t),Y=s(le,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),le.forEach(t),this.h()},h(){g(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(A,"rel","nofollow")},m(k,x){_(k,d,x),e(d,u),e(d,c),e(c,f),e(d,w),_(k,l,x),_(k,p,x),e(p,z),e(z,ae),e(p,V),e(p,L),e(L,oe),_(k,se,x),_(k,F,x),e(F,qe),e(F,G),e(G,xe),e(F,Te),e(F,I),e(I,ze),e(F,de),e(F,J),e(J,je),e(F,ye),e(F,U),e(U,Me),e(F,$e),e(F,K),e(K,Ce),e(F,ve),_(k,ne,x),_(k,M,x),e(M,C),e(C,ce),e(C,X),e(X,Pe),e(C,De),e(C,R),e(R,Be),e(M,pe),e(M,P),e(P,Ae),e(P,W),e(W,Le),e(P,Re),e(P,H),e(H,Oe),e(M,Ie),e(M,O),e(O,re),e(O,S),e(S,ue),_(k,ee,x),_(k,B,x),e(B,ge),e(B,A),e(A,Ee),e(B,Y)},d(k){k&&t(d),k&&t(l),k&&t(p),k&&t(se),k&&t(F),k&&t(ne),k&&t(M),k&&t(ee),k&&t(B)}}}function ub(q){let d,u,c,f,w;return{c(){d=a("p"),u=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,u),e(d,c),e(c,f),e(d,w)},d(l){l&&t(d)}}}function gb(q){let d,u,c,f,w;return f=new we({props:{code:`from transformers import DebertaTokenizer, TFDebertaForMaskedLM
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
`}}),{c(){d=a("p"),u=n("Example:"),c=h(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Example:"),p.forEach(t),c=m(l),y(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,u),_(l,c,p),$(f,l,p),w=!0},p:ke,i(l){w||(v(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function _b(q){let d,u;return d=new we({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,f){$(d,c,f),u=!0},p:ke,i(c){u||(v(d.$$.fragment,c),u=!0)},o(c){D(d.$$.fragment,c),u=!1},d(c){E(d,c)}}}function bb(q){let d,u,c,f,w,l,p,z,ae,V,L,oe,se,F,qe,G,xe,Te,I,ze,de,J,je,ye,U,Me,$e,K,Ce,ve,ne,M,C,ce,X,Pe,De,R,Be,pe,P,Ae,W,Le,Re,H,Oe,Ie,O,re,S,ue,ee,B,ge,A,Ee,Y;return{c(){d=a("p"),u=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),w=n(" accept two formats as input:"),l=h(),p=a("ul"),z=a("li"),ae=n("having all inputs as keyword arguments (like PyTorch models), or"),V=h(),L=a("li"),oe=n("having all inputs as a list, tuple or dict in the first positional argument."),se=h(),F=a("p"),qe=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=a("code"),xe=n("model.fit()"),Te=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),ze=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),je=n("fit()"),ye=n(" and "),U=a("code"),Me=n("predict()"),$e=n(`, such as when creating your own layers or models with
the Keras `),K=a("code"),Ce=n("Functional"),ve=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=h(),M=a("ul"),C=a("li"),ce=n("a single Tensor with "),X=a("code"),Pe=n("input_ids"),De=n(" only and nothing else: "),R=a("code"),Be=n("model(input_ids)"),pe=h(),P=a("li"),Ae=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a("code"),Le=n("model([input_ids, attention_mask])"),Re=n(" or "),H=a("code"),Oe=n("model([input_ids, attention_mask, token_type_ids])"),Ie=h(),O=a("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ue=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),B=a("p"),ge=n(`Note that when creating models and layers with
`),A=a("a"),Ee=n("subclassing"),Y=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=r(k,"P",{});var x=i(d);u=s(x,"TensorFlow models and layers in "),c=r(x,"CODE",{});var me=i(c);f=s(me,"transformers"),me.forEach(t),w=s(x," accept two formats as input:"),x.forEach(t),l=m(k),p=r(k,"UL",{});var ie=i(p);z=r(ie,"LI",{});var We=i(z);ae=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),V=m(ie),L=r(ie,"LI",{});var Ue=i(L);oe=s(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(t),ie.forEach(t),se=m(k),F=r(k,"P",{});var j=i(F);qe=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=r(j,"CODE",{});var He=i(G);xe=s(He,"model.fit()"),He.forEach(t),Te=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(j,"CODE",{});var Ke=i(I);ze=s(Ke,"model.fit()"),Ke.forEach(t),de=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(j,"CODE",{});var Qe=i(J);je=s(Qe,"fit()"),Qe.forEach(t),ye=s(j," and "),U=r(j,"CODE",{});var Ne=i(U);Me=s(Ne,"predict()"),Ne.forEach(t),$e=s(j,`, such as when creating your own layers or models with
the Keras `),K=r(j,"CODE",{});var Ge=i(K);Ce=s(Ge,"Functional"),Ge.forEach(t),ve=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),ne=m(k),M=r(k,"UL",{});var N=i(M);C=r(N,"LI",{});var Z=i(C);ce=s(Z,"a single Tensor with "),X=r(Z,"CODE",{});var Fe=i(X);Pe=s(Fe,"input_ids"),Fe.forEach(t),De=s(Z," only and nothing else: "),R=r(Z,"CODE",{});var Ve=i(R);Be=s(Ve,"model(input_ids)"),Ve.forEach(t),Z.forEach(t),pe=m(N),P=r(N,"LI",{});var Q=i(P);Ae=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r(Q,"CODE",{});var Je=i(W);Le=s(Je,"model([input_ids, attention_mask])"),Je.forEach(t),Re=s(Q," or "),H=r(Q,"CODE",{});var Xe=i(H);Oe=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Q.forEach(t),Ie=m(N),O=r(N,"LI",{});var fe=i(O);re=s(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(fe,"CODE",{});var Ye=i(S);ue=s(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(t),fe.forEach(t),N.forEach(t),ee=m(k),B=r(k,"P",{});var le=i(B);ge=s(le,`Note that when creating models and layers with
`),A=r(le,"A",{href:!0,rel:!0});var Ze=i(A);Ee=s(Ze,"subclassing"),Ze.forEach(t),Y=s(le,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),le.forEach(t),this.h()},h(){g(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(A,"rel","nofollow")},m(k,x){_(k,d,x),e(d,u),e(d,c),e(c,f),e(d,w),_(k,l,x),_(k,p,x),e(p,z),e(z,ae),e(p,V),e(p,L),e(L,oe),_(k,se,x),_(k,F,x),e(F,qe),e(F,G),e(G,xe),e(F,Te),e(F,I),e(I,ze),e(F,de),e(F,J),e(J,je),e(F,ye),e(F,U),e(U,Me),e(F,$e),e(F,K),e(K,Ce),e(F,ve),_(k,ne,x),_(k,M,x),e(M,C),e(C,ce),e(C,X),e(X,Pe),e(C,De),e(C,R),e(R,Be),e(M,pe),e(M,P),e(P,Ae),e(P,W),e(W,Le),e(P,Re),e(P,H),e(H,Oe),e(M,Ie),e(M,O),e(O,re),e(O,S),e(S,ue),_(k,ee,x),_(k,B,x),e(B,ge),e(B,A),e(A,Ee),e(B,Y)},d(k){k&&t(d),k&&t(l),k&&t(p),k&&t(se),k&&t(F),k&&t(ne),k&&t(M),k&&t(ee),k&&t(B)}}}function kb(q){let d,u,c,f,w;return{c(){d=a("p"),u=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,u),e(d,c),e(c,f),e(d,w)},d(l){l&&t(d)}}}function wb(q){let d,u,c,f,w;return f=new we({props:{code:`from transformers import DebertaTokenizer, TFDebertaForSequenceClassification
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
`}}),{c(){d=a("p"),u=n("Example:"),c=h(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Example:"),p.forEach(t),c=m(l),y(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,u),_(l,c,p),$(f,l,p),w=!0},p:ke,i(l){w||(v(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function Tb(q){let d,u;return d=new we({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,f){$(d,c,f),u=!0},p:ke,i(c){u||(v(d.$$.fragment,c),u=!0)},o(c){D(d.$$.fragment,c),u=!1},d(c){E(d,c)}}}function yb(q){let d,u,c,f,w,l,p,z,ae,V,L,oe,se,F,qe,G,xe,Te,I,ze,de,J,je,ye,U,Me,$e,K,Ce,ve,ne,M,C,ce,X,Pe,De,R,Be,pe,P,Ae,W,Le,Re,H,Oe,Ie,O,re,S,ue,ee,B,ge,A,Ee,Y;return{c(){d=a("p"),u=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),w=n(" accept two formats as input:"),l=h(),p=a("ul"),z=a("li"),ae=n("having all inputs as keyword arguments (like PyTorch models), or"),V=h(),L=a("li"),oe=n("having all inputs as a list, tuple or dict in the first positional argument."),se=h(),F=a("p"),qe=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=a("code"),xe=n("model.fit()"),Te=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),ze=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),je=n("fit()"),ye=n(" and "),U=a("code"),Me=n("predict()"),$e=n(`, such as when creating your own layers or models with
the Keras `),K=a("code"),Ce=n("Functional"),ve=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=h(),M=a("ul"),C=a("li"),ce=n("a single Tensor with "),X=a("code"),Pe=n("input_ids"),De=n(" only and nothing else: "),R=a("code"),Be=n("model(input_ids)"),pe=h(),P=a("li"),Ae=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a("code"),Le=n("model([input_ids, attention_mask])"),Re=n(" or "),H=a("code"),Oe=n("model([input_ids, attention_mask, token_type_ids])"),Ie=h(),O=a("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ue=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),B=a("p"),ge=n(`Note that when creating models and layers with
`),A=a("a"),Ee=n("subclassing"),Y=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=r(k,"P",{});var x=i(d);u=s(x,"TensorFlow models and layers in "),c=r(x,"CODE",{});var me=i(c);f=s(me,"transformers"),me.forEach(t),w=s(x," accept two formats as input:"),x.forEach(t),l=m(k),p=r(k,"UL",{});var ie=i(p);z=r(ie,"LI",{});var We=i(z);ae=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),V=m(ie),L=r(ie,"LI",{});var Ue=i(L);oe=s(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(t),ie.forEach(t),se=m(k),F=r(k,"P",{});var j=i(F);qe=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=r(j,"CODE",{});var He=i(G);xe=s(He,"model.fit()"),He.forEach(t),Te=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(j,"CODE",{});var Ke=i(I);ze=s(Ke,"model.fit()"),Ke.forEach(t),de=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(j,"CODE",{});var Qe=i(J);je=s(Qe,"fit()"),Qe.forEach(t),ye=s(j," and "),U=r(j,"CODE",{});var Ne=i(U);Me=s(Ne,"predict()"),Ne.forEach(t),$e=s(j,`, such as when creating your own layers or models with
the Keras `),K=r(j,"CODE",{});var Ge=i(K);Ce=s(Ge,"Functional"),Ge.forEach(t),ve=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),ne=m(k),M=r(k,"UL",{});var N=i(M);C=r(N,"LI",{});var Z=i(C);ce=s(Z,"a single Tensor with "),X=r(Z,"CODE",{});var Fe=i(X);Pe=s(Fe,"input_ids"),Fe.forEach(t),De=s(Z," only and nothing else: "),R=r(Z,"CODE",{});var Ve=i(R);Be=s(Ve,"model(input_ids)"),Ve.forEach(t),Z.forEach(t),pe=m(N),P=r(N,"LI",{});var Q=i(P);Ae=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r(Q,"CODE",{});var Je=i(W);Le=s(Je,"model([input_ids, attention_mask])"),Je.forEach(t),Re=s(Q," or "),H=r(Q,"CODE",{});var Xe=i(H);Oe=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Q.forEach(t),Ie=m(N),O=r(N,"LI",{});var fe=i(O);re=s(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(fe,"CODE",{});var Ye=i(S);ue=s(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(t),fe.forEach(t),N.forEach(t),ee=m(k),B=r(k,"P",{});var le=i(B);ge=s(le,`Note that when creating models and layers with
`),A=r(le,"A",{href:!0,rel:!0});var Ze=i(A);Ee=s(Ze,"subclassing"),Ze.forEach(t),Y=s(le,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),le.forEach(t),this.h()},h(){g(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(A,"rel","nofollow")},m(k,x){_(k,d,x),e(d,u),e(d,c),e(c,f),e(d,w),_(k,l,x),_(k,p,x),e(p,z),e(z,ae),e(p,V),e(p,L),e(L,oe),_(k,se,x),_(k,F,x),e(F,qe),e(F,G),e(G,xe),e(F,Te),e(F,I),e(I,ze),e(F,de),e(F,J),e(J,je),e(F,ye),e(F,U),e(U,Me),e(F,$e),e(F,K),e(K,Ce),e(F,ve),_(k,ne,x),_(k,M,x),e(M,C),e(C,ce),e(C,X),e(X,Pe),e(C,De),e(C,R),e(R,Be),e(M,pe),e(M,P),e(P,Ae),e(P,W),e(W,Le),e(P,Re),e(P,H),e(H,Oe),e(M,Ie),e(M,O),e(O,re),e(O,S),e(S,ue),_(k,ee,x),_(k,B,x),e(B,ge),e(B,A),e(A,Ee),e(B,Y)},d(k){k&&t(d),k&&t(l),k&&t(p),k&&t(se),k&&t(F),k&&t(ne),k&&t(M),k&&t(ee),k&&t(B)}}}function $b(q){let d,u,c,f,w;return{c(){d=a("p"),u=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,u),e(d,c),e(c,f),e(d,w)},d(l){l&&t(d)}}}function vb(q){let d,u,c,f,w;return f=new we({props:{code:`from transformers import DebertaTokenizer, TFDebertaForTokenClassification
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
`}}),{c(){d=a("p"),u=n("Example:"),c=h(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Example:"),p.forEach(t),c=m(l),y(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,u),_(l,c,p),$(f,l,p),w=!0},p:ke,i(l){w||(v(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function Db(q){let d,u;return d=new we({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,f){$(d,c,f),u=!0},p:ke,i(c){u||(v(d.$$.fragment,c),u=!0)},o(c){D(d.$$.fragment,c),u=!1},d(c){E(d,c)}}}function Eb(q){let d,u,c,f,w,l,p,z,ae,V,L,oe,se,F,qe,G,xe,Te,I,ze,de,J,je,ye,U,Me,$e,K,Ce,ve,ne,M,C,ce,X,Pe,De,R,Be,pe,P,Ae,W,Le,Re,H,Oe,Ie,O,re,S,ue,ee,B,ge,A,Ee,Y;return{c(){d=a("p"),u=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),w=n(" accept two formats as input:"),l=h(),p=a("ul"),z=a("li"),ae=n("having all inputs as keyword arguments (like PyTorch models), or"),V=h(),L=a("li"),oe=n("having all inputs as a list, tuple or dict in the first positional argument."),se=h(),F=a("p"),qe=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=a("code"),xe=n("model.fit()"),Te=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),ze=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),je=n("fit()"),ye=n(" and "),U=a("code"),Me=n("predict()"),$e=n(`, such as when creating your own layers or models with
the Keras `),K=a("code"),Ce=n("Functional"),ve=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=h(),M=a("ul"),C=a("li"),ce=n("a single Tensor with "),X=a("code"),Pe=n("input_ids"),De=n(" only and nothing else: "),R=a("code"),Be=n("model(input_ids)"),pe=h(),P=a("li"),Ae=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a("code"),Le=n("model([input_ids, attention_mask])"),Re=n(" or "),H=a("code"),Oe=n("model([input_ids, attention_mask, token_type_ids])"),Ie=h(),O=a("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ue=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),B=a("p"),ge=n(`Note that when creating models and layers with
`),A=a("a"),Ee=n("subclassing"),Y=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=r(k,"P",{});var x=i(d);u=s(x,"TensorFlow models and layers in "),c=r(x,"CODE",{});var me=i(c);f=s(me,"transformers"),me.forEach(t),w=s(x," accept two formats as input:"),x.forEach(t),l=m(k),p=r(k,"UL",{});var ie=i(p);z=r(ie,"LI",{});var We=i(z);ae=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),V=m(ie),L=r(ie,"LI",{});var Ue=i(L);oe=s(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(t),ie.forEach(t),se=m(k),F=r(k,"P",{});var j=i(F);qe=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=r(j,"CODE",{});var He=i(G);xe=s(He,"model.fit()"),He.forEach(t),Te=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(j,"CODE",{});var Ke=i(I);ze=s(Ke,"model.fit()"),Ke.forEach(t),de=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(j,"CODE",{});var Qe=i(J);je=s(Qe,"fit()"),Qe.forEach(t),ye=s(j," and "),U=r(j,"CODE",{});var Ne=i(U);Me=s(Ne,"predict()"),Ne.forEach(t),$e=s(j,`, such as when creating your own layers or models with
the Keras `),K=r(j,"CODE",{});var Ge=i(K);Ce=s(Ge,"Functional"),Ge.forEach(t),ve=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),ne=m(k),M=r(k,"UL",{});var N=i(M);C=r(N,"LI",{});var Z=i(C);ce=s(Z,"a single Tensor with "),X=r(Z,"CODE",{});var Fe=i(X);Pe=s(Fe,"input_ids"),Fe.forEach(t),De=s(Z," only and nothing else: "),R=r(Z,"CODE",{});var Ve=i(R);Be=s(Ve,"model(input_ids)"),Ve.forEach(t),Z.forEach(t),pe=m(N),P=r(N,"LI",{});var Q=i(P);Ae=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r(Q,"CODE",{});var Je=i(W);Le=s(Je,"model([input_ids, attention_mask])"),Je.forEach(t),Re=s(Q," or "),H=r(Q,"CODE",{});var Xe=i(H);Oe=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Q.forEach(t),Ie=m(N),O=r(N,"LI",{});var fe=i(O);re=s(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(fe,"CODE",{});var Ye=i(S);ue=s(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(t),fe.forEach(t),N.forEach(t),ee=m(k),B=r(k,"P",{});var le=i(B);ge=s(le,`Note that when creating models and layers with
`),A=r(le,"A",{href:!0,rel:!0});var Ze=i(A);Ee=s(Ze,"subclassing"),Ze.forEach(t),Y=s(le,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),le.forEach(t),this.h()},h(){g(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(A,"rel","nofollow")},m(k,x){_(k,d,x),e(d,u),e(d,c),e(c,f),e(d,w),_(k,l,x),_(k,p,x),e(p,z),e(z,ae),e(p,V),e(p,L),e(L,oe),_(k,se,x),_(k,F,x),e(F,qe),e(F,G),e(G,xe),e(F,Te),e(F,I),e(I,ze),e(F,de),e(F,J),e(J,je),e(F,ye),e(F,U),e(U,Me),e(F,$e),e(F,K),e(K,Ce),e(F,ve),_(k,ne,x),_(k,M,x),e(M,C),e(C,ce),e(C,X),e(X,Pe),e(C,De),e(C,R),e(R,Be),e(M,pe),e(M,P),e(P,Ae),e(P,W),e(W,Le),e(P,Re),e(P,H),e(H,Oe),e(M,Ie),e(M,O),e(O,re),e(O,S),e(S,ue),_(k,ee,x),_(k,B,x),e(B,ge),e(B,A),e(A,Ee),e(B,Y)},d(k){k&&t(d),k&&t(l),k&&t(p),k&&t(se),k&&t(F),k&&t(ne),k&&t(M),k&&t(ee),k&&t(B)}}}function Fb(q){let d,u,c,f,w;return{c(){d=a("p"),u=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var z=i(c);f=s(z,"Module"),z.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,u),e(d,c),e(c,f),e(d,w)},d(l){l&&t(d)}}}function qb(q){let d,u,c,f,w;return f=new we({props:{code:`from transformers import DebertaTokenizer, TFDebertaForQuestionAnswering
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
`}}),{c(){d=a("p"),u=n("Example:"),c=h(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Example:"),p.forEach(t),c=m(l),y(f.$$.fragment,l)},m(l,p){_(l,d,p),e(d,u),_(l,c,p),$(f,l,p),w=!0},p:ke,i(l){w||(v(f.$$.fragment,l),w=!0)},o(l){D(f.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(f,l)}}}function xb(q){let d,u;return d=new we({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,f){$(d,c,f),u=!0},p:ke,i(c){u||(v(d.$$.fragment,c),u=!0)},o(c){D(d.$$.fragment,c),u=!1},d(c){E(d,c)}}}function zb(q){let d,u,c,f,w,l,p,z,ae,V,L,oe,se,F,qe,G,xe,Te,I,ze,de,J,je,ye,U,Me,$e,K,Ce,ve,ne,M,C,ce,X,Pe,De,R,Be,pe,P,Ae,W,Le,Re,H,Oe,Ie,O,re,S,ue,ee,B,ge,A,Ee,Y,k,x,me,ie,We,Ue,j,He,Ke,Qe,Ne,Ge,N,Z,Fe,Ve,Q,Je,Xe,fe,Ye,le,Ze,zo,ll,Jt,jo,pr,Sn,yd,hr,$d,dl,he,Nn,vd,mr,Dd,Ed,fr,Fd,qd,Mo,xd,Wn,zd,ur,jd,Md,Cd,Co,Pd,Hn,Bd,Ma,Ad,Ld,Rd,Bt,Un,Od,gr,Id,Sd,Kn,_r,Nd,Wd,br,Hd,Ud,Po,Qn,Kd,Xt,Qd,kr,Gd,Vd,wr,Jd,Xd,Yd,$t,Gn,Zd,Tr,ec,tc,Bo,oc,Yt,nc,yr,sc,ac,$r,rc,ic,lc,Ca,Vn,cl,Zt,Ao,vr,Jn,dc,Dr,cc,pl,Se,Xn,pc,Yn,hc,Er,mc,fc,uc,Fr,gc,_c,Lo,bc,Zn,kc,qr,wc,Tc,yc,Ro,$c,es,vc,Pa,Dc,Ec,Fc,At,ts,qc,xr,xc,zc,os,zr,jc,Mc,jr,Cc,Pc,vt,ns,Bc,Mr,Ac,Lc,Oo,Rc,eo,Oc,Cr,Ic,Sc,Pr,Nc,Wc,hl,to,Io,Br,ss,Hc,Ar,Uc,ml,wt,as,Kc,rs,Qc,is,Gc,Vc,Jc,ls,Xc,ds,Yc,Zc,ep,Dt,cs,tp,oo,op,Ba,np,sp,Lr,ap,rp,ip,So,lp,No,fl,no,Wo,Rr,ps,dp,Or,cp,ul,so,hs,pp,Ir,hp,gl,ao,Ho,Sr,ms,mp,Nr,fp,_l,Tt,fs,up,ro,gp,Wr,_p,bp,us,kp,wp,Tp,gs,yp,_s,$p,vp,Dp,ht,bs,Ep,io,Fp,Aa,qp,xp,Hr,zp,jp,Mp,Uo,Cp,Ko,Pp,Qo,bl,lo,Go,Ur,ks,Bp,Kr,Ap,kl,it,ws,Lp,Qr,Rp,Op,Ts,Ip,ys,Sp,Np,Wp,$s,Hp,vs,Up,Kp,Qp,et,Ds,Gp,co,Vp,La,Jp,Xp,Gr,Yp,Zp,eh,Vo,th,Jo,oh,Xo,nh,Yo,sh,Zo,wl,po,en,Vr,Es,ah,Jr,rh,Tl,lt,Fs,ih,Xr,lh,dh,qs,ch,xs,ph,hh,mh,zs,fh,js,uh,gh,_h,mt,Ms,bh,ho,kh,Ra,wh,Th,Yr,yh,$h,vh,tn,Dh,on,Eh,nn,yl,mo,sn,Zr,Cs,Fh,ei,qh,$l,dt,Ps,xh,fo,zh,ti,jh,Mh,oi,Ch,Ph,Bh,Bs,Ah,As,Lh,Rh,Oh,Ls,Ih,Rs,Sh,Nh,Wh,ft,Os,Hh,uo,Uh,Oa,Kh,Qh,ni,Gh,Vh,Jh,an,Xh,rn,Yh,ln,vl,go,dn,si,Is,Zh,ai,em,Dl,ct,Ss,tm,Ns,om,Ws,nm,sm,am,Hs,rm,Us,im,lm,dm,cn,cm,Et,Ks,pm,_o,hm,Ia,mm,fm,ri,um,gm,_m,pn,bm,hn,El,bo,mn,ii,Qs,km,li,wm,Fl,jt,Gs,Tm,di,ym,$m,Ft,Vs,vm,ci,Dm,Em,Js,Fm,pi,qm,xm,zm,yt,jm,hi,Mm,Cm,mi,Pm,Bm,fi,Am,Lm,ui,Rm,Om,ql,ko,fn,gi,Xs,Im,_i,Sm,xl,pt,Ys,Nm,wo,Wm,bi,Hm,Um,Zs,Km,Qm,Gm,ea,Vm,ta,Jm,Xm,Ym,un,Zm,ut,oa,ef,To,tf,Sa,of,nf,ki,sf,af,rf,gn,lf,_n,df,bn,zl,yo,kn,wi,na,cf,Ti,pf,jl,ot,sa,hf,yi,mf,ff,aa,uf,ra,gf,_f,bf,ia,kf,la,wf,Tf,yf,wn,$f,gt,da,vf,$o,Df,Na,Ef,Ff,$i,qf,xf,zf,Tn,jf,yn,Mf,$n,Ml,vo,vn,vi,ca,Cf,Di,Pf,Cl,nt,pa,Bf,Ei,Af,Lf,ha,Rf,ma,Of,If,Sf,fa,Nf,ua,Wf,Hf,Uf,Dn,Kf,_t,ga,Qf,Do,Gf,Wa,Vf,Jf,Fi,Xf,Yf,Zf,En,eu,Fn,tu,qn,Pl,Eo,xn,qi,_a,ou,xi,nu,Bl,st,ba,su,Fo,au,zi,ru,iu,ji,lu,du,cu,ka,pu,wa,hu,mu,fu,Ta,uu,ya,gu,_u,bu,zn,ku,bt,$a,wu,qo,Tu,Ha,yu,$u,Mi,vu,Du,Eu,jn,Fu,Mn,qu,Cn,Al;return l=new rt({}),F=new rt({}),ee=new rt({}),k=new te({props:{name:"class transformers.DebertaConfig",anchor:"transformers.DebertaConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-07"},{name:"relative_attention",val:" = False"},{name:"max_relative_positions",val:" = -1"},{name:"pad_token_id",val:" = 0"},{name:"position_biased_input",val:" = True"},{name:"pos_att_type",val:" = None"},{name:"pooler_dropout",val:" = 0"},{name:"pooler_hidden_act",val:" = 'gelu'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/configuration_deberta.py#L40"}}),zo=new be({props:{anchor:"transformers.DebertaConfig.example",$$slots:{default:[N_]},$$scope:{ctx:q}}}),Sn=new rt({}),Nn=new te({props:{name:"class transformers.DebertaTokenizer",anchor:"transformers.DebertaTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"add_prefix_space",val:" = False"},{name:"add_bos_token",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
any other word.`,name:"add_bos_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta.py#L112"}}),Mo=new be({props:{anchor:"transformers.DebertaTokenizer.example",$$slots:{default:[W_]},$$scope:{ctx:q}}}),Co=new at({props:{$$slots:{default:[H_]},$$scope:{ctx:q}}}),Un=new te({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta.py#L289",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Qn=new te({props:{name:"get_special_tokens_mask",anchor:"transformers.DebertaTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta.py#L314",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Gn=new te({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta.py#L341",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Bo=new be({props:{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[U_]},$$scope:{ctx:q}}}),Vn=new te({props:{name:"save_vocabulary",anchor:"transformers.DebertaTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta.py#L400"}}),Jn=new rt({}),Xn=new te({props:{name:"class transformers.DebertaTokenizerFast",anchor:"transformers.DebertaTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
other word. (Deberta tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta_fast.py#L74"}}),Lo=new be({props:{anchor:"transformers.DebertaTokenizerFast.example",$$slots:{default:[K_]},$$scope:{ctx:q}}}),Ro=new at({props:{$$slots:{default:[Q_]},$$scope:{ctx:q}}}),ts=new te({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta_fast.py#L210",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ns=new te({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/tokenization_deberta_fast.py#L235",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Oo=new be({props:{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[G_]},$$scope:{ctx:q}}}),ss=new rt({}),as=new te({props:{name:"class transformers.DebertaModel",anchor:"transformers.DebertaModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L927"}}),cs=new te({props:{name:"forward",anchor:"transformers.DebertaModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),So=new at({props:{$$slots:{default:[V_]},$$scope:{ctx:q}}}),No=new be({props:{anchor:"transformers.DebertaModel.forward.example",$$slots:{default:[J_]},$$scope:{ctx:q}}}),ps=new rt({}),hs=new te({props:{name:"class transformers.DebertaPreTrainedModel",anchor:"transformers.DebertaPreTrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L832"}}),ms=new rt({}),fs=new te({props:{name:"class transformers.DebertaForMaskedLM",anchor:"transformers.DebertaForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1039"}}),bs=new te({props:{name:"forward",anchor:"transformers.DebertaForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Uo=new at({props:{$$slots:{default:[X_]},$$scope:{ctx:q}}}),Ko=new be({props:{anchor:"transformers.DebertaForMaskedLM.forward.example",$$slots:{default:[Y_]},$$scope:{ctx:q}}}),Qo=new be({props:{anchor:"transformers.DebertaForMaskedLM.forward.example-2",$$slots:{default:[Z_]},$$scope:{ctx:q}}}),ks=new rt({}),ws=new te({props:{name:"class transformers.DebertaForSequenceClassification",anchor:"transformers.DebertaForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1177"}}),Ds=new te({props:{name:"forward",anchor:"transformers.DebertaForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Vo=new at({props:{$$slots:{default:[eb]},$$scope:{ctx:q}}}),Jo=new be({props:{anchor:"transformers.DebertaForSequenceClassification.forward.example",$$slots:{default:[tb]},$$scope:{ctx:q}}}),Xo=new be({props:{anchor:"transformers.DebertaForSequenceClassification.forward.example-2",$$slots:{default:[ob]},$$scope:{ctx:q}}}),Yo=new be({props:{anchor:"transformers.DebertaForSequenceClassification.forward.example-3",$$slots:{default:[nb]},$$scope:{ctx:q}}}),Zo=new be({props:{anchor:"transformers.DebertaForSequenceClassification.forward.example-4",$$slots:{default:[sb]},$$scope:{ctx:q}}}),Es=new rt({}),Fs=new te({props:{name:"class transformers.DebertaForTokenClassification",anchor:"transformers.DebertaForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1298"}}),Ms=new te({props:{name:"forward",anchor:"transformers.DebertaForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),tn=new at({props:{$$slots:{default:[ab]},$$scope:{ctx:q}}}),on=new be({props:{anchor:"transformers.DebertaForTokenClassification.forward.example",$$slots:{default:[rb]},$$scope:{ctx:q}}}),nn=new be({props:{anchor:"transformers.DebertaForTokenClassification.forward.example-2",$$slots:{default:[ib]},$$scope:{ctx:q}}}),Cs=new rt({}),Ps=new te({props:{name:"class transformers.DebertaForQuestionAnswering",anchor:"transformers.DebertaForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_deberta.py#L1376"}}),Os=new te({props:{name:"forward",anchor:"transformers.DebertaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),an=new at({props:{$$slots:{default:[lb]},$$scope:{ctx:q}}}),rn=new be({props:{anchor:"transformers.DebertaForQuestionAnswering.forward.example",$$slots:{default:[db]},$$scope:{ctx:q}}}),ln=new be({props:{anchor:"transformers.DebertaForQuestionAnswering.forward.example-2",$$slots:{default:[cb]},$$scope:{ctx:q}}}),Is=new rt({}),Ss=new te({props:{name:"class transformers.TFDebertaModel",anchor:"transformers.TFDebertaModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1095"}}),cn=new at({props:{$$slots:{default:[pb]},$$scope:{ctx:q}}}),Ks=new te({props:{name:"call",anchor:"transformers.TFDebertaModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),pn=new at({props:{$$slots:{default:[hb]},$$scope:{ctx:q}}}),hn=new be({props:{anchor:"transformers.TFDebertaModel.call.example",$$slots:{default:[mb]},$$scope:{ctx:q}}}),Qs=new rt({}),Gs=new te({props:{name:"class transformers.TFDebertaPreTrainedModel",anchor:"transformers.TFDebertaPreTrainedModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L995"}}),Vs=new te({props:{name:"call",anchor:"transformers.TFDebertaPreTrainedModel.call",parameters:[{name:"inputs",val:""},{name:"training",val:" = None"},{name:"mask",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/keras/engine/training.py#L559",returnDescription:`
<p>A tensor if there is a single output, or
a list of tensors if there are more than one outputs.</p>
`}}),Xs=new rt({}),Ys=new te({props:{name:"class transformers.TFDebertaForMaskedLM",anchor:"transformers.TFDebertaForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1143"}}),un=new at({props:{$$slots:{default:[fb]},$$scope:{ctx:q}}}),oa=new te({props:{name:"call",anchor:"transformers.TFDebertaForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),gn=new at({props:{$$slots:{default:[ub]},$$scope:{ctx:q}}}),_n=new be({props:{anchor:"transformers.TFDebertaForMaskedLM.call.example",$$slots:{default:[gb]},$$scope:{ctx:q}}}),bn=new be({props:{anchor:"transformers.TFDebertaForMaskedLM.call.example-2",$$slots:{default:[_b]},$$scope:{ctx:q}}}),na=new rt({}),sa=new te({props:{name:"class transformers.TFDebertaForSequenceClassification",anchor:"transformers.TFDebertaForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1226"}}),wn=new at({props:{$$slots:{default:[bb]},$$scope:{ctx:q}}}),da=new te({props:{name:"call",anchor:"transformers.TFDebertaForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Tn=new at({props:{$$slots:{default:[kb]},$$scope:{ctx:q}}}),yn=new be({props:{anchor:"transformers.TFDebertaForSequenceClassification.call.example",$$slots:{default:[wb]},$$scope:{ctx:q}}}),$n=new be({props:{anchor:"transformers.TFDebertaForSequenceClassification.call.example-2",$$slots:{default:[Tb]},$$scope:{ctx:q}}}),ca=new rt({}),pa=new te({props:{name:"class transformers.TFDebertaForTokenClassification",anchor:"transformers.TFDebertaForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1314"}}),Dn=new at({props:{$$slots:{default:[yb]},$$scope:{ctx:q}}}),ga=new te({props:{name:"call",anchor:"transformers.TFDebertaForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),En=new at({props:{$$slots:{default:[$b]},$$scope:{ctx:q}}}),Fn=new be({props:{anchor:"transformers.TFDebertaForTokenClassification.call.example",$$slots:{default:[vb]},$$scope:{ctx:q}}}),qn=new be({props:{anchor:"transformers.TFDebertaForTokenClassification.call.example-2",$$slots:{default:[Db]},$$scope:{ctx:q}}}),_a=new rt({}),ba=new te({props:{name:"class transformers.TFDebertaForQuestionAnswering",anchor:"transformers.TFDebertaForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta/modeling_tf_deberta.py#L1392"}}),zn=new at({props:{$$slots:{default:[Eb]},$$scope:{ctx:q}}}),$a=new te({props:{name:"call",anchor:"transformers.TFDebertaForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),jn=new at({props:{$$slots:{default:[Fb]},$$scope:{ctx:q}}}),Mn=new be({props:{anchor:"transformers.TFDebertaForQuestionAnswering.call.example",$$slots:{default:[qb]},$$scope:{ctx:q}}}),Cn=new be({props:{anchor:"transformers.TFDebertaForQuestionAnswering.call.example-2",$$slots:{default:[xb]},$$scope:{ctx:q}}}),{c(){d=a("meta"),u=h(),c=a("h1"),f=a("a"),w=a("span"),T(l.$$.fragment),p=h(),z=a("span"),ae=n("DeBERTa"),V=h(),L=a("h2"),oe=a("a"),se=a("span"),T(F.$$.fragment),qe=h(),G=a("span"),xe=n("Overview"),Te=h(),I=a("p"),ze=n("The DeBERTa model was proposed in "),de=a("a"),J=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),je=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),ye=h(),U=a("p"),Me=n(`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),$e=h(),K=a("p"),Ce=n("The abstract from the paper is the following:"),ve=h(),ne=a("p"),M=a("em"),C=n(`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),ce=a("a"),X=n("https://github.com/microsoft/DeBERTa"),Pe=n("."),De=h(),R=a("p"),Be=n("This model was contributed by "),pe=a("a"),P=n("DeBERTa"),Ae=n(`. This model TF 2.0 implementation was
contributed by `),W=a("a"),Le=n("kamalkraj"),Re=n(" . The original code can be found "),H=a("a"),Oe=n("here"),Ie=n("."),O=h(),re=a("h2"),S=a("a"),ue=a("span"),T(ee.$$.fragment),B=h(),ge=a("span"),A=n("DebertaConfig"),Ee=h(),Y=a("div"),T(k.$$.fragment),x=h(),me=a("p"),ie=n("This is the configuration class to store the configuration of a "),We=a("a"),Ue=n("DebertaModel"),j=n(" or a "),He=a("a"),Ke=n("TFDebertaModel"),Qe=n(`. It is
used to instantiate a DeBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Ne=a("a"),Ge=n("microsoft/deberta-base"),N=n(" architecture."),Z=h(),Fe=a("p"),Ve=n("Configuration objects inherit from "),Q=a("a"),Je=n("PretrainedConfig"),Xe=n(` and can be used to control the model outputs. Read the
documentation from `),fe=a("a"),Ye=n("PretrainedConfig"),le=n(" for more information."),Ze=h(),T(zo.$$.fragment),ll=h(),Jt=a("h2"),jo=a("a"),pr=a("span"),T(Sn.$$.fragment),yd=h(),hr=a("span"),$d=n("DebertaTokenizer"),dl=h(),he=a("div"),T(Nn.$$.fragment),vd=h(),mr=a("p"),Dd=n("Construct a DeBERTa tokenizer. Based on byte-level Byte-Pair-Encoding."),Ed=h(),fr=a("p"),Fd=n("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),qd=h(),T(Mo.$$.fragment),xd=h(),Wn=a("p"),zd=n("You can get around that behavior by passing "),ur=a("code"),jd=n("add_prefix_space=True"),Md=n(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Cd=h(),T(Co.$$.fragment),Pd=h(),Hn=a("p"),Bd=n("This tokenizer inherits from "),Ma=a("a"),Ad=n("PreTrainedTokenizer"),Ld=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Rd=h(),Bt=a("div"),T(Un.$$.fragment),Od=h(),gr=a("p"),Id=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Sd=h(),Kn=a("ul"),_r=a("li"),Nd=n("single sequence: [CLS] X [SEP]"),Wd=h(),br=a("li"),Hd=n("pair of sequences: [CLS] A [SEP] B [SEP]"),Ud=h(),Po=a("div"),T(Qn.$$.fragment),Kd=h(),Xt=a("p"),Qd=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),kr=a("code"),Gd=n("prepare_for_model"),Vd=n(" or "),wr=a("code"),Jd=n("encode_plus"),Xd=n(" methods."),Yd=h(),$t=a("div"),T(Gn.$$.fragment),Zd=h(),Tr=a("p"),ec=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),tc=h(),T(Bo.$$.fragment),oc=h(),Yt=a("p"),nc=n("If "),yr=a("code"),sc=n("token_ids_1"),ac=n(" is "),$r=a("code"),rc=n("None"),ic=n(", this method only returns the first portion of the mask (0s)."),lc=h(),Ca=a("div"),T(Vn.$$.fragment),cl=h(),Zt=a("h2"),Ao=a("a"),vr=a("span"),T(Jn.$$.fragment),dc=h(),Dr=a("span"),cc=n("DebertaTokenizerFast"),pl=h(),Se=a("div"),T(Xn.$$.fragment),pc=h(),Yn=a("p"),hc=n("Construct a \u201Cfast\u201D DeBERTa tokenizer (backed by HuggingFace\u2019s "),Er=a("em"),mc=n("tokenizers"),fc=n(` library). Based on byte-level
Byte-Pair-Encoding.`),uc=h(),Fr=a("p"),gc=n("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),_c=h(),T(Lo.$$.fragment),bc=h(),Zn=a("p"),kc=n("You can get around that behavior by passing "),qr=a("code"),wc=n("add_prefix_space=True"),Tc=n(` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),yc=h(),T(Ro.$$.fragment),$c=h(),es=a("p"),vc=n("This tokenizer inherits from "),Pa=a("a"),Dc=n("PreTrainedTokenizerFast"),Ec=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Fc=h(),At=a("div"),T(ts.$$.fragment),qc=h(),xr=a("p"),xc=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),zc=h(),os=a("ul"),zr=a("li"),jc=n("single sequence: [CLS] X [SEP]"),Mc=h(),jr=a("li"),Cc=n("pair of sequences: [CLS] A [SEP] B [SEP]"),Pc=h(),vt=a("div"),T(ns.$$.fragment),Bc=h(),Mr=a("p"),Ac=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),Lc=h(),T(Oo.$$.fragment),Rc=h(),eo=a("p"),Oc=n("If "),Cr=a("code"),Ic=n("token_ids_1"),Sc=n(" is "),Pr=a("code"),Nc=n("None"),Wc=n(", this method only returns the first portion of the mask (0s)."),hl=h(),to=a("h2"),Io=a("a"),Br=a("span"),T(ss.$$.fragment),Hc=h(),Ar=a("span"),Uc=n("DebertaModel"),ml=h(),wt=a("div"),T(as.$$.fragment),Kc=h(),rs=a("p"),Qc=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),is=a("a"),Gc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Vc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Jc=h(),ls=a("p"),Xc=n("This model is also a PyTorch "),ds=a("a"),Yc=n("torch.nn.Module"),Zc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ep=h(),Dt=a("div"),T(cs.$$.fragment),tp=h(),oo=a("p"),op=n("The "),Ba=a("a"),np=n("DebertaModel"),sp=n(" forward method, overrides the "),Lr=a("code"),ap=n("__call__"),rp=n(" special method."),ip=h(),T(So.$$.fragment),lp=h(),T(No.$$.fragment),fl=h(),no=a("h2"),Wo=a("a"),Rr=a("span"),T(ps.$$.fragment),dp=h(),Or=a("span"),cp=n("DebertaPreTrainedModel"),ul=h(),so=a("div"),T(hs.$$.fragment),pp=h(),Ir=a("p"),hp=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),gl=h(),ao=a("h2"),Ho=a("a"),Sr=a("span"),T(ms.$$.fragment),mp=h(),Nr=a("span"),fp=n("DebertaForMaskedLM"),_l=h(),Tt=a("div"),T(fs.$$.fragment),up=h(),ro=a("p"),gp=n("DeBERTa Model with a "),Wr=a("code"),_p=n("language modeling"),bp=n(` head on top.
The DeBERTa model was proposed in `),us=a("a"),kp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),wp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Tp=h(),gs=a("p"),yp=n("This model is also a PyTorch "),_s=a("a"),$p=n("torch.nn.Module"),vp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dp=h(),ht=a("div"),T(bs.$$.fragment),Ep=h(),io=a("p"),Fp=n("The "),Aa=a("a"),qp=n("DebertaForMaskedLM"),xp=n(" forward method, overrides the "),Hr=a("code"),zp=n("__call__"),jp=n(" special method."),Mp=h(),T(Uo.$$.fragment),Cp=h(),T(Ko.$$.fragment),Pp=h(),T(Qo.$$.fragment),bl=h(),lo=a("h2"),Go=a("a"),Ur=a("span"),T(ks.$$.fragment),Bp=h(),Kr=a("span"),Ap=n("DebertaForSequenceClassification"),kl=h(),it=a("div"),T(ws.$$.fragment),Lp=h(),Qr=a("p"),Rp=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Op=h(),Ts=a("p"),Ip=n("The DeBERTa model was proposed in "),ys=a("a"),Sp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Np=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Wp=h(),$s=a("p"),Hp=n("This model is also a PyTorch "),vs=a("a"),Up=n("torch.nn.Module"),Kp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qp=h(),et=a("div"),T(Ds.$$.fragment),Gp=h(),co=a("p"),Vp=n("The "),La=a("a"),Jp=n("DebertaForSequenceClassification"),Xp=n(" forward method, overrides the "),Gr=a("code"),Yp=n("__call__"),Zp=n(" special method."),eh=h(),T(Vo.$$.fragment),th=h(),T(Jo.$$.fragment),oh=h(),T(Xo.$$.fragment),nh=h(),T(Yo.$$.fragment),sh=h(),T(Zo.$$.fragment),wl=h(),po=a("h2"),en=a("a"),Vr=a("span"),T(Es.$$.fragment),ah=h(),Jr=a("span"),rh=n("DebertaForTokenClassification"),Tl=h(),lt=a("div"),T(Fs.$$.fragment),ih=h(),Xr=a("p"),lh=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),dh=h(),qs=a("p"),ch=n("The DeBERTa model was proposed in "),xs=a("a"),ph=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),hh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),mh=h(),zs=a("p"),fh=n("This model is also a PyTorch "),js=a("a"),uh=n("torch.nn.Module"),gh=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_h=h(),mt=a("div"),T(Ms.$$.fragment),bh=h(),ho=a("p"),kh=n("The "),Ra=a("a"),wh=n("DebertaForTokenClassification"),Th=n(" forward method, overrides the "),Yr=a("code"),yh=n("__call__"),$h=n(" special method."),vh=h(),T(tn.$$.fragment),Dh=h(),T(on.$$.fragment),Eh=h(),T(nn.$$.fragment),yl=h(),mo=a("h2"),sn=a("a"),Zr=a("span"),T(Cs.$$.fragment),Fh=h(),ei=a("span"),qh=n("DebertaForQuestionAnswering"),$l=h(),dt=a("div"),T(Ps.$$.fragment),xh=h(),fo=a("p"),zh=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ti=a("code"),jh=n("span start logits"),Mh=n(" and "),oi=a("code"),Ch=n("span end logits"),Ph=n(")."),Bh=h(),Bs=a("p"),Ah=n("The DeBERTa model was proposed in "),As=a("a"),Lh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Rh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Oh=h(),Ls=a("p"),Ih=n("This model is also a PyTorch "),Rs=a("a"),Sh=n("torch.nn.Module"),Nh=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wh=h(),ft=a("div"),T(Os.$$.fragment),Hh=h(),uo=a("p"),Uh=n("The "),Oa=a("a"),Kh=n("DebertaForQuestionAnswering"),Qh=n(" forward method, overrides the "),ni=a("code"),Gh=n("__call__"),Vh=n(" special method."),Jh=h(),T(an.$$.fragment),Xh=h(),T(rn.$$.fragment),Yh=h(),T(ln.$$.fragment),vl=h(),go=a("h2"),dn=a("a"),si=a("span"),T(Is.$$.fragment),Zh=h(),ai=a("span"),em=n("TFDebertaModel"),Dl=h(),ct=a("div"),T(Ss.$$.fragment),tm=h(),Ns=a("p"),om=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Ws=a("a"),nm=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),sm=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),am=h(),Hs=a("p"),rm=n("This model is also a "),Us=a("a"),im=n("tf.keras.Model"),lm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dm=h(),T(cn.$$.fragment),cm=h(),Et=a("div"),T(Ks.$$.fragment),pm=h(),_o=a("p"),hm=n("The "),Ia=a("a"),mm=n("TFDebertaModel"),fm=n(" forward method, overrides the "),ri=a("code"),um=n("__call__"),gm=n(" special method."),_m=h(),T(pn.$$.fragment),bm=h(),T(hn.$$.fragment),El=h(),bo=a("h2"),mn=a("a"),ii=a("span"),T(Qs.$$.fragment),km=h(),li=a("span"),wm=n("TFDebertaPreTrainedModel"),Fl=h(),jt=a("div"),T(Gs.$$.fragment),Tm=h(),di=a("p"),ym=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),$m=h(),Ft=a("div"),T(Vs.$$.fragment),vm=h(),ci=a("p"),Dm=n("Calls the model on new inputs and returns the outputs as tensors."),Em=h(),Js=a("p"),Fm=n("In this case "),pi=a("code"),qm=n("call()"),xm=n(` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),zm=h(),yt=a("p"),jm=n(`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),hi=a("code"),Mm=n("tf.keras.Model"),Cm=n(`.
To call a model on an input, always use the `),mi=a("code"),Pm=n("__call__()"),Bm=n(` method,
i.e. `),fi=a("code"),Am=n("model(inputs)"),Lm=n(", which relies on the underlying "),ui=a("code"),Rm=n("call()"),Om=n(" method."),ql=h(),ko=a("h2"),fn=a("a"),gi=a("span"),T(Xs.$$.fragment),Im=h(),_i=a("span"),Sm=n("TFDebertaForMaskedLM"),xl=h(),pt=a("div"),T(Ys.$$.fragment),Nm=h(),wo=a("p"),Wm=n("DeBERTa Model with a "),bi=a("code"),Hm=n("language modeling"),Um=n(` head on top.
The DeBERTa model was proposed in `),Zs=a("a"),Km=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Qm=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Gm=h(),ea=a("p"),Vm=n("This model is also a "),ta=a("a"),Jm=n("tf.keras.Model"),Xm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ym=h(),T(un.$$.fragment),Zm=h(),ut=a("div"),T(oa.$$.fragment),ef=h(),To=a("p"),tf=n("The "),Sa=a("a"),of=n("TFDebertaForMaskedLM"),nf=n(" forward method, overrides the "),ki=a("code"),sf=n("__call__"),af=n(" special method."),rf=h(),T(gn.$$.fragment),lf=h(),T(_n.$$.fragment),df=h(),T(bn.$$.fragment),zl=h(),yo=a("h2"),kn=a("a"),wi=a("span"),T(na.$$.fragment),cf=h(),Ti=a("span"),pf=n("TFDebertaForSequenceClassification"),jl=h(),ot=a("div"),T(sa.$$.fragment),hf=h(),yi=a("p"),mf=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),ff=h(),aa=a("p"),uf=n("The DeBERTa model was proposed in "),ra=a("a"),gf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),_f=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),bf=h(),ia=a("p"),kf=n("This model is also a "),la=a("a"),wf=n("tf.keras.Model"),Tf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yf=h(),T(wn.$$.fragment),$f=h(),gt=a("div"),T(da.$$.fragment),vf=h(),$o=a("p"),Df=n("The "),Na=a("a"),Ef=n("TFDebertaForSequenceClassification"),Ff=n(" forward method, overrides the "),$i=a("code"),qf=n("__call__"),xf=n(" special method."),zf=h(),T(Tn.$$.fragment),jf=h(),T(yn.$$.fragment),Mf=h(),T($n.$$.fragment),Ml=h(),vo=a("h2"),vn=a("a"),vi=a("span"),T(ca.$$.fragment),Cf=h(),Di=a("span"),Pf=n("TFDebertaForTokenClassification"),Cl=h(),nt=a("div"),T(pa.$$.fragment),Bf=h(),Ei=a("p"),Af=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Lf=h(),ha=a("p"),Rf=n("The DeBERTa model was proposed in "),ma=a("a"),Of=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),If=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Sf=h(),fa=a("p"),Nf=n("This model is also a "),ua=a("a"),Wf=n("tf.keras.Model"),Hf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Uf=h(),T(Dn.$$.fragment),Kf=h(),_t=a("div"),T(ga.$$.fragment),Qf=h(),Do=a("p"),Gf=n("The "),Wa=a("a"),Vf=n("TFDebertaForTokenClassification"),Jf=n(" forward method, overrides the "),Fi=a("code"),Xf=n("__call__"),Yf=n(" special method."),Zf=h(),T(En.$$.fragment),eu=h(),T(Fn.$$.fragment),tu=h(),T(qn.$$.fragment),Pl=h(),Eo=a("h2"),xn=a("a"),qi=a("span"),T(_a.$$.fragment),ou=h(),xi=a("span"),nu=n("TFDebertaForQuestionAnswering"),Bl=h(),st=a("div"),T(ba.$$.fragment),su=h(),Fo=a("p"),au=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),zi=a("code"),ru=n("span start logits"),iu=n(" and "),ji=a("code"),lu=n("span end logits"),du=n(")."),cu=h(),ka=a("p"),pu=n("The DeBERTa model was proposed in "),wa=a("a"),hu=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),mu=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),fu=h(),Ta=a("p"),uu=n("This model is also a "),ya=a("a"),gu=n("tf.keras.Model"),_u=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bu=h(),T(zn.$$.fragment),ku=h(),bt=a("div"),T($a.$$.fragment),wu=h(),qo=a("p"),Tu=n("The "),Ha=a("a"),yu=n("TFDebertaForQuestionAnswering"),$u=n(" forward method, overrides the "),Mi=a("code"),vu=n("__call__"),Du=n(" special method."),Eu=h(),T(jn.$$.fragment),Fu=h(),T(Mn.$$.fragment),qu=h(),T(Cn.$$.fragment),this.h()},l(o){const b=I_('[data-svelte="svelte-1phssyn"]',document.head);d=r(b,"META",{name:!0,content:!0}),b.forEach(t),u=m(o),c=r(o,"H1",{class:!0});var va=i(c);f=r(va,"A",{id:!0,class:!0,href:!0});var Ci=i(f);w=r(Ci,"SPAN",{});var Pi=i(w);y(l.$$.fragment,Pi),Pi.forEach(t),Ci.forEach(t),p=m(va),z=r(va,"SPAN",{});var Bi=i(z);ae=s(Bi,"DeBERTa"),Bi.forEach(t),va.forEach(t),V=m(o),L=r(o,"H2",{class:!0});var Da=i(L);oe=r(Da,"A",{id:!0,class:!0,href:!0});var Ai=i(oe);se=r(Ai,"SPAN",{});var Li=i(se);y(F.$$.fragment,Li),Li.forEach(t),Ai.forEach(t),qe=m(Da),G=r(Da,"SPAN",{});var Ri=i(G);xe=s(Ri,"Overview"),Ri.forEach(t),Da.forEach(t),Te=m(o),I=r(o,"P",{});var Ea=i(I);ze=s(Ea,"The DeBERTa model was proposed in "),de=r(Ea,"A",{href:!0,rel:!0});var Oi=i(de);J=s(Oi,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),Oi.forEach(t),je=s(Ea,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),Ea.forEach(t),ye=m(o),U=r(o,"P",{});var Ii=i(U);Me=s(Ii,`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),Ii.forEach(t),$e=m(o),K=r(o,"P",{});var Si=i(K);Ce=s(Si,"The abstract from the paper is the following:"),Si.forEach(t),ve=m(o),ne=r(o,"P",{});var Ni=i(ne);M=r(Ni,"EM",{});var Fa=i(M);C=s(Fa,`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),ce=r(Fa,"A",{href:!0,rel:!0});var Wi=i(ce);X=s(Wi,"https://github.com/microsoft/DeBERTa"),Wi.forEach(t),Pe=s(Fa,"."),Fa.forEach(t),Ni.forEach(t),De=m(o),R=r(o,"P",{});var Mt=i(R);Be=s(Mt,"This model was contributed by "),pe=r(Mt,"A",{href:!0,rel:!0});var Hi=i(pe);P=s(Hi,"DeBERTa"),Hi.forEach(t),Ae=s(Mt,`. This model TF 2.0 implementation was
contributed by `),W=r(Mt,"A",{href:!0,rel:!0});var Ui=i(W);Le=s(Ui,"kamalkraj"),Ui.forEach(t),Re=s(Mt," . The original code can be found "),H=r(Mt,"A",{href:!0,rel:!0});var Ki=i(H);Oe=s(Ki,"here"),Ki.forEach(t),Ie=s(Mt,"."),Mt.forEach(t),O=m(o),re=r(o,"H2",{class:!0});var qa=i(re);S=r(qa,"A",{id:!0,class:!0,href:!0});var Qi=i(S);ue=r(Qi,"SPAN",{});var Gi=i(ue);y(ee.$$.fragment,Gi),Gi.forEach(t),Qi.forEach(t),B=m(qa),ge=r(qa,"SPAN",{});var Vi=i(ge);A=s(Vi,"DebertaConfig"),Vi.forEach(t),qa.forEach(t),Ee=m(o),Y=r(o,"DIV",{class:!0});var Ct=i(Y);y(k.$$.fragment,Ct),x=m(Ct),me=r(Ct,"P",{});var Pt=i(me);ie=s(Pt,"This is the configuration class to store the configuration of a "),We=r(Pt,"A",{href:!0});var Ji=i(We);Ue=s(Ji,"DebertaModel"),Ji.forEach(t),j=s(Pt," or a "),He=r(Pt,"A",{href:!0});var Xi=i(He);Ke=s(Xi,"TFDebertaModel"),Xi.forEach(t),Qe=s(Pt,`. It is
used to instantiate a DeBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Ne=r(Pt,"A",{href:!0,rel:!0});var Yi=i(Ne);Ge=s(Yi,"microsoft/deberta-base"),Yi.forEach(t),N=s(Pt," architecture."),Pt.forEach(t),Z=m(Ct),Fe=r(Ct,"P",{});var xo=i(Fe);Ve=s(xo,"Configuration objects inherit from "),Q=r(xo,"A",{href:!0});var Zi=i(Q);Je=s(Zi,"PretrainedConfig"),Zi.forEach(t),Xe=s(xo,` and can be used to control the model outputs. Read the
documentation from `),fe=r(xo,"A",{href:!0});var el=i(fe);Ye=s(el,"PretrainedConfig"),el.forEach(t),le=s(xo," for more information."),xo.forEach(t),Ze=m(Ct),y(zo.$$.fragment,Ct),Ct.forEach(t),ll=m(o),Jt=r(o,"H2",{class:!0});var xa=i(Jt);jo=r(xa,"A",{id:!0,class:!0,href:!0});var tl=i(jo);pr=r(tl,"SPAN",{});var ol=i(pr);y(Sn.$$.fragment,ol),ol.forEach(t),tl.forEach(t),yd=m(xa),hr=r(xa,"SPAN",{});var nl=i(hr);$d=s(nl,"DebertaTokenizer"),nl.forEach(t),xa.forEach(t),dl=m(o),he=r(o,"DIV",{class:!0});var _e=i(he);y(Nn.$$.fragment,_e),vd=m(_e),mr=r(_e,"P",{});var sl=i(mr);Dd=s(sl,"Construct a DeBERTa tokenizer. Based on byte-level Byte-Pair-Encoding."),sl.forEach(t),Ed=m(_e),fr=r(_e,"P",{});var al=i(fr);Fd=s(al,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),al.forEach(t),qd=m(_e),y(Mo.$$.fragment,_e),xd=m(_e),Wn=r(_e,"P",{});var za=i(Wn);zd=s(za,"You can get around that behavior by passing "),ur=r(za,"CODE",{});var rl=i(ur);jd=s(rl,"add_prefix_space=True"),rl.forEach(t),Md=s(za,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),za.forEach(t),Cd=m(_e),y(Co.$$.fragment,_e),Pd=m(_e),Hn=r(_e,"P",{});var ja=i(Hn);Bd=s(ja,"This tokenizer inherits from "),Ma=r(ja,"A",{href:!0});var il=i(Ma);Ad=s(il,"PreTrainedTokenizer"),il.forEach(t),Ld=s(ja,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ja.forEach(t),Rd=m(_e),Bt=r(_e,"DIV",{class:!0});var Ua=i(Bt);y(Un.$$.fragment,Ua),Od=m(Ua),gr=r(Ua,"P",{});var xu=i(gr);Id=s(xu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),xu.forEach(t),Sd=m(Ua),Kn=r(Ua,"UL",{});var Ll=i(Kn);_r=r(Ll,"LI",{});var zu=i(_r);Nd=s(zu,"single sequence: [CLS] X [SEP]"),zu.forEach(t),Wd=m(Ll),br=r(Ll,"LI",{});var ju=i(br);Hd=s(ju,"pair of sequences: [CLS] A [SEP] B [SEP]"),ju.forEach(t),Ll.forEach(t),Ua.forEach(t),Ud=m(_e),Po=r(_e,"DIV",{class:!0});var Rl=i(Po);y(Qn.$$.fragment,Rl),Kd=m(Rl),Xt=r(Rl,"P",{});var Ka=i(Xt);Qd=s(Ka,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),kr=r(Ka,"CODE",{});var Mu=i(kr);Gd=s(Mu,"prepare_for_model"),Mu.forEach(t),Vd=s(Ka," or "),wr=r(Ka,"CODE",{});var Cu=i(wr);Jd=s(Cu,"encode_plus"),Cu.forEach(t),Xd=s(Ka," methods."),Ka.forEach(t),Rl.forEach(t),Yd=m(_e),$t=r(_e,"DIV",{class:!0});var Pn=i($t);y(Gn.$$.fragment,Pn),Zd=m(Pn),Tr=r(Pn,"P",{});var Pu=i(Tr);ec=s(Pu,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),Pu.forEach(t),tc=m(Pn),y(Bo.$$.fragment,Pn),oc=m(Pn),Yt=r(Pn,"P",{});var Qa=i(Yt);nc=s(Qa,"If "),yr=r(Qa,"CODE",{});var Bu=i(yr);sc=s(Bu,"token_ids_1"),Bu.forEach(t),ac=s(Qa," is "),$r=r(Qa,"CODE",{});var Au=i($r);rc=s(Au,"None"),Au.forEach(t),ic=s(Qa,", this method only returns the first portion of the mask (0s)."),Qa.forEach(t),Pn.forEach(t),lc=m(_e),Ca=r(_e,"DIV",{class:!0});var Lu=i(Ca);y(Vn.$$.fragment,Lu),Lu.forEach(t),_e.forEach(t),cl=m(o),Zt=r(o,"H2",{class:!0});var Ol=i(Zt);Ao=r(Ol,"A",{id:!0,class:!0,href:!0});var Ru=i(Ao);vr=r(Ru,"SPAN",{});var Ou=i(vr);y(Jn.$$.fragment,Ou),Ou.forEach(t),Ru.forEach(t),dc=m(Ol),Dr=r(Ol,"SPAN",{});var Iu=i(Dr);cc=s(Iu,"DebertaTokenizerFast"),Iu.forEach(t),Ol.forEach(t),pl=m(o),Se=r(o,"DIV",{class:!0});var tt=i(Se);y(Xn.$$.fragment,tt),pc=m(tt),Yn=r(tt,"P",{});var Il=i(Yn);hc=s(Il,"Construct a \u201Cfast\u201D DeBERTa tokenizer (backed by HuggingFace\u2019s "),Er=r(Il,"EM",{});var Su=i(Er);mc=s(Su,"tokenizers"),Su.forEach(t),fc=s(Il,` library). Based on byte-level
Byte-Pair-Encoding.`),Il.forEach(t),uc=m(tt),Fr=r(tt,"P",{});var Nu=i(Fr);gc=s(Nu,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Nu.forEach(t),_c=m(tt),y(Lo.$$.fragment,tt),bc=m(tt),Zn=r(tt,"P",{});var Sl=i(Zn);kc=s(Sl,"You can get around that behavior by passing "),qr=r(Sl,"CODE",{});var Wu=i(qr);wc=s(Wu,"add_prefix_space=True"),Wu.forEach(t),Tc=s(Sl,` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),Sl.forEach(t),yc=m(tt),y(Ro.$$.fragment,tt),$c=m(tt),es=r(tt,"P",{});var Nl=i(es);vc=s(Nl,"This tokenizer inherits from "),Pa=r(Nl,"A",{href:!0});var Hu=i(Pa);Dc=s(Hu,"PreTrainedTokenizerFast"),Hu.forEach(t),Ec=s(Nl,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Nl.forEach(t),Fc=m(tt),At=r(tt,"DIV",{class:!0});var Ga=i(At);y(ts.$$.fragment,Ga),qc=m(Ga),xr=r(Ga,"P",{});var Uu=i(xr);xc=s(Uu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Uu.forEach(t),zc=m(Ga),os=r(Ga,"UL",{});var Wl=i(os);zr=r(Wl,"LI",{});var Ku=i(zr);jc=s(Ku,"single sequence: [CLS] X [SEP]"),Ku.forEach(t),Mc=m(Wl),jr=r(Wl,"LI",{});var Qu=i(jr);Cc=s(Qu,"pair of sequences: [CLS] A [SEP] B [SEP]"),Qu.forEach(t),Wl.forEach(t),Ga.forEach(t),Pc=m(tt),vt=r(tt,"DIV",{class:!0});var Bn=i(vt);y(ns.$$.fragment,Bn),Bc=m(Bn),Mr=r(Bn,"P",{});var Gu=i(Mr);Ac=s(Gu,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),Gu.forEach(t),Lc=m(Bn),y(Oo.$$.fragment,Bn),Rc=m(Bn),eo=r(Bn,"P",{});var Va=i(eo);Oc=s(Va,"If "),Cr=r(Va,"CODE",{});var Vu=i(Cr);Ic=s(Vu,"token_ids_1"),Vu.forEach(t),Sc=s(Va," is "),Pr=r(Va,"CODE",{});var Ju=i(Pr);Nc=s(Ju,"None"),Ju.forEach(t),Wc=s(Va,", this method only returns the first portion of the mask (0s)."),Va.forEach(t),Bn.forEach(t),tt.forEach(t),hl=m(o),to=r(o,"H2",{class:!0});var Hl=i(to);Io=r(Hl,"A",{id:!0,class:!0,href:!0});var Xu=i(Io);Br=r(Xu,"SPAN",{});var Yu=i(Br);y(ss.$$.fragment,Yu),Yu.forEach(t),Xu.forEach(t),Hc=m(Hl),Ar=r(Hl,"SPAN",{});var Zu=i(Ar);Uc=s(Zu,"DebertaModel"),Zu.forEach(t),Hl.forEach(t),ml=m(o),wt=r(o,"DIV",{class:!0});var An=i(wt);y(as.$$.fragment,An),Kc=m(An),rs=r(An,"P",{});var Ul=i(rs);Qc=s(Ul,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),is=r(Ul,"A",{href:!0,rel:!0});var eg=i(is);Gc=s(eg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),eg.forEach(t),Vc=s(Ul,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ul.forEach(t),Jc=m(An),ls=r(An,"P",{});var Kl=i(ls);Xc=s(Kl,"This model is also a PyTorch "),ds=r(Kl,"A",{href:!0,rel:!0});var tg=i(ds);Yc=s(tg,"torch.nn.Module"),tg.forEach(t),Zc=s(Kl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kl.forEach(t),ep=m(An),Dt=r(An,"DIV",{class:!0});var Ln=i(Dt);y(cs.$$.fragment,Ln),tp=m(Ln),oo=r(Ln,"P",{});var Ja=i(oo);op=s(Ja,"The "),Ba=r(Ja,"A",{href:!0});var og=i(Ba);np=s(og,"DebertaModel"),og.forEach(t),sp=s(Ja," forward method, overrides the "),Lr=r(Ja,"CODE",{});var ng=i(Lr);ap=s(ng,"__call__"),ng.forEach(t),rp=s(Ja," special method."),Ja.forEach(t),ip=m(Ln),y(So.$$.fragment,Ln),lp=m(Ln),y(No.$$.fragment,Ln),Ln.forEach(t),An.forEach(t),fl=m(o),no=r(o,"H2",{class:!0});var Ql=i(no);Wo=r(Ql,"A",{id:!0,class:!0,href:!0});var sg=i(Wo);Rr=r(sg,"SPAN",{});var ag=i(Rr);y(ps.$$.fragment,ag),ag.forEach(t),sg.forEach(t),dp=m(Ql),Or=r(Ql,"SPAN",{});var rg=i(Or);cp=s(rg,"DebertaPreTrainedModel"),rg.forEach(t),Ql.forEach(t),ul=m(o),so=r(o,"DIV",{class:!0});var Gl=i(so);y(hs.$$.fragment,Gl),pp=m(Gl),Ir=r(Gl,"P",{});var ig=i(Ir);hp=s(ig,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),ig.forEach(t),Gl.forEach(t),gl=m(o),ao=r(o,"H2",{class:!0});var Vl=i(ao);Ho=r(Vl,"A",{id:!0,class:!0,href:!0});var lg=i(Ho);Sr=r(lg,"SPAN",{});var dg=i(Sr);y(ms.$$.fragment,dg),dg.forEach(t),lg.forEach(t),mp=m(Vl),Nr=r(Vl,"SPAN",{});var cg=i(Nr);fp=s(cg,"DebertaForMaskedLM"),cg.forEach(t),Vl.forEach(t),_l=m(o),Tt=r(o,"DIV",{class:!0});var Rn=i(Tt);y(fs.$$.fragment,Rn),up=m(Rn),ro=r(Rn,"P",{});var Xa=i(ro);gp=s(Xa,"DeBERTa Model with a "),Wr=r(Xa,"CODE",{});var pg=i(Wr);_p=s(pg,"language modeling"),pg.forEach(t),bp=s(Xa,` head on top.
The DeBERTa model was proposed in `),us=r(Xa,"A",{href:!0,rel:!0});var hg=i(us);kp=s(hg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),hg.forEach(t),wp=s(Xa,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Xa.forEach(t),Tp=m(Rn),gs=r(Rn,"P",{});var Jl=i(gs);yp=s(Jl,"This model is also a PyTorch "),_s=r(Jl,"A",{href:!0,rel:!0});var mg=i(_s);$p=s(mg,"torch.nn.Module"),mg.forEach(t),vp=s(Jl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jl.forEach(t),Dp=m(Rn),ht=r(Rn,"DIV",{class:!0});var Lt=i(ht);y(bs.$$.fragment,Lt),Ep=m(Lt),io=r(Lt,"P",{});var Ya=i(io);Fp=s(Ya,"The "),Aa=r(Ya,"A",{href:!0});var fg=i(Aa);qp=s(fg,"DebertaForMaskedLM"),fg.forEach(t),xp=s(Ya," forward method, overrides the "),Hr=r(Ya,"CODE",{});var ug=i(Hr);zp=s(ug,"__call__"),ug.forEach(t),jp=s(Ya," special method."),Ya.forEach(t),Mp=m(Lt),y(Uo.$$.fragment,Lt),Cp=m(Lt),y(Ko.$$.fragment,Lt),Pp=m(Lt),y(Qo.$$.fragment,Lt),Lt.forEach(t),Rn.forEach(t),bl=m(o),lo=r(o,"H2",{class:!0});var Xl=i(lo);Go=r(Xl,"A",{id:!0,class:!0,href:!0});var gg=i(Go);Ur=r(gg,"SPAN",{});var _g=i(Ur);y(ks.$$.fragment,_g),_g.forEach(t),gg.forEach(t),Bp=m(Xl),Kr=r(Xl,"SPAN",{});var bg=i(Kr);Ap=s(bg,"DebertaForSequenceClassification"),bg.forEach(t),Xl.forEach(t),kl=m(o),it=r(o,"DIV",{class:!0});var Rt=i(it);y(ws.$$.fragment,Rt),Lp=m(Rt),Qr=r(Rt,"P",{});var kg=i(Qr);Rp=s(kg,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),kg.forEach(t),Op=m(Rt),Ts=r(Rt,"P",{});var Yl=i(Ts);Ip=s(Yl,"The DeBERTa model was proposed in "),ys=r(Yl,"A",{href:!0,rel:!0});var wg=i(ys);Sp=s(wg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),wg.forEach(t),Np=s(Yl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Yl.forEach(t),Wp=m(Rt),$s=r(Rt,"P",{});var Zl=i($s);Hp=s(Zl,"This model is also a PyTorch "),vs=r(Zl,"A",{href:!0,rel:!0});var Tg=i(vs);Up=s(Tg,"torch.nn.Module"),Tg.forEach(t),Kp=s(Zl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zl.forEach(t),Qp=m(Rt),et=r(Rt,"DIV",{class:!0});var kt=i(et);y(Ds.$$.fragment,kt),Gp=m(kt),co=r(kt,"P",{});var Za=i(co);Vp=s(Za,"The "),La=r(Za,"A",{href:!0});var yg=i(La);Jp=s(yg,"DebertaForSequenceClassification"),yg.forEach(t),Xp=s(Za," forward method, overrides the "),Gr=r(Za,"CODE",{});var $g=i(Gr);Yp=s($g,"__call__"),$g.forEach(t),Zp=s(Za," special method."),Za.forEach(t),eh=m(kt),y(Vo.$$.fragment,kt),th=m(kt),y(Jo.$$.fragment,kt),oh=m(kt),y(Xo.$$.fragment,kt),nh=m(kt),y(Yo.$$.fragment,kt),sh=m(kt),y(Zo.$$.fragment,kt),kt.forEach(t),Rt.forEach(t),wl=m(o),po=r(o,"H2",{class:!0});var ed=i(po);en=r(ed,"A",{id:!0,class:!0,href:!0});var vg=i(en);Vr=r(vg,"SPAN",{});var Dg=i(Vr);y(Es.$$.fragment,Dg),Dg.forEach(t),vg.forEach(t),ah=m(ed),Jr=r(ed,"SPAN",{});var Eg=i(Jr);rh=s(Eg,"DebertaForTokenClassification"),Eg.forEach(t),ed.forEach(t),Tl=m(o),lt=r(o,"DIV",{class:!0});var Ot=i(lt);y(Fs.$$.fragment,Ot),ih=m(Ot),Xr=r(Ot,"P",{});var Fg=i(Xr);lh=s(Fg,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Fg.forEach(t),dh=m(Ot),qs=r(Ot,"P",{});var td=i(qs);ch=s(td,"The DeBERTa model was proposed in "),xs=r(td,"A",{href:!0,rel:!0});var qg=i(xs);ph=s(qg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),qg.forEach(t),hh=s(td,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),td.forEach(t),mh=m(Ot),zs=r(Ot,"P",{});var od=i(zs);fh=s(od,"This model is also a PyTorch "),js=r(od,"A",{href:!0,rel:!0});var xg=i(js);uh=s(xg,"torch.nn.Module"),xg.forEach(t),gh=s(od,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),od.forEach(t),_h=m(Ot),mt=r(Ot,"DIV",{class:!0});var It=i(mt);y(Ms.$$.fragment,It),bh=m(It),ho=r(It,"P",{});var er=i(ho);kh=s(er,"The "),Ra=r(er,"A",{href:!0});var zg=i(Ra);wh=s(zg,"DebertaForTokenClassification"),zg.forEach(t),Th=s(er," forward method, overrides the "),Yr=r(er,"CODE",{});var jg=i(Yr);yh=s(jg,"__call__"),jg.forEach(t),$h=s(er," special method."),er.forEach(t),vh=m(It),y(tn.$$.fragment,It),Dh=m(It),y(on.$$.fragment,It),Eh=m(It),y(nn.$$.fragment,It),It.forEach(t),Ot.forEach(t),yl=m(o),mo=r(o,"H2",{class:!0});var nd=i(mo);sn=r(nd,"A",{id:!0,class:!0,href:!0});var Mg=i(sn);Zr=r(Mg,"SPAN",{});var Cg=i(Zr);y(Cs.$$.fragment,Cg),Cg.forEach(t),Mg.forEach(t),Fh=m(nd),ei=r(nd,"SPAN",{});var Pg=i(ei);qh=s(Pg,"DebertaForQuestionAnswering"),Pg.forEach(t),nd.forEach(t),$l=m(o),dt=r(o,"DIV",{class:!0});var St=i(dt);y(Ps.$$.fragment,St),xh=m(St),fo=r(St,"P",{});var tr=i(fo);zh=s(tr,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ti=r(tr,"CODE",{});var Bg=i(ti);jh=s(Bg,"span start logits"),Bg.forEach(t),Mh=s(tr," and "),oi=r(tr,"CODE",{});var Ag=i(oi);Ch=s(Ag,"span end logits"),Ag.forEach(t),Ph=s(tr,")."),tr.forEach(t),Bh=m(St),Bs=r(St,"P",{});var sd=i(Bs);Ah=s(sd,"The DeBERTa model was proposed in "),As=r(sd,"A",{href:!0,rel:!0});var Lg=i(As);Lh=s(Lg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Lg.forEach(t),Rh=s(sd,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),sd.forEach(t),Oh=m(St),Ls=r(St,"P",{});var ad=i(Ls);Ih=s(ad,"This model is also a PyTorch "),Rs=r(ad,"A",{href:!0,rel:!0});var Rg=i(Rs);Sh=s(Rg,"torch.nn.Module"),Rg.forEach(t),Nh=s(ad,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ad.forEach(t),Wh=m(St),ft=r(St,"DIV",{class:!0});var Nt=i(ft);y(Os.$$.fragment,Nt),Hh=m(Nt),uo=r(Nt,"P",{});var or=i(uo);Uh=s(or,"The "),Oa=r(or,"A",{href:!0});var Og=i(Oa);Kh=s(Og,"DebertaForQuestionAnswering"),Og.forEach(t),Qh=s(or," forward method, overrides the "),ni=r(or,"CODE",{});var Ig=i(ni);Gh=s(Ig,"__call__"),Ig.forEach(t),Vh=s(or," special method."),or.forEach(t),Jh=m(Nt),y(an.$$.fragment,Nt),Xh=m(Nt),y(rn.$$.fragment,Nt),Yh=m(Nt),y(ln.$$.fragment,Nt),Nt.forEach(t),St.forEach(t),vl=m(o),go=r(o,"H2",{class:!0});var rd=i(go);dn=r(rd,"A",{id:!0,class:!0,href:!0});var Sg=i(dn);si=r(Sg,"SPAN",{});var Ng=i(si);y(Is.$$.fragment,Ng),Ng.forEach(t),Sg.forEach(t),Zh=m(rd),ai=r(rd,"SPAN",{});var Wg=i(ai);em=s(Wg,"TFDebertaModel"),Wg.forEach(t),rd.forEach(t),Dl=m(o),ct=r(o,"DIV",{class:!0});var Wt=i(ct);y(Ss.$$.fragment,Wt),tm=m(Wt),Ns=r(Wt,"P",{});var id=i(Ns);om=s(id,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Ws=r(id,"A",{href:!0,rel:!0});var Hg=i(Ws);nm=s(Hg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Hg.forEach(t),sm=s(id,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),id.forEach(t),am=m(Wt),Hs=r(Wt,"P",{});var ld=i(Hs);rm=s(ld,"This model is also a "),Us=r(ld,"A",{href:!0,rel:!0});var Ug=i(Us);im=s(Ug,"tf.keras.Model"),Ug.forEach(t),lm=s(ld,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ld.forEach(t),dm=m(Wt),y(cn.$$.fragment,Wt),cm=m(Wt),Et=r(Wt,"DIV",{class:!0});var On=i(Et);y(Ks.$$.fragment,On),pm=m(On),_o=r(On,"P",{});var nr=i(_o);hm=s(nr,"The "),Ia=r(nr,"A",{href:!0});var Kg=i(Ia);mm=s(Kg,"TFDebertaModel"),Kg.forEach(t),fm=s(nr," forward method, overrides the "),ri=r(nr,"CODE",{});var Qg=i(ri);um=s(Qg,"__call__"),Qg.forEach(t),gm=s(nr," special method."),nr.forEach(t),_m=m(On),y(pn.$$.fragment,On),bm=m(On),y(hn.$$.fragment,On),On.forEach(t),Wt.forEach(t),El=m(o),bo=r(o,"H2",{class:!0});var dd=i(bo);mn=r(dd,"A",{id:!0,class:!0,href:!0});var Gg=i(mn);ii=r(Gg,"SPAN",{});var Vg=i(ii);y(Qs.$$.fragment,Vg),Vg.forEach(t),Gg.forEach(t),km=m(dd),li=r(dd,"SPAN",{});var Jg=i(li);wm=s(Jg,"TFDebertaPreTrainedModel"),Jg.forEach(t),dd.forEach(t),Fl=m(o),jt=r(o,"DIV",{class:!0});var sr=i(jt);y(Gs.$$.fragment,sr),Tm=m(sr),di=r(sr,"P",{});var Xg=i(di);ym=s(Xg,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Xg.forEach(t),$m=m(sr),Ft=r(sr,"DIV",{class:!0});var In=i(Ft);y(Vs.$$.fragment,In),vm=m(In),ci=r(In,"P",{});var Yg=i(ci);Dm=s(Yg,"Calls the model on new inputs and returns the outputs as tensors."),Yg.forEach(t),Em=m(In),Js=r(In,"P",{});var cd=i(Js);Fm=s(cd,"In this case "),pi=r(cd,"CODE",{});var Zg=i(pi);qm=s(Zg,"call()"),Zg.forEach(t),xm=s(cd,` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),cd.forEach(t),zm=m(In),yt=r(In,"P",{});var Ht=i(yt);jm=s(Ht,`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),hi=r(Ht,"CODE",{});var e_=i(hi);Mm=s(e_,"tf.keras.Model"),e_.forEach(t),Cm=s(Ht,`.
To call a model on an input, always use the `),mi=r(Ht,"CODE",{});var t_=i(mi);Pm=s(t_,"__call__()"),t_.forEach(t),Bm=s(Ht,` method,
i.e. `),fi=r(Ht,"CODE",{});var o_=i(fi);Am=s(o_,"model(inputs)"),o_.forEach(t),Lm=s(Ht,", which relies on the underlying "),ui=r(Ht,"CODE",{});var n_=i(ui);Rm=s(n_,"call()"),n_.forEach(t),Om=s(Ht," method."),Ht.forEach(t),In.forEach(t),sr.forEach(t),ql=m(o),ko=r(o,"H2",{class:!0});var pd=i(ko);fn=r(pd,"A",{id:!0,class:!0,href:!0});var s_=i(fn);gi=r(s_,"SPAN",{});var a_=i(gi);y(Xs.$$.fragment,a_),a_.forEach(t),s_.forEach(t),Im=m(pd),_i=r(pd,"SPAN",{});var r_=i(_i);Sm=s(r_,"TFDebertaForMaskedLM"),r_.forEach(t),pd.forEach(t),xl=m(o),pt=r(o,"DIV",{class:!0});var Ut=i(pt);y(Ys.$$.fragment,Ut),Nm=m(Ut),wo=r(Ut,"P",{});var ar=i(wo);Wm=s(ar,"DeBERTa Model with a "),bi=r(ar,"CODE",{});var i_=i(bi);Hm=s(i_,"language modeling"),i_.forEach(t),Um=s(ar,` head on top.
The DeBERTa model was proposed in `),Zs=r(ar,"A",{href:!0,rel:!0});var l_=i(Zs);Km=s(l_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),l_.forEach(t),Qm=s(ar,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ar.forEach(t),Gm=m(Ut),ea=r(Ut,"P",{});var hd=i(ea);Vm=s(hd,"This model is also a "),ta=r(hd,"A",{href:!0,rel:!0});var d_=i(ta);Jm=s(d_,"tf.keras.Model"),d_.forEach(t),Xm=s(hd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hd.forEach(t),Ym=m(Ut),y(un.$$.fragment,Ut),Zm=m(Ut),ut=r(Ut,"DIV",{class:!0});var Kt=i(ut);y(oa.$$.fragment,Kt),ef=m(Kt),To=r(Kt,"P",{});var rr=i(To);tf=s(rr,"The "),Sa=r(rr,"A",{href:!0});var c_=i(Sa);of=s(c_,"TFDebertaForMaskedLM"),c_.forEach(t),nf=s(rr," forward method, overrides the "),ki=r(rr,"CODE",{});var p_=i(ki);sf=s(p_,"__call__"),p_.forEach(t),af=s(rr," special method."),rr.forEach(t),rf=m(Kt),y(gn.$$.fragment,Kt),lf=m(Kt),y(_n.$$.fragment,Kt),df=m(Kt),y(bn.$$.fragment,Kt),Kt.forEach(t),Ut.forEach(t),zl=m(o),yo=r(o,"H2",{class:!0});var md=i(yo);kn=r(md,"A",{id:!0,class:!0,href:!0});var h_=i(kn);wi=r(h_,"SPAN",{});var m_=i(wi);y(na.$$.fragment,m_),m_.forEach(t),h_.forEach(t),cf=m(md),Ti=r(md,"SPAN",{});var f_=i(Ti);pf=s(f_,"TFDebertaForSequenceClassification"),f_.forEach(t),md.forEach(t),jl=m(o),ot=r(o,"DIV",{class:!0});var qt=i(ot);y(sa.$$.fragment,qt),hf=m(qt),yi=r(qt,"P",{});var u_=i(yi);mf=s(u_,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),u_.forEach(t),ff=m(qt),aa=r(qt,"P",{});var fd=i(aa);uf=s(fd,"The DeBERTa model was proposed in "),ra=r(fd,"A",{href:!0,rel:!0});var g_=i(ra);gf=s(g_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),g_.forEach(t),_f=s(fd,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),fd.forEach(t),bf=m(qt),ia=r(qt,"P",{});var ud=i(ia);kf=s(ud,"This model is also a "),la=r(ud,"A",{href:!0,rel:!0});var __=i(la);wf=s(__,"tf.keras.Model"),__.forEach(t),Tf=s(ud,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ud.forEach(t),yf=m(qt),y(wn.$$.fragment,qt),$f=m(qt),gt=r(qt,"DIV",{class:!0});var Qt=i(gt);y(da.$$.fragment,Qt),vf=m(Qt),$o=r(Qt,"P",{});var ir=i($o);Df=s(ir,"The "),Na=r(ir,"A",{href:!0});var b_=i(Na);Ef=s(b_,"TFDebertaForSequenceClassification"),b_.forEach(t),Ff=s(ir," forward method, overrides the "),$i=r(ir,"CODE",{});var k_=i($i);qf=s(k_,"__call__"),k_.forEach(t),xf=s(ir," special method."),ir.forEach(t),zf=m(Qt),y(Tn.$$.fragment,Qt),jf=m(Qt),y(yn.$$.fragment,Qt),Mf=m(Qt),y($n.$$.fragment,Qt),Qt.forEach(t),qt.forEach(t),Ml=m(o),vo=r(o,"H2",{class:!0});var gd=i(vo);vn=r(gd,"A",{id:!0,class:!0,href:!0});var w_=i(vn);vi=r(w_,"SPAN",{});var T_=i(vi);y(ca.$$.fragment,T_),T_.forEach(t),w_.forEach(t),Cf=m(gd),Di=r(gd,"SPAN",{});var y_=i(Di);Pf=s(y_,"TFDebertaForTokenClassification"),y_.forEach(t),gd.forEach(t),Cl=m(o),nt=r(o,"DIV",{class:!0});var xt=i(nt);y(pa.$$.fragment,xt),Bf=m(xt),Ei=r(xt,"P",{});var $_=i(Ei);Af=s($_,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),$_.forEach(t),Lf=m(xt),ha=r(xt,"P",{});var _d=i(ha);Rf=s(_d,"The DeBERTa model was proposed in "),ma=r(_d,"A",{href:!0,rel:!0});var v_=i(ma);Of=s(v_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),v_.forEach(t),If=s(_d,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),_d.forEach(t),Sf=m(xt),fa=r(xt,"P",{});var bd=i(fa);Nf=s(bd,"This model is also a "),ua=r(bd,"A",{href:!0,rel:!0});var D_=i(ua);Wf=s(D_,"tf.keras.Model"),D_.forEach(t),Hf=s(bd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bd.forEach(t),Uf=m(xt),y(Dn.$$.fragment,xt),Kf=m(xt),_t=r(xt,"DIV",{class:!0});var Gt=i(_t);y(ga.$$.fragment,Gt),Qf=m(Gt),Do=r(Gt,"P",{});var lr=i(Do);Gf=s(lr,"The "),Wa=r(lr,"A",{href:!0});var E_=i(Wa);Vf=s(E_,"TFDebertaForTokenClassification"),E_.forEach(t),Jf=s(lr," forward method, overrides the "),Fi=r(lr,"CODE",{});var F_=i(Fi);Xf=s(F_,"__call__"),F_.forEach(t),Yf=s(lr," special method."),lr.forEach(t),Zf=m(Gt),y(En.$$.fragment,Gt),eu=m(Gt),y(Fn.$$.fragment,Gt),tu=m(Gt),y(qn.$$.fragment,Gt),Gt.forEach(t),xt.forEach(t),Pl=m(o),Eo=r(o,"H2",{class:!0});var kd=i(Eo);xn=r(kd,"A",{id:!0,class:!0,href:!0});var q_=i(xn);qi=r(q_,"SPAN",{});var x_=i(qi);y(_a.$$.fragment,x_),x_.forEach(t),q_.forEach(t),ou=m(kd),xi=r(kd,"SPAN",{});var z_=i(xi);nu=s(z_,"TFDebertaForQuestionAnswering"),z_.forEach(t),kd.forEach(t),Bl=m(o),st=r(o,"DIV",{class:!0});var zt=i(st);y(ba.$$.fragment,zt),su=m(zt),Fo=r(zt,"P",{});var dr=i(Fo);au=s(dr,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),zi=r(dr,"CODE",{});var j_=i(zi);ru=s(j_,"span start logits"),j_.forEach(t),iu=s(dr," and "),ji=r(dr,"CODE",{});var M_=i(ji);lu=s(M_,"span end logits"),M_.forEach(t),du=s(dr,")."),dr.forEach(t),cu=m(zt),ka=r(zt,"P",{});var wd=i(ka);pu=s(wd,"The DeBERTa model was proposed in "),wa=r(wd,"A",{href:!0,rel:!0});var C_=i(wa);hu=s(C_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),C_.forEach(t),mu=s(wd,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),wd.forEach(t),fu=m(zt),Ta=r(zt,"P",{});var Td=i(Ta);uu=s(Td,"This model is also a "),ya=r(Td,"A",{href:!0,rel:!0});var P_=i(ya);gu=s(P_,"tf.keras.Model"),P_.forEach(t),_u=s(Td,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Td.forEach(t),bu=m(zt),y(zn.$$.fragment,zt),ku=m(zt),bt=r(zt,"DIV",{class:!0});var Vt=i(bt);y($a.$$.fragment,Vt),wu=m(Vt),qo=r(Vt,"P",{});var cr=i(qo);Tu=s(cr,"The "),Ha=r(cr,"A",{href:!0});var B_=i(Ha);yu=s(B_,"TFDebertaForQuestionAnswering"),B_.forEach(t),$u=s(cr," forward method, overrides the "),Mi=r(cr,"CODE",{});var A_=i(Mi);vu=s(A_,"__call__"),A_.forEach(t),Du=s(cr," special method."),cr.forEach(t),Eu=m(Vt),y(jn.$$.fragment,Vt),Fu=m(Vt),y(Mn.$$.fragment,Vt),qu=m(Vt),y(Cn.$$.fragment,Vt),Vt.forEach(t),zt.forEach(t),this.h()},h(){g(d,"name","hf:doc:metadata"),g(d,"content",JSON.stringify(jb)),g(f,"id","deberta"),g(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(f,"href","#deberta"),g(c,"class","relative group"),g(oe,"id","overview"),g(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(oe,"href","#overview"),g(L,"class","relative group"),g(de,"href","https://arxiv.org/abs/2006.03654"),g(de,"rel","nofollow"),g(ce,"href","https://github.com/microsoft/DeBERTa"),g(ce,"rel","nofollow"),g(pe,"href","https://huggingface.co/DeBERTa"),g(pe,"rel","nofollow"),g(W,"href","https://huggingface.co/kamalkraj"),g(W,"rel","nofollow"),g(H,"href","https://github.com/microsoft/DeBERTa"),g(H,"rel","nofollow"),g(S,"id","transformers.DebertaConfig"),g(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(S,"href","#transformers.DebertaConfig"),g(re,"class","relative group"),g(We,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaModel"),g(He,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaModel"),g(Ne,"href","https://huggingface.co/microsoft/deberta-base"),g(Ne,"rel","nofollow"),g(Q,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),g(fe,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),g(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(jo,"id","transformers.DebertaTokenizer"),g(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(jo,"href","#transformers.DebertaTokenizer"),g(Jt,"class","relative group"),g(Ma,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),g(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ca,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ao,"id","transformers.DebertaTokenizerFast"),g(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Ao,"href","#transformers.DebertaTokenizerFast"),g(Zt,"class","relative group"),g(Pa,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),g(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Io,"id","transformers.DebertaModel"),g(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Io,"href","#transformers.DebertaModel"),g(to,"class","relative group"),g(is,"href","https://arxiv.org/abs/2006.03654"),g(is,"rel","nofollow"),g(ds,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(ds,"rel","nofollow"),g(Ba,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaModel"),g(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Wo,"id","transformers.DebertaPreTrainedModel"),g(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Wo,"href","#transformers.DebertaPreTrainedModel"),g(no,"class","relative group"),g(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ho,"id","transformers.DebertaForMaskedLM"),g(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Ho,"href","#transformers.DebertaForMaskedLM"),g(ao,"class","relative group"),g(us,"href","https://arxiv.org/abs/2006.03654"),g(us,"rel","nofollow"),g(_s,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(_s,"rel","nofollow"),g(Aa,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaForMaskedLM"),g(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Go,"id","transformers.DebertaForSequenceClassification"),g(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Go,"href","#transformers.DebertaForSequenceClassification"),g(lo,"class","relative group"),g(ys,"href","https://arxiv.org/abs/2006.03654"),g(ys,"rel","nofollow"),g(vs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(vs,"rel","nofollow"),g(La,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaForSequenceClassification"),g(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(en,"id","transformers.DebertaForTokenClassification"),g(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(en,"href","#transformers.DebertaForTokenClassification"),g(po,"class","relative group"),g(xs,"href","https://arxiv.org/abs/2006.03654"),g(xs,"rel","nofollow"),g(js,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(js,"rel","nofollow"),g(Ra,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaForTokenClassification"),g(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(sn,"id","transformers.DebertaForQuestionAnswering"),g(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(sn,"href","#transformers.DebertaForQuestionAnswering"),g(mo,"class","relative group"),g(As,"href","https://arxiv.org/abs/2006.03654"),g(As,"rel","nofollow"),g(Rs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Rs,"rel","nofollow"),g(Oa,"href","/docs/transformers/main/en/model_doc/deberta#transformers.DebertaForQuestionAnswering"),g(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(dn,"id","transformers.TFDebertaModel"),g(dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(dn,"href","#transformers.TFDebertaModel"),g(go,"class","relative group"),g(Ws,"href","https://arxiv.org/abs/2006.03654"),g(Ws,"rel","nofollow"),g(Us,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Us,"rel","nofollow"),g(Ia,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaModel"),g(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(mn,"id","transformers.TFDebertaPreTrainedModel"),g(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(mn,"href","#transformers.TFDebertaPreTrainedModel"),g(bo,"class","relative group"),g(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(fn,"id","transformers.TFDebertaForMaskedLM"),g(fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(fn,"href","#transformers.TFDebertaForMaskedLM"),g(ko,"class","relative group"),g(Zs,"href","https://arxiv.org/abs/2006.03654"),g(Zs,"rel","nofollow"),g(ta,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(ta,"rel","nofollow"),g(Sa,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaForMaskedLM"),g(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(kn,"id","transformers.TFDebertaForSequenceClassification"),g(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(kn,"href","#transformers.TFDebertaForSequenceClassification"),g(yo,"class","relative group"),g(ra,"href","https://arxiv.org/abs/2006.03654"),g(ra,"rel","nofollow"),g(la,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(la,"rel","nofollow"),g(Na,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaForSequenceClassification"),g(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(vn,"id","transformers.TFDebertaForTokenClassification"),g(vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(vn,"href","#transformers.TFDebertaForTokenClassification"),g(vo,"class","relative group"),g(ma,"href","https://arxiv.org/abs/2006.03654"),g(ma,"rel","nofollow"),g(ua,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(ua,"rel","nofollow"),g(Wa,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaForTokenClassification"),g(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(xn,"id","transformers.TFDebertaForQuestionAnswering"),g(xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(xn,"href","#transformers.TFDebertaForQuestionAnswering"),g(Eo,"class","relative group"),g(wa,"href","https://arxiv.org/abs/2006.03654"),g(wa,"rel","nofollow"),g(ya,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(ya,"rel","nofollow"),g(Ha,"href","/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaForQuestionAnswering"),g(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,b){e(document.head,d),_(o,u,b),_(o,c,b),e(c,f),e(f,w),$(l,w,null),e(c,p),e(c,z),e(z,ae),_(o,V,b),_(o,L,b),e(L,oe),e(oe,se),$(F,se,null),e(L,qe),e(L,G),e(G,xe),_(o,Te,b),_(o,I,b),e(I,ze),e(I,de),e(de,J),e(I,je),_(o,ye,b),_(o,U,b),e(U,Me),_(o,$e,b),_(o,K,b),e(K,Ce),_(o,ve,b),_(o,ne,b),e(ne,M),e(M,C),e(M,ce),e(ce,X),e(M,Pe),_(o,De,b),_(o,R,b),e(R,Be),e(R,pe),e(pe,P),e(R,Ae),e(R,W),e(W,Le),e(R,Re),e(R,H),e(H,Oe),e(R,Ie),_(o,O,b),_(o,re,b),e(re,S),e(S,ue),$(ee,ue,null),e(re,B),e(re,ge),e(ge,A),_(o,Ee,b),_(o,Y,b),$(k,Y,null),e(Y,x),e(Y,me),e(me,ie),e(me,We),e(We,Ue),e(me,j),e(me,He),e(He,Ke),e(me,Qe),e(me,Ne),e(Ne,Ge),e(me,N),e(Y,Z),e(Y,Fe),e(Fe,Ve),e(Fe,Q),e(Q,Je),e(Fe,Xe),e(Fe,fe),e(fe,Ye),e(Fe,le),e(Y,Ze),$(zo,Y,null),_(o,ll,b),_(o,Jt,b),e(Jt,jo),e(jo,pr),$(Sn,pr,null),e(Jt,yd),e(Jt,hr),e(hr,$d),_(o,dl,b),_(o,he,b),$(Nn,he,null),e(he,vd),e(he,mr),e(mr,Dd),e(he,Ed),e(he,fr),e(fr,Fd),e(he,qd),$(Mo,he,null),e(he,xd),e(he,Wn),e(Wn,zd),e(Wn,ur),e(ur,jd),e(Wn,Md),e(he,Cd),$(Co,he,null),e(he,Pd),e(he,Hn),e(Hn,Bd),e(Hn,Ma),e(Ma,Ad),e(Hn,Ld),e(he,Rd),e(he,Bt),$(Un,Bt,null),e(Bt,Od),e(Bt,gr),e(gr,Id),e(Bt,Sd),e(Bt,Kn),e(Kn,_r),e(_r,Nd),e(Kn,Wd),e(Kn,br),e(br,Hd),e(he,Ud),e(he,Po),$(Qn,Po,null),e(Po,Kd),e(Po,Xt),e(Xt,Qd),e(Xt,kr),e(kr,Gd),e(Xt,Vd),e(Xt,wr),e(wr,Jd),e(Xt,Xd),e(he,Yd),e(he,$t),$(Gn,$t,null),e($t,Zd),e($t,Tr),e(Tr,ec),e($t,tc),$(Bo,$t,null),e($t,oc),e($t,Yt),e(Yt,nc),e(Yt,yr),e(yr,sc),e(Yt,ac),e(Yt,$r),e($r,rc),e(Yt,ic),e(he,lc),e(he,Ca),$(Vn,Ca,null),_(o,cl,b),_(o,Zt,b),e(Zt,Ao),e(Ao,vr),$(Jn,vr,null),e(Zt,dc),e(Zt,Dr),e(Dr,cc),_(o,pl,b),_(o,Se,b),$(Xn,Se,null),e(Se,pc),e(Se,Yn),e(Yn,hc),e(Yn,Er),e(Er,mc),e(Yn,fc),e(Se,uc),e(Se,Fr),e(Fr,gc),e(Se,_c),$(Lo,Se,null),e(Se,bc),e(Se,Zn),e(Zn,kc),e(Zn,qr),e(qr,wc),e(Zn,Tc),e(Se,yc),$(Ro,Se,null),e(Se,$c),e(Se,es),e(es,vc),e(es,Pa),e(Pa,Dc),e(es,Ec),e(Se,Fc),e(Se,At),$(ts,At,null),e(At,qc),e(At,xr),e(xr,xc),e(At,zc),e(At,os),e(os,zr),e(zr,jc),e(os,Mc),e(os,jr),e(jr,Cc),e(Se,Pc),e(Se,vt),$(ns,vt,null),e(vt,Bc),e(vt,Mr),e(Mr,Ac),e(vt,Lc),$(Oo,vt,null),e(vt,Rc),e(vt,eo),e(eo,Oc),e(eo,Cr),e(Cr,Ic),e(eo,Sc),e(eo,Pr),e(Pr,Nc),e(eo,Wc),_(o,hl,b),_(o,to,b),e(to,Io),e(Io,Br),$(ss,Br,null),e(to,Hc),e(to,Ar),e(Ar,Uc),_(o,ml,b),_(o,wt,b),$(as,wt,null),e(wt,Kc),e(wt,rs),e(rs,Qc),e(rs,is),e(is,Gc),e(rs,Vc),e(wt,Jc),e(wt,ls),e(ls,Xc),e(ls,ds),e(ds,Yc),e(ls,Zc),e(wt,ep),e(wt,Dt),$(cs,Dt,null),e(Dt,tp),e(Dt,oo),e(oo,op),e(oo,Ba),e(Ba,np),e(oo,sp),e(oo,Lr),e(Lr,ap),e(oo,rp),e(Dt,ip),$(So,Dt,null),e(Dt,lp),$(No,Dt,null),_(o,fl,b),_(o,no,b),e(no,Wo),e(Wo,Rr),$(ps,Rr,null),e(no,dp),e(no,Or),e(Or,cp),_(o,ul,b),_(o,so,b),$(hs,so,null),e(so,pp),e(so,Ir),e(Ir,hp),_(o,gl,b),_(o,ao,b),e(ao,Ho),e(Ho,Sr),$(ms,Sr,null),e(ao,mp),e(ao,Nr),e(Nr,fp),_(o,_l,b),_(o,Tt,b),$(fs,Tt,null),e(Tt,up),e(Tt,ro),e(ro,gp),e(ro,Wr),e(Wr,_p),e(ro,bp),e(ro,us),e(us,kp),e(ro,wp),e(Tt,Tp),e(Tt,gs),e(gs,yp),e(gs,_s),e(_s,$p),e(gs,vp),e(Tt,Dp),e(Tt,ht),$(bs,ht,null),e(ht,Ep),e(ht,io),e(io,Fp),e(io,Aa),e(Aa,qp),e(io,xp),e(io,Hr),e(Hr,zp),e(io,jp),e(ht,Mp),$(Uo,ht,null),e(ht,Cp),$(Ko,ht,null),e(ht,Pp),$(Qo,ht,null),_(o,bl,b),_(o,lo,b),e(lo,Go),e(Go,Ur),$(ks,Ur,null),e(lo,Bp),e(lo,Kr),e(Kr,Ap),_(o,kl,b),_(o,it,b),$(ws,it,null),e(it,Lp),e(it,Qr),e(Qr,Rp),e(it,Op),e(it,Ts),e(Ts,Ip),e(Ts,ys),e(ys,Sp),e(Ts,Np),e(it,Wp),e(it,$s),e($s,Hp),e($s,vs),e(vs,Up),e($s,Kp),e(it,Qp),e(it,et),$(Ds,et,null),e(et,Gp),e(et,co),e(co,Vp),e(co,La),e(La,Jp),e(co,Xp),e(co,Gr),e(Gr,Yp),e(co,Zp),e(et,eh),$(Vo,et,null),e(et,th),$(Jo,et,null),e(et,oh),$(Xo,et,null),e(et,nh),$(Yo,et,null),e(et,sh),$(Zo,et,null),_(o,wl,b),_(o,po,b),e(po,en),e(en,Vr),$(Es,Vr,null),e(po,ah),e(po,Jr),e(Jr,rh),_(o,Tl,b),_(o,lt,b),$(Fs,lt,null),e(lt,ih),e(lt,Xr),e(Xr,lh),e(lt,dh),e(lt,qs),e(qs,ch),e(qs,xs),e(xs,ph),e(qs,hh),e(lt,mh),e(lt,zs),e(zs,fh),e(zs,js),e(js,uh),e(zs,gh),e(lt,_h),e(lt,mt),$(Ms,mt,null),e(mt,bh),e(mt,ho),e(ho,kh),e(ho,Ra),e(Ra,wh),e(ho,Th),e(ho,Yr),e(Yr,yh),e(ho,$h),e(mt,vh),$(tn,mt,null),e(mt,Dh),$(on,mt,null),e(mt,Eh),$(nn,mt,null),_(o,yl,b),_(o,mo,b),e(mo,sn),e(sn,Zr),$(Cs,Zr,null),e(mo,Fh),e(mo,ei),e(ei,qh),_(o,$l,b),_(o,dt,b),$(Ps,dt,null),e(dt,xh),e(dt,fo),e(fo,zh),e(fo,ti),e(ti,jh),e(fo,Mh),e(fo,oi),e(oi,Ch),e(fo,Ph),e(dt,Bh),e(dt,Bs),e(Bs,Ah),e(Bs,As),e(As,Lh),e(Bs,Rh),e(dt,Oh),e(dt,Ls),e(Ls,Ih),e(Ls,Rs),e(Rs,Sh),e(Ls,Nh),e(dt,Wh),e(dt,ft),$(Os,ft,null),e(ft,Hh),e(ft,uo),e(uo,Uh),e(uo,Oa),e(Oa,Kh),e(uo,Qh),e(uo,ni),e(ni,Gh),e(uo,Vh),e(ft,Jh),$(an,ft,null),e(ft,Xh),$(rn,ft,null),e(ft,Yh),$(ln,ft,null),_(o,vl,b),_(o,go,b),e(go,dn),e(dn,si),$(Is,si,null),e(go,Zh),e(go,ai),e(ai,em),_(o,Dl,b),_(o,ct,b),$(Ss,ct,null),e(ct,tm),e(ct,Ns),e(Ns,om),e(Ns,Ws),e(Ws,nm),e(Ns,sm),e(ct,am),e(ct,Hs),e(Hs,rm),e(Hs,Us),e(Us,im),e(Hs,lm),e(ct,dm),$(cn,ct,null),e(ct,cm),e(ct,Et),$(Ks,Et,null),e(Et,pm),e(Et,_o),e(_o,hm),e(_o,Ia),e(Ia,mm),e(_o,fm),e(_o,ri),e(ri,um),e(_o,gm),e(Et,_m),$(pn,Et,null),e(Et,bm),$(hn,Et,null),_(o,El,b),_(o,bo,b),e(bo,mn),e(mn,ii),$(Qs,ii,null),e(bo,km),e(bo,li),e(li,wm),_(o,Fl,b),_(o,jt,b),$(Gs,jt,null),e(jt,Tm),e(jt,di),e(di,ym),e(jt,$m),e(jt,Ft),$(Vs,Ft,null),e(Ft,vm),e(Ft,ci),e(ci,Dm),e(Ft,Em),e(Ft,Js),e(Js,Fm),e(Js,pi),e(pi,qm),e(Js,xm),e(Ft,zm),e(Ft,yt),e(yt,jm),e(yt,hi),e(hi,Mm),e(yt,Cm),e(yt,mi),e(mi,Pm),e(yt,Bm),e(yt,fi),e(fi,Am),e(yt,Lm),e(yt,ui),e(ui,Rm),e(yt,Om),_(o,ql,b),_(o,ko,b),e(ko,fn),e(fn,gi),$(Xs,gi,null),e(ko,Im),e(ko,_i),e(_i,Sm),_(o,xl,b),_(o,pt,b),$(Ys,pt,null),e(pt,Nm),e(pt,wo),e(wo,Wm),e(wo,bi),e(bi,Hm),e(wo,Um),e(wo,Zs),e(Zs,Km),e(wo,Qm),e(pt,Gm),e(pt,ea),e(ea,Vm),e(ea,ta),e(ta,Jm),e(ea,Xm),e(pt,Ym),$(un,pt,null),e(pt,Zm),e(pt,ut),$(oa,ut,null),e(ut,ef),e(ut,To),e(To,tf),e(To,Sa),e(Sa,of),e(To,nf),e(To,ki),e(ki,sf),e(To,af),e(ut,rf),$(gn,ut,null),e(ut,lf),$(_n,ut,null),e(ut,df),$(bn,ut,null),_(o,zl,b),_(o,yo,b),e(yo,kn),e(kn,wi),$(na,wi,null),e(yo,cf),e(yo,Ti),e(Ti,pf),_(o,jl,b),_(o,ot,b),$(sa,ot,null),e(ot,hf),e(ot,yi),e(yi,mf),e(ot,ff),e(ot,aa),e(aa,uf),e(aa,ra),e(ra,gf),e(aa,_f),e(ot,bf),e(ot,ia),e(ia,kf),e(ia,la),e(la,wf),e(ia,Tf),e(ot,yf),$(wn,ot,null),e(ot,$f),e(ot,gt),$(da,gt,null),e(gt,vf),e(gt,$o),e($o,Df),e($o,Na),e(Na,Ef),e($o,Ff),e($o,$i),e($i,qf),e($o,xf),e(gt,zf),$(Tn,gt,null),e(gt,jf),$(yn,gt,null),e(gt,Mf),$($n,gt,null),_(o,Ml,b),_(o,vo,b),e(vo,vn),e(vn,vi),$(ca,vi,null),e(vo,Cf),e(vo,Di),e(Di,Pf),_(o,Cl,b),_(o,nt,b),$(pa,nt,null),e(nt,Bf),e(nt,Ei),e(Ei,Af),e(nt,Lf),e(nt,ha),e(ha,Rf),e(ha,ma),e(ma,Of),e(ha,If),e(nt,Sf),e(nt,fa),e(fa,Nf),e(fa,ua),e(ua,Wf),e(fa,Hf),e(nt,Uf),$(Dn,nt,null),e(nt,Kf),e(nt,_t),$(ga,_t,null),e(_t,Qf),e(_t,Do),e(Do,Gf),e(Do,Wa),e(Wa,Vf),e(Do,Jf),e(Do,Fi),e(Fi,Xf),e(Do,Yf),e(_t,Zf),$(En,_t,null),e(_t,eu),$(Fn,_t,null),e(_t,tu),$(qn,_t,null),_(o,Pl,b),_(o,Eo,b),e(Eo,xn),e(xn,qi),$(_a,qi,null),e(Eo,ou),e(Eo,xi),e(xi,nu),_(o,Bl,b),_(o,st,b),$(ba,st,null),e(st,su),e(st,Fo),e(Fo,au),e(Fo,zi),e(zi,ru),e(Fo,iu),e(Fo,ji),e(ji,lu),e(Fo,du),e(st,cu),e(st,ka),e(ka,pu),e(ka,wa),e(wa,hu),e(ka,mu),e(st,fu),e(st,Ta),e(Ta,uu),e(Ta,ya),e(ya,gu),e(Ta,_u),e(st,bu),$(zn,st,null),e(st,ku),e(st,bt),$($a,bt,null),e(bt,wu),e(bt,qo),e(qo,Tu),e(qo,Ha),e(Ha,yu),e(qo,$u),e(qo,Mi),e(Mi,vu),e(qo,Du),e(bt,Eu),$(jn,bt,null),e(bt,Fu),$(Mn,bt,null),e(bt,qu),$(Cn,bt,null),Al=!0},p(o,[b]){const va={};b&2&&(va.$$scope={dirty:b,ctx:o}),zo.$set(va);const Ci={};b&2&&(Ci.$$scope={dirty:b,ctx:o}),Mo.$set(Ci);const Pi={};b&2&&(Pi.$$scope={dirty:b,ctx:o}),Co.$set(Pi);const Bi={};b&2&&(Bi.$$scope={dirty:b,ctx:o}),Bo.$set(Bi);const Da={};b&2&&(Da.$$scope={dirty:b,ctx:o}),Lo.$set(Da);const Ai={};b&2&&(Ai.$$scope={dirty:b,ctx:o}),Ro.$set(Ai);const Li={};b&2&&(Li.$$scope={dirty:b,ctx:o}),Oo.$set(Li);const Ri={};b&2&&(Ri.$$scope={dirty:b,ctx:o}),So.$set(Ri);const Ea={};b&2&&(Ea.$$scope={dirty:b,ctx:o}),No.$set(Ea);const Oi={};b&2&&(Oi.$$scope={dirty:b,ctx:o}),Uo.$set(Oi);const Ii={};b&2&&(Ii.$$scope={dirty:b,ctx:o}),Ko.$set(Ii);const Si={};b&2&&(Si.$$scope={dirty:b,ctx:o}),Qo.$set(Si);const Ni={};b&2&&(Ni.$$scope={dirty:b,ctx:o}),Vo.$set(Ni);const Fa={};b&2&&(Fa.$$scope={dirty:b,ctx:o}),Jo.$set(Fa);const Wi={};b&2&&(Wi.$$scope={dirty:b,ctx:o}),Xo.$set(Wi);const Mt={};b&2&&(Mt.$$scope={dirty:b,ctx:o}),Yo.$set(Mt);const Hi={};b&2&&(Hi.$$scope={dirty:b,ctx:o}),Zo.$set(Hi);const Ui={};b&2&&(Ui.$$scope={dirty:b,ctx:o}),tn.$set(Ui);const Ki={};b&2&&(Ki.$$scope={dirty:b,ctx:o}),on.$set(Ki);const qa={};b&2&&(qa.$$scope={dirty:b,ctx:o}),nn.$set(qa);const Qi={};b&2&&(Qi.$$scope={dirty:b,ctx:o}),an.$set(Qi);const Gi={};b&2&&(Gi.$$scope={dirty:b,ctx:o}),rn.$set(Gi);const Vi={};b&2&&(Vi.$$scope={dirty:b,ctx:o}),ln.$set(Vi);const Ct={};b&2&&(Ct.$$scope={dirty:b,ctx:o}),cn.$set(Ct);const Pt={};b&2&&(Pt.$$scope={dirty:b,ctx:o}),pn.$set(Pt);const Ji={};b&2&&(Ji.$$scope={dirty:b,ctx:o}),hn.$set(Ji);const Xi={};b&2&&(Xi.$$scope={dirty:b,ctx:o}),un.$set(Xi);const Yi={};b&2&&(Yi.$$scope={dirty:b,ctx:o}),gn.$set(Yi);const xo={};b&2&&(xo.$$scope={dirty:b,ctx:o}),_n.$set(xo);const Zi={};b&2&&(Zi.$$scope={dirty:b,ctx:o}),bn.$set(Zi);const el={};b&2&&(el.$$scope={dirty:b,ctx:o}),wn.$set(el);const xa={};b&2&&(xa.$$scope={dirty:b,ctx:o}),Tn.$set(xa);const tl={};b&2&&(tl.$$scope={dirty:b,ctx:o}),yn.$set(tl);const ol={};b&2&&(ol.$$scope={dirty:b,ctx:o}),$n.$set(ol);const nl={};b&2&&(nl.$$scope={dirty:b,ctx:o}),Dn.$set(nl);const _e={};b&2&&(_e.$$scope={dirty:b,ctx:o}),En.$set(_e);const sl={};b&2&&(sl.$$scope={dirty:b,ctx:o}),Fn.$set(sl);const al={};b&2&&(al.$$scope={dirty:b,ctx:o}),qn.$set(al);const za={};b&2&&(za.$$scope={dirty:b,ctx:o}),zn.$set(za);const rl={};b&2&&(rl.$$scope={dirty:b,ctx:o}),jn.$set(rl);const ja={};b&2&&(ja.$$scope={dirty:b,ctx:o}),Mn.$set(ja);const il={};b&2&&(il.$$scope={dirty:b,ctx:o}),Cn.$set(il)},i(o){Al||(v(l.$$.fragment,o),v(F.$$.fragment,o),v(ee.$$.fragment,o),v(k.$$.fragment,o),v(zo.$$.fragment,o),v(Sn.$$.fragment,o),v(Nn.$$.fragment,o),v(Mo.$$.fragment,o),v(Co.$$.fragment,o),v(Un.$$.fragment,o),v(Qn.$$.fragment,o),v(Gn.$$.fragment,o),v(Bo.$$.fragment,o),v(Vn.$$.fragment,o),v(Jn.$$.fragment,o),v(Xn.$$.fragment,o),v(Lo.$$.fragment,o),v(Ro.$$.fragment,o),v(ts.$$.fragment,o),v(ns.$$.fragment,o),v(Oo.$$.fragment,o),v(ss.$$.fragment,o),v(as.$$.fragment,o),v(cs.$$.fragment,o),v(So.$$.fragment,o),v(No.$$.fragment,o),v(ps.$$.fragment,o),v(hs.$$.fragment,o),v(ms.$$.fragment,o),v(fs.$$.fragment,o),v(bs.$$.fragment,o),v(Uo.$$.fragment,o),v(Ko.$$.fragment,o),v(Qo.$$.fragment,o),v(ks.$$.fragment,o),v(ws.$$.fragment,o),v(Ds.$$.fragment,o),v(Vo.$$.fragment,o),v(Jo.$$.fragment,o),v(Xo.$$.fragment,o),v(Yo.$$.fragment,o),v(Zo.$$.fragment,o),v(Es.$$.fragment,o),v(Fs.$$.fragment,o),v(Ms.$$.fragment,o),v(tn.$$.fragment,o),v(on.$$.fragment,o),v(nn.$$.fragment,o),v(Cs.$$.fragment,o),v(Ps.$$.fragment,o),v(Os.$$.fragment,o),v(an.$$.fragment,o),v(rn.$$.fragment,o),v(ln.$$.fragment,o),v(Is.$$.fragment,o),v(Ss.$$.fragment,o),v(cn.$$.fragment,o),v(Ks.$$.fragment,o),v(pn.$$.fragment,o),v(hn.$$.fragment,o),v(Qs.$$.fragment,o),v(Gs.$$.fragment,o),v(Vs.$$.fragment,o),v(Xs.$$.fragment,o),v(Ys.$$.fragment,o),v(un.$$.fragment,o),v(oa.$$.fragment,o),v(gn.$$.fragment,o),v(_n.$$.fragment,o),v(bn.$$.fragment,o),v(na.$$.fragment,o),v(sa.$$.fragment,o),v(wn.$$.fragment,o),v(da.$$.fragment,o),v(Tn.$$.fragment,o),v(yn.$$.fragment,o),v($n.$$.fragment,o),v(ca.$$.fragment,o),v(pa.$$.fragment,o),v(Dn.$$.fragment,o),v(ga.$$.fragment,o),v(En.$$.fragment,o),v(Fn.$$.fragment,o),v(qn.$$.fragment,o),v(_a.$$.fragment,o),v(ba.$$.fragment,o),v(zn.$$.fragment,o),v($a.$$.fragment,o),v(jn.$$.fragment,o),v(Mn.$$.fragment,o),v(Cn.$$.fragment,o),Al=!0)},o(o){D(l.$$.fragment,o),D(F.$$.fragment,o),D(ee.$$.fragment,o),D(k.$$.fragment,o),D(zo.$$.fragment,o),D(Sn.$$.fragment,o),D(Nn.$$.fragment,o),D(Mo.$$.fragment,o),D(Co.$$.fragment,o),D(Un.$$.fragment,o),D(Qn.$$.fragment,o),D(Gn.$$.fragment,o),D(Bo.$$.fragment,o),D(Vn.$$.fragment,o),D(Jn.$$.fragment,o),D(Xn.$$.fragment,o),D(Lo.$$.fragment,o),D(Ro.$$.fragment,o),D(ts.$$.fragment,o),D(ns.$$.fragment,o),D(Oo.$$.fragment,o),D(ss.$$.fragment,o),D(as.$$.fragment,o),D(cs.$$.fragment,o),D(So.$$.fragment,o),D(No.$$.fragment,o),D(ps.$$.fragment,o),D(hs.$$.fragment,o),D(ms.$$.fragment,o),D(fs.$$.fragment,o),D(bs.$$.fragment,o),D(Uo.$$.fragment,o),D(Ko.$$.fragment,o),D(Qo.$$.fragment,o),D(ks.$$.fragment,o),D(ws.$$.fragment,o),D(Ds.$$.fragment,o),D(Vo.$$.fragment,o),D(Jo.$$.fragment,o),D(Xo.$$.fragment,o),D(Yo.$$.fragment,o),D(Zo.$$.fragment,o),D(Es.$$.fragment,o),D(Fs.$$.fragment,o),D(Ms.$$.fragment,o),D(tn.$$.fragment,o),D(on.$$.fragment,o),D(nn.$$.fragment,o),D(Cs.$$.fragment,o),D(Ps.$$.fragment,o),D(Os.$$.fragment,o),D(an.$$.fragment,o),D(rn.$$.fragment,o),D(ln.$$.fragment,o),D(Is.$$.fragment,o),D(Ss.$$.fragment,o),D(cn.$$.fragment,o),D(Ks.$$.fragment,o),D(pn.$$.fragment,o),D(hn.$$.fragment,o),D(Qs.$$.fragment,o),D(Gs.$$.fragment,o),D(Vs.$$.fragment,o),D(Xs.$$.fragment,o),D(Ys.$$.fragment,o),D(un.$$.fragment,o),D(oa.$$.fragment,o),D(gn.$$.fragment,o),D(_n.$$.fragment,o),D(bn.$$.fragment,o),D(na.$$.fragment,o),D(sa.$$.fragment,o),D(wn.$$.fragment,o),D(da.$$.fragment,o),D(Tn.$$.fragment,o),D(yn.$$.fragment,o),D($n.$$.fragment,o),D(ca.$$.fragment,o),D(pa.$$.fragment,o),D(Dn.$$.fragment,o),D(ga.$$.fragment,o),D(En.$$.fragment,o),D(Fn.$$.fragment,o),D(qn.$$.fragment,o),D(_a.$$.fragment,o),D(ba.$$.fragment,o),D(zn.$$.fragment,o),D($a.$$.fragment,o),D(jn.$$.fragment,o),D(Mn.$$.fragment,o),D(Cn.$$.fragment,o),Al=!1},d(o){t(d),o&&t(u),o&&t(c),E(l),o&&t(V),o&&t(L),E(F),o&&t(Te),o&&t(I),o&&t(ye),o&&t(U),o&&t($e),o&&t(K),o&&t(ve),o&&t(ne),o&&t(De),o&&t(R),o&&t(O),o&&t(re),E(ee),o&&t(Ee),o&&t(Y),E(k),E(zo),o&&t(ll),o&&t(Jt),E(Sn),o&&t(dl),o&&t(he),E(Nn),E(Mo),E(Co),E(Un),E(Qn),E(Gn),E(Bo),E(Vn),o&&t(cl),o&&t(Zt),E(Jn),o&&t(pl),o&&t(Se),E(Xn),E(Lo),E(Ro),E(ts),E(ns),E(Oo),o&&t(hl),o&&t(to),E(ss),o&&t(ml),o&&t(wt),E(as),E(cs),E(So),E(No),o&&t(fl),o&&t(no),E(ps),o&&t(ul),o&&t(so),E(hs),o&&t(gl),o&&t(ao),E(ms),o&&t(_l),o&&t(Tt),E(fs),E(bs),E(Uo),E(Ko),E(Qo),o&&t(bl),o&&t(lo),E(ks),o&&t(kl),o&&t(it),E(ws),E(Ds),E(Vo),E(Jo),E(Xo),E(Yo),E(Zo),o&&t(wl),o&&t(po),E(Es),o&&t(Tl),o&&t(lt),E(Fs),E(Ms),E(tn),E(on),E(nn),o&&t(yl),o&&t(mo),E(Cs),o&&t($l),o&&t(dt),E(Ps),E(Os),E(an),E(rn),E(ln),o&&t(vl),o&&t(go),E(Is),o&&t(Dl),o&&t(ct),E(Ss),E(cn),E(Ks),E(pn),E(hn),o&&t(El),o&&t(bo),E(Qs),o&&t(Fl),o&&t(jt),E(Gs),E(Vs),o&&t(ql),o&&t(ko),E(Xs),o&&t(xl),o&&t(pt),E(Ys),E(un),E(oa),E(gn),E(_n),E(bn),o&&t(zl),o&&t(yo),E(na),o&&t(jl),o&&t(ot),E(sa),E(wn),E(da),E(Tn),E(yn),E($n),o&&t(Ml),o&&t(vo),E(ca),o&&t(Cl),o&&t(nt),E(pa),E(Dn),E(ga),E(En),E(Fn),E(qn),o&&t(Pl),o&&t(Eo),E(_a),o&&t(Bl),o&&t(st),E(ba),E(zn),E($a),E(jn),E(Mn),E(Cn)}}}const jb={local:"deberta",sections:[{local:"overview",title:"Overview"},{local:"transformers.DebertaConfig",title:"DebertaConfig"},{local:"transformers.DebertaTokenizer",title:"DebertaTokenizer"},{local:"transformers.DebertaTokenizerFast",title:"DebertaTokenizerFast"},{local:"transformers.DebertaModel",title:"DebertaModel"},{local:"transformers.DebertaPreTrainedModel",title:"DebertaPreTrainedModel"},{local:"transformers.DebertaForMaskedLM",title:"DebertaForMaskedLM"},{local:"transformers.DebertaForSequenceClassification",title:"DebertaForSequenceClassification"},{local:"transformers.DebertaForTokenClassification",title:"DebertaForTokenClassification"},{local:"transformers.DebertaForQuestionAnswering",title:"DebertaForQuestionAnswering"},{local:"transformers.TFDebertaModel",title:"TFDebertaModel"},{local:"transformers.TFDebertaPreTrainedModel",title:"TFDebertaPreTrainedModel"},{local:"transformers.TFDebertaForMaskedLM",title:"TFDebertaForMaskedLM"},{local:"transformers.TFDebertaForSequenceClassification",title:"TFDebertaForSequenceClassification"},{local:"transformers.TFDebertaForTokenClassification",title:"TFDebertaForTokenClassification"},{local:"transformers.TFDebertaForQuestionAnswering",title:"TFDebertaForQuestionAnswering"}],title:"DeBERTa"};function Mb(q){return S_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ob extends L_{constructor(d){super();R_(this,d,Mb,zb,O_,{})}}export{Ob as default,jb as metadata};
