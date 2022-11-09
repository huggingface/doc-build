import{S as i3,i as l3,s as d3,e as a,k as c,w as v,t as o,M as c3,c as r,d as t,m as p,a as i,x as w,h as n,b as h,G as e,g as b,y as T,q as $,o as F,B as x,v as p3,L as re}from"../../chunks/vendor-hf-doc-builder.js";import{T as fe}from"../../chunks/Tip-hf-doc-builder.js";import{D as O}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ie}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as De}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ae}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";import{P as Eb}from"../../chunks/PipelineTag-hf-doc-builder.js";function h3(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaConfig, RobertaModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),_=o("Examples:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Examples:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function m3(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer
tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 328, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){d=a("p"),_=o("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function u3(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("When used with "),m=a("code"),f=o("is_split_into_words=True"),k=o(", this tokenizer will add a space before each word (even the first one).")},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"When used with "),m=r(u,"CODE",{});var E=i(m);f=n(E,"is_split_into_words=True"),E.forEach(t),k=n(u,", this tokenizer will add a space before each word (even the first one)."),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function f3(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizerFast
tokenizer = RobertaTokenizerFast.from_pretrained("roberta-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = RobertaTokenizerFast.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 328, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){d=a("p"),_=o("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function g3(R){let d,_,m,f,k,l,u,E;return{c(){d=a("p"),_=o("When used with "),m=a("code"),f=o("is_split_into_words=True"),k=o(", this tokenizer needs to be instantiated with "),l=a("code"),u=o("add_prefix_space=True"),E=o(".")},l(le){d=r(le,"P",{});var Z=i(d);_=n(Z,"When used with "),m=r(Z,"CODE",{});var N=i(m);f=n(N,"is_split_into_words=True"),N.forEach(t),k=n(Z,", this tokenizer needs to be instantiated with "),l=r(Z,"CODE",{});var te=i(l);u=n(te,"add_prefix_space=True"),te.forEach(t),E=n(Z,"."),Z.forEach(t)},m(le,Z){b(le,d,Z),e(d,_),e(d,m),e(m,f),e(d,k),e(d,l),e(l,u),e(d,E)},d(le){le&&t(d)}}}function _3(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function b3(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function k3(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function y3(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaForCausalLM, RobertaConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function v3(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function w3(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaForMaskedLM
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
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function T3(R){let d,_;return d=new ie({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){v(d.$$.fragment)},l(m){w(d.$$.fragment,m)},m(m,f){T(d,m,f),_=!0},p:re,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function $3(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function F3(R){let d,_,m,f,k;return f=new ie({props:{code:`import torch
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=a("p"),_=o("Example of single-label classification:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example of single-label classification:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function x3(R){let d,_;return d=new ie({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = RobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){v(d.$$.fragment)},l(m){w(d.$$.fragment,m)},m(m,f){T(d,m,f),_=!0},p:re,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function R3(R){let d,_,m,f,k;return f=new ie({props:{code:`import torch
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=a("p"),_=o("Example of multi-label classification:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example of multi-label classification:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function E3(R){let d,_;return d=new ie({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(d.$$.fragment)},l(m){w(d.$$.fragment,m)},m(m,f){T(d,m,f),_=!0},p:re,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function M3(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function z3(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function q3(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function C3(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function j3(R){let d,_;return d=new ie({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){v(d.$$.fragment)},l(m){w(d.$$.fragment,m)},m(m,f){T(d,m,f),_=!0},p:re,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function P3(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function A3(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaForQuestionAnswering
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
tokenizer.decode(predict_answer_tokens, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, RobertaForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function L3(R){let d,_;return d=new ie({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.86</span>`}}),{c(){v(d.$$.fragment)},l(m){w(d.$$.fragment,m)},m(m,f){T(d,m,f),_=!0},p:re,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function O3(R){let d,_,m,f,k,l,u,E,le,Z,N,te,oe,M,we,K,Te,ge,B,$e,pe,J,Fe,_e,U,xe,be,H,Re,ke,ee,C,P,ye,Q,Ee,ve,I,he,Me,j,ze,V,qe,me,G,Ce,ne,D,ue,X,je,se,A,Pe,L,Ae,Le;return{c(){d=a("p"),_=o("TensorFlow models and layers in "),m=a("code"),f=o("transformers"),k=o(" accept two formats as input:"),l=c(),u=a("ul"),E=a("li"),le=o("having all inputs as keyword arguments (like PyTorch models), or"),Z=c(),N=a("li"),te=o("having all inputs as a list, tuple or dict in the first positional argument."),oe=c(),M=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Te=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=o("model.fit()"),pe=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Fe=o("fit()"),_e=o(" and "),U=a("code"),xe=o("predict()"),be=o(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=o("Functional"),ke=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=c(),C=a("ul"),P=a("li"),ye=o("a single Tensor with "),Q=a("code"),Ee=o("input_ids"),ve=o(" only and nothing else: "),I=a("code"),he=o("model(input_ids)"),Me=c(),j=a("li"),ze=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),qe=o("model([input_ids, attention_mask])"),me=o(" or "),G=a("code"),Ce=o("model([input_ids, attention_mask, token_type_ids])"),ne=c(),D=a("li"),ue=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),A=a("p"),Pe=o(`Note that when creating models and layers with
`),L=a("a"),Ae=o("subclassing"),Le=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var z=i(d);_=n(z,"TensorFlow models and layers in "),m=r(z,"CODE",{});var Ue=i(m);f=n(Ue,"transformers"),Ue.forEach(t),k=n(z," accept two formats as input:"),z.forEach(t),l=p(y),u=r(y,"UL",{});var de=i(u);E=r(de,"LI",{});var Xe=i(E);le=n(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=p(de),N=r(de,"LI",{});var Ke=i(N);te=n(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),de.forEach(t),oe=p(y),M=r(y,"P",{});var q=i(M);we=n(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(q,"CODE",{});var Ye=i(K);Te=n(Ye,"model.fit()"),Ye.forEach(t),ge=n(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(q,"CODE",{});var Se=i(B);$e=n(Se,"model.fit()"),Se.forEach(t),pe=n(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(q,"CODE",{});var Ze=i(J);Fe=n(Ze,"fit()"),Ze.forEach(t),_e=n(q," and "),U=r(q,"CODE",{});var et=i(U);xe=n(et,"predict()"),et.forEach(t),be=n(q,`, such as when creating your own layers or models with
the Keras `),H=r(q,"CODE",{});var Be=i(H);Re=n(Be,"Functional"),Be.forEach(t),ke=n(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(t),ee=p(y),C=r(y,"UL",{});var S=i(C);P=r(S,"LI",{});var Y=i(P);ye=n(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Je=i(Q);Ee=n(Je,"input_ids"),Je.forEach(t),ve=n(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=n(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=p(S),j=r(S,"LI",{});var W=i(j);ze=n(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(W,"CODE",{});var He=i(V);qe=n(He,"model([input_ids, attention_mask])"),He.forEach(t),me=n(W," or "),G=r(W,"CODE",{});var We=i(G);Ce=n(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),ne=p(S),D=r(S,"LI",{});var Ne=i(D);ue=n(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Qe=i(X);je=n(Qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Qe.forEach(t),Ne.forEach(t),S.forEach(t),se=p(y),A=r(y,"P",{});var ce=i(A);Pe=n(ce,`Note that when creating models and layers with
`),L=r(ce,"A",{href:!0,rel:!0});var Ve=i(L);Ae=n(Ve,"subclassing"),Ve.forEach(t),Le=n(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){h(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(L,"rel","nofollow")},m(y,z){b(y,d,z),e(d,_),e(d,m),e(m,f),e(d,k),b(y,l,z),b(y,u,z),e(u,E),e(E,le),e(u,Z),e(u,N),e(N,te),b(y,oe,z),b(y,M,z),e(M,we),e(M,K),e(K,Te),e(M,ge),e(M,B),e(B,$e),e(M,pe),e(M,J),e(J,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),b(y,ee,z),b(y,C,z),e(C,P),e(P,ye),e(P,Q),e(Q,Ee),e(P,ve),e(P,I),e(I,he),e(C,Me),e(C,j),e(j,ze),e(j,V),e(V,qe),e(j,me),e(j,G),e(G,Ce),e(C,ne),e(C,D),e(D,ue),e(D,X),e(X,je),b(y,se,z),b(y,A,z),e(A,Pe),e(A,L),e(L,Ae),e(A,Le)},d(y){y&&t(d),y&&t(l),y&&t(u),y&&t(oe),y&&t(M),y&&t(ee),y&&t(C),y&&t(se),y&&t(A)}}}function N3(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function I3(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function D3(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function S3(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForCausalLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function B3(R){let d,_,m,f,k,l,u,E,le,Z,N,te,oe,M,we,K,Te,ge,B,$e,pe,J,Fe,_e,U,xe,be,H,Re,ke,ee,C,P,ye,Q,Ee,ve,I,he,Me,j,ze,V,qe,me,G,Ce,ne,D,ue,X,je,se,A,Pe,L,Ae,Le;return{c(){d=a("p"),_=o("TensorFlow models and layers in "),m=a("code"),f=o("transformers"),k=o(" accept two formats as input:"),l=c(),u=a("ul"),E=a("li"),le=o("having all inputs as keyword arguments (like PyTorch models), or"),Z=c(),N=a("li"),te=o("having all inputs as a list, tuple or dict in the first positional argument."),oe=c(),M=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Te=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=o("model.fit()"),pe=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Fe=o("fit()"),_e=o(" and "),U=a("code"),xe=o("predict()"),be=o(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=o("Functional"),ke=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=c(),C=a("ul"),P=a("li"),ye=o("a single Tensor with "),Q=a("code"),Ee=o("input_ids"),ve=o(" only and nothing else: "),I=a("code"),he=o("model(input_ids)"),Me=c(),j=a("li"),ze=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),qe=o("model([input_ids, attention_mask])"),me=o(" or "),G=a("code"),Ce=o("model([input_ids, attention_mask, token_type_ids])"),ne=c(),D=a("li"),ue=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),A=a("p"),Pe=o(`Note that when creating models and layers with
`),L=a("a"),Ae=o("subclassing"),Le=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var z=i(d);_=n(z,"TensorFlow models and layers in "),m=r(z,"CODE",{});var Ue=i(m);f=n(Ue,"transformers"),Ue.forEach(t),k=n(z," accept two formats as input:"),z.forEach(t),l=p(y),u=r(y,"UL",{});var de=i(u);E=r(de,"LI",{});var Xe=i(E);le=n(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=p(de),N=r(de,"LI",{});var Ke=i(N);te=n(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),de.forEach(t),oe=p(y),M=r(y,"P",{});var q=i(M);we=n(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(q,"CODE",{});var Ye=i(K);Te=n(Ye,"model.fit()"),Ye.forEach(t),ge=n(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(q,"CODE",{});var Se=i(B);$e=n(Se,"model.fit()"),Se.forEach(t),pe=n(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(q,"CODE",{});var Ze=i(J);Fe=n(Ze,"fit()"),Ze.forEach(t),_e=n(q," and "),U=r(q,"CODE",{});var et=i(U);xe=n(et,"predict()"),et.forEach(t),be=n(q,`, such as when creating your own layers or models with
the Keras `),H=r(q,"CODE",{});var Be=i(H);Re=n(Be,"Functional"),Be.forEach(t),ke=n(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(t),ee=p(y),C=r(y,"UL",{});var S=i(C);P=r(S,"LI",{});var Y=i(P);ye=n(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Je=i(Q);Ee=n(Je,"input_ids"),Je.forEach(t),ve=n(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=n(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=p(S),j=r(S,"LI",{});var W=i(j);ze=n(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(W,"CODE",{});var He=i(V);qe=n(He,"model([input_ids, attention_mask])"),He.forEach(t),me=n(W," or "),G=r(W,"CODE",{});var We=i(G);Ce=n(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),ne=p(S),D=r(S,"LI",{});var Ne=i(D);ue=n(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Qe=i(X);je=n(Qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Qe.forEach(t),Ne.forEach(t),S.forEach(t),se=p(y),A=r(y,"P",{});var ce=i(A);Pe=n(ce,`Note that when creating models and layers with
`),L=r(ce,"A",{href:!0,rel:!0});var Ve=i(L);Ae=n(Ve,"subclassing"),Ve.forEach(t),Le=n(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){h(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(L,"rel","nofollow")},m(y,z){b(y,d,z),e(d,_),e(d,m),e(m,f),e(d,k),b(y,l,z),b(y,u,z),e(u,E),e(E,le),e(u,Z),e(u,N),e(N,te),b(y,oe,z),b(y,M,z),e(M,we),e(M,K),e(K,Te),e(M,ge),e(M,B),e(B,$e),e(M,pe),e(M,J),e(J,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),b(y,ee,z),b(y,C,z),e(C,P),e(P,ye),e(P,Q),e(Q,Ee),e(P,ve),e(P,I),e(I,he),e(C,Me),e(C,j),e(j,ze),e(j,V),e(V,qe),e(j,me),e(j,G),e(G,Ce),e(C,ne),e(C,D),e(D,ue),e(D,X),e(X,je),b(y,se,z),b(y,A,z),e(A,Pe),e(A,L),e(L,Ae),e(A,Le)},d(y){y&&t(d),y&&t(l),y&&t(u),y&&t(oe),y&&t(M),y&&t(ee),y&&t(C),y&&t(se),y&&t(A)}}}function W3(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function U3(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForMaskedLM
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
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function H3(R){let d,_;return d=new ie({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-<mask> tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){v(d.$$.fragment)},l(m){w(d.$$.fragment,m)},m(m,f){T(d,m,f),_=!0},p:re,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function Q3(R){let d,_,m,f,k,l,u,E,le,Z,N,te,oe,M,we,K,Te,ge,B,$e,pe,J,Fe,_e,U,xe,be,H,Re,ke,ee,C,P,ye,Q,Ee,ve,I,he,Me,j,ze,V,qe,me,G,Ce,ne,D,ue,X,je,se,A,Pe,L,Ae,Le;return{c(){d=a("p"),_=o("TensorFlow models and layers in "),m=a("code"),f=o("transformers"),k=o(" accept two formats as input:"),l=c(),u=a("ul"),E=a("li"),le=o("having all inputs as keyword arguments (like PyTorch models), or"),Z=c(),N=a("li"),te=o("having all inputs as a list, tuple or dict in the first positional argument."),oe=c(),M=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Te=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=o("model.fit()"),pe=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Fe=o("fit()"),_e=o(" and "),U=a("code"),xe=o("predict()"),be=o(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=o("Functional"),ke=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=c(),C=a("ul"),P=a("li"),ye=o("a single Tensor with "),Q=a("code"),Ee=o("input_ids"),ve=o(" only and nothing else: "),I=a("code"),he=o("model(input_ids)"),Me=c(),j=a("li"),ze=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),qe=o("model([input_ids, attention_mask])"),me=o(" or "),G=a("code"),Ce=o("model([input_ids, attention_mask, token_type_ids])"),ne=c(),D=a("li"),ue=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),A=a("p"),Pe=o(`Note that when creating models and layers with
`),L=a("a"),Ae=o("subclassing"),Le=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var z=i(d);_=n(z,"TensorFlow models and layers in "),m=r(z,"CODE",{});var Ue=i(m);f=n(Ue,"transformers"),Ue.forEach(t),k=n(z," accept two formats as input:"),z.forEach(t),l=p(y),u=r(y,"UL",{});var de=i(u);E=r(de,"LI",{});var Xe=i(E);le=n(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=p(de),N=r(de,"LI",{});var Ke=i(N);te=n(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),de.forEach(t),oe=p(y),M=r(y,"P",{});var q=i(M);we=n(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(q,"CODE",{});var Ye=i(K);Te=n(Ye,"model.fit()"),Ye.forEach(t),ge=n(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(q,"CODE",{});var Se=i(B);$e=n(Se,"model.fit()"),Se.forEach(t),pe=n(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(q,"CODE",{});var Ze=i(J);Fe=n(Ze,"fit()"),Ze.forEach(t),_e=n(q," and "),U=r(q,"CODE",{});var et=i(U);xe=n(et,"predict()"),et.forEach(t),be=n(q,`, such as when creating your own layers or models with
the Keras `),H=r(q,"CODE",{});var Be=i(H);Re=n(Be,"Functional"),Be.forEach(t),ke=n(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(t),ee=p(y),C=r(y,"UL",{});var S=i(C);P=r(S,"LI",{});var Y=i(P);ye=n(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Je=i(Q);Ee=n(Je,"input_ids"),Je.forEach(t),ve=n(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=n(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=p(S),j=r(S,"LI",{});var W=i(j);ze=n(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(W,"CODE",{});var He=i(V);qe=n(He,"model([input_ids, attention_mask])"),He.forEach(t),me=n(W," or "),G=r(W,"CODE",{});var We=i(G);Ce=n(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),ne=p(S),D=r(S,"LI",{});var Ne=i(D);ue=n(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Qe=i(X);je=n(Qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Qe.forEach(t),Ne.forEach(t),S.forEach(t),se=p(y),A=r(y,"P",{});var ce=i(A);Pe=n(ce,`Note that when creating models and layers with
`),L=r(ce,"A",{href:!0,rel:!0});var Ve=i(L);Ae=n(Ve,"subclassing"),Ve.forEach(t),Le=n(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){h(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(L,"rel","nofollow")},m(y,z){b(y,d,z),e(d,_),e(d,m),e(m,f),e(d,k),b(y,l,z),b(y,u,z),e(u,E),e(E,le),e(u,Z),e(u,N),e(N,te),b(y,oe,z),b(y,M,z),e(M,we),e(M,K),e(K,Te),e(M,ge),e(M,B),e(B,$e),e(M,pe),e(M,J),e(J,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),b(y,ee,z),b(y,C,z),e(C,P),e(P,ye),e(P,Q),e(Q,Ee),e(P,ve),e(P,I),e(I,he),e(C,Me),e(C,j),e(j,ze),e(j,V),e(V,qe),e(j,me),e(j,G),e(G,Ce),e(C,ne),e(C,D),e(D,ue),e(D,X),e(X,je),b(y,se,z),b(y,A,z),e(A,Pe),e(A,L),e(L,Ae),e(A,Le)},d(y){y&&t(d),y&&t(l),y&&t(u),y&&t(oe),y&&t(M),y&&t(ee),y&&t(C),y&&t(se),y&&t(A)}}}function K3(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function J3(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForSequenceClassification
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function V3(R){let d,_;return d=new ie({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFRobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){v(d.$$.fragment)},l(m){w(d.$$.fragment,m)},m(m,f){T(d,m,f),_=!0},p:re,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function G3(R){let d,_,m,f,k,l,u,E,le,Z,N,te,oe,M,we,K,Te,ge,B,$e,pe,J,Fe,_e,U,xe,be,H,Re,ke,ee,C,P,ye,Q,Ee,ve,I,he,Me,j,ze,V,qe,me,G,Ce,ne,D,ue,X,je,se,A,Pe,L,Ae,Le;return{c(){d=a("p"),_=o("TensorFlow models and layers in "),m=a("code"),f=o("transformers"),k=o(" accept two formats as input:"),l=c(),u=a("ul"),E=a("li"),le=o("having all inputs as keyword arguments (like PyTorch models), or"),Z=c(),N=a("li"),te=o("having all inputs as a list, tuple or dict in the first positional argument."),oe=c(),M=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Te=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=o("model.fit()"),pe=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Fe=o("fit()"),_e=o(" and "),U=a("code"),xe=o("predict()"),be=o(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=o("Functional"),ke=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=c(),C=a("ul"),P=a("li"),ye=o("a single Tensor with "),Q=a("code"),Ee=o("input_ids"),ve=o(" only and nothing else: "),I=a("code"),he=o("model(input_ids)"),Me=c(),j=a("li"),ze=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),qe=o("model([input_ids, attention_mask])"),me=o(" or "),G=a("code"),Ce=o("model([input_ids, attention_mask, token_type_ids])"),ne=c(),D=a("li"),ue=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),A=a("p"),Pe=o(`Note that when creating models and layers with
`),L=a("a"),Ae=o("subclassing"),Le=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var z=i(d);_=n(z,"TensorFlow models and layers in "),m=r(z,"CODE",{});var Ue=i(m);f=n(Ue,"transformers"),Ue.forEach(t),k=n(z," accept two formats as input:"),z.forEach(t),l=p(y),u=r(y,"UL",{});var de=i(u);E=r(de,"LI",{});var Xe=i(E);le=n(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=p(de),N=r(de,"LI",{});var Ke=i(N);te=n(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),de.forEach(t),oe=p(y),M=r(y,"P",{});var q=i(M);we=n(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(q,"CODE",{});var Ye=i(K);Te=n(Ye,"model.fit()"),Ye.forEach(t),ge=n(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(q,"CODE",{});var Se=i(B);$e=n(Se,"model.fit()"),Se.forEach(t),pe=n(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(q,"CODE",{});var Ze=i(J);Fe=n(Ze,"fit()"),Ze.forEach(t),_e=n(q," and "),U=r(q,"CODE",{});var et=i(U);xe=n(et,"predict()"),et.forEach(t),be=n(q,`, such as when creating your own layers or models with
the Keras `),H=r(q,"CODE",{});var Be=i(H);Re=n(Be,"Functional"),Be.forEach(t),ke=n(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(t),ee=p(y),C=r(y,"UL",{});var S=i(C);P=r(S,"LI",{});var Y=i(P);ye=n(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Je=i(Q);Ee=n(Je,"input_ids"),Je.forEach(t),ve=n(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=n(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=p(S),j=r(S,"LI",{});var W=i(j);ze=n(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(W,"CODE",{});var He=i(V);qe=n(He,"model([input_ids, attention_mask])"),He.forEach(t),me=n(W," or "),G=r(W,"CODE",{});var We=i(G);Ce=n(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),ne=p(S),D=r(S,"LI",{});var Ne=i(D);ue=n(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Qe=i(X);je=n(Qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Qe.forEach(t),Ne.forEach(t),S.forEach(t),se=p(y),A=r(y,"P",{});var ce=i(A);Pe=n(ce,`Note that when creating models and layers with
`),L=r(ce,"A",{href:!0,rel:!0});var Ve=i(L);Ae=n(Ve,"subclassing"),Ve.forEach(t),Le=n(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){h(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(L,"rel","nofollow")},m(y,z){b(y,d,z),e(d,_),e(d,m),e(m,f),e(d,k),b(y,l,z),b(y,u,z),e(u,E),e(E,le),e(u,Z),e(u,N),e(N,te),b(y,oe,z),b(y,M,z),e(M,we),e(M,K),e(K,Te),e(M,ge),e(M,B),e(B,$e),e(M,pe),e(M,J),e(J,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),b(y,ee,z),b(y,C,z),e(C,P),e(P,ye),e(P,Q),e(Q,Ee),e(P,ve),e(P,I),e(I,he),e(C,Me),e(C,j),e(j,ze),e(j,V),e(V,qe),e(j,me),e(j,G),e(G,Ce),e(C,ne),e(C,D),e(D,ue),e(D,X),e(X,je),b(y,se,z),b(y,A,z),e(A,Pe),e(A,L),e(L,Ae),e(A,Le)},d(y){y&&t(d),y&&t(l),y&&t(u),y&&t(oe),y&&t(M),y&&t(ee),y&&t(C),y&&t(se),y&&t(A)}}}function X3(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function Y3(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function Z3(R){let d,_,m,f,k,l,u,E,le,Z,N,te,oe,M,we,K,Te,ge,B,$e,pe,J,Fe,_e,U,xe,be,H,Re,ke,ee,C,P,ye,Q,Ee,ve,I,he,Me,j,ze,V,qe,me,G,Ce,ne,D,ue,X,je,se,A,Pe,L,Ae,Le;return{c(){d=a("p"),_=o("TensorFlow models and layers in "),m=a("code"),f=o("transformers"),k=o(" accept two formats as input:"),l=c(),u=a("ul"),E=a("li"),le=o("having all inputs as keyword arguments (like PyTorch models), or"),Z=c(),N=a("li"),te=o("having all inputs as a list, tuple or dict in the first positional argument."),oe=c(),M=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Te=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=o("model.fit()"),pe=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Fe=o("fit()"),_e=o(" and "),U=a("code"),xe=o("predict()"),be=o(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=o("Functional"),ke=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=c(),C=a("ul"),P=a("li"),ye=o("a single Tensor with "),Q=a("code"),Ee=o("input_ids"),ve=o(" only and nothing else: "),I=a("code"),he=o("model(input_ids)"),Me=c(),j=a("li"),ze=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),qe=o("model([input_ids, attention_mask])"),me=o(" or "),G=a("code"),Ce=o("model([input_ids, attention_mask, token_type_ids])"),ne=c(),D=a("li"),ue=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),A=a("p"),Pe=o(`Note that when creating models and layers with
`),L=a("a"),Ae=o("subclassing"),Le=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var z=i(d);_=n(z,"TensorFlow models and layers in "),m=r(z,"CODE",{});var Ue=i(m);f=n(Ue,"transformers"),Ue.forEach(t),k=n(z," accept two formats as input:"),z.forEach(t),l=p(y),u=r(y,"UL",{});var de=i(u);E=r(de,"LI",{});var Xe=i(E);le=n(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=p(de),N=r(de,"LI",{});var Ke=i(N);te=n(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),de.forEach(t),oe=p(y),M=r(y,"P",{});var q=i(M);we=n(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(q,"CODE",{});var Ye=i(K);Te=n(Ye,"model.fit()"),Ye.forEach(t),ge=n(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(q,"CODE",{});var Se=i(B);$e=n(Se,"model.fit()"),Se.forEach(t),pe=n(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(q,"CODE",{});var Ze=i(J);Fe=n(Ze,"fit()"),Ze.forEach(t),_e=n(q," and "),U=r(q,"CODE",{});var et=i(U);xe=n(et,"predict()"),et.forEach(t),be=n(q,`, such as when creating your own layers or models with
the Keras `),H=r(q,"CODE",{});var Be=i(H);Re=n(Be,"Functional"),Be.forEach(t),ke=n(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(t),ee=p(y),C=r(y,"UL",{});var S=i(C);P=r(S,"LI",{});var Y=i(P);ye=n(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Je=i(Q);Ee=n(Je,"input_ids"),Je.forEach(t),ve=n(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=n(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=p(S),j=r(S,"LI",{});var W=i(j);ze=n(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(W,"CODE",{});var He=i(V);qe=n(He,"model([input_ids, attention_mask])"),He.forEach(t),me=n(W," or "),G=r(W,"CODE",{});var We=i(G);Ce=n(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),ne=p(S),D=r(S,"LI",{});var Ne=i(D);ue=n(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Qe=i(X);je=n(Qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Qe.forEach(t),Ne.forEach(t),S.forEach(t),se=p(y),A=r(y,"P",{});var ce=i(A);Pe=n(ce,`Note that when creating models and layers with
`),L=r(ce,"A",{href:!0,rel:!0});var Ve=i(L);Ae=n(Ve,"subclassing"),Ve.forEach(t),Le=n(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){h(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(L,"rel","nofollow")},m(y,z){b(y,d,z),e(d,_),e(d,m),e(m,f),e(d,k),b(y,l,z),b(y,u,z),e(u,E),e(E,le),e(u,Z),e(u,N),e(N,te),b(y,oe,z),b(y,M,z),e(M,we),e(M,K),e(K,Te),e(M,ge),e(M,B),e(B,$e),e(M,pe),e(M,J),e(J,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),b(y,ee,z),b(y,C,z),e(C,P),e(P,ye),e(P,Q),e(Q,Ee),e(P,ve),e(P,I),e(I,he),e(C,Me),e(C,j),e(j,ze),e(j,V),e(V,qe),e(j,me),e(j,G),e(G,Ce),e(C,ne),e(C,D),e(D,ue),e(D,X),e(X,je),b(y,se,z),b(y,A,z),e(A,Pe),e(A,L),e(L,Ae),e(A,Le)},d(y){y&&t(d),y&&t(l),y&&t(u),y&&t(oe),y&&t(M),y&&t(ee),y&&t(C),y&&t(se),y&&t(A)}}}function e5(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function t5(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function o5(R){let d,_;return d=new ie({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){v(d.$$.fragment)},l(m){w(d.$$.fragment,m)},m(m,f){T(d,m,f),_=!0},p:re,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function n5(R){let d,_,m,f,k,l,u,E,le,Z,N,te,oe,M,we,K,Te,ge,B,$e,pe,J,Fe,_e,U,xe,be,H,Re,ke,ee,C,P,ye,Q,Ee,ve,I,he,Me,j,ze,V,qe,me,G,Ce,ne,D,ue,X,je,se,A,Pe,L,Ae,Le;return{c(){d=a("p"),_=o("TensorFlow models and layers in "),m=a("code"),f=o("transformers"),k=o(" accept two formats as input:"),l=c(),u=a("ul"),E=a("li"),le=o("having all inputs as keyword arguments (like PyTorch models), or"),Z=c(),N=a("li"),te=o("having all inputs as a list, tuple or dict in the first positional argument."),oe=c(),M=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Te=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=o("model.fit()"),pe=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Fe=o("fit()"),_e=o(" and "),U=a("code"),xe=o("predict()"),be=o(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=o("Functional"),ke=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=c(),C=a("ul"),P=a("li"),ye=o("a single Tensor with "),Q=a("code"),Ee=o("input_ids"),ve=o(" only and nothing else: "),I=a("code"),he=o("model(input_ids)"),Me=c(),j=a("li"),ze=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),qe=o("model([input_ids, attention_mask])"),me=o(" or "),G=a("code"),Ce=o("model([input_ids, attention_mask, token_type_ids])"),ne=c(),D=a("li"),ue=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),A=a("p"),Pe=o(`Note that when creating models and layers with
`),L=a("a"),Ae=o("subclassing"),Le=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var z=i(d);_=n(z,"TensorFlow models and layers in "),m=r(z,"CODE",{});var Ue=i(m);f=n(Ue,"transformers"),Ue.forEach(t),k=n(z," accept two formats as input:"),z.forEach(t),l=p(y),u=r(y,"UL",{});var de=i(u);E=r(de,"LI",{});var Xe=i(E);le=n(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=p(de),N=r(de,"LI",{});var Ke=i(N);te=n(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),de.forEach(t),oe=p(y),M=r(y,"P",{});var q=i(M);we=n(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(q,"CODE",{});var Ye=i(K);Te=n(Ye,"model.fit()"),Ye.forEach(t),ge=n(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(q,"CODE",{});var Se=i(B);$e=n(Se,"model.fit()"),Se.forEach(t),pe=n(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(q,"CODE",{});var Ze=i(J);Fe=n(Ze,"fit()"),Ze.forEach(t),_e=n(q," and "),U=r(q,"CODE",{});var et=i(U);xe=n(et,"predict()"),et.forEach(t),be=n(q,`, such as when creating your own layers or models with
the Keras `),H=r(q,"CODE",{});var Be=i(H);Re=n(Be,"Functional"),Be.forEach(t),ke=n(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(t),ee=p(y),C=r(y,"UL",{});var S=i(C);P=r(S,"LI",{});var Y=i(P);ye=n(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Je=i(Q);Ee=n(Je,"input_ids"),Je.forEach(t),ve=n(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=n(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=p(S),j=r(S,"LI",{});var W=i(j);ze=n(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(W,"CODE",{});var He=i(V);qe=n(He,"model([input_ids, attention_mask])"),He.forEach(t),me=n(W," or "),G=r(W,"CODE",{});var We=i(G);Ce=n(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),ne=p(S),D=r(S,"LI",{});var Ne=i(D);ue=n(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Qe=i(X);je=n(Qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Qe.forEach(t),Ne.forEach(t),S.forEach(t),se=p(y),A=r(y,"P",{});var ce=i(A);Pe=n(ce,`Note that when creating models and layers with
`),L=r(ce,"A",{href:!0,rel:!0});var Ve=i(L);Ae=n(Ve,"subclassing"),Ve.forEach(t),Le=n(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){h(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(L,"rel","nofollow")},m(y,z){b(y,d,z),e(d,_),e(d,m),e(m,f),e(d,k),b(y,l,z),b(y,u,z),e(u,E),e(E,le),e(u,Z),e(u,N),e(N,te),b(y,oe,z),b(y,M,z),e(M,we),e(M,K),e(K,Te),e(M,ge),e(M,B),e(B,$e),e(M,pe),e(M,J),e(J,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),b(y,ee,z),b(y,C,z),e(C,P),e(P,ye),e(P,Q),e(Q,Ee),e(P,ve),e(P,I),e(I,he),e(C,Me),e(C,j),e(j,ze),e(j,V),e(V,qe),e(j,me),e(j,G),e(G,Ce),e(C,ne),e(C,D),e(D,ue),e(D,X),e(X,je),b(y,se,z),b(y,A,z),e(A,Pe),e(A,L),e(L,Ae),e(A,Le)},d(y){y&&t(d),y&&t(l),y&&t(u),y&&t(oe),y&&t(M),y&&t(ee),y&&t(C),y&&t(se),y&&t(A)}}}function s5(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function a5(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForQuestionAnswering
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
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function r5(R){let d,_;return d=new ie({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.86</span>`}}),{c(){v(d.$$.fragment)},l(m){w(d.$$.fragment,m)},m(m,f){T(d,m,f),_=!0},p:re,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){F(d.$$.fragment,m),_=!1},d(m){x(d,m)}}}function i5(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function l5(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaModel

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaModel.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaModel.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function d5(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function c5(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function p5(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function h5(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForMaskedLM

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForMaskedLM.from_pretrained("roberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function m5(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function u5(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForSequenceClassification

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForSequenceClassification.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function f5(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function g5(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function _5(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function b5(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForTokenClassification

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForTokenClassification.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function k5(R){let d,_,m,f,k;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var E=i(m);f=n(E,"Module"),E.forEach(t),k=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,_),e(d,m),e(m,f),e(d,k)},d(l){l&&t(d)}}}function y5(R){let d,_,m,f,k;return f=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=a("p"),_=o("Example:"),m=c(),v(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=n(u,"Example:"),u.forEach(t),m=p(l),w(f.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,m,u),T(f,l,u),k=!0},p:re,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){F(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function v5(R){let d,_,m,f,k,l,u,E,le,Z,N,te,oe,M,we,K,Te,ge,B,$e,pe,J,Fe,_e,U,xe,be,H,Re,ke,ee,C,P,ye,Q,Ee,ve,I,he,Me,j,ze,V,qe,me,G,Ce,ne,D,ue,X,je,se,A,Pe,L,Ae,Le,y,z,Ue,de,Xe,Ke,q,Ye,Se,Ze,et,Be,S,Y,Je,Oe,W,He,We,Ne,Qe,ce,Ve,Mc,Mb,Vf,hr,Gf,bt,sn,zb,mr,qb,Cb,ur,jb,Pb,Ab,fr,Lb,gr,Ob,Nb,Ib,_r,Db,br,Sb,Bb,Wb,Fo,zc,Ub,Hb,kr,Qb,Kb,yr,Jb,Vb,Gb,xo,qc,Xb,Yb,vr,Zb,ek,wr,tk,ok,nk,Ro,Cc,sk,ak,Tr,rk,ik,$r,lk,dk,Xf,Fr,Yf,Kt,Eo,jc,ck,pk,xr,hk,mk,Rr,uk,fk,gk,Mo,Pc,_k,bk,Er,kk,yk,Mr,vk,wk,Tk,ss,Ac,$k,Fk,zr,xk,Rk,Ek,Lc,qr,Mk,zk,Zf,Cr,eg,Et,jr,qk,Pr,Ck,jk,Pk,zo,Oc,Ak,Lk,Ar,Ok,Nk,Lr,Ik,Dk,Sk,qo,Nc,Bk,Wk,Or,Uk,Hk,Nr,Qk,Kk,Jk,Co,Ic,Vk,Gk,Ir,Xk,Yk,Dr,Zk,ey,ty,Dc,Sr,oy,ny,tg,Br,og,Mt,Wr,sy,Ur,ay,ry,iy,jo,Sc,ly,dy,Hr,cy,py,Qr,hy,my,uy,Po,Bc,fy,gy,Kr,_y,by,Jr,ky,yy,vy,as,Wc,wy,Ty,Vr,$y,Fy,xy,Uc,Gr,Ry,Ey,ng,Hc,ph,My,sg,rs,Ao,Qc,zy,qy,Xr,Cy,jy,Yr,Py,Ay,Ly,Lo,Kc,Oy,Ny,Zr,Iy,Dy,ei,Sy,By,ag,an,is,hh,ti,Wy,mh,Uy,rg,Qt,oi,Hy,uo,Qy,Jc,Ky,Jy,Vc,Vy,Gy,ni,Xy,Yy,Zy,rn,ev,Gc,tv,ov,Xc,nv,sv,av,ls,ig,ln,ds,uh,si,rv,fh,iv,lg,Ie,ai,lv,gh,dv,cv,_h,pv,hv,cs,mv,ri,uv,bh,fv,gv,_v,ps,bv,ii,kv,Yc,yv,vv,wv,Oo,li,Tv,kh,$v,Fv,di,Zc,xv,yh,Rv,Ev,ep,Mv,vh,zv,qv,hs,ci,Cv,pi,jv,wh,Pv,Av,Lv,ms,hi,Ov,Th,Nv,Iv,tp,mi,dg,dn,us,$h,ui,Dv,Fh,Sv,cg,tt,fi,Bv,gi,Wv,xh,Uv,Hv,Qv,Rh,Kv,Jv,fs,Vv,_i,Gv,Eh,Xv,Yv,Zv,gs,ew,bi,tw,op,ow,nw,sw,np,ki,pg,cn,_s,Mh,yi,aw,zh,rw,hg,ot,vi,iw,qh,lw,dw,wi,cw,sp,pw,hw,mw,Ti,uw,$i,fw,gw,_w,Fi,bw,Ch,kw,yw,vw,pt,ww,jh,Tw,$w,Ph,Fw,xw,Ah,Rw,Ew,Lh,Mw,zw,Oh,qw,Cw,Nh,jw,Pw,Aw,bs,Lw,Ih,Ow,Nw,xi,Iw,Dw,Jt,Ri,Sw,pn,Bw,ap,Ww,Uw,Dh,Hw,Qw,Kw,ks,Jw,ys,mg,hn,vs,Sh,Ei,Vw,Bh,Gw,ug,vt,Mi,Xw,zi,Yw,Wh,Zw,eT,tT,qi,oT,rp,nT,sT,aT,Ci,rT,ji,iT,lT,dT,Vt,Pi,cT,mn,pT,ip,hT,mT,Uh,uT,fT,gT,ws,_T,Ts,fg,un,$s,Hh,Ai,bT,Qh,kT,gg,wt,Li,yT,Oi,vT,Kh,wT,TT,$T,Ni,FT,lp,xT,RT,ET,Ii,MT,Di,zT,qT,CT,zt,Si,jT,fn,PT,dp,AT,LT,Jh,OT,NT,IT,Fs,DT,xs,ST,Rs,_g,gn,Es,Vh,Bi,BT,Gh,WT,bg,Tt,Wi,UT,Xh,HT,QT,Ui,KT,cp,JT,VT,GT,Hi,XT,Qi,YT,ZT,e$,ct,Ki,t$,_n,o$,pp,n$,s$,Yh,a$,r$,i$,Ms,l$,zs,d$,qs,c$,Cs,p$,js,kg,bn,Ps,Zh,Ji,h$,em,m$,yg,$t,Vi,u$,tm,f$,g$,Gi,_$,hp,b$,k$,y$,Xi,v$,Yi,w$,T$,$$,Gt,Zi,F$,kn,x$,mp,R$,E$,om,M$,z$,q$,As,C$,Ls,vg,yn,Os,nm,el,j$,sm,P$,wg,Ft,tl,A$,am,L$,O$,ol,N$,up,I$,D$,S$,nl,B$,sl,W$,U$,H$,qt,al,Q$,vn,K$,fp,J$,V$,rm,G$,X$,Y$,Ns,Z$,Is,e1,Ds,Tg,wn,Ss,im,rl,t1,lm,o1,$g,xt,il,n1,Tn,s1,dm,a1,r1,cm,i1,l1,d1,ll,c1,gp,p1,h1,m1,dl,u1,cl,f1,g1,_1,Ct,pl,b1,$n,k1,_p,y1,v1,pm,w1,T1,$1,Bs,F1,Ws,x1,Us,Fg,Fn,Hs,hm,hl,R1,mm,E1,xg,ht,ml,M1,um,z1,q1,ul,C1,bp,j1,P1,A1,fl,L1,gl,O1,N1,I1,Qs,D1,Xt,_l,S1,xn,B1,kp,W1,U1,fm,H1,Q1,K1,Ks,J1,Js,Rg,Rn,Vs,gm,bl,V1,_m,G1,Eg,En,kl,X1,Yt,yl,Y1,Mn,Z1,yp,e2,t2,bm,o2,n2,s2,Gs,a2,Xs,Mg,zn,Ys,km,vl,r2,ym,i2,zg,mt,wl,l2,Tl,d2,vm,c2,p2,h2,$l,m2,vp,u2,f2,g2,Fl,_2,xl,b2,k2,y2,Zs,v2,jt,Rl,w2,qn,T2,wp,$2,F2,wm,x2,R2,E2,ea,M2,ta,z2,oa,qg,Cn,na,Tm,El,q2,$m,C2,Cg,ut,Ml,j2,Fm,P2,A2,zl,L2,Tp,O2,N2,I2,ql,D2,Cl,S2,B2,W2,sa,U2,Pt,jl,H2,jn,Q2,$p,K2,J2,xm,V2,G2,X2,aa,Y2,ra,Z2,ia,jg,Pn,la,Rm,Pl,eF,Em,tF,Pg,ft,Al,oF,Mm,nF,sF,Ll,aF,Fp,rF,iF,lF,Ol,dF,Nl,cF,pF,hF,da,mF,Zt,Il,uF,An,fF,xp,gF,_F,zm,bF,kF,yF,ca,vF,pa,Ag,Ln,ha,qm,Dl,wF,Cm,TF,Lg,gt,Sl,$F,jm,FF,xF,Bl,RF,Rp,EF,MF,zF,Wl,qF,Ul,CF,jF,PF,ma,AF,At,Hl,LF,On,OF,Ep,NF,IF,Pm,DF,SF,BF,ua,WF,fa,UF,ga,Og,Nn,_a,Am,Ql,HF,Lm,QF,Ng,_t,Kl,KF,In,JF,Om,VF,GF,Nm,XF,YF,ZF,Jl,e0,Mp,t0,o0,n0,Vl,s0,Gl,a0,r0,i0,ba,l0,Lt,Xl,d0,Dn,c0,zp,p0,h0,Im,m0,u0,f0,ka,g0,ya,_0,va,Ig,Sn,wa,Dm,Yl,b0,Sm,k0,Dg,nt,Zl,y0,Bm,v0,w0,ed,T0,qp,$0,F0,x0,td,R0,od,E0,M0,z0,Wm,q0,C0,fo,Um,nd,j0,P0,Hm,sd,A0,L0,Qm,ad,O0,N0,Km,rd,I0,D0,eo,id,S0,Bn,B0,Jm,W0,U0,Vm,H0,Q0,K0,Ta,J0,$a,Sg,Wn,Fa,Gm,ld,V0,Xm,G0,Bg,st,dd,X0,Ym,Y0,Z0,cd,ex,Cp,tx,ox,nx,pd,sx,hd,ax,rx,ix,Zm,lx,dx,go,eu,md,cx,px,tu,ud,hx,mx,ou,fd,ux,fx,nu,gd,gx,_x,to,_d,bx,Un,kx,su,yx,vx,au,wx,Tx,$x,xa,Fx,Ra,Wg,Hn,Ea,ru,bd,xx,iu,Rx,Ug,at,kd,Ex,yd,Mx,lu,zx,qx,Cx,vd,jx,jp,Px,Ax,Lx,wd,Ox,Td,Nx,Ix,Dx,du,Sx,Bx,_o,cu,$d,Wx,Ux,pu,Fd,Hx,Qx,hu,xd,Kx,Jx,mu,Rd,Vx,Gx,oo,Ed,Xx,Qn,Yx,uu,Zx,eR,fu,tR,oR,nR,Ma,sR,za,Hg,Kn,qa,gu,Md,aR,_u,rR,Qg,rt,zd,iR,bu,lR,dR,qd,cR,Pp,pR,hR,mR,Cd,uR,jd,fR,gR,_R,ku,bR,kR,bo,yu,Pd,yR,vR,vu,Ad,wR,TR,wu,Ld,$R,FR,Tu,Od,xR,RR,no,Nd,ER,Jn,MR,$u,zR,qR,Fu,CR,jR,PR,Ca,AR,ja,Kg,Vn,Pa,xu,Id,LR,Ru,OR,Jg,it,Dd,NR,Eu,IR,DR,Sd,SR,Ap,BR,WR,UR,Bd,HR,Wd,QR,KR,JR,Mu,VR,GR,ko,zu,Ud,XR,YR,qu,Hd,ZR,eE,Cu,Qd,tE,oE,ju,Kd,nE,sE,so,Jd,aE,Gn,rE,Pu,iE,lE,Au,dE,cE,pE,Aa,hE,La,Vg,Xn,Oa,Lu,Vd,mE,Ou,uE,Gg,lt,Gd,fE,Nu,gE,_E,Xd,bE,Lp,kE,yE,vE,Yd,wE,Zd,TE,$E,FE,Iu,xE,RE,yo,Du,ec,EE,ME,Su,tc,zE,qE,Bu,oc,CE,jE,Wu,nc,PE,AE,ao,sc,LE,Yn,OE,Uu,NE,IE,Hu,DE,SE,BE,Na,WE,Ia,Xg,Zn,Da,Qu,ac,UE,Ku,HE,Yg,dt,rc,QE,es,KE,Ju,JE,VE,Vu,GE,XE,YE,ic,ZE,Op,eM,tM,oM,lc,nM,dc,sM,aM,rM,Gu,iM,lM,vo,Xu,cc,dM,cM,Yu,pc,pM,hM,Zu,hc,mM,uM,ef,mc,fM,gM,ro,uc,_M,ts,bM,tf,kM,yM,of,vM,wM,TM,Sa,$M,Ba,Zg;return l=new De({}),M=new De({}),We=new De({}),hr=new Eb({props:{pipeline:"text-classification"}}),Fr=new Eb({props:{pipeline:"token-classification"}}),Cr=new Eb({props:{pipeline:"fill-mask"}}),Br=new Eb({props:{pipeline:"question-answering"}}),ti=new De({}),oi=new O({props:{name:"class transformers.RobertaConfig",anchor:"transformers.RobertaConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RobertaConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the RoBERTa model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaModel">RobertaModel</a> or <a href="/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaModel">TFRobertaModel</a>.`,name:"vocab_size"},{anchor:"transformers.RobertaConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.RobertaConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.RobertaConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.RobertaConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.RobertaConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.RobertaConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.RobertaConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.RobertaConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.RobertaConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaModel">RobertaModel</a> or <a href="/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaModel">TFRobertaModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.RobertaConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.RobertaConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.RobertaConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.RobertaConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.RobertaConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/configuration_roberta.py#L37"}}),ls=new ae({props:{anchor:"transformers.RobertaConfig.example",$$slots:{default:[h3]},$$scope:{ctx:R}}}),si=new De({}),ai=new O({props:{name:"class transformers.RobertaTokenizer",anchor:"transformers.RobertaTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
other word. (RoBERTa tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/tokenization_roberta.py#L107"}}),cs=new ae({props:{anchor:"transformers.RobertaTokenizer.example",$$slots:{default:[m3]},$$scope:{ctx:R}}}),ps=new fe({props:{$$slots:{default:[u3]},$$scope:{ctx:R}}}),li=new O({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/tokenization_roberta.py#L344",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ci=new O({props:{name:"get_special_tokens_mask",anchor:"transformers.RobertaTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/tokenization_roberta.py#L369",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),hi=new O({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/tokenization_roberta.py#L396",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),mi=new O({props:{name:"save_vocabulary",anchor:"transformers.RobertaTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/tokenization_roberta.py#L315"}}),ui=new De({}),fi=new O({props:{name:"class transformers.RobertaTokenizerFast",anchor:"transformers.RobertaTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RobertaTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether the post processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/tokenization_roberta_fast.py#L76"}}),fs=new ae({props:{anchor:"transformers.RobertaTokenizerFast.example",$$slots:{default:[f3]},$$scope:{ctx:R}}}),gs=new fe({props:{$$slots:{default:[g3]},$$scope:{ctx:R}}}),ki=new O({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RobertaTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/tokenization_roberta_fast.py#L279"}}),yi=new De({}),vi=new O({props:{name:"class transformers.RobertaModel",anchor:"transformers.RobertaModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.RobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L691"}}),Ri=new O({props:{name:"forward",anchor:"transformers.RobertaModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ks=new fe({props:{$$slots:{default:[_3]},$$scope:{ctx:R}}}),ys=new ae({props:{anchor:"transformers.RobertaModel.forward.example",$$slots:{default:[b3]},$$scope:{ctx:R}}}),Ei=new De({}),Mi=new O({props:{name:"class transformers.RobertaForCausalLM",anchor:"transformers.RobertaForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L877"}}),Pi=new O({props:{name:"forward",anchor:"transformers.RobertaForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Tuple[typing.Tuple[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ws=new fe({props:{$$slots:{default:[k3]},$$scope:{ctx:R}}}),Ts=new ae({props:{anchor:"transformers.RobertaForCausalLM.forward.example",$$slots:{default:[y3]},$$scope:{ctx:R}}}),Ai=new De({}),Li=new O({props:{name:"class transformers.RobertaForMaskedLM",anchor:"transformers.RobertaForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L1029"}}),Si=new O({props:{name:"forward",anchor:"transformers.RobertaForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Fs=new fe({props:{$$slots:{default:[v3]},$$scope:{ctx:R}}}),xs=new ae({props:{anchor:"transformers.RobertaForMaskedLM.forward.example",$$slots:{default:[w3]},$$scope:{ctx:R}}}),Rs=new ae({props:{anchor:"transformers.RobertaForMaskedLM.forward.example-2",$$slots:{default:[T3]},$$scope:{ctx:R}}}),Bi=new De({}),Wi=new O({props:{name:"class transformers.RobertaForSequenceClassification",anchor:"transformers.RobertaForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L1164"}}),Ki=new O({props:{name:"forward",anchor:"transformers.RobertaForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Ms=new fe({props:{$$slots:{default:[$3]},$$scope:{ctx:R}}}),zs=new ae({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example",$$slots:{default:[F3]},$$scope:{ctx:R}}}),qs=new ae({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example-2",$$slots:{default:[x3]},$$scope:{ctx:R}}}),Cs=new ae({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example-3",$$slots:{default:[R3]},$$scope:{ctx:R}}}),js=new ae({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example-4",$$slots:{default:[E3]},$$scope:{ctx:R}}}),Ji=new De({}),Vi=new O({props:{name:"class transformers.RobertaForMultipleChoice",anchor:"transformers.RobertaForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L1264"}}),Zi=new O({props:{name:"forward",anchor:"transformers.RobertaForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
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
`}}),As=new fe({props:{$$slots:{default:[M3]},$$scope:{ctx:R}}}),Ls=new ae({props:{anchor:"transformers.RobertaForMultipleChoice.forward.example",$$slots:{default:[z3]},$$scope:{ctx:R}}}),el=new De({}),tl=new O({props:{name:"class transformers.RobertaForTokenClassification",anchor:"transformers.RobertaForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L1357"}}),al=new O({props:{name:"forward",anchor:"transformers.RobertaForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Ns=new fe({props:{$$slots:{default:[q3]},$$scope:{ctx:R}}}),Is=new ae({props:{anchor:"transformers.RobertaForTokenClassification.forward.example",$$slots:{default:[C3]},$$scope:{ctx:R}}}),Ds=new ae({props:{anchor:"transformers.RobertaForTokenClassification.forward.example-2",$$slots:{default:[j3]},$$scope:{ctx:R}}}),rl=new De({}),il=new O({props:{name:"class transformers.RobertaForQuestionAnswering",anchor:"transformers.RobertaForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L1466"}}),pl=new O({props:{name:"forward",anchor:"transformers.RobertaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Bs=new fe({props:{$$slots:{default:[P3]},$$scope:{ctx:R}}}),Ws=new ae({props:{anchor:"transformers.RobertaForQuestionAnswering.forward.example",$$slots:{default:[A3]},$$scope:{ctx:R}}}),Us=new ae({props:{anchor:"transformers.RobertaForQuestionAnswering.forward.example-2",$$slots:{default:[L3]},$$scope:{ctx:R}}}),hl=new De({}),ml=new O({props:{name:"class transformers.TFRobertaModel",anchor:"transformers.TFRobertaModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L924"}}),Qs=new fe({props:{$$slots:{default:[O3]},$$scope:{ctx:R}}}),_l=new O({props:{name:"call",anchor:"transformers.TFRobertaModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Ks=new fe({props:{$$slots:{default:[N3]},$$scope:{ctx:R}}}),Js=new ae({props:{anchor:"transformers.TFRobertaModel.call.example",$$slots:{default:[I3]},$$scope:{ctx:R}}}),bl=new De({}),kl=new O({props:{name:"class transformers.TFRobertaForCausalLM",anchor:"transformers.TFRobertaForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1153"}}),yl=new O({props:{name:"call",anchor:"transformers.TFRobertaForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForCausalLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Gs=new fe({props:{$$slots:{default:[D3]},$$scope:{ctx:R}}}),Xs=new ae({props:{anchor:"transformers.TFRobertaForCausalLM.call.example",$$slots:{default:[S3]},$$scope:{ctx:R}}}),vl=new De({}),wl=new O({props:{name:"class transformers.TFRobertaForMaskedLM",anchor:"transformers.TFRobertaForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1068"}}),Zs=new fe({props:{$$slots:{default:[B3]},$$scope:{ctx:R}}}),Rl=new O({props:{name:"call",anchor:"transformers.TFRobertaForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ea=new fe({props:{$$slots:{default:[W3]},$$scope:{ctx:R}}}),ta=new ae({props:{anchor:"transformers.TFRobertaForMaskedLM.call.example",$$slots:{default:[U3]},$$scope:{ctx:R}}}),oa=new ae({props:{anchor:"transformers.TFRobertaForMaskedLM.call.example-2",$$slots:{default:[H3]},$$scope:{ctx:R}}}),El=new De({}),Ml=new O({props:{name:"class transformers.TFRobertaForSequenceClassification",anchor:"transformers.TFRobertaForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1333"}}),sa=new fe({props:{$$slots:{default:[Q3]},$$scope:{ctx:R}}}),jl=new O({props:{name:"call",anchor:"transformers.TFRobertaForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),aa=new fe({props:{$$slots:{default:[K3]},$$scope:{ctx:R}}}),ra=new ae({props:{anchor:"transformers.TFRobertaForSequenceClassification.call.example",$$slots:{default:[J3]},$$scope:{ctx:R}}}),ia=new ae({props:{anchor:"transformers.TFRobertaForSequenceClassification.call.example-2",$$slots:{default:[V3]},$$scope:{ctx:R}}}),Pl=new De({}),Al=new O({props:{name:"class transformers.TFRobertaForMultipleChoice",anchor:"transformers.TFRobertaForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1417"}}),da=new fe({props:{$$slots:{default:[G3]},$$scope:{ctx:R}}}),Il=new O({props:{name:"call",anchor:"transformers.TFRobertaForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
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
`}}),ca=new fe({props:{$$slots:{default:[X3]},$$scope:{ctx:R}}}),pa=new ae({props:{anchor:"transformers.TFRobertaForMultipleChoice.call.example",$$slots:{default:[Y3]},$$scope:{ctx:R}}}),Dl=new De({}),Sl=new O({props:{name:"class transformers.TFRobertaForTokenClassification",anchor:"transformers.TFRobertaForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1538"}}),ma=new fe({props:{$$slots:{default:[Z3]},$$scope:{ctx:R}}}),Hl=new O({props:{name:"call",anchor:"transformers.TFRobertaForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ua=new fe({props:{$$slots:{default:[e5]},$$scope:{ctx:R}}}),fa=new ae({props:{anchor:"transformers.TFRobertaForTokenClassification.call.example",$$slots:{default:[t5]},$$scope:{ctx:R}}}),ga=new ae({props:{anchor:"transformers.TFRobertaForTokenClassification.call.example-2",$$slots:{default:[o5]},$$scope:{ctx:R}}}),Ql=new De({}),Kl=new O({props:{name:"class transformers.TFRobertaForQuestionAnswering",anchor:"transformers.TFRobertaForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1629"}}),ba=new fe({props:{$$slots:{default:[n5]},$$scope:{ctx:R}}}),Xl=new O({props:{name:"call",anchor:"transformers.TFRobertaForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ka=new fe({props:{$$slots:{default:[s5]},$$scope:{ctx:R}}}),ya=new ae({props:{anchor:"transformers.TFRobertaForQuestionAnswering.call.example",$$slots:{default:[a5]},$$scope:{ctx:R}}}),va=new ae({props:{anchor:"transformers.TFRobertaForQuestionAnswering.call.example-2",$$slots:{default:[r5]},$$scope:{ctx:R}}}),Yl=new De({}),Zl=new O({props:{name:"class transformers.FlaxRobertaModel",anchor:"transformers.FlaxRobertaModel",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L989"}}),id=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Ta=new fe({props:{$$slots:{default:[i5]},$$scope:{ctx:R}}}),$a=new ae({props:{anchor:"transformers.FlaxRobertaModel.__call__.example",$$slots:{default:[l5]},$$scope:{ctx:R}}}),ld=new De({}),dd=new O({props:{name:"class transformers.FlaxRobertaForCausalLM",anchor:"transformers.FlaxRobertaForCausalLM",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L1458"}}),_d=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),xa=new fe({props:{$$slots:{default:[d5]},$$scope:{ctx:R}}}),Ra=new ae({props:{anchor:"transformers.FlaxRobertaForCausalLM.__call__.example",$$slots:{default:[c5]},$$scope:{ctx:R}}}),bd=new De({}),kd=new O({props:{name:"class transformers.FlaxRobertaForMaskedLM",anchor:"transformers.FlaxRobertaForMaskedLM",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L1057"}}),Ed=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Ma=new fe({props:{$$slots:{default:[p5]},$$scope:{ctx:R}}}),za=new ae({props:{anchor:"transformers.FlaxRobertaForMaskedLM.__call__.example",$$slots:{default:[h5]},$$scope:{ctx:R}}}),Md=new De({}),zd=new O({props:{name:"class transformers.FlaxRobertaForSequenceClassification",anchor:"transformers.FlaxRobertaForSequenceClassification",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L1130"}}),Nd=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Ca=new fe({props:{$$slots:{default:[m5]},$$scope:{ctx:R}}}),ja=new ae({props:{anchor:"transformers.FlaxRobertaForSequenceClassification.__call__.example",$$slots:{default:[u5]},$$scope:{ctx:R}}}),Id=new De({}),Dd=new O({props:{name:"class transformers.FlaxRobertaForMultipleChoice",anchor:"transformers.FlaxRobertaForMultipleChoice",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L1212"}}),Jd=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
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
`}}),Aa=new fe({props:{$$slots:{default:[f5]},$$scope:{ctx:R}}}),La=new ae({props:{anchor:"transformers.FlaxRobertaForMultipleChoice.__call__.example",$$slots:{default:[g5]},$$scope:{ctx:R}}}),Vd=new De({}),Gd=new O({props:{name:"class transformers.FlaxRobertaForTokenClassification",anchor:"transformers.FlaxRobertaForTokenClassification",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L1295"}}),sc=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Na=new fe({props:{$$slots:{default:[_5]},$$scope:{ctx:R}}}),Ia=new ae({props:{anchor:"transformers.FlaxRobertaForTokenClassification.__call__.example",$$slots:{default:[b5]},$$scope:{ctx:R}}}),ac=new De({}),rc=new O({props:{name:"class transformers.FlaxRobertaForQuestionAnswering",anchor:"transformers.FlaxRobertaForQuestionAnswering",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L1373"}}),uc=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Sa=new fe({props:{$$slots:{default:[k5]},$$scope:{ctx:R}}}),Ba=new ae({props:{anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__.example",$$slots:{default:[y5]},$$scope:{ctx:R}}}),{c(){d=a("meta"),_=c(),m=a("h1"),f=a("a"),k=a("span"),v(l.$$.fragment),u=c(),E=a("span"),le=o("RoBERTa"),Z=c(),N=a("h2"),te=a("a"),oe=a("span"),v(M.$$.fragment),we=c(),K=a("span"),Te=o("Overview"),ge=c(),B=a("p"),$e=o("The RoBERTa model was proposed in "),pe=a("a"),J=o("RoBERTa: A Robustly Optimized BERT Pretraining Approach"),Fe=o(` by Yinhan Liu, Myle Ott, Naman Goyal, Jingfei Du, Mandar Joshi, Danqi Chen, Omer
Levy, Mike Lewis, Luke Zettlemoyer, Veselin Stoyanov. It is based on Google\u2019s BERT model released in 2018.`),_e=c(),U=a("p"),xe=o(`It builds on BERT and modifies key hyperparameters, removing the next-sentence pretraining objective and training with
much larger mini-batches and learning rates.`),be=c(),H=a("p"),Re=o("The abstract from the paper is the following:"),ke=c(),ee=a("p"),C=a("em"),P=o(`Language model pretraining has led to significant performance gains but careful comparison between different
approaches is challenging. Training is computationally expensive, often done on private datasets of different sizes,
and, as we will show, hyperparameter choices have significant impact on the final results. We present a replication
study of BERT pretraining (Devlin et al., 2019) that carefully measures the impact of many key hyperparameters and
training data size. We find that BERT was significantly undertrained, and can match or exceed the performance of every
model published after it. Our best model achieves state-of-the-art results on GLUE, RACE and SQuAD. These results
highlight the importance of previously overlooked design choices, and raise questions about the source of recently
reported improvements. We release our models and code.`),ye=c(),Q=a("p"),Ee=o("Tips:"),ve=c(),I=a("ul"),he=a("li"),Me=o("This implementation is the same as "),j=a("a"),ze=o("BertModel"),V=o(` with a tiny embeddings tweak as well as a setup
for Roberta pretrained models.`),qe=c(),me=a("li"),G=o(`RoBERTa has the same architecture as BERT, but uses a byte-level BPE as a tokenizer (same as GPT-2) and uses a
different pretraining scheme.`),Ce=c(),ne=a("li"),D=o("RoBERTa doesn\u2019t have "),ue=a("code"),X=o("token_type_ids"),je=o(`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),se=a("code"),A=o("tokenizer.sep_token"),Pe=o(" (or "),L=a("code"),Ae=o("</s>"),Le=o(")"),y=c(),z=a("li"),Ue=a("a"),de=o("CamemBERT"),Xe=o(" is a wrapper around RoBERTa. Refer to this page for usage examples."),Ke=c(),q=a("p"),Ye=o("This model was contributed by "),Se=a("a"),Ze=o("julien-c"),et=o(". The original code can be found "),Be=a("a"),S=o("here"),Y=o("."),Je=c(),Oe=a("h2"),W=a("a"),He=a("span"),v(We.$$.fragment),Ne=c(),Qe=a("span"),ce=o("Resources"),Ve=c(),Mc=a("p"),Mb=o("A list of official Hugging Face and community (indicated by \u{1F30E}) resources to help you get started with RoBERTa. If you\u2019re interested in submitting a resource to be included here, please feel free to open a Pull Request and we\u2019ll review it! The resource should ideally demonstrate something new instead of duplicating an existing resource."),Vf=c(),v(hr.$$.fragment),Gf=c(),bt=a("ul"),sn=a("li"),zb=o("A blog on "),mr=a("a"),qb=o("Getting Started with Sentiment Analysis on Twitter"),Cb=o(" using RoBERTa and the "),ur=a("a"),jb=o("Inference API"),Pb=o("."),Ab=c(),fr=a("li"),Lb=o("A blog on "),gr=a("a"),Ob=o("Opinion Classification with Kili and Hugging Face AutoTrain"),Nb=o(" using RoBERTa."),Ib=c(),_r=a("li"),Db=o("A notebook on how to "),br=a("a"),Sb=o("finetune RoBERTa for sentiment analysis"),Bb=o(". \u{1F30E}"),Wb=c(),Fo=a("li"),zc=a("a"),Ub=o("RobertaForSequenceClassification"),Hb=o(" is supported by this "),kr=a("a"),Qb=o("example script"),Kb=o(" and "),yr=a("a"),Jb=o("notebook"),Vb=o("."),Gb=c(),xo=a("li"),qc=a("a"),Xb=o("TFRobertaForSequenceClassification"),Yb=o(" is supported by this "),vr=a("a"),Zb=o("example script"),ek=o(" and "),wr=a("a"),tk=o("notebook"),ok=o("."),nk=c(),Ro=a("li"),Cc=a("a"),sk=o("FlaxRobertaForSequenceClassification"),ak=o(" is supported by this "),Tr=a("a"),rk=o("example script"),ik=o(" and "),$r=a("a"),lk=o("notebook"),dk=o("."),Xf=c(),v(Fr.$$.fragment),Yf=c(),Kt=a("ul"),Eo=a("li"),jc=a("a"),ck=o("RobertaForTokenClassification"),pk=o(" is supported by this "),xr=a("a"),hk=o("example script"),mk=o(" and "),Rr=a("a"),uk=o("notebook"),fk=o("."),gk=c(),Mo=a("li"),Pc=a("a"),_k=o("TFRobertaForTokenClassification"),bk=o(" is supported by this "),Er=a("a"),kk=o("example script"),yk=o(" and "),Mr=a("a"),vk=o("notebook"),wk=o("."),Tk=c(),ss=a("li"),Ac=a("a"),$k=o("FlaxRobertaForTokenClassification"),Fk=o(" is supported by this "),zr=a("a"),xk=o("example script"),Rk=o("."),Ek=c(),Lc=a("li"),qr=a("a"),Mk=o("Token classification"),zk=o(" chapter of the \u{1F917} Hugging Face Course."),Zf=c(),v(Cr.$$.fragment),eg=c(),Et=a("ul"),jr=a("li"),qk=o("A blog on "),Pr=a("a"),Ck=o("How to train a new language model from scratch using Transformers and Tokenizers"),jk=o(" with RoBERTa."),Pk=c(),zo=a("li"),Oc=a("a"),Ak=o("RobertaForMaskedLM"),Lk=o(" is supported by this "),Ar=a("a"),Ok=o("example script"),Nk=o(" and "),Lr=a("a"),Ik=o("notebook"),Dk=o("."),Sk=c(),qo=a("li"),Nc=a("a"),Bk=o("TFRobertaForMaskedLM"),Wk=o(" is supported by this "),Or=a("a"),Uk=o("example script"),Hk=o(" and "),Nr=a("a"),Qk=o("notebook"),Kk=o("."),Jk=c(),Co=a("li"),Ic=a("a"),Vk=o("FlaxRobertaForMaskedLM"),Gk=o(" is supported by this "),Ir=a("a"),Xk=o("example script"),Yk=o(" and "),Dr=a("a"),Zk=o("notebook"),ey=o("."),ty=c(),Dc=a("li"),Sr=a("a"),oy=o("Masked language modeling"),ny=o(" chapter of the \u{1F917} Hugging Face Course."),tg=c(),v(Br.$$.fragment),og=c(),Mt=a("ul"),Wr=a("li"),sy=o("A blog on "),Ur=a("a"),ay=o("Accelerated Inference with Optimum and Transformers Pipelines"),ry=o(" with RoBERTa for question answering."),iy=c(),jo=a("li"),Sc=a("a"),ly=o("RobertaForQuestionAnswering"),dy=o(" is supported by this "),Hr=a("a"),cy=o("example script"),py=o(" and "),Qr=a("a"),hy=o("notebook"),my=o("."),uy=c(),Po=a("li"),Bc=a("a"),fy=o("TFRobertaForQuestionAnswering"),gy=o(" is supported by this "),Kr=a("a"),_y=o("example script"),by=o(" and "),Jr=a("a"),ky=o("notebook"),yy=o("."),vy=c(),as=a("li"),Wc=a("a"),wy=o("FlaxRobertaForQuestionAnswering"),Ty=o(" is supported by this "),Vr=a("a"),$y=o("example script"),Fy=o("."),xy=c(),Uc=a("li"),Gr=a("a"),Ry=o("Question answering"),Ey=o(" chapter of the \u{1F917} Hugging Face Course."),ng=c(),Hc=a("p"),ph=a("strong"),My=o("Multiple choice"),sg=c(),rs=a("ul"),Ao=a("li"),Qc=a("a"),zy=o("RobertaForMultipleChoice"),qy=o(" is supported by this "),Xr=a("a"),Cy=o("example script"),jy=o(" and "),Yr=a("a"),Py=o("notebook"),Ay=o("."),Ly=c(),Lo=a("li"),Kc=a("a"),Oy=o("TFRobertaForMultipleChoice"),Ny=o(" is supported by this "),Zr=a("a"),Iy=o("example script"),Dy=o(" and "),ei=a("a"),Sy=o("notebook"),By=o("."),ag=c(),an=a("h2"),is=a("a"),hh=a("span"),v(ti.$$.fragment),Wy=c(),mh=a("span"),Uy=o("RobertaConfig"),rg=c(),Qt=a("div"),v(oi.$$.fragment),Hy=c(),uo=a("p"),Qy=o("This is the configuration class to store the configuration of a "),Jc=a("a"),Ky=o("RobertaModel"),Jy=o(" or a "),Vc=a("a"),Vy=o("TFRobertaModel"),Gy=o(`. It is
used to instantiate a RoBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the RoBERTa
`),ni=a("a"),Xy=o("roberta-base"),Yy=o(" architecture."),Zy=c(),rn=a("p"),ev=o("Configuration objects inherit from "),Gc=a("a"),tv=o("PretrainedConfig"),ov=o(` and can be used to control the model outputs. Read the
documentation from `),Xc=a("a"),nv=o("PretrainedConfig"),sv=o(" for more information."),av=c(),v(ls.$$.fragment),ig=c(),ln=a("h2"),ds=a("a"),uh=a("span"),v(si.$$.fragment),rv=c(),fh=a("span"),iv=o("RobertaTokenizer"),lg=c(),Ie=a("div"),v(ai.$$.fragment),lv=c(),gh=a("p"),dv=o("Constructs a RoBERTa tokenizer, derived from the GPT-2 tokenizer, using byte-level Byte-Pair-Encoding."),cv=c(),_h=a("p"),pv=o("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),hv=c(),v(cs.$$.fragment),mv=c(),ri=a("p"),uv=o("You can get around that behavior by passing "),bh=a("code"),fv=o("add_prefix_space=True"),gv=o(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),_v=c(),v(ps.$$.fragment),bv=c(),ii=a("p"),kv=o("This tokenizer inherits from "),Yc=a("a"),yv=o("PreTrainedTokenizer"),vv=o(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),wv=c(),Oo=a("div"),v(li.$$.fragment),Tv=c(),kh=a("p"),$v=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoBERTa sequence has the following format:`),Fv=c(),di=a("ul"),Zc=a("li"),xv=o("single sequence: "),yh=a("code"),Rv=o("<s> X </s>"),Ev=c(),ep=a("li"),Mv=o("pair of sequences: "),vh=a("code"),zv=o("<s> A </s></s> B </s>"),qv=c(),hs=a("div"),v(ci.$$.fragment),Cv=c(),pi=a("p"),jv=o(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),wh=a("code"),Pv=o("prepare_for_model"),Av=o(" method."),Lv=c(),ms=a("div"),v(hi.$$.fragment),Ov=c(),Th=a("p"),Nv=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. RoBERTa does not
make use of token type ids, therefore a list of zeros is returned.`),Iv=c(),tp=a("div"),v(mi.$$.fragment),dg=c(),dn=a("h2"),us=a("a"),$h=a("span"),v(ui.$$.fragment),Dv=c(),Fh=a("span"),Sv=o("RobertaTokenizerFast"),cg=c(),tt=a("div"),v(fi.$$.fragment),Bv=c(),gi=a("p"),Wv=o("Construct a \u201Cfast\u201D RoBERTa tokenizer (backed by HuggingFace\u2019s "),xh=a("em"),Uv=o("tokenizers"),Hv=o(` library), derived from the GPT-2
tokenizer, using byte-level Byte-Pair-Encoding.`),Qv=c(),Rh=a("p"),Kv=o("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Jv=c(),v(fs.$$.fragment),Vv=c(),_i=a("p"),Gv=o("You can get around that behavior by passing "),Eh=a("code"),Xv=o("add_prefix_space=True"),Yv=o(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Zv=c(),v(gs.$$.fragment),ew=c(),bi=a("p"),tw=o("This tokenizer inherits from "),op=a("a"),ow=o("PreTrainedTokenizerFast"),nw=o(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),sw=c(),np=a("div"),v(ki.$$.fragment),pg=c(),cn=a("h2"),_s=a("a"),Mh=a("span"),v(yi.$$.fragment),aw=c(),zh=a("span"),rw=o("RobertaModel"),hg=c(),ot=a("div"),v(vi.$$.fragment),iw=c(),qh=a("p"),lw=o("The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),dw=c(),wi=a("p"),cw=o("This model inherits from "),sp=a("a"),pw=o("PreTrainedModel"),hw=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mw=c(),Ti=a("p"),uw=o("This model is also a PyTorch "),$i=a("a"),fw=o("torch.nn.Module"),gw=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_w=c(),Fi=a("p"),bw=o(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Ch=a("em"),kw=o(`Attention is
all you need`),yw=o(`_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`),vw=c(),pt=a("p"),ww=o("To behave as an decoder the model needs to be initialized with the "),jh=a("code"),Tw=o("is_decoder"),$w=o(` argument of the configuration set
to `),Ph=a("code"),Fw=o("True"),xw=o(". To be used in a Seq2Seq model, the model needs to initialized with both "),Ah=a("code"),Rw=o("is_decoder"),Ew=o(` argument and
`),Lh=a("code"),Mw=o("add_cross_attention"),zw=o(" set to "),Oh=a("code"),qw=o("True"),Cw=o("; an "),Nh=a("code"),jw=o("encoder_hidden_states"),Pw=o(" is then expected as an input to the forward pass."),Aw=c(),bs=a("p"),Lw=o(".. _"),Ih=a("em"),Ow=o("Attention is all you need"),Nw=o(": "),xi=a("a"),Iw=o("https://arxiv.org/abs/1706.03762"),Dw=c(),Jt=a("div"),v(Ri.$$.fragment),Sw=c(),pn=a("p"),Bw=o("The "),ap=a("a"),Ww=o("RobertaModel"),Uw=o(" forward method, overrides the "),Dh=a("code"),Hw=o("__call__"),Qw=o(" special method."),Kw=c(),v(ks.$$.fragment),Jw=c(),v(ys.$$.fragment),mg=c(),hn=a("h2"),vs=a("a"),Sh=a("span"),v(Ei.$$.fragment),Vw=c(),Bh=a("span"),Gw=o("RobertaForCausalLM"),ug=c(),vt=a("div"),v(Mi.$$.fragment),Xw=c(),zi=a("p"),Yw=o("RoBERTa Model with a "),Wh=a("code"),Zw=o("language modeling"),eT=o(" head on top for CLM fine-tuning."),tT=c(),qi=a("p"),oT=o("This model inherits from "),rp=a("a"),nT=o("PreTrainedModel"),sT=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),aT=c(),Ci=a("p"),rT=o("This model is also a PyTorch "),ji=a("a"),iT=o("torch.nn.Module"),lT=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dT=c(),Vt=a("div"),v(Pi.$$.fragment),cT=c(),mn=a("p"),pT=o("The "),ip=a("a"),hT=o("RobertaForCausalLM"),mT=o(" forward method, overrides the "),Uh=a("code"),uT=o("__call__"),fT=o(" special method."),gT=c(),v(ws.$$.fragment),_T=c(),v(Ts.$$.fragment),fg=c(),un=a("h2"),$s=a("a"),Hh=a("span"),v(Ai.$$.fragment),bT=c(),Qh=a("span"),kT=o("RobertaForMaskedLM"),gg=c(),wt=a("div"),v(Li.$$.fragment),yT=c(),Oi=a("p"),vT=o("RoBERTa Model with a "),Kh=a("code"),wT=o("language modeling"),TT=o(" head on top."),$T=c(),Ni=a("p"),FT=o("This model inherits from "),lp=a("a"),xT=o("PreTrainedModel"),RT=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ET=c(),Ii=a("p"),MT=o("This model is also a PyTorch "),Di=a("a"),zT=o("torch.nn.Module"),qT=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),CT=c(),zt=a("div"),v(Si.$$.fragment),jT=c(),fn=a("p"),PT=o("The "),dp=a("a"),AT=o("RobertaForMaskedLM"),LT=o(" forward method, overrides the "),Jh=a("code"),OT=o("__call__"),NT=o(" special method."),IT=c(),v(Fs.$$.fragment),DT=c(),v(xs.$$.fragment),ST=c(),v(Rs.$$.fragment),_g=c(),gn=a("h2"),Es=a("a"),Vh=a("span"),v(Bi.$$.fragment),BT=c(),Gh=a("span"),WT=o("RobertaForSequenceClassification"),bg=c(),Tt=a("div"),v(Wi.$$.fragment),UT=c(),Xh=a("p"),HT=o(`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),QT=c(),Ui=a("p"),KT=o("This model inherits from "),cp=a("a"),JT=o("PreTrainedModel"),VT=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),GT=c(),Hi=a("p"),XT=o("This model is also a PyTorch "),Qi=a("a"),YT=o("torch.nn.Module"),ZT=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),e$=c(),ct=a("div"),v(Ki.$$.fragment),t$=c(),_n=a("p"),o$=o("The "),pp=a("a"),n$=o("RobertaForSequenceClassification"),s$=o(" forward method, overrides the "),Yh=a("code"),a$=o("__call__"),r$=o(" special method."),i$=c(),v(Ms.$$.fragment),l$=c(),v(zs.$$.fragment),d$=c(),v(qs.$$.fragment),c$=c(),v(Cs.$$.fragment),p$=c(),v(js.$$.fragment),kg=c(),bn=a("h2"),Ps=a("a"),Zh=a("span"),v(Ji.$$.fragment),h$=c(),em=a("span"),m$=o("RobertaForMultipleChoice"),yg=c(),$t=a("div"),v(Vi.$$.fragment),u$=c(),tm=a("p"),f$=o(`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),g$=c(),Gi=a("p"),_$=o("This model inherits from "),hp=a("a"),b$=o("PreTrainedModel"),k$=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),y$=c(),Xi=a("p"),v$=o("This model is also a PyTorch "),Yi=a("a"),w$=o("torch.nn.Module"),T$=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$$=c(),Gt=a("div"),v(Zi.$$.fragment),F$=c(),kn=a("p"),x$=o("The "),mp=a("a"),R$=o("RobertaForMultipleChoice"),E$=o(" forward method, overrides the "),om=a("code"),M$=o("__call__"),z$=o(" special method."),q$=c(),v(As.$$.fragment),C$=c(),v(Ls.$$.fragment),vg=c(),yn=a("h2"),Os=a("a"),nm=a("span"),v(el.$$.fragment),j$=c(),sm=a("span"),P$=o("RobertaForTokenClassification"),wg=c(),Ft=a("div"),v(tl.$$.fragment),A$=c(),am=a("p"),L$=o(`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),O$=c(),ol=a("p"),N$=o("This model inherits from "),up=a("a"),I$=o("PreTrainedModel"),D$=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),S$=c(),nl=a("p"),B$=o("This model is also a PyTorch "),sl=a("a"),W$=o("torch.nn.Module"),U$=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),H$=c(),qt=a("div"),v(al.$$.fragment),Q$=c(),vn=a("p"),K$=o("The "),fp=a("a"),J$=o("RobertaForTokenClassification"),V$=o(" forward method, overrides the "),rm=a("code"),G$=o("__call__"),X$=o(" special method."),Y$=c(),v(Ns.$$.fragment),Z$=c(),v(Is.$$.fragment),e1=c(),v(Ds.$$.fragment),Tg=c(),wn=a("h2"),Ss=a("a"),im=a("span"),v(rl.$$.fragment),t1=c(),lm=a("span"),o1=o("RobertaForQuestionAnswering"),$g=c(),xt=a("div"),v(il.$$.fragment),n1=c(),Tn=a("p"),s1=o(`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),dm=a("code"),a1=o("span start logits"),r1=o(" and "),cm=a("code"),i1=o("span end logits"),l1=o(")."),d1=c(),ll=a("p"),c1=o("This model inherits from "),gp=a("a"),p1=o("PreTrainedModel"),h1=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),m1=c(),dl=a("p"),u1=o("This model is also a PyTorch "),cl=a("a"),f1=o("torch.nn.Module"),g1=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_1=c(),Ct=a("div"),v(pl.$$.fragment),b1=c(),$n=a("p"),k1=o("The "),_p=a("a"),y1=o("RobertaForQuestionAnswering"),v1=o(" forward method, overrides the "),pm=a("code"),w1=o("__call__"),T1=o(" special method."),$1=c(),v(Bs.$$.fragment),F1=c(),v(Ws.$$.fragment),x1=c(),v(Us.$$.fragment),Fg=c(),Fn=a("h2"),Hs=a("a"),hm=a("span"),v(hl.$$.fragment),R1=c(),mm=a("span"),E1=o("TFRobertaModel"),xg=c(),ht=a("div"),v(ml.$$.fragment),M1=c(),um=a("p"),z1=o("The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),q1=c(),ul=a("p"),C1=o("This model inherits from "),bp=a("a"),j1=o("TFPreTrainedModel"),P1=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),A1=c(),fl=a("p"),L1=o("This model is also a "),gl=a("a"),O1=o("tf.keras.Model"),N1=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),I1=c(),v(Qs.$$.fragment),D1=c(),Xt=a("div"),v(_l.$$.fragment),S1=c(),xn=a("p"),B1=o("The "),kp=a("a"),W1=o("TFRobertaModel"),U1=o(" forward method, overrides the "),fm=a("code"),H1=o("__call__"),Q1=o(" special method."),K1=c(),v(Ks.$$.fragment),J1=c(),v(Js.$$.fragment),Rg=c(),Rn=a("h2"),Vs=a("a"),gm=a("span"),v(bl.$$.fragment),V1=c(),_m=a("span"),G1=o("TFRobertaForCausalLM"),Eg=c(),En=a("div"),v(kl.$$.fragment),X1=c(),Yt=a("div"),v(yl.$$.fragment),Y1=c(),Mn=a("p"),Z1=o("The "),yp=a("a"),e2=o("TFRobertaForCausalLM"),t2=o(" forward method, overrides the "),bm=a("code"),o2=o("__call__"),n2=o(" special method."),s2=c(),v(Gs.$$.fragment),a2=c(),v(Xs.$$.fragment),Mg=c(),zn=a("h2"),Ys=a("a"),km=a("span"),v(vl.$$.fragment),r2=c(),ym=a("span"),i2=o("TFRobertaForMaskedLM"),zg=c(),mt=a("div"),v(wl.$$.fragment),l2=c(),Tl=a("p"),d2=o("RoBERTa Model with a "),vm=a("code"),c2=o("language modeling"),p2=o(" head on top."),h2=c(),$l=a("p"),m2=o("This model inherits from "),vp=a("a"),u2=o("TFPreTrainedModel"),f2=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),g2=c(),Fl=a("p"),_2=o("This model is also a "),xl=a("a"),b2=o("tf.keras.Model"),k2=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),y2=c(),v(Zs.$$.fragment),v2=c(),jt=a("div"),v(Rl.$$.fragment),w2=c(),qn=a("p"),T2=o("The "),wp=a("a"),$2=o("TFRobertaForMaskedLM"),F2=o(" forward method, overrides the "),wm=a("code"),x2=o("__call__"),R2=o(" special method."),E2=c(),v(ea.$$.fragment),M2=c(),v(ta.$$.fragment),z2=c(),v(oa.$$.fragment),qg=c(),Cn=a("h2"),na=a("a"),Tm=a("span"),v(El.$$.fragment),q2=c(),$m=a("span"),C2=o("TFRobertaForSequenceClassification"),Cg=c(),ut=a("div"),v(Ml.$$.fragment),j2=c(),Fm=a("p"),P2=o(`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),A2=c(),zl=a("p"),L2=o("This model inherits from "),Tp=a("a"),O2=o("TFPreTrainedModel"),N2=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),I2=c(),ql=a("p"),D2=o("This model is also a "),Cl=a("a"),S2=o("tf.keras.Model"),B2=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),W2=c(),v(sa.$$.fragment),U2=c(),Pt=a("div"),v(jl.$$.fragment),H2=c(),jn=a("p"),Q2=o("The "),$p=a("a"),K2=o("TFRobertaForSequenceClassification"),J2=o(" forward method, overrides the "),xm=a("code"),V2=o("__call__"),G2=o(" special method."),X2=c(),v(aa.$$.fragment),Y2=c(),v(ra.$$.fragment),Z2=c(),v(ia.$$.fragment),jg=c(),Pn=a("h2"),la=a("a"),Rm=a("span"),v(Pl.$$.fragment),eF=c(),Em=a("span"),tF=o("TFRobertaForMultipleChoice"),Pg=c(),ft=a("div"),v(Al.$$.fragment),oF=c(),Mm=a("p"),nF=o(`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),sF=c(),Ll=a("p"),aF=o("This model inherits from "),Fp=a("a"),rF=o("TFPreTrainedModel"),iF=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lF=c(),Ol=a("p"),dF=o("This model is also a "),Nl=a("a"),cF=o("tf.keras.Model"),pF=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hF=c(),v(da.$$.fragment),mF=c(),Zt=a("div"),v(Il.$$.fragment),uF=c(),An=a("p"),fF=o("The "),xp=a("a"),gF=o("TFRobertaForMultipleChoice"),_F=o(" forward method, overrides the "),zm=a("code"),bF=o("__call__"),kF=o(" special method."),yF=c(),v(ca.$$.fragment),vF=c(),v(pa.$$.fragment),Ag=c(),Ln=a("h2"),ha=a("a"),qm=a("span"),v(Dl.$$.fragment),wF=c(),Cm=a("span"),TF=o("TFRobertaForTokenClassification"),Lg=c(),gt=a("div"),v(Sl.$$.fragment),$F=c(),jm=a("p"),FF=o(`RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),xF=c(),Bl=a("p"),RF=o("This model inherits from "),Rp=a("a"),EF=o("TFPreTrainedModel"),MF=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zF=c(),Wl=a("p"),qF=o("This model is also a "),Ul=a("a"),CF=o("tf.keras.Model"),jF=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),PF=c(),v(ma.$$.fragment),AF=c(),At=a("div"),v(Hl.$$.fragment),LF=c(),On=a("p"),OF=o("The "),Ep=a("a"),NF=o("TFRobertaForTokenClassification"),IF=o(" forward method, overrides the "),Pm=a("code"),DF=o("__call__"),SF=o(" special method."),BF=c(),v(ua.$$.fragment),WF=c(),v(fa.$$.fragment),UF=c(),v(ga.$$.fragment),Og=c(),Nn=a("h2"),_a=a("a"),Am=a("span"),v(Ql.$$.fragment),HF=c(),Lm=a("span"),QF=o("TFRobertaForQuestionAnswering"),Ng=c(),_t=a("div"),v(Kl.$$.fragment),KF=c(),In=a("p"),JF=o(`RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Om=a("code"),VF=o("span start logits"),GF=o(" and "),Nm=a("code"),XF=o("span end logits"),YF=o(")."),ZF=c(),Jl=a("p"),e0=o("This model inherits from "),Mp=a("a"),t0=o("TFPreTrainedModel"),o0=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),n0=c(),Vl=a("p"),s0=o("This model is also a "),Gl=a("a"),a0=o("tf.keras.Model"),r0=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),i0=c(),v(ba.$$.fragment),l0=c(),Lt=a("div"),v(Xl.$$.fragment),d0=c(),Dn=a("p"),c0=o("The "),zp=a("a"),p0=o("TFRobertaForQuestionAnswering"),h0=o(" forward method, overrides the "),Im=a("code"),m0=o("__call__"),u0=o(" special method."),f0=c(),v(ka.$$.fragment),g0=c(),v(ya.$$.fragment),_0=c(),v(va.$$.fragment),Ig=c(),Sn=a("h2"),wa=a("a"),Dm=a("span"),v(Yl.$$.fragment),b0=c(),Sm=a("span"),k0=o("FlaxRobertaModel"),Dg=c(),nt=a("div"),v(Zl.$$.fragment),y0=c(),Bm=a("p"),v0=o("The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),w0=c(),ed=a("p"),T0=o("This model inherits from "),qp=a("a"),$0=o("FlaxPreTrainedModel"),F0=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),x0=c(),td=a("p"),R0=o("This model is also a Flax Linen "),od=a("a"),E0=o("flax.linen.Module"),M0=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),z0=c(),Wm=a("p"),q0=o("Finally, this model supports inherent JAX features such as:"),C0=c(),fo=a("ul"),Um=a("li"),nd=a("a"),j0=o("Just-In-Time (JIT) compilation"),P0=c(),Hm=a("li"),sd=a("a"),A0=o("Automatic Differentiation"),L0=c(),Qm=a("li"),ad=a("a"),O0=o("Vectorization"),N0=c(),Km=a("li"),rd=a("a"),I0=o("Parallelization"),D0=c(),eo=a("div"),v(id.$$.fragment),S0=c(),Bn=a("p"),B0=o("The "),Jm=a("code"),W0=o("FlaxRobertaPreTrainedModel"),U0=o(" forward method, overrides the "),Vm=a("code"),H0=o("__call__"),Q0=o(" special method."),K0=c(),v(Ta.$$.fragment),J0=c(),v($a.$$.fragment),Sg=c(),Wn=a("h2"),Fa=a("a"),Gm=a("span"),v(ld.$$.fragment),V0=c(),Xm=a("span"),G0=o("FlaxRobertaForCausalLM"),Bg=c(),st=a("div"),v(dd.$$.fragment),X0=c(),Ym=a("p"),Y0=o(`Roberta Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),Z0=c(),cd=a("p"),ex=o("This model inherits from "),Cp=a("a"),tx=o("FlaxPreTrainedModel"),ox=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),nx=c(),pd=a("p"),sx=o("This model is also a Flax Linen "),hd=a("a"),ax=o("flax.linen.Module"),rx=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ix=c(),Zm=a("p"),lx=o("Finally, this model supports inherent JAX features such as:"),dx=c(),go=a("ul"),eu=a("li"),md=a("a"),cx=o("Just-In-Time (JIT) compilation"),px=c(),tu=a("li"),ud=a("a"),hx=o("Automatic Differentiation"),mx=c(),ou=a("li"),fd=a("a"),ux=o("Vectorization"),fx=c(),nu=a("li"),gd=a("a"),gx=o("Parallelization"),_x=c(),to=a("div"),v(_d.$$.fragment),bx=c(),Un=a("p"),kx=o("The "),su=a("code"),yx=o("FlaxRobertaPreTrainedModel"),vx=o(" forward method, overrides the "),au=a("code"),wx=o("__call__"),Tx=o(" special method."),$x=c(),v(xa.$$.fragment),Fx=c(),v(Ra.$$.fragment),Wg=c(),Hn=a("h2"),Ea=a("a"),ru=a("span"),v(bd.$$.fragment),xx=c(),iu=a("span"),Rx=o("FlaxRobertaForMaskedLM"),Ug=c(),at=a("div"),v(kd.$$.fragment),Ex=c(),yd=a("p"),Mx=o("RoBERTa Model with a "),lu=a("code"),zx=o("language modeling"),qx=o(" head on top."),Cx=c(),vd=a("p"),jx=o("This model inherits from "),jp=a("a"),Px=o("FlaxPreTrainedModel"),Ax=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Lx=c(),wd=a("p"),Ox=o("This model is also a Flax Linen "),Td=a("a"),Nx=o("flax.linen.Module"),Ix=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Dx=c(),du=a("p"),Sx=o("Finally, this model supports inherent JAX features such as:"),Bx=c(),_o=a("ul"),cu=a("li"),$d=a("a"),Wx=o("Just-In-Time (JIT) compilation"),Ux=c(),pu=a("li"),Fd=a("a"),Hx=o("Automatic Differentiation"),Qx=c(),hu=a("li"),xd=a("a"),Kx=o("Vectorization"),Jx=c(),mu=a("li"),Rd=a("a"),Vx=o("Parallelization"),Gx=c(),oo=a("div"),v(Ed.$$.fragment),Xx=c(),Qn=a("p"),Yx=o("The "),uu=a("code"),Zx=o("FlaxRobertaPreTrainedModel"),eR=o(" forward method, overrides the "),fu=a("code"),tR=o("__call__"),oR=o(" special method."),nR=c(),v(Ma.$$.fragment),sR=c(),v(za.$$.fragment),Hg=c(),Kn=a("h2"),qa=a("a"),gu=a("span"),v(Md.$$.fragment),aR=c(),_u=a("span"),rR=o("FlaxRobertaForSequenceClassification"),Qg=c(),rt=a("div"),v(zd.$$.fragment),iR=c(),bu=a("p"),lR=o(`Roberta Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),dR=c(),qd=a("p"),cR=o("This model inherits from "),Pp=a("a"),pR=o("FlaxPreTrainedModel"),hR=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),mR=c(),Cd=a("p"),uR=o("This model is also a Flax Linen "),jd=a("a"),fR=o("flax.linen.Module"),gR=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),_R=c(),ku=a("p"),bR=o("Finally, this model supports inherent JAX features such as:"),kR=c(),bo=a("ul"),yu=a("li"),Pd=a("a"),yR=o("Just-In-Time (JIT) compilation"),vR=c(),vu=a("li"),Ad=a("a"),wR=o("Automatic Differentiation"),TR=c(),wu=a("li"),Ld=a("a"),$R=o("Vectorization"),FR=c(),Tu=a("li"),Od=a("a"),xR=o("Parallelization"),RR=c(),no=a("div"),v(Nd.$$.fragment),ER=c(),Jn=a("p"),MR=o("The "),$u=a("code"),zR=o("FlaxRobertaPreTrainedModel"),qR=o(" forward method, overrides the "),Fu=a("code"),CR=o("__call__"),jR=o(" special method."),PR=c(),v(Ca.$$.fragment),AR=c(),v(ja.$$.fragment),Kg=c(),Vn=a("h2"),Pa=a("a"),xu=a("span"),v(Id.$$.fragment),LR=c(),Ru=a("span"),OR=o("FlaxRobertaForMultipleChoice"),Jg=c(),it=a("div"),v(Dd.$$.fragment),NR=c(),Eu=a("p"),IR=o(`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),DR=c(),Sd=a("p"),SR=o("This model inherits from "),Ap=a("a"),BR=o("FlaxPreTrainedModel"),WR=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),UR=c(),Bd=a("p"),HR=o("This model is also a Flax Linen "),Wd=a("a"),QR=o("flax.linen.Module"),KR=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),JR=c(),Mu=a("p"),VR=o("Finally, this model supports inherent JAX features such as:"),GR=c(),ko=a("ul"),zu=a("li"),Ud=a("a"),XR=o("Just-In-Time (JIT) compilation"),YR=c(),qu=a("li"),Hd=a("a"),ZR=o("Automatic Differentiation"),eE=c(),Cu=a("li"),Qd=a("a"),tE=o("Vectorization"),oE=c(),ju=a("li"),Kd=a("a"),nE=o("Parallelization"),sE=c(),so=a("div"),v(Jd.$$.fragment),aE=c(),Gn=a("p"),rE=o("The "),Pu=a("code"),iE=o("FlaxRobertaPreTrainedModel"),lE=o(" forward method, overrides the "),Au=a("code"),dE=o("__call__"),cE=o(" special method."),pE=c(),v(Aa.$$.fragment),hE=c(),v(La.$$.fragment),Vg=c(),Xn=a("h2"),Oa=a("a"),Lu=a("span"),v(Vd.$$.fragment),mE=c(),Ou=a("span"),uE=o("FlaxRobertaForTokenClassification"),Gg=c(),lt=a("div"),v(Gd.$$.fragment),fE=c(),Nu=a("p"),gE=o(`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),_E=c(),Xd=a("p"),bE=o("This model inherits from "),Lp=a("a"),kE=o("FlaxPreTrainedModel"),yE=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),vE=c(),Yd=a("p"),wE=o("This model is also a Flax Linen "),Zd=a("a"),TE=o("flax.linen.Module"),$E=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),FE=c(),Iu=a("p"),xE=o("Finally, this model supports inherent JAX features such as:"),RE=c(),yo=a("ul"),Du=a("li"),ec=a("a"),EE=o("Just-In-Time (JIT) compilation"),ME=c(),Su=a("li"),tc=a("a"),zE=o("Automatic Differentiation"),qE=c(),Bu=a("li"),oc=a("a"),CE=o("Vectorization"),jE=c(),Wu=a("li"),nc=a("a"),PE=o("Parallelization"),AE=c(),ao=a("div"),v(sc.$$.fragment),LE=c(),Yn=a("p"),OE=o("The "),Uu=a("code"),NE=o("FlaxRobertaPreTrainedModel"),IE=o(" forward method, overrides the "),Hu=a("code"),DE=o("__call__"),SE=o(" special method."),BE=c(),v(Na.$$.fragment),WE=c(),v(Ia.$$.fragment),Xg=c(),Zn=a("h2"),Da=a("a"),Qu=a("span"),v(ac.$$.fragment),UE=c(),Ku=a("span"),HE=o("FlaxRobertaForQuestionAnswering"),Yg=c(),dt=a("div"),v(rc.$$.fragment),QE=c(),es=a("p"),KE=o(`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ju=a("code"),JE=o("span start logits"),VE=o(" and "),Vu=a("code"),GE=o("span end logits"),XE=o(")."),YE=c(),ic=a("p"),ZE=o("This model inherits from "),Op=a("a"),eM=o("FlaxPreTrainedModel"),tM=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),oM=c(),lc=a("p"),nM=o("This model is also a Flax Linen "),dc=a("a"),sM=o("flax.linen.Module"),aM=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),rM=c(),Gu=a("p"),iM=o("Finally, this model supports inherent JAX features such as:"),lM=c(),vo=a("ul"),Xu=a("li"),cc=a("a"),dM=o("Just-In-Time (JIT) compilation"),cM=c(),Yu=a("li"),pc=a("a"),pM=o("Automatic Differentiation"),hM=c(),Zu=a("li"),hc=a("a"),mM=o("Vectorization"),uM=c(),ef=a("li"),mc=a("a"),fM=o("Parallelization"),gM=c(),ro=a("div"),v(uc.$$.fragment),_M=c(),ts=a("p"),bM=o("The "),tf=a("code"),kM=o("FlaxRobertaPreTrainedModel"),yM=o(" forward method, overrides the "),of=a("code"),vM=o("__call__"),wM=o(" special method."),TM=c(),v(Sa.$$.fragment),$M=c(),v(Ba.$$.fragment),this.h()},l(s){const g=c3('[data-svelte="svelte-1phssyn"]',document.head);d=r(g,"META",{name:!0,content:!0}),g.forEach(t),_=p(s),m=r(s,"H1",{class:!0});var fc=i(m);f=r(fc,"A",{id:!0,class:!0,href:!0});var nf=i(f);k=r(nf,"SPAN",{});var sf=i(k);w(l.$$.fragment,sf),sf.forEach(t),nf.forEach(t),u=p(fc),E=r(fc,"SPAN",{});var af=i(E);le=n(af,"RoBERTa"),af.forEach(t),fc.forEach(t),Z=p(s),N=r(s,"H2",{class:!0});var gc=i(N);te=r(gc,"A",{id:!0,class:!0,href:!0});var rf=i(te);oe=r(rf,"SPAN",{});var lf=i(oe);w(M.$$.fragment,lf),lf.forEach(t),rf.forEach(t),we=p(gc),K=r(gc,"SPAN",{});var df=i(K);Te=n(df,"Overview"),df.forEach(t),gc.forEach(t),ge=p(s),B=r(s,"P",{});var _c=i(B);$e=n(_c,"The RoBERTa model was proposed in "),pe=r(_c,"A",{href:!0,rel:!0});var cf=i(pe);J=n(cf,"RoBERTa: A Robustly Optimized BERT Pretraining Approach"),cf.forEach(t),Fe=n(_c,` by Yinhan Liu, Myle Ott, Naman Goyal, Jingfei Du, Mandar Joshi, Danqi Chen, Omer
Levy, Mike Lewis, Luke Zettlemoyer, Veselin Stoyanov. It is based on Google\u2019s BERT model released in 2018.`),_c.forEach(t),_e=p(s),U=r(s,"P",{});var pf=i(U);xe=n(pf,`It builds on BERT and modifies key hyperparameters, removing the next-sentence pretraining objective and training with
much larger mini-batches and learning rates.`),pf.forEach(t),be=p(s),H=r(s,"P",{});var hf=i(H);Re=n(hf,"The abstract from the paper is the following:"),hf.forEach(t),ke=p(s),ee=r(s,"P",{});var mf=i(ee);C=r(mf,"EM",{});var uf=i(C);P=n(uf,`Language model pretraining has led to significant performance gains but careful comparison between different
approaches is challenging. Training is computationally expensive, often done on private datasets of different sizes,
and, as we will show, hyperparameter choices have significant impact on the final results. We present a replication
study of BERT pretraining (Devlin et al., 2019) that carefully measures the impact of many key hyperparameters and
training data size. We find that BERT was significantly undertrained, and can match or exceed the performance of every
model published after it. Our best model achieves state-of-the-art results on GLUE, RACE and SQuAD. These results
highlight the importance of previously overlooked design choices, and raise questions about the source of recently
reported improvements. We release our models and code.`),uf.forEach(t),mf.forEach(t),ye=p(s),Q=r(s,"P",{});var ff=i(Q);Ee=n(ff,"Tips:"),ff.forEach(t),ve=p(s),I=r(s,"UL",{});var wo=i(I);he=r(wo,"LI",{});var bc=i(he);Me=n(bc,"This implementation is the same as "),j=r(bc,"A",{href:!0});var gf=i(j);ze=n(gf,"BertModel"),gf.forEach(t),V=n(bc,` with a tiny embeddings tweak as well as a setup
for Roberta pretrained models.`),bc.forEach(t),qe=p(wo),me=r(wo,"LI",{});var _f=i(me);G=n(_f,`RoBERTa has the same architecture as BERT, but uses a byte-level BPE as a tokenizer (same as GPT-2) and uses a
different pretraining scheme.`),_f.forEach(t),Ce=p(wo),ne=r(wo,"LI",{});var To=i(ne);D=n(To,"RoBERTa doesn\u2019t have "),ue=r(To,"CODE",{});var bf=i(ue);X=n(bf,"token_type_ids"),bf.forEach(t),je=n(To,`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),se=r(To,"CODE",{});var kf=i(se);A=n(kf,"tokenizer.sep_token"),kf.forEach(t),Pe=n(To," (or "),L=r(To,"CODE",{});var yf=i(L);Ae=n(yf,"</s>"),yf.forEach(t),Le=n(To,")"),To.forEach(t),y=p(wo),z=r(wo,"LI",{});var Np=i(z);Ue=r(Np,"A",{href:!0});var vf=i(Ue);de=n(vf,"CamemBERT"),vf.forEach(t),Xe=n(Np," is a wrapper around RoBERTa. Refer to this page for usage examples."),Np.forEach(t),wo.forEach(t),Ke=p(s),q=r(s,"P",{});var os=i(q);Ye=n(os,"This model was contributed by "),Se=r(os,"A",{href:!0,rel:!0});var wf=i(Se);Ze=n(wf,"julien-c"),wf.forEach(t),et=n(os,". The original code can be found "),Be=r(os,"A",{href:!0,rel:!0});var Tf=i(Be);S=n(Tf,"here"),Tf.forEach(t),Y=n(os,"."),os.forEach(t),Je=p(s),Oe=r(s,"H2",{class:!0});var kc=i(Oe);W=r(kc,"A",{id:!0,class:!0,href:!0});var $f=i(W);He=r($f,"SPAN",{});var Ff=i(He);w(We.$$.fragment,Ff),Ff.forEach(t),$f.forEach(t),Ne=p(kc),Qe=r(kc,"SPAN",{});var xf=i(Qe);ce=n(xf,"Resources"),xf.forEach(t),kc.forEach(t),Ve=p(s),Mc=r(s,"P",{});var Rf=i(Mc);Mb=n(Rf,"A list of official Hugging Face and community (indicated by \u{1F30E}) resources to help you get started with RoBERTa. If you\u2019re interested in submitting a resource to be included here, please feel free to open a Pull Request and we\u2019ll review it! The resource should ideally demonstrate something new instead of duplicating an existing resource."),Rf.forEach(t),Vf=p(s),w(hr.$$.fragment,s),Gf=p(s),bt=r(s,"UL",{});var Rt=i(bt);sn=r(Rt,"LI",{});var ns=i(sn);zb=n(ns,"A blog on "),mr=r(ns,"A",{href:!0,rel:!0});var Ef=i(mr);qb=n(Ef,"Getting Started with Sentiment Analysis on Twitter"),Ef.forEach(t),Cb=n(ns," using RoBERTa and the "),ur=r(ns,"A",{href:!0,rel:!0});var Mf=i(ur);jb=n(Mf,"Inference API"),Mf.forEach(t),Pb=n(ns,"."),ns.forEach(t),Ab=p(Rt),fr=r(Rt,"LI",{});var yc=i(fr);Lb=n(yc,"A blog on "),gr=r(yc,"A",{href:!0,rel:!0});var zf=i(gr);Ob=n(zf,"Opinion Classification with Kili and Hugging Face AutoTrain"),zf.forEach(t),Nb=n(yc," using RoBERTa."),yc.forEach(t),Ib=p(Rt),_r=r(Rt,"LI",{});var vc=i(_r);Db=n(vc,"A notebook on how to "),br=r(vc,"A",{href:!0,rel:!0});var qf=i(br);Sb=n(qf,"finetune RoBERTa for sentiment analysis"),qf.forEach(t),Bb=n(vc,". \u{1F30E}"),vc.forEach(t),Wb=p(Rt),Fo=r(Rt,"LI",{});var No=i(Fo);zc=r(No,"A",{href:!0});var Cf=i(zc);Ub=n(Cf,"RobertaForSequenceClassification"),Cf.forEach(t),Hb=n(No," is supported by this "),kr=r(No,"A",{href:!0,rel:!0});var jf=i(kr);Qb=n(jf,"example script"),jf.forEach(t),Kb=n(No," and "),yr=r(No,"A",{href:!0,rel:!0});var Pf=i(yr);Jb=n(Pf,"notebook"),Pf.forEach(t),Vb=n(No,"."),No.forEach(t),Gb=p(Rt),xo=r(Rt,"LI",{});var Io=i(xo);qc=r(Io,"A",{href:!0});var Af=i(qc);Xb=n(Af,"TFRobertaForSequenceClassification"),Af.forEach(t),Yb=n(Io," is supported by this "),vr=r(Io,"A",{href:!0,rel:!0});var Lf=i(vr);Zb=n(Lf,"example script"),Lf.forEach(t),ek=n(Io," and "),wr=r(Io,"A",{href:!0,rel:!0});var Of=i(wr);tk=n(Of,"notebook"),Of.forEach(t),ok=n(Io,"."),Io.forEach(t),nk=p(Rt),Ro=r(Rt,"LI",{});var Do=i(Ro);Cc=r(Do,"A",{href:!0});var Nf=i(Cc);sk=n(Nf,"FlaxRobertaForSequenceClassification"),Nf.forEach(t),ak=n(Do," is supported by this "),Tr=r(Do,"A",{href:!0,rel:!0});var If=i(Tr);rk=n(If,"example script"),If.forEach(t),ik=n(Do," and "),$r=r(Do,"A",{href:!0,rel:!0});var Df=i($r);lk=n(Df,"notebook"),Df.forEach(t),dk=n(Do,"."),Do.forEach(t),Rt.forEach(t),Xf=p(s),w(Fr.$$.fragment,s),Yf=p(s),Kt=r(s,"UL",{});var $o=i(Kt);Eo=r($o,"LI",{});var So=i(Eo);jc=r(So,"A",{href:!0});var Sf=i(jc);ck=n(Sf,"RobertaForTokenClassification"),Sf.forEach(t),pk=n(So," is supported by this "),xr=r(So,"A",{href:!0,rel:!0});var Bf=i(xr);hk=n(Bf,"example script"),Bf.forEach(t),mk=n(So," and "),Rr=r(So,"A",{href:!0,rel:!0});var Wf=i(Rr);uk=n(Wf,"notebook"),Wf.forEach(t),fk=n(So,"."),So.forEach(t),gk=p($o),Mo=r($o,"LI",{});var Bo=i(Mo);Pc=r(Bo,"A",{href:!0});var Uf=i(Pc);_k=n(Uf,"TFRobertaForTokenClassification"),Uf.forEach(t),bk=n(Bo," is supported by this "),Er=r(Bo,"A",{href:!0,rel:!0});var Hf=i(Er);kk=n(Hf,"example script"),Hf.forEach(t),yk=n(Bo," and "),Mr=r(Bo,"A",{href:!0,rel:!0});var Qf=i(Mr);vk=n(Qf,"notebook"),Qf.forEach(t),wk=n(Bo,"."),Bo.forEach(t),Tk=p($o),ss=r($o,"LI",{});var Wa=i(ss);Ac=r(Wa,"A",{href:!0});var zM=i(Ac);$k=n(zM,"FlaxRobertaForTokenClassification"),zM.forEach(t),Fk=n(Wa," is supported by this "),zr=r(Wa,"A",{href:!0,rel:!0});var qM=i(zr);xk=n(qM,"example script"),qM.forEach(t),Rk=n(Wa,"."),Wa.forEach(t),Ek=p($o),Lc=r($o,"LI",{});var FM=i(Lc);qr=r(FM,"A",{href:!0,rel:!0});var CM=i(qr);Mk=n(CM,"Token classification"),CM.forEach(t),zk=n(FM," chapter of the \u{1F917} Hugging Face Course."),FM.forEach(t),$o.forEach(t),Zf=p(s),w(Cr.$$.fragment,s),eg=p(s),Et=r(s,"UL",{});var Wo=i(Et);jr=r(Wo,"LI",{});var e_=i(jr);qk=n(e_,"A blog on "),Pr=r(e_,"A",{href:!0,rel:!0});var jM=i(Pr);Ck=n(jM,"How to train a new language model from scratch using Transformers and Tokenizers"),jM.forEach(t),jk=n(e_," with RoBERTa."),e_.forEach(t),Pk=p(Wo),zo=r(Wo,"LI",{});var wc=i(zo);Oc=r(wc,"A",{href:!0});var PM=i(Oc);Ak=n(PM,"RobertaForMaskedLM"),PM.forEach(t),Lk=n(wc," is supported by this "),Ar=r(wc,"A",{href:!0,rel:!0});var AM=i(Ar);Ok=n(AM,"example script"),AM.forEach(t),Nk=n(wc," and "),Lr=r(wc,"A",{href:!0,rel:!0});var LM=i(Lr);Ik=n(LM,"notebook"),LM.forEach(t),Dk=n(wc,"."),wc.forEach(t),Sk=p(Wo),qo=r(Wo,"LI",{});var Tc=i(qo);Nc=r(Tc,"A",{href:!0});var OM=i(Nc);Bk=n(OM,"TFRobertaForMaskedLM"),OM.forEach(t),Wk=n(Tc," is supported by this "),Or=r(Tc,"A",{href:!0,rel:!0});var NM=i(Or);Uk=n(NM,"example script"),NM.forEach(t),Hk=n(Tc," and "),Nr=r(Tc,"A",{href:!0,rel:!0});var IM=i(Nr);Qk=n(IM,"notebook"),IM.forEach(t),Kk=n(Tc,"."),Tc.forEach(t),Jk=p(Wo),Co=r(Wo,"LI",{});var $c=i(Co);Ic=r($c,"A",{href:!0});var DM=i(Ic);Vk=n(DM,"FlaxRobertaForMaskedLM"),DM.forEach(t),Gk=n($c," is supported by this "),Ir=r($c,"A",{href:!0,rel:!0});var SM=i(Ir);Xk=n(SM,"example script"),SM.forEach(t),Yk=n($c," and "),Dr=r($c,"A",{href:!0,rel:!0});var BM=i(Dr);Zk=n(BM,"notebook"),BM.forEach(t),ey=n($c,"."),$c.forEach(t),ty=p(Wo),Dc=r(Wo,"LI",{});var xM=i(Dc);Sr=r(xM,"A",{href:!0,rel:!0});var WM=i(Sr);oy=n(WM,"Masked language modeling"),WM.forEach(t),ny=n(xM," chapter of the \u{1F917} Hugging Face Course."),xM.forEach(t),Wo.forEach(t),tg=p(s),w(Br.$$.fragment,s),og=p(s),Mt=r(s,"UL",{});var Uo=i(Mt);Wr=r(Uo,"LI",{});var t_=i(Wr);sy=n(t_,"A blog on "),Ur=r(t_,"A",{href:!0,rel:!0});var UM=i(Ur);ay=n(UM,"Accelerated Inference with Optimum and Transformers Pipelines"),UM.forEach(t),ry=n(t_," with RoBERTa for question answering."),t_.forEach(t),iy=p(Uo),jo=r(Uo,"LI",{});var Fc=i(jo);Sc=r(Fc,"A",{href:!0});var HM=i(Sc);ly=n(HM,"RobertaForQuestionAnswering"),HM.forEach(t),dy=n(Fc," is supported by this "),Hr=r(Fc,"A",{href:!0,rel:!0});var QM=i(Hr);cy=n(QM,"example script"),QM.forEach(t),py=n(Fc," and "),Qr=r(Fc,"A",{href:!0,rel:!0});var KM=i(Qr);hy=n(KM,"notebook"),KM.forEach(t),my=n(Fc,"."),Fc.forEach(t),uy=p(Uo),Po=r(Uo,"LI",{});var xc=i(Po);Bc=r(xc,"A",{href:!0});var JM=i(Bc);fy=n(JM,"TFRobertaForQuestionAnswering"),JM.forEach(t),gy=n(xc," is supported by this "),Kr=r(xc,"A",{href:!0,rel:!0});var VM=i(Kr);_y=n(VM,"example script"),VM.forEach(t),by=n(xc," and "),Jr=r(xc,"A",{href:!0,rel:!0});var GM=i(Jr);ky=n(GM,"notebook"),GM.forEach(t),yy=n(xc,"."),xc.forEach(t),vy=p(Uo),as=r(Uo,"LI",{});var Kf=i(as);Wc=r(Kf,"A",{href:!0});var XM=i(Wc);wy=n(XM,"FlaxRobertaForQuestionAnswering"),XM.forEach(t),Ty=n(Kf," is supported by this "),Vr=r(Kf,"A",{href:!0,rel:!0});var YM=i(Vr);$y=n(YM,"example script"),YM.forEach(t),Fy=n(Kf,"."),Kf.forEach(t),xy=p(Uo),Uc=r(Uo,"LI",{});var RM=i(Uc);Gr=r(RM,"A",{href:!0,rel:!0});var ZM=i(Gr);Ry=n(ZM,"Question answering"),ZM.forEach(t),Ey=n(RM," chapter of the \u{1F917} Hugging Face Course."),RM.forEach(t),Uo.forEach(t),ng=p(s),Hc=r(s,"P",{});var e4=i(Hc);ph=r(e4,"STRONG",{});var t4=i(ph);My=n(t4,"Multiple choice"),t4.forEach(t),e4.forEach(t),sg=p(s),rs=r(s,"UL",{});var o_=i(rs);Ao=r(o_,"LI",{});var Rc=i(Ao);Qc=r(Rc,"A",{href:!0});var o4=i(Qc);zy=n(o4,"RobertaForMultipleChoice"),o4.forEach(t),qy=n(Rc," is supported by this "),Xr=r(Rc,"A",{href:!0,rel:!0});var n4=i(Xr);Cy=n(n4,"example script"),n4.forEach(t),jy=n(Rc," and "),Yr=r(Rc,"A",{href:!0,rel:!0});var s4=i(Yr);Py=n(s4,"notebook"),s4.forEach(t),Ay=n(Rc,"."),Rc.forEach(t),Ly=p(o_),Lo=r(o_,"LI",{});var Ec=i(Lo);Kc=r(Ec,"A",{href:!0});var a4=i(Kc);Oy=n(a4,"TFRobertaForMultipleChoice"),a4.forEach(t),Ny=n(Ec," is supported by this "),Zr=r(Ec,"A",{href:!0,rel:!0});var r4=i(Zr);Iy=n(r4,"example script"),r4.forEach(t),Dy=n(Ec," and "),ei=r(Ec,"A",{href:!0,rel:!0});var i4=i(ei);Sy=n(i4,"notebook"),i4.forEach(t),By=n(Ec,"."),Ec.forEach(t),o_.forEach(t),ag=p(s),an=r(s,"H2",{class:!0});var n_=i(an);is=r(n_,"A",{id:!0,class:!0,href:!0});var l4=i(is);hh=r(l4,"SPAN",{});var d4=i(hh);w(ti.$$.fragment,d4),d4.forEach(t),l4.forEach(t),Wy=p(n_),mh=r(n_,"SPAN",{});var c4=i(mh);Uy=n(c4,"RobertaConfig"),c4.forEach(t),n_.forEach(t),rg=p(s),Qt=r(s,"DIV",{class:!0});var Ua=i(Qt);w(oi.$$.fragment,Ua),Hy=p(Ua),uo=r(Ua,"P",{});var Ha=i(uo);Qy=n(Ha,"This is the configuration class to store the configuration of a "),Jc=r(Ha,"A",{href:!0});var p4=i(Jc);Ky=n(p4,"RobertaModel"),p4.forEach(t),Jy=n(Ha," or a "),Vc=r(Ha,"A",{href:!0});var h4=i(Vc);Vy=n(h4,"TFRobertaModel"),h4.forEach(t),Gy=n(Ha,`. It is
used to instantiate a RoBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the RoBERTa
`),ni=r(Ha,"A",{href:!0,rel:!0});var m4=i(ni);Xy=n(m4,"roberta-base"),m4.forEach(t),Yy=n(Ha," architecture."),Ha.forEach(t),Zy=p(Ua),rn=r(Ua,"P",{});var Ip=i(rn);ev=n(Ip,"Configuration objects inherit from "),Gc=r(Ip,"A",{href:!0});var u4=i(Gc);tv=n(u4,"PretrainedConfig"),u4.forEach(t),ov=n(Ip,` and can be used to control the model outputs. Read the
documentation from `),Xc=r(Ip,"A",{href:!0});var f4=i(Xc);nv=n(f4,"PretrainedConfig"),f4.forEach(t),sv=n(Ip," for more information."),Ip.forEach(t),av=p(Ua),w(ls.$$.fragment,Ua),Ua.forEach(t),ig=p(s),ln=r(s,"H2",{class:!0});var s_=i(ln);ds=r(s_,"A",{id:!0,class:!0,href:!0});var g4=i(ds);uh=r(g4,"SPAN",{});var _4=i(uh);w(si.$$.fragment,_4),_4.forEach(t),g4.forEach(t),rv=p(s_),fh=r(s_,"SPAN",{});var b4=i(fh);iv=n(b4,"RobertaTokenizer"),b4.forEach(t),s_.forEach(t),lg=p(s),Ie=r(s,"DIV",{class:!0});var Ge=i(Ie);w(ai.$$.fragment,Ge),lv=p(Ge),gh=r(Ge,"P",{});var k4=i(gh);dv=n(k4,"Constructs a RoBERTa tokenizer, derived from the GPT-2 tokenizer, using byte-level Byte-Pair-Encoding."),k4.forEach(t),cv=p(Ge),_h=r(Ge,"P",{});var y4=i(_h);pv=n(y4,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),y4.forEach(t),hv=p(Ge),w(cs.$$.fragment,Ge),mv=p(Ge),ri=r(Ge,"P",{});var a_=i(ri);uv=n(a_,"You can get around that behavior by passing "),bh=r(a_,"CODE",{});var v4=i(bh);fv=n(v4,"add_prefix_space=True"),v4.forEach(t),gv=n(a_,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),a_.forEach(t),_v=p(Ge),w(ps.$$.fragment,Ge),bv=p(Ge),ii=r(Ge,"P",{});var r_=i(ii);kv=n(r_,"This tokenizer inherits from "),Yc=r(r_,"A",{href:!0});var w4=i(Yc);yv=n(w4,"PreTrainedTokenizer"),w4.forEach(t),vv=n(r_,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),r_.forEach(t),wv=p(Ge),Oo=r(Ge,"DIV",{class:!0});var Dp=i(Oo);w(li.$$.fragment,Dp),Tv=p(Dp),kh=r(Dp,"P",{});var T4=i(kh);$v=n(T4,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoBERTa sequence has the following format:`),T4.forEach(t),Fv=p(Dp),di=r(Dp,"UL",{});var i_=i(di);Zc=r(i_,"LI",{});var EM=i(Zc);xv=n(EM,"single sequence: "),yh=r(EM,"CODE",{});var $4=i(yh);Rv=n($4,"<s> X </s>"),$4.forEach(t),EM.forEach(t),Ev=p(i_),ep=r(i_,"LI",{});var MM=i(ep);Mv=n(MM,"pair of sequences: "),vh=r(MM,"CODE",{});var F4=i(vh);zv=n(F4,"<s> A </s></s> B </s>"),F4.forEach(t),MM.forEach(t),i_.forEach(t),Dp.forEach(t),qv=p(Ge),hs=r(Ge,"DIV",{class:!0});var l_=i(hs);w(ci.$$.fragment,l_),Cv=p(l_),pi=r(l_,"P",{});var d_=i(pi);jv=n(d_,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),wh=r(d_,"CODE",{});var x4=i(wh);Pv=n(x4,"prepare_for_model"),x4.forEach(t),Av=n(d_," method."),d_.forEach(t),l_.forEach(t),Lv=p(Ge),ms=r(Ge,"DIV",{class:!0});var c_=i(ms);w(hi.$$.fragment,c_),Ov=p(c_),Th=r(c_,"P",{});var R4=i(Th);Nv=n(R4,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. RoBERTa does not
make use of token type ids, therefore a list of zeros is returned.`),R4.forEach(t),c_.forEach(t),Iv=p(Ge),tp=r(Ge,"DIV",{class:!0});var E4=i(tp);w(mi.$$.fragment,E4),E4.forEach(t),Ge.forEach(t),dg=p(s),dn=r(s,"H2",{class:!0});var p_=i(dn);us=r(p_,"A",{id:!0,class:!0,href:!0});var M4=i(us);$h=r(M4,"SPAN",{});var z4=i($h);w(ui.$$.fragment,z4),z4.forEach(t),M4.forEach(t),Dv=p(p_),Fh=r(p_,"SPAN",{});var q4=i(Fh);Sv=n(q4,"RobertaTokenizerFast"),q4.forEach(t),p_.forEach(t),cg=p(s),tt=r(s,"DIV",{class:!0});var kt=i(tt);w(fi.$$.fragment,kt),Bv=p(kt),gi=r(kt,"P",{});var h_=i(gi);Wv=n(h_,"Construct a \u201Cfast\u201D RoBERTa tokenizer (backed by HuggingFace\u2019s "),xh=r(h_,"EM",{});var C4=i(xh);Uv=n(C4,"tokenizers"),C4.forEach(t),Hv=n(h_,` library), derived from the GPT-2
tokenizer, using byte-level Byte-Pair-Encoding.`),h_.forEach(t),Qv=p(kt),Rh=r(kt,"P",{});var j4=i(Rh);Kv=n(j4,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),j4.forEach(t),Jv=p(kt),w(fs.$$.fragment,kt),Vv=p(kt),_i=r(kt,"P",{});var m_=i(_i);Gv=n(m_,"You can get around that behavior by passing "),Eh=r(m_,"CODE",{});var P4=i(Eh);Xv=n(P4,"add_prefix_space=True"),P4.forEach(t),Yv=n(m_,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),m_.forEach(t),Zv=p(kt),w(gs.$$.fragment,kt),ew=p(kt),bi=r(kt,"P",{});var u_=i(bi);tw=n(u_,"This tokenizer inherits from "),op=r(u_,"A",{href:!0});var A4=i(op);ow=n(A4,"PreTrainedTokenizerFast"),A4.forEach(t),nw=n(u_,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),u_.forEach(t),sw=p(kt),np=r(kt,"DIV",{class:!0});var L4=i(np);w(ki.$$.fragment,L4),L4.forEach(t),kt.forEach(t),pg=p(s),cn=r(s,"H2",{class:!0});var f_=i(cn);_s=r(f_,"A",{id:!0,class:!0,href:!0});var O4=i(_s);Mh=r(O4,"SPAN",{});var N4=i(Mh);w(yi.$$.fragment,N4),N4.forEach(t),O4.forEach(t),aw=p(f_),zh=r(f_,"SPAN",{});var I4=i(zh);rw=n(I4,"RobertaModel"),I4.forEach(t),f_.forEach(t),hg=p(s),ot=r(s,"DIV",{class:!0});var yt=i(ot);w(vi.$$.fragment,yt),iw=p(yt),qh=r(yt,"P",{});var D4=i(qh);lw=n(D4,"The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),D4.forEach(t),dw=p(yt),wi=r(yt,"P",{});var g_=i(wi);cw=n(g_,"This model inherits from "),sp=r(g_,"A",{href:!0});var S4=i(sp);pw=n(S4,"PreTrainedModel"),S4.forEach(t),hw=n(g_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),g_.forEach(t),mw=p(yt),Ti=r(yt,"P",{});var __=i(Ti);uw=n(__,"This model is also a PyTorch "),$i=r(__,"A",{href:!0,rel:!0});var B4=i($i);fw=n(B4,"torch.nn.Module"),B4.forEach(t),gw=n(__,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),__.forEach(t),_w=p(yt),Fi=r(yt,"P",{});var b_=i(Fi);bw=n(b_,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Ch=r(b_,"EM",{});var W4=i(Ch);kw=n(W4,`Attention is
all you need`),W4.forEach(t),yw=n(b_,`_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`),b_.forEach(t),vw=p(yt),pt=r(yt,"P",{});var Ot=i(pt);ww=n(Ot,"To behave as an decoder the model needs to be initialized with the "),jh=r(Ot,"CODE",{});var U4=i(jh);Tw=n(U4,"is_decoder"),U4.forEach(t),$w=n(Ot,` argument of the configuration set
to `),Ph=r(Ot,"CODE",{});var H4=i(Ph);Fw=n(H4,"True"),H4.forEach(t),xw=n(Ot,". To be used in a Seq2Seq model, the model needs to initialized with both "),Ah=r(Ot,"CODE",{});var Q4=i(Ah);Rw=n(Q4,"is_decoder"),Q4.forEach(t),Ew=n(Ot,` argument and
`),Lh=r(Ot,"CODE",{});var K4=i(Lh);Mw=n(K4,"add_cross_attention"),K4.forEach(t),zw=n(Ot," set to "),Oh=r(Ot,"CODE",{});var J4=i(Oh);qw=n(J4,"True"),J4.forEach(t),Cw=n(Ot,"; an "),Nh=r(Ot,"CODE",{});var V4=i(Nh);jw=n(V4,"encoder_hidden_states"),V4.forEach(t),Pw=n(Ot," is then expected as an input to the forward pass."),Ot.forEach(t),Aw=p(yt),bs=r(yt,"P",{});var Jf=i(bs);Lw=n(Jf,".. _"),Ih=r(Jf,"EM",{});var G4=i(Ih);Ow=n(G4,"Attention is all you need"),G4.forEach(t),Nw=n(Jf,": "),xi=r(Jf,"A",{href:!0,rel:!0});var X4=i(xi);Iw=n(X4,"https://arxiv.org/abs/1706.03762"),X4.forEach(t),Jf.forEach(t),Dw=p(yt),Jt=r(yt,"DIV",{class:!0});var Qa=i(Jt);w(Ri.$$.fragment,Qa),Sw=p(Qa),pn=r(Qa,"P",{});var Sp=i(pn);Bw=n(Sp,"The "),ap=r(Sp,"A",{href:!0});var Y4=i(ap);Ww=n(Y4,"RobertaModel"),Y4.forEach(t),Uw=n(Sp," forward method, overrides the "),Dh=r(Sp,"CODE",{});var Z4=i(Dh);Hw=n(Z4,"__call__"),Z4.forEach(t),Qw=n(Sp," special method."),Sp.forEach(t),Kw=p(Qa),w(ks.$$.fragment,Qa),Jw=p(Qa),w(ys.$$.fragment,Qa),Qa.forEach(t),yt.forEach(t),mg=p(s),hn=r(s,"H2",{class:!0});var k_=i(hn);vs=r(k_,"A",{id:!0,class:!0,href:!0});var ez=i(vs);Sh=r(ez,"SPAN",{});var tz=i(Sh);w(Ei.$$.fragment,tz),tz.forEach(t),ez.forEach(t),Vw=p(k_),Bh=r(k_,"SPAN",{});var oz=i(Bh);Gw=n(oz,"RobertaForCausalLM"),oz.forEach(t),k_.forEach(t),ug=p(s),vt=r(s,"DIV",{class:!0});var Ho=i(vt);w(Mi.$$.fragment,Ho),Xw=p(Ho),zi=r(Ho,"P",{});var y_=i(zi);Yw=n(y_,"RoBERTa Model with a "),Wh=r(y_,"CODE",{});var nz=i(Wh);Zw=n(nz,"language modeling"),nz.forEach(t),eT=n(y_," head on top for CLM fine-tuning."),y_.forEach(t),tT=p(Ho),qi=r(Ho,"P",{});var v_=i(qi);oT=n(v_,"This model inherits from "),rp=r(v_,"A",{href:!0});var sz=i(rp);nT=n(sz,"PreTrainedModel"),sz.forEach(t),sT=n(v_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),v_.forEach(t),aT=p(Ho),Ci=r(Ho,"P",{});var w_=i(Ci);rT=n(w_,"This model is also a PyTorch "),ji=r(w_,"A",{href:!0,rel:!0});var az=i(ji);iT=n(az,"torch.nn.Module"),az.forEach(t),lT=n(w_,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),w_.forEach(t),dT=p(Ho),Vt=r(Ho,"DIV",{class:!0});var Ka=i(Vt);w(Pi.$$.fragment,Ka),cT=p(Ka),mn=r(Ka,"P",{});var Bp=i(mn);pT=n(Bp,"The "),ip=r(Bp,"A",{href:!0});var rz=i(ip);hT=n(rz,"RobertaForCausalLM"),rz.forEach(t),mT=n(Bp," forward method, overrides the "),Uh=r(Bp,"CODE",{});var iz=i(Uh);uT=n(iz,"__call__"),iz.forEach(t),fT=n(Bp," special method."),Bp.forEach(t),gT=p(Ka),w(ws.$$.fragment,Ka),_T=p(Ka),w(Ts.$$.fragment,Ka),Ka.forEach(t),Ho.forEach(t),fg=p(s),un=r(s,"H2",{class:!0});var T_=i(un);$s=r(T_,"A",{id:!0,class:!0,href:!0});var lz=i($s);Hh=r(lz,"SPAN",{});var dz=i(Hh);w(Ai.$$.fragment,dz),dz.forEach(t),lz.forEach(t),bT=p(T_),Qh=r(T_,"SPAN",{});var cz=i(Qh);kT=n(cz,"RobertaForMaskedLM"),cz.forEach(t),T_.forEach(t),gg=p(s),wt=r(s,"DIV",{class:!0});var Qo=i(wt);w(Li.$$.fragment,Qo),yT=p(Qo),Oi=r(Qo,"P",{});var $_=i(Oi);vT=n($_,"RoBERTa Model with a "),Kh=r($_,"CODE",{});var pz=i(Kh);wT=n(pz,"language modeling"),pz.forEach(t),TT=n($_," head on top."),$_.forEach(t),$T=p(Qo),Ni=r(Qo,"P",{});var F_=i(Ni);FT=n(F_,"This model inherits from "),lp=r(F_,"A",{href:!0});var hz=i(lp);xT=n(hz,"PreTrainedModel"),hz.forEach(t),RT=n(F_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),F_.forEach(t),ET=p(Qo),Ii=r(Qo,"P",{});var x_=i(Ii);MT=n(x_,"This model is also a PyTorch "),Di=r(x_,"A",{href:!0,rel:!0});var mz=i(Di);zT=n(mz,"torch.nn.Module"),mz.forEach(t),qT=n(x_,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),x_.forEach(t),CT=p(Qo),zt=r(Qo,"DIV",{class:!0});var Ko=i(zt);w(Si.$$.fragment,Ko),jT=p(Ko),fn=r(Ko,"P",{});var Wp=i(fn);PT=n(Wp,"The "),dp=r(Wp,"A",{href:!0});var uz=i(dp);AT=n(uz,"RobertaForMaskedLM"),uz.forEach(t),LT=n(Wp," forward method, overrides the "),Jh=r(Wp,"CODE",{});var fz=i(Jh);OT=n(fz,"__call__"),fz.forEach(t),NT=n(Wp," special method."),Wp.forEach(t),IT=p(Ko),w(Fs.$$.fragment,Ko),DT=p(Ko),w(xs.$$.fragment,Ko),ST=p(Ko),w(Rs.$$.fragment,Ko),Ko.forEach(t),Qo.forEach(t),_g=p(s),gn=r(s,"H2",{class:!0});var R_=i(gn);Es=r(R_,"A",{id:!0,class:!0,href:!0});var gz=i(Es);Vh=r(gz,"SPAN",{});var _z=i(Vh);w(Bi.$$.fragment,_z),_z.forEach(t),gz.forEach(t),BT=p(R_),Gh=r(R_,"SPAN",{});var bz=i(Gh);WT=n(bz,"RobertaForSequenceClassification"),bz.forEach(t),R_.forEach(t),bg=p(s),Tt=r(s,"DIV",{class:!0});var Jo=i(Tt);w(Wi.$$.fragment,Jo),UT=p(Jo),Xh=r(Jo,"P",{});var kz=i(Xh);HT=n(kz,`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),kz.forEach(t),QT=p(Jo),Ui=r(Jo,"P",{});var E_=i(Ui);KT=n(E_,"This model inherits from "),cp=r(E_,"A",{href:!0});var yz=i(cp);JT=n(yz,"PreTrainedModel"),yz.forEach(t),VT=n(E_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),E_.forEach(t),GT=p(Jo),Hi=r(Jo,"P",{});var M_=i(Hi);XT=n(M_,"This model is also a PyTorch "),Qi=r(M_,"A",{href:!0,rel:!0});var vz=i(Qi);YT=n(vz,"torch.nn.Module"),vz.forEach(t),ZT=n(M_,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),M_.forEach(t),e$=p(Jo),ct=r(Jo,"DIV",{class:!0});var Nt=i(ct);w(Ki.$$.fragment,Nt),t$=p(Nt),_n=r(Nt,"P",{});var Up=i(_n);o$=n(Up,"The "),pp=r(Up,"A",{href:!0});var wz=i(pp);n$=n(wz,"RobertaForSequenceClassification"),wz.forEach(t),s$=n(Up," forward method, overrides the "),Yh=r(Up,"CODE",{});var Tz=i(Yh);a$=n(Tz,"__call__"),Tz.forEach(t),r$=n(Up," special method."),Up.forEach(t),i$=p(Nt),w(Ms.$$.fragment,Nt),l$=p(Nt),w(zs.$$.fragment,Nt),d$=p(Nt),w(qs.$$.fragment,Nt),c$=p(Nt),w(Cs.$$.fragment,Nt),p$=p(Nt),w(js.$$.fragment,Nt),Nt.forEach(t),Jo.forEach(t),kg=p(s),bn=r(s,"H2",{class:!0});var z_=i(bn);Ps=r(z_,"A",{id:!0,class:!0,href:!0});var $z=i(Ps);Zh=r($z,"SPAN",{});var Fz=i(Zh);w(Ji.$$.fragment,Fz),Fz.forEach(t),$z.forEach(t),h$=p(z_),em=r(z_,"SPAN",{});var xz=i(em);m$=n(xz,"RobertaForMultipleChoice"),xz.forEach(t),z_.forEach(t),yg=p(s),$t=r(s,"DIV",{class:!0});var Vo=i($t);w(Vi.$$.fragment,Vo),u$=p(Vo),tm=r(Vo,"P",{});var Rz=i(tm);f$=n(Rz,`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Rz.forEach(t),g$=p(Vo),Gi=r(Vo,"P",{});var q_=i(Gi);_$=n(q_,"This model inherits from "),hp=r(q_,"A",{href:!0});var Ez=i(hp);b$=n(Ez,"PreTrainedModel"),Ez.forEach(t),k$=n(q_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),q_.forEach(t),y$=p(Vo),Xi=r(Vo,"P",{});var C_=i(Xi);v$=n(C_,"This model is also a PyTorch "),Yi=r(C_,"A",{href:!0,rel:!0});var Mz=i(Yi);w$=n(Mz,"torch.nn.Module"),Mz.forEach(t),T$=n(C_,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),C_.forEach(t),$$=p(Vo),Gt=r(Vo,"DIV",{class:!0});var Ja=i(Gt);w(Zi.$$.fragment,Ja),F$=p(Ja),kn=r(Ja,"P",{});var Hp=i(kn);x$=n(Hp,"The "),mp=r(Hp,"A",{href:!0});var zz=i(mp);R$=n(zz,"RobertaForMultipleChoice"),zz.forEach(t),E$=n(Hp," forward method, overrides the "),om=r(Hp,"CODE",{});var qz=i(om);M$=n(qz,"__call__"),qz.forEach(t),z$=n(Hp," special method."),Hp.forEach(t),q$=p(Ja),w(As.$$.fragment,Ja),C$=p(Ja),w(Ls.$$.fragment,Ja),Ja.forEach(t),Vo.forEach(t),vg=p(s),yn=r(s,"H2",{class:!0});var j_=i(yn);Os=r(j_,"A",{id:!0,class:!0,href:!0});var Cz=i(Os);nm=r(Cz,"SPAN",{});var jz=i(nm);w(el.$$.fragment,jz),jz.forEach(t),Cz.forEach(t),j$=p(j_),sm=r(j_,"SPAN",{});var Pz=i(sm);P$=n(Pz,"RobertaForTokenClassification"),Pz.forEach(t),j_.forEach(t),wg=p(s),Ft=r(s,"DIV",{class:!0});var Go=i(Ft);w(tl.$$.fragment,Go),A$=p(Go),am=r(Go,"P",{});var Az=i(am);L$=n(Az,`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Az.forEach(t),O$=p(Go),ol=r(Go,"P",{});var P_=i(ol);N$=n(P_,"This model inherits from "),up=r(P_,"A",{href:!0});var Lz=i(up);I$=n(Lz,"PreTrainedModel"),Lz.forEach(t),D$=n(P_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),P_.forEach(t),S$=p(Go),nl=r(Go,"P",{});var A_=i(nl);B$=n(A_,"This model is also a PyTorch "),sl=r(A_,"A",{href:!0,rel:!0});var Oz=i(sl);W$=n(Oz,"torch.nn.Module"),Oz.forEach(t),U$=n(A_,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),A_.forEach(t),H$=p(Go),qt=r(Go,"DIV",{class:!0});var Xo=i(qt);w(al.$$.fragment,Xo),Q$=p(Xo),vn=r(Xo,"P",{});var Qp=i(vn);K$=n(Qp,"The "),fp=r(Qp,"A",{href:!0});var Nz=i(fp);J$=n(Nz,"RobertaForTokenClassification"),Nz.forEach(t),V$=n(Qp," forward method, overrides the "),rm=r(Qp,"CODE",{});var Iz=i(rm);G$=n(Iz,"__call__"),Iz.forEach(t),X$=n(Qp," special method."),Qp.forEach(t),Y$=p(Xo),w(Ns.$$.fragment,Xo),Z$=p(Xo),w(Is.$$.fragment,Xo),e1=p(Xo),w(Ds.$$.fragment,Xo),Xo.forEach(t),Go.forEach(t),Tg=p(s),wn=r(s,"H2",{class:!0});var L_=i(wn);Ss=r(L_,"A",{id:!0,class:!0,href:!0});var Dz=i(Ss);im=r(Dz,"SPAN",{});var Sz=i(im);w(rl.$$.fragment,Sz),Sz.forEach(t),Dz.forEach(t),t1=p(L_),lm=r(L_,"SPAN",{});var Bz=i(lm);o1=n(Bz,"RobertaForQuestionAnswering"),Bz.forEach(t),L_.forEach(t),$g=p(s),xt=r(s,"DIV",{class:!0});var Yo=i(xt);w(il.$$.fragment,Yo),n1=p(Yo),Tn=r(Yo,"P",{});var Kp=i(Tn);s1=n(Kp,`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),dm=r(Kp,"CODE",{});var Wz=i(dm);a1=n(Wz,"span start logits"),Wz.forEach(t),r1=n(Kp," and "),cm=r(Kp,"CODE",{});var Uz=i(cm);i1=n(Uz,"span end logits"),Uz.forEach(t),l1=n(Kp,")."),Kp.forEach(t),d1=p(Yo),ll=r(Yo,"P",{});var O_=i(ll);c1=n(O_,"This model inherits from "),gp=r(O_,"A",{href:!0});var Hz=i(gp);p1=n(Hz,"PreTrainedModel"),Hz.forEach(t),h1=n(O_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),O_.forEach(t),m1=p(Yo),dl=r(Yo,"P",{});var N_=i(dl);u1=n(N_,"This model is also a PyTorch "),cl=r(N_,"A",{href:!0,rel:!0});var Qz=i(cl);f1=n(Qz,"torch.nn.Module"),Qz.forEach(t),g1=n(N_,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),N_.forEach(t),_1=p(Yo),Ct=r(Yo,"DIV",{class:!0});var Zo=i(Ct);w(pl.$$.fragment,Zo),b1=p(Zo),$n=r(Zo,"P",{});var Jp=i($n);k1=n(Jp,"The "),_p=r(Jp,"A",{href:!0});var Kz=i(_p);y1=n(Kz,"RobertaForQuestionAnswering"),Kz.forEach(t),v1=n(Jp," forward method, overrides the "),pm=r(Jp,"CODE",{});var Jz=i(pm);w1=n(Jz,"__call__"),Jz.forEach(t),T1=n(Jp," special method."),Jp.forEach(t),$1=p(Zo),w(Bs.$$.fragment,Zo),F1=p(Zo),w(Ws.$$.fragment,Zo),x1=p(Zo),w(Us.$$.fragment,Zo),Zo.forEach(t),Yo.forEach(t),Fg=p(s),Fn=r(s,"H2",{class:!0});var I_=i(Fn);Hs=r(I_,"A",{id:!0,class:!0,href:!0});var Vz=i(Hs);hm=r(Vz,"SPAN",{});var Gz=i(hm);w(hl.$$.fragment,Gz),Gz.forEach(t),Vz.forEach(t),R1=p(I_),mm=r(I_,"SPAN",{});var Xz=i(mm);E1=n(Xz,"TFRobertaModel"),Xz.forEach(t),I_.forEach(t),xg=p(s),ht=r(s,"DIV",{class:!0});var io=i(ht);w(ml.$$.fragment,io),M1=p(io),um=r(io,"P",{});var Yz=i(um);z1=n(Yz,"The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),Yz.forEach(t),q1=p(io),ul=r(io,"P",{});var D_=i(ul);C1=n(D_,"This model inherits from "),bp=r(D_,"A",{href:!0});var Zz=i(bp);j1=n(Zz,"TFPreTrainedModel"),Zz.forEach(t),P1=n(D_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),D_.forEach(t),A1=p(io),fl=r(io,"P",{});var S_=i(fl);L1=n(S_,"This model is also a "),gl=r(S_,"A",{href:!0,rel:!0});var eq=i(gl);O1=n(eq,"tf.keras.Model"),eq.forEach(t),N1=n(S_,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),S_.forEach(t),I1=p(io),w(Qs.$$.fragment,io),D1=p(io),Xt=r(io,"DIV",{class:!0});var Va=i(Xt);w(_l.$$.fragment,Va),S1=p(Va),xn=r(Va,"P",{});var Vp=i(xn);B1=n(Vp,"The "),kp=r(Vp,"A",{href:!0});var tq=i(kp);W1=n(tq,"TFRobertaModel"),tq.forEach(t),U1=n(Vp," forward method, overrides the "),fm=r(Vp,"CODE",{});var oq=i(fm);H1=n(oq,"__call__"),oq.forEach(t),Q1=n(Vp," special method."),Vp.forEach(t),K1=p(Va),w(Ks.$$.fragment,Va),J1=p(Va),w(Js.$$.fragment,Va),Va.forEach(t),io.forEach(t),Rg=p(s),Rn=r(s,"H2",{class:!0});var B_=i(Rn);Vs=r(B_,"A",{id:!0,class:!0,href:!0});var nq=i(Vs);gm=r(nq,"SPAN",{});var sq=i(gm);w(bl.$$.fragment,sq),sq.forEach(t),nq.forEach(t),V1=p(B_),_m=r(B_,"SPAN",{});var aq=i(_m);G1=n(aq,"TFRobertaForCausalLM"),aq.forEach(t),B_.forEach(t),Eg=p(s),En=r(s,"DIV",{class:!0});var W_=i(En);w(kl.$$.fragment,W_),X1=p(W_),Yt=r(W_,"DIV",{class:!0});var Ga=i(Yt);w(yl.$$.fragment,Ga),Y1=p(Ga),Mn=r(Ga,"P",{});var Gp=i(Mn);Z1=n(Gp,"The "),yp=r(Gp,"A",{href:!0});var rq=i(yp);e2=n(rq,"TFRobertaForCausalLM"),rq.forEach(t),t2=n(Gp," forward method, overrides the "),bm=r(Gp,"CODE",{});var iq=i(bm);o2=n(iq,"__call__"),iq.forEach(t),n2=n(Gp," special method."),Gp.forEach(t),s2=p(Ga),w(Gs.$$.fragment,Ga),a2=p(Ga),w(Xs.$$.fragment,Ga),Ga.forEach(t),W_.forEach(t),Mg=p(s),zn=r(s,"H2",{class:!0});var U_=i(zn);Ys=r(U_,"A",{id:!0,class:!0,href:!0});var lq=i(Ys);km=r(lq,"SPAN",{});var dq=i(km);w(vl.$$.fragment,dq),dq.forEach(t),lq.forEach(t),r2=p(U_),ym=r(U_,"SPAN",{});var cq=i(ym);i2=n(cq,"TFRobertaForMaskedLM"),cq.forEach(t),U_.forEach(t),zg=p(s),mt=r(s,"DIV",{class:!0});var lo=i(mt);w(wl.$$.fragment,lo),l2=p(lo),Tl=r(lo,"P",{});var H_=i(Tl);d2=n(H_,"RoBERTa Model with a "),vm=r(H_,"CODE",{});var pq=i(vm);c2=n(pq,"language modeling"),pq.forEach(t),p2=n(H_," head on top."),H_.forEach(t),h2=p(lo),$l=r(lo,"P",{});var Q_=i($l);m2=n(Q_,"This model inherits from "),vp=r(Q_,"A",{href:!0});var hq=i(vp);u2=n(hq,"TFPreTrainedModel"),hq.forEach(t),f2=n(Q_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Q_.forEach(t),g2=p(lo),Fl=r(lo,"P",{});var K_=i(Fl);_2=n(K_,"This model is also a "),xl=r(K_,"A",{href:!0,rel:!0});var mq=i(xl);b2=n(mq,"tf.keras.Model"),mq.forEach(t),k2=n(K_,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),K_.forEach(t),y2=p(lo),w(Zs.$$.fragment,lo),v2=p(lo),jt=r(lo,"DIV",{class:!0});var en=i(jt);w(Rl.$$.fragment,en),w2=p(en),qn=r(en,"P",{});var Xp=i(qn);T2=n(Xp,"The "),wp=r(Xp,"A",{href:!0});var uq=i(wp);$2=n(uq,"TFRobertaForMaskedLM"),uq.forEach(t),F2=n(Xp," forward method, overrides the "),wm=r(Xp,"CODE",{});var fq=i(wm);x2=n(fq,"__call__"),fq.forEach(t),R2=n(Xp," special method."),Xp.forEach(t),E2=p(en),w(ea.$$.fragment,en),M2=p(en),w(ta.$$.fragment,en),z2=p(en),w(oa.$$.fragment,en),en.forEach(t),lo.forEach(t),qg=p(s),Cn=r(s,"H2",{class:!0});var J_=i(Cn);na=r(J_,"A",{id:!0,class:!0,href:!0});var gq=i(na);Tm=r(gq,"SPAN",{});var _q=i(Tm);w(El.$$.fragment,_q),_q.forEach(t),gq.forEach(t),q2=p(J_),$m=r(J_,"SPAN",{});var bq=i($m);C2=n(bq,"TFRobertaForSequenceClassification"),bq.forEach(t),J_.forEach(t),Cg=p(s),ut=r(s,"DIV",{class:!0});var co=i(ut);w(Ml.$$.fragment,co),j2=p(co),Fm=r(co,"P",{});var kq=i(Fm);P2=n(kq,`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),kq.forEach(t),A2=p(co),zl=r(co,"P",{});var V_=i(zl);L2=n(V_,"This model inherits from "),Tp=r(V_,"A",{href:!0});var yq=i(Tp);O2=n(yq,"TFPreTrainedModel"),yq.forEach(t),N2=n(V_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),V_.forEach(t),I2=p(co),ql=r(co,"P",{});var G_=i(ql);D2=n(G_,"This model is also a "),Cl=r(G_,"A",{href:!0,rel:!0});var vq=i(Cl);S2=n(vq,"tf.keras.Model"),vq.forEach(t),B2=n(G_,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),G_.forEach(t),W2=p(co),w(sa.$$.fragment,co),U2=p(co),Pt=r(co,"DIV",{class:!0});var tn=i(Pt);w(jl.$$.fragment,tn),H2=p(tn),jn=r(tn,"P",{});var Yp=i(jn);Q2=n(Yp,"The "),$p=r(Yp,"A",{href:!0});var wq=i($p);K2=n(wq,"TFRobertaForSequenceClassification"),wq.forEach(t),J2=n(Yp," forward method, overrides the "),xm=r(Yp,"CODE",{});var Tq=i(xm);V2=n(Tq,"__call__"),Tq.forEach(t),G2=n(Yp," special method."),Yp.forEach(t),X2=p(tn),w(aa.$$.fragment,tn),Y2=p(tn),w(ra.$$.fragment,tn),Z2=p(tn),w(ia.$$.fragment,tn),tn.forEach(t),co.forEach(t),jg=p(s),Pn=r(s,"H2",{class:!0});var X_=i(Pn);la=r(X_,"A",{id:!0,class:!0,href:!0});var $q=i(la);Rm=r($q,"SPAN",{});var Fq=i(Rm);w(Pl.$$.fragment,Fq),Fq.forEach(t),$q.forEach(t),eF=p(X_),Em=r(X_,"SPAN",{});var xq=i(Em);tF=n(xq,"TFRobertaForMultipleChoice"),xq.forEach(t),X_.forEach(t),Pg=p(s),ft=r(s,"DIV",{class:!0});var po=i(ft);w(Al.$$.fragment,po),oF=p(po),Mm=r(po,"P",{});var Rq=i(Mm);nF=n(Rq,`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Rq.forEach(t),sF=p(po),Ll=r(po,"P",{});var Y_=i(Ll);aF=n(Y_,"This model inherits from "),Fp=r(Y_,"A",{href:!0});var Eq=i(Fp);rF=n(Eq,"TFPreTrainedModel"),Eq.forEach(t),iF=n(Y_,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Y_.forEach(t),lF=p(po),Ol=r(po,"P",{});var Z_=i(Ol);dF=n(Z_,"This model is also a "),Nl=r(Z_,"A",{href:!0,rel:!0});var Mq=i(Nl);cF=n(Mq,"tf.keras.Model"),Mq.forEach(t),pF=n(Z_,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Z_.forEach(t),hF=p(po),w(da.$$.fragment,po),mF=p(po),Zt=r(po,"DIV",{class:!0});var Xa=i(Zt);w(Il.$$.fragment,Xa),uF=p(Xa),An=r(Xa,"P",{});var Zp=i(An);fF=n(Zp,"The "),xp=r(Zp,"A",{href:!0});var zq=i(xp);gF=n(zq,"TFRobertaForMultipleChoice"),zq.forEach(t),_F=n(Zp," forward method, overrides the "),zm=r(Zp,"CODE",{});var qq=i(zm);bF=n(qq,"__call__"),qq.forEach(t),kF=n(Zp," special method."),Zp.forEach(t),yF=p(Xa),w(ca.$$.fragment,Xa),vF=p(Xa),w(pa.$$.fragment,Xa),Xa.forEach(t),po.forEach(t),Ag=p(s),Ln=r(s,"H2",{class:!0});var eb=i(Ln);ha=r(eb,"A",{id:!0,class:!0,href:!0});var Cq=i(ha);qm=r(Cq,"SPAN",{});var jq=i(qm);w(Dl.$$.fragment,jq),jq.forEach(t),Cq.forEach(t),wF=p(eb),Cm=r(eb,"SPAN",{});var Pq=i(Cm);TF=n(Pq,"TFRobertaForTokenClassification"),Pq.forEach(t),eb.forEach(t),Lg=p(s),gt=r(s,"DIV",{class:!0});var ho=i(gt);w(Sl.$$.fragment,ho),$F=p(ho),jm=r(ho,"P",{});var Aq=i(jm);FF=n(Aq,`RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Aq.forEach(t),xF=p(ho),Bl=r(ho,"P",{});var tb=i(Bl);RF=n(tb,"This model inherits from "),Rp=r(tb,"A",{href:!0});var Lq=i(Rp);EF=n(Lq,"TFPreTrainedModel"),Lq.forEach(t),MF=n(tb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tb.forEach(t),zF=p(ho),Wl=r(ho,"P",{});var ob=i(Wl);qF=n(ob,"This model is also a "),Ul=r(ob,"A",{href:!0,rel:!0});var Oq=i(Ul);CF=n(Oq,"tf.keras.Model"),Oq.forEach(t),jF=n(ob,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ob.forEach(t),PF=p(ho),w(ma.$$.fragment,ho),AF=p(ho),At=r(ho,"DIV",{class:!0});var on=i(At);w(Hl.$$.fragment,on),LF=p(on),On=r(on,"P",{});var eh=i(On);OF=n(eh,"The "),Ep=r(eh,"A",{href:!0});var Nq=i(Ep);NF=n(Nq,"TFRobertaForTokenClassification"),Nq.forEach(t),IF=n(eh," forward method, overrides the "),Pm=r(eh,"CODE",{});var Iq=i(Pm);DF=n(Iq,"__call__"),Iq.forEach(t),SF=n(eh," special method."),eh.forEach(t),BF=p(on),w(ua.$$.fragment,on),WF=p(on),w(fa.$$.fragment,on),UF=p(on),w(ga.$$.fragment,on),on.forEach(t),ho.forEach(t),Og=p(s),Nn=r(s,"H2",{class:!0});var nb=i(Nn);_a=r(nb,"A",{id:!0,class:!0,href:!0});var Dq=i(_a);Am=r(Dq,"SPAN",{});var Sq=i(Am);w(Ql.$$.fragment,Sq),Sq.forEach(t),Dq.forEach(t),HF=p(nb),Lm=r(nb,"SPAN",{});var Bq=i(Lm);QF=n(Bq,"TFRobertaForQuestionAnswering"),Bq.forEach(t),nb.forEach(t),Ng=p(s),_t=r(s,"DIV",{class:!0});var mo=i(_t);w(Kl.$$.fragment,mo),KF=p(mo),In=r(mo,"P",{});var th=i(In);JF=n(th,`RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Om=r(th,"CODE",{});var Wq=i(Om);VF=n(Wq,"span start logits"),Wq.forEach(t),GF=n(th," and "),Nm=r(th,"CODE",{});var Uq=i(Nm);XF=n(Uq,"span end logits"),Uq.forEach(t),YF=n(th,")."),th.forEach(t),ZF=p(mo),Jl=r(mo,"P",{});var sb=i(Jl);e0=n(sb,"This model inherits from "),Mp=r(sb,"A",{href:!0});var Hq=i(Mp);t0=n(Hq,"TFPreTrainedModel"),Hq.forEach(t),o0=n(sb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sb.forEach(t),n0=p(mo),Vl=r(mo,"P",{});var ab=i(Vl);s0=n(ab,"This model is also a "),Gl=r(ab,"A",{href:!0,rel:!0});var Qq=i(Gl);a0=n(Qq,"tf.keras.Model"),Qq.forEach(t),r0=n(ab,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ab.forEach(t),i0=p(mo),w(ba.$$.fragment,mo),l0=p(mo),Lt=r(mo,"DIV",{class:!0});var nn=i(Lt);w(Xl.$$.fragment,nn),d0=p(nn),Dn=r(nn,"P",{});var oh=i(Dn);c0=n(oh,"The "),zp=r(oh,"A",{href:!0});var Kq=i(zp);p0=n(Kq,"TFRobertaForQuestionAnswering"),Kq.forEach(t),h0=n(oh," forward method, overrides the "),Im=r(oh,"CODE",{});var Jq=i(Im);m0=n(Jq,"__call__"),Jq.forEach(t),u0=n(oh," special method."),oh.forEach(t),f0=p(nn),w(ka.$$.fragment,nn),g0=p(nn),w(ya.$$.fragment,nn),_0=p(nn),w(va.$$.fragment,nn),nn.forEach(t),mo.forEach(t),Ig=p(s),Sn=r(s,"H2",{class:!0});var rb=i(Sn);wa=r(rb,"A",{id:!0,class:!0,href:!0});var Vq=i(wa);Dm=r(Vq,"SPAN",{});var Gq=i(Dm);w(Yl.$$.fragment,Gq),Gq.forEach(t),Vq.forEach(t),b0=p(rb),Sm=r(rb,"SPAN",{});var Xq=i(Sm);k0=n(Xq,"FlaxRobertaModel"),Xq.forEach(t),rb.forEach(t),Dg=p(s),nt=r(s,"DIV",{class:!0});var It=i(nt);w(Zl.$$.fragment,It),y0=p(It),Bm=r(It,"P",{});var Yq=i(Bm);v0=n(Yq,"The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),Yq.forEach(t),w0=p(It),ed=r(It,"P",{});var ib=i(ed);T0=n(ib,"This model inherits from "),qp=r(ib,"A",{href:!0});var Zq=i(qp);$0=n(Zq,"FlaxPreTrainedModel"),Zq.forEach(t),F0=n(ib,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ib.forEach(t),x0=p(It),td=r(It,"P",{});var lb=i(td);R0=n(lb,"This model is also a Flax Linen "),od=r(lb,"A",{href:!0,rel:!0});var eC=i(od);E0=n(eC,"flax.linen.Module"),eC.forEach(t),M0=n(lb,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),lb.forEach(t),z0=p(It),Wm=r(It,"P",{});var tC=i(Wm);q0=n(tC,"Finally, this model supports inherent JAX features such as:"),tC.forEach(t),C0=p(It),fo=r(It,"UL",{});var Ya=i(fo);Um=r(Ya,"LI",{});var oC=i(Um);nd=r(oC,"A",{href:!0,rel:!0});var nC=i(nd);j0=n(nC,"Just-In-Time (JIT) compilation"),nC.forEach(t),oC.forEach(t),P0=p(Ya),Hm=r(Ya,"LI",{});var sC=i(Hm);sd=r(sC,"A",{href:!0,rel:!0});var aC=i(sd);A0=n(aC,"Automatic Differentiation"),aC.forEach(t),sC.forEach(t),L0=p(Ya),Qm=r(Ya,"LI",{});var rC=i(Qm);ad=r(rC,"A",{href:!0,rel:!0});var iC=i(ad);O0=n(iC,"Vectorization"),iC.forEach(t),rC.forEach(t),N0=p(Ya),Km=r(Ya,"LI",{});var lC=i(Km);rd=r(lC,"A",{href:!0,rel:!0});var dC=i(rd);I0=n(dC,"Parallelization"),dC.forEach(t),lC.forEach(t),Ya.forEach(t),D0=p(It),eo=r(It,"DIV",{class:!0});var Za=i(eo);w(id.$$.fragment,Za),S0=p(Za),Bn=r(Za,"P",{});var nh=i(Bn);B0=n(nh,"The "),Jm=r(nh,"CODE",{});var cC=i(Jm);W0=n(cC,"FlaxRobertaPreTrainedModel"),cC.forEach(t),U0=n(nh," forward method, overrides the "),Vm=r(nh,"CODE",{});var pC=i(Vm);H0=n(pC,"__call__"),pC.forEach(t),Q0=n(nh," special method."),nh.forEach(t),K0=p(Za),w(Ta.$$.fragment,Za),J0=p(Za),w($a.$$.fragment,Za),Za.forEach(t),It.forEach(t),Sg=p(s),Wn=r(s,"H2",{class:!0});var db=i(Wn);Fa=r(db,"A",{id:!0,class:!0,href:!0});var hC=i(Fa);Gm=r(hC,"SPAN",{});var mC=i(Gm);w(ld.$$.fragment,mC),mC.forEach(t),hC.forEach(t),V0=p(db),Xm=r(db,"SPAN",{});var uC=i(Xm);G0=n(uC,"FlaxRobertaForCausalLM"),uC.forEach(t),db.forEach(t),Bg=p(s),st=r(s,"DIV",{class:!0});var Dt=i(st);w(dd.$$.fragment,Dt),X0=p(Dt),Ym=r(Dt,"P",{});var fC=i(Ym);Y0=n(fC,`Roberta Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),fC.forEach(t),Z0=p(Dt),cd=r(Dt,"P",{});var cb=i(cd);ex=n(cb,"This model inherits from "),Cp=r(cb,"A",{href:!0});var gC=i(Cp);tx=n(gC,"FlaxPreTrainedModel"),gC.forEach(t),ox=n(cb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),cb.forEach(t),nx=p(Dt),pd=r(Dt,"P",{});var pb=i(pd);sx=n(pb,"This model is also a Flax Linen "),hd=r(pb,"A",{href:!0,rel:!0});var _C=i(hd);ax=n(_C,"flax.linen.Module"),_C.forEach(t),rx=n(pb,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),pb.forEach(t),ix=p(Dt),Zm=r(Dt,"P",{});var bC=i(Zm);lx=n(bC,"Finally, this model supports inherent JAX features such as:"),bC.forEach(t),dx=p(Dt),go=r(Dt,"UL",{});var er=i(go);eu=r(er,"LI",{});var kC=i(eu);md=r(kC,"A",{href:!0,rel:!0});var yC=i(md);cx=n(yC,"Just-In-Time (JIT) compilation"),yC.forEach(t),kC.forEach(t),px=p(er),tu=r(er,"LI",{});var vC=i(tu);ud=r(vC,"A",{href:!0,rel:!0});var wC=i(ud);hx=n(wC,"Automatic Differentiation"),wC.forEach(t),vC.forEach(t),mx=p(er),ou=r(er,"LI",{});var TC=i(ou);fd=r(TC,"A",{href:!0,rel:!0});var $C=i(fd);ux=n($C,"Vectorization"),$C.forEach(t),TC.forEach(t),fx=p(er),nu=r(er,"LI",{});var FC=i(nu);gd=r(FC,"A",{href:!0,rel:!0});var xC=i(gd);gx=n(xC,"Parallelization"),xC.forEach(t),FC.forEach(t),er.forEach(t),_x=p(Dt),to=r(Dt,"DIV",{class:!0});var tr=i(to);w(_d.$$.fragment,tr),bx=p(tr),Un=r(tr,"P",{});var sh=i(Un);kx=n(sh,"The "),su=r(sh,"CODE",{});var RC=i(su);yx=n(RC,"FlaxRobertaPreTrainedModel"),RC.forEach(t),vx=n(sh," forward method, overrides the "),au=r(sh,"CODE",{});var EC=i(au);wx=n(EC,"__call__"),EC.forEach(t),Tx=n(sh," special method."),sh.forEach(t),$x=p(tr),w(xa.$$.fragment,tr),Fx=p(tr),w(Ra.$$.fragment,tr),tr.forEach(t),Dt.forEach(t),Wg=p(s),Hn=r(s,"H2",{class:!0});var hb=i(Hn);Ea=r(hb,"A",{id:!0,class:!0,href:!0});var MC=i(Ea);ru=r(MC,"SPAN",{});var zC=i(ru);w(bd.$$.fragment,zC),zC.forEach(t),MC.forEach(t),xx=p(hb),iu=r(hb,"SPAN",{});var qC=i(iu);Rx=n(qC,"FlaxRobertaForMaskedLM"),qC.forEach(t),hb.forEach(t),Ug=p(s),at=r(s,"DIV",{class:!0});var St=i(at);w(kd.$$.fragment,St),Ex=p(St),yd=r(St,"P",{});var mb=i(yd);Mx=n(mb,"RoBERTa Model with a "),lu=r(mb,"CODE",{});var CC=i(lu);zx=n(CC,"language modeling"),CC.forEach(t),qx=n(mb," head on top."),mb.forEach(t),Cx=p(St),vd=r(St,"P",{});var ub=i(vd);jx=n(ub,"This model inherits from "),jp=r(ub,"A",{href:!0});var jC=i(jp);Px=n(jC,"FlaxPreTrainedModel"),jC.forEach(t),Ax=n(ub,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ub.forEach(t),Lx=p(St),wd=r(St,"P",{});var fb=i(wd);Ox=n(fb,"This model is also a Flax Linen "),Td=r(fb,"A",{href:!0,rel:!0});var PC=i(Td);Nx=n(PC,"flax.linen.Module"),PC.forEach(t),Ix=n(fb,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),fb.forEach(t),Dx=p(St),du=r(St,"P",{});var AC=i(du);Sx=n(AC,"Finally, this model supports inherent JAX features such as:"),AC.forEach(t),Bx=p(St),_o=r(St,"UL",{});var or=i(_o);cu=r(or,"LI",{});var LC=i(cu);$d=r(LC,"A",{href:!0,rel:!0});var OC=i($d);Wx=n(OC,"Just-In-Time (JIT) compilation"),OC.forEach(t),LC.forEach(t),Ux=p(or),pu=r(or,"LI",{});var NC=i(pu);Fd=r(NC,"A",{href:!0,rel:!0});var IC=i(Fd);Hx=n(IC,"Automatic Differentiation"),IC.forEach(t),NC.forEach(t),Qx=p(or),hu=r(or,"LI",{});var DC=i(hu);xd=r(DC,"A",{href:!0,rel:!0});var SC=i(xd);Kx=n(SC,"Vectorization"),SC.forEach(t),DC.forEach(t),Jx=p(or),mu=r(or,"LI",{});var BC=i(mu);Rd=r(BC,"A",{href:!0,rel:!0});var WC=i(Rd);Vx=n(WC,"Parallelization"),WC.forEach(t),BC.forEach(t),or.forEach(t),Gx=p(St),oo=r(St,"DIV",{class:!0});var nr=i(oo);w(Ed.$$.fragment,nr),Xx=p(nr),Qn=r(nr,"P",{});var ah=i(Qn);Yx=n(ah,"The "),uu=r(ah,"CODE",{});var UC=i(uu);Zx=n(UC,"FlaxRobertaPreTrainedModel"),UC.forEach(t),eR=n(ah," forward method, overrides the "),fu=r(ah,"CODE",{});var HC=i(fu);tR=n(HC,"__call__"),HC.forEach(t),oR=n(ah," special method."),ah.forEach(t),nR=p(nr),w(Ma.$$.fragment,nr),sR=p(nr),w(za.$$.fragment,nr),nr.forEach(t),St.forEach(t),Hg=p(s),Kn=r(s,"H2",{class:!0});var gb=i(Kn);qa=r(gb,"A",{id:!0,class:!0,href:!0});var QC=i(qa);gu=r(QC,"SPAN",{});var KC=i(gu);w(Md.$$.fragment,KC),KC.forEach(t),QC.forEach(t),aR=p(gb),_u=r(gb,"SPAN",{});var JC=i(_u);rR=n(JC,"FlaxRobertaForSequenceClassification"),JC.forEach(t),gb.forEach(t),Qg=p(s),rt=r(s,"DIV",{class:!0});var Bt=i(rt);w(zd.$$.fragment,Bt),iR=p(Bt),bu=r(Bt,"P",{});var VC=i(bu);lR=n(VC,`Roberta Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),VC.forEach(t),dR=p(Bt),qd=r(Bt,"P",{});var _b=i(qd);cR=n(_b,"This model inherits from "),Pp=r(_b,"A",{href:!0});var GC=i(Pp);pR=n(GC,"FlaxPreTrainedModel"),GC.forEach(t),hR=n(_b,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),_b.forEach(t),mR=p(Bt),Cd=r(Bt,"P",{});var bb=i(Cd);uR=n(bb,"This model is also a Flax Linen "),jd=r(bb,"A",{href:!0,rel:!0});var XC=i(jd);fR=n(XC,"flax.linen.Module"),XC.forEach(t),gR=n(bb,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),bb.forEach(t),_R=p(Bt),ku=r(Bt,"P",{});var YC=i(ku);bR=n(YC,"Finally, this model supports inherent JAX features such as:"),YC.forEach(t),kR=p(Bt),bo=r(Bt,"UL",{});var sr=i(bo);yu=r(sr,"LI",{});var ZC=i(yu);Pd=r(ZC,"A",{href:!0,rel:!0});var ej=i(Pd);yR=n(ej,"Just-In-Time (JIT) compilation"),ej.forEach(t),ZC.forEach(t),vR=p(sr),vu=r(sr,"LI",{});var tj=i(vu);Ad=r(tj,"A",{href:!0,rel:!0});var oj=i(Ad);wR=n(oj,"Automatic Differentiation"),oj.forEach(t),tj.forEach(t),TR=p(sr),wu=r(sr,"LI",{});var nj=i(wu);Ld=r(nj,"A",{href:!0,rel:!0});var sj=i(Ld);$R=n(sj,"Vectorization"),sj.forEach(t),nj.forEach(t),FR=p(sr),Tu=r(sr,"LI",{});var aj=i(Tu);Od=r(aj,"A",{href:!0,rel:!0});var rj=i(Od);xR=n(rj,"Parallelization"),rj.forEach(t),aj.forEach(t),sr.forEach(t),RR=p(Bt),no=r(Bt,"DIV",{class:!0});var ar=i(no);w(Nd.$$.fragment,ar),ER=p(ar),Jn=r(ar,"P",{});var rh=i(Jn);MR=n(rh,"The "),$u=r(rh,"CODE",{});var ij=i($u);zR=n(ij,"FlaxRobertaPreTrainedModel"),ij.forEach(t),qR=n(rh," forward method, overrides the "),Fu=r(rh,"CODE",{});var lj=i(Fu);CR=n(lj,"__call__"),lj.forEach(t),jR=n(rh," special method."),rh.forEach(t),PR=p(ar),w(Ca.$$.fragment,ar),AR=p(ar),w(ja.$$.fragment,ar),ar.forEach(t),Bt.forEach(t),Kg=p(s),Vn=r(s,"H2",{class:!0});var kb=i(Vn);Pa=r(kb,"A",{id:!0,class:!0,href:!0});var dj=i(Pa);xu=r(dj,"SPAN",{});var cj=i(xu);w(Id.$$.fragment,cj),cj.forEach(t),dj.forEach(t),LR=p(kb),Ru=r(kb,"SPAN",{});var pj=i(Ru);OR=n(pj,"FlaxRobertaForMultipleChoice"),pj.forEach(t),kb.forEach(t),Jg=p(s),it=r(s,"DIV",{class:!0});var Wt=i(it);w(Dd.$$.fragment,Wt),NR=p(Wt),Eu=r(Wt,"P",{});var hj=i(Eu);IR=n(hj,`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),hj.forEach(t),DR=p(Wt),Sd=r(Wt,"P",{});var yb=i(Sd);SR=n(yb,"This model inherits from "),Ap=r(yb,"A",{href:!0});var mj=i(Ap);BR=n(mj,"FlaxPreTrainedModel"),mj.forEach(t),WR=n(yb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),yb.forEach(t),UR=p(Wt),Bd=r(Wt,"P",{});var vb=i(Bd);HR=n(vb,"This model is also a Flax Linen "),Wd=r(vb,"A",{href:!0,rel:!0});var uj=i(Wd);QR=n(uj,"flax.linen.Module"),uj.forEach(t),KR=n(vb,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),vb.forEach(t),JR=p(Wt),Mu=r(Wt,"P",{});var fj=i(Mu);VR=n(fj,"Finally, this model supports inherent JAX features such as:"),fj.forEach(t),GR=p(Wt),ko=r(Wt,"UL",{});var rr=i(ko);zu=r(rr,"LI",{});var gj=i(zu);Ud=r(gj,"A",{href:!0,rel:!0});var _j=i(Ud);XR=n(_j,"Just-In-Time (JIT) compilation"),_j.forEach(t),gj.forEach(t),YR=p(rr),qu=r(rr,"LI",{});var bj=i(qu);Hd=r(bj,"A",{href:!0,rel:!0});var kj=i(Hd);ZR=n(kj,"Automatic Differentiation"),kj.forEach(t),bj.forEach(t),eE=p(rr),Cu=r(rr,"LI",{});var yj=i(Cu);Qd=r(yj,"A",{href:!0,rel:!0});var vj=i(Qd);tE=n(vj,"Vectorization"),vj.forEach(t),yj.forEach(t),oE=p(rr),ju=r(rr,"LI",{});var wj=i(ju);Kd=r(wj,"A",{href:!0,rel:!0});var Tj=i(Kd);nE=n(Tj,"Parallelization"),Tj.forEach(t),wj.forEach(t),rr.forEach(t),sE=p(Wt),so=r(Wt,"DIV",{class:!0});var ir=i(so);w(Jd.$$.fragment,ir),aE=p(ir),Gn=r(ir,"P",{});var ih=i(Gn);rE=n(ih,"The "),Pu=r(ih,"CODE",{});var $j=i(Pu);iE=n($j,"FlaxRobertaPreTrainedModel"),$j.forEach(t),lE=n(ih," forward method, overrides the "),Au=r(ih,"CODE",{});var Fj=i(Au);dE=n(Fj,"__call__"),Fj.forEach(t),cE=n(ih," special method."),ih.forEach(t),pE=p(ir),w(Aa.$$.fragment,ir),hE=p(ir),w(La.$$.fragment,ir),ir.forEach(t),Wt.forEach(t),Vg=p(s),Xn=r(s,"H2",{class:!0});var wb=i(Xn);Oa=r(wb,"A",{id:!0,class:!0,href:!0});var xj=i(Oa);Lu=r(xj,"SPAN",{});var Rj=i(Lu);w(Vd.$$.fragment,Rj),Rj.forEach(t),xj.forEach(t),mE=p(wb),Ou=r(wb,"SPAN",{});var Ej=i(Ou);uE=n(Ej,"FlaxRobertaForTokenClassification"),Ej.forEach(t),wb.forEach(t),Gg=p(s),lt=r(s,"DIV",{class:!0});var Ut=i(lt);w(Gd.$$.fragment,Ut),fE=p(Ut),Nu=r(Ut,"P",{});var Mj=i(Nu);gE=n(Mj,`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Mj.forEach(t),_E=p(Ut),Xd=r(Ut,"P",{});var Tb=i(Xd);bE=n(Tb,"This model inherits from "),Lp=r(Tb,"A",{href:!0});var zj=i(Lp);kE=n(zj,"FlaxPreTrainedModel"),zj.forEach(t),yE=n(Tb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Tb.forEach(t),vE=p(Ut),Yd=r(Ut,"P",{});var $b=i(Yd);wE=n($b,"This model is also a Flax Linen "),Zd=r($b,"A",{href:!0,rel:!0});var qj=i(Zd);TE=n(qj,"flax.linen.Module"),qj.forEach(t),$E=n($b,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),$b.forEach(t),FE=p(Ut),Iu=r(Ut,"P",{});var Cj=i(Iu);xE=n(Cj,"Finally, this model supports inherent JAX features such as:"),Cj.forEach(t),RE=p(Ut),yo=r(Ut,"UL",{});var lr=i(yo);Du=r(lr,"LI",{});var jj=i(Du);ec=r(jj,"A",{href:!0,rel:!0});var Pj=i(ec);EE=n(Pj,"Just-In-Time (JIT) compilation"),Pj.forEach(t),jj.forEach(t),ME=p(lr),Su=r(lr,"LI",{});var Aj=i(Su);tc=r(Aj,"A",{href:!0,rel:!0});var Lj=i(tc);zE=n(Lj,"Automatic Differentiation"),Lj.forEach(t),Aj.forEach(t),qE=p(lr),Bu=r(lr,"LI",{});var Oj=i(Bu);oc=r(Oj,"A",{href:!0,rel:!0});var Nj=i(oc);CE=n(Nj,"Vectorization"),Nj.forEach(t),Oj.forEach(t),jE=p(lr),Wu=r(lr,"LI",{});var Ij=i(Wu);nc=r(Ij,"A",{href:!0,rel:!0});var Dj=i(nc);PE=n(Dj,"Parallelization"),Dj.forEach(t),Ij.forEach(t),lr.forEach(t),AE=p(Ut),ao=r(Ut,"DIV",{class:!0});var dr=i(ao);w(sc.$$.fragment,dr),LE=p(dr),Yn=r(dr,"P",{});var lh=i(Yn);OE=n(lh,"The "),Uu=r(lh,"CODE",{});var Sj=i(Uu);NE=n(Sj,"FlaxRobertaPreTrainedModel"),Sj.forEach(t),IE=n(lh," forward method, overrides the "),Hu=r(lh,"CODE",{});var Bj=i(Hu);DE=n(Bj,"__call__"),Bj.forEach(t),SE=n(lh," special method."),lh.forEach(t),BE=p(dr),w(Na.$$.fragment,dr),WE=p(dr),w(Ia.$$.fragment,dr),dr.forEach(t),Ut.forEach(t),Xg=p(s),Zn=r(s,"H2",{class:!0});var Fb=i(Zn);Da=r(Fb,"A",{id:!0,class:!0,href:!0});var Wj=i(Da);Qu=r(Wj,"SPAN",{});var Uj=i(Qu);w(ac.$$.fragment,Uj),Uj.forEach(t),Wj.forEach(t),UE=p(Fb),Ku=r(Fb,"SPAN",{});var Hj=i(Ku);HE=n(Hj,"FlaxRobertaForQuestionAnswering"),Hj.forEach(t),Fb.forEach(t),Yg=p(s),dt=r(s,"DIV",{class:!0});var Ht=i(dt);w(rc.$$.fragment,Ht),QE=p(Ht),es=r(Ht,"P",{});var dh=i(es);KE=n(dh,`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ju=r(dh,"CODE",{});var Qj=i(Ju);JE=n(Qj,"span start logits"),Qj.forEach(t),VE=n(dh," and "),Vu=r(dh,"CODE",{});var Kj=i(Vu);GE=n(Kj,"span end logits"),Kj.forEach(t),XE=n(dh,")."),dh.forEach(t),YE=p(Ht),ic=r(Ht,"P",{});var xb=i(ic);ZE=n(xb,"This model inherits from "),Op=r(xb,"A",{href:!0});var Jj=i(Op);eM=n(Jj,"FlaxPreTrainedModel"),Jj.forEach(t),tM=n(xb,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),xb.forEach(t),oM=p(Ht),lc=r(Ht,"P",{});var Rb=i(lc);nM=n(Rb,"This model is also a Flax Linen "),dc=r(Rb,"A",{href:!0,rel:!0});var Vj=i(dc);sM=n(Vj,"flax.linen.Module"),Vj.forEach(t),aM=n(Rb,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Rb.forEach(t),rM=p(Ht),Gu=r(Ht,"P",{});var Gj=i(Gu);iM=n(Gj,"Finally, this model supports inherent JAX features such as:"),Gj.forEach(t),lM=p(Ht),vo=r(Ht,"UL",{});var cr=i(vo);Xu=r(cr,"LI",{});var Xj=i(Xu);cc=r(Xj,"A",{href:!0,rel:!0});var Yj=i(cc);dM=n(Yj,"Just-In-Time (JIT) compilation"),Yj.forEach(t),Xj.forEach(t),cM=p(cr),Yu=r(cr,"LI",{});var Zj=i(Yu);pc=r(Zj,"A",{href:!0,rel:!0});var e3=i(pc);pM=n(e3,"Automatic Differentiation"),e3.forEach(t),Zj.forEach(t),hM=p(cr),Zu=r(cr,"LI",{});var t3=i(Zu);hc=r(t3,"A",{href:!0,rel:!0});var o3=i(hc);mM=n(o3,"Vectorization"),o3.forEach(t),t3.forEach(t),uM=p(cr),ef=r(cr,"LI",{});var n3=i(ef);mc=r(n3,"A",{href:!0,rel:!0});var s3=i(mc);fM=n(s3,"Parallelization"),s3.forEach(t),n3.forEach(t),cr.forEach(t),gM=p(Ht),ro=r(Ht,"DIV",{class:!0});var pr=i(ro);w(uc.$$.fragment,pr),_M=p(pr),ts=r(pr,"P",{});var ch=i(ts);bM=n(ch,"The "),tf=r(ch,"CODE",{});var a3=i(tf);kM=n(a3,"FlaxRobertaPreTrainedModel"),a3.forEach(t),yM=n(ch," forward method, overrides the "),of=r(ch,"CODE",{});var r3=i(of);vM=n(r3,"__call__"),r3.forEach(t),wM=n(ch," special method."),ch.forEach(t),TM=p(pr),w(Sa.$$.fragment,pr),$M=p(pr),w(Ba.$$.fragment,pr),pr.forEach(t),Ht.forEach(t),this.h()},h(){h(d,"name","hf:doc:metadata"),h(d,"content",JSON.stringify(w5)),h(f,"id","roberta"),h(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(f,"href","#roberta"),h(m,"class","relative group"),h(te,"id","overview"),h(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(te,"href","#overview"),h(N,"class","relative group"),h(pe,"href","https://arxiv.org/abs/1907.11692"),h(pe,"rel","nofollow"),h(j,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertModel"),h(Ue,"href","camembert"),h(Se,"href","https://huggingface.co/julien-c"),h(Se,"rel","nofollow"),h(Be,"href","https://github.com/pytorch/fairseq/tree/master/examples/roberta"),h(Be,"rel","nofollow"),h(W,"id","resources"),h(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(W,"href","#resources"),h(Oe,"class","relative group"),h(mr,"href","https://huggingface.co/blog/sentiment-analysis-twitter"),h(mr,"rel","nofollow"),h(ur,"href","https://huggingface.co/inference-api"),h(ur,"rel","nofollow"),h(gr,"href","https://huggingface.co/blog/opinion-classification-with-kili"),h(gr,"rel","nofollow"),h(br,"href","https://colab.research.google.com/github/DhavalTaunk08/NLP_scripts/blob/master/sentiment_analysis_using_roberta.ipynb"),h(br,"rel","nofollow"),h(zc,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForSequenceClassification"),h(kr,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/text-classification"),h(kr,"rel","nofollow"),h(yr,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/text_classification.ipynb"),h(yr,"rel","nofollow"),h(qc,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForSequenceClassification"),h(vr,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/text-classification"),h(vr,"rel","nofollow"),h(wr,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/text_classification-tf.ipynb"),h(wr,"rel","nofollow"),h(Cc,"href","/docs/transformers/main/en/model_doc/roberta#transformers.FlaxRobertaForSequenceClassification"),h(Tr,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/text-classification"),h(Tr,"rel","nofollow"),h($r,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/text_classification_flax.ipynb"),h($r,"rel","nofollow"),h(jc,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForTokenClassification"),h(xr,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/token-classification"),h(xr,"rel","nofollow"),h(Rr,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/token_classification.ipynb"),h(Rr,"rel","nofollow"),h(Pc,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForTokenClassification"),h(Er,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/token-classification"),h(Er,"rel","nofollow"),h(Mr,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/token_classification-tf.ipynb"),h(Mr,"rel","nofollow"),h(Ac,"href","/docs/transformers/main/en/model_doc/roberta#transformers.FlaxRobertaForTokenClassification"),h(zr,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/token-classification"),h(zr,"rel","nofollow"),h(qr,"href","https://huggingface.co/course/chapter7/2?fw=pt"),h(qr,"rel","nofollow"),h(Pr,"href","https://huggingface.co/blog/how-to-train"),h(Pr,"rel","nofollow"),h(Oc,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForMaskedLM"),h(Ar,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/language-modeling#robertabertdistilbert-and-masked-language-modeling"),h(Ar,"rel","nofollow"),h(Lr,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/language_modeling.ipynb"),h(Lr,"rel","nofollow"),h(Nc,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForMaskedLM"),h(Or,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/language-modeling#run_mlmpy"),h(Or,"rel","nofollow"),h(Nr,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/language_modeling-tf.ipynb"),h(Nr,"rel","nofollow"),h(Ic,"href","/docs/transformers/main/en/model_doc/roberta#transformers.FlaxRobertaForMaskedLM"),h(Ir,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/language-modeling#masked-language-modeling"),h(Ir,"rel","nofollow"),h(Dr,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/masked_language_modeling_flax.ipynb"),h(Dr,"rel","nofollow"),h(Sr,"href","https://huggingface.co/course/chapter7/3?fw=pt"),h(Sr,"rel","nofollow"),h(Ur,"href","https://huggingface.co/blog/optimum-inference"),h(Ur,"rel","nofollow"),h(Sc,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForQuestionAnswering"),h(Hr,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/question-answering"),h(Hr,"rel","nofollow"),h(Qr,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/question_answering.ipynb"),h(Qr,"rel","nofollow"),h(Bc,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForQuestionAnswering"),h(Kr,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/question-answering"),h(Kr,"rel","nofollow"),h(Jr,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/question_answering-tf.ipynb"),h(Jr,"rel","nofollow"),h(Wc,"href","/docs/transformers/main/en/model_doc/roberta#transformers.FlaxRobertaForQuestionAnswering"),h(Vr,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/question-answering"),h(Vr,"rel","nofollow"),h(Gr,"href","https://huggingface.co/course/chapter7/7?fw=pt"),h(Gr,"rel","nofollow"),h(Qc,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForMultipleChoice"),h(Xr,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/multiple-choice"),h(Xr,"rel","nofollow"),h(Yr,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/multiple_choice.ipynb"),h(Yr,"rel","nofollow"),h(Kc,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForMultipleChoice"),h(Zr,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/multiple-choice"),h(Zr,"rel","nofollow"),h(ei,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/multiple_choice-tf.ipynb"),h(ei,"rel","nofollow"),h(is,"id","transformers.RobertaConfig"),h(is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(is,"href","#transformers.RobertaConfig"),h(an,"class","relative group"),h(Jc,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaModel"),h(Vc,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaModel"),h(ni,"href","https://huggingface.co/roberta-base"),h(ni,"rel","nofollow"),h(Gc,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(Xc,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ds,"id","transformers.RobertaTokenizer"),h(ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ds,"href","#transformers.RobertaTokenizer"),h(ln,"class","relative group"),h(Yc,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(Oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(hs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ms,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(tp,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(us,"id","transformers.RobertaTokenizerFast"),h(us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(us,"href","#transformers.RobertaTokenizerFast"),h(dn,"class","relative group"),h(op,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),h(np,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(_s,"id","transformers.RobertaModel"),h(_s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(_s,"href","#transformers.RobertaModel"),h(cn,"class","relative group"),h(sp,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h($i,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h($i,"rel","nofollow"),h(xi,"href","https://arxiv.org/abs/1706.03762"),h(xi,"rel","nofollow"),h(ap,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaModel"),h(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(vs,"id","transformers.RobertaForCausalLM"),h(vs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(vs,"href","#transformers.RobertaForCausalLM"),h(hn,"class","relative group"),h(rp,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(ji,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(ji,"rel","nofollow"),h(ip,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForCausalLM"),h(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h($s,"id","transformers.RobertaForMaskedLM"),h($s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h($s,"href","#transformers.RobertaForMaskedLM"),h(un,"class","relative group"),h(lp,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Di,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Di,"rel","nofollow"),h(dp,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForMaskedLM"),h(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Es,"id","transformers.RobertaForSequenceClassification"),h(Es,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Es,"href","#transformers.RobertaForSequenceClassification"),h(gn,"class","relative group"),h(cp,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Qi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Qi,"rel","nofollow"),h(pp,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForSequenceClassification"),h(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ps,"id","transformers.RobertaForMultipleChoice"),h(Ps,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ps,"href","#transformers.RobertaForMultipleChoice"),h(bn,"class","relative group"),h(hp,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Yi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Yi,"rel","nofollow"),h(mp,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForMultipleChoice"),h(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Os,"id","transformers.RobertaForTokenClassification"),h(Os,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Os,"href","#transformers.RobertaForTokenClassification"),h(yn,"class","relative group"),h(up,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(sl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(sl,"rel","nofollow"),h(fp,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForTokenClassification"),h(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ss,"id","transformers.RobertaForQuestionAnswering"),h(Ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ss,"href","#transformers.RobertaForQuestionAnswering"),h(wn,"class","relative group"),h(gp,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(cl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(cl,"rel","nofollow"),h(_p,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForQuestionAnswering"),h(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Hs,"id","transformers.TFRobertaModel"),h(Hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Hs,"href","#transformers.TFRobertaModel"),h(Fn,"class","relative group"),h(bp,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(gl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(gl,"rel","nofollow"),h(kp,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaModel"),h(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Vs,"id","transformers.TFRobertaForCausalLM"),h(Vs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Vs,"href","#transformers.TFRobertaForCausalLM"),h(Rn,"class","relative group"),h(yp,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForCausalLM"),h(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(En,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ys,"id","transformers.TFRobertaForMaskedLM"),h(Ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ys,"href","#transformers.TFRobertaForMaskedLM"),h(zn,"class","relative group"),h(vp,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(xl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(xl,"rel","nofollow"),h(wp,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForMaskedLM"),h(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(na,"id","transformers.TFRobertaForSequenceClassification"),h(na,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(na,"href","#transformers.TFRobertaForSequenceClassification"),h(Cn,"class","relative group"),h(Tp,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Cl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Cl,"rel","nofollow"),h($p,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForSequenceClassification"),h(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(la,"id","transformers.TFRobertaForMultipleChoice"),h(la,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(la,"href","#transformers.TFRobertaForMultipleChoice"),h(Pn,"class","relative group"),h(Fp,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Nl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Nl,"rel","nofollow"),h(xp,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForMultipleChoice"),h(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ha,"id","transformers.TFRobertaForTokenClassification"),h(ha,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ha,"href","#transformers.TFRobertaForTokenClassification"),h(Ln,"class","relative group"),h(Rp,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Ul,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Ul,"rel","nofollow"),h(Ep,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForTokenClassification"),h(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(_a,"id","transformers.TFRobertaForQuestionAnswering"),h(_a,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(_a,"href","#transformers.TFRobertaForQuestionAnswering"),h(Nn,"class","relative group"),h(Mp,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Gl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Gl,"rel","nofollow"),h(zp,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForQuestionAnswering"),h(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(wa,"id","transformers.FlaxRobertaModel"),h(wa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(wa,"href","#transformers.FlaxRobertaModel"),h(Sn,"class","relative group"),h(qp,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(od,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),h(od,"rel","nofollow"),h(nd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(nd,"rel","nofollow"),h(sd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(sd,"rel","nofollow"),h(ad,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(ad,"rel","nofollow"),h(rd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(rd,"rel","nofollow"),h(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Fa,"id","transformers.FlaxRobertaForCausalLM"),h(Fa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Fa,"href","#transformers.FlaxRobertaForCausalLM"),h(Wn,"class","relative group"),h(Cp,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(hd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),h(hd,"rel","nofollow"),h(md,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(md,"rel","nofollow"),h(ud,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(ud,"rel","nofollow"),h(fd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(fd,"rel","nofollow"),h(gd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(gd,"rel","nofollow"),h(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ea,"id","transformers.FlaxRobertaForMaskedLM"),h(Ea,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ea,"href","#transformers.FlaxRobertaForMaskedLM"),h(Hn,"class","relative group"),h(jp,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(Td,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),h(Td,"rel","nofollow"),h($d,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h($d,"rel","nofollow"),h(Fd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(Fd,"rel","nofollow"),h(xd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(xd,"rel","nofollow"),h(Rd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(Rd,"rel","nofollow"),h(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(qa,"id","transformers.FlaxRobertaForSequenceClassification"),h(qa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(qa,"href","#transformers.FlaxRobertaForSequenceClassification"),h(Kn,"class","relative group"),h(Pp,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(jd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),h(jd,"rel","nofollow"),h(Pd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(Pd,"rel","nofollow"),h(Ad,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(Ad,"rel","nofollow"),h(Ld,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(Ld,"rel","nofollow"),h(Od,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(Od,"rel","nofollow"),h(no,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Pa,"id","transformers.FlaxRobertaForMultipleChoice"),h(Pa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Pa,"href","#transformers.FlaxRobertaForMultipleChoice"),h(Vn,"class","relative group"),h(Ap,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(Wd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),h(Wd,"rel","nofollow"),h(Ud,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(Ud,"rel","nofollow"),h(Hd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(Hd,"rel","nofollow"),h(Qd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(Qd,"rel","nofollow"),h(Kd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(Kd,"rel","nofollow"),h(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Oa,"id","transformers.FlaxRobertaForTokenClassification"),h(Oa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Oa,"href","#transformers.FlaxRobertaForTokenClassification"),h(Xn,"class","relative group"),h(Lp,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(Zd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),h(Zd,"rel","nofollow"),h(ec,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(ec,"rel","nofollow"),h(tc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(tc,"rel","nofollow"),h(oc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(oc,"rel","nofollow"),h(nc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(nc,"rel","nofollow"),h(ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Da,"id","transformers.FlaxRobertaForQuestionAnswering"),h(Da,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Da,"href","#transformers.FlaxRobertaForQuestionAnswering"),h(Zn,"class","relative group"),h(Op,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),h(dc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),h(dc,"rel","nofollow"),h(cc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),h(cc,"rel","nofollow"),h(pc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),h(pc,"rel","nofollow"),h(hc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),h(hc,"rel","nofollow"),h(mc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),h(mc,"rel","nofollow"),h(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,g){e(document.head,d),b(s,_,g),b(s,m,g),e(m,f),e(f,k),T(l,k,null),e(m,u),e(m,E),e(E,le),b(s,Z,g),b(s,N,g),e(N,te),e(te,oe),T(M,oe,null),e(N,we),e(N,K),e(K,Te),b(s,ge,g),b(s,B,g),e(B,$e),e(B,pe),e(pe,J),e(B,Fe),b(s,_e,g),b(s,U,g),e(U,xe),b(s,be,g),b(s,H,g),e(H,Re),b(s,ke,g),b(s,ee,g),e(ee,C),e(C,P),b(s,ye,g),b(s,Q,g),e(Q,Ee),b(s,ve,g),b(s,I,g),e(I,he),e(he,Me),e(he,j),e(j,ze),e(he,V),e(I,qe),e(I,me),e(me,G),e(I,Ce),e(I,ne),e(ne,D),e(ne,ue),e(ue,X),e(ne,je),e(ne,se),e(se,A),e(ne,Pe),e(ne,L),e(L,Ae),e(ne,Le),e(I,y),e(I,z),e(z,Ue),e(Ue,de),e(z,Xe),b(s,Ke,g),b(s,q,g),e(q,Ye),e(q,Se),e(Se,Ze),e(q,et),e(q,Be),e(Be,S),e(q,Y),b(s,Je,g),b(s,Oe,g),e(Oe,W),e(W,He),T(We,He,null),e(Oe,Ne),e(Oe,Qe),e(Qe,ce),b(s,Ve,g),b(s,Mc,g),e(Mc,Mb),b(s,Vf,g),T(hr,s,g),b(s,Gf,g),b(s,bt,g),e(bt,sn),e(sn,zb),e(sn,mr),e(mr,qb),e(sn,Cb),e(sn,ur),e(ur,jb),e(sn,Pb),e(bt,Ab),e(bt,fr),e(fr,Lb),e(fr,gr),e(gr,Ob),e(fr,Nb),e(bt,Ib),e(bt,_r),e(_r,Db),e(_r,br),e(br,Sb),e(_r,Bb),e(bt,Wb),e(bt,Fo),e(Fo,zc),e(zc,Ub),e(Fo,Hb),e(Fo,kr),e(kr,Qb),e(Fo,Kb),e(Fo,yr),e(yr,Jb),e(Fo,Vb),e(bt,Gb),e(bt,xo),e(xo,qc),e(qc,Xb),e(xo,Yb),e(xo,vr),e(vr,Zb),e(xo,ek),e(xo,wr),e(wr,tk),e(xo,ok),e(bt,nk),e(bt,Ro),e(Ro,Cc),e(Cc,sk),e(Ro,ak),e(Ro,Tr),e(Tr,rk),e(Ro,ik),e(Ro,$r),e($r,lk),e(Ro,dk),b(s,Xf,g),T(Fr,s,g),b(s,Yf,g),b(s,Kt,g),e(Kt,Eo),e(Eo,jc),e(jc,ck),e(Eo,pk),e(Eo,xr),e(xr,hk),e(Eo,mk),e(Eo,Rr),e(Rr,uk),e(Eo,fk),e(Kt,gk),e(Kt,Mo),e(Mo,Pc),e(Pc,_k),e(Mo,bk),e(Mo,Er),e(Er,kk),e(Mo,yk),e(Mo,Mr),e(Mr,vk),e(Mo,wk),e(Kt,Tk),e(Kt,ss),e(ss,Ac),e(Ac,$k),e(ss,Fk),e(ss,zr),e(zr,xk),e(ss,Rk),e(Kt,Ek),e(Kt,Lc),e(Lc,qr),e(qr,Mk),e(Lc,zk),b(s,Zf,g),T(Cr,s,g),b(s,eg,g),b(s,Et,g),e(Et,jr),e(jr,qk),e(jr,Pr),e(Pr,Ck),e(jr,jk),e(Et,Pk),e(Et,zo),e(zo,Oc),e(Oc,Ak),e(zo,Lk),e(zo,Ar),e(Ar,Ok),e(zo,Nk),e(zo,Lr),e(Lr,Ik),e(zo,Dk),e(Et,Sk),e(Et,qo),e(qo,Nc),e(Nc,Bk),e(qo,Wk),e(qo,Or),e(Or,Uk),e(qo,Hk),e(qo,Nr),e(Nr,Qk),e(qo,Kk),e(Et,Jk),e(Et,Co),e(Co,Ic),e(Ic,Vk),e(Co,Gk),e(Co,Ir),e(Ir,Xk),e(Co,Yk),e(Co,Dr),e(Dr,Zk),e(Co,ey),e(Et,ty),e(Et,Dc),e(Dc,Sr),e(Sr,oy),e(Dc,ny),b(s,tg,g),T(Br,s,g),b(s,og,g),b(s,Mt,g),e(Mt,Wr),e(Wr,sy),e(Wr,Ur),e(Ur,ay),e(Wr,ry),e(Mt,iy),e(Mt,jo),e(jo,Sc),e(Sc,ly),e(jo,dy),e(jo,Hr),e(Hr,cy),e(jo,py),e(jo,Qr),e(Qr,hy),e(jo,my),e(Mt,uy),e(Mt,Po),e(Po,Bc),e(Bc,fy),e(Po,gy),e(Po,Kr),e(Kr,_y),e(Po,by),e(Po,Jr),e(Jr,ky),e(Po,yy),e(Mt,vy),e(Mt,as),e(as,Wc),e(Wc,wy),e(as,Ty),e(as,Vr),e(Vr,$y),e(as,Fy),e(Mt,xy),e(Mt,Uc),e(Uc,Gr),e(Gr,Ry),e(Uc,Ey),b(s,ng,g),b(s,Hc,g),e(Hc,ph),e(ph,My),b(s,sg,g),b(s,rs,g),e(rs,Ao),e(Ao,Qc),e(Qc,zy),e(Ao,qy),e(Ao,Xr),e(Xr,Cy),e(Ao,jy),e(Ao,Yr),e(Yr,Py),e(Ao,Ay),e(rs,Ly),e(rs,Lo),e(Lo,Kc),e(Kc,Oy),e(Lo,Ny),e(Lo,Zr),e(Zr,Iy),e(Lo,Dy),e(Lo,ei),e(ei,Sy),e(Lo,By),b(s,ag,g),b(s,an,g),e(an,is),e(is,hh),T(ti,hh,null),e(an,Wy),e(an,mh),e(mh,Uy),b(s,rg,g),b(s,Qt,g),T(oi,Qt,null),e(Qt,Hy),e(Qt,uo),e(uo,Qy),e(uo,Jc),e(Jc,Ky),e(uo,Jy),e(uo,Vc),e(Vc,Vy),e(uo,Gy),e(uo,ni),e(ni,Xy),e(uo,Yy),e(Qt,Zy),e(Qt,rn),e(rn,ev),e(rn,Gc),e(Gc,tv),e(rn,ov),e(rn,Xc),e(Xc,nv),e(rn,sv),e(Qt,av),T(ls,Qt,null),b(s,ig,g),b(s,ln,g),e(ln,ds),e(ds,uh),T(si,uh,null),e(ln,rv),e(ln,fh),e(fh,iv),b(s,lg,g),b(s,Ie,g),T(ai,Ie,null),e(Ie,lv),e(Ie,gh),e(gh,dv),e(Ie,cv),e(Ie,_h),e(_h,pv),e(Ie,hv),T(cs,Ie,null),e(Ie,mv),e(Ie,ri),e(ri,uv),e(ri,bh),e(bh,fv),e(ri,gv),e(Ie,_v),T(ps,Ie,null),e(Ie,bv),e(Ie,ii),e(ii,kv),e(ii,Yc),e(Yc,yv),e(ii,vv),e(Ie,wv),e(Ie,Oo),T(li,Oo,null),e(Oo,Tv),e(Oo,kh),e(kh,$v),e(Oo,Fv),e(Oo,di),e(di,Zc),e(Zc,xv),e(Zc,yh),e(yh,Rv),e(di,Ev),e(di,ep),e(ep,Mv),e(ep,vh),e(vh,zv),e(Ie,qv),e(Ie,hs),T(ci,hs,null),e(hs,Cv),e(hs,pi),e(pi,jv),e(pi,wh),e(wh,Pv),e(pi,Av),e(Ie,Lv),e(Ie,ms),T(hi,ms,null),e(ms,Ov),e(ms,Th),e(Th,Nv),e(Ie,Iv),e(Ie,tp),T(mi,tp,null),b(s,dg,g),b(s,dn,g),e(dn,us),e(us,$h),T(ui,$h,null),e(dn,Dv),e(dn,Fh),e(Fh,Sv),b(s,cg,g),b(s,tt,g),T(fi,tt,null),e(tt,Bv),e(tt,gi),e(gi,Wv),e(gi,xh),e(xh,Uv),e(gi,Hv),e(tt,Qv),e(tt,Rh),e(Rh,Kv),e(tt,Jv),T(fs,tt,null),e(tt,Vv),e(tt,_i),e(_i,Gv),e(_i,Eh),e(Eh,Xv),e(_i,Yv),e(tt,Zv),T(gs,tt,null),e(tt,ew),e(tt,bi),e(bi,tw),e(bi,op),e(op,ow),e(bi,nw),e(tt,sw),e(tt,np),T(ki,np,null),b(s,pg,g),b(s,cn,g),e(cn,_s),e(_s,Mh),T(yi,Mh,null),e(cn,aw),e(cn,zh),e(zh,rw),b(s,hg,g),b(s,ot,g),T(vi,ot,null),e(ot,iw),e(ot,qh),e(qh,lw),e(ot,dw),e(ot,wi),e(wi,cw),e(wi,sp),e(sp,pw),e(wi,hw),e(ot,mw),e(ot,Ti),e(Ti,uw),e(Ti,$i),e($i,fw),e(Ti,gw),e(ot,_w),e(ot,Fi),e(Fi,bw),e(Fi,Ch),e(Ch,kw),e(Fi,yw),e(ot,vw),e(ot,pt),e(pt,ww),e(pt,jh),e(jh,Tw),e(pt,$w),e(pt,Ph),e(Ph,Fw),e(pt,xw),e(pt,Ah),e(Ah,Rw),e(pt,Ew),e(pt,Lh),e(Lh,Mw),e(pt,zw),e(pt,Oh),e(Oh,qw),e(pt,Cw),e(pt,Nh),e(Nh,jw),e(pt,Pw),e(ot,Aw),e(ot,bs),e(bs,Lw),e(bs,Ih),e(Ih,Ow),e(bs,Nw),e(bs,xi),e(xi,Iw),e(ot,Dw),e(ot,Jt),T(Ri,Jt,null),e(Jt,Sw),e(Jt,pn),e(pn,Bw),e(pn,ap),e(ap,Ww),e(pn,Uw),e(pn,Dh),e(Dh,Hw),e(pn,Qw),e(Jt,Kw),T(ks,Jt,null),e(Jt,Jw),T(ys,Jt,null),b(s,mg,g),b(s,hn,g),e(hn,vs),e(vs,Sh),T(Ei,Sh,null),e(hn,Vw),e(hn,Bh),e(Bh,Gw),b(s,ug,g),b(s,vt,g),T(Mi,vt,null),e(vt,Xw),e(vt,zi),e(zi,Yw),e(zi,Wh),e(Wh,Zw),e(zi,eT),e(vt,tT),e(vt,qi),e(qi,oT),e(qi,rp),e(rp,nT),e(qi,sT),e(vt,aT),e(vt,Ci),e(Ci,rT),e(Ci,ji),e(ji,iT),e(Ci,lT),e(vt,dT),e(vt,Vt),T(Pi,Vt,null),e(Vt,cT),e(Vt,mn),e(mn,pT),e(mn,ip),e(ip,hT),e(mn,mT),e(mn,Uh),e(Uh,uT),e(mn,fT),e(Vt,gT),T(ws,Vt,null),e(Vt,_T),T(Ts,Vt,null),b(s,fg,g),b(s,un,g),e(un,$s),e($s,Hh),T(Ai,Hh,null),e(un,bT),e(un,Qh),e(Qh,kT),b(s,gg,g),b(s,wt,g),T(Li,wt,null),e(wt,yT),e(wt,Oi),e(Oi,vT),e(Oi,Kh),e(Kh,wT),e(Oi,TT),e(wt,$T),e(wt,Ni),e(Ni,FT),e(Ni,lp),e(lp,xT),e(Ni,RT),e(wt,ET),e(wt,Ii),e(Ii,MT),e(Ii,Di),e(Di,zT),e(Ii,qT),e(wt,CT),e(wt,zt),T(Si,zt,null),e(zt,jT),e(zt,fn),e(fn,PT),e(fn,dp),e(dp,AT),e(fn,LT),e(fn,Jh),e(Jh,OT),e(fn,NT),e(zt,IT),T(Fs,zt,null),e(zt,DT),T(xs,zt,null),e(zt,ST),T(Rs,zt,null),b(s,_g,g),b(s,gn,g),e(gn,Es),e(Es,Vh),T(Bi,Vh,null),e(gn,BT),e(gn,Gh),e(Gh,WT),b(s,bg,g),b(s,Tt,g),T(Wi,Tt,null),e(Tt,UT),e(Tt,Xh),e(Xh,HT),e(Tt,QT),e(Tt,Ui),e(Ui,KT),e(Ui,cp),e(cp,JT),e(Ui,VT),e(Tt,GT),e(Tt,Hi),e(Hi,XT),e(Hi,Qi),e(Qi,YT),e(Hi,ZT),e(Tt,e$),e(Tt,ct),T(Ki,ct,null),e(ct,t$),e(ct,_n),e(_n,o$),e(_n,pp),e(pp,n$),e(_n,s$),e(_n,Yh),e(Yh,a$),e(_n,r$),e(ct,i$),T(Ms,ct,null),e(ct,l$),T(zs,ct,null),e(ct,d$),T(qs,ct,null),e(ct,c$),T(Cs,ct,null),e(ct,p$),T(js,ct,null),b(s,kg,g),b(s,bn,g),e(bn,Ps),e(Ps,Zh),T(Ji,Zh,null),e(bn,h$),e(bn,em),e(em,m$),b(s,yg,g),b(s,$t,g),T(Vi,$t,null),e($t,u$),e($t,tm),e(tm,f$),e($t,g$),e($t,Gi),e(Gi,_$),e(Gi,hp),e(hp,b$),e(Gi,k$),e($t,y$),e($t,Xi),e(Xi,v$),e(Xi,Yi),e(Yi,w$),e(Xi,T$),e($t,$$),e($t,Gt),T(Zi,Gt,null),e(Gt,F$),e(Gt,kn),e(kn,x$),e(kn,mp),e(mp,R$),e(kn,E$),e(kn,om),e(om,M$),e(kn,z$),e(Gt,q$),T(As,Gt,null),e(Gt,C$),T(Ls,Gt,null),b(s,vg,g),b(s,yn,g),e(yn,Os),e(Os,nm),T(el,nm,null),e(yn,j$),e(yn,sm),e(sm,P$),b(s,wg,g),b(s,Ft,g),T(tl,Ft,null),e(Ft,A$),e(Ft,am),e(am,L$),e(Ft,O$),e(Ft,ol),e(ol,N$),e(ol,up),e(up,I$),e(ol,D$),e(Ft,S$),e(Ft,nl),e(nl,B$),e(nl,sl),e(sl,W$),e(nl,U$),e(Ft,H$),e(Ft,qt),T(al,qt,null),e(qt,Q$),e(qt,vn),e(vn,K$),e(vn,fp),e(fp,J$),e(vn,V$),e(vn,rm),e(rm,G$),e(vn,X$),e(qt,Y$),T(Ns,qt,null),e(qt,Z$),T(Is,qt,null),e(qt,e1),T(Ds,qt,null),b(s,Tg,g),b(s,wn,g),e(wn,Ss),e(Ss,im),T(rl,im,null),e(wn,t1),e(wn,lm),e(lm,o1),b(s,$g,g),b(s,xt,g),T(il,xt,null),e(xt,n1),e(xt,Tn),e(Tn,s1),e(Tn,dm),e(dm,a1),e(Tn,r1),e(Tn,cm),e(cm,i1),e(Tn,l1),e(xt,d1),e(xt,ll),e(ll,c1),e(ll,gp),e(gp,p1),e(ll,h1),e(xt,m1),e(xt,dl),e(dl,u1),e(dl,cl),e(cl,f1),e(dl,g1),e(xt,_1),e(xt,Ct),T(pl,Ct,null),e(Ct,b1),e(Ct,$n),e($n,k1),e($n,_p),e(_p,y1),e($n,v1),e($n,pm),e(pm,w1),e($n,T1),e(Ct,$1),T(Bs,Ct,null),e(Ct,F1),T(Ws,Ct,null),e(Ct,x1),T(Us,Ct,null),b(s,Fg,g),b(s,Fn,g),e(Fn,Hs),e(Hs,hm),T(hl,hm,null),e(Fn,R1),e(Fn,mm),e(mm,E1),b(s,xg,g),b(s,ht,g),T(ml,ht,null),e(ht,M1),e(ht,um),e(um,z1),e(ht,q1),e(ht,ul),e(ul,C1),e(ul,bp),e(bp,j1),e(ul,P1),e(ht,A1),e(ht,fl),e(fl,L1),e(fl,gl),e(gl,O1),e(fl,N1),e(ht,I1),T(Qs,ht,null),e(ht,D1),e(ht,Xt),T(_l,Xt,null),e(Xt,S1),e(Xt,xn),e(xn,B1),e(xn,kp),e(kp,W1),e(xn,U1),e(xn,fm),e(fm,H1),e(xn,Q1),e(Xt,K1),T(Ks,Xt,null),e(Xt,J1),T(Js,Xt,null),b(s,Rg,g),b(s,Rn,g),e(Rn,Vs),e(Vs,gm),T(bl,gm,null),e(Rn,V1),e(Rn,_m),e(_m,G1),b(s,Eg,g),b(s,En,g),T(kl,En,null),e(En,X1),e(En,Yt),T(yl,Yt,null),e(Yt,Y1),e(Yt,Mn),e(Mn,Z1),e(Mn,yp),e(yp,e2),e(Mn,t2),e(Mn,bm),e(bm,o2),e(Mn,n2),e(Yt,s2),T(Gs,Yt,null),e(Yt,a2),T(Xs,Yt,null),b(s,Mg,g),b(s,zn,g),e(zn,Ys),e(Ys,km),T(vl,km,null),e(zn,r2),e(zn,ym),e(ym,i2),b(s,zg,g),b(s,mt,g),T(wl,mt,null),e(mt,l2),e(mt,Tl),e(Tl,d2),e(Tl,vm),e(vm,c2),e(Tl,p2),e(mt,h2),e(mt,$l),e($l,m2),e($l,vp),e(vp,u2),e($l,f2),e(mt,g2),e(mt,Fl),e(Fl,_2),e(Fl,xl),e(xl,b2),e(Fl,k2),e(mt,y2),T(Zs,mt,null),e(mt,v2),e(mt,jt),T(Rl,jt,null),e(jt,w2),e(jt,qn),e(qn,T2),e(qn,wp),e(wp,$2),e(qn,F2),e(qn,wm),e(wm,x2),e(qn,R2),e(jt,E2),T(ea,jt,null),e(jt,M2),T(ta,jt,null),e(jt,z2),T(oa,jt,null),b(s,qg,g),b(s,Cn,g),e(Cn,na),e(na,Tm),T(El,Tm,null),e(Cn,q2),e(Cn,$m),e($m,C2),b(s,Cg,g),b(s,ut,g),T(Ml,ut,null),e(ut,j2),e(ut,Fm),e(Fm,P2),e(ut,A2),e(ut,zl),e(zl,L2),e(zl,Tp),e(Tp,O2),e(zl,N2),e(ut,I2),e(ut,ql),e(ql,D2),e(ql,Cl),e(Cl,S2),e(ql,B2),e(ut,W2),T(sa,ut,null),e(ut,U2),e(ut,Pt),T(jl,Pt,null),e(Pt,H2),e(Pt,jn),e(jn,Q2),e(jn,$p),e($p,K2),e(jn,J2),e(jn,xm),e(xm,V2),e(jn,G2),e(Pt,X2),T(aa,Pt,null),e(Pt,Y2),T(ra,Pt,null),e(Pt,Z2),T(ia,Pt,null),b(s,jg,g),b(s,Pn,g),e(Pn,la),e(la,Rm),T(Pl,Rm,null),e(Pn,eF),e(Pn,Em),e(Em,tF),b(s,Pg,g),b(s,ft,g),T(Al,ft,null),e(ft,oF),e(ft,Mm),e(Mm,nF),e(ft,sF),e(ft,Ll),e(Ll,aF),e(Ll,Fp),e(Fp,rF),e(Ll,iF),e(ft,lF),e(ft,Ol),e(Ol,dF),e(Ol,Nl),e(Nl,cF),e(Ol,pF),e(ft,hF),T(da,ft,null),e(ft,mF),e(ft,Zt),T(Il,Zt,null),e(Zt,uF),e(Zt,An),e(An,fF),e(An,xp),e(xp,gF),e(An,_F),e(An,zm),e(zm,bF),e(An,kF),e(Zt,yF),T(ca,Zt,null),e(Zt,vF),T(pa,Zt,null),b(s,Ag,g),b(s,Ln,g),e(Ln,ha),e(ha,qm),T(Dl,qm,null),e(Ln,wF),e(Ln,Cm),e(Cm,TF),b(s,Lg,g),b(s,gt,g),T(Sl,gt,null),e(gt,$F),e(gt,jm),e(jm,FF),e(gt,xF),e(gt,Bl),e(Bl,RF),e(Bl,Rp),e(Rp,EF),e(Bl,MF),e(gt,zF),e(gt,Wl),e(Wl,qF),e(Wl,Ul),e(Ul,CF),e(Wl,jF),e(gt,PF),T(ma,gt,null),e(gt,AF),e(gt,At),T(Hl,At,null),e(At,LF),e(At,On),e(On,OF),e(On,Ep),e(Ep,NF),e(On,IF),e(On,Pm),e(Pm,DF),e(On,SF),e(At,BF),T(ua,At,null),e(At,WF),T(fa,At,null),e(At,UF),T(ga,At,null),b(s,Og,g),b(s,Nn,g),e(Nn,_a),e(_a,Am),T(Ql,Am,null),e(Nn,HF),e(Nn,Lm),e(Lm,QF),b(s,Ng,g),b(s,_t,g),T(Kl,_t,null),e(_t,KF),e(_t,In),e(In,JF),e(In,Om),e(Om,VF),e(In,GF),e(In,Nm),e(Nm,XF),e(In,YF),e(_t,ZF),e(_t,Jl),e(Jl,e0),e(Jl,Mp),e(Mp,t0),e(Jl,o0),e(_t,n0),e(_t,Vl),e(Vl,s0),e(Vl,Gl),e(Gl,a0),e(Vl,r0),e(_t,i0),T(ba,_t,null),e(_t,l0),e(_t,Lt),T(Xl,Lt,null),e(Lt,d0),e(Lt,Dn),e(Dn,c0),e(Dn,zp),e(zp,p0),e(Dn,h0),e(Dn,Im),e(Im,m0),e(Dn,u0),e(Lt,f0),T(ka,Lt,null),e(Lt,g0),T(ya,Lt,null),e(Lt,_0),T(va,Lt,null),b(s,Ig,g),b(s,Sn,g),e(Sn,wa),e(wa,Dm),T(Yl,Dm,null),e(Sn,b0),e(Sn,Sm),e(Sm,k0),b(s,Dg,g),b(s,nt,g),T(Zl,nt,null),e(nt,y0),e(nt,Bm),e(Bm,v0),e(nt,w0),e(nt,ed),e(ed,T0),e(ed,qp),e(qp,$0),e(ed,F0),e(nt,x0),e(nt,td),e(td,R0),e(td,od),e(od,E0),e(td,M0),e(nt,z0),e(nt,Wm),e(Wm,q0),e(nt,C0),e(nt,fo),e(fo,Um),e(Um,nd),e(nd,j0),e(fo,P0),e(fo,Hm),e(Hm,sd),e(sd,A0),e(fo,L0),e(fo,Qm),e(Qm,ad),e(ad,O0),e(fo,N0),e(fo,Km),e(Km,rd),e(rd,I0),e(nt,D0),e(nt,eo),T(id,eo,null),e(eo,S0),e(eo,Bn),e(Bn,B0),e(Bn,Jm),e(Jm,W0),e(Bn,U0),e(Bn,Vm),e(Vm,H0),e(Bn,Q0),e(eo,K0),T(Ta,eo,null),e(eo,J0),T($a,eo,null),b(s,Sg,g),b(s,Wn,g),e(Wn,Fa),e(Fa,Gm),T(ld,Gm,null),e(Wn,V0),e(Wn,Xm),e(Xm,G0),b(s,Bg,g),b(s,st,g),T(dd,st,null),e(st,X0),e(st,Ym),e(Ym,Y0),e(st,Z0),e(st,cd),e(cd,ex),e(cd,Cp),e(Cp,tx),e(cd,ox),e(st,nx),e(st,pd),e(pd,sx),e(pd,hd),e(hd,ax),e(pd,rx),e(st,ix),e(st,Zm),e(Zm,lx),e(st,dx),e(st,go),e(go,eu),e(eu,md),e(md,cx),e(go,px),e(go,tu),e(tu,ud),e(ud,hx),e(go,mx),e(go,ou),e(ou,fd),e(fd,ux),e(go,fx),e(go,nu),e(nu,gd),e(gd,gx),e(st,_x),e(st,to),T(_d,to,null),e(to,bx),e(to,Un),e(Un,kx),e(Un,su),e(su,yx),e(Un,vx),e(Un,au),e(au,wx),e(Un,Tx),e(to,$x),T(xa,to,null),e(to,Fx),T(Ra,to,null),b(s,Wg,g),b(s,Hn,g),e(Hn,Ea),e(Ea,ru),T(bd,ru,null),e(Hn,xx),e(Hn,iu),e(iu,Rx),b(s,Ug,g),b(s,at,g),T(kd,at,null),e(at,Ex),e(at,yd),e(yd,Mx),e(yd,lu),e(lu,zx),e(yd,qx),e(at,Cx),e(at,vd),e(vd,jx),e(vd,jp),e(jp,Px),e(vd,Ax),e(at,Lx),e(at,wd),e(wd,Ox),e(wd,Td),e(Td,Nx),e(wd,Ix),e(at,Dx),e(at,du),e(du,Sx),e(at,Bx),e(at,_o),e(_o,cu),e(cu,$d),e($d,Wx),e(_o,Ux),e(_o,pu),e(pu,Fd),e(Fd,Hx),e(_o,Qx),e(_o,hu),e(hu,xd),e(xd,Kx),e(_o,Jx),e(_o,mu),e(mu,Rd),e(Rd,Vx),e(at,Gx),e(at,oo),T(Ed,oo,null),e(oo,Xx),e(oo,Qn),e(Qn,Yx),e(Qn,uu),e(uu,Zx),e(Qn,eR),e(Qn,fu),e(fu,tR),e(Qn,oR),e(oo,nR),T(Ma,oo,null),e(oo,sR),T(za,oo,null),b(s,Hg,g),b(s,Kn,g),e(Kn,qa),e(qa,gu),T(Md,gu,null),e(Kn,aR),e(Kn,_u),e(_u,rR),b(s,Qg,g),b(s,rt,g),T(zd,rt,null),e(rt,iR),e(rt,bu),e(bu,lR),e(rt,dR),e(rt,qd),e(qd,cR),e(qd,Pp),e(Pp,pR),e(qd,hR),e(rt,mR),e(rt,Cd),e(Cd,uR),e(Cd,jd),e(jd,fR),e(Cd,gR),e(rt,_R),e(rt,ku),e(ku,bR),e(rt,kR),e(rt,bo),e(bo,yu),e(yu,Pd),e(Pd,yR),e(bo,vR),e(bo,vu),e(vu,Ad),e(Ad,wR),e(bo,TR),e(bo,wu),e(wu,Ld),e(Ld,$R),e(bo,FR),e(bo,Tu),e(Tu,Od),e(Od,xR),e(rt,RR),e(rt,no),T(Nd,no,null),e(no,ER),e(no,Jn),e(Jn,MR),e(Jn,$u),e($u,zR),e(Jn,qR),e(Jn,Fu),e(Fu,CR),e(Jn,jR),e(no,PR),T(Ca,no,null),e(no,AR),T(ja,no,null),b(s,Kg,g),b(s,Vn,g),e(Vn,Pa),e(Pa,xu),T(Id,xu,null),e(Vn,LR),e(Vn,Ru),e(Ru,OR),b(s,Jg,g),b(s,it,g),T(Dd,it,null),e(it,NR),e(it,Eu),e(Eu,IR),e(it,DR),e(it,Sd),e(Sd,SR),e(Sd,Ap),e(Ap,BR),e(Sd,WR),e(it,UR),e(it,Bd),e(Bd,HR),e(Bd,Wd),e(Wd,QR),e(Bd,KR),e(it,JR),e(it,Mu),e(Mu,VR),e(it,GR),e(it,ko),e(ko,zu),e(zu,Ud),e(Ud,XR),e(ko,YR),e(ko,qu),e(qu,Hd),e(Hd,ZR),e(ko,eE),e(ko,Cu),e(Cu,Qd),e(Qd,tE),e(ko,oE),e(ko,ju),e(ju,Kd),e(Kd,nE),e(it,sE),e(it,so),T(Jd,so,null),e(so,aE),e(so,Gn),e(Gn,rE),e(Gn,Pu),e(Pu,iE),e(Gn,lE),e(Gn,Au),e(Au,dE),e(Gn,cE),e(so,pE),T(Aa,so,null),e(so,hE),T(La,so,null),b(s,Vg,g),b(s,Xn,g),e(Xn,Oa),e(Oa,Lu),T(Vd,Lu,null),e(Xn,mE),e(Xn,Ou),e(Ou,uE),b(s,Gg,g),b(s,lt,g),T(Gd,lt,null),e(lt,fE),e(lt,Nu),e(Nu,gE),e(lt,_E),e(lt,Xd),e(Xd,bE),e(Xd,Lp),e(Lp,kE),e(Xd,yE),e(lt,vE),e(lt,Yd),e(Yd,wE),e(Yd,Zd),e(Zd,TE),e(Yd,$E),e(lt,FE),e(lt,Iu),e(Iu,xE),e(lt,RE),e(lt,yo),e(yo,Du),e(Du,ec),e(ec,EE),e(yo,ME),e(yo,Su),e(Su,tc),e(tc,zE),e(yo,qE),e(yo,Bu),e(Bu,oc),e(oc,CE),e(yo,jE),e(yo,Wu),e(Wu,nc),e(nc,PE),e(lt,AE),e(lt,ao),T(sc,ao,null),e(ao,LE),e(ao,Yn),e(Yn,OE),e(Yn,Uu),e(Uu,NE),e(Yn,IE),e(Yn,Hu),e(Hu,DE),e(Yn,SE),e(ao,BE),T(Na,ao,null),e(ao,WE),T(Ia,ao,null),b(s,Xg,g),b(s,Zn,g),e(Zn,Da),e(Da,Qu),T(ac,Qu,null),e(Zn,UE),e(Zn,Ku),e(Ku,HE),b(s,Yg,g),b(s,dt,g),T(rc,dt,null),e(dt,QE),e(dt,es),e(es,KE),e(es,Ju),e(Ju,JE),e(es,VE),e(es,Vu),e(Vu,GE),e(es,XE),e(dt,YE),e(dt,ic),e(ic,ZE),e(ic,Op),e(Op,eM),e(ic,tM),e(dt,oM),e(dt,lc),e(lc,nM),e(lc,dc),e(dc,sM),e(lc,aM),e(dt,rM),e(dt,Gu),e(Gu,iM),e(dt,lM),e(dt,vo),e(vo,Xu),e(Xu,cc),e(cc,dM),e(vo,cM),e(vo,Yu),e(Yu,pc),e(pc,pM),e(vo,hM),e(vo,Zu),e(Zu,hc),e(hc,mM),e(vo,uM),e(vo,ef),e(ef,mc),e(mc,fM),e(dt,gM),e(dt,ro),T(uc,ro,null),e(ro,_M),e(ro,ts),e(ts,bM),e(ts,tf),e(tf,kM),e(ts,yM),e(ts,of),e(of,vM),e(ts,wM),e(ro,TM),T(Sa,ro,null),e(ro,$M),T(Ba,ro,null),Zg=!0},p(s,[g]){const fc={};g&2&&(fc.$$scope={dirty:g,ctx:s}),ls.$set(fc);const nf={};g&2&&(nf.$$scope={dirty:g,ctx:s}),cs.$set(nf);const sf={};g&2&&(sf.$$scope={dirty:g,ctx:s}),ps.$set(sf);const af={};g&2&&(af.$$scope={dirty:g,ctx:s}),fs.$set(af);const gc={};g&2&&(gc.$$scope={dirty:g,ctx:s}),gs.$set(gc);const rf={};g&2&&(rf.$$scope={dirty:g,ctx:s}),ks.$set(rf);const lf={};g&2&&(lf.$$scope={dirty:g,ctx:s}),ys.$set(lf);const df={};g&2&&(df.$$scope={dirty:g,ctx:s}),ws.$set(df);const _c={};g&2&&(_c.$$scope={dirty:g,ctx:s}),Ts.$set(_c);const cf={};g&2&&(cf.$$scope={dirty:g,ctx:s}),Fs.$set(cf);const pf={};g&2&&(pf.$$scope={dirty:g,ctx:s}),xs.$set(pf);const hf={};g&2&&(hf.$$scope={dirty:g,ctx:s}),Rs.$set(hf);const mf={};g&2&&(mf.$$scope={dirty:g,ctx:s}),Ms.$set(mf);const uf={};g&2&&(uf.$$scope={dirty:g,ctx:s}),zs.$set(uf);const ff={};g&2&&(ff.$$scope={dirty:g,ctx:s}),qs.$set(ff);const wo={};g&2&&(wo.$$scope={dirty:g,ctx:s}),Cs.$set(wo);const bc={};g&2&&(bc.$$scope={dirty:g,ctx:s}),js.$set(bc);const gf={};g&2&&(gf.$$scope={dirty:g,ctx:s}),As.$set(gf);const _f={};g&2&&(_f.$$scope={dirty:g,ctx:s}),Ls.$set(_f);const To={};g&2&&(To.$$scope={dirty:g,ctx:s}),Ns.$set(To);const bf={};g&2&&(bf.$$scope={dirty:g,ctx:s}),Is.$set(bf);const kf={};g&2&&(kf.$$scope={dirty:g,ctx:s}),Ds.$set(kf);const yf={};g&2&&(yf.$$scope={dirty:g,ctx:s}),Bs.$set(yf);const Np={};g&2&&(Np.$$scope={dirty:g,ctx:s}),Ws.$set(Np);const vf={};g&2&&(vf.$$scope={dirty:g,ctx:s}),Us.$set(vf);const os={};g&2&&(os.$$scope={dirty:g,ctx:s}),Qs.$set(os);const wf={};g&2&&(wf.$$scope={dirty:g,ctx:s}),Ks.$set(wf);const Tf={};g&2&&(Tf.$$scope={dirty:g,ctx:s}),Js.$set(Tf);const kc={};g&2&&(kc.$$scope={dirty:g,ctx:s}),Gs.$set(kc);const $f={};g&2&&($f.$$scope={dirty:g,ctx:s}),Xs.$set($f);const Ff={};g&2&&(Ff.$$scope={dirty:g,ctx:s}),Zs.$set(Ff);const xf={};g&2&&(xf.$$scope={dirty:g,ctx:s}),ea.$set(xf);const Rf={};g&2&&(Rf.$$scope={dirty:g,ctx:s}),ta.$set(Rf);const Rt={};g&2&&(Rt.$$scope={dirty:g,ctx:s}),oa.$set(Rt);const ns={};g&2&&(ns.$$scope={dirty:g,ctx:s}),sa.$set(ns);const Ef={};g&2&&(Ef.$$scope={dirty:g,ctx:s}),aa.$set(Ef);const Mf={};g&2&&(Mf.$$scope={dirty:g,ctx:s}),ra.$set(Mf);const yc={};g&2&&(yc.$$scope={dirty:g,ctx:s}),ia.$set(yc);const zf={};g&2&&(zf.$$scope={dirty:g,ctx:s}),da.$set(zf);const vc={};g&2&&(vc.$$scope={dirty:g,ctx:s}),ca.$set(vc);const qf={};g&2&&(qf.$$scope={dirty:g,ctx:s}),pa.$set(qf);const No={};g&2&&(No.$$scope={dirty:g,ctx:s}),ma.$set(No);const Cf={};g&2&&(Cf.$$scope={dirty:g,ctx:s}),ua.$set(Cf);const jf={};g&2&&(jf.$$scope={dirty:g,ctx:s}),fa.$set(jf);const Pf={};g&2&&(Pf.$$scope={dirty:g,ctx:s}),ga.$set(Pf);const Io={};g&2&&(Io.$$scope={dirty:g,ctx:s}),ba.$set(Io);const Af={};g&2&&(Af.$$scope={dirty:g,ctx:s}),ka.$set(Af);const Lf={};g&2&&(Lf.$$scope={dirty:g,ctx:s}),ya.$set(Lf);const Of={};g&2&&(Of.$$scope={dirty:g,ctx:s}),va.$set(Of);const Do={};g&2&&(Do.$$scope={dirty:g,ctx:s}),Ta.$set(Do);const Nf={};g&2&&(Nf.$$scope={dirty:g,ctx:s}),$a.$set(Nf);const If={};g&2&&(If.$$scope={dirty:g,ctx:s}),xa.$set(If);const Df={};g&2&&(Df.$$scope={dirty:g,ctx:s}),Ra.$set(Df);const $o={};g&2&&($o.$$scope={dirty:g,ctx:s}),Ma.$set($o);const So={};g&2&&(So.$$scope={dirty:g,ctx:s}),za.$set(So);const Sf={};g&2&&(Sf.$$scope={dirty:g,ctx:s}),Ca.$set(Sf);const Bf={};g&2&&(Bf.$$scope={dirty:g,ctx:s}),ja.$set(Bf);const Wf={};g&2&&(Wf.$$scope={dirty:g,ctx:s}),Aa.$set(Wf);const Bo={};g&2&&(Bo.$$scope={dirty:g,ctx:s}),La.$set(Bo);const Uf={};g&2&&(Uf.$$scope={dirty:g,ctx:s}),Na.$set(Uf);const Hf={};g&2&&(Hf.$$scope={dirty:g,ctx:s}),Ia.$set(Hf);const Qf={};g&2&&(Qf.$$scope={dirty:g,ctx:s}),Sa.$set(Qf);const Wa={};g&2&&(Wa.$$scope={dirty:g,ctx:s}),Ba.$set(Wa)},i(s){Zg||($(l.$$.fragment,s),$(M.$$.fragment,s),$(We.$$.fragment,s),$(hr.$$.fragment,s),$(Fr.$$.fragment,s),$(Cr.$$.fragment,s),$(Br.$$.fragment,s),$(ti.$$.fragment,s),$(oi.$$.fragment,s),$(ls.$$.fragment,s),$(si.$$.fragment,s),$(ai.$$.fragment,s),$(cs.$$.fragment,s),$(ps.$$.fragment,s),$(li.$$.fragment,s),$(ci.$$.fragment,s),$(hi.$$.fragment,s),$(mi.$$.fragment,s),$(ui.$$.fragment,s),$(fi.$$.fragment,s),$(fs.$$.fragment,s),$(gs.$$.fragment,s),$(ki.$$.fragment,s),$(yi.$$.fragment,s),$(vi.$$.fragment,s),$(Ri.$$.fragment,s),$(ks.$$.fragment,s),$(ys.$$.fragment,s),$(Ei.$$.fragment,s),$(Mi.$$.fragment,s),$(Pi.$$.fragment,s),$(ws.$$.fragment,s),$(Ts.$$.fragment,s),$(Ai.$$.fragment,s),$(Li.$$.fragment,s),$(Si.$$.fragment,s),$(Fs.$$.fragment,s),$(xs.$$.fragment,s),$(Rs.$$.fragment,s),$(Bi.$$.fragment,s),$(Wi.$$.fragment,s),$(Ki.$$.fragment,s),$(Ms.$$.fragment,s),$(zs.$$.fragment,s),$(qs.$$.fragment,s),$(Cs.$$.fragment,s),$(js.$$.fragment,s),$(Ji.$$.fragment,s),$(Vi.$$.fragment,s),$(Zi.$$.fragment,s),$(As.$$.fragment,s),$(Ls.$$.fragment,s),$(el.$$.fragment,s),$(tl.$$.fragment,s),$(al.$$.fragment,s),$(Ns.$$.fragment,s),$(Is.$$.fragment,s),$(Ds.$$.fragment,s),$(rl.$$.fragment,s),$(il.$$.fragment,s),$(pl.$$.fragment,s),$(Bs.$$.fragment,s),$(Ws.$$.fragment,s),$(Us.$$.fragment,s),$(hl.$$.fragment,s),$(ml.$$.fragment,s),$(Qs.$$.fragment,s),$(_l.$$.fragment,s),$(Ks.$$.fragment,s),$(Js.$$.fragment,s),$(bl.$$.fragment,s),$(kl.$$.fragment,s),$(yl.$$.fragment,s),$(Gs.$$.fragment,s),$(Xs.$$.fragment,s),$(vl.$$.fragment,s),$(wl.$$.fragment,s),$(Zs.$$.fragment,s),$(Rl.$$.fragment,s),$(ea.$$.fragment,s),$(ta.$$.fragment,s),$(oa.$$.fragment,s),$(El.$$.fragment,s),$(Ml.$$.fragment,s),$(sa.$$.fragment,s),$(jl.$$.fragment,s),$(aa.$$.fragment,s),$(ra.$$.fragment,s),$(ia.$$.fragment,s),$(Pl.$$.fragment,s),$(Al.$$.fragment,s),$(da.$$.fragment,s),$(Il.$$.fragment,s),$(ca.$$.fragment,s),$(pa.$$.fragment,s),$(Dl.$$.fragment,s),$(Sl.$$.fragment,s),$(ma.$$.fragment,s),$(Hl.$$.fragment,s),$(ua.$$.fragment,s),$(fa.$$.fragment,s),$(ga.$$.fragment,s),$(Ql.$$.fragment,s),$(Kl.$$.fragment,s),$(ba.$$.fragment,s),$(Xl.$$.fragment,s),$(ka.$$.fragment,s),$(ya.$$.fragment,s),$(va.$$.fragment,s),$(Yl.$$.fragment,s),$(Zl.$$.fragment,s),$(id.$$.fragment,s),$(Ta.$$.fragment,s),$($a.$$.fragment,s),$(ld.$$.fragment,s),$(dd.$$.fragment,s),$(_d.$$.fragment,s),$(xa.$$.fragment,s),$(Ra.$$.fragment,s),$(bd.$$.fragment,s),$(kd.$$.fragment,s),$(Ed.$$.fragment,s),$(Ma.$$.fragment,s),$(za.$$.fragment,s),$(Md.$$.fragment,s),$(zd.$$.fragment,s),$(Nd.$$.fragment,s),$(Ca.$$.fragment,s),$(ja.$$.fragment,s),$(Id.$$.fragment,s),$(Dd.$$.fragment,s),$(Jd.$$.fragment,s),$(Aa.$$.fragment,s),$(La.$$.fragment,s),$(Vd.$$.fragment,s),$(Gd.$$.fragment,s),$(sc.$$.fragment,s),$(Na.$$.fragment,s),$(Ia.$$.fragment,s),$(ac.$$.fragment,s),$(rc.$$.fragment,s),$(uc.$$.fragment,s),$(Sa.$$.fragment,s),$(Ba.$$.fragment,s),Zg=!0)},o(s){F(l.$$.fragment,s),F(M.$$.fragment,s),F(We.$$.fragment,s),F(hr.$$.fragment,s),F(Fr.$$.fragment,s),F(Cr.$$.fragment,s),F(Br.$$.fragment,s),F(ti.$$.fragment,s),F(oi.$$.fragment,s),F(ls.$$.fragment,s),F(si.$$.fragment,s),F(ai.$$.fragment,s),F(cs.$$.fragment,s),F(ps.$$.fragment,s),F(li.$$.fragment,s),F(ci.$$.fragment,s),F(hi.$$.fragment,s),F(mi.$$.fragment,s),F(ui.$$.fragment,s),F(fi.$$.fragment,s),F(fs.$$.fragment,s),F(gs.$$.fragment,s),F(ki.$$.fragment,s),F(yi.$$.fragment,s),F(vi.$$.fragment,s),F(Ri.$$.fragment,s),F(ks.$$.fragment,s),F(ys.$$.fragment,s),F(Ei.$$.fragment,s),F(Mi.$$.fragment,s),F(Pi.$$.fragment,s),F(ws.$$.fragment,s),F(Ts.$$.fragment,s),F(Ai.$$.fragment,s),F(Li.$$.fragment,s),F(Si.$$.fragment,s),F(Fs.$$.fragment,s),F(xs.$$.fragment,s),F(Rs.$$.fragment,s),F(Bi.$$.fragment,s),F(Wi.$$.fragment,s),F(Ki.$$.fragment,s),F(Ms.$$.fragment,s),F(zs.$$.fragment,s),F(qs.$$.fragment,s),F(Cs.$$.fragment,s),F(js.$$.fragment,s),F(Ji.$$.fragment,s),F(Vi.$$.fragment,s),F(Zi.$$.fragment,s),F(As.$$.fragment,s),F(Ls.$$.fragment,s),F(el.$$.fragment,s),F(tl.$$.fragment,s),F(al.$$.fragment,s),F(Ns.$$.fragment,s),F(Is.$$.fragment,s),F(Ds.$$.fragment,s),F(rl.$$.fragment,s),F(il.$$.fragment,s),F(pl.$$.fragment,s),F(Bs.$$.fragment,s),F(Ws.$$.fragment,s),F(Us.$$.fragment,s),F(hl.$$.fragment,s),F(ml.$$.fragment,s),F(Qs.$$.fragment,s),F(_l.$$.fragment,s),F(Ks.$$.fragment,s),F(Js.$$.fragment,s),F(bl.$$.fragment,s),F(kl.$$.fragment,s),F(yl.$$.fragment,s),F(Gs.$$.fragment,s),F(Xs.$$.fragment,s),F(vl.$$.fragment,s),F(wl.$$.fragment,s),F(Zs.$$.fragment,s),F(Rl.$$.fragment,s),F(ea.$$.fragment,s),F(ta.$$.fragment,s),F(oa.$$.fragment,s),F(El.$$.fragment,s),F(Ml.$$.fragment,s),F(sa.$$.fragment,s),F(jl.$$.fragment,s),F(aa.$$.fragment,s),F(ra.$$.fragment,s),F(ia.$$.fragment,s),F(Pl.$$.fragment,s),F(Al.$$.fragment,s),F(da.$$.fragment,s),F(Il.$$.fragment,s),F(ca.$$.fragment,s),F(pa.$$.fragment,s),F(Dl.$$.fragment,s),F(Sl.$$.fragment,s),F(ma.$$.fragment,s),F(Hl.$$.fragment,s),F(ua.$$.fragment,s),F(fa.$$.fragment,s),F(ga.$$.fragment,s),F(Ql.$$.fragment,s),F(Kl.$$.fragment,s),F(ba.$$.fragment,s),F(Xl.$$.fragment,s),F(ka.$$.fragment,s),F(ya.$$.fragment,s),F(va.$$.fragment,s),F(Yl.$$.fragment,s),F(Zl.$$.fragment,s),F(id.$$.fragment,s),F(Ta.$$.fragment,s),F($a.$$.fragment,s),F(ld.$$.fragment,s),F(dd.$$.fragment,s),F(_d.$$.fragment,s),F(xa.$$.fragment,s),F(Ra.$$.fragment,s),F(bd.$$.fragment,s),F(kd.$$.fragment,s),F(Ed.$$.fragment,s),F(Ma.$$.fragment,s),F(za.$$.fragment,s),F(Md.$$.fragment,s),F(zd.$$.fragment,s),F(Nd.$$.fragment,s),F(Ca.$$.fragment,s),F(ja.$$.fragment,s),F(Id.$$.fragment,s),F(Dd.$$.fragment,s),F(Jd.$$.fragment,s),F(Aa.$$.fragment,s),F(La.$$.fragment,s),F(Vd.$$.fragment,s),F(Gd.$$.fragment,s),F(sc.$$.fragment,s),F(Na.$$.fragment,s),F(Ia.$$.fragment,s),F(ac.$$.fragment,s),F(rc.$$.fragment,s),F(uc.$$.fragment,s),F(Sa.$$.fragment,s),F(Ba.$$.fragment,s),Zg=!1},d(s){t(d),s&&t(_),s&&t(m),x(l),s&&t(Z),s&&t(N),x(M),s&&t(ge),s&&t(B),s&&t(_e),s&&t(U),s&&t(be),s&&t(H),s&&t(ke),s&&t(ee),s&&t(ye),s&&t(Q),s&&t(ve),s&&t(I),s&&t(Ke),s&&t(q),s&&t(Je),s&&t(Oe),x(We),s&&t(Ve),s&&t(Mc),s&&t(Vf),x(hr,s),s&&t(Gf),s&&t(bt),s&&t(Xf),x(Fr,s),s&&t(Yf),s&&t(Kt),s&&t(Zf),x(Cr,s),s&&t(eg),s&&t(Et),s&&t(tg),x(Br,s),s&&t(og),s&&t(Mt),s&&t(ng),s&&t(Hc),s&&t(sg),s&&t(rs),s&&t(ag),s&&t(an),x(ti),s&&t(rg),s&&t(Qt),x(oi),x(ls),s&&t(ig),s&&t(ln),x(si),s&&t(lg),s&&t(Ie),x(ai),x(cs),x(ps),x(li),x(ci),x(hi),x(mi),s&&t(dg),s&&t(dn),x(ui),s&&t(cg),s&&t(tt),x(fi),x(fs),x(gs),x(ki),s&&t(pg),s&&t(cn),x(yi),s&&t(hg),s&&t(ot),x(vi),x(Ri),x(ks),x(ys),s&&t(mg),s&&t(hn),x(Ei),s&&t(ug),s&&t(vt),x(Mi),x(Pi),x(ws),x(Ts),s&&t(fg),s&&t(un),x(Ai),s&&t(gg),s&&t(wt),x(Li),x(Si),x(Fs),x(xs),x(Rs),s&&t(_g),s&&t(gn),x(Bi),s&&t(bg),s&&t(Tt),x(Wi),x(Ki),x(Ms),x(zs),x(qs),x(Cs),x(js),s&&t(kg),s&&t(bn),x(Ji),s&&t(yg),s&&t($t),x(Vi),x(Zi),x(As),x(Ls),s&&t(vg),s&&t(yn),x(el),s&&t(wg),s&&t(Ft),x(tl),x(al),x(Ns),x(Is),x(Ds),s&&t(Tg),s&&t(wn),x(rl),s&&t($g),s&&t(xt),x(il),x(pl),x(Bs),x(Ws),x(Us),s&&t(Fg),s&&t(Fn),x(hl),s&&t(xg),s&&t(ht),x(ml),x(Qs),x(_l),x(Ks),x(Js),s&&t(Rg),s&&t(Rn),x(bl),s&&t(Eg),s&&t(En),x(kl),x(yl),x(Gs),x(Xs),s&&t(Mg),s&&t(zn),x(vl),s&&t(zg),s&&t(mt),x(wl),x(Zs),x(Rl),x(ea),x(ta),x(oa),s&&t(qg),s&&t(Cn),x(El),s&&t(Cg),s&&t(ut),x(Ml),x(sa),x(jl),x(aa),x(ra),x(ia),s&&t(jg),s&&t(Pn),x(Pl),s&&t(Pg),s&&t(ft),x(Al),x(da),x(Il),x(ca),x(pa),s&&t(Ag),s&&t(Ln),x(Dl),s&&t(Lg),s&&t(gt),x(Sl),x(ma),x(Hl),x(ua),x(fa),x(ga),s&&t(Og),s&&t(Nn),x(Ql),s&&t(Ng),s&&t(_t),x(Kl),x(ba),x(Xl),x(ka),x(ya),x(va),s&&t(Ig),s&&t(Sn),x(Yl),s&&t(Dg),s&&t(nt),x(Zl),x(id),x(Ta),x($a),s&&t(Sg),s&&t(Wn),x(ld),s&&t(Bg),s&&t(st),x(dd),x(_d),x(xa),x(Ra),s&&t(Wg),s&&t(Hn),x(bd),s&&t(Ug),s&&t(at),x(kd),x(Ed),x(Ma),x(za),s&&t(Hg),s&&t(Kn),x(Md),s&&t(Qg),s&&t(rt),x(zd),x(Nd),x(Ca),x(ja),s&&t(Kg),s&&t(Vn),x(Id),s&&t(Jg),s&&t(it),x(Dd),x(Jd),x(Aa),x(La),s&&t(Vg),s&&t(Xn),x(Vd),s&&t(Gg),s&&t(lt),x(Gd),x(sc),x(Na),x(Ia),s&&t(Xg),s&&t(Zn),x(ac),s&&t(Yg),s&&t(dt),x(rc),x(uc),x(Sa),x(Ba)}}}const w5={local:"roberta",sections:[{local:"overview",title:"Overview"},{local:"resources",title:"Resources"},{local:"transformers.RobertaConfig",title:"RobertaConfig"},{local:"transformers.RobertaTokenizer",title:"RobertaTokenizer"},{local:"transformers.RobertaTokenizerFast",title:"RobertaTokenizerFast"},{local:"transformers.RobertaModel",title:"RobertaModel"},{local:"transformers.RobertaForCausalLM",title:"RobertaForCausalLM"},{local:"transformers.RobertaForMaskedLM",title:"RobertaForMaskedLM"},{local:"transformers.RobertaForSequenceClassification",title:"RobertaForSequenceClassification"},{local:"transformers.RobertaForMultipleChoice",title:"RobertaForMultipleChoice"},{local:"transformers.RobertaForTokenClassification",title:"RobertaForTokenClassification"},{local:"transformers.RobertaForQuestionAnswering",title:"RobertaForQuestionAnswering"},{local:"transformers.TFRobertaModel",title:"TFRobertaModel"},{local:"transformers.TFRobertaForCausalLM",title:"TFRobertaForCausalLM"},{local:"transformers.TFRobertaForMaskedLM",title:"TFRobertaForMaskedLM"},{local:"transformers.TFRobertaForSequenceClassification",title:"TFRobertaForSequenceClassification"},{local:"transformers.TFRobertaForMultipleChoice",title:"TFRobertaForMultipleChoice"},{local:"transformers.TFRobertaForTokenClassification",title:"TFRobertaForTokenClassification"},{local:"transformers.TFRobertaForQuestionAnswering",title:"TFRobertaForQuestionAnswering"},{local:"transformers.FlaxRobertaModel",title:"FlaxRobertaModel"},{local:"transformers.FlaxRobertaForCausalLM",title:"FlaxRobertaForCausalLM"},{local:"transformers.FlaxRobertaForMaskedLM",title:"FlaxRobertaForMaskedLM"},{local:"transformers.FlaxRobertaForSequenceClassification",title:"FlaxRobertaForSequenceClassification"},{local:"transformers.FlaxRobertaForMultipleChoice",title:"FlaxRobertaForMultipleChoice"},{local:"transformers.FlaxRobertaForTokenClassification",title:"FlaxRobertaForTokenClassification"},{local:"transformers.FlaxRobertaForQuestionAnswering",title:"FlaxRobertaForQuestionAnswering"}],title:"RoBERTa"};function T5(R){return p3(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class q5 extends i3{constructor(d){super();l3(this,d,T5,v5,d3,{})}}export{q5 as default,w5 as metadata};
