import{S as nM,i as sM,s as aM,e as n,k as p,w as T,t as r,M as rM,c as s,d as t,m as h,a,x as y,h as i,b as u,F as e,g as k,y as w,q as $,o as F,B as x,v as iM,L as oe}from"../../chunks/vendor-6b77c823.js";import{T as _e}from"../../chunks/Tip-39098574.js";import{D as P}from"../../chunks/Docstring-1088f2fb.js";import{C as ne}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Fe}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as te}from"../../chunks/ExampleCodeBlock-5212b321.js";function lM(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaConfig, RobertaModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),g=r("Examples:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Examples:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function dM(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer
tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 328, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){d=n("p"),g=r("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function cM(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("When used with "),c=n("code"),m=r("is_split_into_words=True"),_=r(", this tokenizer will add a space before each word (even the first one).")},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"When used with "),c=s(f,"CODE",{});var M=a(c);m=i(M,"is_split_into_words=True"),M.forEach(t),_=i(f,", this tokenizer will add a space before each word (even the first one)."),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function pM(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizerFast
tokenizer = RobertaTokenizerFast.from_pretrained("roberta-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = RobertaTokenizerFast.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 328, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){d=n("p"),g=r("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function hM(R){let d,g,c,m,_,l,f,M;return{c(){d=n("p"),g=r("When used with "),c=n("code"),m=r("is_split_into_words=True"),_=r(", this tokenizer needs to be instantiated with "),l=n("code"),f=r("add_prefix_space=True"),M=r(".")},l(Y){d=s(Y,"P",{});var I=a(d);g=i(I,"When used with "),c=s(I,"CODE",{});var z=a(c);m=i(z,"is_split_into_words=True"),z.forEach(t),_=i(I,", this tokenizer needs to be instantiated with "),l=s(I,"CODE",{});var X=a(l);f=i(X,"add_prefix_space=True"),X.forEach(t),M=i(I,"."),I.forEach(t)},m(Y,I){k(Y,d,I),e(d,g),e(d,c),e(c,m),e(d,_),e(d,l),e(l,f),e(d,M)},d(Y){Y&&t(d)}}}function mM(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function fM(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, RobertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function uM(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function gM(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, RobertaForCausalLM, RobertaConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function _M(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function bM(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, RobertaForMaskedLM
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
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function kM(R){let d,g;return d=new ne({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function vM(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function TM(R){let d,g,c,m,_;return m=new ne({props:{code:`import torch
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=n("p"),g=r("Example of single-label classification:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example of single-label classification:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function yM(R){let d,g;return d=new ne({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = RobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function wM(R){let d,g,c,m,_;return m=new ne({props:{code:`import torch
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=n("p"),g=r("Example of multi-label classification:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example of multi-label classification:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function $M(R){let d,g;return d=new ne({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = RobertaForSequenceClassification.from_pretrained(
    "cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function FM(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function xM(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, RobertaForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function RM(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function MM(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, RobertaForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function EM(R){let d,g;return d=new ne({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function zM(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function qM(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, RobertaForQuestionAnswering
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
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function CM(R){let d,g;return d=new ne({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([14])
target_end_index = torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.86</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function jM(R){let d,g,c,m,_,l,f,M,Y,I,z,X,D,se,be,S,ke,fe,K,A,ae,Z,q,j,ie,U,ue,le,H,ge,de,C,ve,W,ce,Te,B,G,re,O,pe,Q,ye;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),c=p(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),M=n("li"),Y=r("having all inputs as a list, tuple or dict in the first positional arguments."),I=p(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),se=r("tf.keras.Model.fit"),be=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ke=r("model(inputs)"),fe=r("."),K=p(),A=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=p(),q=n("ul"),j=n("li"),ie=r("a single Tensor with "),U=n("code"),ue=r("input_ids"),le=r(" only and nothing else: "),H=n("code"),ge=r("model(inputs_ids)"),de=p(),C=n("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),ce=r("model([input_ids, attention_mask])"),Te=r(" or "),B=n("code"),G=r("model([input_ids, attention_mask, token_type_ids])"),re=p(),O=n("li"),pe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var E=a(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(v),m=s(v,"UL",{});var ee=a(m);_=s(ee,"LI",{});var Ee=a(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=h(ee),M=s(ee,"LI",{});var me=a(M);Y=i(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),ee.forEach(t),I=h(v),z=s(v,"P",{});var N=a(z);X=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var Re=a(D);se=i(Re,"tf.keras.Model.fit"),Re.forEach(t),be=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var ze=a(S);ke=i(ze,"model(inputs)"),ze.forEach(t),fe=i(N,"."),N.forEach(t),K=h(v),A=s(v,"P",{});var qe=a(A);ae=i(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Z=h(v),q=s(v,"UL",{});var L=a(q);j=s(L,"LI",{});var V=a(j);ie=i(V,"a single Tensor with "),U=s(V,"CODE",{});var Ce=a(U);ue=i(Ce,"input_ids"),Ce.forEach(t),le=i(V," only and nothing else: "),H=s(V,"CODE",{});var Me=a(H);ge=i(Me,"model(inputs_ids)"),Me.forEach(t),V.forEach(t),de=h(L),C=s(L,"LI",{});var J=a(C);ve=i(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(J,"CODE",{});var je=a(W);ce=i(je,"model([input_ids, attention_mask])"),je.forEach(t),Te=i(J," or "),B=s(J,"CODE",{});var Pe=a(B);G=i(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),J.forEach(t),re=h(L),O=s(L,"LI",{});var he=a(O);pe=i(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(he,"CODE",{});var xe=a(Q);ye=i(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),he.forEach(t),L.forEach(t)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,m,E),e(m,_),e(_,l),e(m,f),e(m,M),e(M,Y),k(v,I,E),k(v,z,E),e(z,X),e(z,D),e(D,se),e(z,be),e(z,S),e(S,ke),e(z,fe),k(v,K,E),k(v,A,E),e(A,ae),k(v,Z,E),k(v,q,E),e(q,j),e(j,ie),e(j,U),e(U,ue),e(j,le),e(j,H),e(H,ge),e(q,de),e(q,C),e(C,ve),e(C,W),e(W,ce),e(C,Te),e(C,B),e(B,G),e(q,re),e(q,O),e(O,pe),e(O,Q),e(Q,ye)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(I),v&&t(z),v&&t(K),v&&t(A),v&&t(Z),v&&t(q)}}}function PM(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function LM(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, TFRobertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function AM(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function OM(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, TFRobertaForCausalLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function NM(R){let d,g,c,m,_,l,f,M,Y,I,z,X,D,se,be,S,ke,fe,K,A,ae,Z,q,j,ie,U,ue,le,H,ge,de,C,ve,W,ce,Te,B,G,re,O,pe,Q,ye;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),c=p(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),M=n("li"),Y=r("having all inputs as a list, tuple or dict in the first positional arguments."),I=p(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),se=r("tf.keras.Model.fit"),be=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ke=r("model(inputs)"),fe=r("."),K=p(),A=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=p(),q=n("ul"),j=n("li"),ie=r("a single Tensor with "),U=n("code"),ue=r("input_ids"),le=r(" only and nothing else: "),H=n("code"),ge=r("model(inputs_ids)"),de=p(),C=n("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),ce=r("model([input_ids, attention_mask])"),Te=r(" or "),B=n("code"),G=r("model([input_ids, attention_mask, token_type_ids])"),re=p(),O=n("li"),pe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var E=a(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(v),m=s(v,"UL",{});var ee=a(m);_=s(ee,"LI",{});var Ee=a(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=h(ee),M=s(ee,"LI",{});var me=a(M);Y=i(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),ee.forEach(t),I=h(v),z=s(v,"P",{});var N=a(z);X=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var Re=a(D);se=i(Re,"tf.keras.Model.fit"),Re.forEach(t),be=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var ze=a(S);ke=i(ze,"model(inputs)"),ze.forEach(t),fe=i(N,"."),N.forEach(t),K=h(v),A=s(v,"P",{});var qe=a(A);ae=i(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Z=h(v),q=s(v,"UL",{});var L=a(q);j=s(L,"LI",{});var V=a(j);ie=i(V,"a single Tensor with "),U=s(V,"CODE",{});var Ce=a(U);ue=i(Ce,"input_ids"),Ce.forEach(t),le=i(V," only and nothing else: "),H=s(V,"CODE",{});var Me=a(H);ge=i(Me,"model(inputs_ids)"),Me.forEach(t),V.forEach(t),de=h(L),C=s(L,"LI",{});var J=a(C);ve=i(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(J,"CODE",{});var je=a(W);ce=i(je,"model([input_ids, attention_mask])"),je.forEach(t),Te=i(J," or "),B=s(J,"CODE",{});var Pe=a(B);G=i(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),J.forEach(t),re=h(L),O=s(L,"LI",{});var he=a(O);pe=i(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(he,"CODE",{});var xe=a(Q);ye=i(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),he.forEach(t),L.forEach(t)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,m,E),e(m,_),e(_,l),e(m,f),e(m,M),e(M,Y),k(v,I,E),k(v,z,E),e(z,X),e(z,D),e(D,se),e(z,be),e(z,S),e(S,ke),e(z,fe),k(v,K,E),k(v,A,E),e(A,ae),k(v,Z,E),k(v,q,E),e(q,j),e(j,ie),e(j,U),e(U,ue),e(j,le),e(j,H),e(H,ge),e(q,de),e(q,C),e(C,ve),e(C,W),e(W,ce),e(C,Te),e(C,B),e(B,G),e(q,re),e(q,O),e(O,pe),e(O,Q),e(Q,ye)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(I),v&&t(z),v&&t(K),v&&t(A),v&&t(Z),v&&t(q)}}}function IM(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function DM(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, TFRobertaForMaskedLM
import tensorflow as tf

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = TFRobertaForMaskedLM.from_pretrained("roberta-base")

inputs = tokenizer("The capital of France is <mask>.", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of <mask>
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, TFRobertaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function SM(R){let d,g;return d=new ne({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-<mask> tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function WM(R){let d,g,c,m,_,l,f,M,Y,I,z,X,D,se,be,S,ke,fe,K,A,ae,Z,q,j,ie,U,ue,le,H,ge,de,C,ve,W,ce,Te,B,G,re,O,pe,Q,ye;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),c=p(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),M=n("li"),Y=r("having all inputs as a list, tuple or dict in the first positional arguments."),I=p(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),se=r("tf.keras.Model.fit"),be=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ke=r("model(inputs)"),fe=r("."),K=p(),A=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=p(),q=n("ul"),j=n("li"),ie=r("a single Tensor with "),U=n("code"),ue=r("input_ids"),le=r(" only and nothing else: "),H=n("code"),ge=r("model(inputs_ids)"),de=p(),C=n("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),ce=r("model([input_ids, attention_mask])"),Te=r(" or "),B=n("code"),G=r("model([input_ids, attention_mask, token_type_ids])"),re=p(),O=n("li"),pe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var E=a(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(v),m=s(v,"UL",{});var ee=a(m);_=s(ee,"LI",{});var Ee=a(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=h(ee),M=s(ee,"LI",{});var me=a(M);Y=i(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),ee.forEach(t),I=h(v),z=s(v,"P",{});var N=a(z);X=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var Re=a(D);se=i(Re,"tf.keras.Model.fit"),Re.forEach(t),be=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var ze=a(S);ke=i(ze,"model(inputs)"),ze.forEach(t),fe=i(N,"."),N.forEach(t),K=h(v),A=s(v,"P",{});var qe=a(A);ae=i(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Z=h(v),q=s(v,"UL",{});var L=a(q);j=s(L,"LI",{});var V=a(j);ie=i(V,"a single Tensor with "),U=s(V,"CODE",{});var Ce=a(U);ue=i(Ce,"input_ids"),Ce.forEach(t),le=i(V," only and nothing else: "),H=s(V,"CODE",{});var Me=a(H);ge=i(Me,"model(inputs_ids)"),Me.forEach(t),V.forEach(t),de=h(L),C=s(L,"LI",{});var J=a(C);ve=i(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(J,"CODE",{});var je=a(W);ce=i(je,"model([input_ids, attention_mask])"),je.forEach(t),Te=i(J," or "),B=s(J,"CODE",{});var Pe=a(B);G=i(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),J.forEach(t),re=h(L),O=s(L,"LI",{});var he=a(O);pe=i(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(he,"CODE",{});var xe=a(Q);ye=i(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),he.forEach(t),L.forEach(t)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,m,E),e(m,_),e(_,l),e(m,f),e(m,M),e(M,Y),k(v,I,E),k(v,z,E),e(z,X),e(z,D),e(D,se),e(z,be),e(z,S),e(S,ke),e(z,fe),k(v,K,E),k(v,A,E),e(A,ae),k(v,Z,E),k(v,q,E),e(q,j),e(j,ie),e(j,U),e(U,ue),e(j,le),e(j,H),e(H,ge),e(q,de),e(q,C),e(C,ve),e(C,W),e(W,ce),e(C,Te),e(C,B),e(B,G),e(q,re),e(q,O),e(O,pe),e(O,Q),e(Q,ye)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(I),v&&t(z),v&&t(K),v&&t(A),v&&t(Z),v&&t(q)}}}function BM(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function UM(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, TFRobertaForSequenceClassification
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function HM(R){let d,g;return d=new ne({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFRobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function QM(R){let d,g,c,m,_,l,f,M,Y,I,z,X,D,se,be,S,ke,fe,K,A,ae,Z,q,j,ie,U,ue,le,H,ge,de,C,ve,W,ce,Te,B,G,re,O,pe,Q,ye;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),c=p(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),M=n("li"),Y=r("having all inputs as a list, tuple or dict in the first positional arguments."),I=p(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),se=r("tf.keras.Model.fit"),be=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ke=r("model(inputs)"),fe=r("."),K=p(),A=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=p(),q=n("ul"),j=n("li"),ie=r("a single Tensor with "),U=n("code"),ue=r("input_ids"),le=r(" only and nothing else: "),H=n("code"),ge=r("model(inputs_ids)"),de=p(),C=n("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),ce=r("model([input_ids, attention_mask])"),Te=r(" or "),B=n("code"),G=r("model([input_ids, attention_mask, token_type_ids])"),re=p(),O=n("li"),pe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var E=a(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(v),m=s(v,"UL",{});var ee=a(m);_=s(ee,"LI",{});var Ee=a(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=h(ee),M=s(ee,"LI",{});var me=a(M);Y=i(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),ee.forEach(t),I=h(v),z=s(v,"P",{});var N=a(z);X=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var Re=a(D);se=i(Re,"tf.keras.Model.fit"),Re.forEach(t),be=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var ze=a(S);ke=i(ze,"model(inputs)"),ze.forEach(t),fe=i(N,"."),N.forEach(t),K=h(v),A=s(v,"P",{});var qe=a(A);ae=i(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Z=h(v),q=s(v,"UL",{});var L=a(q);j=s(L,"LI",{});var V=a(j);ie=i(V,"a single Tensor with "),U=s(V,"CODE",{});var Ce=a(U);ue=i(Ce,"input_ids"),Ce.forEach(t),le=i(V," only and nothing else: "),H=s(V,"CODE",{});var Me=a(H);ge=i(Me,"model(inputs_ids)"),Me.forEach(t),V.forEach(t),de=h(L),C=s(L,"LI",{});var J=a(C);ve=i(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(J,"CODE",{});var je=a(W);ce=i(je,"model([input_ids, attention_mask])"),je.forEach(t),Te=i(J," or "),B=s(J,"CODE",{});var Pe=a(B);G=i(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),J.forEach(t),re=h(L),O=s(L,"LI",{});var he=a(O);pe=i(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(he,"CODE",{});var xe=a(Q);ye=i(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),he.forEach(t),L.forEach(t)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,m,E),e(m,_),e(_,l),e(m,f),e(m,M),e(M,Y),k(v,I,E),k(v,z,E),e(z,X),e(z,D),e(D,se),e(z,be),e(z,S),e(S,ke),e(z,fe),k(v,K,E),k(v,A,E),e(A,ae),k(v,Z,E),k(v,q,E),e(q,j),e(j,ie),e(j,U),e(U,ue),e(j,le),e(j,H),e(H,ge),e(q,de),e(q,C),e(C,ve),e(C,W),e(W,ce),e(C,Te),e(C,B),e(B,G),e(q,re),e(q,O),e(O,pe),e(O,Q),e(Q,ye)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(I),v&&t(z),v&&t(K),v&&t(A),v&&t(Z),v&&t(q)}}}function VM(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function JM(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, TFRobertaForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function KM(R){let d,g,c,m,_,l,f,M,Y,I,z,X,D,se,be,S,ke,fe,K,A,ae,Z,q,j,ie,U,ue,le,H,ge,de,C,ve,W,ce,Te,B,G,re,O,pe,Q,ye;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),c=p(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),M=n("li"),Y=r("having all inputs as a list, tuple or dict in the first positional arguments."),I=p(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),se=r("tf.keras.Model.fit"),be=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ke=r("model(inputs)"),fe=r("."),K=p(),A=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=p(),q=n("ul"),j=n("li"),ie=r("a single Tensor with "),U=n("code"),ue=r("input_ids"),le=r(" only and nothing else: "),H=n("code"),ge=r("model(inputs_ids)"),de=p(),C=n("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),ce=r("model([input_ids, attention_mask])"),Te=r(" or "),B=n("code"),G=r("model([input_ids, attention_mask, token_type_ids])"),re=p(),O=n("li"),pe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var E=a(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(v),m=s(v,"UL",{});var ee=a(m);_=s(ee,"LI",{});var Ee=a(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=h(ee),M=s(ee,"LI",{});var me=a(M);Y=i(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),ee.forEach(t),I=h(v),z=s(v,"P",{});var N=a(z);X=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var Re=a(D);se=i(Re,"tf.keras.Model.fit"),Re.forEach(t),be=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var ze=a(S);ke=i(ze,"model(inputs)"),ze.forEach(t),fe=i(N,"."),N.forEach(t),K=h(v),A=s(v,"P",{});var qe=a(A);ae=i(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Z=h(v),q=s(v,"UL",{});var L=a(q);j=s(L,"LI",{});var V=a(j);ie=i(V,"a single Tensor with "),U=s(V,"CODE",{});var Ce=a(U);ue=i(Ce,"input_ids"),Ce.forEach(t),le=i(V," only and nothing else: "),H=s(V,"CODE",{});var Me=a(H);ge=i(Me,"model(inputs_ids)"),Me.forEach(t),V.forEach(t),de=h(L),C=s(L,"LI",{});var J=a(C);ve=i(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(J,"CODE",{});var je=a(W);ce=i(je,"model([input_ids, attention_mask])"),je.forEach(t),Te=i(J," or "),B=s(J,"CODE",{});var Pe=a(B);G=i(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),J.forEach(t),re=h(L),O=s(L,"LI",{});var he=a(O);pe=i(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(he,"CODE",{});var xe=a(Q);ye=i(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),he.forEach(t),L.forEach(t)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,m,E),e(m,_),e(_,l),e(m,f),e(m,M),e(M,Y),k(v,I,E),k(v,z,E),e(z,X),e(z,D),e(D,se),e(z,be),e(z,S),e(S,ke),e(z,fe),k(v,K,E),k(v,A,E),e(A,ae),k(v,Z,E),k(v,q,E),e(q,j),e(j,ie),e(j,U),e(U,ue),e(j,le),e(j,H),e(H,ge),e(q,de),e(q,C),e(C,ve),e(C,W),e(W,ce),e(C,Te),e(C,B),e(B,G),e(q,re),e(q,O),e(O,pe),e(O,Q),e(Q,ye)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(I),v&&t(z),v&&t(K),v&&t(A),v&&t(Z),v&&t(q)}}}function GM(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function XM(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, TFRobertaForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function YM(R){let d,g;return d=new ne({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function ZM(R){let d,g,c,m,_,l,f,M,Y,I,z,X,D,se,be,S,ke,fe,K,A,ae,Z,q,j,ie,U,ue,le,H,ge,de,C,ve,W,ce,Te,B,G,re,O,pe,Q,ye;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),c=p(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),M=n("li"),Y=r("having all inputs as a list, tuple or dict in the first positional arguments."),I=p(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),se=r("tf.keras.Model.fit"),be=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ke=r("model(inputs)"),fe=r("."),K=p(),A=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=p(),q=n("ul"),j=n("li"),ie=r("a single Tensor with "),U=n("code"),ue=r("input_ids"),le=r(" only and nothing else: "),H=n("code"),ge=r("model(inputs_ids)"),de=p(),C=n("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),ce=r("model([input_ids, attention_mask])"),Te=r(" or "),B=n("code"),G=r("model([input_ids, attention_mask, token_type_ids])"),re=p(),O=n("li"),pe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var E=a(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(v),m=s(v,"UL",{});var ee=a(m);_=s(ee,"LI",{});var Ee=a(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=h(ee),M=s(ee,"LI",{});var me=a(M);Y=i(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),ee.forEach(t),I=h(v),z=s(v,"P",{});var N=a(z);X=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var Re=a(D);se=i(Re,"tf.keras.Model.fit"),Re.forEach(t),be=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var ze=a(S);ke=i(ze,"model(inputs)"),ze.forEach(t),fe=i(N,"."),N.forEach(t),K=h(v),A=s(v,"P",{});var qe=a(A);ae=i(qe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),qe.forEach(t),Z=h(v),q=s(v,"UL",{});var L=a(q);j=s(L,"LI",{});var V=a(j);ie=i(V,"a single Tensor with "),U=s(V,"CODE",{});var Ce=a(U);ue=i(Ce,"input_ids"),Ce.forEach(t),le=i(V," only and nothing else: "),H=s(V,"CODE",{});var Me=a(H);ge=i(Me,"model(inputs_ids)"),Me.forEach(t),V.forEach(t),de=h(L),C=s(L,"LI",{});var J=a(C);ve=i(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(J,"CODE",{});var je=a(W);ce=i(je,"model([input_ids, attention_mask])"),je.forEach(t),Te=i(J," or "),B=s(J,"CODE",{});var Pe=a(B);G=i(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),J.forEach(t),re=h(L),O=s(L,"LI",{});var he=a(O);pe=i(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(he,"CODE",{});var xe=a(Q);ye=i(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),he.forEach(t),L.forEach(t)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,m,E),e(m,_),e(_,l),e(m,f),e(m,M),e(M,Y),k(v,I,E),k(v,z,E),e(z,X),e(z,D),e(D,se),e(z,be),e(z,S),e(S,ke),e(z,fe),k(v,K,E),k(v,A,E),e(A,ae),k(v,Z,E),k(v,q,E),e(q,j),e(j,ie),e(j,U),e(U,ue),e(j,le),e(j,H),e(H,ge),e(q,de),e(q,C),e(C,ve),e(C,W),e(W,ce),e(C,Te),e(C,B),e(B,G),e(q,re),e(q,O),e(O,pe),e(O,Q),e(Q,ye)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(I),v&&t(z),v&&t(K),v&&t(A),v&&t(Z),v&&t(q)}}}function eE(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function tE(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, TFRobertaForQuestionAnswering
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
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function oE(R){let d,g;return d=new ne({props:{code:`# target is "nice puppet"
target_start_index = tf.constant([14])
target_end_index = tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = tf.constant([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.86</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:oe,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function nE(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function sE(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaModel

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaModel.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaModel.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function aE(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function rE(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForMaskedLM

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForMaskedLM.from_pretrained("roberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function iE(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function lE(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForSequenceClassification

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForSequenceClassification.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function dE(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function cE(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function pE(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function hE(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForTokenClassification

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForTokenClassification.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function mE(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function fE(R){let d,g,c,m,_;return m=new ne({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:oe,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function uE(R){let d,g,c,m,_,l,f,M,Y,I,z,X,D,se,be,S,ke,fe,K,A,ae,Z,q,j,ie,U,ue,le,H,ge,de,C,ve,W,ce,Te,B,G,re,O,pe,Q,ye,v,E,ee,Ee,me,N,Re,ze,qe,L,V,Ce,Me,J,je,Pe,he,xe,Tu,yu,dm,Gt,wu,da,$u,Fu,ca,xu,Ru,cm,ho,hn,Sd,pa,Mu,Wd,Eu,pm,Ze,ha,zu,Dt,qu,$l,Cu,ju,Fl,Pu,Lu,ma,Au,Ou,Nu,mo,Iu,xl,Du,Su,Rl,Wu,Bu,Uu,fo,Hu,Ml,Qu,Vu,El,Ju,Ku,Gu,mn,hm,uo,fn,Bd,fa,Xu,Ud,Yu,mm,we,ua,Zu,Hd,eg,tg,Qd,og,ng,un,sg,ga,ag,Vd,rg,ig,lg,gn,dg,_a,cg,zl,pg,hg,mg,Xt,ba,fg,Jd,ug,gg,ka,ql,_g,Kd,bg,kg,Cl,vg,Gd,Tg,yg,_n,va,wg,Ta,$g,Xd,Fg,xg,Rg,bn,ya,Mg,Yd,Eg,zg,jl,wa,fm,go,kn,Zd,$a,qg,ec,Cg,um,Le,Fa,jg,xa,Pg,tc,Lg,Ag,Og,oc,Ng,Ig,vn,Dg,Ra,Sg,nc,Wg,Bg,Ug,Tn,Hg,Ma,Qg,Pl,Vg,Jg,Kg,Ll,Ea,gm,_o,yn,sc,za,Gg,ac,Xg,_m,Ae,qa,Yg,rc,Zg,e_,Ca,t_,Al,o_,n_,s_,ja,a_,Pa,r_,i_,l_,La,d_,ic,c_,p_,h_,Ue,m_,lc,f_,u_,dc,g_,__,cc,b_,k_,pc,v_,T_,hc,y_,w_,mc,$_,F_,x_,wn,R_,fc,M_,E_,Aa,z_,q_,yt,Oa,C_,bo,j_,Ol,P_,L_,uc,A_,O_,N_,$n,I_,Fn,bm,ko,xn,gc,Na,D_,_c,S_,km,et,Ia,W_,Da,B_,bc,U_,H_,Q_,Sa,V_,Nl,J_,K_,G_,Wa,X_,Ba,Y_,Z_,eb,wt,Ua,tb,vo,ob,Il,nb,sb,kc,ab,rb,ib,Rn,lb,Mn,vm,To,En,vc,Ha,db,Tc,cb,Tm,tt,Qa,pb,Va,hb,yc,mb,fb,ub,Ja,gb,Dl,_b,bb,kb,Ka,vb,Ga,Tb,yb,wb,rt,Xa,$b,yo,Fb,Sl,xb,Rb,wc,Mb,Eb,zb,zn,qb,qn,Cb,Cn,ym,wo,jn,$c,Ya,jb,Fc,Pb,wm,ot,Za,Lb,xc,Ab,Ob,er,Nb,Wl,Ib,Db,Sb,tr,Wb,or,Bb,Ub,Hb,Be,nr,Qb,$o,Vb,Bl,Jb,Kb,Rc,Gb,Xb,Yb,Pn,Zb,Ln,ek,An,tk,On,ok,Nn,$m,Fo,In,Mc,sr,nk,Ec,sk,Fm,nt,ar,ak,zc,rk,ik,rr,lk,Ul,dk,ck,pk,ir,hk,lr,mk,fk,uk,$t,dr,gk,xo,_k,Hl,bk,kk,qc,vk,Tk,yk,Dn,wk,Sn,xm,Ro,Wn,Cc,cr,$k,jc,Fk,Rm,st,pr,xk,Pc,Rk,Mk,hr,Ek,Ql,zk,qk,Ck,mr,jk,fr,Pk,Lk,Ak,it,ur,Ok,Mo,Nk,Vl,Ik,Dk,Lc,Sk,Wk,Bk,Bn,Uk,Un,Hk,Hn,Mm,Eo,Qn,Ac,gr,Qk,Oc,Vk,Em,at,_r,Jk,zo,Kk,Nc,Gk,Xk,Ic,Yk,Zk,ev,br,tv,Jl,ov,nv,sv,kr,av,vr,rv,iv,lv,lt,Tr,dv,qo,cv,Kl,pv,hv,Dc,mv,fv,uv,Vn,gv,Jn,_v,Kn,zm,Co,Gn,Sc,yr,bv,Wc,kv,qm,He,wr,vv,Bc,Tv,yv,$r,wv,Gl,$v,Fv,xv,Fr,Rv,xr,Mv,Ev,zv,Xn,qv,Ft,Rr,Cv,jo,jv,Xl,Pv,Lv,Uc,Av,Ov,Nv,Yn,Iv,Zn,Cm,Po,es,Hc,Mr,Dv,Qc,Sv,jm,Lo,Er,Wv,xt,zr,Bv,Ao,Uv,Yl,Hv,Qv,Vc,Vv,Jv,Kv,ts,Gv,os,Pm,Oo,ns,Jc,qr,Xv,Kc,Yv,Lm,Qe,Cr,Zv,jr,eT,Gc,tT,oT,nT,Pr,sT,Zl,aT,rT,iT,Lr,lT,Ar,dT,cT,pT,ss,hT,dt,Or,mT,No,fT,ed,uT,gT,Xc,_T,bT,kT,as,vT,rs,TT,is,Am,Io,ls,Yc,Nr,yT,Zc,wT,Om,Ve,Ir,$T,ep,FT,xT,Dr,RT,td,MT,ET,zT,Sr,qT,Wr,CT,jT,PT,ds,LT,ct,Br,AT,Do,OT,od,NT,IT,tp,DT,ST,WT,cs,BT,ps,UT,hs,Nm,So,ms,op,Ur,HT,np,QT,Im,Je,Hr,VT,sp,JT,KT,Qr,GT,nd,XT,YT,ZT,Vr,ey,Jr,ty,oy,ny,fs,sy,Rt,Kr,ay,Wo,ry,sd,iy,ly,ap,dy,cy,py,us,hy,gs,Dm,Bo,_s,rp,Gr,my,ip,fy,Sm,Ke,Xr,uy,lp,gy,_y,Yr,by,ad,ky,vy,Ty,Zr,yy,ei,wy,$y,Fy,bs,xy,pt,ti,Ry,Uo,My,rd,Ey,zy,dp,qy,Cy,jy,ks,Py,vs,Ly,Ts,Wm,Ho,ys,cp,oi,Ay,pp,Oy,Bm,Ge,ni,Ny,Qo,Iy,hp,Dy,Sy,mp,Wy,By,Uy,si,Hy,id,Qy,Vy,Jy,ai,Ky,ri,Gy,Xy,Yy,ws,Zy,ht,ii,ew,Vo,tw,ld,ow,nw,fp,sw,aw,rw,$s,iw,Fs,lw,xs,Um,Jo,Rs,up,li,dw,gp,cw,Hm,Oe,di,pw,_p,hw,mw,ci,fw,dd,uw,gw,_w,pi,bw,hi,kw,vw,Tw,bp,yw,ww,St,kp,mi,$w,Fw,vp,fi,xw,Rw,Tp,ui,Mw,Ew,yp,gi,zw,qw,Mt,_i,Cw,Ko,jw,wp,Pw,Lw,$p,Aw,Ow,Nw,Ms,Iw,Es,Qm,Go,zs,Fp,bi,Dw,xp,Sw,Vm,Ne,ki,Ww,vi,Bw,Rp,Uw,Hw,Qw,Ti,Vw,cd,Jw,Kw,Gw,yi,Xw,wi,Yw,Zw,e$,Mp,t$,o$,Wt,Ep,$i,n$,s$,zp,Fi,a$,r$,qp,xi,i$,l$,Cp,Ri,d$,c$,Et,Mi,p$,Xo,h$,jp,m$,f$,Pp,u$,g$,_$,qs,b$,Cs,Jm,Yo,js,Lp,Ei,k$,Ap,v$,Km,Ie,zi,T$,Op,y$,w$,qi,$$,pd,F$,x$,R$,Ci,M$,ji,E$,z$,q$,Np,C$,j$,Bt,Ip,Pi,P$,L$,Dp,Li,A$,O$,Sp,Ai,N$,I$,Wp,Oi,D$,S$,zt,Ni,W$,Zo,B$,Bp,U$,H$,Up,Q$,V$,J$,Ps,K$,Ls,Gm,en,As,Hp,Ii,G$,Qp,X$,Xm,De,Di,Y$,Vp,Z$,e1,Si,t1,hd,o1,n1,s1,Wi,a1,Bi,r1,i1,l1,Jp,d1,c1,Ut,Kp,Ui,p1,h1,Gp,Hi,m1,f1,Xp,Qi,u1,g1,Yp,Vi,_1,b1,qt,Ji,k1,tn,v1,Zp,T1,y1,eh,w1,$1,F1,Os,x1,Ns,Ym,on,Is,th,Ki,R1,oh,M1,Zm,Se,Gi,E1,nh,z1,q1,Xi,C1,md,j1,P1,L1,Yi,A1,Zi,O1,N1,I1,sh,D1,S1,Ht,ah,el,W1,B1,rh,tl,U1,H1,ih,ol,Q1,V1,lh,nl,J1,K1,Ct,sl,G1,nn,X1,dh,Y1,Z1,ch,e2,t2,o2,Ds,n2,Ss,ef,sn,Ws,ph,al,s2,hh,a2,tf,We,rl,r2,an,i2,mh,l2,d2,fh,c2,p2,h2,il,m2,fd,f2,u2,g2,ll,_2,dl,b2,k2,v2,uh,T2,y2,Qt,gh,cl,w2,$2,_h,pl,F2,x2,bh,hl,R2,M2,kh,ml,E2,z2,jt,fl,q2,rn,C2,vh,j2,P2,Th,L2,A2,O2,Bs,N2,Us,of;return l=new Fe({}),se=new Fe({}),pa=new Fe({}),ha=new P({props:{name:"class transformers.RobertaConfig",anchor:"transformers.RobertaConfig",parameters:[{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/configuration_roberta.py#L37"}}),mn=new te({props:{anchor:"transformers.RobertaConfig.example",$$slots:{default:[lM]},$$scope:{ctx:R}}}),fa=new Fe({}),ua=new P({props:{name:"class transformers.RobertaTokenizer",anchor:"transformers.RobertaTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
other word. (RoBERTa tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/tokenization_roberta.py#L103"}}),un=new te({props:{anchor:"transformers.RobertaTokenizer.example",$$slots:{default:[dM]},$$scope:{ctx:R}}}),gn=new _e({props:{$$slots:{default:[cM]},$$scope:{ctx:R}}}),ba=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/tokenization_roberta.py#L340",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),va=new P({props:{name:"get_special_tokens_mask",anchor:"transformers.RobertaTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/tokenization_roberta.py#L365",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ya=new P({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/tokenization_roberta.py#L392",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),wa=new P({props:{name:"save_vocabulary",anchor:"transformers.RobertaTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/tokenization_roberta.py#L311"}}),$a=new Fe({}),Fa=new P({props:{name:"class transformers.RobertaTokenizerFast",anchor:"transformers.RobertaTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RobertaTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether the post processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/tokenization_roberta_fast.py#L68"}}),vn=new te({props:{anchor:"transformers.RobertaTokenizerFast.example",$$slots:{default:[pM]},$$scope:{ctx:R}}}),Tn=new _e({props:{$$slots:{default:[hM]},$$scope:{ctx:R}}}),Ea=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RobertaTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/tokenization_roberta_fast.py#L270"}}),za=new Fe({}),qa=new P({props:{name:"class transformers.RobertaModel",anchor:"transformers.RobertaModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.RobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_roberta.py#L692"}}),Oa=new P({props:{name:"forward",anchor:"transformers.RobertaModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_roberta.py#L737",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$n=new _e({props:{$$slots:{default:[mM]},$$scope:{ctx:R}}}),Fn=new te({props:{anchor:"transformers.RobertaModel.forward.example",$$slots:{default:[fM]},$$scope:{ctx:R}}}),Na=new Fe({}),Ia=new P({props:{name:"class transformers.RobertaForCausalLM",anchor:"transformers.RobertaForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_roberta.py#L878"}}),Ua=new P({props:{name:"forward",anchor:"transformers.RobertaForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Tuple[typing.Tuple[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_roberta.py#L904",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Rn=new _e({props:{$$slots:{default:[uM]},$$scope:{ctx:R}}}),Mn=new te({props:{anchor:"transformers.RobertaForCausalLM.forward.example",$$slots:{default:[gM]},$$scope:{ctx:R}}}),Ha=new Fe({}),Qa=new P({props:{name:"class transformers.RobertaForMaskedLM",anchor:"transformers.RobertaForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_roberta.py#L1030"}}),Xa=new P({props:{name:"forward",anchor:"transformers.RobertaForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.RobertaForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_roberta.py#L1059",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),zn=new _e({props:{$$slots:{default:[_M]},$$scope:{ctx:R}}}),qn=new te({props:{anchor:"transformers.RobertaForMaskedLM.forward.example",$$slots:{default:[bM]},$$scope:{ctx:R}}}),Cn=new te({props:{anchor:"transformers.RobertaForMaskedLM.forward.example-2",$$slots:{default:[kM]},$$scope:{ctx:R}}}),Ya=new Fe({}),Za=new P({props:{name:"class transformers.RobertaForSequenceClassification",anchor:"transformers.RobertaForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_roberta.py#L1161"}}),nr=new P({props:{name:"forward",anchor:"transformers.RobertaForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_roberta.py#L1175",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Pn=new _e({props:{$$slots:{default:[vM]},$$scope:{ctx:R}}}),Ln=new te({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example",$$slots:{default:[TM]},$$scope:{ctx:R}}}),An=new te({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example-2",$$slots:{default:[yM]},$$scope:{ctx:R}}}),On=new te({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example-3",$$slots:{default:[wM]},$$scope:{ctx:R}}}),Nn=new te({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example-4",$$slots:{default:[$M]},$$scope:{ctx:R}}}),sr=new Fe({}),ar=new P({props:{name:"class transformers.RobertaForMultipleChoice",anchor:"transformers.RobertaForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_roberta.py#L1261"}}),dr=new P({props:{name:"forward",anchor:"transformers.RobertaForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_roberta.py#L1274",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Dn=new _e({props:{$$slots:{default:[FM]},$$scope:{ctx:R}}}),Sn=new te({props:{anchor:"transformers.RobertaForMultipleChoice.forward.example",$$slots:{default:[xM]},$$scope:{ctx:R}}}),cr=new Fe({}),pr=new P({props:{name:"class transformers.RobertaForTokenClassification",anchor:"transformers.RobertaForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_roberta.py#L1354"}}),ur=new P({props:{name:"forward",anchor:"transformers.RobertaForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_roberta.py#L1372",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bn=new _e({props:{$$slots:{default:[RM]},$$scope:{ctx:R}}}),Un=new te({props:{anchor:"transformers.RobertaForTokenClassification.forward.example",$$slots:{default:[MM]},$$scope:{ctx:R}}}),Hn=new te({props:{anchor:"transformers.RobertaForTokenClassification.forward.example-2",$$slots:{default:[EM]},$$scope:{ctx:R}}}),gr=new Fe({}),_r=new P({props:{name:"class transformers.RobertaForQuestionAnswering",anchor:"transformers.RobertaForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_roberta.py#L1463"}}),Tr=new P({props:{name:"forward",anchor:"transformers.RobertaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.RobertaForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_roberta.py#L1477",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vn=new _e({props:{$$slots:{default:[zM]},$$scope:{ctx:R}}}),Jn=new te({props:{anchor:"transformers.RobertaForQuestionAnswering.forward.example",$$slots:{default:[qM]},$$scope:{ctx:R}}}),Kn=new te({props:{anchor:"transformers.RobertaForQuestionAnswering.forward.example-2",$$slots:{default:[CM]},$$scope:{ctx:R}}}),yr=new Fe({}),wr=new P({props:{name:"class transformers.TFRobertaModel",anchor:"transformers.TFRobertaModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_tf_roberta.py#L909"}}),Xn=new _e({props:{$$slots:{default:[jM]},$$scope:{ctx:R}}}),Rr=new P({props:{name:"call",anchor:"transformers.TFRobertaModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_tf_roberta.py#L914",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Yn=new _e({props:{$$slots:{default:[PM]},$$scope:{ctx:R}}}),Zn=new te({props:{anchor:"transformers.TFRobertaModel.call.example",$$slots:{default:[LM]},$$scope:{ctx:R}}}),Mr=new Fe({}),Er=new P({props:{name:"class transformers.TFRobertaForCausalLM",anchor:"transformers.TFRobertaForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_tf_roberta.py#L1138"}}),zr=new P({props:{name:"call",anchor:"transformers.TFRobertaForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForCausalLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_tf_roberta.py#L1171",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ts=new _e({props:{$$slots:{default:[AM]},$$scope:{ctx:R}}}),os=new te({props:{anchor:"transformers.TFRobertaForCausalLM.call.example",$$slots:{default:[OM]},$$scope:{ctx:R}}}),qr=new Fe({}),Cr=new P({props:{name:"class transformers.TFRobertaForMaskedLM",anchor:"transformers.TFRobertaForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_tf_roberta.py#L1053"}}),ss=new _e({props:{$$slots:{default:[NM]},$$scope:{ctx:R}}}),Or=new P({props:{name:"call",anchor:"transformers.TFRobertaForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_tf_roberta.py#L1070",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),as=new _e({props:{$$slots:{default:[IM]},$$scope:{ctx:R}}}),rs=new te({props:{anchor:"transformers.TFRobertaForMaskedLM.call.example",$$slots:{default:[DM]},$$scope:{ctx:R}}}),is=new te({props:{anchor:"transformers.TFRobertaForMaskedLM.call.example-2",$$slots:{default:[SM]},$$scope:{ctx:R}}}),Nr=new Fe({}),Ir=new P({props:{name:"class transformers.TFRobertaForSequenceClassification",anchor:"transformers.TFRobertaForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_tf_roberta.py#L1318"}}),ds=new _e({props:{$$slots:{default:[WM]},$$scope:{ctx:R}}}),Br=new P({props:{name:"call",anchor:"transformers.TFRobertaForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_tf_roberta.py#L1329",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),cs=new _e({props:{$$slots:{default:[BM]},$$scope:{ctx:R}}}),ps=new te({props:{anchor:"transformers.TFRobertaForSequenceClassification.call.example",$$slots:{default:[UM]},$$scope:{ctx:R}}}),hs=new te({props:{anchor:"transformers.TFRobertaForSequenceClassification.call.example-2",$$slots:{default:[HM]},$$scope:{ctx:R}}}),Ur=new Fe({}),Hr=new P({props:{name:"class transformers.TFRobertaForMultipleChoice",anchor:"transformers.TFRobertaForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_tf_roberta.py#L1402"}}),fs=new _e({props:{$$slots:{default:[QM]},$$scope:{ctx:R}}}),Kr=new P({props:{name:"call",anchor:"transformers.TFRobertaForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_tf_roberta.py#L1426",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),us=new _e({props:{$$slots:{default:[VM]},$$scope:{ctx:R}}}),gs=new te({props:{anchor:"transformers.TFRobertaForMultipleChoice.call.example",$$slots:{default:[JM]},$$scope:{ctx:R}}}),Gr=new Fe({}),Xr=new P({props:{name:"class transformers.TFRobertaForTokenClassification",anchor:"transformers.TFRobertaForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_tf_roberta.py#L1523"}}),bs=new _e({props:{$$slots:{default:[KM]},$$scope:{ctx:R}}}),ti=new P({props:{name:"call",anchor:"transformers.TFRobertaForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_tf_roberta.py#L1541",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ks=new _e({props:{$$slots:{default:[GM]},$$scope:{ctx:R}}}),vs=new te({props:{anchor:"transformers.TFRobertaForTokenClassification.call.example",$$slots:{default:[XM]},$$scope:{ctx:R}}}),Ts=new te({props:{anchor:"transformers.TFRobertaForTokenClassification.call.example-2",$$slots:{default:[YM]},$$scope:{ctx:R}}}),oi=new Fe({}),ni=new P({props:{name:"class transformers.TFRobertaForQuestionAnswering",anchor:"transformers.TFRobertaForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_tf_roberta.py#L1614"}}),ws=new _e({props:{$$slots:{default:[ZM]},$$scope:{ctx:R}}}),ii=new P({props:{name:"call",anchor:"transformers.TFRobertaForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_tf_roberta.py#L1627",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$s=new _e({props:{$$slots:{default:[eE]},$$scope:{ctx:R}}}),Fs=new te({props:{anchor:"transformers.TFRobertaForQuestionAnswering.call.example",$$slots:{default:[tE]},$$scope:{ctx:R}}}),xs=new te({props:{anchor:"transformers.TFRobertaForQuestionAnswering.call.example-2",$$slots:{default:[oE]},$$scope:{ctx:R}}}),li=new Fe({}),di=new P({props:{name:"class transformers.FlaxRobertaModel",anchor:"transformers.FlaxRobertaModel",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_flax_roberta.py#L738"}}),_i=new P({props:{name:"__call__",anchor:"transformers.FlaxRobertaModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_flax_roberta.py#L620",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ms=new _e({props:{$$slots:{default:[nE]},$$scope:{ctx:R}}}),Es=new te({props:{anchor:"transformers.FlaxRobertaModel.__call__.example",$$slots:{default:[sE]},$$scope:{ctx:R}}}),bi=new Fe({}),ki=new P({props:{name:"class transformers.FlaxRobertaForMaskedLM",anchor:"transformers.FlaxRobertaForMaskedLM",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_flax_roberta.py#L800"}}),Mi=new P({props:{name:"__call__",anchor:"transformers.FlaxRobertaForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_flax_roberta.py#L620",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qs=new _e({props:{$$slots:{default:[aE]},$$scope:{ctx:R}}}),Cs=new te({props:{anchor:"transformers.FlaxRobertaForMaskedLM.__call__.example",$$slots:{default:[rE]},$$scope:{ctx:R}}}),Ei=new Fe({}),zi=new P({props:{name:"class transformers.FlaxRobertaForSequenceClassification",anchor:"transformers.FlaxRobertaForSequenceClassification",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_flax_roberta.py#L867"}}),Ni=new P({props:{name:"__call__",anchor:"transformers.FlaxRobertaForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_flax_roberta.py#L620",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ps=new _e({props:{$$slots:{default:[iE]},$$scope:{ctx:R}}}),Ls=new te({props:{anchor:"transformers.FlaxRobertaForSequenceClassification.__call__.example",$$slots:{default:[lE]},$$scope:{ctx:R}}}),Ii=new Fe({}),Di=new P({props:{name:"class transformers.FlaxRobertaForMultipleChoice",anchor:"transformers.FlaxRobertaForMultipleChoice",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_flax_roberta.py#L944"}}),Ji=new P({props:{name:"__call__",anchor:"transformers.FlaxRobertaForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_flax_roberta.py#L620",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Os=new _e({props:{$$slots:{default:[dE]},$$scope:{ctx:R}}}),Ns=new te({props:{anchor:"transformers.FlaxRobertaForMultipleChoice.__call__.example",$$slots:{default:[cE]},$$scope:{ctx:R}}}),Ki=new Fe({}),Gi=new P({props:{name:"class transformers.FlaxRobertaForTokenClassification",anchor:"transformers.FlaxRobertaForTokenClassification",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_flax_roberta.py#L1021"}}),sl=new P({props:{name:"__call__",anchor:"transformers.FlaxRobertaForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_flax_roberta.py#L620",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ds=new _e({props:{$$slots:{default:[pE]},$$scope:{ctx:R}}}),Ss=new te({props:{anchor:"transformers.FlaxRobertaForTokenClassification.__call__.example",$$slots:{default:[hE]},$$scope:{ctx:R}}}),al=new Fe({}),rl=new P({props:{name:"class transformers.FlaxRobertaForQuestionAnswering",anchor:"transformers.FlaxRobertaForQuestionAnswering",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_flax_roberta.py#L1093"}}),fl=new P({props:{name:"__call__",anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/roberta/modeling_flax_roberta.py#L620",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bs=new _e({props:{$$slots:{default:[mE]},$$scope:{ctx:R}}}),Us=new te({props:{anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__.example",$$slots:{default:[fE]},$$scope:{ctx:R}}}),{c(){d=n("meta"),g=p(),c=n("h1"),m=n("a"),_=n("span"),T(l.$$.fragment),f=p(),M=n("span"),Y=r("RoBERTa"),I=p(),z=n("h2"),X=n("a"),D=n("span"),T(se.$$.fragment),be=p(),S=n("span"),ke=r("Overview"),fe=p(),K=n("p"),A=r("The RoBERTa model was proposed in "),ae=n("a"),Z=r("RoBERTa: A Robustly Optimized BERT Pretraining Approach"),q=r(` by Yinhan Liu, Myle Ott, Naman Goyal, Jingfei Du, Mandar Joshi, Danqi Chen, Omer
Levy, Mike Lewis, Luke Zettlemoyer, Veselin Stoyanov. It is based on Google\u2019s BERT model released in 2018.`),j=p(),ie=n("p"),U=r(`It builds on BERT and modifies key hyperparameters, removing the next-sentence pretraining objective and training with
much larger mini-batches and learning rates.`),ue=p(),le=n("p"),H=r("The abstract from the paper is the following:"),ge=p(),de=n("p"),C=n("em"),ve=r(`Language model pretraining has led to significant performance gains but careful comparison between different
approaches is challenging. Training is computationally expensive, often done on private datasets of different sizes,
and, as we will show, hyperparameter choices have significant impact on the final results. We present a replication
study of BERT pretraining (Devlin et al., 2019) that carefully measures the impact of many key hyperparameters and
training data size. We find that BERT was significantly undertrained, and can match or exceed the performance of every
model published after it. Our best model achieves state-of-the-art results on GLUE, RACE and SQuAD. These results
highlight the importance of previously overlooked design choices, and raise questions about the source of recently
reported improvements. We release our models and code.`),W=p(),ce=n("p"),Te=r("Tips:"),B=p(),G=n("ul"),re=n("li"),O=r("This implementation is the same as "),pe=n("a"),Q=r("BertModel"),ye=r(` with a tiny embeddings tweak as well as a setup
for Roberta pretrained models.`),v=p(),E=n("li"),ee=r(`RoBERTa has the same architecture as BERT, but uses a byte-level BPE as a tokenizer (same as GPT-2) and uses a
different pretraining scheme.`),Ee=p(),me=n("li"),N=r("RoBERTa doesn\u2019t have "),Re=n("code"),ze=r("token_type_ids"),qe=r(`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),L=n("code"),V=r("tokenizer.sep_token"),Ce=r(" (or "),Me=n("code"),J=r("</s>"),je=r(")"),Pe=p(),he=n("li"),xe=n("a"),Tu=r("CamemBERT"),yu=r(" is a wrapper around RoBERTa. Refer to this page for usage examples."),dm=p(),Gt=n("p"),wu=r("This model was contributed by "),da=n("a"),$u=r("julien-c"),Fu=r(". The original code can be found "),ca=n("a"),xu=r("here"),Ru=r("."),cm=p(),ho=n("h2"),hn=n("a"),Sd=n("span"),T(pa.$$.fragment),Mu=p(),Wd=n("span"),Eu=r("RobertaConfig"),pm=p(),Ze=n("div"),T(ha.$$.fragment),zu=p(),Dt=n("p"),qu=r("This is the configuration class to store the configuration of a "),$l=n("a"),Cu=r("RobertaModel"),ju=r(" or a "),Fl=n("a"),Pu=r("TFRobertaModel"),Lu=r(`. It is
used to instantiate a RoBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the RoBERTa
`),ma=n("a"),Au=r("roberta-base"),Ou=r(" architecture."),Nu=p(),mo=n("p"),Iu=r("Configuration objects inherit from "),xl=n("a"),Du=r("PretrainedConfig"),Su=r(` and can be used to control the model outputs. Read the
documentation from `),Rl=n("a"),Wu=r("PretrainedConfig"),Bu=r(" for more information."),Uu=p(),fo=n("p"),Hu=r("The "),Ml=n("a"),Qu=r("RobertaConfig"),Vu=r(" class directly inherits "),El=n("a"),Ju=r("BertConfig"),Ku=r(`. It reuses the same defaults. Please check the parent
class for more information.`),Gu=p(),T(mn.$$.fragment),hm=p(),uo=n("h2"),fn=n("a"),Bd=n("span"),T(fa.$$.fragment),Xu=p(),Ud=n("span"),Yu=r("RobertaTokenizer"),mm=p(),we=n("div"),T(ua.$$.fragment),Zu=p(),Hd=n("p"),eg=r("Constructs a RoBERTa tokenizer, derived from the GPT-2 tokenizer, using byte-level Byte-Pair-Encoding."),tg=p(),Qd=n("p"),og=r("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),ng=p(),T(un.$$.fragment),sg=p(),ga=n("p"),ag=r("You can get around that behavior by passing "),Vd=n("code"),rg=r("add_prefix_space=True"),ig=r(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),lg=p(),T(gn.$$.fragment),dg=p(),_a=n("p"),cg=r("This tokenizer inherits from "),zl=n("a"),pg=r("PreTrainedTokenizer"),hg=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),mg=p(),Xt=n("div"),T(ba.$$.fragment),fg=p(),Jd=n("p"),ug=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoBERTa sequence has the following format:`),gg=p(),ka=n("ul"),ql=n("li"),_g=r("single sequence: "),Kd=n("code"),bg=r("<s> X </s>"),kg=p(),Cl=n("li"),vg=r("pair of sequences: "),Gd=n("code"),Tg=r("<s> A </s></s> B </s>"),yg=p(),_n=n("div"),T(va.$$.fragment),wg=p(),Ta=n("p"),$g=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Xd=n("code"),Fg=r("prepare_for_model"),xg=r(" method."),Rg=p(),bn=n("div"),T(ya.$$.fragment),Mg=p(),Yd=n("p"),Eg=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. RoBERTa does not
make use of token type ids, therefore a list of zeros is returned.`),zg=p(),jl=n("div"),T(wa.$$.fragment),fm=p(),go=n("h2"),kn=n("a"),Zd=n("span"),T($a.$$.fragment),qg=p(),ec=n("span"),Cg=r("RobertaTokenizerFast"),um=p(),Le=n("div"),T(Fa.$$.fragment),jg=p(),xa=n("p"),Pg=r("Construct a \u201Cfast\u201D RoBERTa tokenizer (backed by HuggingFace\u2019s "),tc=n("em"),Lg=r("tokenizers"),Ag=r(` library), derived from the GPT-2
tokenizer, using byte-level Byte-Pair-Encoding.`),Og=p(),oc=n("p"),Ng=r("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Ig=p(),T(vn.$$.fragment),Dg=p(),Ra=n("p"),Sg=r("You can get around that behavior by passing "),nc=n("code"),Wg=r("add_prefix_space=True"),Bg=r(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Ug=p(),T(Tn.$$.fragment),Hg=p(),Ma=n("p"),Qg=r("This tokenizer inherits from "),Pl=n("a"),Vg=r("PreTrainedTokenizerFast"),Jg=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Kg=p(),Ll=n("div"),T(Ea.$$.fragment),gm=p(),_o=n("h2"),yn=n("a"),sc=n("span"),T(za.$$.fragment),Gg=p(),ac=n("span"),Xg=r("RobertaModel"),_m=p(),Ae=n("div"),T(qa.$$.fragment),Yg=p(),rc=n("p"),Zg=r("The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),e_=p(),Ca=n("p"),t_=r("This model inherits from "),Al=n("a"),o_=r("PreTrainedModel"),n_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),s_=p(),ja=n("p"),a_=r("This model is also a PyTorch "),Pa=n("a"),r_=r("torch.nn.Module"),i_=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),l_=p(),La=n("p"),d_=r(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),ic=n("em"),c_=r(`Attention is
all you need`),p_=r(`_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`),h_=p(),Ue=n("p"),m_=r("To behave as an decoder the model needs to be initialized with the "),lc=n("code"),f_=r("is_decoder"),u_=r(` argument of the configuration set
to `),dc=n("code"),g_=r("True"),__=r(". To be used in a Seq2Seq model, the model needs to initialized with both "),cc=n("code"),b_=r("is_decoder"),k_=r(` argument and
`),pc=n("code"),v_=r("add_cross_attention"),T_=r(" set to "),hc=n("code"),y_=r("True"),w_=r("; an "),mc=n("code"),$_=r("encoder_hidden_states"),F_=r(" is then expected as an input to the forward pass."),x_=p(),wn=n("p"),R_=r(".. _"),fc=n("em"),M_=r("Attention is all you need"),E_=r(": "),Aa=n("a"),z_=r("https://arxiv.org/abs/1706.03762"),q_=p(),yt=n("div"),T(Oa.$$.fragment),C_=p(),bo=n("p"),j_=r("The "),Ol=n("a"),P_=r("RobertaModel"),L_=r(" forward method, overrides the "),uc=n("code"),A_=r("__call__"),O_=r(" special method."),N_=p(),T($n.$$.fragment),I_=p(),T(Fn.$$.fragment),bm=p(),ko=n("h2"),xn=n("a"),gc=n("span"),T(Na.$$.fragment),D_=p(),_c=n("span"),S_=r("RobertaForCausalLM"),km=p(),et=n("div"),T(Ia.$$.fragment),W_=p(),Da=n("p"),B_=r("RoBERTa Model with a "),bc=n("code"),U_=r("language modeling"),H_=r(" head on top for CLM fine-tuning."),Q_=p(),Sa=n("p"),V_=r("This model inherits from "),Nl=n("a"),J_=r("PreTrainedModel"),K_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),G_=p(),Wa=n("p"),X_=r("This model is also a PyTorch "),Ba=n("a"),Y_=r("torch.nn.Module"),Z_=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),eb=p(),wt=n("div"),T(Ua.$$.fragment),tb=p(),vo=n("p"),ob=r("The "),Il=n("a"),nb=r("RobertaForCausalLM"),sb=r(" forward method, overrides the "),kc=n("code"),ab=r("__call__"),rb=r(" special method."),ib=p(),T(Rn.$$.fragment),lb=p(),T(Mn.$$.fragment),vm=p(),To=n("h2"),En=n("a"),vc=n("span"),T(Ha.$$.fragment),db=p(),Tc=n("span"),cb=r("RobertaForMaskedLM"),Tm=p(),tt=n("div"),T(Qa.$$.fragment),pb=p(),Va=n("p"),hb=r("RoBERTa Model with a "),yc=n("code"),mb=r("language modeling"),fb=r(" head on top."),ub=p(),Ja=n("p"),gb=r("This model inherits from "),Dl=n("a"),_b=r("PreTrainedModel"),bb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kb=p(),Ka=n("p"),vb=r("This model is also a PyTorch "),Ga=n("a"),Tb=r("torch.nn.Module"),yb=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wb=p(),rt=n("div"),T(Xa.$$.fragment),$b=p(),yo=n("p"),Fb=r("The "),Sl=n("a"),xb=r("RobertaForMaskedLM"),Rb=r(" forward method, overrides the "),wc=n("code"),Mb=r("__call__"),Eb=r(" special method."),zb=p(),T(zn.$$.fragment),qb=p(),T(qn.$$.fragment),Cb=p(),T(Cn.$$.fragment),ym=p(),wo=n("h2"),jn=n("a"),$c=n("span"),T(Ya.$$.fragment),jb=p(),Fc=n("span"),Pb=r("RobertaForSequenceClassification"),wm=p(),ot=n("div"),T(Za.$$.fragment),Lb=p(),xc=n("p"),Ab=r(`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Ob=p(),er=n("p"),Nb=r("This model inherits from "),Wl=n("a"),Ib=r("PreTrainedModel"),Db=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sb=p(),tr=n("p"),Wb=r("This model is also a PyTorch "),or=n("a"),Bb=r("torch.nn.Module"),Ub=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hb=p(),Be=n("div"),T(nr.$$.fragment),Qb=p(),$o=n("p"),Vb=r("The "),Bl=n("a"),Jb=r("RobertaForSequenceClassification"),Kb=r(" forward method, overrides the "),Rc=n("code"),Gb=r("__call__"),Xb=r(" special method."),Yb=p(),T(Pn.$$.fragment),Zb=p(),T(Ln.$$.fragment),ek=p(),T(An.$$.fragment),tk=p(),T(On.$$.fragment),ok=p(),T(Nn.$$.fragment),$m=p(),Fo=n("h2"),In=n("a"),Mc=n("span"),T(sr.$$.fragment),nk=p(),Ec=n("span"),sk=r("RobertaForMultipleChoice"),Fm=p(),nt=n("div"),T(ar.$$.fragment),ak=p(),zc=n("p"),rk=r(`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),ik=p(),rr=n("p"),lk=r("This model inherits from "),Ul=n("a"),dk=r("PreTrainedModel"),ck=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pk=p(),ir=n("p"),hk=r("This model is also a PyTorch "),lr=n("a"),mk=r("torch.nn.Module"),fk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),uk=p(),$t=n("div"),T(dr.$$.fragment),gk=p(),xo=n("p"),_k=r("The "),Hl=n("a"),bk=r("RobertaForMultipleChoice"),kk=r(" forward method, overrides the "),qc=n("code"),vk=r("__call__"),Tk=r(" special method."),yk=p(),T(Dn.$$.fragment),wk=p(),T(Sn.$$.fragment),xm=p(),Ro=n("h2"),Wn=n("a"),Cc=n("span"),T(cr.$$.fragment),$k=p(),jc=n("span"),Fk=r("RobertaForTokenClassification"),Rm=p(),st=n("div"),T(pr.$$.fragment),xk=p(),Pc=n("p"),Rk=r(`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Mk=p(),hr=n("p"),Ek=r("This model inherits from "),Ql=n("a"),zk=r("PreTrainedModel"),qk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ck=p(),mr=n("p"),jk=r("This model is also a PyTorch "),fr=n("a"),Pk=r("torch.nn.Module"),Lk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ak=p(),it=n("div"),T(ur.$$.fragment),Ok=p(),Mo=n("p"),Nk=r("The "),Vl=n("a"),Ik=r("RobertaForTokenClassification"),Dk=r(" forward method, overrides the "),Lc=n("code"),Sk=r("__call__"),Wk=r(" special method."),Bk=p(),T(Bn.$$.fragment),Uk=p(),T(Un.$$.fragment),Hk=p(),T(Hn.$$.fragment),Mm=p(),Eo=n("h2"),Qn=n("a"),Ac=n("span"),T(gr.$$.fragment),Qk=p(),Oc=n("span"),Vk=r("RobertaForQuestionAnswering"),Em=p(),at=n("div"),T(_r.$$.fragment),Jk=p(),zo=n("p"),Kk=r(`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Nc=n("code"),Gk=r("span start logits"),Xk=r(" and "),Ic=n("code"),Yk=r("span end logits"),Zk=r(")."),ev=p(),br=n("p"),tv=r("This model inherits from "),Jl=n("a"),ov=r("PreTrainedModel"),nv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sv=p(),kr=n("p"),av=r("This model is also a PyTorch "),vr=n("a"),rv=r("torch.nn.Module"),iv=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lv=p(),lt=n("div"),T(Tr.$$.fragment),dv=p(),qo=n("p"),cv=r("The "),Kl=n("a"),pv=r("RobertaForQuestionAnswering"),hv=r(" forward method, overrides the "),Dc=n("code"),mv=r("__call__"),fv=r(" special method."),uv=p(),T(Vn.$$.fragment),gv=p(),T(Jn.$$.fragment),_v=p(),T(Kn.$$.fragment),zm=p(),Co=n("h2"),Gn=n("a"),Sc=n("span"),T(yr.$$.fragment),bv=p(),Wc=n("span"),kv=r("TFRobertaModel"),qm=p(),He=n("div"),T(wr.$$.fragment),vv=p(),Bc=n("p"),Tv=r("The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),yv=p(),$r=n("p"),wv=r("This model inherits from "),Gl=n("a"),$v=r("TFPreTrainedModel"),Fv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xv=p(),Fr=n("p"),Rv=r("This model is also a "),xr=n("a"),Mv=r("tf.keras.Model"),Ev=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zv=p(),T(Xn.$$.fragment),qv=p(),Ft=n("div"),T(Rr.$$.fragment),Cv=p(),jo=n("p"),jv=r("The "),Xl=n("a"),Pv=r("TFRobertaModel"),Lv=r(" forward method, overrides the "),Uc=n("code"),Av=r("__call__"),Ov=r(" special method."),Nv=p(),T(Yn.$$.fragment),Iv=p(),T(Zn.$$.fragment),Cm=p(),Po=n("h2"),es=n("a"),Hc=n("span"),T(Mr.$$.fragment),Dv=p(),Qc=n("span"),Sv=r("TFRobertaForCausalLM"),jm=p(),Lo=n("div"),T(Er.$$.fragment),Wv=p(),xt=n("div"),T(zr.$$.fragment),Bv=p(),Ao=n("p"),Uv=r("The "),Yl=n("a"),Hv=r("TFRobertaForCausalLM"),Qv=r(" forward method, overrides the "),Vc=n("code"),Vv=r("__call__"),Jv=r(" special method."),Kv=p(),T(ts.$$.fragment),Gv=p(),T(os.$$.fragment),Pm=p(),Oo=n("h2"),ns=n("a"),Jc=n("span"),T(qr.$$.fragment),Xv=p(),Kc=n("span"),Yv=r("TFRobertaForMaskedLM"),Lm=p(),Qe=n("div"),T(Cr.$$.fragment),Zv=p(),jr=n("p"),eT=r("RoBERTa Model with a "),Gc=n("code"),tT=r("language modeling"),oT=r(" head on top."),nT=p(),Pr=n("p"),sT=r("This model inherits from "),Zl=n("a"),aT=r("TFPreTrainedModel"),rT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),iT=p(),Lr=n("p"),lT=r("This model is also a "),Ar=n("a"),dT=r("tf.keras.Model"),cT=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pT=p(),T(ss.$$.fragment),hT=p(),dt=n("div"),T(Or.$$.fragment),mT=p(),No=n("p"),fT=r("The "),ed=n("a"),uT=r("TFRobertaForMaskedLM"),gT=r(" forward method, overrides the "),Xc=n("code"),_T=r("__call__"),bT=r(" special method."),kT=p(),T(as.$$.fragment),vT=p(),T(rs.$$.fragment),TT=p(),T(is.$$.fragment),Am=p(),Io=n("h2"),ls=n("a"),Yc=n("span"),T(Nr.$$.fragment),yT=p(),Zc=n("span"),wT=r("TFRobertaForSequenceClassification"),Om=p(),Ve=n("div"),T(Ir.$$.fragment),$T=p(),ep=n("p"),FT=r(`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),xT=p(),Dr=n("p"),RT=r("This model inherits from "),td=n("a"),MT=r("TFPreTrainedModel"),ET=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zT=p(),Sr=n("p"),qT=r("This model is also a "),Wr=n("a"),CT=r("tf.keras.Model"),jT=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),PT=p(),T(ds.$$.fragment),LT=p(),ct=n("div"),T(Br.$$.fragment),AT=p(),Do=n("p"),OT=r("The "),od=n("a"),NT=r("TFRobertaForSequenceClassification"),IT=r(" forward method, overrides the "),tp=n("code"),DT=r("__call__"),ST=r(" special method."),WT=p(),T(cs.$$.fragment),BT=p(),T(ps.$$.fragment),UT=p(),T(hs.$$.fragment),Nm=p(),So=n("h2"),ms=n("a"),op=n("span"),T(Ur.$$.fragment),HT=p(),np=n("span"),QT=r("TFRobertaForMultipleChoice"),Im=p(),Je=n("div"),T(Hr.$$.fragment),VT=p(),sp=n("p"),JT=r(`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),KT=p(),Qr=n("p"),GT=r("This model inherits from "),nd=n("a"),XT=r("TFPreTrainedModel"),YT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ZT=p(),Vr=n("p"),ey=r("This model is also a "),Jr=n("a"),ty=r("tf.keras.Model"),oy=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ny=p(),T(fs.$$.fragment),sy=p(),Rt=n("div"),T(Kr.$$.fragment),ay=p(),Wo=n("p"),ry=r("The "),sd=n("a"),iy=r("TFRobertaForMultipleChoice"),ly=r(" forward method, overrides the "),ap=n("code"),dy=r("__call__"),cy=r(" special method."),py=p(),T(us.$$.fragment),hy=p(),T(gs.$$.fragment),Dm=p(),Bo=n("h2"),_s=n("a"),rp=n("span"),T(Gr.$$.fragment),my=p(),ip=n("span"),fy=r("TFRobertaForTokenClassification"),Sm=p(),Ke=n("div"),T(Xr.$$.fragment),uy=p(),lp=n("p"),gy=r(`RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),_y=p(),Yr=n("p"),by=r("This model inherits from "),ad=n("a"),ky=r("TFPreTrainedModel"),vy=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ty=p(),Zr=n("p"),yy=r("This model is also a "),ei=n("a"),wy=r("tf.keras.Model"),$y=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fy=p(),T(bs.$$.fragment),xy=p(),pt=n("div"),T(ti.$$.fragment),Ry=p(),Uo=n("p"),My=r("The "),rd=n("a"),Ey=r("TFRobertaForTokenClassification"),zy=r(" forward method, overrides the "),dp=n("code"),qy=r("__call__"),Cy=r(" special method."),jy=p(),T(ks.$$.fragment),Py=p(),T(vs.$$.fragment),Ly=p(),T(Ts.$$.fragment),Wm=p(),Ho=n("h2"),ys=n("a"),cp=n("span"),T(oi.$$.fragment),Ay=p(),pp=n("span"),Oy=r("TFRobertaForQuestionAnswering"),Bm=p(),Ge=n("div"),T(ni.$$.fragment),Ny=p(),Qo=n("p"),Iy=r(`RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),hp=n("code"),Dy=r("span start logits"),Sy=r(" and "),mp=n("code"),Wy=r("span end logits"),By=r(")."),Uy=p(),si=n("p"),Hy=r("This model inherits from "),id=n("a"),Qy=r("TFPreTrainedModel"),Vy=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jy=p(),ai=n("p"),Ky=r("This model is also a "),ri=n("a"),Gy=r("tf.keras.Model"),Xy=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yy=p(),T(ws.$$.fragment),Zy=p(),ht=n("div"),T(ii.$$.fragment),ew=p(),Vo=n("p"),tw=r("The "),ld=n("a"),ow=r("TFRobertaForQuestionAnswering"),nw=r(" forward method, overrides the "),fp=n("code"),sw=r("__call__"),aw=r(" special method."),rw=p(),T($s.$$.fragment),iw=p(),T(Fs.$$.fragment),lw=p(),T(xs.$$.fragment),Um=p(),Jo=n("h2"),Rs=n("a"),up=n("span"),T(li.$$.fragment),dw=p(),gp=n("span"),cw=r("FlaxRobertaModel"),Hm=p(),Oe=n("div"),T(di.$$.fragment),pw=p(),_p=n("p"),hw=r("The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),mw=p(),ci=n("p"),fw=r("This model inherits from "),dd=n("a"),uw=r("FlaxPreTrainedModel"),gw=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),_w=p(),pi=n("p"),bw=r("This model is also a Flax Linen "),hi=n("a"),kw=r("flax.linen.Module"),vw=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Tw=p(),bp=n("p"),yw=r("Finally, this model supports inherent JAX features such as:"),ww=p(),St=n("ul"),kp=n("li"),mi=n("a"),$w=r("Just-In-Time (JIT) compilation"),Fw=p(),vp=n("li"),fi=n("a"),xw=r("Automatic Differentiation"),Rw=p(),Tp=n("li"),ui=n("a"),Mw=r("Vectorization"),Ew=p(),yp=n("li"),gi=n("a"),zw=r("Parallelization"),qw=p(),Mt=n("div"),T(_i.$$.fragment),Cw=p(),Ko=n("p"),jw=r("The "),wp=n("code"),Pw=r("FlaxRobertaPreTrainedModel"),Lw=r(" forward method, overrides the "),$p=n("code"),Aw=r("__call__"),Ow=r(" special method."),Nw=p(),T(Ms.$$.fragment),Iw=p(),T(Es.$$.fragment),Qm=p(),Go=n("h2"),zs=n("a"),Fp=n("span"),T(bi.$$.fragment),Dw=p(),xp=n("span"),Sw=r("FlaxRobertaForMaskedLM"),Vm=p(),Ne=n("div"),T(ki.$$.fragment),Ww=p(),vi=n("p"),Bw=r("RoBERTa Model with a "),Rp=n("code"),Uw=r("language modeling"),Hw=r(" head on top."),Qw=p(),Ti=n("p"),Vw=r("This model inherits from "),cd=n("a"),Jw=r("FlaxPreTrainedModel"),Kw=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Gw=p(),yi=n("p"),Xw=r("This model is also a Flax Linen "),wi=n("a"),Yw=r("flax.linen.Module"),Zw=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),e$=p(),Mp=n("p"),t$=r("Finally, this model supports inherent JAX features such as:"),o$=p(),Wt=n("ul"),Ep=n("li"),$i=n("a"),n$=r("Just-In-Time (JIT) compilation"),s$=p(),zp=n("li"),Fi=n("a"),a$=r("Automatic Differentiation"),r$=p(),qp=n("li"),xi=n("a"),i$=r("Vectorization"),l$=p(),Cp=n("li"),Ri=n("a"),d$=r("Parallelization"),c$=p(),Et=n("div"),T(Mi.$$.fragment),p$=p(),Xo=n("p"),h$=r("The "),jp=n("code"),m$=r("FlaxRobertaPreTrainedModel"),f$=r(" forward method, overrides the "),Pp=n("code"),u$=r("__call__"),g$=r(" special method."),_$=p(),T(qs.$$.fragment),b$=p(),T(Cs.$$.fragment),Jm=p(),Yo=n("h2"),js=n("a"),Lp=n("span"),T(Ei.$$.fragment),k$=p(),Ap=n("span"),v$=r("FlaxRobertaForSequenceClassification"),Km=p(),Ie=n("div"),T(zi.$$.fragment),T$=p(),Op=n("p"),y$=r(`Roberta Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),w$=p(),qi=n("p"),$$=r("This model inherits from "),pd=n("a"),F$=r("FlaxPreTrainedModel"),x$=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),R$=p(),Ci=n("p"),M$=r("This model is also a Flax Linen "),ji=n("a"),E$=r("flax.linen.Module"),z$=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),q$=p(),Np=n("p"),C$=r("Finally, this model supports inherent JAX features such as:"),j$=p(),Bt=n("ul"),Ip=n("li"),Pi=n("a"),P$=r("Just-In-Time (JIT) compilation"),L$=p(),Dp=n("li"),Li=n("a"),A$=r("Automatic Differentiation"),O$=p(),Sp=n("li"),Ai=n("a"),N$=r("Vectorization"),I$=p(),Wp=n("li"),Oi=n("a"),D$=r("Parallelization"),S$=p(),zt=n("div"),T(Ni.$$.fragment),W$=p(),Zo=n("p"),B$=r("The "),Bp=n("code"),U$=r("FlaxRobertaPreTrainedModel"),H$=r(" forward method, overrides the "),Up=n("code"),Q$=r("__call__"),V$=r(" special method."),J$=p(),T(Ps.$$.fragment),K$=p(),T(Ls.$$.fragment),Gm=p(),en=n("h2"),As=n("a"),Hp=n("span"),T(Ii.$$.fragment),G$=p(),Qp=n("span"),X$=r("FlaxRobertaForMultipleChoice"),Xm=p(),De=n("div"),T(Di.$$.fragment),Y$=p(),Vp=n("p"),Z$=r(`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),e1=p(),Si=n("p"),t1=r("This model inherits from "),hd=n("a"),o1=r("FlaxPreTrainedModel"),n1=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),s1=p(),Wi=n("p"),a1=r("This model is also a Flax Linen "),Bi=n("a"),r1=r("flax.linen.Module"),i1=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),l1=p(),Jp=n("p"),d1=r("Finally, this model supports inherent JAX features such as:"),c1=p(),Ut=n("ul"),Kp=n("li"),Ui=n("a"),p1=r("Just-In-Time (JIT) compilation"),h1=p(),Gp=n("li"),Hi=n("a"),m1=r("Automatic Differentiation"),f1=p(),Xp=n("li"),Qi=n("a"),u1=r("Vectorization"),g1=p(),Yp=n("li"),Vi=n("a"),_1=r("Parallelization"),b1=p(),qt=n("div"),T(Ji.$$.fragment),k1=p(),tn=n("p"),v1=r("The "),Zp=n("code"),T1=r("FlaxRobertaPreTrainedModel"),y1=r(" forward method, overrides the "),eh=n("code"),w1=r("__call__"),$1=r(" special method."),F1=p(),T(Os.$$.fragment),x1=p(),T(Ns.$$.fragment),Ym=p(),on=n("h2"),Is=n("a"),th=n("span"),T(Ki.$$.fragment),R1=p(),oh=n("span"),M1=r("FlaxRobertaForTokenClassification"),Zm=p(),Se=n("div"),T(Gi.$$.fragment),E1=p(),nh=n("p"),z1=r(`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),q1=p(),Xi=n("p"),C1=r("This model inherits from "),md=n("a"),j1=r("FlaxPreTrainedModel"),P1=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),L1=p(),Yi=n("p"),A1=r("This model is also a Flax Linen "),Zi=n("a"),O1=r("flax.linen.Module"),N1=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),I1=p(),sh=n("p"),D1=r("Finally, this model supports inherent JAX features such as:"),S1=p(),Ht=n("ul"),ah=n("li"),el=n("a"),W1=r("Just-In-Time (JIT) compilation"),B1=p(),rh=n("li"),tl=n("a"),U1=r("Automatic Differentiation"),H1=p(),ih=n("li"),ol=n("a"),Q1=r("Vectorization"),V1=p(),lh=n("li"),nl=n("a"),J1=r("Parallelization"),K1=p(),Ct=n("div"),T(sl.$$.fragment),G1=p(),nn=n("p"),X1=r("The "),dh=n("code"),Y1=r("FlaxRobertaPreTrainedModel"),Z1=r(" forward method, overrides the "),ch=n("code"),e2=r("__call__"),t2=r(" special method."),o2=p(),T(Ds.$$.fragment),n2=p(),T(Ss.$$.fragment),ef=p(),sn=n("h2"),Ws=n("a"),ph=n("span"),T(al.$$.fragment),s2=p(),hh=n("span"),a2=r("FlaxRobertaForQuestionAnswering"),tf=p(),We=n("div"),T(rl.$$.fragment),r2=p(),an=n("p"),i2=r(`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),mh=n("code"),l2=r("span start logits"),d2=r(" and "),fh=n("code"),c2=r("span end logits"),p2=r(")."),h2=p(),il=n("p"),m2=r("This model inherits from "),fd=n("a"),f2=r("FlaxPreTrainedModel"),u2=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),g2=p(),ll=n("p"),_2=r("This model is also a Flax Linen "),dl=n("a"),b2=r("flax.linen.Module"),k2=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),v2=p(),uh=n("p"),T2=r("Finally, this model supports inherent JAX features such as:"),y2=p(),Qt=n("ul"),gh=n("li"),cl=n("a"),w2=r("Just-In-Time (JIT) compilation"),$2=p(),_h=n("li"),pl=n("a"),F2=r("Automatic Differentiation"),x2=p(),bh=n("li"),hl=n("a"),R2=r("Vectorization"),M2=p(),kh=n("li"),ml=n("a"),E2=r("Parallelization"),z2=p(),jt=n("div"),T(fl.$$.fragment),q2=p(),rn=n("p"),C2=r("The "),vh=n("code"),j2=r("FlaxRobertaPreTrainedModel"),P2=r(" forward method, overrides the "),Th=n("code"),L2=r("__call__"),A2=r(" special method."),O2=p(),T(Bs.$$.fragment),N2=p(),T(Us.$$.fragment),this.h()},l(o){const b=rM('[data-svelte="svelte-1phssyn"]',document.head);d=s(b,"META",{name:!0,content:!0}),b.forEach(t),g=h(o),c=s(o,"H1",{class:!0});var ul=a(c);m=s(ul,"A",{id:!0,class:!0,href:!0});var yh=a(m);_=s(yh,"SPAN",{});var wh=a(_);y(l.$$.fragment,wh),wh.forEach(t),yh.forEach(t),f=h(ul),M=s(ul,"SPAN",{});var $h=a(M);Y=i($h,"RoBERTa"),$h.forEach(t),ul.forEach(t),I=h(o),z=s(o,"H2",{class:!0});var gl=a(z);X=s(gl,"A",{id:!0,class:!0,href:!0});var Fh=a(X);D=s(Fh,"SPAN",{});var xh=a(D);y(se.$$.fragment,xh),xh.forEach(t),Fh.forEach(t),be=h(gl),S=s(gl,"SPAN",{});var Rh=a(S);ke=i(Rh,"Overview"),Rh.forEach(t),gl.forEach(t),fe=h(o),K=s(o,"P",{});var _l=a(K);A=i(_l,"The RoBERTa model was proposed in "),ae=s(_l,"A",{href:!0,rel:!0});var Mh=a(ae);Z=i(Mh,"RoBERTa: A Robustly Optimized BERT Pretraining Approach"),Mh.forEach(t),q=i(_l,` by Yinhan Liu, Myle Ott, Naman Goyal, Jingfei Du, Mandar Joshi, Danqi Chen, Omer
Levy, Mike Lewis, Luke Zettlemoyer, Veselin Stoyanov. It is based on Google\u2019s BERT model released in 2018.`),_l.forEach(t),j=h(o),ie=s(o,"P",{});var Eh=a(ie);U=i(Eh,`It builds on BERT and modifies key hyperparameters, removing the next-sentence pretraining objective and training with
much larger mini-batches and learning rates.`),Eh.forEach(t),ue=h(o),le=s(o,"P",{});var zh=a(le);H=i(zh,"The abstract from the paper is the following:"),zh.forEach(t),ge=h(o),de=s(o,"P",{});var qh=a(de);C=s(qh,"EM",{});var Ch=a(C);ve=i(Ch,`Language model pretraining has led to significant performance gains but careful comparison between different
approaches is challenging. Training is computationally expensive, often done on private datasets of different sizes,
and, as we will show, hyperparameter choices have significant impact on the final results. We present a replication
study of BERT pretraining (Devlin et al., 2019) that carefully measures the impact of many key hyperparameters and
training data size. We find that BERT was significantly undertrained, and can match or exceed the performance of every
model published after it. Our best model achieves state-of-the-art results on GLUE, RACE and SQuAD. These results
highlight the importance of previously overlooked design choices, and raise questions about the source of recently
reported improvements. We release our models and code.`),Ch.forEach(t),qh.forEach(t),W=h(o),ce=s(o,"P",{});var jh=a(ce);Te=i(jh,"Tips:"),jh.forEach(t),B=h(o),G=s(o,"UL",{});var Vt=a(G);re=s(Vt,"LI",{});var bl=a(re);O=i(bl,"This implementation is the same as "),pe=s(bl,"A",{href:!0});var Ph=a(pe);Q=i(Ph,"BertModel"),Ph.forEach(t),ye=i(bl,` with a tiny embeddings tweak as well as a setup
for Roberta pretrained models.`),bl.forEach(t),v=h(Vt),E=s(Vt,"LI",{});var Lh=a(E);ee=i(Lh,`RoBERTa has the same architecture as BERT, but uses a byte-level BPE as a tokenizer (same as GPT-2) and uses a
different pretraining scheme.`),Lh.forEach(t),Ee=h(Vt),me=s(Vt,"LI",{});var Jt=a(me);N=i(Jt,"RoBERTa doesn\u2019t have "),Re=s(Jt,"CODE",{});var Ah=a(Re);ze=i(Ah,"token_type_ids"),Ah.forEach(t),qe=i(Jt,`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),L=s(Jt,"CODE",{});var Oh=a(L);V=i(Oh,"tokenizer.sep_token"),Oh.forEach(t),Ce=i(Jt," (or "),Me=s(Jt,"CODE",{});var Nh=a(Me);J=i(Nh,"</s>"),Nh.forEach(t),je=i(Jt,")"),Jt.forEach(t),Pe=h(Vt),he=s(Vt,"LI",{});var ud=a(he);xe=s(ud,"A",{href:!0});var Ih=a(xe);Tu=i(Ih,"CamemBERT"),Ih.forEach(t),yu=i(ud," is a wrapper around RoBERTa. Refer to this page for usage examples."),ud.forEach(t),Vt.forEach(t),dm=h(o),Gt=s(o,"P",{});var ln=a(Gt);wu=i(ln,"This model was contributed by "),da=s(ln,"A",{href:!0,rel:!0});var Dh=a(da);$u=i(Dh,"julien-c"),Dh.forEach(t),Fu=i(ln,". The original code can be found "),ca=s(ln,"A",{href:!0,rel:!0});var Sh=a(ca);xu=i(Sh,"here"),Sh.forEach(t),Ru=i(ln,"."),ln.forEach(t),cm=h(o),ho=s(o,"H2",{class:!0});var kl=a(ho);hn=s(kl,"A",{id:!0,class:!0,href:!0});var Wh=a(hn);Sd=s(Wh,"SPAN",{});var Bh=a(Sd);y(pa.$$.fragment,Bh),Bh.forEach(t),Wh.forEach(t),Mu=h(kl),Wd=s(kl,"SPAN",{});var Uh=a(Wd);Eu=i(Uh,"RobertaConfig"),Uh.forEach(t),kl.forEach(t),pm=h(o),Ze=s(o,"DIV",{class:!0});var Tt=a(Ze);y(ha.$$.fragment,Tt),zu=h(Tt),Dt=s(Tt,"P",{});var Kt=a(Dt);qu=i(Kt,"This is the configuration class to store the configuration of a "),$l=s(Kt,"A",{href:!0});var Hh=a($l);Cu=i(Hh,"RobertaModel"),Hh.forEach(t),ju=i(Kt," or a "),Fl=s(Kt,"A",{href:!0});var Qh=a(Fl);Pu=i(Qh,"TFRobertaModel"),Qh.forEach(t),Lu=i(Kt,`. It is
used to instantiate a RoBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the RoBERTa
`),ma=s(Kt,"A",{href:!0,rel:!0});var Vh=a(ma);Au=i(Vh,"roberta-base"),Vh.forEach(t),Ou=i(Kt," architecture."),Kt.forEach(t),Nu=h(Tt),mo=s(Tt,"P",{});var dn=a(mo);Iu=i(dn,"Configuration objects inherit from "),xl=s(dn,"A",{href:!0});var Jh=a(xl);Du=i(Jh,"PretrainedConfig"),Jh.forEach(t),Su=i(dn,` and can be used to control the model outputs. Read the
documentation from `),Rl=s(dn,"A",{href:!0});var Kh=a(Rl);Wu=i(Kh,"PretrainedConfig"),Kh.forEach(t),Bu=i(dn," for more information."),dn.forEach(t),Uu=h(Tt),fo=s(Tt,"P",{});var cn=a(fo);Hu=i(cn,"The "),Ml=s(cn,"A",{href:!0});var Gh=a(Ml);Qu=i(Gh,"RobertaConfig"),Gh.forEach(t),Vu=i(cn," class directly inherits "),El=s(cn,"A",{href:!0});var Xh=a(El);Ju=i(Xh,"BertConfig"),Xh.forEach(t),Ku=i(cn,`. It reuses the same defaults. Please check the parent
class for more information.`),cn.forEach(t),Gu=h(Tt),y(mn.$$.fragment,Tt),Tt.forEach(t),hm=h(o),uo=s(o,"H2",{class:!0});var vl=a(uo);fn=s(vl,"A",{id:!0,class:!0,href:!0});var Yh=a(fn);Bd=s(Yh,"SPAN",{});var Zh=a(Bd);y(fa.$$.fragment,Zh),Zh.forEach(t),Yh.forEach(t),Xu=h(vl),Ud=s(vl,"SPAN",{});var em=a(Ud);Yu=i(em,"RobertaTokenizer"),em.forEach(t),vl.forEach(t),mm=h(o),we=s(o,"DIV",{class:!0});var $e=a(we);y(ua.$$.fragment,$e),Zu=h($e),Hd=s($e,"P",{});var tm=a(Hd);eg=i(tm,"Constructs a RoBERTa tokenizer, derived from the GPT-2 tokenizer, using byte-level Byte-Pair-Encoding."),tm.forEach(t),tg=h($e),Qd=s($e,"P",{});var om=a(Qd);og=i(om,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),om.forEach(t),ng=h($e),y(un.$$.fragment,$e),sg=h($e),ga=s($e,"P",{});var Tl=a(ga);ag=i(Tl,"You can get around that behavior by passing "),Vd=s(Tl,"CODE",{});var nm=a(Vd);rg=i(nm,"add_prefix_space=True"),nm.forEach(t),ig=i(Tl,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Tl.forEach(t),lg=h($e),y(gn.$$.fragment,$e),dg=h($e),_a=s($e,"P",{});var yl=a(_a);cg=i(yl,"This tokenizer inherits from "),zl=s(yl,"A",{href:!0});var sm=a(zl);pg=i(sm,"PreTrainedTokenizer"),sm.forEach(t),hg=i(yl,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),yl.forEach(t),mg=h($e),Xt=s($e,"DIV",{class:!0});var pn=a(Xt);y(ba.$$.fragment,pn),fg=h(pn),Jd=s(pn,"P",{});var am=a(Jd);ug=i(am,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoBERTa sequence has the following format:`),am.forEach(t),gg=h(pn),ka=s(pn,"UL",{});var wl=a(ka);ql=s(wl,"LI",{});var gd=a(ql);_g=i(gd,"single sequence: "),Kd=s(gd,"CODE",{});var rm=a(Kd);bg=i(rm,"<s> X </s>"),rm.forEach(t),gd.forEach(t),kg=h(wl),Cl=s(wl,"LI",{});var _d=a(Cl);vg=i(_d,"pair of sequences: "),Gd=s(_d,"CODE",{});var im=a(Gd);Tg=i(im,"<s> A </s></s> B </s>"),im.forEach(t),_d.forEach(t),wl.forEach(t),pn.forEach(t),yg=h($e),_n=s($e,"DIV",{class:!0});var nf=a(_n);y(va.$$.fragment,nf),wg=h(nf),Ta=s(nf,"P",{});var sf=a(Ta);$g=i(sf,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Xd=s(sf,"CODE",{});var I2=a(Xd);Fg=i(I2,"prepare_for_model"),I2.forEach(t),xg=i(sf," method."),sf.forEach(t),nf.forEach(t),Rg=h($e),bn=s($e,"DIV",{class:!0});var af=a(bn);y(ya.$$.fragment,af),Mg=h(af),Yd=s(af,"P",{});var D2=a(Yd);Eg=i(D2,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. RoBERTa does not
make use of token type ids, therefore a list of zeros is returned.`),D2.forEach(t),af.forEach(t),zg=h($e),jl=s($e,"DIV",{class:!0});var S2=a(jl);y(wa.$$.fragment,S2),S2.forEach(t),$e.forEach(t),fm=h(o),go=s(o,"H2",{class:!0});var rf=a(go);kn=s(rf,"A",{id:!0,class:!0,href:!0});var W2=a(kn);Zd=s(W2,"SPAN",{});var B2=a(Zd);y($a.$$.fragment,B2),B2.forEach(t),W2.forEach(t),qg=h(rf),ec=s(rf,"SPAN",{});var U2=a(ec);Cg=i(U2,"RobertaTokenizerFast"),U2.forEach(t),rf.forEach(t),um=h(o),Le=s(o,"DIV",{class:!0});var Xe=a(Le);y(Fa.$$.fragment,Xe),jg=h(Xe),xa=s(Xe,"P",{});var lf=a(xa);Pg=i(lf,"Construct a \u201Cfast\u201D RoBERTa tokenizer (backed by HuggingFace\u2019s "),tc=s(lf,"EM",{});var H2=a(tc);Lg=i(H2,"tokenizers"),H2.forEach(t),Ag=i(lf,` library), derived from the GPT-2
tokenizer, using byte-level Byte-Pair-Encoding.`),lf.forEach(t),Og=h(Xe),oc=s(Xe,"P",{});var Q2=a(oc);Ng=i(Q2,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Q2.forEach(t),Ig=h(Xe),y(vn.$$.fragment,Xe),Dg=h(Xe),Ra=s(Xe,"P",{});var df=a(Ra);Sg=i(df,"You can get around that behavior by passing "),nc=s(df,"CODE",{});var V2=a(nc);Wg=i(V2,"add_prefix_space=True"),V2.forEach(t),Bg=i(df,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),df.forEach(t),Ug=h(Xe),y(Tn.$$.fragment,Xe),Hg=h(Xe),Ma=s(Xe,"P",{});var cf=a(Ma);Qg=i(cf,"This tokenizer inherits from "),Pl=s(cf,"A",{href:!0});var J2=a(Pl);Vg=i(J2,"PreTrainedTokenizerFast"),J2.forEach(t),Jg=i(cf,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),cf.forEach(t),Kg=h(Xe),Ll=s(Xe,"DIV",{class:!0});var K2=a(Ll);y(Ea.$$.fragment,K2),K2.forEach(t),Xe.forEach(t),gm=h(o),_o=s(o,"H2",{class:!0});var pf=a(_o);yn=s(pf,"A",{id:!0,class:!0,href:!0});var G2=a(yn);sc=s(G2,"SPAN",{});var X2=a(sc);y(za.$$.fragment,X2),X2.forEach(t),G2.forEach(t),Gg=h(pf),ac=s(pf,"SPAN",{});var Y2=a(ac);Xg=i(Y2,"RobertaModel"),Y2.forEach(t),pf.forEach(t),_m=h(o),Ae=s(o,"DIV",{class:!0});var Ye=a(Ae);y(qa.$$.fragment,Ye),Yg=h(Ye),rc=s(Ye,"P",{});var Z2=a(rc);Zg=i(Z2,"The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),Z2.forEach(t),e_=h(Ye),Ca=s(Ye,"P",{});var hf=a(Ca);t_=i(hf,"This model inherits from "),Al=s(hf,"A",{href:!0});var eF=a(Al);o_=i(eF,"PreTrainedModel"),eF.forEach(t),n_=i(hf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hf.forEach(t),s_=h(Ye),ja=s(Ye,"P",{});var mf=a(ja);a_=i(mf,"This model is also a PyTorch "),Pa=s(mf,"A",{href:!0,rel:!0});var tF=a(Pa);r_=i(tF,"torch.nn.Module"),tF.forEach(t),i_=i(mf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mf.forEach(t),l_=h(Ye),La=s(Ye,"P",{});var ff=a(La);d_=i(ff,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),ic=s(ff,"EM",{});var oF=a(ic);c_=i(oF,`Attention is
all you need`),oF.forEach(t),p_=i(ff,`_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`),ff.forEach(t),h_=h(Ye),Ue=s(Ye,"P",{});var mt=a(Ue);m_=i(mt,"To behave as an decoder the model needs to be initialized with the "),lc=s(mt,"CODE",{});var nF=a(lc);f_=i(nF,"is_decoder"),nF.forEach(t),u_=i(mt,` argument of the configuration set
to `),dc=s(mt,"CODE",{});var sF=a(dc);g_=i(sF,"True"),sF.forEach(t),__=i(mt,". To be used in a Seq2Seq model, the model needs to initialized with both "),cc=s(mt,"CODE",{});var aF=a(cc);b_=i(aF,"is_decoder"),aF.forEach(t),k_=i(mt,` argument and
`),pc=s(mt,"CODE",{});var rF=a(pc);v_=i(rF,"add_cross_attention"),rF.forEach(t),T_=i(mt," set to "),hc=s(mt,"CODE",{});var iF=a(hc);y_=i(iF,"True"),iF.forEach(t),w_=i(mt,"; an "),mc=s(mt,"CODE",{});var lF=a(mc);$_=i(lF,"encoder_hidden_states"),lF.forEach(t),F_=i(mt," is then expected as an input to the forward pass."),mt.forEach(t),x_=h(Ye),wn=s(Ye,"P",{});var lm=a(wn);R_=i(lm,".. _"),fc=s(lm,"EM",{});var dF=a(fc);M_=i(dF,"Attention is all you need"),dF.forEach(t),E_=i(lm,": "),Aa=s(lm,"A",{href:!0,rel:!0});var cF=a(Aa);z_=i(cF,"https://arxiv.org/abs/1706.03762"),cF.forEach(t),lm.forEach(t),q_=h(Ye),yt=s(Ye,"DIV",{class:!0});var Hs=a(yt);y(Oa.$$.fragment,Hs),C_=h(Hs),bo=s(Hs,"P",{});var bd=a(bo);j_=i(bd,"The "),Ol=s(bd,"A",{href:!0});var pF=a(Ol);P_=i(pF,"RobertaModel"),pF.forEach(t),L_=i(bd," forward method, overrides the "),uc=s(bd,"CODE",{});var hF=a(uc);A_=i(hF,"__call__"),hF.forEach(t),O_=i(bd," special method."),bd.forEach(t),N_=h(Hs),y($n.$$.fragment,Hs),I_=h(Hs),y(Fn.$$.fragment,Hs),Hs.forEach(t),Ye.forEach(t),bm=h(o),ko=s(o,"H2",{class:!0});var uf=a(ko);xn=s(uf,"A",{id:!0,class:!0,href:!0});var mF=a(xn);gc=s(mF,"SPAN",{});var fF=a(gc);y(Na.$$.fragment,fF),fF.forEach(t),mF.forEach(t),D_=h(uf),_c=s(uf,"SPAN",{});var uF=a(_c);S_=i(uF,"RobertaForCausalLM"),uF.forEach(t),uf.forEach(t),km=h(o),et=s(o,"DIV",{class:!0});var Yt=a(et);y(Ia.$$.fragment,Yt),W_=h(Yt),Da=s(Yt,"P",{});var gf=a(Da);B_=i(gf,"RoBERTa Model with a "),bc=s(gf,"CODE",{});var gF=a(bc);U_=i(gF,"language modeling"),gF.forEach(t),H_=i(gf," head on top for CLM fine-tuning."),gf.forEach(t),Q_=h(Yt),Sa=s(Yt,"P",{});var _f=a(Sa);V_=i(_f,"This model inherits from "),Nl=s(_f,"A",{href:!0});var _F=a(Nl);J_=i(_F,"PreTrainedModel"),_F.forEach(t),K_=i(_f,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_f.forEach(t),G_=h(Yt),Wa=s(Yt,"P",{});var bf=a(Wa);X_=i(bf,"This model is also a PyTorch "),Ba=s(bf,"A",{href:!0,rel:!0});var bF=a(Ba);Y_=i(bF,"torch.nn.Module"),bF.forEach(t),Z_=i(bf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bf.forEach(t),eb=h(Yt),wt=s(Yt,"DIV",{class:!0});var Qs=a(wt);y(Ua.$$.fragment,Qs),tb=h(Qs),vo=s(Qs,"P",{});var kd=a(vo);ob=i(kd,"The "),Il=s(kd,"A",{href:!0});var kF=a(Il);nb=i(kF,"RobertaForCausalLM"),kF.forEach(t),sb=i(kd," forward method, overrides the "),kc=s(kd,"CODE",{});var vF=a(kc);ab=i(vF,"__call__"),vF.forEach(t),rb=i(kd," special method."),kd.forEach(t),ib=h(Qs),y(Rn.$$.fragment,Qs),lb=h(Qs),y(Mn.$$.fragment,Qs),Qs.forEach(t),Yt.forEach(t),vm=h(o),To=s(o,"H2",{class:!0});var kf=a(To);En=s(kf,"A",{id:!0,class:!0,href:!0});var TF=a(En);vc=s(TF,"SPAN",{});var yF=a(vc);y(Ha.$$.fragment,yF),yF.forEach(t),TF.forEach(t),db=h(kf),Tc=s(kf,"SPAN",{});var wF=a(Tc);cb=i(wF,"RobertaForMaskedLM"),wF.forEach(t),kf.forEach(t),Tm=h(o),tt=s(o,"DIV",{class:!0});var Zt=a(tt);y(Qa.$$.fragment,Zt),pb=h(Zt),Va=s(Zt,"P",{});var vf=a(Va);hb=i(vf,"RoBERTa Model with a "),yc=s(vf,"CODE",{});var $F=a(yc);mb=i($F,"language modeling"),$F.forEach(t),fb=i(vf," head on top."),vf.forEach(t),ub=h(Zt),Ja=s(Zt,"P",{});var Tf=a(Ja);gb=i(Tf,"This model inherits from "),Dl=s(Tf,"A",{href:!0});var FF=a(Dl);_b=i(FF,"PreTrainedModel"),FF.forEach(t),bb=i(Tf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tf.forEach(t),kb=h(Zt),Ka=s(Zt,"P",{});var yf=a(Ka);vb=i(yf,"This model is also a PyTorch "),Ga=s(yf,"A",{href:!0,rel:!0});var xF=a(Ga);Tb=i(xF,"torch.nn.Module"),xF.forEach(t),yb=i(yf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yf.forEach(t),wb=h(Zt),rt=s(Zt,"DIV",{class:!0});var eo=a(rt);y(Xa.$$.fragment,eo),$b=h(eo),yo=s(eo,"P",{});var vd=a(yo);Fb=i(vd,"The "),Sl=s(vd,"A",{href:!0});var RF=a(Sl);xb=i(RF,"RobertaForMaskedLM"),RF.forEach(t),Rb=i(vd," forward method, overrides the "),wc=s(vd,"CODE",{});var MF=a(wc);Mb=i(MF,"__call__"),MF.forEach(t),Eb=i(vd," special method."),vd.forEach(t),zb=h(eo),y(zn.$$.fragment,eo),qb=h(eo),y(qn.$$.fragment,eo),Cb=h(eo),y(Cn.$$.fragment,eo),eo.forEach(t),Zt.forEach(t),ym=h(o),wo=s(o,"H2",{class:!0});var wf=a(wo);jn=s(wf,"A",{id:!0,class:!0,href:!0});var EF=a(jn);$c=s(EF,"SPAN",{});var zF=a($c);y(Ya.$$.fragment,zF),zF.forEach(t),EF.forEach(t),jb=h(wf),Fc=s(wf,"SPAN",{});var qF=a(Fc);Pb=i(qF,"RobertaForSequenceClassification"),qF.forEach(t),wf.forEach(t),wm=h(o),ot=s(o,"DIV",{class:!0});var to=a(ot);y(Za.$$.fragment,to),Lb=h(to),xc=s(to,"P",{});var CF=a(xc);Ab=i(CF,`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),CF.forEach(t),Ob=h(to),er=s(to,"P",{});var $f=a(er);Nb=i($f,"This model inherits from "),Wl=s($f,"A",{href:!0});var jF=a(Wl);Ib=i(jF,"PreTrainedModel"),jF.forEach(t),Db=i($f,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$f.forEach(t),Sb=h(to),tr=s(to,"P",{});var Ff=a(tr);Wb=i(Ff,"This model is also a PyTorch "),or=s(Ff,"A",{href:!0,rel:!0});var PF=a(or);Bb=i(PF,"torch.nn.Module"),PF.forEach(t),Ub=i(Ff,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ff.forEach(t),Hb=h(to),Be=s(to,"DIV",{class:!0});var ft=a(Be);y(nr.$$.fragment,ft),Qb=h(ft),$o=s(ft,"P",{});var Td=a($o);Vb=i(Td,"The "),Bl=s(Td,"A",{href:!0});var LF=a(Bl);Jb=i(LF,"RobertaForSequenceClassification"),LF.forEach(t),Kb=i(Td," forward method, overrides the "),Rc=s(Td,"CODE",{});var AF=a(Rc);Gb=i(AF,"__call__"),AF.forEach(t),Xb=i(Td," special method."),Td.forEach(t),Yb=h(ft),y(Pn.$$.fragment,ft),Zb=h(ft),y(Ln.$$.fragment,ft),ek=h(ft),y(An.$$.fragment,ft),tk=h(ft),y(On.$$.fragment,ft),ok=h(ft),y(Nn.$$.fragment,ft),ft.forEach(t),to.forEach(t),$m=h(o),Fo=s(o,"H2",{class:!0});var xf=a(Fo);In=s(xf,"A",{id:!0,class:!0,href:!0});var OF=a(In);Mc=s(OF,"SPAN",{});var NF=a(Mc);y(sr.$$.fragment,NF),NF.forEach(t),OF.forEach(t),nk=h(xf),Ec=s(xf,"SPAN",{});var IF=a(Ec);sk=i(IF,"RobertaForMultipleChoice"),IF.forEach(t),xf.forEach(t),Fm=h(o),nt=s(o,"DIV",{class:!0});var oo=a(nt);y(ar.$$.fragment,oo),ak=h(oo),zc=s(oo,"P",{});var DF=a(zc);rk=i(DF,`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),DF.forEach(t),ik=h(oo),rr=s(oo,"P",{});var Rf=a(rr);lk=i(Rf,"This model inherits from "),Ul=s(Rf,"A",{href:!0});var SF=a(Ul);dk=i(SF,"PreTrainedModel"),SF.forEach(t),ck=i(Rf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rf.forEach(t),pk=h(oo),ir=s(oo,"P",{});var Mf=a(ir);hk=i(Mf,"This model is also a PyTorch "),lr=s(Mf,"A",{href:!0,rel:!0});var WF=a(lr);mk=i(WF,"torch.nn.Module"),WF.forEach(t),fk=i(Mf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mf.forEach(t),uk=h(oo),$t=s(oo,"DIV",{class:!0});var Vs=a($t);y(dr.$$.fragment,Vs),gk=h(Vs),xo=s(Vs,"P",{});var yd=a(xo);_k=i(yd,"The "),Hl=s(yd,"A",{href:!0});var BF=a(Hl);bk=i(BF,"RobertaForMultipleChoice"),BF.forEach(t),kk=i(yd," forward method, overrides the "),qc=s(yd,"CODE",{});var UF=a(qc);vk=i(UF,"__call__"),UF.forEach(t),Tk=i(yd," special method."),yd.forEach(t),yk=h(Vs),y(Dn.$$.fragment,Vs),wk=h(Vs),y(Sn.$$.fragment,Vs),Vs.forEach(t),oo.forEach(t),xm=h(o),Ro=s(o,"H2",{class:!0});var Ef=a(Ro);Wn=s(Ef,"A",{id:!0,class:!0,href:!0});var HF=a(Wn);Cc=s(HF,"SPAN",{});var QF=a(Cc);y(cr.$$.fragment,QF),QF.forEach(t),HF.forEach(t),$k=h(Ef),jc=s(Ef,"SPAN",{});var VF=a(jc);Fk=i(VF,"RobertaForTokenClassification"),VF.forEach(t),Ef.forEach(t),Rm=h(o),st=s(o,"DIV",{class:!0});var no=a(st);y(pr.$$.fragment,no),xk=h(no),Pc=s(no,"P",{});var JF=a(Pc);Rk=i(JF,`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),JF.forEach(t),Mk=h(no),hr=s(no,"P",{});var zf=a(hr);Ek=i(zf,"This model inherits from "),Ql=s(zf,"A",{href:!0});var KF=a(Ql);zk=i(KF,"PreTrainedModel"),KF.forEach(t),qk=i(zf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zf.forEach(t),Ck=h(no),mr=s(no,"P",{});var qf=a(mr);jk=i(qf,"This model is also a PyTorch "),fr=s(qf,"A",{href:!0,rel:!0});var GF=a(fr);Pk=i(GF,"torch.nn.Module"),GF.forEach(t),Lk=i(qf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qf.forEach(t),Ak=h(no),it=s(no,"DIV",{class:!0});var so=a(it);y(ur.$$.fragment,so),Ok=h(so),Mo=s(so,"P",{});var wd=a(Mo);Nk=i(wd,"The "),Vl=s(wd,"A",{href:!0});var XF=a(Vl);Ik=i(XF,"RobertaForTokenClassification"),XF.forEach(t),Dk=i(wd," forward method, overrides the "),Lc=s(wd,"CODE",{});var YF=a(Lc);Sk=i(YF,"__call__"),YF.forEach(t),Wk=i(wd," special method."),wd.forEach(t),Bk=h(so),y(Bn.$$.fragment,so),Uk=h(so),y(Un.$$.fragment,so),Hk=h(so),y(Hn.$$.fragment,so),so.forEach(t),no.forEach(t),Mm=h(o),Eo=s(o,"H2",{class:!0});var Cf=a(Eo);Qn=s(Cf,"A",{id:!0,class:!0,href:!0});var ZF=a(Qn);Ac=s(ZF,"SPAN",{});var e0=a(Ac);y(gr.$$.fragment,e0),e0.forEach(t),ZF.forEach(t),Qk=h(Cf),Oc=s(Cf,"SPAN",{});var t0=a(Oc);Vk=i(t0,"RobertaForQuestionAnswering"),t0.forEach(t),Cf.forEach(t),Em=h(o),at=s(o,"DIV",{class:!0});var ao=a(at);y(_r.$$.fragment,ao),Jk=h(ao),zo=s(ao,"P",{});var $d=a(zo);Kk=i($d,`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Nc=s($d,"CODE",{});var o0=a(Nc);Gk=i(o0,"span start logits"),o0.forEach(t),Xk=i($d," and "),Ic=s($d,"CODE",{});var n0=a(Ic);Yk=i(n0,"span end logits"),n0.forEach(t),Zk=i($d,")."),$d.forEach(t),ev=h(ao),br=s(ao,"P",{});var jf=a(br);tv=i(jf,"This model inherits from "),Jl=s(jf,"A",{href:!0});var s0=a(Jl);ov=i(s0,"PreTrainedModel"),s0.forEach(t),nv=i(jf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jf.forEach(t),sv=h(ao),kr=s(ao,"P",{});var Pf=a(kr);av=i(Pf,"This model is also a PyTorch "),vr=s(Pf,"A",{href:!0,rel:!0});var a0=a(vr);rv=i(a0,"torch.nn.Module"),a0.forEach(t),iv=i(Pf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Pf.forEach(t),lv=h(ao),lt=s(ao,"DIV",{class:!0});var ro=a(lt);y(Tr.$$.fragment,ro),dv=h(ro),qo=s(ro,"P",{});var Fd=a(qo);cv=i(Fd,"The "),Kl=s(Fd,"A",{href:!0});var r0=a(Kl);pv=i(r0,"RobertaForQuestionAnswering"),r0.forEach(t),hv=i(Fd," forward method, overrides the "),Dc=s(Fd,"CODE",{});var i0=a(Dc);mv=i(i0,"__call__"),i0.forEach(t),fv=i(Fd," special method."),Fd.forEach(t),uv=h(ro),y(Vn.$$.fragment,ro),gv=h(ro),y(Jn.$$.fragment,ro),_v=h(ro),y(Kn.$$.fragment,ro),ro.forEach(t),ao.forEach(t),zm=h(o),Co=s(o,"H2",{class:!0});var Lf=a(Co);Gn=s(Lf,"A",{id:!0,class:!0,href:!0});var l0=a(Gn);Sc=s(l0,"SPAN",{});var d0=a(Sc);y(yr.$$.fragment,d0),d0.forEach(t),l0.forEach(t),bv=h(Lf),Wc=s(Lf,"SPAN",{});var c0=a(Wc);kv=i(c0,"TFRobertaModel"),c0.forEach(t),Lf.forEach(t),qm=h(o),He=s(o,"DIV",{class:!0});var Pt=a(He);y(wr.$$.fragment,Pt),vv=h(Pt),Bc=s(Pt,"P",{});var p0=a(Bc);Tv=i(p0,"The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),p0.forEach(t),yv=h(Pt),$r=s(Pt,"P",{});var Af=a($r);wv=i(Af,"This model inherits from "),Gl=s(Af,"A",{href:!0});var h0=a(Gl);$v=i(h0,"TFPreTrainedModel"),h0.forEach(t),Fv=i(Af,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Af.forEach(t),xv=h(Pt),Fr=s(Pt,"P",{});var Of=a(Fr);Rv=i(Of,"This model is also a "),xr=s(Of,"A",{href:!0,rel:!0});var m0=a(xr);Mv=i(m0,"tf.keras.Model"),m0.forEach(t),Ev=i(Of,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Of.forEach(t),zv=h(Pt),y(Xn.$$.fragment,Pt),qv=h(Pt),Ft=s(Pt,"DIV",{class:!0});var Js=a(Ft);y(Rr.$$.fragment,Js),Cv=h(Js),jo=s(Js,"P",{});var xd=a(jo);jv=i(xd,"The "),Xl=s(xd,"A",{href:!0});var f0=a(Xl);Pv=i(f0,"TFRobertaModel"),f0.forEach(t),Lv=i(xd," forward method, overrides the "),Uc=s(xd,"CODE",{});var u0=a(Uc);Av=i(u0,"__call__"),u0.forEach(t),Ov=i(xd," special method."),xd.forEach(t),Nv=h(Js),y(Yn.$$.fragment,Js),Iv=h(Js),y(Zn.$$.fragment,Js),Js.forEach(t),Pt.forEach(t),Cm=h(o),Po=s(o,"H2",{class:!0});var Nf=a(Po);es=s(Nf,"A",{id:!0,class:!0,href:!0});var g0=a(es);Hc=s(g0,"SPAN",{});var _0=a(Hc);y(Mr.$$.fragment,_0),_0.forEach(t),g0.forEach(t),Dv=h(Nf),Qc=s(Nf,"SPAN",{});var b0=a(Qc);Sv=i(b0,"TFRobertaForCausalLM"),b0.forEach(t),Nf.forEach(t),jm=h(o),Lo=s(o,"DIV",{class:!0});var If=a(Lo);y(Er.$$.fragment,If),Wv=h(If),xt=s(If,"DIV",{class:!0});var Ks=a(xt);y(zr.$$.fragment,Ks),Bv=h(Ks),Ao=s(Ks,"P",{});var Rd=a(Ao);Uv=i(Rd,"The "),Yl=s(Rd,"A",{href:!0});var k0=a(Yl);Hv=i(k0,"TFRobertaForCausalLM"),k0.forEach(t),Qv=i(Rd," forward method, overrides the "),Vc=s(Rd,"CODE",{});var v0=a(Vc);Vv=i(v0,"__call__"),v0.forEach(t),Jv=i(Rd," special method."),Rd.forEach(t),Kv=h(Ks),y(ts.$$.fragment,Ks),Gv=h(Ks),y(os.$$.fragment,Ks),Ks.forEach(t),If.forEach(t),Pm=h(o),Oo=s(o,"H2",{class:!0});var Df=a(Oo);ns=s(Df,"A",{id:!0,class:!0,href:!0});var T0=a(ns);Jc=s(T0,"SPAN",{});var y0=a(Jc);y(qr.$$.fragment,y0),y0.forEach(t),T0.forEach(t),Xv=h(Df),Kc=s(Df,"SPAN",{});var w0=a(Kc);Yv=i(w0,"TFRobertaForMaskedLM"),w0.forEach(t),Df.forEach(t),Lm=h(o),Qe=s(o,"DIV",{class:!0});var Lt=a(Qe);y(Cr.$$.fragment,Lt),Zv=h(Lt),jr=s(Lt,"P",{});var Sf=a(jr);eT=i(Sf,"RoBERTa Model with a "),Gc=s(Sf,"CODE",{});var $0=a(Gc);tT=i($0,"language modeling"),$0.forEach(t),oT=i(Sf," head on top."),Sf.forEach(t),nT=h(Lt),Pr=s(Lt,"P",{});var Wf=a(Pr);sT=i(Wf,"This model inherits from "),Zl=s(Wf,"A",{href:!0});var F0=a(Zl);aT=i(F0,"TFPreTrainedModel"),F0.forEach(t),rT=i(Wf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wf.forEach(t),iT=h(Lt),Lr=s(Lt,"P",{});var Bf=a(Lr);lT=i(Bf,"This model is also a "),Ar=s(Bf,"A",{href:!0,rel:!0});var x0=a(Ar);dT=i(x0,"tf.keras.Model"),x0.forEach(t),cT=i(Bf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bf.forEach(t),pT=h(Lt),y(ss.$$.fragment,Lt),hT=h(Lt),dt=s(Lt,"DIV",{class:!0});var io=a(dt);y(Or.$$.fragment,io),mT=h(io),No=s(io,"P",{});var Md=a(No);fT=i(Md,"The "),ed=s(Md,"A",{href:!0});var R0=a(ed);uT=i(R0,"TFRobertaForMaskedLM"),R0.forEach(t),gT=i(Md," forward method, overrides the "),Xc=s(Md,"CODE",{});var M0=a(Xc);_T=i(M0,"__call__"),M0.forEach(t),bT=i(Md," special method."),Md.forEach(t),kT=h(io),y(as.$$.fragment,io),vT=h(io),y(rs.$$.fragment,io),TT=h(io),y(is.$$.fragment,io),io.forEach(t),Lt.forEach(t),Am=h(o),Io=s(o,"H2",{class:!0});var Uf=a(Io);ls=s(Uf,"A",{id:!0,class:!0,href:!0});var E0=a(ls);Yc=s(E0,"SPAN",{});var z0=a(Yc);y(Nr.$$.fragment,z0),z0.forEach(t),E0.forEach(t),yT=h(Uf),Zc=s(Uf,"SPAN",{});var q0=a(Zc);wT=i(q0,"TFRobertaForSequenceClassification"),q0.forEach(t),Uf.forEach(t),Om=h(o),Ve=s(o,"DIV",{class:!0});var At=a(Ve);y(Ir.$$.fragment,At),$T=h(At),ep=s(At,"P",{});var C0=a(ep);FT=i(C0,`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),C0.forEach(t),xT=h(At),Dr=s(At,"P",{});var Hf=a(Dr);RT=i(Hf,"This model inherits from "),td=s(Hf,"A",{href:!0});var j0=a(td);MT=i(j0,"TFPreTrainedModel"),j0.forEach(t),ET=i(Hf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hf.forEach(t),zT=h(At),Sr=s(At,"P",{});var Qf=a(Sr);qT=i(Qf,"This model is also a "),Wr=s(Qf,"A",{href:!0,rel:!0});var P0=a(Wr);CT=i(P0,"tf.keras.Model"),P0.forEach(t),jT=i(Qf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qf.forEach(t),PT=h(At),y(ds.$$.fragment,At),LT=h(At),ct=s(At,"DIV",{class:!0});var lo=a(ct);y(Br.$$.fragment,lo),AT=h(lo),Do=s(lo,"P",{});var Ed=a(Do);OT=i(Ed,"The "),od=s(Ed,"A",{href:!0});var L0=a(od);NT=i(L0,"TFRobertaForSequenceClassification"),L0.forEach(t),IT=i(Ed," forward method, overrides the "),tp=s(Ed,"CODE",{});var A0=a(tp);DT=i(A0,"__call__"),A0.forEach(t),ST=i(Ed," special method."),Ed.forEach(t),WT=h(lo),y(cs.$$.fragment,lo),BT=h(lo),y(ps.$$.fragment,lo),UT=h(lo),y(hs.$$.fragment,lo),lo.forEach(t),At.forEach(t),Nm=h(o),So=s(o,"H2",{class:!0});var Vf=a(So);ms=s(Vf,"A",{id:!0,class:!0,href:!0});var O0=a(ms);op=s(O0,"SPAN",{});var N0=a(op);y(Ur.$$.fragment,N0),N0.forEach(t),O0.forEach(t),HT=h(Vf),np=s(Vf,"SPAN",{});var I0=a(np);QT=i(I0,"TFRobertaForMultipleChoice"),I0.forEach(t),Vf.forEach(t),Im=h(o),Je=s(o,"DIV",{class:!0});var Ot=a(Je);y(Hr.$$.fragment,Ot),VT=h(Ot),sp=s(Ot,"P",{});var D0=a(sp);JT=i(D0,`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),D0.forEach(t),KT=h(Ot),Qr=s(Ot,"P",{});var Jf=a(Qr);GT=i(Jf,"This model inherits from "),nd=s(Jf,"A",{href:!0});var S0=a(nd);XT=i(S0,"TFPreTrainedModel"),S0.forEach(t),YT=i(Jf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jf.forEach(t),ZT=h(Ot),Vr=s(Ot,"P",{});var Kf=a(Vr);ey=i(Kf,"This model is also a "),Jr=s(Kf,"A",{href:!0,rel:!0});var W0=a(Jr);ty=i(W0,"tf.keras.Model"),W0.forEach(t),oy=i(Kf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kf.forEach(t),ny=h(Ot),y(fs.$$.fragment,Ot),sy=h(Ot),Rt=s(Ot,"DIV",{class:!0});var Gs=a(Rt);y(Kr.$$.fragment,Gs),ay=h(Gs),Wo=s(Gs,"P",{});var zd=a(Wo);ry=i(zd,"The "),sd=s(zd,"A",{href:!0});var B0=a(sd);iy=i(B0,"TFRobertaForMultipleChoice"),B0.forEach(t),ly=i(zd," forward method, overrides the "),ap=s(zd,"CODE",{});var U0=a(ap);dy=i(U0,"__call__"),U0.forEach(t),cy=i(zd," special method."),zd.forEach(t),py=h(Gs),y(us.$$.fragment,Gs),hy=h(Gs),y(gs.$$.fragment,Gs),Gs.forEach(t),Ot.forEach(t),Dm=h(o),Bo=s(o,"H2",{class:!0});var Gf=a(Bo);_s=s(Gf,"A",{id:!0,class:!0,href:!0});var H0=a(_s);rp=s(H0,"SPAN",{});var Q0=a(rp);y(Gr.$$.fragment,Q0),Q0.forEach(t),H0.forEach(t),my=h(Gf),ip=s(Gf,"SPAN",{});var V0=a(ip);fy=i(V0,"TFRobertaForTokenClassification"),V0.forEach(t),Gf.forEach(t),Sm=h(o),Ke=s(o,"DIV",{class:!0});var Nt=a(Ke);y(Xr.$$.fragment,Nt),uy=h(Nt),lp=s(Nt,"P",{});var J0=a(lp);gy=i(J0,`RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),J0.forEach(t),_y=h(Nt),Yr=s(Nt,"P",{});var Xf=a(Yr);by=i(Xf,"This model inherits from "),ad=s(Xf,"A",{href:!0});var K0=a(ad);ky=i(K0,"TFPreTrainedModel"),K0.forEach(t),vy=i(Xf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xf.forEach(t),Ty=h(Nt),Zr=s(Nt,"P",{});var Yf=a(Zr);yy=i(Yf,"This model is also a "),ei=s(Yf,"A",{href:!0,rel:!0});var G0=a(ei);wy=i(G0,"tf.keras.Model"),G0.forEach(t),$y=i(Yf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yf.forEach(t),Fy=h(Nt),y(bs.$$.fragment,Nt),xy=h(Nt),pt=s(Nt,"DIV",{class:!0});var co=a(pt);y(ti.$$.fragment,co),Ry=h(co),Uo=s(co,"P",{});var qd=a(Uo);My=i(qd,"The "),rd=s(qd,"A",{href:!0});var X0=a(rd);Ey=i(X0,"TFRobertaForTokenClassification"),X0.forEach(t),zy=i(qd," forward method, overrides the "),dp=s(qd,"CODE",{});var Y0=a(dp);qy=i(Y0,"__call__"),Y0.forEach(t),Cy=i(qd," special method."),qd.forEach(t),jy=h(co),y(ks.$$.fragment,co),Py=h(co),y(vs.$$.fragment,co),Ly=h(co),y(Ts.$$.fragment,co),co.forEach(t),Nt.forEach(t),Wm=h(o),Ho=s(o,"H2",{class:!0});var Zf=a(Ho);ys=s(Zf,"A",{id:!0,class:!0,href:!0});var Z0=a(ys);cp=s(Z0,"SPAN",{});var ex=a(cp);y(oi.$$.fragment,ex),ex.forEach(t),Z0.forEach(t),Ay=h(Zf),pp=s(Zf,"SPAN",{});var tx=a(pp);Oy=i(tx,"TFRobertaForQuestionAnswering"),tx.forEach(t),Zf.forEach(t),Bm=h(o),Ge=s(o,"DIV",{class:!0});var It=a(Ge);y(ni.$$.fragment,It),Ny=h(It),Qo=s(It,"P",{});var Cd=a(Qo);Iy=i(Cd,`RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),hp=s(Cd,"CODE",{});var ox=a(hp);Dy=i(ox,"span start logits"),ox.forEach(t),Sy=i(Cd," and "),mp=s(Cd,"CODE",{});var nx=a(mp);Wy=i(nx,"span end logits"),nx.forEach(t),By=i(Cd,")."),Cd.forEach(t),Uy=h(It),si=s(It,"P",{});var eu=a(si);Hy=i(eu,"This model inherits from "),id=s(eu,"A",{href:!0});var sx=a(id);Qy=i(sx,"TFPreTrainedModel"),sx.forEach(t),Vy=i(eu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eu.forEach(t),Jy=h(It),ai=s(It,"P",{});var tu=a(ai);Ky=i(tu,"This model is also a "),ri=s(tu,"A",{href:!0,rel:!0});var ax=a(ri);Gy=i(ax,"tf.keras.Model"),ax.forEach(t),Xy=i(tu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tu.forEach(t),Yy=h(It),y(ws.$$.fragment,It),Zy=h(It),ht=s(It,"DIV",{class:!0});var po=a(ht);y(ii.$$.fragment,po),ew=h(po),Vo=s(po,"P",{});var jd=a(Vo);tw=i(jd,"The "),ld=s(jd,"A",{href:!0});var rx=a(ld);ow=i(rx,"TFRobertaForQuestionAnswering"),rx.forEach(t),nw=i(jd," forward method, overrides the "),fp=s(jd,"CODE",{});var ix=a(fp);sw=i(ix,"__call__"),ix.forEach(t),aw=i(jd," special method."),jd.forEach(t),rw=h(po),y($s.$$.fragment,po),iw=h(po),y(Fs.$$.fragment,po),lw=h(po),y(xs.$$.fragment,po),po.forEach(t),It.forEach(t),Um=h(o),Jo=s(o,"H2",{class:!0});var ou=a(Jo);Rs=s(ou,"A",{id:!0,class:!0,href:!0});var lx=a(Rs);up=s(lx,"SPAN",{});var dx=a(up);y(li.$$.fragment,dx),dx.forEach(t),lx.forEach(t),dw=h(ou),gp=s(ou,"SPAN",{});var cx=a(gp);cw=i(cx,"FlaxRobertaModel"),cx.forEach(t),ou.forEach(t),Hm=h(o),Oe=s(o,"DIV",{class:!0});var ut=a(Oe);y(di.$$.fragment,ut),pw=h(ut),_p=s(ut,"P",{});var px=a(_p);hw=i(px,"The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),px.forEach(t),mw=h(ut),ci=s(ut,"P",{});var nu=a(ci);fw=i(nu,"This model inherits from "),dd=s(nu,"A",{href:!0});var hx=a(dd);uw=i(hx,"FlaxPreTrainedModel"),hx.forEach(t),gw=i(nu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),nu.forEach(t),_w=h(ut),pi=s(ut,"P",{});var su=a(pi);bw=i(su,"This model is also a Flax Linen "),hi=s(su,"A",{href:!0,rel:!0});var mx=a(hi);kw=i(mx,"flax.linen.Module"),mx.forEach(t),vw=i(su,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),su.forEach(t),Tw=h(ut),bp=s(ut,"P",{});var fx=a(bp);yw=i(fx,"Finally, this model supports inherent JAX features such as:"),fx.forEach(t),ww=h(ut),St=s(ut,"UL",{});var Xs=a(St);kp=s(Xs,"LI",{});var ux=a(kp);mi=s(ux,"A",{href:!0,rel:!0});var gx=a(mi);$w=i(gx,"Just-In-Time (JIT) compilation"),gx.forEach(t),ux.forEach(t),Fw=h(Xs),vp=s(Xs,"LI",{});var _x=a(vp);fi=s(_x,"A",{href:!0,rel:!0});var bx=a(fi);xw=i(bx,"Automatic Differentiation"),bx.forEach(t),_x.forEach(t),Rw=h(Xs),Tp=s(Xs,"LI",{});var kx=a(Tp);ui=s(kx,"A",{href:!0,rel:!0});var vx=a(ui);Mw=i(vx,"Vectorization"),vx.forEach(t),kx.forEach(t),Ew=h(Xs),yp=s(Xs,"LI",{});var Tx=a(yp);gi=s(Tx,"A",{href:!0,rel:!0});var yx=a(gi);zw=i(yx,"Parallelization"),yx.forEach(t),Tx.forEach(t),Xs.forEach(t),qw=h(ut),Mt=s(ut,"DIV",{class:!0});var Ys=a(Mt);y(_i.$$.fragment,Ys),Cw=h(Ys),Ko=s(Ys,"P",{});var Pd=a(Ko);jw=i(Pd,"The "),wp=s(Pd,"CODE",{});var wx=a(wp);Pw=i(wx,"FlaxRobertaPreTrainedModel"),wx.forEach(t),Lw=i(Pd," forward method, overrides the "),$p=s(Pd,"CODE",{});var $x=a($p);Aw=i($x,"__call__"),$x.forEach(t),Ow=i(Pd," special method."),Pd.forEach(t),Nw=h(Ys),y(Ms.$$.fragment,Ys),Iw=h(Ys),y(Es.$$.fragment,Ys),Ys.forEach(t),ut.forEach(t),Qm=h(o),Go=s(o,"H2",{class:!0});var au=a(Go);zs=s(au,"A",{id:!0,class:!0,href:!0});var Fx=a(zs);Fp=s(Fx,"SPAN",{});var xx=a(Fp);y(bi.$$.fragment,xx),xx.forEach(t),Fx.forEach(t),Dw=h(au),xp=s(au,"SPAN",{});var Rx=a(xp);Sw=i(Rx,"FlaxRobertaForMaskedLM"),Rx.forEach(t),au.forEach(t),Vm=h(o),Ne=s(o,"DIV",{class:!0});var gt=a(Ne);y(ki.$$.fragment,gt),Ww=h(gt),vi=s(gt,"P",{});var ru=a(vi);Bw=i(ru,"RoBERTa Model with a "),Rp=s(ru,"CODE",{});var Mx=a(Rp);Uw=i(Mx,"language modeling"),Mx.forEach(t),Hw=i(ru," head on top."),ru.forEach(t),Qw=h(gt),Ti=s(gt,"P",{});var iu=a(Ti);Vw=i(iu,"This model inherits from "),cd=s(iu,"A",{href:!0});var Ex=a(cd);Jw=i(Ex,"FlaxPreTrainedModel"),Ex.forEach(t),Kw=i(iu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),iu.forEach(t),Gw=h(gt),yi=s(gt,"P",{});var lu=a(yi);Xw=i(lu,"This model is also a Flax Linen "),wi=s(lu,"A",{href:!0,rel:!0});var zx=a(wi);Yw=i(zx,"flax.linen.Module"),zx.forEach(t),Zw=i(lu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),lu.forEach(t),e$=h(gt),Mp=s(gt,"P",{});var qx=a(Mp);t$=i(qx,"Finally, this model supports inherent JAX features such as:"),qx.forEach(t),o$=h(gt),Wt=s(gt,"UL",{});var Zs=a(Wt);Ep=s(Zs,"LI",{});var Cx=a(Ep);$i=s(Cx,"A",{href:!0,rel:!0});var jx=a($i);n$=i(jx,"Just-In-Time (JIT) compilation"),jx.forEach(t),Cx.forEach(t),s$=h(Zs),zp=s(Zs,"LI",{});var Px=a(zp);Fi=s(Px,"A",{href:!0,rel:!0});var Lx=a(Fi);a$=i(Lx,"Automatic Differentiation"),Lx.forEach(t),Px.forEach(t),r$=h(Zs),qp=s(Zs,"LI",{});var Ax=a(qp);xi=s(Ax,"A",{href:!0,rel:!0});var Ox=a(xi);i$=i(Ox,"Vectorization"),Ox.forEach(t),Ax.forEach(t),l$=h(Zs),Cp=s(Zs,"LI",{});var Nx=a(Cp);Ri=s(Nx,"A",{href:!0,rel:!0});var Ix=a(Ri);d$=i(Ix,"Parallelization"),Ix.forEach(t),Nx.forEach(t),Zs.forEach(t),c$=h(gt),Et=s(gt,"DIV",{class:!0});var ea=a(Et);y(Mi.$$.fragment,ea),p$=h(ea),Xo=s(ea,"P",{});var Ld=a(Xo);h$=i(Ld,"The "),jp=s(Ld,"CODE",{});var Dx=a(jp);m$=i(Dx,"FlaxRobertaPreTrainedModel"),Dx.forEach(t),f$=i(Ld," forward method, overrides the "),Pp=s(Ld,"CODE",{});var Sx=a(Pp);u$=i(Sx,"__call__"),Sx.forEach(t),g$=i(Ld," special method."),Ld.forEach(t),_$=h(ea),y(qs.$$.fragment,ea),b$=h(ea),y(Cs.$$.fragment,ea),ea.forEach(t),gt.forEach(t),Jm=h(o),Yo=s(o,"H2",{class:!0});var du=a(Yo);js=s(du,"A",{id:!0,class:!0,href:!0});var Wx=a(js);Lp=s(Wx,"SPAN",{});var Bx=a(Lp);y(Ei.$$.fragment,Bx),Bx.forEach(t),Wx.forEach(t),k$=h(du),Ap=s(du,"SPAN",{});var Ux=a(Ap);v$=i(Ux,"FlaxRobertaForSequenceClassification"),Ux.forEach(t),du.forEach(t),Km=h(o),Ie=s(o,"DIV",{class:!0});var _t=a(Ie);y(zi.$$.fragment,_t),T$=h(_t),Op=s(_t,"P",{});var Hx=a(Op);y$=i(Hx,`Roberta Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Hx.forEach(t),w$=h(_t),qi=s(_t,"P",{});var cu=a(qi);$$=i(cu,"This model inherits from "),pd=s(cu,"A",{href:!0});var Qx=a(pd);F$=i(Qx,"FlaxPreTrainedModel"),Qx.forEach(t),x$=i(cu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),cu.forEach(t),R$=h(_t),Ci=s(_t,"P",{});var pu=a(Ci);M$=i(pu,"This model is also a Flax Linen "),ji=s(pu,"A",{href:!0,rel:!0});var Vx=a(ji);E$=i(Vx,"flax.linen.Module"),Vx.forEach(t),z$=i(pu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),pu.forEach(t),q$=h(_t),Np=s(_t,"P",{});var Jx=a(Np);C$=i(Jx,"Finally, this model supports inherent JAX features such as:"),Jx.forEach(t),j$=h(_t),Bt=s(_t,"UL",{});var ta=a(Bt);Ip=s(ta,"LI",{});var Kx=a(Ip);Pi=s(Kx,"A",{href:!0,rel:!0});var Gx=a(Pi);P$=i(Gx,"Just-In-Time (JIT) compilation"),Gx.forEach(t),Kx.forEach(t),L$=h(ta),Dp=s(ta,"LI",{});var Xx=a(Dp);Li=s(Xx,"A",{href:!0,rel:!0});var Yx=a(Li);A$=i(Yx,"Automatic Differentiation"),Yx.forEach(t),Xx.forEach(t),O$=h(ta),Sp=s(ta,"LI",{});var Zx=a(Sp);Ai=s(Zx,"A",{href:!0,rel:!0});var eR=a(Ai);N$=i(eR,"Vectorization"),eR.forEach(t),Zx.forEach(t),I$=h(ta),Wp=s(ta,"LI",{});var tR=a(Wp);Oi=s(tR,"A",{href:!0,rel:!0});var oR=a(Oi);D$=i(oR,"Parallelization"),oR.forEach(t),tR.forEach(t),ta.forEach(t),S$=h(_t),zt=s(_t,"DIV",{class:!0});var oa=a(zt);y(Ni.$$.fragment,oa),W$=h(oa),Zo=s(oa,"P",{});var Ad=a(Zo);B$=i(Ad,"The "),Bp=s(Ad,"CODE",{});var nR=a(Bp);U$=i(nR,"FlaxRobertaPreTrainedModel"),nR.forEach(t),H$=i(Ad," forward method, overrides the "),Up=s(Ad,"CODE",{});var sR=a(Up);Q$=i(sR,"__call__"),sR.forEach(t),V$=i(Ad," special method."),Ad.forEach(t),J$=h(oa),y(Ps.$$.fragment,oa),K$=h(oa),y(Ls.$$.fragment,oa),oa.forEach(t),_t.forEach(t),Gm=h(o),en=s(o,"H2",{class:!0});var hu=a(en);As=s(hu,"A",{id:!0,class:!0,href:!0});var aR=a(As);Hp=s(aR,"SPAN",{});var rR=a(Hp);y(Ii.$$.fragment,rR),rR.forEach(t),aR.forEach(t),G$=h(hu),Qp=s(hu,"SPAN",{});var iR=a(Qp);X$=i(iR,"FlaxRobertaForMultipleChoice"),iR.forEach(t),hu.forEach(t),Xm=h(o),De=s(o,"DIV",{class:!0});var bt=a(De);y(Di.$$.fragment,bt),Y$=h(bt),Vp=s(bt,"P",{});var lR=a(Vp);Z$=i(lR,`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),lR.forEach(t),e1=h(bt),Si=s(bt,"P",{});var mu=a(Si);t1=i(mu,"This model inherits from "),hd=s(mu,"A",{href:!0});var dR=a(hd);o1=i(dR,"FlaxPreTrainedModel"),dR.forEach(t),n1=i(mu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),mu.forEach(t),s1=h(bt),Wi=s(bt,"P",{});var fu=a(Wi);a1=i(fu,"This model is also a Flax Linen "),Bi=s(fu,"A",{href:!0,rel:!0});var cR=a(Bi);r1=i(cR,"flax.linen.Module"),cR.forEach(t),i1=i(fu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),fu.forEach(t),l1=h(bt),Jp=s(bt,"P",{});var pR=a(Jp);d1=i(pR,"Finally, this model supports inherent JAX features such as:"),pR.forEach(t),c1=h(bt),Ut=s(bt,"UL",{});var na=a(Ut);Kp=s(na,"LI",{});var hR=a(Kp);Ui=s(hR,"A",{href:!0,rel:!0});var mR=a(Ui);p1=i(mR,"Just-In-Time (JIT) compilation"),mR.forEach(t),hR.forEach(t),h1=h(na),Gp=s(na,"LI",{});var fR=a(Gp);Hi=s(fR,"A",{href:!0,rel:!0});var uR=a(Hi);m1=i(uR,"Automatic Differentiation"),uR.forEach(t),fR.forEach(t),f1=h(na),Xp=s(na,"LI",{});var gR=a(Xp);Qi=s(gR,"A",{href:!0,rel:!0});var _R=a(Qi);u1=i(_R,"Vectorization"),_R.forEach(t),gR.forEach(t),g1=h(na),Yp=s(na,"LI",{});var bR=a(Yp);Vi=s(bR,"A",{href:!0,rel:!0});var kR=a(Vi);_1=i(kR,"Parallelization"),kR.forEach(t),bR.forEach(t),na.forEach(t),b1=h(bt),qt=s(bt,"DIV",{class:!0});var sa=a(qt);y(Ji.$$.fragment,sa),k1=h(sa),tn=s(sa,"P",{});var Od=a(tn);v1=i(Od,"The "),Zp=s(Od,"CODE",{});var vR=a(Zp);T1=i(vR,"FlaxRobertaPreTrainedModel"),vR.forEach(t),y1=i(Od," forward method, overrides the "),eh=s(Od,"CODE",{});var TR=a(eh);w1=i(TR,"__call__"),TR.forEach(t),$1=i(Od," special method."),Od.forEach(t),F1=h(sa),y(Os.$$.fragment,sa),x1=h(sa),y(Ns.$$.fragment,sa),sa.forEach(t),bt.forEach(t),Ym=h(o),on=s(o,"H2",{class:!0});var uu=a(on);Is=s(uu,"A",{id:!0,class:!0,href:!0});var yR=a(Is);th=s(yR,"SPAN",{});var wR=a(th);y(Ki.$$.fragment,wR),wR.forEach(t),yR.forEach(t),R1=h(uu),oh=s(uu,"SPAN",{});var $R=a(oh);M1=i($R,"FlaxRobertaForTokenClassification"),$R.forEach(t),uu.forEach(t),Zm=h(o),Se=s(o,"DIV",{class:!0});var kt=a(Se);y(Gi.$$.fragment,kt),E1=h(kt),nh=s(kt,"P",{});var FR=a(nh);z1=i(FR,`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),FR.forEach(t),q1=h(kt),Xi=s(kt,"P",{});var gu=a(Xi);C1=i(gu,"This model inherits from "),md=s(gu,"A",{href:!0});var xR=a(md);j1=i(xR,"FlaxPreTrainedModel"),xR.forEach(t),P1=i(gu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),gu.forEach(t),L1=h(kt),Yi=s(kt,"P",{});var _u=a(Yi);A1=i(_u,"This model is also a Flax Linen "),Zi=s(_u,"A",{href:!0,rel:!0});var RR=a(Zi);O1=i(RR,"flax.linen.Module"),RR.forEach(t),N1=i(_u,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),_u.forEach(t),I1=h(kt),sh=s(kt,"P",{});var MR=a(sh);D1=i(MR,"Finally, this model supports inherent JAX features such as:"),MR.forEach(t),S1=h(kt),Ht=s(kt,"UL",{});var aa=a(Ht);ah=s(aa,"LI",{});var ER=a(ah);el=s(ER,"A",{href:!0,rel:!0});var zR=a(el);W1=i(zR,"Just-In-Time (JIT) compilation"),zR.forEach(t),ER.forEach(t),B1=h(aa),rh=s(aa,"LI",{});var qR=a(rh);tl=s(qR,"A",{href:!0,rel:!0});var CR=a(tl);U1=i(CR,"Automatic Differentiation"),CR.forEach(t),qR.forEach(t),H1=h(aa),ih=s(aa,"LI",{});var jR=a(ih);ol=s(jR,"A",{href:!0,rel:!0});var PR=a(ol);Q1=i(PR,"Vectorization"),PR.forEach(t),jR.forEach(t),V1=h(aa),lh=s(aa,"LI",{});var LR=a(lh);nl=s(LR,"A",{href:!0,rel:!0});var AR=a(nl);J1=i(AR,"Parallelization"),AR.forEach(t),LR.forEach(t),aa.forEach(t),K1=h(kt),Ct=s(kt,"DIV",{class:!0});var ra=a(Ct);y(sl.$$.fragment,ra),G1=h(ra),nn=s(ra,"P",{});var Nd=a(nn);X1=i(Nd,"The "),dh=s(Nd,"CODE",{});var OR=a(dh);Y1=i(OR,"FlaxRobertaPreTrainedModel"),OR.forEach(t),Z1=i(Nd," forward method, overrides the "),ch=s(Nd,"CODE",{});var NR=a(ch);e2=i(NR,"__call__"),NR.forEach(t),t2=i(Nd," special method."),Nd.forEach(t),o2=h(ra),y(Ds.$$.fragment,ra),n2=h(ra),y(Ss.$$.fragment,ra),ra.forEach(t),kt.forEach(t),ef=h(o),sn=s(o,"H2",{class:!0});var bu=a(sn);Ws=s(bu,"A",{id:!0,class:!0,href:!0});var IR=a(Ws);ph=s(IR,"SPAN",{});var DR=a(ph);y(al.$$.fragment,DR),DR.forEach(t),IR.forEach(t),s2=h(bu),hh=s(bu,"SPAN",{});var SR=a(hh);a2=i(SR,"FlaxRobertaForQuestionAnswering"),SR.forEach(t),bu.forEach(t),tf=h(o),We=s(o,"DIV",{class:!0});var vt=a(We);y(rl.$$.fragment,vt),r2=h(vt),an=s(vt,"P",{});var Id=a(an);i2=i(Id,`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),mh=s(Id,"CODE",{});var WR=a(mh);l2=i(WR,"span start logits"),WR.forEach(t),d2=i(Id," and "),fh=s(Id,"CODE",{});var BR=a(fh);c2=i(BR,"span end logits"),BR.forEach(t),p2=i(Id,")."),Id.forEach(t),h2=h(vt),il=s(vt,"P",{});var ku=a(il);m2=i(ku,"This model inherits from "),fd=s(ku,"A",{href:!0});var UR=a(fd);f2=i(UR,"FlaxPreTrainedModel"),UR.forEach(t),u2=i(ku,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ku.forEach(t),g2=h(vt),ll=s(vt,"P",{});var vu=a(ll);_2=i(vu,"This model is also a Flax Linen "),dl=s(vu,"A",{href:!0,rel:!0});var HR=a(dl);b2=i(HR,"flax.linen.Module"),HR.forEach(t),k2=i(vu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),vu.forEach(t),v2=h(vt),uh=s(vt,"P",{});var QR=a(uh);T2=i(QR,"Finally, this model supports inherent JAX features such as:"),QR.forEach(t),y2=h(vt),Qt=s(vt,"UL",{});var ia=a(Qt);gh=s(ia,"LI",{});var VR=a(gh);cl=s(VR,"A",{href:!0,rel:!0});var JR=a(cl);w2=i(JR,"Just-In-Time (JIT) compilation"),JR.forEach(t),VR.forEach(t),$2=h(ia),_h=s(ia,"LI",{});var KR=a(_h);pl=s(KR,"A",{href:!0,rel:!0});var GR=a(pl);F2=i(GR,"Automatic Differentiation"),GR.forEach(t),KR.forEach(t),x2=h(ia),bh=s(ia,"LI",{});var XR=a(bh);hl=s(XR,"A",{href:!0,rel:!0});var YR=a(hl);R2=i(YR,"Vectorization"),YR.forEach(t),XR.forEach(t),M2=h(ia),kh=s(ia,"LI",{});var ZR=a(kh);ml=s(ZR,"A",{href:!0,rel:!0});var eM=a(ml);E2=i(eM,"Parallelization"),eM.forEach(t),ZR.forEach(t),ia.forEach(t),z2=h(vt),jt=s(vt,"DIV",{class:!0});var la=a(jt);y(fl.$$.fragment,la),q2=h(la),rn=s(la,"P",{});var Dd=a(rn);C2=i(Dd,"The "),vh=s(Dd,"CODE",{});var tM=a(vh);j2=i(tM,"FlaxRobertaPreTrainedModel"),tM.forEach(t),P2=i(Dd," forward method, overrides the "),Th=s(Dd,"CODE",{});var oM=a(Th);L2=i(oM,"__call__"),oM.forEach(t),A2=i(Dd," special method."),Dd.forEach(t),O2=h(la),y(Bs.$$.fragment,la),N2=h(la),y(Us.$$.fragment,la),la.forEach(t),vt.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(gE)),u(m,"id","roberta"),u(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(m,"href","#roberta"),u(c,"class","relative group"),u(X,"id","overview"),u(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(X,"href","#overview"),u(z,"class","relative group"),u(ae,"href","https://arxiv.org/abs/1907.11692"),u(ae,"rel","nofollow"),u(pe,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertModel"),u(xe,"href","camembert"),u(da,"href","https://huggingface.co/julien-c"),u(da,"rel","nofollow"),u(ca,"href","https://github.com/pytorch/fairseq/tree/master/examples/roberta"),u(ca,"rel","nofollow"),u(hn,"id","transformers.RobertaConfig"),u(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(hn,"href","#transformers.RobertaConfig"),u(ho,"class","relative group"),u($l,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaModel"),u(Fl,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaModel"),u(ma,"href","https://huggingface.co/roberta-base"),u(ma,"rel","nofollow"),u(xl,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(Rl,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(Ml,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"),u(El,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fn,"id","transformers.RobertaTokenizer"),u(fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(fn,"href","#transformers.RobertaTokenizer"),u(uo,"class","relative group"),u(zl,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(jl,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(kn,"id","transformers.RobertaTokenizerFast"),u(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(kn,"href","#transformers.RobertaTokenizerFast"),u(go,"class","relative group"),u(Pl,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(Ll,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(yn,"id","transformers.RobertaModel"),u(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(yn,"href","#transformers.RobertaModel"),u(_o,"class","relative group"),u(Al,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Pa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Pa,"rel","nofollow"),u(Aa,"href","https://arxiv.org/abs/1706.03762"),u(Aa,"rel","nofollow"),u(Ol,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaModel"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xn,"id","transformers.RobertaForCausalLM"),u(xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(xn,"href","#transformers.RobertaForCausalLM"),u(ko,"class","relative group"),u(Nl,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Ba,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ba,"rel","nofollow"),u(Il,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForCausalLM"),u(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(En,"id","transformers.RobertaForMaskedLM"),u(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(En,"href","#transformers.RobertaForMaskedLM"),u(To,"class","relative group"),u(Dl,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Ga,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ga,"rel","nofollow"),u(Sl,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForMaskedLM"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(jn,"id","transformers.RobertaForSequenceClassification"),u(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(jn,"href","#transformers.RobertaForSequenceClassification"),u(wo,"class","relative group"),u(Wl,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(or,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(or,"rel","nofollow"),u(Bl,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForSequenceClassification"),u(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(In,"id","transformers.RobertaForMultipleChoice"),u(In,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(In,"href","#transformers.RobertaForMultipleChoice"),u(Fo,"class","relative group"),u(Ul,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(lr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(lr,"rel","nofollow"),u(Hl,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForMultipleChoice"),u($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Wn,"id","transformers.RobertaForTokenClassification"),u(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Wn,"href","#transformers.RobertaForTokenClassification"),u(Ro,"class","relative group"),u(Ql,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(fr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(fr,"rel","nofollow"),u(Vl,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForTokenClassification"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qn,"id","transformers.RobertaForQuestionAnswering"),u(Qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Qn,"href","#transformers.RobertaForQuestionAnswering"),u(Eo,"class","relative group"),u(Jl,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(vr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(vr,"rel","nofollow"),u(Kl,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForQuestionAnswering"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gn,"id","transformers.TFRobertaModel"),u(Gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Gn,"href","#transformers.TFRobertaModel"),u(Co,"class","relative group"),u(Gl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(xr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(xr,"rel","nofollow"),u(Xl,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaModel"),u(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(es,"id","transformers.TFRobertaForCausalLM"),u(es,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(es,"href","#transformers.TFRobertaForCausalLM"),u(Po,"class","relative group"),u(Yl,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForCausalLM"),u(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ns,"id","transformers.TFRobertaForMaskedLM"),u(ns,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ns,"href","#transformers.TFRobertaForMaskedLM"),u(Oo,"class","relative group"),u(Zl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ar,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ar,"rel","nofollow"),u(ed,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForMaskedLM"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ls,"id","transformers.TFRobertaForSequenceClassification"),u(ls,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ls,"href","#transformers.TFRobertaForSequenceClassification"),u(Io,"class","relative group"),u(td,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Wr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Wr,"rel","nofollow"),u(od,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForSequenceClassification"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ms,"id","transformers.TFRobertaForMultipleChoice"),u(ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ms,"href","#transformers.TFRobertaForMultipleChoice"),u(So,"class","relative group"),u(nd,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Jr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Jr,"rel","nofollow"),u(sd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForMultipleChoice"),u(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_s,"id","transformers.TFRobertaForTokenClassification"),u(_s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_s,"href","#transformers.TFRobertaForTokenClassification"),u(Bo,"class","relative group"),u(ad,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(ei,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ei,"rel","nofollow"),u(rd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForTokenClassification"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ys,"id","transformers.TFRobertaForQuestionAnswering"),u(ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ys,"href","#transformers.TFRobertaForQuestionAnswering"),u(Ho,"class","relative group"),u(id,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(ri,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ri,"rel","nofollow"),u(ld,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForQuestionAnswering"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Rs,"id","transformers.FlaxRobertaModel"),u(Rs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Rs,"href","#transformers.FlaxRobertaModel"),u(Jo,"class","relative group"),u(dd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(hi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(hi,"rel","nofollow"),u(mi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(mi,"rel","nofollow"),u(fi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(fi,"rel","nofollow"),u(ui,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ui,"rel","nofollow"),u(gi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(gi,"rel","nofollow"),u(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(zs,"id","transformers.FlaxRobertaForMaskedLM"),u(zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(zs,"href","#transformers.FlaxRobertaForMaskedLM"),u(Go,"class","relative group"),u(cd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(wi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(wi,"rel","nofollow"),u($i,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u($i,"rel","nofollow"),u(Fi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Fi,"rel","nofollow"),u(xi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(xi,"rel","nofollow"),u(Ri,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ri,"rel","nofollow"),u(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(js,"id","transformers.FlaxRobertaForSequenceClassification"),u(js,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(js,"href","#transformers.FlaxRobertaForSequenceClassification"),u(Yo,"class","relative group"),u(pd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(ji,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(ji,"rel","nofollow"),u(Pi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Pi,"rel","nofollow"),u(Li,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Li,"rel","nofollow"),u(Ai,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Ai,"rel","nofollow"),u(Oi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Oi,"rel","nofollow"),u(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(As,"id","transformers.FlaxRobertaForMultipleChoice"),u(As,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(As,"href","#transformers.FlaxRobertaForMultipleChoice"),u(en,"class","relative group"),u(hd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Bi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Bi,"rel","nofollow"),u(Ui,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ui,"rel","nofollow"),u(Hi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Hi,"rel","nofollow"),u(Qi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Qi,"rel","nofollow"),u(Vi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Vi,"rel","nofollow"),u(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Is,"id","transformers.FlaxRobertaForTokenClassification"),u(Is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Is,"href","#transformers.FlaxRobertaForTokenClassification"),u(on,"class","relative group"),u(md,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Zi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Zi,"rel","nofollow"),u(el,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(el,"rel","nofollow"),u(tl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(tl,"rel","nofollow"),u(ol,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ol,"rel","nofollow"),u(nl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(nl,"rel","nofollow"),u(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ws,"id","transformers.FlaxRobertaForQuestionAnswering"),u(Ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ws,"href","#transformers.FlaxRobertaForQuestionAnswering"),u(sn,"class","relative group"),u(fd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(dl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(dl,"rel","nofollow"),u(cl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(cl,"rel","nofollow"),u(pl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(pl,"rel","nofollow"),u(hl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(hl,"rel","nofollow"),u(ml,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(ml,"rel","nofollow"),u(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,b){e(document.head,d),k(o,g,b),k(o,c,b),e(c,m),e(m,_),w(l,_,null),e(c,f),e(c,M),e(M,Y),k(o,I,b),k(o,z,b),e(z,X),e(X,D),w(se,D,null),e(z,be),e(z,S),e(S,ke),k(o,fe,b),k(o,K,b),e(K,A),e(K,ae),e(ae,Z),e(K,q),k(o,j,b),k(o,ie,b),e(ie,U),k(o,ue,b),k(o,le,b),e(le,H),k(o,ge,b),k(o,de,b),e(de,C),e(C,ve),k(o,W,b),k(o,ce,b),e(ce,Te),k(o,B,b),k(o,G,b),e(G,re),e(re,O),e(re,pe),e(pe,Q),e(re,ye),e(G,v),e(G,E),e(E,ee),e(G,Ee),e(G,me),e(me,N),e(me,Re),e(Re,ze),e(me,qe),e(me,L),e(L,V),e(me,Ce),e(me,Me),e(Me,J),e(me,je),e(G,Pe),e(G,he),e(he,xe),e(xe,Tu),e(he,yu),k(o,dm,b),k(o,Gt,b),e(Gt,wu),e(Gt,da),e(da,$u),e(Gt,Fu),e(Gt,ca),e(ca,xu),e(Gt,Ru),k(o,cm,b),k(o,ho,b),e(ho,hn),e(hn,Sd),w(pa,Sd,null),e(ho,Mu),e(ho,Wd),e(Wd,Eu),k(o,pm,b),k(o,Ze,b),w(ha,Ze,null),e(Ze,zu),e(Ze,Dt),e(Dt,qu),e(Dt,$l),e($l,Cu),e(Dt,ju),e(Dt,Fl),e(Fl,Pu),e(Dt,Lu),e(Dt,ma),e(ma,Au),e(Dt,Ou),e(Ze,Nu),e(Ze,mo),e(mo,Iu),e(mo,xl),e(xl,Du),e(mo,Su),e(mo,Rl),e(Rl,Wu),e(mo,Bu),e(Ze,Uu),e(Ze,fo),e(fo,Hu),e(fo,Ml),e(Ml,Qu),e(fo,Vu),e(fo,El),e(El,Ju),e(fo,Ku),e(Ze,Gu),w(mn,Ze,null),k(o,hm,b),k(o,uo,b),e(uo,fn),e(fn,Bd),w(fa,Bd,null),e(uo,Xu),e(uo,Ud),e(Ud,Yu),k(o,mm,b),k(o,we,b),w(ua,we,null),e(we,Zu),e(we,Hd),e(Hd,eg),e(we,tg),e(we,Qd),e(Qd,og),e(we,ng),w(un,we,null),e(we,sg),e(we,ga),e(ga,ag),e(ga,Vd),e(Vd,rg),e(ga,ig),e(we,lg),w(gn,we,null),e(we,dg),e(we,_a),e(_a,cg),e(_a,zl),e(zl,pg),e(_a,hg),e(we,mg),e(we,Xt),w(ba,Xt,null),e(Xt,fg),e(Xt,Jd),e(Jd,ug),e(Xt,gg),e(Xt,ka),e(ka,ql),e(ql,_g),e(ql,Kd),e(Kd,bg),e(ka,kg),e(ka,Cl),e(Cl,vg),e(Cl,Gd),e(Gd,Tg),e(we,yg),e(we,_n),w(va,_n,null),e(_n,wg),e(_n,Ta),e(Ta,$g),e(Ta,Xd),e(Xd,Fg),e(Ta,xg),e(we,Rg),e(we,bn),w(ya,bn,null),e(bn,Mg),e(bn,Yd),e(Yd,Eg),e(we,zg),e(we,jl),w(wa,jl,null),k(o,fm,b),k(o,go,b),e(go,kn),e(kn,Zd),w($a,Zd,null),e(go,qg),e(go,ec),e(ec,Cg),k(o,um,b),k(o,Le,b),w(Fa,Le,null),e(Le,jg),e(Le,xa),e(xa,Pg),e(xa,tc),e(tc,Lg),e(xa,Ag),e(Le,Og),e(Le,oc),e(oc,Ng),e(Le,Ig),w(vn,Le,null),e(Le,Dg),e(Le,Ra),e(Ra,Sg),e(Ra,nc),e(nc,Wg),e(Ra,Bg),e(Le,Ug),w(Tn,Le,null),e(Le,Hg),e(Le,Ma),e(Ma,Qg),e(Ma,Pl),e(Pl,Vg),e(Ma,Jg),e(Le,Kg),e(Le,Ll),w(Ea,Ll,null),k(o,gm,b),k(o,_o,b),e(_o,yn),e(yn,sc),w(za,sc,null),e(_o,Gg),e(_o,ac),e(ac,Xg),k(o,_m,b),k(o,Ae,b),w(qa,Ae,null),e(Ae,Yg),e(Ae,rc),e(rc,Zg),e(Ae,e_),e(Ae,Ca),e(Ca,t_),e(Ca,Al),e(Al,o_),e(Ca,n_),e(Ae,s_),e(Ae,ja),e(ja,a_),e(ja,Pa),e(Pa,r_),e(ja,i_),e(Ae,l_),e(Ae,La),e(La,d_),e(La,ic),e(ic,c_),e(La,p_),e(Ae,h_),e(Ae,Ue),e(Ue,m_),e(Ue,lc),e(lc,f_),e(Ue,u_),e(Ue,dc),e(dc,g_),e(Ue,__),e(Ue,cc),e(cc,b_),e(Ue,k_),e(Ue,pc),e(pc,v_),e(Ue,T_),e(Ue,hc),e(hc,y_),e(Ue,w_),e(Ue,mc),e(mc,$_),e(Ue,F_),e(Ae,x_),e(Ae,wn),e(wn,R_),e(wn,fc),e(fc,M_),e(wn,E_),e(wn,Aa),e(Aa,z_),e(Ae,q_),e(Ae,yt),w(Oa,yt,null),e(yt,C_),e(yt,bo),e(bo,j_),e(bo,Ol),e(Ol,P_),e(bo,L_),e(bo,uc),e(uc,A_),e(bo,O_),e(yt,N_),w($n,yt,null),e(yt,I_),w(Fn,yt,null),k(o,bm,b),k(o,ko,b),e(ko,xn),e(xn,gc),w(Na,gc,null),e(ko,D_),e(ko,_c),e(_c,S_),k(o,km,b),k(o,et,b),w(Ia,et,null),e(et,W_),e(et,Da),e(Da,B_),e(Da,bc),e(bc,U_),e(Da,H_),e(et,Q_),e(et,Sa),e(Sa,V_),e(Sa,Nl),e(Nl,J_),e(Sa,K_),e(et,G_),e(et,Wa),e(Wa,X_),e(Wa,Ba),e(Ba,Y_),e(Wa,Z_),e(et,eb),e(et,wt),w(Ua,wt,null),e(wt,tb),e(wt,vo),e(vo,ob),e(vo,Il),e(Il,nb),e(vo,sb),e(vo,kc),e(kc,ab),e(vo,rb),e(wt,ib),w(Rn,wt,null),e(wt,lb),w(Mn,wt,null),k(o,vm,b),k(o,To,b),e(To,En),e(En,vc),w(Ha,vc,null),e(To,db),e(To,Tc),e(Tc,cb),k(o,Tm,b),k(o,tt,b),w(Qa,tt,null),e(tt,pb),e(tt,Va),e(Va,hb),e(Va,yc),e(yc,mb),e(Va,fb),e(tt,ub),e(tt,Ja),e(Ja,gb),e(Ja,Dl),e(Dl,_b),e(Ja,bb),e(tt,kb),e(tt,Ka),e(Ka,vb),e(Ka,Ga),e(Ga,Tb),e(Ka,yb),e(tt,wb),e(tt,rt),w(Xa,rt,null),e(rt,$b),e(rt,yo),e(yo,Fb),e(yo,Sl),e(Sl,xb),e(yo,Rb),e(yo,wc),e(wc,Mb),e(yo,Eb),e(rt,zb),w(zn,rt,null),e(rt,qb),w(qn,rt,null),e(rt,Cb),w(Cn,rt,null),k(o,ym,b),k(o,wo,b),e(wo,jn),e(jn,$c),w(Ya,$c,null),e(wo,jb),e(wo,Fc),e(Fc,Pb),k(o,wm,b),k(o,ot,b),w(Za,ot,null),e(ot,Lb),e(ot,xc),e(xc,Ab),e(ot,Ob),e(ot,er),e(er,Nb),e(er,Wl),e(Wl,Ib),e(er,Db),e(ot,Sb),e(ot,tr),e(tr,Wb),e(tr,or),e(or,Bb),e(tr,Ub),e(ot,Hb),e(ot,Be),w(nr,Be,null),e(Be,Qb),e(Be,$o),e($o,Vb),e($o,Bl),e(Bl,Jb),e($o,Kb),e($o,Rc),e(Rc,Gb),e($o,Xb),e(Be,Yb),w(Pn,Be,null),e(Be,Zb),w(Ln,Be,null),e(Be,ek),w(An,Be,null),e(Be,tk),w(On,Be,null),e(Be,ok),w(Nn,Be,null),k(o,$m,b),k(o,Fo,b),e(Fo,In),e(In,Mc),w(sr,Mc,null),e(Fo,nk),e(Fo,Ec),e(Ec,sk),k(o,Fm,b),k(o,nt,b),w(ar,nt,null),e(nt,ak),e(nt,zc),e(zc,rk),e(nt,ik),e(nt,rr),e(rr,lk),e(rr,Ul),e(Ul,dk),e(rr,ck),e(nt,pk),e(nt,ir),e(ir,hk),e(ir,lr),e(lr,mk),e(ir,fk),e(nt,uk),e(nt,$t),w(dr,$t,null),e($t,gk),e($t,xo),e(xo,_k),e(xo,Hl),e(Hl,bk),e(xo,kk),e(xo,qc),e(qc,vk),e(xo,Tk),e($t,yk),w(Dn,$t,null),e($t,wk),w(Sn,$t,null),k(o,xm,b),k(o,Ro,b),e(Ro,Wn),e(Wn,Cc),w(cr,Cc,null),e(Ro,$k),e(Ro,jc),e(jc,Fk),k(o,Rm,b),k(o,st,b),w(pr,st,null),e(st,xk),e(st,Pc),e(Pc,Rk),e(st,Mk),e(st,hr),e(hr,Ek),e(hr,Ql),e(Ql,zk),e(hr,qk),e(st,Ck),e(st,mr),e(mr,jk),e(mr,fr),e(fr,Pk),e(mr,Lk),e(st,Ak),e(st,it),w(ur,it,null),e(it,Ok),e(it,Mo),e(Mo,Nk),e(Mo,Vl),e(Vl,Ik),e(Mo,Dk),e(Mo,Lc),e(Lc,Sk),e(Mo,Wk),e(it,Bk),w(Bn,it,null),e(it,Uk),w(Un,it,null),e(it,Hk),w(Hn,it,null),k(o,Mm,b),k(o,Eo,b),e(Eo,Qn),e(Qn,Ac),w(gr,Ac,null),e(Eo,Qk),e(Eo,Oc),e(Oc,Vk),k(o,Em,b),k(o,at,b),w(_r,at,null),e(at,Jk),e(at,zo),e(zo,Kk),e(zo,Nc),e(Nc,Gk),e(zo,Xk),e(zo,Ic),e(Ic,Yk),e(zo,Zk),e(at,ev),e(at,br),e(br,tv),e(br,Jl),e(Jl,ov),e(br,nv),e(at,sv),e(at,kr),e(kr,av),e(kr,vr),e(vr,rv),e(kr,iv),e(at,lv),e(at,lt),w(Tr,lt,null),e(lt,dv),e(lt,qo),e(qo,cv),e(qo,Kl),e(Kl,pv),e(qo,hv),e(qo,Dc),e(Dc,mv),e(qo,fv),e(lt,uv),w(Vn,lt,null),e(lt,gv),w(Jn,lt,null),e(lt,_v),w(Kn,lt,null),k(o,zm,b),k(o,Co,b),e(Co,Gn),e(Gn,Sc),w(yr,Sc,null),e(Co,bv),e(Co,Wc),e(Wc,kv),k(o,qm,b),k(o,He,b),w(wr,He,null),e(He,vv),e(He,Bc),e(Bc,Tv),e(He,yv),e(He,$r),e($r,wv),e($r,Gl),e(Gl,$v),e($r,Fv),e(He,xv),e(He,Fr),e(Fr,Rv),e(Fr,xr),e(xr,Mv),e(Fr,Ev),e(He,zv),w(Xn,He,null),e(He,qv),e(He,Ft),w(Rr,Ft,null),e(Ft,Cv),e(Ft,jo),e(jo,jv),e(jo,Xl),e(Xl,Pv),e(jo,Lv),e(jo,Uc),e(Uc,Av),e(jo,Ov),e(Ft,Nv),w(Yn,Ft,null),e(Ft,Iv),w(Zn,Ft,null),k(o,Cm,b),k(o,Po,b),e(Po,es),e(es,Hc),w(Mr,Hc,null),e(Po,Dv),e(Po,Qc),e(Qc,Sv),k(o,jm,b),k(o,Lo,b),w(Er,Lo,null),e(Lo,Wv),e(Lo,xt),w(zr,xt,null),e(xt,Bv),e(xt,Ao),e(Ao,Uv),e(Ao,Yl),e(Yl,Hv),e(Ao,Qv),e(Ao,Vc),e(Vc,Vv),e(Ao,Jv),e(xt,Kv),w(ts,xt,null),e(xt,Gv),w(os,xt,null),k(o,Pm,b),k(o,Oo,b),e(Oo,ns),e(ns,Jc),w(qr,Jc,null),e(Oo,Xv),e(Oo,Kc),e(Kc,Yv),k(o,Lm,b),k(o,Qe,b),w(Cr,Qe,null),e(Qe,Zv),e(Qe,jr),e(jr,eT),e(jr,Gc),e(Gc,tT),e(jr,oT),e(Qe,nT),e(Qe,Pr),e(Pr,sT),e(Pr,Zl),e(Zl,aT),e(Pr,rT),e(Qe,iT),e(Qe,Lr),e(Lr,lT),e(Lr,Ar),e(Ar,dT),e(Lr,cT),e(Qe,pT),w(ss,Qe,null),e(Qe,hT),e(Qe,dt),w(Or,dt,null),e(dt,mT),e(dt,No),e(No,fT),e(No,ed),e(ed,uT),e(No,gT),e(No,Xc),e(Xc,_T),e(No,bT),e(dt,kT),w(as,dt,null),e(dt,vT),w(rs,dt,null),e(dt,TT),w(is,dt,null),k(o,Am,b),k(o,Io,b),e(Io,ls),e(ls,Yc),w(Nr,Yc,null),e(Io,yT),e(Io,Zc),e(Zc,wT),k(o,Om,b),k(o,Ve,b),w(Ir,Ve,null),e(Ve,$T),e(Ve,ep),e(ep,FT),e(Ve,xT),e(Ve,Dr),e(Dr,RT),e(Dr,td),e(td,MT),e(Dr,ET),e(Ve,zT),e(Ve,Sr),e(Sr,qT),e(Sr,Wr),e(Wr,CT),e(Sr,jT),e(Ve,PT),w(ds,Ve,null),e(Ve,LT),e(Ve,ct),w(Br,ct,null),e(ct,AT),e(ct,Do),e(Do,OT),e(Do,od),e(od,NT),e(Do,IT),e(Do,tp),e(tp,DT),e(Do,ST),e(ct,WT),w(cs,ct,null),e(ct,BT),w(ps,ct,null),e(ct,UT),w(hs,ct,null),k(o,Nm,b),k(o,So,b),e(So,ms),e(ms,op),w(Ur,op,null),e(So,HT),e(So,np),e(np,QT),k(o,Im,b),k(o,Je,b),w(Hr,Je,null),e(Je,VT),e(Je,sp),e(sp,JT),e(Je,KT),e(Je,Qr),e(Qr,GT),e(Qr,nd),e(nd,XT),e(Qr,YT),e(Je,ZT),e(Je,Vr),e(Vr,ey),e(Vr,Jr),e(Jr,ty),e(Vr,oy),e(Je,ny),w(fs,Je,null),e(Je,sy),e(Je,Rt),w(Kr,Rt,null),e(Rt,ay),e(Rt,Wo),e(Wo,ry),e(Wo,sd),e(sd,iy),e(Wo,ly),e(Wo,ap),e(ap,dy),e(Wo,cy),e(Rt,py),w(us,Rt,null),e(Rt,hy),w(gs,Rt,null),k(o,Dm,b),k(o,Bo,b),e(Bo,_s),e(_s,rp),w(Gr,rp,null),e(Bo,my),e(Bo,ip),e(ip,fy),k(o,Sm,b),k(o,Ke,b),w(Xr,Ke,null),e(Ke,uy),e(Ke,lp),e(lp,gy),e(Ke,_y),e(Ke,Yr),e(Yr,by),e(Yr,ad),e(ad,ky),e(Yr,vy),e(Ke,Ty),e(Ke,Zr),e(Zr,yy),e(Zr,ei),e(ei,wy),e(Zr,$y),e(Ke,Fy),w(bs,Ke,null),e(Ke,xy),e(Ke,pt),w(ti,pt,null),e(pt,Ry),e(pt,Uo),e(Uo,My),e(Uo,rd),e(rd,Ey),e(Uo,zy),e(Uo,dp),e(dp,qy),e(Uo,Cy),e(pt,jy),w(ks,pt,null),e(pt,Py),w(vs,pt,null),e(pt,Ly),w(Ts,pt,null),k(o,Wm,b),k(o,Ho,b),e(Ho,ys),e(ys,cp),w(oi,cp,null),e(Ho,Ay),e(Ho,pp),e(pp,Oy),k(o,Bm,b),k(o,Ge,b),w(ni,Ge,null),e(Ge,Ny),e(Ge,Qo),e(Qo,Iy),e(Qo,hp),e(hp,Dy),e(Qo,Sy),e(Qo,mp),e(mp,Wy),e(Qo,By),e(Ge,Uy),e(Ge,si),e(si,Hy),e(si,id),e(id,Qy),e(si,Vy),e(Ge,Jy),e(Ge,ai),e(ai,Ky),e(ai,ri),e(ri,Gy),e(ai,Xy),e(Ge,Yy),w(ws,Ge,null),e(Ge,Zy),e(Ge,ht),w(ii,ht,null),e(ht,ew),e(ht,Vo),e(Vo,tw),e(Vo,ld),e(ld,ow),e(Vo,nw),e(Vo,fp),e(fp,sw),e(Vo,aw),e(ht,rw),w($s,ht,null),e(ht,iw),w(Fs,ht,null),e(ht,lw),w(xs,ht,null),k(o,Um,b),k(o,Jo,b),e(Jo,Rs),e(Rs,up),w(li,up,null),e(Jo,dw),e(Jo,gp),e(gp,cw),k(o,Hm,b),k(o,Oe,b),w(di,Oe,null),e(Oe,pw),e(Oe,_p),e(_p,hw),e(Oe,mw),e(Oe,ci),e(ci,fw),e(ci,dd),e(dd,uw),e(ci,gw),e(Oe,_w),e(Oe,pi),e(pi,bw),e(pi,hi),e(hi,kw),e(pi,vw),e(Oe,Tw),e(Oe,bp),e(bp,yw),e(Oe,ww),e(Oe,St),e(St,kp),e(kp,mi),e(mi,$w),e(St,Fw),e(St,vp),e(vp,fi),e(fi,xw),e(St,Rw),e(St,Tp),e(Tp,ui),e(ui,Mw),e(St,Ew),e(St,yp),e(yp,gi),e(gi,zw),e(Oe,qw),e(Oe,Mt),w(_i,Mt,null),e(Mt,Cw),e(Mt,Ko),e(Ko,jw),e(Ko,wp),e(wp,Pw),e(Ko,Lw),e(Ko,$p),e($p,Aw),e(Ko,Ow),e(Mt,Nw),w(Ms,Mt,null),e(Mt,Iw),w(Es,Mt,null),k(o,Qm,b),k(o,Go,b),e(Go,zs),e(zs,Fp),w(bi,Fp,null),e(Go,Dw),e(Go,xp),e(xp,Sw),k(o,Vm,b),k(o,Ne,b),w(ki,Ne,null),e(Ne,Ww),e(Ne,vi),e(vi,Bw),e(vi,Rp),e(Rp,Uw),e(vi,Hw),e(Ne,Qw),e(Ne,Ti),e(Ti,Vw),e(Ti,cd),e(cd,Jw),e(Ti,Kw),e(Ne,Gw),e(Ne,yi),e(yi,Xw),e(yi,wi),e(wi,Yw),e(yi,Zw),e(Ne,e$),e(Ne,Mp),e(Mp,t$),e(Ne,o$),e(Ne,Wt),e(Wt,Ep),e(Ep,$i),e($i,n$),e(Wt,s$),e(Wt,zp),e(zp,Fi),e(Fi,a$),e(Wt,r$),e(Wt,qp),e(qp,xi),e(xi,i$),e(Wt,l$),e(Wt,Cp),e(Cp,Ri),e(Ri,d$),e(Ne,c$),e(Ne,Et),w(Mi,Et,null),e(Et,p$),e(Et,Xo),e(Xo,h$),e(Xo,jp),e(jp,m$),e(Xo,f$),e(Xo,Pp),e(Pp,u$),e(Xo,g$),e(Et,_$),w(qs,Et,null),e(Et,b$),w(Cs,Et,null),k(o,Jm,b),k(o,Yo,b),e(Yo,js),e(js,Lp),w(Ei,Lp,null),e(Yo,k$),e(Yo,Ap),e(Ap,v$),k(o,Km,b),k(o,Ie,b),w(zi,Ie,null),e(Ie,T$),e(Ie,Op),e(Op,y$),e(Ie,w$),e(Ie,qi),e(qi,$$),e(qi,pd),e(pd,F$),e(qi,x$),e(Ie,R$),e(Ie,Ci),e(Ci,M$),e(Ci,ji),e(ji,E$),e(Ci,z$),e(Ie,q$),e(Ie,Np),e(Np,C$),e(Ie,j$),e(Ie,Bt),e(Bt,Ip),e(Ip,Pi),e(Pi,P$),e(Bt,L$),e(Bt,Dp),e(Dp,Li),e(Li,A$),e(Bt,O$),e(Bt,Sp),e(Sp,Ai),e(Ai,N$),e(Bt,I$),e(Bt,Wp),e(Wp,Oi),e(Oi,D$),e(Ie,S$),e(Ie,zt),w(Ni,zt,null),e(zt,W$),e(zt,Zo),e(Zo,B$),e(Zo,Bp),e(Bp,U$),e(Zo,H$),e(Zo,Up),e(Up,Q$),e(Zo,V$),e(zt,J$),w(Ps,zt,null),e(zt,K$),w(Ls,zt,null),k(o,Gm,b),k(o,en,b),e(en,As),e(As,Hp),w(Ii,Hp,null),e(en,G$),e(en,Qp),e(Qp,X$),k(o,Xm,b),k(o,De,b),w(Di,De,null),e(De,Y$),e(De,Vp),e(Vp,Z$),e(De,e1),e(De,Si),e(Si,t1),e(Si,hd),e(hd,o1),e(Si,n1),e(De,s1),e(De,Wi),e(Wi,a1),e(Wi,Bi),e(Bi,r1),e(Wi,i1),e(De,l1),e(De,Jp),e(Jp,d1),e(De,c1),e(De,Ut),e(Ut,Kp),e(Kp,Ui),e(Ui,p1),e(Ut,h1),e(Ut,Gp),e(Gp,Hi),e(Hi,m1),e(Ut,f1),e(Ut,Xp),e(Xp,Qi),e(Qi,u1),e(Ut,g1),e(Ut,Yp),e(Yp,Vi),e(Vi,_1),e(De,b1),e(De,qt),w(Ji,qt,null),e(qt,k1),e(qt,tn),e(tn,v1),e(tn,Zp),e(Zp,T1),e(tn,y1),e(tn,eh),e(eh,w1),e(tn,$1),e(qt,F1),w(Os,qt,null),e(qt,x1),w(Ns,qt,null),k(o,Ym,b),k(o,on,b),e(on,Is),e(Is,th),w(Ki,th,null),e(on,R1),e(on,oh),e(oh,M1),k(o,Zm,b),k(o,Se,b),w(Gi,Se,null),e(Se,E1),e(Se,nh),e(nh,z1),e(Se,q1),e(Se,Xi),e(Xi,C1),e(Xi,md),e(md,j1),e(Xi,P1),e(Se,L1),e(Se,Yi),e(Yi,A1),e(Yi,Zi),e(Zi,O1),e(Yi,N1),e(Se,I1),e(Se,sh),e(sh,D1),e(Se,S1),e(Se,Ht),e(Ht,ah),e(ah,el),e(el,W1),e(Ht,B1),e(Ht,rh),e(rh,tl),e(tl,U1),e(Ht,H1),e(Ht,ih),e(ih,ol),e(ol,Q1),e(Ht,V1),e(Ht,lh),e(lh,nl),e(nl,J1),e(Se,K1),e(Se,Ct),w(sl,Ct,null),e(Ct,G1),e(Ct,nn),e(nn,X1),e(nn,dh),e(dh,Y1),e(nn,Z1),e(nn,ch),e(ch,e2),e(nn,t2),e(Ct,o2),w(Ds,Ct,null),e(Ct,n2),w(Ss,Ct,null),k(o,ef,b),k(o,sn,b),e(sn,Ws),e(Ws,ph),w(al,ph,null),e(sn,s2),e(sn,hh),e(hh,a2),k(o,tf,b),k(o,We,b),w(rl,We,null),e(We,r2),e(We,an),e(an,i2),e(an,mh),e(mh,l2),e(an,d2),e(an,fh),e(fh,c2),e(an,p2),e(We,h2),e(We,il),e(il,m2),e(il,fd),e(fd,f2),e(il,u2),e(We,g2),e(We,ll),e(ll,_2),e(ll,dl),e(dl,b2),e(ll,k2),e(We,v2),e(We,uh),e(uh,T2),e(We,y2),e(We,Qt),e(Qt,gh),e(gh,cl),e(cl,w2),e(Qt,$2),e(Qt,_h),e(_h,pl),e(pl,F2),e(Qt,x2),e(Qt,bh),e(bh,hl),e(hl,R2),e(Qt,M2),e(Qt,kh),e(kh,ml),e(ml,E2),e(We,z2),e(We,jt),w(fl,jt,null),e(jt,q2),e(jt,rn),e(rn,C2),e(rn,vh),e(vh,j2),e(rn,P2),e(rn,Th),e(Th,L2),e(rn,A2),e(jt,O2),w(Bs,jt,null),e(jt,N2),w(Us,jt,null),of=!0},p(o,[b]){const ul={};b&2&&(ul.$$scope={dirty:b,ctx:o}),mn.$set(ul);const yh={};b&2&&(yh.$$scope={dirty:b,ctx:o}),un.$set(yh);const wh={};b&2&&(wh.$$scope={dirty:b,ctx:o}),gn.$set(wh);const $h={};b&2&&($h.$$scope={dirty:b,ctx:o}),vn.$set($h);const gl={};b&2&&(gl.$$scope={dirty:b,ctx:o}),Tn.$set(gl);const Fh={};b&2&&(Fh.$$scope={dirty:b,ctx:o}),$n.$set(Fh);const xh={};b&2&&(xh.$$scope={dirty:b,ctx:o}),Fn.$set(xh);const Rh={};b&2&&(Rh.$$scope={dirty:b,ctx:o}),Rn.$set(Rh);const _l={};b&2&&(_l.$$scope={dirty:b,ctx:o}),Mn.$set(_l);const Mh={};b&2&&(Mh.$$scope={dirty:b,ctx:o}),zn.$set(Mh);const Eh={};b&2&&(Eh.$$scope={dirty:b,ctx:o}),qn.$set(Eh);const zh={};b&2&&(zh.$$scope={dirty:b,ctx:o}),Cn.$set(zh);const qh={};b&2&&(qh.$$scope={dirty:b,ctx:o}),Pn.$set(qh);const Ch={};b&2&&(Ch.$$scope={dirty:b,ctx:o}),Ln.$set(Ch);const jh={};b&2&&(jh.$$scope={dirty:b,ctx:o}),An.$set(jh);const Vt={};b&2&&(Vt.$$scope={dirty:b,ctx:o}),On.$set(Vt);const bl={};b&2&&(bl.$$scope={dirty:b,ctx:o}),Nn.$set(bl);const Ph={};b&2&&(Ph.$$scope={dirty:b,ctx:o}),Dn.$set(Ph);const Lh={};b&2&&(Lh.$$scope={dirty:b,ctx:o}),Sn.$set(Lh);const Jt={};b&2&&(Jt.$$scope={dirty:b,ctx:o}),Bn.$set(Jt);const Ah={};b&2&&(Ah.$$scope={dirty:b,ctx:o}),Un.$set(Ah);const Oh={};b&2&&(Oh.$$scope={dirty:b,ctx:o}),Hn.$set(Oh);const Nh={};b&2&&(Nh.$$scope={dirty:b,ctx:o}),Vn.$set(Nh);const ud={};b&2&&(ud.$$scope={dirty:b,ctx:o}),Jn.$set(ud);const Ih={};b&2&&(Ih.$$scope={dirty:b,ctx:o}),Kn.$set(Ih);const ln={};b&2&&(ln.$$scope={dirty:b,ctx:o}),Xn.$set(ln);const Dh={};b&2&&(Dh.$$scope={dirty:b,ctx:o}),Yn.$set(Dh);const Sh={};b&2&&(Sh.$$scope={dirty:b,ctx:o}),Zn.$set(Sh);const kl={};b&2&&(kl.$$scope={dirty:b,ctx:o}),ts.$set(kl);const Wh={};b&2&&(Wh.$$scope={dirty:b,ctx:o}),os.$set(Wh);const Bh={};b&2&&(Bh.$$scope={dirty:b,ctx:o}),ss.$set(Bh);const Uh={};b&2&&(Uh.$$scope={dirty:b,ctx:o}),as.$set(Uh);const Tt={};b&2&&(Tt.$$scope={dirty:b,ctx:o}),rs.$set(Tt);const Kt={};b&2&&(Kt.$$scope={dirty:b,ctx:o}),is.$set(Kt);const Hh={};b&2&&(Hh.$$scope={dirty:b,ctx:o}),ds.$set(Hh);const Qh={};b&2&&(Qh.$$scope={dirty:b,ctx:o}),cs.$set(Qh);const Vh={};b&2&&(Vh.$$scope={dirty:b,ctx:o}),ps.$set(Vh);const dn={};b&2&&(dn.$$scope={dirty:b,ctx:o}),hs.$set(dn);const Jh={};b&2&&(Jh.$$scope={dirty:b,ctx:o}),fs.$set(Jh);const Kh={};b&2&&(Kh.$$scope={dirty:b,ctx:o}),us.$set(Kh);const cn={};b&2&&(cn.$$scope={dirty:b,ctx:o}),gs.$set(cn);const Gh={};b&2&&(Gh.$$scope={dirty:b,ctx:o}),bs.$set(Gh);const Xh={};b&2&&(Xh.$$scope={dirty:b,ctx:o}),ks.$set(Xh);const vl={};b&2&&(vl.$$scope={dirty:b,ctx:o}),vs.$set(vl);const Yh={};b&2&&(Yh.$$scope={dirty:b,ctx:o}),Ts.$set(Yh);const Zh={};b&2&&(Zh.$$scope={dirty:b,ctx:o}),ws.$set(Zh);const em={};b&2&&(em.$$scope={dirty:b,ctx:o}),$s.$set(em);const $e={};b&2&&($e.$$scope={dirty:b,ctx:o}),Fs.$set($e);const tm={};b&2&&(tm.$$scope={dirty:b,ctx:o}),xs.$set(tm);const om={};b&2&&(om.$$scope={dirty:b,ctx:o}),Ms.$set(om);const Tl={};b&2&&(Tl.$$scope={dirty:b,ctx:o}),Es.$set(Tl);const nm={};b&2&&(nm.$$scope={dirty:b,ctx:o}),qs.$set(nm);const yl={};b&2&&(yl.$$scope={dirty:b,ctx:o}),Cs.$set(yl);const sm={};b&2&&(sm.$$scope={dirty:b,ctx:o}),Ps.$set(sm);const pn={};b&2&&(pn.$$scope={dirty:b,ctx:o}),Ls.$set(pn);const am={};b&2&&(am.$$scope={dirty:b,ctx:o}),Os.$set(am);const wl={};b&2&&(wl.$$scope={dirty:b,ctx:o}),Ns.$set(wl);const gd={};b&2&&(gd.$$scope={dirty:b,ctx:o}),Ds.$set(gd);const rm={};b&2&&(rm.$$scope={dirty:b,ctx:o}),Ss.$set(rm);const _d={};b&2&&(_d.$$scope={dirty:b,ctx:o}),Bs.$set(_d);const im={};b&2&&(im.$$scope={dirty:b,ctx:o}),Us.$set(im)},i(o){of||($(l.$$.fragment,o),$(se.$$.fragment,o),$(pa.$$.fragment,o),$(ha.$$.fragment,o),$(mn.$$.fragment,o),$(fa.$$.fragment,o),$(ua.$$.fragment,o),$(un.$$.fragment,o),$(gn.$$.fragment,o),$(ba.$$.fragment,o),$(va.$$.fragment,o),$(ya.$$.fragment,o),$(wa.$$.fragment,o),$($a.$$.fragment,o),$(Fa.$$.fragment,o),$(vn.$$.fragment,o),$(Tn.$$.fragment,o),$(Ea.$$.fragment,o),$(za.$$.fragment,o),$(qa.$$.fragment,o),$(Oa.$$.fragment,o),$($n.$$.fragment,o),$(Fn.$$.fragment,o),$(Na.$$.fragment,o),$(Ia.$$.fragment,o),$(Ua.$$.fragment,o),$(Rn.$$.fragment,o),$(Mn.$$.fragment,o),$(Ha.$$.fragment,o),$(Qa.$$.fragment,o),$(Xa.$$.fragment,o),$(zn.$$.fragment,o),$(qn.$$.fragment,o),$(Cn.$$.fragment,o),$(Ya.$$.fragment,o),$(Za.$$.fragment,o),$(nr.$$.fragment,o),$(Pn.$$.fragment,o),$(Ln.$$.fragment,o),$(An.$$.fragment,o),$(On.$$.fragment,o),$(Nn.$$.fragment,o),$(sr.$$.fragment,o),$(ar.$$.fragment,o),$(dr.$$.fragment,o),$(Dn.$$.fragment,o),$(Sn.$$.fragment,o),$(cr.$$.fragment,o),$(pr.$$.fragment,o),$(ur.$$.fragment,o),$(Bn.$$.fragment,o),$(Un.$$.fragment,o),$(Hn.$$.fragment,o),$(gr.$$.fragment,o),$(_r.$$.fragment,o),$(Tr.$$.fragment,o),$(Vn.$$.fragment,o),$(Jn.$$.fragment,o),$(Kn.$$.fragment,o),$(yr.$$.fragment,o),$(wr.$$.fragment,o),$(Xn.$$.fragment,o),$(Rr.$$.fragment,o),$(Yn.$$.fragment,o),$(Zn.$$.fragment,o),$(Mr.$$.fragment,o),$(Er.$$.fragment,o),$(zr.$$.fragment,o),$(ts.$$.fragment,o),$(os.$$.fragment,o),$(qr.$$.fragment,o),$(Cr.$$.fragment,o),$(ss.$$.fragment,o),$(Or.$$.fragment,o),$(as.$$.fragment,o),$(rs.$$.fragment,o),$(is.$$.fragment,o),$(Nr.$$.fragment,o),$(Ir.$$.fragment,o),$(ds.$$.fragment,o),$(Br.$$.fragment,o),$(cs.$$.fragment,o),$(ps.$$.fragment,o),$(hs.$$.fragment,o),$(Ur.$$.fragment,o),$(Hr.$$.fragment,o),$(fs.$$.fragment,o),$(Kr.$$.fragment,o),$(us.$$.fragment,o),$(gs.$$.fragment,o),$(Gr.$$.fragment,o),$(Xr.$$.fragment,o),$(bs.$$.fragment,o),$(ti.$$.fragment,o),$(ks.$$.fragment,o),$(vs.$$.fragment,o),$(Ts.$$.fragment,o),$(oi.$$.fragment,o),$(ni.$$.fragment,o),$(ws.$$.fragment,o),$(ii.$$.fragment,o),$($s.$$.fragment,o),$(Fs.$$.fragment,o),$(xs.$$.fragment,o),$(li.$$.fragment,o),$(di.$$.fragment,o),$(_i.$$.fragment,o),$(Ms.$$.fragment,o),$(Es.$$.fragment,o),$(bi.$$.fragment,o),$(ki.$$.fragment,o),$(Mi.$$.fragment,o),$(qs.$$.fragment,o),$(Cs.$$.fragment,o),$(Ei.$$.fragment,o),$(zi.$$.fragment,o),$(Ni.$$.fragment,o),$(Ps.$$.fragment,o),$(Ls.$$.fragment,o),$(Ii.$$.fragment,o),$(Di.$$.fragment,o),$(Ji.$$.fragment,o),$(Os.$$.fragment,o),$(Ns.$$.fragment,o),$(Ki.$$.fragment,o),$(Gi.$$.fragment,o),$(sl.$$.fragment,o),$(Ds.$$.fragment,o),$(Ss.$$.fragment,o),$(al.$$.fragment,o),$(rl.$$.fragment,o),$(fl.$$.fragment,o),$(Bs.$$.fragment,o),$(Us.$$.fragment,o),of=!0)},o(o){F(l.$$.fragment,o),F(se.$$.fragment,o),F(pa.$$.fragment,o),F(ha.$$.fragment,o),F(mn.$$.fragment,o),F(fa.$$.fragment,o),F(ua.$$.fragment,o),F(un.$$.fragment,o),F(gn.$$.fragment,o),F(ba.$$.fragment,o),F(va.$$.fragment,o),F(ya.$$.fragment,o),F(wa.$$.fragment,o),F($a.$$.fragment,o),F(Fa.$$.fragment,o),F(vn.$$.fragment,o),F(Tn.$$.fragment,o),F(Ea.$$.fragment,o),F(za.$$.fragment,o),F(qa.$$.fragment,o),F(Oa.$$.fragment,o),F($n.$$.fragment,o),F(Fn.$$.fragment,o),F(Na.$$.fragment,o),F(Ia.$$.fragment,o),F(Ua.$$.fragment,o),F(Rn.$$.fragment,o),F(Mn.$$.fragment,o),F(Ha.$$.fragment,o),F(Qa.$$.fragment,o),F(Xa.$$.fragment,o),F(zn.$$.fragment,o),F(qn.$$.fragment,o),F(Cn.$$.fragment,o),F(Ya.$$.fragment,o),F(Za.$$.fragment,o),F(nr.$$.fragment,o),F(Pn.$$.fragment,o),F(Ln.$$.fragment,o),F(An.$$.fragment,o),F(On.$$.fragment,o),F(Nn.$$.fragment,o),F(sr.$$.fragment,o),F(ar.$$.fragment,o),F(dr.$$.fragment,o),F(Dn.$$.fragment,o),F(Sn.$$.fragment,o),F(cr.$$.fragment,o),F(pr.$$.fragment,o),F(ur.$$.fragment,o),F(Bn.$$.fragment,o),F(Un.$$.fragment,o),F(Hn.$$.fragment,o),F(gr.$$.fragment,o),F(_r.$$.fragment,o),F(Tr.$$.fragment,o),F(Vn.$$.fragment,o),F(Jn.$$.fragment,o),F(Kn.$$.fragment,o),F(yr.$$.fragment,o),F(wr.$$.fragment,o),F(Xn.$$.fragment,o),F(Rr.$$.fragment,o),F(Yn.$$.fragment,o),F(Zn.$$.fragment,o),F(Mr.$$.fragment,o),F(Er.$$.fragment,o),F(zr.$$.fragment,o),F(ts.$$.fragment,o),F(os.$$.fragment,o),F(qr.$$.fragment,o),F(Cr.$$.fragment,o),F(ss.$$.fragment,o),F(Or.$$.fragment,o),F(as.$$.fragment,o),F(rs.$$.fragment,o),F(is.$$.fragment,o),F(Nr.$$.fragment,o),F(Ir.$$.fragment,o),F(ds.$$.fragment,o),F(Br.$$.fragment,o),F(cs.$$.fragment,o),F(ps.$$.fragment,o),F(hs.$$.fragment,o),F(Ur.$$.fragment,o),F(Hr.$$.fragment,o),F(fs.$$.fragment,o),F(Kr.$$.fragment,o),F(us.$$.fragment,o),F(gs.$$.fragment,o),F(Gr.$$.fragment,o),F(Xr.$$.fragment,o),F(bs.$$.fragment,o),F(ti.$$.fragment,o),F(ks.$$.fragment,o),F(vs.$$.fragment,o),F(Ts.$$.fragment,o),F(oi.$$.fragment,o),F(ni.$$.fragment,o),F(ws.$$.fragment,o),F(ii.$$.fragment,o),F($s.$$.fragment,o),F(Fs.$$.fragment,o),F(xs.$$.fragment,o),F(li.$$.fragment,o),F(di.$$.fragment,o),F(_i.$$.fragment,o),F(Ms.$$.fragment,o),F(Es.$$.fragment,o),F(bi.$$.fragment,o),F(ki.$$.fragment,o),F(Mi.$$.fragment,o),F(qs.$$.fragment,o),F(Cs.$$.fragment,o),F(Ei.$$.fragment,o),F(zi.$$.fragment,o),F(Ni.$$.fragment,o),F(Ps.$$.fragment,o),F(Ls.$$.fragment,o),F(Ii.$$.fragment,o),F(Di.$$.fragment,o),F(Ji.$$.fragment,o),F(Os.$$.fragment,o),F(Ns.$$.fragment,o),F(Ki.$$.fragment,o),F(Gi.$$.fragment,o),F(sl.$$.fragment,o),F(Ds.$$.fragment,o),F(Ss.$$.fragment,o),F(al.$$.fragment,o),F(rl.$$.fragment,o),F(fl.$$.fragment,o),F(Bs.$$.fragment,o),F(Us.$$.fragment,o),of=!1},d(o){t(d),o&&t(g),o&&t(c),x(l),o&&t(I),o&&t(z),x(se),o&&t(fe),o&&t(K),o&&t(j),o&&t(ie),o&&t(ue),o&&t(le),o&&t(ge),o&&t(de),o&&t(W),o&&t(ce),o&&t(B),o&&t(G),o&&t(dm),o&&t(Gt),o&&t(cm),o&&t(ho),x(pa),o&&t(pm),o&&t(Ze),x(ha),x(mn),o&&t(hm),o&&t(uo),x(fa),o&&t(mm),o&&t(we),x(ua),x(un),x(gn),x(ba),x(va),x(ya),x(wa),o&&t(fm),o&&t(go),x($a),o&&t(um),o&&t(Le),x(Fa),x(vn),x(Tn),x(Ea),o&&t(gm),o&&t(_o),x(za),o&&t(_m),o&&t(Ae),x(qa),x(Oa),x($n),x(Fn),o&&t(bm),o&&t(ko),x(Na),o&&t(km),o&&t(et),x(Ia),x(Ua),x(Rn),x(Mn),o&&t(vm),o&&t(To),x(Ha),o&&t(Tm),o&&t(tt),x(Qa),x(Xa),x(zn),x(qn),x(Cn),o&&t(ym),o&&t(wo),x(Ya),o&&t(wm),o&&t(ot),x(Za),x(nr),x(Pn),x(Ln),x(An),x(On),x(Nn),o&&t($m),o&&t(Fo),x(sr),o&&t(Fm),o&&t(nt),x(ar),x(dr),x(Dn),x(Sn),o&&t(xm),o&&t(Ro),x(cr),o&&t(Rm),o&&t(st),x(pr),x(ur),x(Bn),x(Un),x(Hn),o&&t(Mm),o&&t(Eo),x(gr),o&&t(Em),o&&t(at),x(_r),x(Tr),x(Vn),x(Jn),x(Kn),o&&t(zm),o&&t(Co),x(yr),o&&t(qm),o&&t(He),x(wr),x(Xn),x(Rr),x(Yn),x(Zn),o&&t(Cm),o&&t(Po),x(Mr),o&&t(jm),o&&t(Lo),x(Er),x(zr),x(ts),x(os),o&&t(Pm),o&&t(Oo),x(qr),o&&t(Lm),o&&t(Qe),x(Cr),x(ss),x(Or),x(as),x(rs),x(is),o&&t(Am),o&&t(Io),x(Nr),o&&t(Om),o&&t(Ve),x(Ir),x(ds),x(Br),x(cs),x(ps),x(hs),o&&t(Nm),o&&t(So),x(Ur),o&&t(Im),o&&t(Je),x(Hr),x(fs),x(Kr),x(us),x(gs),o&&t(Dm),o&&t(Bo),x(Gr),o&&t(Sm),o&&t(Ke),x(Xr),x(bs),x(ti),x(ks),x(vs),x(Ts),o&&t(Wm),o&&t(Ho),x(oi),o&&t(Bm),o&&t(Ge),x(ni),x(ws),x(ii),x($s),x(Fs),x(xs),o&&t(Um),o&&t(Jo),x(li),o&&t(Hm),o&&t(Oe),x(di),x(_i),x(Ms),x(Es),o&&t(Qm),o&&t(Go),x(bi),o&&t(Vm),o&&t(Ne),x(ki),x(Mi),x(qs),x(Cs),o&&t(Jm),o&&t(Yo),x(Ei),o&&t(Km),o&&t(Ie),x(zi),x(Ni),x(Ps),x(Ls),o&&t(Gm),o&&t(en),x(Ii),o&&t(Xm),o&&t(De),x(Di),x(Ji),x(Os),x(Ns),o&&t(Ym),o&&t(on),x(Ki),o&&t(Zm),o&&t(Se),x(Gi),x(sl),x(Ds),x(Ss),o&&t(ef),o&&t(sn),x(al),o&&t(tf),o&&t(We),x(rl),x(fl),x(Bs),x(Us)}}}const gE={local:"roberta",sections:[{local:"overview",title:"Overview"},{local:"transformers.RobertaConfig",title:"RobertaConfig"},{local:"transformers.RobertaTokenizer",title:"RobertaTokenizer"},{local:"transformers.RobertaTokenizerFast",title:"RobertaTokenizerFast"},{local:"transformers.RobertaModel",title:"RobertaModel"},{local:"transformers.RobertaForCausalLM",title:"RobertaForCausalLM"},{local:"transformers.RobertaForMaskedLM",title:"RobertaForMaskedLM"},{local:"transformers.RobertaForSequenceClassification",title:"RobertaForSequenceClassification"},{local:"transformers.RobertaForMultipleChoice",title:"RobertaForMultipleChoice"},{local:"transformers.RobertaForTokenClassification",title:"RobertaForTokenClassification"},{local:"transformers.RobertaForQuestionAnswering",title:"RobertaForQuestionAnswering"},{local:"transformers.TFRobertaModel",title:"TFRobertaModel"},{local:"transformers.TFRobertaForCausalLM",title:"TFRobertaForCausalLM"},{local:"transformers.TFRobertaForMaskedLM",title:"TFRobertaForMaskedLM"},{local:"transformers.TFRobertaForSequenceClassification",title:"TFRobertaForSequenceClassification"},{local:"transformers.TFRobertaForMultipleChoice",title:"TFRobertaForMultipleChoice"},{local:"transformers.TFRobertaForTokenClassification",title:"TFRobertaForTokenClassification"},{local:"transformers.TFRobertaForQuestionAnswering",title:"TFRobertaForQuestionAnswering"},{local:"transformers.FlaxRobertaModel",title:"FlaxRobertaModel"},{local:"transformers.FlaxRobertaForMaskedLM",title:"FlaxRobertaForMaskedLM"},{local:"transformers.FlaxRobertaForSequenceClassification",title:"FlaxRobertaForSequenceClassification"},{local:"transformers.FlaxRobertaForMultipleChoice",title:"FlaxRobertaForMultipleChoice"},{local:"transformers.FlaxRobertaForTokenClassification",title:"FlaxRobertaForTokenClassification"},{local:"transformers.FlaxRobertaForQuestionAnswering",title:"FlaxRobertaForQuestionAnswering"}],title:"RoBERTa"};function _E(R){return iM(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class $E extends nM{constructor(d){super();sM(this,d,_E,uE,aM,{})}}export{$E as default,gE as metadata};
