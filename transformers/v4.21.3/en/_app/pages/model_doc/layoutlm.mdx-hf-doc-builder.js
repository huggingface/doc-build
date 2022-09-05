import{S as lh,i as dh,s as ch,e as a,k as c,w as L,t as n,M as ph,c as r,d as o,m as p,a as i,x as v,h as s,b as u,G as e,g as f,y as w,q as T,o as M,B as $,v as uh,L as qo}from"../../chunks/vendor-hf-doc-builder.js";import{T as Qe}from"../../chunks/Tip-hf-doc-builder.js";import{D as _e}from"../../chunks/Docstring-hf-doc-builder.js";import{C as oo}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as De}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Eo}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function hh(E){let d,k,_,h,b;return h=new oo({props:{code:`from transformers import LayoutLMModel, LayoutLMConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),k=n("Examples:"),_=c(),L(h.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Examples:"),m.forEach(o),_=p(l),v(h.$$.fragment,l)},m(l,m){f(l,d,m),e(d,k),f(l,_,m),w(h,l,m),b=!0},p:qo,i(l){b||(T(h.$$.fragment,l),b=!0)},o(l){M(h.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(_),$(h,l)}}}function mh(E){let d,k,_,h,b;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(m,"CODE",{});var j=i(_);h=s(j,"Module"),j.forEach(o),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(o)},m(l,m){f(l,d,m),e(d,k),e(d,_),e(_,h),e(d,b)},d(l){l&&o(d)}}}function fh(E){let d,k,_,h,b;return h=new oo({props:{code:`from transformers import LayoutLMTokenizer, LayoutLMModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),k=n("Examples:"),_=c(),L(h.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Examples:"),m.forEach(o),_=p(l),v(h.$$.fragment,l)},m(l,m){f(l,d,m),e(d,k),f(l,_,m),w(h,l,m),b=!0},p:qo,i(l){b||(T(h.$$.fragment,l),b=!0)},o(l){M(h.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(_),$(h,l)}}}function gh(E){let d,k,_,h,b;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(m,"CODE",{});var j=i(_);h=s(j,"Module"),j.forEach(o),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(o)},m(l,m){f(l,d,m),e(d,k),e(d,_),e(_,h),e(d,b)},d(l){l&&o(d)}}}function _h(E){let d,k,_,h,b;return h=new oo({props:{code:`from transformers import LayoutLMTokenizer, LayoutLMForMaskedLM
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

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){d=a("p"),k=n("Examples:"),_=c(),L(h.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Examples:"),m.forEach(o),_=p(l),v(h.$$.fragment,l)},m(l,m){f(l,d,m),e(d,k),f(l,_,m),w(h,l,m),b=!0},p:qo,i(l){b||(T(h.$$.fragment,l),b=!0)},o(l){M(h.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(_),$(h,l)}}}function yh(E){let d,k,_,h,b;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(m,"CODE",{});var j=i(_);h=s(j,"Module"),j.forEach(o),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(o)},m(l,m){f(l,d,m),e(d,k),e(d,_),e(_,h),e(d,b)},d(l){l&&o(d)}}}function bh(E){let d,k,_,h,b;return h=new oo({props:{code:`from transformers import LayoutLMTokenizer, LayoutLMForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),k=n("Examples:"),_=c(),L(h.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Examples:"),m.forEach(o),_=p(l),v(h.$$.fragment,l)},m(l,m){f(l,d,m),e(d,k),f(l,_,m),w(h,l,m),b=!0},p:qo,i(l){b||(T(h.$$.fragment,l),b=!0)},o(l){M(h.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(_),$(h,l)}}}function kh(E){let d,k,_,h,b;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(m,"CODE",{});var j=i(_);h=s(j,"Module"),j.forEach(o),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(o)},m(l,m){f(l,d,m),e(d,k),e(d,_),e(_,h),e(d,b)},d(l){l&&o(d)}}}function Lh(E){let d,k,_,h,b;return h=new oo({props:{code:`from transformers import LayoutLMTokenizer, LayoutLMForTokenClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),k=n("Examples:"),_=c(),L(h.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Examples:"),m.forEach(o),_=p(l),v(h.$$.fragment,l)},m(l,m){f(l,d,m),e(d,k),f(l,_,m),w(h,l,m),b=!0},p:qo,i(l){b||(T(h.$$.fragment,l),b=!0)},o(l){M(h.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(_),$(h,l)}}}function vh(E){let d,k,_,h,b,l,m,j,re,Y,z,ae,O,Z,ne,A,ie,se,J,D,G,Q,F,q,le,H,V,ee,B,oe,de,C,ce,U,pe,te,R,ue,he,N,me,W,fe;return{c(){d=a("p"),k=n("TF 2.0 models accepts two formats as inputs:"),_=c(),h=a("ul"),b=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),j=a("li"),re=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=c(),z=a("p"),ae=n("This second option is useful when using "),O=a("code"),Z=n("tf.keras.Model.fit"),ne=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),A=a("code"),ie=n("model(inputs)"),se=n("."),J=c(),D=a("p"),G=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Q=c(),F=a("ul"),q=a("li"),le=n("a single Tensor with "),H=a("code"),V=n("input_ids"),ee=n(" only and nothing else: "),B=a("code"),oe=n("model(inputs_ids)"),de=c(),C=a("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a("code"),pe=n("model([input_ids, attention_mask])"),te=n(" or "),R=a("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),he=c(),N=a("li"),me=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),fe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=r(g,"P",{});var x=i(d);k=s(x,"TF 2.0 models accepts two formats as inputs:"),x.forEach(o),_=p(g),h=r(g,"UL",{});var X=i(h);b=r(X,"LI",{});var je=i(b);l=s(je,"having all inputs as keyword arguments (like PyTorch models), or"),je.forEach(o),m=p(X),j=r(X,"LI",{});var Me=i(j);re=s(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(o),X.forEach(o),Y=p(g),z=r(g,"P",{});var S=i(z);ae=s(S,"This second option is useful when using "),O=r(S,"CODE",{});var be=i(O);Z=s(be,"tf.keras.Model.fit"),be.forEach(o),ne=s(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),A=r(S,"CODE",{});var Fe=i(A);ie=s(Fe,"model(inputs)"),Fe.forEach(o),se=s(S,"."),S.forEach(o),J=p(g),D=r(g,"P",{});var $e=i(D);G=s($e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),$e.forEach(o),Q=p(g),F=r(g,"UL",{});var I=i(F);q=r(I,"LI",{});var K=i(q);le=s(K,"a single Tensor with "),H=r(K,"CODE",{});var xe=i(H);V=s(xe,"input_ids"),xe.forEach(o),ee=s(K," only and nothing else: "),B=r(K,"CODE",{});var ye=i(B);oe=s(ye,"model(inputs_ids)"),ye.forEach(o),K.forEach(o),de=p(I),C=r(I,"LI",{});var P=i(C);ce=s(P,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(P,"CODE",{});var ze=i(U);pe=s(ze,"model([input_ids, attention_mask])"),ze.forEach(o),te=s(P," or "),R=r(P,"CODE",{});var ke=i(R);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(o),P.forEach(o),he=p(I),N=r(I,"LI",{});var ge=i(N);me=s(ge,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(ge,"CODE",{});var Ee=i(W);fe=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(o),ge.forEach(o),I.forEach(o)},m(g,x){f(g,d,x),e(d,k),f(g,_,x),f(g,h,x),e(h,b),e(b,l),e(h,m),e(h,j),e(j,re),f(g,Y,x),f(g,z,x),e(z,ae),e(z,O),e(O,Z),e(z,ne),e(z,A),e(A,ie),e(z,se),f(g,J,x),f(g,D,x),e(D,G),f(g,Q,x),f(g,F,x),e(F,q),e(q,le),e(q,H),e(H,V),e(q,ee),e(q,B),e(B,oe),e(F,de),e(F,C),e(C,ce),e(C,U),e(U,pe),e(C,te),e(C,R),e(R,ue),e(F,he),e(F,N),e(N,me),e(N,W),e(W,fe)},d(g){g&&o(d),g&&o(_),g&&o(h),g&&o(Y),g&&o(z),g&&o(J),g&&o(D),g&&o(Q),g&&o(F)}}}function wh(E){let d,k,_,h,b;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(m,"CODE",{});var j=i(_);h=s(j,"Module"),j.forEach(o),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(o)},m(l,m){f(l,d,m),e(d,k),e(d,_),e(_,h),e(d,b)},d(l){l&&o(d)}}}function Th(E){let d,k,_,h,b;return h=new oo({props:{code:`from transformers import LayoutLMTokenizer, TFLayoutLMModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),k=n("Examples:"),_=c(),L(h.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Examples:"),m.forEach(o),_=p(l),v(h.$$.fragment,l)},m(l,m){f(l,d,m),e(d,k),f(l,_,m),w(h,l,m),b=!0},p:qo,i(l){b||(T(h.$$.fragment,l),b=!0)},o(l){M(h.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(_),$(h,l)}}}function Mh(E){let d,k,_,h,b,l,m,j,re,Y,z,ae,O,Z,ne,A,ie,se,J,D,G,Q,F,q,le,H,V,ee,B,oe,de,C,ce,U,pe,te,R,ue,he,N,me,W,fe;return{c(){d=a("p"),k=n("TF 2.0 models accepts two formats as inputs:"),_=c(),h=a("ul"),b=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),j=a("li"),re=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=c(),z=a("p"),ae=n("This second option is useful when using "),O=a("code"),Z=n("tf.keras.Model.fit"),ne=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),A=a("code"),ie=n("model(inputs)"),se=n("."),J=c(),D=a("p"),G=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Q=c(),F=a("ul"),q=a("li"),le=n("a single Tensor with "),H=a("code"),V=n("input_ids"),ee=n(" only and nothing else: "),B=a("code"),oe=n("model(inputs_ids)"),de=c(),C=a("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a("code"),pe=n("model([input_ids, attention_mask])"),te=n(" or "),R=a("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),he=c(),N=a("li"),me=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),fe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=r(g,"P",{});var x=i(d);k=s(x,"TF 2.0 models accepts two formats as inputs:"),x.forEach(o),_=p(g),h=r(g,"UL",{});var X=i(h);b=r(X,"LI",{});var je=i(b);l=s(je,"having all inputs as keyword arguments (like PyTorch models), or"),je.forEach(o),m=p(X),j=r(X,"LI",{});var Me=i(j);re=s(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(o),X.forEach(o),Y=p(g),z=r(g,"P",{});var S=i(z);ae=s(S,"This second option is useful when using "),O=r(S,"CODE",{});var be=i(O);Z=s(be,"tf.keras.Model.fit"),be.forEach(o),ne=s(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),A=r(S,"CODE",{});var Fe=i(A);ie=s(Fe,"model(inputs)"),Fe.forEach(o),se=s(S,"."),S.forEach(o),J=p(g),D=r(g,"P",{});var $e=i(D);G=s($e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),$e.forEach(o),Q=p(g),F=r(g,"UL",{});var I=i(F);q=r(I,"LI",{});var K=i(q);le=s(K,"a single Tensor with "),H=r(K,"CODE",{});var xe=i(H);V=s(xe,"input_ids"),xe.forEach(o),ee=s(K," only and nothing else: "),B=r(K,"CODE",{});var ye=i(B);oe=s(ye,"model(inputs_ids)"),ye.forEach(o),K.forEach(o),de=p(I),C=r(I,"LI",{});var P=i(C);ce=s(P,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(P,"CODE",{});var ze=i(U);pe=s(ze,"model([input_ids, attention_mask])"),ze.forEach(o),te=s(P," or "),R=r(P,"CODE",{});var ke=i(R);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(o),P.forEach(o),he=p(I),N=r(I,"LI",{});var ge=i(N);me=s(ge,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(ge,"CODE",{});var Ee=i(W);fe=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(o),ge.forEach(o),I.forEach(o)},m(g,x){f(g,d,x),e(d,k),f(g,_,x),f(g,h,x),e(h,b),e(b,l),e(h,m),e(h,j),e(j,re),f(g,Y,x),f(g,z,x),e(z,ae),e(z,O),e(O,Z),e(z,ne),e(z,A),e(A,ie),e(z,se),f(g,J,x),f(g,D,x),e(D,G),f(g,Q,x),f(g,F,x),e(F,q),e(q,le),e(q,H),e(H,V),e(q,ee),e(q,B),e(B,oe),e(F,de),e(F,C),e(C,ce),e(C,U),e(U,pe),e(C,te),e(C,R),e(R,ue),e(F,he),e(F,N),e(N,me),e(N,W),e(W,fe)},d(g){g&&o(d),g&&o(_),g&&o(h),g&&o(Y),g&&o(z),g&&o(J),g&&o(D),g&&o(Q),g&&o(F)}}}function $h(E){let d,k,_,h,b;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(m,"CODE",{});var j=i(_);h=s(j,"Module"),j.forEach(o),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(o)},m(l,m){f(l,d,m),e(d,k),e(d,_),e(_,h),e(d,b)},d(l){l&&o(d)}}}function xh(E){let d,k,_,h,b;return h=new oo({props:{code:`from transformers import LayoutLMTokenizer, TFLayoutLMForMaskedLM
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

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){d=a("p"),k=n("Examples:"),_=c(),L(h.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Examples:"),m.forEach(o),_=p(l),v(h.$$.fragment,l)},m(l,m){f(l,d,m),e(d,k),f(l,_,m),w(h,l,m),b=!0},p:qo,i(l){b||(T(h.$$.fragment,l),b=!0)},o(l){M(h.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(_),$(h,l)}}}function jh(E){let d,k,_,h,b,l,m,j,re,Y,z,ae,O,Z,ne,A,ie,se,J,D,G,Q,F,q,le,H,V,ee,B,oe,de,C,ce,U,pe,te,R,ue,he,N,me,W,fe;return{c(){d=a("p"),k=n("TF 2.0 models accepts two formats as inputs:"),_=c(),h=a("ul"),b=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),j=a("li"),re=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=c(),z=a("p"),ae=n("This second option is useful when using "),O=a("code"),Z=n("tf.keras.Model.fit"),ne=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),A=a("code"),ie=n("model(inputs)"),se=n("."),J=c(),D=a("p"),G=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Q=c(),F=a("ul"),q=a("li"),le=n("a single Tensor with "),H=a("code"),V=n("input_ids"),ee=n(" only and nothing else: "),B=a("code"),oe=n("model(inputs_ids)"),de=c(),C=a("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a("code"),pe=n("model([input_ids, attention_mask])"),te=n(" or "),R=a("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),he=c(),N=a("li"),me=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),fe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=r(g,"P",{});var x=i(d);k=s(x,"TF 2.0 models accepts two formats as inputs:"),x.forEach(o),_=p(g),h=r(g,"UL",{});var X=i(h);b=r(X,"LI",{});var je=i(b);l=s(je,"having all inputs as keyword arguments (like PyTorch models), or"),je.forEach(o),m=p(X),j=r(X,"LI",{});var Me=i(j);re=s(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(o),X.forEach(o),Y=p(g),z=r(g,"P",{});var S=i(z);ae=s(S,"This second option is useful when using "),O=r(S,"CODE",{});var be=i(O);Z=s(be,"tf.keras.Model.fit"),be.forEach(o),ne=s(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),A=r(S,"CODE",{});var Fe=i(A);ie=s(Fe,"model(inputs)"),Fe.forEach(o),se=s(S,"."),S.forEach(o),J=p(g),D=r(g,"P",{});var $e=i(D);G=s($e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),$e.forEach(o),Q=p(g),F=r(g,"UL",{});var I=i(F);q=r(I,"LI",{});var K=i(q);le=s(K,"a single Tensor with "),H=r(K,"CODE",{});var xe=i(H);V=s(xe,"input_ids"),xe.forEach(o),ee=s(K," only and nothing else: "),B=r(K,"CODE",{});var ye=i(B);oe=s(ye,"model(inputs_ids)"),ye.forEach(o),K.forEach(o),de=p(I),C=r(I,"LI",{});var P=i(C);ce=s(P,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(P,"CODE",{});var ze=i(U);pe=s(ze,"model([input_ids, attention_mask])"),ze.forEach(o),te=s(P," or "),R=r(P,"CODE",{});var ke=i(R);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(o),P.forEach(o),he=p(I),N=r(I,"LI",{});var ge=i(N);me=s(ge,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(ge,"CODE",{});var Ee=i(W);fe=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(o),ge.forEach(o),I.forEach(o)},m(g,x){f(g,d,x),e(d,k),f(g,_,x),f(g,h,x),e(h,b),e(b,l),e(h,m),e(h,j),e(j,re),f(g,Y,x),f(g,z,x),e(z,ae),e(z,O),e(O,Z),e(z,ne),e(z,A),e(A,ie),e(z,se),f(g,J,x),f(g,D,x),e(D,G),f(g,Q,x),f(g,F,x),e(F,q),e(q,le),e(q,H),e(H,V),e(q,ee),e(q,B),e(B,oe),e(F,de),e(F,C),e(C,ce),e(C,U),e(U,pe),e(C,te),e(C,R),e(R,ue),e(F,he),e(F,N),e(N,me),e(N,W),e(W,fe)},d(g){g&&o(d),g&&o(_),g&&o(h),g&&o(Y),g&&o(z),g&&o(J),g&&o(D),g&&o(Q),g&&o(F)}}}function Fh(E){let d,k,_,h,b;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(m,"CODE",{});var j=i(_);h=s(j,"Module"),j.forEach(o),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(o)},m(l,m){f(l,d,m),e(d,k),e(d,_),e(_,h),e(d,b)},d(l){l&&o(d)}}}function zh(E){let d,k,_,h,b;return h=new oo({props:{code:`from transformers import LayoutLMTokenizer, TFLayoutLMForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),k=n("Examples:"),_=c(),L(h.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Examples:"),m.forEach(o),_=p(l),v(h.$$.fragment,l)},m(l,m){f(l,d,m),e(d,k),f(l,_,m),w(h,l,m),b=!0},p:qo,i(l){b||(T(h.$$.fragment,l),b=!0)},o(l){M(h.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(_),$(h,l)}}}function Eh(E){let d,k,_,h,b,l,m,j,re,Y,z,ae,O,Z,ne,A,ie,se,J,D,G,Q,F,q,le,H,V,ee,B,oe,de,C,ce,U,pe,te,R,ue,he,N,me,W,fe;return{c(){d=a("p"),k=n("TF 2.0 models accepts two formats as inputs:"),_=c(),h=a("ul"),b=a("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),m=c(),j=a("li"),re=n("having all inputs as a list, tuple or dict in the first positional arguments."),Y=c(),z=a("p"),ae=n("This second option is useful when using "),O=a("code"),Z=n("tf.keras.Model.fit"),ne=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),A=a("code"),ie=n("model(inputs)"),se=n("."),J=c(),D=a("p"),G=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Q=c(),F=a("ul"),q=a("li"),le=n("a single Tensor with "),H=a("code"),V=n("input_ids"),ee=n(" only and nothing else: "),B=a("code"),oe=n("model(inputs_ids)"),de=c(),C=a("li"),ce=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a("code"),pe=n("model([input_ids, attention_mask])"),te=n(" or "),R=a("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),he=c(),N=a("li"),me=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),fe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){d=r(g,"P",{});var x=i(d);k=s(x,"TF 2.0 models accepts two formats as inputs:"),x.forEach(o),_=p(g),h=r(g,"UL",{});var X=i(h);b=r(X,"LI",{});var je=i(b);l=s(je,"having all inputs as keyword arguments (like PyTorch models), or"),je.forEach(o),m=p(X),j=r(X,"LI",{});var Me=i(j);re=s(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(o),X.forEach(o),Y=p(g),z=r(g,"P",{});var S=i(z);ae=s(S,"This second option is useful when using "),O=r(S,"CODE",{});var be=i(O);Z=s(be,"tf.keras.Model.fit"),be.forEach(o),ne=s(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),A=r(S,"CODE",{});var Fe=i(A);ie=s(Fe,"model(inputs)"),Fe.forEach(o),se=s(S,"."),S.forEach(o),J=p(g),D=r(g,"P",{});var $e=i(D);G=s($e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),$e.forEach(o),Q=p(g),F=r(g,"UL",{});var I=i(F);q=r(I,"LI",{});var K=i(q);le=s(K,"a single Tensor with "),H=r(K,"CODE",{});var xe=i(H);V=s(xe,"input_ids"),xe.forEach(o),ee=s(K," only and nothing else: "),B=r(K,"CODE",{});var ye=i(B);oe=s(ye,"model(inputs_ids)"),ye.forEach(o),K.forEach(o),de=p(I),C=r(I,"LI",{});var P=i(C);ce=s(P,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r(P,"CODE",{});var ze=i(U);pe=s(ze,"model([input_ids, attention_mask])"),ze.forEach(o),te=s(P," or "),R=r(P,"CODE",{});var ke=i(R);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(o),P.forEach(o),he=p(I),N=r(I,"LI",{});var ge=i(N);me=s(ge,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(ge,"CODE",{});var Ee=i(W);fe=s(Ee,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ee.forEach(o),ge.forEach(o),I.forEach(o)},m(g,x){f(g,d,x),e(d,k),f(g,_,x),f(g,h,x),e(h,b),e(b,l),e(h,m),e(h,j),e(j,re),f(g,Y,x),f(g,z,x),e(z,ae),e(z,O),e(O,Z),e(z,ne),e(z,A),e(A,ie),e(z,se),f(g,J,x),f(g,D,x),e(D,G),f(g,Q,x),f(g,F,x),e(F,q),e(q,le),e(q,H),e(H,V),e(q,ee),e(q,B),e(B,oe),e(F,de),e(F,C),e(C,ce),e(C,U),e(U,pe),e(C,te),e(C,R),e(R,ue),e(F,he),e(F,N),e(N,me),e(N,W),e(W,fe)},d(g){g&&o(d),g&&o(_),g&&o(h),g&&o(Y),g&&o(z),g&&o(J),g&&o(D),g&&o(Q),g&&o(F)}}}function qh(E){let d,k,_,h,b;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),h=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(m,"CODE",{});var j=i(_);h=s(j,"Module"),j.forEach(o),b=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(o)},m(l,m){f(l,d,m),e(d,k),e(d,_),e(_,h),e(d,b)},d(l){l&&o(d)}}}function Ch(E){let d,k,_,h,b;return h=new oo({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),k=n("Examples:"),_=c(),L(h.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);k=s(m,"Examples:"),m.forEach(o),_=p(l),v(h.$$.fragment,l)},m(l,m){f(l,d,m),e(d,k),f(l,_,m),w(h,l,m),b=!0},p:qo,i(l){b||(T(h.$$.fragment,l),b=!0)},o(l){M(h.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(_),$(h,l)}}}function Ph(E){let d,k,_,h,b,l,m,j,re,Y,z,ae,O,Z,ne,A,ie,se,J,D,G,Q,F,q,le,H,V,ee,B,oe,de,C,ce,U,pe,te,R,ue,he,N,me,W,fe,g,x,X,je,Me,S,be,Fe,$e,I,K,xe,ye,P,ze,ke,ge,Ee,Qn,Hr,Br,Is,Rr,Kr,xt,Vr,Xr,jt,Yr,Zr,Da,Ft,Aa,to,Gr,Os,Jr,Qr,Ds,ei,oi,Ua,zt,Wa,es,eo,ti,os,ni,si,Et,ai,ri,qt,ii,li,Ha,no,di,Ct,ci,pi,Pt,ui,hi,Ba,ro,Co,As,Nt,mi,Us,fi,Ra,Pe,St,gi,io,_i,ts,yi,bi,It,ki,Li,vi,lo,wi,ns,Ti,Mi,ss,$i,xi,ji,Po,Ka,co,No,Ws,Ot,Fi,Hs,zi,Va,Ne,Dt,Ei,Bs,qi,Ci,So,as,Pi,Ni,rs,Si,Ii,Oi,At,Di,is,Ai,Ui,Xa,po,Io,Rs,Ut,Wi,Ks,Hi,Ya,Se,Wt,Bi,Vs,Ri,Ki,Oo,ls,Vi,Xi,ds,Yi,Zi,Gi,Ht,Ji,cs,Qi,el,Za,uo,Do,Xs,Bt,ol,Ys,tl,Ga,Ie,Rt,nl,Kt,sl,Vt,al,rl,il,Xt,ll,Yt,dl,cl,pl,Ae,Zt,ul,ho,hl,ps,ml,fl,Zs,gl,_l,yl,Ao,bl,Uo,Ja,mo,Wo,Gs,Gt,kl,Js,Ll,Qa,Oe,Jt,vl,fo,wl,Qs,Tl,Ml,Qt,$l,xl,jl,en,Fl,on,zl,El,ql,Ue,tn,Cl,go,Pl,us,Nl,Sl,ea,Il,Ol,Dl,Ho,Al,Bo,er,_o,Ro,oa,nn,Ul,ta,Wl,or,qe,sn,Hl,an,Bl,rn,Rl,Kl,Vl,ln,Xl,dn,Yl,Zl,Gl,cn,Jl,pn,Ql,ed,od,We,un,td,yo,nd,hs,sd,ad,na,rd,id,ld,Ko,dd,Vo,tr,bo,Xo,sa,hn,cd,aa,pd,nr,Ce,mn,ud,ko,hd,fn,md,fd,gn,gd,_d,yd,_n,bd,yn,kd,Ld,vd,bn,wd,kn,Td,Md,$d,He,Ln,xd,Lo,jd,ms,Fd,zd,ra,Ed,qd,Cd,Yo,Pd,Zo,sr,vo,Go,ia,vn,Nd,la,Sd,ar,Le,wn,Id,da,Od,Dd,Tn,Ad,fs,Ud,Wd,Hd,Mn,Bd,$n,Rd,Kd,Vd,Jo,Xd,Be,xn,Yd,wo,Zd,gs,Gd,Jd,ca,Qd,ec,oc,Qo,tc,et,rr,To,ot,pa,jn,nc,ua,sc,ir,ve,Fn,ac,zn,rc,ha,ic,lc,dc,En,cc,_s,pc,uc,hc,qn,mc,Cn,fc,gc,_c,tt,yc,Re,Pn,bc,Mo,kc,ys,Lc,vc,ma,wc,Tc,Mc,nt,$c,st,lr,$o,at,fa,Nn,xc,ga,jc,dr,we,Sn,Fc,_a,zc,Ec,In,qc,bs,Cc,Pc,Nc,On,Sc,Dn,Ic,Oc,Dc,rt,Ac,Ke,An,Uc,xo,Wc,ks,Hc,Bc,ya,Rc,Kc,Vc,it,Xc,lt,cr,jo,dt,ba,Un,Yc,ka,Zc,pr,Te,Wn,Gc,La,Jc,Qc,Hn,ep,Ls,op,tp,np,Bn,sp,Rn,ap,rp,ip,ct,lp,Ve,Kn,dp,Fo,cp,vs,pp,up,va,hp,mp,fp,pt,gp,ut,ur;return l=new De({}),A=new De({}),Ft=new oo({props:{code:`def normalize_bbox(bbox, width, height):
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
    ]`}}),zt=new oo({props:{code:`from PIL import Image

image = Image.open("name_of_your_document - can be a png file, pdf, etc.")

width, height = image.size`,highlighted:`<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

image = Image.<span class="hljs-built_in">open</span>(<span class="hljs-string">&quot;name_of_your_document - can be a png file, pdf, etc.&quot;</span>)

width, height = image.size`}}),Nt=new De({}),St=new _e({props:{name:"class transformers.LayoutLMConfig",anchor:"transformers.LayoutLMConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the LayoutLM model. Defines the different tokens that can be represented by the
<em>inputs_ids</em> passed to the forward method of <a href="/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.LayoutLMModel">LayoutLMModel</a>.`,name:"vocab_size"},{anchor:"transformers.LayoutLMConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed into <a href="/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.LayoutLMModel">LayoutLMModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.LayoutLMConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.LayoutLMConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.LayoutLMConfig.max_2d_position_embeddings",description:`<strong>max_2d_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum value that the 2D position embedding might ever used. Typically set this to something large
just in case (e.g., 1024).`,name:"max_2d_position_embeddings"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/layoutlm/configuration_layoutlm.py#L39"}}),Po=new Eo({props:{anchor:"transformers.LayoutLMConfig.example",$$slots:{default:[hh]},$$scope:{ctx:E}}}),Ot=new De({}),Dt=new _e({props:{name:"class transformers.LayoutLMTokenizer",anchor:"transformers.LayoutLMTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/layoutlm/tokenization_layoutlm.py#L50"}}),Ut=new De({}),Wt=new _e({props:{name:"class transformers.LayoutLMTokenizerFast",anchor:"transformers.LayoutLMTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/layoutlm/tokenization_layoutlm_fast.py#L59"}}),Bt=new De({}),Rt=new _e({props:{name:"class transformers.LayoutLMModel",anchor:"transformers.LayoutLMModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/layoutlm/modeling_layoutlm.py#L703"}}),Zt=new _e({props:{name:"forward",anchor:"transformers.LayoutLMModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
If set to <code>True</code>, the model will return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/layoutlm/modeling_layoutlm.py#L729",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ao=new Qe({props:{$$slots:{default:[mh]},$$scope:{ctx:E}}}),Uo=new Eo({props:{anchor:"transformers.LayoutLMModel.forward.example",$$slots:{default:[fh]},$$scope:{ctx:E}}}),Gt=new De({}),Jt=new _e({props:{name:"class transformers.LayoutLMForMaskedLM",anchor:"transformers.LayoutLMForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/layoutlm/modeling_layoutlm.py#L851"}}),tn=new _e({props:{name:"forward",anchor:"transformers.LayoutLMForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
If set to <code>True</code>, the model will return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/layoutlm/modeling_layoutlm.py#L870",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ho=new Qe({props:{$$slots:{default:[gh]},$$scope:{ctx:E}}}),Bo=new Eo({props:{anchor:"transformers.LayoutLMForMaskedLM.forward.example",$$slots:{default:[_h]},$$scope:{ctx:E}}}),nn=new De({}),sn=new _e({props:{name:"class transformers.LayoutLMForSequenceClassification",anchor:"transformers.LayoutLMForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/layoutlm/modeling_layoutlm.py#L980"}}),un=new _e({props:{name:"forward",anchor:"transformers.LayoutLMForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
If set to <code>True</code>, the model will return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/layoutlm/modeling_layoutlm.py#L994",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ko=new Qe({props:{$$slots:{default:[yh]},$$scope:{ctx:E}}}),Vo=new Eo({props:{anchor:"transformers.LayoutLMForSequenceClassification.forward.example",$$slots:{default:[bh]},$$scope:{ctx:E}}}),hn=new De({}),mn=new _e({props:{name:"class transformers.LayoutLMForTokenClassification",anchor:"transformers.LayoutLMForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/layoutlm/modeling_layoutlm.py#L1117"}}),Ln=new _e({props:{name:"forward",anchor:"transformers.LayoutLMForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
If set to <code>True</code>, the model will return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/layoutlm/modeling_layoutlm.py#L1131",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Yo=new Qe({props:{$$slots:{default:[kh]},$$scope:{ctx:E}}}),Zo=new Eo({props:{anchor:"transformers.LayoutLMForTokenClassification.forward.example",$$slots:{default:[Lh]},$$scope:{ctx:E}}}),vn=new De({}),wn=new _e({props:{name:"class transformers.TFLayoutLMModel",anchor:"transformers.TFLayoutLMModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L904"}}),Jo=new Qe({props:{$$slots:{default:[vh]},$$scope:{ctx:E}}}),xn=new _e({props:{name:"call",anchor:"transformers.TFLayoutLMModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L910",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Qo=new Qe({props:{$$slots:{default:[wh]},$$scope:{ctx:E}}}),et=new Eo({props:{anchor:"transformers.TFLayoutLMModel.call.example",$$slots:{default:[Th]},$$scope:{ctx:E}}}),jn=new De({}),Fn=new _e({props:{name:"class transformers.TFLayoutLMForMaskedLM",anchor:"transformers.TFLayoutLMForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1004"}}),tt=new Qe({props:{$$slots:{default:[Mh]},$$scope:{ctx:E}}}),Pn=new _e({props:{name:"call",anchor:"transformers.TFLayoutLMForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1032",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),nt=new Qe({props:{$$slots:{default:[$h]},$$scope:{ctx:E}}}),st=new Eo({props:{anchor:"transformers.TFLayoutLMForMaskedLM.call.example",$$slots:{default:[xh]},$$scope:{ctx:E}}}),Nn=new De({}),Sn=new _e({props:{name:"class transformers.TFLayoutLMForSequenceClassification",anchor:"transformers.TFLayoutLMForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1137"}}),rt=new Qe({props:{$$slots:{default:[jh]},$$scope:{ctx:E}}}),An=new _e({props:{name:"call",anchor:"transformers.TFLayoutLMForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1155",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),it=new Qe({props:{$$slots:{default:[Fh]},$$scope:{ctx:E}}}),lt=new Eo({props:{anchor:"transformers.TFLayoutLMForSequenceClassification.call.example",$$slots:{default:[zh]},$$scope:{ctx:E}}}),Un=new De({}),Wn=new _e({props:{name:"class transformers.TFLayoutLMForTokenClassification",anchor:"transformers.TFLayoutLMForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1261"}}),ct=new Qe({props:{$$slots:{default:[Eh]},$$scope:{ctx:E}}}),Kn=new _e({props:{name:"call",anchor:"transformers.TFLayoutLMForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1285",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),pt=new Qe({props:{$$slots:{default:[qh]},$$scope:{ctx:E}}}),ut=new Eo({props:{anchor:"transformers.TFLayoutLMForTokenClassification.call.example",$$slots:{default:[Ch]},$$scope:{ctx:E}}}),{c(){d=a("meta"),k=c(),_=a("h1"),h=a("a"),b=a("span"),L(l.$$.fragment),m=c(),j=a("span"),re=n("LayoutLM"),Y=c(),z=a("a"),ae=c(),O=a("h2"),Z=a("a"),ne=a("span"),L(A.$$.fragment),ie=c(),se=a("span"),J=n("Overview"),D=c(),G=a("p"),Q=n("The LayoutLM model was proposed in the paper "),F=a("a"),q=n(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),le=n(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei, and
Ming Zhou. It\u2019s a simple but effective pretraining method of text and layout for document image understanding and
information extraction tasks, such as form understanding and receipt understanding. It obtains state-of-the-art results
on several downstream tasks:`),H=c(),V=a("ul"),ee=a("li"),B=n("form understanding: the "),oe=a("a"),de=n("FUNSD"),C=n(` dataset (a collection of 199 annotated
forms comprising more than 30,000 words).`),ce=c(),U=a("li"),pe=n("receipt understanding: the "),te=a("a"),R=n("SROIE"),ue=n(` dataset (a collection of 626 receipts for
training and 347 receipts for testing).`),he=c(),N=a("li"),me=n("document image classification: the "),W=a("a"),fe=n("RVL-CDIP"),g=n(` dataset (a collection of
400,000 images belonging to one of 16 classes).`),x=c(),X=a("p"),je=n("The abstract from the paper is the following:"),Me=c(),S=a("p"),be=a("em"),Fe=n(`Pre-training techniques have been verified successfully in a variety of NLP tasks in recent years. Despite the
widespread use of pretraining models for NLP applications, they almost exclusively focus on text-level manipulation,
while neglecting layout and style information that is vital for document image understanding. In this paper, we propose
the LayoutLM to jointly model interactions between text and layout information across scanned document images, which is
beneficial for a great number of real-world document image understanding tasks such as information extraction from
scanned documents. Furthermore, we also leverage image features to incorporate words\u2019 visual information into LayoutLM.
To the best of our knowledge, this is the first time that text and layout are jointly learned in a single framework for
document-level pretraining. It achieves new state-of-the-art results in several downstream tasks, including form
understanding (from 70.72 to 79.27), receipt understanding (from 94.02 to 95.24) and document image classification
(from 93.07 to 94.42).`),$e=c(),I=a("p"),K=n("Tips:"),xe=c(),ye=a("ul"),P=a("li"),ze=n("In addition to "),ke=a("em"),ge=n("input_ids"),Ee=n(", "),Qn=a("a"),Hr=n("forward()"),Br=n(" also expects the input "),Is=a("code"),Rr=n("bbox"),Kr=n(`, which are
the bounding boxes (i.e. 2D-positions) of the input tokens. These can be obtained using an external OCR engine such
as Google\u2019s `),xt=a("a"),Vr=n("Tesseract"),Xr=n(" (there\u2019s a "),jt=a("a"),Yr=n("Python wrapper"),Zr=n(` available). Each bounding box should be in (x0, y0, x1, y1) format, where
(x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1) represents the
position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on a 0-1000
scale. To normalize, you can use the following function:`),Da=c(),L(Ft.$$.fragment),Aa=c(),to=a("p"),Gr=n("Here, "),Os=a("code"),Jr=n("width"),Qr=n(" and "),Ds=a("code"),ei=n("height"),oi=n(` correspond to the width and height of the original document in which the token
occurs. Those can be obtained using the Python Image Library (PIL) library for example, as follows:`),Ua=c(),L(zt.$$.fragment),Wa=c(),es=a("ul"),eo=a("li"),ti=n("For a demo which shows how to fine-tune "),os=a("a"),ni=n("LayoutLMForTokenClassification"),si=n(" on the "),Et=a("a"),ai=n("FUNSD dataset"),ri=n(" (a collection of annotated forms), see "),qt=a("a"),ii=n("this notebook"),li=n(`.
It includes an inference part, which shows how to use Google\u2019s Tesseract on a new document.`),Ha=c(),no=a("p"),di=n("This model was contributed by "),Ct=a("a"),ci=n("liminghao1630"),pi=n(`. The original code can be found
`),Pt=a("a"),ui=n("here"),hi=n("."),Ba=c(),ro=a("h2"),Co=a("a"),As=a("span"),L(Nt.$$.fragment),mi=c(),Us=a("span"),fi=n("LayoutLMConfig"),Ra=c(),Pe=a("div"),L(St.$$.fragment),gi=c(),io=a("p"),_i=n("This is the configuration class to store the configuration of a "),ts=a("a"),yi=n("LayoutLMModel"),bi=n(`. It is used to instantiate a
LayoutLM model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the LayoutLM
`),It=a("a"),ki=n("microsoft/layoutlm-base-uncased"),Li=n(" architecture."),vi=c(),lo=a("p"),wi=n("Configuration objects inherit from "),ns=a("a"),Ti=n("BertConfig"),Mi=n(` and can be used to control the model outputs. Read the
documentation from `),ss=a("a"),$i=n("BertConfig"),xi=n(" for more information."),ji=c(),L(Po.$$.fragment),Ka=c(),co=a("h2"),No=a("a"),Ws=a("span"),L(Ot.$$.fragment),Fi=c(),Hs=a("span"),zi=n("LayoutLMTokenizer"),Va=c(),Ne=a("div"),L(Dt.$$.fragment),Ei=c(),Bs=a("p"),qi=n("Constructs a LayoutLM tokenizer."),Ci=c(),So=a("p"),as=a("a"),Pi=n("LayoutLMTokenizer"),Ni=n(" is identical to "),rs=a("a"),Si=n("BertTokenizer"),Ii=n(` and runs end-to-end tokenization: punctuation splitting +
wordpiece.`),Oi=c(),At=a("p"),Di=n("Refer to superclass "),is=a("a"),Ai=n("BertTokenizer"),Ui=n(" for usage examples and documentation concerning parameters."),Xa=c(),po=a("h2"),Io=a("a"),Rs=a("span"),L(Ut.$$.fragment),Wi=c(),Ks=a("span"),Hi=n("LayoutLMTokenizerFast"),Ya=c(),Se=a("div"),L(Wt.$$.fragment),Bi=c(),Vs=a("p"),Ri=n("Constructs a \u201CFast\u201D LayoutLMTokenizer."),Ki=c(),Oo=a("p"),ls=a("a"),Vi=n("LayoutLMTokenizerFast"),Xi=n(" is identical to "),ds=a("a"),Yi=n("BertTokenizerFast"),Zi=n(` and runs end-to-end tokenization: punctuation
splitting + wordpiece.`),Gi=c(),Ht=a("p"),Ji=n("Refer to superclass "),cs=a("a"),Qi=n("BertTokenizerFast"),el=n(" for usage examples and documentation concerning parameters."),Za=c(),uo=a("h2"),Do=a("a"),Xs=a("span"),L(Bt.$$.fragment),ol=c(),Ys=a("span"),tl=n("LayoutLMModel"),Ga=c(),Ie=a("div"),L(Rt.$$.fragment),nl=c(),Kt=a("p"),sl=n(`The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top.
The LayoutLM model was proposed in `),Vt=a("a"),al=n(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),rl=n(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),il=c(),Xt=a("p"),ll=n("This model is a PyTorch "),Yt=a("a"),dl=n("torch.nn.Module"),cl=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),pl=c(),Ae=a("div"),L(Zt.$$.fragment),ul=c(),ho=a("p"),hl=n("The "),ps=a("a"),ml=n("LayoutLMModel"),fl=n(" forward method, overrides the "),Zs=a("code"),gl=n("__call__"),_l=n(" special method."),yl=c(),L(Ao.$$.fragment),bl=c(),L(Uo.$$.fragment),Ja=c(),mo=a("h2"),Wo=a("a"),Gs=a("span"),L(Gt.$$.fragment),kl=c(),Js=a("span"),Ll=n("LayoutLMForMaskedLM"),Qa=c(),Oe=a("div"),L(Jt.$$.fragment),vl=c(),fo=a("p"),wl=n("LayoutLM Model with a "),Qs=a("code"),Tl=n("language modeling"),Ml=n(` head on top.
The LayoutLM model was proposed in `),Qt=a("a"),$l=n(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),xl=n(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),jl=c(),en=a("p"),Fl=n("This model is a PyTorch "),on=a("a"),zl=n("torch.nn.Module"),El=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ql=c(),Ue=a("div"),L(tn.$$.fragment),Cl=c(),go=a("p"),Pl=n("The "),us=a("a"),Nl=n("LayoutLMForMaskedLM"),Sl=n(" forward method, overrides the "),ea=a("code"),Il=n("__call__"),Ol=n(" special method."),Dl=c(),L(Ho.$$.fragment),Al=c(),L(Bo.$$.fragment),er=c(),_o=a("h2"),Ro=a("a"),oa=a("span"),L(nn.$$.fragment),Ul=c(),ta=a("span"),Wl=n("LayoutLMForSequenceClassification"),or=c(),qe=a("div"),L(sn.$$.fragment),Hl=c(),an=a("p"),Bl=n(`LayoutLM Model with a sequence classification head on top (a linear layer on top of the pooled output) e.g. for
document image classification tasks such as the `),rn=a("a"),Rl=n("RVL-CDIP"),Kl=n(" dataset."),Vl=c(),ln=a("p"),Xl=n("The LayoutLM model was proposed in "),dn=a("a"),Yl=n(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),Zl=n(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),Gl=c(),cn=a("p"),Jl=n("This model is a PyTorch "),pn=a("a"),Ql=n("torch.nn.Module"),ed=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),od=c(),We=a("div"),L(un.$$.fragment),td=c(),yo=a("p"),nd=n("The "),hs=a("a"),sd=n("LayoutLMForSequenceClassification"),ad=n(" forward method, overrides the "),na=a("code"),rd=n("__call__"),id=n(" special method."),ld=c(),L(Ko.$$.fragment),dd=c(),L(Vo.$$.fragment),tr=c(),bo=a("h2"),Xo=a("a"),sa=a("span"),L(hn.$$.fragment),cd=c(),aa=a("span"),pd=n("LayoutLMForTokenClassification"),nr=c(),Ce=a("div"),L(mn.$$.fragment),ud=c(),ko=a("p"),hd=n(`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
sequence labeling (information extraction) tasks such as the `),fn=a("a"),md=n("FUNSD"),fd=n(`
dataset and the `),gn=a("a"),gd=n("SROIE"),_d=n(" dataset."),yd=c(),_n=a("p"),bd=n("The LayoutLM model was proposed in "),yn=a("a"),kd=n(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),Ld=n(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),vd=c(),bn=a("p"),wd=n("This model is a PyTorch "),kn=a("a"),Td=n("torch.nn.Module"),Md=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),$d=c(),He=a("div"),L(Ln.$$.fragment),xd=c(),Lo=a("p"),jd=n("The "),ms=a("a"),Fd=n("LayoutLMForTokenClassification"),zd=n(" forward method, overrides the "),ra=a("code"),Ed=n("__call__"),qd=n(" special method."),Cd=c(),L(Yo.$$.fragment),Pd=c(),L(Zo.$$.fragment),sr=c(),vo=a("h2"),Go=a("a"),ia=a("span"),L(vn.$$.fragment),Nd=c(),la=a("span"),Sd=n("TFLayoutLMModel"),ar=c(),Le=a("div"),L(wn.$$.fragment),Id=c(),da=a("p"),Od=n("The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top."),Dd=c(),Tn=a("p"),Ad=n("This model inherits from "),fs=a("a"),Ud=n("TFPreTrainedModel"),Wd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hd=c(),Mn=a("p"),Bd=n("This model is also a "),$n=a("a"),Rd=n("tf.keras.Model"),Kd=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vd=c(),L(Jo.$$.fragment),Xd=c(),Be=a("div"),L(xn.$$.fragment),Yd=c(),wo=a("p"),Zd=n("The "),gs=a("a"),Gd=n("TFLayoutLMModel"),Jd=n(" forward method, overrides the "),ca=a("code"),Qd=n("__call__"),ec=n(" special method."),oc=c(),L(Qo.$$.fragment),tc=c(),L(et.$$.fragment),rr=c(),To=a("h2"),ot=a("a"),pa=a("span"),L(jn.$$.fragment),nc=c(),ua=a("span"),sc=n("TFLayoutLMForMaskedLM"),ir=c(),ve=a("div"),L(Fn.$$.fragment),ac=c(),zn=a("p"),rc=n("LayoutLM Model with a "),ha=a("code"),ic=n("language modeling"),lc=n(" head on top."),dc=c(),En=a("p"),cc=n("This model inherits from "),_s=a("a"),pc=n("TFPreTrainedModel"),uc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hc=c(),qn=a("p"),mc=n("This model is also a "),Cn=a("a"),fc=n("tf.keras.Model"),gc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_c=c(),L(tt.$$.fragment),yc=c(),Re=a("div"),L(Pn.$$.fragment),bc=c(),Mo=a("p"),kc=n("The "),ys=a("a"),Lc=n("TFLayoutLMForMaskedLM"),vc=n(" forward method, overrides the "),ma=a("code"),wc=n("__call__"),Tc=n(" special method."),Mc=c(),L(nt.$$.fragment),$c=c(),L(st.$$.fragment),lr=c(),$o=a("h2"),at=a("a"),fa=a("span"),L(Nn.$$.fragment),xc=c(),ga=a("span"),jc=n("TFLayoutLMForSequenceClassification"),dr=c(),we=a("div"),L(Sn.$$.fragment),Fc=c(),_a=a("p"),zc=n(`LayoutLM Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Ec=c(),In=a("p"),qc=n("This model inherits from "),bs=a("a"),Cc=n("TFPreTrainedModel"),Pc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nc=c(),On=a("p"),Sc=n("This model is also a "),Dn=a("a"),Ic=n("tf.keras.Model"),Oc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dc=c(),L(rt.$$.fragment),Ac=c(),Ke=a("div"),L(An.$$.fragment),Uc=c(),xo=a("p"),Wc=n("The "),ks=a("a"),Hc=n("TFLayoutLMForSequenceClassification"),Bc=n(" forward method, overrides the "),ya=a("code"),Rc=n("__call__"),Kc=n(" special method."),Vc=c(),L(it.$$.fragment),Xc=c(),L(lt.$$.fragment),cr=c(),jo=a("h2"),dt=a("a"),ba=a("span"),L(Un.$$.fragment),Yc=c(),ka=a("span"),Zc=n("TFLayoutLMForTokenClassification"),pr=c(),Te=a("div"),L(Wn.$$.fragment),Gc=c(),La=a("p"),Jc=n(`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Qc=c(),Hn=a("p"),ep=n("This model inherits from "),Ls=a("a"),op=n("TFPreTrainedModel"),tp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),np=c(),Bn=a("p"),sp=n("This model is also a "),Rn=a("a"),ap=n("tf.keras.Model"),rp=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ip=c(),L(ct.$$.fragment),lp=c(),Ve=a("div"),L(Kn.$$.fragment),dp=c(),Fo=a("p"),cp=n("The "),vs=a("a"),pp=n("TFLayoutLMForTokenClassification"),up=n(" forward method, overrides the "),va=a("code"),hp=n("__call__"),mp=n(" special method."),fp=c(),L(pt.$$.fragment),gp=c(),L(ut.$$.fragment),this.h()},l(t){const y=ph('[data-svelte="svelte-1phssyn"]',document.head);d=r(y,"META",{name:!0,content:!0}),y.forEach(o),k=p(t),_=r(t,"H1",{class:!0});var Vn=i(_);h=r(Vn,"A",{id:!0,class:!0,href:!0});var wa=i(h);b=r(wa,"SPAN",{});var Ta=i(b);v(l.$$.fragment,Ta),Ta.forEach(o),wa.forEach(o),m=p(Vn),j=r(Vn,"SPAN",{});var Ma=i(j);re=s(Ma,"LayoutLM"),Ma.forEach(o),Vn.forEach(o),Y=p(t),z=r(t,"A",{id:!0}),i(z).forEach(o),ae=p(t),O=r(t,"H2",{class:!0});var Xn=i(O);Z=r(Xn,"A",{id:!0,class:!0,href:!0});var $a=i(Z);ne=r($a,"SPAN",{});var xa=i(ne);v(A.$$.fragment,xa),xa.forEach(o),$a.forEach(o),ie=p(Xn),se=r(Xn,"SPAN",{});var ja=i(se);J=s(ja,"Overview"),ja.forEach(o),Xn.forEach(o),D=p(t),G=r(t,"P",{});var Yn=i(G);Q=s(Yn,"The LayoutLM model was proposed in the paper "),F=r(Yn,"A",{href:!0,rel:!0});var Fa=i(F);q=s(Fa,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),Fa.forEach(o),le=s(Yn,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei, and
Ming Zhou. It\u2019s a simple but effective pretraining method of text and layout for document image understanding and
information extraction tasks, such as form understanding and receipt understanding. It obtains state-of-the-art results
on several downstream tasks:`),Yn.forEach(o),H=p(t),V=r(t,"UL",{});var zo=i(V);ee=r(zo,"LI",{});var Zn=i(ee);B=s(Zn,"form understanding: the "),oe=r(Zn,"A",{href:!0,rel:!0});var za=i(oe);de=s(za,"FUNSD"),za.forEach(o),C=s(Zn,` dataset (a collection of 199 annotated
forms comprising more than 30,000 words).`),Zn.forEach(o),ce=p(zo),U=r(zo,"LI",{});var Gn=i(U);pe=s(Gn,"receipt understanding: the "),te=r(Gn,"A",{href:!0,rel:!0});var Ea=i(te);R=s(Ea,"SROIE"),Ea.forEach(o),ue=s(Gn,` dataset (a collection of 626 receipts for
training and 347 receipts for testing).`),Gn.forEach(o),he=p(zo),N=r(zo,"LI",{});var Jn=i(N);me=s(Jn,"document image classification: the "),W=r(Jn,"A",{href:!0,rel:!0});var qa=i(W);fe=s(qa,"RVL-CDIP"),qa.forEach(o),g=s(Jn,` dataset (a collection of
400,000 images belonging to one of 16 classes).`),Jn.forEach(o),zo.forEach(o),x=p(t),X=r(t,"P",{});var Ca=i(X);je=s(Ca,"The abstract from the paper is the following:"),Ca.forEach(o),Me=p(t),S=r(t,"P",{});var Pa=i(S);be=r(Pa,"EM",{});var Na=i(be);Fe=s(Na,`Pre-training techniques have been verified successfully in a variety of NLP tasks in recent years. Despite the
widespread use of pretraining models for NLP applications, they almost exclusively focus on text-level manipulation,
while neglecting layout and style information that is vital for document image understanding. In this paper, we propose
the LayoutLM to jointly model interactions between text and layout information across scanned document images, which is
beneficial for a great number of real-world document image understanding tasks such as information extraction from
scanned documents. Furthermore, we also leverage image features to incorporate words\u2019 visual information into LayoutLM.
To the best of our knowledge, this is the first time that text and layout are jointly learned in a single framework for
document-level pretraining. It achieves new state-of-the-art results in several downstream tasks, including form
understanding (from 70.72 to 79.27), receipt understanding (from 94.02 to 95.24) and document image classification
(from 93.07 to 94.42).`),Na.forEach(o),Pa.forEach(o),$e=p(t),I=r(t,"P",{});var Sa=i(I);K=s(Sa,"Tips:"),Sa.forEach(o),xe=p(t),ye=r(t,"UL",{});var _p=i(ye);P=r(_p,"LI",{});var Xe=i(P);ze=s(Xe,"In addition to "),ke=r(Xe,"EM",{});var yp=i(ke);ge=s(yp,"input_ids"),yp.forEach(o),Ee=s(Xe,", "),Qn=r(Xe,"A",{href:!0});var bp=i(Qn);Hr=s(bp,"forward()"),bp.forEach(o),Br=s(Xe," also expects the input "),Is=r(Xe,"CODE",{});var kp=i(Is);Rr=s(kp,"bbox"),kp.forEach(o),Kr=s(Xe,`, which are
the bounding boxes (i.e. 2D-positions) of the input tokens. These can be obtained using an external OCR engine such
as Google\u2019s `),xt=r(Xe,"A",{href:!0,rel:!0});var Lp=i(xt);Vr=s(Lp,"Tesseract"),Lp.forEach(o),Xr=s(Xe," (there\u2019s a "),jt=r(Xe,"A",{href:!0,rel:!0});var vp=i(jt);Yr=s(vp,"Python wrapper"),vp.forEach(o),Zr=s(Xe,` available). Each bounding box should be in (x0, y0, x1, y1) format, where
(x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1) represents the
position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on a 0-1000
scale. To normalize, you can use the following function:`),Xe.forEach(o),_p.forEach(o),Da=p(t),v(Ft.$$.fragment,t),Aa=p(t),to=r(t,"P",{});var ws=i(to);Gr=s(ws,"Here, "),Os=r(ws,"CODE",{});var wp=i(Os);Jr=s(wp,"width"),wp.forEach(o),Qr=s(ws," and "),Ds=r(ws,"CODE",{});var Tp=i(Ds);ei=s(Tp,"height"),Tp.forEach(o),oi=s(ws,` correspond to the width and height of the original document in which the token
occurs. Those can be obtained using the Python Image Library (PIL) library for example, as follows:`),ws.forEach(o),Ua=p(t),v(zt.$$.fragment,t),Wa=p(t),es=r(t,"UL",{});var Mp=i(es);eo=r(Mp,"LI",{});var ht=i(eo);ti=s(ht,"For a demo which shows how to fine-tune "),os=r(ht,"A",{href:!0});var $p=i(os);ni=s($p,"LayoutLMForTokenClassification"),$p.forEach(o),si=s(ht," on the "),Et=r(ht,"A",{href:!0,rel:!0});var xp=i(Et);ai=s(xp,"FUNSD dataset"),xp.forEach(o),ri=s(ht," (a collection of annotated forms), see "),qt=r(ht,"A",{href:!0,rel:!0});var jp=i(qt);ii=s(jp,"this notebook"),jp.forEach(o),li=s(ht,`.
It includes an inference part, which shows how to use Google\u2019s Tesseract on a new document.`),ht.forEach(o),Mp.forEach(o),Ha=p(t),no=r(t,"P",{});var Ts=i(no);di=s(Ts,"This model was contributed by "),Ct=r(Ts,"A",{href:!0,rel:!0});var Fp=i(Ct);ci=s(Fp,"liminghao1630"),Fp.forEach(o),pi=s(Ts,`. The original code can be found
`),Pt=r(Ts,"A",{href:!0,rel:!0});var zp=i(Pt);ui=s(zp,"here"),zp.forEach(o),hi=s(Ts,"."),Ts.forEach(o),Ba=p(t),ro=r(t,"H2",{class:!0});var hr=i(ro);Co=r(hr,"A",{id:!0,class:!0,href:!0});var Ep=i(Co);As=r(Ep,"SPAN",{});var qp=i(As);v(Nt.$$.fragment,qp),qp.forEach(o),Ep.forEach(o),mi=p(hr),Us=r(hr,"SPAN",{});var Cp=i(Us);fi=s(Cp,"LayoutLMConfig"),Cp.forEach(o),hr.forEach(o),Ra=p(t),Pe=r(t,"DIV",{class:!0});var mt=i(Pe);v(St.$$.fragment,mt),gi=p(mt),io=r(mt,"P",{});var Ms=i(io);_i=s(Ms,"This is the configuration class to store the configuration of a "),ts=r(Ms,"A",{href:!0});var Pp=i(ts);yi=s(Pp,"LayoutLMModel"),Pp.forEach(o),bi=s(Ms,`. It is used to instantiate a
LayoutLM model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the LayoutLM
`),It=r(Ms,"A",{href:!0,rel:!0});var Np=i(It);ki=s(Np,"microsoft/layoutlm-base-uncased"),Np.forEach(o),Li=s(Ms," architecture."),Ms.forEach(o),vi=p(mt),lo=r(mt,"P",{});var $s=i(lo);wi=s($s,"Configuration objects inherit from "),ns=r($s,"A",{href:!0});var Sp=i(ns);Ti=s(Sp,"BertConfig"),Sp.forEach(o),Mi=s($s,` and can be used to control the model outputs. Read the
documentation from `),ss=r($s,"A",{href:!0});var Ip=i(ss);$i=s(Ip,"BertConfig"),Ip.forEach(o),xi=s($s," for more information."),$s.forEach(o),ji=p(mt),v(Po.$$.fragment,mt),mt.forEach(o),Ka=p(t),co=r(t,"H2",{class:!0});var mr=i(co);No=r(mr,"A",{id:!0,class:!0,href:!0});var Op=i(No);Ws=r(Op,"SPAN",{});var Dp=i(Ws);v(Ot.$$.fragment,Dp),Dp.forEach(o),Op.forEach(o),Fi=p(mr),Hs=r(mr,"SPAN",{});var Ap=i(Hs);zi=s(Ap,"LayoutLMTokenizer"),Ap.forEach(o),mr.forEach(o),Va=p(t),Ne=r(t,"DIV",{class:!0});var ft=i(Ne);v(Dt.$$.fragment,ft),Ei=p(ft),Bs=r(ft,"P",{});var Up=i(Bs);qi=s(Up,"Constructs a LayoutLM tokenizer."),Up.forEach(o),Ci=p(ft),So=r(ft,"P",{});var Ia=i(So);as=r(Ia,"A",{href:!0});var Wp=i(as);Pi=s(Wp,"LayoutLMTokenizer"),Wp.forEach(o),Ni=s(Ia," is identical to "),rs=r(Ia,"A",{href:!0});var Hp=i(rs);Si=s(Hp,"BertTokenizer"),Hp.forEach(o),Ii=s(Ia,` and runs end-to-end tokenization: punctuation splitting +
wordpiece.`),Ia.forEach(o),Oi=p(ft),At=r(ft,"P",{});var fr=i(At);Di=s(fr,"Refer to superclass "),is=r(fr,"A",{href:!0});var Bp=i(is);Ai=s(Bp,"BertTokenizer"),Bp.forEach(o),Ui=s(fr," for usage examples and documentation concerning parameters."),fr.forEach(o),ft.forEach(o),Xa=p(t),po=r(t,"H2",{class:!0});var gr=i(po);Io=r(gr,"A",{id:!0,class:!0,href:!0});var Rp=i(Io);Rs=r(Rp,"SPAN",{});var Kp=i(Rs);v(Ut.$$.fragment,Kp),Kp.forEach(o),Rp.forEach(o),Wi=p(gr),Ks=r(gr,"SPAN",{});var Vp=i(Ks);Hi=s(Vp,"LayoutLMTokenizerFast"),Vp.forEach(o),gr.forEach(o),Ya=p(t),Se=r(t,"DIV",{class:!0});var gt=i(Se);v(Wt.$$.fragment,gt),Bi=p(gt),Vs=r(gt,"P",{});var Xp=i(Vs);Ri=s(Xp,"Constructs a \u201CFast\u201D LayoutLMTokenizer."),Xp.forEach(o),Ki=p(gt),Oo=r(gt,"P",{});var Oa=i(Oo);ls=r(Oa,"A",{href:!0});var Yp=i(ls);Vi=s(Yp,"LayoutLMTokenizerFast"),Yp.forEach(o),Xi=s(Oa," is identical to "),ds=r(Oa,"A",{href:!0});var Zp=i(ds);Yi=s(Zp,"BertTokenizerFast"),Zp.forEach(o),Zi=s(Oa,` and runs end-to-end tokenization: punctuation
splitting + wordpiece.`),Oa.forEach(o),Gi=p(gt),Ht=r(gt,"P",{});var _r=i(Ht);Ji=s(_r,"Refer to superclass "),cs=r(_r,"A",{href:!0});var Gp=i(cs);Qi=s(Gp,"BertTokenizerFast"),Gp.forEach(o),el=s(_r," for usage examples and documentation concerning parameters."),_r.forEach(o),gt.forEach(o),Za=p(t),uo=r(t,"H2",{class:!0});var yr=i(uo);Do=r(yr,"A",{id:!0,class:!0,href:!0});var Jp=i(Do);Xs=r(Jp,"SPAN",{});var Qp=i(Xs);v(Bt.$$.fragment,Qp),Qp.forEach(o),Jp.forEach(o),ol=p(yr),Ys=r(yr,"SPAN",{});var eu=i(Ys);tl=s(eu,"LayoutLMModel"),eu.forEach(o),yr.forEach(o),Ga=p(t),Ie=r(t,"DIV",{class:!0});var _t=i(Ie);v(Rt.$$.fragment,_t),nl=p(_t),Kt=r(_t,"P",{});var br=i(Kt);sl=s(br,`The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top.
The LayoutLM model was proposed in `),Vt=r(br,"A",{href:!0,rel:!0});var ou=i(Vt);al=s(ou,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),ou.forEach(o),rl=s(br,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),br.forEach(o),il=p(_t),Xt=r(_t,"P",{});var kr=i(Xt);ll=s(kr,"This model is a PyTorch "),Yt=r(kr,"A",{href:!0,rel:!0});var tu=i(Yt);dl=s(tu,"torch.nn.Module"),tu.forEach(o),cl=s(kr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),kr.forEach(o),pl=p(_t),Ae=r(_t,"DIV",{class:!0});var yt=i(Ae);v(Zt.$$.fragment,yt),ul=p(yt),ho=r(yt,"P",{});var xs=i(ho);hl=s(xs,"The "),ps=r(xs,"A",{href:!0});var nu=i(ps);ml=s(nu,"LayoutLMModel"),nu.forEach(o),fl=s(xs," forward method, overrides the "),Zs=r(xs,"CODE",{});var su=i(Zs);gl=s(su,"__call__"),su.forEach(o),_l=s(xs," special method."),xs.forEach(o),yl=p(yt),v(Ao.$$.fragment,yt),bl=p(yt),v(Uo.$$.fragment,yt),yt.forEach(o),_t.forEach(o),Ja=p(t),mo=r(t,"H2",{class:!0});var Lr=i(mo);Wo=r(Lr,"A",{id:!0,class:!0,href:!0});var au=i(Wo);Gs=r(au,"SPAN",{});var ru=i(Gs);v(Gt.$$.fragment,ru),ru.forEach(o),au.forEach(o),kl=p(Lr),Js=r(Lr,"SPAN",{});var iu=i(Js);Ll=s(iu,"LayoutLMForMaskedLM"),iu.forEach(o),Lr.forEach(o),Qa=p(t),Oe=r(t,"DIV",{class:!0});var bt=i(Oe);v(Jt.$$.fragment,bt),vl=p(bt),fo=r(bt,"P",{});var js=i(fo);wl=s(js,"LayoutLM Model with a "),Qs=r(js,"CODE",{});var lu=i(Qs);Tl=s(lu,"language modeling"),lu.forEach(o),Ml=s(js,` head on top.
The LayoutLM model was proposed in `),Qt=r(js,"A",{href:!0,rel:!0});var du=i(Qt);$l=s(du,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),du.forEach(o),xl=s(js,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),js.forEach(o),jl=p(bt),en=r(bt,"P",{});var vr=i(en);Fl=s(vr,"This model is a PyTorch "),on=r(vr,"A",{href:!0,rel:!0});var cu=i(on);zl=s(cu,"torch.nn.Module"),cu.forEach(o),El=s(vr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),vr.forEach(o),ql=p(bt),Ue=r(bt,"DIV",{class:!0});var kt=i(Ue);v(tn.$$.fragment,kt),Cl=p(kt),go=r(kt,"P",{});var Fs=i(go);Pl=s(Fs,"The "),us=r(Fs,"A",{href:!0});var pu=i(us);Nl=s(pu,"LayoutLMForMaskedLM"),pu.forEach(o),Sl=s(Fs," forward method, overrides the "),ea=r(Fs,"CODE",{});var uu=i(ea);Il=s(uu,"__call__"),uu.forEach(o),Ol=s(Fs," special method."),Fs.forEach(o),Dl=p(kt),v(Ho.$$.fragment,kt),Al=p(kt),v(Bo.$$.fragment,kt),kt.forEach(o),bt.forEach(o),er=p(t),_o=r(t,"H2",{class:!0});var wr=i(_o);Ro=r(wr,"A",{id:!0,class:!0,href:!0});var hu=i(Ro);oa=r(hu,"SPAN",{});var mu=i(oa);v(nn.$$.fragment,mu),mu.forEach(o),hu.forEach(o),Ul=p(wr),ta=r(wr,"SPAN",{});var fu=i(ta);Wl=s(fu,"LayoutLMForSequenceClassification"),fu.forEach(o),wr.forEach(o),or=p(t),qe=r(t,"DIV",{class:!0});var so=i(qe);v(sn.$$.fragment,so),Hl=p(so),an=r(so,"P",{});var Tr=i(an);Bl=s(Tr,`LayoutLM Model with a sequence classification head on top (a linear layer on top of the pooled output) e.g. for
document image classification tasks such as the `),rn=r(Tr,"A",{href:!0,rel:!0});var gu=i(rn);Rl=s(gu,"RVL-CDIP"),gu.forEach(o),Kl=s(Tr," dataset."),Tr.forEach(o),Vl=p(so),ln=r(so,"P",{});var Mr=i(ln);Xl=s(Mr,"The LayoutLM model was proposed in "),dn=r(Mr,"A",{href:!0,rel:!0});var _u=i(dn);Yl=s(_u,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),_u.forEach(o),Zl=s(Mr,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),Mr.forEach(o),Gl=p(so),cn=r(so,"P",{});var $r=i(cn);Jl=s($r,"This model is a PyTorch "),pn=r($r,"A",{href:!0,rel:!0});var yu=i(pn);Ql=s(yu,"torch.nn.Module"),yu.forEach(o),ed=s($r,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),$r.forEach(o),od=p(so),We=r(so,"DIV",{class:!0});var Lt=i(We);v(un.$$.fragment,Lt),td=p(Lt),yo=r(Lt,"P",{});var zs=i(yo);nd=s(zs,"The "),hs=r(zs,"A",{href:!0});var bu=i(hs);sd=s(bu,"LayoutLMForSequenceClassification"),bu.forEach(o),ad=s(zs," forward method, overrides the "),na=r(zs,"CODE",{});var ku=i(na);rd=s(ku,"__call__"),ku.forEach(o),id=s(zs," special method."),zs.forEach(o),ld=p(Lt),v(Ko.$$.fragment,Lt),dd=p(Lt),v(Vo.$$.fragment,Lt),Lt.forEach(o),so.forEach(o),tr=p(t),bo=r(t,"H2",{class:!0});var xr=i(bo);Xo=r(xr,"A",{id:!0,class:!0,href:!0});var Lu=i(Xo);sa=r(Lu,"SPAN",{});var vu=i(sa);v(hn.$$.fragment,vu),vu.forEach(o),Lu.forEach(o),cd=p(xr),aa=r(xr,"SPAN",{});var wu=i(aa);pd=s(wu,"LayoutLMForTokenClassification"),wu.forEach(o),xr.forEach(o),nr=p(t),Ce=r(t,"DIV",{class:!0});var ao=i(Ce);v(mn.$$.fragment,ao),ud=p(ao),ko=r(ao,"P",{});var Es=i(ko);hd=s(Es,`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
sequence labeling (information extraction) tasks such as the `),fn=r(Es,"A",{href:!0,rel:!0});var Tu=i(fn);md=s(Tu,"FUNSD"),Tu.forEach(o),fd=s(Es,`
dataset and the `),gn=r(Es,"A",{href:!0,rel:!0});var Mu=i(gn);gd=s(Mu,"SROIE"),Mu.forEach(o),_d=s(Es," dataset."),Es.forEach(o),yd=p(ao),_n=r(ao,"P",{});var jr=i(_n);bd=s(jr,"The LayoutLM model was proposed in "),yn=r(jr,"A",{href:!0,rel:!0});var $u=i(yn);kd=s($u,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),$u.forEach(o),Ld=s(jr,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),jr.forEach(o),vd=p(ao),bn=r(ao,"P",{});var Fr=i(bn);wd=s(Fr,"This model is a PyTorch "),kn=r(Fr,"A",{href:!0,rel:!0});var xu=i(kn);Td=s(xu,"torch.nn.Module"),xu.forEach(o),Md=s(Fr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Fr.forEach(o),$d=p(ao),He=r(ao,"DIV",{class:!0});var vt=i(He);v(Ln.$$.fragment,vt),xd=p(vt),Lo=r(vt,"P",{});var qs=i(Lo);jd=s(qs,"The "),ms=r(qs,"A",{href:!0});var ju=i(ms);Fd=s(ju,"LayoutLMForTokenClassification"),ju.forEach(o),zd=s(qs," forward method, overrides the "),ra=r(qs,"CODE",{});var Fu=i(ra);Ed=s(Fu,"__call__"),Fu.forEach(o),qd=s(qs," special method."),qs.forEach(o),Cd=p(vt),v(Yo.$$.fragment,vt),Pd=p(vt),v(Zo.$$.fragment,vt),vt.forEach(o),ao.forEach(o),sr=p(t),vo=r(t,"H2",{class:!0});var zr=i(vo);Go=r(zr,"A",{id:!0,class:!0,href:!0});var zu=i(Go);ia=r(zu,"SPAN",{});var Eu=i(ia);v(vn.$$.fragment,Eu),Eu.forEach(o),zu.forEach(o),Nd=p(zr),la=r(zr,"SPAN",{});var qu=i(la);Sd=s(qu,"TFLayoutLMModel"),qu.forEach(o),zr.forEach(o),ar=p(t),Le=r(t,"DIV",{class:!0});var Ye=i(Le);v(wn.$$.fragment,Ye),Id=p(Ye),da=r(Ye,"P",{});var Cu=i(da);Od=s(Cu,"The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top."),Cu.forEach(o),Dd=p(Ye),Tn=r(Ye,"P",{});var Er=i(Tn);Ad=s(Er,"This model inherits from "),fs=r(Er,"A",{href:!0});var Pu=i(fs);Ud=s(Pu,"TFPreTrainedModel"),Pu.forEach(o),Wd=s(Er,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Er.forEach(o),Hd=p(Ye),Mn=r(Ye,"P",{});var qr=i(Mn);Bd=s(qr,"This model is also a "),$n=r(qr,"A",{href:!0,rel:!0});var Nu=i($n);Rd=s(Nu,"tf.keras.Model"),Nu.forEach(o),Kd=s(qr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qr.forEach(o),Vd=p(Ye),v(Jo.$$.fragment,Ye),Xd=p(Ye),Be=r(Ye,"DIV",{class:!0});var wt=i(Be);v(xn.$$.fragment,wt),Yd=p(wt),wo=r(wt,"P",{});var Cs=i(wo);Zd=s(Cs,"The "),gs=r(Cs,"A",{href:!0});var Su=i(gs);Gd=s(Su,"TFLayoutLMModel"),Su.forEach(o),Jd=s(Cs," forward method, overrides the "),ca=r(Cs,"CODE",{});var Iu=i(ca);Qd=s(Iu,"__call__"),Iu.forEach(o),ec=s(Cs," special method."),Cs.forEach(o),oc=p(wt),v(Qo.$$.fragment,wt),tc=p(wt),v(et.$$.fragment,wt),wt.forEach(o),Ye.forEach(o),rr=p(t),To=r(t,"H2",{class:!0});var Cr=i(To);ot=r(Cr,"A",{id:!0,class:!0,href:!0});var Ou=i(ot);pa=r(Ou,"SPAN",{});var Du=i(pa);v(jn.$$.fragment,Du),Du.forEach(o),Ou.forEach(o),nc=p(Cr),ua=r(Cr,"SPAN",{});var Au=i(ua);sc=s(Au,"TFLayoutLMForMaskedLM"),Au.forEach(o),Cr.forEach(o),ir=p(t),ve=r(t,"DIV",{class:!0});var Ze=i(ve);v(Fn.$$.fragment,Ze),ac=p(Ze),zn=r(Ze,"P",{});var Pr=i(zn);rc=s(Pr,"LayoutLM Model with a "),ha=r(Pr,"CODE",{});var Uu=i(ha);ic=s(Uu,"language modeling"),Uu.forEach(o),lc=s(Pr," head on top."),Pr.forEach(o),dc=p(Ze),En=r(Ze,"P",{});var Nr=i(En);cc=s(Nr,"This model inherits from "),_s=r(Nr,"A",{href:!0});var Wu=i(_s);pc=s(Wu,"TFPreTrainedModel"),Wu.forEach(o),uc=s(Nr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nr.forEach(o),hc=p(Ze),qn=r(Ze,"P",{});var Sr=i(qn);mc=s(Sr,"This model is also a "),Cn=r(Sr,"A",{href:!0,rel:!0});var Hu=i(Cn);fc=s(Hu,"tf.keras.Model"),Hu.forEach(o),gc=s(Sr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sr.forEach(o),_c=p(Ze),v(tt.$$.fragment,Ze),yc=p(Ze),Re=r(Ze,"DIV",{class:!0});var Tt=i(Re);v(Pn.$$.fragment,Tt),bc=p(Tt),Mo=r(Tt,"P",{});var Ps=i(Mo);kc=s(Ps,"The "),ys=r(Ps,"A",{href:!0});var Bu=i(ys);Lc=s(Bu,"TFLayoutLMForMaskedLM"),Bu.forEach(o),vc=s(Ps," forward method, overrides the "),ma=r(Ps,"CODE",{});var Ru=i(ma);wc=s(Ru,"__call__"),Ru.forEach(o),Tc=s(Ps," special method."),Ps.forEach(o),Mc=p(Tt),v(nt.$$.fragment,Tt),$c=p(Tt),v(st.$$.fragment,Tt),Tt.forEach(o),Ze.forEach(o),lr=p(t),$o=r(t,"H2",{class:!0});var Ir=i($o);at=r(Ir,"A",{id:!0,class:!0,href:!0});var Ku=i(at);fa=r(Ku,"SPAN",{});var Vu=i(fa);v(Nn.$$.fragment,Vu),Vu.forEach(o),Ku.forEach(o),xc=p(Ir),ga=r(Ir,"SPAN",{});var Xu=i(ga);jc=s(Xu,"TFLayoutLMForSequenceClassification"),Xu.forEach(o),Ir.forEach(o),dr=p(t),we=r(t,"DIV",{class:!0});var Ge=i(we);v(Sn.$$.fragment,Ge),Fc=p(Ge),_a=r(Ge,"P",{});var Yu=i(_a);zc=s(Yu,`LayoutLM Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Yu.forEach(o),Ec=p(Ge),In=r(Ge,"P",{});var Or=i(In);qc=s(Or,"This model inherits from "),bs=r(Or,"A",{href:!0});var Zu=i(bs);Cc=s(Zu,"TFPreTrainedModel"),Zu.forEach(o),Pc=s(Or,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Or.forEach(o),Nc=p(Ge),On=r(Ge,"P",{});var Dr=i(On);Sc=s(Dr,"This model is also a "),Dn=r(Dr,"A",{href:!0,rel:!0});var Gu=i(Dn);Ic=s(Gu,"tf.keras.Model"),Gu.forEach(o),Oc=s(Dr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dr.forEach(o),Dc=p(Ge),v(rt.$$.fragment,Ge),Ac=p(Ge),Ke=r(Ge,"DIV",{class:!0});var Mt=i(Ke);v(An.$$.fragment,Mt),Uc=p(Mt),xo=r(Mt,"P",{});var Ns=i(xo);Wc=s(Ns,"The "),ks=r(Ns,"A",{href:!0});var Ju=i(ks);Hc=s(Ju,"TFLayoutLMForSequenceClassification"),Ju.forEach(o),Bc=s(Ns," forward method, overrides the "),ya=r(Ns,"CODE",{});var Qu=i(ya);Rc=s(Qu,"__call__"),Qu.forEach(o),Kc=s(Ns," special method."),Ns.forEach(o),Vc=p(Mt),v(it.$$.fragment,Mt),Xc=p(Mt),v(lt.$$.fragment,Mt),Mt.forEach(o),Ge.forEach(o),cr=p(t),jo=r(t,"H2",{class:!0});var Ar=i(jo);dt=r(Ar,"A",{id:!0,class:!0,href:!0});var eh=i(dt);ba=r(eh,"SPAN",{});var oh=i(ba);v(Un.$$.fragment,oh),oh.forEach(o),eh.forEach(o),Yc=p(Ar),ka=r(Ar,"SPAN",{});var th=i(ka);Zc=s(th,"TFLayoutLMForTokenClassification"),th.forEach(o),Ar.forEach(o),pr=p(t),Te=r(t,"DIV",{class:!0});var Je=i(Te);v(Wn.$$.fragment,Je),Gc=p(Je),La=r(Je,"P",{});var nh=i(La);Jc=s(nh,`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),nh.forEach(o),Qc=p(Je),Hn=r(Je,"P",{});var Ur=i(Hn);ep=s(Ur,"This model inherits from "),Ls=r(Ur,"A",{href:!0});var sh=i(Ls);op=s(sh,"TFPreTrainedModel"),sh.forEach(o),tp=s(Ur,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ur.forEach(o),np=p(Je),Bn=r(Je,"P",{});var Wr=i(Bn);sp=s(Wr,"This model is also a "),Rn=r(Wr,"A",{href:!0,rel:!0});var ah=i(Rn);ap=s(ah,"tf.keras.Model"),ah.forEach(o),rp=s(Wr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wr.forEach(o),ip=p(Je),v(ct.$$.fragment,Je),lp=p(Je),Ve=r(Je,"DIV",{class:!0});var $t=i(Ve);v(Kn.$$.fragment,$t),dp=p($t),Fo=r($t,"P",{});var Ss=i(Fo);cp=s(Ss,"The "),vs=r(Ss,"A",{href:!0});var rh=i(vs);pp=s(rh,"TFLayoutLMForTokenClassification"),rh.forEach(o),up=s(Ss," forward method, overrides the "),va=r(Ss,"CODE",{});var ih=i(va);hp=s(ih,"__call__"),ih.forEach(o),mp=s(Ss," special method."),Ss.forEach(o),fp=p($t),v(pt.$$.fragment,$t),gp=p($t),v(ut.$$.fragment,$t),$t.forEach(o),Je.forEach(o),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(Nh)),u(h,"id","layoutlm"),u(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(h,"href","#layoutlm"),u(_,"class","relative group"),u(z,"id","Overview"),u(Z,"id","overview"),u(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Z,"href","#overview"),u(O,"class","relative group"),u(F,"href","https://arxiv.org/abs/1912.13318"),u(F,"rel","nofollow"),u(oe,"href","https://guillaumejaume.github.io/FUNSD/"),u(oe,"rel","nofollow"),u(te,"href","https://rrc.cvc.uab.es/?ch=13"),u(te,"rel","nofollow"),u(W,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),u(W,"rel","nofollow"),u(Qn,"href","/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.LayoutLMModel.forward"),u(xt,"href","https://github.com/tesseract-ocr/tesseract"),u(xt,"rel","nofollow"),u(jt,"href","https://pypi.org/project/pytesseract/"),u(jt,"rel","nofollow"),u(os,"href","/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.LayoutLMForTokenClassification"),u(Et,"href","https://guillaumejaume.github.io/FUNSD/"),u(Et,"rel","nofollow"),u(qt,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/LayoutLM/Fine_tuning_LayoutLMForTokenClassification_on_FUNSD.ipynb"),u(qt,"rel","nofollow"),u(Ct,"href","https://huggingface.co/liminghao1630"),u(Ct,"rel","nofollow"),u(Pt,"href","https://github.com/microsoft/unilm/tree/master/layoutlm"),u(Pt,"rel","nofollow"),u(Co,"id","transformers.LayoutLMConfig"),u(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Co,"href","#transformers.LayoutLMConfig"),u(ro,"class","relative group"),u(ts,"href","/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.LayoutLMModel"),u(It,"href","https://huggingface.co/microsoft/layoutlm-base-uncased"),u(It,"rel","nofollow"),u(ns,"href","/docs/transformers/v4.21.3/en/model_doc/bert#transformers.BertConfig"),u(ss,"href","/docs/transformers/v4.21.3/en/model_doc/bert#transformers.BertConfig"),u(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(No,"id","transformers.LayoutLMTokenizer"),u(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(No,"href","#transformers.LayoutLMTokenizer"),u(co,"class","relative group"),u(as,"href","/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.LayoutLMTokenizer"),u(rs,"href","/docs/transformers/v4.21.3/en/model_doc/bert#transformers.BertTokenizer"),u(is,"href","/docs/transformers/v4.21.3/en/model_doc/bert#transformers.BertTokenizer"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Io,"id","transformers.LayoutLMTokenizerFast"),u(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Io,"href","#transformers.LayoutLMTokenizerFast"),u(po,"class","relative group"),u(ls,"href","/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.LayoutLMTokenizerFast"),u(ds,"href","/docs/transformers/v4.21.3/en/model_doc/bert#transformers.BertTokenizerFast"),u(cs,"href","/docs/transformers/v4.21.3/en/model_doc/bert#transformers.BertTokenizerFast"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Do,"id","transformers.LayoutLMModel"),u(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Do,"href","#transformers.LayoutLMModel"),u(uo,"class","relative group"),u(Vt,"href","https://arxiv.org/abs/1912.13318"),u(Vt,"rel","nofollow"),u(Yt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Yt,"rel","nofollow"),u(ps,"href","/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.LayoutLMModel"),u(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Wo,"id","transformers.LayoutLMForMaskedLM"),u(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Wo,"href","#transformers.LayoutLMForMaskedLM"),u(mo,"class","relative group"),u(Qt,"href","https://arxiv.org/abs/1912.13318"),u(Qt,"rel","nofollow"),u(on,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(on,"rel","nofollow"),u(us,"href","/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.LayoutLMForMaskedLM"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ro,"id","transformers.LayoutLMForSequenceClassification"),u(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ro,"href","#transformers.LayoutLMForSequenceClassification"),u(_o,"class","relative group"),u(rn,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),u(rn,"rel","nofollow"),u(dn,"href","https://arxiv.org/abs/1912.13318"),u(dn,"rel","nofollow"),u(pn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(pn,"rel","nofollow"),u(hs,"href","/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.LayoutLMForSequenceClassification"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xo,"id","transformers.LayoutLMForTokenClassification"),u(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Xo,"href","#transformers.LayoutLMForTokenClassification"),u(bo,"class","relative group"),u(fn,"href","https://guillaumejaume.github.io/FUNSD/"),u(fn,"rel","nofollow"),u(gn,"href","https://rrc.cvc.uab.es/?ch=13"),u(gn,"rel","nofollow"),u(yn,"href","https://arxiv.org/abs/1912.13318"),u(yn,"rel","nofollow"),u(kn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(kn,"rel","nofollow"),u(ms,"href","/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.LayoutLMForTokenClassification"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Go,"id","transformers.TFLayoutLMModel"),u(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Go,"href","#transformers.TFLayoutLMModel"),u(vo,"class","relative group"),u(fs,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel"),u($n,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u($n,"rel","nofollow"),u(gs,"href","/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.TFLayoutLMModel"),u(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"id","transformers.TFLayoutLMForMaskedLM"),u(ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ot,"href","#transformers.TFLayoutLMForMaskedLM"),u(To,"class","relative group"),u(_s,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel"),u(Cn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Cn,"rel","nofollow"),u(ys,"href","/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.TFLayoutLMForMaskedLM"),u(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"id","transformers.TFLayoutLMForSequenceClassification"),u(at,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(at,"href","#transformers.TFLayoutLMForSequenceClassification"),u($o,"class","relative group"),u(bs,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel"),u(Dn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Dn,"rel","nofollow"),u(ks,"href","/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.TFLayoutLMForSequenceClassification"),u(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dt,"id","transformers.TFLayoutLMForTokenClassification"),u(dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(dt,"href","#transformers.TFLayoutLMForTokenClassification"),u(jo,"class","relative group"),u(Ls,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel"),u(Rn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Rn,"rel","nofollow"),u(vs,"href","/docs/transformers/v4.21.3/en/model_doc/layoutlm#transformers.TFLayoutLMForTokenClassification"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,y){e(document.head,d),f(t,k,y),f(t,_,y),e(_,h),e(h,b),w(l,b,null),e(_,m),e(_,j),e(j,re),f(t,Y,y),f(t,z,y),f(t,ae,y),f(t,O,y),e(O,Z),e(Z,ne),w(A,ne,null),e(O,ie),e(O,se),e(se,J),f(t,D,y),f(t,G,y),e(G,Q),e(G,F),e(F,q),e(G,le),f(t,H,y),f(t,V,y),e(V,ee),e(ee,B),e(ee,oe),e(oe,de),e(ee,C),e(V,ce),e(V,U),e(U,pe),e(U,te),e(te,R),e(U,ue),e(V,he),e(V,N),e(N,me),e(N,W),e(W,fe),e(N,g),f(t,x,y),f(t,X,y),e(X,je),f(t,Me,y),f(t,S,y),e(S,be),e(be,Fe),f(t,$e,y),f(t,I,y),e(I,K),f(t,xe,y),f(t,ye,y),e(ye,P),e(P,ze),e(P,ke),e(ke,ge),e(P,Ee),e(P,Qn),e(Qn,Hr),e(P,Br),e(P,Is),e(Is,Rr),e(P,Kr),e(P,xt),e(xt,Vr),e(P,Xr),e(P,jt),e(jt,Yr),e(P,Zr),f(t,Da,y),w(Ft,t,y),f(t,Aa,y),f(t,to,y),e(to,Gr),e(to,Os),e(Os,Jr),e(to,Qr),e(to,Ds),e(Ds,ei),e(to,oi),f(t,Ua,y),w(zt,t,y),f(t,Wa,y),f(t,es,y),e(es,eo),e(eo,ti),e(eo,os),e(os,ni),e(eo,si),e(eo,Et),e(Et,ai),e(eo,ri),e(eo,qt),e(qt,ii),e(eo,li),f(t,Ha,y),f(t,no,y),e(no,di),e(no,Ct),e(Ct,ci),e(no,pi),e(no,Pt),e(Pt,ui),e(no,hi),f(t,Ba,y),f(t,ro,y),e(ro,Co),e(Co,As),w(Nt,As,null),e(ro,mi),e(ro,Us),e(Us,fi),f(t,Ra,y),f(t,Pe,y),w(St,Pe,null),e(Pe,gi),e(Pe,io),e(io,_i),e(io,ts),e(ts,yi),e(io,bi),e(io,It),e(It,ki),e(io,Li),e(Pe,vi),e(Pe,lo),e(lo,wi),e(lo,ns),e(ns,Ti),e(lo,Mi),e(lo,ss),e(ss,$i),e(lo,xi),e(Pe,ji),w(Po,Pe,null),f(t,Ka,y),f(t,co,y),e(co,No),e(No,Ws),w(Ot,Ws,null),e(co,Fi),e(co,Hs),e(Hs,zi),f(t,Va,y),f(t,Ne,y),w(Dt,Ne,null),e(Ne,Ei),e(Ne,Bs),e(Bs,qi),e(Ne,Ci),e(Ne,So),e(So,as),e(as,Pi),e(So,Ni),e(So,rs),e(rs,Si),e(So,Ii),e(Ne,Oi),e(Ne,At),e(At,Di),e(At,is),e(is,Ai),e(At,Ui),f(t,Xa,y),f(t,po,y),e(po,Io),e(Io,Rs),w(Ut,Rs,null),e(po,Wi),e(po,Ks),e(Ks,Hi),f(t,Ya,y),f(t,Se,y),w(Wt,Se,null),e(Se,Bi),e(Se,Vs),e(Vs,Ri),e(Se,Ki),e(Se,Oo),e(Oo,ls),e(ls,Vi),e(Oo,Xi),e(Oo,ds),e(ds,Yi),e(Oo,Zi),e(Se,Gi),e(Se,Ht),e(Ht,Ji),e(Ht,cs),e(cs,Qi),e(Ht,el),f(t,Za,y),f(t,uo,y),e(uo,Do),e(Do,Xs),w(Bt,Xs,null),e(uo,ol),e(uo,Ys),e(Ys,tl),f(t,Ga,y),f(t,Ie,y),w(Rt,Ie,null),e(Ie,nl),e(Ie,Kt),e(Kt,sl),e(Kt,Vt),e(Vt,al),e(Kt,rl),e(Ie,il),e(Ie,Xt),e(Xt,ll),e(Xt,Yt),e(Yt,dl),e(Xt,cl),e(Ie,pl),e(Ie,Ae),w(Zt,Ae,null),e(Ae,ul),e(Ae,ho),e(ho,hl),e(ho,ps),e(ps,ml),e(ho,fl),e(ho,Zs),e(Zs,gl),e(ho,_l),e(Ae,yl),w(Ao,Ae,null),e(Ae,bl),w(Uo,Ae,null),f(t,Ja,y),f(t,mo,y),e(mo,Wo),e(Wo,Gs),w(Gt,Gs,null),e(mo,kl),e(mo,Js),e(Js,Ll),f(t,Qa,y),f(t,Oe,y),w(Jt,Oe,null),e(Oe,vl),e(Oe,fo),e(fo,wl),e(fo,Qs),e(Qs,Tl),e(fo,Ml),e(fo,Qt),e(Qt,$l),e(fo,xl),e(Oe,jl),e(Oe,en),e(en,Fl),e(en,on),e(on,zl),e(en,El),e(Oe,ql),e(Oe,Ue),w(tn,Ue,null),e(Ue,Cl),e(Ue,go),e(go,Pl),e(go,us),e(us,Nl),e(go,Sl),e(go,ea),e(ea,Il),e(go,Ol),e(Ue,Dl),w(Ho,Ue,null),e(Ue,Al),w(Bo,Ue,null),f(t,er,y),f(t,_o,y),e(_o,Ro),e(Ro,oa),w(nn,oa,null),e(_o,Ul),e(_o,ta),e(ta,Wl),f(t,or,y),f(t,qe,y),w(sn,qe,null),e(qe,Hl),e(qe,an),e(an,Bl),e(an,rn),e(rn,Rl),e(an,Kl),e(qe,Vl),e(qe,ln),e(ln,Xl),e(ln,dn),e(dn,Yl),e(ln,Zl),e(qe,Gl),e(qe,cn),e(cn,Jl),e(cn,pn),e(pn,Ql),e(cn,ed),e(qe,od),e(qe,We),w(un,We,null),e(We,td),e(We,yo),e(yo,nd),e(yo,hs),e(hs,sd),e(yo,ad),e(yo,na),e(na,rd),e(yo,id),e(We,ld),w(Ko,We,null),e(We,dd),w(Vo,We,null),f(t,tr,y),f(t,bo,y),e(bo,Xo),e(Xo,sa),w(hn,sa,null),e(bo,cd),e(bo,aa),e(aa,pd),f(t,nr,y),f(t,Ce,y),w(mn,Ce,null),e(Ce,ud),e(Ce,ko),e(ko,hd),e(ko,fn),e(fn,md),e(ko,fd),e(ko,gn),e(gn,gd),e(ko,_d),e(Ce,yd),e(Ce,_n),e(_n,bd),e(_n,yn),e(yn,kd),e(_n,Ld),e(Ce,vd),e(Ce,bn),e(bn,wd),e(bn,kn),e(kn,Td),e(bn,Md),e(Ce,$d),e(Ce,He),w(Ln,He,null),e(He,xd),e(He,Lo),e(Lo,jd),e(Lo,ms),e(ms,Fd),e(Lo,zd),e(Lo,ra),e(ra,Ed),e(Lo,qd),e(He,Cd),w(Yo,He,null),e(He,Pd),w(Zo,He,null),f(t,sr,y),f(t,vo,y),e(vo,Go),e(Go,ia),w(vn,ia,null),e(vo,Nd),e(vo,la),e(la,Sd),f(t,ar,y),f(t,Le,y),w(wn,Le,null),e(Le,Id),e(Le,da),e(da,Od),e(Le,Dd),e(Le,Tn),e(Tn,Ad),e(Tn,fs),e(fs,Ud),e(Tn,Wd),e(Le,Hd),e(Le,Mn),e(Mn,Bd),e(Mn,$n),e($n,Rd),e(Mn,Kd),e(Le,Vd),w(Jo,Le,null),e(Le,Xd),e(Le,Be),w(xn,Be,null),e(Be,Yd),e(Be,wo),e(wo,Zd),e(wo,gs),e(gs,Gd),e(wo,Jd),e(wo,ca),e(ca,Qd),e(wo,ec),e(Be,oc),w(Qo,Be,null),e(Be,tc),w(et,Be,null),f(t,rr,y),f(t,To,y),e(To,ot),e(ot,pa),w(jn,pa,null),e(To,nc),e(To,ua),e(ua,sc),f(t,ir,y),f(t,ve,y),w(Fn,ve,null),e(ve,ac),e(ve,zn),e(zn,rc),e(zn,ha),e(ha,ic),e(zn,lc),e(ve,dc),e(ve,En),e(En,cc),e(En,_s),e(_s,pc),e(En,uc),e(ve,hc),e(ve,qn),e(qn,mc),e(qn,Cn),e(Cn,fc),e(qn,gc),e(ve,_c),w(tt,ve,null),e(ve,yc),e(ve,Re),w(Pn,Re,null),e(Re,bc),e(Re,Mo),e(Mo,kc),e(Mo,ys),e(ys,Lc),e(Mo,vc),e(Mo,ma),e(ma,wc),e(Mo,Tc),e(Re,Mc),w(nt,Re,null),e(Re,$c),w(st,Re,null),f(t,lr,y),f(t,$o,y),e($o,at),e(at,fa),w(Nn,fa,null),e($o,xc),e($o,ga),e(ga,jc),f(t,dr,y),f(t,we,y),w(Sn,we,null),e(we,Fc),e(we,_a),e(_a,zc),e(we,Ec),e(we,In),e(In,qc),e(In,bs),e(bs,Cc),e(In,Pc),e(we,Nc),e(we,On),e(On,Sc),e(On,Dn),e(Dn,Ic),e(On,Oc),e(we,Dc),w(rt,we,null),e(we,Ac),e(we,Ke),w(An,Ke,null),e(Ke,Uc),e(Ke,xo),e(xo,Wc),e(xo,ks),e(ks,Hc),e(xo,Bc),e(xo,ya),e(ya,Rc),e(xo,Kc),e(Ke,Vc),w(it,Ke,null),e(Ke,Xc),w(lt,Ke,null),f(t,cr,y),f(t,jo,y),e(jo,dt),e(dt,ba),w(Un,ba,null),e(jo,Yc),e(jo,ka),e(ka,Zc),f(t,pr,y),f(t,Te,y),w(Wn,Te,null),e(Te,Gc),e(Te,La),e(La,Jc),e(Te,Qc),e(Te,Hn),e(Hn,ep),e(Hn,Ls),e(Ls,op),e(Hn,tp),e(Te,np),e(Te,Bn),e(Bn,sp),e(Bn,Rn),e(Rn,ap),e(Bn,rp),e(Te,ip),w(ct,Te,null),e(Te,lp),e(Te,Ve),w(Kn,Ve,null),e(Ve,dp),e(Ve,Fo),e(Fo,cp),e(Fo,vs),e(vs,pp),e(Fo,up),e(Fo,va),e(va,hp),e(Fo,mp),e(Ve,fp),w(pt,Ve,null),e(Ve,gp),w(ut,Ve,null),ur=!0},p(t,[y]){const Vn={};y&2&&(Vn.$$scope={dirty:y,ctx:t}),Po.$set(Vn);const wa={};y&2&&(wa.$$scope={dirty:y,ctx:t}),Ao.$set(wa);const Ta={};y&2&&(Ta.$$scope={dirty:y,ctx:t}),Uo.$set(Ta);const Ma={};y&2&&(Ma.$$scope={dirty:y,ctx:t}),Ho.$set(Ma);const Xn={};y&2&&(Xn.$$scope={dirty:y,ctx:t}),Bo.$set(Xn);const $a={};y&2&&($a.$$scope={dirty:y,ctx:t}),Ko.$set($a);const xa={};y&2&&(xa.$$scope={dirty:y,ctx:t}),Vo.$set(xa);const ja={};y&2&&(ja.$$scope={dirty:y,ctx:t}),Yo.$set(ja);const Yn={};y&2&&(Yn.$$scope={dirty:y,ctx:t}),Zo.$set(Yn);const Fa={};y&2&&(Fa.$$scope={dirty:y,ctx:t}),Jo.$set(Fa);const zo={};y&2&&(zo.$$scope={dirty:y,ctx:t}),Qo.$set(zo);const Zn={};y&2&&(Zn.$$scope={dirty:y,ctx:t}),et.$set(Zn);const za={};y&2&&(za.$$scope={dirty:y,ctx:t}),tt.$set(za);const Gn={};y&2&&(Gn.$$scope={dirty:y,ctx:t}),nt.$set(Gn);const Ea={};y&2&&(Ea.$$scope={dirty:y,ctx:t}),st.$set(Ea);const Jn={};y&2&&(Jn.$$scope={dirty:y,ctx:t}),rt.$set(Jn);const qa={};y&2&&(qa.$$scope={dirty:y,ctx:t}),it.$set(qa);const Ca={};y&2&&(Ca.$$scope={dirty:y,ctx:t}),lt.$set(Ca);const Pa={};y&2&&(Pa.$$scope={dirty:y,ctx:t}),ct.$set(Pa);const Na={};y&2&&(Na.$$scope={dirty:y,ctx:t}),pt.$set(Na);const Sa={};y&2&&(Sa.$$scope={dirty:y,ctx:t}),ut.$set(Sa)},i(t){ur||(T(l.$$.fragment,t),T(A.$$.fragment,t),T(Ft.$$.fragment,t),T(zt.$$.fragment,t),T(Nt.$$.fragment,t),T(St.$$.fragment,t),T(Po.$$.fragment,t),T(Ot.$$.fragment,t),T(Dt.$$.fragment,t),T(Ut.$$.fragment,t),T(Wt.$$.fragment,t),T(Bt.$$.fragment,t),T(Rt.$$.fragment,t),T(Zt.$$.fragment,t),T(Ao.$$.fragment,t),T(Uo.$$.fragment,t),T(Gt.$$.fragment,t),T(Jt.$$.fragment,t),T(tn.$$.fragment,t),T(Ho.$$.fragment,t),T(Bo.$$.fragment,t),T(nn.$$.fragment,t),T(sn.$$.fragment,t),T(un.$$.fragment,t),T(Ko.$$.fragment,t),T(Vo.$$.fragment,t),T(hn.$$.fragment,t),T(mn.$$.fragment,t),T(Ln.$$.fragment,t),T(Yo.$$.fragment,t),T(Zo.$$.fragment,t),T(vn.$$.fragment,t),T(wn.$$.fragment,t),T(Jo.$$.fragment,t),T(xn.$$.fragment,t),T(Qo.$$.fragment,t),T(et.$$.fragment,t),T(jn.$$.fragment,t),T(Fn.$$.fragment,t),T(tt.$$.fragment,t),T(Pn.$$.fragment,t),T(nt.$$.fragment,t),T(st.$$.fragment,t),T(Nn.$$.fragment,t),T(Sn.$$.fragment,t),T(rt.$$.fragment,t),T(An.$$.fragment,t),T(it.$$.fragment,t),T(lt.$$.fragment,t),T(Un.$$.fragment,t),T(Wn.$$.fragment,t),T(ct.$$.fragment,t),T(Kn.$$.fragment,t),T(pt.$$.fragment,t),T(ut.$$.fragment,t),ur=!0)},o(t){M(l.$$.fragment,t),M(A.$$.fragment,t),M(Ft.$$.fragment,t),M(zt.$$.fragment,t),M(Nt.$$.fragment,t),M(St.$$.fragment,t),M(Po.$$.fragment,t),M(Ot.$$.fragment,t),M(Dt.$$.fragment,t),M(Ut.$$.fragment,t),M(Wt.$$.fragment,t),M(Bt.$$.fragment,t),M(Rt.$$.fragment,t),M(Zt.$$.fragment,t),M(Ao.$$.fragment,t),M(Uo.$$.fragment,t),M(Gt.$$.fragment,t),M(Jt.$$.fragment,t),M(tn.$$.fragment,t),M(Ho.$$.fragment,t),M(Bo.$$.fragment,t),M(nn.$$.fragment,t),M(sn.$$.fragment,t),M(un.$$.fragment,t),M(Ko.$$.fragment,t),M(Vo.$$.fragment,t),M(hn.$$.fragment,t),M(mn.$$.fragment,t),M(Ln.$$.fragment,t),M(Yo.$$.fragment,t),M(Zo.$$.fragment,t),M(vn.$$.fragment,t),M(wn.$$.fragment,t),M(Jo.$$.fragment,t),M(xn.$$.fragment,t),M(Qo.$$.fragment,t),M(et.$$.fragment,t),M(jn.$$.fragment,t),M(Fn.$$.fragment,t),M(tt.$$.fragment,t),M(Pn.$$.fragment,t),M(nt.$$.fragment,t),M(st.$$.fragment,t),M(Nn.$$.fragment,t),M(Sn.$$.fragment,t),M(rt.$$.fragment,t),M(An.$$.fragment,t),M(it.$$.fragment,t),M(lt.$$.fragment,t),M(Un.$$.fragment,t),M(Wn.$$.fragment,t),M(ct.$$.fragment,t),M(Kn.$$.fragment,t),M(pt.$$.fragment,t),M(ut.$$.fragment,t),ur=!1},d(t){o(d),t&&o(k),t&&o(_),$(l),t&&o(Y),t&&o(z),t&&o(ae),t&&o(O),$(A),t&&o(D),t&&o(G),t&&o(H),t&&o(V),t&&o(x),t&&o(X),t&&o(Me),t&&o(S),t&&o($e),t&&o(I),t&&o(xe),t&&o(ye),t&&o(Da),$(Ft,t),t&&o(Aa),t&&o(to),t&&o(Ua),$(zt,t),t&&o(Wa),t&&o(es),t&&o(Ha),t&&o(no),t&&o(Ba),t&&o(ro),$(Nt),t&&o(Ra),t&&o(Pe),$(St),$(Po),t&&o(Ka),t&&o(co),$(Ot),t&&o(Va),t&&o(Ne),$(Dt),t&&o(Xa),t&&o(po),$(Ut),t&&o(Ya),t&&o(Se),$(Wt),t&&o(Za),t&&o(uo),$(Bt),t&&o(Ga),t&&o(Ie),$(Rt),$(Zt),$(Ao),$(Uo),t&&o(Ja),t&&o(mo),$(Gt),t&&o(Qa),t&&o(Oe),$(Jt),$(tn),$(Ho),$(Bo),t&&o(er),t&&o(_o),$(nn),t&&o(or),t&&o(qe),$(sn),$(un),$(Ko),$(Vo),t&&o(tr),t&&o(bo),$(hn),t&&o(nr),t&&o(Ce),$(mn),$(Ln),$(Yo),$(Zo),t&&o(sr),t&&o(vo),$(vn),t&&o(ar),t&&o(Le),$(wn),$(Jo),$(xn),$(Qo),$(et),t&&o(rr),t&&o(To),$(jn),t&&o(ir),t&&o(ve),$(Fn),$(tt),$(Pn),$(nt),$(st),t&&o(lr),t&&o($o),$(Nn),t&&o(dr),t&&o(we),$(Sn),$(rt),$(An),$(it),$(lt),t&&o(cr),t&&o(jo),$(Un),t&&o(pr),t&&o(Te),$(Wn),$(ct),$(Kn),$(pt),$(ut)}}}const Nh={local:"layoutlm",sections:[{local:"overview",title:"Overview"},{local:"transformers.LayoutLMConfig",title:"LayoutLMConfig"},{local:"transformers.LayoutLMTokenizer",title:"LayoutLMTokenizer"},{local:"transformers.LayoutLMTokenizerFast",title:"LayoutLMTokenizerFast"},{local:"transformers.LayoutLMModel",title:"LayoutLMModel"},{local:"transformers.LayoutLMForMaskedLM",title:"LayoutLMForMaskedLM"},{local:"transformers.LayoutLMForSequenceClassification",title:"LayoutLMForSequenceClassification"},{local:"transformers.LayoutLMForTokenClassification",title:"LayoutLMForTokenClassification"},{local:"transformers.TFLayoutLMModel",title:"TFLayoutLMModel"},{local:"transformers.TFLayoutLMForMaskedLM",title:"TFLayoutLMForMaskedLM"},{local:"transformers.TFLayoutLMForSequenceClassification",title:"TFLayoutLMForSequenceClassification"},{local:"transformers.TFLayoutLMForTokenClassification",title:"TFLayoutLMForTokenClassification"}],title:"LayoutLM"};function Sh(E){return uh(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Hh extends lh{constructor(d){super();dh(this,d,Sh,Ph,ch,{})}}export{Hh as default,Nh as metadata};
