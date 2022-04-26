import{S as Zx,i as eR,s as tR,e as n,k as p,w as T,t as r,M as oR,c as s,d as t,m as h,a,x as y,h as i,b as u,F as e,g as k,y as w,q as $,o as F,B as x,v as nR,L as oe}from"../../chunks/vendor-6b77c823.js";import{T as _e}from"../../chunks/Tip-39098574.js";import{D as P}from"../../chunks/Docstring-1088f2fb.js";import{C as ne}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Fe}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as te}from"../../chunks/ExampleCodeBlock-5212b321.js";function sR(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaConfig, RobertaModel

# Initializing a RoBERTa configuration
configuration = RobertaConfig()

# Initializing a model from the configuration
model = RobertaModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaConfig, RobertaModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a RoBERTa configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = RobertaConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),g=r("Examples:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Examples:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function aR(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer
tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 328, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){d=n("p"),g=r("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function rR(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("When used with "),c=n("code"),m=r("is_split_into_words=True"),_=r(", this tokenizer will add a space before each word (even the first one).")},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"When used with "),c=s(f,"CODE",{});var M=a(c);m=i(M,"is_split_into_words=True"),M.forEach(t),_=i(f,", this tokenizer will add a space before each word (even the first one)."),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function iR(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizerFast
tokenizer = RobertaTokenizerFast.from_pretrained("roberta-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = RobertaTokenizerFast.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 328, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){d=n("p"),g=r("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function lR(R){let d,g,c,m,_,l,f,M;return{c(){d=n("p"),g=r("When used with "),c=n("code"),m=r("is_split_into_words=True"),_=r(", this tokenizer needs to be instantiated with "),l=n("code"),f=r("add_prefix_space=True"),M=r(".")},l(Y){d=s(Y,"P",{});var I=a(d);g=i(I,"When used with "),c=s(I,"CODE",{});var z=a(c);m=i(z,"is_split_into_words=True"),z.forEach(t),_=i(I,", this tokenizer needs to be instantiated with "),l=s(I,"CODE",{});var X=a(l);f=i(X,"add_prefix_space=True"),X.forEach(t),M=i(I,"."),I.forEach(t)},m(Y,I){k(Y,d,I),e(d,g),e(d,c),e(c,m),e(d,_),e(d,l),e(l,f),e(d,M)},d(Y){Y&&t(d)}}}function dR(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function cR(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, RobertaModel
import torch

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = RobertaModel.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, RobertaModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaModel.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function pR(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function hR(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, RobertaForCausalLM, RobertaConfig
import torch

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
config = RobertaConfig.from_pretrained("roberta-base")
config.is_decoder = True
model = RobertaForCausalLM.from_pretrained("roberta-base", config=config)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, RobertaForCausalLM, RobertaConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = RobertaConfig.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForCausalLM.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function mR(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function fR(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, RobertaForMaskedLM
import torch

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = RobertaForMaskedLM.from_pretrained("roberta-base")

inputs = tokenizer("The capital of France is <mask>.", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of <mask>
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, RobertaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function uR(R){let d,g;return d=new ne({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function gR(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function _R(R){let d,g,c,m,_;return m=new ne({props:{code:`import torch
from transformers import RobertaTokenizer, RobertaForSequenceClassification

tokenizer = RobertaTokenizer.from_pretrained("cardiffnlp/twitter-roberta-base-emotion")
model = RobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, RobertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=n("p"),g=r("Example of single-label classification:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example of single-label classification:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function bR(R){let d,g;return d=new ne({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = RobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function kR(R){let d,g,c,m,_;return m=new ne({props:{code:`import torch
from transformers import RobertaTokenizer, RobertaForSequenceClassification

tokenizer = RobertaTokenizer.from_pretrained("cardiffnlp/twitter-roberta-base-emotion")
model = RobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, RobertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=n("p"),g=r("Example of multi-label classification:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example of multi-label classification:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function vR(R){let d,g;return d=new ne({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = RobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function TR(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function yR(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, RobertaForMultipleChoice
import torch

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = RobertaForMultipleChoice.from_pretrained("roberta-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, RobertaForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function wR(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function $R(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, RobertaForTokenClassification
import torch

tokenizer = RobertaTokenizer.from_pretrained("Jean-Baptiste/roberta-large-ner-english")
model = RobertaForTokenClassification.from_pretrained("Jean-Baptiste/roberta-large-ner-english")

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
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, RobertaForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;Jean-Baptiste/roberta-large-ner-english&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;Jean-Baptiste/roberta-large-ner-english&quot;</span>)

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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function FR(R){let d,g;return d=new ne({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function xR(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function RR(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, RobertaForQuestionAnswering
import torch

tokenizer = RobertaTokenizer.from_pretrained("deepset/roberta-base-squad2")
model = RobertaForQuestionAnswering.from_pretrained("deepset/roberta-base-squad2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, RobertaForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;deepset/roberta-base-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;deepset/roberta-base-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function MR(R){let d,g;return d=new ne({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.86</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function ER(R){let d,g,c,m,_,l,f,M,Y,I,z,X,D,se,be,S,ke,fe,K,A,ae,Z,q,j,ie,B,ue,le,H,ge,de,C,ve,W,ce,Te,U,G,re,O,pe,Q,ye;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),c=p(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),M=n("li"),Y=r("having all inputs as a list, tuple or dict in the first positional arguments."),I=p(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),se=r("tf.keras.Model.fit"),be=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ke=r("model(inputs)"),fe=r("."),K=p(),A=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=p(),q=n("ul"),j=n("li"),ie=r("a single Tensor with "),B=n("code"),ue=r("input_ids"),le=r(" only and nothing else: "),H=n("code"),ge=r("model(inputs_ids)"),de=p(),C=n("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),ce=r("model([input_ids, attention_mask])"),Te=r(" or "),U=n("code"),G=r("model([input_ids, attention_mask, token_type_ids])"),re=p(),O=n("li"),pe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var E=a(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(v),m=s(v,"UL",{});var ee=a(m);_=s(ee,"LI",{});var Ee=a(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=h(ee),M=s(ee,"LI",{});var me=a(M);Y=i(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),ee.forEach(t),I=h(v),z=s(v,"P",{});var N=a(z);X=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var Re=a(D);se=i(Re,"tf.keras.Model.fit"),Re.forEach(t),be=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var ze=a(S);ke=i(ze,"model(inputs)"),ze.forEach(t),fe=i(N,"."),N.forEach(t),K=h(v),A=s(v,"P",{});var qe=a(A);ae=i(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Z=h(v),q=s(v,"UL",{});var L=a(q);j=s(L,"LI",{});var V=a(j);ie=i(V,"a single Tensor with "),B=s(V,"CODE",{});var Ce=a(B);ue=i(Ce,"input_ids"),Ce.forEach(t),le=i(V," only and nothing else: "),H=s(V,"CODE",{});var Me=a(H);ge=i(Me,"model(inputs_ids)"),Me.forEach(t),V.forEach(t),de=h(L),C=s(L,"LI",{});var J=a(C);ve=i(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(J,"CODE",{});var je=a(W);ce=i(je,"model([input_ids, attention_mask])"),je.forEach(t),Te=i(J," or "),U=s(J,"CODE",{});var Pe=a(U);G=i(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),J.forEach(t),re=h(L),O=s(L,"LI",{});var he=a(O);pe=i(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(he,"CODE",{});var xe=a(Q);ye=i(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),he.forEach(t),L.forEach(t)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,m,E),e(m,_),e(_,l),e(m,f),e(m,M),e(M,Y),k(v,I,E),k(v,z,E),e(z,X),e(z,D),e(D,se),e(z,be),e(z,S),e(S,ke),e(z,fe),k(v,K,E),k(v,A,E),e(A,ae),k(v,Z,E),k(v,q,E),e(q,j),e(j,ie),e(j,B),e(B,ue),e(j,le),e(j,H),e(H,ge),e(q,de),e(q,C),e(C,ve),e(C,W),e(W,ce),e(C,Te),e(C,U),e(U,G),e(q,re),e(q,O),e(O,pe),e(O,Q),e(Q,ye)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(I),v&&t(z),v&&t(K),v&&t(A),v&&t(Z),v&&t(q)}}}function zR(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function qR(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, TFRobertaModel
import tensorflow as tf

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = TFRobertaModel.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, TFRobertaModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaModel.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function CR(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function jR(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, TFRobertaForCausalLM
import tensorflow as tf

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = TFRobertaForCausalLM.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, TFRobertaForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForCausalLM.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function PR(R){let d,g,c,m,_,l,f,M,Y,I,z,X,D,se,be,S,ke,fe,K,A,ae,Z,q,j,ie,B,ue,le,H,ge,de,C,ve,W,ce,Te,U,G,re,O,pe,Q,ye;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),c=p(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),M=n("li"),Y=r("having all inputs as a list, tuple or dict in the first positional arguments."),I=p(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),se=r("tf.keras.Model.fit"),be=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ke=r("model(inputs)"),fe=r("."),K=p(),A=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=p(),q=n("ul"),j=n("li"),ie=r("a single Tensor with "),B=n("code"),ue=r("input_ids"),le=r(" only and nothing else: "),H=n("code"),ge=r("model(inputs_ids)"),de=p(),C=n("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),ce=r("model([input_ids, attention_mask])"),Te=r(" or "),U=n("code"),G=r("model([input_ids, attention_mask, token_type_ids])"),re=p(),O=n("li"),pe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var E=a(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(v),m=s(v,"UL",{});var ee=a(m);_=s(ee,"LI",{});var Ee=a(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=h(ee),M=s(ee,"LI",{});var me=a(M);Y=i(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),ee.forEach(t),I=h(v),z=s(v,"P",{});var N=a(z);X=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var Re=a(D);se=i(Re,"tf.keras.Model.fit"),Re.forEach(t),be=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var ze=a(S);ke=i(ze,"model(inputs)"),ze.forEach(t),fe=i(N,"."),N.forEach(t),K=h(v),A=s(v,"P",{});var qe=a(A);ae=i(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Z=h(v),q=s(v,"UL",{});var L=a(q);j=s(L,"LI",{});var V=a(j);ie=i(V,"a single Tensor with "),B=s(V,"CODE",{});var Ce=a(B);ue=i(Ce,"input_ids"),Ce.forEach(t),le=i(V," only and nothing else: "),H=s(V,"CODE",{});var Me=a(H);ge=i(Me,"model(inputs_ids)"),Me.forEach(t),V.forEach(t),de=h(L),C=s(L,"LI",{});var J=a(C);ve=i(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(J,"CODE",{});var je=a(W);ce=i(je,"model([input_ids, attention_mask])"),je.forEach(t),Te=i(J," or "),U=s(J,"CODE",{});var Pe=a(U);G=i(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),J.forEach(t),re=h(L),O=s(L,"LI",{});var he=a(O);pe=i(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(he,"CODE",{});var xe=a(Q);ye=i(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),he.forEach(t),L.forEach(t)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,m,E),e(m,_),e(_,l),e(m,f),e(m,M),e(M,Y),k(v,I,E),k(v,z,E),e(z,X),e(z,D),e(D,se),e(z,be),e(z,S),e(S,ke),e(z,fe),k(v,K,E),k(v,A,E),e(A,ae),k(v,Z,E),k(v,q,E),e(q,j),e(j,ie),e(j,B),e(B,ue),e(j,le),e(j,H),e(H,ge),e(q,de),e(q,C),e(C,ve),e(C,W),e(W,ce),e(C,Te),e(C,U),e(U,G),e(q,re),e(q,O),e(O,pe),e(O,Q),e(Q,ye)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(I),v&&t(z),v&&t(K),v&&t(A),v&&t(Z),v&&t(q)}}}function LR(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function AR(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, TFRobertaForMaskedLM
import tensorflow as tf

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = TFRobertaForMaskedLM.from_pretrained("roberta-base")

inputs = tokenizer("The capital of France is <mask>.", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of <mask>
mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[0][1]

predicted_token_id = tf.math.argmax(logits[0, mask_token_index], axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, TFRobertaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(logits[<span class="hljs-number">0</span>, mask_token_index], axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function OR(R){let d,g;return d=new ne({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-<mask> tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function NR(R){let d,g,c,m,_,l,f,M,Y,I,z,X,D,se,be,S,ke,fe,K,A,ae,Z,q,j,ie,B,ue,le,H,ge,de,C,ve,W,ce,Te,U,G,re,O,pe,Q,ye;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),c=p(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),M=n("li"),Y=r("having all inputs as a list, tuple or dict in the first positional arguments."),I=p(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),se=r("tf.keras.Model.fit"),be=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ke=r("model(inputs)"),fe=r("."),K=p(),A=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=p(),q=n("ul"),j=n("li"),ie=r("a single Tensor with "),B=n("code"),ue=r("input_ids"),le=r(" only and nothing else: "),H=n("code"),ge=r("model(inputs_ids)"),de=p(),C=n("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),ce=r("model([input_ids, attention_mask])"),Te=r(" or "),U=n("code"),G=r("model([input_ids, attention_mask, token_type_ids])"),re=p(),O=n("li"),pe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var E=a(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(v),m=s(v,"UL",{});var ee=a(m);_=s(ee,"LI",{});var Ee=a(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=h(ee),M=s(ee,"LI",{});var me=a(M);Y=i(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),ee.forEach(t),I=h(v),z=s(v,"P",{});var N=a(z);X=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var Re=a(D);se=i(Re,"tf.keras.Model.fit"),Re.forEach(t),be=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var ze=a(S);ke=i(ze,"model(inputs)"),ze.forEach(t),fe=i(N,"."),N.forEach(t),K=h(v),A=s(v,"P",{});var qe=a(A);ae=i(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Z=h(v),q=s(v,"UL",{});var L=a(q);j=s(L,"LI",{});var V=a(j);ie=i(V,"a single Tensor with "),B=s(V,"CODE",{});var Ce=a(B);ue=i(Ce,"input_ids"),Ce.forEach(t),le=i(V," only and nothing else: "),H=s(V,"CODE",{});var Me=a(H);ge=i(Me,"model(inputs_ids)"),Me.forEach(t),V.forEach(t),de=h(L),C=s(L,"LI",{});var J=a(C);ve=i(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(J,"CODE",{});var je=a(W);ce=i(je,"model([input_ids, attention_mask])"),je.forEach(t),Te=i(J," or "),U=s(J,"CODE",{});var Pe=a(U);G=i(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),J.forEach(t),re=h(L),O=s(L,"LI",{});var he=a(O);pe=i(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(he,"CODE",{});var xe=a(Q);ye=i(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),he.forEach(t),L.forEach(t)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,m,E),e(m,_),e(_,l),e(m,f),e(m,M),e(M,Y),k(v,I,E),k(v,z,E),e(z,X),e(z,D),e(D,se),e(z,be),e(z,S),e(S,ke),e(z,fe),k(v,K,E),k(v,A,E),e(A,ae),k(v,Z,E),k(v,q,E),e(q,j),e(j,ie),e(j,B),e(B,ue),e(j,le),e(j,H),e(H,ge),e(q,de),e(q,C),e(C,ve),e(C,W),e(W,ce),e(C,Te),e(C,U),e(U,G),e(q,re),e(q,O),e(O,pe),e(O,Q),e(Q,ye)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(I),v&&t(z),v&&t(K),v&&t(A),v&&t(Z),v&&t(q)}}}function IR(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function DR(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, TFRobertaForSequenceClassification
import tensorflow as tf

tokenizer = RobertaTokenizer.from_pretrained("cardiffnlp/twitter-roberta-base-emotion")
model = TFRobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, TFRobertaForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function SR(R){let d,g;return d=new ne({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFRobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function WR(R){let d,g,c,m,_,l,f,M,Y,I,z,X,D,se,be,S,ke,fe,K,A,ae,Z,q,j,ie,B,ue,le,H,ge,de,C,ve,W,ce,Te,U,G,re,O,pe,Q,ye;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),c=p(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),M=n("li"),Y=r("having all inputs as a list, tuple or dict in the first positional arguments."),I=p(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),se=r("tf.keras.Model.fit"),be=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ke=r("model(inputs)"),fe=r("."),K=p(),A=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=p(),q=n("ul"),j=n("li"),ie=r("a single Tensor with "),B=n("code"),ue=r("input_ids"),le=r(" only and nothing else: "),H=n("code"),ge=r("model(inputs_ids)"),de=p(),C=n("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),ce=r("model([input_ids, attention_mask])"),Te=r(" or "),U=n("code"),G=r("model([input_ids, attention_mask, token_type_ids])"),re=p(),O=n("li"),pe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var E=a(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(v),m=s(v,"UL",{});var ee=a(m);_=s(ee,"LI",{});var Ee=a(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=h(ee),M=s(ee,"LI",{});var me=a(M);Y=i(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),ee.forEach(t),I=h(v),z=s(v,"P",{});var N=a(z);X=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var Re=a(D);se=i(Re,"tf.keras.Model.fit"),Re.forEach(t),be=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var ze=a(S);ke=i(ze,"model(inputs)"),ze.forEach(t),fe=i(N,"."),N.forEach(t),K=h(v),A=s(v,"P",{});var qe=a(A);ae=i(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Z=h(v),q=s(v,"UL",{});var L=a(q);j=s(L,"LI",{});var V=a(j);ie=i(V,"a single Tensor with "),B=s(V,"CODE",{});var Ce=a(B);ue=i(Ce,"input_ids"),Ce.forEach(t),le=i(V," only and nothing else: "),H=s(V,"CODE",{});var Me=a(H);ge=i(Me,"model(inputs_ids)"),Me.forEach(t),V.forEach(t),de=h(L),C=s(L,"LI",{});var J=a(C);ve=i(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(J,"CODE",{});var je=a(W);ce=i(je,"model([input_ids, attention_mask])"),je.forEach(t),Te=i(J," or "),U=s(J,"CODE",{});var Pe=a(U);G=i(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),J.forEach(t),re=h(L),O=s(L,"LI",{});var he=a(O);pe=i(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(he,"CODE",{});var xe=a(Q);ye=i(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),he.forEach(t),L.forEach(t)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,m,E),e(m,_),e(_,l),e(m,f),e(m,M),e(M,Y),k(v,I,E),k(v,z,E),e(z,X),e(z,D),e(D,se),e(z,be),e(z,S),e(S,ke),e(z,fe),k(v,K,E),k(v,A,E),e(A,ae),k(v,Z,E),k(v,q,E),e(q,j),e(j,ie),e(j,B),e(B,ue),e(j,le),e(j,H),e(H,ge),e(q,de),e(q,C),e(C,ve),e(C,W),e(W,ce),e(C,Te),e(C,U),e(U,G),e(q,re),e(q,O),e(O,pe),e(O,Q),e(Q,ye)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(I),v&&t(z),v&&t(K),v&&t(A),v&&t(Z),v&&t(q)}}}function UR(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function BR(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, TFRobertaForMultipleChoice
import tensorflow as tf

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = TFRobertaForMultipleChoice.from_pretrained("roberta-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, TFRobertaForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function HR(R){let d,g,c,m,_,l,f,M,Y,I,z,X,D,se,be,S,ke,fe,K,A,ae,Z,q,j,ie,B,ue,le,H,ge,de,C,ve,W,ce,Te,U,G,re,O,pe,Q,ye;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),c=p(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),M=n("li"),Y=r("having all inputs as a list, tuple or dict in the first positional arguments."),I=p(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),se=r("tf.keras.Model.fit"),be=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ke=r("model(inputs)"),fe=r("."),K=p(),A=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=p(),q=n("ul"),j=n("li"),ie=r("a single Tensor with "),B=n("code"),ue=r("input_ids"),le=r(" only and nothing else: "),H=n("code"),ge=r("model(inputs_ids)"),de=p(),C=n("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),ce=r("model([input_ids, attention_mask])"),Te=r(" or "),U=n("code"),G=r("model([input_ids, attention_mask, token_type_ids])"),re=p(),O=n("li"),pe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var E=a(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(v),m=s(v,"UL",{});var ee=a(m);_=s(ee,"LI",{});var Ee=a(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=h(ee),M=s(ee,"LI",{});var me=a(M);Y=i(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),ee.forEach(t),I=h(v),z=s(v,"P",{});var N=a(z);X=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var Re=a(D);se=i(Re,"tf.keras.Model.fit"),Re.forEach(t),be=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var ze=a(S);ke=i(ze,"model(inputs)"),ze.forEach(t),fe=i(N,"."),N.forEach(t),K=h(v),A=s(v,"P",{});var qe=a(A);ae=i(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Z=h(v),q=s(v,"UL",{});var L=a(q);j=s(L,"LI",{});var V=a(j);ie=i(V,"a single Tensor with "),B=s(V,"CODE",{});var Ce=a(B);ue=i(Ce,"input_ids"),Ce.forEach(t),le=i(V," only and nothing else: "),H=s(V,"CODE",{});var Me=a(H);ge=i(Me,"model(inputs_ids)"),Me.forEach(t),V.forEach(t),de=h(L),C=s(L,"LI",{});var J=a(C);ve=i(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(J,"CODE",{});var je=a(W);ce=i(je,"model([input_ids, attention_mask])"),je.forEach(t),Te=i(J," or "),U=s(J,"CODE",{});var Pe=a(U);G=i(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),J.forEach(t),re=h(L),O=s(L,"LI",{});var he=a(O);pe=i(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(he,"CODE",{});var xe=a(Q);ye=i(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),he.forEach(t),L.forEach(t)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,m,E),e(m,_),e(_,l),e(m,f),e(m,M),e(M,Y),k(v,I,E),k(v,z,E),e(z,X),e(z,D),e(D,se),e(z,be),e(z,S),e(S,ke),e(z,fe),k(v,K,E),k(v,A,E),e(A,ae),k(v,Z,E),k(v,q,E),e(q,j),e(j,ie),e(j,B),e(B,ue),e(j,le),e(j,H),e(H,ge),e(q,de),e(q,C),e(C,ve),e(C,W),e(W,ce),e(C,Te),e(C,U),e(U,G),e(q,re),e(q,O),e(O,pe),e(O,Q),e(Q,ye)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(I),v&&t(z),v&&t(K),v&&t(A),v&&t(Z),v&&t(q)}}}function QR(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function VR(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, TFRobertaForTokenClassification
import tensorflow as tf

tokenizer = RobertaTokenizer.from_pretrained("ydshieh/roberta-large-ner-english")
model = TFRobertaForTokenClassification.from_pretrained("ydshieh/roberta-large-ner-english")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="tf"
)

logits = model(**inputs).logits
predicted_token_class_ids = tf.math.argmax(logits, axis=-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t] for t in predicted_token_class_ids[0].numpy().tolist()]
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, TFRobertaForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;ydshieh/roberta-large-ner-english&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;ydshieh/roberta-large-ner-english&quot;</span>)

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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function JR(R){let d,g;return d=new ne({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function KR(R){let d,g,c,m,_,l,f,M,Y,I,z,X,D,se,be,S,ke,fe,K,A,ae,Z,q,j,ie,B,ue,le,H,ge,de,C,ve,W,ce,Te,U,G,re,O,pe,Q,ye;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),c=p(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),M=n("li"),Y=r("having all inputs as a list, tuple or dict in the first positional arguments."),I=p(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),se=r("tf.keras.Model.fit"),be=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ke=r("model(inputs)"),fe=r("."),K=p(),A=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=p(),q=n("ul"),j=n("li"),ie=r("a single Tensor with "),B=n("code"),ue=r("input_ids"),le=r(" only and nothing else: "),H=n("code"),ge=r("model(inputs_ids)"),de=p(),C=n("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),ce=r("model([input_ids, attention_mask])"),Te=r(" or "),U=n("code"),G=r("model([input_ids, attention_mask, token_type_ids])"),re=p(),O=n("li"),pe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var E=a(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(v),m=s(v,"UL",{});var ee=a(m);_=s(ee,"LI",{});var Ee=a(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=h(ee),M=s(ee,"LI",{});var me=a(M);Y=i(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),ee.forEach(t),I=h(v),z=s(v,"P",{});var N=a(z);X=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var Re=a(D);se=i(Re,"tf.keras.Model.fit"),Re.forEach(t),be=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var ze=a(S);ke=i(ze,"model(inputs)"),ze.forEach(t),fe=i(N,"."),N.forEach(t),K=h(v),A=s(v,"P",{});var qe=a(A);ae=i(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Z=h(v),q=s(v,"UL",{});var L=a(q);j=s(L,"LI",{});var V=a(j);ie=i(V,"a single Tensor with "),B=s(V,"CODE",{});var Ce=a(B);ue=i(Ce,"input_ids"),Ce.forEach(t),le=i(V," only and nothing else: "),H=s(V,"CODE",{});var Me=a(H);ge=i(Me,"model(inputs_ids)"),Me.forEach(t),V.forEach(t),de=h(L),C=s(L,"LI",{});var J=a(C);ve=i(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(J,"CODE",{});var je=a(W);ce=i(je,"model([input_ids, attention_mask])"),je.forEach(t),Te=i(J," or "),U=s(J,"CODE",{});var Pe=a(U);G=i(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),J.forEach(t),re=h(L),O=s(L,"LI",{});var he=a(O);pe=i(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(he,"CODE",{});var xe=a(Q);ye=i(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),he.forEach(t),L.forEach(t)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,m,E),e(m,_),e(_,l),e(m,f),e(m,M),e(M,Y),k(v,I,E),k(v,z,E),e(z,X),e(z,D),e(D,se),e(z,be),e(z,S),e(S,ke),e(z,fe),k(v,K,E),k(v,A,E),e(A,ae),k(v,Z,E),k(v,q,E),e(q,j),e(j,ie),e(j,B),e(B,ue),e(j,le),e(j,H),e(H,ge),e(q,de),e(q,C),e(C,ve),e(C,W),e(W,ce),e(C,Te),e(C,U),e(U,G),e(q,re),e(q,O),e(O,pe),e(O,Q),e(Q,ye)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(I),v&&t(z),v&&t(K),v&&t(A),v&&t(Z),v&&t(q)}}}function GR(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function XR(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, TFRobertaForQuestionAnswering
import tensorflow as tf

tokenizer = RobertaTokenizer.from_pretrained("ydshieh/roberta-base-squad2")
model = TFRobertaForQuestionAnswering.from_pretrained("ydshieh/roberta-base-squad2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, TFRobertaForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;ydshieh/roberta-base-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;ydshieh/roberta-base-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function YR(R){let d,g;return d=new ne({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = tf.constant([14]), tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = tf.constant([<span class="hljs-number">14</span>]), tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.86</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function ZR(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function eM(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaModel

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaModel.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaModel.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function tM(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function oM(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForMaskedLM

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForMaskedLM.from_pretrained("roberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function nM(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function sM(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForSequenceClassification

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForSequenceClassification.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function aM(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function rM(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForMultipleChoice

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForMultipleChoice.from_pretrained("roberta-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="jax", padding=True)
outputs = model(**{k: v[None, :] for k, v in encoding.items()})

logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v[<span class="hljs-literal">None</span>, :] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()})

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function iM(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function lM(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForTokenClassification

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForTokenClassification.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function dM(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function cM(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForQuestionAnswering

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForQuestionAnswering.from_pretrained("roberta-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function pM(R){let d,g,c,m,_,l,f,M,Y,I,z,X,D,se,be,S,ke,fe,K,A,ae,Z,q,j,ie,B,ue,le,H,ge,de,C,ve,W,ce,Te,U,G,re,O,pe,Q,ye,v,E,ee,Ee,me,N,Re,ze,qe,L,V,Ce,Me,J,je,Pe,he,xe,ku,vu,lm,Jt,Tu,da,yu,wu,ca,$u,Fu,dm,co,hn,Sd,pa,xu,Wd,Ru,cm,Ze,ha,Mu,po,Eu,$l,zu,qu,Fl,Cu,ju,Pu,ho,Lu,xl,Au,Ou,Rl,Nu,Iu,Du,mo,Su,Ml,Wu,Uu,El,Bu,Hu,Qu,mn,pm,fo,fn,Ud,ma,Vu,Bd,Ju,hm,we,fa,Ku,Hd,Gu,Xu,Qd,Yu,Zu,un,eg,ua,tg,Vd,og,ng,sg,gn,ag,ga,rg,zl,ig,lg,dg,Kt,_a,cg,Jd,pg,hg,ba,ql,mg,Kd,fg,ug,Cl,gg,Gd,_g,bg,_n,ka,kg,va,vg,Xd,Tg,yg,wg,bn,Ta,$g,Yd,Fg,xg,jl,ya,mm,uo,kn,Zd,wa,Rg,ec,Mg,fm,Le,$a,Eg,Fa,zg,tc,qg,Cg,jg,oc,Pg,Lg,vn,Ag,xa,Og,nc,Ng,Ig,Dg,Tn,Sg,Ra,Wg,Pl,Ug,Bg,Hg,Ll,Ma,um,go,yn,sc,Ea,Qg,ac,Vg,gm,Ae,za,Jg,rc,Kg,Gg,qa,Xg,Al,Yg,Zg,e_,Ca,t_,ja,o_,n_,s_,Pa,a_,ic,r_,i_,l_,Be,d_,lc,c_,p_,dc,h_,m_,cc,f_,u_,pc,g_,__,hc,b_,k_,mc,v_,T_,y_,wn,w_,fc,$_,F_,La,x_,R_,yt,Aa,M_,_o,E_,Ol,z_,q_,uc,C_,j_,P_,$n,L_,Fn,_m,bo,xn,gc,Oa,A_,_c,O_,bm,et,Na,N_,Ia,I_,bc,D_,S_,W_,Da,U_,Nl,B_,H_,Q_,Sa,V_,Wa,J_,K_,G_,wt,Ua,X_,ko,Y_,Il,Z_,eb,kc,tb,ob,nb,Rn,sb,Mn,km,vo,En,vc,Ba,ab,Tc,rb,vm,tt,Ha,ib,Qa,lb,yc,db,cb,pb,Va,hb,Dl,mb,fb,ub,Ja,gb,Ka,_b,bb,kb,rt,Ga,vb,To,Tb,Sl,yb,wb,wc,$b,Fb,xb,zn,Rb,qn,Mb,Cn,Tm,yo,jn,$c,Xa,Eb,Fc,zb,ym,ot,Ya,qb,xc,Cb,jb,Za,Pb,Wl,Lb,Ab,Ob,er,Nb,tr,Ib,Db,Sb,Ue,or,Wb,wo,Ub,Ul,Bb,Hb,Rc,Qb,Vb,Jb,Pn,Kb,Ln,Gb,An,Xb,On,Yb,Nn,wm,$o,In,Mc,nr,Zb,Ec,ek,$m,nt,sr,tk,zc,ok,nk,ar,sk,Bl,ak,rk,ik,rr,lk,ir,dk,ck,pk,$t,lr,hk,Fo,mk,Hl,fk,uk,qc,gk,_k,bk,Dn,kk,Sn,Fm,xo,Wn,Cc,dr,vk,jc,Tk,xm,st,cr,yk,Pc,wk,$k,pr,Fk,Ql,xk,Rk,Mk,hr,Ek,mr,zk,qk,Ck,it,fr,jk,Ro,Pk,Vl,Lk,Ak,Lc,Ok,Nk,Ik,Un,Dk,Bn,Sk,Hn,Rm,Mo,Qn,Ac,ur,Wk,Oc,Uk,Mm,at,gr,Bk,Eo,Hk,Nc,Qk,Vk,Ic,Jk,Kk,Gk,_r,Xk,Jl,Yk,Zk,ev,br,tv,kr,ov,nv,sv,lt,vr,av,zo,rv,Kl,iv,lv,Dc,dv,cv,pv,Vn,hv,Jn,mv,Kn,Em,qo,Gn,Sc,Tr,fv,Wc,uv,zm,He,yr,gv,Uc,_v,bv,wr,kv,Gl,vv,Tv,yv,$r,wv,Fr,$v,Fv,xv,Xn,Rv,Ft,xr,Mv,Co,Ev,Xl,zv,qv,Bc,Cv,jv,Pv,Yn,Lv,Zn,qm,jo,es,Hc,Rr,Av,Qc,Ov,Cm,Po,Mr,Nv,xt,Er,Iv,Lo,Dv,Yl,Sv,Wv,Vc,Uv,Bv,Hv,ts,Qv,os,jm,Ao,ns,Jc,zr,Vv,Kc,Jv,Pm,Qe,qr,Kv,Cr,Gv,Gc,Xv,Yv,Zv,jr,eT,Zl,tT,oT,nT,Pr,sT,Lr,aT,rT,iT,ss,lT,dt,Ar,dT,Oo,cT,ed,pT,hT,Xc,mT,fT,uT,as,gT,rs,_T,is,Lm,No,ls,Yc,Or,bT,Zc,kT,Am,Ve,Nr,vT,ep,TT,yT,Ir,wT,td,$T,FT,xT,Dr,RT,Sr,MT,ET,zT,ds,qT,ct,Wr,CT,Io,jT,od,PT,LT,tp,AT,OT,NT,cs,IT,ps,DT,hs,Om,Do,ms,op,Ur,ST,np,WT,Nm,Je,Br,UT,sp,BT,HT,Hr,QT,nd,VT,JT,KT,Qr,GT,Vr,XT,YT,ZT,fs,ey,Rt,Jr,ty,So,oy,sd,ny,sy,ap,ay,ry,iy,us,ly,gs,Im,Wo,_s,rp,Kr,dy,ip,cy,Dm,Ke,Gr,py,lp,hy,my,Xr,fy,ad,uy,gy,_y,Yr,by,Zr,ky,vy,Ty,bs,yy,pt,ei,wy,Uo,$y,rd,Fy,xy,dp,Ry,My,Ey,ks,zy,vs,qy,Ts,Sm,Bo,ys,cp,ti,Cy,pp,jy,Wm,Ge,oi,Py,Ho,Ly,hp,Ay,Oy,mp,Ny,Iy,Dy,ni,Sy,id,Wy,Uy,By,si,Hy,ai,Qy,Vy,Jy,ws,Ky,ht,ri,Gy,Qo,Xy,ld,Yy,Zy,fp,ew,tw,ow,$s,nw,Fs,sw,xs,Um,Vo,Rs,up,ii,aw,gp,rw,Bm,Oe,li,iw,_p,lw,dw,di,cw,dd,pw,hw,mw,ci,fw,pi,uw,gw,_w,bp,bw,kw,Dt,kp,hi,vw,Tw,vp,mi,yw,ww,Tp,fi,$w,Fw,yp,ui,xw,Rw,Mt,gi,Mw,Jo,Ew,wp,zw,qw,$p,Cw,jw,Pw,Ms,Lw,Es,Hm,Ko,zs,Fp,_i,Aw,xp,Ow,Qm,Ne,bi,Nw,ki,Iw,Rp,Dw,Sw,Ww,vi,Uw,cd,Bw,Hw,Qw,Ti,Vw,yi,Jw,Kw,Gw,Mp,Xw,Yw,St,Ep,wi,Zw,e1,zp,$i,t1,o1,qp,Fi,n1,s1,Cp,xi,a1,r1,Et,Ri,i1,Go,l1,jp,d1,c1,Pp,p1,h1,m1,qs,f1,Cs,Vm,Xo,js,Lp,Mi,u1,Ap,g1,Jm,Ie,Ei,_1,Op,b1,k1,zi,v1,pd,T1,y1,w1,qi,$1,Ci,F1,x1,R1,Np,M1,E1,Wt,Ip,ji,z1,q1,Dp,Pi,C1,j1,Sp,Li,P1,L1,Wp,Ai,A1,O1,zt,Oi,N1,Yo,I1,Up,D1,S1,Bp,W1,U1,B1,Ps,H1,Ls,Km,Zo,As,Hp,Ni,Q1,Qp,V1,Gm,De,Ii,J1,Vp,K1,G1,Di,X1,hd,Y1,Z1,e$,Si,t$,Wi,o$,n$,s$,Jp,a$,r$,Ut,Kp,Ui,i$,l$,Gp,Bi,d$,c$,Xp,Hi,p$,h$,Yp,Qi,m$,f$,qt,Vi,u$,en,g$,Zp,_$,b$,eh,k$,v$,T$,Os,y$,Ns,Xm,tn,Is,th,Ji,w$,oh,$$,Ym,Se,Ki,F$,nh,x$,R$,Gi,M$,md,E$,z$,q$,Xi,C$,Yi,j$,P$,L$,sh,A$,O$,Bt,ah,Zi,N$,I$,rh,el,D$,S$,ih,tl,W$,U$,lh,ol,B$,H$,Ct,nl,Q$,on,V$,dh,J$,K$,ch,G$,X$,Y$,Ds,Z$,Ss,Zm,nn,Ws,ph,sl,e0,hh,t0,ef,We,al,o0,sn,n0,mh,s0,a0,fh,r0,i0,l0,rl,d0,fd,c0,p0,h0,il,m0,ll,f0,u0,g0,uh,_0,b0,Ht,gh,dl,k0,v0,_h,cl,T0,y0,bh,pl,w0,$0,kh,hl,F0,x0,jt,ml,R0,an,M0,vh,E0,z0,Th,q0,C0,j0,Us,P0,Bs,tf;return l=new Fe({}),se=new Fe({}),pa=new Fe({}),ha=new P({props:{name:"class transformers.RobertaConfig",anchor:"transformers.RobertaConfig",parameters:[{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/configuration_roberta.py#L37"}}),mn=new te({props:{anchor:"transformers.RobertaConfig.example",$$slots:{default:[sR]},$$scope:{ctx:R}}}),ma=new Fe({}),fa=new P({props:{name:"class transformers.RobertaTokenizer",anchor:"transformers.RobertaTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.RobertaTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.RobertaTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.RobertaTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.RobertaTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.RobertaTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.RobertaTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.RobertaTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.RobertaTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.RobertaTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.RobertaTokenizer.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (RoBERTa tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/tokenization_roberta.py#L103"}}),un=new te({props:{anchor:"transformers.RobertaTokenizer.example",$$slots:{default:[aR]},$$scope:{ctx:R}}}),gn=new _e({props:{$$slots:{default:[rR]},$$scope:{ctx:R}}}),_a=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/tokenization_roberta.py#L340",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ka=new P({props:{name:"get_special_tokens_mask",anchor:"transformers.RobertaTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/tokenization_roberta.py#L365",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ta=new P({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/tokenization_roberta.py#L392",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ya=new P({props:{name:"save_vocabulary",anchor:"transformers.RobertaTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/tokenization_roberta.py#L311"}}),wa=new Fe({}),$a=new P({props:{name:"class transformers.RobertaTokenizerFast",anchor:"transformers.RobertaTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RobertaTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.RobertaTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.RobertaTokenizerFast.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.RobertaTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.RobertaTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.RobertaTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.RobertaTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.RobertaTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.RobertaTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.RobertaTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.RobertaTokenizerFast.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (RoBERTa tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.RobertaTokenizerFast.trim_offsets",description:`<strong>trim_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether the post processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/tokenization_roberta_fast.py#L68"}}),vn=new te({props:{anchor:"transformers.RobertaTokenizerFast.example",$$slots:{default:[iR]},$$scope:{ctx:R}}}),Tn=new _e({props:{$$slots:{default:[lR]},$$scope:{ctx:R}}}),Ma=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RobertaTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/tokenization_roberta_fast.py#L270"}}),Ea=new Fe({}),za=new P({props:{name:"class transformers.RobertaModel",anchor:"transformers.RobertaModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.RobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_roberta.py#L696"}}),Aa=new P({props:{name:"forward",anchor:"transformers.RobertaModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RobertaModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RobertaModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RobertaModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RobertaModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RobertaModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RobertaModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RobertaModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RobertaModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.RobertaModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.RobertaModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.RobertaModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_roberta.py#L741",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$n=new _e({props:{$$slots:{default:[dR]},$$scope:{ctx:R}}}),Fn=new te({props:{anchor:"transformers.RobertaModel.forward.example",$$slots:{default:[cR]},$$scope:{ctx:R}}}),Oa=new Fe({}),Na=new P({props:{name:"class transformers.RobertaForCausalLM",anchor:"transformers.RobertaForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_roberta.py#L882"}}),Ua=new P({props:{name:"forward",anchor:"transformers.RobertaForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Tuple[typing.Tuple[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RobertaForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RobertaForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RobertaForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RobertaForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RobertaForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RobertaForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RobertaForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RobertaForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.RobertaForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.RobertaForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.RobertaForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.RobertaForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_roberta.py#L908",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
`}}),Rn=new _e({props:{$$slots:{default:[pR]},$$scope:{ctx:R}}}),Mn=new te({props:{anchor:"transformers.RobertaForCausalLM.forward.example",$$slots:{default:[hR]},$$scope:{ctx:R}}}),Ba=new Fe({}),Ha=new P({props:{name:"class transformers.RobertaForMaskedLM",anchor:"transformers.RobertaForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_roberta.py#L1034"}}),Ga=new P({props:{name:"forward",anchor:"transformers.RobertaForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RobertaForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RobertaForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RobertaForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RobertaForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RobertaForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RobertaForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RobertaForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RobertaForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.RobertaForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_roberta.py#L1063",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
`}}),zn=new _e({props:{$$slots:{default:[mR]},$$scope:{ctx:R}}}),qn=new te({props:{anchor:"transformers.RobertaForMaskedLM.forward.example",$$slots:{default:[fR]},$$scope:{ctx:R}}}),Cn=new te({props:{anchor:"transformers.RobertaForMaskedLM.forward.example-2",$$slots:{default:[uR]},$$scope:{ctx:R}}}),Xa=new Fe({}),Ya=new P({props:{name:"class transformers.RobertaForSequenceClassification",anchor:"transformers.RobertaForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_roberta.py#L1165"}}),or=new P({props:{name:"forward",anchor:"transformers.RobertaForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RobertaForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RobertaForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RobertaForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RobertaForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RobertaForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RobertaForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RobertaForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RobertaForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_roberta.py#L1179",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
`}}),Pn=new _e({props:{$$slots:{default:[gR]},$$scope:{ctx:R}}}),Ln=new te({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example",$$slots:{default:[_R]},$$scope:{ctx:R}}}),An=new te({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example-2",$$slots:{default:[bR]},$$scope:{ctx:R}}}),On=new te({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example-3",$$slots:{default:[kR]},$$scope:{ctx:R}}}),Nn=new te({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example-4",$$slots:{default:[vR]},$$scope:{ctx:R}}}),nr=new Fe({}),sr=new P({props:{name:"class transformers.RobertaForMultipleChoice",anchor:"transformers.RobertaForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_roberta.py#L1265"}}),lr=new P({props:{name:"forward",anchor:"transformers.RobertaForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RobertaForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RobertaForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RobertaForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RobertaForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RobertaForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RobertaForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RobertaForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RobertaForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_roberta.py#L1278",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
`}}),Dn=new _e({props:{$$slots:{default:[TR]},$$scope:{ctx:R}}}),Sn=new te({props:{anchor:"transformers.RobertaForMultipleChoice.forward.example",$$slots:{default:[yR]},$$scope:{ctx:R}}}),dr=new Fe({}),cr=new P({props:{name:"class transformers.RobertaForTokenClassification",anchor:"transformers.RobertaForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_roberta.py#L1358"}}),fr=new P({props:{name:"forward",anchor:"transformers.RobertaForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RobertaForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RobertaForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RobertaForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RobertaForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RobertaForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RobertaForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RobertaForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RobertaForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_roberta.py#L1376",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
`}}),Un=new _e({props:{$$slots:{default:[wR]},$$scope:{ctx:R}}}),Bn=new te({props:{anchor:"transformers.RobertaForTokenClassification.forward.example",$$slots:{default:[$R]},$$scope:{ctx:R}}}),Hn=new te({props:{anchor:"transformers.RobertaForTokenClassification.forward.example-2",$$slots:{default:[FR]},$$scope:{ctx:R}}}),ur=new Fe({}),gr=new P({props:{name:"class transformers.RobertaForQuestionAnswering",anchor:"transformers.RobertaForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_roberta.py#L1467"}}),vr=new P({props:{name:"forward",anchor:"transformers.RobertaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RobertaForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RobertaForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RobertaForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RobertaForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RobertaForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RobertaForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RobertaForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RobertaForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.RobertaForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_roberta.py#L1481",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
`}}),Vn=new _e({props:{$$slots:{default:[xR]},$$scope:{ctx:R}}}),Jn=new te({props:{anchor:"transformers.RobertaForQuestionAnswering.forward.example",$$slots:{default:[RR]},$$scope:{ctx:R}}}),Kn=new te({props:{anchor:"transformers.RobertaForQuestionAnswering.forward.example-2",$$slots:{default:[MR]},$$scope:{ctx:R}}}),Tr=new Fe({}),yr=new P({props:{name:"class transformers.TFRobertaModel",anchor:"transformers.TFRobertaModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_tf_roberta.py#L909"}}),Xn=new _e({props:{$$slots:{default:[ER]},$$scope:{ctx:R}}}),xr=new P({props:{name:"call",anchor:"transformers.TFRobertaModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRobertaModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRobertaModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRobertaModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRobertaModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRobertaModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRobertaModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRobertaModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRobertaModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaModel.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFRobertaModel.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFRobertaModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFRobertaModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_tf_roberta.py#L914",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
`}}),Yn=new _e({props:{$$slots:{default:[zR]},$$scope:{ctx:R}}}),Zn=new te({props:{anchor:"transformers.TFRobertaModel.call.example",$$slots:{default:[qR]},$$scope:{ctx:R}}}),Rr=new Fe({}),Mr=new P({props:{name:"class transformers.TFRobertaForCausalLM",anchor:"transformers.TFRobertaForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1138"}}),Er=new P({props:{name:"call",anchor:"transformers.TFRobertaForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForCausalLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRobertaForCausalLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRobertaForCausalLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRobertaForCausalLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRobertaForCausalLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRobertaForCausalLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRobertaForCausalLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRobertaForCausalLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRobertaForCausalLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForCausalLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForCausalLM.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFRobertaForCausalLM.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFRobertaForCausalLM.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFRobertaForCausalLM.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFRobertaForCausalLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1171",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
`}}),ts=new _e({props:{$$slots:{default:[CR]},$$scope:{ctx:R}}}),os=new te({props:{anchor:"transformers.TFRobertaForCausalLM.call.example",$$slots:{default:[jR]},$$scope:{ctx:R}}}),zr=new Fe({}),qr=new P({props:{name:"class transformers.TFRobertaForMaskedLM",anchor:"transformers.TFRobertaForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1053"}}),ss=new _e({props:{$$slots:{default:[PR]},$$scope:{ctx:R}}}),Ar=new P({props:{name:"call",anchor:"transformers.TFRobertaForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRobertaForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRobertaForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRobertaForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRobertaForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRobertaForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRobertaForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRobertaForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRobertaForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1070",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
`}}),as=new _e({props:{$$slots:{default:[LR]},$$scope:{ctx:R}}}),rs=new te({props:{anchor:"transformers.TFRobertaForMaskedLM.call.example",$$slots:{default:[AR]},$$scope:{ctx:R}}}),is=new te({props:{anchor:"transformers.TFRobertaForMaskedLM.call.example-2",$$slots:{default:[OR]},$$scope:{ctx:R}}}),Or=new Fe({}),Nr=new P({props:{name:"class transformers.TFRobertaForSequenceClassification",anchor:"transformers.TFRobertaForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1318"}}),ds=new _e({props:{$$slots:{default:[NR]},$$scope:{ctx:R}}}),Wr=new P({props:{name:"call",anchor:"transformers.TFRobertaForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRobertaForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRobertaForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRobertaForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRobertaForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRobertaForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRobertaForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRobertaForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRobertaForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1329",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
`}}),cs=new _e({props:{$$slots:{default:[IR]},$$scope:{ctx:R}}}),ps=new te({props:{anchor:"transformers.TFRobertaForSequenceClassification.call.example",$$slots:{default:[DR]},$$scope:{ctx:R}}}),hs=new te({props:{anchor:"transformers.TFRobertaForSequenceClassification.call.example-2",$$slots:{default:[SR]},$$scope:{ctx:R}}}),Ur=new Fe({}),Br=new P({props:{name:"class transformers.TFRobertaForMultipleChoice",anchor:"transformers.TFRobertaForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1402"}}),fs=new _e({props:{$$slots:{default:[WR]},$$scope:{ctx:R}}}),Jr=new P({props:{name:"call",anchor:"transformers.TFRobertaForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRobertaForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRobertaForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRobertaForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRobertaForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRobertaForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRobertaForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRobertaForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRobertaForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1426",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
`}}),us=new _e({props:{$$slots:{default:[UR]},$$scope:{ctx:R}}}),gs=new te({props:{anchor:"transformers.TFRobertaForMultipleChoice.call.example",$$slots:{default:[BR]},$$scope:{ctx:R}}}),Kr=new Fe({}),Gr=new P({props:{name:"class transformers.TFRobertaForTokenClassification",anchor:"transformers.TFRobertaForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1523"}}),bs=new _e({props:{$$slots:{default:[HR]},$$scope:{ctx:R}}}),ei=new P({props:{name:"call",anchor:"transformers.TFRobertaForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRobertaForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRobertaForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRobertaForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRobertaForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRobertaForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRobertaForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRobertaForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRobertaForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1541",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
`}}),ks=new _e({props:{$$slots:{default:[QR]},$$scope:{ctx:R}}}),vs=new te({props:{anchor:"transformers.TFRobertaForTokenClassification.call.example",$$slots:{default:[VR]},$$scope:{ctx:R}}}),Ts=new te({props:{anchor:"transformers.TFRobertaForTokenClassification.call.example-2",$$slots:{default:[JR]},$$scope:{ctx:R}}}),ti=new Fe({}),oi=new P({props:{name:"class transformers.TFRobertaForQuestionAnswering",anchor:"transformers.TFRobertaForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1614"}}),ws=new _e({props:{$$slots:{default:[KR]},$$scope:{ctx:R}}}),ri=new P({props:{name:"call",anchor:"transformers.TFRobertaForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1627",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
`}}),$s=new _e({props:{$$slots:{default:[GR]},$$scope:{ctx:R}}}),Fs=new te({props:{anchor:"transformers.TFRobertaForQuestionAnswering.call.example",$$slots:{default:[XR]},$$scope:{ctx:R}}}),xs=new te({props:{anchor:"transformers.TFRobertaForQuestionAnswering.call.example-2",$$slots:{default:[YR]},$$scope:{ctx:R}}}),ii=new Fe({}),li=new P({props:{name:"class transformers.FlaxRobertaModel",anchor:"transformers.FlaxRobertaModel",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_flax_roberta.py#L726"}}),gi=new P({props:{name:"__call__",anchor:"transformers.FlaxRobertaModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRobertaModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRobertaModel.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRobertaModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRobertaModel.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRobertaModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_flax_roberta.py#L608",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ms=new _e({props:{$$slots:{default:[ZR]},$$scope:{ctx:R}}}),Es=new te({props:{anchor:"transformers.FlaxRobertaModel.__call__.example",$$slots:{default:[eM]},$$scope:{ctx:R}}}),_i=new Fe({}),bi=new P({props:{name:"class transformers.FlaxRobertaForMaskedLM",anchor:"transformers.FlaxRobertaForMaskedLM",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_flax_roberta.py#L788"}}),Ri=new P({props:{name:"__call__",anchor:"transformers.FlaxRobertaForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRobertaForMaskedLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRobertaForMaskedLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRobertaForMaskedLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRobertaForMaskedLM.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRobertaForMaskedLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_flax_roberta.py#L608",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qs=new _e({props:{$$slots:{default:[tM]},$$scope:{ctx:R}}}),Cs=new te({props:{anchor:"transformers.FlaxRobertaForMaskedLM.__call__.example",$$slots:{default:[oM]},$$scope:{ctx:R}}}),Mi=new Fe({}),Ei=new P({props:{name:"class transformers.FlaxRobertaForSequenceClassification",anchor:"transformers.FlaxRobertaForSequenceClassification",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_flax_roberta.py#L855"}}),Oi=new P({props:{name:"__call__",anchor:"transformers.FlaxRobertaForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRobertaForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRobertaForSequenceClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRobertaForSequenceClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRobertaForSequenceClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRobertaForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_flax_roberta.py#L608",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ps=new _e({props:{$$slots:{default:[nM]},$$scope:{ctx:R}}}),Ls=new te({props:{anchor:"transformers.FlaxRobertaForSequenceClassification.__call__.example",$$slots:{default:[sM]},$$scope:{ctx:R}}}),Ni=new Fe({}),Ii=new P({props:{name:"class transformers.FlaxRobertaForMultipleChoice",anchor:"transformers.FlaxRobertaForMultipleChoice",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_flax_roberta.py#L932"}}),Vi=new P({props:{name:"__call__",anchor:"transformers.FlaxRobertaForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRobertaForMultipleChoice.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRobertaForMultipleChoice.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRobertaForMultipleChoice.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRobertaForMultipleChoice.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRobertaForMultipleChoice.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_flax_roberta.py#L608",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Os=new _e({props:{$$slots:{default:[aM]},$$scope:{ctx:R}}}),Ns=new te({props:{anchor:"transformers.FlaxRobertaForMultipleChoice.__call__.example",$$slots:{default:[rM]},$$scope:{ctx:R}}}),Ji=new Fe({}),Ki=new P({props:{name:"class transformers.FlaxRobertaForTokenClassification",anchor:"transformers.FlaxRobertaForTokenClassification",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_flax_roberta.py#L1009"}}),nl=new P({props:{name:"__call__",anchor:"transformers.FlaxRobertaForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRobertaForTokenClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRobertaForTokenClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRobertaForTokenClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRobertaForTokenClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRobertaForTokenClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_flax_roberta.py#L608",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ds=new _e({props:{$$slots:{default:[iM]},$$scope:{ctx:R}}}),Ss=new te({props:{anchor:"transformers.FlaxRobertaForTokenClassification.__call__.example",$$slots:{default:[lM]},$$scope:{ctx:R}}}),sl=new Fe({}),al=new P({props:{name:"class transformers.FlaxRobertaForQuestionAnswering",anchor:"transformers.FlaxRobertaForQuestionAnswering",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_flax_roberta.py#L1081"}}),ml=new P({props:{name:"__call__",anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_flax_roberta.py#L608",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>start_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Us=new _e({props:{$$slots:{default:[dM]},$$scope:{ctx:R}}}),Bs=new te({props:{anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__.example",$$slots:{default:[cM]},$$scope:{ctx:R}}}),{c(){d=n("meta"),g=p(),c=n("h1"),m=n("a"),_=n("span"),T(l.$$.fragment),f=p(),M=n("span"),Y=r("RoBERTa"),I=p(),z=n("h2"),X=n("a"),D=n("span"),T(se.$$.fragment),be=p(),S=n("span"),ke=r("Overview"),fe=p(),K=n("p"),A=r("The RoBERTa model was proposed in "),ae=n("a"),Z=r("RoBERTa: A Robustly Optimized BERT Pretraining Approach"),q=r(` by Yinhan Liu, Myle Ott, Naman Goyal, Jingfei Du, Mandar Joshi, Danqi Chen, Omer
Levy, Mike Lewis, Luke Zettlemoyer, Veselin Stoyanov. It is based on Google\u2019s BERT model released in 2018.`),j=p(),ie=n("p"),B=r(`It builds on BERT and modifies key hyperparameters, removing the next-sentence pretraining objective and training with
much larger mini-batches and learning rates.`),ue=p(),le=n("p"),H=r("The abstract from the paper is the following:"),ge=p(),de=n("p"),C=n("em"),ve=r(`Language model pretraining has led to significant performance gains but careful comparison between different
approaches is challenging. Training is computationally expensive, often done on private datasets of different sizes,
and, as we will show, hyperparameter choices have significant impact on the final results. We present a replication
study of BERT pretraining (Devlin et al., 2019) that carefully measures the impact of many key hyperparameters and
training data size. We find that BERT was significantly undertrained, and can match or exceed the performance of every
model published after it. Our best model achieves state-of-the-art results on GLUE, RACE and SQuAD. These results
highlight the importance of previously overlooked design choices, and raise questions about the source of recently
reported improvements. We release our models and code.`),W=p(),ce=n("p"),Te=r("Tips:"),U=p(),G=n("ul"),re=n("li"),O=r("This implementation is the same as "),pe=n("a"),Q=r("BertModel"),ye=r(` with a tiny embeddings tweak as well as a setup
for Roberta pretrained models.`),v=p(),E=n("li"),ee=r(`RoBERTa has the same architecture as BERT, but uses a byte-level BPE as a tokenizer (same as GPT-2) and uses a
different pretraining scheme.`),Ee=p(),me=n("li"),N=r("RoBERTa doesn\u2019t have "),Re=n("code"),ze=r("token_type_ids"),qe=r(`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),L=n("code"),V=r("tokenizer.sep_token"),Ce=r(" (or "),Me=n("code"),J=r("</s>"),je=r(")"),Pe=p(),he=n("li"),xe=n("a"),ku=r("CamemBERT"),vu=r(" is a wrapper around RoBERTa. Refer to this page for usage examples."),lm=p(),Jt=n("p"),Tu=r("This model was contributed by "),da=n("a"),yu=r("julien-c"),wu=r(". The original code can be found "),ca=n("a"),$u=r("here"),Fu=r("."),dm=p(),co=n("h2"),hn=n("a"),Sd=n("span"),T(pa.$$.fragment),xu=p(),Wd=n("span"),Ru=r("RobertaConfig"),cm=p(),Ze=n("div"),T(ha.$$.fragment),Mu=p(),po=n("p"),Eu=r("This is the configuration class to store the configuration of a "),$l=n("a"),zu=r("RobertaModel"),qu=r(" or a "),Fl=n("a"),Cu=r("TFRobertaModel"),ju=r(`. It is
used to instantiate a RoBERTa model according to the specified arguments, defining the model architecture.`),Pu=p(),ho=n("p"),Lu=r("Configuration objects inherit from "),xl=n("a"),Au=r("PretrainedConfig"),Ou=r(` and can be used to control the model outputs. Read the
documentation from `),Rl=n("a"),Nu=r("PretrainedConfig"),Iu=r(" for more information."),Du=p(),mo=n("p"),Su=r("The "),Ml=n("a"),Wu=r("RobertaConfig"),Uu=r(" class directly inherits "),El=n("a"),Bu=r("BertConfig"),Hu=r(`. It reuses the same defaults. Please check the parent
class for more information.`),Qu=p(),T(mn.$$.fragment),pm=p(),fo=n("h2"),fn=n("a"),Ud=n("span"),T(ma.$$.fragment),Vu=p(),Bd=n("span"),Ju=r("RobertaTokenizer"),hm=p(),we=n("div"),T(fa.$$.fragment),Ku=p(),Hd=n("p"),Gu=r("Constructs a RoBERTa tokenizer, derived from the GPT-2 tokenizer, using byte-level Byte-Pair-Encoding."),Xu=p(),Qd=n("p"),Yu=r("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Zu=p(),T(un.$$.fragment),eg=p(),ua=n("p"),tg=r("You can get around that behavior by passing "),Vd=n("code"),og=r("add_prefix_space=True"),ng=r(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),sg=p(),T(gn.$$.fragment),ag=p(),ga=n("p"),rg=r("This tokenizer inherits from "),zl=n("a"),ig=r("PreTrainedTokenizer"),lg=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),dg=p(),Kt=n("div"),T(_a.$$.fragment),cg=p(),Jd=n("p"),pg=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoBERTa sequence has the following format:`),hg=p(),ba=n("ul"),ql=n("li"),mg=r("single sequence: "),Kd=n("code"),fg=r("<s> X </s>"),ug=p(),Cl=n("li"),gg=r("pair of sequences: "),Gd=n("code"),_g=r("<s> A </s></s> B </s>"),bg=p(),_n=n("div"),T(ka.$$.fragment),kg=p(),va=n("p"),vg=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Xd=n("code"),Tg=r("prepare_for_model"),yg=r(" method."),wg=p(),bn=n("div"),T(Ta.$$.fragment),$g=p(),Yd=n("p"),Fg=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. RoBERTa does not
make use of token type ids, therefore a list of zeros is returned.`),xg=p(),jl=n("div"),T(ya.$$.fragment),mm=p(),uo=n("h2"),kn=n("a"),Zd=n("span"),T(wa.$$.fragment),Rg=p(),ec=n("span"),Mg=r("RobertaTokenizerFast"),fm=p(),Le=n("div"),T($a.$$.fragment),Eg=p(),Fa=n("p"),zg=r("Construct a \u201Cfast\u201D RoBERTa tokenizer (backed by HuggingFace\u2019s "),tc=n("em"),qg=r("tokenizers"),Cg=r(` library), derived from the GPT-2
tokenizer, using byte-level Byte-Pair-Encoding.`),jg=p(),oc=n("p"),Pg=r("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Lg=p(),T(vn.$$.fragment),Ag=p(),xa=n("p"),Og=r("You can get around that behavior by passing "),nc=n("code"),Ng=r("add_prefix_space=True"),Ig=r(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Dg=p(),T(Tn.$$.fragment),Sg=p(),Ra=n("p"),Wg=r("This tokenizer inherits from "),Pl=n("a"),Ug=r("PreTrainedTokenizerFast"),Bg=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Hg=p(),Ll=n("div"),T(Ma.$$.fragment),um=p(),go=n("h2"),yn=n("a"),sc=n("span"),T(Ea.$$.fragment),Qg=p(),ac=n("span"),Vg=r("RobertaModel"),gm=p(),Ae=n("div"),T(za.$$.fragment),Jg=p(),rc=n("p"),Kg=r("The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),Gg=p(),qa=n("p"),Xg=r("This model inherits from "),Al=n("a"),Yg=r("PreTrainedModel"),Zg=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),e_=p(),Ca=n("p"),t_=r("This model is also a PyTorch "),ja=n("a"),o_=r("torch.nn.Module"),n_=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),s_=p(),Pa=n("p"),a_=r(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),ic=n("em"),r_=r(`Attention is
all you need`),i_=r(`_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`),l_=p(),Be=n("p"),d_=r("To behave as an decoder the model needs to be initialized with the "),lc=n("code"),c_=r("is_decoder"),p_=r(` argument of the configuration set
to `),dc=n("code"),h_=r("True"),m_=r(". To be used in a Seq2Seq model, the model needs to initialized with both "),cc=n("code"),f_=r("is_decoder"),u_=r(` argument and
`),pc=n("code"),g_=r("add_cross_attention"),__=r(" set to "),hc=n("code"),b_=r("True"),k_=r("; an "),mc=n("code"),v_=r("encoder_hidden_states"),T_=r(" is then expected as an input to the forward pass."),y_=p(),wn=n("p"),w_=r(".. _"),fc=n("em"),$_=r("Attention is all you need"),F_=r(": "),La=n("a"),x_=r("https://arxiv.org/abs/1706.03762"),R_=p(),yt=n("div"),T(Aa.$$.fragment),M_=p(),_o=n("p"),E_=r("The "),Ol=n("a"),z_=r("RobertaModel"),q_=r(" forward method, overrides the "),uc=n("code"),C_=r("__call__"),j_=r(" special method."),P_=p(),T($n.$$.fragment),L_=p(),T(Fn.$$.fragment),_m=p(),bo=n("h2"),xn=n("a"),gc=n("span"),T(Oa.$$.fragment),A_=p(),_c=n("span"),O_=r("RobertaForCausalLM"),bm=p(),et=n("div"),T(Na.$$.fragment),N_=p(),Ia=n("p"),I_=r("RoBERTa Model with a "),bc=n("code"),D_=r("language modeling"),S_=r(" head on top for CLM fine-tuning."),W_=p(),Da=n("p"),U_=r("This model inherits from "),Nl=n("a"),B_=r("PreTrainedModel"),H_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Q_=p(),Sa=n("p"),V_=r("This model is also a PyTorch "),Wa=n("a"),J_=r("torch.nn.Module"),K_=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),G_=p(),wt=n("div"),T(Ua.$$.fragment),X_=p(),ko=n("p"),Y_=r("The "),Il=n("a"),Z_=r("RobertaForCausalLM"),eb=r(" forward method, overrides the "),kc=n("code"),tb=r("__call__"),ob=r(" special method."),nb=p(),T(Rn.$$.fragment),sb=p(),T(Mn.$$.fragment),km=p(),vo=n("h2"),En=n("a"),vc=n("span"),T(Ba.$$.fragment),ab=p(),Tc=n("span"),rb=r("RobertaForMaskedLM"),vm=p(),tt=n("div"),T(Ha.$$.fragment),ib=p(),Qa=n("p"),lb=r("RoBERTa Model with a "),yc=n("code"),db=r("language modeling"),cb=r(" head on top."),pb=p(),Va=n("p"),hb=r("This model inherits from "),Dl=n("a"),mb=r("PreTrainedModel"),fb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ub=p(),Ja=n("p"),gb=r("This model is also a PyTorch "),Ka=n("a"),_b=r("torch.nn.Module"),bb=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kb=p(),rt=n("div"),T(Ga.$$.fragment),vb=p(),To=n("p"),Tb=r("The "),Sl=n("a"),yb=r("RobertaForMaskedLM"),wb=r(" forward method, overrides the "),wc=n("code"),$b=r("__call__"),Fb=r(" special method."),xb=p(),T(zn.$$.fragment),Rb=p(),T(qn.$$.fragment),Mb=p(),T(Cn.$$.fragment),Tm=p(),yo=n("h2"),jn=n("a"),$c=n("span"),T(Xa.$$.fragment),Eb=p(),Fc=n("span"),zb=r("RobertaForSequenceClassification"),ym=p(),ot=n("div"),T(Ya.$$.fragment),qb=p(),xc=n("p"),Cb=r(`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),jb=p(),Za=n("p"),Pb=r("This model inherits from "),Wl=n("a"),Lb=r("PreTrainedModel"),Ab=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ob=p(),er=n("p"),Nb=r("This model is also a PyTorch "),tr=n("a"),Ib=r("torch.nn.Module"),Db=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sb=p(),Ue=n("div"),T(or.$$.fragment),Wb=p(),wo=n("p"),Ub=r("The "),Ul=n("a"),Bb=r("RobertaForSequenceClassification"),Hb=r(" forward method, overrides the "),Rc=n("code"),Qb=r("__call__"),Vb=r(" special method."),Jb=p(),T(Pn.$$.fragment),Kb=p(),T(Ln.$$.fragment),Gb=p(),T(An.$$.fragment),Xb=p(),T(On.$$.fragment),Yb=p(),T(Nn.$$.fragment),wm=p(),$o=n("h2"),In=n("a"),Mc=n("span"),T(nr.$$.fragment),Zb=p(),Ec=n("span"),ek=r("RobertaForMultipleChoice"),$m=p(),nt=n("div"),T(sr.$$.fragment),tk=p(),zc=n("p"),ok=r(`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),nk=p(),ar=n("p"),sk=r("This model inherits from "),Bl=n("a"),ak=r("PreTrainedModel"),rk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ik=p(),rr=n("p"),lk=r("This model is also a PyTorch "),ir=n("a"),dk=r("torch.nn.Module"),ck=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pk=p(),$t=n("div"),T(lr.$$.fragment),hk=p(),Fo=n("p"),mk=r("The "),Hl=n("a"),fk=r("RobertaForMultipleChoice"),uk=r(" forward method, overrides the "),qc=n("code"),gk=r("__call__"),_k=r(" special method."),bk=p(),T(Dn.$$.fragment),kk=p(),T(Sn.$$.fragment),Fm=p(),xo=n("h2"),Wn=n("a"),Cc=n("span"),T(dr.$$.fragment),vk=p(),jc=n("span"),Tk=r("RobertaForTokenClassification"),xm=p(),st=n("div"),T(cr.$$.fragment),yk=p(),Pc=n("p"),wk=r(`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),$k=p(),pr=n("p"),Fk=r("This model inherits from "),Ql=n("a"),xk=r("PreTrainedModel"),Rk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mk=p(),hr=n("p"),Ek=r("This model is also a PyTorch "),mr=n("a"),zk=r("torch.nn.Module"),qk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ck=p(),it=n("div"),T(fr.$$.fragment),jk=p(),Ro=n("p"),Pk=r("The "),Vl=n("a"),Lk=r("RobertaForTokenClassification"),Ak=r(" forward method, overrides the "),Lc=n("code"),Ok=r("__call__"),Nk=r(" special method."),Ik=p(),T(Un.$$.fragment),Dk=p(),T(Bn.$$.fragment),Sk=p(),T(Hn.$$.fragment),Rm=p(),Mo=n("h2"),Qn=n("a"),Ac=n("span"),T(ur.$$.fragment),Wk=p(),Oc=n("span"),Uk=r("RobertaForQuestionAnswering"),Mm=p(),at=n("div"),T(gr.$$.fragment),Bk=p(),Eo=n("p"),Hk=r(`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Nc=n("code"),Qk=r("span start logits"),Vk=r(" and "),Ic=n("code"),Jk=r("span end logits"),Kk=r(")."),Gk=p(),_r=n("p"),Xk=r("This model inherits from "),Jl=n("a"),Yk=r("PreTrainedModel"),Zk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ev=p(),br=n("p"),tv=r("This model is also a PyTorch "),kr=n("a"),ov=r("torch.nn.Module"),nv=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sv=p(),lt=n("div"),T(vr.$$.fragment),av=p(),zo=n("p"),rv=r("The "),Kl=n("a"),iv=r("RobertaForQuestionAnswering"),lv=r(" forward method, overrides the "),Dc=n("code"),dv=r("__call__"),cv=r(" special method."),pv=p(),T(Vn.$$.fragment),hv=p(),T(Jn.$$.fragment),mv=p(),T(Kn.$$.fragment),Em=p(),qo=n("h2"),Gn=n("a"),Sc=n("span"),T(Tr.$$.fragment),fv=p(),Wc=n("span"),uv=r("TFRobertaModel"),zm=p(),He=n("div"),T(yr.$$.fragment),gv=p(),Uc=n("p"),_v=r("The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),bv=p(),wr=n("p"),kv=r("This model inherits from "),Gl=n("a"),vv=r("TFPreTrainedModel"),Tv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yv=p(),$r=n("p"),wv=r("This model is also a "),Fr=n("a"),$v=r("tf.keras.Model"),Fv=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xv=p(),T(Xn.$$.fragment),Rv=p(),Ft=n("div"),T(xr.$$.fragment),Mv=p(),Co=n("p"),Ev=r("The "),Xl=n("a"),zv=r("TFRobertaModel"),qv=r(" forward method, overrides the "),Bc=n("code"),Cv=r("__call__"),jv=r(" special method."),Pv=p(),T(Yn.$$.fragment),Lv=p(),T(Zn.$$.fragment),qm=p(),jo=n("h2"),es=n("a"),Hc=n("span"),T(Rr.$$.fragment),Av=p(),Qc=n("span"),Ov=r("TFRobertaForCausalLM"),Cm=p(),Po=n("div"),T(Mr.$$.fragment),Nv=p(),xt=n("div"),T(Er.$$.fragment),Iv=p(),Lo=n("p"),Dv=r("The "),Yl=n("a"),Sv=r("TFRobertaForCausalLM"),Wv=r(" forward method, overrides the "),Vc=n("code"),Uv=r("__call__"),Bv=r(" special method."),Hv=p(),T(ts.$$.fragment),Qv=p(),T(os.$$.fragment),jm=p(),Ao=n("h2"),ns=n("a"),Jc=n("span"),T(zr.$$.fragment),Vv=p(),Kc=n("span"),Jv=r("TFRobertaForMaskedLM"),Pm=p(),Qe=n("div"),T(qr.$$.fragment),Kv=p(),Cr=n("p"),Gv=r("RoBERTa Model with a "),Gc=n("code"),Xv=r("language modeling"),Yv=r(" head on top."),Zv=p(),jr=n("p"),eT=r("This model inherits from "),Zl=n("a"),tT=r("TFPreTrainedModel"),oT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nT=p(),Pr=n("p"),sT=r("This model is also a "),Lr=n("a"),aT=r("tf.keras.Model"),rT=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),iT=p(),T(ss.$$.fragment),lT=p(),dt=n("div"),T(Ar.$$.fragment),dT=p(),Oo=n("p"),cT=r("The "),ed=n("a"),pT=r("TFRobertaForMaskedLM"),hT=r(" forward method, overrides the "),Xc=n("code"),mT=r("__call__"),fT=r(" special method."),uT=p(),T(as.$$.fragment),gT=p(),T(rs.$$.fragment),_T=p(),T(is.$$.fragment),Lm=p(),No=n("h2"),ls=n("a"),Yc=n("span"),T(Or.$$.fragment),bT=p(),Zc=n("span"),kT=r("TFRobertaForSequenceClassification"),Am=p(),Ve=n("div"),T(Nr.$$.fragment),vT=p(),ep=n("p"),TT=r(`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),yT=p(),Ir=n("p"),wT=r("This model inherits from "),td=n("a"),$T=r("TFPreTrainedModel"),FT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xT=p(),Dr=n("p"),RT=r("This model is also a "),Sr=n("a"),MT=r("tf.keras.Model"),ET=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zT=p(),T(ds.$$.fragment),qT=p(),ct=n("div"),T(Wr.$$.fragment),CT=p(),Io=n("p"),jT=r("The "),od=n("a"),PT=r("TFRobertaForSequenceClassification"),LT=r(" forward method, overrides the "),tp=n("code"),AT=r("__call__"),OT=r(" special method."),NT=p(),T(cs.$$.fragment),IT=p(),T(ps.$$.fragment),DT=p(),T(hs.$$.fragment),Om=p(),Do=n("h2"),ms=n("a"),op=n("span"),T(Ur.$$.fragment),ST=p(),np=n("span"),WT=r("TFRobertaForMultipleChoice"),Nm=p(),Je=n("div"),T(Br.$$.fragment),UT=p(),sp=n("p"),BT=r(`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),HT=p(),Hr=n("p"),QT=r("This model inherits from "),nd=n("a"),VT=r("TFPreTrainedModel"),JT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),KT=p(),Qr=n("p"),GT=r("This model is also a "),Vr=n("a"),XT=r("tf.keras.Model"),YT=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ZT=p(),T(fs.$$.fragment),ey=p(),Rt=n("div"),T(Jr.$$.fragment),ty=p(),So=n("p"),oy=r("The "),sd=n("a"),ny=r("TFRobertaForMultipleChoice"),sy=r(" forward method, overrides the "),ap=n("code"),ay=r("__call__"),ry=r(" special method."),iy=p(),T(us.$$.fragment),ly=p(),T(gs.$$.fragment),Im=p(),Wo=n("h2"),_s=n("a"),rp=n("span"),T(Kr.$$.fragment),dy=p(),ip=n("span"),cy=r("TFRobertaForTokenClassification"),Dm=p(),Ke=n("div"),T(Gr.$$.fragment),py=p(),lp=n("p"),hy=r(`RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),my=p(),Xr=n("p"),fy=r("This model inherits from "),ad=n("a"),uy=r("TFPreTrainedModel"),gy=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_y=p(),Yr=n("p"),by=r("This model is also a "),Zr=n("a"),ky=r("tf.keras.Model"),vy=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ty=p(),T(bs.$$.fragment),yy=p(),pt=n("div"),T(ei.$$.fragment),wy=p(),Uo=n("p"),$y=r("The "),rd=n("a"),Fy=r("TFRobertaForTokenClassification"),xy=r(" forward method, overrides the "),dp=n("code"),Ry=r("__call__"),My=r(" special method."),Ey=p(),T(ks.$$.fragment),zy=p(),T(vs.$$.fragment),qy=p(),T(Ts.$$.fragment),Sm=p(),Bo=n("h2"),ys=n("a"),cp=n("span"),T(ti.$$.fragment),Cy=p(),pp=n("span"),jy=r("TFRobertaForQuestionAnswering"),Wm=p(),Ge=n("div"),T(oi.$$.fragment),Py=p(),Ho=n("p"),Ly=r(`RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),hp=n("code"),Ay=r("span start logits"),Oy=r(" and "),mp=n("code"),Ny=r("span end logits"),Iy=r(")."),Dy=p(),ni=n("p"),Sy=r("This model inherits from "),id=n("a"),Wy=r("TFPreTrainedModel"),Uy=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),By=p(),si=n("p"),Hy=r("This model is also a "),ai=n("a"),Qy=r("tf.keras.Model"),Vy=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jy=p(),T(ws.$$.fragment),Ky=p(),ht=n("div"),T(ri.$$.fragment),Gy=p(),Qo=n("p"),Xy=r("The "),ld=n("a"),Yy=r("TFRobertaForQuestionAnswering"),Zy=r(" forward method, overrides the "),fp=n("code"),ew=r("__call__"),tw=r(" special method."),ow=p(),T($s.$$.fragment),nw=p(),T(Fs.$$.fragment),sw=p(),T(xs.$$.fragment),Um=p(),Vo=n("h2"),Rs=n("a"),up=n("span"),T(ii.$$.fragment),aw=p(),gp=n("span"),rw=r("FlaxRobertaModel"),Bm=p(),Oe=n("div"),T(li.$$.fragment),iw=p(),_p=n("p"),lw=r("The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),dw=p(),di=n("p"),cw=r("This model inherits from "),dd=n("a"),pw=r("FlaxPreTrainedModel"),hw=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),mw=p(),ci=n("p"),fw=r("This model is also a Flax Linen "),pi=n("a"),uw=r("flax.linen.Module"),gw=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),_w=p(),bp=n("p"),bw=r("Finally, this model supports inherent JAX features such as:"),kw=p(),Dt=n("ul"),kp=n("li"),hi=n("a"),vw=r("Just-In-Time (JIT) compilation"),Tw=p(),vp=n("li"),mi=n("a"),yw=r("Automatic Differentiation"),ww=p(),Tp=n("li"),fi=n("a"),$w=r("Vectorization"),Fw=p(),yp=n("li"),ui=n("a"),xw=r("Parallelization"),Rw=p(),Mt=n("div"),T(gi.$$.fragment),Mw=p(),Jo=n("p"),Ew=r("The "),wp=n("code"),zw=r("FlaxRobertaPreTrainedModel"),qw=r(" forward method, overrides the "),$p=n("code"),Cw=r("__call__"),jw=r(" special method."),Pw=p(),T(Ms.$$.fragment),Lw=p(),T(Es.$$.fragment),Hm=p(),Ko=n("h2"),zs=n("a"),Fp=n("span"),T(_i.$$.fragment),Aw=p(),xp=n("span"),Ow=r("FlaxRobertaForMaskedLM"),Qm=p(),Ne=n("div"),T(bi.$$.fragment),Nw=p(),ki=n("p"),Iw=r("RoBERTa Model with a "),Rp=n("code"),Dw=r("language modeling"),Sw=r(" head on top."),Ww=p(),vi=n("p"),Uw=r("This model inherits from "),cd=n("a"),Bw=r("FlaxPreTrainedModel"),Hw=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Qw=p(),Ti=n("p"),Vw=r("This model is also a Flax Linen "),yi=n("a"),Jw=r("flax.linen.Module"),Kw=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Gw=p(),Mp=n("p"),Xw=r("Finally, this model supports inherent JAX features such as:"),Yw=p(),St=n("ul"),Ep=n("li"),wi=n("a"),Zw=r("Just-In-Time (JIT) compilation"),e1=p(),zp=n("li"),$i=n("a"),t1=r("Automatic Differentiation"),o1=p(),qp=n("li"),Fi=n("a"),n1=r("Vectorization"),s1=p(),Cp=n("li"),xi=n("a"),a1=r("Parallelization"),r1=p(),Et=n("div"),T(Ri.$$.fragment),i1=p(),Go=n("p"),l1=r("The "),jp=n("code"),d1=r("FlaxRobertaPreTrainedModel"),c1=r(" forward method, overrides the "),Pp=n("code"),p1=r("__call__"),h1=r(" special method."),m1=p(),T(qs.$$.fragment),f1=p(),T(Cs.$$.fragment),Vm=p(),Xo=n("h2"),js=n("a"),Lp=n("span"),T(Mi.$$.fragment),u1=p(),Ap=n("span"),g1=r("FlaxRobertaForSequenceClassification"),Jm=p(),Ie=n("div"),T(Ei.$$.fragment),_1=p(),Op=n("p"),b1=r(`Roberta Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),k1=p(),zi=n("p"),v1=r("This model inherits from "),pd=n("a"),T1=r("FlaxPreTrainedModel"),y1=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),w1=p(),qi=n("p"),$1=r("This model is also a Flax Linen "),Ci=n("a"),F1=r("flax.linen.Module"),x1=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),R1=p(),Np=n("p"),M1=r("Finally, this model supports inherent JAX features such as:"),E1=p(),Wt=n("ul"),Ip=n("li"),ji=n("a"),z1=r("Just-In-Time (JIT) compilation"),q1=p(),Dp=n("li"),Pi=n("a"),C1=r("Automatic Differentiation"),j1=p(),Sp=n("li"),Li=n("a"),P1=r("Vectorization"),L1=p(),Wp=n("li"),Ai=n("a"),A1=r("Parallelization"),O1=p(),zt=n("div"),T(Oi.$$.fragment),N1=p(),Yo=n("p"),I1=r("The "),Up=n("code"),D1=r("FlaxRobertaPreTrainedModel"),S1=r(" forward method, overrides the "),Bp=n("code"),W1=r("__call__"),U1=r(" special method."),B1=p(),T(Ps.$$.fragment),H1=p(),T(Ls.$$.fragment),Km=p(),Zo=n("h2"),As=n("a"),Hp=n("span"),T(Ni.$$.fragment),Q1=p(),Qp=n("span"),V1=r("FlaxRobertaForMultipleChoice"),Gm=p(),De=n("div"),T(Ii.$$.fragment),J1=p(),Vp=n("p"),K1=r(`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),G1=p(),Di=n("p"),X1=r("This model inherits from "),hd=n("a"),Y1=r("FlaxPreTrainedModel"),Z1=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),e$=p(),Si=n("p"),t$=r("This model is also a Flax Linen "),Wi=n("a"),o$=r("flax.linen.Module"),n$=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),s$=p(),Jp=n("p"),a$=r("Finally, this model supports inherent JAX features such as:"),r$=p(),Ut=n("ul"),Kp=n("li"),Ui=n("a"),i$=r("Just-In-Time (JIT) compilation"),l$=p(),Gp=n("li"),Bi=n("a"),d$=r("Automatic Differentiation"),c$=p(),Xp=n("li"),Hi=n("a"),p$=r("Vectorization"),h$=p(),Yp=n("li"),Qi=n("a"),m$=r("Parallelization"),f$=p(),qt=n("div"),T(Vi.$$.fragment),u$=p(),en=n("p"),g$=r("The "),Zp=n("code"),_$=r("FlaxRobertaPreTrainedModel"),b$=r(" forward method, overrides the "),eh=n("code"),k$=r("__call__"),v$=r(" special method."),T$=p(),T(Os.$$.fragment),y$=p(),T(Ns.$$.fragment),Xm=p(),tn=n("h2"),Is=n("a"),th=n("span"),T(Ji.$$.fragment),w$=p(),oh=n("span"),$$=r("FlaxRobertaForTokenClassification"),Ym=p(),Se=n("div"),T(Ki.$$.fragment),F$=p(),nh=n("p"),x$=r(`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),R$=p(),Gi=n("p"),M$=r("This model inherits from "),md=n("a"),E$=r("FlaxPreTrainedModel"),z$=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),q$=p(),Xi=n("p"),C$=r("This model is also a Flax Linen "),Yi=n("a"),j$=r("flax.linen.Module"),P$=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),L$=p(),sh=n("p"),A$=r("Finally, this model supports inherent JAX features such as:"),O$=p(),Bt=n("ul"),ah=n("li"),Zi=n("a"),N$=r("Just-In-Time (JIT) compilation"),I$=p(),rh=n("li"),el=n("a"),D$=r("Automatic Differentiation"),S$=p(),ih=n("li"),tl=n("a"),W$=r("Vectorization"),U$=p(),lh=n("li"),ol=n("a"),B$=r("Parallelization"),H$=p(),Ct=n("div"),T(nl.$$.fragment),Q$=p(),on=n("p"),V$=r("The "),dh=n("code"),J$=r("FlaxRobertaPreTrainedModel"),K$=r(" forward method, overrides the "),ch=n("code"),G$=r("__call__"),X$=r(" special method."),Y$=p(),T(Ds.$$.fragment),Z$=p(),T(Ss.$$.fragment),Zm=p(),nn=n("h2"),Ws=n("a"),ph=n("span"),T(sl.$$.fragment),e0=p(),hh=n("span"),t0=r("FlaxRobertaForQuestionAnswering"),ef=p(),We=n("div"),T(al.$$.fragment),o0=p(),sn=n("p"),n0=r(`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),mh=n("code"),s0=r("span start logits"),a0=r(" and "),fh=n("code"),r0=r("span end logits"),i0=r(")."),l0=p(),rl=n("p"),d0=r("This model inherits from "),fd=n("a"),c0=r("FlaxPreTrainedModel"),p0=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),h0=p(),il=n("p"),m0=r("This model is also a Flax Linen "),ll=n("a"),f0=r("flax.linen.Module"),u0=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),g0=p(),uh=n("p"),_0=r("Finally, this model supports inherent JAX features such as:"),b0=p(),Ht=n("ul"),gh=n("li"),dl=n("a"),k0=r("Just-In-Time (JIT) compilation"),v0=p(),_h=n("li"),cl=n("a"),T0=r("Automatic Differentiation"),y0=p(),bh=n("li"),pl=n("a"),w0=r("Vectorization"),$0=p(),kh=n("li"),hl=n("a"),F0=r("Parallelization"),x0=p(),jt=n("div"),T(ml.$$.fragment),R0=p(),an=n("p"),M0=r("The "),vh=n("code"),E0=r("FlaxRobertaPreTrainedModel"),z0=r(" forward method, overrides the "),Th=n("code"),q0=r("__call__"),C0=r(" special method."),j0=p(),T(Us.$$.fragment),P0=p(),T(Bs.$$.fragment),this.h()},l(o){const b=oR('[data-svelte="svelte-1phssyn"]',document.head);d=s(b,"META",{name:!0,content:!0}),b.forEach(t),g=h(o),c=s(o,"H1",{class:!0});var fl=a(c);m=s(fl,"A",{id:!0,class:!0,href:!0});var yh=a(m);_=s(yh,"SPAN",{});var wh=a(_);y(l.$$.fragment,wh),wh.forEach(t),yh.forEach(t),f=h(fl),M=s(fl,"SPAN",{});var $h=a(M);Y=i($h,"RoBERTa"),$h.forEach(t),fl.forEach(t),I=h(o),z=s(o,"H2",{class:!0});var ul=a(z);X=s(ul,"A",{id:!0,class:!0,href:!0});var Fh=a(X);D=s(Fh,"SPAN",{});var xh=a(D);y(se.$$.fragment,xh),xh.forEach(t),Fh.forEach(t),be=h(ul),S=s(ul,"SPAN",{});var Rh=a(S);ke=i(Rh,"Overview"),Rh.forEach(t),ul.forEach(t),fe=h(o),K=s(o,"P",{});var gl=a(K);A=i(gl,"The RoBERTa model was proposed in "),ae=s(gl,"A",{href:!0,rel:!0});var Mh=a(ae);Z=i(Mh,"RoBERTa: A Robustly Optimized BERT Pretraining Approach"),Mh.forEach(t),q=i(gl,` by Yinhan Liu, Myle Ott, Naman Goyal, Jingfei Du, Mandar Joshi, Danqi Chen, Omer
Levy, Mike Lewis, Luke Zettlemoyer, Veselin Stoyanov. It is based on Google\u2019s BERT model released in 2018.`),gl.forEach(t),j=h(o),ie=s(o,"P",{});var Eh=a(ie);B=i(Eh,`It builds on BERT and modifies key hyperparameters, removing the next-sentence pretraining objective and training with
much larger mini-batches and learning rates.`),Eh.forEach(t),ue=h(o),le=s(o,"P",{});var zh=a(le);H=i(zh,"The abstract from the paper is the following:"),zh.forEach(t),ge=h(o),de=s(o,"P",{});var qh=a(de);C=s(qh,"EM",{});var Ch=a(C);ve=i(Ch,`Language model pretraining has led to significant performance gains but careful comparison between different
approaches is challenging. Training is computationally expensive, often done on private datasets of different sizes,
and, as we will show, hyperparameter choices have significant impact on the final results. We present a replication
study of BERT pretraining (Devlin et al., 2019) that carefully measures the impact of many key hyperparameters and
training data size. We find that BERT was significantly undertrained, and can match or exceed the performance of every
model published after it. Our best model achieves state-of-the-art results on GLUE, RACE and SQuAD. These results
highlight the importance of previously overlooked design choices, and raise questions about the source of recently
reported improvements. We release our models and code.`),Ch.forEach(t),qh.forEach(t),W=h(o),ce=s(o,"P",{});var jh=a(ce);Te=i(jh,"Tips:"),jh.forEach(t),U=h(o),G=s(o,"UL",{});var Qt=a(G);re=s(Qt,"LI",{});var _l=a(re);O=i(_l,"This implementation is the same as "),pe=s(_l,"A",{href:!0});var Ph=a(pe);Q=i(Ph,"BertModel"),Ph.forEach(t),ye=i(_l,` with a tiny embeddings tweak as well as a setup
for Roberta pretrained models.`),_l.forEach(t),v=h(Qt),E=s(Qt,"LI",{});var Lh=a(E);ee=i(Lh,`RoBERTa has the same architecture as BERT, but uses a byte-level BPE as a tokenizer (same as GPT-2) and uses a
different pretraining scheme.`),Lh.forEach(t),Ee=h(Qt),me=s(Qt,"LI",{});var Vt=a(me);N=i(Vt,"RoBERTa doesn\u2019t have "),Re=s(Vt,"CODE",{});var Ah=a(Re);ze=i(Ah,"token_type_ids"),Ah.forEach(t),qe=i(Vt,`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),L=s(Vt,"CODE",{});var Oh=a(L);V=i(Oh,"tokenizer.sep_token"),Oh.forEach(t),Ce=i(Vt," (or "),Me=s(Vt,"CODE",{});var Nh=a(Me);J=i(Nh,"</s>"),Nh.forEach(t),je=i(Vt,")"),Vt.forEach(t),Pe=h(Qt),he=s(Qt,"LI",{});var ud=a(he);xe=s(ud,"A",{href:!0});var Ih=a(xe);ku=i(Ih,"CamemBERT"),Ih.forEach(t),vu=i(ud," is a wrapper around RoBERTa. Refer to this page for usage examples."),ud.forEach(t),Qt.forEach(t),lm=h(o),Jt=s(o,"P",{});var rn=a(Jt);Tu=i(rn,"This model was contributed by "),da=s(rn,"A",{href:!0,rel:!0});var Dh=a(da);yu=i(Dh,"julien-c"),Dh.forEach(t),wu=i(rn,". The original code can be found "),ca=s(rn,"A",{href:!0,rel:!0});var Sh=a(ca);$u=i(Sh,"here"),Sh.forEach(t),Fu=i(rn,"."),rn.forEach(t),dm=h(o),co=s(o,"H2",{class:!0});var bl=a(co);hn=s(bl,"A",{id:!0,class:!0,href:!0});var Wh=a(hn);Sd=s(Wh,"SPAN",{});var Uh=a(Sd);y(pa.$$.fragment,Uh),Uh.forEach(t),Wh.forEach(t),xu=h(bl),Wd=s(bl,"SPAN",{});var Bh=a(Wd);Ru=i(Bh,"RobertaConfig"),Bh.forEach(t),bl.forEach(t),cm=h(o),Ze=s(o,"DIV",{class:!0});var Tt=a(Ze);y(ha.$$.fragment,Tt),Mu=h(Tt),po=s(Tt,"P",{});var ln=a(po);Eu=i(ln,"This is the configuration class to store the configuration of a "),$l=s(ln,"A",{href:!0});var Hh=a($l);zu=i(Hh,"RobertaModel"),Hh.forEach(t),qu=i(ln," or a "),Fl=s(ln,"A",{href:!0});var Qh=a(Fl);Cu=i(Qh,"TFRobertaModel"),Qh.forEach(t),ju=i(ln,`. It is
used to instantiate a RoBERTa model according to the specified arguments, defining the model architecture.`),ln.forEach(t),Pu=h(Tt),ho=s(Tt,"P",{});var dn=a(ho);Lu=i(dn,"Configuration objects inherit from "),xl=s(dn,"A",{href:!0});var Vh=a(xl);Au=i(Vh,"PretrainedConfig"),Vh.forEach(t),Ou=i(dn,` and can be used to control the model outputs. Read the
documentation from `),Rl=s(dn,"A",{href:!0});var Jh=a(Rl);Nu=i(Jh,"PretrainedConfig"),Jh.forEach(t),Iu=i(dn," for more information."),dn.forEach(t),Du=h(Tt),mo=s(Tt,"P",{});var cn=a(mo);Su=i(cn,"The "),Ml=s(cn,"A",{href:!0});var Kh=a(Ml);Wu=i(Kh,"RobertaConfig"),Kh.forEach(t),Uu=i(cn," class directly inherits "),El=s(cn,"A",{href:!0});var Gh=a(El);Bu=i(Gh,"BertConfig"),Gh.forEach(t),Hu=i(cn,`. It reuses the same defaults. Please check the parent
class for more information.`),cn.forEach(t),Qu=h(Tt),y(mn.$$.fragment,Tt),Tt.forEach(t),pm=h(o),fo=s(o,"H2",{class:!0});var kl=a(fo);fn=s(kl,"A",{id:!0,class:!0,href:!0});var Xh=a(fn);Ud=s(Xh,"SPAN",{});var Yh=a(Ud);y(ma.$$.fragment,Yh),Yh.forEach(t),Xh.forEach(t),Vu=h(kl),Bd=s(kl,"SPAN",{});var Zh=a(Bd);Ju=i(Zh,"RobertaTokenizer"),Zh.forEach(t),kl.forEach(t),hm=h(o),we=s(o,"DIV",{class:!0});var $e=a(we);y(fa.$$.fragment,$e),Ku=h($e),Hd=s($e,"P",{});var em=a(Hd);Gu=i(em,"Constructs a RoBERTa tokenizer, derived from the GPT-2 tokenizer, using byte-level Byte-Pair-Encoding."),em.forEach(t),Xu=h($e),Qd=s($e,"P",{});var tm=a(Qd);Yu=i(tm,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),tm.forEach(t),Zu=h($e),y(un.$$.fragment,$e),eg=h($e),ua=s($e,"P",{});var vl=a(ua);tg=i(vl,"You can get around that behavior by passing "),Vd=s(vl,"CODE",{});var om=a(Vd);og=i(om,"add_prefix_space=True"),om.forEach(t),ng=i(vl,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),vl.forEach(t),sg=h($e),y(gn.$$.fragment,$e),ag=h($e),ga=s($e,"P",{});var Tl=a(ga);rg=i(Tl,"This tokenizer inherits from "),zl=s(Tl,"A",{href:!0});var nm=a(zl);ig=i(nm,"PreTrainedTokenizer"),nm.forEach(t),lg=i(Tl,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Tl.forEach(t),dg=h($e),Kt=s($e,"DIV",{class:!0});var pn=a(Kt);y(_a.$$.fragment,pn),cg=h(pn),Jd=s(pn,"P",{});var sm=a(Jd);pg=i(sm,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoBERTa sequence has the following format:`),sm.forEach(t),hg=h(pn),ba=s(pn,"UL",{});var yl=a(ba);ql=s(yl,"LI",{});var gd=a(ql);mg=i(gd,"single sequence: "),Kd=s(gd,"CODE",{});var am=a(Kd);fg=i(am,"<s> X </s>"),am.forEach(t),gd.forEach(t),ug=h(yl),Cl=s(yl,"LI",{});var _d=a(Cl);gg=i(_d,"pair of sequences: "),Gd=s(_d,"CODE",{});var rm=a(Gd);_g=i(rm,"<s> A </s></s> B </s>"),rm.forEach(t),_d.forEach(t),yl.forEach(t),pn.forEach(t),bg=h($e),_n=s($e,"DIV",{class:!0});var wl=a(_n);y(ka.$$.fragment,wl),kg=h(wl),va=s(wl,"P",{});var of=a(va);vg=i(of,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Xd=s(of,"CODE",{});var L0=a(Xd);Tg=i(L0,"prepare_for_model"),L0.forEach(t),yg=i(of," method."),of.forEach(t),wl.forEach(t),wg=h($e),bn=s($e,"DIV",{class:!0});var nf=a(bn);y(Ta.$$.fragment,nf),$g=h(nf),Yd=s(nf,"P",{});var A0=a(Yd);Fg=i(A0,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. RoBERTa does not
make use of token type ids, therefore a list of zeros is returned.`),A0.forEach(t),nf.forEach(t),xg=h($e),jl=s($e,"DIV",{class:!0});var O0=a(jl);y(ya.$$.fragment,O0),O0.forEach(t),$e.forEach(t),mm=h(o),uo=s(o,"H2",{class:!0});var sf=a(uo);kn=s(sf,"A",{id:!0,class:!0,href:!0});var N0=a(kn);Zd=s(N0,"SPAN",{});var I0=a(Zd);y(wa.$$.fragment,I0),I0.forEach(t),N0.forEach(t),Rg=h(sf),ec=s(sf,"SPAN",{});var D0=a(ec);Mg=i(D0,"RobertaTokenizerFast"),D0.forEach(t),sf.forEach(t),fm=h(o),Le=s(o,"DIV",{class:!0});var Xe=a(Le);y($a.$$.fragment,Xe),Eg=h(Xe),Fa=s(Xe,"P",{});var af=a(Fa);zg=i(af,"Construct a \u201Cfast\u201D RoBERTa tokenizer (backed by HuggingFace\u2019s "),tc=s(af,"EM",{});var S0=a(tc);qg=i(S0,"tokenizers"),S0.forEach(t),Cg=i(af,` library), derived from the GPT-2
tokenizer, using byte-level Byte-Pair-Encoding.`),af.forEach(t),jg=h(Xe),oc=s(Xe,"P",{});var W0=a(oc);Pg=i(W0,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),W0.forEach(t),Lg=h(Xe),y(vn.$$.fragment,Xe),Ag=h(Xe),xa=s(Xe,"P",{});var rf=a(xa);Og=i(rf,"You can get around that behavior by passing "),nc=s(rf,"CODE",{});var U0=a(nc);Ng=i(U0,"add_prefix_space=True"),U0.forEach(t),Ig=i(rf,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),rf.forEach(t),Dg=h(Xe),y(Tn.$$.fragment,Xe),Sg=h(Xe),Ra=s(Xe,"P",{});var lf=a(Ra);Wg=i(lf,"This tokenizer inherits from "),Pl=s(lf,"A",{href:!0});var B0=a(Pl);Ug=i(B0,"PreTrainedTokenizerFast"),B0.forEach(t),Bg=i(lf,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),lf.forEach(t),Hg=h(Xe),Ll=s(Xe,"DIV",{class:!0});var H0=a(Ll);y(Ma.$$.fragment,H0),H0.forEach(t),Xe.forEach(t),um=h(o),go=s(o,"H2",{class:!0});var df=a(go);yn=s(df,"A",{id:!0,class:!0,href:!0});var Q0=a(yn);sc=s(Q0,"SPAN",{});var V0=a(sc);y(Ea.$$.fragment,V0),V0.forEach(t),Q0.forEach(t),Qg=h(df),ac=s(df,"SPAN",{});var J0=a(ac);Vg=i(J0,"RobertaModel"),J0.forEach(t),df.forEach(t),gm=h(o),Ae=s(o,"DIV",{class:!0});var Ye=a(Ae);y(za.$$.fragment,Ye),Jg=h(Ye),rc=s(Ye,"P",{});var K0=a(rc);Kg=i(K0,"The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),K0.forEach(t),Gg=h(Ye),qa=s(Ye,"P",{});var cf=a(qa);Xg=i(cf,"This model inherits from "),Al=s(cf,"A",{href:!0});var G0=a(Al);Yg=i(G0,"PreTrainedModel"),G0.forEach(t),Zg=i(cf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cf.forEach(t),e_=h(Ye),Ca=s(Ye,"P",{});var pf=a(Ca);t_=i(pf,"This model is also a PyTorch "),ja=s(pf,"A",{href:!0,rel:!0});var X0=a(ja);o_=i(X0,"torch.nn.Module"),X0.forEach(t),n_=i(pf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pf.forEach(t),s_=h(Ye),Pa=s(Ye,"P",{});var hf=a(Pa);a_=i(hf,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),ic=s(hf,"EM",{});var Y0=a(ic);r_=i(Y0,`Attention is
all you need`),Y0.forEach(t),i_=i(hf,`_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`),hf.forEach(t),l_=h(Ye),Be=s(Ye,"P",{});var mt=a(Be);d_=i(mt,"To behave as an decoder the model needs to be initialized with the "),lc=s(mt,"CODE",{});var Z0=a(lc);c_=i(Z0,"is_decoder"),Z0.forEach(t),p_=i(mt,` argument of the configuration set
to `),dc=s(mt,"CODE",{});var e2=a(dc);h_=i(e2,"True"),e2.forEach(t),m_=i(mt,". To be used in a Seq2Seq model, the model needs to initialized with both "),cc=s(mt,"CODE",{});var t2=a(cc);f_=i(t2,"is_decoder"),t2.forEach(t),u_=i(mt,` argument and
`),pc=s(mt,"CODE",{});var o2=a(pc);g_=i(o2,"add_cross_attention"),o2.forEach(t),__=i(mt," set to "),hc=s(mt,"CODE",{});var n2=a(hc);b_=i(n2,"True"),n2.forEach(t),k_=i(mt,"; an "),mc=s(mt,"CODE",{});var s2=a(mc);v_=i(s2,"encoder_hidden_states"),s2.forEach(t),T_=i(mt," is then expected as an input to the forward pass."),mt.forEach(t),y_=h(Ye),wn=s(Ye,"P",{});var im=a(wn);w_=i(im,".. _"),fc=s(im,"EM",{});var a2=a(fc);$_=i(a2,"Attention is all you need"),a2.forEach(t),F_=i(im,": "),La=s(im,"A",{href:!0,rel:!0});var r2=a(La);x_=i(r2,"https://arxiv.org/abs/1706.03762"),r2.forEach(t),im.forEach(t),R_=h(Ye),yt=s(Ye,"DIV",{class:!0});var Hs=a(yt);y(Aa.$$.fragment,Hs),M_=h(Hs),_o=s(Hs,"P",{});var bd=a(_o);E_=i(bd,"The "),Ol=s(bd,"A",{href:!0});var i2=a(Ol);z_=i(i2,"RobertaModel"),i2.forEach(t),q_=i(bd," forward method, overrides the "),uc=s(bd,"CODE",{});var l2=a(uc);C_=i(l2,"__call__"),l2.forEach(t),j_=i(bd," special method."),bd.forEach(t),P_=h(Hs),y($n.$$.fragment,Hs),L_=h(Hs),y(Fn.$$.fragment,Hs),Hs.forEach(t),Ye.forEach(t),_m=h(o),bo=s(o,"H2",{class:!0});var mf=a(bo);xn=s(mf,"A",{id:!0,class:!0,href:!0});var d2=a(xn);gc=s(d2,"SPAN",{});var c2=a(gc);y(Oa.$$.fragment,c2),c2.forEach(t),d2.forEach(t),A_=h(mf),_c=s(mf,"SPAN",{});var p2=a(_c);O_=i(p2,"RobertaForCausalLM"),p2.forEach(t),mf.forEach(t),bm=h(o),et=s(o,"DIV",{class:!0});var Gt=a(et);y(Na.$$.fragment,Gt),N_=h(Gt),Ia=s(Gt,"P",{});var ff=a(Ia);I_=i(ff,"RoBERTa Model with a "),bc=s(ff,"CODE",{});var h2=a(bc);D_=i(h2,"language modeling"),h2.forEach(t),S_=i(ff," head on top for CLM fine-tuning."),ff.forEach(t),W_=h(Gt),Da=s(Gt,"P",{});var uf=a(Da);U_=i(uf,"This model inherits from "),Nl=s(uf,"A",{href:!0});var m2=a(Nl);B_=i(m2,"PreTrainedModel"),m2.forEach(t),H_=i(uf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uf.forEach(t),Q_=h(Gt),Sa=s(Gt,"P",{});var gf=a(Sa);V_=i(gf,"This model is also a PyTorch "),Wa=s(gf,"A",{href:!0,rel:!0});var f2=a(Wa);J_=i(f2,"torch.nn.Module"),f2.forEach(t),K_=i(gf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gf.forEach(t),G_=h(Gt),wt=s(Gt,"DIV",{class:!0});var Qs=a(wt);y(Ua.$$.fragment,Qs),X_=h(Qs),ko=s(Qs,"P",{});var kd=a(ko);Y_=i(kd,"The "),Il=s(kd,"A",{href:!0});var u2=a(Il);Z_=i(u2,"RobertaForCausalLM"),u2.forEach(t),eb=i(kd," forward method, overrides the "),kc=s(kd,"CODE",{});var g2=a(kc);tb=i(g2,"__call__"),g2.forEach(t),ob=i(kd," special method."),kd.forEach(t),nb=h(Qs),y(Rn.$$.fragment,Qs),sb=h(Qs),y(Mn.$$.fragment,Qs),Qs.forEach(t),Gt.forEach(t),km=h(o),vo=s(o,"H2",{class:!0});var _f=a(vo);En=s(_f,"A",{id:!0,class:!0,href:!0});var _2=a(En);vc=s(_2,"SPAN",{});var b2=a(vc);y(Ba.$$.fragment,b2),b2.forEach(t),_2.forEach(t),ab=h(_f),Tc=s(_f,"SPAN",{});var k2=a(Tc);rb=i(k2,"RobertaForMaskedLM"),k2.forEach(t),_f.forEach(t),vm=h(o),tt=s(o,"DIV",{class:!0});var Xt=a(tt);y(Ha.$$.fragment,Xt),ib=h(Xt),Qa=s(Xt,"P",{});var bf=a(Qa);lb=i(bf,"RoBERTa Model with a "),yc=s(bf,"CODE",{});var v2=a(yc);db=i(v2,"language modeling"),v2.forEach(t),cb=i(bf," head on top."),bf.forEach(t),pb=h(Xt),Va=s(Xt,"P",{});var kf=a(Va);hb=i(kf,"This model inherits from "),Dl=s(kf,"A",{href:!0});var T2=a(Dl);mb=i(T2,"PreTrainedModel"),T2.forEach(t),fb=i(kf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kf.forEach(t),ub=h(Xt),Ja=s(Xt,"P",{});var vf=a(Ja);gb=i(vf,"This model is also a PyTorch "),Ka=s(vf,"A",{href:!0,rel:!0});var y2=a(Ka);_b=i(y2,"torch.nn.Module"),y2.forEach(t),bb=i(vf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vf.forEach(t),kb=h(Xt),rt=s(Xt,"DIV",{class:!0});var Yt=a(rt);y(Ga.$$.fragment,Yt),vb=h(Yt),To=s(Yt,"P",{});var vd=a(To);Tb=i(vd,"The "),Sl=s(vd,"A",{href:!0});var w2=a(Sl);yb=i(w2,"RobertaForMaskedLM"),w2.forEach(t),wb=i(vd," forward method, overrides the "),wc=s(vd,"CODE",{});var $2=a(wc);$b=i($2,"__call__"),$2.forEach(t),Fb=i(vd," special method."),vd.forEach(t),xb=h(Yt),y(zn.$$.fragment,Yt),Rb=h(Yt),y(qn.$$.fragment,Yt),Mb=h(Yt),y(Cn.$$.fragment,Yt),Yt.forEach(t),Xt.forEach(t),Tm=h(o),yo=s(o,"H2",{class:!0});var Tf=a(yo);jn=s(Tf,"A",{id:!0,class:!0,href:!0});var F2=a(jn);$c=s(F2,"SPAN",{});var x2=a($c);y(Xa.$$.fragment,x2),x2.forEach(t),F2.forEach(t),Eb=h(Tf),Fc=s(Tf,"SPAN",{});var R2=a(Fc);zb=i(R2,"RobertaForSequenceClassification"),R2.forEach(t),Tf.forEach(t),ym=h(o),ot=s(o,"DIV",{class:!0});var Zt=a(ot);y(Ya.$$.fragment,Zt),qb=h(Zt),xc=s(Zt,"P",{});var M2=a(xc);Cb=i(M2,`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),M2.forEach(t),jb=h(Zt),Za=s(Zt,"P",{});var yf=a(Za);Pb=i(yf,"This model inherits from "),Wl=s(yf,"A",{href:!0});var E2=a(Wl);Lb=i(E2,"PreTrainedModel"),E2.forEach(t),Ab=i(yf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yf.forEach(t),Ob=h(Zt),er=s(Zt,"P",{});var wf=a(er);Nb=i(wf,"This model is also a PyTorch "),tr=s(wf,"A",{href:!0,rel:!0});var z2=a(tr);Ib=i(z2,"torch.nn.Module"),z2.forEach(t),Db=i(wf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wf.forEach(t),Sb=h(Zt),Ue=s(Zt,"DIV",{class:!0});var ft=a(Ue);y(or.$$.fragment,ft),Wb=h(ft),wo=s(ft,"P",{});var Td=a(wo);Ub=i(Td,"The "),Ul=s(Td,"A",{href:!0});var q2=a(Ul);Bb=i(q2,"RobertaForSequenceClassification"),q2.forEach(t),Hb=i(Td," forward method, overrides the "),Rc=s(Td,"CODE",{});var C2=a(Rc);Qb=i(C2,"__call__"),C2.forEach(t),Vb=i(Td," special method."),Td.forEach(t),Jb=h(ft),y(Pn.$$.fragment,ft),Kb=h(ft),y(Ln.$$.fragment,ft),Gb=h(ft),y(An.$$.fragment,ft),Xb=h(ft),y(On.$$.fragment,ft),Yb=h(ft),y(Nn.$$.fragment,ft),ft.forEach(t),Zt.forEach(t),wm=h(o),$o=s(o,"H2",{class:!0});var $f=a($o);In=s($f,"A",{id:!0,class:!0,href:!0});var j2=a(In);Mc=s(j2,"SPAN",{});var P2=a(Mc);y(nr.$$.fragment,P2),P2.forEach(t),j2.forEach(t),Zb=h($f),Ec=s($f,"SPAN",{});var L2=a(Ec);ek=i(L2,"RobertaForMultipleChoice"),L2.forEach(t),$f.forEach(t),$m=h(o),nt=s(o,"DIV",{class:!0});var eo=a(nt);y(sr.$$.fragment,eo),tk=h(eo),zc=s(eo,"P",{});var A2=a(zc);ok=i(A2,`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),A2.forEach(t),nk=h(eo),ar=s(eo,"P",{});var Ff=a(ar);sk=i(Ff,"This model inherits from "),Bl=s(Ff,"A",{href:!0});var O2=a(Bl);ak=i(O2,"PreTrainedModel"),O2.forEach(t),rk=i(Ff,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ff.forEach(t),ik=h(eo),rr=s(eo,"P",{});var xf=a(rr);lk=i(xf,"This model is also a PyTorch "),ir=s(xf,"A",{href:!0,rel:!0});var N2=a(ir);dk=i(N2,"torch.nn.Module"),N2.forEach(t),ck=i(xf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xf.forEach(t),pk=h(eo),$t=s(eo,"DIV",{class:!0});var Vs=a($t);y(lr.$$.fragment,Vs),hk=h(Vs),Fo=s(Vs,"P",{});var yd=a(Fo);mk=i(yd,"The "),Hl=s(yd,"A",{href:!0});var I2=a(Hl);fk=i(I2,"RobertaForMultipleChoice"),I2.forEach(t),uk=i(yd," forward method, overrides the "),qc=s(yd,"CODE",{});var D2=a(qc);gk=i(D2,"__call__"),D2.forEach(t),_k=i(yd," special method."),yd.forEach(t),bk=h(Vs),y(Dn.$$.fragment,Vs),kk=h(Vs),y(Sn.$$.fragment,Vs),Vs.forEach(t),eo.forEach(t),Fm=h(o),xo=s(o,"H2",{class:!0});var Rf=a(xo);Wn=s(Rf,"A",{id:!0,class:!0,href:!0});var S2=a(Wn);Cc=s(S2,"SPAN",{});var W2=a(Cc);y(dr.$$.fragment,W2),W2.forEach(t),S2.forEach(t),vk=h(Rf),jc=s(Rf,"SPAN",{});var U2=a(jc);Tk=i(U2,"RobertaForTokenClassification"),U2.forEach(t),Rf.forEach(t),xm=h(o),st=s(o,"DIV",{class:!0});var to=a(st);y(cr.$$.fragment,to),yk=h(to),Pc=s(to,"P",{});var B2=a(Pc);wk=i(B2,`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),B2.forEach(t),$k=h(to),pr=s(to,"P",{});var Mf=a(pr);Fk=i(Mf,"This model inherits from "),Ql=s(Mf,"A",{href:!0});var H2=a(Ql);xk=i(H2,"PreTrainedModel"),H2.forEach(t),Rk=i(Mf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mf.forEach(t),Mk=h(to),hr=s(to,"P",{});var Ef=a(hr);Ek=i(Ef,"This model is also a PyTorch "),mr=s(Ef,"A",{href:!0,rel:!0});var Q2=a(mr);zk=i(Q2,"torch.nn.Module"),Q2.forEach(t),qk=i(Ef,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ef.forEach(t),Ck=h(to),it=s(to,"DIV",{class:!0});var oo=a(it);y(fr.$$.fragment,oo),jk=h(oo),Ro=s(oo,"P",{});var wd=a(Ro);Pk=i(wd,"The "),Vl=s(wd,"A",{href:!0});var V2=a(Vl);Lk=i(V2,"RobertaForTokenClassification"),V2.forEach(t),Ak=i(wd," forward method, overrides the "),Lc=s(wd,"CODE",{});var J2=a(Lc);Ok=i(J2,"__call__"),J2.forEach(t),Nk=i(wd," special method."),wd.forEach(t),Ik=h(oo),y(Un.$$.fragment,oo),Dk=h(oo),y(Bn.$$.fragment,oo),Sk=h(oo),y(Hn.$$.fragment,oo),oo.forEach(t),to.forEach(t),Rm=h(o),Mo=s(o,"H2",{class:!0});var zf=a(Mo);Qn=s(zf,"A",{id:!0,class:!0,href:!0});var K2=a(Qn);Ac=s(K2,"SPAN",{});var G2=a(Ac);y(ur.$$.fragment,G2),G2.forEach(t),K2.forEach(t),Wk=h(zf),Oc=s(zf,"SPAN",{});var X2=a(Oc);Uk=i(X2,"RobertaForQuestionAnswering"),X2.forEach(t),zf.forEach(t),Mm=h(o),at=s(o,"DIV",{class:!0});var no=a(at);y(gr.$$.fragment,no),Bk=h(no),Eo=s(no,"P",{});var $d=a(Eo);Hk=i($d,`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Nc=s($d,"CODE",{});var Y2=a(Nc);Qk=i(Y2,"span start logits"),Y2.forEach(t),Vk=i($d," and "),Ic=s($d,"CODE",{});var Z2=a(Ic);Jk=i(Z2,"span end logits"),Z2.forEach(t),Kk=i($d,")."),$d.forEach(t),Gk=h(no),_r=s(no,"P",{});var qf=a(_r);Xk=i(qf,"This model inherits from "),Jl=s(qf,"A",{href:!0});var eF=a(Jl);Yk=i(eF,"PreTrainedModel"),eF.forEach(t),Zk=i(qf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qf.forEach(t),ev=h(no),br=s(no,"P",{});var Cf=a(br);tv=i(Cf,"This model is also a PyTorch "),kr=s(Cf,"A",{href:!0,rel:!0});var tF=a(kr);ov=i(tF,"torch.nn.Module"),tF.forEach(t),nv=i(Cf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cf.forEach(t),sv=h(no),lt=s(no,"DIV",{class:!0});var so=a(lt);y(vr.$$.fragment,so),av=h(so),zo=s(so,"P",{});var Fd=a(zo);rv=i(Fd,"The "),Kl=s(Fd,"A",{href:!0});var oF=a(Kl);iv=i(oF,"RobertaForQuestionAnswering"),oF.forEach(t),lv=i(Fd," forward method, overrides the "),Dc=s(Fd,"CODE",{});var nF=a(Dc);dv=i(nF,"__call__"),nF.forEach(t),cv=i(Fd," special method."),Fd.forEach(t),pv=h(so),y(Vn.$$.fragment,so),hv=h(so),y(Jn.$$.fragment,so),mv=h(so),y(Kn.$$.fragment,so),so.forEach(t),no.forEach(t),Em=h(o),qo=s(o,"H2",{class:!0});var jf=a(qo);Gn=s(jf,"A",{id:!0,class:!0,href:!0});var sF=a(Gn);Sc=s(sF,"SPAN",{});var aF=a(Sc);y(Tr.$$.fragment,aF),aF.forEach(t),sF.forEach(t),fv=h(jf),Wc=s(jf,"SPAN",{});var rF=a(Wc);uv=i(rF,"TFRobertaModel"),rF.forEach(t),jf.forEach(t),zm=h(o),He=s(o,"DIV",{class:!0});var Pt=a(He);y(yr.$$.fragment,Pt),gv=h(Pt),Uc=s(Pt,"P",{});var iF=a(Uc);_v=i(iF,"The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),iF.forEach(t),bv=h(Pt),wr=s(Pt,"P",{});var Pf=a(wr);kv=i(Pf,"This model inherits from "),Gl=s(Pf,"A",{href:!0});var lF=a(Gl);vv=i(lF,"TFPreTrainedModel"),lF.forEach(t),Tv=i(Pf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pf.forEach(t),yv=h(Pt),$r=s(Pt,"P",{});var Lf=a($r);wv=i(Lf,"This model is also a "),Fr=s(Lf,"A",{href:!0,rel:!0});var dF=a(Fr);$v=i(dF,"tf.keras.Model"),dF.forEach(t),Fv=i(Lf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Lf.forEach(t),xv=h(Pt),y(Xn.$$.fragment,Pt),Rv=h(Pt),Ft=s(Pt,"DIV",{class:!0});var Js=a(Ft);y(xr.$$.fragment,Js),Mv=h(Js),Co=s(Js,"P",{});var xd=a(Co);Ev=i(xd,"The "),Xl=s(xd,"A",{href:!0});var cF=a(Xl);zv=i(cF,"TFRobertaModel"),cF.forEach(t),qv=i(xd," forward method, overrides the "),Bc=s(xd,"CODE",{});var pF=a(Bc);Cv=i(pF,"__call__"),pF.forEach(t),jv=i(xd," special method."),xd.forEach(t),Pv=h(Js),y(Yn.$$.fragment,Js),Lv=h(Js),y(Zn.$$.fragment,Js),Js.forEach(t),Pt.forEach(t),qm=h(o),jo=s(o,"H2",{class:!0});var Af=a(jo);es=s(Af,"A",{id:!0,class:!0,href:!0});var hF=a(es);Hc=s(hF,"SPAN",{});var mF=a(Hc);y(Rr.$$.fragment,mF),mF.forEach(t),hF.forEach(t),Av=h(Af),Qc=s(Af,"SPAN",{});var fF=a(Qc);Ov=i(fF,"TFRobertaForCausalLM"),fF.forEach(t),Af.forEach(t),Cm=h(o),Po=s(o,"DIV",{class:!0});var Of=a(Po);y(Mr.$$.fragment,Of),Nv=h(Of),xt=s(Of,"DIV",{class:!0});var Ks=a(xt);y(Er.$$.fragment,Ks),Iv=h(Ks),Lo=s(Ks,"P",{});var Rd=a(Lo);Dv=i(Rd,"The "),Yl=s(Rd,"A",{href:!0});var uF=a(Yl);Sv=i(uF,"TFRobertaForCausalLM"),uF.forEach(t),Wv=i(Rd," forward method, overrides the "),Vc=s(Rd,"CODE",{});var gF=a(Vc);Uv=i(gF,"__call__"),gF.forEach(t),Bv=i(Rd," special method."),Rd.forEach(t),Hv=h(Ks),y(ts.$$.fragment,Ks),Qv=h(Ks),y(os.$$.fragment,Ks),Ks.forEach(t),Of.forEach(t),jm=h(o),Ao=s(o,"H2",{class:!0});var Nf=a(Ao);ns=s(Nf,"A",{id:!0,class:!0,href:!0});var _F=a(ns);Jc=s(_F,"SPAN",{});var bF=a(Jc);y(zr.$$.fragment,bF),bF.forEach(t),_F.forEach(t),Vv=h(Nf),Kc=s(Nf,"SPAN",{});var kF=a(Kc);Jv=i(kF,"TFRobertaForMaskedLM"),kF.forEach(t),Nf.forEach(t),Pm=h(o),Qe=s(o,"DIV",{class:!0});var Lt=a(Qe);y(qr.$$.fragment,Lt),Kv=h(Lt),Cr=s(Lt,"P",{});var If=a(Cr);Gv=i(If,"RoBERTa Model with a "),Gc=s(If,"CODE",{});var vF=a(Gc);Xv=i(vF,"language modeling"),vF.forEach(t),Yv=i(If," head on top."),If.forEach(t),Zv=h(Lt),jr=s(Lt,"P",{});var Df=a(jr);eT=i(Df,"This model inherits from "),Zl=s(Df,"A",{href:!0});var TF=a(Zl);tT=i(TF,"TFPreTrainedModel"),TF.forEach(t),oT=i(Df,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Df.forEach(t),nT=h(Lt),Pr=s(Lt,"P",{});var Sf=a(Pr);sT=i(Sf,"This model is also a "),Lr=s(Sf,"A",{href:!0,rel:!0});var yF=a(Lr);aT=i(yF,"tf.keras.Model"),yF.forEach(t),rT=i(Sf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sf.forEach(t),iT=h(Lt),y(ss.$$.fragment,Lt),lT=h(Lt),dt=s(Lt,"DIV",{class:!0});var ao=a(dt);y(Ar.$$.fragment,ao),dT=h(ao),Oo=s(ao,"P",{});var Md=a(Oo);cT=i(Md,"The "),ed=s(Md,"A",{href:!0});var wF=a(ed);pT=i(wF,"TFRobertaForMaskedLM"),wF.forEach(t),hT=i(Md," forward method, overrides the "),Xc=s(Md,"CODE",{});var $F=a(Xc);mT=i($F,"__call__"),$F.forEach(t),fT=i(Md," special method."),Md.forEach(t),uT=h(ao),y(as.$$.fragment,ao),gT=h(ao),y(rs.$$.fragment,ao),_T=h(ao),y(is.$$.fragment,ao),ao.forEach(t),Lt.forEach(t),Lm=h(o),No=s(o,"H2",{class:!0});var Wf=a(No);ls=s(Wf,"A",{id:!0,class:!0,href:!0});var FF=a(ls);Yc=s(FF,"SPAN",{});var xF=a(Yc);y(Or.$$.fragment,xF),xF.forEach(t),FF.forEach(t),bT=h(Wf),Zc=s(Wf,"SPAN",{});var RF=a(Zc);kT=i(RF,"TFRobertaForSequenceClassification"),RF.forEach(t),Wf.forEach(t),Am=h(o),Ve=s(o,"DIV",{class:!0});var At=a(Ve);y(Nr.$$.fragment,At),vT=h(At),ep=s(At,"P",{});var MF=a(ep);TT=i(MF,`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),MF.forEach(t),yT=h(At),Ir=s(At,"P",{});var Uf=a(Ir);wT=i(Uf,"This model inherits from "),td=s(Uf,"A",{href:!0});var EF=a(td);$T=i(EF,"TFPreTrainedModel"),EF.forEach(t),FT=i(Uf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uf.forEach(t),xT=h(At),Dr=s(At,"P",{});var Bf=a(Dr);RT=i(Bf,"This model is also a "),Sr=s(Bf,"A",{href:!0,rel:!0});var zF=a(Sr);MT=i(zF,"tf.keras.Model"),zF.forEach(t),ET=i(Bf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bf.forEach(t),zT=h(At),y(ds.$$.fragment,At),qT=h(At),ct=s(At,"DIV",{class:!0});var ro=a(ct);y(Wr.$$.fragment,ro),CT=h(ro),Io=s(ro,"P",{});var Ed=a(Io);jT=i(Ed,"The "),od=s(Ed,"A",{href:!0});var qF=a(od);PT=i(qF,"TFRobertaForSequenceClassification"),qF.forEach(t),LT=i(Ed," forward method, overrides the "),tp=s(Ed,"CODE",{});var CF=a(tp);AT=i(CF,"__call__"),CF.forEach(t),OT=i(Ed," special method."),Ed.forEach(t),NT=h(ro),y(cs.$$.fragment,ro),IT=h(ro),y(ps.$$.fragment,ro),DT=h(ro),y(hs.$$.fragment,ro),ro.forEach(t),At.forEach(t),Om=h(o),Do=s(o,"H2",{class:!0});var Hf=a(Do);ms=s(Hf,"A",{id:!0,class:!0,href:!0});var jF=a(ms);op=s(jF,"SPAN",{});var PF=a(op);y(Ur.$$.fragment,PF),PF.forEach(t),jF.forEach(t),ST=h(Hf),np=s(Hf,"SPAN",{});var LF=a(np);WT=i(LF,"TFRobertaForMultipleChoice"),LF.forEach(t),Hf.forEach(t),Nm=h(o),Je=s(o,"DIV",{class:!0});var Ot=a(Je);y(Br.$$.fragment,Ot),UT=h(Ot),sp=s(Ot,"P",{});var AF=a(sp);BT=i(AF,`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),AF.forEach(t),HT=h(Ot),Hr=s(Ot,"P",{});var Qf=a(Hr);QT=i(Qf,"This model inherits from "),nd=s(Qf,"A",{href:!0});var OF=a(nd);VT=i(OF,"TFPreTrainedModel"),OF.forEach(t),JT=i(Qf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qf.forEach(t),KT=h(Ot),Qr=s(Ot,"P",{});var Vf=a(Qr);GT=i(Vf,"This model is also a "),Vr=s(Vf,"A",{href:!0,rel:!0});var NF=a(Vr);XT=i(NF,"tf.keras.Model"),NF.forEach(t),YT=i(Vf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vf.forEach(t),ZT=h(Ot),y(fs.$$.fragment,Ot),ey=h(Ot),Rt=s(Ot,"DIV",{class:!0});var Gs=a(Rt);y(Jr.$$.fragment,Gs),ty=h(Gs),So=s(Gs,"P",{});var zd=a(So);oy=i(zd,"The "),sd=s(zd,"A",{href:!0});var IF=a(sd);ny=i(IF,"TFRobertaForMultipleChoice"),IF.forEach(t),sy=i(zd," forward method, overrides the "),ap=s(zd,"CODE",{});var DF=a(ap);ay=i(DF,"__call__"),DF.forEach(t),ry=i(zd," special method."),zd.forEach(t),iy=h(Gs),y(us.$$.fragment,Gs),ly=h(Gs),y(gs.$$.fragment,Gs),Gs.forEach(t),Ot.forEach(t),Im=h(o),Wo=s(o,"H2",{class:!0});var Jf=a(Wo);_s=s(Jf,"A",{id:!0,class:!0,href:!0});var SF=a(_s);rp=s(SF,"SPAN",{});var WF=a(rp);y(Kr.$$.fragment,WF),WF.forEach(t),SF.forEach(t),dy=h(Jf),ip=s(Jf,"SPAN",{});var UF=a(ip);cy=i(UF,"TFRobertaForTokenClassification"),UF.forEach(t),Jf.forEach(t),Dm=h(o),Ke=s(o,"DIV",{class:!0});var Nt=a(Ke);y(Gr.$$.fragment,Nt),py=h(Nt),lp=s(Nt,"P",{});var BF=a(lp);hy=i(BF,`RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),BF.forEach(t),my=h(Nt),Xr=s(Nt,"P",{});var Kf=a(Xr);fy=i(Kf,"This model inherits from "),ad=s(Kf,"A",{href:!0});var HF=a(ad);uy=i(HF,"TFPreTrainedModel"),HF.forEach(t),gy=i(Kf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kf.forEach(t),_y=h(Nt),Yr=s(Nt,"P",{});var Gf=a(Yr);by=i(Gf,"This model is also a "),Zr=s(Gf,"A",{href:!0,rel:!0});var QF=a(Zr);ky=i(QF,"tf.keras.Model"),QF.forEach(t),vy=i(Gf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gf.forEach(t),Ty=h(Nt),y(bs.$$.fragment,Nt),yy=h(Nt),pt=s(Nt,"DIV",{class:!0});var io=a(pt);y(ei.$$.fragment,io),wy=h(io),Uo=s(io,"P",{});var qd=a(Uo);$y=i(qd,"The "),rd=s(qd,"A",{href:!0});var VF=a(rd);Fy=i(VF,"TFRobertaForTokenClassification"),VF.forEach(t),xy=i(qd," forward method, overrides the "),dp=s(qd,"CODE",{});var JF=a(dp);Ry=i(JF,"__call__"),JF.forEach(t),My=i(qd," special method."),qd.forEach(t),Ey=h(io),y(ks.$$.fragment,io),zy=h(io),y(vs.$$.fragment,io),qy=h(io),y(Ts.$$.fragment,io),io.forEach(t),Nt.forEach(t),Sm=h(o),Bo=s(o,"H2",{class:!0});var Xf=a(Bo);ys=s(Xf,"A",{id:!0,class:!0,href:!0});var KF=a(ys);cp=s(KF,"SPAN",{});var GF=a(cp);y(ti.$$.fragment,GF),GF.forEach(t),KF.forEach(t),Cy=h(Xf),pp=s(Xf,"SPAN",{});var XF=a(pp);jy=i(XF,"TFRobertaForQuestionAnswering"),XF.forEach(t),Xf.forEach(t),Wm=h(o),Ge=s(o,"DIV",{class:!0});var It=a(Ge);y(oi.$$.fragment,It),Py=h(It),Ho=s(It,"P",{});var Cd=a(Ho);Ly=i(Cd,`RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),hp=s(Cd,"CODE",{});var YF=a(hp);Ay=i(YF,"span start logits"),YF.forEach(t),Oy=i(Cd," and "),mp=s(Cd,"CODE",{});var ZF=a(mp);Ny=i(ZF,"span end logits"),ZF.forEach(t),Iy=i(Cd,")."),Cd.forEach(t),Dy=h(It),ni=s(It,"P",{});var Yf=a(ni);Sy=i(Yf,"This model inherits from "),id=s(Yf,"A",{href:!0});var e4=a(id);Wy=i(e4,"TFPreTrainedModel"),e4.forEach(t),Uy=i(Yf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yf.forEach(t),By=h(It),si=s(It,"P",{});var Zf=a(si);Hy=i(Zf,"This model is also a "),ai=s(Zf,"A",{href:!0,rel:!0});var t4=a(ai);Qy=i(t4,"tf.keras.Model"),t4.forEach(t),Vy=i(Zf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zf.forEach(t),Jy=h(It),y(ws.$$.fragment,It),Ky=h(It),ht=s(It,"DIV",{class:!0});var lo=a(ht);y(ri.$$.fragment,lo),Gy=h(lo),Qo=s(lo,"P",{});var jd=a(Qo);Xy=i(jd,"The "),ld=s(jd,"A",{href:!0});var o4=a(ld);Yy=i(o4,"TFRobertaForQuestionAnswering"),o4.forEach(t),Zy=i(jd," forward method, overrides the "),fp=s(jd,"CODE",{});var n4=a(fp);ew=i(n4,"__call__"),n4.forEach(t),tw=i(jd," special method."),jd.forEach(t),ow=h(lo),y($s.$$.fragment,lo),nw=h(lo),y(Fs.$$.fragment,lo),sw=h(lo),y(xs.$$.fragment,lo),lo.forEach(t),It.forEach(t),Um=h(o),Vo=s(o,"H2",{class:!0});var eu=a(Vo);Rs=s(eu,"A",{id:!0,class:!0,href:!0});var s4=a(Rs);up=s(s4,"SPAN",{});var a4=a(up);y(ii.$$.fragment,a4),a4.forEach(t),s4.forEach(t),aw=h(eu),gp=s(eu,"SPAN",{});var r4=a(gp);rw=i(r4,"FlaxRobertaModel"),r4.forEach(t),eu.forEach(t),Bm=h(o),Oe=s(o,"DIV",{class:!0});var ut=a(Oe);y(li.$$.fragment,ut),iw=h(ut),_p=s(ut,"P",{});var i4=a(_p);lw=i(i4,"The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),i4.forEach(t),dw=h(ut),di=s(ut,"P",{});var tu=a(di);cw=i(tu,"This model inherits from "),dd=s(tu,"A",{href:!0});var l4=a(dd);pw=i(l4,"FlaxPreTrainedModel"),l4.forEach(t),hw=i(tu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),tu.forEach(t),mw=h(ut),ci=s(ut,"P",{});var ou=a(ci);fw=i(ou,"This model is also a Flax Linen "),pi=s(ou,"A",{href:!0,rel:!0});var d4=a(pi);uw=i(d4,"flax.linen.Module"),d4.forEach(t),gw=i(ou,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ou.forEach(t),_w=h(ut),bp=s(ut,"P",{});var c4=a(bp);bw=i(c4,"Finally, this model supports inherent JAX features such as:"),c4.forEach(t),kw=h(ut),Dt=s(ut,"UL",{});var Xs=a(Dt);kp=s(Xs,"LI",{});var p4=a(kp);hi=s(p4,"A",{href:!0,rel:!0});var h4=a(hi);vw=i(h4,"Just-In-Time (JIT) compilation"),h4.forEach(t),p4.forEach(t),Tw=h(Xs),vp=s(Xs,"LI",{});var m4=a(vp);mi=s(m4,"A",{href:!0,rel:!0});var f4=a(mi);yw=i(f4,"Automatic Differentiation"),f4.forEach(t),m4.forEach(t),ww=h(Xs),Tp=s(Xs,"LI",{});var u4=a(Tp);fi=s(u4,"A",{href:!0,rel:!0});var g4=a(fi);$w=i(g4,"Vectorization"),g4.forEach(t),u4.forEach(t),Fw=h(Xs),yp=s(Xs,"LI",{});var _4=a(yp);ui=s(_4,"A",{href:!0,rel:!0});var b4=a(ui);xw=i(b4,"Parallelization"),b4.forEach(t),_4.forEach(t),Xs.forEach(t),Rw=h(ut),Mt=s(ut,"DIV",{class:!0});var Ys=a(Mt);y(gi.$$.fragment,Ys),Mw=h(Ys),Jo=s(Ys,"P",{});var Pd=a(Jo);Ew=i(Pd,"The "),wp=s(Pd,"CODE",{});var k4=a(wp);zw=i(k4,"FlaxRobertaPreTrainedModel"),k4.forEach(t),qw=i(Pd," forward method, overrides the "),$p=s(Pd,"CODE",{});var v4=a($p);Cw=i(v4,"__call__"),v4.forEach(t),jw=i(Pd," special method."),Pd.forEach(t),Pw=h(Ys),y(Ms.$$.fragment,Ys),Lw=h(Ys),y(Es.$$.fragment,Ys),Ys.forEach(t),ut.forEach(t),Hm=h(o),Ko=s(o,"H2",{class:!0});var nu=a(Ko);zs=s(nu,"A",{id:!0,class:!0,href:!0});var T4=a(zs);Fp=s(T4,"SPAN",{});var y4=a(Fp);y(_i.$$.fragment,y4),y4.forEach(t),T4.forEach(t),Aw=h(nu),xp=s(nu,"SPAN",{});var w4=a(xp);Ow=i(w4,"FlaxRobertaForMaskedLM"),w4.forEach(t),nu.forEach(t),Qm=h(o),Ne=s(o,"DIV",{class:!0});var gt=a(Ne);y(bi.$$.fragment,gt),Nw=h(gt),ki=s(gt,"P",{});var su=a(ki);Iw=i(su,"RoBERTa Model with a "),Rp=s(su,"CODE",{});var $4=a(Rp);Dw=i($4,"language modeling"),$4.forEach(t),Sw=i(su," head on top."),su.forEach(t),Ww=h(gt),vi=s(gt,"P",{});var au=a(vi);Uw=i(au,"This model inherits from "),cd=s(au,"A",{href:!0});var F4=a(cd);Bw=i(F4,"FlaxPreTrainedModel"),F4.forEach(t),Hw=i(au,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),au.forEach(t),Qw=h(gt),Ti=s(gt,"P",{});var ru=a(Ti);Vw=i(ru,"This model is also a Flax Linen "),yi=s(ru,"A",{href:!0,rel:!0});var x4=a(yi);Jw=i(x4,"flax.linen.Module"),x4.forEach(t),Kw=i(ru,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ru.forEach(t),Gw=h(gt),Mp=s(gt,"P",{});var R4=a(Mp);Xw=i(R4,"Finally, this model supports inherent JAX features such as:"),R4.forEach(t),Yw=h(gt),St=s(gt,"UL",{});var Zs=a(St);Ep=s(Zs,"LI",{});var M4=a(Ep);wi=s(M4,"A",{href:!0,rel:!0});var E4=a(wi);Zw=i(E4,"Just-In-Time (JIT) compilation"),E4.forEach(t),M4.forEach(t),e1=h(Zs),zp=s(Zs,"LI",{});var z4=a(zp);$i=s(z4,"A",{href:!0,rel:!0});var q4=a($i);t1=i(q4,"Automatic Differentiation"),q4.forEach(t),z4.forEach(t),o1=h(Zs),qp=s(Zs,"LI",{});var C4=a(qp);Fi=s(C4,"A",{href:!0,rel:!0});var j4=a(Fi);n1=i(j4,"Vectorization"),j4.forEach(t),C4.forEach(t),s1=h(Zs),Cp=s(Zs,"LI",{});var P4=a(Cp);xi=s(P4,"A",{href:!0,rel:!0});var L4=a(xi);a1=i(L4,"Parallelization"),L4.forEach(t),P4.forEach(t),Zs.forEach(t),r1=h(gt),Et=s(gt,"DIV",{class:!0});var ea=a(Et);y(Ri.$$.fragment,ea),i1=h(ea),Go=s(ea,"P",{});var Ld=a(Go);l1=i(Ld,"The "),jp=s(Ld,"CODE",{});var A4=a(jp);d1=i(A4,"FlaxRobertaPreTrainedModel"),A4.forEach(t),c1=i(Ld," forward method, overrides the "),Pp=s(Ld,"CODE",{});var O4=a(Pp);p1=i(O4,"__call__"),O4.forEach(t),h1=i(Ld," special method."),Ld.forEach(t),m1=h(ea),y(qs.$$.fragment,ea),f1=h(ea),y(Cs.$$.fragment,ea),ea.forEach(t),gt.forEach(t),Vm=h(o),Xo=s(o,"H2",{class:!0});var iu=a(Xo);js=s(iu,"A",{id:!0,class:!0,href:!0});var N4=a(js);Lp=s(N4,"SPAN",{});var I4=a(Lp);y(Mi.$$.fragment,I4),I4.forEach(t),N4.forEach(t),u1=h(iu),Ap=s(iu,"SPAN",{});var D4=a(Ap);g1=i(D4,"FlaxRobertaForSequenceClassification"),D4.forEach(t),iu.forEach(t),Jm=h(o),Ie=s(o,"DIV",{class:!0});var _t=a(Ie);y(Ei.$$.fragment,_t),_1=h(_t),Op=s(_t,"P",{});var S4=a(Op);b1=i(S4,`Roberta Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),S4.forEach(t),k1=h(_t),zi=s(_t,"P",{});var lu=a(zi);v1=i(lu,"This model inherits from "),pd=s(lu,"A",{href:!0});var W4=a(pd);T1=i(W4,"FlaxPreTrainedModel"),W4.forEach(t),y1=i(lu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),lu.forEach(t),w1=h(_t),qi=s(_t,"P",{});var du=a(qi);$1=i(du,"This model is also a Flax Linen "),Ci=s(du,"A",{href:!0,rel:!0});var U4=a(Ci);F1=i(U4,"flax.linen.Module"),U4.forEach(t),x1=i(du,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),du.forEach(t),R1=h(_t),Np=s(_t,"P",{});var B4=a(Np);M1=i(B4,"Finally, this model supports inherent JAX features such as:"),B4.forEach(t),E1=h(_t),Wt=s(_t,"UL",{});var ta=a(Wt);Ip=s(ta,"LI",{});var H4=a(Ip);ji=s(H4,"A",{href:!0,rel:!0});var Q4=a(ji);z1=i(Q4,"Just-In-Time (JIT) compilation"),Q4.forEach(t),H4.forEach(t),q1=h(ta),Dp=s(ta,"LI",{});var V4=a(Dp);Pi=s(V4,"A",{href:!0,rel:!0});var J4=a(Pi);C1=i(J4,"Automatic Differentiation"),J4.forEach(t),V4.forEach(t),j1=h(ta),Sp=s(ta,"LI",{});var K4=a(Sp);Li=s(K4,"A",{href:!0,rel:!0});var G4=a(Li);P1=i(G4,"Vectorization"),G4.forEach(t),K4.forEach(t),L1=h(ta),Wp=s(ta,"LI",{});var X4=a(Wp);Ai=s(X4,"A",{href:!0,rel:!0});var Y4=a(Ai);A1=i(Y4,"Parallelization"),Y4.forEach(t),X4.forEach(t),ta.forEach(t),O1=h(_t),zt=s(_t,"DIV",{class:!0});var oa=a(zt);y(Oi.$$.fragment,oa),N1=h(oa),Yo=s(oa,"P",{});var Ad=a(Yo);I1=i(Ad,"The "),Up=s(Ad,"CODE",{});var Z4=a(Up);D1=i(Z4,"FlaxRobertaPreTrainedModel"),Z4.forEach(t),S1=i(Ad," forward method, overrides the "),Bp=s(Ad,"CODE",{});var ex=a(Bp);W1=i(ex,"__call__"),ex.forEach(t),U1=i(Ad," special method."),Ad.forEach(t),B1=h(oa),y(Ps.$$.fragment,oa),H1=h(oa),y(Ls.$$.fragment,oa),oa.forEach(t),_t.forEach(t),Km=h(o),Zo=s(o,"H2",{class:!0});var cu=a(Zo);As=s(cu,"A",{id:!0,class:!0,href:!0});var tx=a(As);Hp=s(tx,"SPAN",{});var ox=a(Hp);y(Ni.$$.fragment,ox),ox.forEach(t),tx.forEach(t),Q1=h(cu),Qp=s(cu,"SPAN",{});var nx=a(Qp);V1=i(nx,"FlaxRobertaForMultipleChoice"),nx.forEach(t),cu.forEach(t),Gm=h(o),De=s(o,"DIV",{class:!0});var bt=a(De);y(Ii.$$.fragment,bt),J1=h(bt),Vp=s(bt,"P",{});var sx=a(Vp);K1=i(sx,`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),sx.forEach(t),G1=h(bt),Di=s(bt,"P",{});var pu=a(Di);X1=i(pu,"This model inherits from "),hd=s(pu,"A",{href:!0});var ax=a(hd);Y1=i(ax,"FlaxPreTrainedModel"),ax.forEach(t),Z1=i(pu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),pu.forEach(t),e$=h(bt),Si=s(bt,"P",{});var hu=a(Si);t$=i(hu,"This model is also a Flax Linen "),Wi=s(hu,"A",{href:!0,rel:!0});var rx=a(Wi);o$=i(rx,"flax.linen.Module"),rx.forEach(t),n$=i(hu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),hu.forEach(t),s$=h(bt),Jp=s(bt,"P",{});var ix=a(Jp);a$=i(ix,"Finally, this model supports inherent JAX features such as:"),ix.forEach(t),r$=h(bt),Ut=s(bt,"UL",{});var na=a(Ut);Kp=s(na,"LI",{});var lx=a(Kp);Ui=s(lx,"A",{href:!0,rel:!0});var dx=a(Ui);i$=i(dx,"Just-In-Time (JIT) compilation"),dx.forEach(t),lx.forEach(t),l$=h(na),Gp=s(na,"LI",{});var cx=a(Gp);Bi=s(cx,"A",{href:!0,rel:!0});var px=a(Bi);d$=i(px,"Automatic Differentiation"),px.forEach(t),cx.forEach(t),c$=h(na),Xp=s(na,"LI",{});var hx=a(Xp);Hi=s(hx,"A",{href:!0,rel:!0});var mx=a(Hi);p$=i(mx,"Vectorization"),mx.forEach(t),hx.forEach(t),h$=h(na),Yp=s(na,"LI",{});var fx=a(Yp);Qi=s(fx,"A",{href:!0,rel:!0});var ux=a(Qi);m$=i(ux,"Parallelization"),ux.forEach(t),fx.forEach(t),na.forEach(t),f$=h(bt),qt=s(bt,"DIV",{class:!0});var sa=a(qt);y(Vi.$$.fragment,sa),u$=h(sa),en=s(sa,"P",{});var Od=a(en);g$=i(Od,"The "),Zp=s(Od,"CODE",{});var gx=a(Zp);_$=i(gx,"FlaxRobertaPreTrainedModel"),gx.forEach(t),b$=i(Od," forward method, overrides the "),eh=s(Od,"CODE",{});var _x=a(eh);k$=i(_x,"__call__"),_x.forEach(t),v$=i(Od," special method."),Od.forEach(t),T$=h(sa),y(Os.$$.fragment,sa),y$=h(sa),y(Ns.$$.fragment,sa),sa.forEach(t),bt.forEach(t),Xm=h(o),tn=s(o,"H2",{class:!0});var mu=a(tn);Is=s(mu,"A",{id:!0,class:!0,href:!0});var bx=a(Is);th=s(bx,"SPAN",{});var kx=a(th);y(Ji.$$.fragment,kx),kx.forEach(t),bx.forEach(t),w$=h(mu),oh=s(mu,"SPAN",{});var vx=a(oh);$$=i(vx,"FlaxRobertaForTokenClassification"),vx.forEach(t),mu.forEach(t),Ym=h(o),Se=s(o,"DIV",{class:!0});var kt=a(Se);y(Ki.$$.fragment,kt),F$=h(kt),nh=s(kt,"P",{});var Tx=a(nh);x$=i(Tx,`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Tx.forEach(t),R$=h(kt),Gi=s(kt,"P",{});var fu=a(Gi);M$=i(fu,"This model inherits from "),md=s(fu,"A",{href:!0});var yx=a(md);E$=i(yx,"FlaxPreTrainedModel"),yx.forEach(t),z$=i(fu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),fu.forEach(t),q$=h(kt),Xi=s(kt,"P",{});var uu=a(Xi);C$=i(uu,"This model is also a Flax Linen "),Yi=s(uu,"A",{href:!0,rel:!0});var wx=a(Yi);j$=i(wx,"flax.linen.Module"),wx.forEach(t),P$=i(uu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),uu.forEach(t),L$=h(kt),sh=s(kt,"P",{});var $x=a(sh);A$=i($x,"Finally, this model supports inherent JAX features such as:"),$x.forEach(t),O$=h(kt),Bt=s(kt,"UL",{});var aa=a(Bt);ah=s(aa,"LI",{});var Fx=a(ah);Zi=s(Fx,"A",{href:!0,rel:!0});var xx=a(Zi);N$=i(xx,"Just-In-Time (JIT) compilation"),xx.forEach(t),Fx.forEach(t),I$=h(aa),rh=s(aa,"LI",{});var Rx=a(rh);el=s(Rx,"A",{href:!0,rel:!0});var Mx=a(el);D$=i(Mx,"Automatic Differentiation"),Mx.forEach(t),Rx.forEach(t),S$=h(aa),ih=s(aa,"LI",{});var Ex=a(ih);tl=s(Ex,"A",{href:!0,rel:!0});var zx=a(tl);W$=i(zx,"Vectorization"),zx.forEach(t),Ex.forEach(t),U$=h(aa),lh=s(aa,"LI",{});var qx=a(lh);ol=s(qx,"A",{href:!0,rel:!0});var Cx=a(ol);B$=i(Cx,"Parallelization"),Cx.forEach(t),qx.forEach(t),aa.forEach(t),H$=h(kt),Ct=s(kt,"DIV",{class:!0});var ra=a(Ct);y(nl.$$.fragment,ra),Q$=h(ra),on=s(ra,"P",{});var Nd=a(on);V$=i(Nd,"The "),dh=s(Nd,"CODE",{});var jx=a(dh);J$=i(jx,"FlaxRobertaPreTrainedModel"),jx.forEach(t),K$=i(Nd," forward method, overrides the "),ch=s(Nd,"CODE",{});var Px=a(ch);G$=i(Px,"__call__"),Px.forEach(t),X$=i(Nd," special method."),Nd.forEach(t),Y$=h(ra),y(Ds.$$.fragment,ra),Z$=h(ra),y(Ss.$$.fragment,ra),ra.forEach(t),kt.forEach(t),Zm=h(o),nn=s(o,"H2",{class:!0});var gu=a(nn);Ws=s(gu,"A",{id:!0,class:!0,href:!0});var Lx=a(Ws);ph=s(Lx,"SPAN",{});var Ax=a(ph);y(sl.$$.fragment,Ax),Ax.forEach(t),Lx.forEach(t),e0=h(gu),hh=s(gu,"SPAN",{});var Ox=a(hh);t0=i(Ox,"FlaxRobertaForQuestionAnswering"),Ox.forEach(t),gu.forEach(t),ef=h(o),We=s(o,"DIV",{class:!0});var vt=a(We);y(al.$$.fragment,vt),o0=h(vt),sn=s(vt,"P",{});var Id=a(sn);n0=i(Id,`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),mh=s(Id,"CODE",{});var Nx=a(mh);s0=i(Nx,"span start logits"),Nx.forEach(t),a0=i(Id," and "),fh=s(Id,"CODE",{});var Ix=a(fh);r0=i(Ix,"span end logits"),Ix.forEach(t),i0=i(Id,")."),Id.forEach(t),l0=h(vt),rl=s(vt,"P",{});var _u=a(rl);d0=i(_u,"This model inherits from "),fd=s(_u,"A",{href:!0});var Dx=a(fd);c0=i(Dx,"FlaxPreTrainedModel"),Dx.forEach(t),p0=i(_u,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),_u.forEach(t),h0=h(vt),il=s(vt,"P",{});var bu=a(il);m0=i(bu,"This model is also a Flax Linen "),ll=s(bu,"A",{href:!0,rel:!0});var Sx=a(ll);f0=i(Sx,"flax.linen.Module"),Sx.forEach(t),u0=i(bu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),bu.forEach(t),g0=h(vt),uh=s(vt,"P",{});var Wx=a(uh);_0=i(Wx,"Finally, this model supports inherent JAX features such as:"),Wx.forEach(t),b0=h(vt),Ht=s(vt,"UL",{});var ia=a(Ht);gh=s(ia,"LI",{});var Ux=a(gh);dl=s(Ux,"A",{href:!0,rel:!0});var Bx=a(dl);k0=i(Bx,"Just-In-Time (JIT) compilation"),Bx.forEach(t),Ux.forEach(t),v0=h(ia),_h=s(ia,"LI",{});var Hx=a(_h);cl=s(Hx,"A",{href:!0,rel:!0});var Qx=a(cl);T0=i(Qx,"Automatic Differentiation"),Qx.forEach(t),Hx.forEach(t),y0=h(ia),bh=s(ia,"LI",{});var Vx=a(bh);pl=s(Vx,"A",{href:!0,rel:!0});var Jx=a(pl);w0=i(Jx,"Vectorization"),Jx.forEach(t),Vx.forEach(t),$0=h(ia),kh=s(ia,"LI",{});var Kx=a(kh);hl=s(Kx,"A",{href:!0,rel:!0});var Gx=a(hl);F0=i(Gx,"Parallelization"),Gx.forEach(t),Kx.forEach(t),ia.forEach(t),x0=h(vt),jt=s(vt,"DIV",{class:!0});var la=a(jt);y(ml.$$.fragment,la),R0=h(la),an=s(la,"P",{});var Dd=a(an);M0=i(Dd,"The "),vh=s(Dd,"CODE",{});var Xx=a(vh);E0=i(Xx,"FlaxRobertaPreTrainedModel"),Xx.forEach(t),z0=i(Dd," forward method, overrides the "),Th=s(Dd,"CODE",{});var Yx=a(Th);q0=i(Yx,"__call__"),Yx.forEach(t),C0=i(Dd," special method."),Dd.forEach(t),j0=h(la),y(Us.$$.fragment,la),P0=h(la),y(Bs.$$.fragment,la),la.forEach(t),vt.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(hM)),u(m,"id","roberta"),u(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(m,"href","#roberta"),u(c,"class","relative group"),u(X,"id","overview"),u(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(X,"href","#overview"),u(z,"class","relative group"),u(ae,"href","https://arxiv.org/abs/1907.11692"),u(ae,"rel","nofollow"),u(pe,"href","/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertModel"),u(xe,"href","camembert"),u(da,"href","https://huggingface.co/julien-c"),u(da,"rel","nofollow"),u(ca,"href","https://github.com/pytorch/fairseq/tree/master/examples/roberta"),u(ca,"rel","nofollow"),u(hn,"id","transformers.RobertaConfig"),u(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(hn,"href","#transformers.RobertaConfig"),u(co,"class","relative group"),u($l,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaModel"),u(Fl,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.TFRobertaModel"),u(xl,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),u(Rl,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),u(Ml,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"),u(El,"href","/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertConfig"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fn,"id","transformers.RobertaTokenizer"),u(fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(fn,"href","#transformers.RobertaTokenizer"),u(fo,"class","relative group"),u(zl,"href","/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(jl,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(kn,"id","transformers.RobertaTokenizerFast"),u(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(kn,"href","#transformers.RobertaTokenizerFast"),u(uo,"class","relative group"),u(Pl,"href","/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(Ll,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(yn,"id","transformers.RobertaModel"),u(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(yn,"href","#transformers.RobertaModel"),u(go,"class","relative group"),u(Al,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),u(ja,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ja,"rel","nofollow"),u(La,"href","https://arxiv.org/abs/1706.03762"),u(La,"rel","nofollow"),u(Ol,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaModel"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xn,"id","transformers.RobertaForCausalLM"),u(xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(xn,"href","#transformers.RobertaForCausalLM"),u(bo,"class","relative group"),u(Nl,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),u(Wa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Wa,"rel","nofollow"),u(Il,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaForCausalLM"),u(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(En,"id","transformers.RobertaForMaskedLM"),u(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(En,"href","#transformers.RobertaForMaskedLM"),u(vo,"class","relative group"),u(Dl,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),u(Ka,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ka,"rel","nofollow"),u(Sl,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaForMaskedLM"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(jn,"id","transformers.RobertaForSequenceClassification"),u(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(jn,"href","#transformers.RobertaForSequenceClassification"),u(yo,"class","relative group"),u(Wl,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),u(tr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(tr,"rel","nofollow"),u(Ul,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaForSequenceClassification"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(In,"id","transformers.RobertaForMultipleChoice"),u(In,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(In,"href","#transformers.RobertaForMultipleChoice"),u($o,"class","relative group"),u(Bl,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),u(ir,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ir,"rel","nofollow"),u(Hl,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaForMultipleChoice"),u($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Wn,"id","transformers.RobertaForTokenClassification"),u(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Wn,"href","#transformers.RobertaForTokenClassification"),u(xo,"class","relative group"),u(Ql,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),u(mr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(mr,"rel","nofollow"),u(Vl,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaForTokenClassification"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qn,"id","transformers.RobertaForQuestionAnswering"),u(Qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Qn,"href","#transformers.RobertaForQuestionAnswering"),u(Mo,"class","relative group"),u(Jl,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),u(kr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(kr,"rel","nofollow"),u(Kl,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaForQuestionAnswering"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gn,"id","transformers.TFRobertaModel"),u(Gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Gn,"href","#transformers.TFRobertaModel"),u(qo,"class","relative group"),u(Gl,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(Fr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Fr,"rel","nofollow"),u(Xl,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.TFRobertaModel"),u(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(es,"id","transformers.TFRobertaForCausalLM"),u(es,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(es,"href","#transformers.TFRobertaForCausalLM"),u(jo,"class","relative group"),u(Yl,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.TFRobertaForCausalLM"),u(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ns,"id","transformers.TFRobertaForMaskedLM"),u(ns,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ns,"href","#transformers.TFRobertaForMaskedLM"),u(Ao,"class","relative group"),u(Zl,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(Lr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Lr,"rel","nofollow"),u(ed,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.TFRobertaForMaskedLM"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ls,"id","transformers.TFRobertaForSequenceClassification"),u(ls,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ls,"href","#transformers.TFRobertaForSequenceClassification"),u(No,"class","relative group"),u(td,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(Sr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Sr,"rel","nofollow"),u(od,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.TFRobertaForSequenceClassification"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ms,"id","transformers.TFRobertaForMultipleChoice"),u(ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ms,"href","#transformers.TFRobertaForMultipleChoice"),u(Do,"class","relative group"),u(nd,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(Vr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Vr,"rel","nofollow"),u(sd,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.TFRobertaForMultipleChoice"),u(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_s,"id","transformers.TFRobertaForTokenClassification"),u(_s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_s,"href","#transformers.TFRobertaForTokenClassification"),u(Wo,"class","relative group"),u(ad,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(Zr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Zr,"rel","nofollow"),u(rd,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.TFRobertaForTokenClassification"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ys,"id","transformers.TFRobertaForQuestionAnswering"),u(ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ys,"href","#transformers.TFRobertaForQuestionAnswering"),u(Bo,"class","relative group"),u(id,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(ai,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ai,"rel","nofollow"),u(ld,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.TFRobertaForQuestionAnswering"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Rs,"id","transformers.FlaxRobertaModel"),u(Rs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Rs,"href","#transformers.FlaxRobertaModel"),u(Vo,"class","relative group"),u(dd,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(pi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(pi,"rel","nofollow"),u(hi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(hi,"rel","nofollow"),u(mi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(mi,"rel","nofollow"),u(fi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(fi,"rel","nofollow"),u(ui,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(ui,"rel","nofollow"),u(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(zs,"id","transformers.FlaxRobertaForMaskedLM"),u(zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(zs,"href","#transformers.FlaxRobertaForMaskedLM"),u(Ko,"class","relative group"),u(cd,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(yi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(yi,"rel","nofollow"),u(wi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(wi,"rel","nofollow"),u($i,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u($i,"rel","nofollow"),u(Fi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Fi,"rel","nofollow"),u(xi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(xi,"rel","nofollow"),u(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(js,"id","transformers.FlaxRobertaForSequenceClassification"),u(js,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(js,"href","#transformers.FlaxRobertaForSequenceClassification"),u(Xo,"class","relative group"),u(pd,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ci,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Ci,"rel","nofollow"),u(ji,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ji,"rel","nofollow"),u(Pi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Pi,"rel","nofollow"),u(Li,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Li,"rel","nofollow"),u(Ai,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ai,"rel","nofollow"),u(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(As,"id","transformers.FlaxRobertaForMultipleChoice"),u(As,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(As,"href","#transformers.FlaxRobertaForMultipleChoice"),u(Zo,"class","relative group"),u(hd,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Wi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Wi,"rel","nofollow"),u(Ui,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ui,"rel","nofollow"),u(Bi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Bi,"rel","nofollow"),u(Hi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Hi,"rel","nofollow"),u(Qi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Qi,"rel","nofollow"),u(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Is,"id","transformers.FlaxRobertaForTokenClassification"),u(Is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Is,"href","#transformers.FlaxRobertaForTokenClassification"),u(tn,"class","relative group"),u(md,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Yi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Yi,"rel","nofollow"),u(Zi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Zi,"rel","nofollow"),u(el,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(el,"rel","nofollow"),u(tl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(tl,"rel","nofollow"),u(ol,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(ol,"rel","nofollow"),u(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ws,"id","transformers.FlaxRobertaForQuestionAnswering"),u(Ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ws,"href","#transformers.FlaxRobertaForQuestionAnswering"),u(nn,"class","relative group"),u(fd,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(ll,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(ll,"rel","nofollow"),u(dl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(dl,"rel","nofollow"),u(cl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(cl,"rel","nofollow"),u(pl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(pl,"rel","nofollow"),u(hl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(hl,"rel","nofollow"),u(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,b){e(document.head,d),k(o,g,b),k(o,c,b),e(c,m),e(m,_),w(l,_,null),e(c,f),e(c,M),e(M,Y),k(o,I,b),k(o,z,b),e(z,X),e(X,D),w(se,D,null),e(z,be),e(z,S),e(S,ke),k(o,fe,b),k(o,K,b),e(K,A),e(K,ae),e(ae,Z),e(K,q),k(o,j,b),k(o,ie,b),e(ie,B),k(o,ue,b),k(o,le,b),e(le,H),k(o,ge,b),k(o,de,b),e(de,C),e(C,ve),k(o,W,b),k(o,ce,b),e(ce,Te),k(o,U,b),k(o,G,b),e(G,re),e(re,O),e(re,pe),e(pe,Q),e(re,ye),e(G,v),e(G,E),e(E,ee),e(G,Ee),e(G,me),e(me,N),e(me,Re),e(Re,ze),e(me,qe),e(me,L),e(L,V),e(me,Ce),e(me,Me),e(Me,J),e(me,je),e(G,Pe),e(G,he),e(he,xe),e(xe,ku),e(he,vu),k(o,lm,b),k(o,Jt,b),e(Jt,Tu),e(Jt,da),e(da,yu),e(Jt,wu),e(Jt,ca),e(ca,$u),e(Jt,Fu),k(o,dm,b),k(o,co,b),e(co,hn),e(hn,Sd),w(pa,Sd,null),e(co,xu),e(co,Wd),e(Wd,Ru),k(o,cm,b),k(o,Ze,b),w(ha,Ze,null),e(Ze,Mu),e(Ze,po),e(po,Eu),e(po,$l),e($l,zu),e(po,qu),e(po,Fl),e(Fl,Cu),e(po,ju),e(Ze,Pu),e(Ze,ho),e(ho,Lu),e(ho,xl),e(xl,Au),e(ho,Ou),e(ho,Rl),e(Rl,Nu),e(ho,Iu),e(Ze,Du),e(Ze,mo),e(mo,Su),e(mo,Ml),e(Ml,Wu),e(mo,Uu),e(mo,El),e(El,Bu),e(mo,Hu),e(Ze,Qu),w(mn,Ze,null),k(o,pm,b),k(o,fo,b),e(fo,fn),e(fn,Ud),w(ma,Ud,null),e(fo,Vu),e(fo,Bd),e(Bd,Ju),k(o,hm,b),k(o,we,b),w(fa,we,null),e(we,Ku),e(we,Hd),e(Hd,Gu),e(we,Xu),e(we,Qd),e(Qd,Yu),e(we,Zu),w(un,we,null),e(we,eg),e(we,ua),e(ua,tg),e(ua,Vd),e(Vd,og),e(ua,ng),e(we,sg),w(gn,we,null),e(we,ag),e(we,ga),e(ga,rg),e(ga,zl),e(zl,ig),e(ga,lg),e(we,dg),e(we,Kt),w(_a,Kt,null),e(Kt,cg),e(Kt,Jd),e(Jd,pg),e(Kt,hg),e(Kt,ba),e(ba,ql),e(ql,mg),e(ql,Kd),e(Kd,fg),e(ba,ug),e(ba,Cl),e(Cl,gg),e(Cl,Gd),e(Gd,_g),e(we,bg),e(we,_n),w(ka,_n,null),e(_n,kg),e(_n,va),e(va,vg),e(va,Xd),e(Xd,Tg),e(va,yg),e(we,wg),e(we,bn),w(Ta,bn,null),e(bn,$g),e(bn,Yd),e(Yd,Fg),e(we,xg),e(we,jl),w(ya,jl,null),k(o,mm,b),k(o,uo,b),e(uo,kn),e(kn,Zd),w(wa,Zd,null),e(uo,Rg),e(uo,ec),e(ec,Mg),k(o,fm,b),k(o,Le,b),w($a,Le,null),e(Le,Eg),e(Le,Fa),e(Fa,zg),e(Fa,tc),e(tc,qg),e(Fa,Cg),e(Le,jg),e(Le,oc),e(oc,Pg),e(Le,Lg),w(vn,Le,null),e(Le,Ag),e(Le,xa),e(xa,Og),e(xa,nc),e(nc,Ng),e(xa,Ig),e(Le,Dg),w(Tn,Le,null),e(Le,Sg),e(Le,Ra),e(Ra,Wg),e(Ra,Pl),e(Pl,Ug),e(Ra,Bg),e(Le,Hg),e(Le,Ll),w(Ma,Ll,null),k(o,um,b),k(o,go,b),e(go,yn),e(yn,sc),w(Ea,sc,null),e(go,Qg),e(go,ac),e(ac,Vg),k(o,gm,b),k(o,Ae,b),w(za,Ae,null),e(Ae,Jg),e(Ae,rc),e(rc,Kg),e(Ae,Gg),e(Ae,qa),e(qa,Xg),e(qa,Al),e(Al,Yg),e(qa,Zg),e(Ae,e_),e(Ae,Ca),e(Ca,t_),e(Ca,ja),e(ja,o_),e(Ca,n_),e(Ae,s_),e(Ae,Pa),e(Pa,a_),e(Pa,ic),e(ic,r_),e(Pa,i_),e(Ae,l_),e(Ae,Be),e(Be,d_),e(Be,lc),e(lc,c_),e(Be,p_),e(Be,dc),e(dc,h_),e(Be,m_),e(Be,cc),e(cc,f_),e(Be,u_),e(Be,pc),e(pc,g_),e(Be,__),e(Be,hc),e(hc,b_),e(Be,k_),e(Be,mc),e(mc,v_),e(Be,T_),e(Ae,y_),e(Ae,wn),e(wn,w_),e(wn,fc),e(fc,$_),e(wn,F_),e(wn,La),e(La,x_),e(Ae,R_),e(Ae,yt),w(Aa,yt,null),e(yt,M_),e(yt,_o),e(_o,E_),e(_o,Ol),e(Ol,z_),e(_o,q_),e(_o,uc),e(uc,C_),e(_o,j_),e(yt,P_),w($n,yt,null),e(yt,L_),w(Fn,yt,null),k(o,_m,b),k(o,bo,b),e(bo,xn),e(xn,gc),w(Oa,gc,null),e(bo,A_),e(bo,_c),e(_c,O_),k(o,bm,b),k(o,et,b),w(Na,et,null),e(et,N_),e(et,Ia),e(Ia,I_),e(Ia,bc),e(bc,D_),e(Ia,S_),e(et,W_),e(et,Da),e(Da,U_),e(Da,Nl),e(Nl,B_),e(Da,H_),e(et,Q_),e(et,Sa),e(Sa,V_),e(Sa,Wa),e(Wa,J_),e(Sa,K_),e(et,G_),e(et,wt),w(Ua,wt,null),e(wt,X_),e(wt,ko),e(ko,Y_),e(ko,Il),e(Il,Z_),e(ko,eb),e(ko,kc),e(kc,tb),e(ko,ob),e(wt,nb),w(Rn,wt,null),e(wt,sb),w(Mn,wt,null),k(o,km,b),k(o,vo,b),e(vo,En),e(En,vc),w(Ba,vc,null),e(vo,ab),e(vo,Tc),e(Tc,rb),k(o,vm,b),k(o,tt,b),w(Ha,tt,null),e(tt,ib),e(tt,Qa),e(Qa,lb),e(Qa,yc),e(yc,db),e(Qa,cb),e(tt,pb),e(tt,Va),e(Va,hb),e(Va,Dl),e(Dl,mb),e(Va,fb),e(tt,ub),e(tt,Ja),e(Ja,gb),e(Ja,Ka),e(Ka,_b),e(Ja,bb),e(tt,kb),e(tt,rt),w(Ga,rt,null),e(rt,vb),e(rt,To),e(To,Tb),e(To,Sl),e(Sl,yb),e(To,wb),e(To,wc),e(wc,$b),e(To,Fb),e(rt,xb),w(zn,rt,null),e(rt,Rb),w(qn,rt,null),e(rt,Mb),w(Cn,rt,null),k(o,Tm,b),k(o,yo,b),e(yo,jn),e(jn,$c),w(Xa,$c,null),e(yo,Eb),e(yo,Fc),e(Fc,zb),k(o,ym,b),k(o,ot,b),w(Ya,ot,null),e(ot,qb),e(ot,xc),e(xc,Cb),e(ot,jb),e(ot,Za),e(Za,Pb),e(Za,Wl),e(Wl,Lb),e(Za,Ab),e(ot,Ob),e(ot,er),e(er,Nb),e(er,tr),e(tr,Ib),e(er,Db),e(ot,Sb),e(ot,Ue),w(or,Ue,null),e(Ue,Wb),e(Ue,wo),e(wo,Ub),e(wo,Ul),e(Ul,Bb),e(wo,Hb),e(wo,Rc),e(Rc,Qb),e(wo,Vb),e(Ue,Jb),w(Pn,Ue,null),e(Ue,Kb),w(Ln,Ue,null),e(Ue,Gb),w(An,Ue,null),e(Ue,Xb),w(On,Ue,null),e(Ue,Yb),w(Nn,Ue,null),k(o,wm,b),k(o,$o,b),e($o,In),e(In,Mc),w(nr,Mc,null),e($o,Zb),e($o,Ec),e(Ec,ek),k(o,$m,b),k(o,nt,b),w(sr,nt,null),e(nt,tk),e(nt,zc),e(zc,ok),e(nt,nk),e(nt,ar),e(ar,sk),e(ar,Bl),e(Bl,ak),e(ar,rk),e(nt,ik),e(nt,rr),e(rr,lk),e(rr,ir),e(ir,dk),e(rr,ck),e(nt,pk),e(nt,$t),w(lr,$t,null),e($t,hk),e($t,Fo),e(Fo,mk),e(Fo,Hl),e(Hl,fk),e(Fo,uk),e(Fo,qc),e(qc,gk),e(Fo,_k),e($t,bk),w(Dn,$t,null),e($t,kk),w(Sn,$t,null),k(o,Fm,b),k(o,xo,b),e(xo,Wn),e(Wn,Cc),w(dr,Cc,null),e(xo,vk),e(xo,jc),e(jc,Tk),k(o,xm,b),k(o,st,b),w(cr,st,null),e(st,yk),e(st,Pc),e(Pc,wk),e(st,$k),e(st,pr),e(pr,Fk),e(pr,Ql),e(Ql,xk),e(pr,Rk),e(st,Mk),e(st,hr),e(hr,Ek),e(hr,mr),e(mr,zk),e(hr,qk),e(st,Ck),e(st,it),w(fr,it,null),e(it,jk),e(it,Ro),e(Ro,Pk),e(Ro,Vl),e(Vl,Lk),e(Ro,Ak),e(Ro,Lc),e(Lc,Ok),e(Ro,Nk),e(it,Ik),w(Un,it,null),e(it,Dk),w(Bn,it,null),e(it,Sk),w(Hn,it,null),k(o,Rm,b),k(o,Mo,b),e(Mo,Qn),e(Qn,Ac),w(ur,Ac,null),e(Mo,Wk),e(Mo,Oc),e(Oc,Uk),k(o,Mm,b),k(o,at,b),w(gr,at,null),e(at,Bk),e(at,Eo),e(Eo,Hk),e(Eo,Nc),e(Nc,Qk),e(Eo,Vk),e(Eo,Ic),e(Ic,Jk),e(Eo,Kk),e(at,Gk),e(at,_r),e(_r,Xk),e(_r,Jl),e(Jl,Yk),e(_r,Zk),e(at,ev),e(at,br),e(br,tv),e(br,kr),e(kr,ov),e(br,nv),e(at,sv),e(at,lt),w(vr,lt,null),e(lt,av),e(lt,zo),e(zo,rv),e(zo,Kl),e(Kl,iv),e(zo,lv),e(zo,Dc),e(Dc,dv),e(zo,cv),e(lt,pv),w(Vn,lt,null),e(lt,hv),w(Jn,lt,null),e(lt,mv),w(Kn,lt,null),k(o,Em,b),k(o,qo,b),e(qo,Gn),e(Gn,Sc),w(Tr,Sc,null),e(qo,fv),e(qo,Wc),e(Wc,uv),k(o,zm,b),k(o,He,b),w(yr,He,null),e(He,gv),e(He,Uc),e(Uc,_v),e(He,bv),e(He,wr),e(wr,kv),e(wr,Gl),e(Gl,vv),e(wr,Tv),e(He,yv),e(He,$r),e($r,wv),e($r,Fr),e(Fr,$v),e($r,Fv),e(He,xv),w(Xn,He,null),e(He,Rv),e(He,Ft),w(xr,Ft,null),e(Ft,Mv),e(Ft,Co),e(Co,Ev),e(Co,Xl),e(Xl,zv),e(Co,qv),e(Co,Bc),e(Bc,Cv),e(Co,jv),e(Ft,Pv),w(Yn,Ft,null),e(Ft,Lv),w(Zn,Ft,null),k(o,qm,b),k(o,jo,b),e(jo,es),e(es,Hc),w(Rr,Hc,null),e(jo,Av),e(jo,Qc),e(Qc,Ov),k(o,Cm,b),k(o,Po,b),w(Mr,Po,null),e(Po,Nv),e(Po,xt),w(Er,xt,null),e(xt,Iv),e(xt,Lo),e(Lo,Dv),e(Lo,Yl),e(Yl,Sv),e(Lo,Wv),e(Lo,Vc),e(Vc,Uv),e(Lo,Bv),e(xt,Hv),w(ts,xt,null),e(xt,Qv),w(os,xt,null),k(o,jm,b),k(o,Ao,b),e(Ao,ns),e(ns,Jc),w(zr,Jc,null),e(Ao,Vv),e(Ao,Kc),e(Kc,Jv),k(o,Pm,b),k(o,Qe,b),w(qr,Qe,null),e(Qe,Kv),e(Qe,Cr),e(Cr,Gv),e(Cr,Gc),e(Gc,Xv),e(Cr,Yv),e(Qe,Zv),e(Qe,jr),e(jr,eT),e(jr,Zl),e(Zl,tT),e(jr,oT),e(Qe,nT),e(Qe,Pr),e(Pr,sT),e(Pr,Lr),e(Lr,aT),e(Pr,rT),e(Qe,iT),w(ss,Qe,null),e(Qe,lT),e(Qe,dt),w(Ar,dt,null),e(dt,dT),e(dt,Oo),e(Oo,cT),e(Oo,ed),e(ed,pT),e(Oo,hT),e(Oo,Xc),e(Xc,mT),e(Oo,fT),e(dt,uT),w(as,dt,null),e(dt,gT),w(rs,dt,null),e(dt,_T),w(is,dt,null),k(o,Lm,b),k(o,No,b),e(No,ls),e(ls,Yc),w(Or,Yc,null),e(No,bT),e(No,Zc),e(Zc,kT),k(o,Am,b),k(o,Ve,b),w(Nr,Ve,null),e(Ve,vT),e(Ve,ep),e(ep,TT),e(Ve,yT),e(Ve,Ir),e(Ir,wT),e(Ir,td),e(td,$T),e(Ir,FT),e(Ve,xT),e(Ve,Dr),e(Dr,RT),e(Dr,Sr),e(Sr,MT),e(Dr,ET),e(Ve,zT),w(ds,Ve,null),e(Ve,qT),e(Ve,ct),w(Wr,ct,null),e(ct,CT),e(ct,Io),e(Io,jT),e(Io,od),e(od,PT),e(Io,LT),e(Io,tp),e(tp,AT),e(Io,OT),e(ct,NT),w(cs,ct,null),e(ct,IT),w(ps,ct,null),e(ct,DT),w(hs,ct,null),k(o,Om,b),k(o,Do,b),e(Do,ms),e(ms,op),w(Ur,op,null),e(Do,ST),e(Do,np),e(np,WT),k(o,Nm,b),k(o,Je,b),w(Br,Je,null),e(Je,UT),e(Je,sp),e(sp,BT),e(Je,HT),e(Je,Hr),e(Hr,QT),e(Hr,nd),e(nd,VT),e(Hr,JT),e(Je,KT),e(Je,Qr),e(Qr,GT),e(Qr,Vr),e(Vr,XT),e(Qr,YT),e(Je,ZT),w(fs,Je,null),e(Je,ey),e(Je,Rt),w(Jr,Rt,null),e(Rt,ty),e(Rt,So),e(So,oy),e(So,sd),e(sd,ny),e(So,sy),e(So,ap),e(ap,ay),e(So,ry),e(Rt,iy),w(us,Rt,null),e(Rt,ly),w(gs,Rt,null),k(o,Im,b),k(o,Wo,b),e(Wo,_s),e(_s,rp),w(Kr,rp,null),e(Wo,dy),e(Wo,ip),e(ip,cy),k(o,Dm,b),k(o,Ke,b),w(Gr,Ke,null),e(Ke,py),e(Ke,lp),e(lp,hy),e(Ke,my),e(Ke,Xr),e(Xr,fy),e(Xr,ad),e(ad,uy),e(Xr,gy),e(Ke,_y),e(Ke,Yr),e(Yr,by),e(Yr,Zr),e(Zr,ky),e(Yr,vy),e(Ke,Ty),w(bs,Ke,null),e(Ke,yy),e(Ke,pt),w(ei,pt,null),e(pt,wy),e(pt,Uo),e(Uo,$y),e(Uo,rd),e(rd,Fy),e(Uo,xy),e(Uo,dp),e(dp,Ry),e(Uo,My),e(pt,Ey),w(ks,pt,null),e(pt,zy),w(vs,pt,null),e(pt,qy),w(Ts,pt,null),k(o,Sm,b),k(o,Bo,b),e(Bo,ys),e(ys,cp),w(ti,cp,null),e(Bo,Cy),e(Bo,pp),e(pp,jy),k(o,Wm,b),k(o,Ge,b),w(oi,Ge,null),e(Ge,Py),e(Ge,Ho),e(Ho,Ly),e(Ho,hp),e(hp,Ay),e(Ho,Oy),e(Ho,mp),e(mp,Ny),e(Ho,Iy),e(Ge,Dy),e(Ge,ni),e(ni,Sy),e(ni,id),e(id,Wy),e(ni,Uy),e(Ge,By),e(Ge,si),e(si,Hy),e(si,ai),e(ai,Qy),e(si,Vy),e(Ge,Jy),w(ws,Ge,null),e(Ge,Ky),e(Ge,ht),w(ri,ht,null),e(ht,Gy),e(ht,Qo),e(Qo,Xy),e(Qo,ld),e(ld,Yy),e(Qo,Zy),e(Qo,fp),e(fp,ew),e(Qo,tw),e(ht,ow),w($s,ht,null),e(ht,nw),w(Fs,ht,null),e(ht,sw),w(xs,ht,null),k(o,Um,b),k(o,Vo,b),e(Vo,Rs),e(Rs,up),w(ii,up,null),e(Vo,aw),e(Vo,gp),e(gp,rw),k(o,Bm,b),k(o,Oe,b),w(li,Oe,null),e(Oe,iw),e(Oe,_p),e(_p,lw),e(Oe,dw),e(Oe,di),e(di,cw),e(di,dd),e(dd,pw),e(di,hw),e(Oe,mw),e(Oe,ci),e(ci,fw),e(ci,pi),e(pi,uw),e(ci,gw),e(Oe,_w),e(Oe,bp),e(bp,bw),e(Oe,kw),e(Oe,Dt),e(Dt,kp),e(kp,hi),e(hi,vw),e(Dt,Tw),e(Dt,vp),e(vp,mi),e(mi,yw),e(Dt,ww),e(Dt,Tp),e(Tp,fi),e(fi,$w),e(Dt,Fw),e(Dt,yp),e(yp,ui),e(ui,xw),e(Oe,Rw),e(Oe,Mt),w(gi,Mt,null),e(Mt,Mw),e(Mt,Jo),e(Jo,Ew),e(Jo,wp),e(wp,zw),e(Jo,qw),e(Jo,$p),e($p,Cw),e(Jo,jw),e(Mt,Pw),w(Ms,Mt,null),e(Mt,Lw),w(Es,Mt,null),k(o,Hm,b),k(o,Ko,b),e(Ko,zs),e(zs,Fp),w(_i,Fp,null),e(Ko,Aw),e(Ko,xp),e(xp,Ow),k(o,Qm,b),k(o,Ne,b),w(bi,Ne,null),e(Ne,Nw),e(Ne,ki),e(ki,Iw),e(ki,Rp),e(Rp,Dw),e(ki,Sw),e(Ne,Ww),e(Ne,vi),e(vi,Uw),e(vi,cd),e(cd,Bw),e(vi,Hw),e(Ne,Qw),e(Ne,Ti),e(Ti,Vw),e(Ti,yi),e(yi,Jw),e(Ti,Kw),e(Ne,Gw),e(Ne,Mp),e(Mp,Xw),e(Ne,Yw),e(Ne,St),e(St,Ep),e(Ep,wi),e(wi,Zw),e(St,e1),e(St,zp),e(zp,$i),e($i,t1),e(St,o1),e(St,qp),e(qp,Fi),e(Fi,n1),e(St,s1),e(St,Cp),e(Cp,xi),e(xi,a1),e(Ne,r1),e(Ne,Et),w(Ri,Et,null),e(Et,i1),e(Et,Go),e(Go,l1),e(Go,jp),e(jp,d1),e(Go,c1),e(Go,Pp),e(Pp,p1),e(Go,h1),e(Et,m1),w(qs,Et,null),e(Et,f1),w(Cs,Et,null),k(o,Vm,b),k(o,Xo,b),e(Xo,js),e(js,Lp),w(Mi,Lp,null),e(Xo,u1),e(Xo,Ap),e(Ap,g1),k(o,Jm,b),k(o,Ie,b),w(Ei,Ie,null),e(Ie,_1),e(Ie,Op),e(Op,b1),e(Ie,k1),e(Ie,zi),e(zi,v1),e(zi,pd),e(pd,T1),e(zi,y1),e(Ie,w1),e(Ie,qi),e(qi,$1),e(qi,Ci),e(Ci,F1),e(qi,x1),e(Ie,R1),e(Ie,Np),e(Np,M1),e(Ie,E1),e(Ie,Wt),e(Wt,Ip),e(Ip,ji),e(ji,z1),e(Wt,q1),e(Wt,Dp),e(Dp,Pi),e(Pi,C1),e(Wt,j1),e(Wt,Sp),e(Sp,Li),e(Li,P1),e(Wt,L1),e(Wt,Wp),e(Wp,Ai),e(Ai,A1),e(Ie,O1),e(Ie,zt),w(Oi,zt,null),e(zt,N1),e(zt,Yo),e(Yo,I1),e(Yo,Up),e(Up,D1),e(Yo,S1),e(Yo,Bp),e(Bp,W1),e(Yo,U1),e(zt,B1),w(Ps,zt,null),e(zt,H1),w(Ls,zt,null),k(o,Km,b),k(o,Zo,b),e(Zo,As),e(As,Hp),w(Ni,Hp,null),e(Zo,Q1),e(Zo,Qp),e(Qp,V1),k(o,Gm,b),k(o,De,b),w(Ii,De,null),e(De,J1),e(De,Vp),e(Vp,K1),e(De,G1),e(De,Di),e(Di,X1),e(Di,hd),e(hd,Y1),e(Di,Z1),e(De,e$),e(De,Si),e(Si,t$),e(Si,Wi),e(Wi,o$),e(Si,n$),e(De,s$),e(De,Jp),e(Jp,a$),e(De,r$),e(De,Ut),e(Ut,Kp),e(Kp,Ui),e(Ui,i$),e(Ut,l$),e(Ut,Gp),e(Gp,Bi),e(Bi,d$),e(Ut,c$),e(Ut,Xp),e(Xp,Hi),e(Hi,p$),e(Ut,h$),e(Ut,Yp),e(Yp,Qi),e(Qi,m$),e(De,f$),e(De,qt),w(Vi,qt,null),e(qt,u$),e(qt,en),e(en,g$),e(en,Zp),e(Zp,_$),e(en,b$),e(en,eh),e(eh,k$),e(en,v$),e(qt,T$),w(Os,qt,null),e(qt,y$),w(Ns,qt,null),k(o,Xm,b),k(o,tn,b),e(tn,Is),e(Is,th),w(Ji,th,null),e(tn,w$),e(tn,oh),e(oh,$$),k(o,Ym,b),k(o,Se,b),w(Ki,Se,null),e(Se,F$),e(Se,nh),e(nh,x$),e(Se,R$),e(Se,Gi),e(Gi,M$),e(Gi,md),e(md,E$),e(Gi,z$),e(Se,q$),e(Se,Xi),e(Xi,C$),e(Xi,Yi),e(Yi,j$),e(Xi,P$),e(Se,L$),e(Se,sh),e(sh,A$),e(Se,O$),e(Se,Bt),e(Bt,ah),e(ah,Zi),e(Zi,N$),e(Bt,I$),e(Bt,rh),e(rh,el),e(el,D$),e(Bt,S$),e(Bt,ih),e(ih,tl),e(tl,W$),e(Bt,U$),e(Bt,lh),e(lh,ol),e(ol,B$),e(Se,H$),e(Se,Ct),w(nl,Ct,null),e(Ct,Q$),e(Ct,on),e(on,V$),e(on,dh),e(dh,J$),e(on,K$),e(on,ch),e(ch,G$),e(on,X$),e(Ct,Y$),w(Ds,Ct,null),e(Ct,Z$),w(Ss,Ct,null),k(o,Zm,b),k(o,nn,b),e(nn,Ws),e(Ws,ph),w(sl,ph,null),e(nn,e0),e(nn,hh),e(hh,t0),k(o,ef,b),k(o,We,b),w(al,We,null),e(We,o0),e(We,sn),e(sn,n0),e(sn,mh),e(mh,s0),e(sn,a0),e(sn,fh),e(fh,r0),e(sn,i0),e(We,l0),e(We,rl),e(rl,d0),e(rl,fd),e(fd,c0),e(rl,p0),e(We,h0),e(We,il),e(il,m0),e(il,ll),e(ll,f0),e(il,u0),e(We,g0),e(We,uh),e(uh,_0),e(We,b0),e(We,Ht),e(Ht,gh),e(gh,dl),e(dl,k0),e(Ht,v0),e(Ht,_h),e(_h,cl),e(cl,T0),e(Ht,y0),e(Ht,bh),e(bh,pl),e(pl,w0),e(Ht,$0),e(Ht,kh),e(kh,hl),e(hl,F0),e(We,x0),e(We,jt),w(ml,jt,null),e(jt,R0),e(jt,an),e(an,M0),e(an,vh),e(vh,E0),e(an,z0),e(an,Th),e(Th,q0),e(an,C0),e(jt,j0),w(Us,jt,null),e(jt,P0),w(Bs,jt,null),tf=!0},p(o,[b]){const fl={};b&2&&(fl.$$scope={dirty:b,ctx:o}),mn.$set(fl);const yh={};b&2&&(yh.$$scope={dirty:b,ctx:o}),un.$set(yh);const wh={};b&2&&(wh.$$scope={dirty:b,ctx:o}),gn.$set(wh);const $h={};b&2&&($h.$$scope={dirty:b,ctx:o}),vn.$set($h);const ul={};b&2&&(ul.$$scope={dirty:b,ctx:o}),Tn.$set(ul);const Fh={};b&2&&(Fh.$$scope={dirty:b,ctx:o}),$n.$set(Fh);const xh={};b&2&&(xh.$$scope={dirty:b,ctx:o}),Fn.$set(xh);const Rh={};b&2&&(Rh.$$scope={dirty:b,ctx:o}),Rn.$set(Rh);const gl={};b&2&&(gl.$$scope={dirty:b,ctx:o}),Mn.$set(gl);const Mh={};b&2&&(Mh.$$scope={dirty:b,ctx:o}),zn.$set(Mh);const Eh={};b&2&&(Eh.$$scope={dirty:b,ctx:o}),qn.$set(Eh);const zh={};b&2&&(zh.$$scope={dirty:b,ctx:o}),Cn.$set(zh);const qh={};b&2&&(qh.$$scope={dirty:b,ctx:o}),Pn.$set(qh);const Ch={};b&2&&(Ch.$$scope={dirty:b,ctx:o}),Ln.$set(Ch);const jh={};b&2&&(jh.$$scope={dirty:b,ctx:o}),An.$set(jh);const Qt={};b&2&&(Qt.$$scope={dirty:b,ctx:o}),On.$set(Qt);const _l={};b&2&&(_l.$$scope={dirty:b,ctx:o}),Nn.$set(_l);const Ph={};b&2&&(Ph.$$scope={dirty:b,ctx:o}),Dn.$set(Ph);const Lh={};b&2&&(Lh.$$scope={dirty:b,ctx:o}),Sn.$set(Lh);const Vt={};b&2&&(Vt.$$scope={dirty:b,ctx:o}),Un.$set(Vt);const Ah={};b&2&&(Ah.$$scope={dirty:b,ctx:o}),Bn.$set(Ah);const Oh={};b&2&&(Oh.$$scope={dirty:b,ctx:o}),Hn.$set(Oh);const Nh={};b&2&&(Nh.$$scope={dirty:b,ctx:o}),Vn.$set(Nh);const ud={};b&2&&(ud.$$scope={dirty:b,ctx:o}),Jn.$set(ud);const Ih={};b&2&&(Ih.$$scope={dirty:b,ctx:o}),Kn.$set(Ih);const rn={};b&2&&(rn.$$scope={dirty:b,ctx:o}),Xn.$set(rn);const Dh={};b&2&&(Dh.$$scope={dirty:b,ctx:o}),Yn.$set(Dh);const Sh={};b&2&&(Sh.$$scope={dirty:b,ctx:o}),Zn.$set(Sh);const bl={};b&2&&(bl.$$scope={dirty:b,ctx:o}),ts.$set(bl);const Wh={};b&2&&(Wh.$$scope={dirty:b,ctx:o}),os.$set(Wh);const Uh={};b&2&&(Uh.$$scope={dirty:b,ctx:o}),ss.$set(Uh);const Bh={};b&2&&(Bh.$$scope={dirty:b,ctx:o}),as.$set(Bh);const Tt={};b&2&&(Tt.$$scope={dirty:b,ctx:o}),rs.$set(Tt);const ln={};b&2&&(ln.$$scope={dirty:b,ctx:o}),is.$set(ln);const Hh={};b&2&&(Hh.$$scope={dirty:b,ctx:o}),ds.$set(Hh);const Qh={};b&2&&(Qh.$$scope={dirty:b,ctx:o}),cs.$set(Qh);const dn={};b&2&&(dn.$$scope={dirty:b,ctx:o}),ps.$set(dn);const Vh={};b&2&&(Vh.$$scope={dirty:b,ctx:o}),hs.$set(Vh);const Jh={};b&2&&(Jh.$$scope={dirty:b,ctx:o}),fs.$set(Jh);const cn={};b&2&&(cn.$$scope={dirty:b,ctx:o}),us.$set(cn);const Kh={};b&2&&(Kh.$$scope={dirty:b,ctx:o}),gs.$set(Kh);const Gh={};b&2&&(Gh.$$scope={dirty:b,ctx:o}),bs.$set(Gh);const kl={};b&2&&(kl.$$scope={dirty:b,ctx:o}),ks.$set(kl);const Xh={};b&2&&(Xh.$$scope={dirty:b,ctx:o}),vs.$set(Xh);const Yh={};b&2&&(Yh.$$scope={dirty:b,ctx:o}),Ts.$set(Yh);const Zh={};b&2&&(Zh.$$scope={dirty:b,ctx:o}),ws.$set(Zh);const $e={};b&2&&($e.$$scope={dirty:b,ctx:o}),$s.$set($e);const em={};b&2&&(em.$$scope={dirty:b,ctx:o}),Fs.$set(em);const tm={};b&2&&(tm.$$scope={dirty:b,ctx:o}),xs.$set(tm);const vl={};b&2&&(vl.$$scope={dirty:b,ctx:o}),Ms.$set(vl);const om={};b&2&&(om.$$scope={dirty:b,ctx:o}),Es.$set(om);const Tl={};b&2&&(Tl.$$scope={dirty:b,ctx:o}),qs.$set(Tl);const nm={};b&2&&(nm.$$scope={dirty:b,ctx:o}),Cs.$set(nm);const pn={};b&2&&(pn.$$scope={dirty:b,ctx:o}),Ps.$set(pn);const sm={};b&2&&(sm.$$scope={dirty:b,ctx:o}),Ls.$set(sm);const yl={};b&2&&(yl.$$scope={dirty:b,ctx:o}),Os.$set(yl);const gd={};b&2&&(gd.$$scope={dirty:b,ctx:o}),Ns.$set(gd);const am={};b&2&&(am.$$scope={dirty:b,ctx:o}),Ds.$set(am);const _d={};b&2&&(_d.$$scope={dirty:b,ctx:o}),Ss.$set(_d);const rm={};b&2&&(rm.$$scope={dirty:b,ctx:o}),Us.$set(rm);const wl={};b&2&&(wl.$$scope={dirty:b,ctx:o}),Bs.$set(wl)},i(o){tf||($(l.$$.fragment,o),$(se.$$.fragment,o),$(pa.$$.fragment,o),$(ha.$$.fragment,o),$(mn.$$.fragment,o),$(ma.$$.fragment,o),$(fa.$$.fragment,o),$(un.$$.fragment,o),$(gn.$$.fragment,o),$(_a.$$.fragment,o),$(ka.$$.fragment,o),$(Ta.$$.fragment,o),$(ya.$$.fragment,o),$(wa.$$.fragment,o),$($a.$$.fragment,o),$(vn.$$.fragment,o),$(Tn.$$.fragment,o),$(Ma.$$.fragment,o),$(Ea.$$.fragment,o),$(za.$$.fragment,o),$(Aa.$$.fragment,o),$($n.$$.fragment,o),$(Fn.$$.fragment,o),$(Oa.$$.fragment,o),$(Na.$$.fragment,o),$(Ua.$$.fragment,o),$(Rn.$$.fragment,o),$(Mn.$$.fragment,o),$(Ba.$$.fragment,o),$(Ha.$$.fragment,o),$(Ga.$$.fragment,o),$(zn.$$.fragment,o),$(qn.$$.fragment,o),$(Cn.$$.fragment,o),$(Xa.$$.fragment,o),$(Ya.$$.fragment,o),$(or.$$.fragment,o),$(Pn.$$.fragment,o),$(Ln.$$.fragment,o),$(An.$$.fragment,o),$(On.$$.fragment,o),$(Nn.$$.fragment,o),$(nr.$$.fragment,o),$(sr.$$.fragment,o),$(lr.$$.fragment,o),$(Dn.$$.fragment,o),$(Sn.$$.fragment,o),$(dr.$$.fragment,o),$(cr.$$.fragment,o),$(fr.$$.fragment,o),$(Un.$$.fragment,o),$(Bn.$$.fragment,o),$(Hn.$$.fragment,o),$(ur.$$.fragment,o),$(gr.$$.fragment,o),$(vr.$$.fragment,o),$(Vn.$$.fragment,o),$(Jn.$$.fragment,o),$(Kn.$$.fragment,o),$(Tr.$$.fragment,o),$(yr.$$.fragment,o),$(Xn.$$.fragment,o),$(xr.$$.fragment,o),$(Yn.$$.fragment,o),$(Zn.$$.fragment,o),$(Rr.$$.fragment,o),$(Mr.$$.fragment,o),$(Er.$$.fragment,o),$(ts.$$.fragment,o),$(os.$$.fragment,o),$(zr.$$.fragment,o),$(qr.$$.fragment,o),$(ss.$$.fragment,o),$(Ar.$$.fragment,o),$(as.$$.fragment,o),$(rs.$$.fragment,o),$(is.$$.fragment,o),$(Or.$$.fragment,o),$(Nr.$$.fragment,o),$(ds.$$.fragment,o),$(Wr.$$.fragment,o),$(cs.$$.fragment,o),$(ps.$$.fragment,o),$(hs.$$.fragment,o),$(Ur.$$.fragment,o),$(Br.$$.fragment,o),$(fs.$$.fragment,o),$(Jr.$$.fragment,o),$(us.$$.fragment,o),$(gs.$$.fragment,o),$(Kr.$$.fragment,o),$(Gr.$$.fragment,o),$(bs.$$.fragment,o),$(ei.$$.fragment,o),$(ks.$$.fragment,o),$(vs.$$.fragment,o),$(Ts.$$.fragment,o),$(ti.$$.fragment,o),$(oi.$$.fragment,o),$(ws.$$.fragment,o),$(ri.$$.fragment,o),$($s.$$.fragment,o),$(Fs.$$.fragment,o),$(xs.$$.fragment,o),$(ii.$$.fragment,o),$(li.$$.fragment,o),$(gi.$$.fragment,o),$(Ms.$$.fragment,o),$(Es.$$.fragment,o),$(_i.$$.fragment,o),$(bi.$$.fragment,o),$(Ri.$$.fragment,o),$(qs.$$.fragment,o),$(Cs.$$.fragment,o),$(Mi.$$.fragment,o),$(Ei.$$.fragment,o),$(Oi.$$.fragment,o),$(Ps.$$.fragment,o),$(Ls.$$.fragment,o),$(Ni.$$.fragment,o),$(Ii.$$.fragment,o),$(Vi.$$.fragment,o),$(Os.$$.fragment,o),$(Ns.$$.fragment,o),$(Ji.$$.fragment,o),$(Ki.$$.fragment,o),$(nl.$$.fragment,o),$(Ds.$$.fragment,o),$(Ss.$$.fragment,o),$(sl.$$.fragment,o),$(al.$$.fragment,o),$(ml.$$.fragment,o),$(Us.$$.fragment,o),$(Bs.$$.fragment,o),tf=!0)},o(o){F(l.$$.fragment,o),F(se.$$.fragment,o),F(pa.$$.fragment,o),F(ha.$$.fragment,o),F(mn.$$.fragment,o),F(ma.$$.fragment,o),F(fa.$$.fragment,o),F(un.$$.fragment,o),F(gn.$$.fragment,o),F(_a.$$.fragment,o),F(ka.$$.fragment,o),F(Ta.$$.fragment,o),F(ya.$$.fragment,o),F(wa.$$.fragment,o),F($a.$$.fragment,o),F(vn.$$.fragment,o),F(Tn.$$.fragment,o),F(Ma.$$.fragment,o),F(Ea.$$.fragment,o),F(za.$$.fragment,o),F(Aa.$$.fragment,o),F($n.$$.fragment,o),F(Fn.$$.fragment,o),F(Oa.$$.fragment,o),F(Na.$$.fragment,o),F(Ua.$$.fragment,o),F(Rn.$$.fragment,o),F(Mn.$$.fragment,o),F(Ba.$$.fragment,o),F(Ha.$$.fragment,o),F(Ga.$$.fragment,o),F(zn.$$.fragment,o),F(qn.$$.fragment,o),F(Cn.$$.fragment,o),F(Xa.$$.fragment,o),F(Ya.$$.fragment,o),F(or.$$.fragment,o),F(Pn.$$.fragment,o),F(Ln.$$.fragment,o),F(An.$$.fragment,o),F(On.$$.fragment,o),F(Nn.$$.fragment,o),F(nr.$$.fragment,o),F(sr.$$.fragment,o),F(lr.$$.fragment,o),F(Dn.$$.fragment,o),F(Sn.$$.fragment,o),F(dr.$$.fragment,o),F(cr.$$.fragment,o),F(fr.$$.fragment,o),F(Un.$$.fragment,o),F(Bn.$$.fragment,o),F(Hn.$$.fragment,o),F(ur.$$.fragment,o),F(gr.$$.fragment,o),F(vr.$$.fragment,o),F(Vn.$$.fragment,o),F(Jn.$$.fragment,o),F(Kn.$$.fragment,o),F(Tr.$$.fragment,o),F(yr.$$.fragment,o),F(Xn.$$.fragment,o),F(xr.$$.fragment,o),F(Yn.$$.fragment,o),F(Zn.$$.fragment,o),F(Rr.$$.fragment,o),F(Mr.$$.fragment,o),F(Er.$$.fragment,o),F(ts.$$.fragment,o),F(os.$$.fragment,o),F(zr.$$.fragment,o),F(qr.$$.fragment,o),F(ss.$$.fragment,o),F(Ar.$$.fragment,o),F(as.$$.fragment,o),F(rs.$$.fragment,o),F(is.$$.fragment,o),F(Or.$$.fragment,o),F(Nr.$$.fragment,o),F(ds.$$.fragment,o),F(Wr.$$.fragment,o),F(cs.$$.fragment,o),F(ps.$$.fragment,o),F(hs.$$.fragment,o),F(Ur.$$.fragment,o),F(Br.$$.fragment,o),F(fs.$$.fragment,o),F(Jr.$$.fragment,o),F(us.$$.fragment,o),F(gs.$$.fragment,o),F(Kr.$$.fragment,o),F(Gr.$$.fragment,o),F(bs.$$.fragment,o),F(ei.$$.fragment,o),F(ks.$$.fragment,o),F(vs.$$.fragment,o),F(Ts.$$.fragment,o),F(ti.$$.fragment,o),F(oi.$$.fragment,o),F(ws.$$.fragment,o),F(ri.$$.fragment,o),F($s.$$.fragment,o),F(Fs.$$.fragment,o),F(xs.$$.fragment,o),F(ii.$$.fragment,o),F(li.$$.fragment,o),F(gi.$$.fragment,o),F(Ms.$$.fragment,o),F(Es.$$.fragment,o),F(_i.$$.fragment,o),F(bi.$$.fragment,o),F(Ri.$$.fragment,o),F(qs.$$.fragment,o),F(Cs.$$.fragment,o),F(Mi.$$.fragment,o),F(Ei.$$.fragment,o),F(Oi.$$.fragment,o),F(Ps.$$.fragment,o),F(Ls.$$.fragment,o),F(Ni.$$.fragment,o),F(Ii.$$.fragment,o),F(Vi.$$.fragment,o),F(Os.$$.fragment,o),F(Ns.$$.fragment,o),F(Ji.$$.fragment,o),F(Ki.$$.fragment,o),F(nl.$$.fragment,o),F(Ds.$$.fragment,o),F(Ss.$$.fragment,o),F(sl.$$.fragment,o),F(al.$$.fragment,o),F(ml.$$.fragment,o),F(Us.$$.fragment,o),F(Bs.$$.fragment,o),tf=!1},d(o){t(d),o&&t(g),o&&t(c),x(l),o&&t(I),o&&t(z),x(se),o&&t(fe),o&&t(K),o&&t(j),o&&t(ie),o&&t(ue),o&&t(le),o&&t(ge),o&&t(de),o&&t(W),o&&t(ce),o&&t(U),o&&t(G),o&&t(lm),o&&t(Jt),o&&t(dm),o&&t(co),x(pa),o&&t(cm),o&&t(Ze),x(ha),x(mn),o&&t(pm),o&&t(fo),x(ma),o&&t(hm),o&&t(we),x(fa),x(un),x(gn),x(_a),x(ka),x(Ta),x(ya),o&&t(mm),o&&t(uo),x(wa),o&&t(fm),o&&t(Le),x($a),x(vn),x(Tn),x(Ma),o&&t(um),o&&t(go),x(Ea),o&&t(gm),o&&t(Ae),x(za),x(Aa),x($n),x(Fn),o&&t(_m),o&&t(bo),x(Oa),o&&t(bm),o&&t(et),x(Na),x(Ua),x(Rn),x(Mn),o&&t(km),o&&t(vo),x(Ba),o&&t(vm),o&&t(tt),x(Ha),x(Ga),x(zn),x(qn),x(Cn),o&&t(Tm),o&&t(yo),x(Xa),o&&t(ym),o&&t(ot),x(Ya),x(or),x(Pn),x(Ln),x(An),x(On),x(Nn),o&&t(wm),o&&t($o),x(nr),o&&t($m),o&&t(nt),x(sr),x(lr),x(Dn),x(Sn),o&&t(Fm),o&&t(xo),x(dr),o&&t(xm),o&&t(st),x(cr),x(fr),x(Un),x(Bn),x(Hn),o&&t(Rm),o&&t(Mo),x(ur),o&&t(Mm),o&&t(at),x(gr),x(vr),x(Vn),x(Jn),x(Kn),o&&t(Em),o&&t(qo),x(Tr),o&&t(zm),o&&t(He),x(yr),x(Xn),x(xr),x(Yn),x(Zn),o&&t(qm),o&&t(jo),x(Rr),o&&t(Cm),o&&t(Po),x(Mr),x(Er),x(ts),x(os),o&&t(jm),o&&t(Ao),x(zr),o&&t(Pm),o&&t(Qe),x(qr),x(ss),x(Ar),x(as),x(rs),x(is),o&&t(Lm),o&&t(No),x(Or),o&&t(Am),o&&t(Ve),x(Nr),x(ds),x(Wr),x(cs),x(ps),x(hs),o&&t(Om),o&&t(Do),x(Ur),o&&t(Nm),o&&t(Je),x(Br),x(fs),x(Jr),x(us),x(gs),o&&t(Im),o&&t(Wo),x(Kr),o&&t(Dm),o&&t(Ke),x(Gr),x(bs),x(ei),x(ks),x(vs),x(Ts),o&&t(Sm),o&&t(Bo),x(ti),o&&t(Wm),o&&t(Ge),x(oi),x(ws),x(ri),x($s),x(Fs),x(xs),o&&t(Um),o&&t(Vo),x(ii),o&&t(Bm),o&&t(Oe),x(li),x(gi),x(Ms),x(Es),o&&t(Hm),o&&t(Ko),x(_i),o&&t(Qm),o&&t(Ne),x(bi),x(Ri),x(qs),x(Cs),o&&t(Vm),o&&t(Xo),x(Mi),o&&t(Jm),o&&t(Ie),x(Ei),x(Oi),x(Ps),x(Ls),o&&t(Km),o&&t(Zo),x(Ni),o&&t(Gm),o&&t(De),x(Ii),x(Vi),x(Os),x(Ns),o&&t(Xm),o&&t(tn),x(Ji),o&&t(Ym),o&&t(Se),x(Ki),x(nl),x(Ds),x(Ss),o&&t(Zm),o&&t(nn),x(sl),o&&t(ef),o&&t(We),x(al),x(ml),x(Us),x(Bs)}}}const hM={local:"roberta",sections:[{local:"overview",title:"Overview"},{local:"transformers.RobertaConfig",title:"RobertaConfig"},{local:"transformers.RobertaTokenizer",title:"RobertaTokenizer"},{local:"transformers.RobertaTokenizerFast",title:"RobertaTokenizerFast"},{local:"transformers.RobertaModel",title:"RobertaModel"},{local:"transformers.RobertaForCausalLM",title:"RobertaForCausalLM"},{local:"transformers.RobertaForMaskedLM",title:"RobertaForMaskedLM"},{local:"transformers.RobertaForSequenceClassification",title:"RobertaForSequenceClassification"},{local:"transformers.RobertaForMultipleChoice",title:"RobertaForMultipleChoice"},{local:"transformers.RobertaForTokenClassification",title:"RobertaForTokenClassification"},{local:"transformers.RobertaForQuestionAnswering",title:"RobertaForQuestionAnswering"},{local:"transformers.TFRobertaModel",title:"TFRobertaModel"},{local:"transformers.TFRobertaForCausalLM",title:"TFRobertaForCausalLM"},{local:"transformers.TFRobertaForMaskedLM",title:"TFRobertaForMaskedLM"},{local:"transformers.TFRobertaForSequenceClassification",title:"TFRobertaForSequenceClassification"},{local:"transformers.TFRobertaForMultipleChoice",title:"TFRobertaForMultipleChoice"},{local:"transformers.TFRobertaForTokenClassification",title:"TFRobertaForTokenClassification"},{local:"transformers.TFRobertaForQuestionAnswering",title:"TFRobertaForQuestionAnswering"},{local:"transformers.FlaxRobertaModel",title:"FlaxRobertaModel"},{local:"transformers.FlaxRobertaForMaskedLM",title:"FlaxRobertaForMaskedLM"},{local:"transformers.FlaxRobertaForSequenceClassification",title:"FlaxRobertaForSequenceClassification"},{local:"transformers.FlaxRobertaForMultipleChoice",title:"FlaxRobertaForMultipleChoice"},{local:"transformers.FlaxRobertaForTokenClassification",title:"FlaxRobertaForTokenClassification"},{local:"transformers.FlaxRobertaForQuestionAnswering",title:"FlaxRobertaForQuestionAnswering"}],title:"RoBERTa"};function mM(R){return nR(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class vM extends Zx{constructor(d){super();eR(this,d,mM,pM,tR,{})}}export{vM as default,hM as metadata};
