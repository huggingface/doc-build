import{S as LM,i as AM,s as OM,e as n,k as p,w as T,t as r,M as NM,c as s,d as t,m as h,a,x as y,h as i,b as u,G as e,g as k,y as w,q as $,o as F,B as x,v as IM,L as Z}from"../../chunks/vendor-hf-doc-builder.js";import{T as fe}from"../../chunks/Tip-hf-doc-builder.js";import{D as P}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ee}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as $e}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Y}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function DM(R){let d,g,c,m,_;return m=new ee({props:{code:`from transformers import RobertaConfig, RobertaModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=n("p"),g=r("Examples:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Examples:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:Z,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function SM(R){let d,g,c,m,_;return m=new ee({props:{code:`from transformers import RobertaTokenizer
tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 328, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){d=n("p"),g=r("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:Z,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function WM(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("When used with "),c=n("code"),m=r("is_split_into_words=True"),_=r(", this tokenizer will add a space before each word (even the first one).")},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"When used with "),c=s(f,"CODE",{});var M=a(c);m=i(M,"is_split_into_words=True"),M.forEach(t),_=i(f,", this tokenizer will add a space before each word (even the first one)."),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function BM(R){let d,g,c,m,_;return m=new ee({props:{code:`from transformers import RobertaTokenizerFast
tokenizer = RobertaTokenizerFast.from_pretrained("roberta-base")
tokenizer("Hello world")['input_ids']
tokenizer(" Hello world")['input_ids']`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizerFast</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = RobertaTokenizerFast.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 31414, 232, 328, 2]
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&#x27;input_ids&#x27;</span>]</span>
[0, 20920, 232, 2]`}}),{c(){d=n("p"),g=r("be encoded differently whether it is at the beginning of the sentence (without space) or not:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"be encoded differently whether it is at the beginning of the sentence (without space) or not:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:Z,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function UM(R){let d,g,c,m,_,l,f,M;return{c(){d=n("p"),g=r("When used with "),c=n("code"),m=r("is_split_into_words=True"),_=r(", this tokenizer needs to be instantiated with "),l=n("code"),f=r("add_prefix_space=True"),M=r(".")},l(te){d=s(te,"P",{});var I=a(d);g=i(I,"When used with "),c=s(I,"CODE",{});var z=a(c);m=i(z,"is_split_into_words=True"),z.forEach(t),_=i(I,", this tokenizer needs to be instantiated with "),l=s(I,"CODE",{});var X=a(l);f=i(X,"add_prefix_space=True"),X.forEach(t),M=i(I,"."),I.forEach(t)},m(te,I){k(te,d,I),e(d,g),e(d,c),e(c,m),e(d,_),e(d,l),e(l,f),e(d,M)},d(te){te&&t(d)}}}function HM(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function QM(R){let d,g,c,m,_;return m=new ee({props:{code:`from transformers import RobertaTokenizer, RobertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:Z,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function VM(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function JM(R){let d,g,c,m,_;return m=new ee({props:{code:`from transformers import RobertaTokenizer, RobertaForCausalLM, RobertaConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:Z,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function KM(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function GM(R){let d,g,c,m,_;return m=new ee({props:{code:`from transformers import RobertaTokenizer, RobertaForMaskedLM
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
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:Z,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function XM(R){let d,g;return d=new ee({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:Z,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function YM(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function ZM(R){let d,g,c,m,_;return m=new ee({props:{code:`import torch
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=n("p"),g=r("Example of single-label classification:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example of single-label classification:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:Z,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function eE(R){let d,g;return d=new ee({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = RobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:Z,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function tE(R){let d,g,c,m,_;return m=new ee({props:{code:`import torch
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=n("p"),g=r("Example of multi-label classification:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example of multi-label classification:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:Z,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function oE(R){let d,g;return d=new ee({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:Z,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function nE(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function sE(R){let d,g,c,m,_;return m=new ee({props:{code:`from transformers import RobertaTokenizer, RobertaForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:Z,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function aE(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function rE(R){let d,g,c,m,_;return m=new ee({props:{code:`from transformers import RobertaTokenizer, RobertaForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:Z,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function iE(R){let d,g;return d=new ee({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:Z,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function lE(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function dE(R){let d,g,c,m,_;return m=new ee({props:{code:`from transformers import RobertaTokenizer, RobertaForQuestionAnswering
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
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:Z,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function cE(R){let d,g;return d=new ee({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.86</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:Z,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function pE(R){let d,g,c,m,_,l,f,M,te,I,z,X,D,se,be,S,ke,ue,K,A,ae,oe,C,j,ie,U,ge,le,H,_e,de,q,ve,W,ce,Te,B,G,re,O,pe,Q,ye;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),c=p(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),M=n("li"),te=r("having all inputs as a list, tuple or dict in the first positional arguments."),I=p(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),se=r("tf.keras.Model.fit"),be=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ke=r("model(inputs)"),ue=r("."),K=p(),A=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=p(),C=n("ul"),j=n("li"),ie=r("a single Tensor with "),U=n("code"),ge=r("input_ids"),le=r(" only and nothing else: "),H=n("code"),_e=r("model(inputs_ids)"),de=p(),q=n("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),ce=r("model([input_ids, attention_mask])"),Te=r(" or "),B=n("code"),G=r("model([input_ids, attention_mask, token_type_ids])"),re=p(),O=n("li"),pe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var E=a(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(v),m=s(v,"UL",{});var ne=a(m);_=s(ne,"LI",{});var Ee=a(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=h(ne),M=s(ne,"LI",{});var me=a(M);te=i(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),ne.forEach(t),I=h(v),z=s(v,"P",{});var N=a(z);X=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var Re=a(D);se=i(Re,"tf.keras.Model.fit"),Re.forEach(t),be=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var ze=a(S);ke=i(ze,"model(inputs)"),ze.forEach(t),ue=i(N,"."),N.forEach(t),K=h(v),A=s(v,"P",{});var Ce=a(A);ae=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),oe=h(v),C=s(v,"UL",{});var L=a(C);j=s(L,"LI",{});var V=a(j);ie=i(V,"a single Tensor with "),U=s(V,"CODE",{});var qe=a(U);ge=i(qe,"input_ids"),qe.forEach(t),le=i(V," only and nothing else: "),H=s(V,"CODE",{});var Me=a(H);_e=i(Me,"model(inputs_ids)"),Me.forEach(t),V.forEach(t),de=h(L),q=s(L,"LI",{});var J=a(q);ve=i(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(J,"CODE",{});var je=a(W);ce=i(je,"model([input_ids, attention_mask])"),je.forEach(t),Te=i(J," or "),B=s(J,"CODE",{});var Pe=a(B);G=i(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),J.forEach(t),re=h(L),O=s(L,"LI",{});var he=a(O);pe=i(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(he,"CODE",{});var xe=a(Q);ye=i(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),he.forEach(t),L.forEach(t)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,m,E),e(m,_),e(_,l),e(m,f),e(m,M),e(M,te),k(v,I,E),k(v,z,E),e(z,X),e(z,D),e(D,se),e(z,be),e(z,S),e(S,ke),e(z,ue),k(v,K,E),k(v,A,E),e(A,ae),k(v,oe,E),k(v,C,E),e(C,j),e(j,ie),e(j,U),e(U,ge),e(j,le),e(j,H),e(H,_e),e(C,de),e(C,q),e(q,ve),e(q,W),e(W,ce),e(q,Te),e(q,B),e(B,G),e(C,re),e(C,O),e(O,pe),e(O,Q),e(Q,ye)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(I),v&&t(z),v&&t(K),v&&t(A),v&&t(oe),v&&t(C)}}}function hE(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function mE(R){let d,g,c,m,_;return m=new ee({props:{code:`from transformers import RobertaTokenizer, TFRobertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:Z,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function fE(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function uE(R){let d,g,c,m,_;return m=new ee({props:{code:`from transformers import RobertaTokenizer, TFRobertaForCausalLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:Z,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function gE(R){let d,g,c,m,_,l,f,M,te,I,z,X,D,se,be,S,ke,ue,K,A,ae,oe,C,j,ie,U,ge,le,H,_e,de,q,ve,W,ce,Te,B,G,re,O,pe,Q,ye;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),c=p(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),M=n("li"),te=r("having all inputs as a list, tuple or dict in the first positional arguments."),I=p(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),se=r("tf.keras.Model.fit"),be=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ke=r("model(inputs)"),ue=r("."),K=p(),A=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=p(),C=n("ul"),j=n("li"),ie=r("a single Tensor with "),U=n("code"),ge=r("input_ids"),le=r(" only and nothing else: "),H=n("code"),_e=r("model(inputs_ids)"),de=p(),q=n("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),ce=r("model([input_ids, attention_mask])"),Te=r(" or "),B=n("code"),G=r("model([input_ids, attention_mask, token_type_ids])"),re=p(),O=n("li"),pe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var E=a(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(v),m=s(v,"UL",{});var ne=a(m);_=s(ne,"LI",{});var Ee=a(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=h(ne),M=s(ne,"LI",{});var me=a(M);te=i(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),ne.forEach(t),I=h(v),z=s(v,"P",{});var N=a(z);X=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var Re=a(D);se=i(Re,"tf.keras.Model.fit"),Re.forEach(t),be=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var ze=a(S);ke=i(ze,"model(inputs)"),ze.forEach(t),ue=i(N,"."),N.forEach(t),K=h(v),A=s(v,"P",{});var Ce=a(A);ae=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),oe=h(v),C=s(v,"UL",{});var L=a(C);j=s(L,"LI",{});var V=a(j);ie=i(V,"a single Tensor with "),U=s(V,"CODE",{});var qe=a(U);ge=i(qe,"input_ids"),qe.forEach(t),le=i(V," only and nothing else: "),H=s(V,"CODE",{});var Me=a(H);_e=i(Me,"model(inputs_ids)"),Me.forEach(t),V.forEach(t),de=h(L),q=s(L,"LI",{});var J=a(q);ve=i(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(J,"CODE",{});var je=a(W);ce=i(je,"model([input_ids, attention_mask])"),je.forEach(t),Te=i(J," or "),B=s(J,"CODE",{});var Pe=a(B);G=i(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),J.forEach(t),re=h(L),O=s(L,"LI",{});var he=a(O);pe=i(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(he,"CODE",{});var xe=a(Q);ye=i(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),he.forEach(t),L.forEach(t)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,m,E),e(m,_),e(_,l),e(m,f),e(m,M),e(M,te),k(v,I,E),k(v,z,E),e(z,X),e(z,D),e(D,se),e(z,be),e(z,S),e(S,ke),e(z,ue),k(v,K,E),k(v,A,E),e(A,ae),k(v,oe,E),k(v,C,E),e(C,j),e(j,ie),e(j,U),e(U,ge),e(j,le),e(j,H),e(H,_e),e(C,de),e(C,q),e(q,ve),e(q,W),e(W,ce),e(q,Te),e(q,B),e(B,G),e(C,re),e(C,O),e(O,pe),e(O,Q),e(Q,ye)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(I),v&&t(z),v&&t(K),v&&t(A),v&&t(oe),v&&t(C)}}}function _E(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function bE(R){let d,g,c,m,_;return m=new ee({props:{code:`from transformers import RobertaTokenizer, TFRobertaForMaskedLM
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
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:Z,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function kE(R){let d,g;return d=new ee({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-<mask> tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:Z,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function vE(R){let d,g,c,m,_,l,f,M,te,I,z,X,D,se,be,S,ke,ue,K,A,ae,oe,C,j,ie,U,ge,le,H,_e,de,q,ve,W,ce,Te,B,G,re,O,pe,Q,ye;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),c=p(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),M=n("li"),te=r("having all inputs as a list, tuple or dict in the first positional arguments."),I=p(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),se=r("tf.keras.Model.fit"),be=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ke=r("model(inputs)"),ue=r("."),K=p(),A=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=p(),C=n("ul"),j=n("li"),ie=r("a single Tensor with "),U=n("code"),ge=r("input_ids"),le=r(" only and nothing else: "),H=n("code"),_e=r("model(inputs_ids)"),de=p(),q=n("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),ce=r("model([input_ids, attention_mask])"),Te=r(" or "),B=n("code"),G=r("model([input_ids, attention_mask, token_type_ids])"),re=p(),O=n("li"),pe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var E=a(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(v),m=s(v,"UL",{});var ne=a(m);_=s(ne,"LI",{});var Ee=a(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=h(ne),M=s(ne,"LI",{});var me=a(M);te=i(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),ne.forEach(t),I=h(v),z=s(v,"P",{});var N=a(z);X=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var Re=a(D);se=i(Re,"tf.keras.Model.fit"),Re.forEach(t),be=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var ze=a(S);ke=i(ze,"model(inputs)"),ze.forEach(t),ue=i(N,"."),N.forEach(t),K=h(v),A=s(v,"P",{});var Ce=a(A);ae=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),oe=h(v),C=s(v,"UL",{});var L=a(C);j=s(L,"LI",{});var V=a(j);ie=i(V,"a single Tensor with "),U=s(V,"CODE",{});var qe=a(U);ge=i(qe,"input_ids"),qe.forEach(t),le=i(V," only and nothing else: "),H=s(V,"CODE",{});var Me=a(H);_e=i(Me,"model(inputs_ids)"),Me.forEach(t),V.forEach(t),de=h(L),q=s(L,"LI",{});var J=a(q);ve=i(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(J,"CODE",{});var je=a(W);ce=i(je,"model([input_ids, attention_mask])"),je.forEach(t),Te=i(J," or "),B=s(J,"CODE",{});var Pe=a(B);G=i(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),J.forEach(t),re=h(L),O=s(L,"LI",{});var he=a(O);pe=i(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(he,"CODE",{});var xe=a(Q);ye=i(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),he.forEach(t),L.forEach(t)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,m,E),e(m,_),e(_,l),e(m,f),e(m,M),e(M,te),k(v,I,E),k(v,z,E),e(z,X),e(z,D),e(D,se),e(z,be),e(z,S),e(S,ke),e(z,ue),k(v,K,E),k(v,A,E),e(A,ae),k(v,oe,E),k(v,C,E),e(C,j),e(j,ie),e(j,U),e(U,ge),e(j,le),e(j,H),e(H,_e),e(C,de),e(C,q),e(q,ve),e(q,W),e(W,ce),e(q,Te),e(q,B),e(B,G),e(C,re),e(C,O),e(O,pe),e(O,Q),e(Q,ye)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(I),v&&t(z),v&&t(K),v&&t(A),v&&t(oe),v&&t(C)}}}function TE(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function yE(R){let d,g,c,m,_;return m=new ee({props:{code:`from transformers import RobertaTokenizer, TFRobertaForSequenceClassification
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:Z,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function wE(R){let d,g;return d=new ee({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFRobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:Z,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function $E(R){let d,g,c,m,_,l,f,M,te,I,z,X,D,se,be,S,ke,ue,K,A,ae,oe,C,j,ie,U,ge,le,H,_e,de,q,ve,W,ce,Te,B,G,re,O,pe,Q,ye;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),c=p(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),M=n("li"),te=r("having all inputs as a list, tuple or dict in the first positional arguments."),I=p(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),se=r("tf.keras.Model.fit"),be=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ke=r("model(inputs)"),ue=r("."),K=p(),A=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=p(),C=n("ul"),j=n("li"),ie=r("a single Tensor with "),U=n("code"),ge=r("input_ids"),le=r(" only and nothing else: "),H=n("code"),_e=r("model(inputs_ids)"),de=p(),q=n("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),ce=r("model([input_ids, attention_mask])"),Te=r(" or "),B=n("code"),G=r("model([input_ids, attention_mask, token_type_ids])"),re=p(),O=n("li"),pe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var E=a(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(v),m=s(v,"UL",{});var ne=a(m);_=s(ne,"LI",{});var Ee=a(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=h(ne),M=s(ne,"LI",{});var me=a(M);te=i(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),ne.forEach(t),I=h(v),z=s(v,"P",{});var N=a(z);X=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var Re=a(D);se=i(Re,"tf.keras.Model.fit"),Re.forEach(t),be=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var ze=a(S);ke=i(ze,"model(inputs)"),ze.forEach(t),ue=i(N,"."),N.forEach(t),K=h(v),A=s(v,"P",{});var Ce=a(A);ae=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),oe=h(v),C=s(v,"UL",{});var L=a(C);j=s(L,"LI",{});var V=a(j);ie=i(V,"a single Tensor with "),U=s(V,"CODE",{});var qe=a(U);ge=i(qe,"input_ids"),qe.forEach(t),le=i(V," only and nothing else: "),H=s(V,"CODE",{});var Me=a(H);_e=i(Me,"model(inputs_ids)"),Me.forEach(t),V.forEach(t),de=h(L),q=s(L,"LI",{});var J=a(q);ve=i(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(J,"CODE",{});var je=a(W);ce=i(je,"model([input_ids, attention_mask])"),je.forEach(t),Te=i(J," or "),B=s(J,"CODE",{});var Pe=a(B);G=i(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),J.forEach(t),re=h(L),O=s(L,"LI",{});var he=a(O);pe=i(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(he,"CODE",{});var xe=a(Q);ye=i(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),he.forEach(t),L.forEach(t)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,m,E),e(m,_),e(_,l),e(m,f),e(m,M),e(M,te),k(v,I,E),k(v,z,E),e(z,X),e(z,D),e(D,se),e(z,be),e(z,S),e(S,ke),e(z,ue),k(v,K,E),k(v,A,E),e(A,ae),k(v,oe,E),k(v,C,E),e(C,j),e(j,ie),e(j,U),e(U,ge),e(j,le),e(j,H),e(H,_e),e(C,de),e(C,q),e(q,ve),e(q,W),e(W,ce),e(q,Te),e(q,B),e(B,G),e(C,re),e(C,O),e(O,pe),e(O,Q),e(Q,ye)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(I),v&&t(z),v&&t(K),v&&t(A),v&&t(oe),v&&t(C)}}}function FE(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function xE(R){let d,g,c,m,_;return m=new ee({props:{code:`from transformers import RobertaTokenizer, TFRobertaForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:Z,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function RE(R){let d,g,c,m,_,l,f,M,te,I,z,X,D,se,be,S,ke,ue,K,A,ae,oe,C,j,ie,U,ge,le,H,_e,de,q,ve,W,ce,Te,B,G,re,O,pe,Q,ye;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),c=p(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),M=n("li"),te=r("having all inputs as a list, tuple or dict in the first positional arguments."),I=p(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),se=r("tf.keras.Model.fit"),be=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ke=r("model(inputs)"),ue=r("."),K=p(),A=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=p(),C=n("ul"),j=n("li"),ie=r("a single Tensor with "),U=n("code"),ge=r("input_ids"),le=r(" only and nothing else: "),H=n("code"),_e=r("model(inputs_ids)"),de=p(),q=n("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),ce=r("model([input_ids, attention_mask])"),Te=r(" or "),B=n("code"),G=r("model([input_ids, attention_mask, token_type_ids])"),re=p(),O=n("li"),pe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var E=a(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(v),m=s(v,"UL",{});var ne=a(m);_=s(ne,"LI",{});var Ee=a(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=h(ne),M=s(ne,"LI",{});var me=a(M);te=i(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),ne.forEach(t),I=h(v),z=s(v,"P",{});var N=a(z);X=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var Re=a(D);se=i(Re,"tf.keras.Model.fit"),Re.forEach(t),be=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var ze=a(S);ke=i(ze,"model(inputs)"),ze.forEach(t),ue=i(N,"."),N.forEach(t),K=h(v),A=s(v,"P",{});var Ce=a(A);ae=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),oe=h(v),C=s(v,"UL",{});var L=a(C);j=s(L,"LI",{});var V=a(j);ie=i(V,"a single Tensor with "),U=s(V,"CODE",{});var qe=a(U);ge=i(qe,"input_ids"),qe.forEach(t),le=i(V," only and nothing else: "),H=s(V,"CODE",{});var Me=a(H);_e=i(Me,"model(inputs_ids)"),Me.forEach(t),V.forEach(t),de=h(L),q=s(L,"LI",{});var J=a(q);ve=i(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(J,"CODE",{});var je=a(W);ce=i(je,"model([input_ids, attention_mask])"),je.forEach(t),Te=i(J," or "),B=s(J,"CODE",{});var Pe=a(B);G=i(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),J.forEach(t),re=h(L),O=s(L,"LI",{});var he=a(O);pe=i(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(he,"CODE",{});var xe=a(Q);ye=i(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),he.forEach(t),L.forEach(t)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,m,E),e(m,_),e(_,l),e(m,f),e(m,M),e(M,te),k(v,I,E),k(v,z,E),e(z,X),e(z,D),e(D,se),e(z,be),e(z,S),e(S,ke),e(z,ue),k(v,K,E),k(v,A,E),e(A,ae),k(v,oe,E),k(v,C,E),e(C,j),e(j,ie),e(j,U),e(U,ge),e(j,le),e(j,H),e(H,_e),e(C,de),e(C,q),e(q,ve),e(q,W),e(W,ce),e(q,Te),e(q,B),e(B,G),e(C,re),e(C,O),e(O,pe),e(O,Q),e(Q,ye)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(I),v&&t(z),v&&t(K),v&&t(A),v&&t(oe),v&&t(C)}}}function ME(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function EE(R){let d,g,c,m,_;return m=new ee({props:{code:`from transformers import RobertaTokenizer, TFRobertaForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:Z,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function zE(R){let d,g;return d=new ee({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:Z,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function CE(R){let d,g,c,m,_,l,f,M,te,I,z,X,D,se,be,S,ke,ue,K,A,ae,oe,C,j,ie,U,ge,le,H,_e,de,q,ve,W,ce,Te,B,G,re,O,pe,Q,ye;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),c=p(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=p(),M=n("li"),te=r("having all inputs as a list, tuple or dict in the first positional arguments."),I=p(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),se=r("tf.keras.Model.fit"),be=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ke=r("model(inputs)"),ue=r("."),K=p(),A=n("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),oe=p(),C=n("ul"),j=n("li"),ie=r("a single Tensor with "),U=n("code"),ge=r("input_ids"),le=r(" only and nothing else: "),H=n("code"),_e=r("model(inputs_ids)"),de=p(),q=n("li"),ve=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),ce=r("model([input_ids, attention_mask])"),Te=r(" or "),B=n("code"),G=r("model([input_ids, attention_mask, token_type_ids])"),re=p(),O=n("li"),pe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=n("code"),ye=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var E=a(d);g=i(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(v),m=s(v,"UL",{});var ne=a(m);_=s(ne,"LI",{});var Ee=a(_);l=i(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),f=h(ne),M=s(ne,"LI",{});var me=a(M);te=i(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),ne.forEach(t),I=h(v),z=s(v,"P",{});var N=a(z);X=i(N,"This second option is useful when using "),D=s(N,"CODE",{});var Re=a(D);se=i(Re,"tf.keras.Model.fit"),Re.forEach(t),be=i(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(N,"CODE",{});var ze=a(S);ke=i(ze,"model(inputs)"),ze.forEach(t),ue=i(N,"."),N.forEach(t),K=h(v),A=s(v,"P",{});var Ce=a(A);ae=i(Ce,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ce.forEach(t),oe=h(v),C=s(v,"UL",{});var L=a(C);j=s(L,"LI",{});var V=a(j);ie=i(V,"a single Tensor with "),U=s(V,"CODE",{});var qe=a(U);ge=i(qe,"input_ids"),qe.forEach(t),le=i(V," only and nothing else: "),H=s(V,"CODE",{});var Me=a(H);_e=i(Me,"model(inputs_ids)"),Me.forEach(t),V.forEach(t),de=h(L),q=s(L,"LI",{});var J=a(q);ve=i(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(J,"CODE",{});var je=a(W);ce=i(je,"model([input_ids, attention_mask])"),je.forEach(t),Te=i(J," or "),B=s(J,"CODE",{});var Pe=a(B);G=i(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),J.forEach(t),re=h(L),O=s(L,"LI",{});var he=a(O);pe=i(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=s(he,"CODE",{});var xe=a(Q);ye=i(xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),xe.forEach(t),he.forEach(t),L.forEach(t)},m(v,E){k(v,d,E),e(d,g),k(v,c,E),k(v,m,E),e(m,_),e(_,l),e(m,f),e(m,M),e(M,te),k(v,I,E),k(v,z,E),e(z,X),e(z,D),e(D,se),e(z,be),e(z,S),e(S,ke),e(z,ue),k(v,K,E),k(v,A,E),e(A,ae),k(v,oe,E),k(v,C,E),e(C,j),e(j,ie),e(j,U),e(U,ge),e(j,le),e(j,H),e(H,_e),e(C,de),e(C,q),e(q,ve),e(q,W),e(W,ce),e(q,Te),e(q,B),e(B,G),e(C,re),e(C,O),e(O,pe),e(O,Q),e(Q,ye)},d(v){v&&t(d),v&&t(c),v&&t(m),v&&t(I),v&&t(z),v&&t(K),v&&t(A),v&&t(oe),v&&t(C)}}}function qE(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function jE(R){let d,g,c,m,_;return m=new ee({props:{code:`from transformers import RobertaTokenizer, TFRobertaForQuestionAnswering
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
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:Z,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function PE(R){let d,g;return d=new ee({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.86</span>`}}),{c(){T(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){w(d,c,m),g=!0},p:Z,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){x(d,c)}}}function LE(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function AE(R){let d,g,c,m,_;return m=new ee({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaModel

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaModel.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaModel.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:Z,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function OE(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function NE(R){let d,g,c,m,_;return m=new ee({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:Z,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function IE(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function DE(R){let d,g,c,m,_;return m=new ee({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForMaskedLM

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForMaskedLM.from_pretrained("roberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:Z,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function SE(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function WE(R){let d,g,c,m,_;return m=new ee({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForSequenceClassification

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForSequenceClassification.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:Z,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function BE(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function UE(R){let d,g,c,m,_;return m=new ee({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:Z,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function HE(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function QE(R){let d,g,c,m,_;return m=new ee({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForTokenClassification

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForTokenClassification.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:Z,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function VE(R){let d,g,c,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var M=a(c);m=i(M,"Module"),M.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){k(l,d,f),e(d,g),e(d,c),e(c,m),e(d,_)},d(l){l&&t(d)}}}function JE(R){let d,g,c,m,_;return m=new ee({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=n("p"),g=r("Example:"),c=p(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),c=h(l),y(m.$$.fragment,l)},m(l,f){k(l,d,f),e(d,g),k(l,c,f),w(m,l,f),_=!0},p:Z,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){F(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(c),x(m,l)}}}function KE(R){let d,g,c,m,_,l,f,M,te,I,z,X,D,se,be,S,ke,ue,K,A,ae,oe,C,j,ie,U,ge,le,H,_e,de,q,ve,W,ce,Te,B,G,re,O,pe,Q,ye,v,E,ne,Ee,me,N,Re,ze,Ce,L,V,qe,Me,J,je,Pe,he,xe,ag,rg,Um,eo,ig,va,lg,dg,Ta,cg,pg,Hm,go,bn,hc,ya,hg,mc,mg,Qm,et,wa,fg,Bt,ug,Vl,gg,_g,Jl,bg,kg,$a,vg,Tg,yg,_o,wg,Kl,$g,Fg,Gl,xg,Rg,Mg,bo,Eg,Xl,zg,Cg,Yl,qg,jg,Pg,kn,Vm,ko,vn,fc,Fa,Lg,uc,Ag,Jm,we,xa,Og,gc,Ng,Ig,_c,Dg,Sg,Tn,Wg,Ra,Bg,bc,Ug,Hg,Qg,yn,Vg,Ma,Jg,Zl,Kg,Gg,Xg,to,Ea,Yg,kc,Zg,e_,za,ed,t_,vc,o_,n_,td,s_,Tc,a_,r_,wn,Ca,i_,qa,l_,yc,d_,c_,p_,$n,ja,h_,wc,m_,f_,od,Pa,Km,vo,Fn,$c,La,u_,Fc,g_,Gm,Le,Aa,__,Oa,b_,xc,k_,v_,T_,Rc,y_,w_,xn,$_,Na,F_,Mc,x_,R_,M_,Rn,E_,Ia,z_,nd,C_,q_,j_,sd,Da,Xm,To,Mn,Ec,Sa,P_,zc,L_,Ym,Ae,Wa,A_,Cc,O_,N_,Ba,I_,ad,D_,S_,W_,Ua,B_,Ha,U_,H_,Q_,Qa,V_,qc,J_,K_,G_,He,X_,jc,Y_,Z_,Pc,eb,tb,Lc,ob,nb,Ac,sb,ab,Oc,rb,ib,Nc,lb,db,cb,En,pb,Ic,hb,mb,Va,fb,ub,$t,Ja,gb,yo,_b,rd,bb,kb,Dc,vb,Tb,yb,zn,wb,Cn,Zm,wo,qn,Sc,Ka,$b,Wc,Fb,ef,tt,Ga,xb,Xa,Rb,Bc,Mb,Eb,zb,Ya,Cb,id,qb,jb,Pb,Za,Lb,er,Ab,Ob,Nb,Ft,tr,Ib,$o,Db,ld,Sb,Wb,Uc,Bb,Ub,Hb,jn,Qb,Pn,tf,Fo,Ln,Hc,or,Vb,Qc,Jb,of,ot,nr,Kb,sr,Gb,Vc,Xb,Yb,Zb,ar,ek,dd,tk,ok,nk,rr,sk,ir,ak,rk,ik,it,lr,lk,xo,dk,cd,ck,pk,Jc,hk,mk,fk,An,uk,On,gk,Nn,nf,Ro,In,Kc,dr,_k,Gc,bk,sf,nt,cr,kk,Xc,vk,Tk,pr,yk,pd,wk,$k,Fk,hr,xk,mr,Rk,Mk,Ek,Ue,fr,zk,Mo,Ck,hd,qk,jk,Yc,Pk,Lk,Ak,Dn,Ok,Sn,Nk,Wn,Ik,Bn,Dk,Un,af,Eo,Hn,Zc,ur,Sk,ep,Wk,rf,st,gr,Bk,tp,Uk,Hk,_r,Qk,md,Vk,Jk,Kk,br,Gk,kr,Xk,Yk,Zk,xt,vr,ev,zo,tv,fd,ov,nv,op,sv,av,rv,Qn,iv,Vn,lf,Co,Jn,np,Tr,lv,sp,dv,df,at,yr,cv,ap,pv,hv,wr,mv,ud,fv,uv,gv,$r,_v,Fr,bv,kv,vv,lt,xr,Tv,qo,yv,gd,wv,$v,rp,Fv,xv,Rv,Kn,Mv,Gn,Ev,Xn,cf,jo,Yn,ip,Rr,zv,lp,Cv,pf,rt,Mr,qv,Po,jv,dp,Pv,Lv,cp,Av,Ov,Nv,Er,Iv,_d,Dv,Sv,Wv,zr,Bv,Cr,Uv,Hv,Qv,dt,qr,Vv,Lo,Jv,bd,Kv,Gv,pp,Xv,Yv,Zv,Zn,eT,es,tT,ts,hf,Ao,os,hp,jr,oT,mp,nT,mf,Qe,Pr,sT,fp,aT,rT,Lr,iT,kd,lT,dT,cT,Ar,pT,Or,hT,mT,fT,ns,uT,Rt,Nr,gT,Oo,_T,vd,bT,kT,up,vT,TT,yT,ss,wT,as,ff,No,rs,gp,Ir,$T,_p,FT,uf,Io,Dr,xT,Mt,Sr,RT,Do,MT,Td,ET,zT,bp,CT,qT,jT,is,PT,ls,gf,So,ds,kp,Wr,LT,vp,AT,_f,Ve,Br,OT,Ur,NT,Tp,IT,DT,ST,Hr,WT,yd,BT,UT,HT,Qr,QT,Vr,VT,JT,KT,cs,GT,ct,Jr,XT,Wo,YT,wd,ZT,ey,yp,ty,oy,ny,ps,sy,hs,ay,ms,bf,Bo,fs,wp,Kr,ry,$p,iy,kf,Je,Gr,ly,Fp,dy,cy,Xr,py,$d,hy,my,fy,Yr,uy,Zr,gy,_y,by,us,ky,pt,ei,vy,Uo,Ty,Fd,yy,wy,xp,$y,Fy,xy,gs,Ry,_s,My,bs,vf,Ho,ks,Rp,ti,Ey,Mp,zy,Tf,Ke,oi,Cy,Ep,qy,jy,ni,Py,xd,Ly,Ay,Oy,si,Ny,ai,Iy,Dy,Sy,vs,Wy,Et,ri,By,Qo,Uy,Rd,Hy,Qy,zp,Vy,Jy,Ky,Ts,Gy,ys,yf,Vo,ws,Cp,ii,Xy,qp,Yy,wf,Ge,li,Zy,jp,ew,tw,di,ow,Md,nw,sw,aw,ci,rw,pi,iw,lw,dw,$s,cw,ht,hi,pw,Jo,hw,Ed,mw,fw,Pp,uw,gw,_w,Fs,bw,xs,kw,Rs,$f,Ko,Ms,Lp,mi,vw,Ap,Tw,Ff,Xe,fi,yw,Go,ww,Op,$w,Fw,Np,xw,Rw,Mw,ui,Ew,zd,zw,Cw,qw,gi,jw,_i,Pw,Lw,Aw,Es,Ow,mt,bi,Nw,Xo,Iw,Cd,Dw,Sw,Ip,Ww,Bw,Uw,zs,Hw,Cs,Qw,qs,xf,Yo,js,Dp,ki,Vw,Sp,Jw,Rf,Oe,vi,Kw,Wp,Gw,Xw,Ti,Yw,qd,Zw,e1,t1,yi,o1,wi,n1,s1,a1,Bp,r1,i1,Ut,Up,$i,l1,d1,Hp,Fi,c1,p1,Qp,xi,h1,m1,Vp,Ri,f1,u1,zt,Mi,g1,Zo,_1,Jp,b1,k1,Kp,v1,T1,y1,Ps,w1,Ls,Mf,en,As,Gp,Ei,$1,Xp,F1,Ef,Ne,zi,x1,Yp,R1,M1,Ci,E1,jd,z1,C1,q1,qi,j1,ji,P1,L1,A1,Zp,O1,N1,Ht,eh,Pi,I1,D1,th,Li,S1,W1,oh,Ai,B1,U1,nh,Oi,H1,Q1,Ct,Ni,V1,tn,J1,sh,K1,G1,ah,X1,Y1,Z1,Os,e$,Ns,zf,on,Is,rh,Ii,t$,ih,o$,Cf,Ie,Di,n$,Si,s$,lh,a$,r$,i$,Wi,l$,Pd,d$,c$,p$,Bi,h$,Ui,m$,f$,u$,dh,g$,_$,Qt,ch,Hi,b$,k$,ph,Qi,v$,T$,hh,Vi,y$,w$,mh,Ji,$$,F$,qt,Ki,x$,nn,R$,fh,M$,E$,uh,z$,C$,q$,Ds,j$,Ss,qf,sn,Ws,gh,Gi,P$,_h,L$,jf,De,Xi,A$,bh,O$,N$,Yi,I$,Ld,D$,S$,W$,Zi,B$,el,U$,H$,Q$,kh,V$,J$,Vt,vh,tl,K$,G$,Th,ol,X$,Y$,yh,nl,Z$,e2,wh,sl,t2,o2,jt,al,n2,an,s2,$h,a2,r2,Fh,i2,l2,d2,Bs,c2,Us,Pf,rn,Hs,xh,rl,p2,Rh,h2,Lf,Se,il,m2,Mh,f2,u2,ll,g2,Ad,_2,b2,k2,dl,v2,cl,T2,y2,w2,Eh,$2,F2,Jt,zh,pl,x2,R2,Ch,hl,M2,E2,qh,ml,z2,C2,jh,fl,q2,j2,Pt,ul,P2,ln,L2,Ph,A2,O2,Lh,N2,I2,D2,Qs,S2,Vs,Af,dn,Js,Ah,gl,W2,Oh,B2,Of,We,_l,U2,Nh,H2,Q2,bl,V2,Od,J2,K2,G2,kl,X2,vl,Y2,Z2,eF,Ih,tF,oF,Kt,Dh,Tl,nF,sF,Sh,yl,aF,rF,Wh,wl,iF,lF,Bh,$l,dF,cF,Lt,Fl,pF,cn,hF,Uh,mF,fF,Hh,uF,gF,_F,Ks,bF,Gs,Nf,pn,Xs,Qh,xl,kF,Vh,vF,If,Be,Rl,TF,hn,yF,Jh,wF,$F,Kh,FF,xF,RF,Ml,MF,Nd,EF,zF,CF,El,qF,zl,jF,PF,LF,Gh,AF,OF,Gt,Xh,Cl,NF,IF,Yh,ql,DF,SF,Zh,jl,WF,BF,em,Pl,UF,HF,At,Ll,QF,mn,VF,tm,JF,KF,om,GF,XF,YF,Ys,ZF,Zs,Df;return l=new $e({}),se=new $e({}),ya=new $e({}),wa=new P({props:{name:"class transformers.RobertaConfig",anchor:"transformers.RobertaConfig",parameters:[{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/configuration_roberta.py#L37"}}),kn=new Y({props:{anchor:"transformers.RobertaConfig.example",$$slots:{default:[DM]},$$scope:{ctx:R}}}),Fa=new $e({}),xa=new P({props:{name:"class transformers.RobertaTokenizer",anchor:"transformers.RobertaTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
other word. (RoBERTa tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/tokenization_roberta.py#L107"}}),Tn=new Y({props:{anchor:"transformers.RobertaTokenizer.example",$$slots:{default:[SM]},$$scope:{ctx:R}}}),yn=new fe({props:{$$slots:{default:[WM]},$$scope:{ctx:R}}}),Ea=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/tokenization_roberta.py#L344",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ca=new P({props:{name:"get_special_tokens_mask",anchor:"transformers.RobertaTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.RobertaTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/tokenization_roberta.py#L369",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ja=new P({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RobertaTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/tokenization_roberta.py#L396",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Pa=new P({props:{name:"save_vocabulary",anchor:"transformers.RobertaTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/tokenization_roberta.py#L315"}}),La=new $e({}),Aa=new P({props:{name:"class transformers.RobertaTokenizerFast",anchor:"transformers.RobertaTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RobertaTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether the post processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/tokenization_roberta_fast.py#L76"}}),xn=new Y({props:{anchor:"transformers.RobertaTokenizerFast.example",$$slots:{default:[BM]},$$scope:{ctx:R}}}),Rn=new fe({props:{$$slots:{default:[UM]},$$scope:{ctx:R}}}),Da=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RobertaTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/tokenization_roberta_fast.py#L279"}}),Sa=new $e({}),Wa=new P({props:{name:"class transformers.RobertaModel",anchor:"transformers.RobertaModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.RobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_roberta.py#L693"}}),Ja=new P({props:{name:"forward",anchor:"transformers.RobertaModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_roberta.py#L738",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),zn=new fe({props:{$$slots:{default:[HM]},$$scope:{ctx:R}}}),Cn=new Y({props:{anchor:"transformers.RobertaModel.forward.example",$$slots:{default:[QM]},$$scope:{ctx:R}}}),Ka=new $e({}),Ga=new P({props:{name:"class transformers.RobertaForCausalLM",anchor:"transformers.RobertaForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_roberta.py#L879"}}),tr=new P({props:{name:"forward",anchor:"transformers.RobertaForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Tuple[typing.Tuple[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_roberta.py#L905",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),jn=new fe({props:{$$slots:{default:[VM]},$$scope:{ctx:R}}}),Pn=new Y({props:{anchor:"transformers.RobertaForCausalLM.forward.example",$$slots:{default:[JM]},$$scope:{ctx:R}}}),or=new $e({}),nr=new P({props:{name:"class transformers.RobertaForMaskedLM",anchor:"transformers.RobertaForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_roberta.py#L1031"}}),lr=new P({props:{name:"forward",anchor:"transformers.RobertaForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.RobertaForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_roberta.py#L1060",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),An=new fe({props:{$$slots:{default:[KM]},$$scope:{ctx:R}}}),On=new Y({props:{anchor:"transformers.RobertaForMaskedLM.forward.example",$$slots:{default:[GM]},$$scope:{ctx:R}}}),Nn=new Y({props:{anchor:"transformers.RobertaForMaskedLM.forward.example-2",$$slots:{default:[XM]},$$scope:{ctx:R}}}),dr=new $e({}),cr=new P({props:{name:"class transformers.RobertaForSequenceClassification",anchor:"transformers.RobertaForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_roberta.py#L1162"}}),fr=new P({props:{name:"forward",anchor:"transformers.RobertaForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_roberta.py#L1176",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Dn=new fe({props:{$$slots:{default:[YM]},$$scope:{ctx:R}}}),Sn=new Y({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example",$$slots:{default:[ZM]},$$scope:{ctx:R}}}),Wn=new Y({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example-2",$$slots:{default:[eE]},$$scope:{ctx:R}}}),Bn=new Y({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example-3",$$slots:{default:[tE]},$$scope:{ctx:R}}}),Un=new Y({props:{anchor:"transformers.RobertaForSequenceClassification.forward.example-4",$$slots:{default:[oE]},$$scope:{ctx:R}}}),ur=new $e({}),gr=new P({props:{name:"class transformers.RobertaForMultipleChoice",anchor:"transformers.RobertaForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_roberta.py#L1262"}}),vr=new P({props:{name:"forward",anchor:"transformers.RobertaForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_roberta.py#L1275",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qn=new fe({props:{$$slots:{default:[nE]},$$scope:{ctx:R}}}),Vn=new Y({props:{anchor:"transformers.RobertaForMultipleChoice.forward.example",$$slots:{default:[sE]},$$scope:{ctx:R}}}),Tr=new $e({}),yr=new P({props:{name:"class transformers.RobertaForTokenClassification",anchor:"transformers.RobertaForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_roberta.py#L1355"}}),xr=new P({props:{name:"forward",anchor:"transformers.RobertaForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_roberta.py#L1373",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Kn=new fe({props:{$$slots:{default:[aE]},$$scope:{ctx:R}}}),Gn=new Y({props:{anchor:"transformers.RobertaForTokenClassification.forward.example",$$slots:{default:[rE]},$$scope:{ctx:R}}}),Xn=new Y({props:{anchor:"transformers.RobertaForTokenClassification.forward.example-2",$$slots:{default:[iE]},$$scope:{ctx:R}}}),Rr=new $e({}),Mr=new P({props:{name:"class transformers.RobertaForQuestionAnswering",anchor:"transformers.RobertaForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_roberta.py#L1464"}}),qr=new P({props:{name:"forward",anchor:"transformers.RobertaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RobertaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.RobertaForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_roberta.py#L1478",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zn=new fe({props:{$$slots:{default:[lE]},$$scope:{ctx:R}}}),es=new Y({props:{anchor:"transformers.RobertaForQuestionAnswering.forward.example",$$slots:{default:[dE]},$$scope:{ctx:R}}}),ts=new Y({props:{anchor:"transformers.RobertaForQuestionAnswering.forward.example-2",$$slots:{default:[cE]},$$scope:{ctx:R}}}),jr=new $e({}),Pr=new P({props:{name:"class transformers.TFRobertaModel",anchor:"transformers.TFRobertaModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_tf_roberta.py#L909"}}),ns=new fe({props:{$$slots:{default:[pE]},$$scope:{ctx:R}}}),Nr=new P({props:{name:"call",anchor:"transformers.TFRobertaModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_tf_roberta.py#L914",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ss=new fe({props:{$$slots:{default:[hE]},$$scope:{ctx:R}}}),as=new Y({props:{anchor:"transformers.TFRobertaModel.call.example",$$slots:{default:[mE]},$$scope:{ctx:R}}}),Ir=new $e({}),Dr=new P({props:{name:"class transformers.TFRobertaForCausalLM",anchor:"transformers.TFRobertaForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_tf_roberta.py#L1138"}}),Sr=new P({props:{name:"call",anchor:"transformers.TFRobertaForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForCausalLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_tf_roberta.py#L1171",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),is=new fe({props:{$$slots:{default:[fE]},$$scope:{ctx:R}}}),ls=new Y({props:{anchor:"transformers.TFRobertaForCausalLM.call.example",$$slots:{default:[uE]},$$scope:{ctx:R}}}),Wr=new $e({}),Br=new P({props:{name:"class transformers.TFRobertaForMaskedLM",anchor:"transformers.TFRobertaForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_tf_roberta.py#L1053"}}),cs=new fe({props:{$$slots:{default:[gE]},$$scope:{ctx:R}}}),Jr=new P({props:{name:"call",anchor:"transformers.TFRobertaForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_tf_roberta.py#L1070",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ps=new fe({props:{$$slots:{default:[_E]},$$scope:{ctx:R}}}),hs=new Y({props:{anchor:"transformers.TFRobertaForMaskedLM.call.example",$$slots:{default:[bE]},$$scope:{ctx:R}}}),ms=new Y({props:{anchor:"transformers.TFRobertaForMaskedLM.call.example-2",$$slots:{default:[kE]},$$scope:{ctx:R}}}),Kr=new $e({}),Gr=new P({props:{name:"class transformers.TFRobertaForSequenceClassification",anchor:"transformers.TFRobertaForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_tf_roberta.py#L1318"}}),us=new fe({props:{$$slots:{default:[vE]},$$scope:{ctx:R}}}),ei=new P({props:{name:"call",anchor:"transformers.TFRobertaForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_tf_roberta.py#L1329",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),gs=new fe({props:{$$slots:{default:[TE]},$$scope:{ctx:R}}}),_s=new Y({props:{anchor:"transformers.TFRobertaForSequenceClassification.call.example",$$slots:{default:[yE]},$$scope:{ctx:R}}}),bs=new Y({props:{anchor:"transformers.TFRobertaForSequenceClassification.call.example-2",$$slots:{default:[wE]},$$scope:{ctx:R}}}),ti=new $e({}),oi=new P({props:{name:"class transformers.TFRobertaForMultipleChoice",anchor:"transformers.TFRobertaForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_tf_roberta.py#L1402"}}),vs=new fe({props:{$$slots:{default:[$E]},$$scope:{ctx:R}}}),ri=new P({props:{name:"call",anchor:"transformers.TFRobertaForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_tf_roberta.py#L1426",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ts=new fe({props:{$$slots:{default:[FE]},$$scope:{ctx:R}}}),ys=new Y({props:{anchor:"transformers.TFRobertaForMultipleChoice.call.example",$$slots:{default:[xE]},$$scope:{ctx:R}}}),ii=new $e({}),li=new P({props:{name:"class transformers.TFRobertaForTokenClassification",anchor:"transformers.TFRobertaForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_tf_roberta.py#L1523"}}),$s=new fe({props:{$$slots:{default:[RE]},$$scope:{ctx:R}}}),hi=new P({props:{name:"call",anchor:"transformers.TFRobertaForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_tf_roberta.py#L1541",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Fs=new fe({props:{$$slots:{default:[ME]},$$scope:{ctx:R}}}),xs=new Y({props:{anchor:"transformers.TFRobertaForTokenClassification.call.example",$$slots:{default:[EE]},$$scope:{ctx:R}}}),Rs=new Y({props:{anchor:"transformers.TFRobertaForTokenClassification.call.example-2",$$slots:{default:[zE]},$$scope:{ctx:R}}}),mi=new $e({}),fi=new P({props:{name:"class transformers.TFRobertaForQuestionAnswering",anchor:"transformers.TFRobertaForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_tf_roberta.py#L1614"}}),Es=new fe({props:{$$slots:{default:[CE]},$$scope:{ctx:R}}}),bi=new P({props:{name:"call",anchor:"transformers.TFRobertaForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFRobertaForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_tf_roberta.py#L1627",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),zs=new fe({props:{$$slots:{default:[qE]},$$scope:{ctx:R}}}),Cs=new Y({props:{anchor:"transformers.TFRobertaForQuestionAnswering.call.example",$$slots:{default:[jE]},$$scope:{ctx:R}}}),qs=new Y({props:{anchor:"transformers.TFRobertaForQuestionAnswering.call.example-2",$$slots:{default:[PE]},$$scope:{ctx:R}}}),ki=new $e({}),vi=new P({props:{name:"class transformers.FlaxRobertaModel",anchor:"transformers.FlaxRobertaModel",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_flax_roberta.py#L989"}}),Mi=new P({props:{name:"__call__",anchor:"transformers.FlaxRobertaModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ps=new fe({props:{$$slots:{default:[LE]},$$scope:{ctx:R}}}),Ls=new Y({props:{anchor:"transformers.FlaxRobertaModel.__call__.example",$$slots:{default:[AE]},$$scope:{ctx:R}}}),Ei=new $e({}),zi=new P({props:{name:"class transformers.FlaxRobertaForCausalLM",anchor:"transformers.FlaxRobertaForCausalLM",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_flax_roberta.py#L1458"}}),Ni=new P({props:{name:"__call__",anchor:"transformers.FlaxRobertaForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Os=new fe({props:{$$slots:{default:[OE]},$$scope:{ctx:R}}}),Ns=new Y({props:{anchor:"transformers.FlaxRobertaForCausalLM.__call__.example",$$slots:{default:[NE]},$$scope:{ctx:R}}}),Ii=new $e({}),Di=new P({props:{name:"class transformers.FlaxRobertaForMaskedLM",anchor:"transformers.FlaxRobertaForMaskedLM",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_flax_roberta.py#L1057"}}),Ki=new P({props:{name:"__call__",anchor:"transformers.FlaxRobertaForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ds=new fe({props:{$$slots:{default:[IE]},$$scope:{ctx:R}}}),Ss=new Y({props:{anchor:"transformers.FlaxRobertaForMaskedLM.__call__.example",$$slots:{default:[DE]},$$scope:{ctx:R}}}),Gi=new $e({}),Xi=new P({props:{name:"class transformers.FlaxRobertaForSequenceClassification",anchor:"transformers.FlaxRobertaForSequenceClassification",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_flax_roberta.py#L1130"}}),al=new P({props:{name:"__call__",anchor:"transformers.FlaxRobertaForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bs=new fe({props:{$$slots:{default:[SE]},$$scope:{ctx:R}}}),Us=new Y({props:{anchor:"transformers.FlaxRobertaForSequenceClassification.__call__.example",$$slots:{default:[WE]},$$scope:{ctx:R}}}),rl=new $e({}),il=new P({props:{name:"class transformers.FlaxRobertaForMultipleChoice",anchor:"transformers.FlaxRobertaForMultipleChoice",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_flax_roberta.py#L1212"}}),ul=new P({props:{name:"__call__",anchor:"transformers.FlaxRobertaForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qs=new fe({props:{$$slots:{default:[BE]},$$scope:{ctx:R}}}),Vs=new Y({props:{anchor:"transformers.FlaxRobertaForMultipleChoice.__call__.example",$$slots:{default:[UE]},$$scope:{ctx:R}}}),gl=new $e({}),_l=new P({props:{name:"class transformers.FlaxRobertaForTokenClassification",anchor:"transformers.FlaxRobertaForTokenClassification",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_flax_roberta.py#L1295"}}),Fl=new P({props:{name:"__call__",anchor:"transformers.FlaxRobertaForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ks=new fe({props:{$$slots:{default:[HE]},$$scope:{ctx:R}}}),Gs=new Y({props:{anchor:"transformers.FlaxRobertaForTokenClassification.__call__.example",$$slots:{default:[QE]},$$scope:{ctx:R}}}),xl=new $e({}),Rl=new P({props:{name:"class transformers.FlaxRobertaForQuestionAnswering",anchor:"transformers.FlaxRobertaForQuestionAnswering",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig">RobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_flax_roberta.py#L1373"}}),Ll=new P({props:{name:"__call__",anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ys=new fe({props:{$$slots:{default:[VE]},$$scope:{ctx:R}}}),Zs=new Y({props:{anchor:"transformers.FlaxRobertaForQuestionAnswering.__call__.example",$$slots:{default:[JE]},$$scope:{ctx:R}}}),{c(){d=n("meta"),g=p(),c=n("h1"),m=n("a"),_=n("span"),T(l.$$.fragment),f=p(),M=n("span"),te=r("RoBERTa"),I=p(),z=n("h2"),X=n("a"),D=n("span"),T(se.$$.fragment),be=p(),S=n("span"),ke=r("Overview"),ue=p(),K=n("p"),A=r("The RoBERTa model was proposed in "),ae=n("a"),oe=r("RoBERTa: A Robustly Optimized BERT Pretraining Approach"),C=r(` by Yinhan Liu, Myle Ott, Naman Goyal, Jingfei Du, Mandar Joshi, Danqi Chen, Omer
Levy, Mike Lewis, Luke Zettlemoyer, Veselin Stoyanov. It is based on Google\u2019s BERT model released in 2018.`),j=p(),ie=n("p"),U=r(`It builds on BERT and modifies key hyperparameters, removing the next-sentence pretraining objective and training with
much larger mini-batches and learning rates.`),ge=p(),le=n("p"),H=r("The abstract from the paper is the following:"),_e=p(),de=n("p"),q=n("em"),ve=r(`Language model pretraining has led to significant performance gains but careful comparison between different
approaches is challenging. Training is computationally expensive, often done on private datasets of different sizes,
and, as we will show, hyperparameter choices have significant impact on the final results. We present a replication
study of BERT pretraining (Devlin et al., 2019) that carefully measures the impact of many key hyperparameters and
training data size. We find that BERT was significantly undertrained, and can match or exceed the performance of every
model published after it. Our best model achieves state-of-the-art results on GLUE, RACE and SQuAD. These results
highlight the importance of previously overlooked design choices, and raise questions about the source of recently
reported improvements. We release our models and code.`),W=p(),ce=n("p"),Te=r("Tips:"),B=p(),G=n("ul"),re=n("li"),O=r("This implementation is the same as "),pe=n("a"),Q=r("BertModel"),ye=r(` with a tiny embeddings tweak as well as a setup
for Roberta pretrained models.`),v=p(),E=n("li"),ne=r(`RoBERTa has the same architecture as BERT, but uses a byte-level BPE as a tokenizer (same as GPT-2) and uses a
different pretraining scheme.`),Ee=p(),me=n("li"),N=r("RoBERTa doesn\u2019t have "),Re=n("code"),ze=r("token_type_ids"),Ce=r(`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),L=n("code"),V=r("tokenizer.sep_token"),qe=r(" (or "),Me=n("code"),J=r("</s>"),je=r(")"),Pe=p(),he=n("li"),xe=n("a"),ag=r("CamemBERT"),rg=r(" is a wrapper around RoBERTa. Refer to this page for usage examples."),Um=p(),eo=n("p"),ig=r("This model was contributed by "),va=n("a"),lg=r("julien-c"),dg=r(". The original code can be found "),Ta=n("a"),cg=r("here"),pg=r("."),Hm=p(),go=n("h2"),bn=n("a"),hc=n("span"),T(ya.$$.fragment),hg=p(),mc=n("span"),mg=r("RobertaConfig"),Qm=p(),et=n("div"),T(wa.$$.fragment),fg=p(),Bt=n("p"),ug=r("This is the configuration class to store the configuration of a "),Vl=n("a"),gg=r("RobertaModel"),_g=r(" or a "),Jl=n("a"),bg=r("TFRobertaModel"),kg=r(`. It is
used to instantiate a RoBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the RoBERTa
`),$a=n("a"),vg=r("roberta-base"),Tg=r(" architecture."),yg=p(),_o=n("p"),wg=r("Configuration objects inherit from "),Kl=n("a"),$g=r("PretrainedConfig"),Fg=r(` and can be used to control the model outputs. Read the
documentation from `),Gl=n("a"),xg=r("PretrainedConfig"),Rg=r(" for more information."),Mg=p(),bo=n("p"),Eg=r("The "),Xl=n("a"),zg=r("RobertaConfig"),Cg=r(" class directly inherits "),Yl=n("a"),qg=r("BertConfig"),jg=r(`. It reuses the same defaults. Please check the parent
class for more information.`),Pg=p(),T(kn.$$.fragment),Vm=p(),ko=n("h2"),vn=n("a"),fc=n("span"),T(Fa.$$.fragment),Lg=p(),uc=n("span"),Ag=r("RobertaTokenizer"),Jm=p(),we=n("div"),T(xa.$$.fragment),Og=p(),gc=n("p"),Ng=r("Constructs a RoBERTa tokenizer, derived from the GPT-2 tokenizer, using byte-level Byte-Pair-Encoding."),Ig=p(),_c=n("p"),Dg=r("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Sg=p(),T(Tn.$$.fragment),Wg=p(),Ra=n("p"),Bg=r("You can get around that behavior by passing "),bc=n("code"),Ug=r("add_prefix_space=True"),Hg=r(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Qg=p(),T(yn.$$.fragment),Vg=p(),Ma=n("p"),Jg=r("This tokenizer inherits from "),Zl=n("a"),Kg=r("PreTrainedTokenizer"),Gg=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Xg=p(),to=n("div"),T(Ea.$$.fragment),Yg=p(),kc=n("p"),Zg=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoBERTa sequence has the following format:`),e_=p(),za=n("ul"),ed=n("li"),t_=r("single sequence: "),vc=n("code"),o_=r("<s> X </s>"),n_=p(),td=n("li"),s_=r("pair of sequences: "),Tc=n("code"),a_=r("<s> A </s></s> B </s>"),r_=p(),wn=n("div"),T(Ca.$$.fragment),i_=p(),qa=n("p"),l_=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),yc=n("code"),d_=r("prepare_for_model"),c_=r(" method."),p_=p(),$n=n("div"),T(ja.$$.fragment),h_=p(),wc=n("p"),m_=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. RoBERTa does not
make use of token type ids, therefore a list of zeros is returned.`),f_=p(),od=n("div"),T(Pa.$$.fragment),Km=p(),vo=n("h2"),Fn=n("a"),$c=n("span"),T(La.$$.fragment),u_=p(),Fc=n("span"),g_=r("RobertaTokenizerFast"),Gm=p(),Le=n("div"),T(Aa.$$.fragment),__=p(),Oa=n("p"),b_=r("Construct a \u201Cfast\u201D RoBERTa tokenizer (backed by HuggingFace\u2019s "),xc=n("em"),k_=r("tokenizers"),v_=r(` library), derived from the GPT-2
tokenizer, using byte-level Byte-Pair-Encoding.`),T_=p(),Rc=n("p"),y_=r("This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),w_=p(),T(xn.$$.fragment),$_=p(),Na=n("p"),F_=r("You can get around that behavior by passing "),Mc=n("code"),x_=r("add_prefix_space=True"),R_=r(` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),M_=p(),T(Rn.$$.fragment),E_=p(),Ia=n("p"),z_=r("This tokenizer inherits from "),nd=n("a"),C_=r("PreTrainedTokenizerFast"),q_=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),j_=p(),sd=n("div"),T(Da.$$.fragment),Xm=p(),To=n("h2"),Mn=n("a"),Ec=n("span"),T(Sa.$$.fragment),P_=p(),zc=n("span"),L_=r("RobertaModel"),Ym=p(),Ae=n("div"),T(Wa.$$.fragment),A_=p(),Cc=n("p"),O_=r("The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),N_=p(),Ba=n("p"),I_=r("This model inherits from "),ad=n("a"),D_=r("PreTrainedModel"),S_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),W_=p(),Ua=n("p"),B_=r("This model is also a PyTorch "),Ha=n("a"),U_=r("torch.nn.Module"),H_=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Q_=p(),Qa=n("p"),V_=r(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),qc=n("em"),J_=r(`Attention is
all you need`),K_=r(`_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`),G_=p(),He=n("p"),X_=r("To behave as an decoder the model needs to be initialized with the "),jc=n("code"),Y_=r("is_decoder"),Z_=r(` argument of the configuration set
to `),Pc=n("code"),eb=r("True"),tb=r(". To be used in a Seq2Seq model, the model needs to initialized with both "),Lc=n("code"),ob=r("is_decoder"),nb=r(` argument and
`),Ac=n("code"),sb=r("add_cross_attention"),ab=r(" set to "),Oc=n("code"),rb=r("True"),ib=r("; an "),Nc=n("code"),lb=r("encoder_hidden_states"),db=r(" is then expected as an input to the forward pass."),cb=p(),En=n("p"),pb=r(".. _"),Ic=n("em"),hb=r("Attention is all you need"),mb=r(": "),Va=n("a"),fb=r("https://arxiv.org/abs/1706.03762"),ub=p(),$t=n("div"),T(Ja.$$.fragment),gb=p(),yo=n("p"),_b=r("The "),rd=n("a"),bb=r("RobertaModel"),kb=r(" forward method, overrides the "),Dc=n("code"),vb=r("__call__"),Tb=r(" special method."),yb=p(),T(zn.$$.fragment),wb=p(),T(Cn.$$.fragment),Zm=p(),wo=n("h2"),qn=n("a"),Sc=n("span"),T(Ka.$$.fragment),$b=p(),Wc=n("span"),Fb=r("RobertaForCausalLM"),ef=p(),tt=n("div"),T(Ga.$$.fragment),xb=p(),Xa=n("p"),Rb=r("RoBERTa Model with a "),Bc=n("code"),Mb=r("language modeling"),Eb=r(" head on top for CLM fine-tuning."),zb=p(),Ya=n("p"),Cb=r("This model inherits from "),id=n("a"),qb=r("PreTrainedModel"),jb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pb=p(),Za=n("p"),Lb=r("This model is also a PyTorch "),er=n("a"),Ab=r("torch.nn.Module"),Ob=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nb=p(),Ft=n("div"),T(tr.$$.fragment),Ib=p(),$o=n("p"),Db=r("The "),ld=n("a"),Sb=r("RobertaForCausalLM"),Wb=r(" forward method, overrides the "),Uc=n("code"),Bb=r("__call__"),Ub=r(" special method."),Hb=p(),T(jn.$$.fragment),Qb=p(),T(Pn.$$.fragment),tf=p(),Fo=n("h2"),Ln=n("a"),Hc=n("span"),T(or.$$.fragment),Vb=p(),Qc=n("span"),Jb=r("RobertaForMaskedLM"),of=p(),ot=n("div"),T(nr.$$.fragment),Kb=p(),sr=n("p"),Gb=r("RoBERTa Model with a "),Vc=n("code"),Xb=r("language modeling"),Yb=r(" head on top."),Zb=p(),ar=n("p"),ek=r("This model inherits from "),dd=n("a"),tk=r("PreTrainedModel"),ok=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nk=p(),rr=n("p"),sk=r("This model is also a PyTorch "),ir=n("a"),ak=r("torch.nn.Module"),rk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ik=p(),it=n("div"),T(lr.$$.fragment),lk=p(),xo=n("p"),dk=r("The "),cd=n("a"),ck=r("RobertaForMaskedLM"),pk=r(" forward method, overrides the "),Jc=n("code"),hk=r("__call__"),mk=r(" special method."),fk=p(),T(An.$$.fragment),uk=p(),T(On.$$.fragment),gk=p(),T(Nn.$$.fragment),nf=p(),Ro=n("h2"),In=n("a"),Kc=n("span"),T(dr.$$.fragment),_k=p(),Gc=n("span"),bk=r("RobertaForSequenceClassification"),sf=p(),nt=n("div"),T(cr.$$.fragment),kk=p(),Xc=n("p"),vk=r(`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Tk=p(),pr=n("p"),yk=r("This model inherits from "),pd=n("a"),wk=r("PreTrainedModel"),$k=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fk=p(),hr=n("p"),xk=r("This model is also a PyTorch "),mr=n("a"),Rk=r("torch.nn.Module"),Mk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ek=p(),Ue=n("div"),T(fr.$$.fragment),zk=p(),Mo=n("p"),Ck=r("The "),hd=n("a"),qk=r("RobertaForSequenceClassification"),jk=r(" forward method, overrides the "),Yc=n("code"),Pk=r("__call__"),Lk=r(" special method."),Ak=p(),T(Dn.$$.fragment),Ok=p(),T(Sn.$$.fragment),Nk=p(),T(Wn.$$.fragment),Ik=p(),T(Bn.$$.fragment),Dk=p(),T(Un.$$.fragment),af=p(),Eo=n("h2"),Hn=n("a"),Zc=n("span"),T(ur.$$.fragment),Sk=p(),ep=n("span"),Wk=r("RobertaForMultipleChoice"),rf=p(),st=n("div"),T(gr.$$.fragment),Bk=p(),tp=n("p"),Uk=r(`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Hk=p(),_r=n("p"),Qk=r("This model inherits from "),md=n("a"),Vk=r("PreTrainedModel"),Jk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kk=p(),br=n("p"),Gk=r("This model is also a PyTorch "),kr=n("a"),Xk=r("torch.nn.Module"),Yk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zk=p(),xt=n("div"),T(vr.$$.fragment),ev=p(),zo=n("p"),tv=r("The "),fd=n("a"),ov=r("RobertaForMultipleChoice"),nv=r(" forward method, overrides the "),op=n("code"),sv=r("__call__"),av=r(" special method."),rv=p(),T(Qn.$$.fragment),iv=p(),T(Vn.$$.fragment),lf=p(),Co=n("h2"),Jn=n("a"),np=n("span"),T(Tr.$$.fragment),lv=p(),sp=n("span"),dv=r("RobertaForTokenClassification"),df=p(),at=n("div"),T(yr.$$.fragment),cv=p(),ap=n("p"),pv=r(`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),hv=p(),wr=n("p"),mv=r("This model inherits from "),ud=n("a"),fv=r("PreTrainedModel"),uv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gv=p(),$r=n("p"),_v=r("This model is also a PyTorch "),Fr=n("a"),bv=r("torch.nn.Module"),kv=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vv=p(),lt=n("div"),T(xr.$$.fragment),Tv=p(),qo=n("p"),yv=r("The "),gd=n("a"),wv=r("RobertaForTokenClassification"),$v=r(" forward method, overrides the "),rp=n("code"),Fv=r("__call__"),xv=r(" special method."),Rv=p(),T(Kn.$$.fragment),Mv=p(),T(Gn.$$.fragment),Ev=p(),T(Xn.$$.fragment),cf=p(),jo=n("h2"),Yn=n("a"),ip=n("span"),T(Rr.$$.fragment),zv=p(),lp=n("span"),Cv=r("RobertaForQuestionAnswering"),pf=p(),rt=n("div"),T(Mr.$$.fragment),qv=p(),Po=n("p"),jv=r(`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),dp=n("code"),Pv=r("span start logits"),Lv=r(" and "),cp=n("code"),Av=r("span end logits"),Ov=r(")."),Nv=p(),Er=n("p"),Iv=r("This model inherits from "),_d=n("a"),Dv=r("PreTrainedModel"),Sv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wv=p(),zr=n("p"),Bv=r("This model is also a PyTorch "),Cr=n("a"),Uv=r("torch.nn.Module"),Hv=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qv=p(),dt=n("div"),T(qr.$$.fragment),Vv=p(),Lo=n("p"),Jv=r("The "),bd=n("a"),Kv=r("RobertaForQuestionAnswering"),Gv=r(" forward method, overrides the "),pp=n("code"),Xv=r("__call__"),Yv=r(" special method."),Zv=p(),T(Zn.$$.fragment),eT=p(),T(es.$$.fragment),tT=p(),T(ts.$$.fragment),hf=p(),Ao=n("h2"),os=n("a"),hp=n("span"),T(jr.$$.fragment),oT=p(),mp=n("span"),nT=r("TFRobertaModel"),mf=p(),Qe=n("div"),T(Pr.$$.fragment),sT=p(),fp=n("p"),aT=r("The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),rT=p(),Lr=n("p"),iT=r("This model inherits from "),kd=n("a"),lT=r("TFPreTrainedModel"),dT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cT=p(),Ar=n("p"),pT=r("This model is also a "),Or=n("a"),hT=r("tf.keras.Model"),mT=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fT=p(),T(ns.$$.fragment),uT=p(),Rt=n("div"),T(Nr.$$.fragment),gT=p(),Oo=n("p"),_T=r("The "),vd=n("a"),bT=r("TFRobertaModel"),kT=r(" forward method, overrides the "),up=n("code"),vT=r("__call__"),TT=r(" special method."),yT=p(),T(ss.$$.fragment),wT=p(),T(as.$$.fragment),ff=p(),No=n("h2"),rs=n("a"),gp=n("span"),T(Ir.$$.fragment),$T=p(),_p=n("span"),FT=r("TFRobertaForCausalLM"),uf=p(),Io=n("div"),T(Dr.$$.fragment),xT=p(),Mt=n("div"),T(Sr.$$.fragment),RT=p(),Do=n("p"),MT=r("The "),Td=n("a"),ET=r("TFRobertaForCausalLM"),zT=r(" forward method, overrides the "),bp=n("code"),CT=r("__call__"),qT=r(" special method."),jT=p(),T(is.$$.fragment),PT=p(),T(ls.$$.fragment),gf=p(),So=n("h2"),ds=n("a"),kp=n("span"),T(Wr.$$.fragment),LT=p(),vp=n("span"),AT=r("TFRobertaForMaskedLM"),_f=p(),Ve=n("div"),T(Br.$$.fragment),OT=p(),Ur=n("p"),NT=r("RoBERTa Model with a "),Tp=n("code"),IT=r("language modeling"),DT=r(" head on top."),ST=p(),Hr=n("p"),WT=r("This model inherits from "),yd=n("a"),BT=r("TFPreTrainedModel"),UT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),HT=p(),Qr=n("p"),QT=r("This model is also a "),Vr=n("a"),VT=r("tf.keras.Model"),JT=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),KT=p(),T(cs.$$.fragment),GT=p(),ct=n("div"),T(Jr.$$.fragment),XT=p(),Wo=n("p"),YT=r("The "),wd=n("a"),ZT=r("TFRobertaForMaskedLM"),ey=r(" forward method, overrides the "),yp=n("code"),ty=r("__call__"),oy=r(" special method."),ny=p(),T(ps.$$.fragment),sy=p(),T(hs.$$.fragment),ay=p(),T(ms.$$.fragment),bf=p(),Bo=n("h2"),fs=n("a"),wp=n("span"),T(Kr.$$.fragment),ry=p(),$p=n("span"),iy=r("TFRobertaForSequenceClassification"),kf=p(),Je=n("div"),T(Gr.$$.fragment),ly=p(),Fp=n("p"),dy=r(`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),cy=p(),Xr=n("p"),py=r("This model inherits from "),$d=n("a"),hy=r("TFPreTrainedModel"),my=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fy=p(),Yr=n("p"),uy=r("This model is also a "),Zr=n("a"),gy=r("tf.keras.Model"),_y=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),by=p(),T(us.$$.fragment),ky=p(),pt=n("div"),T(ei.$$.fragment),vy=p(),Uo=n("p"),Ty=r("The "),Fd=n("a"),yy=r("TFRobertaForSequenceClassification"),wy=r(" forward method, overrides the "),xp=n("code"),$y=r("__call__"),Fy=r(" special method."),xy=p(),T(gs.$$.fragment),Ry=p(),T(_s.$$.fragment),My=p(),T(bs.$$.fragment),vf=p(),Ho=n("h2"),ks=n("a"),Rp=n("span"),T(ti.$$.fragment),Ey=p(),Mp=n("span"),zy=r("TFRobertaForMultipleChoice"),Tf=p(),Ke=n("div"),T(oi.$$.fragment),Cy=p(),Ep=n("p"),qy=r(`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),jy=p(),ni=n("p"),Py=r("This model inherits from "),xd=n("a"),Ly=r("TFPreTrainedModel"),Ay=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Oy=p(),si=n("p"),Ny=r("This model is also a "),ai=n("a"),Iy=r("tf.keras.Model"),Dy=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sy=p(),T(vs.$$.fragment),Wy=p(),Et=n("div"),T(ri.$$.fragment),By=p(),Qo=n("p"),Uy=r("The "),Rd=n("a"),Hy=r("TFRobertaForMultipleChoice"),Qy=r(" forward method, overrides the "),zp=n("code"),Vy=r("__call__"),Jy=r(" special method."),Ky=p(),T(Ts.$$.fragment),Gy=p(),T(ys.$$.fragment),yf=p(),Vo=n("h2"),ws=n("a"),Cp=n("span"),T(ii.$$.fragment),Xy=p(),qp=n("span"),Yy=r("TFRobertaForTokenClassification"),wf=p(),Ge=n("div"),T(li.$$.fragment),Zy=p(),jp=n("p"),ew=r(`RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),tw=p(),di=n("p"),ow=r("This model inherits from "),Md=n("a"),nw=r("TFPreTrainedModel"),sw=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),aw=p(),ci=n("p"),rw=r("This model is also a "),pi=n("a"),iw=r("tf.keras.Model"),lw=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dw=p(),T($s.$$.fragment),cw=p(),ht=n("div"),T(hi.$$.fragment),pw=p(),Jo=n("p"),hw=r("The "),Ed=n("a"),mw=r("TFRobertaForTokenClassification"),fw=r(" forward method, overrides the "),Pp=n("code"),uw=r("__call__"),gw=r(" special method."),_w=p(),T(Fs.$$.fragment),bw=p(),T(xs.$$.fragment),kw=p(),T(Rs.$$.fragment),$f=p(),Ko=n("h2"),Ms=n("a"),Lp=n("span"),T(mi.$$.fragment),vw=p(),Ap=n("span"),Tw=r("TFRobertaForQuestionAnswering"),Ff=p(),Xe=n("div"),T(fi.$$.fragment),yw=p(),Go=n("p"),ww=r(`RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Op=n("code"),$w=r("span start logits"),Fw=r(" and "),Np=n("code"),xw=r("span end logits"),Rw=r(")."),Mw=p(),ui=n("p"),Ew=r("This model inherits from "),zd=n("a"),zw=r("TFPreTrainedModel"),Cw=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qw=p(),gi=n("p"),jw=r("This model is also a "),_i=n("a"),Pw=r("tf.keras.Model"),Lw=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Aw=p(),T(Es.$$.fragment),Ow=p(),mt=n("div"),T(bi.$$.fragment),Nw=p(),Xo=n("p"),Iw=r("The "),Cd=n("a"),Dw=r("TFRobertaForQuestionAnswering"),Sw=r(" forward method, overrides the "),Ip=n("code"),Ww=r("__call__"),Bw=r(" special method."),Uw=p(),T(zs.$$.fragment),Hw=p(),T(Cs.$$.fragment),Qw=p(),T(qs.$$.fragment),xf=p(),Yo=n("h2"),js=n("a"),Dp=n("span"),T(ki.$$.fragment),Vw=p(),Sp=n("span"),Jw=r("FlaxRobertaModel"),Rf=p(),Oe=n("div"),T(vi.$$.fragment),Kw=p(),Wp=n("p"),Gw=r("The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),Xw=p(),Ti=n("p"),Yw=r("This model inherits from "),qd=n("a"),Zw=r("FlaxPreTrainedModel"),e1=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),t1=p(),yi=n("p"),o1=r("This model is also a Flax Linen "),wi=n("a"),n1=r("flax.linen.Module"),s1=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),a1=p(),Bp=n("p"),r1=r("Finally, this model supports inherent JAX features such as:"),i1=p(),Ut=n("ul"),Up=n("li"),$i=n("a"),l1=r("Just-In-Time (JIT) compilation"),d1=p(),Hp=n("li"),Fi=n("a"),c1=r("Automatic Differentiation"),p1=p(),Qp=n("li"),xi=n("a"),h1=r("Vectorization"),m1=p(),Vp=n("li"),Ri=n("a"),f1=r("Parallelization"),u1=p(),zt=n("div"),T(Mi.$$.fragment),g1=p(),Zo=n("p"),_1=r("The "),Jp=n("code"),b1=r("FlaxRobertaPreTrainedModel"),k1=r(" forward method, overrides the "),Kp=n("code"),v1=r("__call__"),T1=r(" special method."),y1=p(),T(Ps.$$.fragment),w1=p(),T(Ls.$$.fragment),Mf=p(),en=n("h2"),As=n("a"),Gp=n("span"),T(Ei.$$.fragment),$1=p(),Xp=n("span"),F1=r("FlaxRobertaForCausalLM"),Ef=p(),Ne=n("div"),T(zi.$$.fragment),x1=p(),Yp=n("p"),R1=r(`Roberta Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),M1=p(),Ci=n("p"),E1=r("This model inherits from "),jd=n("a"),z1=r("FlaxPreTrainedModel"),C1=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),q1=p(),qi=n("p"),j1=r("This model is also a Flax Linen "),ji=n("a"),P1=r("flax.linen.Module"),L1=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),A1=p(),Zp=n("p"),O1=r("Finally, this model supports inherent JAX features such as:"),N1=p(),Ht=n("ul"),eh=n("li"),Pi=n("a"),I1=r("Just-In-Time (JIT) compilation"),D1=p(),th=n("li"),Li=n("a"),S1=r("Automatic Differentiation"),W1=p(),oh=n("li"),Ai=n("a"),B1=r("Vectorization"),U1=p(),nh=n("li"),Oi=n("a"),H1=r("Parallelization"),Q1=p(),Ct=n("div"),T(Ni.$$.fragment),V1=p(),tn=n("p"),J1=r("The "),sh=n("code"),K1=r("FlaxRobertaPreTrainedModel"),G1=r(" forward method, overrides the "),ah=n("code"),X1=r("__call__"),Y1=r(" special method."),Z1=p(),T(Os.$$.fragment),e$=p(),T(Ns.$$.fragment),zf=p(),on=n("h2"),Is=n("a"),rh=n("span"),T(Ii.$$.fragment),t$=p(),ih=n("span"),o$=r("FlaxRobertaForMaskedLM"),Cf=p(),Ie=n("div"),T(Di.$$.fragment),n$=p(),Si=n("p"),s$=r("RoBERTa Model with a "),lh=n("code"),a$=r("language modeling"),r$=r(" head on top."),i$=p(),Wi=n("p"),l$=r("This model inherits from "),Pd=n("a"),d$=r("FlaxPreTrainedModel"),c$=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),p$=p(),Bi=n("p"),h$=r("This model is also a Flax Linen "),Ui=n("a"),m$=r("flax.linen.Module"),f$=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),u$=p(),dh=n("p"),g$=r("Finally, this model supports inherent JAX features such as:"),_$=p(),Qt=n("ul"),ch=n("li"),Hi=n("a"),b$=r("Just-In-Time (JIT) compilation"),k$=p(),ph=n("li"),Qi=n("a"),v$=r("Automatic Differentiation"),T$=p(),hh=n("li"),Vi=n("a"),y$=r("Vectorization"),w$=p(),mh=n("li"),Ji=n("a"),$$=r("Parallelization"),F$=p(),qt=n("div"),T(Ki.$$.fragment),x$=p(),nn=n("p"),R$=r("The "),fh=n("code"),M$=r("FlaxRobertaPreTrainedModel"),E$=r(" forward method, overrides the "),uh=n("code"),z$=r("__call__"),C$=r(" special method."),q$=p(),T(Ds.$$.fragment),j$=p(),T(Ss.$$.fragment),qf=p(),sn=n("h2"),Ws=n("a"),gh=n("span"),T(Gi.$$.fragment),P$=p(),_h=n("span"),L$=r("FlaxRobertaForSequenceClassification"),jf=p(),De=n("div"),T(Xi.$$.fragment),A$=p(),bh=n("p"),O$=r(`Roberta Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),N$=p(),Yi=n("p"),I$=r("This model inherits from "),Ld=n("a"),D$=r("FlaxPreTrainedModel"),S$=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),W$=p(),Zi=n("p"),B$=r("This model is also a Flax Linen "),el=n("a"),U$=r("flax.linen.Module"),H$=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Q$=p(),kh=n("p"),V$=r("Finally, this model supports inherent JAX features such as:"),J$=p(),Vt=n("ul"),vh=n("li"),tl=n("a"),K$=r("Just-In-Time (JIT) compilation"),G$=p(),Th=n("li"),ol=n("a"),X$=r("Automatic Differentiation"),Y$=p(),yh=n("li"),nl=n("a"),Z$=r("Vectorization"),e2=p(),wh=n("li"),sl=n("a"),t2=r("Parallelization"),o2=p(),jt=n("div"),T(al.$$.fragment),n2=p(),an=n("p"),s2=r("The "),$h=n("code"),a2=r("FlaxRobertaPreTrainedModel"),r2=r(" forward method, overrides the "),Fh=n("code"),i2=r("__call__"),l2=r(" special method."),d2=p(),T(Bs.$$.fragment),c2=p(),T(Us.$$.fragment),Pf=p(),rn=n("h2"),Hs=n("a"),xh=n("span"),T(rl.$$.fragment),p2=p(),Rh=n("span"),h2=r("FlaxRobertaForMultipleChoice"),Lf=p(),Se=n("div"),T(il.$$.fragment),m2=p(),Mh=n("p"),f2=r(`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),u2=p(),ll=n("p"),g2=r("This model inherits from "),Ad=n("a"),_2=r("FlaxPreTrainedModel"),b2=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),k2=p(),dl=n("p"),v2=r("This model is also a Flax Linen "),cl=n("a"),T2=r("flax.linen.Module"),y2=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),w2=p(),Eh=n("p"),$2=r("Finally, this model supports inherent JAX features such as:"),F2=p(),Jt=n("ul"),zh=n("li"),pl=n("a"),x2=r("Just-In-Time (JIT) compilation"),R2=p(),Ch=n("li"),hl=n("a"),M2=r("Automatic Differentiation"),E2=p(),qh=n("li"),ml=n("a"),z2=r("Vectorization"),C2=p(),jh=n("li"),fl=n("a"),q2=r("Parallelization"),j2=p(),Pt=n("div"),T(ul.$$.fragment),P2=p(),ln=n("p"),L2=r("The "),Ph=n("code"),A2=r("FlaxRobertaPreTrainedModel"),O2=r(" forward method, overrides the "),Lh=n("code"),N2=r("__call__"),I2=r(" special method."),D2=p(),T(Qs.$$.fragment),S2=p(),T(Vs.$$.fragment),Af=p(),dn=n("h2"),Js=n("a"),Ah=n("span"),T(gl.$$.fragment),W2=p(),Oh=n("span"),B2=r("FlaxRobertaForTokenClassification"),Of=p(),We=n("div"),T(_l.$$.fragment),U2=p(),Nh=n("p"),H2=r(`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Q2=p(),bl=n("p"),V2=r("This model inherits from "),Od=n("a"),J2=r("FlaxPreTrainedModel"),K2=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),G2=p(),kl=n("p"),X2=r("This model is also a Flax Linen "),vl=n("a"),Y2=r("flax.linen.Module"),Z2=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),eF=p(),Ih=n("p"),tF=r("Finally, this model supports inherent JAX features such as:"),oF=p(),Kt=n("ul"),Dh=n("li"),Tl=n("a"),nF=r("Just-In-Time (JIT) compilation"),sF=p(),Sh=n("li"),yl=n("a"),aF=r("Automatic Differentiation"),rF=p(),Wh=n("li"),wl=n("a"),iF=r("Vectorization"),lF=p(),Bh=n("li"),$l=n("a"),dF=r("Parallelization"),cF=p(),Lt=n("div"),T(Fl.$$.fragment),pF=p(),cn=n("p"),hF=r("The "),Uh=n("code"),mF=r("FlaxRobertaPreTrainedModel"),fF=r(" forward method, overrides the "),Hh=n("code"),uF=r("__call__"),gF=r(" special method."),_F=p(),T(Ks.$$.fragment),bF=p(),T(Gs.$$.fragment),Nf=p(),pn=n("h2"),Xs=n("a"),Qh=n("span"),T(xl.$$.fragment),kF=p(),Vh=n("span"),vF=r("FlaxRobertaForQuestionAnswering"),If=p(),Be=n("div"),T(Rl.$$.fragment),TF=p(),hn=n("p"),yF=r(`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Jh=n("code"),wF=r("span start logits"),$F=r(" and "),Kh=n("code"),FF=r("span end logits"),xF=r(")."),RF=p(),Ml=n("p"),MF=r("This model inherits from "),Nd=n("a"),EF=r("FlaxPreTrainedModel"),zF=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),CF=p(),El=n("p"),qF=r("This model is also a Flax Linen "),zl=n("a"),jF=r("flax.linen.Module"),PF=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),LF=p(),Gh=n("p"),AF=r("Finally, this model supports inherent JAX features such as:"),OF=p(),Gt=n("ul"),Xh=n("li"),Cl=n("a"),NF=r("Just-In-Time (JIT) compilation"),IF=p(),Yh=n("li"),ql=n("a"),DF=r("Automatic Differentiation"),SF=p(),Zh=n("li"),jl=n("a"),WF=r("Vectorization"),BF=p(),em=n("li"),Pl=n("a"),UF=r("Parallelization"),HF=p(),At=n("div"),T(Ll.$$.fragment),QF=p(),mn=n("p"),VF=r("The "),tm=n("code"),JF=r("FlaxRobertaPreTrainedModel"),KF=r(" forward method, overrides the "),om=n("code"),GF=r("__call__"),XF=r(" special method."),YF=p(),T(Ys.$$.fragment),ZF=p(),T(Zs.$$.fragment),this.h()},l(o){const b=NM('[data-svelte="svelte-1phssyn"]',document.head);d=s(b,"META",{name:!0,content:!0}),b.forEach(t),g=h(o),c=s(o,"H1",{class:!0});var Al=a(c);m=s(Al,"A",{id:!0,class:!0,href:!0});var nm=a(m);_=s(nm,"SPAN",{});var sm=a(_);y(l.$$.fragment,sm),sm.forEach(t),nm.forEach(t),f=h(Al),M=s(Al,"SPAN",{});var am=a(M);te=i(am,"RoBERTa"),am.forEach(t),Al.forEach(t),I=h(o),z=s(o,"H2",{class:!0});var Ol=a(z);X=s(Ol,"A",{id:!0,class:!0,href:!0});var rm=a(X);D=s(rm,"SPAN",{});var im=a(D);y(se.$$.fragment,im),im.forEach(t),rm.forEach(t),be=h(Ol),S=s(Ol,"SPAN",{});var lm=a(S);ke=i(lm,"Overview"),lm.forEach(t),Ol.forEach(t),ue=h(o),K=s(o,"P",{});var Nl=a(K);A=i(Nl,"The RoBERTa model was proposed in "),ae=s(Nl,"A",{href:!0,rel:!0});var dm=a(ae);oe=i(dm,"RoBERTa: A Robustly Optimized BERT Pretraining Approach"),dm.forEach(t),C=i(Nl,` by Yinhan Liu, Myle Ott, Naman Goyal, Jingfei Du, Mandar Joshi, Danqi Chen, Omer
Levy, Mike Lewis, Luke Zettlemoyer, Veselin Stoyanov. It is based on Google\u2019s BERT model released in 2018.`),Nl.forEach(t),j=h(o),ie=s(o,"P",{});var cm=a(ie);U=i(cm,`It builds on BERT and modifies key hyperparameters, removing the next-sentence pretraining objective and training with
much larger mini-batches and learning rates.`),cm.forEach(t),ge=h(o),le=s(o,"P",{});var pm=a(le);H=i(pm,"The abstract from the paper is the following:"),pm.forEach(t),_e=h(o),de=s(o,"P",{});var hm=a(de);q=s(hm,"EM",{});var mm=a(q);ve=i(mm,`Language model pretraining has led to significant performance gains but careful comparison between different
approaches is challenging. Training is computationally expensive, often done on private datasets of different sizes,
and, as we will show, hyperparameter choices have significant impact on the final results. We present a replication
study of BERT pretraining (Devlin et al., 2019) that carefully measures the impact of many key hyperparameters and
training data size. We find that BERT was significantly undertrained, and can match or exceed the performance of every
model published after it. Our best model achieves state-of-the-art results on GLUE, RACE and SQuAD. These results
highlight the importance of previously overlooked design choices, and raise questions about the source of recently
reported improvements. We release our models and code.`),mm.forEach(t),hm.forEach(t),W=h(o),ce=s(o,"P",{});var fm=a(ce);Te=i(fm,"Tips:"),fm.forEach(t),B=h(o),G=s(o,"UL",{});var Xt=a(G);re=s(Xt,"LI",{});var Il=a(re);O=i(Il,"This implementation is the same as "),pe=s(Il,"A",{href:!0});var um=a(pe);Q=i(um,"BertModel"),um.forEach(t),ye=i(Il,` with a tiny embeddings tweak as well as a setup
for Roberta pretrained models.`),Il.forEach(t),v=h(Xt),E=s(Xt,"LI",{});var gm=a(E);ne=i(gm,`RoBERTa has the same architecture as BERT, but uses a byte-level BPE as a tokenizer (same as GPT-2) and uses a
different pretraining scheme.`),gm.forEach(t),Ee=h(Xt),me=s(Xt,"LI",{});var Yt=a(me);N=i(Yt,"RoBERTa doesn\u2019t have "),Re=s(Yt,"CODE",{});var _m=a(Re);ze=i(_m,"token_type_ids"),_m.forEach(t),Ce=i(Yt,`, you don\u2019t need to indicate which token belongs to which segment. Just
separate your segments with the separation token `),L=s(Yt,"CODE",{});var bm=a(L);V=i(bm,"tokenizer.sep_token"),bm.forEach(t),qe=i(Yt," (or "),Me=s(Yt,"CODE",{});var km=a(Me);J=i(km,"</s>"),km.forEach(t),je=i(Yt,")"),Yt.forEach(t),Pe=h(Xt),he=s(Xt,"LI",{});var Id=a(he);xe=s(Id,"A",{href:!0});var vm=a(xe);ag=i(vm,"CamemBERT"),vm.forEach(t),rg=i(Id," is a wrapper around RoBERTa. Refer to this page for usage examples."),Id.forEach(t),Xt.forEach(t),Um=h(o),eo=s(o,"P",{});var fn=a(eo);ig=i(fn,"This model was contributed by "),va=s(fn,"A",{href:!0,rel:!0});var Tm=a(va);lg=i(Tm,"julien-c"),Tm.forEach(t),dg=i(fn,". The original code can be found "),Ta=s(fn,"A",{href:!0,rel:!0});var ym=a(Ta);cg=i(ym,"here"),ym.forEach(t),pg=i(fn,"."),fn.forEach(t),Hm=h(o),go=s(o,"H2",{class:!0});var Dl=a(go);bn=s(Dl,"A",{id:!0,class:!0,href:!0});var wm=a(bn);hc=s(wm,"SPAN",{});var $m=a(hc);y(ya.$$.fragment,$m),$m.forEach(t),wm.forEach(t),hg=h(Dl),mc=s(Dl,"SPAN",{});var Fm=a(mc);mg=i(Fm,"RobertaConfig"),Fm.forEach(t),Dl.forEach(t),Qm=h(o),et=s(o,"DIV",{class:!0});var wt=a(et);y(wa.$$.fragment,wt),fg=h(wt),Bt=s(wt,"P",{});var Zt=a(Bt);ug=i(Zt,"This is the configuration class to store the configuration of a "),Vl=s(Zt,"A",{href:!0});var xm=a(Vl);gg=i(xm,"RobertaModel"),xm.forEach(t),_g=i(Zt," or a "),Jl=s(Zt,"A",{href:!0});var Rm=a(Jl);bg=i(Rm,"TFRobertaModel"),Rm.forEach(t),kg=i(Zt,`. It is
used to instantiate a RoBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the RoBERTa
`),$a=s(Zt,"A",{href:!0,rel:!0});var Mm=a($a);vg=i(Mm,"roberta-base"),Mm.forEach(t),Tg=i(Zt," architecture."),Zt.forEach(t),yg=h(wt),_o=s(wt,"P",{});var un=a(_o);wg=i(un,"Configuration objects inherit from "),Kl=s(un,"A",{href:!0});var Em=a(Kl);$g=i(Em,"PretrainedConfig"),Em.forEach(t),Fg=i(un,` and can be used to control the model outputs. Read the
documentation from `),Gl=s(un,"A",{href:!0});var zm=a(Gl);xg=i(zm,"PretrainedConfig"),zm.forEach(t),Rg=i(un," for more information."),un.forEach(t),Mg=h(wt),bo=s(wt,"P",{});var gn=a(bo);Eg=i(gn,"The "),Xl=s(gn,"A",{href:!0});var Cm=a(Xl);zg=i(Cm,"RobertaConfig"),Cm.forEach(t),Cg=i(gn," class directly inherits "),Yl=s(gn,"A",{href:!0});var qm=a(Yl);qg=i(qm,"BertConfig"),qm.forEach(t),jg=i(gn,`. It reuses the same defaults. Please check the parent
class for more information.`),gn.forEach(t),Pg=h(wt),y(kn.$$.fragment,wt),wt.forEach(t),Vm=h(o),ko=s(o,"H2",{class:!0});var Sl=a(ko);vn=s(Sl,"A",{id:!0,class:!0,href:!0});var jm=a(vn);fc=s(jm,"SPAN",{});var Pm=a(fc);y(Fa.$$.fragment,Pm),Pm.forEach(t),jm.forEach(t),Lg=h(Sl),uc=s(Sl,"SPAN",{});var Lm=a(uc);Ag=i(Lm,"RobertaTokenizer"),Lm.forEach(t),Sl.forEach(t),Jm=h(o),we=s(o,"DIV",{class:!0});var Fe=a(we);y(xa.$$.fragment,Fe),Og=h(Fe),gc=s(Fe,"P",{});var Am=a(gc);Ng=i(Am,"Constructs a RoBERTa tokenizer, derived from the GPT-2 tokenizer, using byte-level Byte-Pair-Encoding."),Am.forEach(t),Ig=h(Fe),_c=s(Fe,"P",{});var Om=a(_c);Dg=i(Om,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),Om.forEach(t),Sg=h(Fe),y(Tn.$$.fragment,Fe),Wg=h(Fe),Ra=s(Fe,"P",{});var Wl=a(Ra);Bg=i(Wl,"You can get around that behavior by passing "),bc=s(Wl,"CODE",{});var Nm=a(bc);Ug=i(Nm,"add_prefix_space=True"),Nm.forEach(t),Hg=i(Wl,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Wl.forEach(t),Qg=h(Fe),y(yn.$$.fragment,Fe),Vg=h(Fe),Ma=s(Fe,"P",{});var Bl=a(Ma);Jg=i(Bl,"This tokenizer inherits from "),Zl=s(Bl,"A",{href:!0});var Im=a(Zl);Kg=i(Im,"PreTrainedTokenizer"),Im.forEach(t),Gg=i(Bl,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Bl.forEach(t),Xg=h(Fe),to=s(Fe,"DIV",{class:!0});var _n=a(to);y(Ea.$$.fragment,_n),Yg=h(_n),kc=s(_n,"P",{});var Dm=a(kc);Zg=i(Dm,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RoBERTa sequence has the following format:`),Dm.forEach(t),e_=h(_n),za=s(_n,"UL",{});var Ul=a(za);ed=s(Ul,"LI",{});var Dd=a(ed);t_=i(Dd,"single sequence: "),vc=s(Dd,"CODE",{});var Sm=a(vc);o_=i(Sm,"<s> X </s>"),Sm.forEach(t),Dd.forEach(t),n_=h(Ul),td=s(Ul,"LI",{});var Sd=a(td);s_=i(Sd,"pair of sequences: "),Tc=s(Sd,"CODE",{});var Wm=a(Tc);a_=i(Wm,"<s> A </s></s> B </s>"),Wm.forEach(t),Sd.forEach(t),Ul.forEach(t),_n.forEach(t),r_=h(Fe),wn=s(Fe,"DIV",{class:!0});var Hl=a(wn);y(Ca.$$.fragment,Hl),i_=h(Hl),qa=s(Hl,"P",{});var Ql=a(qa);l_=i(Ql,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),yc=s(Ql,"CODE",{});var e0=a(yc);d_=i(e0,"prepare_for_model"),e0.forEach(t),c_=i(Ql," method."),Ql.forEach(t),Hl.forEach(t),p_=h(Fe),$n=s(Fe,"DIV",{class:!0});var Sf=a($n);y(ja.$$.fragment,Sf),h_=h(Sf),wc=s(Sf,"P",{});var t0=a(wc);m_=i(t0,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. RoBERTa does not
make use of token type ids, therefore a list of zeros is returned.`),t0.forEach(t),Sf.forEach(t),f_=h(Fe),od=s(Fe,"DIV",{class:!0});var o0=a(od);y(Pa.$$.fragment,o0),o0.forEach(t),Fe.forEach(t),Km=h(o),vo=s(o,"H2",{class:!0});var Wf=a(vo);Fn=s(Wf,"A",{id:!0,class:!0,href:!0});var n0=a(Fn);$c=s(n0,"SPAN",{});var s0=a($c);y(La.$$.fragment,s0),s0.forEach(t),n0.forEach(t),u_=h(Wf),Fc=s(Wf,"SPAN",{});var a0=a(Fc);g_=i(a0,"RobertaTokenizerFast"),a0.forEach(t),Wf.forEach(t),Gm=h(o),Le=s(o,"DIV",{class:!0});var Ye=a(Le);y(Aa.$$.fragment,Ye),__=h(Ye),Oa=s(Ye,"P",{});var Bf=a(Oa);b_=i(Bf,"Construct a \u201Cfast\u201D RoBERTa tokenizer (backed by HuggingFace\u2019s "),xc=s(Bf,"EM",{});var r0=a(xc);k_=i(r0,"tokenizers"),r0.forEach(t),v_=i(Bf,` library), derived from the GPT-2
tokenizer, using byte-level Byte-Pair-Encoding.`),Bf.forEach(t),T_=h(Ye),Rc=s(Ye,"P",{});var i0=a(Rc);y_=i(i0,"This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will"),i0.forEach(t),w_=h(Ye),y(xn.$$.fragment,Ye),$_=h(Ye),Na=s(Ye,"P",{});var Uf=a(Na);F_=i(Uf,"You can get around that behavior by passing "),Mc=s(Uf,"CODE",{});var l0=a(Mc);x_=i(l0,"add_prefix_space=True"),l0.forEach(t),R_=i(Uf,` when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`),Uf.forEach(t),M_=h(Ye),y(Rn.$$.fragment,Ye),E_=h(Ye),Ia=s(Ye,"P",{});var Hf=a(Ia);z_=i(Hf,"This tokenizer inherits from "),nd=s(Hf,"A",{href:!0});var d0=a(nd);C_=i(d0,"PreTrainedTokenizerFast"),d0.forEach(t),q_=i(Hf,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Hf.forEach(t),j_=h(Ye),sd=s(Ye,"DIV",{class:!0});var c0=a(sd);y(Da.$$.fragment,c0),c0.forEach(t),Ye.forEach(t),Xm=h(o),To=s(o,"H2",{class:!0});var Qf=a(To);Mn=s(Qf,"A",{id:!0,class:!0,href:!0});var p0=a(Mn);Ec=s(p0,"SPAN",{});var h0=a(Ec);y(Sa.$$.fragment,h0),h0.forEach(t),p0.forEach(t),P_=h(Qf),zc=s(Qf,"SPAN",{});var m0=a(zc);L_=i(m0,"RobertaModel"),m0.forEach(t),Qf.forEach(t),Ym=h(o),Ae=s(o,"DIV",{class:!0});var Ze=a(Ae);y(Wa.$$.fragment,Ze),A_=h(Ze),Cc=s(Ze,"P",{});var f0=a(Cc);O_=i(f0,"The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),f0.forEach(t),N_=h(Ze),Ba=s(Ze,"P",{});var Vf=a(Ba);I_=i(Vf,"This model inherits from "),ad=s(Vf,"A",{href:!0});var u0=a(ad);D_=i(u0,"PreTrainedModel"),u0.forEach(t),S_=i(Vf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vf.forEach(t),W_=h(Ze),Ua=s(Ze,"P",{});var Jf=a(Ua);B_=i(Jf,"This model is also a PyTorch "),Ha=s(Jf,"A",{href:!0,rel:!0});var g0=a(Ha);U_=i(g0,"torch.nn.Module"),g0.forEach(t),H_=i(Jf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jf.forEach(t),Q_=h(Ze),Qa=s(Ze,"P",{});var Kf=a(Qa);V_=i(Kf,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),qc=s(Kf,"EM",{});var _0=a(qc);J_=i(_0,`Attention is
all you need`),_0.forEach(t),K_=i(Kf,`_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`),Kf.forEach(t),G_=h(Ze),He=s(Ze,"P",{});var ft=a(He);X_=i(ft,"To behave as an decoder the model needs to be initialized with the "),jc=s(ft,"CODE",{});var b0=a(jc);Y_=i(b0,"is_decoder"),b0.forEach(t),Z_=i(ft,` argument of the configuration set
to `),Pc=s(ft,"CODE",{});var k0=a(Pc);eb=i(k0,"True"),k0.forEach(t),tb=i(ft,". To be used in a Seq2Seq model, the model needs to initialized with both "),Lc=s(ft,"CODE",{});var v0=a(Lc);ob=i(v0,"is_decoder"),v0.forEach(t),nb=i(ft,` argument and
`),Ac=s(ft,"CODE",{});var T0=a(Ac);sb=i(T0,"add_cross_attention"),T0.forEach(t),ab=i(ft," set to "),Oc=s(ft,"CODE",{});var y0=a(Oc);rb=i(y0,"True"),y0.forEach(t),ib=i(ft,"; an "),Nc=s(ft,"CODE",{});var w0=a(Nc);lb=i(w0,"encoder_hidden_states"),w0.forEach(t),db=i(ft," is then expected as an input to the forward pass."),ft.forEach(t),cb=h(Ze),En=s(Ze,"P",{});var Bm=a(En);pb=i(Bm,".. _"),Ic=s(Bm,"EM",{});var $0=a(Ic);hb=i($0,"Attention is all you need"),$0.forEach(t),mb=i(Bm,": "),Va=s(Bm,"A",{href:!0,rel:!0});var F0=a(Va);fb=i(F0,"https://arxiv.org/abs/1706.03762"),F0.forEach(t),Bm.forEach(t),ub=h(Ze),$t=s(Ze,"DIV",{class:!0});var ea=a($t);y(Ja.$$.fragment,ea),gb=h(ea),yo=s(ea,"P",{});var Wd=a(yo);_b=i(Wd,"The "),rd=s(Wd,"A",{href:!0});var x0=a(rd);bb=i(x0,"RobertaModel"),x0.forEach(t),kb=i(Wd," forward method, overrides the "),Dc=s(Wd,"CODE",{});var R0=a(Dc);vb=i(R0,"__call__"),R0.forEach(t),Tb=i(Wd," special method."),Wd.forEach(t),yb=h(ea),y(zn.$$.fragment,ea),wb=h(ea),y(Cn.$$.fragment,ea),ea.forEach(t),Ze.forEach(t),Zm=h(o),wo=s(o,"H2",{class:!0});var Gf=a(wo);qn=s(Gf,"A",{id:!0,class:!0,href:!0});var M0=a(qn);Sc=s(M0,"SPAN",{});var E0=a(Sc);y(Ka.$$.fragment,E0),E0.forEach(t),M0.forEach(t),$b=h(Gf),Wc=s(Gf,"SPAN",{});var z0=a(Wc);Fb=i(z0,"RobertaForCausalLM"),z0.forEach(t),Gf.forEach(t),ef=h(o),tt=s(o,"DIV",{class:!0});var oo=a(tt);y(Ga.$$.fragment,oo),xb=h(oo),Xa=s(oo,"P",{});var Xf=a(Xa);Rb=i(Xf,"RoBERTa Model with a "),Bc=s(Xf,"CODE",{});var C0=a(Bc);Mb=i(C0,"language modeling"),C0.forEach(t),Eb=i(Xf," head on top for CLM fine-tuning."),Xf.forEach(t),zb=h(oo),Ya=s(oo,"P",{});var Yf=a(Ya);Cb=i(Yf,"This model inherits from "),id=s(Yf,"A",{href:!0});var q0=a(id);qb=i(q0,"PreTrainedModel"),q0.forEach(t),jb=i(Yf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yf.forEach(t),Pb=h(oo),Za=s(oo,"P",{});var Zf=a(Za);Lb=i(Zf,"This model is also a PyTorch "),er=s(Zf,"A",{href:!0,rel:!0});var j0=a(er);Ab=i(j0,"torch.nn.Module"),j0.forEach(t),Ob=i(Zf,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zf.forEach(t),Nb=h(oo),Ft=s(oo,"DIV",{class:!0});var ta=a(Ft);y(tr.$$.fragment,ta),Ib=h(ta),$o=s(ta,"P",{});var Bd=a($o);Db=i(Bd,"The "),ld=s(Bd,"A",{href:!0});var P0=a(ld);Sb=i(P0,"RobertaForCausalLM"),P0.forEach(t),Wb=i(Bd," forward method, overrides the "),Uc=s(Bd,"CODE",{});var L0=a(Uc);Bb=i(L0,"__call__"),L0.forEach(t),Ub=i(Bd," special method."),Bd.forEach(t),Hb=h(ta),y(jn.$$.fragment,ta),Qb=h(ta),y(Pn.$$.fragment,ta),ta.forEach(t),oo.forEach(t),tf=h(o),Fo=s(o,"H2",{class:!0});var eu=a(Fo);Ln=s(eu,"A",{id:!0,class:!0,href:!0});var A0=a(Ln);Hc=s(A0,"SPAN",{});var O0=a(Hc);y(or.$$.fragment,O0),O0.forEach(t),A0.forEach(t),Vb=h(eu),Qc=s(eu,"SPAN",{});var N0=a(Qc);Jb=i(N0,"RobertaForMaskedLM"),N0.forEach(t),eu.forEach(t),of=h(o),ot=s(o,"DIV",{class:!0});var no=a(ot);y(nr.$$.fragment,no),Kb=h(no),sr=s(no,"P",{});var tu=a(sr);Gb=i(tu,"RoBERTa Model with a "),Vc=s(tu,"CODE",{});var I0=a(Vc);Xb=i(I0,"language modeling"),I0.forEach(t),Yb=i(tu," head on top."),tu.forEach(t),Zb=h(no),ar=s(no,"P",{});var ou=a(ar);ek=i(ou,"This model inherits from "),dd=s(ou,"A",{href:!0});var D0=a(dd);tk=i(D0,"PreTrainedModel"),D0.forEach(t),ok=i(ou,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ou.forEach(t),nk=h(no),rr=s(no,"P",{});var nu=a(rr);sk=i(nu,"This model is also a PyTorch "),ir=s(nu,"A",{href:!0,rel:!0});var S0=a(ir);ak=i(S0,"torch.nn.Module"),S0.forEach(t),rk=i(nu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nu.forEach(t),ik=h(no),it=s(no,"DIV",{class:!0});var so=a(it);y(lr.$$.fragment,so),lk=h(so),xo=s(so,"P",{});var Ud=a(xo);dk=i(Ud,"The "),cd=s(Ud,"A",{href:!0});var W0=a(cd);ck=i(W0,"RobertaForMaskedLM"),W0.forEach(t),pk=i(Ud," forward method, overrides the "),Jc=s(Ud,"CODE",{});var B0=a(Jc);hk=i(B0,"__call__"),B0.forEach(t),mk=i(Ud," special method."),Ud.forEach(t),fk=h(so),y(An.$$.fragment,so),uk=h(so),y(On.$$.fragment,so),gk=h(so),y(Nn.$$.fragment,so),so.forEach(t),no.forEach(t),nf=h(o),Ro=s(o,"H2",{class:!0});var su=a(Ro);In=s(su,"A",{id:!0,class:!0,href:!0});var U0=a(In);Kc=s(U0,"SPAN",{});var H0=a(Kc);y(dr.$$.fragment,H0),H0.forEach(t),U0.forEach(t),_k=h(su),Gc=s(su,"SPAN",{});var Q0=a(Gc);bk=i(Q0,"RobertaForSequenceClassification"),Q0.forEach(t),su.forEach(t),sf=h(o),nt=s(o,"DIV",{class:!0});var ao=a(nt);y(cr.$$.fragment,ao),kk=h(ao),Xc=s(ao,"P",{});var V0=a(Xc);vk=i(V0,`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),V0.forEach(t),Tk=h(ao),pr=s(ao,"P",{});var au=a(pr);yk=i(au,"This model inherits from "),pd=s(au,"A",{href:!0});var J0=a(pd);wk=i(J0,"PreTrainedModel"),J0.forEach(t),$k=i(au,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),au.forEach(t),Fk=h(ao),hr=s(ao,"P",{});var ru=a(hr);xk=i(ru,"This model is also a PyTorch "),mr=s(ru,"A",{href:!0,rel:!0});var K0=a(mr);Rk=i(K0,"torch.nn.Module"),K0.forEach(t),Mk=i(ru,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ru.forEach(t),Ek=h(ao),Ue=s(ao,"DIV",{class:!0});var ut=a(Ue);y(fr.$$.fragment,ut),zk=h(ut),Mo=s(ut,"P",{});var Hd=a(Mo);Ck=i(Hd,"The "),hd=s(Hd,"A",{href:!0});var G0=a(hd);qk=i(G0,"RobertaForSequenceClassification"),G0.forEach(t),jk=i(Hd," forward method, overrides the "),Yc=s(Hd,"CODE",{});var X0=a(Yc);Pk=i(X0,"__call__"),X0.forEach(t),Lk=i(Hd," special method."),Hd.forEach(t),Ak=h(ut),y(Dn.$$.fragment,ut),Ok=h(ut),y(Sn.$$.fragment,ut),Nk=h(ut),y(Wn.$$.fragment,ut),Ik=h(ut),y(Bn.$$.fragment,ut),Dk=h(ut),y(Un.$$.fragment,ut),ut.forEach(t),ao.forEach(t),af=h(o),Eo=s(o,"H2",{class:!0});var iu=a(Eo);Hn=s(iu,"A",{id:!0,class:!0,href:!0});var Y0=a(Hn);Zc=s(Y0,"SPAN",{});var Z0=a(Zc);y(ur.$$.fragment,Z0),Z0.forEach(t),Y0.forEach(t),Sk=h(iu),ep=s(iu,"SPAN",{});var ex=a(ep);Wk=i(ex,"RobertaForMultipleChoice"),ex.forEach(t),iu.forEach(t),rf=h(o),st=s(o,"DIV",{class:!0});var ro=a(st);y(gr.$$.fragment,ro),Bk=h(ro),tp=s(ro,"P",{});var tx=a(tp);Uk=i(tx,`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),tx.forEach(t),Hk=h(ro),_r=s(ro,"P",{});var lu=a(_r);Qk=i(lu,"This model inherits from "),md=s(lu,"A",{href:!0});var ox=a(md);Vk=i(ox,"PreTrainedModel"),ox.forEach(t),Jk=i(lu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lu.forEach(t),Kk=h(ro),br=s(ro,"P",{});var du=a(br);Gk=i(du,"This model is also a PyTorch "),kr=s(du,"A",{href:!0,rel:!0});var nx=a(kr);Xk=i(nx,"torch.nn.Module"),nx.forEach(t),Yk=i(du,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),du.forEach(t),Zk=h(ro),xt=s(ro,"DIV",{class:!0});var oa=a(xt);y(vr.$$.fragment,oa),ev=h(oa),zo=s(oa,"P",{});var Qd=a(zo);tv=i(Qd,"The "),fd=s(Qd,"A",{href:!0});var sx=a(fd);ov=i(sx,"RobertaForMultipleChoice"),sx.forEach(t),nv=i(Qd," forward method, overrides the "),op=s(Qd,"CODE",{});var ax=a(op);sv=i(ax,"__call__"),ax.forEach(t),av=i(Qd," special method."),Qd.forEach(t),rv=h(oa),y(Qn.$$.fragment,oa),iv=h(oa),y(Vn.$$.fragment,oa),oa.forEach(t),ro.forEach(t),lf=h(o),Co=s(o,"H2",{class:!0});var cu=a(Co);Jn=s(cu,"A",{id:!0,class:!0,href:!0});var rx=a(Jn);np=s(rx,"SPAN",{});var ix=a(np);y(Tr.$$.fragment,ix),ix.forEach(t),rx.forEach(t),lv=h(cu),sp=s(cu,"SPAN",{});var lx=a(sp);dv=i(lx,"RobertaForTokenClassification"),lx.forEach(t),cu.forEach(t),df=h(o),at=s(o,"DIV",{class:!0});var io=a(at);y(yr.$$.fragment,io),cv=h(io),ap=s(io,"P",{});var dx=a(ap);pv=i(dx,`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),dx.forEach(t),hv=h(io),wr=s(io,"P",{});var pu=a(wr);mv=i(pu,"This model inherits from "),ud=s(pu,"A",{href:!0});var cx=a(ud);fv=i(cx,"PreTrainedModel"),cx.forEach(t),uv=i(pu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pu.forEach(t),gv=h(io),$r=s(io,"P",{});var hu=a($r);_v=i(hu,"This model is also a PyTorch "),Fr=s(hu,"A",{href:!0,rel:!0});var px=a(Fr);bv=i(px,"torch.nn.Module"),px.forEach(t),kv=i(hu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hu.forEach(t),vv=h(io),lt=s(io,"DIV",{class:!0});var lo=a(lt);y(xr.$$.fragment,lo),Tv=h(lo),qo=s(lo,"P",{});var Vd=a(qo);yv=i(Vd,"The "),gd=s(Vd,"A",{href:!0});var hx=a(gd);wv=i(hx,"RobertaForTokenClassification"),hx.forEach(t),$v=i(Vd," forward method, overrides the "),rp=s(Vd,"CODE",{});var mx=a(rp);Fv=i(mx,"__call__"),mx.forEach(t),xv=i(Vd," special method."),Vd.forEach(t),Rv=h(lo),y(Kn.$$.fragment,lo),Mv=h(lo),y(Gn.$$.fragment,lo),Ev=h(lo),y(Xn.$$.fragment,lo),lo.forEach(t),io.forEach(t),cf=h(o),jo=s(o,"H2",{class:!0});var mu=a(jo);Yn=s(mu,"A",{id:!0,class:!0,href:!0});var fx=a(Yn);ip=s(fx,"SPAN",{});var ux=a(ip);y(Rr.$$.fragment,ux),ux.forEach(t),fx.forEach(t),zv=h(mu),lp=s(mu,"SPAN",{});var gx=a(lp);Cv=i(gx,"RobertaForQuestionAnswering"),gx.forEach(t),mu.forEach(t),pf=h(o),rt=s(o,"DIV",{class:!0});var co=a(rt);y(Mr.$$.fragment,co),qv=h(co),Po=s(co,"P",{});var Jd=a(Po);jv=i(Jd,`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),dp=s(Jd,"CODE",{});var _x=a(dp);Pv=i(_x,"span start logits"),_x.forEach(t),Lv=i(Jd," and "),cp=s(Jd,"CODE",{});var bx=a(cp);Av=i(bx,"span end logits"),bx.forEach(t),Ov=i(Jd,")."),Jd.forEach(t),Nv=h(co),Er=s(co,"P",{});var fu=a(Er);Iv=i(fu,"This model inherits from "),_d=s(fu,"A",{href:!0});var kx=a(_d);Dv=i(kx,"PreTrainedModel"),kx.forEach(t),Sv=i(fu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fu.forEach(t),Wv=h(co),zr=s(co,"P",{});var uu=a(zr);Bv=i(uu,"This model is also a PyTorch "),Cr=s(uu,"A",{href:!0,rel:!0});var vx=a(Cr);Uv=i(vx,"torch.nn.Module"),vx.forEach(t),Hv=i(uu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),uu.forEach(t),Qv=h(co),dt=s(co,"DIV",{class:!0});var po=a(dt);y(qr.$$.fragment,po),Vv=h(po),Lo=s(po,"P",{});var Kd=a(Lo);Jv=i(Kd,"The "),bd=s(Kd,"A",{href:!0});var Tx=a(bd);Kv=i(Tx,"RobertaForQuestionAnswering"),Tx.forEach(t),Gv=i(Kd," forward method, overrides the "),pp=s(Kd,"CODE",{});var yx=a(pp);Xv=i(yx,"__call__"),yx.forEach(t),Yv=i(Kd," special method."),Kd.forEach(t),Zv=h(po),y(Zn.$$.fragment,po),eT=h(po),y(es.$$.fragment,po),tT=h(po),y(ts.$$.fragment,po),po.forEach(t),co.forEach(t),hf=h(o),Ao=s(o,"H2",{class:!0});var gu=a(Ao);os=s(gu,"A",{id:!0,class:!0,href:!0});var wx=a(os);hp=s(wx,"SPAN",{});var $x=a(hp);y(jr.$$.fragment,$x),$x.forEach(t),wx.forEach(t),oT=h(gu),mp=s(gu,"SPAN",{});var Fx=a(mp);nT=i(Fx,"TFRobertaModel"),Fx.forEach(t),gu.forEach(t),mf=h(o),Qe=s(o,"DIV",{class:!0});var Ot=a(Qe);y(Pr.$$.fragment,Ot),sT=h(Ot),fp=s(Ot,"P",{});var xx=a(fp);aT=i(xx,"The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),xx.forEach(t),rT=h(Ot),Lr=s(Ot,"P",{});var _u=a(Lr);iT=i(_u,"This model inherits from "),kd=s(_u,"A",{href:!0});var Rx=a(kd);lT=i(Rx,"TFPreTrainedModel"),Rx.forEach(t),dT=i(_u,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_u.forEach(t),cT=h(Ot),Ar=s(Ot,"P",{});var bu=a(Ar);pT=i(bu,"This model is also a "),Or=s(bu,"A",{href:!0,rel:!0});var Mx=a(Or);hT=i(Mx,"tf.keras.Model"),Mx.forEach(t),mT=i(bu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bu.forEach(t),fT=h(Ot),y(ns.$$.fragment,Ot),uT=h(Ot),Rt=s(Ot,"DIV",{class:!0});var na=a(Rt);y(Nr.$$.fragment,na),gT=h(na),Oo=s(na,"P",{});var Gd=a(Oo);_T=i(Gd,"The "),vd=s(Gd,"A",{href:!0});var Ex=a(vd);bT=i(Ex,"TFRobertaModel"),Ex.forEach(t),kT=i(Gd," forward method, overrides the "),up=s(Gd,"CODE",{});var zx=a(up);vT=i(zx,"__call__"),zx.forEach(t),TT=i(Gd," special method."),Gd.forEach(t),yT=h(na),y(ss.$$.fragment,na),wT=h(na),y(as.$$.fragment,na),na.forEach(t),Ot.forEach(t),ff=h(o),No=s(o,"H2",{class:!0});var ku=a(No);rs=s(ku,"A",{id:!0,class:!0,href:!0});var Cx=a(rs);gp=s(Cx,"SPAN",{});var qx=a(gp);y(Ir.$$.fragment,qx),qx.forEach(t),Cx.forEach(t),$T=h(ku),_p=s(ku,"SPAN",{});var jx=a(_p);FT=i(jx,"TFRobertaForCausalLM"),jx.forEach(t),ku.forEach(t),uf=h(o),Io=s(o,"DIV",{class:!0});var vu=a(Io);y(Dr.$$.fragment,vu),xT=h(vu),Mt=s(vu,"DIV",{class:!0});var sa=a(Mt);y(Sr.$$.fragment,sa),RT=h(sa),Do=s(sa,"P",{});var Xd=a(Do);MT=i(Xd,"The "),Td=s(Xd,"A",{href:!0});var Px=a(Td);ET=i(Px,"TFRobertaForCausalLM"),Px.forEach(t),zT=i(Xd," forward method, overrides the "),bp=s(Xd,"CODE",{});var Lx=a(bp);CT=i(Lx,"__call__"),Lx.forEach(t),qT=i(Xd," special method."),Xd.forEach(t),jT=h(sa),y(is.$$.fragment,sa),PT=h(sa),y(ls.$$.fragment,sa),sa.forEach(t),vu.forEach(t),gf=h(o),So=s(o,"H2",{class:!0});var Tu=a(So);ds=s(Tu,"A",{id:!0,class:!0,href:!0});var Ax=a(ds);kp=s(Ax,"SPAN",{});var Ox=a(kp);y(Wr.$$.fragment,Ox),Ox.forEach(t),Ax.forEach(t),LT=h(Tu),vp=s(Tu,"SPAN",{});var Nx=a(vp);AT=i(Nx,"TFRobertaForMaskedLM"),Nx.forEach(t),Tu.forEach(t),_f=h(o),Ve=s(o,"DIV",{class:!0});var Nt=a(Ve);y(Br.$$.fragment,Nt),OT=h(Nt),Ur=s(Nt,"P",{});var yu=a(Ur);NT=i(yu,"RoBERTa Model with a "),Tp=s(yu,"CODE",{});var Ix=a(Tp);IT=i(Ix,"language modeling"),Ix.forEach(t),DT=i(yu," head on top."),yu.forEach(t),ST=h(Nt),Hr=s(Nt,"P",{});var wu=a(Hr);WT=i(wu,"This model inherits from "),yd=s(wu,"A",{href:!0});var Dx=a(yd);BT=i(Dx,"TFPreTrainedModel"),Dx.forEach(t),UT=i(wu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wu.forEach(t),HT=h(Nt),Qr=s(Nt,"P",{});var $u=a(Qr);QT=i($u,"This model is also a "),Vr=s($u,"A",{href:!0,rel:!0});var Sx=a(Vr);VT=i(Sx,"tf.keras.Model"),Sx.forEach(t),JT=i($u,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$u.forEach(t),KT=h(Nt),y(cs.$$.fragment,Nt),GT=h(Nt),ct=s(Nt,"DIV",{class:!0});var ho=a(ct);y(Jr.$$.fragment,ho),XT=h(ho),Wo=s(ho,"P",{});var Yd=a(Wo);YT=i(Yd,"The "),wd=s(Yd,"A",{href:!0});var Wx=a(wd);ZT=i(Wx,"TFRobertaForMaskedLM"),Wx.forEach(t),ey=i(Yd," forward method, overrides the "),yp=s(Yd,"CODE",{});var Bx=a(yp);ty=i(Bx,"__call__"),Bx.forEach(t),oy=i(Yd," special method."),Yd.forEach(t),ny=h(ho),y(ps.$$.fragment,ho),sy=h(ho),y(hs.$$.fragment,ho),ay=h(ho),y(ms.$$.fragment,ho),ho.forEach(t),Nt.forEach(t),bf=h(o),Bo=s(o,"H2",{class:!0});var Fu=a(Bo);fs=s(Fu,"A",{id:!0,class:!0,href:!0});var Ux=a(fs);wp=s(Ux,"SPAN",{});var Hx=a(wp);y(Kr.$$.fragment,Hx),Hx.forEach(t),Ux.forEach(t),ry=h(Fu),$p=s(Fu,"SPAN",{});var Qx=a($p);iy=i(Qx,"TFRobertaForSequenceClassification"),Qx.forEach(t),Fu.forEach(t),kf=h(o),Je=s(o,"DIV",{class:!0});var It=a(Je);y(Gr.$$.fragment,It),ly=h(It),Fp=s(It,"P",{});var Vx=a(Fp);dy=i(Vx,`RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Vx.forEach(t),cy=h(It),Xr=s(It,"P",{});var xu=a(Xr);py=i(xu,"This model inherits from "),$d=s(xu,"A",{href:!0});var Jx=a($d);hy=i(Jx,"TFPreTrainedModel"),Jx.forEach(t),my=i(xu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xu.forEach(t),fy=h(It),Yr=s(It,"P",{});var Ru=a(Yr);uy=i(Ru,"This model is also a "),Zr=s(Ru,"A",{href:!0,rel:!0});var Kx=a(Zr);gy=i(Kx,"tf.keras.Model"),Kx.forEach(t),_y=i(Ru,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ru.forEach(t),by=h(It),y(us.$$.fragment,It),ky=h(It),pt=s(It,"DIV",{class:!0});var mo=a(pt);y(ei.$$.fragment,mo),vy=h(mo),Uo=s(mo,"P",{});var Zd=a(Uo);Ty=i(Zd,"The "),Fd=s(Zd,"A",{href:!0});var Gx=a(Fd);yy=i(Gx,"TFRobertaForSequenceClassification"),Gx.forEach(t),wy=i(Zd," forward method, overrides the "),xp=s(Zd,"CODE",{});var Xx=a(xp);$y=i(Xx,"__call__"),Xx.forEach(t),Fy=i(Zd," special method."),Zd.forEach(t),xy=h(mo),y(gs.$$.fragment,mo),Ry=h(mo),y(_s.$$.fragment,mo),My=h(mo),y(bs.$$.fragment,mo),mo.forEach(t),It.forEach(t),vf=h(o),Ho=s(o,"H2",{class:!0});var Mu=a(Ho);ks=s(Mu,"A",{id:!0,class:!0,href:!0});var Yx=a(ks);Rp=s(Yx,"SPAN",{});var Zx=a(Rp);y(ti.$$.fragment,Zx),Zx.forEach(t),Yx.forEach(t),Ey=h(Mu),Mp=s(Mu,"SPAN",{});var e4=a(Mp);zy=i(e4,"TFRobertaForMultipleChoice"),e4.forEach(t),Mu.forEach(t),Tf=h(o),Ke=s(o,"DIV",{class:!0});var Dt=a(Ke);y(oi.$$.fragment,Dt),Cy=h(Dt),Ep=s(Dt,"P",{});var t4=a(Ep);qy=i(t4,`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),t4.forEach(t),jy=h(Dt),ni=s(Dt,"P",{});var Eu=a(ni);Py=i(Eu,"This model inherits from "),xd=s(Eu,"A",{href:!0});var o4=a(xd);Ly=i(o4,"TFPreTrainedModel"),o4.forEach(t),Ay=i(Eu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Eu.forEach(t),Oy=h(Dt),si=s(Dt,"P",{});var zu=a(si);Ny=i(zu,"This model is also a "),ai=s(zu,"A",{href:!0,rel:!0});var n4=a(ai);Iy=i(n4,"tf.keras.Model"),n4.forEach(t),Dy=i(zu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zu.forEach(t),Sy=h(Dt),y(vs.$$.fragment,Dt),Wy=h(Dt),Et=s(Dt,"DIV",{class:!0});var aa=a(Et);y(ri.$$.fragment,aa),By=h(aa),Qo=s(aa,"P",{});var ec=a(Qo);Uy=i(ec,"The "),Rd=s(ec,"A",{href:!0});var s4=a(Rd);Hy=i(s4,"TFRobertaForMultipleChoice"),s4.forEach(t),Qy=i(ec," forward method, overrides the "),zp=s(ec,"CODE",{});var a4=a(zp);Vy=i(a4,"__call__"),a4.forEach(t),Jy=i(ec," special method."),ec.forEach(t),Ky=h(aa),y(Ts.$$.fragment,aa),Gy=h(aa),y(ys.$$.fragment,aa),aa.forEach(t),Dt.forEach(t),yf=h(o),Vo=s(o,"H2",{class:!0});var Cu=a(Vo);ws=s(Cu,"A",{id:!0,class:!0,href:!0});var r4=a(ws);Cp=s(r4,"SPAN",{});var i4=a(Cp);y(ii.$$.fragment,i4),i4.forEach(t),r4.forEach(t),Xy=h(Cu),qp=s(Cu,"SPAN",{});var l4=a(qp);Yy=i(l4,"TFRobertaForTokenClassification"),l4.forEach(t),Cu.forEach(t),wf=h(o),Ge=s(o,"DIV",{class:!0});var St=a(Ge);y(li.$$.fragment,St),Zy=h(St),jp=s(St,"P",{});var d4=a(jp);ew=i(d4,`RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),d4.forEach(t),tw=h(St),di=s(St,"P",{});var qu=a(di);ow=i(qu,"This model inherits from "),Md=s(qu,"A",{href:!0});var c4=a(Md);nw=i(c4,"TFPreTrainedModel"),c4.forEach(t),sw=i(qu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qu.forEach(t),aw=h(St),ci=s(St,"P",{});var ju=a(ci);rw=i(ju,"This model is also a "),pi=s(ju,"A",{href:!0,rel:!0});var p4=a(pi);iw=i(p4,"tf.keras.Model"),p4.forEach(t),lw=i(ju,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ju.forEach(t),dw=h(St),y($s.$$.fragment,St),cw=h(St),ht=s(St,"DIV",{class:!0});var fo=a(ht);y(hi.$$.fragment,fo),pw=h(fo),Jo=s(fo,"P",{});var tc=a(Jo);hw=i(tc,"The "),Ed=s(tc,"A",{href:!0});var h4=a(Ed);mw=i(h4,"TFRobertaForTokenClassification"),h4.forEach(t),fw=i(tc," forward method, overrides the "),Pp=s(tc,"CODE",{});var m4=a(Pp);uw=i(m4,"__call__"),m4.forEach(t),gw=i(tc," special method."),tc.forEach(t),_w=h(fo),y(Fs.$$.fragment,fo),bw=h(fo),y(xs.$$.fragment,fo),kw=h(fo),y(Rs.$$.fragment,fo),fo.forEach(t),St.forEach(t),$f=h(o),Ko=s(o,"H2",{class:!0});var Pu=a(Ko);Ms=s(Pu,"A",{id:!0,class:!0,href:!0});var f4=a(Ms);Lp=s(f4,"SPAN",{});var u4=a(Lp);y(mi.$$.fragment,u4),u4.forEach(t),f4.forEach(t),vw=h(Pu),Ap=s(Pu,"SPAN",{});var g4=a(Ap);Tw=i(g4,"TFRobertaForQuestionAnswering"),g4.forEach(t),Pu.forEach(t),Ff=h(o),Xe=s(o,"DIV",{class:!0});var Wt=a(Xe);y(fi.$$.fragment,Wt),yw=h(Wt),Go=s(Wt,"P",{});var oc=a(Go);ww=i(oc,`RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Op=s(oc,"CODE",{});var _4=a(Op);$w=i(_4,"span start logits"),_4.forEach(t),Fw=i(oc," and "),Np=s(oc,"CODE",{});var b4=a(Np);xw=i(b4,"span end logits"),b4.forEach(t),Rw=i(oc,")."),oc.forEach(t),Mw=h(Wt),ui=s(Wt,"P",{});var Lu=a(ui);Ew=i(Lu,"This model inherits from "),zd=s(Lu,"A",{href:!0});var k4=a(zd);zw=i(k4,"TFPreTrainedModel"),k4.forEach(t),Cw=i(Lu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lu.forEach(t),qw=h(Wt),gi=s(Wt,"P",{});var Au=a(gi);jw=i(Au,"This model is also a "),_i=s(Au,"A",{href:!0,rel:!0});var v4=a(_i);Pw=i(v4,"tf.keras.Model"),v4.forEach(t),Lw=i(Au,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Au.forEach(t),Aw=h(Wt),y(Es.$$.fragment,Wt),Ow=h(Wt),mt=s(Wt,"DIV",{class:!0});var uo=a(mt);y(bi.$$.fragment,uo),Nw=h(uo),Xo=s(uo,"P",{});var nc=a(Xo);Iw=i(nc,"The "),Cd=s(nc,"A",{href:!0});var T4=a(Cd);Dw=i(T4,"TFRobertaForQuestionAnswering"),T4.forEach(t),Sw=i(nc," forward method, overrides the "),Ip=s(nc,"CODE",{});var y4=a(Ip);Ww=i(y4,"__call__"),y4.forEach(t),Bw=i(nc," special method."),nc.forEach(t),Uw=h(uo),y(zs.$$.fragment,uo),Hw=h(uo),y(Cs.$$.fragment,uo),Qw=h(uo),y(qs.$$.fragment,uo),uo.forEach(t),Wt.forEach(t),xf=h(o),Yo=s(o,"H2",{class:!0});var Ou=a(Yo);js=s(Ou,"A",{id:!0,class:!0,href:!0});var w4=a(js);Dp=s(w4,"SPAN",{});var $4=a(Dp);y(ki.$$.fragment,$4),$4.forEach(t),w4.forEach(t),Vw=h(Ou),Sp=s(Ou,"SPAN",{});var F4=a(Sp);Jw=i(F4,"FlaxRobertaModel"),F4.forEach(t),Ou.forEach(t),Rf=h(o),Oe=s(o,"DIV",{class:!0});var gt=a(Oe);y(vi.$$.fragment,gt),Kw=h(gt),Wp=s(gt,"P",{});var x4=a(Wp);Gw=i(x4,"The bare RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),x4.forEach(t),Xw=h(gt),Ti=s(gt,"P",{});var Nu=a(Ti);Yw=i(Nu,"This model inherits from "),qd=s(Nu,"A",{href:!0});var R4=a(qd);Zw=i(R4,"FlaxPreTrainedModel"),R4.forEach(t),e1=i(Nu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Nu.forEach(t),t1=h(gt),yi=s(gt,"P",{});var Iu=a(yi);o1=i(Iu,"This model is also a Flax Linen "),wi=s(Iu,"A",{href:!0,rel:!0});var M4=a(wi);n1=i(M4,"flax.linen.Module"),M4.forEach(t),s1=i(Iu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Iu.forEach(t),a1=h(gt),Bp=s(gt,"P",{});var E4=a(Bp);r1=i(E4,"Finally, this model supports inherent JAX features such as:"),E4.forEach(t),i1=h(gt),Ut=s(gt,"UL",{});var ra=a(Ut);Up=s(ra,"LI",{});var z4=a(Up);$i=s(z4,"A",{href:!0,rel:!0});var C4=a($i);l1=i(C4,"Just-In-Time (JIT) compilation"),C4.forEach(t),z4.forEach(t),d1=h(ra),Hp=s(ra,"LI",{});var q4=a(Hp);Fi=s(q4,"A",{href:!0,rel:!0});var j4=a(Fi);c1=i(j4,"Automatic Differentiation"),j4.forEach(t),q4.forEach(t),p1=h(ra),Qp=s(ra,"LI",{});var P4=a(Qp);xi=s(P4,"A",{href:!0,rel:!0});var L4=a(xi);h1=i(L4,"Vectorization"),L4.forEach(t),P4.forEach(t),m1=h(ra),Vp=s(ra,"LI",{});var A4=a(Vp);Ri=s(A4,"A",{href:!0,rel:!0});var O4=a(Ri);f1=i(O4,"Parallelization"),O4.forEach(t),A4.forEach(t),ra.forEach(t),u1=h(gt),zt=s(gt,"DIV",{class:!0});var ia=a(zt);y(Mi.$$.fragment,ia),g1=h(ia),Zo=s(ia,"P",{});var sc=a(Zo);_1=i(sc,"The "),Jp=s(sc,"CODE",{});var N4=a(Jp);b1=i(N4,"FlaxRobertaPreTrainedModel"),N4.forEach(t),k1=i(sc," forward method, overrides the "),Kp=s(sc,"CODE",{});var I4=a(Kp);v1=i(I4,"__call__"),I4.forEach(t),T1=i(sc," special method."),sc.forEach(t),y1=h(ia),y(Ps.$$.fragment,ia),w1=h(ia),y(Ls.$$.fragment,ia),ia.forEach(t),gt.forEach(t),Mf=h(o),en=s(o,"H2",{class:!0});var Du=a(en);As=s(Du,"A",{id:!0,class:!0,href:!0});var D4=a(As);Gp=s(D4,"SPAN",{});var S4=a(Gp);y(Ei.$$.fragment,S4),S4.forEach(t),D4.forEach(t),$1=h(Du),Xp=s(Du,"SPAN",{});var W4=a(Xp);F1=i(W4,"FlaxRobertaForCausalLM"),W4.forEach(t),Du.forEach(t),Ef=h(o),Ne=s(o,"DIV",{class:!0});var _t=a(Ne);y(zi.$$.fragment,_t),x1=h(_t),Yp=s(_t,"P",{});var B4=a(Yp);R1=i(B4,`Roberta Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),B4.forEach(t),M1=h(_t),Ci=s(_t,"P",{});var Su=a(Ci);E1=i(Su,"This model inherits from "),jd=s(Su,"A",{href:!0});var U4=a(jd);z1=i(U4,"FlaxPreTrainedModel"),U4.forEach(t),C1=i(Su,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Su.forEach(t),q1=h(_t),qi=s(_t,"P",{});var Wu=a(qi);j1=i(Wu,"This model is also a Flax Linen "),ji=s(Wu,"A",{href:!0,rel:!0});var H4=a(ji);P1=i(H4,"flax.linen.Module"),H4.forEach(t),L1=i(Wu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Wu.forEach(t),A1=h(_t),Zp=s(_t,"P",{});var Q4=a(Zp);O1=i(Q4,"Finally, this model supports inherent JAX features such as:"),Q4.forEach(t),N1=h(_t),Ht=s(_t,"UL",{});var la=a(Ht);eh=s(la,"LI",{});var V4=a(eh);Pi=s(V4,"A",{href:!0,rel:!0});var J4=a(Pi);I1=i(J4,"Just-In-Time (JIT) compilation"),J4.forEach(t),V4.forEach(t),D1=h(la),th=s(la,"LI",{});var K4=a(th);Li=s(K4,"A",{href:!0,rel:!0});var G4=a(Li);S1=i(G4,"Automatic Differentiation"),G4.forEach(t),K4.forEach(t),W1=h(la),oh=s(la,"LI",{});var X4=a(oh);Ai=s(X4,"A",{href:!0,rel:!0});var Y4=a(Ai);B1=i(Y4,"Vectorization"),Y4.forEach(t),X4.forEach(t),U1=h(la),nh=s(la,"LI",{});var Z4=a(nh);Oi=s(Z4,"A",{href:!0,rel:!0});var eR=a(Oi);H1=i(eR,"Parallelization"),eR.forEach(t),Z4.forEach(t),la.forEach(t),Q1=h(_t),Ct=s(_t,"DIV",{class:!0});var da=a(Ct);y(Ni.$$.fragment,da),V1=h(da),tn=s(da,"P",{});var ac=a(tn);J1=i(ac,"The "),sh=s(ac,"CODE",{});var tR=a(sh);K1=i(tR,"FlaxRobertaPreTrainedModel"),tR.forEach(t),G1=i(ac," forward method, overrides the "),ah=s(ac,"CODE",{});var oR=a(ah);X1=i(oR,"__call__"),oR.forEach(t),Y1=i(ac," special method."),ac.forEach(t),Z1=h(da),y(Os.$$.fragment,da),e$=h(da),y(Ns.$$.fragment,da),da.forEach(t),_t.forEach(t),zf=h(o),on=s(o,"H2",{class:!0});var Bu=a(on);Is=s(Bu,"A",{id:!0,class:!0,href:!0});var nR=a(Is);rh=s(nR,"SPAN",{});var sR=a(rh);y(Ii.$$.fragment,sR),sR.forEach(t),nR.forEach(t),t$=h(Bu),ih=s(Bu,"SPAN",{});var aR=a(ih);o$=i(aR,"FlaxRobertaForMaskedLM"),aR.forEach(t),Bu.forEach(t),Cf=h(o),Ie=s(o,"DIV",{class:!0});var bt=a(Ie);y(Di.$$.fragment,bt),n$=h(bt),Si=s(bt,"P",{});var Uu=a(Si);s$=i(Uu,"RoBERTa Model with a "),lh=s(Uu,"CODE",{});var rR=a(lh);a$=i(rR,"language modeling"),rR.forEach(t),r$=i(Uu," head on top."),Uu.forEach(t),i$=h(bt),Wi=s(bt,"P",{});var Hu=a(Wi);l$=i(Hu,"This model inherits from "),Pd=s(Hu,"A",{href:!0});var iR=a(Pd);d$=i(iR,"FlaxPreTrainedModel"),iR.forEach(t),c$=i(Hu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Hu.forEach(t),p$=h(bt),Bi=s(bt,"P",{});var Qu=a(Bi);h$=i(Qu,"This model is also a Flax Linen "),Ui=s(Qu,"A",{href:!0,rel:!0});var lR=a(Ui);m$=i(lR,"flax.linen.Module"),lR.forEach(t),f$=i(Qu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Qu.forEach(t),u$=h(bt),dh=s(bt,"P",{});var dR=a(dh);g$=i(dR,"Finally, this model supports inherent JAX features such as:"),dR.forEach(t),_$=h(bt),Qt=s(bt,"UL",{});var ca=a(Qt);ch=s(ca,"LI",{});var cR=a(ch);Hi=s(cR,"A",{href:!0,rel:!0});var pR=a(Hi);b$=i(pR,"Just-In-Time (JIT) compilation"),pR.forEach(t),cR.forEach(t),k$=h(ca),ph=s(ca,"LI",{});var hR=a(ph);Qi=s(hR,"A",{href:!0,rel:!0});var mR=a(Qi);v$=i(mR,"Automatic Differentiation"),mR.forEach(t),hR.forEach(t),T$=h(ca),hh=s(ca,"LI",{});var fR=a(hh);Vi=s(fR,"A",{href:!0,rel:!0});var uR=a(Vi);y$=i(uR,"Vectorization"),uR.forEach(t),fR.forEach(t),w$=h(ca),mh=s(ca,"LI",{});var gR=a(mh);Ji=s(gR,"A",{href:!0,rel:!0});var _R=a(Ji);$$=i(_R,"Parallelization"),_R.forEach(t),gR.forEach(t),ca.forEach(t),F$=h(bt),qt=s(bt,"DIV",{class:!0});var pa=a(qt);y(Ki.$$.fragment,pa),x$=h(pa),nn=s(pa,"P",{});var rc=a(nn);R$=i(rc,"The "),fh=s(rc,"CODE",{});var bR=a(fh);M$=i(bR,"FlaxRobertaPreTrainedModel"),bR.forEach(t),E$=i(rc," forward method, overrides the "),uh=s(rc,"CODE",{});var kR=a(uh);z$=i(kR,"__call__"),kR.forEach(t),C$=i(rc," special method."),rc.forEach(t),q$=h(pa),y(Ds.$$.fragment,pa),j$=h(pa),y(Ss.$$.fragment,pa),pa.forEach(t),bt.forEach(t),qf=h(o),sn=s(o,"H2",{class:!0});var Vu=a(sn);Ws=s(Vu,"A",{id:!0,class:!0,href:!0});var vR=a(Ws);gh=s(vR,"SPAN",{});var TR=a(gh);y(Gi.$$.fragment,TR),TR.forEach(t),vR.forEach(t),P$=h(Vu),_h=s(Vu,"SPAN",{});var yR=a(_h);L$=i(yR,"FlaxRobertaForSequenceClassification"),yR.forEach(t),Vu.forEach(t),jf=h(o),De=s(o,"DIV",{class:!0});var kt=a(De);y(Xi.$$.fragment,kt),A$=h(kt),bh=s(kt,"P",{});var wR=a(bh);O$=i(wR,`Roberta Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),wR.forEach(t),N$=h(kt),Yi=s(kt,"P",{});var Ju=a(Yi);I$=i(Ju,"This model inherits from "),Ld=s(Ju,"A",{href:!0});var $R=a(Ld);D$=i($R,"FlaxPreTrainedModel"),$R.forEach(t),S$=i(Ju,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ju.forEach(t),W$=h(kt),Zi=s(kt,"P",{});var Ku=a(Zi);B$=i(Ku,"This model is also a Flax Linen "),el=s(Ku,"A",{href:!0,rel:!0});var FR=a(el);U$=i(FR,"flax.linen.Module"),FR.forEach(t),H$=i(Ku,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ku.forEach(t),Q$=h(kt),kh=s(kt,"P",{});var xR=a(kh);V$=i(xR,"Finally, this model supports inherent JAX features such as:"),xR.forEach(t),J$=h(kt),Vt=s(kt,"UL",{});var ha=a(Vt);vh=s(ha,"LI",{});var RR=a(vh);tl=s(RR,"A",{href:!0,rel:!0});var MR=a(tl);K$=i(MR,"Just-In-Time (JIT) compilation"),MR.forEach(t),RR.forEach(t),G$=h(ha),Th=s(ha,"LI",{});var ER=a(Th);ol=s(ER,"A",{href:!0,rel:!0});var zR=a(ol);X$=i(zR,"Automatic Differentiation"),zR.forEach(t),ER.forEach(t),Y$=h(ha),yh=s(ha,"LI",{});var CR=a(yh);nl=s(CR,"A",{href:!0,rel:!0});var qR=a(nl);Z$=i(qR,"Vectorization"),qR.forEach(t),CR.forEach(t),e2=h(ha),wh=s(ha,"LI",{});var jR=a(wh);sl=s(jR,"A",{href:!0,rel:!0});var PR=a(sl);t2=i(PR,"Parallelization"),PR.forEach(t),jR.forEach(t),ha.forEach(t),o2=h(kt),jt=s(kt,"DIV",{class:!0});var ma=a(jt);y(al.$$.fragment,ma),n2=h(ma),an=s(ma,"P",{});var ic=a(an);s2=i(ic,"The "),$h=s(ic,"CODE",{});var LR=a($h);a2=i(LR,"FlaxRobertaPreTrainedModel"),LR.forEach(t),r2=i(ic," forward method, overrides the "),Fh=s(ic,"CODE",{});var AR=a(Fh);i2=i(AR,"__call__"),AR.forEach(t),l2=i(ic," special method."),ic.forEach(t),d2=h(ma),y(Bs.$$.fragment,ma),c2=h(ma),y(Us.$$.fragment,ma),ma.forEach(t),kt.forEach(t),Pf=h(o),rn=s(o,"H2",{class:!0});var Gu=a(rn);Hs=s(Gu,"A",{id:!0,class:!0,href:!0});var OR=a(Hs);xh=s(OR,"SPAN",{});var NR=a(xh);y(rl.$$.fragment,NR),NR.forEach(t),OR.forEach(t),p2=h(Gu),Rh=s(Gu,"SPAN",{});var IR=a(Rh);h2=i(IR,"FlaxRobertaForMultipleChoice"),IR.forEach(t),Gu.forEach(t),Lf=h(o),Se=s(o,"DIV",{class:!0});var vt=a(Se);y(il.$$.fragment,vt),m2=h(vt),Mh=s(vt,"P",{});var DR=a(Mh);f2=i(DR,`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),DR.forEach(t),u2=h(vt),ll=s(vt,"P",{});var Xu=a(ll);g2=i(Xu,"This model inherits from "),Ad=s(Xu,"A",{href:!0});var SR=a(Ad);_2=i(SR,"FlaxPreTrainedModel"),SR.forEach(t),b2=i(Xu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Xu.forEach(t),k2=h(vt),dl=s(vt,"P",{});var Yu=a(dl);v2=i(Yu,"This model is also a Flax Linen "),cl=s(Yu,"A",{href:!0,rel:!0});var WR=a(cl);T2=i(WR,"flax.linen.Module"),WR.forEach(t),y2=i(Yu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Yu.forEach(t),w2=h(vt),Eh=s(vt,"P",{});var BR=a(Eh);$2=i(BR,"Finally, this model supports inherent JAX features such as:"),BR.forEach(t),F2=h(vt),Jt=s(vt,"UL",{});var fa=a(Jt);zh=s(fa,"LI",{});var UR=a(zh);pl=s(UR,"A",{href:!0,rel:!0});var HR=a(pl);x2=i(HR,"Just-In-Time (JIT) compilation"),HR.forEach(t),UR.forEach(t),R2=h(fa),Ch=s(fa,"LI",{});var QR=a(Ch);hl=s(QR,"A",{href:!0,rel:!0});var VR=a(hl);M2=i(VR,"Automatic Differentiation"),VR.forEach(t),QR.forEach(t),E2=h(fa),qh=s(fa,"LI",{});var JR=a(qh);ml=s(JR,"A",{href:!0,rel:!0});var KR=a(ml);z2=i(KR,"Vectorization"),KR.forEach(t),JR.forEach(t),C2=h(fa),jh=s(fa,"LI",{});var GR=a(jh);fl=s(GR,"A",{href:!0,rel:!0});var XR=a(fl);q2=i(XR,"Parallelization"),XR.forEach(t),GR.forEach(t),fa.forEach(t),j2=h(vt),Pt=s(vt,"DIV",{class:!0});var ua=a(Pt);y(ul.$$.fragment,ua),P2=h(ua),ln=s(ua,"P",{});var lc=a(ln);L2=i(lc,"The "),Ph=s(lc,"CODE",{});var YR=a(Ph);A2=i(YR,"FlaxRobertaPreTrainedModel"),YR.forEach(t),O2=i(lc," forward method, overrides the "),Lh=s(lc,"CODE",{});var ZR=a(Lh);N2=i(ZR,"__call__"),ZR.forEach(t),I2=i(lc," special method."),lc.forEach(t),D2=h(ua),y(Qs.$$.fragment,ua),S2=h(ua),y(Vs.$$.fragment,ua),ua.forEach(t),vt.forEach(t),Af=h(o),dn=s(o,"H2",{class:!0});var Zu=a(dn);Js=s(Zu,"A",{id:!0,class:!0,href:!0});var eM=a(Js);Ah=s(eM,"SPAN",{});var tM=a(Ah);y(gl.$$.fragment,tM),tM.forEach(t),eM.forEach(t),W2=h(Zu),Oh=s(Zu,"SPAN",{});var oM=a(Oh);B2=i(oM,"FlaxRobertaForTokenClassification"),oM.forEach(t),Zu.forEach(t),Of=h(o),We=s(o,"DIV",{class:!0});var Tt=a(We);y(_l.$$.fragment,Tt),U2=h(Tt),Nh=s(Tt,"P",{});var nM=a(Nh);H2=i(nM,`Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),nM.forEach(t),Q2=h(Tt),bl=s(Tt,"P",{});var eg=a(bl);V2=i(eg,"This model inherits from "),Od=s(eg,"A",{href:!0});var sM=a(Od);J2=i(sM,"FlaxPreTrainedModel"),sM.forEach(t),K2=i(eg,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),eg.forEach(t),G2=h(Tt),kl=s(Tt,"P",{});var tg=a(kl);X2=i(tg,"This model is also a Flax Linen "),vl=s(tg,"A",{href:!0,rel:!0});var aM=a(vl);Y2=i(aM,"flax.linen.Module"),aM.forEach(t),Z2=i(tg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),tg.forEach(t),eF=h(Tt),Ih=s(Tt,"P",{});var rM=a(Ih);tF=i(rM,"Finally, this model supports inherent JAX features such as:"),rM.forEach(t),oF=h(Tt),Kt=s(Tt,"UL",{});var ga=a(Kt);Dh=s(ga,"LI",{});var iM=a(Dh);Tl=s(iM,"A",{href:!0,rel:!0});var lM=a(Tl);nF=i(lM,"Just-In-Time (JIT) compilation"),lM.forEach(t),iM.forEach(t),sF=h(ga),Sh=s(ga,"LI",{});var dM=a(Sh);yl=s(dM,"A",{href:!0,rel:!0});var cM=a(yl);aF=i(cM,"Automatic Differentiation"),cM.forEach(t),dM.forEach(t),rF=h(ga),Wh=s(ga,"LI",{});var pM=a(Wh);wl=s(pM,"A",{href:!0,rel:!0});var hM=a(wl);iF=i(hM,"Vectorization"),hM.forEach(t),pM.forEach(t),lF=h(ga),Bh=s(ga,"LI",{});var mM=a(Bh);$l=s(mM,"A",{href:!0,rel:!0});var fM=a($l);dF=i(fM,"Parallelization"),fM.forEach(t),mM.forEach(t),ga.forEach(t),cF=h(Tt),Lt=s(Tt,"DIV",{class:!0});var _a=a(Lt);y(Fl.$$.fragment,_a),pF=h(_a),cn=s(_a,"P",{});var dc=a(cn);hF=i(dc,"The "),Uh=s(dc,"CODE",{});var uM=a(Uh);mF=i(uM,"FlaxRobertaPreTrainedModel"),uM.forEach(t),fF=i(dc," forward method, overrides the "),Hh=s(dc,"CODE",{});var gM=a(Hh);uF=i(gM,"__call__"),gM.forEach(t),gF=i(dc," special method."),dc.forEach(t),_F=h(_a),y(Ks.$$.fragment,_a),bF=h(_a),y(Gs.$$.fragment,_a),_a.forEach(t),Tt.forEach(t),Nf=h(o),pn=s(o,"H2",{class:!0});var og=a(pn);Xs=s(og,"A",{id:!0,class:!0,href:!0});var _M=a(Xs);Qh=s(_M,"SPAN",{});var bM=a(Qh);y(xl.$$.fragment,bM),bM.forEach(t),_M.forEach(t),kF=h(og),Vh=s(og,"SPAN",{});var kM=a(Vh);vF=i(kM,"FlaxRobertaForQuestionAnswering"),kM.forEach(t),og.forEach(t),If=h(o),Be=s(o,"DIV",{class:!0});var yt=a(Be);y(Rl.$$.fragment,yt),TF=h(yt),hn=s(yt,"P",{});var cc=a(hn);yF=i(cc,`Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Jh=s(cc,"CODE",{});var vM=a(Jh);wF=i(vM,"span start logits"),vM.forEach(t),$F=i(cc," and "),Kh=s(cc,"CODE",{});var TM=a(Kh);FF=i(TM,"span end logits"),TM.forEach(t),xF=i(cc,")."),cc.forEach(t),RF=h(yt),Ml=s(yt,"P",{});var ng=a(Ml);MF=i(ng,"This model inherits from "),Nd=s(ng,"A",{href:!0});var yM=a(Nd);EF=i(yM,"FlaxPreTrainedModel"),yM.forEach(t),zF=i(ng,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ng.forEach(t),CF=h(yt),El=s(yt,"P",{});var sg=a(El);qF=i(sg,"This model is also a Flax Linen "),zl=s(sg,"A",{href:!0,rel:!0});var wM=a(zl);jF=i(wM,"flax.linen.Module"),wM.forEach(t),PF=i(sg,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),sg.forEach(t),LF=h(yt),Gh=s(yt,"P",{});var $M=a(Gh);AF=i($M,"Finally, this model supports inherent JAX features such as:"),$M.forEach(t),OF=h(yt),Gt=s(yt,"UL",{});var ba=a(Gt);Xh=s(ba,"LI",{});var FM=a(Xh);Cl=s(FM,"A",{href:!0,rel:!0});var xM=a(Cl);NF=i(xM,"Just-In-Time (JIT) compilation"),xM.forEach(t),FM.forEach(t),IF=h(ba),Yh=s(ba,"LI",{});var RM=a(Yh);ql=s(RM,"A",{href:!0,rel:!0});var MM=a(ql);DF=i(MM,"Automatic Differentiation"),MM.forEach(t),RM.forEach(t),SF=h(ba),Zh=s(ba,"LI",{});var EM=a(Zh);jl=s(EM,"A",{href:!0,rel:!0});var zM=a(jl);WF=i(zM,"Vectorization"),zM.forEach(t),EM.forEach(t),BF=h(ba),em=s(ba,"LI",{});var CM=a(em);Pl=s(CM,"A",{href:!0,rel:!0});var qM=a(Pl);UF=i(qM,"Parallelization"),qM.forEach(t),CM.forEach(t),ba.forEach(t),HF=h(yt),At=s(yt,"DIV",{class:!0});var ka=a(At);y(Ll.$$.fragment,ka),QF=h(ka),mn=s(ka,"P",{});var pc=a(mn);VF=i(pc,"The "),tm=s(pc,"CODE",{});var jM=a(tm);JF=i(jM,"FlaxRobertaPreTrainedModel"),jM.forEach(t),KF=i(pc," forward method, overrides the "),om=s(pc,"CODE",{});var PM=a(om);GF=i(PM,"__call__"),PM.forEach(t),XF=i(pc," special method."),pc.forEach(t),YF=h(ka),y(Ys.$$.fragment,ka),ZF=h(ka),y(Zs.$$.fragment,ka),ka.forEach(t),yt.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(GE)),u(m,"id","roberta"),u(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(m,"href","#roberta"),u(c,"class","relative group"),u(X,"id","overview"),u(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(X,"href","#overview"),u(z,"class","relative group"),u(ae,"href","https://arxiv.org/abs/1907.11692"),u(ae,"rel","nofollow"),u(pe,"href","/docs/transformers/v4.21.3/en/model_doc/bert#transformers.BertModel"),u(xe,"href","camembert"),u(va,"href","https://huggingface.co/julien-c"),u(va,"rel","nofollow"),u(Ta,"href","https://github.com/pytorch/fairseq/tree/master/examples/roberta"),u(Ta,"rel","nofollow"),u(bn,"id","transformers.RobertaConfig"),u(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(bn,"href","#transformers.RobertaConfig"),u(go,"class","relative group"),u(Vl,"href","/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaModel"),u(Jl,"href","/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.TFRobertaModel"),u($a,"href","https://huggingface.co/roberta-base"),u($a,"rel","nofollow"),u(Kl,"href","/docs/transformers/v4.21.3/en/main_classes/configuration#transformers.PretrainedConfig"),u(Gl,"href","/docs/transformers/v4.21.3/en/main_classes/configuration#transformers.PretrainedConfig"),u(Xl,"href","/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaConfig"),u(Yl,"href","/docs/transformers/v4.21.3/en/model_doc/bert#transformers.BertConfig"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vn,"id","transformers.RobertaTokenizer"),u(vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(vn,"href","#transformers.RobertaTokenizer"),u(ko,"class","relative group"),u(Zl,"href","/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(od,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fn,"id","transformers.RobertaTokenizerFast"),u(Fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fn,"href","#transformers.RobertaTokenizerFast"),u(vo,"class","relative group"),u(nd,"href","/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(sd,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Mn,"id","transformers.RobertaModel"),u(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Mn,"href","#transformers.RobertaModel"),u(To,"class","relative group"),u(ad,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),u(Ha,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ha,"rel","nofollow"),u(Va,"href","https://arxiv.org/abs/1706.03762"),u(Va,"rel","nofollow"),u(rd,"href","/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaModel"),u($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qn,"id","transformers.RobertaForCausalLM"),u(qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(qn,"href","#transformers.RobertaForCausalLM"),u(wo,"class","relative group"),u(id,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),u(er,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(er,"rel","nofollow"),u(ld,"href","/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaForCausalLM"),u(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ln,"id","transformers.RobertaForMaskedLM"),u(Ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ln,"href","#transformers.RobertaForMaskedLM"),u(Fo,"class","relative group"),u(dd,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),u(ir,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ir,"rel","nofollow"),u(cd,"href","/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaForMaskedLM"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(In,"id","transformers.RobertaForSequenceClassification"),u(In,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(In,"href","#transformers.RobertaForSequenceClassification"),u(Ro,"class","relative group"),u(pd,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),u(mr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(mr,"rel","nofollow"),u(hd,"href","/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaForSequenceClassification"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Hn,"id","transformers.RobertaForMultipleChoice"),u(Hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Hn,"href","#transformers.RobertaForMultipleChoice"),u(Eo,"class","relative group"),u(md,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),u(kr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(kr,"rel","nofollow"),u(fd,"href","/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaForMultipleChoice"),u(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Jn,"id","transformers.RobertaForTokenClassification"),u(Jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Jn,"href","#transformers.RobertaForTokenClassification"),u(Co,"class","relative group"),u(ud,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),u(Fr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Fr,"rel","nofollow"),u(gd,"href","/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaForTokenClassification"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Yn,"id","transformers.RobertaForQuestionAnswering"),u(Yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Yn,"href","#transformers.RobertaForQuestionAnswering"),u(jo,"class","relative group"),u(_d,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),u(Cr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Cr,"rel","nofollow"),u(bd,"href","/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.RobertaForQuestionAnswering"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(os,"id","transformers.TFRobertaModel"),u(os,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(os,"href","#transformers.TFRobertaModel"),u(Ao,"class","relative group"),u(kd,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel"),u(Or,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Or,"rel","nofollow"),u(vd,"href","/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.TFRobertaModel"),u(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rs,"id","transformers.TFRobertaForCausalLM"),u(rs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(rs,"href","#transformers.TFRobertaForCausalLM"),u(No,"class","relative group"),u(Td,"href","/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.TFRobertaForCausalLM"),u(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ds,"id","transformers.TFRobertaForMaskedLM"),u(ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ds,"href","#transformers.TFRobertaForMaskedLM"),u(So,"class","relative group"),u(yd,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel"),u(Vr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Vr,"rel","nofollow"),u(wd,"href","/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.TFRobertaForMaskedLM"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fs,"id","transformers.TFRobertaForSequenceClassification"),u(fs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(fs,"href","#transformers.TFRobertaForSequenceClassification"),u(Bo,"class","relative group"),u($d,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel"),u(Zr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Zr,"rel","nofollow"),u(Fd,"href","/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.TFRobertaForSequenceClassification"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ks,"id","transformers.TFRobertaForMultipleChoice"),u(ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ks,"href","#transformers.TFRobertaForMultipleChoice"),u(Ho,"class","relative group"),u(xd,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel"),u(ai,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ai,"rel","nofollow"),u(Rd,"href","/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.TFRobertaForMultipleChoice"),u(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ws,"id","transformers.TFRobertaForTokenClassification"),u(ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ws,"href","#transformers.TFRobertaForTokenClassification"),u(Vo,"class","relative group"),u(Md,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel"),u(pi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(pi,"rel","nofollow"),u(Ed,"href","/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.TFRobertaForTokenClassification"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ms,"id","transformers.TFRobertaForQuestionAnswering"),u(Ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ms,"href","#transformers.TFRobertaForQuestionAnswering"),u(Ko,"class","relative group"),u(zd,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel"),u(_i,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(_i,"rel","nofollow"),u(Cd,"href","/docs/transformers/v4.21.3/en/model_doc/roberta#transformers.TFRobertaForQuestionAnswering"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(js,"id","transformers.FlaxRobertaModel"),u(js,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(js,"href","#transformers.FlaxRobertaModel"),u(Yo,"class","relative group"),u(qd,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(wi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(wi,"rel","nofollow"),u($i,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u($i,"rel","nofollow"),u(Fi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Fi,"rel","nofollow"),u(xi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(xi,"rel","nofollow"),u(Ri,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ri,"rel","nofollow"),u(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(As,"id","transformers.FlaxRobertaForCausalLM"),u(As,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(As,"href","#transformers.FlaxRobertaForCausalLM"),u(en,"class","relative group"),u(jd,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(ji,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(ji,"rel","nofollow"),u(Pi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Pi,"rel","nofollow"),u(Li,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Li,"rel","nofollow"),u(Ai,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Ai,"rel","nofollow"),u(Oi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Oi,"rel","nofollow"),u(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Is,"id","transformers.FlaxRobertaForMaskedLM"),u(Is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Is,"href","#transformers.FlaxRobertaForMaskedLM"),u(on,"class","relative group"),u(Pd,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ui,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Ui,"rel","nofollow"),u(Hi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Hi,"rel","nofollow"),u(Qi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Qi,"rel","nofollow"),u(Vi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Vi,"rel","nofollow"),u(Ji,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ji,"rel","nofollow"),u(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ws,"id","transformers.FlaxRobertaForSequenceClassification"),u(Ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ws,"href","#transformers.FlaxRobertaForSequenceClassification"),u(sn,"class","relative group"),u(Ld,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(el,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(el,"rel","nofollow"),u(tl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(tl,"rel","nofollow"),u(ol,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ol,"rel","nofollow"),u(nl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(nl,"rel","nofollow"),u(sl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(sl,"rel","nofollow"),u(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Hs,"id","transformers.FlaxRobertaForMultipleChoice"),u(Hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Hs,"href","#transformers.FlaxRobertaForMultipleChoice"),u(rn,"class","relative group"),u(Ad,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(cl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(cl,"rel","nofollow"),u(pl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(pl,"rel","nofollow"),u(hl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(hl,"rel","nofollow"),u(ml,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ml,"rel","nofollow"),u(fl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(fl,"rel","nofollow"),u(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Js,"id","transformers.FlaxRobertaForTokenClassification"),u(Js,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Js,"href","#transformers.FlaxRobertaForTokenClassification"),u(dn,"class","relative group"),u(Od,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(vl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(vl,"rel","nofollow"),u(Tl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Tl,"rel","nofollow"),u(yl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(yl,"rel","nofollow"),u(wl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(wl,"rel","nofollow"),u($l,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u($l,"rel","nofollow"),u(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xs,"id","transformers.FlaxRobertaForQuestionAnswering"),u(Xs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Xs,"href","#transformers.FlaxRobertaForQuestionAnswering"),u(pn,"class","relative group"),u(Nd,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(zl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(zl,"rel","nofollow"),u(Cl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Cl,"rel","nofollow"),u(ql,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ql,"rel","nofollow"),u(jl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(jl,"rel","nofollow"),u(Pl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Pl,"rel","nofollow"),u(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,b){e(document.head,d),k(o,g,b),k(o,c,b),e(c,m),e(m,_),w(l,_,null),e(c,f),e(c,M),e(M,te),k(o,I,b),k(o,z,b),e(z,X),e(X,D),w(se,D,null),e(z,be),e(z,S),e(S,ke),k(o,ue,b),k(o,K,b),e(K,A),e(K,ae),e(ae,oe),e(K,C),k(o,j,b),k(o,ie,b),e(ie,U),k(o,ge,b),k(o,le,b),e(le,H),k(o,_e,b),k(o,de,b),e(de,q),e(q,ve),k(o,W,b),k(o,ce,b),e(ce,Te),k(o,B,b),k(o,G,b),e(G,re),e(re,O),e(re,pe),e(pe,Q),e(re,ye),e(G,v),e(G,E),e(E,ne),e(G,Ee),e(G,me),e(me,N),e(me,Re),e(Re,ze),e(me,Ce),e(me,L),e(L,V),e(me,qe),e(me,Me),e(Me,J),e(me,je),e(G,Pe),e(G,he),e(he,xe),e(xe,ag),e(he,rg),k(o,Um,b),k(o,eo,b),e(eo,ig),e(eo,va),e(va,lg),e(eo,dg),e(eo,Ta),e(Ta,cg),e(eo,pg),k(o,Hm,b),k(o,go,b),e(go,bn),e(bn,hc),w(ya,hc,null),e(go,hg),e(go,mc),e(mc,mg),k(o,Qm,b),k(o,et,b),w(wa,et,null),e(et,fg),e(et,Bt),e(Bt,ug),e(Bt,Vl),e(Vl,gg),e(Bt,_g),e(Bt,Jl),e(Jl,bg),e(Bt,kg),e(Bt,$a),e($a,vg),e(Bt,Tg),e(et,yg),e(et,_o),e(_o,wg),e(_o,Kl),e(Kl,$g),e(_o,Fg),e(_o,Gl),e(Gl,xg),e(_o,Rg),e(et,Mg),e(et,bo),e(bo,Eg),e(bo,Xl),e(Xl,zg),e(bo,Cg),e(bo,Yl),e(Yl,qg),e(bo,jg),e(et,Pg),w(kn,et,null),k(o,Vm,b),k(o,ko,b),e(ko,vn),e(vn,fc),w(Fa,fc,null),e(ko,Lg),e(ko,uc),e(uc,Ag),k(o,Jm,b),k(o,we,b),w(xa,we,null),e(we,Og),e(we,gc),e(gc,Ng),e(we,Ig),e(we,_c),e(_c,Dg),e(we,Sg),w(Tn,we,null),e(we,Wg),e(we,Ra),e(Ra,Bg),e(Ra,bc),e(bc,Ug),e(Ra,Hg),e(we,Qg),w(yn,we,null),e(we,Vg),e(we,Ma),e(Ma,Jg),e(Ma,Zl),e(Zl,Kg),e(Ma,Gg),e(we,Xg),e(we,to),w(Ea,to,null),e(to,Yg),e(to,kc),e(kc,Zg),e(to,e_),e(to,za),e(za,ed),e(ed,t_),e(ed,vc),e(vc,o_),e(za,n_),e(za,td),e(td,s_),e(td,Tc),e(Tc,a_),e(we,r_),e(we,wn),w(Ca,wn,null),e(wn,i_),e(wn,qa),e(qa,l_),e(qa,yc),e(yc,d_),e(qa,c_),e(we,p_),e(we,$n),w(ja,$n,null),e($n,h_),e($n,wc),e(wc,m_),e(we,f_),e(we,od),w(Pa,od,null),k(o,Km,b),k(o,vo,b),e(vo,Fn),e(Fn,$c),w(La,$c,null),e(vo,u_),e(vo,Fc),e(Fc,g_),k(o,Gm,b),k(o,Le,b),w(Aa,Le,null),e(Le,__),e(Le,Oa),e(Oa,b_),e(Oa,xc),e(xc,k_),e(Oa,v_),e(Le,T_),e(Le,Rc),e(Rc,y_),e(Le,w_),w(xn,Le,null),e(Le,$_),e(Le,Na),e(Na,F_),e(Na,Mc),e(Mc,x_),e(Na,R_),e(Le,M_),w(Rn,Le,null),e(Le,E_),e(Le,Ia),e(Ia,z_),e(Ia,nd),e(nd,C_),e(Ia,q_),e(Le,j_),e(Le,sd),w(Da,sd,null),k(o,Xm,b),k(o,To,b),e(To,Mn),e(Mn,Ec),w(Sa,Ec,null),e(To,P_),e(To,zc),e(zc,L_),k(o,Ym,b),k(o,Ae,b),w(Wa,Ae,null),e(Ae,A_),e(Ae,Cc),e(Cc,O_),e(Ae,N_),e(Ae,Ba),e(Ba,I_),e(Ba,ad),e(ad,D_),e(Ba,S_),e(Ae,W_),e(Ae,Ua),e(Ua,B_),e(Ua,Ha),e(Ha,U_),e(Ua,H_),e(Ae,Q_),e(Ae,Qa),e(Qa,V_),e(Qa,qc),e(qc,J_),e(Qa,K_),e(Ae,G_),e(Ae,He),e(He,X_),e(He,jc),e(jc,Y_),e(He,Z_),e(He,Pc),e(Pc,eb),e(He,tb),e(He,Lc),e(Lc,ob),e(He,nb),e(He,Ac),e(Ac,sb),e(He,ab),e(He,Oc),e(Oc,rb),e(He,ib),e(He,Nc),e(Nc,lb),e(He,db),e(Ae,cb),e(Ae,En),e(En,pb),e(En,Ic),e(Ic,hb),e(En,mb),e(En,Va),e(Va,fb),e(Ae,ub),e(Ae,$t),w(Ja,$t,null),e($t,gb),e($t,yo),e(yo,_b),e(yo,rd),e(rd,bb),e(yo,kb),e(yo,Dc),e(Dc,vb),e(yo,Tb),e($t,yb),w(zn,$t,null),e($t,wb),w(Cn,$t,null),k(o,Zm,b),k(o,wo,b),e(wo,qn),e(qn,Sc),w(Ka,Sc,null),e(wo,$b),e(wo,Wc),e(Wc,Fb),k(o,ef,b),k(o,tt,b),w(Ga,tt,null),e(tt,xb),e(tt,Xa),e(Xa,Rb),e(Xa,Bc),e(Bc,Mb),e(Xa,Eb),e(tt,zb),e(tt,Ya),e(Ya,Cb),e(Ya,id),e(id,qb),e(Ya,jb),e(tt,Pb),e(tt,Za),e(Za,Lb),e(Za,er),e(er,Ab),e(Za,Ob),e(tt,Nb),e(tt,Ft),w(tr,Ft,null),e(Ft,Ib),e(Ft,$o),e($o,Db),e($o,ld),e(ld,Sb),e($o,Wb),e($o,Uc),e(Uc,Bb),e($o,Ub),e(Ft,Hb),w(jn,Ft,null),e(Ft,Qb),w(Pn,Ft,null),k(o,tf,b),k(o,Fo,b),e(Fo,Ln),e(Ln,Hc),w(or,Hc,null),e(Fo,Vb),e(Fo,Qc),e(Qc,Jb),k(o,of,b),k(o,ot,b),w(nr,ot,null),e(ot,Kb),e(ot,sr),e(sr,Gb),e(sr,Vc),e(Vc,Xb),e(sr,Yb),e(ot,Zb),e(ot,ar),e(ar,ek),e(ar,dd),e(dd,tk),e(ar,ok),e(ot,nk),e(ot,rr),e(rr,sk),e(rr,ir),e(ir,ak),e(rr,rk),e(ot,ik),e(ot,it),w(lr,it,null),e(it,lk),e(it,xo),e(xo,dk),e(xo,cd),e(cd,ck),e(xo,pk),e(xo,Jc),e(Jc,hk),e(xo,mk),e(it,fk),w(An,it,null),e(it,uk),w(On,it,null),e(it,gk),w(Nn,it,null),k(o,nf,b),k(o,Ro,b),e(Ro,In),e(In,Kc),w(dr,Kc,null),e(Ro,_k),e(Ro,Gc),e(Gc,bk),k(o,sf,b),k(o,nt,b),w(cr,nt,null),e(nt,kk),e(nt,Xc),e(Xc,vk),e(nt,Tk),e(nt,pr),e(pr,yk),e(pr,pd),e(pd,wk),e(pr,$k),e(nt,Fk),e(nt,hr),e(hr,xk),e(hr,mr),e(mr,Rk),e(hr,Mk),e(nt,Ek),e(nt,Ue),w(fr,Ue,null),e(Ue,zk),e(Ue,Mo),e(Mo,Ck),e(Mo,hd),e(hd,qk),e(Mo,jk),e(Mo,Yc),e(Yc,Pk),e(Mo,Lk),e(Ue,Ak),w(Dn,Ue,null),e(Ue,Ok),w(Sn,Ue,null),e(Ue,Nk),w(Wn,Ue,null),e(Ue,Ik),w(Bn,Ue,null),e(Ue,Dk),w(Un,Ue,null),k(o,af,b),k(o,Eo,b),e(Eo,Hn),e(Hn,Zc),w(ur,Zc,null),e(Eo,Sk),e(Eo,ep),e(ep,Wk),k(o,rf,b),k(o,st,b),w(gr,st,null),e(st,Bk),e(st,tp),e(tp,Uk),e(st,Hk),e(st,_r),e(_r,Qk),e(_r,md),e(md,Vk),e(_r,Jk),e(st,Kk),e(st,br),e(br,Gk),e(br,kr),e(kr,Xk),e(br,Yk),e(st,Zk),e(st,xt),w(vr,xt,null),e(xt,ev),e(xt,zo),e(zo,tv),e(zo,fd),e(fd,ov),e(zo,nv),e(zo,op),e(op,sv),e(zo,av),e(xt,rv),w(Qn,xt,null),e(xt,iv),w(Vn,xt,null),k(o,lf,b),k(o,Co,b),e(Co,Jn),e(Jn,np),w(Tr,np,null),e(Co,lv),e(Co,sp),e(sp,dv),k(o,df,b),k(o,at,b),w(yr,at,null),e(at,cv),e(at,ap),e(ap,pv),e(at,hv),e(at,wr),e(wr,mv),e(wr,ud),e(ud,fv),e(wr,uv),e(at,gv),e(at,$r),e($r,_v),e($r,Fr),e(Fr,bv),e($r,kv),e(at,vv),e(at,lt),w(xr,lt,null),e(lt,Tv),e(lt,qo),e(qo,yv),e(qo,gd),e(gd,wv),e(qo,$v),e(qo,rp),e(rp,Fv),e(qo,xv),e(lt,Rv),w(Kn,lt,null),e(lt,Mv),w(Gn,lt,null),e(lt,Ev),w(Xn,lt,null),k(o,cf,b),k(o,jo,b),e(jo,Yn),e(Yn,ip),w(Rr,ip,null),e(jo,zv),e(jo,lp),e(lp,Cv),k(o,pf,b),k(o,rt,b),w(Mr,rt,null),e(rt,qv),e(rt,Po),e(Po,jv),e(Po,dp),e(dp,Pv),e(Po,Lv),e(Po,cp),e(cp,Av),e(Po,Ov),e(rt,Nv),e(rt,Er),e(Er,Iv),e(Er,_d),e(_d,Dv),e(Er,Sv),e(rt,Wv),e(rt,zr),e(zr,Bv),e(zr,Cr),e(Cr,Uv),e(zr,Hv),e(rt,Qv),e(rt,dt),w(qr,dt,null),e(dt,Vv),e(dt,Lo),e(Lo,Jv),e(Lo,bd),e(bd,Kv),e(Lo,Gv),e(Lo,pp),e(pp,Xv),e(Lo,Yv),e(dt,Zv),w(Zn,dt,null),e(dt,eT),w(es,dt,null),e(dt,tT),w(ts,dt,null),k(o,hf,b),k(o,Ao,b),e(Ao,os),e(os,hp),w(jr,hp,null),e(Ao,oT),e(Ao,mp),e(mp,nT),k(o,mf,b),k(o,Qe,b),w(Pr,Qe,null),e(Qe,sT),e(Qe,fp),e(fp,aT),e(Qe,rT),e(Qe,Lr),e(Lr,iT),e(Lr,kd),e(kd,lT),e(Lr,dT),e(Qe,cT),e(Qe,Ar),e(Ar,pT),e(Ar,Or),e(Or,hT),e(Ar,mT),e(Qe,fT),w(ns,Qe,null),e(Qe,uT),e(Qe,Rt),w(Nr,Rt,null),e(Rt,gT),e(Rt,Oo),e(Oo,_T),e(Oo,vd),e(vd,bT),e(Oo,kT),e(Oo,up),e(up,vT),e(Oo,TT),e(Rt,yT),w(ss,Rt,null),e(Rt,wT),w(as,Rt,null),k(o,ff,b),k(o,No,b),e(No,rs),e(rs,gp),w(Ir,gp,null),e(No,$T),e(No,_p),e(_p,FT),k(o,uf,b),k(o,Io,b),w(Dr,Io,null),e(Io,xT),e(Io,Mt),w(Sr,Mt,null),e(Mt,RT),e(Mt,Do),e(Do,MT),e(Do,Td),e(Td,ET),e(Do,zT),e(Do,bp),e(bp,CT),e(Do,qT),e(Mt,jT),w(is,Mt,null),e(Mt,PT),w(ls,Mt,null),k(o,gf,b),k(o,So,b),e(So,ds),e(ds,kp),w(Wr,kp,null),e(So,LT),e(So,vp),e(vp,AT),k(o,_f,b),k(o,Ve,b),w(Br,Ve,null),e(Ve,OT),e(Ve,Ur),e(Ur,NT),e(Ur,Tp),e(Tp,IT),e(Ur,DT),e(Ve,ST),e(Ve,Hr),e(Hr,WT),e(Hr,yd),e(yd,BT),e(Hr,UT),e(Ve,HT),e(Ve,Qr),e(Qr,QT),e(Qr,Vr),e(Vr,VT),e(Qr,JT),e(Ve,KT),w(cs,Ve,null),e(Ve,GT),e(Ve,ct),w(Jr,ct,null),e(ct,XT),e(ct,Wo),e(Wo,YT),e(Wo,wd),e(wd,ZT),e(Wo,ey),e(Wo,yp),e(yp,ty),e(Wo,oy),e(ct,ny),w(ps,ct,null),e(ct,sy),w(hs,ct,null),e(ct,ay),w(ms,ct,null),k(o,bf,b),k(o,Bo,b),e(Bo,fs),e(fs,wp),w(Kr,wp,null),e(Bo,ry),e(Bo,$p),e($p,iy),k(o,kf,b),k(o,Je,b),w(Gr,Je,null),e(Je,ly),e(Je,Fp),e(Fp,dy),e(Je,cy),e(Je,Xr),e(Xr,py),e(Xr,$d),e($d,hy),e(Xr,my),e(Je,fy),e(Je,Yr),e(Yr,uy),e(Yr,Zr),e(Zr,gy),e(Yr,_y),e(Je,by),w(us,Je,null),e(Je,ky),e(Je,pt),w(ei,pt,null),e(pt,vy),e(pt,Uo),e(Uo,Ty),e(Uo,Fd),e(Fd,yy),e(Uo,wy),e(Uo,xp),e(xp,$y),e(Uo,Fy),e(pt,xy),w(gs,pt,null),e(pt,Ry),w(_s,pt,null),e(pt,My),w(bs,pt,null),k(o,vf,b),k(o,Ho,b),e(Ho,ks),e(ks,Rp),w(ti,Rp,null),e(Ho,Ey),e(Ho,Mp),e(Mp,zy),k(o,Tf,b),k(o,Ke,b),w(oi,Ke,null),e(Ke,Cy),e(Ke,Ep),e(Ep,qy),e(Ke,jy),e(Ke,ni),e(ni,Py),e(ni,xd),e(xd,Ly),e(ni,Ay),e(Ke,Oy),e(Ke,si),e(si,Ny),e(si,ai),e(ai,Iy),e(si,Dy),e(Ke,Sy),w(vs,Ke,null),e(Ke,Wy),e(Ke,Et),w(ri,Et,null),e(Et,By),e(Et,Qo),e(Qo,Uy),e(Qo,Rd),e(Rd,Hy),e(Qo,Qy),e(Qo,zp),e(zp,Vy),e(Qo,Jy),e(Et,Ky),w(Ts,Et,null),e(Et,Gy),w(ys,Et,null),k(o,yf,b),k(o,Vo,b),e(Vo,ws),e(ws,Cp),w(ii,Cp,null),e(Vo,Xy),e(Vo,qp),e(qp,Yy),k(o,wf,b),k(o,Ge,b),w(li,Ge,null),e(Ge,Zy),e(Ge,jp),e(jp,ew),e(Ge,tw),e(Ge,di),e(di,ow),e(di,Md),e(Md,nw),e(di,sw),e(Ge,aw),e(Ge,ci),e(ci,rw),e(ci,pi),e(pi,iw),e(ci,lw),e(Ge,dw),w($s,Ge,null),e(Ge,cw),e(Ge,ht),w(hi,ht,null),e(ht,pw),e(ht,Jo),e(Jo,hw),e(Jo,Ed),e(Ed,mw),e(Jo,fw),e(Jo,Pp),e(Pp,uw),e(Jo,gw),e(ht,_w),w(Fs,ht,null),e(ht,bw),w(xs,ht,null),e(ht,kw),w(Rs,ht,null),k(o,$f,b),k(o,Ko,b),e(Ko,Ms),e(Ms,Lp),w(mi,Lp,null),e(Ko,vw),e(Ko,Ap),e(Ap,Tw),k(o,Ff,b),k(o,Xe,b),w(fi,Xe,null),e(Xe,yw),e(Xe,Go),e(Go,ww),e(Go,Op),e(Op,$w),e(Go,Fw),e(Go,Np),e(Np,xw),e(Go,Rw),e(Xe,Mw),e(Xe,ui),e(ui,Ew),e(ui,zd),e(zd,zw),e(ui,Cw),e(Xe,qw),e(Xe,gi),e(gi,jw),e(gi,_i),e(_i,Pw),e(gi,Lw),e(Xe,Aw),w(Es,Xe,null),e(Xe,Ow),e(Xe,mt),w(bi,mt,null),e(mt,Nw),e(mt,Xo),e(Xo,Iw),e(Xo,Cd),e(Cd,Dw),e(Xo,Sw),e(Xo,Ip),e(Ip,Ww),e(Xo,Bw),e(mt,Uw),w(zs,mt,null),e(mt,Hw),w(Cs,mt,null),e(mt,Qw),w(qs,mt,null),k(o,xf,b),k(o,Yo,b),e(Yo,js),e(js,Dp),w(ki,Dp,null),e(Yo,Vw),e(Yo,Sp),e(Sp,Jw),k(o,Rf,b),k(o,Oe,b),w(vi,Oe,null),e(Oe,Kw),e(Oe,Wp),e(Wp,Gw),e(Oe,Xw),e(Oe,Ti),e(Ti,Yw),e(Ti,qd),e(qd,Zw),e(Ti,e1),e(Oe,t1),e(Oe,yi),e(yi,o1),e(yi,wi),e(wi,n1),e(yi,s1),e(Oe,a1),e(Oe,Bp),e(Bp,r1),e(Oe,i1),e(Oe,Ut),e(Ut,Up),e(Up,$i),e($i,l1),e(Ut,d1),e(Ut,Hp),e(Hp,Fi),e(Fi,c1),e(Ut,p1),e(Ut,Qp),e(Qp,xi),e(xi,h1),e(Ut,m1),e(Ut,Vp),e(Vp,Ri),e(Ri,f1),e(Oe,u1),e(Oe,zt),w(Mi,zt,null),e(zt,g1),e(zt,Zo),e(Zo,_1),e(Zo,Jp),e(Jp,b1),e(Zo,k1),e(Zo,Kp),e(Kp,v1),e(Zo,T1),e(zt,y1),w(Ps,zt,null),e(zt,w1),w(Ls,zt,null),k(o,Mf,b),k(o,en,b),e(en,As),e(As,Gp),w(Ei,Gp,null),e(en,$1),e(en,Xp),e(Xp,F1),k(o,Ef,b),k(o,Ne,b),w(zi,Ne,null),e(Ne,x1),e(Ne,Yp),e(Yp,R1),e(Ne,M1),e(Ne,Ci),e(Ci,E1),e(Ci,jd),e(jd,z1),e(Ci,C1),e(Ne,q1),e(Ne,qi),e(qi,j1),e(qi,ji),e(ji,P1),e(qi,L1),e(Ne,A1),e(Ne,Zp),e(Zp,O1),e(Ne,N1),e(Ne,Ht),e(Ht,eh),e(eh,Pi),e(Pi,I1),e(Ht,D1),e(Ht,th),e(th,Li),e(Li,S1),e(Ht,W1),e(Ht,oh),e(oh,Ai),e(Ai,B1),e(Ht,U1),e(Ht,nh),e(nh,Oi),e(Oi,H1),e(Ne,Q1),e(Ne,Ct),w(Ni,Ct,null),e(Ct,V1),e(Ct,tn),e(tn,J1),e(tn,sh),e(sh,K1),e(tn,G1),e(tn,ah),e(ah,X1),e(tn,Y1),e(Ct,Z1),w(Os,Ct,null),e(Ct,e$),w(Ns,Ct,null),k(o,zf,b),k(o,on,b),e(on,Is),e(Is,rh),w(Ii,rh,null),e(on,t$),e(on,ih),e(ih,o$),k(o,Cf,b),k(o,Ie,b),w(Di,Ie,null),e(Ie,n$),e(Ie,Si),e(Si,s$),e(Si,lh),e(lh,a$),e(Si,r$),e(Ie,i$),e(Ie,Wi),e(Wi,l$),e(Wi,Pd),e(Pd,d$),e(Wi,c$),e(Ie,p$),e(Ie,Bi),e(Bi,h$),e(Bi,Ui),e(Ui,m$),e(Bi,f$),e(Ie,u$),e(Ie,dh),e(dh,g$),e(Ie,_$),e(Ie,Qt),e(Qt,ch),e(ch,Hi),e(Hi,b$),e(Qt,k$),e(Qt,ph),e(ph,Qi),e(Qi,v$),e(Qt,T$),e(Qt,hh),e(hh,Vi),e(Vi,y$),e(Qt,w$),e(Qt,mh),e(mh,Ji),e(Ji,$$),e(Ie,F$),e(Ie,qt),w(Ki,qt,null),e(qt,x$),e(qt,nn),e(nn,R$),e(nn,fh),e(fh,M$),e(nn,E$),e(nn,uh),e(uh,z$),e(nn,C$),e(qt,q$),w(Ds,qt,null),e(qt,j$),w(Ss,qt,null),k(o,qf,b),k(o,sn,b),e(sn,Ws),e(Ws,gh),w(Gi,gh,null),e(sn,P$),e(sn,_h),e(_h,L$),k(o,jf,b),k(o,De,b),w(Xi,De,null),e(De,A$),e(De,bh),e(bh,O$),e(De,N$),e(De,Yi),e(Yi,I$),e(Yi,Ld),e(Ld,D$),e(Yi,S$),e(De,W$),e(De,Zi),e(Zi,B$),e(Zi,el),e(el,U$),e(Zi,H$),e(De,Q$),e(De,kh),e(kh,V$),e(De,J$),e(De,Vt),e(Vt,vh),e(vh,tl),e(tl,K$),e(Vt,G$),e(Vt,Th),e(Th,ol),e(ol,X$),e(Vt,Y$),e(Vt,yh),e(yh,nl),e(nl,Z$),e(Vt,e2),e(Vt,wh),e(wh,sl),e(sl,t2),e(De,o2),e(De,jt),w(al,jt,null),e(jt,n2),e(jt,an),e(an,s2),e(an,$h),e($h,a2),e(an,r2),e(an,Fh),e(Fh,i2),e(an,l2),e(jt,d2),w(Bs,jt,null),e(jt,c2),w(Us,jt,null),k(o,Pf,b),k(o,rn,b),e(rn,Hs),e(Hs,xh),w(rl,xh,null),e(rn,p2),e(rn,Rh),e(Rh,h2),k(o,Lf,b),k(o,Se,b),w(il,Se,null),e(Se,m2),e(Se,Mh),e(Mh,f2),e(Se,u2),e(Se,ll),e(ll,g2),e(ll,Ad),e(Ad,_2),e(ll,b2),e(Se,k2),e(Se,dl),e(dl,v2),e(dl,cl),e(cl,T2),e(dl,y2),e(Se,w2),e(Se,Eh),e(Eh,$2),e(Se,F2),e(Se,Jt),e(Jt,zh),e(zh,pl),e(pl,x2),e(Jt,R2),e(Jt,Ch),e(Ch,hl),e(hl,M2),e(Jt,E2),e(Jt,qh),e(qh,ml),e(ml,z2),e(Jt,C2),e(Jt,jh),e(jh,fl),e(fl,q2),e(Se,j2),e(Se,Pt),w(ul,Pt,null),e(Pt,P2),e(Pt,ln),e(ln,L2),e(ln,Ph),e(Ph,A2),e(ln,O2),e(ln,Lh),e(Lh,N2),e(ln,I2),e(Pt,D2),w(Qs,Pt,null),e(Pt,S2),w(Vs,Pt,null),k(o,Af,b),k(o,dn,b),e(dn,Js),e(Js,Ah),w(gl,Ah,null),e(dn,W2),e(dn,Oh),e(Oh,B2),k(o,Of,b),k(o,We,b),w(_l,We,null),e(We,U2),e(We,Nh),e(Nh,H2),e(We,Q2),e(We,bl),e(bl,V2),e(bl,Od),e(Od,J2),e(bl,K2),e(We,G2),e(We,kl),e(kl,X2),e(kl,vl),e(vl,Y2),e(kl,Z2),e(We,eF),e(We,Ih),e(Ih,tF),e(We,oF),e(We,Kt),e(Kt,Dh),e(Dh,Tl),e(Tl,nF),e(Kt,sF),e(Kt,Sh),e(Sh,yl),e(yl,aF),e(Kt,rF),e(Kt,Wh),e(Wh,wl),e(wl,iF),e(Kt,lF),e(Kt,Bh),e(Bh,$l),e($l,dF),e(We,cF),e(We,Lt),w(Fl,Lt,null),e(Lt,pF),e(Lt,cn),e(cn,hF),e(cn,Uh),e(Uh,mF),e(cn,fF),e(cn,Hh),e(Hh,uF),e(cn,gF),e(Lt,_F),w(Ks,Lt,null),e(Lt,bF),w(Gs,Lt,null),k(o,Nf,b),k(o,pn,b),e(pn,Xs),e(Xs,Qh),w(xl,Qh,null),e(pn,kF),e(pn,Vh),e(Vh,vF),k(o,If,b),k(o,Be,b),w(Rl,Be,null),e(Be,TF),e(Be,hn),e(hn,yF),e(hn,Jh),e(Jh,wF),e(hn,$F),e(hn,Kh),e(Kh,FF),e(hn,xF),e(Be,RF),e(Be,Ml),e(Ml,MF),e(Ml,Nd),e(Nd,EF),e(Ml,zF),e(Be,CF),e(Be,El),e(El,qF),e(El,zl),e(zl,jF),e(El,PF),e(Be,LF),e(Be,Gh),e(Gh,AF),e(Be,OF),e(Be,Gt),e(Gt,Xh),e(Xh,Cl),e(Cl,NF),e(Gt,IF),e(Gt,Yh),e(Yh,ql),e(ql,DF),e(Gt,SF),e(Gt,Zh),e(Zh,jl),e(jl,WF),e(Gt,BF),e(Gt,em),e(em,Pl),e(Pl,UF),e(Be,HF),e(Be,At),w(Ll,At,null),e(At,QF),e(At,mn),e(mn,VF),e(mn,tm),e(tm,JF),e(mn,KF),e(mn,om),e(om,GF),e(mn,XF),e(At,YF),w(Ys,At,null),e(At,ZF),w(Zs,At,null),Df=!0},p(o,[b]){const Al={};b&2&&(Al.$$scope={dirty:b,ctx:o}),kn.$set(Al);const nm={};b&2&&(nm.$$scope={dirty:b,ctx:o}),Tn.$set(nm);const sm={};b&2&&(sm.$$scope={dirty:b,ctx:o}),yn.$set(sm);const am={};b&2&&(am.$$scope={dirty:b,ctx:o}),xn.$set(am);const Ol={};b&2&&(Ol.$$scope={dirty:b,ctx:o}),Rn.$set(Ol);const rm={};b&2&&(rm.$$scope={dirty:b,ctx:o}),zn.$set(rm);const im={};b&2&&(im.$$scope={dirty:b,ctx:o}),Cn.$set(im);const lm={};b&2&&(lm.$$scope={dirty:b,ctx:o}),jn.$set(lm);const Nl={};b&2&&(Nl.$$scope={dirty:b,ctx:o}),Pn.$set(Nl);const dm={};b&2&&(dm.$$scope={dirty:b,ctx:o}),An.$set(dm);const cm={};b&2&&(cm.$$scope={dirty:b,ctx:o}),On.$set(cm);const pm={};b&2&&(pm.$$scope={dirty:b,ctx:o}),Nn.$set(pm);const hm={};b&2&&(hm.$$scope={dirty:b,ctx:o}),Dn.$set(hm);const mm={};b&2&&(mm.$$scope={dirty:b,ctx:o}),Sn.$set(mm);const fm={};b&2&&(fm.$$scope={dirty:b,ctx:o}),Wn.$set(fm);const Xt={};b&2&&(Xt.$$scope={dirty:b,ctx:o}),Bn.$set(Xt);const Il={};b&2&&(Il.$$scope={dirty:b,ctx:o}),Un.$set(Il);const um={};b&2&&(um.$$scope={dirty:b,ctx:o}),Qn.$set(um);const gm={};b&2&&(gm.$$scope={dirty:b,ctx:o}),Vn.$set(gm);const Yt={};b&2&&(Yt.$$scope={dirty:b,ctx:o}),Kn.$set(Yt);const _m={};b&2&&(_m.$$scope={dirty:b,ctx:o}),Gn.$set(_m);const bm={};b&2&&(bm.$$scope={dirty:b,ctx:o}),Xn.$set(bm);const km={};b&2&&(km.$$scope={dirty:b,ctx:o}),Zn.$set(km);const Id={};b&2&&(Id.$$scope={dirty:b,ctx:o}),es.$set(Id);const vm={};b&2&&(vm.$$scope={dirty:b,ctx:o}),ts.$set(vm);const fn={};b&2&&(fn.$$scope={dirty:b,ctx:o}),ns.$set(fn);const Tm={};b&2&&(Tm.$$scope={dirty:b,ctx:o}),ss.$set(Tm);const ym={};b&2&&(ym.$$scope={dirty:b,ctx:o}),as.$set(ym);const Dl={};b&2&&(Dl.$$scope={dirty:b,ctx:o}),is.$set(Dl);const wm={};b&2&&(wm.$$scope={dirty:b,ctx:o}),ls.$set(wm);const $m={};b&2&&($m.$$scope={dirty:b,ctx:o}),cs.$set($m);const Fm={};b&2&&(Fm.$$scope={dirty:b,ctx:o}),ps.$set(Fm);const wt={};b&2&&(wt.$$scope={dirty:b,ctx:o}),hs.$set(wt);const Zt={};b&2&&(Zt.$$scope={dirty:b,ctx:o}),ms.$set(Zt);const xm={};b&2&&(xm.$$scope={dirty:b,ctx:o}),us.$set(xm);const Rm={};b&2&&(Rm.$$scope={dirty:b,ctx:o}),gs.$set(Rm);const Mm={};b&2&&(Mm.$$scope={dirty:b,ctx:o}),_s.$set(Mm);const un={};b&2&&(un.$$scope={dirty:b,ctx:o}),bs.$set(un);const Em={};b&2&&(Em.$$scope={dirty:b,ctx:o}),vs.$set(Em);const zm={};b&2&&(zm.$$scope={dirty:b,ctx:o}),Ts.$set(zm);const gn={};b&2&&(gn.$$scope={dirty:b,ctx:o}),ys.$set(gn);const Cm={};b&2&&(Cm.$$scope={dirty:b,ctx:o}),$s.$set(Cm);const qm={};b&2&&(qm.$$scope={dirty:b,ctx:o}),Fs.$set(qm);const Sl={};b&2&&(Sl.$$scope={dirty:b,ctx:o}),xs.$set(Sl);const jm={};b&2&&(jm.$$scope={dirty:b,ctx:o}),Rs.$set(jm);const Pm={};b&2&&(Pm.$$scope={dirty:b,ctx:o}),Es.$set(Pm);const Lm={};b&2&&(Lm.$$scope={dirty:b,ctx:o}),zs.$set(Lm);const Fe={};b&2&&(Fe.$$scope={dirty:b,ctx:o}),Cs.$set(Fe);const Am={};b&2&&(Am.$$scope={dirty:b,ctx:o}),qs.$set(Am);const Om={};b&2&&(Om.$$scope={dirty:b,ctx:o}),Ps.$set(Om);const Wl={};b&2&&(Wl.$$scope={dirty:b,ctx:o}),Ls.$set(Wl);const Nm={};b&2&&(Nm.$$scope={dirty:b,ctx:o}),Os.$set(Nm);const Bl={};b&2&&(Bl.$$scope={dirty:b,ctx:o}),Ns.$set(Bl);const Im={};b&2&&(Im.$$scope={dirty:b,ctx:o}),Ds.$set(Im);const _n={};b&2&&(_n.$$scope={dirty:b,ctx:o}),Ss.$set(_n);const Dm={};b&2&&(Dm.$$scope={dirty:b,ctx:o}),Bs.$set(Dm);const Ul={};b&2&&(Ul.$$scope={dirty:b,ctx:o}),Us.$set(Ul);const Dd={};b&2&&(Dd.$$scope={dirty:b,ctx:o}),Qs.$set(Dd);const Sm={};b&2&&(Sm.$$scope={dirty:b,ctx:o}),Vs.$set(Sm);const Sd={};b&2&&(Sd.$$scope={dirty:b,ctx:o}),Ks.$set(Sd);const Wm={};b&2&&(Wm.$$scope={dirty:b,ctx:o}),Gs.$set(Wm);const Hl={};b&2&&(Hl.$$scope={dirty:b,ctx:o}),Ys.$set(Hl);const Ql={};b&2&&(Ql.$$scope={dirty:b,ctx:o}),Zs.$set(Ql)},i(o){Df||($(l.$$.fragment,o),$(se.$$.fragment,o),$(ya.$$.fragment,o),$(wa.$$.fragment,o),$(kn.$$.fragment,o),$(Fa.$$.fragment,o),$(xa.$$.fragment,o),$(Tn.$$.fragment,o),$(yn.$$.fragment,o),$(Ea.$$.fragment,o),$(Ca.$$.fragment,o),$(ja.$$.fragment,o),$(Pa.$$.fragment,o),$(La.$$.fragment,o),$(Aa.$$.fragment,o),$(xn.$$.fragment,o),$(Rn.$$.fragment,o),$(Da.$$.fragment,o),$(Sa.$$.fragment,o),$(Wa.$$.fragment,o),$(Ja.$$.fragment,o),$(zn.$$.fragment,o),$(Cn.$$.fragment,o),$(Ka.$$.fragment,o),$(Ga.$$.fragment,o),$(tr.$$.fragment,o),$(jn.$$.fragment,o),$(Pn.$$.fragment,o),$(or.$$.fragment,o),$(nr.$$.fragment,o),$(lr.$$.fragment,o),$(An.$$.fragment,o),$(On.$$.fragment,o),$(Nn.$$.fragment,o),$(dr.$$.fragment,o),$(cr.$$.fragment,o),$(fr.$$.fragment,o),$(Dn.$$.fragment,o),$(Sn.$$.fragment,o),$(Wn.$$.fragment,o),$(Bn.$$.fragment,o),$(Un.$$.fragment,o),$(ur.$$.fragment,o),$(gr.$$.fragment,o),$(vr.$$.fragment,o),$(Qn.$$.fragment,o),$(Vn.$$.fragment,o),$(Tr.$$.fragment,o),$(yr.$$.fragment,o),$(xr.$$.fragment,o),$(Kn.$$.fragment,o),$(Gn.$$.fragment,o),$(Xn.$$.fragment,o),$(Rr.$$.fragment,o),$(Mr.$$.fragment,o),$(qr.$$.fragment,o),$(Zn.$$.fragment,o),$(es.$$.fragment,o),$(ts.$$.fragment,o),$(jr.$$.fragment,o),$(Pr.$$.fragment,o),$(ns.$$.fragment,o),$(Nr.$$.fragment,o),$(ss.$$.fragment,o),$(as.$$.fragment,o),$(Ir.$$.fragment,o),$(Dr.$$.fragment,o),$(Sr.$$.fragment,o),$(is.$$.fragment,o),$(ls.$$.fragment,o),$(Wr.$$.fragment,o),$(Br.$$.fragment,o),$(cs.$$.fragment,o),$(Jr.$$.fragment,o),$(ps.$$.fragment,o),$(hs.$$.fragment,o),$(ms.$$.fragment,o),$(Kr.$$.fragment,o),$(Gr.$$.fragment,o),$(us.$$.fragment,o),$(ei.$$.fragment,o),$(gs.$$.fragment,o),$(_s.$$.fragment,o),$(bs.$$.fragment,o),$(ti.$$.fragment,o),$(oi.$$.fragment,o),$(vs.$$.fragment,o),$(ri.$$.fragment,o),$(Ts.$$.fragment,o),$(ys.$$.fragment,o),$(ii.$$.fragment,o),$(li.$$.fragment,o),$($s.$$.fragment,o),$(hi.$$.fragment,o),$(Fs.$$.fragment,o),$(xs.$$.fragment,o),$(Rs.$$.fragment,o),$(mi.$$.fragment,o),$(fi.$$.fragment,o),$(Es.$$.fragment,o),$(bi.$$.fragment,o),$(zs.$$.fragment,o),$(Cs.$$.fragment,o),$(qs.$$.fragment,o),$(ki.$$.fragment,o),$(vi.$$.fragment,o),$(Mi.$$.fragment,o),$(Ps.$$.fragment,o),$(Ls.$$.fragment,o),$(Ei.$$.fragment,o),$(zi.$$.fragment,o),$(Ni.$$.fragment,o),$(Os.$$.fragment,o),$(Ns.$$.fragment,o),$(Ii.$$.fragment,o),$(Di.$$.fragment,o),$(Ki.$$.fragment,o),$(Ds.$$.fragment,o),$(Ss.$$.fragment,o),$(Gi.$$.fragment,o),$(Xi.$$.fragment,o),$(al.$$.fragment,o),$(Bs.$$.fragment,o),$(Us.$$.fragment,o),$(rl.$$.fragment,o),$(il.$$.fragment,o),$(ul.$$.fragment,o),$(Qs.$$.fragment,o),$(Vs.$$.fragment,o),$(gl.$$.fragment,o),$(_l.$$.fragment,o),$(Fl.$$.fragment,o),$(Ks.$$.fragment,o),$(Gs.$$.fragment,o),$(xl.$$.fragment,o),$(Rl.$$.fragment,o),$(Ll.$$.fragment,o),$(Ys.$$.fragment,o),$(Zs.$$.fragment,o),Df=!0)},o(o){F(l.$$.fragment,o),F(se.$$.fragment,o),F(ya.$$.fragment,o),F(wa.$$.fragment,o),F(kn.$$.fragment,o),F(Fa.$$.fragment,o),F(xa.$$.fragment,o),F(Tn.$$.fragment,o),F(yn.$$.fragment,o),F(Ea.$$.fragment,o),F(Ca.$$.fragment,o),F(ja.$$.fragment,o),F(Pa.$$.fragment,o),F(La.$$.fragment,o),F(Aa.$$.fragment,o),F(xn.$$.fragment,o),F(Rn.$$.fragment,o),F(Da.$$.fragment,o),F(Sa.$$.fragment,o),F(Wa.$$.fragment,o),F(Ja.$$.fragment,o),F(zn.$$.fragment,o),F(Cn.$$.fragment,o),F(Ka.$$.fragment,o),F(Ga.$$.fragment,o),F(tr.$$.fragment,o),F(jn.$$.fragment,o),F(Pn.$$.fragment,o),F(or.$$.fragment,o),F(nr.$$.fragment,o),F(lr.$$.fragment,o),F(An.$$.fragment,o),F(On.$$.fragment,o),F(Nn.$$.fragment,o),F(dr.$$.fragment,o),F(cr.$$.fragment,o),F(fr.$$.fragment,o),F(Dn.$$.fragment,o),F(Sn.$$.fragment,o),F(Wn.$$.fragment,o),F(Bn.$$.fragment,o),F(Un.$$.fragment,o),F(ur.$$.fragment,o),F(gr.$$.fragment,o),F(vr.$$.fragment,o),F(Qn.$$.fragment,o),F(Vn.$$.fragment,o),F(Tr.$$.fragment,o),F(yr.$$.fragment,o),F(xr.$$.fragment,o),F(Kn.$$.fragment,o),F(Gn.$$.fragment,o),F(Xn.$$.fragment,o),F(Rr.$$.fragment,o),F(Mr.$$.fragment,o),F(qr.$$.fragment,o),F(Zn.$$.fragment,o),F(es.$$.fragment,o),F(ts.$$.fragment,o),F(jr.$$.fragment,o),F(Pr.$$.fragment,o),F(ns.$$.fragment,o),F(Nr.$$.fragment,o),F(ss.$$.fragment,o),F(as.$$.fragment,o),F(Ir.$$.fragment,o),F(Dr.$$.fragment,o),F(Sr.$$.fragment,o),F(is.$$.fragment,o),F(ls.$$.fragment,o),F(Wr.$$.fragment,o),F(Br.$$.fragment,o),F(cs.$$.fragment,o),F(Jr.$$.fragment,o),F(ps.$$.fragment,o),F(hs.$$.fragment,o),F(ms.$$.fragment,o),F(Kr.$$.fragment,o),F(Gr.$$.fragment,o),F(us.$$.fragment,o),F(ei.$$.fragment,o),F(gs.$$.fragment,o),F(_s.$$.fragment,o),F(bs.$$.fragment,o),F(ti.$$.fragment,o),F(oi.$$.fragment,o),F(vs.$$.fragment,o),F(ri.$$.fragment,o),F(Ts.$$.fragment,o),F(ys.$$.fragment,o),F(ii.$$.fragment,o),F(li.$$.fragment,o),F($s.$$.fragment,o),F(hi.$$.fragment,o),F(Fs.$$.fragment,o),F(xs.$$.fragment,o),F(Rs.$$.fragment,o),F(mi.$$.fragment,o),F(fi.$$.fragment,o),F(Es.$$.fragment,o),F(bi.$$.fragment,o),F(zs.$$.fragment,o),F(Cs.$$.fragment,o),F(qs.$$.fragment,o),F(ki.$$.fragment,o),F(vi.$$.fragment,o),F(Mi.$$.fragment,o),F(Ps.$$.fragment,o),F(Ls.$$.fragment,o),F(Ei.$$.fragment,o),F(zi.$$.fragment,o),F(Ni.$$.fragment,o),F(Os.$$.fragment,o),F(Ns.$$.fragment,o),F(Ii.$$.fragment,o),F(Di.$$.fragment,o),F(Ki.$$.fragment,o),F(Ds.$$.fragment,o),F(Ss.$$.fragment,o),F(Gi.$$.fragment,o),F(Xi.$$.fragment,o),F(al.$$.fragment,o),F(Bs.$$.fragment,o),F(Us.$$.fragment,o),F(rl.$$.fragment,o),F(il.$$.fragment,o),F(ul.$$.fragment,o),F(Qs.$$.fragment,o),F(Vs.$$.fragment,o),F(gl.$$.fragment,o),F(_l.$$.fragment,o),F(Fl.$$.fragment,o),F(Ks.$$.fragment,o),F(Gs.$$.fragment,o),F(xl.$$.fragment,o),F(Rl.$$.fragment,o),F(Ll.$$.fragment,o),F(Ys.$$.fragment,o),F(Zs.$$.fragment,o),Df=!1},d(o){t(d),o&&t(g),o&&t(c),x(l),o&&t(I),o&&t(z),x(se),o&&t(ue),o&&t(K),o&&t(j),o&&t(ie),o&&t(ge),o&&t(le),o&&t(_e),o&&t(de),o&&t(W),o&&t(ce),o&&t(B),o&&t(G),o&&t(Um),o&&t(eo),o&&t(Hm),o&&t(go),x(ya),o&&t(Qm),o&&t(et),x(wa),x(kn),o&&t(Vm),o&&t(ko),x(Fa),o&&t(Jm),o&&t(we),x(xa),x(Tn),x(yn),x(Ea),x(Ca),x(ja),x(Pa),o&&t(Km),o&&t(vo),x(La),o&&t(Gm),o&&t(Le),x(Aa),x(xn),x(Rn),x(Da),o&&t(Xm),o&&t(To),x(Sa),o&&t(Ym),o&&t(Ae),x(Wa),x(Ja),x(zn),x(Cn),o&&t(Zm),o&&t(wo),x(Ka),o&&t(ef),o&&t(tt),x(Ga),x(tr),x(jn),x(Pn),o&&t(tf),o&&t(Fo),x(or),o&&t(of),o&&t(ot),x(nr),x(lr),x(An),x(On),x(Nn),o&&t(nf),o&&t(Ro),x(dr),o&&t(sf),o&&t(nt),x(cr),x(fr),x(Dn),x(Sn),x(Wn),x(Bn),x(Un),o&&t(af),o&&t(Eo),x(ur),o&&t(rf),o&&t(st),x(gr),x(vr),x(Qn),x(Vn),o&&t(lf),o&&t(Co),x(Tr),o&&t(df),o&&t(at),x(yr),x(xr),x(Kn),x(Gn),x(Xn),o&&t(cf),o&&t(jo),x(Rr),o&&t(pf),o&&t(rt),x(Mr),x(qr),x(Zn),x(es),x(ts),o&&t(hf),o&&t(Ao),x(jr),o&&t(mf),o&&t(Qe),x(Pr),x(ns),x(Nr),x(ss),x(as),o&&t(ff),o&&t(No),x(Ir),o&&t(uf),o&&t(Io),x(Dr),x(Sr),x(is),x(ls),o&&t(gf),o&&t(So),x(Wr),o&&t(_f),o&&t(Ve),x(Br),x(cs),x(Jr),x(ps),x(hs),x(ms),o&&t(bf),o&&t(Bo),x(Kr),o&&t(kf),o&&t(Je),x(Gr),x(us),x(ei),x(gs),x(_s),x(bs),o&&t(vf),o&&t(Ho),x(ti),o&&t(Tf),o&&t(Ke),x(oi),x(vs),x(ri),x(Ts),x(ys),o&&t(yf),o&&t(Vo),x(ii),o&&t(wf),o&&t(Ge),x(li),x($s),x(hi),x(Fs),x(xs),x(Rs),o&&t($f),o&&t(Ko),x(mi),o&&t(Ff),o&&t(Xe),x(fi),x(Es),x(bi),x(zs),x(Cs),x(qs),o&&t(xf),o&&t(Yo),x(ki),o&&t(Rf),o&&t(Oe),x(vi),x(Mi),x(Ps),x(Ls),o&&t(Mf),o&&t(en),x(Ei),o&&t(Ef),o&&t(Ne),x(zi),x(Ni),x(Os),x(Ns),o&&t(zf),o&&t(on),x(Ii),o&&t(Cf),o&&t(Ie),x(Di),x(Ki),x(Ds),x(Ss),o&&t(qf),o&&t(sn),x(Gi),o&&t(jf),o&&t(De),x(Xi),x(al),x(Bs),x(Us),o&&t(Pf),o&&t(rn),x(rl),o&&t(Lf),o&&t(Se),x(il),x(ul),x(Qs),x(Vs),o&&t(Af),o&&t(dn),x(gl),o&&t(Of),o&&t(We),x(_l),x(Fl),x(Ks),x(Gs),o&&t(Nf),o&&t(pn),x(xl),o&&t(If),o&&t(Be),x(Rl),x(Ll),x(Ys),x(Zs)}}}const GE={local:"roberta",sections:[{local:"overview",title:"Overview"},{local:"transformers.RobertaConfig",title:"RobertaConfig"},{local:"transformers.RobertaTokenizer",title:"RobertaTokenizer"},{local:"transformers.RobertaTokenizerFast",title:"RobertaTokenizerFast"},{local:"transformers.RobertaModel",title:"RobertaModel"},{local:"transformers.RobertaForCausalLM",title:"RobertaForCausalLM"},{local:"transformers.RobertaForMaskedLM",title:"RobertaForMaskedLM"},{local:"transformers.RobertaForSequenceClassification",title:"RobertaForSequenceClassification"},{local:"transformers.RobertaForMultipleChoice",title:"RobertaForMultipleChoice"},{local:"transformers.RobertaForTokenClassification",title:"RobertaForTokenClassification"},{local:"transformers.RobertaForQuestionAnswering",title:"RobertaForQuestionAnswering"},{local:"transformers.TFRobertaModel",title:"TFRobertaModel"},{local:"transformers.TFRobertaForCausalLM",title:"TFRobertaForCausalLM"},{local:"transformers.TFRobertaForMaskedLM",title:"TFRobertaForMaskedLM"},{local:"transformers.TFRobertaForSequenceClassification",title:"TFRobertaForSequenceClassification"},{local:"transformers.TFRobertaForMultipleChoice",title:"TFRobertaForMultipleChoice"},{local:"transformers.TFRobertaForTokenClassification",title:"TFRobertaForTokenClassification"},{local:"transformers.TFRobertaForQuestionAnswering",title:"TFRobertaForQuestionAnswering"},{local:"transformers.FlaxRobertaModel",title:"FlaxRobertaModel"},{local:"transformers.FlaxRobertaForCausalLM",title:"FlaxRobertaForCausalLM"},{local:"transformers.FlaxRobertaForMaskedLM",title:"FlaxRobertaForMaskedLM"},{local:"transformers.FlaxRobertaForSequenceClassification",title:"FlaxRobertaForSequenceClassification"},{local:"transformers.FlaxRobertaForMultipleChoice",title:"FlaxRobertaForMultipleChoice"},{local:"transformers.FlaxRobertaForTokenClassification",title:"FlaxRobertaForTokenClassification"},{local:"transformers.FlaxRobertaForQuestionAnswering",title:"FlaxRobertaForQuestionAnswering"}],title:"RoBERTa"};function XE(R){return IM(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class s3 extends LM{constructor(d){super();AM(this,d,XE,KE,OM,{})}}export{s3 as default,GE as metadata};
