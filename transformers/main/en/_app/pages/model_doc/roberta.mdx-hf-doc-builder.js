import{S as k3,i as y3,s as v3,e as a,k as c,w as v,t as o,M as w3,c as r,d as t,m as p,a as i,x as w,h as n,b as h,G as e,g as b,y as T,q as $,o as F,B as x,v as T3,L as re}from"../../chunks/vendor-hf-doc-builder.js";import{T as fe}from"../../chunks/Tip-hf-doc-builder.js";import{D as O}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ie}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as De}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ae}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";import{P as qb}from"../../chunks/PipelineTag-hf-doc-builder.js";function $3(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaConfig, RobertaModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),_=o("Examples:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Examples:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function F3(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer
tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 328, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){d=a("p"),_=o("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function x3(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("When used with "),m=a("code"),f=o("is_split_into_words=True"),k=o(", this tokenizer will add a space before each word (even the first one).")},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"When used with "),m=r(u,"CODE",{});var E=i(m);f=n(E,"is_split_into_words=True"),E.forEach(t),k=n(u,", this tokenizer will add a space before each word (even the first one)."),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function R3(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizerFast
tokenizer = RobertaTokenizerFast.from_pretrained("roberta-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = RobertaTokenizerFast.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 328, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){d=a("p"),_=o("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function E3(R){let d,_,m,f,k,l,u,E;return{c(){d=a("p"),_=o("When used with "),m=a("code"),f=o("is_split_into_words=True"),k=o(", this tokenizer needs to be instantiated with "),l=a("code"),u=o("add_prefix_space=True"),E=o(".")},l(le){d=r(le,"P",{});var Z=i(d);_=n(Z,"When used with "),m=r(Z,"CODE",{});var N=i(m);f=n(N,"is_split_into_words=True"),N.forEach(t),k=n(Z,", this tokenizer needs to be instantiated with "),l=r(Z,"CODE",{});var te=i(l);u=n(te,"add_prefix_space=True"),te.forEach(t),E=n(Z,"."),Z.forEach(t)},m(le,Z){b(le,d,Z),e(d,_),e(d,m),e(m,f),e(d,k),e(d,l),e(l,u),e(d,E)},d(le){le&&t(d)}}}function M3(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function z3(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function C3(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function q3(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaForCausalLM, RobertaConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function j3(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function P3(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaForMaskedLM
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
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function A3(R){let d,_;return d=new ie({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){v(d.$$.fragment)},l(m){w(d.$$.fragment,m)},m(m,f){T(d,m,f),_=!0},p:re,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function L3(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function O3(R){let d,_,m,f,k;return f=new ie({props:{code:`import torch
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=a("p"),_=o("Example of single-label classification:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example of single-label classification:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function N3(R){let d,_;return d=new ie({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = RobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){v(d.$$.fragment)},l(m){w(d.$$.fragment,m)},m(m,f){T(d,m,f),_=!0},p:re,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function I3(R){let d,_,m,f,k;return f=new ie({props:{code:`import torch
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=a("p"),_=o("Example of multi-label classification:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example of multi-label classification:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function D3(R){let d,_;return d=new ie({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(d.$$.fragment)},l(m){w(d.$$.fragment,m)},m(m,f){T(d,m,f),_=!0},p:re,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function S3(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function B3(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function W3(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function U3(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function H3(R){let d,_;return d=new ie({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){v(d.$$.fragment)},l(m){w(d.$$.fragment,m)},m(m,f){T(d,m,f),_=!0},p:re,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function Q3(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function K3(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaForQuestionAnswering
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
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function J3(R){let d,_;return d=new ie({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.86</span>`}}),{c(){v(d.$$.fragment)},l(m){w(d.$$.fragment,m)},m(m,f){T(d,m,f),_=!0},p:re,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function V3(R){let d,_,m,f,k,l,u,E,le,Z,N,te,oe,M,we,K,Te,ge,B,$e,pe,J,Fe,_e,U,xe,be,H,Re,ke,ee,q,P,ye,Q,Ee,ve,I,he,Me,j,ze,V,Ce,me,G,qe,ne,D,ue,X,je,se,A,Pe,L,Ae,Le;return{c(){d=a("p"),_=o("TensorFlow models and layers in "),m=a("code"),f=o("transformers"),k=o(" accept two formats as input:"),l=c(),u=a("ul"),E=a("li"),le=o("having all inputs as keyword arguments (like PyTorch models), or"),Z=c(),N=a("li"),te=o("having all inputs as a list, tuple or dict in the first positional argument."),oe=c(),M=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Te=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=o("model.fit()"),pe=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Fe=o("fit()"),_e=o(" and "),U=a("code"),xe=o("predict()"),be=o(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=o("Functional"),ke=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=c(),q=a("ul"),P=a("li"),ye=o("a single Tensor with "),Q=a("code"),Ee=o("input_ids"),ve=o(" only and nothing else: "),I=a("code"),he=o("model(input_ids)"),Me=c(),j=a("li"),ze=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),Ce=o("model([input_ids, attention_mask])"),me=o(" or "),G=a("code"),qe=o("model([input_ids, attention_mask, token_type_ids])"),ne=c(),D=a("li"),ue=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),A=a("p"),Pe=o(`Note that when creating models and layers with
`),L=a("a"),Ae=o("subclassing"),Le=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var z=i(d);_=n(z,"TensorFlow models and layers in "),m=r(z,"CODE",{});var Ue=i(m);f=n(Ue,"transformers"),Ue.forEach(t),k=n(z," accept two formats as input:"),z.forEach(t),l=p(y),u=r(y,"UL",{});var de=i(u);E=r(de,"LI",{});var Xe=i(E);le=n(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=p(de),N=r(de,"LI",{});var Ke=i(N);te=n(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),de.forEach(t),oe=p(y),M=r(y,"P",{});var C=i(M);we=n(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(C,"CODE",{});var Ye=i(K);Te=n(Ye,"model.fit()"),Ye.forEach(t),ge=n(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(C,"CODE",{});var Se=i(B);$e=n(Se,"model.fit()"),Se.forEach(t),pe=n(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(C,"CODE",{});var Ze=i(J);Fe=n(Ze,"fit()"),Ze.forEach(t),_e=n(C," and "),U=r(C,"CODE",{});var et=i(U);xe=n(et,"predict()"),et.forEach(t),be=n(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var Be=i(H);Re=n(Be,"Functional"),Be.forEach(t),ke=n(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),ee=p(y),q=r(y,"UL",{});var S=i(q);P=r(S,"LI",{});var Y=i(P);ye=n(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Je=i(Q);Ee=n(Je,"input_ids"),Je.forEach(t),ve=n(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=n(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=p(S),j=r(S,"LI",{});var W=i(j);ze=n(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(W,"CODE",{});var He=i(V);Ce=n(He,"model([input_ids, attention_mask])"),He.forEach(t),me=n(W," or "),G=r(W,"CODE",{});var We=i(G);qe=n(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),ne=p(S),D=r(S,"LI",{});var Ne=i(D);ue=n(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Qe=i(X);je=n(Qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Qe.forEach(t),Ne.forEach(t),S.forEach(t),se=p(y),A=r(y,"P",{});var ce=i(A);Pe=n(ce,`Note that when creating models and layers with
`),L=r(ce,"A",{href:!0,rel:!0});var Ve=i(L);Ae=n(Ve,"subclassing"),Ve.forEach(t),Le=n(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){h(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(L,"rel","nofollow")},m(y,z){b(y,d,z),e(d,_),e(d,m),e(m,f),e(d,k),b(y,l,z),b(y,u,z),e(u,E),e(E,le),e(u,Z),e(u,N),e(N,te),b(y,oe,z),b(y,M,z),e(M,we),e(M,K),e(K,Te),e(M,ge),e(M,B),e(B,$e),e(M,pe),e(M,J),e(J,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),b(y,ee,z),b(y,q,z),e(q,P),e(P,ye),e(P,Q),e(Q,Ee),e(P,ve),e(P,I),e(I,he),e(q,Me),e(q,j),e(j,ze),e(j,V),e(V,Ce),e(j,me),e(j,G),e(G,qe),e(q,ne),e(q,D),e(D,ue),e(D,X),e(X,je),b(y,se,z),b(y,A,z),e(A,Pe),e(A,L),e(L,Ae),e(A,Le)},d(y){y&&t(d),y&&t(l),y&&t(u),y&&t(oe),y&&t(M),y&&t(ee),y&&t(q),y&&t(se),y&&t(A)}}}function G3(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function X3(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function Y3(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function Z3(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForCausalLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function e5(R){let d,_,m,f,k,l,u,E,le,Z,N,te,oe,M,we,K,Te,ge,B,$e,pe,J,Fe,_e,U,xe,be,H,Re,ke,ee,q,P,ye,Q,Ee,ve,I,he,Me,j,ze,V,Ce,me,G,qe,ne,D,ue,X,je,se,A,Pe,L,Ae,Le;return{c(){d=a("p"),_=o("TensorFlow models and layers in "),m=a("code"),f=o("transformers"),k=o(" accept two formats as input:"),l=c(),u=a("ul"),E=a("li"),le=o("having all inputs as keyword arguments (like PyTorch models), or"),Z=c(),N=a("li"),te=o("having all inputs as a list, tuple or dict in the first positional argument."),oe=c(),M=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Te=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=o("model.fit()"),pe=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Fe=o("fit()"),_e=o(" and "),U=a("code"),xe=o("predict()"),be=o(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=o("Functional"),ke=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=c(),q=a("ul"),P=a("li"),ye=o("a single Tensor with "),Q=a("code"),Ee=o("input_ids"),ve=o(" only and nothing else: "),I=a("code"),he=o("model(input_ids)"),Me=c(),j=a("li"),ze=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),Ce=o("model([input_ids, attention_mask])"),me=o(" or "),G=a("code"),qe=o("model([input_ids, attention_mask, token_type_ids])"),ne=c(),D=a("li"),ue=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),A=a("p"),Pe=o(`Note that when creating models and layers with
`),L=a("a"),Ae=o("subclassing"),Le=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var z=i(d);_=n(z,"TensorFlow models and layers in "),m=r(z,"CODE",{});var Ue=i(m);f=n(Ue,"transformers"),Ue.forEach(t),k=n(z," accept two formats as input:"),z.forEach(t),l=p(y),u=r(y,"UL",{});var de=i(u);E=r(de,"LI",{});var Xe=i(E);le=n(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=p(de),N=r(de,"LI",{});var Ke=i(N);te=n(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),de.forEach(t),oe=p(y),M=r(y,"P",{});var C=i(M);we=n(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(C,"CODE",{});var Ye=i(K);Te=n(Ye,"model.fit()"),Ye.forEach(t),ge=n(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(C,"CODE",{});var Se=i(B);$e=n(Se,"model.fit()"),Se.forEach(t),pe=n(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(C,"CODE",{});var Ze=i(J);Fe=n(Ze,"fit()"),Ze.forEach(t),_e=n(C," and "),U=r(C,"CODE",{});var et=i(U);xe=n(et,"predict()"),et.forEach(t),be=n(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var Be=i(H);Re=n(Be,"Functional"),Be.forEach(t),ke=n(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),ee=p(y),q=r(y,"UL",{});var S=i(q);P=r(S,"LI",{});var Y=i(P);ye=n(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Je=i(Q);Ee=n(Je,"input_ids"),Je.forEach(t),ve=n(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=n(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=p(S),j=r(S,"LI",{});var W=i(j);ze=n(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(W,"CODE",{});var He=i(V);Ce=n(He,"model([input_ids, attention_mask])"),He.forEach(t),me=n(W," or "),G=r(W,"CODE",{});var We=i(G);qe=n(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),ne=p(S),D=r(S,"LI",{});var Ne=i(D);ue=n(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Qe=i(X);je=n(Qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Qe.forEach(t),Ne.forEach(t),S.forEach(t),se=p(y),A=r(y,"P",{});var ce=i(A);Pe=n(ce,`Note that when creating models and layers with
`),L=r(ce,"A",{href:!0,rel:!0});var Ve=i(L);Ae=n(Ve,"subclassing"),Ve.forEach(t),Le=n(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){h(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(L,"rel","nofollow")},m(y,z){b(y,d,z),e(d,_),e(d,m),e(m,f),e(d,k),b(y,l,z),b(y,u,z),e(u,E),e(E,le),e(u,Z),e(u,N),e(N,te),b(y,oe,z),b(y,M,z),e(M,we),e(M,K),e(K,Te),e(M,ge),e(M,B),e(B,$e),e(M,pe),e(M,J),e(J,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),b(y,ee,z),b(y,q,z),e(q,P),e(P,ye),e(P,Q),e(Q,Ee),e(P,ve),e(P,I),e(I,he),e(q,Me),e(q,j),e(j,ze),e(j,V),e(V,Ce),e(j,me),e(j,G),e(G,qe),e(q,ne),e(q,D),e(D,ue),e(D,X),e(X,je),b(y,se,z),b(y,A,z),e(A,Pe),e(A,L),e(L,Ae),e(A,Le)},d(y){y&&t(d),y&&t(l),y&&t(u),y&&t(oe),y&&t(M),y&&t(ee),y&&t(q),y&&t(se),y&&t(A)}}}function t5(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function o5(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForMaskedLM
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
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function n5(R){let d,_;return d=new ie({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-<mask> tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){v(d.$$.fragment)},l(m){w(d.$$.fragment,m)},m(m,f){T(d,m,f),_=!0},p:re,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function s5(R){let d,_,m,f,k,l,u,E,le,Z,N,te,oe,M,we,K,Te,ge,B,$e,pe,J,Fe,_e,U,xe,be,H,Re,ke,ee,q,P,ye,Q,Ee,ve,I,he,Me,j,ze,V,Ce,me,G,qe,ne,D,ue,X,je,se,A,Pe,L,Ae,Le;return{c(){d=a("p"),_=o("TensorFlow models and layers in "),m=a("code"),f=o("transformers"),k=o(" accept two formats as input:"),l=c(),u=a("ul"),E=a("li"),le=o("having all inputs as keyword arguments (like PyTorch models), or"),Z=c(),N=a("li"),te=o("having all inputs as a list, tuple or dict in the first positional argument."),oe=c(),M=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Te=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=o("model.fit()"),pe=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Fe=o("fit()"),_e=o(" and "),U=a("code"),xe=o("predict()"),be=o(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=o("Functional"),ke=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=c(),q=a("ul"),P=a("li"),ye=o("a single Tensor with "),Q=a("code"),Ee=o("input_ids"),ve=o(" only and nothing else: "),I=a("code"),he=o("model(input_ids)"),Me=c(),j=a("li"),ze=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),Ce=o("model([input_ids, attention_mask])"),me=o(" or "),G=a("code"),qe=o("model([input_ids, attention_mask, token_type_ids])"),ne=c(),D=a("li"),ue=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),A=a("p"),Pe=o(`Note that when creating models and layers with
`),L=a("a"),Ae=o("subclassing"),Le=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var z=i(d);_=n(z,"TensorFlow models and layers in "),m=r(z,"CODE",{});var Ue=i(m);f=n(Ue,"transformers"),Ue.forEach(t),k=n(z," accept two formats as input:"),z.forEach(t),l=p(y),u=r(y,"UL",{});var de=i(u);E=r(de,"LI",{});var Xe=i(E);le=n(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=p(de),N=r(de,"LI",{});var Ke=i(N);te=n(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),de.forEach(t),oe=p(y),M=r(y,"P",{});var C=i(M);we=n(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(C,"CODE",{});var Ye=i(K);Te=n(Ye,"model.fit()"),Ye.forEach(t),ge=n(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(C,"CODE",{});var Se=i(B);$e=n(Se,"model.fit()"),Se.forEach(t),pe=n(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(C,"CODE",{});var Ze=i(J);Fe=n(Ze,"fit()"),Ze.forEach(t),_e=n(C," and "),U=r(C,"CODE",{});var et=i(U);xe=n(et,"predict()"),et.forEach(t),be=n(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var Be=i(H);Re=n(Be,"Functional"),Be.forEach(t),ke=n(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),ee=p(y),q=r(y,"UL",{});var S=i(q);P=r(S,"LI",{});var Y=i(P);ye=n(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Je=i(Q);Ee=n(Je,"input_ids"),Je.forEach(t),ve=n(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=n(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=p(S),j=r(S,"LI",{});var W=i(j);ze=n(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(W,"CODE",{});var He=i(V);Ce=n(He,"model([input_ids, attention_mask])"),He.forEach(t),me=n(W," or "),G=r(W,"CODE",{});var We=i(G);qe=n(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),ne=p(S),D=r(S,"LI",{});var Ne=i(D);ue=n(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Qe=i(X);je=n(Qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Qe.forEach(t),Ne.forEach(t),S.forEach(t),se=p(y),A=r(y,"P",{});var ce=i(A);Pe=n(ce,`Note that when creating models and layers with
`),L=r(ce,"A",{href:!0,rel:!0});var Ve=i(L);Ae=n(Ve,"subclassing"),Ve.forEach(t),Le=n(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){h(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(L,"rel","nofollow")},m(y,z){b(y,d,z),e(d,_),e(d,m),e(m,f),e(d,k),b(y,l,z),b(y,u,z),e(u,E),e(E,le),e(u,Z),e(u,N),e(N,te),b(y,oe,z),b(y,M,z),e(M,we),e(M,K),e(K,Te),e(M,ge),e(M,B),e(B,$e),e(M,pe),e(M,J),e(J,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),b(y,ee,z),b(y,q,z),e(q,P),e(P,ye),e(P,Q),e(Q,Ee),e(P,ve),e(P,I),e(I,he),e(q,Me),e(q,j),e(j,ze),e(j,V),e(V,Ce),e(j,me),e(j,G),e(G,qe),e(q,ne),e(q,D),e(D,ue),e(D,X),e(X,je),b(y,se,z),b(y,A,z),e(A,Pe),e(A,L),e(L,Ae),e(A,Le)},d(y){y&&t(d),y&&t(l),y&&t(u),y&&t(oe),y&&t(M),y&&t(ee),y&&t(q),y&&t(se),y&&t(A)}}}function a5(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function r5(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForSequenceClassification
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function i5(R){let d,_;return d=new ie({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFRobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){v(d.$$.fragment)},l(m){w(d.$$.fragment,m)},m(m,f){T(d,m,f),_=!0},p:re,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function l5(R){let d,_,m,f,k,l,u,E,le,Z,N,te,oe,M,we,K,Te,ge,B,$e,pe,J,Fe,_e,U,xe,be,H,Re,ke,ee,q,P,ye,Q,Ee,ve,I,he,Me,j,ze,V,Ce,me,G,qe,ne,D,ue,X,je,se,A,Pe,L,Ae,Le;return{c(){d=a("p"),_=o("TensorFlow models and layers in "),m=a("code"),f=o("transformers"),k=o(" accept two formats as input:"),l=c(),u=a("ul"),E=a("li"),le=o("having all inputs as keyword arguments (like PyTorch models), or"),Z=c(),N=a("li"),te=o("having all inputs as a list, tuple or dict in the first positional argument."),oe=c(),M=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Te=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=o("model.fit()"),pe=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Fe=o("fit()"),_e=o(" and "),U=a("code"),xe=o("predict()"),be=o(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=o("Functional"),ke=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=c(),q=a("ul"),P=a("li"),ye=o("a single Tensor with "),Q=a("code"),Ee=o("input_ids"),ve=o(" only and nothing else: "),I=a("code"),he=o("model(input_ids)"),Me=c(),j=a("li"),ze=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),Ce=o("model([input_ids, attention_mask])"),me=o(" or "),G=a("code"),qe=o("model([input_ids, attention_mask, token_type_ids])"),ne=c(),D=a("li"),ue=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),A=a("p"),Pe=o(`Note that when creating models and layers with
`),L=a("a"),Ae=o("subclassing"),Le=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var z=i(d);_=n(z,"TensorFlow models and layers in "),m=r(z,"CODE",{});var Ue=i(m);f=n(Ue,"transformers"),Ue.forEach(t),k=n(z," accept two formats as input:"),z.forEach(t),l=p(y),u=r(y,"UL",{});var de=i(u);E=r(de,"LI",{});var Xe=i(E);le=n(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=p(de),N=r(de,"LI",{});var Ke=i(N);te=n(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),de.forEach(t),oe=p(y),M=r(y,"P",{});var C=i(M);we=n(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(C,"CODE",{});var Ye=i(K);Te=n(Ye,"model.fit()"),Ye.forEach(t),ge=n(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(C,"CODE",{});var Se=i(B);$e=n(Se,"model.fit()"),Se.forEach(t),pe=n(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(C,"CODE",{});var Ze=i(J);Fe=n(Ze,"fit()"),Ze.forEach(t),_e=n(C," and "),U=r(C,"CODE",{});var et=i(U);xe=n(et,"predict()"),et.forEach(t),be=n(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var Be=i(H);Re=n(Be,"Functional"),Be.forEach(t),ke=n(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),ee=p(y),q=r(y,"UL",{});var S=i(q);P=r(S,"LI",{});var Y=i(P);ye=n(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Je=i(Q);Ee=n(Je,"input_ids"),Je.forEach(t),ve=n(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=n(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=p(S),j=r(S,"LI",{});var W=i(j);ze=n(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(W,"CODE",{});var He=i(V);Ce=n(He,"model([input_ids, attention_mask])"),He.forEach(t),me=n(W," or "),G=r(W,"CODE",{});var We=i(G);qe=n(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),ne=p(S),D=r(S,"LI",{});var Ne=i(D);ue=n(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Qe=i(X);je=n(Qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Qe.forEach(t),Ne.forEach(t),S.forEach(t),se=p(y),A=r(y,"P",{});var ce=i(A);Pe=n(ce,`Note that when creating models and layers with
`),L=r(ce,"A",{href:!0,rel:!0});var Ve=i(L);Ae=n(Ve,"subclassing"),Ve.forEach(t),Le=n(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){h(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(L,"rel","nofollow")},m(y,z){b(y,d,z),e(d,_),e(d,m),e(m,f),e(d,k),b(y,l,z),b(y,u,z),e(u,E),e(E,le),e(u,Z),e(u,N),e(N,te),b(y,oe,z),b(y,M,z),e(M,we),e(M,K),e(K,Te),e(M,ge),e(M,B),e(B,$e),e(M,pe),e(M,J),e(J,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),b(y,ee,z),b(y,q,z),e(q,P),e(P,ye),e(P,Q),e(Q,Ee),e(P,ve),e(P,I),e(I,he),e(q,Me),e(q,j),e(j,ze),e(j,V),e(V,Ce),e(j,me),e(j,G),e(G,qe),e(q,ne),e(q,D),e(D,ue),e(D,X),e(X,je),b(y,se,z),b(y,A,z),e(A,Pe),e(A,L),e(L,Ae),e(A,Le)},d(y){y&&t(d),y&&t(l),y&&t(u),y&&t(oe),y&&t(M),y&&t(ee),y&&t(q),y&&t(se),y&&t(A)}}}function d5(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function c5(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function p5(R){let d,_,m,f,k,l,u,E,le,Z,N,te,oe,M,we,K,Te,ge,B,$e,pe,J,Fe,_e,U,xe,be,H,Re,ke,ee,q,P,ye,Q,Ee,ve,I,he,Me,j,ze,V,Ce,me,G,qe,ne,D,ue,X,je,se,A,Pe,L,Ae,Le;return{c(){d=a("p"),_=o("TensorFlow models and layers in "),m=a("code"),f=o("transformers"),k=o(" accept two formats as input:"),l=c(),u=a("ul"),E=a("li"),le=o("having all inputs as keyword arguments (like PyTorch models), or"),Z=c(),N=a("li"),te=o("having all inputs as a list, tuple or dict in the first positional argument."),oe=c(),M=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Te=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=o("model.fit()"),pe=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Fe=o("fit()"),_e=o(" and "),U=a("code"),xe=o("predict()"),be=o(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=o("Functional"),ke=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=c(),q=a("ul"),P=a("li"),ye=o("a single Tensor with "),Q=a("code"),Ee=o("input_ids"),ve=o(" only and nothing else: "),I=a("code"),he=o("model(input_ids)"),Me=c(),j=a("li"),ze=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),Ce=o("model([input_ids, attention_mask])"),me=o(" or "),G=a("code"),qe=o("model([input_ids, attention_mask, token_type_ids])"),ne=c(),D=a("li"),ue=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),A=a("p"),Pe=o(`Note that when creating models and layers with
`),L=a("a"),Ae=o("subclassing"),Le=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var z=i(d);_=n(z,"TensorFlow models and layers in "),m=r(z,"CODE",{});var Ue=i(m);f=n(Ue,"transformers"),Ue.forEach(t),k=n(z," accept two formats as input:"),z.forEach(t),l=p(y),u=r(y,"UL",{});var de=i(u);E=r(de,"LI",{});var Xe=i(E);le=n(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=p(de),N=r(de,"LI",{});var Ke=i(N);te=n(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),de.forEach(t),oe=p(y),M=r(y,"P",{});var C=i(M);we=n(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(C,"CODE",{});var Ye=i(K);Te=n(Ye,"model.fit()"),Ye.forEach(t),ge=n(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(C,"CODE",{});var Se=i(B);$e=n(Se,"model.fit()"),Se.forEach(t),pe=n(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(C,"CODE",{});var Ze=i(J);Fe=n(Ze,"fit()"),Ze.forEach(t),_e=n(C," and "),U=r(C,"CODE",{});var et=i(U);xe=n(et,"predict()"),et.forEach(t),be=n(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var Be=i(H);Re=n(Be,"Functional"),Be.forEach(t),ke=n(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),ee=p(y),q=r(y,"UL",{});var S=i(q);P=r(S,"LI",{});var Y=i(P);ye=n(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Je=i(Q);Ee=n(Je,"input_ids"),Je.forEach(t),ve=n(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=n(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=p(S),j=r(S,"LI",{});var W=i(j);ze=n(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(W,"CODE",{});var He=i(V);Ce=n(He,"model([input_ids, attention_mask])"),He.forEach(t),me=n(W," or "),G=r(W,"CODE",{});var We=i(G);qe=n(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),ne=p(S),D=r(S,"LI",{});var Ne=i(D);ue=n(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Qe=i(X);je=n(Qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Qe.forEach(t),Ne.forEach(t),S.forEach(t),se=p(y),A=r(y,"P",{});var ce=i(A);Pe=n(ce,`Note that when creating models and layers with
`),L=r(ce,"A",{href:!0,rel:!0});var Ve=i(L);Ae=n(Ve,"subclassing"),Ve.forEach(t),Le=n(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){h(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(L,"rel","nofollow")},m(y,z){b(y,d,z),e(d,_),e(d,m),e(m,f),e(d,k),b(y,l,z),b(y,u,z),e(u,E),e(E,le),e(u,Z),e(u,N),e(N,te),b(y,oe,z),b(y,M,z),e(M,we),e(M,K),e(K,Te),e(M,ge),e(M,B),e(B,$e),e(M,pe),e(M,J),e(J,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),b(y,ee,z),b(y,q,z),e(q,P),e(P,ye),e(P,Q),e(Q,Ee),e(P,ve),e(P,I),e(I,he),e(q,Me),e(q,j),e(j,ze),e(j,V),e(V,Ce),e(j,me),e(j,G),e(G,qe),e(q,ne),e(q,D),e(D,ue),e(D,X),e(X,je),b(y,se,z),b(y,A,z),e(A,Pe),e(A,L),e(L,Ae),e(A,Le)},d(y){y&&t(d),y&&t(l),y&&t(u),y&&t(oe),y&&t(M),y&&t(ee),y&&t(q),y&&t(se),y&&t(A)}}}function h5(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function m5(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function u5(R){let d,_;return d=new ie({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){v(d.$$.fragment)},l(m){w(d.$$.fragment,m)},m(m,f){T(d,m,f),_=!0},p:re,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function f5(R){let d,_,m,f,k,l,u,E,le,Z,N,te,oe,M,we,K,Te,ge,B,$e,pe,J,Fe,_e,U,xe,be,H,Re,ke,ee,q,P,ye,Q,Ee,ve,I,he,Me,j,ze,V,Ce,me,G,qe,ne,D,ue,X,je,se,A,Pe,L,Ae,Le;return{c(){d=a("p"),_=o("TensorFlow models and layers in "),m=a("code"),f=o("transformers"),k=o(" accept two formats as input:"),l=c(),u=a("ul"),E=a("li"),le=o("having all inputs as keyword arguments (like PyTorch models), or"),Z=c(),N=a("li"),te=o("having all inputs as a list, tuple or dict in the first positional argument."),oe=c(),M=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Te=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=o("model.fit()"),pe=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Fe=o("fit()"),_e=o(" and "),U=a("code"),xe=o("predict()"),be=o(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=o("Functional"),ke=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=c(),q=a("ul"),P=a("li"),ye=o("a single Tensor with "),Q=a("code"),Ee=o("input_ids"),ve=o(" only and nothing else: "),I=a("code"),he=o("model(input_ids)"),Me=c(),j=a("li"),ze=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),Ce=o("model([input_ids, attention_mask])"),me=o(" or "),G=a("code"),qe=o("model([input_ids, attention_mask, token_type_ids])"),ne=c(),D=a("li"),ue=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),A=a("p"),Pe=o(`Note that when creating models and layers with
`),L=a("a"),Ae=o("subclassing"),Le=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var z=i(d);_=n(z,"TensorFlow models and layers in "),m=r(z,"CODE",{});var Ue=i(m);f=n(Ue,"transformers"),Ue.forEach(t),k=n(z," accept two formats as input:"),z.forEach(t),l=p(y),u=r(y,"UL",{});var de=i(u);E=r(de,"LI",{});var Xe=i(E);le=n(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=p(de),N=r(de,"LI",{});var Ke=i(N);te=n(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),de.forEach(t),oe=p(y),M=r(y,"P",{});var C=i(M);we=n(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(C,"CODE",{});var Ye=i(K);Te=n(Ye,"model.fit()"),Ye.forEach(t),ge=n(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(C,"CODE",{});var Se=i(B);$e=n(Se,"model.fit()"),Se.forEach(t),pe=n(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(C,"CODE",{});var Ze=i(J);Fe=n(Ze,"fit()"),Ze.forEach(t),_e=n(C," and "),U=r(C,"CODE",{});var et=i(U);xe=n(et,"predict()"),et.forEach(t),be=n(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var Be=i(H);Re=n(Be,"Functional"),Be.forEach(t),ke=n(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),ee=p(y),q=r(y,"UL",{});var S=i(q);P=r(S,"LI",{});var Y=i(P);ye=n(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Je=i(Q);Ee=n(Je,"input_ids"),Je.forEach(t),ve=n(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=n(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=p(S),j=r(S,"LI",{});var W=i(j);ze=n(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(W,"CODE",{});var He=i(V);Ce=n(He,"model([input_ids, attention_mask])"),He.forEach(t),me=n(W," or "),G=r(W,"CODE",{});var We=i(G);qe=n(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),ne=p(S),D=r(S,"LI",{});var Ne=i(D);ue=n(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Qe=i(X);je=n(Qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Qe.forEach(t),Ne.forEach(t),S.forEach(t),se=p(y),A=r(y,"P",{});var ce=i(A);Pe=n(ce,`Note that when creating models and layers with
`),L=r(ce,"A",{href:!0,rel:!0});var Ve=i(L);Ae=n(Ve,"subclassing"),Ve.forEach(t),Le=n(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){h(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(L,"rel","nofollow")},m(y,z){b(y,d,z),e(d,_),e(d,m),e(m,f),e(d,k),b(y,l,z),b(y,u,z),e(u,E),e(E,le),e(u,Z),e(u,N),e(N,te),b(y,oe,z),b(y,M,z),e(M,we),e(M,K),e(K,Te),e(M,ge),e(M,B),e(B,$e),e(M,pe),e(M,J),e(J,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),b(y,ee,z),b(y,q,z),e(q,P),e(P,ye),e(P,Q),e(Q,Ee),e(P,ve),e(P,I),e(I,he),e(q,Me),e(q,j),e(j,ze),e(j,V),e(V,Ce),e(j,me),e(j,G),e(G,qe),e(q,ne),e(q,D),e(D,ue),e(D,X),e(X,je),b(y,se,z),b(y,A,z),e(A,Pe),e(A,L),e(L,Ae),e(A,Le)},d(y){y&&t(d),y&&t(l),y&&t(u),y&&t(oe),y&&t(M),y&&t(ee),y&&t(q),y&&t(se),y&&t(A)}}}function g5(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function _5(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForQuestionAnswering
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
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function b5(R){let d,_;return d=new ie({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.86</span>`}}),{c(){v(d.$$.fragment)},l(m){w(d.$$.fragment,m)},m(m,f){T(d,m,f),_=!0},p:re,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function k5(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function y5(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaModel

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaModel.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaModel.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function v5(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function w5(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function T5(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function $5(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForMaskedLM

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForMaskedLM.from_pretrained("roberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function F5(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function x5(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForSequenceClassification

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForSequenceClassification.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function R5(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function E5(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function M5(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function z5(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForTokenClassification

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForTokenClassification.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function C5(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function q5(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function j5(R){let d,_,m,f,k,l,u,E,le,Z,N,te,oe,M,we,K,Te,ge,B,$e,pe,J,Fe,_e,U,xe,be,H,Re,ke,ee,q,P,ye,Q,Ee,ve,I,he,Me,j,ze,V,Ce,me,G,qe,ne,D,ue,X,je,se,A,Pe,L,Ae,Le,y,z,Ue,de,Xe,Ke,C,Ye,Se,Ze,et,Be,S,Y,Je,Oe,W,He,We,Ne,Qe,ce,Ve,zc,jb,Zf,mr,eg,bt,an,Pb,ur,Ab,Lb,fr,Ob,Nb,Ib,gr,Db,_r,Sb,Bb,Wb,br,Ub,kr,Hb,Qb,Kb,Fo,Cc,Jb,Vb,yr,Gb,Xb,vr,Yb,Zb,ek,xo,qc,tk,ok,wr,nk,sk,Tr,ak,rk,ik,Ro,jc,lk,dk,$r,ck,pk,Fr,hk,mk,tg,xr,og,Kt,Eo,Pc,uk,fk,Rr,gk,_k,Er,bk,kk,yk,Mo,Ac,vk,wk,Mr,Tk,$k,zr,Fk,xk,Rk,rs,Lc,Ek,Mk,Cr,zk,Ck,qk,Oc,qr,jk,Pk,ng,jr,sg,Mt,Pr,Ak,Ar,Lk,Ok,Nk,zo,Nc,Ik,Dk,Lr,Sk,Bk,Or,Wk,Uk,Hk,Co,Ic,Qk,Kk,Nr,Jk,Vk,Ir,Gk,Xk,Yk,qo,Dc,Zk,ey,Dr,ty,oy,Sr,ny,sy,ay,Sc,Br,ry,iy,ag,Wr,rg,zt,Ur,ly,Hr,dy,cy,py,jo,Bc,hy,my,Qr,uy,fy,Kr,gy,_y,by,Po,Wc,ky,yy,Jr,vy,wy,Vr,Ty,$y,Fy,is,Uc,xy,Ry,Gr,Ey,My,zy,Hc,Xr,Cy,qy,ig,Qc,fh,jy,lg,ls,Ao,Kc,Py,Ay,Yr,Ly,Oy,Zr,Ny,Iy,Dy,Lo,Jc,Sy,By,ei,Wy,Uy,ti,Hy,Qy,dg,rn,ds,gh,oi,Ky,_h,Jy,cg,vt,ni,Vy,uo,Gy,Vc,Xy,Yy,Gc,Zy,ev,si,tv,ov,nv,ln,sv,Xc,av,rv,Yc,iv,lv,dv,dn,cv,Zc,pv,hv,ep,mv,uv,fv,cs,pg,cn,ps,bh,ai,gv,kh,_v,hg,Ie,ri,bv,yh,kv,yv,vh,vv,wv,hs,Tv,ii,$v,wh,Fv,xv,Rv,ms,Ev,li,Mv,tp,zv,Cv,qv,Oo,di,jv,Th,Pv,Av,ci,op,Lv,$h,Ov,Nv,np,Iv,Fh,Dv,Sv,us,pi,Bv,hi,Wv,xh,Uv,Hv,Qv,fs,mi,Kv,Rh,Jv,Vv,sp,ui,mg,pn,gs,Eh,fi,Gv,Mh,Xv,ug,tt,gi,Yv,_i,Zv,zh,ew,tw,ow,Ch,nw,sw,_s,aw,bi,rw,qh,iw,lw,dw,bs,cw,ki,pw,ap,hw,mw,uw,rp,yi,fg,hn,ks,jh,vi,fw,Ph,gw,gg,ot,wi,_w,Ah,bw,kw,Ti,yw,ip,vw,ww,Tw,$i,$w,Fi,Fw,xw,Rw,xi,Ew,Lh,Mw,zw,Cw,pt,qw,Oh,jw,Pw,Nh,Aw,Lw,Ih,Ow,Nw,Dh,Iw,Dw,Sh,Sw,Bw,Bh,Ww,Uw,Hw,ys,Qw,Wh,Kw,Jw,Ri,Vw,Gw,Jt,Ei,Xw,mn,Yw,lp,Zw,eT,Uh,tT,oT,nT,vs,sT,ws,_g,un,Ts,Hh,Mi,aT,Qh,rT,bg,wt,zi,iT,Ci,lT,Kh,dT,cT,pT,qi,hT,dp,mT,uT,fT,ji,gT,Pi,_T,bT,kT,Vt,Ai,yT,fn,vT,cp,wT,TT,Jh,$T,FT,xT,$s,RT,Fs,kg,gn,xs,Vh,Li,ET,Gh,MT,yg,Tt,Oi,zT,Ni,CT,Xh,qT,jT,PT,Ii,AT,pp,LT,OT,NT,Di,IT,Si,DT,ST,BT,Ct,Bi,WT,_n,UT,hp,HT,QT,Yh,KT,JT,VT,Rs,GT,Es,XT,Ms,vg,bn,zs,Zh,Wi,YT,em,ZT,wg,$t,Ui,e$,tm,t$,o$,Hi,n$,mp,s$,a$,r$,Qi,i$,Ki,l$,d$,c$,ct,Ji,p$,kn,h$,up,m$,u$,om,f$,g$,_$,Cs,b$,qs,k$,js,y$,Ps,v$,As,Tg,yn,Ls,nm,Vi,w$,sm,T$,$g,Ft,Gi,$$,am,F$,x$,Xi,R$,fp,E$,M$,z$,Yi,C$,Zi,q$,j$,P$,Gt,el,A$,vn,L$,gp,O$,N$,rm,I$,D$,S$,Os,B$,Ns,Fg,wn,Is,im,tl,W$,lm,U$,xg,xt,ol,H$,dm,Q$,K$,nl,J$,_p,V$,G$,X$,sl,Y$,al,Z$,e1,t1,qt,rl,o1,Tn,n1,bp,s1,a1,cm,r1,i1,l1,Ds,d1,Ss,c1,Bs,Rg,$n,Ws,pm,il,p1,hm,h1,Eg,Rt,ll,m1,Fn,u1,mm,f1,g1,um,_1,b1,k1,dl,y1,kp,v1,w1,T1,cl,$1,pl,F1,x1,R1,jt,hl,E1,xn,M1,yp,z1,C1,fm,q1,j1,P1,Us,A1,Hs,L1,Qs,Mg,Rn,Ks,gm,ml,O1,_m,N1,zg,ht,ul,I1,bm,D1,S1,fl,B1,vp,W1,U1,H1,gl,Q1,_l,K1,J1,V1,Js,G1,Xt,bl,X1,En,Y1,wp,Z1,e2,km,t2,o2,n2,Vs,s2,Gs,Cg,Mn,Xs,ym,kl,a2,vm,r2,qg,zn,yl,i2,Yt,vl,l2,Cn,d2,Tp,c2,p2,wm,h2,m2,u2,Ys,f2,Zs,jg,qn,ea,Tm,wl,g2,$m,_2,Pg,mt,Tl,b2,$l,k2,Fm,y2,v2,w2,Fl,T2,$p,$2,F2,x2,xl,R2,Rl,E2,M2,z2,ta,C2,Pt,El,q2,jn,j2,Fp,P2,A2,xm,L2,O2,N2,oa,I2,na,D2,sa,Ag,Pn,aa,Rm,Ml,S2,Em,B2,Lg,ut,zl,W2,Mm,U2,H2,Cl,Q2,xp,K2,J2,V2,ql,G2,jl,X2,Y2,Z2,ra,eF,At,Pl,tF,An,oF,Rp,nF,sF,zm,aF,rF,iF,ia,lF,la,dF,da,Og,Ln,ca,Cm,Al,cF,qm,pF,Ng,ft,Ll,hF,jm,mF,uF,Ol,fF,Ep,gF,_F,bF,Nl,kF,Il,yF,vF,wF,pa,TF,Zt,Dl,$F,On,FF,Mp,xF,RF,Pm,EF,MF,zF,ha,CF,ma,Ig,Nn,ua,Am,Sl,qF,Lm,jF,Dg,gt,Bl,PF,Om,AF,LF,Wl,OF,zp,NF,IF,DF,Ul,SF,Hl,BF,WF,UF,fa,HF,Lt,Ql,QF,In,KF,Cp,JF,VF,Nm,GF,XF,YF,ga,ZF,_a,e0,ba,Sg,Dn,ka,Im,Kl,t0,Dm,o0,Bg,_t,Jl,n0,Sn,s0,Sm,a0,r0,Bm,i0,l0,d0,Vl,c0,qp,p0,h0,m0,Gl,u0,Xl,f0,g0,_0,ya,b0,Ot,Yl,k0,Bn,y0,jp,v0,w0,Wm,T0,$0,F0,va,x0,wa,R0,Ta,Wg,Wn,$a,Um,Zl,E0,Hm,M0,Ug,nt,ed,z0,Qm,C0,q0,td,j0,Pp,P0,A0,L0,od,O0,nd,N0,I0,D0,Km,S0,B0,fo,Jm,sd,W0,U0,Vm,ad,H0,Q0,Gm,rd,K0,J0,Xm,id,V0,G0,eo,ld,X0,Un,Y0,Ym,Z0,ex,Zm,tx,ox,nx,Fa,sx,xa,Hg,Hn,Ra,eu,dd,ax,tu,rx,Qg,st,cd,ix,ou,lx,dx,pd,cx,Ap,px,hx,mx,hd,ux,md,fx,gx,_x,nu,bx,kx,go,su,ud,yx,vx,au,fd,wx,Tx,ru,gd,$x,Fx,iu,_d,xx,Rx,to,bd,Ex,Qn,Mx,lu,zx,Cx,du,qx,jx,Px,Ea,Ax,Ma,Kg,Kn,za,cu,kd,Lx,pu,Ox,Jg,at,yd,Nx,vd,Ix,hu,Dx,Sx,Bx,wd,Wx,Lp,Ux,Hx,Qx,Td,Kx,$d,Jx,Vx,Gx,mu,Xx,Yx,_o,uu,Fd,Zx,eR,fu,xd,tR,oR,gu,Rd,nR,sR,_u,Ed,aR,rR,oo,Md,iR,Jn,lR,bu,dR,cR,ku,pR,hR,mR,Ca,uR,qa,Vg,Vn,ja,yu,zd,fR,vu,gR,Gg,rt,Cd,_R,wu,bR,kR,qd,yR,Op,vR,wR,TR,jd,$R,Pd,FR,xR,RR,Tu,ER,MR,bo,$u,Ad,zR,CR,Fu,Ld,qR,jR,xu,Od,PR,AR,Ru,Nd,LR,OR,no,Id,NR,Gn,IR,Eu,DR,SR,Mu,BR,WR,UR,Pa,HR,Aa,Xg,Xn,La,zu,Dd,QR,Cu,KR,Yg,it,Sd,JR,qu,VR,GR,Bd,XR,Np,YR,ZR,eE,Wd,tE,Ud,oE,nE,sE,ju,aE,rE,ko,Pu,Hd,iE,lE,Au,Qd,dE,cE,Lu,Kd,pE,hE,Ou,Jd,mE,uE,so,Vd,fE,Yn,gE,Nu,_E,bE,Iu,kE,yE,vE,Oa,wE,Na,Zg,Zn,Ia,Du,Gd,TE,Su,$E,e_,lt,Xd,FE,Bu,xE,RE,Yd,EE,Ip,ME,zE,CE,Zd,qE,ec,jE,PE,AE,Wu,LE,OE,yo,Uu,tc,NE,IE,Hu,oc,DE,SE,Qu,nc,BE,WE,Ku,sc,UE,HE,ao,ac,QE,es,KE,Ju,JE,VE,Vu,GE,XE,YE,Da,ZE,Sa,t_,ts,Ba,Gu,rc,eM,Xu,tM,o_,dt,ic,oM,os,nM,Yu,sM,aM,Zu,rM,iM,lM,lc,dM,Dp,cM,pM,hM,dc,mM,cc,uM,fM,gM,ef,_M,bM,vo,tf,pc,kM,yM,of,hc,vM,wM,nf,mc,TM,$M,sf,uc,FM,xM,ro,fc,RM,ns,EM,af,MM,zM,rf,CM,qM,jM,Wa,PM,Ua,n_;return l=new De({}),M=new De({}),We=new De({}),mr=new qb({props:{pipeline:"text-classification"}}),xr=new qb({props:{pipeline:"token-classification"}}),jr=new qb({props:{pipeline:"fill-mask"}}),Wr=new qb({props:{pipeline:"question-answering"}}),oi=new De({}),ni=new O({props:{name:"class transformers.RobertaConfig",anchor:"transformers.RobertaConfig",parameters:[{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/configuration_roberta.py#L37"}}),cs=new ae({props:{anchor:"transformers.RobertaConfig.example",$$slots:{default:[$3]},$$scope:{ctx:R}}}),ai=new De({}),ri=new O({props:{name:"class transformers.RobertaTokenizer",anchor:"transformers.RobertaTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
other word. (RoBERTa tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/tokenization_roberta.py#L107"}}),hs=new ae({props:{anchor:"transformers.RobertaTokenizer.example",$$slots:{default:[F3]},$$scope:{ctx:R}}}),ms=new fe({props:{$$slots:{default:[x3]},$$scope:{ctx:R}}}),di=new O({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/tokenization_roberta.py#L344",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),pi=new O({props:{name:"get_special_tokens_mask",anchor:"transformers.RobertaTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/tokenization_roberta.py#L369",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),mi=new O({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/tokenization_roberta.py#L396",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ui=new O({props:{name:"save_vocabulary",anchor:"transformers.RobertaTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/tokenization_roberta.py#L315"}}),fi=new De({}),gi=new O({props:{name:"class transformers.RobertaTokenizerFast",anchor:"transformers.RobertaTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RobertaTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether the post processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/tokenization_roberta_fast.py#L76"}}),_s=new ae({props:{anchor:"transformers.RobertaTokenizerFast.example",$$slots:{default:[R3]},$$scope:{ctx:R}}}),bs=new fe({props:{$$slots:{default:[E3]},$$scope:{ctx:R}}}),yi=new O({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RobertaTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/tokenization_roberta_fast.py#L279"}}),vi=new De({}),wi=new O({props:{name:"class transformers.RobertaModel",anchor:"transformers.RobertaModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.RobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L691"}}),Ei=new O({props:{name:"forward",anchor:"transformers.RobertaModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L736",returnDescription:`
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
`}}),vs=new fe({props:{$$slots:{default:[M3]},$$scope:{ctx:R}}}),ws=new ae({props:{anchor:"transformers.RobertaModel.forward.example",$$slots:{default:[z3]},$$scope:{ctx:R}}}),Mi=new De({}),zi=new O({props:{name:"class transformers.RobertaForCausalLM",anchor:"transformers.RobertaForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L877"}}),Ai=new O({props:{name:"forward",anchor:"transformers.RobertaForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Tuple[typing.Tuple[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L903",returnDescription:`
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
`}}),$s=new fe({props:{$$slots:{default:[C3]},$$scope:{ctx:R}}}),Fs=new ae({props:{anchor:"transformers.RobertaForCausalLM.forward.example",$$slots:{default:[q3]},$$scope:{ctx:R}}}),Li=new De({}),Oi=new O({props:{name:"class transformers.RobertaForMaskedLM",anchor:"transformers.RobertaForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L1029"}}),Bi=new O({props:{name:"forward",anchor:"transformers.RobertaForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.RobertaForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L1058",returnDescription:`
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
`}}),Rs=new fe({props:{$$slots:{default:[j3]},$$scope:{ctx:R}}}),Es=new ae({props:{anchor:"transformers.RobertaForMaskedLM.forward.example",$$slots:{default:[P3]},$$scope:{ctx:R}}}),Ms=new ae({props:{anchor:"transformers.RobertaForMaskedLM.forward.example-2",$$slots:{default:[A3]},$$scope:{ctx:R}}}),Wi=new De({}),Ui=new O({props:{name:"class transformers.RobertaForSequenceClassification",anchor:"transformers.RobertaForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L1164"}}),Ji=new O({props:{name:"forward",anchor:"transformers.RobertaForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L1178",returnDescription:`
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
`}}),Cs=new fe({props:{$$slots:{default:[L3]},$$scope:{ctx:R}}}),qs=new ae({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example",$$slots:{default:[O3]},$$scope:{ctx:R}}}),js=new ae({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example-2",$$slots:{default:[N3]},$$scope:{ctx:R}}}),Ps=new ae({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example-3",$$slots:{default:[I3]},$$scope:{ctx:R}}}),As=new ae({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example-4",$$slots:{default:[D3]},$$scope:{ctx:R}}}),Vi=new De({}),Gi=new O({props:{name:"class transformers.RobertaForMultipleChoice",anchor:"transformers.RobertaForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L1264"}}),el=new O({props:{name:"forward",anchor:"transformers.RobertaForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L1277",returnDescription:`
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
`}}),Os=new fe({props:{$$slots:{default:[S3]},$$scope:{ctx:R}}}),Ns=new ae({props:{anchor:"transformers.RobertaForMultipleChoice.forward.example",$$slots:{default:[B3]},$$scope:{ctx:R}}}),tl=new De({}),ol=new O({props:{name:"class transformers.RobertaForTokenClassification",anchor:"transformers.RobertaForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L1357"}}),rl=new O({props:{name:"forward",anchor:"transformers.RobertaForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L1375",returnDescription:`
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
`}}),Ds=new fe({props:{$$slots:{default:[W3]},$$scope:{ctx:R}}}),Ss=new ae({props:{anchor:"transformers.RobertaForTokenClassification.forward.example",$$slots:{default:[U3]},$$scope:{ctx:R}}}),Bs=new ae({props:{anchor:"transformers.RobertaForTokenClassification.forward.example-2",$$slots:{default:[H3]},$$scope:{ctx:R}}}),il=new De({}),ll=new O({props:{name:"class transformers.RobertaForQuestionAnswering",anchor:"transformers.RobertaForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L1466"}}),hl=new O({props:{name:"forward",anchor:"transformers.RobertaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.RobertaForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L1480",returnDescription:`
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
`}}),Us=new fe({props:{$$slots:{default:[Q3]},$$scope:{ctx:R}}}),Hs=new ae({props:{anchor:"transformers.RobertaForQuestionAnswering.forward.example",$$slots:{default:[K3]},$$scope:{ctx:R}}}),Qs=new ae({props:{anchor:"transformers.RobertaForQuestionAnswering.forward.example-2",$$slots:{default:[J3]},$$scope:{ctx:R}}}),ml=new De({}),ul=new O({props:{name:"class transformers.TFRobertaModel",anchor:"transformers.TFRobertaModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L924"}}),Js=new fe({props:{$$slots:{default:[V3]},$$scope:{ctx:R}}}),bl=new O({props:{name:"call",anchor:"transformers.TFRobertaModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L929",returnDescription:`
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
`}}),Vs=new fe({props:{$$slots:{default:[G3]},$$scope:{ctx:R}}}),Gs=new ae({props:{anchor:"transformers.TFRobertaModel.call.example",$$slots:{default:[X3]},$$scope:{ctx:R}}}),kl=new De({}),yl=new O({props:{name:"class transformers.TFRobertaForCausalLM",anchor:"transformers.TFRobertaForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1153"}}),vl=new O({props:{name:"call",anchor:"transformers.TFRobertaForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForCausalLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1186",returnDescription:`
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
`}}),Ys=new fe({props:{$$slots:{default:[Y3]},$$scope:{ctx:R}}}),Zs=new ae({props:{anchor:"transformers.TFRobertaForCausalLM.call.example",$$slots:{default:[Z3]},$$scope:{ctx:R}}}),wl=new De({}),Tl=new O({props:{name:"class transformers.TFRobertaForMaskedLM",anchor:"transformers.TFRobertaForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1068"}}),ta=new fe({props:{$$slots:{default:[e5]},$$scope:{ctx:R}}}),El=new O({props:{name:"call",anchor:"transformers.TFRobertaForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1085",returnDescription:`
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
`}}),oa=new fe({props:{$$slots:{default:[t5]},$$scope:{ctx:R}}}),na=new ae({props:{anchor:"transformers.TFRobertaForMaskedLM.call.example",$$slots:{default:[o5]},$$scope:{ctx:R}}}),sa=new ae({props:{anchor:"transformers.TFRobertaForMaskedLM.call.example-2",$$slots:{default:[n5]},$$scope:{ctx:R}}}),Ml=new De({}),zl=new O({props:{name:"class transformers.TFRobertaForSequenceClassification",anchor:"transformers.TFRobertaForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1333"}}),ra=new fe({props:{$$slots:{default:[s5]},$$scope:{ctx:R}}}),Pl=new O({props:{name:"call",anchor:"transformers.TFRobertaForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1344",returnDescription:`
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
`}}),ia=new fe({props:{$$slots:{default:[a5]},$$scope:{ctx:R}}}),la=new ae({props:{anchor:"transformers.TFRobertaForSequenceClassification.call.example",$$slots:{default:[r5]},$$scope:{ctx:R}}}),da=new ae({props:{anchor:"transformers.TFRobertaForSequenceClassification.call.example-2",$$slots:{default:[i5]},$$scope:{ctx:R}}}),Al=new De({}),Ll=new O({props:{name:"class transformers.TFRobertaForMultipleChoice",anchor:"transformers.TFRobertaForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1417"}}),pa=new fe({props:{$$slots:{default:[l5]},$$scope:{ctx:R}}}),Dl=new O({props:{name:"call",anchor:"transformers.TFRobertaForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1441",returnDescription:`
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
`}}),ha=new fe({props:{$$slots:{default:[d5]},$$scope:{ctx:R}}}),ma=new ae({props:{anchor:"transformers.TFRobertaForMultipleChoice.call.example",$$slots:{default:[c5]},$$scope:{ctx:R}}}),Sl=new De({}),Bl=new O({props:{name:"class transformers.TFRobertaForTokenClassification",anchor:"transformers.TFRobertaForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1538"}}),fa=new fe({props:{$$slots:{default:[p5]},$$scope:{ctx:R}}}),Ql=new O({props:{name:"call",anchor:"transformers.TFRobertaForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1556",returnDescription:`
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
`}}),ga=new fe({props:{$$slots:{default:[h5]},$$scope:{ctx:R}}}),_a=new ae({props:{anchor:"transformers.TFRobertaForTokenClassification.call.example",$$slots:{default:[m5]},$$scope:{ctx:R}}}),ba=new ae({props:{anchor:"transformers.TFRobertaForTokenClassification.call.example-2",$$slots:{default:[u5]},$$scope:{ctx:R}}}),Kl=new De({}),Jl=new O({props:{name:"class transformers.TFRobertaForQuestionAnswering",anchor:"transformers.TFRobertaForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1629"}}),ya=new fe({props:{$$slots:{default:[f5]},$$scope:{ctx:R}}}),Yl=new O({props:{name:"call",anchor:"transformers.TFRobertaForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1642",returnDescription:`
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
`}}),va=new fe({props:{$$slots:{default:[g5]},$$scope:{ctx:R}}}),wa=new ae({props:{anchor:"transformers.TFRobertaForQuestionAnswering.call.example",$$slots:{default:[_5]},$$scope:{ctx:R}}}),Ta=new ae({props:{anchor:"transformers.TFRobertaForQuestionAnswering.call.example-2",$$slots:{default:[b5]},$$scope:{ctx:R}}}),Zl=new De({}),ed=new O({props:{name:"class transformers.FlaxRobertaModel",anchor:"transformers.FlaxRobertaModel",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L989"}}),ld=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
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
`}}),Fa=new fe({props:{$$slots:{default:[k5]},$$scope:{ctx:R}}}),xa=new ae({props:{anchor:"transformers.FlaxRobertaModel.__call__.example",$$slots:{default:[y5]},$$scope:{ctx:R}}}),dd=new De({}),cd=new O({props:{name:"class transformers.FlaxRobertaForCausalLM",anchor:"transformers.FlaxRobertaForCausalLM",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L1458"}}),bd=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ea=new fe({props:{$$slots:{default:[v5]},$$scope:{ctx:R}}}),Ma=new ae({props:{anchor:"transformers.FlaxRobertaForCausalLM.__call__.example",$$slots:{default:[w5]},$$scope:{ctx:R}}}),kd=new De({}),yd=new O({props:{name:"class transformers.FlaxRobertaForMaskedLM",anchor:"transformers.FlaxRobertaForMaskedLM",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L1057"}}),Md=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
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
`}}),Ca=new fe({props:{$$slots:{default:[T5]},$$scope:{ctx:R}}}),qa=new ae({props:{anchor:"transformers.FlaxRobertaForMaskedLM.__call__.example",$$slots:{default:[$5]},$$scope:{ctx:R}}}),zd=new De({}),Cd=new O({props:{name:"class transformers.FlaxRobertaForSequenceClassification",anchor:"transformers.FlaxRobertaForSequenceClassification",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L1130"}}),Id=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
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
`}}),Pa=new fe({props:{$$slots:{default:[F5]},$$scope:{ctx:R}}}),Aa=new ae({props:{anchor:"transformers.FlaxRobertaForSequenceClassification.__call__.example",$$slots:{default:[x5]},$$scope:{ctx:R}}}),Dd=new De({}),Sd=new O({props:{name:"class transformers.FlaxRobertaForMultipleChoice",anchor:"transformers.FlaxRobertaForMultipleChoice",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L1212"}}),Vd=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
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
`}}),Oa=new fe({props:{$$slots:{default:[R5]},$$scope:{ctx:R}}}),Na=new ae({props:{anchor:"transformers.FlaxRobertaForMultipleChoice.__call__.example",$$slots:{default:[E5]},$$scope:{ctx:R}}}),Gd=new De({}),Xd=new O({props:{name:"class transformers.FlaxRobertaForTokenClassification",anchor:"transformers.FlaxRobertaForTokenClassification",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L1295"}}),ac=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
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
`}}),Da=new fe({props:{$$slots:{default:[M5]},$$scope:{ctx:R}}}),Sa=new ae({props:{anchor:"transformers.FlaxRobertaForTokenClassification.__call__.example",$$slots:{default:[z5]},$$scope:{ctx:R}}}),rc=new De({}),ic=new O({props:{name:"class transformers.FlaxRobertaForQuestionAnswering",anchor:"transformers.FlaxRobertaForQuestionAnswering",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L1373"}}),fc=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
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
`}}),Wa=new fe({props:{$$slots:{default:[C5]},$$scope:{ctx:R}}}),Ua=new ae({props:{anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__.example",$$slots:{default:[q5]},$$scope:{ctx:R}}}),{c(){d=a("meta"),_=c(),m=a("h1"),f=a("a"),k=a("span"),v(l.$$.fragment),u=c(),E=a("span"),le=o("RoBERTa"),Z=c(),N=a("h2"),te=a("a"),oe=a("span"),v(M.$$.fragment),we=c(),K=a("span"),Te=o("Overview"),ge=c(),B=a("p"),$e=o("The RoBERTa model was proposed in "),pe=a("a"),J=o("RoBERTa: A Robustly Optimized BERT Pretraining Approach"),Fe=o(` by Yinhan Liu, Myle Ott, Naman Goyal, Jingfei Du, Mandar Joshi, Danqi Chen, Omer
Levy, Mike Lewis, Luke Zettlemoyer, Veselin Stoyanov. It is based on Google\u2019s BERT model released in 2018.`),_e=c(),U=a("p"),xe=o(`It builds on BERT and modifies key hyperparameters, removing the next-sentence pretraining objective and training with
much larger mini-batches and learning rates.`),be=c(),H=a("p"),Re=o("The abstract from the paper is the following:"),ke=c(),ee=a("p"),q=a("em"),P=o(`Language model pretraining has led to significant performance gains but careful comparison between different
approaches is challenging. Training is computationally expensive, often done on private datasets of different sizes,
and, as we will show, hyperparameter choices have significant impact on the final results. We present a replication
study of BERT pretraining (Devlin et al., 2019) that carefully measures the impact of many key hyperparameters and
training data size. We find that BERT was significantly undertrained, and can match or exceed the performance of every
model published after it. Our best model achieves state-of-the-art results on GLUE, RACE and SQuAD. These results
highlight the importance of previously overlooked design choices, and raise questions about the source of recently
reported improvements. We release our models and code.`),ye=c(),Q=a("p"),Ee=o("Tips:"),ve=c(),I=a("ul"),he=a("li"),Me=o("This implementation is the same as "),j=a("a"),ze=o("BertModel"),V=o(` with a tiny embeddings tweak as well as a setup
for Roberta pretrained models.`),Ce=c(),me=a("li"),G=o(`RoBERTa has the same architecture as BERT, but uses a byte-level BPE as a tokenizer (same as GPT-2) and uses a
different pretraining scheme.`),qe=c(),ne=a("li"),D=o("RoBERTa doesn\u2019t have "),ue=a("code"),X=o("token_type_ids"),je=o(`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),se=a("code"),A=o("tokenizer.sep_token"),Pe=o(" (or "),L=a("code"),Ae=o("</s>"),Le=o(")"),y=c(),z=a("li"),Ue=a("a"),de=o("CamemBERT"),Xe=o(" is a wrapper around RoBERTa. Refer to this page for usage examples."),Ke=c(),C=a("p"),Ye=o("This model was contributed by "),Se=a("a"),Ze=o("julien-c"),et=o(". The original code can be found "),Be=a("a"),S=o("here"),Y=o("."),Je=c(),Oe=a("h2"),W=a("a"),He=a("span"),v(We.$$.fragment),Ne=c(),Qe=a("span"),ce=o("Resources"),Ve=c(),zc=a("p"),jb=o("A list of official Hugging Face and community (indicated by \u{1F30E}) resources to help you get started with RoBERTa. If you\u2019re interested in submitting a resource to be included here, please feel free to open a Pull Request and we\u2019ll review it! The resource should ideally demonstrate something new instead of duplicating an existing resource."),Zf=c(),v(mr.$$.fragment),eg=c(),bt=a("ul"),an=a("li"),Pb=o("A blog on "),ur=a("a"),Ab=o("Getting Started with Sentiment Analysis on Twitter"),Lb=o(" using RoBERTa and the "),fr=a("a"),Ob=o("Inference API"),Nb=o("."),Ib=c(),gr=a("li"),Db=o("A blog on "),_r=a("a"),Sb=o("Opinion Classification with Kili and Hugging Face AutoTrain"),Bb=o(" using RoBERTa."),Wb=c(),br=a("li"),Ub=o("A notebook on how to "),kr=a("a"),Hb=o("finetune RoBERTa for sentiment analysis"),Qb=o(". \u{1F30E}"),Kb=c(),Fo=a("li"),Cc=a("a"),Jb=o("RobertaForSequenceClassification"),Vb=o(" is supported by this "),yr=a("a"),Gb=o("example script"),Xb=o(" and "),vr=a("a"),Yb=o("notebook"),Zb=o("."),ek=c(),xo=a("li"),qc=a("a"),tk=o("TFRobertaForSequenceClassification"),ok=o(" is supported by this "),wr=a("a"),nk=o("example script"),sk=o(" and "),Tr=a("a"),ak=o("notebook"),rk=o("."),ik=c(),Ro=a("li"),jc=a("a"),lk=o("FlaxRobertaForSequenceClassification"),dk=o(" is supported by this "),$r=a("a"),ck=o("example script"),pk=o(" and "),Fr=a("a"),hk=o("notebook"),mk=o("."),tg=c(),v(xr.$$.fragment),og=c(),Kt=a("ul"),Eo=a("li"),Pc=a("a"),uk=o("RobertaForTokenClassification"),fk=o(" is supported by this "),Rr=a("a"),gk=o("example script"),_k=o(" and "),Er=a("a"),bk=o("notebook"),kk=o("."),yk=c(),Mo=a("li"),Ac=a("a"),vk=o("TFRobertaForTokenClassification"),wk=o(" is supported by this "),Mr=a("a"),Tk=o("example script"),$k=o(" and "),zr=a("a"),Fk=o("notebook"),xk=o("."),Rk=c(),rs=a("li"),Lc=a("a"),Ek=o("FlaxRobertaForTokenClassification"),Mk=o(" is supported by this "),Cr=a("a"),zk=o("example script"),Ck=o("."),qk=c(),Oc=a("li"),qr=a("a"),jk=o("Token classification"),Pk=o(" chapter of the \u{1F917} Hugging Face Course."),ng=c(),v(jr.$$.fragment),sg=c(),Mt=a("ul"),Pr=a("li"),Ak=o("A blog on "),Ar=a("a"),Lk=o("How to train a new language model from scratch using Transformers and Tokenizers"),Ok=o(" with RoBERTa."),Nk=c(),zo=a("li"),Nc=a("a"),Ik=o("RobertaForMaskedLM"),Dk=o(" is supported by this "),Lr=a("a"),Sk=o("example script"),Bk=o(" and "),Or=a("a"),Wk=o("notebook"),Uk=o("."),Hk=c(),Co=a("li"),Ic=a("a"),Qk=o("TFRobertaForMaskedLM"),Kk=o(" is supported by this "),Nr=a("a"),Jk=o("example script"),Vk=o(" and "),Ir=a("a"),Gk=o("notebook"),Xk=o("."),Yk=c(),qo=a("li"),Dc=a("a"),Zk=o("FlaxRobertaForMaskedLM"),ey=o(" is supported by this "),Dr=a("a"),ty=o("example script"),oy=o(" and "),Sr=a("a"),ny=o("notebook"),sy=o("."),ay=c(),Sc=a("li"),Br=a("a"),ry=o("Masked language modeling"),iy=o(" chapter of the \u{1F917} Hugging Face Course."),ag=c(),v(Wr.$$.fragment),rg=c(),zt=a("ul"),Ur=a("li"),ly=o("A blog on "),Hr=a("a"),dy=o("Accelerated Inference with Optimum and Transformers Pipelines"),cy=o(" with RoBERTa for question answering."),py=c(),jo=a("li"),Bc=a("a"),hy=o("RobertaForQuestionAnswering"),my=o(" is supported by this "),Qr=a("a"),uy=o("example script"),fy=o(" and "),Kr=a("a"),gy=o("notebook"),_y=o("."),by=c(),Po=a("li"),Wc=a("a"),ky=o("TFRobertaForQuestionAnswering"),yy=o(" is supported by this "),Jr=a("a"),vy=o("example script"),wy=o(" and "),Vr=a("a"),Ty=o("notebook"),$y=o("."),Fy=c(),is=a("li"),Uc=a("a"),xy=o("FlaxRobertaForQuestionAnswering"),Ry=o(" is supported by this "),Gr=a("a"),Ey=o("example script"),My=o("."),zy=c(),Hc=a("li"),Xr=a("a"),Cy=o("Question answering"),qy=o(" chapter of the \u{1F917} Hugging Face Course."),ig=c(),Qc=a("p"),fh=a("strong"),jy=o("Multiple choice"),lg=c(),ls=a("ul"),Ao=a("li"),Kc=a("a"),Py=o("RobertaForMultipleChoice"),Ay=o(" is supported by this "),Yr=a("a"),Ly=o("example script"),Oy=o(" and "),Zr=a("a"),Ny=o("notebook"),Iy=o("."),Dy=c(),Lo=a("li"),Jc=a("a"),Sy=o("TFRobertaForMultipleChoice"),By=o(" is supported by this "),ei=a("a"),Wy=o("example script"),Uy=o(" and "),ti=a("a"),Hy=o("notebook"),Qy=o("."),dg=c(),rn=a("h2"),ds=a("a"),gh=a("span"),v(oi.$$.fragment),Ky=c(),_h=a("span"),Jy=o("RobertaConfig"),cg=c(),vt=a("div"),v(ni.$$.fragment),Vy=c(),uo=a("p"),Gy=o("This is the configuration class to store the configuration of a "),Vc=a("a"),Xy=o("RobertaModel"),Yy=o(" or a "),Gc=a("a"),Zy=o("TFRobertaModel"),ev=o(`. It is
used to instantiate a RoBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the RoBERTa
`),si=a("a"),tv=o("roberta-base"),ov=o(" architecture."),nv=c(),ln=a("p"),sv=o("Configuration objects inherit from "),Xc=a("a"),av=o("PretrainedConfig"),rv=o(` and can be used to control the model outputs. Read the
documentation from `),Yc=a("a"),iv=o("PretrainedConfig"),lv=o(" for more information."),dv=c(),dn=a("p"),cv=o("The "),Zc=a("a"),pv=o("RobertaConfig"),hv=o(" class directly inherits "),ep=a("a"),mv=o("BertConfig"),uv=o(`. It reuses the same defaults. Please check the parent
class for more information.`),fv=c(),v(cs.$$.fragment),pg=c(),cn=a("h2"),ps=a("a"),bh=a("span"),v(ai.$$.fragment),gv=c(),kh=a("span"),_v=o("RobertaTokenizer"),hg=c(),Ie=a("div"),v(ri.$$.fragment),bv=c(),yh=a("p"),kv=o("Constructs a RoBERTa tokenizer, derived from the GPT-2 tokenizer, using byte-level Byte-Pair-Encoding."),yv=c(),vh=a("p"),vv=o("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),wv=c(),v(hs.$$.fragment),Tv=c(),ii=a("p"),$v=o("You can get around that behavior by passing "),wh=a("code"),Fv=o("add_prefix_space=True"),xv=o(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Rv=c(),v(ms.$$.fragment),Ev=c(),li=a("p"),Mv=o("This tokenizer inherits from "),tp=a("a"),zv=o("PreTrainedTokenizer"),Cv=o(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),qv=c(),Oo=a("div"),v(di.$$.fragment),jv=c(),Th=a("p"),Pv=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoBERTa sequence has the following format:`),Av=c(),ci=a("ul"),op=a("li"),Lv=o("single sequence: "),$h=a("code"),Ov=o("<s> X </s>"),Nv=c(),np=a("li"),Iv=o("pair of sequences: "),Fh=a("code"),Dv=o("<s> A </s></s> B </s>"),Sv=c(),us=a("div"),v(pi.$$.fragment),Bv=c(),hi=a("p"),Wv=o(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),xh=a("code"),Uv=o("prepare_for_model"),Hv=o(" method."),Qv=c(),fs=a("div"),v(mi.$$.fragment),Kv=c(),Rh=a("p"),Jv=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. RoBERTa does not
make use of token type ids, therefore a list of zeros is returned.`),Vv=c(),sp=a("div"),v(ui.$$.fragment),mg=c(),pn=a("h2"),gs=a("a"),Eh=a("span"),v(fi.$$.fragment),Gv=c(),Mh=a("span"),Xv=o("RobertaTokenizerFast"),ug=c(),tt=a("div"),v(gi.$$.fragment),Yv=c(),_i=a("p"),Zv=o("Construct a \u201Cfast\u201D RoBERTa tokenizer (backed by HuggingFace\u2019s "),zh=a("em"),ew=o("tokenizers"),tw=o(` library), derived from the GPT-2
tokenizer, using byte-level Byte-Pair-Encoding.`),ow=c(),Ch=a("p"),nw=o("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),sw=c(),v(_s.$$.fragment),aw=c(),bi=a("p"),rw=o("You can get around that behavior by passing "),qh=a("code"),iw=o("add_prefix_space=True"),lw=o(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),dw=c(),v(bs.$$.fragment),cw=c(),ki=a("p"),pw=o("This tokenizer inherits from "),ap=a("a"),hw=o("PreTrainedTokenizerFast"),mw=o(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),uw=c(),rp=a("div"),v(yi.$$.fragment),fg=c(),hn=a("h2"),ks=a("a"),jh=a("span"),v(vi.$$.fragment),fw=c(),Ph=a("span"),gw=o("RobertaModel"),gg=c(),ot=a("div"),v(wi.$$.fragment),_w=c(),Ah=a("p"),bw=o("The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),kw=c(),Ti=a("p"),yw=o("This model inherits from "),ip=a("a"),vw=o("PreTrainedModel"),ww=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tw=c(),$i=a("p"),$w=o("This model is also a PyTorch "),Fi=a("a"),Fw=o("torch.nn.Module"),xw=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rw=c(),xi=a("p"),Ew=o(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Lh=a("em"),Mw=o(`Attention is
all you need`),zw=o(`_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`),Cw=c(),pt=a("p"),qw=o("To behave as an decoder the model needs to be initialized with the "),Oh=a("code"),jw=o("is_decoder"),Pw=o(` argument of the configuration set
to `),Nh=a("code"),Aw=o("True"),Lw=o(". To be used in a Seq2Seq model, the model needs to initialized with both "),Ih=a("code"),Ow=o("is_decoder"),Nw=o(` argument and
`),Dh=a("code"),Iw=o("add_cross_attention"),Dw=o(" set to "),Sh=a("code"),Sw=o("True"),Bw=o("; an "),Bh=a("code"),Ww=o("encoder_hidden_states"),Uw=o(" is then expected as an input to the forward pass."),Hw=c(),ys=a("p"),Qw=o(".. _"),Wh=a("em"),Kw=o("Attention is all you need"),Jw=o(": "),Ri=a("a"),Vw=o("https://arxiv.org/abs/1706.03762"),Gw=c(),Jt=a("div"),v(Ei.$$.fragment),Xw=c(),mn=a("p"),Yw=o("The "),lp=a("a"),Zw=o("RobertaModel"),eT=o(" forward method, overrides the "),Uh=a("code"),tT=o("__call__"),oT=o(" special method."),nT=c(),v(vs.$$.fragment),sT=c(),v(ws.$$.fragment),_g=c(),un=a("h2"),Ts=a("a"),Hh=a("span"),v(Mi.$$.fragment),aT=c(),Qh=a("span"),rT=o("RobertaForCausalLM"),bg=c(),wt=a("div"),v(zi.$$.fragment),iT=c(),Ci=a("p"),lT=o("RoBERTa Model with a "),Kh=a("code"),dT=o("language modeling"),cT=o(" head on top for CLM fine-tuning."),pT=c(),qi=a("p"),hT=o("This model inherits from "),dp=a("a"),mT=o("PreTrainedModel"),uT=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fT=c(),ji=a("p"),gT=o("This model is also a PyTorch "),Pi=a("a"),_T=o("torch.nn.Module"),bT=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kT=c(),Vt=a("div"),v(Ai.$$.fragment),yT=c(),fn=a("p"),vT=o("The "),cp=a("a"),wT=o("RobertaForCausalLM"),TT=o(" forward method, overrides the "),Jh=a("code"),$T=o("__call__"),FT=o(" special method."),xT=c(),v($s.$$.fragment),RT=c(),v(Fs.$$.fragment),kg=c(),gn=a("h2"),xs=a("a"),Vh=a("span"),v(Li.$$.fragment),ET=c(),Gh=a("span"),MT=o("RobertaForMaskedLM"),yg=c(),Tt=a("div"),v(Oi.$$.fragment),zT=c(),Ni=a("p"),CT=o("RoBERTa Model with a "),Xh=a("code"),qT=o("language modeling"),jT=o(" head on top."),PT=c(),Ii=a("p"),AT=o("This model inherits from "),pp=a("a"),LT=o("PreTrainedModel"),OT=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),NT=c(),Di=a("p"),IT=o("This model is also a PyTorch "),Si=a("a"),DT=o("torch.nn.Module"),ST=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),BT=c(),Ct=a("div"),v(Bi.$$.fragment),WT=c(),_n=a("p"),UT=o("The "),hp=a("a"),HT=o("RobertaForMaskedLM"),QT=o(" forward method, overrides the "),Yh=a("code"),KT=o("__call__"),JT=o(" special method."),VT=c(),v(Rs.$$.fragment),GT=c(),v(Es.$$.fragment),XT=c(),v(Ms.$$.fragment),vg=c(),bn=a("h2"),zs=a("a"),Zh=a("span"),v(Wi.$$.fragment),YT=c(),em=a("span"),ZT=o("RobertaForSequenceClassification"),wg=c(),$t=a("div"),v(Ui.$$.fragment),e$=c(),tm=a("p"),t$=o(`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),o$=c(),Hi=a("p"),n$=o("This model inherits from "),mp=a("a"),s$=o("PreTrainedModel"),a$=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),r$=c(),Qi=a("p"),i$=o("This model is also a PyTorch "),Ki=a("a"),l$=o("torch.nn.Module"),d$=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),c$=c(),ct=a("div"),v(Ji.$$.fragment),p$=c(),kn=a("p"),h$=o("The "),up=a("a"),m$=o("RobertaForSequenceClassification"),u$=o(" forward method, overrides the "),om=a("code"),f$=o("__call__"),g$=o(" special method."),_$=c(),v(Cs.$$.fragment),b$=c(),v(qs.$$.fragment),k$=c(),v(js.$$.fragment),y$=c(),v(Ps.$$.fragment),v$=c(),v(As.$$.fragment),Tg=c(),yn=a("h2"),Ls=a("a"),nm=a("span"),v(Vi.$$.fragment),w$=c(),sm=a("span"),T$=o("RobertaForMultipleChoice"),$g=c(),Ft=a("div"),v(Gi.$$.fragment),$$=c(),am=a("p"),F$=o(`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),x$=c(),Xi=a("p"),R$=o("This model inherits from "),fp=a("a"),E$=o("PreTrainedModel"),M$=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),z$=c(),Yi=a("p"),C$=o("This model is also a PyTorch "),Zi=a("a"),q$=o("torch.nn.Module"),j$=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),P$=c(),Gt=a("div"),v(el.$$.fragment),A$=c(),vn=a("p"),L$=o("The "),gp=a("a"),O$=o("RobertaForMultipleChoice"),N$=o(" forward method, overrides the "),rm=a("code"),I$=o("__call__"),D$=o(" special method."),S$=c(),v(Os.$$.fragment),B$=c(),v(Ns.$$.fragment),Fg=c(),wn=a("h2"),Is=a("a"),im=a("span"),v(tl.$$.fragment),W$=c(),lm=a("span"),U$=o("RobertaForTokenClassification"),xg=c(),xt=a("div"),v(ol.$$.fragment),H$=c(),dm=a("p"),Q$=o(`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),K$=c(),nl=a("p"),J$=o("This model inherits from "),_p=a("a"),V$=o("PreTrainedModel"),G$=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),X$=c(),sl=a("p"),Y$=o("This model is also a PyTorch "),al=a("a"),Z$=o("torch.nn.Module"),e1=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),t1=c(),qt=a("div"),v(rl.$$.fragment),o1=c(),Tn=a("p"),n1=o("The "),bp=a("a"),s1=o("RobertaForTokenClassification"),a1=o(" forward method, overrides the "),cm=a("code"),r1=o("__call__"),i1=o(" special method."),l1=c(),v(Ds.$$.fragment),d1=c(),v(Ss.$$.fragment),c1=c(),v(Bs.$$.fragment),Rg=c(),$n=a("h2"),Ws=a("a"),pm=a("span"),v(il.$$.fragment),p1=c(),hm=a("span"),h1=o("RobertaForQuestionAnswering"),Eg=c(),Rt=a("div"),v(ll.$$.fragment),m1=c(),Fn=a("p"),u1=o(`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),mm=a("code"),f1=o("span start logits"),g1=o(" and "),um=a("code"),_1=o("span end logits"),b1=o(")."),k1=c(),dl=a("p"),y1=o("This model inherits from "),kp=a("a"),v1=o("PreTrainedModel"),w1=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),T1=c(),cl=a("p"),$1=o("This model is also a PyTorch "),pl=a("a"),F1=o("torch.nn.Module"),x1=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),R1=c(),jt=a("div"),v(hl.$$.fragment),E1=c(),xn=a("p"),M1=o("The "),yp=a("a"),z1=o("RobertaForQuestionAnswering"),C1=o(" forward method, overrides the "),fm=a("code"),q1=o("__call__"),j1=o(" special method."),P1=c(),v(Us.$$.fragment),A1=c(),v(Hs.$$.fragment),L1=c(),v(Qs.$$.fragment),Mg=c(),Rn=a("h2"),Ks=a("a"),gm=a("span"),v(ml.$$.fragment),O1=c(),_m=a("span"),N1=o("TFRobertaModel"),zg=c(),ht=a("div"),v(ul.$$.fragment),I1=c(),bm=a("p"),D1=o("The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),S1=c(),fl=a("p"),B1=o("This model inherits from "),vp=a("a"),W1=o("TFPreTrainedModel"),U1=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),H1=c(),gl=a("p"),Q1=o("This model is also a "),_l=a("a"),K1=o("tf.keras.Model"),J1=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),V1=c(),v(Js.$$.fragment),G1=c(),Xt=a("div"),v(bl.$$.fragment),X1=c(),En=a("p"),Y1=o("The "),wp=a("a"),Z1=o("TFRobertaModel"),e2=o(" forward method, overrides the "),km=a("code"),t2=o("__call__"),o2=o(" special method."),n2=c(),v(Vs.$$.fragment),s2=c(),v(Gs.$$.fragment),Cg=c(),Mn=a("h2"),Xs=a("a"),ym=a("span"),v(kl.$$.fragment),a2=c(),vm=a("span"),r2=o("TFRobertaForCausalLM"),qg=c(),zn=a("div"),v(yl.$$.fragment),i2=c(),Yt=a("div"),v(vl.$$.fragment),l2=c(),Cn=a("p"),d2=o("The "),Tp=a("a"),c2=o("TFRobertaForCausalLM"),p2=o(" forward method, overrides the "),wm=a("code"),h2=o("__call__"),m2=o(" special method."),u2=c(),v(Ys.$$.fragment),f2=c(),v(Zs.$$.fragment),jg=c(),qn=a("h2"),ea=a("a"),Tm=a("span"),v(wl.$$.fragment),g2=c(),$m=a("span"),_2=o("TFRobertaForMaskedLM"),Pg=c(),mt=a("div"),v(Tl.$$.fragment),b2=c(),$l=a("p"),k2=o("RoBERTa Model with a "),Fm=a("code"),y2=o("language modeling"),v2=o(" head on top."),w2=c(),Fl=a("p"),T2=o("This model inherits from "),$p=a("a"),$2=o("TFPreTrainedModel"),F2=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),x2=c(),xl=a("p"),R2=o("This model is also a "),Rl=a("a"),E2=o("tf.keras.Model"),M2=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),z2=c(),v(ta.$$.fragment),C2=c(),Pt=a("div"),v(El.$$.fragment),q2=c(),jn=a("p"),j2=o("The "),Fp=a("a"),P2=o("TFRobertaForMaskedLM"),A2=o(" forward method, overrides the "),xm=a("code"),L2=o("__call__"),O2=o(" special method."),N2=c(),v(oa.$$.fragment),I2=c(),v(na.$$.fragment),D2=c(),v(sa.$$.fragment),Ag=c(),Pn=a("h2"),aa=a("a"),Rm=a("span"),v(Ml.$$.fragment),S2=c(),Em=a("span"),B2=o("TFRobertaForSequenceClassification"),Lg=c(),ut=a("div"),v(zl.$$.fragment),W2=c(),Mm=a("p"),U2=o(`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),H2=c(),Cl=a("p"),Q2=o("This model inherits from "),xp=a("a"),K2=o("TFPreTrainedModel"),J2=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),V2=c(),ql=a("p"),G2=o("This model is also a "),jl=a("a"),X2=o("tf.keras.Model"),Y2=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Z2=c(),v(ra.$$.fragment),eF=c(),At=a("div"),v(Pl.$$.fragment),tF=c(),An=a("p"),oF=o("The "),Rp=a("a"),nF=o("TFRobertaForSequenceClassification"),sF=o(" forward method, overrides the "),zm=a("code"),aF=o("__call__"),rF=o(" special method."),iF=c(),v(ia.$$.fragment),lF=c(),v(la.$$.fragment),dF=c(),v(da.$$.fragment),Og=c(),Ln=a("h2"),ca=a("a"),Cm=a("span"),v(Al.$$.fragment),cF=c(),qm=a("span"),pF=o("TFRobertaForMultipleChoice"),Ng=c(),ft=a("div"),v(Ll.$$.fragment),hF=c(),jm=a("p"),mF=o(`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),uF=c(),Ol=a("p"),fF=o("This model inherits from "),Ep=a("a"),gF=o("TFPreTrainedModel"),_F=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bF=c(),Nl=a("p"),kF=o("This model is also a "),Il=a("a"),yF=o("tf.keras.Model"),vF=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wF=c(),v(pa.$$.fragment),TF=c(),Zt=a("div"),v(Dl.$$.fragment),$F=c(),On=a("p"),FF=o("The "),Mp=a("a"),xF=o("TFRobertaForMultipleChoice"),RF=o(" forward method, overrides the "),Pm=a("code"),EF=o("__call__"),MF=o(" special method."),zF=c(),v(ha.$$.fragment),CF=c(),v(ma.$$.fragment),Ig=c(),Nn=a("h2"),ua=a("a"),Am=a("span"),v(Sl.$$.fragment),qF=c(),Lm=a("span"),jF=o("TFRobertaForTokenClassification"),Dg=c(),gt=a("div"),v(Bl.$$.fragment),PF=c(),Om=a("p"),AF=o(`RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),LF=c(),Wl=a("p"),OF=o("This model inherits from "),zp=a("a"),NF=o("TFPreTrainedModel"),IF=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),DF=c(),Ul=a("p"),SF=o("This model is also a "),Hl=a("a"),BF=o("tf.keras.Model"),WF=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),UF=c(),v(fa.$$.fragment),HF=c(),Lt=a("div"),v(Ql.$$.fragment),QF=c(),In=a("p"),KF=o("The "),Cp=a("a"),JF=o("TFRobertaForTokenClassification"),VF=o(" forward method, overrides the "),Nm=a("code"),GF=o("__call__"),XF=o(" special method."),YF=c(),v(ga.$$.fragment),ZF=c(),v(_a.$$.fragment),e0=c(),v(ba.$$.fragment),Sg=c(),Dn=a("h2"),ka=a("a"),Im=a("span"),v(Kl.$$.fragment),t0=c(),Dm=a("span"),o0=o("TFRobertaForQuestionAnswering"),Bg=c(),_t=a("div"),v(Jl.$$.fragment),n0=c(),Sn=a("p"),s0=o(`RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Sm=a("code"),a0=o("span start logits"),r0=o(" and "),Bm=a("code"),i0=o("span end logits"),l0=o(")."),d0=c(),Vl=a("p"),c0=o("This model inherits from "),qp=a("a"),p0=o("TFPreTrainedModel"),h0=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),m0=c(),Gl=a("p"),u0=o("This model is also a "),Xl=a("a"),f0=o("tf.keras.Model"),g0=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_0=c(),v(ya.$$.fragment),b0=c(),Ot=a("div"),v(Yl.$$.fragment),k0=c(),Bn=a("p"),y0=o("The "),jp=a("a"),v0=o("TFRobertaForQuestionAnswering"),w0=o(" forward method, overrides the "),Wm=a("code"),T0=o("__call__"),$0=o(" special method."),F0=c(),v(va.$$.fragment),x0=c(),v(wa.$$.fragment),R0=c(),v(Ta.$$.fragment),Wg=c(),Wn=a("h2"),$a=a("a"),Um=a("span"),v(Zl.$$.fragment),E0=c(),Hm=a("span"),M0=o("FlaxRobertaModel"),Ug=c(),nt=a("div"),v(ed.$$.fragment),z0=c(),Qm=a("p"),C0=o("The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),q0=c(),td=a("p"),j0=o("This model inherits from "),Pp=a("a"),P0=o("FlaxPreTrainedModel"),A0=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),L0=c(),od=a("p"),O0=o("This model is also a Flax Linen "),nd=a("a"),N0=o("flax.linen.Module"),I0=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),D0=c(),Km=a("p"),S0=o("Finally, this model supports inherent JAX features such as:"),B0=c(),fo=a("ul"),Jm=a("li"),sd=a("a"),W0=o("Just-In-Time (JIT) compilation"),U0=c(),Vm=a("li"),ad=a("a"),H0=o("Automatic Differentiation"),Q0=c(),Gm=a("li"),rd=a("a"),K0=o("Vectorization"),J0=c(),Xm=a("li"),id=a("a"),V0=o("Parallelization"),G0=c(),eo=a("div"),v(ld.$$.fragment),X0=c(),Un=a("p"),Y0=o("The "),Ym=a("code"),Z0=o("FlaxRobertaPreTrainedModel"),ex=o(" forward method, overrides the "),Zm=a("code"),tx=o("__call__"),ox=o(" special method."),nx=c(),v(Fa.$$.fragment),sx=c(),v(xa.$$.fragment),Hg=c(),Hn=a("h2"),Ra=a("a"),eu=a("span"),v(dd.$$.fragment),ax=c(),tu=a("span"),rx=o("FlaxRobertaForCausalLM"),Qg=c(),st=a("div"),v(cd.$$.fragment),ix=c(),ou=a("p"),lx=o(`Roberta Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),dx=c(),pd=a("p"),cx=o("This model inherits from "),Ap=a("a"),px=o("FlaxPreTrainedModel"),hx=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),mx=c(),hd=a("p"),ux=o("This model is also a Flax Linen "),md=a("a"),fx=o("flax.linen.Module"),gx=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),_x=c(),nu=a("p"),bx=o("Finally, this model supports inherent JAX features such as:"),kx=c(),go=a("ul"),su=a("li"),ud=a("a"),yx=o("Just-In-Time (JIT) compilation"),vx=c(),au=a("li"),fd=a("a"),wx=o("Automatic Differentiation"),Tx=c(),ru=a("li"),gd=a("a"),$x=o("Vectorization"),Fx=c(),iu=a("li"),_d=a("a"),xx=o("Parallelization"),Rx=c(),to=a("div"),v(bd.$$.fragment),Ex=c(),Qn=a("p"),Mx=o("The "),lu=a("code"),zx=o("FlaxRobertaPreTrainedModel"),Cx=o(" forward method, overrides the "),du=a("code"),qx=o("__call__"),jx=o(" special method."),Px=c(),v(Ea.$$.fragment),Ax=c(),v(Ma.$$.fragment),Kg=c(),Kn=a("h2"),za=a("a"),cu=a("span"),v(kd.$$.fragment),Lx=c(),pu=a("span"),Ox=o("FlaxRobertaForMaskedLM"),Jg=c(),at=a("div"),v(yd.$$.fragment),Nx=c(),vd=a("p"),Ix=o("RoBERTa Model with a "),hu=a("code"),Dx=o("language modeling"),Sx=o(" head on top."),Bx=c(),wd=a("p"),Wx=o("This model inherits from "),Lp=a("a"),Ux=o("FlaxPreTrainedModel"),Hx=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Qx=c(),Td=a("p"),Kx=o("This model is also a Flax Linen "),$d=a("a"),Jx=o("flax.linen.Module"),Vx=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Gx=c(),mu=a("p"),Xx=o("Finally, this model supports inherent JAX features such as:"),Yx=c(),_o=a("ul"),uu=a("li"),Fd=a("a"),Zx=o("Just-In-Time (JIT) compilation"),eR=c(),fu=a("li"),xd=a("a"),tR=o("Automatic Differentiation"),oR=c(),gu=a("li"),Rd=a("a"),nR=o("Vectorization"),sR=c(),_u=a("li"),Ed=a("a"),aR=o("Parallelization"),rR=c(),oo=a("div"),v(Md.$$.fragment),iR=c(),Jn=a("p"),lR=o("The "),bu=a("code"),dR=o("FlaxRobertaPreTrainedModel"),cR=o(" forward method, overrides the "),ku=a("code"),pR=o("__call__"),hR=o(" special method."),mR=c(),v(Ca.$$.fragment),uR=c(),v(qa.$$.fragment),Vg=c(),Vn=a("h2"),ja=a("a"),yu=a("span"),v(zd.$$.fragment),fR=c(),vu=a("span"),gR=o("FlaxRobertaForSequenceClassification"),Gg=c(),rt=a("div"),v(Cd.$$.fragment),_R=c(),wu=a("p"),bR=o(`Roberta Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),kR=c(),qd=a("p"),yR=o("This model inherits from "),Op=a("a"),vR=o("FlaxPreTrainedModel"),wR=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),TR=c(),jd=a("p"),$R=o("This model is also a Flax Linen "),Pd=a("a"),FR=o("flax.linen.Module"),xR=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),RR=c(),Tu=a("p"),ER=o("Finally, this model supports inherent JAX features such as:"),MR=c(),bo=a("ul"),$u=a("li"),Ad=a("a"),zR=o("Just-In-Time (JIT) compilation"),CR=c(),Fu=a("li"),Ld=a("a"),qR=o("Automatic Differentiation"),jR=c(),xu=a("li"),Od=a("a"),PR=o("Vectorization"),AR=c(),Ru=a("li"),Nd=a("a"),LR=o("Parallelization"),OR=c(),no=a("div"),v(Id.$$.fragment),NR=c(),Gn=a("p"),IR=o("The "),Eu=a("code"),DR=o("FlaxRobertaPreTrainedModel"),SR=o(" forward method, overrides the "),Mu=a("code"),BR=o("__call__"),WR=o(" special method."),UR=c(),v(Pa.$$.fragment),HR=c(),v(Aa.$$.fragment),Xg=c(),Xn=a("h2"),La=a("a"),zu=a("span"),v(Dd.$$.fragment),QR=c(),Cu=a("span"),KR=o("FlaxRobertaForMultipleChoice"),Yg=c(),it=a("div"),v(Sd.$$.fragment),JR=c(),qu=a("p"),VR=o(`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),GR=c(),Bd=a("p"),XR=o("This model inherits from "),Np=a("a"),YR=o("FlaxPreTrainedModel"),ZR=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),eE=c(),Wd=a("p"),tE=o("This model is also a Flax Linen "),Ud=a("a"),oE=o("flax.linen.Module"),nE=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),sE=c(),ju=a("p"),aE=o("Finally, this model supports inherent JAX features such as:"),rE=c(),ko=a("ul"),Pu=a("li"),Hd=a("a"),iE=o("Just-In-Time (JIT) compilation"),lE=c(),Au=a("li"),Qd=a("a"),dE=o("Automatic Differentiation"),cE=c(),Lu=a("li"),Kd=a("a"),pE=o("Vectorization"),hE=c(),Ou=a("li"),Jd=a("a"),mE=o("Parallelization"),uE=c(),so=a("div"),v(Vd.$$.fragment),fE=c(),Yn=a("p"),gE=o("The "),Nu=a("code"),_E=o("FlaxRobertaPreTrainedModel"),bE=o(" forward method, overrides the "),Iu=a("code"),kE=o("__call__"),yE=o(" special method."),vE=c(),v(Oa.$$.fragment),wE=c(),v(Na.$$.fragment),Zg=c(),Zn=a("h2"),Ia=a("a"),Du=a("span"),v(Gd.$$.fragment),TE=c(),Su=a("span"),$E=o("FlaxRobertaForTokenClassification"),e_=c(),lt=a("div"),v(Xd.$$.fragment),FE=c(),Bu=a("p"),xE=o(`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),RE=c(),Yd=a("p"),EE=o("This model inherits from "),Ip=a("a"),ME=o("FlaxPreTrainedModel"),zE=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),CE=c(),Zd=a("p"),qE=o("This model is also a Flax Linen "),ec=a("a"),jE=o("flax.linen.Module"),PE=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),AE=c(),Wu=a("p"),LE=o("Finally, this model supports inherent JAX features such as:"),OE=c(),yo=a("ul"),Uu=a("li"),tc=a("a"),NE=o("Just-In-Time (JIT) compilation"),IE=c(),Hu=a("li"),oc=a("a"),DE=o("Automatic Differentiation"),SE=c(),Qu=a("li"),nc=a("a"),BE=o("Vectorization"),WE=c(),Ku=a("li"),sc=a("a"),UE=o("Parallelization"),HE=c(),ao=a("div"),v(ac.$$.fragment),QE=c(),es=a("p"),KE=o("The "),Ju=a("code"),JE=o("FlaxRobertaPreTrainedModel"),VE=o(" forward method, overrides the "),Vu=a("code"),GE=o("__call__"),XE=o(" special method."),YE=c(),v(Da.$$.fragment),ZE=c(),v(Sa.$$.fragment),t_=c(),ts=a("h2"),Ba=a("a"),Gu=a("span"),v(rc.$$.fragment),eM=c(),Xu=a("span"),tM=o("FlaxRobertaForQuestionAnswering"),o_=c(),dt=a("div"),v(ic.$$.fragment),oM=c(),os=a("p"),nM=o(`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Yu=a("code"),sM=o("span start logits"),aM=o(" and "),Zu=a("code"),rM=o("span end logits"),iM=o(")."),lM=c(),lc=a("p"),dM=o("This model inherits from "),Dp=a("a"),cM=o("FlaxPreTrainedModel"),pM=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),hM=c(),dc=a("p"),mM=o("This model is also a Flax Linen "),cc=a("a"),uM=o("flax.linen.Module"),fM=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),gM=c(),ef=a("p"),_M=o("Finally, this model supports inherent JAX features such as:"),bM=c(),vo=a("ul"),tf=a("li"),pc=a("a"),kM=o("Just-In-Time (JIT) compilation"),yM=c(),of=a("li"),hc=a("a"),vM=o("Automatic Differentiation"),wM=c(),nf=a("li"),mc=a("a"),TM=o("Vectorization"),$M=c(),sf=a("li"),uc=a("a"),FM=o("Parallelization"),xM=c(),ro=a("div"),v(fc.$$.fragment),RM=c(),ns=a("p"),EM=o("The "),af=a("code"),MM=o("FlaxRobertaPreTrainedModel"),zM=o(" forward method, overrides the "),rf=a("code"),CM=o("__call__"),qM=o(" special method."),jM=c(),v(Wa.$$.fragment),PM=c(),v(Ua.$$.fragment),this.h()},l(s){const g=w3('[data-svelte="svelte-1phssyn"]',document.head);d=r(g,"META",{name:!0,content:!0}),g.forEach(t),_=p(s),m=r(s,"H1",{class:!0});var gc=i(m);f=r(gc,"A",{id:!0,class:!0,href:!0});var lf=i(f);k=r(lf,"SPAN",{});var df=i(k);w(l.$$.fragment,df),df.forEach(t),lf.forEach(t),u=p(gc),E=r(gc,"SPAN",{});var cf=i(E);le=n(cf,"RoBERTa"),cf.forEach(t),gc.forEach(t),Z=p(s),N=r(s,"H2",{class:!0});var _c=i(N);te=r(_c,"A",{id:!0,class:!0,href:!0});var pf=i(te);oe=r(pf,"SPAN",{});var hf=i(oe);w(M.$$.fragment,hf),hf.forEach(t),pf.forEach(t),we=p(_c),K=r(_c,"SPAN",{});var mf=i(K);Te=n(mf,"Overview"),mf.forEach(t),_c.forEach(t),ge=p(s),B=r(s,"P",{});var bc=i(B);$e=n(bc,"The RoBERTa model was proposed in "),pe=r(bc,"A",{href:!0,rel:!0});var uf=i(pe);J=n(uf,"RoBERTa: A Robustly Optimized BERT Pretraining Approach"),uf.forEach(t),Fe=n(bc,` by Yinhan Liu, Myle Ott, Naman Goyal, Jingfei Du, Mandar Joshi, Danqi Chen, Omer
Levy, Mike Lewis, Luke Zettlemoyer, Veselin Stoyanov. It is based on Google\u2019s BERT model released in 2018.`),bc.forEach(t),_e=p(s),U=r(s,"P",{});var ff=i(U);xe=n(ff,`It builds on BERT and modifies key hyperparameters, removing the next-sentence pretraining objective and training with
much larger mini-batches and learning rates.`),ff.forEach(t),be=p(s),H=r(s,"P",{});var gf=i(H);Re=n(gf,"The abstract from the paper is the following:"),gf.forEach(t),ke=p(s),ee=r(s,"P",{});var _f=i(ee);q=r(_f,"EM",{});var bf=i(q);P=n(bf,`Language model pretraining has led to significant performance gains but careful comparison between different
approaches is challenging. Training is computationally expensive, often done on private datasets of different sizes,
and, as we will show, hyperparameter choices have significant impact on the final results. We present a replication
study of BERT pretraining (Devlin et al., 2019) that carefully measures the impact of many key hyperparameters and
training data size. We find that BERT was significantly undertrained, and can match or exceed the performance of every
model published after it. Our best model achieves state-of-the-art results on GLUE, RACE and SQuAD. These results
highlight the importance of previously overlooked design choices, and raise questions about the source of recently
reported improvements. We release our models and code.`),bf.forEach(t),_f.forEach(t),ye=p(s),Q=r(s,"P",{});var kf=i(Q);Ee=n(kf,"Tips:"),kf.forEach(t),ve=p(s),I=r(s,"UL",{});var wo=i(I);he=r(wo,"LI",{});var kc=i(he);Me=n(kc,"This implementation is the same as "),j=r(kc,"A",{href:!0});var yf=i(j);ze=n(yf,"BertModel"),yf.forEach(t),V=n(kc,` with a tiny embeddings tweak as well as a setup
for Roberta pretrained models.`),kc.forEach(t),Ce=p(wo),me=r(wo,"LI",{});var vf=i(me);G=n(vf,`RoBERTa has the same architecture as BERT, but uses a byte-level BPE as a tokenizer (same as GPT-2) and uses a
different pretraining scheme.`),vf.forEach(t),qe=p(wo),ne=r(wo,"LI",{});var To=i(ne);D=n(To,"RoBERTa doesn\u2019t have "),ue=r(To,"CODE",{});var wf=i(ue);X=n(wf,"token_type_ids"),wf.forEach(t),je=n(To,`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),se=r(To,"CODE",{});var Tf=i(se);A=n(Tf,"tokenizer.sep_token"),Tf.forEach(t),Pe=n(To," (or "),L=r(To,"CODE",{});var $f=i(L);Ae=n($f,"</s>"),$f.forEach(t),Le=n(To,")"),To.forEach(t),y=p(wo),z=r(wo,"LI",{});var Sp=i(z);Ue=r(Sp,"A",{href:!0});var Ff=i(Ue);de=n(Ff,"CamemBERT"),Ff.forEach(t),Xe=n(Sp," is a wrapper around RoBERTa. Refer to this page for usage examples."),Sp.forEach(t),wo.forEach(t),Ke=p(s),C=r(s,"P",{});var ss=i(C);Ye=n(ss,"This model was contributed by "),Se=r(ss,"A",{href:!0,rel:!0});var xf=i(Se);Ze=n(xf,"julien-c"),xf.forEach(t),et=n(ss,". The original code can be found "),Be=r(ss,"A",{href:!0,rel:!0});var Rf=i(Be);S=n(Rf,"here"),Rf.forEach(t),Y=n(ss,"."),ss.forEach(t),Je=p(s),Oe=r(s,"H2",{class:!0});var yc=i(Oe);W=r(yc,"A",{id:!0,class:!0,href:!0});var Ef=i(W);He=r(Ef,"SPAN",{});var Mf=i(He);w(We.$$.fragment,Mf),Mf.forEach(t),Ef.forEach(t),Ne=p(yc),Qe=r(yc,"SPAN",{});var zf=i(Qe);ce=n(zf,"Resources"),zf.forEach(t),yc.forEach(t),Ve=p(s),zc=r(s,"P",{});var Cf=i(zc);jb=n(Cf,"A list of official Hugging Face and community (indicated by \u{1F30E}) resources to help you get started with RoBERTa. If you\u2019re interested in submitting a resource to be included here, please feel free to open a Pull Request and we\u2019ll review it! The resource should ideally demonstrate something new instead of duplicating an existing resource."),Cf.forEach(t),Zf=p(s),w(mr.$$.fragment,s),eg=p(s),bt=r(s,"UL",{});var Et=i(bt);an=r(Et,"LI",{});var as=i(an);Pb=n(as,"A blog on "),ur=r(as,"A",{href:!0,rel:!0});var qf=i(ur);Ab=n(qf,"Getting Started with Sentiment Analysis on Twitter"),qf.forEach(t),Lb=n(as," using RoBERTa and the "),fr=r(as,"A",{href:!0,rel:!0});var jf=i(fr);Ob=n(jf,"Inference API"),jf.forEach(t),Nb=n(as,"."),as.forEach(t),Ib=p(Et),gr=r(Et,"LI",{});var vc=i(gr);Db=n(vc,"A blog on "),_r=r(vc,"A",{href:!0,rel:!0});var Pf=i(_r);Sb=n(Pf,"Opinion Classification with Kili and Hugging Face AutoTrain"),Pf.forEach(t),Bb=n(vc," using RoBERTa."),vc.forEach(t),Wb=p(Et),br=r(Et,"LI",{});var wc=i(br);Ub=n(wc,"A notebook on how to "),kr=r(wc,"A",{href:!0,rel:!0});var Af=i(kr);Hb=n(Af,"finetune RoBERTa for sentiment analysis"),Af.forEach(t),Qb=n(wc,". \u{1F30E}"),wc.forEach(t),Kb=p(Et),Fo=r(Et,"LI",{});var No=i(Fo);Cc=r(No,"A",{href:!0});var Lf=i(Cc);Jb=n(Lf,"RobertaForSequenceClassification"),Lf.forEach(t),Vb=n(No," is supported by this "),yr=r(No,"A",{href:!0,rel:!0});var Of=i(yr);Gb=n(Of,"example script"),Of.forEach(t),Xb=n(No," and "),vr=r(No,"A",{href:!0,rel:!0});var Nf=i(vr);Yb=n(Nf,"notebook"),Nf.forEach(t),Zb=n(No,"."),No.forEach(t),ek=p(Et),xo=r(Et,"LI",{});var Io=i(xo);qc=r(Io,"A",{href:!0});var If=i(qc);tk=n(If,"TFRobertaForSequenceClassification"),If.forEach(t),ok=n(Io," is supported by this "),wr=r(Io,"A",{href:!0,rel:!0});var Df=i(wr);nk=n(Df,"example script"),Df.forEach(t),sk=n(Io," and "),Tr=r(Io,"A",{href:!0,rel:!0});var Sf=i(Tr);ak=n(Sf,"notebook"),Sf.forEach(t),rk=n(Io,"."),Io.forEach(t),ik=p(Et),Ro=r(Et,"LI",{});var Do=i(Ro);jc=r(Do,"A",{href:!0});var Bf=i(jc);lk=n(Bf,"FlaxRobertaForSequenceClassification"),Bf.forEach(t),dk=n(Do," is supported by this "),$r=r(Do,"A",{href:!0,rel:!0});var Wf=i($r);ck=n(Wf,"example script"),Wf.forEach(t),pk=n(Do," and "),Fr=r(Do,"A",{href:!0,rel:!0});var Uf=i(Fr);hk=n(Uf,"notebook"),Uf.forEach(t),mk=n(Do,"."),Do.forEach(t),Et.forEach(t),tg=p(s),w(xr.$$.fragment,s),og=p(s),Kt=r(s,"UL",{});var $o=i(Kt);Eo=r($o,"LI",{});var So=i(Eo);Pc=r(So,"A",{href:!0});var Hf=i(Pc);uk=n(Hf,"RobertaForTokenClassification"),Hf.forEach(t),fk=n(So," is supported by this "),Rr=r(So,"A",{href:!0,rel:!0});var Qf=i(Rr);gk=n(Qf,"example script"),Qf.forEach(t),_k=n(So," and "),Er=r(So,"A",{href:!0,rel:!0});var Kf=i(Er);bk=n(Kf,"notebook"),Kf.forEach(t),kk=n(So,"."),So.forEach(t),yk=p($o),Mo=r($o,"LI",{});var Bo=i(Mo);Ac=r(Bo,"A",{href:!0});var Jf=i(Ac);vk=n(Jf,"TFRobertaForTokenClassification"),Jf.forEach(t),wk=n(Bo," is supported by this "),Mr=r(Bo,"A",{href:!0,rel:!0});var Vf=i(Mr);Tk=n(Vf,"example script"),Vf.forEach(t),$k=n(Bo," and "),zr=r(Bo,"A",{href:!0,rel:!0});var Gf=i(zr);Fk=n(Gf,"notebook"),Gf.forEach(t),xk=n(Bo,"."),Bo.forEach(t),Rk=p($o),rs=r($o,"LI",{});var Ha=i(rs);Lc=r(Ha,"A",{href:!0});var DM=i(Lc);Ek=n(DM,"FlaxRobertaForTokenClassification"),DM.forEach(t),Mk=n(Ha," is supported by this "),Cr=r(Ha,"A",{href:!0,rel:!0});var SM=i(Cr);zk=n(SM,"example script"),SM.forEach(t),Ck=n(Ha,"."),Ha.forEach(t),qk=p($o),Oc=r($o,"LI",{});var AM=i(Oc);qr=r(AM,"A",{href:!0,rel:!0});var BM=i(qr);jk=n(BM,"Token classification"),BM.forEach(t),Pk=n(AM," chapter of the \u{1F917} Hugging Face Course."),AM.forEach(t),$o.forEach(t),ng=p(s),w(jr.$$.fragment,s),sg=p(s),Mt=r(s,"UL",{});var Wo=i(Mt);Pr=r(Wo,"LI",{});var s_=i(Pr);Ak=n(s_,"A blog on "),Ar=r(s_,"A",{href:!0,rel:!0});var WM=i(Ar);Lk=n(WM,"How to train a new language model from scratch using Transformers and Tokenizers"),WM.forEach(t),Ok=n(s_," with RoBERTa."),s_.forEach(t),Nk=p(Wo),zo=r(Wo,"LI",{});var Tc=i(zo);Nc=r(Tc,"A",{href:!0});var UM=i(Nc);Ik=n(UM,"RobertaForMaskedLM"),UM.forEach(t),Dk=n(Tc," is supported by this "),Lr=r(Tc,"A",{href:!0,rel:!0});var HM=i(Lr);Sk=n(HM,"example script"),HM.forEach(t),Bk=n(Tc," and "),Or=r(Tc,"A",{href:!0,rel:!0});var QM=i(Or);Wk=n(QM,"notebook"),QM.forEach(t),Uk=n(Tc,"."),Tc.forEach(t),Hk=p(Wo),Co=r(Wo,"LI",{});var $c=i(Co);Ic=r($c,"A",{href:!0});var KM=i(Ic);Qk=n(KM,"TFRobertaForMaskedLM"),KM.forEach(t),Kk=n($c," is supported by this "),Nr=r($c,"A",{href:!0,rel:!0});var JM=i(Nr);Jk=n(JM,"example script"),JM.forEach(t),Vk=n($c," and "),Ir=r($c,"A",{href:!0,rel:!0});var VM=i(Ir);Gk=n(VM,"notebook"),VM.forEach(t),Xk=n($c,"."),$c.forEach(t),Yk=p(Wo),qo=r(Wo,"LI",{});var Fc=i(qo);Dc=r(Fc,"A",{href:!0});var GM=i(Dc);Zk=n(GM,"FlaxRobertaForMaskedLM"),GM.forEach(t),ey=n(Fc," is supported by this "),Dr=r(Fc,"A",{href:!0,rel:!0});var XM=i(Dr);ty=n(XM,"example script"),XM.forEach(t),oy=n(Fc," and "),Sr=r(Fc,"A",{href:!0,rel:!0});var YM=i(Sr);ny=n(YM,"notebook"),YM.forEach(t),sy=n(Fc,"."),Fc.forEach(t),ay=p(Wo),Sc=r(Wo,"LI",{});var LM=i(Sc);Br=r(LM,"A",{href:!0,rel:!0});var ZM=i(Br);ry=n(ZM,"Masked language modeling"),ZM.forEach(t),iy=n(LM," chapter of the \u{1F917} Hugging Face Course."),LM.forEach(t),Wo.forEach(t),ag=p(s),w(Wr.$$.fragment,s),rg=p(s),zt=r(s,"UL",{});var Uo=i(zt);Ur=r(Uo,"LI",{});var a_=i(Ur);ly=n(a_,"A blog on "),Hr=r(a_,"A",{href:!0,rel:!0});var e4=i(Hr);dy=n(e4,"Accelerated Inference with Optimum and Transformers Pipelines"),e4.forEach(t),cy=n(a_," with RoBERTa for question answering."),a_.forEach(t),py=p(Uo),jo=r(Uo,"LI",{});var xc=i(jo);Bc=r(xc,"A",{href:!0});var t4=i(Bc);hy=n(t4,"RobertaForQuestionAnswering"),t4.forEach(t),my=n(xc," is supported by this "),Qr=r(xc,"A",{href:!0,rel:!0});var o4=i(Qr);uy=n(o4,"example script"),o4.forEach(t),fy=n(xc," and "),Kr=r(xc,"A",{href:!0,rel:!0});var n4=i(Kr);gy=n(n4,"notebook"),n4.forEach(t),_y=n(xc,"."),xc.forEach(t),by=p(Uo),Po=r(Uo,"LI",{});var Rc=i(Po);Wc=r(Rc,"A",{href:!0});var s4=i(Wc);ky=n(s4,"TFRobertaForQuestionAnswering"),s4.forEach(t),yy=n(Rc," is supported by this "),Jr=r(Rc,"A",{href:!0,rel:!0});var a4=i(Jr);vy=n(a4,"example script"),a4.forEach(t),wy=n(Rc," and "),Vr=r(Rc,"A",{href:!0,rel:!0});var r4=i(Vr);Ty=n(r4,"notebook"),r4.forEach(t),$y=n(Rc,"."),Rc.forEach(t),Fy=p(Uo),is=r(Uo,"LI",{});var Xf=i(is);Uc=r(Xf,"A",{href:!0});var i4=i(Uc);xy=n(i4,"FlaxRobertaForQuestionAnswering"),i4.forEach(t),Ry=n(Xf," is supported by this "),Gr=r(Xf,"A",{href:!0,rel:!0});var l4=i(Gr);Ey=n(l4,"example script"),l4.forEach(t),My=n(Xf,"."),Xf.forEach(t),zy=p(Uo),Hc=r(Uo,"LI",{});var OM=i(Hc);Xr=r(OM,"A",{href:!0,rel:!0});var d4=i(Xr);Cy=n(d4,"Question answering"),d4.forEach(t),qy=n(OM," chapter of the \u{1F917} Hugging Face Course."),OM.forEach(t),Uo.forEach(t),ig=p(s),Qc=r(s,"P",{});var c4=i(Qc);fh=r(c4,"STRONG",{});var p4=i(fh);jy=n(p4,"Multiple choice"),p4.forEach(t),c4.forEach(t),lg=p(s),ls=r(s,"UL",{});var r_=i(ls);Ao=r(r_,"LI",{});var Ec=i(Ao);Kc=r(Ec,"A",{href:!0});var h4=i(Kc);Py=n(h4,"RobertaForMultipleChoice"),h4.forEach(t),Ay=n(Ec," is supported by this "),Yr=r(Ec,"A",{href:!0,rel:!0});var m4=i(Yr);Ly=n(m4,"example script"),m4.forEach(t),Oy=n(Ec," and "),Zr=r(Ec,"A",{href:!0,rel:!0});var u4=i(Zr);Ny=n(u4,"notebook"),u4.forEach(t),Iy=n(Ec,"."),Ec.forEach(t),Dy=p(r_),Lo=r(r_,"LI",{});var Mc=i(Lo);Jc=r(Mc,"A",{href:!0});var f4=i(Jc);Sy=n(f4,"TFRobertaForMultipleChoice"),f4.forEach(t),By=n(Mc," is supported by this "),ei=r(Mc,"A",{href:!0,rel:!0});var g4=i(ei);Wy=n(g4,"example script"),g4.forEach(t),Uy=n(Mc," and "),ti=r(Mc,"A",{href:!0,rel:!0});var _4=i(ti);Hy=n(_4,"notebook"),_4.forEach(t),Qy=n(Mc,"."),Mc.forEach(t),r_.forEach(t),dg=p(s),rn=r(s,"H2",{class:!0});var i_=i(rn);ds=r(i_,"A",{id:!0,class:!0,href:!0});var b4=i(ds);gh=r(b4,"SPAN",{});var k4=i(gh);w(oi.$$.fragment,k4),k4.forEach(t),b4.forEach(t),Ky=p(i_),_h=r(i_,"SPAN",{});var y4=i(_h);Jy=n(y4,"RobertaConfig"),y4.forEach(t),i_.forEach(t),cg=p(s),vt=r(s,"DIV",{class:!0});var Ho=i(vt);w(ni.$$.fragment,Ho),Vy=p(Ho),uo=r(Ho,"P",{});var Qa=i(uo);Gy=n(Qa,"This is the configuration class to store the configuration of a "),Vc=r(Qa,"A",{href:!0});var v4=i(Vc);Xy=n(v4,"RobertaModel"),v4.forEach(t),Yy=n(Qa," or a "),Gc=r(Qa,"A",{href:!0});var w4=i(Gc);Zy=n(w4,"TFRobertaModel"),w4.forEach(t),ev=n(Qa,`. It is
used to instantiate a RoBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the RoBERTa
`),si=r(Qa,"A",{href:!0,rel:!0});var T4=i(si);tv=n(T4,"roberta-base"),T4.forEach(t),ov=n(Qa," architecture."),Qa.forEach(t),nv=p(Ho),ln=r(Ho,"P",{});var Bp=i(ln);sv=n(Bp,"Configuration objects inherit from "),Xc=r(Bp,"A",{href:!0});var $4=i(Xc);av=n($4,"PretrainedConfig"),$4.forEach(t),rv=n(Bp,` and can be used to control the model outputs. Read the
documentation from `),Yc=r(Bp,"A",{href:!0});var F4=i(Yc);iv=n(F4,"PretrainedConfig"),F4.forEach(t),lv=n(Bp," for more information."),Bp.forEach(t),dv=p(Ho),dn=r(Ho,"P",{});var Wp=i(dn);cv=n(Wp,"The "),Zc=r(Wp,"A",{href:!0});var x4=i(Zc);pv=n(x4,"RobertaConfig"),x4.forEach(t),hv=n(Wp," class directly inherits "),ep=r(Wp,"A",{href:!0});var R4=i(ep);mv=n(R4,"BertConfig"),R4.forEach(t),uv=n(Wp,`. It reuses the same defaults. Please check the parent
class for more information.`),Wp.forEach(t),fv=p(Ho),w(cs.$$.fragment,Ho),Ho.forEach(t),pg=p(s),cn=r(s,"H2",{class:!0});var l_=i(cn);ps=r(l_,"A",{id:!0,class:!0,href:!0});var E4=i(ps);bh=r(E4,"SPAN",{});var M4=i(bh);w(ai.$$.fragment,M4),M4.forEach(t),E4.forEach(t),gv=p(l_),kh=r(l_,"SPAN",{});var z4=i(kh);_v=n(z4,"RobertaTokenizer"),z4.forEach(t),l_.forEach(t),hg=p(s),Ie=r(s,"DIV",{class:!0});var Ge=i(Ie);w(ri.$$.fragment,Ge),bv=p(Ge),yh=r(Ge,"P",{});var C4=i(yh);kv=n(C4,"Constructs a RoBERTa tokenizer, derived from the GPT-2 tokenizer, using byte-level Byte-Pair-Encoding."),C4.forEach(t),yv=p(Ge),vh=r(Ge,"P",{});var q4=i(vh);vv=n(q4,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),q4.forEach(t),wv=p(Ge),w(hs.$$.fragment,Ge),Tv=p(Ge),ii=r(Ge,"P",{});var d_=i(ii);$v=n(d_,"You can get around that behavior by passing "),wh=r(d_,"CODE",{});var j4=i(wh);Fv=n(j4,"add_prefix_space=True"),j4.forEach(t),xv=n(d_,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),d_.forEach(t),Rv=p(Ge),w(ms.$$.fragment,Ge),Ev=p(Ge),li=r(Ge,"P",{});var c_=i(li);Mv=n(c_,"This tokenizer inherits from "),tp=r(c_,"A",{href:!0});var P4=i(tp);zv=n(P4,"PreTrainedTokenizer"),P4.forEach(t),Cv=n(c_,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),c_.forEach(t),qv=p(Ge),Oo=r(Ge,"DIV",{class:!0});var Up=i(Oo);w(di.$$.fragment,Up),jv=p(Up),Th=r(Up,"P",{});var A4=i(Th);Pv=n(A4,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoBERTa sequence has the following format:`),A4.forEach(t),Av=p(Up),ci=r(Up,"UL",{});var p_=i(ci);op=r(p_,"LI",{});var NM=i(op);Lv=n(NM,"single sequence: "),$h=r(NM,"CODE",{});var L4=i($h);Ov=n(L4,"<s> X </s>"),L4.forEach(t),NM.forEach(t),Nv=p(p_),np=r(p_,"LI",{});var IM=i(np);Iv=n(IM,"pair of sequences: "),Fh=r(IM,"CODE",{});var O4=i(Fh);Dv=n(O4,"<s> A </s></s> B </s>"),O4.forEach(t),IM.forEach(t),p_.forEach(t),Up.forEach(t),Sv=p(Ge),us=r(Ge,"DIV",{class:!0});var h_=i(us);w(pi.$$.fragment,h_),Bv=p(h_),hi=r(h_,"P",{});var m_=i(hi);Wv=n(m_,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),xh=r(m_,"CODE",{});var N4=i(xh);Uv=n(N4,"prepare_for_model"),N4.forEach(t),Hv=n(m_," method."),m_.forEach(t),h_.forEach(t),Qv=p(Ge),fs=r(Ge,"DIV",{class:!0});var u_=i(fs);w(mi.$$.fragment,u_),Kv=p(u_),Rh=r(u_,"P",{});var I4=i(Rh);Jv=n(I4,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. RoBERTa does not
make use of token type ids, therefore a list of zeros is returned.`),I4.forEach(t),u_.forEach(t),Vv=p(Ge),sp=r(Ge,"DIV",{class:!0});var D4=i(sp);w(ui.$$.fragment,D4),D4.forEach(t),Ge.forEach(t),mg=p(s),pn=r(s,"H2",{class:!0});var f_=i(pn);gs=r(f_,"A",{id:!0,class:!0,href:!0});var S4=i(gs);Eh=r(S4,"SPAN",{});var B4=i(Eh);w(fi.$$.fragment,B4),B4.forEach(t),S4.forEach(t),Gv=p(f_),Mh=r(f_,"SPAN",{});var W4=i(Mh);Xv=n(W4,"RobertaTokenizerFast"),W4.forEach(t),f_.forEach(t),ug=p(s),tt=r(s,"DIV",{class:!0});var kt=i(tt);w(gi.$$.fragment,kt),Yv=p(kt),_i=r(kt,"P",{});var g_=i(_i);Zv=n(g_,"Construct a \u201Cfast\u201D RoBERTa tokenizer (backed by HuggingFace\u2019s "),zh=r(g_,"EM",{});var U4=i(zh);ew=n(U4,"tokenizers"),U4.forEach(t),tw=n(g_,` library), derived from the GPT-2
tokenizer, using byte-level Byte-Pair-Encoding.`),g_.forEach(t),ow=p(kt),Ch=r(kt,"P",{});var H4=i(Ch);nw=n(H4,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),H4.forEach(t),sw=p(kt),w(_s.$$.fragment,kt),aw=p(kt),bi=r(kt,"P",{});var __=i(bi);rw=n(__,"You can get around that behavior by passing "),qh=r(__,"CODE",{});var Q4=i(qh);iw=n(Q4,"add_prefix_space=True"),Q4.forEach(t),lw=n(__,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),__.forEach(t),dw=p(kt),w(bs.$$.fragment,kt),cw=p(kt),ki=r(kt,"P",{});var b_=i(ki);pw=n(b_,"This tokenizer inherits from "),ap=r(b_,"A",{href:!0});var K4=i(ap);hw=n(K4,"PreTrainedTokenizerFast"),K4.forEach(t),mw=n(b_,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),b_.forEach(t),uw=p(kt),rp=r(kt,"DIV",{class:!0});var J4=i(rp);w(yi.$$.fragment,J4),J4.forEach(t),kt.forEach(t),fg=p(s),hn=r(s,"H2",{class:!0});var k_=i(hn);ks=r(k_,"A",{id:!0,class:!0,href:!0});var V4=i(ks);jh=r(V4,"SPAN",{});var G4=i(jh);w(vi.$$.fragment,G4),G4.forEach(t),V4.forEach(t),fw=p(k_),Ph=r(k_,"SPAN",{});var X4=i(Ph);gw=n(X4,"RobertaModel"),X4.forEach(t),k_.forEach(t),gg=p(s),ot=r(s,"DIV",{class:!0});var yt=i(ot);w(wi.$$.fragment,yt),_w=p(yt),Ah=r(yt,"P",{});var Y4=i(Ah);bw=n(Y4,"The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),Y4.forEach(t),kw=p(yt),Ti=r(yt,"P",{});var y_=i(Ti);yw=n(y_,"This model inherits from "),ip=r(y_,"A",{href:!0});var Z4=i(ip);vw=n(Z4,"PreTrainedModel"),Z4.forEach(t),ww=n(y_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),y_.forEach(t),Tw=p(yt),$i=r(yt,"P",{});var v_=i($i);$w=n(v_,"This model is also a PyTorch "),Fi=r(v_,"A",{href:!0,rel:!0});var ez=i(Fi);Fw=n(ez,"torch.nn.Module"),ez.forEach(t),xw=n(v_,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),v_.forEach(t),Rw=p(yt),xi=r(yt,"P",{});var w_=i(xi);Ew=n(w_,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Lh=r(w_,"EM",{});var tz=i(Lh);Mw=n(tz,`Attention is
all you need`),tz.forEach(t),zw=n(w_,`_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`),w_.forEach(t),Cw=p(yt),pt=r(yt,"P",{});var Nt=i(pt);qw=n(Nt,"To behave as an decoder the model needs to be initialized with the "),Oh=r(Nt,"CODE",{});var oz=i(Oh);jw=n(oz,"is_decoder"),oz.forEach(t),Pw=n(Nt,` argument of the configuration set
to `),Nh=r(Nt,"CODE",{});var nz=i(Nh);Aw=n(nz,"True"),nz.forEach(t),Lw=n(Nt,". To be used in a Seq2Seq model, the model needs to initialized with both "),Ih=r(Nt,"CODE",{});var sz=i(Ih);Ow=n(sz,"is_decoder"),sz.forEach(t),Nw=n(Nt,` argument and
`),Dh=r(Nt,"CODE",{});var az=i(Dh);Iw=n(az,"add_cross_attention"),az.forEach(t),Dw=n(Nt," set to "),Sh=r(Nt,"CODE",{});var rz=i(Sh);Sw=n(rz,"True"),rz.forEach(t),Bw=n(Nt,"; an "),Bh=r(Nt,"CODE",{});var iz=i(Bh);Ww=n(iz,"encoder_hidden_states"),iz.forEach(t),Uw=n(Nt," is then expected as an input to the forward pass."),Nt.forEach(t),Hw=p(yt),ys=r(yt,"P",{});var Yf=i(ys);Qw=n(Yf,".. _"),Wh=r(Yf,"EM",{});var lz=i(Wh);Kw=n(lz,"Attention is all you need"),lz.forEach(t),Jw=n(Yf,": "),Ri=r(Yf,"A",{href:!0,rel:!0});var dz=i(Ri);Vw=n(dz,"https://arxiv.org/abs/1706.03762"),dz.forEach(t),Yf.forEach(t),Gw=p(yt),Jt=r(yt,"DIV",{class:!0});var Ka=i(Jt);w(Ei.$$.fragment,Ka),Xw=p(Ka),mn=r(Ka,"P",{});var Hp=i(mn);Yw=n(Hp,"The "),lp=r(Hp,"A",{href:!0});var cz=i(lp);Zw=n(cz,"RobertaModel"),cz.forEach(t),eT=n(Hp," forward method, overrides the "),Uh=r(Hp,"CODE",{});var pz=i(Uh);tT=n(pz,"__call__"),pz.forEach(t),oT=n(Hp," special method."),Hp.forEach(t),nT=p(Ka),w(vs.$$.fragment,Ka),sT=p(Ka),w(ws.$$.fragment,Ka),Ka.forEach(t),yt.forEach(t),_g=p(s),un=r(s,"H2",{class:!0});var T_=i(un);Ts=r(T_,"A",{id:!0,class:!0,href:!0});var hz=i(Ts);Hh=r(hz,"SPAN",{});var mz=i(Hh);w(Mi.$$.fragment,mz),mz.forEach(t),hz.forEach(t),aT=p(T_),Qh=r(T_,"SPAN",{});var uz=i(Qh);rT=n(uz,"RobertaForCausalLM"),uz.forEach(t),T_.forEach(t),bg=p(s),wt=r(s,"DIV",{class:!0});var Qo=i(wt);w(zi.$$.fragment,Qo),iT=p(Qo),Ci=r(Qo,"P",{});var $_=i(Ci);lT=n($_,"RoBERTa Model with a "),Kh=r($_,"CODE",{});var fz=i(Kh);dT=n(fz,"language modeling"),fz.forEach(t),cT=n($_," head on top for CLM fine-tuning."),$_.forEach(t),pT=p(Qo),qi=r(Qo,"P",{});var F_=i(qi);hT=n(F_,"This model inherits from "),dp=r(F_,"A",{href:!0});var gz=i(dp);mT=n(gz,"PreTrainedModel"),gz.forEach(t),uT=n(F_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),F_.forEach(t),fT=p(Qo),ji=r(Qo,"P",{});var x_=i(ji);gT=n(x_,"This model is also a PyTorch "),Pi=r(x_,"A",{href:!0,rel:!0});var _z=i(Pi);_T=n(_z,"torch.nn.Module"),_z.forEach(t),bT=n(x_,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),x_.forEach(t),kT=p(Qo),Vt=r(Qo,"DIV",{class:!0});var Ja=i(Vt);w(Ai.$$.fragment,Ja),yT=p(Ja),fn=r(Ja,"P",{});var Qp=i(fn);vT=n(Qp,"The "),cp=r(Qp,"A",{href:!0});var bz=i(cp);wT=n(bz,"RobertaForCausalLM"),bz.forEach(t),TT=n(Qp," forward method, overrides the "),Jh=r(Qp,"CODE",{});var kz=i(Jh);$T=n(kz,"__call__"),kz.forEach(t),FT=n(Qp," special method."),Qp.forEach(t),xT=p(Ja),w($s.$$.fragment,Ja),RT=p(Ja),w(Fs.$$.fragment,Ja),Ja.forEach(t),Qo.forEach(t),kg=p(s),gn=r(s,"H2",{class:!0});var R_=i(gn);xs=r(R_,"A",{id:!0,class:!0,href:!0});var yz=i(xs);Vh=r(yz,"SPAN",{});var vz=i(Vh);w(Li.$$.fragment,vz),vz.forEach(t),yz.forEach(t),ET=p(R_),Gh=r(R_,"SPAN",{});var wz=i(Gh);MT=n(wz,"RobertaForMaskedLM"),wz.forEach(t),R_.forEach(t),yg=p(s),Tt=r(s,"DIV",{class:!0});var Ko=i(Tt);w(Oi.$$.fragment,Ko),zT=p(Ko),Ni=r(Ko,"P",{});var E_=i(Ni);CT=n(E_,"RoBERTa Model with a "),Xh=r(E_,"CODE",{});var Tz=i(Xh);qT=n(Tz,"language modeling"),Tz.forEach(t),jT=n(E_," head on top."),E_.forEach(t),PT=p(Ko),Ii=r(Ko,"P",{});var M_=i(Ii);AT=n(M_,"This model inherits from "),pp=r(M_,"A",{href:!0});var $z=i(pp);LT=n($z,"PreTrainedModel"),$z.forEach(t),OT=n(M_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),M_.forEach(t),NT=p(Ko),Di=r(Ko,"P",{});var z_=i(Di);IT=n(z_,"This model is also a PyTorch "),Si=r(z_,"A",{href:!0,rel:!0});var Fz=i(Si);DT=n(Fz,"torch.nn.Module"),Fz.forEach(t),ST=n(z_,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),z_.forEach(t),BT=p(Ko),Ct=r(Ko,"DIV",{class:!0});var Jo=i(Ct);w(Bi.$$.fragment,Jo),WT=p(Jo),_n=r(Jo,"P",{});var Kp=i(_n);UT=n(Kp,"The "),hp=r(Kp,"A",{href:!0});var xz=i(hp);HT=n(xz,"RobertaForMaskedLM"),xz.forEach(t),QT=n(Kp," forward method, overrides the "),Yh=r(Kp,"CODE",{});var Rz=i(Yh);KT=n(Rz,"__call__"),Rz.forEach(t),JT=n(Kp," special method."),Kp.forEach(t),VT=p(Jo),w(Rs.$$.fragment,Jo),GT=p(Jo),w(Es.$$.fragment,Jo),XT=p(Jo),w(Ms.$$.fragment,Jo),Jo.forEach(t),Ko.forEach(t),vg=p(s),bn=r(s,"H2",{class:!0});var C_=i(bn);zs=r(C_,"A",{id:!0,class:!0,href:!0});var Ez=i(zs);Zh=r(Ez,"SPAN",{});var Mz=i(Zh);w(Wi.$$.fragment,Mz),Mz.forEach(t),Ez.forEach(t),YT=p(C_),em=r(C_,"SPAN",{});var zz=i(em);ZT=n(zz,"RobertaForSequenceClassification"),zz.forEach(t),C_.forEach(t),wg=p(s),$t=r(s,"DIV",{class:!0});var Vo=i($t);w(Ui.$$.fragment,Vo),e$=p(Vo),tm=r(Vo,"P",{});var Cz=i(tm);t$=n(Cz,`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Cz.forEach(t),o$=p(Vo),Hi=r(Vo,"P",{});var q_=i(Hi);n$=n(q_,"This model inherits from "),mp=r(q_,"A",{href:!0});var qz=i(mp);s$=n(qz,"PreTrainedModel"),qz.forEach(t),a$=n(q_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),q_.forEach(t),r$=p(Vo),Qi=r(Vo,"P",{});var j_=i(Qi);i$=n(j_,"This model is also a PyTorch "),Ki=r(j_,"A",{href:!0,rel:!0});var jz=i(Ki);l$=n(jz,"torch.nn.Module"),jz.forEach(t),d$=n(j_,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),j_.forEach(t),c$=p(Vo),ct=r(Vo,"DIV",{class:!0});var It=i(ct);w(Ji.$$.fragment,It),p$=p(It),kn=r(It,"P",{});var Jp=i(kn);h$=n(Jp,"The "),up=r(Jp,"A",{href:!0});var Pz=i(up);m$=n(Pz,"RobertaForSequenceClassification"),Pz.forEach(t),u$=n(Jp," forward method, overrides the "),om=r(Jp,"CODE",{});var Az=i(om);f$=n(Az,"__call__"),Az.forEach(t),g$=n(Jp," special method."),Jp.forEach(t),_$=p(It),w(Cs.$$.fragment,It),b$=p(It),w(qs.$$.fragment,It),k$=p(It),w(js.$$.fragment,It),y$=p(It),w(Ps.$$.fragment,It),v$=p(It),w(As.$$.fragment,It),It.forEach(t),Vo.forEach(t),Tg=p(s),yn=r(s,"H2",{class:!0});var P_=i(yn);Ls=r(P_,"A",{id:!0,class:!0,href:!0});var Lz=i(Ls);nm=r(Lz,"SPAN",{});var Oz=i(nm);w(Vi.$$.fragment,Oz),Oz.forEach(t),Lz.forEach(t),w$=p(P_),sm=r(P_,"SPAN",{});var Nz=i(sm);T$=n(Nz,"RobertaForMultipleChoice"),Nz.forEach(t),P_.forEach(t),$g=p(s),Ft=r(s,"DIV",{class:!0});var Go=i(Ft);w(Gi.$$.fragment,Go),$$=p(Go),am=r(Go,"P",{});var Iz=i(am);F$=n(Iz,`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Iz.forEach(t),x$=p(Go),Xi=r(Go,"P",{});var A_=i(Xi);R$=n(A_,"This model inherits from "),fp=r(A_,"A",{href:!0});var Dz=i(fp);E$=n(Dz,"PreTrainedModel"),Dz.forEach(t),M$=n(A_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),A_.forEach(t),z$=p(Go),Yi=r(Go,"P",{});var L_=i(Yi);C$=n(L_,"This model is also a PyTorch "),Zi=r(L_,"A",{href:!0,rel:!0});var Sz=i(Zi);q$=n(Sz,"torch.nn.Module"),Sz.forEach(t),j$=n(L_,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),L_.forEach(t),P$=p(Go),Gt=r(Go,"DIV",{class:!0});var Va=i(Gt);w(el.$$.fragment,Va),A$=p(Va),vn=r(Va,"P",{});var Vp=i(vn);L$=n(Vp,"The "),gp=r(Vp,"A",{href:!0});var Bz=i(gp);O$=n(Bz,"RobertaForMultipleChoice"),Bz.forEach(t),N$=n(Vp," forward method, overrides the "),rm=r(Vp,"CODE",{});var Wz=i(rm);I$=n(Wz,"__call__"),Wz.forEach(t),D$=n(Vp," special method."),Vp.forEach(t),S$=p(Va),w(Os.$$.fragment,Va),B$=p(Va),w(Ns.$$.fragment,Va),Va.forEach(t),Go.forEach(t),Fg=p(s),wn=r(s,"H2",{class:!0});var O_=i(wn);Is=r(O_,"A",{id:!0,class:!0,href:!0});var Uz=i(Is);im=r(Uz,"SPAN",{});var Hz=i(im);w(tl.$$.fragment,Hz),Hz.forEach(t),Uz.forEach(t),W$=p(O_),lm=r(O_,"SPAN",{});var Qz=i(lm);U$=n(Qz,"RobertaForTokenClassification"),Qz.forEach(t),O_.forEach(t),xg=p(s),xt=r(s,"DIV",{class:!0});var Xo=i(xt);w(ol.$$.fragment,Xo),H$=p(Xo),dm=r(Xo,"P",{});var Kz=i(dm);Q$=n(Kz,`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Kz.forEach(t),K$=p(Xo),nl=r(Xo,"P",{});var N_=i(nl);J$=n(N_,"This model inherits from "),_p=r(N_,"A",{href:!0});var Jz=i(_p);V$=n(Jz,"PreTrainedModel"),Jz.forEach(t),G$=n(N_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),N_.forEach(t),X$=p(Xo),sl=r(Xo,"P",{});var I_=i(sl);Y$=n(I_,"This model is also a PyTorch "),al=r(I_,"A",{href:!0,rel:!0});var Vz=i(al);Z$=n(Vz,"torch.nn.Module"),Vz.forEach(t),e1=n(I_,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),I_.forEach(t),t1=p(Xo),qt=r(Xo,"DIV",{class:!0});var Yo=i(qt);w(rl.$$.fragment,Yo),o1=p(Yo),Tn=r(Yo,"P",{});var Gp=i(Tn);n1=n(Gp,"The "),bp=r(Gp,"A",{href:!0});var Gz=i(bp);s1=n(Gz,"RobertaForTokenClassification"),Gz.forEach(t),a1=n(Gp," forward method, overrides the "),cm=r(Gp,"CODE",{});var Xz=i(cm);r1=n(Xz,"__call__"),Xz.forEach(t),i1=n(Gp," special method."),Gp.forEach(t),l1=p(Yo),w(Ds.$$.fragment,Yo),d1=p(Yo),w(Ss.$$.fragment,Yo),c1=p(Yo),w(Bs.$$.fragment,Yo),Yo.forEach(t),Xo.forEach(t),Rg=p(s),$n=r(s,"H2",{class:!0});var D_=i($n);Ws=r(D_,"A",{id:!0,class:!0,href:!0});var Yz=i(Ws);pm=r(Yz,"SPAN",{});var Zz=i(pm);w(il.$$.fragment,Zz),Zz.forEach(t),Yz.forEach(t),p1=p(D_),hm=r(D_,"SPAN",{});var eC=i(hm);h1=n(eC,"RobertaForQuestionAnswering"),eC.forEach(t),D_.forEach(t),Eg=p(s),Rt=r(s,"DIV",{class:!0});var Zo=i(Rt);w(ll.$$.fragment,Zo),m1=p(Zo),Fn=r(Zo,"P",{});var Xp=i(Fn);u1=n(Xp,`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),mm=r(Xp,"CODE",{});var tC=i(mm);f1=n(tC,"span start logits"),tC.forEach(t),g1=n(Xp," and "),um=r(Xp,"CODE",{});var oC=i(um);_1=n(oC,"span end logits"),oC.forEach(t),b1=n(Xp,")."),Xp.forEach(t),k1=p(Zo),dl=r(Zo,"P",{});var S_=i(dl);y1=n(S_,"This model inherits from "),kp=r(S_,"A",{href:!0});var nC=i(kp);v1=n(nC,"PreTrainedModel"),nC.forEach(t),w1=n(S_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),S_.forEach(t),T1=p(Zo),cl=r(Zo,"P",{});var B_=i(cl);$1=n(B_,"This model is also a PyTorch "),pl=r(B_,"A",{href:!0,rel:!0});var sC=i(pl);F1=n(sC,"torch.nn.Module"),sC.forEach(t),x1=n(B_,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),B_.forEach(t),R1=p(Zo),jt=r(Zo,"DIV",{class:!0});var en=i(jt);w(hl.$$.fragment,en),E1=p(en),xn=r(en,"P",{});var Yp=i(xn);M1=n(Yp,"The "),yp=r(Yp,"A",{href:!0});var aC=i(yp);z1=n(aC,"RobertaForQuestionAnswering"),aC.forEach(t),C1=n(Yp," forward method, overrides the "),fm=r(Yp,"CODE",{});var rC=i(fm);q1=n(rC,"__call__"),rC.forEach(t),j1=n(Yp," special method."),Yp.forEach(t),P1=p(en),w(Us.$$.fragment,en),A1=p(en),w(Hs.$$.fragment,en),L1=p(en),w(Qs.$$.fragment,en),en.forEach(t),Zo.forEach(t),Mg=p(s),Rn=r(s,"H2",{class:!0});var W_=i(Rn);Ks=r(W_,"A",{id:!0,class:!0,href:!0});var iC=i(Ks);gm=r(iC,"SPAN",{});var lC=i(gm);w(ml.$$.fragment,lC),lC.forEach(t),iC.forEach(t),O1=p(W_),_m=r(W_,"SPAN",{});var dC=i(_m);N1=n(dC,"TFRobertaModel"),dC.forEach(t),W_.forEach(t),zg=p(s),ht=r(s,"DIV",{class:!0});var io=i(ht);w(ul.$$.fragment,io),I1=p(io),bm=r(io,"P",{});var cC=i(bm);D1=n(cC,"The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),cC.forEach(t),S1=p(io),fl=r(io,"P",{});var U_=i(fl);B1=n(U_,"This model inherits from "),vp=r(U_,"A",{href:!0});var pC=i(vp);W1=n(pC,"TFPreTrainedModel"),pC.forEach(t),U1=n(U_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),U_.forEach(t),H1=p(io),gl=r(io,"P",{});var H_=i(gl);Q1=n(H_,"This model is also a "),_l=r(H_,"A",{href:!0,rel:!0});var hC=i(_l);K1=n(hC,"tf.keras.Model"),hC.forEach(t),J1=n(H_,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),H_.forEach(t),V1=p(io),w(Js.$$.fragment,io),G1=p(io),Xt=r(io,"DIV",{class:!0});var Ga=i(Xt);w(bl.$$.fragment,Ga),X1=p(Ga),En=r(Ga,"P",{});var Zp=i(En);Y1=n(Zp,"The "),wp=r(Zp,"A",{href:!0});var mC=i(wp);Z1=n(mC,"TFRobertaModel"),mC.forEach(t),e2=n(Zp," forward method, overrides the "),km=r(Zp,"CODE",{});var uC=i(km);t2=n(uC,"__call__"),uC.forEach(t),o2=n(Zp," special method."),Zp.forEach(t),n2=p(Ga),w(Vs.$$.fragment,Ga),s2=p(Ga),w(Gs.$$.fragment,Ga),Ga.forEach(t),io.forEach(t),Cg=p(s),Mn=r(s,"H2",{class:!0});var Q_=i(Mn);Xs=r(Q_,"A",{id:!0,class:!0,href:!0});var fC=i(Xs);ym=r(fC,"SPAN",{});var gC=i(ym);w(kl.$$.fragment,gC),gC.forEach(t),fC.forEach(t),a2=p(Q_),vm=r(Q_,"SPAN",{});var _C=i(vm);r2=n(_C,"TFRobertaForCausalLM"),_C.forEach(t),Q_.forEach(t),qg=p(s),zn=r(s,"DIV",{class:!0});var K_=i(zn);w(yl.$$.fragment,K_),i2=p(K_),Yt=r(K_,"DIV",{class:!0});var Xa=i(Yt);w(vl.$$.fragment,Xa),l2=p(Xa),Cn=r(Xa,"P",{});var eh=i(Cn);d2=n(eh,"The "),Tp=r(eh,"A",{href:!0});var bC=i(Tp);c2=n(bC,"TFRobertaForCausalLM"),bC.forEach(t),p2=n(eh," forward method, overrides the "),wm=r(eh,"CODE",{});var kC=i(wm);h2=n(kC,"__call__"),kC.forEach(t),m2=n(eh," special method."),eh.forEach(t),u2=p(Xa),w(Ys.$$.fragment,Xa),f2=p(Xa),w(Zs.$$.fragment,Xa),Xa.forEach(t),K_.forEach(t),jg=p(s),qn=r(s,"H2",{class:!0});var J_=i(qn);ea=r(J_,"A",{id:!0,class:!0,href:!0});var yC=i(ea);Tm=r(yC,"SPAN",{});var vC=i(Tm);w(wl.$$.fragment,vC),vC.forEach(t),yC.forEach(t),g2=p(J_),$m=r(J_,"SPAN",{});var wC=i($m);_2=n(wC,"TFRobertaForMaskedLM"),wC.forEach(t),J_.forEach(t),Pg=p(s),mt=r(s,"DIV",{class:!0});var lo=i(mt);w(Tl.$$.fragment,lo),b2=p(lo),$l=r(lo,"P",{});var V_=i($l);k2=n(V_,"RoBERTa Model with a "),Fm=r(V_,"CODE",{});var TC=i(Fm);y2=n(TC,"language modeling"),TC.forEach(t),v2=n(V_," head on top."),V_.forEach(t),w2=p(lo),Fl=r(lo,"P",{});var G_=i(Fl);T2=n(G_,"This model inherits from "),$p=r(G_,"A",{href:!0});var $C=i($p);$2=n($C,"TFPreTrainedModel"),$C.forEach(t),F2=n(G_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),G_.forEach(t),x2=p(lo),xl=r(lo,"P",{});var X_=i(xl);R2=n(X_,"This model is also a "),Rl=r(X_,"A",{href:!0,rel:!0});var FC=i(Rl);E2=n(FC,"tf.keras.Model"),FC.forEach(t),M2=n(X_,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),X_.forEach(t),z2=p(lo),w(ta.$$.fragment,lo),C2=p(lo),Pt=r(lo,"DIV",{class:!0});var tn=i(Pt);w(El.$$.fragment,tn),q2=p(tn),jn=r(tn,"P",{});var th=i(jn);j2=n(th,"The "),Fp=r(th,"A",{href:!0});var xC=i(Fp);P2=n(xC,"TFRobertaForMaskedLM"),xC.forEach(t),A2=n(th," forward method, overrides the "),xm=r(th,"CODE",{});var RC=i(xm);L2=n(RC,"__call__"),RC.forEach(t),O2=n(th," special method."),th.forEach(t),N2=p(tn),w(oa.$$.fragment,tn),I2=p(tn),w(na.$$.fragment,tn),D2=p(tn),w(sa.$$.fragment,tn),tn.forEach(t),lo.forEach(t),Ag=p(s),Pn=r(s,"H2",{class:!0});var Y_=i(Pn);aa=r(Y_,"A",{id:!0,class:!0,href:!0});var EC=i(aa);Rm=r(EC,"SPAN",{});var MC=i(Rm);w(Ml.$$.fragment,MC),MC.forEach(t),EC.forEach(t),S2=p(Y_),Em=r(Y_,"SPAN",{});var zC=i(Em);B2=n(zC,"TFRobertaForSequenceClassification"),zC.forEach(t),Y_.forEach(t),Lg=p(s),ut=r(s,"DIV",{class:!0});var co=i(ut);w(zl.$$.fragment,co),W2=p(co),Mm=r(co,"P",{});var CC=i(Mm);U2=n(CC,`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),CC.forEach(t),H2=p(co),Cl=r(co,"P",{});var Z_=i(Cl);Q2=n(Z_,"This model inherits from "),xp=r(Z_,"A",{href:!0});var qC=i(xp);K2=n(qC,"TFPreTrainedModel"),qC.forEach(t),J2=n(Z_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Z_.forEach(t),V2=p(co),ql=r(co,"P",{});var eb=i(ql);G2=n(eb,"This model is also a "),jl=r(eb,"A",{href:!0,rel:!0});var jC=i(jl);X2=n(jC,"tf.keras.Model"),jC.forEach(t),Y2=n(eb,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),eb.forEach(t),Z2=p(co),w(ra.$$.fragment,co),eF=p(co),At=r(co,"DIV",{class:!0});var on=i(At);w(Pl.$$.fragment,on),tF=p(on),An=r(on,"P",{});var oh=i(An);oF=n(oh,"The "),Rp=r(oh,"A",{href:!0});var PC=i(Rp);nF=n(PC,"TFRobertaForSequenceClassification"),PC.forEach(t),sF=n(oh," forward method, overrides the "),zm=r(oh,"CODE",{});var AC=i(zm);aF=n(AC,"__call__"),AC.forEach(t),rF=n(oh," special method."),oh.forEach(t),iF=p(on),w(ia.$$.fragment,on),lF=p(on),w(la.$$.fragment,on),dF=p(on),w(da.$$.fragment,on),on.forEach(t),co.forEach(t),Og=p(s),Ln=r(s,"H2",{class:!0});var tb=i(Ln);ca=r(tb,"A",{id:!0,class:!0,href:!0});var LC=i(ca);Cm=r(LC,"SPAN",{});var OC=i(Cm);w(Al.$$.fragment,OC),OC.forEach(t),LC.forEach(t),cF=p(tb),qm=r(tb,"SPAN",{});var NC=i(qm);pF=n(NC,"TFRobertaForMultipleChoice"),NC.forEach(t),tb.forEach(t),Ng=p(s),ft=r(s,"DIV",{class:!0});var po=i(ft);w(Ll.$$.fragment,po),hF=p(po),jm=r(po,"P",{});var IC=i(jm);mF=n(IC,`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),IC.forEach(t),uF=p(po),Ol=r(po,"P",{});var ob=i(Ol);fF=n(ob,"This model inherits from "),Ep=r(ob,"A",{href:!0});var DC=i(Ep);gF=n(DC,"TFPreTrainedModel"),DC.forEach(t),_F=n(ob,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ob.forEach(t),bF=p(po),Nl=r(po,"P",{});var nb=i(Nl);kF=n(nb,"This model is also a "),Il=r(nb,"A",{href:!0,rel:!0});var SC=i(Il);yF=n(SC,"tf.keras.Model"),SC.forEach(t),vF=n(nb,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nb.forEach(t),wF=p(po),w(pa.$$.fragment,po),TF=p(po),Zt=r(po,"DIV",{class:!0});var Ya=i(Zt);w(Dl.$$.fragment,Ya),$F=p(Ya),On=r(Ya,"P",{});var nh=i(On);FF=n(nh,"The "),Mp=r(nh,"A",{href:!0});var BC=i(Mp);xF=n(BC,"TFRobertaForMultipleChoice"),BC.forEach(t),RF=n(nh," forward method, overrides the "),Pm=r(nh,"CODE",{});var WC=i(Pm);EF=n(WC,"__call__"),WC.forEach(t),MF=n(nh," special method."),nh.forEach(t),zF=p(Ya),w(ha.$$.fragment,Ya),CF=p(Ya),w(ma.$$.fragment,Ya),Ya.forEach(t),po.forEach(t),Ig=p(s),Nn=r(s,"H2",{class:!0});var sb=i(Nn);ua=r(sb,"A",{id:!0,class:!0,href:!0});var UC=i(ua);Am=r(UC,"SPAN",{});var HC=i(Am);w(Sl.$$.fragment,HC),HC.forEach(t),UC.forEach(t),qF=p(sb),Lm=r(sb,"SPAN",{});var QC=i(Lm);jF=n(QC,"TFRobertaForTokenClassification"),QC.forEach(t),sb.forEach(t),Dg=p(s),gt=r(s,"DIV",{class:!0});var ho=i(gt);w(Bl.$$.fragment,ho),PF=p(ho),Om=r(ho,"P",{});var KC=i(Om);AF=n(KC,`RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),KC.forEach(t),LF=p(ho),Wl=r(ho,"P",{});var ab=i(Wl);OF=n(ab,"This model inherits from "),zp=r(ab,"A",{href:!0});var JC=i(zp);NF=n(JC,"TFPreTrainedModel"),JC.forEach(t),IF=n(ab,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ab.forEach(t),DF=p(ho),Ul=r(ho,"P",{});var rb=i(Ul);SF=n(rb,"This model is also a "),Hl=r(rb,"A",{href:!0,rel:!0});var VC=i(Hl);BF=n(VC,"tf.keras.Model"),VC.forEach(t),WF=n(rb,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rb.forEach(t),UF=p(ho),w(fa.$$.fragment,ho),HF=p(ho),Lt=r(ho,"DIV",{class:!0});var nn=i(Lt);w(Ql.$$.fragment,nn),QF=p(nn),In=r(nn,"P",{});var sh=i(In);KF=n(sh,"The "),Cp=r(sh,"A",{href:!0});var GC=i(Cp);JF=n(GC,"TFRobertaForTokenClassification"),GC.forEach(t),VF=n(sh," forward method, overrides the "),Nm=r(sh,"CODE",{});var XC=i(Nm);GF=n(XC,"__call__"),XC.forEach(t),XF=n(sh," special method."),sh.forEach(t),YF=p(nn),w(ga.$$.fragment,nn),ZF=p(nn),w(_a.$$.fragment,nn),e0=p(nn),w(ba.$$.fragment,nn),nn.forEach(t),ho.forEach(t),Sg=p(s),Dn=r(s,"H2",{class:!0});var ib=i(Dn);ka=r(ib,"A",{id:!0,class:!0,href:!0});var YC=i(ka);Im=r(YC,"SPAN",{});var ZC=i(Im);w(Kl.$$.fragment,ZC),ZC.forEach(t),YC.forEach(t),t0=p(ib),Dm=r(ib,"SPAN",{});var eq=i(Dm);o0=n(eq,"TFRobertaForQuestionAnswering"),eq.forEach(t),ib.forEach(t),Bg=p(s),_t=r(s,"DIV",{class:!0});var mo=i(_t);w(Jl.$$.fragment,mo),n0=p(mo),Sn=r(mo,"P",{});var ah=i(Sn);s0=n(ah,`RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Sm=r(ah,"CODE",{});var tq=i(Sm);a0=n(tq,"span start logits"),tq.forEach(t),r0=n(ah," and "),Bm=r(ah,"CODE",{});var oq=i(Bm);i0=n(oq,"span end logits"),oq.forEach(t),l0=n(ah,")."),ah.forEach(t),d0=p(mo),Vl=r(mo,"P",{});var lb=i(Vl);c0=n(lb,"This model inherits from "),qp=r(lb,"A",{href:!0});var nq=i(qp);p0=n(nq,"TFPreTrainedModel"),nq.forEach(t),h0=n(lb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lb.forEach(t),m0=p(mo),Gl=r(mo,"P",{});var db=i(Gl);u0=n(db,"This model is also a "),Xl=r(db,"A",{href:!0,rel:!0});var sq=i(Xl);f0=n(sq,"tf.keras.Model"),sq.forEach(t),g0=n(db,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),db.forEach(t),_0=p(mo),w(ya.$$.fragment,mo),b0=p(mo),Ot=r(mo,"DIV",{class:!0});var sn=i(Ot);w(Yl.$$.fragment,sn),k0=p(sn),Bn=r(sn,"P",{});var rh=i(Bn);y0=n(rh,"The "),jp=r(rh,"A",{href:!0});var aq=i(jp);v0=n(aq,"TFRobertaForQuestionAnswering"),aq.forEach(t),w0=n(rh," forward method, overrides the "),Wm=r(rh,"CODE",{});var rq=i(Wm);T0=n(rq,"__call__"),rq.forEach(t),$0=n(rh," special method."),rh.forEach(t),F0=p(sn),w(va.$$.fragment,sn),x0=p(sn),w(wa.$$.fragment,sn),R0=p(sn),w(Ta.$$.fragment,sn),sn.forEach(t),mo.forEach(t),Wg=p(s),Wn=r(s,"H2",{class:!0});var cb=i(Wn);$a=r(cb,"A",{id:!0,class:!0,href:!0});var iq=i($a);Um=r(iq,"SPAN",{});var lq=i(Um);w(Zl.$$.fragment,lq),lq.forEach(t),iq.forEach(t),E0=p(cb),Hm=r(cb,"SPAN",{});var dq=i(Hm);M0=n(dq,"FlaxRobertaModel"),dq.forEach(t),cb.forEach(t),Ug=p(s),nt=r(s,"DIV",{class:!0});var Dt=i(nt);w(ed.$$.fragment,Dt),z0=p(Dt),Qm=r(Dt,"P",{});var cq=i(Qm);C0=n(cq,"The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),cq.forEach(t),q0=p(Dt),td=r(Dt,"P",{});var pb=i(td);j0=n(pb,"This model inherits from "),Pp=r(pb,"A",{href:!0});var pq=i(Pp);P0=n(pq,"FlaxPreTrainedModel"),pq.forEach(t),A0=n(pb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),pb.forEach(t),L0=p(Dt),od=r(Dt,"P",{});var hb=i(od);O0=n(hb,"This model is also a Flax Linen "),nd=r(hb,"A",{href:!0,rel:!0});var hq=i(nd);N0=n(hq,"flax.linen.Module"),hq.forEach(t),I0=n(hb,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),hb.forEach(t),D0=p(Dt),Km=r(Dt,"P",{});var mq=i(Km);S0=n(mq,"Finally, this model supports inherent JAX features such as:"),mq.forEach(t),B0=p(Dt),fo=r(Dt,"UL",{});var Za=i(fo);Jm=r(Za,"LI",{});var uq=i(Jm);sd=r(uq,"A",{href:!0,rel:!0});var fq=i(sd);W0=n(fq,"Just-In-Time (JIT) compilation"),fq.forEach(t),uq.forEach(t),U0=p(Za),Vm=r(Za,"LI",{});var gq=i(Vm);ad=r(gq,"A",{href:!0,rel:!0});var _q=i(ad);H0=n(_q,"Automatic Differentiation"),_q.forEach(t),gq.forEach(t),Q0=p(Za),Gm=r(Za,"LI",{});var bq=i(Gm);rd=r(bq,"A",{href:!0,rel:!0});var kq=i(rd);K0=n(kq,"Vectorization"),kq.forEach(t),bq.forEach(t),J0=p(Za),Xm=r(Za,"LI",{});var yq=i(Xm);id=r(yq,"A",{href:!0,rel:!0});var vq=i(id);V0=n(vq,"Parallelization"),vq.forEach(t),yq.forEach(t),Za.forEach(t),G0=p(Dt),eo=r(Dt,"DIV",{class:!0});var er=i(eo);w(ld.$$.fragment,er),X0=p(er),Un=r(er,"P",{});var ih=i(Un);Y0=n(ih,"The "),Ym=r(ih,"CODE",{});var wq=i(Ym);Z0=n(wq,"FlaxRobertaPreTrainedModel"),wq.forEach(t),ex=n(ih," forward method, overrides the "),Zm=r(ih,"CODE",{});var Tq=i(Zm);tx=n(Tq,"__call__"),Tq.forEach(t),ox=n(ih," special method."),ih.forEach(t),nx=p(er),w(Fa.$$.fragment,er),sx=p(er),w(xa.$$.fragment,er),er.forEach(t),Dt.forEach(t),Hg=p(s),Hn=r(s,"H2",{class:!0});var mb=i(Hn);Ra=r(mb,"A",{id:!0,class:!0,href:!0});var $q=i(Ra);eu=r($q,"SPAN",{});var Fq=i(eu);w(dd.$$.fragment,Fq),Fq.forEach(t),$q.forEach(t),ax=p(mb),tu=r(mb,"SPAN",{});var xq=i(tu);rx=n(xq,"FlaxRobertaForCausalLM"),xq.forEach(t),mb.forEach(t),Qg=p(s),st=r(s,"DIV",{class:!0});var St=i(st);w(cd.$$.fragment,St),ix=p(St),ou=r(St,"P",{});var Rq=i(ou);lx=n(Rq,`Roberta Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),Rq.forEach(t),dx=p(St),pd=r(St,"P",{});var ub=i(pd);cx=n(ub,"This model inherits from "),Ap=r(ub,"A",{href:!0});var Eq=i(Ap);px=n(Eq,"FlaxPreTrainedModel"),Eq.forEach(t),hx=n(ub,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ub.forEach(t),mx=p(St),hd=r(St,"P",{});var fb=i(hd);ux=n(fb,"This model is also a Flax Linen "),md=r(fb,"A",{href:!0,rel:!0});var Mq=i(md);fx=n(Mq,"flax.linen.Module"),Mq.forEach(t),gx=n(fb,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),fb.forEach(t),_x=p(St),nu=r(St,"P",{});var zq=i(nu);bx=n(zq,"Finally, this model supports inherent JAX features such as:"),zq.forEach(t),kx=p(St),go=r(St,"UL",{});var tr=i(go);su=r(tr,"LI",{});var Cq=i(su);ud=r(Cq,"A",{href:!0,rel:!0});var qq=i(ud);yx=n(qq,"Just-In-Time (JIT) compilation"),qq.forEach(t),Cq.forEach(t),vx=p(tr),au=r(tr,"LI",{});var jq=i(au);fd=r(jq,"A",{href:!0,rel:!0});var Pq=i(fd);wx=n(Pq,"Automatic Differentiation"),Pq.forEach(t),jq.forEach(t),Tx=p(tr),ru=r(tr,"LI",{});var Aq=i(ru);gd=r(Aq,"A",{href:!0,rel:!0});var Lq=i(gd);$x=n(Lq,"Vectorization"),Lq.forEach(t),Aq.forEach(t),Fx=p(tr),iu=r(tr,"LI",{});var Oq=i(iu);_d=r(Oq,"A",{href:!0,rel:!0});var Nq=i(_d);xx=n(Nq,"Parallelization"),Nq.forEach(t),Oq.forEach(t),tr.forEach(t),Rx=p(St),to=r(St,"DIV",{class:!0});var or=i(to);w(bd.$$.fragment,or),Ex=p(or),Qn=r(or,"P",{});var lh=i(Qn);Mx=n(lh,"The "),lu=r(lh,"CODE",{});var Iq=i(lu);zx=n(Iq,"FlaxRobertaPreTrainedModel"),Iq.forEach(t),Cx=n(lh," forward method, overrides the "),du=r(lh,"CODE",{});var Dq=i(du);qx=n(Dq,"__call__"),Dq.forEach(t),jx=n(lh," special method."),lh.forEach(t),Px=p(or),w(Ea.$$.fragment,or),Ax=p(or),w(Ma.$$.fragment,or),or.forEach(t),St.forEach(t),Kg=p(s),Kn=r(s,"H2",{class:!0});var gb=i(Kn);za=r(gb,"A",{id:!0,class:!0,href:!0});var Sq=i(za);cu=r(Sq,"SPAN",{});var Bq=i(cu);w(kd.$$.fragment,Bq),Bq.forEach(t),Sq.forEach(t),Lx=p(gb),pu=r(gb,"SPAN",{});var Wq=i(pu);Ox=n(Wq,"FlaxRobertaForMaskedLM"),Wq.forEach(t),gb.forEach(t),Jg=p(s),at=r(s,"DIV",{class:!0});var Bt=i(at);w(yd.$$.fragment,Bt),Nx=p(Bt),vd=r(Bt,"P",{});var _b=i(vd);Ix=n(_b,"RoBERTa Model with a "),hu=r(_b,"CODE",{});var Uq=i(hu);Dx=n(Uq,"language modeling"),Uq.forEach(t),Sx=n(_b," head on top."),_b.forEach(t),Bx=p(Bt),wd=r(Bt,"P",{});var bb=i(wd);Wx=n(bb,"This model inherits from "),Lp=r(bb,"A",{href:!0});var Hq=i(Lp);Ux=n(Hq,"FlaxPreTrainedModel"),Hq.forEach(t),Hx=n(bb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),bb.forEach(t),Qx=p(Bt),Td=r(Bt,"P",{});var kb=i(Td);Kx=n(kb,"This model is also a Flax Linen "),$d=r(kb,"A",{href:!0,rel:!0});var Qq=i($d);Jx=n(Qq,"flax.linen.Module"),Qq.forEach(t),Vx=n(kb,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),kb.forEach(t),Gx=p(Bt),mu=r(Bt,"P",{});var Kq=i(mu);Xx=n(Kq,"Finally, this model supports inherent JAX features such as:"),Kq.forEach(t),Yx=p(Bt),_o=r(Bt,"UL",{});var nr=i(_o);uu=r(nr,"LI",{});var Jq=i(uu);Fd=r(Jq,"A",{href:!0,rel:!0});var Vq=i(Fd);Zx=n(Vq,"Just-In-Time (JIT) compilation"),Vq.forEach(t),Jq.forEach(t),eR=p(nr),fu=r(nr,"LI",{});var Gq=i(fu);xd=r(Gq,"A",{href:!0,rel:!0});var Xq=i(xd);tR=n(Xq,"Automatic Differentiation"),Xq.forEach(t),Gq.forEach(t),oR=p(nr),gu=r(nr,"LI",{});var Yq=i(gu);Rd=r(Yq,"A",{href:!0,rel:!0});var Zq=i(Rd);nR=n(Zq,"Vectorization"),Zq.forEach(t),Yq.forEach(t),sR=p(nr),_u=r(nr,"LI",{});var ej=i(_u);Ed=r(ej,"A",{href:!0,rel:!0});var tj=i(Ed);aR=n(tj,"Parallelization"),tj.forEach(t),ej.forEach(t),nr.forEach(t),rR=p(Bt),oo=r(Bt,"DIV",{class:!0});var sr=i(oo);w(Md.$$.fragment,sr),iR=p(sr),Jn=r(sr,"P",{});var dh=i(Jn);lR=n(dh,"The "),bu=r(dh,"CODE",{});var oj=i(bu);dR=n(oj,"FlaxRobertaPreTrainedModel"),oj.forEach(t),cR=n(dh," forward method, overrides the "),ku=r(dh,"CODE",{});var nj=i(ku);pR=n(nj,"__call__"),nj.forEach(t),hR=n(dh," special method."),dh.forEach(t),mR=p(sr),w(Ca.$$.fragment,sr),uR=p(sr),w(qa.$$.fragment,sr),sr.forEach(t),Bt.forEach(t),Vg=p(s),Vn=r(s,"H2",{class:!0});var yb=i(Vn);ja=r(yb,"A",{id:!0,class:!0,href:!0});var sj=i(ja);yu=r(sj,"SPAN",{});var aj=i(yu);w(zd.$$.fragment,aj),aj.forEach(t),sj.forEach(t),fR=p(yb),vu=r(yb,"SPAN",{});var rj=i(vu);gR=n(rj,"FlaxRobertaForSequenceClassification"),rj.forEach(t),yb.forEach(t),Gg=p(s),rt=r(s,"DIV",{class:!0});var Wt=i(rt);w(Cd.$$.fragment,Wt),_R=p(Wt),wu=r(Wt,"P",{});var ij=i(wu);bR=n(ij,`Roberta Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),ij.forEach(t),kR=p(Wt),qd=r(Wt,"P",{});var vb=i(qd);yR=n(vb,"This model inherits from "),Op=r(vb,"A",{href:!0});var lj=i(Op);vR=n(lj,"FlaxPreTrainedModel"),lj.forEach(t),wR=n(vb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),vb.forEach(t),TR=p(Wt),jd=r(Wt,"P",{});var wb=i(jd);$R=n(wb,"This model is also a Flax Linen "),Pd=r(wb,"A",{href:!0,rel:!0});var dj=i(Pd);FR=n(dj,"flax.linen.Module"),dj.forEach(t),xR=n(wb,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),wb.forEach(t),RR=p(Wt),Tu=r(Wt,"P",{});var cj=i(Tu);ER=n(cj,"Finally, this model supports inherent JAX features such as:"),cj.forEach(t),MR=p(Wt),bo=r(Wt,"UL",{});var ar=i(bo);$u=r(ar,"LI",{});var pj=i($u);Ad=r(pj,"A",{href:!0,rel:!0});var hj=i(Ad);zR=n(hj,"Just-In-Time (JIT) compilation"),hj.forEach(t),pj.forEach(t),CR=p(ar),Fu=r(ar,"LI",{});var mj=i(Fu);Ld=r(mj,"A",{href:!0,rel:!0});var uj=i(Ld);qR=n(uj,"Automatic Differentiation"),uj.forEach(t),mj.forEach(t),jR=p(ar),xu=r(ar,"LI",{});var fj=i(xu);Od=r(fj,"A",{href:!0,rel:!0});var gj=i(Od);PR=n(gj,"Vectorization"),gj.forEach(t),fj.forEach(t),AR=p(ar),Ru=r(ar,"LI",{});var _j=i(Ru);Nd=r(_j,"A",{href:!0,rel:!0});var bj=i(Nd);LR=n(bj,"Parallelization"),bj.forEach(t),_j.forEach(t),ar.forEach(t),OR=p(Wt),no=r(Wt,"DIV",{class:!0});var rr=i(no);w(Id.$$.fragment,rr),NR=p(rr),Gn=r(rr,"P",{});var ch=i(Gn);IR=n(ch,"The "),Eu=r(ch,"CODE",{});var kj=i(Eu);DR=n(kj,"FlaxRobertaPreTrainedModel"),kj.forEach(t),SR=n(ch," forward method, overrides the "),Mu=r(ch,"CODE",{});var yj=i(Mu);BR=n(yj,"__call__"),yj.forEach(t),WR=n(ch," special method."),ch.forEach(t),UR=p(rr),w(Pa.$$.fragment,rr),HR=p(rr),w(Aa.$$.fragment,rr),rr.forEach(t),Wt.forEach(t),Xg=p(s),Xn=r(s,"H2",{class:!0});var Tb=i(Xn);La=r(Tb,"A",{id:!0,class:!0,href:!0});var vj=i(La);zu=r(vj,"SPAN",{});var wj=i(zu);w(Dd.$$.fragment,wj),wj.forEach(t),vj.forEach(t),QR=p(Tb),Cu=r(Tb,"SPAN",{});var Tj=i(Cu);KR=n(Tj,"FlaxRobertaForMultipleChoice"),Tj.forEach(t),Tb.forEach(t),Yg=p(s),it=r(s,"DIV",{class:!0});var Ut=i(it);w(Sd.$$.fragment,Ut),JR=p(Ut),qu=r(Ut,"P",{});var $j=i(qu);VR=n($j,`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),$j.forEach(t),GR=p(Ut),Bd=r(Ut,"P",{});var $b=i(Bd);XR=n($b,"This model inherits from "),Np=r($b,"A",{href:!0});var Fj=i(Np);YR=n(Fj,"FlaxPreTrainedModel"),Fj.forEach(t),ZR=n($b,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),$b.forEach(t),eE=p(Ut),Wd=r(Ut,"P",{});var Fb=i(Wd);tE=n(Fb,"This model is also a Flax Linen "),Ud=r(Fb,"A",{href:!0,rel:!0});var xj=i(Ud);oE=n(xj,"flax.linen.Module"),xj.forEach(t),nE=n(Fb,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Fb.forEach(t),sE=p(Ut),ju=r(Ut,"P",{});var Rj=i(ju);aE=n(Rj,"Finally, this model supports inherent JAX features such as:"),Rj.forEach(t),rE=p(Ut),ko=r(Ut,"UL",{});var ir=i(ko);Pu=r(ir,"LI",{});var Ej=i(Pu);Hd=r(Ej,"A",{href:!0,rel:!0});var Mj=i(Hd);iE=n(Mj,"Just-In-Time (JIT) compilation"),Mj.forEach(t),Ej.forEach(t),lE=p(ir),Au=r(ir,"LI",{});var zj=i(Au);Qd=r(zj,"A",{href:!0,rel:!0});var Cj=i(Qd);dE=n(Cj,"Automatic Differentiation"),Cj.forEach(t),zj.forEach(t),cE=p(ir),Lu=r(ir,"LI",{});var qj=i(Lu);Kd=r(qj,"A",{href:!0,rel:!0});var jj=i(Kd);pE=n(jj,"Vectorization"),jj.forEach(t),qj.forEach(t),hE=p(ir),Ou=r(ir,"LI",{});var Pj=i(Ou);Jd=r(Pj,"A",{href:!0,rel:!0});var Aj=i(Jd);mE=n(Aj,"Parallelization"),Aj.forEach(t),Pj.forEach(t),ir.forEach(t),uE=p(Ut),so=r(Ut,"DIV",{class:!0});var lr=i(so);w(Vd.$$.fragment,lr),fE=p(lr),Yn=r(lr,"P",{});var ph=i(Yn);gE=n(ph,"The "),Nu=r(ph,"CODE",{});var Lj=i(Nu);_E=n(Lj,"FlaxRobertaPreTrainedModel"),Lj.forEach(t),bE=n(ph," forward method, overrides the "),Iu=r(ph,"CODE",{});var Oj=i(Iu);kE=n(Oj,"__call__"),Oj.forEach(t),yE=n(ph," special method."),ph.forEach(t),vE=p(lr),w(Oa.$$.fragment,lr),wE=p(lr),w(Na.$$.fragment,lr),lr.forEach(t),Ut.forEach(t),Zg=p(s),Zn=r(s,"H2",{class:!0});var xb=i(Zn);Ia=r(xb,"A",{id:!0,class:!0,href:!0});var Nj=i(Ia);Du=r(Nj,"SPAN",{});var Ij=i(Du);w(Gd.$$.fragment,Ij),Ij.forEach(t),Nj.forEach(t),TE=p(xb),Su=r(xb,"SPAN",{});var Dj=i(Su);$E=n(Dj,"FlaxRobertaForTokenClassification"),Dj.forEach(t),xb.forEach(t),e_=p(s),lt=r(s,"DIV",{class:!0});var Ht=i(lt);w(Xd.$$.fragment,Ht),FE=p(Ht),Bu=r(Ht,"P",{});var Sj=i(Bu);xE=n(Sj,`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Sj.forEach(t),RE=p(Ht),Yd=r(Ht,"P",{});var Rb=i(Yd);EE=n(Rb,"This model inherits from "),Ip=r(Rb,"A",{href:!0});var Bj=i(Ip);ME=n(Bj,"FlaxPreTrainedModel"),Bj.forEach(t),zE=n(Rb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Rb.forEach(t),CE=p(Ht),Zd=r(Ht,"P",{});var Eb=i(Zd);qE=n(Eb,"This model is also a Flax Linen "),ec=r(Eb,"A",{href:!0,rel:!0});var Wj=i(ec);jE=n(Wj,"flax.linen.Module"),Wj.forEach(t),PE=n(Eb,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Eb.forEach(t),AE=p(Ht),Wu=r(Ht,"P",{});var Uj=i(Wu);LE=n(Uj,"Finally, this model supports inherent JAX features such as:"),Uj.forEach(t),OE=p(Ht),yo=r(Ht,"UL",{});var dr=i(yo);Uu=r(dr,"LI",{});var Hj=i(Uu);tc=r(Hj,"A",{href:!0,rel:!0});var Qj=i(tc);NE=n(Qj,"Just-In-Time (JIT) compilation"),Qj.forEach(t),Hj.forEach(t),IE=p(dr),Hu=r(dr,"LI",{});var Kj=i(Hu);oc=r(Kj,"A",{href:!0,rel:!0});var Jj=i(oc);DE=n(Jj,"Automatic Differentiation"),Jj.forEach(t),Kj.forEach(t),SE=p(dr),Qu=r(dr,"LI",{});var Vj=i(Qu);nc=r(Vj,"A",{href:!0,rel:!0});var Gj=i(nc);BE=n(Gj,"Vectorization"),Gj.forEach(t),Vj.forEach(t),WE=p(dr),Ku=r(dr,"LI",{});var Xj=i(Ku);sc=r(Xj,"A",{href:!0,rel:!0});var Yj=i(sc);UE=n(Yj,"Parallelization"),Yj.forEach(t),Xj.forEach(t),dr.forEach(t),HE=p(Ht),ao=r(Ht,"DIV",{class:!0});var cr=i(ao);w(ac.$$.fragment,cr),QE=p(cr),es=r(cr,"P",{});var hh=i(es);KE=n(hh,"The "),Ju=r(hh,"CODE",{});var Zj=i(Ju);JE=n(Zj,"FlaxRobertaPreTrainedModel"),Zj.forEach(t),VE=n(hh," forward method, overrides the "),Vu=r(hh,"CODE",{});var e3=i(Vu);GE=n(e3,"__call__"),e3.forEach(t),XE=n(hh," special method."),hh.forEach(t),YE=p(cr),w(Da.$$.fragment,cr),ZE=p(cr),w(Sa.$$.fragment,cr),cr.forEach(t),Ht.forEach(t),t_=p(s),ts=r(s,"H2",{class:!0});var Mb=i(ts);Ba=r(Mb,"A",{id:!0,class:!0,href:!0});var t3=i(Ba);Gu=r(t3,"SPAN",{});var o3=i(Gu);w(rc.$$.fragment,o3),o3.forEach(t),t3.forEach(t),eM=p(Mb),Xu=r(Mb,"SPAN",{});var n3=i(Xu);tM=n(n3,"FlaxRobertaForQuestionAnswering"),n3.forEach(t),Mb.forEach(t),o_=p(s),dt=r(s,"DIV",{class:!0});var Qt=i(dt);w(ic.$$.fragment,Qt),oM=p(Qt),os=r(Qt,"P",{});var mh=i(os);nM=n(mh,`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Yu=r(mh,"CODE",{});var s3=i(Yu);sM=n(s3,"span start logits"),s3.forEach(t),aM=n(mh," and "),Zu=r(mh,"CODE",{});var a3=i(Zu);rM=n(a3,"span end logits"),a3.forEach(t),iM=n(mh,")."),mh.forEach(t),lM=p(Qt),lc=r(Qt,"P",{});var zb=i(lc);dM=n(zb,"This model inherits from "),Dp=r(zb,"A",{href:!0});var r3=i(Dp);cM=n(r3,"FlaxPreTrainedModel"),r3.forEach(t),pM=n(zb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),zb.forEach(t),hM=p(Qt),dc=r(Qt,"P",{});var Cb=i(dc);mM=n(Cb,"This model is also a Flax Linen "),cc=r(Cb,"A",{href:!0,rel:!0});var i3=i(cc);uM=n(i3,"flax.linen.Module"),i3.forEach(t),fM=n(Cb,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Cb.forEach(t),gM=p(Qt),ef=r(Qt,"P",{});var l3=i(ef);_M=n(l3,"Finally, this model supports inherent JAX features such as:"),l3.forEach(t),bM=p(Qt),vo=r(Qt,"UL",{});var pr=i(vo);tf=r(pr,"LI",{});var d3=i(tf);pc=r(d3,"A",{href:!0,rel:!0});var c3=i(pc);kM=n(c3,"Just-In-Time (JIT) compilation"),c3.forEach(t),d3.forEach(t),yM=p(pr),of=r(pr,"LI",{});var p3=i(of);hc=r(p3,"A",{href:!0,rel:!0});var h3=i(hc);vM=n(h3,"Automatic Differentiation"),h3.forEach(t),p3.forEach(t),wM=p(pr),nf=r(pr,"LI",{});var m3=i(nf);mc=r(m3,"A",{href:!0,rel:!0});var u3=i(mc);TM=n(u3,"Vectorization"),u3.forEach(t),m3.forEach(t),$M=p(pr),sf=r(pr,"LI",{});var f3=i(sf);uc=r(f3,"A",{href:!0,rel:!0});var g3=i(uc);FM=n(g3,"Parallelization"),g3.forEach(t),f3.forEach(t),pr.forEach(t),xM=p(Qt),ro=r(Qt,"DIV",{class:!0});var hr=i(ro);w(fc.$$.fragment,hr),RM=p(hr),ns=r(hr,"P",{});var uh=i(ns);EM=n(uh,"The "),af=r(uh,"CODE",{});var _3=i(af);MM=n(_3,"FlaxRobertaPreTrainedModel"),_3.forEach(t),zM=n(uh," forward method, overrides the "),rf=r(uh,"CODE",{});var b3=i(rf);CM=n(b3,"__call__"),b3.forEach(t),qM=n(uh," special method."),uh.forEach(t),jM=p(hr),w(Wa.$$.fragment,hr),PM=p(hr),w(Ua.$$.fragment,hr),hr.forEach(t),Qt.forEach(t),this.h()},h(){h(d,"name","hf:doc:metadata"),h(d,"content",JSON.stringify(P5)),h(f,"id","roberta"),h(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(f,"href","#roberta"),h(m,"class","relative group"),h(te,"id","overview"),h(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(te,"href","#overview"),h(N,"class","relative group"),h(pe,"href","https://arxiv.org/abs/1907.11692"),h(pe,"rel","nofollow"),h(j,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertModel"),h(Ue,"href","camembert"),h(Se,"href","https://huggingface.co/julien-c"),h(Se,"rel","nofollow"),h(Be,"href","https://github.com/pytorch/fairseq/tree/master/examples/roberta"),h(Be,"rel","nofollow"),h(W,"id","resources"),h(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(W,"href","#resources"),h(Oe,"class","relative group"),h(ur,"href","https://huggingface.co/blog/sentiment-analysis-twitter"),h(ur,"rel","nofollow"),h(fr,"href","https://huggingface.co/inference-api"),h(fr,"rel","nofollow"),h(_r,"href","https://huggingface.co/blog/opinion-classification-with-kili"),h(_r,"rel","nofollow"),h(kr,"href","https://colab.research.google.com/github/DhavalTaunk08/NLP_scripts/blob/master/sentiment_analysis_using_roberta.ipynb"),h(kr,"rel","nofollow"),h(Cc,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForSequenceClassification"),h(yr,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/text-classification"),h(yr,"rel","nofollow"),h(vr,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/text_classification.ipynb"),h(vr,"rel","nofollow"),h(qc,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForSequenceClassification"),h(wr,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/text-classification"),h(wr,"rel","nofollow"),h(Tr,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/text_classification-tf.ipynb"),h(Tr,"rel","nofollow"),h(jc,"href","/docs/transformers/main/en/model_doc/roberta#transformers.FlaxRobertaForSequenceClassification"),h($r,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/text-classification"),h($r,"rel","nofollow"),h(Fr,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/text_classification_flax.ipynb"),h(Fr,"rel","nofollow"),h(Pc,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForTokenClassification"),h(Rr,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/token-classification"),h(Rr,"rel","nofollow"),h(Er,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/token_classification.ipynb"),h(Er,"rel","nofollow"),h(Ac,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForTokenClassification"),h(Mr,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/token-classification"),h(Mr,"rel","nofollow"),h(zr,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/token_classification-tf.ipynb"),h(zr,"rel","nofollow"),h(Lc,"href","/docs/transformers/main/en/model_doc/roberta#transformers.FlaxRobertaForTokenClassification"),h(Cr,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/token-classification"),h(Cr,"rel","nofollow"),h(qr,"href","https://huggingface.co/course/chapter7/2?fw=pt"),h(qr,"rel","nofollow"),h(Ar,"href","https://huggingface.co/blog/how-to-train"),h(Ar,"rel","nofollow"),h(Nc,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForMaskedLM"),h(Lr,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/language-modeling#robertabertdistilbert-and-masked-language-modeling"),h(Lr,"rel","nofollow"),h(Or,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/language_modeling.ipynb"),h(Or,"rel","nofollow"),h(Ic,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForMaskedLM"),h(Nr,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/language-modeling#run_mlmpy"),h(Nr,"rel","nofollow"),h(Ir,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/language_modeling-tf.ipynb"),h(Ir,"rel","nofollow"),h(Dc,"href","/docs/transformers/main/en/model_doc/roberta#transformers.FlaxRobertaForMaskedLM"),h(Dr,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/language-modeling#masked-language-modeling"),h(Dr,"rel","nofollow"),h(Sr,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/masked_language_modeling_flax.ipynb"),h(Sr,"rel","nofollow"),h(Br,"href","https://huggingface.co/course/chapter7/3?fw=pt"),h(Br,"rel","nofollow"),h(Hr,"href","https://huggingface.co/blog/optimum-inference"),h(Hr,"rel","nofollow"),h(Bc,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForQuestionAnswering"),h(Qr,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/question-answering"),h(Qr,"rel","nofollow"),h(Kr,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/question_answering.ipynb"),h(Kr,"rel","nofollow"),h(Wc,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForQuestionAnswering"),h(Jr,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/question-answering"),h(Jr,"rel","nofollow"),h(Vr,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/question_answering-tf.ipynb"),h(Vr,"rel","nofollow"),h(Uc,"href","/docs/transformers/main/en/model_doc/roberta#transformers.FlaxRobertaForQuestionAnswering"),h(Gr,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/question-answering"),h(Gr,"rel","nofollow"),h(Xr,"href","https://huggingface.co/course/chapter7/7?fw=pt"),h(Xr,"rel","nofollow"),h(Kc,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForMultipleChoice"),h(Yr,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/multiple-choice"),h(Yr,"rel","nofollow"),h(Zr,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/multiple_choice.ipynb"),h(Zr,"rel","nofollow"),h(Jc,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForMultipleChoice"),h(ei,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/multiple-choice"),h(ei,"rel","nofollow"),h(ti,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/multiple_choice-tf.ipynb"),h(ti,"rel","nofollow"),h(ds,"id","transformers.RobertaConfig"),h(ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ds,"href","#transformers.RobertaConfig"),h(rn,"class","relative group"),h(Vc,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaModel"),h(Gc,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaModel"),h(si,"href","https://huggingface.co/roberta-base"),h(si,"rel","nofollow"),h(Xc,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(Yc,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(Zc,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"),h(ep,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"),h(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ps,"id","transformers.RobertaTokenizer"),h(ps,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ps,"href","#transformers.RobertaTokenizer"),h(cn,"class","relative group"),h(tp,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(Oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(us,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(fs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(sp,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(gs,"id","transformers.RobertaTokenizerFast"),h(gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(gs,"href","#transformers.RobertaTokenizerFast"),h(pn,"class","relative group"),h(ap,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),h(rp,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ks,"id","transformers.RobertaModel"),h(ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ks,"href","#transformers.RobertaModel"),h(hn,"class","relative group"),h(ip,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Fi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Fi,"rel","nofollow"),h(Ri,"href","https://arxiv.org/abs/1706.03762"),h(Ri,"rel","nofollow"),h(lp,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaModel"),h(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ts,"id","transformers.RobertaForCausalLM"),h(Ts,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ts,"href","#transformers.RobertaForCausalLM"),h(un,"class","relative group"),h(dp,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Pi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Pi,"rel","nofollow"),h(cp,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForCausalLM"),h(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(xs,"id","transformers.RobertaForMaskedLM"),h(xs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(xs,"href","#transformers.RobertaForMaskedLM"),h(gn,"class","relative group"),h(pp,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Si,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Si,"rel","nofollow"),h(hp,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForMaskedLM"),h(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(zs,"id","transformers.RobertaForSequenceClassification"),h(zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(zs,"href","#transformers.RobertaForSequenceClassification"),h(bn,"class","relative group"),h(mp,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Ki,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Ki,"rel","nofollow"),h(up,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForSequenceClassification"),h(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ls,"id","transformers.RobertaForMultipleChoice"),h(Ls,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ls,"href","#transformers.RobertaForMultipleChoice"),h(yn,"class","relative group"),h(fp,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Zi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Zi,"rel","nofollow"),h(gp,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForMultipleChoice"),h(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Is,"id","transformers.RobertaForTokenClassification"),h(Is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Is,"href","#transformers.RobertaForTokenClassification"),h(wn,"class","relative group"),h(_p,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(al,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(al,"rel","nofollow"),h(bp,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForTokenClassification"),h(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ws,"id","transformers.RobertaForQuestionAnswering"),h(Ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ws,"href","#transformers.RobertaForQuestionAnswering"),h($n,"class","relative group"),h(kp,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(pl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(pl,"rel","nofollow"),h(yp,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForQuestionAnswering"),h(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ks,"id","transformers.TFRobertaModel"),h(Ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ks,"href","#transformers.TFRobertaModel"),h(Rn,"class","relative group"),h(vp,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(_l,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(_l,"rel","nofollow"),h(wp,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaModel"),h(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Xs,"id","transformers.TFRobertaForCausalLM"),h(Xs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Xs,"href","#transformers.TFRobertaForCausalLM"),h(Mn,"class","relative group"),h(Tp,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForCausalLM"),h(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(zn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ea,"id","transformers.TFRobertaForMaskedLM"),h(ea,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ea,"href","#transformers.TFRobertaForMaskedLM"),h(qn,"class","relative group"),h($p,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Rl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Rl,"rel","nofollow"),h(Fp,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForMaskedLM"),h(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(aa,"id","transformers.TFRobertaForSequenceClassification"),h(aa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(aa,"href","#transformers.TFRobertaForSequenceClassification"),h(Pn,"class","relative group"),h(xp,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(jl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(jl,"rel","nofollow"),h(Rp,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForSequenceClassification"),h(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ca,"id","transformers.TFRobertaForMultipleChoice"),h(ca,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ca,"href","#transformers.TFRobertaForMultipleChoice"),h(Ln,"class","relative group"),h(Ep,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Il,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Il,"rel","nofollow"),h(Mp,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForMultipleChoice"),h(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ua,"id","transformers.TFRobertaForTokenClassification"),h(ua,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ua,"href","#transformers.TFRobertaForTokenClassification"),h(Nn,"class","relative group"),h(zp,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Hl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Hl,"rel","nofollow"),h(Cp,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForTokenClassification"),h(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ka,"id","transformers.TFRobertaForQuestionAnswering"),h(ka,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ka,"href","#transformers.TFRobertaForQuestionAnswering"),h(Dn,"class","relative group"),h(qp,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Xl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Xl,"rel","nofollow"),h(jp,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForQuestionAnswering"),h(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h($a,"id","transformers.FlaxRobertaModel"),h($a,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h($a,"href","#transformers.FlaxRobertaModel"),h(Wn,"class","relative group"),h(Pp,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(nd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),h(nd,"rel","nofollow"),h(sd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(sd,"rel","nofollow"),h(ad,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(ad,"rel","nofollow"),h(rd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(rd,"rel","nofollow"),h(id,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(id,"rel","nofollow"),h(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ra,"id","transformers.FlaxRobertaForCausalLM"),h(Ra,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ra,"href","#transformers.FlaxRobertaForCausalLM"),h(Hn,"class","relative group"),h(Ap,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(md,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),h(md,"rel","nofollow"),h(ud,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(ud,"rel","nofollow"),h(fd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(fd,"rel","nofollow"),h(gd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(gd,"rel","nofollow"),h(_d,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(_d,"rel","nofollow"),h(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(za,"id","transformers.FlaxRobertaForMaskedLM"),h(za,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(za,"href","#transformers.FlaxRobertaForMaskedLM"),h(Kn,"class","relative group"),h(Lp,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),h($d,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),h($d,"rel","nofollow"),h(Fd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(Fd,"rel","nofollow"),h(xd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(xd,"rel","nofollow"),h(Rd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(Rd,"rel","nofollow"),h(Ed,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(Ed,"rel","nofollow"),h(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ja,"id","transformers.FlaxRobertaForSequenceClassification"),h(ja,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ja,"href","#transformers.FlaxRobertaForSequenceClassification"),h(Vn,"class","relative group"),h(Op,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(Pd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),h(Pd,"rel","nofollow"),h(Ad,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(Ad,"rel","nofollow"),h(Ld,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(Ld,"rel","nofollow"),h(Od,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(Od,"rel","nofollow"),h(Nd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(Nd,"rel","nofollow"),h(no,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(La,"id","transformers.FlaxRobertaForMultipleChoice"),h(La,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(La,"href","#transformers.FlaxRobertaForMultipleChoice"),h(Xn,"class","relative group"),h(Np,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(Ud,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),h(Ud,"rel","nofollow"),h(Hd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(Hd,"rel","nofollow"),h(Qd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(Qd,"rel","nofollow"),h(Kd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(Kd,"rel","nofollow"),h(Jd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(Jd,"rel","nofollow"),h(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ia,"id","transformers.FlaxRobertaForTokenClassification"),h(Ia,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ia,"href","#transformers.FlaxRobertaForTokenClassification"),h(Zn,"class","relative group"),h(Ip,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(ec,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),h(ec,"rel","nofollow"),h(tc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(tc,"rel","nofollow"),h(oc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(oc,"rel","nofollow"),h(nc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(nc,"rel","nofollow"),h(sc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(sc,"rel","nofollow"),h(ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ba,"id","transformers.FlaxRobertaForQuestionAnswering"),h(Ba,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ba,"href","#transformers.FlaxRobertaForQuestionAnswering"),h(ts,"class","relative group"),h(Dp,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(cc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),h(cc,"rel","nofollow"),h(pc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(pc,"rel","nofollow"),h(hc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(hc,"rel","nofollow"),h(mc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(mc,"rel","nofollow"),h(uc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(uc,"rel","nofollow"),h(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,g){e(document.head,d),b(s,_,g),b(s,m,g),e(m,f),e(f,k),T(l,k,null),e(m,u),e(m,E),e(E,le),b(s,Z,g),b(s,N,g),e(N,te),e(te,oe),T(M,oe,null),e(N,we),e(N,K),e(K,Te),b(s,ge,g),b(s,B,g),e(B,$e),e(B,pe),e(pe,J),e(B,Fe),b(s,_e,g),b(s,U,g),e(U,xe),b(s,be,g),b(s,H,g),e(H,Re),b(s,ke,g),b(s,ee,g),e(ee,q),e(q,P),b(s,ye,g),b(s,Q,g),e(Q,Ee),b(s,ve,g),b(s,I,g),e(I,he),e(he,Me),e(he,j),e(j,ze),e(he,V),e(I,Ce),e(I,me),e(me,G),e(I,qe),e(I,ne),e(ne,D),e(ne,ue),e(ue,X),e(ne,je),e(ne,se),e(se,A),e(ne,Pe),e(ne,L),e(L,Ae),e(ne,Le),e(I,y),e(I,z),e(z,Ue),e(Ue,de),e(z,Xe),b(s,Ke,g),b(s,C,g),e(C,Ye),e(C,Se),e(Se,Ze),e(C,et),e(C,Be),e(Be,S),e(C,Y),b(s,Je,g),b(s,Oe,g),e(Oe,W),e(W,He),T(We,He,null),e(Oe,Ne),e(Oe,Qe),e(Qe,ce),b(s,Ve,g),b(s,zc,g),e(zc,jb),b(s,Zf,g),T(mr,s,g),b(s,eg,g),b(s,bt,g),e(bt,an),e(an,Pb),e(an,ur),e(ur,Ab),e(an,Lb),e(an,fr),e(fr,Ob),e(an,Nb),e(bt,Ib),e(bt,gr),e(gr,Db),e(gr,_r),e(_r,Sb),e(gr,Bb),e(bt,Wb),e(bt,br),e(br,Ub),e(br,kr),e(kr,Hb),e(br,Qb),e(bt,Kb),e(bt,Fo),e(Fo,Cc),e(Cc,Jb),e(Fo,Vb),e(Fo,yr),e(yr,Gb),e(Fo,Xb),e(Fo,vr),e(vr,Yb),e(Fo,Zb),e(bt,ek),e(bt,xo),e(xo,qc),e(qc,tk),e(xo,ok),e(xo,wr),e(wr,nk),e(xo,sk),e(xo,Tr),e(Tr,ak),e(xo,rk),e(bt,ik),e(bt,Ro),e(Ro,jc),e(jc,lk),e(Ro,dk),e(Ro,$r),e($r,ck),e(Ro,pk),e(Ro,Fr),e(Fr,hk),e(Ro,mk),b(s,tg,g),T(xr,s,g),b(s,og,g),b(s,Kt,g),e(Kt,Eo),e(Eo,Pc),e(Pc,uk),e(Eo,fk),e(Eo,Rr),e(Rr,gk),e(Eo,_k),e(Eo,Er),e(Er,bk),e(Eo,kk),e(Kt,yk),e(Kt,Mo),e(Mo,Ac),e(Ac,vk),e(Mo,wk),e(Mo,Mr),e(Mr,Tk),e(Mo,$k),e(Mo,zr),e(zr,Fk),e(Mo,xk),e(Kt,Rk),e(Kt,rs),e(rs,Lc),e(Lc,Ek),e(rs,Mk),e(rs,Cr),e(Cr,zk),e(rs,Ck),e(Kt,qk),e(Kt,Oc),e(Oc,qr),e(qr,jk),e(Oc,Pk),b(s,ng,g),T(jr,s,g),b(s,sg,g),b(s,Mt,g),e(Mt,Pr),e(Pr,Ak),e(Pr,Ar),e(Ar,Lk),e(Pr,Ok),e(Mt,Nk),e(Mt,zo),e(zo,Nc),e(Nc,Ik),e(zo,Dk),e(zo,Lr),e(Lr,Sk),e(zo,Bk),e(zo,Or),e(Or,Wk),e(zo,Uk),e(Mt,Hk),e(Mt,Co),e(Co,Ic),e(Ic,Qk),e(Co,Kk),e(Co,Nr),e(Nr,Jk),e(Co,Vk),e(Co,Ir),e(Ir,Gk),e(Co,Xk),e(Mt,Yk),e(Mt,qo),e(qo,Dc),e(Dc,Zk),e(qo,ey),e(qo,Dr),e(Dr,ty),e(qo,oy),e(qo,Sr),e(Sr,ny),e(qo,sy),e(Mt,ay),e(Mt,Sc),e(Sc,Br),e(Br,ry),e(Sc,iy),b(s,ag,g),T(Wr,s,g),b(s,rg,g),b(s,zt,g),e(zt,Ur),e(Ur,ly),e(Ur,Hr),e(Hr,dy),e(Ur,cy),e(zt,py),e(zt,jo),e(jo,Bc),e(Bc,hy),e(jo,my),e(jo,Qr),e(Qr,uy),e(jo,fy),e(jo,Kr),e(Kr,gy),e(jo,_y),e(zt,by),e(zt,Po),e(Po,Wc),e(Wc,ky),e(Po,yy),e(Po,Jr),e(Jr,vy),e(Po,wy),e(Po,Vr),e(Vr,Ty),e(Po,$y),e(zt,Fy),e(zt,is),e(is,Uc),e(Uc,xy),e(is,Ry),e(is,Gr),e(Gr,Ey),e(is,My),e(zt,zy),e(zt,Hc),e(Hc,Xr),e(Xr,Cy),e(Hc,qy),b(s,ig,g),b(s,Qc,g),e(Qc,fh),e(fh,jy),b(s,lg,g),b(s,ls,g),e(ls,Ao),e(Ao,Kc),e(Kc,Py),e(Ao,Ay),e(Ao,Yr),e(Yr,Ly),e(Ao,Oy),e(Ao,Zr),e(Zr,Ny),e(Ao,Iy),e(ls,Dy),e(ls,Lo),e(Lo,Jc),e(Jc,Sy),e(Lo,By),e(Lo,ei),e(ei,Wy),e(Lo,Uy),e(Lo,ti),e(ti,Hy),e(Lo,Qy),b(s,dg,g),b(s,rn,g),e(rn,ds),e(ds,gh),T(oi,gh,null),e(rn,Ky),e(rn,_h),e(_h,Jy),b(s,cg,g),b(s,vt,g),T(ni,vt,null),e(vt,Vy),e(vt,uo),e(uo,Gy),e(uo,Vc),e(Vc,Xy),e(uo,Yy),e(uo,Gc),e(Gc,Zy),e(uo,ev),e(uo,si),e(si,tv),e(uo,ov),e(vt,nv),e(vt,ln),e(ln,sv),e(ln,Xc),e(Xc,av),e(ln,rv),e(ln,Yc),e(Yc,iv),e(ln,lv),e(vt,dv),e(vt,dn),e(dn,cv),e(dn,Zc),e(Zc,pv),e(dn,hv),e(dn,ep),e(ep,mv),e(dn,uv),e(vt,fv),T(cs,vt,null),b(s,pg,g),b(s,cn,g),e(cn,ps),e(ps,bh),T(ai,bh,null),e(cn,gv),e(cn,kh),e(kh,_v),b(s,hg,g),b(s,Ie,g),T(ri,Ie,null),e(Ie,bv),e(Ie,yh),e(yh,kv),e(Ie,yv),e(Ie,vh),e(vh,vv),e(Ie,wv),T(hs,Ie,null),e(Ie,Tv),e(Ie,ii),e(ii,$v),e(ii,wh),e(wh,Fv),e(ii,xv),e(Ie,Rv),T(ms,Ie,null),e(Ie,Ev),e(Ie,li),e(li,Mv),e(li,tp),e(tp,zv),e(li,Cv),e(Ie,qv),e(Ie,Oo),T(di,Oo,null),e(Oo,jv),e(Oo,Th),e(Th,Pv),e(Oo,Av),e(Oo,ci),e(ci,op),e(op,Lv),e(op,$h),e($h,Ov),e(ci,Nv),e(ci,np),e(np,Iv),e(np,Fh),e(Fh,Dv),e(Ie,Sv),e(Ie,us),T(pi,us,null),e(us,Bv),e(us,hi),e(hi,Wv),e(hi,xh),e(xh,Uv),e(hi,Hv),e(Ie,Qv),e(Ie,fs),T(mi,fs,null),e(fs,Kv),e(fs,Rh),e(Rh,Jv),e(Ie,Vv),e(Ie,sp),T(ui,sp,null),b(s,mg,g),b(s,pn,g),e(pn,gs),e(gs,Eh),T(fi,Eh,null),e(pn,Gv),e(pn,Mh),e(Mh,Xv),b(s,ug,g),b(s,tt,g),T(gi,tt,null),e(tt,Yv),e(tt,_i),e(_i,Zv),e(_i,zh),e(zh,ew),e(_i,tw),e(tt,ow),e(tt,Ch),e(Ch,nw),e(tt,sw),T(_s,tt,null),e(tt,aw),e(tt,bi),e(bi,rw),e(bi,qh),e(qh,iw),e(bi,lw),e(tt,dw),T(bs,tt,null),e(tt,cw),e(tt,ki),e(ki,pw),e(ki,ap),e(ap,hw),e(ki,mw),e(tt,uw),e(tt,rp),T(yi,rp,null),b(s,fg,g),b(s,hn,g),e(hn,ks),e(ks,jh),T(vi,jh,null),e(hn,fw),e(hn,Ph),e(Ph,gw),b(s,gg,g),b(s,ot,g),T(wi,ot,null),e(ot,_w),e(ot,Ah),e(Ah,bw),e(ot,kw),e(ot,Ti),e(Ti,yw),e(Ti,ip),e(ip,vw),e(Ti,ww),e(ot,Tw),e(ot,$i),e($i,$w),e($i,Fi),e(Fi,Fw),e($i,xw),e(ot,Rw),e(ot,xi),e(xi,Ew),e(xi,Lh),e(Lh,Mw),e(xi,zw),e(ot,Cw),e(ot,pt),e(pt,qw),e(pt,Oh),e(Oh,jw),e(pt,Pw),e(pt,Nh),e(Nh,Aw),e(pt,Lw),e(pt,Ih),e(Ih,Ow),e(pt,Nw),e(pt,Dh),e(Dh,Iw),e(pt,Dw),e(pt,Sh),e(Sh,Sw),e(pt,Bw),e(pt,Bh),e(Bh,Ww),e(pt,Uw),e(ot,Hw),e(ot,ys),e(ys,Qw),e(ys,Wh),e(Wh,Kw),e(ys,Jw),e(ys,Ri),e(Ri,Vw),e(ot,Gw),e(ot,Jt),T(Ei,Jt,null),e(Jt,Xw),e(Jt,mn),e(mn,Yw),e(mn,lp),e(lp,Zw),e(mn,eT),e(mn,Uh),e(Uh,tT),e(mn,oT),e(Jt,nT),T(vs,Jt,null),e(Jt,sT),T(ws,Jt,null),b(s,_g,g),b(s,un,g),e(un,Ts),e(Ts,Hh),T(Mi,Hh,null),e(un,aT),e(un,Qh),e(Qh,rT),b(s,bg,g),b(s,wt,g),T(zi,wt,null),e(wt,iT),e(wt,Ci),e(Ci,lT),e(Ci,Kh),e(Kh,dT),e(Ci,cT),e(wt,pT),e(wt,qi),e(qi,hT),e(qi,dp),e(dp,mT),e(qi,uT),e(wt,fT),e(wt,ji),e(ji,gT),e(ji,Pi),e(Pi,_T),e(ji,bT),e(wt,kT),e(wt,Vt),T(Ai,Vt,null),e(Vt,yT),e(Vt,fn),e(fn,vT),e(fn,cp),e(cp,wT),e(fn,TT),e(fn,Jh),e(Jh,$T),e(fn,FT),e(Vt,xT),T($s,Vt,null),e(Vt,RT),T(Fs,Vt,null),b(s,kg,g),b(s,gn,g),e(gn,xs),e(xs,Vh),T(Li,Vh,null),e(gn,ET),e(gn,Gh),e(Gh,MT),b(s,yg,g),b(s,Tt,g),T(Oi,Tt,null),e(Tt,zT),e(Tt,Ni),e(Ni,CT),e(Ni,Xh),e(Xh,qT),e(Ni,jT),e(Tt,PT),e(Tt,Ii),e(Ii,AT),e(Ii,pp),e(pp,LT),e(Ii,OT),e(Tt,NT),e(Tt,Di),e(Di,IT),e(Di,Si),e(Si,DT),e(Di,ST),e(Tt,BT),e(Tt,Ct),T(Bi,Ct,null),e(Ct,WT),e(Ct,_n),e(_n,UT),e(_n,hp),e(hp,HT),e(_n,QT),e(_n,Yh),e(Yh,KT),e(_n,JT),e(Ct,VT),T(Rs,Ct,null),e(Ct,GT),T(Es,Ct,null),e(Ct,XT),T(Ms,Ct,null),b(s,vg,g),b(s,bn,g),e(bn,zs),e(zs,Zh),T(Wi,Zh,null),e(bn,YT),e(bn,em),e(em,ZT),b(s,wg,g),b(s,$t,g),T(Ui,$t,null),e($t,e$),e($t,tm),e(tm,t$),e($t,o$),e($t,Hi),e(Hi,n$),e(Hi,mp),e(mp,s$),e(Hi,a$),e($t,r$),e($t,Qi),e(Qi,i$),e(Qi,Ki),e(Ki,l$),e(Qi,d$),e($t,c$),e($t,ct),T(Ji,ct,null),e(ct,p$),e(ct,kn),e(kn,h$),e(kn,up),e(up,m$),e(kn,u$),e(kn,om),e(om,f$),e(kn,g$),e(ct,_$),T(Cs,ct,null),e(ct,b$),T(qs,ct,null),e(ct,k$),T(js,ct,null),e(ct,y$),T(Ps,ct,null),e(ct,v$),T(As,ct,null),b(s,Tg,g),b(s,yn,g),e(yn,Ls),e(Ls,nm),T(Vi,nm,null),e(yn,w$),e(yn,sm),e(sm,T$),b(s,$g,g),b(s,Ft,g),T(Gi,Ft,null),e(Ft,$$),e(Ft,am),e(am,F$),e(Ft,x$),e(Ft,Xi),e(Xi,R$),e(Xi,fp),e(fp,E$),e(Xi,M$),e(Ft,z$),e(Ft,Yi),e(Yi,C$),e(Yi,Zi),e(Zi,q$),e(Yi,j$),e(Ft,P$),e(Ft,Gt),T(el,Gt,null),e(Gt,A$),e(Gt,vn),e(vn,L$),e(vn,gp),e(gp,O$),e(vn,N$),e(vn,rm),e(rm,I$),e(vn,D$),e(Gt,S$),T(Os,Gt,null),e(Gt,B$),T(Ns,Gt,null),b(s,Fg,g),b(s,wn,g),e(wn,Is),e(Is,im),T(tl,im,null),e(wn,W$),e(wn,lm),e(lm,U$),b(s,xg,g),b(s,xt,g),T(ol,xt,null),e(xt,H$),e(xt,dm),e(dm,Q$),e(xt,K$),e(xt,nl),e(nl,J$),e(nl,_p),e(_p,V$),e(nl,G$),e(xt,X$),e(xt,sl),e(sl,Y$),e(sl,al),e(al,Z$),e(sl,e1),e(xt,t1),e(xt,qt),T(rl,qt,null),e(qt,o1),e(qt,Tn),e(Tn,n1),e(Tn,bp),e(bp,s1),e(Tn,a1),e(Tn,cm),e(cm,r1),e(Tn,i1),e(qt,l1),T(Ds,qt,null),e(qt,d1),T(Ss,qt,null),e(qt,c1),T(Bs,qt,null),b(s,Rg,g),b(s,$n,g),e($n,Ws),e(Ws,pm),T(il,pm,null),e($n,p1),e($n,hm),e(hm,h1),b(s,Eg,g),b(s,Rt,g),T(ll,Rt,null),e(Rt,m1),e(Rt,Fn),e(Fn,u1),e(Fn,mm),e(mm,f1),e(Fn,g1),e(Fn,um),e(um,_1),e(Fn,b1),e(Rt,k1),e(Rt,dl),e(dl,y1),e(dl,kp),e(kp,v1),e(dl,w1),e(Rt,T1),e(Rt,cl),e(cl,$1),e(cl,pl),e(pl,F1),e(cl,x1),e(Rt,R1),e(Rt,jt),T(hl,jt,null),e(jt,E1),e(jt,xn),e(xn,M1),e(xn,yp),e(yp,z1),e(xn,C1),e(xn,fm),e(fm,q1),e(xn,j1),e(jt,P1),T(Us,jt,null),e(jt,A1),T(Hs,jt,null),e(jt,L1),T(Qs,jt,null),b(s,Mg,g),b(s,Rn,g),e(Rn,Ks),e(Ks,gm),T(ml,gm,null),e(Rn,O1),e(Rn,_m),e(_m,N1),b(s,zg,g),b(s,ht,g),T(ul,ht,null),e(ht,I1),e(ht,bm),e(bm,D1),e(ht,S1),e(ht,fl),e(fl,B1),e(fl,vp),e(vp,W1),e(fl,U1),e(ht,H1),e(ht,gl),e(gl,Q1),e(gl,_l),e(_l,K1),e(gl,J1),e(ht,V1),T(Js,ht,null),e(ht,G1),e(ht,Xt),T(bl,Xt,null),e(Xt,X1),e(Xt,En),e(En,Y1),e(En,wp),e(wp,Z1),e(En,e2),e(En,km),e(km,t2),e(En,o2),e(Xt,n2),T(Vs,Xt,null),e(Xt,s2),T(Gs,Xt,null),b(s,Cg,g),b(s,Mn,g),e(Mn,Xs),e(Xs,ym),T(kl,ym,null),e(Mn,a2),e(Mn,vm),e(vm,r2),b(s,qg,g),b(s,zn,g),T(yl,zn,null),e(zn,i2),e(zn,Yt),T(vl,Yt,null),e(Yt,l2),e(Yt,Cn),e(Cn,d2),e(Cn,Tp),e(Tp,c2),e(Cn,p2),e(Cn,wm),e(wm,h2),e(Cn,m2),e(Yt,u2),T(Ys,Yt,null),e(Yt,f2),T(Zs,Yt,null),b(s,jg,g),b(s,qn,g),e(qn,ea),e(ea,Tm),T(wl,Tm,null),e(qn,g2),e(qn,$m),e($m,_2),b(s,Pg,g),b(s,mt,g),T(Tl,mt,null),e(mt,b2),e(mt,$l),e($l,k2),e($l,Fm),e(Fm,y2),e($l,v2),e(mt,w2),e(mt,Fl),e(Fl,T2),e(Fl,$p),e($p,$2),e(Fl,F2),e(mt,x2),e(mt,xl),e(xl,R2),e(xl,Rl),e(Rl,E2),e(xl,M2),e(mt,z2),T(ta,mt,null),e(mt,C2),e(mt,Pt),T(El,Pt,null),e(Pt,q2),e(Pt,jn),e(jn,j2),e(jn,Fp),e(Fp,P2),e(jn,A2),e(jn,xm),e(xm,L2),e(jn,O2),e(Pt,N2),T(oa,Pt,null),e(Pt,I2),T(na,Pt,null),e(Pt,D2),T(sa,Pt,null),b(s,Ag,g),b(s,Pn,g),e(Pn,aa),e(aa,Rm),T(Ml,Rm,null),e(Pn,S2),e(Pn,Em),e(Em,B2),b(s,Lg,g),b(s,ut,g),T(zl,ut,null),e(ut,W2),e(ut,Mm),e(Mm,U2),e(ut,H2),e(ut,Cl),e(Cl,Q2),e(Cl,xp),e(xp,K2),e(Cl,J2),e(ut,V2),e(ut,ql),e(ql,G2),e(ql,jl),e(jl,X2),e(ql,Y2),e(ut,Z2),T(ra,ut,null),e(ut,eF),e(ut,At),T(Pl,At,null),e(At,tF),e(At,An),e(An,oF),e(An,Rp),e(Rp,nF),e(An,sF),e(An,zm),e(zm,aF),e(An,rF),e(At,iF),T(ia,At,null),e(At,lF),T(la,At,null),e(At,dF),T(da,At,null),b(s,Og,g),b(s,Ln,g),e(Ln,ca),e(ca,Cm),T(Al,Cm,null),e(Ln,cF),e(Ln,qm),e(qm,pF),b(s,Ng,g),b(s,ft,g),T(Ll,ft,null),e(ft,hF),e(ft,jm),e(jm,mF),e(ft,uF),e(ft,Ol),e(Ol,fF),e(Ol,Ep),e(Ep,gF),e(Ol,_F),e(ft,bF),e(ft,Nl),e(Nl,kF),e(Nl,Il),e(Il,yF),e(Nl,vF),e(ft,wF),T(pa,ft,null),e(ft,TF),e(ft,Zt),T(Dl,Zt,null),e(Zt,$F),e(Zt,On),e(On,FF),e(On,Mp),e(Mp,xF),e(On,RF),e(On,Pm),e(Pm,EF),e(On,MF),e(Zt,zF),T(ha,Zt,null),e(Zt,CF),T(ma,Zt,null),b(s,Ig,g),b(s,Nn,g),e(Nn,ua),e(ua,Am),T(Sl,Am,null),e(Nn,qF),e(Nn,Lm),e(Lm,jF),b(s,Dg,g),b(s,gt,g),T(Bl,gt,null),e(gt,PF),e(gt,Om),e(Om,AF),e(gt,LF),e(gt,Wl),e(Wl,OF),e(Wl,zp),e(zp,NF),e(Wl,IF),e(gt,DF),e(gt,Ul),e(Ul,SF),e(Ul,Hl),e(Hl,BF),e(Ul,WF),e(gt,UF),T(fa,gt,null),e(gt,HF),e(gt,Lt),T(Ql,Lt,null),e(Lt,QF),e(Lt,In),e(In,KF),e(In,Cp),e(Cp,JF),e(In,VF),e(In,Nm),e(Nm,GF),e(In,XF),e(Lt,YF),T(ga,Lt,null),e(Lt,ZF),T(_a,Lt,null),e(Lt,e0),T(ba,Lt,null),b(s,Sg,g),b(s,Dn,g),e(Dn,ka),e(ka,Im),T(Kl,Im,null),e(Dn,t0),e(Dn,Dm),e(Dm,o0),b(s,Bg,g),b(s,_t,g),T(Jl,_t,null),e(_t,n0),e(_t,Sn),e(Sn,s0),e(Sn,Sm),e(Sm,a0),e(Sn,r0),e(Sn,Bm),e(Bm,i0),e(Sn,l0),e(_t,d0),e(_t,Vl),e(Vl,c0),e(Vl,qp),e(qp,p0),e(Vl,h0),e(_t,m0),e(_t,Gl),e(Gl,u0),e(Gl,Xl),e(Xl,f0),e(Gl,g0),e(_t,_0),T(ya,_t,null),e(_t,b0),e(_t,Ot),T(Yl,Ot,null),e(Ot,k0),e(Ot,Bn),e(Bn,y0),e(Bn,jp),e(jp,v0),e(Bn,w0),e(Bn,Wm),e(Wm,T0),e(Bn,$0),e(Ot,F0),T(va,Ot,null),e(Ot,x0),T(wa,Ot,null),e(Ot,R0),T(Ta,Ot,null),b(s,Wg,g),b(s,Wn,g),e(Wn,$a),e($a,Um),T(Zl,Um,null),e(Wn,E0),e(Wn,Hm),e(Hm,M0),b(s,Ug,g),b(s,nt,g),T(ed,nt,null),e(nt,z0),e(nt,Qm),e(Qm,C0),e(nt,q0),e(nt,td),e(td,j0),e(td,Pp),e(Pp,P0),e(td,A0),e(nt,L0),e(nt,od),e(od,O0),e(od,nd),e(nd,N0),e(od,I0),e(nt,D0),e(nt,Km),e(Km,S0),e(nt,B0),e(nt,fo),e(fo,Jm),e(Jm,sd),e(sd,W0),e(fo,U0),e(fo,Vm),e(Vm,ad),e(ad,H0),e(fo,Q0),e(fo,Gm),e(Gm,rd),e(rd,K0),e(fo,J0),e(fo,Xm),e(Xm,id),e(id,V0),e(nt,G0),e(nt,eo),T(ld,eo,null),e(eo,X0),e(eo,Un),e(Un,Y0),e(Un,Ym),e(Ym,Z0),e(Un,ex),e(Un,Zm),e(Zm,tx),e(Un,ox),e(eo,nx),T(Fa,eo,null),e(eo,sx),T(xa,eo,null),b(s,Hg,g),b(s,Hn,g),e(Hn,Ra),e(Ra,eu),T(dd,eu,null),e(Hn,ax),e(Hn,tu),e(tu,rx),b(s,Qg,g),b(s,st,g),T(cd,st,null),e(st,ix),e(st,ou),e(ou,lx),e(st,dx),e(st,pd),e(pd,cx),e(pd,Ap),e(Ap,px),e(pd,hx),e(st,mx),e(st,hd),e(hd,ux),e(hd,md),e(md,fx),e(hd,gx),e(st,_x),e(st,nu),e(nu,bx),e(st,kx),e(st,go),e(go,su),e(su,ud),e(ud,yx),e(go,vx),e(go,au),e(au,fd),e(fd,wx),e(go,Tx),e(go,ru),e(ru,gd),e(gd,$x),e(go,Fx),e(go,iu),e(iu,_d),e(_d,xx),e(st,Rx),e(st,to),T(bd,to,null),e(to,Ex),e(to,Qn),e(Qn,Mx),e(Qn,lu),e(lu,zx),e(Qn,Cx),e(Qn,du),e(du,qx),e(Qn,jx),e(to,Px),T(Ea,to,null),e(to,Ax),T(Ma,to,null),b(s,Kg,g),b(s,Kn,g),e(Kn,za),e(za,cu),T(kd,cu,null),e(Kn,Lx),e(Kn,pu),e(pu,Ox),b(s,Jg,g),b(s,at,g),T(yd,at,null),e(at,Nx),e(at,vd),e(vd,Ix),e(vd,hu),e(hu,Dx),e(vd,Sx),e(at,Bx),e(at,wd),e(wd,Wx),e(wd,Lp),e(Lp,Ux),e(wd,Hx),e(at,Qx),e(at,Td),e(Td,Kx),e(Td,$d),e($d,Jx),e(Td,Vx),e(at,Gx),e(at,mu),e(mu,Xx),e(at,Yx),e(at,_o),e(_o,uu),e(uu,Fd),e(Fd,Zx),e(_o,eR),e(_o,fu),e(fu,xd),e(xd,tR),e(_o,oR),e(_o,gu),e(gu,Rd),e(Rd,nR),e(_o,sR),e(_o,_u),e(_u,Ed),e(Ed,aR),e(at,rR),e(at,oo),T(Md,oo,null),e(oo,iR),e(oo,Jn),e(Jn,lR),e(Jn,bu),e(bu,dR),e(Jn,cR),e(Jn,ku),e(ku,pR),e(Jn,hR),e(oo,mR),T(Ca,oo,null),e(oo,uR),T(qa,oo,null),b(s,Vg,g),b(s,Vn,g),e(Vn,ja),e(ja,yu),T(zd,yu,null),e(Vn,fR),e(Vn,vu),e(vu,gR),b(s,Gg,g),b(s,rt,g),T(Cd,rt,null),e(rt,_R),e(rt,wu),e(wu,bR),e(rt,kR),e(rt,qd),e(qd,yR),e(qd,Op),e(Op,vR),e(qd,wR),e(rt,TR),e(rt,jd),e(jd,$R),e(jd,Pd),e(Pd,FR),e(jd,xR),e(rt,RR),e(rt,Tu),e(Tu,ER),e(rt,MR),e(rt,bo),e(bo,$u),e($u,Ad),e(Ad,zR),e(bo,CR),e(bo,Fu),e(Fu,Ld),e(Ld,qR),e(bo,jR),e(bo,xu),e(xu,Od),e(Od,PR),e(bo,AR),e(bo,Ru),e(Ru,Nd),e(Nd,LR),e(rt,OR),e(rt,no),T(Id,no,null),e(no,NR),e(no,Gn),e(Gn,IR),e(Gn,Eu),e(Eu,DR),e(Gn,SR),e(Gn,Mu),e(Mu,BR),e(Gn,WR),e(no,UR),T(Pa,no,null),e(no,HR),T(Aa,no,null),b(s,Xg,g),b(s,Xn,g),e(Xn,La),e(La,zu),T(Dd,zu,null),e(Xn,QR),e(Xn,Cu),e(Cu,KR),b(s,Yg,g),b(s,it,g),T(Sd,it,null),e(it,JR),e(it,qu),e(qu,VR),e(it,GR),e(it,Bd),e(Bd,XR),e(Bd,Np),e(Np,YR),e(Bd,ZR),e(it,eE),e(it,Wd),e(Wd,tE),e(Wd,Ud),e(Ud,oE),e(Wd,nE),e(it,sE),e(it,ju),e(ju,aE),e(it,rE),e(it,ko),e(ko,Pu),e(Pu,Hd),e(Hd,iE),e(ko,lE),e(ko,Au),e(Au,Qd),e(Qd,dE),e(ko,cE),e(ko,Lu),e(Lu,Kd),e(Kd,pE),e(ko,hE),e(ko,Ou),e(Ou,Jd),e(Jd,mE),e(it,uE),e(it,so),T(Vd,so,null),e(so,fE),e(so,Yn),e(Yn,gE),e(Yn,Nu),e(Nu,_E),e(Yn,bE),e(Yn,Iu),e(Iu,kE),e(Yn,yE),e(so,vE),T(Oa,so,null),e(so,wE),T(Na,so,null),b(s,Zg,g),b(s,Zn,g),e(Zn,Ia),e(Ia,Du),T(Gd,Du,null),e(Zn,TE),e(Zn,Su),e(Su,$E),b(s,e_,g),b(s,lt,g),T(Xd,lt,null),e(lt,FE),e(lt,Bu),e(Bu,xE),e(lt,RE),e(lt,Yd),e(Yd,EE),e(Yd,Ip),e(Ip,ME),e(Yd,zE),e(lt,CE),e(lt,Zd),e(Zd,qE),e(Zd,ec),e(ec,jE),e(Zd,PE),e(lt,AE),e(lt,Wu),e(Wu,LE),e(lt,OE),e(lt,yo),e(yo,Uu),e(Uu,tc),e(tc,NE),e(yo,IE),e(yo,Hu),e(Hu,oc),e(oc,DE),e(yo,SE),e(yo,Qu),e(Qu,nc),e(nc,BE),e(yo,WE),e(yo,Ku),e(Ku,sc),e(sc,UE),e(lt,HE),e(lt,ao),T(ac,ao,null),e(ao,QE),e(ao,es),e(es,KE),e(es,Ju),e(Ju,JE),e(es,VE),e(es,Vu),e(Vu,GE),e(es,XE),e(ao,YE),T(Da,ao,null),e(ao,ZE),T(Sa,ao,null),b(s,t_,g),b(s,ts,g),e(ts,Ba),e(Ba,Gu),T(rc,Gu,null),e(ts,eM),e(ts,Xu),e(Xu,tM),b(s,o_,g),b(s,dt,g),T(ic,dt,null),e(dt,oM),e(dt,os),e(os,nM),e(os,Yu),e(Yu,sM),e(os,aM),e(os,Zu),e(Zu,rM),e(os,iM),e(dt,lM),e(dt,lc),e(lc,dM),e(lc,Dp),e(Dp,cM),e(lc,pM),e(dt,hM),e(dt,dc),e(dc,mM),e(dc,cc),e(cc,uM),e(dc,fM),e(dt,gM),e(dt,ef),e(ef,_M),e(dt,bM),e(dt,vo),e(vo,tf),e(tf,pc),e(pc,kM),e(vo,yM),e(vo,of),e(of,hc),e(hc,vM),e(vo,wM),e(vo,nf),e(nf,mc),e(mc,TM),e(vo,$M),e(vo,sf),e(sf,uc),e(uc,FM),e(dt,xM),e(dt,ro),T(fc,ro,null),e(ro,RM),e(ro,ns),e(ns,EM),e(ns,af),e(af,MM),e(ns,zM),e(ns,rf),e(rf,CM),e(ns,qM),e(ro,jM),T(Wa,ro,null),e(ro,PM),T(Ua,ro,null),n_=!0},p(s,[g]){const gc={};g&2&&(gc.$$scope={dirty:g,ctx:s}),cs.$set(gc);const lf={};g&2&&(lf.$$scope={dirty:g,ctx:s}),hs.$set(lf);const df={};g&2&&(df.$$scope={dirty:g,ctx:s}),ms.$set(df);const cf={};g&2&&(cf.$$scope={dirty:g,ctx:s}),_s.$set(cf);const _c={};g&2&&(_c.$$scope={dirty:g,ctx:s}),bs.$set(_c);const pf={};g&2&&(pf.$$scope={dirty:g,ctx:s}),vs.$set(pf);const hf={};g&2&&(hf.$$scope={dirty:g,ctx:s}),ws.$set(hf);const mf={};g&2&&(mf.$$scope={dirty:g,ctx:s}),$s.$set(mf);const bc={};g&2&&(bc.$$scope={dirty:g,ctx:s}),Fs.$set(bc);const uf={};g&2&&(uf.$$scope={dirty:g,ctx:s}),Rs.$set(uf);const ff={};g&2&&(ff.$$scope={dirty:g,ctx:s}),Es.$set(ff);const gf={};g&2&&(gf.$$scope={dirty:g,ctx:s}),Ms.$set(gf);const _f={};g&2&&(_f.$$scope={dirty:g,ctx:s}),Cs.$set(_f);const bf={};g&2&&(bf.$$scope={dirty:g,ctx:s}),qs.$set(bf);const kf={};g&2&&(kf.$$scope={dirty:g,ctx:s}),js.$set(kf);const wo={};g&2&&(wo.$$scope={dirty:g,ctx:s}),Ps.$set(wo);const kc={};g&2&&(kc.$$scope={dirty:g,ctx:s}),As.$set(kc);const yf={};g&2&&(yf.$$scope={dirty:g,ctx:s}),Os.$set(yf);const vf={};g&2&&(vf.$$scope={dirty:g,ctx:s}),Ns.$set(vf);const To={};g&2&&(To.$$scope={dirty:g,ctx:s}),Ds.$set(To);const wf={};g&2&&(wf.$$scope={dirty:g,ctx:s}),Ss.$set(wf);const Tf={};g&2&&(Tf.$$scope={dirty:g,ctx:s}),Bs.$set(Tf);const $f={};g&2&&($f.$$scope={dirty:g,ctx:s}),Us.$set($f);const Sp={};g&2&&(Sp.$$scope={dirty:g,ctx:s}),Hs.$set(Sp);const Ff={};g&2&&(Ff.$$scope={dirty:g,ctx:s}),Qs.$set(Ff);const ss={};g&2&&(ss.$$scope={dirty:g,ctx:s}),Js.$set(ss);const xf={};g&2&&(xf.$$scope={dirty:g,ctx:s}),Vs.$set(xf);const Rf={};g&2&&(Rf.$$scope={dirty:g,ctx:s}),Gs.$set(Rf);const yc={};g&2&&(yc.$$scope={dirty:g,ctx:s}),Ys.$set(yc);const Ef={};g&2&&(Ef.$$scope={dirty:g,ctx:s}),Zs.$set(Ef);const Mf={};g&2&&(Mf.$$scope={dirty:g,ctx:s}),ta.$set(Mf);const zf={};g&2&&(zf.$$scope={dirty:g,ctx:s}),oa.$set(zf);const Cf={};g&2&&(Cf.$$scope={dirty:g,ctx:s}),na.$set(Cf);const Et={};g&2&&(Et.$$scope={dirty:g,ctx:s}),sa.$set(Et);const as={};g&2&&(as.$$scope={dirty:g,ctx:s}),ra.$set(as);const qf={};g&2&&(qf.$$scope={dirty:g,ctx:s}),ia.$set(qf);const jf={};g&2&&(jf.$$scope={dirty:g,ctx:s}),la.$set(jf);const vc={};g&2&&(vc.$$scope={dirty:g,ctx:s}),da.$set(vc);const Pf={};g&2&&(Pf.$$scope={dirty:g,ctx:s}),pa.$set(Pf);const wc={};g&2&&(wc.$$scope={dirty:g,ctx:s}),ha.$set(wc);const Af={};g&2&&(Af.$$scope={dirty:g,ctx:s}),ma.$set(Af);const No={};g&2&&(No.$$scope={dirty:g,ctx:s}),fa.$set(No);const Lf={};g&2&&(Lf.$$scope={dirty:g,ctx:s}),ga.$set(Lf);const Of={};g&2&&(Of.$$scope={dirty:g,ctx:s}),_a.$set(Of);const Nf={};g&2&&(Nf.$$scope={dirty:g,ctx:s}),ba.$set(Nf);const Io={};g&2&&(Io.$$scope={dirty:g,ctx:s}),ya.$set(Io);const If={};g&2&&(If.$$scope={dirty:g,ctx:s}),va.$set(If);const Df={};g&2&&(Df.$$scope={dirty:g,ctx:s}),wa.$set(Df);const Sf={};g&2&&(Sf.$$scope={dirty:g,ctx:s}),Ta.$set(Sf);const Do={};g&2&&(Do.$$scope={dirty:g,ctx:s}),Fa.$set(Do);const Bf={};g&2&&(Bf.$$scope={dirty:g,ctx:s}),xa.$set(Bf);const Wf={};g&2&&(Wf.$$scope={dirty:g,ctx:s}),Ea.$set(Wf);const Uf={};g&2&&(Uf.$$scope={dirty:g,ctx:s}),Ma.$set(Uf);const $o={};g&2&&($o.$$scope={dirty:g,ctx:s}),Ca.$set($o);const So={};g&2&&(So.$$scope={dirty:g,ctx:s}),qa.$set(So);const Hf={};g&2&&(Hf.$$scope={dirty:g,ctx:s}),Pa.$set(Hf);const Qf={};g&2&&(Qf.$$scope={dirty:g,ctx:s}),Aa.$set(Qf);const Kf={};g&2&&(Kf.$$scope={dirty:g,ctx:s}),Oa.$set(Kf);const Bo={};g&2&&(Bo.$$scope={dirty:g,ctx:s}),Na.$set(Bo);const Jf={};g&2&&(Jf.$$scope={dirty:g,ctx:s}),Da.$set(Jf);const Vf={};g&2&&(Vf.$$scope={dirty:g,ctx:s}),Sa.$set(Vf);const Gf={};g&2&&(Gf.$$scope={dirty:g,ctx:s}),Wa.$set(Gf);const Ha={};g&2&&(Ha.$$scope={dirty:g,ctx:s}),Ua.$set(Ha)},i(s){n_||($(l.$$.fragment,s),$(M.$$.fragment,s),$(We.$$.fragment,s),$(mr.$$.fragment,s),$(xr.$$.fragment,s),$(jr.$$.fragment,s),$(Wr.$$.fragment,s),$(oi.$$.fragment,s),$(ni.$$.fragment,s),$(cs.$$.fragment,s),$(ai.$$.fragment,s),$(ri.$$.fragment,s),$(hs.$$.fragment,s),$(ms.$$.fragment,s),$(di.$$.fragment,s),$(pi.$$.fragment,s),$(mi.$$.fragment,s),$(ui.$$.fragment,s),$(fi.$$.fragment,s),$(gi.$$.fragment,s),$(_s.$$.fragment,s),$(bs.$$.fragment,s),$(yi.$$.fragment,s),$(vi.$$.fragment,s),$(wi.$$.fragment,s),$(Ei.$$.fragment,s),$(vs.$$.fragment,s),$(ws.$$.fragment,s),$(Mi.$$.fragment,s),$(zi.$$.fragment,s),$(Ai.$$.fragment,s),$($s.$$.fragment,s),$(Fs.$$.fragment,s),$(Li.$$.fragment,s),$(Oi.$$.fragment,s),$(Bi.$$.fragment,s),$(Rs.$$.fragment,s),$(Es.$$.fragment,s),$(Ms.$$.fragment,s),$(Wi.$$.fragment,s),$(Ui.$$.fragment,s),$(Ji.$$.fragment,s),$(Cs.$$.fragment,s),$(qs.$$.fragment,s),$(js.$$.fragment,s),$(Ps.$$.fragment,s),$(As.$$.fragment,s),$(Vi.$$.fragment,s),$(Gi.$$.fragment,s),$(el.$$.fragment,s),$(Os.$$.fragment,s),$(Ns.$$.fragment,s),$(tl.$$.fragment,s),$(ol.$$.fragment,s),$(rl.$$.fragment,s),$(Ds.$$.fragment,s),$(Ss.$$.fragment,s),$(Bs.$$.fragment,s),$(il.$$.fragment,s),$(ll.$$.fragment,s),$(hl.$$.fragment,s),$(Us.$$.fragment,s),$(Hs.$$.fragment,s),$(Qs.$$.fragment,s),$(ml.$$.fragment,s),$(ul.$$.fragment,s),$(Js.$$.fragment,s),$(bl.$$.fragment,s),$(Vs.$$.fragment,s),$(Gs.$$.fragment,s),$(kl.$$.fragment,s),$(yl.$$.fragment,s),$(vl.$$.fragment,s),$(Ys.$$.fragment,s),$(Zs.$$.fragment,s),$(wl.$$.fragment,s),$(Tl.$$.fragment,s),$(ta.$$.fragment,s),$(El.$$.fragment,s),$(oa.$$.fragment,s),$(na.$$.fragment,s),$(sa.$$.fragment,s),$(Ml.$$.fragment,s),$(zl.$$.fragment,s),$(ra.$$.fragment,s),$(Pl.$$.fragment,s),$(ia.$$.fragment,s),$(la.$$.fragment,s),$(da.$$.fragment,s),$(Al.$$.fragment,s),$(Ll.$$.fragment,s),$(pa.$$.fragment,s),$(Dl.$$.fragment,s),$(ha.$$.fragment,s),$(ma.$$.fragment,s),$(Sl.$$.fragment,s),$(Bl.$$.fragment,s),$(fa.$$.fragment,s),$(Ql.$$.fragment,s),$(ga.$$.fragment,s),$(_a.$$.fragment,s),$(ba.$$.fragment,s),$(Kl.$$.fragment,s),$(Jl.$$.fragment,s),$(ya.$$.fragment,s),$(Yl.$$.fragment,s),$(va.$$.fragment,s),$(wa.$$.fragment,s),$(Ta.$$.fragment,s),$(Zl.$$.fragment,s),$(ed.$$.fragment,s),$(ld.$$.fragment,s),$(Fa.$$.fragment,s),$(xa.$$.fragment,s),$(dd.$$.fragment,s),$(cd.$$.fragment,s),$(bd.$$.fragment,s),$(Ea.$$.fragment,s),$(Ma.$$.fragment,s),$(kd.$$.fragment,s),$(yd.$$.fragment,s),$(Md.$$.fragment,s),$(Ca.$$.fragment,s),$(qa.$$.fragment,s),$(zd.$$.fragment,s),$(Cd.$$.fragment,s),$(Id.$$.fragment,s),$(Pa.$$.fragment,s),$(Aa.$$.fragment,s),$(Dd.$$.fragment,s),$(Sd.$$.fragment,s),$(Vd.$$.fragment,s),$(Oa.$$.fragment,s),$(Na.$$.fragment,s),$(Gd.$$.fragment,s),$(Xd.$$.fragment,s),$(ac.$$.fragment,s),$(Da.$$.fragment,s),$(Sa.$$.fragment,s),$(rc.$$.fragment,s),$(ic.$$.fragment,s),$(fc.$$.fragment,s),$(Wa.$$.fragment,s),$(Ua.$$.fragment,s),n_=!0)},o(s){F(l.$$.fragment,s),F(M.$$.fragment,s),F(We.$$.fragment,s),F(mr.$$.fragment,s),F(xr.$$.fragment,s),F(jr.$$.fragment,s),F(Wr.$$.fragment,s),F(oi.$$.fragment,s),F(ni.$$.fragment,s),F(cs.$$.fragment,s),F(ai.$$.fragment,s),F(ri.$$.fragment,s),F(hs.$$.fragment,s),F(ms.$$.fragment,s),F(di.$$.fragment,s),F(pi.$$.fragment,s),F(mi.$$.fragment,s),F(ui.$$.fragment,s),F(fi.$$.fragment,s),F(gi.$$.fragment,s),F(_s.$$.fragment,s),F(bs.$$.fragment,s),F(yi.$$.fragment,s),F(vi.$$.fragment,s),F(wi.$$.fragment,s),F(Ei.$$.fragment,s),F(vs.$$.fragment,s),F(ws.$$.fragment,s),F(Mi.$$.fragment,s),F(zi.$$.fragment,s),F(Ai.$$.fragment,s),F($s.$$.fragment,s),F(Fs.$$.fragment,s),F(Li.$$.fragment,s),F(Oi.$$.fragment,s),F(Bi.$$.fragment,s),F(Rs.$$.fragment,s),F(Es.$$.fragment,s),F(Ms.$$.fragment,s),F(Wi.$$.fragment,s),F(Ui.$$.fragment,s),F(Ji.$$.fragment,s),F(Cs.$$.fragment,s),F(qs.$$.fragment,s),F(js.$$.fragment,s),F(Ps.$$.fragment,s),F(As.$$.fragment,s),F(Vi.$$.fragment,s),F(Gi.$$.fragment,s),F(el.$$.fragment,s),F(Os.$$.fragment,s),F(Ns.$$.fragment,s),F(tl.$$.fragment,s),F(ol.$$.fragment,s),F(rl.$$.fragment,s),F(Ds.$$.fragment,s),F(Ss.$$.fragment,s),F(Bs.$$.fragment,s),F(il.$$.fragment,s),F(ll.$$.fragment,s),F(hl.$$.fragment,s),F(Us.$$.fragment,s),F(Hs.$$.fragment,s),F(Qs.$$.fragment,s),F(ml.$$.fragment,s),F(ul.$$.fragment,s),F(Js.$$.fragment,s),F(bl.$$.fragment,s),F(Vs.$$.fragment,s),F(Gs.$$.fragment,s),F(kl.$$.fragment,s),F(yl.$$.fragment,s),F(vl.$$.fragment,s),F(Ys.$$.fragment,s),F(Zs.$$.fragment,s),F(wl.$$.fragment,s),F(Tl.$$.fragment,s),F(ta.$$.fragment,s),F(El.$$.fragment,s),F(oa.$$.fragment,s),F(na.$$.fragment,s),F(sa.$$.fragment,s),F(Ml.$$.fragment,s),F(zl.$$.fragment,s),F(ra.$$.fragment,s),F(Pl.$$.fragment,s),F(ia.$$.fragment,s),F(la.$$.fragment,s),F(da.$$.fragment,s),F(Al.$$.fragment,s),F(Ll.$$.fragment,s),F(pa.$$.fragment,s),F(Dl.$$.fragment,s),F(ha.$$.fragment,s),F(ma.$$.fragment,s),F(Sl.$$.fragment,s),F(Bl.$$.fragment,s),F(fa.$$.fragment,s),F(Ql.$$.fragment,s),F(ga.$$.fragment,s),F(_a.$$.fragment,s),F(ba.$$.fragment,s),F(Kl.$$.fragment,s),F(Jl.$$.fragment,s),F(ya.$$.fragment,s),F(Yl.$$.fragment,s),F(va.$$.fragment,s),F(wa.$$.fragment,s),F(Ta.$$.fragment,s),F(Zl.$$.fragment,s),F(ed.$$.fragment,s),F(ld.$$.fragment,s),F(Fa.$$.fragment,s),F(xa.$$.fragment,s),F(dd.$$.fragment,s),F(cd.$$.fragment,s),F(bd.$$.fragment,s),F(Ea.$$.fragment,s),F(Ma.$$.fragment,s),F(kd.$$.fragment,s),F(yd.$$.fragment,s),F(Md.$$.fragment,s),F(Ca.$$.fragment,s),F(qa.$$.fragment,s),F(zd.$$.fragment,s),F(Cd.$$.fragment,s),F(Id.$$.fragment,s),F(Pa.$$.fragment,s),F(Aa.$$.fragment,s),F(Dd.$$.fragment,s),F(Sd.$$.fragment,s),F(Vd.$$.fragment,s),F(Oa.$$.fragment,s),F(Na.$$.fragment,s),F(Gd.$$.fragment,s),F(Xd.$$.fragment,s),F(ac.$$.fragment,s),F(Da.$$.fragment,s),F(Sa.$$.fragment,s),F(rc.$$.fragment,s),F(ic.$$.fragment,s),F(fc.$$.fragment,s),F(Wa.$$.fragment,s),F(Ua.$$.fragment,s),n_=!1},d(s){t(d),s&&t(_),s&&t(m),x(l),s&&t(Z),s&&t(N),x(M),s&&t(ge),s&&t(B),s&&t(_e),s&&t(U),s&&t(be),s&&t(H),s&&t(ke),s&&t(ee),s&&t(ye),s&&t(Q),s&&t(ve),s&&t(I),s&&t(Ke),s&&t(C),s&&t(Je),s&&t(Oe),x(We),s&&t(Ve),s&&t(zc),s&&t(Zf),x(mr,s),s&&t(eg),s&&t(bt),s&&t(tg),x(xr,s),s&&t(og),s&&t(Kt),s&&t(ng),x(jr,s),s&&t(sg),s&&t(Mt),s&&t(ag),x(Wr,s),s&&t(rg),s&&t(zt),s&&t(ig),s&&t(Qc),s&&t(lg),s&&t(ls),s&&t(dg),s&&t(rn),x(oi),s&&t(cg),s&&t(vt),x(ni),x(cs),s&&t(pg),s&&t(cn),x(ai),s&&t(hg),s&&t(Ie),x(ri),x(hs),x(ms),x(di),x(pi),x(mi),x(ui),s&&t(mg),s&&t(pn),x(fi),s&&t(ug),s&&t(tt),x(gi),x(_s),x(bs),x(yi),s&&t(fg),s&&t(hn),x(vi),s&&t(gg),s&&t(ot),x(wi),x(Ei),x(vs),x(ws),s&&t(_g),s&&t(un),x(Mi),s&&t(bg),s&&t(wt),x(zi),x(Ai),x($s),x(Fs),s&&t(kg),s&&t(gn),x(Li),s&&t(yg),s&&t(Tt),x(Oi),x(Bi),x(Rs),x(Es),x(Ms),s&&t(vg),s&&t(bn),x(Wi),s&&t(wg),s&&t($t),x(Ui),x(Ji),x(Cs),x(qs),x(js),x(Ps),x(As),s&&t(Tg),s&&t(yn),x(Vi),s&&t($g),s&&t(Ft),x(Gi),x(el),x(Os),x(Ns),s&&t(Fg),s&&t(wn),x(tl),s&&t(xg),s&&t(xt),x(ol),x(rl),x(Ds),x(Ss),x(Bs),s&&t(Rg),s&&t($n),x(il),s&&t(Eg),s&&t(Rt),x(ll),x(hl),x(Us),x(Hs),x(Qs),s&&t(Mg),s&&t(Rn),x(ml),s&&t(zg),s&&t(ht),x(ul),x(Js),x(bl),x(Vs),x(Gs),s&&t(Cg),s&&t(Mn),x(kl),s&&t(qg),s&&t(zn),x(yl),x(vl),x(Ys),x(Zs),s&&t(jg),s&&t(qn),x(wl),s&&t(Pg),s&&t(mt),x(Tl),x(ta),x(El),x(oa),x(na),x(sa),s&&t(Ag),s&&t(Pn),x(Ml),s&&t(Lg),s&&t(ut),x(zl),x(ra),x(Pl),x(ia),x(la),x(da),s&&t(Og),s&&t(Ln),x(Al),s&&t(Ng),s&&t(ft),x(Ll),x(pa),x(Dl),x(ha),x(ma),s&&t(Ig),s&&t(Nn),x(Sl),s&&t(Dg),s&&t(gt),x(Bl),x(fa),x(Ql),x(ga),x(_a),x(ba),s&&t(Sg),s&&t(Dn),x(Kl),s&&t(Bg),s&&t(_t),x(Jl),x(ya),x(Yl),x(va),x(wa),x(Ta),s&&t(Wg),s&&t(Wn),x(Zl),s&&t(Ug),s&&t(nt),x(ed),x(ld),x(Fa),x(xa),s&&t(Hg),s&&t(Hn),x(dd),s&&t(Qg),s&&t(st),x(cd),x(bd),x(Ea),x(Ma),s&&t(Kg),s&&t(Kn),x(kd),s&&t(Jg),s&&t(at),x(yd),x(Md),x(Ca),x(qa),s&&t(Vg),s&&t(Vn),x(zd),s&&t(Gg),s&&t(rt),x(Cd),x(Id),x(Pa),x(Aa),s&&t(Xg),s&&t(Xn),x(Dd),s&&t(Yg),s&&t(it),x(Sd),x(Vd),x(Oa),x(Na),s&&t(Zg),s&&t(Zn),x(Gd),s&&t(e_),s&&t(lt),x(Xd),x(ac),x(Da),x(Sa),s&&t(t_),s&&t(ts),x(rc),s&&t(o_),s&&t(dt),x(ic),x(fc),x(Wa),x(Ua)}}}const P5={local:"roberta",sections:[{local:"overview",title:"Overview"},{local:"resources",title:"Resources"},{local:"transformers.RobertaConfig",title:"RobertaConfig"},{local:"transformers.RobertaTokenizer",title:"RobertaTokenizer"},{local:"transformers.RobertaTokenizerFast",title:"RobertaTokenizerFast"},{local:"transformers.RobertaModel",title:"RobertaModel"},{local:"transformers.RobertaForCausalLM",title:"RobertaForCausalLM"},{local:"transformers.RobertaForMaskedLM",title:"RobertaForMaskedLM"},{local:"transformers.RobertaForSequenceClassification",title:"RobertaForSequenceClassification"},{local:"transformers.RobertaForMultipleChoice",title:"RobertaForMultipleChoice"},{local:"transformers.RobertaForTokenClassification",title:"RobertaForTokenClassification"},{local:"transformers.RobertaForQuestionAnswering",title:"RobertaForQuestionAnswering"},{local:"transformers.TFRobertaModel",title:"TFRobertaModel"},{local:"transformers.TFRobertaForCausalLM",title:"TFRobertaForCausalLM"},{local:"transformers.TFRobertaForMaskedLM",title:"TFRobertaForMaskedLM"},{local:"transformers.TFRobertaForSequenceClassification",title:"TFRobertaForSequenceClassification"},{local:"transformers.TFRobertaForMultipleChoice",title:"TFRobertaForMultipleChoice"},{local:"transformers.TFRobertaForTokenClassification",title:"TFRobertaForTokenClassification"},{local:"transformers.TFRobertaForQuestionAnswering",title:"TFRobertaForQuestionAnswering"},{local:"transformers.FlaxRobertaModel",title:"FlaxRobertaModel"},{local:"transformers.FlaxRobertaForCausalLM",title:"FlaxRobertaForCausalLM"},{local:"transformers.FlaxRobertaForMaskedLM",title:"FlaxRobertaForMaskedLM"},{local:"transformers.FlaxRobertaForSequenceClassification",title:"FlaxRobertaForSequenceClassification"},{local:"transformers.FlaxRobertaForMultipleChoice",title:"FlaxRobertaForMultipleChoice"},{local:"transformers.FlaxRobertaForTokenClassification",title:"FlaxRobertaForTokenClassification"},{local:"transformers.FlaxRobertaForQuestionAnswering",title:"FlaxRobertaForQuestionAnswering"}],title:"RoBERTa"};function A5(R){return T3(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class W5 extends k3{constructor(d){super();y3(this,d,A5,j5,v3,{})}}export{W5 as default,P5 as metadata};
