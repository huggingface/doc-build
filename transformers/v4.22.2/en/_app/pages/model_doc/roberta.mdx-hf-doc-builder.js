import{S as LE,i as AE,s as OE,e as a,k as h,w as y,t as n,M as NE,c as r,d as t,m as u,a as i,x as w,h as s,b as m,G as e,g as k,y as T,q as $,o as F,B as x,v as IE,L as re}from"../../chunks/vendor-hf-doc-builder.js";import{T as me}from"../../chunks/Tip-hf-doc-builder.js";import{D as O}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ie}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as De}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ae}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function DE(R){let d,g,c,f,_;return f=new ie({props:{code:`from transformers import RobertaConfig, RobertaModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),g=n("Examples:"),c=h(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Examples:"),p.forEach(t),c=u(l),w(f.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(f,l,p),_=!0},p:re,i(l){_||($(f.$$.fragment,l),_=!0)},o(l){F(f.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(f,l)}}}function SE(R){let d,g,c,f,_;return f=new ie({props:{code:`from transformers import RobertaTokenizer
tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 328, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){d=a("p"),g=n("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c=h(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),p.forEach(t),c=u(l),w(f.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(f,l,p),_=!0},p:re,i(l){_||($(f.$$.fragment,l),_=!0)},o(l){F(f.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(f,l)}}}function BE(R){let d,g,c,f,_;return{c(){d=a("p"),g=n("When used with "),c=a("code"),f=n("is_split_into_words=True"),_=n(", this tokenizer will add a space before each word (even the first one).")},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"When used with "),c=r(p,"CODE",{});var E=i(c);f=s(E,"is_split_into_words=True"),E.forEach(t),_=s(p,", this tokenizer will add a space before each word (even the first one)."),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,f),e(d,_)},d(l){l&&t(d)}}}function WE(R){let d,g,c,f,_;return f=new ie({props:{code:`from transformers import RobertaTokenizerFast
tokenizer = RobertaTokenizerFast.from_pretrained("roberta-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = RobertaTokenizerFast.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 328, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){d=a("p"),g=n("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c=h(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),p.forEach(t),c=u(l),w(f.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(f,l,p),_=!0},p:re,i(l){_||($(f.$$.fragment,l),_=!0)},o(l){F(f.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(f,l)}}}function UE(R){let d,g,c,f,_,l,p,E;return{c(){d=a("p"),g=n("When used with "),c=a("code"),f=n("is_split_into_words=True"),_=n(", this tokenizer needs to be instantiated with "),l=a("code"),p=n("add_prefix_space=True"),E=n(".")},l(le){d=r(le,"P",{});var Z=i(d);g=s(Z,"When used with "),c=r(Z,"CODE",{});var N=i(c);f=s(N,"is_split_into_words=True"),N.forEach(t),_=s(Z,", this tokenizer needs to be instantiated with "),l=r(Z,"CODE",{});var te=i(l);p=s(te,"add_prefix_space=True"),te.forEach(t),E=s(Z,"."),Z.forEach(t)},m(le,Z){k(le,d,Z),e(d,g),e(d,c),e(c,f),e(d,_),e(d,l),e(l,p),e(d,E)},d(le){le&&t(d)}}}function HE(R){let d,g,c,f,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,f),e(d,_)},d(l){l&&t(d)}}}function QE(R){let d,g,c,f,_;return f=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),w(f.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(f,l,p),_=!0},p:re,i(l){_||($(f.$$.fragment,l),_=!0)},o(l){F(f.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(f,l)}}}function KE(R){let d,g,c,f,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,f),e(d,_)},d(l){l&&t(d)}}}function JE(R){let d,g,c,f,_;return f=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaForCausalLM, RobertaConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),w(f.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(f,l,p),_=!0},p:re,i(l){_||($(f.$$.fragment,l),_=!0)},o(l){F(f.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(f,l)}}}function VE(R){let d,g,c,f,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,f),e(d,_)},d(l){l&&t(d)}}}function GE(R){let d,g,c,f,_;return f=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaForMaskedLM
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
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),w(f.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(f,l,p),_=!0},p:re,i(l){_||($(f.$$.fragment,l),_=!0)},o(l){F(f.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(f,l)}}}function XE(R){let d,g;return d=new ie({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,f){T(d,c,f),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function YE(R){let d,g,c,f,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,f),e(d,_)},d(l){l&&t(d)}}}function ZE(R){let d,g,c,f,_;return f=new ie({props:{code:`import torch
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=a("p"),g=n("Example of single-label classification:"),c=h(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example of single-label classification:"),p.forEach(t),c=u(l),w(f.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(f,l,p),_=!0},p:re,i(l){_||($(f.$$.fragment,l),_=!0)},o(l){F(f.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(f,l)}}}function eM(R){let d,g;return d=new ie({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = RobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,f){T(d,c,f),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function tM(R){let d,g,c,f,_;return f=new ie({props:{code:`import torch
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=a("p"),g=n("Example of multi-label classification:"),c=h(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example of multi-label classification:"),p.forEach(t),c=u(l),w(f.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(f,l,p),_=!0},p:re,i(l){_||($(f.$$.fragment,l),_=!0)},o(l){F(f.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(f,l)}}}function oM(R){let d,g;return d=new ie({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,f){T(d,c,f),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function nM(R){let d,g,c,f,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,f),e(d,_)},d(l){l&&t(d)}}}function sM(R){let d,g,c,f,_;return f=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),w(f.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(f,l,p),_=!0},p:re,i(l){_||($(f.$$.fragment,l),_=!0)},o(l){F(f.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(f,l)}}}function aM(R){let d,g,c,f,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,f),e(d,_)},d(l){l&&t(d)}}}function rM(R){let d,g,c,f,_;return f=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),w(f.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(f,l,p),_=!0},p:re,i(l){_||($(f.$$.fragment,l),_=!0)},o(l){F(f.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(f,l)}}}function iM(R){let d,g;return d=new ie({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,f){T(d,c,f),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function lM(R){let d,g,c,f,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,f),e(d,_)},d(l){l&&t(d)}}}function dM(R){let d,g,c,f,_;return f=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaForQuestionAnswering
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
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),w(f.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(f,l,p),_=!0},p:re,i(l){_||($(f.$$.fragment,l),_=!0)},o(l){F(f.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(f,l)}}}function cM(R){let d,g;return d=new ie({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.86</span>`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,f){T(d,c,f),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function pM(R){let d,g,c,f,_,l,p,E,le,Z,N,te,oe,M,we,K,Te,ge,B,$e,pe,J,Fe,_e,U,xe,be,H,Re,ke,ee,C,P,ve,Q,Ee,ye,I,he,Me,q,ze,V,je,ue,G,Ce,ne,D,fe,X,qe,se,L,Pe,A,Le,Ae;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),_=n(" accept two formats as input:"),l=h(),p=a("ul"),E=a("li"),le=n("having all inputs as keyword arguments (like PyTorch models), or"),Z=h(),N=a("li"),te=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),M=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Te=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=n("model.fit()"),pe=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Fe=n("fit()"),_e=n(" and "),U=a("code"),xe=n("predict()"),be=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=n("Functional"),ke=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),C=a("ul"),P=a("li"),ve=n("a single Tensor with "),Q=a("code"),Ee=n("input_ids"),ye=n(" only and nothing else: "),I=a("code"),he=n("model(input_ids)"),Me=h(),q=a("li"),ze=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),je=n("model([input_ids, attention_mask])"),ue=n(" or "),G=a("code"),Ce=n("model([input_ids, attention_mask, token_type_ids])"),ne=h(),D=a("li"),fe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=h(),L=a("p"),Pe=n(`Note that when creating models and layers with
`),A=a("a"),Le=n("subclassing"),Ae=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=r(v,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=r(z,"CODE",{});var He=i(c);f=s(He,"transformers"),He.forEach(t),_=s(z," accept two formats as input:"),z.forEach(t),l=u(v),p=r(v,"UL",{});var de=i(p);E=r(de,"LI",{});var Xe=i(E);le=s(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=u(de),N=r(de,"LI",{});var Je=i(N);te=s(Je,"having all inputs as a list, tuple or dict in the first positional argument."),Je.forEach(t),de.forEach(t),oe=u(v),M=r(v,"P",{});var j=i(M);we=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(j,"CODE",{});var Ye=i(K);Te=s(Ye,"model.fit()"),Ye.forEach(t),ge=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(j,"CODE",{});var Se=i(B);$e=s(Se,"model.fit()"),Se.forEach(t),pe=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(j,"CODE",{});var Ze=i(J);Fe=s(Ze,"fit()"),Ze.forEach(t),_e=s(j," and "),U=r(j,"CODE",{});var et=i(U);xe=s(et,"predict()"),et.forEach(t),be=s(j,`, such as when creating your own layers or models with
the Keras `),H=r(j,"CODE",{});var Be=i(H);Re=s(Be,"Functional"),Be.forEach(t),ke=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),ee=u(v),C=r(v,"UL",{});var S=i(C);P=r(S,"LI",{});var Y=i(P);ve=s(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Ve=i(Q);Ee=s(Ve,"input_ids"),Ve.forEach(t),ye=s(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=s(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=u(S),q=r(S,"LI",{});var W=i(q);ze=s(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(W,"CODE",{});var Qe=i(V);je=s(Qe,"model([input_ids, attention_mask])"),Qe.forEach(t),ue=s(W," or "),G=r(W,"CODE",{});var We=i(G);Ce=s(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),ne=u(S),D=r(S,"LI",{});var Ne=i(D);fe=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Ke=i(X);qe=s(Ke,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ke.forEach(t),Ne.forEach(t),S.forEach(t),se=u(v),L=r(v,"P",{});var ce=i(L);Pe=s(ce,`Note that when creating models and layers with
`),A=r(ce,"A",{href:!0,rel:!0});var Ge=i(A);Le=s(Ge,"subclassing"),Ge.forEach(t),Ae=s(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){m(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(A,"rel","nofollow")},m(v,z){k(v,d,z),e(d,g),e(d,c),e(c,f),e(d,_),k(v,l,z),k(v,p,z),e(p,E),e(E,le),e(p,Z),e(p,N),e(N,te),k(v,oe,z),k(v,M,z),e(M,we),e(M,K),e(K,Te),e(M,ge),e(M,B),e(B,$e),e(M,pe),e(M,J),e(J,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),k(v,ee,z),k(v,C,z),e(C,P),e(P,ve),e(P,Q),e(Q,Ee),e(P,ye),e(P,I),e(I,he),e(C,Me),e(C,q),e(q,ze),e(q,V),e(V,je),e(q,ue),e(q,G),e(G,Ce),e(C,ne),e(C,D),e(D,fe),e(D,X),e(X,qe),k(v,se,z),k(v,L,z),e(L,Pe),e(L,A),e(A,Le),e(L,Ae)},d(v){v&&t(d),v&&t(l),v&&t(p),v&&t(oe),v&&t(M),v&&t(ee),v&&t(C),v&&t(se),v&&t(L)}}}function hM(R){let d,g,c,f,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,f),e(d,_)},d(l){l&&t(d)}}}function uM(R){let d,g,c,f,_;return f=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),w(f.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(f,l,p),_=!0},p:re,i(l){_||($(f.$$.fragment,l),_=!0)},o(l){F(f.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(f,l)}}}function fM(R){let d,g,c,f,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,f),e(d,_)},d(l){l&&t(d)}}}function mM(R){let d,g,c,f,_;return f=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForCausalLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),w(f.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(f,l,p),_=!0},p:re,i(l){_||($(f.$$.fragment,l),_=!0)},o(l){F(f.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(f,l)}}}function gM(R){let d,g,c,f,_,l,p,E,le,Z,N,te,oe,M,we,K,Te,ge,B,$e,pe,J,Fe,_e,U,xe,be,H,Re,ke,ee,C,P,ve,Q,Ee,ye,I,he,Me,q,ze,V,je,ue,G,Ce,ne,D,fe,X,qe,se,L,Pe,A,Le,Ae;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),_=n(" accept two formats as input:"),l=h(),p=a("ul"),E=a("li"),le=n("having all inputs as keyword arguments (like PyTorch models), or"),Z=h(),N=a("li"),te=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),M=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Te=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=n("model.fit()"),pe=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Fe=n("fit()"),_e=n(" and "),U=a("code"),xe=n("predict()"),be=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=n("Functional"),ke=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),C=a("ul"),P=a("li"),ve=n("a single Tensor with "),Q=a("code"),Ee=n("input_ids"),ye=n(" only and nothing else: "),I=a("code"),he=n("model(input_ids)"),Me=h(),q=a("li"),ze=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),je=n("model([input_ids, attention_mask])"),ue=n(" or "),G=a("code"),Ce=n("model([input_ids, attention_mask, token_type_ids])"),ne=h(),D=a("li"),fe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=h(),L=a("p"),Pe=n(`Note that when creating models and layers with
`),A=a("a"),Le=n("subclassing"),Ae=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=r(v,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=r(z,"CODE",{});var He=i(c);f=s(He,"transformers"),He.forEach(t),_=s(z," accept two formats as input:"),z.forEach(t),l=u(v),p=r(v,"UL",{});var de=i(p);E=r(de,"LI",{});var Xe=i(E);le=s(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=u(de),N=r(de,"LI",{});var Je=i(N);te=s(Je,"having all inputs as a list, tuple or dict in the first positional argument."),Je.forEach(t),de.forEach(t),oe=u(v),M=r(v,"P",{});var j=i(M);we=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(j,"CODE",{});var Ye=i(K);Te=s(Ye,"model.fit()"),Ye.forEach(t),ge=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(j,"CODE",{});var Se=i(B);$e=s(Se,"model.fit()"),Se.forEach(t),pe=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(j,"CODE",{});var Ze=i(J);Fe=s(Ze,"fit()"),Ze.forEach(t),_e=s(j," and "),U=r(j,"CODE",{});var et=i(U);xe=s(et,"predict()"),et.forEach(t),be=s(j,`, such as when creating your own layers or models with
the Keras `),H=r(j,"CODE",{});var Be=i(H);Re=s(Be,"Functional"),Be.forEach(t),ke=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),ee=u(v),C=r(v,"UL",{});var S=i(C);P=r(S,"LI",{});var Y=i(P);ve=s(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Ve=i(Q);Ee=s(Ve,"input_ids"),Ve.forEach(t),ye=s(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=s(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=u(S),q=r(S,"LI",{});var W=i(q);ze=s(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(W,"CODE",{});var Qe=i(V);je=s(Qe,"model([input_ids, attention_mask])"),Qe.forEach(t),ue=s(W," or "),G=r(W,"CODE",{});var We=i(G);Ce=s(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),ne=u(S),D=r(S,"LI",{});var Ne=i(D);fe=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Ke=i(X);qe=s(Ke,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ke.forEach(t),Ne.forEach(t),S.forEach(t),se=u(v),L=r(v,"P",{});var ce=i(L);Pe=s(ce,`Note that when creating models and layers with
`),A=r(ce,"A",{href:!0,rel:!0});var Ge=i(A);Le=s(Ge,"subclassing"),Ge.forEach(t),Ae=s(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){m(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(A,"rel","nofollow")},m(v,z){k(v,d,z),e(d,g),e(d,c),e(c,f),e(d,_),k(v,l,z),k(v,p,z),e(p,E),e(E,le),e(p,Z),e(p,N),e(N,te),k(v,oe,z),k(v,M,z),e(M,we),e(M,K),e(K,Te),e(M,ge),e(M,B),e(B,$e),e(M,pe),e(M,J),e(J,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),k(v,ee,z),k(v,C,z),e(C,P),e(P,ve),e(P,Q),e(Q,Ee),e(P,ye),e(P,I),e(I,he),e(C,Me),e(C,q),e(q,ze),e(q,V),e(V,je),e(q,ue),e(q,G),e(G,Ce),e(C,ne),e(C,D),e(D,fe),e(D,X),e(X,qe),k(v,se,z),k(v,L,z),e(L,Pe),e(L,A),e(A,Le),e(L,Ae)},d(v){v&&t(d),v&&t(l),v&&t(p),v&&t(oe),v&&t(M),v&&t(ee),v&&t(C),v&&t(se),v&&t(L)}}}function _M(R){let d,g,c,f,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,f),e(d,_)},d(l){l&&t(d)}}}function bM(R){let d,g,c,f,_;return f=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForMaskedLM
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
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),w(f.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(f,l,p),_=!0},p:re,i(l){_||($(f.$$.fragment,l),_=!0)},o(l){F(f.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(f,l)}}}function kM(R){let d,g;return d=new ie({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-<mask> tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,f){T(d,c,f),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function vM(R){let d,g,c,f,_,l,p,E,le,Z,N,te,oe,M,we,K,Te,ge,B,$e,pe,J,Fe,_e,U,xe,be,H,Re,ke,ee,C,P,ve,Q,Ee,ye,I,he,Me,q,ze,V,je,ue,G,Ce,ne,D,fe,X,qe,se,L,Pe,A,Le,Ae;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),_=n(" accept two formats as input:"),l=h(),p=a("ul"),E=a("li"),le=n("having all inputs as keyword arguments (like PyTorch models), or"),Z=h(),N=a("li"),te=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),M=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Te=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=n("model.fit()"),pe=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Fe=n("fit()"),_e=n(" and "),U=a("code"),xe=n("predict()"),be=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=n("Functional"),ke=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),C=a("ul"),P=a("li"),ve=n("a single Tensor with "),Q=a("code"),Ee=n("input_ids"),ye=n(" only and nothing else: "),I=a("code"),he=n("model(input_ids)"),Me=h(),q=a("li"),ze=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),je=n("model([input_ids, attention_mask])"),ue=n(" or "),G=a("code"),Ce=n("model([input_ids, attention_mask, token_type_ids])"),ne=h(),D=a("li"),fe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=h(),L=a("p"),Pe=n(`Note that when creating models and layers with
`),A=a("a"),Le=n("subclassing"),Ae=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=r(v,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=r(z,"CODE",{});var He=i(c);f=s(He,"transformers"),He.forEach(t),_=s(z," accept two formats as input:"),z.forEach(t),l=u(v),p=r(v,"UL",{});var de=i(p);E=r(de,"LI",{});var Xe=i(E);le=s(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=u(de),N=r(de,"LI",{});var Je=i(N);te=s(Je,"having all inputs as a list, tuple or dict in the first positional argument."),Je.forEach(t),de.forEach(t),oe=u(v),M=r(v,"P",{});var j=i(M);we=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(j,"CODE",{});var Ye=i(K);Te=s(Ye,"model.fit()"),Ye.forEach(t),ge=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(j,"CODE",{});var Se=i(B);$e=s(Se,"model.fit()"),Se.forEach(t),pe=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(j,"CODE",{});var Ze=i(J);Fe=s(Ze,"fit()"),Ze.forEach(t),_e=s(j," and "),U=r(j,"CODE",{});var et=i(U);xe=s(et,"predict()"),et.forEach(t),be=s(j,`, such as when creating your own layers or models with
the Keras `),H=r(j,"CODE",{});var Be=i(H);Re=s(Be,"Functional"),Be.forEach(t),ke=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),ee=u(v),C=r(v,"UL",{});var S=i(C);P=r(S,"LI",{});var Y=i(P);ve=s(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Ve=i(Q);Ee=s(Ve,"input_ids"),Ve.forEach(t),ye=s(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=s(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=u(S),q=r(S,"LI",{});var W=i(q);ze=s(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(W,"CODE",{});var Qe=i(V);je=s(Qe,"model([input_ids, attention_mask])"),Qe.forEach(t),ue=s(W," or "),G=r(W,"CODE",{});var We=i(G);Ce=s(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),ne=u(S),D=r(S,"LI",{});var Ne=i(D);fe=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Ke=i(X);qe=s(Ke,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ke.forEach(t),Ne.forEach(t),S.forEach(t),se=u(v),L=r(v,"P",{});var ce=i(L);Pe=s(ce,`Note that when creating models and layers with
`),A=r(ce,"A",{href:!0,rel:!0});var Ge=i(A);Le=s(Ge,"subclassing"),Ge.forEach(t),Ae=s(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){m(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(A,"rel","nofollow")},m(v,z){k(v,d,z),e(d,g),e(d,c),e(c,f),e(d,_),k(v,l,z),k(v,p,z),e(p,E),e(E,le),e(p,Z),e(p,N),e(N,te),k(v,oe,z),k(v,M,z),e(M,we),e(M,K),e(K,Te),e(M,ge),e(M,B),e(B,$e),e(M,pe),e(M,J),e(J,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),k(v,ee,z),k(v,C,z),e(C,P),e(P,ve),e(P,Q),e(Q,Ee),e(P,ye),e(P,I),e(I,he),e(C,Me),e(C,q),e(q,ze),e(q,V),e(V,je),e(q,ue),e(q,G),e(G,Ce),e(C,ne),e(C,D),e(D,fe),e(D,X),e(X,qe),k(v,se,z),k(v,L,z),e(L,Pe),e(L,A),e(A,Le),e(L,Ae)},d(v){v&&t(d),v&&t(l),v&&t(p),v&&t(oe),v&&t(M),v&&t(ee),v&&t(C),v&&t(se),v&&t(L)}}}function yM(R){let d,g,c,f,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,f),e(d,_)},d(l){l&&t(d)}}}function wM(R){let d,g,c,f,_;return f=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForSequenceClassification
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),w(f.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(f,l,p),_=!0},p:re,i(l){_||($(f.$$.fragment,l),_=!0)},o(l){F(f.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(f,l)}}}function TM(R){let d,g;return d=new ie({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFRobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,f){T(d,c,f),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function $M(R){let d,g,c,f,_,l,p,E,le,Z,N,te,oe,M,we,K,Te,ge,B,$e,pe,J,Fe,_e,U,xe,be,H,Re,ke,ee,C,P,ve,Q,Ee,ye,I,he,Me,q,ze,V,je,ue,G,Ce,ne,D,fe,X,qe,se,L,Pe,A,Le,Ae;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),_=n(" accept two formats as input:"),l=h(),p=a("ul"),E=a("li"),le=n("having all inputs as keyword arguments (like PyTorch models), or"),Z=h(),N=a("li"),te=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),M=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Te=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=n("model.fit()"),pe=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Fe=n("fit()"),_e=n(" and "),U=a("code"),xe=n("predict()"),be=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=n("Functional"),ke=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),C=a("ul"),P=a("li"),ve=n("a single Tensor with "),Q=a("code"),Ee=n("input_ids"),ye=n(" only and nothing else: "),I=a("code"),he=n("model(input_ids)"),Me=h(),q=a("li"),ze=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),je=n("model([input_ids, attention_mask])"),ue=n(" or "),G=a("code"),Ce=n("model([input_ids, attention_mask, token_type_ids])"),ne=h(),D=a("li"),fe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=h(),L=a("p"),Pe=n(`Note that when creating models and layers with
`),A=a("a"),Le=n("subclassing"),Ae=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=r(v,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=r(z,"CODE",{});var He=i(c);f=s(He,"transformers"),He.forEach(t),_=s(z," accept two formats as input:"),z.forEach(t),l=u(v),p=r(v,"UL",{});var de=i(p);E=r(de,"LI",{});var Xe=i(E);le=s(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=u(de),N=r(de,"LI",{});var Je=i(N);te=s(Je,"having all inputs as a list, tuple or dict in the first positional argument."),Je.forEach(t),de.forEach(t),oe=u(v),M=r(v,"P",{});var j=i(M);we=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(j,"CODE",{});var Ye=i(K);Te=s(Ye,"model.fit()"),Ye.forEach(t),ge=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(j,"CODE",{});var Se=i(B);$e=s(Se,"model.fit()"),Se.forEach(t),pe=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(j,"CODE",{});var Ze=i(J);Fe=s(Ze,"fit()"),Ze.forEach(t),_e=s(j," and "),U=r(j,"CODE",{});var et=i(U);xe=s(et,"predict()"),et.forEach(t),be=s(j,`, such as when creating your own layers or models with
the Keras `),H=r(j,"CODE",{});var Be=i(H);Re=s(Be,"Functional"),Be.forEach(t),ke=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),ee=u(v),C=r(v,"UL",{});var S=i(C);P=r(S,"LI",{});var Y=i(P);ve=s(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Ve=i(Q);Ee=s(Ve,"input_ids"),Ve.forEach(t),ye=s(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=s(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=u(S),q=r(S,"LI",{});var W=i(q);ze=s(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(W,"CODE",{});var Qe=i(V);je=s(Qe,"model([input_ids, attention_mask])"),Qe.forEach(t),ue=s(W," or "),G=r(W,"CODE",{});var We=i(G);Ce=s(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),ne=u(S),D=r(S,"LI",{});var Ne=i(D);fe=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Ke=i(X);qe=s(Ke,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ke.forEach(t),Ne.forEach(t),S.forEach(t),se=u(v),L=r(v,"P",{});var ce=i(L);Pe=s(ce,`Note that when creating models and layers with
`),A=r(ce,"A",{href:!0,rel:!0});var Ge=i(A);Le=s(Ge,"subclassing"),Ge.forEach(t),Ae=s(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){m(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(A,"rel","nofollow")},m(v,z){k(v,d,z),e(d,g),e(d,c),e(c,f),e(d,_),k(v,l,z),k(v,p,z),e(p,E),e(E,le),e(p,Z),e(p,N),e(N,te),k(v,oe,z),k(v,M,z),e(M,we),e(M,K),e(K,Te),e(M,ge),e(M,B),e(B,$e),e(M,pe),e(M,J),e(J,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),k(v,ee,z),k(v,C,z),e(C,P),e(P,ve),e(P,Q),e(Q,Ee),e(P,ye),e(P,I),e(I,he),e(C,Me),e(C,q),e(q,ze),e(q,V),e(V,je),e(q,ue),e(q,G),e(G,Ce),e(C,ne),e(C,D),e(D,fe),e(D,X),e(X,qe),k(v,se,z),k(v,L,z),e(L,Pe),e(L,A),e(A,Le),e(L,Ae)},d(v){v&&t(d),v&&t(l),v&&t(p),v&&t(oe),v&&t(M),v&&t(ee),v&&t(C),v&&t(se),v&&t(L)}}}function FM(R){let d,g,c,f,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,f),e(d,_)},d(l){l&&t(d)}}}function xM(R){let d,g,c,f,_;return f=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),w(f.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(f,l,p),_=!0},p:re,i(l){_||($(f.$$.fragment,l),_=!0)},o(l){F(f.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(f,l)}}}function RM(R){let d,g,c,f,_,l,p,E,le,Z,N,te,oe,M,we,K,Te,ge,B,$e,pe,J,Fe,_e,U,xe,be,H,Re,ke,ee,C,P,ve,Q,Ee,ye,I,he,Me,q,ze,V,je,ue,G,Ce,ne,D,fe,X,qe,se,L,Pe,A,Le,Ae;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),_=n(" accept two formats as input:"),l=h(),p=a("ul"),E=a("li"),le=n("having all inputs as keyword arguments (like PyTorch models), or"),Z=h(),N=a("li"),te=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),M=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Te=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=n("model.fit()"),pe=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Fe=n("fit()"),_e=n(" and "),U=a("code"),xe=n("predict()"),be=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=n("Functional"),ke=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),C=a("ul"),P=a("li"),ve=n("a single Tensor with "),Q=a("code"),Ee=n("input_ids"),ye=n(" only and nothing else: "),I=a("code"),he=n("model(input_ids)"),Me=h(),q=a("li"),ze=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),je=n("model([input_ids, attention_mask])"),ue=n(" or "),G=a("code"),Ce=n("model([input_ids, attention_mask, token_type_ids])"),ne=h(),D=a("li"),fe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=h(),L=a("p"),Pe=n(`Note that when creating models and layers with
`),A=a("a"),Le=n("subclassing"),Ae=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=r(v,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=r(z,"CODE",{});var He=i(c);f=s(He,"transformers"),He.forEach(t),_=s(z," accept two formats as input:"),z.forEach(t),l=u(v),p=r(v,"UL",{});var de=i(p);E=r(de,"LI",{});var Xe=i(E);le=s(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=u(de),N=r(de,"LI",{});var Je=i(N);te=s(Je,"having all inputs as a list, tuple or dict in the first positional argument."),Je.forEach(t),de.forEach(t),oe=u(v),M=r(v,"P",{});var j=i(M);we=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(j,"CODE",{});var Ye=i(K);Te=s(Ye,"model.fit()"),Ye.forEach(t),ge=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(j,"CODE",{});var Se=i(B);$e=s(Se,"model.fit()"),Se.forEach(t),pe=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(j,"CODE",{});var Ze=i(J);Fe=s(Ze,"fit()"),Ze.forEach(t),_e=s(j," and "),U=r(j,"CODE",{});var et=i(U);xe=s(et,"predict()"),et.forEach(t),be=s(j,`, such as when creating your own layers or models with
the Keras `),H=r(j,"CODE",{});var Be=i(H);Re=s(Be,"Functional"),Be.forEach(t),ke=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),ee=u(v),C=r(v,"UL",{});var S=i(C);P=r(S,"LI",{});var Y=i(P);ve=s(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Ve=i(Q);Ee=s(Ve,"input_ids"),Ve.forEach(t),ye=s(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=s(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=u(S),q=r(S,"LI",{});var W=i(q);ze=s(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(W,"CODE",{});var Qe=i(V);je=s(Qe,"model([input_ids, attention_mask])"),Qe.forEach(t),ue=s(W," or "),G=r(W,"CODE",{});var We=i(G);Ce=s(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),ne=u(S),D=r(S,"LI",{});var Ne=i(D);fe=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Ke=i(X);qe=s(Ke,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ke.forEach(t),Ne.forEach(t),S.forEach(t),se=u(v),L=r(v,"P",{});var ce=i(L);Pe=s(ce,`Note that when creating models and layers with
`),A=r(ce,"A",{href:!0,rel:!0});var Ge=i(A);Le=s(Ge,"subclassing"),Ge.forEach(t),Ae=s(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){m(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(A,"rel","nofollow")},m(v,z){k(v,d,z),e(d,g),e(d,c),e(c,f),e(d,_),k(v,l,z),k(v,p,z),e(p,E),e(E,le),e(p,Z),e(p,N),e(N,te),k(v,oe,z),k(v,M,z),e(M,we),e(M,K),e(K,Te),e(M,ge),e(M,B),e(B,$e),e(M,pe),e(M,J),e(J,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),k(v,ee,z),k(v,C,z),e(C,P),e(P,ve),e(P,Q),e(Q,Ee),e(P,ye),e(P,I),e(I,he),e(C,Me),e(C,q),e(q,ze),e(q,V),e(V,je),e(q,ue),e(q,G),e(G,Ce),e(C,ne),e(C,D),e(D,fe),e(D,X),e(X,qe),k(v,se,z),k(v,L,z),e(L,Pe),e(L,A),e(A,Le),e(L,Ae)},d(v){v&&t(d),v&&t(l),v&&t(p),v&&t(oe),v&&t(M),v&&t(ee),v&&t(C),v&&t(se),v&&t(L)}}}function EM(R){let d,g,c,f,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,f),e(d,_)},d(l){l&&t(d)}}}function MM(R){let d,g,c,f,_;return f=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),w(f.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(f,l,p),_=!0},p:re,i(l){_||($(f.$$.fragment,l),_=!0)},o(l){F(f.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(f,l)}}}function zM(R){let d,g;return d=new ie({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,f){T(d,c,f),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function jM(R){let d,g,c,f,_,l,p,E,le,Z,N,te,oe,M,we,K,Te,ge,B,$e,pe,J,Fe,_e,U,xe,be,H,Re,ke,ee,C,P,ve,Q,Ee,ye,I,he,Me,q,ze,V,je,ue,G,Ce,ne,D,fe,X,qe,se,L,Pe,A,Le,Ae;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),_=n(" accept two formats as input:"),l=h(),p=a("ul"),E=a("li"),le=n("having all inputs as keyword arguments (like PyTorch models), or"),Z=h(),N=a("li"),te=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),M=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),Te=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=n("model.fit()"),pe=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Fe=n("fit()"),_e=n(" and "),U=a("code"),xe=n("predict()"),be=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=n("Functional"),ke=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),C=a("ul"),P=a("li"),ve=n("a single Tensor with "),Q=a("code"),Ee=n("input_ids"),ye=n(" only and nothing else: "),I=a("code"),he=n("model(input_ids)"),Me=h(),q=a("li"),ze=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),je=n("model([input_ids, attention_mask])"),ue=n(" or "),G=a("code"),Ce=n("model([input_ids, attention_mask, token_type_ids])"),ne=h(),D=a("li"),fe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=h(),L=a("p"),Pe=n(`Note that when creating models and layers with
`),A=a("a"),Le=n("subclassing"),Ae=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=r(v,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=r(z,"CODE",{});var He=i(c);f=s(He,"transformers"),He.forEach(t),_=s(z," accept two formats as input:"),z.forEach(t),l=u(v),p=r(v,"UL",{});var de=i(p);E=r(de,"LI",{});var Xe=i(E);le=s(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=u(de),N=r(de,"LI",{});var Je=i(N);te=s(Je,"having all inputs as a list, tuple or dict in the first positional argument."),Je.forEach(t),de.forEach(t),oe=u(v),M=r(v,"P",{});var j=i(M);we=s(j,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(j,"CODE",{});var Ye=i(K);Te=s(Ye,"model.fit()"),Ye.forEach(t),ge=s(j,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(j,"CODE",{});var Se=i(B);$e=s(Se,"model.fit()"),Se.forEach(t),pe=s(j,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(j,"CODE",{});var Ze=i(J);Fe=s(Ze,"fit()"),Ze.forEach(t),_e=s(j," and "),U=r(j,"CODE",{});var et=i(U);xe=s(et,"predict()"),et.forEach(t),be=s(j,`, such as when creating your own layers or models with
the Keras `),H=r(j,"CODE",{});var Be=i(H);Re=s(Be,"Functional"),Be.forEach(t),ke=s(j,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),j.forEach(t),ee=u(v),C=r(v,"UL",{});var S=i(C);P=r(S,"LI",{});var Y=i(P);ve=s(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Ve=i(Q);Ee=s(Ve,"input_ids"),Ve.forEach(t),ye=s(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=s(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=u(S),q=r(S,"LI",{});var W=i(q);ze=s(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(W,"CODE",{});var Qe=i(V);je=s(Qe,"model([input_ids, attention_mask])"),Qe.forEach(t),ue=s(W," or "),G=r(W,"CODE",{});var We=i(G);Ce=s(We,"model([input_ids, attention_mask, token_type_ids])"),We.forEach(t),W.forEach(t),ne=u(S),D=r(S,"LI",{});var Ne=i(D);fe=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Ke=i(X);qe=s(Ke,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ke.forEach(t),Ne.forEach(t),S.forEach(t),se=u(v),L=r(v,"P",{});var ce=i(L);Pe=s(ce,`Note that when creating models and layers with
`),A=r(ce,"A",{href:!0,rel:!0});var Ge=i(A);Le=s(Ge,"subclassing"),Ge.forEach(t),Ae=s(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){m(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(A,"rel","nofollow")},m(v,z){k(v,d,z),e(d,g),e(d,c),e(c,f),e(d,_),k(v,l,z),k(v,p,z),e(p,E),e(E,le),e(p,Z),e(p,N),e(N,te),k(v,oe,z),k(v,M,z),e(M,we),e(M,K),e(K,Te),e(M,ge),e(M,B),e(B,$e),e(M,pe),e(M,J),e(J,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),k(v,ee,z),k(v,C,z),e(C,P),e(P,ve),e(P,Q),e(Q,Ee),e(P,ye),e(P,I),e(I,he),e(C,Me),e(C,q),e(q,ze),e(q,V),e(V,je),e(q,ue),e(q,G),e(G,Ce),e(C,ne),e(C,D),e(D,fe),e(D,X),e(X,qe),k(v,se,z),k(v,L,z),e(L,Pe),e(L,A),e(A,Le),e(L,Ae)},d(v){v&&t(d),v&&t(l),v&&t(p),v&&t(oe),v&&t(M),v&&t(ee),v&&t(C),v&&t(se),v&&t(L)}}}function CM(R){let d,g,c,f,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,f),e(d,_)},d(l){l&&t(d)}}}function qM(R){let d,g,c,f,_;return f=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForQuestionAnswering
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
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),w(f.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(f,l,p),_=!0},p:re,i(l){_||($(f.$$.fragment,l),_=!0)},o(l){F(f.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(f,l)}}}function PM(R){let d,g;return d=new ie({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.86</span>`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,f){T(d,c,f),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function LM(R){let d,g,c,f,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,f),e(d,_)},d(l){l&&t(d)}}}function AM(R){let d,g,c,f,_;return f=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaModel

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaModel.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaModel.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),w(f.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(f,l,p),_=!0},p:re,i(l){_||($(f.$$.fragment,l),_=!0)},o(l){F(f.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(f,l)}}}function OM(R){let d,g,c,f,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,f),e(d,_)},d(l){l&&t(d)}}}function NM(R){let d,g,c,f,_;return f=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),w(f.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(f,l,p),_=!0},p:re,i(l){_||($(f.$$.fragment,l),_=!0)},o(l){F(f.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(f,l)}}}function IM(R){let d,g,c,f,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,f),e(d,_)},d(l){l&&t(d)}}}function DM(R){let d,g,c,f,_;return f=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForMaskedLM

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForMaskedLM.from_pretrained("roberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),w(f.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(f,l,p),_=!0},p:re,i(l){_||($(f.$$.fragment,l),_=!0)},o(l){F(f.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(f,l)}}}function SM(R){let d,g,c,f,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,f),e(d,_)},d(l){l&&t(d)}}}function BM(R){let d,g,c,f,_;return f=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForSequenceClassification

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForSequenceClassification.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),w(f.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(f,l,p),_=!0},p:re,i(l){_||($(f.$$.fragment,l),_=!0)},o(l){F(f.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(f,l)}}}function WM(R){let d,g,c,f,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,f),e(d,_)},d(l){l&&t(d)}}}function UM(R){let d,g,c,f,_;return f=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),w(f.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(f,l,p),_=!0},p:re,i(l){_||($(f.$$.fragment,l),_=!0)},o(l){F(f.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(f,l)}}}function HM(R){let d,g,c,f,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,f),e(d,_)},d(l){l&&t(d)}}}function QM(R){let d,g,c,f,_;return f=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForTokenClassification

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForTokenClassification.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),w(f.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(f,l,p),_=!0},p:re,i(l){_||($(f.$$.fragment,l),_=!0)},o(l){F(f.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(f,l)}}}function KM(R){let d,g,c,f,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,f),e(d,_)},d(l){l&&t(d)}}}function JM(R){let d,g,c,f,_;return f=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(f.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=u(l),w(f.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(f,l,p),_=!0},p:re,i(l){_||($(f.$$.fragment,l),_=!0)},o(l){F(f.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(f,l)}}}function VM(R){let d,g,c,f,_,l,p,E,le,Z,N,te,oe,M,we,K,Te,ge,B,$e,pe,J,Fe,_e,U,xe,be,H,Re,ke,ee,C,P,ve,Q,Ee,ye,I,he,Me,q,ze,V,je,ue,G,Ce,ne,D,fe,X,qe,se,L,Pe,A,Le,Ae,v,z,He,de,Xe,Je,j,Ye,Se,Ze,et,Be,S,Y,Ve,Oe,W,Qe,We,Ne,Ke,ce,Ge,vt,Oa,fg,co,mg,id,gg,_g,ld,bg,kg,Na,vg,yg,wg,Lo,Tg,dd,$g,Fg,cd,xg,Rg,Eg,Ao,Mg,pd,zg,jg,hd,Cg,qg,Pg,An,of,Oo,On,xc,Ia,Lg,Rc,Ag,nf,Ie,Da,Og,Ec,Ng,Ig,Mc,Dg,Sg,Nn,Bg,Sa,Wg,zc,Ug,Hg,Qg,In,Kg,Ba,Jg,ud,Vg,Gg,Xg,yo,Wa,Yg,jc,Zg,e_,Ua,fd,t_,Cc,o_,n_,md,s_,qc,a_,r_,Dn,Ha,i_,Qa,l_,Pc,d_,c_,p_,Sn,Ka,h_,Lc,u_,f_,gd,Ja,sf,No,Bn,Ac,Va,m_,Oc,g_,af,tt,Ga,__,Xa,b_,Nc,k_,v_,y_,Ic,w_,T_,Wn,$_,Ya,F_,Dc,x_,R_,E_,Un,M_,Za,z_,_d,j_,C_,q_,bd,er,rf,Io,Hn,Sc,tr,P_,Bc,L_,lf,ot,or,A_,Wc,O_,N_,nr,I_,kd,D_,S_,B_,sr,W_,ar,U_,H_,Q_,rr,K_,Uc,J_,V_,G_,pt,X_,Hc,Y_,Z_,Qc,eb,tb,Kc,ob,nb,Jc,sb,ab,Vc,rb,ib,Gc,lb,db,cb,Qn,pb,Xc,hb,ub,ir,fb,mb,Ut,lr,gb,Do,_b,vd,bb,kb,Yc,vb,yb,wb,Kn,Tb,Jn,df,So,Vn,Zc,dr,$b,ep,Fb,cf,yt,cr,xb,pr,Rb,tp,Eb,Mb,zb,hr,jb,yd,Cb,qb,Pb,ur,Lb,fr,Ab,Ob,Nb,Ht,mr,Ib,Bo,Db,wd,Sb,Bb,op,Wb,Ub,Hb,Gn,Qb,Xn,pf,Wo,Yn,np,gr,Kb,sp,Jb,hf,wt,_r,Vb,br,Gb,ap,Xb,Yb,Zb,kr,ek,Td,tk,ok,nk,vr,sk,yr,ak,rk,ik,Rt,wr,lk,Uo,dk,$d,ck,pk,rp,hk,uk,fk,Zn,mk,es,gk,ts,uf,Ho,os,ip,Tr,_k,lp,bk,ff,Tt,$r,kk,dp,vk,yk,Fr,wk,Fd,Tk,$k,Fk,xr,xk,Rr,Rk,Ek,Mk,ct,Er,zk,Qo,jk,xd,Ck,qk,cp,Pk,Lk,Ak,ns,Ok,ss,Nk,as,Ik,rs,Dk,is,mf,Ko,ls,pp,Mr,Sk,hp,Bk,gf,$t,zr,Wk,up,Uk,Hk,jr,Qk,Rd,Kk,Jk,Vk,Cr,Gk,qr,Xk,Yk,Zk,Qt,Pr,ev,Jo,tv,Ed,ov,nv,fp,sv,av,rv,ds,iv,cs,_f,Vo,ps,mp,Lr,lv,gp,dv,bf,Ft,Ar,cv,_p,pv,hv,Or,uv,Md,fv,mv,gv,Nr,_v,Ir,bv,kv,vv,Et,Dr,yv,Go,wv,zd,Tv,$v,bp,Fv,xv,Rv,hs,Ev,us,Mv,fs,kf,Xo,ms,kp,Sr,zv,vp,jv,vf,xt,Br,Cv,Yo,qv,yp,Pv,Lv,wp,Av,Ov,Nv,Wr,Iv,jd,Dv,Sv,Bv,Ur,Wv,Hr,Uv,Hv,Qv,Mt,Qr,Kv,Zo,Jv,Cd,Vv,Gv,Tp,Xv,Yv,Zv,gs,e2,_s,t2,bs,yf,en,ks,$p,Kr,o2,Fp,n2,wf,ht,Jr,s2,xp,a2,r2,Vr,i2,qd,l2,d2,c2,Gr,p2,Xr,h2,u2,f2,vs,m2,Kt,Yr,g2,tn,_2,Pd,b2,k2,Rp,v2,y2,w2,ys,T2,ws,Tf,on,Ts,Ep,Zr,$2,Mp,F2,$f,nn,ei,x2,Jt,ti,R2,sn,E2,Ld,M2,z2,zp,j2,C2,q2,$s,P2,Fs,Ff,an,xs,jp,oi,L2,Cp,A2,xf,ut,ni,O2,si,N2,qp,I2,D2,S2,ai,B2,Ad,W2,U2,H2,ri,Q2,ii,K2,J2,V2,Rs,G2,zt,li,X2,rn,Y2,Od,Z2,ey,Pp,ty,oy,ny,Es,sy,Ms,ay,zs,Rf,ln,js,Lp,di,ry,Ap,iy,Ef,ft,ci,ly,Op,dy,cy,pi,py,Nd,hy,uy,fy,hi,my,ui,gy,_y,by,Cs,ky,jt,fi,vy,dn,yy,Id,wy,Ty,Np,$y,Fy,xy,qs,Ry,Ps,Ey,Ls,Mf,cn,As,Ip,mi,My,Dp,zy,zf,mt,gi,jy,Sp,Cy,qy,_i,Py,Dd,Ly,Ay,Oy,bi,Ny,ki,Iy,Dy,Sy,Os,By,Vt,vi,Wy,pn,Uy,Sd,Hy,Qy,Bp,Ky,Jy,Vy,Ns,Gy,Is,jf,hn,Ds,Wp,yi,Xy,Up,Yy,Cf,gt,wi,Zy,Hp,ew,tw,Ti,ow,Bd,nw,sw,aw,$i,rw,Fi,iw,lw,dw,Ss,cw,Ct,xi,pw,un,hw,Wd,uw,fw,Qp,mw,gw,_w,Bs,bw,Ws,kw,Us,qf,fn,Hs,Kp,Ri,vw,Jp,yw,Pf,_t,Ei,ww,mn,Tw,Vp,$w,Fw,Gp,xw,Rw,Ew,Mi,Mw,Ud,zw,jw,Cw,zi,qw,ji,Pw,Lw,Aw,Qs,Ow,qt,Ci,Nw,gn,Iw,Hd,Dw,Sw,Xp,Bw,Ww,Uw,Ks,Hw,Js,Qw,Vs,Lf,_n,Gs,Yp,qi,Kw,Zp,Jw,Af,nt,Pi,Vw,eh,Gw,Xw,Li,Yw,Qd,Zw,eT,tT,Ai,oT,Oi,nT,sT,aT,th,rT,iT,po,oh,Ni,lT,dT,nh,Ii,cT,pT,sh,Di,hT,uT,ah,Si,fT,mT,Gt,Bi,gT,bn,_T,rh,bT,kT,ih,vT,yT,wT,Xs,TT,Ys,Of,kn,Zs,lh,Wi,$T,dh,FT,Nf,st,Ui,xT,ch,RT,ET,Hi,MT,Kd,zT,jT,CT,Qi,qT,Ki,PT,LT,AT,ph,OT,NT,ho,hh,Ji,IT,DT,uh,Vi,ST,BT,fh,Gi,WT,UT,mh,Xi,HT,QT,Xt,Yi,KT,vn,JT,gh,VT,GT,_h,XT,YT,ZT,ea,e$,ta,If,yn,oa,bh,Zi,t$,kh,o$,Df,at,el,n$,tl,s$,vh,a$,r$,i$,ol,l$,Jd,d$,c$,p$,nl,h$,sl,u$,f$,m$,yh,g$,_$,uo,wh,al,b$,k$,Th,rl,v$,y$,$h,il,w$,T$,Fh,ll,$$,F$,Yt,dl,x$,wn,R$,xh,E$,M$,Rh,z$,j$,C$,na,q$,sa,Sf,Tn,aa,Eh,cl,P$,Mh,L$,Bf,rt,pl,A$,zh,O$,N$,hl,I$,Vd,D$,S$,B$,ul,W$,fl,U$,H$,Q$,jh,K$,J$,fo,Ch,ml,V$,G$,qh,gl,X$,Y$,Ph,_l,Z$,e1,Lh,bl,t1,o1,Zt,kl,n1,$n,s1,Ah,a1,r1,Oh,i1,l1,d1,ra,c1,ia,Wf,Fn,la,Nh,vl,p1,Ih,h1,Uf,it,yl,u1,Dh,f1,m1,wl,g1,Gd,_1,b1,k1,Tl,v1,$l,y1,w1,T1,Sh,$1,F1,mo,Bh,Fl,x1,R1,Wh,xl,E1,M1,Uh,Rl,z1,j1,Hh,El,C1,q1,eo,Ml,P1,xn,L1,Qh,A1,O1,Kh,N1,I1,D1,da,S1,ca,Hf,Rn,pa,Jh,zl,B1,Vh,W1,Qf,lt,jl,U1,Gh,H1,Q1,Cl,K1,Xd,J1,V1,G1,ql,X1,Pl,Y1,Z1,eF,Xh,tF,oF,go,Yh,Ll,nF,sF,Zh,Al,aF,rF,eu,Ol,iF,lF,tu,Nl,dF,cF,to,Il,pF,En,hF,ou,uF,fF,nu,mF,gF,_F,ha,bF,ua,Kf,Mn,fa,su,Dl,kF,au,vF,Jf,dt,Sl,yF,zn,wF,ru,TF,$F,iu,FF,xF,RF,Bl,EF,Yd,MF,zF,jF,Wl,CF,Ul,qF,PF,LF,lu,AF,OF,_o,du,Hl,NF,IF,cu,Ql,DF,SF,pu,Kl,BF,WF,hu,Jl,UF,HF,oo,Vl,QF,jn,KF,uu,JF,VF,fu,GF,XF,YF,ma,ZF,ga,Vf;return l=new De({}),M=new De({}),We=new De({}),Oa=new O({props:{name:"class transformers.RobertaConfig",anchor:"transformers.RobertaConfig",parameters:[{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/configuration_roberta.py#L37"}}),An=new ae({props:{anchor:"transformers.RobertaConfig.example",$$slots:{default:[DE]},$$scope:{ctx:R}}}),Ia=new De({}),Da=new O({props:{name:"class transformers.RobertaTokenizer",anchor:"transformers.RobertaTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
other word. (RoBERTa tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/tokenization_roberta.py#L107"}}),Nn=new ae({props:{anchor:"transformers.RobertaTokenizer.example",$$slots:{default:[SE]},$$scope:{ctx:R}}}),In=new me({props:{$$slots:{default:[BE]},$$scope:{ctx:R}}}),Wa=new O({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/tokenization_roberta.py#L344",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ha=new O({props:{name:"get_special_tokens_mask",anchor:"transformers.RobertaTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/tokenization_roberta.py#L369",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ka=new O({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/tokenization_roberta.py#L396",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ja=new O({props:{name:"save_vocabulary",anchor:"transformers.RobertaTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/tokenization_roberta.py#L315"}}),Va=new De({}),Ga=new O({props:{name:"class transformers.RobertaTokenizerFast",anchor:"transformers.RobertaTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RobertaTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether the post processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/tokenization_roberta_fast.py#L76"}}),Wn=new ae({props:{anchor:"transformers.RobertaTokenizerFast.example",$$slots:{default:[WE]},$$scope:{ctx:R}}}),Un=new me({props:{$$slots:{default:[UE]},$$scope:{ctx:R}}}),er=new O({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RobertaTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/tokenization_roberta_fast.py#L279"}}),tr=new De({}),or=new O({props:{name:"class transformers.RobertaModel",anchor:"transformers.RobertaModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.RobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_roberta.py#L697"}}),lr=new O({props:{name:"forward",anchor:"transformers.RobertaModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_roberta.py#L742",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Kn=new me({props:{$$slots:{default:[HE]},$$scope:{ctx:R}}}),Jn=new ae({props:{anchor:"transformers.RobertaModel.forward.example",$$slots:{default:[QE]},$$scope:{ctx:R}}}),dr=new De({}),cr=new O({props:{name:"class transformers.RobertaForCausalLM",anchor:"transformers.RobertaForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_roberta.py#L883"}}),mr=new O({props:{name:"forward",anchor:"transformers.RobertaForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Tuple[typing.Tuple[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_roberta.py#L909",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Gn=new me({props:{$$slots:{default:[KE]},$$scope:{ctx:R}}}),Xn=new ae({props:{anchor:"transformers.RobertaForCausalLM.forward.example",$$slots:{default:[JE]},$$scope:{ctx:R}}}),gr=new De({}),_r=new O({props:{name:"class transformers.RobertaForMaskedLM",anchor:"transformers.RobertaForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_roberta.py#L1035"}}),wr=new O({props:{name:"forward",anchor:"transformers.RobertaForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.RobertaForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_roberta.py#L1064",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zn=new me({props:{$$slots:{default:[VE]},$$scope:{ctx:R}}}),es=new ae({props:{anchor:"transformers.RobertaForMaskedLM.forward.example",$$slots:{default:[GE]},$$scope:{ctx:R}}}),ts=new ae({props:{anchor:"transformers.RobertaForMaskedLM.forward.example-2",$$slots:{default:[XE]},$$scope:{ctx:R}}}),Tr=new De({}),$r=new O({props:{name:"class transformers.RobertaForSequenceClassification",anchor:"transformers.RobertaForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_roberta.py#L1166"}}),Er=new O({props:{name:"forward",anchor:"transformers.RobertaForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_roberta.py#L1180",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ns=new me({props:{$$slots:{default:[YE]},$$scope:{ctx:R}}}),ss=new ae({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example",$$slots:{default:[ZE]},$$scope:{ctx:R}}}),as=new ae({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example-2",$$slots:{default:[eM]},$$scope:{ctx:R}}}),rs=new ae({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example-3",$$slots:{default:[tM]},$$scope:{ctx:R}}}),is=new ae({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example-4",$$slots:{default:[oM]},$$scope:{ctx:R}}}),Mr=new De({}),zr=new O({props:{name:"class transformers.RobertaForMultipleChoice",anchor:"transformers.RobertaForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_roberta.py#L1266"}}),Pr=new O({props:{name:"forward",anchor:"transformers.RobertaForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_roberta.py#L1279",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ds=new me({props:{$$slots:{default:[nM]},$$scope:{ctx:R}}}),cs=new ae({props:{anchor:"transformers.RobertaForMultipleChoice.forward.example",$$slots:{default:[sM]},$$scope:{ctx:R}}}),Lr=new De({}),Ar=new O({props:{name:"class transformers.RobertaForTokenClassification",anchor:"transformers.RobertaForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_roberta.py#L1359"}}),Dr=new O({props:{name:"forward",anchor:"transformers.RobertaForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_roberta.py#L1377",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),hs=new me({props:{$$slots:{default:[aM]},$$scope:{ctx:R}}}),us=new ae({props:{anchor:"transformers.RobertaForTokenClassification.forward.example",$$slots:{default:[rM]},$$scope:{ctx:R}}}),fs=new ae({props:{anchor:"transformers.RobertaForTokenClassification.forward.example-2",$$slots:{default:[iM]},$$scope:{ctx:R}}}),Sr=new De({}),Br=new O({props:{name:"class transformers.RobertaForQuestionAnswering",anchor:"transformers.RobertaForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_roberta.py#L1468"}}),Qr=new O({props:{name:"forward",anchor:"transformers.RobertaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.RobertaForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_roberta.py#L1482",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),gs=new me({props:{$$slots:{default:[lM]},$$scope:{ctx:R}}}),_s=new ae({props:{anchor:"transformers.RobertaForQuestionAnswering.forward.example",$$slots:{default:[dM]},$$scope:{ctx:R}}}),bs=new ae({props:{anchor:"transformers.RobertaForQuestionAnswering.forward.example-2",$$slots:{default:[cM]},$$scope:{ctx:R}}}),Kr=new De({}),Jr=new O({props:{name:"class transformers.TFRobertaModel",anchor:"transformers.TFRobertaModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_tf_roberta.py#L914"}}),vs=new me({props:{$$slots:{default:[pM]},$$scope:{ctx:R}}}),Yr=new O({props:{name:"call",anchor:"transformers.TFRobertaModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_tf_roberta.py#L919",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ys=new me({props:{$$slots:{default:[hM]},$$scope:{ctx:R}}}),ws=new ae({props:{anchor:"transformers.TFRobertaModel.call.example",$$slots:{default:[uM]},$$scope:{ctx:R}}}),Zr=new De({}),ei=new O({props:{name:"class transformers.TFRobertaForCausalLM",anchor:"transformers.TFRobertaForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_tf_roberta.py#L1143"}}),ti=new O({props:{name:"call",anchor:"transformers.TFRobertaForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForCausalLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_tf_roberta.py#L1176",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$s=new me({props:{$$slots:{default:[fM]},$$scope:{ctx:R}}}),Fs=new ae({props:{anchor:"transformers.TFRobertaForCausalLM.call.example",$$slots:{default:[mM]},$$scope:{ctx:R}}}),oi=new De({}),ni=new O({props:{name:"class transformers.TFRobertaForMaskedLM",anchor:"transformers.TFRobertaForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_tf_roberta.py#L1058"}}),Rs=new me({props:{$$slots:{default:[gM]},$$scope:{ctx:R}}}),li=new O({props:{name:"call",anchor:"transformers.TFRobertaForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_tf_roberta.py#L1075",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Es=new me({props:{$$slots:{default:[_M]},$$scope:{ctx:R}}}),Ms=new ae({props:{anchor:"transformers.TFRobertaForMaskedLM.call.example",$$slots:{default:[bM]},$$scope:{ctx:R}}}),zs=new ae({props:{anchor:"transformers.TFRobertaForMaskedLM.call.example-2",$$slots:{default:[kM]},$$scope:{ctx:R}}}),di=new De({}),ci=new O({props:{name:"class transformers.TFRobertaForSequenceClassification",anchor:"transformers.TFRobertaForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_tf_roberta.py#L1323"}}),Cs=new me({props:{$$slots:{default:[vM]},$$scope:{ctx:R}}}),fi=new O({props:{name:"call",anchor:"transformers.TFRobertaForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_tf_roberta.py#L1334",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),qs=new me({props:{$$slots:{default:[yM]},$$scope:{ctx:R}}}),Ps=new ae({props:{anchor:"transformers.TFRobertaForSequenceClassification.call.example",$$slots:{default:[wM]},$$scope:{ctx:R}}}),Ls=new ae({props:{anchor:"transformers.TFRobertaForSequenceClassification.call.example-2",$$slots:{default:[TM]},$$scope:{ctx:R}}}),mi=new De({}),gi=new O({props:{name:"class transformers.TFRobertaForMultipleChoice",anchor:"transformers.TFRobertaForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_tf_roberta.py#L1407"}}),Os=new me({props:{$$slots:{default:[$M]},$$scope:{ctx:R}}}),vi=new O({props:{name:"call",anchor:"transformers.TFRobertaForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_tf_roberta.py#L1431",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ns=new me({props:{$$slots:{default:[FM]},$$scope:{ctx:R}}}),Is=new ae({props:{anchor:"transformers.TFRobertaForMultipleChoice.call.example",$$slots:{default:[xM]},$$scope:{ctx:R}}}),yi=new De({}),wi=new O({props:{name:"class transformers.TFRobertaForTokenClassification",anchor:"transformers.TFRobertaForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_tf_roberta.py#L1528"}}),Ss=new me({props:{$$slots:{default:[RM]},$$scope:{ctx:R}}}),xi=new O({props:{name:"call",anchor:"transformers.TFRobertaForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_tf_roberta.py#L1546",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Bs=new me({props:{$$slots:{default:[EM]},$$scope:{ctx:R}}}),Ws=new ae({props:{anchor:"transformers.TFRobertaForTokenClassification.call.example",$$slots:{default:[MM]},$$scope:{ctx:R}}}),Us=new ae({props:{anchor:"transformers.TFRobertaForTokenClassification.call.example-2",$$slots:{default:[zM]},$$scope:{ctx:R}}}),Ri=new De({}),Ei=new O({props:{name:"class transformers.TFRobertaForQuestionAnswering",anchor:"transformers.TFRobertaForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_tf_roberta.py#L1619"}}),Qs=new me({props:{$$slots:{default:[jM]},$$scope:{ctx:R}}}),Ci=new O({props:{name:"call",anchor:"transformers.TFRobertaForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_tf_roberta.py#L1632",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ks=new me({props:{$$slots:{default:[CM]},$$scope:{ctx:R}}}),Js=new ae({props:{anchor:"transformers.TFRobertaForQuestionAnswering.call.example",$$slots:{default:[qM]},$$scope:{ctx:R}}}),Vs=new ae({props:{anchor:"transformers.TFRobertaForQuestionAnswering.call.example-2",$$slots:{default:[PM]},$$scope:{ctx:R}}}),qi=new De({}),Pi=new O({props:{name:"class transformers.FlaxRobertaModel",anchor:"transformers.FlaxRobertaModel",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_flax_roberta.py#L989"}}),Bi=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xs=new me({props:{$$slots:{default:[LM]},$$scope:{ctx:R}}}),Ys=new ae({props:{anchor:"transformers.FlaxRobertaModel.__call__.example",$$slots:{default:[AM]},$$scope:{ctx:R}}}),Wi=new De({}),Ui=new O({props:{name:"class transformers.FlaxRobertaForCausalLM",anchor:"transformers.FlaxRobertaForCausalLM",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_flax_roberta.py#L1458"}}),Yi=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ea=new me({props:{$$slots:{default:[OM]},$$scope:{ctx:R}}}),ta=new ae({props:{anchor:"transformers.FlaxRobertaForCausalLM.__call__.example",$$slots:{default:[NM]},$$scope:{ctx:R}}}),Zi=new De({}),el=new O({props:{name:"class transformers.FlaxRobertaForMaskedLM",anchor:"transformers.FlaxRobertaForMaskedLM",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_flax_roberta.py#L1057"}}),dl=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),na=new me({props:{$$slots:{default:[IM]},$$scope:{ctx:R}}}),sa=new ae({props:{anchor:"transformers.FlaxRobertaForMaskedLM.__call__.example",$$slots:{default:[DM]},$$scope:{ctx:R}}}),cl=new De({}),pl=new O({props:{name:"class transformers.FlaxRobertaForSequenceClassification",anchor:"transformers.FlaxRobertaForSequenceClassification",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_flax_roberta.py#L1130"}}),kl=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ra=new me({props:{$$slots:{default:[SM]},$$scope:{ctx:R}}}),ia=new ae({props:{anchor:"transformers.FlaxRobertaForSequenceClassification.__call__.example",$$slots:{default:[BM]},$$scope:{ctx:R}}}),vl=new De({}),yl=new O({props:{name:"class transformers.FlaxRobertaForMultipleChoice",anchor:"transformers.FlaxRobertaForMultipleChoice",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_flax_roberta.py#L1212"}}),Ml=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),da=new me({props:{$$slots:{default:[WM]},$$scope:{ctx:R}}}),ca=new ae({props:{anchor:"transformers.FlaxRobertaForMultipleChoice.__call__.example",$$slots:{default:[UM]},$$scope:{ctx:R}}}),zl=new De({}),jl=new O({props:{name:"class transformers.FlaxRobertaForTokenClassification",anchor:"transformers.FlaxRobertaForTokenClassification",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_flax_roberta.py#L1295"}}),Il=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ha=new me({props:{$$slots:{default:[HM]},$$scope:{ctx:R}}}),ua=new ae({props:{anchor:"transformers.FlaxRobertaForTokenClassification.__call__.example",$$slots:{default:[QM]},$$scope:{ctx:R}}}),Dl=new De({}),Sl=new O({props:{name:"class transformers.FlaxRobertaForQuestionAnswering",anchor:"transformers.FlaxRobertaForQuestionAnswering",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_flax_roberta.py#L1373"}}),Vl=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ma=new me({props:{$$slots:{default:[KM]},$$scope:{ctx:R}}}),ga=new ae({props:{anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__.example",$$slots:{default:[JM]},$$scope:{ctx:R}}}),{c(){d=a("meta"),g=h(),c=a("h1"),f=a("a"),_=a("span"),y(l.$$.fragment),p=h(),E=a("span"),le=n("RoBERTa"),Z=h(),N=a("h2"),te=a("a"),oe=a("span"),y(M.$$.fragment),we=h(),K=a("span"),Te=n("Overview"),ge=h(),B=a("p"),$e=n("The RoBERTa model was proposed in "),pe=a("a"),J=n("RoBERTa: A Robustly Optimized BERT Pretraining Approach"),Fe=n(` by Yinhan Liu, Myle Ott, Naman Goyal, Jingfei Du, Mandar Joshi, Danqi Chen, Omer
Levy, Mike Lewis, Luke Zettlemoyer, Veselin Stoyanov. It is based on Google\u2019s BERT model released in 2018.`),_e=h(),U=a("p"),xe=n(`It builds on BERT and modifies key hyperparameters, removing the next-sentence pretraining objective and training with
much larger mini-batches and learning rates.`),be=h(),H=a("p"),Re=n("The abstract from the paper is the following:"),ke=h(),ee=a("p"),C=a("em"),P=n(`Language model pretraining has led to significant performance gains but careful comparison between different
approaches is challenging. Training is computationally expensive, often done on private datasets of different sizes,
and, as we will show, hyperparameter choices have significant impact on the final results. We present a replication
study of BERT pretraining (Devlin et al., 2019) that carefully measures the impact of many key hyperparameters and
training data size. We find that BERT was significantly undertrained, and can match or exceed the performance of every
model published after it. Our best model achieves state-of-the-art results on GLUE, RACE and SQuAD. These results
highlight the importance of previously overlooked design choices, and raise questions about the source of recently
reported improvements. We release our models and code.`),ve=h(),Q=a("p"),Ee=n("Tips:"),ye=h(),I=a("ul"),he=a("li"),Me=n("This implementation is the same as "),q=a("a"),ze=n("BertModel"),V=n(` with a tiny embeddings tweak as well as a setup
for Roberta pretrained models.`),je=h(),ue=a("li"),G=n(`RoBERTa has the same architecture as BERT, but uses a byte-level BPE as a tokenizer (same as GPT-2) and uses a
different pretraining scheme.`),Ce=h(),ne=a("li"),D=n("RoBERTa doesn\u2019t have "),fe=a("code"),X=n("token_type_ids"),qe=n(`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),se=a("code"),L=n("tokenizer.sep_token"),Pe=n(" (or "),A=a("code"),Le=n("</s>"),Ae=n(")"),v=h(),z=a("li"),He=a("a"),de=n("CamemBERT"),Xe=n(" is a wrapper around RoBERTa. Refer to this page for usage examples."),Je=h(),j=a("p"),Ye=n("This model was contributed by "),Se=a("a"),Ze=n("julien-c"),et=n(". The original code can be found "),Be=a("a"),S=n("here"),Y=n("."),Ve=h(),Oe=a("h2"),W=a("a"),Qe=a("span"),y(We.$$.fragment),Ne=h(),Ke=a("span"),ce=n("RobertaConfig"),Ge=h(),vt=a("div"),y(Oa.$$.fragment),fg=h(),co=a("p"),mg=n("This is the configuration class to store the configuration of a "),id=a("a"),gg=n("RobertaModel"),_g=n(" or a "),ld=a("a"),bg=n("TFRobertaModel"),kg=n(`. It is
used to instantiate a RoBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the RoBERTa
`),Na=a("a"),vg=n("roberta-base"),yg=n(" architecture."),wg=h(),Lo=a("p"),Tg=n("Configuration objects inherit from "),dd=a("a"),$g=n("PretrainedConfig"),Fg=n(` and can be used to control the model outputs. Read the
documentation from `),cd=a("a"),xg=n("PretrainedConfig"),Rg=n(" for more information."),Eg=h(),Ao=a("p"),Mg=n("The "),pd=a("a"),zg=n("RobertaConfig"),jg=n(" class directly inherits "),hd=a("a"),Cg=n("BertConfig"),qg=n(`. It reuses the same defaults. Please check the parent
class for more information.`),Pg=h(),y(An.$$.fragment),of=h(),Oo=a("h2"),On=a("a"),xc=a("span"),y(Ia.$$.fragment),Lg=h(),Rc=a("span"),Ag=n("RobertaTokenizer"),nf=h(),Ie=a("div"),y(Da.$$.fragment),Og=h(),Ec=a("p"),Ng=n("Constructs a RoBERTa tokenizer, derived from the GPT-2 tokenizer, using byte-level Byte-Pair-Encoding."),Ig=h(),Mc=a("p"),Dg=n("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Sg=h(),y(Nn.$$.fragment),Bg=h(),Sa=a("p"),Wg=n("You can get around that behavior by passing "),zc=a("code"),Ug=n("add_prefix_space=True"),Hg=n(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Qg=h(),y(In.$$.fragment),Kg=h(),Ba=a("p"),Jg=n("This tokenizer inherits from "),ud=a("a"),Vg=n("PreTrainedTokenizer"),Gg=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Xg=h(),yo=a("div"),y(Wa.$$.fragment),Yg=h(),jc=a("p"),Zg=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoBERTa sequence has the following format:`),e_=h(),Ua=a("ul"),fd=a("li"),t_=n("single sequence: "),Cc=a("code"),o_=n("<s> X </s>"),n_=h(),md=a("li"),s_=n("pair of sequences: "),qc=a("code"),a_=n("<s> A </s></s> B </s>"),r_=h(),Dn=a("div"),y(Ha.$$.fragment),i_=h(),Qa=a("p"),l_=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Pc=a("code"),d_=n("prepare_for_model"),c_=n(" method."),p_=h(),Sn=a("div"),y(Ka.$$.fragment),h_=h(),Lc=a("p"),u_=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. RoBERTa does not
make use of token type ids, therefore a list of zeros is returned.`),f_=h(),gd=a("div"),y(Ja.$$.fragment),sf=h(),No=a("h2"),Bn=a("a"),Ac=a("span"),y(Va.$$.fragment),m_=h(),Oc=a("span"),g_=n("RobertaTokenizerFast"),af=h(),tt=a("div"),y(Ga.$$.fragment),__=h(),Xa=a("p"),b_=n("Construct a \u201Cfast\u201D RoBERTa tokenizer (backed by HuggingFace\u2019s "),Nc=a("em"),k_=n("tokenizers"),v_=n(` library), derived from the GPT-2
tokenizer, using byte-level Byte-Pair-Encoding.`),y_=h(),Ic=a("p"),w_=n("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),T_=h(),y(Wn.$$.fragment),$_=h(),Ya=a("p"),F_=n("You can get around that behavior by passing "),Dc=a("code"),x_=n("add_prefix_space=True"),R_=n(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),E_=h(),y(Un.$$.fragment),M_=h(),Za=a("p"),z_=n("This tokenizer inherits from "),_d=a("a"),j_=n("PreTrainedTokenizerFast"),C_=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),q_=h(),bd=a("div"),y(er.$$.fragment),rf=h(),Io=a("h2"),Hn=a("a"),Sc=a("span"),y(tr.$$.fragment),P_=h(),Bc=a("span"),L_=n("RobertaModel"),lf=h(),ot=a("div"),y(or.$$.fragment),A_=h(),Wc=a("p"),O_=n("The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),N_=h(),nr=a("p"),I_=n("This model inherits from "),kd=a("a"),D_=n("PreTrainedModel"),S_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),B_=h(),sr=a("p"),W_=n("This model is also a PyTorch "),ar=a("a"),U_=n("torch.nn.Module"),H_=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Q_=h(),rr=a("p"),K_=n(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Uc=a("em"),J_=n(`Attention is
all you need`),V_=n(`_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`),G_=h(),pt=a("p"),X_=n("To behave as an decoder the model needs to be initialized with the "),Hc=a("code"),Y_=n("is_decoder"),Z_=n(` argument of the configuration set
to `),Qc=a("code"),eb=n("True"),tb=n(". To be used in a Seq2Seq model, the model needs to initialized with both "),Kc=a("code"),ob=n("is_decoder"),nb=n(` argument and
`),Jc=a("code"),sb=n("add_cross_attention"),ab=n(" set to "),Vc=a("code"),rb=n("True"),ib=n("; an "),Gc=a("code"),lb=n("encoder_hidden_states"),db=n(" is then expected as an input to the forward pass."),cb=h(),Qn=a("p"),pb=n(".. _"),Xc=a("em"),hb=n("Attention is all you need"),ub=n(": "),ir=a("a"),fb=n("https://arxiv.org/abs/1706.03762"),mb=h(),Ut=a("div"),y(lr.$$.fragment),gb=h(),Do=a("p"),_b=n("The "),vd=a("a"),bb=n("RobertaModel"),kb=n(" forward method, overrides the "),Yc=a("code"),vb=n("__call__"),yb=n(" special method."),wb=h(),y(Kn.$$.fragment),Tb=h(),y(Jn.$$.fragment),df=h(),So=a("h2"),Vn=a("a"),Zc=a("span"),y(dr.$$.fragment),$b=h(),ep=a("span"),Fb=n("RobertaForCausalLM"),cf=h(),yt=a("div"),y(cr.$$.fragment),xb=h(),pr=a("p"),Rb=n("RoBERTa Model with a "),tp=a("code"),Eb=n("language modeling"),Mb=n(" head on top for CLM fine-tuning."),zb=h(),hr=a("p"),jb=n("This model inherits from "),yd=a("a"),Cb=n("PreTrainedModel"),qb=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pb=h(),ur=a("p"),Lb=n("This model is also a PyTorch "),fr=a("a"),Ab=n("torch.nn.Module"),Ob=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nb=h(),Ht=a("div"),y(mr.$$.fragment),Ib=h(),Bo=a("p"),Db=n("The "),wd=a("a"),Sb=n("RobertaForCausalLM"),Bb=n(" forward method, overrides the "),op=a("code"),Wb=n("__call__"),Ub=n(" special method."),Hb=h(),y(Gn.$$.fragment),Qb=h(),y(Xn.$$.fragment),pf=h(),Wo=a("h2"),Yn=a("a"),np=a("span"),y(gr.$$.fragment),Kb=h(),sp=a("span"),Jb=n("RobertaForMaskedLM"),hf=h(),wt=a("div"),y(_r.$$.fragment),Vb=h(),br=a("p"),Gb=n("RoBERTa Model with a "),ap=a("code"),Xb=n("language modeling"),Yb=n(" head on top."),Zb=h(),kr=a("p"),ek=n("This model inherits from "),Td=a("a"),tk=n("PreTrainedModel"),ok=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nk=h(),vr=a("p"),sk=n("This model is also a PyTorch "),yr=a("a"),ak=n("torch.nn.Module"),rk=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ik=h(),Rt=a("div"),y(wr.$$.fragment),lk=h(),Uo=a("p"),dk=n("The "),$d=a("a"),ck=n("RobertaForMaskedLM"),pk=n(" forward method, overrides the "),rp=a("code"),hk=n("__call__"),uk=n(" special method."),fk=h(),y(Zn.$$.fragment),mk=h(),y(es.$$.fragment),gk=h(),y(ts.$$.fragment),uf=h(),Ho=a("h2"),os=a("a"),ip=a("span"),y(Tr.$$.fragment),_k=h(),lp=a("span"),bk=n("RobertaForSequenceClassification"),ff=h(),Tt=a("div"),y($r.$$.fragment),kk=h(),dp=a("p"),vk=n(`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),yk=h(),Fr=a("p"),wk=n("This model inherits from "),Fd=a("a"),Tk=n("PreTrainedModel"),$k=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fk=h(),xr=a("p"),xk=n("This model is also a PyTorch "),Rr=a("a"),Rk=n("torch.nn.Module"),Ek=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mk=h(),ct=a("div"),y(Er.$$.fragment),zk=h(),Qo=a("p"),jk=n("The "),xd=a("a"),Ck=n("RobertaForSequenceClassification"),qk=n(" forward method, overrides the "),cp=a("code"),Pk=n("__call__"),Lk=n(" special method."),Ak=h(),y(ns.$$.fragment),Ok=h(),y(ss.$$.fragment),Nk=h(),y(as.$$.fragment),Ik=h(),y(rs.$$.fragment),Dk=h(),y(is.$$.fragment),mf=h(),Ko=a("h2"),ls=a("a"),pp=a("span"),y(Mr.$$.fragment),Sk=h(),hp=a("span"),Bk=n("RobertaForMultipleChoice"),gf=h(),$t=a("div"),y(zr.$$.fragment),Wk=h(),up=a("p"),Uk=n(`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Hk=h(),jr=a("p"),Qk=n("This model inherits from "),Rd=a("a"),Kk=n("PreTrainedModel"),Jk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vk=h(),Cr=a("p"),Gk=n("This model is also a PyTorch "),qr=a("a"),Xk=n("torch.nn.Module"),Yk=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zk=h(),Qt=a("div"),y(Pr.$$.fragment),ev=h(),Jo=a("p"),tv=n("The "),Ed=a("a"),ov=n("RobertaForMultipleChoice"),nv=n(" forward method, overrides the "),fp=a("code"),sv=n("__call__"),av=n(" special method."),rv=h(),y(ds.$$.fragment),iv=h(),y(cs.$$.fragment),_f=h(),Vo=a("h2"),ps=a("a"),mp=a("span"),y(Lr.$$.fragment),lv=h(),gp=a("span"),dv=n("RobertaForTokenClassification"),bf=h(),Ft=a("div"),y(Ar.$$.fragment),cv=h(),_p=a("p"),pv=n(`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),hv=h(),Or=a("p"),uv=n("This model inherits from "),Md=a("a"),fv=n("PreTrainedModel"),mv=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gv=h(),Nr=a("p"),_v=n("This model is also a PyTorch "),Ir=a("a"),bv=n("torch.nn.Module"),kv=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vv=h(),Et=a("div"),y(Dr.$$.fragment),yv=h(),Go=a("p"),wv=n("The "),zd=a("a"),Tv=n("RobertaForTokenClassification"),$v=n(" forward method, overrides the "),bp=a("code"),Fv=n("__call__"),xv=n(" special method."),Rv=h(),y(hs.$$.fragment),Ev=h(),y(us.$$.fragment),Mv=h(),y(fs.$$.fragment),kf=h(),Xo=a("h2"),ms=a("a"),kp=a("span"),y(Sr.$$.fragment),zv=h(),vp=a("span"),jv=n("RobertaForQuestionAnswering"),vf=h(),xt=a("div"),y(Br.$$.fragment),Cv=h(),Yo=a("p"),qv=n(`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),yp=a("code"),Pv=n("span start logits"),Lv=n(" and "),wp=a("code"),Av=n("span end logits"),Ov=n(")."),Nv=h(),Wr=a("p"),Iv=n("This model inherits from "),jd=a("a"),Dv=n("PreTrainedModel"),Sv=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bv=h(),Ur=a("p"),Wv=n("This model is also a PyTorch "),Hr=a("a"),Uv=n("torch.nn.Module"),Hv=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qv=h(),Mt=a("div"),y(Qr.$$.fragment),Kv=h(),Zo=a("p"),Jv=n("The "),Cd=a("a"),Vv=n("RobertaForQuestionAnswering"),Gv=n(" forward method, overrides the "),Tp=a("code"),Xv=n("__call__"),Yv=n(" special method."),Zv=h(),y(gs.$$.fragment),e2=h(),y(_s.$$.fragment),t2=h(),y(bs.$$.fragment),yf=h(),en=a("h2"),ks=a("a"),$p=a("span"),y(Kr.$$.fragment),o2=h(),Fp=a("span"),n2=n("TFRobertaModel"),wf=h(),ht=a("div"),y(Jr.$$.fragment),s2=h(),xp=a("p"),a2=n("The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),r2=h(),Vr=a("p"),i2=n("This model inherits from "),qd=a("a"),l2=n("TFPreTrainedModel"),d2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),c2=h(),Gr=a("p"),p2=n("This model is also a "),Xr=a("a"),h2=n("tf.keras.Model"),u2=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),f2=h(),y(vs.$$.fragment),m2=h(),Kt=a("div"),y(Yr.$$.fragment),g2=h(),tn=a("p"),_2=n("The "),Pd=a("a"),b2=n("TFRobertaModel"),k2=n(" forward method, overrides the "),Rp=a("code"),v2=n("__call__"),y2=n(" special method."),w2=h(),y(ys.$$.fragment),T2=h(),y(ws.$$.fragment),Tf=h(),on=a("h2"),Ts=a("a"),Ep=a("span"),y(Zr.$$.fragment),$2=h(),Mp=a("span"),F2=n("TFRobertaForCausalLM"),$f=h(),nn=a("div"),y(ei.$$.fragment),x2=h(),Jt=a("div"),y(ti.$$.fragment),R2=h(),sn=a("p"),E2=n("The "),Ld=a("a"),M2=n("TFRobertaForCausalLM"),z2=n(" forward method, overrides the "),zp=a("code"),j2=n("__call__"),C2=n(" special method."),q2=h(),y($s.$$.fragment),P2=h(),y(Fs.$$.fragment),Ff=h(),an=a("h2"),xs=a("a"),jp=a("span"),y(oi.$$.fragment),L2=h(),Cp=a("span"),A2=n("TFRobertaForMaskedLM"),xf=h(),ut=a("div"),y(ni.$$.fragment),O2=h(),si=a("p"),N2=n("RoBERTa Model with a "),qp=a("code"),I2=n("language modeling"),D2=n(" head on top."),S2=h(),ai=a("p"),B2=n("This model inherits from "),Ad=a("a"),W2=n("TFPreTrainedModel"),U2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),H2=h(),ri=a("p"),Q2=n("This model is also a "),ii=a("a"),K2=n("tf.keras.Model"),J2=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),V2=h(),y(Rs.$$.fragment),G2=h(),zt=a("div"),y(li.$$.fragment),X2=h(),rn=a("p"),Y2=n("The "),Od=a("a"),Z2=n("TFRobertaForMaskedLM"),ey=n(" forward method, overrides the "),Pp=a("code"),ty=n("__call__"),oy=n(" special method."),ny=h(),y(Es.$$.fragment),sy=h(),y(Ms.$$.fragment),ay=h(),y(zs.$$.fragment),Rf=h(),ln=a("h2"),js=a("a"),Lp=a("span"),y(di.$$.fragment),ry=h(),Ap=a("span"),iy=n("TFRobertaForSequenceClassification"),Ef=h(),ft=a("div"),y(ci.$$.fragment),ly=h(),Op=a("p"),dy=n(`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),cy=h(),pi=a("p"),py=n("This model inherits from "),Nd=a("a"),hy=n("TFPreTrainedModel"),uy=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fy=h(),hi=a("p"),my=n("This model is also a "),ui=a("a"),gy=n("tf.keras.Model"),_y=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),by=h(),y(Cs.$$.fragment),ky=h(),jt=a("div"),y(fi.$$.fragment),vy=h(),dn=a("p"),yy=n("The "),Id=a("a"),wy=n("TFRobertaForSequenceClassification"),Ty=n(" forward method, overrides the "),Np=a("code"),$y=n("__call__"),Fy=n(" special method."),xy=h(),y(qs.$$.fragment),Ry=h(),y(Ps.$$.fragment),Ey=h(),y(Ls.$$.fragment),Mf=h(),cn=a("h2"),As=a("a"),Ip=a("span"),y(mi.$$.fragment),My=h(),Dp=a("span"),zy=n("TFRobertaForMultipleChoice"),zf=h(),mt=a("div"),y(gi.$$.fragment),jy=h(),Sp=a("p"),Cy=n(`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),qy=h(),_i=a("p"),Py=n("This model inherits from "),Dd=a("a"),Ly=n("TFPreTrainedModel"),Ay=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Oy=h(),bi=a("p"),Ny=n("This model is also a "),ki=a("a"),Iy=n("tf.keras.Model"),Dy=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sy=h(),y(Os.$$.fragment),By=h(),Vt=a("div"),y(vi.$$.fragment),Wy=h(),pn=a("p"),Uy=n("The "),Sd=a("a"),Hy=n("TFRobertaForMultipleChoice"),Qy=n(" forward method, overrides the "),Bp=a("code"),Ky=n("__call__"),Jy=n(" special method."),Vy=h(),y(Ns.$$.fragment),Gy=h(),y(Is.$$.fragment),jf=h(),hn=a("h2"),Ds=a("a"),Wp=a("span"),y(yi.$$.fragment),Xy=h(),Up=a("span"),Yy=n("TFRobertaForTokenClassification"),Cf=h(),gt=a("div"),y(wi.$$.fragment),Zy=h(),Hp=a("p"),ew=n(`RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),tw=h(),Ti=a("p"),ow=n("This model inherits from "),Bd=a("a"),nw=n("TFPreTrainedModel"),sw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),aw=h(),$i=a("p"),rw=n("This model is also a "),Fi=a("a"),iw=n("tf.keras.Model"),lw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dw=h(),y(Ss.$$.fragment),cw=h(),Ct=a("div"),y(xi.$$.fragment),pw=h(),un=a("p"),hw=n("The "),Wd=a("a"),uw=n("TFRobertaForTokenClassification"),fw=n(" forward method, overrides the "),Qp=a("code"),mw=n("__call__"),gw=n(" special method."),_w=h(),y(Bs.$$.fragment),bw=h(),y(Ws.$$.fragment),kw=h(),y(Us.$$.fragment),qf=h(),fn=a("h2"),Hs=a("a"),Kp=a("span"),y(Ri.$$.fragment),vw=h(),Jp=a("span"),yw=n("TFRobertaForQuestionAnswering"),Pf=h(),_t=a("div"),y(Ei.$$.fragment),ww=h(),mn=a("p"),Tw=n(`RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Vp=a("code"),$w=n("span start logits"),Fw=n(" and "),Gp=a("code"),xw=n("span end logits"),Rw=n(")."),Ew=h(),Mi=a("p"),Mw=n("This model inherits from "),Ud=a("a"),zw=n("TFPreTrainedModel"),jw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cw=h(),zi=a("p"),qw=n("This model is also a "),ji=a("a"),Pw=n("tf.keras.Model"),Lw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Aw=h(),y(Qs.$$.fragment),Ow=h(),qt=a("div"),y(Ci.$$.fragment),Nw=h(),gn=a("p"),Iw=n("The "),Hd=a("a"),Dw=n("TFRobertaForQuestionAnswering"),Sw=n(" forward method, overrides the "),Xp=a("code"),Bw=n("__call__"),Ww=n(" special method."),Uw=h(),y(Ks.$$.fragment),Hw=h(),y(Js.$$.fragment),Qw=h(),y(Vs.$$.fragment),Lf=h(),_n=a("h2"),Gs=a("a"),Yp=a("span"),y(qi.$$.fragment),Kw=h(),Zp=a("span"),Jw=n("FlaxRobertaModel"),Af=h(),nt=a("div"),y(Pi.$$.fragment),Vw=h(),eh=a("p"),Gw=n("The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),Xw=h(),Li=a("p"),Yw=n("This model inherits from "),Qd=a("a"),Zw=n("FlaxPreTrainedModel"),eT=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),tT=h(),Ai=a("p"),oT=n("This model is also a Flax Linen "),Oi=a("a"),nT=n("flax.linen.Module"),sT=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),aT=h(),th=a("p"),rT=n("Finally, this model supports inherent JAX features such as:"),iT=h(),po=a("ul"),oh=a("li"),Ni=a("a"),lT=n("Just-In-Time (JIT) compilation"),dT=h(),nh=a("li"),Ii=a("a"),cT=n("Automatic Differentiation"),pT=h(),sh=a("li"),Di=a("a"),hT=n("Vectorization"),uT=h(),ah=a("li"),Si=a("a"),fT=n("Parallelization"),mT=h(),Gt=a("div"),y(Bi.$$.fragment),gT=h(),bn=a("p"),_T=n("The "),rh=a("code"),bT=n("FlaxRobertaPreTrainedModel"),kT=n(" forward method, overrides the "),ih=a("code"),vT=n("__call__"),yT=n(" special method."),wT=h(),y(Xs.$$.fragment),TT=h(),y(Ys.$$.fragment),Of=h(),kn=a("h2"),Zs=a("a"),lh=a("span"),y(Wi.$$.fragment),$T=h(),dh=a("span"),FT=n("FlaxRobertaForCausalLM"),Nf=h(),st=a("div"),y(Ui.$$.fragment),xT=h(),ch=a("p"),RT=n(`Roberta Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),ET=h(),Hi=a("p"),MT=n("This model inherits from "),Kd=a("a"),zT=n("FlaxPreTrainedModel"),jT=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),CT=h(),Qi=a("p"),qT=n("This model is also a Flax Linen "),Ki=a("a"),PT=n("flax.linen.Module"),LT=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),AT=h(),ph=a("p"),OT=n("Finally, this model supports inherent JAX features such as:"),NT=h(),ho=a("ul"),hh=a("li"),Ji=a("a"),IT=n("Just-In-Time (JIT) compilation"),DT=h(),uh=a("li"),Vi=a("a"),ST=n("Automatic Differentiation"),BT=h(),fh=a("li"),Gi=a("a"),WT=n("Vectorization"),UT=h(),mh=a("li"),Xi=a("a"),HT=n("Parallelization"),QT=h(),Xt=a("div"),y(Yi.$$.fragment),KT=h(),vn=a("p"),JT=n("The "),gh=a("code"),VT=n("FlaxRobertaPreTrainedModel"),GT=n(" forward method, overrides the "),_h=a("code"),XT=n("__call__"),YT=n(" special method."),ZT=h(),y(ea.$$.fragment),e$=h(),y(ta.$$.fragment),If=h(),yn=a("h2"),oa=a("a"),bh=a("span"),y(Zi.$$.fragment),t$=h(),kh=a("span"),o$=n("FlaxRobertaForMaskedLM"),Df=h(),at=a("div"),y(el.$$.fragment),n$=h(),tl=a("p"),s$=n("RoBERTa Model with a "),vh=a("code"),a$=n("language modeling"),r$=n(" head on top."),i$=h(),ol=a("p"),l$=n("This model inherits from "),Jd=a("a"),d$=n("FlaxPreTrainedModel"),c$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),p$=h(),nl=a("p"),h$=n("This model is also a Flax Linen "),sl=a("a"),u$=n("flax.linen.Module"),f$=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),m$=h(),yh=a("p"),g$=n("Finally, this model supports inherent JAX features such as:"),_$=h(),uo=a("ul"),wh=a("li"),al=a("a"),b$=n("Just-In-Time (JIT) compilation"),k$=h(),Th=a("li"),rl=a("a"),v$=n("Automatic Differentiation"),y$=h(),$h=a("li"),il=a("a"),w$=n("Vectorization"),T$=h(),Fh=a("li"),ll=a("a"),$$=n("Parallelization"),F$=h(),Yt=a("div"),y(dl.$$.fragment),x$=h(),wn=a("p"),R$=n("The "),xh=a("code"),E$=n("FlaxRobertaPreTrainedModel"),M$=n(" forward method, overrides the "),Rh=a("code"),z$=n("__call__"),j$=n(" special method."),C$=h(),y(na.$$.fragment),q$=h(),y(sa.$$.fragment),Sf=h(),Tn=a("h2"),aa=a("a"),Eh=a("span"),y(cl.$$.fragment),P$=h(),Mh=a("span"),L$=n("FlaxRobertaForSequenceClassification"),Bf=h(),rt=a("div"),y(pl.$$.fragment),A$=h(),zh=a("p"),O$=n(`Roberta Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),N$=h(),hl=a("p"),I$=n("This model inherits from "),Vd=a("a"),D$=n("FlaxPreTrainedModel"),S$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),B$=h(),ul=a("p"),W$=n("This model is also a Flax Linen "),fl=a("a"),U$=n("flax.linen.Module"),H$=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Q$=h(),jh=a("p"),K$=n("Finally, this model supports inherent JAX features such as:"),J$=h(),fo=a("ul"),Ch=a("li"),ml=a("a"),V$=n("Just-In-Time (JIT) compilation"),G$=h(),qh=a("li"),gl=a("a"),X$=n("Automatic Differentiation"),Y$=h(),Ph=a("li"),_l=a("a"),Z$=n("Vectorization"),e1=h(),Lh=a("li"),bl=a("a"),t1=n("Parallelization"),o1=h(),Zt=a("div"),y(kl.$$.fragment),n1=h(),$n=a("p"),s1=n("The "),Ah=a("code"),a1=n("FlaxRobertaPreTrainedModel"),r1=n(" forward method, overrides the "),Oh=a("code"),i1=n("__call__"),l1=n(" special method."),d1=h(),y(ra.$$.fragment),c1=h(),y(ia.$$.fragment),Wf=h(),Fn=a("h2"),la=a("a"),Nh=a("span"),y(vl.$$.fragment),p1=h(),Ih=a("span"),h1=n("FlaxRobertaForMultipleChoice"),Uf=h(),it=a("div"),y(yl.$$.fragment),u1=h(),Dh=a("p"),f1=n(`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),m1=h(),wl=a("p"),g1=n("This model inherits from "),Gd=a("a"),_1=n("FlaxPreTrainedModel"),b1=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),k1=h(),Tl=a("p"),v1=n("This model is also a Flax Linen "),$l=a("a"),y1=n("flax.linen.Module"),w1=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),T1=h(),Sh=a("p"),$1=n("Finally, this model supports inherent JAX features such as:"),F1=h(),mo=a("ul"),Bh=a("li"),Fl=a("a"),x1=n("Just-In-Time (JIT) compilation"),R1=h(),Wh=a("li"),xl=a("a"),E1=n("Automatic Differentiation"),M1=h(),Uh=a("li"),Rl=a("a"),z1=n("Vectorization"),j1=h(),Hh=a("li"),El=a("a"),C1=n("Parallelization"),q1=h(),eo=a("div"),y(Ml.$$.fragment),P1=h(),xn=a("p"),L1=n("The "),Qh=a("code"),A1=n("FlaxRobertaPreTrainedModel"),O1=n(" forward method, overrides the "),Kh=a("code"),N1=n("__call__"),I1=n(" special method."),D1=h(),y(da.$$.fragment),S1=h(),y(ca.$$.fragment),Hf=h(),Rn=a("h2"),pa=a("a"),Jh=a("span"),y(zl.$$.fragment),B1=h(),Vh=a("span"),W1=n("FlaxRobertaForTokenClassification"),Qf=h(),lt=a("div"),y(jl.$$.fragment),U1=h(),Gh=a("p"),H1=n(`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Q1=h(),Cl=a("p"),K1=n("This model inherits from "),Xd=a("a"),J1=n("FlaxPreTrainedModel"),V1=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),G1=h(),ql=a("p"),X1=n("This model is also a Flax Linen "),Pl=a("a"),Y1=n("flax.linen.Module"),Z1=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),eF=h(),Xh=a("p"),tF=n("Finally, this model supports inherent JAX features such as:"),oF=h(),go=a("ul"),Yh=a("li"),Ll=a("a"),nF=n("Just-In-Time (JIT) compilation"),sF=h(),Zh=a("li"),Al=a("a"),aF=n("Automatic Differentiation"),rF=h(),eu=a("li"),Ol=a("a"),iF=n("Vectorization"),lF=h(),tu=a("li"),Nl=a("a"),dF=n("Parallelization"),cF=h(),to=a("div"),y(Il.$$.fragment),pF=h(),En=a("p"),hF=n("The "),ou=a("code"),uF=n("FlaxRobertaPreTrainedModel"),fF=n(" forward method, overrides the "),nu=a("code"),mF=n("__call__"),gF=n(" special method."),_F=h(),y(ha.$$.fragment),bF=h(),y(ua.$$.fragment),Kf=h(),Mn=a("h2"),fa=a("a"),su=a("span"),y(Dl.$$.fragment),kF=h(),au=a("span"),vF=n("FlaxRobertaForQuestionAnswering"),Jf=h(),dt=a("div"),y(Sl.$$.fragment),yF=h(),zn=a("p"),wF=n(`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ru=a("code"),TF=n("span start logits"),$F=n(" and "),iu=a("code"),FF=n("span end logits"),xF=n(")."),RF=h(),Bl=a("p"),EF=n("This model inherits from "),Yd=a("a"),MF=n("FlaxPreTrainedModel"),zF=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),jF=h(),Wl=a("p"),CF=n("This model is also a Flax Linen "),Ul=a("a"),qF=n("flax.linen.Module"),PF=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),LF=h(),lu=a("p"),AF=n("Finally, this model supports inherent JAX features such as:"),OF=h(),_o=a("ul"),du=a("li"),Hl=a("a"),NF=n("Just-In-Time (JIT) compilation"),IF=h(),cu=a("li"),Ql=a("a"),DF=n("Automatic Differentiation"),SF=h(),pu=a("li"),Kl=a("a"),BF=n("Vectorization"),WF=h(),hu=a("li"),Jl=a("a"),UF=n("Parallelization"),HF=h(),oo=a("div"),y(Vl.$$.fragment),QF=h(),jn=a("p"),KF=n("The "),uu=a("code"),JF=n("FlaxRobertaPreTrainedModel"),VF=n(" forward method, overrides the "),fu=a("code"),GF=n("__call__"),XF=n(" special method."),YF=h(),y(ma.$$.fragment),ZF=h(),y(ga.$$.fragment),this.h()},l(o){const b=NE('[data-svelte="svelte-1phssyn"]',document.head);d=r(b,"META",{name:!0,content:!0}),b.forEach(t),g=u(o),c=r(o,"H1",{class:!0});var Gl=i(c);f=r(Gl,"A",{id:!0,class:!0,href:!0});var mu=i(f);_=r(mu,"SPAN",{});var gu=i(_);w(l.$$.fragment,gu),gu.forEach(t),mu.forEach(t),p=u(Gl),E=r(Gl,"SPAN",{});var _u=i(E);le=s(_u,"RoBERTa"),_u.forEach(t),Gl.forEach(t),Z=u(o),N=r(o,"H2",{class:!0});var Xl=i(N);te=r(Xl,"A",{id:!0,class:!0,href:!0});var bu=i(te);oe=r(bu,"SPAN",{});var ku=i(oe);w(M.$$.fragment,ku),ku.forEach(t),bu.forEach(t),we=u(Xl),K=r(Xl,"SPAN",{});var vu=i(K);Te=s(vu,"Overview"),vu.forEach(t),Xl.forEach(t),ge=u(o),B=r(o,"P",{});var Yl=i(B);$e=s(Yl,"The RoBERTa model was proposed in "),pe=r(Yl,"A",{href:!0,rel:!0});var yu=i(pe);J=s(yu,"RoBERTa: A Robustly Optimized BERT Pretraining Approach"),yu.forEach(t),Fe=s(Yl,` by Yinhan Liu, Myle Ott, Naman Goyal, Jingfei Du, Mandar Joshi, Danqi Chen, Omer
Levy, Mike Lewis, Luke Zettlemoyer, Veselin Stoyanov. It is based on Google\u2019s BERT model released in 2018.`),Yl.forEach(t),_e=u(o),U=r(o,"P",{});var wu=i(U);xe=s(wu,`It builds on BERT and modifies key hyperparameters, removing the next-sentence pretraining objective and training with
much larger mini-batches and learning rates.`),wu.forEach(t),be=u(o),H=r(o,"P",{});var Tu=i(H);Re=s(Tu,"The abstract from the paper is the following:"),Tu.forEach(t),ke=u(o),ee=r(o,"P",{});var $u=i(ee);C=r($u,"EM",{});var Fu=i(C);P=s(Fu,`Language model pretraining has led to significant performance gains but careful comparison between different
approaches is challenging. Training is computationally expensive, often done on private datasets of different sizes,
and, as we will show, hyperparameter choices have significant impact on the final results. We present a replication
study of BERT pretraining (Devlin et al., 2019) that carefully measures the impact of many key hyperparameters and
training data size. We find that BERT was significantly undertrained, and can match or exceed the performance of every
model published after it. Our best model achieves state-of-the-art results on GLUE, RACE and SQuAD. These results
highlight the importance of previously overlooked design choices, and raise questions about the source of recently
reported improvements. We release our models and code.`),Fu.forEach(t),$u.forEach(t),ve=u(o),Q=r(o,"P",{});var xu=i(Q);Ee=s(xu,"Tips:"),xu.forEach(t),ye=u(o),I=r(o,"UL",{});var bo=i(I);he=r(bo,"LI",{});var Zl=i(he);Me=s(Zl,"This implementation is the same as "),q=r(Zl,"A",{href:!0});var Ru=i(q);ze=s(Ru,"BertModel"),Ru.forEach(t),V=s(Zl,` with a tiny embeddings tweak as well as a setup
for Roberta pretrained models.`),Zl.forEach(t),je=u(bo),ue=r(bo,"LI",{});var Eu=i(ue);G=s(Eu,`RoBERTa has the same architecture as BERT, but uses a byte-level BPE as a tokenizer (same as GPT-2) and uses a
different pretraining scheme.`),Eu.forEach(t),Ce=u(bo),ne=r(bo,"LI",{});var ko=i(ne);D=s(ko,"RoBERTa doesn\u2019t have "),fe=r(ko,"CODE",{});var Mu=i(fe);X=s(Mu,"token_type_ids"),Mu.forEach(t),qe=s(ko,`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),se=r(ko,"CODE",{});var zu=i(se);L=s(zu,"tokenizer.sep_token"),zu.forEach(t),Pe=s(ko," (or "),A=r(ko,"CODE",{});var ju=i(A);Le=s(ju,"</s>"),ju.forEach(t),Ae=s(ko,")"),ko.forEach(t),v=u(bo),z=r(bo,"LI",{});var Zd=i(z);He=r(Zd,"A",{href:!0});var Cu=i(He);de=s(Cu,"CamemBERT"),Cu.forEach(t),Xe=s(Zd," is a wrapper around RoBERTa. Refer to this page for usage examples."),Zd.forEach(t),bo.forEach(t),Je=u(o),j=r(o,"P",{});var Cn=i(j);Ye=s(Cn,"This model was contributed by "),Se=r(Cn,"A",{href:!0,rel:!0});var qu=i(Se);Ze=s(qu,"julien-c"),qu.forEach(t),et=s(Cn,". The original code can be found "),Be=r(Cn,"A",{href:!0,rel:!0});var Pu=i(Be);S=s(Pu,"here"),Pu.forEach(t),Y=s(Cn,"."),Cn.forEach(t),Ve=u(o),Oe=r(o,"H2",{class:!0});var ed=i(Oe);W=r(ed,"A",{id:!0,class:!0,href:!0});var Lu=i(W);Qe=r(Lu,"SPAN",{});var Au=i(Qe);w(We.$$.fragment,Au),Au.forEach(t),Lu.forEach(t),Ne=u(ed),Ke=r(ed,"SPAN",{});var Ou=i(Ke);ce=s(Ou,"RobertaConfig"),Ou.forEach(t),ed.forEach(t),Ge=u(o),vt=r(o,"DIV",{class:!0});var Wt=i(vt);w(Oa.$$.fragment,Wt),fg=u(Wt),co=r(Wt,"P",{});var vo=i(co);mg=s(vo,"This is the configuration class to store the configuration of a "),id=r(vo,"A",{href:!0});var Nu=i(id);gg=s(Nu,"RobertaModel"),Nu.forEach(t),_g=s(vo," or a "),ld=r(vo,"A",{href:!0});var Iu=i(ld);bg=s(Iu,"TFRobertaModel"),Iu.forEach(t),kg=s(vo,`. It is
used to instantiate a RoBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the RoBERTa
`),Na=r(vo,"A",{href:!0,rel:!0});var Du=i(Na);vg=s(Du,"roberta-base"),Du.forEach(t),yg=s(vo," architecture."),vo.forEach(t),wg=u(Wt),Lo=r(Wt,"P",{});var qn=i(Lo);Tg=s(qn,"Configuration objects inherit from "),dd=r(qn,"A",{href:!0});var Su=i(dd);$g=s(Su,"PretrainedConfig"),Su.forEach(t),Fg=s(qn,` and can be used to control the model outputs. Read the
documentation from `),cd=r(qn,"A",{href:!0});var Bu=i(cd);xg=s(Bu,"PretrainedConfig"),Bu.forEach(t),Rg=s(qn," for more information."),qn.forEach(t),Eg=u(Wt),Ao=r(Wt,"P",{});var Pn=i(Ao);Mg=s(Pn,"The "),pd=r(Pn,"A",{href:!0});var Wu=i(pd);zg=s(Wu,"RobertaConfig"),Wu.forEach(t),jg=s(Pn," class directly inherits "),hd=r(Pn,"A",{href:!0});var Uu=i(hd);Cg=s(Uu,"BertConfig"),Uu.forEach(t),qg=s(Pn,`. It reuses the same defaults. Please check the parent
class for more information.`),Pn.forEach(t),Pg=u(Wt),w(An.$$.fragment,Wt),Wt.forEach(t),of=u(o),Oo=r(o,"H2",{class:!0});var td=i(Oo);On=r(td,"A",{id:!0,class:!0,href:!0});var Hu=i(On);xc=r(Hu,"SPAN",{});var Qu=i(xc);w(Ia.$$.fragment,Qu),Qu.forEach(t),Hu.forEach(t),Lg=u(td),Rc=r(td,"SPAN",{});var Ku=i(Rc);Ag=s(Ku,"RobertaTokenizer"),Ku.forEach(t),td.forEach(t),nf=u(o),Ie=r(o,"DIV",{class:!0});var Ue=i(Ie);w(Da.$$.fragment,Ue),Og=u(Ue),Ec=r(Ue,"P",{});var Ju=i(Ec);Ng=s(Ju,"Constructs a RoBERTa tokenizer, derived from the GPT-2 tokenizer, using byte-level Byte-Pair-Encoding."),Ju.forEach(t),Ig=u(Ue),Mc=r(Ue,"P",{});var Vu=i(Mc);Dg=s(Vu,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Vu.forEach(t),Sg=u(Ue),w(Nn.$$.fragment,Ue),Bg=u(Ue),Sa=r(Ue,"P",{});var od=i(Sa);Wg=s(od,"You can get around that behavior by passing "),zc=r(od,"CODE",{});var Gu=i(zc);Ug=s(Gu,"add_prefix_space=True"),Gu.forEach(t),Hg=s(od,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),od.forEach(t),Qg=u(Ue),w(In.$$.fragment,Ue),Kg=u(Ue),Ba=r(Ue,"P",{});var nd=i(Ba);Jg=s(nd,"This tokenizer inherits from "),ud=r(nd,"A",{href:!0});var Xu=i(ud);Vg=s(Xu,"PreTrainedTokenizer"),Xu.forEach(t),Gg=s(nd,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),nd.forEach(t),Xg=u(Ue),yo=r(Ue,"DIV",{class:!0});var Ln=i(yo);w(Wa.$$.fragment,Ln),Yg=u(Ln),jc=r(Ln,"P",{});var Yu=i(jc);Zg=s(Yu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoBERTa sequence has the following format:`),Yu.forEach(t),e_=u(Ln),Ua=r(Ln,"UL",{});var sd=i(Ua);fd=r(sd,"LI",{});var ec=i(fd);t_=s(ec,"single sequence: "),Cc=r(ec,"CODE",{});var Zu=i(Cc);o_=s(Zu,"<s> X </s>"),Zu.forEach(t),ec.forEach(t),n_=u(sd),md=r(sd,"LI",{});var tc=i(md);s_=s(tc,"pair of sequences: "),qc=r(tc,"CODE",{});var ef=i(qc);a_=s(ef,"<s> A </s></s> B </s>"),ef.forEach(t),tc.forEach(t),sd.forEach(t),Ln.forEach(t),r_=u(Ue),Dn=r(Ue,"DIV",{class:!0});var ad=i(Dn);w(Ha.$$.fragment,ad),i_=u(ad),Qa=r(ad,"P",{});var rd=i(Qa);l_=s(rd,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Pc=r(rd,"CODE",{});var e0=i(Pc);d_=s(e0,"prepare_for_model"),e0.forEach(t),c_=s(rd," method."),rd.forEach(t),ad.forEach(t),p_=u(Ue),Sn=r(Ue,"DIV",{class:!0});var Gf=i(Sn);w(Ka.$$.fragment,Gf),h_=u(Gf),Lc=r(Gf,"P",{});var t0=i(Lc);u_=s(t0,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. RoBERTa does not
make use of token type ids, therefore a list of zeros is returned.`),t0.forEach(t),Gf.forEach(t),f_=u(Ue),gd=r(Ue,"DIV",{class:!0});var o0=i(gd);w(Ja.$$.fragment,o0),o0.forEach(t),Ue.forEach(t),sf=u(o),No=r(o,"H2",{class:!0});var Xf=i(No);Bn=r(Xf,"A",{id:!0,class:!0,href:!0});var n0=i(Bn);Ac=r(n0,"SPAN",{});var s0=i(Ac);w(Va.$$.fragment,s0),s0.forEach(t),n0.forEach(t),m_=u(Xf),Oc=r(Xf,"SPAN",{});var a0=i(Oc);g_=s(a0,"RobertaTokenizerFast"),a0.forEach(t),Xf.forEach(t),af=u(o),tt=r(o,"DIV",{class:!0});var bt=i(tt);w(Ga.$$.fragment,bt),__=u(bt),Xa=r(bt,"P",{});var Yf=i(Xa);b_=s(Yf,"Construct a \u201Cfast\u201D RoBERTa tokenizer (backed by HuggingFace\u2019s "),Nc=r(Yf,"EM",{});var r0=i(Nc);k_=s(r0,"tokenizers"),r0.forEach(t),v_=s(Yf,` library), derived from the GPT-2
tokenizer, using byte-level Byte-Pair-Encoding.`),Yf.forEach(t),y_=u(bt),Ic=r(bt,"P",{});var i0=i(Ic);w_=s(i0,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),i0.forEach(t),T_=u(bt),w(Wn.$$.fragment,bt),$_=u(bt),Ya=r(bt,"P",{});var Zf=i(Ya);F_=s(Zf,"You can get around that behavior by passing "),Dc=r(Zf,"CODE",{});var l0=i(Dc);x_=s(l0,"add_prefix_space=True"),l0.forEach(t),R_=s(Zf,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Zf.forEach(t),E_=u(bt),w(Un.$$.fragment,bt),M_=u(bt),Za=r(bt,"P",{});var em=i(Za);z_=s(em,"This tokenizer inherits from "),_d=r(em,"A",{href:!0});var d0=i(_d);j_=s(d0,"PreTrainedTokenizerFast"),d0.forEach(t),C_=s(em,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),em.forEach(t),q_=u(bt),bd=r(bt,"DIV",{class:!0});var c0=i(bd);w(er.$$.fragment,c0),c0.forEach(t),bt.forEach(t),rf=u(o),Io=r(o,"H2",{class:!0});var tm=i(Io);Hn=r(tm,"A",{id:!0,class:!0,href:!0});var p0=i(Hn);Sc=r(p0,"SPAN",{});var h0=i(Sc);w(tr.$$.fragment,h0),h0.forEach(t),p0.forEach(t),P_=u(tm),Bc=r(tm,"SPAN",{});var u0=i(Bc);L_=s(u0,"RobertaModel"),u0.forEach(t),tm.forEach(t),lf=u(o),ot=r(o,"DIV",{class:!0});var kt=i(ot);w(or.$$.fragment,kt),A_=u(kt),Wc=r(kt,"P",{});var f0=i(Wc);O_=s(f0,"The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),f0.forEach(t),N_=u(kt),nr=r(kt,"P",{});var om=i(nr);I_=s(om,"This model inherits from "),kd=r(om,"A",{href:!0});var m0=i(kd);D_=s(m0,"PreTrainedModel"),m0.forEach(t),S_=s(om,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),om.forEach(t),B_=u(kt),sr=r(kt,"P",{});var nm=i(sr);W_=s(nm,"This model is also a PyTorch "),ar=r(nm,"A",{href:!0,rel:!0});var g0=i(ar);U_=s(g0,"torch.nn.Module"),g0.forEach(t),H_=s(nm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nm.forEach(t),Q_=u(kt),rr=r(kt,"P",{});var sm=i(rr);K_=s(sm,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Uc=r(sm,"EM",{});var _0=i(Uc);J_=s(_0,`Attention is
all you need`),_0.forEach(t),V_=s(sm,`_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`),sm.forEach(t),G_=u(kt),pt=r(kt,"P",{});var Pt=i(pt);X_=s(Pt,"To behave as an decoder the model needs to be initialized with the "),Hc=r(Pt,"CODE",{});var b0=i(Hc);Y_=s(b0,"is_decoder"),b0.forEach(t),Z_=s(Pt,` argument of the configuration set
to `),Qc=r(Pt,"CODE",{});var k0=i(Qc);eb=s(k0,"True"),k0.forEach(t),tb=s(Pt,". To be used in a Seq2Seq model, the model needs to initialized with both "),Kc=r(Pt,"CODE",{});var v0=i(Kc);ob=s(v0,"is_decoder"),v0.forEach(t),nb=s(Pt,` argument and
`),Jc=r(Pt,"CODE",{});var y0=i(Jc);sb=s(y0,"add_cross_attention"),y0.forEach(t),ab=s(Pt," set to "),Vc=r(Pt,"CODE",{});var w0=i(Vc);rb=s(w0,"True"),w0.forEach(t),ib=s(Pt,"; an "),Gc=r(Pt,"CODE",{});var T0=i(Gc);lb=s(T0,"encoder_hidden_states"),T0.forEach(t),db=s(Pt," is then expected as an input to the forward pass."),Pt.forEach(t),cb=u(kt),Qn=r(kt,"P",{});var tf=i(Qn);pb=s(tf,".. _"),Xc=r(tf,"EM",{});var $0=i(Xc);hb=s($0,"Attention is all you need"),$0.forEach(t),ub=s(tf,": "),ir=r(tf,"A",{href:!0,rel:!0});var F0=i(ir);fb=s(F0,"https://arxiv.org/abs/1706.03762"),F0.forEach(t),tf.forEach(t),mb=u(kt),Ut=r(kt,"DIV",{class:!0});var _a=i(Ut);w(lr.$$.fragment,_a),gb=u(_a),Do=r(_a,"P",{});var oc=i(Do);_b=s(oc,"The "),vd=r(oc,"A",{href:!0});var x0=i(vd);bb=s(x0,"RobertaModel"),x0.forEach(t),kb=s(oc," forward method, overrides the "),Yc=r(oc,"CODE",{});var R0=i(Yc);vb=s(R0,"__call__"),R0.forEach(t),yb=s(oc," special method."),oc.forEach(t),wb=u(_a),w(Kn.$$.fragment,_a),Tb=u(_a),w(Jn.$$.fragment,_a),_a.forEach(t),kt.forEach(t),df=u(o),So=r(o,"H2",{class:!0});var am=i(So);Vn=r(am,"A",{id:!0,class:!0,href:!0});var E0=i(Vn);Zc=r(E0,"SPAN",{});var M0=i(Zc);w(dr.$$.fragment,M0),M0.forEach(t),E0.forEach(t),$b=u(am),ep=r(am,"SPAN",{});var z0=i(ep);Fb=s(z0,"RobertaForCausalLM"),z0.forEach(t),am.forEach(t),cf=u(o),yt=r(o,"DIV",{class:!0});var wo=i(yt);w(cr.$$.fragment,wo),xb=u(wo),pr=r(wo,"P",{});var rm=i(pr);Rb=s(rm,"RoBERTa Model with a "),tp=r(rm,"CODE",{});var j0=i(tp);Eb=s(j0,"language modeling"),j0.forEach(t),Mb=s(rm," head on top for CLM fine-tuning."),rm.forEach(t),zb=u(wo),hr=r(wo,"P",{});var im=i(hr);jb=s(im,"This model inherits from "),yd=r(im,"A",{href:!0});var C0=i(yd);Cb=s(C0,"PreTrainedModel"),C0.forEach(t),qb=s(im,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),im.forEach(t),Pb=u(wo),ur=r(wo,"P",{});var lm=i(ur);Lb=s(lm,"This model is also a PyTorch "),fr=r(lm,"A",{href:!0,rel:!0});var q0=i(fr);Ab=s(q0,"torch.nn.Module"),q0.forEach(t),Ob=s(lm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lm.forEach(t),Nb=u(wo),Ht=r(wo,"DIV",{class:!0});var ba=i(Ht);w(mr.$$.fragment,ba),Ib=u(ba),Bo=r(ba,"P",{});var nc=i(Bo);Db=s(nc,"The "),wd=r(nc,"A",{href:!0});var P0=i(wd);Sb=s(P0,"RobertaForCausalLM"),P0.forEach(t),Bb=s(nc," forward method, overrides the "),op=r(nc,"CODE",{});var L0=i(op);Wb=s(L0,"__call__"),L0.forEach(t),Ub=s(nc," special method."),nc.forEach(t),Hb=u(ba),w(Gn.$$.fragment,ba),Qb=u(ba),w(Xn.$$.fragment,ba),ba.forEach(t),wo.forEach(t),pf=u(o),Wo=r(o,"H2",{class:!0});var dm=i(Wo);Yn=r(dm,"A",{id:!0,class:!0,href:!0});var A0=i(Yn);np=r(A0,"SPAN",{});var O0=i(np);w(gr.$$.fragment,O0),O0.forEach(t),A0.forEach(t),Kb=u(dm),sp=r(dm,"SPAN",{});var N0=i(sp);Jb=s(N0,"RobertaForMaskedLM"),N0.forEach(t),dm.forEach(t),hf=u(o),wt=r(o,"DIV",{class:!0});var To=i(wt);w(_r.$$.fragment,To),Vb=u(To),br=r(To,"P",{});var cm=i(br);Gb=s(cm,"RoBERTa Model with a "),ap=r(cm,"CODE",{});var I0=i(ap);Xb=s(I0,"language modeling"),I0.forEach(t),Yb=s(cm," head on top."),cm.forEach(t),Zb=u(To),kr=r(To,"P",{});var pm=i(kr);ek=s(pm,"This model inherits from "),Td=r(pm,"A",{href:!0});var D0=i(Td);tk=s(D0,"PreTrainedModel"),D0.forEach(t),ok=s(pm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pm.forEach(t),nk=u(To),vr=r(To,"P",{});var hm=i(vr);sk=s(hm,"This model is also a PyTorch "),yr=r(hm,"A",{href:!0,rel:!0});var S0=i(yr);ak=s(S0,"torch.nn.Module"),S0.forEach(t),rk=s(hm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hm.forEach(t),ik=u(To),Rt=r(To,"DIV",{class:!0});var $o=i(Rt);w(wr.$$.fragment,$o),lk=u($o),Uo=r($o,"P",{});var sc=i(Uo);dk=s(sc,"The "),$d=r(sc,"A",{href:!0});var B0=i($d);ck=s(B0,"RobertaForMaskedLM"),B0.forEach(t),pk=s(sc," forward method, overrides the "),rp=r(sc,"CODE",{});var W0=i(rp);hk=s(W0,"__call__"),W0.forEach(t),uk=s(sc," special method."),sc.forEach(t),fk=u($o),w(Zn.$$.fragment,$o),mk=u($o),w(es.$$.fragment,$o),gk=u($o),w(ts.$$.fragment,$o),$o.forEach(t),To.forEach(t),uf=u(o),Ho=r(o,"H2",{class:!0});var um=i(Ho);os=r(um,"A",{id:!0,class:!0,href:!0});var U0=i(os);ip=r(U0,"SPAN",{});var H0=i(ip);w(Tr.$$.fragment,H0),H0.forEach(t),U0.forEach(t),_k=u(um),lp=r(um,"SPAN",{});var Q0=i(lp);bk=s(Q0,"RobertaForSequenceClassification"),Q0.forEach(t),um.forEach(t),ff=u(o),Tt=r(o,"DIV",{class:!0});var Fo=i(Tt);w($r.$$.fragment,Fo),kk=u(Fo),dp=r(Fo,"P",{});var K0=i(dp);vk=s(K0,`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),K0.forEach(t),yk=u(Fo),Fr=r(Fo,"P",{});var fm=i(Fr);wk=s(fm,"This model inherits from "),Fd=r(fm,"A",{href:!0});var J0=i(Fd);Tk=s(J0,"PreTrainedModel"),J0.forEach(t),$k=s(fm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fm.forEach(t),Fk=u(Fo),xr=r(Fo,"P",{});var mm=i(xr);xk=s(mm,"This model is also a PyTorch "),Rr=r(mm,"A",{href:!0,rel:!0});var V0=i(Rr);Rk=s(V0,"torch.nn.Module"),V0.forEach(t),Ek=s(mm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mm.forEach(t),Mk=u(Fo),ct=r(Fo,"DIV",{class:!0});var Lt=i(ct);w(Er.$$.fragment,Lt),zk=u(Lt),Qo=r(Lt,"P",{});var ac=i(Qo);jk=s(ac,"The "),xd=r(ac,"A",{href:!0});var G0=i(xd);Ck=s(G0,"RobertaForSequenceClassification"),G0.forEach(t),qk=s(ac," forward method, overrides the "),cp=r(ac,"CODE",{});var X0=i(cp);Pk=s(X0,"__call__"),X0.forEach(t),Lk=s(ac," special method."),ac.forEach(t),Ak=u(Lt),w(ns.$$.fragment,Lt),Ok=u(Lt),w(ss.$$.fragment,Lt),Nk=u(Lt),w(as.$$.fragment,Lt),Ik=u(Lt),w(rs.$$.fragment,Lt),Dk=u(Lt),w(is.$$.fragment,Lt),Lt.forEach(t),Fo.forEach(t),mf=u(o),Ko=r(o,"H2",{class:!0});var gm=i(Ko);ls=r(gm,"A",{id:!0,class:!0,href:!0});var Y0=i(ls);pp=r(Y0,"SPAN",{});var Z0=i(pp);w(Mr.$$.fragment,Z0),Z0.forEach(t),Y0.forEach(t),Sk=u(gm),hp=r(gm,"SPAN",{});var ex=i(hp);Bk=s(ex,"RobertaForMultipleChoice"),ex.forEach(t),gm.forEach(t),gf=u(o),$t=r(o,"DIV",{class:!0});var xo=i($t);w(zr.$$.fragment,xo),Wk=u(xo),up=r(xo,"P",{});var tx=i(up);Uk=s(tx,`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),tx.forEach(t),Hk=u(xo),jr=r(xo,"P",{});var _m=i(jr);Qk=s(_m,"This model inherits from "),Rd=r(_m,"A",{href:!0});var ox=i(Rd);Kk=s(ox,"PreTrainedModel"),ox.forEach(t),Jk=s(_m,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_m.forEach(t),Vk=u(xo),Cr=r(xo,"P",{});var bm=i(Cr);Gk=s(bm,"This model is also a PyTorch "),qr=r(bm,"A",{href:!0,rel:!0});var nx=i(qr);Xk=s(nx,"torch.nn.Module"),nx.forEach(t),Yk=s(bm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bm.forEach(t),Zk=u(xo),Qt=r(xo,"DIV",{class:!0});var ka=i(Qt);w(Pr.$$.fragment,ka),ev=u(ka),Jo=r(ka,"P",{});var rc=i(Jo);tv=s(rc,"The "),Ed=r(rc,"A",{href:!0});var sx=i(Ed);ov=s(sx,"RobertaForMultipleChoice"),sx.forEach(t),nv=s(rc," forward method, overrides the "),fp=r(rc,"CODE",{});var ax=i(fp);sv=s(ax,"__call__"),ax.forEach(t),av=s(rc," special method."),rc.forEach(t),rv=u(ka),w(ds.$$.fragment,ka),iv=u(ka),w(cs.$$.fragment,ka),ka.forEach(t),xo.forEach(t),_f=u(o),Vo=r(o,"H2",{class:!0});var km=i(Vo);ps=r(km,"A",{id:!0,class:!0,href:!0});var rx=i(ps);mp=r(rx,"SPAN",{});var ix=i(mp);w(Lr.$$.fragment,ix),ix.forEach(t),rx.forEach(t),lv=u(km),gp=r(km,"SPAN",{});var lx=i(gp);dv=s(lx,"RobertaForTokenClassification"),lx.forEach(t),km.forEach(t),bf=u(o),Ft=r(o,"DIV",{class:!0});var Ro=i(Ft);w(Ar.$$.fragment,Ro),cv=u(Ro),_p=r(Ro,"P",{});var dx=i(_p);pv=s(dx,`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),dx.forEach(t),hv=u(Ro),Or=r(Ro,"P",{});var vm=i(Or);uv=s(vm,"This model inherits from "),Md=r(vm,"A",{href:!0});var cx=i(Md);fv=s(cx,"PreTrainedModel"),cx.forEach(t),mv=s(vm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vm.forEach(t),gv=u(Ro),Nr=r(Ro,"P",{});var ym=i(Nr);_v=s(ym,"This model is also a PyTorch "),Ir=r(ym,"A",{href:!0,rel:!0});var px=i(Ir);bv=s(px,"torch.nn.Module"),px.forEach(t),kv=s(ym,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ym.forEach(t),vv=u(Ro),Et=r(Ro,"DIV",{class:!0});var Eo=i(Et);w(Dr.$$.fragment,Eo),yv=u(Eo),Go=r(Eo,"P",{});var ic=i(Go);wv=s(ic,"The "),zd=r(ic,"A",{href:!0});var hx=i(zd);Tv=s(hx,"RobertaForTokenClassification"),hx.forEach(t),$v=s(ic," forward method, overrides the "),bp=r(ic,"CODE",{});var ux=i(bp);Fv=s(ux,"__call__"),ux.forEach(t),xv=s(ic," special method."),ic.forEach(t),Rv=u(Eo),w(hs.$$.fragment,Eo),Ev=u(Eo),w(us.$$.fragment,Eo),Mv=u(Eo),w(fs.$$.fragment,Eo),Eo.forEach(t),Ro.forEach(t),kf=u(o),Xo=r(o,"H2",{class:!0});var wm=i(Xo);ms=r(wm,"A",{id:!0,class:!0,href:!0});var fx=i(ms);kp=r(fx,"SPAN",{});var mx=i(kp);w(Sr.$$.fragment,mx),mx.forEach(t),fx.forEach(t),zv=u(wm),vp=r(wm,"SPAN",{});var gx=i(vp);jv=s(gx,"RobertaForQuestionAnswering"),gx.forEach(t),wm.forEach(t),vf=u(o),xt=r(o,"DIV",{class:!0});var Mo=i(xt);w(Br.$$.fragment,Mo),Cv=u(Mo),Yo=r(Mo,"P",{});var lc=i(Yo);qv=s(lc,`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),yp=r(lc,"CODE",{});var _x=i(yp);Pv=s(_x,"span start logits"),_x.forEach(t),Lv=s(lc," and "),wp=r(lc,"CODE",{});var bx=i(wp);Av=s(bx,"span end logits"),bx.forEach(t),Ov=s(lc,")."),lc.forEach(t),Nv=u(Mo),Wr=r(Mo,"P",{});var Tm=i(Wr);Iv=s(Tm,"This model inherits from "),jd=r(Tm,"A",{href:!0});var kx=i(jd);Dv=s(kx,"PreTrainedModel"),kx.forEach(t),Sv=s(Tm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tm.forEach(t),Bv=u(Mo),Ur=r(Mo,"P",{});var $m=i(Ur);Wv=s($m,"This model is also a PyTorch "),Hr=r($m,"A",{href:!0,rel:!0});var vx=i(Hr);Uv=s(vx,"torch.nn.Module"),vx.forEach(t),Hv=s($m,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$m.forEach(t),Qv=u(Mo),Mt=r(Mo,"DIV",{class:!0});var zo=i(Mt);w(Qr.$$.fragment,zo),Kv=u(zo),Zo=r(zo,"P",{});var dc=i(Zo);Jv=s(dc,"The "),Cd=r(dc,"A",{href:!0});var yx=i(Cd);Vv=s(yx,"RobertaForQuestionAnswering"),yx.forEach(t),Gv=s(dc," forward method, overrides the "),Tp=r(dc,"CODE",{});var wx=i(Tp);Xv=s(wx,"__call__"),wx.forEach(t),Yv=s(dc," special method."),dc.forEach(t),Zv=u(zo),w(gs.$$.fragment,zo),e2=u(zo),w(_s.$$.fragment,zo),t2=u(zo),w(bs.$$.fragment,zo),zo.forEach(t),Mo.forEach(t),yf=u(o),en=r(o,"H2",{class:!0});var Fm=i(en);ks=r(Fm,"A",{id:!0,class:!0,href:!0});var Tx=i(ks);$p=r(Tx,"SPAN",{});var $x=i($p);w(Kr.$$.fragment,$x),$x.forEach(t),Tx.forEach(t),o2=u(Fm),Fp=r(Fm,"SPAN",{});var Fx=i(Fp);n2=s(Fx,"TFRobertaModel"),Fx.forEach(t),Fm.forEach(t),wf=u(o),ht=r(o,"DIV",{class:!0});var no=i(ht);w(Jr.$$.fragment,no),s2=u(no),xp=r(no,"P",{});var xx=i(xp);a2=s(xx,"The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),xx.forEach(t),r2=u(no),Vr=r(no,"P",{});var xm=i(Vr);i2=s(xm,"This model inherits from "),qd=r(xm,"A",{href:!0});var Rx=i(qd);l2=s(Rx,"TFPreTrainedModel"),Rx.forEach(t),d2=s(xm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xm.forEach(t),c2=u(no),Gr=r(no,"P",{});var Rm=i(Gr);p2=s(Rm,"This model is also a "),Xr=r(Rm,"A",{href:!0,rel:!0});var Ex=i(Xr);h2=s(Ex,"tf.keras.Model"),Ex.forEach(t),u2=s(Rm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rm.forEach(t),f2=u(no),w(vs.$$.fragment,no),m2=u(no),Kt=r(no,"DIV",{class:!0});var va=i(Kt);w(Yr.$$.fragment,va),g2=u(va),tn=r(va,"P",{});var cc=i(tn);_2=s(cc,"The "),Pd=r(cc,"A",{href:!0});var Mx=i(Pd);b2=s(Mx,"TFRobertaModel"),Mx.forEach(t),k2=s(cc," forward method, overrides the "),Rp=r(cc,"CODE",{});var zx=i(Rp);v2=s(zx,"__call__"),zx.forEach(t),y2=s(cc," special method."),cc.forEach(t),w2=u(va),w(ys.$$.fragment,va),T2=u(va),w(ws.$$.fragment,va),va.forEach(t),no.forEach(t),Tf=u(o),on=r(o,"H2",{class:!0});var Em=i(on);Ts=r(Em,"A",{id:!0,class:!0,href:!0});var jx=i(Ts);Ep=r(jx,"SPAN",{});var Cx=i(Ep);w(Zr.$$.fragment,Cx),Cx.forEach(t),jx.forEach(t),$2=u(Em),Mp=r(Em,"SPAN",{});var qx=i(Mp);F2=s(qx,"TFRobertaForCausalLM"),qx.forEach(t),Em.forEach(t),$f=u(o),nn=r(o,"DIV",{class:!0});var Mm=i(nn);w(ei.$$.fragment,Mm),x2=u(Mm),Jt=r(Mm,"DIV",{class:!0});var ya=i(Jt);w(ti.$$.fragment,ya),R2=u(ya),sn=r(ya,"P",{});var pc=i(sn);E2=s(pc,"The "),Ld=r(pc,"A",{href:!0});var Px=i(Ld);M2=s(Px,"TFRobertaForCausalLM"),Px.forEach(t),z2=s(pc," forward method, overrides the "),zp=r(pc,"CODE",{});var Lx=i(zp);j2=s(Lx,"__call__"),Lx.forEach(t),C2=s(pc," special method."),pc.forEach(t),q2=u(ya),w($s.$$.fragment,ya),P2=u(ya),w(Fs.$$.fragment,ya),ya.forEach(t),Mm.forEach(t),Ff=u(o),an=r(o,"H2",{class:!0});var zm=i(an);xs=r(zm,"A",{id:!0,class:!0,href:!0});var Ax=i(xs);jp=r(Ax,"SPAN",{});var Ox=i(jp);w(oi.$$.fragment,Ox),Ox.forEach(t),Ax.forEach(t),L2=u(zm),Cp=r(zm,"SPAN",{});var Nx=i(Cp);A2=s(Nx,"TFRobertaForMaskedLM"),Nx.forEach(t),zm.forEach(t),xf=u(o),ut=r(o,"DIV",{class:!0});var so=i(ut);w(ni.$$.fragment,so),O2=u(so),si=r(so,"P",{});var jm=i(si);N2=s(jm,"RoBERTa Model with a "),qp=r(jm,"CODE",{});var Ix=i(qp);I2=s(Ix,"language modeling"),Ix.forEach(t),D2=s(jm," head on top."),jm.forEach(t),S2=u(so),ai=r(so,"P",{});var Cm=i(ai);B2=s(Cm,"This model inherits from "),Ad=r(Cm,"A",{href:!0});var Dx=i(Ad);W2=s(Dx,"TFPreTrainedModel"),Dx.forEach(t),U2=s(Cm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cm.forEach(t),H2=u(so),ri=r(so,"P",{});var qm=i(ri);Q2=s(qm,"This model is also a "),ii=r(qm,"A",{href:!0,rel:!0});var Sx=i(ii);K2=s(Sx,"tf.keras.Model"),Sx.forEach(t),J2=s(qm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qm.forEach(t),V2=u(so),w(Rs.$$.fragment,so),G2=u(so),zt=r(so,"DIV",{class:!0});var jo=i(zt);w(li.$$.fragment,jo),X2=u(jo),rn=r(jo,"P",{});var hc=i(rn);Y2=s(hc,"The "),Od=r(hc,"A",{href:!0});var Bx=i(Od);Z2=s(Bx,"TFRobertaForMaskedLM"),Bx.forEach(t),ey=s(hc," forward method, overrides the "),Pp=r(hc,"CODE",{});var Wx=i(Pp);ty=s(Wx,"__call__"),Wx.forEach(t),oy=s(hc," special method."),hc.forEach(t),ny=u(jo),w(Es.$$.fragment,jo),sy=u(jo),w(Ms.$$.fragment,jo),ay=u(jo),w(zs.$$.fragment,jo),jo.forEach(t),so.forEach(t),Rf=u(o),ln=r(o,"H2",{class:!0});var Pm=i(ln);js=r(Pm,"A",{id:!0,class:!0,href:!0});var Ux=i(js);Lp=r(Ux,"SPAN",{});var Hx=i(Lp);w(di.$$.fragment,Hx),Hx.forEach(t),Ux.forEach(t),ry=u(Pm),Ap=r(Pm,"SPAN",{});var Qx=i(Ap);iy=s(Qx,"TFRobertaForSequenceClassification"),Qx.forEach(t),Pm.forEach(t),Ef=u(o),ft=r(o,"DIV",{class:!0});var ao=i(ft);w(ci.$$.fragment,ao),ly=u(ao),Op=r(ao,"P",{});var Kx=i(Op);dy=s(Kx,`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Kx.forEach(t),cy=u(ao),pi=r(ao,"P",{});var Lm=i(pi);py=s(Lm,"This model inherits from "),Nd=r(Lm,"A",{href:!0});var Jx=i(Nd);hy=s(Jx,"TFPreTrainedModel"),Jx.forEach(t),uy=s(Lm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lm.forEach(t),fy=u(ao),hi=r(ao,"P",{});var Am=i(hi);my=s(Am,"This model is also a "),ui=r(Am,"A",{href:!0,rel:!0});var Vx=i(ui);gy=s(Vx,"tf.keras.Model"),Vx.forEach(t),_y=s(Am,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Am.forEach(t),by=u(ao),w(Cs.$$.fragment,ao),ky=u(ao),jt=r(ao,"DIV",{class:!0});var Co=i(jt);w(fi.$$.fragment,Co),vy=u(Co),dn=r(Co,"P",{});var uc=i(dn);yy=s(uc,"The "),Id=r(uc,"A",{href:!0});var Gx=i(Id);wy=s(Gx,"TFRobertaForSequenceClassification"),Gx.forEach(t),Ty=s(uc," forward method, overrides the "),Np=r(uc,"CODE",{});var Xx=i(Np);$y=s(Xx,"__call__"),Xx.forEach(t),Fy=s(uc," special method."),uc.forEach(t),xy=u(Co),w(qs.$$.fragment,Co),Ry=u(Co),w(Ps.$$.fragment,Co),Ey=u(Co),w(Ls.$$.fragment,Co),Co.forEach(t),ao.forEach(t),Mf=u(o),cn=r(o,"H2",{class:!0});var Om=i(cn);As=r(Om,"A",{id:!0,class:!0,href:!0});var Yx=i(As);Ip=r(Yx,"SPAN",{});var Zx=i(Ip);w(mi.$$.fragment,Zx),Zx.forEach(t),Yx.forEach(t),My=u(Om),Dp=r(Om,"SPAN",{});var e4=i(Dp);zy=s(e4,"TFRobertaForMultipleChoice"),e4.forEach(t),Om.forEach(t),zf=u(o),mt=r(o,"DIV",{class:!0});var ro=i(mt);w(gi.$$.fragment,ro),jy=u(ro),Sp=r(ro,"P",{});var t4=i(Sp);Cy=s(t4,`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),t4.forEach(t),qy=u(ro),_i=r(ro,"P",{});var Nm=i(_i);Py=s(Nm,"This model inherits from "),Dd=r(Nm,"A",{href:!0});var o4=i(Dd);Ly=s(o4,"TFPreTrainedModel"),o4.forEach(t),Ay=s(Nm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nm.forEach(t),Oy=u(ro),bi=r(ro,"P",{});var Im=i(bi);Ny=s(Im,"This model is also a "),ki=r(Im,"A",{href:!0,rel:!0});var n4=i(ki);Iy=s(n4,"tf.keras.Model"),n4.forEach(t),Dy=s(Im,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Im.forEach(t),Sy=u(ro),w(Os.$$.fragment,ro),By=u(ro),Vt=r(ro,"DIV",{class:!0});var wa=i(Vt);w(vi.$$.fragment,wa),Wy=u(wa),pn=r(wa,"P",{});var fc=i(pn);Uy=s(fc,"The "),Sd=r(fc,"A",{href:!0});var s4=i(Sd);Hy=s(s4,"TFRobertaForMultipleChoice"),s4.forEach(t),Qy=s(fc," forward method, overrides the "),Bp=r(fc,"CODE",{});var a4=i(Bp);Ky=s(a4,"__call__"),a4.forEach(t),Jy=s(fc," special method."),fc.forEach(t),Vy=u(wa),w(Ns.$$.fragment,wa),Gy=u(wa),w(Is.$$.fragment,wa),wa.forEach(t),ro.forEach(t),jf=u(o),hn=r(o,"H2",{class:!0});var Dm=i(hn);Ds=r(Dm,"A",{id:!0,class:!0,href:!0});var r4=i(Ds);Wp=r(r4,"SPAN",{});var i4=i(Wp);w(yi.$$.fragment,i4),i4.forEach(t),r4.forEach(t),Xy=u(Dm),Up=r(Dm,"SPAN",{});var l4=i(Up);Yy=s(l4,"TFRobertaForTokenClassification"),l4.forEach(t),Dm.forEach(t),Cf=u(o),gt=r(o,"DIV",{class:!0});var io=i(gt);w(wi.$$.fragment,io),Zy=u(io),Hp=r(io,"P",{});var d4=i(Hp);ew=s(d4,`RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),d4.forEach(t),tw=u(io),Ti=r(io,"P",{});var Sm=i(Ti);ow=s(Sm,"This model inherits from "),Bd=r(Sm,"A",{href:!0});var c4=i(Bd);nw=s(c4,"TFPreTrainedModel"),c4.forEach(t),sw=s(Sm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sm.forEach(t),aw=u(io),$i=r(io,"P",{});var Bm=i($i);rw=s(Bm,"This model is also a "),Fi=r(Bm,"A",{href:!0,rel:!0});var p4=i(Fi);iw=s(p4,"tf.keras.Model"),p4.forEach(t),lw=s(Bm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bm.forEach(t),dw=u(io),w(Ss.$$.fragment,io),cw=u(io),Ct=r(io,"DIV",{class:!0});var qo=i(Ct);w(xi.$$.fragment,qo),pw=u(qo),un=r(qo,"P",{});var mc=i(un);hw=s(mc,"The "),Wd=r(mc,"A",{href:!0});var h4=i(Wd);uw=s(h4,"TFRobertaForTokenClassification"),h4.forEach(t),fw=s(mc," forward method, overrides the "),Qp=r(mc,"CODE",{});var u4=i(Qp);mw=s(u4,"__call__"),u4.forEach(t),gw=s(mc," special method."),mc.forEach(t),_w=u(qo),w(Bs.$$.fragment,qo),bw=u(qo),w(Ws.$$.fragment,qo),kw=u(qo),w(Us.$$.fragment,qo),qo.forEach(t),io.forEach(t),qf=u(o),fn=r(o,"H2",{class:!0});var Wm=i(fn);Hs=r(Wm,"A",{id:!0,class:!0,href:!0});var f4=i(Hs);Kp=r(f4,"SPAN",{});var m4=i(Kp);w(Ri.$$.fragment,m4),m4.forEach(t),f4.forEach(t),vw=u(Wm),Jp=r(Wm,"SPAN",{});var g4=i(Jp);yw=s(g4,"TFRobertaForQuestionAnswering"),g4.forEach(t),Wm.forEach(t),Pf=u(o),_t=r(o,"DIV",{class:!0});var lo=i(_t);w(Ei.$$.fragment,lo),ww=u(lo),mn=r(lo,"P",{});var gc=i(mn);Tw=s(gc,`RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Vp=r(gc,"CODE",{});var _4=i(Vp);$w=s(_4,"span start logits"),_4.forEach(t),Fw=s(gc," and "),Gp=r(gc,"CODE",{});var b4=i(Gp);xw=s(b4,"span end logits"),b4.forEach(t),Rw=s(gc,")."),gc.forEach(t),Ew=u(lo),Mi=r(lo,"P",{});var Um=i(Mi);Mw=s(Um,"This model inherits from "),Ud=r(Um,"A",{href:!0});var k4=i(Ud);zw=s(k4,"TFPreTrainedModel"),k4.forEach(t),jw=s(Um,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Um.forEach(t),Cw=u(lo),zi=r(lo,"P",{});var Hm=i(zi);qw=s(Hm,"This model is also a "),ji=r(Hm,"A",{href:!0,rel:!0});var v4=i(ji);Pw=s(v4,"tf.keras.Model"),v4.forEach(t),Lw=s(Hm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hm.forEach(t),Aw=u(lo),w(Qs.$$.fragment,lo),Ow=u(lo),qt=r(lo,"DIV",{class:!0});var Po=i(qt);w(Ci.$$.fragment,Po),Nw=u(Po),gn=r(Po,"P",{});var _c=i(gn);Iw=s(_c,"The "),Hd=r(_c,"A",{href:!0});var y4=i(Hd);Dw=s(y4,"TFRobertaForQuestionAnswering"),y4.forEach(t),Sw=s(_c," forward method, overrides the "),Xp=r(_c,"CODE",{});var w4=i(Xp);Bw=s(w4,"__call__"),w4.forEach(t),Ww=s(_c," special method."),_c.forEach(t),Uw=u(Po),w(Ks.$$.fragment,Po),Hw=u(Po),w(Js.$$.fragment,Po),Qw=u(Po),w(Vs.$$.fragment,Po),Po.forEach(t),lo.forEach(t),Lf=u(o),_n=r(o,"H2",{class:!0});var Qm=i(_n);Gs=r(Qm,"A",{id:!0,class:!0,href:!0});var T4=i(Gs);Yp=r(T4,"SPAN",{});var $4=i(Yp);w(qi.$$.fragment,$4),$4.forEach(t),T4.forEach(t),Kw=u(Qm),Zp=r(Qm,"SPAN",{});var F4=i(Zp);Jw=s(F4,"FlaxRobertaModel"),F4.forEach(t),Qm.forEach(t),Af=u(o),nt=r(o,"DIV",{class:!0});var At=i(nt);w(Pi.$$.fragment,At),Vw=u(At),eh=r(At,"P",{});var x4=i(eh);Gw=s(x4,"The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),x4.forEach(t),Xw=u(At),Li=r(At,"P",{});var Km=i(Li);Yw=s(Km,"This model inherits from "),Qd=r(Km,"A",{href:!0});var R4=i(Qd);Zw=s(R4,"FlaxPreTrainedModel"),R4.forEach(t),eT=s(Km,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Km.forEach(t),tT=u(At),Ai=r(At,"P",{});var Jm=i(Ai);oT=s(Jm,"This model is also a Flax Linen "),Oi=r(Jm,"A",{href:!0,rel:!0});var E4=i(Oi);nT=s(E4,"flax.linen.Module"),E4.forEach(t),sT=s(Jm,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Jm.forEach(t),aT=u(At),th=r(At,"P",{});var M4=i(th);rT=s(M4,"Finally, this model supports inherent JAX features such as:"),M4.forEach(t),iT=u(At),po=r(At,"UL",{});var Ta=i(po);oh=r(Ta,"LI",{});var z4=i(oh);Ni=r(z4,"A",{href:!0,rel:!0});var j4=i(Ni);lT=s(j4,"Just-In-Time (JIT) compilation"),j4.forEach(t),z4.forEach(t),dT=u(Ta),nh=r(Ta,"LI",{});var C4=i(nh);Ii=r(C4,"A",{href:!0,rel:!0});var q4=i(Ii);cT=s(q4,"Automatic Differentiation"),q4.forEach(t),C4.forEach(t),pT=u(Ta),sh=r(Ta,"LI",{});var P4=i(sh);Di=r(P4,"A",{href:!0,rel:!0});var L4=i(Di);hT=s(L4,"Vectorization"),L4.forEach(t),P4.forEach(t),uT=u(Ta),ah=r(Ta,"LI",{});var A4=i(ah);Si=r(A4,"A",{href:!0,rel:!0});var O4=i(Si);fT=s(O4,"Parallelization"),O4.forEach(t),A4.forEach(t),Ta.forEach(t),mT=u(At),Gt=r(At,"DIV",{class:!0});var $a=i(Gt);w(Bi.$$.fragment,$a),gT=u($a),bn=r($a,"P",{});var bc=i(bn);_T=s(bc,"The "),rh=r(bc,"CODE",{});var N4=i(rh);bT=s(N4,"FlaxRobertaPreTrainedModel"),N4.forEach(t),kT=s(bc," forward method, overrides the "),ih=r(bc,"CODE",{});var I4=i(ih);vT=s(I4,"__call__"),I4.forEach(t),yT=s(bc," special method."),bc.forEach(t),wT=u($a),w(Xs.$$.fragment,$a),TT=u($a),w(Ys.$$.fragment,$a),$a.forEach(t),At.forEach(t),Of=u(o),kn=r(o,"H2",{class:!0});var Vm=i(kn);Zs=r(Vm,"A",{id:!0,class:!0,href:!0});var D4=i(Zs);lh=r(D4,"SPAN",{});var S4=i(lh);w(Wi.$$.fragment,S4),S4.forEach(t),D4.forEach(t),$T=u(Vm),dh=r(Vm,"SPAN",{});var B4=i(dh);FT=s(B4,"FlaxRobertaForCausalLM"),B4.forEach(t),Vm.forEach(t),Nf=u(o),st=r(o,"DIV",{class:!0});var Ot=i(st);w(Ui.$$.fragment,Ot),xT=u(Ot),ch=r(Ot,"P",{});var W4=i(ch);RT=s(W4,`Roberta Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),W4.forEach(t),ET=u(Ot),Hi=r(Ot,"P",{});var Gm=i(Hi);MT=s(Gm,"This model inherits from "),Kd=r(Gm,"A",{href:!0});var U4=i(Kd);zT=s(U4,"FlaxPreTrainedModel"),U4.forEach(t),jT=s(Gm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Gm.forEach(t),CT=u(Ot),Qi=r(Ot,"P",{});var Xm=i(Qi);qT=s(Xm,"This model is also a Flax Linen "),Ki=r(Xm,"A",{href:!0,rel:!0});var H4=i(Ki);PT=s(H4,"flax.linen.Module"),H4.forEach(t),LT=s(Xm,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Xm.forEach(t),AT=u(Ot),ph=r(Ot,"P",{});var Q4=i(ph);OT=s(Q4,"Finally, this model supports inherent JAX features such as:"),Q4.forEach(t),NT=u(Ot),ho=r(Ot,"UL",{});var Fa=i(ho);hh=r(Fa,"LI",{});var K4=i(hh);Ji=r(K4,"A",{href:!0,rel:!0});var J4=i(Ji);IT=s(J4,"Just-In-Time (JIT) compilation"),J4.forEach(t),K4.forEach(t),DT=u(Fa),uh=r(Fa,"LI",{});var V4=i(uh);Vi=r(V4,"A",{href:!0,rel:!0});var G4=i(Vi);ST=s(G4,"Automatic Differentiation"),G4.forEach(t),V4.forEach(t),BT=u(Fa),fh=r(Fa,"LI",{});var X4=i(fh);Gi=r(X4,"A",{href:!0,rel:!0});var Y4=i(Gi);WT=s(Y4,"Vectorization"),Y4.forEach(t),X4.forEach(t),UT=u(Fa),mh=r(Fa,"LI",{});var Z4=i(mh);Xi=r(Z4,"A",{href:!0,rel:!0});var eR=i(Xi);HT=s(eR,"Parallelization"),eR.forEach(t),Z4.forEach(t),Fa.forEach(t),QT=u(Ot),Xt=r(Ot,"DIV",{class:!0});var xa=i(Xt);w(Yi.$$.fragment,xa),KT=u(xa),vn=r(xa,"P",{});var kc=i(vn);JT=s(kc,"The "),gh=r(kc,"CODE",{});var tR=i(gh);VT=s(tR,"FlaxRobertaPreTrainedModel"),tR.forEach(t),GT=s(kc," forward method, overrides the "),_h=r(kc,"CODE",{});var oR=i(_h);XT=s(oR,"__call__"),oR.forEach(t),YT=s(kc," special method."),kc.forEach(t),ZT=u(xa),w(ea.$$.fragment,xa),e$=u(xa),w(ta.$$.fragment,xa),xa.forEach(t),Ot.forEach(t),If=u(o),yn=r(o,"H2",{class:!0});var Ym=i(yn);oa=r(Ym,"A",{id:!0,class:!0,href:!0});var nR=i(oa);bh=r(nR,"SPAN",{});var sR=i(bh);w(Zi.$$.fragment,sR),sR.forEach(t),nR.forEach(t),t$=u(Ym),kh=r(Ym,"SPAN",{});var aR=i(kh);o$=s(aR,"FlaxRobertaForMaskedLM"),aR.forEach(t),Ym.forEach(t),Df=u(o),at=r(o,"DIV",{class:!0});var Nt=i(at);w(el.$$.fragment,Nt),n$=u(Nt),tl=r(Nt,"P",{});var Zm=i(tl);s$=s(Zm,"RoBERTa Model with a "),vh=r(Zm,"CODE",{});var rR=i(vh);a$=s(rR,"language modeling"),rR.forEach(t),r$=s(Zm," head on top."),Zm.forEach(t),i$=u(Nt),ol=r(Nt,"P",{});var eg=i(ol);l$=s(eg,"This model inherits from "),Jd=r(eg,"A",{href:!0});var iR=i(Jd);d$=s(iR,"FlaxPreTrainedModel"),iR.forEach(t),c$=s(eg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),eg.forEach(t),p$=u(Nt),nl=r(Nt,"P",{});var tg=i(nl);h$=s(tg,"This model is also a Flax Linen "),sl=r(tg,"A",{href:!0,rel:!0});var lR=i(sl);u$=s(lR,"flax.linen.Module"),lR.forEach(t),f$=s(tg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),tg.forEach(t),m$=u(Nt),yh=r(Nt,"P",{});var dR=i(yh);g$=s(dR,"Finally, this model supports inherent JAX features such as:"),dR.forEach(t),_$=u(Nt),uo=r(Nt,"UL",{});var Ra=i(uo);wh=r(Ra,"LI",{});var cR=i(wh);al=r(cR,"A",{href:!0,rel:!0});var pR=i(al);b$=s(pR,"Just-In-Time (JIT) compilation"),pR.forEach(t),cR.forEach(t),k$=u(Ra),Th=r(Ra,"LI",{});var hR=i(Th);rl=r(hR,"A",{href:!0,rel:!0});var uR=i(rl);v$=s(uR,"Automatic Differentiation"),uR.forEach(t),hR.forEach(t),y$=u(Ra),$h=r(Ra,"LI",{});var fR=i($h);il=r(fR,"A",{href:!0,rel:!0});var mR=i(il);w$=s(mR,"Vectorization"),mR.forEach(t),fR.forEach(t),T$=u(Ra),Fh=r(Ra,"LI",{});var gR=i(Fh);ll=r(gR,"A",{href:!0,rel:!0});var _R=i(ll);$$=s(_R,"Parallelization"),_R.forEach(t),gR.forEach(t),Ra.forEach(t),F$=u(Nt),Yt=r(Nt,"DIV",{class:!0});var Ea=i(Yt);w(dl.$$.fragment,Ea),x$=u(Ea),wn=r(Ea,"P",{});var vc=i(wn);R$=s(vc,"The "),xh=r(vc,"CODE",{});var bR=i(xh);E$=s(bR,"FlaxRobertaPreTrainedModel"),bR.forEach(t),M$=s(vc," forward method, overrides the "),Rh=r(vc,"CODE",{});var kR=i(Rh);z$=s(kR,"__call__"),kR.forEach(t),j$=s(vc," special method."),vc.forEach(t),C$=u(Ea),w(na.$$.fragment,Ea),q$=u(Ea),w(sa.$$.fragment,Ea),Ea.forEach(t),Nt.forEach(t),Sf=u(o),Tn=r(o,"H2",{class:!0});var og=i(Tn);aa=r(og,"A",{id:!0,class:!0,href:!0});var vR=i(aa);Eh=r(vR,"SPAN",{});var yR=i(Eh);w(cl.$$.fragment,yR),yR.forEach(t),vR.forEach(t),P$=u(og),Mh=r(og,"SPAN",{});var wR=i(Mh);L$=s(wR,"FlaxRobertaForSequenceClassification"),wR.forEach(t),og.forEach(t),Bf=u(o),rt=r(o,"DIV",{class:!0});var It=i(rt);w(pl.$$.fragment,It),A$=u(It),zh=r(It,"P",{});var TR=i(zh);O$=s(TR,`Roberta Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),TR.forEach(t),N$=u(It),hl=r(It,"P",{});var ng=i(hl);I$=s(ng,"This model inherits from "),Vd=r(ng,"A",{href:!0});var $R=i(Vd);D$=s($R,"FlaxPreTrainedModel"),$R.forEach(t),S$=s(ng,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ng.forEach(t),B$=u(It),ul=r(It,"P",{});var sg=i(ul);W$=s(sg,"This model is also a Flax Linen "),fl=r(sg,"A",{href:!0,rel:!0});var FR=i(fl);U$=s(FR,"flax.linen.Module"),FR.forEach(t),H$=s(sg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),sg.forEach(t),Q$=u(It),jh=r(It,"P",{});var xR=i(jh);K$=s(xR,"Finally, this model supports inherent JAX features such as:"),xR.forEach(t),J$=u(It),fo=r(It,"UL",{});var Ma=i(fo);Ch=r(Ma,"LI",{});var RR=i(Ch);ml=r(RR,"A",{href:!0,rel:!0});var ER=i(ml);V$=s(ER,"Just-In-Time (JIT) compilation"),ER.forEach(t),RR.forEach(t),G$=u(Ma),qh=r(Ma,"LI",{});var MR=i(qh);gl=r(MR,"A",{href:!0,rel:!0});var zR=i(gl);X$=s(zR,"Automatic Differentiation"),zR.forEach(t),MR.forEach(t),Y$=u(Ma),Ph=r(Ma,"LI",{});var jR=i(Ph);_l=r(jR,"A",{href:!0,rel:!0});var CR=i(_l);Z$=s(CR,"Vectorization"),CR.forEach(t),jR.forEach(t),e1=u(Ma),Lh=r(Ma,"LI",{});var qR=i(Lh);bl=r(qR,"A",{href:!0,rel:!0});var PR=i(bl);t1=s(PR,"Parallelization"),PR.forEach(t),qR.forEach(t),Ma.forEach(t),o1=u(It),Zt=r(It,"DIV",{class:!0});var za=i(Zt);w(kl.$$.fragment,za),n1=u(za),$n=r(za,"P",{});var yc=i($n);s1=s(yc,"The "),Ah=r(yc,"CODE",{});var LR=i(Ah);a1=s(LR,"FlaxRobertaPreTrainedModel"),LR.forEach(t),r1=s(yc," forward method, overrides the "),Oh=r(yc,"CODE",{});var AR=i(Oh);i1=s(AR,"__call__"),AR.forEach(t),l1=s(yc," special method."),yc.forEach(t),d1=u(za),w(ra.$$.fragment,za),c1=u(za),w(ia.$$.fragment,za),za.forEach(t),It.forEach(t),Wf=u(o),Fn=r(o,"H2",{class:!0});var ag=i(Fn);la=r(ag,"A",{id:!0,class:!0,href:!0});var OR=i(la);Nh=r(OR,"SPAN",{});var NR=i(Nh);w(vl.$$.fragment,NR),NR.forEach(t),OR.forEach(t),p1=u(ag),Ih=r(ag,"SPAN",{});var IR=i(Ih);h1=s(IR,"FlaxRobertaForMultipleChoice"),IR.forEach(t),ag.forEach(t),Uf=u(o),it=r(o,"DIV",{class:!0});var Dt=i(it);w(yl.$$.fragment,Dt),u1=u(Dt),Dh=r(Dt,"P",{});var DR=i(Dh);f1=s(DR,`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),DR.forEach(t),m1=u(Dt),wl=r(Dt,"P",{});var rg=i(wl);g1=s(rg,"This model inherits from "),Gd=r(rg,"A",{href:!0});var SR=i(Gd);_1=s(SR,"FlaxPreTrainedModel"),SR.forEach(t),b1=s(rg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),rg.forEach(t),k1=u(Dt),Tl=r(Dt,"P",{});var ig=i(Tl);v1=s(ig,"This model is also a Flax Linen "),$l=r(ig,"A",{href:!0,rel:!0});var BR=i($l);y1=s(BR,"flax.linen.Module"),BR.forEach(t),w1=s(ig,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ig.forEach(t),T1=u(Dt),Sh=r(Dt,"P",{});var WR=i(Sh);$1=s(WR,"Finally, this model supports inherent JAX features such as:"),WR.forEach(t),F1=u(Dt),mo=r(Dt,"UL",{});var ja=i(mo);Bh=r(ja,"LI",{});var UR=i(Bh);Fl=r(UR,"A",{href:!0,rel:!0});var HR=i(Fl);x1=s(HR,"Just-In-Time (JIT) compilation"),HR.forEach(t),UR.forEach(t),R1=u(ja),Wh=r(ja,"LI",{});var QR=i(Wh);xl=r(QR,"A",{href:!0,rel:!0});var KR=i(xl);E1=s(KR,"Automatic Differentiation"),KR.forEach(t),QR.forEach(t),M1=u(ja),Uh=r(ja,"LI",{});var JR=i(Uh);Rl=r(JR,"A",{href:!0,rel:!0});var VR=i(Rl);z1=s(VR,"Vectorization"),VR.forEach(t),JR.forEach(t),j1=u(ja),Hh=r(ja,"LI",{});var GR=i(Hh);El=r(GR,"A",{href:!0,rel:!0});var XR=i(El);C1=s(XR,"Parallelization"),XR.forEach(t),GR.forEach(t),ja.forEach(t),q1=u(Dt),eo=r(Dt,"DIV",{class:!0});var Ca=i(eo);w(Ml.$$.fragment,Ca),P1=u(Ca),xn=r(Ca,"P",{});var wc=i(xn);L1=s(wc,"The "),Qh=r(wc,"CODE",{});var YR=i(Qh);A1=s(YR,"FlaxRobertaPreTrainedModel"),YR.forEach(t),O1=s(wc," forward method, overrides the "),Kh=r(wc,"CODE",{});var ZR=i(Kh);N1=s(ZR,"__call__"),ZR.forEach(t),I1=s(wc," special method."),wc.forEach(t),D1=u(Ca),w(da.$$.fragment,Ca),S1=u(Ca),w(ca.$$.fragment,Ca),Ca.forEach(t),Dt.forEach(t),Hf=u(o),Rn=r(o,"H2",{class:!0});var lg=i(Rn);pa=r(lg,"A",{id:!0,class:!0,href:!0});var eE=i(pa);Jh=r(eE,"SPAN",{});var tE=i(Jh);w(zl.$$.fragment,tE),tE.forEach(t),eE.forEach(t),B1=u(lg),Vh=r(lg,"SPAN",{});var oE=i(Vh);W1=s(oE,"FlaxRobertaForTokenClassification"),oE.forEach(t),lg.forEach(t),Qf=u(o),lt=r(o,"DIV",{class:!0});var St=i(lt);w(jl.$$.fragment,St),U1=u(St),Gh=r(St,"P",{});var nE=i(Gh);H1=s(nE,`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),nE.forEach(t),Q1=u(St),Cl=r(St,"P",{});var dg=i(Cl);K1=s(dg,"This model inherits from "),Xd=r(dg,"A",{href:!0});var sE=i(Xd);J1=s(sE,"FlaxPreTrainedModel"),sE.forEach(t),V1=s(dg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),dg.forEach(t),G1=u(St),ql=r(St,"P",{});var cg=i(ql);X1=s(cg,"This model is also a Flax Linen "),Pl=r(cg,"A",{href:!0,rel:!0});var aE=i(Pl);Y1=s(aE,"flax.linen.Module"),aE.forEach(t),Z1=s(cg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),cg.forEach(t),eF=u(St),Xh=r(St,"P",{});var rE=i(Xh);tF=s(rE,"Finally, this model supports inherent JAX features such as:"),rE.forEach(t),oF=u(St),go=r(St,"UL",{});var qa=i(go);Yh=r(qa,"LI",{});var iE=i(Yh);Ll=r(iE,"A",{href:!0,rel:!0});var lE=i(Ll);nF=s(lE,"Just-In-Time (JIT) compilation"),lE.forEach(t),iE.forEach(t),sF=u(qa),Zh=r(qa,"LI",{});var dE=i(Zh);Al=r(dE,"A",{href:!0,rel:!0});var cE=i(Al);aF=s(cE,"Automatic Differentiation"),cE.forEach(t),dE.forEach(t),rF=u(qa),eu=r(qa,"LI",{});var pE=i(eu);Ol=r(pE,"A",{href:!0,rel:!0});var hE=i(Ol);iF=s(hE,"Vectorization"),hE.forEach(t),pE.forEach(t),lF=u(qa),tu=r(qa,"LI",{});var uE=i(tu);Nl=r(uE,"A",{href:!0,rel:!0});var fE=i(Nl);dF=s(fE,"Parallelization"),fE.forEach(t),uE.forEach(t),qa.forEach(t),cF=u(St),to=r(St,"DIV",{class:!0});var Pa=i(to);w(Il.$$.fragment,Pa),pF=u(Pa),En=r(Pa,"P",{});var Tc=i(En);hF=s(Tc,"The "),ou=r(Tc,"CODE",{});var mE=i(ou);uF=s(mE,"FlaxRobertaPreTrainedModel"),mE.forEach(t),fF=s(Tc," forward method, overrides the "),nu=r(Tc,"CODE",{});var gE=i(nu);mF=s(gE,"__call__"),gE.forEach(t),gF=s(Tc," special method."),Tc.forEach(t),_F=u(Pa),w(ha.$$.fragment,Pa),bF=u(Pa),w(ua.$$.fragment,Pa),Pa.forEach(t),St.forEach(t),Kf=u(o),Mn=r(o,"H2",{class:!0});var pg=i(Mn);fa=r(pg,"A",{id:!0,class:!0,href:!0});var _E=i(fa);su=r(_E,"SPAN",{});var bE=i(su);w(Dl.$$.fragment,bE),bE.forEach(t),_E.forEach(t),kF=u(pg),au=r(pg,"SPAN",{});var kE=i(au);vF=s(kE,"FlaxRobertaForQuestionAnswering"),kE.forEach(t),pg.forEach(t),Jf=u(o),dt=r(o,"DIV",{class:!0});var Bt=i(dt);w(Sl.$$.fragment,Bt),yF=u(Bt),zn=r(Bt,"P",{});var $c=i(zn);wF=s($c,`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ru=r($c,"CODE",{});var vE=i(ru);TF=s(vE,"span start logits"),vE.forEach(t),$F=s($c," and "),iu=r($c,"CODE",{});var yE=i(iu);FF=s(yE,"span end logits"),yE.forEach(t),xF=s($c,")."),$c.forEach(t),RF=u(Bt),Bl=r(Bt,"P",{});var hg=i(Bl);EF=s(hg,"This model inherits from "),Yd=r(hg,"A",{href:!0});var wE=i(Yd);MF=s(wE,"FlaxPreTrainedModel"),wE.forEach(t),zF=s(hg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),hg.forEach(t),jF=u(Bt),Wl=r(Bt,"P",{});var ug=i(Wl);CF=s(ug,"This model is also a Flax Linen "),Ul=r(ug,"A",{href:!0,rel:!0});var TE=i(Ul);qF=s(TE,"flax.linen.Module"),TE.forEach(t),PF=s(ug,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ug.forEach(t),LF=u(Bt),lu=r(Bt,"P",{});var $E=i(lu);AF=s($E,"Finally, this model supports inherent JAX features such as:"),$E.forEach(t),OF=u(Bt),_o=r(Bt,"UL",{});var La=i(_o);du=r(La,"LI",{});var FE=i(du);Hl=r(FE,"A",{href:!0,rel:!0});var xE=i(Hl);NF=s(xE,"Just-In-Time (JIT) compilation"),xE.forEach(t),FE.forEach(t),IF=u(La),cu=r(La,"LI",{});var RE=i(cu);Ql=r(RE,"A",{href:!0,rel:!0});var EE=i(Ql);DF=s(EE,"Automatic Differentiation"),EE.forEach(t),RE.forEach(t),SF=u(La),pu=r(La,"LI",{});var ME=i(pu);Kl=r(ME,"A",{href:!0,rel:!0});var zE=i(Kl);BF=s(zE,"Vectorization"),zE.forEach(t),ME.forEach(t),WF=u(La),hu=r(La,"LI",{});var jE=i(hu);Jl=r(jE,"A",{href:!0,rel:!0});var CE=i(Jl);UF=s(CE,"Parallelization"),CE.forEach(t),jE.forEach(t),La.forEach(t),HF=u(Bt),oo=r(Bt,"DIV",{class:!0});var Aa=i(oo);w(Vl.$$.fragment,Aa),QF=u(Aa),jn=r(Aa,"P",{});var Fc=i(jn);KF=s(Fc,"The "),uu=r(Fc,"CODE",{});var qE=i(uu);JF=s(qE,"FlaxRobertaPreTrainedModel"),qE.forEach(t),VF=s(Fc," forward method, overrides the "),fu=r(Fc,"CODE",{});var PE=i(fu);GF=s(PE,"__call__"),PE.forEach(t),XF=s(Fc," special method."),Fc.forEach(t),YF=u(Aa),w(ma.$$.fragment,Aa),ZF=u(Aa),w(ga.$$.fragment,Aa),Aa.forEach(t),Bt.forEach(t),this.h()},h(){m(d,"name","hf:doc:metadata"),m(d,"content",JSON.stringify(GM)),m(f,"id","roberta"),m(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(f,"href","#roberta"),m(c,"class","relative group"),m(te,"id","overview"),m(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(te,"href","#overview"),m(N,"class","relative group"),m(pe,"href","https://arxiv.org/abs/1907.11692"),m(pe,"rel","nofollow"),m(q,"href","/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertModel"),m(He,"href","camembert"),m(Se,"href","https://huggingface.co/julien-c"),m(Se,"rel","nofollow"),m(Be,"href","https://github.com/pytorch/fairseq/tree/master/examples/roberta"),m(Be,"rel","nofollow"),m(W,"id","transformers.RobertaConfig"),m(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(W,"href","#transformers.RobertaConfig"),m(Oe,"class","relative group"),m(id,"href","/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaModel"),m(ld,"href","/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.TFRobertaModel"),m(Na,"href","https://huggingface.co/roberta-base"),m(Na,"rel","nofollow"),m(dd,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),m(cd,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),m(pd,"href","/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaConfig"),m(hd,"href","/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertConfig"),m(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(On,"id","transformers.RobertaTokenizer"),m(On,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(On,"href","#transformers.RobertaTokenizer"),m(Oo,"class","relative group"),m(ud,"href","/docs/transformers/v4.22.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),m(yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Dn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Sn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(gd,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Bn,"id","transformers.RobertaTokenizerFast"),m(Bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Bn,"href","#transformers.RobertaTokenizerFast"),m(No,"class","relative group"),m(_d,"href","/docs/transformers/v4.22.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),m(bd,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Hn,"id","transformers.RobertaModel"),m(Hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Hn,"href","#transformers.RobertaModel"),m(Io,"class","relative group"),m(kd,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),m(ar,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(ar,"rel","nofollow"),m(ir,"href","https://arxiv.org/abs/1706.03762"),m(ir,"rel","nofollow"),m(vd,"href","/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaModel"),m(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Vn,"id","transformers.RobertaForCausalLM"),m(Vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Vn,"href","#transformers.RobertaForCausalLM"),m(So,"class","relative group"),m(yd,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),m(fr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(fr,"rel","nofollow"),m(wd,"href","/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaForCausalLM"),m(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Yn,"id","transformers.RobertaForMaskedLM"),m(Yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Yn,"href","#transformers.RobertaForMaskedLM"),m(Wo,"class","relative group"),m(Td,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),m(yr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(yr,"rel","nofollow"),m($d,"href","/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaForMaskedLM"),m(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(os,"id","transformers.RobertaForSequenceClassification"),m(os,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(os,"href","#transformers.RobertaForSequenceClassification"),m(Ho,"class","relative group"),m(Fd,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),m(Rr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Rr,"rel","nofollow"),m(xd,"href","/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaForSequenceClassification"),m(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ls,"id","transformers.RobertaForMultipleChoice"),m(ls,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ls,"href","#transformers.RobertaForMultipleChoice"),m(Ko,"class","relative group"),m(Rd,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),m(qr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(qr,"rel","nofollow"),m(Ed,"href","/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaForMultipleChoice"),m(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ps,"id","transformers.RobertaForTokenClassification"),m(ps,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ps,"href","#transformers.RobertaForTokenClassification"),m(Vo,"class","relative group"),m(Md,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),m(Ir,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Ir,"rel","nofollow"),m(zd,"href","/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaForTokenClassification"),m(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ms,"id","transformers.RobertaForQuestionAnswering"),m(ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ms,"href","#transformers.RobertaForQuestionAnswering"),m(Xo,"class","relative group"),m(jd,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),m(Hr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Hr,"rel","nofollow"),m(Cd,"href","/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.RobertaForQuestionAnswering"),m(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ks,"id","transformers.TFRobertaModel"),m(ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ks,"href","#transformers.TFRobertaModel"),m(en,"class","relative group"),m(qd,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),m(Xr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Xr,"rel","nofollow"),m(Pd,"href","/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.TFRobertaModel"),m(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ts,"id","transformers.TFRobertaForCausalLM"),m(Ts,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ts,"href","#transformers.TFRobertaForCausalLM"),m(on,"class","relative group"),m(Ld,"href","/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.TFRobertaForCausalLM"),m(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(nn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(xs,"id","transformers.TFRobertaForMaskedLM"),m(xs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(xs,"href","#transformers.TFRobertaForMaskedLM"),m(an,"class","relative group"),m(Ad,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),m(ii,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(ii,"rel","nofollow"),m(Od,"href","/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.TFRobertaForMaskedLM"),m(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(js,"id","transformers.TFRobertaForSequenceClassification"),m(js,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(js,"href","#transformers.TFRobertaForSequenceClassification"),m(ln,"class","relative group"),m(Nd,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),m(ui,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(ui,"rel","nofollow"),m(Id,"href","/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.TFRobertaForSequenceClassification"),m(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(As,"id","transformers.TFRobertaForMultipleChoice"),m(As,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(As,"href","#transformers.TFRobertaForMultipleChoice"),m(cn,"class","relative group"),m(Dd,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),m(ki,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(ki,"rel","nofollow"),m(Sd,"href","/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.TFRobertaForMultipleChoice"),m(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ds,"id","transformers.TFRobertaForTokenClassification"),m(Ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ds,"href","#transformers.TFRobertaForTokenClassification"),m(hn,"class","relative group"),m(Bd,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),m(Fi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Fi,"rel","nofollow"),m(Wd,"href","/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.TFRobertaForTokenClassification"),m(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Hs,"id","transformers.TFRobertaForQuestionAnswering"),m(Hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Hs,"href","#transformers.TFRobertaForQuestionAnswering"),m(fn,"class","relative group"),m(Ud,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),m(ji,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(ji,"rel","nofollow"),m(Hd,"href","/docs/transformers/v4.22.2/en/model_doc/roberta#transformers.TFRobertaForQuestionAnswering"),m(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Gs,"id","transformers.FlaxRobertaModel"),m(Gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Gs,"href","#transformers.FlaxRobertaModel"),m(_n,"class","relative group"),m(Qd,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(Oi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),m(Oi,"rel","nofollow"),m(Ni,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(Ni,"rel","nofollow"),m(Ii,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(Ii,"rel","nofollow"),m(Di,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(Di,"rel","nofollow"),m(Si,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(Si,"rel","nofollow"),m(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Zs,"id","transformers.FlaxRobertaForCausalLM"),m(Zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Zs,"href","#transformers.FlaxRobertaForCausalLM"),m(kn,"class","relative group"),m(Kd,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(Ki,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),m(Ki,"rel","nofollow"),m(Ji,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(Ji,"rel","nofollow"),m(Vi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(Vi,"rel","nofollow"),m(Gi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(Gi,"rel","nofollow"),m(Xi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(Xi,"rel","nofollow"),m(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(oa,"id","transformers.FlaxRobertaForMaskedLM"),m(oa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(oa,"href","#transformers.FlaxRobertaForMaskedLM"),m(yn,"class","relative group"),m(Jd,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(sl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),m(sl,"rel","nofollow"),m(al,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(al,"rel","nofollow"),m(rl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(rl,"rel","nofollow"),m(il,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(il,"rel","nofollow"),m(ll,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(ll,"rel","nofollow"),m(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(aa,"id","transformers.FlaxRobertaForSequenceClassification"),m(aa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(aa,"href","#transformers.FlaxRobertaForSequenceClassification"),m(Tn,"class","relative group"),m(Vd,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(fl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),m(fl,"rel","nofollow"),m(ml,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(ml,"rel","nofollow"),m(gl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(gl,"rel","nofollow"),m(_l,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(_l,"rel","nofollow"),m(bl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(bl,"rel","nofollow"),m(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(la,"id","transformers.FlaxRobertaForMultipleChoice"),m(la,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(la,"href","#transformers.FlaxRobertaForMultipleChoice"),m(Fn,"class","relative group"),m(Gd,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),m($l,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),m($l,"rel","nofollow"),m(Fl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(Fl,"rel","nofollow"),m(xl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(xl,"rel","nofollow"),m(Rl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(Rl,"rel","nofollow"),m(El,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(El,"rel","nofollow"),m(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(pa,"id","transformers.FlaxRobertaForTokenClassification"),m(pa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(pa,"href","#transformers.FlaxRobertaForTokenClassification"),m(Rn,"class","relative group"),m(Xd,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(Pl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),m(Pl,"rel","nofollow"),m(Ll,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(Ll,"rel","nofollow"),m(Al,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(Al,"rel","nofollow"),m(Ol,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(Ol,"rel","nofollow"),m(Nl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(Nl,"rel","nofollow"),m(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(fa,"id","transformers.FlaxRobertaForQuestionAnswering"),m(fa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(fa,"href","#transformers.FlaxRobertaForQuestionAnswering"),m(Mn,"class","relative group"),m(Yd,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.FlaxPreTrainedModel"),m(Ul,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),m(Ul,"rel","nofollow"),m(Hl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),m(Hl,"rel","nofollow"),m(Ql,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),m(Ql,"rel","nofollow"),m(Kl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),m(Kl,"rel","nofollow"),m(Jl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),m(Jl,"rel","nofollow"),m(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,b){e(document.head,d),k(o,g,b),k(o,c,b),e(c,f),e(f,_),T(l,_,null),e(c,p),e(c,E),e(E,le),k(o,Z,b),k(o,N,b),e(N,te),e(te,oe),T(M,oe,null),e(N,we),e(N,K),e(K,Te),k(o,ge,b),k(o,B,b),e(B,$e),e(B,pe),e(pe,J),e(B,Fe),k(o,_e,b),k(o,U,b),e(U,xe),k(o,be,b),k(o,H,b),e(H,Re),k(o,ke,b),k(o,ee,b),e(ee,C),e(C,P),k(o,ve,b),k(o,Q,b),e(Q,Ee),k(o,ye,b),k(o,I,b),e(I,he),e(he,Me),e(he,q),e(q,ze),e(he,V),e(I,je),e(I,ue),e(ue,G),e(I,Ce),e(I,ne),e(ne,D),e(ne,fe),e(fe,X),e(ne,qe),e(ne,se),e(se,L),e(ne,Pe),e(ne,A),e(A,Le),e(ne,Ae),e(I,v),e(I,z),e(z,He),e(He,de),e(z,Xe),k(o,Je,b),k(o,j,b),e(j,Ye),e(j,Se),e(Se,Ze),e(j,et),e(j,Be),e(Be,S),e(j,Y),k(o,Ve,b),k(o,Oe,b),e(Oe,W),e(W,Qe),T(We,Qe,null),e(Oe,Ne),e(Oe,Ke),e(Ke,ce),k(o,Ge,b),k(o,vt,b),T(Oa,vt,null),e(vt,fg),e(vt,co),e(co,mg),e(co,id),e(id,gg),e(co,_g),e(co,ld),e(ld,bg),e(co,kg),e(co,Na),e(Na,vg),e(co,yg),e(vt,wg),e(vt,Lo),e(Lo,Tg),e(Lo,dd),e(dd,$g),e(Lo,Fg),e(Lo,cd),e(cd,xg),e(Lo,Rg),e(vt,Eg),e(vt,Ao),e(Ao,Mg),e(Ao,pd),e(pd,zg),e(Ao,jg),e(Ao,hd),e(hd,Cg),e(Ao,qg),e(vt,Pg),T(An,vt,null),k(o,of,b),k(o,Oo,b),e(Oo,On),e(On,xc),T(Ia,xc,null),e(Oo,Lg),e(Oo,Rc),e(Rc,Ag),k(o,nf,b),k(o,Ie,b),T(Da,Ie,null),e(Ie,Og),e(Ie,Ec),e(Ec,Ng),e(Ie,Ig),e(Ie,Mc),e(Mc,Dg),e(Ie,Sg),T(Nn,Ie,null),e(Ie,Bg),e(Ie,Sa),e(Sa,Wg),e(Sa,zc),e(zc,Ug),e(Sa,Hg),e(Ie,Qg),T(In,Ie,null),e(Ie,Kg),e(Ie,Ba),e(Ba,Jg),e(Ba,ud),e(ud,Vg),e(Ba,Gg),e(Ie,Xg),e(Ie,yo),T(Wa,yo,null),e(yo,Yg),e(yo,jc),e(jc,Zg),e(yo,e_),e(yo,Ua),e(Ua,fd),e(fd,t_),e(fd,Cc),e(Cc,o_),e(Ua,n_),e(Ua,md),e(md,s_),e(md,qc),e(qc,a_),e(Ie,r_),e(Ie,Dn),T(Ha,Dn,null),e(Dn,i_),e(Dn,Qa),e(Qa,l_),e(Qa,Pc),e(Pc,d_),e(Qa,c_),e(Ie,p_),e(Ie,Sn),T(Ka,Sn,null),e(Sn,h_),e(Sn,Lc),e(Lc,u_),e(Ie,f_),e(Ie,gd),T(Ja,gd,null),k(o,sf,b),k(o,No,b),e(No,Bn),e(Bn,Ac),T(Va,Ac,null),e(No,m_),e(No,Oc),e(Oc,g_),k(o,af,b),k(o,tt,b),T(Ga,tt,null),e(tt,__),e(tt,Xa),e(Xa,b_),e(Xa,Nc),e(Nc,k_),e(Xa,v_),e(tt,y_),e(tt,Ic),e(Ic,w_),e(tt,T_),T(Wn,tt,null),e(tt,$_),e(tt,Ya),e(Ya,F_),e(Ya,Dc),e(Dc,x_),e(Ya,R_),e(tt,E_),T(Un,tt,null),e(tt,M_),e(tt,Za),e(Za,z_),e(Za,_d),e(_d,j_),e(Za,C_),e(tt,q_),e(tt,bd),T(er,bd,null),k(o,rf,b),k(o,Io,b),e(Io,Hn),e(Hn,Sc),T(tr,Sc,null),e(Io,P_),e(Io,Bc),e(Bc,L_),k(o,lf,b),k(o,ot,b),T(or,ot,null),e(ot,A_),e(ot,Wc),e(Wc,O_),e(ot,N_),e(ot,nr),e(nr,I_),e(nr,kd),e(kd,D_),e(nr,S_),e(ot,B_),e(ot,sr),e(sr,W_),e(sr,ar),e(ar,U_),e(sr,H_),e(ot,Q_),e(ot,rr),e(rr,K_),e(rr,Uc),e(Uc,J_),e(rr,V_),e(ot,G_),e(ot,pt),e(pt,X_),e(pt,Hc),e(Hc,Y_),e(pt,Z_),e(pt,Qc),e(Qc,eb),e(pt,tb),e(pt,Kc),e(Kc,ob),e(pt,nb),e(pt,Jc),e(Jc,sb),e(pt,ab),e(pt,Vc),e(Vc,rb),e(pt,ib),e(pt,Gc),e(Gc,lb),e(pt,db),e(ot,cb),e(ot,Qn),e(Qn,pb),e(Qn,Xc),e(Xc,hb),e(Qn,ub),e(Qn,ir),e(ir,fb),e(ot,mb),e(ot,Ut),T(lr,Ut,null),e(Ut,gb),e(Ut,Do),e(Do,_b),e(Do,vd),e(vd,bb),e(Do,kb),e(Do,Yc),e(Yc,vb),e(Do,yb),e(Ut,wb),T(Kn,Ut,null),e(Ut,Tb),T(Jn,Ut,null),k(o,df,b),k(o,So,b),e(So,Vn),e(Vn,Zc),T(dr,Zc,null),e(So,$b),e(So,ep),e(ep,Fb),k(o,cf,b),k(o,yt,b),T(cr,yt,null),e(yt,xb),e(yt,pr),e(pr,Rb),e(pr,tp),e(tp,Eb),e(pr,Mb),e(yt,zb),e(yt,hr),e(hr,jb),e(hr,yd),e(yd,Cb),e(hr,qb),e(yt,Pb),e(yt,ur),e(ur,Lb),e(ur,fr),e(fr,Ab),e(ur,Ob),e(yt,Nb),e(yt,Ht),T(mr,Ht,null),e(Ht,Ib),e(Ht,Bo),e(Bo,Db),e(Bo,wd),e(wd,Sb),e(Bo,Bb),e(Bo,op),e(op,Wb),e(Bo,Ub),e(Ht,Hb),T(Gn,Ht,null),e(Ht,Qb),T(Xn,Ht,null),k(o,pf,b),k(o,Wo,b),e(Wo,Yn),e(Yn,np),T(gr,np,null),e(Wo,Kb),e(Wo,sp),e(sp,Jb),k(o,hf,b),k(o,wt,b),T(_r,wt,null),e(wt,Vb),e(wt,br),e(br,Gb),e(br,ap),e(ap,Xb),e(br,Yb),e(wt,Zb),e(wt,kr),e(kr,ek),e(kr,Td),e(Td,tk),e(kr,ok),e(wt,nk),e(wt,vr),e(vr,sk),e(vr,yr),e(yr,ak),e(vr,rk),e(wt,ik),e(wt,Rt),T(wr,Rt,null),e(Rt,lk),e(Rt,Uo),e(Uo,dk),e(Uo,$d),e($d,ck),e(Uo,pk),e(Uo,rp),e(rp,hk),e(Uo,uk),e(Rt,fk),T(Zn,Rt,null),e(Rt,mk),T(es,Rt,null),e(Rt,gk),T(ts,Rt,null),k(o,uf,b),k(o,Ho,b),e(Ho,os),e(os,ip),T(Tr,ip,null),e(Ho,_k),e(Ho,lp),e(lp,bk),k(o,ff,b),k(o,Tt,b),T($r,Tt,null),e(Tt,kk),e(Tt,dp),e(dp,vk),e(Tt,yk),e(Tt,Fr),e(Fr,wk),e(Fr,Fd),e(Fd,Tk),e(Fr,$k),e(Tt,Fk),e(Tt,xr),e(xr,xk),e(xr,Rr),e(Rr,Rk),e(xr,Ek),e(Tt,Mk),e(Tt,ct),T(Er,ct,null),e(ct,zk),e(ct,Qo),e(Qo,jk),e(Qo,xd),e(xd,Ck),e(Qo,qk),e(Qo,cp),e(cp,Pk),e(Qo,Lk),e(ct,Ak),T(ns,ct,null),e(ct,Ok),T(ss,ct,null),e(ct,Nk),T(as,ct,null),e(ct,Ik),T(rs,ct,null),e(ct,Dk),T(is,ct,null),k(o,mf,b),k(o,Ko,b),e(Ko,ls),e(ls,pp),T(Mr,pp,null),e(Ko,Sk),e(Ko,hp),e(hp,Bk),k(o,gf,b),k(o,$t,b),T(zr,$t,null),e($t,Wk),e($t,up),e(up,Uk),e($t,Hk),e($t,jr),e(jr,Qk),e(jr,Rd),e(Rd,Kk),e(jr,Jk),e($t,Vk),e($t,Cr),e(Cr,Gk),e(Cr,qr),e(qr,Xk),e(Cr,Yk),e($t,Zk),e($t,Qt),T(Pr,Qt,null),e(Qt,ev),e(Qt,Jo),e(Jo,tv),e(Jo,Ed),e(Ed,ov),e(Jo,nv),e(Jo,fp),e(fp,sv),e(Jo,av),e(Qt,rv),T(ds,Qt,null),e(Qt,iv),T(cs,Qt,null),k(o,_f,b),k(o,Vo,b),e(Vo,ps),e(ps,mp),T(Lr,mp,null),e(Vo,lv),e(Vo,gp),e(gp,dv),k(o,bf,b),k(o,Ft,b),T(Ar,Ft,null),e(Ft,cv),e(Ft,_p),e(_p,pv),e(Ft,hv),e(Ft,Or),e(Or,uv),e(Or,Md),e(Md,fv),e(Or,mv),e(Ft,gv),e(Ft,Nr),e(Nr,_v),e(Nr,Ir),e(Ir,bv),e(Nr,kv),e(Ft,vv),e(Ft,Et),T(Dr,Et,null),e(Et,yv),e(Et,Go),e(Go,wv),e(Go,zd),e(zd,Tv),e(Go,$v),e(Go,bp),e(bp,Fv),e(Go,xv),e(Et,Rv),T(hs,Et,null),e(Et,Ev),T(us,Et,null),e(Et,Mv),T(fs,Et,null),k(o,kf,b),k(o,Xo,b),e(Xo,ms),e(ms,kp),T(Sr,kp,null),e(Xo,zv),e(Xo,vp),e(vp,jv),k(o,vf,b),k(o,xt,b),T(Br,xt,null),e(xt,Cv),e(xt,Yo),e(Yo,qv),e(Yo,yp),e(yp,Pv),e(Yo,Lv),e(Yo,wp),e(wp,Av),e(Yo,Ov),e(xt,Nv),e(xt,Wr),e(Wr,Iv),e(Wr,jd),e(jd,Dv),e(Wr,Sv),e(xt,Bv),e(xt,Ur),e(Ur,Wv),e(Ur,Hr),e(Hr,Uv),e(Ur,Hv),e(xt,Qv),e(xt,Mt),T(Qr,Mt,null),e(Mt,Kv),e(Mt,Zo),e(Zo,Jv),e(Zo,Cd),e(Cd,Vv),e(Zo,Gv),e(Zo,Tp),e(Tp,Xv),e(Zo,Yv),e(Mt,Zv),T(gs,Mt,null),e(Mt,e2),T(_s,Mt,null),e(Mt,t2),T(bs,Mt,null),k(o,yf,b),k(o,en,b),e(en,ks),e(ks,$p),T(Kr,$p,null),e(en,o2),e(en,Fp),e(Fp,n2),k(o,wf,b),k(o,ht,b),T(Jr,ht,null),e(ht,s2),e(ht,xp),e(xp,a2),e(ht,r2),e(ht,Vr),e(Vr,i2),e(Vr,qd),e(qd,l2),e(Vr,d2),e(ht,c2),e(ht,Gr),e(Gr,p2),e(Gr,Xr),e(Xr,h2),e(Gr,u2),e(ht,f2),T(vs,ht,null),e(ht,m2),e(ht,Kt),T(Yr,Kt,null),e(Kt,g2),e(Kt,tn),e(tn,_2),e(tn,Pd),e(Pd,b2),e(tn,k2),e(tn,Rp),e(Rp,v2),e(tn,y2),e(Kt,w2),T(ys,Kt,null),e(Kt,T2),T(ws,Kt,null),k(o,Tf,b),k(o,on,b),e(on,Ts),e(Ts,Ep),T(Zr,Ep,null),e(on,$2),e(on,Mp),e(Mp,F2),k(o,$f,b),k(o,nn,b),T(ei,nn,null),e(nn,x2),e(nn,Jt),T(ti,Jt,null),e(Jt,R2),e(Jt,sn),e(sn,E2),e(sn,Ld),e(Ld,M2),e(sn,z2),e(sn,zp),e(zp,j2),e(sn,C2),e(Jt,q2),T($s,Jt,null),e(Jt,P2),T(Fs,Jt,null),k(o,Ff,b),k(o,an,b),e(an,xs),e(xs,jp),T(oi,jp,null),e(an,L2),e(an,Cp),e(Cp,A2),k(o,xf,b),k(o,ut,b),T(ni,ut,null),e(ut,O2),e(ut,si),e(si,N2),e(si,qp),e(qp,I2),e(si,D2),e(ut,S2),e(ut,ai),e(ai,B2),e(ai,Ad),e(Ad,W2),e(ai,U2),e(ut,H2),e(ut,ri),e(ri,Q2),e(ri,ii),e(ii,K2),e(ri,J2),e(ut,V2),T(Rs,ut,null),e(ut,G2),e(ut,zt),T(li,zt,null),e(zt,X2),e(zt,rn),e(rn,Y2),e(rn,Od),e(Od,Z2),e(rn,ey),e(rn,Pp),e(Pp,ty),e(rn,oy),e(zt,ny),T(Es,zt,null),e(zt,sy),T(Ms,zt,null),e(zt,ay),T(zs,zt,null),k(o,Rf,b),k(o,ln,b),e(ln,js),e(js,Lp),T(di,Lp,null),e(ln,ry),e(ln,Ap),e(Ap,iy),k(o,Ef,b),k(o,ft,b),T(ci,ft,null),e(ft,ly),e(ft,Op),e(Op,dy),e(ft,cy),e(ft,pi),e(pi,py),e(pi,Nd),e(Nd,hy),e(pi,uy),e(ft,fy),e(ft,hi),e(hi,my),e(hi,ui),e(ui,gy),e(hi,_y),e(ft,by),T(Cs,ft,null),e(ft,ky),e(ft,jt),T(fi,jt,null),e(jt,vy),e(jt,dn),e(dn,yy),e(dn,Id),e(Id,wy),e(dn,Ty),e(dn,Np),e(Np,$y),e(dn,Fy),e(jt,xy),T(qs,jt,null),e(jt,Ry),T(Ps,jt,null),e(jt,Ey),T(Ls,jt,null),k(o,Mf,b),k(o,cn,b),e(cn,As),e(As,Ip),T(mi,Ip,null),e(cn,My),e(cn,Dp),e(Dp,zy),k(o,zf,b),k(o,mt,b),T(gi,mt,null),e(mt,jy),e(mt,Sp),e(Sp,Cy),e(mt,qy),e(mt,_i),e(_i,Py),e(_i,Dd),e(Dd,Ly),e(_i,Ay),e(mt,Oy),e(mt,bi),e(bi,Ny),e(bi,ki),e(ki,Iy),e(bi,Dy),e(mt,Sy),T(Os,mt,null),e(mt,By),e(mt,Vt),T(vi,Vt,null),e(Vt,Wy),e(Vt,pn),e(pn,Uy),e(pn,Sd),e(Sd,Hy),e(pn,Qy),e(pn,Bp),e(Bp,Ky),e(pn,Jy),e(Vt,Vy),T(Ns,Vt,null),e(Vt,Gy),T(Is,Vt,null),k(o,jf,b),k(o,hn,b),e(hn,Ds),e(Ds,Wp),T(yi,Wp,null),e(hn,Xy),e(hn,Up),e(Up,Yy),k(o,Cf,b),k(o,gt,b),T(wi,gt,null),e(gt,Zy),e(gt,Hp),e(Hp,ew),e(gt,tw),e(gt,Ti),e(Ti,ow),e(Ti,Bd),e(Bd,nw),e(Ti,sw),e(gt,aw),e(gt,$i),e($i,rw),e($i,Fi),e(Fi,iw),e($i,lw),e(gt,dw),T(Ss,gt,null),e(gt,cw),e(gt,Ct),T(xi,Ct,null),e(Ct,pw),e(Ct,un),e(un,hw),e(un,Wd),e(Wd,uw),e(un,fw),e(un,Qp),e(Qp,mw),e(un,gw),e(Ct,_w),T(Bs,Ct,null),e(Ct,bw),T(Ws,Ct,null),e(Ct,kw),T(Us,Ct,null),k(o,qf,b),k(o,fn,b),e(fn,Hs),e(Hs,Kp),T(Ri,Kp,null),e(fn,vw),e(fn,Jp),e(Jp,yw),k(o,Pf,b),k(o,_t,b),T(Ei,_t,null),e(_t,ww),e(_t,mn),e(mn,Tw),e(mn,Vp),e(Vp,$w),e(mn,Fw),e(mn,Gp),e(Gp,xw),e(mn,Rw),e(_t,Ew),e(_t,Mi),e(Mi,Mw),e(Mi,Ud),e(Ud,zw),e(Mi,jw),e(_t,Cw),e(_t,zi),e(zi,qw),e(zi,ji),e(ji,Pw),e(zi,Lw),e(_t,Aw),T(Qs,_t,null),e(_t,Ow),e(_t,qt),T(Ci,qt,null),e(qt,Nw),e(qt,gn),e(gn,Iw),e(gn,Hd),e(Hd,Dw),e(gn,Sw),e(gn,Xp),e(Xp,Bw),e(gn,Ww),e(qt,Uw),T(Ks,qt,null),e(qt,Hw),T(Js,qt,null),e(qt,Qw),T(Vs,qt,null),k(o,Lf,b),k(o,_n,b),e(_n,Gs),e(Gs,Yp),T(qi,Yp,null),e(_n,Kw),e(_n,Zp),e(Zp,Jw),k(o,Af,b),k(o,nt,b),T(Pi,nt,null),e(nt,Vw),e(nt,eh),e(eh,Gw),e(nt,Xw),e(nt,Li),e(Li,Yw),e(Li,Qd),e(Qd,Zw),e(Li,eT),e(nt,tT),e(nt,Ai),e(Ai,oT),e(Ai,Oi),e(Oi,nT),e(Ai,sT),e(nt,aT),e(nt,th),e(th,rT),e(nt,iT),e(nt,po),e(po,oh),e(oh,Ni),e(Ni,lT),e(po,dT),e(po,nh),e(nh,Ii),e(Ii,cT),e(po,pT),e(po,sh),e(sh,Di),e(Di,hT),e(po,uT),e(po,ah),e(ah,Si),e(Si,fT),e(nt,mT),e(nt,Gt),T(Bi,Gt,null),e(Gt,gT),e(Gt,bn),e(bn,_T),e(bn,rh),e(rh,bT),e(bn,kT),e(bn,ih),e(ih,vT),e(bn,yT),e(Gt,wT),T(Xs,Gt,null),e(Gt,TT),T(Ys,Gt,null),k(o,Of,b),k(o,kn,b),e(kn,Zs),e(Zs,lh),T(Wi,lh,null),e(kn,$T),e(kn,dh),e(dh,FT),k(o,Nf,b),k(o,st,b),T(Ui,st,null),e(st,xT),e(st,ch),e(ch,RT),e(st,ET),e(st,Hi),e(Hi,MT),e(Hi,Kd),e(Kd,zT),e(Hi,jT),e(st,CT),e(st,Qi),e(Qi,qT),e(Qi,Ki),e(Ki,PT),e(Qi,LT),e(st,AT),e(st,ph),e(ph,OT),e(st,NT),e(st,ho),e(ho,hh),e(hh,Ji),e(Ji,IT),e(ho,DT),e(ho,uh),e(uh,Vi),e(Vi,ST),e(ho,BT),e(ho,fh),e(fh,Gi),e(Gi,WT),e(ho,UT),e(ho,mh),e(mh,Xi),e(Xi,HT),e(st,QT),e(st,Xt),T(Yi,Xt,null),e(Xt,KT),e(Xt,vn),e(vn,JT),e(vn,gh),e(gh,VT),e(vn,GT),e(vn,_h),e(_h,XT),e(vn,YT),e(Xt,ZT),T(ea,Xt,null),e(Xt,e$),T(ta,Xt,null),k(o,If,b),k(o,yn,b),e(yn,oa),e(oa,bh),T(Zi,bh,null),e(yn,t$),e(yn,kh),e(kh,o$),k(o,Df,b),k(o,at,b),T(el,at,null),e(at,n$),e(at,tl),e(tl,s$),e(tl,vh),e(vh,a$),e(tl,r$),e(at,i$),e(at,ol),e(ol,l$),e(ol,Jd),e(Jd,d$),e(ol,c$),e(at,p$),e(at,nl),e(nl,h$),e(nl,sl),e(sl,u$),e(nl,f$),e(at,m$),e(at,yh),e(yh,g$),e(at,_$),e(at,uo),e(uo,wh),e(wh,al),e(al,b$),e(uo,k$),e(uo,Th),e(Th,rl),e(rl,v$),e(uo,y$),e(uo,$h),e($h,il),e(il,w$),e(uo,T$),e(uo,Fh),e(Fh,ll),e(ll,$$),e(at,F$),e(at,Yt),T(dl,Yt,null),e(Yt,x$),e(Yt,wn),e(wn,R$),e(wn,xh),e(xh,E$),e(wn,M$),e(wn,Rh),e(Rh,z$),e(wn,j$),e(Yt,C$),T(na,Yt,null),e(Yt,q$),T(sa,Yt,null),k(o,Sf,b),k(o,Tn,b),e(Tn,aa),e(aa,Eh),T(cl,Eh,null),e(Tn,P$),e(Tn,Mh),e(Mh,L$),k(o,Bf,b),k(o,rt,b),T(pl,rt,null),e(rt,A$),e(rt,zh),e(zh,O$),e(rt,N$),e(rt,hl),e(hl,I$),e(hl,Vd),e(Vd,D$),e(hl,S$),e(rt,B$),e(rt,ul),e(ul,W$),e(ul,fl),e(fl,U$),e(ul,H$),e(rt,Q$),e(rt,jh),e(jh,K$),e(rt,J$),e(rt,fo),e(fo,Ch),e(Ch,ml),e(ml,V$),e(fo,G$),e(fo,qh),e(qh,gl),e(gl,X$),e(fo,Y$),e(fo,Ph),e(Ph,_l),e(_l,Z$),e(fo,e1),e(fo,Lh),e(Lh,bl),e(bl,t1),e(rt,o1),e(rt,Zt),T(kl,Zt,null),e(Zt,n1),e(Zt,$n),e($n,s1),e($n,Ah),e(Ah,a1),e($n,r1),e($n,Oh),e(Oh,i1),e($n,l1),e(Zt,d1),T(ra,Zt,null),e(Zt,c1),T(ia,Zt,null),k(o,Wf,b),k(o,Fn,b),e(Fn,la),e(la,Nh),T(vl,Nh,null),e(Fn,p1),e(Fn,Ih),e(Ih,h1),k(o,Uf,b),k(o,it,b),T(yl,it,null),e(it,u1),e(it,Dh),e(Dh,f1),e(it,m1),e(it,wl),e(wl,g1),e(wl,Gd),e(Gd,_1),e(wl,b1),e(it,k1),e(it,Tl),e(Tl,v1),e(Tl,$l),e($l,y1),e(Tl,w1),e(it,T1),e(it,Sh),e(Sh,$1),e(it,F1),e(it,mo),e(mo,Bh),e(Bh,Fl),e(Fl,x1),e(mo,R1),e(mo,Wh),e(Wh,xl),e(xl,E1),e(mo,M1),e(mo,Uh),e(Uh,Rl),e(Rl,z1),e(mo,j1),e(mo,Hh),e(Hh,El),e(El,C1),e(it,q1),e(it,eo),T(Ml,eo,null),e(eo,P1),e(eo,xn),e(xn,L1),e(xn,Qh),e(Qh,A1),e(xn,O1),e(xn,Kh),e(Kh,N1),e(xn,I1),e(eo,D1),T(da,eo,null),e(eo,S1),T(ca,eo,null),k(o,Hf,b),k(o,Rn,b),e(Rn,pa),e(pa,Jh),T(zl,Jh,null),e(Rn,B1),e(Rn,Vh),e(Vh,W1),k(o,Qf,b),k(o,lt,b),T(jl,lt,null),e(lt,U1),e(lt,Gh),e(Gh,H1),e(lt,Q1),e(lt,Cl),e(Cl,K1),e(Cl,Xd),e(Xd,J1),e(Cl,V1),e(lt,G1),e(lt,ql),e(ql,X1),e(ql,Pl),e(Pl,Y1),e(ql,Z1),e(lt,eF),e(lt,Xh),e(Xh,tF),e(lt,oF),e(lt,go),e(go,Yh),e(Yh,Ll),e(Ll,nF),e(go,sF),e(go,Zh),e(Zh,Al),e(Al,aF),e(go,rF),e(go,eu),e(eu,Ol),e(Ol,iF),e(go,lF),e(go,tu),e(tu,Nl),e(Nl,dF),e(lt,cF),e(lt,to),T(Il,to,null),e(to,pF),e(to,En),e(En,hF),e(En,ou),e(ou,uF),e(En,fF),e(En,nu),e(nu,mF),e(En,gF),e(to,_F),T(ha,to,null),e(to,bF),T(ua,to,null),k(o,Kf,b),k(o,Mn,b),e(Mn,fa),e(fa,su),T(Dl,su,null),e(Mn,kF),e(Mn,au),e(au,vF),k(o,Jf,b),k(o,dt,b),T(Sl,dt,null),e(dt,yF),e(dt,zn),e(zn,wF),e(zn,ru),e(ru,TF),e(zn,$F),e(zn,iu),e(iu,FF),e(zn,xF),e(dt,RF),e(dt,Bl),e(Bl,EF),e(Bl,Yd),e(Yd,MF),e(Bl,zF),e(dt,jF),e(dt,Wl),e(Wl,CF),e(Wl,Ul),e(Ul,qF),e(Wl,PF),e(dt,LF),e(dt,lu),e(lu,AF),e(dt,OF),e(dt,_o),e(_o,du),e(du,Hl),e(Hl,NF),e(_o,IF),e(_o,cu),e(cu,Ql),e(Ql,DF),e(_o,SF),e(_o,pu),e(pu,Kl),e(Kl,BF),e(_o,WF),e(_o,hu),e(hu,Jl),e(Jl,UF),e(dt,HF),e(dt,oo),T(Vl,oo,null),e(oo,QF),e(oo,jn),e(jn,KF),e(jn,uu),e(uu,JF),e(jn,VF),e(jn,fu),e(fu,GF),e(jn,XF),e(oo,YF),T(ma,oo,null),e(oo,ZF),T(ga,oo,null),Vf=!0},p(o,[b]){const Gl={};b&2&&(Gl.$$scope={dirty:b,ctx:o}),An.$set(Gl);const mu={};b&2&&(mu.$$scope={dirty:b,ctx:o}),Nn.$set(mu);const gu={};b&2&&(gu.$$scope={dirty:b,ctx:o}),In.$set(gu);const _u={};b&2&&(_u.$$scope={dirty:b,ctx:o}),Wn.$set(_u);const Xl={};b&2&&(Xl.$$scope={dirty:b,ctx:o}),Un.$set(Xl);const bu={};b&2&&(bu.$$scope={dirty:b,ctx:o}),Kn.$set(bu);const ku={};b&2&&(ku.$$scope={dirty:b,ctx:o}),Jn.$set(ku);const vu={};b&2&&(vu.$$scope={dirty:b,ctx:o}),Gn.$set(vu);const Yl={};b&2&&(Yl.$$scope={dirty:b,ctx:o}),Xn.$set(Yl);const yu={};b&2&&(yu.$$scope={dirty:b,ctx:o}),Zn.$set(yu);const wu={};b&2&&(wu.$$scope={dirty:b,ctx:o}),es.$set(wu);const Tu={};b&2&&(Tu.$$scope={dirty:b,ctx:o}),ts.$set(Tu);const $u={};b&2&&($u.$$scope={dirty:b,ctx:o}),ns.$set($u);const Fu={};b&2&&(Fu.$$scope={dirty:b,ctx:o}),ss.$set(Fu);const xu={};b&2&&(xu.$$scope={dirty:b,ctx:o}),as.$set(xu);const bo={};b&2&&(bo.$$scope={dirty:b,ctx:o}),rs.$set(bo);const Zl={};b&2&&(Zl.$$scope={dirty:b,ctx:o}),is.$set(Zl);const Ru={};b&2&&(Ru.$$scope={dirty:b,ctx:o}),ds.$set(Ru);const Eu={};b&2&&(Eu.$$scope={dirty:b,ctx:o}),cs.$set(Eu);const ko={};b&2&&(ko.$$scope={dirty:b,ctx:o}),hs.$set(ko);const Mu={};b&2&&(Mu.$$scope={dirty:b,ctx:o}),us.$set(Mu);const zu={};b&2&&(zu.$$scope={dirty:b,ctx:o}),fs.$set(zu);const ju={};b&2&&(ju.$$scope={dirty:b,ctx:o}),gs.$set(ju);const Zd={};b&2&&(Zd.$$scope={dirty:b,ctx:o}),_s.$set(Zd);const Cu={};b&2&&(Cu.$$scope={dirty:b,ctx:o}),bs.$set(Cu);const Cn={};b&2&&(Cn.$$scope={dirty:b,ctx:o}),vs.$set(Cn);const qu={};b&2&&(qu.$$scope={dirty:b,ctx:o}),ys.$set(qu);const Pu={};b&2&&(Pu.$$scope={dirty:b,ctx:o}),ws.$set(Pu);const ed={};b&2&&(ed.$$scope={dirty:b,ctx:o}),$s.$set(ed);const Lu={};b&2&&(Lu.$$scope={dirty:b,ctx:o}),Fs.$set(Lu);const Au={};b&2&&(Au.$$scope={dirty:b,ctx:o}),Rs.$set(Au);const Ou={};b&2&&(Ou.$$scope={dirty:b,ctx:o}),Es.$set(Ou);const Wt={};b&2&&(Wt.$$scope={dirty:b,ctx:o}),Ms.$set(Wt);const vo={};b&2&&(vo.$$scope={dirty:b,ctx:o}),zs.$set(vo);const Nu={};b&2&&(Nu.$$scope={dirty:b,ctx:o}),Cs.$set(Nu);const Iu={};b&2&&(Iu.$$scope={dirty:b,ctx:o}),qs.$set(Iu);const Du={};b&2&&(Du.$$scope={dirty:b,ctx:o}),Ps.$set(Du);const qn={};b&2&&(qn.$$scope={dirty:b,ctx:o}),Ls.$set(qn);const Su={};b&2&&(Su.$$scope={dirty:b,ctx:o}),Os.$set(Su);const Bu={};b&2&&(Bu.$$scope={dirty:b,ctx:o}),Ns.$set(Bu);const Pn={};b&2&&(Pn.$$scope={dirty:b,ctx:o}),Is.$set(Pn);const Wu={};b&2&&(Wu.$$scope={dirty:b,ctx:o}),Ss.$set(Wu);const Uu={};b&2&&(Uu.$$scope={dirty:b,ctx:o}),Bs.$set(Uu);const td={};b&2&&(td.$$scope={dirty:b,ctx:o}),Ws.$set(td);const Hu={};b&2&&(Hu.$$scope={dirty:b,ctx:o}),Us.$set(Hu);const Qu={};b&2&&(Qu.$$scope={dirty:b,ctx:o}),Qs.$set(Qu);const Ku={};b&2&&(Ku.$$scope={dirty:b,ctx:o}),Ks.$set(Ku);const Ue={};b&2&&(Ue.$$scope={dirty:b,ctx:o}),Js.$set(Ue);const Ju={};b&2&&(Ju.$$scope={dirty:b,ctx:o}),Vs.$set(Ju);const Vu={};b&2&&(Vu.$$scope={dirty:b,ctx:o}),Xs.$set(Vu);const od={};b&2&&(od.$$scope={dirty:b,ctx:o}),Ys.$set(od);const Gu={};b&2&&(Gu.$$scope={dirty:b,ctx:o}),ea.$set(Gu);const nd={};b&2&&(nd.$$scope={dirty:b,ctx:o}),ta.$set(nd);const Xu={};b&2&&(Xu.$$scope={dirty:b,ctx:o}),na.$set(Xu);const Ln={};b&2&&(Ln.$$scope={dirty:b,ctx:o}),sa.$set(Ln);const Yu={};b&2&&(Yu.$$scope={dirty:b,ctx:o}),ra.$set(Yu);const sd={};b&2&&(sd.$$scope={dirty:b,ctx:o}),ia.$set(sd);const ec={};b&2&&(ec.$$scope={dirty:b,ctx:o}),da.$set(ec);const Zu={};b&2&&(Zu.$$scope={dirty:b,ctx:o}),ca.$set(Zu);const tc={};b&2&&(tc.$$scope={dirty:b,ctx:o}),ha.$set(tc);const ef={};b&2&&(ef.$$scope={dirty:b,ctx:o}),ua.$set(ef);const ad={};b&2&&(ad.$$scope={dirty:b,ctx:o}),ma.$set(ad);const rd={};b&2&&(rd.$$scope={dirty:b,ctx:o}),ga.$set(rd)},i(o){Vf||($(l.$$.fragment,o),$(M.$$.fragment,o),$(We.$$.fragment,o),$(Oa.$$.fragment,o),$(An.$$.fragment,o),$(Ia.$$.fragment,o),$(Da.$$.fragment,o),$(Nn.$$.fragment,o),$(In.$$.fragment,o),$(Wa.$$.fragment,o),$(Ha.$$.fragment,o),$(Ka.$$.fragment,o),$(Ja.$$.fragment,o),$(Va.$$.fragment,o),$(Ga.$$.fragment,o),$(Wn.$$.fragment,o),$(Un.$$.fragment,o),$(er.$$.fragment,o),$(tr.$$.fragment,o),$(or.$$.fragment,o),$(lr.$$.fragment,o),$(Kn.$$.fragment,o),$(Jn.$$.fragment,o),$(dr.$$.fragment,o),$(cr.$$.fragment,o),$(mr.$$.fragment,o),$(Gn.$$.fragment,o),$(Xn.$$.fragment,o),$(gr.$$.fragment,o),$(_r.$$.fragment,o),$(wr.$$.fragment,o),$(Zn.$$.fragment,o),$(es.$$.fragment,o),$(ts.$$.fragment,o),$(Tr.$$.fragment,o),$($r.$$.fragment,o),$(Er.$$.fragment,o),$(ns.$$.fragment,o),$(ss.$$.fragment,o),$(as.$$.fragment,o),$(rs.$$.fragment,o),$(is.$$.fragment,o),$(Mr.$$.fragment,o),$(zr.$$.fragment,o),$(Pr.$$.fragment,o),$(ds.$$.fragment,o),$(cs.$$.fragment,o),$(Lr.$$.fragment,o),$(Ar.$$.fragment,o),$(Dr.$$.fragment,o),$(hs.$$.fragment,o),$(us.$$.fragment,o),$(fs.$$.fragment,o),$(Sr.$$.fragment,o),$(Br.$$.fragment,o),$(Qr.$$.fragment,o),$(gs.$$.fragment,o),$(_s.$$.fragment,o),$(bs.$$.fragment,o),$(Kr.$$.fragment,o),$(Jr.$$.fragment,o),$(vs.$$.fragment,o),$(Yr.$$.fragment,o),$(ys.$$.fragment,o),$(ws.$$.fragment,o),$(Zr.$$.fragment,o),$(ei.$$.fragment,o),$(ti.$$.fragment,o),$($s.$$.fragment,o),$(Fs.$$.fragment,o),$(oi.$$.fragment,o),$(ni.$$.fragment,o),$(Rs.$$.fragment,o),$(li.$$.fragment,o),$(Es.$$.fragment,o),$(Ms.$$.fragment,o),$(zs.$$.fragment,o),$(di.$$.fragment,o),$(ci.$$.fragment,o),$(Cs.$$.fragment,o),$(fi.$$.fragment,o),$(qs.$$.fragment,o),$(Ps.$$.fragment,o),$(Ls.$$.fragment,o),$(mi.$$.fragment,o),$(gi.$$.fragment,o),$(Os.$$.fragment,o),$(vi.$$.fragment,o),$(Ns.$$.fragment,o),$(Is.$$.fragment,o),$(yi.$$.fragment,o),$(wi.$$.fragment,o),$(Ss.$$.fragment,o),$(xi.$$.fragment,o),$(Bs.$$.fragment,o),$(Ws.$$.fragment,o),$(Us.$$.fragment,o),$(Ri.$$.fragment,o),$(Ei.$$.fragment,o),$(Qs.$$.fragment,o),$(Ci.$$.fragment,o),$(Ks.$$.fragment,o),$(Js.$$.fragment,o),$(Vs.$$.fragment,o),$(qi.$$.fragment,o),$(Pi.$$.fragment,o),$(Bi.$$.fragment,o),$(Xs.$$.fragment,o),$(Ys.$$.fragment,o),$(Wi.$$.fragment,o),$(Ui.$$.fragment,o),$(Yi.$$.fragment,o),$(ea.$$.fragment,o),$(ta.$$.fragment,o),$(Zi.$$.fragment,o),$(el.$$.fragment,o),$(dl.$$.fragment,o),$(na.$$.fragment,o),$(sa.$$.fragment,o),$(cl.$$.fragment,o),$(pl.$$.fragment,o),$(kl.$$.fragment,o),$(ra.$$.fragment,o),$(ia.$$.fragment,o),$(vl.$$.fragment,o),$(yl.$$.fragment,o),$(Ml.$$.fragment,o),$(da.$$.fragment,o),$(ca.$$.fragment,o),$(zl.$$.fragment,o),$(jl.$$.fragment,o),$(Il.$$.fragment,o),$(ha.$$.fragment,o),$(ua.$$.fragment,o),$(Dl.$$.fragment,o),$(Sl.$$.fragment,o),$(Vl.$$.fragment,o),$(ma.$$.fragment,o),$(ga.$$.fragment,o),Vf=!0)},o(o){F(l.$$.fragment,o),F(M.$$.fragment,o),F(We.$$.fragment,o),F(Oa.$$.fragment,o),F(An.$$.fragment,o),F(Ia.$$.fragment,o),F(Da.$$.fragment,o),F(Nn.$$.fragment,o),F(In.$$.fragment,o),F(Wa.$$.fragment,o),F(Ha.$$.fragment,o),F(Ka.$$.fragment,o),F(Ja.$$.fragment,o),F(Va.$$.fragment,o),F(Ga.$$.fragment,o),F(Wn.$$.fragment,o),F(Un.$$.fragment,o),F(er.$$.fragment,o),F(tr.$$.fragment,o),F(or.$$.fragment,o),F(lr.$$.fragment,o),F(Kn.$$.fragment,o),F(Jn.$$.fragment,o),F(dr.$$.fragment,o),F(cr.$$.fragment,o),F(mr.$$.fragment,o),F(Gn.$$.fragment,o),F(Xn.$$.fragment,o),F(gr.$$.fragment,o),F(_r.$$.fragment,o),F(wr.$$.fragment,o),F(Zn.$$.fragment,o),F(es.$$.fragment,o),F(ts.$$.fragment,o),F(Tr.$$.fragment,o),F($r.$$.fragment,o),F(Er.$$.fragment,o),F(ns.$$.fragment,o),F(ss.$$.fragment,o),F(as.$$.fragment,o),F(rs.$$.fragment,o),F(is.$$.fragment,o),F(Mr.$$.fragment,o),F(zr.$$.fragment,o),F(Pr.$$.fragment,o),F(ds.$$.fragment,o),F(cs.$$.fragment,o),F(Lr.$$.fragment,o),F(Ar.$$.fragment,o),F(Dr.$$.fragment,o),F(hs.$$.fragment,o),F(us.$$.fragment,o),F(fs.$$.fragment,o),F(Sr.$$.fragment,o),F(Br.$$.fragment,o),F(Qr.$$.fragment,o),F(gs.$$.fragment,o),F(_s.$$.fragment,o),F(bs.$$.fragment,o),F(Kr.$$.fragment,o),F(Jr.$$.fragment,o),F(vs.$$.fragment,o),F(Yr.$$.fragment,o),F(ys.$$.fragment,o),F(ws.$$.fragment,o),F(Zr.$$.fragment,o),F(ei.$$.fragment,o),F(ti.$$.fragment,o),F($s.$$.fragment,o),F(Fs.$$.fragment,o),F(oi.$$.fragment,o),F(ni.$$.fragment,o),F(Rs.$$.fragment,o),F(li.$$.fragment,o),F(Es.$$.fragment,o),F(Ms.$$.fragment,o),F(zs.$$.fragment,o),F(di.$$.fragment,o),F(ci.$$.fragment,o),F(Cs.$$.fragment,o),F(fi.$$.fragment,o),F(qs.$$.fragment,o),F(Ps.$$.fragment,o),F(Ls.$$.fragment,o),F(mi.$$.fragment,o),F(gi.$$.fragment,o),F(Os.$$.fragment,o),F(vi.$$.fragment,o),F(Ns.$$.fragment,o),F(Is.$$.fragment,o),F(yi.$$.fragment,o),F(wi.$$.fragment,o),F(Ss.$$.fragment,o),F(xi.$$.fragment,o),F(Bs.$$.fragment,o),F(Ws.$$.fragment,o),F(Us.$$.fragment,o),F(Ri.$$.fragment,o),F(Ei.$$.fragment,o),F(Qs.$$.fragment,o),F(Ci.$$.fragment,o),F(Ks.$$.fragment,o),F(Js.$$.fragment,o),F(Vs.$$.fragment,o),F(qi.$$.fragment,o),F(Pi.$$.fragment,o),F(Bi.$$.fragment,o),F(Xs.$$.fragment,o),F(Ys.$$.fragment,o),F(Wi.$$.fragment,o),F(Ui.$$.fragment,o),F(Yi.$$.fragment,o),F(ea.$$.fragment,o),F(ta.$$.fragment,o),F(Zi.$$.fragment,o),F(el.$$.fragment,o),F(dl.$$.fragment,o),F(na.$$.fragment,o),F(sa.$$.fragment,o),F(cl.$$.fragment,o),F(pl.$$.fragment,o),F(kl.$$.fragment,o),F(ra.$$.fragment,o),F(ia.$$.fragment,o),F(vl.$$.fragment,o),F(yl.$$.fragment,o),F(Ml.$$.fragment,o),F(da.$$.fragment,o),F(ca.$$.fragment,o),F(zl.$$.fragment,o),F(jl.$$.fragment,o),F(Il.$$.fragment,o),F(ha.$$.fragment,o),F(ua.$$.fragment,o),F(Dl.$$.fragment,o),F(Sl.$$.fragment,o),F(Vl.$$.fragment,o),F(ma.$$.fragment,o),F(ga.$$.fragment,o),Vf=!1},d(o){t(d),o&&t(g),o&&t(c),x(l),o&&t(Z),o&&t(N),x(M),o&&t(ge),o&&t(B),o&&t(_e),o&&t(U),o&&t(be),o&&t(H),o&&t(ke),o&&t(ee),o&&t(ve),o&&t(Q),o&&t(ye),o&&t(I),o&&t(Je),o&&t(j),o&&t(Ve),o&&t(Oe),x(We),o&&t(Ge),o&&t(vt),x(Oa),x(An),o&&t(of),o&&t(Oo),x(Ia),o&&t(nf),o&&t(Ie),x(Da),x(Nn),x(In),x(Wa),x(Ha),x(Ka),x(Ja),o&&t(sf),o&&t(No),x(Va),o&&t(af),o&&t(tt),x(Ga),x(Wn),x(Un),x(er),o&&t(rf),o&&t(Io),x(tr),o&&t(lf),o&&t(ot),x(or),x(lr),x(Kn),x(Jn),o&&t(df),o&&t(So),x(dr),o&&t(cf),o&&t(yt),x(cr),x(mr),x(Gn),x(Xn),o&&t(pf),o&&t(Wo),x(gr),o&&t(hf),o&&t(wt),x(_r),x(wr),x(Zn),x(es),x(ts),o&&t(uf),o&&t(Ho),x(Tr),o&&t(ff),o&&t(Tt),x($r),x(Er),x(ns),x(ss),x(as),x(rs),x(is),o&&t(mf),o&&t(Ko),x(Mr),o&&t(gf),o&&t($t),x(zr),x(Pr),x(ds),x(cs),o&&t(_f),o&&t(Vo),x(Lr),o&&t(bf),o&&t(Ft),x(Ar),x(Dr),x(hs),x(us),x(fs),o&&t(kf),o&&t(Xo),x(Sr),o&&t(vf),o&&t(xt),x(Br),x(Qr),x(gs),x(_s),x(bs),o&&t(yf),o&&t(en),x(Kr),o&&t(wf),o&&t(ht),x(Jr),x(vs),x(Yr),x(ys),x(ws),o&&t(Tf),o&&t(on),x(Zr),o&&t($f),o&&t(nn),x(ei),x(ti),x($s),x(Fs),o&&t(Ff),o&&t(an),x(oi),o&&t(xf),o&&t(ut),x(ni),x(Rs),x(li),x(Es),x(Ms),x(zs),o&&t(Rf),o&&t(ln),x(di),o&&t(Ef),o&&t(ft),x(ci),x(Cs),x(fi),x(qs),x(Ps),x(Ls),o&&t(Mf),o&&t(cn),x(mi),o&&t(zf),o&&t(mt),x(gi),x(Os),x(vi),x(Ns),x(Is),o&&t(jf),o&&t(hn),x(yi),o&&t(Cf),o&&t(gt),x(wi),x(Ss),x(xi),x(Bs),x(Ws),x(Us),o&&t(qf),o&&t(fn),x(Ri),o&&t(Pf),o&&t(_t),x(Ei),x(Qs),x(Ci),x(Ks),x(Js),x(Vs),o&&t(Lf),o&&t(_n),x(qi),o&&t(Af),o&&t(nt),x(Pi),x(Bi),x(Xs),x(Ys),o&&t(Of),o&&t(kn),x(Wi),o&&t(Nf),o&&t(st),x(Ui),x(Yi),x(ea),x(ta),o&&t(If),o&&t(yn),x(Zi),o&&t(Df),o&&t(at),x(el),x(dl),x(na),x(sa),o&&t(Sf),o&&t(Tn),x(cl),o&&t(Bf),o&&t(rt),x(pl),x(kl),x(ra),x(ia),o&&t(Wf),o&&t(Fn),x(vl),o&&t(Uf),o&&t(it),x(yl),x(Ml),x(da),x(ca),o&&t(Hf),o&&t(Rn),x(zl),o&&t(Qf),o&&t(lt),x(jl),x(Il),x(ha),x(ua),o&&t(Kf),o&&t(Mn),x(Dl),o&&t(Jf),o&&t(dt),x(Sl),x(Vl),x(ma),x(ga)}}}const GM={local:"roberta",sections:[{local:"overview",title:"Overview"},{local:"transformers.RobertaConfig",title:"RobertaConfig"},{local:"transformers.RobertaTokenizer",title:"RobertaTokenizer"},{local:"transformers.RobertaTokenizerFast",title:"RobertaTokenizerFast"},{local:"transformers.RobertaModel",title:"RobertaModel"},{local:"transformers.RobertaForCausalLM",title:"RobertaForCausalLM"},{local:"transformers.RobertaForMaskedLM",title:"RobertaForMaskedLM"},{local:"transformers.RobertaForSequenceClassification",title:"RobertaForSequenceClassification"},{local:"transformers.RobertaForMultipleChoice",title:"RobertaForMultipleChoice"},{local:"transformers.RobertaForTokenClassification",title:"RobertaForTokenClassification"},{local:"transformers.RobertaForQuestionAnswering",title:"RobertaForQuestionAnswering"},{local:"transformers.TFRobertaModel",title:"TFRobertaModel"},{local:"transformers.TFRobertaForCausalLM",title:"TFRobertaForCausalLM"},{local:"transformers.TFRobertaForMaskedLM",title:"TFRobertaForMaskedLM"},{local:"transformers.TFRobertaForSequenceClassification",title:"TFRobertaForSequenceClassification"},{local:"transformers.TFRobertaForMultipleChoice",title:"TFRobertaForMultipleChoice"},{local:"transformers.TFRobertaForTokenClassification",title:"TFRobertaForTokenClassification"},{local:"transformers.TFRobertaForQuestionAnswering",title:"TFRobertaForQuestionAnswering"},{local:"transformers.FlaxRobertaModel",title:"FlaxRobertaModel"},{local:"transformers.FlaxRobertaForCausalLM",title:"FlaxRobertaForCausalLM"},{local:"transformers.FlaxRobertaForMaskedLM",title:"FlaxRobertaForMaskedLM"},{local:"transformers.FlaxRobertaForSequenceClassification",title:"FlaxRobertaForSequenceClassification"},{local:"transformers.FlaxRobertaForMultipleChoice",title:"FlaxRobertaForMultipleChoice"},{local:"transformers.FlaxRobertaForTokenClassification",title:"FlaxRobertaForTokenClassification"},{local:"transformers.FlaxRobertaForQuestionAnswering",title:"FlaxRobertaForQuestionAnswering"}],title:"RoBERTa"};function XM(R){return IE(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class sz extends LE{constructor(d){super();AE(this,d,XM,VM,OE,{})}}export{sz as default,GM as metadata};
