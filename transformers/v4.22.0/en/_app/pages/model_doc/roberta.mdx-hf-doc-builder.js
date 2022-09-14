import{S as LE,i as AE,s as OE,e as a,k as h,w as y,t as n,M as NE,c as r,d as t,m,a as i,x as w,h as s,b as f,G as e,g as k,y as T,q as $,o as F,B as x,v as IE,L as re}from"../../chunks/vendor-hf-doc-builder.js";import{T as fe}from"../../chunks/Tip-hf-doc-builder.js";import{D as O}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ie}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as De}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ae}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function DE(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaConfig, RobertaModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),g=n("Examples:"),c=h(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Examples:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function SE(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer
tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 328, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){d=a("p"),g=n("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c=h(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function WE(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("When used with "),c=a("code"),u=n("is_split_into_words=True"),_=n(", this tokenizer will add a space before each word (even the first one).")},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"When used with "),c=r(p,"CODE",{});var E=i(c);u=s(E,"is_split_into_words=True"),E.forEach(t),_=s(p,", this tokenizer will add a space before each word (even the first one)."),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function BE(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizerFast
tokenizer = RobertaTokenizerFast.from_pretrained("roberta-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = RobertaTokenizerFast.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 328, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){d=a("p"),g=n("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c=h(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function UE(R){let d,g,c,u,_,l,p,E;return{c(){d=a("p"),g=n("When used with "),c=a("code"),u=n("is_split_into_words=True"),_=n(", this tokenizer needs to be instantiated with "),l=a("code"),p=n("add_prefix_space=True"),E=n(".")},l(le){d=r(le,"P",{});var Z=i(d);g=s(Z,"When used with "),c=r(Z,"CODE",{});var N=i(c);u=s(N,"is_split_into_words=True"),N.forEach(t),_=s(Z,", this tokenizer needs to be instantiated with "),l=r(Z,"CODE",{});var te=i(l);p=s(te,"add_prefix_space=True"),te.forEach(t),E=s(Z,"."),Z.forEach(t)},m(le,Z){k(le,d,Z),e(d,g),e(d,c),e(c,u),e(d,_),e(d,l),e(l,p),e(d,E)},d(le){le&&t(d)}}}function HE(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function QE(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function VE(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function KE(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaForCausalLM, RobertaConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function JE(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function GE(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaForMaskedLM
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
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function XE(R){let d,g;return d=new ie({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){T(d,c,u),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function YE(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function ZE(R){let d,g,c,u,_;return u=new ie({props:{code:`import torch
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=a("p"),g=n("Example of single-label classification:"),c=h(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example of single-label classification:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function eM(R){let d,g;return d=new ie({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = RobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){T(d,c,u),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function tM(R){let d,g,c,u,_;return u=new ie({props:{code:`import torch
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=a("p"),g=n("Example of multi-label classification:"),c=h(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example of multi-label classification:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function oM(R){let d,g;return d=new ie({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){T(d,c,u),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function nM(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function sM(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function aM(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function rM(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function iM(R){let d,g;return d=new ie({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){T(d,c,u),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function lM(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function dM(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaForQuestionAnswering
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
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function cM(R){let d,g;return d=new ie({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.86</span>`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){T(d,c,u),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function pM(R){let d,g,c,u,_,l,p,E,le,Z,N,te,oe,M,we,V,Te,ge,W,$e,pe,K,Fe,_e,U,xe,be,H,Re,ke,ee,j,P,ve,Q,Ee,ye,I,he,Me,q,ze,J,Ce,me,G,je,ne,D,ue,X,qe,se,L,Pe,A,Le,Ae;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),u=n("transformers"),_=n(" accept two formats as input:"),l=h(),p=a("ul"),E=a("li"),le=n("having all inputs as keyword arguments (like PyTorch models), or"),Z=h(),N=a("li"),te=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),M=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a("code"),Te=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a("code"),$e=n("model.fit()"),pe=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Fe=n("fit()"),_e=n(" and "),U=a("code"),xe=n("predict()"),be=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=n("Functional"),ke=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),j=a("ul"),P=a("li"),ve=n("a single Tensor with "),Q=a("code"),Ee=n("input_ids"),ye=n(" only and nothing else: "),I=a("code"),he=n("model(input_ids)"),Me=h(),q=a("li"),ze=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),Ce=n("model([input_ids, attention_mask])"),me=n(" or "),G=a("code"),je=n("model([input_ids, attention_mask, token_type_ids])"),ne=h(),D=a("li"),ue=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=h(),L=a("p"),Pe=n(`Note that when creating models and layers with
`),A=a("a"),Le=n("subclassing"),Ae=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=r(v,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=r(z,"CODE",{});var He=i(c);u=s(He,"transformers"),He.forEach(t),_=s(z," accept two formats as input:"),z.forEach(t),l=m(v),p=r(v,"UL",{});var de=i(p);E=r(de,"LI",{});var Xe=i(E);le=s(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=m(de),N=r(de,"LI",{});var Ke=i(N);te=s(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),de.forEach(t),oe=m(v),M=r(v,"P",{});var C=i(M);we=s(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r(C,"CODE",{});var Ye=i(V);Te=s(Ye,"model.fit()"),Ye.forEach(t),ge=s(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r(C,"CODE",{});var Se=i(W);$e=s(Se,"model.fit()"),Se.forEach(t),pe=s(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(C,"CODE",{});var Ze=i(K);Fe=s(Ze,"fit()"),Ze.forEach(t),_e=s(C," and "),U=r(C,"CODE",{});var et=i(U);xe=s(et,"predict()"),et.forEach(t),be=s(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var We=i(H);Re=s(We,"Functional"),We.forEach(t),ke=s(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),ee=m(v),j=r(v,"UL",{});var S=i(j);P=r(S,"LI",{});var Y=i(P);ve=s(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Je=i(Q);Ee=s(Je,"input_ids"),Je.forEach(t),ye=s(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=s(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=m(S),q=r(S,"LI",{});var B=i(q);ze=s(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(B,"CODE",{});var Qe=i(J);Ce=s(Qe,"model([input_ids, attention_mask])"),Qe.forEach(t),me=s(B," or "),G=r(B,"CODE",{});var Be=i(G);je=s(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(t),B.forEach(t),ne=m(S),D=r(S,"LI",{});var Ne=i(D);ue=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Ve=i(X);qe=s(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),Ne.forEach(t),S.forEach(t),se=m(v),L=r(v,"P",{});var ce=i(L);Pe=s(ce,`Note that when creating models and layers with
`),A=r(ce,"A",{href:!0,rel:!0});var Ge=i(A);Le=s(Ge,"subclassing"),Ge.forEach(t),Ae=s(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){f(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(A,"rel","nofollow")},m(v,z){k(v,d,z),e(d,g),e(d,c),e(c,u),e(d,_),k(v,l,z),k(v,p,z),e(p,E),e(E,le),e(p,Z),e(p,N),e(N,te),k(v,oe,z),k(v,M,z),e(M,we),e(M,V),e(V,Te),e(M,ge),e(M,W),e(W,$e),e(M,pe),e(M,K),e(K,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),k(v,ee,z),k(v,j,z),e(j,P),e(P,ve),e(P,Q),e(Q,Ee),e(P,ye),e(P,I),e(I,he),e(j,Me),e(j,q),e(q,ze),e(q,J),e(J,Ce),e(q,me),e(q,G),e(G,je),e(j,ne),e(j,D),e(D,ue),e(D,X),e(X,qe),k(v,se,z),k(v,L,z),e(L,Pe),e(L,A),e(A,Le),e(L,Ae)},d(v){v&&t(d),v&&t(l),v&&t(p),v&&t(oe),v&&t(M),v&&t(ee),v&&t(j),v&&t(se),v&&t(L)}}}function hM(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function mM(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function uM(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function fM(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForCausalLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function gM(R){let d,g,c,u,_,l,p,E,le,Z,N,te,oe,M,we,V,Te,ge,W,$e,pe,K,Fe,_e,U,xe,be,H,Re,ke,ee,j,P,ve,Q,Ee,ye,I,he,Me,q,ze,J,Ce,me,G,je,ne,D,ue,X,qe,se,L,Pe,A,Le,Ae;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),u=n("transformers"),_=n(" accept two formats as input:"),l=h(),p=a("ul"),E=a("li"),le=n("having all inputs as keyword arguments (like PyTorch models), or"),Z=h(),N=a("li"),te=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),M=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a("code"),Te=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a("code"),$e=n("model.fit()"),pe=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Fe=n("fit()"),_e=n(" and "),U=a("code"),xe=n("predict()"),be=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=n("Functional"),ke=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),j=a("ul"),P=a("li"),ve=n("a single Tensor with "),Q=a("code"),Ee=n("input_ids"),ye=n(" only and nothing else: "),I=a("code"),he=n("model(input_ids)"),Me=h(),q=a("li"),ze=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),Ce=n("model([input_ids, attention_mask])"),me=n(" or "),G=a("code"),je=n("model([input_ids, attention_mask, token_type_ids])"),ne=h(),D=a("li"),ue=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=h(),L=a("p"),Pe=n(`Note that when creating models and layers with
`),A=a("a"),Le=n("subclassing"),Ae=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=r(v,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=r(z,"CODE",{});var He=i(c);u=s(He,"transformers"),He.forEach(t),_=s(z," accept two formats as input:"),z.forEach(t),l=m(v),p=r(v,"UL",{});var de=i(p);E=r(de,"LI",{});var Xe=i(E);le=s(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=m(de),N=r(de,"LI",{});var Ke=i(N);te=s(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),de.forEach(t),oe=m(v),M=r(v,"P",{});var C=i(M);we=s(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r(C,"CODE",{});var Ye=i(V);Te=s(Ye,"model.fit()"),Ye.forEach(t),ge=s(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r(C,"CODE",{});var Se=i(W);$e=s(Se,"model.fit()"),Se.forEach(t),pe=s(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(C,"CODE",{});var Ze=i(K);Fe=s(Ze,"fit()"),Ze.forEach(t),_e=s(C," and "),U=r(C,"CODE",{});var et=i(U);xe=s(et,"predict()"),et.forEach(t),be=s(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var We=i(H);Re=s(We,"Functional"),We.forEach(t),ke=s(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),ee=m(v),j=r(v,"UL",{});var S=i(j);P=r(S,"LI",{});var Y=i(P);ve=s(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Je=i(Q);Ee=s(Je,"input_ids"),Je.forEach(t),ye=s(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=s(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=m(S),q=r(S,"LI",{});var B=i(q);ze=s(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(B,"CODE",{});var Qe=i(J);Ce=s(Qe,"model([input_ids, attention_mask])"),Qe.forEach(t),me=s(B," or "),G=r(B,"CODE",{});var Be=i(G);je=s(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(t),B.forEach(t),ne=m(S),D=r(S,"LI",{});var Ne=i(D);ue=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Ve=i(X);qe=s(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),Ne.forEach(t),S.forEach(t),se=m(v),L=r(v,"P",{});var ce=i(L);Pe=s(ce,`Note that when creating models and layers with
`),A=r(ce,"A",{href:!0,rel:!0});var Ge=i(A);Le=s(Ge,"subclassing"),Ge.forEach(t),Ae=s(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){f(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(A,"rel","nofollow")},m(v,z){k(v,d,z),e(d,g),e(d,c),e(c,u),e(d,_),k(v,l,z),k(v,p,z),e(p,E),e(E,le),e(p,Z),e(p,N),e(N,te),k(v,oe,z),k(v,M,z),e(M,we),e(M,V),e(V,Te),e(M,ge),e(M,W),e(W,$e),e(M,pe),e(M,K),e(K,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),k(v,ee,z),k(v,j,z),e(j,P),e(P,ve),e(P,Q),e(Q,Ee),e(P,ye),e(P,I),e(I,he),e(j,Me),e(j,q),e(q,ze),e(q,J),e(J,Ce),e(q,me),e(q,G),e(G,je),e(j,ne),e(j,D),e(D,ue),e(D,X),e(X,qe),k(v,se,z),k(v,L,z),e(L,Pe),e(L,A),e(A,Le),e(L,Ae)},d(v){v&&t(d),v&&t(l),v&&t(p),v&&t(oe),v&&t(M),v&&t(ee),v&&t(j),v&&t(se),v&&t(L)}}}function _M(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function bM(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForMaskedLM
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
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function kM(R){let d,g;return d=new ie({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-<mask> tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){T(d,c,u),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function vM(R){let d,g,c,u,_,l,p,E,le,Z,N,te,oe,M,we,V,Te,ge,W,$e,pe,K,Fe,_e,U,xe,be,H,Re,ke,ee,j,P,ve,Q,Ee,ye,I,he,Me,q,ze,J,Ce,me,G,je,ne,D,ue,X,qe,se,L,Pe,A,Le,Ae;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),u=n("transformers"),_=n(" accept two formats as input:"),l=h(),p=a("ul"),E=a("li"),le=n("having all inputs as keyword arguments (like PyTorch models), or"),Z=h(),N=a("li"),te=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),M=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a("code"),Te=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a("code"),$e=n("model.fit()"),pe=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Fe=n("fit()"),_e=n(" and "),U=a("code"),xe=n("predict()"),be=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=n("Functional"),ke=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),j=a("ul"),P=a("li"),ve=n("a single Tensor with "),Q=a("code"),Ee=n("input_ids"),ye=n(" only and nothing else: "),I=a("code"),he=n("model(input_ids)"),Me=h(),q=a("li"),ze=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),Ce=n("model([input_ids, attention_mask])"),me=n(" or "),G=a("code"),je=n("model([input_ids, attention_mask, token_type_ids])"),ne=h(),D=a("li"),ue=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=h(),L=a("p"),Pe=n(`Note that when creating models and layers with
`),A=a("a"),Le=n("subclassing"),Ae=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=r(v,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=r(z,"CODE",{});var He=i(c);u=s(He,"transformers"),He.forEach(t),_=s(z," accept two formats as input:"),z.forEach(t),l=m(v),p=r(v,"UL",{});var de=i(p);E=r(de,"LI",{});var Xe=i(E);le=s(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=m(de),N=r(de,"LI",{});var Ke=i(N);te=s(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),de.forEach(t),oe=m(v),M=r(v,"P",{});var C=i(M);we=s(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r(C,"CODE",{});var Ye=i(V);Te=s(Ye,"model.fit()"),Ye.forEach(t),ge=s(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r(C,"CODE",{});var Se=i(W);$e=s(Se,"model.fit()"),Se.forEach(t),pe=s(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(C,"CODE",{});var Ze=i(K);Fe=s(Ze,"fit()"),Ze.forEach(t),_e=s(C," and "),U=r(C,"CODE",{});var et=i(U);xe=s(et,"predict()"),et.forEach(t),be=s(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var We=i(H);Re=s(We,"Functional"),We.forEach(t),ke=s(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),ee=m(v),j=r(v,"UL",{});var S=i(j);P=r(S,"LI",{});var Y=i(P);ve=s(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Je=i(Q);Ee=s(Je,"input_ids"),Je.forEach(t),ye=s(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=s(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=m(S),q=r(S,"LI",{});var B=i(q);ze=s(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(B,"CODE",{});var Qe=i(J);Ce=s(Qe,"model([input_ids, attention_mask])"),Qe.forEach(t),me=s(B," or "),G=r(B,"CODE",{});var Be=i(G);je=s(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(t),B.forEach(t),ne=m(S),D=r(S,"LI",{});var Ne=i(D);ue=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Ve=i(X);qe=s(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),Ne.forEach(t),S.forEach(t),se=m(v),L=r(v,"P",{});var ce=i(L);Pe=s(ce,`Note that when creating models and layers with
`),A=r(ce,"A",{href:!0,rel:!0});var Ge=i(A);Le=s(Ge,"subclassing"),Ge.forEach(t),Ae=s(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){f(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(A,"rel","nofollow")},m(v,z){k(v,d,z),e(d,g),e(d,c),e(c,u),e(d,_),k(v,l,z),k(v,p,z),e(p,E),e(E,le),e(p,Z),e(p,N),e(N,te),k(v,oe,z),k(v,M,z),e(M,we),e(M,V),e(V,Te),e(M,ge),e(M,W),e(W,$e),e(M,pe),e(M,K),e(K,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),k(v,ee,z),k(v,j,z),e(j,P),e(P,ve),e(P,Q),e(Q,Ee),e(P,ye),e(P,I),e(I,he),e(j,Me),e(j,q),e(q,ze),e(q,J),e(J,Ce),e(q,me),e(q,G),e(G,je),e(j,ne),e(j,D),e(D,ue),e(D,X),e(X,qe),k(v,se,z),k(v,L,z),e(L,Pe),e(L,A),e(A,Le),e(L,Ae)},d(v){v&&t(d),v&&t(l),v&&t(p),v&&t(oe),v&&t(M),v&&t(ee),v&&t(j),v&&t(se),v&&t(L)}}}function yM(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function wM(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForSequenceClassification
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function TM(R){let d,g;return d=new ie({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFRobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){T(d,c,u),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function $M(R){let d,g,c,u,_,l,p,E,le,Z,N,te,oe,M,we,V,Te,ge,W,$e,pe,K,Fe,_e,U,xe,be,H,Re,ke,ee,j,P,ve,Q,Ee,ye,I,he,Me,q,ze,J,Ce,me,G,je,ne,D,ue,X,qe,se,L,Pe,A,Le,Ae;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),u=n("transformers"),_=n(" accept two formats as input:"),l=h(),p=a("ul"),E=a("li"),le=n("having all inputs as keyword arguments (like PyTorch models), or"),Z=h(),N=a("li"),te=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),M=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a("code"),Te=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a("code"),$e=n("model.fit()"),pe=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Fe=n("fit()"),_e=n(" and "),U=a("code"),xe=n("predict()"),be=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=n("Functional"),ke=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),j=a("ul"),P=a("li"),ve=n("a single Tensor with "),Q=a("code"),Ee=n("input_ids"),ye=n(" only and nothing else: "),I=a("code"),he=n("model(input_ids)"),Me=h(),q=a("li"),ze=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),Ce=n("model([input_ids, attention_mask])"),me=n(" or "),G=a("code"),je=n("model([input_ids, attention_mask, token_type_ids])"),ne=h(),D=a("li"),ue=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=h(),L=a("p"),Pe=n(`Note that when creating models and layers with
`),A=a("a"),Le=n("subclassing"),Ae=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=r(v,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=r(z,"CODE",{});var He=i(c);u=s(He,"transformers"),He.forEach(t),_=s(z," accept two formats as input:"),z.forEach(t),l=m(v),p=r(v,"UL",{});var de=i(p);E=r(de,"LI",{});var Xe=i(E);le=s(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=m(de),N=r(de,"LI",{});var Ke=i(N);te=s(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),de.forEach(t),oe=m(v),M=r(v,"P",{});var C=i(M);we=s(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r(C,"CODE",{});var Ye=i(V);Te=s(Ye,"model.fit()"),Ye.forEach(t),ge=s(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r(C,"CODE",{});var Se=i(W);$e=s(Se,"model.fit()"),Se.forEach(t),pe=s(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(C,"CODE",{});var Ze=i(K);Fe=s(Ze,"fit()"),Ze.forEach(t),_e=s(C," and "),U=r(C,"CODE",{});var et=i(U);xe=s(et,"predict()"),et.forEach(t),be=s(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var We=i(H);Re=s(We,"Functional"),We.forEach(t),ke=s(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),ee=m(v),j=r(v,"UL",{});var S=i(j);P=r(S,"LI",{});var Y=i(P);ve=s(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Je=i(Q);Ee=s(Je,"input_ids"),Je.forEach(t),ye=s(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=s(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=m(S),q=r(S,"LI",{});var B=i(q);ze=s(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(B,"CODE",{});var Qe=i(J);Ce=s(Qe,"model([input_ids, attention_mask])"),Qe.forEach(t),me=s(B," or "),G=r(B,"CODE",{});var Be=i(G);je=s(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(t),B.forEach(t),ne=m(S),D=r(S,"LI",{});var Ne=i(D);ue=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Ve=i(X);qe=s(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),Ne.forEach(t),S.forEach(t),se=m(v),L=r(v,"P",{});var ce=i(L);Pe=s(ce,`Note that when creating models and layers with
`),A=r(ce,"A",{href:!0,rel:!0});var Ge=i(A);Le=s(Ge,"subclassing"),Ge.forEach(t),Ae=s(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){f(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(A,"rel","nofollow")},m(v,z){k(v,d,z),e(d,g),e(d,c),e(c,u),e(d,_),k(v,l,z),k(v,p,z),e(p,E),e(E,le),e(p,Z),e(p,N),e(N,te),k(v,oe,z),k(v,M,z),e(M,we),e(M,V),e(V,Te),e(M,ge),e(M,W),e(W,$e),e(M,pe),e(M,K),e(K,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),k(v,ee,z),k(v,j,z),e(j,P),e(P,ve),e(P,Q),e(Q,Ee),e(P,ye),e(P,I),e(I,he),e(j,Me),e(j,q),e(q,ze),e(q,J),e(J,Ce),e(q,me),e(q,G),e(G,je),e(j,ne),e(j,D),e(D,ue),e(D,X),e(X,qe),k(v,se,z),k(v,L,z),e(L,Pe),e(L,A),e(A,Le),e(L,Ae)},d(v){v&&t(d),v&&t(l),v&&t(p),v&&t(oe),v&&t(M),v&&t(ee),v&&t(j),v&&t(se),v&&t(L)}}}function FM(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function xM(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function RM(R){let d,g,c,u,_,l,p,E,le,Z,N,te,oe,M,we,V,Te,ge,W,$e,pe,K,Fe,_e,U,xe,be,H,Re,ke,ee,j,P,ve,Q,Ee,ye,I,he,Me,q,ze,J,Ce,me,G,je,ne,D,ue,X,qe,se,L,Pe,A,Le,Ae;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),u=n("transformers"),_=n(" accept two formats as input:"),l=h(),p=a("ul"),E=a("li"),le=n("having all inputs as keyword arguments (like PyTorch models), or"),Z=h(),N=a("li"),te=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),M=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a("code"),Te=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a("code"),$e=n("model.fit()"),pe=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Fe=n("fit()"),_e=n(" and "),U=a("code"),xe=n("predict()"),be=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=n("Functional"),ke=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),j=a("ul"),P=a("li"),ve=n("a single Tensor with "),Q=a("code"),Ee=n("input_ids"),ye=n(" only and nothing else: "),I=a("code"),he=n("model(input_ids)"),Me=h(),q=a("li"),ze=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),Ce=n("model([input_ids, attention_mask])"),me=n(" or "),G=a("code"),je=n("model([input_ids, attention_mask, token_type_ids])"),ne=h(),D=a("li"),ue=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=h(),L=a("p"),Pe=n(`Note that when creating models and layers with
`),A=a("a"),Le=n("subclassing"),Ae=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=r(v,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=r(z,"CODE",{});var He=i(c);u=s(He,"transformers"),He.forEach(t),_=s(z," accept two formats as input:"),z.forEach(t),l=m(v),p=r(v,"UL",{});var de=i(p);E=r(de,"LI",{});var Xe=i(E);le=s(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=m(de),N=r(de,"LI",{});var Ke=i(N);te=s(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),de.forEach(t),oe=m(v),M=r(v,"P",{});var C=i(M);we=s(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r(C,"CODE",{});var Ye=i(V);Te=s(Ye,"model.fit()"),Ye.forEach(t),ge=s(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r(C,"CODE",{});var Se=i(W);$e=s(Se,"model.fit()"),Se.forEach(t),pe=s(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(C,"CODE",{});var Ze=i(K);Fe=s(Ze,"fit()"),Ze.forEach(t),_e=s(C," and "),U=r(C,"CODE",{});var et=i(U);xe=s(et,"predict()"),et.forEach(t),be=s(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var We=i(H);Re=s(We,"Functional"),We.forEach(t),ke=s(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),ee=m(v),j=r(v,"UL",{});var S=i(j);P=r(S,"LI",{});var Y=i(P);ve=s(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Je=i(Q);Ee=s(Je,"input_ids"),Je.forEach(t),ye=s(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=s(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=m(S),q=r(S,"LI",{});var B=i(q);ze=s(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(B,"CODE",{});var Qe=i(J);Ce=s(Qe,"model([input_ids, attention_mask])"),Qe.forEach(t),me=s(B," or "),G=r(B,"CODE",{});var Be=i(G);je=s(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(t),B.forEach(t),ne=m(S),D=r(S,"LI",{});var Ne=i(D);ue=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Ve=i(X);qe=s(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),Ne.forEach(t),S.forEach(t),se=m(v),L=r(v,"P",{});var ce=i(L);Pe=s(ce,`Note that when creating models and layers with
`),A=r(ce,"A",{href:!0,rel:!0});var Ge=i(A);Le=s(Ge,"subclassing"),Ge.forEach(t),Ae=s(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){f(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(A,"rel","nofollow")},m(v,z){k(v,d,z),e(d,g),e(d,c),e(c,u),e(d,_),k(v,l,z),k(v,p,z),e(p,E),e(E,le),e(p,Z),e(p,N),e(N,te),k(v,oe,z),k(v,M,z),e(M,we),e(M,V),e(V,Te),e(M,ge),e(M,W),e(W,$e),e(M,pe),e(M,K),e(K,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),k(v,ee,z),k(v,j,z),e(j,P),e(P,ve),e(P,Q),e(Q,Ee),e(P,ye),e(P,I),e(I,he),e(j,Me),e(j,q),e(q,ze),e(q,J),e(J,Ce),e(q,me),e(q,G),e(G,je),e(j,ne),e(j,D),e(D,ue),e(D,X),e(X,qe),k(v,se,z),k(v,L,z),e(L,Pe),e(L,A),e(A,Le),e(L,Ae)},d(v){v&&t(d),v&&t(l),v&&t(p),v&&t(oe),v&&t(M),v&&t(ee),v&&t(j),v&&t(se),v&&t(L)}}}function EM(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function MM(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function zM(R){let d,g;return d=new ie({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){T(d,c,u),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function CM(R){let d,g,c,u,_,l,p,E,le,Z,N,te,oe,M,we,V,Te,ge,W,$e,pe,K,Fe,_e,U,xe,be,H,Re,ke,ee,j,P,ve,Q,Ee,ye,I,he,Me,q,ze,J,Ce,me,G,je,ne,D,ue,X,qe,se,L,Pe,A,Le,Ae;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),u=n("transformers"),_=n(" accept two formats as input:"),l=h(),p=a("ul"),E=a("li"),le=n("having all inputs as keyword arguments (like PyTorch models), or"),Z=h(),N=a("li"),te=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),M=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a("code"),Te=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a("code"),$e=n("model.fit()"),pe=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Fe=n("fit()"),_e=n(" and "),U=a("code"),xe=n("predict()"),be=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=n("Functional"),ke=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),j=a("ul"),P=a("li"),ve=n("a single Tensor with "),Q=a("code"),Ee=n("input_ids"),ye=n(" only and nothing else: "),I=a("code"),he=n("model(input_ids)"),Me=h(),q=a("li"),ze=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),Ce=n("model([input_ids, attention_mask])"),me=n(" or "),G=a("code"),je=n("model([input_ids, attention_mask, token_type_ids])"),ne=h(),D=a("li"),ue=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=h(),L=a("p"),Pe=n(`Note that when creating models and layers with
`),A=a("a"),Le=n("subclassing"),Ae=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=r(v,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=r(z,"CODE",{});var He=i(c);u=s(He,"transformers"),He.forEach(t),_=s(z," accept two formats as input:"),z.forEach(t),l=m(v),p=r(v,"UL",{});var de=i(p);E=r(de,"LI",{});var Xe=i(E);le=s(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=m(de),N=r(de,"LI",{});var Ke=i(N);te=s(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),de.forEach(t),oe=m(v),M=r(v,"P",{});var C=i(M);we=s(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r(C,"CODE",{});var Ye=i(V);Te=s(Ye,"model.fit()"),Ye.forEach(t),ge=s(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r(C,"CODE",{});var Se=i(W);$e=s(Se,"model.fit()"),Se.forEach(t),pe=s(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(C,"CODE",{});var Ze=i(K);Fe=s(Ze,"fit()"),Ze.forEach(t),_e=s(C," and "),U=r(C,"CODE",{});var et=i(U);xe=s(et,"predict()"),et.forEach(t),be=s(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var We=i(H);Re=s(We,"Functional"),We.forEach(t),ke=s(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),ee=m(v),j=r(v,"UL",{});var S=i(j);P=r(S,"LI",{});var Y=i(P);ve=s(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Je=i(Q);Ee=s(Je,"input_ids"),Je.forEach(t),ye=s(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=s(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=m(S),q=r(S,"LI",{});var B=i(q);ze=s(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(B,"CODE",{});var Qe=i(J);Ce=s(Qe,"model([input_ids, attention_mask])"),Qe.forEach(t),me=s(B," or "),G=r(B,"CODE",{});var Be=i(G);je=s(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(t),B.forEach(t),ne=m(S),D=r(S,"LI",{});var Ne=i(D);ue=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Ve=i(X);qe=s(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),Ne.forEach(t),S.forEach(t),se=m(v),L=r(v,"P",{});var ce=i(L);Pe=s(ce,`Note that when creating models and layers with
`),A=r(ce,"A",{href:!0,rel:!0});var Ge=i(A);Le=s(Ge,"subclassing"),Ge.forEach(t),Ae=s(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){f(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(A,"rel","nofollow")},m(v,z){k(v,d,z),e(d,g),e(d,c),e(c,u),e(d,_),k(v,l,z),k(v,p,z),e(p,E),e(E,le),e(p,Z),e(p,N),e(N,te),k(v,oe,z),k(v,M,z),e(M,we),e(M,V),e(V,Te),e(M,ge),e(M,W),e(W,$e),e(M,pe),e(M,K),e(K,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),k(v,ee,z),k(v,j,z),e(j,P),e(P,ve),e(P,Q),e(Q,Ee),e(P,ye),e(P,I),e(I,he),e(j,Me),e(j,q),e(q,ze),e(q,J),e(J,Ce),e(q,me),e(q,G),e(G,je),e(j,ne),e(j,D),e(D,ue),e(D,X),e(X,qe),k(v,se,z),k(v,L,z),e(L,Pe),e(L,A),e(A,Le),e(L,Ae)},d(v){v&&t(d),v&&t(l),v&&t(p),v&&t(oe),v&&t(M),v&&t(ee),v&&t(j),v&&t(se),v&&t(L)}}}function jM(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function qM(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForQuestionAnswering
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
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function PM(R){let d,g;return d=new ie({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.86</span>`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){T(d,c,u),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function LM(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function AM(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaModel

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaModel.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaModel.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function OM(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function NM(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function IM(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function DM(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForMaskedLM

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForMaskedLM.from_pretrained("roberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function SM(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function WM(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForSequenceClassification

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForSequenceClassification.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function BM(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function UM(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function HM(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function QM(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForTokenClassification

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForTokenClassification.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function VM(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function KM(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function JM(R){let d,g,c,u,_,l,p,E,le,Z,N,te,oe,M,we,V,Te,ge,W,$e,pe,K,Fe,_e,U,xe,be,H,Re,ke,ee,j,P,ve,Q,Ee,ye,I,he,Me,q,ze,J,Ce,me,G,je,ne,D,ue,X,qe,se,L,Pe,A,Le,Ae,v,z,He,de,Xe,Ke,C,Ye,Se,Ze,et,We,S,Y,Je,Oe,B,Qe,Be,Ne,Ve,ce,Ge,vt,Oa,ug,co,fg,id,gg,_g,ld,bg,kg,Na,vg,yg,wg,Lo,Tg,dd,$g,Fg,cd,xg,Rg,Eg,Ao,Mg,pd,zg,Cg,hd,jg,qg,Pg,An,ou,Oo,On,xc,Ia,Lg,Rc,Ag,nu,Ie,Da,Og,Ec,Ng,Ig,Mc,Dg,Sg,Nn,Wg,Sa,Bg,zc,Ug,Hg,Qg,In,Vg,Wa,Kg,md,Jg,Gg,Xg,yo,Ba,Yg,Cc,Zg,e_,Ua,ud,t_,jc,o_,n_,fd,s_,qc,a_,r_,Dn,Ha,i_,Qa,l_,Pc,d_,c_,p_,Sn,Va,h_,Lc,m_,u_,gd,Ka,su,No,Wn,Ac,Ja,f_,Oc,g_,au,tt,Ga,__,Xa,b_,Nc,k_,v_,y_,Ic,w_,T_,Bn,$_,Ya,F_,Dc,x_,R_,E_,Un,M_,Za,z_,_d,C_,j_,q_,bd,er,ru,Io,Hn,Sc,tr,P_,Wc,L_,iu,ot,or,A_,Bc,O_,N_,nr,I_,kd,D_,S_,W_,sr,B_,ar,U_,H_,Q_,rr,V_,Uc,K_,J_,G_,pt,X_,Hc,Y_,Z_,Qc,eb,tb,Vc,ob,nb,Kc,sb,ab,Jc,rb,ib,Gc,lb,db,cb,Qn,pb,Xc,hb,mb,ir,ub,fb,Ut,lr,gb,Do,_b,vd,bb,kb,Yc,vb,yb,wb,Vn,Tb,Kn,lu,So,Jn,Zc,dr,$b,ep,Fb,du,yt,cr,xb,pr,Rb,tp,Eb,Mb,zb,hr,Cb,yd,jb,qb,Pb,mr,Lb,ur,Ab,Ob,Nb,Ht,fr,Ib,Wo,Db,wd,Sb,Wb,op,Bb,Ub,Hb,Gn,Qb,Xn,cu,Bo,Yn,np,gr,Vb,sp,Kb,pu,wt,_r,Jb,br,Gb,ap,Xb,Yb,Zb,kr,ek,Td,tk,ok,nk,vr,sk,yr,ak,rk,ik,Rt,wr,lk,Uo,dk,$d,ck,pk,rp,hk,mk,uk,Zn,fk,es,gk,ts,hu,Ho,os,ip,Tr,_k,lp,bk,mu,Tt,$r,kk,dp,vk,yk,Fr,wk,Fd,Tk,$k,Fk,xr,xk,Rr,Rk,Ek,Mk,ct,Er,zk,Qo,Ck,xd,jk,qk,cp,Pk,Lk,Ak,ns,Ok,ss,Nk,as,Ik,rs,Dk,is,uu,Vo,ls,pp,Mr,Sk,hp,Wk,fu,$t,zr,Bk,mp,Uk,Hk,Cr,Qk,Rd,Vk,Kk,Jk,jr,Gk,qr,Xk,Yk,Zk,Qt,Pr,ev,Ko,tv,Ed,ov,nv,up,sv,av,rv,ds,iv,cs,gu,Jo,ps,fp,Lr,lv,gp,dv,_u,Ft,Ar,cv,_p,pv,hv,Or,mv,Md,uv,fv,gv,Nr,_v,Ir,bv,kv,vv,Et,Dr,yv,Go,wv,zd,Tv,$v,bp,Fv,xv,Rv,hs,Ev,ms,Mv,us,bu,Xo,fs,kp,Sr,zv,vp,Cv,ku,xt,Wr,jv,Yo,qv,yp,Pv,Lv,wp,Av,Ov,Nv,Br,Iv,Cd,Dv,Sv,Wv,Ur,Bv,Hr,Uv,Hv,Qv,Mt,Qr,Vv,Zo,Kv,jd,Jv,Gv,Tp,Xv,Yv,Zv,gs,ey,_s,ty,bs,vu,en,ks,$p,Vr,oy,Fp,ny,yu,ht,Kr,sy,xp,ay,ry,Jr,iy,qd,ly,dy,cy,Gr,py,Xr,hy,my,uy,vs,fy,Vt,Yr,gy,tn,_y,Pd,by,ky,Rp,vy,yy,wy,ys,Ty,ws,wu,on,Ts,Ep,Zr,$y,Mp,Fy,Tu,nn,ei,xy,Kt,ti,Ry,sn,Ey,Ld,My,zy,zp,Cy,jy,qy,$s,Py,Fs,$u,an,xs,Cp,oi,Ly,jp,Ay,Fu,mt,ni,Oy,si,Ny,qp,Iy,Dy,Sy,ai,Wy,Ad,By,Uy,Hy,ri,Qy,ii,Vy,Ky,Jy,Rs,Gy,zt,li,Xy,rn,Yy,Od,Zy,ew,Pp,tw,ow,nw,Es,sw,Ms,aw,zs,xu,ln,Cs,Lp,di,rw,Ap,iw,Ru,ut,ci,lw,Op,dw,cw,pi,pw,Nd,hw,mw,uw,hi,fw,mi,gw,_w,bw,js,kw,Ct,ui,vw,dn,yw,Id,ww,Tw,Np,$w,Fw,xw,qs,Rw,Ps,Ew,Ls,Eu,cn,As,Ip,fi,Mw,Dp,zw,Mu,ft,gi,Cw,Sp,jw,qw,_i,Pw,Dd,Lw,Aw,Ow,bi,Nw,ki,Iw,Dw,Sw,Os,Ww,Jt,vi,Bw,pn,Uw,Sd,Hw,Qw,Wp,Vw,Kw,Jw,Ns,Gw,Is,zu,hn,Ds,Bp,yi,Xw,Up,Yw,Cu,gt,wi,Zw,Hp,e2,t2,Ti,o2,Wd,n2,s2,a2,$i,r2,Fi,i2,l2,d2,Ss,c2,jt,xi,p2,mn,h2,Bd,m2,u2,Qp,f2,g2,_2,Ws,b2,Bs,k2,Us,ju,un,Hs,Vp,Ri,v2,Kp,y2,qu,_t,Ei,w2,fn,T2,Jp,$2,F2,Gp,x2,R2,E2,Mi,M2,Ud,z2,C2,j2,zi,q2,Ci,P2,L2,A2,Qs,O2,qt,ji,N2,gn,I2,Hd,D2,S2,Xp,W2,B2,U2,Vs,H2,Ks,Q2,Js,Pu,_n,Gs,Yp,qi,V2,Zp,K2,Lu,nt,Pi,J2,eh,G2,X2,Li,Y2,Qd,Z2,eT,tT,Ai,oT,Oi,nT,sT,aT,th,rT,iT,po,oh,Ni,lT,dT,nh,Ii,cT,pT,sh,Di,hT,mT,ah,Si,uT,fT,Gt,Wi,gT,bn,_T,rh,bT,kT,ih,vT,yT,wT,Xs,TT,Ys,Au,kn,Zs,lh,Bi,$T,dh,FT,Ou,st,Ui,xT,ch,RT,ET,Hi,MT,Vd,zT,CT,jT,Qi,qT,Vi,PT,LT,AT,ph,OT,NT,ho,hh,Ki,IT,DT,mh,Ji,ST,WT,uh,Gi,BT,UT,fh,Xi,HT,QT,Xt,Yi,VT,vn,KT,gh,JT,GT,_h,XT,YT,ZT,ea,e$,ta,Nu,yn,oa,bh,Zi,t$,kh,o$,Iu,at,el,n$,tl,s$,vh,a$,r$,i$,ol,l$,Kd,d$,c$,p$,nl,h$,sl,m$,u$,f$,yh,g$,_$,mo,wh,al,b$,k$,Th,rl,v$,y$,$h,il,w$,T$,Fh,ll,$$,F$,Yt,dl,x$,wn,R$,xh,E$,M$,Rh,z$,C$,j$,na,q$,sa,Du,Tn,aa,Eh,cl,P$,Mh,L$,Su,rt,pl,A$,zh,O$,N$,hl,I$,Jd,D$,S$,W$,ml,B$,ul,U$,H$,Q$,Ch,V$,K$,uo,jh,fl,J$,G$,qh,gl,X$,Y$,Ph,_l,Z$,e1,Lh,bl,t1,o1,Zt,kl,n1,$n,s1,Ah,a1,r1,Oh,i1,l1,d1,ra,c1,ia,Wu,Fn,la,Nh,vl,p1,Ih,h1,Bu,it,yl,m1,Dh,u1,f1,wl,g1,Gd,_1,b1,k1,Tl,v1,$l,y1,w1,T1,Sh,$1,F1,fo,Wh,Fl,x1,R1,Bh,xl,E1,M1,Uh,Rl,z1,C1,Hh,El,j1,q1,eo,Ml,P1,xn,L1,Qh,A1,O1,Vh,N1,I1,D1,da,S1,ca,Uu,Rn,pa,Kh,zl,W1,Jh,B1,Hu,lt,Cl,U1,Gh,H1,Q1,jl,V1,Xd,K1,J1,G1,ql,X1,Pl,Y1,Z1,e0,Xh,t0,o0,go,Yh,Ll,n0,s0,Zh,Al,a0,r0,em,Ol,i0,l0,tm,Nl,d0,c0,to,Il,p0,En,h0,om,m0,u0,nm,f0,g0,_0,ha,b0,ma,Qu,Mn,ua,sm,Dl,k0,am,v0,Vu,dt,Sl,y0,zn,w0,rm,T0,$0,im,F0,x0,R0,Wl,E0,Yd,M0,z0,C0,Bl,j0,Ul,q0,P0,L0,lm,A0,O0,_o,dm,Hl,N0,I0,cm,Ql,D0,S0,pm,Vl,W0,B0,hm,Kl,U0,H0,oo,Jl,Q0,Cn,V0,mm,K0,J0,um,G0,X0,Y0,fa,Z0,ga,Ku;return l=new De({}),M=new De({}),Be=new De({}),Oa=new O({props:{name:"class transformers.RobertaConfig",anchor:"transformers.RobertaConfig",parameters:[{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/configuration_roberta.py#L37"}}),An=new ae({props:{anchor:"transformers.RobertaConfig.example",$$slots:{default:[DE]},$$scope:{ctx:R}}}),Ia=new De({}),Da=new O({props:{name:"class transformers.RobertaTokenizer",anchor:"transformers.RobertaTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
other word. (RoBERTa tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/tokenization_roberta.py#L107"}}),Nn=new ae({props:{anchor:"transformers.RobertaTokenizer.example",$$slots:{default:[SE]},$$scope:{ctx:R}}}),In=new fe({props:{$$slots:{default:[WE]},$$scope:{ctx:R}}}),Ba=new O({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/tokenization_roberta.py#L344",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ha=new O({props:{name:"get_special_tokens_mask",anchor:"transformers.RobertaTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/tokenization_roberta.py#L369",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Va=new O({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/tokenization_roberta.py#L396",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ka=new O({props:{name:"save_vocabulary",anchor:"transformers.RobertaTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/tokenization_roberta.py#L315"}}),Ja=new De({}),Ga=new O({props:{name:"class transformers.RobertaTokenizerFast",anchor:"transformers.RobertaTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RobertaTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether the post processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/tokenization_roberta_fast.py#L76"}}),Bn=new ae({props:{anchor:"transformers.RobertaTokenizerFast.example",$$slots:{default:[BE]},$$scope:{ctx:R}}}),Un=new fe({props:{$$slots:{default:[UE]},$$scope:{ctx:R}}}),er=new O({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RobertaTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/tokenization_roberta_fast.py#L279"}}),tr=new De({}),or=new O({props:{name:"class transformers.RobertaModel",anchor:"transformers.RobertaModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.RobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_roberta.py#L697"}}),lr=new O({props:{name:"forward",anchor:"transformers.RobertaModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_roberta.py#L742",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vn=new fe({props:{$$slots:{default:[HE]},$$scope:{ctx:R}}}),Kn=new ae({props:{anchor:"transformers.RobertaModel.forward.example",$$slots:{default:[QE]},$$scope:{ctx:R}}}),dr=new De({}),cr=new O({props:{name:"class transformers.RobertaForCausalLM",anchor:"transformers.RobertaForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_roberta.py#L883"}}),fr=new O({props:{name:"forward",anchor:"transformers.RobertaForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Tuple[typing.Tuple[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_roberta.py#L909",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Gn=new fe({props:{$$slots:{default:[VE]},$$scope:{ctx:R}}}),Xn=new ae({props:{anchor:"transformers.RobertaForCausalLM.forward.example",$$slots:{default:[KE]},$$scope:{ctx:R}}}),gr=new De({}),_r=new O({props:{name:"class transformers.RobertaForMaskedLM",anchor:"transformers.RobertaForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_roberta.py#L1035"}}),wr=new O({props:{name:"forward",anchor:"transformers.RobertaForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.RobertaForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_roberta.py#L1064",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zn=new fe({props:{$$slots:{default:[JE]},$$scope:{ctx:R}}}),es=new ae({props:{anchor:"transformers.RobertaForMaskedLM.forward.example",$$slots:{default:[GE]},$$scope:{ctx:R}}}),ts=new ae({props:{anchor:"transformers.RobertaForMaskedLM.forward.example-2",$$slots:{default:[XE]},$$scope:{ctx:R}}}),Tr=new De({}),$r=new O({props:{name:"class transformers.RobertaForSequenceClassification",anchor:"transformers.RobertaForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_roberta.py#L1166"}}),Er=new O({props:{name:"forward",anchor:"transformers.RobertaForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_roberta.py#L1180",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ns=new fe({props:{$$slots:{default:[YE]},$$scope:{ctx:R}}}),ss=new ae({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example",$$slots:{default:[ZE]},$$scope:{ctx:R}}}),as=new ae({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example-2",$$slots:{default:[eM]},$$scope:{ctx:R}}}),rs=new ae({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example-3",$$slots:{default:[tM]},$$scope:{ctx:R}}}),is=new ae({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example-4",$$slots:{default:[oM]},$$scope:{ctx:R}}}),Mr=new De({}),zr=new O({props:{name:"class transformers.RobertaForMultipleChoice",anchor:"transformers.RobertaForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_roberta.py#L1266"}}),Pr=new O({props:{name:"forward",anchor:"transformers.RobertaForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_roberta.py#L1279",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ds=new fe({props:{$$slots:{default:[nM]},$$scope:{ctx:R}}}),cs=new ae({props:{anchor:"transformers.RobertaForMultipleChoice.forward.example",$$slots:{default:[sM]},$$scope:{ctx:R}}}),Lr=new De({}),Ar=new O({props:{name:"class transformers.RobertaForTokenClassification",anchor:"transformers.RobertaForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_roberta.py#L1359"}}),Dr=new O({props:{name:"forward",anchor:"transformers.RobertaForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_roberta.py#L1377",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),hs=new fe({props:{$$slots:{default:[aM]},$$scope:{ctx:R}}}),ms=new ae({props:{anchor:"transformers.RobertaForTokenClassification.forward.example",$$slots:{default:[rM]},$$scope:{ctx:R}}}),us=new ae({props:{anchor:"transformers.RobertaForTokenClassification.forward.example-2",$$slots:{default:[iM]},$$scope:{ctx:R}}}),Sr=new De({}),Wr=new O({props:{name:"class transformers.RobertaForQuestionAnswering",anchor:"transformers.RobertaForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_roberta.py#L1468"}}),Qr=new O({props:{name:"forward",anchor:"transformers.RobertaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.RobertaForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_roberta.py#L1482",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),gs=new fe({props:{$$slots:{default:[lM]},$$scope:{ctx:R}}}),_s=new ae({props:{anchor:"transformers.RobertaForQuestionAnswering.forward.example",$$slots:{default:[dM]},$$scope:{ctx:R}}}),bs=new ae({props:{anchor:"transformers.RobertaForQuestionAnswering.forward.example-2",$$slots:{default:[cM]},$$scope:{ctx:R}}}),Vr=new De({}),Kr=new O({props:{name:"class transformers.TFRobertaModel",anchor:"transformers.TFRobertaModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_tf_roberta.py#L914"}}),vs=new fe({props:{$$slots:{default:[pM]},$$scope:{ctx:R}}}),Yr=new O({props:{name:"call",anchor:"transformers.TFRobertaModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_tf_roberta.py#L919",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ys=new fe({props:{$$slots:{default:[hM]},$$scope:{ctx:R}}}),ws=new ae({props:{anchor:"transformers.TFRobertaModel.call.example",$$slots:{default:[mM]},$$scope:{ctx:R}}}),Zr=new De({}),ei=new O({props:{name:"class transformers.TFRobertaForCausalLM",anchor:"transformers.TFRobertaForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1143"}}),ti=new O({props:{name:"call",anchor:"transformers.TFRobertaForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForCausalLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1176",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$s=new fe({props:{$$slots:{default:[uM]},$$scope:{ctx:R}}}),Fs=new ae({props:{anchor:"transformers.TFRobertaForCausalLM.call.example",$$slots:{default:[fM]},$$scope:{ctx:R}}}),oi=new De({}),ni=new O({props:{name:"class transformers.TFRobertaForMaskedLM",anchor:"transformers.TFRobertaForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1058"}}),Rs=new fe({props:{$$slots:{default:[gM]},$$scope:{ctx:R}}}),li=new O({props:{name:"call",anchor:"transformers.TFRobertaForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1075",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Es=new fe({props:{$$slots:{default:[_M]},$$scope:{ctx:R}}}),Ms=new ae({props:{anchor:"transformers.TFRobertaForMaskedLM.call.example",$$slots:{default:[bM]},$$scope:{ctx:R}}}),zs=new ae({props:{anchor:"transformers.TFRobertaForMaskedLM.call.example-2",$$slots:{default:[kM]},$$scope:{ctx:R}}}),di=new De({}),ci=new O({props:{name:"class transformers.TFRobertaForSequenceClassification",anchor:"transformers.TFRobertaForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1323"}}),js=new fe({props:{$$slots:{default:[vM]},$$scope:{ctx:R}}}),ui=new O({props:{name:"call",anchor:"transformers.TFRobertaForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1334",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),qs=new fe({props:{$$slots:{default:[yM]},$$scope:{ctx:R}}}),Ps=new ae({props:{anchor:"transformers.TFRobertaForSequenceClassification.call.example",$$slots:{default:[wM]},$$scope:{ctx:R}}}),Ls=new ae({props:{anchor:"transformers.TFRobertaForSequenceClassification.call.example-2",$$slots:{default:[TM]},$$scope:{ctx:R}}}),fi=new De({}),gi=new O({props:{name:"class transformers.TFRobertaForMultipleChoice",anchor:"transformers.TFRobertaForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1407"}}),Os=new fe({props:{$$slots:{default:[$M]},$$scope:{ctx:R}}}),vi=new O({props:{name:"call",anchor:"transformers.TFRobertaForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1431",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ns=new fe({props:{$$slots:{default:[FM]},$$scope:{ctx:R}}}),Is=new ae({props:{anchor:"transformers.TFRobertaForMultipleChoice.call.example",$$slots:{default:[xM]},$$scope:{ctx:R}}}),yi=new De({}),wi=new O({props:{name:"class transformers.TFRobertaForTokenClassification",anchor:"transformers.TFRobertaForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1528"}}),Ss=new fe({props:{$$slots:{default:[RM]},$$scope:{ctx:R}}}),xi=new O({props:{name:"call",anchor:"transformers.TFRobertaForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1546",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ws=new fe({props:{$$slots:{default:[EM]},$$scope:{ctx:R}}}),Bs=new ae({props:{anchor:"transformers.TFRobertaForTokenClassification.call.example",$$slots:{default:[MM]},$$scope:{ctx:R}}}),Us=new ae({props:{anchor:"transformers.TFRobertaForTokenClassification.call.example-2",$$slots:{default:[zM]},$$scope:{ctx:R}}}),Ri=new De({}),Ei=new O({props:{name:"class transformers.TFRobertaForQuestionAnswering",anchor:"transformers.TFRobertaForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1619"}}),Qs=new fe({props:{$$slots:{default:[CM]},$$scope:{ctx:R}}}),ji=new O({props:{name:"call",anchor:"transformers.TFRobertaForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1632",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Vs=new fe({props:{$$slots:{default:[jM]},$$scope:{ctx:R}}}),Ks=new ae({props:{anchor:"transformers.TFRobertaForQuestionAnswering.call.example",$$slots:{default:[qM]},$$scope:{ctx:R}}}),Js=new ae({props:{anchor:"transformers.TFRobertaForQuestionAnswering.call.example-2",$$slots:{default:[PM]},$$scope:{ctx:R}}}),qi=new De({}),Pi=new O({props:{name:"class transformers.FlaxRobertaModel",anchor:"transformers.FlaxRobertaModel",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_flax_roberta.py#L989"}}),Wi=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xs=new fe({props:{$$slots:{default:[LM]},$$scope:{ctx:R}}}),Ys=new ae({props:{anchor:"transformers.FlaxRobertaModel.__call__.example",$$slots:{default:[AM]},$$scope:{ctx:R}}}),Bi=new De({}),Ui=new O({props:{name:"class transformers.FlaxRobertaForCausalLM",anchor:"transformers.FlaxRobertaForCausalLM",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_flax_roberta.py#L1458"}}),Yi=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ea=new fe({props:{$$slots:{default:[OM]},$$scope:{ctx:R}}}),ta=new ae({props:{anchor:"transformers.FlaxRobertaForCausalLM.__call__.example",$$slots:{default:[NM]},$$scope:{ctx:R}}}),Zi=new De({}),el=new O({props:{name:"class transformers.FlaxRobertaForMaskedLM",anchor:"transformers.FlaxRobertaForMaskedLM",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_flax_roberta.py#L1057"}}),dl=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),na=new fe({props:{$$slots:{default:[IM]},$$scope:{ctx:R}}}),sa=new ae({props:{anchor:"transformers.FlaxRobertaForMaskedLM.__call__.example",$$slots:{default:[DM]},$$scope:{ctx:R}}}),cl=new De({}),pl=new O({props:{name:"class transformers.FlaxRobertaForSequenceClassification",anchor:"transformers.FlaxRobertaForSequenceClassification",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_flax_roberta.py#L1130"}}),kl=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ra=new fe({props:{$$slots:{default:[SM]},$$scope:{ctx:R}}}),ia=new ae({props:{anchor:"transformers.FlaxRobertaForSequenceClassification.__call__.example",$$slots:{default:[WM]},$$scope:{ctx:R}}}),vl=new De({}),yl=new O({props:{name:"class transformers.FlaxRobertaForMultipleChoice",anchor:"transformers.FlaxRobertaForMultipleChoice",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_flax_roberta.py#L1212"}}),Ml=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),da=new fe({props:{$$slots:{default:[BM]},$$scope:{ctx:R}}}),ca=new ae({props:{anchor:"transformers.FlaxRobertaForMultipleChoice.__call__.example",$$slots:{default:[UM]},$$scope:{ctx:R}}}),zl=new De({}),Cl=new O({props:{name:"class transformers.FlaxRobertaForTokenClassification",anchor:"transformers.FlaxRobertaForTokenClassification",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_flax_roberta.py#L1295"}}),Il=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ha=new fe({props:{$$slots:{default:[HM]},$$scope:{ctx:R}}}),ma=new ae({props:{anchor:"transformers.FlaxRobertaForTokenClassification.__call__.example",$$slots:{default:[QM]},$$scope:{ctx:R}}}),Dl=new De({}),Sl=new O({props:{name:"class transformers.FlaxRobertaForQuestionAnswering",anchor:"transformers.FlaxRobertaForQuestionAnswering",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_flax_roberta.py#L1373"}}),Jl=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fa=new fe({props:{$$slots:{default:[VM]},$$scope:{ctx:R}}}),ga=new ae({props:{anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__.example",$$slots:{default:[KM]},$$scope:{ctx:R}}}),{c(){d=a("meta"),g=h(),c=a("h1"),u=a("a"),_=a("span"),y(l.$$.fragment),p=h(),E=a("span"),le=n("RoBERTa"),Z=h(),N=a("h2"),te=a("a"),oe=a("span"),y(M.$$.fragment),we=h(),V=a("span"),Te=n("Overview"),ge=h(),W=a("p"),$e=n("The RoBERTa model was proposed in "),pe=a("a"),K=n("RoBERTa: A Robustly Optimized BERT Pretraining Approach"),Fe=n(` by Yinhan Liu, Myle Ott, Naman Goyal, Jingfei Du, Mandar Joshi, Danqi Chen, Omer
Levy, Mike Lewis, Luke Zettlemoyer, Veselin Stoyanov. It is based on Google\u2019s BERT model released in 2018.`),_e=h(),U=a("p"),xe=n(`It builds on BERT and modifies key hyperparameters, removing the next-sentence pretraining objective and training with
much larger mini-batches and learning rates.`),be=h(),H=a("p"),Re=n("The abstract from the paper is the following:"),ke=h(),ee=a("p"),j=a("em"),P=n(`Language model pretraining has led to significant performance gains but careful comparison between different
approaches is challenging. Training is computationally expensive, often done on private datasets of different sizes,
and, as we will show, hyperparameter choices have significant impact on the final results. We present a replication
study of BERT pretraining (Devlin et al., 2019) that carefully measures the impact of many key hyperparameters and
training data size. We find that BERT was significantly undertrained, and can match or exceed the performance of every
model published after it. Our best model achieves state-of-the-art results on GLUE, RACE and SQuAD. These results
highlight the importance of previously overlooked design choices, and raise questions about the source of recently
reported improvements. We release our models and code.`),ve=h(),Q=a("p"),Ee=n("Tips:"),ye=h(),I=a("ul"),he=a("li"),Me=n("This implementation is the same as "),q=a("a"),ze=n("BertModel"),J=n(` with a tiny embeddings tweak as well as a setup
for Roberta pretrained models.`),Ce=h(),me=a("li"),G=n(`RoBERTa has the same architecture as BERT, but uses a byte-level BPE as a tokenizer (same as GPT-2) and uses a
different pretraining scheme.`),je=h(),ne=a("li"),D=n("RoBERTa doesn\u2019t have "),ue=a("code"),X=n("token_type_ids"),qe=n(`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),se=a("code"),L=n("tokenizer.sep_token"),Pe=n(" (or "),A=a("code"),Le=n("</s>"),Ae=n(")"),v=h(),z=a("li"),He=a("a"),de=n("CamemBERT"),Xe=n(" is a wrapper around RoBERTa. Refer to this page for usage examples."),Ke=h(),C=a("p"),Ye=n("This model was contributed by "),Se=a("a"),Ze=n("julien-c"),et=n(". The original code can be found "),We=a("a"),S=n("here"),Y=n("."),Je=h(),Oe=a("h2"),B=a("a"),Qe=a("span"),y(Be.$$.fragment),Ne=h(),Ve=a("span"),ce=n("RobertaConfig"),Ge=h(),vt=a("div"),y(Oa.$$.fragment),ug=h(),co=a("p"),fg=n("This is the configuration class to store the configuration of a "),id=a("a"),gg=n("RobertaModel"),_g=n(" or a "),ld=a("a"),bg=n("TFRobertaModel"),kg=n(`. It is
used to instantiate a RoBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the RoBERTa
`),Na=a("a"),vg=n("roberta-base"),yg=n(" architecture."),wg=h(),Lo=a("p"),Tg=n("Configuration objects inherit from "),dd=a("a"),$g=n("PretrainedConfig"),Fg=n(` and can be used to control the model outputs. Read the
documentation from `),cd=a("a"),xg=n("PretrainedConfig"),Rg=n(" for more information."),Eg=h(),Ao=a("p"),Mg=n("The "),pd=a("a"),zg=n("RobertaConfig"),Cg=n(" class directly inherits "),hd=a("a"),jg=n("BertConfig"),qg=n(`. It reuses the same defaults. Please check the parent
class for more information.`),Pg=h(),y(An.$$.fragment),ou=h(),Oo=a("h2"),On=a("a"),xc=a("span"),y(Ia.$$.fragment),Lg=h(),Rc=a("span"),Ag=n("RobertaTokenizer"),nu=h(),Ie=a("div"),y(Da.$$.fragment),Og=h(),Ec=a("p"),Ng=n("Constructs a RoBERTa tokenizer, derived from the GPT-2 tokenizer, using byte-level Byte-Pair-Encoding."),Ig=h(),Mc=a("p"),Dg=n("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Sg=h(),y(Nn.$$.fragment),Wg=h(),Sa=a("p"),Bg=n("You can get around that behavior by passing "),zc=a("code"),Ug=n("add_prefix_space=True"),Hg=n(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Qg=h(),y(In.$$.fragment),Vg=h(),Wa=a("p"),Kg=n("This tokenizer inherits from "),md=a("a"),Jg=n("PreTrainedTokenizer"),Gg=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Xg=h(),yo=a("div"),y(Ba.$$.fragment),Yg=h(),Cc=a("p"),Zg=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoBERTa sequence has the following format:`),e_=h(),Ua=a("ul"),ud=a("li"),t_=n("single sequence: "),jc=a("code"),o_=n("<s> X </s>"),n_=h(),fd=a("li"),s_=n("pair of sequences: "),qc=a("code"),a_=n("<s> A </s></s> B </s>"),r_=h(),Dn=a("div"),y(Ha.$$.fragment),i_=h(),Qa=a("p"),l_=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Pc=a("code"),d_=n("prepare_for_model"),c_=n(" method."),p_=h(),Sn=a("div"),y(Va.$$.fragment),h_=h(),Lc=a("p"),m_=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. RoBERTa does not
make use of token type ids, therefore a list of zeros is returned.`),u_=h(),gd=a("div"),y(Ka.$$.fragment),su=h(),No=a("h2"),Wn=a("a"),Ac=a("span"),y(Ja.$$.fragment),f_=h(),Oc=a("span"),g_=n("RobertaTokenizerFast"),au=h(),tt=a("div"),y(Ga.$$.fragment),__=h(),Xa=a("p"),b_=n("Construct a \u201Cfast\u201D RoBERTa tokenizer (backed by HuggingFace\u2019s "),Nc=a("em"),k_=n("tokenizers"),v_=n(` library), derived from the GPT-2
tokenizer, using byte-level Byte-Pair-Encoding.`),y_=h(),Ic=a("p"),w_=n("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),T_=h(),y(Bn.$$.fragment),$_=h(),Ya=a("p"),F_=n("You can get around that behavior by passing "),Dc=a("code"),x_=n("add_prefix_space=True"),R_=n(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),E_=h(),y(Un.$$.fragment),M_=h(),Za=a("p"),z_=n("This tokenizer inherits from "),_d=a("a"),C_=n("PreTrainedTokenizerFast"),j_=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),q_=h(),bd=a("div"),y(er.$$.fragment),ru=h(),Io=a("h2"),Hn=a("a"),Sc=a("span"),y(tr.$$.fragment),P_=h(),Wc=a("span"),L_=n("RobertaModel"),iu=h(),ot=a("div"),y(or.$$.fragment),A_=h(),Bc=a("p"),O_=n("The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),N_=h(),nr=a("p"),I_=n("This model inherits from "),kd=a("a"),D_=n("PreTrainedModel"),S_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),W_=h(),sr=a("p"),B_=n("This model is also a PyTorch "),ar=a("a"),U_=n("torch.nn.Module"),H_=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Q_=h(),rr=a("p"),V_=n(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Uc=a("em"),K_=n(`Attention is
all you need`),J_=n(`_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`),G_=h(),pt=a("p"),X_=n("To behave as an decoder the model needs to be initialized with the "),Hc=a("code"),Y_=n("is_decoder"),Z_=n(` argument of the configuration set
to `),Qc=a("code"),eb=n("True"),tb=n(". To be used in a Seq2Seq model, the model needs to initialized with both "),Vc=a("code"),ob=n("is_decoder"),nb=n(` argument and
`),Kc=a("code"),sb=n("add_cross_attention"),ab=n(" set to "),Jc=a("code"),rb=n("True"),ib=n("; an "),Gc=a("code"),lb=n("encoder_hidden_states"),db=n(" is then expected as an input to the forward pass."),cb=h(),Qn=a("p"),pb=n(".. _"),Xc=a("em"),hb=n("Attention is all you need"),mb=n(": "),ir=a("a"),ub=n("https://arxiv.org/abs/1706.03762"),fb=h(),Ut=a("div"),y(lr.$$.fragment),gb=h(),Do=a("p"),_b=n("The "),vd=a("a"),bb=n("RobertaModel"),kb=n(" forward method, overrides the "),Yc=a("code"),vb=n("__call__"),yb=n(" special method."),wb=h(),y(Vn.$$.fragment),Tb=h(),y(Kn.$$.fragment),lu=h(),So=a("h2"),Jn=a("a"),Zc=a("span"),y(dr.$$.fragment),$b=h(),ep=a("span"),Fb=n("RobertaForCausalLM"),du=h(),yt=a("div"),y(cr.$$.fragment),xb=h(),pr=a("p"),Rb=n("RoBERTa Model with a "),tp=a("code"),Eb=n("language modeling"),Mb=n(" head on top for CLM fine-tuning."),zb=h(),hr=a("p"),Cb=n("This model inherits from "),yd=a("a"),jb=n("PreTrainedModel"),qb=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pb=h(),mr=a("p"),Lb=n("This model is also a PyTorch "),ur=a("a"),Ab=n("torch.nn.Module"),Ob=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nb=h(),Ht=a("div"),y(fr.$$.fragment),Ib=h(),Wo=a("p"),Db=n("The "),wd=a("a"),Sb=n("RobertaForCausalLM"),Wb=n(" forward method, overrides the "),op=a("code"),Bb=n("__call__"),Ub=n(" special method."),Hb=h(),y(Gn.$$.fragment),Qb=h(),y(Xn.$$.fragment),cu=h(),Bo=a("h2"),Yn=a("a"),np=a("span"),y(gr.$$.fragment),Vb=h(),sp=a("span"),Kb=n("RobertaForMaskedLM"),pu=h(),wt=a("div"),y(_r.$$.fragment),Jb=h(),br=a("p"),Gb=n("RoBERTa Model with a "),ap=a("code"),Xb=n("language modeling"),Yb=n(" head on top."),Zb=h(),kr=a("p"),ek=n("This model inherits from "),Td=a("a"),tk=n("PreTrainedModel"),ok=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nk=h(),vr=a("p"),sk=n("This model is also a PyTorch "),yr=a("a"),ak=n("torch.nn.Module"),rk=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ik=h(),Rt=a("div"),y(wr.$$.fragment),lk=h(),Uo=a("p"),dk=n("The "),$d=a("a"),ck=n("RobertaForMaskedLM"),pk=n(" forward method, overrides the "),rp=a("code"),hk=n("__call__"),mk=n(" special method."),uk=h(),y(Zn.$$.fragment),fk=h(),y(es.$$.fragment),gk=h(),y(ts.$$.fragment),hu=h(),Ho=a("h2"),os=a("a"),ip=a("span"),y(Tr.$$.fragment),_k=h(),lp=a("span"),bk=n("RobertaForSequenceClassification"),mu=h(),Tt=a("div"),y($r.$$.fragment),kk=h(),dp=a("p"),vk=n(`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),yk=h(),Fr=a("p"),wk=n("This model inherits from "),Fd=a("a"),Tk=n("PreTrainedModel"),$k=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fk=h(),xr=a("p"),xk=n("This model is also a PyTorch "),Rr=a("a"),Rk=n("torch.nn.Module"),Ek=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mk=h(),ct=a("div"),y(Er.$$.fragment),zk=h(),Qo=a("p"),Ck=n("The "),xd=a("a"),jk=n("RobertaForSequenceClassification"),qk=n(" forward method, overrides the "),cp=a("code"),Pk=n("__call__"),Lk=n(" special method."),Ak=h(),y(ns.$$.fragment),Ok=h(),y(ss.$$.fragment),Nk=h(),y(as.$$.fragment),Ik=h(),y(rs.$$.fragment),Dk=h(),y(is.$$.fragment),uu=h(),Vo=a("h2"),ls=a("a"),pp=a("span"),y(Mr.$$.fragment),Sk=h(),hp=a("span"),Wk=n("RobertaForMultipleChoice"),fu=h(),$t=a("div"),y(zr.$$.fragment),Bk=h(),mp=a("p"),Uk=n(`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Hk=h(),Cr=a("p"),Qk=n("This model inherits from "),Rd=a("a"),Vk=n("PreTrainedModel"),Kk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jk=h(),jr=a("p"),Gk=n("This model is also a PyTorch "),qr=a("a"),Xk=n("torch.nn.Module"),Yk=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zk=h(),Qt=a("div"),y(Pr.$$.fragment),ev=h(),Ko=a("p"),tv=n("The "),Ed=a("a"),ov=n("RobertaForMultipleChoice"),nv=n(" forward method, overrides the "),up=a("code"),sv=n("__call__"),av=n(" special method."),rv=h(),y(ds.$$.fragment),iv=h(),y(cs.$$.fragment),gu=h(),Jo=a("h2"),ps=a("a"),fp=a("span"),y(Lr.$$.fragment),lv=h(),gp=a("span"),dv=n("RobertaForTokenClassification"),_u=h(),Ft=a("div"),y(Ar.$$.fragment),cv=h(),_p=a("p"),pv=n(`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),hv=h(),Or=a("p"),mv=n("This model inherits from "),Md=a("a"),uv=n("PreTrainedModel"),fv=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gv=h(),Nr=a("p"),_v=n("This model is also a PyTorch "),Ir=a("a"),bv=n("torch.nn.Module"),kv=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vv=h(),Et=a("div"),y(Dr.$$.fragment),yv=h(),Go=a("p"),wv=n("The "),zd=a("a"),Tv=n("RobertaForTokenClassification"),$v=n(" forward method, overrides the "),bp=a("code"),Fv=n("__call__"),xv=n(" special method."),Rv=h(),y(hs.$$.fragment),Ev=h(),y(ms.$$.fragment),Mv=h(),y(us.$$.fragment),bu=h(),Xo=a("h2"),fs=a("a"),kp=a("span"),y(Sr.$$.fragment),zv=h(),vp=a("span"),Cv=n("RobertaForQuestionAnswering"),ku=h(),xt=a("div"),y(Wr.$$.fragment),jv=h(),Yo=a("p"),qv=n(`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),yp=a("code"),Pv=n("span start logits"),Lv=n(" and "),wp=a("code"),Av=n("span end logits"),Ov=n(")."),Nv=h(),Br=a("p"),Iv=n("This model inherits from "),Cd=a("a"),Dv=n("PreTrainedModel"),Sv=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wv=h(),Ur=a("p"),Bv=n("This model is also a PyTorch "),Hr=a("a"),Uv=n("torch.nn.Module"),Hv=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qv=h(),Mt=a("div"),y(Qr.$$.fragment),Vv=h(),Zo=a("p"),Kv=n("The "),jd=a("a"),Jv=n("RobertaForQuestionAnswering"),Gv=n(" forward method, overrides the "),Tp=a("code"),Xv=n("__call__"),Yv=n(" special method."),Zv=h(),y(gs.$$.fragment),ey=h(),y(_s.$$.fragment),ty=h(),y(bs.$$.fragment),vu=h(),en=a("h2"),ks=a("a"),$p=a("span"),y(Vr.$$.fragment),oy=h(),Fp=a("span"),ny=n("TFRobertaModel"),yu=h(),ht=a("div"),y(Kr.$$.fragment),sy=h(),xp=a("p"),ay=n("The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),ry=h(),Jr=a("p"),iy=n("This model inherits from "),qd=a("a"),ly=n("TFPreTrainedModel"),dy=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cy=h(),Gr=a("p"),py=n("This model is also a "),Xr=a("a"),hy=n("tf.keras.Model"),my=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),uy=h(),y(vs.$$.fragment),fy=h(),Vt=a("div"),y(Yr.$$.fragment),gy=h(),tn=a("p"),_y=n("The "),Pd=a("a"),by=n("TFRobertaModel"),ky=n(" forward method, overrides the "),Rp=a("code"),vy=n("__call__"),yy=n(" special method."),wy=h(),y(ys.$$.fragment),Ty=h(),y(ws.$$.fragment),wu=h(),on=a("h2"),Ts=a("a"),Ep=a("span"),y(Zr.$$.fragment),$y=h(),Mp=a("span"),Fy=n("TFRobertaForCausalLM"),Tu=h(),nn=a("div"),y(ei.$$.fragment),xy=h(),Kt=a("div"),y(ti.$$.fragment),Ry=h(),sn=a("p"),Ey=n("The "),Ld=a("a"),My=n("TFRobertaForCausalLM"),zy=n(" forward method, overrides the "),zp=a("code"),Cy=n("__call__"),jy=n(" special method."),qy=h(),y($s.$$.fragment),Py=h(),y(Fs.$$.fragment),$u=h(),an=a("h2"),xs=a("a"),Cp=a("span"),y(oi.$$.fragment),Ly=h(),jp=a("span"),Ay=n("TFRobertaForMaskedLM"),Fu=h(),mt=a("div"),y(ni.$$.fragment),Oy=h(),si=a("p"),Ny=n("RoBERTa Model with a "),qp=a("code"),Iy=n("language modeling"),Dy=n(" head on top."),Sy=h(),ai=a("p"),Wy=n("This model inherits from "),Ad=a("a"),By=n("TFPreTrainedModel"),Uy=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hy=h(),ri=a("p"),Qy=n("This model is also a "),ii=a("a"),Vy=n("tf.keras.Model"),Ky=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jy=h(),y(Rs.$$.fragment),Gy=h(),zt=a("div"),y(li.$$.fragment),Xy=h(),rn=a("p"),Yy=n("The "),Od=a("a"),Zy=n("TFRobertaForMaskedLM"),ew=n(" forward method, overrides the "),Pp=a("code"),tw=n("__call__"),ow=n(" special method."),nw=h(),y(Es.$$.fragment),sw=h(),y(Ms.$$.fragment),aw=h(),y(zs.$$.fragment),xu=h(),ln=a("h2"),Cs=a("a"),Lp=a("span"),y(di.$$.fragment),rw=h(),Ap=a("span"),iw=n("TFRobertaForSequenceClassification"),Ru=h(),ut=a("div"),y(ci.$$.fragment),lw=h(),Op=a("p"),dw=n(`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),cw=h(),pi=a("p"),pw=n("This model inherits from "),Nd=a("a"),hw=n("TFPreTrainedModel"),mw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uw=h(),hi=a("p"),fw=n("This model is also a "),mi=a("a"),gw=n("tf.keras.Model"),_w=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bw=h(),y(js.$$.fragment),kw=h(),Ct=a("div"),y(ui.$$.fragment),vw=h(),dn=a("p"),yw=n("The "),Id=a("a"),ww=n("TFRobertaForSequenceClassification"),Tw=n(" forward method, overrides the "),Np=a("code"),$w=n("__call__"),Fw=n(" special method."),xw=h(),y(qs.$$.fragment),Rw=h(),y(Ps.$$.fragment),Ew=h(),y(Ls.$$.fragment),Eu=h(),cn=a("h2"),As=a("a"),Ip=a("span"),y(fi.$$.fragment),Mw=h(),Dp=a("span"),zw=n("TFRobertaForMultipleChoice"),Mu=h(),ft=a("div"),y(gi.$$.fragment),Cw=h(),Sp=a("p"),jw=n(`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),qw=h(),_i=a("p"),Pw=n("This model inherits from "),Dd=a("a"),Lw=n("TFPreTrainedModel"),Aw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ow=h(),bi=a("p"),Nw=n("This model is also a "),ki=a("a"),Iw=n("tf.keras.Model"),Dw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sw=h(),y(Os.$$.fragment),Ww=h(),Jt=a("div"),y(vi.$$.fragment),Bw=h(),pn=a("p"),Uw=n("The "),Sd=a("a"),Hw=n("TFRobertaForMultipleChoice"),Qw=n(" forward method, overrides the "),Wp=a("code"),Vw=n("__call__"),Kw=n(" special method."),Jw=h(),y(Ns.$$.fragment),Gw=h(),y(Is.$$.fragment),zu=h(),hn=a("h2"),Ds=a("a"),Bp=a("span"),y(yi.$$.fragment),Xw=h(),Up=a("span"),Yw=n("TFRobertaForTokenClassification"),Cu=h(),gt=a("div"),y(wi.$$.fragment),Zw=h(),Hp=a("p"),e2=n(`RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),t2=h(),Ti=a("p"),o2=n("This model inherits from "),Wd=a("a"),n2=n("TFPreTrainedModel"),s2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),a2=h(),$i=a("p"),r2=n("This model is also a "),Fi=a("a"),i2=n("tf.keras.Model"),l2=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),d2=h(),y(Ss.$$.fragment),c2=h(),jt=a("div"),y(xi.$$.fragment),p2=h(),mn=a("p"),h2=n("The "),Bd=a("a"),m2=n("TFRobertaForTokenClassification"),u2=n(" forward method, overrides the "),Qp=a("code"),f2=n("__call__"),g2=n(" special method."),_2=h(),y(Ws.$$.fragment),b2=h(),y(Bs.$$.fragment),k2=h(),y(Us.$$.fragment),ju=h(),un=a("h2"),Hs=a("a"),Vp=a("span"),y(Ri.$$.fragment),v2=h(),Kp=a("span"),y2=n("TFRobertaForQuestionAnswering"),qu=h(),_t=a("div"),y(Ei.$$.fragment),w2=h(),fn=a("p"),T2=n(`RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Jp=a("code"),$2=n("span start logits"),F2=n(" and "),Gp=a("code"),x2=n("span end logits"),R2=n(")."),E2=h(),Mi=a("p"),M2=n("This model inherits from "),Ud=a("a"),z2=n("TFPreTrainedModel"),C2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),j2=h(),zi=a("p"),q2=n("This model is also a "),Ci=a("a"),P2=n("tf.keras.Model"),L2=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),A2=h(),y(Qs.$$.fragment),O2=h(),qt=a("div"),y(ji.$$.fragment),N2=h(),gn=a("p"),I2=n("The "),Hd=a("a"),D2=n("TFRobertaForQuestionAnswering"),S2=n(" forward method, overrides the "),Xp=a("code"),W2=n("__call__"),B2=n(" special method."),U2=h(),y(Vs.$$.fragment),H2=h(),y(Ks.$$.fragment),Q2=h(),y(Js.$$.fragment),Pu=h(),_n=a("h2"),Gs=a("a"),Yp=a("span"),y(qi.$$.fragment),V2=h(),Zp=a("span"),K2=n("FlaxRobertaModel"),Lu=h(),nt=a("div"),y(Pi.$$.fragment),J2=h(),eh=a("p"),G2=n("The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),X2=h(),Li=a("p"),Y2=n("This model inherits from "),Qd=a("a"),Z2=n("FlaxPreTrainedModel"),eT=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),tT=h(),Ai=a("p"),oT=n("This model is also a Flax Linen "),Oi=a("a"),nT=n("flax.linen.Module"),sT=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),aT=h(),th=a("p"),rT=n("Finally, this model supports inherent JAX features such as:"),iT=h(),po=a("ul"),oh=a("li"),Ni=a("a"),lT=n("Just-In-Time (JIT) compilation"),dT=h(),nh=a("li"),Ii=a("a"),cT=n("Automatic Differentiation"),pT=h(),sh=a("li"),Di=a("a"),hT=n("Vectorization"),mT=h(),ah=a("li"),Si=a("a"),uT=n("Parallelization"),fT=h(),Gt=a("div"),y(Wi.$$.fragment),gT=h(),bn=a("p"),_T=n("The "),rh=a("code"),bT=n("FlaxRobertaPreTrainedModel"),kT=n(" forward method, overrides the "),ih=a("code"),vT=n("__call__"),yT=n(" special method."),wT=h(),y(Xs.$$.fragment),TT=h(),y(Ys.$$.fragment),Au=h(),kn=a("h2"),Zs=a("a"),lh=a("span"),y(Bi.$$.fragment),$T=h(),dh=a("span"),FT=n("FlaxRobertaForCausalLM"),Ou=h(),st=a("div"),y(Ui.$$.fragment),xT=h(),ch=a("p"),RT=n(`Roberta Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),ET=h(),Hi=a("p"),MT=n("This model inherits from "),Vd=a("a"),zT=n("FlaxPreTrainedModel"),CT=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),jT=h(),Qi=a("p"),qT=n("This model is also a Flax Linen "),Vi=a("a"),PT=n("flax.linen.Module"),LT=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),AT=h(),ph=a("p"),OT=n("Finally, this model supports inherent JAX features such as:"),NT=h(),ho=a("ul"),hh=a("li"),Ki=a("a"),IT=n("Just-In-Time (JIT) compilation"),DT=h(),mh=a("li"),Ji=a("a"),ST=n("Automatic Differentiation"),WT=h(),uh=a("li"),Gi=a("a"),BT=n("Vectorization"),UT=h(),fh=a("li"),Xi=a("a"),HT=n("Parallelization"),QT=h(),Xt=a("div"),y(Yi.$$.fragment),VT=h(),vn=a("p"),KT=n("The "),gh=a("code"),JT=n("FlaxRobertaPreTrainedModel"),GT=n(" forward method, overrides the "),_h=a("code"),XT=n("__call__"),YT=n(" special method."),ZT=h(),y(ea.$$.fragment),e$=h(),y(ta.$$.fragment),Nu=h(),yn=a("h2"),oa=a("a"),bh=a("span"),y(Zi.$$.fragment),t$=h(),kh=a("span"),o$=n("FlaxRobertaForMaskedLM"),Iu=h(),at=a("div"),y(el.$$.fragment),n$=h(),tl=a("p"),s$=n("RoBERTa Model with a "),vh=a("code"),a$=n("language modeling"),r$=n(" head on top."),i$=h(),ol=a("p"),l$=n("This model inherits from "),Kd=a("a"),d$=n("FlaxPreTrainedModel"),c$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),p$=h(),nl=a("p"),h$=n("This model is also a Flax Linen "),sl=a("a"),m$=n("flax.linen.Module"),u$=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),f$=h(),yh=a("p"),g$=n("Finally, this model supports inherent JAX features such as:"),_$=h(),mo=a("ul"),wh=a("li"),al=a("a"),b$=n("Just-In-Time (JIT) compilation"),k$=h(),Th=a("li"),rl=a("a"),v$=n("Automatic Differentiation"),y$=h(),$h=a("li"),il=a("a"),w$=n("Vectorization"),T$=h(),Fh=a("li"),ll=a("a"),$$=n("Parallelization"),F$=h(),Yt=a("div"),y(dl.$$.fragment),x$=h(),wn=a("p"),R$=n("The "),xh=a("code"),E$=n("FlaxRobertaPreTrainedModel"),M$=n(" forward method, overrides the "),Rh=a("code"),z$=n("__call__"),C$=n(" special method."),j$=h(),y(na.$$.fragment),q$=h(),y(sa.$$.fragment),Du=h(),Tn=a("h2"),aa=a("a"),Eh=a("span"),y(cl.$$.fragment),P$=h(),Mh=a("span"),L$=n("FlaxRobertaForSequenceClassification"),Su=h(),rt=a("div"),y(pl.$$.fragment),A$=h(),zh=a("p"),O$=n(`Roberta Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),N$=h(),hl=a("p"),I$=n("This model inherits from "),Jd=a("a"),D$=n("FlaxPreTrainedModel"),S$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),W$=h(),ml=a("p"),B$=n("This model is also a Flax Linen "),ul=a("a"),U$=n("flax.linen.Module"),H$=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Q$=h(),Ch=a("p"),V$=n("Finally, this model supports inherent JAX features such as:"),K$=h(),uo=a("ul"),jh=a("li"),fl=a("a"),J$=n("Just-In-Time (JIT) compilation"),G$=h(),qh=a("li"),gl=a("a"),X$=n("Automatic Differentiation"),Y$=h(),Ph=a("li"),_l=a("a"),Z$=n("Vectorization"),e1=h(),Lh=a("li"),bl=a("a"),t1=n("Parallelization"),o1=h(),Zt=a("div"),y(kl.$$.fragment),n1=h(),$n=a("p"),s1=n("The "),Ah=a("code"),a1=n("FlaxRobertaPreTrainedModel"),r1=n(" forward method, overrides the "),Oh=a("code"),i1=n("__call__"),l1=n(" special method."),d1=h(),y(ra.$$.fragment),c1=h(),y(ia.$$.fragment),Wu=h(),Fn=a("h2"),la=a("a"),Nh=a("span"),y(vl.$$.fragment),p1=h(),Ih=a("span"),h1=n("FlaxRobertaForMultipleChoice"),Bu=h(),it=a("div"),y(yl.$$.fragment),m1=h(),Dh=a("p"),u1=n(`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),f1=h(),wl=a("p"),g1=n("This model inherits from "),Gd=a("a"),_1=n("FlaxPreTrainedModel"),b1=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),k1=h(),Tl=a("p"),v1=n("This model is also a Flax Linen "),$l=a("a"),y1=n("flax.linen.Module"),w1=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),T1=h(),Sh=a("p"),$1=n("Finally, this model supports inherent JAX features such as:"),F1=h(),fo=a("ul"),Wh=a("li"),Fl=a("a"),x1=n("Just-In-Time (JIT) compilation"),R1=h(),Bh=a("li"),xl=a("a"),E1=n("Automatic Differentiation"),M1=h(),Uh=a("li"),Rl=a("a"),z1=n("Vectorization"),C1=h(),Hh=a("li"),El=a("a"),j1=n("Parallelization"),q1=h(),eo=a("div"),y(Ml.$$.fragment),P1=h(),xn=a("p"),L1=n("The "),Qh=a("code"),A1=n("FlaxRobertaPreTrainedModel"),O1=n(" forward method, overrides the "),Vh=a("code"),N1=n("__call__"),I1=n(" special method."),D1=h(),y(da.$$.fragment),S1=h(),y(ca.$$.fragment),Uu=h(),Rn=a("h2"),pa=a("a"),Kh=a("span"),y(zl.$$.fragment),W1=h(),Jh=a("span"),B1=n("FlaxRobertaForTokenClassification"),Hu=h(),lt=a("div"),y(Cl.$$.fragment),U1=h(),Gh=a("p"),H1=n(`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Q1=h(),jl=a("p"),V1=n("This model inherits from "),Xd=a("a"),K1=n("FlaxPreTrainedModel"),J1=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),G1=h(),ql=a("p"),X1=n("This model is also a Flax Linen "),Pl=a("a"),Y1=n("flax.linen.Module"),Z1=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),e0=h(),Xh=a("p"),t0=n("Finally, this model supports inherent JAX features such as:"),o0=h(),go=a("ul"),Yh=a("li"),Ll=a("a"),n0=n("Just-In-Time (JIT) compilation"),s0=h(),Zh=a("li"),Al=a("a"),a0=n("Automatic Differentiation"),r0=h(),em=a("li"),Ol=a("a"),i0=n("Vectorization"),l0=h(),tm=a("li"),Nl=a("a"),d0=n("Parallelization"),c0=h(),to=a("div"),y(Il.$$.fragment),p0=h(),En=a("p"),h0=n("The "),om=a("code"),m0=n("FlaxRobertaPreTrainedModel"),u0=n(" forward method, overrides the "),nm=a("code"),f0=n("__call__"),g0=n(" special method."),_0=h(),y(ha.$$.fragment),b0=h(),y(ma.$$.fragment),Qu=h(),Mn=a("h2"),ua=a("a"),sm=a("span"),y(Dl.$$.fragment),k0=h(),am=a("span"),v0=n("FlaxRobertaForQuestionAnswering"),Vu=h(),dt=a("div"),y(Sl.$$.fragment),y0=h(),zn=a("p"),w0=n(`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),rm=a("code"),T0=n("span start logits"),$0=n(" and "),im=a("code"),F0=n("span end logits"),x0=n(")."),R0=h(),Wl=a("p"),E0=n("This model inherits from "),Yd=a("a"),M0=n("FlaxPreTrainedModel"),z0=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),C0=h(),Bl=a("p"),j0=n("This model is also a Flax Linen "),Ul=a("a"),q0=n("flax.linen.Module"),P0=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),L0=h(),lm=a("p"),A0=n("Finally, this model supports inherent JAX features such as:"),O0=h(),_o=a("ul"),dm=a("li"),Hl=a("a"),N0=n("Just-In-Time (JIT) compilation"),I0=h(),cm=a("li"),Ql=a("a"),D0=n("Automatic Differentiation"),S0=h(),pm=a("li"),Vl=a("a"),W0=n("Vectorization"),B0=h(),hm=a("li"),Kl=a("a"),U0=n("Parallelization"),H0=h(),oo=a("div"),y(Jl.$$.fragment),Q0=h(),Cn=a("p"),V0=n("The "),mm=a("code"),K0=n("FlaxRobertaPreTrainedModel"),J0=n(" forward method, overrides the "),um=a("code"),G0=n("__call__"),X0=n(" special method."),Y0=h(),y(fa.$$.fragment),Z0=h(),y(ga.$$.fragment),this.h()},l(o){const b=NE('[data-svelte="svelte-1phssyn"]',document.head);d=r(b,"META",{name:!0,content:!0}),b.forEach(t),g=m(o),c=r(o,"H1",{class:!0});var Gl=i(c);u=r(Gl,"A",{id:!0,class:!0,href:!0});var fm=i(u);_=r(fm,"SPAN",{});var gm=i(_);w(l.$$.fragment,gm),gm.forEach(t),fm.forEach(t),p=m(Gl),E=r(Gl,"SPAN",{});var _m=i(E);le=s(_m,"RoBERTa"),_m.forEach(t),Gl.forEach(t),Z=m(o),N=r(o,"H2",{class:!0});var Xl=i(N);te=r(Xl,"A",{id:!0,class:!0,href:!0});var bm=i(te);oe=r(bm,"SPAN",{});var km=i(oe);w(M.$$.fragment,km),km.forEach(t),bm.forEach(t),we=m(Xl),V=r(Xl,"SPAN",{});var vm=i(V);Te=s(vm,"Overview"),vm.forEach(t),Xl.forEach(t),ge=m(o),W=r(o,"P",{});var Yl=i(W);$e=s(Yl,"The RoBERTa model was proposed in "),pe=r(Yl,"A",{href:!0,rel:!0});var ym=i(pe);K=s(ym,"RoBERTa: A Robustly Optimized BERT Pretraining Approach"),ym.forEach(t),Fe=s(Yl,` by Yinhan Liu, Myle Ott, Naman Goyal, Jingfei Du, Mandar Joshi, Danqi Chen, Omer
Levy, Mike Lewis, Luke Zettlemoyer, Veselin Stoyanov. It is based on Google\u2019s BERT model released in 2018.`),Yl.forEach(t),_e=m(o),U=r(o,"P",{});var wm=i(U);xe=s(wm,`It builds on BERT and modifies key hyperparameters, removing the next-sentence pretraining objective and training with
much larger mini-batches and learning rates.`),wm.forEach(t),be=m(o),H=r(o,"P",{});var Tm=i(H);Re=s(Tm,"The abstract from the paper is the following:"),Tm.forEach(t),ke=m(o),ee=r(o,"P",{});var $m=i(ee);j=r($m,"EM",{});var Fm=i(j);P=s(Fm,`Language model pretraining has led to significant performance gains but careful comparison between different
approaches is challenging. Training is computationally expensive, often done on private datasets of different sizes,
and, as we will show, hyperparameter choices have significant impact on the final results. We present a replication
study of BERT pretraining (Devlin et al., 2019) that carefully measures the impact of many key hyperparameters and
training data size. We find that BERT was significantly undertrained, and can match or exceed the performance of every
model published after it. Our best model achieves state-of-the-art results on GLUE, RACE and SQuAD. These results
highlight the importance of previously overlooked design choices, and raise questions about the source of recently
reported improvements. We release our models and code.`),Fm.forEach(t),$m.forEach(t),ve=m(o),Q=r(o,"P",{});var xm=i(Q);Ee=s(xm,"Tips:"),xm.forEach(t),ye=m(o),I=r(o,"UL",{});var bo=i(I);he=r(bo,"LI",{});var Zl=i(he);Me=s(Zl,"This implementation is the same as "),q=r(Zl,"A",{href:!0});var Rm=i(q);ze=s(Rm,"BertModel"),Rm.forEach(t),J=s(Zl,` with a tiny embeddings tweak as well as a setup
for Roberta pretrained models.`),Zl.forEach(t),Ce=m(bo),me=r(bo,"LI",{});var Em=i(me);G=s(Em,`RoBERTa has the same architecture as BERT, but uses a byte-level BPE as a tokenizer (same as GPT-2) and uses a
different pretraining scheme.`),Em.forEach(t),je=m(bo),ne=r(bo,"LI",{});var ko=i(ne);D=s(ko,"RoBERTa doesn\u2019t have "),ue=r(ko,"CODE",{});var Mm=i(ue);X=s(Mm,"token_type_ids"),Mm.forEach(t),qe=s(ko,`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),se=r(ko,"CODE",{});var zm=i(se);L=s(zm,"tokenizer.sep_token"),zm.forEach(t),Pe=s(ko," (or "),A=r(ko,"CODE",{});var Cm=i(A);Le=s(Cm,"</s>"),Cm.forEach(t),Ae=s(ko,")"),ko.forEach(t),v=m(bo),z=r(bo,"LI",{});var Zd=i(z);He=r(Zd,"A",{href:!0});var jm=i(He);de=s(jm,"CamemBERT"),jm.forEach(t),Xe=s(Zd," is a wrapper around RoBERTa. Refer to this page for usage examples."),Zd.forEach(t),bo.forEach(t),Ke=m(o),C=r(o,"P",{});var jn=i(C);Ye=s(jn,"This model was contributed by "),Se=r(jn,"A",{href:!0,rel:!0});var qm=i(Se);Ze=s(qm,"julien-c"),qm.forEach(t),et=s(jn,". The original code can be found "),We=r(jn,"A",{href:!0,rel:!0});var Pm=i(We);S=s(Pm,"here"),Pm.forEach(t),Y=s(jn,"."),jn.forEach(t),Je=m(o),Oe=r(o,"H2",{class:!0});var ed=i(Oe);B=r(ed,"A",{id:!0,class:!0,href:!0});var Lm=i(B);Qe=r(Lm,"SPAN",{});var Am=i(Qe);w(Be.$$.fragment,Am),Am.forEach(t),Lm.forEach(t),Ne=m(ed),Ve=r(ed,"SPAN",{});var Om=i(Ve);ce=s(Om,"RobertaConfig"),Om.forEach(t),ed.forEach(t),Ge=m(o),vt=r(o,"DIV",{class:!0});var Bt=i(vt);w(Oa.$$.fragment,Bt),ug=m(Bt),co=r(Bt,"P",{});var vo=i(co);fg=s(vo,"This is the configuration class to store the configuration of a "),id=r(vo,"A",{href:!0});var Nm=i(id);gg=s(Nm,"RobertaModel"),Nm.forEach(t),_g=s(vo," or a "),ld=r(vo,"A",{href:!0});var Im=i(ld);bg=s(Im,"TFRobertaModel"),Im.forEach(t),kg=s(vo,`. It is
used to instantiate a RoBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the RoBERTa
`),Na=r(vo,"A",{href:!0,rel:!0});var Dm=i(Na);vg=s(Dm,"roberta-base"),Dm.forEach(t),yg=s(vo," architecture."),vo.forEach(t),wg=m(Bt),Lo=r(Bt,"P",{});var qn=i(Lo);Tg=s(qn,"Configuration objects inherit from "),dd=r(qn,"A",{href:!0});var Sm=i(dd);$g=s(Sm,"PretrainedConfig"),Sm.forEach(t),Fg=s(qn,` and can be used to control the model outputs. Read the
documentation from `),cd=r(qn,"A",{href:!0});var Wm=i(cd);xg=s(Wm,"PretrainedConfig"),Wm.forEach(t),Rg=s(qn," for more information."),qn.forEach(t),Eg=m(Bt),Ao=r(Bt,"P",{});var Pn=i(Ao);Mg=s(Pn,"The "),pd=r(Pn,"A",{href:!0});var Bm=i(pd);zg=s(Bm,"RobertaConfig"),Bm.forEach(t),Cg=s(Pn," class directly inherits "),hd=r(Pn,"A",{href:!0});var Um=i(hd);jg=s(Um,"BertConfig"),Um.forEach(t),qg=s(Pn,`. It reuses the same defaults. Please check the parent
class for more information.`),Pn.forEach(t),Pg=m(Bt),w(An.$$.fragment,Bt),Bt.forEach(t),ou=m(o),Oo=r(o,"H2",{class:!0});var td=i(Oo);On=r(td,"A",{id:!0,class:!0,href:!0});var Hm=i(On);xc=r(Hm,"SPAN",{});var Qm=i(xc);w(Ia.$$.fragment,Qm),Qm.forEach(t),Hm.forEach(t),Lg=m(td),Rc=r(td,"SPAN",{});var Vm=i(Rc);Ag=s(Vm,"RobertaTokenizer"),Vm.forEach(t),td.forEach(t),nu=m(o),Ie=r(o,"DIV",{class:!0});var Ue=i(Ie);w(Da.$$.fragment,Ue),Og=m(Ue),Ec=r(Ue,"P",{});var Km=i(Ec);Ng=s(Km,"Constructs a RoBERTa tokenizer, derived from the GPT-2 tokenizer, using byte-level Byte-Pair-Encoding."),Km.forEach(t),Ig=m(Ue),Mc=r(Ue,"P",{});var Jm=i(Mc);Dg=s(Jm,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Jm.forEach(t),Sg=m(Ue),w(Nn.$$.fragment,Ue),Wg=m(Ue),Sa=r(Ue,"P",{});var od=i(Sa);Bg=s(od,"You can get around that behavior by passing "),zc=r(od,"CODE",{});var Gm=i(zc);Ug=s(Gm,"add_prefix_space=True"),Gm.forEach(t),Hg=s(od,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),od.forEach(t),Qg=m(Ue),w(In.$$.fragment,Ue),Vg=m(Ue),Wa=r(Ue,"P",{});var nd=i(Wa);Kg=s(nd,"This tokenizer inherits from "),md=r(nd,"A",{href:!0});var Xm=i(md);Jg=s(Xm,"PreTrainedTokenizer"),Xm.forEach(t),Gg=s(nd,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),nd.forEach(t),Xg=m(Ue),yo=r(Ue,"DIV",{class:!0});var Ln=i(yo);w(Ba.$$.fragment,Ln),Yg=m(Ln),Cc=r(Ln,"P",{});var Ym=i(Cc);Zg=s(Ym,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoBERTa sequence has the following format:`),Ym.forEach(t),e_=m(Ln),Ua=r(Ln,"UL",{});var sd=i(Ua);ud=r(sd,"LI",{});var ec=i(ud);t_=s(ec,"single sequence: "),jc=r(ec,"CODE",{});var Zm=i(jc);o_=s(Zm,"<s> X </s>"),Zm.forEach(t),ec.forEach(t),n_=m(sd),fd=r(sd,"LI",{});var tc=i(fd);s_=s(tc,"pair of sequences: "),qc=r(tc,"CODE",{});var eu=i(qc);a_=s(eu,"<s> A </s></s> B </s>"),eu.forEach(t),tc.forEach(t),sd.forEach(t),Ln.forEach(t),r_=m(Ue),Dn=r(Ue,"DIV",{class:!0});var ad=i(Dn);w(Ha.$$.fragment,ad),i_=m(ad),Qa=r(ad,"P",{});var rd=i(Qa);l_=s(rd,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Pc=r(rd,"CODE",{});var eF=i(Pc);d_=s(eF,"prepare_for_model"),eF.forEach(t),c_=s(rd," method."),rd.forEach(t),ad.forEach(t),p_=m(Ue),Sn=r(Ue,"DIV",{class:!0});var Ju=i(Sn);w(Va.$$.fragment,Ju),h_=m(Ju),Lc=r(Ju,"P",{});var tF=i(Lc);m_=s(tF,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. RoBERTa does not
make use of token type ids, therefore a list of zeros is returned.`),tF.forEach(t),Ju.forEach(t),u_=m(Ue),gd=r(Ue,"DIV",{class:!0});var oF=i(gd);w(Ka.$$.fragment,oF),oF.forEach(t),Ue.forEach(t),su=m(o),No=r(o,"H2",{class:!0});var Gu=i(No);Wn=r(Gu,"A",{id:!0,class:!0,href:!0});var nF=i(Wn);Ac=r(nF,"SPAN",{});var sF=i(Ac);w(Ja.$$.fragment,sF),sF.forEach(t),nF.forEach(t),f_=m(Gu),Oc=r(Gu,"SPAN",{});var aF=i(Oc);g_=s(aF,"RobertaTokenizerFast"),aF.forEach(t),Gu.forEach(t),au=m(o),tt=r(o,"DIV",{class:!0});var bt=i(tt);w(Ga.$$.fragment,bt),__=m(bt),Xa=r(bt,"P",{});var Xu=i(Xa);b_=s(Xu,"Construct a \u201Cfast\u201D RoBERTa tokenizer (backed by HuggingFace\u2019s "),Nc=r(Xu,"EM",{});var rF=i(Nc);k_=s(rF,"tokenizers"),rF.forEach(t),v_=s(Xu,` library), derived from the GPT-2
tokenizer, using byte-level Byte-Pair-Encoding.`),Xu.forEach(t),y_=m(bt),Ic=r(bt,"P",{});var iF=i(Ic);w_=s(iF,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),iF.forEach(t),T_=m(bt),w(Bn.$$.fragment,bt),$_=m(bt),Ya=r(bt,"P",{});var Yu=i(Ya);F_=s(Yu,"You can get around that behavior by passing "),Dc=r(Yu,"CODE",{});var lF=i(Dc);x_=s(lF,"add_prefix_space=True"),lF.forEach(t),R_=s(Yu,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Yu.forEach(t),E_=m(bt),w(Un.$$.fragment,bt),M_=m(bt),Za=r(bt,"P",{});var Zu=i(Za);z_=s(Zu,"This tokenizer inherits from "),_d=r(Zu,"A",{href:!0});var dF=i(_d);C_=s(dF,"PreTrainedTokenizerFast"),dF.forEach(t),j_=s(Zu,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Zu.forEach(t),q_=m(bt),bd=r(bt,"DIV",{class:!0});var cF=i(bd);w(er.$$.fragment,cF),cF.forEach(t),bt.forEach(t),ru=m(o),Io=r(o,"H2",{class:!0});var ef=i(Io);Hn=r(ef,"A",{id:!0,class:!0,href:!0});var pF=i(Hn);Sc=r(pF,"SPAN",{});var hF=i(Sc);w(tr.$$.fragment,hF),hF.forEach(t),pF.forEach(t),P_=m(ef),Wc=r(ef,"SPAN",{});var mF=i(Wc);L_=s(mF,"RobertaModel"),mF.forEach(t),ef.forEach(t),iu=m(o),ot=r(o,"DIV",{class:!0});var kt=i(ot);w(or.$$.fragment,kt),A_=m(kt),Bc=r(kt,"P",{});var uF=i(Bc);O_=s(uF,"The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),uF.forEach(t),N_=m(kt),nr=r(kt,"P",{});var tf=i(nr);I_=s(tf,"This model inherits from "),kd=r(tf,"A",{href:!0});var fF=i(kd);D_=s(fF,"PreTrainedModel"),fF.forEach(t),S_=s(tf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tf.forEach(t),W_=m(kt),sr=r(kt,"P",{});var of=i(sr);B_=s(of,"This model is also a PyTorch "),ar=r(of,"A",{href:!0,rel:!0});var gF=i(ar);U_=s(gF,"torch.nn.Module"),gF.forEach(t),H_=s(of,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),of.forEach(t),Q_=m(kt),rr=r(kt,"P",{});var nf=i(rr);V_=s(nf,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Uc=r(nf,"EM",{});var _F=i(Uc);K_=s(_F,`Attention is
all you need`),_F.forEach(t),J_=s(nf,`_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`),nf.forEach(t),G_=m(kt),pt=r(kt,"P",{});var Pt=i(pt);X_=s(Pt,"To behave as an decoder the model needs to be initialized with the "),Hc=r(Pt,"CODE",{});var bF=i(Hc);Y_=s(bF,"is_decoder"),bF.forEach(t),Z_=s(Pt,` argument of the configuration set
to `),Qc=r(Pt,"CODE",{});var kF=i(Qc);eb=s(kF,"True"),kF.forEach(t),tb=s(Pt,". To be used in a Seq2Seq model, the model needs to initialized with both "),Vc=r(Pt,"CODE",{});var vF=i(Vc);ob=s(vF,"is_decoder"),vF.forEach(t),nb=s(Pt,` argument and
`),Kc=r(Pt,"CODE",{});var yF=i(Kc);sb=s(yF,"add_cross_attention"),yF.forEach(t),ab=s(Pt," set to "),Jc=r(Pt,"CODE",{});var wF=i(Jc);rb=s(wF,"True"),wF.forEach(t),ib=s(Pt,"; an "),Gc=r(Pt,"CODE",{});var TF=i(Gc);lb=s(TF,"encoder_hidden_states"),TF.forEach(t),db=s(Pt," is then expected as an input to the forward pass."),Pt.forEach(t),cb=m(kt),Qn=r(kt,"P",{});var tu=i(Qn);pb=s(tu,".. _"),Xc=r(tu,"EM",{});var $F=i(Xc);hb=s($F,"Attention is all you need"),$F.forEach(t),mb=s(tu,": "),ir=r(tu,"A",{href:!0,rel:!0});var FF=i(ir);ub=s(FF,"https://arxiv.org/abs/1706.03762"),FF.forEach(t),tu.forEach(t),fb=m(kt),Ut=r(kt,"DIV",{class:!0});var _a=i(Ut);w(lr.$$.fragment,_a),gb=m(_a),Do=r(_a,"P",{});var oc=i(Do);_b=s(oc,"The "),vd=r(oc,"A",{href:!0});var xF=i(vd);bb=s(xF,"RobertaModel"),xF.forEach(t),kb=s(oc," forward method, overrides the "),Yc=r(oc,"CODE",{});var RF=i(Yc);vb=s(RF,"__call__"),RF.forEach(t),yb=s(oc," special method."),oc.forEach(t),wb=m(_a),w(Vn.$$.fragment,_a),Tb=m(_a),w(Kn.$$.fragment,_a),_a.forEach(t),kt.forEach(t),lu=m(o),So=r(o,"H2",{class:!0});var sf=i(So);Jn=r(sf,"A",{id:!0,class:!0,href:!0});var EF=i(Jn);Zc=r(EF,"SPAN",{});var MF=i(Zc);w(dr.$$.fragment,MF),MF.forEach(t),EF.forEach(t),$b=m(sf),ep=r(sf,"SPAN",{});var zF=i(ep);Fb=s(zF,"RobertaForCausalLM"),zF.forEach(t),sf.forEach(t),du=m(o),yt=r(o,"DIV",{class:!0});var wo=i(yt);w(cr.$$.fragment,wo),xb=m(wo),pr=r(wo,"P",{});var af=i(pr);Rb=s(af,"RoBERTa Model with a "),tp=r(af,"CODE",{});var CF=i(tp);Eb=s(CF,"language modeling"),CF.forEach(t),Mb=s(af," head on top for CLM fine-tuning."),af.forEach(t),zb=m(wo),hr=r(wo,"P",{});var rf=i(hr);Cb=s(rf,"This model inherits from "),yd=r(rf,"A",{href:!0});var jF=i(yd);jb=s(jF,"PreTrainedModel"),jF.forEach(t),qb=s(rf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rf.forEach(t),Pb=m(wo),mr=r(wo,"P",{});var lf=i(mr);Lb=s(lf,"This model is also a PyTorch "),ur=r(lf,"A",{href:!0,rel:!0});var qF=i(ur);Ab=s(qF,"torch.nn.Module"),qF.forEach(t),Ob=s(lf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lf.forEach(t),Nb=m(wo),Ht=r(wo,"DIV",{class:!0});var ba=i(Ht);w(fr.$$.fragment,ba),Ib=m(ba),Wo=r(ba,"P",{});var nc=i(Wo);Db=s(nc,"The "),wd=r(nc,"A",{href:!0});var PF=i(wd);Sb=s(PF,"RobertaForCausalLM"),PF.forEach(t),Wb=s(nc," forward method, overrides the "),op=r(nc,"CODE",{});var LF=i(op);Bb=s(LF,"__call__"),LF.forEach(t),Ub=s(nc," special method."),nc.forEach(t),Hb=m(ba),w(Gn.$$.fragment,ba),Qb=m(ba),w(Xn.$$.fragment,ba),ba.forEach(t),wo.forEach(t),cu=m(o),Bo=r(o,"H2",{class:!0});var df=i(Bo);Yn=r(df,"A",{id:!0,class:!0,href:!0});var AF=i(Yn);np=r(AF,"SPAN",{});var OF=i(np);w(gr.$$.fragment,OF),OF.forEach(t),AF.forEach(t),Vb=m(df),sp=r(df,"SPAN",{});var NF=i(sp);Kb=s(NF,"RobertaForMaskedLM"),NF.forEach(t),df.forEach(t),pu=m(o),wt=r(o,"DIV",{class:!0});var To=i(wt);w(_r.$$.fragment,To),Jb=m(To),br=r(To,"P",{});var cf=i(br);Gb=s(cf,"RoBERTa Model with a "),ap=r(cf,"CODE",{});var IF=i(ap);Xb=s(IF,"language modeling"),IF.forEach(t),Yb=s(cf," head on top."),cf.forEach(t),Zb=m(To),kr=r(To,"P",{});var pf=i(kr);ek=s(pf,"This model inherits from "),Td=r(pf,"A",{href:!0});var DF=i(Td);tk=s(DF,"PreTrainedModel"),DF.forEach(t),ok=s(pf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pf.forEach(t),nk=m(To),vr=r(To,"P",{});var hf=i(vr);sk=s(hf,"This model is also a PyTorch "),yr=r(hf,"A",{href:!0,rel:!0});var SF=i(yr);ak=s(SF,"torch.nn.Module"),SF.forEach(t),rk=s(hf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hf.forEach(t),ik=m(To),Rt=r(To,"DIV",{class:!0});var $o=i(Rt);w(wr.$$.fragment,$o),lk=m($o),Uo=r($o,"P",{});var sc=i(Uo);dk=s(sc,"The "),$d=r(sc,"A",{href:!0});var WF=i($d);ck=s(WF,"RobertaForMaskedLM"),WF.forEach(t),pk=s(sc," forward method, overrides the "),rp=r(sc,"CODE",{});var BF=i(rp);hk=s(BF,"__call__"),BF.forEach(t),mk=s(sc," special method."),sc.forEach(t),uk=m($o),w(Zn.$$.fragment,$o),fk=m($o),w(es.$$.fragment,$o),gk=m($o),w(ts.$$.fragment,$o),$o.forEach(t),To.forEach(t),hu=m(o),Ho=r(o,"H2",{class:!0});var mf=i(Ho);os=r(mf,"A",{id:!0,class:!0,href:!0});var UF=i(os);ip=r(UF,"SPAN",{});var HF=i(ip);w(Tr.$$.fragment,HF),HF.forEach(t),UF.forEach(t),_k=m(mf),lp=r(mf,"SPAN",{});var QF=i(lp);bk=s(QF,"RobertaForSequenceClassification"),QF.forEach(t),mf.forEach(t),mu=m(o),Tt=r(o,"DIV",{class:!0});var Fo=i(Tt);w($r.$$.fragment,Fo),kk=m(Fo),dp=r(Fo,"P",{});var VF=i(dp);vk=s(VF,`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),VF.forEach(t),yk=m(Fo),Fr=r(Fo,"P",{});var uf=i(Fr);wk=s(uf,"This model inherits from "),Fd=r(uf,"A",{href:!0});var KF=i(Fd);Tk=s(KF,"PreTrainedModel"),KF.forEach(t),$k=s(uf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uf.forEach(t),Fk=m(Fo),xr=r(Fo,"P",{});var ff=i(xr);xk=s(ff,"This model is also a PyTorch "),Rr=r(ff,"A",{href:!0,rel:!0});var JF=i(Rr);Rk=s(JF,"torch.nn.Module"),JF.forEach(t),Ek=s(ff,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ff.forEach(t),Mk=m(Fo),ct=r(Fo,"DIV",{class:!0});var Lt=i(ct);w(Er.$$.fragment,Lt),zk=m(Lt),Qo=r(Lt,"P",{});var ac=i(Qo);Ck=s(ac,"The "),xd=r(ac,"A",{href:!0});var GF=i(xd);jk=s(GF,"RobertaForSequenceClassification"),GF.forEach(t),qk=s(ac," forward method, overrides the "),cp=r(ac,"CODE",{});var XF=i(cp);Pk=s(XF,"__call__"),XF.forEach(t),Lk=s(ac," special method."),ac.forEach(t),Ak=m(Lt),w(ns.$$.fragment,Lt),Ok=m(Lt),w(ss.$$.fragment,Lt),Nk=m(Lt),w(as.$$.fragment,Lt),Ik=m(Lt),w(rs.$$.fragment,Lt),Dk=m(Lt),w(is.$$.fragment,Lt),Lt.forEach(t),Fo.forEach(t),uu=m(o),Vo=r(o,"H2",{class:!0});var gf=i(Vo);ls=r(gf,"A",{id:!0,class:!0,href:!0});var YF=i(ls);pp=r(YF,"SPAN",{});var ZF=i(pp);w(Mr.$$.fragment,ZF),ZF.forEach(t),YF.forEach(t),Sk=m(gf),hp=r(gf,"SPAN",{});var ex=i(hp);Wk=s(ex,"RobertaForMultipleChoice"),ex.forEach(t),gf.forEach(t),fu=m(o),$t=r(o,"DIV",{class:!0});var xo=i($t);w(zr.$$.fragment,xo),Bk=m(xo),mp=r(xo,"P",{});var tx=i(mp);Uk=s(tx,`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),tx.forEach(t),Hk=m(xo),Cr=r(xo,"P",{});var _f=i(Cr);Qk=s(_f,"This model inherits from "),Rd=r(_f,"A",{href:!0});var ox=i(Rd);Vk=s(ox,"PreTrainedModel"),ox.forEach(t),Kk=s(_f,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_f.forEach(t),Jk=m(xo),jr=r(xo,"P",{});var bf=i(jr);Gk=s(bf,"This model is also a PyTorch "),qr=r(bf,"A",{href:!0,rel:!0});var nx=i(qr);Xk=s(nx,"torch.nn.Module"),nx.forEach(t),Yk=s(bf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bf.forEach(t),Zk=m(xo),Qt=r(xo,"DIV",{class:!0});var ka=i(Qt);w(Pr.$$.fragment,ka),ev=m(ka),Ko=r(ka,"P",{});var rc=i(Ko);tv=s(rc,"The "),Ed=r(rc,"A",{href:!0});var sx=i(Ed);ov=s(sx,"RobertaForMultipleChoice"),sx.forEach(t),nv=s(rc," forward method, overrides the "),up=r(rc,"CODE",{});var ax=i(up);sv=s(ax,"__call__"),ax.forEach(t),av=s(rc," special method."),rc.forEach(t),rv=m(ka),w(ds.$$.fragment,ka),iv=m(ka),w(cs.$$.fragment,ka),ka.forEach(t),xo.forEach(t),gu=m(o),Jo=r(o,"H2",{class:!0});var kf=i(Jo);ps=r(kf,"A",{id:!0,class:!0,href:!0});var rx=i(ps);fp=r(rx,"SPAN",{});var ix=i(fp);w(Lr.$$.fragment,ix),ix.forEach(t),rx.forEach(t),lv=m(kf),gp=r(kf,"SPAN",{});var lx=i(gp);dv=s(lx,"RobertaForTokenClassification"),lx.forEach(t),kf.forEach(t),_u=m(o),Ft=r(o,"DIV",{class:!0});var Ro=i(Ft);w(Ar.$$.fragment,Ro),cv=m(Ro),_p=r(Ro,"P",{});var dx=i(_p);pv=s(dx,`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),dx.forEach(t),hv=m(Ro),Or=r(Ro,"P",{});var vf=i(Or);mv=s(vf,"This model inherits from "),Md=r(vf,"A",{href:!0});var cx=i(Md);uv=s(cx,"PreTrainedModel"),cx.forEach(t),fv=s(vf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vf.forEach(t),gv=m(Ro),Nr=r(Ro,"P",{});var yf=i(Nr);_v=s(yf,"This model is also a PyTorch "),Ir=r(yf,"A",{href:!0,rel:!0});var px=i(Ir);bv=s(px,"torch.nn.Module"),px.forEach(t),kv=s(yf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yf.forEach(t),vv=m(Ro),Et=r(Ro,"DIV",{class:!0});var Eo=i(Et);w(Dr.$$.fragment,Eo),yv=m(Eo),Go=r(Eo,"P",{});var ic=i(Go);wv=s(ic,"The "),zd=r(ic,"A",{href:!0});var hx=i(zd);Tv=s(hx,"RobertaForTokenClassification"),hx.forEach(t),$v=s(ic," forward method, overrides the "),bp=r(ic,"CODE",{});var mx=i(bp);Fv=s(mx,"__call__"),mx.forEach(t),xv=s(ic," special method."),ic.forEach(t),Rv=m(Eo),w(hs.$$.fragment,Eo),Ev=m(Eo),w(ms.$$.fragment,Eo),Mv=m(Eo),w(us.$$.fragment,Eo),Eo.forEach(t),Ro.forEach(t),bu=m(o),Xo=r(o,"H2",{class:!0});var wf=i(Xo);fs=r(wf,"A",{id:!0,class:!0,href:!0});var ux=i(fs);kp=r(ux,"SPAN",{});var fx=i(kp);w(Sr.$$.fragment,fx),fx.forEach(t),ux.forEach(t),zv=m(wf),vp=r(wf,"SPAN",{});var gx=i(vp);Cv=s(gx,"RobertaForQuestionAnswering"),gx.forEach(t),wf.forEach(t),ku=m(o),xt=r(o,"DIV",{class:!0});var Mo=i(xt);w(Wr.$$.fragment,Mo),jv=m(Mo),Yo=r(Mo,"P",{});var lc=i(Yo);qv=s(lc,`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),yp=r(lc,"CODE",{});var _x=i(yp);Pv=s(_x,"span start logits"),_x.forEach(t),Lv=s(lc," and "),wp=r(lc,"CODE",{});var bx=i(wp);Av=s(bx,"span end logits"),bx.forEach(t),Ov=s(lc,")."),lc.forEach(t),Nv=m(Mo),Br=r(Mo,"P",{});var Tf=i(Br);Iv=s(Tf,"This model inherits from "),Cd=r(Tf,"A",{href:!0});var kx=i(Cd);Dv=s(kx,"PreTrainedModel"),kx.forEach(t),Sv=s(Tf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tf.forEach(t),Wv=m(Mo),Ur=r(Mo,"P",{});var $f=i(Ur);Bv=s($f,"This model is also a PyTorch "),Hr=r($f,"A",{href:!0,rel:!0});var vx=i(Hr);Uv=s(vx,"torch.nn.Module"),vx.forEach(t),Hv=s($f,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$f.forEach(t),Qv=m(Mo),Mt=r(Mo,"DIV",{class:!0});var zo=i(Mt);w(Qr.$$.fragment,zo),Vv=m(zo),Zo=r(zo,"P",{});var dc=i(Zo);Kv=s(dc,"The "),jd=r(dc,"A",{href:!0});var yx=i(jd);Jv=s(yx,"RobertaForQuestionAnswering"),yx.forEach(t),Gv=s(dc," forward method, overrides the "),Tp=r(dc,"CODE",{});var wx=i(Tp);Xv=s(wx,"__call__"),wx.forEach(t),Yv=s(dc," special method."),dc.forEach(t),Zv=m(zo),w(gs.$$.fragment,zo),ey=m(zo),w(_s.$$.fragment,zo),ty=m(zo),w(bs.$$.fragment,zo),zo.forEach(t),Mo.forEach(t),vu=m(o),en=r(o,"H2",{class:!0});var Ff=i(en);ks=r(Ff,"A",{id:!0,class:!0,href:!0});var Tx=i(ks);$p=r(Tx,"SPAN",{});var $x=i($p);w(Vr.$$.fragment,$x),$x.forEach(t),Tx.forEach(t),oy=m(Ff),Fp=r(Ff,"SPAN",{});var Fx=i(Fp);ny=s(Fx,"TFRobertaModel"),Fx.forEach(t),Ff.forEach(t),yu=m(o),ht=r(o,"DIV",{class:!0});var no=i(ht);w(Kr.$$.fragment,no),sy=m(no),xp=r(no,"P",{});var xx=i(xp);ay=s(xx,"The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),xx.forEach(t),ry=m(no),Jr=r(no,"P",{});var xf=i(Jr);iy=s(xf,"This model inherits from "),qd=r(xf,"A",{href:!0});var Rx=i(qd);ly=s(Rx,"TFPreTrainedModel"),Rx.forEach(t),dy=s(xf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xf.forEach(t),cy=m(no),Gr=r(no,"P",{});var Rf=i(Gr);py=s(Rf,"This model is also a "),Xr=r(Rf,"A",{href:!0,rel:!0});var Ex=i(Xr);hy=s(Ex,"tf.keras.Model"),Ex.forEach(t),my=s(Rf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rf.forEach(t),uy=m(no),w(vs.$$.fragment,no),fy=m(no),Vt=r(no,"DIV",{class:!0});var va=i(Vt);w(Yr.$$.fragment,va),gy=m(va),tn=r(va,"P",{});var cc=i(tn);_y=s(cc,"The "),Pd=r(cc,"A",{href:!0});var Mx=i(Pd);by=s(Mx,"TFRobertaModel"),Mx.forEach(t),ky=s(cc," forward method, overrides the "),Rp=r(cc,"CODE",{});var zx=i(Rp);vy=s(zx,"__call__"),zx.forEach(t),yy=s(cc," special method."),cc.forEach(t),wy=m(va),w(ys.$$.fragment,va),Ty=m(va),w(ws.$$.fragment,va),va.forEach(t),no.forEach(t),wu=m(o),on=r(o,"H2",{class:!0});var Ef=i(on);Ts=r(Ef,"A",{id:!0,class:!0,href:!0});var Cx=i(Ts);Ep=r(Cx,"SPAN",{});var jx=i(Ep);w(Zr.$$.fragment,jx),jx.forEach(t),Cx.forEach(t),$y=m(Ef),Mp=r(Ef,"SPAN",{});var qx=i(Mp);Fy=s(qx,"TFRobertaForCausalLM"),qx.forEach(t),Ef.forEach(t),Tu=m(o),nn=r(o,"DIV",{class:!0});var Mf=i(nn);w(ei.$$.fragment,Mf),xy=m(Mf),Kt=r(Mf,"DIV",{class:!0});var ya=i(Kt);w(ti.$$.fragment,ya),Ry=m(ya),sn=r(ya,"P",{});var pc=i(sn);Ey=s(pc,"The "),Ld=r(pc,"A",{href:!0});var Px=i(Ld);My=s(Px,"TFRobertaForCausalLM"),Px.forEach(t),zy=s(pc," forward method, overrides the "),zp=r(pc,"CODE",{});var Lx=i(zp);Cy=s(Lx,"__call__"),Lx.forEach(t),jy=s(pc," special method."),pc.forEach(t),qy=m(ya),w($s.$$.fragment,ya),Py=m(ya),w(Fs.$$.fragment,ya),ya.forEach(t),Mf.forEach(t),$u=m(o),an=r(o,"H2",{class:!0});var zf=i(an);xs=r(zf,"A",{id:!0,class:!0,href:!0});var Ax=i(xs);Cp=r(Ax,"SPAN",{});var Ox=i(Cp);w(oi.$$.fragment,Ox),Ox.forEach(t),Ax.forEach(t),Ly=m(zf),jp=r(zf,"SPAN",{});var Nx=i(jp);Ay=s(Nx,"TFRobertaForMaskedLM"),Nx.forEach(t),zf.forEach(t),Fu=m(o),mt=r(o,"DIV",{class:!0});var so=i(mt);w(ni.$$.fragment,so),Oy=m(so),si=r(so,"P",{});var Cf=i(si);Ny=s(Cf,"RoBERTa Model with a "),qp=r(Cf,"CODE",{});var Ix=i(qp);Iy=s(Ix,"language modeling"),Ix.forEach(t),Dy=s(Cf," head on top."),Cf.forEach(t),Sy=m(so),ai=r(so,"P",{});var jf=i(ai);Wy=s(jf,"This model inherits from "),Ad=r(jf,"A",{href:!0});var Dx=i(Ad);By=s(Dx,"TFPreTrainedModel"),Dx.forEach(t),Uy=s(jf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jf.forEach(t),Hy=m(so),ri=r(so,"P",{});var qf=i(ri);Qy=s(qf,"This model is also a "),ii=r(qf,"A",{href:!0,rel:!0});var Sx=i(ii);Vy=s(Sx,"tf.keras.Model"),Sx.forEach(t),Ky=s(qf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qf.forEach(t),Jy=m(so),w(Rs.$$.fragment,so),Gy=m(so),zt=r(so,"DIV",{class:!0});var Co=i(zt);w(li.$$.fragment,Co),Xy=m(Co),rn=r(Co,"P",{});var hc=i(rn);Yy=s(hc,"The "),Od=r(hc,"A",{href:!0});var Wx=i(Od);Zy=s(Wx,"TFRobertaForMaskedLM"),Wx.forEach(t),ew=s(hc," forward method, overrides the "),Pp=r(hc,"CODE",{});var Bx=i(Pp);tw=s(Bx,"__call__"),Bx.forEach(t),ow=s(hc," special method."),hc.forEach(t),nw=m(Co),w(Es.$$.fragment,Co),sw=m(Co),w(Ms.$$.fragment,Co),aw=m(Co),w(zs.$$.fragment,Co),Co.forEach(t),so.forEach(t),xu=m(o),ln=r(o,"H2",{class:!0});var Pf=i(ln);Cs=r(Pf,"A",{id:!0,class:!0,href:!0});var Ux=i(Cs);Lp=r(Ux,"SPAN",{});var Hx=i(Lp);w(di.$$.fragment,Hx),Hx.forEach(t),Ux.forEach(t),rw=m(Pf),Ap=r(Pf,"SPAN",{});var Qx=i(Ap);iw=s(Qx,"TFRobertaForSequenceClassification"),Qx.forEach(t),Pf.forEach(t),Ru=m(o),ut=r(o,"DIV",{class:!0});var ao=i(ut);w(ci.$$.fragment,ao),lw=m(ao),Op=r(ao,"P",{});var Vx=i(Op);dw=s(Vx,`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Vx.forEach(t),cw=m(ao),pi=r(ao,"P",{});var Lf=i(pi);pw=s(Lf,"This model inherits from "),Nd=r(Lf,"A",{href:!0});var Kx=i(Nd);hw=s(Kx,"TFPreTrainedModel"),Kx.forEach(t),mw=s(Lf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lf.forEach(t),uw=m(ao),hi=r(ao,"P",{});var Af=i(hi);fw=s(Af,"This model is also a "),mi=r(Af,"A",{href:!0,rel:!0});var Jx=i(mi);gw=s(Jx,"tf.keras.Model"),Jx.forEach(t),_w=s(Af,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Af.forEach(t),bw=m(ao),w(js.$$.fragment,ao),kw=m(ao),Ct=r(ao,"DIV",{class:!0});var jo=i(Ct);w(ui.$$.fragment,jo),vw=m(jo),dn=r(jo,"P",{});var mc=i(dn);yw=s(mc,"The "),Id=r(mc,"A",{href:!0});var Gx=i(Id);ww=s(Gx,"TFRobertaForSequenceClassification"),Gx.forEach(t),Tw=s(mc," forward method, overrides the "),Np=r(mc,"CODE",{});var Xx=i(Np);$w=s(Xx,"__call__"),Xx.forEach(t),Fw=s(mc," special method."),mc.forEach(t),xw=m(jo),w(qs.$$.fragment,jo),Rw=m(jo),w(Ps.$$.fragment,jo),Ew=m(jo),w(Ls.$$.fragment,jo),jo.forEach(t),ao.forEach(t),Eu=m(o),cn=r(o,"H2",{class:!0});var Of=i(cn);As=r(Of,"A",{id:!0,class:!0,href:!0});var Yx=i(As);Ip=r(Yx,"SPAN",{});var Zx=i(Ip);w(fi.$$.fragment,Zx),Zx.forEach(t),Yx.forEach(t),Mw=m(Of),Dp=r(Of,"SPAN",{});var e4=i(Dp);zw=s(e4,"TFRobertaForMultipleChoice"),e4.forEach(t),Of.forEach(t),Mu=m(o),ft=r(o,"DIV",{class:!0});var ro=i(ft);w(gi.$$.fragment,ro),Cw=m(ro),Sp=r(ro,"P",{});var t4=i(Sp);jw=s(t4,`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),t4.forEach(t),qw=m(ro),_i=r(ro,"P",{});var Nf=i(_i);Pw=s(Nf,"This model inherits from "),Dd=r(Nf,"A",{href:!0});var o4=i(Dd);Lw=s(o4,"TFPreTrainedModel"),o4.forEach(t),Aw=s(Nf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nf.forEach(t),Ow=m(ro),bi=r(ro,"P",{});var If=i(bi);Nw=s(If,"This model is also a "),ki=r(If,"A",{href:!0,rel:!0});var n4=i(ki);Iw=s(n4,"tf.keras.Model"),n4.forEach(t),Dw=s(If,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),If.forEach(t),Sw=m(ro),w(Os.$$.fragment,ro),Ww=m(ro),Jt=r(ro,"DIV",{class:!0});var wa=i(Jt);w(vi.$$.fragment,wa),Bw=m(wa),pn=r(wa,"P",{});var uc=i(pn);Uw=s(uc,"The "),Sd=r(uc,"A",{href:!0});var s4=i(Sd);Hw=s(s4,"TFRobertaForMultipleChoice"),s4.forEach(t),Qw=s(uc," forward method, overrides the "),Wp=r(uc,"CODE",{});var a4=i(Wp);Vw=s(a4,"__call__"),a4.forEach(t),Kw=s(uc," special method."),uc.forEach(t),Jw=m(wa),w(Ns.$$.fragment,wa),Gw=m(wa),w(Is.$$.fragment,wa),wa.forEach(t),ro.forEach(t),zu=m(o),hn=r(o,"H2",{class:!0});var Df=i(hn);Ds=r(Df,"A",{id:!0,class:!0,href:!0});var r4=i(Ds);Bp=r(r4,"SPAN",{});var i4=i(Bp);w(yi.$$.fragment,i4),i4.forEach(t),r4.forEach(t),Xw=m(Df),Up=r(Df,"SPAN",{});var l4=i(Up);Yw=s(l4,"TFRobertaForTokenClassification"),l4.forEach(t),Df.forEach(t),Cu=m(o),gt=r(o,"DIV",{class:!0});var io=i(gt);w(wi.$$.fragment,io),Zw=m(io),Hp=r(io,"P",{});var d4=i(Hp);e2=s(d4,`RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),d4.forEach(t),t2=m(io),Ti=r(io,"P",{});var Sf=i(Ti);o2=s(Sf,"This model inherits from "),Wd=r(Sf,"A",{href:!0});var c4=i(Wd);n2=s(c4,"TFPreTrainedModel"),c4.forEach(t),s2=s(Sf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sf.forEach(t),a2=m(io),$i=r(io,"P",{});var Wf=i($i);r2=s(Wf,"This model is also a "),Fi=r(Wf,"A",{href:!0,rel:!0});var p4=i(Fi);i2=s(p4,"tf.keras.Model"),p4.forEach(t),l2=s(Wf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wf.forEach(t),d2=m(io),w(Ss.$$.fragment,io),c2=m(io),jt=r(io,"DIV",{class:!0});var qo=i(jt);w(xi.$$.fragment,qo),p2=m(qo),mn=r(qo,"P",{});var fc=i(mn);h2=s(fc,"The "),Bd=r(fc,"A",{href:!0});var h4=i(Bd);m2=s(h4,"TFRobertaForTokenClassification"),h4.forEach(t),u2=s(fc," forward method, overrides the "),Qp=r(fc,"CODE",{});var m4=i(Qp);f2=s(m4,"__call__"),m4.forEach(t),g2=s(fc," special method."),fc.forEach(t),_2=m(qo),w(Ws.$$.fragment,qo),b2=m(qo),w(Bs.$$.fragment,qo),k2=m(qo),w(Us.$$.fragment,qo),qo.forEach(t),io.forEach(t),ju=m(o),un=r(o,"H2",{class:!0});var Bf=i(un);Hs=r(Bf,"A",{id:!0,class:!0,href:!0});var u4=i(Hs);Vp=r(u4,"SPAN",{});var f4=i(Vp);w(Ri.$$.fragment,f4),f4.forEach(t),u4.forEach(t),v2=m(Bf),Kp=r(Bf,"SPAN",{});var g4=i(Kp);y2=s(g4,"TFRobertaForQuestionAnswering"),g4.forEach(t),Bf.forEach(t),qu=m(o),_t=r(o,"DIV",{class:!0});var lo=i(_t);w(Ei.$$.fragment,lo),w2=m(lo),fn=r(lo,"P",{});var gc=i(fn);T2=s(gc,`RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Jp=r(gc,"CODE",{});var _4=i(Jp);$2=s(_4,"span start logits"),_4.forEach(t),F2=s(gc," and "),Gp=r(gc,"CODE",{});var b4=i(Gp);x2=s(b4,"span end logits"),b4.forEach(t),R2=s(gc,")."),gc.forEach(t),E2=m(lo),Mi=r(lo,"P",{});var Uf=i(Mi);M2=s(Uf,"This model inherits from "),Ud=r(Uf,"A",{href:!0});var k4=i(Ud);z2=s(k4,"TFPreTrainedModel"),k4.forEach(t),C2=s(Uf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uf.forEach(t),j2=m(lo),zi=r(lo,"P",{});var Hf=i(zi);q2=s(Hf,"This model is also a "),Ci=r(Hf,"A",{href:!0,rel:!0});var v4=i(Ci);P2=s(v4,"tf.keras.Model"),v4.forEach(t),L2=s(Hf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hf.forEach(t),A2=m(lo),w(Qs.$$.fragment,lo),O2=m(lo),qt=r(lo,"DIV",{class:!0});var Po=i(qt);w(ji.$$.fragment,Po),N2=m(Po),gn=r(Po,"P",{});var _c=i(gn);I2=s(_c,"The "),Hd=r(_c,"A",{href:!0});var y4=i(Hd);D2=s(y4,"TFRobertaForQuestionAnswering"),y4.forEach(t),S2=s(_c," forward method, overrides the "),Xp=r(_c,"CODE",{});var w4=i(Xp);W2=s(w4,"__call__"),w4.forEach(t),B2=s(_c," special method."),_c.forEach(t),U2=m(Po),w(Vs.$$.fragment,Po),H2=m(Po),w(Ks.$$.fragment,Po),Q2=m(Po),w(Js.$$.fragment,Po),Po.forEach(t),lo.forEach(t),Pu=m(o),_n=r(o,"H2",{class:!0});var Qf=i(_n);Gs=r(Qf,"A",{id:!0,class:!0,href:!0});var T4=i(Gs);Yp=r(T4,"SPAN",{});var $4=i(Yp);w(qi.$$.fragment,$4),$4.forEach(t),T4.forEach(t),V2=m(Qf),Zp=r(Qf,"SPAN",{});var F4=i(Zp);K2=s(F4,"FlaxRobertaModel"),F4.forEach(t),Qf.forEach(t),Lu=m(o),nt=r(o,"DIV",{class:!0});var At=i(nt);w(Pi.$$.fragment,At),J2=m(At),eh=r(At,"P",{});var x4=i(eh);G2=s(x4,"The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),x4.forEach(t),X2=m(At),Li=r(At,"P",{});var Vf=i(Li);Y2=s(Vf,"This model inherits from "),Qd=r(Vf,"A",{href:!0});var R4=i(Qd);Z2=s(R4,"FlaxPreTrainedModel"),R4.forEach(t),eT=s(Vf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Vf.forEach(t),tT=m(At),Ai=r(At,"P",{});var Kf=i(Ai);oT=s(Kf,"This model is also a Flax Linen "),Oi=r(Kf,"A",{href:!0,rel:!0});var E4=i(Oi);nT=s(E4,"flax.linen.Module"),E4.forEach(t),sT=s(Kf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Kf.forEach(t),aT=m(At),th=r(At,"P",{});var M4=i(th);rT=s(M4,"Finally, this model supports inherent JAX features such as:"),M4.forEach(t),iT=m(At),po=r(At,"UL",{});var Ta=i(po);oh=r(Ta,"LI",{});var z4=i(oh);Ni=r(z4,"A",{href:!0,rel:!0});var C4=i(Ni);lT=s(C4,"Just-In-Time (JIT) compilation"),C4.forEach(t),z4.forEach(t),dT=m(Ta),nh=r(Ta,"LI",{});var j4=i(nh);Ii=r(j4,"A",{href:!0,rel:!0});var q4=i(Ii);cT=s(q4,"Automatic Differentiation"),q4.forEach(t),j4.forEach(t),pT=m(Ta),sh=r(Ta,"LI",{});var P4=i(sh);Di=r(P4,"A",{href:!0,rel:!0});var L4=i(Di);hT=s(L4,"Vectorization"),L4.forEach(t),P4.forEach(t),mT=m(Ta),ah=r(Ta,"LI",{});var A4=i(ah);Si=r(A4,"A",{href:!0,rel:!0});var O4=i(Si);uT=s(O4,"Parallelization"),O4.forEach(t),A4.forEach(t),Ta.forEach(t),fT=m(At),Gt=r(At,"DIV",{class:!0});var $a=i(Gt);w(Wi.$$.fragment,$a),gT=m($a),bn=r($a,"P",{});var bc=i(bn);_T=s(bc,"The "),rh=r(bc,"CODE",{});var N4=i(rh);bT=s(N4,"FlaxRobertaPreTrainedModel"),N4.forEach(t),kT=s(bc," forward method, overrides the "),ih=r(bc,"CODE",{});var I4=i(ih);vT=s(I4,"__call__"),I4.forEach(t),yT=s(bc," special method."),bc.forEach(t),wT=m($a),w(Xs.$$.fragment,$a),TT=m($a),w(Ys.$$.fragment,$a),$a.forEach(t),At.forEach(t),Au=m(o),kn=r(o,"H2",{class:!0});var Jf=i(kn);Zs=r(Jf,"A",{id:!0,class:!0,href:!0});var D4=i(Zs);lh=r(D4,"SPAN",{});var S4=i(lh);w(Bi.$$.fragment,S4),S4.forEach(t),D4.forEach(t),$T=m(Jf),dh=r(Jf,"SPAN",{});var W4=i(dh);FT=s(W4,"FlaxRobertaForCausalLM"),W4.forEach(t),Jf.forEach(t),Ou=m(o),st=r(o,"DIV",{class:!0});var Ot=i(st);w(Ui.$$.fragment,Ot),xT=m(Ot),ch=r(Ot,"P",{});var B4=i(ch);RT=s(B4,`Roberta Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),B4.forEach(t),ET=m(Ot),Hi=r(Ot,"P",{});var Gf=i(Hi);MT=s(Gf,"This model inherits from "),Vd=r(Gf,"A",{href:!0});var U4=i(Vd);zT=s(U4,"FlaxPreTrainedModel"),U4.forEach(t),CT=s(Gf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Gf.forEach(t),jT=m(Ot),Qi=r(Ot,"P",{});var Xf=i(Qi);qT=s(Xf,"This model is also a Flax Linen "),Vi=r(Xf,"A",{href:!0,rel:!0});var H4=i(Vi);PT=s(H4,"flax.linen.Module"),H4.forEach(t),LT=s(Xf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Xf.forEach(t),AT=m(Ot),ph=r(Ot,"P",{});var Q4=i(ph);OT=s(Q4,"Finally, this model supports inherent JAX features such as:"),Q4.forEach(t),NT=m(Ot),ho=r(Ot,"UL",{});var Fa=i(ho);hh=r(Fa,"LI",{});var V4=i(hh);Ki=r(V4,"A",{href:!0,rel:!0});var K4=i(Ki);IT=s(K4,"Just-In-Time (JIT) compilation"),K4.forEach(t),V4.forEach(t),DT=m(Fa),mh=r(Fa,"LI",{});var J4=i(mh);Ji=r(J4,"A",{href:!0,rel:!0});var G4=i(Ji);ST=s(G4,"Automatic Differentiation"),G4.forEach(t),J4.forEach(t),WT=m(Fa),uh=r(Fa,"LI",{});var X4=i(uh);Gi=r(X4,"A",{href:!0,rel:!0});var Y4=i(Gi);BT=s(Y4,"Vectorization"),Y4.forEach(t),X4.forEach(t),UT=m(Fa),fh=r(Fa,"LI",{});var Z4=i(fh);Xi=r(Z4,"A",{href:!0,rel:!0});var eR=i(Xi);HT=s(eR,"Parallelization"),eR.forEach(t),Z4.forEach(t),Fa.forEach(t),QT=m(Ot),Xt=r(Ot,"DIV",{class:!0});var xa=i(Xt);w(Yi.$$.fragment,xa),VT=m(xa),vn=r(xa,"P",{});var kc=i(vn);KT=s(kc,"The "),gh=r(kc,"CODE",{});var tR=i(gh);JT=s(tR,"FlaxRobertaPreTrainedModel"),tR.forEach(t),GT=s(kc," forward method, overrides the "),_h=r(kc,"CODE",{});var oR=i(_h);XT=s(oR,"__call__"),oR.forEach(t),YT=s(kc," special method."),kc.forEach(t),ZT=m(xa),w(ea.$$.fragment,xa),e$=m(xa),w(ta.$$.fragment,xa),xa.forEach(t),Ot.forEach(t),Nu=m(o),yn=r(o,"H2",{class:!0});var Yf=i(yn);oa=r(Yf,"A",{id:!0,class:!0,href:!0});var nR=i(oa);bh=r(nR,"SPAN",{});var sR=i(bh);w(Zi.$$.fragment,sR),sR.forEach(t),nR.forEach(t),t$=m(Yf),kh=r(Yf,"SPAN",{});var aR=i(kh);o$=s(aR,"FlaxRobertaForMaskedLM"),aR.forEach(t),Yf.forEach(t),Iu=m(o),at=r(o,"DIV",{class:!0});var Nt=i(at);w(el.$$.fragment,Nt),n$=m(Nt),tl=r(Nt,"P",{});var Zf=i(tl);s$=s(Zf,"RoBERTa Model with a "),vh=r(Zf,"CODE",{});var rR=i(vh);a$=s(rR,"language modeling"),rR.forEach(t),r$=s(Zf," head on top."),Zf.forEach(t),i$=m(Nt),ol=r(Nt,"P",{});var eg=i(ol);l$=s(eg,"This model inherits from "),Kd=r(eg,"A",{href:!0});var iR=i(Kd);d$=s(iR,"FlaxPreTrainedModel"),iR.forEach(t),c$=s(eg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),eg.forEach(t),p$=m(Nt),nl=r(Nt,"P",{});var tg=i(nl);h$=s(tg,"This model is also a Flax Linen "),sl=r(tg,"A",{href:!0,rel:!0});var lR=i(sl);m$=s(lR,"flax.linen.Module"),lR.forEach(t),u$=s(tg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),tg.forEach(t),f$=m(Nt),yh=r(Nt,"P",{});var dR=i(yh);g$=s(dR,"Finally, this model supports inherent JAX features such as:"),dR.forEach(t),_$=m(Nt),mo=r(Nt,"UL",{});var Ra=i(mo);wh=r(Ra,"LI",{});var cR=i(wh);al=r(cR,"A",{href:!0,rel:!0});var pR=i(al);b$=s(pR,"Just-In-Time (JIT) compilation"),pR.forEach(t),cR.forEach(t),k$=m(Ra),Th=r(Ra,"LI",{});var hR=i(Th);rl=r(hR,"A",{href:!0,rel:!0});var mR=i(rl);v$=s(mR,"Automatic Differentiation"),mR.forEach(t),hR.forEach(t),y$=m(Ra),$h=r(Ra,"LI",{});var uR=i($h);il=r(uR,"A",{href:!0,rel:!0});var fR=i(il);w$=s(fR,"Vectorization"),fR.forEach(t),uR.forEach(t),T$=m(Ra),Fh=r(Ra,"LI",{});var gR=i(Fh);ll=r(gR,"A",{href:!0,rel:!0});var _R=i(ll);$$=s(_R,"Parallelization"),_R.forEach(t),gR.forEach(t),Ra.forEach(t),F$=m(Nt),Yt=r(Nt,"DIV",{class:!0});var Ea=i(Yt);w(dl.$$.fragment,Ea),x$=m(Ea),wn=r(Ea,"P",{});var vc=i(wn);R$=s(vc,"The "),xh=r(vc,"CODE",{});var bR=i(xh);E$=s(bR,"FlaxRobertaPreTrainedModel"),bR.forEach(t),M$=s(vc," forward method, overrides the "),Rh=r(vc,"CODE",{});var kR=i(Rh);z$=s(kR,"__call__"),kR.forEach(t),C$=s(vc," special method."),vc.forEach(t),j$=m(Ea),w(na.$$.fragment,Ea),q$=m(Ea),w(sa.$$.fragment,Ea),Ea.forEach(t),Nt.forEach(t),Du=m(o),Tn=r(o,"H2",{class:!0});var og=i(Tn);aa=r(og,"A",{id:!0,class:!0,href:!0});var vR=i(aa);Eh=r(vR,"SPAN",{});var yR=i(Eh);w(cl.$$.fragment,yR),yR.forEach(t),vR.forEach(t),P$=m(og),Mh=r(og,"SPAN",{});var wR=i(Mh);L$=s(wR,"FlaxRobertaForSequenceClassification"),wR.forEach(t),og.forEach(t),Su=m(o),rt=r(o,"DIV",{class:!0});var It=i(rt);w(pl.$$.fragment,It),A$=m(It),zh=r(It,"P",{});var TR=i(zh);O$=s(TR,`Roberta Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),TR.forEach(t),N$=m(It),hl=r(It,"P",{});var ng=i(hl);I$=s(ng,"This model inherits from "),Jd=r(ng,"A",{href:!0});var $R=i(Jd);D$=s($R,"FlaxPreTrainedModel"),$R.forEach(t),S$=s(ng,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ng.forEach(t),W$=m(It),ml=r(It,"P",{});var sg=i(ml);B$=s(sg,"This model is also a Flax Linen "),ul=r(sg,"A",{href:!0,rel:!0});var FR=i(ul);U$=s(FR,"flax.linen.Module"),FR.forEach(t),H$=s(sg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),sg.forEach(t),Q$=m(It),Ch=r(It,"P",{});var xR=i(Ch);V$=s(xR,"Finally, this model supports inherent JAX features such as:"),xR.forEach(t),K$=m(It),uo=r(It,"UL",{});var Ma=i(uo);jh=r(Ma,"LI",{});var RR=i(jh);fl=r(RR,"A",{href:!0,rel:!0});var ER=i(fl);J$=s(ER,"Just-In-Time (JIT) compilation"),ER.forEach(t),RR.forEach(t),G$=m(Ma),qh=r(Ma,"LI",{});var MR=i(qh);gl=r(MR,"A",{href:!0,rel:!0});var zR=i(gl);X$=s(zR,"Automatic Differentiation"),zR.forEach(t),MR.forEach(t),Y$=m(Ma),Ph=r(Ma,"LI",{});var CR=i(Ph);_l=r(CR,"A",{href:!0,rel:!0});var jR=i(_l);Z$=s(jR,"Vectorization"),jR.forEach(t),CR.forEach(t),e1=m(Ma),Lh=r(Ma,"LI",{});var qR=i(Lh);bl=r(qR,"A",{href:!0,rel:!0});var PR=i(bl);t1=s(PR,"Parallelization"),PR.forEach(t),qR.forEach(t),Ma.forEach(t),o1=m(It),Zt=r(It,"DIV",{class:!0});var za=i(Zt);w(kl.$$.fragment,za),n1=m(za),$n=r(za,"P",{});var yc=i($n);s1=s(yc,"The "),Ah=r(yc,"CODE",{});var LR=i(Ah);a1=s(LR,"FlaxRobertaPreTrainedModel"),LR.forEach(t),r1=s(yc," forward method, overrides the "),Oh=r(yc,"CODE",{});var AR=i(Oh);i1=s(AR,"__call__"),AR.forEach(t),l1=s(yc," special method."),yc.forEach(t),d1=m(za),w(ra.$$.fragment,za),c1=m(za),w(ia.$$.fragment,za),za.forEach(t),It.forEach(t),Wu=m(o),Fn=r(o,"H2",{class:!0});var ag=i(Fn);la=r(ag,"A",{id:!0,class:!0,href:!0});var OR=i(la);Nh=r(OR,"SPAN",{});var NR=i(Nh);w(vl.$$.fragment,NR),NR.forEach(t),OR.forEach(t),p1=m(ag),Ih=r(ag,"SPAN",{});var IR=i(Ih);h1=s(IR,"FlaxRobertaForMultipleChoice"),IR.forEach(t),ag.forEach(t),Bu=m(o),it=r(o,"DIV",{class:!0});var Dt=i(it);w(yl.$$.fragment,Dt),m1=m(Dt),Dh=r(Dt,"P",{});var DR=i(Dh);u1=s(DR,`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),DR.forEach(t),f1=m(Dt),wl=r(Dt,"P",{});var rg=i(wl);g1=s(rg,"This model inherits from "),Gd=r(rg,"A",{href:!0});var SR=i(Gd);_1=s(SR,"FlaxPreTrainedModel"),SR.forEach(t),b1=s(rg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),rg.forEach(t),k1=m(Dt),Tl=r(Dt,"P",{});var ig=i(Tl);v1=s(ig,"This model is also a Flax Linen "),$l=r(ig,"A",{href:!0,rel:!0});var WR=i($l);y1=s(WR,"flax.linen.Module"),WR.forEach(t),w1=s(ig,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ig.forEach(t),T1=m(Dt),Sh=r(Dt,"P",{});var BR=i(Sh);$1=s(BR,"Finally, this model supports inherent JAX features such as:"),BR.forEach(t),F1=m(Dt),fo=r(Dt,"UL",{});var Ca=i(fo);Wh=r(Ca,"LI",{});var UR=i(Wh);Fl=r(UR,"A",{href:!0,rel:!0});var HR=i(Fl);x1=s(HR,"Just-In-Time (JIT) compilation"),HR.forEach(t),UR.forEach(t),R1=m(Ca),Bh=r(Ca,"LI",{});var QR=i(Bh);xl=r(QR,"A",{href:!0,rel:!0});var VR=i(xl);E1=s(VR,"Automatic Differentiation"),VR.forEach(t),QR.forEach(t),M1=m(Ca),Uh=r(Ca,"LI",{});var KR=i(Uh);Rl=r(KR,"A",{href:!0,rel:!0});var JR=i(Rl);z1=s(JR,"Vectorization"),JR.forEach(t),KR.forEach(t),C1=m(Ca),Hh=r(Ca,"LI",{});var GR=i(Hh);El=r(GR,"A",{href:!0,rel:!0});var XR=i(El);j1=s(XR,"Parallelization"),XR.forEach(t),GR.forEach(t),Ca.forEach(t),q1=m(Dt),eo=r(Dt,"DIV",{class:!0});var ja=i(eo);w(Ml.$$.fragment,ja),P1=m(ja),xn=r(ja,"P",{});var wc=i(xn);L1=s(wc,"The "),Qh=r(wc,"CODE",{});var YR=i(Qh);A1=s(YR,"FlaxRobertaPreTrainedModel"),YR.forEach(t),O1=s(wc," forward method, overrides the "),Vh=r(wc,"CODE",{});var ZR=i(Vh);N1=s(ZR,"__call__"),ZR.forEach(t),I1=s(wc," special method."),wc.forEach(t),D1=m(ja),w(da.$$.fragment,ja),S1=m(ja),w(ca.$$.fragment,ja),ja.forEach(t),Dt.forEach(t),Uu=m(o),Rn=r(o,"H2",{class:!0});var lg=i(Rn);pa=r(lg,"A",{id:!0,class:!0,href:!0});var eE=i(pa);Kh=r(eE,"SPAN",{});var tE=i(Kh);w(zl.$$.fragment,tE),tE.forEach(t),eE.forEach(t),W1=m(lg),Jh=r(lg,"SPAN",{});var oE=i(Jh);B1=s(oE,"FlaxRobertaForTokenClassification"),oE.forEach(t),lg.forEach(t),Hu=m(o),lt=r(o,"DIV",{class:!0});var St=i(lt);w(Cl.$$.fragment,St),U1=m(St),Gh=r(St,"P",{});var nE=i(Gh);H1=s(nE,`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),nE.forEach(t),Q1=m(St),jl=r(St,"P",{});var dg=i(jl);V1=s(dg,"This model inherits from "),Xd=r(dg,"A",{href:!0});var sE=i(Xd);K1=s(sE,"FlaxPreTrainedModel"),sE.forEach(t),J1=s(dg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),dg.forEach(t),G1=m(St),ql=r(St,"P",{});var cg=i(ql);X1=s(cg,"This model is also a Flax Linen "),Pl=r(cg,"A",{href:!0,rel:!0});var aE=i(Pl);Y1=s(aE,"flax.linen.Module"),aE.forEach(t),Z1=s(cg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),cg.forEach(t),e0=m(St),Xh=r(St,"P",{});var rE=i(Xh);t0=s(rE,"Finally, this model supports inherent JAX features such as:"),rE.forEach(t),o0=m(St),go=r(St,"UL",{});var qa=i(go);Yh=r(qa,"LI",{});var iE=i(Yh);Ll=r(iE,"A",{href:!0,rel:!0});var lE=i(Ll);n0=s(lE,"Just-In-Time (JIT) compilation"),lE.forEach(t),iE.forEach(t),s0=m(qa),Zh=r(qa,"LI",{});var dE=i(Zh);Al=r(dE,"A",{href:!0,rel:!0});var cE=i(Al);a0=s(cE,"Automatic Differentiation"),cE.forEach(t),dE.forEach(t),r0=m(qa),em=r(qa,"LI",{});var pE=i(em);Ol=r(pE,"A",{href:!0,rel:!0});var hE=i(Ol);i0=s(hE,"Vectorization"),hE.forEach(t),pE.forEach(t),l0=m(qa),tm=r(qa,"LI",{});var mE=i(tm);Nl=r(mE,"A",{href:!0,rel:!0});var uE=i(Nl);d0=s(uE,"Parallelization"),uE.forEach(t),mE.forEach(t),qa.forEach(t),c0=m(St),to=r(St,"DIV",{class:!0});var Pa=i(to);w(Il.$$.fragment,Pa),p0=m(Pa),En=r(Pa,"P",{});var Tc=i(En);h0=s(Tc,"The "),om=r(Tc,"CODE",{});var fE=i(om);m0=s(fE,"FlaxRobertaPreTrainedModel"),fE.forEach(t),u0=s(Tc," forward method, overrides the "),nm=r(Tc,"CODE",{});var gE=i(nm);f0=s(gE,"__call__"),gE.forEach(t),g0=s(Tc," special method."),Tc.forEach(t),_0=m(Pa),w(ha.$$.fragment,Pa),b0=m(Pa),w(ma.$$.fragment,Pa),Pa.forEach(t),St.forEach(t),Qu=m(o),Mn=r(o,"H2",{class:!0});var pg=i(Mn);ua=r(pg,"A",{id:!0,class:!0,href:!0});var _E=i(ua);sm=r(_E,"SPAN",{});var bE=i(sm);w(Dl.$$.fragment,bE),bE.forEach(t),_E.forEach(t),k0=m(pg),am=r(pg,"SPAN",{});var kE=i(am);v0=s(kE,"FlaxRobertaForQuestionAnswering"),kE.forEach(t),pg.forEach(t),Vu=m(o),dt=r(o,"DIV",{class:!0});var Wt=i(dt);w(Sl.$$.fragment,Wt),y0=m(Wt),zn=r(Wt,"P",{});var $c=i(zn);w0=s($c,`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),rm=r($c,"CODE",{});var vE=i(rm);T0=s(vE,"span start logits"),vE.forEach(t),$0=s($c," and "),im=r($c,"CODE",{});var yE=i(im);F0=s(yE,"span end logits"),yE.forEach(t),x0=s($c,")."),$c.forEach(t),R0=m(Wt),Wl=r(Wt,"P",{});var hg=i(Wl);E0=s(hg,"This model inherits from "),Yd=r(hg,"A",{href:!0});var wE=i(Yd);M0=s(wE,"FlaxPreTrainedModel"),wE.forEach(t),z0=s(hg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),hg.forEach(t),C0=m(Wt),Bl=r(Wt,"P",{});var mg=i(Bl);j0=s(mg,"This model is also a Flax Linen "),Ul=r(mg,"A",{href:!0,rel:!0});var TE=i(Ul);q0=s(TE,"flax.linen.Module"),TE.forEach(t),P0=s(mg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),mg.forEach(t),L0=m(Wt),lm=r(Wt,"P",{});var $E=i(lm);A0=s($E,"Finally, this model supports inherent JAX features such as:"),$E.forEach(t),O0=m(Wt),_o=r(Wt,"UL",{});var La=i(_o);dm=r(La,"LI",{});var FE=i(dm);Hl=r(FE,"A",{href:!0,rel:!0});var xE=i(Hl);N0=s(xE,"Just-In-Time (JIT) compilation"),xE.forEach(t),FE.forEach(t),I0=m(La),cm=r(La,"LI",{});var RE=i(cm);Ql=r(RE,"A",{href:!0,rel:!0});var EE=i(Ql);D0=s(EE,"Automatic Differentiation"),EE.forEach(t),RE.forEach(t),S0=m(La),pm=r(La,"LI",{});var ME=i(pm);Vl=r(ME,"A",{href:!0,rel:!0});var zE=i(Vl);W0=s(zE,"Vectorization"),zE.forEach(t),ME.forEach(t),B0=m(La),hm=r(La,"LI",{});var CE=i(hm);Kl=r(CE,"A",{href:!0,rel:!0});var jE=i(Kl);U0=s(jE,"Parallelization"),jE.forEach(t),CE.forEach(t),La.forEach(t),H0=m(Wt),oo=r(Wt,"DIV",{class:!0});var Aa=i(oo);w(Jl.$$.fragment,Aa),Q0=m(Aa),Cn=r(Aa,"P",{});var Fc=i(Cn);V0=s(Fc,"The "),mm=r(Fc,"CODE",{});var qE=i(mm);K0=s(qE,"FlaxRobertaPreTrainedModel"),qE.forEach(t),J0=s(Fc," forward method, overrides the "),um=r(Fc,"CODE",{});var PE=i(um);G0=s(PE,"__call__"),PE.forEach(t),X0=s(Fc," special method."),Fc.forEach(t),Y0=m(Aa),w(fa.$$.fragment,Aa),Z0=m(Aa),w(ga.$$.fragment,Aa),Aa.forEach(t),Wt.forEach(t),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(GM)),f(u,"id","roberta"),f(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(u,"href","#roberta"),f(c,"class","relative group"),f(te,"id","overview"),f(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(te,"href","#overview"),f(N,"class","relative group"),f(pe,"href","https://arxiv.org/abs/1907.11692"),f(pe,"rel","nofollow"),f(q,"href","/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertModel"),f(He,"href","camembert"),f(Se,"href","https://huggingface.co/julien-c"),f(Se,"rel","nofollow"),f(We,"href","https://github.com/pytorch/fairseq/tree/master/examples/roberta"),f(We,"rel","nofollow"),f(B,"id","transformers.RobertaConfig"),f(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(B,"href","#transformers.RobertaConfig"),f(Oe,"class","relative group"),f(id,"href","/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaModel"),f(ld,"href","/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.TFRobertaModel"),f(Na,"href","https://huggingface.co/roberta-base"),f(Na,"rel","nofollow"),f(dd,"href","/docs/transformers/v4.22.0/en/main_classes/configuration#transformers.PretrainedConfig"),f(cd,"href","/docs/transformers/v4.22.0/en/main_classes/configuration#transformers.PretrainedConfig"),f(pd,"href","/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaConfig"),f(hd,"href","/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertConfig"),f(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(On,"id","transformers.RobertaTokenizer"),f(On,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(On,"href","#transformers.RobertaTokenizer"),f(Oo,"class","relative group"),f(md,"href","/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Dn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Sn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(gd,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Wn,"id","transformers.RobertaTokenizerFast"),f(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Wn,"href","#transformers.RobertaTokenizerFast"),f(No,"class","relative group"),f(_d,"href","/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),f(bd,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Hn,"id","transformers.RobertaModel"),f(Hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Hn,"href","#transformers.RobertaModel"),f(Io,"class","relative group"),f(kd,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),f(ar,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ar,"rel","nofollow"),f(ir,"href","https://arxiv.org/abs/1706.03762"),f(ir,"rel","nofollow"),f(vd,"href","/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaModel"),f(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Jn,"id","transformers.RobertaForCausalLM"),f(Jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Jn,"href","#transformers.RobertaForCausalLM"),f(So,"class","relative group"),f(yd,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),f(ur,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ur,"rel","nofollow"),f(wd,"href","/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaForCausalLM"),f(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Yn,"id","transformers.RobertaForMaskedLM"),f(Yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Yn,"href","#transformers.RobertaForMaskedLM"),f(Bo,"class","relative group"),f(Td,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),f(yr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(yr,"rel","nofollow"),f($d,"href","/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaForMaskedLM"),f(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(os,"id","transformers.RobertaForSequenceClassification"),f(os,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(os,"href","#transformers.RobertaForSequenceClassification"),f(Ho,"class","relative group"),f(Fd,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),f(Rr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Rr,"rel","nofollow"),f(xd,"href","/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaForSequenceClassification"),f(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ls,"id","transformers.RobertaForMultipleChoice"),f(ls,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ls,"href","#transformers.RobertaForMultipleChoice"),f(Vo,"class","relative group"),f(Rd,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),f(qr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(qr,"rel","nofollow"),f(Ed,"href","/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaForMultipleChoice"),f(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ps,"id","transformers.RobertaForTokenClassification"),f(ps,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ps,"href","#transformers.RobertaForTokenClassification"),f(Jo,"class","relative group"),f(Md,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),f(Ir,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ir,"rel","nofollow"),f(zd,"href","/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaForTokenClassification"),f(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(fs,"id","transformers.RobertaForQuestionAnswering"),f(fs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(fs,"href","#transformers.RobertaForQuestionAnswering"),f(Xo,"class","relative group"),f(Cd,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),f(Hr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Hr,"rel","nofollow"),f(jd,"href","/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.RobertaForQuestionAnswering"),f(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ks,"id","transformers.TFRobertaModel"),f(ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ks,"href","#transformers.TFRobertaModel"),f(en,"class","relative group"),f(qd,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),f(Xr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Xr,"rel","nofollow"),f(Pd,"href","/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.TFRobertaModel"),f(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ts,"id","transformers.TFRobertaForCausalLM"),f(Ts,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ts,"href","#transformers.TFRobertaForCausalLM"),f(on,"class","relative group"),f(Ld,"href","/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.TFRobertaForCausalLM"),f(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(nn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xs,"id","transformers.TFRobertaForMaskedLM"),f(xs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(xs,"href","#transformers.TFRobertaForMaskedLM"),f(an,"class","relative group"),f(Ad,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),f(ii,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ii,"rel","nofollow"),f(Od,"href","/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.TFRobertaForMaskedLM"),f(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Cs,"id","transformers.TFRobertaForSequenceClassification"),f(Cs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Cs,"href","#transformers.TFRobertaForSequenceClassification"),f(ln,"class","relative group"),f(Nd,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),f(mi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(mi,"rel","nofollow"),f(Id,"href","/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.TFRobertaForSequenceClassification"),f(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(As,"id","transformers.TFRobertaForMultipleChoice"),f(As,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(As,"href","#transformers.TFRobertaForMultipleChoice"),f(cn,"class","relative group"),f(Dd,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),f(ki,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ki,"rel","nofollow"),f(Sd,"href","/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.TFRobertaForMultipleChoice"),f(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ds,"id","transformers.TFRobertaForTokenClassification"),f(Ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ds,"href","#transformers.TFRobertaForTokenClassification"),f(hn,"class","relative group"),f(Wd,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),f(Fi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Fi,"rel","nofollow"),f(Bd,"href","/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.TFRobertaForTokenClassification"),f(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Hs,"id","transformers.TFRobertaForQuestionAnswering"),f(Hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Hs,"href","#transformers.TFRobertaForQuestionAnswering"),f(un,"class","relative group"),f(Ud,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),f(Ci,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Ci,"rel","nofollow"),f(Hd,"href","/docs/transformers/v4.22.0/en/model_doc/roberta#transformers.TFRobertaForQuestionAnswering"),f(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Gs,"id","transformers.FlaxRobertaModel"),f(Gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Gs,"href","#transformers.FlaxRobertaModel"),f(_n,"class","relative group"),f(Qd,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Oi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(Oi,"rel","nofollow"),f(Ni,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Ni,"rel","nofollow"),f(Ii,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Ii,"rel","nofollow"),f(Di,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Di,"rel","nofollow"),f(Si,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Si,"rel","nofollow"),f(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Zs,"id","transformers.FlaxRobertaForCausalLM"),f(Zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Zs,"href","#transformers.FlaxRobertaForCausalLM"),f(kn,"class","relative group"),f(Vd,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Vi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(Vi,"rel","nofollow"),f(Ki,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Ki,"rel","nofollow"),f(Ji,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Ji,"rel","nofollow"),f(Gi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Gi,"rel","nofollow"),f(Xi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Xi,"rel","nofollow"),f(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(oa,"id","transformers.FlaxRobertaForMaskedLM"),f(oa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(oa,"href","#transformers.FlaxRobertaForMaskedLM"),f(yn,"class","relative group"),f(Kd,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(sl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(sl,"rel","nofollow"),f(al,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(al,"rel","nofollow"),f(rl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(rl,"rel","nofollow"),f(il,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(il,"rel","nofollow"),f(ll,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(ll,"rel","nofollow"),f(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(aa,"id","transformers.FlaxRobertaForSequenceClassification"),f(aa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(aa,"href","#transformers.FlaxRobertaForSequenceClassification"),f(Tn,"class","relative group"),f(Jd,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(ul,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(ul,"rel","nofollow"),f(fl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(fl,"rel","nofollow"),f(gl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(gl,"rel","nofollow"),f(_l,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(_l,"rel","nofollow"),f(bl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(bl,"rel","nofollow"),f(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(la,"id","transformers.FlaxRobertaForMultipleChoice"),f(la,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(la,"href","#transformers.FlaxRobertaForMultipleChoice"),f(Fn,"class","relative group"),f(Gd,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),f($l,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f($l,"rel","nofollow"),f(Fl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Fl,"rel","nofollow"),f(xl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(xl,"rel","nofollow"),f(Rl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Rl,"rel","nofollow"),f(El,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(El,"rel","nofollow"),f(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pa,"id","transformers.FlaxRobertaForTokenClassification"),f(pa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(pa,"href","#transformers.FlaxRobertaForTokenClassification"),f(Rn,"class","relative group"),f(Xd,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Pl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(Pl,"rel","nofollow"),f(Ll,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Ll,"rel","nofollow"),f(Al,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Al,"rel","nofollow"),f(Ol,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Ol,"rel","nofollow"),f(Nl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Nl,"rel","nofollow"),f(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ua,"id","transformers.FlaxRobertaForQuestionAnswering"),f(ua,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ua,"href","#transformers.FlaxRobertaForQuestionAnswering"),f(Mn,"class","relative group"),f(Yd,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Ul,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(Ul,"rel","nofollow"),f(Hl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Hl,"rel","nofollow"),f(Ql,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Ql,"rel","nofollow"),f(Vl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Vl,"rel","nofollow"),f(Kl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Kl,"rel","nofollow"),f(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,b){e(document.head,d),k(o,g,b),k(o,c,b),e(c,u),e(u,_),T(l,_,null),e(c,p),e(c,E),e(E,le),k(o,Z,b),k(o,N,b),e(N,te),e(te,oe),T(M,oe,null),e(N,we),e(N,V),e(V,Te),k(o,ge,b),k(o,W,b),e(W,$e),e(W,pe),e(pe,K),e(W,Fe),k(o,_e,b),k(o,U,b),e(U,xe),k(o,be,b),k(o,H,b),e(H,Re),k(o,ke,b),k(o,ee,b),e(ee,j),e(j,P),k(o,ve,b),k(o,Q,b),e(Q,Ee),k(o,ye,b),k(o,I,b),e(I,he),e(he,Me),e(he,q),e(q,ze),e(he,J),e(I,Ce),e(I,me),e(me,G),e(I,je),e(I,ne),e(ne,D),e(ne,ue),e(ue,X),e(ne,qe),e(ne,se),e(se,L),e(ne,Pe),e(ne,A),e(A,Le),e(ne,Ae),e(I,v),e(I,z),e(z,He),e(He,de),e(z,Xe),k(o,Ke,b),k(o,C,b),e(C,Ye),e(C,Se),e(Se,Ze),e(C,et),e(C,We),e(We,S),e(C,Y),k(o,Je,b),k(o,Oe,b),e(Oe,B),e(B,Qe),T(Be,Qe,null),e(Oe,Ne),e(Oe,Ve),e(Ve,ce),k(o,Ge,b),k(o,vt,b),T(Oa,vt,null),e(vt,ug),e(vt,co),e(co,fg),e(co,id),e(id,gg),e(co,_g),e(co,ld),e(ld,bg),e(co,kg),e(co,Na),e(Na,vg),e(co,yg),e(vt,wg),e(vt,Lo),e(Lo,Tg),e(Lo,dd),e(dd,$g),e(Lo,Fg),e(Lo,cd),e(cd,xg),e(Lo,Rg),e(vt,Eg),e(vt,Ao),e(Ao,Mg),e(Ao,pd),e(pd,zg),e(Ao,Cg),e(Ao,hd),e(hd,jg),e(Ao,qg),e(vt,Pg),T(An,vt,null),k(o,ou,b),k(o,Oo,b),e(Oo,On),e(On,xc),T(Ia,xc,null),e(Oo,Lg),e(Oo,Rc),e(Rc,Ag),k(o,nu,b),k(o,Ie,b),T(Da,Ie,null),e(Ie,Og),e(Ie,Ec),e(Ec,Ng),e(Ie,Ig),e(Ie,Mc),e(Mc,Dg),e(Ie,Sg),T(Nn,Ie,null),e(Ie,Wg),e(Ie,Sa),e(Sa,Bg),e(Sa,zc),e(zc,Ug),e(Sa,Hg),e(Ie,Qg),T(In,Ie,null),e(Ie,Vg),e(Ie,Wa),e(Wa,Kg),e(Wa,md),e(md,Jg),e(Wa,Gg),e(Ie,Xg),e(Ie,yo),T(Ba,yo,null),e(yo,Yg),e(yo,Cc),e(Cc,Zg),e(yo,e_),e(yo,Ua),e(Ua,ud),e(ud,t_),e(ud,jc),e(jc,o_),e(Ua,n_),e(Ua,fd),e(fd,s_),e(fd,qc),e(qc,a_),e(Ie,r_),e(Ie,Dn),T(Ha,Dn,null),e(Dn,i_),e(Dn,Qa),e(Qa,l_),e(Qa,Pc),e(Pc,d_),e(Qa,c_),e(Ie,p_),e(Ie,Sn),T(Va,Sn,null),e(Sn,h_),e(Sn,Lc),e(Lc,m_),e(Ie,u_),e(Ie,gd),T(Ka,gd,null),k(o,su,b),k(o,No,b),e(No,Wn),e(Wn,Ac),T(Ja,Ac,null),e(No,f_),e(No,Oc),e(Oc,g_),k(o,au,b),k(o,tt,b),T(Ga,tt,null),e(tt,__),e(tt,Xa),e(Xa,b_),e(Xa,Nc),e(Nc,k_),e(Xa,v_),e(tt,y_),e(tt,Ic),e(Ic,w_),e(tt,T_),T(Bn,tt,null),e(tt,$_),e(tt,Ya),e(Ya,F_),e(Ya,Dc),e(Dc,x_),e(Ya,R_),e(tt,E_),T(Un,tt,null),e(tt,M_),e(tt,Za),e(Za,z_),e(Za,_d),e(_d,C_),e(Za,j_),e(tt,q_),e(tt,bd),T(er,bd,null),k(o,ru,b),k(o,Io,b),e(Io,Hn),e(Hn,Sc),T(tr,Sc,null),e(Io,P_),e(Io,Wc),e(Wc,L_),k(o,iu,b),k(o,ot,b),T(or,ot,null),e(ot,A_),e(ot,Bc),e(Bc,O_),e(ot,N_),e(ot,nr),e(nr,I_),e(nr,kd),e(kd,D_),e(nr,S_),e(ot,W_),e(ot,sr),e(sr,B_),e(sr,ar),e(ar,U_),e(sr,H_),e(ot,Q_),e(ot,rr),e(rr,V_),e(rr,Uc),e(Uc,K_),e(rr,J_),e(ot,G_),e(ot,pt),e(pt,X_),e(pt,Hc),e(Hc,Y_),e(pt,Z_),e(pt,Qc),e(Qc,eb),e(pt,tb),e(pt,Vc),e(Vc,ob),e(pt,nb),e(pt,Kc),e(Kc,sb),e(pt,ab),e(pt,Jc),e(Jc,rb),e(pt,ib),e(pt,Gc),e(Gc,lb),e(pt,db),e(ot,cb),e(ot,Qn),e(Qn,pb),e(Qn,Xc),e(Xc,hb),e(Qn,mb),e(Qn,ir),e(ir,ub),e(ot,fb),e(ot,Ut),T(lr,Ut,null),e(Ut,gb),e(Ut,Do),e(Do,_b),e(Do,vd),e(vd,bb),e(Do,kb),e(Do,Yc),e(Yc,vb),e(Do,yb),e(Ut,wb),T(Vn,Ut,null),e(Ut,Tb),T(Kn,Ut,null),k(o,lu,b),k(o,So,b),e(So,Jn),e(Jn,Zc),T(dr,Zc,null),e(So,$b),e(So,ep),e(ep,Fb),k(o,du,b),k(o,yt,b),T(cr,yt,null),e(yt,xb),e(yt,pr),e(pr,Rb),e(pr,tp),e(tp,Eb),e(pr,Mb),e(yt,zb),e(yt,hr),e(hr,Cb),e(hr,yd),e(yd,jb),e(hr,qb),e(yt,Pb),e(yt,mr),e(mr,Lb),e(mr,ur),e(ur,Ab),e(mr,Ob),e(yt,Nb),e(yt,Ht),T(fr,Ht,null),e(Ht,Ib),e(Ht,Wo),e(Wo,Db),e(Wo,wd),e(wd,Sb),e(Wo,Wb),e(Wo,op),e(op,Bb),e(Wo,Ub),e(Ht,Hb),T(Gn,Ht,null),e(Ht,Qb),T(Xn,Ht,null),k(o,cu,b),k(o,Bo,b),e(Bo,Yn),e(Yn,np),T(gr,np,null),e(Bo,Vb),e(Bo,sp),e(sp,Kb),k(o,pu,b),k(o,wt,b),T(_r,wt,null),e(wt,Jb),e(wt,br),e(br,Gb),e(br,ap),e(ap,Xb),e(br,Yb),e(wt,Zb),e(wt,kr),e(kr,ek),e(kr,Td),e(Td,tk),e(kr,ok),e(wt,nk),e(wt,vr),e(vr,sk),e(vr,yr),e(yr,ak),e(vr,rk),e(wt,ik),e(wt,Rt),T(wr,Rt,null),e(Rt,lk),e(Rt,Uo),e(Uo,dk),e(Uo,$d),e($d,ck),e(Uo,pk),e(Uo,rp),e(rp,hk),e(Uo,mk),e(Rt,uk),T(Zn,Rt,null),e(Rt,fk),T(es,Rt,null),e(Rt,gk),T(ts,Rt,null),k(o,hu,b),k(o,Ho,b),e(Ho,os),e(os,ip),T(Tr,ip,null),e(Ho,_k),e(Ho,lp),e(lp,bk),k(o,mu,b),k(o,Tt,b),T($r,Tt,null),e(Tt,kk),e(Tt,dp),e(dp,vk),e(Tt,yk),e(Tt,Fr),e(Fr,wk),e(Fr,Fd),e(Fd,Tk),e(Fr,$k),e(Tt,Fk),e(Tt,xr),e(xr,xk),e(xr,Rr),e(Rr,Rk),e(xr,Ek),e(Tt,Mk),e(Tt,ct),T(Er,ct,null),e(ct,zk),e(ct,Qo),e(Qo,Ck),e(Qo,xd),e(xd,jk),e(Qo,qk),e(Qo,cp),e(cp,Pk),e(Qo,Lk),e(ct,Ak),T(ns,ct,null),e(ct,Ok),T(ss,ct,null),e(ct,Nk),T(as,ct,null),e(ct,Ik),T(rs,ct,null),e(ct,Dk),T(is,ct,null),k(o,uu,b),k(o,Vo,b),e(Vo,ls),e(ls,pp),T(Mr,pp,null),e(Vo,Sk),e(Vo,hp),e(hp,Wk),k(o,fu,b),k(o,$t,b),T(zr,$t,null),e($t,Bk),e($t,mp),e(mp,Uk),e($t,Hk),e($t,Cr),e(Cr,Qk),e(Cr,Rd),e(Rd,Vk),e(Cr,Kk),e($t,Jk),e($t,jr),e(jr,Gk),e(jr,qr),e(qr,Xk),e(jr,Yk),e($t,Zk),e($t,Qt),T(Pr,Qt,null),e(Qt,ev),e(Qt,Ko),e(Ko,tv),e(Ko,Ed),e(Ed,ov),e(Ko,nv),e(Ko,up),e(up,sv),e(Ko,av),e(Qt,rv),T(ds,Qt,null),e(Qt,iv),T(cs,Qt,null),k(o,gu,b),k(o,Jo,b),e(Jo,ps),e(ps,fp),T(Lr,fp,null),e(Jo,lv),e(Jo,gp),e(gp,dv),k(o,_u,b),k(o,Ft,b),T(Ar,Ft,null),e(Ft,cv),e(Ft,_p),e(_p,pv),e(Ft,hv),e(Ft,Or),e(Or,mv),e(Or,Md),e(Md,uv),e(Or,fv),e(Ft,gv),e(Ft,Nr),e(Nr,_v),e(Nr,Ir),e(Ir,bv),e(Nr,kv),e(Ft,vv),e(Ft,Et),T(Dr,Et,null),e(Et,yv),e(Et,Go),e(Go,wv),e(Go,zd),e(zd,Tv),e(Go,$v),e(Go,bp),e(bp,Fv),e(Go,xv),e(Et,Rv),T(hs,Et,null),e(Et,Ev),T(ms,Et,null),e(Et,Mv),T(us,Et,null),k(o,bu,b),k(o,Xo,b),e(Xo,fs),e(fs,kp),T(Sr,kp,null),e(Xo,zv),e(Xo,vp),e(vp,Cv),k(o,ku,b),k(o,xt,b),T(Wr,xt,null),e(xt,jv),e(xt,Yo),e(Yo,qv),e(Yo,yp),e(yp,Pv),e(Yo,Lv),e(Yo,wp),e(wp,Av),e(Yo,Ov),e(xt,Nv),e(xt,Br),e(Br,Iv),e(Br,Cd),e(Cd,Dv),e(Br,Sv),e(xt,Wv),e(xt,Ur),e(Ur,Bv),e(Ur,Hr),e(Hr,Uv),e(Ur,Hv),e(xt,Qv),e(xt,Mt),T(Qr,Mt,null),e(Mt,Vv),e(Mt,Zo),e(Zo,Kv),e(Zo,jd),e(jd,Jv),e(Zo,Gv),e(Zo,Tp),e(Tp,Xv),e(Zo,Yv),e(Mt,Zv),T(gs,Mt,null),e(Mt,ey),T(_s,Mt,null),e(Mt,ty),T(bs,Mt,null),k(o,vu,b),k(o,en,b),e(en,ks),e(ks,$p),T(Vr,$p,null),e(en,oy),e(en,Fp),e(Fp,ny),k(o,yu,b),k(o,ht,b),T(Kr,ht,null),e(ht,sy),e(ht,xp),e(xp,ay),e(ht,ry),e(ht,Jr),e(Jr,iy),e(Jr,qd),e(qd,ly),e(Jr,dy),e(ht,cy),e(ht,Gr),e(Gr,py),e(Gr,Xr),e(Xr,hy),e(Gr,my),e(ht,uy),T(vs,ht,null),e(ht,fy),e(ht,Vt),T(Yr,Vt,null),e(Vt,gy),e(Vt,tn),e(tn,_y),e(tn,Pd),e(Pd,by),e(tn,ky),e(tn,Rp),e(Rp,vy),e(tn,yy),e(Vt,wy),T(ys,Vt,null),e(Vt,Ty),T(ws,Vt,null),k(o,wu,b),k(o,on,b),e(on,Ts),e(Ts,Ep),T(Zr,Ep,null),e(on,$y),e(on,Mp),e(Mp,Fy),k(o,Tu,b),k(o,nn,b),T(ei,nn,null),e(nn,xy),e(nn,Kt),T(ti,Kt,null),e(Kt,Ry),e(Kt,sn),e(sn,Ey),e(sn,Ld),e(Ld,My),e(sn,zy),e(sn,zp),e(zp,Cy),e(sn,jy),e(Kt,qy),T($s,Kt,null),e(Kt,Py),T(Fs,Kt,null),k(o,$u,b),k(o,an,b),e(an,xs),e(xs,Cp),T(oi,Cp,null),e(an,Ly),e(an,jp),e(jp,Ay),k(o,Fu,b),k(o,mt,b),T(ni,mt,null),e(mt,Oy),e(mt,si),e(si,Ny),e(si,qp),e(qp,Iy),e(si,Dy),e(mt,Sy),e(mt,ai),e(ai,Wy),e(ai,Ad),e(Ad,By),e(ai,Uy),e(mt,Hy),e(mt,ri),e(ri,Qy),e(ri,ii),e(ii,Vy),e(ri,Ky),e(mt,Jy),T(Rs,mt,null),e(mt,Gy),e(mt,zt),T(li,zt,null),e(zt,Xy),e(zt,rn),e(rn,Yy),e(rn,Od),e(Od,Zy),e(rn,ew),e(rn,Pp),e(Pp,tw),e(rn,ow),e(zt,nw),T(Es,zt,null),e(zt,sw),T(Ms,zt,null),e(zt,aw),T(zs,zt,null),k(o,xu,b),k(o,ln,b),e(ln,Cs),e(Cs,Lp),T(di,Lp,null),e(ln,rw),e(ln,Ap),e(Ap,iw),k(o,Ru,b),k(o,ut,b),T(ci,ut,null),e(ut,lw),e(ut,Op),e(Op,dw),e(ut,cw),e(ut,pi),e(pi,pw),e(pi,Nd),e(Nd,hw),e(pi,mw),e(ut,uw),e(ut,hi),e(hi,fw),e(hi,mi),e(mi,gw),e(hi,_w),e(ut,bw),T(js,ut,null),e(ut,kw),e(ut,Ct),T(ui,Ct,null),e(Ct,vw),e(Ct,dn),e(dn,yw),e(dn,Id),e(Id,ww),e(dn,Tw),e(dn,Np),e(Np,$w),e(dn,Fw),e(Ct,xw),T(qs,Ct,null),e(Ct,Rw),T(Ps,Ct,null),e(Ct,Ew),T(Ls,Ct,null),k(o,Eu,b),k(o,cn,b),e(cn,As),e(As,Ip),T(fi,Ip,null),e(cn,Mw),e(cn,Dp),e(Dp,zw),k(o,Mu,b),k(o,ft,b),T(gi,ft,null),e(ft,Cw),e(ft,Sp),e(Sp,jw),e(ft,qw),e(ft,_i),e(_i,Pw),e(_i,Dd),e(Dd,Lw),e(_i,Aw),e(ft,Ow),e(ft,bi),e(bi,Nw),e(bi,ki),e(ki,Iw),e(bi,Dw),e(ft,Sw),T(Os,ft,null),e(ft,Ww),e(ft,Jt),T(vi,Jt,null),e(Jt,Bw),e(Jt,pn),e(pn,Uw),e(pn,Sd),e(Sd,Hw),e(pn,Qw),e(pn,Wp),e(Wp,Vw),e(pn,Kw),e(Jt,Jw),T(Ns,Jt,null),e(Jt,Gw),T(Is,Jt,null),k(o,zu,b),k(o,hn,b),e(hn,Ds),e(Ds,Bp),T(yi,Bp,null),e(hn,Xw),e(hn,Up),e(Up,Yw),k(o,Cu,b),k(o,gt,b),T(wi,gt,null),e(gt,Zw),e(gt,Hp),e(Hp,e2),e(gt,t2),e(gt,Ti),e(Ti,o2),e(Ti,Wd),e(Wd,n2),e(Ti,s2),e(gt,a2),e(gt,$i),e($i,r2),e($i,Fi),e(Fi,i2),e($i,l2),e(gt,d2),T(Ss,gt,null),e(gt,c2),e(gt,jt),T(xi,jt,null),e(jt,p2),e(jt,mn),e(mn,h2),e(mn,Bd),e(Bd,m2),e(mn,u2),e(mn,Qp),e(Qp,f2),e(mn,g2),e(jt,_2),T(Ws,jt,null),e(jt,b2),T(Bs,jt,null),e(jt,k2),T(Us,jt,null),k(o,ju,b),k(o,un,b),e(un,Hs),e(Hs,Vp),T(Ri,Vp,null),e(un,v2),e(un,Kp),e(Kp,y2),k(o,qu,b),k(o,_t,b),T(Ei,_t,null),e(_t,w2),e(_t,fn),e(fn,T2),e(fn,Jp),e(Jp,$2),e(fn,F2),e(fn,Gp),e(Gp,x2),e(fn,R2),e(_t,E2),e(_t,Mi),e(Mi,M2),e(Mi,Ud),e(Ud,z2),e(Mi,C2),e(_t,j2),e(_t,zi),e(zi,q2),e(zi,Ci),e(Ci,P2),e(zi,L2),e(_t,A2),T(Qs,_t,null),e(_t,O2),e(_t,qt),T(ji,qt,null),e(qt,N2),e(qt,gn),e(gn,I2),e(gn,Hd),e(Hd,D2),e(gn,S2),e(gn,Xp),e(Xp,W2),e(gn,B2),e(qt,U2),T(Vs,qt,null),e(qt,H2),T(Ks,qt,null),e(qt,Q2),T(Js,qt,null),k(o,Pu,b),k(o,_n,b),e(_n,Gs),e(Gs,Yp),T(qi,Yp,null),e(_n,V2),e(_n,Zp),e(Zp,K2),k(o,Lu,b),k(o,nt,b),T(Pi,nt,null),e(nt,J2),e(nt,eh),e(eh,G2),e(nt,X2),e(nt,Li),e(Li,Y2),e(Li,Qd),e(Qd,Z2),e(Li,eT),e(nt,tT),e(nt,Ai),e(Ai,oT),e(Ai,Oi),e(Oi,nT),e(Ai,sT),e(nt,aT),e(nt,th),e(th,rT),e(nt,iT),e(nt,po),e(po,oh),e(oh,Ni),e(Ni,lT),e(po,dT),e(po,nh),e(nh,Ii),e(Ii,cT),e(po,pT),e(po,sh),e(sh,Di),e(Di,hT),e(po,mT),e(po,ah),e(ah,Si),e(Si,uT),e(nt,fT),e(nt,Gt),T(Wi,Gt,null),e(Gt,gT),e(Gt,bn),e(bn,_T),e(bn,rh),e(rh,bT),e(bn,kT),e(bn,ih),e(ih,vT),e(bn,yT),e(Gt,wT),T(Xs,Gt,null),e(Gt,TT),T(Ys,Gt,null),k(o,Au,b),k(o,kn,b),e(kn,Zs),e(Zs,lh),T(Bi,lh,null),e(kn,$T),e(kn,dh),e(dh,FT),k(o,Ou,b),k(o,st,b),T(Ui,st,null),e(st,xT),e(st,ch),e(ch,RT),e(st,ET),e(st,Hi),e(Hi,MT),e(Hi,Vd),e(Vd,zT),e(Hi,CT),e(st,jT),e(st,Qi),e(Qi,qT),e(Qi,Vi),e(Vi,PT),e(Qi,LT),e(st,AT),e(st,ph),e(ph,OT),e(st,NT),e(st,ho),e(ho,hh),e(hh,Ki),e(Ki,IT),e(ho,DT),e(ho,mh),e(mh,Ji),e(Ji,ST),e(ho,WT),e(ho,uh),e(uh,Gi),e(Gi,BT),e(ho,UT),e(ho,fh),e(fh,Xi),e(Xi,HT),e(st,QT),e(st,Xt),T(Yi,Xt,null),e(Xt,VT),e(Xt,vn),e(vn,KT),e(vn,gh),e(gh,JT),e(vn,GT),e(vn,_h),e(_h,XT),e(vn,YT),e(Xt,ZT),T(ea,Xt,null),e(Xt,e$),T(ta,Xt,null),k(o,Nu,b),k(o,yn,b),e(yn,oa),e(oa,bh),T(Zi,bh,null),e(yn,t$),e(yn,kh),e(kh,o$),k(o,Iu,b),k(o,at,b),T(el,at,null),e(at,n$),e(at,tl),e(tl,s$),e(tl,vh),e(vh,a$),e(tl,r$),e(at,i$),e(at,ol),e(ol,l$),e(ol,Kd),e(Kd,d$),e(ol,c$),e(at,p$),e(at,nl),e(nl,h$),e(nl,sl),e(sl,m$),e(nl,u$),e(at,f$),e(at,yh),e(yh,g$),e(at,_$),e(at,mo),e(mo,wh),e(wh,al),e(al,b$),e(mo,k$),e(mo,Th),e(Th,rl),e(rl,v$),e(mo,y$),e(mo,$h),e($h,il),e(il,w$),e(mo,T$),e(mo,Fh),e(Fh,ll),e(ll,$$),e(at,F$),e(at,Yt),T(dl,Yt,null),e(Yt,x$),e(Yt,wn),e(wn,R$),e(wn,xh),e(xh,E$),e(wn,M$),e(wn,Rh),e(Rh,z$),e(wn,C$),e(Yt,j$),T(na,Yt,null),e(Yt,q$),T(sa,Yt,null),k(o,Du,b),k(o,Tn,b),e(Tn,aa),e(aa,Eh),T(cl,Eh,null),e(Tn,P$),e(Tn,Mh),e(Mh,L$),k(o,Su,b),k(o,rt,b),T(pl,rt,null),e(rt,A$),e(rt,zh),e(zh,O$),e(rt,N$),e(rt,hl),e(hl,I$),e(hl,Jd),e(Jd,D$),e(hl,S$),e(rt,W$),e(rt,ml),e(ml,B$),e(ml,ul),e(ul,U$),e(ml,H$),e(rt,Q$),e(rt,Ch),e(Ch,V$),e(rt,K$),e(rt,uo),e(uo,jh),e(jh,fl),e(fl,J$),e(uo,G$),e(uo,qh),e(qh,gl),e(gl,X$),e(uo,Y$),e(uo,Ph),e(Ph,_l),e(_l,Z$),e(uo,e1),e(uo,Lh),e(Lh,bl),e(bl,t1),e(rt,o1),e(rt,Zt),T(kl,Zt,null),e(Zt,n1),e(Zt,$n),e($n,s1),e($n,Ah),e(Ah,a1),e($n,r1),e($n,Oh),e(Oh,i1),e($n,l1),e(Zt,d1),T(ra,Zt,null),e(Zt,c1),T(ia,Zt,null),k(o,Wu,b),k(o,Fn,b),e(Fn,la),e(la,Nh),T(vl,Nh,null),e(Fn,p1),e(Fn,Ih),e(Ih,h1),k(o,Bu,b),k(o,it,b),T(yl,it,null),e(it,m1),e(it,Dh),e(Dh,u1),e(it,f1),e(it,wl),e(wl,g1),e(wl,Gd),e(Gd,_1),e(wl,b1),e(it,k1),e(it,Tl),e(Tl,v1),e(Tl,$l),e($l,y1),e(Tl,w1),e(it,T1),e(it,Sh),e(Sh,$1),e(it,F1),e(it,fo),e(fo,Wh),e(Wh,Fl),e(Fl,x1),e(fo,R1),e(fo,Bh),e(Bh,xl),e(xl,E1),e(fo,M1),e(fo,Uh),e(Uh,Rl),e(Rl,z1),e(fo,C1),e(fo,Hh),e(Hh,El),e(El,j1),e(it,q1),e(it,eo),T(Ml,eo,null),e(eo,P1),e(eo,xn),e(xn,L1),e(xn,Qh),e(Qh,A1),e(xn,O1),e(xn,Vh),e(Vh,N1),e(xn,I1),e(eo,D1),T(da,eo,null),e(eo,S1),T(ca,eo,null),k(o,Uu,b),k(o,Rn,b),e(Rn,pa),e(pa,Kh),T(zl,Kh,null),e(Rn,W1),e(Rn,Jh),e(Jh,B1),k(o,Hu,b),k(o,lt,b),T(Cl,lt,null),e(lt,U1),e(lt,Gh),e(Gh,H1),e(lt,Q1),e(lt,jl),e(jl,V1),e(jl,Xd),e(Xd,K1),e(jl,J1),e(lt,G1),e(lt,ql),e(ql,X1),e(ql,Pl),e(Pl,Y1),e(ql,Z1),e(lt,e0),e(lt,Xh),e(Xh,t0),e(lt,o0),e(lt,go),e(go,Yh),e(Yh,Ll),e(Ll,n0),e(go,s0),e(go,Zh),e(Zh,Al),e(Al,a0),e(go,r0),e(go,em),e(em,Ol),e(Ol,i0),e(go,l0),e(go,tm),e(tm,Nl),e(Nl,d0),e(lt,c0),e(lt,to),T(Il,to,null),e(to,p0),e(to,En),e(En,h0),e(En,om),e(om,m0),e(En,u0),e(En,nm),e(nm,f0),e(En,g0),e(to,_0),T(ha,to,null),e(to,b0),T(ma,to,null),k(o,Qu,b),k(o,Mn,b),e(Mn,ua),e(ua,sm),T(Dl,sm,null),e(Mn,k0),e(Mn,am),e(am,v0),k(o,Vu,b),k(o,dt,b),T(Sl,dt,null),e(dt,y0),e(dt,zn),e(zn,w0),e(zn,rm),e(rm,T0),e(zn,$0),e(zn,im),e(im,F0),e(zn,x0),e(dt,R0),e(dt,Wl),e(Wl,E0),e(Wl,Yd),e(Yd,M0),e(Wl,z0),e(dt,C0),e(dt,Bl),e(Bl,j0),e(Bl,Ul),e(Ul,q0),e(Bl,P0),e(dt,L0),e(dt,lm),e(lm,A0),e(dt,O0),e(dt,_o),e(_o,dm),e(dm,Hl),e(Hl,N0),e(_o,I0),e(_o,cm),e(cm,Ql),e(Ql,D0),e(_o,S0),e(_o,pm),e(pm,Vl),e(Vl,W0),e(_o,B0),e(_o,hm),e(hm,Kl),e(Kl,U0),e(dt,H0),e(dt,oo),T(Jl,oo,null),e(oo,Q0),e(oo,Cn),e(Cn,V0),e(Cn,mm),e(mm,K0),e(Cn,J0),e(Cn,um),e(um,G0),e(Cn,X0),e(oo,Y0),T(fa,oo,null),e(oo,Z0),T(ga,oo,null),Ku=!0},p(o,[b]){const Gl={};b&2&&(Gl.$$scope={dirty:b,ctx:o}),An.$set(Gl);const fm={};b&2&&(fm.$$scope={dirty:b,ctx:o}),Nn.$set(fm);const gm={};b&2&&(gm.$$scope={dirty:b,ctx:o}),In.$set(gm);const _m={};b&2&&(_m.$$scope={dirty:b,ctx:o}),Bn.$set(_m);const Xl={};b&2&&(Xl.$$scope={dirty:b,ctx:o}),Un.$set(Xl);const bm={};b&2&&(bm.$$scope={dirty:b,ctx:o}),Vn.$set(bm);const km={};b&2&&(km.$$scope={dirty:b,ctx:o}),Kn.$set(km);const vm={};b&2&&(vm.$$scope={dirty:b,ctx:o}),Gn.$set(vm);const Yl={};b&2&&(Yl.$$scope={dirty:b,ctx:o}),Xn.$set(Yl);const ym={};b&2&&(ym.$$scope={dirty:b,ctx:o}),Zn.$set(ym);const wm={};b&2&&(wm.$$scope={dirty:b,ctx:o}),es.$set(wm);const Tm={};b&2&&(Tm.$$scope={dirty:b,ctx:o}),ts.$set(Tm);const $m={};b&2&&($m.$$scope={dirty:b,ctx:o}),ns.$set($m);const Fm={};b&2&&(Fm.$$scope={dirty:b,ctx:o}),ss.$set(Fm);const xm={};b&2&&(xm.$$scope={dirty:b,ctx:o}),as.$set(xm);const bo={};b&2&&(bo.$$scope={dirty:b,ctx:o}),rs.$set(bo);const Zl={};b&2&&(Zl.$$scope={dirty:b,ctx:o}),is.$set(Zl);const Rm={};b&2&&(Rm.$$scope={dirty:b,ctx:o}),ds.$set(Rm);const Em={};b&2&&(Em.$$scope={dirty:b,ctx:o}),cs.$set(Em);const ko={};b&2&&(ko.$$scope={dirty:b,ctx:o}),hs.$set(ko);const Mm={};b&2&&(Mm.$$scope={dirty:b,ctx:o}),ms.$set(Mm);const zm={};b&2&&(zm.$$scope={dirty:b,ctx:o}),us.$set(zm);const Cm={};b&2&&(Cm.$$scope={dirty:b,ctx:o}),gs.$set(Cm);const Zd={};b&2&&(Zd.$$scope={dirty:b,ctx:o}),_s.$set(Zd);const jm={};b&2&&(jm.$$scope={dirty:b,ctx:o}),bs.$set(jm);const jn={};b&2&&(jn.$$scope={dirty:b,ctx:o}),vs.$set(jn);const qm={};b&2&&(qm.$$scope={dirty:b,ctx:o}),ys.$set(qm);const Pm={};b&2&&(Pm.$$scope={dirty:b,ctx:o}),ws.$set(Pm);const ed={};b&2&&(ed.$$scope={dirty:b,ctx:o}),$s.$set(ed);const Lm={};b&2&&(Lm.$$scope={dirty:b,ctx:o}),Fs.$set(Lm);const Am={};b&2&&(Am.$$scope={dirty:b,ctx:o}),Rs.$set(Am);const Om={};b&2&&(Om.$$scope={dirty:b,ctx:o}),Es.$set(Om);const Bt={};b&2&&(Bt.$$scope={dirty:b,ctx:o}),Ms.$set(Bt);const vo={};b&2&&(vo.$$scope={dirty:b,ctx:o}),zs.$set(vo);const Nm={};b&2&&(Nm.$$scope={dirty:b,ctx:o}),js.$set(Nm);const Im={};b&2&&(Im.$$scope={dirty:b,ctx:o}),qs.$set(Im);const Dm={};b&2&&(Dm.$$scope={dirty:b,ctx:o}),Ps.$set(Dm);const qn={};b&2&&(qn.$$scope={dirty:b,ctx:o}),Ls.$set(qn);const Sm={};b&2&&(Sm.$$scope={dirty:b,ctx:o}),Os.$set(Sm);const Wm={};b&2&&(Wm.$$scope={dirty:b,ctx:o}),Ns.$set(Wm);const Pn={};b&2&&(Pn.$$scope={dirty:b,ctx:o}),Is.$set(Pn);const Bm={};b&2&&(Bm.$$scope={dirty:b,ctx:o}),Ss.$set(Bm);const Um={};b&2&&(Um.$$scope={dirty:b,ctx:o}),Ws.$set(Um);const td={};b&2&&(td.$$scope={dirty:b,ctx:o}),Bs.$set(td);const Hm={};b&2&&(Hm.$$scope={dirty:b,ctx:o}),Us.$set(Hm);const Qm={};b&2&&(Qm.$$scope={dirty:b,ctx:o}),Qs.$set(Qm);const Vm={};b&2&&(Vm.$$scope={dirty:b,ctx:o}),Vs.$set(Vm);const Ue={};b&2&&(Ue.$$scope={dirty:b,ctx:o}),Ks.$set(Ue);const Km={};b&2&&(Km.$$scope={dirty:b,ctx:o}),Js.$set(Km);const Jm={};b&2&&(Jm.$$scope={dirty:b,ctx:o}),Xs.$set(Jm);const od={};b&2&&(od.$$scope={dirty:b,ctx:o}),Ys.$set(od);const Gm={};b&2&&(Gm.$$scope={dirty:b,ctx:o}),ea.$set(Gm);const nd={};b&2&&(nd.$$scope={dirty:b,ctx:o}),ta.$set(nd);const Xm={};b&2&&(Xm.$$scope={dirty:b,ctx:o}),na.$set(Xm);const Ln={};b&2&&(Ln.$$scope={dirty:b,ctx:o}),sa.$set(Ln);const Ym={};b&2&&(Ym.$$scope={dirty:b,ctx:o}),ra.$set(Ym);const sd={};b&2&&(sd.$$scope={dirty:b,ctx:o}),ia.$set(sd);const ec={};b&2&&(ec.$$scope={dirty:b,ctx:o}),da.$set(ec);const Zm={};b&2&&(Zm.$$scope={dirty:b,ctx:o}),ca.$set(Zm);const tc={};b&2&&(tc.$$scope={dirty:b,ctx:o}),ha.$set(tc);const eu={};b&2&&(eu.$$scope={dirty:b,ctx:o}),ma.$set(eu);const ad={};b&2&&(ad.$$scope={dirty:b,ctx:o}),fa.$set(ad);const rd={};b&2&&(rd.$$scope={dirty:b,ctx:o}),ga.$set(rd)},i(o){Ku||($(l.$$.fragment,o),$(M.$$.fragment,o),$(Be.$$.fragment,o),$(Oa.$$.fragment,o),$(An.$$.fragment,o),$(Ia.$$.fragment,o),$(Da.$$.fragment,o),$(Nn.$$.fragment,o),$(In.$$.fragment,o),$(Ba.$$.fragment,o),$(Ha.$$.fragment,o),$(Va.$$.fragment,o),$(Ka.$$.fragment,o),$(Ja.$$.fragment,o),$(Ga.$$.fragment,o),$(Bn.$$.fragment,o),$(Un.$$.fragment,o),$(er.$$.fragment,o),$(tr.$$.fragment,o),$(or.$$.fragment,o),$(lr.$$.fragment,o),$(Vn.$$.fragment,o),$(Kn.$$.fragment,o),$(dr.$$.fragment,o),$(cr.$$.fragment,o),$(fr.$$.fragment,o),$(Gn.$$.fragment,o),$(Xn.$$.fragment,o),$(gr.$$.fragment,o),$(_r.$$.fragment,o),$(wr.$$.fragment,o),$(Zn.$$.fragment,o),$(es.$$.fragment,o),$(ts.$$.fragment,o),$(Tr.$$.fragment,o),$($r.$$.fragment,o),$(Er.$$.fragment,o),$(ns.$$.fragment,o),$(ss.$$.fragment,o),$(as.$$.fragment,o),$(rs.$$.fragment,o),$(is.$$.fragment,o),$(Mr.$$.fragment,o),$(zr.$$.fragment,o),$(Pr.$$.fragment,o),$(ds.$$.fragment,o),$(cs.$$.fragment,o),$(Lr.$$.fragment,o),$(Ar.$$.fragment,o),$(Dr.$$.fragment,o),$(hs.$$.fragment,o),$(ms.$$.fragment,o),$(us.$$.fragment,o),$(Sr.$$.fragment,o),$(Wr.$$.fragment,o),$(Qr.$$.fragment,o),$(gs.$$.fragment,o),$(_s.$$.fragment,o),$(bs.$$.fragment,o),$(Vr.$$.fragment,o),$(Kr.$$.fragment,o),$(vs.$$.fragment,o),$(Yr.$$.fragment,o),$(ys.$$.fragment,o),$(ws.$$.fragment,o),$(Zr.$$.fragment,o),$(ei.$$.fragment,o),$(ti.$$.fragment,o),$($s.$$.fragment,o),$(Fs.$$.fragment,o),$(oi.$$.fragment,o),$(ni.$$.fragment,o),$(Rs.$$.fragment,o),$(li.$$.fragment,o),$(Es.$$.fragment,o),$(Ms.$$.fragment,o),$(zs.$$.fragment,o),$(di.$$.fragment,o),$(ci.$$.fragment,o),$(js.$$.fragment,o),$(ui.$$.fragment,o),$(qs.$$.fragment,o),$(Ps.$$.fragment,o),$(Ls.$$.fragment,o),$(fi.$$.fragment,o),$(gi.$$.fragment,o),$(Os.$$.fragment,o),$(vi.$$.fragment,o),$(Ns.$$.fragment,o),$(Is.$$.fragment,o),$(yi.$$.fragment,o),$(wi.$$.fragment,o),$(Ss.$$.fragment,o),$(xi.$$.fragment,o),$(Ws.$$.fragment,o),$(Bs.$$.fragment,o),$(Us.$$.fragment,o),$(Ri.$$.fragment,o),$(Ei.$$.fragment,o),$(Qs.$$.fragment,o),$(ji.$$.fragment,o),$(Vs.$$.fragment,o),$(Ks.$$.fragment,o),$(Js.$$.fragment,o),$(qi.$$.fragment,o),$(Pi.$$.fragment,o),$(Wi.$$.fragment,o),$(Xs.$$.fragment,o),$(Ys.$$.fragment,o),$(Bi.$$.fragment,o),$(Ui.$$.fragment,o),$(Yi.$$.fragment,o),$(ea.$$.fragment,o),$(ta.$$.fragment,o),$(Zi.$$.fragment,o),$(el.$$.fragment,o),$(dl.$$.fragment,o),$(na.$$.fragment,o),$(sa.$$.fragment,o),$(cl.$$.fragment,o),$(pl.$$.fragment,o),$(kl.$$.fragment,o),$(ra.$$.fragment,o),$(ia.$$.fragment,o),$(vl.$$.fragment,o),$(yl.$$.fragment,o),$(Ml.$$.fragment,o),$(da.$$.fragment,o),$(ca.$$.fragment,o),$(zl.$$.fragment,o),$(Cl.$$.fragment,o),$(Il.$$.fragment,o),$(ha.$$.fragment,o),$(ma.$$.fragment,o),$(Dl.$$.fragment,o),$(Sl.$$.fragment,o),$(Jl.$$.fragment,o),$(fa.$$.fragment,o),$(ga.$$.fragment,o),Ku=!0)},o(o){F(l.$$.fragment,o),F(M.$$.fragment,o),F(Be.$$.fragment,o),F(Oa.$$.fragment,o),F(An.$$.fragment,o),F(Ia.$$.fragment,o),F(Da.$$.fragment,o),F(Nn.$$.fragment,o),F(In.$$.fragment,o),F(Ba.$$.fragment,o),F(Ha.$$.fragment,o),F(Va.$$.fragment,o),F(Ka.$$.fragment,o),F(Ja.$$.fragment,o),F(Ga.$$.fragment,o),F(Bn.$$.fragment,o),F(Un.$$.fragment,o),F(er.$$.fragment,o),F(tr.$$.fragment,o),F(or.$$.fragment,o),F(lr.$$.fragment,o),F(Vn.$$.fragment,o),F(Kn.$$.fragment,o),F(dr.$$.fragment,o),F(cr.$$.fragment,o),F(fr.$$.fragment,o),F(Gn.$$.fragment,o),F(Xn.$$.fragment,o),F(gr.$$.fragment,o),F(_r.$$.fragment,o),F(wr.$$.fragment,o),F(Zn.$$.fragment,o),F(es.$$.fragment,o),F(ts.$$.fragment,o),F(Tr.$$.fragment,o),F($r.$$.fragment,o),F(Er.$$.fragment,o),F(ns.$$.fragment,o),F(ss.$$.fragment,o),F(as.$$.fragment,o),F(rs.$$.fragment,o),F(is.$$.fragment,o),F(Mr.$$.fragment,o),F(zr.$$.fragment,o),F(Pr.$$.fragment,o),F(ds.$$.fragment,o),F(cs.$$.fragment,o),F(Lr.$$.fragment,o),F(Ar.$$.fragment,o),F(Dr.$$.fragment,o),F(hs.$$.fragment,o),F(ms.$$.fragment,o),F(us.$$.fragment,o),F(Sr.$$.fragment,o),F(Wr.$$.fragment,o),F(Qr.$$.fragment,o),F(gs.$$.fragment,o),F(_s.$$.fragment,o),F(bs.$$.fragment,o),F(Vr.$$.fragment,o),F(Kr.$$.fragment,o),F(vs.$$.fragment,o),F(Yr.$$.fragment,o),F(ys.$$.fragment,o),F(ws.$$.fragment,o),F(Zr.$$.fragment,o),F(ei.$$.fragment,o),F(ti.$$.fragment,o),F($s.$$.fragment,o),F(Fs.$$.fragment,o),F(oi.$$.fragment,o),F(ni.$$.fragment,o),F(Rs.$$.fragment,o),F(li.$$.fragment,o),F(Es.$$.fragment,o),F(Ms.$$.fragment,o),F(zs.$$.fragment,o),F(di.$$.fragment,o),F(ci.$$.fragment,o),F(js.$$.fragment,o),F(ui.$$.fragment,o),F(qs.$$.fragment,o),F(Ps.$$.fragment,o),F(Ls.$$.fragment,o),F(fi.$$.fragment,o),F(gi.$$.fragment,o),F(Os.$$.fragment,o),F(vi.$$.fragment,o),F(Ns.$$.fragment,o),F(Is.$$.fragment,o),F(yi.$$.fragment,o),F(wi.$$.fragment,o),F(Ss.$$.fragment,o),F(xi.$$.fragment,o),F(Ws.$$.fragment,o),F(Bs.$$.fragment,o),F(Us.$$.fragment,o),F(Ri.$$.fragment,o),F(Ei.$$.fragment,o),F(Qs.$$.fragment,o),F(ji.$$.fragment,o),F(Vs.$$.fragment,o),F(Ks.$$.fragment,o),F(Js.$$.fragment,o),F(qi.$$.fragment,o),F(Pi.$$.fragment,o),F(Wi.$$.fragment,o),F(Xs.$$.fragment,o),F(Ys.$$.fragment,o),F(Bi.$$.fragment,o),F(Ui.$$.fragment,o),F(Yi.$$.fragment,o),F(ea.$$.fragment,o),F(ta.$$.fragment,o),F(Zi.$$.fragment,o),F(el.$$.fragment,o),F(dl.$$.fragment,o),F(na.$$.fragment,o),F(sa.$$.fragment,o),F(cl.$$.fragment,o),F(pl.$$.fragment,o),F(kl.$$.fragment,o),F(ra.$$.fragment,o),F(ia.$$.fragment,o),F(vl.$$.fragment,o),F(yl.$$.fragment,o),F(Ml.$$.fragment,o),F(da.$$.fragment,o),F(ca.$$.fragment,o),F(zl.$$.fragment,o),F(Cl.$$.fragment,o),F(Il.$$.fragment,o),F(ha.$$.fragment,o),F(ma.$$.fragment,o),F(Dl.$$.fragment,o),F(Sl.$$.fragment,o),F(Jl.$$.fragment,o),F(fa.$$.fragment,o),F(ga.$$.fragment,o),Ku=!1},d(o){t(d),o&&t(g),o&&t(c),x(l),o&&t(Z),o&&t(N),x(M),o&&t(ge),o&&t(W),o&&t(_e),o&&t(U),o&&t(be),o&&t(H),o&&t(ke),o&&t(ee),o&&t(ve),o&&t(Q),o&&t(ye),o&&t(I),o&&t(Ke),o&&t(C),o&&t(Je),o&&t(Oe),x(Be),o&&t(Ge),o&&t(vt),x(Oa),x(An),o&&t(ou),o&&t(Oo),x(Ia),o&&t(nu),o&&t(Ie),x(Da),x(Nn),x(In),x(Ba),x(Ha),x(Va),x(Ka),o&&t(su),o&&t(No),x(Ja),o&&t(au),o&&t(tt),x(Ga),x(Bn),x(Un),x(er),o&&t(ru),o&&t(Io),x(tr),o&&t(iu),o&&t(ot),x(or),x(lr),x(Vn),x(Kn),o&&t(lu),o&&t(So),x(dr),o&&t(du),o&&t(yt),x(cr),x(fr),x(Gn),x(Xn),o&&t(cu),o&&t(Bo),x(gr),o&&t(pu),o&&t(wt),x(_r),x(wr),x(Zn),x(es),x(ts),o&&t(hu),o&&t(Ho),x(Tr),o&&t(mu),o&&t(Tt),x($r),x(Er),x(ns),x(ss),x(as),x(rs),x(is),o&&t(uu),o&&t(Vo),x(Mr),o&&t(fu),o&&t($t),x(zr),x(Pr),x(ds),x(cs),o&&t(gu),o&&t(Jo),x(Lr),o&&t(_u),o&&t(Ft),x(Ar),x(Dr),x(hs),x(ms),x(us),o&&t(bu),o&&t(Xo),x(Sr),o&&t(ku),o&&t(xt),x(Wr),x(Qr),x(gs),x(_s),x(bs),o&&t(vu),o&&t(en),x(Vr),o&&t(yu),o&&t(ht),x(Kr),x(vs),x(Yr),x(ys),x(ws),o&&t(wu),o&&t(on),x(Zr),o&&t(Tu),o&&t(nn),x(ei),x(ti),x($s),x(Fs),o&&t($u),o&&t(an),x(oi),o&&t(Fu),o&&t(mt),x(ni),x(Rs),x(li),x(Es),x(Ms),x(zs),o&&t(xu),o&&t(ln),x(di),o&&t(Ru),o&&t(ut),x(ci),x(js),x(ui),x(qs),x(Ps),x(Ls),o&&t(Eu),o&&t(cn),x(fi),o&&t(Mu),o&&t(ft),x(gi),x(Os),x(vi),x(Ns),x(Is),o&&t(zu),o&&t(hn),x(yi),o&&t(Cu),o&&t(gt),x(wi),x(Ss),x(xi),x(Ws),x(Bs),x(Us),o&&t(ju),o&&t(un),x(Ri),o&&t(qu),o&&t(_t),x(Ei),x(Qs),x(ji),x(Vs),x(Ks),x(Js),o&&t(Pu),o&&t(_n),x(qi),o&&t(Lu),o&&t(nt),x(Pi),x(Wi),x(Xs),x(Ys),o&&t(Au),o&&t(kn),x(Bi),o&&t(Ou),o&&t(st),x(Ui),x(Yi),x(ea),x(ta),o&&t(Nu),o&&t(yn),x(Zi),o&&t(Iu),o&&t(at),x(el),x(dl),x(na),x(sa),o&&t(Du),o&&t(Tn),x(cl),o&&t(Su),o&&t(rt),x(pl),x(kl),x(ra),x(ia),o&&t(Wu),o&&t(Fn),x(vl),o&&t(Bu),o&&t(it),x(yl),x(Ml),x(da),x(ca),o&&t(Uu),o&&t(Rn),x(zl),o&&t(Hu),o&&t(lt),x(Cl),x(Il),x(ha),x(ma),o&&t(Qu),o&&t(Mn),x(Dl),o&&t(Vu),o&&t(dt),x(Sl),x(Jl),x(fa),x(ga)}}}const GM={local:"roberta",sections:[{local:"overview",title:"Overview"},{local:"transformers.RobertaConfig",title:"RobertaConfig"},{local:"transformers.RobertaTokenizer",title:"RobertaTokenizer"},{local:"transformers.RobertaTokenizerFast",title:"RobertaTokenizerFast"},{local:"transformers.RobertaModel",title:"RobertaModel"},{local:"transformers.RobertaForCausalLM",title:"RobertaForCausalLM"},{local:"transformers.RobertaForMaskedLM",title:"RobertaForMaskedLM"},{local:"transformers.RobertaForSequenceClassification",title:"RobertaForSequenceClassification"},{local:"transformers.RobertaForMultipleChoice",title:"RobertaForMultipleChoice"},{local:"transformers.RobertaForTokenClassification",title:"RobertaForTokenClassification"},{local:"transformers.RobertaForQuestionAnswering",title:"RobertaForQuestionAnswering"},{local:"transformers.TFRobertaModel",title:"TFRobertaModel"},{local:"transformers.TFRobertaForCausalLM",title:"TFRobertaForCausalLM"},{local:"transformers.TFRobertaForMaskedLM",title:"TFRobertaForMaskedLM"},{local:"transformers.TFRobertaForSequenceClassification",title:"TFRobertaForSequenceClassification"},{local:"transformers.TFRobertaForMultipleChoice",title:"TFRobertaForMultipleChoice"},{local:"transformers.TFRobertaForTokenClassification",title:"TFRobertaForTokenClassification"},{local:"transformers.TFRobertaForQuestionAnswering",title:"TFRobertaForQuestionAnswering"},{local:"transformers.FlaxRobertaModel",title:"FlaxRobertaModel"},{local:"transformers.FlaxRobertaForCausalLM",title:"FlaxRobertaForCausalLM"},{local:"transformers.FlaxRobertaForMaskedLM",title:"FlaxRobertaForMaskedLM"},{local:"transformers.FlaxRobertaForSequenceClassification",title:"FlaxRobertaForSequenceClassification"},{local:"transformers.FlaxRobertaForMultipleChoice",title:"FlaxRobertaForMultipleChoice"},{local:"transformers.FlaxRobertaForTokenClassification",title:"FlaxRobertaForTokenClassification"},{local:"transformers.FlaxRobertaForQuestionAnswering",title:"FlaxRobertaForQuestionAnswering"}],title:"RoBERTa"};function XM(R){return IE(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class sz extends LE{constructor(d){super();AE(this,d,XM,JM,OE,{})}}export{sz as default,GM as metadata};
