import{S as lh,i as dh,s as ch,e as a,k as c,w as L,t as n,M as ph,c as r,d as t,m as p,a as i,x as v,h as s,b as u,G as e,g as f,y as w,q as T,o as M,B as $,v as uh,L as Et}from"../../chunks/vendor-hf-doc-builder.js";import{T as Qe}from"../../chunks/Tip-hf-doc-builder.js";import{D as _e}from"../../chunks/Docstring-hf-doc-builder.js";import{C as tt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as De}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as zt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function hh(E){let d,k,_,h,b;return h=new tt({props:{code:`from transformers import LayoutLMModel, LayoutLMConfig

# Initializing a LayoutLM configuration
configuration = LayoutLMConfig()

# Initializing a model from the configuration
model = LayoutLMModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMModel, LayoutLMConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a LayoutLM configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = LayoutLMConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),k=n("Examples:"),_=c(),L(h.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Examples:"),m.forEach(t),_=p(l),v(h.$$.fragment,l)},m(l,m){f(l,d,m),e(d,k),f(l,_,m),w(h,l,m),b=!0},p:Et,i(l){b||(T(h.$$.fragment,l),b=!0)},o(l){M(h.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(_),$(h,l)}}}function mh(E){let d,k,_,h,b;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(m,"CODE",{});var j=i(_);h=s(j,"Module"),j.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){f(l,d,m),e(d,k),e(d,_),e(_,h),e(d,b)},d(l){l&&t(d)}}}function fh(E){let d,k,_,h,b;return h=new tt({props:{code:`from transformers import LayoutLMTokenizer, LayoutLMModel
import torch

tokenizer = LayoutLMTokenizer.from_pretrained("microsoft/layoutlm-base-uncased")
model = LayoutLMModel.from_pretrained("microsoft/layoutlm-base-uncased")

words = ["Hello", "world"]
normalized_word_boxes = [637, 773, 693, 782], [698, 773, 733, 782]

token_boxes = []
for word, box in zip(words, normalized_word_boxes):
    word_tokens = tokenizer.tokenize(word)
    token_boxes.extend([box] * len(word_tokens))
# add bounding boxes of cls + sep tokens
token_boxes = [[0, 0, 0, 0]] + token_boxes + [[1000, 1000, 1000, 1000]]

encoding = tokenizer(" ".join(words), return_tensors="pt")
input_ids = encoding["input_ids"]
attention_mask = encoding["attention_mask"]
token_type_ids = encoding["token_type_ids"]
bbox = torch.tensor([token_boxes])

outputs = model(
    input_ids=input_ids, bbox=bbox, attention_mask=attention_mask, token_type_ids=token_type_ids
)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMTokenizer, LayoutLMModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LayoutLMTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMModel.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>words = [<span class="hljs-string">&quot;Hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>normalized_word_boxes = [<span class="hljs-number">637</span>, <span class="hljs-number">773</span>, <span class="hljs-number">693</span>, <span class="hljs-number">782</span>], [<span class="hljs-number">698</span>, <span class="hljs-number">773</span>, <span class="hljs-number">733</span>, <span class="hljs-number">782</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> word, box <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(words, normalized_word_boxes):
<span class="hljs-meta">... </span>    word_tokens = tokenizer.tokenize(word)
<span class="hljs-meta">... </span>    token_boxes.extend([box] * <span class="hljs-built_in">len</span>(word_tokens))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add bounding boxes of cls + sep tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = [[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]] + token_boxes + [[<span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(<span class="hljs-string">&quot; &quot;</span>.join(words), return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>token_type_ids = encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = torch.tensor([token_boxes])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    input_ids=input_ids, bbox=bbox, attention_mask=attention_mask, token_type_ids=token_type_ids
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),k=n("Examples:"),_=c(),L(h.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Examples:"),m.forEach(t),_=p(l),v(h.$$.fragment,l)},m(l,m){f(l,d,m),e(d,k),f(l,_,m),w(h,l,m),b=!0},p:Et,i(l){b||(T(h.$$.fragment,l),b=!0)},o(l){M(h.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(_),$(h,l)}}}function gh(E){let d,k,_,h,b;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(m,"CODE",{});var j=i(_);h=s(j,"Module"),j.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){f(l,d,m),e(d,k),e(d,_),e(_,h),e(d,b)},d(l){l&&t(d)}}}function _h(E){let d,k,_,h,b;return h=new tt({props:{code:`from transformers import LayoutLMTokenizer, LayoutLMForMaskedLM
import torch

tokenizer = LayoutLMTokenizer.from_pretrained("microsoft/layoutlm-base-uncased")
model = LayoutLMForMaskedLM.from_pretrained("microsoft/layoutlm-base-uncased")

words = ["Hello", "[MASK]"]
normalized_word_boxes = [637, 773, 693, 782], [698, 773, 733, 782]

token_boxes = []
for word, box in zip(words, normalized_word_boxes):
    word_tokens = tokenizer.tokenize(word)
    token_boxes.extend([box] * len(word_tokens))
# add bounding boxes of cls + sep tokens
token_boxes = [[0, 0, 0, 0]] + token_boxes + [[1000, 1000, 1000, 1000]]

encoding = tokenizer(" ".join(words), return_tensors="pt")
input_ids = encoding["input_ids"]
attention_mask = encoding["attention_mask"]
token_type_ids = encoding["token_type_ids"]
bbox = torch.tensor([token_boxes])

labels = tokenizer("Hello world", return_tensors="pt")["input_ids"]

outputs = model(
    input_ids=input_ids,
    bbox=bbox,
    attention_mask=attention_mask,
    token_type_ids=token_type_ids,
    labels=labels,
)

loss = outputs.loss`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMTokenizer, LayoutLMForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LayoutLMTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMForMaskedLM.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>words = [<span class="hljs-string">&quot;Hello&quot;</span>, <span class="hljs-string">&quot;[MASK]&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>normalized_word_boxes = [<span class="hljs-number">637</span>, <span class="hljs-number">773</span>, <span class="hljs-number">693</span>, <span class="hljs-number">782</span>], [<span class="hljs-number">698</span>, <span class="hljs-number">773</span>, <span class="hljs-number">733</span>, <span class="hljs-number">782</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> word, box <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(words, normalized_word_boxes):
<span class="hljs-meta">... </span>    word_tokens = tokenizer.tokenize(word)
<span class="hljs-meta">... </span>    token_boxes.extend([box] * <span class="hljs-built_in">len</span>(word_tokens))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add bounding boxes of cls + sep tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = [[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]] + token_boxes + [[<span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(<span class="hljs-string">&quot; &quot;</span>.join(words), return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>token_type_ids = encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = torch.tensor([token_boxes])

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    input_ids=input_ids,
<span class="hljs-meta">... </span>    bbox=bbox,
<span class="hljs-meta">... </span>    attention_mask=attention_mask,
<span class="hljs-meta">... </span>    token_type_ids=token_type_ids,
<span class="hljs-meta">... </span>    labels=labels,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){d=a("p"),k=n("Examples:"),_=c(),L(h.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Examples:"),m.forEach(t),_=p(l),v(h.$$.fragment,l)},m(l,m){f(l,d,m),e(d,k),f(l,_,m),w(h,l,m),b=!0},p:Et,i(l){b||(T(h.$$.fragment,l),b=!0)},o(l){M(h.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(_),$(h,l)}}}function yh(E){let d,k,_,h,b;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(m,"CODE",{});var j=i(_);h=s(j,"Module"),j.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){f(l,d,m),e(d,k),e(d,_),e(_,h),e(d,b)},d(l){l&&t(d)}}}function bh(E){let d,k,_,h,b;return h=new tt({props:{code:`from transformers import LayoutLMTokenizer, LayoutLMForSequenceClassification
import torch

tokenizer = LayoutLMTokenizer.from_pretrained("microsoft/layoutlm-base-uncased")
model = LayoutLMForSequenceClassification.from_pretrained("microsoft/layoutlm-base-uncased")

words = ["Hello", "world"]
normalized_word_boxes = [637, 773, 693, 782], [698, 773, 733, 782]

token_boxes = []
for word, box in zip(words, normalized_word_boxes):
    word_tokens = tokenizer.tokenize(word)
    token_boxes.extend([box] * len(word_tokens))
# add bounding boxes of cls + sep tokens
token_boxes = [[0, 0, 0, 0]] + token_boxes + [[1000, 1000, 1000, 1000]]

encoding = tokenizer(" ".join(words), return_tensors="pt")
input_ids = encoding["input_ids"]
attention_mask = encoding["attention_mask"]
token_type_ids = encoding["token_type_ids"]
bbox = torch.tensor([token_boxes])
sequence_label = torch.tensor([1])

outputs = model(
    input_ids=input_ids,
    bbox=bbox,
    attention_mask=attention_mask,
    token_type_ids=token_type_ids,
    labels=sequence_label,
)

loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMTokenizer, LayoutLMForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LayoutLMTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>words = [<span class="hljs-string">&quot;Hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>normalized_word_boxes = [<span class="hljs-number">637</span>, <span class="hljs-number">773</span>, <span class="hljs-number">693</span>, <span class="hljs-number">782</span>], [<span class="hljs-number">698</span>, <span class="hljs-number">773</span>, <span class="hljs-number">733</span>, <span class="hljs-number">782</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> word, box <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(words, normalized_word_boxes):
<span class="hljs-meta">... </span>    word_tokens = tokenizer.tokenize(word)
<span class="hljs-meta">... </span>    token_boxes.extend([box] * <span class="hljs-built_in">len</span>(word_tokens))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add bounding boxes of cls + sep tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = [[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]] + token_boxes + [[<span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(<span class="hljs-string">&quot; &quot;</span>.join(words), return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>token_type_ids = encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = torch.tensor([token_boxes])
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_label = torch.tensor([<span class="hljs-number">1</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    input_ids=input_ids,
<span class="hljs-meta">... </span>    bbox=bbox,
<span class="hljs-meta">... </span>    attention_mask=attention_mask,
<span class="hljs-meta">... </span>    token_type_ids=token_type_ids,
<span class="hljs-meta">... </span>    labels=sequence_label,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),k=n("Examples:"),_=c(),L(h.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Examples:"),m.forEach(t),_=p(l),v(h.$$.fragment,l)},m(l,m){f(l,d,m),e(d,k),f(l,_,m),w(h,l,m),b=!0},p:Et,i(l){b||(T(h.$$.fragment,l),b=!0)},o(l){M(h.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(_),$(h,l)}}}function kh(E){let d,k,_,h,b;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(m,"CODE",{});var j=i(_);h=s(j,"Module"),j.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){f(l,d,m),e(d,k),e(d,_),e(_,h),e(d,b)},d(l){l&&t(d)}}}function Lh(E){let d,k,_,h,b;return h=new tt({props:{code:`from transformers import LayoutLMTokenizer, LayoutLMForTokenClassification
import torch

tokenizer = LayoutLMTokenizer.from_pretrained("microsoft/layoutlm-base-uncased")
model = LayoutLMForTokenClassification.from_pretrained("microsoft/layoutlm-base-uncased")

words = ["Hello", "world"]
normalized_word_boxes = [637, 773, 693, 782], [698, 773, 733, 782]

token_boxes = []
for word, box in zip(words, normalized_word_boxes):
    word_tokens = tokenizer.tokenize(word)
    token_boxes.extend([box] * len(word_tokens))
# add bounding boxes of cls + sep tokens
token_boxes = [[0, 0, 0, 0]] + token_boxes + [[1000, 1000, 1000, 1000]]

encoding = tokenizer(" ".join(words), return_tensors="pt")
input_ids = encoding["input_ids"]
attention_mask = encoding["attention_mask"]
token_type_ids = encoding["token_type_ids"]
bbox = torch.tensor([token_boxes])
token_labels = torch.tensor([1, 1, 0, 0]).unsqueeze(0)  # batch size of 1

outputs = model(
    input_ids=input_ids,
    bbox=bbox,
    attention_mask=attention_mask,
    token_type_ids=token_type_ids,
    labels=token_labels,
)

loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMTokenizer, LayoutLMForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LayoutLMTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>words = [<span class="hljs-string">&quot;Hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>normalized_word_boxes = [<span class="hljs-number">637</span>, <span class="hljs-number">773</span>, <span class="hljs-number">693</span>, <span class="hljs-number">782</span>], [<span class="hljs-number">698</span>, <span class="hljs-number">773</span>, <span class="hljs-number">733</span>, <span class="hljs-number">782</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> word, box <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(words, normalized_word_boxes):
<span class="hljs-meta">... </span>    word_tokens = tokenizer.tokenize(word)
<span class="hljs-meta">... </span>    token_boxes.extend([box] * <span class="hljs-built_in">len</span>(word_tokens))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add bounding boxes of cls + sep tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = [[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]] + token_boxes + [[<span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(<span class="hljs-string">&quot; &quot;</span>.join(words), return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>token_type_ids = encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = torch.tensor([token_boxes])
<span class="hljs-meta">&gt;&gt;&gt; </span>token_labels = torch.tensor([<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># batch size of 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    input_ids=input_ids,
<span class="hljs-meta">... </span>    bbox=bbox,
<span class="hljs-meta">... </span>    attention_mask=attention_mask,
<span class="hljs-meta">... </span>    token_type_ids=token_type_ids,
<span class="hljs-meta">... </span>    labels=token_labels,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),k=n("Examples:"),_=c(),L(h.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Examples:"),m.forEach(t),_=p(l),v(h.$$.fragment,l)},m(l,m){f(l,d,m),e(d,k),f(l,_,m),w(h,l,m),b=!0},p:Et,i(l){b||(T(h.$$.fragment,l),b=!0)},o(l){M(h.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(_),$(h,l)}}}function vh(E){let d,k,_,h,b,l,m,j,re,Y,z,ae,O,Z,ne,A,ie,se,J,D,G,Q,F,q,le,W,V,ee,H,te,de,C,ce,U,pe,oe,R,ue,he,N,me,B,fe;return{c(){d=a("p"),k=n("TF 2.0 models accepts two formats as inputs:"),_=c(),h=a("ul"),b=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),j=a("li"),re=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=c(),z=a("p"),ae=n("This second option is useful when using "),O=a("code"),Z=n("tf.keras.Model.fit"),ne=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),A=a("code"),ie=n("model(inputs)"),se=n("."),J=c(),D=a("p"),G=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Q=c(),F=a("ul"),q=a("li"),le=n("a single Tensor with "),W=a("code"),V=n("input_ids"),ee=n(" only and nothing else: "),H=a("code"),te=n("model(inputs_ids)"),de=c(),C=a("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a("code"),pe=n("model([input_ids, attention_mask])"),oe=n(" or "),R=a("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),he=c(),N=a("li"),me=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a("code"),fe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=r(g,"P",{});var x=i(d);k=s(x,"TF 2.0 models accepts two formats as inputs:"),x.forEach(t),_=p(g),h=r(g,"UL",{});var X=i(h);b=r(X,"LI",{});var je=i(b);l=s(je,"having all inputs as keyword arguments (like PyTorch models), or"),je.forEach(t),m=p(X),j=r(X,"LI",{});var Me=i(j);re=s(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),X.forEach(t),Y=p(g),z=r(g,"P",{});var S=i(z);ae=s(S,"This second option is useful when using "),O=r(S,"CODE",{});var be=i(O);Z=s(be,"tf.keras.Model.fit"),be.forEach(t),ne=s(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),A=r(S,"CODE",{});var Fe=i(A);ie=s(Fe,"model(inputs)"),Fe.forEach(t),se=s(S,"."),S.forEach(t),J=p(g),D=r(g,"P",{});var $e=i(D);G=s($e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),$e.forEach(t),Q=p(g),F=r(g,"UL",{});var I=i(F);q=r(I,"LI",{});var K=i(q);le=s(K,"a single Tensor with "),W=r(K,"CODE",{});var xe=i(W);V=s(xe,"input_ids"),xe.forEach(t),ee=s(K," only and nothing else: "),H=r(K,"CODE",{});var ye=i(H);te=s(ye,"model(inputs_ids)"),ye.forEach(t),K.forEach(t),de=p(I),C=r(I,"LI",{});var P=i(C);ce=s(P,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(P,"CODE",{});var ze=i(U);pe=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),oe=s(P," or "),R=r(P,"CODE",{});var ke=i(R);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),P.forEach(t),he=p(I),N=r(I,"LI",{});var ge=i(N);me=s(ge,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(ge,"CODE",{});var Ee=i(B);fe=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),ge.forEach(t),I.forEach(t)},m(g,x){f(g,d,x),e(d,k),f(g,_,x),f(g,h,x),e(h,b),e(b,l),e(h,m),e(h,j),e(j,re),f(g,Y,x),f(g,z,x),e(z,ae),e(z,O),e(O,Z),e(z,ne),e(z,A),e(A,ie),e(z,se),f(g,J,x),f(g,D,x),e(D,G),f(g,Q,x),f(g,F,x),e(F,q),e(q,le),e(q,W),e(W,V),e(q,ee),e(q,H),e(H,te),e(F,de),e(F,C),e(C,ce),e(C,U),e(U,pe),e(C,oe),e(C,R),e(R,ue),e(F,he),e(F,N),e(N,me),e(N,B),e(B,fe)},d(g){g&&t(d),g&&t(_),g&&t(h),g&&t(Y),g&&t(z),g&&t(J),g&&t(D),g&&t(Q),g&&t(F)}}}function wh(E){let d,k,_,h,b;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(m,"CODE",{});var j=i(_);h=s(j,"Module"),j.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){f(l,d,m),e(d,k),e(d,_),e(_,h),e(d,b)},d(l){l&&t(d)}}}function Th(E){let d,k,_,h,b;return h=new tt({props:{code:`from transformers import LayoutLMTokenizer, TFLayoutLMModel
import tensorflow as tf

tokenizer = LayoutLMTokenizer.from_pretrained("microsoft/layoutlm-base-uncased")
model = TFLayoutLMModel.from_pretrained("microsoft/layoutlm-base-uncased")

words = ["Hello", "world"]
normalized_word_boxes = [637, 773, 693, 782], [698, 773, 733, 782]

token_boxes = []
for word, box in zip(words, normalized_word_boxes):
    word_tokens = tokenizer.tokenize(word)
    token_boxes.extend([box] * len(word_tokens))
# add bounding boxes of cls + sep tokens
token_boxes = [[0, 0, 0, 0]] + token_boxes + [[1000, 1000, 1000, 1000]]

encoding = tokenizer(" ".join(words), return_tensors="tf")
input_ids = encoding["input_ids"]
attention_mask = encoding["attention_mask"]
token_type_ids = encoding["token_type_ids"]
bbox = tf.convert_to_tensor([token_boxes])

outputs = model(
    input_ids=input_ids, bbox=bbox, attention_mask=attention_mask, token_type_ids=token_type_ids
)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMTokenizer, TFLayoutLMModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LayoutLMTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLayoutLMModel.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>words = [<span class="hljs-string">&quot;Hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>normalized_word_boxes = [<span class="hljs-number">637</span>, <span class="hljs-number">773</span>, <span class="hljs-number">693</span>, <span class="hljs-number">782</span>], [<span class="hljs-number">698</span>, <span class="hljs-number">773</span>, <span class="hljs-number">733</span>, <span class="hljs-number">782</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> word, box <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(words, normalized_word_boxes):
<span class="hljs-meta">... </span>    word_tokens = tokenizer.tokenize(word)
<span class="hljs-meta">... </span>    token_boxes.extend([box] * <span class="hljs-built_in">len</span>(word_tokens))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add bounding boxes of cls + sep tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = [[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]] + token_boxes + [[<span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(<span class="hljs-string">&quot; &quot;</span>.join(words), return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>token_type_ids = encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = tf.convert_to_tensor([token_boxes])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    input_ids=input_ids, bbox=bbox, attention_mask=attention_mask, token_type_ids=token_type_ids
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),k=n("Examples:"),_=c(),L(h.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Examples:"),m.forEach(t),_=p(l),v(h.$$.fragment,l)},m(l,m){f(l,d,m),e(d,k),f(l,_,m),w(h,l,m),b=!0},p:Et,i(l){b||(T(h.$$.fragment,l),b=!0)},o(l){M(h.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(_),$(h,l)}}}function Mh(E){let d,k,_,h,b,l,m,j,re,Y,z,ae,O,Z,ne,A,ie,se,J,D,G,Q,F,q,le,W,V,ee,H,te,de,C,ce,U,pe,oe,R,ue,he,N,me,B,fe;return{c(){d=a("p"),k=n("TF 2.0 models accepts two formats as inputs:"),_=c(),h=a("ul"),b=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),j=a("li"),re=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=c(),z=a("p"),ae=n("This second option is useful when using "),O=a("code"),Z=n("tf.keras.Model.fit"),ne=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),A=a("code"),ie=n("model(inputs)"),se=n("."),J=c(),D=a("p"),G=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Q=c(),F=a("ul"),q=a("li"),le=n("a single Tensor with "),W=a("code"),V=n("input_ids"),ee=n(" only and nothing else: "),H=a("code"),te=n("model(inputs_ids)"),de=c(),C=a("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a("code"),pe=n("model([input_ids, attention_mask])"),oe=n(" or "),R=a("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),he=c(),N=a("li"),me=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a("code"),fe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=r(g,"P",{});var x=i(d);k=s(x,"TF 2.0 models accepts two formats as inputs:"),x.forEach(t),_=p(g),h=r(g,"UL",{});var X=i(h);b=r(X,"LI",{});var je=i(b);l=s(je,"having all inputs as keyword arguments (like PyTorch models), or"),je.forEach(t),m=p(X),j=r(X,"LI",{});var Me=i(j);re=s(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),X.forEach(t),Y=p(g),z=r(g,"P",{});var S=i(z);ae=s(S,"This second option is useful when using "),O=r(S,"CODE",{});var be=i(O);Z=s(be,"tf.keras.Model.fit"),be.forEach(t),ne=s(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),A=r(S,"CODE",{});var Fe=i(A);ie=s(Fe,"model(inputs)"),Fe.forEach(t),se=s(S,"."),S.forEach(t),J=p(g),D=r(g,"P",{});var $e=i(D);G=s($e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),$e.forEach(t),Q=p(g),F=r(g,"UL",{});var I=i(F);q=r(I,"LI",{});var K=i(q);le=s(K,"a single Tensor with "),W=r(K,"CODE",{});var xe=i(W);V=s(xe,"input_ids"),xe.forEach(t),ee=s(K," only and nothing else: "),H=r(K,"CODE",{});var ye=i(H);te=s(ye,"model(inputs_ids)"),ye.forEach(t),K.forEach(t),de=p(I),C=r(I,"LI",{});var P=i(C);ce=s(P,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(P,"CODE",{});var ze=i(U);pe=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),oe=s(P," or "),R=r(P,"CODE",{});var ke=i(R);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),P.forEach(t),he=p(I),N=r(I,"LI",{});var ge=i(N);me=s(ge,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(ge,"CODE",{});var Ee=i(B);fe=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),ge.forEach(t),I.forEach(t)},m(g,x){f(g,d,x),e(d,k),f(g,_,x),f(g,h,x),e(h,b),e(b,l),e(h,m),e(h,j),e(j,re),f(g,Y,x),f(g,z,x),e(z,ae),e(z,O),e(O,Z),e(z,ne),e(z,A),e(A,ie),e(z,se),f(g,J,x),f(g,D,x),e(D,G),f(g,Q,x),f(g,F,x),e(F,q),e(q,le),e(q,W),e(W,V),e(q,ee),e(q,H),e(H,te),e(F,de),e(F,C),e(C,ce),e(C,U),e(U,pe),e(C,oe),e(C,R),e(R,ue),e(F,he),e(F,N),e(N,me),e(N,B),e(B,fe)},d(g){g&&t(d),g&&t(_),g&&t(h),g&&t(Y),g&&t(z),g&&t(J),g&&t(D),g&&t(Q),g&&t(F)}}}function $h(E){let d,k,_,h,b;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(m,"CODE",{});var j=i(_);h=s(j,"Module"),j.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){f(l,d,m),e(d,k),e(d,_),e(_,h),e(d,b)},d(l){l&&t(d)}}}function xh(E){let d,k,_,h,b;return h=new tt({props:{code:`from transformers import LayoutLMTokenizer, TFLayoutLMForMaskedLM
import tensorflow as tf

tokenizer = LayoutLMTokenizer.from_pretrained("microsoft/layoutlm-base-uncased")
model = TFLayoutLMForMaskedLM.from_pretrained("microsoft/layoutlm-base-uncased")

words = ["Hello", "[MASK]"]
normalized_word_boxes = [637, 773, 693, 782], [698, 773, 733, 782]

token_boxes = []
for word, box in zip(words, normalized_word_boxes):
    word_tokens = tokenizer.tokenize(word)
    token_boxes.extend([box] * len(word_tokens))
# add bounding boxes of cls + sep tokens
token_boxes = [[0, 0, 0, 0]] + token_boxes + [[1000, 1000, 1000, 1000]]

encoding = tokenizer(" ".join(words), return_tensors="tf")
input_ids = encoding["input_ids"]
attention_mask = encoding["attention_mask"]
token_type_ids = encoding["token_type_ids"]
bbox = tf.convert_to_tensor([token_boxes])

labels = tokenizer("Hello world", return_tensors="tf")["input_ids"]

outputs = model(
    input_ids=input_ids,
    bbox=bbox,
    attention_mask=attention_mask,
    token_type_ids=token_type_ids,
    labels=labels,
)

loss = outputs.loss`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMTokenizer, TFLayoutLMForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LayoutLMTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLayoutLMForMaskedLM.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>words = [<span class="hljs-string">&quot;Hello&quot;</span>, <span class="hljs-string">&quot;[MASK]&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>normalized_word_boxes = [<span class="hljs-number">637</span>, <span class="hljs-number">773</span>, <span class="hljs-number">693</span>, <span class="hljs-number">782</span>], [<span class="hljs-number">698</span>, <span class="hljs-number">773</span>, <span class="hljs-number">733</span>, <span class="hljs-number">782</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> word, box <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(words, normalized_word_boxes):
<span class="hljs-meta">... </span>    word_tokens = tokenizer.tokenize(word)
<span class="hljs-meta">... </span>    token_boxes.extend([box] * <span class="hljs-built_in">len</span>(word_tokens))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add bounding boxes of cls + sep tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = [[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]] + token_boxes + [[<span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(<span class="hljs-string">&quot; &quot;</span>.join(words), return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>token_type_ids = encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = tf.convert_to_tensor([token_boxes])

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    input_ids=input_ids,
<span class="hljs-meta">... </span>    bbox=bbox,
<span class="hljs-meta">... </span>    attention_mask=attention_mask,
<span class="hljs-meta">... </span>    token_type_ids=token_type_ids,
<span class="hljs-meta">... </span>    labels=labels,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){d=a("p"),k=n("Examples:"),_=c(),L(h.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Examples:"),m.forEach(t),_=p(l),v(h.$$.fragment,l)},m(l,m){f(l,d,m),e(d,k),f(l,_,m),w(h,l,m),b=!0},p:Et,i(l){b||(T(h.$$.fragment,l),b=!0)},o(l){M(h.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(_),$(h,l)}}}function jh(E){let d,k,_,h,b,l,m,j,re,Y,z,ae,O,Z,ne,A,ie,se,J,D,G,Q,F,q,le,W,V,ee,H,te,de,C,ce,U,pe,oe,R,ue,he,N,me,B,fe;return{c(){d=a("p"),k=n("TF 2.0 models accepts two formats as inputs:"),_=c(),h=a("ul"),b=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),j=a("li"),re=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=c(),z=a("p"),ae=n("This second option is useful when using "),O=a("code"),Z=n("tf.keras.Model.fit"),ne=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),A=a("code"),ie=n("model(inputs)"),se=n("."),J=c(),D=a("p"),G=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Q=c(),F=a("ul"),q=a("li"),le=n("a single Tensor with "),W=a("code"),V=n("input_ids"),ee=n(" only and nothing else: "),H=a("code"),te=n("model(inputs_ids)"),de=c(),C=a("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a("code"),pe=n("model([input_ids, attention_mask])"),oe=n(" or "),R=a("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),he=c(),N=a("li"),me=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a("code"),fe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=r(g,"P",{});var x=i(d);k=s(x,"TF 2.0 models accepts two formats as inputs:"),x.forEach(t),_=p(g),h=r(g,"UL",{});var X=i(h);b=r(X,"LI",{});var je=i(b);l=s(je,"having all inputs as keyword arguments (like PyTorch models), or"),je.forEach(t),m=p(X),j=r(X,"LI",{});var Me=i(j);re=s(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),X.forEach(t),Y=p(g),z=r(g,"P",{});var S=i(z);ae=s(S,"This second option is useful when using "),O=r(S,"CODE",{});var be=i(O);Z=s(be,"tf.keras.Model.fit"),be.forEach(t),ne=s(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),A=r(S,"CODE",{});var Fe=i(A);ie=s(Fe,"model(inputs)"),Fe.forEach(t),se=s(S,"."),S.forEach(t),J=p(g),D=r(g,"P",{});var $e=i(D);G=s($e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),$e.forEach(t),Q=p(g),F=r(g,"UL",{});var I=i(F);q=r(I,"LI",{});var K=i(q);le=s(K,"a single Tensor with "),W=r(K,"CODE",{});var xe=i(W);V=s(xe,"input_ids"),xe.forEach(t),ee=s(K," only and nothing else: "),H=r(K,"CODE",{});var ye=i(H);te=s(ye,"model(inputs_ids)"),ye.forEach(t),K.forEach(t),de=p(I),C=r(I,"LI",{});var P=i(C);ce=s(P,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(P,"CODE",{});var ze=i(U);pe=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),oe=s(P," or "),R=r(P,"CODE",{});var ke=i(R);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),P.forEach(t),he=p(I),N=r(I,"LI",{});var ge=i(N);me=s(ge,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(ge,"CODE",{});var Ee=i(B);fe=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),ge.forEach(t),I.forEach(t)},m(g,x){f(g,d,x),e(d,k),f(g,_,x),f(g,h,x),e(h,b),e(b,l),e(h,m),e(h,j),e(j,re),f(g,Y,x),f(g,z,x),e(z,ae),e(z,O),e(O,Z),e(z,ne),e(z,A),e(A,ie),e(z,se),f(g,J,x),f(g,D,x),e(D,G),f(g,Q,x),f(g,F,x),e(F,q),e(q,le),e(q,W),e(W,V),e(q,ee),e(q,H),e(H,te),e(F,de),e(F,C),e(C,ce),e(C,U),e(U,pe),e(C,oe),e(C,R),e(R,ue),e(F,he),e(F,N),e(N,me),e(N,B),e(B,fe)},d(g){g&&t(d),g&&t(_),g&&t(h),g&&t(Y),g&&t(z),g&&t(J),g&&t(D),g&&t(Q),g&&t(F)}}}function Fh(E){let d,k,_,h,b;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(m,"CODE",{});var j=i(_);h=s(j,"Module"),j.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){f(l,d,m),e(d,k),e(d,_),e(_,h),e(d,b)},d(l){l&&t(d)}}}function zh(E){let d,k,_,h,b;return h=new tt({props:{code:`from transformers import LayoutLMTokenizer, TFLayoutLMForSequenceClassification
import tensorflow as tf

tokenizer = LayoutLMTokenizer.from_pretrained("microsoft/layoutlm-base-uncased")
model = TFLayoutLMForSequenceClassification.from_pretrained("microsoft/layoutlm-base-uncased")

words = ["Hello", "world"]
normalized_word_boxes = [637, 773, 693, 782], [698, 773, 733, 782]

token_boxes = []
for word, box in zip(words, normalized_word_boxes):
    word_tokens = tokenizer.tokenize(word)
    token_boxes.extend([box] * len(word_tokens))
# add bounding boxes of cls + sep tokens
token_boxes = [[0, 0, 0, 0]] + token_boxes + [[1000, 1000, 1000, 1000]]

encoding = tokenizer(" ".join(words), return_tensors="tf")
input_ids = encoding["input_ids"]
attention_mask = encoding["attention_mask"]
token_type_ids = encoding["token_type_ids"]
bbox = tf.convert_to_tensor([token_boxes])
sequence_label = tf.convert_to_tensor([1])

outputs = model(
    input_ids=input_ids,
    bbox=bbox,
    attention_mask=attention_mask,
    token_type_ids=token_type_ids,
    labels=sequence_label,
)

loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMTokenizer, TFLayoutLMForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LayoutLMTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLayoutLMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>words = [<span class="hljs-string">&quot;Hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>normalized_word_boxes = [<span class="hljs-number">637</span>, <span class="hljs-number">773</span>, <span class="hljs-number">693</span>, <span class="hljs-number">782</span>], [<span class="hljs-number">698</span>, <span class="hljs-number">773</span>, <span class="hljs-number">733</span>, <span class="hljs-number">782</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> word, box <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(words, normalized_word_boxes):
<span class="hljs-meta">... </span>    word_tokens = tokenizer.tokenize(word)
<span class="hljs-meta">... </span>    token_boxes.extend([box] * <span class="hljs-built_in">len</span>(word_tokens))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add bounding boxes of cls + sep tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = [[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]] + token_boxes + [[<span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(<span class="hljs-string">&quot; &quot;</span>.join(words), return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>token_type_ids = encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = tf.convert_to_tensor([token_boxes])
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_label = tf.convert_to_tensor([<span class="hljs-number">1</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    input_ids=input_ids,
<span class="hljs-meta">... </span>    bbox=bbox,
<span class="hljs-meta">... </span>    attention_mask=attention_mask,
<span class="hljs-meta">... </span>    token_type_ids=token_type_ids,
<span class="hljs-meta">... </span>    labels=sequence_label,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),k=n("Examples:"),_=c(),L(h.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Examples:"),m.forEach(t),_=p(l),v(h.$$.fragment,l)},m(l,m){f(l,d,m),e(d,k),f(l,_,m),w(h,l,m),b=!0},p:Et,i(l){b||(T(h.$$.fragment,l),b=!0)},o(l){M(h.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(_),$(h,l)}}}function Eh(E){let d,k,_,h,b,l,m,j,re,Y,z,ae,O,Z,ne,A,ie,se,J,D,G,Q,F,q,le,W,V,ee,H,te,de,C,ce,U,pe,oe,R,ue,he,N,me,B,fe;return{c(){d=a("p"),k=n("TF 2.0 models accepts two formats as inputs:"),_=c(),h=a("ul"),b=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),j=a("li"),re=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=c(),z=a("p"),ae=n("This second option is useful when using "),O=a("code"),Z=n("tf.keras.Model.fit"),ne=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),A=a("code"),ie=n("model(inputs)"),se=n("."),J=c(),D=a("p"),G=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Q=c(),F=a("ul"),q=a("li"),le=n("a single Tensor with "),W=a("code"),V=n("input_ids"),ee=n(" only and nothing else: "),H=a("code"),te=n("model(inputs_ids)"),de=c(),C=a("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a("code"),pe=n("model([input_ids, attention_mask])"),oe=n(" or "),R=a("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),he=c(),N=a("li"),me=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a("code"),fe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=r(g,"P",{});var x=i(d);k=s(x,"TF 2.0 models accepts two formats as inputs:"),x.forEach(t),_=p(g),h=r(g,"UL",{});var X=i(h);b=r(X,"LI",{});var je=i(b);l=s(je,"having all inputs as keyword arguments (like PyTorch models), or"),je.forEach(t),m=p(X),j=r(X,"LI",{});var Me=i(j);re=s(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),X.forEach(t),Y=p(g),z=r(g,"P",{});var S=i(z);ae=s(S,"This second option is useful when using "),O=r(S,"CODE",{});var be=i(O);Z=s(be,"tf.keras.Model.fit"),be.forEach(t),ne=s(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),A=r(S,"CODE",{});var Fe=i(A);ie=s(Fe,"model(inputs)"),Fe.forEach(t),se=s(S,"."),S.forEach(t),J=p(g),D=r(g,"P",{});var $e=i(D);G=s($e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),$e.forEach(t),Q=p(g),F=r(g,"UL",{});var I=i(F);q=r(I,"LI",{});var K=i(q);le=s(K,"a single Tensor with "),W=r(K,"CODE",{});var xe=i(W);V=s(xe,"input_ids"),xe.forEach(t),ee=s(K," only and nothing else: "),H=r(K,"CODE",{});var ye=i(H);te=s(ye,"model(inputs_ids)"),ye.forEach(t),K.forEach(t),de=p(I),C=r(I,"LI",{});var P=i(C);ce=s(P,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(P,"CODE",{});var ze=i(U);pe=s(ze,"model([input_ids, attention_mask])"),ze.forEach(t),oe=s(P," or "),R=r(P,"CODE",{});var ke=i(R);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),P.forEach(t),he=p(I),N=r(I,"LI",{});var ge=i(N);me=s(ge,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(ge,"CODE",{});var Ee=i(B);fe=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(t),ge.forEach(t),I.forEach(t)},m(g,x){f(g,d,x),e(d,k),f(g,_,x),f(g,h,x),e(h,b),e(b,l),e(h,m),e(h,j),e(j,re),f(g,Y,x),f(g,z,x),e(z,ae),e(z,O),e(O,Z),e(z,ne),e(z,A),e(A,ie),e(z,se),f(g,J,x),f(g,D,x),e(D,G),f(g,Q,x),f(g,F,x),e(F,q),e(q,le),e(q,W),e(W,V),e(q,ee),e(q,H),e(H,te),e(F,de),e(F,C),e(C,ce),e(C,U),e(U,pe),e(C,oe),e(C,R),e(R,ue),e(F,he),e(F,N),e(N,me),e(N,B),e(B,fe)},d(g){g&&t(d),g&&t(_),g&&t(h),g&&t(Y),g&&t(z),g&&t(J),g&&t(D),g&&t(Q),g&&t(F)}}}function qh(E){let d,k,_,h,b;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(m,"CODE",{});var j=i(_);h=s(j,"Module"),j.forEach(t),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){f(l,d,m),e(d,k),e(d,_),e(_,h),e(d,b)},d(l){l&&t(d)}}}function Ch(E){let d,k,_,h,b;return h=new tt({props:{code:`import tensorflow as tf
from transformers import LayoutLMTokenizer, TFLayoutLMForTokenClassification

tokenizer = LayoutLMTokenizer.from_pretrained("microsoft/layoutlm-base-uncased")
model = TFLayoutLMForTokenClassification.from_pretrained("microsoft/layoutlm-base-uncased")

words = ["Hello", "world"]
normalized_word_boxes = [637, 773, 693, 782], [698, 773, 733, 782]

token_boxes = []
for word, box in zip(words, normalized_word_boxes):
    word_tokens = tokenizer.tokenize(word)
    token_boxes.extend([box] * len(word_tokens))
# add bounding boxes of cls + sep tokens
token_boxes = [[0, 0, 0, 0]] + token_boxes + [[1000, 1000, 1000, 1000]]

encoding = tokenizer(" ".join(words), return_tensors="tf")
input_ids = encoding["input_ids"]
attention_mask = encoding["attention_mask"]
token_type_ids = encoding["token_type_ids"]
bbox = tf.convert_to_tensor([token_boxes])
token_labels = tf.convert_to_tensor([1, 1, 0, 0])

outputs = model(
    input_ids=input_ids,
    bbox=bbox,
    attention_mask=attention_mask,
    token_type_ids=token_type_ids,
    labels=token_labels,
)

loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMTokenizer, TFLayoutLMForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LayoutLMTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLayoutLMForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>words = [<span class="hljs-string">&quot;Hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>normalized_word_boxes = [<span class="hljs-number">637</span>, <span class="hljs-number">773</span>, <span class="hljs-number">693</span>, <span class="hljs-number">782</span>], [<span class="hljs-number">698</span>, <span class="hljs-number">773</span>, <span class="hljs-number">733</span>, <span class="hljs-number">782</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> word, box <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(words, normalized_word_boxes):
<span class="hljs-meta">... </span>    word_tokens = tokenizer.tokenize(word)
<span class="hljs-meta">... </span>    token_boxes.extend([box] * <span class="hljs-built_in">len</span>(word_tokens))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add bounding boxes of cls + sep tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>token_boxes = [[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]] + token_boxes + [[<span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>, <span class="hljs-number">1000</span>]]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(<span class="hljs-string">&quot; &quot;</span>.join(words), return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>token_type_ids = encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = tf.convert_to_tensor([token_boxes])
<span class="hljs-meta">&gt;&gt;&gt; </span>token_labels = tf.convert_to_tensor([<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    input_ids=input_ids,
<span class="hljs-meta">... </span>    bbox=bbox,
<span class="hljs-meta">... </span>    attention_mask=attention_mask,
<span class="hljs-meta">... </span>    token_type_ids=token_type_ids,
<span class="hljs-meta">... </span>    labels=token_labels,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),k=n("Examples:"),_=c(),L(h.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Examples:"),m.forEach(t),_=p(l),v(h.$$.fragment,l)},m(l,m){f(l,d,m),e(d,k),f(l,_,m),w(h,l,m),b=!0},p:Et,i(l){b||(T(h.$$.fragment,l),b=!0)},o(l){M(h.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(_),$(h,l)}}}function Ph(E){let d,k,_,h,b,l,m,j,re,Y,z,ae,O,Z,ne,A,ie,se,J,D,G,Q,F,q,le,W,V,ee,H,te,de,C,ce,U,pe,oe,R,ue,he,N,me,B,fe,g,x,X,je,Me,S,be,Fe,$e,I,K,xe,ye,P,ze,ke,ge,Ee,Qn,Wr,Hr,Is,Rr,Kr,xo,Vr,Xr,jo,Yr,Zr,Da,Fo,Aa,ot,Gr,Os,Jr,Qr,Ds,ei,ti,Ua,zo,Ba,es,et,oi,ts,ni,si,Eo,ai,ri,qo,ii,li,Wa,nt,di,Co,ci,pi,Po,ui,hi,Ha,rt,qt,As,No,mi,Us,fi,Ra,Pe,So,gi,it,_i,os,yi,bi,Io,ki,Li,vi,lt,wi,ns,Ti,Mi,ss,$i,xi,ji,Ct,Ka,dt,Pt,Bs,Oo,Fi,Ws,zi,Va,Ne,Do,Ei,Hs,qi,Ci,Nt,as,Pi,Ni,rs,Si,Ii,Oi,Ao,Di,is,Ai,Ui,Xa,ct,St,Rs,Uo,Bi,Ks,Wi,Ya,Se,Bo,Hi,Vs,Ri,Ki,It,ls,Vi,Xi,ds,Yi,Zi,Gi,Wo,Ji,cs,Qi,el,Za,pt,Ot,Xs,Ho,tl,Ys,ol,Ga,Ie,Ro,nl,Ko,sl,Vo,al,rl,il,Xo,ll,Yo,dl,cl,pl,Ae,Zo,ul,ut,hl,ps,ml,fl,Zs,gl,_l,yl,Dt,bl,At,Ja,ht,Ut,Gs,Go,kl,Js,Ll,Qa,Oe,Jo,vl,mt,wl,Qs,Tl,Ml,Qo,$l,xl,jl,en,Fl,tn,zl,El,ql,Ue,on,Cl,ft,Pl,us,Nl,Sl,ea,Il,Ol,Dl,Bt,Al,Wt,er,gt,Ht,ta,nn,Ul,oa,Bl,tr,qe,sn,Wl,an,Hl,rn,Rl,Kl,Vl,ln,Xl,dn,Yl,Zl,Gl,cn,Jl,pn,Ql,ed,td,Be,un,od,_t,nd,hs,sd,ad,na,rd,id,ld,Rt,dd,Kt,or,yt,Vt,sa,hn,cd,aa,pd,nr,Ce,mn,ud,bt,hd,fn,md,fd,gn,gd,_d,yd,_n,bd,yn,kd,Ld,vd,bn,wd,kn,Td,Md,$d,We,Ln,xd,kt,jd,ms,Fd,zd,ra,Ed,qd,Cd,Xt,Pd,Yt,sr,Lt,Zt,ia,vn,Nd,la,Sd,ar,Le,wn,Id,da,Od,Dd,Tn,Ad,fs,Ud,Bd,Wd,Mn,Hd,$n,Rd,Kd,Vd,Gt,Xd,He,xn,Yd,vt,Zd,gs,Gd,Jd,ca,Qd,ec,tc,Jt,oc,Qt,rr,wt,eo,pa,jn,nc,ua,sc,ir,ve,Fn,ac,zn,rc,ha,ic,lc,dc,En,cc,_s,pc,uc,hc,qn,mc,Cn,fc,gc,_c,to,yc,Re,Pn,bc,Tt,kc,ys,Lc,vc,ma,wc,Tc,Mc,oo,$c,no,lr,Mt,so,fa,Nn,xc,ga,jc,dr,we,Sn,Fc,_a,zc,Ec,In,qc,bs,Cc,Pc,Nc,On,Sc,Dn,Ic,Oc,Dc,ao,Ac,Ke,An,Uc,$t,Bc,ks,Wc,Hc,ya,Rc,Kc,Vc,ro,Xc,io,cr,xt,lo,ba,Un,Yc,ka,Zc,pr,Te,Bn,Gc,La,Jc,Qc,Wn,ep,Ls,tp,op,np,Hn,sp,Rn,ap,rp,ip,co,lp,Ve,Kn,dp,jt,cp,vs,pp,up,va,hp,mp,fp,po,gp,uo,ur;return l=new De({}),A=new De({}),Fo=new tt({props:{code:`def normalize_bbox(bbox, width, height):
    return [
        int(1000 * (bbox[0] / width)),
        int(1000 * (bbox[1] / height)),
        int(1000 * (bbox[2] / width)),
        int(1000 * (bbox[3] / height)),
    ]`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">normalize_bbox</span>(<span class="hljs-params">bbox, width, height</span>):
    <span class="hljs-keyword">return</span> [
        <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">0</span>] / width)),
        <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">1</span>] / height)),
        <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">2</span>] / width)),
        <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">3</span>] / height)),
    ]`}}),zo=new tt({props:{code:`from PIL import Image

image = Image.open("name_of_your_document - can be a png file, pdf, etc.")

width, height = image.size`,highlighted:`<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

image = Image.<span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;name_of_your_document - can be a png file, pdf, etc.&quot;</span>)

width, height = image.size`}}),No=new De({}),So=new _e({props:{name:"class transformers.LayoutLMConfig",anchor:"transformers.LayoutLMConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the LayoutLM model. Defines the different tokens that can be represented by the
<em>inputs_ids</em> passed to the forward method of <a href="/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.LayoutLMModel">LayoutLMModel</a>.`,name:"vocab_size"},{anchor:"transformers.LayoutLMConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.LayoutLMConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.LayoutLMConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.LayoutLMConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.LayoutLMConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.LayoutLMConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.LayoutLMConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.LayoutLMConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.LayoutLMConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed into <a href="/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.LayoutLMModel">LayoutLMModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.LayoutLMConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.LayoutLMConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.LayoutLMConfig.max_2d_position_embeddings",description:`<strong>max_2d_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum value that the 2D position embedding might ever used. Typically set this to something large
just in case (e.g., 1024).`,name:"max_2d_position_embeddings"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/layoutlm/configuration_layoutlm.py#L39"}}),Ct=new zt({props:{anchor:"transformers.LayoutLMConfig.example",$$slots:{default:[hh]},$$scope:{ctx:E}}}),Oo=new De({}),Do=new _e({props:{name:"class transformers.LayoutLMTokenizer",anchor:"transformers.LayoutLMTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/layoutlm/tokenization_layoutlm.py#L50"}}),Uo=new De({}),Bo=new _e({props:{name:"class transformers.LayoutLMTokenizerFast",anchor:"transformers.LayoutLMTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/layoutlm/tokenization_layoutlm_fast.py#L59"}}),Ho=new De({}),Ro=new _e({props:{name:"class transformers.LayoutLMModel",anchor:"transformers.LayoutLMModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/layoutlm/modeling_layoutlm.py#L703"}}),Zo=new _e({props:{name:"forward",anchor:"transformers.LayoutLMModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMModel.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner. See <a href="#Overview">Overview</a> for normalization.`,name:"bbox"},{anchor:"transformers.LayoutLMModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>: <code>1</code> for
tokens that are NOT MASKED, <code>0</code> for MASKED tokens.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>: <code>0</code> corresponds to a <em>sentence A</em> token, <code>1</code> corresponds to a <em>sentence B</em> token</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: <code>1</code>
indicates the head is <strong>not masked</strong>, <code>0</code> indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.LayoutLMModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the attentions tensors of all attention layers are returned. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the hidden states of all layers are returned. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/layoutlm/modeling_layoutlm.py#L729",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.LayoutLMConfig"
>LayoutLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Dt=new Qe({props:{$$slots:{default:[mh]},$$scope:{ctx:E}}}),At=new zt({props:{anchor:"transformers.LayoutLMModel.forward.example",$$slots:{default:[fh]},$$scope:{ctx:E}}}),Go=new De({}),Jo=new _e({props:{name:"class transformers.LayoutLMForMaskedLM",anchor:"transformers.LayoutLMForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/layoutlm/modeling_layoutlm.py#L851"}}),on=new _e({props:{name:"forward",anchor:"transformers.LayoutLMForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMForMaskedLM.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner. See <a href="#Overview">Overview</a> for normalization.`,name:"bbox"},{anchor:"transformers.LayoutLMForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>: <code>1</code> for
tokens that are NOT MASKED, <code>0</code> for MASKED tokens.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>: <code>0</code> corresponds to a <em>sentence A</em> token, <code>1</code> corresponds to a <em>sentence B</em> token</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: <code>1</code>
indicates the head is <strong>not masked</strong>, <code>0</code> indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.LayoutLMForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the attentions tensors of all attention layers are returned. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the hidden states of all layers are returned. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/layoutlm/modeling_layoutlm.py#L870",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.LayoutLMConfig"
>LayoutLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bt=new Qe({props:{$$slots:{default:[gh]},$$scope:{ctx:E}}}),Wt=new zt({props:{anchor:"transformers.LayoutLMForMaskedLM.forward.example",$$slots:{default:[_h]},$$scope:{ctx:E}}}),nn=new De({}),sn=new _e({props:{name:"class transformers.LayoutLMForSequenceClassification",anchor:"transformers.LayoutLMForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/layoutlm/modeling_layoutlm.py#L980"}}),un=new _e({props:{name:"forward",anchor:"transformers.LayoutLMForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner. See <a href="#Overview">Overview</a> for normalization.`,name:"bbox"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>: <code>1</code> for
tokens that are NOT MASKED, <code>0</code> for MASKED tokens.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>: <code>0</code> corresponds to a <em>sentence A</em> token, <code>1</code> corresponds to a <em>sentence B</em> token</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: <code>1</code>
indicates the head is <strong>not masked</strong>, <code>0</code> indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the attentions tensors of all attention layers are returned. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the hidden states of all layers are returned. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/layoutlm/modeling_layoutlm.py#L994",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.LayoutLMConfig"
>LayoutLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Rt=new Qe({props:{$$slots:{default:[yh]},$$scope:{ctx:E}}}),Kt=new zt({props:{anchor:"transformers.LayoutLMForSequenceClassification.forward.example",$$slots:{default:[bh]},$$scope:{ctx:E}}}),hn=new De({}),mn=new _e({props:{name:"class transformers.LayoutLMForTokenClassification",anchor:"transformers.LayoutLMForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/layoutlm/modeling_layoutlm.py#L1117"}}),Ln=new _e({props:{name:"forward",anchor:"transformers.LayoutLMForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMForTokenClassification.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner. See <a href="#Overview">Overview</a> for normalization.`,name:"bbox"},{anchor:"transformers.LayoutLMForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>: <code>1</code> for
tokens that are NOT MASKED, <code>0</code> for MASKED tokens.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>: <code>0</code> corresponds to a <em>sentence A</em> token, <code>1</code> corresponds to a <em>sentence B</em> token</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: <code>1</code>
indicates the head is <strong>not masked</strong>, <code>0</code> indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.LayoutLMForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the attentions tensors of all attention layers are returned. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the hidden states of all layers are returned. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, the model will return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/layoutlm/modeling_layoutlm.py#L1131",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.LayoutLMConfig"
>LayoutLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xt=new Qe({props:{$$slots:{default:[kh]},$$scope:{ctx:E}}}),Yt=new zt({props:{anchor:"transformers.LayoutLMForTokenClassification.forward.example",$$slots:{default:[Lh]},$$scope:{ctx:E}}}),vn=new De({}),wn=new _e({props:{name:"class transformers.TFLayoutLMModel",anchor:"transformers.TFLayoutLMModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L904"}}),Gt=new Qe({props:{$$slots:{default:[vh]},$$scope:{ctx:E}}}),xn=new _e({props:{name:"call",anchor:"transformers.TFLayoutLMModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLayoutLMModel.call.bbox",description:`<strong>bbox</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding Boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings- 1]</code>.`,name:"bbox"},{anchor:"transformers.TFLayoutLMModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLayoutLMModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLayoutLMModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLayoutLMModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLayoutLMModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLayoutLMModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFLayoutLMModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFLayoutLMModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L910",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.LayoutLMConfig"
>LayoutLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Jt=new Qe({props:{$$slots:{default:[wh]},$$scope:{ctx:E}}}),Qt=new zt({props:{anchor:"transformers.TFLayoutLMModel.call.example",$$slots:{default:[Th]},$$scope:{ctx:E}}}),jn=new De({}),Fn=new _e({props:{name:"class transformers.TFLayoutLMForMaskedLM",anchor:"transformers.TFLayoutLMForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1004"}}),to=new Qe({props:{$$slots:{default:[Mh]},$$scope:{ctx:E}}}),Pn=new _e({props:{name:"call",anchor:"transformers.TFLayoutLMForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.bbox",description:`<strong>bbox</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding Boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings- 1]</code>.`,name:"bbox"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1032",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.LayoutLMConfig"
>LayoutLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),oo=new Qe({props:{$$slots:{default:[$h]},$$scope:{ctx:E}}}),no=new zt({props:{anchor:"transformers.TFLayoutLMForMaskedLM.call.example",$$slots:{default:[xh]},$$scope:{ctx:E}}}),Nn=new De({}),Sn=new _e({props:{name:"class transformers.TFLayoutLMForSequenceClassification",anchor:"transformers.TFLayoutLMForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1137"}}),ao=new Qe({props:{$$slots:{default:[jh]},$$scope:{ctx:E}}}),An=new _e({props:{name:"call",anchor:"transformers.TFLayoutLMForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.bbox",description:`<strong>bbox</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding Boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings- 1]</code>.`,name:"bbox"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1155",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.LayoutLMConfig"
>LayoutLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ro=new Qe({props:{$$slots:{default:[Fh]},$$scope:{ctx:E}}}),io=new zt({props:{anchor:"transformers.TFLayoutLMForSequenceClassification.call.example",$$slots:{default:[zh]},$$scope:{ctx:E}}}),Un=new De({}),Bn=new _e({props:{name:"class transformers.TFLayoutLMForTokenClassification",anchor:"transformers.TFLayoutLMForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1261"}}),co=new Qe({props:{$$slots:{default:[Eh]},$$scope:{ctx:E}}}),Kn=new _e({props:{name:"call",anchor:"transformers.TFLayoutLMForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.20.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.bbox",description:`<strong>bbox</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding Boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings- 1]</code>.`,name:"bbox"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.20.1/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1285",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.LayoutLMConfig"
>LayoutLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.20.1/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),po=new Qe({props:{$$slots:{default:[qh]},$$scope:{ctx:E}}}),uo=new zt({props:{anchor:"transformers.TFLayoutLMForTokenClassification.call.example",$$slots:{default:[Ch]},$$scope:{ctx:E}}}),{c(){d=a("meta"),k=c(),_=a("h1"),h=a("a"),b=a("span"),L(l.$$.fragment),m=c(),j=a("span"),re=n("LayoutLM"),Y=c(),z=a("a"),ae=c(),O=a("h2"),Z=a("a"),ne=a("span"),L(A.$$.fragment),ie=c(),se=a("span"),J=n("Overview"),D=c(),G=a("p"),Q=n("The LayoutLM model was proposed in the paper "),F=a("a"),q=n(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),le=n(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei, and
Ming Zhou. It\u2019s a simple but effective pretraining method of text and layout for document image understanding and
information extraction tasks, such as form understanding and receipt understanding. It obtains state-of-the-art results
on several downstream tasks:`),W=c(),V=a("ul"),ee=a("li"),H=n("form understanding: the "),te=a("a"),de=n("FUNSD"),C=n(` dataset (a collection of 199 annotated
forms comprising more than 30,000 words).`),ce=c(),U=a("li"),pe=n("receipt understanding: the "),oe=a("a"),R=n("SROIE"),ue=n(` dataset (a collection of 626 receipts for
training and 347 receipts for testing).`),he=c(),N=a("li"),me=n("document image classification: the "),B=a("a"),fe=n("RVL-CDIP"),g=n(` dataset (a collection of
400,000 images belonging to one of 16 classes).`),x=c(),X=a("p"),je=n("The abstract from the paper is the following:"),Me=c(),S=a("p"),be=a("em"),Fe=n(`Pre-training techniques have been verified successfully in a variety of NLP tasks in recent years. Despite the
widespread use of pretraining models for NLP applications, they almost exclusively focus on text-level manipulation,
while neglecting layout and style information that is vital for document image understanding. In this paper, we propose
the LayoutLM to jointly model interactions between text and layout information across scanned document images, which is
beneficial for a great number of real-world document image understanding tasks such as information extraction from
scanned documents. Furthermore, we also leverage image features to incorporate words\u2019 visual information into LayoutLM.
To the best of our knowledge, this is the first time that text and layout are jointly learned in a single framework for
document-level pretraining. It achieves new state-of-the-art results in several downstream tasks, including form
understanding (from 70.72 to 79.27), receipt understanding (from 94.02 to 95.24) and document image classification
(from 93.07 to 94.42).`),$e=c(),I=a("p"),K=n("Tips:"),xe=c(),ye=a("ul"),P=a("li"),ze=n("In addition to "),ke=a("em"),ge=n("input_ids"),Ee=n(", "),Qn=a("a"),Wr=n("forward()"),Hr=n(" also expects the input "),Is=a("code"),Rr=n("bbox"),Kr=n(`, which are
the bounding boxes (i.e. 2D-positions) of the input tokens. These can be obtained using an external OCR engine such
as Google\u2019s `),xo=a("a"),Vr=n("Tesseract"),Xr=n(" (there\u2019s a "),jo=a("a"),Yr=n("Python wrapper"),Zr=n(` available). Each bounding box should be in (x0, y0, x1, y1) format, where
(x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1) represents the
position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on a 0-1000
scale. To normalize, you can use the following function:`),Da=c(),L(Fo.$$.fragment),Aa=c(),ot=a("p"),Gr=n("Here, "),Os=a("code"),Jr=n("width"),Qr=n(" and "),Ds=a("code"),ei=n("height"),ti=n(` correspond to the width and height of the original document in which the token
occurs. Those can be obtained using the Python Image Library (PIL) library for example, as follows:`),Ua=c(),L(zo.$$.fragment),Ba=c(),es=a("ul"),et=a("li"),oi=n("For a demo which shows how to fine-tune "),ts=a("a"),ni=n("LayoutLMForTokenClassification"),si=n(" on the "),Eo=a("a"),ai=n("FUNSD dataset"),ri=n(" (a collection of annotated forms), see "),qo=a("a"),ii=n("this notebook"),li=n(`.
It includes an inference part, which shows how to use Google\u2019s Tesseract on a new document.`),Wa=c(),nt=a("p"),di=n("This model was contributed by "),Co=a("a"),ci=n("liminghao1630"),pi=n(`. The original code can be found
`),Po=a("a"),ui=n("here"),hi=n("."),Ha=c(),rt=a("h2"),qt=a("a"),As=a("span"),L(No.$$.fragment),mi=c(),Us=a("span"),fi=n("LayoutLMConfig"),Ra=c(),Pe=a("div"),L(So.$$.fragment),gi=c(),it=a("p"),_i=n("This is the configuration class to store the configuration of a "),os=a("a"),yi=n("LayoutLMModel"),bi=n(`. It is used to instantiate a
LayoutLM model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the LayoutLM
`),Io=a("a"),ki=n("microsoft/layoutlm-base-uncased"),Li=n(" architecture."),vi=c(),lt=a("p"),wi=n("Configuration objects inherit from "),ns=a("a"),Ti=n("BertConfig"),Mi=n(` and can be used to control the model outputs. Read the
documentation from `),ss=a("a"),$i=n("BertConfig"),xi=n(" for more information."),ji=c(),L(Ct.$$.fragment),Ka=c(),dt=a("h2"),Pt=a("a"),Bs=a("span"),L(Oo.$$.fragment),Fi=c(),Ws=a("span"),zi=n("LayoutLMTokenizer"),Va=c(),Ne=a("div"),L(Do.$$.fragment),Ei=c(),Hs=a("p"),qi=n("Constructs a LayoutLM tokenizer."),Ci=c(),Nt=a("p"),as=a("a"),Pi=n("LayoutLMTokenizer"),Ni=n(" is identical to "),rs=a("a"),Si=n("BertTokenizer"),Ii=n(` and runs end-to-end tokenization: punctuation splitting +
wordpiece.`),Oi=c(),Ao=a("p"),Di=n("Refer to superclass "),is=a("a"),Ai=n("BertTokenizer"),Ui=n(" for usage examples and documentation concerning parameters."),Xa=c(),ct=a("h2"),St=a("a"),Rs=a("span"),L(Uo.$$.fragment),Bi=c(),Ks=a("span"),Wi=n("LayoutLMTokenizerFast"),Ya=c(),Se=a("div"),L(Bo.$$.fragment),Hi=c(),Vs=a("p"),Ri=n("Constructs a \u201CFast\u201D LayoutLMTokenizer."),Ki=c(),It=a("p"),ls=a("a"),Vi=n("LayoutLMTokenizerFast"),Xi=n(" is identical to "),ds=a("a"),Yi=n("BertTokenizerFast"),Zi=n(` and runs end-to-end tokenization: punctuation
splitting + wordpiece.`),Gi=c(),Wo=a("p"),Ji=n("Refer to superclass "),cs=a("a"),Qi=n("BertTokenizerFast"),el=n(" for usage examples and documentation concerning parameters."),Za=c(),pt=a("h2"),Ot=a("a"),Xs=a("span"),L(Ho.$$.fragment),tl=c(),Ys=a("span"),ol=n("LayoutLMModel"),Ga=c(),Ie=a("div"),L(Ro.$$.fragment),nl=c(),Ko=a("p"),sl=n(`The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top.
The LayoutLM model was proposed in `),Vo=a("a"),al=n(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),rl=n(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),il=c(),Xo=a("p"),ll=n("This model is a PyTorch "),Yo=a("a"),dl=n("torch.nn.Module"),cl=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),pl=c(),Ae=a("div"),L(Zo.$$.fragment),ul=c(),ut=a("p"),hl=n("The "),ps=a("a"),ml=n("LayoutLMModel"),fl=n(" forward method, overrides the "),Zs=a("code"),gl=n("__call__"),_l=n(" special method."),yl=c(),L(Dt.$$.fragment),bl=c(),L(At.$$.fragment),Ja=c(),ht=a("h2"),Ut=a("a"),Gs=a("span"),L(Go.$$.fragment),kl=c(),Js=a("span"),Ll=n("LayoutLMForMaskedLM"),Qa=c(),Oe=a("div"),L(Jo.$$.fragment),vl=c(),mt=a("p"),wl=n("LayoutLM Model with a "),Qs=a("code"),Tl=n("language modeling"),Ml=n(` head on top.
The LayoutLM model was proposed in `),Qo=a("a"),$l=n(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),xl=n(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),jl=c(),en=a("p"),Fl=n("This model is a PyTorch "),tn=a("a"),zl=n("torch.nn.Module"),El=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ql=c(),Ue=a("div"),L(on.$$.fragment),Cl=c(),ft=a("p"),Pl=n("The "),us=a("a"),Nl=n("LayoutLMForMaskedLM"),Sl=n(" forward method, overrides the "),ea=a("code"),Il=n("__call__"),Ol=n(" special method."),Dl=c(),L(Bt.$$.fragment),Al=c(),L(Wt.$$.fragment),er=c(),gt=a("h2"),Ht=a("a"),ta=a("span"),L(nn.$$.fragment),Ul=c(),oa=a("span"),Bl=n("LayoutLMForSequenceClassification"),tr=c(),qe=a("div"),L(sn.$$.fragment),Wl=c(),an=a("p"),Hl=n(`LayoutLM Model with a sequence classification head on top (a linear layer on top of the pooled output) e.g. for
document image classification tasks such as the `),rn=a("a"),Rl=n("RVL-CDIP"),Kl=n(" dataset."),Vl=c(),ln=a("p"),Xl=n("The LayoutLM model was proposed in "),dn=a("a"),Yl=n(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),Zl=n(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),Gl=c(),cn=a("p"),Jl=n("This model is a PyTorch "),pn=a("a"),Ql=n("torch.nn.Module"),ed=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),td=c(),Be=a("div"),L(un.$$.fragment),od=c(),_t=a("p"),nd=n("The "),hs=a("a"),sd=n("LayoutLMForSequenceClassification"),ad=n(" forward method, overrides the "),na=a("code"),rd=n("__call__"),id=n(" special method."),ld=c(),L(Rt.$$.fragment),dd=c(),L(Kt.$$.fragment),or=c(),yt=a("h2"),Vt=a("a"),sa=a("span"),L(hn.$$.fragment),cd=c(),aa=a("span"),pd=n("LayoutLMForTokenClassification"),nr=c(),Ce=a("div"),L(mn.$$.fragment),ud=c(),bt=a("p"),hd=n(`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
sequence labeling (information extraction) tasks such as the `),fn=a("a"),md=n("FUNSD"),fd=n(`
dataset and the `),gn=a("a"),gd=n("SROIE"),_d=n(" dataset."),yd=c(),_n=a("p"),bd=n("The LayoutLM model was proposed in "),yn=a("a"),kd=n(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),Ld=n(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),vd=c(),bn=a("p"),wd=n("This model is a PyTorch "),kn=a("a"),Td=n("torch.nn.Module"),Md=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),$d=c(),We=a("div"),L(Ln.$$.fragment),xd=c(),kt=a("p"),jd=n("The "),ms=a("a"),Fd=n("LayoutLMForTokenClassification"),zd=n(" forward method, overrides the "),ra=a("code"),Ed=n("__call__"),qd=n(" special method."),Cd=c(),L(Xt.$$.fragment),Pd=c(),L(Yt.$$.fragment),sr=c(),Lt=a("h2"),Zt=a("a"),ia=a("span"),L(vn.$$.fragment),Nd=c(),la=a("span"),Sd=n("TFLayoutLMModel"),ar=c(),Le=a("div"),L(wn.$$.fragment),Id=c(),da=a("p"),Od=n("The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top."),Dd=c(),Tn=a("p"),Ad=n("This model inherits from "),fs=a("a"),Ud=n("TFPreTrainedModel"),Bd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wd=c(),Mn=a("p"),Hd=n("This model is also a "),$n=a("a"),Rd=n("tf.keras.Model"),Kd=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vd=c(),L(Gt.$$.fragment),Xd=c(),He=a("div"),L(xn.$$.fragment),Yd=c(),vt=a("p"),Zd=n("The "),gs=a("a"),Gd=n("TFLayoutLMModel"),Jd=n(" forward method, overrides the "),ca=a("code"),Qd=n("__call__"),ec=n(" special method."),tc=c(),L(Jt.$$.fragment),oc=c(),L(Qt.$$.fragment),rr=c(),wt=a("h2"),eo=a("a"),pa=a("span"),L(jn.$$.fragment),nc=c(),ua=a("span"),sc=n("TFLayoutLMForMaskedLM"),ir=c(),ve=a("div"),L(Fn.$$.fragment),ac=c(),zn=a("p"),rc=n("LayoutLM Model with a "),ha=a("code"),ic=n("language modeling"),lc=n(" head on top."),dc=c(),En=a("p"),cc=n("This model inherits from "),_s=a("a"),pc=n("TFPreTrainedModel"),uc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hc=c(),qn=a("p"),mc=n("This model is also a "),Cn=a("a"),fc=n("tf.keras.Model"),gc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_c=c(),L(to.$$.fragment),yc=c(),Re=a("div"),L(Pn.$$.fragment),bc=c(),Tt=a("p"),kc=n("The "),ys=a("a"),Lc=n("TFLayoutLMForMaskedLM"),vc=n(" forward method, overrides the "),ma=a("code"),wc=n("__call__"),Tc=n(" special method."),Mc=c(),L(oo.$$.fragment),$c=c(),L(no.$$.fragment),lr=c(),Mt=a("h2"),so=a("a"),fa=a("span"),L(Nn.$$.fragment),xc=c(),ga=a("span"),jc=n("TFLayoutLMForSequenceClassification"),dr=c(),we=a("div"),L(Sn.$$.fragment),Fc=c(),_a=a("p"),zc=n(`LayoutLM Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Ec=c(),In=a("p"),qc=n("This model inherits from "),bs=a("a"),Cc=n("TFPreTrainedModel"),Pc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nc=c(),On=a("p"),Sc=n("This model is also a "),Dn=a("a"),Ic=n("tf.keras.Model"),Oc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dc=c(),L(ao.$$.fragment),Ac=c(),Ke=a("div"),L(An.$$.fragment),Uc=c(),$t=a("p"),Bc=n("The "),ks=a("a"),Wc=n("TFLayoutLMForSequenceClassification"),Hc=n(" forward method, overrides the "),ya=a("code"),Rc=n("__call__"),Kc=n(" special method."),Vc=c(),L(ro.$$.fragment),Xc=c(),L(io.$$.fragment),cr=c(),xt=a("h2"),lo=a("a"),ba=a("span"),L(Un.$$.fragment),Yc=c(),ka=a("span"),Zc=n("TFLayoutLMForTokenClassification"),pr=c(),Te=a("div"),L(Bn.$$.fragment),Gc=c(),La=a("p"),Jc=n(`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Qc=c(),Wn=a("p"),ep=n("This model inherits from "),Ls=a("a"),tp=n("TFPreTrainedModel"),op=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),np=c(),Hn=a("p"),sp=n("This model is also a "),Rn=a("a"),ap=n("tf.keras.Model"),rp=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ip=c(),L(co.$$.fragment),lp=c(),Ve=a("div"),L(Kn.$$.fragment),dp=c(),jt=a("p"),cp=n("The "),vs=a("a"),pp=n("TFLayoutLMForTokenClassification"),up=n(" forward method, overrides the "),va=a("code"),hp=n("__call__"),mp=n(" special method."),fp=c(),L(po.$$.fragment),gp=c(),L(uo.$$.fragment),this.h()},l(o){const y=ph('[data-svelte="svelte-1phssyn"]',document.head);d=r(y,"META",{name:!0,content:!0}),y.forEach(t),k=p(o),_=r(o,"H1",{class:!0});var Vn=i(_);h=r(Vn,"A",{id:!0,class:!0,href:!0});var wa=i(h);b=r(wa,"SPAN",{});var Ta=i(b);v(l.$$.fragment,Ta),Ta.forEach(t),wa.forEach(t),m=p(Vn),j=r(Vn,"SPAN",{});var Ma=i(j);re=s(Ma,"LayoutLM"),Ma.forEach(t),Vn.forEach(t),Y=p(o),z=r(o,"A",{id:!0}),i(z).forEach(t),ae=p(o),O=r(o,"H2",{class:!0});var Xn=i(O);Z=r(Xn,"A",{id:!0,class:!0,href:!0});var $a=i(Z);ne=r($a,"SPAN",{});var xa=i(ne);v(A.$$.fragment,xa),xa.forEach(t),$a.forEach(t),ie=p(Xn),se=r(Xn,"SPAN",{});var ja=i(se);J=s(ja,"Overview"),ja.forEach(t),Xn.forEach(t),D=p(o),G=r(o,"P",{});var Yn=i(G);Q=s(Yn,"The LayoutLM model was proposed in the paper "),F=r(Yn,"A",{href:!0,rel:!0});var Fa=i(F);q=s(Fa,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),Fa.forEach(t),le=s(Yn,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei, and
Ming Zhou. It\u2019s a simple but effective pretraining method of text and layout for document image understanding and
information extraction tasks, such as form understanding and receipt understanding. It obtains state-of-the-art results
on several downstream tasks:`),Yn.forEach(t),W=p(o),V=r(o,"UL",{});var Ft=i(V);ee=r(Ft,"LI",{});var Zn=i(ee);H=s(Zn,"form understanding: the "),te=r(Zn,"A",{href:!0,rel:!0});var za=i(te);de=s(za,"FUNSD"),za.forEach(t),C=s(Zn,` dataset (a collection of 199 annotated
forms comprising more than 30,000 words).`),Zn.forEach(t),ce=p(Ft),U=r(Ft,"LI",{});var Gn=i(U);pe=s(Gn,"receipt understanding: the "),oe=r(Gn,"A",{href:!0,rel:!0});var Ea=i(oe);R=s(Ea,"SROIE"),Ea.forEach(t),ue=s(Gn,` dataset (a collection of 626 receipts for
training and 347 receipts for testing).`),Gn.forEach(t),he=p(Ft),N=r(Ft,"LI",{});var Jn=i(N);me=s(Jn,"document image classification: the "),B=r(Jn,"A",{href:!0,rel:!0});var qa=i(B);fe=s(qa,"RVL-CDIP"),qa.forEach(t),g=s(Jn,` dataset (a collection of
400,000 images belonging to one of 16 classes).`),Jn.forEach(t),Ft.forEach(t),x=p(o),X=r(o,"P",{});var Ca=i(X);je=s(Ca,"The abstract from the paper is the following:"),Ca.forEach(t),Me=p(o),S=r(o,"P",{});var Pa=i(S);be=r(Pa,"EM",{});var Na=i(be);Fe=s(Na,`Pre-training techniques have been verified successfully in a variety of NLP tasks in recent years. Despite the
widespread use of pretraining models for NLP applications, they almost exclusively focus on text-level manipulation,
while neglecting layout and style information that is vital for document image understanding. In this paper, we propose
the LayoutLM to jointly model interactions between text and layout information across scanned document images, which is
beneficial for a great number of real-world document image understanding tasks such as information extraction from
scanned documents. Furthermore, we also leverage image features to incorporate words\u2019 visual information into LayoutLM.
To the best of our knowledge, this is the first time that text and layout are jointly learned in a single framework for
document-level pretraining. It achieves new state-of-the-art results in several downstream tasks, including form
understanding (from 70.72 to 79.27), receipt understanding (from 94.02 to 95.24) and document image classification
(from 93.07 to 94.42).`),Na.forEach(t),Pa.forEach(t),$e=p(o),I=r(o,"P",{});var Sa=i(I);K=s(Sa,"Tips:"),Sa.forEach(t),xe=p(o),ye=r(o,"UL",{});var _p=i(ye);P=r(_p,"LI",{});var Xe=i(P);ze=s(Xe,"In addition to "),ke=r(Xe,"EM",{});var yp=i(ke);ge=s(yp,"input_ids"),yp.forEach(t),Ee=s(Xe,", "),Qn=r(Xe,"A",{href:!0});var bp=i(Qn);Wr=s(bp,"forward()"),bp.forEach(t),Hr=s(Xe," also expects the input "),Is=r(Xe,"CODE",{});var kp=i(Is);Rr=s(kp,"bbox"),kp.forEach(t),Kr=s(Xe,`, which are
the bounding boxes (i.e. 2D-positions) of the input tokens. These can be obtained using an external OCR engine such
as Google\u2019s `),xo=r(Xe,"A",{href:!0,rel:!0});var Lp=i(xo);Vr=s(Lp,"Tesseract"),Lp.forEach(t),Xr=s(Xe," (there\u2019s a "),jo=r(Xe,"A",{href:!0,rel:!0});var vp=i(jo);Yr=s(vp,"Python wrapper"),vp.forEach(t),Zr=s(Xe,` available). Each bounding box should be in (x0, y0, x1, y1) format, where
(x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1) represents the
position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on a 0-1000
scale. To normalize, you can use the following function:`),Xe.forEach(t),_p.forEach(t),Da=p(o),v(Fo.$$.fragment,o),Aa=p(o),ot=r(o,"P",{});var ws=i(ot);Gr=s(ws,"Here, "),Os=r(ws,"CODE",{});var wp=i(Os);Jr=s(wp,"width"),wp.forEach(t),Qr=s(ws," and "),Ds=r(ws,"CODE",{});var Tp=i(Ds);ei=s(Tp,"height"),Tp.forEach(t),ti=s(ws,` correspond to the width and height of the original document in which the token
occurs. Those can be obtained using the Python Image Library (PIL) library for example, as follows:`),ws.forEach(t),Ua=p(o),v(zo.$$.fragment,o),Ba=p(o),es=r(o,"UL",{});var Mp=i(es);et=r(Mp,"LI",{});var ho=i(et);oi=s(ho,"For a demo which shows how to fine-tune "),ts=r(ho,"A",{href:!0});var $p=i(ts);ni=s($p,"LayoutLMForTokenClassification"),$p.forEach(t),si=s(ho," on the "),Eo=r(ho,"A",{href:!0,rel:!0});var xp=i(Eo);ai=s(xp,"FUNSD dataset"),xp.forEach(t),ri=s(ho," (a collection of annotated forms), see "),qo=r(ho,"A",{href:!0,rel:!0});var jp=i(qo);ii=s(jp,"this notebook"),jp.forEach(t),li=s(ho,`.
It includes an inference part, which shows how to use Google\u2019s Tesseract on a new document.`),ho.forEach(t),Mp.forEach(t),Wa=p(o),nt=r(o,"P",{});var Ts=i(nt);di=s(Ts,"This model was contributed by "),Co=r(Ts,"A",{href:!0,rel:!0});var Fp=i(Co);ci=s(Fp,"liminghao1630"),Fp.forEach(t),pi=s(Ts,`. The original code can be found
`),Po=r(Ts,"A",{href:!0,rel:!0});var zp=i(Po);ui=s(zp,"here"),zp.forEach(t),hi=s(Ts,"."),Ts.forEach(t),Ha=p(o),rt=r(o,"H2",{class:!0});var hr=i(rt);qt=r(hr,"A",{id:!0,class:!0,href:!0});var Ep=i(qt);As=r(Ep,"SPAN",{});var qp=i(As);v(No.$$.fragment,qp),qp.forEach(t),Ep.forEach(t),mi=p(hr),Us=r(hr,"SPAN",{});var Cp=i(Us);fi=s(Cp,"LayoutLMConfig"),Cp.forEach(t),hr.forEach(t),Ra=p(o),Pe=r(o,"DIV",{class:!0});var mo=i(Pe);v(So.$$.fragment,mo),gi=p(mo),it=r(mo,"P",{});var Ms=i(it);_i=s(Ms,"This is the configuration class to store the configuration of a "),os=r(Ms,"A",{href:!0});var Pp=i(os);yi=s(Pp,"LayoutLMModel"),Pp.forEach(t),bi=s(Ms,`. It is used to instantiate a
LayoutLM model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the LayoutLM
`),Io=r(Ms,"A",{href:!0,rel:!0});var Np=i(Io);ki=s(Np,"microsoft/layoutlm-base-uncased"),Np.forEach(t),Li=s(Ms," architecture."),Ms.forEach(t),vi=p(mo),lt=r(mo,"P",{});var $s=i(lt);wi=s($s,"Configuration objects inherit from "),ns=r($s,"A",{href:!0});var Sp=i(ns);Ti=s(Sp,"BertConfig"),Sp.forEach(t),Mi=s($s,` and can be used to control the model outputs. Read the
documentation from `),ss=r($s,"A",{href:!0});var Ip=i(ss);$i=s(Ip,"BertConfig"),Ip.forEach(t),xi=s($s," for more information."),$s.forEach(t),ji=p(mo),v(Ct.$$.fragment,mo),mo.forEach(t),Ka=p(o),dt=r(o,"H2",{class:!0});var mr=i(dt);Pt=r(mr,"A",{id:!0,class:!0,href:!0});var Op=i(Pt);Bs=r(Op,"SPAN",{});var Dp=i(Bs);v(Oo.$$.fragment,Dp),Dp.forEach(t),Op.forEach(t),Fi=p(mr),Ws=r(mr,"SPAN",{});var Ap=i(Ws);zi=s(Ap,"LayoutLMTokenizer"),Ap.forEach(t),mr.forEach(t),Va=p(o),Ne=r(o,"DIV",{class:!0});var fo=i(Ne);v(Do.$$.fragment,fo),Ei=p(fo),Hs=r(fo,"P",{});var Up=i(Hs);qi=s(Up,"Constructs a LayoutLM tokenizer."),Up.forEach(t),Ci=p(fo),Nt=r(fo,"P",{});var Ia=i(Nt);as=r(Ia,"A",{href:!0});var Bp=i(as);Pi=s(Bp,"LayoutLMTokenizer"),Bp.forEach(t),Ni=s(Ia," is identical to "),rs=r(Ia,"A",{href:!0});var Wp=i(rs);Si=s(Wp,"BertTokenizer"),Wp.forEach(t),Ii=s(Ia,` and runs end-to-end tokenization: punctuation splitting +
wordpiece.`),Ia.forEach(t),Oi=p(fo),Ao=r(fo,"P",{});var fr=i(Ao);Di=s(fr,"Refer to superclass "),is=r(fr,"A",{href:!0});var Hp=i(is);Ai=s(Hp,"BertTokenizer"),Hp.forEach(t),Ui=s(fr," for usage examples and documentation concerning parameters."),fr.forEach(t),fo.forEach(t),Xa=p(o),ct=r(o,"H2",{class:!0});var gr=i(ct);St=r(gr,"A",{id:!0,class:!0,href:!0});var Rp=i(St);Rs=r(Rp,"SPAN",{});var Kp=i(Rs);v(Uo.$$.fragment,Kp),Kp.forEach(t),Rp.forEach(t),Bi=p(gr),Ks=r(gr,"SPAN",{});var Vp=i(Ks);Wi=s(Vp,"LayoutLMTokenizerFast"),Vp.forEach(t),gr.forEach(t),Ya=p(o),Se=r(o,"DIV",{class:!0});var go=i(Se);v(Bo.$$.fragment,go),Hi=p(go),Vs=r(go,"P",{});var Xp=i(Vs);Ri=s(Xp,"Constructs a \u201CFast\u201D LayoutLMTokenizer."),Xp.forEach(t),Ki=p(go),It=r(go,"P",{});var Oa=i(It);ls=r(Oa,"A",{href:!0});var Yp=i(ls);Vi=s(Yp,"LayoutLMTokenizerFast"),Yp.forEach(t),Xi=s(Oa," is identical to "),ds=r(Oa,"A",{href:!0});var Zp=i(ds);Yi=s(Zp,"BertTokenizerFast"),Zp.forEach(t),Zi=s(Oa,` and runs end-to-end tokenization: punctuation
splitting + wordpiece.`),Oa.forEach(t),Gi=p(go),Wo=r(go,"P",{});var _r=i(Wo);Ji=s(_r,"Refer to superclass "),cs=r(_r,"A",{href:!0});var Gp=i(cs);Qi=s(Gp,"BertTokenizerFast"),Gp.forEach(t),el=s(_r," for usage examples and documentation concerning parameters."),_r.forEach(t),go.forEach(t),Za=p(o),pt=r(o,"H2",{class:!0});var yr=i(pt);Ot=r(yr,"A",{id:!0,class:!0,href:!0});var Jp=i(Ot);Xs=r(Jp,"SPAN",{});var Qp=i(Xs);v(Ho.$$.fragment,Qp),Qp.forEach(t),Jp.forEach(t),tl=p(yr),Ys=r(yr,"SPAN",{});var eu=i(Ys);ol=s(eu,"LayoutLMModel"),eu.forEach(t),yr.forEach(t),Ga=p(o),Ie=r(o,"DIV",{class:!0});var _o=i(Ie);v(Ro.$$.fragment,_o),nl=p(_o),Ko=r(_o,"P",{});var br=i(Ko);sl=s(br,`The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top.
The LayoutLM model was proposed in `),Vo=r(br,"A",{href:!0,rel:!0});var tu=i(Vo);al=s(tu,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),tu.forEach(t),rl=s(br,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),br.forEach(t),il=p(_o),Xo=r(_o,"P",{});var kr=i(Xo);ll=s(kr,"This model is a PyTorch "),Yo=r(kr,"A",{href:!0,rel:!0});var ou=i(Yo);dl=s(ou,"torch.nn.Module"),ou.forEach(t),cl=s(kr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),kr.forEach(t),pl=p(_o),Ae=r(_o,"DIV",{class:!0});var yo=i(Ae);v(Zo.$$.fragment,yo),ul=p(yo),ut=r(yo,"P",{});var xs=i(ut);hl=s(xs,"The "),ps=r(xs,"A",{href:!0});var nu=i(ps);ml=s(nu,"LayoutLMModel"),nu.forEach(t),fl=s(xs," forward method, overrides the "),Zs=r(xs,"CODE",{});var su=i(Zs);gl=s(su,"__call__"),su.forEach(t),_l=s(xs," special method."),xs.forEach(t),yl=p(yo),v(Dt.$$.fragment,yo),bl=p(yo),v(At.$$.fragment,yo),yo.forEach(t),_o.forEach(t),Ja=p(o),ht=r(o,"H2",{class:!0});var Lr=i(ht);Ut=r(Lr,"A",{id:!0,class:!0,href:!0});var au=i(Ut);Gs=r(au,"SPAN",{});var ru=i(Gs);v(Go.$$.fragment,ru),ru.forEach(t),au.forEach(t),kl=p(Lr),Js=r(Lr,"SPAN",{});var iu=i(Js);Ll=s(iu,"LayoutLMForMaskedLM"),iu.forEach(t),Lr.forEach(t),Qa=p(o),Oe=r(o,"DIV",{class:!0});var bo=i(Oe);v(Jo.$$.fragment,bo),vl=p(bo),mt=r(bo,"P",{});var js=i(mt);wl=s(js,"LayoutLM Model with a "),Qs=r(js,"CODE",{});var lu=i(Qs);Tl=s(lu,"language modeling"),lu.forEach(t),Ml=s(js,` head on top.
The LayoutLM model was proposed in `),Qo=r(js,"A",{href:!0,rel:!0});var du=i(Qo);$l=s(du,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),du.forEach(t),xl=s(js,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),js.forEach(t),jl=p(bo),en=r(bo,"P",{});var vr=i(en);Fl=s(vr,"This model is a PyTorch "),tn=r(vr,"A",{href:!0,rel:!0});var cu=i(tn);zl=s(cu,"torch.nn.Module"),cu.forEach(t),El=s(vr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),vr.forEach(t),ql=p(bo),Ue=r(bo,"DIV",{class:!0});var ko=i(Ue);v(on.$$.fragment,ko),Cl=p(ko),ft=r(ko,"P",{});var Fs=i(ft);Pl=s(Fs,"The "),us=r(Fs,"A",{href:!0});var pu=i(us);Nl=s(pu,"LayoutLMForMaskedLM"),pu.forEach(t),Sl=s(Fs," forward method, overrides the "),ea=r(Fs,"CODE",{});var uu=i(ea);Il=s(uu,"__call__"),uu.forEach(t),Ol=s(Fs," special method."),Fs.forEach(t),Dl=p(ko),v(Bt.$$.fragment,ko),Al=p(ko),v(Wt.$$.fragment,ko),ko.forEach(t),bo.forEach(t),er=p(o),gt=r(o,"H2",{class:!0});var wr=i(gt);Ht=r(wr,"A",{id:!0,class:!0,href:!0});var hu=i(Ht);ta=r(hu,"SPAN",{});var mu=i(ta);v(nn.$$.fragment,mu),mu.forEach(t),hu.forEach(t),Ul=p(wr),oa=r(wr,"SPAN",{});var fu=i(oa);Bl=s(fu,"LayoutLMForSequenceClassification"),fu.forEach(t),wr.forEach(t),tr=p(o),qe=r(o,"DIV",{class:!0});var st=i(qe);v(sn.$$.fragment,st),Wl=p(st),an=r(st,"P",{});var Tr=i(an);Hl=s(Tr,`LayoutLM Model with a sequence classification head on top (a linear layer on top of the pooled output) e.g. for
document image classification tasks such as the `),rn=r(Tr,"A",{href:!0,rel:!0});var gu=i(rn);Rl=s(gu,"RVL-CDIP"),gu.forEach(t),Kl=s(Tr," dataset."),Tr.forEach(t),Vl=p(st),ln=r(st,"P",{});var Mr=i(ln);Xl=s(Mr,"The LayoutLM model was proposed in "),dn=r(Mr,"A",{href:!0,rel:!0});var _u=i(dn);Yl=s(_u,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),_u.forEach(t),Zl=s(Mr,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),Mr.forEach(t),Gl=p(st),cn=r(st,"P",{});var $r=i(cn);Jl=s($r,"This model is a PyTorch "),pn=r($r,"A",{href:!0,rel:!0});var yu=i(pn);Ql=s(yu,"torch.nn.Module"),yu.forEach(t),ed=s($r,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),$r.forEach(t),td=p(st),Be=r(st,"DIV",{class:!0});var Lo=i(Be);v(un.$$.fragment,Lo),od=p(Lo),_t=r(Lo,"P",{});var zs=i(_t);nd=s(zs,"The "),hs=r(zs,"A",{href:!0});var bu=i(hs);sd=s(bu,"LayoutLMForSequenceClassification"),bu.forEach(t),ad=s(zs," forward method, overrides the "),na=r(zs,"CODE",{});var ku=i(na);rd=s(ku,"__call__"),ku.forEach(t),id=s(zs," special method."),zs.forEach(t),ld=p(Lo),v(Rt.$$.fragment,Lo),dd=p(Lo),v(Kt.$$.fragment,Lo),Lo.forEach(t),st.forEach(t),or=p(o),yt=r(o,"H2",{class:!0});var xr=i(yt);Vt=r(xr,"A",{id:!0,class:!0,href:!0});var Lu=i(Vt);sa=r(Lu,"SPAN",{});var vu=i(sa);v(hn.$$.fragment,vu),vu.forEach(t),Lu.forEach(t),cd=p(xr),aa=r(xr,"SPAN",{});var wu=i(aa);pd=s(wu,"LayoutLMForTokenClassification"),wu.forEach(t),xr.forEach(t),nr=p(o),Ce=r(o,"DIV",{class:!0});var at=i(Ce);v(mn.$$.fragment,at),ud=p(at),bt=r(at,"P",{});var Es=i(bt);hd=s(Es,`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
sequence labeling (information extraction) tasks such as the `),fn=r(Es,"A",{href:!0,rel:!0});var Tu=i(fn);md=s(Tu,"FUNSD"),Tu.forEach(t),fd=s(Es,`
dataset and the `),gn=r(Es,"A",{href:!0,rel:!0});var Mu=i(gn);gd=s(Mu,"SROIE"),Mu.forEach(t),_d=s(Es," dataset."),Es.forEach(t),yd=p(at),_n=r(at,"P",{});var jr=i(_n);bd=s(jr,"The LayoutLM model was proposed in "),yn=r(jr,"A",{href:!0,rel:!0});var $u=i(yn);kd=s($u,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),$u.forEach(t),Ld=s(jr,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),jr.forEach(t),vd=p(at),bn=r(at,"P",{});var Fr=i(bn);wd=s(Fr,"This model is a PyTorch "),kn=r(Fr,"A",{href:!0,rel:!0});var xu=i(kn);Td=s(xu,"torch.nn.Module"),xu.forEach(t),Md=s(Fr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Fr.forEach(t),$d=p(at),We=r(at,"DIV",{class:!0});var vo=i(We);v(Ln.$$.fragment,vo),xd=p(vo),kt=r(vo,"P",{});var qs=i(kt);jd=s(qs,"The "),ms=r(qs,"A",{href:!0});var ju=i(ms);Fd=s(ju,"LayoutLMForTokenClassification"),ju.forEach(t),zd=s(qs," forward method, overrides the "),ra=r(qs,"CODE",{});var Fu=i(ra);Ed=s(Fu,"__call__"),Fu.forEach(t),qd=s(qs," special method."),qs.forEach(t),Cd=p(vo),v(Xt.$$.fragment,vo),Pd=p(vo),v(Yt.$$.fragment,vo),vo.forEach(t),at.forEach(t),sr=p(o),Lt=r(o,"H2",{class:!0});var zr=i(Lt);Zt=r(zr,"A",{id:!0,class:!0,href:!0});var zu=i(Zt);ia=r(zu,"SPAN",{});var Eu=i(ia);v(vn.$$.fragment,Eu),Eu.forEach(t),zu.forEach(t),Nd=p(zr),la=r(zr,"SPAN",{});var qu=i(la);Sd=s(qu,"TFLayoutLMModel"),qu.forEach(t),zr.forEach(t),ar=p(o),Le=r(o,"DIV",{class:!0});var Ye=i(Le);v(wn.$$.fragment,Ye),Id=p(Ye),da=r(Ye,"P",{});var Cu=i(da);Od=s(Cu,"The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top."),Cu.forEach(t),Dd=p(Ye),Tn=r(Ye,"P",{});var Er=i(Tn);Ad=s(Er,"This model inherits from "),fs=r(Er,"A",{href:!0});var Pu=i(fs);Ud=s(Pu,"TFPreTrainedModel"),Pu.forEach(t),Bd=s(Er,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Er.forEach(t),Wd=p(Ye),Mn=r(Ye,"P",{});var qr=i(Mn);Hd=s(qr,"This model is also a "),$n=r(qr,"A",{href:!0,rel:!0});var Nu=i($n);Rd=s(Nu,"tf.keras.Model"),Nu.forEach(t),Kd=s(qr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qr.forEach(t),Vd=p(Ye),v(Gt.$$.fragment,Ye),Xd=p(Ye),He=r(Ye,"DIV",{class:!0});var wo=i(He);v(xn.$$.fragment,wo),Yd=p(wo),vt=r(wo,"P",{});var Cs=i(vt);Zd=s(Cs,"The "),gs=r(Cs,"A",{href:!0});var Su=i(gs);Gd=s(Su,"TFLayoutLMModel"),Su.forEach(t),Jd=s(Cs," forward method, overrides the "),ca=r(Cs,"CODE",{});var Iu=i(ca);Qd=s(Iu,"__call__"),Iu.forEach(t),ec=s(Cs," special method."),Cs.forEach(t),tc=p(wo),v(Jt.$$.fragment,wo),oc=p(wo),v(Qt.$$.fragment,wo),wo.forEach(t),Ye.forEach(t),rr=p(o),wt=r(o,"H2",{class:!0});var Cr=i(wt);eo=r(Cr,"A",{id:!0,class:!0,href:!0});var Ou=i(eo);pa=r(Ou,"SPAN",{});var Du=i(pa);v(jn.$$.fragment,Du),Du.forEach(t),Ou.forEach(t),nc=p(Cr),ua=r(Cr,"SPAN",{});var Au=i(ua);sc=s(Au,"TFLayoutLMForMaskedLM"),Au.forEach(t),Cr.forEach(t),ir=p(o),ve=r(o,"DIV",{class:!0});var Ze=i(ve);v(Fn.$$.fragment,Ze),ac=p(Ze),zn=r(Ze,"P",{});var Pr=i(zn);rc=s(Pr,"LayoutLM Model with a "),ha=r(Pr,"CODE",{});var Uu=i(ha);ic=s(Uu,"language modeling"),Uu.forEach(t),lc=s(Pr," head on top."),Pr.forEach(t),dc=p(Ze),En=r(Ze,"P",{});var Nr=i(En);cc=s(Nr,"This model inherits from "),_s=r(Nr,"A",{href:!0});var Bu=i(_s);pc=s(Bu,"TFPreTrainedModel"),Bu.forEach(t),uc=s(Nr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nr.forEach(t),hc=p(Ze),qn=r(Ze,"P",{});var Sr=i(qn);mc=s(Sr,"This model is also a "),Cn=r(Sr,"A",{href:!0,rel:!0});var Wu=i(Cn);fc=s(Wu,"tf.keras.Model"),Wu.forEach(t),gc=s(Sr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sr.forEach(t),_c=p(Ze),v(to.$$.fragment,Ze),yc=p(Ze),Re=r(Ze,"DIV",{class:!0});var To=i(Re);v(Pn.$$.fragment,To),bc=p(To),Tt=r(To,"P",{});var Ps=i(Tt);kc=s(Ps,"The "),ys=r(Ps,"A",{href:!0});var Hu=i(ys);Lc=s(Hu,"TFLayoutLMForMaskedLM"),Hu.forEach(t),vc=s(Ps," forward method, overrides the "),ma=r(Ps,"CODE",{});var Ru=i(ma);wc=s(Ru,"__call__"),Ru.forEach(t),Tc=s(Ps," special method."),Ps.forEach(t),Mc=p(To),v(oo.$$.fragment,To),$c=p(To),v(no.$$.fragment,To),To.forEach(t),Ze.forEach(t),lr=p(o),Mt=r(o,"H2",{class:!0});var Ir=i(Mt);so=r(Ir,"A",{id:!0,class:!0,href:!0});var Ku=i(so);fa=r(Ku,"SPAN",{});var Vu=i(fa);v(Nn.$$.fragment,Vu),Vu.forEach(t),Ku.forEach(t),xc=p(Ir),ga=r(Ir,"SPAN",{});var Xu=i(ga);jc=s(Xu,"TFLayoutLMForSequenceClassification"),Xu.forEach(t),Ir.forEach(t),dr=p(o),we=r(o,"DIV",{class:!0});var Ge=i(we);v(Sn.$$.fragment,Ge),Fc=p(Ge),_a=r(Ge,"P",{});var Yu=i(_a);zc=s(Yu,`LayoutLM Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Yu.forEach(t),Ec=p(Ge),In=r(Ge,"P",{});var Or=i(In);qc=s(Or,"This model inherits from "),bs=r(Or,"A",{href:!0});var Zu=i(bs);Cc=s(Zu,"TFPreTrainedModel"),Zu.forEach(t),Pc=s(Or,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Or.forEach(t),Nc=p(Ge),On=r(Ge,"P",{});var Dr=i(On);Sc=s(Dr,"This model is also a "),Dn=r(Dr,"A",{href:!0,rel:!0});var Gu=i(Dn);Ic=s(Gu,"tf.keras.Model"),Gu.forEach(t),Oc=s(Dr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dr.forEach(t),Dc=p(Ge),v(ao.$$.fragment,Ge),Ac=p(Ge),Ke=r(Ge,"DIV",{class:!0});var Mo=i(Ke);v(An.$$.fragment,Mo),Uc=p(Mo),$t=r(Mo,"P",{});var Ns=i($t);Bc=s(Ns,"The "),ks=r(Ns,"A",{href:!0});var Ju=i(ks);Wc=s(Ju,"TFLayoutLMForSequenceClassification"),Ju.forEach(t),Hc=s(Ns," forward method, overrides the "),ya=r(Ns,"CODE",{});var Qu=i(ya);Rc=s(Qu,"__call__"),Qu.forEach(t),Kc=s(Ns," special method."),Ns.forEach(t),Vc=p(Mo),v(ro.$$.fragment,Mo),Xc=p(Mo),v(io.$$.fragment,Mo),Mo.forEach(t),Ge.forEach(t),cr=p(o),xt=r(o,"H2",{class:!0});var Ar=i(xt);lo=r(Ar,"A",{id:!0,class:!0,href:!0});var eh=i(lo);ba=r(eh,"SPAN",{});var th=i(ba);v(Un.$$.fragment,th),th.forEach(t),eh.forEach(t),Yc=p(Ar),ka=r(Ar,"SPAN",{});var oh=i(ka);Zc=s(oh,"TFLayoutLMForTokenClassification"),oh.forEach(t),Ar.forEach(t),pr=p(o),Te=r(o,"DIV",{class:!0});var Je=i(Te);v(Bn.$$.fragment,Je),Gc=p(Je),La=r(Je,"P",{});var nh=i(La);Jc=s(nh,`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),nh.forEach(t),Qc=p(Je),Wn=r(Je,"P",{});var Ur=i(Wn);ep=s(Ur,"This model inherits from "),Ls=r(Ur,"A",{href:!0});var sh=i(Ls);tp=s(sh,"TFPreTrainedModel"),sh.forEach(t),op=s(Ur,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ur.forEach(t),np=p(Je),Hn=r(Je,"P",{});var Br=i(Hn);sp=s(Br,"This model is also a "),Rn=r(Br,"A",{href:!0,rel:!0});var ah=i(Rn);ap=s(ah,"tf.keras.Model"),ah.forEach(t),rp=s(Br,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Br.forEach(t),ip=p(Je),v(co.$$.fragment,Je),lp=p(Je),Ve=r(Je,"DIV",{class:!0});var $o=i(Ve);v(Kn.$$.fragment,$o),dp=p($o),jt=r($o,"P",{});var Ss=i(jt);cp=s(Ss,"The "),vs=r(Ss,"A",{href:!0});var rh=i(vs);pp=s(rh,"TFLayoutLMForTokenClassification"),rh.forEach(t),up=s(Ss," forward method, overrides the "),va=r(Ss,"CODE",{});var ih=i(va);hp=s(ih,"__call__"),ih.forEach(t),mp=s(Ss," special method."),Ss.forEach(t),fp=p($o),v(po.$$.fragment,$o),gp=p($o),v(uo.$$.fragment,$o),$o.forEach(t),Je.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(Nh)),u(h,"id","layoutlm"),u(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(h,"href","#layoutlm"),u(_,"class","relative group"),u(z,"id","Overview"),u(Z,"id","overview"),u(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Z,"href","#overview"),u(O,"class","relative group"),u(F,"href","https://arxiv.org/abs/1912.13318"),u(F,"rel","nofollow"),u(te,"href","https://guillaumejaume.github.io/FUNSD/"),u(te,"rel","nofollow"),u(oe,"href","https://rrc.cvc.uab.es/?ch=13"),u(oe,"rel","nofollow"),u(B,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),u(B,"rel","nofollow"),u(Qn,"href","/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.LayoutLMModel.forward"),u(xo,"href","https://github.com/tesseract-ocr/tesseract"),u(xo,"rel","nofollow"),u(jo,"href","https://pypi.org/project/pytesseract/"),u(jo,"rel","nofollow"),u(ts,"href","/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.LayoutLMForTokenClassification"),u(Eo,"href","https://guillaumejaume.github.io/FUNSD/"),u(Eo,"rel","nofollow"),u(qo,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/LayoutLM/Fine_tuning_LayoutLMForTokenClassification_on_FUNSD.ipynb"),u(qo,"rel","nofollow"),u(Co,"href","https://huggingface.co/liminghao1630"),u(Co,"rel","nofollow"),u(Po,"href","https://github.com/microsoft/unilm/tree/master/layoutlm"),u(Po,"rel","nofollow"),u(qt,"id","transformers.LayoutLMConfig"),u(qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(qt,"href","#transformers.LayoutLMConfig"),u(rt,"class","relative group"),u(os,"href","/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.LayoutLMModel"),u(Io,"href","https://huggingface.co/microsoft/layoutlm-base-uncased"),u(Io,"rel","nofollow"),u(ns,"href","/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig"),u(ss,"href","/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertConfig"),u(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pt,"id","transformers.LayoutLMTokenizer"),u(Pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Pt,"href","#transformers.LayoutLMTokenizer"),u(dt,"class","relative group"),u(as,"href","/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.LayoutLMTokenizer"),u(rs,"href","/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizer"),u(is,"href","/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizer"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(St,"id","transformers.LayoutLMTokenizerFast"),u(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(St,"href","#transformers.LayoutLMTokenizerFast"),u(ct,"class","relative group"),u(ls,"href","/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.LayoutLMTokenizerFast"),u(ds,"href","/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizerFast"),u(cs,"href","/docs/transformers/v4.20.1/en/model_doc/bert#transformers.BertTokenizerFast"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ot,"id","transformers.LayoutLMModel"),u(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ot,"href","#transformers.LayoutLMModel"),u(pt,"class","relative group"),u(Vo,"href","https://arxiv.org/abs/1912.13318"),u(Vo,"rel","nofollow"),u(Yo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Yo,"rel","nofollow"),u(ps,"href","/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.LayoutLMModel"),u(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ut,"id","transformers.LayoutLMForMaskedLM"),u(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ut,"href","#transformers.LayoutLMForMaskedLM"),u(ht,"class","relative group"),u(Qo,"href","https://arxiv.org/abs/1912.13318"),u(Qo,"rel","nofollow"),u(tn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(tn,"rel","nofollow"),u(us,"href","/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.LayoutLMForMaskedLM"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ht,"id","transformers.LayoutLMForSequenceClassification"),u(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ht,"href","#transformers.LayoutLMForSequenceClassification"),u(gt,"class","relative group"),u(rn,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),u(rn,"rel","nofollow"),u(dn,"href","https://arxiv.org/abs/1912.13318"),u(dn,"rel","nofollow"),u(pn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(pn,"rel","nofollow"),u(hs,"href","/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.LayoutLMForSequenceClassification"),u(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vt,"id","transformers.LayoutLMForTokenClassification"),u(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Vt,"href","#transformers.LayoutLMForTokenClassification"),u(yt,"class","relative group"),u(fn,"href","https://guillaumejaume.github.io/FUNSD/"),u(fn,"rel","nofollow"),u(gn,"href","https://rrc.cvc.uab.es/?ch=13"),u(gn,"rel","nofollow"),u(yn,"href","https://arxiv.org/abs/1912.13318"),u(yn,"rel","nofollow"),u(kn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(kn,"rel","nofollow"),u(ms,"href","/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.LayoutLMForTokenClassification"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Zt,"id","transformers.TFLayoutLMModel"),u(Zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Zt,"href","#transformers.TFLayoutLMModel"),u(Lt,"class","relative group"),u(fs,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel"),u($n,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u($n,"rel","nofollow"),u(gs,"href","/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.TFLayoutLMModel"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(eo,"id","transformers.TFLayoutLMForMaskedLM"),u(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(eo,"href","#transformers.TFLayoutLMForMaskedLM"),u(wt,"class","relative group"),u(_s,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel"),u(Cn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Cn,"rel","nofollow"),u(ys,"href","/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.TFLayoutLMForMaskedLM"),u(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(so,"id","transformers.TFLayoutLMForSequenceClassification"),u(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(so,"href","#transformers.TFLayoutLMForSequenceClassification"),u(Mt,"class","relative group"),u(bs,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel"),u(Dn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Dn,"rel","nofollow"),u(ks,"href","/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.TFLayoutLMForSequenceClassification"),u(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lo,"id","transformers.TFLayoutLMForTokenClassification"),u(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(lo,"href","#transformers.TFLayoutLMForTokenClassification"),u(xt,"class","relative group"),u(Ls,"href","/docs/transformers/v4.20.1/en/main_classes/model#transformers.TFPreTrainedModel"),u(Rn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Rn,"rel","nofollow"),u(vs,"href","/docs/transformers/v4.20.1/en/model_doc/layoutlm#transformers.TFLayoutLMForTokenClassification"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,y){e(document.head,d),f(o,k,y),f(o,_,y),e(_,h),e(h,b),w(l,b,null),e(_,m),e(_,j),e(j,re),f(o,Y,y),f(o,z,y),f(o,ae,y),f(o,O,y),e(O,Z),e(Z,ne),w(A,ne,null),e(O,ie),e(O,se),e(se,J),f(o,D,y),f(o,G,y),e(G,Q),e(G,F),e(F,q),e(G,le),f(o,W,y),f(o,V,y),e(V,ee),e(ee,H),e(ee,te),e(te,de),e(ee,C),e(V,ce),e(V,U),e(U,pe),e(U,oe),e(oe,R),e(U,ue),e(V,he),e(V,N),e(N,me),e(N,B),e(B,fe),e(N,g),f(o,x,y),f(o,X,y),e(X,je),f(o,Me,y),f(o,S,y),e(S,be),e(be,Fe),f(o,$e,y),f(o,I,y),e(I,K),f(o,xe,y),f(o,ye,y),e(ye,P),e(P,ze),e(P,ke),e(ke,ge),e(P,Ee),e(P,Qn),e(Qn,Wr),e(P,Hr),e(P,Is),e(Is,Rr),e(P,Kr),e(P,xo),e(xo,Vr),e(P,Xr),e(P,jo),e(jo,Yr),e(P,Zr),f(o,Da,y),w(Fo,o,y),f(o,Aa,y),f(o,ot,y),e(ot,Gr),e(ot,Os),e(Os,Jr),e(ot,Qr),e(ot,Ds),e(Ds,ei),e(ot,ti),f(o,Ua,y),w(zo,o,y),f(o,Ba,y),f(o,es,y),e(es,et),e(et,oi),e(et,ts),e(ts,ni),e(et,si),e(et,Eo),e(Eo,ai),e(et,ri),e(et,qo),e(qo,ii),e(et,li),f(o,Wa,y),f(o,nt,y),e(nt,di),e(nt,Co),e(Co,ci),e(nt,pi),e(nt,Po),e(Po,ui),e(nt,hi),f(o,Ha,y),f(o,rt,y),e(rt,qt),e(qt,As),w(No,As,null),e(rt,mi),e(rt,Us),e(Us,fi),f(o,Ra,y),f(o,Pe,y),w(So,Pe,null),e(Pe,gi),e(Pe,it),e(it,_i),e(it,os),e(os,yi),e(it,bi),e(it,Io),e(Io,ki),e(it,Li),e(Pe,vi),e(Pe,lt),e(lt,wi),e(lt,ns),e(ns,Ti),e(lt,Mi),e(lt,ss),e(ss,$i),e(lt,xi),e(Pe,ji),w(Ct,Pe,null),f(o,Ka,y),f(o,dt,y),e(dt,Pt),e(Pt,Bs),w(Oo,Bs,null),e(dt,Fi),e(dt,Ws),e(Ws,zi),f(o,Va,y),f(o,Ne,y),w(Do,Ne,null),e(Ne,Ei),e(Ne,Hs),e(Hs,qi),e(Ne,Ci),e(Ne,Nt),e(Nt,as),e(as,Pi),e(Nt,Ni),e(Nt,rs),e(rs,Si),e(Nt,Ii),e(Ne,Oi),e(Ne,Ao),e(Ao,Di),e(Ao,is),e(is,Ai),e(Ao,Ui),f(o,Xa,y),f(o,ct,y),e(ct,St),e(St,Rs),w(Uo,Rs,null),e(ct,Bi),e(ct,Ks),e(Ks,Wi),f(o,Ya,y),f(o,Se,y),w(Bo,Se,null),e(Se,Hi),e(Se,Vs),e(Vs,Ri),e(Se,Ki),e(Se,It),e(It,ls),e(ls,Vi),e(It,Xi),e(It,ds),e(ds,Yi),e(It,Zi),e(Se,Gi),e(Se,Wo),e(Wo,Ji),e(Wo,cs),e(cs,Qi),e(Wo,el),f(o,Za,y),f(o,pt,y),e(pt,Ot),e(Ot,Xs),w(Ho,Xs,null),e(pt,tl),e(pt,Ys),e(Ys,ol),f(o,Ga,y),f(o,Ie,y),w(Ro,Ie,null),e(Ie,nl),e(Ie,Ko),e(Ko,sl),e(Ko,Vo),e(Vo,al),e(Ko,rl),e(Ie,il),e(Ie,Xo),e(Xo,ll),e(Xo,Yo),e(Yo,dl),e(Xo,cl),e(Ie,pl),e(Ie,Ae),w(Zo,Ae,null),e(Ae,ul),e(Ae,ut),e(ut,hl),e(ut,ps),e(ps,ml),e(ut,fl),e(ut,Zs),e(Zs,gl),e(ut,_l),e(Ae,yl),w(Dt,Ae,null),e(Ae,bl),w(At,Ae,null),f(o,Ja,y),f(o,ht,y),e(ht,Ut),e(Ut,Gs),w(Go,Gs,null),e(ht,kl),e(ht,Js),e(Js,Ll),f(o,Qa,y),f(o,Oe,y),w(Jo,Oe,null),e(Oe,vl),e(Oe,mt),e(mt,wl),e(mt,Qs),e(Qs,Tl),e(mt,Ml),e(mt,Qo),e(Qo,$l),e(mt,xl),e(Oe,jl),e(Oe,en),e(en,Fl),e(en,tn),e(tn,zl),e(en,El),e(Oe,ql),e(Oe,Ue),w(on,Ue,null),e(Ue,Cl),e(Ue,ft),e(ft,Pl),e(ft,us),e(us,Nl),e(ft,Sl),e(ft,ea),e(ea,Il),e(ft,Ol),e(Ue,Dl),w(Bt,Ue,null),e(Ue,Al),w(Wt,Ue,null),f(o,er,y),f(o,gt,y),e(gt,Ht),e(Ht,ta),w(nn,ta,null),e(gt,Ul),e(gt,oa),e(oa,Bl),f(o,tr,y),f(o,qe,y),w(sn,qe,null),e(qe,Wl),e(qe,an),e(an,Hl),e(an,rn),e(rn,Rl),e(an,Kl),e(qe,Vl),e(qe,ln),e(ln,Xl),e(ln,dn),e(dn,Yl),e(ln,Zl),e(qe,Gl),e(qe,cn),e(cn,Jl),e(cn,pn),e(pn,Ql),e(cn,ed),e(qe,td),e(qe,Be),w(un,Be,null),e(Be,od),e(Be,_t),e(_t,nd),e(_t,hs),e(hs,sd),e(_t,ad),e(_t,na),e(na,rd),e(_t,id),e(Be,ld),w(Rt,Be,null),e(Be,dd),w(Kt,Be,null),f(o,or,y),f(o,yt,y),e(yt,Vt),e(Vt,sa),w(hn,sa,null),e(yt,cd),e(yt,aa),e(aa,pd),f(o,nr,y),f(o,Ce,y),w(mn,Ce,null),e(Ce,ud),e(Ce,bt),e(bt,hd),e(bt,fn),e(fn,md),e(bt,fd),e(bt,gn),e(gn,gd),e(bt,_d),e(Ce,yd),e(Ce,_n),e(_n,bd),e(_n,yn),e(yn,kd),e(_n,Ld),e(Ce,vd),e(Ce,bn),e(bn,wd),e(bn,kn),e(kn,Td),e(bn,Md),e(Ce,$d),e(Ce,We),w(Ln,We,null),e(We,xd),e(We,kt),e(kt,jd),e(kt,ms),e(ms,Fd),e(kt,zd),e(kt,ra),e(ra,Ed),e(kt,qd),e(We,Cd),w(Xt,We,null),e(We,Pd),w(Yt,We,null),f(o,sr,y),f(o,Lt,y),e(Lt,Zt),e(Zt,ia),w(vn,ia,null),e(Lt,Nd),e(Lt,la),e(la,Sd),f(o,ar,y),f(o,Le,y),w(wn,Le,null),e(Le,Id),e(Le,da),e(da,Od),e(Le,Dd),e(Le,Tn),e(Tn,Ad),e(Tn,fs),e(fs,Ud),e(Tn,Bd),e(Le,Wd),e(Le,Mn),e(Mn,Hd),e(Mn,$n),e($n,Rd),e(Mn,Kd),e(Le,Vd),w(Gt,Le,null),e(Le,Xd),e(Le,He),w(xn,He,null),e(He,Yd),e(He,vt),e(vt,Zd),e(vt,gs),e(gs,Gd),e(vt,Jd),e(vt,ca),e(ca,Qd),e(vt,ec),e(He,tc),w(Jt,He,null),e(He,oc),w(Qt,He,null),f(o,rr,y),f(o,wt,y),e(wt,eo),e(eo,pa),w(jn,pa,null),e(wt,nc),e(wt,ua),e(ua,sc),f(o,ir,y),f(o,ve,y),w(Fn,ve,null),e(ve,ac),e(ve,zn),e(zn,rc),e(zn,ha),e(ha,ic),e(zn,lc),e(ve,dc),e(ve,En),e(En,cc),e(En,_s),e(_s,pc),e(En,uc),e(ve,hc),e(ve,qn),e(qn,mc),e(qn,Cn),e(Cn,fc),e(qn,gc),e(ve,_c),w(to,ve,null),e(ve,yc),e(ve,Re),w(Pn,Re,null),e(Re,bc),e(Re,Tt),e(Tt,kc),e(Tt,ys),e(ys,Lc),e(Tt,vc),e(Tt,ma),e(ma,wc),e(Tt,Tc),e(Re,Mc),w(oo,Re,null),e(Re,$c),w(no,Re,null),f(o,lr,y),f(o,Mt,y),e(Mt,so),e(so,fa),w(Nn,fa,null),e(Mt,xc),e(Mt,ga),e(ga,jc),f(o,dr,y),f(o,we,y),w(Sn,we,null),e(we,Fc),e(we,_a),e(_a,zc),e(we,Ec),e(we,In),e(In,qc),e(In,bs),e(bs,Cc),e(In,Pc),e(we,Nc),e(we,On),e(On,Sc),e(On,Dn),e(Dn,Ic),e(On,Oc),e(we,Dc),w(ao,we,null),e(we,Ac),e(we,Ke),w(An,Ke,null),e(Ke,Uc),e(Ke,$t),e($t,Bc),e($t,ks),e(ks,Wc),e($t,Hc),e($t,ya),e(ya,Rc),e($t,Kc),e(Ke,Vc),w(ro,Ke,null),e(Ke,Xc),w(io,Ke,null),f(o,cr,y),f(o,xt,y),e(xt,lo),e(lo,ba),w(Un,ba,null),e(xt,Yc),e(xt,ka),e(ka,Zc),f(o,pr,y),f(o,Te,y),w(Bn,Te,null),e(Te,Gc),e(Te,La),e(La,Jc),e(Te,Qc),e(Te,Wn),e(Wn,ep),e(Wn,Ls),e(Ls,tp),e(Wn,op),e(Te,np),e(Te,Hn),e(Hn,sp),e(Hn,Rn),e(Rn,ap),e(Hn,rp),e(Te,ip),w(co,Te,null),e(Te,lp),e(Te,Ve),w(Kn,Ve,null),e(Ve,dp),e(Ve,jt),e(jt,cp),e(jt,vs),e(vs,pp),e(jt,up),e(jt,va),e(va,hp),e(jt,mp),e(Ve,fp),w(po,Ve,null),e(Ve,gp),w(uo,Ve,null),ur=!0},p(o,[y]){const Vn={};y&2&&(Vn.$$scope={dirty:y,ctx:o}),Ct.$set(Vn);const wa={};y&2&&(wa.$$scope={dirty:y,ctx:o}),Dt.$set(wa);const Ta={};y&2&&(Ta.$$scope={dirty:y,ctx:o}),At.$set(Ta);const Ma={};y&2&&(Ma.$$scope={dirty:y,ctx:o}),Bt.$set(Ma);const Xn={};y&2&&(Xn.$$scope={dirty:y,ctx:o}),Wt.$set(Xn);const $a={};y&2&&($a.$$scope={dirty:y,ctx:o}),Rt.$set($a);const xa={};y&2&&(xa.$$scope={dirty:y,ctx:o}),Kt.$set(xa);const ja={};y&2&&(ja.$$scope={dirty:y,ctx:o}),Xt.$set(ja);const Yn={};y&2&&(Yn.$$scope={dirty:y,ctx:o}),Yt.$set(Yn);const Fa={};y&2&&(Fa.$$scope={dirty:y,ctx:o}),Gt.$set(Fa);const Ft={};y&2&&(Ft.$$scope={dirty:y,ctx:o}),Jt.$set(Ft);const Zn={};y&2&&(Zn.$$scope={dirty:y,ctx:o}),Qt.$set(Zn);const za={};y&2&&(za.$$scope={dirty:y,ctx:o}),to.$set(za);const Gn={};y&2&&(Gn.$$scope={dirty:y,ctx:o}),oo.$set(Gn);const Ea={};y&2&&(Ea.$$scope={dirty:y,ctx:o}),no.$set(Ea);const Jn={};y&2&&(Jn.$$scope={dirty:y,ctx:o}),ao.$set(Jn);const qa={};y&2&&(qa.$$scope={dirty:y,ctx:o}),ro.$set(qa);const Ca={};y&2&&(Ca.$$scope={dirty:y,ctx:o}),io.$set(Ca);const Pa={};y&2&&(Pa.$$scope={dirty:y,ctx:o}),co.$set(Pa);const Na={};y&2&&(Na.$$scope={dirty:y,ctx:o}),po.$set(Na);const Sa={};y&2&&(Sa.$$scope={dirty:y,ctx:o}),uo.$set(Sa)},i(o){ur||(T(l.$$.fragment,o),T(A.$$.fragment,o),T(Fo.$$.fragment,o),T(zo.$$.fragment,o),T(No.$$.fragment,o),T(So.$$.fragment,o),T(Ct.$$.fragment,o),T(Oo.$$.fragment,o),T(Do.$$.fragment,o),T(Uo.$$.fragment,o),T(Bo.$$.fragment,o),T(Ho.$$.fragment,o),T(Ro.$$.fragment,o),T(Zo.$$.fragment,o),T(Dt.$$.fragment,o),T(At.$$.fragment,o),T(Go.$$.fragment,o),T(Jo.$$.fragment,o),T(on.$$.fragment,o),T(Bt.$$.fragment,o),T(Wt.$$.fragment,o),T(nn.$$.fragment,o),T(sn.$$.fragment,o),T(un.$$.fragment,o),T(Rt.$$.fragment,o),T(Kt.$$.fragment,o),T(hn.$$.fragment,o),T(mn.$$.fragment,o),T(Ln.$$.fragment,o),T(Xt.$$.fragment,o),T(Yt.$$.fragment,o),T(vn.$$.fragment,o),T(wn.$$.fragment,o),T(Gt.$$.fragment,o),T(xn.$$.fragment,o),T(Jt.$$.fragment,o),T(Qt.$$.fragment,o),T(jn.$$.fragment,o),T(Fn.$$.fragment,o),T(to.$$.fragment,o),T(Pn.$$.fragment,o),T(oo.$$.fragment,o),T(no.$$.fragment,o),T(Nn.$$.fragment,o),T(Sn.$$.fragment,o),T(ao.$$.fragment,o),T(An.$$.fragment,o),T(ro.$$.fragment,o),T(io.$$.fragment,o),T(Un.$$.fragment,o),T(Bn.$$.fragment,o),T(co.$$.fragment,o),T(Kn.$$.fragment,o),T(po.$$.fragment,o),T(uo.$$.fragment,o),ur=!0)},o(o){M(l.$$.fragment,o),M(A.$$.fragment,o),M(Fo.$$.fragment,o),M(zo.$$.fragment,o),M(No.$$.fragment,o),M(So.$$.fragment,o),M(Ct.$$.fragment,o),M(Oo.$$.fragment,o),M(Do.$$.fragment,o),M(Uo.$$.fragment,o),M(Bo.$$.fragment,o),M(Ho.$$.fragment,o),M(Ro.$$.fragment,o),M(Zo.$$.fragment,o),M(Dt.$$.fragment,o),M(At.$$.fragment,o),M(Go.$$.fragment,o),M(Jo.$$.fragment,o),M(on.$$.fragment,o),M(Bt.$$.fragment,o),M(Wt.$$.fragment,o),M(nn.$$.fragment,o),M(sn.$$.fragment,o),M(un.$$.fragment,o),M(Rt.$$.fragment,o),M(Kt.$$.fragment,o),M(hn.$$.fragment,o),M(mn.$$.fragment,o),M(Ln.$$.fragment,o),M(Xt.$$.fragment,o),M(Yt.$$.fragment,o),M(vn.$$.fragment,o),M(wn.$$.fragment,o),M(Gt.$$.fragment,o),M(xn.$$.fragment,o),M(Jt.$$.fragment,o),M(Qt.$$.fragment,o),M(jn.$$.fragment,o),M(Fn.$$.fragment,o),M(to.$$.fragment,o),M(Pn.$$.fragment,o),M(oo.$$.fragment,o),M(no.$$.fragment,o),M(Nn.$$.fragment,o),M(Sn.$$.fragment,o),M(ao.$$.fragment,o),M(An.$$.fragment,o),M(ro.$$.fragment,o),M(io.$$.fragment,o),M(Un.$$.fragment,o),M(Bn.$$.fragment,o),M(co.$$.fragment,o),M(Kn.$$.fragment,o),M(po.$$.fragment,o),M(uo.$$.fragment,o),ur=!1},d(o){t(d),o&&t(k),o&&t(_),$(l),o&&t(Y),o&&t(z),o&&t(ae),o&&t(O),$(A),o&&t(D),o&&t(G),o&&t(W),o&&t(V),o&&t(x),o&&t(X),o&&t(Me),o&&t(S),o&&t($e),o&&t(I),o&&t(xe),o&&t(ye),o&&t(Da),$(Fo,o),o&&t(Aa),o&&t(ot),o&&t(Ua),$(zo,o),o&&t(Ba),o&&t(es),o&&t(Wa),o&&t(nt),o&&t(Ha),o&&t(rt),$(No),o&&t(Ra),o&&t(Pe),$(So),$(Ct),o&&t(Ka),o&&t(dt),$(Oo),o&&t(Va),o&&t(Ne),$(Do),o&&t(Xa),o&&t(ct),$(Uo),o&&t(Ya),o&&t(Se),$(Bo),o&&t(Za),o&&t(pt),$(Ho),o&&t(Ga),o&&t(Ie),$(Ro),$(Zo),$(Dt),$(At),o&&t(Ja),o&&t(ht),$(Go),o&&t(Qa),o&&t(Oe),$(Jo),$(on),$(Bt),$(Wt),o&&t(er),o&&t(gt),$(nn),o&&t(tr),o&&t(qe),$(sn),$(un),$(Rt),$(Kt),o&&t(or),o&&t(yt),$(hn),o&&t(nr),o&&t(Ce),$(mn),$(Ln),$(Xt),$(Yt),o&&t(sr),o&&t(Lt),$(vn),o&&t(ar),o&&t(Le),$(wn),$(Gt),$(xn),$(Jt),$(Qt),o&&t(rr),o&&t(wt),$(jn),o&&t(ir),o&&t(ve),$(Fn),$(to),$(Pn),$(oo),$(no),o&&t(lr),o&&t(Mt),$(Nn),o&&t(dr),o&&t(we),$(Sn),$(ao),$(An),$(ro),$(io),o&&t(cr),o&&t(xt),$(Un),o&&t(pr),o&&t(Te),$(Bn),$(co),$(Kn),$(po),$(uo)}}}const Nh={local:"layoutlm",sections:[{local:"overview",title:"Overview"},{local:"transformers.LayoutLMConfig",title:"LayoutLMConfig"},{local:"transformers.LayoutLMTokenizer",title:"LayoutLMTokenizer"},{local:"transformers.LayoutLMTokenizerFast",title:"LayoutLMTokenizerFast"},{local:"transformers.LayoutLMModel",title:"LayoutLMModel"},{local:"transformers.LayoutLMForMaskedLM",title:"LayoutLMForMaskedLM"},{local:"transformers.LayoutLMForSequenceClassification",title:"LayoutLMForSequenceClassification"},{local:"transformers.LayoutLMForTokenClassification",title:"LayoutLMForTokenClassification"},{local:"transformers.TFLayoutLMModel",title:"TFLayoutLMModel"},{local:"transformers.TFLayoutLMForMaskedLM",title:"TFLayoutLMForMaskedLM"},{local:"transformers.TFLayoutLMForSequenceClassification",title:"TFLayoutLMForSequenceClassification"},{local:"transformers.TFLayoutLMForTokenClassification",title:"TFLayoutLMForTokenClassification"}],title:"LayoutLM"};function Sh(E){return uh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Wh extends lh{constructor(d){super();dh(this,d,Sh,Ph,ch,{})}}export{Wh as default,Nh as metadata};
