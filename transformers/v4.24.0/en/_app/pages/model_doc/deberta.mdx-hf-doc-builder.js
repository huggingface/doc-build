import{S as L_,i as R_,s as O_,e as a,k as h,w as T,t as n,M as I_,c as r,d as t,m as f,a as i,x as v,h as s,b as g,G as e,g as _,y,q as $,o as D,B as E,v as S_,L as ke}from"../../chunks/vendor-hf-doc-builder.js";import{T as at}from"../../chunks/Tip-hf-doc-builder.js";import{D as te}from"../../chunks/Docstring-hf-doc-builder.js";import{C as we}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as rt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as be}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function N_(q){let d,u,c,m,w;return m=new we({props:{code:`from transformers import DebertaConfig, DebertaModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),u=n("Example:"),c=h(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Example:"),p.forEach(t),c=f(l),v(m.$$.fragment,l)},m(l,p){_(l,d,p),e(d,u),_(l,c,p),y(m,l,p),w=!0},p:ke,i(l){w||($(m.$$.fragment,l),w=!0)},o(l){D(m.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function W_(q){let d,u,c,m,w;return m=new we({props:{code:`from transformers import DebertaTokenizer
tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[15496, 995]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[18435, 995]`}}),{c(){d=a("p"),u=n("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c=h(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),p.forEach(t),c=f(l),v(m.$$.fragment,l)},m(l,p){_(l,d,p),e(d,u),_(l,c,p),y(m,l,p),w=!0},p:ke,i(l){w||($(m.$$.fragment,l),w=!0)},o(l){D(m.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function H_(q){let d,u,c,m,w;return{c(){d=a("p"),u=n("When used with "),c=a("code"),m=n("is_split_into_words=True"),w=n(", this tokenizer will add a space before each word (even the first one).")},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"When used with "),c=r(p,"CODE",{});var z=i(c);m=s(z,"is_split_into_words=True"),z.forEach(t),w=s(p,", this tokenizer will add a space before each word (even the first one)."),p.forEach(t)},m(l,p){_(l,d,p),e(d,u),e(d,c),e(c,m),e(d,w)},d(l){l&&t(d)}}}function U_(q){let d,u,c,m,w;return m=new we({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=a("p"),u=n("sequence pair mask has the following format:"),c=h(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"sequence pair mask has the following format:"),p.forEach(t),c=f(l),v(m.$$.fragment,l)},m(l,p){_(l,d,p),e(d,u),_(l,c,p),y(m,l,p),w=!0},p:ke,i(l){w||($(m.$$.fragment,l),w=!0)},o(l){D(m.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function K_(q){let d,u,c,m,w;return m=new we({props:{code:`from transformers import DebertaTokenizerFast
tokenizer = DebertaTokenizerFast.from_pretrained("microsoft/deberta-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = DebertaTokenizerFast.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[15496, 995]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[18435, 995]`}}),{c(){d=a("p"),u=n("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c=h(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),p.forEach(t),c=f(l),v(m.$$.fragment,l)},m(l,p){_(l,d,p),e(d,u),_(l,c,p),y(m,l,p),w=!0},p:ke,i(l){w||($(m.$$.fragment,l),w=!0)},o(l){D(m.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function Q_(q){let d,u,c,m,w,l,p,z;return{c(){d=a("p"),u=n("When used with "),c=a("code"),m=n("is_split_into_words=True"),w=n(", this tokenizer needs to be instantiated with "),l=a("code"),p=n("add_prefix_space=True"),z=n(".")},l(ae){d=r(ae,"P",{});var V=i(d);u=s(V,"When used with "),c=r(V,"CODE",{});var L=i(c);m=s(L,"is_split_into_words=True"),L.forEach(t),w=s(V,", this tokenizer needs to be instantiated with "),l=r(V,"CODE",{});var oe=i(l);p=s(oe,"add_prefix_space=True"),oe.forEach(t),z=s(V,"."),V.forEach(t)},m(ae,V){_(ae,d,V),e(d,u),e(d,c),e(c,m),e(d,w),e(d,l),e(l,p),e(d,z)},d(ae){ae&&t(d)}}}function G_(q){let d,u,c,m,w;return m=new we({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=a("p"),u=n("sequence pair mask has the following format:"),c=h(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"sequence pair mask has the following format:"),p.forEach(t),c=f(l),v(m.$$.fragment,l)},m(l,p){_(l,d,p),e(d,u),_(l,c,p),y(m,l,p),w=!0},p:ke,i(l){w||($(m.$$.fragment,l),w=!0)},o(l){D(m.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function V_(q){let d,u,c,m,w;return{c(){d=a("p"),u=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var z=i(c);m=s(z,"Module"),z.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,u),e(d,c),e(c,m),e(d,w)},d(l){l&&t(d)}}}function J_(q){let d,u,c,m,w;return m=new we({props:{code:`from transformers import DebertaTokenizer, DebertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),u=n("Example:"),c=h(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Example:"),p.forEach(t),c=f(l),v(m.$$.fragment,l)},m(l,p){_(l,d,p),e(d,u),_(l,c,p),y(m,l,p),w=!0},p:ke,i(l){w||($(m.$$.fragment,l),w=!0)},o(l){D(m.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function X_(q){let d,u,c,m,w;return{c(){d=a("p"),u=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var z=i(c);m=s(z,"Module"),z.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,u),e(d,c),e(c,m),e(d,w)},d(l){l&&t(d)}}}function Y_(q){let d,u,c,m,w;return m=new we({props:{code:`from transformers import DebertaTokenizer, DebertaForMaskedLM
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
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){d=a("p"),u=n("Example:"),c=h(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Example:"),p.forEach(t),c=f(l),v(m.$$.fragment,l)},m(l,p){_(l,d,p),e(d,u),_(l,c,p),y(m,l,p),w=!0},p:ke,i(l){w||($(m.$$.fragment,l),w=!0)},o(l){D(m.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function Z_(q){let d,u;return d=new we({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.54</span>`}}),{c(){T(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,m){y(d,c,m),u=!0},p:ke,i(c){u||($(d.$$.fragment,c),u=!0)},o(c){D(d.$$.fragment,c),u=!1},d(c){E(d,c)}}}function eb(q){let d,u,c,m,w;return{c(){d=a("p"),u=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var z=i(c);m=s(z,"Module"),z.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,u),e(d,c),e(c,m),e(d,w)},d(l){l&&t(d)}}}function tb(q){let d,u,c,m,w;return m=new we({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=a("p"),u=n("Example of single-label classification:"),c=h(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Example of single-label classification:"),p.forEach(t),c=f(l),v(m.$$.fragment,l)},m(l,p){_(l,d,p),e(d,u),_(l,c,p),y(m,l,p),w=!0},p:ke,i(l){w||($(m.$$.fragment,l),w=!0)},o(l){D(m.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function ob(q){let d,u;return d=new we({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = DebertaForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-deberta", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-deberta&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.69</span>`}}),{c(){T(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,m){y(d,c,m),u=!0},p:ke,i(c){u||($(d.$$.fragment,c),u=!0)},o(c){D(d.$$.fragment,c),u=!1},d(c){E(d,c)}}}function nb(q){let d,u,c,m,w;return m=new we({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){d=a("p"),u=n("Example of multi-label classification:"),c=h(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Example of multi-label classification:"),p.forEach(t),c=f(l),v(m.$$.fragment,l)},m(l,p){_(l,d,p),e(d,u),_(l,c,p),y(m,l,p),w=!0},p:ke,i(l){w||($(m.$$.fragment,l),w=!0)},o(l){D(m.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function sb(q){let d,u;return d=new we({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,m){y(d,c,m),u=!0},p:ke,i(c){u||($(d.$$.fragment,c),u=!0)},o(c){D(d.$$.fragment,c),u=!1},d(c){E(d,c)}}}function ab(q){let d,u,c,m,w;return{c(){d=a("p"),u=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var z=i(c);m=s(z,"Module"),z.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,u),e(d,c),e(c,m),e(d,w)},d(l){l&&t(d)}}}function rb(q){let d,u,c,m,w;return m=new we({props:{code:`from transformers import DebertaTokenizer, DebertaForTokenClassification
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
[<span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>, <span class="hljs-string">&#x27;LABEL_0&#x27;</span>]`}}),{c(){d=a("p"),u=n("Example:"),c=h(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Example:"),p.forEach(t),c=f(l),v(m.$$.fragment,l)},m(l,p){_(l,d,p),e(d,u),_(l,c,p),y(m,l,p),w=!0},p:ke,i(l){w||($(m.$$.fragment,l),w=!0)},o(l){D(m.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function ib(q){let d,u;return d=new we({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.04</span>`}}),{c(){T(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,m){y(d,c,m),u=!0},p:ke,i(c){u||($(d.$$.fragment,c),u=!0)},o(c){D(d.$$.fragment,c),u=!1},d(c){E(d,c)}}}function lb(q){let d,u,c,m,w;return{c(){d=a("p"),u=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var z=i(c);m=s(z,"Module"),z.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,u),e(d,c),e(c,m),e(d,w)},d(l){l&&t(d)}}}function db(q){let d,u,c,m,w;return m=new we({props:{code:`from transformers import DebertaTokenizer, DebertaForQuestionAnswering
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
<span class="hljs-string">&#x27; a nice puppet&#x27;</span>`}}),{c(){d=a("p"),u=n("Example:"),c=h(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Example:"),p.forEach(t),c=f(l),v(m.$$.fragment,l)},m(l,p){_(l,d,p),e(d,u),_(l,c,p),y(m,l,p),w=!0},p:ke,i(l){w||($(m.$$.fragment,l),w=!0)},o(l){D(m.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function cb(q){let d,u;return d=new we({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.14</span>`}}),{c(){T(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,m){y(d,c,m),u=!0},p:ke,i(c){u||($(d.$$.fragment,c),u=!0)},o(c){D(d.$$.fragment,c),u=!1},d(c){E(d,c)}}}function pb(q){let d,u,c,m,w,l,p,z,ae,V,L,oe,se,F,qe,G,xe,Te,I,ze,de,J,je,ve,U,Me,ye,K,Ce,$e,ne,M,C,ce,X,Pe,De,R,Be,pe,P,Ae,W,Le,Re,H,Oe,Ie,O,re,S,ue,ee,B,ge,A,Ee,Y;return{c(){d=a("p"),u=n("TensorFlow models and layers in "),c=a("code"),m=n("transformers"),w=n(" accept two formats as input:"),l=h(),p=a("ul"),z=a("li"),ae=n("having all inputs as keyword arguments (like PyTorch models), or"),V=h(),L=a("li"),oe=n("having all inputs as a list, tuple or dict in the first positional argument."),se=h(),F=a("p"),qe=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=a("code"),xe=n("model.fit()"),Te=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),ze=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),je=n("fit()"),ve=n(" and "),U=a("code"),Me=n("predict()"),ye=n(`, such as when creating your own layers or models with
the Keras `),K=a("code"),Ce=n("Functional"),$e=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=h(),M=a("ul"),C=a("li"),ce=n("a single Tensor with "),X=a("code"),Pe=n("input_ids"),De=n(" only and nothing else: "),R=a("code"),Be=n("model(input_ids)"),pe=h(),P=a("li"),Ae=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a("code"),Le=n("model([input_ids, attention_mask])"),Re=n(" or "),H=a("code"),Oe=n("model([input_ids, attention_mask, token_type_ids])"),Ie=h(),O=a("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ue=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),B=a("p"),ge=n(`Note that when creating models and layers with
`),A=a("a"),Ee=n("subclassing"),Y=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=r(k,"P",{});var x=i(d);u=s(x,"TensorFlow models and layers in "),c=r(x,"CODE",{});var fe=i(c);m=s(fe,"transformers"),fe.forEach(t),w=s(x," accept two formats as input:"),x.forEach(t),l=f(k),p=r(k,"UL",{});var ie=i(p);z=r(ie,"LI",{});var We=i(z);ae=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),V=f(ie),L=r(ie,"LI",{});var Ue=i(L);oe=s(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(t),ie.forEach(t),se=f(k),F=r(k,"P",{});var j=i(F);qe=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=r(j,"CODE",{});var He=i(G);xe=s(He,"model.fit()"),He.forEach(t),Te=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(j,"CODE",{});var Ke=i(I);ze=s(Ke,"model.fit()"),Ke.forEach(t),de=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(j,"CODE",{});var Qe=i(J);je=s(Qe,"fit()"),Qe.forEach(t),ve=s(j," and "),U=r(j,"CODE",{});var Ne=i(U);Me=s(Ne,"predict()"),Ne.forEach(t),ye=s(j,`, such as when creating your own layers or models with
the Keras `),K=r(j,"CODE",{});var Ge=i(K);Ce=s(Ge,"Functional"),Ge.forEach(t),$e=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),ne=f(k),M=r(k,"UL",{});var N=i(M);C=r(N,"LI",{});var Z=i(C);ce=s(Z,"a single Tensor with "),X=r(Z,"CODE",{});var Fe=i(X);Pe=s(Fe,"input_ids"),Fe.forEach(t),De=s(Z," only and nothing else: "),R=r(Z,"CODE",{});var Ve=i(R);Be=s(Ve,"model(input_ids)"),Ve.forEach(t),Z.forEach(t),pe=f(N),P=r(N,"LI",{});var Q=i(P);Ae=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r(Q,"CODE",{});var Je=i(W);Le=s(Je,"model([input_ids, attention_mask])"),Je.forEach(t),Re=s(Q," or "),H=r(Q,"CODE",{});var Xe=i(H);Oe=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Q.forEach(t),Ie=f(N),O=r(N,"LI",{});var me=i(O);re=s(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(me,"CODE",{});var Ye=i(S);ue=s(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(t),me.forEach(t),N.forEach(t),ee=f(k),B=r(k,"P",{});var le=i(B);ge=s(le,`Note that when creating models and layers with
`),A=r(le,"A",{href:!0,rel:!0});var Ze=i(A);Ee=s(Ze,"subclassing"),Ze.forEach(t),Y=s(le,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),le.forEach(t),this.h()},h(){g(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(A,"rel","nofollow")},m(k,x){_(k,d,x),e(d,u),e(d,c),e(c,m),e(d,w),_(k,l,x),_(k,p,x),e(p,z),e(z,ae),e(p,V),e(p,L),e(L,oe),_(k,se,x),_(k,F,x),e(F,qe),e(F,G),e(G,xe),e(F,Te),e(F,I),e(I,ze),e(F,de),e(F,J),e(J,je),e(F,ve),e(F,U),e(U,Me),e(F,ye),e(F,K),e(K,Ce),e(F,$e),_(k,ne,x),_(k,M,x),e(M,C),e(C,ce),e(C,X),e(X,Pe),e(C,De),e(C,R),e(R,Be),e(M,pe),e(M,P),e(P,Ae),e(P,W),e(W,Le),e(P,Re),e(P,H),e(H,Oe),e(M,Ie),e(M,O),e(O,re),e(O,S),e(S,ue),_(k,ee,x),_(k,B,x),e(B,ge),e(B,A),e(A,Ee),e(B,Y)},d(k){k&&t(d),k&&t(l),k&&t(p),k&&t(se),k&&t(F),k&&t(ne),k&&t(M),k&&t(ee),k&&t(B)}}}function hb(q){let d,u,c,m,w;return{c(){d=a("p"),u=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var z=i(c);m=s(z,"Module"),z.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,u),e(d,c),e(c,m),e(d,w)},d(l){l&&t(d)}}}function fb(q){let d,u,c,m,w;return m=new we({props:{code:`from transformers import DebertaTokenizer, TFDebertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),u=n("Example:"),c=h(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Example:"),p.forEach(t),c=f(l),v(m.$$.fragment,l)},m(l,p){_(l,d,p),e(d,u),_(l,c,p),y(m,l,p),w=!0},p:ke,i(l){w||($(m.$$.fragment,l),w=!0)},o(l){D(m.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function mb(q){let d,u,c,m,w,l,p,z,ae,V,L,oe,se,F,qe,G,xe,Te,I,ze,de,J,je,ve,U,Me,ye,K,Ce,$e,ne,M,C,ce,X,Pe,De,R,Be,pe,P,Ae,W,Le,Re,H,Oe,Ie,O,re,S,ue,ee,B,ge,A,Ee,Y;return{c(){d=a("p"),u=n("TensorFlow models and layers in "),c=a("code"),m=n("transformers"),w=n(" accept two formats as input:"),l=h(),p=a("ul"),z=a("li"),ae=n("having all inputs as keyword arguments (like PyTorch models), or"),V=h(),L=a("li"),oe=n("having all inputs as a list, tuple or dict in the first positional argument."),se=h(),F=a("p"),qe=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=a("code"),xe=n("model.fit()"),Te=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),ze=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),je=n("fit()"),ve=n(" and "),U=a("code"),Me=n("predict()"),ye=n(`, such as when creating your own layers or models with
the Keras `),K=a("code"),Ce=n("Functional"),$e=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=h(),M=a("ul"),C=a("li"),ce=n("a single Tensor with "),X=a("code"),Pe=n("input_ids"),De=n(" only and nothing else: "),R=a("code"),Be=n("model(input_ids)"),pe=h(),P=a("li"),Ae=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a("code"),Le=n("model([input_ids, attention_mask])"),Re=n(" or "),H=a("code"),Oe=n("model([input_ids, attention_mask, token_type_ids])"),Ie=h(),O=a("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ue=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),B=a("p"),ge=n(`Note that when creating models and layers with
`),A=a("a"),Ee=n("subclassing"),Y=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=r(k,"P",{});var x=i(d);u=s(x,"TensorFlow models and layers in "),c=r(x,"CODE",{});var fe=i(c);m=s(fe,"transformers"),fe.forEach(t),w=s(x," accept two formats as input:"),x.forEach(t),l=f(k),p=r(k,"UL",{});var ie=i(p);z=r(ie,"LI",{});var We=i(z);ae=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),V=f(ie),L=r(ie,"LI",{});var Ue=i(L);oe=s(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(t),ie.forEach(t),se=f(k),F=r(k,"P",{});var j=i(F);qe=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=r(j,"CODE",{});var He=i(G);xe=s(He,"model.fit()"),He.forEach(t),Te=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(j,"CODE",{});var Ke=i(I);ze=s(Ke,"model.fit()"),Ke.forEach(t),de=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(j,"CODE",{});var Qe=i(J);je=s(Qe,"fit()"),Qe.forEach(t),ve=s(j," and "),U=r(j,"CODE",{});var Ne=i(U);Me=s(Ne,"predict()"),Ne.forEach(t),ye=s(j,`, such as when creating your own layers or models with
the Keras `),K=r(j,"CODE",{});var Ge=i(K);Ce=s(Ge,"Functional"),Ge.forEach(t),$e=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),ne=f(k),M=r(k,"UL",{});var N=i(M);C=r(N,"LI",{});var Z=i(C);ce=s(Z,"a single Tensor with "),X=r(Z,"CODE",{});var Fe=i(X);Pe=s(Fe,"input_ids"),Fe.forEach(t),De=s(Z," only and nothing else: "),R=r(Z,"CODE",{});var Ve=i(R);Be=s(Ve,"model(input_ids)"),Ve.forEach(t),Z.forEach(t),pe=f(N),P=r(N,"LI",{});var Q=i(P);Ae=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r(Q,"CODE",{});var Je=i(W);Le=s(Je,"model([input_ids, attention_mask])"),Je.forEach(t),Re=s(Q," or "),H=r(Q,"CODE",{});var Xe=i(H);Oe=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Q.forEach(t),Ie=f(N),O=r(N,"LI",{});var me=i(O);re=s(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(me,"CODE",{});var Ye=i(S);ue=s(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(t),me.forEach(t),N.forEach(t),ee=f(k),B=r(k,"P",{});var le=i(B);ge=s(le,`Note that when creating models and layers with
`),A=r(le,"A",{href:!0,rel:!0});var Ze=i(A);Ee=s(Ze,"subclassing"),Ze.forEach(t),Y=s(le,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),le.forEach(t),this.h()},h(){g(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(A,"rel","nofollow")},m(k,x){_(k,d,x),e(d,u),e(d,c),e(c,m),e(d,w),_(k,l,x),_(k,p,x),e(p,z),e(z,ae),e(p,V),e(p,L),e(L,oe),_(k,se,x),_(k,F,x),e(F,qe),e(F,G),e(G,xe),e(F,Te),e(F,I),e(I,ze),e(F,de),e(F,J),e(J,je),e(F,ve),e(F,U),e(U,Me),e(F,ye),e(F,K),e(K,Ce),e(F,$e),_(k,ne,x),_(k,M,x),e(M,C),e(C,ce),e(C,X),e(X,Pe),e(C,De),e(C,R),e(R,Be),e(M,pe),e(M,P),e(P,Ae),e(P,W),e(W,Le),e(P,Re),e(P,H),e(H,Oe),e(M,Ie),e(M,O),e(O,re),e(O,S),e(S,ue),_(k,ee,x),_(k,B,x),e(B,ge),e(B,A),e(A,Ee),e(B,Y)},d(k){k&&t(d),k&&t(l),k&&t(p),k&&t(se),k&&t(F),k&&t(ne),k&&t(M),k&&t(ee),k&&t(B)}}}function ub(q){let d,u,c,m,w;return{c(){d=a("p"),u=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var z=i(c);m=s(z,"Module"),z.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,u),e(d,c),e(c,m),e(d,w)},d(l){l&&t(d)}}}function gb(q){let d,u,c,m,w;return m=new we({props:{code:`from transformers import DebertaTokenizer, TFDebertaForMaskedLM
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
`}}),{c(){d=a("p"),u=n("Example:"),c=h(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Example:"),p.forEach(t),c=f(l),v(m.$$.fragment,l)},m(l,p){_(l,d,p),e(d,u),_(l,c,p),y(m,l,p),w=!0},p:ke,i(l){w||($(m.$$.fragment,l),w=!0)},o(l){D(m.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function _b(q){let d,u;return d=new we({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,m){y(d,c,m),u=!0},p:ke,i(c){u||($(d.$$.fragment,c),u=!0)},o(c){D(d.$$.fragment,c),u=!1},d(c){E(d,c)}}}function bb(q){let d,u,c,m,w,l,p,z,ae,V,L,oe,se,F,qe,G,xe,Te,I,ze,de,J,je,ve,U,Me,ye,K,Ce,$e,ne,M,C,ce,X,Pe,De,R,Be,pe,P,Ae,W,Le,Re,H,Oe,Ie,O,re,S,ue,ee,B,ge,A,Ee,Y;return{c(){d=a("p"),u=n("TensorFlow models and layers in "),c=a("code"),m=n("transformers"),w=n(" accept two formats as input:"),l=h(),p=a("ul"),z=a("li"),ae=n("having all inputs as keyword arguments (like PyTorch models), or"),V=h(),L=a("li"),oe=n("having all inputs as a list, tuple or dict in the first positional argument."),se=h(),F=a("p"),qe=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=a("code"),xe=n("model.fit()"),Te=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),ze=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),je=n("fit()"),ve=n(" and "),U=a("code"),Me=n("predict()"),ye=n(`, such as when creating your own layers or models with
the Keras `),K=a("code"),Ce=n("Functional"),$e=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=h(),M=a("ul"),C=a("li"),ce=n("a single Tensor with "),X=a("code"),Pe=n("input_ids"),De=n(" only and nothing else: "),R=a("code"),Be=n("model(input_ids)"),pe=h(),P=a("li"),Ae=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a("code"),Le=n("model([input_ids, attention_mask])"),Re=n(" or "),H=a("code"),Oe=n("model([input_ids, attention_mask, token_type_ids])"),Ie=h(),O=a("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ue=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),B=a("p"),ge=n(`Note that when creating models and layers with
`),A=a("a"),Ee=n("subclassing"),Y=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=r(k,"P",{});var x=i(d);u=s(x,"TensorFlow models and layers in "),c=r(x,"CODE",{});var fe=i(c);m=s(fe,"transformers"),fe.forEach(t),w=s(x," accept two formats as input:"),x.forEach(t),l=f(k),p=r(k,"UL",{});var ie=i(p);z=r(ie,"LI",{});var We=i(z);ae=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),V=f(ie),L=r(ie,"LI",{});var Ue=i(L);oe=s(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(t),ie.forEach(t),se=f(k),F=r(k,"P",{});var j=i(F);qe=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=r(j,"CODE",{});var He=i(G);xe=s(He,"model.fit()"),He.forEach(t),Te=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(j,"CODE",{});var Ke=i(I);ze=s(Ke,"model.fit()"),Ke.forEach(t),de=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(j,"CODE",{});var Qe=i(J);je=s(Qe,"fit()"),Qe.forEach(t),ve=s(j," and "),U=r(j,"CODE",{});var Ne=i(U);Me=s(Ne,"predict()"),Ne.forEach(t),ye=s(j,`, such as when creating your own layers or models with
the Keras `),K=r(j,"CODE",{});var Ge=i(K);Ce=s(Ge,"Functional"),Ge.forEach(t),$e=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),ne=f(k),M=r(k,"UL",{});var N=i(M);C=r(N,"LI",{});var Z=i(C);ce=s(Z,"a single Tensor with "),X=r(Z,"CODE",{});var Fe=i(X);Pe=s(Fe,"input_ids"),Fe.forEach(t),De=s(Z," only and nothing else: "),R=r(Z,"CODE",{});var Ve=i(R);Be=s(Ve,"model(input_ids)"),Ve.forEach(t),Z.forEach(t),pe=f(N),P=r(N,"LI",{});var Q=i(P);Ae=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r(Q,"CODE",{});var Je=i(W);Le=s(Je,"model([input_ids, attention_mask])"),Je.forEach(t),Re=s(Q," or "),H=r(Q,"CODE",{});var Xe=i(H);Oe=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Q.forEach(t),Ie=f(N),O=r(N,"LI",{});var me=i(O);re=s(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(me,"CODE",{});var Ye=i(S);ue=s(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(t),me.forEach(t),N.forEach(t),ee=f(k),B=r(k,"P",{});var le=i(B);ge=s(le,`Note that when creating models and layers with
`),A=r(le,"A",{href:!0,rel:!0});var Ze=i(A);Ee=s(Ze,"subclassing"),Ze.forEach(t),Y=s(le,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),le.forEach(t),this.h()},h(){g(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(A,"rel","nofollow")},m(k,x){_(k,d,x),e(d,u),e(d,c),e(c,m),e(d,w),_(k,l,x),_(k,p,x),e(p,z),e(z,ae),e(p,V),e(p,L),e(L,oe),_(k,se,x),_(k,F,x),e(F,qe),e(F,G),e(G,xe),e(F,Te),e(F,I),e(I,ze),e(F,de),e(F,J),e(J,je),e(F,ve),e(F,U),e(U,Me),e(F,ye),e(F,K),e(K,Ce),e(F,$e),_(k,ne,x),_(k,M,x),e(M,C),e(C,ce),e(C,X),e(X,Pe),e(C,De),e(C,R),e(R,Be),e(M,pe),e(M,P),e(P,Ae),e(P,W),e(W,Le),e(P,Re),e(P,H),e(H,Oe),e(M,Ie),e(M,O),e(O,re),e(O,S),e(S,ue),_(k,ee,x),_(k,B,x),e(B,ge),e(B,A),e(A,Ee),e(B,Y)},d(k){k&&t(d),k&&t(l),k&&t(p),k&&t(se),k&&t(F),k&&t(ne),k&&t(M),k&&t(ee),k&&t(B)}}}function kb(q){let d,u,c,m,w;return{c(){d=a("p"),u=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var z=i(c);m=s(z,"Module"),z.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,u),e(d,c),e(c,m),e(d,w)},d(l){l&&t(d)}}}function wb(q){let d,u,c,m,w;return m=new we({props:{code:`from transformers import DebertaTokenizer, TFDebertaForSequenceClassification
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
`}}),{c(){d=a("p"),u=n("Example:"),c=h(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Example:"),p.forEach(t),c=f(l),v(m.$$.fragment,l)},m(l,p){_(l,d,p),e(d,u),_(l,c,p),y(m,l,p),w=!0},p:ke,i(l){w||($(m.$$.fragment,l),w=!0)},o(l){D(m.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function Tb(q){let d,u;return d=new we({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){T(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,m){y(d,c,m),u=!0},p:ke,i(c){u||($(d.$$.fragment,c),u=!0)},o(c){D(d.$$.fragment,c),u=!1},d(c){E(d,c)}}}function vb(q){let d,u,c,m,w,l,p,z,ae,V,L,oe,se,F,qe,G,xe,Te,I,ze,de,J,je,ve,U,Me,ye,K,Ce,$e,ne,M,C,ce,X,Pe,De,R,Be,pe,P,Ae,W,Le,Re,H,Oe,Ie,O,re,S,ue,ee,B,ge,A,Ee,Y;return{c(){d=a("p"),u=n("TensorFlow models and layers in "),c=a("code"),m=n("transformers"),w=n(" accept two formats as input:"),l=h(),p=a("ul"),z=a("li"),ae=n("having all inputs as keyword arguments (like PyTorch models), or"),V=h(),L=a("li"),oe=n("having all inputs as a list, tuple or dict in the first positional argument."),se=h(),F=a("p"),qe=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=a("code"),xe=n("model.fit()"),Te=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),ze=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),je=n("fit()"),ve=n(" and "),U=a("code"),Me=n("predict()"),ye=n(`, such as when creating your own layers or models with
the Keras `),K=a("code"),Ce=n("Functional"),$e=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=h(),M=a("ul"),C=a("li"),ce=n("a single Tensor with "),X=a("code"),Pe=n("input_ids"),De=n(" only and nothing else: "),R=a("code"),Be=n("model(input_ids)"),pe=h(),P=a("li"),Ae=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a("code"),Le=n("model([input_ids, attention_mask])"),Re=n(" or "),H=a("code"),Oe=n("model([input_ids, attention_mask, token_type_ids])"),Ie=h(),O=a("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ue=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),B=a("p"),ge=n(`Note that when creating models and layers with
`),A=a("a"),Ee=n("subclassing"),Y=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=r(k,"P",{});var x=i(d);u=s(x,"TensorFlow models and layers in "),c=r(x,"CODE",{});var fe=i(c);m=s(fe,"transformers"),fe.forEach(t),w=s(x," accept two formats as input:"),x.forEach(t),l=f(k),p=r(k,"UL",{});var ie=i(p);z=r(ie,"LI",{});var We=i(z);ae=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),V=f(ie),L=r(ie,"LI",{});var Ue=i(L);oe=s(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(t),ie.forEach(t),se=f(k),F=r(k,"P",{});var j=i(F);qe=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=r(j,"CODE",{});var He=i(G);xe=s(He,"model.fit()"),He.forEach(t),Te=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(j,"CODE",{});var Ke=i(I);ze=s(Ke,"model.fit()"),Ke.forEach(t),de=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(j,"CODE",{});var Qe=i(J);je=s(Qe,"fit()"),Qe.forEach(t),ve=s(j," and "),U=r(j,"CODE",{});var Ne=i(U);Me=s(Ne,"predict()"),Ne.forEach(t),ye=s(j,`, such as when creating your own layers or models with
the Keras `),K=r(j,"CODE",{});var Ge=i(K);Ce=s(Ge,"Functional"),Ge.forEach(t),$e=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),ne=f(k),M=r(k,"UL",{});var N=i(M);C=r(N,"LI",{});var Z=i(C);ce=s(Z,"a single Tensor with "),X=r(Z,"CODE",{});var Fe=i(X);Pe=s(Fe,"input_ids"),Fe.forEach(t),De=s(Z," only and nothing else: "),R=r(Z,"CODE",{});var Ve=i(R);Be=s(Ve,"model(input_ids)"),Ve.forEach(t),Z.forEach(t),pe=f(N),P=r(N,"LI",{});var Q=i(P);Ae=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r(Q,"CODE",{});var Je=i(W);Le=s(Je,"model([input_ids, attention_mask])"),Je.forEach(t),Re=s(Q," or "),H=r(Q,"CODE",{});var Xe=i(H);Oe=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Q.forEach(t),Ie=f(N),O=r(N,"LI",{});var me=i(O);re=s(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(me,"CODE",{});var Ye=i(S);ue=s(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(t),me.forEach(t),N.forEach(t),ee=f(k),B=r(k,"P",{});var le=i(B);ge=s(le,`Note that when creating models and layers with
`),A=r(le,"A",{href:!0,rel:!0});var Ze=i(A);Ee=s(Ze,"subclassing"),Ze.forEach(t),Y=s(le,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),le.forEach(t),this.h()},h(){g(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(A,"rel","nofollow")},m(k,x){_(k,d,x),e(d,u),e(d,c),e(c,m),e(d,w),_(k,l,x),_(k,p,x),e(p,z),e(z,ae),e(p,V),e(p,L),e(L,oe),_(k,se,x),_(k,F,x),e(F,qe),e(F,G),e(G,xe),e(F,Te),e(F,I),e(I,ze),e(F,de),e(F,J),e(J,je),e(F,ve),e(F,U),e(U,Me),e(F,ye),e(F,K),e(K,Ce),e(F,$e),_(k,ne,x),_(k,M,x),e(M,C),e(C,ce),e(C,X),e(X,Pe),e(C,De),e(C,R),e(R,Be),e(M,pe),e(M,P),e(P,Ae),e(P,W),e(W,Le),e(P,Re),e(P,H),e(H,Oe),e(M,Ie),e(M,O),e(O,re),e(O,S),e(S,ue),_(k,ee,x),_(k,B,x),e(B,ge),e(B,A),e(A,Ee),e(B,Y)},d(k){k&&t(d),k&&t(l),k&&t(p),k&&t(se),k&&t(F),k&&t(ne),k&&t(M),k&&t(ee),k&&t(B)}}}function yb(q){let d,u,c,m,w;return{c(){d=a("p"),u=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var z=i(c);m=s(z,"Module"),z.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,u),e(d,c),e(c,m),e(d,w)},d(l){l&&t(d)}}}function $b(q){let d,u,c,m,w;return m=new we({props:{code:`from transformers import DebertaTokenizer, TFDebertaForTokenClassification
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
`}}),{c(){d=a("p"),u=n("Example:"),c=h(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Example:"),p.forEach(t),c=f(l),v(m.$$.fragment,l)},m(l,p){_(l,d,p),e(d,u),_(l,c,p),y(m,l,p),w=!0},p:ke,i(l){w||($(m.$$.fragment,l),w=!0)},o(l){D(m.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function Db(q){let d,u;return d=new we({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,m){y(d,c,m),u=!0},p:ke,i(c){u||($(d.$$.fragment,c),u=!0)},o(c){D(d.$$.fragment,c),u=!1},d(c){E(d,c)}}}function Eb(q){let d,u,c,m,w,l,p,z,ae,V,L,oe,se,F,qe,G,xe,Te,I,ze,de,J,je,ve,U,Me,ye,K,Ce,$e,ne,M,C,ce,X,Pe,De,R,Be,pe,P,Ae,W,Le,Re,H,Oe,Ie,O,re,S,ue,ee,B,ge,A,Ee,Y;return{c(){d=a("p"),u=n("TensorFlow models and layers in "),c=a("code"),m=n("transformers"),w=n(" accept two formats as input:"),l=h(),p=a("ul"),z=a("li"),ae=n("having all inputs as keyword arguments (like PyTorch models), or"),V=h(),L=a("li"),oe=n("having all inputs as a list, tuple or dict in the first positional argument."),se=h(),F=a("p"),qe=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=a("code"),xe=n("model.fit()"),Te=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),ze=n("model.fit()"),de=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),je=n("fit()"),ve=n(" and "),U=a("code"),Me=n("predict()"),ye=n(`, such as when creating your own layers or models with
the Keras `),K=a("code"),Ce=n("Functional"),$e=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=h(),M=a("ul"),C=a("li"),ce=n("a single Tensor with "),X=a("code"),Pe=n("input_ids"),De=n(" only and nothing else: "),R=a("code"),Be=n("model(input_ids)"),pe=h(),P=a("li"),Ae=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a("code"),Le=n("model([input_ids, attention_mask])"),Re=n(" or "),H=a("code"),Oe=n("model([input_ids, attention_mask, token_type_ids])"),Ie=h(),O=a("li"),re=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ue=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),B=a("p"),ge=n(`Note that when creating models and layers with
`),A=a("a"),Ee=n("subclassing"),Y=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(k){d=r(k,"P",{});var x=i(d);u=s(x,"TensorFlow models and layers in "),c=r(x,"CODE",{});var fe=i(c);m=s(fe,"transformers"),fe.forEach(t),w=s(x," accept two formats as input:"),x.forEach(t),l=f(k),p=r(k,"UL",{});var ie=i(p);z=r(ie,"LI",{});var We=i(z);ae=s(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),V=f(ie),L=r(ie,"LI",{});var Ue=i(L);oe=s(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(t),ie.forEach(t),se=f(k),F=r(k,"P",{});var j=i(F);qe=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),G=r(j,"CODE",{});var He=i(G);xe=s(He,"model.fit()"),He.forEach(t),Te=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(j,"CODE",{});var Ke=i(I);ze=s(Ke,"model.fit()"),Ke.forEach(t),de=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(j,"CODE",{});var Qe=i(J);je=s(Qe,"fit()"),Qe.forEach(t),ve=s(j," and "),U=r(j,"CODE",{});var Ne=i(U);Me=s(Ne,"predict()"),Ne.forEach(t),ye=s(j,`, such as when creating your own layers or models with
the Keras `),K=r(j,"CODE",{});var Ge=i(K);Ce=s(Ge,"Functional"),Ge.forEach(t),$e=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),ne=f(k),M=r(k,"UL",{});var N=i(M);C=r(N,"LI",{});var Z=i(C);ce=s(Z,"a single Tensor with "),X=r(Z,"CODE",{});var Fe=i(X);Pe=s(Fe,"input_ids"),Fe.forEach(t),De=s(Z," only and nothing else: "),R=r(Z,"CODE",{});var Ve=i(R);Be=s(Ve,"model(input_ids)"),Ve.forEach(t),Z.forEach(t),pe=f(N),P=r(N,"LI",{});var Q=i(P);Ae=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r(Q,"CODE",{});var Je=i(W);Le=s(Je,"model([input_ids, attention_mask])"),Je.forEach(t),Re=s(Q," or "),H=r(Q,"CODE",{});var Xe=i(H);Oe=s(Xe,"model([input_ids, attention_mask, token_type_ids])"),Xe.forEach(t),Q.forEach(t),Ie=f(N),O=r(N,"LI",{});var me=i(O);re=s(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(me,"CODE",{});var Ye=i(S);ue=s(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(t),me.forEach(t),N.forEach(t),ee=f(k),B=r(k,"P",{});var le=i(B);ge=s(le,`Note that when creating models and layers with
`),A=r(le,"A",{href:!0,rel:!0});var Ze=i(A);Ee=s(Ze,"subclassing"),Ze.forEach(t),Y=s(le,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),le.forEach(t),this.h()},h(){g(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(A,"rel","nofollow")},m(k,x){_(k,d,x),e(d,u),e(d,c),e(c,m),e(d,w),_(k,l,x),_(k,p,x),e(p,z),e(z,ae),e(p,V),e(p,L),e(L,oe),_(k,se,x),_(k,F,x),e(F,qe),e(F,G),e(G,xe),e(F,Te),e(F,I),e(I,ze),e(F,de),e(F,J),e(J,je),e(F,ve),e(F,U),e(U,Me),e(F,ye),e(F,K),e(K,Ce),e(F,$e),_(k,ne,x),_(k,M,x),e(M,C),e(C,ce),e(C,X),e(X,Pe),e(C,De),e(C,R),e(R,Be),e(M,pe),e(M,P),e(P,Ae),e(P,W),e(W,Le),e(P,Re),e(P,H),e(H,Oe),e(M,Ie),e(M,O),e(O,re),e(O,S),e(S,ue),_(k,ee,x),_(k,B,x),e(B,ge),e(B,A),e(A,Ee),e(B,Y)},d(k){k&&t(d),k&&t(l),k&&t(p),k&&t(se),k&&t(F),k&&t(ne),k&&t(M),k&&t(ee),k&&t(B)}}}function Fb(q){let d,u,c,m,w;return{c(){d=a("p"),u=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var z=i(c);m=s(z,"Module"),z.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,u),e(d,c),e(c,m),e(d,w)},d(l){l&&t(d)}}}function qb(q){let d,u,c,m,w;return m=new we({props:{code:`from transformers import DebertaTokenizer, TFDebertaForQuestionAnswering
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
`}}),{c(){d=a("p"),u=n("Example:"),c=h(),T(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);u=s(p,"Example:"),p.forEach(t),c=f(l),v(m.$$.fragment,l)},m(l,p){_(l,d,p),e(d,u),_(l,c,p),y(m,l,p),w=!0},p:ke,i(l){w||($(m.$$.fragment,l),w=!0)},o(l){D(m.$$.fragment,l),w=!1},d(l){l&&t(d),l&&t(c),E(m,l)}}}function xb(q){let d,u;return d=new we({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,m){y(d,c,m),u=!0},p:ke,i(c){u||($(d.$$.fragment,c),u=!0)},o(c){D(d.$$.fragment,c),u=!1},d(c){E(d,c)}}}function zb(q){let d,u,c,m,w,l,p,z,ae,V,L,oe,se,F,qe,G,xe,Te,I,ze,de,J,je,ve,U,Me,ye,K,Ce,$e,ne,M,C,ce,X,Pe,De,R,Be,pe,P,Ae,W,Le,Re,H,Oe,Ie,O,re,S,ue,ee,B,ge,A,Ee,Y,k,x,fe,ie,We,Ue,j,He,Ke,Qe,Ne,Ge,N,Z,Fe,Ve,Q,Je,Xe,me,Ye,le,Ze,zo,ll,Jt,jo,pr,Sn,vd,hr,yd,dl,he,Nn,$d,fr,Dd,Ed,mr,Fd,qd,Mo,xd,Wn,zd,ur,jd,Md,Cd,Co,Pd,Hn,Bd,Ma,Ad,Ld,Rd,Bt,Un,Od,gr,Id,Sd,Kn,_r,Nd,Wd,br,Hd,Ud,Po,Qn,Kd,Xt,Qd,kr,Gd,Vd,wr,Jd,Xd,Yd,yt,Gn,Zd,Tr,ec,tc,Bo,oc,Yt,nc,vr,sc,ac,yr,rc,ic,lc,Ca,Vn,cl,Zt,Ao,$r,Jn,dc,Dr,cc,pl,Se,Xn,pc,Yn,hc,Er,fc,mc,uc,Fr,gc,_c,Lo,bc,Zn,kc,qr,wc,Tc,vc,Ro,yc,es,$c,Pa,Dc,Ec,Fc,At,ts,qc,xr,xc,zc,os,zr,jc,Mc,jr,Cc,Pc,$t,ns,Bc,Mr,Ac,Lc,Oo,Rc,eo,Oc,Cr,Ic,Sc,Pr,Nc,Wc,hl,to,Io,Br,ss,Hc,Ar,Uc,fl,wt,as,Kc,rs,Qc,is,Gc,Vc,Jc,ls,Xc,ds,Yc,Zc,ep,Dt,cs,tp,oo,op,Ba,np,sp,Lr,ap,rp,ip,So,lp,No,ml,no,Wo,Rr,ps,dp,Or,cp,ul,so,hs,pp,Ir,hp,gl,ao,Ho,Sr,fs,fp,Nr,mp,_l,Tt,ms,up,ro,gp,Wr,_p,bp,us,kp,wp,Tp,gs,vp,_s,yp,$p,Dp,ht,bs,Ep,io,Fp,Aa,qp,xp,Hr,zp,jp,Mp,Uo,Cp,Ko,Pp,Qo,bl,lo,Go,Ur,ks,Bp,Kr,Ap,kl,it,ws,Lp,Qr,Rp,Op,Ts,Ip,vs,Sp,Np,Wp,ys,Hp,$s,Up,Kp,Qp,et,Ds,Gp,co,Vp,La,Jp,Xp,Gr,Yp,Zp,eh,Vo,th,Jo,oh,Xo,nh,Yo,sh,Zo,wl,po,en,Vr,Es,ah,Jr,rh,Tl,lt,Fs,ih,Xr,lh,dh,qs,ch,xs,ph,hh,fh,zs,mh,js,uh,gh,_h,ft,Ms,bh,ho,kh,Ra,wh,Th,Yr,vh,yh,$h,tn,Dh,on,Eh,nn,vl,fo,sn,Zr,Cs,Fh,ei,qh,yl,dt,Ps,xh,mo,zh,ti,jh,Mh,oi,Ch,Ph,Bh,Bs,Ah,As,Lh,Rh,Oh,Ls,Ih,Rs,Sh,Nh,Wh,mt,Os,Hh,uo,Uh,Oa,Kh,Qh,ni,Gh,Vh,Jh,an,Xh,rn,Yh,ln,$l,go,dn,si,Is,Zh,ai,ef,Dl,ct,Ss,tf,Ns,of,Ws,nf,sf,af,Hs,rf,Us,lf,df,cf,cn,pf,Et,Ks,hf,_o,ff,Ia,mf,uf,ri,gf,_f,bf,pn,kf,hn,El,bo,fn,ii,Qs,wf,li,Tf,Fl,jt,Gs,vf,di,yf,$f,Ft,Vs,Df,ci,Ef,Ff,Js,qf,pi,xf,zf,jf,vt,Mf,hi,Cf,Pf,fi,Bf,Af,mi,Lf,Rf,ui,Of,If,ql,ko,mn,gi,Xs,Sf,_i,Nf,xl,pt,Ys,Wf,wo,Hf,bi,Uf,Kf,Zs,Qf,Gf,Vf,ea,Jf,ta,Xf,Yf,Zf,un,em,ut,oa,tm,To,om,Sa,nm,sm,ki,am,rm,im,gn,lm,_n,dm,bn,zl,vo,kn,wi,na,cm,Ti,pm,jl,ot,sa,hm,vi,fm,mm,aa,um,ra,gm,_m,bm,ia,km,la,wm,Tm,vm,wn,ym,gt,da,$m,yo,Dm,Na,Em,Fm,yi,qm,xm,zm,Tn,jm,vn,Mm,yn,Ml,$o,$n,$i,ca,Cm,Di,Pm,Cl,nt,pa,Bm,Ei,Am,Lm,ha,Rm,fa,Om,Im,Sm,ma,Nm,ua,Wm,Hm,Um,Dn,Km,_t,ga,Qm,Do,Gm,Wa,Vm,Jm,Fi,Xm,Ym,Zm,En,eu,Fn,tu,qn,Pl,Eo,xn,qi,_a,ou,xi,nu,Bl,st,ba,su,Fo,au,zi,ru,iu,ji,lu,du,cu,ka,pu,wa,hu,fu,mu,Ta,uu,va,gu,_u,bu,zn,ku,bt,ya,wu,qo,Tu,Ha,vu,yu,Mi,$u,Du,Eu,jn,Fu,Mn,qu,Cn,Al;return l=new rt({}),F=new rt({}),ee=new rt({}),k=new te({props:{name:"class transformers.DebertaConfig",anchor:"transformers.DebertaConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-07"},{name:"relative_attention",val:" = False"},{name:"max_relative_positions",val:" = -1"},{name:"pad_token_id",val:" = 0"},{name:"position_biased_input",val:" = True"},{name:"pos_att_type",val:" = None"},{name:"pooler_dropout",val:" = 0"},{name:"pooler_hidden_act",val:" = 'gelu'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the DeBERTa model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaModel">DebertaModel</a> or <a href="/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.TFDebertaModel">TFDebertaModel</a>.`,name:"vocab_size"},{anchor:"transformers.DebertaConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaModel">DebertaModel</a> or <a href="/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.TFDebertaModel">TFDebertaModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.DebertaConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DebertaConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.DebertaConfig.relative_attention",description:`<strong>relative_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether use relative position encoding.`,name:"relative_attention"},{anchor:"transformers.DebertaConfig.max_relative_positions",description:`<strong>max_relative_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The range of relative positions <code>[-max_position_embeddings, max_position_embeddings]</code>. Use the same value
as <code>max_position_embeddings</code>.`,name:"max_relative_positions"},{anchor:"transformers.DebertaConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The value used to pad input_ids.`,name:"pad_token_id"},{anchor:"transformers.DebertaConfig.position_biased_input",description:`<strong>position_biased_input</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether add absolute position embedding to content embedding.`,name:"position_biased_input"},{anchor:"transformers.DebertaConfig.pos_att_type",description:`<strong>pos_att_type</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
The type of relative position attention, it can be a combination of <code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>, e.g. <code>[&quot;p2c&quot;]</code>,
<code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>.`,name:"pos_att_type"},{anchor:"transformers.DebertaConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, optional, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deberta/configuration_deberta.py#L40"}}),zo=new be({props:{anchor:"transformers.DebertaConfig.example",$$slots:{default:[N_]},$$scope:{ctx:q}}}),Sn=new rt({}),Nn=new te({props:{name:"class transformers.DebertaTokenizer",anchor:"transformers.DebertaTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"add_prefix_space",val:" = False"},{name:"add_bos_token",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
any other word.`,name:"add_bos_token"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deberta/tokenization_deberta.py#L112"}}),Mo=new be({props:{anchor:"transformers.DebertaTokenizer.example",$$slots:{default:[W_]},$$scope:{ctx:q}}}),Co=new at({props:{$$slots:{default:[H_]},$$scope:{ctx:q}}}),Un=new te({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deberta/tokenization_deberta.py#L289",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Qn=new te({props:{name:"get_special_tokens_mask",anchor:"transformers.DebertaTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deberta/tokenization_deberta.py#L314",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Gn=new te({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deberta/tokenization_deberta.py#L341",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Bo=new be({props:{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[U_]},$$scope:{ctx:q}}}),Vn=new te({props:{name:"save_vocabulary",anchor:"transformers.DebertaTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deberta/tokenization_deberta.py#L400"}}),Jn=new rt({}),Xn=new te({props:{name:"class transformers.DebertaTokenizerFast",anchor:"transformers.DebertaTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
other word. (Deberta tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deberta/tokenization_deberta_fast.py#L74"}}),Lo=new be({props:{anchor:"transformers.DebertaTokenizerFast.example",$$slots:{default:[K_]},$$scope:{ctx:q}}}),Ro=new at({props:{$$slots:{default:[Q_]},$$scope:{ctx:q}}}),ts=new te({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deberta/tokenization_deberta_fast.py#L210",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ns=new te({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deberta/tokenization_deberta_fast.py#L235",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Oo=new be({props:{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[G_]},$$scope:{ctx:q}}}),ss=new rt({}),as=new te({props:{name:"class transformers.DebertaModel",anchor:"transformers.DebertaModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deberta/modeling_deberta.py#L927"}}),cs=new te({props:{name:"forward",anchor:"transformers.DebertaModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deberta/modeling_deberta.py#L951",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),So=new at({props:{$$slots:{default:[V_]},$$scope:{ctx:q}}}),No=new be({props:{anchor:"transformers.DebertaModel.forward.example",$$slots:{default:[J_]},$$scope:{ctx:q}}}),ps=new rt({}),hs=new te({props:{name:"class transformers.DebertaPreTrainedModel",anchor:"transformers.DebertaPreTrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deberta/modeling_deberta.py#L832"}}),fs=new rt({}),ms=new te({props:{name:"class transformers.DebertaForMaskedLM",anchor:"transformers.DebertaForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deberta/modeling_deberta.py#L1039"}}),bs=new te({props:{name:"forward",anchor:"transformers.DebertaForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deberta/modeling_deberta.py#L1058",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Uo=new at({props:{$$slots:{default:[X_]},$$scope:{ctx:q}}}),Ko=new be({props:{anchor:"transformers.DebertaForMaskedLM.forward.example",$$slots:{default:[Y_]},$$scope:{ctx:q}}}),Qo=new be({props:{anchor:"transformers.DebertaForMaskedLM.forward.example-2",$$slots:{default:[Z_]},$$scope:{ctx:q}}}),ks=new rt({}),ws=new te({props:{name:"class transformers.DebertaForSequenceClassification",anchor:"transformers.DebertaForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deberta/modeling_deberta.py#L1177"}}),Ds=new te({props:{name:"forward",anchor:"transformers.DebertaForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deberta/modeling_deberta.py#L1202",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vo=new at({props:{$$slots:{default:[eb]},$$scope:{ctx:q}}}),Jo=new be({props:{anchor:"transformers.DebertaForSequenceClassification.forward.example",$$slots:{default:[tb]},$$scope:{ctx:q}}}),Xo=new be({props:{anchor:"transformers.DebertaForSequenceClassification.forward.example-2",$$slots:{default:[ob]},$$scope:{ctx:q}}}),Yo=new be({props:{anchor:"transformers.DebertaForSequenceClassification.forward.example-3",$$slots:{default:[nb]},$$scope:{ctx:q}}}),Zo=new be({props:{anchor:"transformers.DebertaForSequenceClassification.forward.example-4",$$slots:{default:[sb]},$$scope:{ctx:q}}}),Es=new rt({}),Fs=new te({props:{name:"class transformers.DebertaForTokenClassification",anchor:"transformers.DebertaForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deberta/modeling_deberta.py#L1298"}}),Ms=new te({props:{name:"forward",anchor:"transformers.DebertaForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deberta/modeling_deberta.py#L1312",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tn=new at({props:{$$slots:{default:[ab]},$$scope:{ctx:q}}}),on=new be({props:{anchor:"transformers.DebertaForTokenClassification.forward.example",$$slots:{default:[rb]},$$scope:{ctx:q}}}),nn=new be({props:{anchor:"transformers.DebertaForTokenClassification.forward.example-2",$$slots:{default:[ib]},$$scope:{ctx:q}}}),Cs=new rt({}),Ps=new te({props:{name:"class transformers.DebertaForQuestionAnswering",anchor:"transformers.DebertaForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deberta/modeling_deberta.py#L1376"}}),Os=new te({props:{name:"forward",anchor:"transformers.DebertaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DebertaForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deberta/modeling_deberta.py#L1389",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),an=new at({props:{$$slots:{default:[lb]},$$scope:{ctx:q}}}),rn=new be({props:{anchor:"transformers.DebertaForQuestionAnswering.forward.example",$$slots:{default:[db]},$$scope:{ctx:q}}}),ln=new be({props:{anchor:"transformers.DebertaForQuestionAnswering.forward.example-2",$$slots:{default:[cb]},$$scope:{ctx:q}}}),Is=new rt({}),Ss=new te({props:{name:"class transformers.TFDebertaModel",anchor:"transformers.TFDebertaModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deberta/modeling_tf_deberta.py#L1095"}}),cn=new at({props:{$$slots:{default:[pb]},$$scope:{ctx:q}}}),Ks=new te({props:{name:"call",anchor:"transformers.TFDebertaModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaModel.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deberta/modeling_tf_deberta.py#L1101",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),pn=new at({props:{$$slots:{default:[hb]},$$scope:{ctx:q}}}),hn=new be({props:{anchor:"transformers.TFDebertaModel.call.example",$$slots:{default:[fb]},$$scope:{ctx:q}}}),Qs=new rt({}),Gs=new te({props:{name:"class transformers.TFDebertaPreTrainedModel",anchor:"transformers.TFDebertaPreTrainedModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deberta/modeling_tf_deberta.py#L995"}}),Vs=new te({props:{name:"call",anchor:"transformers.TFDebertaPreTrainedModel.call",parameters:[{name:"inputs",val:""},{name:"training",val:" = None"},{name:"mask",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/keras/engine/training.py#L559",returnDescription:`
<p>A tensor if there is a single output, or
a list of tensors if there are more than one outputs.</p>
`}}),Xs=new rt({}),Ys=new te({props:{name:"class transformers.TFDebertaForMaskedLM",anchor:"transformers.TFDebertaForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deberta/modeling_tf_deberta.py#L1143"}}),un=new at({props:{$$slots:{default:[mb]},$$scope:{ctx:q}}}),oa=new te({props:{name:"call",anchor:"transformers.TFDebertaForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deberta/modeling_tf_deberta.py#L1159",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),gn=new at({props:{$$slots:{default:[ub]},$$scope:{ctx:q}}}),_n=new be({props:{anchor:"transformers.TFDebertaForMaskedLM.call.example",$$slots:{default:[gb]},$$scope:{ctx:q}}}),bn=new be({props:{anchor:"transformers.TFDebertaForMaskedLM.call.example-2",$$slots:{default:[_b]},$$scope:{ctx:q}}}),na=new rt({}),sa=new te({props:{name:"class transformers.TFDebertaForSequenceClassification",anchor:"transformers.TFDebertaForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deberta/modeling_tf_deberta.py#L1226"}}),wn=new at({props:{$$slots:{default:[bb]},$$scope:{ctx:q}}}),da=new te({props:{name:"call",anchor:"transformers.TFDebertaForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deberta/modeling_tf_deberta.py#L1244",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Tn=new at({props:{$$slots:{default:[kb]},$$scope:{ctx:q}}}),vn=new be({props:{anchor:"transformers.TFDebertaForSequenceClassification.call.example",$$slots:{default:[wb]},$$scope:{ctx:q}}}),yn=new be({props:{anchor:"transformers.TFDebertaForSequenceClassification.call.example-2",$$slots:{default:[Tb]},$$scope:{ctx:q}}}),ca=new rt({}),pa=new te({props:{name:"class transformers.TFDebertaForTokenClassification",anchor:"transformers.TFDebertaForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deberta/modeling_tf_deberta.py#L1314"}}),Dn=new at({props:{$$slots:{default:[vb]},$$scope:{ctx:q}}}),ga=new te({props:{name:"call",anchor:"transformers.TFDebertaForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deberta/modeling_tf_deberta.py#L1326",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),En=new at({props:{$$slots:{default:[yb]},$$scope:{ctx:q}}}),Fn=new be({props:{anchor:"transformers.TFDebertaForTokenClassification.call.example",$$slots:{default:[$b]},$$scope:{ctx:q}}}),qn=new be({props:{anchor:"transformers.TFDebertaForTokenClassification.call.example-2",$$slots:{default:[Db]},$$scope:{ctx:q}}}),_a=new rt({}),ba=new te({props:{name:"class transformers.TFDebertaForQuestionAnswering",anchor:"transformers.TFDebertaForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deberta/modeling_tf_deberta.py#L1392"}}),zn=new at({props:{$$slots:{default:[Eb]},$$scope:{ctx:q}}}),ya=new te({props:{name:"call",anchor:"transformers.TFDebertaForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/deberta/modeling_tf_deberta.py#L1403",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),jn=new at({props:{$$slots:{default:[Fb]},$$scope:{ctx:q}}}),Mn=new be({props:{anchor:"transformers.TFDebertaForQuestionAnswering.call.example",$$slots:{default:[qb]},$$scope:{ctx:q}}}),Cn=new be({props:{anchor:"transformers.TFDebertaForQuestionAnswering.call.example-2",$$slots:{default:[xb]},$$scope:{ctx:q}}}),{c(){d=a("meta"),u=h(),c=a("h1"),m=a("a"),w=a("span"),T(l.$$.fragment),p=h(),z=a("span"),ae=n("DeBERTa"),V=h(),L=a("h2"),oe=a("a"),se=a("span"),T(F.$$.fragment),qe=h(),G=a("span"),xe=n("Overview"),Te=h(),I=a("p"),ze=n("The DeBERTa model was proposed in "),de=a("a"),J=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),je=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),ve=h(),U=a("p"),Me=n(`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),ye=h(),K=a("p"),Ce=n("The abstract from the paper is the following:"),$e=h(),ne=a("p"),M=a("em"),C=n(`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
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
contributed by `),W=a("a"),Le=n("kamalkraj"),Re=n(" . The original code can be found "),H=a("a"),Oe=n("here"),Ie=n("."),O=h(),re=a("h2"),S=a("a"),ue=a("span"),T(ee.$$.fragment),B=h(),ge=a("span"),A=n("DebertaConfig"),Ee=h(),Y=a("div"),T(k.$$.fragment),x=h(),fe=a("p"),ie=n("This is the configuration class to store the configuration of a "),We=a("a"),Ue=n("DebertaModel"),j=n(" or a "),He=a("a"),Ke=n("TFDebertaModel"),Qe=n(`. It is
used to instantiate a DeBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Ne=a("a"),Ge=n("microsoft/deberta-base"),N=n(" architecture."),Z=h(),Fe=a("p"),Ve=n("Configuration objects inherit from "),Q=a("a"),Je=n("PretrainedConfig"),Xe=n(` and can be used to control the model outputs. Read the
documentation from `),me=a("a"),Ye=n("PretrainedConfig"),le=n(" for more information."),Ze=h(),T(zo.$$.fragment),ll=h(),Jt=a("h2"),jo=a("a"),pr=a("span"),T(Sn.$$.fragment),vd=h(),hr=a("span"),yd=n("DebertaTokenizer"),dl=h(),he=a("div"),T(Nn.$$.fragment),$d=h(),fr=a("p"),Dd=n("Construct a DeBERTa tokenizer. Based on byte-level Byte-Pair-Encoding."),Ed=h(),mr=a("p"),Fd=n("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),qd=h(),T(Mo.$$.fragment),xd=h(),Wn=a("p"),zd=n("You can get around that behavior by passing "),ur=a("code"),jd=n("add_prefix_space=True"),Md=n(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Cd=h(),T(Co.$$.fragment),Pd=h(),Hn=a("p"),Bd=n("This tokenizer inherits from "),Ma=a("a"),Ad=n("PreTrainedTokenizer"),Ld=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Rd=h(),Bt=a("div"),T(Un.$$.fragment),Od=h(),gr=a("p"),Id=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Sd=h(),Kn=a("ul"),_r=a("li"),Nd=n("single sequence: [CLS] X [SEP]"),Wd=h(),br=a("li"),Hd=n("pair of sequences: [CLS] A [SEP] B [SEP]"),Ud=h(),Po=a("div"),T(Qn.$$.fragment),Kd=h(),Xt=a("p"),Qd=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),kr=a("code"),Gd=n("prepare_for_model"),Vd=n(" or "),wr=a("code"),Jd=n("encode_plus"),Xd=n(" methods."),Yd=h(),yt=a("div"),T(Gn.$$.fragment),Zd=h(),Tr=a("p"),ec=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),tc=h(),T(Bo.$$.fragment),oc=h(),Yt=a("p"),nc=n("If "),vr=a("code"),sc=n("token_ids_1"),ac=n(" is "),yr=a("code"),rc=n("None"),ic=n(", this method only returns the first portion of the mask (0s)."),lc=h(),Ca=a("div"),T(Vn.$$.fragment),cl=h(),Zt=a("h2"),Ao=a("a"),$r=a("span"),T(Jn.$$.fragment),dc=h(),Dr=a("span"),cc=n("DebertaTokenizerFast"),pl=h(),Se=a("div"),T(Xn.$$.fragment),pc=h(),Yn=a("p"),hc=n("Construct a \u201Cfast\u201D DeBERTa tokenizer (backed by HuggingFace\u2019s "),Er=a("em"),fc=n("tokenizers"),mc=n(` library). Based on byte-level
Byte-Pair-Encoding.`),uc=h(),Fr=a("p"),gc=n("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),_c=h(),T(Lo.$$.fragment),bc=h(),Zn=a("p"),kc=n("You can get around that behavior by passing "),qr=a("code"),wc=n("add_prefix_space=True"),Tc=n(` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),vc=h(),T(Ro.$$.fragment),yc=h(),es=a("p"),$c=n("This tokenizer inherits from "),Pa=a("a"),Dc=n("PreTrainedTokenizerFast"),Ec=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Fc=h(),At=a("div"),T(ts.$$.fragment),qc=h(),xr=a("p"),xc=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),zc=h(),os=a("ul"),zr=a("li"),jc=n("single sequence: [CLS] X [SEP]"),Mc=h(),jr=a("li"),Cc=n("pair of sequences: [CLS] A [SEP] B [SEP]"),Pc=h(),$t=a("div"),T(ns.$$.fragment),Bc=h(),Mr=a("p"),Ac=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),Lc=h(),T(Oo.$$.fragment),Rc=h(),eo=a("p"),Oc=n("If "),Cr=a("code"),Ic=n("token_ids_1"),Sc=n(" is "),Pr=a("code"),Nc=n("None"),Wc=n(", this method only returns the first portion of the mask (0s)."),hl=h(),to=a("h2"),Io=a("a"),Br=a("span"),T(ss.$$.fragment),Hc=h(),Ar=a("span"),Uc=n("DebertaModel"),fl=h(),wt=a("div"),T(as.$$.fragment),Kc=h(),rs=a("p"),Qc=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),is=a("a"),Gc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Vc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Jc=h(),ls=a("p"),Xc=n("This model is also a PyTorch "),ds=a("a"),Yc=n("torch.nn.Module"),Zc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ep=h(),Dt=a("div"),T(cs.$$.fragment),tp=h(),oo=a("p"),op=n("The "),Ba=a("a"),np=n("DebertaModel"),sp=n(" forward method, overrides the "),Lr=a("code"),ap=n("__call__"),rp=n(" special method."),ip=h(),T(So.$$.fragment),lp=h(),T(No.$$.fragment),ml=h(),no=a("h2"),Wo=a("a"),Rr=a("span"),T(ps.$$.fragment),dp=h(),Or=a("span"),cp=n("DebertaPreTrainedModel"),ul=h(),so=a("div"),T(hs.$$.fragment),pp=h(),Ir=a("p"),hp=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),gl=h(),ao=a("h2"),Ho=a("a"),Sr=a("span"),T(fs.$$.fragment),fp=h(),Nr=a("span"),mp=n("DebertaForMaskedLM"),_l=h(),Tt=a("div"),T(ms.$$.fragment),up=h(),ro=a("p"),gp=n("DeBERTa Model with a "),Wr=a("code"),_p=n("language modeling"),bp=n(` head on top.
The DeBERTa model was proposed in `),us=a("a"),kp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),wp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Tp=h(),gs=a("p"),vp=n("This model is also a PyTorch "),_s=a("a"),yp=n("torch.nn.Module"),$p=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dp=h(),ht=a("div"),T(bs.$$.fragment),Ep=h(),io=a("p"),Fp=n("The "),Aa=a("a"),qp=n("DebertaForMaskedLM"),xp=n(" forward method, overrides the "),Hr=a("code"),zp=n("__call__"),jp=n(" special method."),Mp=h(),T(Uo.$$.fragment),Cp=h(),T(Ko.$$.fragment),Pp=h(),T(Qo.$$.fragment),bl=h(),lo=a("h2"),Go=a("a"),Ur=a("span"),T(ks.$$.fragment),Bp=h(),Kr=a("span"),Ap=n("DebertaForSequenceClassification"),kl=h(),it=a("div"),T(ws.$$.fragment),Lp=h(),Qr=a("p"),Rp=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Op=h(),Ts=a("p"),Ip=n("The DeBERTa model was proposed in "),vs=a("a"),Sp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Np=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Wp=h(),ys=a("p"),Hp=n("This model is also a PyTorch "),$s=a("a"),Up=n("torch.nn.Module"),Kp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qp=h(),et=a("div"),T(Ds.$$.fragment),Gp=h(),co=a("p"),Vp=n("The "),La=a("a"),Jp=n("DebertaForSequenceClassification"),Xp=n(" forward method, overrides the "),Gr=a("code"),Yp=n("__call__"),Zp=n(" special method."),eh=h(),T(Vo.$$.fragment),th=h(),T(Jo.$$.fragment),oh=h(),T(Xo.$$.fragment),nh=h(),T(Yo.$$.fragment),sh=h(),T(Zo.$$.fragment),wl=h(),po=a("h2"),en=a("a"),Vr=a("span"),T(Es.$$.fragment),ah=h(),Jr=a("span"),rh=n("DebertaForTokenClassification"),Tl=h(),lt=a("div"),T(Fs.$$.fragment),ih=h(),Xr=a("p"),lh=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),dh=h(),qs=a("p"),ch=n("The DeBERTa model was proposed in "),xs=a("a"),ph=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),hh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),fh=h(),zs=a("p"),mh=n("This model is also a PyTorch "),js=a("a"),uh=n("torch.nn.Module"),gh=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_h=h(),ft=a("div"),T(Ms.$$.fragment),bh=h(),ho=a("p"),kh=n("The "),Ra=a("a"),wh=n("DebertaForTokenClassification"),Th=n(" forward method, overrides the "),Yr=a("code"),vh=n("__call__"),yh=n(" special method."),$h=h(),T(tn.$$.fragment),Dh=h(),T(on.$$.fragment),Eh=h(),T(nn.$$.fragment),vl=h(),fo=a("h2"),sn=a("a"),Zr=a("span"),T(Cs.$$.fragment),Fh=h(),ei=a("span"),qh=n("DebertaForQuestionAnswering"),yl=h(),dt=a("div"),T(Ps.$$.fragment),xh=h(),mo=a("p"),zh=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ti=a("code"),jh=n("span start logits"),Mh=n(" and "),oi=a("code"),Ch=n("span end logits"),Ph=n(")."),Bh=h(),Bs=a("p"),Ah=n("The DeBERTa model was proposed in "),As=a("a"),Lh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Rh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Oh=h(),Ls=a("p"),Ih=n("This model is also a PyTorch "),Rs=a("a"),Sh=n("torch.nn.Module"),Nh=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wh=h(),mt=a("div"),T(Os.$$.fragment),Hh=h(),uo=a("p"),Uh=n("The "),Oa=a("a"),Kh=n("DebertaForQuestionAnswering"),Qh=n(" forward method, overrides the "),ni=a("code"),Gh=n("__call__"),Vh=n(" special method."),Jh=h(),T(an.$$.fragment),Xh=h(),T(rn.$$.fragment),Yh=h(),T(ln.$$.fragment),$l=h(),go=a("h2"),dn=a("a"),si=a("span"),T(Is.$$.fragment),Zh=h(),ai=a("span"),ef=n("TFDebertaModel"),Dl=h(),ct=a("div"),T(Ss.$$.fragment),tf=h(),Ns=a("p"),of=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Ws=a("a"),nf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),sf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),af=h(),Hs=a("p"),rf=n("This model is also a "),Us=a("a"),lf=n("tf.keras.Model"),df=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cf=h(),T(cn.$$.fragment),pf=h(),Et=a("div"),T(Ks.$$.fragment),hf=h(),_o=a("p"),ff=n("The "),Ia=a("a"),mf=n("TFDebertaModel"),uf=n(" forward method, overrides the "),ri=a("code"),gf=n("__call__"),_f=n(" special method."),bf=h(),T(pn.$$.fragment),kf=h(),T(hn.$$.fragment),El=h(),bo=a("h2"),fn=a("a"),ii=a("span"),T(Qs.$$.fragment),wf=h(),li=a("span"),Tf=n("TFDebertaPreTrainedModel"),Fl=h(),jt=a("div"),T(Gs.$$.fragment),vf=h(),di=a("p"),yf=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),$f=h(),Ft=a("div"),T(Vs.$$.fragment),Df=h(),ci=a("p"),Ef=n("Calls the model on new inputs and returns the outputs as tensors."),Ff=h(),Js=a("p"),qf=n("In this case "),pi=a("code"),xf=n("call()"),zf=n(` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),jf=h(),vt=a("p"),Mf=n(`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),hi=a("code"),Cf=n("tf.keras.Model"),Pf=n(`.
To call a model on an input, always use the `),fi=a("code"),Bf=n("__call__()"),Af=n(` method,
i.e. `),mi=a("code"),Lf=n("model(inputs)"),Rf=n(", which relies on the underlying "),ui=a("code"),Of=n("call()"),If=n(" method."),ql=h(),ko=a("h2"),mn=a("a"),gi=a("span"),T(Xs.$$.fragment),Sf=h(),_i=a("span"),Nf=n("TFDebertaForMaskedLM"),xl=h(),pt=a("div"),T(Ys.$$.fragment),Wf=h(),wo=a("p"),Hf=n("DeBERTa Model with a "),bi=a("code"),Uf=n("language modeling"),Kf=n(` head on top.
The DeBERTa model was proposed in `),Zs=a("a"),Qf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Gf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Vf=h(),ea=a("p"),Jf=n("This model is also a "),ta=a("a"),Xf=n("tf.keras.Model"),Yf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zf=h(),T(un.$$.fragment),em=h(),ut=a("div"),T(oa.$$.fragment),tm=h(),To=a("p"),om=n("The "),Sa=a("a"),nm=n("TFDebertaForMaskedLM"),sm=n(" forward method, overrides the "),ki=a("code"),am=n("__call__"),rm=n(" special method."),im=h(),T(gn.$$.fragment),lm=h(),T(_n.$$.fragment),dm=h(),T(bn.$$.fragment),zl=h(),vo=a("h2"),kn=a("a"),wi=a("span"),T(na.$$.fragment),cm=h(),Ti=a("span"),pm=n("TFDebertaForSequenceClassification"),jl=h(),ot=a("div"),T(sa.$$.fragment),hm=h(),vi=a("p"),fm=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),mm=h(),aa=a("p"),um=n("The DeBERTa model was proposed in "),ra=a("a"),gm=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),_m=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),bm=h(),ia=a("p"),km=n("This model is also a "),la=a("a"),wm=n("tf.keras.Model"),Tm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vm=h(),T(wn.$$.fragment),ym=h(),gt=a("div"),T(da.$$.fragment),$m=h(),yo=a("p"),Dm=n("The "),Na=a("a"),Em=n("TFDebertaForSequenceClassification"),Fm=n(" forward method, overrides the "),yi=a("code"),qm=n("__call__"),xm=n(" special method."),zm=h(),T(Tn.$$.fragment),jm=h(),T(vn.$$.fragment),Mm=h(),T(yn.$$.fragment),Ml=h(),$o=a("h2"),$n=a("a"),$i=a("span"),T(ca.$$.fragment),Cm=h(),Di=a("span"),Pm=n("TFDebertaForTokenClassification"),Cl=h(),nt=a("div"),T(pa.$$.fragment),Bm=h(),Ei=a("p"),Am=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Lm=h(),ha=a("p"),Rm=n("The DeBERTa model was proposed in "),fa=a("a"),Om=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Im=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Sm=h(),ma=a("p"),Nm=n("This model is also a "),ua=a("a"),Wm=n("tf.keras.Model"),Hm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Um=h(),T(Dn.$$.fragment),Km=h(),_t=a("div"),T(ga.$$.fragment),Qm=h(),Do=a("p"),Gm=n("The "),Wa=a("a"),Vm=n("TFDebertaForTokenClassification"),Jm=n(" forward method, overrides the "),Fi=a("code"),Xm=n("__call__"),Ym=n(" special method."),Zm=h(),T(En.$$.fragment),eu=h(),T(Fn.$$.fragment),tu=h(),T(qn.$$.fragment),Pl=h(),Eo=a("h2"),xn=a("a"),qi=a("span"),T(_a.$$.fragment),ou=h(),xi=a("span"),nu=n("TFDebertaForQuestionAnswering"),Bl=h(),st=a("div"),T(ba.$$.fragment),su=h(),Fo=a("p"),au=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),zi=a("code"),ru=n("span start logits"),iu=n(" and "),ji=a("code"),lu=n("span end logits"),du=n(")."),cu=h(),ka=a("p"),pu=n("The DeBERTa model was proposed in "),wa=a("a"),hu=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),fu=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),mu=h(),Ta=a("p"),uu=n("This model is also a "),va=a("a"),gu=n("tf.keras.Model"),_u=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bu=h(),T(zn.$$.fragment),ku=h(),bt=a("div"),T(ya.$$.fragment),wu=h(),qo=a("p"),Tu=n("The "),Ha=a("a"),vu=n("TFDebertaForQuestionAnswering"),yu=n(" forward method, overrides the "),Mi=a("code"),$u=n("__call__"),Du=n(" special method."),Eu=h(),T(jn.$$.fragment),Fu=h(),T(Mn.$$.fragment),qu=h(),T(Cn.$$.fragment),this.h()},l(o){const b=I_('[data-svelte="svelte-1phssyn"]',document.head);d=r(b,"META",{name:!0,content:!0}),b.forEach(t),u=f(o),c=r(o,"H1",{class:!0});var $a=i(c);m=r($a,"A",{id:!0,class:!0,href:!0});var Ci=i(m);w=r(Ci,"SPAN",{});var Pi=i(w);v(l.$$.fragment,Pi),Pi.forEach(t),Ci.forEach(t),p=f($a),z=r($a,"SPAN",{});var Bi=i(z);ae=s(Bi,"DeBERTa"),Bi.forEach(t),$a.forEach(t),V=f(o),L=r(o,"H2",{class:!0});var Da=i(L);oe=r(Da,"A",{id:!0,class:!0,href:!0});var Ai=i(oe);se=r(Ai,"SPAN",{});var Li=i(se);v(F.$$.fragment,Li),Li.forEach(t),Ai.forEach(t),qe=f(Da),G=r(Da,"SPAN",{});var Ri=i(G);xe=s(Ri,"Overview"),Ri.forEach(t),Da.forEach(t),Te=f(o),I=r(o,"P",{});var Ea=i(I);ze=s(Ea,"The DeBERTa model was proposed in "),de=r(Ea,"A",{href:!0,rel:!0});var Oi=i(de);J=s(Oi,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),Oi.forEach(t),je=s(Ea,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),Ea.forEach(t),ve=f(o),U=r(o,"P",{});var Ii=i(U);Me=s(Ii,`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),Ii.forEach(t),ye=f(o),K=r(o,"P",{});var Si=i(K);Ce=s(Si,"The abstract from the paper is the following:"),Si.forEach(t),$e=f(o),ne=r(o,"P",{});var Ni=i(ne);M=r(Ni,"EM",{});var Fa=i(M);C=s(Fa,`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),ce=r(Fa,"A",{href:!0,rel:!0});var Wi=i(ce);X=s(Wi,"https://github.com/microsoft/DeBERTa"),Wi.forEach(t),Pe=s(Fa,"."),Fa.forEach(t),Ni.forEach(t),De=f(o),R=r(o,"P",{});var Mt=i(R);Be=s(Mt,"This model was contributed by "),pe=r(Mt,"A",{href:!0,rel:!0});var Hi=i(pe);P=s(Hi,"DeBERTa"),Hi.forEach(t),Ae=s(Mt,`. This model TF 2.0 implementation was
contributed by `),W=r(Mt,"A",{href:!0,rel:!0});var Ui=i(W);Le=s(Ui,"kamalkraj"),Ui.forEach(t),Re=s(Mt," . The original code can be found "),H=r(Mt,"A",{href:!0,rel:!0});var Ki=i(H);Oe=s(Ki,"here"),Ki.forEach(t),Ie=s(Mt,"."),Mt.forEach(t),O=f(o),re=r(o,"H2",{class:!0});var qa=i(re);S=r(qa,"A",{id:!0,class:!0,href:!0});var Qi=i(S);ue=r(Qi,"SPAN",{});var Gi=i(ue);v(ee.$$.fragment,Gi),Gi.forEach(t),Qi.forEach(t),B=f(qa),ge=r(qa,"SPAN",{});var Vi=i(ge);A=s(Vi,"DebertaConfig"),Vi.forEach(t),qa.forEach(t),Ee=f(o),Y=r(o,"DIV",{class:!0});var Ct=i(Y);v(k.$$.fragment,Ct),x=f(Ct),fe=r(Ct,"P",{});var Pt=i(fe);ie=s(Pt,"This is the configuration class to store the configuration of a "),We=r(Pt,"A",{href:!0});var Ji=i(We);Ue=s(Ji,"DebertaModel"),Ji.forEach(t),j=s(Pt," or a "),He=r(Pt,"A",{href:!0});var Xi=i(He);Ke=s(Xi,"TFDebertaModel"),Xi.forEach(t),Qe=s(Pt,`. It is
used to instantiate a DeBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Ne=r(Pt,"A",{href:!0,rel:!0});var Yi=i(Ne);Ge=s(Yi,"microsoft/deberta-base"),Yi.forEach(t),N=s(Pt," architecture."),Pt.forEach(t),Z=f(Ct),Fe=r(Ct,"P",{});var xo=i(Fe);Ve=s(xo,"Configuration objects inherit from "),Q=r(xo,"A",{href:!0});var Zi=i(Q);Je=s(Zi,"PretrainedConfig"),Zi.forEach(t),Xe=s(xo,` and can be used to control the model outputs. Read the
documentation from `),me=r(xo,"A",{href:!0});var el=i(me);Ye=s(el,"PretrainedConfig"),el.forEach(t),le=s(xo," for more information."),xo.forEach(t),Ze=f(Ct),v(zo.$$.fragment,Ct),Ct.forEach(t),ll=f(o),Jt=r(o,"H2",{class:!0});var xa=i(Jt);jo=r(xa,"A",{id:!0,class:!0,href:!0});var tl=i(jo);pr=r(tl,"SPAN",{});var ol=i(pr);v(Sn.$$.fragment,ol),ol.forEach(t),tl.forEach(t),vd=f(xa),hr=r(xa,"SPAN",{});var nl=i(hr);yd=s(nl,"DebertaTokenizer"),nl.forEach(t),xa.forEach(t),dl=f(o),he=r(o,"DIV",{class:!0});var _e=i(he);v(Nn.$$.fragment,_e),$d=f(_e),fr=r(_e,"P",{});var sl=i(fr);Dd=s(sl,"Construct a DeBERTa tokenizer. Based on byte-level Byte-Pair-Encoding."),sl.forEach(t),Ed=f(_e),mr=r(_e,"P",{});var al=i(mr);Fd=s(al,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),al.forEach(t),qd=f(_e),v(Mo.$$.fragment,_e),xd=f(_e),Wn=r(_e,"P",{});var za=i(Wn);zd=s(za,"You can get around that behavior by passing "),ur=r(za,"CODE",{});var rl=i(ur);jd=s(rl,"add_prefix_space=True"),rl.forEach(t),Md=s(za,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),za.forEach(t),Cd=f(_e),v(Co.$$.fragment,_e),Pd=f(_e),Hn=r(_e,"P",{});var ja=i(Hn);Bd=s(ja,"This tokenizer inherits from "),Ma=r(ja,"A",{href:!0});var il=i(Ma);Ad=s(il,"PreTrainedTokenizer"),il.forEach(t),Ld=s(ja,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ja.forEach(t),Rd=f(_e),Bt=r(_e,"DIV",{class:!0});var Ua=i(Bt);v(Un.$$.fragment,Ua),Od=f(Ua),gr=r(Ua,"P",{});var xu=i(gr);Id=s(xu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),xu.forEach(t),Sd=f(Ua),Kn=r(Ua,"UL",{});var Ll=i(Kn);_r=r(Ll,"LI",{});var zu=i(_r);Nd=s(zu,"single sequence: [CLS] X [SEP]"),zu.forEach(t),Wd=f(Ll),br=r(Ll,"LI",{});var ju=i(br);Hd=s(ju,"pair of sequences: [CLS] A [SEP] B [SEP]"),ju.forEach(t),Ll.forEach(t),Ua.forEach(t),Ud=f(_e),Po=r(_e,"DIV",{class:!0});var Rl=i(Po);v(Qn.$$.fragment,Rl),Kd=f(Rl),Xt=r(Rl,"P",{});var Ka=i(Xt);Qd=s(Ka,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),kr=r(Ka,"CODE",{});var Mu=i(kr);Gd=s(Mu,"prepare_for_model"),Mu.forEach(t),Vd=s(Ka," or "),wr=r(Ka,"CODE",{});var Cu=i(wr);Jd=s(Cu,"encode_plus"),Cu.forEach(t),Xd=s(Ka," methods."),Ka.forEach(t),Rl.forEach(t),Yd=f(_e),yt=r(_e,"DIV",{class:!0});var Pn=i(yt);v(Gn.$$.fragment,Pn),Zd=f(Pn),Tr=r(Pn,"P",{});var Pu=i(Tr);ec=s(Pu,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),Pu.forEach(t),tc=f(Pn),v(Bo.$$.fragment,Pn),oc=f(Pn),Yt=r(Pn,"P",{});var Qa=i(Yt);nc=s(Qa,"If "),vr=r(Qa,"CODE",{});var Bu=i(vr);sc=s(Bu,"token_ids_1"),Bu.forEach(t),ac=s(Qa," is "),yr=r(Qa,"CODE",{});var Au=i(yr);rc=s(Au,"None"),Au.forEach(t),ic=s(Qa,", this method only returns the first portion of the mask (0s)."),Qa.forEach(t),Pn.forEach(t),lc=f(_e),Ca=r(_e,"DIV",{class:!0});var Lu=i(Ca);v(Vn.$$.fragment,Lu),Lu.forEach(t),_e.forEach(t),cl=f(o),Zt=r(o,"H2",{class:!0});var Ol=i(Zt);Ao=r(Ol,"A",{id:!0,class:!0,href:!0});var Ru=i(Ao);$r=r(Ru,"SPAN",{});var Ou=i($r);v(Jn.$$.fragment,Ou),Ou.forEach(t),Ru.forEach(t),dc=f(Ol),Dr=r(Ol,"SPAN",{});var Iu=i(Dr);cc=s(Iu,"DebertaTokenizerFast"),Iu.forEach(t),Ol.forEach(t),pl=f(o),Se=r(o,"DIV",{class:!0});var tt=i(Se);v(Xn.$$.fragment,tt),pc=f(tt),Yn=r(tt,"P",{});var Il=i(Yn);hc=s(Il,"Construct a \u201Cfast\u201D DeBERTa tokenizer (backed by HuggingFace\u2019s "),Er=r(Il,"EM",{});var Su=i(Er);fc=s(Su,"tokenizers"),Su.forEach(t),mc=s(Il,` library). Based on byte-level
Byte-Pair-Encoding.`),Il.forEach(t),uc=f(tt),Fr=r(tt,"P",{});var Nu=i(Fr);gc=s(Nu,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Nu.forEach(t),_c=f(tt),v(Lo.$$.fragment,tt),bc=f(tt),Zn=r(tt,"P",{});var Sl=i(Zn);kc=s(Sl,"You can get around that behavior by passing "),qr=r(Sl,"CODE",{});var Wu=i(qr);wc=s(Wu,"add_prefix_space=True"),Wu.forEach(t),Tc=s(Sl,` when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`),Sl.forEach(t),vc=f(tt),v(Ro.$$.fragment,tt),yc=f(tt),es=r(tt,"P",{});var Nl=i(es);$c=s(Nl,"This tokenizer inherits from "),Pa=r(Nl,"A",{href:!0});var Hu=i(Pa);Dc=s(Hu,"PreTrainedTokenizerFast"),Hu.forEach(t),Ec=s(Nl,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Nl.forEach(t),Fc=f(tt),At=r(tt,"DIV",{class:!0});var Ga=i(At);v(ts.$$.fragment,Ga),qc=f(Ga),xr=r(Ga,"P",{});var Uu=i(xr);xc=s(Uu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Uu.forEach(t),zc=f(Ga),os=r(Ga,"UL",{});var Wl=i(os);zr=r(Wl,"LI",{});var Ku=i(zr);jc=s(Ku,"single sequence: [CLS] X [SEP]"),Ku.forEach(t),Mc=f(Wl),jr=r(Wl,"LI",{});var Qu=i(jr);Cc=s(Qu,"pair of sequences: [CLS] A [SEP] B [SEP]"),Qu.forEach(t),Wl.forEach(t),Ga.forEach(t),Pc=f(tt),$t=r(tt,"DIV",{class:!0});var Bn=i($t);v(ns.$$.fragment,Bn),Bc=f(Bn),Mr=r(Bn,"P",{});var Gu=i(Mr);Ac=s(Gu,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa"),Gu.forEach(t),Lc=f(Bn),v(Oo.$$.fragment,Bn),Rc=f(Bn),eo=r(Bn,"P",{});var Va=i(eo);Oc=s(Va,"If "),Cr=r(Va,"CODE",{});var Vu=i(Cr);Ic=s(Vu,"token_ids_1"),Vu.forEach(t),Sc=s(Va," is "),Pr=r(Va,"CODE",{});var Ju=i(Pr);Nc=s(Ju,"None"),Ju.forEach(t),Wc=s(Va,", this method only returns the first portion of the mask (0s)."),Va.forEach(t),Bn.forEach(t),tt.forEach(t),hl=f(o),to=r(o,"H2",{class:!0});var Hl=i(to);Io=r(Hl,"A",{id:!0,class:!0,href:!0});var Xu=i(Io);Br=r(Xu,"SPAN",{});var Yu=i(Br);v(ss.$$.fragment,Yu),Yu.forEach(t),Xu.forEach(t),Hc=f(Hl),Ar=r(Hl,"SPAN",{});var Zu=i(Ar);Uc=s(Zu,"DebertaModel"),Zu.forEach(t),Hl.forEach(t),fl=f(o),wt=r(o,"DIV",{class:!0});var An=i(wt);v(as.$$.fragment,An),Kc=f(An),rs=r(An,"P",{});var Ul=i(rs);Qc=s(Ul,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),is=r(Ul,"A",{href:!0,rel:!0});var eg=i(is);Gc=s(eg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),eg.forEach(t),Vc=s(Ul,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ul.forEach(t),Jc=f(An),ls=r(An,"P",{});var Kl=i(ls);Xc=s(Kl,"This model is also a PyTorch "),ds=r(Kl,"A",{href:!0,rel:!0});var tg=i(ds);Yc=s(tg,"torch.nn.Module"),tg.forEach(t),Zc=s(Kl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kl.forEach(t),ep=f(An),Dt=r(An,"DIV",{class:!0});var Ln=i(Dt);v(cs.$$.fragment,Ln),tp=f(Ln),oo=r(Ln,"P",{});var Ja=i(oo);op=s(Ja,"The "),Ba=r(Ja,"A",{href:!0});var og=i(Ba);np=s(og,"DebertaModel"),og.forEach(t),sp=s(Ja," forward method, overrides the "),Lr=r(Ja,"CODE",{});var ng=i(Lr);ap=s(ng,"__call__"),ng.forEach(t),rp=s(Ja," special method."),Ja.forEach(t),ip=f(Ln),v(So.$$.fragment,Ln),lp=f(Ln),v(No.$$.fragment,Ln),Ln.forEach(t),An.forEach(t),ml=f(o),no=r(o,"H2",{class:!0});var Ql=i(no);Wo=r(Ql,"A",{id:!0,class:!0,href:!0});var sg=i(Wo);Rr=r(sg,"SPAN",{});var ag=i(Rr);v(ps.$$.fragment,ag),ag.forEach(t),sg.forEach(t),dp=f(Ql),Or=r(Ql,"SPAN",{});var rg=i(Or);cp=s(rg,"DebertaPreTrainedModel"),rg.forEach(t),Ql.forEach(t),ul=f(o),so=r(o,"DIV",{class:!0});var Gl=i(so);v(hs.$$.fragment,Gl),pp=f(Gl),Ir=r(Gl,"P",{});var ig=i(Ir);hp=s(ig,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),ig.forEach(t),Gl.forEach(t),gl=f(o),ao=r(o,"H2",{class:!0});var Vl=i(ao);Ho=r(Vl,"A",{id:!0,class:!0,href:!0});var lg=i(Ho);Sr=r(lg,"SPAN",{});var dg=i(Sr);v(fs.$$.fragment,dg),dg.forEach(t),lg.forEach(t),fp=f(Vl),Nr=r(Vl,"SPAN",{});var cg=i(Nr);mp=s(cg,"DebertaForMaskedLM"),cg.forEach(t),Vl.forEach(t),_l=f(o),Tt=r(o,"DIV",{class:!0});var Rn=i(Tt);v(ms.$$.fragment,Rn),up=f(Rn),ro=r(Rn,"P",{});var Xa=i(ro);gp=s(Xa,"DeBERTa Model with a "),Wr=r(Xa,"CODE",{});var pg=i(Wr);_p=s(pg,"language modeling"),pg.forEach(t),bp=s(Xa,` head on top.
The DeBERTa model was proposed in `),us=r(Xa,"A",{href:!0,rel:!0});var hg=i(us);kp=s(hg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),hg.forEach(t),wp=s(Xa,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Xa.forEach(t),Tp=f(Rn),gs=r(Rn,"P",{});var Jl=i(gs);vp=s(Jl,"This model is also a PyTorch "),_s=r(Jl,"A",{href:!0,rel:!0});var fg=i(_s);yp=s(fg,"torch.nn.Module"),fg.forEach(t),$p=s(Jl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jl.forEach(t),Dp=f(Rn),ht=r(Rn,"DIV",{class:!0});var Lt=i(ht);v(bs.$$.fragment,Lt),Ep=f(Lt),io=r(Lt,"P",{});var Ya=i(io);Fp=s(Ya,"The "),Aa=r(Ya,"A",{href:!0});var mg=i(Aa);qp=s(mg,"DebertaForMaskedLM"),mg.forEach(t),xp=s(Ya," forward method, overrides the "),Hr=r(Ya,"CODE",{});var ug=i(Hr);zp=s(ug,"__call__"),ug.forEach(t),jp=s(Ya," special method."),Ya.forEach(t),Mp=f(Lt),v(Uo.$$.fragment,Lt),Cp=f(Lt),v(Ko.$$.fragment,Lt),Pp=f(Lt),v(Qo.$$.fragment,Lt),Lt.forEach(t),Rn.forEach(t),bl=f(o),lo=r(o,"H2",{class:!0});var Xl=i(lo);Go=r(Xl,"A",{id:!0,class:!0,href:!0});var gg=i(Go);Ur=r(gg,"SPAN",{});var _g=i(Ur);v(ks.$$.fragment,_g),_g.forEach(t),gg.forEach(t),Bp=f(Xl),Kr=r(Xl,"SPAN",{});var bg=i(Kr);Ap=s(bg,"DebertaForSequenceClassification"),bg.forEach(t),Xl.forEach(t),kl=f(o),it=r(o,"DIV",{class:!0});var Rt=i(it);v(ws.$$.fragment,Rt),Lp=f(Rt),Qr=r(Rt,"P",{});var kg=i(Qr);Rp=s(kg,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),kg.forEach(t),Op=f(Rt),Ts=r(Rt,"P",{});var Yl=i(Ts);Ip=s(Yl,"The DeBERTa model was proposed in "),vs=r(Yl,"A",{href:!0,rel:!0});var wg=i(vs);Sp=s(wg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),wg.forEach(t),Np=s(Yl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Yl.forEach(t),Wp=f(Rt),ys=r(Rt,"P",{});var Zl=i(ys);Hp=s(Zl,"This model is also a PyTorch "),$s=r(Zl,"A",{href:!0,rel:!0});var Tg=i($s);Up=s(Tg,"torch.nn.Module"),Tg.forEach(t),Kp=s(Zl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zl.forEach(t),Qp=f(Rt),et=r(Rt,"DIV",{class:!0});var kt=i(et);v(Ds.$$.fragment,kt),Gp=f(kt),co=r(kt,"P",{});var Za=i(co);Vp=s(Za,"The "),La=r(Za,"A",{href:!0});var vg=i(La);Jp=s(vg,"DebertaForSequenceClassification"),vg.forEach(t),Xp=s(Za," forward method, overrides the "),Gr=r(Za,"CODE",{});var yg=i(Gr);Yp=s(yg,"__call__"),yg.forEach(t),Zp=s(Za," special method."),Za.forEach(t),eh=f(kt),v(Vo.$$.fragment,kt),th=f(kt),v(Jo.$$.fragment,kt),oh=f(kt),v(Xo.$$.fragment,kt),nh=f(kt),v(Yo.$$.fragment,kt),sh=f(kt),v(Zo.$$.fragment,kt),kt.forEach(t),Rt.forEach(t),wl=f(o),po=r(o,"H2",{class:!0});var ed=i(po);en=r(ed,"A",{id:!0,class:!0,href:!0});var $g=i(en);Vr=r($g,"SPAN",{});var Dg=i(Vr);v(Es.$$.fragment,Dg),Dg.forEach(t),$g.forEach(t),ah=f(ed),Jr=r(ed,"SPAN",{});var Eg=i(Jr);rh=s(Eg,"DebertaForTokenClassification"),Eg.forEach(t),ed.forEach(t),Tl=f(o),lt=r(o,"DIV",{class:!0});var Ot=i(lt);v(Fs.$$.fragment,Ot),ih=f(Ot),Xr=r(Ot,"P",{});var Fg=i(Xr);lh=s(Fg,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Fg.forEach(t),dh=f(Ot),qs=r(Ot,"P",{});var td=i(qs);ch=s(td,"The DeBERTa model was proposed in "),xs=r(td,"A",{href:!0,rel:!0});var qg=i(xs);ph=s(qg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),qg.forEach(t),hh=s(td,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),td.forEach(t),fh=f(Ot),zs=r(Ot,"P",{});var od=i(zs);mh=s(od,"This model is also a PyTorch "),js=r(od,"A",{href:!0,rel:!0});var xg=i(js);uh=s(xg,"torch.nn.Module"),xg.forEach(t),gh=s(od,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),od.forEach(t),_h=f(Ot),ft=r(Ot,"DIV",{class:!0});var It=i(ft);v(Ms.$$.fragment,It),bh=f(It),ho=r(It,"P",{});var er=i(ho);kh=s(er,"The "),Ra=r(er,"A",{href:!0});var zg=i(Ra);wh=s(zg,"DebertaForTokenClassification"),zg.forEach(t),Th=s(er," forward method, overrides the "),Yr=r(er,"CODE",{});var jg=i(Yr);vh=s(jg,"__call__"),jg.forEach(t),yh=s(er," special method."),er.forEach(t),$h=f(It),v(tn.$$.fragment,It),Dh=f(It),v(on.$$.fragment,It),Eh=f(It),v(nn.$$.fragment,It),It.forEach(t),Ot.forEach(t),vl=f(o),fo=r(o,"H2",{class:!0});var nd=i(fo);sn=r(nd,"A",{id:!0,class:!0,href:!0});var Mg=i(sn);Zr=r(Mg,"SPAN",{});var Cg=i(Zr);v(Cs.$$.fragment,Cg),Cg.forEach(t),Mg.forEach(t),Fh=f(nd),ei=r(nd,"SPAN",{});var Pg=i(ei);qh=s(Pg,"DebertaForQuestionAnswering"),Pg.forEach(t),nd.forEach(t),yl=f(o),dt=r(o,"DIV",{class:!0});var St=i(dt);v(Ps.$$.fragment,St),xh=f(St),mo=r(St,"P",{});var tr=i(mo);zh=s(tr,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ti=r(tr,"CODE",{});var Bg=i(ti);jh=s(Bg,"span start logits"),Bg.forEach(t),Mh=s(tr," and "),oi=r(tr,"CODE",{});var Ag=i(oi);Ch=s(Ag,"span end logits"),Ag.forEach(t),Ph=s(tr,")."),tr.forEach(t),Bh=f(St),Bs=r(St,"P",{});var sd=i(Bs);Ah=s(sd,"The DeBERTa model was proposed in "),As=r(sd,"A",{href:!0,rel:!0});var Lg=i(As);Lh=s(Lg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Lg.forEach(t),Rh=s(sd,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),sd.forEach(t),Oh=f(St),Ls=r(St,"P",{});var ad=i(Ls);Ih=s(ad,"This model is also a PyTorch "),Rs=r(ad,"A",{href:!0,rel:!0});var Rg=i(Rs);Sh=s(Rg,"torch.nn.Module"),Rg.forEach(t),Nh=s(ad,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ad.forEach(t),Wh=f(St),mt=r(St,"DIV",{class:!0});var Nt=i(mt);v(Os.$$.fragment,Nt),Hh=f(Nt),uo=r(Nt,"P",{});var or=i(uo);Uh=s(or,"The "),Oa=r(or,"A",{href:!0});var Og=i(Oa);Kh=s(Og,"DebertaForQuestionAnswering"),Og.forEach(t),Qh=s(or," forward method, overrides the "),ni=r(or,"CODE",{});var Ig=i(ni);Gh=s(Ig,"__call__"),Ig.forEach(t),Vh=s(or," special method."),or.forEach(t),Jh=f(Nt),v(an.$$.fragment,Nt),Xh=f(Nt),v(rn.$$.fragment,Nt),Yh=f(Nt),v(ln.$$.fragment,Nt),Nt.forEach(t),St.forEach(t),$l=f(o),go=r(o,"H2",{class:!0});var rd=i(go);dn=r(rd,"A",{id:!0,class:!0,href:!0});var Sg=i(dn);si=r(Sg,"SPAN",{});var Ng=i(si);v(Is.$$.fragment,Ng),Ng.forEach(t),Sg.forEach(t),Zh=f(rd),ai=r(rd,"SPAN",{});var Wg=i(ai);ef=s(Wg,"TFDebertaModel"),Wg.forEach(t),rd.forEach(t),Dl=f(o),ct=r(o,"DIV",{class:!0});var Wt=i(ct);v(Ss.$$.fragment,Wt),tf=f(Wt),Ns=r(Wt,"P",{});var id=i(Ns);of=s(id,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Ws=r(id,"A",{href:!0,rel:!0});var Hg=i(Ws);nf=s(Hg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Hg.forEach(t),sf=s(id,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),id.forEach(t),af=f(Wt),Hs=r(Wt,"P",{});var ld=i(Hs);rf=s(ld,"This model is also a "),Us=r(ld,"A",{href:!0,rel:!0});var Ug=i(Us);lf=s(Ug,"tf.keras.Model"),Ug.forEach(t),df=s(ld,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ld.forEach(t),cf=f(Wt),v(cn.$$.fragment,Wt),pf=f(Wt),Et=r(Wt,"DIV",{class:!0});var On=i(Et);v(Ks.$$.fragment,On),hf=f(On),_o=r(On,"P",{});var nr=i(_o);ff=s(nr,"The "),Ia=r(nr,"A",{href:!0});var Kg=i(Ia);mf=s(Kg,"TFDebertaModel"),Kg.forEach(t),uf=s(nr," forward method, overrides the "),ri=r(nr,"CODE",{});var Qg=i(ri);gf=s(Qg,"__call__"),Qg.forEach(t),_f=s(nr," special method."),nr.forEach(t),bf=f(On),v(pn.$$.fragment,On),kf=f(On),v(hn.$$.fragment,On),On.forEach(t),Wt.forEach(t),El=f(o),bo=r(o,"H2",{class:!0});var dd=i(bo);fn=r(dd,"A",{id:!0,class:!0,href:!0});var Gg=i(fn);ii=r(Gg,"SPAN",{});var Vg=i(ii);v(Qs.$$.fragment,Vg),Vg.forEach(t),Gg.forEach(t),wf=f(dd),li=r(dd,"SPAN",{});var Jg=i(li);Tf=s(Jg,"TFDebertaPreTrainedModel"),Jg.forEach(t),dd.forEach(t),Fl=f(o),jt=r(o,"DIV",{class:!0});var sr=i(jt);v(Gs.$$.fragment,sr),vf=f(sr),di=r(sr,"P",{});var Xg=i(di);yf=s(Xg,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Xg.forEach(t),$f=f(sr),Ft=r(sr,"DIV",{class:!0});var In=i(Ft);v(Vs.$$.fragment,In),Df=f(In),ci=r(In,"P",{});var Yg=i(ci);Ef=s(Yg,"Calls the model on new inputs and returns the outputs as tensors."),Yg.forEach(t),Ff=f(In),Js=r(In,"P",{});var cd=i(Js);qf=s(cd,"In this case "),pi=r(cd,"CODE",{});var Zg=i(pi);xf=s(Zg,"call()"),Zg.forEach(t),zf=s(cd,` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),cd.forEach(t),jf=f(In),vt=r(In,"P",{});var Ht=i(vt);Mf=s(Ht,`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),hi=r(Ht,"CODE",{});var e_=i(hi);Cf=s(e_,"tf.keras.Model"),e_.forEach(t),Pf=s(Ht,`.
To call a model on an input, always use the `),fi=r(Ht,"CODE",{});var t_=i(fi);Bf=s(t_,"__call__()"),t_.forEach(t),Af=s(Ht,` method,
i.e. `),mi=r(Ht,"CODE",{});var o_=i(mi);Lf=s(o_,"model(inputs)"),o_.forEach(t),Rf=s(Ht,", which relies on the underlying "),ui=r(Ht,"CODE",{});var n_=i(ui);Of=s(n_,"call()"),n_.forEach(t),If=s(Ht," method."),Ht.forEach(t),In.forEach(t),sr.forEach(t),ql=f(o),ko=r(o,"H2",{class:!0});var pd=i(ko);mn=r(pd,"A",{id:!0,class:!0,href:!0});var s_=i(mn);gi=r(s_,"SPAN",{});var a_=i(gi);v(Xs.$$.fragment,a_),a_.forEach(t),s_.forEach(t),Sf=f(pd),_i=r(pd,"SPAN",{});var r_=i(_i);Nf=s(r_,"TFDebertaForMaskedLM"),r_.forEach(t),pd.forEach(t),xl=f(o),pt=r(o,"DIV",{class:!0});var Ut=i(pt);v(Ys.$$.fragment,Ut),Wf=f(Ut),wo=r(Ut,"P",{});var ar=i(wo);Hf=s(ar,"DeBERTa Model with a "),bi=r(ar,"CODE",{});var i_=i(bi);Uf=s(i_,"language modeling"),i_.forEach(t),Kf=s(ar,` head on top.
The DeBERTa model was proposed in `),Zs=r(ar,"A",{href:!0,rel:!0});var l_=i(Zs);Qf=s(l_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),l_.forEach(t),Gf=s(ar,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ar.forEach(t),Vf=f(Ut),ea=r(Ut,"P",{});var hd=i(ea);Jf=s(hd,"This model is also a "),ta=r(hd,"A",{href:!0,rel:!0});var d_=i(ta);Xf=s(d_,"tf.keras.Model"),d_.forEach(t),Yf=s(hd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hd.forEach(t),Zf=f(Ut),v(un.$$.fragment,Ut),em=f(Ut),ut=r(Ut,"DIV",{class:!0});var Kt=i(ut);v(oa.$$.fragment,Kt),tm=f(Kt),To=r(Kt,"P",{});var rr=i(To);om=s(rr,"The "),Sa=r(rr,"A",{href:!0});var c_=i(Sa);nm=s(c_,"TFDebertaForMaskedLM"),c_.forEach(t),sm=s(rr," forward method, overrides the "),ki=r(rr,"CODE",{});var p_=i(ki);am=s(p_,"__call__"),p_.forEach(t),rm=s(rr," special method."),rr.forEach(t),im=f(Kt),v(gn.$$.fragment,Kt),lm=f(Kt),v(_n.$$.fragment,Kt),dm=f(Kt),v(bn.$$.fragment,Kt),Kt.forEach(t),Ut.forEach(t),zl=f(o),vo=r(o,"H2",{class:!0});var fd=i(vo);kn=r(fd,"A",{id:!0,class:!0,href:!0});var h_=i(kn);wi=r(h_,"SPAN",{});var f_=i(wi);v(na.$$.fragment,f_),f_.forEach(t),h_.forEach(t),cm=f(fd),Ti=r(fd,"SPAN",{});var m_=i(Ti);pm=s(m_,"TFDebertaForSequenceClassification"),m_.forEach(t),fd.forEach(t),jl=f(o),ot=r(o,"DIV",{class:!0});var qt=i(ot);v(sa.$$.fragment,qt),hm=f(qt),vi=r(qt,"P",{});var u_=i(vi);fm=s(u_,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),u_.forEach(t),mm=f(qt),aa=r(qt,"P",{});var md=i(aa);um=s(md,"The DeBERTa model was proposed in "),ra=r(md,"A",{href:!0,rel:!0});var g_=i(ra);gm=s(g_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),g_.forEach(t),_m=s(md,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),md.forEach(t),bm=f(qt),ia=r(qt,"P",{});var ud=i(ia);km=s(ud,"This model is also a "),la=r(ud,"A",{href:!0,rel:!0});var __=i(la);wm=s(__,"tf.keras.Model"),__.forEach(t),Tm=s(ud,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ud.forEach(t),vm=f(qt),v(wn.$$.fragment,qt),ym=f(qt),gt=r(qt,"DIV",{class:!0});var Qt=i(gt);v(da.$$.fragment,Qt),$m=f(Qt),yo=r(Qt,"P",{});var ir=i(yo);Dm=s(ir,"The "),Na=r(ir,"A",{href:!0});var b_=i(Na);Em=s(b_,"TFDebertaForSequenceClassification"),b_.forEach(t),Fm=s(ir," forward method, overrides the "),yi=r(ir,"CODE",{});var k_=i(yi);qm=s(k_,"__call__"),k_.forEach(t),xm=s(ir," special method."),ir.forEach(t),zm=f(Qt),v(Tn.$$.fragment,Qt),jm=f(Qt),v(vn.$$.fragment,Qt),Mm=f(Qt),v(yn.$$.fragment,Qt),Qt.forEach(t),qt.forEach(t),Ml=f(o),$o=r(o,"H2",{class:!0});var gd=i($o);$n=r(gd,"A",{id:!0,class:!0,href:!0});var w_=i($n);$i=r(w_,"SPAN",{});var T_=i($i);v(ca.$$.fragment,T_),T_.forEach(t),w_.forEach(t),Cm=f(gd),Di=r(gd,"SPAN",{});var v_=i(Di);Pm=s(v_,"TFDebertaForTokenClassification"),v_.forEach(t),gd.forEach(t),Cl=f(o),nt=r(o,"DIV",{class:!0});var xt=i(nt);v(pa.$$.fragment,xt),Bm=f(xt),Ei=r(xt,"P",{});var y_=i(Ei);Am=s(y_,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),y_.forEach(t),Lm=f(xt),ha=r(xt,"P",{});var _d=i(ha);Rm=s(_d,"The DeBERTa model was proposed in "),fa=r(_d,"A",{href:!0,rel:!0});var $_=i(fa);Om=s($_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),$_.forEach(t),Im=s(_d,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),_d.forEach(t),Sm=f(xt),ma=r(xt,"P",{});var bd=i(ma);Nm=s(bd,"This model is also a "),ua=r(bd,"A",{href:!0,rel:!0});var D_=i(ua);Wm=s(D_,"tf.keras.Model"),D_.forEach(t),Hm=s(bd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bd.forEach(t),Um=f(xt),v(Dn.$$.fragment,xt),Km=f(xt),_t=r(xt,"DIV",{class:!0});var Gt=i(_t);v(ga.$$.fragment,Gt),Qm=f(Gt),Do=r(Gt,"P",{});var lr=i(Do);Gm=s(lr,"The "),Wa=r(lr,"A",{href:!0});var E_=i(Wa);Vm=s(E_,"TFDebertaForTokenClassification"),E_.forEach(t),Jm=s(lr," forward method, overrides the "),Fi=r(lr,"CODE",{});var F_=i(Fi);Xm=s(F_,"__call__"),F_.forEach(t),Ym=s(lr," special method."),lr.forEach(t),Zm=f(Gt),v(En.$$.fragment,Gt),eu=f(Gt),v(Fn.$$.fragment,Gt),tu=f(Gt),v(qn.$$.fragment,Gt),Gt.forEach(t),xt.forEach(t),Pl=f(o),Eo=r(o,"H2",{class:!0});var kd=i(Eo);xn=r(kd,"A",{id:!0,class:!0,href:!0});var q_=i(xn);qi=r(q_,"SPAN",{});var x_=i(qi);v(_a.$$.fragment,x_),x_.forEach(t),q_.forEach(t),ou=f(kd),xi=r(kd,"SPAN",{});var z_=i(xi);nu=s(z_,"TFDebertaForQuestionAnswering"),z_.forEach(t),kd.forEach(t),Bl=f(o),st=r(o,"DIV",{class:!0});var zt=i(st);v(ba.$$.fragment,zt),su=f(zt),Fo=r(zt,"P",{});var dr=i(Fo);au=s(dr,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),zi=r(dr,"CODE",{});var j_=i(zi);ru=s(j_,"span start logits"),j_.forEach(t),iu=s(dr," and "),ji=r(dr,"CODE",{});var M_=i(ji);lu=s(M_,"span end logits"),M_.forEach(t),du=s(dr,")."),dr.forEach(t),cu=f(zt),ka=r(zt,"P",{});var wd=i(ka);pu=s(wd,"The DeBERTa model was proposed in "),wa=r(wd,"A",{href:!0,rel:!0});var C_=i(wa);hu=s(C_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),C_.forEach(t),fu=s(wd,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),wd.forEach(t),mu=f(zt),Ta=r(zt,"P",{});var Td=i(Ta);uu=s(Td,"This model is also a "),va=r(Td,"A",{href:!0,rel:!0});var P_=i(va);gu=s(P_,"tf.keras.Model"),P_.forEach(t),_u=s(Td,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Td.forEach(t),bu=f(zt),v(zn.$$.fragment,zt),ku=f(zt),bt=r(zt,"DIV",{class:!0});var Vt=i(bt);v(ya.$$.fragment,Vt),wu=f(Vt),qo=r(Vt,"P",{});var cr=i(qo);Tu=s(cr,"The "),Ha=r(cr,"A",{href:!0});var B_=i(Ha);vu=s(B_,"TFDebertaForQuestionAnswering"),B_.forEach(t),yu=s(cr," forward method, overrides the "),Mi=r(cr,"CODE",{});var A_=i(Mi);$u=s(A_,"__call__"),A_.forEach(t),Du=s(cr," special method."),cr.forEach(t),Eu=f(Vt),v(jn.$$.fragment,Vt),Fu=f(Vt),v(Mn.$$.fragment,Vt),qu=f(Vt),v(Cn.$$.fragment,Vt),Vt.forEach(t),zt.forEach(t),this.h()},h(){g(d,"name","hf:doc:metadata"),g(d,"content",JSON.stringify(jb)),g(m,"id","deberta"),g(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(m,"href","#deberta"),g(c,"class","relative group"),g(oe,"id","overview"),g(oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(oe,"href","#overview"),g(L,"class","relative group"),g(de,"href","https://arxiv.org/abs/2006.03654"),g(de,"rel","nofollow"),g(ce,"href","https://github.com/microsoft/DeBERTa"),g(ce,"rel","nofollow"),g(pe,"href","https://huggingface.co/DeBERTa"),g(pe,"rel","nofollow"),g(W,"href","https://huggingface.co/kamalkraj"),g(W,"rel","nofollow"),g(H,"href","https://github.com/microsoft/DeBERTa"),g(H,"rel","nofollow"),g(S,"id","transformers.DebertaConfig"),g(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(S,"href","#transformers.DebertaConfig"),g(re,"class","relative group"),g(We,"href","/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaModel"),g(He,"href","/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.TFDebertaModel"),g(Ne,"href","https://huggingface.co/microsoft/deberta-base"),g(Ne,"rel","nofollow"),g(Q,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),g(me,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),g(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(jo,"id","transformers.DebertaTokenizer"),g(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(jo,"href","#transformers.DebertaTokenizer"),g(Jt,"class","relative group"),g(Ma,"href","/docs/transformers/v4.24.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),g(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ca,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ao,"id","transformers.DebertaTokenizerFast"),g(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Ao,"href","#transformers.DebertaTokenizerFast"),g(Zt,"class","relative group"),g(Pa,"href","/docs/transformers/v4.24.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),g(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Io,"id","transformers.DebertaModel"),g(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Io,"href","#transformers.DebertaModel"),g(to,"class","relative group"),g(is,"href","https://arxiv.org/abs/2006.03654"),g(is,"rel","nofollow"),g(ds,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(ds,"rel","nofollow"),g(Ba,"href","/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaModel"),g(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Wo,"id","transformers.DebertaPreTrainedModel"),g(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Wo,"href","#transformers.DebertaPreTrainedModel"),g(no,"class","relative group"),g(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ho,"id","transformers.DebertaForMaskedLM"),g(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Ho,"href","#transformers.DebertaForMaskedLM"),g(ao,"class","relative group"),g(us,"href","https://arxiv.org/abs/2006.03654"),g(us,"rel","nofollow"),g(_s,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(_s,"rel","nofollow"),g(Aa,"href","/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaForMaskedLM"),g(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Go,"id","transformers.DebertaForSequenceClassification"),g(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Go,"href","#transformers.DebertaForSequenceClassification"),g(lo,"class","relative group"),g(vs,"href","https://arxiv.org/abs/2006.03654"),g(vs,"rel","nofollow"),g($s,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g($s,"rel","nofollow"),g(La,"href","/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaForSequenceClassification"),g(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(en,"id","transformers.DebertaForTokenClassification"),g(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(en,"href","#transformers.DebertaForTokenClassification"),g(po,"class","relative group"),g(xs,"href","https://arxiv.org/abs/2006.03654"),g(xs,"rel","nofollow"),g(js,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(js,"rel","nofollow"),g(Ra,"href","/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaForTokenClassification"),g(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(sn,"id","transformers.DebertaForQuestionAnswering"),g(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(sn,"href","#transformers.DebertaForQuestionAnswering"),g(fo,"class","relative group"),g(As,"href","https://arxiv.org/abs/2006.03654"),g(As,"rel","nofollow"),g(Rs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Rs,"rel","nofollow"),g(Oa,"href","/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.DebertaForQuestionAnswering"),g(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(dn,"id","transformers.TFDebertaModel"),g(dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(dn,"href","#transformers.TFDebertaModel"),g(go,"class","relative group"),g(Ws,"href","https://arxiv.org/abs/2006.03654"),g(Ws,"rel","nofollow"),g(Us,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Us,"rel","nofollow"),g(Ia,"href","/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.TFDebertaModel"),g(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(fn,"id","transformers.TFDebertaPreTrainedModel"),g(fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(fn,"href","#transformers.TFDebertaPreTrainedModel"),g(bo,"class","relative group"),g(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(mn,"id","transformers.TFDebertaForMaskedLM"),g(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(mn,"href","#transformers.TFDebertaForMaskedLM"),g(ko,"class","relative group"),g(Zs,"href","https://arxiv.org/abs/2006.03654"),g(Zs,"rel","nofollow"),g(ta,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(ta,"rel","nofollow"),g(Sa,"href","/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.TFDebertaForMaskedLM"),g(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(kn,"id","transformers.TFDebertaForSequenceClassification"),g(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(kn,"href","#transformers.TFDebertaForSequenceClassification"),g(vo,"class","relative group"),g(ra,"href","https://arxiv.org/abs/2006.03654"),g(ra,"rel","nofollow"),g(la,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(la,"rel","nofollow"),g(Na,"href","/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.TFDebertaForSequenceClassification"),g(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g($n,"id","transformers.TFDebertaForTokenClassification"),g($n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g($n,"href","#transformers.TFDebertaForTokenClassification"),g($o,"class","relative group"),g(fa,"href","https://arxiv.org/abs/2006.03654"),g(fa,"rel","nofollow"),g(ua,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(ua,"rel","nofollow"),g(Wa,"href","/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.TFDebertaForTokenClassification"),g(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(xn,"id","transformers.TFDebertaForQuestionAnswering"),g(xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(xn,"href","#transformers.TFDebertaForQuestionAnswering"),g(Eo,"class","relative group"),g(wa,"href","https://arxiv.org/abs/2006.03654"),g(wa,"rel","nofollow"),g(va,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(va,"rel","nofollow"),g(Ha,"href","/docs/transformers/v4.24.0/en/model_doc/deberta#transformers.TFDebertaForQuestionAnswering"),g(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,b){e(document.head,d),_(o,u,b),_(o,c,b),e(c,m),e(m,w),y(l,w,null),e(c,p),e(c,z),e(z,ae),_(o,V,b),_(o,L,b),e(L,oe),e(oe,se),y(F,se,null),e(L,qe),e(L,G),e(G,xe),_(o,Te,b),_(o,I,b),e(I,ze),e(I,de),e(de,J),e(I,je),_(o,ve,b),_(o,U,b),e(U,Me),_(o,ye,b),_(o,K,b),e(K,Ce),_(o,$e,b),_(o,ne,b),e(ne,M),e(M,C),e(M,ce),e(ce,X),e(M,Pe),_(o,De,b),_(o,R,b),e(R,Be),e(R,pe),e(pe,P),e(R,Ae),e(R,W),e(W,Le),e(R,Re),e(R,H),e(H,Oe),e(R,Ie),_(o,O,b),_(o,re,b),e(re,S),e(S,ue),y(ee,ue,null),e(re,B),e(re,ge),e(ge,A),_(o,Ee,b),_(o,Y,b),y(k,Y,null),e(Y,x),e(Y,fe),e(fe,ie),e(fe,We),e(We,Ue),e(fe,j),e(fe,He),e(He,Ke),e(fe,Qe),e(fe,Ne),e(Ne,Ge),e(fe,N),e(Y,Z),e(Y,Fe),e(Fe,Ve),e(Fe,Q),e(Q,Je),e(Fe,Xe),e(Fe,me),e(me,Ye),e(Fe,le),e(Y,Ze),y(zo,Y,null),_(o,ll,b),_(o,Jt,b),e(Jt,jo),e(jo,pr),y(Sn,pr,null),e(Jt,vd),e(Jt,hr),e(hr,yd),_(o,dl,b),_(o,he,b),y(Nn,he,null),e(he,$d),e(he,fr),e(fr,Dd),e(he,Ed),e(he,mr),e(mr,Fd),e(he,qd),y(Mo,he,null),e(he,xd),e(he,Wn),e(Wn,zd),e(Wn,ur),e(ur,jd),e(Wn,Md),e(he,Cd),y(Co,he,null),e(he,Pd),e(he,Hn),e(Hn,Bd),e(Hn,Ma),e(Ma,Ad),e(Hn,Ld),e(he,Rd),e(he,Bt),y(Un,Bt,null),e(Bt,Od),e(Bt,gr),e(gr,Id),e(Bt,Sd),e(Bt,Kn),e(Kn,_r),e(_r,Nd),e(Kn,Wd),e(Kn,br),e(br,Hd),e(he,Ud),e(he,Po),y(Qn,Po,null),e(Po,Kd),e(Po,Xt),e(Xt,Qd),e(Xt,kr),e(kr,Gd),e(Xt,Vd),e(Xt,wr),e(wr,Jd),e(Xt,Xd),e(he,Yd),e(he,yt),y(Gn,yt,null),e(yt,Zd),e(yt,Tr),e(Tr,ec),e(yt,tc),y(Bo,yt,null),e(yt,oc),e(yt,Yt),e(Yt,nc),e(Yt,vr),e(vr,sc),e(Yt,ac),e(Yt,yr),e(yr,rc),e(Yt,ic),e(he,lc),e(he,Ca),y(Vn,Ca,null),_(o,cl,b),_(o,Zt,b),e(Zt,Ao),e(Ao,$r),y(Jn,$r,null),e(Zt,dc),e(Zt,Dr),e(Dr,cc),_(o,pl,b),_(o,Se,b),y(Xn,Se,null),e(Se,pc),e(Se,Yn),e(Yn,hc),e(Yn,Er),e(Er,fc),e(Yn,mc),e(Se,uc),e(Se,Fr),e(Fr,gc),e(Se,_c),y(Lo,Se,null),e(Se,bc),e(Se,Zn),e(Zn,kc),e(Zn,qr),e(qr,wc),e(Zn,Tc),e(Se,vc),y(Ro,Se,null),e(Se,yc),e(Se,es),e(es,$c),e(es,Pa),e(Pa,Dc),e(es,Ec),e(Se,Fc),e(Se,At),y(ts,At,null),e(At,qc),e(At,xr),e(xr,xc),e(At,zc),e(At,os),e(os,zr),e(zr,jc),e(os,Mc),e(os,jr),e(jr,Cc),e(Se,Pc),e(Se,$t),y(ns,$t,null),e($t,Bc),e($t,Mr),e(Mr,Ac),e($t,Lc),y(Oo,$t,null),e($t,Rc),e($t,eo),e(eo,Oc),e(eo,Cr),e(Cr,Ic),e(eo,Sc),e(eo,Pr),e(Pr,Nc),e(eo,Wc),_(o,hl,b),_(o,to,b),e(to,Io),e(Io,Br),y(ss,Br,null),e(to,Hc),e(to,Ar),e(Ar,Uc),_(o,fl,b),_(o,wt,b),y(as,wt,null),e(wt,Kc),e(wt,rs),e(rs,Qc),e(rs,is),e(is,Gc),e(rs,Vc),e(wt,Jc),e(wt,ls),e(ls,Xc),e(ls,ds),e(ds,Yc),e(ls,Zc),e(wt,ep),e(wt,Dt),y(cs,Dt,null),e(Dt,tp),e(Dt,oo),e(oo,op),e(oo,Ba),e(Ba,np),e(oo,sp),e(oo,Lr),e(Lr,ap),e(oo,rp),e(Dt,ip),y(So,Dt,null),e(Dt,lp),y(No,Dt,null),_(o,ml,b),_(o,no,b),e(no,Wo),e(Wo,Rr),y(ps,Rr,null),e(no,dp),e(no,Or),e(Or,cp),_(o,ul,b),_(o,so,b),y(hs,so,null),e(so,pp),e(so,Ir),e(Ir,hp),_(o,gl,b),_(o,ao,b),e(ao,Ho),e(Ho,Sr),y(fs,Sr,null),e(ao,fp),e(ao,Nr),e(Nr,mp),_(o,_l,b),_(o,Tt,b),y(ms,Tt,null),e(Tt,up),e(Tt,ro),e(ro,gp),e(ro,Wr),e(Wr,_p),e(ro,bp),e(ro,us),e(us,kp),e(ro,wp),e(Tt,Tp),e(Tt,gs),e(gs,vp),e(gs,_s),e(_s,yp),e(gs,$p),e(Tt,Dp),e(Tt,ht),y(bs,ht,null),e(ht,Ep),e(ht,io),e(io,Fp),e(io,Aa),e(Aa,qp),e(io,xp),e(io,Hr),e(Hr,zp),e(io,jp),e(ht,Mp),y(Uo,ht,null),e(ht,Cp),y(Ko,ht,null),e(ht,Pp),y(Qo,ht,null),_(o,bl,b),_(o,lo,b),e(lo,Go),e(Go,Ur),y(ks,Ur,null),e(lo,Bp),e(lo,Kr),e(Kr,Ap),_(o,kl,b),_(o,it,b),y(ws,it,null),e(it,Lp),e(it,Qr),e(Qr,Rp),e(it,Op),e(it,Ts),e(Ts,Ip),e(Ts,vs),e(vs,Sp),e(Ts,Np),e(it,Wp),e(it,ys),e(ys,Hp),e(ys,$s),e($s,Up),e(ys,Kp),e(it,Qp),e(it,et),y(Ds,et,null),e(et,Gp),e(et,co),e(co,Vp),e(co,La),e(La,Jp),e(co,Xp),e(co,Gr),e(Gr,Yp),e(co,Zp),e(et,eh),y(Vo,et,null),e(et,th),y(Jo,et,null),e(et,oh),y(Xo,et,null),e(et,nh),y(Yo,et,null),e(et,sh),y(Zo,et,null),_(o,wl,b),_(o,po,b),e(po,en),e(en,Vr),y(Es,Vr,null),e(po,ah),e(po,Jr),e(Jr,rh),_(o,Tl,b),_(o,lt,b),y(Fs,lt,null),e(lt,ih),e(lt,Xr),e(Xr,lh),e(lt,dh),e(lt,qs),e(qs,ch),e(qs,xs),e(xs,ph),e(qs,hh),e(lt,fh),e(lt,zs),e(zs,mh),e(zs,js),e(js,uh),e(zs,gh),e(lt,_h),e(lt,ft),y(Ms,ft,null),e(ft,bh),e(ft,ho),e(ho,kh),e(ho,Ra),e(Ra,wh),e(ho,Th),e(ho,Yr),e(Yr,vh),e(ho,yh),e(ft,$h),y(tn,ft,null),e(ft,Dh),y(on,ft,null),e(ft,Eh),y(nn,ft,null),_(o,vl,b),_(o,fo,b),e(fo,sn),e(sn,Zr),y(Cs,Zr,null),e(fo,Fh),e(fo,ei),e(ei,qh),_(o,yl,b),_(o,dt,b),y(Ps,dt,null),e(dt,xh),e(dt,mo),e(mo,zh),e(mo,ti),e(ti,jh),e(mo,Mh),e(mo,oi),e(oi,Ch),e(mo,Ph),e(dt,Bh),e(dt,Bs),e(Bs,Ah),e(Bs,As),e(As,Lh),e(Bs,Rh),e(dt,Oh),e(dt,Ls),e(Ls,Ih),e(Ls,Rs),e(Rs,Sh),e(Ls,Nh),e(dt,Wh),e(dt,mt),y(Os,mt,null),e(mt,Hh),e(mt,uo),e(uo,Uh),e(uo,Oa),e(Oa,Kh),e(uo,Qh),e(uo,ni),e(ni,Gh),e(uo,Vh),e(mt,Jh),y(an,mt,null),e(mt,Xh),y(rn,mt,null),e(mt,Yh),y(ln,mt,null),_(o,$l,b),_(o,go,b),e(go,dn),e(dn,si),y(Is,si,null),e(go,Zh),e(go,ai),e(ai,ef),_(o,Dl,b),_(o,ct,b),y(Ss,ct,null),e(ct,tf),e(ct,Ns),e(Ns,of),e(Ns,Ws),e(Ws,nf),e(Ns,sf),e(ct,af),e(ct,Hs),e(Hs,rf),e(Hs,Us),e(Us,lf),e(Hs,df),e(ct,cf),y(cn,ct,null),e(ct,pf),e(ct,Et),y(Ks,Et,null),e(Et,hf),e(Et,_o),e(_o,ff),e(_o,Ia),e(Ia,mf),e(_o,uf),e(_o,ri),e(ri,gf),e(_o,_f),e(Et,bf),y(pn,Et,null),e(Et,kf),y(hn,Et,null),_(o,El,b),_(o,bo,b),e(bo,fn),e(fn,ii),y(Qs,ii,null),e(bo,wf),e(bo,li),e(li,Tf),_(o,Fl,b),_(o,jt,b),y(Gs,jt,null),e(jt,vf),e(jt,di),e(di,yf),e(jt,$f),e(jt,Ft),y(Vs,Ft,null),e(Ft,Df),e(Ft,ci),e(ci,Ef),e(Ft,Ff),e(Ft,Js),e(Js,qf),e(Js,pi),e(pi,xf),e(Js,zf),e(Ft,jf),e(Ft,vt),e(vt,Mf),e(vt,hi),e(hi,Cf),e(vt,Pf),e(vt,fi),e(fi,Bf),e(vt,Af),e(vt,mi),e(mi,Lf),e(vt,Rf),e(vt,ui),e(ui,Of),e(vt,If),_(o,ql,b),_(o,ko,b),e(ko,mn),e(mn,gi),y(Xs,gi,null),e(ko,Sf),e(ko,_i),e(_i,Nf),_(o,xl,b),_(o,pt,b),y(Ys,pt,null),e(pt,Wf),e(pt,wo),e(wo,Hf),e(wo,bi),e(bi,Uf),e(wo,Kf),e(wo,Zs),e(Zs,Qf),e(wo,Gf),e(pt,Vf),e(pt,ea),e(ea,Jf),e(ea,ta),e(ta,Xf),e(ea,Yf),e(pt,Zf),y(un,pt,null),e(pt,em),e(pt,ut),y(oa,ut,null),e(ut,tm),e(ut,To),e(To,om),e(To,Sa),e(Sa,nm),e(To,sm),e(To,ki),e(ki,am),e(To,rm),e(ut,im),y(gn,ut,null),e(ut,lm),y(_n,ut,null),e(ut,dm),y(bn,ut,null),_(o,zl,b),_(o,vo,b),e(vo,kn),e(kn,wi),y(na,wi,null),e(vo,cm),e(vo,Ti),e(Ti,pm),_(o,jl,b),_(o,ot,b),y(sa,ot,null),e(ot,hm),e(ot,vi),e(vi,fm),e(ot,mm),e(ot,aa),e(aa,um),e(aa,ra),e(ra,gm),e(aa,_m),e(ot,bm),e(ot,ia),e(ia,km),e(ia,la),e(la,wm),e(ia,Tm),e(ot,vm),y(wn,ot,null),e(ot,ym),e(ot,gt),y(da,gt,null),e(gt,$m),e(gt,yo),e(yo,Dm),e(yo,Na),e(Na,Em),e(yo,Fm),e(yo,yi),e(yi,qm),e(yo,xm),e(gt,zm),y(Tn,gt,null),e(gt,jm),y(vn,gt,null),e(gt,Mm),y(yn,gt,null),_(o,Ml,b),_(o,$o,b),e($o,$n),e($n,$i),y(ca,$i,null),e($o,Cm),e($o,Di),e(Di,Pm),_(o,Cl,b),_(o,nt,b),y(pa,nt,null),e(nt,Bm),e(nt,Ei),e(Ei,Am),e(nt,Lm),e(nt,ha),e(ha,Rm),e(ha,fa),e(fa,Om),e(ha,Im),e(nt,Sm),e(nt,ma),e(ma,Nm),e(ma,ua),e(ua,Wm),e(ma,Hm),e(nt,Um),y(Dn,nt,null),e(nt,Km),e(nt,_t),y(ga,_t,null),e(_t,Qm),e(_t,Do),e(Do,Gm),e(Do,Wa),e(Wa,Vm),e(Do,Jm),e(Do,Fi),e(Fi,Xm),e(Do,Ym),e(_t,Zm),y(En,_t,null),e(_t,eu),y(Fn,_t,null),e(_t,tu),y(qn,_t,null),_(o,Pl,b),_(o,Eo,b),e(Eo,xn),e(xn,qi),y(_a,qi,null),e(Eo,ou),e(Eo,xi),e(xi,nu),_(o,Bl,b),_(o,st,b),y(ba,st,null),e(st,su),e(st,Fo),e(Fo,au),e(Fo,zi),e(zi,ru),e(Fo,iu),e(Fo,ji),e(ji,lu),e(Fo,du),e(st,cu),e(st,ka),e(ka,pu),e(ka,wa),e(wa,hu),e(ka,fu),e(st,mu),e(st,Ta),e(Ta,uu),e(Ta,va),e(va,gu),e(Ta,_u),e(st,bu),y(zn,st,null),e(st,ku),e(st,bt),y(ya,bt,null),e(bt,wu),e(bt,qo),e(qo,Tu),e(qo,Ha),e(Ha,vu),e(qo,yu),e(qo,Mi),e(Mi,$u),e(qo,Du),e(bt,Eu),y(jn,bt,null),e(bt,Fu),y(Mn,bt,null),e(bt,qu),y(Cn,bt,null),Al=!0},p(o,[b]){const $a={};b&2&&($a.$$scope={dirty:b,ctx:o}),zo.$set($a);const Ci={};b&2&&(Ci.$$scope={dirty:b,ctx:o}),Mo.$set(Ci);const Pi={};b&2&&(Pi.$$scope={dirty:b,ctx:o}),Co.$set(Pi);const Bi={};b&2&&(Bi.$$scope={dirty:b,ctx:o}),Bo.$set(Bi);const Da={};b&2&&(Da.$$scope={dirty:b,ctx:o}),Lo.$set(Da);const Ai={};b&2&&(Ai.$$scope={dirty:b,ctx:o}),Ro.$set(Ai);const Li={};b&2&&(Li.$$scope={dirty:b,ctx:o}),Oo.$set(Li);const Ri={};b&2&&(Ri.$$scope={dirty:b,ctx:o}),So.$set(Ri);const Ea={};b&2&&(Ea.$$scope={dirty:b,ctx:o}),No.$set(Ea);const Oi={};b&2&&(Oi.$$scope={dirty:b,ctx:o}),Uo.$set(Oi);const Ii={};b&2&&(Ii.$$scope={dirty:b,ctx:o}),Ko.$set(Ii);const Si={};b&2&&(Si.$$scope={dirty:b,ctx:o}),Qo.$set(Si);const Ni={};b&2&&(Ni.$$scope={dirty:b,ctx:o}),Vo.$set(Ni);const Fa={};b&2&&(Fa.$$scope={dirty:b,ctx:o}),Jo.$set(Fa);const Wi={};b&2&&(Wi.$$scope={dirty:b,ctx:o}),Xo.$set(Wi);const Mt={};b&2&&(Mt.$$scope={dirty:b,ctx:o}),Yo.$set(Mt);const Hi={};b&2&&(Hi.$$scope={dirty:b,ctx:o}),Zo.$set(Hi);const Ui={};b&2&&(Ui.$$scope={dirty:b,ctx:o}),tn.$set(Ui);const Ki={};b&2&&(Ki.$$scope={dirty:b,ctx:o}),on.$set(Ki);const qa={};b&2&&(qa.$$scope={dirty:b,ctx:o}),nn.$set(qa);const Qi={};b&2&&(Qi.$$scope={dirty:b,ctx:o}),an.$set(Qi);const Gi={};b&2&&(Gi.$$scope={dirty:b,ctx:o}),rn.$set(Gi);const Vi={};b&2&&(Vi.$$scope={dirty:b,ctx:o}),ln.$set(Vi);const Ct={};b&2&&(Ct.$$scope={dirty:b,ctx:o}),cn.$set(Ct);const Pt={};b&2&&(Pt.$$scope={dirty:b,ctx:o}),pn.$set(Pt);const Ji={};b&2&&(Ji.$$scope={dirty:b,ctx:o}),hn.$set(Ji);const Xi={};b&2&&(Xi.$$scope={dirty:b,ctx:o}),un.$set(Xi);const Yi={};b&2&&(Yi.$$scope={dirty:b,ctx:o}),gn.$set(Yi);const xo={};b&2&&(xo.$$scope={dirty:b,ctx:o}),_n.$set(xo);const Zi={};b&2&&(Zi.$$scope={dirty:b,ctx:o}),bn.$set(Zi);const el={};b&2&&(el.$$scope={dirty:b,ctx:o}),wn.$set(el);const xa={};b&2&&(xa.$$scope={dirty:b,ctx:o}),Tn.$set(xa);const tl={};b&2&&(tl.$$scope={dirty:b,ctx:o}),vn.$set(tl);const ol={};b&2&&(ol.$$scope={dirty:b,ctx:o}),yn.$set(ol);const nl={};b&2&&(nl.$$scope={dirty:b,ctx:o}),Dn.$set(nl);const _e={};b&2&&(_e.$$scope={dirty:b,ctx:o}),En.$set(_e);const sl={};b&2&&(sl.$$scope={dirty:b,ctx:o}),Fn.$set(sl);const al={};b&2&&(al.$$scope={dirty:b,ctx:o}),qn.$set(al);const za={};b&2&&(za.$$scope={dirty:b,ctx:o}),zn.$set(za);const rl={};b&2&&(rl.$$scope={dirty:b,ctx:o}),jn.$set(rl);const ja={};b&2&&(ja.$$scope={dirty:b,ctx:o}),Mn.$set(ja);const il={};b&2&&(il.$$scope={dirty:b,ctx:o}),Cn.$set(il)},i(o){Al||($(l.$$.fragment,o),$(F.$$.fragment,o),$(ee.$$.fragment,o),$(k.$$.fragment,o),$(zo.$$.fragment,o),$(Sn.$$.fragment,o),$(Nn.$$.fragment,o),$(Mo.$$.fragment,o),$(Co.$$.fragment,o),$(Un.$$.fragment,o),$(Qn.$$.fragment,o),$(Gn.$$.fragment,o),$(Bo.$$.fragment,o),$(Vn.$$.fragment,o),$(Jn.$$.fragment,o),$(Xn.$$.fragment,o),$(Lo.$$.fragment,o),$(Ro.$$.fragment,o),$(ts.$$.fragment,o),$(ns.$$.fragment,o),$(Oo.$$.fragment,o),$(ss.$$.fragment,o),$(as.$$.fragment,o),$(cs.$$.fragment,o),$(So.$$.fragment,o),$(No.$$.fragment,o),$(ps.$$.fragment,o),$(hs.$$.fragment,o),$(fs.$$.fragment,o),$(ms.$$.fragment,o),$(bs.$$.fragment,o),$(Uo.$$.fragment,o),$(Ko.$$.fragment,o),$(Qo.$$.fragment,o),$(ks.$$.fragment,o),$(ws.$$.fragment,o),$(Ds.$$.fragment,o),$(Vo.$$.fragment,o),$(Jo.$$.fragment,o),$(Xo.$$.fragment,o),$(Yo.$$.fragment,o),$(Zo.$$.fragment,o),$(Es.$$.fragment,o),$(Fs.$$.fragment,o),$(Ms.$$.fragment,o),$(tn.$$.fragment,o),$(on.$$.fragment,o),$(nn.$$.fragment,o),$(Cs.$$.fragment,o),$(Ps.$$.fragment,o),$(Os.$$.fragment,o),$(an.$$.fragment,o),$(rn.$$.fragment,o),$(ln.$$.fragment,o),$(Is.$$.fragment,o),$(Ss.$$.fragment,o),$(cn.$$.fragment,o),$(Ks.$$.fragment,o),$(pn.$$.fragment,o),$(hn.$$.fragment,o),$(Qs.$$.fragment,o),$(Gs.$$.fragment,o),$(Vs.$$.fragment,o),$(Xs.$$.fragment,o),$(Ys.$$.fragment,o),$(un.$$.fragment,o),$(oa.$$.fragment,o),$(gn.$$.fragment,o),$(_n.$$.fragment,o),$(bn.$$.fragment,o),$(na.$$.fragment,o),$(sa.$$.fragment,o),$(wn.$$.fragment,o),$(da.$$.fragment,o),$(Tn.$$.fragment,o),$(vn.$$.fragment,o),$(yn.$$.fragment,o),$(ca.$$.fragment,o),$(pa.$$.fragment,o),$(Dn.$$.fragment,o),$(ga.$$.fragment,o),$(En.$$.fragment,o),$(Fn.$$.fragment,o),$(qn.$$.fragment,o),$(_a.$$.fragment,o),$(ba.$$.fragment,o),$(zn.$$.fragment,o),$(ya.$$.fragment,o),$(jn.$$.fragment,o),$(Mn.$$.fragment,o),$(Cn.$$.fragment,o),Al=!0)},o(o){D(l.$$.fragment,o),D(F.$$.fragment,o),D(ee.$$.fragment,o),D(k.$$.fragment,o),D(zo.$$.fragment,o),D(Sn.$$.fragment,o),D(Nn.$$.fragment,o),D(Mo.$$.fragment,o),D(Co.$$.fragment,o),D(Un.$$.fragment,o),D(Qn.$$.fragment,o),D(Gn.$$.fragment,o),D(Bo.$$.fragment,o),D(Vn.$$.fragment,o),D(Jn.$$.fragment,o),D(Xn.$$.fragment,o),D(Lo.$$.fragment,o),D(Ro.$$.fragment,o),D(ts.$$.fragment,o),D(ns.$$.fragment,o),D(Oo.$$.fragment,o),D(ss.$$.fragment,o),D(as.$$.fragment,o),D(cs.$$.fragment,o),D(So.$$.fragment,o),D(No.$$.fragment,o),D(ps.$$.fragment,o),D(hs.$$.fragment,o),D(fs.$$.fragment,o),D(ms.$$.fragment,o),D(bs.$$.fragment,o),D(Uo.$$.fragment,o),D(Ko.$$.fragment,o),D(Qo.$$.fragment,o),D(ks.$$.fragment,o),D(ws.$$.fragment,o),D(Ds.$$.fragment,o),D(Vo.$$.fragment,o),D(Jo.$$.fragment,o),D(Xo.$$.fragment,o),D(Yo.$$.fragment,o),D(Zo.$$.fragment,o),D(Es.$$.fragment,o),D(Fs.$$.fragment,o),D(Ms.$$.fragment,o),D(tn.$$.fragment,o),D(on.$$.fragment,o),D(nn.$$.fragment,o),D(Cs.$$.fragment,o),D(Ps.$$.fragment,o),D(Os.$$.fragment,o),D(an.$$.fragment,o),D(rn.$$.fragment,o),D(ln.$$.fragment,o),D(Is.$$.fragment,o),D(Ss.$$.fragment,o),D(cn.$$.fragment,o),D(Ks.$$.fragment,o),D(pn.$$.fragment,o),D(hn.$$.fragment,o),D(Qs.$$.fragment,o),D(Gs.$$.fragment,o),D(Vs.$$.fragment,o),D(Xs.$$.fragment,o),D(Ys.$$.fragment,o),D(un.$$.fragment,o),D(oa.$$.fragment,o),D(gn.$$.fragment,o),D(_n.$$.fragment,o),D(bn.$$.fragment,o),D(na.$$.fragment,o),D(sa.$$.fragment,o),D(wn.$$.fragment,o),D(da.$$.fragment,o),D(Tn.$$.fragment,o),D(vn.$$.fragment,o),D(yn.$$.fragment,o),D(ca.$$.fragment,o),D(pa.$$.fragment,o),D(Dn.$$.fragment,o),D(ga.$$.fragment,o),D(En.$$.fragment,o),D(Fn.$$.fragment,o),D(qn.$$.fragment,o),D(_a.$$.fragment,o),D(ba.$$.fragment,o),D(zn.$$.fragment,o),D(ya.$$.fragment,o),D(jn.$$.fragment,o),D(Mn.$$.fragment,o),D(Cn.$$.fragment,o),Al=!1},d(o){t(d),o&&t(u),o&&t(c),E(l),o&&t(V),o&&t(L),E(F),o&&t(Te),o&&t(I),o&&t(ve),o&&t(U),o&&t(ye),o&&t(K),o&&t($e),o&&t(ne),o&&t(De),o&&t(R),o&&t(O),o&&t(re),E(ee),o&&t(Ee),o&&t(Y),E(k),E(zo),o&&t(ll),o&&t(Jt),E(Sn),o&&t(dl),o&&t(he),E(Nn),E(Mo),E(Co),E(Un),E(Qn),E(Gn),E(Bo),E(Vn),o&&t(cl),o&&t(Zt),E(Jn),o&&t(pl),o&&t(Se),E(Xn),E(Lo),E(Ro),E(ts),E(ns),E(Oo),o&&t(hl),o&&t(to),E(ss),o&&t(fl),o&&t(wt),E(as),E(cs),E(So),E(No),o&&t(ml),o&&t(no),E(ps),o&&t(ul),o&&t(so),E(hs),o&&t(gl),o&&t(ao),E(fs),o&&t(_l),o&&t(Tt),E(ms),E(bs),E(Uo),E(Ko),E(Qo),o&&t(bl),o&&t(lo),E(ks),o&&t(kl),o&&t(it),E(ws),E(Ds),E(Vo),E(Jo),E(Xo),E(Yo),E(Zo),o&&t(wl),o&&t(po),E(Es),o&&t(Tl),o&&t(lt),E(Fs),E(Ms),E(tn),E(on),E(nn),o&&t(vl),o&&t(fo),E(Cs),o&&t(yl),o&&t(dt),E(Ps),E(Os),E(an),E(rn),E(ln),o&&t($l),o&&t(go),E(Is),o&&t(Dl),o&&t(ct),E(Ss),E(cn),E(Ks),E(pn),E(hn),o&&t(El),o&&t(bo),E(Qs),o&&t(Fl),o&&t(jt),E(Gs),E(Vs),o&&t(ql),o&&t(ko),E(Xs),o&&t(xl),o&&t(pt),E(Ys),E(un),E(oa),E(gn),E(_n),E(bn),o&&t(zl),o&&t(vo),E(na),o&&t(jl),o&&t(ot),E(sa),E(wn),E(da),E(Tn),E(vn),E(yn),o&&t(Ml),o&&t($o),E(ca),o&&t(Cl),o&&t(nt),E(pa),E(Dn),E(ga),E(En),E(Fn),E(qn),o&&t(Pl),o&&t(Eo),E(_a),o&&t(Bl),o&&t(st),E(ba),E(zn),E(ya),E(jn),E(Mn),E(Cn)}}}const jb={local:"deberta",sections:[{local:"overview",title:"Overview"},{local:"transformers.DebertaConfig",title:"DebertaConfig"},{local:"transformers.DebertaTokenizer",title:"DebertaTokenizer"},{local:"transformers.DebertaTokenizerFast",title:"DebertaTokenizerFast"},{local:"transformers.DebertaModel",title:"DebertaModel"},{local:"transformers.DebertaPreTrainedModel",title:"DebertaPreTrainedModel"},{local:"transformers.DebertaForMaskedLM",title:"DebertaForMaskedLM"},{local:"transformers.DebertaForSequenceClassification",title:"DebertaForSequenceClassification"},{local:"transformers.DebertaForTokenClassification",title:"DebertaForTokenClassification"},{local:"transformers.DebertaForQuestionAnswering",title:"DebertaForQuestionAnswering"},{local:"transformers.TFDebertaModel",title:"TFDebertaModel"},{local:"transformers.TFDebertaPreTrainedModel",title:"TFDebertaPreTrainedModel"},{local:"transformers.TFDebertaForMaskedLM",title:"TFDebertaForMaskedLM"},{local:"transformers.TFDebertaForSequenceClassification",title:"TFDebertaForSequenceClassification"},{local:"transformers.TFDebertaForTokenClassification",title:"TFDebertaForTokenClassification"},{local:"transformers.TFDebertaForQuestionAnswering",title:"TFDebertaForQuestionAnswering"}],title:"DeBERTa"};function Mb(q){return S_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ob extends L_{constructor(d){super();R_(this,d,Mb,zb,O_,{})}}export{Ob as default,jb as metadata};
