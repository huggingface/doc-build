import{S as k3,i as v3,s as y3,e as a,k as c,w as y,t as o,M as w3,c as r,d as t,m as p,a as i,x as w,h as n,b as h,G as e,g as b,y as T,q as $,o as F,B as x,v as T3,L as re}from"../../chunks/vendor-hf-doc-builder.js";import{T as me}from"../../chunks/Tip-hf-doc-builder.js";import{D as O}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ie}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as De}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ae}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";import{P as qb}from"../../chunks/PipelineTag-hf-doc-builder.js";function $3(R){let d,_,u,m,k;return m=new ie({props:{code:`from transformers import RobertaConfig, RobertaModel

# Initializing a RoBERTa configuration
configuration = RobertaConfig()

# Initializing a model (with random weights) from the configuration
model = RobertaModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaConfig, RobertaModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a RoBERTa configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = RobertaConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),_=o("Examples:"),u=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Examples:"),f.forEach(t),u=p(l),w(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,u,f),T(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){F(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(u),x(m,l)}}}function F3(R){let d,_,u,m,k;return m=new ie({props:{code:`from transformers import RobertaTokenizer
tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 328, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){d=a("p"),_=o("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),u=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),f.forEach(t),u=p(l),w(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,u,f),T(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){F(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(u),x(m,l)}}}function x3(R){let d,_,u,m,k;return{c(){d=a("p"),_=o("When used with "),u=a("code"),m=o("is_split_into_words=True"),k=o(", this tokenizer will add a space before each word (even the first one).")},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"When used with "),u=r(f,"CODE",{});var E=i(u);m=n(E,"is_split_into_words=True"),E.forEach(t),k=n(f,", this tokenizer will add a space before each word (even the first one)."),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,u),e(u,m),e(d,k)},d(l){l&&t(d)}}}function R3(R){let d,_,u,m,k;return m=new ie({props:{code:`from transformers import RobertaTokenizerFast
tokenizer = RobertaTokenizerFast.from_pretrained("roberta-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = RobertaTokenizerFast.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 328, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){d=a("p"),_=o("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),u=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),f.forEach(t),u=p(l),w(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,u,f),T(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){F(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(u),x(m,l)}}}function E3(R){let d,_,u,m,k,l,f,E;return{c(){d=a("p"),_=o("When used with "),u=a("code"),m=o("is_split_into_words=True"),k=o(", this tokenizer needs to be instantiated with "),l=a("code"),f=o("add_prefix_space=True"),E=o(".")},l(le){d=r(le,"P",{});var Z=i(d);_=n(Z,"When used with "),u=r(Z,"CODE",{});var N=i(u);m=n(N,"is_split_into_words=True"),N.forEach(t),k=n(Z,", this tokenizer needs to be instantiated with "),l=r(Z,"CODE",{});var te=i(l);f=n(te,"add_prefix_space=True"),te.forEach(t),E=n(Z,"."),Z.forEach(t)},m(le,Z){b(le,d,Z),e(d,_),e(d,u),e(u,m),e(d,k),e(d,l),e(l,f),e(d,E)},d(le){le&&t(d)}}}function M3(R){let d,_,u,m,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(f,"CODE",{});var E=i(u);m=n(E,"Module"),E.forEach(t),k=n(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,u),e(u,m),e(d,k)},d(l){l&&t(d)}}}function z3(R){let d,_,u,m,k;return m=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),_=o("Example:"),u=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Example:"),f.forEach(t),u=p(l),w(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,u,f),T(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){F(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(u),x(m,l)}}}function C3(R){let d,_,u,m,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(f,"CODE",{});var E=i(u);m=n(E,"Module"),E.forEach(t),k=n(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,u),e(u,m),e(d,k)},d(l){l&&t(d)}}}function q3(R){let d,_,u,m,k;return m=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaForCausalLM, RobertaConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=a("p"),_=o("Example:"),u=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Example:"),f.forEach(t),u=p(l),w(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,u,f),T(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){F(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(u),x(m,l)}}}function j3(R){let d,_,u,m,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(f,"CODE",{});var E=i(u);m=n(E,"Module"),E.forEach(t),k=n(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,u),e(u,m),e(d,k)},d(l){l&&t(d)}}}function P3(R){let d,_,u,m,k;return m=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaForMaskedLM
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
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){d=a("p"),_=o("Example:"),u=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Example:"),f.forEach(t),u=p(l),w(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,u,f),T(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){F(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(u),x(m,l)}}}function A3(R){let d,_;return d=new ie({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){y(d.$$.fragment)},l(u){w(d.$$.fragment,u)},m(u,m){T(d,u,m),_=!0},p:re,i(u){_||($(d.$$.fragment,u),_=!0)},o(u){F(d.$$.fragment,u),_=!1},d(u){x(d,u)}}}function L3(R){let d,_,u,m,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(f,"CODE",{});var E=i(u);m=n(E,"Module"),E.forEach(t),k=n(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,u),e(u,m),e(d,k)},d(l){l&&t(d)}}}function O3(R){let d,_,u,m,k;return m=new ie({props:{code:`import torch
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=a("p"),_=o("Example of single-label classification:"),u=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Example of single-label classification:"),f.forEach(t),u=p(l),w(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,u,f),T(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){F(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(u),x(m,l)}}}function N3(R){let d,_;return d=new ie({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = RobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){y(d.$$.fragment)},l(u){w(d.$$.fragment,u)},m(u,m){T(d,u,m),_=!0},p:re,i(u){_||($(d.$$.fragment,u),_=!0)},o(u){F(d.$$.fragment,u),_=!1},d(u){x(d,u)}}}function I3(R){let d,_,u,m,k;return m=new ie({props:{code:`import torch
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=a("p"),_=o("Example of multi-label classification:"),u=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Example of multi-label classification:"),f.forEach(t),u=p(l),w(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,u,f),T(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){F(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(u),x(m,l)}}}function D3(R){let d,_;return d=new ie({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(d.$$.fragment)},l(u){w(d.$$.fragment,u)},m(u,m){T(d,u,m),_=!0},p:re,i(u){_||($(d.$$.fragment,u),_=!0)},o(u){F(d.$$.fragment,u),_=!1},d(u){x(d,u)}}}function S3(R){let d,_,u,m,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(f,"CODE",{});var E=i(u);m=n(E,"Module"),E.forEach(t),k=n(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,u),e(u,m),e(d,k)},d(l){l&&t(d)}}}function B3(R){let d,_,u,m,k;return m=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=o("Example:"),u=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Example:"),f.forEach(t),u=p(l),w(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,u,f),T(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){F(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(u),x(m,l)}}}function W3(R){let d,_,u,m,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(f,"CODE",{});var E=i(u);m=n(E,"Module"),E.forEach(t),k=n(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,u),e(u,m),e(d,k)},d(l){l&&t(d)}}}function U3(R){let d,_,u,m,k;return m=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){d=a("p"),_=o("Example:"),u=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Example:"),f.forEach(t),u=p(l),w(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,u,f),T(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){F(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(u),x(m,l)}}}function H3(R){let d,_;return d=new ie({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){y(d.$$.fragment)},l(u){w(d.$$.fragment,u)},m(u,m){T(d,u,m),_=!0},p:re,i(u){_||($(d.$$.fragment,u),_=!0)},o(u){F(d.$$.fragment,u),_=!1},d(u){x(d,u)}}}function Q3(R){let d,_,u,m,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(f,"CODE",{});var E=i(u);m=n(E,"Module"),E.forEach(t),k=n(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,u),e(u,m),e(d,k)},d(l){l&&t(d)}}}function K3(R){let d,_,u,m,k;return m=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaForQuestionAnswering
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
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){d=a("p"),_=o("Example:"),u=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Example:"),f.forEach(t),u=p(l),w(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,u,f),T(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){F(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(u),x(m,l)}}}function J3(R){let d,_;return d=new ie({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.86</span>`}}),{c(){y(d.$$.fragment)},l(u){w(d.$$.fragment,u)},m(u,m){T(d,u,m),_=!0},p:re,i(u){_||($(d.$$.fragment,u),_=!0)},o(u){F(d.$$.fragment,u),_=!1},d(u){x(d,u)}}}function V3(R){let d,_,u,m,k,l,f,E,le,Z,N,te,oe,M,we,K,Te,ge,B,$e,pe,J,Fe,_e,U,xe,be,H,Re,ke,ee,q,P,ve,Q,Ee,ye,I,he,Me,j,ze,V,Ce,ue,G,qe,ne,D,fe,X,je,se,A,Pe,L,Ae,Le;return{c(){d=a("p"),_=o("TensorFlow models and layers in "),u=a("code"),m=o("transformers"),k=o(" accept two formats as input:"),l=c(),f=a("ul"),E=a("li"),le=o("having all inputs as keyword arguments (like PyTorch models), or"),Z=c(),N=a("li"),te=o("having all inputs as a list, tuple or dict in the first positional argument."),oe=c(),M=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Te=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=o("model.fit()"),pe=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Fe=o("fit()"),_e=o(" and "),U=a("code"),xe=o("predict()"),be=o(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=o("Functional"),ke=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=c(),q=a("ul"),P=a("li"),ve=o("a single Tensor with "),Q=a("code"),Ee=o("input_ids"),ye=o(" only and nothing else: "),I=a("code"),he=o("model(input_ids)"),Me=c(),j=a("li"),ze=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),Ce=o("model([input_ids, attention_mask])"),ue=o(" or "),G=a("code"),qe=o("model([input_ids, attention_mask, token_type_ids])"),ne=c(),D=a("li"),fe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),A=a("p"),Pe=o(`Note that when creating models and layers with
`),L=a("a"),Ae=o("subclassing"),Le=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=r(v,"P",{});var z=i(d);_=n(z,"TensorFlow models and layers in "),u=r(z,"CODE",{});var Ue=i(u);m=n(Ue,"transformers"),Ue.forEach(t),k=n(z," accept two formats as input:"),z.forEach(t),l=p(v),f=r(v,"UL",{});var de=i(f);E=r(de,"LI",{});var Xe=i(E);le=n(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=p(de),N=r(de,"LI",{});var Ke=i(N);te=n(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),de.forEach(t),oe=p(v),M=r(v,"P",{});var C=i(M);we=n(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(C,"CODE",{});var Ye=i(K);Te=n(Ye,"model.fit()"),Ye.forEach(t),ge=n(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(C,"CODE",{});var Se=i(B);$e=n(Se,"model.fit()"),Se.forEach(t),pe=n(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(C,"CODE",{});var Ze=i(J);Fe=n(Ze,"fit()"),Ze.forEach(t),_e=n(C," and "),U=r(C,"CODE",{});var et=i(U);xe=n(et,"predict()"),et.forEach(t),be=n(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var Be=i(H);Re=n(Be,"Functional"),Be.forEach(t),ke=n(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),ee=p(v),q=r(v,"UL",{});var S=i(q);P=r(S,"LI",{});var Y=i(P);ve=n(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Je=i(Q);Ee=n(Je,"input_ids"),Je.forEach(t),ye=n(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=n(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=p(S),j=r(S,"LI",{});var W=i(j);ze=n(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(W,"CODE",{});var He=i(V);Ce=n(He,"model([input_ids, attention_mask])"),He.forEach(t),ue=n(W," or "),G=r(W,"CODE",{});var We=i(G);qe=n(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),ne=p(S),D=r(S,"LI",{});var Ne=i(D);fe=n(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Qe=i(X);je=n(Qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Qe.forEach(t),Ne.forEach(t),S.forEach(t),se=p(v),A=r(v,"P",{});var ce=i(A);Pe=n(ce,`Note that when creating models and layers with
`),L=r(ce,"A",{href:!0,rel:!0});var Ve=i(L);Ae=n(Ve,"subclassing"),Ve.forEach(t),Le=n(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){h(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(L,"rel","nofollow")},m(v,z){b(v,d,z),e(d,_),e(d,u),e(u,m),e(d,k),b(v,l,z),b(v,f,z),e(f,E),e(E,le),e(f,Z),e(f,N),e(N,te),b(v,oe,z),b(v,M,z),e(M,we),e(M,K),e(K,Te),e(M,ge),e(M,B),e(B,$e),e(M,pe),e(M,J),e(J,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),b(v,ee,z),b(v,q,z),e(q,P),e(P,ve),e(P,Q),e(Q,Ee),e(P,ye),e(P,I),e(I,he),e(q,Me),e(q,j),e(j,ze),e(j,V),e(V,Ce),e(j,ue),e(j,G),e(G,qe),e(q,ne),e(q,D),e(D,fe),e(D,X),e(X,je),b(v,se,z),b(v,A,z),e(A,Pe),e(A,L),e(L,Ae),e(A,Le)},d(v){v&&t(d),v&&t(l),v&&t(f),v&&t(oe),v&&t(M),v&&t(ee),v&&t(q),v&&t(se),v&&t(A)}}}function G3(R){let d,_,u,m,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(f,"CODE",{});var E=i(u);m=n(E,"Module"),E.forEach(t),k=n(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,u),e(u,m),e(d,k)},d(l){l&&t(d)}}}function X3(R){let d,_,u,m,k;return m=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),_=o("Example:"),u=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Example:"),f.forEach(t),u=p(l),w(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,u,f),T(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){F(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(u),x(m,l)}}}function Y3(R){let d,_,u,m,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(f,"CODE",{});var E=i(u);m=n(E,"Module"),E.forEach(t),k=n(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,u),e(u,m),e(d,k)},d(l){l&&t(d)}}}function Z3(R){let d,_,u,m,k;return m=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForCausalLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=o("Example:"),u=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Example:"),f.forEach(t),u=p(l),w(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,u,f),T(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){F(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(u),x(m,l)}}}function e5(R){let d,_,u,m,k,l,f,E,le,Z,N,te,oe,M,we,K,Te,ge,B,$e,pe,J,Fe,_e,U,xe,be,H,Re,ke,ee,q,P,ve,Q,Ee,ye,I,he,Me,j,ze,V,Ce,ue,G,qe,ne,D,fe,X,je,se,A,Pe,L,Ae,Le;return{c(){d=a("p"),_=o("TensorFlow models and layers in "),u=a("code"),m=o("transformers"),k=o(" accept two formats as input:"),l=c(),f=a("ul"),E=a("li"),le=o("having all inputs as keyword arguments (like PyTorch models), or"),Z=c(),N=a("li"),te=o("having all inputs as a list, tuple or dict in the first positional argument."),oe=c(),M=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Te=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=o("model.fit()"),pe=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Fe=o("fit()"),_e=o(" and "),U=a("code"),xe=o("predict()"),be=o(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=o("Functional"),ke=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=c(),q=a("ul"),P=a("li"),ve=o("a single Tensor with "),Q=a("code"),Ee=o("input_ids"),ye=o(" only and nothing else: "),I=a("code"),he=o("model(input_ids)"),Me=c(),j=a("li"),ze=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),Ce=o("model([input_ids, attention_mask])"),ue=o(" or "),G=a("code"),qe=o("model([input_ids, attention_mask, token_type_ids])"),ne=c(),D=a("li"),fe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),A=a("p"),Pe=o(`Note that when creating models and layers with
`),L=a("a"),Ae=o("subclassing"),Le=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=r(v,"P",{});var z=i(d);_=n(z,"TensorFlow models and layers in "),u=r(z,"CODE",{});var Ue=i(u);m=n(Ue,"transformers"),Ue.forEach(t),k=n(z," accept two formats as input:"),z.forEach(t),l=p(v),f=r(v,"UL",{});var de=i(f);E=r(de,"LI",{});var Xe=i(E);le=n(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=p(de),N=r(de,"LI",{});var Ke=i(N);te=n(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),de.forEach(t),oe=p(v),M=r(v,"P",{});var C=i(M);we=n(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(C,"CODE",{});var Ye=i(K);Te=n(Ye,"model.fit()"),Ye.forEach(t),ge=n(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(C,"CODE",{});var Se=i(B);$e=n(Se,"model.fit()"),Se.forEach(t),pe=n(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(C,"CODE",{});var Ze=i(J);Fe=n(Ze,"fit()"),Ze.forEach(t),_e=n(C," and "),U=r(C,"CODE",{});var et=i(U);xe=n(et,"predict()"),et.forEach(t),be=n(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var Be=i(H);Re=n(Be,"Functional"),Be.forEach(t),ke=n(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),ee=p(v),q=r(v,"UL",{});var S=i(q);P=r(S,"LI",{});var Y=i(P);ve=n(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Je=i(Q);Ee=n(Je,"input_ids"),Je.forEach(t),ye=n(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=n(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=p(S),j=r(S,"LI",{});var W=i(j);ze=n(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(W,"CODE",{});var He=i(V);Ce=n(He,"model([input_ids, attention_mask])"),He.forEach(t),ue=n(W," or "),G=r(W,"CODE",{});var We=i(G);qe=n(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),ne=p(S),D=r(S,"LI",{});var Ne=i(D);fe=n(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Qe=i(X);je=n(Qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Qe.forEach(t),Ne.forEach(t),S.forEach(t),se=p(v),A=r(v,"P",{});var ce=i(A);Pe=n(ce,`Note that when creating models and layers with
`),L=r(ce,"A",{href:!0,rel:!0});var Ve=i(L);Ae=n(Ve,"subclassing"),Ve.forEach(t),Le=n(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){h(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(L,"rel","nofollow")},m(v,z){b(v,d,z),e(d,_),e(d,u),e(u,m),e(d,k),b(v,l,z),b(v,f,z),e(f,E),e(E,le),e(f,Z),e(f,N),e(N,te),b(v,oe,z),b(v,M,z),e(M,we),e(M,K),e(K,Te),e(M,ge),e(M,B),e(B,$e),e(M,pe),e(M,J),e(J,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),b(v,ee,z),b(v,q,z),e(q,P),e(P,ve),e(P,Q),e(Q,Ee),e(P,ye),e(P,I),e(I,he),e(q,Me),e(q,j),e(j,ze),e(j,V),e(V,Ce),e(j,ue),e(j,G),e(G,qe),e(q,ne),e(q,D),e(D,fe),e(D,X),e(X,je),b(v,se,z),b(v,A,z),e(A,Pe),e(A,L),e(L,Ae),e(A,Le)},d(v){v&&t(d),v&&t(l),v&&t(f),v&&t(oe),v&&t(M),v&&t(ee),v&&t(q),v&&t(se),v&&t(A)}}}function t5(R){let d,_,u,m,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(f,"CODE",{});var E=i(u);m=n(E,"Module"),E.forEach(t),k=n(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,u),e(u,m),e(d,k)},d(l){l&&t(d)}}}function o5(R){let d,_,u,m,k;return m=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForMaskedLM
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
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){d=a("p"),_=o("Example:"),u=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Example:"),f.forEach(t),u=p(l),w(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,u,f),T(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){F(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(u),x(m,l)}}}function n5(R){let d,_;return d=new ie({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-<mask> tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){y(d.$$.fragment)},l(u){w(d.$$.fragment,u)},m(u,m){T(d,u,m),_=!0},p:re,i(u){_||($(d.$$.fragment,u),_=!0)},o(u){F(d.$$.fragment,u),_=!1},d(u){x(d,u)}}}function s5(R){let d,_,u,m,k,l,f,E,le,Z,N,te,oe,M,we,K,Te,ge,B,$e,pe,J,Fe,_e,U,xe,be,H,Re,ke,ee,q,P,ve,Q,Ee,ye,I,he,Me,j,ze,V,Ce,ue,G,qe,ne,D,fe,X,je,se,A,Pe,L,Ae,Le;return{c(){d=a("p"),_=o("TensorFlow models and layers in "),u=a("code"),m=o("transformers"),k=o(" accept two formats as input:"),l=c(),f=a("ul"),E=a("li"),le=o("having all inputs as keyword arguments (like PyTorch models), or"),Z=c(),N=a("li"),te=o("having all inputs as a list, tuple or dict in the first positional argument."),oe=c(),M=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Te=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=o("model.fit()"),pe=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Fe=o("fit()"),_e=o(" and "),U=a("code"),xe=o("predict()"),be=o(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=o("Functional"),ke=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=c(),q=a("ul"),P=a("li"),ve=o("a single Tensor with "),Q=a("code"),Ee=o("input_ids"),ye=o(" only and nothing else: "),I=a("code"),he=o("model(input_ids)"),Me=c(),j=a("li"),ze=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),Ce=o("model([input_ids, attention_mask])"),ue=o(" or "),G=a("code"),qe=o("model([input_ids, attention_mask, token_type_ids])"),ne=c(),D=a("li"),fe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),A=a("p"),Pe=o(`Note that when creating models and layers with
`),L=a("a"),Ae=o("subclassing"),Le=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=r(v,"P",{});var z=i(d);_=n(z,"TensorFlow models and layers in "),u=r(z,"CODE",{});var Ue=i(u);m=n(Ue,"transformers"),Ue.forEach(t),k=n(z," accept two formats as input:"),z.forEach(t),l=p(v),f=r(v,"UL",{});var de=i(f);E=r(de,"LI",{});var Xe=i(E);le=n(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=p(de),N=r(de,"LI",{});var Ke=i(N);te=n(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),de.forEach(t),oe=p(v),M=r(v,"P",{});var C=i(M);we=n(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(C,"CODE",{});var Ye=i(K);Te=n(Ye,"model.fit()"),Ye.forEach(t),ge=n(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(C,"CODE",{});var Se=i(B);$e=n(Se,"model.fit()"),Se.forEach(t),pe=n(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(C,"CODE",{});var Ze=i(J);Fe=n(Ze,"fit()"),Ze.forEach(t),_e=n(C," and "),U=r(C,"CODE",{});var et=i(U);xe=n(et,"predict()"),et.forEach(t),be=n(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var Be=i(H);Re=n(Be,"Functional"),Be.forEach(t),ke=n(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),ee=p(v),q=r(v,"UL",{});var S=i(q);P=r(S,"LI",{});var Y=i(P);ve=n(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Je=i(Q);Ee=n(Je,"input_ids"),Je.forEach(t),ye=n(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=n(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=p(S),j=r(S,"LI",{});var W=i(j);ze=n(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(W,"CODE",{});var He=i(V);Ce=n(He,"model([input_ids, attention_mask])"),He.forEach(t),ue=n(W," or "),G=r(W,"CODE",{});var We=i(G);qe=n(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),ne=p(S),D=r(S,"LI",{});var Ne=i(D);fe=n(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Qe=i(X);je=n(Qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Qe.forEach(t),Ne.forEach(t),S.forEach(t),se=p(v),A=r(v,"P",{});var ce=i(A);Pe=n(ce,`Note that when creating models and layers with
`),L=r(ce,"A",{href:!0,rel:!0});var Ve=i(L);Ae=n(Ve,"subclassing"),Ve.forEach(t),Le=n(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){h(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(L,"rel","nofollow")},m(v,z){b(v,d,z),e(d,_),e(d,u),e(u,m),e(d,k),b(v,l,z),b(v,f,z),e(f,E),e(E,le),e(f,Z),e(f,N),e(N,te),b(v,oe,z),b(v,M,z),e(M,we),e(M,K),e(K,Te),e(M,ge),e(M,B),e(B,$e),e(M,pe),e(M,J),e(J,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),b(v,ee,z),b(v,q,z),e(q,P),e(P,ve),e(P,Q),e(Q,Ee),e(P,ye),e(P,I),e(I,he),e(q,Me),e(q,j),e(j,ze),e(j,V),e(V,Ce),e(j,ue),e(j,G),e(G,qe),e(q,ne),e(q,D),e(D,fe),e(D,X),e(X,je),b(v,se,z),b(v,A,z),e(A,Pe),e(A,L),e(L,Ae),e(A,Le)},d(v){v&&t(d),v&&t(l),v&&t(f),v&&t(oe),v&&t(M),v&&t(ee),v&&t(q),v&&t(se),v&&t(A)}}}function a5(R){let d,_,u,m,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(f,"CODE",{});var E=i(u);m=n(E,"Module"),E.forEach(t),k=n(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,u),e(u,m),e(d,k)},d(l){l&&t(d)}}}function r5(R){let d,_,u,m,k;return m=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForSequenceClassification
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=a("p"),_=o("Example:"),u=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Example:"),f.forEach(t),u=p(l),w(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,u,f),T(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){F(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(u),x(m,l)}}}function i5(R){let d,_;return d=new ie({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFRobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){y(d.$$.fragment)},l(u){w(d.$$.fragment,u)},m(u,m){T(d,u,m),_=!0},p:re,i(u){_||($(d.$$.fragment,u),_=!0)},o(u){F(d.$$.fragment,u),_=!1},d(u){x(d,u)}}}function l5(R){let d,_,u,m,k,l,f,E,le,Z,N,te,oe,M,we,K,Te,ge,B,$e,pe,J,Fe,_e,U,xe,be,H,Re,ke,ee,q,P,ve,Q,Ee,ye,I,he,Me,j,ze,V,Ce,ue,G,qe,ne,D,fe,X,je,se,A,Pe,L,Ae,Le;return{c(){d=a("p"),_=o("TensorFlow models and layers in "),u=a("code"),m=o("transformers"),k=o(" accept two formats as input:"),l=c(),f=a("ul"),E=a("li"),le=o("having all inputs as keyword arguments (like PyTorch models), or"),Z=c(),N=a("li"),te=o("having all inputs as a list, tuple or dict in the first positional argument."),oe=c(),M=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Te=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=o("model.fit()"),pe=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Fe=o("fit()"),_e=o(" and "),U=a("code"),xe=o("predict()"),be=o(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=o("Functional"),ke=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=c(),q=a("ul"),P=a("li"),ve=o("a single Tensor with "),Q=a("code"),Ee=o("input_ids"),ye=o(" only and nothing else: "),I=a("code"),he=o("model(input_ids)"),Me=c(),j=a("li"),ze=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),Ce=o("model([input_ids, attention_mask])"),ue=o(" or "),G=a("code"),qe=o("model([input_ids, attention_mask, token_type_ids])"),ne=c(),D=a("li"),fe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),A=a("p"),Pe=o(`Note that when creating models and layers with
`),L=a("a"),Ae=o("subclassing"),Le=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=r(v,"P",{});var z=i(d);_=n(z,"TensorFlow models and layers in "),u=r(z,"CODE",{});var Ue=i(u);m=n(Ue,"transformers"),Ue.forEach(t),k=n(z," accept two formats as input:"),z.forEach(t),l=p(v),f=r(v,"UL",{});var de=i(f);E=r(de,"LI",{});var Xe=i(E);le=n(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=p(de),N=r(de,"LI",{});var Ke=i(N);te=n(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),de.forEach(t),oe=p(v),M=r(v,"P",{});var C=i(M);we=n(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(C,"CODE",{});var Ye=i(K);Te=n(Ye,"model.fit()"),Ye.forEach(t),ge=n(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(C,"CODE",{});var Se=i(B);$e=n(Se,"model.fit()"),Se.forEach(t),pe=n(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(C,"CODE",{});var Ze=i(J);Fe=n(Ze,"fit()"),Ze.forEach(t),_e=n(C," and "),U=r(C,"CODE",{});var et=i(U);xe=n(et,"predict()"),et.forEach(t),be=n(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var Be=i(H);Re=n(Be,"Functional"),Be.forEach(t),ke=n(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),ee=p(v),q=r(v,"UL",{});var S=i(q);P=r(S,"LI",{});var Y=i(P);ve=n(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Je=i(Q);Ee=n(Je,"input_ids"),Je.forEach(t),ye=n(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=n(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=p(S),j=r(S,"LI",{});var W=i(j);ze=n(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(W,"CODE",{});var He=i(V);Ce=n(He,"model([input_ids, attention_mask])"),He.forEach(t),ue=n(W," or "),G=r(W,"CODE",{});var We=i(G);qe=n(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),ne=p(S),D=r(S,"LI",{});var Ne=i(D);fe=n(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Qe=i(X);je=n(Qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Qe.forEach(t),Ne.forEach(t),S.forEach(t),se=p(v),A=r(v,"P",{});var ce=i(A);Pe=n(ce,`Note that when creating models and layers with
`),L=r(ce,"A",{href:!0,rel:!0});var Ve=i(L);Ae=n(Ve,"subclassing"),Ve.forEach(t),Le=n(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){h(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(L,"rel","nofollow")},m(v,z){b(v,d,z),e(d,_),e(d,u),e(u,m),e(d,k),b(v,l,z),b(v,f,z),e(f,E),e(E,le),e(f,Z),e(f,N),e(N,te),b(v,oe,z),b(v,M,z),e(M,we),e(M,K),e(K,Te),e(M,ge),e(M,B),e(B,$e),e(M,pe),e(M,J),e(J,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),b(v,ee,z),b(v,q,z),e(q,P),e(P,ve),e(P,Q),e(Q,Ee),e(P,ye),e(P,I),e(I,he),e(q,Me),e(q,j),e(j,ze),e(j,V),e(V,Ce),e(j,ue),e(j,G),e(G,qe),e(q,ne),e(q,D),e(D,fe),e(D,X),e(X,je),b(v,se,z),b(v,A,z),e(A,Pe),e(A,L),e(L,Ae),e(A,Le)},d(v){v&&t(d),v&&t(l),v&&t(f),v&&t(oe),v&&t(M),v&&t(ee),v&&t(q),v&&t(se),v&&t(A)}}}function d5(R){let d,_,u,m,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(f,"CODE",{});var E=i(u);m=n(E,"Module"),E.forEach(t),k=n(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,u),e(u,m),e(d,k)},d(l){l&&t(d)}}}function c5(R){let d,_,u,m,k;return m=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=o("Example:"),u=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Example:"),f.forEach(t),u=p(l),w(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,u,f),T(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){F(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(u),x(m,l)}}}function p5(R){let d,_,u,m,k,l,f,E,le,Z,N,te,oe,M,we,K,Te,ge,B,$e,pe,J,Fe,_e,U,xe,be,H,Re,ke,ee,q,P,ve,Q,Ee,ye,I,he,Me,j,ze,V,Ce,ue,G,qe,ne,D,fe,X,je,se,A,Pe,L,Ae,Le;return{c(){d=a("p"),_=o("TensorFlow models and layers in "),u=a("code"),m=o("transformers"),k=o(" accept two formats as input:"),l=c(),f=a("ul"),E=a("li"),le=o("having all inputs as keyword arguments (like PyTorch models), or"),Z=c(),N=a("li"),te=o("having all inputs as a list, tuple or dict in the first positional argument."),oe=c(),M=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Te=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=o("model.fit()"),pe=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Fe=o("fit()"),_e=o(" and "),U=a("code"),xe=o("predict()"),be=o(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=o("Functional"),ke=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=c(),q=a("ul"),P=a("li"),ve=o("a single Tensor with "),Q=a("code"),Ee=o("input_ids"),ye=o(" only and nothing else: "),I=a("code"),he=o("model(input_ids)"),Me=c(),j=a("li"),ze=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),Ce=o("model([input_ids, attention_mask])"),ue=o(" or "),G=a("code"),qe=o("model([input_ids, attention_mask, token_type_ids])"),ne=c(),D=a("li"),fe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),A=a("p"),Pe=o(`Note that when creating models and layers with
`),L=a("a"),Ae=o("subclassing"),Le=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=r(v,"P",{});var z=i(d);_=n(z,"TensorFlow models and layers in "),u=r(z,"CODE",{});var Ue=i(u);m=n(Ue,"transformers"),Ue.forEach(t),k=n(z," accept two formats as input:"),z.forEach(t),l=p(v),f=r(v,"UL",{});var de=i(f);E=r(de,"LI",{});var Xe=i(E);le=n(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=p(de),N=r(de,"LI",{});var Ke=i(N);te=n(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),de.forEach(t),oe=p(v),M=r(v,"P",{});var C=i(M);we=n(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(C,"CODE",{});var Ye=i(K);Te=n(Ye,"model.fit()"),Ye.forEach(t),ge=n(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(C,"CODE",{});var Se=i(B);$e=n(Se,"model.fit()"),Se.forEach(t),pe=n(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(C,"CODE",{});var Ze=i(J);Fe=n(Ze,"fit()"),Ze.forEach(t),_e=n(C," and "),U=r(C,"CODE",{});var et=i(U);xe=n(et,"predict()"),et.forEach(t),be=n(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var Be=i(H);Re=n(Be,"Functional"),Be.forEach(t),ke=n(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),ee=p(v),q=r(v,"UL",{});var S=i(q);P=r(S,"LI",{});var Y=i(P);ve=n(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Je=i(Q);Ee=n(Je,"input_ids"),Je.forEach(t),ye=n(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=n(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=p(S),j=r(S,"LI",{});var W=i(j);ze=n(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(W,"CODE",{});var He=i(V);Ce=n(He,"model([input_ids, attention_mask])"),He.forEach(t),ue=n(W," or "),G=r(W,"CODE",{});var We=i(G);qe=n(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),ne=p(S),D=r(S,"LI",{});var Ne=i(D);fe=n(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Qe=i(X);je=n(Qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Qe.forEach(t),Ne.forEach(t),S.forEach(t),se=p(v),A=r(v,"P",{});var ce=i(A);Pe=n(ce,`Note that when creating models and layers with
`),L=r(ce,"A",{href:!0,rel:!0});var Ve=i(L);Ae=n(Ve,"subclassing"),Ve.forEach(t),Le=n(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){h(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(L,"rel","nofollow")},m(v,z){b(v,d,z),e(d,_),e(d,u),e(u,m),e(d,k),b(v,l,z),b(v,f,z),e(f,E),e(E,le),e(f,Z),e(f,N),e(N,te),b(v,oe,z),b(v,M,z),e(M,we),e(M,K),e(K,Te),e(M,ge),e(M,B),e(B,$e),e(M,pe),e(M,J),e(J,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),b(v,ee,z),b(v,q,z),e(q,P),e(P,ve),e(P,Q),e(Q,Ee),e(P,ye),e(P,I),e(I,he),e(q,Me),e(q,j),e(j,ze),e(j,V),e(V,Ce),e(j,ue),e(j,G),e(G,qe),e(q,ne),e(q,D),e(D,fe),e(D,X),e(X,je),b(v,se,z),b(v,A,z),e(A,Pe),e(A,L),e(L,Ae),e(A,Le)},d(v){v&&t(d),v&&t(l),v&&t(f),v&&t(oe),v&&t(M),v&&t(ee),v&&t(q),v&&t(se),v&&t(A)}}}function h5(R){let d,_,u,m,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(f,"CODE",{});var E=i(u);m=n(E,"Module"),E.forEach(t),k=n(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,u),e(u,m),e(d,k)},d(l){l&&t(d)}}}function u5(R){let d,_,u,m,k;return m=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){d=a("p"),_=o("Example:"),u=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Example:"),f.forEach(t),u=p(l),w(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,u,f),T(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){F(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(u),x(m,l)}}}function f5(R){let d,_;return d=new ie({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){y(d.$$.fragment)},l(u){w(d.$$.fragment,u)},m(u,m){T(d,u,m),_=!0},p:re,i(u){_||($(d.$$.fragment,u),_=!0)},o(u){F(d.$$.fragment,u),_=!1},d(u){x(d,u)}}}function m5(R){let d,_,u,m,k,l,f,E,le,Z,N,te,oe,M,we,K,Te,ge,B,$e,pe,J,Fe,_e,U,xe,be,H,Re,ke,ee,q,P,ve,Q,Ee,ye,I,he,Me,j,ze,V,Ce,ue,G,qe,ne,D,fe,X,je,se,A,Pe,L,Ae,Le;return{c(){d=a("p"),_=o("TensorFlow models and layers in "),u=a("code"),m=o("transformers"),k=o(" accept two formats as input:"),l=c(),f=a("ul"),E=a("li"),le=o("having all inputs as keyword arguments (like PyTorch models), or"),Z=c(),N=a("li"),te=o("having all inputs as a list, tuple or dict in the first positional argument."),oe=c(),M=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Te=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=o("model.fit()"),pe=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Fe=o("fit()"),_e=o(" and "),U=a("code"),xe=o("predict()"),be=o(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=o("Functional"),ke=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=c(),q=a("ul"),P=a("li"),ve=o("a single Tensor with "),Q=a("code"),Ee=o("input_ids"),ye=o(" only and nothing else: "),I=a("code"),he=o("model(input_ids)"),Me=c(),j=a("li"),ze=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),Ce=o("model([input_ids, attention_mask])"),ue=o(" or "),G=a("code"),qe=o("model([input_ids, attention_mask, token_type_ids])"),ne=c(),D=a("li"),fe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),A=a("p"),Pe=o(`Note that when creating models and layers with
`),L=a("a"),Ae=o("subclassing"),Le=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=r(v,"P",{});var z=i(d);_=n(z,"TensorFlow models and layers in "),u=r(z,"CODE",{});var Ue=i(u);m=n(Ue,"transformers"),Ue.forEach(t),k=n(z," accept two formats as input:"),z.forEach(t),l=p(v),f=r(v,"UL",{});var de=i(f);E=r(de,"LI",{});var Xe=i(E);le=n(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=p(de),N=r(de,"LI",{});var Ke=i(N);te=n(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),de.forEach(t),oe=p(v),M=r(v,"P",{});var C=i(M);we=n(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(C,"CODE",{});var Ye=i(K);Te=n(Ye,"model.fit()"),Ye.forEach(t),ge=n(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(C,"CODE",{});var Se=i(B);$e=n(Se,"model.fit()"),Se.forEach(t),pe=n(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(C,"CODE",{});var Ze=i(J);Fe=n(Ze,"fit()"),Ze.forEach(t),_e=n(C," and "),U=r(C,"CODE",{});var et=i(U);xe=n(et,"predict()"),et.forEach(t),be=n(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var Be=i(H);Re=n(Be,"Functional"),Be.forEach(t),ke=n(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),ee=p(v),q=r(v,"UL",{});var S=i(q);P=r(S,"LI",{});var Y=i(P);ve=n(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Je=i(Q);Ee=n(Je,"input_ids"),Je.forEach(t),ye=n(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=n(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=p(S),j=r(S,"LI",{});var W=i(j);ze=n(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(W,"CODE",{});var He=i(V);Ce=n(He,"model([input_ids, attention_mask])"),He.forEach(t),ue=n(W," or "),G=r(W,"CODE",{});var We=i(G);qe=n(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),ne=p(S),D=r(S,"LI",{});var Ne=i(D);fe=n(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Qe=i(X);je=n(Qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Qe.forEach(t),Ne.forEach(t),S.forEach(t),se=p(v),A=r(v,"P",{});var ce=i(A);Pe=n(ce,`Note that when creating models and layers with
`),L=r(ce,"A",{href:!0,rel:!0});var Ve=i(L);Ae=n(Ve,"subclassing"),Ve.forEach(t),Le=n(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){h(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(L,"rel","nofollow")},m(v,z){b(v,d,z),e(d,_),e(d,u),e(u,m),e(d,k),b(v,l,z),b(v,f,z),e(f,E),e(E,le),e(f,Z),e(f,N),e(N,te),b(v,oe,z),b(v,M,z),e(M,we),e(M,K),e(K,Te),e(M,ge),e(M,B),e(B,$e),e(M,pe),e(M,J),e(J,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),b(v,ee,z),b(v,q,z),e(q,P),e(P,ve),e(P,Q),e(Q,Ee),e(P,ye),e(P,I),e(I,he),e(q,Me),e(q,j),e(j,ze),e(j,V),e(V,Ce),e(j,ue),e(j,G),e(G,qe),e(q,ne),e(q,D),e(D,fe),e(D,X),e(X,je),b(v,se,z),b(v,A,z),e(A,Pe),e(A,L),e(L,Ae),e(A,Le)},d(v){v&&t(d),v&&t(l),v&&t(f),v&&t(oe),v&&t(M),v&&t(ee),v&&t(q),v&&t(se),v&&t(A)}}}function g5(R){let d,_,u,m,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(f,"CODE",{});var E=i(u);m=n(E,"Module"),E.forEach(t),k=n(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,u),e(u,m),e(d,k)},d(l){l&&t(d)}}}function _5(R){let d,_,u,m,k;return m=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForQuestionAnswering
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
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){d=a("p"),_=o("Example:"),u=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Example:"),f.forEach(t),u=p(l),w(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,u,f),T(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){F(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(u),x(m,l)}}}function b5(R){let d,_;return d=new ie({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.86</span>`}}),{c(){y(d.$$.fragment)},l(u){w(d.$$.fragment,u)},m(u,m){T(d,u,m),_=!0},p:re,i(u){_||($(d.$$.fragment,u),_=!0)},o(u){F(d.$$.fragment,u),_=!1},d(u){x(d,u)}}}function k5(R){let d,_,u,m,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(f,"CODE",{});var E=i(u);m=n(E,"Module"),E.forEach(t),k=n(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,u),e(u,m),e(d,k)},d(l){l&&t(d)}}}function v5(R){let d,_,u,m,k;return m=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaModel

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaModel.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaModel.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),_=o("Example:"),u=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Example:"),f.forEach(t),u=p(l),w(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,u,f),T(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){F(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(u),x(m,l)}}}function y5(R){let d,_,u,m,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(f,"CODE",{});var E=i(u);m=n(E,"Module"),E.forEach(t),k=n(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,u),e(u,m),e(d,k)},d(l){l&&t(d)}}}function w5(R){let d,_,u,m,k;return m=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForCausalLM

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForCausalLM.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

# retrieve logts for next token
next_token_logits = outputs.logits[:, -1]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForCausalLM.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve logts for next token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=a("p"),_=o("Example:"),u=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Example:"),f.forEach(t),u=p(l),w(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,u,f),T(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){F(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(u),x(m,l)}}}function T5(R){let d,_,u,m,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(f,"CODE",{});var E=i(u);m=n(E,"Module"),E.forEach(t),k=n(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,u),e(u,m),e(d,k)},d(l){l&&t(d)}}}function $5(R){let d,_,u,m,k;return m=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForMaskedLM

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForMaskedLM.from_pretrained("roberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=o("Example:"),u=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Example:"),f.forEach(t),u=p(l),w(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,u,f),T(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){F(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(u),x(m,l)}}}function F5(R){let d,_,u,m,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(f,"CODE",{});var E=i(u);m=n(E,"Module"),E.forEach(t),k=n(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,u),e(u,m),e(d,k)},d(l){l&&t(d)}}}function x5(R){let d,_,u,m,k;return m=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForSequenceClassification

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForSequenceClassification.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=o("Example:"),u=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Example:"),f.forEach(t),u=p(l),w(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,u,f),T(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){F(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(u),x(m,l)}}}function R5(R){let d,_,u,m,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(f,"CODE",{});var E=i(u);m=n(E,"Module"),E.forEach(t),k=n(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,u),e(u,m),e(d,k)},d(l){l&&t(d)}}}function E5(R){let d,_,u,m,k;return m=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=o("Example:"),u=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Example:"),f.forEach(t),u=p(l),w(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,u,f),T(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){F(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(u),x(m,l)}}}function M5(R){let d,_,u,m,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(f,"CODE",{});var E=i(u);m=n(E,"Module"),E.forEach(t),k=n(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,u),e(u,m),e(d,k)},d(l){l&&t(d)}}}function z5(R){let d,_,u,m,k;return m=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForTokenClassification

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForTokenClassification.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=o("Example:"),u=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Example:"),f.forEach(t),u=p(l),w(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,u,f),T(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){F(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(u),x(m,l)}}}function C5(R){let d,_,u,m,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),m=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(f,"CODE",{});var E=i(u);m=n(E,"Module"),E.forEach(t),k=n(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,_),e(d,u),e(u,m),e(d,k)},d(l){l&&t(d)}}}function q5(R){let d,_,u,m,k;return m=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=a("p"),_=o("Example:"),u=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var f=i(d);_=n(f,"Example:"),f.forEach(t),u=p(l),w(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,_),b(l,u,f),T(m,l,f),k=!0},p:re,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){F(m.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(u),x(m,l)}}}function j5(R){let d,_,u,m,k,l,f,E,le,Z,N,te,oe,M,we,K,Te,ge,B,$e,pe,J,Fe,_e,U,xe,be,H,Re,ke,ee,q,P,ve,Q,Ee,ye,I,he,Me,j,ze,V,Ce,ue,G,qe,ne,D,fe,X,je,se,A,Pe,L,Ae,Le,v,z,Ue,de,Xe,Ke,C,Ye,Se,Ze,et,Be,S,Y,Je,Oe,W,He,We,Ne,Qe,ce,Ve,zc,jb,Zm,ur,eg,bt,an,Pb,fr,Ab,Lb,mr,Ob,Nb,Ib,gr,Db,_r,Sb,Bb,Wb,br,Ub,kr,Hb,Qb,Kb,Fo,Cc,Jb,Vb,vr,Gb,Xb,yr,Yb,Zb,ek,xo,qc,tk,ok,wr,nk,sk,Tr,ak,rk,ik,Ro,jc,lk,dk,$r,ck,pk,Fr,hk,uk,tg,xr,og,Kt,Eo,Pc,fk,mk,Rr,gk,_k,Er,bk,kk,vk,Mo,Ac,yk,wk,Mr,Tk,$k,zr,Fk,xk,Rk,rs,Lc,Ek,Mk,Cr,zk,Ck,qk,Oc,qr,jk,Pk,ng,jr,sg,Mt,Pr,Ak,Ar,Lk,Ok,Nk,zo,Nc,Ik,Dk,Lr,Sk,Bk,Or,Wk,Uk,Hk,Co,Ic,Qk,Kk,Nr,Jk,Vk,Ir,Gk,Xk,Yk,qo,Dc,Zk,ev,Dr,tv,ov,Sr,nv,sv,av,Sc,Br,rv,iv,ag,Wr,rg,zt,Ur,lv,Hr,dv,cv,pv,jo,Bc,hv,uv,Qr,fv,mv,Kr,gv,_v,bv,Po,Wc,kv,vv,Jr,yv,wv,Vr,Tv,$v,Fv,is,Uc,xv,Rv,Gr,Ev,Mv,zv,Hc,Xr,Cv,qv,ig,Qc,mh,jv,lg,ls,Ao,Kc,Pv,Av,Yr,Lv,Ov,Zr,Nv,Iv,Dv,Lo,Jc,Sv,Bv,ei,Wv,Uv,ti,Hv,Qv,dg,rn,ds,gh,oi,Kv,_h,Jv,cg,yt,ni,Vv,fo,Gv,Vc,Xv,Yv,Gc,Zv,ey,si,ty,oy,ny,ln,sy,Xc,ay,ry,Yc,iy,ly,dy,dn,cy,Zc,py,hy,ep,uy,fy,my,cs,pg,cn,ps,bh,ai,gy,kh,_y,hg,Ie,ri,by,vh,ky,vy,yh,yy,wy,hs,Ty,ii,$y,wh,Fy,xy,Ry,us,Ey,li,My,tp,zy,Cy,qy,Oo,di,jy,Th,Py,Ay,ci,op,Ly,$h,Oy,Ny,np,Iy,Fh,Dy,Sy,fs,pi,By,hi,Wy,xh,Uy,Hy,Qy,ms,ui,Ky,Rh,Jy,Vy,sp,fi,ug,pn,gs,Eh,mi,Gy,Mh,Xy,fg,tt,gi,Yy,_i,Zy,zh,ew,tw,ow,Ch,nw,sw,_s,aw,bi,rw,qh,iw,lw,dw,bs,cw,ki,pw,ap,hw,uw,fw,rp,vi,mg,hn,ks,jh,yi,mw,Ph,gw,gg,ot,wi,_w,Ah,bw,kw,Ti,vw,ip,yw,ww,Tw,$i,$w,Fi,Fw,xw,Rw,xi,Ew,Lh,Mw,zw,Cw,pt,qw,Oh,jw,Pw,Nh,Aw,Lw,Ih,Ow,Nw,Dh,Iw,Dw,Sh,Sw,Bw,Bh,Ww,Uw,Hw,vs,Qw,Wh,Kw,Jw,Ri,Vw,Gw,Jt,Ei,Xw,un,Yw,lp,Zw,eT,Uh,tT,oT,nT,ys,sT,ws,_g,fn,Ts,Hh,Mi,aT,Qh,rT,bg,wt,zi,iT,Ci,lT,Kh,dT,cT,pT,qi,hT,dp,uT,fT,mT,ji,gT,Pi,_T,bT,kT,Vt,Ai,vT,mn,yT,cp,wT,TT,Jh,$T,FT,xT,$s,RT,Fs,kg,gn,xs,Vh,Li,ET,Gh,MT,vg,Tt,Oi,zT,Ni,CT,Xh,qT,jT,PT,Ii,AT,pp,LT,OT,NT,Di,IT,Si,DT,ST,BT,Ct,Bi,WT,_n,UT,hp,HT,QT,Yh,KT,JT,VT,Rs,GT,Es,XT,Ms,yg,bn,zs,Zh,Wi,YT,eu,ZT,wg,$t,Ui,e$,tu,t$,o$,Hi,n$,up,s$,a$,r$,Qi,i$,Ki,l$,d$,c$,ct,Ji,p$,kn,h$,fp,u$,f$,ou,m$,g$,_$,Cs,b$,qs,k$,js,v$,Ps,y$,As,Tg,vn,Ls,nu,Vi,w$,su,T$,$g,Ft,Gi,$$,au,F$,x$,Xi,R$,mp,E$,M$,z$,Yi,C$,Zi,q$,j$,P$,Gt,el,A$,yn,L$,gp,O$,N$,ru,I$,D$,S$,Os,B$,Ns,Fg,wn,Is,iu,tl,W$,lu,U$,xg,xt,ol,H$,du,Q$,K$,nl,J$,_p,V$,G$,X$,sl,Y$,al,Z$,e2,t2,qt,rl,o2,Tn,n2,bp,s2,a2,cu,r2,i2,l2,Ds,d2,Ss,c2,Bs,Rg,$n,Ws,pu,il,p2,hu,h2,Eg,Rt,ll,u2,Fn,f2,uu,m2,g2,fu,_2,b2,k2,dl,v2,kp,y2,w2,T2,cl,$2,pl,F2,x2,R2,jt,hl,E2,xn,M2,vp,z2,C2,mu,q2,j2,P2,Us,A2,Hs,L2,Qs,Mg,Rn,Ks,gu,ul,O2,_u,N2,zg,ht,fl,I2,bu,D2,S2,ml,B2,yp,W2,U2,H2,gl,Q2,_l,K2,J2,V2,Js,G2,Xt,bl,X2,En,Y2,wp,Z2,e1,ku,t1,o1,n1,Vs,s1,Gs,Cg,Mn,Xs,vu,kl,a1,yu,r1,qg,zn,vl,i1,Yt,yl,l1,Cn,d1,Tp,c1,p1,wu,h1,u1,f1,Ys,m1,Zs,jg,qn,ea,Tu,wl,g1,$u,_1,Pg,ut,Tl,b1,$l,k1,Fu,v1,y1,w1,Fl,T1,$p,$1,F1,x1,xl,R1,Rl,E1,M1,z1,ta,C1,Pt,El,q1,jn,j1,Fp,P1,A1,xu,L1,O1,N1,oa,I1,na,D1,sa,Ag,Pn,aa,Ru,Ml,S1,Eu,B1,Lg,ft,zl,W1,Mu,U1,H1,Cl,Q1,xp,K1,J1,V1,ql,G1,jl,X1,Y1,Z1,ra,e0,At,Pl,t0,An,o0,Rp,n0,s0,zu,a0,r0,i0,ia,l0,la,d0,da,Og,Ln,ca,Cu,Al,c0,qu,p0,Ng,mt,Ll,h0,ju,u0,f0,Ol,m0,Ep,g0,_0,b0,Nl,k0,Il,v0,y0,w0,pa,T0,Zt,Dl,$0,On,F0,Mp,x0,R0,Pu,E0,M0,z0,ha,C0,ua,Ig,Nn,fa,Au,Sl,q0,Lu,j0,Dg,gt,Bl,P0,Ou,A0,L0,Wl,O0,zp,N0,I0,D0,Ul,S0,Hl,B0,W0,U0,ma,H0,Lt,Ql,Q0,In,K0,Cp,J0,V0,Nu,G0,X0,Y0,ga,Z0,_a,e4,ba,Sg,Dn,ka,Iu,Kl,t4,Du,o4,Bg,_t,Jl,n4,Sn,s4,Su,a4,r4,Bu,i4,l4,d4,Vl,c4,qp,p4,h4,u4,Gl,f4,Xl,m4,g4,_4,va,b4,Ot,Yl,k4,Bn,v4,jp,y4,w4,Wu,T4,$4,F4,ya,x4,wa,R4,Ta,Wg,Wn,$a,Uu,Zl,E4,Hu,M4,Ug,nt,ed,z4,Qu,C4,q4,td,j4,Pp,P4,A4,L4,od,O4,nd,N4,I4,D4,Ku,S4,B4,mo,Ju,sd,W4,U4,Vu,ad,H4,Q4,Gu,rd,K4,J4,Xu,id,V4,G4,eo,ld,X4,Un,Y4,Yu,Z4,eF,Zu,tF,oF,nF,Fa,sF,xa,Hg,Hn,Ra,ef,dd,aF,tf,rF,Qg,st,cd,iF,of,lF,dF,pd,cF,Ap,pF,hF,uF,hd,fF,ud,mF,gF,_F,nf,bF,kF,go,sf,fd,vF,yF,af,md,wF,TF,rf,gd,$F,FF,lf,_d,xF,RF,to,bd,EF,Qn,MF,df,zF,CF,cf,qF,jF,PF,Ea,AF,Ma,Kg,Kn,za,pf,kd,LF,hf,OF,Jg,at,vd,NF,yd,IF,uf,DF,SF,BF,wd,WF,Lp,UF,HF,QF,Td,KF,$d,JF,VF,GF,ff,XF,YF,_o,mf,Fd,ZF,ex,gf,xd,tx,ox,_f,Rd,nx,sx,bf,Ed,ax,rx,oo,Md,ix,Jn,lx,kf,dx,cx,vf,px,hx,ux,Ca,fx,qa,Vg,Vn,ja,yf,zd,mx,wf,gx,Gg,rt,Cd,_x,Tf,bx,kx,qd,vx,Op,yx,wx,Tx,jd,$x,Pd,Fx,xx,Rx,$f,Ex,Mx,bo,Ff,Ad,zx,Cx,xf,Ld,qx,jx,Rf,Od,Px,Ax,Ef,Nd,Lx,Ox,no,Id,Nx,Gn,Ix,Mf,Dx,Sx,zf,Bx,Wx,Ux,Pa,Hx,Aa,Xg,Xn,La,Cf,Dd,Qx,qf,Kx,Yg,it,Sd,Jx,jf,Vx,Gx,Bd,Xx,Np,Yx,Zx,eR,Wd,tR,Ud,oR,nR,sR,Pf,aR,rR,ko,Af,Hd,iR,lR,Lf,Qd,dR,cR,Of,Kd,pR,hR,Nf,Jd,uR,fR,so,Vd,mR,Yn,gR,If,_R,bR,Df,kR,vR,yR,Oa,wR,Na,Zg,Zn,Ia,Sf,Gd,TR,Bf,$R,e_,lt,Xd,FR,Wf,xR,RR,Yd,ER,Ip,MR,zR,CR,Zd,qR,ec,jR,PR,AR,Uf,LR,OR,vo,Hf,tc,NR,IR,Qf,oc,DR,SR,Kf,nc,BR,WR,Jf,sc,UR,HR,ao,ac,QR,es,KR,Vf,JR,VR,Gf,GR,XR,YR,Da,ZR,Sa,t_,ts,Ba,Xf,rc,eE,Yf,tE,o_,dt,ic,oE,os,nE,Zf,sE,aE,em,rE,iE,lE,lc,dE,Dp,cE,pE,hE,dc,uE,cc,fE,mE,gE,tm,_E,bE,yo,om,pc,kE,vE,nm,hc,yE,wE,sm,uc,TE,$E,am,fc,FE,xE,ro,mc,RE,ns,EE,rm,ME,zE,im,CE,qE,jE,Wa,PE,Ua,n_;return l=new De({}),M=new De({}),We=new De({}),ur=new qb({props:{pipeline:"text-classification"}}),xr=new qb({props:{pipeline:"token-classification"}}),jr=new qb({props:{pipeline:"fill-mask"}}),Wr=new qb({props:{pipeline:"question-answering"}}),oi=new De({}),ni=new O({props:{name:"class transformers.RobertaConfig",anchor:"transformers.RobertaConfig",parameters:[{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/configuration_roberta.py#L37"}}),cs=new ae({props:{anchor:"transformers.RobertaConfig.example",$$slots:{default:[$3]},$$scope:{ctx:R}}}),ai=new De({}),ri=new O({props:{name:"class transformers.RobertaTokenizer",anchor:"transformers.RobertaTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
other word. (RoBERTa tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/tokenization_roberta.py#L107"}}),hs=new ae({props:{anchor:"transformers.RobertaTokenizer.example",$$slots:{default:[F3]},$$scope:{ctx:R}}}),us=new me({props:{$$slots:{default:[x3]},$$scope:{ctx:R}}}),di=new O({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/tokenization_roberta.py#L344",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),pi=new O({props:{name:"get_special_tokens_mask",anchor:"transformers.RobertaTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/tokenization_roberta.py#L369",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ui=new O({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/tokenization_roberta.py#L396",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fi=new O({props:{name:"save_vocabulary",anchor:"transformers.RobertaTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/tokenization_roberta.py#L315"}}),mi=new De({}),gi=new O({props:{name:"class transformers.RobertaTokenizerFast",anchor:"transformers.RobertaTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RobertaTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether the post processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/tokenization_roberta_fast.py#L76"}}),_s=new ae({props:{anchor:"transformers.RobertaTokenizerFast.example",$$slots:{default:[R3]},$$scope:{ctx:R}}}),bs=new me({props:{$$slots:{default:[E3]},$$scope:{ctx:R}}}),vi=new O({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RobertaTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/tokenization_roberta_fast.py#L279"}}),yi=new De({}),wi=new O({props:{name:"class transformers.RobertaModel",anchor:"transformers.RobertaModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.RobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_roberta.py#L691"}}),Ei=new O({props:{name:"forward",anchor:"transformers.RobertaModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RobertaModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RobertaModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0,1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
This parameter can only be used when the model is initialized with <code>type_vocab_size</code> parameter with value<blockquote>
<p>= 2. All the value in this tensor should be always &lt; type_vocab_size.</p>
</blockquote></li>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_roberta.py#L736",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ys=new me({props:{$$slots:{default:[M3]},$$scope:{ctx:R}}}),ws=new ae({props:{anchor:"transformers.RobertaModel.forward.example",$$slots:{default:[z3]},$$scope:{ctx:R}}}),Mi=new De({}),zi=new O({props:{name:"class transformers.RobertaForCausalLM",anchor:"transformers.RobertaForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_roberta.py#L877"}}),Ai=new O({props:{name:"forward",anchor:"transformers.RobertaForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Tuple[typing.Tuple[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RobertaForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RobertaForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0,1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
This parameter can only be used when the model is initialized with <code>type_vocab_size</code> parameter with value<blockquote>
<p>= 2. All the value in this tensor should be always &lt; type_vocab_size.</p>
</blockquote></li>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_roberta.py#L903",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$s=new me({props:{$$slots:{default:[C3]},$$scope:{ctx:R}}}),Fs=new ae({props:{anchor:"transformers.RobertaForCausalLM.forward.example",$$slots:{default:[q3]},$$scope:{ctx:R}}}),Li=new De({}),Oi=new O({props:{name:"class transformers.RobertaForMaskedLM",anchor:"transformers.RobertaForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_roberta.py#L1029"}}),Bi=new O({props:{name:"forward",anchor:"transformers.RobertaForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RobertaForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RobertaForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0,1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
This parameter can only be used when the model is initialized with <code>type_vocab_size</code> parameter with value<blockquote>
<p>= 2. All the value in this tensor should be always &lt; type_vocab_size.</p>
</blockquote></li>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.RobertaForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_roberta.py#L1058",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Rs=new me({props:{$$slots:{default:[j3]},$$scope:{ctx:R}}}),Es=new ae({props:{anchor:"transformers.RobertaForMaskedLM.forward.example",$$slots:{default:[P3]},$$scope:{ctx:R}}}),Ms=new ae({props:{anchor:"transformers.RobertaForMaskedLM.forward.example-2",$$slots:{default:[A3]},$$scope:{ctx:R}}}),Wi=new De({}),Ui=new O({props:{name:"class transformers.RobertaForSequenceClassification",anchor:"transformers.RobertaForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_roberta.py#L1164"}}),Ji=new O({props:{name:"forward",anchor:"transformers.RobertaForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RobertaForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RobertaForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0,1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
This parameter can only be used when the model is initialized with <code>type_vocab_size</code> parameter with value<blockquote>
<p>= 2. All the value in this tensor should be always &lt; type_vocab_size.</p>
</blockquote></li>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_roberta.py#L1178",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Cs=new me({props:{$$slots:{default:[L3]},$$scope:{ctx:R}}}),qs=new ae({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example",$$slots:{default:[O3]},$$scope:{ctx:R}}}),js=new ae({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example-2",$$slots:{default:[N3]},$$scope:{ctx:R}}}),Ps=new ae({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example-3",$$slots:{default:[I3]},$$scope:{ctx:R}}}),As=new ae({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example-4",$$slots:{default:[D3]},$$scope:{ctx:R}}}),Vi=new De({}),Gi=new O({props:{name:"class transformers.RobertaForMultipleChoice",anchor:"transformers.RobertaForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_roberta.py#L1264"}}),el=new O({props:{name:"forward",anchor:"transformers.RobertaForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RobertaForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RobertaForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0,1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
This parameter can only be used when the model is initialized with <code>type_vocab_size</code> parameter with value<blockquote>
<p>= 2. All the value in this tensor should be always &lt; type_vocab_size.</p>
</blockquote></li>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_roberta.py#L1277",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Os=new me({props:{$$slots:{default:[S3]},$$scope:{ctx:R}}}),Ns=new ae({props:{anchor:"transformers.RobertaForMultipleChoice.forward.example",$$slots:{default:[B3]},$$scope:{ctx:R}}}),tl=new De({}),ol=new O({props:{name:"class transformers.RobertaForTokenClassification",anchor:"transformers.RobertaForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_roberta.py#L1357"}}),rl=new O({props:{name:"forward",anchor:"transformers.RobertaForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RobertaForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RobertaForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0,1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
This parameter can only be used when the model is initialized with <code>type_vocab_size</code> parameter with value<blockquote>
<p>= 2. All the value in this tensor should be always &lt; type_vocab_size.</p>
</blockquote></li>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_roberta.py#L1375",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ds=new me({props:{$$slots:{default:[W3]},$$scope:{ctx:R}}}),Ss=new ae({props:{anchor:"transformers.RobertaForTokenClassification.forward.example",$$slots:{default:[U3]},$$scope:{ctx:R}}}),Bs=new ae({props:{anchor:"transformers.RobertaForTokenClassification.forward.example-2",$$slots:{default:[H3]},$$scope:{ctx:R}}}),il=new De({}),ll=new O({props:{name:"class transformers.RobertaForQuestionAnswering",anchor:"transformers.RobertaForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_roberta.py#L1466"}}),hl=new O({props:{name:"forward",anchor:"transformers.RobertaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RobertaForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RobertaForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0,1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
This parameter can only be used when the model is initialized with <code>type_vocab_size</code> parameter with value<blockquote>
<p>= 2. All the value in this tensor should be always &lt; type_vocab_size.</p>
</blockquote></li>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.RobertaForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_roberta.py#L1480",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Us=new me({props:{$$slots:{default:[Q3]},$$scope:{ctx:R}}}),Hs=new ae({props:{anchor:"transformers.RobertaForQuestionAnswering.forward.example",$$slots:{default:[K3]},$$scope:{ctx:R}}}),Qs=new ae({props:{anchor:"transformers.RobertaForQuestionAnswering.forward.example-2",$$slots:{default:[J3]},$$scope:{ctx:R}}}),ul=new De({}),fl=new O({props:{name:"class transformers.TFRobertaModel",anchor:"transformers.TFRobertaModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_tf_roberta.py#L924"}}),Js=new me({props:{$$slots:{default:[V3]},$$scope:{ctx:R}}}),bl=new O({props:{name:"call",anchor:"transformers.TFRobertaModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_tf_roberta.py#L929",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Vs=new me({props:{$$slots:{default:[G3]},$$scope:{ctx:R}}}),Gs=new ae({props:{anchor:"transformers.TFRobertaModel.call.example",$$slots:{default:[X3]},$$scope:{ctx:R}}}),kl=new De({}),vl=new O({props:{name:"class transformers.TFRobertaForCausalLM",anchor:"transformers.TFRobertaForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1153"}}),yl=new O({props:{name:"call",anchor:"transformers.TFRobertaForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForCausalLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1186",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ys=new me({props:{$$slots:{default:[Y3]},$$scope:{ctx:R}}}),Zs=new ae({props:{anchor:"transformers.TFRobertaForCausalLM.call.example",$$slots:{default:[Z3]},$$scope:{ctx:R}}}),wl=new De({}),Tl=new O({props:{name:"class transformers.TFRobertaForMaskedLM",anchor:"transformers.TFRobertaForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1068"}}),ta=new me({props:{$$slots:{default:[e5]},$$scope:{ctx:R}}}),El=new O({props:{name:"call",anchor:"transformers.TFRobertaForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1085",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),oa=new me({props:{$$slots:{default:[t5]},$$scope:{ctx:R}}}),na=new ae({props:{anchor:"transformers.TFRobertaForMaskedLM.call.example",$$slots:{default:[o5]},$$scope:{ctx:R}}}),sa=new ae({props:{anchor:"transformers.TFRobertaForMaskedLM.call.example-2",$$slots:{default:[n5]},$$scope:{ctx:R}}}),Ml=new De({}),zl=new O({props:{name:"class transformers.TFRobertaForSequenceClassification",anchor:"transformers.TFRobertaForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1333"}}),ra=new me({props:{$$slots:{default:[s5]},$$scope:{ctx:R}}}),Pl=new O({props:{name:"call",anchor:"transformers.TFRobertaForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1344",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ia=new me({props:{$$slots:{default:[a5]},$$scope:{ctx:R}}}),la=new ae({props:{anchor:"transformers.TFRobertaForSequenceClassification.call.example",$$slots:{default:[r5]},$$scope:{ctx:R}}}),da=new ae({props:{anchor:"transformers.TFRobertaForSequenceClassification.call.example-2",$$slots:{default:[i5]},$$scope:{ctx:R}}}),Al=new De({}),Ll=new O({props:{name:"class transformers.TFRobertaForMultipleChoice",anchor:"transformers.TFRobertaForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1417"}}),pa=new me({props:{$$slots:{default:[l5]},$$scope:{ctx:R}}}),Dl=new O({props:{name:"call",anchor:"transformers.TFRobertaForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1441",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ha=new me({props:{$$slots:{default:[d5]},$$scope:{ctx:R}}}),ua=new ae({props:{anchor:"transformers.TFRobertaForMultipleChoice.call.example",$$slots:{default:[c5]},$$scope:{ctx:R}}}),Sl=new De({}),Bl=new O({props:{name:"class transformers.TFRobertaForTokenClassification",anchor:"transformers.TFRobertaForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1538"}}),ma=new me({props:{$$slots:{default:[p5]},$$scope:{ctx:R}}}),Ql=new O({props:{name:"call",anchor:"transformers.TFRobertaForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1556",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ga=new me({props:{$$slots:{default:[h5]},$$scope:{ctx:R}}}),_a=new ae({props:{anchor:"transformers.TFRobertaForTokenClassification.call.example",$$slots:{default:[u5]},$$scope:{ctx:R}}}),ba=new ae({props:{anchor:"transformers.TFRobertaForTokenClassification.call.example-2",$$slots:{default:[f5]},$$scope:{ctx:R}}}),Kl=new De({}),Jl=new O({props:{name:"class transformers.TFRobertaForQuestionAnswering",anchor:"transformers.TFRobertaForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1629"}}),va=new me({props:{$$slots:{default:[m5]},$$scope:{ctx:R}}}),Yl=new O({props:{name:"call",anchor:"transformers.TFRobertaForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1642",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ya=new me({props:{$$slots:{default:[g5]},$$scope:{ctx:R}}}),wa=new ae({props:{anchor:"transformers.TFRobertaForQuestionAnswering.call.example",$$slots:{default:[_5]},$$scope:{ctx:R}}}),Ta=new ae({props:{anchor:"transformers.TFRobertaForQuestionAnswering.call.example-2",$$slots:{default:[b5]},$$scope:{ctx:R}}}),Zl=new De({}),ed=new O({props:{name:"class transformers.FlaxRobertaModel",anchor:"transformers.FlaxRobertaModel",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_flax_roberta.py#L989"}}),ld=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fa=new me({props:{$$slots:{default:[k5]},$$scope:{ctx:R}}}),xa=new ae({props:{anchor:"transformers.FlaxRobertaModel.__call__.example",$$slots:{default:[v5]},$$scope:{ctx:R}}}),dd=new De({}),cd=new O({props:{name:"class transformers.FlaxRobertaForCausalLM",anchor:"transformers.FlaxRobertaForCausalLM",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_flax_roberta.py#L1458"}}),bd=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRobertaForCausalLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRobertaForCausalLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRobertaForCausalLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRobertaForCausalLM.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRobertaForCausalLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key, value
states of the self-attention and the cross-attention layers if model is used in encoder-decoder setting.
Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ea=new me({props:{$$slots:{default:[y5]},$$scope:{ctx:R}}}),Ma=new ae({props:{anchor:"transformers.FlaxRobertaForCausalLM.__call__.example",$$slots:{default:[w5]},$$scope:{ctx:R}}}),kd=new De({}),vd=new O({props:{name:"class transformers.FlaxRobertaForMaskedLM",anchor:"transformers.FlaxRobertaForMaskedLM",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_flax_roberta.py#L1057"}}),Md=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ca=new me({props:{$$slots:{default:[T5]},$$scope:{ctx:R}}}),qa=new ae({props:{anchor:"transformers.FlaxRobertaForMaskedLM.__call__.example",$$slots:{default:[$5]},$$scope:{ctx:R}}}),zd=new De({}),Cd=new O({props:{name:"class transformers.FlaxRobertaForSequenceClassification",anchor:"transformers.FlaxRobertaForSequenceClassification",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_flax_roberta.py#L1130"}}),Id=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Pa=new me({props:{$$slots:{default:[F5]},$$scope:{ctx:R}}}),Aa=new ae({props:{anchor:"transformers.FlaxRobertaForSequenceClassification.__call__.example",$$slots:{default:[x5]},$$scope:{ctx:R}}}),Dd=new De({}),Sd=new O({props:{name:"class transformers.FlaxRobertaForMultipleChoice",anchor:"transformers.FlaxRobertaForMultipleChoice",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_flax_roberta.py#L1212"}}),Vd=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oa=new me({props:{$$slots:{default:[R5]},$$scope:{ctx:R}}}),Na=new ae({props:{anchor:"transformers.FlaxRobertaForMultipleChoice.__call__.example",$$slots:{default:[E5]},$$scope:{ctx:R}}}),Gd=new De({}),Xd=new O({props:{name:"class transformers.FlaxRobertaForTokenClassification",anchor:"transformers.FlaxRobertaForTokenClassification",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_flax_roberta.py#L1295"}}),ac=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Da=new me({props:{$$slots:{default:[M5]},$$scope:{ctx:R}}}),Sa=new ae({props:{anchor:"transformers.FlaxRobertaForTokenClassification.__call__.example",$$slots:{default:[z5]},$$scope:{ctx:R}}}),rc=new De({}),ic=new O({props:{name:"class transformers.FlaxRobertaForQuestionAnswering",anchor:"transformers.FlaxRobertaForQuestionAnswering",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_flax_roberta.py#L1373"}}),mc=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wa=new me({props:{$$slots:{default:[C5]},$$scope:{ctx:R}}}),Ua=new ae({props:{anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__.example",$$slots:{default:[q5]},$$scope:{ctx:R}}}),{c(){d=a("meta"),_=c(),u=a("h1"),m=a("a"),k=a("span"),y(l.$$.fragment),f=c(),E=a("span"),le=o("RoBERTa"),Z=c(),N=a("h2"),te=a("a"),oe=a("span"),y(M.$$.fragment),we=c(),K=a("span"),Te=o("Overview"),ge=c(),B=a("p"),$e=o("The RoBERTa model was proposed in "),pe=a("a"),J=o("RoBERTa: A Robustly Optimized BERT Pretraining Approach"),Fe=o(` by Yinhan Liu, Myle Ott, Naman Goyal, Jingfei Du, Mandar Joshi, Danqi Chen, Omer
Levy, Mike Lewis, Luke Zettlemoyer, Veselin Stoyanov. It is based on Google\u2019s BERT model released in 2018.`),_e=c(),U=a("p"),xe=o(`It builds on BERT and modifies key hyperparameters, removing the next-sentence pretraining objective and training with
much larger mini-batches and learning rates.`),be=c(),H=a("p"),Re=o("The abstract from the paper is the following:"),ke=c(),ee=a("p"),q=a("em"),P=o(`Language model pretraining has led to significant performance gains but careful comparison between different
approaches is challenging. Training is computationally expensive, often done on private datasets of different sizes,
and, as we will show, hyperparameter choices have significant impact on the final results. We present a replication
study of BERT pretraining (Devlin et al., 2019) that carefully measures the impact of many key hyperparameters and
training data size. We find that BERT was significantly undertrained, and can match or exceed the performance of every
model published after it. Our best model achieves state-of-the-art results on GLUE, RACE and SQuAD. These results
highlight the importance of previously overlooked design choices, and raise questions about the source of recently
reported improvements. We release our models and code.`),ve=c(),Q=a("p"),Ee=o("Tips:"),ye=c(),I=a("ul"),he=a("li"),Me=o("This implementation is the same as "),j=a("a"),ze=o("BertModel"),V=o(` with a tiny embeddings tweak as well as a setup
for Roberta pretrained models.`),Ce=c(),ue=a("li"),G=o(`RoBERTa has the same architecture as BERT, but uses a byte-level BPE as a tokenizer (same as GPT-2) and uses a
different pretraining scheme.`),qe=c(),ne=a("li"),D=o("RoBERTa doesn\u2019t have "),fe=a("code"),X=o("token_type_ids"),je=o(`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),se=a("code"),A=o("tokenizer.sep_token"),Pe=o(" (or "),L=a("code"),Ae=o("</s>"),Le=o(")"),v=c(),z=a("li"),Ue=a("a"),de=o("CamemBERT"),Xe=o(" is a wrapper around RoBERTa. Refer to this page for usage examples."),Ke=c(),C=a("p"),Ye=o("This model was contributed by "),Se=a("a"),Ze=o("julien-c"),et=o(". The original code can be found "),Be=a("a"),S=o("here"),Y=o("."),Je=c(),Oe=a("h2"),W=a("a"),He=a("span"),y(We.$$.fragment),Ne=c(),Qe=a("span"),ce=o("Resources"),Ve=c(),zc=a("p"),jb=o("A list of official Hugging Face and community (indicated by \u{1F30E}) resources to help you get started with RoBERTa. If you\u2019re interested in submitting a resource to be included here, please feel free to open a Pull Request and we\u2019ll review it! The resource should ideally demonstrate something new instead of duplicating an existing resource."),Zm=c(),y(ur.$$.fragment),eg=c(),bt=a("ul"),an=a("li"),Pb=o("A blog on "),fr=a("a"),Ab=o("Getting Started with Sentiment Analysis on Twitter"),Lb=o(" using RoBERTa and the "),mr=a("a"),Ob=o("Inference API"),Nb=o("."),Ib=c(),gr=a("li"),Db=o("A blog on "),_r=a("a"),Sb=o("Opinion Classification with Kili and Hugging Face AutoTrain"),Bb=o(" using RoBERTa."),Wb=c(),br=a("li"),Ub=o("A notebook on how to "),kr=a("a"),Hb=o("finetune RoBERTa for sentiment analysis"),Qb=o(". \u{1F30E}"),Kb=c(),Fo=a("li"),Cc=a("a"),Jb=o("RobertaForSequenceClassification"),Vb=o(" is supported by this "),vr=a("a"),Gb=o("example script"),Xb=o(" and "),yr=a("a"),Yb=o("notebook"),Zb=o("."),ek=c(),xo=a("li"),qc=a("a"),tk=o("TFRobertaForSequenceClassification"),ok=o(" is supported by this "),wr=a("a"),nk=o("example script"),sk=o(" and "),Tr=a("a"),ak=o("notebook"),rk=o("."),ik=c(),Ro=a("li"),jc=a("a"),lk=o("FlaxRobertaForSequenceClassification"),dk=o(" is supported by this "),$r=a("a"),ck=o("example script"),pk=o(" and "),Fr=a("a"),hk=o("notebook"),uk=o("."),tg=c(),y(xr.$$.fragment),og=c(),Kt=a("ul"),Eo=a("li"),Pc=a("a"),fk=o("RobertaForTokenClassification"),mk=o(" is supported by this "),Rr=a("a"),gk=o("example script"),_k=o(" and "),Er=a("a"),bk=o("notebook"),kk=o("."),vk=c(),Mo=a("li"),Ac=a("a"),yk=o("TFRobertaForTokenClassification"),wk=o(" is supported by this "),Mr=a("a"),Tk=o("example script"),$k=o(" and "),zr=a("a"),Fk=o("notebook"),xk=o("."),Rk=c(),rs=a("li"),Lc=a("a"),Ek=o("FlaxRobertaForTokenClassification"),Mk=o(" is supported by this "),Cr=a("a"),zk=o("example script"),Ck=o("."),qk=c(),Oc=a("li"),qr=a("a"),jk=o("Token classification"),Pk=o(" chapter of the \u{1F917} Hugging Face Course."),ng=c(),y(jr.$$.fragment),sg=c(),Mt=a("ul"),Pr=a("li"),Ak=o("A blog on "),Ar=a("a"),Lk=o("How to train a new language model from scratch using Transformers and Tokenizers"),Ok=o(" with RoBERTa."),Nk=c(),zo=a("li"),Nc=a("a"),Ik=o("RobertaForMaskedLM"),Dk=o(" is supported by this "),Lr=a("a"),Sk=o("example script"),Bk=o(" and "),Or=a("a"),Wk=o("notebook"),Uk=o("."),Hk=c(),Co=a("li"),Ic=a("a"),Qk=o("TFRobertaForMaskedLM"),Kk=o(" is supported by this "),Nr=a("a"),Jk=o("example script"),Vk=o(" and "),Ir=a("a"),Gk=o("notebook"),Xk=o("."),Yk=c(),qo=a("li"),Dc=a("a"),Zk=o("FlaxRobertaForMaskedLM"),ev=o(" is supported by this "),Dr=a("a"),tv=o("example script"),ov=o(" and "),Sr=a("a"),nv=o("notebook"),sv=o("."),av=c(),Sc=a("li"),Br=a("a"),rv=o("Masked language modeling"),iv=o(" chapter of the \u{1F917} Hugging Face Course."),ag=c(),y(Wr.$$.fragment),rg=c(),zt=a("ul"),Ur=a("li"),lv=o("A blog on "),Hr=a("a"),dv=o("Accelerated Inference with Optimum and Transformers Pipelines"),cv=o(" with RoBERTa for question answering."),pv=c(),jo=a("li"),Bc=a("a"),hv=o("RobertaForQuestionAnswering"),uv=o(" is supported by this "),Qr=a("a"),fv=o("example script"),mv=o(" and "),Kr=a("a"),gv=o("notebook"),_v=o("."),bv=c(),Po=a("li"),Wc=a("a"),kv=o("TFRobertaForQuestionAnswering"),vv=o(" is supported by this "),Jr=a("a"),yv=o("example script"),wv=o(" and "),Vr=a("a"),Tv=o("notebook"),$v=o("."),Fv=c(),is=a("li"),Uc=a("a"),xv=o("FlaxRobertaForQuestionAnswering"),Rv=o(" is supported by this "),Gr=a("a"),Ev=o("example script"),Mv=o("."),zv=c(),Hc=a("li"),Xr=a("a"),Cv=o("Question answering"),qv=o(" chapter of the \u{1F917} Hugging Face Course."),ig=c(),Qc=a("p"),mh=a("strong"),jv=o("Multiple choice"),lg=c(),ls=a("ul"),Ao=a("li"),Kc=a("a"),Pv=o("RobertaForMultipleChoice"),Av=o(" is supported by this "),Yr=a("a"),Lv=o("example script"),Ov=o(" and "),Zr=a("a"),Nv=o("notebook"),Iv=o("."),Dv=c(),Lo=a("li"),Jc=a("a"),Sv=o("TFRobertaForMultipleChoice"),Bv=o(" is supported by this "),ei=a("a"),Wv=o("example script"),Uv=o(" and "),ti=a("a"),Hv=o("notebook"),Qv=o("."),dg=c(),rn=a("h2"),ds=a("a"),gh=a("span"),y(oi.$$.fragment),Kv=c(),_h=a("span"),Jv=o("RobertaConfig"),cg=c(),yt=a("div"),y(ni.$$.fragment),Vv=c(),fo=a("p"),Gv=o("This is the configuration class to store the configuration of a "),Vc=a("a"),Xv=o("RobertaModel"),Yv=o(" or a "),Gc=a("a"),Zv=o("TFRobertaModel"),ey=o(`. It is
used to instantiate a RoBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the RoBERTa
`),si=a("a"),ty=o("roberta-base"),oy=o(" architecture."),ny=c(),ln=a("p"),sy=o("Configuration objects inherit from "),Xc=a("a"),ay=o("PretrainedConfig"),ry=o(` and can be used to control the model outputs. Read the
documentation from `),Yc=a("a"),iy=o("PretrainedConfig"),ly=o(" for more information."),dy=c(),dn=a("p"),cy=o("The "),Zc=a("a"),py=o("RobertaConfig"),hy=o(" class directly inherits "),ep=a("a"),uy=o("BertConfig"),fy=o(`. It reuses the same defaults. Please check the parent
class for more information.`),my=c(),y(cs.$$.fragment),pg=c(),cn=a("h2"),ps=a("a"),bh=a("span"),y(ai.$$.fragment),gy=c(),kh=a("span"),_y=o("RobertaTokenizer"),hg=c(),Ie=a("div"),y(ri.$$.fragment),by=c(),vh=a("p"),ky=o("Constructs a RoBERTa tokenizer, derived from the GPT-2 tokenizer, using byte-level Byte-Pair-Encoding."),vy=c(),yh=a("p"),yy=o("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),wy=c(),y(hs.$$.fragment),Ty=c(),ii=a("p"),$y=o("You can get around that behavior by passing "),wh=a("code"),Fy=o("add_prefix_space=True"),xy=o(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Ry=c(),y(us.$$.fragment),Ey=c(),li=a("p"),My=o("This tokenizer inherits from "),tp=a("a"),zy=o("PreTrainedTokenizer"),Cy=o(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),qy=c(),Oo=a("div"),y(di.$$.fragment),jy=c(),Th=a("p"),Py=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoBERTa sequence has the following format:`),Ay=c(),ci=a("ul"),op=a("li"),Ly=o("single sequence: "),$h=a("code"),Oy=o("<s> X </s>"),Ny=c(),np=a("li"),Iy=o("pair of sequences: "),Fh=a("code"),Dy=o("<s> A </s></s> B </s>"),Sy=c(),fs=a("div"),y(pi.$$.fragment),By=c(),hi=a("p"),Wy=o(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),xh=a("code"),Uy=o("prepare_for_model"),Hy=o(" method."),Qy=c(),ms=a("div"),y(ui.$$.fragment),Ky=c(),Rh=a("p"),Jy=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. RoBERTa does not
make use of token type ids, therefore a list of zeros is returned.`),Vy=c(),sp=a("div"),y(fi.$$.fragment),ug=c(),pn=a("h2"),gs=a("a"),Eh=a("span"),y(mi.$$.fragment),Gy=c(),Mh=a("span"),Xy=o("RobertaTokenizerFast"),fg=c(),tt=a("div"),y(gi.$$.fragment),Yy=c(),_i=a("p"),Zy=o("Construct a \u201Cfast\u201D RoBERTa tokenizer (backed by HuggingFace\u2019s "),zh=a("em"),ew=o("tokenizers"),tw=o(` library), derived from the GPT-2
tokenizer, using byte-level Byte-Pair-Encoding.`),ow=c(),Ch=a("p"),nw=o("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),sw=c(),y(_s.$$.fragment),aw=c(),bi=a("p"),rw=o("You can get around that behavior by passing "),qh=a("code"),iw=o("add_prefix_space=True"),lw=o(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),dw=c(),y(bs.$$.fragment),cw=c(),ki=a("p"),pw=o("This tokenizer inherits from "),ap=a("a"),hw=o("PreTrainedTokenizerFast"),uw=o(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),fw=c(),rp=a("div"),y(vi.$$.fragment),mg=c(),hn=a("h2"),ks=a("a"),jh=a("span"),y(yi.$$.fragment),mw=c(),Ph=a("span"),gw=o("RobertaModel"),gg=c(),ot=a("div"),y(wi.$$.fragment),_w=c(),Ah=a("p"),bw=o("The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),kw=c(),Ti=a("p"),vw=o("This model inherits from "),ip=a("a"),yw=o("PreTrainedModel"),ww=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tw=c(),$i=a("p"),$w=o("This model is also a PyTorch "),Fi=a("a"),Fw=o("torch.nn.Module"),xw=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rw=c(),xi=a("p"),Ew=o(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Lh=a("em"),Mw=o(`Attention is
all you need`),zw=o(`_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`),Cw=c(),pt=a("p"),qw=o("To behave as an decoder the model needs to be initialized with the "),Oh=a("code"),jw=o("is_decoder"),Pw=o(` argument of the configuration set
to `),Nh=a("code"),Aw=o("True"),Lw=o(". To be used in a Seq2Seq model, the model needs to initialized with both "),Ih=a("code"),Ow=o("is_decoder"),Nw=o(` argument and
`),Dh=a("code"),Iw=o("add_cross_attention"),Dw=o(" set to "),Sh=a("code"),Sw=o("True"),Bw=o("; an "),Bh=a("code"),Ww=o("encoder_hidden_states"),Uw=o(" is then expected as an input to the forward pass."),Hw=c(),vs=a("p"),Qw=o(".. _"),Wh=a("em"),Kw=o("Attention is all you need"),Jw=o(": "),Ri=a("a"),Vw=o("https://arxiv.org/abs/1706.03762"),Gw=c(),Jt=a("div"),y(Ei.$$.fragment),Xw=c(),un=a("p"),Yw=o("The "),lp=a("a"),Zw=o("RobertaModel"),eT=o(" forward method, overrides the "),Uh=a("code"),tT=o("__call__"),oT=o(" special method."),nT=c(),y(ys.$$.fragment),sT=c(),y(ws.$$.fragment),_g=c(),fn=a("h2"),Ts=a("a"),Hh=a("span"),y(Mi.$$.fragment),aT=c(),Qh=a("span"),rT=o("RobertaForCausalLM"),bg=c(),wt=a("div"),y(zi.$$.fragment),iT=c(),Ci=a("p"),lT=o("RoBERTa Model with a "),Kh=a("code"),dT=o("language modeling"),cT=o(" head on top for CLM fine-tuning."),pT=c(),qi=a("p"),hT=o("This model inherits from "),dp=a("a"),uT=o("PreTrainedModel"),fT=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mT=c(),ji=a("p"),gT=o("This model is also a PyTorch "),Pi=a("a"),_T=o("torch.nn.Module"),bT=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kT=c(),Vt=a("div"),y(Ai.$$.fragment),vT=c(),mn=a("p"),yT=o("The "),cp=a("a"),wT=o("RobertaForCausalLM"),TT=o(" forward method, overrides the "),Jh=a("code"),$T=o("__call__"),FT=o(" special method."),xT=c(),y($s.$$.fragment),RT=c(),y(Fs.$$.fragment),kg=c(),gn=a("h2"),xs=a("a"),Vh=a("span"),y(Li.$$.fragment),ET=c(),Gh=a("span"),MT=o("RobertaForMaskedLM"),vg=c(),Tt=a("div"),y(Oi.$$.fragment),zT=c(),Ni=a("p"),CT=o("RoBERTa Model with a "),Xh=a("code"),qT=o("language modeling"),jT=o(" head on top."),PT=c(),Ii=a("p"),AT=o("This model inherits from "),pp=a("a"),LT=o("PreTrainedModel"),OT=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),NT=c(),Di=a("p"),IT=o("This model is also a PyTorch "),Si=a("a"),DT=o("torch.nn.Module"),ST=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),BT=c(),Ct=a("div"),y(Bi.$$.fragment),WT=c(),_n=a("p"),UT=o("The "),hp=a("a"),HT=o("RobertaForMaskedLM"),QT=o(" forward method, overrides the "),Yh=a("code"),KT=o("__call__"),JT=o(" special method."),VT=c(),y(Rs.$$.fragment),GT=c(),y(Es.$$.fragment),XT=c(),y(Ms.$$.fragment),yg=c(),bn=a("h2"),zs=a("a"),Zh=a("span"),y(Wi.$$.fragment),YT=c(),eu=a("span"),ZT=o("RobertaForSequenceClassification"),wg=c(),$t=a("div"),y(Ui.$$.fragment),e$=c(),tu=a("p"),t$=o(`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),o$=c(),Hi=a("p"),n$=o("This model inherits from "),up=a("a"),s$=o("PreTrainedModel"),a$=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),r$=c(),Qi=a("p"),i$=o("This model is also a PyTorch "),Ki=a("a"),l$=o("torch.nn.Module"),d$=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),c$=c(),ct=a("div"),y(Ji.$$.fragment),p$=c(),kn=a("p"),h$=o("The "),fp=a("a"),u$=o("RobertaForSequenceClassification"),f$=o(" forward method, overrides the "),ou=a("code"),m$=o("__call__"),g$=o(" special method."),_$=c(),y(Cs.$$.fragment),b$=c(),y(qs.$$.fragment),k$=c(),y(js.$$.fragment),v$=c(),y(Ps.$$.fragment),y$=c(),y(As.$$.fragment),Tg=c(),vn=a("h2"),Ls=a("a"),nu=a("span"),y(Vi.$$.fragment),w$=c(),su=a("span"),T$=o("RobertaForMultipleChoice"),$g=c(),Ft=a("div"),y(Gi.$$.fragment),$$=c(),au=a("p"),F$=o(`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),x$=c(),Xi=a("p"),R$=o("This model inherits from "),mp=a("a"),E$=o("PreTrainedModel"),M$=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),z$=c(),Yi=a("p"),C$=o("This model is also a PyTorch "),Zi=a("a"),q$=o("torch.nn.Module"),j$=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),P$=c(),Gt=a("div"),y(el.$$.fragment),A$=c(),yn=a("p"),L$=o("The "),gp=a("a"),O$=o("RobertaForMultipleChoice"),N$=o(" forward method, overrides the "),ru=a("code"),I$=o("__call__"),D$=o(" special method."),S$=c(),y(Os.$$.fragment),B$=c(),y(Ns.$$.fragment),Fg=c(),wn=a("h2"),Is=a("a"),iu=a("span"),y(tl.$$.fragment),W$=c(),lu=a("span"),U$=o("RobertaForTokenClassification"),xg=c(),xt=a("div"),y(ol.$$.fragment),H$=c(),du=a("p"),Q$=o(`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),K$=c(),nl=a("p"),J$=o("This model inherits from "),_p=a("a"),V$=o("PreTrainedModel"),G$=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),X$=c(),sl=a("p"),Y$=o("This model is also a PyTorch "),al=a("a"),Z$=o("torch.nn.Module"),e2=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),t2=c(),qt=a("div"),y(rl.$$.fragment),o2=c(),Tn=a("p"),n2=o("The "),bp=a("a"),s2=o("RobertaForTokenClassification"),a2=o(" forward method, overrides the "),cu=a("code"),r2=o("__call__"),i2=o(" special method."),l2=c(),y(Ds.$$.fragment),d2=c(),y(Ss.$$.fragment),c2=c(),y(Bs.$$.fragment),Rg=c(),$n=a("h2"),Ws=a("a"),pu=a("span"),y(il.$$.fragment),p2=c(),hu=a("span"),h2=o("RobertaForQuestionAnswering"),Eg=c(),Rt=a("div"),y(ll.$$.fragment),u2=c(),Fn=a("p"),f2=o(`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),uu=a("code"),m2=o("span start logits"),g2=o(" and "),fu=a("code"),_2=o("span end logits"),b2=o(")."),k2=c(),dl=a("p"),v2=o("This model inherits from "),kp=a("a"),y2=o("PreTrainedModel"),w2=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),T2=c(),cl=a("p"),$2=o("This model is also a PyTorch "),pl=a("a"),F2=o("torch.nn.Module"),x2=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),R2=c(),jt=a("div"),y(hl.$$.fragment),E2=c(),xn=a("p"),M2=o("The "),vp=a("a"),z2=o("RobertaForQuestionAnswering"),C2=o(" forward method, overrides the "),mu=a("code"),q2=o("__call__"),j2=o(" special method."),P2=c(),y(Us.$$.fragment),A2=c(),y(Hs.$$.fragment),L2=c(),y(Qs.$$.fragment),Mg=c(),Rn=a("h2"),Ks=a("a"),gu=a("span"),y(ul.$$.fragment),O2=c(),_u=a("span"),N2=o("TFRobertaModel"),zg=c(),ht=a("div"),y(fl.$$.fragment),I2=c(),bu=a("p"),D2=o("The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),S2=c(),ml=a("p"),B2=o("This model inherits from "),yp=a("a"),W2=o("TFPreTrainedModel"),U2=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),H2=c(),gl=a("p"),Q2=o("This model is also a "),_l=a("a"),K2=o("tf.keras.Model"),J2=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),V2=c(),y(Js.$$.fragment),G2=c(),Xt=a("div"),y(bl.$$.fragment),X2=c(),En=a("p"),Y2=o("The "),wp=a("a"),Z2=o("TFRobertaModel"),e1=o(" forward method, overrides the "),ku=a("code"),t1=o("__call__"),o1=o(" special method."),n1=c(),y(Vs.$$.fragment),s1=c(),y(Gs.$$.fragment),Cg=c(),Mn=a("h2"),Xs=a("a"),vu=a("span"),y(kl.$$.fragment),a1=c(),yu=a("span"),r1=o("TFRobertaForCausalLM"),qg=c(),zn=a("div"),y(vl.$$.fragment),i1=c(),Yt=a("div"),y(yl.$$.fragment),l1=c(),Cn=a("p"),d1=o("The "),Tp=a("a"),c1=o("TFRobertaForCausalLM"),p1=o(" forward method, overrides the "),wu=a("code"),h1=o("__call__"),u1=o(" special method."),f1=c(),y(Ys.$$.fragment),m1=c(),y(Zs.$$.fragment),jg=c(),qn=a("h2"),ea=a("a"),Tu=a("span"),y(wl.$$.fragment),g1=c(),$u=a("span"),_1=o("TFRobertaForMaskedLM"),Pg=c(),ut=a("div"),y(Tl.$$.fragment),b1=c(),$l=a("p"),k1=o("RoBERTa Model with a "),Fu=a("code"),v1=o("language modeling"),y1=o(" head on top."),w1=c(),Fl=a("p"),T1=o("This model inherits from "),$p=a("a"),$1=o("TFPreTrainedModel"),F1=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),x1=c(),xl=a("p"),R1=o("This model is also a "),Rl=a("a"),E1=o("tf.keras.Model"),M1=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),z1=c(),y(ta.$$.fragment),C1=c(),Pt=a("div"),y(El.$$.fragment),q1=c(),jn=a("p"),j1=o("The "),Fp=a("a"),P1=o("TFRobertaForMaskedLM"),A1=o(" forward method, overrides the "),xu=a("code"),L1=o("__call__"),O1=o(" special method."),N1=c(),y(oa.$$.fragment),I1=c(),y(na.$$.fragment),D1=c(),y(sa.$$.fragment),Ag=c(),Pn=a("h2"),aa=a("a"),Ru=a("span"),y(Ml.$$.fragment),S1=c(),Eu=a("span"),B1=o("TFRobertaForSequenceClassification"),Lg=c(),ft=a("div"),y(zl.$$.fragment),W1=c(),Mu=a("p"),U1=o(`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),H1=c(),Cl=a("p"),Q1=o("This model inherits from "),xp=a("a"),K1=o("TFPreTrainedModel"),J1=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),V1=c(),ql=a("p"),G1=o("This model is also a "),jl=a("a"),X1=o("tf.keras.Model"),Y1=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Z1=c(),y(ra.$$.fragment),e0=c(),At=a("div"),y(Pl.$$.fragment),t0=c(),An=a("p"),o0=o("The "),Rp=a("a"),n0=o("TFRobertaForSequenceClassification"),s0=o(" forward method, overrides the "),zu=a("code"),a0=o("__call__"),r0=o(" special method."),i0=c(),y(ia.$$.fragment),l0=c(),y(la.$$.fragment),d0=c(),y(da.$$.fragment),Og=c(),Ln=a("h2"),ca=a("a"),Cu=a("span"),y(Al.$$.fragment),c0=c(),qu=a("span"),p0=o("TFRobertaForMultipleChoice"),Ng=c(),mt=a("div"),y(Ll.$$.fragment),h0=c(),ju=a("p"),u0=o(`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),f0=c(),Ol=a("p"),m0=o("This model inherits from "),Ep=a("a"),g0=o("TFPreTrainedModel"),_0=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),b0=c(),Nl=a("p"),k0=o("This model is also a "),Il=a("a"),v0=o("tf.keras.Model"),y0=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),w0=c(),y(pa.$$.fragment),T0=c(),Zt=a("div"),y(Dl.$$.fragment),$0=c(),On=a("p"),F0=o("The "),Mp=a("a"),x0=o("TFRobertaForMultipleChoice"),R0=o(" forward method, overrides the "),Pu=a("code"),E0=o("__call__"),M0=o(" special method."),z0=c(),y(ha.$$.fragment),C0=c(),y(ua.$$.fragment),Ig=c(),Nn=a("h2"),fa=a("a"),Au=a("span"),y(Sl.$$.fragment),q0=c(),Lu=a("span"),j0=o("TFRobertaForTokenClassification"),Dg=c(),gt=a("div"),y(Bl.$$.fragment),P0=c(),Ou=a("p"),A0=o(`RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),L0=c(),Wl=a("p"),O0=o("This model inherits from "),zp=a("a"),N0=o("TFPreTrainedModel"),I0=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),D0=c(),Ul=a("p"),S0=o("This model is also a "),Hl=a("a"),B0=o("tf.keras.Model"),W0=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),U0=c(),y(ma.$$.fragment),H0=c(),Lt=a("div"),y(Ql.$$.fragment),Q0=c(),In=a("p"),K0=o("The "),Cp=a("a"),J0=o("TFRobertaForTokenClassification"),V0=o(" forward method, overrides the "),Nu=a("code"),G0=o("__call__"),X0=o(" special method."),Y0=c(),y(ga.$$.fragment),Z0=c(),y(_a.$$.fragment),e4=c(),y(ba.$$.fragment),Sg=c(),Dn=a("h2"),ka=a("a"),Iu=a("span"),y(Kl.$$.fragment),t4=c(),Du=a("span"),o4=o("TFRobertaForQuestionAnswering"),Bg=c(),_t=a("div"),y(Jl.$$.fragment),n4=c(),Sn=a("p"),s4=o(`RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Su=a("code"),a4=o("span start logits"),r4=o(" and "),Bu=a("code"),i4=o("span end logits"),l4=o(")."),d4=c(),Vl=a("p"),c4=o("This model inherits from "),qp=a("a"),p4=o("TFPreTrainedModel"),h4=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),u4=c(),Gl=a("p"),f4=o("This model is also a "),Xl=a("a"),m4=o("tf.keras.Model"),g4=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_4=c(),y(va.$$.fragment),b4=c(),Ot=a("div"),y(Yl.$$.fragment),k4=c(),Bn=a("p"),v4=o("The "),jp=a("a"),y4=o("TFRobertaForQuestionAnswering"),w4=o(" forward method, overrides the "),Wu=a("code"),T4=o("__call__"),$4=o(" special method."),F4=c(),y(ya.$$.fragment),x4=c(),y(wa.$$.fragment),R4=c(),y(Ta.$$.fragment),Wg=c(),Wn=a("h2"),$a=a("a"),Uu=a("span"),y(Zl.$$.fragment),E4=c(),Hu=a("span"),M4=o("FlaxRobertaModel"),Ug=c(),nt=a("div"),y(ed.$$.fragment),z4=c(),Qu=a("p"),C4=o("The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),q4=c(),td=a("p"),j4=o("This model inherits from "),Pp=a("a"),P4=o("FlaxPreTrainedModel"),A4=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),L4=c(),od=a("p"),O4=o("This model is also a Flax Linen "),nd=a("a"),N4=o("flax.linen.Module"),I4=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),D4=c(),Ku=a("p"),S4=o("Finally, this model supports inherent JAX features such as:"),B4=c(),mo=a("ul"),Ju=a("li"),sd=a("a"),W4=o("Just-In-Time (JIT) compilation"),U4=c(),Vu=a("li"),ad=a("a"),H4=o("Automatic Differentiation"),Q4=c(),Gu=a("li"),rd=a("a"),K4=o("Vectorization"),J4=c(),Xu=a("li"),id=a("a"),V4=o("Parallelization"),G4=c(),eo=a("div"),y(ld.$$.fragment),X4=c(),Un=a("p"),Y4=o("The "),Yu=a("code"),Z4=o("FlaxRobertaPreTrainedModel"),eF=o(" forward method, overrides the "),Zu=a("code"),tF=o("__call__"),oF=o(" special method."),nF=c(),y(Fa.$$.fragment),sF=c(),y(xa.$$.fragment),Hg=c(),Hn=a("h2"),Ra=a("a"),ef=a("span"),y(dd.$$.fragment),aF=c(),tf=a("span"),rF=o("FlaxRobertaForCausalLM"),Qg=c(),st=a("div"),y(cd.$$.fragment),iF=c(),of=a("p"),lF=o(`Roberta Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),dF=c(),pd=a("p"),cF=o("This model inherits from "),Ap=a("a"),pF=o("FlaxPreTrainedModel"),hF=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),uF=c(),hd=a("p"),fF=o("This model is also a Flax Linen "),ud=a("a"),mF=o("flax.linen.Module"),gF=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),_F=c(),nf=a("p"),bF=o("Finally, this model supports inherent JAX features such as:"),kF=c(),go=a("ul"),sf=a("li"),fd=a("a"),vF=o("Just-In-Time (JIT) compilation"),yF=c(),af=a("li"),md=a("a"),wF=o("Automatic Differentiation"),TF=c(),rf=a("li"),gd=a("a"),$F=o("Vectorization"),FF=c(),lf=a("li"),_d=a("a"),xF=o("Parallelization"),RF=c(),to=a("div"),y(bd.$$.fragment),EF=c(),Qn=a("p"),MF=o("The "),df=a("code"),zF=o("FlaxRobertaPreTrainedModel"),CF=o(" forward method, overrides the "),cf=a("code"),qF=o("__call__"),jF=o(" special method."),PF=c(),y(Ea.$$.fragment),AF=c(),y(Ma.$$.fragment),Kg=c(),Kn=a("h2"),za=a("a"),pf=a("span"),y(kd.$$.fragment),LF=c(),hf=a("span"),OF=o("FlaxRobertaForMaskedLM"),Jg=c(),at=a("div"),y(vd.$$.fragment),NF=c(),yd=a("p"),IF=o("RoBERTa Model with a "),uf=a("code"),DF=o("language modeling"),SF=o(" head on top."),BF=c(),wd=a("p"),WF=o("This model inherits from "),Lp=a("a"),UF=o("FlaxPreTrainedModel"),HF=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),QF=c(),Td=a("p"),KF=o("This model is also a Flax Linen "),$d=a("a"),JF=o("flax.linen.Module"),VF=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),GF=c(),ff=a("p"),XF=o("Finally, this model supports inherent JAX features such as:"),YF=c(),_o=a("ul"),mf=a("li"),Fd=a("a"),ZF=o("Just-In-Time (JIT) compilation"),ex=c(),gf=a("li"),xd=a("a"),tx=o("Automatic Differentiation"),ox=c(),_f=a("li"),Rd=a("a"),nx=o("Vectorization"),sx=c(),bf=a("li"),Ed=a("a"),ax=o("Parallelization"),rx=c(),oo=a("div"),y(Md.$$.fragment),ix=c(),Jn=a("p"),lx=o("The "),kf=a("code"),dx=o("FlaxRobertaPreTrainedModel"),cx=o(" forward method, overrides the "),vf=a("code"),px=o("__call__"),hx=o(" special method."),ux=c(),y(Ca.$$.fragment),fx=c(),y(qa.$$.fragment),Vg=c(),Vn=a("h2"),ja=a("a"),yf=a("span"),y(zd.$$.fragment),mx=c(),wf=a("span"),gx=o("FlaxRobertaForSequenceClassification"),Gg=c(),rt=a("div"),y(Cd.$$.fragment),_x=c(),Tf=a("p"),bx=o(`Roberta Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),kx=c(),qd=a("p"),vx=o("This model inherits from "),Op=a("a"),yx=o("FlaxPreTrainedModel"),wx=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Tx=c(),jd=a("p"),$x=o("This model is also a Flax Linen "),Pd=a("a"),Fx=o("flax.linen.Module"),xx=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Rx=c(),$f=a("p"),Ex=o("Finally, this model supports inherent JAX features such as:"),Mx=c(),bo=a("ul"),Ff=a("li"),Ad=a("a"),zx=o("Just-In-Time (JIT) compilation"),Cx=c(),xf=a("li"),Ld=a("a"),qx=o("Automatic Differentiation"),jx=c(),Rf=a("li"),Od=a("a"),Px=o("Vectorization"),Ax=c(),Ef=a("li"),Nd=a("a"),Lx=o("Parallelization"),Ox=c(),no=a("div"),y(Id.$$.fragment),Nx=c(),Gn=a("p"),Ix=o("The "),Mf=a("code"),Dx=o("FlaxRobertaPreTrainedModel"),Sx=o(" forward method, overrides the "),zf=a("code"),Bx=o("__call__"),Wx=o(" special method."),Ux=c(),y(Pa.$$.fragment),Hx=c(),y(Aa.$$.fragment),Xg=c(),Xn=a("h2"),La=a("a"),Cf=a("span"),y(Dd.$$.fragment),Qx=c(),qf=a("span"),Kx=o("FlaxRobertaForMultipleChoice"),Yg=c(),it=a("div"),y(Sd.$$.fragment),Jx=c(),jf=a("p"),Vx=o(`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Gx=c(),Bd=a("p"),Xx=o("This model inherits from "),Np=a("a"),Yx=o("FlaxPreTrainedModel"),Zx=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),eR=c(),Wd=a("p"),tR=o("This model is also a Flax Linen "),Ud=a("a"),oR=o("flax.linen.Module"),nR=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),sR=c(),Pf=a("p"),aR=o("Finally, this model supports inherent JAX features such as:"),rR=c(),ko=a("ul"),Af=a("li"),Hd=a("a"),iR=o("Just-In-Time (JIT) compilation"),lR=c(),Lf=a("li"),Qd=a("a"),dR=o("Automatic Differentiation"),cR=c(),Of=a("li"),Kd=a("a"),pR=o("Vectorization"),hR=c(),Nf=a("li"),Jd=a("a"),uR=o("Parallelization"),fR=c(),so=a("div"),y(Vd.$$.fragment),mR=c(),Yn=a("p"),gR=o("The "),If=a("code"),_R=o("FlaxRobertaPreTrainedModel"),bR=o(" forward method, overrides the "),Df=a("code"),kR=o("__call__"),vR=o(" special method."),yR=c(),y(Oa.$$.fragment),wR=c(),y(Na.$$.fragment),Zg=c(),Zn=a("h2"),Ia=a("a"),Sf=a("span"),y(Gd.$$.fragment),TR=c(),Bf=a("span"),$R=o("FlaxRobertaForTokenClassification"),e_=c(),lt=a("div"),y(Xd.$$.fragment),FR=c(),Wf=a("p"),xR=o(`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),RR=c(),Yd=a("p"),ER=o("This model inherits from "),Ip=a("a"),MR=o("FlaxPreTrainedModel"),zR=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),CR=c(),Zd=a("p"),qR=o("This model is also a Flax Linen "),ec=a("a"),jR=o("flax.linen.Module"),PR=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),AR=c(),Uf=a("p"),LR=o("Finally, this model supports inherent JAX features such as:"),OR=c(),vo=a("ul"),Hf=a("li"),tc=a("a"),NR=o("Just-In-Time (JIT) compilation"),IR=c(),Qf=a("li"),oc=a("a"),DR=o("Automatic Differentiation"),SR=c(),Kf=a("li"),nc=a("a"),BR=o("Vectorization"),WR=c(),Jf=a("li"),sc=a("a"),UR=o("Parallelization"),HR=c(),ao=a("div"),y(ac.$$.fragment),QR=c(),es=a("p"),KR=o("The "),Vf=a("code"),JR=o("FlaxRobertaPreTrainedModel"),VR=o(" forward method, overrides the "),Gf=a("code"),GR=o("__call__"),XR=o(" special method."),YR=c(),y(Da.$$.fragment),ZR=c(),y(Sa.$$.fragment),t_=c(),ts=a("h2"),Ba=a("a"),Xf=a("span"),y(rc.$$.fragment),eE=c(),Yf=a("span"),tE=o("FlaxRobertaForQuestionAnswering"),o_=c(),dt=a("div"),y(ic.$$.fragment),oE=c(),os=a("p"),nE=o(`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Zf=a("code"),sE=o("span start logits"),aE=o(" and "),em=a("code"),rE=o("span end logits"),iE=o(")."),lE=c(),lc=a("p"),dE=o("This model inherits from "),Dp=a("a"),cE=o("FlaxPreTrainedModel"),pE=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),hE=c(),dc=a("p"),uE=o("This model is also a Flax Linen "),cc=a("a"),fE=o("flax.linen.Module"),mE=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),gE=c(),tm=a("p"),_E=o("Finally, this model supports inherent JAX features such as:"),bE=c(),yo=a("ul"),om=a("li"),pc=a("a"),kE=o("Just-In-Time (JIT) compilation"),vE=c(),nm=a("li"),hc=a("a"),yE=o("Automatic Differentiation"),wE=c(),sm=a("li"),uc=a("a"),TE=o("Vectorization"),$E=c(),am=a("li"),fc=a("a"),FE=o("Parallelization"),xE=c(),ro=a("div"),y(mc.$$.fragment),RE=c(),ns=a("p"),EE=o("The "),rm=a("code"),ME=o("FlaxRobertaPreTrainedModel"),zE=o(" forward method, overrides the "),im=a("code"),CE=o("__call__"),qE=o(" special method."),jE=c(),y(Wa.$$.fragment),PE=c(),y(Ua.$$.fragment),this.h()},l(s){const g=w3('[data-svelte="svelte-1phssyn"]',document.head);d=r(g,"META",{name:!0,content:!0}),g.forEach(t),_=p(s),u=r(s,"H1",{class:!0});var gc=i(u);m=r(gc,"A",{id:!0,class:!0,href:!0});var lm=i(m);k=r(lm,"SPAN",{});var dm=i(k);w(l.$$.fragment,dm),dm.forEach(t),lm.forEach(t),f=p(gc),E=r(gc,"SPAN",{});var cm=i(E);le=n(cm,"RoBERTa"),cm.forEach(t),gc.forEach(t),Z=p(s),N=r(s,"H2",{class:!0});var _c=i(N);te=r(_c,"A",{id:!0,class:!0,href:!0});var pm=i(te);oe=r(pm,"SPAN",{});var hm=i(oe);w(M.$$.fragment,hm),hm.forEach(t),pm.forEach(t),we=p(_c),K=r(_c,"SPAN",{});var um=i(K);Te=n(um,"Overview"),um.forEach(t),_c.forEach(t),ge=p(s),B=r(s,"P",{});var bc=i(B);$e=n(bc,"The RoBERTa model was proposed in "),pe=r(bc,"A",{href:!0,rel:!0});var fm=i(pe);J=n(fm,"RoBERTa: A Robustly Optimized BERT Pretraining Approach"),fm.forEach(t),Fe=n(bc,` by Yinhan Liu, Myle Ott, Naman Goyal, Jingfei Du, Mandar Joshi, Danqi Chen, Omer
Levy, Mike Lewis, Luke Zettlemoyer, Veselin Stoyanov. It is based on Google\u2019s BERT model released in 2018.`),bc.forEach(t),_e=p(s),U=r(s,"P",{});var mm=i(U);xe=n(mm,`It builds on BERT and modifies key hyperparameters, removing the next-sentence pretraining objective and training with
much larger mini-batches and learning rates.`),mm.forEach(t),be=p(s),H=r(s,"P",{});var gm=i(H);Re=n(gm,"The abstract from the paper is the following:"),gm.forEach(t),ke=p(s),ee=r(s,"P",{});var _m=i(ee);q=r(_m,"EM",{});var bm=i(q);P=n(bm,`Language model pretraining has led to significant performance gains but careful comparison between different
approaches is challenging. Training is computationally expensive, often done on private datasets of different sizes,
and, as we will show, hyperparameter choices have significant impact on the final results. We present a replication
study of BERT pretraining (Devlin et al., 2019) that carefully measures the impact of many key hyperparameters and
training data size. We find that BERT was significantly undertrained, and can match or exceed the performance of every
model published after it. Our best model achieves state-of-the-art results on GLUE, RACE and SQuAD. These results
highlight the importance of previously overlooked design choices, and raise questions about the source of recently
reported improvements. We release our models and code.`),bm.forEach(t),_m.forEach(t),ve=p(s),Q=r(s,"P",{});var km=i(Q);Ee=n(km,"Tips:"),km.forEach(t),ye=p(s),I=r(s,"UL",{});var wo=i(I);he=r(wo,"LI",{});var kc=i(he);Me=n(kc,"This implementation is the same as "),j=r(kc,"A",{href:!0});var vm=i(j);ze=n(vm,"BertModel"),vm.forEach(t),V=n(kc,` with a tiny embeddings tweak as well as a setup
for Roberta pretrained models.`),kc.forEach(t),Ce=p(wo),ue=r(wo,"LI",{});var ym=i(ue);G=n(ym,`RoBERTa has the same architecture as BERT, but uses a byte-level BPE as a tokenizer (same as GPT-2) and uses a
different pretraining scheme.`),ym.forEach(t),qe=p(wo),ne=r(wo,"LI",{});var To=i(ne);D=n(To,"RoBERTa doesn\u2019t have "),fe=r(To,"CODE",{});var wm=i(fe);X=n(wm,"token_type_ids"),wm.forEach(t),je=n(To,`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),se=r(To,"CODE",{});var Tm=i(se);A=n(Tm,"tokenizer.sep_token"),Tm.forEach(t),Pe=n(To," (or "),L=r(To,"CODE",{});var $m=i(L);Ae=n($m,"</s>"),$m.forEach(t),Le=n(To,")"),To.forEach(t),v=p(wo),z=r(wo,"LI",{});var Sp=i(z);Ue=r(Sp,"A",{href:!0});var Fm=i(Ue);de=n(Fm,"CamemBERT"),Fm.forEach(t),Xe=n(Sp," is a wrapper around RoBERTa. Refer to this page for usage examples."),Sp.forEach(t),wo.forEach(t),Ke=p(s),C=r(s,"P",{});var ss=i(C);Ye=n(ss,"This model was contributed by "),Se=r(ss,"A",{href:!0,rel:!0});var xm=i(Se);Ze=n(xm,"julien-c"),xm.forEach(t),et=n(ss,". The original code can be found "),Be=r(ss,"A",{href:!0,rel:!0});var Rm=i(Be);S=n(Rm,"here"),Rm.forEach(t),Y=n(ss,"."),ss.forEach(t),Je=p(s),Oe=r(s,"H2",{class:!0});var vc=i(Oe);W=r(vc,"A",{id:!0,class:!0,href:!0});var Em=i(W);He=r(Em,"SPAN",{});var Mm=i(He);w(We.$$.fragment,Mm),Mm.forEach(t),Em.forEach(t),Ne=p(vc),Qe=r(vc,"SPAN",{});var zm=i(Qe);ce=n(zm,"Resources"),zm.forEach(t),vc.forEach(t),Ve=p(s),zc=r(s,"P",{});var Cm=i(zc);jb=n(Cm,"A list of official Hugging Face and community (indicated by \u{1F30E}) resources to help you get started with RoBERTa. If you\u2019re interested in submitting a resource to be included here, please feel free to open a Pull Request and we\u2019ll review it! The resource should ideally demonstrate something new instead of duplicating an existing resource."),Cm.forEach(t),Zm=p(s),w(ur.$$.fragment,s),eg=p(s),bt=r(s,"UL",{});var Et=i(bt);an=r(Et,"LI",{});var as=i(an);Pb=n(as,"A blog on "),fr=r(as,"A",{href:!0,rel:!0});var qm=i(fr);Ab=n(qm,"Getting Started with Sentiment Analysis on Twitter"),qm.forEach(t),Lb=n(as," using RoBERTa and the "),mr=r(as,"A",{href:!0,rel:!0});var jm=i(mr);Ob=n(jm,"Inference API"),jm.forEach(t),Nb=n(as,"."),as.forEach(t),Ib=p(Et),gr=r(Et,"LI",{});var yc=i(gr);Db=n(yc,"A blog on "),_r=r(yc,"A",{href:!0,rel:!0});var Pm=i(_r);Sb=n(Pm,"Opinion Classification with Kili and Hugging Face AutoTrain"),Pm.forEach(t),Bb=n(yc," using RoBERTa."),yc.forEach(t),Wb=p(Et),br=r(Et,"LI",{});var wc=i(br);Ub=n(wc,"A notebook on how to "),kr=r(wc,"A",{href:!0,rel:!0});var Am=i(kr);Hb=n(Am,"finetune RoBERTa for sentiment analysis"),Am.forEach(t),Qb=n(wc,". \u{1F30E}"),wc.forEach(t),Kb=p(Et),Fo=r(Et,"LI",{});var No=i(Fo);Cc=r(No,"A",{href:!0});var Lm=i(Cc);Jb=n(Lm,"RobertaForSequenceClassification"),Lm.forEach(t),Vb=n(No," is supported by this "),vr=r(No,"A",{href:!0,rel:!0});var Om=i(vr);Gb=n(Om,"example script"),Om.forEach(t),Xb=n(No," and "),yr=r(No,"A",{href:!0,rel:!0});var Nm=i(yr);Yb=n(Nm,"notebook"),Nm.forEach(t),Zb=n(No,"."),No.forEach(t),ek=p(Et),xo=r(Et,"LI",{});var Io=i(xo);qc=r(Io,"A",{href:!0});var Im=i(qc);tk=n(Im,"TFRobertaForSequenceClassification"),Im.forEach(t),ok=n(Io," is supported by this "),wr=r(Io,"A",{href:!0,rel:!0});var Dm=i(wr);nk=n(Dm,"example script"),Dm.forEach(t),sk=n(Io," and "),Tr=r(Io,"A",{href:!0,rel:!0});var Sm=i(Tr);ak=n(Sm,"notebook"),Sm.forEach(t),rk=n(Io,"."),Io.forEach(t),ik=p(Et),Ro=r(Et,"LI",{});var Do=i(Ro);jc=r(Do,"A",{href:!0});var Bm=i(jc);lk=n(Bm,"FlaxRobertaForSequenceClassification"),Bm.forEach(t),dk=n(Do," is supported by this "),$r=r(Do,"A",{href:!0,rel:!0});var Wm=i($r);ck=n(Wm,"example script"),Wm.forEach(t),pk=n(Do," and "),Fr=r(Do,"A",{href:!0,rel:!0});var Um=i(Fr);hk=n(Um,"notebook"),Um.forEach(t),uk=n(Do,"."),Do.forEach(t),Et.forEach(t),tg=p(s),w(xr.$$.fragment,s),og=p(s),Kt=r(s,"UL",{});var $o=i(Kt);Eo=r($o,"LI",{});var So=i(Eo);Pc=r(So,"A",{href:!0});var Hm=i(Pc);fk=n(Hm,"RobertaForTokenClassification"),Hm.forEach(t),mk=n(So," is supported by this "),Rr=r(So,"A",{href:!0,rel:!0});var Qm=i(Rr);gk=n(Qm,"example script"),Qm.forEach(t),_k=n(So," and "),Er=r(So,"A",{href:!0,rel:!0});var Km=i(Er);bk=n(Km,"notebook"),Km.forEach(t),kk=n(So,"."),So.forEach(t),vk=p($o),Mo=r($o,"LI",{});var Bo=i(Mo);Ac=r(Bo,"A",{href:!0});var Jm=i(Ac);yk=n(Jm,"TFRobertaForTokenClassification"),Jm.forEach(t),wk=n(Bo," is supported by this "),Mr=r(Bo,"A",{href:!0,rel:!0});var Vm=i(Mr);Tk=n(Vm,"example script"),Vm.forEach(t),$k=n(Bo," and "),zr=r(Bo,"A",{href:!0,rel:!0});var Gm=i(zr);Fk=n(Gm,"notebook"),Gm.forEach(t),xk=n(Bo,"."),Bo.forEach(t),Rk=p($o),rs=r($o,"LI",{});var Ha=i(rs);Lc=r(Ha,"A",{href:!0});var DE=i(Lc);Ek=n(DE,"FlaxRobertaForTokenClassification"),DE.forEach(t),Mk=n(Ha," is supported by this "),Cr=r(Ha,"A",{href:!0,rel:!0});var SE=i(Cr);zk=n(SE,"example script"),SE.forEach(t),Ck=n(Ha,"."),Ha.forEach(t),qk=p($o),Oc=r($o,"LI",{});var AE=i(Oc);qr=r(AE,"A",{href:!0,rel:!0});var BE=i(qr);jk=n(BE,"Token classification"),BE.forEach(t),Pk=n(AE," chapter of the \u{1F917} Hugging Face Course."),AE.forEach(t),$o.forEach(t),ng=p(s),w(jr.$$.fragment,s),sg=p(s),Mt=r(s,"UL",{});var Wo=i(Mt);Pr=r(Wo,"LI",{});var s_=i(Pr);Ak=n(s_,"A blog on "),Ar=r(s_,"A",{href:!0,rel:!0});var WE=i(Ar);Lk=n(WE,"How to train a new language model from scratch using Transformers and Tokenizers"),WE.forEach(t),Ok=n(s_," with RoBERTa."),s_.forEach(t),Nk=p(Wo),zo=r(Wo,"LI",{});var Tc=i(zo);Nc=r(Tc,"A",{href:!0});var UE=i(Nc);Ik=n(UE,"RobertaForMaskedLM"),UE.forEach(t),Dk=n(Tc," is supported by this "),Lr=r(Tc,"A",{href:!0,rel:!0});var HE=i(Lr);Sk=n(HE,"example script"),HE.forEach(t),Bk=n(Tc," and "),Or=r(Tc,"A",{href:!0,rel:!0});var QE=i(Or);Wk=n(QE,"notebook"),QE.forEach(t),Uk=n(Tc,"."),Tc.forEach(t),Hk=p(Wo),Co=r(Wo,"LI",{});var $c=i(Co);Ic=r($c,"A",{href:!0});var KE=i(Ic);Qk=n(KE,"TFRobertaForMaskedLM"),KE.forEach(t),Kk=n($c," is supported by this "),Nr=r($c,"A",{href:!0,rel:!0});var JE=i(Nr);Jk=n(JE,"example script"),JE.forEach(t),Vk=n($c," and "),Ir=r($c,"A",{href:!0,rel:!0});var VE=i(Ir);Gk=n(VE,"notebook"),VE.forEach(t),Xk=n($c,"."),$c.forEach(t),Yk=p(Wo),qo=r(Wo,"LI",{});var Fc=i(qo);Dc=r(Fc,"A",{href:!0});var GE=i(Dc);Zk=n(GE,"FlaxRobertaForMaskedLM"),GE.forEach(t),ev=n(Fc," is supported by this "),Dr=r(Fc,"A",{href:!0,rel:!0});var XE=i(Dr);tv=n(XE,"example script"),XE.forEach(t),ov=n(Fc," and "),Sr=r(Fc,"A",{href:!0,rel:!0});var YE=i(Sr);nv=n(YE,"notebook"),YE.forEach(t),sv=n(Fc,"."),Fc.forEach(t),av=p(Wo),Sc=r(Wo,"LI",{});var LE=i(Sc);Br=r(LE,"A",{href:!0,rel:!0});var ZE=i(Br);rv=n(ZE,"Masked language modeling"),ZE.forEach(t),iv=n(LE," chapter of the \u{1F917} Hugging Face Course."),LE.forEach(t),Wo.forEach(t),ag=p(s),w(Wr.$$.fragment,s),rg=p(s),zt=r(s,"UL",{});var Uo=i(zt);Ur=r(Uo,"LI",{});var a_=i(Ur);lv=n(a_,"A blog on "),Hr=r(a_,"A",{href:!0,rel:!0});var eM=i(Hr);dv=n(eM,"Accelerated Inference with Optimum and Transformers Pipelines"),eM.forEach(t),cv=n(a_," with RoBERTa for question answering."),a_.forEach(t),pv=p(Uo),jo=r(Uo,"LI",{});var xc=i(jo);Bc=r(xc,"A",{href:!0});var tM=i(Bc);hv=n(tM,"RobertaForQuestionAnswering"),tM.forEach(t),uv=n(xc," is supported by this "),Qr=r(xc,"A",{href:!0,rel:!0});var oM=i(Qr);fv=n(oM,"example script"),oM.forEach(t),mv=n(xc," and "),Kr=r(xc,"A",{href:!0,rel:!0});var nM=i(Kr);gv=n(nM,"notebook"),nM.forEach(t),_v=n(xc,"."),xc.forEach(t),bv=p(Uo),Po=r(Uo,"LI",{});var Rc=i(Po);Wc=r(Rc,"A",{href:!0});var sM=i(Wc);kv=n(sM,"TFRobertaForQuestionAnswering"),sM.forEach(t),vv=n(Rc," is supported by this "),Jr=r(Rc,"A",{href:!0,rel:!0});var aM=i(Jr);yv=n(aM,"example script"),aM.forEach(t),wv=n(Rc," and "),Vr=r(Rc,"A",{href:!0,rel:!0});var rM=i(Vr);Tv=n(rM,"notebook"),rM.forEach(t),$v=n(Rc,"."),Rc.forEach(t),Fv=p(Uo),is=r(Uo,"LI",{});var Xm=i(is);Uc=r(Xm,"A",{href:!0});var iM=i(Uc);xv=n(iM,"FlaxRobertaForQuestionAnswering"),iM.forEach(t),Rv=n(Xm," is supported by this "),Gr=r(Xm,"A",{href:!0,rel:!0});var lM=i(Gr);Ev=n(lM,"example script"),lM.forEach(t),Mv=n(Xm,"."),Xm.forEach(t),zv=p(Uo),Hc=r(Uo,"LI",{});var OE=i(Hc);Xr=r(OE,"A",{href:!0,rel:!0});var dM=i(Xr);Cv=n(dM,"Question answering"),dM.forEach(t),qv=n(OE," chapter of the \u{1F917} Hugging Face Course."),OE.forEach(t),Uo.forEach(t),ig=p(s),Qc=r(s,"P",{});var cM=i(Qc);mh=r(cM,"STRONG",{});var pM=i(mh);jv=n(pM,"Multiple choice"),pM.forEach(t),cM.forEach(t),lg=p(s),ls=r(s,"UL",{});var r_=i(ls);Ao=r(r_,"LI",{});var Ec=i(Ao);Kc=r(Ec,"A",{href:!0});var hM=i(Kc);Pv=n(hM,"RobertaForMultipleChoice"),hM.forEach(t),Av=n(Ec," is supported by this "),Yr=r(Ec,"A",{href:!0,rel:!0});var uM=i(Yr);Lv=n(uM,"example script"),uM.forEach(t),Ov=n(Ec," and "),Zr=r(Ec,"A",{href:!0,rel:!0});var fM=i(Zr);Nv=n(fM,"notebook"),fM.forEach(t),Iv=n(Ec,"."),Ec.forEach(t),Dv=p(r_),Lo=r(r_,"LI",{});var Mc=i(Lo);Jc=r(Mc,"A",{href:!0});var mM=i(Jc);Sv=n(mM,"TFRobertaForMultipleChoice"),mM.forEach(t),Bv=n(Mc," is supported by this "),ei=r(Mc,"A",{href:!0,rel:!0});var gM=i(ei);Wv=n(gM,"example script"),gM.forEach(t),Uv=n(Mc," and "),ti=r(Mc,"A",{href:!0,rel:!0});var _M=i(ti);Hv=n(_M,"notebook"),_M.forEach(t),Qv=n(Mc,"."),Mc.forEach(t),r_.forEach(t),dg=p(s),rn=r(s,"H2",{class:!0});var i_=i(rn);ds=r(i_,"A",{id:!0,class:!0,href:!0});var bM=i(ds);gh=r(bM,"SPAN",{});var kM=i(gh);w(oi.$$.fragment,kM),kM.forEach(t),bM.forEach(t),Kv=p(i_),_h=r(i_,"SPAN",{});var vM=i(_h);Jv=n(vM,"RobertaConfig"),vM.forEach(t),i_.forEach(t),cg=p(s),yt=r(s,"DIV",{class:!0});var Ho=i(yt);w(ni.$$.fragment,Ho),Vv=p(Ho),fo=r(Ho,"P",{});var Qa=i(fo);Gv=n(Qa,"This is the configuration class to store the configuration of a "),Vc=r(Qa,"A",{href:!0});var yM=i(Vc);Xv=n(yM,"RobertaModel"),yM.forEach(t),Yv=n(Qa," or a "),Gc=r(Qa,"A",{href:!0});var wM=i(Gc);Zv=n(wM,"TFRobertaModel"),wM.forEach(t),ey=n(Qa,`. It is
used to instantiate a RoBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the RoBERTa
`),si=r(Qa,"A",{href:!0,rel:!0});var TM=i(si);ty=n(TM,"roberta-base"),TM.forEach(t),oy=n(Qa," architecture."),Qa.forEach(t),ny=p(Ho),ln=r(Ho,"P",{});var Bp=i(ln);sy=n(Bp,"Configuration objects inherit from "),Xc=r(Bp,"A",{href:!0});var $M=i(Xc);ay=n($M,"PretrainedConfig"),$M.forEach(t),ry=n(Bp,` and can be used to control the model outputs. Read the
documentation from `),Yc=r(Bp,"A",{href:!0});var FM=i(Yc);iy=n(FM,"PretrainedConfig"),FM.forEach(t),ly=n(Bp," for more information."),Bp.forEach(t),dy=p(Ho),dn=r(Ho,"P",{});var Wp=i(dn);cy=n(Wp,"The "),Zc=r(Wp,"A",{href:!0});var xM=i(Zc);py=n(xM,"RobertaConfig"),xM.forEach(t),hy=n(Wp," class directly inherits "),ep=r(Wp,"A",{href:!0});var RM=i(ep);uy=n(RM,"BertConfig"),RM.forEach(t),fy=n(Wp,`. It reuses the same defaults. Please check the parent
class for more information.`),Wp.forEach(t),my=p(Ho),w(cs.$$.fragment,Ho),Ho.forEach(t),pg=p(s),cn=r(s,"H2",{class:!0});var l_=i(cn);ps=r(l_,"A",{id:!0,class:!0,href:!0});var EM=i(ps);bh=r(EM,"SPAN",{});var MM=i(bh);w(ai.$$.fragment,MM),MM.forEach(t),EM.forEach(t),gy=p(l_),kh=r(l_,"SPAN",{});var zM=i(kh);_y=n(zM,"RobertaTokenizer"),zM.forEach(t),l_.forEach(t),hg=p(s),Ie=r(s,"DIV",{class:!0});var Ge=i(Ie);w(ri.$$.fragment,Ge),by=p(Ge),vh=r(Ge,"P",{});var CM=i(vh);ky=n(CM,"Constructs a RoBERTa tokenizer, derived from the GPT-2 tokenizer, using byte-level Byte-Pair-Encoding."),CM.forEach(t),vy=p(Ge),yh=r(Ge,"P",{});var qM=i(yh);yy=n(qM,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),qM.forEach(t),wy=p(Ge),w(hs.$$.fragment,Ge),Ty=p(Ge),ii=r(Ge,"P",{});var d_=i(ii);$y=n(d_,"You can get around that behavior by passing "),wh=r(d_,"CODE",{});var jM=i(wh);Fy=n(jM,"add_prefix_space=True"),jM.forEach(t),xy=n(d_,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),d_.forEach(t),Ry=p(Ge),w(us.$$.fragment,Ge),Ey=p(Ge),li=r(Ge,"P",{});var c_=i(li);My=n(c_,"This tokenizer inherits from "),tp=r(c_,"A",{href:!0});var PM=i(tp);zy=n(PM,"PreTrainedTokenizer"),PM.forEach(t),Cy=n(c_,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),c_.forEach(t),qy=p(Ge),Oo=r(Ge,"DIV",{class:!0});var Up=i(Oo);w(di.$$.fragment,Up),jy=p(Up),Th=r(Up,"P",{});var AM=i(Th);Py=n(AM,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoBERTa sequence has the following format:`),AM.forEach(t),Ay=p(Up),ci=r(Up,"UL",{});var p_=i(ci);op=r(p_,"LI",{});var NE=i(op);Ly=n(NE,"single sequence: "),$h=r(NE,"CODE",{});var LM=i($h);Oy=n(LM,"<s> X </s>"),LM.forEach(t),NE.forEach(t),Ny=p(p_),np=r(p_,"LI",{});var IE=i(np);Iy=n(IE,"pair of sequences: "),Fh=r(IE,"CODE",{});var OM=i(Fh);Dy=n(OM,"<s> A </s></s> B </s>"),OM.forEach(t),IE.forEach(t),p_.forEach(t),Up.forEach(t),Sy=p(Ge),fs=r(Ge,"DIV",{class:!0});var h_=i(fs);w(pi.$$.fragment,h_),By=p(h_),hi=r(h_,"P",{});var u_=i(hi);Wy=n(u_,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),xh=r(u_,"CODE",{});var NM=i(xh);Uy=n(NM,"prepare_for_model"),NM.forEach(t),Hy=n(u_," method."),u_.forEach(t),h_.forEach(t),Qy=p(Ge),ms=r(Ge,"DIV",{class:!0});var f_=i(ms);w(ui.$$.fragment,f_),Ky=p(f_),Rh=r(f_,"P",{});var IM=i(Rh);Jy=n(IM,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. RoBERTa does not
make use of token type ids, therefore a list of zeros is returned.`),IM.forEach(t),f_.forEach(t),Vy=p(Ge),sp=r(Ge,"DIV",{class:!0});var DM=i(sp);w(fi.$$.fragment,DM),DM.forEach(t),Ge.forEach(t),ug=p(s),pn=r(s,"H2",{class:!0});var m_=i(pn);gs=r(m_,"A",{id:!0,class:!0,href:!0});var SM=i(gs);Eh=r(SM,"SPAN",{});var BM=i(Eh);w(mi.$$.fragment,BM),BM.forEach(t),SM.forEach(t),Gy=p(m_),Mh=r(m_,"SPAN",{});var WM=i(Mh);Xy=n(WM,"RobertaTokenizerFast"),WM.forEach(t),m_.forEach(t),fg=p(s),tt=r(s,"DIV",{class:!0});var kt=i(tt);w(gi.$$.fragment,kt),Yy=p(kt),_i=r(kt,"P",{});var g_=i(_i);Zy=n(g_,"Construct a \u201Cfast\u201D RoBERTa tokenizer (backed by HuggingFace\u2019s "),zh=r(g_,"EM",{});var UM=i(zh);ew=n(UM,"tokenizers"),UM.forEach(t),tw=n(g_,` library), derived from the GPT-2
tokenizer, using byte-level Byte-Pair-Encoding.`),g_.forEach(t),ow=p(kt),Ch=r(kt,"P",{});var HM=i(Ch);nw=n(HM,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),HM.forEach(t),sw=p(kt),w(_s.$$.fragment,kt),aw=p(kt),bi=r(kt,"P",{});var __=i(bi);rw=n(__,"You can get around that behavior by passing "),qh=r(__,"CODE",{});var QM=i(qh);iw=n(QM,"add_prefix_space=True"),QM.forEach(t),lw=n(__,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),__.forEach(t),dw=p(kt),w(bs.$$.fragment,kt),cw=p(kt),ki=r(kt,"P",{});var b_=i(ki);pw=n(b_,"This tokenizer inherits from "),ap=r(b_,"A",{href:!0});var KM=i(ap);hw=n(KM,"PreTrainedTokenizerFast"),KM.forEach(t),uw=n(b_,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),b_.forEach(t),fw=p(kt),rp=r(kt,"DIV",{class:!0});var JM=i(rp);w(vi.$$.fragment,JM),JM.forEach(t),kt.forEach(t),mg=p(s),hn=r(s,"H2",{class:!0});var k_=i(hn);ks=r(k_,"A",{id:!0,class:!0,href:!0});var VM=i(ks);jh=r(VM,"SPAN",{});var GM=i(jh);w(yi.$$.fragment,GM),GM.forEach(t),VM.forEach(t),mw=p(k_),Ph=r(k_,"SPAN",{});var XM=i(Ph);gw=n(XM,"RobertaModel"),XM.forEach(t),k_.forEach(t),gg=p(s),ot=r(s,"DIV",{class:!0});var vt=i(ot);w(wi.$$.fragment,vt),_w=p(vt),Ah=r(vt,"P",{});var YM=i(Ah);bw=n(YM,"The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),YM.forEach(t),kw=p(vt),Ti=r(vt,"P",{});var v_=i(Ti);vw=n(v_,"This model inherits from "),ip=r(v_,"A",{href:!0});var ZM=i(ip);yw=n(ZM,"PreTrainedModel"),ZM.forEach(t),ww=n(v_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),v_.forEach(t),Tw=p(vt),$i=r(vt,"P",{});var y_=i($i);$w=n(y_,"This model is also a PyTorch "),Fi=r(y_,"A",{href:!0,rel:!0});var ez=i(Fi);Fw=n(ez,"torch.nn.Module"),ez.forEach(t),xw=n(y_,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),y_.forEach(t),Rw=p(vt),xi=r(vt,"P",{});var w_=i(xi);Ew=n(w_,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Lh=r(w_,"EM",{});var tz=i(Lh);Mw=n(tz,`Attention is
all you need`),tz.forEach(t),zw=n(w_,`_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`),w_.forEach(t),Cw=p(vt),pt=r(vt,"P",{});var Nt=i(pt);qw=n(Nt,"To behave as an decoder the model needs to be initialized with the "),Oh=r(Nt,"CODE",{});var oz=i(Oh);jw=n(oz,"is_decoder"),oz.forEach(t),Pw=n(Nt,` argument of the configuration set
to `),Nh=r(Nt,"CODE",{});var nz=i(Nh);Aw=n(nz,"True"),nz.forEach(t),Lw=n(Nt,". To be used in a Seq2Seq model, the model needs to initialized with both "),Ih=r(Nt,"CODE",{});var sz=i(Ih);Ow=n(sz,"is_decoder"),sz.forEach(t),Nw=n(Nt,` argument and
`),Dh=r(Nt,"CODE",{});var az=i(Dh);Iw=n(az,"add_cross_attention"),az.forEach(t),Dw=n(Nt," set to "),Sh=r(Nt,"CODE",{});var rz=i(Sh);Sw=n(rz,"True"),rz.forEach(t),Bw=n(Nt,"; an "),Bh=r(Nt,"CODE",{});var iz=i(Bh);Ww=n(iz,"encoder_hidden_states"),iz.forEach(t),Uw=n(Nt," is then expected as an input to the forward pass."),Nt.forEach(t),Hw=p(vt),vs=r(vt,"P",{});var Ym=i(vs);Qw=n(Ym,".. _"),Wh=r(Ym,"EM",{});var lz=i(Wh);Kw=n(lz,"Attention is all you need"),lz.forEach(t),Jw=n(Ym,": "),Ri=r(Ym,"A",{href:!0,rel:!0});var dz=i(Ri);Vw=n(dz,"https://arxiv.org/abs/1706.03762"),dz.forEach(t),Ym.forEach(t),Gw=p(vt),Jt=r(vt,"DIV",{class:!0});var Ka=i(Jt);w(Ei.$$.fragment,Ka),Xw=p(Ka),un=r(Ka,"P",{});var Hp=i(un);Yw=n(Hp,"The "),lp=r(Hp,"A",{href:!0});var cz=i(lp);Zw=n(cz,"RobertaModel"),cz.forEach(t),eT=n(Hp," forward method, overrides the "),Uh=r(Hp,"CODE",{});var pz=i(Uh);tT=n(pz,"__call__"),pz.forEach(t),oT=n(Hp," special method."),Hp.forEach(t),nT=p(Ka),w(ys.$$.fragment,Ka),sT=p(Ka),w(ws.$$.fragment,Ka),Ka.forEach(t),vt.forEach(t),_g=p(s),fn=r(s,"H2",{class:!0});var T_=i(fn);Ts=r(T_,"A",{id:!0,class:!0,href:!0});var hz=i(Ts);Hh=r(hz,"SPAN",{});var uz=i(Hh);w(Mi.$$.fragment,uz),uz.forEach(t),hz.forEach(t),aT=p(T_),Qh=r(T_,"SPAN",{});var fz=i(Qh);rT=n(fz,"RobertaForCausalLM"),fz.forEach(t),T_.forEach(t),bg=p(s),wt=r(s,"DIV",{class:!0});var Qo=i(wt);w(zi.$$.fragment,Qo),iT=p(Qo),Ci=r(Qo,"P",{});var $_=i(Ci);lT=n($_,"RoBERTa Model with a "),Kh=r($_,"CODE",{});var mz=i(Kh);dT=n(mz,"language modeling"),mz.forEach(t),cT=n($_," head on top for CLM fine-tuning."),$_.forEach(t),pT=p(Qo),qi=r(Qo,"P",{});var F_=i(qi);hT=n(F_,"This model inherits from "),dp=r(F_,"A",{href:!0});var gz=i(dp);uT=n(gz,"PreTrainedModel"),gz.forEach(t),fT=n(F_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),F_.forEach(t),mT=p(Qo),ji=r(Qo,"P",{});var x_=i(ji);gT=n(x_,"This model is also a PyTorch "),Pi=r(x_,"A",{href:!0,rel:!0});var _z=i(Pi);_T=n(_z,"torch.nn.Module"),_z.forEach(t),bT=n(x_,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),x_.forEach(t),kT=p(Qo),Vt=r(Qo,"DIV",{class:!0});var Ja=i(Vt);w(Ai.$$.fragment,Ja),vT=p(Ja),mn=r(Ja,"P",{});var Qp=i(mn);yT=n(Qp,"The "),cp=r(Qp,"A",{href:!0});var bz=i(cp);wT=n(bz,"RobertaForCausalLM"),bz.forEach(t),TT=n(Qp," forward method, overrides the "),Jh=r(Qp,"CODE",{});var kz=i(Jh);$T=n(kz,"__call__"),kz.forEach(t),FT=n(Qp," special method."),Qp.forEach(t),xT=p(Ja),w($s.$$.fragment,Ja),RT=p(Ja),w(Fs.$$.fragment,Ja),Ja.forEach(t),Qo.forEach(t),kg=p(s),gn=r(s,"H2",{class:!0});var R_=i(gn);xs=r(R_,"A",{id:!0,class:!0,href:!0});var vz=i(xs);Vh=r(vz,"SPAN",{});var yz=i(Vh);w(Li.$$.fragment,yz),yz.forEach(t),vz.forEach(t),ET=p(R_),Gh=r(R_,"SPAN",{});var wz=i(Gh);MT=n(wz,"RobertaForMaskedLM"),wz.forEach(t),R_.forEach(t),vg=p(s),Tt=r(s,"DIV",{class:!0});var Ko=i(Tt);w(Oi.$$.fragment,Ko),zT=p(Ko),Ni=r(Ko,"P",{});var E_=i(Ni);CT=n(E_,"RoBERTa Model with a "),Xh=r(E_,"CODE",{});var Tz=i(Xh);qT=n(Tz,"language modeling"),Tz.forEach(t),jT=n(E_," head on top."),E_.forEach(t),PT=p(Ko),Ii=r(Ko,"P",{});var M_=i(Ii);AT=n(M_,"This model inherits from "),pp=r(M_,"A",{href:!0});var $z=i(pp);LT=n($z,"PreTrainedModel"),$z.forEach(t),OT=n(M_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),M_.forEach(t),NT=p(Ko),Di=r(Ko,"P",{});var z_=i(Di);IT=n(z_,"This model is also a PyTorch "),Si=r(z_,"A",{href:!0,rel:!0});var Fz=i(Si);DT=n(Fz,"torch.nn.Module"),Fz.forEach(t),ST=n(z_,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),z_.forEach(t),BT=p(Ko),Ct=r(Ko,"DIV",{class:!0});var Jo=i(Ct);w(Bi.$$.fragment,Jo),WT=p(Jo),_n=r(Jo,"P",{});var Kp=i(_n);UT=n(Kp,"The "),hp=r(Kp,"A",{href:!0});var xz=i(hp);HT=n(xz,"RobertaForMaskedLM"),xz.forEach(t),QT=n(Kp," forward method, overrides the "),Yh=r(Kp,"CODE",{});var Rz=i(Yh);KT=n(Rz,"__call__"),Rz.forEach(t),JT=n(Kp," special method."),Kp.forEach(t),VT=p(Jo),w(Rs.$$.fragment,Jo),GT=p(Jo),w(Es.$$.fragment,Jo),XT=p(Jo),w(Ms.$$.fragment,Jo),Jo.forEach(t),Ko.forEach(t),yg=p(s),bn=r(s,"H2",{class:!0});var C_=i(bn);zs=r(C_,"A",{id:!0,class:!0,href:!0});var Ez=i(zs);Zh=r(Ez,"SPAN",{});var Mz=i(Zh);w(Wi.$$.fragment,Mz),Mz.forEach(t),Ez.forEach(t),YT=p(C_),eu=r(C_,"SPAN",{});var zz=i(eu);ZT=n(zz,"RobertaForSequenceClassification"),zz.forEach(t),C_.forEach(t),wg=p(s),$t=r(s,"DIV",{class:!0});var Vo=i($t);w(Ui.$$.fragment,Vo),e$=p(Vo),tu=r(Vo,"P",{});var Cz=i(tu);t$=n(Cz,`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Cz.forEach(t),o$=p(Vo),Hi=r(Vo,"P",{});var q_=i(Hi);n$=n(q_,"This model inherits from "),up=r(q_,"A",{href:!0});var qz=i(up);s$=n(qz,"PreTrainedModel"),qz.forEach(t),a$=n(q_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),q_.forEach(t),r$=p(Vo),Qi=r(Vo,"P",{});var j_=i(Qi);i$=n(j_,"This model is also a PyTorch "),Ki=r(j_,"A",{href:!0,rel:!0});var jz=i(Ki);l$=n(jz,"torch.nn.Module"),jz.forEach(t),d$=n(j_,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),j_.forEach(t),c$=p(Vo),ct=r(Vo,"DIV",{class:!0});var It=i(ct);w(Ji.$$.fragment,It),p$=p(It),kn=r(It,"P",{});var Jp=i(kn);h$=n(Jp,"The "),fp=r(Jp,"A",{href:!0});var Pz=i(fp);u$=n(Pz,"RobertaForSequenceClassification"),Pz.forEach(t),f$=n(Jp," forward method, overrides the "),ou=r(Jp,"CODE",{});var Az=i(ou);m$=n(Az,"__call__"),Az.forEach(t),g$=n(Jp," special method."),Jp.forEach(t),_$=p(It),w(Cs.$$.fragment,It),b$=p(It),w(qs.$$.fragment,It),k$=p(It),w(js.$$.fragment,It),v$=p(It),w(Ps.$$.fragment,It),y$=p(It),w(As.$$.fragment,It),It.forEach(t),Vo.forEach(t),Tg=p(s),vn=r(s,"H2",{class:!0});var P_=i(vn);Ls=r(P_,"A",{id:!0,class:!0,href:!0});var Lz=i(Ls);nu=r(Lz,"SPAN",{});var Oz=i(nu);w(Vi.$$.fragment,Oz),Oz.forEach(t),Lz.forEach(t),w$=p(P_),su=r(P_,"SPAN",{});var Nz=i(su);T$=n(Nz,"RobertaForMultipleChoice"),Nz.forEach(t),P_.forEach(t),$g=p(s),Ft=r(s,"DIV",{class:!0});var Go=i(Ft);w(Gi.$$.fragment,Go),$$=p(Go),au=r(Go,"P",{});var Iz=i(au);F$=n(Iz,`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Iz.forEach(t),x$=p(Go),Xi=r(Go,"P",{});var A_=i(Xi);R$=n(A_,"This model inherits from "),mp=r(A_,"A",{href:!0});var Dz=i(mp);E$=n(Dz,"PreTrainedModel"),Dz.forEach(t),M$=n(A_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),A_.forEach(t),z$=p(Go),Yi=r(Go,"P",{});var L_=i(Yi);C$=n(L_,"This model is also a PyTorch "),Zi=r(L_,"A",{href:!0,rel:!0});var Sz=i(Zi);q$=n(Sz,"torch.nn.Module"),Sz.forEach(t),j$=n(L_,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),L_.forEach(t),P$=p(Go),Gt=r(Go,"DIV",{class:!0});var Va=i(Gt);w(el.$$.fragment,Va),A$=p(Va),yn=r(Va,"P",{});var Vp=i(yn);L$=n(Vp,"The "),gp=r(Vp,"A",{href:!0});var Bz=i(gp);O$=n(Bz,"RobertaForMultipleChoice"),Bz.forEach(t),N$=n(Vp," forward method, overrides the "),ru=r(Vp,"CODE",{});var Wz=i(ru);I$=n(Wz,"__call__"),Wz.forEach(t),D$=n(Vp," special method."),Vp.forEach(t),S$=p(Va),w(Os.$$.fragment,Va),B$=p(Va),w(Ns.$$.fragment,Va),Va.forEach(t),Go.forEach(t),Fg=p(s),wn=r(s,"H2",{class:!0});var O_=i(wn);Is=r(O_,"A",{id:!0,class:!0,href:!0});var Uz=i(Is);iu=r(Uz,"SPAN",{});var Hz=i(iu);w(tl.$$.fragment,Hz),Hz.forEach(t),Uz.forEach(t),W$=p(O_),lu=r(O_,"SPAN",{});var Qz=i(lu);U$=n(Qz,"RobertaForTokenClassification"),Qz.forEach(t),O_.forEach(t),xg=p(s),xt=r(s,"DIV",{class:!0});var Xo=i(xt);w(ol.$$.fragment,Xo),H$=p(Xo),du=r(Xo,"P",{});var Kz=i(du);Q$=n(Kz,`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Kz.forEach(t),K$=p(Xo),nl=r(Xo,"P",{});var N_=i(nl);J$=n(N_,"This model inherits from "),_p=r(N_,"A",{href:!0});var Jz=i(_p);V$=n(Jz,"PreTrainedModel"),Jz.forEach(t),G$=n(N_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),N_.forEach(t),X$=p(Xo),sl=r(Xo,"P",{});var I_=i(sl);Y$=n(I_,"This model is also a PyTorch "),al=r(I_,"A",{href:!0,rel:!0});var Vz=i(al);Z$=n(Vz,"torch.nn.Module"),Vz.forEach(t),e2=n(I_,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),I_.forEach(t),t2=p(Xo),qt=r(Xo,"DIV",{class:!0});var Yo=i(qt);w(rl.$$.fragment,Yo),o2=p(Yo),Tn=r(Yo,"P",{});var Gp=i(Tn);n2=n(Gp,"The "),bp=r(Gp,"A",{href:!0});var Gz=i(bp);s2=n(Gz,"RobertaForTokenClassification"),Gz.forEach(t),a2=n(Gp," forward method, overrides the "),cu=r(Gp,"CODE",{});var Xz=i(cu);r2=n(Xz,"__call__"),Xz.forEach(t),i2=n(Gp," special method."),Gp.forEach(t),l2=p(Yo),w(Ds.$$.fragment,Yo),d2=p(Yo),w(Ss.$$.fragment,Yo),c2=p(Yo),w(Bs.$$.fragment,Yo),Yo.forEach(t),Xo.forEach(t),Rg=p(s),$n=r(s,"H2",{class:!0});var D_=i($n);Ws=r(D_,"A",{id:!0,class:!0,href:!0});var Yz=i(Ws);pu=r(Yz,"SPAN",{});var Zz=i(pu);w(il.$$.fragment,Zz),Zz.forEach(t),Yz.forEach(t),p2=p(D_),hu=r(D_,"SPAN",{});var eC=i(hu);h2=n(eC,"RobertaForQuestionAnswering"),eC.forEach(t),D_.forEach(t),Eg=p(s),Rt=r(s,"DIV",{class:!0});var Zo=i(Rt);w(ll.$$.fragment,Zo),u2=p(Zo),Fn=r(Zo,"P",{});var Xp=i(Fn);f2=n(Xp,`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),uu=r(Xp,"CODE",{});var tC=i(uu);m2=n(tC,"span start logits"),tC.forEach(t),g2=n(Xp," and "),fu=r(Xp,"CODE",{});var oC=i(fu);_2=n(oC,"span end logits"),oC.forEach(t),b2=n(Xp,")."),Xp.forEach(t),k2=p(Zo),dl=r(Zo,"P",{});var S_=i(dl);v2=n(S_,"This model inherits from "),kp=r(S_,"A",{href:!0});var nC=i(kp);y2=n(nC,"PreTrainedModel"),nC.forEach(t),w2=n(S_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),S_.forEach(t),T2=p(Zo),cl=r(Zo,"P",{});var B_=i(cl);$2=n(B_,"This model is also a PyTorch "),pl=r(B_,"A",{href:!0,rel:!0});var sC=i(pl);F2=n(sC,"torch.nn.Module"),sC.forEach(t),x2=n(B_,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),B_.forEach(t),R2=p(Zo),jt=r(Zo,"DIV",{class:!0});var en=i(jt);w(hl.$$.fragment,en),E2=p(en),xn=r(en,"P",{});var Yp=i(xn);M2=n(Yp,"The "),vp=r(Yp,"A",{href:!0});var aC=i(vp);z2=n(aC,"RobertaForQuestionAnswering"),aC.forEach(t),C2=n(Yp," forward method, overrides the "),mu=r(Yp,"CODE",{});var rC=i(mu);q2=n(rC,"__call__"),rC.forEach(t),j2=n(Yp," special method."),Yp.forEach(t),P2=p(en),w(Us.$$.fragment,en),A2=p(en),w(Hs.$$.fragment,en),L2=p(en),w(Qs.$$.fragment,en),en.forEach(t),Zo.forEach(t),Mg=p(s),Rn=r(s,"H2",{class:!0});var W_=i(Rn);Ks=r(W_,"A",{id:!0,class:!0,href:!0});var iC=i(Ks);gu=r(iC,"SPAN",{});var lC=i(gu);w(ul.$$.fragment,lC),lC.forEach(t),iC.forEach(t),O2=p(W_),_u=r(W_,"SPAN",{});var dC=i(_u);N2=n(dC,"TFRobertaModel"),dC.forEach(t),W_.forEach(t),zg=p(s),ht=r(s,"DIV",{class:!0});var io=i(ht);w(fl.$$.fragment,io),I2=p(io),bu=r(io,"P",{});var cC=i(bu);D2=n(cC,"The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),cC.forEach(t),S2=p(io),ml=r(io,"P",{});var U_=i(ml);B2=n(U_,"This model inherits from "),yp=r(U_,"A",{href:!0});var pC=i(yp);W2=n(pC,"TFPreTrainedModel"),pC.forEach(t),U2=n(U_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),U_.forEach(t),H2=p(io),gl=r(io,"P",{});var H_=i(gl);Q2=n(H_,"This model is also a "),_l=r(H_,"A",{href:!0,rel:!0});var hC=i(_l);K2=n(hC,"tf.keras.Model"),hC.forEach(t),J2=n(H_,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),H_.forEach(t),V2=p(io),w(Js.$$.fragment,io),G2=p(io),Xt=r(io,"DIV",{class:!0});var Ga=i(Xt);w(bl.$$.fragment,Ga),X2=p(Ga),En=r(Ga,"P",{});var Zp=i(En);Y2=n(Zp,"The "),wp=r(Zp,"A",{href:!0});var uC=i(wp);Z2=n(uC,"TFRobertaModel"),uC.forEach(t),e1=n(Zp," forward method, overrides the "),ku=r(Zp,"CODE",{});var fC=i(ku);t1=n(fC,"__call__"),fC.forEach(t),o1=n(Zp," special method."),Zp.forEach(t),n1=p(Ga),w(Vs.$$.fragment,Ga),s1=p(Ga),w(Gs.$$.fragment,Ga),Ga.forEach(t),io.forEach(t),Cg=p(s),Mn=r(s,"H2",{class:!0});var Q_=i(Mn);Xs=r(Q_,"A",{id:!0,class:!0,href:!0});var mC=i(Xs);vu=r(mC,"SPAN",{});var gC=i(vu);w(kl.$$.fragment,gC),gC.forEach(t),mC.forEach(t),a1=p(Q_),yu=r(Q_,"SPAN",{});var _C=i(yu);r1=n(_C,"TFRobertaForCausalLM"),_C.forEach(t),Q_.forEach(t),qg=p(s),zn=r(s,"DIV",{class:!0});var K_=i(zn);w(vl.$$.fragment,K_),i1=p(K_),Yt=r(K_,"DIV",{class:!0});var Xa=i(Yt);w(yl.$$.fragment,Xa),l1=p(Xa),Cn=r(Xa,"P",{});var eh=i(Cn);d1=n(eh,"The "),Tp=r(eh,"A",{href:!0});var bC=i(Tp);c1=n(bC,"TFRobertaForCausalLM"),bC.forEach(t),p1=n(eh," forward method, overrides the "),wu=r(eh,"CODE",{});var kC=i(wu);h1=n(kC,"__call__"),kC.forEach(t),u1=n(eh," special method."),eh.forEach(t),f1=p(Xa),w(Ys.$$.fragment,Xa),m1=p(Xa),w(Zs.$$.fragment,Xa),Xa.forEach(t),K_.forEach(t),jg=p(s),qn=r(s,"H2",{class:!0});var J_=i(qn);ea=r(J_,"A",{id:!0,class:!0,href:!0});var vC=i(ea);Tu=r(vC,"SPAN",{});var yC=i(Tu);w(wl.$$.fragment,yC),yC.forEach(t),vC.forEach(t),g1=p(J_),$u=r(J_,"SPAN",{});var wC=i($u);_1=n(wC,"TFRobertaForMaskedLM"),wC.forEach(t),J_.forEach(t),Pg=p(s),ut=r(s,"DIV",{class:!0});var lo=i(ut);w(Tl.$$.fragment,lo),b1=p(lo),$l=r(lo,"P",{});var V_=i($l);k1=n(V_,"RoBERTa Model with a "),Fu=r(V_,"CODE",{});var TC=i(Fu);v1=n(TC,"language modeling"),TC.forEach(t),y1=n(V_," head on top."),V_.forEach(t),w1=p(lo),Fl=r(lo,"P",{});var G_=i(Fl);T1=n(G_,"This model inherits from "),$p=r(G_,"A",{href:!0});var $C=i($p);$1=n($C,"TFPreTrainedModel"),$C.forEach(t),F1=n(G_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),G_.forEach(t),x1=p(lo),xl=r(lo,"P",{});var X_=i(xl);R1=n(X_,"This model is also a "),Rl=r(X_,"A",{href:!0,rel:!0});var FC=i(Rl);E1=n(FC,"tf.keras.Model"),FC.forEach(t),M1=n(X_,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),X_.forEach(t),z1=p(lo),w(ta.$$.fragment,lo),C1=p(lo),Pt=r(lo,"DIV",{class:!0});var tn=i(Pt);w(El.$$.fragment,tn),q1=p(tn),jn=r(tn,"P",{});var th=i(jn);j1=n(th,"The "),Fp=r(th,"A",{href:!0});var xC=i(Fp);P1=n(xC,"TFRobertaForMaskedLM"),xC.forEach(t),A1=n(th," forward method, overrides the "),xu=r(th,"CODE",{});var RC=i(xu);L1=n(RC,"__call__"),RC.forEach(t),O1=n(th," special method."),th.forEach(t),N1=p(tn),w(oa.$$.fragment,tn),I1=p(tn),w(na.$$.fragment,tn),D1=p(tn),w(sa.$$.fragment,tn),tn.forEach(t),lo.forEach(t),Ag=p(s),Pn=r(s,"H2",{class:!0});var Y_=i(Pn);aa=r(Y_,"A",{id:!0,class:!0,href:!0});var EC=i(aa);Ru=r(EC,"SPAN",{});var MC=i(Ru);w(Ml.$$.fragment,MC),MC.forEach(t),EC.forEach(t),S1=p(Y_),Eu=r(Y_,"SPAN",{});var zC=i(Eu);B1=n(zC,"TFRobertaForSequenceClassification"),zC.forEach(t),Y_.forEach(t),Lg=p(s),ft=r(s,"DIV",{class:!0});var co=i(ft);w(zl.$$.fragment,co),W1=p(co),Mu=r(co,"P",{});var CC=i(Mu);U1=n(CC,`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),CC.forEach(t),H1=p(co),Cl=r(co,"P",{});var Z_=i(Cl);Q1=n(Z_,"This model inherits from "),xp=r(Z_,"A",{href:!0});var qC=i(xp);K1=n(qC,"TFPreTrainedModel"),qC.forEach(t),J1=n(Z_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Z_.forEach(t),V1=p(co),ql=r(co,"P",{});var eb=i(ql);G1=n(eb,"This model is also a "),jl=r(eb,"A",{href:!0,rel:!0});var jC=i(jl);X1=n(jC,"tf.keras.Model"),jC.forEach(t),Y1=n(eb,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),eb.forEach(t),Z1=p(co),w(ra.$$.fragment,co),e0=p(co),At=r(co,"DIV",{class:!0});var on=i(At);w(Pl.$$.fragment,on),t0=p(on),An=r(on,"P",{});var oh=i(An);o0=n(oh,"The "),Rp=r(oh,"A",{href:!0});var PC=i(Rp);n0=n(PC,"TFRobertaForSequenceClassification"),PC.forEach(t),s0=n(oh," forward method, overrides the "),zu=r(oh,"CODE",{});var AC=i(zu);a0=n(AC,"__call__"),AC.forEach(t),r0=n(oh," special method."),oh.forEach(t),i0=p(on),w(ia.$$.fragment,on),l0=p(on),w(la.$$.fragment,on),d0=p(on),w(da.$$.fragment,on),on.forEach(t),co.forEach(t),Og=p(s),Ln=r(s,"H2",{class:!0});var tb=i(Ln);ca=r(tb,"A",{id:!0,class:!0,href:!0});var LC=i(ca);Cu=r(LC,"SPAN",{});var OC=i(Cu);w(Al.$$.fragment,OC),OC.forEach(t),LC.forEach(t),c0=p(tb),qu=r(tb,"SPAN",{});var NC=i(qu);p0=n(NC,"TFRobertaForMultipleChoice"),NC.forEach(t),tb.forEach(t),Ng=p(s),mt=r(s,"DIV",{class:!0});var po=i(mt);w(Ll.$$.fragment,po),h0=p(po),ju=r(po,"P",{});var IC=i(ju);u0=n(IC,`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),IC.forEach(t),f0=p(po),Ol=r(po,"P",{});var ob=i(Ol);m0=n(ob,"This model inherits from "),Ep=r(ob,"A",{href:!0});var DC=i(Ep);g0=n(DC,"TFPreTrainedModel"),DC.forEach(t),_0=n(ob,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ob.forEach(t),b0=p(po),Nl=r(po,"P",{});var nb=i(Nl);k0=n(nb,"This model is also a "),Il=r(nb,"A",{href:!0,rel:!0});var SC=i(Il);v0=n(SC,"tf.keras.Model"),SC.forEach(t),y0=n(nb,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nb.forEach(t),w0=p(po),w(pa.$$.fragment,po),T0=p(po),Zt=r(po,"DIV",{class:!0});var Ya=i(Zt);w(Dl.$$.fragment,Ya),$0=p(Ya),On=r(Ya,"P",{});var nh=i(On);F0=n(nh,"The "),Mp=r(nh,"A",{href:!0});var BC=i(Mp);x0=n(BC,"TFRobertaForMultipleChoice"),BC.forEach(t),R0=n(nh," forward method, overrides the "),Pu=r(nh,"CODE",{});var WC=i(Pu);E0=n(WC,"__call__"),WC.forEach(t),M0=n(nh," special method."),nh.forEach(t),z0=p(Ya),w(ha.$$.fragment,Ya),C0=p(Ya),w(ua.$$.fragment,Ya),Ya.forEach(t),po.forEach(t),Ig=p(s),Nn=r(s,"H2",{class:!0});var sb=i(Nn);fa=r(sb,"A",{id:!0,class:!0,href:!0});var UC=i(fa);Au=r(UC,"SPAN",{});var HC=i(Au);w(Sl.$$.fragment,HC),HC.forEach(t),UC.forEach(t),q0=p(sb),Lu=r(sb,"SPAN",{});var QC=i(Lu);j0=n(QC,"TFRobertaForTokenClassification"),QC.forEach(t),sb.forEach(t),Dg=p(s),gt=r(s,"DIV",{class:!0});var ho=i(gt);w(Bl.$$.fragment,ho),P0=p(ho),Ou=r(ho,"P",{});var KC=i(Ou);A0=n(KC,`RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),KC.forEach(t),L0=p(ho),Wl=r(ho,"P",{});var ab=i(Wl);O0=n(ab,"This model inherits from "),zp=r(ab,"A",{href:!0});var JC=i(zp);N0=n(JC,"TFPreTrainedModel"),JC.forEach(t),I0=n(ab,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ab.forEach(t),D0=p(ho),Ul=r(ho,"P",{});var rb=i(Ul);S0=n(rb,"This model is also a "),Hl=r(rb,"A",{href:!0,rel:!0});var VC=i(Hl);B0=n(VC,"tf.keras.Model"),VC.forEach(t),W0=n(rb,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rb.forEach(t),U0=p(ho),w(ma.$$.fragment,ho),H0=p(ho),Lt=r(ho,"DIV",{class:!0});var nn=i(Lt);w(Ql.$$.fragment,nn),Q0=p(nn),In=r(nn,"P",{});var sh=i(In);K0=n(sh,"The "),Cp=r(sh,"A",{href:!0});var GC=i(Cp);J0=n(GC,"TFRobertaForTokenClassification"),GC.forEach(t),V0=n(sh," forward method, overrides the "),Nu=r(sh,"CODE",{});var XC=i(Nu);G0=n(XC,"__call__"),XC.forEach(t),X0=n(sh," special method."),sh.forEach(t),Y0=p(nn),w(ga.$$.fragment,nn),Z0=p(nn),w(_a.$$.fragment,nn),e4=p(nn),w(ba.$$.fragment,nn),nn.forEach(t),ho.forEach(t),Sg=p(s),Dn=r(s,"H2",{class:!0});var ib=i(Dn);ka=r(ib,"A",{id:!0,class:!0,href:!0});var YC=i(ka);Iu=r(YC,"SPAN",{});var ZC=i(Iu);w(Kl.$$.fragment,ZC),ZC.forEach(t),YC.forEach(t),t4=p(ib),Du=r(ib,"SPAN",{});var eq=i(Du);o4=n(eq,"TFRobertaForQuestionAnswering"),eq.forEach(t),ib.forEach(t),Bg=p(s),_t=r(s,"DIV",{class:!0});var uo=i(_t);w(Jl.$$.fragment,uo),n4=p(uo),Sn=r(uo,"P",{});var ah=i(Sn);s4=n(ah,`RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Su=r(ah,"CODE",{});var tq=i(Su);a4=n(tq,"span start logits"),tq.forEach(t),r4=n(ah," and "),Bu=r(ah,"CODE",{});var oq=i(Bu);i4=n(oq,"span end logits"),oq.forEach(t),l4=n(ah,")."),ah.forEach(t),d4=p(uo),Vl=r(uo,"P",{});var lb=i(Vl);c4=n(lb,"This model inherits from "),qp=r(lb,"A",{href:!0});var nq=i(qp);p4=n(nq,"TFPreTrainedModel"),nq.forEach(t),h4=n(lb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lb.forEach(t),u4=p(uo),Gl=r(uo,"P",{});var db=i(Gl);f4=n(db,"This model is also a "),Xl=r(db,"A",{href:!0,rel:!0});var sq=i(Xl);m4=n(sq,"tf.keras.Model"),sq.forEach(t),g4=n(db,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),db.forEach(t),_4=p(uo),w(va.$$.fragment,uo),b4=p(uo),Ot=r(uo,"DIV",{class:!0});var sn=i(Ot);w(Yl.$$.fragment,sn),k4=p(sn),Bn=r(sn,"P",{});var rh=i(Bn);v4=n(rh,"The "),jp=r(rh,"A",{href:!0});var aq=i(jp);y4=n(aq,"TFRobertaForQuestionAnswering"),aq.forEach(t),w4=n(rh," forward method, overrides the "),Wu=r(rh,"CODE",{});var rq=i(Wu);T4=n(rq,"__call__"),rq.forEach(t),$4=n(rh," special method."),rh.forEach(t),F4=p(sn),w(ya.$$.fragment,sn),x4=p(sn),w(wa.$$.fragment,sn),R4=p(sn),w(Ta.$$.fragment,sn),sn.forEach(t),uo.forEach(t),Wg=p(s),Wn=r(s,"H2",{class:!0});var cb=i(Wn);$a=r(cb,"A",{id:!0,class:!0,href:!0});var iq=i($a);Uu=r(iq,"SPAN",{});var lq=i(Uu);w(Zl.$$.fragment,lq),lq.forEach(t),iq.forEach(t),E4=p(cb),Hu=r(cb,"SPAN",{});var dq=i(Hu);M4=n(dq,"FlaxRobertaModel"),dq.forEach(t),cb.forEach(t),Ug=p(s),nt=r(s,"DIV",{class:!0});var Dt=i(nt);w(ed.$$.fragment,Dt),z4=p(Dt),Qu=r(Dt,"P",{});var cq=i(Qu);C4=n(cq,"The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),cq.forEach(t),q4=p(Dt),td=r(Dt,"P",{});var pb=i(td);j4=n(pb,"This model inherits from "),Pp=r(pb,"A",{href:!0});var pq=i(Pp);P4=n(pq,"FlaxPreTrainedModel"),pq.forEach(t),A4=n(pb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),pb.forEach(t),L4=p(Dt),od=r(Dt,"P",{});var hb=i(od);O4=n(hb,"This model is also a Flax Linen "),nd=r(hb,"A",{href:!0,rel:!0});var hq=i(nd);N4=n(hq,"flax.linen.Module"),hq.forEach(t),I4=n(hb,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),hb.forEach(t),D4=p(Dt),Ku=r(Dt,"P",{});var uq=i(Ku);S4=n(uq,"Finally, this model supports inherent JAX features such as:"),uq.forEach(t),B4=p(Dt),mo=r(Dt,"UL",{});var Za=i(mo);Ju=r(Za,"LI",{});var fq=i(Ju);sd=r(fq,"A",{href:!0,rel:!0});var mq=i(sd);W4=n(mq,"Just-In-Time (JIT) compilation"),mq.forEach(t),fq.forEach(t),U4=p(Za),Vu=r(Za,"LI",{});var gq=i(Vu);ad=r(gq,"A",{href:!0,rel:!0});var _q=i(ad);H4=n(_q,"Automatic Differentiation"),_q.forEach(t),gq.forEach(t),Q4=p(Za),Gu=r(Za,"LI",{});var bq=i(Gu);rd=r(bq,"A",{href:!0,rel:!0});var kq=i(rd);K4=n(kq,"Vectorization"),kq.forEach(t),bq.forEach(t),J4=p(Za),Xu=r(Za,"LI",{});var vq=i(Xu);id=r(vq,"A",{href:!0,rel:!0});var yq=i(id);V4=n(yq,"Parallelization"),yq.forEach(t),vq.forEach(t),Za.forEach(t),G4=p(Dt),eo=r(Dt,"DIV",{class:!0});var er=i(eo);w(ld.$$.fragment,er),X4=p(er),Un=r(er,"P",{});var ih=i(Un);Y4=n(ih,"The "),Yu=r(ih,"CODE",{});var wq=i(Yu);Z4=n(wq,"FlaxRobertaPreTrainedModel"),wq.forEach(t),eF=n(ih," forward method, overrides the "),Zu=r(ih,"CODE",{});var Tq=i(Zu);tF=n(Tq,"__call__"),Tq.forEach(t),oF=n(ih," special method."),ih.forEach(t),nF=p(er),w(Fa.$$.fragment,er),sF=p(er),w(xa.$$.fragment,er),er.forEach(t),Dt.forEach(t),Hg=p(s),Hn=r(s,"H2",{class:!0});var ub=i(Hn);Ra=r(ub,"A",{id:!0,class:!0,href:!0});var $q=i(Ra);ef=r($q,"SPAN",{});var Fq=i(ef);w(dd.$$.fragment,Fq),Fq.forEach(t),$q.forEach(t),aF=p(ub),tf=r(ub,"SPAN",{});var xq=i(tf);rF=n(xq,"FlaxRobertaForCausalLM"),xq.forEach(t),ub.forEach(t),Qg=p(s),st=r(s,"DIV",{class:!0});var St=i(st);w(cd.$$.fragment,St),iF=p(St),of=r(St,"P",{});var Rq=i(of);lF=n(Rq,`Roberta Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),Rq.forEach(t),dF=p(St),pd=r(St,"P",{});var fb=i(pd);cF=n(fb,"This model inherits from "),Ap=r(fb,"A",{href:!0});var Eq=i(Ap);pF=n(Eq,"FlaxPreTrainedModel"),Eq.forEach(t),hF=n(fb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),fb.forEach(t),uF=p(St),hd=r(St,"P",{});var mb=i(hd);fF=n(mb,"This model is also a Flax Linen "),ud=r(mb,"A",{href:!0,rel:!0});var Mq=i(ud);mF=n(Mq,"flax.linen.Module"),Mq.forEach(t),gF=n(mb,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),mb.forEach(t),_F=p(St),nf=r(St,"P",{});var zq=i(nf);bF=n(zq,"Finally, this model supports inherent JAX features such as:"),zq.forEach(t),kF=p(St),go=r(St,"UL",{});var tr=i(go);sf=r(tr,"LI",{});var Cq=i(sf);fd=r(Cq,"A",{href:!0,rel:!0});var qq=i(fd);vF=n(qq,"Just-In-Time (JIT) compilation"),qq.forEach(t),Cq.forEach(t),yF=p(tr),af=r(tr,"LI",{});var jq=i(af);md=r(jq,"A",{href:!0,rel:!0});var Pq=i(md);wF=n(Pq,"Automatic Differentiation"),Pq.forEach(t),jq.forEach(t),TF=p(tr),rf=r(tr,"LI",{});var Aq=i(rf);gd=r(Aq,"A",{href:!0,rel:!0});var Lq=i(gd);$F=n(Lq,"Vectorization"),Lq.forEach(t),Aq.forEach(t),FF=p(tr),lf=r(tr,"LI",{});var Oq=i(lf);_d=r(Oq,"A",{href:!0,rel:!0});var Nq=i(_d);xF=n(Nq,"Parallelization"),Nq.forEach(t),Oq.forEach(t),tr.forEach(t),RF=p(St),to=r(St,"DIV",{class:!0});var or=i(to);w(bd.$$.fragment,or),EF=p(or),Qn=r(or,"P",{});var lh=i(Qn);MF=n(lh,"The "),df=r(lh,"CODE",{});var Iq=i(df);zF=n(Iq,"FlaxRobertaPreTrainedModel"),Iq.forEach(t),CF=n(lh," forward method, overrides the "),cf=r(lh,"CODE",{});var Dq=i(cf);qF=n(Dq,"__call__"),Dq.forEach(t),jF=n(lh," special method."),lh.forEach(t),PF=p(or),w(Ea.$$.fragment,or),AF=p(or),w(Ma.$$.fragment,or),or.forEach(t),St.forEach(t),Kg=p(s),Kn=r(s,"H2",{class:!0});var gb=i(Kn);za=r(gb,"A",{id:!0,class:!0,href:!0});var Sq=i(za);pf=r(Sq,"SPAN",{});var Bq=i(pf);w(kd.$$.fragment,Bq),Bq.forEach(t),Sq.forEach(t),LF=p(gb),hf=r(gb,"SPAN",{});var Wq=i(hf);OF=n(Wq,"FlaxRobertaForMaskedLM"),Wq.forEach(t),gb.forEach(t),Jg=p(s),at=r(s,"DIV",{class:!0});var Bt=i(at);w(vd.$$.fragment,Bt),NF=p(Bt),yd=r(Bt,"P",{});var _b=i(yd);IF=n(_b,"RoBERTa Model with a "),uf=r(_b,"CODE",{});var Uq=i(uf);DF=n(Uq,"language modeling"),Uq.forEach(t),SF=n(_b," head on top."),_b.forEach(t),BF=p(Bt),wd=r(Bt,"P",{});var bb=i(wd);WF=n(bb,"This model inherits from "),Lp=r(bb,"A",{href:!0});var Hq=i(Lp);UF=n(Hq,"FlaxPreTrainedModel"),Hq.forEach(t),HF=n(bb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),bb.forEach(t),QF=p(Bt),Td=r(Bt,"P",{});var kb=i(Td);KF=n(kb,"This model is also a Flax Linen "),$d=r(kb,"A",{href:!0,rel:!0});var Qq=i($d);JF=n(Qq,"flax.linen.Module"),Qq.forEach(t),VF=n(kb,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),kb.forEach(t),GF=p(Bt),ff=r(Bt,"P",{});var Kq=i(ff);XF=n(Kq,"Finally, this model supports inherent JAX features such as:"),Kq.forEach(t),YF=p(Bt),_o=r(Bt,"UL",{});var nr=i(_o);mf=r(nr,"LI",{});var Jq=i(mf);Fd=r(Jq,"A",{href:!0,rel:!0});var Vq=i(Fd);ZF=n(Vq,"Just-In-Time (JIT) compilation"),Vq.forEach(t),Jq.forEach(t),ex=p(nr),gf=r(nr,"LI",{});var Gq=i(gf);xd=r(Gq,"A",{href:!0,rel:!0});var Xq=i(xd);tx=n(Xq,"Automatic Differentiation"),Xq.forEach(t),Gq.forEach(t),ox=p(nr),_f=r(nr,"LI",{});var Yq=i(_f);Rd=r(Yq,"A",{href:!0,rel:!0});var Zq=i(Rd);nx=n(Zq,"Vectorization"),Zq.forEach(t),Yq.forEach(t),sx=p(nr),bf=r(nr,"LI",{});var ej=i(bf);Ed=r(ej,"A",{href:!0,rel:!0});var tj=i(Ed);ax=n(tj,"Parallelization"),tj.forEach(t),ej.forEach(t),nr.forEach(t),rx=p(Bt),oo=r(Bt,"DIV",{class:!0});var sr=i(oo);w(Md.$$.fragment,sr),ix=p(sr),Jn=r(sr,"P",{});var dh=i(Jn);lx=n(dh,"The "),kf=r(dh,"CODE",{});var oj=i(kf);dx=n(oj,"FlaxRobertaPreTrainedModel"),oj.forEach(t),cx=n(dh," forward method, overrides the "),vf=r(dh,"CODE",{});var nj=i(vf);px=n(nj,"__call__"),nj.forEach(t),hx=n(dh," special method."),dh.forEach(t),ux=p(sr),w(Ca.$$.fragment,sr),fx=p(sr),w(qa.$$.fragment,sr),sr.forEach(t),Bt.forEach(t),Vg=p(s),Vn=r(s,"H2",{class:!0});var vb=i(Vn);ja=r(vb,"A",{id:!0,class:!0,href:!0});var sj=i(ja);yf=r(sj,"SPAN",{});var aj=i(yf);w(zd.$$.fragment,aj),aj.forEach(t),sj.forEach(t),mx=p(vb),wf=r(vb,"SPAN",{});var rj=i(wf);gx=n(rj,"FlaxRobertaForSequenceClassification"),rj.forEach(t),vb.forEach(t),Gg=p(s),rt=r(s,"DIV",{class:!0});var Wt=i(rt);w(Cd.$$.fragment,Wt),_x=p(Wt),Tf=r(Wt,"P",{});var ij=i(Tf);bx=n(ij,`Roberta Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),ij.forEach(t),kx=p(Wt),qd=r(Wt,"P",{});var yb=i(qd);vx=n(yb,"This model inherits from "),Op=r(yb,"A",{href:!0});var lj=i(Op);yx=n(lj,"FlaxPreTrainedModel"),lj.forEach(t),wx=n(yb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),yb.forEach(t),Tx=p(Wt),jd=r(Wt,"P",{});var wb=i(jd);$x=n(wb,"This model is also a Flax Linen "),Pd=r(wb,"A",{href:!0,rel:!0});var dj=i(Pd);Fx=n(dj,"flax.linen.Module"),dj.forEach(t),xx=n(wb,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),wb.forEach(t),Rx=p(Wt),$f=r(Wt,"P",{});var cj=i($f);Ex=n(cj,"Finally, this model supports inherent JAX features such as:"),cj.forEach(t),Mx=p(Wt),bo=r(Wt,"UL",{});var ar=i(bo);Ff=r(ar,"LI",{});var pj=i(Ff);Ad=r(pj,"A",{href:!0,rel:!0});var hj=i(Ad);zx=n(hj,"Just-In-Time (JIT) compilation"),hj.forEach(t),pj.forEach(t),Cx=p(ar),xf=r(ar,"LI",{});var uj=i(xf);Ld=r(uj,"A",{href:!0,rel:!0});var fj=i(Ld);qx=n(fj,"Automatic Differentiation"),fj.forEach(t),uj.forEach(t),jx=p(ar),Rf=r(ar,"LI",{});var mj=i(Rf);Od=r(mj,"A",{href:!0,rel:!0});var gj=i(Od);Px=n(gj,"Vectorization"),gj.forEach(t),mj.forEach(t),Ax=p(ar),Ef=r(ar,"LI",{});var _j=i(Ef);Nd=r(_j,"A",{href:!0,rel:!0});var bj=i(Nd);Lx=n(bj,"Parallelization"),bj.forEach(t),_j.forEach(t),ar.forEach(t),Ox=p(Wt),no=r(Wt,"DIV",{class:!0});var rr=i(no);w(Id.$$.fragment,rr),Nx=p(rr),Gn=r(rr,"P",{});var ch=i(Gn);Ix=n(ch,"The "),Mf=r(ch,"CODE",{});var kj=i(Mf);Dx=n(kj,"FlaxRobertaPreTrainedModel"),kj.forEach(t),Sx=n(ch," forward method, overrides the "),zf=r(ch,"CODE",{});var vj=i(zf);Bx=n(vj,"__call__"),vj.forEach(t),Wx=n(ch," special method."),ch.forEach(t),Ux=p(rr),w(Pa.$$.fragment,rr),Hx=p(rr),w(Aa.$$.fragment,rr),rr.forEach(t),Wt.forEach(t),Xg=p(s),Xn=r(s,"H2",{class:!0});var Tb=i(Xn);La=r(Tb,"A",{id:!0,class:!0,href:!0});var yj=i(La);Cf=r(yj,"SPAN",{});var wj=i(Cf);w(Dd.$$.fragment,wj),wj.forEach(t),yj.forEach(t),Qx=p(Tb),qf=r(Tb,"SPAN",{});var Tj=i(qf);Kx=n(Tj,"FlaxRobertaForMultipleChoice"),Tj.forEach(t),Tb.forEach(t),Yg=p(s),it=r(s,"DIV",{class:!0});var Ut=i(it);w(Sd.$$.fragment,Ut),Jx=p(Ut),jf=r(Ut,"P",{});var $j=i(jf);Vx=n($j,`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),$j.forEach(t),Gx=p(Ut),Bd=r(Ut,"P",{});var $b=i(Bd);Xx=n($b,"This model inherits from "),Np=r($b,"A",{href:!0});var Fj=i(Np);Yx=n(Fj,"FlaxPreTrainedModel"),Fj.forEach(t),Zx=n($b,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),$b.forEach(t),eR=p(Ut),Wd=r(Ut,"P",{});var Fb=i(Wd);tR=n(Fb,"This model is also a Flax Linen "),Ud=r(Fb,"A",{href:!0,rel:!0});var xj=i(Ud);oR=n(xj,"flax.linen.Module"),xj.forEach(t),nR=n(Fb,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Fb.forEach(t),sR=p(Ut),Pf=r(Ut,"P",{});var Rj=i(Pf);aR=n(Rj,"Finally, this model supports inherent JAX features such as:"),Rj.forEach(t),rR=p(Ut),ko=r(Ut,"UL",{});var ir=i(ko);Af=r(ir,"LI",{});var Ej=i(Af);Hd=r(Ej,"A",{href:!0,rel:!0});var Mj=i(Hd);iR=n(Mj,"Just-In-Time (JIT) compilation"),Mj.forEach(t),Ej.forEach(t),lR=p(ir),Lf=r(ir,"LI",{});var zj=i(Lf);Qd=r(zj,"A",{href:!0,rel:!0});var Cj=i(Qd);dR=n(Cj,"Automatic Differentiation"),Cj.forEach(t),zj.forEach(t),cR=p(ir),Of=r(ir,"LI",{});var qj=i(Of);Kd=r(qj,"A",{href:!0,rel:!0});var jj=i(Kd);pR=n(jj,"Vectorization"),jj.forEach(t),qj.forEach(t),hR=p(ir),Nf=r(ir,"LI",{});var Pj=i(Nf);Jd=r(Pj,"A",{href:!0,rel:!0});var Aj=i(Jd);uR=n(Aj,"Parallelization"),Aj.forEach(t),Pj.forEach(t),ir.forEach(t),fR=p(Ut),so=r(Ut,"DIV",{class:!0});var lr=i(so);w(Vd.$$.fragment,lr),mR=p(lr),Yn=r(lr,"P",{});var ph=i(Yn);gR=n(ph,"The "),If=r(ph,"CODE",{});var Lj=i(If);_R=n(Lj,"FlaxRobertaPreTrainedModel"),Lj.forEach(t),bR=n(ph," forward method, overrides the "),Df=r(ph,"CODE",{});var Oj=i(Df);kR=n(Oj,"__call__"),Oj.forEach(t),vR=n(ph," special method."),ph.forEach(t),yR=p(lr),w(Oa.$$.fragment,lr),wR=p(lr),w(Na.$$.fragment,lr),lr.forEach(t),Ut.forEach(t),Zg=p(s),Zn=r(s,"H2",{class:!0});var xb=i(Zn);Ia=r(xb,"A",{id:!0,class:!0,href:!0});var Nj=i(Ia);Sf=r(Nj,"SPAN",{});var Ij=i(Sf);w(Gd.$$.fragment,Ij),Ij.forEach(t),Nj.forEach(t),TR=p(xb),Bf=r(xb,"SPAN",{});var Dj=i(Bf);$R=n(Dj,"FlaxRobertaForTokenClassification"),Dj.forEach(t),xb.forEach(t),e_=p(s),lt=r(s,"DIV",{class:!0});var Ht=i(lt);w(Xd.$$.fragment,Ht),FR=p(Ht),Wf=r(Ht,"P",{});var Sj=i(Wf);xR=n(Sj,`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Sj.forEach(t),RR=p(Ht),Yd=r(Ht,"P",{});var Rb=i(Yd);ER=n(Rb,"This model inherits from "),Ip=r(Rb,"A",{href:!0});var Bj=i(Ip);MR=n(Bj,"FlaxPreTrainedModel"),Bj.forEach(t),zR=n(Rb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Rb.forEach(t),CR=p(Ht),Zd=r(Ht,"P",{});var Eb=i(Zd);qR=n(Eb,"This model is also a Flax Linen "),ec=r(Eb,"A",{href:!0,rel:!0});var Wj=i(ec);jR=n(Wj,"flax.linen.Module"),Wj.forEach(t),PR=n(Eb,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Eb.forEach(t),AR=p(Ht),Uf=r(Ht,"P",{});var Uj=i(Uf);LR=n(Uj,"Finally, this model supports inherent JAX features such as:"),Uj.forEach(t),OR=p(Ht),vo=r(Ht,"UL",{});var dr=i(vo);Hf=r(dr,"LI",{});var Hj=i(Hf);tc=r(Hj,"A",{href:!0,rel:!0});var Qj=i(tc);NR=n(Qj,"Just-In-Time (JIT) compilation"),Qj.forEach(t),Hj.forEach(t),IR=p(dr),Qf=r(dr,"LI",{});var Kj=i(Qf);oc=r(Kj,"A",{href:!0,rel:!0});var Jj=i(oc);DR=n(Jj,"Automatic Differentiation"),Jj.forEach(t),Kj.forEach(t),SR=p(dr),Kf=r(dr,"LI",{});var Vj=i(Kf);nc=r(Vj,"A",{href:!0,rel:!0});var Gj=i(nc);BR=n(Gj,"Vectorization"),Gj.forEach(t),Vj.forEach(t),WR=p(dr),Jf=r(dr,"LI",{});var Xj=i(Jf);sc=r(Xj,"A",{href:!0,rel:!0});var Yj=i(sc);UR=n(Yj,"Parallelization"),Yj.forEach(t),Xj.forEach(t),dr.forEach(t),HR=p(Ht),ao=r(Ht,"DIV",{class:!0});var cr=i(ao);w(ac.$$.fragment,cr),QR=p(cr),es=r(cr,"P",{});var hh=i(es);KR=n(hh,"The "),Vf=r(hh,"CODE",{});var Zj=i(Vf);JR=n(Zj,"FlaxRobertaPreTrainedModel"),Zj.forEach(t),VR=n(hh," forward method, overrides the "),Gf=r(hh,"CODE",{});var e3=i(Gf);GR=n(e3,"__call__"),e3.forEach(t),XR=n(hh," special method."),hh.forEach(t),YR=p(cr),w(Da.$$.fragment,cr),ZR=p(cr),w(Sa.$$.fragment,cr),cr.forEach(t),Ht.forEach(t),t_=p(s),ts=r(s,"H2",{class:!0});var Mb=i(ts);Ba=r(Mb,"A",{id:!0,class:!0,href:!0});var t3=i(Ba);Xf=r(t3,"SPAN",{});var o3=i(Xf);w(rc.$$.fragment,o3),o3.forEach(t),t3.forEach(t),eE=p(Mb),Yf=r(Mb,"SPAN",{});var n3=i(Yf);tE=n(n3,"FlaxRobertaForQuestionAnswering"),n3.forEach(t),Mb.forEach(t),o_=p(s),dt=r(s,"DIV",{class:!0});var Qt=i(dt);w(ic.$$.fragment,Qt),oE=p(Qt),os=r(Qt,"P",{});var uh=i(os);nE=n(uh,`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Zf=r(uh,"CODE",{});var s3=i(Zf);sE=n(s3,"span start logits"),s3.forEach(t),aE=n(uh," and "),em=r(uh,"CODE",{});var a3=i(em);rE=n(a3,"span end logits"),a3.forEach(t),iE=n(uh,")."),uh.forEach(t),lE=p(Qt),lc=r(Qt,"P",{});var zb=i(lc);dE=n(zb,"This model inherits from "),Dp=r(zb,"A",{href:!0});var r3=i(Dp);cE=n(r3,"FlaxPreTrainedModel"),r3.forEach(t),pE=n(zb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),zb.forEach(t),hE=p(Qt),dc=r(Qt,"P",{});var Cb=i(dc);uE=n(Cb,"This model is also a Flax Linen "),cc=r(Cb,"A",{href:!0,rel:!0});var i3=i(cc);fE=n(i3,"flax.linen.Module"),i3.forEach(t),mE=n(Cb,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Cb.forEach(t),gE=p(Qt),tm=r(Qt,"P",{});var l3=i(tm);_E=n(l3,"Finally, this model supports inherent JAX features such as:"),l3.forEach(t),bE=p(Qt),yo=r(Qt,"UL",{});var pr=i(yo);om=r(pr,"LI",{});var d3=i(om);pc=r(d3,"A",{href:!0,rel:!0});var c3=i(pc);kE=n(c3,"Just-In-Time (JIT) compilation"),c3.forEach(t),d3.forEach(t),vE=p(pr),nm=r(pr,"LI",{});var p3=i(nm);hc=r(p3,"A",{href:!0,rel:!0});var h3=i(hc);yE=n(h3,"Automatic Differentiation"),h3.forEach(t),p3.forEach(t),wE=p(pr),sm=r(pr,"LI",{});var u3=i(sm);uc=r(u3,"A",{href:!0,rel:!0});var f3=i(uc);TE=n(f3,"Vectorization"),f3.forEach(t),u3.forEach(t),$E=p(pr),am=r(pr,"LI",{});var m3=i(am);fc=r(m3,"A",{href:!0,rel:!0});var g3=i(fc);FE=n(g3,"Parallelization"),g3.forEach(t),m3.forEach(t),pr.forEach(t),xE=p(Qt),ro=r(Qt,"DIV",{class:!0});var hr=i(ro);w(mc.$$.fragment,hr),RE=p(hr),ns=r(hr,"P",{});var fh=i(ns);EE=n(fh,"The "),rm=r(fh,"CODE",{});var _3=i(rm);ME=n(_3,"FlaxRobertaPreTrainedModel"),_3.forEach(t),zE=n(fh," forward method, overrides the "),im=r(fh,"CODE",{});var b3=i(im);CE=n(b3,"__call__"),b3.forEach(t),qE=n(fh," special method."),fh.forEach(t),jE=p(hr),w(Wa.$$.fragment,hr),PE=p(hr),w(Ua.$$.fragment,hr),hr.forEach(t),Qt.forEach(t),this.h()},h(){h(d,"name","hf:doc:metadata"),h(d,"content",JSON.stringify(P5)),h(m,"id","roberta"),h(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(m,"href","#roberta"),h(u,"class","relative group"),h(te,"id","overview"),h(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(te,"href","#overview"),h(N,"class","relative group"),h(pe,"href","https://arxiv.org/abs/1907.11692"),h(pe,"rel","nofollow"),h(j,"href","/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertModel"),h(Ue,"href","camembert"),h(Se,"href","https://huggingface.co/julien-c"),h(Se,"rel","nofollow"),h(Be,"href","https://github.com/pytorch/fairseq/tree/master/examples/roberta"),h(Be,"rel","nofollow"),h(W,"id","resources"),h(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(W,"href","#resources"),h(Oe,"class","relative group"),h(fr,"href","https://huggingface.co/blog/sentiment-analysis-twitter"),h(fr,"rel","nofollow"),h(mr,"href","https://huggingface.co/inference-api"),h(mr,"rel","nofollow"),h(_r,"href","https://huggingface.co/blog/opinion-classification-with-kili"),h(_r,"rel","nofollow"),h(kr,"href","https://colab.research.google.com/github/DhavalTaunk08/NLP_scripts/blob/master/sentiment_analysis_using_roberta.ipynb"),h(kr,"rel","nofollow"),h(Cc,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaForSequenceClassification"),h(vr,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/text-classification"),h(vr,"rel","nofollow"),h(yr,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/text_classification.ipynb"),h(yr,"rel","nofollow"),h(qc,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.TFRobertaForSequenceClassification"),h(wr,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/text-classification"),h(wr,"rel","nofollow"),h(Tr,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/text_classification-tf.ipynb"),h(Tr,"rel","nofollow"),h(jc,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.FlaxRobertaForSequenceClassification"),h($r,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/text-classification"),h($r,"rel","nofollow"),h(Fr,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/text_classification_flax.ipynb"),h(Fr,"rel","nofollow"),h(Pc,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaForTokenClassification"),h(Rr,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/token-classification"),h(Rr,"rel","nofollow"),h(Er,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/token_classification.ipynb"),h(Er,"rel","nofollow"),h(Ac,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.TFRobertaForTokenClassification"),h(Mr,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/token-classification"),h(Mr,"rel","nofollow"),h(zr,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/token_classification-tf.ipynb"),h(zr,"rel","nofollow"),h(Lc,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.FlaxRobertaForTokenClassification"),h(Cr,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/token-classification"),h(Cr,"rel","nofollow"),h(qr,"href","https://huggingface.co/course/chapter7/2?fw=pt"),h(qr,"rel","nofollow"),h(Ar,"href","https://huggingface.co/blog/how-to-train"),h(Ar,"rel","nofollow"),h(Nc,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaForMaskedLM"),h(Lr,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/language-modeling#robertabertdistilbert-and-masked-language-modeling"),h(Lr,"rel","nofollow"),h(Or,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/language_modeling.ipynb"),h(Or,"rel","nofollow"),h(Ic,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.TFRobertaForMaskedLM"),h(Nr,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/language-modeling#run_mlmpy"),h(Nr,"rel","nofollow"),h(Ir,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/language_modeling-tf.ipynb"),h(Ir,"rel","nofollow"),h(Dc,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.FlaxRobertaForMaskedLM"),h(Dr,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/language-modeling#masked-language-modeling"),h(Dr,"rel","nofollow"),h(Sr,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/masked_language_modeling_flax.ipynb"),h(Sr,"rel","nofollow"),h(Br,"href","https://huggingface.co/course/chapter7/3?fw=pt"),h(Br,"rel","nofollow"),h(Hr,"href","https://huggingface.co/blog/optimum-inference"),h(Hr,"rel","nofollow"),h(Bc,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaForQuestionAnswering"),h(Qr,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/question-answering"),h(Qr,"rel","nofollow"),h(Kr,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/question_answering.ipynb"),h(Kr,"rel","nofollow"),h(Wc,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.TFRobertaForQuestionAnswering"),h(Jr,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/question-answering"),h(Jr,"rel","nofollow"),h(Vr,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/question_answering-tf.ipynb"),h(Vr,"rel","nofollow"),h(Uc,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.FlaxRobertaForQuestionAnswering"),h(Gr,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/question-answering"),h(Gr,"rel","nofollow"),h(Xr,"href","https://huggingface.co/course/chapter7/7?fw=pt"),h(Xr,"rel","nofollow"),h(Kc,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaForMultipleChoice"),h(Yr,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/multiple-choice"),h(Yr,"rel","nofollow"),h(Zr,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/multiple_choice.ipynb"),h(Zr,"rel","nofollow"),h(Jc,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.TFRobertaForMultipleChoice"),h(ei,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/multiple-choice"),h(ei,"rel","nofollow"),h(ti,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/multiple_choice-tf.ipynb"),h(ti,"rel","nofollow"),h(ds,"id","transformers.RobertaConfig"),h(ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ds,"href","#transformers.RobertaConfig"),h(rn,"class","relative group"),h(Vc,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaModel"),h(Gc,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.TFRobertaModel"),h(si,"href","https://huggingface.co/roberta-base"),h(si,"rel","nofollow"),h(Xc,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),h(Yc,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),h(Zc,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig"),h(ep,"href","/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig"),h(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ps,"id","transformers.RobertaTokenizer"),h(ps,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ps,"href","#transformers.RobertaTokenizer"),h(cn,"class","relative group"),h(tp,"href","/docs/transformers/v4.24.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(Oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(fs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ms,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(sp,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(gs,"id","transformers.RobertaTokenizerFast"),h(gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(gs,"href","#transformers.RobertaTokenizerFast"),h(pn,"class","relative group"),h(ap,"href","/docs/transformers/v4.24.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),h(rp,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ks,"id","transformers.RobertaModel"),h(ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ks,"href","#transformers.RobertaModel"),h(hn,"class","relative group"),h(ip,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),h(Fi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Fi,"rel","nofollow"),h(Ri,"href","https://arxiv.org/abs/1706.03762"),h(Ri,"rel","nofollow"),h(lp,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaModel"),h(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ts,"id","transformers.RobertaForCausalLM"),h(Ts,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ts,"href","#transformers.RobertaForCausalLM"),h(fn,"class","relative group"),h(dp,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),h(Pi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Pi,"rel","nofollow"),h(cp,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaForCausalLM"),h(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(xs,"id","transformers.RobertaForMaskedLM"),h(xs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(xs,"href","#transformers.RobertaForMaskedLM"),h(gn,"class","relative group"),h(pp,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),h(Si,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Si,"rel","nofollow"),h(hp,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaForMaskedLM"),h(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(zs,"id","transformers.RobertaForSequenceClassification"),h(zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(zs,"href","#transformers.RobertaForSequenceClassification"),h(bn,"class","relative group"),h(up,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),h(Ki,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Ki,"rel","nofollow"),h(fp,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaForSequenceClassification"),h(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ls,"id","transformers.RobertaForMultipleChoice"),h(Ls,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ls,"href","#transformers.RobertaForMultipleChoice"),h(vn,"class","relative group"),h(mp,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),h(Zi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Zi,"rel","nofollow"),h(gp,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaForMultipleChoice"),h(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Is,"id","transformers.RobertaForTokenClassification"),h(Is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Is,"href","#transformers.RobertaForTokenClassification"),h(wn,"class","relative group"),h(_p,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),h(al,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(al,"rel","nofollow"),h(bp,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaForTokenClassification"),h(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ws,"id","transformers.RobertaForQuestionAnswering"),h(Ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ws,"href","#transformers.RobertaForQuestionAnswering"),h($n,"class","relative group"),h(kp,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),h(pl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(pl,"rel","nofollow"),h(vp,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaForQuestionAnswering"),h(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ks,"id","transformers.TFRobertaModel"),h(Ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ks,"href","#transformers.TFRobertaModel"),h(Rn,"class","relative group"),h(yp,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),h(_l,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(_l,"rel","nofollow"),h(wp,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.TFRobertaModel"),h(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Xs,"id","transformers.TFRobertaForCausalLM"),h(Xs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Xs,"href","#transformers.TFRobertaForCausalLM"),h(Mn,"class","relative group"),h(Tp,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.TFRobertaForCausalLM"),h(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(zn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ea,"id","transformers.TFRobertaForMaskedLM"),h(ea,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ea,"href","#transformers.TFRobertaForMaskedLM"),h(qn,"class","relative group"),h($p,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),h(Rl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Rl,"rel","nofollow"),h(Fp,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.TFRobertaForMaskedLM"),h(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(aa,"id","transformers.TFRobertaForSequenceClassification"),h(aa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(aa,"href","#transformers.TFRobertaForSequenceClassification"),h(Pn,"class","relative group"),h(xp,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),h(jl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(jl,"rel","nofollow"),h(Rp,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.TFRobertaForSequenceClassification"),h(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ca,"id","transformers.TFRobertaForMultipleChoice"),h(ca,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ca,"href","#transformers.TFRobertaForMultipleChoice"),h(Ln,"class","relative group"),h(Ep,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),h(Il,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Il,"rel","nofollow"),h(Mp,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.TFRobertaForMultipleChoice"),h(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(fa,"id","transformers.TFRobertaForTokenClassification"),h(fa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(fa,"href","#transformers.TFRobertaForTokenClassification"),h(Nn,"class","relative group"),h(zp,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),h(Hl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Hl,"rel","nofollow"),h(Cp,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.TFRobertaForTokenClassification"),h(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ka,"id","transformers.TFRobertaForQuestionAnswering"),h(ka,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ka,"href","#transformers.TFRobertaForQuestionAnswering"),h(Dn,"class","relative group"),h(qp,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),h(Xl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Xl,"rel","nofollow"),h(jp,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.TFRobertaForQuestionAnswering"),h(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h($a,"id","transformers.FlaxRobertaModel"),h($a,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h($a,"href","#transformers.FlaxRobertaModel"),h(Wn,"class","relative group"),h(Pp,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(nd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),h(nd,"rel","nofollow"),h(sd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(sd,"rel","nofollow"),h(ad,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(ad,"rel","nofollow"),h(rd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(rd,"rel","nofollow"),h(id,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(id,"rel","nofollow"),h(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ra,"id","transformers.FlaxRobertaForCausalLM"),h(Ra,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ra,"href","#transformers.FlaxRobertaForCausalLM"),h(Hn,"class","relative group"),h(Ap,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(ud,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),h(ud,"rel","nofollow"),h(fd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(fd,"rel","nofollow"),h(md,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(md,"rel","nofollow"),h(gd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(gd,"rel","nofollow"),h(_d,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(_d,"rel","nofollow"),h(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(za,"id","transformers.FlaxRobertaForMaskedLM"),h(za,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(za,"href","#transformers.FlaxRobertaForMaskedLM"),h(Kn,"class","relative group"),h(Lp,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),h($d,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),h($d,"rel","nofollow"),h(Fd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(Fd,"rel","nofollow"),h(xd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(xd,"rel","nofollow"),h(Rd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(Rd,"rel","nofollow"),h(Ed,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(Ed,"rel","nofollow"),h(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ja,"id","transformers.FlaxRobertaForSequenceClassification"),h(ja,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ja,"href","#transformers.FlaxRobertaForSequenceClassification"),h(Vn,"class","relative group"),h(Op,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(Pd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),h(Pd,"rel","nofollow"),h(Ad,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(Ad,"rel","nofollow"),h(Ld,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(Ld,"rel","nofollow"),h(Od,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(Od,"rel","nofollow"),h(Nd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(Nd,"rel","nofollow"),h(no,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(La,"id","transformers.FlaxRobertaForMultipleChoice"),h(La,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(La,"href","#transformers.FlaxRobertaForMultipleChoice"),h(Xn,"class","relative group"),h(Np,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(Ud,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),h(Ud,"rel","nofollow"),h(Hd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(Hd,"rel","nofollow"),h(Qd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(Qd,"rel","nofollow"),h(Kd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(Kd,"rel","nofollow"),h(Jd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(Jd,"rel","nofollow"),h(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ia,"id","transformers.FlaxRobertaForTokenClassification"),h(Ia,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ia,"href","#transformers.FlaxRobertaForTokenClassification"),h(Zn,"class","relative group"),h(Ip,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(ec,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),h(ec,"rel","nofollow"),h(tc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(tc,"rel","nofollow"),h(oc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(oc,"rel","nofollow"),h(nc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(nc,"rel","nofollow"),h(sc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(sc,"rel","nofollow"),h(ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ba,"id","transformers.FlaxRobertaForQuestionAnswering"),h(Ba,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ba,"href","#transformers.FlaxRobertaForQuestionAnswering"),h(ts,"class","relative group"),h(Dp,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(cc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),h(cc,"rel","nofollow"),h(pc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(pc,"rel","nofollow"),h(hc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(hc,"rel","nofollow"),h(uc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(uc,"rel","nofollow"),h(fc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(fc,"rel","nofollow"),h(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,g){e(document.head,d),b(s,_,g),b(s,u,g),e(u,m),e(m,k),T(l,k,null),e(u,f),e(u,E),e(E,le),b(s,Z,g),b(s,N,g),e(N,te),e(te,oe),T(M,oe,null),e(N,we),e(N,K),e(K,Te),b(s,ge,g),b(s,B,g),e(B,$e),e(B,pe),e(pe,J),e(B,Fe),b(s,_e,g),b(s,U,g),e(U,xe),b(s,be,g),b(s,H,g),e(H,Re),b(s,ke,g),b(s,ee,g),e(ee,q),e(q,P),b(s,ve,g),b(s,Q,g),e(Q,Ee),b(s,ye,g),b(s,I,g),e(I,he),e(he,Me),e(he,j),e(j,ze),e(he,V),e(I,Ce),e(I,ue),e(ue,G),e(I,qe),e(I,ne),e(ne,D),e(ne,fe),e(fe,X),e(ne,je),e(ne,se),e(se,A),e(ne,Pe),e(ne,L),e(L,Ae),e(ne,Le),e(I,v),e(I,z),e(z,Ue),e(Ue,de),e(z,Xe),b(s,Ke,g),b(s,C,g),e(C,Ye),e(C,Se),e(Se,Ze),e(C,et),e(C,Be),e(Be,S),e(C,Y),b(s,Je,g),b(s,Oe,g),e(Oe,W),e(W,He),T(We,He,null),e(Oe,Ne),e(Oe,Qe),e(Qe,ce),b(s,Ve,g),b(s,zc,g),e(zc,jb),b(s,Zm,g),T(ur,s,g),b(s,eg,g),b(s,bt,g),e(bt,an),e(an,Pb),e(an,fr),e(fr,Ab),e(an,Lb),e(an,mr),e(mr,Ob),e(an,Nb),e(bt,Ib),e(bt,gr),e(gr,Db),e(gr,_r),e(_r,Sb),e(gr,Bb),e(bt,Wb),e(bt,br),e(br,Ub),e(br,kr),e(kr,Hb),e(br,Qb),e(bt,Kb),e(bt,Fo),e(Fo,Cc),e(Cc,Jb),e(Fo,Vb),e(Fo,vr),e(vr,Gb),e(Fo,Xb),e(Fo,yr),e(yr,Yb),e(Fo,Zb),e(bt,ek),e(bt,xo),e(xo,qc),e(qc,tk),e(xo,ok),e(xo,wr),e(wr,nk),e(xo,sk),e(xo,Tr),e(Tr,ak),e(xo,rk),e(bt,ik),e(bt,Ro),e(Ro,jc),e(jc,lk),e(Ro,dk),e(Ro,$r),e($r,ck),e(Ro,pk),e(Ro,Fr),e(Fr,hk),e(Ro,uk),b(s,tg,g),T(xr,s,g),b(s,og,g),b(s,Kt,g),e(Kt,Eo),e(Eo,Pc),e(Pc,fk),e(Eo,mk),e(Eo,Rr),e(Rr,gk),e(Eo,_k),e(Eo,Er),e(Er,bk),e(Eo,kk),e(Kt,vk),e(Kt,Mo),e(Mo,Ac),e(Ac,yk),e(Mo,wk),e(Mo,Mr),e(Mr,Tk),e(Mo,$k),e(Mo,zr),e(zr,Fk),e(Mo,xk),e(Kt,Rk),e(Kt,rs),e(rs,Lc),e(Lc,Ek),e(rs,Mk),e(rs,Cr),e(Cr,zk),e(rs,Ck),e(Kt,qk),e(Kt,Oc),e(Oc,qr),e(qr,jk),e(Oc,Pk),b(s,ng,g),T(jr,s,g),b(s,sg,g),b(s,Mt,g),e(Mt,Pr),e(Pr,Ak),e(Pr,Ar),e(Ar,Lk),e(Pr,Ok),e(Mt,Nk),e(Mt,zo),e(zo,Nc),e(Nc,Ik),e(zo,Dk),e(zo,Lr),e(Lr,Sk),e(zo,Bk),e(zo,Or),e(Or,Wk),e(zo,Uk),e(Mt,Hk),e(Mt,Co),e(Co,Ic),e(Ic,Qk),e(Co,Kk),e(Co,Nr),e(Nr,Jk),e(Co,Vk),e(Co,Ir),e(Ir,Gk),e(Co,Xk),e(Mt,Yk),e(Mt,qo),e(qo,Dc),e(Dc,Zk),e(qo,ev),e(qo,Dr),e(Dr,tv),e(qo,ov),e(qo,Sr),e(Sr,nv),e(qo,sv),e(Mt,av),e(Mt,Sc),e(Sc,Br),e(Br,rv),e(Sc,iv),b(s,ag,g),T(Wr,s,g),b(s,rg,g),b(s,zt,g),e(zt,Ur),e(Ur,lv),e(Ur,Hr),e(Hr,dv),e(Ur,cv),e(zt,pv),e(zt,jo),e(jo,Bc),e(Bc,hv),e(jo,uv),e(jo,Qr),e(Qr,fv),e(jo,mv),e(jo,Kr),e(Kr,gv),e(jo,_v),e(zt,bv),e(zt,Po),e(Po,Wc),e(Wc,kv),e(Po,vv),e(Po,Jr),e(Jr,yv),e(Po,wv),e(Po,Vr),e(Vr,Tv),e(Po,$v),e(zt,Fv),e(zt,is),e(is,Uc),e(Uc,xv),e(is,Rv),e(is,Gr),e(Gr,Ev),e(is,Mv),e(zt,zv),e(zt,Hc),e(Hc,Xr),e(Xr,Cv),e(Hc,qv),b(s,ig,g),b(s,Qc,g),e(Qc,mh),e(mh,jv),b(s,lg,g),b(s,ls,g),e(ls,Ao),e(Ao,Kc),e(Kc,Pv),e(Ao,Av),e(Ao,Yr),e(Yr,Lv),e(Ao,Ov),e(Ao,Zr),e(Zr,Nv),e(Ao,Iv),e(ls,Dv),e(ls,Lo),e(Lo,Jc),e(Jc,Sv),e(Lo,Bv),e(Lo,ei),e(ei,Wv),e(Lo,Uv),e(Lo,ti),e(ti,Hv),e(Lo,Qv),b(s,dg,g),b(s,rn,g),e(rn,ds),e(ds,gh),T(oi,gh,null),e(rn,Kv),e(rn,_h),e(_h,Jv),b(s,cg,g),b(s,yt,g),T(ni,yt,null),e(yt,Vv),e(yt,fo),e(fo,Gv),e(fo,Vc),e(Vc,Xv),e(fo,Yv),e(fo,Gc),e(Gc,Zv),e(fo,ey),e(fo,si),e(si,ty),e(fo,oy),e(yt,ny),e(yt,ln),e(ln,sy),e(ln,Xc),e(Xc,ay),e(ln,ry),e(ln,Yc),e(Yc,iy),e(ln,ly),e(yt,dy),e(yt,dn),e(dn,cy),e(dn,Zc),e(Zc,py),e(dn,hy),e(dn,ep),e(ep,uy),e(dn,fy),e(yt,my),T(cs,yt,null),b(s,pg,g),b(s,cn,g),e(cn,ps),e(ps,bh),T(ai,bh,null),e(cn,gy),e(cn,kh),e(kh,_y),b(s,hg,g),b(s,Ie,g),T(ri,Ie,null),e(Ie,by),e(Ie,vh),e(vh,ky),e(Ie,vy),e(Ie,yh),e(yh,yy),e(Ie,wy),T(hs,Ie,null),e(Ie,Ty),e(Ie,ii),e(ii,$y),e(ii,wh),e(wh,Fy),e(ii,xy),e(Ie,Ry),T(us,Ie,null),e(Ie,Ey),e(Ie,li),e(li,My),e(li,tp),e(tp,zy),e(li,Cy),e(Ie,qy),e(Ie,Oo),T(di,Oo,null),e(Oo,jy),e(Oo,Th),e(Th,Py),e(Oo,Ay),e(Oo,ci),e(ci,op),e(op,Ly),e(op,$h),e($h,Oy),e(ci,Ny),e(ci,np),e(np,Iy),e(np,Fh),e(Fh,Dy),e(Ie,Sy),e(Ie,fs),T(pi,fs,null),e(fs,By),e(fs,hi),e(hi,Wy),e(hi,xh),e(xh,Uy),e(hi,Hy),e(Ie,Qy),e(Ie,ms),T(ui,ms,null),e(ms,Ky),e(ms,Rh),e(Rh,Jy),e(Ie,Vy),e(Ie,sp),T(fi,sp,null),b(s,ug,g),b(s,pn,g),e(pn,gs),e(gs,Eh),T(mi,Eh,null),e(pn,Gy),e(pn,Mh),e(Mh,Xy),b(s,fg,g),b(s,tt,g),T(gi,tt,null),e(tt,Yy),e(tt,_i),e(_i,Zy),e(_i,zh),e(zh,ew),e(_i,tw),e(tt,ow),e(tt,Ch),e(Ch,nw),e(tt,sw),T(_s,tt,null),e(tt,aw),e(tt,bi),e(bi,rw),e(bi,qh),e(qh,iw),e(bi,lw),e(tt,dw),T(bs,tt,null),e(tt,cw),e(tt,ki),e(ki,pw),e(ki,ap),e(ap,hw),e(ki,uw),e(tt,fw),e(tt,rp),T(vi,rp,null),b(s,mg,g),b(s,hn,g),e(hn,ks),e(ks,jh),T(yi,jh,null),e(hn,mw),e(hn,Ph),e(Ph,gw),b(s,gg,g),b(s,ot,g),T(wi,ot,null),e(ot,_w),e(ot,Ah),e(Ah,bw),e(ot,kw),e(ot,Ti),e(Ti,vw),e(Ti,ip),e(ip,yw),e(Ti,ww),e(ot,Tw),e(ot,$i),e($i,$w),e($i,Fi),e(Fi,Fw),e($i,xw),e(ot,Rw),e(ot,xi),e(xi,Ew),e(xi,Lh),e(Lh,Mw),e(xi,zw),e(ot,Cw),e(ot,pt),e(pt,qw),e(pt,Oh),e(Oh,jw),e(pt,Pw),e(pt,Nh),e(Nh,Aw),e(pt,Lw),e(pt,Ih),e(Ih,Ow),e(pt,Nw),e(pt,Dh),e(Dh,Iw),e(pt,Dw),e(pt,Sh),e(Sh,Sw),e(pt,Bw),e(pt,Bh),e(Bh,Ww),e(pt,Uw),e(ot,Hw),e(ot,vs),e(vs,Qw),e(vs,Wh),e(Wh,Kw),e(vs,Jw),e(vs,Ri),e(Ri,Vw),e(ot,Gw),e(ot,Jt),T(Ei,Jt,null),e(Jt,Xw),e(Jt,un),e(un,Yw),e(un,lp),e(lp,Zw),e(un,eT),e(un,Uh),e(Uh,tT),e(un,oT),e(Jt,nT),T(ys,Jt,null),e(Jt,sT),T(ws,Jt,null),b(s,_g,g),b(s,fn,g),e(fn,Ts),e(Ts,Hh),T(Mi,Hh,null),e(fn,aT),e(fn,Qh),e(Qh,rT),b(s,bg,g),b(s,wt,g),T(zi,wt,null),e(wt,iT),e(wt,Ci),e(Ci,lT),e(Ci,Kh),e(Kh,dT),e(Ci,cT),e(wt,pT),e(wt,qi),e(qi,hT),e(qi,dp),e(dp,uT),e(qi,fT),e(wt,mT),e(wt,ji),e(ji,gT),e(ji,Pi),e(Pi,_T),e(ji,bT),e(wt,kT),e(wt,Vt),T(Ai,Vt,null),e(Vt,vT),e(Vt,mn),e(mn,yT),e(mn,cp),e(cp,wT),e(mn,TT),e(mn,Jh),e(Jh,$T),e(mn,FT),e(Vt,xT),T($s,Vt,null),e(Vt,RT),T(Fs,Vt,null),b(s,kg,g),b(s,gn,g),e(gn,xs),e(xs,Vh),T(Li,Vh,null),e(gn,ET),e(gn,Gh),e(Gh,MT),b(s,vg,g),b(s,Tt,g),T(Oi,Tt,null),e(Tt,zT),e(Tt,Ni),e(Ni,CT),e(Ni,Xh),e(Xh,qT),e(Ni,jT),e(Tt,PT),e(Tt,Ii),e(Ii,AT),e(Ii,pp),e(pp,LT),e(Ii,OT),e(Tt,NT),e(Tt,Di),e(Di,IT),e(Di,Si),e(Si,DT),e(Di,ST),e(Tt,BT),e(Tt,Ct),T(Bi,Ct,null),e(Ct,WT),e(Ct,_n),e(_n,UT),e(_n,hp),e(hp,HT),e(_n,QT),e(_n,Yh),e(Yh,KT),e(_n,JT),e(Ct,VT),T(Rs,Ct,null),e(Ct,GT),T(Es,Ct,null),e(Ct,XT),T(Ms,Ct,null),b(s,yg,g),b(s,bn,g),e(bn,zs),e(zs,Zh),T(Wi,Zh,null),e(bn,YT),e(bn,eu),e(eu,ZT),b(s,wg,g),b(s,$t,g),T(Ui,$t,null),e($t,e$),e($t,tu),e(tu,t$),e($t,o$),e($t,Hi),e(Hi,n$),e(Hi,up),e(up,s$),e(Hi,a$),e($t,r$),e($t,Qi),e(Qi,i$),e(Qi,Ki),e(Ki,l$),e(Qi,d$),e($t,c$),e($t,ct),T(Ji,ct,null),e(ct,p$),e(ct,kn),e(kn,h$),e(kn,fp),e(fp,u$),e(kn,f$),e(kn,ou),e(ou,m$),e(kn,g$),e(ct,_$),T(Cs,ct,null),e(ct,b$),T(qs,ct,null),e(ct,k$),T(js,ct,null),e(ct,v$),T(Ps,ct,null),e(ct,y$),T(As,ct,null),b(s,Tg,g),b(s,vn,g),e(vn,Ls),e(Ls,nu),T(Vi,nu,null),e(vn,w$),e(vn,su),e(su,T$),b(s,$g,g),b(s,Ft,g),T(Gi,Ft,null),e(Ft,$$),e(Ft,au),e(au,F$),e(Ft,x$),e(Ft,Xi),e(Xi,R$),e(Xi,mp),e(mp,E$),e(Xi,M$),e(Ft,z$),e(Ft,Yi),e(Yi,C$),e(Yi,Zi),e(Zi,q$),e(Yi,j$),e(Ft,P$),e(Ft,Gt),T(el,Gt,null),e(Gt,A$),e(Gt,yn),e(yn,L$),e(yn,gp),e(gp,O$),e(yn,N$),e(yn,ru),e(ru,I$),e(yn,D$),e(Gt,S$),T(Os,Gt,null),e(Gt,B$),T(Ns,Gt,null),b(s,Fg,g),b(s,wn,g),e(wn,Is),e(Is,iu),T(tl,iu,null),e(wn,W$),e(wn,lu),e(lu,U$),b(s,xg,g),b(s,xt,g),T(ol,xt,null),e(xt,H$),e(xt,du),e(du,Q$),e(xt,K$),e(xt,nl),e(nl,J$),e(nl,_p),e(_p,V$),e(nl,G$),e(xt,X$),e(xt,sl),e(sl,Y$),e(sl,al),e(al,Z$),e(sl,e2),e(xt,t2),e(xt,qt),T(rl,qt,null),e(qt,o2),e(qt,Tn),e(Tn,n2),e(Tn,bp),e(bp,s2),e(Tn,a2),e(Tn,cu),e(cu,r2),e(Tn,i2),e(qt,l2),T(Ds,qt,null),e(qt,d2),T(Ss,qt,null),e(qt,c2),T(Bs,qt,null),b(s,Rg,g),b(s,$n,g),e($n,Ws),e(Ws,pu),T(il,pu,null),e($n,p2),e($n,hu),e(hu,h2),b(s,Eg,g),b(s,Rt,g),T(ll,Rt,null),e(Rt,u2),e(Rt,Fn),e(Fn,f2),e(Fn,uu),e(uu,m2),e(Fn,g2),e(Fn,fu),e(fu,_2),e(Fn,b2),e(Rt,k2),e(Rt,dl),e(dl,v2),e(dl,kp),e(kp,y2),e(dl,w2),e(Rt,T2),e(Rt,cl),e(cl,$2),e(cl,pl),e(pl,F2),e(cl,x2),e(Rt,R2),e(Rt,jt),T(hl,jt,null),e(jt,E2),e(jt,xn),e(xn,M2),e(xn,vp),e(vp,z2),e(xn,C2),e(xn,mu),e(mu,q2),e(xn,j2),e(jt,P2),T(Us,jt,null),e(jt,A2),T(Hs,jt,null),e(jt,L2),T(Qs,jt,null),b(s,Mg,g),b(s,Rn,g),e(Rn,Ks),e(Ks,gu),T(ul,gu,null),e(Rn,O2),e(Rn,_u),e(_u,N2),b(s,zg,g),b(s,ht,g),T(fl,ht,null),e(ht,I2),e(ht,bu),e(bu,D2),e(ht,S2),e(ht,ml),e(ml,B2),e(ml,yp),e(yp,W2),e(ml,U2),e(ht,H2),e(ht,gl),e(gl,Q2),e(gl,_l),e(_l,K2),e(gl,J2),e(ht,V2),T(Js,ht,null),e(ht,G2),e(ht,Xt),T(bl,Xt,null),e(Xt,X2),e(Xt,En),e(En,Y2),e(En,wp),e(wp,Z2),e(En,e1),e(En,ku),e(ku,t1),e(En,o1),e(Xt,n1),T(Vs,Xt,null),e(Xt,s1),T(Gs,Xt,null),b(s,Cg,g),b(s,Mn,g),e(Mn,Xs),e(Xs,vu),T(kl,vu,null),e(Mn,a1),e(Mn,yu),e(yu,r1),b(s,qg,g),b(s,zn,g),T(vl,zn,null),e(zn,i1),e(zn,Yt),T(yl,Yt,null),e(Yt,l1),e(Yt,Cn),e(Cn,d1),e(Cn,Tp),e(Tp,c1),e(Cn,p1),e(Cn,wu),e(wu,h1),e(Cn,u1),e(Yt,f1),T(Ys,Yt,null),e(Yt,m1),T(Zs,Yt,null),b(s,jg,g),b(s,qn,g),e(qn,ea),e(ea,Tu),T(wl,Tu,null),e(qn,g1),e(qn,$u),e($u,_1),b(s,Pg,g),b(s,ut,g),T(Tl,ut,null),e(ut,b1),e(ut,$l),e($l,k1),e($l,Fu),e(Fu,v1),e($l,y1),e(ut,w1),e(ut,Fl),e(Fl,T1),e(Fl,$p),e($p,$1),e(Fl,F1),e(ut,x1),e(ut,xl),e(xl,R1),e(xl,Rl),e(Rl,E1),e(xl,M1),e(ut,z1),T(ta,ut,null),e(ut,C1),e(ut,Pt),T(El,Pt,null),e(Pt,q1),e(Pt,jn),e(jn,j1),e(jn,Fp),e(Fp,P1),e(jn,A1),e(jn,xu),e(xu,L1),e(jn,O1),e(Pt,N1),T(oa,Pt,null),e(Pt,I1),T(na,Pt,null),e(Pt,D1),T(sa,Pt,null),b(s,Ag,g),b(s,Pn,g),e(Pn,aa),e(aa,Ru),T(Ml,Ru,null),e(Pn,S1),e(Pn,Eu),e(Eu,B1),b(s,Lg,g),b(s,ft,g),T(zl,ft,null),e(ft,W1),e(ft,Mu),e(Mu,U1),e(ft,H1),e(ft,Cl),e(Cl,Q1),e(Cl,xp),e(xp,K1),e(Cl,J1),e(ft,V1),e(ft,ql),e(ql,G1),e(ql,jl),e(jl,X1),e(ql,Y1),e(ft,Z1),T(ra,ft,null),e(ft,e0),e(ft,At),T(Pl,At,null),e(At,t0),e(At,An),e(An,o0),e(An,Rp),e(Rp,n0),e(An,s0),e(An,zu),e(zu,a0),e(An,r0),e(At,i0),T(ia,At,null),e(At,l0),T(la,At,null),e(At,d0),T(da,At,null),b(s,Og,g),b(s,Ln,g),e(Ln,ca),e(ca,Cu),T(Al,Cu,null),e(Ln,c0),e(Ln,qu),e(qu,p0),b(s,Ng,g),b(s,mt,g),T(Ll,mt,null),e(mt,h0),e(mt,ju),e(ju,u0),e(mt,f0),e(mt,Ol),e(Ol,m0),e(Ol,Ep),e(Ep,g0),e(Ol,_0),e(mt,b0),e(mt,Nl),e(Nl,k0),e(Nl,Il),e(Il,v0),e(Nl,y0),e(mt,w0),T(pa,mt,null),e(mt,T0),e(mt,Zt),T(Dl,Zt,null),e(Zt,$0),e(Zt,On),e(On,F0),e(On,Mp),e(Mp,x0),e(On,R0),e(On,Pu),e(Pu,E0),e(On,M0),e(Zt,z0),T(ha,Zt,null),e(Zt,C0),T(ua,Zt,null),b(s,Ig,g),b(s,Nn,g),e(Nn,fa),e(fa,Au),T(Sl,Au,null),e(Nn,q0),e(Nn,Lu),e(Lu,j0),b(s,Dg,g),b(s,gt,g),T(Bl,gt,null),e(gt,P0),e(gt,Ou),e(Ou,A0),e(gt,L0),e(gt,Wl),e(Wl,O0),e(Wl,zp),e(zp,N0),e(Wl,I0),e(gt,D0),e(gt,Ul),e(Ul,S0),e(Ul,Hl),e(Hl,B0),e(Ul,W0),e(gt,U0),T(ma,gt,null),e(gt,H0),e(gt,Lt),T(Ql,Lt,null),e(Lt,Q0),e(Lt,In),e(In,K0),e(In,Cp),e(Cp,J0),e(In,V0),e(In,Nu),e(Nu,G0),e(In,X0),e(Lt,Y0),T(ga,Lt,null),e(Lt,Z0),T(_a,Lt,null),e(Lt,e4),T(ba,Lt,null),b(s,Sg,g),b(s,Dn,g),e(Dn,ka),e(ka,Iu),T(Kl,Iu,null),e(Dn,t4),e(Dn,Du),e(Du,o4),b(s,Bg,g),b(s,_t,g),T(Jl,_t,null),e(_t,n4),e(_t,Sn),e(Sn,s4),e(Sn,Su),e(Su,a4),e(Sn,r4),e(Sn,Bu),e(Bu,i4),e(Sn,l4),e(_t,d4),e(_t,Vl),e(Vl,c4),e(Vl,qp),e(qp,p4),e(Vl,h4),e(_t,u4),e(_t,Gl),e(Gl,f4),e(Gl,Xl),e(Xl,m4),e(Gl,g4),e(_t,_4),T(va,_t,null),e(_t,b4),e(_t,Ot),T(Yl,Ot,null),e(Ot,k4),e(Ot,Bn),e(Bn,v4),e(Bn,jp),e(jp,y4),e(Bn,w4),e(Bn,Wu),e(Wu,T4),e(Bn,$4),e(Ot,F4),T(ya,Ot,null),e(Ot,x4),T(wa,Ot,null),e(Ot,R4),T(Ta,Ot,null),b(s,Wg,g),b(s,Wn,g),e(Wn,$a),e($a,Uu),T(Zl,Uu,null),e(Wn,E4),e(Wn,Hu),e(Hu,M4),b(s,Ug,g),b(s,nt,g),T(ed,nt,null),e(nt,z4),e(nt,Qu),e(Qu,C4),e(nt,q4),e(nt,td),e(td,j4),e(td,Pp),e(Pp,P4),e(td,A4),e(nt,L4),e(nt,od),e(od,O4),e(od,nd),e(nd,N4),e(od,I4),e(nt,D4),e(nt,Ku),e(Ku,S4),e(nt,B4),e(nt,mo),e(mo,Ju),e(Ju,sd),e(sd,W4),e(mo,U4),e(mo,Vu),e(Vu,ad),e(ad,H4),e(mo,Q4),e(mo,Gu),e(Gu,rd),e(rd,K4),e(mo,J4),e(mo,Xu),e(Xu,id),e(id,V4),e(nt,G4),e(nt,eo),T(ld,eo,null),e(eo,X4),e(eo,Un),e(Un,Y4),e(Un,Yu),e(Yu,Z4),e(Un,eF),e(Un,Zu),e(Zu,tF),e(Un,oF),e(eo,nF),T(Fa,eo,null),e(eo,sF),T(xa,eo,null),b(s,Hg,g),b(s,Hn,g),e(Hn,Ra),e(Ra,ef),T(dd,ef,null),e(Hn,aF),e(Hn,tf),e(tf,rF),b(s,Qg,g),b(s,st,g),T(cd,st,null),e(st,iF),e(st,of),e(of,lF),e(st,dF),e(st,pd),e(pd,cF),e(pd,Ap),e(Ap,pF),e(pd,hF),e(st,uF),e(st,hd),e(hd,fF),e(hd,ud),e(ud,mF),e(hd,gF),e(st,_F),e(st,nf),e(nf,bF),e(st,kF),e(st,go),e(go,sf),e(sf,fd),e(fd,vF),e(go,yF),e(go,af),e(af,md),e(md,wF),e(go,TF),e(go,rf),e(rf,gd),e(gd,$F),e(go,FF),e(go,lf),e(lf,_d),e(_d,xF),e(st,RF),e(st,to),T(bd,to,null),e(to,EF),e(to,Qn),e(Qn,MF),e(Qn,df),e(df,zF),e(Qn,CF),e(Qn,cf),e(cf,qF),e(Qn,jF),e(to,PF),T(Ea,to,null),e(to,AF),T(Ma,to,null),b(s,Kg,g),b(s,Kn,g),e(Kn,za),e(za,pf),T(kd,pf,null),e(Kn,LF),e(Kn,hf),e(hf,OF),b(s,Jg,g),b(s,at,g),T(vd,at,null),e(at,NF),e(at,yd),e(yd,IF),e(yd,uf),e(uf,DF),e(yd,SF),e(at,BF),e(at,wd),e(wd,WF),e(wd,Lp),e(Lp,UF),e(wd,HF),e(at,QF),e(at,Td),e(Td,KF),e(Td,$d),e($d,JF),e(Td,VF),e(at,GF),e(at,ff),e(ff,XF),e(at,YF),e(at,_o),e(_o,mf),e(mf,Fd),e(Fd,ZF),e(_o,ex),e(_o,gf),e(gf,xd),e(xd,tx),e(_o,ox),e(_o,_f),e(_f,Rd),e(Rd,nx),e(_o,sx),e(_o,bf),e(bf,Ed),e(Ed,ax),e(at,rx),e(at,oo),T(Md,oo,null),e(oo,ix),e(oo,Jn),e(Jn,lx),e(Jn,kf),e(kf,dx),e(Jn,cx),e(Jn,vf),e(vf,px),e(Jn,hx),e(oo,ux),T(Ca,oo,null),e(oo,fx),T(qa,oo,null),b(s,Vg,g),b(s,Vn,g),e(Vn,ja),e(ja,yf),T(zd,yf,null),e(Vn,mx),e(Vn,wf),e(wf,gx),b(s,Gg,g),b(s,rt,g),T(Cd,rt,null),e(rt,_x),e(rt,Tf),e(Tf,bx),e(rt,kx),e(rt,qd),e(qd,vx),e(qd,Op),e(Op,yx),e(qd,wx),e(rt,Tx),e(rt,jd),e(jd,$x),e(jd,Pd),e(Pd,Fx),e(jd,xx),e(rt,Rx),e(rt,$f),e($f,Ex),e(rt,Mx),e(rt,bo),e(bo,Ff),e(Ff,Ad),e(Ad,zx),e(bo,Cx),e(bo,xf),e(xf,Ld),e(Ld,qx),e(bo,jx),e(bo,Rf),e(Rf,Od),e(Od,Px),e(bo,Ax),e(bo,Ef),e(Ef,Nd),e(Nd,Lx),e(rt,Ox),e(rt,no),T(Id,no,null),e(no,Nx),e(no,Gn),e(Gn,Ix),e(Gn,Mf),e(Mf,Dx),e(Gn,Sx),e(Gn,zf),e(zf,Bx),e(Gn,Wx),e(no,Ux),T(Pa,no,null),e(no,Hx),T(Aa,no,null),b(s,Xg,g),b(s,Xn,g),e(Xn,La),e(La,Cf),T(Dd,Cf,null),e(Xn,Qx),e(Xn,qf),e(qf,Kx),b(s,Yg,g),b(s,it,g),T(Sd,it,null),e(it,Jx),e(it,jf),e(jf,Vx),e(it,Gx),e(it,Bd),e(Bd,Xx),e(Bd,Np),e(Np,Yx),e(Bd,Zx),e(it,eR),e(it,Wd),e(Wd,tR),e(Wd,Ud),e(Ud,oR),e(Wd,nR),e(it,sR),e(it,Pf),e(Pf,aR),e(it,rR),e(it,ko),e(ko,Af),e(Af,Hd),e(Hd,iR),e(ko,lR),e(ko,Lf),e(Lf,Qd),e(Qd,dR),e(ko,cR),e(ko,Of),e(Of,Kd),e(Kd,pR),e(ko,hR),e(ko,Nf),e(Nf,Jd),e(Jd,uR),e(it,fR),e(it,so),T(Vd,so,null),e(so,mR),e(so,Yn),e(Yn,gR),e(Yn,If),e(If,_R),e(Yn,bR),e(Yn,Df),e(Df,kR),e(Yn,vR),e(so,yR),T(Oa,so,null),e(so,wR),T(Na,so,null),b(s,Zg,g),b(s,Zn,g),e(Zn,Ia),e(Ia,Sf),T(Gd,Sf,null),e(Zn,TR),e(Zn,Bf),e(Bf,$R),b(s,e_,g),b(s,lt,g),T(Xd,lt,null),e(lt,FR),e(lt,Wf),e(Wf,xR),e(lt,RR),e(lt,Yd),e(Yd,ER),e(Yd,Ip),e(Ip,MR),e(Yd,zR),e(lt,CR),e(lt,Zd),e(Zd,qR),e(Zd,ec),e(ec,jR),e(Zd,PR),e(lt,AR),e(lt,Uf),e(Uf,LR),e(lt,OR),e(lt,vo),e(vo,Hf),e(Hf,tc),e(tc,NR),e(vo,IR),e(vo,Qf),e(Qf,oc),e(oc,DR),e(vo,SR),e(vo,Kf),e(Kf,nc),e(nc,BR),e(vo,WR),e(vo,Jf),e(Jf,sc),e(sc,UR),e(lt,HR),e(lt,ao),T(ac,ao,null),e(ao,QR),e(ao,es),e(es,KR),e(es,Vf),e(Vf,JR),e(es,VR),e(es,Gf),e(Gf,GR),e(es,XR),e(ao,YR),T(Da,ao,null),e(ao,ZR),T(Sa,ao,null),b(s,t_,g),b(s,ts,g),e(ts,Ba),e(Ba,Xf),T(rc,Xf,null),e(ts,eE),e(ts,Yf),e(Yf,tE),b(s,o_,g),b(s,dt,g),T(ic,dt,null),e(dt,oE),e(dt,os),e(os,nE),e(os,Zf),e(Zf,sE),e(os,aE),e(os,em),e(em,rE),e(os,iE),e(dt,lE),e(dt,lc),e(lc,dE),e(lc,Dp),e(Dp,cE),e(lc,pE),e(dt,hE),e(dt,dc),e(dc,uE),e(dc,cc),e(cc,fE),e(dc,mE),e(dt,gE),e(dt,tm),e(tm,_E),e(dt,bE),e(dt,yo),e(yo,om),e(om,pc),e(pc,kE),e(yo,vE),e(yo,nm),e(nm,hc),e(hc,yE),e(yo,wE),e(yo,sm),e(sm,uc),e(uc,TE),e(yo,$E),e(yo,am),e(am,fc),e(fc,FE),e(dt,xE),e(dt,ro),T(mc,ro,null),e(ro,RE),e(ro,ns),e(ns,EE),e(ns,rm),e(rm,ME),e(ns,zE),e(ns,im),e(im,CE),e(ns,qE),e(ro,jE),T(Wa,ro,null),e(ro,PE),T(Ua,ro,null),n_=!0},p(s,[g]){const gc={};g&2&&(gc.$$scope={dirty:g,ctx:s}),cs.$set(gc);const lm={};g&2&&(lm.$$scope={dirty:g,ctx:s}),hs.$set(lm);const dm={};g&2&&(dm.$$scope={dirty:g,ctx:s}),us.$set(dm);const cm={};g&2&&(cm.$$scope={dirty:g,ctx:s}),_s.$set(cm);const _c={};g&2&&(_c.$$scope={dirty:g,ctx:s}),bs.$set(_c);const pm={};g&2&&(pm.$$scope={dirty:g,ctx:s}),ys.$set(pm);const hm={};g&2&&(hm.$$scope={dirty:g,ctx:s}),ws.$set(hm);const um={};g&2&&(um.$$scope={dirty:g,ctx:s}),$s.$set(um);const bc={};g&2&&(bc.$$scope={dirty:g,ctx:s}),Fs.$set(bc);const fm={};g&2&&(fm.$$scope={dirty:g,ctx:s}),Rs.$set(fm);const mm={};g&2&&(mm.$$scope={dirty:g,ctx:s}),Es.$set(mm);const gm={};g&2&&(gm.$$scope={dirty:g,ctx:s}),Ms.$set(gm);const _m={};g&2&&(_m.$$scope={dirty:g,ctx:s}),Cs.$set(_m);const bm={};g&2&&(bm.$$scope={dirty:g,ctx:s}),qs.$set(bm);const km={};g&2&&(km.$$scope={dirty:g,ctx:s}),js.$set(km);const wo={};g&2&&(wo.$$scope={dirty:g,ctx:s}),Ps.$set(wo);const kc={};g&2&&(kc.$$scope={dirty:g,ctx:s}),As.$set(kc);const vm={};g&2&&(vm.$$scope={dirty:g,ctx:s}),Os.$set(vm);const ym={};g&2&&(ym.$$scope={dirty:g,ctx:s}),Ns.$set(ym);const To={};g&2&&(To.$$scope={dirty:g,ctx:s}),Ds.$set(To);const wm={};g&2&&(wm.$$scope={dirty:g,ctx:s}),Ss.$set(wm);const Tm={};g&2&&(Tm.$$scope={dirty:g,ctx:s}),Bs.$set(Tm);const $m={};g&2&&($m.$$scope={dirty:g,ctx:s}),Us.$set($m);const Sp={};g&2&&(Sp.$$scope={dirty:g,ctx:s}),Hs.$set(Sp);const Fm={};g&2&&(Fm.$$scope={dirty:g,ctx:s}),Qs.$set(Fm);const ss={};g&2&&(ss.$$scope={dirty:g,ctx:s}),Js.$set(ss);const xm={};g&2&&(xm.$$scope={dirty:g,ctx:s}),Vs.$set(xm);const Rm={};g&2&&(Rm.$$scope={dirty:g,ctx:s}),Gs.$set(Rm);const vc={};g&2&&(vc.$$scope={dirty:g,ctx:s}),Ys.$set(vc);const Em={};g&2&&(Em.$$scope={dirty:g,ctx:s}),Zs.$set(Em);const Mm={};g&2&&(Mm.$$scope={dirty:g,ctx:s}),ta.$set(Mm);const zm={};g&2&&(zm.$$scope={dirty:g,ctx:s}),oa.$set(zm);const Cm={};g&2&&(Cm.$$scope={dirty:g,ctx:s}),na.$set(Cm);const Et={};g&2&&(Et.$$scope={dirty:g,ctx:s}),sa.$set(Et);const as={};g&2&&(as.$$scope={dirty:g,ctx:s}),ra.$set(as);const qm={};g&2&&(qm.$$scope={dirty:g,ctx:s}),ia.$set(qm);const jm={};g&2&&(jm.$$scope={dirty:g,ctx:s}),la.$set(jm);const yc={};g&2&&(yc.$$scope={dirty:g,ctx:s}),da.$set(yc);const Pm={};g&2&&(Pm.$$scope={dirty:g,ctx:s}),pa.$set(Pm);const wc={};g&2&&(wc.$$scope={dirty:g,ctx:s}),ha.$set(wc);const Am={};g&2&&(Am.$$scope={dirty:g,ctx:s}),ua.$set(Am);const No={};g&2&&(No.$$scope={dirty:g,ctx:s}),ma.$set(No);const Lm={};g&2&&(Lm.$$scope={dirty:g,ctx:s}),ga.$set(Lm);const Om={};g&2&&(Om.$$scope={dirty:g,ctx:s}),_a.$set(Om);const Nm={};g&2&&(Nm.$$scope={dirty:g,ctx:s}),ba.$set(Nm);const Io={};g&2&&(Io.$$scope={dirty:g,ctx:s}),va.$set(Io);const Im={};g&2&&(Im.$$scope={dirty:g,ctx:s}),ya.$set(Im);const Dm={};g&2&&(Dm.$$scope={dirty:g,ctx:s}),wa.$set(Dm);const Sm={};g&2&&(Sm.$$scope={dirty:g,ctx:s}),Ta.$set(Sm);const Do={};g&2&&(Do.$$scope={dirty:g,ctx:s}),Fa.$set(Do);const Bm={};g&2&&(Bm.$$scope={dirty:g,ctx:s}),xa.$set(Bm);const Wm={};g&2&&(Wm.$$scope={dirty:g,ctx:s}),Ea.$set(Wm);const Um={};g&2&&(Um.$$scope={dirty:g,ctx:s}),Ma.$set(Um);const $o={};g&2&&($o.$$scope={dirty:g,ctx:s}),Ca.$set($o);const So={};g&2&&(So.$$scope={dirty:g,ctx:s}),qa.$set(So);const Hm={};g&2&&(Hm.$$scope={dirty:g,ctx:s}),Pa.$set(Hm);const Qm={};g&2&&(Qm.$$scope={dirty:g,ctx:s}),Aa.$set(Qm);const Km={};g&2&&(Km.$$scope={dirty:g,ctx:s}),Oa.$set(Km);const Bo={};g&2&&(Bo.$$scope={dirty:g,ctx:s}),Na.$set(Bo);const Jm={};g&2&&(Jm.$$scope={dirty:g,ctx:s}),Da.$set(Jm);const Vm={};g&2&&(Vm.$$scope={dirty:g,ctx:s}),Sa.$set(Vm);const Gm={};g&2&&(Gm.$$scope={dirty:g,ctx:s}),Wa.$set(Gm);const Ha={};g&2&&(Ha.$$scope={dirty:g,ctx:s}),Ua.$set(Ha)},i(s){n_||($(l.$$.fragment,s),$(M.$$.fragment,s),$(We.$$.fragment,s),$(ur.$$.fragment,s),$(xr.$$.fragment,s),$(jr.$$.fragment,s),$(Wr.$$.fragment,s),$(oi.$$.fragment,s),$(ni.$$.fragment,s),$(cs.$$.fragment,s),$(ai.$$.fragment,s),$(ri.$$.fragment,s),$(hs.$$.fragment,s),$(us.$$.fragment,s),$(di.$$.fragment,s),$(pi.$$.fragment,s),$(ui.$$.fragment,s),$(fi.$$.fragment,s),$(mi.$$.fragment,s),$(gi.$$.fragment,s),$(_s.$$.fragment,s),$(bs.$$.fragment,s),$(vi.$$.fragment,s),$(yi.$$.fragment,s),$(wi.$$.fragment,s),$(Ei.$$.fragment,s),$(ys.$$.fragment,s),$(ws.$$.fragment,s),$(Mi.$$.fragment,s),$(zi.$$.fragment,s),$(Ai.$$.fragment,s),$($s.$$.fragment,s),$(Fs.$$.fragment,s),$(Li.$$.fragment,s),$(Oi.$$.fragment,s),$(Bi.$$.fragment,s),$(Rs.$$.fragment,s),$(Es.$$.fragment,s),$(Ms.$$.fragment,s),$(Wi.$$.fragment,s),$(Ui.$$.fragment,s),$(Ji.$$.fragment,s),$(Cs.$$.fragment,s),$(qs.$$.fragment,s),$(js.$$.fragment,s),$(Ps.$$.fragment,s),$(As.$$.fragment,s),$(Vi.$$.fragment,s),$(Gi.$$.fragment,s),$(el.$$.fragment,s),$(Os.$$.fragment,s),$(Ns.$$.fragment,s),$(tl.$$.fragment,s),$(ol.$$.fragment,s),$(rl.$$.fragment,s),$(Ds.$$.fragment,s),$(Ss.$$.fragment,s),$(Bs.$$.fragment,s),$(il.$$.fragment,s),$(ll.$$.fragment,s),$(hl.$$.fragment,s),$(Us.$$.fragment,s),$(Hs.$$.fragment,s),$(Qs.$$.fragment,s),$(ul.$$.fragment,s),$(fl.$$.fragment,s),$(Js.$$.fragment,s),$(bl.$$.fragment,s),$(Vs.$$.fragment,s),$(Gs.$$.fragment,s),$(kl.$$.fragment,s),$(vl.$$.fragment,s),$(yl.$$.fragment,s),$(Ys.$$.fragment,s),$(Zs.$$.fragment,s),$(wl.$$.fragment,s),$(Tl.$$.fragment,s),$(ta.$$.fragment,s),$(El.$$.fragment,s),$(oa.$$.fragment,s),$(na.$$.fragment,s),$(sa.$$.fragment,s),$(Ml.$$.fragment,s),$(zl.$$.fragment,s),$(ra.$$.fragment,s),$(Pl.$$.fragment,s),$(ia.$$.fragment,s),$(la.$$.fragment,s),$(da.$$.fragment,s),$(Al.$$.fragment,s),$(Ll.$$.fragment,s),$(pa.$$.fragment,s),$(Dl.$$.fragment,s),$(ha.$$.fragment,s),$(ua.$$.fragment,s),$(Sl.$$.fragment,s),$(Bl.$$.fragment,s),$(ma.$$.fragment,s),$(Ql.$$.fragment,s),$(ga.$$.fragment,s),$(_a.$$.fragment,s),$(ba.$$.fragment,s),$(Kl.$$.fragment,s),$(Jl.$$.fragment,s),$(va.$$.fragment,s),$(Yl.$$.fragment,s),$(ya.$$.fragment,s),$(wa.$$.fragment,s),$(Ta.$$.fragment,s),$(Zl.$$.fragment,s),$(ed.$$.fragment,s),$(ld.$$.fragment,s),$(Fa.$$.fragment,s),$(xa.$$.fragment,s),$(dd.$$.fragment,s),$(cd.$$.fragment,s),$(bd.$$.fragment,s),$(Ea.$$.fragment,s),$(Ma.$$.fragment,s),$(kd.$$.fragment,s),$(vd.$$.fragment,s),$(Md.$$.fragment,s),$(Ca.$$.fragment,s),$(qa.$$.fragment,s),$(zd.$$.fragment,s),$(Cd.$$.fragment,s),$(Id.$$.fragment,s),$(Pa.$$.fragment,s),$(Aa.$$.fragment,s),$(Dd.$$.fragment,s),$(Sd.$$.fragment,s),$(Vd.$$.fragment,s),$(Oa.$$.fragment,s),$(Na.$$.fragment,s),$(Gd.$$.fragment,s),$(Xd.$$.fragment,s),$(ac.$$.fragment,s),$(Da.$$.fragment,s),$(Sa.$$.fragment,s),$(rc.$$.fragment,s),$(ic.$$.fragment,s),$(mc.$$.fragment,s),$(Wa.$$.fragment,s),$(Ua.$$.fragment,s),n_=!0)},o(s){F(l.$$.fragment,s),F(M.$$.fragment,s),F(We.$$.fragment,s),F(ur.$$.fragment,s),F(xr.$$.fragment,s),F(jr.$$.fragment,s),F(Wr.$$.fragment,s),F(oi.$$.fragment,s),F(ni.$$.fragment,s),F(cs.$$.fragment,s),F(ai.$$.fragment,s),F(ri.$$.fragment,s),F(hs.$$.fragment,s),F(us.$$.fragment,s),F(di.$$.fragment,s),F(pi.$$.fragment,s),F(ui.$$.fragment,s),F(fi.$$.fragment,s),F(mi.$$.fragment,s),F(gi.$$.fragment,s),F(_s.$$.fragment,s),F(bs.$$.fragment,s),F(vi.$$.fragment,s),F(yi.$$.fragment,s),F(wi.$$.fragment,s),F(Ei.$$.fragment,s),F(ys.$$.fragment,s),F(ws.$$.fragment,s),F(Mi.$$.fragment,s),F(zi.$$.fragment,s),F(Ai.$$.fragment,s),F($s.$$.fragment,s),F(Fs.$$.fragment,s),F(Li.$$.fragment,s),F(Oi.$$.fragment,s),F(Bi.$$.fragment,s),F(Rs.$$.fragment,s),F(Es.$$.fragment,s),F(Ms.$$.fragment,s),F(Wi.$$.fragment,s),F(Ui.$$.fragment,s),F(Ji.$$.fragment,s),F(Cs.$$.fragment,s),F(qs.$$.fragment,s),F(js.$$.fragment,s),F(Ps.$$.fragment,s),F(As.$$.fragment,s),F(Vi.$$.fragment,s),F(Gi.$$.fragment,s),F(el.$$.fragment,s),F(Os.$$.fragment,s),F(Ns.$$.fragment,s),F(tl.$$.fragment,s),F(ol.$$.fragment,s),F(rl.$$.fragment,s),F(Ds.$$.fragment,s),F(Ss.$$.fragment,s),F(Bs.$$.fragment,s),F(il.$$.fragment,s),F(ll.$$.fragment,s),F(hl.$$.fragment,s),F(Us.$$.fragment,s),F(Hs.$$.fragment,s),F(Qs.$$.fragment,s),F(ul.$$.fragment,s),F(fl.$$.fragment,s),F(Js.$$.fragment,s),F(bl.$$.fragment,s),F(Vs.$$.fragment,s),F(Gs.$$.fragment,s),F(kl.$$.fragment,s),F(vl.$$.fragment,s),F(yl.$$.fragment,s),F(Ys.$$.fragment,s),F(Zs.$$.fragment,s),F(wl.$$.fragment,s),F(Tl.$$.fragment,s),F(ta.$$.fragment,s),F(El.$$.fragment,s),F(oa.$$.fragment,s),F(na.$$.fragment,s),F(sa.$$.fragment,s),F(Ml.$$.fragment,s),F(zl.$$.fragment,s),F(ra.$$.fragment,s),F(Pl.$$.fragment,s),F(ia.$$.fragment,s),F(la.$$.fragment,s),F(da.$$.fragment,s),F(Al.$$.fragment,s),F(Ll.$$.fragment,s),F(pa.$$.fragment,s),F(Dl.$$.fragment,s),F(ha.$$.fragment,s),F(ua.$$.fragment,s),F(Sl.$$.fragment,s),F(Bl.$$.fragment,s),F(ma.$$.fragment,s),F(Ql.$$.fragment,s),F(ga.$$.fragment,s),F(_a.$$.fragment,s),F(ba.$$.fragment,s),F(Kl.$$.fragment,s),F(Jl.$$.fragment,s),F(va.$$.fragment,s),F(Yl.$$.fragment,s),F(ya.$$.fragment,s),F(wa.$$.fragment,s),F(Ta.$$.fragment,s),F(Zl.$$.fragment,s),F(ed.$$.fragment,s),F(ld.$$.fragment,s),F(Fa.$$.fragment,s),F(xa.$$.fragment,s),F(dd.$$.fragment,s),F(cd.$$.fragment,s),F(bd.$$.fragment,s),F(Ea.$$.fragment,s),F(Ma.$$.fragment,s),F(kd.$$.fragment,s),F(vd.$$.fragment,s),F(Md.$$.fragment,s),F(Ca.$$.fragment,s),F(qa.$$.fragment,s),F(zd.$$.fragment,s),F(Cd.$$.fragment,s),F(Id.$$.fragment,s),F(Pa.$$.fragment,s),F(Aa.$$.fragment,s),F(Dd.$$.fragment,s),F(Sd.$$.fragment,s),F(Vd.$$.fragment,s),F(Oa.$$.fragment,s),F(Na.$$.fragment,s),F(Gd.$$.fragment,s),F(Xd.$$.fragment,s),F(ac.$$.fragment,s),F(Da.$$.fragment,s),F(Sa.$$.fragment,s),F(rc.$$.fragment,s),F(ic.$$.fragment,s),F(mc.$$.fragment,s),F(Wa.$$.fragment,s),F(Ua.$$.fragment,s),n_=!1},d(s){t(d),s&&t(_),s&&t(u),x(l),s&&t(Z),s&&t(N),x(M),s&&t(ge),s&&t(B),s&&t(_e),s&&t(U),s&&t(be),s&&t(H),s&&t(ke),s&&t(ee),s&&t(ve),s&&t(Q),s&&t(ye),s&&t(I),s&&t(Ke),s&&t(C),s&&t(Je),s&&t(Oe),x(We),s&&t(Ve),s&&t(zc),s&&t(Zm),x(ur,s),s&&t(eg),s&&t(bt),s&&t(tg),x(xr,s),s&&t(og),s&&t(Kt),s&&t(ng),x(jr,s),s&&t(sg),s&&t(Mt),s&&t(ag),x(Wr,s),s&&t(rg),s&&t(zt),s&&t(ig),s&&t(Qc),s&&t(lg),s&&t(ls),s&&t(dg),s&&t(rn),x(oi),s&&t(cg),s&&t(yt),x(ni),x(cs),s&&t(pg),s&&t(cn),x(ai),s&&t(hg),s&&t(Ie),x(ri),x(hs),x(us),x(di),x(pi),x(ui),x(fi),s&&t(ug),s&&t(pn),x(mi),s&&t(fg),s&&t(tt),x(gi),x(_s),x(bs),x(vi),s&&t(mg),s&&t(hn),x(yi),s&&t(gg),s&&t(ot),x(wi),x(Ei),x(ys),x(ws),s&&t(_g),s&&t(fn),x(Mi),s&&t(bg),s&&t(wt),x(zi),x(Ai),x($s),x(Fs),s&&t(kg),s&&t(gn),x(Li),s&&t(vg),s&&t(Tt),x(Oi),x(Bi),x(Rs),x(Es),x(Ms),s&&t(yg),s&&t(bn),x(Wi),s&&t(wg),s&&t($t),x(Ui),x(Ji),x(Cs),x(qs),x(js),x(Ps),x(As),s&&t(Tg),s&&t(vn),x(Vi),s&&t($g),s&&t(Ft),x(Gi),x(el),x(Os),x(Ns),s&&t(Fg),s&&t(wn),x(tl),s&&t(xg),s&&t(xt),x(ol),x(rl),x(Ds),x(Ss),x(Bs),s&&t(Rg),s&&t($n),x(il),s&&t(Eg),s&&t(Rt),x(ll),x(hl),x(Us),x(Hs),x(Qs),s&&t(Mg),s&&t(Rn),x(ul),s&&t(zg),s&&t(ht),x(fl),x(Js),x(bl),x(Vs),x(Gs),s&&t(Cg),s&&t(Mn),x(kl),s&&t(qg),s&&t(zn),x(vl),x(yl),x(Ys),x(Zs),s&&t(jg),s&&t(qn),x(wl),s&&t(Pg),s&&t(ut),x(Tl),x(ta),x(El),x(oa),x(na),x(sa),s&&t(Ag),s&&t(Pn),x(Ml),s&&t(Lg),s&&t(ft),x(zl),x(ra),x(Pl),x(ia),x(la),x(da),s&&t(Og),s&&t(Ln),x(Al),s&&t(Ng),s&&t(mt),x(Ll),x(pa),x(Dl),x(ha),x(ua),s&&t(Ig),s&&t(Nn),x(Sl),s&&t(Dg),s&&t(gt),x(Bl),x(ma),x(Ql),x(ga),x(_a),x(ba),s&&t(Sg),s&&t(Dn),x(Kl),s&&t(Bg),s&&t(_t),x(Jl),x(va),x(Yl),x(ya),x(wa),x(Ta),s&&t(Wg),s&&t(Wn),x(Zl),s&&t(Ug),s&&t(nt),x(ed),x(ld),x(Fa),x(xa),s&&t(Hg),s&&t(Hn),x(dd),s&&t(Qg),s&&t(st),x(cd),x(bd),x(Ea),x(Ma),s&&t(Kg),s&&t(Kn),x(kd),s&&t(Jg),s&&t(at),x(vd),x(Md),x(Ca),x(qa),s&&t(Vg),s&&t(Vn),x(zd),s&&t(Gg),s&&t(rt),x(Cd),x(Id),x(Pa),x(Aa),s&&t(Xg),s&&t(Xn),x(Dd),s&&t(Yg),s&&t(it),x(Sd),x(Vd),x(Oa),x(Na),s&&t(Zg),s&&t(Zn),x(Gd),s&&t(e_),s&&t(lt),x(Xd),x(ac),x(Da),x(Sa),s&&t(t_),s&&t(ts),x(rc),s&&t(o_),s&&t(dt),x(ic),x(mc),x(Wa),x(Ua)}}}const P5={local:"roberta",sections:[{local:"overview",title:"Overview"},{local:"resources",title:"Resources"},{local:"transformers.RobertaConfig",title:"RobertaConfig"},{local:"transformers.RobertaTokenizer",title:"RobertaTokenizer"},{local:"transformers.RobertaTokenizerFast",title:"RobertaTokenizerFast"},{local:"transformers.RobertaModel",title:"RobertaModel"},{local:"transformers.RobertaForCausalLM",title:"RobertaForCausalLM"},{local:"transformers.RobertaForMaskedLM",title:"RobertaForMaskedLM"},{local:"transformers.RobertaForSequenceClassification",title:"RobertaForSequenceClassification"},{local:"transformers.RobertaForMultipleChoice",title:"RobertaForMultipleChoice"},{local:"transformers.RobertaForTokenClassification",title:"RobertaForTokenClassification"},{local:"transformers.RobertaForQuestionAnswering",title:"RobertaForQuestionAnswering"},{local:"transformers.TFRobertaModel",title:"TFRobertaModel"},{local:"transformers.TFRobertaForCausalLM",title:"TFRobertaForCausalLM"},{local:"transformers.TFRobertaForMaskedLM",title:"TFRobertaForMaskedLM"},{local:"transformers.TFRobertaForSequenceClassification",title:"TFRobertaForSequenceClassification"},{local:"transformers.TFRobertaForMultipleChoice",title:"TFRobertaForMultipleChoice"},{local:"transformers.TFRobertaForTokenClassification",title:"TFRobertaForTokenClassification"},{local:"transformers.TFRobertaForQuestionAnswering",title:"TFRobertaForQuestionAnswering"},{local:"transformers.FlaxRobertaModel",title:"FlaxRobertaModel"},{local:"transformers.FlaxRobertaForCausalLM",title:"FlaxRobertaForCausalLM"},{local:"transformers.FlaxRobertaForMaskedLM",title:"FlaxRobertaForMaskedLM"},{local:"transformers.FlaxRobertaForSequenceClassification",title:"FlaxRobertaForSequenceClassification"},{local:"transformers.FlaxRobertaForMultipleChoice",title:"FlaxRobertaForMultipleChoice"},{local:"transformers.FlaxRobertaForTokenClassification",title:"FlaxRobertaForTokenClassification"},{local:"transformers.FlaxRobertaForQuestionAnswering",title:"FlaxRobertaForQuestionAnswering"}],title:"RoBERTa"};function A5(R){return T3(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class W5 extends k3{constructor(d){super();v3(this,d,A5,j5,y3,{})}}export{W5 as default,P5 as metadata};
