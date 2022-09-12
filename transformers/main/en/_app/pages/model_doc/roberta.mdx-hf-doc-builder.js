import{S as LM,i as AM,s as OM,e as a,k as h,w as v,t as n,M as NM,c as r,d as t,m,a as i,x as w,h as s,b as f,G as e,g as k,y as T,q as $,o as F,B as x,v as IM,L as re}from"../../chunks/vendor-hf-doc-builder.js";import{T as fe}from"../../chunks/Tip-hf-doc-builder.js";import{D as O}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ie}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as De}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ae}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function DM(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaConfig, RobertaModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),g=n("Examples:"),c=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Examples:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function SM(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer
tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 328, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){d=a("p"),g=n("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function WM(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("When used with "),c=a("code"),u=n("is_split_into_words=True"),_=n(", this tokenizer will add a space before each word (even the first one).")},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"When used with "),c=r(p,"CODE",{});var E=i(c);u=s(E,"is_split_into_words=True"),E.forEach(t),_=s(p,", this tokenizer will add a space before each word (even the first one)."),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function BM(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizerFast
tokenizer = RobertaTokenizerFast.from_pretrained("roberta-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = RobertaTokenizerFast.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 328, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){d=a("p"),g=n("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function UM(R){let d,g,c,u,_,l,p,E;return{c(){d=a("p"),g=n("When used with "),c=a("code"),u=n("is_split_into_words=True"),_=n(", this tokenizer needs to be instantiated with "),l=a("code"),p=n("add_prefix_space=True"),E=n(".")},l(le){d=r(le,"P",{});var Z=i(d);g=s(Z,"When used with "),c=r(Z,"CODE",{});var N=i(c);u=s(N,"is_split_into_words=True"),N.forEach(t),_=s(Z,", this tokenizer needs to be instantiated with "),l=r(Z,"CODE",{});var te=i(l);p=s(te,"add_prefix_space=True"),te.forEach(t),E=s(Z,"."),Z.forEach(t)},m(le,Z){k(le,d,Z),e(d,g),e(d,c),e(c,u),e(d,_),e(d,l),e(l,p),e(d,E)},d(le){le&&t(d)}}}function HM(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function QM(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function VM(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function KM(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaForCausalLM, RobertaConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function JM(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function GM(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaForMaskedLM
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
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function XM(R){let d,g;return d=new ie({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){v(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){T(d,c,u),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function YM(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function ZM(R){let d,g,c,u,_;return u=new ie({props:{code:`import torch
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=a("p"),g=n("Example of single-label classification:"),c=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example of single-label classification:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function ez(R){let d,g;return d=new ie({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = RobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){v(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){T(d,c,u),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function tz(R){let d,g,c,u,_;return u=new ie({props:{code:`import torch
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=a("p"),g=n("Example of multi-label classification:"),c=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example of multi-label classification:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function oz(R){let d,g;return d=new ie({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){T(d,c,u),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function nz(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function sz(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function az(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function rz(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function iz(R){let d,g;return d=new ie({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){v(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){T(d,c,u),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function lz(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function dz(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, RobertaForQuestionAnswering
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
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function cz(R){let d,g;return d=new ie({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.86</span>`}}),{c(){v(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){T(d,c,u),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function pz(R){let d,g,c,u,_,l,p,E,le,Z,N,te,oe,M,we,V,Te,ge,W,$e,pe,K,Fe,_e,U,xe,be,H,Re,ke,ee,j,P,ye,Q,Ee,ve,I,he,Me,q,ze,J,Ce,me,G,je,ne,D,ue,X,qe,se,L,Pe,A,Le,Ae;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),u=n("transformers"),_=n(" accept two formats as input:"),l=h(),p=a("ul"),E=a("li"),le=n("having all inputs as keyword arguments (like PyTorch models), or"),Z=h(),N=a("li"),te=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),M=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a("code"),Te=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a("code"),$e=n("model.fit()"),pe=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Fe=n("fit()"),_e=n(" and "),U=a("code"),xe=n("predict()"),be=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=n("Functional"),ke=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),j=a("ul"),P=a("li"),ye=n("a single Tensor with "),Q=a("code"),Ee=n("input_ids"),ve=n(" only and nothing else: "),I=a("code"),he=n("model(input_ids)"),Me=h(),q=a("li"),ze=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),Ce=n("model([input_ids, attention_mask])"),me=n(" or "),G=a("code"),je=n("model([input_ids, attention_mask, token_type_ids])"),ne=h(),D=a("li"),ue=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=h(),L=a("p"),Pe=n(`Note that when creating models and layers with
`),A=a("a"),Le=n("subclassing"),Ae=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=r(z,"CODE",{});var He=i(c);u=s(He,"transformers"),He.forEach(t),_=s(z," accept two formats as input:"),z.forEach(t),l=m(y),p=r(y,"UL",{});var de=i(p);E=r(de,"LI",{});var Xe=i(E);le=s(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=m(de),N=r(de,"LI",{});var Ke=i(N);te=s(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),de.forEach(t),oe=m(y),M=r(y,"P",{});var C=i(M);we=s(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r(C,"CODE",{});var Ye=i(V);Te=s(Ye,"model.fit()"),Ye.forEach(t),ge=s(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r(C,"CODE",{});var Se=i(W);$e=s(Se,"model.fit()"),Se.forEach(t),pe=s(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(C,"CODE",{});var Ze=i(K);Fe=s(Ze,"fit()"),Ze.forEach(t),_e=s(C," and "),U=r(C,"CODE",{});var et=i(U);xe=s(et,"predict()"),et.forEach(t),be=s(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var We=i(H);Re=s(We,"Functional"),We.forEach(t),ke=s(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),ee=m(y),j=r(y,"UL",{});var S=i(j);P=r(S,"LI",{});var Y=i(P);ye=s(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Je=i(Q);Ee=s(Je,"input_ids"),Je.forEach(t),ve=s(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=s(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=m(S),q=r(S,"LI",{});var B=i(q);ze=s(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(B,"CODE",{});var Qe=i(J);Ce=s(Qe,"model([input_ids, attention_mask])"),Qe.forEach(t),me=s(B," or "),G=r(B,"CODE",{});var Be=i(G);je=s(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(t),B.forEach(t),ne=m(S),D=r(S,"LI",{});var Ne=i(D);ue=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Ve=i(X);qe=s(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),Ne.forEach(t),S.forEach(t),se=m(y),L=r(y,"P",{});var ce=i(L);Pe=s(ce,`Note that when creating models and layers with
`),A=r(ce,"A",{href:!0,rel:!0});var Ge=i(A);Le=s(Ge,"subclassing"),Ge.forEach(t),Ae=s(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){f(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(A,"rel","nofollow")},m(y,z){k(y,d,z),e(d,g),e(d,c),e(c,u),e(d,_),k(y,l,z),k(y,p,z),e(p,E),e(E,le),e(p,Z),e(p,N),e(N,te),k(y,oe,z),k(y,M,z),e(M,we),e(M,V),e(V,Te),e(M,ge),e(M,W),e(W,$e),e(M,pe),e(M,K),e(K,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),k(y,ee,z),k(y,j,z),e(j,P),e(P,ye),e(P,Q),e(Q,Ee),e(P,ve),e(P,I),e(I,he),e(j,Me),e(j,q),e(q,ze),e(q,J),e(J,Ce),e(q,me),e(q,G),e(G,je),e(j,ne),e(j,D),e(D,ue),e(D,X),e(X,qe),k(y,se,z),k(y,L,z),e(L,Pe),e(L,A),e(A,Le),e(L,Ae)},d(y){y&&t(d),y&&t(l),y&&t(p),y&&t(oe),y&&t(M),y&&t(ee),y&&t(j),y&&t(se),y&&t(L)}}}function hz(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function mz(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function uz(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function fz(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForCausalLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function gz(R){let d,g,c,u,_,l,p,E,le,Z,N,te,oe,M,we,V,Te,ge,W,$e,pe,K,Fe,_e,U,xe,be,H,Re,ke,ee,j,P,ye,Q,Ee,ve,I,he,Me,q,ze,J,Ce,me,G,je,ne,D,ue,X,qe,se,L,Pe,A,Le,Ae;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),u=n("transformers"),_=n(" accept two formats as input:"),l=h(),p=a("ul"),E=a("li"),le=n("having all inputs as keyword arguments (like PyTorch models), or"),Z=h(),N=a("li"),te=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),M=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a("code"),Te=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a("code"),$e=n("model.fit()"),pe=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Fe=n("fit()"),_e=n(" and "),U=a("code"),xe=n("predict()"),be=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=n("Functional"),ke=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),j=a("ul"),P=a("li"),ye=n("a single Tensor with "),Q=a("code"),Ee=n("input_ids"),ve=n(" only and nothing else: "),I=a("code"),he=n("model(input_ids)"),Me=h(),q=a("li"),ze=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),Ce=n("model([input_ids, attention_mask])"),me=n(" or "),G=a("code"),je=n("model([input_ids, attention_mask, token_type_ids])"),ne=h(),D=a("li"),ue=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=h(),L=a("p"),Pe=n(`Note that when creating models and layers with
`),A=a("a"),Le=n("subclassing"),Ae=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=r(z,"CODE",{});var He=i(c);u=s(He,"transformers"),He.forEach(t),_=s(z," accept two formats as input:"),z.forEach(t),l=m(y),p=r(y,"UL",{});var de=i(p);E=r(de,"LI",{});var Xe=i(E);le=s(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=m(de),N=r(de,"LI",{});var Ke=i(N);te=s(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),de.forEach(t),oe=m(y),M=r(y,"P",{});var C=i(M);we=s(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r(C,"CODE",{});var Ye=i(V);Te=s(Ye,"model.fit()"),Ye.forEach(t),ge=s(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r(C,"CODE",{});var Se=i(W);$e=s(Se,"model.fit()"),Se.forEach(t),pe=s(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(C,"CODE",{});var Ze=i(K);Fe=s(Ze,"fit()"),Ze.forEach(t),_e=s(C," and "),U=r(C,"CODE",{});var et=i(U);xe=s(et,"predict()"),et.forEach(t),be=s(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var We=i(H);Re=s(We,"Functional"),We.forEach(t),ke=s(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),ee=m(y),j=r(y,"UL",{});var S=i(j);P=r(S,"LI",{});var Y=i(P);ye=s(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Je=i(Q);Ee=s(Je,"input_ids"),Je.forEach(t),ve=s(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=s(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=m(S),q=r(S,"LI",{});var B=i(q);ze=s(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(B,"CODE",{});var Qe=i(J);Ce=s(Qe,"model([input_ids, attention_mask])"),Qe.forEach(t),me=s(B," or "),G=r(B,"CODE",{});var Be=i(G);je=s(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(t),B.forEach(t),ne=m(S),D=r(S,"LI",{});var Ne=i(D);ue=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Ve=i(X);qe=s(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),Ne.forEach(t),S.forEach(t),se=m(y),L=r(y,"P",{});var ce=i(L);Pe=s(ce,`Note that when creating models and layers with
`),A=r(ce,"A",{href:!0,rel:!0});var Ge=i(A);Le=s(Ge,"subclassing"),Ge.forEach(t),Ae=s(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){f(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(A,"rel","nofollow")},m(y,z){k(y,d,z),e(d,g),e(d,c),e(c,u),e(d,_),k(y,l,z),k(y,p,z),e(p,E),e(E,le),e(p,Z),e(p,N),e(N,te),k(y,oe,z),k(y,M,z),e(M,we),e(M,V),e(V,Te),e(M,ge),e(M,W),e(W,$e),e(M,pe),e(M,K),e(K,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),k(y,ee,z),k(y,j,z),e(j,P),e(P,ye),e(P,Q),e(Q,Ee),e(P,ve),e(P,I),e(I,he),e(j,Me),e(j,q),e(q,ze),e(q,J),e(J,Ce),e(q,me),e(q,G),e(G,je),e(j,ne),e(j,D),e(D,ue),e(D,X),e(X,qe),k(y,se,z),k(y,L,z),e(L,Pe),e(L,A),e(A,Le),e(L,Ae)},d(y){y&&t(d),y&&t(l),y&&t(p),y&&t(oe),y&&t(M),y&&t(ee),y&&t(j),y&&t(se),y&&t(L)}}}function _z(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function bz(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForMaskedLM
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
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function kz(R){let d,g;return d=new ie({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-<mask> tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){v(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){T(d,c,u),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function yz(R){let d,g,c,u,_,l,p,E,le,Z,N,te,oe,M,we,V,Te,ge,W,$e,pe,K,Fe,_e,U,xe,be,H,Re,ke,ee,j,P,ye,Q,Ee,ve,I,he,Me,q,ze,J,Ce,me,G,je,ne,D,ue,X,qe,se,L,Pe,A,Le,Ae;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),u=n("transformers"),_=n(" accept two formats as input:"),l=h(),p=a("ul"),E=a("li"),le=n("having all inputs as keyword arguments (like PyTorch models), or"),Z=h(),N=a("li"),te=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),M=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a("code"),Te=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a("code"),$e=n("model.fit()"),pe=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Fe=n("fit()"),_e=n(" and "),U=a("code"),xe=n("predict()"),be=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=n("Functional"),ke=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),j=a("ul"),P=a("li"),ye=n("a single Tensor with "),Q=a("code"),Ee=n("input_ids"),ve=n(" only and nothing else: "),I=a("code"),he=n("model(input_ids)"),Me=h(),q=a("li"),ze=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),Ce=n("model([input_ids, attention_mask])"),me=n(" or "),G=a("code"),je=n("model([input_ids, attention_mask, token_type_ids])"),ne=h(),D=a("li"),ue=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=h(),L=a("p"),Pe=n(`Note that when creating models and layers with
`),A=a("a"),Le=n("subclassing"),Ae=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=r(z,"CODE",{});var He=i(c);u=s(He,"transformers"),He.forEach(t),_=s(z," accept two formats as input:"),z.forEach(t),l=m(y),p=r(y,"UL",{});var de=i(p);E=r(de,"LI",{});var Xe=i(E);le=s(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=m(de),N=r(de,"LI",{});var Ke=i(N);te=s(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),de.forEach(t),oe=m(y),M=r(y,"P",{});var C=i(M);we=s(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r(C,"CODE",{});var Ye=i(V);Te=s(Ye,"model.fit()"),Ye.forEach(t),ge=s(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r(C,"CODE",{});var Se=i(W);$e=s(Se,"model.fit()"),Se.forEach(t),pe=s(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(C,"CODE",{});var Ze=i(K);Fe=s(Ze,"fit()"),Ze.forEach(t),_e=s(C," and "),U=r(C,"CODE",{});var et=i(U);xe=s(et,"predict()"),et.forEach(t),be=s(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var We=i(H);Re=s(We,"Functional"),We.forEach(t),ke=s(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),ee=m(y),j=r(y,"UL",{});var S=i(j);P=r(S,"LI",{});var Y=i(P);ye=s(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Je=i(Q);Ee=s(Je,"input_ids"),Je.forEach(t),ve=s(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=s(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=m(S),q=r(S,"LI",{});var B=i(q);ze=s(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(B,"CODE",{});var Qe=i(J);Ce=s(Qe,"model([input_ids, attention_mask])"),Qe.forEach(t),me=s(B," or "),G=r(B,"CODE",{});var Be=i(G);je=s(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(t),B.forEach(t),ne=m(S),D=r(S,"LI",{});var Ne=i(D);ue=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Ve=i(X);qe=s(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),Ne.forEach(t),S.forEach(t),se=m(y),L=r(y,"P",{});var ce=i(L);Pe=s(ce,`Note that when creating models and layers with
`),A=r(ce,"A",{href:!0,rel:!0});var Ge=i(A);Le=s(Ge,"subclassing"),Ge.forEach(t),Ae=s(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){f(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(A,"rel","nofollow")},m(y,z){k(y,d,z),e(d,g),e(d,c),e(c,u),e(d,_),k(y,l,z),k(y,p,z),e(p,E),e(E,le),e(p,Z),e(p,N),e(N,te),k(y,oe,z),k(y,M,z),e(M,we),e(M,V),e(V,Te),e(M,ge),e(M,W),e(W,$e),e(M,pe),e(M,K),e(K,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),k(y,ee,z),k(y,j,z),e(j,P),e(P,ye),e(P,Q),e(Q,Ee),e(P,ve),e(P,I),e(I,he),e(j,Me),e(j,q),e(q,ze),e(q,J),e(J,Ce),e(q,me),e(q,G),e(G,je),e(j,ne),e(j,D),e(D,ue),e(D,X),e(X,qe),k(y,se,z),k(y,L,z),e(L,Pe),e(L,A),e(A,Le),e(L,Ae)},d(y){y&&t(d),y&&t(l),y&&t(p),y&&t(oe),y&&t(M),y&&t(ee),y&&t(j),y&&t(se),y&&t(L)}}}function vz(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function wz(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForSequenceClassification
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function Tz(R){let d,g;return d=new ie({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFRobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){v(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){T(d,c,u),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function $z(R){let d,g,c,u,_,l,p,E,le,Z,N,te,oe,M,we,V,Te,ge,W,$e,pe,K,Fe,_e,U,xe,be,H,Re,ke,ee,j,P,ye,Q,Ee,ve,I,he,Me,q,ze,J,Ce,me,G,je,ne,D,ue,X,qe,se,L,Pe,A,Le,Ae;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),u=n("transformers"),_=n(" accept two formats as input:"),l=h(),p=a("ul"),E=a("li"),le=n("having all inputs as keyword arguments (like PyTorch models), or"),Z=h(),N=a("li"),te=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),M=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a("code"),Te=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a("code"),$e=n("model.fit()"),pe=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Fe=n("fit()"),_e=n(" and "),U=a("code"),xe=n("predict()"),be=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=n("Functional"),ke=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),j=a("ul"),P=a("li"),ye=n("a single Tensor with "),Q=a("code"),Ee=n("input_ids"),ve=n(" only and nothing else: "),I=a("code"),he=n("model(input_ids)"),Me=h(),q=a("li"),ze=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),Ce=n("model([input_ids, attention_mask])"),me=n(" or "),G=a("code"),je=n("model([input_ids, attention_mask, token_type_ids])"),ne=h(),D=a("li"),ue=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=h(),L=a("p"),Pe=n(`Note that when creating models and layers with
`),A=a("a"),Le=n("subclassing"),Ae=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=r(z,"CODE",{});var He=i(c);u=s(He,"transformers"),He.forEach(t),_=s(z," accept two formats as input:"),z.forEach(t),l=m(y),p=r(y,"UL",{});var de=i(p);E=r(de,"LI",{});var Xe=i(E);le=s(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=m(de),N=r(de,"LI",{});var Ke=i(N);te=s(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),de.forEach(t),oe=m(y),M=r(y,"P",{});var C=i(M);we=s(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r(C,"CODE",{});var Ye=i(V);Te=s(Ye,"model.fit()"),Ye.forEach(t),ge=s(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r(C,"CODE",{});var Se=i(W);$e=s(Se,"model.fit()"),Se.forEach(t),pe=s(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(C,"CODE",{});var Ze=i(K);Fe=s(Ze,"fit()"),Ze.forEach(t),_e=s(C," and "),U=r(C,"CODE",{});var et=i(U);xe=s(et,"predict()"),et.forEach(t),be=s(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var We=i(H);Re=s(We,"Functional"),We.forEach(t),ke=s(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),ee=m(y),j=r(y,"UL",{});var S=i(j);P=r(S,"LI",{});var Y=i(P);ye=s(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Je=i(Q);Ee=s(Je,"input_ids"),Je.forEach(t),ve=s(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=s(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=m(S),q=r(S,"LI",{});var B=i(q);ze=s(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(B,"CODE",{});var Qe=i(J);Ce=s(Qe,"model([input_ids, attention_mask])"),Qe.forEach(t),me=s(B," or "),G=r(B,"CODE",{});var Be=i(G);je=s(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(t),B.forEach(t),ne=m(S),D=r(S,"LI",{});var Ne=i(D);ue=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Ve=i(X);qe=s(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),Ne.forEach(t),S.forEach(t),se=m(y),L=r(y,"P",{});var ce=i(L);Pe=s(ce,`Note that when creating models and layers with
`),A=r(ce,"A",{href:!0,rel:!0});var Ge=i(A);Le=s(Ge,"subclassing"),Ge.forEach(t),Ae=s(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){f(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(A,"rel","nofollow")},m(y,z){k(y,d,z),e(d,g),e(d,c),e(c,u),e(d,_),k(y,l,z),k(y,p,z),e(p,E),e(E,le),e(p,Z),e(p,N),e(N,te),k(y,oe,z),k(y,M,z),e(M,we),e(M,V),e(V,Te),e(M,ge),e(M,W),e(W,$e),e(M,pe),e(M,K),e(K,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),k(y,ee,z),k(y,j,z),e(j,P),e(P,ye),e(P,Q),e(Q,Ee),e(P,ve),e(P,I),e(I,he),e(j,Me),e(j,q),e(q,ze),e(q,J),e(J,Ce),e(q,me),e(q,G),e(G,je),e(j,ne),e(j,D),e(D,ue),e(D,X),e(X,qe),k(y,se,z),k(y,L,z),e(L,Pe),e(L,A),e(A,Le),e(L,Ae)},d(y){y&&t(d),y&&t(l),y&&t(p),y&&t(oe),y&&t(M),y&&t(ee),y&&t(j),y&&t(se),y&&t(L)}}}function Fz(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function xz(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function Rz(R){let d,g,c,u,_,l,p,E,le,Z,N,te,oe,M,we,V,Te,ge,W,$e,pe,K,Fe,_e,U,xe,be,H,Re,ke,ee,j,P,ye,Q,Ee,ve,I,he,Me,q,ze,J,Ce,me,G,je,ne,D,ue,X,qe,se,L,Pe,A,Le,Ae;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),u=n("transformers"),_=n(" accept two formats as input:"),l=h(),p=a("ul"),E=a("li"),le=n("having all inputs as keyword arguments (like PyTorch models), or"),Z=h(),N=a("li"),te=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),M=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a("code"),Te=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a("code"),$e=n("model.fit()"),pe=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Fe=n("fit()"),_e=n(" and "),U=a("code"),xe=n("predict()"),be=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=n("Functional"),ke=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),j=a("ul"),P=a("li"),ye=n("a single Tensor with "),Q=a("code"),Ee=n("input_ids"),ve=n(" only and nothing else: "),I=a("code"),he=n("model(input_ids)"),Me=h(),q=a("li"),ze=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),Ce=n("model([input_ids, attention_mask])"),me=n(" or "),G=a("code"),je=n("model([input_ids, attention_mask, token_type_ids])"),ne=h(),D=a("li"),ue=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=h(),L=a("p"),Pe=n(`Note that when creating models and layers with
`),A=a("a"),Le=n("subclassing"),Ae=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=r(z,"CODE",{});var He=i(c);u=s(He,"transformers"),He.forEach(t),_=s(z," accept two formats as input:"),z.forEach(t),l=m(y),p=r(y,"UL",{});var de=i(p);E=r(de,"LI",{});var Xe=i(E);le=s(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=m(de),N=r(de,"LI",{});var Ke=i(N);te=s(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),de.forEach(t),oe=m(y),M=r(y,"P",{});var C=i(M);we=s(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r(C,"CODE",{});var Ye=i(V);Te=s(Ye,"model.fit()"),Ye.forEach(t),ge=s(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r(C,"CODE",{});var Se=i(W);$e=s(Se,"model.fit()"),Se.forEach(t),pe=s(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(C,"CODE",{});var Ze=i(K);Fe=s(Ze,"fit()"),Ze.forEach(t),_e=s(C," and "),U=r(C,"CODE",{});var et=i(U);xe=s(et,"predict()"),et.forEach(t),be=s(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var We=i(H);Re=s(We,"Functional"),We.forEach(t),ke=s(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),ee=m(y),j=r(y,"UL",{});var S=i(j);P=r(S,"LI",{});var Y=i(P);ye=s(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Je=i(Q);Ee=s(Je,"input_ids"),Je.forEach(t),ve=s(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=s(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=m(S),q=r(S,"LI",{});var B=i(q);ze=s(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(B,"CODE",{});var Qe=i(J);Ce=s(Qe,"model([input_ids, attention_mask])"),Qe.forEach(t),me=s(B," or "),G=r(B,"CODE",{});var Be=i(G);je=s(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(t),B.forEach(t),ne=m(S),D=r(S,"LI",{});var Ne=i(D);ue=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Ve=i(X);qe=s(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),Ne.forEach(t),S.forEach(t),se=m(y),L=r(y,"P",{});var ce=i(L);Pe=s(ce,`Note that when creating models and layers with
`),A=r(ce,"A",{href:!0,rel:!0});var Ge=i(A);Le=s(Ge,"subclassing"),Ge.forEach(t),Ae=s(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){f(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(A,"rel","nofollow")},m(y,z){k(y,d,z),e(d,g),e(d,c),e(c,u),e(d,_),k(y,l,z),k(y,p,z),e(p,E),e(E,le),e(p,Z),e(p,N),e(N,te),k(y,oe,z),k(y,M,z),e(M,we),e(M,V),e(V,Te),e(M,ge),e(M,W),e(W,$e),e(M,pe),e(M,K),e(K,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),k(y,ee,z),k(y,j,z),e(j,P),e(P,ye),e(P,Q),e(Q,Ee),e(P,ve),e(P,I),e(I,he),e(j,Me),e(j,q),e(q,ze),e(q,J),e(J,Ce),e(q,me),e(q,G),e(G,je),e(j,ne),e(j,D),e(D,ue),e(D,X),e(X,qe),k(y,se,z),k(y,L,z),e(L,Pe),e(L,A),e(A,Le),e(L,Ae)},d(y){y&&t(d),y&&t(l),y&&t(p),y&&t(oe),y&&t(M),y&&t(ee),y&&t(j),y&&t(se),y&&t(L)}}}function Ez(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function Mz(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function zz(R){let d,g;return d=new ie({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){v(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){T(d,c,u),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function Cz(R){let d,g,c,u,_,l,p,E,le,Z,N,te,oe,M,we,V,Te,ge,W,$e,pe,K,Fe,_e,U,xe,be,H,Re,ke,ee,j,P,ye,Q,Ee,ve,I,he,Me,q,ze,J,Ce,me,G,je,ne,D,ue,X,qe,se,L,Pe,A,Le,Ae;return{c(){d=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),u=n("transformers"),_=n(" accept two formats as input:"),l=h(),p=a("ul"),E=a("li"),le=n("having all inputs as keyword arguments (like PyTorch models), or"),Z=h(),N=a("li"),te=n("having all inputs as a list, tuple or dict in the first positional argument."),oe=h(),M=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a("code"),Te=n("model.fit()"),ge=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a("code"),$e=n("model.fit()"),pe=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Fe=n("fit()"),_e=n(" and "),U=a("code"),xe=n("predict()"),be=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Re=n("Functional"),ke=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),j=a("ul"),P=a("li"),ye=n("a single Tensor with "),Q=a("code"),Ee=n("input_ids"),ve=n(" only and nothing else: "),I=a("code"),he=n("model(input_ids)"),Me=h(),q=a("li"),ze=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),Ce=n("model([input_ids, attention_mask])"),me=n(" or "),G=a("code"),je=n("model([input_ids, attention_mask, token_type_ids])"),ne=h(),D=a("li"),ue=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=h(),L=a("p"),Pe=n(`Note that when creating models and layers with
`),A=a("a"),Le=n("subclassing"),Ae=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var z=i(d);g=s(z,"TensorFlow models and layers in "),c=r(z,"CODE",{});var He=i(c);u=s(He,"transformers"),He.forEach(t),_=s(z," accept two formats as input:"),z.forEach(t),l=m(y),p=r(y,"UL",{});var de=i(p);E=r(de,"LI",{});var Xe=i(E);le=s(Xe,"having all inputs as keyword arguments (like PyTorch models), or"),Xe.forEach(t),Z=m(de),N=r(de,"LI",{});var Ke=i(N);te=s(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),de.forEach(t),oe=m(y),M=r(y,"P",{});var C=i(M);we=s(C,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r(C,"CODE",{});var Ye=i(V);Te=s(Ye,"model.fit()"),Ye.forEach(t),ge=s(C,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r(C,"CODE",{});var Se=i(W);$e=s(Se,"model.fit()"),Se.forEach(t),pe=s(C,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(C,"CODE",{});var Ze=i(K);Fe=s(Ze,"fit()"),Ze.forEach(t),_e=s(C," and "),U=r(C,"CODE",{});var et=i(U);xe=s(et,"predict()"),et.forEach(t),be=s(C,`, such as when creating your own layers or models with
the Keras `),H=r(C,"CODE",{});var We=i(H);Re=s(We,"Functional"),We.forEach(t),ke=s(C,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),C.forEach(t),ee=m(y),j=r(y,"UL",{});var S=i(j);P=r(S,"LI",{});var Y=i(P);ye=s(Y,"a single Tensor with "),Q=r(Y,"CODE",{});var Je=i(Q);Ee=s(Je,"input_ids"),Je.forEach(t),ve=s(Y," only and nothing else: "),I=r(Y,"CODE",{});var Oe=i(I);he=s(Oe,"model(input_ids)"),Oe.forEach(t),Y.forEach(t),Me=m(S),q=r(S,"LI",{});var B=i(q);ze=s(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(B,"CODE",{});var Qe=i(J);Ce=s(Qe,"model([input_ids, attention_mask])"),Qe.forEach(t),me=s(B," or "),G=r(B,"CODE",{});var Be=i(G);je=s(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(t),B.forEach(t),ne=m(S),D=r(S,"LI",{});var Ne=i(D);ue=s(Ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),X=r(Ne,"CODE",{});var Ve=i(X);qe=s(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),Ne.forEach(t),S.forEach(t),se=m(y),L=r(y,"P",{});var ce=i(L);Pe=s(ce,`Note that when creating models and layers with
`),A=r(ce,"A",{href:!0,rel:!0});var Ge=i(A);Le=s(Ge,"subclassing"),Ge.forEach(t),Ae=s(ce,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ce.forEach(t),this.h()},h(){f(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(A,"rel","nofollow")},m(y,z){k(y,d,z),e(d,g),e(d,c),e(c,u),e(d,_),k(y,l,z),k(y,p,z),e(p,E),e(E,le),e(p,Z),e(p,N),e(N,te),k(y,oe,z),k(y,M,z),e(M,we),e(M,V),e(V,Te),e(M,ge),e(M,W),e(W,$e),e(M,pe),e(M,K),e(K,Fe),e(M,_e),e(M,U),e(U,xe),e(M,be),e(M,H),e(H,Re),e(M,ke),k(y,ee,z),k(y,j,z),e(j,P),e(P,ye),e(P,Q),e(Q,Ee),e(P,ve),e(P,I),e(I,he),e(j,Me),e(j,q),e(q,ze),e(q,J),e(J,Ce),e(q,me),e(q,G),e(G,je),e(j,ne),e(j,D),e(D,ue),e(D,X),e(X,qe),k(y,se,z),k(y,L,z),e(L,Pe),e(L,A),e(A,Le),e(L,Ae)},d(y){y&&t(d),y&&t(l),y&&t(p),y&&t(oe),y&&t(M),y&&t(ee),y&&t(j),y&&t(se),y&&t(L)}}}function jz(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function qz(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, TFRobertaForQuestionAnswering
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
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function Pz(R){let d,g;return d=new ie({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.86</span>`}}),{c(){v(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){T(d,c,u),g=!0},p:re,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function Lz(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function Az(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaModel

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaModel.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaModel.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function Oz(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function Nz(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function Iz(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function Dz(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForMaskedLM

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForMaskedLM.from_pretrained("roberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function Sz(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function Wz(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForSequenceClassification

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForSequenceClassification.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function Bz(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function Uz(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function Hz(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function Qz(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForTokenClassification

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForTokenClassification.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function Vz(R){let d,g,c,u,_;return{c(){d=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),_=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var E=i(c);u=s(E,"Module"),E.forEach(t),_=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,_)},d(l){l&&t(d)}}}function Kz(R){let d,g,c,u,_;return u=new ie({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=a("p"),g=n("Example:"),c=h(),v(u.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),T(u,l,p),_=!0},p:re,i(l){_||($(u.$$.fragment,l),_=!0)},o(l){F(u.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(u,l)}}}function Jz(R){let d,g,c,u,_,l,p,E,le,Z,N,te,oe,M,we,V,Te,ge,W,$e,pe,K,Fe,_e,U,xe,be,H,Re,ke,ee,j,P,ye,Q,Ee,ve,I,he,Me,q,ze,J,Ce,me,G,je,ne,D,ue,X,qe,se,L,Pe,A,Le,Ae,y,z,He,de,Xe,Ke,C,Ye,Se,Ze,et,We,S,Y,Je,Oe,B,Qe,Be,Ne,Ve,ce,Ge,yt,Oa,ug,co,fg,id,gg,_g,ld,bg,kg,Na,yg,vg,wg,Lo,Tg,dd,$g,Fg,cd,xg,Rg,Eg,Ao,Mg,pd,zg,Cg,hd,jg,qg,Pg,An,ou,Oo,On,xc,Ia,Lg,Rc,Ag,nu,Ie,Da,Og,Ec,Ng,Ig,Mc,Dg,Sg,Nn,Wg,Sa,Bg,zc,Ug,Hg,Qg,In,Vg,Wa,Kg,md,Jg,Gg,Xg,vo,Ba,Yg,Cc,Zg,e_,Ua,ud,t_,jc,o_,n_,fd,s_,qc,a_,r_,Dn,Ha,i_,Qa,l_,Pc,d_,c_,p_,Sn,Va,h_,Lc,m_,u_,gd,Ka,su,No,Wn,Ac,Ja,f_,Oc,g_,au,tt,Ga,__,Xa,b_,Nc,k_,y_,v_,Ic,w_,T_,Bn,$_,Ya,F_,Dc,x_,R_,E_,Un,M_,Za,z_,_d,C_,j_,q_,bd,er,ru,Io,Hn,Sc,tr,P_,Wc,L_,iu,ot,or,A_,Bc,O_,N_,nr,I_,kd,D_,S_,W_,sr,B_,ar,U_,H_,Q_,rr,V_,Uc,K_,J_,G_,pt,X_,Hc,Y_,Z_,Qc,eb,tb,Vc,ob,nb,Kc,sb,ab,Jc,rb,ib,Gc,lb,db,cb,Qn,pb,Xc,hb,mb,ir,ub,fb,Ut,lr,gb,Do,_b,yd,bb,kb,Yc,yb,vb,wb,Vn,Tb,Kn,lu,So,Jn,Zc,dr,$b,ep,Fb,du,vt,cr,xb,pr,Rb,tp,Eb,Mb,zb,hr,Cb,vd,jb,qb,Pb,mr,Lb,ur,Ab,Ob,Nb,Ht,fr,Ib,Wo,Db,wd,Sb,Wb,op,Bb,Ub,Hb,Gn,Qb,Xn,cu,Bo,Yn,np,gr,Vb,sp,Kb,pu,wt,_r,Jb,br,Gb,ap,Xb,Yb,Zb,kr,ek,Td,tk,ok,nk,yr,sk,vr,ak,rk,ik,Rt,wr,lk,Uo,dk,$d,ck,pk,rp,hk,mk,uk,Zn,fk,es,gk,ts,hu,Ho,os,ip,Tr,_k,lp,bk,mu,Tt,$r,kk,dp,yk,vk,Fr,wk,Fd,Tk,$k,Fk,xr,xk,Rr,Rk,Ek,Mk,ct,Er,zk,Qo,Ck,xd,jk,qk,cp,Pk,Lk,Ak,ns,Ok,ss,Nk,as,Ik,rs,Dk,is,uu,Vo,ls,pp,Mr,Sk,hp,Wk,fu,$t,zr,Bk,mp,Uk,Hk,Cr,Qk,Rd,Vk,Kk,Jk,jr,Gk,qr,Xk,Yk,Zk,Qt,Pr,ey,Ko,ty,Ed,oy,ny,up,sy,ay,ry,ds,iy,cs,gu,Jo,ps,fp,Lr,ly,gp,dy,_u,Ft,Ar,cy,_p,py,hy,Or,my,Md,uy,fy,gy,Nr,_y,Ir,by,ky,yy,Et,Dr,vy,Go,wy,zd,Ty,$y,bp,Fy,xy,Ry,hs,Ey,ms,My,us,bu,Xo,fs,kp,Sr,zy,yp,Cy,ku,xt,Wr,jy,Yo,qy,vp,Py,Ly,wp,Ay,Oy,Ny,Br,Iy,Cd,Dy,Sy,Wy,Ur,By,Hr,Uy,Hy,Qy,Mt,Qr,Vy,Zo,Ky,jd,Jy,Gy,Tp,Xy,Yy,Zy,gs,ev,_s,tv,bs,yu,en,ks,$p,Vr,ov,Fp,nv,vu,ht,Kr,sv,xp,av,rv,Jr,iv,qd,lv,dv,cv,Gr,pv,Xr,hv,mv,uv,ys,fv,Vt,Yr,gv,tn,_v,Pd,bv,kv,Rp,yv,vv,wv,vs,Tv,ws,wu,on,Ts,Ep,Zr,$v,Mp,Fv,Tu,nn,ei,xv,Kt,ti,Rv,sn,Ev,Ld,Mv,zv,zp,Cv,jv,qv,$s,Pv,Fs,$u,an,xs,Cp,oi,Lv,jp,Av,Fu,mt,ni,Ov,si,Nv,qp,Iv,Dv,Sv,ai,Wv,Ad,Bv,Uv,Hv,ri,Qv,ii,Vv,Kv,Jv,Rs,Gv,zt,li,Xv,rn,Yv,Od,Zv,ew,Pp,tw,ow,nw,Es,sw,Ms,aw,zs,xu,ln,Cs,Lp,di,rw,Ap,iw,Ru,ut,ci,lw,Op,dw,cw,pi,pw,Nd,hw,mw,uw,hi,fw,mi,gw,_w,bw,js,kw,Ct,ui,yw,dn,vw,Id,ww,Tw,Np,$w,Fw,xw,qs,Rw,Ps,Ew,Ls,Eu,cn,As,Ip,fi,Mw,Dp,zw,Mu,ft,gi,Cw,Sp,jw,qw,_i,Pw,Dd,Lw,Aw,Ow,bi,Nw,ki,Iw,Dw,Sw,Os,Ww,Jt,yi,Bw,pn,Uw,Sd,Hw,Qw,Wp,Vw,Kw,Jw,Ns,Gw,Is,zu,hn,Ds,Bp,vi,Xw,Up,Yw,Cu,gt,wi,Zw,Hp,eT,tT,Ti,oT,Wd,nT,sT,aT,$i,rT,Fi,iT,lT,dT,Ss,cT,jt,xi,pT,mn,hT,Bd,mT,uT,Qp,fT,gT,_T,Ws,bT,Bs,kT,Us,ju,un,Hs,Vp,Ri,yT,Kp,vT,qu,_t,Ei,wT,fn,TT,Jp,$T,FT,Gp,xT,RT,ET,Mi,MT,Ud,zT,CT,jT,zi,qT,Ci,PT,LT,AT,Qs,OT,qt,ji,NT,gn,IT,Hd,DT,ST,Xp,WT,BT,UT,Vs,HT,Ks,QT,Js,Pu,_n,Gs,Yp,qi,VT,Zp,KT,Lu,nt,Pi,JT,eh,GT,XT,Li,YT,Qd,ZT,e$,t$,Ai,o$,Oi,n$,s$,a$,th,r$,i$,po,oh,Ni,l$,d$,nh,Ii,c$,p$,sh,Di,h$,m$,ah,Si,u$,f$,Gt,Wi,g$,bn,_$,rh,b$,k$,ih,y$,v$,w$,Xs,T$,Ys,Au,kn,Zs,lh,Bi,$$,dh,F$,Ou,st,Ui,x$,ch,R$,E$,Hi,M$,Vd,z$,C$,j$,Qi,q$,Vi,P$,L$,A$,ph,O$,N$,ho,hh,Ki,I$,D$,mh,Ji,S$,W$,uh,Gi,B$,U$,fh,Xi,H$,Q$,Xt,Yi,V$,yn,K$,gh,J$,G$,_h,X$,Y$,Z$,ea,e1,ta,Nu,vn,oa,bh,Zi,t1,kh,o1,Iu,at,el,n1,tl,s1,yh,a1,r1,i1,ol,l1,Kd,d1,c1,p1,nl,h1,sl,m1,u1,f1,vh,g1,_1,mo,wh,al,b1,k1,Th,rl,y1,v1,$h,il,w1,T1,Fh,ll,$1,F1,Yt,dl,x1,wn,R1,xh,E1,M1,Rh,z1,C1,j1,na,q1,sa,Du,Tn,aa,Eh,cl,P1,Mh,L1,Su,rt,pl,A1,zh,O1,N1,hl,I1,Jd,D1,S1,W1,ml,B1,ul,U1,H1,Q1,Ch,V1,K1,uo,jh,fl,J1,G1,qh,gl,X1,Y1,Ph,_l,Z1,e2,Lh,bl,t2,o2,Zt,kl,n2,$n,s2,Ah,a2,r2,Oh,i2,l2,d2,ra,c2,ia,Wu,Fn,la,Nh,yl,p2,Ih,h2,Bu,it,vl,m2,Dh,u2,f2,wl,g2,Gd,_2,b2,k2,Tl,y2,$l,v2,w2,T2,Sh,$2,F2,fo,Wh,Fl,x2,R2,Bh,xl,E2,M2,Uh,Rl,z2,C2,Hh,El,j2,q2,eo,Ml,P2,xn,L2,Qh,A2,O2,Vh,N2,I2,D2,da,S2,ca,Uu,Rn,pa,Kh,zl,W2,Jh,B2,Hu,lt,Cl,U2,Gh,H2,Q2,jl,V2,Xd,K2,J2,G2,ql,X2,Pl,Y2,Z2,eF,Xh,tF,oF,go,Yh,Ll,nF,sF,Zh,Al,aF,rF,em,Ol,iF,lF,tm,Nl,dF,cF,to,Il,pF,En,hF,om,mF,uF,nm,fF,gF,_F,ha,bF,ma,Qu,Mn,ua,sm,Dl,kF,am,yF,Vu,dt,Sl,vF,zn,wF,rm,TF,$F,im,FF,xF,RF,Wl,EF,Yd,MF,zF,CF,Bl,jF,Ul,qF,PF,LF,lm,AF,OF,_o,dm,Hl,NF,IF,cm,Ql,DF,SF,pm,Vl,WF,BF,hm,Kl,UF,HF,oo,Jl,QF,Cn,VF,mm,KF,JF,um,GF,XF,YF,fa,ZF,ga,Ku;return l=new De({}),M=new De({}),Be=new De({}),Oa=new O({props:{name:"class transformers.RobertaConfig",anchor:"transformers.RobertaConfig",parameters:[{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/configuration_roberta.py#L37"}}),An=new ae({props:{anchor:"transformers.RobertaConfig.example",$$slots:{default:[DM]},$$scope:{ctx:R}}}),Ia=new De({}),Da=new O({props:{name:"class transformers.RobertaTokenizer",anchor:"transformers.RobertaTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
other word. (RoBERTa tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/tokenization_roberta.py#L107"}}),Nn=new ae({props:{anchor:"transformers.RobertaTokenizer.example",$$slots:{default:[SM]},$$scope:{ctx:R}}}),In=new fe({props:{$$slots:{default:[WM]},$$scope:{ctx:R}}}),Ba=new O({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/tokenization_roberta.py#L344",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ha=new O({props:{name:"get_special_tokens_mask",anchor:"transformers.RobertaTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/tokenization_roberta.py#L369",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Va=new O({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/tokenization_roberta.py#L396",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ka=new O({props:{name:"save_vocabulary",anchor:"transformers.RobertaTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/tokenization_roberta.py#L315"}}),Ja=new De({}),Ga=new O({props:{name:"class transformers.RobertaTokenizerFast",anchor:"transformers.RobertaTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RobertaTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether the post processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/tokenization_roberta_fast.py#L76"}}),Bn=new ae({props:{anchor:"transformers.RobertaTokenizerFast.example",$$slots:{default:[BM]},$$scope:{ctx:R}}}),Un=new fe({props:{$$slots:{default:[UM]},$$scope:{ctx:R}}}),er=new O({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RobertaTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/tokenization_roberta_fast.py#L279"}}),tr=new De({}),or=new O({props:{name:"class transformers.RobertaModel",anchor:"transformers.RobertaModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.RobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L697"}}),lr=new O({props:{name:"forward",anchor:"transformers.RobertaModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L742",returnDescription:`
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
`}}),Vn=new fe({props:{$$slots:{default:[HM]},$$scope:{ctx:R}}}),Kn=new ae({props:{anchor:"transformers.RobertaModel.forward.example",$$slots:{default:[QM]},$$scope:{ctx:R}}}),dr=new De({}),cr=new O({props:{name:"class transformers.RobertaForCausalLM",anchor:"transformers.RobertaForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L883"}}),fr=new O({props:{name:"forward",anchor:"transformers.RobertaForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Tuple[typing.Tuple[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L909",returnDescription:`
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
`}}),Gn=new fe({props:{$$slots:{default:[VM]},$$scope:{ctx:R}}}),Xn=new ae({props:{anchor:"transformers.RobertaForCausalLM.forward.example",$$slots:{default:[KM]},$$scope:{ctx:R}}}),gr=new De({}),_r=new O({props:{name:"class transformers.RobertaForMaskedLM",anchor:"transformers.RobertaForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L1035"}}),wr=new O({props:{name:"forward",anchor:"transformers.RobertaForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L1064",returnDescription:`
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
`}}),Zn=new fe({props:{$$slots:{default:[JM]},$$scope:{ctx:R}}}),es=new ae({props:{anchor:"transformers.RobertaForMaskedLM.forward.example",$$slots:{default:[GM]},$$scope:{ctx:R}}}),ts=new ae({props:{anchor:"transformers.RobertaForMaskedLM.forward.example-2",$$slots:{default:[XM]},$$scope:{ctx:R}}}),Tr=new De({}),$r=new O({props:{name:"class transformers.RobertaForSequenceClassification",anchor:"transformers.RobertaForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L1166"}}),Er=new O({props:{name:"forward",anchor:"transformers.RobertaForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L1180",returnDescription:`
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
`}}),ns=new fe({props:{$$slots:{default:[YM]},$$scope:{ctx:R}}}),ss=new ae({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example",$$slots:{default:[ZM]},$$scope:{ctx:R}}}),as=new ae({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example-2",$$slots:{default:[ez]},$$scope:{ctx:R}}}),rs=new ae({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example-3",$$slots:{default:[tz]},$$scope:{ctx:R}}}),is=new ae({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example-4",$$slots:{default:[oz]},$$scope:{ctx:R}}}),Mr=new De({}),zr=new O({props:{name:"class transformers.RobertaForMultipleChoice",anchor:"transformers.RobertaForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L1266"}}),Pr=new O({props:{name:"forward",anchor:"transformers.RobertaForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
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
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L1279",returnDescription:`
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
`}}),ds=new fe({props:{$$slots:{default:[nz]},$$scope:{ctx:R}}}),cs=new ae({props:{anchor:"transformers.RobertaForMultipleChoice.forward.example",$$slots:{default:[sz]},$$scope:{ctx:R}}}),Lr=new De({}),Ar=new O({props:{name:"class transformers.RobertaForTokenClassification",anchor:"transformers.RobertaForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L1359"}}),Dr=new O({props:{name:"forward",anchor:"transformers.RobertaForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L1377",returnDescription:`
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
`}}),hs=new fe({props:{$$slots:{default:[az]},$$scope:{ctx:R}}}),ms=new ae({props:{anchor:"transformers.RobertaForTokenClassification.forward.example",$$slots:{default:[rz]},$$scope:{ctx:R}}}),us=new ae({props:{anchor:"transformers.RobertaForTokenClassification.forward.example-2",$$slots:{default:[iz]},$$scope:{ctx:R}}}),Sr=new De({}),Wr=new O({props:{name:"class transformers.RobertaForQuestionAnswering",anchor:"transformers.RobertaForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L1468"}}),Qr=new O({props:{name:"forward",anchor:"transformers.RobertaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L1482",returnDescription:`
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
`}}),gs=new fe({props:{$$slots:{default:[lz]},$$scope:{ctx:R}}}),_s=new ae({props:{anchor:"transformers.RobertaForQuestionAnswering.forward.example",$$slots:{default:[dz]},$$scope:{ctx:R}}}),bs=new ae({props:{anchor:"transformers.RobertaForQuestionAnswering.forward.example-2",$$slots:{default:[cz]},$$scope:{ctx:R}}}),Vr=new De({}),Kr=new O({props:{name:"class transformers.TFRobertaModel",anchor:"transformers.TFRobertaModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L914"}}),ys=new fe({props:{$$slots:{default:[pz]},$$scope:{ctx:R}}}),Yr=new O({props:{name:"call",anchor:"transformers.TFRobertaModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L919",returnDescription:`
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
`}}),vs=new fe({props:{$$slots:{default:[hz]},$$scope:{ctx:R}}}),ws=new ae({props:{anchor:"transformers.TFRobertaModel.call.example",$$slots:{default:[mz]},$$scope:{ctx:R}}}),Zr=new De({}),ei=new O({props:{name:"class transformers.TFRobertaForCausalLM",anchor:"transformers.TFRobertaForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1143"}}),ti=new O({props:{name:"call",anchor:"transformers.TFRobertaForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForCausalLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1176",returnDescription:`
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
`}}),$s=new fe({props:{$$slots:{default:[uz]},$$scope:{ctx:R}}}),Fs=new ae({props:{anchor:"transformers.TFRobertaForCausalLM.call.example",$$slots:{default:[fz]},$$scope:{ctx:R}}}),oi=new De({}),ni=new O({props:{name:"class transformers.TFRobertaForMaskedLM",anchor:"transformers.TFRobertaForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1058"}}),Rs=new fe({props:{$$slots:{default:[gz]},$$scope:{ctx:R}}}),li=new O({props:{name:"call",anchor:"transformers.TFRobertaForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1075",returnDescription:`
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
`}}),Es=new fe({props:{$$slots:{default:[_z]},$$scope:{ctx:R}}}),Ms=new ae({props:{anchor:"transformers.TFRobertaForMaskedLM.call.example",$$slots:{default:[bz]},$$scope:{ctx:R}}}),zs=new ae({props:{anchor:"transformers.TFRobertaForMaskedLM.call.example-2",$$slots:{default:[kz]},$$scope:{ctx:R}}}),di=new De({}),ci=new O({props:{name:"class transformers.TFRobertaForSequenceClassification",anchor:"transformers.TFRobertaForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1323"}}),js=new fe({props:{$$slots:{default:[yz]},$$scope:{ctx:R}}}),ui=new O({props:{name:"call",anchor:"transformers.TFRobertaForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1334",returnDescription:`
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
`}}),qs=new fe({props:{$$slots:{default:[vz]},$$scope:{ctx:R}}}),Ps=new ae({props:{anchor:"transformers.TFRobertaForSequenceClassification.call.example",$$slots:{default:[wz]},$$scope:{ctx:R}}}),Ls=new ae({props:{anchor:"transformers.TFRobertaForSequenceClassification.call.example-2",$$slots:{default:[Tz]},$$scope:{ctx:R}}}),fi=new De({}),gi=new O({props:{name:"class transformers.TFRobertaForMultipleChoice",anchor:"transformers.TFRobertaForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1407"}}),Os=new fe({props:{$$slots:{default:[$z]},$$scope:{ctx:R}}}),yi=new O({props:{name:"call",anchor:"transformers.TFRobertaForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
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
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1431",returnDescription:`
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
`}}),Ns=new fe({props:{$$slots:{default:[Fz]},$$scope:{ctx:R}}}),Is=new ae({props:{anchor:"transformers.TFRobertaForMultipleChoice.call.example",$$slots:{default:[xz]},$$scope:{ctx:R}}}),vi=new De({}),wi=new O({props:{name:"class transformers.TFRobertaForTokenClassification",anchor:"transformers.TFRobertaForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1528"}}),Ss=new fe({props:{$$slots:{default:[Rz]},$$scope:{ctx:R}}}),xi=new O({props:{name:"call",anchor:"transformers.TFRobertaForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1546",returnDescription:`
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
`}}),Ws=new fe({props:{$$slots:{default:[Ez]},$$scope:{ctx:R}}}),Bs=new ae({props:{anchor:"transformers.TFRobertaForTokenClassification.call.example",$$slots:{default:[Mz]},$$scope:{ctx:R}}}),Us=new ae({props:{anchor:"transformers.TFRobertaForTokenClassification.call.example-2",$$slots:{default:[zz]},$$scope:{ctx:R}}}),Ri=new De({}),Ei=new O({props:{name:"class transformers.TFRobertaForQuestionAnswering",anchor:"transformers.TFRobertaForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1619"}}),Qs=new fe({props:{$$slots:{default:[Cz]},$$scope:{ctx:R}}}),ji=new O({props:{name:"call",anchor:"transformers.TFRobertaForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1632",returnDescription:`
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
`}}),Vs=new fe({props:{$$slots:{default:[jz]},$$scope:{ctx:R}}}),Ks=new ae({props:{anchor:"transformers.TFRobertaForQuestionAnswering.call.example",$$slots:{default:[qz]},$$scope:{ctx:R}}}),Js=new ae({props:{anchor:"transformers.TFRobertaForQuestionAnswering.call.example-2",$$slots:{default:[Pz]},$$scope:{ctx:R}}}),qi=new De({}),Pi=new O({props:{name:"class transformers.FlaxRobertaModel",anchor:"transformers.FlaxRobertaModel",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L989"}}),Wi=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Xs=new fe({props:{$$slots:{default:[Lz]},$$scope:{ctx:R}}}),Ys=new ae({props:{anchor:"transformers.FlaxRobertaModel.__call__.example",$$slots:{default:[Az]},$$scope:{ctx:R}}}),Bi=new De({}),Ui=new O({props:{name:"class transformers.FlaxRobertaForCausalLM",anchor:"transformers.FlaxRobertaForCausalLM",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L1458"}}),Yi=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),ea=new fe({props:{$$slots:{default:[Oz]},$$scope:{ctx:R}}}),ta=new ae({props:{anchor:"transformers.FlaxRobertaForCausalLM.__call__.example",$$slots:{default:[Nz]},$$scope:{ctx:R}}}),Zi=new De({}),el=new O({props:{name:"class transformers.FlaxRobertaForMaskedLM",anchor:"transformers.FlaxRobertaForMaskedLM",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L1057"}}),dl=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),na=new fe({props:{$$slots:{default:[Iz]},$$scope:{ctx:R}}}),sa=new ae({props:{anchor:"transformers.FlaxRobertaForMaskedLM.__call__.example",$$slots:{default:[Dz]},$$scope:{ctx:R}}}),cl=new De({}),pl=new O({props:{name:"class transformers.FlaxRobertaForSequenceClassification",anchor:"transformers.FlaxRobertaForSequenceClassification",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L1130"}}),kl=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ra=new fe({props:{$$slots:{default:[Sz]},$$scope:{ctx:R}}}),ia=new ae({props:{anchor:"transformers.FlaxRobertaForSequenceClassification.__call__.example",$$slots:{default:[Wz]},$$scope:{ctx:R}}}),yl=new De({}),vl=new O({props:{name:"class transformers.FlaxRobertaForMultipleChoice",anchor:"transformers.FlaxRobertaForMultipleChoice",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L1212"}}),Ml=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
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
`}}),da=new fe({props:{$$slots:{default:[Bz]},$$scope:{ctx:R}}}),ca=new ae({props:{anchor:"transformers.FlaxRobertaForMultipleChoice.__call__.example",$$slots:{default:[Uz]},$$scope:{ctx:R}}}),zl=new De({}),Cl=new O({props:{name:"class transformers.FlaxRobertaForTokenClassification",anchor:"transformers.FlaxRobertaForTokenClassification",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L1295"}}),Il=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ha=new fe({props:{$$slots:{default:[Hz]},$$scope:{ctx:R}}}),ma=new ae({props:{anchor:"transformers.FlaxRobertaForTokenClassification.__call__.example",$$slots:{default:[Qz]},$$scope:{ctx:R}}}),Dl=new De({}),Sl=new O({props:{name:"class transformers.FlaxRobertaForQuestionAnswering",anchor:"transformers.FlaxRobertaForQuestionAnswering",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L1373"}}),Jl=new O({props:{name:"__call__",anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),fa=new fe({props:{$$slots:{default:[Vz]},$$scope:{ctx:R}}}),ga=new ae({props:{anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__.example",$$slots:{default:[Kz]},$$scope:{ctx:R}}}),{c(){d=a("meta"),g=h(),c=a("h1"),u=a("a"),_=a("span"),v(l.$$.fragment),p=h(),E=a("span"),le=n("RoBERTa"),Z=h(),N=a("h2"),te=a("a"),oe=a("span"),v(M.$$.fragment),we=h(),V=a("span"),Te=n("Overview"),ge=h(),W=a("p"),$e=n("The RoBERTa model was proposed in "),pe=a("a"),K=n("RoBERTa: A Robustly Optimized BERT Pretraining Approach"),Fe=n(` by Yinhan Liu, Myle Ott, Naman Goyal, Jingfei Du, Mandar Joshi, Danqi Chen, Omer
Levy, Mike Lewis, Luke Zettlemoyer, Veselin Stoyanov. It is based on Google\u2019s BERT model released in 2018.`),_e=h(),U=a("p"),xe=n(`It builds on BERT and modifies key hyperparameters, removing the next-sentence pretraining objective and training with
much larger mini-batches and learning rates.`),be=h(),H=a("p"),Re=n("The abstract from the paper is the following:"),ke=h(),ee=a("p"),j=a("em"),P=n(`Language model pretraining has led to significant performance gains but careful comparison between different
approaches is challenging. Training is computationally expensive, often done on private datasets of different sizes,
and, as we will show, hyperparameter choices have significant impact on the final results. We present a replication
study of BERT pretraining (Devlin et al., 2019) that carefully measures the impact of many key hyperparameters and
training data size. We find that BERT was significantly undertrained, and can match or exceed the performance of every
model published after it. Our best model achieves state-of-the-art results on GLUE, RACE and SQuAD. These results
highlight the importance of previously overlooked design choices, and raise questions about the source of recently
reported improvements. We release our models and code.`),ye=h(),Q=a("p"),Ee=n("Tips:"),ve=h(),I=a("ul"),he=a("li"),Me=n("This implementation is the same as "),q=a("a"),ze=n("BertModel"),J=n(` with a tiny embeddings tweak as well as a setup
for Roberta pretrained models.`),Ce=h(),me=a("li"),G=n(`RoBERTa has the same architecture as BERT, but uses a byte-level BPE as a tokenizer (same as GPT-2) and uses a
different pretraining scheme.`),je=h(),ne=a("li"),D=n("RoBERTa doesn\u2019t have "),ue=a("code"),X=n("token_type_ids"),qe=n(`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),se=a("code"),L=n("tokenizer.sep_token"),Pe=n(" (or "),A=a("code"),Le=n("</s>"),Ae=n(")"),y=h(),z=a("li"),He=a("a"),de=n("CamemBERT"),Xe=n(" is a wrapper around RoBERTa. Refer to this page for usage examples."),Ke=h(),C=a("p"),Ye=n("This model was contributed by "),Se=a("a"),Ze=n("julien-c"),et=n(". The original code can be found "),We=a("a"),S=n("here"),Y=n("."),Je=h(),Oe=a("h2"),B=a("a"),Qe=a("span"),v(Be.$$.fragment),Ne=h(),Ve=a("span"),ce=n("RobertaConfig"),Ge=h(),yt=a("div"),v(Oa.$$.fragment),ug=h(),co=a("p"),fg=n("This is the configuration class to store the configuration of a "),id=a("a"),gg=n("RobertaModel"),_g=n(" or a "),ld=a("a"),bg=n("TFRobertaModel"),kg=n(`. It is
used to instantiate a RoBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the RoBERTa
`),Na=a("a"),yg=n("roberta-base"),vg=n(" architecture."),wg=h(),Lo=a("p"),Tg=n("Configuration objects inherit from "),dd=a("a"),$g=n("PretrainedConfig"),Fg=n(` and can be used to control the model outputs. Read the
documentation from `),cd=a("a"),xg=n("PretrainedConfig"),Rg=n(" for more information."),Eg=h(),Ao=a("p"),Mg=n("The "),pd=a("a"),zg=n("RobertaConfig"),Cg=n(" class directly inherits "),hd=a("a"),jg=n("BertConfig"),qg=n(`. It reuses the same defaults. Please check the parent
class for more information.`),Pg=h(),v(An.$$.fragment),ou=h(),Oo=a("h2"),On=a("a"),xc=a("span"),v(Ia.$$.fragment),Lg=h(),Rc=a("span"),Ag=n("RobertaTokenizer"),nu=h(),Ie=a("div"),v(Da.$$.fragment),Og=h(),Ec=a("p"),Ng=n("Constructs a RoBERTa tokenizer, derived from the GPT-2 tokenizer, using byte-level Byte-Pair-Encoding."),Ig=h(),Mc=a("p"),Dg=n("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Sg=h(),v(Nn.$$.fragment),Wg=h(),Sa=a("p"),Bg=n("You can get around that behavior by passing "),zc=a("code"),Ug=n("add_prefix_space=True"),Hg=n(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Qg=h(),v(In.$$.fragment),Vg=h(),Wa=a("p"),Kg=n("This tokenizer inherits from "),md=a("a"),Jg=n("PreTrainedTokenizer"),Gg=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Xg=h(),vo=a("div"),v(Ba.$$.fragment),Yg=h(),Cc=a("p"),Zg=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoBERTa sequence has the following format:`),e_=h(),Ua=a("ul"),ud=a("li"),t_=n("single sequence: "),jc=a("code"),o_=n("<s> X </s>"),n_=h(),fd=a("li"),s_=n("pair of sequences: "),qc=a("code"),a_=n("<s> A </s></s> B </s>"),r_=h(),Dn=a("div"),v(Ha.$$.fragment),i_=h(),Qa=a("p"),l_=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Pc=a("code"),d_=n("prepare_for_model"),c_=n(" method."),p_=h(),Sn=a("div"),v(Va.$$.fragment),h_=h(),Lc=a("p"),m_=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. RoBERTa does not
make use of token type ids, therefore a list of zeros is returned.`),u_=h(),gd=a("div"),v(Ka.$$.fragment),su=h(),No=a("h2"),Wn=a("a"),Ac=a("span"),v(Ja.$$.fragment),f_=h(),Oc=a("span"),g_=n("RobertaTokenizerFast"),au=h(),tt=a("div"),v(Ga.$$.fragment),__=h(),Xa=a("p"),b_=n("Construct a \u201Cfast\u201D RoBERTa tokenizer (backed by HuggingFace\u2019s "),Nc=a("em"),k_=n("tokenizers"),y_=n(` library), derived from the GPT-2
tokenizer, using byte-level Byte-Pair-Encoding.`),v_=h(),Ic=a("p"),w_=n("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),T_=h(),v(Bn.$$.fragment),$_=h(),Ya=a("p"),F_=n("You can get around that behavior by passing "),Dc=a("code"),x_=n("add_prefix_space=True"),R_=n(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),E_=h(),v(Un.$$.fragment),M_=h(),Za=a("p"),z_=n("This tokenizer inherits from "),_d=a("a"),C_=n("PreTrainedTokenizerFast"),j_=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),q_=h(),bd=a("div"),v(er.$$.fragment),ru=h(),Io=a("h2"),Hn=a("a"),Sc=a("span"),v(tr.$$.fragment),P_=h(),Wc=a("span"),L_=n("RobertaModel"),iu=h(),ot=a("div"),v(or.$$.fragment),A_=h(),Bc=a("p"),O_=n("The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),N_=h(),nr=a("p"),I_=n("This model inherits from "),kd=a("a"),D_=n("PreTrainedModel"),S_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),W_=h(),sr=a("p"),B_=n("This model is also a PyTorch "),ar=a("a"),U_=n("torch.nn.Module"),H_=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Q_=h(),rr=a("p"),V_=n(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Uc=a("em"),K_=n(`Attention is
all you need`),J_=n(`_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`),G_=h(),pt=a("p"),X_=n("To behave as an decoder the model needs to be initialized with the "),Hc=a("code"),Y_=n("is_decoder"),Z_=n(` argument of the configuration set
to `),Qc=a("code"),eb=n("True"),tb=n(". To be used in a Seq2Seq model, the model needs to initialized with both "),Vc=a("code"),ob=n("is_decoder"),nb=n(` argument and
`),Kc=a("code"),sb=n("add_cross_attention"),ab=n(" set to "),Jc=a("code"),rb=n("True"),ib=n("; an "),Gc=a("code"),lb=n("encoder_hidden_states"),db=n(" is then expected as an input to the forward pass."),cb=h(),Qn=a("p"),pb=n(".. _"),Xc=a("em"),hb=n("Attention is all you need"),mb=n(": "),ir=a("a"),ub=n("https://arxiv.org/abs/1706.03762"),fb=h(),Ut=a("div"),v(lr.$$.fragment),gb=h(),Do=a("p"),_b=n("The "),yd=a("a"),bb=n("RobertaModel"),kb=n(" forward method, overrides the "),Yc=a("code"),yb=n("__call__"),vb=n(" special method."),wb=h(),v(Vn.$$.fragment),Tb=h(),v(Kn.$$.fragment),lu=h(),So=a("h2"),Jn=a("a"),Zc=a("span"),v(dr.$$.fragment),$b=h(),ep=a("span"),Fb=n("RobertaForCausalLM"),du=h(),vt=a("div"),v(cr.$$.fragment),xb=h(),pr=a("p"),Rb=n("RoBERTa Model with a "),tp=a("code"),Eb=n("language modeling"),Mb=n(" head on top for CLM fine-tuning."),zb=h(),hr=a("p"),Cb=n("This model inherits from "),vd=a("a"),jb=n("PreTrainedModel"),qb=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pb=h(),mr=a("p"),Lb=n("This model is also a PyTorch "),ur=a("a"),Ab=n("torch.nn.Module"),Ob=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nb=h(),Ht=a("div"),v(fr.$$.fragment),Ib=h(),Wo=a("p"),Db=n("The "),wd=a("a"),Sb=n("RobertaForCausalLM"),Wb=n(" forward method, overrides the "),op=a("code"),Bb=n("__call__"),Ub=n(" special method."),Hb=h(),v(Gn.$$.fragment),Qb=h(),v(Xn.$$.fragment),cu=h(),Bo=a("h2"),Yn=a("a"),np=a("span"),v(gr.$$.fragment),Vb=h(),sp=a("span"),Kb=n("RobertaForMaskedLM"),pu=h(),wt=a("div"),v(_r.$$.fragment),Jb=h(),br=a("p"),Gb=n("RoBERTa Model with a "),ap=a("code"),Xb=n("language modeling"),Yb=n(" head on top."),Zb=h(),kr=a("p"),ek=n("This model inherits from "),Td=a("a"),tk=n("PreTrainedModel"),ok=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nk=h(),yr=a("p"),sk=n("This model is also a PyTorch "),vr=a("a"),ak=n("torch.nn.Module"),rk=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ik=h(),Rt=a("div"),v(wr.$$.fragment),lk=h(),Uo=a("p"),dk=n("The "),$d=a("a"),ck=n("RobertaForMaskedLM"),pk=n(" forward method, overrides the "),rp=a("code"),hk=n("__call__"),mk=n(" special method."),uk=h(),v(Zn.$$.fragment),fk=h(),v(es.$$.fragment),gk=h(),v(ts.$$.fragment),hu=h(),Ho=a("h2"),os=a("a"),ip=a("span"),v(Tr.$$.fragment),_k=h(),lp=a("span"),bk=n("RobertaForSequenceClassification"),mu=h(),Tt=a("div"),v($r.$$.fragment),kk=h(),dp=a("p"),yk=n(`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),vk=h(),Fr=a("p"),wk=n("This model inherits from "),Fd=a("a"),Tk=n("PreTrainedModel"),$k=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fk=h(),xr=a("p"),xk=n("This model is also a PyTorch "),Rr=a("a"),Rk=n("torch.nn.Module"),Ek=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mk=h(),ct=a("div"),v(Er.$$.fragment),zk=h(),Qo=a("p"),Ck=n("The "),xd=a("a"),jk=n("RobertaForSequenceClassification"),qk=n(" forward method, overrides the "),cp=a("code"),Pk=n("__call__"),Lk=n(" special method."),Ak=h(),v(ns.$$.fragment),Ok=h(),v(ss.$$.fragment),Nk=h(),v(as.$$.fragment),Ik=h(),v(rs.$$.fragment),Dk=h(),v(is.$$.fragment),uu=h(),Vo=a("h2"),ls=a("a"),pp=a("span"),v(Mr.$$.fragment),Sk=h(),hp=a("span"),Wk=n("RobertaForMultipleChoice"),fu=h(),$t=a("div"),v(zr.$$.fragment),Bk=h(),mp=a("p"),Uk=n(`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Hk=h(),Cr=a("p"),Qk=n("This model inherits from "),Rd=a("a"),Vk=n("PreTrainedModel"),Kk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jk=h(),jr=a("p"),Gk=n("This model is also a PyTorch "),qr=a("a"),Xk=n("torch.nn.Module"),Yk=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zk=h(),Qt=a("div"),v(Pr.$$.fragment),ey=h(),Ko=a("p"),ty=n("The "),Ed=a("a"),oy=n("RobertaForMultipleChoice"),ny=n(" forward method, overrides the "),up=a("code"),sy=n("__call__"),ay=n(" special method."),ry=h(),v(ds.$$.fragment),iy=h(),v(cs.$$.fragment),gu=h(),Jo=a("h2"),ps=a("a"),fp=a("span"),v(Lr.$$.fragment),ly=h(),gp=a("span"),dy=n("RobertaForTokenClassification"),_u=h(),Ft=a("div"),v(Ar.$$.fragment),cy=h(),_p=a("p"),py=n(`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),hy=h(),Or=a("p"),my=n("This model inherits from "),Md=a("a"),uy=n("PreTrainedModel"),fy=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gy=h(),Nr=a("p"),_y=n("This model is also a PyTorch "),Ir=a("a"),by=n("torch.nn.Module"),ky=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yy=h(),Et=a("div"),v(Dr.$$.fragment),vy=h(),Go=a("p"),wy=n("The "),zd=a("a"),Ty=n("RobertaForTokenClassification"),$y=n(" forward method, overrides the "),bp=a("code"),Fy=n("__call__"),xy=n(" special method."),Ry=h(),v(hs.$$.fragment),Ey=h(),v(ms.$$.fragment),My=h(),v(us.$$.fragment),bu=h(),Xo=a("h2"),fs=a("a"),kp=a("span"),v(Sr.$$.fragment),zy=h(),yp=a("span"),Cy=n("RobertaForQuestionAnswering"),ku=h(),xt=a("div"),v(Wr.$$.fragment),jy=h(),Yo=a("p"),qy=n(`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),vp=a("code"),Py=n("span start logits"),Ly=n(" and "),wp=a("code"),Ay=n("span end logits"),Oy=n(")."),Ny=h(),Br=a("p"),Iy=n("This model inherits from "),Cd=a("a"),Dy=n("PreTrainedModel"),Sy=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wy=h(),Ur=a("p"),By=n("This model is also a PyTorch "),Hr=a("a"),Uy=n("torch.nn.Module"),Hy=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qy=h(),Mt=a("div"),v(Qr.$$.fragment),Vy=h(),Zo=a("p"),Ky=n("The "),jd=a("a"),Jy=n("RobertaForQuestionAnswering"),Gy=n(" forward method, overrides the "),Tp=a("code"),Xy=n("__call__"),Yy=n(" special method."),Zy=h(),v(gs.$$.fragment),ev=h(),v(_s.$$.fragment),tv=h(),v(bs.$$.fragment),yu=h(),en=a("h2"),ks=a("a"),$p=a("span"),v(Vr.$$.fragment),ov=h(),Fp=a("span"),nv=n("TFRobertaModel"),vu=h(),ht=a("div"),v(Kr.$$.fragment),sv=h(),xp=a("p"),av=n("The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),rv=h(),Jr=a("p"),iv=n("This model inherits from "),qd=a("a"),lv=n("TFPreTrainedModel"),dv=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cv=h(),Gr=a("p"),pv=n("This model is also a "),Xr=a("a"),hv=n("tf.keras.Model"),mv=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),uv=h(),v(ys.$$.fragment),fv=h(),Vt=a("div"),v(Yr.$$.fragment),gv=h(),tn=a("p"),_v=n("The "),Pd=a("a"),bv=n("TFRobertaModel"),kv=n(" forward method, overrides the "),Rp=a("code"),yv=n("__call__"),vv=n(" special method."),wv=h(),v(vs.$$.fragment),Tv=h(),v(ws.$$.fragment),wu=h(),on=a("h2"),Ts=a("a"),Ep=a("span"),v(Zr.$$.fragment),$v=h(),Mp=a("span"),Fv=n("TFRobertaForCausalLM"),Tu=h(),nn=a("div"),v(ei.$$.fragment),xv=h(),Kt=a("div"),v(ti.$$.fragment),Rv=h(),sn=a("p"),Ev=n("The "),Ld=a("a"),Mv=n("TFRobertaForCausalLM"),zv=n(" forward method, overrides the "),zp=a("code"),Cv=n("__call__"),jv=n(" special method."),qv=h(),v($s.$$.fragment),Pv=h(),v(Fs.$$.fragment),$u=h(),an=a("h2"),xs=a("a"),Cp=a("span"),v(oi.$$.fragment),Lv=h(),jp=a("span"),Av=n("TFRobertaForMaskedLM"),Fu=h(),mt=a("div"),v(ni.$$.fragment),Ov=h(),si=a("p"),Nv=n("RoBERTa Model with a "),qp=a("code"),Iv=n("language modeling"),Dv=n(" head on top."),Sv=h(),ai=a("p"),Wv=n("This model inherits from "),Ad=a("a"),Bv=n("TFPreTrainedModel"),Uv=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hv=h(),ri=a("p"),Qv=n("This model is also a "),ii=a("a"),Vv=n("tf.keras.Model"),Kv=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jv=h(),v(Rs.$$.fragment),Gv=h(),zt=a("div"),v(li.$$.fragment),Xv=h(),rn=a("p"),Yv=n("The "),Od=a("a"),Zv=n("TFRobertaForMaskedLM"),ew=n(" forward method, overrides the "),Pp=a("code"),tw=n("__call__"),ow=n(" special method."),nw=h(),v(Es.$$.fragment),sw=h(),v(Ms.$$.fragment),aw=h(),v(zs.$$.fragment),xu=h(),ln=a("h2"),Cs=a("a"),Lp=a("span"),v(di.$$.fragment),rw=h(),Ap=a("span"),iw=n("TFRobertaForSequenceClassification"),Ru=h(),ut=a("div"),v(ci.$$.fragment),lw=h(),Op=a("p"),dw=n(`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),cw=h(),pi=a("p"),pw=n("This model inherits from "),Nd=a("a"),hw=n("TFPreTrainedModel"),mw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uw=h(),hi=a("p"),fw=n("This model is also a "),mi=a("a"),gw=n("tf.keras.Model"),_w=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bw=h(),v(js.$$.fragment),kw=h(),Ct=a("div"),v(ui.$$.fragment),yw=h(),dn=a("p"),vw=n("The "),Id=a("a"),ww=n("TFRobertaForSequenceClassification"),Tw=n(" forward method, overrides the "),Np=a("code"),$w=n("__call__"),Fw=n(" special method."),xw=h(),v(qs.$$.fragment),Rw=h(),v(Ps.$$.fragment),Ew=h(),v(Ls.$$.fragment),Eu=h(),cn=a("h2"),As=a("a"),Ip=a("span"),v(fi.$$.fragment),Mw=h(),Dp=a("span"),zw=n("TFRobertaForMultipleChoice"),Mu=h(),ft=a("div"),v(gi.$$.fragment),Cw=h(),Sp=a("p"),jw=n(`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),qw=h(),_i=a("p"),Pw=n("This model inherits from "),Dd=a("a"),Lw=n("TFPreTrainedModel"),Aw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ow=h(),bi=a("p"),Nw=n("This model is also a "),ki=a("a"),Iw=n("tf.keras.Model"),Dw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sw=h(),v(Os.$$.fragment),Ww=h(),Jt=a("div"),v(yi.$$.fragment),Bw=h(),pn=a("p"),Uw=n("The "),Sd=a("a"),Hw=n("TFRobertaForMultipleChoice"),Qw=n(" forward method, overrides the "),Wp=a("code"),Vw=n("__call__"),Kw=n(" special method."),Jw=h(),v(Ns.$$.fragment),Gw=h(),v(Is.$$.fragment),zu=h(),hn=a("h2"),Ds=a("a"),Bp=a("span"),v(vi.$$.fragment),Xw=h(),Up=a("span"),Yw=n("TFRobertaForTokenClassification"),Cu=h(),gt=a("div"),v(wi.$$.fragment),Zw=h(),Hp=a("p"),eT=n(`RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),tT=h(),Ti=a("p"),oT=n("This model inherits from "),Wd=a("a"),nT=n("TFPreTrainedModel"),sT=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),aT=h(),$i=a("p"),rT=n("This model is also a "),Fi=a("a"),iT=n("tf.keras.Model"),lT=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dT=h(),v(Ss.$$.fragment),cT=h(),jt=a("div"),v(xi.$$.fragment),pT=h(),mn=a("p"),hT=n("The "),Bd=a("a"),mT=n("TFRobertaForTokenClassification"),uT=n(" forward method, overrides the "),Qp=a("code"),fT=n("__call__"),gT=n(" special method."),_T=h(),v(Ws.$$.fragment),bT=h(),v(Bs.$$.fragment),kT=h(),v(Us.$$.fragment),ju=h(),un=a("h2"),Hs=a("a"),Vp=a("span"),v(Ri.$$.fragment),yT=h(),Kp=a("span"),vT=n("TFRobertaForQuestionAnswering"),qu=h(),_t=a("div"),v(Ei.$$.fragment),wT=h(),fn=a("p"),TT=n(`RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Jp=a("code"),$T=n("span start logits"),FT=n(" and "),Gp=a("code"),xT=n("span end logits"),RT=n(")."),ET=h(),Mi=a("p"),MT=n("This model inherits from "),Ud=a("a"),zT=n("TFPreTrainedModel"),CT=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jT=h(),zi=a("p"),qT=n("This model is also a "),Ci=a("a"),PT=n("tf.keras.Model"),LT=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),AT=h(),v(Qs.$$.fragment),OT=h(),qt=a("div"),v(ji.$$.fragment),NT=h(),gn=a("p"),IT=n("The "),Hd=a("a"),DT=n("TFRobertaForQuestionAnswering"),ST=n(" forward method, overrides the "),Xp=a("code"),WT=n("__call__"),BT=n(" special method."),UT=h(),v(Vs.$$.fragment),HT=h(),v(Ks.$$.fragment),QT=h(),v(Js.$$.fragment),Pu=h(),_n=a("h2"),Gs=a("a"),Yp=a("span"),v(qi.$$.fragment),VT=h(),Zp=a("span"),KT=n("FlaxRobertaModel"),Lu=h(),nt=a("div"),v(Pi.$$.fragment),JT=h(),eh=a("p"),GT=n("The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),XT=h(),Li=a("p"),YT=n("This model inherits from "),Qd=a("a"),ZT=n("FlaxPreTrainedModel"),e$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),t$=h(),Ai=a("p"),o$=n("This model is also a Flax Linen "),Oi=a("a"),n$=n("flax.linen.Module"),s$=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),a$=h(),th=a("p"),r$=n("Finally, this model supports inherent JAX features such as:"),i$=h(),po=a("ul"),oh=a("li"),Ni=a("a"),l$=n("Just-In-Time (JIT) compilation"),d$=h(),nh=a("li"),Ii=a("a"),c$=n("Automatic Differentiation"),p$=h(),sh=a("li"),Di=a("a"),h$=n("Vectorization"),m$=h(),ah=a("li"),Si=a("a"),u$=n("Parallelization"),f$=h(),Gt=a("div"),v(Wi.$$.fragment),g$=h(),bn=a("p"),_$=n("The "),rh=a("code"),b$=n("FlaxRobertaPreTrainedModel"),k$=n(" forward method, overrides the "),ih=a("code"),y$=n("__call__"),v$=n(" special method."),w$=h(),v(Xs.$$.fragment),T$=h(),v(Ys.$$.fragment),Au=h(),kn=a("h2"),Zs=a("a"),lh=a("span"),v(Bi.$$.fragment),$$=h(),dh=a("span"),F$=n("FlaxRobertaForCausalLM"),Ou=h(),st=a("div"),v(Ui.$$.fragment),x$=h(),ch=a("p"),R$=n(`Roberta Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),E$=h(),Hi=a("p"),M$=n("This model inherits from "),Vd=a("a"),z$=n("FlaxPreTrainedModel"),C$=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),j$=h(),Qi=a("p"),q$=n("This model is also a Flax Linen "),Vi=a("a"),P$=n("flax.linen.Module"),L$=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),A$=h(),ph=a("p"),O$=n("Finally, this model supports inherent JAX features such as:"),N$=h(),ho=a("ul"),hh=a("li"),Ki=a("a"),I$=n("Just-In-Time (JIT) compilation"),D$=h(),mh=a("li"),Ji=a("a"),S$=n("Automatic Differentiation"),W$=h(),uh=a("li"),Gi=a("a"),B$=n("Vectorization"),U$=h(),fh=a("li"),Xi=a("a"),H$=n("Parallelization"),Q$=h(),Xt=a("div"),v(Yi.$$.fragment),V$=h(),yn=a("p"),K$=n("The "),gh=a("code"),J$=n("FlaxRobertaPreTrainedModel"),G$=n(" forward method, overrides the "),_h=a("code"),X$=n("__call__"),Y$=n(" special method."),Z$=h(),v(ea.$$.fragment),e1=h(),v(ta.$$.fragment),Nu=h(),vn=a("h2"),oa=a("a"),bh=a("span"),v(Zi.$$.fragment),t1=h(),kh=a("span"),o1=n("FlaxRobertaForMaskedLM"),Iu=h(),at=a("div"),v(el.$$.fragment),n1=h(),tl=a("p"),s1=n("RoBERTa Model with a "),yh=a("code"),a1=n("language modeling"),r1=n(" head on top."),i1=h(),ol=a("p"),l1=n("This model inherits from "),Kd=a("a"),d1=n("FlaxPreTrainedModel"),c1=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),p1=h(),nl=a("p"),h1=n("This model is also a Flax Linen "),sl=a("a"),m1=n("flax.linen.Module"),u1=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),f1=h(),vh=a("p"),g1=n("Finally, this model supports inherent JAX features such as:"),_1=h(),mo=a("ul"),wh=a("li"),al=a("a"),b1=n("Just-In-Time (JIT) compilation"),k1=h(),Th=a("li"),rl=a("a"),y1=n("Automatic Differentiation"),v1=h(),$h=a("li"),il=a("a"),w1=n("Vectorization"),T1=h(),Fh=a("li"),ll=a("a"),$1=n("Parallelization"),F1=h(),Yt=a("div"),v(dl.$$.fragment),x1=h(),wn=a("p"),R1=n("The "),xh=a("code"),E1=n("FlaxRobertaPreTrainedModel"),M1=n(" forward method, overrides the "),Rh=a("code"),z1=n("__call__"),C1=n(" special method."),j1=h(),v(na.$$.fragment),q1=h(),v(sa.$$.fragment),Du=h(),Tn=a("h2"),aa=a("a"),Eh=a("span"),v(cl.$$.fragment),P1=h(),Mh=a("span"),L1=n("FlaxRobertaForSequenceClassification"),Su=h(),rt=a("div"),v(pl.$$.fragment),A1=h(),zh=a("p"),O1=n(`Roberta Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),N1=h(),hl=a("p"),I1=n("This model inherits from "),Jd=a("a"),D1=n("FlaxPreTrainedModel"),S1=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),W1=h(),ml=a("p"),B1=n("This model is also a Flax Linen "),ul=a("a"),U1=n("flax.linen.Module"),H1=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Q1=h(),Ch=a("p"),V1=n("Finally, this model supports inherent JAX features such as:"),K1=h(),uo=a("ul"),jh=a("li"),fl=a("a"),J1=n("Just-In-Time (JIT) compilation"),G1=h(),qh=a("li"),gl=a("a"),X1=n("Automatic Differentiation"),Y1=h(),Ph=a("li"),_l=a("a"),Z1=n("Vectorization"),e2=h(),Lh=a("li"),bl=a("a"),t2=n("Parallelization"),o2=h(),Zt=a("div"),v(kl.$$.fragment),n2=h(),$n=a("p"),s2=n("The "),Ah=a("code"),a2=n("FlaxRobertaPreTrainedModel"),r2=n(" forward method, overrides the "),Oh=a("code"),i2=n("__call__"),l2=n(" special method."),d2=h(),v(ra.$$.fragment),c2=h(),v(ia.$$.fragment),Wu=h(),Fn=a("h2"),la=a("a"),Nh=a("span"),v(yl.$$.fragment),p2=h(),Ih=a("span"),h2=n("FlaxRobertaForMultipleChoice"),Bu=h(),it=a("div"),v(vl.$$.fragment),m2=h(),Dh=a("p"),u2=n(`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),f2=h(),wl=a("p"),g2=n("This model inherits from "),Gd=a("a"),_2=n("FlaxPreTrainedModel"),b2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),k2=h(),Tl=a("p"),y2=n("This model is also a Flax Linen "),$l=a("a"),v2=n("flax.linen.Module"),w2=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),T2=h(),Sh=a("p"),$2=n("Finally, this model supports inherent JAX features such as:"),F2=h(),fo=a("ul"),Wh=a("li"),Fl=a("a"),x2=n("Just-In-Time (JIT) compilation"),R2=h(),Bh=a("li"),xl=a("a"),E2=n("Automatic Differentiation"),M2=h(),Uh=a("li"),Rl=a("a"),z2=n("Vectorization"),C2=h(),Hh=a("li"),El=a("a"),j2=n("Parallelization"),q2=h(),eo=a("div"),v(Ml.$$.fragment),P2=h(),xn=a("p"),L2=n("The "),Qh=a("code"),A2=n("FlaxRobertaPreTrainedModel"),O2=n(" forward method, overrides the "),Vh=a("code"),N2=n("__call__"),I2=n(" special method."),D2=h(),v(da.$$.fragment),S2=h(),v(ca.$$.fragment),Uu=h(),Rn=a("h2"),pa=a("a"),Kh=a("span"),v(zl.$$.fragment),W2=h(),Jh=a("span"),B2=n("FlaxRobertaForTokenClassification"),Hu=h(),lt=a("div"),v(Cl.$$.fragment),U2=h(),Gh=a("p"),H2=n(`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Q2=h(),jl=a("p"),V2=n("This model inherits from "),Xd=a("a"),K2=n("FlaxPreTrainedModel"),J2=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),G2=h(),ql=a("p"),X2=n("This model is also a Flax Linen "),Pl=a("a"),Y2=n("flax.linen.Module"),Z2=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),eF=h(),Xh=a("p"),tF=n("Finally, this model supports inherent JAX features such as:"),oF=h(),go=a("ul"),Yh=a("li"),Ll=a("a"),nF=n("Just-In-Time (JIT) compilation"),sF=h(),Zh=a("li"),Al=a("a"),aF=n("Automatic Differentiation"),rF=h(),em=a("li"),Ol=a("a"),iF=n("Vectorization"),lF=h(),tm=a("li"),Nl=a("a"),dF=n("Parallelization"),cF=h(),to=a("div"),v(Il.$$.fragment),pF=h(),En=a("p"),hF=n("The "),om=a("code"),mF=n("FlaxRobertaPreTrainedModel"),uF=n(" forward method, overrides the "),nm=a("code"),fF=n("__call__"),gF=n(" special method."),_F=h(),v(ha.$$.fragment),bF=h(),v(ma.$$.fragment),Qu=h(),Mn=a("h2"),ua=a("a"),sm=a("span"),v(Dl.$$.fragment),kF=h(),am=a("span"),yF=n("FlaxRobertaForQuestionAnswering"),Vu=h(),dt=a("div"),v(Sl.$$.fragment),vF=h(),zn=a("p"),wF=n(`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),rm=a("code"),TF=n("span start logits"),$F=n(" and "),im=a("code"),FF=n("span end logits"),xF=n(")."),RF=h(),Wl=a("p"),EF=n("This model inherits from "),Yd=a("a"),MF=n("FlaxPreTrainedModel"),zF=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),CF=h(),Bl=a("p"),jF=n("This model is also a Flax Linen "),Ul=a("a"),qF=n("flax.linen.Module"),PF=n(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),LF=h(),lm=a("p"),AF=n("Finally, this model supports inherent JAX features such as:"),OF=h(),_o=a("ul"),dm=a("li"),Hl=a("a"),NF=n("Just-In-Time (JIT) compilation"),IF=h(),cm=a("li"),Ql=a("a"),DF=n("Automatic Differentiation"),SF=h(),pm=a("li"),Vl=a("a"),WF=n("Vectorization"),BF=h(),hm=a("li"),Kl=a("a"),UF=n("Parallelization"),HF=h(),oo=a("div"),v(Jl.$$.fragment),QF=h(),Cn=a("p"),VF=n("The "),mm=a("code"),KF=n("FlaxRobertaPreTrainedModel"),JF=n(" forward method, overrides the "),um=a("code"),GF=n("__call__"),XF=n(" special method."),YF=h(),v(fa.$$.fragment),ZF=h(),v(ga.$$.fragment),this.h()},l(o){const b=NM('[data-svelte="svelte-1phssyn"]',document.head);d=r(b,"META",{name:!0,content:!0}),b.forEach(t),g=m(o),c=r(o,"H1",{class:!0});var Gl=i(c);u=r(Gl,"A",{id:!0,class:!0,href:!0});var fm=i(u);_=r(fm,"SPAN",{});var gm=i(_);w(l.$$.fragment,gm),gm.forEach(t),fm.forEach(t),p=m(Gl),E=r(Gl,"SPAN",{});var _m=i(E);le=s(_m,"RoBERTa"),_m.forEach(t),Gl.forEach(t),Z=m(o),N=r(o,"H2",{class:!0});var Xl=i(N);te=r(Xl,"A",{id:!0,class:!0,href:!0});var bm=i(te);oe=r(bm,"SPAN",{});var km=i(oe);w(M.$$.fragment,km),km.forEach(t),bm.forEach(t),we=m(Xl),V=r(Xl,"SPAN",{});var ym=i(V);Te=s(ym,"Overview"),ym.forEach(t),Xl.forEach(t),ge=m(o),W=r(o,"P",{});var Yl=i(W);$e=s(Yl,"The RoBERTa model was proposed in "),pe=r(Yl,"A",{href:!0,rel:!0});var vm=i(pe);K=s(vm,"RoBERTa: A Robustly Optimized BERT Pretraining Approach"),vm.forEach(t),Fe=s(Yl,` by Yinhan Liu, Myle Ott, Naman Goyal, Jingfei Du, Mandar Joshi, Danqi Chen, Omer
Levy, Mike Lewis, Luke Zettlemoyer, Veselin Stoyanov. It is based on Google\u2019s BERT model released in 2018.`),Yl.forEach(t),_e=m(o),U=r(o,"P",{});var wm=i(U);xe=s(wm,`It builds on BERT and modifies key hyperparameters, removing the next-sentence pretraining objective and training with
much larger mini-batches and learning rates.`),wm.forEach(t),be=m(o),H=r(o,"P",{});var Tm=i(H);Re=s(Tm,"The abstract from the paper is the following:"),Tm.forEach(t),ke=m(o),ee=r(o,"P",{});var $m=i(ee);j=r($m,"EM",{});var Fm=i(j);P=s(Fm,`Language model pretraining has led to significant performance gains but careful comparison between different
approaches is challenging. Training is computationally expensive, often done on private datasets of different sizes,
and, as we will show, hyperparameter choices have significant impact on the final results. We present a replication
study of BERT pretraining (Devlin et al., 2019) that carefully measures the impact of many key hyperparameters and
training data size. We find that BERT was significantly undertrained, and can match or exceed the performance of every
model published after it. Our best model achieves state-of-the-art results on GLUE, RACE and SQuAD. These results
highlight the importance of previously overlooked design choices, and raise questions about the source of recently
reported improvements. We release our models and code.`),Fm.forEach(t),$m.forEach(t),ye=m(o),Q=r(o,"P",{});var xm=i(Q);Ee=s(xm,"Tips:"),xm.forEach(t),ve=m(o),I=r(o,"UL",{});var bo=i(I);he=r(bo,"LI",{});var Zl=i(he);Me=s(Zl,"This implementation is the same as "),q=r(Zl,"A",{href:!0});var Rm=i(q);ze=s(Rm,"BertModel"),Rm.forEach(t),J=s(Zl,` with a tiny embeddings tweak as well as a setup
for Roberta pretrained models.`),Zl.forEach(t),Ce=m(bo),me=r(bo,"LI",{});var Em=i(me);G=s(Em,`RoBERTa has the same architecture as BERT, but uses a byte-level BPE as a tokenizer (same as GPT-2) and uses a
different pretraining scheme.`),Em.forEach(t),je=m(bo),ne=r(bo,"LI",{});var ko=i(ne);D=s(ko,"RoBERTa doesn\u2019t have "),ue=r(ko,"CODE",{});var Mm=i(ue);X=s(Mm,"token_type_ids"),Mm.forEach(t),qe=s(ko,`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),se=r(ko,"CODE",{});var zm=i(se);L=s(zm,"tokenizer.sep_token"),zm.forEach(t),Pe=s(ko," (or "),A=r(ko,"CODE",{});var Cm=i(A);Le=s(Cm,"</s>"),Cm.forEach(t),Ae=s(ko,")"),ko.forEach(t),y=m(bo),z=r(bo,"LI",{});var Zd=i(z);He=r(Zd,"A",{href:!0});var jm=i(He);de=s(jm,"CamemBERT"),jm.forEach(t),Xe=s(Zd," is a wrapper around RoBERTa. Refer to this page for usage examples."),Zd.forEach(t),bo.forEach(t),Ke=m(o),C=r(o,"P",{});var jn=i(C);Ye=s(jn,"This model was contributed by "),Se=r(jn,"A",{href:!0,rel:!0});var qm=i(Se);Ze=s(qm,"julien-c"),qm.forEach(t),et=s(jn,". The original code can be found "),We=r(jn,"A",{href:!0,rel:!0});var Pm=i(We);S=s(Pm,"here"),Pm.forEach(t),Y=s(jn,"."),jn.forEach(t),Je=m(o),Oe=r(o,"H2",{class:!0});var ed=i(Oe);B=r(ed,"A",{id:!0,class:!0,href:!0});var Lm=i(B);Qe=r(Lm,"SPAN",{});var Am=i(Qe);w(Be.$$.fragment,Am),Am.forEach(t),Lm.forEach(t),Ne=m(ed),Ve=r(ed,"SPAN",{});var Om=i(Ve);ce=s(Om,"RobertaConfig"),Om.forEach(t),ed.forEach(t),Ge=m(o),yt=r(o,"DIV",{class:!0});var Bt=i(yt);w(Oa.$$.fragment,Bt),ug=m(Bt),co=r(Bt,"P",{});var yo=i(co);fg=s(yo,"This is the configuration class to store the configuration of a "),id=r(yo,"A",{href:!0});var Nm=i(id);gg=s(Nm,"RobertaModel"),Nm.forEach(t),_g=s(yo," or a "),ld=r(yo,"A",{href:!0});var Im=i(ld);bg=s(Im,"TFRobertaModel"),Im.forEach(t),kg=s(yo,`. It is
used to instantiate a RoBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the RoBERTa
`),Na=r(yo,"A",{href:!0,rel:!0});var Dm=i(Na);yg=s(Dm,"roberta-base"),Dm.forEach(t),vg=s(yo," architecture."),yo.forEach(t),wg=m(Bt),Lo=r(Bt,"P",{});var qn=i(Lo);Tg=s(qn,"Configuration objects inherit from "),dd=r(qn,"A",{href:!0});var Sm=i(dd);$g=s(Sm,"PretrainedConfig"),Sm.forEach(t),Fg=s(qn,` and can be used to control the model outputs. Read the
documentation from `),cd=r(qn,"A",{href:!0});var Wm=i(cd);xg=s(Wm,"PretrainedConfig"),Wm.forEach(t),Rg=s(qn," for more information."),qn.forEach(t),Eg=m(Bt),Ao=r(Bt,"P",{});var Pn=i(Ao);Mg=s(Pn,"The "),pd=r(Pn,"A",{href:!0});var Bm=i(pd);zg=s(Bm,"RobertaConfig"),Bm.forEach(t),Cg=s(Pn," class directly inherits "),hd=r(Pn,"A",{href:!0});var Um=i(hd);jg=s(Um,"BertConfig"),Um.forEach(t),qg=s(Pn,`. It reuses the same defaults. Please check the parent
class for more information.`),Pn.forEach(t),Pg=m(Bt),w(An.$$.fragment,Bt),Bt.forEach(t),ou=m(o),Oo=r(o,"H2",{class:!0});var td=i(Oo);On=r(td,"A",{id:!0,class:!0,href:!0});var Hm=i(On);xc=r(Hm,"SPAN",{});var Qm=i(xc);w(Ia.$$.fragment,Qm),Qm.forEach(t),Hm.forEach(t),Lg=m(td),Rc=r(td,"SPAN",{});var Vm=i(Rc);Ag=s(Vm,"RobertaTokenizer"),Vm.forEach(t),td.forEach(t),nu=m(o),Ie=r(o,"DIV",{class:!0});var Ue=i(Ie);w(Da.$$.fragment,Ue),Og=m(Ue),Ec=r(Ue,"P",{});var Km=i(Ec);Ng=s(Km,"Constructs a RoBERTa tokenizer, derived from the GPT-2 tokenizer, using byte-level Byte-Pair-Encoding."),Km.forEach(t),Ig=m(Ue),Mc=r(Ue,"P",{});var Jm=i(Mc);Dg=s(Jm,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Jm.forEach(t),Sg=m(Ue),w(Nn.$$.fragment,Ue),Wg=m(Ue),Sa=r(Ue,"P",{});var od=i(Sa);Bg=s(od,"You can get around that behavior by passing "),zc=r(od,"CODE",{});var Gm=i(zc);Ug=s(Gm,"add_prefix_space=True"),Gm.forEach(t),Hg=s(od,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),od.forEach(t),Qg=m(Ue),w(In.$$.fragment,Ue),Vg=m(Ue),Wa=r(Ue,"P",{});var nd=i(Wa);Kg=s(nd,"This tokenizer inherits from "),md=r(nd,"A",{href:!0});var Xm=i(md);Jg=s(Xm,"PreTrainedTokenizer"),Xm.forEach(t),Gg=s(nd,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),nd.forEach(t),Xg=m(Ue),vo=r(Ue,"DIV",{class:!0});var Ln=i(vo);w(Ba.$$.fragment,Ln),Yg=m(Ln),Cc=r(Ln,"P",{});var Ym=i(Cc);Zg=s(Ym,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoBERTa sequence has the following format:`),Ym.forEach(t),e_=m(Ln),Ua=r(Ln,"UL",{});var sd=i(Ua);ud=r(sd,"LI",{});var ec=i(ud);t_=s(ec,"single sequence: "),jc=r(ec,"CODE",{});var Zm=i(jc);o_=s(Zm,"<s> X </s>"),Zm.forEach(t),ec.forEach(t),n_=m(sd),fd=r(sd,"LI",{});var tc=i(fd);s_=s(tc,"pair of sequences: "),qc=r(tc,"CODE",{});var eu=i(qc);a_=s(eu,"<s> A </s></s> B </s>"),eu.forEach(t),tc.forEach(t),sd.forEach(t),Ln.forEach(t),r_=m(Ue),Dn=r(Ue,"DIV",{class:!0});var ad=i(Dn);w(Ha.$$.fragment,ad),i_=m(ad),Qa=r(ad,"P",{});var rd=i(Qa);l_=s(rd,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Pc=r(rd,"CODE",{});var e0=i(Pc);d_=s(e0,"prepare_for_model"),e0.forEach(t),c_=s(rd," method."),rd.forEach(t),ad.forEach(t),p_=m(Ue),Sn=r(Ue,"DIV",{class:!0});var Ju=i(Sn);w(Va.$$.fragment,Ju),h_=m(Ju),Lc=r(Ju,"P",{});var t0=i(Lc);m_=s(t0,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. RoBERTa does not
make use of token type ids, therefore a list of zeros is returned.`),t0.forEach(t),Ju.forEach(t),u_=m(Ue),gd=r(Ue,"DIV",{class:!0});var o0=i(gd);w(Ka.$$.fragment,o0),o0.forEach(t),Ue.forEach(t),su=m(o),No=r(o,"H2",{class:!0});var Gu=i(No);Wn=r(Gu,"A",{id:!0,class:!0,href:!0});var n0=i(Wn);Ac=r(n0,"SPAN",{});var s0=i(Ac);w(Ja.$$.fragment,s0),s0.forEach(t),n0.forEach(t),f_=m(Gu),Oc=r(Gu,"SPAN",{});var a0=i(Oc);g_=s(a0,"RobertaTokenizerFast"),a0.forEach(t),Gu.forEach(t),au=m(o),tt=r(o,"DIV",{class:!0});var bt=i(tt);w(Ga.$$.fragment,bt),__=m(bt),Xa=r(bt,"P",{});var Xu=i(Xa);b_=s(Xu,"Construct a \u201Cfast\u201D RoBERTa tokenizer (backed by HuggingFace\u2019s "),Nc=r(Xu,"EM",{});var r0=i(Nc);k_=s(r0,"tokenizers"),r0.forEach(t),y_=s(Xu,` library), derived from the GPT-2
tokenizer, using byte-level Byte-Pair-Encoding.`),Xu.forEach(t),v_=m(bt),Ic=r(bt,"P",{});var i0=i(Ic);w_=s(i0,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),i0.forEach(t),T_=m(bt),w(Bn.$$.fragment,bt),$_=m(bt),Ya=r(bt,"P",{});var Yu=i(Ya);F_=s(Yu,"You can get around that behavior by passing "),Dc=r(Yu,"CODE",{});var l0=i(Dc);x_=s(l0,"add_prefix_space=True"),l0.forEach(t),R_=s(Yu,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Yu.forEach(t),E_=m(bt),w(Un.$$.fragment,bt),M_=m(bt),Za=r(bt,"P",{});var Zu=i(Za);z_=s(Zu,"This tokenizer inherits from "),_d=r(Zu,"A",{href:!0});var d0=i(_d);C_=s(d0,"PreTrainedTokenizerFast"),d0.forEach(t),j_=s(Zu,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Zu.forEach(t),q_=m(bt),bd=r(bt,"DIV",{class:!0});var c0=i(bd);w(er.$$.fragment,c0),c0.forEach(t),bt.forEach(t),ru=m(o),Io=r(o,"H2",{class:!0});var ef=i(Io);Hn=r(ef,"A",{id:!0,class:!0,href:!0});var p0=i(Hn);Sc=r(p0,"SPAN",{});var h0=i(Sc);w(tr.$$.fragment,h0),h0.forEach(t),p0.forEach(t),P_=m(ef),Wc=r(ef,"SPAN",{});var m0=i(Wc);L_=s(m0,"RobertaModel"),m0.forEach(t),ef.forEach(t),iu=m(o),ot=r(o,"DIV",{class:!0});var kt=i(ot);w(or.$$.fragment,kt),A_=m(kt),Bc=r(kt,"P",{});var u0=i(Bc);O_=s(u0,"The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),u0.forEach(t),N_=m(kt),nr=r(kt,"P",{});var tf=i(nr);I_=s(tf,"This model inherits from "),kd=r(tf,"A",{href:!0});var f0=i(kd);D_=s(f0,"PreTrainedModel"),f0.forEach(t),S_=s(tf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tf.forEach(t),W_=m(kt),sr=r(kt,"P",{});var of=i(sr);B_=s(of,"This model is also a PyTorch "),ar=r(of,"A",{href:!0,rel:!0});var g0=i(ar);U_=s(g0,"torch.nn.Module"),g0.forEach(t),H_=s(of,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),of.forEach(t),Q_=m(kt),rr=r(kt,"P",{});var nf=i(rr);V_=s(nf,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Uc=r(nf,"EM",{});var _0=i(Uc);K_=s(_0,`Attention is
all you need`),_0.forEach(t),J_=s(nf,`_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`),nf.forEach(t),G_=m(kt),pt=r(kt,"P",{});var Pt=i(pt);X_=s(Pt,"To behave as an decoder the model needs to be initialized with the "),Hc=r(Pt,"CODE",{});var b0=i(Hc);Y_=s(b0,"is_decoder"),b0.forEach(t),Z_=s(Pt,` argument of the configuration set
to `),Qc=r(Pt,"CODE",{});var k0=i(Qc);eb=s(k0,"True"),k0.forEach(t),tb=s(Pt,". To be used in a Seq2Seq model, the model needs to initialized with both "),Vc=r(Pt,"CODE",{});var y0=i(Vc);ob=s(y0,"is_decoder"),y0.forEach(t),nb=s(Pt,` argument and
`),Kc=r(Pt,"CODE",{});var v0=i(Kc);sb=s(v0,"add_cross_attention"),v0.forEach(t),ab=s(Pt," set to "),Jc=r(Pt,"CODE",{});var w0=i(Jc);rb=s(w0,"True"),w0.forEach(t),ib=s(Pt,"; an "),Gc=r(Pt,"CODE",{});var T0=i(Gc);lb=s(T0,"encoder_hidden_states"),T0.forEach(t),db=s(Pt," is then expected as an input to the forward pass."),Pt.forEach(t),cb=m(kt),Qn=r(kt,"P",{});var tu=i(Qn);pb=s(tu,".. _"),Xc=r(tu,"EM",{});var $0=i(Xc);hb=s($0,"Attention is all you need"),$0.forEach(t),mb=s(tu,": "),ir=r(tu,"A",{href:!0,rel:!0});var F0=i(ir);ub=s(F0,"https://arxiv.org/abs/1706.03762"),F0.forEach(t),tu.forEach(t),fb=m(kt),Ut=r(kt,"DIV",{class:!0});var _a=i(Ut);w(lr.$$.fragment,_a),gb=m(_a),Do=r(_a,"P",{});var oc=i(Do);_b=s(oc,"The "),yd=r(oc,"A",{href:!0});var x0=i(yd);bb=s(x0,"RobertaModel"),x0.forEach(t),kb=s(oc," forward method, overrides the "),Yc=r(oc,"CODE",{});var R0=i(Yc);yb=s(R0,"__call__"),R0.forEach(t),vb=s(oc," special method."),oc.forEach(t),wb=m(_a),w(Vn.$$.fragment,_a),Tb=m(_a),w(Kn.$$.fragment,_a),_a.forEach(t),kt.forEach(t),lu=m(o),So=r(o,"H2",{class:!0});var sf=i(So);Jn=r(sf,"A",{id:!0,class:!0,href:!0});var E0=i(Jn);Zc=r(E0,"SPAN",{});var M0=i(Zc);w(dr.$$.fragment,M0),M0.forEach(t),E0.forEach(t),$b=m(sf),ep=r(sf,"SPAN",{});var z0=i(ep);Fb=s(z0,"RobertaForCausalLM"),z0.forEach(t),sf.forEach(t),du=m(o),vt=r(o,"DIV",{class:!0});var wo=i(vt);w(cr.$$.fragment,wo),xb=m(wo),pr=r(wo,"P",{});var af=i(pr);Rb=s(af,"RoBERTa Model with a "),tp=r(af,"CODE",{});var C0=i(tp);Eb=s(C0,"language modeling"),C0.forEach(t),Mb=s(af," head on top for CLM fine-tuning."),af.forEach(t),zb=m(wo),hr=r(wo,"P",{});var rf=i(hr);Cb=s(rf,"This model inherits from "),vd=r(rf,"A",{href:!0});var j0=i(vd);jb=s(j0,"PreTrainedModel"),j0.forEach(t),qb=s(rf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rf.forEach(t),Pb=m(wo),mr=r(wo,"P",{});var lf=i(mr);Lb=s(lf,"This model is also a PyTorch "),ur=r(lf,"A",{href:!0,rel:!0});var q0=i(ur);Ab=s(q0,"torch.nn.Module"),q0.forEach(t),Ob=s(lf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lf.forEach(t),Nb=m(wo),Ht=r(wo,"DIV",{class:!0});var ba=i(Ht);w(fr.$$.fragment,ba),Ib=m(ba),Wo=r(ba,"P",{});var nc=i(Wo);Db=s(nc,"The "),wd=r(nc,"A",{href:!0});var P0=i(wd);Sb=s(P0,"RobertaForCausalLM"),P0.forEach(t),Wb=s(nc," forward method, overrides the "),op=r(nc,"CODE",{});var L0=i(op);Bb=s(L0,"__call__"),L0.forEach(t),Ub=s(nc," special method."),nc.forEach(t),Hb=m(ba),w(Gn.$$.fragment,ba),Qb=m(ba),w(Xn.$$.fragment,ba),ba.forEach(t),wo.forEach(t),cu=m(o),Bo=r(o,"H2",{class:!0});var df=i(Bo);Yn=r(df,"A",{id:!0,class:!0,href:!0});var A0=i(Yn);np=r(A0,"SPAN",{});var O0=i(np);w(gr.$$.fragment,O0),O0.forEach(t),A0.forEach(t),Vb=m(df),sp=r(df,"SPAN",{});var N0=i(sp);Kb=s(N0,"RobertaForMaskedLM"),N0.forEach(t),df.forEach(t),pu=m(o),wt=r(o,"DIV",{class:!0});var To=i(wt);w(_r.$$.fragment,To),Jb=m(To),br=r(To,"P",{});var cf=i(br);Gb=s(cf,"RoBERTa Model with a "),ap=r(cf,"CODE",{});var I0=i(ap);Xb=s(I0,"language modeling"),I0.forEach(t),Yb=s(cf," head on top."),cf.forEach(t),Zb=m(To),kr=r(To,"P",{});var pf=i(kr);ek=s(pf,"This model inherits from "),Td=r(pf,"A",{href:!0});var D0=i(Td);tk=s(D0,"PreTrainedModel"),D0.forEach(t),ok=s(pf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pf.forEach(t),nk=m(To),yr=r(To,"P",{});var hf=i(yr);sk=s(hf,"This model is also a PyTorch "),vr=r(hf,"A",{href:!0,rel:!0});var S0=i(vr);ak=s(S0,"torch.nn.Module"),S0.forEach(t),rk=s(hf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hf.forEach(t),ik=m(To),Rt=r(To,"DIV",{class:!0});var $o=i(Rt);w(wr.$$.fragment,$o),lk=m($o),Uo=r($o,"P",{});var sc=i(Uo);dk=s(sc,"The "),$d=r(sc,"A",{href:!0});var W0=i($d);ck=s(W0,"RobertaForMaskedLM"),W0.forEach(t),pk=s(sc," forward method, overrides the "),rp=r(sc,"CODE",{});var B0=i(rp);hk=s(B0,"__call__"),B0.forEach(t),mk=s(sc," special method."),sc.forEach(t),uk=m($o),w(Zn.$$.fragment,$o),fk=m($o),w(es.$$.fragment,$o),gk=m($o),w(ts.$$.fragment,$o),$o.forEach(t),To.forEach(t),hu=m(o),Ho=r(o,"H2",{class:!0});var mf=i(Ho);os=r(mf,"A",{id:!0,class:!0,href:!0});var U0=i(os);ip=r(U0,"SPAN",{});var H0=i(ip);w(Tr.$$.fragment,H0),H0.forEach(t),U0.forEach(t),_k=m(mf),lp=r(mf,"SPAN",{});var Q0=i(lp);bk=s(Q0,"RobertaForSequenceClassification"),Q0.forEach(t),mf.forEach(t),mu=m(o),Tt=r(o,"DIV",{class:!0});var Fo=i(Tt);w($r.$$.fragment,Fo),kk=m(Fo),dp=r(Fo,"P",{});var V0=i(dp);yk=s(V0,`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),V0.forEach(t),vk=m(Fo),Fr=r(Fo,"P",{});var uf=i(Fr);wk=s(uf,"This model inherits from "),Fd=r(uf,"A",{href:!0});var K0=i(Fd);Tk=s(K0,"PreTrainedModel"),K0.forEach(t),$k=s(uf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uf.forEach(t),Fk=m(Fo),xr=r(Fo,"P",{});var ff=i(xr);xk=s(ff,"This model is also a PyTorch "),Rr=r(ff,"A",{href:!0,rel:!0});var J0=i(Rr);Rk=s(J0,"torch.nn.Module"),J0.forEach(t),Ek=s(ff,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ff.forEach(t),Mk=m(Fo),ct=r(Fo,"DIV",{class:!0});var Lt=i(ct);w(Er.$$.fragment,Lt),zk=m(Lt),Qo=r(Lt,"P",{});var ac=i(Qo);Ck=s(ac,"The "),xd=r(ac,"A",{href:!0});var G0=i(xd);jk=s(G0,"RobertaForSequenceClassification"),G0.forEach(t),qk=s(ac," forward method, overrides the "),cp=r(ac,"CODE",{});var X0=i(cp);Pk=s(X0,"__call__"),X0.forEach(t),Lk=s(ac," special method."),ac.forEach(t),Ak=m(Lt),w(ns.$$.fragment,Lt),Ok=m(Lt),w(ss.$$.fragment,Lt),Nk=m(Lt),w(as.$$.fragment,Lt),Ik=m(Lt),w(rs.$$.fragment,Lt),Dk=m(Lt),w(is.$$.fragment,Lt),Lt.forEach(t),Fo.forEach(t),uu=m(o),Vo=r(o,"H2",{class:!0});var gf=i(Vo);ls=r(gf,"A",{id:!0,class:!0,href:!0});var Y0=i(ls);pp=r(Y0,"SPAN",{});var Z0=i(pp);w(Mr.$$.fragment,Z0),Z0.forEach(t),Y0.forEach(t),Sk=m(gf),hp=r(gf,"SPAN",{});var ex=i(hp);Wk=s(ex,"RobertaForMultipleChoice"),ex.forEach(t),gf.forEach(t),fu=m(o),$t=r(o,"DIV",{class:!0});var xo=i($t);w(zr.$$.fragment,xo),Bk=m(xo),mp=r(xo,"P",{});var tx=i(mp);Uk=s(tx,`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),tx.forEach(t),Hk=m(xo),Cr=r(xo,"P",{});var _f=i(Cr);Qk=s(_f,"This model inherits from "),Rd=r(_f,"A",{href:!0});var ox=i(Rd);Vk=s(ox,"PreTrainedModel"),ox.forEach(t),Kk=s(_f,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_f.forEach(t),Jk=m(xo),jr=r(xo,"P",{});var bf=i(jr);Gk=s(bf,"This model is also a PyTorch "),qr=r(bf,"A",{href:!0,rel:!0});var nx=i(qr);Xk=s(nx,"torch.nn.Module"),nx.forEach(t),Yk=s(bf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bf.forEach(t),Zk=m(xo),Qt=r(xo,"DIV",{class:!0});var ka=i(Qt);w(Pr.$$.fragment,ka),ey=m(ka),Ko=r(ka,"P",{});var rc=i(Ko);ty=s(rc,"The "),Ed=r(rc,"A",{href:!0});var sx=i(Ed);oy=s(sx,"RobertaForMultipleChoice"),sx.forEach(t),ny=s(rc," forward method, overrides the "),up=r(rc,"CODE",{});var ax=i(up);sy=s(ax,"__call__"),ax.forEach(t),ay=s(rc," special method."),rc.forEach(t),ry=m(ka),w(ds.$$.fragment,ka),iy=m(ka),w(cs.$$.fragment,ka),ka.forEach(t),xo.forEach(t),gu=m(o),Jo=r(o,"H2",{class:!0});var kf=i(Jo);ps=r(kf,"A",{id:!0,class:!0,href:!0});var rx=i(ps);fp=r(rx,"SPAN",{});var ix=i(fp);w(Lr.$$.fragment,ix),ix.forEach(t),rx.forEach(t),ly=m(kf),gp=r(kf,"SPAN",{});var lx=i(gp);dy=s(lx,"RobertaForTokenClassification"),lx.forEach(t),kf.forEach(t),_u=m(o),Ft=r(o,"DIV",{class:!0});var Ro=i(Ft);w(Ar.$$.fragment,Ro),cy=m(Ro),_p=r(Ro,"P",{});var dx=i(_p);py=s(dx,`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),dx.forEach(t),hy=m(Ro),Or=r(Ro,"P",{});var yf=i(Or);my=s(yf,"This model inherits from "),Md=r(yf,"A",{href:!0});var cx=i(Md);uy=s(cx,"PreTrainedModel"),cx.forEach(t),fy=s(yf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yf.forEach(t),gy=m(Ro),Nr=r(Ro,"P",{});var vf=i(Nr);_y=s(vf,"This model is also a PyTorch "),Ir=r(vf,"A",{href:!0,rel:!0});var px=i(Ir);by=s(px,"torch.nn.Module"),px.forEach(t),ky=s(vf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vf.forEach(t),yy=m(Ro),Et=r(Ro,"DIV",{class:!0});var Eo=i(Et);w(Dr.$$.fragment,Eo),vy=m(Eo),Go=r(Eo,"P",{});var ic=i(Go);wy=s(ic,"The "),zd=r(ic,"A",{href:!0});var hx=i(zd);Ty=s(hx,"RobertaForTokenClassification"),hx.forEach(t),$y=s(ic," forward method, overrides the "),bp=r(ic,"CODE",{});var mx=i(bp);Fy=s(mx,"__call__"),mx.forEach(t),xy=s(ic," special method."),ic.forEach(t),Ry=m(Eo),w(hs.$$.fragment,Eo),Ey=m(Eo),w(ms.$$.fragment,Eo),My=m(Eo),w(us.$$.fragment,Eo),Eo.forEach(t),Ro.forEach(t),bu=m(o),Xo=r(o,"H2",{class:!0});var wf=i(Xo);fs=r(wf,"A",{id:!0,class:!0,href:!0});var ux=i(fs);kp=r(ux,"SPAN",{});var fx=i(kp);w(Sr.$$.fragment,fx),fx.forEach(t),ux.forEach(t),zy=m(wf),yp=r(wf,"SPAN",{});var gx=i(yp);Cy=s(gx,"RobertaForQuestionAnswering"),gx.forEach(t),wf.forEach(t),ku=m(o),xt=r(o,"DIV",{class:!0});var Mo=i(xt);w(Wr.$$.fragment,Mo),jy=m(Mo),Yo=r(Mo,"P",{});var lc=i(Yo);qy=s(lc,`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),vp=r(lc,"CODE",{});var _x=i(vp);Py=s(_x,"span start logits"),_x.forEach(t),Ly=s(lc," and "),wp=r(lc,"CODE",{});var bx=i(wp);Ay=s(bx,"span end logits"),bx.forEach(t),Oy=s(lc,")."),lc.forEach(t),Ny=m(Mo),Br=r(Mo,"P",{});var Tf=i(Br);Iy=s(Tf,"This model inherits from "),Cd=r(Tf,"A",{href:!0});var kx=i(Cd);Dy=s(kx,"PreTrainedModel"),kx.forEach(t),Sy=s(Tf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tf.forEach(t),Wy=m(Mo),Ur=r(Mo,"P",{});var $f=i(Ur);By=s($f,"This model is also a PyTorch "),Hr=r($f,"A",{href:!0,rel:!0});var yx=i(Hr);Uy=s(yx,"torch.nn.Module"),yx.forEach(t),Hy=s($f,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$f.forEach(t),Qy=m(Mo),Mt=r(Mo,"DIV",{class:!0});var zo=i(Mt);w(Qr.$$.fragment,zo),Vy=m(zo),Zo=r(zo,"P",{});var dc=i(Zo);Ky=s(dc,"The "),jd=r(dc,"A",{href:!0});var vx=i(jd);Jy=s(vx,"RobertaForQuestionAnswering"),vx.forEach(t),Gy=s(dc," forward method, overrides the "),Tp=r(dc,"CODE",{});var wx=i(Tp);Xy=s(wx,"__call__"),wx.forEach(t),Yy=s(dc," special method."),dc.forEach(t),Zy=m(zo),w(gs.$$.fragment,zo),ev=m(zo),w(_s.$$.fragment,zo),tv=m(zo),w(bs.$$.fragment,zo),zo.forEach(t),Mo.forEach(t),yu=m(o),en=r(o,"H2",{class:!0});var Ff=i(en);ks=r(Ff,"A",{id:!0,class:!0,href:!0});var Tx=i(ks);$p=r(Tx,"SPAN",{});var $x=i($p);w(Vr.$$.fragment,$x),$x.forEach(t),Tx.forEach(t),ov=m(Ff),Fp=r(Ff,"SPAN",{});var Fx=i(Fp);nv=s(Fx,"TFRobertaModel"),Fx.forEach(t),Ff.forEach(t),vu=m(o),ht=r(o,"DIV",{class:!0});var no=i(ht);w(Kr.$$.fragment,no),sv=m(no),xp=r(no,"P",{});var xx=i(xp);av=s(xx,"The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),xx.forEach(t),rv=m(no),Jr=r(no,"P",{});var xf=i(Jr);iv=s(xf,"This model inherits from "),qd=r(xf,"A",{href:!0});var Rx=i(qd);lv=s(Rx,"TFPreTrainedModel"),Rx.forEach(t),dv=s(xf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xf.forEach(t),cv=m(no),Gr=r(no,"P",{});var Rf=i(Gr);pv=s(Rf,"This model is also a "),Xr=r(Rf,"A",{href:!0,rel:!0});var Ex=i(Xr);hv=s(Ex,"tf.keras.Model"),Ex.forEach(t),mv=s(Rf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rf.forEach(t),uv=m(no),w(ys.$$.fragment,no),fv=m(no),Vt=r(no,"DIV",{class:!0});var ya=i(Vt);w(Yr.$$.fragment,ya),gv=m(ya),tn=r(ya,"P",{});var cc=i(tn);_v=s(cc,"The "),Pd=r(cc,"A",{href:!0});var Mx=i(Pd);bv=s(Mx,"TFRobertaModel"),Mx.forEach(t),kv=s(cc," forward method, overrides the "),Rp=r(cc,"CODE",{});var zx=i(Rp);yv=s(zx,"__call__"),zx.forEach(t),vv=s(cc," special method."),cc.forEach(t),wv=m(ya),w(vs.$$.fragment,ya),Tv=m(ya),w(ws.$$.fragment,ya),ya.forEach(t),no.forEach(t),wu=m(o),on=r(o,"H2",{class:!0});var Ef=i(on);Ts=r(Ef,"A",{id:!0,class:!0,href:!0});var Cx=i(Ts);Ep=r(Cx,"SPAN",{});var jx=i(Ep);w(Zr.$$.fragment,jx),jx.forEach(t),Cx.forEach(t),$v=m(Ef),Mp=r(Ef,"SPAN",{});var qx=i(Mp);Fv=s(qx,"TFRobertaForCausalLM"),qx.forEach(t),Ef.forEach(t),Tu=m(o),nn=r(o,"DIV",{class:!0});var Mf=i(nn);w(ei.$$.fragment,Mf),xv=m(Mf),Kt=r(Mf,"DIV",{class:!0});var va=i(Kt);w(ti.$$.fragment,va),Rv=m(va),sn=r(va,"P",{});var pc=i(sn);Ev=s(pc,"The "),Ld=r(pc,"A",{href:!0});var Px=i(Ld);Mv=s(Px,"TFRobertaForCausalLM"),Px.forEach(t),zv=s(pc," forward method, overrides the "),zp=r(pc,"CODE",{});var Lx=i(zp);Cv=s(Lx,"__call__"),Lx.forEach(t),jv=s(pc," special method."),pc.forEach(t),qv=m(va),w($s.$$.fragment,va),Pv=m(va),w(Fs.$$.fragment,va),va.forEach(t),Mf.forEach(t),$u=m(o),an=r(o,"H2",{class:!0});var zf=i(an);xs=r(zf,"A",{id:!0,class:!0,href:!0});var Ax=i(xs);Cp=r(Ax,"SPAN",{});var Ox=i(Cp);w(oi.$$.fragment,Ox),Ox.forEach(t),Ax.forEach(t),Lv=m(zf),jp=r(zf,"SPAN",{});var Nx=i(jp);Av=s(Nx,"TFRobertaForMaskedLM"),Nx.forEach(t),zf.forEach(t),Fu=m(o),mt=r(o,"DIV",{class:!0});var so=i(mt);w(ni.$$.fragment,so),Ov=m(so),si=r(so,"P",{});var Cf=i(si);Nv=s(Cf,"RoBERTa Model with a "),qp=r(Cf,"CODE",{});var Ix=i(qp);Iv=s(Ix,"language modeling"),Ix.forEach(t),Dv=s(Cf," head on top."),Cf.forEach(t),Sv=m(so),ai=r(so,"P",{});var jf=i(ai);Wv=s(jf,"This model inherits from "),Ad=r(jf,"A",{href:!0});var Dx=i(Ad);Bv=s(Dx,"TFPreTrainedModel"),Dx.forEach(t),Uv=s(jf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jf.forEach(t),Hv=m(so),ri=r(so,"P",{});var qf=i(ri);Qv=s(qf,"This model is also a "),ii=r(qf,"A",{href:!0,rel:!0});var Sx=i(ii);Vv=s(Sx,"tf.keras.Model"),Sx.forEach(t),Kv=s(qf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qf.forEach(t),Jv=m(so),w(Rs.$$.fragment,so),Gv=m(so),zt=r(so,"DIV",{class:!0});var Co=i(zt);w(li.$$.fragment,Co),Xv=m(Co),rn=r(Co,"P",{});var hc=i(rn);Yv=s(hc,"The "),Od=r(hc,"A",{href:!0});var Wx=i(Od);Zv=s(Wx,"TFRobertaForMaskedLM"),Wx.forEach(t),ew=s(hc," forward method, overrides the "),Pp=r(hc,"CODE",{});var Bx=i(Pp);tw=s(Bx,"__call__"),Bx.forEach(t),ow=s(hc," special method."),hc.forEach(t),nw=m(Co),w(Es.$$.fragment,Co),sw=m(Co),w(Ms.$$.fragment,Co),aw=m(Co),w(zs.$$.fragment,Co),Co.forEach(t),so.forEach(t),xu=m(o),ln=r(o,"H2",{class:!0});var Pf=i(ln);Cs=r(Pf,"A",{id:!0,class:!0,href:!0});var Ux=i(Cs);Lp=r(Ux,"SPAN",{});var Hx=i(Lp);w(di.$$.fragment,Hx),Hx.forEach(t),Ux.forEach(t),rw=m(Pf),Ap=r(Pf,"SPAN",{});var Qx=i(Ap);iw=s(Qx,"TFRobertaForSequenceClassification"),Qx.forEach(t),Pf.forEach(t),Ru=m(o),ut=r(o,"DIV",{class:!0});var ao=i(ut);w(ci.$$.fragment,ao),lw=m(ao),Op=r(ao,"P",{});var Vx=i(Op);dw=s(Vx,`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Vx.forEach(t),cw=m(ao),pi=r(ao,"P",{});var Lf=i(pi);pw=s(Lf,"This model inherits from "),Nd=r(Lf,"A",{href:!0});var Kx=i(Nd);hw=s(Kx,"TFPreTrainedModel"),Kx.forEach(t),mw=s(Lf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lf.forEach(t),uw=m(ao),hi=r(ao,"P",{});var Af=i(hi);fw=s(Af,"This model is also a "),mi=r(Af,"A",{href:!0,rel:!0});var Jx=i(mi);gw=s(Jx,"tf.keras.Model"),Jx.forEach(t),_w=s(Af,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Af.forEach(t),bw=m(ao),w(js.$$.fragment,ao),kw=m(ao),Ct=r(ao,"DIV",{class:!0});var jo=i(Ct);w(ui.$$.fragment,jo),yw=m(jo),dn=r(jo,"P",{});var mc=i(dn);vw=s(mc,"The "),Id=r(mc,"A",{href:!0});var Gx=i(Id);ww=s(Gx,"TFRobertaForSequenceClassification"),Gx.forEach(t),Tw=s(mc," forward method, overrides the "),Np=r(mc,"CODE",{});var Xx=i(Np);$w=s(Xx,"__call__"),Xx.forEach(t),Fw=s(mc," special method."),mc.forEach(t),xw=m(jo),w(qs.$$.fragment,jo),Rw=m(jo),w(Ps.$$.fragment,jo),Ew=m(jo),w(Ls.$$.fragment,jo),jo.forEach(t),ao.forEach(t),Eu=m(o),cn=r(o,"H2",{class:!0});var Of=i(cn);As=r(Of,"A",{id:!0,class:!0,href:!0});var Yx=i(As);Ip=r(Yx,"SPAN",{});var Zx=i(Ip);w(fi.$$.fragment,Zx),Zx.forEach(t),Yx.forEach(t),Mw=m(Of),Dp=r(Of,"SPAN",{});var eR=i(Dp);zw=s(eR,"TFRobertaForMultipleChoice"),eR.forEach(t),Of.forEach(t),Mu=m(o),ft=r(o,"DIV",{class:!0});var ro=i(ft);w(gi.$$.fragment,ro),Cw=m(ro),Sp=r(ro,"P",{});var tR=i(Sp);jw=s(tR,`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),tR.forEach(t),qw=m(ro),_i=r(ro,"P",{});var Nf=i(_i);Pw=s(Nf,"This model inherits from "),Dd=r(Nf,"A",{href:!0});var oR=i(Dd);Lw=s(oR,"TFPreTrainedModel"),oR.forEach(t),Aw=s(Nf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nf.forEach(t),Ow=m(ro),bi=r(ro,"P",{});var If=i(bi);Nw=s(If,"This model is also a "),ki=r(If,"A",{href:!0,rel:!0});var nR=i(ki);Iw=s(nR,"tf.keras.Model"),nR.forEach(t),Dw=s(If,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),If.forEach(t),Sw=m(ro),w(Os.$$.fragment,ro),Ww=m(ro),Jt=r(ro,"DIV",{class:!0});var wa=i(Jt);w(yi.$$.fragment,wa),Bw=m(wa),pn=r(wa,"P",{});var uc=i(pn);Uw=s(uc,"The "),Sd=r(uc,"A",{href:!0});var sR=i(Sd);Hw=s(sR,"TFRobertaForMultipleChoice"),sR.forEach(t),Qw=s(uc," forward method, overrides the "),Wp=r(uc,"CODE",{});var aR=i(Wp);Vw=s(aR,"__call__"),aR.forEach(t),Kw=s(uc," special method."),uc.forEach(t),Jw=m(wa),w(Ns.$$.fragment,wa),Gw=m(wa),w(Is.$$.fragment,wa),wa.forEach(t),ro.forEach(t),zu=m(o),hn=r(o,"H2",{class:!0});var Df=i(hn);Ds=r(Df,"A",{id:!0,class:!0,href:!0});var rR=i(Ds);Bp=r(rR,"SPAN",{});var iR=i(Bp);w(vi.$$.fragment,iR),iR.forEach(t),rR.forEach(t),Xw=m(Df),Up=r(Df,"SPAN",{});var lR=i(Up);Yw=s(lR,"TFRobertaForTokenClassification"),lR.forEach(t),Df.forEach(t),Cu=m(o),gt=r(o,"DIV",{class:!0});var io=i(gt);w(wi.$$.fragment,io),Zw=m(io),Hp=r(io,"P",{});var dR=i(Hp);eT=s(dR,`RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),dR.forEach(t),tT=m(io),Ti=r(io,"P",{});var Sf=i(Ti);oT=s(Sf,"This model inherits from "),Wd=r(Sf,"A",{href:!0});var cR=i(Wd);nT=s(cR,"TFPreTrainedModel"),cR.forEach(t),sT=s(Sf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sf.forEach(t),aT=m(io),$i=r(io,"P",{});var Wf=i($i);rT=s(Wf,"This model is also a "),Fi=r(Wf,"A",{href:!0,rel:!0});var pR=i(Fi);iT=s(pR,"tf.keras.Model"),pR.forEach(t),lT=s(Wf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wf.forEach(t),dT=m(io),w(Ss.$$.fragment,io),cT=m(io),jt=r(io,"DIV",{class:!0});var qo=i(jt);w(xi.$$.fragment,qo),pT=m(qo),mn=r(qo,"P",{});var fc=i(mn);hT=s(fc,"The "),Bd=r(fc,"A",{href:!0});var hR=i(Bd);mT=s(hR,"TFRobertaForTokenClassification"),hR.forEach(t),uT=s(fc," forward method, overrides the "),Qp=r(fc,"CODE",{});var mR=i(Qp);fT=s(mR,"__call__"),mR.forEach(t),gT=s(fc," special method."),fc.forEach(t),_T=m(qo),w(Ws.$$.fragment,qo),bT=m(qo),w(Bs.$$.fragment,qo),kT=m(qo),w(Us.$$.fragment,qo),qo.forEach(t),io.forEach(t),ju=m(o),un=r(o,"H2",{class:!0});var Bf=i(un);Hs=r(Bf,"A",{id:!0,class:!0,href:!0});var uR=i(Hs);Vp=r(uR,"SPAN",{});var fR=i(Vp);w(Ri.$$.fragment,fR),fR.forEach(t),uR.forEach(t),yT=m(Bf),Kp=r(Bf,"SPAN",{});var gR=i(Kp);vT=s(gR,"TFRobertaForQuestionAnswering"),gR.forEach(t),Bf.forEach(t),qu=m(o),_t=r(o,"DIV",{class:!0});var lo=i(_t);w(Ei.$$.fragment,lo),wT=m(lo),fn=r(lo,"P",{});var gc=i(fn);TT=s(gc,`RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Jp=r(gc,"CODE",{});var _R=i(Jp);$T=s(_R,"span start logits"),_R.forEach(t),FT=s(gc," and "),Gp=r(gc,"CODE",{});var bR=i(Gp);xT=s(bR,"span end logits"),bR.forEach(t),RT=s(gc,")."),gc.forEach(t),ET=m(lo),Mi=r(lo,"P",{});var Uf=i(Mi);MT=s(Uf,"This model inherits from "),Ud=r(Uf,"A",{href:!0});var kR=i(Ud);zT=s(kR,"TFPreTrainedModel"),kR.forEach(t),CT=s(Uf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uf.forEach(t),jT=m(lo),zi=r(lo,"P",{});var Hf=i(zi);qT=s(Hf,"This model is also a "),Ci=r(Hf,"A",{href:!0,rel:!0});var yR=i(Ci);PT=s(yR,"tf.keras.Model"),yR.forEach(t),LT=s(Hf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hf.forEach(t),AT=m(lo),w(Qs.$$.fragment,lo),OT=m(lo),qt=r(lo,"DIV",{class:!0});var Po=i(qt);w(ji.$$.fragment,Po),NT=m(Po),gn=r(Po,"P",{});var _c=i(gn);IT=s(_c,"The "),Hd=r(_c,"A",{href:!0});var vR=i(Hd);DT=s(vR,"TFRobertaForQuestionAnswering"),vR.forEach(t),ST=s(_c," forward method, overrides the "),Xp=r(_c,"CODE",{});var wR=i(Xp);WT=s(wR,"__call__"),wR.forEach(t),BT=s(_c," special method."),_c.forEach(t),UT=m(Po),w(Vs.$$.fragment,Po),HT=m(Po),w(Ks.$$.fragment,Po),QT=m(Po),w(Js.$$.fragment,Po),Po.forEach(t),lo.forEach(t),Pu=m(o),_n=r(o,"H2",{class:!0});var Qf=i(_n);Gs=r(Qf,"A",{id:!0,class:!0,href:!0});var TR=i(Gs);Yp=r(TR,"SPAN",{});var $R=i(Yp);w(qi.$$.fragment,$R),$R.forEach(t),TR.forEach(t),VT=m(Qf),Zp=r(Qf,"SPAN",{});var FR=i(Zp);KT=s(FR,"FlaxRobertaModel"),FR.forEach(t),Qf.forEach(t),Lu=m(o),nt=r(o,"DIV",{class:!0});var At=i(nt);w(Pi.$$.fragment,At),JT=m(At),eh=r(At,"P",{});var xR=i(eh);GT=s(xR,"The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),xR.forEach(t),XT=m(At),Li=r(At,"P",{});var Vf=i(Li);YT=s(Vf,"This model inherits from "),Qd=r(Vf,"A",{href:!0});var RR=i(Qd);ZT=s(RR,"FlaxPreTrainedModel"),RR.forEach(t),e$=s(Vf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Vf.forEach(t),t$=m(At),Ai=r(At,"P",{});var Kf=i(Ai);o$=s(Kf,"This model is also a Flax Linen "),Oi=r(Kf,"A",{href:!0,rel:!0});var ER=i(Oi);n$=s(ER,"flax.linen.Module"),ER.forEach(t),s$=s(Kf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Kf.forEach(t),a$=m(At),th=r(At,"P",{});var MR=i(th);r$=s(MR,"Finally, this model supports inherent JAX features such as:"),MR.forEach(t),i$=m(At),po=r(At,"UL",{});var Ta=i(po);oh=r(Ta,"LI",{});var zR=i(oh);Ni=r(zR,"A",{href:!0,rel:!0});var CR=i(Ni);l$=s(CR,"Just-In-Time (JIT) compilation"),CR.forEach(t),zR.forEach(t),d$=m(Ta),nh=r(Ta,"LI",{});var jR=i(nh);Ii=r(jR,"A",{href:!0,rel:!0});var qR=i(Ii);c$=s(qR,"Automatic Differentiation"),qR.forEach(t),jR.forEach(t),p$=m(Ta),sh=r(Ta,"LI",{});var PR=i(sh);Di=r(PR,"A",{href:!0,rel:!0});var LR=i(Di);h$=s(LR,"Vectorization"),LR.forEach(t),PR.forEach(t),m$=m(Ta),ah=r(Ta,"LI",{});var AR=i(ah);Si=r(AR,"A",{href:!0,rel:!0});var OR=i(Si);u$=s(OR,"Parallelization"),OR.forEach(t),AR.forEach(t),Ta.forEach(t),f$=m(At),Gt=r(At,"DIV",{class:!0});var $a=i(Gt);w(Wi.$$.fragment,$a),g$=m($a),bn=r($a,"P",{});var bc=i(bn);_$=s(bc,"The "),rh=r(bc,"CODE",{});var NR=i(rh);b$=s(NR,"FlaxRobertaPreTrainedModel"),NR.forEach(t),k$=s(bc," forward method, overrides the "),ih=r(bc,"CODE",{});var IR=i(ih);y$=s(IR,"__call__"),IR.forEach(t),v$=s(bc," special method."),bc.forEach(t),w$=m($a),w(Xs.$$.fragment,$a),T$=m($a),w(Ys.$$.fragment,$a),$a.forEach(t),At.forEach(t),Au=m(o),kn=r(o,"H2",{class:!0});var Jf=i(kn);Zs=r(Jf,"A",{id:!0,class:!0,href:!0});var DR=i(Zs);lh=r(DR,"SPAN",{});var SR=i(lh);w(Bi.$$.fragment,SR),SR.forEach(t),DR.forEach(t),$$=m(Jf),dh=r(Jf,"SPAN",{});var WR=i(dh);F$=s(WR,"FlaxRobertaForCausalLM"),WR.forEach(t),Jf.forEach(t),Ou=m(o),st=r(o,"DIV",{class:!0});var Ot=i(st);w(Ui.$$.fragment,Ot),x$=m(Ot),ch=r(Ot,"P",{});var BR=i(ch);R$=s(BR,`Roberta Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),BR.forEach(t),E$=m(Ot),Hi=r(Ot,"P",{});var Gf=i(Hi);M$=s(Gf,"This model inherits from "),Vd=r(Gf,"A",{href:!0});var UR=i(Vd);z$=s(UR,"FlaxPreTrainedModel"),UR.forEach(t),C$=s(Gf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Gf.forEach(t),j$=m(Ot),Qi=r(Ot,"P",{});var Xf=i(Qi);q$=s(Xf,"This model is also a Flax Linen "),Vi=r(Xf,"A",{href:!0,rel:!0});var HR=i(Vi);P$=s(HR,"flax.linen.Module"),HR.forEach(t),L$=s(Xf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Xf.forEach(t),A$=m(Ot),ph=r(Ot,"P",{});var QR=i(ph);O$=s(QR,"Finally, this model supports inherent JAX features such as:"),QR.forEach(t),N$=m(Ot),ho=r(Ot,"UL",{});var Fa=i(ho);hh=r(Fa,"LI",{});var VR=i(hh);Ki=r(VR,"A",{href:!0,rel:!0});var KR=i(Ki);I$=s(KR,"Just-In-Time (JIT) compilation"),KR.forEach(t),VR.forEach(t),D$=m(Fa),mh=r(Fa,"LI",{});var JR=i(mh);Ji=r(JR,"A",{href:!0,rel:!0});var GR=i(Ji);S$=s(GR,"Automatic Differentiation"),GR.forEach(t),JR.forEach(t),W$=m(Fa),uh=r(Fa,"LI",{});var XR=i(uh);Gi=r(XR,"A",{href:!0,rel:!0});var YR=i(Gi);B$=s(YR,"Vectorization"),YR.forEach(t),XR.forEach(t),U$=m(Fa),fh=r(Fa,"LI",{});var ZR=i(fh);Xi=r(ZR,"A",{href:!0,rel:!0});var eE=i(Xi);H$=s(eE,"Parallelization"),eE.forEach(t),ZR.forEach(t),Fa.forEach(t),Q$=m(Ot),Xt=r(Ot,"DIV",{class:!0});var xa=i(Xt);w(Yi.$$.fragment,xa),V$=m(xa),yn=r(xa,"P",{});var kc=i(yn);K$=s(kc,"The "),gh=r(kc,"CODE",{});var tE=i(gh);J$=s(tE,"FlaxRobertaPreTrainedModel"),tE.forEach(t),G$=s(kc," forward method, overrides the "),_h=r(kc,"CODE",{});var oE=i(_h);X$=s(oE,"__call__"),oE.forEach(t),Y$=s(kc," special method."),kc.forEach(t),Z$=m(xa),w(ea.$$.fragment,xa),e1=m(xa),w(ta.$$.fragment,xa),xa.forEach(t),Ot.forEach(t),Nu=m(o),vn=r(o,"H2",{class:!0});var Yf=i(vn);oa=r(Yf,"A",{id:!0,class:!0,href:!0});var nE=i(oa);bh=r(nE,"SPAN",{});var sE=i(bh);w(Zi.$$.fragment,sE),sE.forEach(t),nE.forEach(t),t1=m(Yf),kh=r(Yf,"SPAN",{});var aE=i(kh);o1=s(aE,"FlaxRobertaForMaskedLM"),aE.forEach(t),Yf.forEach(t),Iu=m(o),at=r(o,"DIV",{class:!0});var Nt=i(at);w(el.$$.fragment,Nt),n1=m(Nt),tl=r(Nt,"P",{});var Zf=i(tl);s1=s(Zf,"RoBERTa Model with a "),yh=r(Zf,"CODE",{});var rE=i(yh);a1=s(rE,"language modeling"),rE.forEach(t),r1=s(Zf," head on top."),Zf.forEach(t),i1=m(Nt),ol=r(Nt,"P",{});var eg=i(ol);l1=s(eg,"This model inherits from "),Kd=r(eg,"A",{href:!0});var iE=i(Kd);d1=s(iE,"FlaxPreTrainedModel"),iE.forEach(t),c1=s(eg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),eg.forEach(t),p1=m(Nt),nl=r(Nt,"P",{});var tg=i(nl);h1=s(tg,"This model is also a Flax Linen "),sl=r(tg,"A",{href:!0,rel:!0});var lE=i(sl);m1=s(lE,"flax.linen.Module"),lE.forEach(t),u1=s(tg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),tg.forEach(t),f1=m(Nt),vh=r(Nt,"P",{});var dE=i(vh);g1=s(dE,"Finally, this model supports inherent JAX features such as:"),dE.forEach(t),_1=m(Nt),mo=r(Nt,"UL",{});var Ra=i(mo);wh=r(Ra,"LI",{});var cE=i(wh);al=r(cE,"A",{href:!0,rel:!0});var pE=i(al);b1=s(pE,"Just-In-Time (JIT) compilation"),pE.forEach(t),cE.forEach(t),k1=m(Ra),Th=r(Ra,"LI",{});var hE=i(Th);rl=r(hE,"A",{href:!0,rel:!0});var mE=i(rl);y1=s(mE,"Automatic Differentiation"),mE.forEach(t),hE.forEach(t),v1=m(Ra),$h=r(Ra,"LI",{});var uE=i($h);il=r(uE,"A",{href:!0,rel:!0});var fE=i(il);w1=s(fE,"Vectorization"),fE.forEach(t),uE.forEach(t),T1=m(Ra),Fh=r(Ra,"LI",{});var gE=i(Fh);ll=r(gE,"A",{href:!0,rel:!0});var _E=i(ll);$1=s(_E,"Parallelization"),_E.forEach(t),gE.forEach(t),Ra.forEach(t),F1=m(Nt),Yt=r(Nt,"DIV",{class:!0});var Ea=i(Yt);w(dl.$$.fragment,Ea),x1=m(Ea),wn=r(Ea,"P",{});var yc=i(wn);R1=s(yc,"The "),xh=r(yc,"CODE",{});var bE=i(xh);E1=s(bE,"FlaxRobertaPreTrainedModel"),bE.forEach(t),M1=s(yc," forward method, overrides the "),Rh=r(yc,"CODE",{});var kE=i(Rh);z1=s(kE,"__call__"),kE.forEach(t),C1=s(yc," special method."),yc.forEach(t),j1=m(Ea),w(na.$$.fragment,Ea),q1=m(Ea),w(sa.$$.fragment,Ea),Ea.forEach(t),Nt.forEach(t),Du=m(o),Tn=r(o,"H2",{class:!0});var og=i(Tn);aa=r(og,"A",{id:!0,class:!0,href:!0});var yE=i(aa);Eh=r(yE,"SPAN",{});var vE=i(Eh);w(cl.$$.fragment,vE),vE.forEach(t),yE.forEach(t),P1=m(og),Mh=r(og,"SPAN",{});var wE=i(Mh);L1=s(wE,"FlaxRobertaForSequenceClassification"),wE.forEach(t),og.forEach(t),Su=m(o),rt=r(o,"DIV",{class:!0});var It=i(rt);w(pl.$$.fragment,It),A1=m(It),zh=r(It,"P",{});var TE=i(zh);O1=s(TE,`Roberta Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),TE.forEach(t),N1=m(It),hl=r(It,"P",{});var ng=i(hl);I1=s(ng,"This model inherits from "),Jd=r(ng,"A",{href:!0});var $E=i(Jd);D1=s($E,"FlaxPreTrainedModel"),$E.forEach(t),S1=s(ng,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ng.forEach(t),W1=m(It),ml=r(It,"P",{});var sg=i(ml);B1=s(sg,"This model is also a Flax Linen "),ul=r(sg,"A",{href:!0,rel:!0});var FE=i(ul);U1=s(FE,"flax.linen.Module"),FE.forEach(t),H1=s(sg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),sg.forEach(t),Q1=m(It),Ch=r(It,"P",{});var xE=i(Ch);V1=s(xE,"Finally, this model supports inherent JAX features such as:"),xE.forEach(t),K1=m(It),uo=r(It,"UL",{});var Ma=i(uo);jh=r(Ma,"LI",{});var RE=i(jh);fl=r(RE,"A",{href:!0,rel:!0});var EE=i(fl);J1=s(EE,"Just-In-Time (JIT) compilation"),EE.forEach(t),RE.forEach(t),G1=m(Ma),qh=r(Ma,"LI",{});var ME=i(qh);gl=r(ME,"A",{href:!0,rel:!0});var zE=i(gl);X1=s(zE,"Automatic Differentiation"),zE.forEach(t),ME.forEach(t),Y1=m(Ma),Ph=r(Ma,"LI",{});var CE=i(Ph);_l=r(CE,"A",{href:!0,rel:!0});var jE=i(_l);Z1=s(jE,"Vectorization"),jE.forEach(t),CE.forEach(t),e2=m(Ma),Lh=r(Ma,"LI",{});var qE=i(Lh);bl=r(qE,"A",{href:!0,rel:!0});var PE=i(bl);t2=s(PE,"Parallelization"),PE.forEach(t),qE.forEach(t),Ma.forEach(t),o2=m(It),Zt=r(It,"DIV",{class:!0});var za=i(Zt);w(kl.$$.fragment,za),n2=m(za),$n=r(za,"P",{});var vc=i($n);s2=s(vc,"The "),Ah=r(vc,"CODE",{});var LE=i(Ah);a2=s(LE,"FlaxRobertaPreTrainedModel"),LE.forEach(t),r2=s(vc," forward method, overrides the "),Oh=r(vc,"CODE",{});var AE=i(Oh);i2=s(AE,"__call__"),AE.forEach(t),l2=s(vc," special method."),vc.forEach(t),d2=m(za),w(ra.$$.fragment,za),c2=m(za),w(ia.$$.fragment,za),za.forEach(t),It.forEach(t),Wu=m(o),Fn=r(o,"H2",{class:!0});var ag=i(Fn);la=r(ag,"A",{id:!0,class:!0,href:!0});var OE=i(la);Nh=r(OE,"SPAN",{});var NE=i(Nh);w(yl.$$.fragment,NE),NE.forEach(t),OE.forEach(t),p2=m(ag),Ih=r(ag,"SPAN",{});var IE=i(Ih);h2=s(IE,"FlaxRobertaForMultipleChoice"),IE.forEach(t),ag.forEach(t),Bu=m(o),it=r(o,"DIV",{class:!0});var Dt=i(it);w(vl.$$.fragment,Dt),m2=m(Dt),Dh=r(Dt,"P",{});var DE=i(Dh);u2=s(DE,`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),DE.forEach(t),f2=m(Dt),wl=r(Dt,"P",{});var rg=i(wl);g2=s(rg,"This model inherits from "),Gd=r(rg,"A",{href:!0});var SE=i(Gd);_2=s(SE,"FlaxPreTrainedModel"),SE.forEach(t),b2=s(rg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),rg.forEach(t),k2=m(Dt),Tl=r(Dt,"P",{});var ig=i(Tl);y2=s(ig,"This model is also a Flax Linen "),$l=r(ig,"A",{href:!0,rel:!0});var WE=i($l);v2=s(WE,"flax.linen.Module"),WE.forEach(t),w2=s(ig,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ig.forEach(t),T2=m(Dt),Sh=r(Dt,"P",{});var BE=i(Sh);$2=s(BE,"Finally, this model supports inherent JAX features such as:"),BE.forEach(t),F2=m(Dt),fo=r(Dt,"UL",{});var Ca=i(fo);Wh=r(Ca,"LI",{});var UE=i(Wh);Fl=r(UE,"A",{href:!0,rel:!0});var HE=i(Fl);x2=s(HE,"Just-In-Time (JIT) compilation"),HE.forEach(t),UE.forEach(t),R2=m(Ca),Bh=r(Ca,"LI",{});var QE=i(Bh);xl=r(QE,"A",{href:!0,rel:!0});var VE=i(xl);E2=s(VE,"Automatic Differentiation"),VE.forEach(t),QE.forEach(t),M2=m(Ca),Uh=r(Ca,"LI",{});var KE=i(Uh);Rl=r(KE,"A",{href:!0,rel:!0});var JE=i(Rl);z2=s(JE,"Vectorization"),JE.forEach(t),KE.forEach(t),C2=m(Ca),Hh=r(Ca,"LI",{});var GE=i(Hh);El=r(GE,"A",{href:!0,rel:!0});var XE=i(El);j2=s(XE,"Parallelization"),XE.forEach(t),GE.forEach(t),Ca.forEach(t),q2=m(Dt),eo=r(Dt,"DIV",{class:!0});var ja=i(eo);w(Ml.$$.fragment,ja),P2=m(ja),xn=r(ja,"P",{});var wc=i(xn);L2=s(wc,"The "),Qh=r(wc,"CODE",{});var YE=i(Qh);A2=s(YE,"FlaxRobertaPreTrainedModel"),YE.forEach(t),O2=s(wc," forward method, overrides the "),Vh=r(wc,"CODE",{});var ZE=i(Vh);N2=s(ZE,"__call__"),ZE.forEach(t),I2=s(wc," special method."),wc.forEach(t),D2=m(ja),w(da.$$.fragment,ja),S2=m(ja),w(ca.$$.fragment,ja),ja.forEach(t),Dt.forEach(t),Uu=m(o),Rn=r(o,"H2",{class:!0});var lg=i(Rn);pa=r(lg,"A",{id:!0,class:!0,href:!0});var eM=i(pa);Kh=r(eM,"SPAN",{});var tM=i(Kh);w(zl.$$.fragment,tM),tM.forEach(t),eM.forEach(t),W2=m(lg),Jh=r(lg,"SPAN",{});var oM=i(Jh);B2=s(oM,"FlaxRobertaForTokenClassification"),oM.forEach(t),lg.forEach(t),Hu=m(o),lt=r(o,"DIV",{class:!0});var St=i(lt);w(Cl.$$.fragment,St),U2=m(St),Gh=r(St,"P",{});var nM=i(Gh);H2=s(nM,`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),nM.forEach(t),Q2=m(St),jl=r(St,"P",{});var dg=i(jl);V2=s(dg,"This model inherits from "),Xd=r(dg,"A",{href:!0});var sM=i(Xd);K2=s(sM,"FlaxPreTrainedModel"),sM.forEach(t),J2=s(dg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),dg.forEach(t),G2=m(St),ql=r(St,"P",{});var cg=i(ql);X2=s(cg,"This model is also a Flax Linen "),Pl=r(cg,"A",{href:!0,rel:!0});var aM=i(Pl);Y2=s(aM,"flax.linen.Module"),aM.forEach(t),Z2=s(cg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),cg.forEach(t),eF=m(St),Xh=r(St,"P",{});var rM=i(Xh);tF=s(rM,"Finally, this model supports inherent JAX features such as:"),rM.forEach(t),oF=m(St),go=r(St,"UL",{});var qa=i(go);Yh=r(qa,"LI",{});var iM=i(Yh);Ll=r(iM,"A",{href:!0,rel:!0});var lM=i(Ll);nF=s(lM,"Just-In-Time (JIT) compilation"),lM.forEach(t),iM.forEach(t),sF=m(qa),Zh=r(qa,"LI",{});var dM=i(Zh);Al=r(dM,"A",{href:!0,rel:!0});var cM=i(Al);aF=s(cM,"Automatic Differentiation"),cM.forEach(t),dM.forEach(t),rF=m(qa),em=r(qa,"LI",{});var pM=i(em);Ol=r(pM,"A",{href:!0,rel:!0});var hM=i(Ol);iF=s(hM,"Vectorization"),hM.forEach(t),pM.forEach(t),lF=m(qa),tm=r(qa,"LI",{});var mM=i(tm);Nl=r(mM,"A",{href:!0,rel:!0});var uM=i(Nl);dF=s(uM,"Parallelization"),uM.forEach(t),mM.forEach(t),qa.forEach(t),cF=m(St),to=r(St,"DIV",{class:!0});var Pa=i(to);w(Il.$$.fragment,Pa),pF=m(Pa),En=r(Pa,"P",{});var Tc=i(En);hF=s(Tc,"The "),om=r(Tc,"CODE",{});var fM=i(om);mF=s(fM,"FlaxRobertaPreTrainedModel"),fM.forEach(t),uF=s(Tc," forward method, overrides the "),nm=r(Tc,"CODE",{});var gM=i(nm);fF=s(gM,"__call__"),gM.forEach(t),gF=s(Tc," special method."),Tc.forEach(t),_F=m(Pa),w(ha.$$.fragment,Pa),bF=m(Pa),w(ma.$$.fragment,Pa),Pa.forEach(t),St.forEach(t),Qu=m(o),Mn=r(o,"H2",{class:!0});var pg=i(Mn);ua=r(pg,"A",{id:!0,class:!0,href:!0});var _M=i(ua);sm=r(_M,"SPAN",{});var bM=i(sm);w(Dl.$$.fragment,bM),bM.forEach(t),_M.forEach(t),kF=m(pg),am=r(pg,"SPAN",{});var kM=i(am);yF=s(kM,"FlaxRobertaForQuestionAnswering"),kM.forEach(t),pg.forEach(t),Vu=m(o),dt=r(o,"DIV",{class:!0});var Wt=i(dt);w(Sl.$$.fragment,Wt),vF=m(Wt),zn=r(Wt,"P",{});var $c=i(zn);wF=s($c,`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),rm=r($c,"CODE",{});var yM=i(rm);TF=s(yM,"span start logits"),yM.forEach(t),$F=s($c," and "),im=r($c,"CODE",{});var vM=i(im);FF=s(vM,"span end logits"),vM.forEach(t),xF=s($c,")."),$c.forEach(t),RF=m(Wt),Wl=r(Wt,"P",{});var hg=i(Wl);EF=s(hg,"This model inherits from "),Yd=r(hg,"A",{href:!0});var wM=i(Yd);MF=s(wM,"FlaxPreTrainedModel"),wM.forEach(t),zF=s(hg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),hg.forEach(t),CF=m(Wt),Bl=r(Wt,"P",{});var mg=i(Bl);jF=s(mg,"This model is also a Flax Linen "),Ul=r(mg,"A",{href:!0,rel:!0});var TM=i(Ul);qF=s(TM,"flax.linen.Module"),TM.forEach(t),PF=s(mg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),mg.forEach(t),LF=m(Wt),lm=r(Wt,"P",{});var $M=i(lm);AF=s($M,"Finally, this model supports inherent JAX features such as:"),$M.forEach(t),OF=m(Wt),_o=r(Wt,"UL",{});var La=i(_o);dm=r(La,"LI",{});var FM=i(dm);Hl=r(FM,"A",{href:!0,rel:!0});var xM=i(Hl);NF=s(xM,"Just-In-Time (JIT) compilation"),xM.forEach(t),FM.forEach(t),IF=m(La),cm=r(La,"LI",{});var RM=i(cm);Ql=r(RM,"A",{href:!0,rel:!0});var EM=i(Ql);DF=s(EM,"Automatic Differentiation"),EM.forEach(t),RM.forEach(t),SF=m(La),pm=r(La,"LI",{});var MM=i(pm);Vl=r(MM,"A",{href:!0,rel:!0});var zM=i(Vl);WF=s(zM,"Vectorization"),zM.forEach(t),MM.forEach(t),BF=m(La),hm=r(La,"LI",{});var CM=i(hm);Kl=r(CM,"A",{href:!0,rel:!0});var jM=i(Kl);UF=s(jM,"Parallelization"),jM.forEach(t),CM.forEach(t),La.forEach(t),HF=m(Wt),oo=r(Wt,"DIV",{class:!0});var Aa=i(oo);w(Jl.$$.fragment,Aa),QF=m(Aa),Cn=r(Aa,"P",{});var Fc=i(Cn);VF=s(Fc,"The "),mm=r(Fc,"CODE",{});var qM=i(mm);KF=s(qM,"FlaxRobertaPreTrainedModel"),qM.forEach(t),JF=s(Fc," forward method, overrides the "),um=r(Fc,"CODE",{});var PM=i(um);GF=s(PM,"__call__"),PM.forEach(t),XF=s(Fc," special method."),Fc.forEach(t),YF=m(Aa),w(fa.$$.fragment,Aa),ZF=m(Aa),w(ga.$$.fragment,Aa),Aa.forEach(t),Wt.forEach(t),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(Gz)),f(u,"id","roberta"),f(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(u,"href","#roberta"),f(c,"class","relative group"),f(te,"id","overview"),f(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(te,"href","#overview"),f(N,"class","relative group"),f(pe,"href","https://arxiv.org/abs/1907.11692"),f(pe,"rel","nofollow"),f(q,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertModel"),f(He,"href","camembert"),f(Se,"href","https://huggingface.co/julien-c"),f(Se,"rel","nofollow"),f(We,"href","https://github.com/pytorch/fairseq/tree/master/examples/roberta"),f(We,"rel","nofollow"),f(B,"id","transformers.RobertaConfig"),f(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(B,"href","#transformers.RobertaConfig"),f(Oe,"class","relative group"),f(id,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaModel"),f(ld,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaModel"),f(Na,"href","https://huggingface.co/roberta-base"),f(Na,"rel","nofollow"),f(dd,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(cd,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(pd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"),f(hd,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"),f(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(On,"id","transformers.RobertaTokenizer"),f(On,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(On,"href","#transformers.RobertaTokenizer"),f(Oo,"class","relative group"),f(md,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Dn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Sn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(gd,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Wn,"id","transformers.RobertaTokenizerFast"),f(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Wn,"href","#transformers.RobertaTokenizerFast"),f(No,"class","relative group"),f(_d,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),f(bd,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Hn,"id","transformers.RobertaModel"),f(Hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Hn,"href","#transformers.RobertaModel"),f(Io,"class","relative group"),f(kd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(ar,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ar,"rel","nofollow"),f(ir,"href","https://arxiv.org/abs/1706.03762"),f(ir,"rel","nofollow"),f(yd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaModel"),f(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Jn,"id","transformers.RobertaForCausalLM"),f(Jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Jn,"href","#transformers.RobertaForCausalLM"),f(So,"class","relative group"),f(vd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(ur,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ur,"rel","nofollow"),f(wd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForCausalLM"),f(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Yn,"id","transformers.RobertaForMaskedLM"),f(Yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Yn,"href","#transformers.RobertaForMaskedLM"),f(Bo,"class","relative group"),f(Td,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(vr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(vr,"rel","nofollow"),f($d,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForMaskedLM"),f(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(os,"id","transformers.RobertaForSequenceClassification"),f(os,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(os,"href","#transformers.RobertaForSequenceClassification"),f(Ho,"class","relative group"),f(Fd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Rr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Rr,"rel","nofollow"),f(xd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForSequenceClassification"),f(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ls,"id","transformers.RobertaForMultipleChoice"),f(ls,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ls,"href","#transformers.RobertaForMultipleChoice"),f(Vo,"class","relative group"),f(Rd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(qr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(qr,"rel","nofollow"),f(Ed,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForMultipleChoice"),f(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ps,"id","transformers.RobertaForTokenClassification"),f(ps,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ps,"href","#transformers.RobertaForTokenClassification"),f(Jo,"class","relative group"),f(Md,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Ir,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ir,"rel","nofollow"),f(zd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForTokenClassification"),f(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(fs,"id","transformers.RobertaForQuestionAnswering"),f(fs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(fs,"href","#transformers.RobertaForQuestionAnswering"),f(Xo,"class","relative group"),f(Cd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Hr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Hr,"rel","nofollow"),f(jd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForQuestionAnswering"),f(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ks,"id","transformers.TFRobertaModel"),f(ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ks,"href","#transformers.TFRobertaModel"),f(en,"class","relative group"),f(qd,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Xr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Xr,"rel","nofollow"),f(Pd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaModel"),f(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ts,"id","transformers.TFRobertaForCausalLM"),f(Ts,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ts,"href","#transformers.TFRobertaForCausalLM"),f(on,"class","relative group"),f(Ld,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForCausalLM"),f(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(nn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xs,"id","transformers.TFRobertaForMaskedLM"),f(xs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(xs,"href","#transformers.TFRobertaForMaskedLM"),f(an,"class","relative group"),f(Ad,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(ii,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ii,"rel","nofollow"),f(Od,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForMaskedLM"),f(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Cs,"id","transformers.TFRobertaForSequenceClassification"),f(Cs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Cs,"href","#transformers.TFRobertaForSequenceClassification"),f(ln,"class","relative group"),f(Nd,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(mi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(mi,"rel","nofollow"),f(Id,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForSequenceClassification"),f(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(As,"id","transformers.TFRobertaForMultipleChoice"),f(As,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(As,"href","#transformers.TFRobertaForMultipleChoice"),f(cn,"class","relative group"),f(Dd,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(ki,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ki,"rel","nofollow"),f(Sd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForMultipleChoice"),f(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ds,"id","transformers.TFRobertaForTokenClassification"),f(Ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ds,"href","#transformers.TFRobertaForTokenClassification"),f(hn,"class","relative group"),f(Wd,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Fi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Fi,"rel","nofollow"),f(Bd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForTokenClassification"),f(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Hs,"id","transformers.TFRobertaForQuestionAnswering"),f(Hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Hs,"href","#transformers.TFRobertaForQuestionAnswering"),f(un,"class","relative group"),f(Ud,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Ci,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Ci,"rel","nofollow"),f(Hd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForQuestionAnswering"),f(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Gs,"id","transformers.FlaxRobertaModel"),f(Gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Gs,"href","#transformers.FlaxRobertaModel"),f(_n,"class","relative group"),f(Qd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Oi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(Oi,"rel","nofollow"),f(Ni,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Ni,"rel","nofollow"),f(Ii,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Ii,"rel","nofollow"),f(Di,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Di,"rel","nofollow"),f(Si,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Si,"rel","nofollow"),f(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Zs,"id","transformers.FlaxRobertaForCausalLM"),f(Zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Zs,"href","#transformers.FlaxRobertaForCausalLM"),f(kn,"class","relative group"),f(Vd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Vi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(Vi,"rel","nofollow"),f(Ki,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Ki,"rel","nofollow"),f(Ji,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Ji,"rel","nofollow"),f(Gi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Gi,"rel","nofollow"),f(Xi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Xi,"rel","nofollow"),f(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(oa,"id","transformers.FlaxRobertaForMaskedLM"),f(oa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(oa,"href","#transformers.FlaxRobertaForMaskedLM"),f(vn,"class","relative group"),f(Kd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(sl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(sl,"rel","nofollow"),f(al,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(al,"rel","nofollow"),f(rl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(rl,"rel","nofollow"),f(il,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(il,"rel","nofollow"),f(ll,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(ll,"rel","nofollow"),f(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(aa,"id","transformers.FlaxRobertaForSequenceClassification"),f(aa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(aa,"href","#transformers.FlaxRobertaForSequenceClassification"),f(Tn,"class","relative group"),f(Jd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(ul,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(ul,"rel","nofollow"),f(fl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(fl,"rel","nofollow"),f(gl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(gl,"rel","nofollow"),f(_l,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(_l,"rel","nofollow"),f(bl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(bl,"rel","nofollow"),f(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(la,"id","transformers.FlaxRobertaForMultipleChoice"),f(la,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(la,"href","#transformers.FlaxRobertaForMultipleChoice"),f(Fn,"class","relative group"),f(Gd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f($l,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f($l,"rel","nofollow"),f(Fl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Fl,"rel","nofollow"),f(xl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(xl,"rel","nofollow"),f(Rl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Rl,"rel","nofollow"),f(El,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(El,"rel","nofollow"),f(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pa,"id","transformers.FlaxRobertaForTokenClassification"),f(pa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(pa,"href","#transformers.FlaxRobertaForTokenClassification"),f(Rn,"class","relative group"),f(Xd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Pl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(Pl,"rel","nofollow"),f(Ll,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Ll,"rel","nofollow"),f(Al,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Al,"rel","nofollow"),f(Ol,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Ol,"rel","nofollow"),f(Nl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Nl,"rel","nofollow"),f(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ua,"id","transformers.FlaxRobertaForQuestionAnswering"),f(ua,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ua,"href","#transformers.FlaxRobertaForQuestionAnswering"),f(Mn,"class","relative group"),f(Yd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Ul,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(Ul,"rel","nofollow"),f(Hl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Hl,"rel","nofollow"),f(Ql,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Ql,"rel","nofollow"),f(Vl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Vl,"rel","nofollow"),f(Kl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Kl,"rel","nofollow"),f(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,b){e(document.head,d),k(o,g,b),k(o,c,b),e(c,u),e(u,_),T(l,_,null),e(c,p),e(c,E),e(E,le),k(o,Z,b),k(o,N,b),e(N,te),e(te,oe),T(M,oe,null),e(N,we),e(N,V),e(V,Te),k(o,ge,b),k(o,W,b),e(W,$e),e(W,pe),e(pe,K),e(W,Fe),k(o,_e,b),k(o,U,b),e(U,xe),k(o,be,b),k(o,H,b),e(H,Re),k(o,ke,b),k(o,ee,b),e(ee,j),e(j,P),k(o,ye,b),k(o,Q,b),e(Q,Ee),k(o,ve,b),k(o,I,b),e(I,he),e(he,Me),e(he,q),e(q,ze),e(he,J),e(I,Ce),e(I,me),e(me,G),e(I,je),e(I,ne),e(ne,D),e(ne,ue),e(ue,X),e(ne,qe),e(ne,se),e(se,L),e(ne,Pe),e(ne,A),e(A,Le),e(ne,Ae),e(I,y),e(I,z),e(z,He),e(He,de),e(z,Xe),k(o,Ke,b),k(o,C,b),e(C,Ye),e(C,Se),e(Se,Ze),e(C,et),e(C,We),e(We,S),e(C,Y),k(o,Je,b),k(o,Oe,b),e(Oe,B),e(B,Qe),T(Be,Qe,null),e(Oe,Ne),e(Oe,Ve),e(Ve,ce),k(o,Ge,b),k(o,yt,b),T(Oa,yt,null),e(yt,ug),e(yt,co),e(co,fg),e(co,id),e(id,gg),e(co,_g),e(co,ld),e(ld,bg),e(co,kg),e(co,Na),e(Na,yg),e(co,vg),e(yt,wg),e(yt,Lo),e(Lo,Tg),e(Lo,dd),e(dd,$g),e(Lo,Fg),e(Lo,cd),e(cd,xg),e(Lo,Rg),e(yt,Eg),e(yt,Ao),e(Ao,Mg),e(Ao,pd),e(pd,zg),e(Ao,Cg),e(Ao,hd),e(hd,jg),e(Ao,qg),e(yt,Pg),T(An,yt,null),k(o,ou,b),k(o,Oo,b),e(Oo,On),e(On,xc),T(Ia,xc,null),e(Oo,Lg),e(Oo,Rc),e(Rc,Ag),k(o,nu,b),k(o,Ie,b),T(Da,Ie,null),e(Ie,Og),e(Ie,Ec),e(Ec,Ng),e(Ie,Ig),e(Ie,Mc),e(Mc,Dg),e(Ie,Sg),T(Nn,Ie,null),e(Ie,Wg),e(Ie,Sa),e(Sa,Bg),e(Sa,zc),e(zc,Ug),e(Sa,Hg),e(Ie,Qg),T(In,Ie,null),e(Ie,Vg),e(Ie,Wa),e(Wa,Kg),e(Wa,md),e(md,Jg),e(Wa,Gg),e(Ie,Xg),e(Ie,vo),T(Ba,vo,null),e(vo,Yg),e(vo,Cc),e(Cc,Zg),e(vo,e_),e(vo,Ua),e(Ua,ud),e(ud,t_),e(ud,jc),e(jc,o_),e(Ua,n_),e(Ua,fd),e(fd,s_),e(fd,qc),e(qc,a_),e(Ie,r_),e(Ie,Dn),T(Ha,Dn,null),e(Dn,i_),e(Dn,Qa),e(Qa,l_),e(Qa,Pc),e(Pc,d_),e(Qa,c_),e(Ie,p_),e(Ie,Sn),T(Va,Sn,null),e(Sn,h_),e(Sn,Lc),e(Lc,m_),e(Ie,u_),e(Ie,gd),T(Ka,gd,null),k(o,su,b),k(o,No,b),e(No,Wn),e(Wn,Ac),T(Ja,Ac,null),e(No,f_),e(No,Oc),e(Oc,g_),k(o,au,b),k(o,tt,b),T(Ga,tt,null),e(tt,__),e(tt,Xa),e(Xa,b_),e(Xa,Nc),e(Nc,k_),e(Xa,y_),e(tt,v_),e(tt,Ic),e(Ic,w_),e(tt,T_),T(Bn,tt,null),e(tt,$_),e(tt,Ya),e(Ya,F_),e(Ya,Dc),e(Dc,x_),e(Ya,R_),e(tt,E_),T(Un,tt,null),e(tt,M_),e(tt,Za),e(Za,z_),e(Za,_d),e(_d,C_),e(Za,j_),e(tt,q_),e(tt,bd),T(er,bd,null),k(o,ru,b),k(o,Io,b),e(Io,Hn),e(Hn,Sc),T(tr,Sc,null),e(Io,P_),e(Io,Wc),e(Wc,L_),k(o,iu,b),k(o,ot,b),T(or,ot,null),e(ot,A_),e(ot,Bc),e(Bc,O_),e(ot,N_),e(ot,nr),e(nr,I_),e(nr,kd),e(kd,D_),e(nr,S_),e(ot,W_),e(ot,sr),e(sr,B_),e(sr,ar),e(ar,U_),e(sr,H_),e(ot,Q_),e(ot,rr),e(rr,V_),e(rr,Uc),e(Uc,K_),e(rr,J_),e(ot,G_),e(ot,pt),e(pt,X_),e(pt,Hc),e(Hc,Y_),e(pt,Z_),e(pt,Qc),e(Qc,eb),e(pt,tb),e(pt,Vc),e(Vc,ob),e(pt,nb),e(pt,Kc),e(Kc,sb),e(pt,ab),e(pt,Jc),e(Jc,rb),e(pt,ib),e(pt,Gc),e(Gc,lb),e(pt,db),e(ot,cb),e(ot,Qn),e(Qn,pb),e(Qn,Xc),e(Xc,hb),e(Qn,mb),e(Qn,ir),e(ir,ub),e(ot,fb),e(ot,Ut),T(lr,Ut,null),e(Ut,gb),e(Ut,Do),e(Do,_b),e(Do,yd),e(yd,bb),e(Do,kb),e(Do,Yc),e(Yc,yb),e(Do,vb),e(Ut,wb),T(Vn,Ut,null),e(Ut,Tb),T(Kn,Ut,null),k(o,lu,b),k(o,So,b),e(So,Jn),e(Jn,Zc),T(dr,Zc,null),e(So,$b),e(So,ep),e(ep,Fb),k(o,du,b),k(o,vt,b),T(cr,vt,null),e(vt,xb),e(vt,pr),e(pr,Rb),e(pr,tp),e(tp,Eb),e(pr,Mb),e(vt,zb),e(vt,hr),e(hr,Cb),e(hr,vd),e(vd,jb),e(hr,qb),e(vt,Pb),e(vt,mr),e(mr,Lb),e(mr,ur),e(ur,Ab),e(mr,Ob),e(vt,Nb),e(vt,Ht),T(fr,Ht,null),e(Ht,Ib),e(Ht,Wo),e(Wo,Db),e(Wo,wd),e(wd,Sb),e(Wo,Wb),e(Wo,op),e(op,Bb),e(Wo,Ub),e(Ht,Hb),T(Gn,Ht,null),e(Ht,Qb),T(Xn,Ht,null),k(o,cu,b),k(o,Bo,b),e(Bo,Yn),e(Yn,np),T(gr,np,null),e(Bo,Vb),e(Bo,sp),e(sp,Kb),k(o,pu,b),k(o,wt,b),T(_r,wt,null),e(wt,Jb),e(wt,br),e(br,Gb),e(br,ap),e(ap,Xb),e(br,Yb),e(wt,Zb),e(wt,kr),e(kr,ek),e(kr,Td),e(Td,tk),e(kr,ok),e(wt,nk),e(wt,yr),e(yr,sk),e(yr,vr),e(vr,ak),e(yr,rk),e(wt,ik),e(wt,Rt),T(wr,Rt,null),e(Rt,lk),e(Rt,Uo),e(Uo,dk),e(Uo,$d),e($d,ck),e(Uo,pk),e(Uo,rp),e(rp,hk),e(Uo,mk),e(Rt,uk),T(Zn,Rt,null),e(Rt,fk),T(es,Rt,null),e(Rt,gk),T(ts,Rt,null),k(o,hu,b),k(o,Ho,b),e(Ho,os),e(os,ip),T(Tr,ip,null),e(Ho,_k),e(Ho,lp),e(lp,bk),k(o,mu,b),k(o,Tt,b),T($r,Tt,null),e(Tt,kk),e(Tt,dp),e(dp,yk),e(Tt,vk),e(Tt,Fr),e(Fr,wk),e(Fr,Fd),e(Fd,Tk),e(Fr,$k),e(Tt,Fk),e(Tt,xr),e(xr,xk),e(xr,Rr),e(Rr,Rk),e(xr,Ek),e(Tt,Mk),e(Tt,ct),T(Er,ct,null),e(ct,zk),e(ct,Qo),e(Qo,Ck),e(Qo,xd),e(xd,jk),e(Qo,qk),e(Qo,cp),e(cp,Pk),e(Qo,Lk),e(ct,Ak),T(ns,ct,null),e(ct,Ok),T(ss,ct,null),e(ct,Nk),T(as,ct,null),e(ct,Ik),T(rs,ct,null),e(ct,Dk),T(is,ct,null),k(o,uu,b),k(o,Vo,b),e(Vo,ls),e(ls,pp),T(Mr,pp,null),e(Vo,Sk),e(Vo,hp),e(hp,Wk),k(o,fu,b),k(o,$t,b),T(zr,$t,null),e($t,Bk),e($t,mp),e(mp,Uk),e($t,Hk),e($t,Cr),e(Cr,Qk),e(Cr,Rd),e(Rd,Vk),e(Cr,Kk),e($t,Jk),e($t,jr),e(jr,Gk),e(jr,qr),e(qr,Xk),e(jr,Yk),e($t,Zk),e($t,Qt),T(Pr,Qt,null),e(Qt,ey),e(Qt,Ko),e(Ko,ty),e(Ko,Ed),e(Ed,oy),e(Ko,ny),e(Ko,up),e(up,sy),e(Ko,ay),e(Qt,ry),T(ds,Qt,null),e(Qt,iy),T(cs,Qt,null),k(o,gu,b),k(o,Jo,b),e(Jo,ps),e(ps,fp),T(Lr,fp,null),e(Jo,ly),e(Jo,gp),e(gp,dy),k(o,_u,b),k(o,Ft,b),T(Ar,Ft,null),e(Ft,cy),e(Ft,_p),e(_p,py),e(Ft,hy),e(Ft,Or),e(Or,my),e(Or,Md),e(Md,uy),e(Or,fy),e(Ft,gy),e(Ft,Nr),e(Nr,_y),e(Nr,Ir),e(Ir,by),e(Nr,ky),e(Ft,yy),e(Ft,Et),T(Dr,Et,null),e(Et,vy),e(Et,Go),e(Go,wy),e(Go,zd),e(zd,Ty),e(Go,$y),e(Go,bp),e(bp,Fy),e(Go,xy),e(Et,Ry),T(hs,Et,null),e(Et,Ey),T(ms,Et,null),e(Et,My),T(us,Et,null),k(o,bu,b),k(o,Xo,b),e(Xo,fs),e(fs,kp),T(Sr,kp,null),e(Xo,zy),e(Xo,yp),e(yp,Cy),k(o,ku,b),k(o,xt,b),T(Wr,xt,null),e(xt,jy),e(xt,Yo),e(Yo,qy),e(Yo,vp),e(vp,Py),e(Yo,Ly),e(Yo,wp),e(wp,Ay),e(Yo,Oy),e(xt,Ny),e(xt,Br),e(Br,Iy),e(Br,Cd),e(Cd,Dy),e(Br,Sy),e(xt,Wy),e(xt,Ur),e(Ur,By),e(Ur,Hr),e(Hr,Uy),e(Ur,Hy),e(xt,Qy),e(xt,Mt),T(Qr,Mt,null),e(Mt,Vy),e(Mt,Zo),e(Zo,Ky),e(Zo,jd),e(jd,Jy),e(Zo,Gy),e(Zo,Tp),e(Tp,Xy),e(Zo,Yy),e(Mt,Zy),T(gs,Mt,null),e(Mt,ev),T(_s,Mt,null),e(Mt,tv),T(bs,Mt,null),k(o,yu,b),k(o,en,b),e(en,ks),e(ks,$p),T(Vr,$p,null),e(en,ov),e(en,Fp),e(Fp,nv),k(o,vu,b),k(o,ht,b),T(Kr,ht,null),e(ht,sv),e(ht,xp),e(xp,av),e(ht,rv),e(ht,Jr),e(Jr,iv),e(Jr,qd),e(qd,lv),e(Jr,dv),e(ht,cv),e(ht,Gr),e(Gr,pv),e(Gr,Xr),e(Xr,hv),e(Gr,mv),e(ht,uv),T(ys,ht,null),e(ht,fv),e(ht,Vt),T(Yr,Vt,null),e(Vt,gv),e(Vt,tn),e(tn,_v),e(tn,Pd),e(Pd,bv),e(tn,kv),e(tn,Rp),e(Rp,yv),e(tn,vv),e(Vt,wv),T(vs,Vt,null),e(Vt,Tv),T(ws,Vt,null),k(o,wu,b),k(o,on,b),e(on,Ts),e(Ts,Ep),T(Zr,Ep,null),e(on,$v),e(on,Mp),e(Mp,Fv),k(o,Tu,b),k(o,nn,b),T(ei,nn,null),e(nn,xv),e(nn,Kt),T(ti,Kt,null),e(Kt,Rv),e(Kt,sn),e(sn,Ev),e(sn,Ld),e(Ld,Mv),e(sn,zv),e(sn,zp),e(zp,Cv),e(sn,jv),e(Kt,qv),T($s,Kt,null),e(Kt,Pv),T(Fs,Kt,null),k(o,$u,b),k(o,an,b),e(an,xs),e(xs,Cp),T(oi,Cp,null),e(an,Lv),e(an,jp),e(jp,Av),k(o,Fu,b),k(o,mt,b),T(ni,mt,null),e(mt,Ov),e(mt,si),e(si,Nv),e(si,qp),e(qp,Iv),e(si,Dv),e(mt,Sv),e(mt,ai),e(ai,Wv),e(ai,Ad),e(Ad,Bv),e(ai,Uv),e(mt,Hv),e(mt,ri),e(ri,Qv),e(ri,ii),e(ii,Vv),e(ri,Kv),e(mt,Jv),T(Rs,mt,null),e(mt,Gv),e(mt,zt),T(li,zt,null),e(zt,Xv),e(zt,rn),e(rn,Yv),e(rn,Od),e(Od,Zv),e(rn,ew),e(rn,Pp),e(Pp,tw),e(rn,ow),e(zt,nw),T(Es,zt,null),e(zt,sw),T(Ms,zt,null),e(zt,aw),T(zs,zt,null),k(o,xu,b),k(o,ln,b),e(ln,Cs),e(Cs,Lp),T(di,Lp,null),e(ln,rw),e(ln,Ap),e(Ap,iw),k(o,Ru,b),k(o,ut,b),T(ci,ut,null),e(ut,lw),e(ut,Op),e(Op,dw),e(ut,cw),e(ut,pi),e(pi,pw),e(pi,Nd),e(Nd,hw),e(pi,mw),e(ut,uw),e(ut,hi),e(hi,fw),e(hi,mi),e(mi,gw),e(hi,_w),e(ut,bw),T(js,ut,null),e(ut,kw),e(ut,Ct),T(ui,Ct,null),e(Ct,yw),e(Ct,dn),e(dn,vw),e(dn,Id),e(Id,ww),e(dn,Tw),e(dn,Np),e(Np,$w),e(dn,Fw),e(Ct,xw),T(qs,Ct,null),e(Ct,Rw),T(Ps,Ct,null),e(Ct,Ew),T(Ls,Ct,null),k(o,Eu,b),k(o,cn,b),e(cn,As),e(As,Ip),T(fi,Ip,null),e(cn,Mw),e(cn,Dp),e(Dp,zw),k(o,Mu,b),k(o,ft,b),T(gi,ft,null),e(ft,Cw),e(ft,Sp),e(Sp,jw),e(ft,qw),e(ft,_i),e(_i,Pw),e(_i,Dd),e(Dd,Lw),e(_i,Aw),e(ft,Ow),e(ft,bi),e(bi,Nw),e(bi,ki),e(ki,Iw),e(bi,Dw),e(ft,Sw),T(Os,ft,null),e(ft,Ww),e(ft,Jt),T(yi,Jt,null),e(Jt,Bw),e(Jt,pn),e(pn,Uw),e(pn,Sd),e(Sd,Hw),e(pn,Qw),e(pn,Wp),e(Wp,Vw),e(pn,Kw),e(Jt,Jw),T(Ns,Jt,null),e(Jt,Gw),T(Is,Jt,null),k(o,zu,b),k(o,hn,b),e(hn,Ds),e(Ds,Bp),T(vi,Bp,null),e(hn,Xw),e(hn,Up),e(Up,Yw),k(o,Cu,b),k(o,gt,b),T(wi,gt,null),e(gt,Zw),e(gt,Hp),e(Hp,eT),e(gt,tT),e(gt,Ti),e(Ti,oT),e(Ti,Wd),e(Wd,nT),e(Ti,sT),e(gt,aT),e(gt,$i),e($i,rT),e($i,Fi),e(Fi,iT),e($i,lT),e(gt,dT),T(Ss,gt,null),e(gt,cT),e(gt,jt),T(xi,jt,null),e(jt,pT),e(jt,mn),e(mn,hT),e(mn,Bd),e(Bd,mT),e(mn,uT),e(mn,Qp),e(Qp,fT),e(mn,gT),e(jt,_T),T(Ws,jt,null),e(jt,bT),T(Bs,jt,null),e(jt,kT),T(Us,jt,null),k(o,ju,b),k(o,un,b),e(un,Hs),e(Hs,Vp),T(Ri,Vp,null),e(un,yT),e(un,Kp),e(Kp,vT),k(o,qu,b),k(o,_t,b),T(Ei,_t,null),e(_t,wT),e(_t,fn),e(fn,TT),e(fn,Jp),e(Jp,$T),e(fn,FT),e(fn,Gp),e(Gp,xT),e(fn,RT),e(_t,ET),e(_t,Mi),e(Mi,MT),e(Mi,Ud),e(Ud,zT),e(Mi,CT),e(_t,jT),e(_t,zi),e(zi,qT),e(zi,Ci),e(Ci,PT),e(zi,LT),e(_t,AT),T(Qs,_t,null),e(_t,OT),e(_t,qt),T(ji,qt,null),e(qt,NT),e(qt,gn),e(gn,IT),e(gn,Hd),e(Hd,DT),e(gn,ST),e(gn,Xp),e(Xp,WT),e(gn,BT),e(qt,UT),T(Vs,qt,null),e(qt,HT),T(Ks,qt,null),e(qt,QT),T(Js,qt,null),k(o,Pu,b),k(o,_n,b),e(_n,Gs),e(Gs,Yp),T(qi,Yp,null),e(_n,VT),e(_n,Zp),e(Zp,KT),k(o,Lu,b),k(o,nt,b),T(Pi,nt,null),e(nt,JT),e(nt,eh),e(eh,GT),e(nt,XT),e(nt,Li),e(Li,YT),e(Li,Qd),e(Qd,ZT),e(Li,e$),e(nt,t$),e(nt,Ai),e(Ai,o$),e(Ai,Oi),e(Oi,n$),e(Ai,s$),e(nt,a$),e(nt,th),e(th,r$),e(nt,i$),e(nt,po),e(po,oh),e(oh,Ni),e(Ni,l$),e(po,d$),e(po,nh),e(nh,Ii),e(Ii,c$),e(po,p$),e(po,sh),e(sh,Di),e(Di,h$),e(po,m$),e(po,ah),e(ah,Si),e(Si,u$),e(nt,f$),e(nt,Gt),T(Wi,Gt,null),e(Gt,g$),e(Gt,bn),e(bn,_$),e(bn,rh),e(rh,b$),e(bn,k$),e(bn,ih),e(ih,y$),e(bn,v$),e(Gt,w$),T(Xs,Gt,null),e(Gt,T$),T(Ys,Gt,null),k(o,Au,b),k(o,kn,b),e(kn,Zs),e(Zs,lh),T(Bi,lh,null),e(kn,$$),e(kn,dh),e(dh,F$),k(o,Ou,b),k(o,st,b),T(Ui,st,null),e(st,x$),e(st,ch),e(ch,R$),e(st,E$),e(st,Hi),e(Hi,M$),e(Hi,Vd),e(Vd,z$),e(Hi,C$),e(st,j$),e(st,Qi),e(Qi,q$),e(Qi,Vi),e(Vi,P$),e(Qi,L$),e(st,A$),e(st,ph),e(ph,O$),e(st,N$),e(st,ho),e(ho,hh),e(hh,Ki),e(Ki,I$),e(ho,D$),e(ho,mh),e(mh,Ji),e(Ji,S$),e(ho,W$),e(ho,uh),e(uh,Gi),e(Gi,B$),e(ho,U$),e(ho,fh),e(fh,Xi),e(Xi,H$),e(st,Q$),e(st,Xt),T(Yi,Xt,null),e(Xt,V$),e(Xt,yn),e(yn,K$),e(yn,gh),e(gh,J$),e(yn,G$),e(yn,_h),e(_h,X$),e(yn,Y$),e(Xt,Z$),T(ea,Xt,null),e(Xt,e1),T(ta,Xt,null),k(o,Nu,b),k(o,vn,b),e(vn,oa),e(oa,bh),T(Zi,bh,null),e(vn,t1),e(vn,kh),e(kh,o1),k(o,Iu,b),k(o,at,b),T(el,at,null),e(at,n1),e(at,tl),e(tl,s1),e(tl,yh),e(yh,a1),e(tl,r1),e(at,i1),e(at,ol),e(ol,l1),e(ol,Kd),e(Kd,d1),e(ol,c1),e(at,p1),e(at,nl),e(nl,h1),e(nl,sl),e(sl,m1),e(nl,u1),e(at,f1),e(at,vh),e(vh,g1),e(at,_1),e(at,mo),e(mo,wh),e(wh,al),e(al,b1),e(mo,k1),e(mo,Th),e(Th,rl),e(rl,y1),e(mo,v1),e(mo,$h),e($h,il),e(il,w1),e(mo,T1),e(mo,Fh),e(Fh,ll),e(ll,$1),e(at,F1),e(at,Yt),T(dl,Yt,null),e(Yt,x1),e(Yt,wn),e(wn,R1),e(wn,xh),e(xh,E1),e(wn,M1),e(wn,Rh),e(Rh,z1),e(wn,C1),e(Yt,j1),T(na,Yt,null),e(Yt,q1),T(sa,Yt,null),k(o,Du,b),k(o,Tn,b),e(Tn,aa),e(aa,Eh),T(cl,Eh,null),e(Tn,P1),e(Tn,Mh),e(Mh,L1),k(o,Su,b),k(o,rt,b),T(pl,rt,null),e(rt,A1),e(rt,zh),e(zh,O1),e(rt,N1),e(rt,hl),e(hl,I1),e(hl,Jd),e(Jd,D1),e(hl,S1),e(rt,W1),e(rt,ml),e(ml,B1),e(ml,ul),e(ul,U1),e(ml,H1),e(rt,Q1),e(rt,Ch),e(Ch,V1),e(rt,K1),e(rt,uo),e(uo,jh),e(jh,fl),e(fl,J1),e(uo,G1),e(uo,qh),e(qh,gl),e(gl,X1),e(uo,Y1),e(uo,Ph),e(Ph,_l),e(_l,Z1),e(uo,e2),e(uo,Lh),e(Lh,bl),e(bl,t2),e(rt,o2),e(rt,Zt),T(kl,Zt,null),e(Zt,n2),e(Zt,$n),e($n,s2),e($n,Ah),e(Ah,a2),e($n,r2),e($n,Oh),e(Oh,i2),e($n,l2),e(Zt,d2),T(ra,Zt,null),e(Zt,c2),T(ia,Zt,null),k(o,Wu,b),k(o,Fn,b),e(Fn,la),e(la,Nh),T(yl,Nh,null),e(Fn,p2),e(Fn,Ih),e(Ih,h2),k(o,Bu,b),k(o,it,b),T(vl,it,null),e(it,m2),e(it,Dh),e(Dh,u2),e(it,f2),e(it,wl),e(wl,g2),e(wl,Gd),e(Gd,_2),e(wl,b2),e(it,k2),e(it,Tl),e(Tl,y2),e(Tl,$l),e($l,v2),e(Tl,w2),e(it,T2),e(it,Sh),e(Sh,$2),e(it,F2),e(it,fo),e(fo,Wh),e(Wh,Fl),e(Fl,x2),e(fo,R2),e(fo,Bh),e(Bh,xl),e(xl,E2),e(fo,M2),e(fo,Uh),e(Uh,Rl),e(Rl,z2),e(fo,C2),e(fo,Hh),e(Hh,El),e(El,j2),e(it,q2),e(it,eo),T(Ml,eo,null),e(eo,P2),e(eo,xn),e(xn,L2),e(xn,Qh),e(Qh,A2),e(xn,O2),e(xn,Vh),e(Vh,N2),e(xn,I2),e(eo,D2),T(da,eo,null),e(eo,S2),T(ca,eo,null),k(o,Uu,b),k(o,Rn,b),e(Rn,pa),e(pa,Kh),T(zl,Kh,null),e(Rn,W2),e(Rn,Jh),e(Jh,B2),k(o,Hu,b),k(o,lt,b),T(Cl,lt,null),e(lt,U2),e(lt,Gh),e(Gh,H2),e(lt,Q2),e(lt,jl),e(jl,V2),e(jl,Xd),e(Xd,K2),e(jl,J2),e(lt,G2),e(lt,ql),e(ql,X2),e(ql,Pl),e(Pl,Y2),e(ql,Z2),e(lt,eF),e(lt,Xh),e(Xh,tF),e(lt,oF),e(lt,go),e(go,Yh),e(Yh,Ll),e(Ll,nF),e(go,sF),e(go,Zh),e(Zh,Al),e(Al,aF),e(go,rF),e(go,em),e(em,Ol),e(Ol,iF),e(go,lF),e(go,tm),e(tm,Nl),e(Nl,dF),e(lt,cF),e(lt,to),T(Il,to,null),e(to,pF),e(to,En),e(En,hF),e(En,om),e(om,mF),e(En,uF),e(En,nm),e(nm,fF),e(En,gF),e(to,_F),T(ha,to,null),e(to,bF),T(ma,to,null),k(o,Qu,b),k(o,Mn,b),e(Mn,ua),e(ua,sm),T(Dl,sm,null),e(Mn,kF),e(Mn,am),e(am,yF),k(o,Vu,b),k(o,dt,b),T(Sl,dt,null),e(dt,vF),e(dt,zn),e(zn,wF),e(zn,rm),e(rm,TF),e(zn,$F),e(zn,im),e(im,FF),e(zn,xF),e(dt,RF),e(dt,Wl),e(Wl,EF),e(Wl,Yd),e(Yd,MF),e(Wl,zF),e(dt,CF),e(dt,Bl),e(Bl,jF),e(Bl,Ul),e(Ul,qF),e(Bl,PF),e(dt,LF),e(dt,lm),e(lm,AF),e(dt,OF),e(dt,_o),e(_o,dm),e(dm,Hl),e(Hl,NF),e(_o,IF),e(_o,cm),e(cm,Ql),e(Ql,DF),e(_o,SF),e(_o,pm),e(pm,Vl),e(Vl,WF),e(_o,BF),e(_o,hm),e(hm,Kl),e(Kl,UF),e(dt,HF),e(dt,oo),T(Jl,oo,null),e(oo,QF),e(oo,Cn),e(Cn,VF),e(Cn,mm),e(mm,KF),e(Cn,JF),e(Cn,um),e(um,GF),e(Cn,XF),e(oo,YF),T(fa,oo,null),e(oo,ZF),T(ga,oo,null),Ku=!0},p(o,[b]){const Gl={};b&2&&(Gl.$$scope={dirty:b,ctx:o}),An.$set(Gl);const fm={};b&2&&(fm.$$scope={dirty:b,ctx:o}),Nn.$set(fm);const gm={};b&2&&(gm.$$scope={dirty:b,ctx:o}),In.$set(gm);const _m={};b&2&&(_m.$$scope={dirty:b,ctx:o}),Bn.$set(_m);const Xl={};b&2&&(Xl.$$scope={dirty:b,ctx:o}),Un.$set(Xl);const bm={};b&2&&(bm.$$scope={dirty:b,ctx:o}),Vn.$set(bm);const km={};b&2&&(km.$$scope={dirty:b,ctx:o}),Kn.$set(km);const ym={};b&2&&(ym.$$scope={dirty:b,ctx:o}),Gn.$set(ym);const Yl={};b&2&&(Yl.$$scope={dirty:b,ctx:o}),Xn.$set(Yl);const vm={};b&2&&(vm.$$scope={dirty:b,ctx:o}),Zn.$set(vm);const wm={};b&2&&(wm.$$scope={dirty:b,ctx:o}),es.$set(wm);const Tm={};b&2&&(Tm.$$scope={dirty:b,ctx:o}),ts.$set(Tm);const $m={};b&2&&($m.$$scope={dirty:b,ctx:o}),ns.$set($m);const Fm={};b&2&&(Fm.$$scope={dirty:b,ctx:o}),ss.$set(Fm);const xm={};b&2&&(xm.$$scope={dirty:b,ctx:o}),as.$set(xm);const bo={};b&2&&(bo.$$scope={dirty:b,ctx:o}),rs.$set(bo);const Zl={};b&2&&(Zl.$$scope={dirty:b,ctx:o}),is.$set(Zl);const Rm={};b&2&&(Rm.$$scope={dirty:b,ctx:o}),ds.$set(Rm);const Em={};b&2&&(Em.$$scope={dirty:b,ctx:o}),cs.$set(Em);const ko={};b&2&&(ko.$$scope={dirty:b,ctx:o}),hs.$set(ko);const Mm={};b&2&&(Mm.$$scope={dirty:b,ctx:o}),ms.$set(Mm);const zm={};b&2&&(zm.$$scope={dirty:b,ctx:o}),us.$set(zm);const Cm={};b&2&&(Cm.$$scope={dirty:b,ctx:o}),gs.$set(Cm);const Zd={};b&2&&(Zd.$$scope={dirty:b,ctx:o}),_s.$set(Zd);const jm={};b&2&&(jm.$$scope={dirty:b,ctx:o}),bs.$set(jm);const jn={};b&2&&(jn.$$scope={dirty:b,ctx:o}),ys.$set(jn);const qm={};b&2&&(qm.$$scope={dirty:b,ctx:o}),vs.$set(qm);const Pm={};b&2&&(Pm.$$scope={dirty:b,ctx:o}),ws.$set(Pm);const ed={};b&2&&(ed.$$scope={dirty:b,ctx:o}),$s.$set(ed);const Lm={};b&2&&(Lm.$$scope={dirty:b,ctx:o}),Fs.$set(Lm);const Am={};b&2&&(Am.$$scope={dirty:b,ctx:o}),Rs.$set(Am);const Om={};b&2&&(Om.$$scope={dirty:b,ctx:o}),Es.$set(Om);const Bt={};b&2&&(Bt.$$scope={dirty:b,ctx:o}),Ms.$set(Bt);const yo={};b&2&&(yo.$$scope={dirty:b,ctx:o}),zs.$set(yo);const Nm={};b&2&&(Nm.$$scope={dirty:b,ctx:o}),js.$set(Nm);const Im={};b&2&&(Im.$$scope={dirty:b,ctx:o}),qs.$set(Im);const Dm={};b&2&&(Dm.$$scope={dirty:b,ctx:o}),Ps.$set(Dm);const qn={};b&2&&(qn.$$scope={dirty:b,ctx:o}),Ls.$set(qn);const Sm={};b&2&&(Sm.$$scope={dirty:b,ctx:o}),Os.$set(Sm);const Wm={};b&2&&(Wm.$$scope={dirty:b,ctx:o}),Ns.$set(Wm);const Pn={};b&2&&(Pn.$$scope={dirty:b,ctx:o}),Is.$set(Pn);const Bm={};b&2&&(Bm.$$scope={dirty:b,ctx:o}),Ss.$set(Bm);const Um={};b&2&&(Um.$$scope={dirty:b,ctx:o}),Ws.$set(Um);const td={};b&2&&(td.$$scope={dirty:b,ctx:o}),Bs.$set(td);const Hm={};b&2&&(Hm.$$scope={dirty:b,ctx:o}),Us.$set(Hm);const Qm={};b&2&&(Qm.$$scope={dirty:b,ctx:o}),Qs.$set(Qm);const Vm={};b&2&&(Vm.$$scope={dirty:b,ctx:o}),Vs.$set(Vm);const Ue={};b&2&&(Ue.$$scope={dirty:b,ctx:o}),Ks.$set(Ue);const Km={};b&2&&(Km.$$scope={dirty:b,ctx:o}),Js.$set(Km);const Jm={};b&2&&(Jm.$$scope={dirty:b,ctx:o}),Xs.$set(Jm);const od={};b&2&&(od.$$scope={dirty:b,ctx:o}),Ys.$set(od);const Gm={};b&2&&(Gm.$$scope={dirty:b,ctx:o}),ea.$set(Gm);const nd={};b&2&&(nd.$$scope={dirty:b,ctx:o}),ta.$set(nd);const Xm={};b&2&&(Xm.$$scope={dirty:b,ctx:o}),na.$set(Xm);const Ln={};b&2&&(Ln.$$scope={dirty:b,ctx:o}),sa.$set(Ln);const Ym={};b&2&&(Ym.$$scope={dirty:b,ctx:o}),ra.$set(Ym);const sd={};b&2&&(sd.$$scope={dirty:b,ctx:o}),ia.$set(sd);const ec={};b&2&&(ec.$$scope={dirty:b,ctx:o}),da.$set(ec);const Zm={};b&2&&(Zm.$$scope={dirty:b,ctx:o}),ca.$set(Zm);const tc={};b&2&&(tc.$$scope={dirty:b,ctx:o}),ha.$set(tc);const eu={};b&2&&(eu.$$scope={dirty:b,ctx:o}),ma.$set(eu);const ad={};b&2&&(ad.$$scope={dirty:b,ctx:o}),fa.$set(ad);const rd={};b&2&&(rd.$$scope={dirty:b,ctx:o}),ga.$set(rd)},i(o){Ku||($(l.$$.fragment,o),$(M.$$.fragment,o),$(Be.$$.fragment,o),$(Oa.$$.fragment,o),$(An.$$.fragment,o),$(Ia.$$.fragment,o),$(Da.$$.fragment,o),$(Nn.$$.fragment,o),$(In.$$.fragment,o),$(Ba.$$.fragment,o),$(Ha.$$.fragment,o),$(Va.$$.fragment,o),$(Ka.$$.fragment,o),$(Ja.$$.fragment,o),$(Ga.$$.fragment,o),$(Bn.$$.fragment,o),$(Un.$$.fragment,o),$(er.$$.fragment,o),$(tr.$$.fragment,o),$(or.$$.fragment,o),$(lr.$$.fragment,o),$(Vn.$$.fragment,o),$(Kn.$$.fragment,o),$(dr.$$.fragment,o),$(cr.$$.fragment,o),$(fr.$$.fragment,o),$(Gn.$$.fragment,o),$(Xn.$$.fragment,o),$(gr.$$.fragment,o),$(_r.$$.fragment,o),$(wr.$$.fragment,o),$(Zn.$$.fragment,o),$(es.$$.fragment,o),$(ts.$$.fragment,o),$(Tr.$$.fragment,o),$($r.$$.fragment,o),$(Er.$$.fragment,o),$(ns.$$.fragment,o),$(ss.$$.fragment,o),$(as.$$.fragment,o),$(rs.$$.fragment,o),$(is.$$.fragment,o),$(Mr.$$.fragment,o),$(zr.$$.fragment,o),$(Pr.$$.fragment,o),$(ds.$$.fragment,o),$(cs.$$.fragment,o),$(Lr.$$.fragment,o),$(Ar.$$.fragment,o),$(Dr.$$.fragment,o),$(hs.$$.fragment,o),$(ms.$$.fragment,o),$(us.$$.fragment,o),$(Sr.$$.fragment,o),$(Wr.$$.fragment,o),$(Qr.$$.fragment,o),$(gs.$$.fragment,o),$(_s.$$.fragment,o),$(bs.$$.fragment,o),$(Vr.$$.fragment,o),$(Kr.$$.fragment,o),$(ys.$$.fragment,o),$(Yr.$$.fragment,o),$(vs.$$.fragment,o),$(ws.$$.fragment,o),$(Zr.$$.fragment,o),$(ei.$$.fragment,o),$(ti.$$.fragment,o),$($s.$$.fragment,o),$(Fs.$$.fragment,o),$(oi.$$.fragment,o),$(ni.$$.fragment,o),$(Rs.$$.fragment,o),$(li.$$.fragment,o),$(Es.$$.fragment,o),$(Ms.$$.fragment,o),$(zs.$$.fragment,o),$(di.$$.fragment,o),$(ci.$$.fragment,o),$(js.$$.fragment,o),$(ui.$$.fragment,o),$(qs.$$.fragment,o),$(Ps.$$.fragment,o),$(Ls.$$.fragment,o),$(fi.$$.fragment,o),$(gi.$$.fragment,o),$(Os.$$.fragment,o),$(yi.$$.fragment,o),$(Ns.$$.fragment,o),$(Is.$$.fragment,o),$(vi.$$.fragment,o),$(wi.$$.fragment,o),$(Ss.$$.fragment,o),$(xi.$$.fragment,o),$(Ws.$$.fragment,o),$(Bs.$$.fragment,o),$(Us.$$.fragment,o),$(Ri.$$.fragment,o),$(Ei.$$.fragment,o),$(Qs.$$.fragment,o),$(ji.$$.fragment,o),$(Vs.$$.fragment,o),$(Ks.$$.fragment,o),$(Js.$$.fragment,o),$(qi.$$.fragment,o),$(Pi.$$.fragment,o),$(Wi.$$.fragment,o),$(Xs.$$.fragment,o),$(Ys.$$.fragment,o),$(Bi.$$.fragment,o),$(Ui.$$.fragment,o),$(Yi.$$.fragment,o),$(ea.$$.fragment,o),$(ta.$$.fragment,o),$(Zi.$$.fragment,o),$(el.$$.fragment,o),$(dl.$$.fragment,o),$(na.$$.fragment,o),$(sa.$$.fragment,o),$(cl.$$.fragment,o),$(pl.$$.fragment,o),$(kl.$$.fragment,o),$(ra.$$.fragment,o),$(ia.$$.fragment,o),$(yl.$$.fragment,o),$(vl.$$.fragment,o),$(Ml.$$.fragment,o),$(da.$$.fragment,o),$(ca.$$.fragment,o),$(zl.$$.fragment,o),$(Cl.$$.fragment,o),$(Il.$$.fragment,o),$(ha.$$.fragment,o),$(ma.$$.fragment,o),$(Dl.$$.fragment,o),$(Sl.$$.fragment,o),$(Jl.$$.fragment,o),$(fa.$$.fragment,o),$(ga.$$.fragment,o),Ku=!0)},o(o){F(l.$$.fragment,o),F(M.$$.fragment,o),F(Be.$$.fragment,o),F(Oa.$$.fragment,o),F(An.$$.fragment,o),F(Ia.$$.fragment,o),F(Da.$$.fragment,o),F(Nn.$$.fragment,o),F(In.$$.fragment,o),F(Ba.$$.fragment,o),F(Ha.$$.fragment,o),F(Va.$$.fragment,o),F(Ka.$$.fragment,o),F(Ja.$$.fragment,o),F(Ga.$$.fragment,o),F(Bn.$$.fragment,o),F(Un.$$.fragment,o),F(er.$$.fragment,o),F(tr.$$.fragment,o),F(or.$$.fragment,o),F(lr.$$.fragment,o),F(Vn.$$.fragment,o),F(Kn.$$.fragment,o),F(dr.$$.fragment,o),F(cr.$$.fragment,o),F(fr.$$.fragment,o),F(Gn.$$.fragment,o),F(Xn.$$.fragment,o),F(gr.$$.fragment,o),F(_r.$$.fragment,o),F(wr.$$.fragment,o),F(Zn.$$.fragment,o),F(es.$$.fragment,o),F(ts.$$.fragment,o),F(Tr.$$.fragment,o),F($r.$$.fragment,o),F(Er.$$.fragment,o),F(ns.$$.fragment,o),F(ss.$$.fragment,o),F(as.$$.fragment,o),F(rs.$$.fragment,o),F(is.$$.fragment,o),F(Mr.$$.fragment,o),F(zr.$$.fragment,o),F(Pr.$$.fragment,o),F(ds.$$.fragment,o),F(cs.$$.fragment,o),F(Lr.$$.fragment,o),F(Ar.$$.fragment,o),F(Dr.$$.fragment,o),F(hs.$$.fragment,o),F(ms.$$.fragment,o),F(us.$$.fragment,o),F(Sr.$$.fragment,o),F(Wr.$$.fragment,o),F(Qr.$$.fragment,o),F(gs.$$.fragment,o),F(_s.$$.fragment,o),F(bs.$$.fragment,o),F(Vr.$$.fragment,o),F(Kr.$$.fragment,o),F(ys.$$.fragment,o),F(Yr.$$.fragment,o),F(vs.$$.fragment,o),F(ws.$$.fragment,o),F(Zr.$$.fragment,o),F(ei.$$.fragment,o),F(ti.$$.fragment,o),F($s.$$.fragment,o),F(Fs.$$.fragment,o),F(oi.$$.fragment,o),F(ni.$$.fragment,o),F(Rs.$$.fragment,o),F(li.$$.fragment,o),F(Es.$$.fragment,o),F(Ms.$$.fragment,o),F(zs.$$.fragment,o),F(di.$$.fragment,o),F(ci.$$.fragment,o),F(js.$$.fragment,o),F(ui.$$.fragment,o),F(qs.$$.fragment,o),F(Ps.$$.fragment,o),F(Ls.$$.fragment,o),F(fi.$$.fragment,o),F(gi.$$.fragment,o),F(Os.$$.fragment,o),F(yi.$$.fragment,o),F(Ns.$$.fragment,o),F(Is.$$.fragment,o),F(vi.$$.fragment,o),F(wi.$$.fragment,o),F(Ss.$$.fragment,o),F(xi.$$.fragment,o),F(Ws.$$.fragment,o),F(Bs.$$.fragment,o),F(Us.$$.fragment,o),F(Ri.$$.fragment,o),F(Ei.$$.fragment,o),F(Qs.$$.fragment,o),F(ji.$$.fragment,o),F(Vs.$$.fragment,o),F(Ks.$$.fragment,o),F(Js.$$.fragment,o),F(qi.$$.fragment,o),F(Pi.$$.fragment,o),F(Wi.$$.fragment,o),F(Xs.$$.fragment,o),F(Ys.$$.fragment,o),F(Bi.$$.fragment,o),F(Ui.$$.fragment,o),F(Yi.$$.fragment,o),F(ea.$$.fragment,o),F(ta.$$.fragment,o),F(Zi.$$.fragment,o),F(el.$$.fragment,o),F(dl.$$.fragment,o),F(na.$$.fragment,o),F(sa.$$.fragment,o),F(cl.$$.fragment,o),F(pl.$$.fragment,o),F(kl.$$.fragment,o),F(ra.$$.fragment,o),F(ia.$$.fragment,o),F(yl.$$.fragment,o),F(vl.$$.fragment,o),F(Ml.$$.fragment,o),F(da.$$.fragment,o),F(ca.$$.fragment,o),F(zl.$$.fragment,o),F(Cl.$$.fragment,o),F(Il.$$.fragment,o),F(ha.$$.fragment,o),F(ma.$$.fragment,o),F(Dl.$$.fragment,o),F(Sl.$$.fragment,o),F(Jl.$$.fragment,o),F(fa.$$.fragment,o),F(ga.$$.fragment,o),Ku=!1},d(o){t(d),o&&t(g),o&&t(c),x(l),o&&t(Z),o&&t(N),x(M),o&&t(ge),o&&t(W),o&&t(_e),o&&t(U),o&&t(be),o&&t(H),o&&t(ke),o&&t(ee),o&&t(ye),o&&t(Q),o&&t(ve),o&&t(I),o&&t(Ke),o&&t(C),o&&t(Je),o&&t(Oe),x(Be),o&&t(Ge),o&&t(yt),x(Oa),x(An),o&&t(ou),o&&t(Oo),x(Ia),o&&t(nu),o&&t(Ie),x(Da),x(Nn),x(In),x(Ba),x(Ha),x(Va),x(Ka),o&&t(su),o&&t(No),x(Ja),o&&t(au),o&&t(tt),x(Ga),x(Bn),x(Un),x(er),o&&t(ru),o&&t(Io),x(tr),o&&t(iu),o&&t(ot),x(or),x(lr),x(Vn),x(Kn),o&&t(lu),o&&t(So),x(dr),o&&t(du),o&&t(vt),x(cr),x(fr),x(Gn),x(Xn),o&&t(cu),o&&t(Bo),x(gr),o&&t(pu),o&&t(wt),x(_r),x(wr),x(Zn),x(es),x(ts),o&&t(hu),o&&t(Ho),x(Tr),o&&t(mu),o&&t(Tt),x($r),x(Er),x(ns),x(ss),x(as),x(rs),x(is),o&&t(uu),o&&t(Vo),x(Mr),o&&t(fu),o&&t($t),x(zr),x(Pr),x(ds),x(cs),o&&t(gu),o&&t(Jo),x(Lr),o&&t(_u),o&&t(Ft),x(Ar),x(Dr),x(hs),x(ms),x(us),o&&t(bu),o&&t(Xo),x(Sr),o&&t(ku),o&&t(xt),x(Wr),x(Qr),x(gs),x(_s),x(bs),o&&t(yu),o&&t(en),x(Vr),o&&t(vu),o&&t(ht),x(Kr),x(ys),x(Yr),x(vs),x(ws),o&&t(wu),o&&t(on),x(Zr),o&&t(Tu),o&&t(nn),x(ei),x(ti),x($s),x(Fs),o&&t($u),o&&t(an),x(oi),o&&t(Fu),o&&t(mt),x(ni),x(Rs),x(li),x(Es),x(Ms),x(zs),o&&t(xu),o&&t(ln),x(di),o&&t(Ru),o&&t(ut),x(ci),x(js),x(ui),x(qs),x(Ps),x(Ls),o&&t(Eu),o&&t(cn),x(fi),o&&t(Mu),o&&t(ft),x(gi),x(Os),x(yi),x(Ns),x(Is),o&&t(zu),o&&t(hn),x(vi),o&&t(Cu),o&&t(gt),x(wi),x(Ss),x(xi),x(Ws),x(Bs),x(Us),o&&t(ju),o&&t(un),x(Ri),o&&t(qu),o&&t(_t),x(Ei),x(Qs),x(ji),x(Vs),x(Ks),x(Js),o&&t(Pu),o&&t(_n),x(qi),o&&t(Lu),o&&t(nt),x(Pi),x(Wi),x(Xs),x(Ys),o&&t(Au),o&&t(kn),x(Bi),o&&t(Ou),o&&t(st),x(Ui),x(Yi),x(ea),x(ta),o&&t(Nu),o&&t(vn),x(Zi),o&&t(Iu),o&&t(at),x(el),x(dl),x(na),x(sa),o&&t(Du),o&&t(Tn),x(cl),o&&t(Su),o&&t(rt),x(pl),x(kl),x(ra),x(ia),o&&t(Wu),o&&t(Fn),x(yl),o&&t(Bu),o&&t(it),x(vl),x(Ml),x(da),x(ca),o&&t(Uu),o&&t(Rn),x(zl),o&&t(Hu),o&&t(lt),x(Cl),x(Il),x(ha),x(ma),o&&t(Qu),o&&t(Mn),x(Dl),o&&t(Vu),o&&t(dt),x(Sl),x(Jl),x(fa),x(ga)}}}const Gz={local:"roberta",sections:[{local:"overview",title:"Overview"},{local:"transformers.RobertaConfig",title:"RobertaConfig"},{local:"transformers.RobertaTokenizer",title:"RobertaTokenizer"},{local:"transformers.RobertaTokenizerFast",title:"RobertaTokenizerFast"},{local:"transformers.RobertaModel",title:"RobertaModel"},{local:"transformers.RobertaForCausalLM",title:"RobertaForCausalLM"},{local:"transformers.RobertaForMaskedLM",title:"RobertaForMaskedLM"},{local:"transformers.RobertaForSequenceClassification",title:"RobertaForSequenceClassification"},{local:"transformers.RobertaForMultipleChoice",title:"RobertaForMultipleChoice"},{local:"transformers.RobertaForTokenClassification",title:"RobertaForTokenClassification"},{local:"transformers.RobertaForQuestionAnswering",title:"RobertaForQuestionAnswering"},{local:"transformers.TFRobertaModel",title:"TFRobertaModel"},{local:"transformers.TFRobertaForCausalLM",title:"TFRobertaForCausalLM"},{local:"transformers.TFRobertaForMaskedLM",title:"TFRobertaForMaskedLM"},{local:"transformers.TFRobertaForSequenceClassification",title:"TFRobertaForSequenceClassification"},{local:"transformers.TFRobertaForMultipleChoice",title:"TFRobertaForMultipleChoice"},{local:"transformers.TFRobertaForTokenClassification",title:"TFRobertaForTokenClassification"},{local:"transformers.TFRobertaForQuestionAnswering",title:"TFRobertaForQuestionAnswering"},{local:"transformers.FlaxRobertaModel",title:"FlaxRobertaModel"},{local:"transformers.FlaxRobertaForCausalLM",title:"FlaxRobertaForCausalLM"},{local:"transformers.FlaxRobertaForMaskedLM",title:"FlaxRobertaForMaskedLM"},{local:"transformers.FlaxRobertaForSequenceClassification",title:"FlaxRobertaForSequenceClassification"},{local:"transformers.FlaxRobertaForMultipleChoice",title:"FlaxRobertaForMultipleChoice"},{local:"transformers.FlaxRobertaForTokenClassification",title:"FlaxRobertaForTokenClassification"},{local:"transformers.FlaxRobertaForQuestionAnswering",title:"FlaxRobertaForQuestionAnswering"}],title:"RoBERTa"};function Xz(R){return IM(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class s4 extends LM{constructor(d){super();AM(this,d,Xz,Jz,OM,{})}}export{s4 as default,Gz as metadata};
