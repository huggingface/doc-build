import{S as fg,i as gg,s as _g,e as a,k as c,w as L,t as o,M as yg,c as r,d as t,m as p,a as i,x as T,h as n,b as u,G as e,g,y as M,q as $,o as j,B as x,v as bg,L as qt}from"../../chunks/vendor-hf-doc-builder.js";import{T as it}from"../../chunks/Tip-hf-doc-builder.js";import{D as Pe}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ht}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as at}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as zt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function kg(q){let d,k,f,_,b;return _=new ht({props:{code:`from transformers import LayoutLMModel, LayoutLMConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),k=o("Examples:"),f=c(),L(_.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=n(h,"Examples:"),h.forEach(t),f=p(l),T(_.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,f,h),M(_,l,h),b=!0},p:qt,i(l){b||($(_.$$.fragment,l),b=!0)},o(l){j(_.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),x(_,l)}}}function wg(q){let d,k,f,_,b;return{c(){d=a("p"),k=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),_=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);k=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var E=i(f);_=n(E,"Module"),E.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,k),e(d,f),e(f,_),e(d,b)},d(l){l&&t(d)}}}function vg(q){let d,k,f,_,b;return _=new ht({props:{code:`from transformers import AutoTokenizer, LayoutLMModel
import torch

tokenizer = AutoTokenizer.from_pretrained("microsoft/layoutlm-base-uncased")
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

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, LayoutLMModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),k=o("Examples:"),f=c(),L(_.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=n(h,"Examples:"),h.forEach(t),f=p(l),T(_.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,f,h),M(_,l,h),b=!0},p:qt,i(l){b||($(_.$$.fragment,l),b=!0)},o(l){j(_.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),x(_,l)}}}function Lg(q){let d,k,f,_,b;return{c(){d=a("p"),k=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),_=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);k=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var E=i(f);_=n(E,"Module"),E.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,k),e(d,f),e(f,_),e(d,b)},d(l){l&&t(d)}}}function Tg(q){let d,k,f,_,b;return _=new ht({props:{code:`from transformers import AutoTokenizer, LayoutLMForMaskedLM
import torch

tokenizer = AutoTokenizer.from_pretrained("microsoft/layoutlm-base-uncased")
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

loss = outputs.loss`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, LayoutLMForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)
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

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){d=a("p"),k=o("Examples:"),f=c(),L(_.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=n(h,"Examples:"),h.forEach(t),f=p(l),T(_.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,f,h),M(_,l,h),b=!0},p:qt,i(l){b||($(_.$$.fragment,l),b=!0)},o(l){j(_.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),x(_,l)}}}function Mg(q){let d,k,f,_,b;return{c(){d=a("p"),k=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),_=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);k=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var E=i(f);_=n(E,"Module"),E.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,k),e(d,f),e(f,_),e(d,b)},d(l){l&&t(d)}}}function $g(q){let d,k,f,_,b;return _=new ht({props:{code:`from transformers import AutoTokenizer, LayoutLMForSequenceClassification
import torch

tokenizer = AutoTokenizer.from_pretrained("microsoft/layoutlm-base-uncased")
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
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, LayoutLMForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),k=o("Examples:"),f=c(),L(_.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=n(h,"Examples:"),h.forEach(t),f=p(l),T(_.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,f,h),M(_,l,h),b=!0},p:qt,i(l){b||($(_.$$.fragment,l),b=!0)},o(l){j(_.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),x(_,l)}}}function jg(q){let d,k,f,_,b;return{c(){d=a("p"),k=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),_=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);k=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var E=i(f);_=n(E,"Module"),E.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,k),e(d,f),e(f,_),e(d,b)},d(l){l&&t(d)}}}function xg(q){let d,k,f,_,b;return _=new ht({props:{code:`from transformers import AutoTokenizer, LayoutLMForTokenClassification
import torch

tokenizer = AutoTokenizer.from_pretrained("microsoft/layoutlm-base-uncased")
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
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, LayoutLMForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),k=o("Examples:"),f=c(),L(_.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=n(h,"Examples:"),h.forEach(t),f=p(l),T(_.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,f,h),M(_,l,h),b=!0},p:qt,i(l){b||($(_.$$.fragment,l),b=!0)},o(l){j(_.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),x(_,l)}}}function Fg(q){let d,k;return d=new ht({props:{code:`from transformers import AutoTokenizer, LayoutLMForQuestionAnswering
from datasets import load_dataset
import torch

tokenizer = AutoTokenizer.from_pretrained("impira/layoutlm-document-qa", add_prefix_space=True)
model = LayoutLMForQuestionAnswering.from_pretrained("impira/layoutlm-document-qa", revision="1e3ebac")

dataset = load_dataset("nielsr/funsd", split="train")
example = dataset[0]
question = "what's his name?"
words = example["words"]
boxes = example["bboxes"]

encoding = tokenizer(
    question.split(), words, is_split_into_words=True, return_token_type_ids=True, return_tensors="pt"
)
bbox = []
for i, s, w in zip(encoding.input_ids[0], encoding.sequence_ids(0), encoding.word_ids(0)):
    if s == 1:
        bbox.append(boxes[w])
    elif i == tokenizer.sep_token_id:
        bbox.append([1000] * 4)
    else:
        bbox.append([0] * 4)
encoding["bbox"] = torch.tensor([bbox])

word_ids = encoding.word_ids(0)
outputs = model(**encoding)
loss = outputs.loss
start_scores = outputs.start_logits
end_scores = outputs.end_logits
start, end = word_ids[start_scores.argmax(-1)], word_ids[end_scores.argmax(-1)]
print(" ".join(words[start : end + 1]))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, LayoutLMForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;impira/layoutlm-document-qa&quot;</span>, add_prefix_space=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;impira/layoutlm-document-qa&quot;</span>, revision=<span class="hljs-string">&quot;1e3ebac&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = dataset[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>question = <span class="hljs-string">&quot;what&#x27;s his name?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>words = example[<span class="hljs-string">&quot;words&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = example[<span class="hljs-string">&quot;bboxes&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(
<span class="hljs-meta">... </span>    question.split(), words, is_split_into_words=<span class="hljs-literal">True</span>, return_token_type_ids=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> i, s, w <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(encoding.input_ids[<span class="hljs-number">0</span>], encoding.sequence_ids(<span class="hljs-number">0</span>), encoding.word_ids(<span class="hljs-number">0</span>)):
<span class="hljs-meta">... </span>    <span class="hljs-keyword">if</span> s == <span class="hljs-number">1</span>:
<span class="hljs-meta">... </span>        bbox.append(boxes[w])
<span class="hljs-meta">... </span>    <span class="hljs-keyword">elif</span> i == tokenizer.sep_token_id:
<span class="hljs-meta">... </span>        bbox.append([<span class="hljs-number">1000</span>] * <span class="hljs-number">4</span>)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">else</span>:
<span class="hljs-meta">... </span>        bbox.append([<span class="hljs-number">0</span>] * <span class="hljs-number">4</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding[<span class="hljs-string">&quot;bbox&quot;</span>] = torch.tensor([bbox])

<span class="hljs-meta">&gt;&gt;&gt; </span>word_ids = encoding.word_ids(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>start, end = word_ids[start_scores.argmax(-<span class="hljs-number">1</span>)], word_ids[end_scores.argmax(-<span class="hljs-number">1</span>)]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot; &quot;</span>.join(words[start : end + <span class="hljs-number">1</span>]))
M. Hamann P. Harper, P. Martinez`}}),{c(){L(d.$$.fragment)},l(f){T(d.$$.fragment,f)},m(f,_){M(d,f,_),k=!0},p:qt,i(f){k||($(d.$$.fragment,f),k=!0)},o(f){j(d.$$.fragment,f),k=!1},d(f){x(d,f)}}}function Eg(q){let d,k,f,_,b,l,h,E,Te,ge,B,_e,K,w,ue,I,Me,he,Q,ye,ne,R,re,$e,V,be,oe,S,je,ie,se,z,C,le,X,de,xe,Y,Fe,ce,P,pe,Z,Ee,ke,W,ze,we,D,me,G,ve,ee,A,Le,N,H,qe;return{c(){d=a("p"),k=o("TensorFlow models and layers in "),f=a("code"),_=o("transformers"),b=o(" accept two formats as input:"),l=c(),h=a("ul"),E=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=c(),B=a("li"),_e=o("having all inputs as a list, tuple or dict in the first positional argument."),K=c(),w=a("p"),ue=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),I=a("code"),Me=o("model.fit()"),he=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=a("code"),ye=o("model.fit()"),ne=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),R=a("code"),re=o("fit()"),$e=o(" and "),V=a("code"),be=o("predict()"),oe=o(`, such as when creating your own layers or models with
the Keras `),S=a("code"),je=o("Functional"),ie=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),se=c(),z=a("ul"),C=a("li"),le=o("a single Tensor with "),X=a("code"),de=o("input_ids"),xe=o(" only and nothing else: "),Y=a("code"),Fe=o("model(input_ids)"),ce=c(),P=a("li"),pe=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Z=a("code"),Ee=o("model([input_ids, attention_mask])"),ke=o(" or "),W=a("code"),ze=o("model([input_ids, attention_mask, token_type_ids])"),we=c(),D=a("li"),me=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),ve=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=c(),A=a("p"),Le=o(`Note that when creating models and layers with
`),N=a("a"),H=o("subclassing"),qe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(m){d=r(m,"P",{});var v=i(d);k=n(v,"TensorFlow models and layers in "),f=r(v,"CODE",{});var Se=i(f);_=n(Se,"transformers"),Se.forEach(t),b=n(v," accept two formats as input:"),v.forEach(t),l=p(m),h=r(m,"UL",{});var te=i(h);E=r(te,"LI",{});var Ue=i(E);Te=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),ge=p(te),B=r(te,"LI",{});var Be=i(B);_e=n(Be,"having all inputs as a list, tuple or dict in the first positional argument."),Be.forEach(t),te.forEach(t),K=p(m),w=r(m,"P",{});var F=i(w);ue=n(F,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),I=r(F,"CODE",{});var We=i(I);Me=n(We,"model.fit()"),We.forEach(t),he=n(F,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=r(F,"CODE",{});var He=i(Q);ye=n(He,"model.fit()"),He.forEach(t),ne=n(F,` supports! If, however, you want to use the second
format outside of Keras methods like `),R=r(F,"CODE",{});var Ae=i(R);re=n(Ae,"fit()"),Ae.forEach(t),$e=n(F," and "),V=r(F,"CODE",{});var Ke=i(V);be=n(Ke,"predict()"),Ke.forEach(t),oe=n(F,`, such as when creating your own layers or models with
the Keras `),S=r(F,"CODE",{});var Qe=i(S);je=n(Qe,"Functional"),Qe.forEach(t),ie=n(F,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),F.forEach(t),se=p(m),z=r(m,"UL",{});var O=i(z);C=r(O,"LI",{});var J=i(C);le=n(J,"a single Tensor with "),X=r(J,"CODE",{});var Re=i(X);de=n(Re,"input_ids"),Re.forEach(t),xe=n(J," only and nothing else: "),Y=r(J,"CODE",{});var De=i(Y);Fe=n(De,"model(input_ids)"),De.forEach(t),J.forEach(t),ce=p(O),P=r(O,"LI",{});var U=i(P);pe=n(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Z=r(U,"CODE",{});var Ie=i(Z);Ee=n(Ie,"model([input_ids, attention_mask])"),Ie.forEach(t),ke=n(U," or "),W=r(U,"CODE",{});var fe=i(W);ze=n(fe,"model([input_ids, attention_mask, token_type_ids])"),fe.forEach(t),U.forEach(t),we=p(O),D=r(O,"LI",{});var Ce=i(D);me=n(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(Ce,"CODE",{});var Oe=i(G);ve=n(Oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe.forEach(t),Ce.forEach(t),O.forEach(t),ee=p(m),A=r(m,"P",{});var ae=i(A);Le=n(ae,`Note that when creating models and layers with
`),N=r(ae,"A",{href:!0,rel:!0});var Ve=i(N);H=n(Ve,"subclassing"),Ve.forEach(t),qe=n(ae,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ae.forEach(t),this.h()},h(){u(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(N,"rel","nofollow")},m(m,v){g(m,d,v),e(d,k),e(d,f),e(f,_),e(d,b),g(m,l,v),g(m,h,v),e(h,E),e(E,Te),e(h,ge),e(h,B),e(B,_e),g(m,K,v),g(m,w,v),e(w,ue),e(w,I),e(I,Me),e(w,he),e(w,Q),e(Q,ye),e(w,ne),e(w,R),e(R,re),e(w,$e),e(w,V),e(V,be),e(w,oe),e(w,S),e(S,je),e(w,ie),g(m,se,v),g(m,z,v),e(z,C),e(C,le),e(C,X),e(X,de),e(C,xe),e(C,Y),e(Y,Fe),e(z,ce),e(z,P),e(P,pe),e(P,Z),e(Z,Ee),e(P,ke),e(P,W),e(W,ze),e(z,we),e(z,D),e(D,me),e(D,G),e(G,ve),g(m,ee,v),g(m,A,v),e(A,Le),e(A,N),e(N,H),e(A,qe)},d(m){m&&t(d),m&&t(l),m&&t(h),m&&t(K),m&&t(w),m&&t(se),m&&t(z),m&&t(ee),m&&t(A)}}}function zg(q){let d,k,f,_,b;return{c(){d=a("p"),k=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),_=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);k=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var E=i(f);_=n(E,"Module"),E.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,k),e(d,f),e(f,_),e(d,b)},d(l){l&&t(d)}}}function qg(q){let d,k,f,_,b;return _=new ht({props:{code:`from transformers import AutoTokenizer, TFLayoutLMModel
import tensorflow as tf

tokenizer = AutoTokenizer.from_pretrained("microsoft/layoutlm-base-uncased")
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

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFLayoutLMModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),k=o("Examples:"),f=c(),L(_.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=n(h,"Examples:"),h.forEach(t),f=p(l),T(_.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,f,h),M(_,l,h),b=!0},p:qt,i(l){b||($(_.$$.fragment,l),b=!0)},o(l){j(_.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),x(_,l)}}}function Cg(q){let d,k,f,_,b,l,h,E,Te,ge,B,_e,K,w,ue,I,Me,he,Q,ye,ne,R,re,$e,V,be,oe,S,je,ie,se,z,C,le,X,de,xe,Y,Fe,ce,P,pe,Z,Ee,ke,W,ze,we,D,me,G,ve,ee,A,Le,N,H,qe;return{c(){d=a("p"),k=o("TensorFlow models and layers in "),f=a("code"),_=o("transformers"),b=o(" accept two formats as input:"),l=c(),h=a("ul"),E=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=c(),B=a("li"),_e=o("having all inputs as a list, tuple or dict in the first positional argument."),K=c(),w=a("p"),ue=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),I=a("code"),Me=o("model.fit()"),he=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=a("code"),ye=o("model.fit()"),ne=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),R=a("code"),re=o("fit()"),$e=o(" and "),V=a("code"),be=o("predict()"),oe=o(`, such as when creating your own layers or models with
the Keras `),S=a("code"),je=o("Functional"),ie=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),se=c(),z=a("ul"),C=a("li"),le=o("a single Tensor with "),X=a("code"),de=o("input_ids"),xe=o(" only and nothing else: "),Y=a("code"),Fe=o("model(input_ids)"),ce=c(),P=a("li"),pe=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Z=a("code"),Ee=o("model([input_ids, attention_mask])"),ke=o(" or "),W=a("code"),ze=o("model([input_ids, attention_mask, token_type_ids])"),we=c(),D=a("li"),me=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),ve=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=c(),A=a("p"),Le=o(`Note that when creating models and layers with
`),N=a("a"),H=o("subclassing"),qe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(m){d=r(m,"P",{});var v=i(d);k=n(v,"TensorFlow models and layers in "),f=r(v,"CODE",{});var Se=i(f);_=n(Se,"transformers"),Se.forEach(t),b=n(v," accept two formats as input:"),v.forEach(t),l=p(m),h=r(m,"UL",{});var te=i(h);E=r(te,"LI",{});var Ue=i(E);Te=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),ge=p(te),B=r(te,"LI",{});var Be=i(B);_e=n(Be,"having all inputs as a list, tuple or dict in the first positional argument."),Be.forEach(t),te.forEach(t),K=p(m),w=r(m,"P",{});var F=i(w);ue=n(F,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),I=r(F,"CODE",{});var We=i(I);Me=n(We,"model.fit()"),We.forEach(t),he=n(F,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=r(F,"CODE",{});var He=i(Q);ye=n(He,"model.fit()"),He.forEach(t),ne=n(F,` supports! If, however, you want to use the second
format outside of Keras methods like `),R=r(F,"CODE",{});var Ae=i(R);re=n(Ae,"fit()"),Ae.forEach(t),$e=n(F," and "),V=r(F,"CODE",{});var Ke=i(V);be=n(Ke,"predict()"),Ke.forEach(t),oe=n(F,`, such as when creating your own layers or models with
the Keras `),S=r(F,"CODE",{});var Qe=i(S);je=n(Qe,"Functional"),Qe.forEach(t),ie=n(F,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),F.forEach(t),se=p(m),z=r(m,"UL",{});var O=i(z);C=r(O,"LI",{});var J=i(C);le=n(J,"a single Tensor with "),X=r(J,"CODE",{});var Re=i(X);de=n(Re,"input_ids"),Re.forEach(t),xe=n(J," only and nothing else: "),Y=r(J,"CODE",{});var De=i(Y);Fe=n(De,"model(input_ids)"),De.forEach(t),J.forEach(t),ce=p(O),P=r(O,"LI",{});var U=i(P);pe=n(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Z=r(U,"CODE",{});var Ie=i(Z);Ee=n(Ie,"model([input_ids, attention_mask])"),Ie.forEach(t),ke=n(U," or "),W=r(U,"CODE",{});var fe=i(W);ze=n(fe,"model([input_ids, attention_mask, token_type_ids])"),fe.forEach(t),U.forEach(t),we=p(O),D=r(O,"LI",{});var Ce=i(D);me=n(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(Ce,"CODE",{});var Oe=i(G);ve=n(Oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe.forEach(t),Ce.forEach(t),O.forEach(t),ee=p(m),A=r(m,"P",{});var ae=i(A);Le=n(ae,`Note that when creating models and layers with
`),N=r(ae,"A",{href:!0,rel:!0});var Ve=i(N);H=n(Ve,"subclassing"),Ve.forEach(t),qe=n(ae,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ae.forEach(t),this.h()},h(){u(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(N,"rel","nofollow")},m(m,v){g(m,d,v),e(d,k),e(d,f),e(f,_),e(d,b),g(m,l,v),g(m,h,v),e(h,E),e(E,Te),e(h,ge),e(h,B),e(B,_e),g(m,K,v),g(m,w,v),e(w,ue),e(w,I),e(I,Me),e(w,he),e(w,Q),e(Q,ye),e(w,ne),e(w,R),e(R,re),e(w,$e),e(w,V),e(V,be),e(w,oe),e(w,S),e(S,je),e(w,ie),g(m,se,v),g(m,z,v),e(z,C),e(C,le),e(C,X),e(X,de),e(C,xe),e(C,Y),e(Y,Fe),e(z,ce),e(z,P),e(P,pe),e(P,Z),e(Z,Ee),e(P,ke),e(P,W),e(W,ze),e(z,we),e(z,D),e(D,me),e(D,G),e(G,ve),g(m,ee,v),g(m,A,v),e(A,Le),e(A,N),e(N,H),e(A,qe)},d(m){m&&t(d),m&&t(l),m&&t(h),m&&t(K),m&&t(w),m&&t(se),m&&t(z),m&&t(ee),m&&t(A)}}}function Pg(q){let d,k,f,_,b;return{c(){d=a("p"),k=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),_=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);k=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var E=i(f);_=n(E,"Module"),E.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,k),e(d,f),e(f,_),e(d,b)},d(l){l&&t(d)}}}function Ag(q){let d,k,f,_,b;return _=new ht({props:{code:`from transformers import AutoTokenizer, TFLayoutLMForMaskedLM
import tensorflow as tf

tokenizer = AutoTokenizer.from_pretrained("microsoft/layoutlm-base-uncased")
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

loss = outputs.loss`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFLayoutLMForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)
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

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){d=a("p"),k=o("Examples:"),f=c(),L(_.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=n(h,"Examples:"),h.forEach(t),f=p(l),T(_.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,f,h),M(_,l,h),b=!0},p:qt,i(l){b||($(_.$$.fragment,l),b=!0)},o(l){j(_.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),x(_,l)}}}function Ng(q){let d,k,f,_,b,l,h,E,Te,ge,B,_e,K,w,ue,I,Me,he,Q,ye,ne,R,re,$e,V,be,oe,S,je,ie,se,z,C,le,X,de,xe,Y,Fe,ce,P,pe,Z,Ee,ke,W,ze,we,D,me,G,ve,ee,A,Le,N,H,qe;return{c(){d=a("p"),k=o("TensorFlow models and layers in "),f=a("code"),_=o("transformers"),b=o(" accept two formats as input:"),l=c(),h=a("ul"),E=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=c(),B=a("li"),_e=o("having all inputs as a list, tuple or dict in the first positional argument."),K=c(),w=a("p"),ue=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),I=a("code"),Me=o("model.fit()"),he=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=a("code"),ye=o("model.fit()"),ne=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),R=a("code"),re=o("fit()"),$e=o(" and "),V=a("code"),be=o("predict()"),oe=o(`, such as when creating your own layers or models with
the Keras `),S=a("code"),je=o("Functional"),ie=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),se=c(),z=a("ul"),C=a("li"),le=o("a single Tensor with "),X=a("code"),de=o("input_ids"),xe=o(" only and nothing else: "),Y=a("code"),Fe=o("model(input_ids)"),ce=c(),P=a("li"),pe=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Z=a("code"),Ee=o("model([input_ids, attention_mask])"),ke=o(" or "),W=a("code"),ze=o("model([input_ids, attention_mask, token_type_ids])"),we=c(),D=a("li"),me=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),ve=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=c(),A=a("p"),Le=o(`Note that when creating models and layers with
`),N=a("a"),H=o("subclassing"),qe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(m){d=r(m,"P",{});var v=i(d);k=n(v,"TensorFlow models and layers in "),f=r(v,"CODE",{});var Se=i(f);_=n(Se,"transformers"),Se.forEach(t),b=n(v," accept two formats as input:"),v.forEach(t),l=p(m),h=r(m,"UL",{});var te=i(h);E=r(te,"LI",{});var Ue=i(E);Te=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),ge=p(te),B=r(te,"LI",{});var Be=i(B);_e=n(Be,"having all inputs as a list, tuple or dict in the first positional argument."),Be.forEach(t),te.forEach(t),K=p(m),w=r(m,"P",{});var F=i(w);ue=n(F,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),I=r(F,"CODE",{});var We=i(I);Me=n(We,"model.fit()"),We.forEach(t),he=n(F,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=r(F,"CODE",{});var He=i(Q);ye=n(He,"model.fit()"),He.forEach(t),ne=n(F,` supports! If, however, you want to use the second
format outside of Keras methods like `),R=r(F,"CODE",{});var Ae=i(R);re=n(Ae,"fit()"),Ae.forEach(t),$e=n(F," and "),V=r(F,"CODE",{});var Ke=i(V);be=n(Ke,"predict()"),Ke.forEach(t),oe=n(F,`, such as when creating your own layers or models with
the Keras `),S=r(F,"CODE",{});var Qe=i(S);je=n(Qe,"Functional"),Qe.forEach(t),ie=n(F,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),F.forEach(t),se=p(m),z=r(m,"UL",{});var O=i(z);C=r(O,"LI",{});var J=i(C);le=n(J,"a single Tensor with "),X=r(J,"CODE",{});var Re=i(X);de=n(Re,"input_ids"),Re.forEach(t),xe=n(J," only and nothing else: "),Y=r(J,"CODE",{});var De=i(Y);Fe=n(De,"model(input_ids)"),De.forEach(t),J.forEach(t),ce=p(O),P=r(O,"LI",{});var U=i(P);pe=n(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Z=r(U,"CODE",{});var Ie=i(Z);Ee=n(Ie,"model([input_ids, attention_mask])"),Ie.forEach(t),ke=n(U," or "),W=r(U,"CODE",{});var fe=i(W);ze=n(fe,"model([input_ids, attention_mask, token_type_ids])"),fe.forEach(t),U.forEach(t),we=p(O),D=r(O,"LI",{});var Ce=i(D);me=n(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(Ce,"CODE",{});var Oe=i(G);ve=n(Oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe.forEach(t),Ce.forEach(t),O.forEach(t),ee=p(m),A=r(m,"P",{});var ae=i(A);Le=n(ae,`Note that when creating models and layers with
`),N=r(ae,"A",{href:!0,rel:!0});var Ve=i(N);H=n(Ve,"subclassing"),Ve.forEach(t),qe=n(ae,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ae.forEach(t),this.h()},h(){u(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(N,"rel","nofollow")},m(m,v){g(m,d,v),e(d,k),e(d,f),e(f,_),e(d,b),g(m,l,v),g(m,h,v),e(h,E),e(E,Te),e(h,ge),e(h,B),e(B,_e),g(m,K,v),g(m,w,v),e(w,ue),e(w,I),e(I,Me),e(w,he),e(w,Q),e(Q,ye),e(w,ne),e(w,R),e(R,re),e(w,$e),e(w,V),e(V,be),e(w,oe),e(w,S),e(S,je),e(w,ie),g(m,se,v),g(m,z,v),e(z,C),e(C,le),e(C,X),e(X,de),e(C,xe),e(C,Y),e(Y,Fe),e(z,ce),e(z,P),e(P,pe),e(P,Z),e(Z,Ee),e(P,ke),e(P,W),e(W,ze),e(z,we),e(z,D),e(D,me),e(D,G),e(G,ve),g(m,ee,v),g(m,A,v),e(A,Le),e(A,N),e(N,H),e(A,qe)},d(m){m&&t(d),m&&t(l),m&&t(h),m&&t(K),m&&t(w),m&&t(se),m&&t(z),m&&t(ee),m&&t(A)}}}function Og(q){let d,k,f,_,b;return{c(){d=a("p"),k=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),_=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);k=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var E=i(f);_=n(E,"Module"),E.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,k),e(d,f),e(f,_),e(d,b)},d(l){l&&t(d)}}}function Dg(q){let d,k,f,_,b;return _=new ht({props:{code:`from transformers import AutoTokenizer, TFLayoutLMForSequenceClassification
import tensorflow as tf

tokenizer = AutoTokenizer.from_pretrained("microsoft/layoutlm-base-uncased")
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
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFLayoutLMForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),k=o("Examples:"),f=c(),L(_.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=n(h,"Examples:"),h.forEach(t),f=p(l),T(_.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,f,h),M(_,l,h),b=!0},p:qt,i(l){b||($(_.$$.fragment,l),b=!0)},o(l){j(_.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),x(_,l)}}}function Ig(q){let d,k,f,_,b,l,h,E,Te,ge,B,_e,K,w,ue,I,Me,he,Q,ye,ne,R,re,$e,V,be,oe,S,je,ie,se,z,C,le,X,de,xe,Y,Fe,ce,P,pe,Z,Ee,ke,W,ze,we,D,me,G,ve,ee,A,Le,N,H,qe;return{c(){d=a("p"),k=o("TensorFlow models and layers in "),f=a("code"),_=o("transformers"),b=o(" accept two formats as input:"),l=c(),h=a("ul"),E=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=c(),B=a("li"),_e=o("having all inputs as a list, tuple or dict in the first positional argument."),K=c(),w=a("p"),ue=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),I=a("code"),Me=o("model.fit()"),he=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=a("code"),ye=o("model.fit()"),ne=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),R=a("code"),re=o("fit()"),$e=o(" and "),V=a("code"),be=o("predict()"),oe=o(`, such as when creating your own layers or models with
the Keras `),S=a("code"),je=o("Functional"),ie=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),se=c(),z=a("ul"),C=a("li"),le=o("a single Tensor with "),X=a("code"),de=o("input_ids"),xe=o(" only and nothing else: "),Y=a("code"),Fe=o("model(input_ids)"),ce=c(),P=a("li"),pe=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Z=a("code"),Ee=o("model([input_ids, attention_mask])"),ke=o(" or "),W=a("code"),ze=o("model([input_ids, attention_mask, token_type_ids])"),we=c(),D=a("li"),me=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),ve=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=c(),A=a("p"),Le=o(`Note that when creating models and layers with
`),N=a("a"),H=o("subclassing"),qe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(m){d=r(m,"P",{});var v=i(d);k=n(v,"TensorFlow models and layers in "),f=r(v,"CODE",{});var Se=i(f);_=n(Se,"transformers"),Se.forEach(t),b=n(v," accept two formats as input:"),v.forEach(t),l=p(m),h=r(m,"UL",{});var te=i(h);E=r(te,"LI",{});var Ue=i(E);Te=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),ge=p(te),B=r(te,"LI",{});var Be=i(B);_e=n(Be,"having all inputs as a list, tuple or dict in the first positional argument."),Be.forEach(t),te.forEach(t),K=p(m),w=r(m,"P",{});var F=i(w);ue=n(F,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),I=r(F,"CODE",{});var We=i(I);Me=n(We,"model.fit()"),We.forEach(t),he=n(F,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=r(F,"CODE",{});var He=i(Q);ye=n(He,"model.fit()"),He.forEach(t),ne=n(F,` supports! If, however, you want to use the second
format outside of Keras methods like `),R=r(F,"CODE",{});var Ae=i(R);re=n(Ae,"fit()"),Ae.forEach(t),$e=n(F," and "),V=r(F,"CODE",{});var Ke=i(V);be=n(Ke,"predict()"),Ke.forEach(t),oe=n(F,`, such as when creating your own layers or models with
the Keras `),S=r(F,"CODE",{});var Qe=i(S);je=n(Qe,"Functional"),Qe.forEach(t),ie=n(F,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),F.forEach(t),se=p(m),z=r(m,"UL",{});var O=i(z);C=r(O,"LI",{});var J=i(C);le=n(J,"a single Tensor with "),X=r(J,"CODE",{});var Re=i(X);de=n(Re,"input_ids"),Re.forEach(t),xe=n(J," only and nothing else: "),Y=r(J,"CODE",{});var De=i(Y);Fe=n(De,"model(input_ids)"),De.forEach(t),J.forEach(t),ce=p(O),P=r(O,"LI",{});var U=i(P);pe=n(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Z=r(U,"CODE",{});var Ie=i(Z);Ee=n(Ie,"model([input_ids, attention_mask])"),Ie.forEach(t),ke=n(U," or "),W=r(U,"CODE",{});var fe=i(W);ze=n(fe,"model([input_ids, attention_mask, token_type_ids])"),fe.forEach(t),U.forEach(t),we=p(O),D=r(O,"LI",{});var Ce=i(D);me=n(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(Ce,"CODE",{});var Oe=i(G);ve=n(Oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe.forEach(t),Ce.forEach(t),O.forEach(t),ee=p(m),A=r(m,"P",{});var ae=i(A);Le=n(ae,`Note that when creating models and layers with
`),N=r(ae,"A",{href:!0,rel:!0});var Ve=i(N);H=n(Ve,"subclassing"),Ve.forEach(t),qe=n(ae,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ae.forEach(t),this.h()},h(){u(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(N,"rel","nofollow")},m(m,v){g(m,d,v),e(d,k),e(d,f),e(f,_),e(d,b),g(m,l,v),g(m,h,v),e(h,E),e(E,Te),e(h,ge),e(h,B),e(B,_e),g(m,K,v),g(m,w,v),e(w,ue),e(w,I),e(I,Me),e(w,he),e(w,Q),e(Q,ye),e(w,ne),e(w,R),e(R,re),e(w,$e),e(w,V),e(V,be),e(w,oe),e(w,S),e(S,je),e(w,ie),g(m,se,v),g(m,z,v),e(z,C),e(C,le),e(C,X),e(X,de),e(C,xe),e(C,Y),e(Y,Fe),e(z,ce),e(z,P),e(P,pe),e(P,Z),e(Z,Ee),e(P,ke),e(P,W),e(W,ze),e(z,we),e(z,D),e(D,me),e(D,G),e(G,ve),g(m,ee,v),g(m,A,v),e(A,Le),e(A,N),e(N,H),e(A,qe)},d(m){m&&t(d),m&&t(l),m&&t(h),m&&t(K),m&&t(w),m&&t(se),m&&t(z),m&&t(ee),m&&t(A)}}}function Sg(q){let d,k,f,_,b;return{c(){d=a("p"),k=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),_=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);k=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var E=i(f);_=n(E,"Module"),E.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,k),e(d,f),e(f,_),e(d,b)},d(l){l&&t(d)}}}function Ug(q){let d,k,f,_,b;return _=new ht({props:{code:`import tensorflow as tf
from transformers import AutoTokenizer, TFLayoutLMForTokenClassification

tokenizer = AutoTokenizer.from_pretrained("microsoft/layoutlm-base-uncased")
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFLayoutLMForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlm-base-uncased&quot;</span>)
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),k=o("Examples:"),f=c(),L(_.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=n(h,"Examples:"),h.forEach(t),f=p(l),T(_.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,f,h),M(_,l,h),b=!0},p:qt,i(l){b||($(_.$$.fragment,l),b=!0)},o(l){j(_.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),x(_,l)}}}function Bg(q){let d,k,f,_,b,l,h,E,Te,ge,B,_e,K,w,ue,I,Me,he,Q,ye,ne,R,re,$e,V,be,oe,S,je,ie,se,z,C,le,X,de,xe,Y,Fe,ce,P,pe,Z,Ee,ke,W,ze,we,D,me,G,ve,ee,A,Le,N,H,qe;return{c(){d=a("p"),k=o("TensorFlow models and layers in "),f=a("code"),_=o("transformers"),b=o(" accept two formats as input:"),l=c(),h=a("ul"),E=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=c(),B=a("li"),_e=o("having all inputs as a list, tuple or dict in the first positional argument."),K=c(),w=a("p"),ue=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),I=a("code"),Me=o("model.fit()"),he=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=a("code"),ye=o("model.fit()"),ne=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),R=a("code"),re=o("fit()"),$e=o(" and "),V=a("code"),be=o("predict()"),oe=o(`, such as when creating your own layers or models with
the Keras `),S=a("code"),je=o("Functional"),ie=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),se=c(),z=a("ul"),C=a("li"),le=o("a single Tensor with "),X=a("code"),de=o("input_ids"),xe=o(" only and nothing else: "),Y=a("code"),Fe=o("model(input_ids)"),ce=c(),P=a("li"),pe=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Z=a("code"),Ee=o("model([input_ids, attention_mask])"),ke=o(" or "),W=a("code"),ze=o("model([input_ids, attention_mask, token_type_ids])"),we=c(),D=a("li"),me=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),ve=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=c(),A=a("p"),Le=o(`Note that when creating models and layers with
`),N=a("a"),H=o("subclassing"),qe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(m){d=r(m,"P",{});var v=i(d);k=n(v,"TensorFlow models and layers in "),f=r(v,"CODE",{});var Se=i(f);_=n(Se,"transformers"),Se.forEach(t),b=n(v," accept two formats as input:"),v.forEach(t),l=p(m),h=r(m,"UL",{});var te=i(h);E=r(te,"LI",{});var Ue=i(E);Te=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),ge=p(te),B=r(te,"LI",{});var Be=i(B);_e=n(Be,"having all inputs as a list, tuple or dict in the first positional argument."),Be.forEach(t),te.forEach(t),K=p(m),w=r(m,"P",{});var F=i(w);ue=n(F,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),I=r(F,"CODE",{});var We=i(I);Me=n(We,"model.fit()"),We.forEach(t),he=n(F,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=r(F,"CODE",{});var He=i(Q);ye=n(He,"model.fit()"),He.forEach(t),ne=n(F,` supports! If, however, you want to use the second
format outside of Keras methods like `),R=r(F,"CODE",{});var Ae=i(R);re=n(Ae,"fit()"),Ae.forEach(t),$e=n(F," and "),V=r(F,"CODE",{});var Ke=i(V);be=n(Ke,"predict()"),Ke.forEach(t),oe=n(F,`, such as when creating your own layers or models with
the Keras `),S=r(F,"CODE",{});var Qe=i(S);je=n(Qe,"Functional"),Qe.forEach(t),ie=n(F,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),F.forEach(t),se=p(m),z=r(m,"UL",{});var O=i(z);C=r(O,"LI",{});var J=i(C);le=n(J,"a single Tensor with "),X=r(J,"CODE",{});var Re=i(X);de=n(Re,"input_ids"),Re.forEach(t),xe=n(J," only and nothing else: "),Y=r(J,"CODE",{});var De=i(Y);Fe=n(De,"model(input_ids)"),De.forEach(t),J.forEach(t),ce=p(O),P=r(O,"LI",{});var U=i(P);pe=n(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Z=r(U,"CODE",{});var Ie=i(Z);Ee=n(Ie,"model([input_ids, attention_mask])"),Ie.forEach(t),ke=n(U," or "),W=r(U,"CODE",{});var fe=i(W);ze=n(fe,"model([input_ids, attention_mask, token_type_ids])"),fe.forEach(t),U.forEach(t),we=p(O),D=r(O,"LI",{});var Ce=i(D);me=n(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(Ce,"CODE",{});var Oe=i(G);ve=n(Oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe.forEach(t),Ce.forEach(t),O.forEach(t),ee=p(m),A=r(m,"P",{});var ae=i(A);Le=n(ae,`Note that when creating models and layers with
`),N=r(ae,"A",{href:!0,rel:!0});var Ve=i(N);H=n(Ve,"subclassing"),Ve.forEach(t),qe=n(ae,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ae.forEach(t),this.h()},h(){u(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(N,"rel","nofollow")},m(m,v){g(m,d,v),e(d,k),e(d,f),e(f,_),e(d,b),g(m,l,v),g(m,h,v),e(h,E),e(E,Te),e(h,ge),e(h,B),e(B,_e),g(m,K,v),g(m,w,v),e(w,ue),e(w,I),e(I,Me),e(w,he),e(w,Q),e(Q,ye),e(w,ne),e(w,R),e(R,re),e(w,$e),e(w,V),e(V,be),e(w,oe),e(w,S),e(S,je),e(w,ie),g(m,se,v),g(m,z,v),e(z,C),e(C,le),e(C,X),e(X,de),e(C,xe),e(C,Y),e(Y,Fe),e(z,ce),e(z,P),e(P,pe),e(P,Z),e(Z,Ee),e(P,ke),e(P,W),e(W,ze),e(z,we),e(z,D),e(D,me),e(D,G),e(G,ve),g(m,ee,v),g(m,A,v),e(A,Le),e(A,N),e(N,H),e(A,qe)},d(m){m&&t(d),m&&t(l),m&&t(h),m&&t(K),m&&t(w),m&&t(se),m&&t(z),m&&t(ee),m&&t(A)}}}function Wg(q){let d,k,f,_,b;return{c(){d=a("p"),k=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),_=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);k=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var E=i(f);_=n(E,"Module"),E.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,k),e(d,f),e(f,_),e(d,b)},d(l){l&&t(d)}}}function Hg(q){let d,k,f,_,b;return _=new ht({props:{code:`import tensorflow as tf
from transformers import AutoTokenizer, TFLayoutLMForQuestionAnswering
from datasets import load_dataset

tokenizer = AutoTokenizer.from_pretrained("impira/layoutlm-document-qa", add_prefix_space=True)
model = TFLayoutLMForQuestionAnswering.from_pretrained("impira/layoutlm-document-qa", revision="1e3ebac")

dataset = load_dataset("nielsr/funsd", split="train")
example = dataset[0]
question = "what's his name?"
words = example["words"]
boxes = example["bboxes"]

encoding = tokenizer(
    question.split(), words, is_split_into_words=True, return_token_type_ids=True, return_tensors="tf"
)
bbox = []
for i, s, w in zip(encoding.input_ids[0], encoding.sequence_ids(0), encoding.word_ids(0)):
    if s == 1:
        bbox.append(boxes[w])
    elif i == tokenizer.sep_token_id:
        bbox.append([1000] * 4)
    else:
        bbox.append([0] * 4)
encoding["bbox"] = tf.convert_to_tensor([bbox])

word_ids = encoding.word_ids(0)
outputs = model(**encoding)
loss = outputs.loss
start_scores = outputs.start_logits
end_scores = outputs.end_logits
start, end = word_ids[tf.math.argmax(start_scores, -1)[0]], word_ids[tf.math.argmax(end_scores, -1)[0]]
print(" ".join(words[start : end + 1]))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFLayoutLMForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;impira/layoutlm-document-qa&quot;</span>, add_prefix_space=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLayoutLMForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;impira/layoutlm-document-qa&quot;</span>, revision=<span class="hljs-string">&quot;1e3ebac&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;nielsr/funsd&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>example = dataset[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>question = <span class="hljs-string">&quot;what&#x27;s his name?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>words = example[<span class="hljs-string">&quot;words&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = example[<span class="hljs-string">&quot;bboxes&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(
<span class="hljs-meta">... </span>    question.split(), words, is_split_into_words=<span class="hljs-literal">True</span>, return_token_type_ids=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>bbox = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> i, s, w <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(encoding.input_ids[<span class="hljs-number">0</span>], encoding.sequence_ids(<span class="hljs-number">0</span>), encoding.word_ids(<span class="hljs-number">0</span>)):
<span class="hljs-meta">... </span>    <span class="hljs-keyword">if</span> s == <span class="hljs-number">1</span>:
<span class="hljs-meta">... </span>        bbox.append(boxes[w])
<span class="hljs-meta">... </span>    <span class="hljs-keyword">elif</span> i == tokenizer.sep_token_id:
<span class="hljs-meta">... </span>        bbox.append([<span class="hljs-number">1000</span>] * <span class="hljs-number">4</span>)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">else</span>:
<span class="hljs-meta">... </span>        bbox.append([<span class="hljs-number">0</span>] * <span class="hljs-number">4</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding[<span class="hljs-string">&quot;bbox&quot;</span>] = tf.convert_to_tensor([bbox])

<span class="hljs-meta">&gt;&gt;&gt; </span>word_ids = encoding.word_ids(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>start, end = word_ids[tf.math.argmax(start_scores, -<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>]], word_ids[tf.math.argmax(end_scores, -<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot; &quot;</span>.join(words[start : end + <span class="hljs-number">1</span>]))
M. Hamann P. Harper, P. Martinez`}}),{c(){d=a("p"),k=o("Examples:"),f=c(),L(_.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=n(h,"Examples:"),h.forEach(t),f=p(l),T(_.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,f,h),M(_,l,h),b=!0},p:qt,i(l){b||($(_.$$.fragment,l),b=!0)},o(l){j(_.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),x(_,l)}}}function Kg(q){let d,k,f,_,b,l,h,E,Te,ge,B,_e,K,w,ue,I,Me,he,Q,ye,ne,R,re,$e,V,be,oe,S,je,ie,se,z,C,le,X,de,xe,Y,Fe,ce,P,pe,Z,Ee,ke,W,ze,we,D,me,G,ve,ee,A,Le,N,H,qe,m,v,Se,te,Ue,Be,F,We,He,Ae,Ke,Qe,O,J,Re,De,U,Ie,fe,Ce,Oe,ae,Ve,Ia,bl,kl,ii,gn,li,Js,xt,wl,ea,vl,Ll,_n,Tl,Ml,yn,$l,jl,di,Ct,xl,bn,Fl,El,kn,zl,ql,ci,Dt,uo,Sa,wn,Cl,Ua,Pl,pi,lt,vn,Al,It,Nl,ta,Ol,Dl,Ln,Il,Sl,Ul,St,Bl,oa,Wl,Hl,na,Kl,Ql,Rl,ho,ui,Ut,mo,Ba,Tn,Vl,Wa,Xl,hi,dt,Mn,Yl,Ha,Zl,Gl,fo,sa,Jl,ed,aa,td,od,nd,$n,sd,ra,ad,rd,mi,Bt,go,Ka,jn,id,Qa,ld,fi,ct,xn,dd,Ra,cd,pd,_o,ia,ud,hd,la,md,fd,gd,Fn,_d,da,yd,bd,gi,Wt,yo,Va,En,kd,Xa,wd,_i,pt,zn,vd,qn,Ld,Cn,Td,Md,$d,Pn,jd,An,xd,Fd,Ed,mt,Nn,zd,Ht,qd,ca,Cd,Pd,Ya,Ad,Nd,Od,bo,Dd,ko,yi,Kt,wo,Za,On,Id,Ga,Sd,bi,ut,Dn,Ud,Qt,Bd,Ja,Wd,Hd,In,Kd,Qd,Rd,Sn,Vd,Un,Xd,Yd,Zd,ft,Bn,Gd,Rt,Jd,pa,ec,tc,er,oc,nc,sc,vo,ac,Lo,ki,Vt,To,tr,Wn,rc,or,ic,wi,tt,Hn,lc,Kn,dc,Qn,cc,pc,uc,Rn,hc,Vn,mc,fc,gc,Xn,_c,Yn,yc,bc,kc,gt,Zn,wc,Xt,vc,ua,Lc,Tc,nr,Mc,$c,jc,Mo,xc,$o,vi,Yt,jo,sr,Gn,Fc,ar,Ec,Li,ot,Jn,zc,Zt,qc,es,Cc,Pc,ts,Ac,Nc,Oc,os,Dc,ns,Ic,Sc,Uc,ss,Bc,as,Wc,Hc,Kc,_t,rs,Qc,Gt,Rc,ha,Vc,Xc,rr,Yc,Zc,Gc,xo,Jc,Fo,Ti,Jt,Eo,ir,is,ep,lr,tp,Mi,nt,ls,op,Ft,np,ds,sp,ap,dr,rp,ip,cr,lp,dp,cp,cs,pp,ps,up,hp,mp,us,fp,hs,gp,_p,yp,rt,ms,bp,Ne,kp,pr,wp,vp,ur,Lp,Tp,hr,Mp,$p,mr,jp,xp,fr,Fp,Ep,gr,zp,qp,_r,Cp,Pp,yr,Ap,Np,Op,br,Dp,Ip,kr,Sp,Up,zo,$i,eo,qo,wr,fs,Bp,vr,Wp,ji,Ye,gs,Hp,Lr,Kp,Qp,_s,Rp,ma,Vp,Xp,Yp,ys,Zp,bs,Gp,Jp,eu,Co,tu,yt,ks,ou,to,nu,fa,su,au,Tr,ru,iu,lu,Po,du,Ao,xi,oo,No,Mr,ws,cu,$r,pu,Fi,Ze,vs,uu,Ls,hu,jr,mu,fu,gu,Ts,_u,ga,yu,bu,ku,Ms,wu,$s,vu,Lu,Tu,Oo,Mu,bt,js,$u,no,ju,_a,xu,Fu,xr,Eu,zu,qu,Do,Cu,Io,Ei,so,So,Fr,xs,Pu,Er,Au,zi,Ge,Fs,Nu,zr,Ou,Du,Es,Iu,ya,Su,Uu,Bu,zs,Wu,qs,Hu,Ku,Qu,Uo,Ru,kt,Cs,Vu,ao,Xu,ba,Yu,Zu,qr,Gu,Ju,eh,Bo,th,Wo,qi,ro,Ho,Cr,Ps,oh,Pr,nh,Ci,Je,As,sh,Ar,ah,rh,Ns,ih,ka,lh,dh,ch,Os,ph,Ds,uh,hh,mh,Ko,fh,wt,Is,gh,io,_h,wa,yh,bh,Nr,kh,wh,vh,Qo,Lh,Ro,Pi,lo,Vo,Or,Ss,Th,Dr,Mh,Ai,et,Us,$h,Et,jh,Bs,xh,Fh,Ir,Eh,zh,Sr,qh,Ch,Ph,Ws,Ah,va,Nh,Oh,Dh,Hs,Ih,Ks,Sh,Uh,Bh,Xo,Wh,vt,Qs,Hh,co,Kh,La,Qh,Rh,Ur,Vh,Xh,Yh,Yo,Zh,Zo,Ni;return l=new at({}),I=new at({}),U=new ht({props:{code:`def normalize_bbox(bbox, width, height):
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
    ]`}}),gn=new ht({props:{code:`from PIL import Image

# Document can be a png, jpg, etc. PDFs must be converted to images.
image = Image.open(name_of_your_document).convert("RGB")

width, height = image.size`,highlighted:`<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

<span class="hljs-comment"># Document can be a png, jpg, etc. PDFs must be converted to images.</span>
image = Image.<span class="hljs-built_in">open</span>(name_of_your_document).convert(<span class="hljs-string">&quot;RGB&quot;</span>)

width, height = image.size`}}),wn=new at({}),vn=new Pe({props:{name:"class transformers.LayoutLMConfig",anchor:"transformers.LayoutLMConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the LayoutLM model. Defines the different tokens that can be represented by the
<em>inputs_ids</em> passed to the forward method of <a href="/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMModel">LayoutLMModel</a>.`,name:"vocab_size"},{anchor:"transformers.LayoutLMConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed into <a href="/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMModel">LayoutLMModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.LayoutLMConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.LayoutLMConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.LayoutLMConfig.max_2d_position_embeddings",description:`<strong>max_2d_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum value that the 2D position embedding might ever used. Typically set this to something large
just in case (e.g., 1024).`,name:"max_2d_position_embeddings"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/layoutlm/configuration_layoutlm.py#L39"}}),ho=new zt({props:{anchor:"transformers.LayoutLMConfig.example",$$slots:{default:[kg]},$$scope:{ctx:q}}}),Tn=new at({}),Mn=new Pe({props:{name:"class transformers.LayoutLMTokenizer",anchor:"transformers.LayoutLMTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/layoutlm/tokenization_layoutlm.py#L50"}}),jn=new at({}),xn=new Pe({props:{name:"class transformers.LayoutLMTokenizerFast",anchor:"transformers.LayoutLMTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/layoutlm/tokenization_layoutlm_fast.py#L59"}}),En=new at({}),zn=new Pe({props:{name:"class transformers.LayoutLMModel",anchor:"transformers.LayoutLMModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/layoutlm/modeling_layoutlm.py#L703"}}),Nn=new Pe({props:{name:"forward",anchor:"transformers.LayoutLMModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
If set to <code>True</code>, the model will return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/layoutlm/modeling_layoutlm.py#L729",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bo=new it({props:{$$slots:{default:[wg]},$$scope:{ctx:q}}}),ko=new zt({props:{anchor:"transformers.LayoutLMModel.forward.example",$$slots:{default:[vg]},$$scope:{ctx:q}}}),On=new at({}),Dn=new Pe({props:{name:"class transformers.LayoutLMForMaskedLM",anchor:"transformers.LayoutLMForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/layoutlm/modeling_layoutlm.py#L851"}}),Bn=new Pe({props:{name:"forward",anchor:"transformers.LayoutLMForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
If set to <code>True</code>, the model will return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/layoutlm/modeling_layoutlm.py#L870",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vo=new it({props:{$$slots:{default:[Lg]},$$scope:{ctx:q}}}),Lo=new zt({props:{anchor:"transformers.LayoutLMForMaskedLM.forward.example",$$slots:{default:[Tg]},$$scope:{ctx:q}}}),Wn=new at({}),Hn=new Pe({props:{name:"class transformers.LayoutLMForSequenceClassification",anchor:"transformers.LayoutLMForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/layoutlm/modeling_layoutlm.py#L980"}}),Zn=new Pe({props:{name:"forward",anchor:"transformers.LayoutLMForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
If set to <code>True</code>, the model will return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/layoutlm/modeling_layoutlm.py#L994",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Mo=new it({props:{$$slots:{default:[Mg]},$$scope:{ctx:q}}}),$o=new zt({props:{anchor:"transformers.LayoutLMForSequenceClassification.forward.example",$$slots:{default:[$g]},$$scope:{ctx:q}}}),Gn=new at({}),Jn=new Pe({props:{name:"class transformers.LayoutLMForTokenClassification",anchor:"transformers.LayoutLMForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/layoutlm/modeling_layoutlm.py#L1117"}}),rs=new Pe({props:{name:"forward",anchor:"transformers.LayoutLMForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
If set to <code>True</code>, the model will return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/layoutlm/modeling_layoutlm.py#L1131",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xo=new it({props:{$$slots:{default:[jg]},$$scope:{ctx:q}}}),Fo=new zt({props:{anchor:"transformers.LayoutLMForTokenClassification.forward.example",$$slots:{default:[xg]},$$scope:{ctx:q}}}),is=new at({}),ls=new Pe({props:{name:"class transformers.LayoutLMForQuestionAnswering",anchor:"transformers.LayoutLMForQuestionAnswering",parameters:[{name:"config",val:""},{name:"has_visual_segment_embedding",val:" = True"}],parametersDescription:[{anchor:"transformers.LayoutLMForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/layoutlm/modeling_layoutlm.py#L1235"}}),ms=new Pe({props:{name:"forward",anchor:"transformers.LayoutLMForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/layoutlm/modeling_layoutlm.py#L1249",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMConfig"
>LayoutLMConfig</a>) and inputs.</p>
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
`}}),zo=new zt({props:{anchor:"transformers.LayoutLMForQuestionAnswering.forward.example",$$slots:{default:[Fg]},$$scope:{ctx:q}}}),fs=new at({}),gs=new Pe({props:{name:"class transformers.TFLayoutLMModel",anchor:"transformers.TFLayoutLMModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L910"}}),Co=new it({props:{$$slots:{default:[Eg]},$$scope:{ctx:q}}}),ks=new Pe({props:{name:"call",anchor:"transformers.TFLayoutLMModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L916",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Po=new it({props:{$$slots:{default:[zg]},$$scope:{ctx:q}}}),Ao=new zt({props:{anchor:"transformers.TFLayoutLMModel.call.example",$$slots:{default:[qg]},$$scope:{ctx:q}}}),ws=new at({}),vs=new Pe({props:{name:"class transformers.TFLayoutLMForMaskedLM",anchor:"transformers.TFLayoutLMForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1010"}}),Oo=new it({props:{$$slots:{default:[Cg]},$$scope:{ctx:q}}}),js=new Pe({props:{name:"call",anchor:"transformers.TFLayoutLMForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1038",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Do=new it({props:{$$slots:{default:[Pg]},$$scope:{ctx:q}}}),Io=new zt({props:{anchor:"transformers.TFLayoutLMForMaskedLM.call.example",$$slots:{default:[Ag]},$$scope:{ctx:q}}}),xs=new at({}),Fs=new Pe({props:{name:"class transformers.TFLayoutLMForSequenceClassification",anchor:"transformers.TFLayoutLMForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1143"}}),Uo=new it({props:{$$slots:{default:[Ng]},$$scope:{ctx:q}}}),Cs=new Pe({props:{name:"call",anchor:"transformers.TFLayoutLMForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1161",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Bo=new it({props:{$$slots:{default:[Og]},$$scope:{ctx:q}}}),Wo=new zt({props:{anchor:"transformers.TFLayoutLMForSequenceClassification.call.example",$$slots:{default:[Dg]},$$scope:{ctx:q}}}),Ps=new at({}),As=new Pe({props:{name:"class transformers.TFLayoutLMForTokenClassification",anchor:"transformers.TFLayoutLMForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1267"}}),Ko=new it({props:{$$slots:{default:[Ig]},$$scope:{ctx:q}}}),Is=new Pe({props:{name:"call",anchor:"transformers.TFLayoutLMForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1291",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Qo=new it({props:{$$slots:{default:[Sg]},$$scope:{ctx:q}}}),Ro=new zt({props:{anchor:"transformers.TFLayoutLMForTokenClassification.call.example",$$slots:{default:[Ug]},$$scope:{ctx:q}}}),Ss=new at({}),Us=new Pe({props:{name:"class transformers.TFLayoutLMForQuestionAnswering",anchor:"transformers.TFLayoutLMForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1396"}}),Xo=new it({props:{$$slots:{default:[Bg]},$$scope:{ctx:q}}}),Qs=new Pe({props:{name:"call",anchor:"transformers.TFLayoutLMForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLayoutLMForQuestionAnswering.call.bbox",description:`<strong>bbox</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding Boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings- 1]</code>.`,name:"bbox"},{anchor:"transformers.TFLayoutLMForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLayoutLMForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLayoutLMForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLayoutLMForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLayoutLMForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLayoutLMForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFLayoutLMForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFLayoutLMForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLayoutLMForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFLayoutLMForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1417",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMConfig"
>LayoutLMConfig</a>) and inputs.</p>
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
`}}),Yo=new it({props:{$$slots:{default:[Wg]},$$scope:{ctx:q}}}),Zo=new zt({props:{anchor:"transformers.TFLayoutLMForQuestionAnswering.call.example",$$slots:{default:[Hg]},$$scope:{ctx:q}}}),{c(){d=a("meta"),k=c(),f=a("h1"),_=a("a"),b=a("span"),L(l.$$.fragment),h=c(),E=a("span"),Te=o("LayoutLM"),ge=c(),B=a("a"),_e=c(),K=a("h2"),w=a("a"),ue=a("span"),L(I.$$.fragment),Me=c(),he=a("span"),Q=o("Overview"),ye=c(),ne=a("p"),R=o("The LayoutLM model was proposed in the paper "),re=a("a"),$e=o(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),V=o(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei, and
Ming Zhou. It\u2019s a simple but effective pretraining method of text and layout for document image understanding and
information extraction tasks, such as form understanding and receipt understanding. It obtains state-of-the-art results
on several downstream tasks:`),be=c(),oe=a("ul"),S=a("li"),je=o("form understanding: the "),ie=a("a"),se=o("FUNSD"),z=o(` dataset (a collection of 199 annotated
forms comprising more than 30,000 words).`),C=c(),le=a("li"),X=o("receipt understanding: the "),de=a("a"),xe=o("SROIE"),Y=o(` dataset (a collection of 626 receipts for
training and 347 receipts for testing).`),Fe=c(),ce=a("li"),P=o("document image classification: the "),pe=a("a"),Z=o("RVL-CDIP"),Ee=o(` dataset (a collection of
400,000 images belonging to one of 16 classes).`),ke=c(),W=a("p"),ze=o("The abstract from the paper is the following:"),we=c(),D=a("p"),me=a("em"),G=o(`Pre-training techniques have been verified successfully in a variety of NLP tasks in recent years. Despite the
widespread use of pretraining models for NLP applications, they almost exclusively focus on text-level manipulation,
while neglecting layout and style information that is vital for document image understanding. In this paper, we propose
the LayoutLM to jointly model interactions between text and layout information across scanned document images, which is
beneficial for a great number of real-world document image understanding tasks such as information extraction from
scanned documents. Furthermore, we also leverage image features to incorporate words\u2019 visual information into LayoutLM.
To the best of our knowledge, this is the first time that text and layout are jointly learned in a single framework for
document-level pretraining. It achieves new state-of-the-art results in several downstream tasks, including form
understanding (from 70.72 to 79.27), receipt understanding (from 94.02 to 95.24) and document image classification
(from 93.07 to 94.42).`),ve=c(),ee=a("p"),A=o("Tips:"),Le=c(),N=a("ul"),H=a("li"),qe=o("In addition to "),m=a("em"),v=o("input_ids"),Se=o(", "),te=a("a"),Ue=o("forward()"),Be=o(" also expects the input "),F=a("code"),We=o("bbox"),He=o(`, which are
the bounding boxes (i.e. 2D-positions) of the input tokens. These can be obtained using an external OCR engine such
as Google\u2019s `),Ae=a("a"),Ke=o("Tesseract"),Qe=o(" (there\u2019s a "),O=a("a"),J=o("Python wrapper"),Re=o(` available). Each bounding box should be in (x0, y0, x1, y1) format, where
(x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1) represents the
position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on a 0-1000
scale. To normalize, you can use the following function:`),De=c(),L(U.$$.fragment),Ie=c(),fe=a("p"),Ce=o("Here, "),Oe=a("code"),ae=o("width"),Ve=o(" and "),Ia=a("code"),bl=o("height"),kl=o(` correspond to the width and height of the original document in which the token
occurs. Those can be obtained using the Python Image Library (PIL) library for example, as follows:`),ii=c(),L(gn.$$.fragment),li=c(),Js=a("ul"),xt=a("li"),wl=o("For a demo which shows how to fine-tune "),ea=a("a"),vl=o("LayoutLMForTokenClassification"),Ll=o(" on the "),_n=a("a"),Tl=o("FUNSD dataset"),Ml=o(" (a collection of annotated forms), see "),yn=a("a"),$l=o("this notebook"),jl=o(`.
It includes an inference part, which shows how to use Google\u2019s Tesseract on a new document.`),di=c(),Ct=a("p"),xl=o("This model was contributed by "),bn=a("a"),Fl=o("liminghao1630"),El=o(`. The original code can be found
`),kn=a("a"),zl=o("here"),ql=o("."),ci=c(),Dt=a("h2"),uo=a("a"),Sa=a("span"),L(wn.$$.fragment),Cl=c(),Ua=a("span"),Pl=o("LayoutLMConfig"),pi=c(),lt=a("div"),L(vn.$$.fragment),Al=c(),It=a("p"),Nl=o("This is the configuration class to store the configuration of a "),ta=a("a"),Ol=o("LayoutLMModel"),Dl=o(`. It is used to instantiate a
LayoutLM model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the LayoutLM
`),Ln=a("a"),Il=o("microsoft/layoutlm-base-uncased"),Sl=o(" architecture."),Ul=c(),St=a("p"),Bl=o("Configuration objects inherit from "),oa=a("a"),Wl=o("BertConfig"),Hl=o(` and can be used to control the model outputs. Read the
documentation from `),na=a("a"),Kl=o("BertConfig"),Ql=o(" for more information."),Rl=c(),L(ho.$$.fragment),ui=c(),Ut=a("h2"),mo=a("a"),Ba=a("span"),L(Tn.$$.fragment),Vl=c(),Wa=a("span"),Xl=o("LayoutLMTokenizer"),hi=c(),dt=a("div"),L(Mn.$$.fragment),Yl=c(),Ha=a("p"),Zl=o("Constructs a LayoutLM tokenizer."),Gl=c(),fo=a("p"),sa=a("a"),Jl=o("LayoutLMTokenizer"),ed=o(" is identical to "),aa=a("a"),td=o("BertTokenizer"),od=o(` and runs end-to-end tokenization: punctuation splitting +
wordpiece.`),nd=c(),$n=a("p"),sd=o("Refer to superclass "),ra=a("a"),ad=o("BertTokenizer"),rd=o(" for usage examples and documentation concerning parameters."),mi=c(),Bt=a("h2"),go=a("a"),Ka=a("span"),L(jn.$$.fragment),id=c(),Qa=a("span"),ld=o("LayoutLMTokenizerFast"),fi=c(),ct=a("div"),L(xn.$$.fragment),dd=c(),Ra=a("p"),cd=o("Constructs a \u201CFast\u201D LayoutLMTokenizer."),pd=c(),_o=a("p"),ia=a("a"),ud=o("LayoutLMTokenizerFast"),hd=o(" is identical to "),la=a("a"),md=o("BertTokenizerFast"),fd=o(` and runs end-to-end tokenization: punctuation
splitting + wordpiece.`),gd=c(),Fn=a("p"),_d=o("Refer to superclass "),da=a("a"),yd=o("BertTokenizerFast"),bd=o(" for usage examples and documentation concerning parameters."),gi=c(),Wt=a("h2"),yo=a("a"),Va=a("span"),L(En.$$.fragment),kd=c(),Xa=a("span"),wd=o("LayoutLMModel"),_i=c(),pt=a("div"),L(zn.$$.fragment),vd=c(),qn=a("p"),Ld=o(`The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top.
The LayoutLM model was proposed in `),Cn=a("a"),Td=o(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),Md=o(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),$d=c(),Pn=a("p"),jd=o("This model is a PyTorch "),An=a("a"),xd=o("torch.nn.Module"),Fd=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ed=c(),mt=a("div"),L(Nn.$$.fragment),zd=c(),Ht=a("p"),qd=o("The "),ca=a("a"),Cd=o("LayoutLMModel"),Pd=o(" forward method, overrides the "),Ya=a("code"),Ad=o("__call__"),Nd=o(" special method."),Od=c(),L(bo.$$.fragment),Dd=c(),L(ko.$$.fragment),yi=c(),Kt=a("h2"),wo=a("a"),Za=a("span"),L(On.$$.fragment),Id=c(),Ga=a("span"),Sd=o("LayoutLMForMaskedLM"),bi=c(),ut=a("div"),L(Dn.$$.fragment),Ud=c(),Qt=a("p"),Bd=o("LayoutLM Model with a "),Ja=a("code"),Wd=o("language modeling"),Hd=o(` head on top.
The LayoutLM model was proposed in `),In=a("a"),Kd=o(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),Qd=o(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),Rd=c(),Sn=a("p"),Vd=o("This model is a PyTorch "),Un=a("a"),Xd=o("torch.nn.Module"),Yd=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Zd=c(),ft=a("div"),L(Bn.$$.fragment),Gd=c(),Rt=a("p"),Jd=o("The "),pa=a("a"),ec=o("LayoutLMForMaskedLM"),tc=o(" forward method, overrides the "),er=a("code"),oc=o("__call__"),nc=o(" special method."),sc=c(),L(vo.$$.fragment),ac=c(),L(Lo.$$.fragment),ki=c(),Vt=a("h2"),To=a("a"),tr=a("span"),L(Wn.$$.fragment),rc=c(),or=a("span"),ic=o("LayoutLMForSequenceClassification"),wi=c(),tt=a("div"),L(Hn.$$.fragment),lc=c(),Kn=a("p"),dc=o(`LayoutLM Model with a sequence classification head on top (a linear layer on top of the pooled output) e.g. for
document image classification tasks such as the `),Qn=a("a"),cc=o("RVL-CDIP"),pc=o(" dataset."),uc=c(),Rn=a("p"),hc=o("The LayoutLM model was proposed in "),Vn=a("a"),mc=o(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),fc=o(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),gc=c(),Xn=a("p"),_c=o("This model is a PyTorch "),Yn=a("a"),yc=o("torch.nn.Module"),bc=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),kc=c(),gt=a("div"),L(Zn.$$.fragment),wc=c(),Xt=a("p"),vc=o("The "),ua=a("a"),Lc=o("LayoutLMForSequenceClassification"),Tc=o(" forward method, overrides the "),nr=a("code"),Mc=o("__call__"),$c=o(" special method."),jc=c(),L(Mo.$$.fragment),xc=c(),L($o.$$.fragment),vi=c(),Yt=a("h2"),jo=a("a"),sr=a("span"),L(Gn.$$.fragment),Fc=c(),ar=a("span"),Ec=o("LayoutLMForTokenClassification"),Li=c(),ot=a("div"),L(Jn.$$.fragment),zc=c(),Zt=a("p"),qc=o(`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
sequence labeling (information extraction) tasks such as the `),es=a("a"),Cc=o("FUNSD"),Pc=o(`
dataset and the `),ts=a("a"),Ac=o("SROIE"),Nc=o(" dataset."),Oc=c(),os=a("p"),Dc=o("The LayoutLM model was proposed in "),ns=a("a"),Ic=o(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),Sc=o(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),Uc=c(),ss=a("p"),Bc=o("This model is a PyTorch "),as=a("a"),Wc=o("torch.nn.Module"),Hc=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Kc=c(),_t=a("div"),L(rs.$$.fragment),Qc=c(),Gt=a("p"),Rc=o("The "),ha=a("a"),Vc=o("LayoutLMForTokenClassification"),Xc=o(" forward method, overrides the "),rr=a("code"),Yc=o("__call__"),Zc=o(" special method."),Gc=c(),L(xo.$$.fragment),Jc=c(),L(Fo.$$.fragment),Ti=c(),Jt=a("h2"),Eo=a("a"),ir=a("span"),L(is.$$.fragment),ep=c(),lr=a("span"),tp=o("LayoutLMForQuestionAnswering"),Mi=c(),nt=a("div"),L(ls.$$.fragment),op=c(),Ft=a("p"),np=o(`LayoutLM Model with a span classification head on top for extractive question-answering tasks such as
`),ds=a("a"),sp=o("DocVQA"),ap=o(" (a linear layer on top of the final hidden-states output to compute "),dr=a("code"),rp=o("span start logits"),ip=o(" and "),cr=a("code"),lp=o("span end logits"),dp=o(")."),cp=c(),cs=a("p"),pp=o("The LayoutLM model was proposed in "),ps=a("a"),up=o(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),hp=o(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),mp=c(),us=a("p"),fp=o("This model is a PyTorch "),hs=a("a"),gp=o("torch.nn.Module"),_p=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),yp=c(),rt=a("div"),L(ms.$$.fragment),bp=c(),Ne=a("p"),kp=o("start_positions ("),pr=a("code"),wp=o("torch.LongTensor"),vp=o(" of shape "),ur=a("code"),Lp=o("(batch_size,)"),Tp=o(", "),hr=a("em"),Mp=o("optional"),$p=o(`):
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (`),mr=a("code"),jp=o("sequence_length"),xp=o(`). Position outside of the sequence
are not taken into account for computing the loss.
end_positions (`),fr=a("code"),Fp=o("torch.LongTensor"),Ep=o(" of shape "),gr=a("code"),zp=o("(batch_size,)"),qp=o(", "),_r=a("em"),Cp=o("optional"),Pp=o(`):
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (`),yr=a("code"),Ap=o("sequence_length"),Np=o(`). Position outside of the sequence
are not taken into account for computing the loss.`),Op=c(),br=a("p"),Dp=o("Example:"),Ip=c(),kr=a("p"),Sp=o(`In the example below, we prepare a question + context pair for the LayoutLM model. It will give us a prediction
of what it thinks the answer is (the span of the answer within the texts parsed from the image).`),Up=c(),L(zo.$$.fragment),$i=c(),eo=a("h2"),qo=a("a"),wr=a("span"),L(fs.$$.fragment),Bp=c(),vr=a("span"),Wp=o("TFLayoutLMModel"),ji=c(),Ye=a("div"),L(gs.$$.fragment),Hp=c(),Lr=a("p"),Kp=o("The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top."),Qp=c(),_s=a("p"),Rp=o("This model inherits from "),ma=a("a"),Vp=o("TFPreTrainedModel"),Xp=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yp=c(),ys=a("p"),Zp=o("This model is also a "),bs=a("a"),Gp=o("tf.keras.Model"),Jp=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),eu=c(),L(Co.$$.fragment),tu=c(),yt=a("div"),L(ks.$$.fragment),ou=c(),to=a("p"),nu=o("The "),fa=a("a"),su=o("TFLayoutLMModel"),au=o(" forward method, overrides the "),Tr=a("code"),ru=o("__call__"),iu=o(" special method."),lu=c(),L(Po.$$.fragment),du=c(),L(Ao.$$.fragment),xi=c(),oo=a("h2"),No=a("a"),Mr=a("span"),L(ws.$$.fragment),cu=c(),$r=a("span"),pu=o("TFLayoutLMForMaskedLM"),Fi=c(),Ze=a("div"),L(vs.$$.fragment),uu=c(),Ls=a("p"),hu=o("LayoutLM Model with a "),jr=a("code"),mu=o("language modeling"),fu=o(" head on top."),gu=c(),Ts=a("p"),_u=o("This model inherits from "),ga=a("a"),yu=o("TFPreTrainedModel"),bu=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ku=c(),Ms=a("p"),wu=o("This model is also a "),$s=a("a"),vu=o("tf.keras.Model"),Lu=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tu=c(),L(Oo.$$.fragment),Mu=c(),bt=a("div"),L(js.$$.fragment),$u=c(),no=a("p"),ju=o("The "),_a=a("a"),xu=o("TFLayoutLMForMaskedLM"),Fu=o(" forward method, overrides the "),xr=a("code"),Eu=o("__call__"),zu=o(" special method."),qu=c(),L(Do.$$.fragment),Cu=c(),L(Io.$$.fragment),Ei=c(),so=a("h2"),So=a("a"),Fr=a("span"),L(xs.$$.fragment),Pu=c(),Er=a("span"),Au=o("TFLayoutLMForSequenceClassification"),zi=c(),Ge=a("div"),L(Fs.$$.fragment),Nu=c(),zr=a("p"),Ou=o(`LayoutLM Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Du=c(),Es=a("p"),Iu=o("This model inherits from "),ya=a("a"),Su=o("TFPreTrainedModel"),Uu=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bu=c(),zs=a("p"),Wu=o("This model is also a "),qs=a("a"),Hu=o("tf.keras.Model"),Ku=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qu=c(),L(Uo.$$.fragment),Ru=c(),kt=a("div"),L(Cs.$$.fragment),Vu=c(),ao=a("p"),Xu=o("The "),ba=a("a"),Yu=o("TFLayoutLMForSequenceClassification"),Zu=o(" forward method, overrides the "),qr=a("code"),Gu=o("__call__"),Ju=o(" special method."),eh=c(),L(Bo.$$.fragment),th=c(),L(Wo.$$.fragment),qi=c(),ro=a("h2"),Ho=a("a"),Cr=a("span"),L(Ps.$$.fragment),oh=c(),Pr=a("span"),nh=o("TFLayoutLMForTokenClassification"),Ci=c(),Je=a("div"),L(As.$$.fragment),sh=c(),Ar=a("p"),ah=o(`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),rh=c(),Ns=a("p"),ih=o("This model inherits from "),ka=a("a"),lh=o("TFPreTrainedModel"),dh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ch=c(),Os=a("p"),ph=o("This model is also a "),Ds=a("a"),uh=o("tf.keras.Model"),hh=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mh=c(),L(Ko.$$.fragment),fh=c(),wt=a("div"),L(Is.$$.fragment),gh=c(),io=a("p"),_h=o("The "),wa=a("a"),yh=o("TFLayoutLMForTokenClassification"),bh=o(" forward method, overrides the "),Nr=a("code"),kh=o("__call__"),wh=o(" special method."),vh=c(),L(Qo.$$.fragment),Lh=c(),L(Ro.$$.fragment),Pi=c(),lo=a("h2"),Vo=a("a"),Or=a("span"),L(Ss.$$.fragment),Th=c(),Dr=a("span"),Mh=o("TFLayoutLMForQuestionAnswering"),Ai=c(),et=a("div"),L(Us.$$.fragment),$h=c(),Et=a("p"),jh=o(`LayoutLM Model with a span classification head on top for extractive question-answering tasks such as
`),Bs=a("a"),xh=o("DocVQA"),Fh=o(" (a linear layer on top of the final hidden-states output to compute "),Ir=a("code"),Eh=o("span start logits"),zh=o(" and "),Sr=a("code"),qh=o("span end logits"),Ch=o(")."),Ph=c(),Ws=a("p"),Ah=o("This model inherits from "),va=a("a"),Nh=o("TFPreTrainedModel"),Oh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dh=c(),Hs=a("p"),Ih=o("This model is also a "),Ks=a("a"),Sh=o("tf.keras.Model"),Uh=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bh=c(),L(Xo.$$.fragment),Wh=c(),vt=a("div"),L(Qs.$$.fragment),Hh=c(),co=a("p"),Kh=o("The "),La=a("a"),Qh=o("TFLayoutLMForQuestionAnswering"),Rh=o(" forward method, overrides the "),Ur=a("code"),Vh=o("__call__"),Xh=o(" special method."),Yh=c(),L(Yo.$$.fragment),Zh=c(),L(Zo.$$.fragment),this.h()},l(s){const y=yg('[data-svelte="svelte-1phssyn"]',document.head);d=r(y,"META",{name:!0,content:!0}),y.forEach(t),k=p(s),f=r(s,"H1",{class:!0});var Rs=i(f);_=r(Rs,"A",{id:!0,class:!0,href:!0});var Br=i(_);b=r(Br,"SPAN",{});var Wr=i(b);T(l.$$.fragment,Wr),Wr.forEach(t),Br.forEach(t),h=p(Rs),E=r(Rs,"SPAN",{});var Hr=i(E);Te=n(Hr,"LayoutLM"),Hr.forEach(t),Rs.forEach(t),ge=p(s),B=r(s,"A",{id:!0}),i(B).forEach(t),_e=p(s),K=r(s,"H2",{class:!0});var Vs=i(K);w=r(Vs,"A",{id:!0,class:!0,href:!0});var Kr=i(w);ue=r(Kr,"SPAN",{});var Qr=i(ue);T(I.$$.fragment,Qr),Qr.forEach(t),Kr.forEach(t),Me=p(Vs),he=r(Vs,"SPAN",{});var Rr=i(he);Q=n(Rr,"Overview"),Rr.forEach(t),Vs.forEach(t),ye=p(s),ne=r(s,"P",{});var Xs=i(ne);R=n(Xs,"The LayoutLM model was proposed in the paper "),re=r(Xs,"A",{href:!0,rel:!0});var Vr=i(re);$e=n(Vr,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),Vr.forEach(t),V=n(Xs,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei, and
Ming Zhou. It\u2019s a simple but effective pretraining method of text and layout for document image understanding and
information extraction tasks, such as form understanding and receipt understanding. It obtains state-of-the-art results
on several downstream tasks:`),Xs.forEach(t),be=p(s),oe=r(s,"UL",{});var po=i(oe);S=r(po,"LI",{});var Ys=i(S);je=n(Ys,"form understanding: the "),ie=r(Ys,"A",{href:!0,rel:!0});var Xr=i(ie);se=n(Xr,"FUNSD"),Xr.forEach(t),z=n(Ys,` dataset (a collection of 199 annotated
forms comprising more than 30,000 words).`),Ys.forEach(t),C=p(po),le=r(po,"LI",{});var Zs=i(le);X=n(Zs,"receipt understanding: the "),de=r(Zs,"A",{href:!0,rel:!0});var Yr=i(de);xe=n(Yr,"SROIE"),Yr.forEach(t),Y=n(Zs,` dataset (a collection of 626 receipts for
training and 347 receipts for testing).`),Zs.forEach(t),Fe=p(po),ce=r(po,"LI",{});var Gs=i(ce);P=n(Gs,"document image classification: the "),pe=r(Gs,"A",{href:!0,rel:!0});var Zr=i(pe);Z=n(Zr,"RVL-CDIP"),Zr.forEach(t),Ee=n(Gs,` dataset (a collection of
400,000 images belonging to one of 16 classes).`),Gs.forEach(t),po.forEach(t),ke=p(s),W=r(s,"P",{});var Gr=i(W);ze=n(Gr,"The abstract from the paper is the following:"),Gr.forEach(t),we=p(s),D=r(s,"P",{});var Jr=i(D);me=r(Jr,"EM",{});var ei=i(me);G=n(ei,`Pre-training techniques have been verified successfully in a variety of NLP tasks in recent years. Despite the
widespread use of pretraining models for NLP applications, they almost exclusively focus on text-level manipulation,
while neglecting layout and style information that is vital for document image understanding. In this paper, we propose
the LayoutLM to jointly model interactions between text and layout information across scanned document images, which is
beneficial for a great number of real-world document image understanding tasks such as information extraction from
scanned documents. Furthermore, we also leverage image features to incorporate words\u2019 visual information into LayoutLM.
To the best of our knowledge, this is the first time that text and layout are jointly learned in a single framework for
document-level pretraining. It achieves new state-of-the-art results in several downstream tasks, including form
understanding (from 70.72 to 79.27), receipt understanding (from 94.02 to 95.24) and document image classification
(from 93.07 to 94.42).`),ei.forEach(t),Jr.forEach(t),ve=p(s),ee=r(s,"P",{});var ti=i(ee);A=n(ti,"Tips:"),ti.forEach(t),Le=p(s),N=r(s,"UL",{});var oi=i(N);H=r(oi,"LI",{});var st=i(H);qe=n(st,"In addition to "),m=r(st,"EM",{});var ni=i(m);v=n(ni,"input_ids"),ni.forEach(t),Se=n(st,", "),te=r(st,"A",{href:!0});var si=i(te);Ue=n(si,"forward()"),si.forEach(t),Be=n(st," also expects the input "),F=r(st,"CODE",{});var Gh=i(F);We=n(Gh,"bbox"),Gh.forEach(t),He=n(st,`, which are
the bounding boxes (i.e. 2D-positions) of the input tokens. These can be obtained using an external OCR engine such
as Google\u2019s `),Ae=r(st,"A",{href:!0,rel:!0});var Jh=i(Ae);Ke=n(Jh,"Tesseract"),Jh.forEach(t),Qe=n(st," (there\u2019s a "),O=r(st,"A",{href:!0,rel:!0});var em=i(O);J=n(em,"Python wrapper"),em.forEach(t),Re=n(st,` available). Each bounding box should be in (x0, y0, x1, y1) format, where
(x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1) represents the
position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on a 0-1000
scale. To normalize, you can use the following function:`),st.forEach(t),oi.forEach(t),De=p(s),T(U.$$.fragment,s),Ie=p(s),fe=r(s,"P",{});var Ta=i(fe);Ce=n(Ta,"Here, "),Oe=r(Ta,"CODE",{});var tm=i(Oe);ae=n(tm,"width"),tm.forEach(t),Ve=n(Ta," and "),Ia=r(Ta,"CODE",{});var om=i(Ia);bl=n(om,"height"),om.forEach(t),kl=n(Ta,` correspond to the width and height of the original document in which the token
occurs. Those can be obtained using the Python Image Library (PIL) library for example, as follows:`),Ta.forEach(t),ii=p(s),T(gn.$$.fragment,s),li=p(s),Js=r(s,"UL",{});var nm=i(Js);xt=r(nm,"LI",{});var Go=i(xt);wl=n(Go,"For a demo which shows how to fine-tune "),ea=r(Go,"A",{href:!0});var sm=i(ea);vl=n(sm,"LayoutLMForTokenClassification"),sm.forEach(t),Ll=n(Go," on the "),_n=r(Go,"A",{href:!0,rel:!0});var am=i(_n);Tl=n(am,"FUNSD dataset"),am.forEach(t),Ml=n(Go," (a collection of annotated forms), see "),yn=r(Go,"A",{href:!0,rel:!0});var rm=i(yn);$l=n(rm,"this notebook"),rm.forEach(t),jl=n(Go,`.
It includes an inference part, which shows how to use Google\u2019s Tesseract on a new document.`),Go.forEach(t),nm.forEach(t),di=p(s),Ct=r(s,"P",{});var Ma=i(Ct);xl=n(Ma,"This model was contributed by "),bn=r(Ma,"A",{href:!0,rel:!0});var im=i(bn);Fl=n(im,"liminghao1630"),im.forEach(t),El=n(Ma,`. The original code can be found
`),kn=r(Ma,"A",{href:!0,rel:!0});var lm=i(kn);zl=n(lm,"here"),lm.forEach(t),ql=n(Ma,"."),Ma.forEach(t),ci=p(s),Dt=r(s,"H2",{class:!0});var Oi=i(Dt);uo=r(Oi,"A",{id:!0,class:!0,href:!0});var dm=i(uo);Sa=r(dm,"SPAN",{});var cm=i(Sa);T(wn.$$.fragment,cm),cm.forEach(t),dm.forEach(t),Cl=p(Oi),Ua=r(Oi,"SPAN",{});var pm=i(Ua);Pl=n(pm,"LayoutLMConfig"),pm.forEach(t),Oi.forEach(t),pi=p(s),lt=r(s,"DIV",{class:!0});var Jo=i(lt);T(vn.$$.fragment,Jo),Al=p(Jo),It=r(Jo,"P",{});var $a=i(It);Nl=n($a,"This is the configuration class to store the configuration of a "),ta=r($a,"A",{href:!0});var um=i(ta);Ol=n(um,"LayoutLMModel"),um.forEach(t),Dl=n($a,`. It is used to instantiate a
LayoutLM model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the LayoutLM
`),Ln=r($a,"A",{href:!0,rel:!0});var hm=i(Ln);Il=n(hm,"microsoft/layoutlm-base-uncased"),hm.forEach(t),Sl=n($a," architecture."),$a.forEach(t),Ul=p(Jo),St=r(Jo,"P",{});var ja=i(St);Bl=n(ja,"Configuration objects inherit from "),oa=r(ja,"A",{href:!0});var mm=i(oa);Wl=n(mm,"BertConfig"),mm.forEach(t),Hl=n(ja,` and can be used to control the model outputs. Read the
documentation from `),na=r(ja,"A",{href:!0});var fm=i(na);Kl=n(fm,"BertConfig"),fm.forEach(t),Ql=n(ja," for more information."),ja.forEach(t),Rl=p(Jo),T(ho.$$.fragment,Jo),Jo.forEach(t),ui=p(s),Ut=r(s,"H2",{class:!0});var Di=i(Ut);mo=r(Di,"A",{id:!0,class:!0,href:!0});var gm=i(mo);Ba=r(gm,"SPAN",{});var _m=i(Ba);T(Tn.$$.fragment,_m),_m.forEach(t),gm.forEach(t),Vl=p(Di),Wa=r(Di,"SPAN",{});var ym=i(Wa);Xl=n(ym,"LayoutLMTokenizer"),ym.forEach(t),Di.forEach(t),hi=p(s),dt=r(s,"DIV",{class:!0});var en=i(dt);T(Mn.$$.fragment,en),Yl=p(en),Ha=r(en,"P",{});var bm=i(Ha);Zl=n(bm,"Constructs a LayoutLM tokenizer."),bm.forEach(t),Gl=p(en),fo=r(en,"P",{});var ai=i(fo);sa=r(ai,"A",{href:!0});var km=i(sa);Jl=n(km,"LayoutLMTokenizer"),km.forEach(t),ed=n(ai," is identical to "),aa=r(ai,"A",{href:!0});var wm=i(aa);td=n(wm,"BertTokenizer"),wm.forEach(t),od=n(ai,` and runs end-to-end tokenization: punctuation splitting +
wordpiece.`),ai.forEach(t),nd=p(en),$n=r(en,"P",{});var Ii=i($n);sd=n(Ii,"Refer to superclass "),ra=r(Ii,"A",{href:!0});var vm=i(ra);ad=n(vm,"BertTokenizer"),vm.forEach(t),rd=n(Ii," for usage examples and documentation concerning parameters."),Ii.forEach(t),en.forEach(t),mi=p(s),Bt=r(s,"H2",{class:!0});var Si=i(Bt);go=r(Si,"A",{id:!0,class:!0,href:!0});var Lm=i(go);Ka=r(Lm,"SPAN",{});var Tm=i(Ka);T(jn.$$.fragment,Tm),Tm.forEach(t),Lm.forEach(t),id=p(Si),Qa=r(Si,"SPAN",{});var Mm=i(Qa);ld=n(Mm,"LayoutLMTokenizerFast"),Mm.forEach(t),Si.forEach(t),fi=p(s),ct=r(s,"DIV",{class:!0});var tn=i(ct);T(xn.$$.fragment,tn),dd=p(tn),Ra=r(tn,"P",{});var $m=i(Ra);cd=n($m,"Constructs a \u201CFast\u201D LayoutLMTokenizer."),$m.forEach(t),pd=p(tn),_o=r(tn,"P",{});var ri=i(_o);ia=r(ri,"A",{href:!0});var jm=i(ia);ud=n(jm,"LayoutLMTokenizerFast"),jm.forEach(t),hd=n(ri," is identical to "),la=r(ri,"A",{href:!0});var xm=i(la);md=n(xm,"BertTokenizerFast"),xm.forEach(t),fd=n(ri,` and runs end-to-end tokenization: punctuation
splitting + wordpiece.`),ri.forEach(t),gd=p(tn),Fn=r(tn,"P",{});var Ui=i(Fn);_d=n(Ui,"Refer to superclass "),da=r(Ui,"A",{href:!0});var Fm=i(da);yd=n(Fm,"BertTokenizerFast"),Fm.forEach(t),bd=n(Ui," for usage examples and documentation concerning parameters."),Ui.forEach(t),tn.forEach(t),gi=p(s),Wt=r(s,"H2",{class:!0});var Bi=i(Wt);yo=r(Bi,"A",{id:!0,class:!0,href:!0});var Em=i(yo);Va=r(Em,"SPAN",{});var zm=i(Va);T(En.$$.fragment,zm),zm.forEach(t),Em.forEach(t),kd=p(Bi),Xa=r(Bi,"SPAN",{});var qm=i(Xa);wd=n(qm,"LayoutLMModel"),qm.forEach(t),Bi.forEach(t),_i=p(s),pt=r(s,"DIV",{class:!0});var on=i(pt);T(zn.$$.fragment,on),vd=p(on),qn=r(on,"P",{});var Wi=i(qn);Ld=n(Wi,`The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top.
The LayoutLM model was proposed in `),Cn=r(Wi,"A",{href:!0,rel:!0});var Cm=i(Cn);Td=n(Cm,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),Cm.forEach(t),Md=n(Wi,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),Wi.forEach(t),$d=p(on),Pn=r(on,"P",{});var Hi=i(Pn);jd=n(Hi,"This model is a PyTorch "),An=r(Hi,"A",{href:!0,rel:!0});var Pm=i(An);xd=n(Pm,"torch.nn.Module"),Pm.forEach(t),Fd=n(Hi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Hi.forEach(t),Ed=p(on),mt=r(on,"DIV",{class:!0});var nn=i(mt);T(Nn.$$.fragment,nn),zd=p(nn),Ht=r(nn,"P",{});var xa=i(Ht);qd=n(xa,"The "),ca=r(xa,"A",{href:!0});var Am=i(ca);Cd=n(Am,"LayoutLMModel"),Am.forEach(t),Pd=n(xa," forward method, overrides the "),Ya=r(xa,"CODE",{});var Nm=i(Ya);Ad=n(Nm,"__call__"),Nm.forEach(t),Nd=n(xa," special method."),xa.forEach(t),Od=p(nn),T(bo.$$.fragment,nn),Dd=p(nn),T(ko.$$.fragment,nn),nn.forEach(t),on.forEach(t),yi=p(s),Kt=r(s,"H2",{class:!0});var Ki=i(Kt);wo=r(Ki,"A",{id:!0,class:!0,href:!0});var Om=i(wo);Za=r(Om,"SPAN",{});var Dm=i(Za);T(On.$$.fragment,Dm),Dm.forEach(t),Om.forEach(t),Id=p(Ki),Ga=r(Ki,"SPAN",{});var Im=i(Ga);Sd=n(Im,"LayoutLMForMaskedLM"),Im.forEach(t),Ki.forEach(t),bi=p(s),ut=r(s,"DIV",{class:!0});var sn=i(ut);T(Dn.$$.fragment,sn),Ud=p(sn),Qt=r(sn,"P",{});var Fa=i(Qt);Bd=n(Fa,"LayoutLM Model with a "),Ja=r(Fa,"CODE",{});var Sm=i(Ja);Wd=n(Sm,"language modeling"),Sm.forEach(t),Hd=n(Fa,` head on top.
The LayoutLM model was proposed in `),In=r(Fa,"A",{href:!0,rel:!0});var Um=i(In);Kd=n(Um,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),Um.forEach(t),Qd=n(Fa,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),Fa.forEach(t),Rd=p(sn),Sn=r(sn,"P",{});var Qi=i(Sn);Vd=n(Qi,"This model is a PyTorch "),Un=r(Qi,"A",{href:!0,rel:!0});var Bm=i(Un);Xd=n(Bm,"torch.nn.Module"),Bm.forEach(t),Yd=n(Qi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Qi.forEach(t),Zd=p(sn),ft=r(sn,"DIV",{class:!0});var an=i(ft);T(Bn.$$.fragment,an),Gd=p(an),Rt=r(an,"P",{});var Ea=i(Rt);Jd=n(Ea,"The "),pa=r(Ea,"A",{href:!0});var Wm=i(pa);ec=n(Wm,"LayoutLMForMaskedLM"),Wm.forEach(t),tc=n(Ea," forward method, overrides the "),er=r(Ea,"CODE",{});var Hm=i(er);oc=n(Hm,"__call__"),Hm.forEach(t),nc=n(Ea," special method."),Ea.forEach(t),sc=p(an),T(vo.$$.fragment,an),ac=p(an),T(Lo.$$.fragment,an),an.forEach(t),sn.forEach(t),ki=p(s),Vt=r(s,"H2",{class:!0});var Ri=i(Vt);To=r(Ri,"A",{id:!0,class:!0,href:!0});var Km=i(To);tr=r(Km,"SPAN",{});var Qm=i(tr);T(Wn.$$.fragment,Qm),Qm.forEach(t),Km.forEach(t),rc=p(Ri),or=r(Ri,"SPAN",{});var Rm=i(or);ic=n(Rm,"LayoutLMForSequenceClassification"),Rm.forEach(t),Ri.forEach(t),wi=p(s),tt=r(s,"DIV",{class:!0});var Pt=i(tt);T(Hn.$$.fragment,Pt),lc=p(Pt),Kn=r(Pt,"P",{});var Vi=i(Kn);dc=n(Vi,`LayoutLM Model with a sequence classification head on top (a linear layer on top of the pooled output) e.g. for
document image classification tasks such as the `),Qn=r(Vi,"A",{href:!0,rel:!0});var Vm=i(Qn);cc=n(Vm,"RVL-CDIP"),Vm.forEach(t),pc=n(Vi," dataset."),Vi.forEach(t),uc=p(Pt),Rn=r(Pt,"P",{});var Xi=i(Rn);hc=n(Xi,"The LayoutLM model was proposed in "),Vn=r(Xi,"A",{href:!0,rel:!0});var Xm=i(Vn);mc=n(Xm,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),Xm.forEach(t),fc=n(Xi,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),Xi.forEach(t),gc=p(Pt),Xn=r(Pt,"P",{});var Yi=i(Xn);_c=n(Yi,"This model is a PyTorch "),Yn=r(Yi,"A",{href:!0,rel:!0});var Ym=i(Yn);yc=n(Ym,"torch.nn.Module"),Ym.forEach(t),bc=n(Yi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Yi.forEach(t),kc=p(Pt),gt=r(Pt,"DIV",{class:!0});var rn=i(gt);T(Zn.$$.fragment,rn),wc=p(rn),Xt=r(rn,"P",{});var za=i(Xt);vc=n(za,"The "),ua=r(za,"A",{href:!0});var Zm=i(ua);Lc=n(Zm,"LayoutLMForSequenceClassification"),Zm.forEach(t),Tc=n(za," forward method, overrides the "),nr=r(za,"CODE",{});var Gm=i(nr);Mc=n(Gm,"__call__"),Gm.forEach(t),$c=n(za," special method."),za.forEach(t),jc=p(rn),T(Mo.$$.fragment,rn),xc=p(rn),T($o.$$.fragment,rn),rn.forEach(t),Pt.forEach(t),vi=p(s),Yt=r(s,"H2",{class:!0});var Zi=i(Yt);jo=r(Zi,"A",{id:!0,class:!0,href:!0});var Jm=i(jo);sr=r(Jm,"SPAN",{});var ef=i(sr);T(Gn.$$.fragment,ef),ef.forEach(t),Jm.forEach(t),Fc=p(Zi),ar=r(Zi,"SPAN",{});var tf=i(ar);Ec=n(tf,"LayoutLMForTokenClassification"),tf.forEach(t),Zi.forEach(t),Li=p(s),ot=r(s,"DIV",{class:!0});var At=i(ot);T(Jn.$$.fragment,At),zc=p(At),Zt=r(At,"P",{});var qa=i(Zt);qc=n(qa,`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
sequence labeling (information extraction) tasks such as the `),es=r(qa,"A",{href:!0,rel:!0});var of=i(es);Cc=n(of,"FUNSD"),of.forEach(t),Pc=n(qa,`
dataset and the `),ts=r(qa,"A",{href:!0,rel:!0});var nf=i(ts);Ac=n(nf,"SROIE"),nf.forEach(t),Nc=n(qa," dataset."),qa.forEach(t),Oc=p(At),os=r(At,"P",{});var Gi=i(os);Dc=n(Gi,"The LayoutLM model was proposed in "),ns=r(Gi,"A",{href:!0,rel:!0});var sf=i(ns);Ic=n(sf,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),sf.forEach(t),Sc=n(Gi,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),Gi.forEach(t),Uc=p(At),ss=r(At,"P",{});var Ji=i(ss);Bc=n(Ji,"This model is a PyTorch "),as=r(Ji,"A",{href:!0,rel:!0});var af=i(as);Wc=n(af,"torch.nn.Module"),af.forEach(t),Hc=n(Ji,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ji.forEach(t),Kc=p(At),_t=r(At,"DIV",{class:!0});var ln=i(_t);T(rs.$$.fragment,ln),Qc=p(ln),Gt=r(ln,"P",{});var Ca=i(Gt);Rc=n(Ca,"The "),ha=r(Ca,"A",{href:!0});var rf=i(ha);Vc=n(rf,"LayoutLMForTokenClassification"),rf.forEach(t),Xc=n(Ca," forward method, overrides the "),rr=r(Ca,"CODE",{});var lf=i(rr);Yc=n(lf,"__call__"),lf.forEach(t),Zc=n(Ca," special method."),Ca.forEach(t),Gc=p(ln),T(xo.$$.fragment,ln),Jc=p(ln),T(Fo.$$.fragment,ln),ln.forEach(t),At.forEach(t),Ti=p(s),Jt=r(s,"H2",{class:!0});var el=i(Jt);Eo=r(el,"A",{id:!0,class:!0,href:!0});var df=i(Eo);ir=r(df,"SPAN",{});var cf=i(ir);T(is.$$.fragment,cf),cf.forEach(t),df.forEach(t),ep=p(el),lr=r(el,"SPAN",{});var pf=i(lr);tp=n(pf,"LayoutLMForQuestionAnswering"),pf.forEach(t),el.forEach(t),Mi=p(s),nt=r(s,"DIV",{class:!0});var Nt=i(nt);T(ls.$$.fragment,Nt),op=p(Nt),Ft=r(Nt,"P",{});var dn=i(Ft);np=n(dn,`LayoutLM Model with a span classification head on top for extractive question-answering tasks such as
`),ds=r(dn,"A",{href:!0,rel:!0});var uf=i(ds);sp=n(uf,"DocVQA"),uf.forEach(t),ap=n(dn," (a linear layer on top of the final hidden-states output to compute "),dr=r(dn,"CODE",{});var hf=i(dr);rp=n(hf,"span start logits"),hf.forEach(t),ip=n(dn," and "),cr=r(dn,"CODE",{});var mf=i(cr);lp=n(mf,"span end logits"),mf.forEach(t),dp=n(dn,")."),dn.forEach(t),cp=p(Nt),cs=r(Nt,"P",{});var tl=i(cs);pp=n(tl,"The LayoutLM model was proposed in "),ps=r(tl,"A",{href:!0,rel:!0});var ff=i(ps);up=n(ff,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),ff.forEach(t),hp=n(tl,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),tl.forEach(t),mp=p(Nt),us=r(Nt,"P",{});var ol=i(us);fp=n(ol,"This model is a PyTorch "),hs=r(ol,"A",{href:!0,rel:!0});var gf=i(hs);gp=n(gf,"torch.nn.Module"),gf.forEach(t),_p=n(ol,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ol.forEach(t),yp=p(Nt),rt=r(Nt,"DIV",{class:!0});var Ot=i(rt);T(ms.$$.fragment,Ot),bp=p(Ot),Ne=r(Ot,"P",{});var Xe=i(Ne);kp=n(Xe,"start_positions ("),pr=r(Xe,"CODE",{});var _f=i(pr);wp=n(_f,"torch.LongTensor"),_f.forEach(t),vp=n(Xe," of shape "),ur=r(Xe,"CODE",{});var yf=i(ur);Lp=n(yf,"(batch_size,)"),yf.forEach(t),Tp=n(Xe,", "),hr=r(Xe,"EM",{});var bf=i(hr);Mp=n(bf,"optional"),bf.forEach(t),$p=n(Xe,`):
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (`),mr=r(Xe,"CODE",{});var kf=i(mr);jp=n(kf,"sequence_length"),kf.forEach(t),xp=n(Xe,`). Position outside of the sequence
are not taken into account for computing the loss.
end_positions (`),fr=r(Xe,"CODE",{});var wf=i(fr);Fp=n(wf,"torch.LongTensor"),wf.forEach(t),Ep=n(Xe," of shape "),gr=r(Xe,"CODE",{});var vf=i(gr);zp=n(vf,"(batch_size,)"),vf.forEach(t),qp=n(Xe,", "),_r=r(Xe,"EM",{});var Lf=i(_r);Cp=n(Lf,"optional"),Lf.forEach(t),Pp=n(Xe,`):
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (`),yr=r(Xe,"CODE",{});var Tf=i(yr);Ap=n(Tf,"sequence_length"),Tf.forEach(t),Np=n(Xe,`). Position outside of the sequence
are not taken into account for computing the loss.`),Xe.forEach(t),Op=p(Ot),br=r(Ot,"P",{});var Mf=i(br);Dp=n(Mf,"Example:"),Mf.forEach(t),Ip=p(Ot),kr=r(Ot,"P",{});var $f=i(kr);Sp=n($f,`In the example below, we prepare a question + context pair for the LayoutLM model. It will give us a prediction
of what it thinks the answer is (the span of the answer within the texts parsed from the image).`),$f.forEach(t),Up=p(Ot),T(zo.$$.fragment,Ot),Ot.forEach(t),Nt.forEach(t),$i=p(s),eo=r(s,"H2",{class:!0});var nl=i(eo);qo=r(nl,"A",{id:!0,class:!0,href:!0});var jf=i(qo);wr=r(jf,"SPAN",{});var xf=i(wr);T(fs.$$.fragment,xf),xf.forEach(t),jf.forEach(t),Bp=p(nl),vr=r(nl,"SPAN",{});var Ff=i(vr);Wp=n(Ff,"TFLayoutLMModel"),Ff.forEach(t),nl.forEach(t),ji=p(s),Ye=r(s,"DIV",{class:!0});var Lt=i(Ye);T(gs.$$.fragment,Lt),Hp=p(Lt),Lr=r(Lt,"P",{});var Ef=i(Lr);Kp=n(Ef,"The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top."),Ef.forEach(t),Qp=p(Lt),_s=r(Lt,"P",{});var sl=i(_s);Rp=n(sl,"This model inherits from "),ma=r(sl,"A",{href:!0});var zf=i(ma);Vp=n(zf,"TFPreTrainedModel"),zf.forEach(t),Xp=n(sl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sl.forEach(t),Yp=p(Lt),ys=r(Lt,"P",{});var al=i(ys);Zp=n(al,"This model is also a "),bs=r(al,"A",{href:!0,rel:!0});var qf=i(bs);Gp=n(qf,"tf.keras.Model"),qf.forEach(t),Jp=n(al,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),al.forEach(t),eu=p(Lt),T(Co.$$.fragment,Lt),tu=p(Lt),yt=r(Lt,"DIV",{class:!0});var cn=i(yt);T(ks.$$.fragment,cn),ou=p(cn),to=r(cn,"P",{});var Pa=i(to);nu=n(Pa,"The "),fa=r(Pa,"A",{href:!0});var Cf=i(fa);su=n(Cf,"TFLayoutLMModel"),Cf.forEach(t),au=n(Pa," forward method, overrides the "),Tr=r(Pa,"CODE",{});var Pf=i(Tr);ru=n(Pf,"__call__"),Pf.forEach(t),iu=n(Pa," special method."),Pa.forEach(t),lu=p(cn),T(Po.$$.fragment,cn),du=p(cn),T(Ao.$$.fragment,cn),cn.forEach(t),Lt.forEach(t),xi=p(s),oo=r(s,"H2",{class:!0});var rl=i(oo);No=r(rl,"A",{id:!0,class:!0,href:!0});var Af=i(No);Mr=r(Af,"SPAN",{});var Nf=i(Mr);T(ws.$$.fragment,Nf),Nf.forEach(t),Af.forEach(t),cu=p(rl),$r=r(rl,"SPAN",{});var Of=i($r);pu=n(Of,"TFLayoutLMForMaskedLM"),Of.forEach(t),rl.forEach(t),Fi=p(s),Ze=r(s,"DIV",{class:!0});var Tt=i(Ze);T(vs.$$.fragment,Tt),uu=p(Tt),Ls=r(Tt,"P",{});var il=i(Ls);hu=n(il,"LayoutLM Model with a "),jr=r(il,"CODE",{});var Df=i(jr);mu=n(Df,"language modeling"),Df.forEach(t),fu=n(il," head on top."),il.forEach(t),gu=p(Tt),Ts=r(Tt,"P",{});var ll=i(Ts);_u=n(ll,"This model inherits from "),ga=r(ll,"A",{href:!0});var If=i(ga);yu=n(If,"TFPreTrainedModel"),If.forEach(t),bu=n(ll,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ll.forEach(t),ku=p(Tt),Ms=r(Tt,"P",{});var dl=i(Ms);wu=n(dl,"This model is also a "),$s=r(dl,"A",{href:!0,rel:!0});var Sf=i($s);vu=n(Sf,"tf.keras.Model"),Sf.forEach(t),Lu=n(dl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dl.forEach(t),Tu=p(Tt),T(Oo.$$.fragment,Tt),Mu=p(Tt),bt=r(Tt,"DIV",{class:!0});var pn=i(bt);T(js.$$.fragment,pn),$u=p(pn),no=r(pn,"P",{});var Aa=i(no);ju=n(Aa,"The "),_a=r(Aa,"A",{href:!0});var Uf=i(_a);xu=n(Uf,"TFLayoutLMForMaskedLM"),Uf.forEach(t),Fu=n(Aa," forward method, overrides the "),xr=r(Aa,"CODE",{});var Bf=i(xr);Eu=n(Bf,"__call__"),Bf.forEach(t),zu=n(Aa," special method."),Aa.forEach(t),qu=p(pn),T(Do.$$.fragment,pn),Cu=p(pn),T(Io.$$.fragment,pn),pn.forEach(t),Tt.forEach(t),Ei=p(s),so=r(s,"H2",{class:!0});var cl=i(so);So=r(cl,"A",{id:!0,class:!0,href:!0});var Wf=i(So);Fr=r(Wf,"SPAN",{});var Hf=i(Fr);T(xs.$$.fragment,Hf),Hf.forEach(t),Wf.forEach(t),Pu=p(cl),Er=r(cl,"SPAN",{});var Kf=i(Er);Au=n(Kf,"TFLayoutLMForSequenceClassification"),Kf.forEach(t),cl.forEach(t),zi=p(s),Ge=r(s,"DIV",{class:!0});var Mt=i(Ge);T(Fs.$$.fragment,Mt),Nu=p(Mt),zr=r(Mt,"P",{});var Qf=i(zr);Ou=n(Qf,`LayoutLM Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Qf.forEach(t),Du=p(Mt),Es=r(Mt,"P",{});var pl=i(Es);Iu=n(pl,"This model inherits from "),ya=r(pl,"A",{href:!0});var Rf=i(ya);Su=n(Rf,"TFPreTrainedModel"),Rf.forEach(t),Uu=n(pl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pl.forEach(t),Bu=p(Mt),zs=r(Mt,"P",{});var ul=i(zs);Wu=n(ul,"This model is also a "),qs=r(ul,"A",{href:!0,rel:!0});var Vf=i(qs);Hu=n(Vf,"tf.keras.Model"),Vf.forEach(t),Ku=n(ul,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ul.forEach(t),Qu=p(Mt),T(Uo.$$.fragment,Mt),Ru=p(Mt),kt=r(Mt,"DIV",{class:!0});var un=i(kt);T(Cs.$$.fragment,un),Vu=p(un),ao=r(un,"P",{});var Na=i(ao);Xu=n(Na,"The "),ba=r(Na,"A",{href:!0});var Xf=i(ba);Yu=n(Xf,"TFLayoutLMForSequenceClassification"),Xf.forEach(t),Zu=n(Na," forward method, overrides the "),qr=r(Na,"CODE",{});var Yf=i(qr);Gu=n(Yf,"__call__"),Yf.forEach(t),Ju=n(Na," special method."),Na.forEach(t),eh=p(un),T(Bo.$$.fragment,un),th=p(un),T(Wo.$$.fragment,un),un.forEach(t),Mt.forEach(t),qi=p(s),ro=r(s,"H2",{class:!0});var hl=i(ro);Ho=r(hl,"A",{id:!0,class:!0,href:!0});var Zf=i(Ho);Cr=r(Zf,"SPAN",{});var Gf=i(Cr);T(Ps.$$.fragment,Gf),Gf.forEach(t),Zf.forEach(t),oh=p(hl),Pr=r(hl,"SPAN",{});var Jf=i(Pr);nh=n(Jf,"TFLayoutLMForTokenClassification"),Jf.forEach(t),hl.forEach(t),Ci=p(s),Je=r(s,"DIV",{class:!0});var $t=i(Je);T(As.$$.fragment,$t),sh=p($t),Ar=r($t,"P",{});var eg=i(Ar);ah=n(eg,`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),eg.forEach(t),rh=p($t),Ns=r($t,"P",{});var ml=i(Ns);ih=n(ml,"This model inherits from "),ka=r(ml,"A",{href:!0});var tg=i(ka);lh=n(tg,"TFPreTrainedModel"),tg.forEach(t),dh=n(ml,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ml.forEach(t),ch=p($t),Os=r($t,"P",{});var fl=i(Os);ph=n(fl,"This model is also a "),Ds=r(fl,"A",{href:!0,rel:!0});var og=i(Ds);uh=n(og,"tf.keras.Model"),og.forEach(t),hh=n(fl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fl.forEach(t),mh=p($t),T(Ko.$$.fragment,$t),fh=p($t),wt=r($t,"DIV",{class:!0});var hn=i(wt);T(Is.$$.fragment,hn),gh=p(hn),io=r(hn,"P",{});var Oa=i(io);_h=n(Oa,"The "),wa=r(Oa,"A",{href:!0});var ng=i(wa);yh=n(ng,"TFLayoutLMForTokenClassification"),ng.forEach(t),bh=n(Oa," forward method, overrides the "),Nr=r(Oa,"CODE",{});var sg=i(Nr);kh=n(sg,"__call__"),sg.forEach(t),wh=n(Oa," special method."),Oa.forEach(t),vh=p(hn),T(Qo.$$.fragment,hn),Lh=p(hn),T(Ro.$$.fragment,hn),hn.forEach(t),$t.forEach(t),Pi=p(s),lo=r(s,"H2",{class:!0});var gl=i(lo);Vo=r(gl,"A",{id:!0,class:!0,href:!0});var ag=i(Vo);Or=r(ag,"SPAN",{});var rg=i(Or);T(Ss.$$.fragment,rg),rg.forEach(t),ag.forEach(t),Th=p(gl),Dr=r(gl,"SPAN",{});var ig=i(Dr);Mh=n(ig,"TFLayoutLMForQuestionAnswering"),ig.forEach(t),gl.forEach(t),Ai=p(s),et=r(s,"DIV",{class:!0});var jt=i(et);T(Us.$$.fragment,jt),$h=p(jt),Et=r(jt,"P",{});var mn=i(Et);jh=n(mn,`LayoutLM Model with a span classification head on top for extractive question-answering tasks such as
`),Bs=r(mn,"A",{href:!0,rel:!0});var lg=i(Bs);xh=n(lg,"DocVQA"),lg.forEach(t),Fh=n(mn," (a linear layer on top of the final hidden-states output to compute "),Ir=r(mn,"CODE",{});var dg=i(Ir);Eh=n(dg,"span start logits"),dg.forEach(t),zh=n(mn," and "),Sr=r(mn,"CODE",{});var cg=i(Sr);qh=n(cg,"span end logits"),cg.forEach(t),Ch=n(mn,")."),mn.forEach(t),Ph=p(jt),Ws=r(jt,"P",{});var _l=i(Ws);Ah=n(_l,"This model inherits from "),va=r(_l,"A",{href:!0});var pg=i(va);Nh=n(pg,"TFPreTrainedModel"),pg.forEach(t),Oh=n(_l,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_l.forEach(t),Dh=p(jt),Hs=r(jt,"P",{});var yl=i(Hs);Ih=n(yl,"This model is also a "),Ks=r(yl,"A",{href:!0,rel:!0});var ug=i(Ks);Sh=n(ug,"tf.keras.Model"),ug.forEach(t),Uh=n(yl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yl.forEach(t),Bh=p(jt),T(Xo.$$.fragment,jt),Wh=p(jt),vt=r(jt,"DIV",{class:!0});var fn=i(vt);T(Qs.$$.fragment,fn),Hh=p(fn),co=r(fn,"P",{});var Da=i(co);Kh=n(Da,"The "),La=r(Da,"A",{href:!0});var hg=i(La);Qh=n(hg,"TFLayoutLMForQuestionAnswering"),hg.forEach(t),Rh=n(Da," forward method, overrides the "),Ur=r(Da,"CODE",{});var mg=i(Ur);Vh=n(mg,"__call__"),mg.forEach(t),Xh=n(Da," special method."),Da.forEach(t),Yh=p(fn),T(Yo.$$.fragment,fn),Zh=p(fn),T(Zo.$$.fragment,fn),fn.forEach(t),jt.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(Qg)),u(_,"id","layoutlm"),u(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_,"href","#layoutlm"),u(f,"class","relative group"),u(B,"id","Overview"),u(w,"id","overview"),u(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(w,"href","#overview"),u(K,"class","relative group"),u(re,"href","https://arxiv.org/abs/1912.13318"),u(re,"rel","nofollow"),u(ie,"href","https://guillaumejaume.github.io/FUNSD/"),u(ie,"rel","nofollow"),u(de,"href","https://rrc.cvc.uab.es/?ch=13"),u(de,"rel","nofollow"),u(pe,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),u(pe,"rel","nofollow"),u(te,"href","/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMModel.forward"),u(Ae,"href","https://github.com/tesseract-ocr/tesseract"),u(Ae,"rel","nofollow"),u(O,"href","https://pypi.org/project/pytesseract/"),u(O,"rel","nofollow"),u(ea,"href","/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMForTokenClassification"),u(_n,"href","https://guillaumejaume.github.io/FUNSD/"),u(_n,"rel","nofollow"),u(yn,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/LayoutLM/Fine_tuning_LayoutLMForTokenClassification_on_FUNSD.ipynb"),u(yn,"rel","nofollow"),u(bn,"href","https://huggingface.co/liminghao1630"),u(bn,"rel","nofollow"),u(kn,"href","https://github.com/microsoft/unilm/tree/master/layoutlm"),u(kn,"rel","nofollow"),u(uo,"id","transformers.LayoutLMConfig"),u(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(uo,"href","#transformers.LayoutLMConfig"),u(Dt,"class","relative group"),u(ta,"href","/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMModel"),u(Ln,"href","https://huggingface.co/microsoft/layoutlm-base-uncased"),u(Ln,"rel","nofollow"),u(oa,"href","/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertConfig"),u(na,"href","/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertConfig"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mo,"id","transformers.LayoutLMTokenizer"),u(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(mo,"href","#transformers.LayoutLMTokenizer"),u(Ut,"class","relative group"),u(sa,"href","/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMTokenizer"),u(aa,"href","/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer"),u(ra,"href","/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(go,"id","transformers.LayoutLMTokenizerFast"),u(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(go,"href","#transformers.LayoutLMTokenizerFast"),u(Bt,"class","relative group"),u(ia,"href","/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMTokenizerFast"),u(la,"href","/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizerFast"),u(da,"href","/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizerFast"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(yo,"id","transformers.LayoutLMModel"),u(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(yo,"href","#transformers.LayoutLMModel"),u(Wt,"class","relative group"),u(Cn,"href","https://arxiv.org/abs/1912.13318"),u(Cn,"rel","nofollow"),u(An,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(An,"rel","nofollow"),u(ca,"href","/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMModel"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wo,"id","transformers.LayoutLMForMaskedLM"),u(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(wo,"href","#transformers.LayoutLMForMaskedLM"),u(Kt,"class","relative group"),u(In,"href","https://arxiv.org/abs/1912.13318"),u(In,"rel","nofollow"),u(Un,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Un,"rel","nofollow"),u(pa,"href","/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMForMaskedLM"),u(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(To,"id","transformers.LayoutLMForSequenceClassification"),u(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(To,"href","#transformers.LayoutLMForSequenceClassification"),u(Vt,"class","relative group"),u(Qn,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),u(Qn,"rel","nofollow"),u(Vn,"href","https://arxiv.org/abs/1912.13318"),u(Vn,"rel","nofollow"),u(Yn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Yn,"rel","nofollow"),u(ua,"href","/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMForSequenceClassification"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(jo,"id","transformers.LayoutLMForTokenClassification"),u(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(jo,"href","#transformers.LayoutLMForTokenClassification"),u(Yt,"class","relative group"),u(es,"href","https://guillaumejaume.github.io/FUNSD/"),u(es,"rel","nofollow"),u(ts,"href","https://rrc.cvc.uab.es/?ch=13"),u(ts,"rel","nofollow"),u(ns,"href","https://arxiv.org/abs/1912.13318"),u(ns,"rel","nofollow"),u(as,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(as,"rel","nofollow"),u(ha,"href","/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.LayoutLMForTokenClassification"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Eo,"id","transformers.LayoutLMForQuestionAnswering"),u(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Eo,"href","#transformers.LayoutLMForQuestionAnswering"),u(Jt,"class","relative group"),u(ds,"href","https://rrc.cvc.uab.es/?ch=17"),u(ds,"rel","nofollow"),u(ps,"href","https://arxiv.org/abs/1912.13318"),u(ps,"rel","nofollow"),u(hs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(hs,"rel","nofollow"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qo,"id","transformers.TFLayoutLMModel"),u(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(qo,"href","#transformers.TFLayoutLMModel"),u(eo,"class","relative group"),u(ma,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),u(bs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(bs,"rel","nofollow"),u(fa,"href","/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.TFLayoutLMModel"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(No,"id","transformers.TFLayoutLMForMaskedLM"),u(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(No,"href","#transformers.TFLayoutLMForMaskedLM"),u(oo,"class","relative group"),u(ga,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),u($s,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u($s,"rel","nofollow"),u(_a,"href","/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.TFLayoutLMForMaskedLM"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(So,"id","transformers.TFLayoutLMForSequenceClassification"),u(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(So,"href","#transformers.TFLayoutLMForSequenceClassification"),u(so,"class","relative group"),u(ya,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),u(qs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(qs,"rel","nofollow"),u(ba,"href","/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.TFLayoutLMForSequenceClassification"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ho,"id","transformers.TFLayoutLMForTokenClassification"),u(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ho,"href","#transformers.TFLayoutLMForTokenClassification"),u(ro,"class","relative group"),u(ka,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ds,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ds,"rel","nofollow"),u(wa,"href","/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.TFLayoutLMForTokenClassification"),u(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vo,"id","transformers.TFLayoutLMForQuestionAnswering"),u(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Vo,"href","#transformers.TFLayoutLMForQuestionAnswering"),u(lo,"class","relative group"),u(Bs,"href","https://rrc.cvc.uab.es/?ch=17"),u(Bs,"rel","nofollow"),u(va,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ks,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ks,"rel","nofollow"),u(La,"href","/docs/transformers/v4.22.2/en/model_doc/layoutlm#transformers.TFLayoutLMForQuestionAnswering"),u(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,y){e(document.head,d),g(s,k,y),g(s,f,y),e(f,_),e(_,b),M(l,b,null),e(f,h),e(f,E),e(E,Te),g(s,ge,y),g(s,B,y),g(s,_e,y),g(s,K,y),e(K,w),e(w,ue),M(I,ue,null),e(K,Me),e(K,he),e(he,Q),g(s,ye,y),g(s,ne,y),e(ne,R),e(ne,re),e(re,$e),e(ne,V),g(s,be,y),g(s,oe,y),e(oe,S),e(S,je),e(S,ie),e(ie,se),e(S,z),e(oe,C),e(oe,le),e(le,X),e(le,de),e(de,xe),e(le,Y),e(oe,Fe),e(oe,ce),e(ce,P),e(ce,pe),e(pe,Z),e(ce,Ee),g(s,ke,y),g(s,W,y),e(W,ze),g(s,we,y),g(s,D,y),e(D,me),e(me,G),g(s,ve,y),g(s,ee,y),e(ee,A),g(s,Le,y),g(s,N,y),e(N,H),e(H,qe),e(H,m),e(m,v),e(H,Se),e(H,te),e(te,Ue),e(H,Be),e(H,F),e(F,We),e(H,He),e(H,Ae),e(Ae,Ke),e(H,Qe),e(H,O),e(O,J),e(H,Re),g(s,De,y),M(U,s,y),g(s,Ie,y),g(s,fe,y),e(fe,Ce),e(fe,Oe),e(Oe,ae),e(fe,Ve),e(fe,Ia),e(Ia,bl),e(fe,kl),g(s,ii,y),M(gn,s,y),g(s,li,y),g(s,Js,y),e(Js,xt),e(xt,wl),e(xt,ea),e(ea,vl),e(xt,Ll),e(xt,_n),e(_n,Tl),e(xt,Ml),e(xt,yn),e(yn,$l),e(xt,jl),g(s,di,y),g(s,Ct,y),e(Ct,xl),e(Ct,bn),e(bn,Fl),e(Ct,El),e(Ct,kn),e(kn,zl),e(Ct,ql),g(s,ci,y),g(s,Dt,y),e(Dt,uo),e(uo,Sa),M(wn,Sa,null),e(Dt,Cl),e(Dt,Ua),e(Ua,Pl),g(s,pi,y),g(s,lt,y),M(vn,lt,null),e(lt,Al),e(lt,It),e(It,Nl),e(It,ta),e(ta,Ol),e(It,Dl),e(It,Ln),e(Ln,Il),e(It,Sl),e(lt,Ul),e(lt,St),e(St,Bl),e(St,oa),e(oa,Wl),e(St,Hl),e(St,na),e(na,Kl),e(St,Ql),e(lt,Rl),M(ho,lt,null),g(s,ui,y),g(s,Ut,y),e(Ut,mo),e(mo,Ba),M(Tn,Ba,null),e(Ut,Vl),e(Ut,Wa),e(Wa,Xl),g(s,hi,y),g(s,dt,y),M(Mn,dt,null),e(dt,Yl),e(dt,Ha),e(Ha,Zl),e(dt,Gl),e(dt,fo),e(fo,sa),e(sa,Jl),e(fo,ed),e(fo,aa),e(aa,td),e(fo,od),e(dt,nd),e(dt,$n),e($n,sd),e($n,ra),e(ra,ad),e($n,rd),g(s,mi,y),g(s,Bt,y),e(Bt,go),e(go,Ka),M(jn,Ka,null),e(Bt,id),e(Bt,Qa),e(Qa,ld),g(s,fi,y),g(s,ct,y),M(xn,ct,null),e(ct,dd),e(ct,Ra),e(Ra,cd),e(ct,pd),e(ct,_o),e(_o,ia),e(ia,ud),e(_o,hd),e(_o,la),e(la,md),e(_o,fd),e(ct,gd),e(ct,Fn),e(Fn,_d),e(Fn,da),e(da,yd),e(Fn,bd),g(s,gi,y),g(s,Wt,y),e(Wt,yo),e(yo,Va),M(En,Va,null),e(Wt,kd),e(Wt,Xa),e(Xa,wd),g(s,_i,y),g(s,pt,y),M(zn,pt,null),e(pt,vd),e(pt,qn),e(qn,Ld),e(qn,Cn),e(Cn,Td),e(qn,Md),e(pt,$d),e(pt,Pn),e(Pn,jd),e(Pn,An),e(An,xd),e(Pn,Fd),e(pt,Ed),e(pt,mt),M(Nn,mt,null),e(mt,zd),e(mt,Ht),e(Ht,qd),e(Ht,ca),e(ca,Cd),e(Ht,Pd),e(Ht,Ya),e(Ya,Ad),e(Ht,Nd),e(mt,Od),M(bo,mt,null),e(mt,Dd),M(ko,mt,null),g(s,yi,y),g(s,Kt,y),e(Kt,wo),e(wo,Za),M(On,Za,null),e(Kt,Id),e(Kt,Ga),e(Ga,Sd),g(s,bi,y),g(s,ut,y),M(Dn,ut,null),e(ut,Ud),e(ut,Qt),e(Qt,Bd),e(Qt,Ja),e(Ja,Wd),e(Qt,Hd),e(Qt,In),e(In,Kd),e(Qt,Qd),e(ut,Rd),e(ut,Sn),e(Sn,Vd),e(Sn,Un),e(Un,Xd),e(Sn,Yd),e(ut,Zd),e(ut,ft),M(Bn,ft,null),e(ft,Gd),e(ft,Rt),e(Rt,Jd),e(Rt,pa),e(pa,ec),e(Rt,tc),e(Rt,er),e(er,oc),e(Rt,nc),e(ft,sc),M(vo,ft,null),e(ft,ac),M(Lo,ft,null),g(s,ki,y),g(s,Vt,y),e(Vt,To),e(To,tr),M(Wn,tr,null),e(Vt,rc),e(Vt,or),e(or,ic),g(s,wi,y),g(s,tt,y),M(Hn,tt,null),e(tt,lc),e(tt,Kn),e(Kn,dc),e(Kn,Qn),e(Qn,cc),e(Kn,pc),e(tt,uc),e(tt,Rn),e(Rn,hc),e(Rn,Vn),e(Vn,mc),e(Rn,fc),e(tt,gc),e(tt,Xn),e(Xn,_c),e(Xn,Yn),e(Yn,yc),e(Xn,bc),e(tt,kc),e(tt,gt),M(Zn,gt,null),e(gt,wc),e(gt,Xt),e(Xt,vc),e(Xt,ua),e(ua,Lc),e(Xt,Tc),e(Xt,nr),e(nr,Mc),e(Xt,$c),e(gt,jc),M(Mo,gt,null),e(gt,xc),M($o,gt,null),g(s,vi,y),g(s,Yt,y),e(Yt,jo),e(jo,sr),M(Gn,sr,null),e(Yt,Fc),e(Yt,ar),e(ar,Ec),g(s,Li,y),g(s,ot,y),M(Jn,ot,null),e(ot,zc),e(ot,Zt),e(Zt,qc),e(Zt,es),e(es,Cc),e(Zt,Pc),e(Zt,ts),e(ts,Ac),e(Zt,Nc),e(ot,Oc),e(ot,os),e(os,Dc),e(os,ns),e(ns,Ic),e(os,Sc),e(ot,Uc),e(ot,ss),e(ss,Bc),e(ss,as),e(as,Wc),e(ss,Hc),e(ot,Kc),e(ot,_t),M(rs,_t,null),e(_t,Qc),e(_t,Gt),e(Gt,Rc),e(Gt,ha),e(ha,Vc),e(Gt,Xc),e(Gt,rr),e(rr,Yc),e(Gt,Zc),e(_t,Gc),M(xo,_t,null),e(_t,Jc),M(Fo,_t,null),g(s,Ti,y),g(s,Jt,y),e(Jt,Eo),e(Eo,ir),M(is,ir,null),e(Jt,ep),e(Jt,lr),e(lr,tp),g(s,Mi,y),g(s,nt,y),M(ls,nt,null),e(nt,op),e(nt,Ft),e(Ft,np),e(Ft,ds),e(ds,sp),e(Ft,ap),e(Ft,dr),e(dr,rp),e(Ft,ip),e(Ft,cr),e(cr,lp),e(Ft,dp),e(nt,cp),e(nt,cs),e(cs,pp),e(cs,ps),e(ps,up),e(cs,hp),e(nt,mp),e(nt,us),e(us,fp),e(us,hs),e(hs,gp),e(us,_p),e(nt,yp),e(nt,rt),M(ms,rt,null),e(rt,bp),e(rt,Ne),e(Ne,kp),e(Ne,pr),e(pr,wp),e(Ne,vp),e(Ne,ur),e(ur,Lp),e(Ne,Tp),e(Ne,hr),e(hr,Mp),e(Ne,$p),e(Ne,mr),e(mr,jp),e(Ne,xp),e(Ne,fr),e(fr,Fp),e(Ne,Ep),e(Ne,gr),e(gr,zp),e(Ne,qp),e(Ne,_r),e(_r,Cp),e(Ne,Pp),e(Ne,yr),e(yr,Ap),e(Ne,Np),e(rt,Op),e(rt,br),e(br,Dp),e(rt,Ip),e(rt,kr),e(kr,Sp),e(rt,Up),M(zo,rt,null),g(s,$i,y),g(s,eo,y),e(eo,qo),e(qo,wr),M(fs,wr,null),e(eo,Bp),e(eo,vr),e(vr,Wp),g(s,ji,y),g(s,Ye,y),M(gs,Ye,null),e(Ye,Hp),e(Ye,Lr),e(Lr,Kp),e(Ye,Qp),e(Ye,_s),e(_s,Rp),e(_s,ma),e(ma,Vp),e(_s,Xp),e(Ye,Yp),e(Ye,ys),e(ys,Zp),e(ys,bs),e(bs,Gp),e(ys,Jp),e(Ye,eu),M(Co,Ye,null),e(Ye,tu),e(Ye,yt),M(ks,yt,null),e(yt,ou),e(yt,to),e(to,nu),e(to,fa),e(fa,su),e(to,au),e(to,Tr),e(Tr,ru),e(to,iu),e(yt,lu),M(Po,yt,null),e(yt,du),M(Ao,yt,null),g(s,xi,y),g(s,oo,y),e(oo,No),e(No,Mr),M(ws,Mr,null),e(oo,cu),e(oo,$r),e($r,pu),g(s,Fi,y),g(s,Ze,y),M(vs,Ze,null),e(Ze,uu),e(Ze,Ls),e(Ls,hu),e(Ls,jr),e(jr,mu),e(Ls,fu),e(Ze,gu),e(Ze,Ts),e(Ts,_u),e(Ts,ga),e(ga,yu),e(Ts,bu),e(Ze,ku),e(Ze,Ms),e(Ms,wu),e(Ms,$s),e($s,vu),e(Ms,Lu),e(Ze,Tu),M(Oo,Ze,null),e(Ze,Mu),e(Ze,bt),M(js,bt,null),e(bt,$u),e(bt,no),e(no,ju),e(no,_a),e(_a,xu),e(no,Fu),e(no,xr),e(xr,Eu),e(no,zu),e(bt,qu),M(Do,bt,null),e(bt,Cu),M(Io,bt,null),g(s,Ei,y),g(s,so,y),e(so,So),e(So,Fr),M(xs,Fr,null),e(so,Pu),e(so,Er),e(Er,Au),g(s,zi,y),g(s,Ge,y),M(Fs,Ge,null),e(Ge,Nu),e(Ge,zr),e(zr,Ou),e(Ge,Du),e(Ge,Es),e(Es,Iu),e(Es,ya),e(ya,Su),e(Es,Uu),e(Ge,Bu),e(Ge,zs),e(zs,Wu),e(zs,qs),e(qs,Hu),e(zs,Ku),e(Ge,Qu),M(Uo,Ge,null),e(Ge,Ru),e(Ge,kt),M(Cs,kt,null),e(kt,Vu),e(kt,ao),e(ao,Xu),e(ao,ba),e(ba,Yu),e(ao,Zu),e(ao,qr),e(qr,Gu),e(ao,Ju),e(kt,eh),M(Bo,kt,null),e(kt,th),M(Wo,kt,null),g(s,qi,y),g(s,ro,y),e(ro,Ho),e(Ho,Cr),M(Ps,Cr,null),e(ro,oh),e(ro,Pr),e(Pr,nh),g(s,Ci,y),g(s,Je,y),M(As,Je,null),e(Je,sh),e(Je,Ar),e(Ar,ah),e(Je,rh),e(Je,Ns),e(Ns,ih),e(Ns,ka),e(ka,lh),e(Ns,dh),e(Je,ch),e(Je,Os),e(Os,ph),e(Os,Ds),e(Ds,uh),e(Os,hh),e(Je,mh),M(Ko,Je,null),e(Je,fh),e(Je,wt),M(Is,wt,null),e(wt,gh),e(wt,io),e(io,_h),e(io,wa),e(wa,yh),e(io,bh),e(io,Nr),e(Nr,kh),e(io,wh),e(wt,vh),M(Qo,wt,null),e(wt,Lh),M(Ro,wt,null),g(s,Pi,y),g(s,lo,y),e(lo,Vo),e(Vo,Or),M(Ss,Or,null),e(lo,Th),e(lo,Dr),e(Dr,Mh),g(s,Ai,y),g(s,et,y),M(Us,et,null),e(et,$h),e(et,Et),e(Et,jh),e(Et,Bs),e(Bs,xh),e(Et,Fh),e(Et,Ir),e(Ir,Eh),e(Et,zh),e(Et,Sr),e(Sr,qh),e(Et,Ch),e(et,Ph),e(et,Ws),e(Ws,Ah),e(Ws,va),e(va,Nh),e(Ws,Oh),e(et,Dh),e(et,Hs),e(Hs,Ih),e(Hs,Ks),e(Ks,Sh),e(Hs,Uh),e(et,Bh),M(Xo,et,null),e(et,Wh),e(et,vt),M(Qs,vt,null),e(vt,Hh),e(vt,co),e(co,Kh),e(co,La),e(La,Qh),e(co,Rh),e(co,Ur),e(Ur,Vh),e(co,Xh),e(vt,Yh),M(Yo,vt,null),e(vt,Zh),M(Zo,vt,null),Ni=!0},p(s,[y]){const Rs={};y&2&&(Rs.$$scope={dirty:y,ctx:s}),ho.$set(Rs);const Br={};y&2&&(Br.$$scope={dirty:y,ctx:s}),bo.$set(Br);const Wr={};y&2&&(Wr.$$scope={dirty:y,ctx:s}),ko.$set(Wr);const Hr={};y&2&&(Hr.$$scope={dirty:y,ctx:s}),vo.$set(Hr);const Vs={};y&2&&(Vs.$$scope={dirty:y,ctx:s}),Lo.$set(Vs);const Kr={};y&2&&(Kr.$$scope={dirty:y,ctx:s}),Mo.$set(Kr);const Qr={};y&2&&(Qr.$$scope={dirty:y,ctx:s}),$o.$set(Qr);const Rr={};y&2&&(Rr.$$scope={dirty:y,ctx:s}),xo.$set(Rr);const Xs={};y&2&&(Xs.$$scope={dirty:y,ctx:s}),Fo.$set(Xs);const Vr={};y&2&&(Vr.$$scope={dirty:y,ctx:s}),zo.$set(Vr);const po={};y&2&&(po.$$scope={dirty:y,ctx:s}),Co.$set(po);const Ys={};y&2&&(Ys.$$scope={dirty:y,ctx:s}),Po.$set(Ys);const Xr={};y&2&&(Xr.$$scope={dirty:y,ctx:s}),Ao.$set(Xr);const Zs={};y&2&&(Zs.$$scope={dirty:y,ctx:s}),Oo.$set(Zs);const Yr={};y&2&&(Yr.$$scope={dirty:y,ctx:s}),Do.$set(Yr);const Gs={};y&2&&(Gs.$$scope={dirty:y,ctx:s}),Io.$set(Gs);const Zr={};y&2&&(Zr.$$scope={dirty:y,ctx:s}),Uo.$set(Zr);const Gr={};y&2&&(Gr.$$scope={dirty:y,ctx:s}),Bo.$set(Gr);const Jr={};y&2&&(Jr.$$scope={dirty:y,ctx:s}),Wo.$set(Jr);const ei={};y&2&&(ei.$$scope={dirty:y,ctx:s}),Ko.$set(ei);const ti={};y&2&&(ti.$$scope={dirty:y,ctx:s}),Qo.$set(ti);const oi={};y&2&&(oi.$$scope={dirty:y,ctx:s}),Ro.$set(oi);const st={};y&2&&(st.$$scope={dirty:y,ctx:s}),Xo.$set(st);const ni={};y&2&&(ni.$$scope={dirty:y,ctx:s}),Yo.$set(ni);const si={};y&2&&(si.$$scope={dirty:y,ctx:s}),Zo.$set(si)},i(s){Ni||($(l.$$.fragment,s),$(I.$$.fragment,s),$(U.$$.fragment,s),$(gn.$$.fragment,s),$(wn.$$.fragment,s),$(vn.$$.fragment,s),$(ho.$$.fragment,s),$(Tn.$$.fragment,s),$(Mn.$$.fragment,s),$(jn.$$.fragment,s),$(xn.$$.fragment,s),$(En.$$.fragment,s),$(zn.$$.fragment,s),$(Nn.$$.fragment,s),$(bo.$$.fragment,s),$(ko.$$.fragment,s),$(On.$$.fragment,s),$(Dn.$$.fragment,s),$(Bn.$$.fragment,s),$(vo.$$.fragment,s),$(Lo.$$.fragment,s),$(Wn.$$.fragment,s),$(Hn.$$.fragment,s),$(Zn.$$.fragment,s),$(Mo.$$.fragment,s),$($o.$$.fragment,s),$(Gn.$$.fragment,s),$(Jn.$$.fragment,s),$(rs.$$.fragment,s),$(xo.$$.fragment,s),$(Fo.$$.fragment,s),$(is.$$.fragment,s),$(ls.$$.fragment,s),$(ms.$$.fragment,s),$(zo.$$.fragment,s),$(fs.$$.fragment,s),$(gs.$$.fragment,s),$(Co.$$.fragment,s),$(ks.$$.fragment,s),$(Po.$$.fragment,s),$(Ao.$$.fragment,s),$(ws.$$.fragment,s),$(vs.$$.fragment,s),$(Oo.$$.fragment,s),$(js.$$.fragment,s),$(Do.$$.fragment,s),$(Io.$$.fragment,s),$(xs.$$.fragment,s),$(Fs.$$.fragment,s),$(Uo.$$.fragment,s),$(Cs.$$.fragment,s),$(Bo.$$.fragment,s),$(Wo.$$.fragment,s),$(Ps.$$.fragment,s),$(As.$$.fragment,s),$(Ko.$$.fragment,s),$(Is.$$.fragment,s),$(Qo.$$.fragment,s),$(Ro.$$.fragment,s),$(Ss.$$.fragment,s),$(Us.$$.fragment,s),$(Xo.$$.fragment,s),$(Qs.$$.fragment,s),$(Yo.$$.fragment,s),$(Zo.$$.fragment,s),Ni=!0)},o(s){j(l.$$.fragment,s),j(I.$$.fragment,s),j(U.$$.fragment,s),j(gn.$$.fragment,s),j(wn.$$.fragment,s),j(vn.$$.fragment,s),j(ho.$$.fragment,s),j(Tn.$$.fragment,s),j(Mn.$$.fragment,s),j(jn.$$.fragment,s),j(xn.$$.fragment,s),j(En.$$.fragment,s),j(zn.$$.fragment,s),j(Nn.$$.fragment,s),j(bo.$$.fragment,s),j(ko.$$.fragment,s),j(On.$$.fragment,s),j(Dn.$$.fragment,s),j(Bn.$$.fragment,s),j(vo.$$.fragment,s),j(Lo.$$.fragment,s),j(Wn.$$.fragment,s),j(Hn.$$.fragment,s),j(Zn.$$.fragment,s),j(Mo.$$.fragment,s),j($o.$$.fragment,s),j(Gn.$$.fragment,s),j(Jn.$$.fragment,s),j(rs.$$.fragment,s),j(xo.$$.fragment,s),j(Fo.$$.fragment,s),j(is.$$.fragment,s),j(ls.$$.fragment,s),j(ms.$$.fragment,s),j(zo.$$.fragment,s),j(fs.$$.fragment,s),j(gs.$$.fragment,s),j(Co.$$.fragment,s),j(ks.$$.fragment,s),j(Po.$$.fragment,s),j(Ao.$$.fragment,s),j(ws.$$.fragment,s),j(vs.$$.fragment,s),j(Oo.$$.fragment,s),j(js.$$.fragment,s),j(Do.$$.fragment,s),j(Io.$$.fragment,s),j(xs.$$.fragment,s),j(Fs.$$.fragment,s),j(Uo.$$.fragment,s),j(Cs.$$.fragment,s),j(Bo.$$.fragment,s),j(Wo.$$.fragment,s),j(Ps.$$.fragment,s),j(As.$$.fragment,s),j(Ko.$$.fragment,s),j(Is.$$.fragment,s),j(Qo.$$.fragment,s),j(Ro.$$.fragment,s),j(Ss.$$.fragment,s),j(Us.$$.fragment,s),j(Xo.$$.fragment,s),j(Qs.$$.fragment,s),j(Yo.$$.fragment,s),j(Zo.$$.fragment,s),Ni=!1},d(s){t(d),s&&t(k),s&&t(f),x(l),s&&t(ge),s&&t(B),s&&t(_e),s&&t(K),x(I),s&&t(ye),s&&t(ne),s&&t(be),s&&t(oe),s&&t(ke),s&&t(W),s&&t(we),s&&t(D),s&&t(ve),s&&t(ee),s&&t(Le),s&&t(N),s&&t(De),x(U,s),s&&t(Ie),s&&t(fe),s&&t(ii),x(gn,s),s&&t(li),s&&t(Js),s&&t(di),s&&t(Ct),s&&t(ci),s&&t(Dt),x(wn),s&&t(pi),s&&t(lt),x(vn),x(ho),s&&t(ui),s&&t(Ut),x(Tn),s&&t(hi),s&&t(dt),x(Mn),s&&t(mi),s&&t(Bt),x(jn),s&&t(fi),s&&t(ct),x(xn),s&&t(gi),s&&t(Wt),x(En),s&&t(_i),s&&t(pt),x(zn),x(Nn),x(bo),x(ko),s&&t(yi),s&&t(Kt),x(On),s&&t(bi),s&&t(ut),x(Dn),x(Bn),x(vo),x(Lo),s&&t(ki),s&&t(Vt),x(Wn),s&&t(wi),s&&t(tt),x(Hn),x(Zn),x(Mo),x($o),s&&t(vi),s&&t(Yt),x(Gn),s&&t(Li),s&&t(ot),x(Jn),x(rs),x(xo),x(Fo),s&&t(Ti),s&&t(Jt),x(is),s&&t(Mi),s&&t(nt),x(ls),x(ms),x(zo),s&&t($i),s&&t(eo),x(fs),s&&t(ji),s&&t(Ye),x(gs),x(Co),x(ks),x(Po),x(Ao),s&&t(xi),s&&t(oo),x(ws),s&&t(Fi),s&&t(Ze),x(vs),x(Oo),x(js),x(Do),x(Io),s&&t(Ei),s&&t(so),x(xs),s&&t(zi),s&&t(Ge),x(Fs),x(Uo),x(Cs),x(Bo),x(Wo),s&&t(qi),s&&t(ro),x(Ps),s&&t(Ci),s&&t(Je),x(As),x(Ko),x(Is),x(Qo),x(Ro),s&&t(Pi),s&&t(lo),x(Ss),s&&t(Ai),s&&t(et),x(Us),x(Xo),x(Qs),x(Yo),x(Zo)}}}const Qg={local:"layoutlm",sections:[{local:"overview",title:"Overview"},{local:"transformers.LayoutLMConfig",title:"LayoutLMConfig"},{local:"transformers.LayoutLMTokenizer",title:"LayoutLMTokenizer"},{local:"transformers.LayoutLMTokenizerFast",title:"LayoutLMTokenizerFast"},{local:"transformers.LayoutLMModel",title:"LayoutLMModel"},{local:"transformers.LayoutLMForMaskedLM",title:"LayoutLMForMaskedLM"},{local:"transformers.LayoutLMForSequenceClassification",title:"LayoutLMForSequenceClassification"},{local:"transformers.LayoutLMForTokenClassification",title:"LayoutLMForTokenClassification"},{local:"transformers.LayoutLMForQuestionAnswering",title:"LayoutLMForQuestionAnswering"},{local:"transformers.TFLayoutLMModel",title:"TFLayoutLMModel"},{local:"transformers.TFLayoutLMForMaskedLM",title:"TFLayoutLMForMaskedLM"},{local:"transformers.TFLayoutLMForSequenceClassification",title:"TFLayoutLMForSequenceClassification"},{local:"transformers.TFLayoutLMForTokenClassification",title:"TFLayoutLMForTokenClassification"},{local:"transformers.TFLayoutLMForQuestionAnswering",title:"TFLayoutLMForQuestionAnswering"}],title:"LayoutLM"};function Rg(q){return bg(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class e_ extends fg{constructor(d){super();gg(this,d,Rg,Kg,_g,{})}}export{e_ as default,Qg as metadata};
