import{S as IT,i as ST,s as NT,e as n,k as p,w as v,t as a,M as DT,c as s,d as t,m as h,a as r,x as B,h as i,b as c,F as e,g as k,y,q as $,o as w,B as T,v as WT,L as E}from"../../chunks/vendor-6b77c823.js";import{T as G}from"../../chunks/Tip-39098574.js";import{D as q}from"../../chunks/Docstring-1088f2fb.js";import{C as P}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as z}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as M}from"../../chunks/ExampleCodeBlock-5212b321.js";function UT(x){let d,_,m,f,b;return f=new P({props:{code:"",highlighted:""}}),{c(){d=n("p"),_=a("Example:"),m=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var g=r(d);_=i(g,"Example:"),g.forEach(t),m=h(l),B(f.$$.fragment,l)},m(l,g){k(l,d,g),e(d,_),k(l,m,g),y(f,l,g),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){w(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),T(f,l)}}}function QT(x){let d,_,m,f,b;return f=new P({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=n("p"),_=a("sequence pair mask has the following format:"),m=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var g=r(d);_=i(g,"sequence pair mask has the following format:"),g.forEach(t),m=h(l),B(f.$$.fragment,l)},m(l,g){k(l,d,g),e(d,_),k(l,m,g),y(f,l,g),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){w(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),T(f,l)}}}function VT(x){let d,_,m,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var g=r(d);_=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(g,"CODE",{});var F=r(m);f=i(F,"Module"),F.forEach(t),b=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(l,g){k(l,d,g),e(d,_),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function HT(x){let d,_,m,f,b;return f=new P({props:{code:`from transformers import BigBirdTokenizer, BigBirdModel
import torch

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = BigBirdModel.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdModel.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),_=a("Example:"),m=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var g=r(d);_=i(g,"Example:"),g.forEach(t),m=h(l),B(f.$$.fragment,l)},m(l,g){k(l,d,g),e(d,_),k(l,m,g),y(f,l,g),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){w(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),T(f,l)}}}function JT(x){let d,_,m,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var g=r(d);_=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(g,"CODE",{});var F=r(m);f=i(F,"Module"),F.forEach(t),b=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(l,g){k(l,d,g),e(d,_),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function RT(x){let d,_,m,f,b;return f=new P({props:{code:`from transformers import BigBirdTokenizer, BigBirdForPreTraining
import torch

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = BigBirdForPreTraining.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.prediction_logits
seq_relationship_logits = outputs.seq_relationship_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForPreTraining.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=n("p"),_=a("Example:"),m=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var g=r(d);_=i(g,"Example:"),g.forEach(t),m=h(l),B(f.$$.fragment,l)},m(l,g){k(l,d,g),e(d,_),k(l,m,g),y(f,l,g),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){w(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),T(f,l)}}}function GT(x){let d,_,m,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var g=r(d);_=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(g,"CODE",{});var F=r(m);f=i(F,"Module"),F.forEach(t),b=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(l,g){k(l,d,g),e(d,_),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function KT(x){let d,_,m,f,b;return f=new P({props:{code:`from transformers import BigBirdTokenizer, BigBirdForCausalLM, BigBirdConfig
import torch

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
config = BigBirdConfig.from_pretrained("google/bigbird-roberta-base")
config.is_decoder = True
model = BigBirdForCausalLM.from_pretrained("google/bigbird-roberta-base", config=config)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdForCausalLM, BigBirdConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = BigBirdConfig.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForCausalLM.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),m=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var g=r(d);_=i(g,"Example:"),g.forEach(t),m=h(l),B(f.$$.fragment,l)},m(l,g){k(l,d,g),e(d,_),k(l,m,g),y(f,l,g),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){w(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),T(f,l)}}}function XT(x){let d,_,m,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var g=r(d);_=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(g,"CODE",{});var F=r(m);f=i(F,"Module"),F.forEach(t),b=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(l,g){k(l,d,g),e(d,_),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function YT(x){let d,_,m,f,b;return f=new P({props:{code:`from transformers import BigBirdTokenizer, BigBirdForMaskedLM
import torch

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = BigBirdForMaskedLM.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=n("p"),_=a("Example:"),m=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var g=r(d);_=i(g,"Example:"),g.forEach(t),m=h(l),B(f.$$.fragment,l)},m(l,g){k(l,d,g),e(d,_),k(l,m,g),y(f,l,g),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){w(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),T(f,l)}}}function ZT(x){let d,_;return d=new P({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(m){B(d.$$.fragment,m)},m(m,f){y(d,m,f),_=!0},p:E,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){w(d.$$.fragment,m),_=!1},d(m){T(d,m)}}}function e0(x){let d,_,m,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var g=r(d);_=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(g,"CODE",{});var F=r(m);f=i(F,"Module"),F.forEach(t),b=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(l,g){k(l,d,g),e(d,_),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function t0(x){let d,_,m,f,b;return f=new P({props:{code:`import torch
from transformers import BigBirdTokenizer, BigBirdForSequenceClassification

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = BigBirdForSequenceClassification.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=n("p"),_=a("Example of single-label classification:"),m=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var g=r(d);_=i(g,"Example of single-label classification:"),g.forEach(t),m=h(l),B(f.$$.fragment,l)},m(l,g){k(l,d,g),e(d,_),k(l,m,g),y(f,l,g),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){w(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),T(f,l)}}}function o0(x){let d,_;return d=new P({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = BigBirdForSequenceClassification.from_pretrained("google/bigbird-roberta-base", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(m){B(d.$$.fragment,m)},m(m,f){y(d,m,f),_=!0},p:E,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){w(d.$$.fragment,m),_=!1},d(m){T(d,m)}}}function n0(x){let d,_,m,f,b;return f=new P({props:{code:`import torch
from transformers import BigBirdTokenizer, BigBirdForSequenceClassification

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = BigBirdForSequenceClassification.from_pretrained("google/bigbird-roberta-base", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=n("p"),_=a("Example of multi-label classification:"),m=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var g=r(d);_=i(g,"Example of multi-label classification:"),g.forEach(t),m=h(l),B(f.$$.fragment,l)},m(l,g){k(l,d,g),e(d,_),k(l,m,g),y(f,l,g),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){w(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),T(f,l)}}}function s0(x){let d,_;return d=new P({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = BigBirdForSequenceClassification.from_pretrained("google/bigbird-roberta-base", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(d.$$.fragment)},l(m){B(d.$$.fragment,m)},m(m,f){y(d,m,f),_=!0},p:E,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){w(d.$$.fragment,m),_=!1},d(m){T(d,m)}}}function r0(x){let d,_,m,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var g=r(d);_=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(g,"CODE",{});var F=r(m);f=i(F,"Module"),F.forEach(t),b=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(l,g){k(l,d,g),e(d,_),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function a0(x){let d,_,m,f,b;return f=new P({props:{code:`from transformers import BigBirdTokenizer, BigBirdForMultipleChoice
import torch

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = BigBirdForMultipleChoice.from_pretrained("google/bigbird-roberta-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),m=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var g=r(d);_=i(g,"Example:"),g.forEach(t),m=h(l),B(f.$$.fragment,l)},m(l,g){k(l,d,g),e(d,_),k(l,m,g),y(f,l,g),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){w(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),T(f,l)}}}function i0(x){let d,_,m,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var g=r(d);_=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(g,"CODE",{});var F=r(m);f=i(F,"Module"),F.forEach(t),b=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(l,g){k(l,d,g),e(d,_),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function l0(x){let d,_,m,f,b;return f=new P({props:{code:`from transformers import BigBirdTokenizer, BigBirdForTokenClassification
import torch

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = BigBirdForTokenClassification.from_pretrained("google/bigbird-roberta-base")

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
predicted_tokens_classes
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForTokenClassification.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

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
`}}),{c(){d=n("p"),_=a("Example:"),m=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var g=r(d);_=i(g,"Example:"),g.forEach(t),m=h(l),B(f.$$.fragment,l)},m(l,g){k(l,d,g),e(d,_),k(l,m,g),y(f,l,g),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){w(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),T(f,l)}}}function d0(x){let d,_;return d=new P({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(m){B(d.$$.fragment,m)},m(m,f){y(d,m,f),_=!0},p:E,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){w(d.$$.fragment,m),_=!1},d(m){T(d,m)}}}function c0(x){let d,_,m,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var g=r(d);_=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(g,"CODE",{});var F=r(m);f=i(F,"Module"),F.forEach(t),b=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(l,g){k(l,d,g),e(d,_),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function p0(x){let d,_,m,f,b;return f=new P({props:{code:`from transformers import BigBirdTokenizer, BigBirdForQuestionAnswering
import torch

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-base-trivia-itc")
model = BigBirdForQuestionAnswering.from_pretrained("google/bigbird-base-trivia-itc")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, BigBirdForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-base-trivia-itc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BigBirdForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/bigbird-base-trivia-itc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=n("p"),_=a("Example:"),m=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var g=r(d);_=i(g,"Example:"),g.forEach(t),m=h(l),B(f.$$.fragment,l)},m(l,g){k(l,d,g),e(d,_),k(l,m,g),y(f,l,g),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){w(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),T(f,l)}}}function h0(x){let d,_;return d=new P({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(m){B(d.$$.fragment,m)},m(m,f){y(d,m,f),_=!0},p:E,i(m){_||($(d.$$.fragment,m),_=!0)},o(m){w(d.$$.fragment,m),_=!1},d(m){T(d,m)}}}function m0(x){let d,_,m,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var g=r(d);_=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(g,"CODE",{});var F=r(m);f=i(F,"Module"),F.forEach(t),b=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(l,g){k(l,d,g),e(d,_),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function g0(x){let d,_,m,f,b;return f=new P({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdModel

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdModel.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdModel.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),_=a("Example:"),m=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var g=r(d);_=i(g,"Example:"),g.forEach(t),m=h(l),B(f.$$.fragment,l)},m(l,g){k(l,d,g),e(d,_),k(l,m,g),y(f,l,g),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){w(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),T(f,l)}}}function f0(x){let d,_,m,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var g=r(d);_=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(g,"CODE",{});var F=r(m);f=i(F,"Module"),F.forEach(t),b=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(l,g){k(l,d,g),e(d,_),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function u0(x){let d,_,m,f,b;return f=new P({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForPreTraining

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForPreTraining.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

prediction_logits = outputs.prediction_logits
seq_relationship_logits = outputs.seq_relationship_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForPreTraining.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=n("p"),_=a("Example:"),m=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var g=r(d);_=i(g,"Example:"),g.forEach(t),m=h(l),B(f.$$.fragment,l)},m(l,g){k(l,d,g),e(d,_),k(l,m,g),y(f,l,g),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){w(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),T(f,l)}}}function _0(x){let d,_,m,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var g=r(d);_=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(g,"CODE",{});var F=r(m);f=i(F,"Module"),F.forEach(t),b=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(l,g){k(l,d,g),e(d,_),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function b0(x){let d,_,m,f,b;return f=new P({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForMaskedLM

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForMaskedLM.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),m=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var g=r(d);_=i(g,"Example:"),g.forEach(t),m=h(l),B(f.$$.fragment,l)},m(l,g){k(l,d,g),e(d,_),k(l,m,g),y(f,l,g),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){w(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),T(f,l)}}}function k0(x){let d,_,m,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var g=r(d);_=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(g,"CODE",{});var F=r(m);f=i(F,"Module"),F.forEach(t),b=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(l,g){k(l,d,g),e(d,_),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function v0(x){let d,_,m,f,b;return f=new P({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForSequenceClassification

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForSequenceClassification.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),m=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var g=r(d);_=i(g,"Example:"),g.forEach(t),m=h(l),B(f.$$.fragment,l)},m(l,g){k(l,d,g),e(d,_),k(l,m,g),y(f,l,g),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){w(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),T(f,l)}}}function B0(x){let d,_,m,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var g=r(d);_=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(g,"CODE",{});var F=r(m);f=i(F,"Module"),F.forEach(t),b=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(l,g){k(l,d,g),e(d,_),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function y0(x){let d,_,m,f,b;return f=new P({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForMultipleChoice

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForMultipleChoice.from_pretrained("google/bigbird-roberta-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="jax", padding=True)
outputs = model(**{k: v[None, :] for k, v in encoding.items()})

logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v[<span class="hljs-literal">None</span>, :] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()})

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),m=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var g=r(d);_=i(g,"Example:"),g.forEach(t),m=h(l),B(f.$$.fragment,l)},m(l,g){k(l,d,g),e(d,_),k(l,m,g),y(f,l,g),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){w(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),T(f,l)}}}function $0(x){let d,_,m,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var g=r(d);_=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(g,"CODE",{});var F=r(m);f=i(F,"Module"),F.forEach(t),b=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(l,g){k(l,d,g),e(d,_),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function w0(x){let d,_,m,f,b;return f=new P({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForTokenClassification

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForTokenClassification.from_pretrained("google/bigbird-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForTokenClassification.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),_=a("Example:"),m=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var g=r(d);_=i(g,"Example:"),g.forEach(t),m=h(l),B(f.$$.fragment,l)},m(l,g){k(l,d,g),e(d,_),k(l,m,g),y(f,l,g),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){w(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),T(f,l)}}}function T0(x){let d,_,m,f,b;return{c(){d=n("p"),_=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),f=a("Module"),b=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var g=r(d);_=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s(g,"CODE",{});var F=r(m);f=i(F,"Module"),F.forEach(t),b=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(l,g){k(l,d,g),e(d,_),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function x0(x){let d,_,m,f,b;return f=new P({props:{code:`from transformers import BigBirdTokenizer, FlaxBigBirdForQuestionAnswering

tokenizer = BigBirdTokenizer.from_pretrained("google/bigbird-roberta-base")
model = FlaxBigBirdForQuestionAnswering.from_pretrained("google/bigbird-roberta-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BigBirdTokenizer, FlaxBigBirdForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BigBirdTokenizer.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBigBirdForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/bigbird-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=n("p"),_=a("Example:"),m=p(),v(f.$$.fragment)},l(l){d=s(l,"P",{});var g=r(d);_=i(g,"Example:"),g.forEach(t),m=h(l),B(f.$$.fragment,l)},m(l,g){k(l,d,g),e(d,_),k(l,m,g),y(f,l,g),b=!0},p:E,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){w(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),T(f,l)}}}function F0(x){let d,_,m,f,b,l,g,F,Ah,Dc,Ve,It,bi,wn,Lh,ki,Oh,Wc,St,Ih,Tn,Sh,Nh,Uc,ga,Dh,Qc,fa,vi,Wh,Vc,ua,Uh,Hc,V,xn,Qh,Fn,Vh,Hh,Jh,de,Rh,Bi,Gh,Kh,yi,Xh,Yh,$i,Zh,em,wi,tm,om,nm,Ti,sm,rm,xi,am,im,qn,lm,Fi,dm,cm,pm,_a,hm,qi,mm,Jc,Oe,gm,zn,fm,um,Mn,_m,bm,Rc,He,Nt,zi,En,km,Mi,vm,Gc,C,Pn,Bm,Je,ym,ba,$m,wm,Cn,Tm,xm,Fm,Re,qm,ka,zm,Mm,va,Em,Pm,Cm,Dt,jm,Ei,Pi,Ci,ji,Am,Lm,Ai,Li,jn,Wt,Ut,Oi,An,Om,Ii,Im,Sm,Si,Nm,Dm,Ni,Di,Ln,Qt,Vt,Wi,On,Wm,Ui,Um,Qm,Qi,Vm,Hm,Vi,Hi,Ji,Ht,Jt,Ri,In,Jm,Gi,Rm,Kc,Ge,Rt,Ki,Sn,Gm,Xi,Km,Xc,j,Nn,Xm,Dn,Ym,Wn,Zm,eg,tg,Un,og,Ba,ng,sg,rg,Ie,Qn,ag,Yi,ig,lg,Vn,ya,dg,Zi,cg,pg,$a,hg,el,mg,gg,Gt,Hn,fg,Jn,ug,tl,_g,bg,kg,Kt,Rn,vg,Ke,Bg,ol,yg,$g,nl,wg,Tg,xg,wa,Gn,Yc,Xe,Xt,sl,Kn,Fg,rl,qg,Zc,H,Xn,zg,Fe,Mg,al,Eg,Pg,Yn,Cg,jg,Ta,Ag,Lg,Og,Se,Zn,Ig,il,Sg,Ng,es,xa,Dg,ll,Wg,Ug,Fa,Qg,dl,Vg,Hg,fe,ts,Jg,cl,Rg,Gg,Yt,Kg,pl,Xg,Yg,Zt,os,Zg,ns,ef,hl,tf,of,ep,Ye,eo,ml,ss,nf,gl,sf,tp,Ze,rs,rf,as,af,qa,lf,df,op,et,to,fl,is,cf,ul,pf,np,J,ls,hf,ds,mf,cs,gf,ff,uf,ps,_f,hs,bf,kf,vf,Q,Bf,_l,yf,$f,bl,wf,Tf,kl,xf,Ff,vl,qf,zf,Bl,Mf,Ef,yl,Pf,Cf,jf,ue,ms,Af,tt,Lf,za,Of,If,$l,Sf,Nf,Df,oo,Wf,no,sp,ot,so,wl,gs,Uf,Tl,Qf,rp,nt,fs,Vf,_e,us,Hf,st,Jf,Ma,Rf,Gf,xl,Kf,Xf,Yf,ro,Zf,ao,ap,rt,io,Fl,_s,eu,ql,tu,ip,qe,bs,ou,at,nu,zl,su,ru,ks,au,iu,lu,be,vs,du,it,cu,Ea,pu,hu,Ml,mu,gu,fu,lo,uu,co,lp,lt,po,El,Bs,_u,Pl,bu,dp,ze,ys,ku,dt,vu,Cl,Bu,yu,$s,$u,wu,Tu,K,ws,xu,ct,Fu,Pa,qu,zu,jl,Mu,Eu,Pu,ho,Cu,mo,ju,go,cp,pt,fo,Al,Ts,Au,Ll,Lu,pp,ce,xs,Ou,Ol,Iu,Su,Fs,Nu,qs,Du,Wu,Uu,U,zs,Qu,ht,Vu,Ca,Hu,Ju,Il,Ru,Gu,Ku,uo,Xu,_o,Yu,bo,Zu,ko,e_,vo,hp,mt,Bo,Sl,Ms,t_,Nl,o_,mp,pe,Es,n_,Dl,s_,r_,Ps,a_,Cs,i_,l_,d_,ke,js,c_,gt,p_,ja,h_,m_,Wl,g_,f_,u_,yo,__,$o,gp,ft,wo,Ul,As,b_,Ql,k_,fp,he,Ls,v_,Vl,B_,y_,Os,$_,Is,w_,T_,x_,X,Ss,F_,ut,q_,Aa,z_,M_,Hl,E_,P_,C_,To,j_,xo,A_,Fo,up,_t,qo,Jl,Ns,L_,Rl,O_,_p,me,Ds,I_,bt,S_,Gl,N_,D_,Kl,W_,U_,Q_,Ws,V_,Us,H_,J_,R_,Y,Qs,G_,kt,K_,La,X_,Y_,Xl,Z_,eb,tb,zo,ob,Mo,nb,Eo,bp,vt,Po,Yl,Vs,sb,Zl,rb,kp,A,Hs,ab,ed,ib,lb,Js,db,Oa,cb,pb,hb,Rs,mb,Gs,gb,fb,ub,td,_b,bb,Me,od,Ks,kb,vb,nd,Xs,Bb,yb,sd,Ys,$b,wb,rd,Zs,Tb,xb,ve,er,Fb,Bt,qb,ad,zb,Mb,id,Eb,Pb,Cb,Co,jb,jo,vp,yt,Ao,ld,tr,Ab,dd,Lb,Bp,L,or,Ob,$t,Ib,cd,Sb,Nb,pd,Db,Wb,Ub,nr,Qb,Ia,Vb,Hb,Jb,sr,Rb,rr,Gb,Kb,Xb,hd,Yb,Zb,Ee,md,ar,ek,tk,gd,ir,ok,nk,fd,lr,sk,rk,ud,dr,ak,ik,Be,cr,lk,wt,dk,_d,ck,pk,bd,hk,mk,gk,Lo,fk,Oo,yp,Tt,Io,kd,pr,uk,vd,_k,$p,O,hr,bk,mr,kk,Bd,vk,Bk,yk,gr,$k,Sa,wk,Tk,xk,fr,Fk,ur,qk,zk,Mk,yd,Ek,Pk,Pe,$d,_r,Ck,jk,wd,br,Ak,Lk,Td,kr,Ok,Ik,xd,vr,Sk,Nk,ye,Br,Dk,xt,Wk,Fd,Uk,Qk,qd,Vk,Hk,Jk,So,Rk,No,wp,Ft,Do,zd,yr,Gk,Md,Kk,Tp,I,$r,Xk,Ed,Yk,Zk,wr,ev,Na,tv,ov,nv,Tr,sv,xr,rv,av,iv,Pd,lv,dv,Ce,Cd,Fr,cv,pv,jd,qr,hv,mv,Ad,zr,gv,fv,Ld,Mr,uv,_v,$e,Er,bv,qt,kv,Od,vv,Bv,Id,yv,$v,wv,Wo,Tv,Uo,xp,zt,Qo,Sd,Pr,xv,Nd,Fv,Fp,S,Cr,qv,Dd,zv,Mv,jr,Ev,Da,Pv,Cv,jv,Ar,Av,Lr,Lv,Ov,Iv,Wd,Sv,Nv,je,Ud,Or,Dv,Wv,Qd,Ir,Uv,Qv,Vd,Sr,Vv,Hv,Hd,Nr,Jv,Rv,we,Dr,Gv,Mt,Kv,Jd,Xv,Yv,Rd,Zv,eB,tB,Vo,oB,Ho,qp,Et,Jo,Gd,Wr,nB,Kd,sB,zp,N,Ur,rB,Xd,aB,iB,Qr,lB,Wa,dB,cB,pB,Vr,hB,Hr,mB,gB,fB,Yd,uB,_B,Ae,Zd,Jr,bB,kB,ec,Rr,vB,BB,tc,Gr,yB,$B,oc,Kr,wB,TB,Te,Xr,xB,Pt,FB,nc,qB,zB,sc,MB,EB,PB,Ro,CB,Go,Mp,Ct,Ko,rc,Yr,jB,ac,AB,Ep,D,Zr,LB,jt,OB,ic,IB,SB,lc,NB,DB,WB,ea,UB,Ua,QB,VB,HB,ta,JB,oa,RB,GB,KB,dc,XB,YB,Le,cc,na,ZB,e1,pc,sa,t1,o1,hc,ra,n1,s1,mc,aa,r1,a1,xe,ia,i1,At,l1,Qa,d1,c1,gc,p1,h1,m1,Xo,g1,Yo,Pp;return l=new z({}),wn=new z({}),En=new z({}),Pn=new q({props:{name:"class transformers.BigBirdConfig",anchor:"transformers.BigBirdConfig",parameters:[{name:"vocab_size",val:" = 50358"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu_new'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 4096"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"sep_token_id",val:" = 66"},{name:"attention_type",val:" = 'block_sparse'"},{name:"use_bias",val:" = True"},{name:"rescale_embeddings",val:" = False"},{name:"block_size",val:" = 64"},{name:"num_random_blocks",val:" = 3"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BigBirdConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50358) &#x2014;
Vocabulary size of the BigBird model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdModel">BigBirdModel</a>.`,name:"vocab_size"},{anchor:"transformers.BigBirdConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.BigBirdConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.BigBirdConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.BigBirdConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.BigBirdConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu_new&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.BigBirdConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.BigBirdConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.BigBirdConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 1024 or 2048 or 4096).`,name:"max_position_embeddings"},{anchor:"transformers.BigBirdConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdModel">BigBirdModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.BigBirdConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.BigBirdConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.BigBirdConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.BigBirdConfig.attention_type",description:`<strong>attention_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;block_sparse&quot;</code>) &#x2014;
Whether to use block sparse attention (with n complexity) as introduced in paper or original attention
layer (with n^2 complexity). Possible values are <code>&quot;original_full&quot;</code> and <code>&quot;block_sparse&quot;</code>.`,name:"attention_type"},{anchor:"transformers.BigBirdConfig.use_bias",description:`<strong>use_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use bias in query, key, value.`,name:"use_bias"},{anchor:"transformers.BigBirdConfig.rescale_embeddings",description:`<strong>rescale_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to rescale embeddings with (hidden_size ** 0.5).`,name:"rescale_embeddings"},{anchor:"transformers.BigBirdConfig.block_size",description:`<strong>block_size</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Size of each block. Useful only when <code>attention_type == &quot;block_sparse&quot;</code>.`,name:"block_size"},{anchor:"transformers.BigBirdConfig.num_random_blocks",description:`<strong>num_random_blocks</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
Each query is going to attend these many number of random blocks. Useful only when <code>attention_type == &quot;block_sparse&quot;</code>.`,name:"num_random_blocks"},{anchor:"transformers.BigBirdConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/configuration_big_bird.py#L31"}}),Dt=new M({props:{anchor:"transformers.BigBirdConfig.example",$$slots:{default:[UT]},$$scope:{ctx:x}}}),An=new z({}),On=new z({}),In=new z({}),Sn=new z({}),Nn=new q({props:{name:"class transformers.BigBirdTokenizer",anchor:"transformers.BigBirdTokenizer",parameters:[{name:"vocab_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.BigBirdTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.BigBirdTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The begin of sequence token.`,name:"bos_token"},{anchor:"transformers.BigBirdTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BigBirdTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BigBirdTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BigBirdTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BigBirdTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BigBirdTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:</p>
<ul>
<li>
<p><code>enable_sampling</code>: Enable subword regularization.</p>
</li>
<li>
<p><code>nbest_size</code>: Sampling parameters for unigram. Invalid for BPE-Dropout.</p>
<ul>
<li><code>nbest_size = {0,1}</code>: No sampling is performed.</li>
<li><code>nbest_size &gt; 1</code>: samples from the nbest_size results.</li>
<li><code>nbest_size &lt; 0</code>: assuming that nbest_size is infinite and samples from the all hypothesis (lattice)
using forward-filtering-and-backward-sampling algorithm.</li>
</ul>
</li>
<li>
<p><code>alpha</code>: Smoothing parameter for unigram sampling, and dropout probability of merge operations for
BPE-dropout.</p>
</li>
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/tokenization_big_bird.py#L47"}}),Qn=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BigBirdTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/tokenization_big_bird.py#L201",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Hn=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BigBirdTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/tokenization_big_bird.py#L226",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Rn=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BigBirdTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/tokenization_big_bird.py#L253",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Gn=new q({props:{name:"save_vocabulary",anchor:"transformers.BigBirdTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/tokenization_big_bird.py#L184"}}),Kn=new z({}),Xn=new q({props:{name:"class transformers.BigBirdTokenizerFast",anchor:"transformers.BigBirdTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BigBirdTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.BigBirdTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.BigBirdTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token. .. note:: When building a sequence using special tokens, this is not the token
that is used for the end of sequence. The token used is the <code>sep_token</code>.`,name:"eos_token"},{anchor:"transformers.BigBirdTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BigBirdTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BigBirdTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BigBirdTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BigBirdTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/tokenization_big_bird_fast.py#L58"}}),Zn=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BigBirdTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/tokenization_big_bird_fast.py#L145",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ts=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BigBirdTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/tokenization_big_bird_fast.py#L201",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Yt=new M({props:{anchor:"transformers.BigBirdTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[QT]},$$scope:{ctx:x}}}),os=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.BigBirdTokenizerFast.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BigBirdTokenizerFast.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.BigBirdTokenizerFast.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BigBirdTokenizerFast.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Set to True if the token list is already formatted with special tokens for the model`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/tokenization_big_bird_fast.py#L170",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ss=new z({}),rs=new q({props:{name:"class transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput",anchor:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"seq_relationship_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss as the sum of the masked language modeling loss and the next sequence prediction
(classification) loss.`,name:"loss"},{anchor:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/modeling_big_bird.py#L1852"}}),is=new z({}),ls=new q({props:{name:"class transformers.BigBirdModel",anchor:"transformers.BigBirdModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.BigBirdModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/modeling_big_bird.py#L1924"}}),ms=new q({props:{name:"forward",anchor:"transformers.BigBirdModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BigBirdModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BigBirdModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BigBirdModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BigBirdModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BigBirdModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.BigBirdModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BigBirdModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/modeling_big_bird.py#L1980",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
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
`}}),oo=new G({props:{$$slots:{default:[VT]},$$scope:{ctx:x}}}),no=new M({props:{anchor:"transformers.BigBirdModel.forward.example",$$slots:{default:[HT]},$$scope:{ctx:x}}}),gs=new z({}),fs=new q({props:{name:"class transformers.BigBirdForPreTraining",anchor:"transformers.BigBirdForPreTraining",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/modeling_big_bird.py#L2263"}}),us=new q({props:{name:"forward",anchor:"transformers.BigBirdForPreTraining.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.FloatTensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdForPreTraining.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BigBirdForPreTraining.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BigBirdForPreTraining.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BigBirdForPreTraining.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BigBirdForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.BigBirdForPreTraining.forward.next_sentence_label",description:`<strong>next_sentence_label</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. If specified, nsp loss will be
added to masked_lm loss. Input should be a sequence pair (see <code>input_ids</code> docstring) Indices should be in
<code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"next_sentence_label"},{anchor:"transformers.BigBirdForPreTraining.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/modeling_big_bird.py#L2279",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput"
>transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) \u2014 Total loss as the sum of the masked language modeling loss and the next sequence prediction
(classification) loss.</p>
</li>
<li>
<p><strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>seq_relationship_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput"
>transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ro=new G({props:{$$slots:{default:[JT]},$$scope:{ctx:x}}}),ao=new M({props:{anchor:"transformers.BigBirdForPreTraining.forward.example",$$slots:{default:[RT]},$$scope:{ctx:x}}}),_s=new z({}),bs=new q({props:{name:"class transformers.BigBirdForCausalLM",anchor:"transformers.BigBirdForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/modeling_big_bird.py#L2470"}}),vs=new q({props:{name:"forward",anchor:"transformers.BigBirdForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BigBirdForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BigBirdForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BigBirdForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BigBirdForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BigBirdForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.BigBirdForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BigBirdForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels n <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.BigBirdForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/modeling_big_bird.py#L2492",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
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
`}}),lo=new G({props:{$$slots:{default:[GT]},$$scope:{ctx:x}}}),co=new M({props:{anchor:"transformers.BigBirdForCausalLM.forward.example",$$slots:{default:[KT]},$$scope:{ctx:x}}}),Bs=new z({}),ys=new q({props:{name:"class transformers.BigBirdForMaskedLM",anchor:"transformers.BigBirdForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/modeling_big_bird.py#L2367"}}),ws=new q({props:{name:"forward",anchor:"transformers.BigBirdForMaskedLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BigBirdForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BigBirdForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BigBirdForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BigBirdForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/modeling_big_bird.py#L2389",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
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
`}}),ho=new G({props:{$$slots:{default:[XT]},$$scope:{ctx:x}}}),mo=new M({props:{anchor:"transformers.BigBirdForMaskedLM.forward.example",$$slots:{default:[YT]},$$scope:{ctx:x}}}),go=new M({props:{anchor:"transformers.BigBirdForMaskedLM.forward.example-2",$$slots:{default:[ZT]},$$scope:{ctx:x}}}),Ts=new z({}),xs=new q({props:{name:"class transformers.BigBirdForSequenceClassification",anchor:"transformers.BigBirdForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/modeling_big_bird.py#L2647"}}),zs=new q({props:{name:"forward",anchor:"transformers.BigBirdForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BigBirdForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BigBirdForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BigBirdForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BigBirdForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/modeling_big_bird.py#L2658",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
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
`}}),uo=new G({props:{$$slots:{default:[e0]},$$scope:{ctx:x}}}),_o=new M({props:{anchor:"transformers.BigBirdForSequenceClassification.forward.example",$$slots:{default:[t0]},$$scope:{ctx:x}}}),bo=new M({props:{anchor:"transformers.BigBirdForSequenceClassification.forward.example-2",$$slots:{default:[o0]},$$scope:{ctx:x}}}),ko=new M({props:{anchor:"transformers.BigBirdForSequenceClassification.forward.example-3",$$slots:{default:[n0]},$$scope:{ctx:x}}}),vo=new M({props:{anchor:"transformers.BigBirdForSequenceClassification.forward.example-4",$$slots:{default:[s0]},$$scope:{ctx:x}}}),Ms=new z({}),Es=new q({props:{name:"class transformers.BigBirdForMultipleChoice",anchor:"transformers.BigBirdForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/modeling_big_bird.py#L2743"}}),js=new q({props:{name:"forward",anchor:"transformers.BigBirdForMultipleChoice.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BigBirdForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BigBirdForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BigBirdForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BigBirdForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/modeling_big_bird.py#L2754",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
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
`}}),yo=new G({props:{$$slots:{default:[r0]},$$scope:{ctx:x}}}),$o=new M({props:{anchor:"transformers.BigBirdForMultipleChoice.forward.example",$$slots:{default:[a0]},$$scope:{ctx:x}}}),As=new z({}),Ls=new q({props:{name:"class transformers.BigBirdForTokenClassification",anchor:"transformers.BigBirdForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BigBirdForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/modeling_big_bird.py#L2837"}}),Ss=new q({props:{name:"forward",anchor:"transformers.BigBirdForTokenClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BigBirdForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BigBirdForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BigBirdForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BigBirdForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/modeling_big_bird.py#L2852",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
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
`}}),To=new G({props:{$$slots:{default:[i0]},$$scope:{ctx:x}}}),xo=new M({props:{anchor:"transformers.BigBirdForTokenClassification.forward.example",$$slots:{default:[l0]},$$scope:{ctx:x}}}),Fo=new M({props:{anchor:"transformers.BigBirdForTokenClassification.forward.example-2",$$slots:{default:[d0]},$$scope:{ctx:x}}}),Ns=new z({}),Ds=new q({props:{name:"class transformers.BigBirdForQuestionAnswering",anchor:"transformers.BigBirdForQuestionAnswering",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = False"}],parametersDescription:[{anchor:"transformers.BigBirdForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/modeling_big_bird.py#L2937"}}),Qs=new q({props:{name:"forward",anchor:"transformers.BigBirdForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"question_lengths",val:" = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BigBirdForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BigBirdForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/modeling_big_bird.py#L2951",returnDescription:`
<p>A <code>transformers.models.big_bird.modeling_big_bird.BigBirdForQuestionAnsweringModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
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
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 1)</code>) \u2014 pooler output from BigBigModel</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.big_bird.modeling_big_bird.BigBirdForQuestionAnsweringModelOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),zo=new G({props:{$$slots:{default:[c0]},$$scope:{ctx:x}}}),Mo=new M({props:{anchor:"transformers.BigBirdForQuestionAnswering.forward.example",$$slots:{default:[p0]},$$scope:{ctx:x}}}),Eo=new M({props:{anchor:"transformers.BigBirdForQuestionAnswering.forward.example-2",$$slots:{default:[h0]},$$scope:{ctx:x}}}),Vs=new z({}),Hs=new q({props:{name:"class transformers.FlaxBigBirdModel",anchor:"transformers.FlaxBigBirdModel",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1559"}}),er=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBigBirdModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBigBirdModel.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBigBirdModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBigBirdModel.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBigBirdModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1444",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
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
`}}),Co=new G({props:{$$slots:{default:[m0]},$$scope:{ctx:x}}}),jo=new M({props:{anchor:"transformers.FlaxBigBirdModel.__call__.example",$$slots:{default:[g0]},$$scope:{ctx:x}}}),tr=new z({}),or=new q({props:{name:"class transformers.FlaxBigBirdForPreTraining",anchor:"transformers.FlaxBigBirdForPreTraining",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1634"}}),cr=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1444",returnDescription:`
<p>A <code>transformers.models.big_bird.modeling_flax_big_bird.FlaxBigBirdForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>prediction_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>seq_relationship_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
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
<p><code>transformers.models.big_bird.modeling_flax_big_bird.FlaxBigBirdForPreTrainingOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Lo=new G({props:{$$slots:{default:[f0]},$$scope:{ctx:x}}}),Oo=new M({props:{anchor:"transformers.FlaxBigBirdForPreTraining.__call__.example",$$slots:{default:[u0]},$$scope:{ctx:x}}}),pr=new z({}),hr=new q({props:{name:"class transformers.FlaxBigBirdForMaskedLM",anchor:"transformers.FlaxBigBirdForMaskedLM",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1721"}}),Br=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1444",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),So=new G({props:{$$slots:{default:[_0]},$$scope:{ctx:x}}}),No=new M({props:{anchor:"transformers.FlaxBigBirdForMaskedLM.__call__.example",$$slots:{default:[b0]},$$scope:{ctx:x}}}),yr=new z({}),$r=new q({props:{name:"class transformers.FlaxBigBirdForSequenceClassification",anchor:"transformers.FlaxBigBirdForSequenceClassification",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1810"}}),Er=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1444",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
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
`}}),Wo=new G({props:{$$slots:{default:[k0]},$$scope:{ctx:x}}}),Uo=new M({props:{anchor:"transformers.FlaxBigBirdForSequenceClassification.__call__.example",$$slots:{default:[v0]},$$scope:{ctx:x}}}),Pr=new z({}),Cr=new q({props:{name:"class transformers.FlaxBigBirdForMultipleChoice",anchor:"transformers.FlaxBigBirdForMultipleChoice",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1887"}}),Dr=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1444",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
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
`}}),Vo=new G({props:{$$slots:{default:[B0]},$$scope:{ctx:x}}}),Ho=new M({props:{anchor:"transformers.FlaxBigBirdForMultipleChoice.__call__.example",$$slots:{default:[y0]},$$scope:{ctx:x}}}),Wr=new z({}),Ur=new q({props:{name:"class transformers.FlaxBigBirdForTokenClassification",anchor:"transformers.FlaxBigBirdForTokenClassification",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1979"}}),Xr=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/modeling_flax_big_bird.py#L1444",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
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
`}}),Ro=new G({props:{$$slots:{default:[$0]},$$scope:{ctx:x}}}),Go=new M({props:{anchor:"transformers.FlaxBigBirdForTokenClassification.__call__.example",$$slots:{default:[w0]},$$scope:{ctx:x}}}),Yr=new z({}),Zr=new q({props:{name:"class transformers.FlaxBigBirdForQuestionAnswering",anchor:"transformers.FlaxBigBirdForQuestionAnswering",parameters:[{name:"config",val:": BigBirdConfig"},{name:"input_shape",val:": typing.Optional[tuple] = None"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdConfig">BigBirdConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBigBirdForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/modeling_flax_big_bird.py#L2078"}}),ia=new q({props:{name:"__call__",anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"question_lengths",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdTokenizer">BigBirdTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/big_bird/modeling_flax_big_bird.py#L2081",returnDescription:`
<p>A <code>transformers.models.big_bird.modeling_flax_big_bird.FlaxBigBirdForQuestionAnsweringModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdConfig"
>BigBirdConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>start_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>pooled_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 pooled_output returned by FlaxBigBirdModel.</p>
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
<p><code>transformers.models.big_bird.modeling_flax_big_bird.FlaxBigBirdForQuestionAnsweringModelOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xo=new G({props:{$$slots:{default:[T0]},$$scope:{ctx:x}}}),Yo=new M({props:{anchor:"transformers.FlaxBigBirdForQuestionAnswering.__call__.example",$$slots:{default:[x0]},$$scope:{ctx:x}}}),{c(){d=n("meta"),_=p(),m=n("h1"),f=n("a"),b=n("span"),v(l.$$.fragment),g=p(),F=n("span"),Ah=a("BigBird"),Dc=p(),Ve=n("h2"),It=n("a"),bi=n("span"),v(wn.$$.fragment),Lh=p(),ki=n("span"),Oh=a("Overview"),Wc=p(),St=n("p"),Ih=a("The BigBird model was proposed in "),Tn=n("a"),Sh=a("Big Bird: Transformers for Longer Sequences"),Nh=a(` by
Zaheer, Manzil and Guruganesh, Guru and Dubey, Kumar Avinava and Ainslie, Joshua and Alberti, Chris and Ontanon,
Santiago and Pham, Philip and Ravula, Anirudh and Wang, Qifan and Yang, Li and others. BigBird, is a sparse-attention
based transformer which extends Transformer based models, such as BERT to much longer sequences. In addition to sparse
attention, BigBird also applies global attention as well as random attention to the input sequence. Theoretically, it
has been shown that applying sparse, global, and random attention approximates full attention, while being
computationally much more efficient for longer sequences. As a consequence of the capability to handle longer context,
BigBird has shown improved performance on various long document NLP tasks, such as question answering and
summarization, compared to BERT or RoBERTa.`),Uc=p(),ga=n("p"),Dh=a("The abstract from the paper is the following:"),Qc=p(),fa=n("p"),vi=n("em"),Wh=a(`Transformers-based models, such as BERT, have been one of the most successful deep learning models for NLP.
Unfortunately, one of their core limitations is the quadratic dependency (mainly in terms of memory) on the sequence
length due to their full attention mechanism. To remedy this, we propose, BigBird, a sparse attention mechanism that
reduces this quadratic dependency to linear. We show that BigBird is a universal approximator of sequence functions and
is Turing complete, thereby preserving these properties of the quadratic, full attention model. Along the way, our
theoretical analysis reveals some of the benefits of having O(1) global tokens (such as CLS), that attend to the entire
sequence as part of the sparse attention mechanism. The proposed sparse attention can handle sequences of length up to
8x of what was previously possible using similar hardware. As a consequence of the capability to handle longer context,
BigBird drastically improves performance on various NLP tasks such as question answering and summarization. We also
propose novel applications to genomics data.`),Vc=p(),ua=n("p"),Uh=a("Tips:"),Hc=p(),V=n("ul"),xn=n("li"),Qh=a("For an in-detail explanation on how BigBird\u2019s attention works, see "),Fn=n("a"),Vh=a("this blog post"),Hh=a("."),Jh=p(),de=n("li"),Rh=a("BigBird comes with 2 implementations: "),Bi=n("strong"),Gh=a("original_full"),Kh=a(" & "),yi=n("strong"),Xh=a("block_sparse"),Yh=a(`. For the sequence length < 1024, using
`),$i=n("strong"),Zh=a("original_full"),em=a(" is advised as there is no benefit in using "),wi=n("strong"),tm=a("block_sparse"),om=a(" attention."),nm=p(),Ti=n("li"),sm=a("The code currently uses window size of 3 blocks and 2 global blocks."),rm=p(),xi=n("li"),am=a("Sequence length must be divisible by block size."),im=p(),qn=n("li"),lm=a("Current implementation supports only "),Fi=n("strong"),dm=a("ITC"),cm=a("."),pm=p(),_a=n("li"),hm=a("Current implementation doesn\u2019t support "),qi=n("strong"),mm=a("num_random_blocks = 0"),Jc=p(),Oe=n("p"),gm=a("This model was contributed by "),zn=n("a"),fm=a("vasudevgupta"),um=a(`. The original code can be found
`),Mn=n("a"),_m=a("here"),bm=a("."),Rc=p(),He=n("h2"),Nt=n("a"),zi=n("span"),v(En.$$.fragment),km=p(),Mi=n("span"),vm=a("BigBirdConfig"),Gc=p(),C=n("div"),v(Pn.$$.fragment),Bm=p(),Je=n("p"),ym=a("This is the configuration class to store the configuration of a "),ba=n("a"),$m=a("BigBirdModel"),wm=a(`. It is used to instantiate an
BigBird model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the BigBird
`),Cn=n("a"),Tm=a("google/bigbird-roberta-base"),xm=a(" architecture."),Fm=p(),Re=n("p"),qm=a("Configuration objects inherit from "),ka=n("a"),zm=a("PretrainedConfig"),Mm=a(` and can be used to control the model outputs. Read the
documentation from `),va=n("a"),Em=a("PretrainedConfig"),Pm=a(" for more information."),Cm=p(),v(Dt.$$.fragment),jm=p(),Ei=n("blockquote"),Pi=n("blockquote"),Ci=n("blockquote"),ji=n("p"),Am=a("from transformers import BigBirdModel, BigBirdConfig"),Lm=p(),Ai=n("blockquote"),Li=n("blockquote"),jn=n("blockquote"),Wt=n("h1"),Ut=n("a"),Oi=n("span"),v(An.$$.fragment),Om=p(),Ii=n("span"),Im=a("Initializing a BigBird google/bigbird-roberta-base style configuration >>> configuration ="),Sm=p(),Si=n("p"),Nm=a("BigBirdConfig()"),Dm=p(),Ni=n("blockquote"),Di=n("blockquote"),Ln=n("blockquote"),Qt=n("h1"),Vt=n("a"),Wi=n("span"),v(On.$$.fragment),Wm=p(),Ui=n("span"),Um=a("Initializing a model from the google/bigbird-roberta-base style configuration >>> model ="),Qm=p(),Qi=n("p"),Vm=a("BigBirdModel(configuration)"),Hm=p(),Vi=n("blockquote"),Hi=n("blockquote"),Ji=n("blockquote"),Ht=n("h1"),Jt=n("a"),Ri=n("span"),v(In.$$.fragment),Jm=p(),Gi=n("span"),Rm=a("Accessing the model configuration >>> configuration = model.config"),Kc=p(),Ge=n("h2"),Rt=n("a"),Ki=n("span"),v(Sn.$$.fragment),Gm=p(),Xi=n("span"),Km=a("BigBirdTokenizer"),Xc=p(),j=n("div"),v(Nn.$$.fragment),Xm=p(),Dn=n("p"),Ym=a("Construct a BigBird tokenizer. Based on "),Wn=n("a"),Zm=a("SentencePiece"),eg=a("."),tg=p(),Un=n("p"),og=a("This tokenizer inherits from "),Ba=n("a"),ng=a("PreTrainedTokenizer"),sg=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),rg=p(),Ie=n("div"),v(Qn.$$.fragment),ag=p(),Yi=n("p"),ig=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Big Bird sequence has the following format:`),lg=p(),Vn=n("ul"),ya=n("li"),dg=a("single sequence: "),Zi=n("code"),cg=a("[CLS] X [SEP]"),pg=p(),$a=n("li"),hg=a("pair of sequences: "),el=n("code"),mg=a("[CLS] A [SEP] B [SEP]"),gg=p(),Gt=n("div"),v(Hn.$$.fragment),fg=p(),Jn=n("p"),ug=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),tl=n("code"),_g=a("prepare_for_model"),bg=a(" method."),kg=p(),Kt=n("div"),v(Rn.$$.fragment),vg=p(),Ke=n("p"),Bg=a(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format: :: 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 | first sequence | second
sequence | If `),ol=n("code"),yg=a("token_ids_1"),$g=a(" is "),nl=n("code"),wg=a("None"),Tg=a(", this method only returns the first portion of the mask (0s)."),xg=p(),wa=n("div"),v(Gn.$$.fragment),Yc=p(),Xe=n("h2"),Xt=n("a"),sl=n("span"),v(Kn.$$.fragment),Fg=p(),rl=n("span"),qg=a("BigBirdTokenizerFast"),Zc=p(),H=n("div"),v(Xn.$$.fragment),zg=p(),Fe=n("p"),Mg=a("Construct a \u201Cfast\u201D BigBird tokenizer (backed by HuggingFace\u2019s "),al=n("em"),Eg=a("tokenizers"),Pg=a(` library). Based on
`),Yn=n("a"),Cg=a("Unigram"),jg=a(`. This
tokenizer inherits from `),Ta=n("a"),Ag=a("PreTrainedTokenizerFast"),Lg=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),Og=p(),Se=n("div"),v(Zn.$$.fragment),Ig=p(),il=n("p"),Sg=a(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An BigBird sequence has the following format:`),Ng=p(),es=n("ul"),xa=n("li"),Dg=a("single sequence: "),ll=n("code"),Wg=a("[CLS] X [SEP]"),Ug=p(),Fa=n("li"),Qg=a("pair of sequences: "),dl=n("code"),Vg=a("[CLS] A [SEP] B [SEP]"),Hg=p(),fe=n("div"),v(ts.$$.fragment),Jg=p(),cl=n("p"),Rg=a("Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),Gg=p(),v(Yt.$$.fragment),Kg=p(),pl=n("p"),Xg=a("if token_ids_1 is None, only returns the first portion of the mask (0s)."),Yg=p(),Zt=n("div"),v(os.$$.fragment),Zg=p(),ns=n("p"),ef=a(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),hl=n("code"),tf=a("prepare_for_model"),of=a(" method."),ep=p(),Ye=n("h2"),eo=n("a"),ml=n("span"),v(ss.$$.fragment),nf=p(),gl=n("span"),sf=a("BigBird specific outputs"),tp=p(),Ze=n("div"),v(rs.$$.fragment),rf=p(),as=n("p"),af=a("Output type of "),qa=n("a"),lf=a("BigBirdForPreTraining"),df=a("."),op=p(),et=n("h2"),to=n("a"),fl=n("span"),v(is.$$.fragment),cf=p(),ul=n("span"),pf=a("BigBirdModel"),np=p(),J=n("div"),v(ls.$$.fragment),hf=p(),ds=n("p"),mf=a(`The bare BigBird Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),cs=n("a"),gf=a("torch.nn.Module"),ff=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),uf=p(),ps=n("p"),_f=a(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),hs=n("a"),bf=a(`Attention is
all you need`),kf=a(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),vf=p(),Q=n("p"),Bf=a("To behave as an decoder the model needs to be initialized with the "),_l=n("code"),yf=a("is_decoder"),$f=a(` argument of the configuration set
to `),bl=n("code"),wf=a("True"),Tf=a(". To be used in a Seq2Seq model, the model needs to initialized with both "),kl=n("code"),xf=a("is_decoder"),Ff=a(` argument and
`),vl=n("code"),qf=a("add_cross_attention"),zf=a(" set to "),Bl=n("code"),Mf=a("True"),Ef=a("; an "),yl=n("code"),Pf=a("encoder_hidden_states"),Cf=a(" is then expected as an input to the forward pass."),jf=p(),ue=n("div"),v(ms.$$.fragment),Af=p(),tt=n("p"),Lf=a("The "),za=n("a"),Of=a("BigBirdModel"),If=a(" forward method, overrides the "),$l=n("code"),Sf=a("__call__"),Nf=a(" special method."),Df=p(),v(oo.$$.fragment),Wf=p(),v(no.$$.fragment),sp=p(),ot=n("h2"),so=n("a"),wl=n("span"),v(gs.$$.fragment),Uf=p(),Tl=n("span"),Qf=a("BigBirdForPreTraining"),rp=p(),nt=n("div"),v(fs.$$.fragment),Vf=p(),_e=n("div"),v(us.$$.fragment),Hf=p(),st=n("p"),Jf=a("The "),Ma=n("a"),Rf=a("BigBirdForPreTraining"),Gf=a(" forward method, overrides the "),xl=n("code"),Kf=a("__call__"),Xf=a(" special method."),Yf=p(),v(ro.$$.fragment),Zf=p(),v(ao.$$.fragment),ap=p(),rt=n("h2"),io=n("a"),Fl=n("span"),v(_s.$$.fragment),eu=p(),ql=n("span"),tu=a("BigBirdForCausalLM"),ip=p(),qe=n("div"),v(bs.$$.fragment),ou=p(),at=n("p"),nu=a("BigBird Model with a "),zl=n("code"),su=a("language modeling"),ru=a(` head on top for CLM fine-tuning.
This model is a PyTorch `),ks=n("a"),au=a("torch.nn.Module"),iu=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),lu=p(),be=n("div"),v(vs.$$.fragment),du=p(),it=n("p"),cu=a("The "),Ea=n("a"),pu=a("BigBirdForCausalLM"),hu=a(" forward method, overrides the "),Ml=n("code"),mu=a("__call__"),gu=a(" special method."),fu=p(),v(lo.$$.fragment),uu=p(),v(co.$$.fragment),lp=p(),lt=n("h2"),po=n("a"),El=n("span"),v(Bs.$$.fragment),_u=p(),Pl=n("span"),bu=a("BigBirdForMaskedLM"),dp=p(),ze=n("div"),v(ys.$$.fragment),ku=p(),dt=n("p"),vu=a("BigBird Model with a "),Cl=n("code"),Bu=a("language modeling"),yu=a(` head on top.
This model is a PyTorch `),$s=n("a"),$u=a("torch.nn.Module"),wu=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Tu=p(),K=n("div"),v(ws.$$.fragment),xu=p(),ct=n("p"),Fu=a("The "),Pa=n("a"),qu=a("BigBirdForMaskedLM"),zu=a(" forward method, overrides the "),jl=n("code"),Mu=a("__call__"),Eu=a(" special method."),Pu=p(),v(ho.$$.fragment),Cu=p(),v(mo.$$.fragment),ju=p(),v(go.$$.fragment),cp=p(),pt=n("h2"),fo=n("a"),Al=n("span"),v(Ts.$$.fragment),Au=p(),Ll=n("span"),Lu=a("BigBirdForSequenceClassification"),pp=p(),ce=n("div"),v(xs.$$.fragment),Ou=p(),Ol=n("p"),Iu=a(`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Su=p(),Fs=n("p"),Nu=a("This model is a PyTorch "),qs=n("a"),Du=a("torch.nn.Module"),Wu=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Uu=p(),U=n("div"),v(zs.$$.fragment),Qu=p(),ht=n("p"),Vu=a("The "),Ca=n("a"),Hu=a("BigBirdForSequenceClassification"),Ju=a(" forward method, overrides the "),Il=n("code"),Ru=a("__call__"),Gu=a(" special method."),Ku=p(),v(uo.$$.fragment),Xu=p(),v(_o.$$.fragment),Yu=p(),v(bo.$$.fragment),Zu=p(),v(ko.$$.fragment),e_=p(),v(vo.$$.fragment),hp=p(),mt=n("h2"),Bo=n("a"),Sl=n("span"),v(Ms.$$.fragment),t_=p(),Nl=n("span"),o_=a("BigBirdForMultipleChoice"),mp=p(),pe=n("div"),v(Es.$$.fragment),n_=p(),Dl=n("p"),s_=a(`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),r_=p(),Ps=n("p"),a_=a("This model is a PyTorch "),Cs=n("a"),i_=a("torch.nn.Module"),l_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),d_=p(),ke=n("div"),v(js.$$.fragment),c_=p(),gt=n("p"),p_=a("The "),ja=n("a"),h_=a("BigBirdForMultipleChoice"),m_=a(" forward method, overrides the "),Wl=n("code"),g_=a("__call__"),f_=a(" special method."),u_=p(),v(yo.$$.fragment),__=p(),v($o.$$.fragment),gp=p(),ft=n("h2"),wo=n("a"),Ul=n("span"),v(As.$$.fragment),b_=p(),Ql=n("span"),k_=a("BigBirdForTokenClassification"),fp=p(),he=n("div"),v(Ls.$$.fragment),v_=p(),Vl=n("p"),B_=a(`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),y_=p(),Os=n("p"),$_=a("This model is a PyTorch "),Is=n("a"),w_=a("torch.nn.Module"),T_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),x_=p(),X=n("div"),v(Ss.$$.fragment),F_=p(),ut=n("p"),q_=a("The "),Aa=n("a"),z_=a("BigBirdForTokenClassification"),M_=a(" forward method, overrides the "),Hl=n("code"),E_=a("__call__"),P_=a(" special method."),C_=p(),v(To.$$.fragment),j_=p(),v(xo.$$.fragment),A_=p(),v(Fo.$$.fragment),up=p(),_t=n("h2"),qo=n("a"),Jl=n("span"),v(Ns.$$.fragment),L_=p(),Rl=n("span"),O_=a("BigBirdForQuestionAnswering"),_p=p(),me=n("div"),v(Ds.$$.fragment),I_=p(),bt=n("p"),S_=a(`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Gl=n("code"),N_=a("span start logits"),D_=a(" and "),Kl=n("code"),W_=a("span end logits"),U_=a(")."),Q_=p(),Ws=n("p"),V_=a("This model is a PyTorch "),Us=n("a"),H_=a("torch.nn.Module"),J_=a(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),R_=p(),Y=n("div"),v(Qs.$$.fragment),G_=p(),kt=n("p"),K_=a("The "),La=n("a"),X_=a("BigBirdForQuestionAnswering"),Y_=a(" forward method, overrides the "),Xl=n("code"),Z_=a("__call__"),eb=a(" special method."),tb=p(),v(zo.$$.fragment),ob=p(),v(Mo.$$.fragment),nb=p(),v(Eo.$$.fragment),bp=p(),vt=n("h2"),Po=n("a"),Yl=n("span"),v(Vs.$$.fragment),sb=p(),Zl=n("span"),rb=a("FlaxBigBirdModel"),kp=p(),A=n("div"),v(Hs.$$.fragment),ab=p(),ed=n("p"),ib=a("The bare BigBird Model transformer outputting raw hidden-states without any specific head on top."),lb=p(),Js=n("p"),db=a("This model inherits from "),Oa=n("a"),cb=a("FlaxPreTrainedModel"),pb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),hb=p(),Rs=n("p"),mb=a("This model is also a Flax Linen "),Gs=n("a"),gb=a("flax.linen.Module"),fb=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ub=p(),td=n("p"),_b=a("Finally, this model supports inherent JAX features such as:"),bb=p(),Me=n("ul"),od=n("li"),Ks=n("a"),kb=a("Just-In-Time (JIT) compilation"),vb=p(),nd=n("li"),Xs=n("a"),Bb=a("Automatic Differentiation"),yb=p(),sd=n("li"),Ys=n("a"),$b=a("Vectorization"),wb=p(),rd=n("li"),Zs=n("a"),Tb=a("Parallelization"),xb=p(),ve=n("div"),v(er.$$.fragment),Fb=p(),Bt=n("p"),qb=a("The "),ad=n("code"),zb=a("FlaxBigBirdPreTrainedModel"),Mb=a(" forward method, overrides the "),id=n("code"),Eb=a("__call__"),Pb=a(" special method."),Cb=p(),v(Co.$$.fragment),jb=p(),v(jo.$$.fragment),vp=p(),yt=n("h2"),Ao=n("a"),ld=n("span"),v(tr.$$.fragment),Ab=p(),dd=n("span"),Lb=a("FlaxBigBirdForPreTraining"),Bp=p(),L=n("div"),v(or.$$.fragment),Ob=p(),$t=n("p"),Ib=a("BigBird Model with two heads on top as done during the pretraining: a "),cd=n("code"),Sb=a("masked language modeling"),Nb=a(" head and a "),pd=n("code"),Db=a("next sentence prediction (classification)"),Wb=a(" head."),Ub=p(),nr=n("p"),Qb=a("This model inherits from "),Ia=n("a"),Vb=a("FlaxPreTrainedModel"),Hb=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Jb=p(),sr=n("p"),Rb=a("This model is also a Flax Linen "),rr=n("a"),Gb=a("flax.linen.Module"),Kb=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Xb=p(),hd=n("p"),Yb=a("Finally, this model supports inherent JAX features such as:"),Zb=p(),Ee=n("ul"),md=n("li"),ar=n("a"),ek=a("Just-In-Time (JIT) compilation"),tk=p(),gd=n("li"),ir=n("a"),ok=a("Automatic Differentiation"),nk=p(),fd=n("li"),lr=n("a"),sk=a("Vectorization"),rk=p(),ud=n("li"),dr=n("a"),ak=a("Parallelization"),ik=p(),Be=n("div"),v(cr.$$.fragment),lk=p(),wt=n("p"),dk=a("The "),_d=n("code"),ck=a("FlaxBigBirdPreTrainedModel"),pk=a(" forward method, overrides the "),bd=n("code"),hk=a("__call__"),mk=a(" special method."),gk=p(),v(Lo.$$.fragment),fk=p(),v(Oo.$$.fragment),yp=p(),Tt=n("h2"),Io=n("a"),kd=n("span"),v(pr.$$.fragment),uk=p(),vd=n("span"),_k=a("FlaxBigBirdForMaskedLM"),$p=p(),O=n("div"),v(hr.$$.fragment),bk=p(),mr=n("p"),kk=a("BigBird Model with a "),Bd=n("code"),vk=a("language modeling"),Bk=a(" head on top."),yk=p(),gr=n("p"),$k=a("This model inherits from "),Sa=n("a"),wk=a("FlaxPreTrainedModel"),Tk=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),xk=p(),fr=n("p"),Fk=a("This model is also a Flax Linen "),ur=n("a"),qk=a("flax.linen.Module"),zk=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Mk=p(),yd=n("p"),Ek=a("Finally, this model supports inherent JAX features such as:"),Pk=p(),Pe=n("ul"),$d=n("li"),_r=n("a"),Ck=a("Just-In-Time (JIT) compilation"),jk=p(),wd=n("li"),br=n("a"),Ak=a("Automatic Differentiation"),Lk=p(),Td=n("li"),kr=n("a"),Ok=a("Vectorization"),Ik=p(),xd=n("li"),vr=n("a"),Sk=a("Parallelization"),Nk=p(),ye=n("div"),v(Br.$$.fragment),Dk=p(),xt=n("p"),Wk=a("The "),Fd=n("code"),Uk=a("FlaxBigBirdPreTrainedModel"),Qk=a(" forward method, overrides the "),qd=n("code"),Vk=a("__call__"),Hk=a(" special method."),Jk=p(),v(So.$$.fragment),Rk=p(),v(No.$$.fragment),wp=p(),Ft=n("h2"),Do=n("a"),zd=n("span"),v(yr.$$.fragment),Gk=p(),Md=n("span"),Kk=a("FlaxBigBirdForSequenceClassification"),Tp=p(),I=n("div"),v($r.$$.fragment),Xk=p(),Ed=n("p"),Yk=a(`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Zk=p(),wr=n("p"),ev=a("This model inherits from "),Na=n("a"),tv=a("FlaxPreTrainedModel"),ov=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),nv=p(),Tr=n("p"),sv=a("This model is also a Flax Linen "),xr=n("a"),rv=a("flax.linen.Module"),av=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),iv=p(),Pd=n("p"),lv=a("Finally, this model supports inherent JAX features such as:"),dv=p(),Ce=n("ul"),Cd=n("li"),Fr=n("a"),cv=a("Just-In-Time (JIT) compilation"),pv=p(),jd=n("li"),qr=n("a"),hv=a("Automatic Differentiation"),mv=p(),Ad=n("li"),zr=n("a"),gv=a("Vectorization"),fv=p(),Ld=n("li"),Mr=n("a"),uv=a("Parallelization"),_v=p(),$e=n("div"),v(Er.$$.fragment),bv=p(),qt=n("p"),kv=a("The "),Od=n("code"),vv=a("FlaxBigBirdPreTrainedModel"),Bv=a(" forward method, overrides the "),Id=n("code"),yv=a("__call__"),$v=a(" special method."),wv=p(),v(Wo.$$.fragment),Tv=p(),v(Uo.$$.fragment),xp=p(),zt=n("h2"),Qo=n("a"),Sd=n("span"),v(Pr.$$.fragment),xv=p(),Nd=n("span"),Fv=a("FlaxBigBirdForMultipleChoice"),Fp=p(),S=n("div"),v(Cr.$$.fragment),qv=p(),Dd=n("p"),zv=a(`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Mv=p(),jr=n("p"),Ev=a("This model inherits from "),Da=n("a"),Pv=a("FlaxPreTrainedModel"),Cv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),jv=p(),Ar=n("p"),Av=a("This model is also a Flax Linen "),Lr=n("a"),Lv=a("flax.linen.Module"),Ov=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Iv=p(),Wd=n("p"),Sv=a("Finally, this model supports inherent JAX features such as:"),Nv=p(),je=n("ul"),Ud=n("li"),Or=n("a"),Dv=a("Just-In-Time (JIT) compilation"),Wv=p(),Qd=n("li"),Ir=n("a"),Uv=a("Automatic Differentiation"),Qv=p(),Vd=n("li"),Sr=n("a"),Vv=a("Vectorization"),Hv=p(),Hd=n("li"),Nr=n("a"),Jv=a("Parallelization"),Rv=p(),we=n("div"),v(Dr.$$.fragment),Gv=p(),Mt=n("p"),Kv=a("The "),Jd=n("code"),Xv=a("FlaxBigBirdPreTrainedModel"),Yv=a(" forward method, overrides the "),Rd=n("code"),Zv=a("__call__"),eB=a(" special method."),tB=p(),v(Vo.$$.fragment),oB=p(),v(Ho.$$.fragment),qp=p(),Et=n("h2"),Jo=n("a"),Gd=n("span"),v(Wr.$$.fragment),nB=p(),Kd=n("span"),sB=a("FlaxBigBirdForTokenClassification"),zp=p(),N=n("div"),v(Ur.$$.fragment),rB=p(),Xd=n("p"),aB=a(`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),iB=p(),Qr=n("p"),lB=a("This model inherits from "),Wa=n("a"),dB=a("FlaxPreTrainedModel"),cB=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),pB=p(),Vr=n("p"),hB=a("This model is also a Flax Linen "),Hr=n("a"),mB=a("flax.linen.Module"),gB=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),fB=p(),Yd=n("p"),uB=a("Finally, this model supports inherent JAX features such as:"),_B=p(),Ae=n("ul"),Zd=n("li"),Jr=n("a"),bB=a("Just-In-Time (JIT) compilation"),kB=p(),ec=n("li"),Rr=n("a"),vB=a("Automatic Differentiation"),BB=p(),tc=n("li"),Gr=n("a"),yB=a("Vectorization"),$B=p(),oc=n("li"),Kr=n("a"),wB=a("Parallelization"),TB=p(),Te=n("div"),v(Xr.$$.fragment),xB=p(),Pt=n("p"),FB=a("The "),nc=n("code"),qB=a("FlaxBigBirdPreTrainedModel"),zB=a(" forward method, overrides the "),sc=n("code"),MB=a("__call__"),EB=a(" special method."),PB=p(),v(Ro.$$.fragment),CB=p(),v(Go.$$.fragment),Mp=p(),Ct=n("h2"),Ko=n("a"),rc=n("span"),v(Yr.$$.fragment),jB=p(),ac=n("span"),AB=a("FlaxBigBirdForQuestionAnswering"),Ep=p(),D=n("div"),v(Zr.$$.fragment),LB=p(),jt=n("p"),OB=a(`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ic=n("code"),IB=a("span start logits"),SB=a(" and "),lc=n("code"),NB=a("span end logits"),DB=a(")."),WB=p(),ea=n("p"),UB=a("This model inherits from "),Ua=n("a"),QB=a("FlaxPreTrainedModel"),VB=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),HB=p(),ta=n("p"),JB=a("This model is also a Flax Linen "),oa=n("a"),RB=a("flax.linen.Module"),GB=a(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),KB=p(),dc=n("p"),XB=a("Finally, this model supports inherent JAX features such as:"),YB=p(),Le=n("ul"),cc=n("li"),na=n("a"),ZB=a("Just-In-Time (JIT) compilation"),e1=p(),pc=n("li"),sa=n("a"),t1=a("Automatic Differentiation"),o1=p(),hc=n("li"),ra=n("a"),n1=a("Vectorization"),s1=p(),mc=n("li"),aa=n("a"),r1=a("Parallelization"),a1=p(),xe=n("div"),v(ia.$$.fragment),i1=p(),At=n("p"),l1=a("The "),Qa=n("a"),d1=a("FlaxBigBirdForQuestionAnswering"),c1=a(" forward method, overrides the "),gc=n("code"),p1=a("__call__"),h1=a(" special method."),m1=p(),v(Xo.$$.fragment),g1=p(),v(Yo.$$.fragment),this.h()},l(o){const u=DT('[data-svelte="svelte-1phssyn"]',document.head);d=s(u,"META",{name:!0,content:!0}),u.forEach(t),_=h(o),m=s(o,"H1",{class:!0});var la=r(m);f=s(la,"A",{id:!0,class:!0,href:!0});var fc=r(f);b=s(fc,"SPAN",{});var uc=r(b);B(l.$$.fragment,uc),uc.forEach(t),fc.forEach(t),g=h(la),F=s(la,"SPAN",{});var _c=r(F);Ah=i(_c,"BigBird"),_c.forEach(t),la.forEach(t),Dc=h(o),Ve=s(o,"H2",{class:!0});var da=r(Ve);It=s(da,"A",{id:!0,class:!0,href:!0});var bc=r(It);bi=s(bc,"SPAN",{});var kc=r(bi);B(wn.$$.fragment,kc),kc.forEach(t),bc.forEach(t),Lh=h(da),ki=s(da,"SPAN",{});var vc=r(ki);Oh=i(vc,"Overview"),vc.forEach(t),da.forEach(t),Wc=h(o),St=s(o,"P",{});var ca=r(St);Ih=i(ca,"The BigBird model was proposed in "),Tn=s(ca,"A",{href:!0,rel:!0});var Bc=r(Tn);Sh=i(Bc,"Big Bird: Transformers for Longer Sequences"),Bc.forEach(t),Nh=i(ca,` by
Zaheer, Manzil and Guruganesh, Guru and Dubey, Kumar Avinava and Ainslie, Joshua and Alberti, Chris and Ontanon,
Santiago and Pham, Philip and Ravula, Anirudh and Wang, Qifan and Yang, Li and others. BigBird, is a sparse-attention
based transformer which extends Transformer based models, such as BERT to much longer sequences. In addition to sparse
attention, BigBird also applies global attention as well as random attention to the input sequence. Theoretically, it
has been shown that applying sparse, global, and random attention approximates full attention, while being
computationally much more efficient for longer sequences. As a consequence of the capability to handle longer context,
BigBird has shown improved performance on various long document NLP tasks, such as question answering and
summarization, compared to BERT or RoBERTa.`),ca.forEach(t),Uc=h(o),ga=s(o,"P",{});var yc=r(ga);Dh=i(yc,"The abstract from the paper is the following:"),yc.forEach(t),Qc=h(o),fa=s(o,"P",{});var $c=r(fa);vi=s($c,"EM",{});var wc=r(vi);Wh=i(wc,`Transformers-based models, such as BERT, have been one of the most successful deep learning models for NLP.
Unfortunately, one of their core limitations is the quadratic dependency (mainly in terms of memory) on the sequence
length due to their full attention mechanism. To remedy this, we propose, BigBird, a sparse attention mechanism that
reduces this quadratic dependency to linear. We show that BigBird is a universal approximator of sequence functions and
is Turing complete, thereby preserving these properties of the quadratic, full attention model. Along the way, our
theoretical analysis reveals some of the benefits of having O(1) global tokens (such as CLS), that attend to the entire
sequence as part of the sparse attention mechanism. The proposed sparse attention can handle sequences of length up to
8x of what was previously possible using similar hardware. As a consequence of the capability to handle longer context,
BigBird drastically improves performance on various NLP tasks such as question answering and summarization. We also
propose novel applications to genomics data.`),wc.forEach(t),$c.forEach(t),Vc=h(o),ua=s(o,"P",{});var Tc=r(ua);Uh=i(Tc,"Tips:"),Tc.forEach(t),Hc=h(o),V=s(o,"UL",{});var R=r(V);xn=s(R,"LI",{});var pa=r(xn);Qh=i(pa,"For an in-detail explanation on how BigBird\u2019s attention works, see "),Fn=s(pa,"A",{href:!0,rel:!0});var xc=r(Fn);Vh=i(xc,"this blog post"),xc.forEach(t),Hh=i(pa,"."),pa.forEach(t),Jh=h(R),de=s(R,"LI",{});var ge=r(de);Rh=i(ge,"BigBird comes with 2 implementations: "),Bi=s(ge,"STRONG",{});var Fc=r(Bi);Gh=i(Fc,"original_full"),Fc.forEach(t),Kh=i(ge," & "),yi=s(ge,"STRONG",{});var qc=r(yi);Xh=i(qc,"block_sparse"),qc.forEach(t),Yh=i(ge,`. For the sequence length < 1024, using
`),$i=s(ge,"STRONG",{});var zc=r($i);Zh=i(zc,"original_full"),zc.forEach(t),em=i(ge," is advised as there is no benefit in using "),wi=s(ge,"STRONG",{});var Mc=r(wi);tm=i(Mc,"block_sparse"),Mc.forEach(t),om=i(ge," attention."),ge.forEach(t),nm=h(R),Ti=s(R,"LI",{});var Ec=r(Ti);sm=i(Ec,"The code currently uses window size of 3 blocks and 2 global blocks."),Ec.forEach(t),rm=h(R),xi=s(R,"LI",{});var Pc=r(xi);am=i(Pc,"Sequence length must be divisible by block size."),Pc.forEach(t),im=h(R),qn=s(R,"LI",{});var ha=r(qn);lm=i(ha,"Current implementation supports only "),Fi=s(ha,"STRONG",{});var Cc=r(Fi);dm=i(Cc,"ITC"),Cc.forEach(t),cm=i(ha,"."),ha.forEach(t),pm=h(R),_a=s(R,"LI",{});var Va=r(_a);hm=i(Va,"Current implementation doesn\u2019t support "),qi=s(Va,"STRONG",{});var jc=r(qi);mm=i(jc,"num_random_blocks = 0"),jc.forEach(t),Va.forEach(t),R.forEach(t),Jc=h(o),Oe=s(o,"P",{});var Lt=r(Oe);gm=i(Lt,"This model was contributed by "),zn=s(Lt,"A",{href:!0,rel:!0});var Ac=r(zn);fm=i(Ac,"vasudevgupta"),Ac.forEach(t),um=i(Lt,`. The original code can be found
`),Mn=s(Lt,"A",{href:!0,rel:!0});var Lc=r(Mn);_m=i(Lc,"here"),Lc.forEach(t),bm=i(Lt,"."),Lt.forEach(t),Rc=h(o),He=s(o,"H2",{class:!0});var ma=r(He);Nt=s(ma,"A",{id:!0,class:!0,href:!0});var Oc=r(Nt);zi=s(Oc,"SPAN",{});var Ic=r(zi);B(En.$$.fragment,Ic),Ic.forEach(t),Oc.forEach(t),km=h(ma),Mi=s(ma,"SPAN",{});var Sc=r(Mi);vm=i(Sc,"BigBirdConfig"),Sc.forEach(t),ma.forEach(t),Gc=h(o),C=s(o,"DIV",{class:!0});var W=r(C);B(Pn.$$.fragment,W),Bm=h(W),Je=s(W,"P",{});var Ot=r(Je);ym=i(Ot,"This is the configuration class to store the configuration of a "),ba=s(Ot,"A",{href:!0});var Nc=r(ba);$m=i(Nc,"BigBirdModel"),Nc.forEach(t),wm=i(Ot,`. It is used to instantiate an
BigBird model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the BigBird
`),Cn=s(Ot,"A",{href:!0,rel:!0});var k1=r(Cn);Tm=i(k1,"google/bigbird-roberta-base"),k1.forEach(t),xm=i(Ot," architecture."),Ot.forEach(t),Fm=h(W),Re=s(W,"P",{});var Ha=r(Re);qm=i(Ha,"Configuration objects inherit from "),ka=s(Ha,"A",{href:!0});var v1=r(ka);zm=i(v1,"PretrainedConfig"),v1.forEach(t),Mm=i(Ha,` and can be used to control the model outputs. Read the
documentation from `),va=s(Ha,"A",{href:!0});var B1=r(va);Em=i(B1,"PretrainedConfig"),B1.forEach(t),Pm=i(Ha," for more information."),Ha.forEach(t),Cm=h(W),B(Dt.$$.fragment,W),jm=h(W),Ei=s(W,"BLOCKQUOTE",{});var y1=r(Ei);Pi=s(y1,"BLOCKQUOTE",{});var $1=r(Pi);Ci=s($1,"BLOCKQUOTE",{});var w1=r(Ci);ji=s(w1,"P",{});var T1=r(ji);Am=i(T1,"from transformers import BigBirdModel, BigBirdConfig"),T1.forEach(t),w1.forEach(t),$1.forEach(t),y1.forEach(t),Lm=h(W),Ai=s(W,"BLOCKQUOTE",{});var x1=r(Ai);Li=s(x1,"BLOCKQUOTE",{});var F1=r(Li);jn=s(F1,"BLOCKQUOTE",{});var Cp=r(jn);Wt=s(Cp,"H1",{class:!0});var jp=r(Wt);Ut=s(jp,"A",{id:!0,class:!0,href:!0});var q1=r(Ut);Oi=s(q1,"SPAN",{});var z1=r(Oi);B(An.$$.fragment,z1),z1.forEach(t),q1.forEach(t),Om=h(jp),Ii=s(jp,"SPAN",{});var M1=r(Ii);Im=i(M1,"Initializing a BigBird google/bigbird-roberta-base style configuration >>> configuration ="),M1.forEach(t),jp.forEach(t),Sm=h(Cp),Si=s(Cp,"P",{});var E1=r(Si);Nm=i(E1,"BigBirdConfig()"),E1.forEach(t),Cp.forEach(t),F1.forEach(t),x1.forEach(t),Dm=h(W),Ni=s(W,"BLOCKQUOTE",{});var P1=r(Ni);Di=s(P1,"BLOCKQUOTE",{});var C1=r(Di);Ln=s(C1,"BLOCKQUOTE",{});var Ap=r(Ln);Qt=s(Ap,"H1",{class:!0});var Lp=r(Qt);Vt=s(Lp,"A",{id:!0,class:!0,href:!0});var j1=r(Vt);Wi=s(j1,"SPAN",{});var A1=r(Wi);B(On.$$.fragment,A1),A1.forEach(t),j1.forEach(t),Wm=h(Lp),Ui=s(Lp,"SPAN",{});var L1=r(Ui);Um=i(L1,"Initializing a model from the google/bigbird-roberta-base style configuration >>> model ="),L1.forEach(t),Lp.forEach(t),Qm=h(Ap),Qi=s(Ap,"P",{});var O1=r(Qi);Vm=i(O1,"BigBirdModel(configuration)"),O1.forEach(t),Ap.forEach(t),C1.forEach(t),P1.forEach(t),Hm=h(W),Vi=s(W,"BLOCKQUOTE",{});var I1=r(Vi);Hi=s(I1,"BLOCKQUOTE",{});var S1=r(Hi);Ji=s(S1,"BLOCKQUOTE",{});var N1=r(Ji);Ht=s(N1,"H1",{class:!0});var Op=r(Ht);Jt=s(Op,"A",{id:!0,class:!0,href:!0});var D1=r(Jt);Ri=s(D1,"SPAN",{});var W1=r(Ri);B(In.$$.fragment,W1),W1.forEach(t),D1.forEach(t),Jm=h(Op),Gi=s(Op,"SPAN",{});var U1=r(Gi);Rm=i(U1,"Accessing the model configuration >>> configuration = model.config"),U1.forEach(t),Op.forEach(t),N1.forEach(t),S1.forEach(t),I1.forEach(t),W.forEach(t),Kc=h(o),Ge=s(o,"H2",{class:!0});var Ip=r(Ge);Rt=s(Ip,"A",{id:!0,class:!0,href:!0});var Q1=r(Rt);Ki=s(Q1,"SPAN",{});var V1=r(Ki);B(Sn.$$.fragment,V1),V1.forEach(t),Q1.forEach(t),Gm=h(Ip),Xi=s(Ip,"SPAN",{});var H1=r(Xi);Km=i(H1,"BigBirdTokenizer"),H1.forEach(t),Ip.forEach(t),Xc=h(o),j=s(o,"DIV",{class:!0});var Z=r(j);B(Nn.$$.fragment,Z),Xm=h(Z),Dn=s(Z,"P",{});var Sp=r(Dn);Ym=i(Sp,"Construct a BigBird tokenizer. Based on "),Wn=s(Sp,"A",{href:!0,rel:!0});var J1=r(Wn);Zm=i(J1,"SentencePiece"),J1.forEach(t),eg=i(Sp,"."),Sp.forEach(t),tg=h(Z),Un=s(Z,"P",{});var Np=r(Un);og=i(Np,"This tokenizer inherits from "),Ba=s(Np,"A",{href:!0});var R1=r(Ba);ng=i(R1,"PreTrainedTokenizer"),R1.forEach(t),sg=i(Np,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Np.forEach(t),rg=h(Z),Ie=s(Z,"DIV",{class:!0});var Ja=r(Ie);B(Qn.$$.fragment,Ja),ag=h(Ja),Yi=s(Ja,"P",{});var G1=r(Yi);ig=i(G1,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A Big Bird sequence has the following format:`),G1.forEach(t),lg=h(Ja),Vn=s(Ja,"UL",{});var Dp=r(Vn);ya=s(Dp,"LI",{});var f1=r(ya);dg=i(f1,"single sequence: "),Zi=s(f1,"CODE",{});var K1=r(Zi);cg=i(K1,"[CLS] X [SEP]"),K1.forEach(t),f1.forEach(t),pg=h(Dp),$a=s(Dp,"LI",{});var u1=r($a);hg=i(u1,"pair of sequences: "),el=s(u1,"CODE",{});var X1=r(el);mg=i(X1,"[CLS] A [SEP] B [SEP]"),X1.forEach(t),u1.forEach(t),Dp.forEach(t),Ja.forEach(t),gg=h(Z),Gt=s(Z,"DIV",{class:!0});var Wp=r(Gt);B(Hn.$$.fragment,Wp),fg=h(Wp),Jn=s(Wp,"P",{});var Up=r(Jn);ug=i(Up,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),tl=s(Up,"CODE",{});var Y1=r(tl);_g=i(Y1,"prepare_for_model"),Y1.forEach(t),bg=i(Up," method."),Up.forEach(t),Wp.forEach(t),kg=h(Z),Kt=s(Z,"DIV",{class:!0});var Qp=r(Kt);B(Rn.$$.fragment,Qp),vg=h(Qp),Ke=s(Qp,"P",{});var Ra=r(Ke);Bg=i(Ra,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format: :: 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 | first sequence | second
sequence | If `),ol=s(Ra,"CODE",{});var Z1=r(ol);yg=i(Z1,"token_ids_1"),Z1.forEach(t),$g=i(Ra," is "),nl=s(Ra,"CODE",{});var ey=r(nl);wg=i(ey,"None"),ey.forEach(t),Tg=i(Ra,", this method only returns the first portion of the mask (0s)."),Ra.forEach(t),Qp.forEach(t),xg=h(Z),wa=s(Z,"DIV",{class:!0});var ty=r(wa);B(Gn.$$.fragment,ty),ty.forEach(t),Z.forEach(t),Yc=h(o),Xe=s(o,"H2",{class:!0});var Vp=r(Xe);Xt=s(Vp,"A",{id:!0,class:!0,href:!0});var oy=r(Xt);sl=s(oy,"SPAN",{});var ny=r(sl);B(Kn.$$.fragment,ny),ny.forEach(t),oy.forEach(t),Fg=h(Vp),rl=s(Vp,"SPAN",{});var sy=r(rl);qg=i(sy,"BigBirdTokenizerFast"),sy.forEach(t),Vp.forEach(t),Zc=h(o),H=s(o,"DIV",{class:!0});var Ne=r(H);B(Xn.$$.fragment,Ne),zg=h(Ne),Fe=s(Ne,"P",{});var Zo=r(Fe);Mg=i(Zo,"Construct a \u201Cfast\u201D BigBird tokenizer (backed by HuggingFace\u2019s "),al=s(Zo,"EM",{});var ry=r(al);Eg=i(ry,"tokenizers"),ry.forEach(t),Pg=i(Zo,` library). Based on
`),Yn=s(Zo,"A",{href:!0,rel:!0});var ay=r(Yn);Cg=i(ay,"Unigram"),ay.forEach(t),jg=i(Zo,`. This
tokenizer inherits from `),Ta=s(Zo,"A",{href:!0});var iy=r(Ta);Ag=i(iy,"PreTrainedTokenizerFast"),iy.forEach(t),Lg=i(Zo,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),Zo.forEach(t),Og=h(Ne),Se=s(Ne,"DIV",{class:!0});var Ga=r(Se);B(Zn.$$.fragment,Ga),Ig=h(Ga),il=s(Ga,"P",{});var ly=r(il);Sg=i(ly,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An BigBird sequence has the following format:`),ly.forEach(t),Ng=h(Ga),es=s(Ga,"UL",{});var Hp=r(es);xa=s(Hp,"LI",{});var _1=r(xa);Dg=i(_1,"single sequence: "),ll=s(_1,"CODE",{});var dy=r(ll);Wg=i(dy,"[CLS] X [SEP]"),dy.forEach(t),_1.forEach(t),Ug=h(Hp),Fa=s(Hp,"LI",{});var b1=r(Fa);Qg=i(b1,"pair of sequences: "),dl=s(b1,"CODE",{});var cy=r(dl);Vg=i(cy,"[CLS] A [SEP] B [SEP]"),cy.forEach(t),b1.forEach(t),Hp.forEach(t),Ga.forEach(t),Hg=h(Ne),fe=s(Ne,"DIV",{class:!0});var en=r(fe);B(ts.$$.fragment,en),Jg=h(en),cl=s(en,"P",{});var py=r(cl);Rg=i(py,"Creates a mask from the two sequences passed to be used in a sequence-pair classification task. An ALBERT"),py.forEach(t),Gg=h(en),B(Yt.$$.fragment,en),Kg=h(en),pl=s(en,"P",{});var hy=r(pl);Xg=i(hy,"if token_ids_1 is None, only returns the first portion of the mask (0s)."),hy.forEach(t),en.forEach(t),Yg=h(Ne),Zt=s(Ne,"DIV",{class:!0});var Jp=r(Zt);B(os.$$.fragment,Jp),Zg=h(Jp),ns=s(Jp,"P",{});var Rp=r(ns);ef=i(Rp,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),hl=s(Rp,"CODE",{});var my=r(hl);tf=i(my,"prepare_for_model"),my.forEach(t),of=i(Rp," method."),Rp.forEach(t),Jp.forEach(t),Ne.forEach(t),ep=h(o),Ye=s(o,"H2",{class:!0});var Gp=r(Ye);eo=s(Gp,"A",{id:!0,class:!0,href:!0});var gy=r(eo);ml=s(gy,"SPAN",{});var fy=r(ml);B(ss.$$.fragment,fy),fy.forEach(t),gy.forEach(t),nf=h(Gp),gl=s(Gp,"SPAN",{});var uy=r(gl);sf=i(uy,"BigBird specific outputs"),uy.forEach(t),Gp.forEach(t),tp=h(o),Ze=s(o,"DIV",{class:!0});var Kp=r(Ze);B(rs.$$.fragment,Kp),rf=h(Kp),as=s(Kp,"P",{});var Xp=r(as);af=i(Xp,"Output type of "),qa=s(Xp,"A",{href:!0});var _y=r(qa);lf=i(_y,"BigBirdForPreTraining"),_y.forEach(t),df=i(Xp,"."),Xp.forEach(t),Kp.forEach(t),op=h(o),et=s(o,"H2",{class:!0});var Yp=r(et);to=s(Yp,"A",{id:!0,class:!0,href:!0});var by=r(to);fl=s(by,"SPAN",{});var ky=r(fl);B(is.$$.fragment,ky),ky.forEach(t),by.forEach(t),cf=h(Yp),ul=s(Yp,"SPAN",{});var vy=r(ul);pf=i(vy,"BigBirdModel"),vy.forEach(t),Yp.forEach(t),np=h(o),J=s(o,"DIV",{class:!0});var De=r(J);B(ls.$$.fragment,De),hf=h(De),ds=s(De,"P",{});var Zp=r(ds);mf=i(Zp,`The bare BigBird Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),cs=s(Zp,"A",{href:!0,rel:!0});var By=r(cs);gf=i(By,"torch.nn.Module"),By.forEach(t),ff=i(Zp,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Zp.forEach(t),uf=h(De),ps=s(De,"P",{});var eh=r(ps);_f=i(eh,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),hs=s(eh,"A",{href:!0,rel:!0});var yy=r(hs);bf=i(yy,`Attention is
all you need`),yy.forEach(t),kf=i(eh,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),eh.forEach(t),vf=h(De),Q=s(De,"P",{});var ee=r(Q);Bf=i(ee,"To behave as an decoder the model needs to be initialized with the "),_l=s(ee,"CODE",{});var $y=r(_l);yf=i($y,"is_decoder"),$y.forEach(t),$f=i(ee,` argument of the configuration set
to `),bl=s(ee,"CODE",{});var wy=r(bl);wf=i(wy,"True"),wy.forEach(t),Tf=i(ee,". To be used in a Seq2Seq model, the model needs to initialized with both "),kl=s(ee,"CODE",{});var Ty=r(kl);xf=i(Ty,"is_decoder"),Ty.forEach(t),Ff=i(ee,` argument and
`),vl=s(ee,"CODE",{});var xy=r(vl);qf=i(xy,"add_cross_attention"),xy.forEach(t),zf=i(ee," set to "),Bl=s(ee,"CODE",{});var Fy=r(Bl);Mf=i(Fy,"True"),Fy.forEach(t),Ef=i(ee,"; an "),yl=s(ee,"CODE",{});var qy=r(yl);Pf=i(qy,"encoder_hidden_states"),qy.forEach(t),Cf=i(ee," is then expected as an input to the forward pass."),ee.forEach(t),jf=h(De),ue=s(De,"DIV",{class:!0});var tn=r(ue);B(ms.$$.fragment,tn),Af=h(tn),tt=s(tn,"P",{});var Ka=r(tt);Lf=i(Ka,"The "),za=s(Ka,"A",{href:!0});var zy=r(za);Of=i(zy,"BigBirdModel"),zy.forEach(t),If=i(Ka," forward method, overrides the "),$l=s(Ka,"CODE",{});var My=r($l);Sf=i(My,"__call__"),My.forEach(t),Nf=i(Ka," special method."),Ka.forEach(t),Df=h(tn),B(oo.$$.fragment,tn),Wf=h(tn),B(no.$$.fragment,tn),tn.forEach(t),De.forEach(t),sp=h(o),ot=s(o,"H2",{class:!0});var th=r(ot);so=s(th,"A",{id:!0,class:!0,href:!0});var Ey=r(so);wl=s(Ey,"SPAN",{});var Py=r(wl);B(gs.$$.fragment,Py),Py.forEach(t),Ey.forEach(t),Uf=h(th),Tl=s(th,"SPAN",{});var Cy=r(Tl);Qf=i(Cy,"BigBirdForPreTraining"),Cy.forEach(t),th.forEach(t),rp=h(o),nt=s(o,"DIV",{class:!0});var oh=r(nt);B(fs.$$.fragment,oh),Vf=h(oh),_e=s(oh,"DIV",{class:!0});var on=r(_e);B(us.$$.fragment,on),Hf=h(on),st=s(on,"P",{});var Xa=r(st);Jf=i(Xa,"The "),Ma=s(Xa,"A",{href:!0});var jy=r(Ma);Rf=i(jy,"BigBirdForPreTraining"),jy.forEach(t),Gf=i(Xa," forward method, overrides the "),xl=s(Xa,"CODE",{});var Ay=r(xl);Kf=i(Ay,"__call__"),Ay.forEach(t),Xf=i(Xa," special method."),Xa.forEach(t),Yf=h(on),B(ro.$$.fragment,on),Zf=h(on),B(ao.$$.fragment,on),on.forEach(t),oh.forEach(t),ap=h(o),rt=s(o,"H2",{class:!0});var nh=r(rt);io=s(nh,"A",{id:!0,class:!0,href:!0});var Ly=r(io);Fl=s(Ly,"SPAN",{});var Oy=r(Fl);B(_s.$$.fragment,Oy),Oy.forEach(t),Ly.forEach(t),eu=h(nh),ql=s(nh,"SPAN",{});var Iy=r(ql);tu=i(Iy,"BigBirdForCausalLM"),Iy.forEach(t),nh.forEach(t),ip=h(o),qe=s(o,"DIV",{class:!0});var Ya=r(qe);B(bs.$$.fragment,Ya),ou=h(Ya),at=s(Ya,"P",{});var Za=r(at);nu=i(Za,"BigBird Model with a "),zl=s(Za,"CODE",{});var Sy=r(zl);su=i(Sy,"language modeling"),Sy.forEach(t),ru=i(Za,` head on top for CLM fine-tuning.
This model is a PyTorch `),ks=s(Za,"A",{href:!0,rel:!0});var Ny=r(ks);au=i(Ny,"torch.nn.Module"),Ny.forEach(t),iu=i(Za,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Za.forEach(t),lu=h(Ya),be=s(Ya,"DIV",{class:!0});var nn=r(be);B(vs.$$.fragment,nn),du=h(nn),it=s(nn,"P",{});var ei=r(it);cu=i(ei,"The "),Ea=s(ei,"A",{href:!0});var Dy=r(Ea);pu=i(Dy,"BigBirdForCausalLM"),Dy.forEach(t),hu=i(ei," forward method, overrides the "),Ml=s(ei,"CODE",{});var Wy=r(Ml);mu=i(Wy,"__call__"),Wy.forEach(t),gu=i(ei," special method."),ei.forEach(t),fu=h(nn),B(lo.$$.fragment,nn),uu=h(nn),B(co.$$.fragment,nn),nn.forEach(t),Ya.forEach(t),lp=h(o),lt=s(o,"H2",{class:!0});var sh=r(lt);po=s(sh,"A",{id:!0,class:!0,href:!0});var Uy=r(po);El=s(Uy,"SPAN",{});var Qy=r(El);B(Bs.$$.fragment,Qy),Qy.forEach(t),Uy.forEach(t),_u=h(sh),Pl=s(sh,"SPAN",{});var Vy=r(Pl);bu=i(Vy,"BigBirdForMaskedLM"),Vy.forEach(t),sh.forEach(t),dp=h(o),ze=s(o,"DIV",{class:!0});var ti=r(ze);B(ys.$$.fragment,ti),ku=h(ti),dt=s(ti,"P",{});var oi=r(dt);vu=i(oi,"BigBird Model with a "),Cl=s(oi,"CODE",{});var Hy=r(Cl);Bu=i(Hy,"language modeling"),Hy.forEach(t),yu=i(oi,` head on top.
This model is a PyTorch `),$s=s(oi,"A",{href:!0,rel:!0});var Jy=r($s);$u=i(Jy,"torch.nn.Module"),Jy.forEach(t),wu=i(oi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),oi.forEach(t),Tu=h(ti),K=s(ti,"DIV",{class:!0});var We=r(K);B(ws.$$.fragment,We),xu=h(We),ct=s(We,"P",{});var ni=r(ct);Fu=i(ni,"The "),Pa=s(ni,"A",{href:!0});var Ry=r(Pa);qu=i(Ry,"BigBirdForMaskedLM"),Ry.forEach(t),zu=i(ni," forward method, overrides the "),jl=s(ni,"CODE",{});var Gy=r(jl);Mu=i(Gy,"__call__"),Gy.forEach(t),Eu=i(ni," special method."),ni.forEach(t),Pu=h(We),B(ho.$$.fragment,We),Cu=h(We),B(mo.$$.fragment,We),ju=h(We),B(go.$$.fragment,We),We.forEach(t),ti.forEach(t),cp=h(o),pt=s(o,"H2",{class:!0});var rh=r(pt);fo=s(rh,"A",{id:!0,class:!0,href:!0});var Ky=r(fo);Al=s(Ky,"SPAN",{});var Xy=r(Al);B(Ts.$$.fragment,Xy),Xy.forEach(t),Ky.forEach(t),Au=h(rh),Ll=s(rh,"SPAN",{});var Yy=r(Ll);Lu=i(Yy,"BigBirdForSequenceClassification"),Yy.forEach(t),rh.forEach(t),pp=h(o),ce=s(o,"DIV",{class:!0});var sn=r(ce);B(xs.$$.fragment,sn),Ou=h(sn),Ol=s(sn,"P",{});var Zy=r(Ol);Iu=i(Zy,`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Zy.forEach(t),Su=h(sn),Fs=s(sn,"P",{});var ah=r(Fs);Nu=i(ah,"This model is a PyTorch "),qs=s(ah,"A",{href:!0,rel:!0});var e$=r(qs);Du=i(e$,"torch.nn.Module"),e$.forEach(t),Wu=i(ah,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ah.forEach(t),Uu=h(sn),U=s(sn,"DIV",{class:!0});var te=r(U);B(zs.$$.fragment,te),Qu=h(te),ht=s(te,"P",{});var si=r(ht);Vu=i(si,"The "),Ca=s(si,"A",{href:!0});var t$=r(Ca);Hu=i(t$,"BigBirdForSequenceClassification"),t$.forEach(t),Ju=i(si," forward method, overrides the "),Il=s(si,"CODE",{});var o$=r(Il);Ru=i(o$,"__call__"),o$.forEach(t),Gu=i(si," special method."),si.forEach(t),Ku=h(te),B(uo.$$.fragment,te),Xu=h(te),B(_o.$$.fragment,te),Yu=h(te),B(bo.$$.fragment,te),Zu=h(te),B(ko.$$.fragment,te),e_=h(te),B(vo.$$.fragment,te),te.forEach(t),sn.forEach(t),hp=h(o),mt=s(o,"H2",{class:!0});var ih=r(mt);Bo=s(ih,"A",{id:!0,class:!0,href:!0});var n$=r(Bo);Sl=s(n$,"SPAN",{});var s$=r(Sl);B(Ms.$$.fragment,s$),s$.forEach(t),n$.forEach(t),t_=h(ih),Nl=s(ih,"SPAN",{});var r$=r(Nl);o_=i(r$,"BigBirdForMultipleChoice"),r$.forEach(t),ih.forEach(t),mp=h(o),pe=s(o,"DIV",{class:!0});var rn=r(pe);B(Es.$$.fragment,rn),n_=h(rn),Dl=s(rn,"P",{});var a$=r(Dl);s_=i(a$,`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),a$.forEach(t),r_=h(rn),Ps=s(rn,"P",{});var lh=r(Ps);a_=i(lh,"This model is a PyTorch "),Cs=s(lh,"A",{href:!0,rel:!0});var i$=r(Cs);i_=i(i$,"torch.nn.Module"),i$.forEach(t),l_=i(lh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),lh.forEach(t),d_=h(rn),ke=s(rn,"DIV",{class:!0});var an=r(ke);B(js.$$.fragment,an),c_=h(an),gt=s(an,"P",{});var ri=r(gt);p_=i(ri,"The "),ja=s(ri,"A",{href:!0});var l$=r(ja);h_=i(l$,"BigBirdForMultipleChoice"),l$.forEach(t),m_=i(ri," forward method, overrides the "),Wl=s(ri,"CODE",{});var d$=r(Wl);g_=i(d$,"__call__"),d$.forEach(t),f_=i(ri," special method."),ri.forEach(t),u_=h(an),B(yo.$$.fragment,an),__=h(an),B($o.$$.fragment,an),an.forEach(t),rn.forEach(t),gp=h(o),ft=s(o,"H2",{class:!0});var dh=r(ft);wo=s(dh,"A",{id:!0,class:!0,href:!0});var c$=r(wo);Ul=s(c$,"SPAN",{});var p$=r(Ul);B(As.$$.fragment,p$),p$.forEach(t),c$.forEach(t),b_=h(dh),Ql=s(dh,"SPAN",{});var h$=r(Ql);k_=i(h$,"BigBirdForTokenClassification"),h$.forEach(t),dh.forEach(t),fp=h(o),he=s(o,"DIV",{class:!0});var ln=r(he);B(Ls.$$.fragment,ln),v_=h(ln),Vl=s(ln,"P",{});var m$=r(Vl);B_=i(m$,`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),m$.forEach(t),y_=h(ln),Os=s(ln,"P",{});var ch=r(Os);$_=i(ch,"This model is a PyTorch "),Is=s(ch,"A",{href:!0,rel:!0});var g$=r(Is);w_=i(g$,"torch.nn.Module"),g$.forEach(t),T_=i(ch,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ch.forEach(t),x_=h(ln),X=s(ln,"DIV",{class:!0});var Ue=r(X);B(Ss.$$.fragment,Ue),F_=h(Ue),ut=s(Ue,"P",{});var ai=r(ut);q_=i(ai,"The "),Aa=s(ai,"A",{href:!0});var f$=r(Aa);z_=i(f$,"BigBirdForTokenClassification"),f$.forEach(t),M_=i(ai," forward method, overrides the "),Hl=s(ai,"CODE",{});var u$=r(Hl);E_=i(u$,"__call__"),u$.forEach(t),P_=i(ai," special method."),ai.forEach(t),C_=h(Ue),B(To.$$.fragment,Ue),j_=h(Ue),B(xo.$$.fragment,Ue),A_=h(Ue),B(Fo.$$.fragment,Ue),Ue.forEach(t),ln.forEach(t),up=h(o),_t=s(o,"H2",{class:!0});var ph=r(_t);qo=s(ph,"A",{id:!0,class:!0,href:!0});var _$=r(qo);Jl=s(_$,"SPAN",{});var b$=r(Jl);B(Ns.$$.fragment,b$),b$.forEach(t),_$.forEach(t),L_=h(ph),Rl=s(ph,"SPAN",{});var k$=r(Rl);O_=i(k$,"BigBirdForQuestionAnswering"),k$.forEach(t),ph.forEach(t),_p=h(o),me=s(o,"DIV",{class:!0});var dn=r(me);B(Ds.$$.fragment,dn),I_=h(dn),bt=s(dn,"P",{});var ii=r(bt);S_=i(ii,`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Gl=s(ii,"CODE",{});var v$=r(Gl);N_=i(v$,"span start logits"),v$.forEach(t),D_=i(ii," and "),Kl=s(ii,"CODE",{});var B$=r(Kl);W_=i(B$,"span end logits"),B$.forEach(t),U_=i(ii,")."),ii.forEach(t),Q_=h(dn),Ws=s(dn,"P",{});var hh=r(Ws);V_=i(hh,"This model is a PyTorch "),Us=s(hh,"A",{href:!0,rel:!0});var y$=r(Us);H_=i(y$,"torch.nn.Module"),y$.forEach(t),J_=i(hh,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),hh.forEach(t),R_=h(dn),Y=s(dn,"DIV",{class:!0});var Qe=r(Y);B(Qs.$$.fragment,Qe),G_=h(Qe),kt=s(Qe,"P",{});var li=r(kt);K_=i(li,"The "),La=s(li,"A",{href:!0});var $$=r(La);X_=i($$,"BigBirdForQuestionAnswering"),$$.forEach(t),Y_=i(li," forward method, overrides the "),Xl=s(li,"CODE",{});var w$=r(Xl);Z_=i(w$,"__call__"),w$.forEach(t),eb=i(li," special method."),li.forEach(t),tb=h(Qe),B(zo.$$.fragment,Qe),ob=h(Qe),B(Mo.$$.fragment,Qe),nb=h(Qe),B(Eo.$$.fragment,Qe),Qe.forEach(t),dn.forEach(t),bp=h(o),vt=s(o,"H2",{class:!0});var mh=r(vt);Po=s(mh,"A",{id:!0,class:!0,href:!0});var T$=r(Po);Yl=s(T$,"SPAN",{});var x$=r(Yl);B(Vs.$$.fragment,x$),x$.forEach(t),T$.forEach(t),sb=h(mh),Zl=s(mh,"SPAN",{});var F$=r(Zl);rb=i(F$,"FlaxBigBirdModel"),F$.forEach(t),mh.forEach(t),kp=h(o),A=s(o,"DIV",{class:!0});var oe=r(A);B(Hs.$$.fragment,oe),ab=h(oe),ed=s(oe,"P",{});var q$=r(ed);ib=i(q$,"The bare BigBird Model transformer outputting raw hidden-states without any specific head on top."),q$.forEach(t),lb=h(oe),Js=s(oe,"P",{});var gh=r(Js);db=i(gh,"This model inherits from "),Oa=s(gh,"A",{href:!0});var z$=r(Oa);cb=i(z$,"FlaxPreTrainedModel"),z$.forEach(t),pb=i(gh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),gh.forEach(t),hb=h(oe),Rs=s(oe,"P",{});var fh=r(Rs);mb=i(fh,"This model is also a Flax Linen "),Gs=s(fh,"A",{href:!0,rel:!0});var M$=r(Gs);gb=i(M$,"flax.linen.Module"),M$.forEach(t),fb=i(fh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),fh.forEach(t),ub=h(oe),td=s(oe,"P",{});var E$=r(td);_b=i(E$,"Finally, this model supports inherent JAX features such as:"),E$.forEach(t),bb=h(oe),Me=s(oe,"UL",{});var cn=r(Me);od=s(cn,"LI",{});var P$=r(od);Ks=s(P$,"A",{href:!0,rel:!0});var C$=r(Ks);kb=i(C$,"Just-In-Time (JIT) compilation"),C$.forEach(t),P$.forEach(t),vb=h(cn),nd=s(cn,"LI",{});var j$=r(nd);Xs=s(j$,"A",{href:!0,rel:!0});var A$=r(Xs);Bb=i(A$,"Automatic Differentiation"),A$.forEach(t),j$.forEach(t),yb=h(cn),sd=s(cn,"LI",{});var L$=r(sd);Ys=s(L$,"A",{href:!0,rel:!0});var O$=r(Ys);$b=i(O$,"Vectorization"),O$.forEach(t),L$.forEach(t),wb=h(cn),rd=s(cn,"LI",{});var I$=r(rd);Zs=s(I$,"A",{href:!0,rel:!0});var S$=r(Zs);Tb=i(S$,"Parallelization"),S$.forEach(t),I$.forEach(t),cn.forEach(t),xb=h(oe),ve=s(oe,"DIV",{class:!0});var pn=r(ve);B(er.$$.fragment,pn),Fb=h(pn),Bt=s(pn,"P",{});var di=r(Bt);qb=i(di,"The "),ad=s(di,"CODE",{});var N$=r(ad);zb=i(N$,"FlaxBigBirdPreTrainedModel"),N$.forEach(t),Mb=i(di," forward method, overrides the "),id=s(di,"CODE",{});var D$=r(id);Eb=i(D$,"__call__"),D$.forEach(t),Pb=i(di," special method."),di.forEach(t),Cb=h(pn),B(Co.$$.fragment,pn),jb=h(pn),B(jo.$$.fragment,pn),pn.forEach(t),oe.forEach(t),vp=h(o),yt=s(o,"H2",{class:!0});var uh=r(yt);Ao=s(uh,"A",{id:!0,class:!0,href:!0});var W$=r(Ao);ld=s(W$,"SPAN",{});var U$=r(ld);B(tr.$$.fragment,U$),U$.forEach(t),W$.forEach(t),Ab=h(uh),dd=s(uh,"SPAN",{});var Q$=r(dd);Lb=i(Q$,"FlaxBigBirdForPreTraining"),Q$.forEach(t),uh.forEach(t),Bp=h(o),L=s(o,"DIV",{class:!0});var ne=r(L);B(or.$$.fragment,ne),Ob=h(ne),$t=s(ne,"P",{});var ci=r($t);Ib=i(ci,"BigBird Model with two heads on top as done during the pretraining: a "),cd=s(ci,"CODE",{});var V$=r(cd);Sb=i(V$,"masked language modeling"),V$.forEach(t),Nb=i(ci," head and a "),pd=s(ci,"CODE",{});var H$=r(pd);Db=i(H$,"next sentence prediction (classification)"),H$.forEach(t),Wb=i(ci," head."),ci.forEach(t),Ub=h(ne),nr=s(ne,"P",{});var _h=r(nr);Qb=i(_h,"This model inherits from "),Ia=s(_h,"A",{href:!0});var J$=r(Ia);Vb=i(J$,"FlaxPreTrainedModel"),J$.forEach(t),Hb=i(_h,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),_h.forEach(t),Jb=h(ne),sr=s(ne,"P",{});var bh=r(sr);Rb=i(bh,"This model is also a Flax Linen "),rr=s(bh,"A",{href:!0,rel:!0});var R$=r(rr);Gb=i(R$,"flax.linen.Module"),R$.forEach(t),Kb=i(bh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),bh.forEach(t),Xb=h(ne),hd=s(ne,"P",{});var G$=r(hd);Yb=i(G$,"Finally, this model supports inherent JAX features such as:"),G$.forEach(t),Zb=h(ne),Ee=s(ne,"UL",{});var hn=r(Ee);md=s(hn,"LI",{});var K$=r(md);ar=s(K$,"A",{href:!0,rel:!0});var X$=r(ar);ek=i(X$,"Just-In-Time (JIT) compilation"),X$.forEach(t),K$.forEach(t),tk=h(hn),gd=s(hn,"LI",{});var Y$=r(gd);ir=s(Y$,"A",{href:!0,rel:!0});var Z$=r(ir);ok=i(Z$,"Automatic Differentiation"),Z$.forEach(t),Y$.forEach(t),nk=h(hn),fd=s(hn,"LI",{});var ew=r(fd);lr=s(ew,"A",{href:!0,rel:!0});var tw=r(lr);sk=i(tw,"Vectorization"),tw.forEach(t),ew.forEach(t),rk=h(hn),ud=s(hn,"LI",{});var ow=r(ud);dr=s(ow,"A",{href:!0,rel:!0});var nw=r(dr);ak=i(nw,"Parallelization"),nw.forEach(t),ow.forEach(t),hn.forEach(t),ik=h(ne),Be=s(ne,"DIV",{class:!0});var mn=r(Be);B(cr.$$.fragment,mn),lk=h(mn),wt=s(mn,"P",{});var pi=r(wt);dk=i(pi,"The "),_d=s(pi,"CODE",{});var sw=r(_d);ck=i(sw,"FlaxBigBirdPreTrainedModel"),sw.forEach(t),pk=i(pi," forward method, overrides the "),bd=s(pi,"CODE",{});var rw=r(bd);hk=i(rw,"__call__"),rw.forEach(t),mk=i(pi," special method."),pi.forEach(t),gk=h(mn),B(Lo.$$.fragment,mn),fk=h(mn),B(Oo.$$.fragment,mn),mn.forEach(t),ne.forEach(t),yp=h(o),Tt=s(o,"H2",{class:!0});var kh=r(Tt);Io=s(kh,"A",{id:!0,class:!0,href:!0});var aw=r(Io);kd=s(aw,"SPAN",{});var iw=r(kd);B(pr.$$.fragment,iw),iw.forEach(t),aw.forEach(t),uk=h(kh),vd=s(kh,"SPAN",{});var lw=r(vd);_k=i(lw,"FlaxBigBirdForMaskedLM"),lw.forEach(t),kh.forEach(t),$p=h(o),O=s(o,"DIV",{class:!0});var se=r(O);B(hr.$$.fragment,se),bk=h(se),mr=s(se,"P",{});var vh=r(mr);kk=i(vh,"BigBird Model with a "),Bd=s(vh,"CODE",{});var dw=r(Bd);vk=i(dw,"language modeling"),dw.forEach(t),Bk=i(vh," head on top."),vh.forEach(t),yk=h(se),gr=s(se,"P",{});var Bh=r(gr);$k=i(Bh,"This model inherits from "),Sa=s(Bh,"A",{href:!0});var cw=r(Sa);wk=i(cw,"FlaxPreTrainedModel"),cw.forEach(t),Tk=i(Bh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Bh.forEach(t),xk=h(se),fr=s(se,"P",{});var yh=r(fr);Fk=i(yh,"This model is also a Flax Linen "),ur=s(yh,"A",{href:!0,rel:!0});var pw=r(ur);qk=i(pw,"flax.linen.Module"),pw.forEach(t),zk=i(yh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),yh.forEach(t),Mk=h(se),yd=s(se,"P",{});var hw=r(yd);Ek=i(hw,"Finally, this model supports inherent JAX features such as:"),hw.forEach(t),Pk=h(se),Pe=s(se,"UL",{});var gn=r(Pe);$d=s(gn,"LI",{});var mw=r($d);_r=s(mw,"A",{href:!0,rel:!0});var gw=r(_r);Ck=i(gw,"Just-In-Time (JIT) compilation"),gw.forEach(t),mw.forEach(t),jk=h(gn),wd=s(gn,"LI",{});var fw=r(wd);br=s(fw,"A",{href:!0,rel:!0});var uw=r(br);Ak=i(uw,"Automatic Differentiation"),uw.forEach(t),fw.forEach(t),Lk=h(gn),Td=s(gn,"LI",{});var _w=r(Td);kr=s(_w,"A",{href:!0,rel:!0});var bw=r(kr);Ok=i(bw,"Vectorization"),bw.forEach(t),_w.forEach(t),Ik=h(gn),xd=s(gn,"LI",{});var kw=r(xd);vr=s(kw,"A",{href:!0,rel:!0});var vw=r(vr);Sk=i(vw,"Parallelization"),vw.forEach(t),kw.forEach(t),gn.forEach(t),Nk=h(se),ye=s(se,"DIV",{class:!0});var fn=r(ye);B(Br.$$.fragment,fn),Dk=h(fn),xt=s(fn,"P",{});var hi=r(xt);Wk=i(hi,"The "),Fd=s(hi,"CODE",{});var Bw=r(Fd);Uk=i(Bw,"FlaxBigBirdPreTrainedModel"),Bw.forEach(t),Qk=i(hi," forward method, overrides the "),qd=s(hi,"CODE",{});var yw=r(qd);Vk=i(yw,"__call__"),yw.forEach(t),Hk=i(hi," special method."),hi.forEach(t),Jk=h(fn),B(So.$$.fragment,fn),Rk=h(fn),B(No.$$.fragment,fn),fn.forEach(t),se.forEach(t),wp=h(o),Ft=s(o,"H2",{class:!0});var $h=r(Ft);Do=s($h,"A",{id:!0,class:!0,href:!0});var $w=r(Do);zd=s($w,"SPAN",{});var ww=r(zd);B(yr.$$.fragment,ww),ww.forEach(t),$w.forEach(t),Gk=h($h),Md=s($h,"SPAN",{});var Tw=r(Md);Kk=i(Tw,"FlaxBigBirdForSequenceClassification"),Tw.forEach(t),$h.forEach(t),Tp=h(o),I=s(o,"DIV",{class:!0});var re=r(I);B($r.$$.fragment,re),Xk=h(re),Ed=s(re,"P",{});var xw=r(Ed);Yk=i(xw,`BigBird Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),xw.forEach(t),Zk=h(re),wr=s(re,"P",{});var wh=r(wr);ev=i(wh,"This model inherits from "),Na=s(wh,"A",{href:!0});var Fw=r(Na);tv=i(Fw,"FlaxPreTrainedModel"),Fw.forEach(t),ov=i(wh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),wh.forEach(t),nv=h(re),Tr=s(re,"P",{});var Th=r(Tr);sv=i(Th,"This model is also a Flax Linen "),xr=s(Th,"A",{href:!0,rel:!0});var qw=r(xr);rv=i(qw,"flax.linen.Module"),qw.forEach(t),av=i(Th,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Th.forEach(t),iv=h(re),Pd=s(re,"P",{});var zw=r(Pd);lv=i(zw,"Finally, this model supports inherent JAX features such as:"),zw.forEach(t),dv=h(re),Ce=s(re,"UL",{});var un=r(Ce);Cd=s(un,"LI",{});var Mw=r(Cd);Fr=s(Mw,"A",{href:!0,rel:!0});var Ew=r(Fr);cv=i(Ew,"Just-In-Time (JIT) compilation"),Ew.forEach(t),Mw.forEach(t),pv=h(un),jd=s(un,"LI",{});var Pw=r(jd);qr=s(Pw,"A",{href:!0,rel:!0});var Cw=r(qr);hv=i(Cw,"Automatic Differentiation"),Cw.forEach(t),Pw.forEach(t),mv=h(un),Ad=s(un,"LI",{});var jw=r(Ad);zr=s(jw,"A",{href:!0,rel:!0});var Aw=r(zr);gv=i(Aw,"Vectorization"),Aw.forEach(t),jw.forEach(t),fv=h(un),Ld=s(un,"LI",{});var Lw=r(Ld);Mr=s(Lw,"A",{href:!0,rel:!0});var Ow=r(Mr);uv=i(Ow,"Parallelization"),Ow.forEach(t),Lw.forEach(t),un.forEach(t),_v=h(re),$e=s(re,"DIV",{class:!0});var _n=r($e);B(Er.$$.fragment,_n),bv=h(_n),qt=s(_n,"P",{});var mi=r(qt);kv=i(mi,"The "),Od=s(mi,"CODE",{});var Iw=r(Od);vv=i(Iw,"FlaxBigBirdPreTrainedModel"),Iw.forEach(t),Bv=i(mi," forward method, overrides the "),Id=s(mi,"CODE",{});var Sw=r(Id);yv=i(Sw,"__call__"),Sw.forEach(t),$v=i(mi," special method."),mi.forEach(t),wv=h(_n),B(Wo.$$.fragment,_n),Tv=h(_n),B(Uo.$$.fragment,_n),_n.forEach(t),re.forEach(t),xp=h(o),zt=s(o,"H2",{class:!0});var xh=r(zt);Qo=s(xh,"A",{id:!0,class:!0,href:!0});var Nw=r(Qo);Sd=s(Nw,"SPAN",{});var Dw=r(Sd);B(Pr.$$.fragment,Dw),Dw.forEach(t),Nw.forEach(t),xv=h(xh),Nd=s(xh,"SPAN",{});var Ww=r(Nd);Fv=i(Ww,"FlaxBigBirdForMultipleChoice"),Ww.forEach(t),xh.forEach(t),Fp=h(o),S=s(o,"DIV",{class:!0});var ae=r(S);B(Cr.$$.fragment,ae),qv=h(ae),Dd=s(ae,"P",{});var Uw=r(Dd);zv=i(Uw,`BigBird Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Uw.forEach(t),Mv=h(ae),jr=s(ae,"P",{});var Fh=r(jr);Ev=i(Fh,"This model inherits from "),Da=s(Fh,"A",{href:!0});var Qw=r(Da);Pv=i(Qw,"FlaxPreTrainedModel"),Qw.forEach(t),Cv=i(Fh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Fh.forEach(t),jv=h(ae),Ar=s(ae,"P",{});var qh=r(Ar);Av=i(qh,"This model is also a Flax Linen "),Lr=s(qh,"A",{href:!0,rel:!0});var Vw=r(Lr);Lv=i(Vw,"flax.linen.Module"),Vw.forEach(t),Ov=i(qh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),qh.forEach(t),Iv=h(ae),Wd=s(ae,"P",{});var Hw=r(Wd);Sv=i(Hw,"Finally, this model supports inherent JAX features such as:"),Hw.forEach(t),Nv=h(ae),je=s(ae,"UL",{});var bn=r(je);Ud=s(bn,"LI",{});var Jw=r(Ud);Or=s(Jw,"A",{href:!0,rel:!0});var Rw=r(Or);Dv=i(Rw,"Just-In-Time (JIT) compilation"),Rw.forEach(t),Jw.forEach(t),Wv=h(bn),Qd=s(bn,"LI",{});var Gw=r(Qd);Ir=s(Gw,"A",{href:!0,rel:!0});var Kw=r(Ir);Uv=i(Kw,"Automatic Differentiation"),Kw.forEach(t),Gw.forEach(t),Qv=h(bn),Vd=s(bn,"LI",{});var Xw=r(Vd);Sr=s(Xw,"A",{href:!0,rel:!0});var Yw=r(Sr);Vv=i(Yw,"Vectorization"),Yw.forEach(t),Xw.forEach(t),Hv=h(bn),Hd=s(bn,"LI",{});var Zw=r(Hd);Nr=s(Zw,"A",{href:!0,rel:!0});var eT=r(Nr);Jv=i(eT,"Parallelization"),eT.forEach(t),Zw.forEach(t),bn.forEach(t),Rv=h(ae),we=s(ae,"DIV",{class:!0});var kn=r(we);B(Dr.$$.fragment,kn),Gv=h(kn),Mt=s(kn,"P",{});var gi=r(Mt);Kv=i(gi,"The "),Jd=s(gi,"CODE",{});var tT=r(Jd);Xv=i(tT,"FlaxBigBirdPreTrainedModel"),tT.forEach(t),Yv=i(gi," forward method, overrides the "),Rd=s(gi,"CODE",{});var oT=r(Rd);Zv=i(oT,"__call__"),oT.forEach(t),eB=i(gi," special method."),gi.forEach(t),tB=h(kn),B(Vo.$$.fragment,kn),oB=h(kn),B(Ho.$$.fragment,kn),kn.forEach(t),ae.forEach(t),qp=h(o),Et=s(o,"H2",{class:!0});var zh=r(Et);Jo=s(zh,"A",{id:!0,class:!0,href:!0});var nT=r(Jo);Gd=s(nT,"SPAN",{});var sT=r(Gd);B(Wr.$$.fragment,sT),sT.forEach(t),nT.forEach(t),nB=h(zh),Kd=s(zh,"SPAN",{});var rT=r(Kd);sB=i(rT,"FlaxBigBirdForTokenClassification"),rT.forEach(t),zh.forEach(t),zp=h(o),N=s(o,"DIV",{class:!0});var ie=r(N);B(Ur.$$.fragment,ie),rB=h(ie),Xd=s(ie,"P",{});var aT=r(Xd);aB=i(aT,`BigBird Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),aT.forEach(t),iB=h(ie),Qr=s(ie,"P",{});var Mh=r(Qr);lB=i(Mh,"This model inherits from "),Wa=s(Mh,"A",{href:!0});var iT=r(Wa);dB=i(iT,"FlaxPreTrainedModel"),iT.forEach(t),cB=i(Mh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Mh.forEach(t),pB=h(ie),Vr=s(ie,"P",{});var Eh=r(Vr);hB=i(Eh,"This model is also a Flax Linen "),Hr=s(Eh,"A",{href:!0,rel:!0});var lT=r(Hr);mB=i(lT,"flax.linen.Module"),lT.forEach(t),gB=i(Eh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Eh.forEach(t),fB=h(ie),Yd=s(ie,"P",{});var dT=r(Yd);uB=i(dT,"Finally, this model supports inherent JAX features such as:"),dT.forEach(t),_B=h(ie),Ae=s(ie,"UL",{});var vn=r(Ae);Zd=s(vn,"LI",{});var cT=r(Zd);Jr=s(cT,"A",{href:!0,rel:!0});var pT=r(Jr);bB=i(pT,"Just-In-Time (JIT) compilation"),pT.forEach(t),cT.forEach(t),kB=h(vn),ec=s(vn,"LI",{});var hT=r(ec);Rr=s(hT,"A",{href:!0,rel:!0});var mT=r(Rr);vB=i(mT,"Automatic Differentiation"),mT.forEach(t),hT.forEach(t),BB=h(vn),tc=s(vn,"LI",{});var gT=r(tc);Gr=s(gT,"A",{href:!0,rel:!0});var fT=r(Gr);yB=i(fT,"Vectorization"),fT.forEach(t),gT.forEach(t),$B=h(vn),oc=s(vn,"LI",{});var uT=r(oc);Kr=s(uT,"A",{href:!0,rel:!0});var _T=r(Kr);wB=i(_T,"Parallelization"),_T.forEach(t),uT.forEach(t),vn.forEach(t),TB=h(ie),Te=s(ie,"DIV",{class:!0});var Bn=r(Te);B(Xr.$$.fragment,Bn),xB=h(Bn),Pt=s(Bn,"P",{});var fi=r(Pt);FB=i(fi,"The "),nc=s(fi,"CODE",{});var bT=r(nc);qB=i(bT,"FlaxBigBirdPreTrainedModel"),bT.forEach(t),zB=i(fi," forward method, overrides the "),sc=s(fi,"CODE",{});var kT=r(sc);MB=i(kT,"__call__"),kT.forEach(t),EB=i(fi," special method."),fi.forEach(t),PB=h(Bn),B(Ro.$$.fragment,Bn),CB=h(Bn),B(Go.$$.fragment,Bn),Bn.forEach(t),ie.forEach(t),Mp=h(o),Ct=s(o,"H2",{class:!0});var Ph=r(Ct);Ko=s(Ph,"A",{id:!0,class:!0,href:!0});var vT=r(Ko);rc=s(vT,"SPAN",{});var BT=r(rc);B(Yr.$$.fragment,BT),BT.forEach(t),vT.forEach(t),jB=h(Ph),ac=s(Ph,"SPAN",{});var yT=r(ac);AB=i(yT,"FlaxBigBirdForQuestionAnswering"),yT.forEach(t),Ph.forEach(t),Ep=h(o),D=s(o,"DIV",{class:!0});var le=r(D);B(Zr.$$.fragment,le),LB=h(le),jt=s(le,"P",{});var ui=r(jt);OB=i(ui,`BigBird Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ic=s(ui,"CODE",{});var $T=r(ic);IB=i($T,"span start logits"),$T.forEach(t),SB=i(ui," and "),lc=s(ui,"CODE",{});var wT=r(lc);NB=i(wT,"span end logits"),wT.forEach(t),DB=i(ui,")."),ui.forEach(t),WB=h(le),ea=s(le,"P",{});var Ch=r(ea);UB=i(Ch,"This model inherits from "),Ua=s(Ch,"A",{href:!0});var TT=r(Ua);QB=i(TT,"FlaxPreTrainedModel"),TT.forEach(t),VB=i(Ch,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ch.forEach(t),HB=h(le),ta=s(le,"P",{});var jh=r(ta);JB=i(jh,"This model is also a Flax Linen "),oa=s(jh,"A",{href:!0,rel:!0});var xT=r(oa);RB=i(xT,"flax.linen.Module"),xT.forEach(t),GB=i(jh,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),jh.forEach(t),KB=h(le),dc=s(le,"P",{});var FT=r(dc);XB=i(FT,"Finally, this model supports inherent JAX features such as:"),FT.forEach(t),YB=h(le),Le=s(le,"UL",{});var yn=r(Le);cc=s(yn,"LI",{});var qT=r(cc);na=s(qT,"A",{href:!0,rel:!0});var zT=r(na);ZB=i(zT,"Just-In-Time (JIT) compilation"),zT.forEach(t),qT.forEach(t),e1=h(yn),pc=s(yn,"LI",{});var MT=r(pc);sa=s(MT,"A",{href:!0,rel:!0});var ET=r(sa);t1=i(ET,"Automatic Differentiation"),ET.forEach(t),MT.forEach(t),o1=h(yn),hc=s(yn,"LI",{});var PT=r(hc);ra=s(PT,"A",{href:!0,rel:!0});var CT=r(ra);n1=i(CT,"Vectorization"),CT.forEach(t),PT.forEach(t),s1=h(yn),mc=s(yn,"LI",{});var jT=r(mc);aa=s(jT,"A",{href:!0,rel:!0});var AT=r(aa);r1=i(AT,"Parallelization"),AT.forEach(t),jT.forEach(t),yn.forEach(t),a1=h(le),xe=s(le,"DIV",{class:!0});var $n=r(xe);B(ia.$$.fragment,$n),i1=h($n),At=s($n,"P",{});var _i=r(At);l1=i(_i,"The "),Qa=s(_i,"A",{href:!0});var LT=r(Qa);d1=i(LT,"FlaxBigBirdForQuestionAnswering"),LT.forEach(t),c1=i(_i," forward method, overrides the "),gc=s(_i,"CODE",{});var OT=r(gc);p1=i(OT,"__call__"),OT.forEach(t),h1=i(_i," special method."),_i.forEach(t),m1=h($n),B(Xo.$$.fragment,$n),g1=h($n),B(Yo.$$.fragment,$n),$n.forEach(t),le.forEach(t),this.h()},h(){c(d,"name","hf:doc:metadata"),c(d,"content",JSON.stringify(q0)),c(f,"id","bigbird"),c(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(f,"href","#bigbird"),c(m,"class","relative group"),c(It,"id","overview"),c(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(It,"href","#overview"),c(Ve,"class","relative group"),c(Tn,"href","https://arxiv.org/abs/2007.14062"),c(Tn,"rel","nofollow"),c(Fn,"href","https://huggingface.co/blog/big-bird"),c(Fn,"rel","nofollow"),c(zn,"href","https://huggingface.co/vasudevgupta"),c(zn,"rel","nofollow"),c(Mn,"href","https://github.com/google-research/bigbird"),c(Mn,"rel","nofollow"),c(Nt,"id","transformers.BigBirdConfig"),c(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Nt,"href","#transformers.BigBirdConfig"),c(He,"class","relative group"),c(ba,"href","/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdModel"),c(Cn,"href","https://huggingface.co/google/bigbird-roberta-base"),c(Cn,"rel","nofollow"),c(ka,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(va,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ut,"id","initializing-a-bigbird-google/bigbird-roberta-base-style-configuration->>>-configuration-="),c(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ut,"href","#initializing-a-bigbird-google/bigbird-roberta-base-style-configuration->>>-configuration-="),c(Wt,"class","relative group"),c(Vt,"id","initializing-a-model-from-the-google/bigbird-roberta-base-style-configuration->>>-model-="),c(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vt,"href","#initializing-a-model-from-the-google/bigbird-roberta-base-style-configuration->>>-model-="),c(Qt,"class","relative group"),c(Jt,"id","accessing-the-model-configuration->>>-configuration-=-model.config"),c(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jt,"href","#accessing-the-model-configuration->>>-configuration-=-model.config"),c(Ht,"class","relative group"),c(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Rt,"id","transformers.BigBirdTokenizer"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.BigBirdTokenizer"),c(Ge,"class","relative group"),c(Wn,"href","https://github.com/google/sentencepiece"),c(Wn,"rel","nofollow"),c(Ba,"href","/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(wa,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Xt,"id","transformers.BigBirdTokenizerFast"),c(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xt,"href","#transformers.BigBirdTokenizerFast"),c(Xe,"class","relative group"),c(Yn,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),c(Yn,"rel","nofollow"),c(Ta,"href","/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(eo,"id","transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput"),c(Ye,"class","relative group"),c(qa,"href","/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdForPreTraining"),c(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(to,"id","transformers.BigBirdModel"),c(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(to,"href","#transformers.BigBirdModel"),c(et,"class","relative group"),c(cs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(cs,"rel","nofollow"),c(hs,"href","https://arxiv.org/abs/1706.03762"),c(hs,"rel","nofollow"),c(za,"href","/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdModel"),c(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(so,"id","transformers.BigBirdForPreTraining"),c(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(so,"href","#transformers.BigBirdForPreTraining"),c(ot,"class","relative group"),c(Ma,"href","/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdForPreTraining"),c(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(io,"id","transformers.BigBirdForCausalLM"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.BigBirdForCausalLM"),c(rt,"class","relative group"),c(ks,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ks,"rel","nofollow"),c(Ea,"href","/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdForCausalLM"),c(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(po,"id","transformers.BigBirdForMaskedLM"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.BigBirdForMaskedLM"),c(lt,"class","relative group"),c($s,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c($s,"rel","nofollow"),c(Pa,"href","/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdForMaskedLM"),c(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(fo,"id","transformers.BigBirdForSequenceClassification"),c(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fo,"href","#transformers.BigBirdForSequenceClassification"),c(pt,"class","relative group"),c(qs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(qs,"rel","nofollow"),c(Ca,"href","/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdForSequenceClassification"),c(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Bo,"id","transformers.BigBirdForMultipleChoice"),c(Bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Bo,"href","#transformers.BigBirdForMultipleChoice"),c(mt,"class","relative group"),c(Cs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Cs,"rel","nofollow"),c(ja,"href","/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdForMultipleChoice"),c(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(wo,"id","transformers.BigBirdForTokenClassification"),c(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(wo,"href","#transformers.BigBirdForTokenClassification"),c(ft,"class","relative group"),c(Is,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Is,"rel","nofollow"),c(Aa,"href","/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdForTokenClassification"),c(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(qo,"id","transformers.BigBirdForQuestionAnswering"),c(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qo,"href","#transformers.BigBirdForQuestionAnswering"),c(_t,"class","relative group"),c(Us,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Us,"rel","nofollow"),c(La,"href","/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.BigBirdForQuestionAnswering"),c(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Po,"id","transformers.FlaxBigBirdModel"),c(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Po,"href","#transformers.FlaxBigBirdModel"),c(vt,"class","relative group"),c(Oa,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Gs,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Gs,"rel","nofollow"),c(Ks,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Ks,"rel","nofollow"),c(Xs,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Xs,"rel","nofollow"),c(Ys,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Ys,"rel","nofollow"),c(Zs,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Zs,"rel","nofollow"),c(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ao,"id","transformers.FlaxBigBirdForPreTraining"),c(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ao,"href","#transformers.FlaxBigBirdForPreTraining"),c(yt,"class","relative group"),c(Ia,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(rr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(rr,"rel","nofollow"),c(ar,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(ar,"rel","nofollow"),c(ir,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(ir,"rel","nofollow"),c(lr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(lr,"rel","nofollow"),c(dr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(dr,"rel","nofollow"),c(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Io,"id","transformers.FlaxBigBirdForMaskedLM"),c(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Io,"href","#transformers.FlaxBigBirdForMaskedLM"),c(Tt,"class","relative group"),c(Sa,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ur,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(ur,"rel","nofollow"),c(_r,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(_r,"rel","nofollow"),c(br,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(br,"rel","nofollow"),c(kr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(kr,"rel","nofollow"),c(vr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(vr,"rel","nofollow"),c(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Do,"id","transformers.FlaxBigBirdForSequenceClassification"),c(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Do,"href","#transformers.FlaxBigBirdForSequenceClassification"),c(Ft,"class","relative group"),c(Na,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(xr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(xr,"rel","nofollow"),c(Fr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Fr,"rel","nofollow"),c(qr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(qr,"rel","nofollow"),c(zr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(zr,"rel","nofollow"),c(Mr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Mr,"rel","nofollow"),c($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Qo,"id","transformers.FlaxBigBirdForMultipleChoice"),c(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Qo,"href","#transformers.FlaxBigBirdForMultipleChoice"),c(zt,"class","relative group"),c(Da,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Lr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Lr,"rel","nofollow"),c(Or,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Or,"rel","nofollow"),c(Ir,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Ir,"rel","nofollow"),c(Sr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Sr,"rel","nofollow"),c(Nr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Nr,"rel","nofollow"),c(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Jo,"id","transformers.FlaxBigBirdForTokenClassification"),c(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jo,"href","#transformers.FlaxBigBirdForTokenClassification"),c(Et,"class","relative group"),c(Wa,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Hr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(Hr,"rel","nofollow"),c(Jr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Jr,"rel","nofollow"),c(Rr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Rr,"rel","nofollow"),c(Gr,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Gr,"rel","nofollow"),c(Kr,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Kr,"rel","nofollow"),c(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ko,"id","transformers.FlaxBigBirdForQuestionAnswering"),c(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ko,"href","#transformers.FlaxBigBirdForQuestionAnswering"),c(Ct,"class","relative group"),c(Ua,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(oa,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),c(oa,"rel","nofollow"),c(na,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(na,"rel","nofollow"),c(sa,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(sa,"rel","nofollow"),c(ra,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(ra,"rel","nofollow"),c(aa,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(aa,"rel","nofollow"),c(Qa,"href","/docs/transformers/v4.18.0/en/model_doc/big_bird#transformers.FlaxBigBirdForQuestionAnswering"),c(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,u){e(document.head,d),k(o,_,u),k(o,m,u),e(m,f),e(f,b),y(l,b,null),e(m,g),e(m,F),e(F,Ah),k(o,Dc,u),k(o,Ve,u),e(Ve,It),e(It,bi),y(wn,bi,null),e(Ve,Lh),e(Ve,ki),e(ki,Oh),k(o,Wc,u),k(o,St,u),e(St,Ih),e(St,Tn),e(Tn,Sh),e(St,Nh),k(o,Uc,u),k(o,ga,u),e(ga,Dh),k(o,Qc,u),k(o,fa,u),e(fa,vi),e(vi,Wh),k(o,Vc,u),k(o,ua,u),e(ua,Uh),k(o,Hc,u),k(o,V,u),e(V,xn),e(xn,Qh),e(xn,Fn),e(Fn,Vh),e(xn,Hh),e(V,Jh),e(V,de),e(de,Rh),e(de,Bi),e(Bi,Gh),e(de,Kh),e(de,yi),e(yi,Xh),e(de,Yh),e(de,$i),e($i,Zh),e(de,em),e(de,wi),e(wi,tm),e(de,om),e(V,nm),e(V,Ti),e(Ti,sm),e(V,rm),e(V,xi),e(xi,am),e(V,im),e(V,qn),e(qn,lm),e(qn,Fi),e(Fi,dm),e(qn,cm),e(V,pm),e(V,_a),e(_a,hm),e(_a,qi),e(qi,mm),k(o,Jc,u),k(o,Oe,u),e(Oe,gm),e(Oe,zn),e(zn,fm),e(Oe,um),e(Oe,Mn),e(Mn,_m),e(Oe,bm),k(o,Rc,u),k(o,He,u),e(He,Nt),e(Nt,zi),y(En,zi,null),e(He,km),e(He,Mi),e(Mi,vm),k(o,Gc,u),k(o,C,u),y(Pn,C,null),e(C,Bm),e(C,Je),e(Je,ym),e(Je,ba),e(ba,$m),e(Je,wm),e(Je,Cn),e(Cn,Tm),e(Je,xm),e(C,Fm),e(C,Re),e(Re,qm),e(Re,ka),e(ka,zm),e(Re,Mm),e(Re,va),e(va,Em),e(Re,Pm),e(C,Cm),y(Dt,C,null),e(C,jm),e(C,Ei),e(Ei,Pi),e(Pi,Ci),e(Ci,ji),e(ji,Am),e(C,Lm),e(C,Ai),e(Ai,Li),e(Li,jn),e(jn,Wt),e(Wt,Ut),e(Ut,Oi),y(An,Oi,null),e(Wt,Om),e(Wt,Ii),e(Ii,Im),e(jn,Sm),e(jn,Si),e(Si,Nm),e(C,Dm),e(C,Ni),e(Ni,Di),e(Di,Ln),e(Ln,Qt),e(Qt,Vt),e(Vt,Wi),y(On,Wi,null),e(Qt,Wm),e(Qt,Ui),e(Ui,Um),e(Ln,Qm),e(Ln,Qi),e(Qi,Vm),e(C,Hm),e(C,Vi),e(Vi,Hi),e(Hi,Ji),e(Ji,Ht),e(Ht,Jt),e(Jt,Ri),y(In,Ri,null),e(Ht,Jm),e(Ht,Gi),e(Gi,Rm),k(o,Kc,u),k(o,Ge,u),e(Ge,Rt),e(Rt,Ki),y(Sn,Ki,null),e(Ge,Gm),e(Ge,Xi),e(Xi,Km),k(o,Xc,u),k(o,j,u),y(Nn,j,null),e(j,Xm),e(j,Dn),e(Dn,Ym),e(Dn,Wn),e(Wn,Zm),e(Dn,eg),e(j,tg),e(j,Un),e(Un,og),e(Un,Ba),e(Ba,ng),e(Un,sg),e(j,rg),e(j,Ie),y(Qn,Ie,null),e(Ie,ag),e(Ie,Yi),e(Yi,ig),e(Ie,lg),e(Ie,Vn),e(Vn,ya),e(ya,dg),e(ya,Zi),e(Zi,cg),e(Vn,pg),e(Vn,$a),e($a,hg),e($a,el),e(el,mg),e(j,gg),e(j,Gt),y(Hn,Gt,null),e(Gt,fg),e(Gt,Jn),e(Jn,ug),e(Jn,tl),e(tl,_g),e(Jn,bg),e(j,kg),e(j,Kt),y(Rn,Kt,null),e(Kt,vg),e(Kt,Ke),e(Ke,Bg),e(Ke,ol),e(ol,yg),e(Ke,$g),e(Ke,nl),e(nl,wg),e(Ke,Tg),e(j,xg),e(j,wa),y(Gn,wa,null),k(o,Yc,u),k(o,Xe,u),e(Xe,Xt),e(Xt,sl),y(Kn,sl,null),e(Xe,Fg),e(Xe,rl),e(rl,qg),k(o,Zc,u),k(o,H,u),y(Xn,H,null),e(H,zg),e(H,Fe),e(Fe,Mg),e(Fe,al),e(al,Eg),e(Fe,Pg),e(Fe,Yn),e(Yn,Cg),e(Fe,jg),e(Fe,Ta),e(Ta,Ag),e(Fe,Lg),e(H,Og),e(H,Se),y(Zn,Se,null),e(Se,Ig),e(Se,il),e(il,Sg),e(Se,Ng),e(Se,es),e(es,xa),e(xa,Dg),e(xa,ll),e(ll,Wg),e(es,Ug),e(es,Fa),e(Fa,Qg),e(Fa,dl),e(dl,Vg),e(H,Hg),e(H,fe),y(ts,fe,null),e(fe,Jg),e(fe,cl),e(cl,Rg),e(fe,Gg),y(Yt,fe,null),e(fe,Kg),e(fe,pl),e(pl,Xg),e(H,Yg),e(H,Zt),y(os,Zt,null),e(Zt,Zg),e(Zt,ns),e(ns,ef),e(ns,hl),e(hl,tf),e(ns,of),k(o,ep,u),k(o,Ye,u),e(Ye,eo),e(eo,ml),y(ss,ml,null),e(Ye,nf),e(Ye,gl),e(gl,sf),k(o,tp,u),k(o,Ze,u),y(rs,Ze,null),e(Ze,rf),e(Ze,as),e(as,af),e(as,qa),e(qa,lf),e(as,df),k(o,op,u),k(o,et,u),e(et,to),e(to,fl),y(is,fl,null),e(et,cf),e(et,ul),e(ul,pf),k(o,np,u),k(o,J,u),y(ls,J,null),e(J,hf),e(J,ds),e(ds,mf),e(ds,cs),e(cs,gf),e(ds,ff),e(J,uf),e(J,ps),e(ps,_f),e(ps,hs),e(hs,bf),e(ps,kf),e(J,vf),e(J,Q),e(Q,Bf),e(Q,_l),e(_l,yf),e(Q,$f),e(Q,bl),e(bl,wf),e(Q,Tf),e(Q,kl),e(kl,xf),e(Q,Ff),e(Q,vl),e(vl,qf),e(Q,zf),e(Q,Bl),e(Bl,Mf),e(Q,Ef),e(Q,yl),e(yl,Pf),e(Q,Cf),e(J,jf),e(J,ue),y(ms,ue,null),e(ue,Af),e(ue,tt),e(tt,Lf),e(tt,za),e(za,Of),e(tt,If),e(tt,$l),e($l,Sf),e(tt,Nf),e(ue,Df),y(oo,ue,null),e(ue,Wf),y(no,ue,null),k(o,sp,u),k(o,ot,u),e(ot,so),e(so,wl),y(gs,wl,null),e(ot,Uf),e(ot,Tl),e(Tl,Qf),k(o,rp,u),k(o,nt,u),y(fs,nt,null),e(nt,Vf),e(nt,_e),y(us,_e,null),e(_e,Hf),e(_e,st),e(st,Jf),e(st,Ma),e(Ma,Rf),e(st,Gf),e(st,xl),e(xl,Kf),e(st,Xf),e(_e,Yf),y(ro,_e,null),e(_e,Zf),y(ao,_e,null),k(o,ap,u),k(o,rt,u),e(rt,io),e(io,Fl),y(_s,Fl,null),e(rt,eu),e(rt,ql),e(ql,tu),k(o,ip,u),k(o,qe,u),y(bs,qe,null),e(qe,ou),e(qe,at),e(at,nu),e(at,zl),e(zl,su),e(at,ru),e(at,ks),e(ks,au),e(at,iu),e(qe,lu),e(qe,be),y(vs,be,null),e(be,du),e(be,it),e(it,cu),e(it,Ea),e(Ea,pu),e(it,hu),e(it,Ml),e(Ml,mu),e(it,gu),e(be,fu),y(lo,be,null),e(be,uu),y(co,be,null),k(o,lp,u),k(o,lt,u),e(lt,po),e(po,El),y(Bs,El,null),e(lt,_u),e(lt,Pl),e(Pl,bu),k(o,dp,u),k(o,ze,u),y(ys,ze,null),e(ze,ku),e(ze,dt),e(dt,vu),e(dt,Cl),e(Cl,Bu),e(dt,yu),e(dt,$s),e($s,$u),e(dt,wu),e(ze,Tu),e(ze,K),y(ws,K,null),e(K,xu),e(K,ct),e(ct,Fu),e(ct,Pa),e(Pa,qu),e(ct,zu),e(ct,jl),e(jl,Mu),e(ct,Eu),e(K,Pu),y(ho,K,null),e(K,Cu),y(mo,K,null),e(K,ju),y(go,K,null),k(o,cp,u),k(o,pt,u),e(pt,fo),e(fo,Al),y(Ts,Al,null),e(pt,Au),e(pt,Ll),e(Ll,Lu),k(o,pp,u),k(o,ce,u),y(xs,ce,null),e(ce,Ou),e(ce,Ol),e(Ol,Iu),e(ce,Su),e(ce,Fs),e(Fs,Nu),e(Fs,qs),e(qs,Du),e(Fs,Wu),e(ce,Uu),e(ce,U),y(zs,U,null),e(U,Qu),e(U,ht),e(ht,Vu),e(ht,Ca),e(Ca,Hu),e(ht,Ju),e(ht,Il),e(Il,Ru),e(ht,Gu),e(U,Ku),y(uo,U,null),e(U,Xu),y(_o,U,null),e(U,Yu),y(bo,U,null),e(U,Zu),y(ko,U,null),e(U,e_),y(vo,U,null),k(o,hp,u),k(o,mt,u),e(mt,Bo),e(Bo,Sl),y(Ms,Sl,null),e(mt,t_),e(mt,Nl),e(Nl,o_),k(o,mp,u),k(o,pe,u),y(Es,pe,null),e(pe,n_),e(pe,Dl),e(Dl,s_),e(pe,r_),e(pe,Ps),e(Ps,a_),e(Ps,Cs),e(Cs,i_),e(Ps,l_),e(pe,d_),e(pe,ke),y(js,ke,null),e(ke,c_),e(ke,gt),e(gt,p_),e(gt,ja),e(ja,h_),e(gt,m_),e(gt,Wl),e(Wl,g_),e(gt,f_),e(ke,u_),y(yo,ke,null),e(ke,__),y($o,ke,null),k(o,gp,u),k(o,ft,u),e(ft,wo),e(wo,Ul),y(As,Ul,null),e(ft,b_),e(ft,Ql),e(Ql,k_),k(o,fp,u),k(o,he,u),y(Ls,he,null),e(he,v_),e(he,Vl),e(Vl,B_),e(he,y_),e(he,Os),e(Os,$_),e(Os,Is),e(Is,w_),e(Os,T_),e(he,x_),e(he,X),y(Ss,X,null),e(X,F_),e(X,ut),e(ut,q_),e(ut,Aa),e(Aa,z_),e(ut,M_),e(ut,Hl),e(Hl,E_),e(ut,P_),e(X,C_),y(To,X,null),e(X,j_),y(xo,X,null),e(X,A_),y(Fo,X,null),k(o,up,u),k(o,_t,u),e(_t,qo),e(qo,Jl),y(Ns,Jl,null),e(_t,L_),e(_t,Rl),e(Rl,O_),k(o,_p,u),k(o,me,u),y(Ds,me,null),e(me,I_),e(me,bt),e(bt,S_),e(bt,Gl),e(Gl,N_),e(bt,D_),e(bt,Kl),e(Kl,W_),e(bt,U_),e(me,Q_),e(me,Ws),e(Ws,V_),e(Ws,Us),e(Us,H_),e(Ws,J_),e(me,R_),e(me,Y),y(Qs,Y,null),e(Y,G_),e(Y,kt),e(kt,K_),e(kt,La),e(La,X_),e(kt,Y_),e(kt,Xl),e(Xl,Z_),e(kt,eb),e(Y,tb),y(zo,Y,null),e(Y,ob),y(Mo,Y,null),e(Y,nb),y(Eo,Y,null),k(o,bp,u),k(o,vt,u),e(vt,Po),e(Po,Yl),y(Vs,Yl,null),e(vt,sb),e(vt,Zl),e(Zl,rb),k(o,kp,u),k(o,A,u),y(Hs,A,null),e(A,ab),e(A,ed),e(ed,ib),e(A,lb),e(A,Js),e(Js,db),e(Js,Oa),e(Oa,cb),e(Js,pb),e(A,hb),e(A,Rs),e(Rs,mb),e(Rs,Gs),e(Gs,gb),e(Rs,fb),e(A,ub),e(A,td),e(td,_b),e(A,bb),e(A,Me),e(Me,od),e(od,Ks),e(Ks,kb),e(Me,vb),e(Me,nd),e(nd,Xs),e(Xs,Bb),e(Me,yb),e(Me,sd),e(sd,Ys),e(Ys,$b),e(Me,wb),e(Me,rd),e(rd,Zs),e(Zs,Tb),e(A,xb),e(A,ve),y(er,ve,null),e(ve,Fb),e(ve,Bt),e(Bt,qb),e(Bt,ad),e(ad,zb),e(Bt,Mb),e(Bt,id),e(id,Eb),e(Bt,Pb),e(ve,Cb),y(Co,ve,null),e(ve,jb),y(jo,ve,null),k(o,vp,u),k(o,yt,u),e(yt,Ao),e(Ao,ld),y(tr,ld,null),e(yt,Ab),e(yt,dd),e(dd,Lb),k(o,Bp,u),k(o,L,u),y(or,L,null),e(L,Ob),e(L,$t),e($t,Ib),e($t,cd),e(cd,Sb),e($t,Nb),e($t,pd),e(pd,Db),e($t,Wb),e(L,Ub),e(L,nr),e(nr,Qb),e(nr,Ia),e(Ia,Vb),e(nr,Hb),e(L,Jb),e(L,sr),e(sr,Rb),e(sr,rr),e(rr,Gb),e(sr,Kb),e(L,Xb),e(L,hd),e(hd,Yb),e(L,Zb),e(L,Ee),e(Ee,md),e(md,ar),e(ar,ek),e(Ee,tk),e(Ee,gd),e(gd,ir),e(ir,ok),e(Ee,nk),e(Ee,fd),e(fd,lr),e(lr,sk),e(Ee,rk),e(Ee,ud),e(ud,dr),e(dr,ak),e(L,ik),e(L,Be),y(cr,Be,null),e(Be,lk),e(Be,wt),e(wt,dk),e(wt,_d),e(_d,ck),e(wt,pk),e(wt,bd),e(bd,hk),e(wt,mk),e(Be,gk),y(Lo,Be,null),e(Be,fk),y(Oo,Be,null),k(o,yp,u),k(o,Tt,u),e(Tt,Io),e(Io,kd),y(pr,kd,null),e(Tt,uk),e(Tt,vd),e(vd,_k),k(o,$p,u),k(o,O,u),y(hr,O,null),e(O,bk),e(O,mr),e(mr,kk),e(mr,Bd),e(Bd,vk),e(mr,Bk),e(O,yk),e(O,gr),e(gr,$k),e(gr,Sa),e(Sa,wk),e(gr,Tk),e(O,xk),e(O,fr),e(fr,Fk),e(fr,ur),e(ur,qk),e(fr,zk),e(O,Mk),e(O,yd),e(yd,Ek),e(O,Pk),e(O,Pe),e(Pe,$d),e($d,_r),e(_r,Ck),e(Pe,jk),e(Pe,wd),e(wd,br),e(br,Ak),e(Pe,Lk),e(Pe,Td),e(Td,kr),e(kr,Ok),e(Pe,Ik),e(Pe,xd),e(xd,vr),e(vr,Sk),e(O,Nk),e(O,ye),y(Br,ye,null),e(ye,Dk),e(ye,xt),e(xt,Wk),e(xt,Fd),e(Fd,Uk),e(xt,Qk),e(xt,qd),e(qd,Vk),e(xt,Hk),e(ye,Jk),y(So,ye,null),e(ye,Rk),y(No,ye,null),k(o,wp,u),k(o,Ft,u),e(Ft,Do),e(Do,zd),y(yr,zd,null),e(Ft,Gk),e(Ft,Md),e(Md,Kk),k(o,Tp,u),k(o,I,u),y($r,I,null),e(I,Xk),e(I,Ed),e(Ed,Yk),e(I,Zk),e(I,wr),e(wr,ev),e(wr,Na),e(Na,tv),e(wr,ov),e(I,nv),e(I,Tr),e(Tr,sv),e(Tr,xr),e(xr,rv),e(Tr,av),e(I,iv),e(I,Pd),e(Pd,lv),e(I,dv),e(I,Ce),e(Ce,Cd),e(Cd,Fr),e(Fr,cv),e(Ce,pv),e(Ce,jd),e(jd,qr),e(qr,hv),e(Ce,mv),e(Ce,Ad),e(Ad,zr),e(zr,gv),e(Ce,fv),e(Ce,Ld),e(Ld,Mr),e(Mr,uv),e(I,_v),e(I,$e),y(Er,$e,null),e($e,bv),e($e,qt),e(qt,kv),e(qt,Od),e(Od,vv),e(qt,Bv),e(qt,Id),e(Id,yv),e(qt,$v),e($e,wv),y(Wo,$e,null),e($e,Tv),y(Uo,$e,null),k(o,xp,u),k(o,zt,u),e(zt,Qo),e(Qo,Sd),y(Pr,Sd,null),e(zt,xv),e(zt,Nd),e(Nd,Fv),k(o,Fp,u),k(o,S,u),y(Cr,S,null),e(S,qv),e(S,Dd),e(Dd,zv),e(S,Mv),e(S,jr),e(jr,Ev),e(jr,Da),e(Da,Pv),e(jr,Cv),e(S,jv),e(S,Ar),e(Ar,Av),e(Ar,Lr),e(Lr,Lv),e(Ar,Ov),e(S,Iv),e(S,Wd),e(Wd,Sv),e(S,Nv),e(S,je),e(je,Ud),e(Ud,Or),e(Or,Dv),e(je,Wv),e(je,Qd),e(Qd,Ir),e(Ir,Uv),e(je,Qv),e(je,Vd),e(Vd,Sr),e(Sr,Vv),e(je,Hv),e(je,Hd),e(Hd,Nr),e(Nr,Jv),e(S,Rv),e(S,we),y(Dr,we,null),e(we,Gv),e(we,Mt),e(Mt,Kv),e(Mt,Jd),e(Jd,Xv),e(Mt,Yv),e(Mt,Rd),e(Rd,Zv),e(Mt,eB),e(we,tB),y(Vo,we,null),e(we,oB),y(Ho,we,null),k(o,qp,u),k(o,Et,u),e(Et,Jo),e(Jo,Gd),y(Wr,Gd,null),e(Et,nB),e(Et,Kd),e(Kd,sB),k(o,zp,u),k(o,N,u),y(Ur,N,null),e(N,rB),e(N,Xd),e(Xd,aB),e(N,iB),e(N,Qr),e(Qr,lB),e(Qr,Wa),e(Wa,dB),e(Qr,cB),e(N,pB),e(N,Vr),e(Vr,hB),e(Vr,Hr),e(Hr,mB),e(Vr,gB),e(N,fB),e(N,Yd),e(Yd,uB),e(N,_B),e(N,Ae),e(Ae,Zd),e(Zd,Jr),e(Jr,bB),e(Ae,kB),e(Ae,ec),e(ec,Rr),e(Rr,vB),e(Ae,BB),e(Ae,tc),e(tc,Gr),e(Gr,yB),e(Ae,$B),e(Ae,oc),e(oc,Kr),e(Kr,wB),e(N,TB),e(N,Te),y(Xr,Te,null),e(Te,xB),e(Te,Pt),e(Pt,FB),e(Pt,nc),e(nc,qB),e(Pt,zB),e(Pt,sc),e(sc,MB),e(Pt,EB),e(Te,PB),y(Ro,Te,null),e(Te,CB),y(Go,Te,null),k(o,Mp,u),k(o,Ct,u),e(Ct,Ko),e(Ko,rc),y(Yr,rc,null),e(Ct,jB),e(Ct,ac),e(ac,AB),k(o,Ep,u),k(o,D,u),y(Zr,D,null),e(D,LB),e(D,jt),e(jt,OB),e(jt,ic),e(ic,IB),e(jt,SB),e(jt,lc),e(lc,NB),e(jt,DB),e(D,WB),e(D,ea),e(ea,UB),e(ea,Ua),e(Ua,QB),e(ea,VB),e(D,HB),e(D,ta),e(ta,JB),e(ta,oa),e(oa,RB),e(ta,GB),e(D,KB),e(D,dc),e(dc,XB),e(D,YB),e(D,Le),e(Le,cc),e(cc,na),e(na,ZB),e(Le,e1),e(Le,pc),e(pc,sa),e(sa,t1),e(Le,o1),e(Le,hc),e(hc,ra),e(ra,n1),e(Le,s1),e(Le,mc),e(mc,aa),e(aa,r1),e(D,a1),e(D,xe),y(ia,xe,null),e(xe,i1),e(xe,At),e(At,l1),e(At,Qa),e(Qa,d1),e(At,c1),e(At,gc),e(gc,p1),e(At,h1),e(xe,m1),y(Xo,xe,null),e(xe,g1),y(Yo,xe,null),Pp=!0},p(o,[u]){const la={};u&2&&(la.$$scope={dirty:u,ctx:o}),Dt.$set(la);const fc={};u&2&&(fc.$$scope={dirty:u,ctx:o}),Yt.$set(fc);const uc={};u&2&&(uc.$$scope={dirty:u,ctx:o}),oo.$set(uc);const _c={};u&2&&(_c.$$scope={dirty:u,ctx:o}),no.$set(_c);const da={};u&2&&(da.$$scope={dirty:u,ctx:o}),ro.$set(da);const bc={};u&2&&(bc.$$scope={dirty:u,ctx:o}),ao.$set(bc);const kc={};u&2&&(kc.$$scope={dirty:u,ctx:o}),lo.$set(kc);const vc={};u&2&&(vc.$$scope={dirty:u,ctx:o}),co.$set(vc);const ca={};u&2&&(ca.$$scope={dirty:u,ctx:o}),ho.$set(ca);const Bc={};u&2&&(Bc.$$scope={dirty:u,ctx:o}),mo.$set(Bc);const yc={};u&2&&(yc.$$scope={dirty:u,ctx:o}),go.$set(yc);const $c={};u&2&&($c.$$scope={dirty:u,ctx:o}),uo.$set($c);const wc={};u&2&&(wc.$$scope={dirty:u,ctx:o}),_o.$set(wc);const Tc={};u&2&&(Tc.$$scope={dirty:u,ctx:o}),bo.$set(Tc);const R={};u&2&&(R.$$scope={dirty:u,ctx:o}),ko.$set(R);const pa={};u&2&&(pa.$$scope={dirty:u,ctx:o}),vo.$set(pa);const xc={};u&2&&(xc.$$scope={dirty:u,ctx:o}),yo.$set(xc);const ge={};u&2&&(ge.$$scope={dirty:u,ctx:o}),$o.$set(ge);const Fc={};u&2&&(Fc.$$scope={dirty:u,ctx:o}),To.$set(Fc);const qc={};u&2&&(qc.$$scope={dirty:u,ctx:o}),xo.$set(qc);const zc={};u&2&&(zc.$$scope={dirty:u,ctx:o}),Fo.$set(zc);const Mc={};u&2&&(Mc.$$scope={dirty:u,ctx:o}),zo.$set(Mc);const Ec={};u&2&&(Ec.$$scope={dirty:u,ctx:o}),Mo.$set(Ec);const Pc={};u&2&&(Pc.$$scope={dirty:u,ctx:o}),Eo.$set(Pc);const ha={};u&2&&(ha.$$scope={dirty:u,ctx:o}),Co.$set(ha);const Cc={};u&2&&(Cc.$$scope={dirty:u,ctx:o}),jo.$set(Cc);const Va={};u&2&&(Va.$$scope={dirty:u,ctx:o}),Lo.$set(Va);const jc={};u&2&&(jc.$$scope={dirty:u,ctx:o}),Oo.$set(jc);const Lt={};u&2&&(Lt.$$scope={dirty:u,ctx:o}),So.$set(Lt);const Ac={};u&2&&(Ac.$$scope={dirty:u,ctx:o}),No.$set(Ac);const Lc={};u&2&&(Lc.$$scope={dirty:u,ctx:o}),Wo.$set(Lc);const ma={};u&2&&(ma.$$scope={dirty:u,ctx:o}),Uo.$set(ma);const Oc={};u&2&&(Oc.$$scope={dirty:u,ctx:o}),Vo.$set(Oc);const Ic={};u&2&&(Ic.$$scope={dirty:u,ctx:o}),Ho.$set(Ic);const Sc={};u&2&&(Sc.$$scope={dirty:u,ctx:o}),Ro.$set(Sc);const W={};u&2&&(W.$$scope={dirty:u,ctx:o}),Go.$set(W);const Ot={};u&2&&(Ot.$$scope={dirty:u,ctx:o}),Xo.$set(Ot);const Nc={};u&2&&(Nc.$$scope={dirty:u,ctx:o}),Yo.$set(Nc)},i(o){Pp||($(l.$$.fragment,o),$(wn.$$.fragment,o),$(En.$$.fragment,o),$(Pn.$$.fragment,o),$(Dt.$$.fragment,o),$(An.$$.fragment,o),$(On.$$.fragment,o),$(In.$$.fragment,o),$(Sn.$$.fragment,o),$(Nn.$$.fragment,o),$(Qn.$$.fragment,o),$(Hn.$$.fragment,o),$(Rn.$$.fragment,o),$(Gn.$$.fragment,o),$(Kn.$$.fragment,o),$(Xn.$$.fragment,o),$(Zn.$$.fragment,o),$(ts.$$.fragment,o),$(Yt.$$.fragment,o),$(os.$$.fragment,o),$(ss.$$.fragment,o),$(rs.$$.fragment,o),$(is.$$.fragment,o),$(ls.$$.fragment,o),$(ms.$$.fragment,o),$(oo.$$.fragment,o),$(no.$$.fragment,o),$(gs.$$.fragment,o),$(fs.$$.fragment,o),$(us.$$.fragment,o),$(ro.$$.fragment,o),$(ao.$$.fragment,o),$(_s.$$.fragment,o),$(bs.$$.fragment,o),$(vs.$$.fragment,o),$(lo.$$.fragment,o),$(co.$$.fragment,o),$(Bs.$$.fragment,o),$(ys.$$.fragment,o),$(ws.$$.fragment,o),$(ho.$$.fragment,o),$(mo.$$.fragment,o),$(go.$$.fragment,o),$(Ts.$$.fragment,o),$(xs.$$.fragment,o),$(zs.$$.fragment,o),$(uo.$$.fragment,o),$(_o.$$.fragment,o),$(bo.$$.fragment,o),$(ko.$$.fragment,o),$(vo.$$.fragment,o),$(Ms.$$.fragment,o),$(Es.$$.fragment,o),$(js.$$.fragment,o),$(yo.$$.fragment,o),$($o.$$.fragment,o),$(As.$$.fragment,o),$(Ls.$$.fragment,o),$(Ss.$$.fragment,o),$(To.$$.fragment,o),$(xo.$$.fragment,o),$(Fo.$$.fragment,o),$(Ns.$$.fragment,o),$(Ds.$$.fragment,o),$(Qs.$$.fragment,o),$(zo.$$.fragment,o),$(Mo.$$.fragment,o),$(Eo.$$.fragment,o),$(Vs.$$.fragment,o),$(Hs.$$.fragment,o),$(er.$$.fragment,o),$(Co.$$.fragment,o),$(jo.$$.fragment,o),$(tr.$$.fragment,o),$(or.$$.fragment,o),$(cr.$$.fragment,o),$(Lo.$$.fragment,o),$(Oo.$$.fragment,o),$(pr.$$.fragment,o),$(hr.$$.fragment,o),$(Br.$$.fragment,o),$(So.$$.fragment,o),$(No.$$.fragment,o),$(yr.$$.fragment,o),$($r.$$.fragment,o),$(Er.$$.fragment,o),$(Wo.$$.fragment,o),$(Uo.$$.fragment,o),$(Pr.$$.fragment,o),$(Cr.$$.fragment,o),$(Dr.$$.fragment,o),$(Vo.$$.fragment,o),$(Ho.$$.fragment,o),$(Wr.$$.fragment,o),$(Ur.$$.fragment,o),$(Xr.$$.fragment,o),$(Ro.$$.fragment,o),$(Go.$$.fragment,o),$(Yr.$$.fragment,o),$(Zr.$$.fragment,o),$(ia.$$.fragment,o),$(Xo.$$.fragment,o),$(Yo.$$.fragment,o),Pp=!0)},o(o){w(l.$$.fragment,o),w(wn.$$.fragment,o),w(En.$$.fragment,o),w(Pn.$$.fragment,o),w(Dt.$$.fragment,o),w(An.$$.fragment,o),w(On.$$.fragment,o),w(In.$$.fragment,o),w(Sn.$$.fragment,o),w(Nn.$$.fragment,o),w(Qn.$$.fragment,o),w(Hn.$$.fragment,o),w(Rn.$$.fragment,o),w(Gn.$$.fragment,o),w(Kn.$$.fragment,o),w(Xn.$$.fragment,o),w(Zn.$$.fragment,o),w(ts.$$.fragment,o),w(Yt.$$.fragment,o),w(os.$$.fragment,o),w(ss.$$.fragment,o),w(rs.$$.fragment,o),w(is.$$.fragment,o),w(ls.$$.fragment,o),w(ms.$$.fragment,o),w(oo.$$.fragment,o),w(no.$$.fragment,o),w(gs.$$.fragment,o),w(fs.$$.fragment,o),w(us.$$.fragment,o),w(ro.$$.fragment,o),w(ao.$$.fragment,o),w(_s.$$.fragment,o),w(bs.$$.fragment,o),w(vs.$$.fragment,o),w(lo.$$.fragment,o),w(co.$$.fragment,o),w(Bs.$$.fragment,o),w(ys.$$.fragment,o),w(ws.$$.fragment,o),w(ho.$$.fragment,o),w(mo.$$.fragment,o),w(go.$$.fragment,o),w(Ts.$$.fragment,o),w(xs.$$.fragment,o),w(zs.$$.fragment,o),w(uo.$$.fragment,o),w(_o.$$.fragment,o),w(bo.$$.fragment,o),w(ko.$$.fragment,o),w(vo.$$.fragment,o),w(Ms.$$.fragment,o),w(Es.$$.fragment,o),w(js.$$.fragment,o),w(yo.$$.fragment,o),w($o.$$.fragment,o),w(As.$$.fragment,o),w(Ls.$$.fragment,o),w(Ss.$$.fragment,o),w(To.$$.fragment,o),w(xo.$$.fragment,o),w(Fo.$$.fragment,o),w(Ns.$$.fragment,o),w(Ds.$$.fragment,o),w(Qs.$$.fragment,o),w(zo.$$.fragment,o),w(Mo.$$.fragment,o),w(Eo.$$.fragment,o),w(Vs.$$.fragment,o),w(Hs.$$.fragment,o),w(er.$$.fragment,o),w(Co.$$.fragment,o),w(jo.$$.fragment,o),w(tr.$$.fragment,o),w(or.$$.fragment,o),w(cr.$$.fragment,o),w(Lo.$$.fragment,o),w(Oo.$$.fragment,o),w(pr.$$.fragment,o),w(hr.$$.fragment,o),w(Br.$$.fragment,o),w(So.$$.fragment,o),w(No.$$.fragment,o),w(yr.$$.fragment,o),w($r.$$.fragment,o),w(Er.$$.fragment,o),w(Wo.$$.fragment,o),w(Uo.$$.fragment,o),w(Pr.$$.fragment,o),w(Cr.$$.fragment,o),w(Dr.$$.fragment,o),w(Vo.$$.fragment,o),w(Ho.$$.fragment,o),w(Wr.$$.fragment,o),w(Ur.$$.fragment,o),w(Xr.$$.fragment,o),w(Ro.$$.fragment,o),w(Go.$$.fragment,o),w(Yr.$$.fragment,o),w(Zr.$$.fragment,o),w(ia.$$.fragment,o),w(Xo.$$.fragment,o),w(Yo.$$.fragment,o),Pp=!1},d(o){t(d),o&&t(_),o&&t(m),T(l),o&&t(Dc),o&&t(Ve),T(wn),o&&t(Wc),o&&t(St),o&&t(Uc),o&&t(ga),o&&t(Qc),o&&t(fa),o&&t(Vc),o&&t(ua),o&&t(Hc),o&&t(V),o&&t(Jc),o&&t(Oe),o&&t(Rc),o&&t(He),T(En),o&&t(Gc),o&&t(C),T(Pn),T(Dt),T(An),T(On),T(In),o&&t(Kc),o&&t(Ge),T(Sn),o&&t(Xc),o&&t(j),T(Nn),T(Qn),T(Hn),T(Rn),T(Gn),o&&t(Yc),o&&t(Xe),T(Kn),o&&t(Zc),o&&t(H),T(Xn),T(Zn),T(ts),T(Yt),T(os),o&&t(ep),o&&t(Ye),T(ss),o&&t(tp),o&&t(Ze),T(rs),o&&t(op),o&&t(et),T(is),o&&t(np),o&&t(J),T(ls),T(ms),T(oo),T(no),o&&t(sp),o&&t(ot),T(gs),o&&t(rp),o&&t(nt),T(fs),T(us),T(ro),T(ao),o&&t(ap),o&&t(rt),T(_s),o&&t(ip),o&&t(qe),T(bs),T(vs),T(lo),T(co),o&&t(lp),o&&t(lt),T(Bs),o&&t(dp),o&&t(ze),T(ys),T(ws),T(ho),T(mo),T(go),o&&t(cp),o&&t(pt),T(Ts),o&&t(pp),o&&t(ce),T(xs),T(zs),T(uo),T(_o),T(bo),T(ko),T(vo),o&&t(hp),o&&t(mt),T(Ms),o&&t(mp),o&&t(pe),T(Es),T(js),T(yo),T($o),o&&t(gp),o&&t(ft),T(As),o&&t(fp),o&&t(he),T(Ls),T(Ss),T(To),T(xo),T(Fo),o&&t(up),o&&t(_t),T(Ns),o&&t(_p),o&&t(me),T(Ds),T(Qs),T(zo),T(Mo),T(Eo),o&&t(bp),o&&t(vt),T(Vs),o&&t(kp),o&&t(A),T(Hs),T(er),T(Co),T(jo),o&&t(vp),o&&t(yt),T(tr),o&&t(Bp),o&&t(L),T(or),T(cr),T(Lo),T(Oo),o&&t(yp),o&&t(Tt),T(pr),o&&t($p),o&&t(O),T(hr),T(Br),T(So),T(No),o&&t(wp),o&&t(Ft),T(yr),o&&t(Tp),o&&t(I),T($r),T(Er),T(Wo),T(Uo),o&&t(xp),o&&t(zt),T(Pr),o&&t(Fp),o&&t(S),T(Cr),T(Dr),T(Vo),T(Ho),o&&t(qp),o&&t(Et),T(Wr),o&&t(zp),o&&t(N),T(Ur),T(Xr),T(Ro),T(Go),o&&t(Mp),o&&t(Ct),T(Yr),o&&t(Ep),o&&t(D),T(Zr),T(ia),T(Xo),T(Yo)}}}const q0={local:"bigbird",sections:[{local:"overview",title:"Overview"},{local:"transformers.BigBirdConfig",title:"BigBirdConfig"},{local:"transformers.BigBirdTokenizer",title:"BigBirdTokenizer"},{local:"transformers.BigBirdTokenizerFast",title:"BigBirdTokenizerFast"},{local:"transformers.models.big_bird.modeling_big_bird.BigBirdForPreTrainingOutput",title:"BigBird specific outputs"},{local:"transformers.BigBirdModel",title:"BigBirdModel"},{local:"transformers.BigBirdForPreTraining",title:"BigBirdForPreTraining"},{local:"transformers.BigBirdForCausalLM",title:"BigBirdForCausalLM"},{local:"transformers.BigBirdForMaskedLM",title:"BigBirdForMaskedLM"},{local:"transformers.BigBirdForSequenceClassification",title:"BigBirdForSequenceClassification"},{local:"transformers.BigBirdForMultipleChoice",title:"BigBirdForMultipleChoice"},{local:"transformers.BigBirdForTokenClassification",title:"BigBirdForTokenClassification"},{local:"transformers.BigBirdForQuestionAnswering",title:"BigBirdForQuestionAnswering"},{local:"transformers.FlaxBigBirdModel",title:"FlaxBigBirdModel"},{local:"transformers.FlaxBigBirdForPreTraining",title:"FlaxBigBirdForPreTraining"},{local:"transformers.FlaxBigBirdForMaskedLM",title:"FlaxBigBirdForMaskedLM"},{local:"transformers.FlaxBigBirdForSequenceClassification",title:"FlaxBigBirdForSequenceClassification"},{local:"transformers.FlaxBigBirdForMultipleChoice",title:"FlaxBigBirdForMultipleChoice"},{local:"transformers.FlaxBigBirdForTokenClassification",title:"FlaxBigBirdForTokenClassification"},{local:"transformers.FlaxBigBirdForQuestionAnswering",title:"FlaxBigBirdForQuestionAnswering"}],title:"BigBird"};function z0(x){return WT(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class L0 extends IT{constructor(d){super();ST(this,d,z0,F0,NT,{})}}export{L0 as default,q0 as metadata};
