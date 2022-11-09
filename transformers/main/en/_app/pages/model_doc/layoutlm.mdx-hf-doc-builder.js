import{S as ty,i as oy,s as ny,e as a,k as c,w as L,t as o,M as sy,c as r,d as t,m as p,a as i,x as T,h as n,b as h,G as e,g,y as v,q as M,o as $,B as x,v as ay,L as gt}from"../../chunks/vendor-hf-doc-builder.js";import{T as pt}from"../../chunks/Tip-hf-doc-builder.js";import{D as ne}from"../../chunks/Docstring-hf-doc-builder.js";import{C as lt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as it}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ft}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function ry(z){let d,k,m,f,b;return f=new lt({props:{code:`from transformers import LayoutLMConfig, LayoutLMModel

# Initializing a LayoutLM configuration
configuration = LayoutLMConfig()

# Initializing a model (with random weights) from the configuration
model = LayoutLMModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMConfig, LayoutLMModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a LayoutLM configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = LayoutLMConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),k=o("Examples:"),m=c(),L(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);k=n(u,"Examples:"),u.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,u){g(l,d,u),e(d,k),g(l,m,u),v(f,l,u),b=!0},p:gt,i(l){b||(M(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function iy(z){let d,k,m,f,b;return f=new lt({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=a("p"),k=o("sequence pair mask has the following format:"),m=c(),L(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);k=n(u,"sequence pair mask has the following format:"),u.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,u){g(l,d,u),e(d,k),g(l,m,u),v(f,l,u),b=!0},p:gt,i(l){b||(M(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function ly(z){let d,k,m,f,b;return f=new lt({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=a("p"),k=o("sequence pair mask has the following format:"),m=c(),L(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);k=n(u,"sequence pair mask has the following format:"),u.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,u){g(l,d,u),e(d,k),g(l,m,u),v(f,l,u),b=!0},p:gt,i(l){b||(M(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function dy(z){let d,k,m,f,b;return{c(){d=a("p"),k=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);k=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var q=i(m);f=n(q,"Module"),q.forEach(t),b=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,k),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function cy(z){let d,k,m,f,b;return f=new lt({props:{code:`from transformers import AutoTokenizer, LayoutLMModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),k=o("Examples:"),m=c(),L(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);k=n(u,"Examples:"),u.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,u){g(l,d,u),e(d,k),g(l,m,u),v(f,l,u),b=!0},p:gt,i(l){b||(M(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function py(z){let d,k,m,f,b;return{c(){d=a("p"),k=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);k=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var q=i(m);f=n(q,"Module"),q.forEach(t),b=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,k),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function uy(z){let d,k,m,f,b;return f=new lt({props:{code:`from transformers import AutoTokenizer, LayoutLMForMaskedLM
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

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){d=a("p"),k=o("Examples:"),m=c(),L(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);k=n(u,"Examples:"),u.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,u){g(l,d,u),e(d,k),g(l,m,u),v(f,l,u),b=!0},p:gt,i(l){b||(M(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function hy(z){let d,k,m,f,b;return{c(){d=a("p"),k=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);k=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var q=i(m);f=n(q,"Module"),q.forEach(t),b=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,k),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function my(z){let d,k,m,f,b;return f=new lt({props:{code:`from transformers import AutoTokenizer, LayoutLMForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),k=o("Examples:"),m=c(),L(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);k=n(u,"Examples:"),u.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,u){g(l,d,u),e(d,k),g(l,m,u),v(f,l,u),b=!0},p:gt,i(l){b||(M(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function fy(z){let d,k,m,f,b;return{c(){d=a("p"),k=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);k=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var q=i(m);f=n(q,"Module"),q.forEach(t),b=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,k),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function gy(z){let d,k,m,f,b;return f=new lt({props:{code:`from transformers import AutoTokenizer, LayoutLMForTokenClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),k=o("Examples:"),m=c(),L(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);k=n(u,"Examples:"),u.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,u){g(l,d,u),e(d,k),g(l,m,u),v(f,l,u),b=!0},p:gt,i(l){b||(M(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function _y(z){let d,k;return d=new lt({props:{code:`from transformers import AutoTokenizer, LayoutLMForQuestionAnswering
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
M. Hamann P. Harper, P. Martinez`}}),{c(){L(d.$$.fragment)},l(m){T(d.$$.fragment,m)},m(m,f){v(d,m,f),k=!0},p:gt,i(m){k||(M(d.$$.fragment,m),k=!0)},o(m){$(d.$$.fragment,m),k=!1},d(m){x(d,m)}}}function yy(z){let d,k,m,f,b,l,u,q,Me,_e,W,ye,K,w,he,I,$e,me,Q,be,se,R,ie,xe,V,ke,oe,S,je,le,ae,E,C,de,X,ce,Fe,Y,qe,pe,P,ue,Z,Ee,we,B,ze,Le,O,fe,G,Te,ee,A,ve,D,H,Ce;return{c(){d=a("p"),k=o("TensorFlow models and layers in "),m=a("code"),f=o("transformers"),b=o(" accept two formats as input:"),l=c(),u=a("ul"),q=a("li"),Me=o("having all inputs as keyword arguments (like PyTorch models), or"),_e=c(),W=a("li"),ye=o("having all inputs as a list, tuple or dict in the first positional argument."),K=c(),w=a("p"),he=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),I=a("code"),$e=o("model.fit()"),me=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=a("code"),be=o("model.fit()"),se=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),R=a("code"),ie=o("fit()"),xe=o(" and "),V=a("code"),ke=o("predict()"),oe=o(`, such as when creating your own layers or models with
the Keras `),S=a("code"),je=o("Functional"),le=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ae=c(),E=a("ul"),C=a("li"),de=o("a single Tensor with "),X=a("code"),ce=o("input_ids"),Fe=o(" only and nothing else: "),Y=a("code"),qe=o("model(input_ids)"),pe=c(),P=a("li"),ue=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Z=a("code"),Ee=o("model([input_ids, attention_mask])"),we=o(" or "),B=a("code"),ze=o("model([input_ids, attention_mask, token_type_ids])"),Le=c(),O=a("li"),fe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),Te=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=c(),A=a("p"),ve=o(`Note that when creating models and layers with
`),D=a("a"),H=o("subclassing"),Ce=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(_){d=r(_,"P",{});var j=i(d);k=n(j,"TensorFlow models and layers in "),m=r(j,"CODE",{});var Ue=i(m);f=n(Ue,"transformers"),Ue.forEach(t),b=n(j," accept two formats as input:"),j.forEach(t),l=p(_),u=r(_,"UL",{});var te=i(u);q=r(te,"LI",{});var We=i(q);Me=n(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),_e=p(te),W=r(te,"LI",{});var Be=i(W);ye=n(Be,"having all inputs as a list, tuple or dict in the first positional argument."),Be.forEach(t),te.forEach(t),K=p(_),w=r(_,"P",{});var F=i(w);he=n(F,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),I=r(F,"CODE",{});var He=i(I);$e=n(He,"model.fit()"),He.forEach(t),me=n(F,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=r(F,"CODE",{});var Ke=i(Q);be=n(Ke,"model.fit()"),Ke.forEach(t),se=n(F,` supports! If, however, you want to use the second
format outside of Keras methods like `),R=r(F,"CODE",{});var Ae=i(R);ie=n(Ae,"fit()"),Ae.forEach(t),xe=n(F," and "),V=r(F,"CODE",{});var Qe=i(V);ke=n(Qe,"predict()"),Qe.forEach(t),oe=n(F,`, such as when creating your own layers or models with
the Keras `),S=r(F,"CODE",{});var Re=i(S);je=n(Re,"Functional"),Re.forEach(t),le=n(F,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),F.forEach(t),ae=p(_),E=r(_,"UL",{});var N=i(E);C=r(N,"LI",{});var J=i(C);de=n(J,"a single Tensor with "),X=r(J,"CODE",{});var Ve=i(X);ce=n(Ve,"input_ids"),Ve.forEach(t),Fe=n(J," only and nothing else: "),Y=r(J,"CODE",{});var Oe=i(Y);qe=n(Oe,"model(input_ids)"),Oe.forEach(t),J.forEach(t),pe=p(N),P=r(N,"LI",{});var U=i(P);ue=n(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Z=r(U,"CODE",{});var Ie=i(Z);Ee=n(Ie,"model([input_ids, attention_mask])"),Ie.forEach(t),we=n(U," or "),B=r(U,"CODE",{});var ge=i(B);ze=n(ge,"model([input_ids, attention_mask, token_type_ids])"),ge.forEach(t),U.forEach(t),Le=p(N),O=r(N,"LI",{});var Pe=i(O);fe=n(Pe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(Pe,"CODE",{});var Ne=i(G);Te=n(Ne,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ne.forEach(t),Pe.forEach(t),N.forEach(t),ee=p(_),A=r(_,"P",{});var re=i(A);ve=n(re,`Note that when creating models and layers with
`),D=r(re,"A",{href:!0,rel:!0});var Xe=i(D);H=n(Xe,"subclassing"),Xe.forEach(t),Ce=n(re,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),re.forEach(t),this.h()},h(){h(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(D,"rel","nofollow")},m(_,j){g(_,d,j),e(d,k),e(d,m),e(m,f),e(d,b),g(_,l,j),g(_,u,j),e(u,q),e(q,Me),e(u,_e),e(u,W),e(W,ye),g(_,K,j),g(_,w,j),e(w,he),e(w,I),e(I,$e),e(w,me),e(w,Q),e(Q,be),e(w,se),e(w,R),e(R,ie),e(w,xe),e(w,V),e(V,ke),e(w,oe),e(w,S),e(S,je),e(w,le),g(_,ae,j),g(_,E,j),e(E,C),e(C,de),e(C,X),e(X,ce),e(C,Fe),e(C,Y),e(Y,qe),e(E,pe),e(E,P),e(P,ue),e(P,Z),e(Z,Ee),e(P,we),e(P,B),e(B,ze),e(E,Le),e(E,O),e(O,fe),e(O,G),e(G,Te),g(_,ee,j),g(_,A,j),e(A,ve),e(A,D),e(D,H),e(A,Ce)},d(_){_&&t(d),_&&t(l),_&&t(u),_&&t(K),_&&t(w),_&&t(ae),_&&t(E),_&&t(ee),_&&t(A)}}}function by(z){let d,k,m,f,b;return{c(){d=a("p"),k=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);k=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var q=i(m);f=n(q,"Module"),q.forEach(t),b=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,k),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function ky(z){let d,k,m,f,b;return f=new lt({props:{code:`from transformers import AutoTokenizer, TFLayoutLMModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),k=o("Examples:"),m=c(),L(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);k=n(u,"Examples:"),u.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,u){g(l,d,u),e(d,k),g(l,m,u),v(f,l,u),b=!0},p:gt,i(l){b||(M(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function wy(z){let d,k,m,f,b,l,u,q,Me,_e,W,ye,K,w,he,I,$e,me,Q,be,se,R,ie,xe,V,ke,oe,S,je,le,ae,E,C,de,X,ce,Fe,Y,qe,pe,P,ue,Z,Ee,we,B,ze,Le,O,fe,G,Te,ee,A,ve,D,H,Ce;return{c(){d=a("p"),k=o("TensorFlow models and layers in "),m=a("code"),f=o("transformers"),b=o(" accept two formats as input:"),l=c(),u=a("ul"),q=a("li"),Me=o("having all inputs as keyword arguments (like PyTorch models), or"),_e=c(),W=a("li"),ye=o("having all inputs as a list, tuple or dict in the first positional argument."),K=c(),w=a("p"),he=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),I=a("code"),$e=o("model.fit()"),me=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=a("code"),be=o("model.fit()"),se=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),R=a("code"),ie=o("fit()"),xe=o(" and "),V=a("code"),ke=o("predict()"),oe=o(`, such as when creating your own layers or models with
the Keras `),S=a("code"),je=o("Functional"),le=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ae=c(),E=a("ul"),C=a("li"),de=o("a single Tensor with "),X=a("code"),ce=o("input_ids"),Fe=o(" only and nothing else: "),Y=a("code"),qe=o("model(input_ids)"),pe=c(),P=a("li"),ue=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Z=a("code"),Ee=o("model([input_ids, attention_mask])"),we=o(" or "),B=a("code"),ze=o("model([input_ids, attention_mask, token_type_ids])"),Le=c(),O=a("li"),fe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),Te=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=c(),A=a("p"),ve=o(`Note that when creating models and layers with
`),D=a("a"),H=o("subclassing"),Ce=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(_){d=r(_,"P",{});var j=i(d);k=n(j,"TensorFlow models and layers in "),m=r(j,"CODE",{});var Ue=i(m);f=n(Ue,"transformers"),Ue.forEach(t),b=n(j," accept two formats as input:"),j.forEach(t),l=p(_),u=r(_,"UL",{});var te=i(u);q=r(te,"LI",{});var We=i(q);Me=n(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),_e=p(te),W=r(te,"LI",{});var Be=i(W);ye=n(Be,"having all inputs as a list, tuple or dict in the first positional argument."),Be.forEach(t),te.forEach(t),K=p(_),w=r(_,"P",{});var F=i(w);he=n(F,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),I=r(F,"CODE",{});var He=i(I);$e=n(He,"model.fit()"),He.forEach(t),me=n(F,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=r(F,"CODE",{});var Ke=i(Q);be=n(Ke,"model.fit()"),Ke.forEach(t),se=n(F,` supports! If, however, you want to use the second
format outside of Keras methods like `),R=r(F,"CODE",{});var Ae=i(R);ie=n(Ae,"fit()"),Ae.forEach(t),xe=n(F," and "),V=r(F,"CODE",{});var Qe=i(V);ke=n(Qe,"predict()"),Qe.forEach(t),oe=n(F,`, such as when creating your own layers or models with
the Keras `),S=r(F,"CODE",{});var Re=i(S);je=n(Re,"Functional"),Re.forEach(t),le=n(F,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),F.forEach(t),ae=p(_),E=r(_,"UL",{});var N=i(E);C=r(N,"LI",{});var J=i(C);de=n(J,"a single Tensor with "),X=r(J,"CODE",{});var Ve=i(X);ce=n(Ve,"input_ids"),Ve.forEach(t),Fe=n(J," only and nothing else: "),Y=r(J,"CODE",{});var Oe=i(Y);qe=n(Oe,"model(input_ids)"),Oe.forEach(t),J.forEach(t),pe=p(N),P=r(N,"LI",{});var U=i(P);ue=n(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Z=r(U,"CODE",{});var Ie=i(Z);Ee=n(Ie,"model([input_ids, attention_mask])"),Ie.forEach(t),we=n(U," or "),B=r(U,"CODE",{});var ge=i(B);ze=n(ge,"model([input_ids, attention_mask, token_type_ids])"),ge.forEach(t),U.forEach(t),Le=p(N),O=r(N,"LI",{});var Pe=i(O);fe=n(Pe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(Pe,"CODE",{});var Ne=i(G);Te=n(Ne,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ne.forEach(t),Pe.forEach(t),N.forEach(t),ee=p(_),A=r(_,"P",{});var re=i(A);ve=n(re,`Note that when creating models and layers with
`),D=r(re,"A",{href:!0,rel:!0});var Xe=i(D);H=n(Xe,"subclassing"),Xe.forEach(t),Ce=n(re,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),re.forEach(t),this.h()},h(){h(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(D,"rel","nofollow")},m(_,j){g(_,d,j),e(d,k),e(d,m),e(m,f),e(d,b),g(_,l,j),g(_,u,j),e(u,q),e(q,Me),e(u,_e),e(u,W),e(W,ye),g(_,K,j),g(_,w,j),e(w,he),e(w,I),e(I,$e),e(w,me),e(w,Q),e(Q,be),e(w,se),e(w,R),e(R,ie),e(w,xe),e(w,V),e(V,ke),e(w,oe),e(w,S),e(S,je),e(w,le),g(_,ae,j),g(_,E,j),e(E,C),e(C,de),e(C,X),e(X,ce),e(C,Fe),e(C,Y),e(Y,qe),e(E,pe),e(E,P),e(P,ue),e(P,Z),e(Z,Ee),e(P,we),e(P,B),e(B,ze),e(E,Le),e(E,O),e(O,fe),e(O,G),e(G,Te),g(_,ee,j),g(_,A,j),e(A,ve),e(A,D),e(D,H),e(A,Ce)},d(_){_&&t(d),_&&t(l),_&&t(u),_&&t(K),_&&t(w),_&&t(ae),_&&t(E),_&&t(ee),_&&t(A)}}}function Ly(z){let d,k,m,f,b;return{c(){d=a("p"),k=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);k=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var q=i(m);f=n(q,"Module"),q.forEach(t),b=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,k),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function Ty(z){let d,k,m,f,b;return f=new lt({props:{code:`from transformers import AutoTokenizer, TFLayoutLMForMaskedLM
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

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){d=a("p"),k=o("Examples:"),m=c(),L(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);k=n(u,"Examples:"),u.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,u){g(l,d,u),e(d,k),g(l,m,u),v(f,l,u),b=!0},p:gt,i(l){b||(M(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function vy(z){let d,k,m,f,b,l,u,q,Me,_e,W,ye,K,w,he,I,$e,me,Q,be,se,R,ie,xe,V,ke,oe,S,je,le,ae,E,C,de,X,ce,Fe,Y,qe,pe,P,ue,Z,Ee,we,B,ze,Le,O,fe,G,Te,ee,A,ve,D,H,Ce;return{c(){d=a("p"),k=o("TensorFlow models and layers in "),m=a("code"),f=o("transformers"),b=o(" accept two formats as input:"),l=c(),u=a("ul"),q=a("li"),Me=o("having all inputs as keyword arguments (like PyTorch models), or"),_e=c(),W=a("li"),ye=o("having all inputs as a list, tuple or dict in the first positional argument."),K=c(),w=a("p"),he=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),I=a("code"),$e=o("model.fit()"),me=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=a("code"),be=o("model.fit()"),se=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),R=a("code"),ie=o("fit()"),xe=o(" and "),V=a("code"),ke=o("predict()"),oe=o(`, such as when creating your own layers or models with
the Keras `),S=a("code"),je=o("Functional"),le=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ae=c(),E=a("ul"),C=a("li"),de=o("a single Tensor with "),X=a("code"),ce=o("input_ids"),Fe=o(" only and nothing else: "),Y=a("code"),qe=o("model(input_ids)"),pe=c(),P=a("li"),ue=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Z=a("code"),Ee=o("model([input_ids, attention_mask])"),we=o(" or "),B=a("code"),ze=o("model([input_ids, attention_mask, token_type_ids])"),Le=c(),O=a("li"),fe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),Te=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=c(),A=a("p"),ve=o(`Note that when creating models and layers with
`),D=a("a"),H=o("subclassing"),Ce=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(_){d=r(_,"P",{});var j=i(d);k=n(j,"TensorFlow models and layers in "),m=r(j,"CODE",{});var Ue=i(m);f=n(Ue,"transformers"),Ue.forEach(t),b=n(j," accept two formats as input:"),j.forEach(t),l=p(_),u=r(_,"UL",{});var te=i(u);q=r(te,"LI",{});var We=i(q);Me=n(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),_e=p(te),W=r(te,"LI",{});var Be=i(W);ye=n(Be,"having all inputs as a list, tuple or dict in the first positional argument."),Be.forEach(t),te.forEach(t),K=p(_),w=r(_,"P",{});var F=i(w);he=n(F,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),I=r(F,"CODE",{});var He=i(I);$e=n(He,"model.fit()"),He.forEach(t),me=n(F,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=r(F,"CODE",{});var Ke=i(Q);be=n(Ke,"model.fit()"),Ke.forEach(t),se=n(F,` supports! If, however, you want to use the second
format outside of Keras methods like `),R=r(F,"CODE",{});var Ae=i(R);ie=n(Ae,"fit()"),Ae.forEach(t),xe=n(F," and "),V=r(F,"CODE",{});var Qe=i(V);ke=n(Qe,"predict()"),Qe.forEach(t),oe=n(F,`, such as when creating your own layers or models with
the Keras `),S=r(F,"CODE",{});var Re=i(S);je=n(Re,"Functional"),Re.forEach(t),le=n(F,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),F.forEach(t),ae=p(_),E=r(_,"UL",{});var N=i(E);C=r(N,"LI",{});var J=i(C);de=n(J,"a single Tensor with "),X=r(J,"CODE",{});var Ve=i(X);ce=n(Ve,"input_ids"),Ve.forEach(t),Fe=n(J," only and nothing else: "),Y=r(J,"CODE",{});var Oe=i(Y);qe=n(Oe,"model(input_ids)"),Oe.forEach(t),J.forEach(t),pe=p(N),P=r(N,"LI",{});var U=i(P);ue=n(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Z=r(U,"CODE",{});var Ie=i(Z);Ee=n(Ie,"model([input_ids, attention_mask])"),Ie.forEach(t),we=n(U," or "),B=r(U,"CODE",{});var ge=i(B);ze=n(ge,"model([input_ids, attention_mask, token_type_ids])"),ge.forEach(t),U.forEach(t),Le=p(N),O=r(N,"LI",{});var Pe=i(O);fe=n(Pe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(Pe,"CODE",{});var Ne=i(G);Te=n(Ne,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ne.forEach(t),Pe.forEach(t),N.forEach(t),ee=p(_),A=r(_,"P",{});var re=i(A);ve=n(re,`Note that when creating models and layers with
`),D=r(re,"A",{href:!0,rel:!0});var Xe=i(D);H=n(Xe,"subclassing"),Xe.forEach(t),Ce=n(re,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),re.forEach(t),this.h()},h(){h(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(D,"rel","nofollow")},m(_,j){g(_,d,j),e(d,k),e(d,m),e(m,f),e(d,b),g(_,l,j),g(_,u,j),e(u,q),e(q,Me),e(u,_e),e(u,W),e(W,ye),g(_,K,j),g(_,w,j),e(w,he),e(w,I),e(I,$e),e(w,me),e(w,Q),e(Q,be),e(w,se),e(w,R),e(R,ie),e(w,xe),e(w,V),e(V,ke),e(w,oe),e(w,S),e(S,je),e(w,le),g(_,ae,j),g(_,E,j),e(E,C),e(C,de),e(C,X),e(X,ce),e(C,Fe),e(C,Y),e(Y,qe),e(E,pe),e(E,P),e(P,ue),e(P,Z),e(Z,Ee),e(P,we),e(P,B),e(B,ze),e(E,Le),e(E,O),e(O,fe),e(O,G),e(G,Te),g(_,ee,j),g(_,A,j),e(A,ve),e(A,D),e(D,H),e(A,Ce)},d(_){_&&t(d),_&&t(l),_&&t(u),_&&t(K),_&&t(w),_&&t(ae),_&&t(E),_&&t(ee),_&&t(A)}}}function My(z){let d,k,m,f,b;return{c(){d=a("p"),k=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);k=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var q=i(m);f=n(q,"Module"),q.forEach(t),b=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,k),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function $y(z){let d,k,m,f,b;return f=new lt({props:{code:`from transformers import AutoTokenizer, TFLayoutLMForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),k=o("Examples:"),m=c(),L(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);k=n(u,"Examples:"),u.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,u){g(l,d,u),e(d,k),g(l,m,u),v(f,l,u),b=!0},p:gt,i(l){b||(M(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function xy(z){let d,k,m,f,b,l,u,q,Me,_e,W,ye,K,w,he,I,$e,me,Q,be,se,R,ie,xe,V,ke,oe,S,je,le,ae,E,C,de,X,ce,Fe,Y,qe,pe,P,ue,Z,Ee,we,B,ze,Le,O,fe,G,Te,ee,A,ve,D,H,Ce;return{c(){d=a("p"),k=o("TensorFlow models and layers in "),m=a("code"),f=o("transformers"),b=o(" accept two formats as input:"),l=c(),u=a("ul"),q=a("li"),Me=o("having all inputs as keyword arguments (like PyTorch models), or"),_e=c(),W=a("li"),ye=o("having all inputs as a list, tuple or dict in the first positional argument."),K=c(),w=a("p"),he=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),I=a("code"),$e=o("model.fit()"),me=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=a("code"),be=o("model.fit()"),se=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),R=a("code"),ie=o("fit()"),xe=o(" and "),V=a("code"),ke=o("predict()"),oe=o(`, such as when creating your own layers or models with
the Keras `),S=a("code"),je=o("Functional"),le=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ae=c(),E=a("ul"),C=a("li"),de=o("a single Tensor with "),X=a("code"),ce=o("input_ids"),Fe=o(" only and nothing else: "),Y=a("code"),qe=o("model(input_ids)"),pe=c(),P=a("li"),ue=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Z=a("code"),Ee=o("model([input_ids, attention_mask])"),we=o(" or "),B=a("code"),ze=o("model([input_ids, attention_mask, token_type_ids])"),Le=c(),O=a("li"),fe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),Te=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=c(),A=a("p"),ve=o(`Note that when creating models and layers with
`),D=a("a"),H=o("subclassing"),Ce=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(_){d=r(_,"P",{});var j=i(d);k=n(j,"TensorFlow models and layers in "),m=r(j,"CODE",{});var Ue=i(m);f=n(Ue,"transformers"),Ue.forEach(t),b=n(j," accept two formats as input:"),j.forEach(t),l=p(_),u=r(_,"UL",{});var te=i(u);q=r(te,"LI",{});var We=i(q);Me=n(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),_e=p(te),W=r(te,"LI",{});var Be=i(W);ye=n(Be,"having all inputs as a list, tuple or dict in the first positional argument."),Be.forEach(t),te.forEach(t),K=p(_),w=r(_,"P",{});var F=i(w);he=n(F,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),I=r(F,"CODE",{});var He=i(I);$e=n(He,"model.fit()"),He.forEach(t),me=n(F,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=r(F,"CODE",{});var Ke=i(Q);be=n(Ke,"model.fit()"),Ke.forEach(t),se=n(F,` supports! If, however, you want to use the second
format outside of Keras methods like `),R=r(F,"CODE",{});var Ae=i(R);ie=n(Ae,"fit()"),Ae.forEach(t),xe=n(F," and "),V=r(F,"CODE",{});var Qe=i(V);ke=n(Qe,"predict()"),Qe.forEach(t),oe=n(F,`, such as when creating your own layers or models with
the Keras `),S=r(F,"CODE",{});var Re=i(S);je=n(Re,"Functional"),Re.forEach(t),le=n(F,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),F.forEach(t),ae=p(_),E=r(_,"UL",{});var N=i(E);C=r(N,"LI",{});var J=i(C);de=n(J,"a single Tensor with "),X=r(J,"CODE",{});var Ve=i(X);ce=n(Ve,"input_ids"),Ve.forEach(t),Fe=n(J," only and nothing else: "),Y=r(J,"CODE",{});var Oe=i(Y);qe=n(Oe,"model(input_ids)"),Oe.forEach(t),J.forEach(t),pe=p(N),P=r(N,"LI",{});var U=i(P);ue=n(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Z=r(U,"CODE",{});var Ie=i(Z);Ee=n(Ie,"model([input_ids, attention_mask])"),Ie.forEach(t),we=n(U," or "),B=r(U,"CODE",{});var ge=i(B);ze=n(ge,"model([input_ids, attention_mask, token_type_ids])"),ge.forEach(t),U.forEach(t),Le=p(N),O=r(N,"LI",{});var Pe=i(O);fe=n(Pe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(Pe,"CODE",{});var Ne=i(G);Te=n(Ne,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ne.forEach(t),Pe.forEach(t),N.forEach(t),ee=p(_),A=r(_,"P",{});var re=i(A);ve=n(re,`Note that when creating models and layers with
`),D=r(re,"A",{href:!0,rel:!0});var Xe=i(D);H=n(Xe,"subclassing"),Xe.forEach(t),Ce=n(re,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),re.forEach(t),this.h()},h(){h(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(D,"rel","nofollow")},m(_,j){g(_,d,j),e(d,k),e(d,m),e(m,f),e(d,b),g(_,l,j),g(_,u,j),e(u,q),e(q,Me),e(u,_e),e(u,W),e(W,ye),g(_,K,j),g(_,w,j),e(w,he),e(w,I),e(I,$e),e(w,me),e(w,Q),e(Q,be),e(w,se),e(w,R),e(R,ie),e(w,xe),e(w,V),e(V,ke),e(w,oe),e(w,S),e(S,je),e(w,le),g(_,ae,j),g(_,E,j),e(E,C),e(C,de),e(C,X),e(X,ce),e(C,Fe),e(C,Y),e(Y,qe),e(E,pe),e(E,P),e(P,ue),e(P,Z),e(Z,Ee),e(P,we),e(P,B),e(B,ze),e(E,Le),e(E,O),e(O,fe),e(O,G),e(G,Te),g(_,ee,j),g(_,A,j),e(A,ve),e(A,D),e(D,H),e(A,Ce)},d(_){_&&t(d),_&&t(l),_&&t(u),_&&t(K),_&&t(w),_&&t(ae),_&&t(E),_&&t(ee),_&&t(A)}}}function jy(z){let d,k,m,f,b;return{c(){d=a("p"),k=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);k=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var q=i(m);f=n(q,"Module"),q.forEach(t),b=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,k),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function Fy(z){let d,k,m,f,b;return f=new lt({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),k=o("Examples:"),m=c(),L(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);k=n(u,"Examples:"),u.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,u){g(l,d,u),e(d,k),g(l,m,u),v(f,l,u),b=!0},p:gt,i(l){b||(M(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function qy(z){let d,k,m,f,b,l,u,q,Me,_e,W,ye,K,w,he,I,$e,me,Q,be,se,R,ie,xe,V,ke,oe,S,je,le,ae,E,C,de,X,ce,Fe,Y,qe,pe,P,ue,Z,Ee,we,B,ze,Le,O,fe,G,Te,ee,A,ve,D,H,Ce;return{c(){d=a("p"),k=o("TensorFlow models and layers in "),m=a("code"),f=o("transformers"),b=o(" accept two formats as input:"),l=c(),u=a("ul"),q=a("li"),Me=o("having all inputs as keyword arguments (like PyTorch models), or"),_e=c(),W=a("li"),ye=o("having all inputs as a list, tuple or dict in the first positional argument."),K=c(),w=a("p"),he=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),I=a("code"),$e=o("model.fit()"),me=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=a("code"),be=o("model.fit()"),se=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),R=a("code"),ie=o("fit()"),xe=o(" and "),V=a("code"),ke=o("predict()"),oe=o(`, such as when creating your own layers or models with
the Keras `),S=a("code"),je=o("Functional"),le=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ae=c(),E=a("ul"),C=a("li"),de=o("a single Tensor with "),X=a("code"),ce=o("input_ids"),Fe=o(" only and nothing else: "),Y=a("code"),qe=o("model(input_ids)"),pe=c(),P=a("li"),ue=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Z=a("code"),Ee=o("model([input_ids, attention_mask])"),we=o(" or "),B=a("code"),ze=o("model([input_ids, attention_mask, token_type_ids])"),Le=c(),O=a("li"),fe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),Te=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=c(),A=a("p"),ve=o(`Note that when creating models and layers with
`),D=a("a"),H=o("subclassing"),Ce=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(_){d=r(_,"P",{});var j=i(d);k=n(j,"TensorFlow models and layers in "),m=r(j,"CODE",{});var Ue=i(m);f=n(Ue,"transformers"),Ue.forEach(t),b=n(j," accept two formats as input:"),j.forEach(t),l=p(_),u=r(_,"UL",{});var te=i(u);q=r(te,"LI",{});var We=i(q);Me=n(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),_e=p(te),W=r(te,"LI",{});var Be=i(W);ye=n(Be,"having all inputs as a list, tuple or dict in the first positional argument."),Be.forEach(t),te.forEach(t),K=p(_),w=r(_,"P",{});var F=i(w);he=n(F,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),I=r(F,"CODE",{});var He=i(I);$e=n(He,"model.fit()"),He.forEach(t),me=n(F,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=r(F,"CODE",{});var Ke=i(Q);be=n(Ke,"model.fit()"),Ke.forEach(t),se=n(F,` supports! If, however, you want to use the second
format outside of Keras methods like `),R=r(F,"CODE",{});var Ae=i(R);ie=n(Ae,"fit()"),Ae.forEach(t),xe=n(F," and "),V=r(F,"CODE",{});var Qe=i(V);ke=n(Qe,"predict()"),Qe.forEach(t),oe=n(F,`, such as when creating your own layers or models with
the Keras `),S=r(F,"CODE",{});var Re=i(S);je=n(Re,"Functional"),Re.forEach(t),le=n(F,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),F.forEach(t),ae=p(_),E=r(_,"UL",{});var N=i(E);C=r(N,"LI",{});var J=i(C);de=n(J,"a single Tensor with "),X=r(J,"CODE",{});var Ve=i(X);ce=n(Ve,"input_ids"),Ve.forEach(t),Fe=n(J," only and nothing else: "),Y=r(J,"CODE",{});var Oe=i(Y);qe=n(Oe,"model(input_ids)"),Oe.forEach(t),J.forEach(t),pe=p(N),P=r(N,"LI",{});var U=i(P);ue=n(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Z=r(U,"CODE",{});var Ie=i(Z);Ee=n(Ie,"model([input_ids, attention_mask])"),Ie.forEach(t),we=n(U," or "),B=r(U,"CODE",{});var ge=i(B);ze=n(ge,"model([input_ids, attention_mask, token_type_ids])"),ge.forEach(t),U.forEach(t),Le=p(N),O=r(N,"LI",{});var Pe=i(O);fe=n(Pe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(Pe,"CODE",{});var Ne=i(G);Te=n(Ne,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ne.forEach(t),Pe.forEach(t),N.forEach(t),ee=p(_),A=r(_,"P",{});var re=i(A);ve=n(re,`Note that when creating models and layers with
`),D=r(re,"A",{href:!0,rel:!0});var Xe=i(D);H=n(Xe,"subclassing"),Xe.forEach(t),Ce=n(re,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),re.forEach(t),this.h()},h(){h(D,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(D,"rel","nofollow")},m(_,j){g(_,d,j),e(d,k),e(d,m),e(m,f),e(d,b),g(_,l,j),g(_,u,j),e(u,q),e(q,Me),e(u,_e),e(u,W),e(W,ye),g(_,K,j),g(_,w,j),e(w,he),e(w,I),e(I,$e),e(w,me),e(w,Q),e(Q,be),e(w,se),e(w,R),e(R,ie),e(w,xe),e(w,V),e(V,ke),e(w,oe),e(w,S),e(S,je),e(w,le),g(_,ae,j),g(_,E,j),e(E,C),e(C,de),e(C,X),e(X,ce),e(C,Fe),e(C,Y),e(Y,qe),e(E,pe),e(E,P),e(P,ue),e(P,Z),e(Z,Ee),e(P,we),e(P,B),e(B,ze),e(E,Le),e(E,O),e(O,fe),e(O,G),e(G,Te),g(_,ee,j),g(_,A,j),e(A,ve),e(A,D),e(D,H),e(A,Ce)},d(_){_&&t(d),_&&t(l),_&&t(u),_&&t(K),_&&t(w),_&&t(ae),_&&t(E),_&&t(ee),_&&t(A)}}}function Ey(z){let d,k,m,f,b;return{c(){d=a("p"),k=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);k=n(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var q=i(m);f=n(q,"Module"),q.forEach(t),b=n(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,k),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function zy(z){let d,k,m,f,b;return f=new lt({props:{code:`import tensorflow as tf
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
M. Hamann P. Harper, P. Martinez`}}),{c(){d=a("p"),k=o("Examples:"),m=c(),L(f.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);k=n(u,"Examples:"),u.forEach(t),m=p(l),T(f.$$.fragment,l)},m(l,u){g(l,d,u),e(d,k),g(l,m,u),v(f,l,u),b=!0},p:gt,i(l){b||(M(f.$$.fragment,l),b=!0)},o(l){$(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),x(f,l)}}}function Cy(z){let d,k,m,f,b,l,u,q,Me,_e,W,ye,K,w,he,I,$e,me,Q,be,se,R,ie,xe,V,ke,oe,S,je,le,ae,E,C,de,X,ce,Fe,Y,qe,pe,P,ue,Z,Ee,we,B,ze,Le,O,fe,G,Te,ee,A,ve,D,H,Ce,_,j,Ue,te,We,Be,F,He,Ke,Ae,Qe,Re,N,J,Ve,Oe,U,Ie,ge,Pe,Ne,re,Xe,dr,dd,cd,Ki,$n,Qi,ba,Ct,pd,ka,ud,hd,xn,md,fd,jn,gd,_d,Ri,Dt,yd,Fn,bd,kd,qn,wd,Ld,Vi,Ht,ko,cr,En,Td,pr,vd,Xi,ut,zn,Md,Kt,$d,wa,xd,jd,Cn,Fd,qd,Ed,Qt,zd,La,Cd,Pd,Ta,Ad,Dd,Nd,wo,Yi,Rt,Lo,ur,Pn,Od,hr,Id,Zi,Se,An,Sd,mr,Ud,Wd,Dn,Bd,va,Hd,Kd,Qd,Nt,Nn,Rd,fr,Vd,Xd,On,Ma,Yd,gr,Zd,Gd,$a,Jd,_r,ec,tc,To,In,oc,yr,nc,sc,_t,Sn,ac,br,rc,ic,vo,lc,Vt,dc,kr,cc,pc,wr,uc,hc,mc,Mo,Un,fc,Wn,gc,Lr,_c,yc,Gi,Xt,$o,Tr,Bn,bc,vr,kc,Ji,ot,Hn,wc,Kn,Lc,Mr,Tc,vc,Mc,Qn,$c,xa,xc,jc,Fc,Ot,Rn,qc,$r,Ec,zc,Vn,ja,Cc,xr,Pc,Ac,Fa,Dc,jr,Nc,Oc,yt,Xn,Ic,Fr,Sc,Uc,xo,Wc,Yt,Bc,qr,Hc,Kc,Er,Qc,Rc,el,Zt,jo,zr,Yn,Vc,Cr,Xc,tl,ht,Zn,Yc,Gn,Zc,Jn,Gc,Jc,ep,es,tp,ts,op,np,sp,bt,os,ap,Gt,rp,qa,ip,lp,Pr,dp,cp,pp,Fo,up,qo,ol,Jt,Eo,Ar,ns,hp,Dr,mp,nl,mt,ss,fp,eo,gp,Nr,_p,yp,as,bp,kp,wp,rs,Lp,is,Tp,vp,Mp,kt,ls,$p,to,xp,Ea,jp,Fp,Or,qp,Ep,zp,zo,Cp,Co,sl,oo,Po,Ir,ds,Pp,Sr,Ap,al,nt,cs,Dp,ps,Np,us,Op,Ip,Sp,hs,Up,ms,Wp,Bp,Hp,fs,Kp,gs,Qp,Rp,Vp,wt,_s,Xp,no,Yp,za,Zp,Gp,Ur,Jp,eu,tu,Ao,ou,Do,rl,so,No,Wr,ys,nu,Br,su,il,st,bs,au,ao,ru,ks,iu,lu,ws,du,cu,pu,Ls,uu,Ts,hu,mu,fu,vs,gu,Ms,_u,yu,bu,Lt,$s,ku,ro,wu,Ca,Lu,Tu,Hr,vu,Mu,$u,Oo,xu,Io,ll,io,So,Kr,xs,ju,Qr,Fu,dl,at,js,qu,Pt,Eu,Fs,zu,Cu,Rr,Pu,Au,Vr,Du,Nu,Ou,qs,Iu,Es,Su,Uu,Wu,zs,Bu,Cs,Hu,Ku,Qu,dt,Ps,Ru,De,Vu,Xr,Xu,Yu,Yr,Zu,Gu,Zr,Ju,eh,Gr,th,oh,Jr,nh,sh,ei,ah,rh,ti,ih,lh,oi,dh,ch,ph,ni,uh,hh,si,mh,fh,Uo,cl,lo,Wo,ai,As,gh,ri,_h,pl,Ze,Ds,yh,ii,bh,kh,Ns,wh,Pa,Lh,Th,vh,Os,Mh,Is,$h,xh,jh,Bo,Fh,Tt,Ss,qh,co,Eh,Aa,zh,Ch,li,Ph,Ah,Dh,Ho,Nh,Ko,ul,po,Qo,di,Us,Oh,ci,Ih,hl,Ge,Ws,Sh,Bs,Uh,pi,Wh,Bh,Hh,Hs,Kh,Da,Qh,Rh,Vh,Ks,Xh,Qs,Yh,Zh,Gh,Ro,Jh,vt,Rs,em,uo,tm,Na,om,nm,ui,sm,am,rm,Vo,im,Xo,ml,ho,Yo,hi,Vs,lm,mi,dm,fl,Je,Xs,cm,fi,pm,um,Ys,hm,Oa,mm,fm,gm,Zs,_m,Gs,ym,bm,km,Zo,wm,Mt,Js,Lm,mo,Tm,Ia,vm,Mm,gi,$m,xm,jm,Go,Fm,Jo,gl,fo,en,_i,ea,qm,yi,Em,_l,et,ta,zm,bi,Cm,Pm,oa,Am,Sa,Dm,Nm,Om,na,Im,sa,Sm,Um,Wm,tn,Bm,$t,aa,Hm,go,Km,Ua,Qm,Rm,ki,Vm,Xm,Ym,on,Zm,nn,yl,_o,sn,wi,ra,Gm,Li,Jm,bl,tt,ia,ef,At,tf,la,of,nf,Ti,sf,af,vi,rf,lf,df,da,cf,Wa,pf,uf,hf,ca,mf,pa,ff,gf,_f,an,yf,xt,ua,bf,yo,kf,Ba,wf,Lf,Mi,Tf,vf,Mf,rn,$f,ln,kl;return l=new it({}),I=new it({}),U=new lt({props:{code:`def normalize_bbox(bbox, width, height):
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
    ]`}}),$n=new lt({props:{code:`from PIL import Image

# Document can be a png, jpg, etc. PDFs must be converted to images.
image = Image.open(name_of_your_document).convert("RGB")

width, height = image.size`,highlighted:`<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

<span class="hljs-comment"># Document can be a png, jpg, etc. PDFs must be converted to images.</span>
image = Image.<span class="hljs-built_in">open</span>(name_of_your_document).convert(<span class="hljs-string">&quot;RGB&quot;</span>)

width, height = image.size`}}),En=new it({}),zn=new ne({props:{name:"class transformers.LayoutLMConfig",anchor:"transformers.LayoutLMConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the LayoutLM model. Defines the different tokens that can be represented by the
<em>inputs_ids</em> passed to the forward method of <a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMModel">LayoutLMModel</a>.`,name:"vocab_size"},{anchor:"transformers.LayoutLMConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed into <a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMModel">LayoutLMModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.LayoutLMConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.LayoutLMConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.LayoutLMConfig.max_2d_position_embeddings",description:`<strong>max_2d_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum value that the 2D position embedding might ever used. Typically set this to something large
just in case (e.g., 1024).`,name:"max_2d_position_embeddings"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/configuration_layoutlm.py#L38"}}),wo=new ft({props:{anchor:"transformers.LayoutLMConfig.example",$$slots:{default:[ry]},$$scope:{ctx:z}}}),Pn=new it({}),An=new ne({props:{name:"class transformers.LayoutLMTokenizer",anchor:"transformers.LayoutLMTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.LayoutLMTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.LayoutLMTokenizer.do_basic_tokenize",description:`<strong>do_basic_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to do basic tokenization before WordPiece.`,name:"do_basic_tokenize"},{anchor:"transformers.LayoutLMTokenizer.never_split",description:`<strong>never_split</strong> (<code>Iterable</code>, <em>optional</em>) &#x2014;
Collection of tokens which will never be split during tokenization. Only has an effect when
<code>do_basic_tokenize=True</code>`,name:"never_split"},{anchor:"transformers.LayoutLMTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.LayoutLMTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.LayoutLMTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.LayoutLMTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.LayoutLMTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.LayoutLMTokenizer.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters.</p>
<p>This should likely be deactivated for Japanese (see this
<a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">issue</a>).`,name:"tokenize_chinese_chars"},{anchor:"transformers.LayoutLMTokenizer.strip_accents",description:`<strong>strip_accents</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original LayoutLM).`,name:"strip_accents"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/tokenization_layoutlm.py#L75"}}),Nn=new ne({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.LayoutLMTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.LayoutLMTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/tokenization_layoutlm.py#L206",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),In=new ne({props:{name:"convert_tokens_to_string",anchor:"transformers.LayoutLMTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/tokenization_layoutlm.py#L201"}}),Sn=new ne({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.LayoutLMTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.LayoutLMTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/tokenization_layoutlm.py#L259",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),vo=new ft({props:{anchor:"transformers.LayoutLMTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[iy]},$$scope:{ctx:z}}}),Un=new ne({props:{name:"get_special_tokens_mask",anchor:"transformers.LayoutLMTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.LayoutLMTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.LayoutLMTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.LayoutLMTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/tokenization_layoutlm.py#L231",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Bn=new it({}),Hn=new ne({props:{name:"class transformers.LayoutLMTokenizerFast",anchor:"transformers.LayoutLMTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.LayoutLMTokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.LayoutLMTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.LayoutLMTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.LayoutLMTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.LayoutLMTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.LayoutLMTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.LayoutLMTokenizerFast.clean_text",description:`<strong>clean_text</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean the text before tokenization by removing any control characters and replacing all
whitespaces by the classic one.`,name:"clean_text"},{anchor:"transformers.LayoutLMTokenizerFast.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters. This should likely be deactivated for Japanese (see <a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">this
issue</a>).`,name:"tokenize_chinese_chars"},{anchor:"transformers.LayoutLMTokenizerFast.strip_accents",description:`<strong>strip_accents</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original LayoutLM).`,name:"strip_accents"},{anchor:"transformers.LayoutLMTokenizerFast.wordpieces_prefix",description:`<strong>wordpieces_prefix</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;##&quot;</code>) &#x2014;
The prefix for subwords.`,name:"wordpieces_prefix"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/tokenization_layoutlm_fast.py#L62"}}),Rn=new ne({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.LayoutLMTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.LayoutLMTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.LayoutLMTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/tokenization_layoutlm_fast.py#L150",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Xn=new ne({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.LayoutLMTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.LayoutLMTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/tokenization_layoutlm_fast.py#L174",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),xo=new ft({props:{anchor:"transformers.LayoutLMTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[ly]},$$scope:{ctx:z}}}),Yn=new it({}),Zn=new ne({props:{name:"class transformers.LayoutLMModel",anchor:"transformers.LayoutLMModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_layoutlm.py#L703"}}),os=new ne({props:{name:"forward",anchor:"transformers.LayoutLMModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
If set to <code>True</code>, the model will return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_layoutlm.py#L729",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fo=new pt({props:{$$slots:{default:[dy]},$$scope:{ctx:z}}}),qo=new ft({props:{anchor:"transformers.LayoutLMModel.forward.example",$$slots:{default:[cy]},$$scope:{ctx:z}}}),ns=new it({}),ss=new ne({props:{name:"class transformers.LayoutLMForMaskedLM",anchor:"transformers.LayoutLMForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_layoutlm.py#L851"}}),ls=new ne({props:{name:"forward",anchor:"transformers.LayoutLMForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
If set to <code>True</code>, the model will return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_layoutlm.py#L876",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),zo=new pt({props:{$$slots:{default:[py]},$$scope:{ctx:z}}}),Co=new ft({props:{anchor:"transformers.LayoutLMForMaskedLM.forward.example",$$slots:{default:[uy]},$$scope:{ctx:z}}}),ds=new it({}),cs=new ne({props:{name:"class transformers.LayoutLMForSequenceClassification",anchor:"transformers.LayoutLMForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_layoutlm.py#L986"}}),_s=new ne({props:{name:"forward",anchor:"transformers.LayoutLMForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
If set to <code>True</code>, the model will return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_layoutlm.py#L1000",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ao=new pt({props:{$$slots:{default:[hy]},$$scope:{ctx:z}}}),Do=new ft({props:{anchor:"transformers.LayoutLMForSequenceClassification.forward.example",$$slots:{default:[my]},$$scope:{ctx:z}}}),ys=new it({}),bs=new ne({props:{name:"class transformers.LayoutLMForTokenClassification",anchor:"transformers.LayoutLMForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_layoutlm.py#L1123"}}),$s=new ne({props:{name:"forward",anchor:"transformers.LayoutLMForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LayoutLMForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
If set to <code>True</code>, the model will return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_layoutlm.py#L1137",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oo=new pt({props:{$$slots:{default:[fy]},$$scope:{ctx:z}}}),Io=new ft({props:{anchor:"transformers.LayoutLMForTokenClassification.forward.example",$$slots:{default:[gy]},$$scope:{ctx:z}}}),xs=new it({}),js=new ne({props:{name:"class transformers.LayoutLMForQuestionAnswering",anchor:"transformers.LayoutLMForQuestionAnswering",parameters:[{name:"config",val:""},{name:"has_visual_segment_embedding",val:" = True"}],parametersDescription:[{anchor:"transformers.LayoutLMForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_layoutlm.py#L1241"}}),Ps=new ne({props:{name:"forward",anchor:"transformers.LayoutLMForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"bbox",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_layoutlm.py#L1255",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Uo=new ft({props:{anchor:"transformers.LayoutLMForQuestionAnswering.forward.example",$$slots:{default:[_y]},$$scope:{ctx:z}}}),As=new it({}),Ds=new ne({props:{name:"class transformers.TFLayoutLMModel",anchor:"transformers.TFLayoutLMModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L920"}}),Bo=new pt({props:{$$slots:{default:[yy]},$$scope:{ctx:z}}}),Ss=new ne({props:{name:"call",anchor:"transformers.TFLayoutLMModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L926",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ho=new pt({props:{$$slots:{default:[by]},$$scope:{ctx:z}}}),Ko=new ft({props:{anchor:"transformers.TFLayoutLMModel.call.example",$$slots:{default:[ky]},$$scope:{ctx:z}}}),Us=new it({}),Ws=new ne({props:{name:"class transformers.TFLayoutLMForMaskedLM",anchor:"transformers.TFLayoutLMForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1020"}}),Ro=new pt({props:{$$slots:{default:[wy]},$$scope:{ctx:z}}}),Rs=new ne({props:{name:"call",anchor:"transformers.TFLayoutLMForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLayoutLMForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1048",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Vo=new pt({props:{$$slots:{default:[Ly]},$$scope:{ctx:z}}}),Xo=new ft({props:{anchor:"transformers.TFLayoutLMForMaskedLM.call.example",$$slots:{default:[Ty]},$$scope:{ctx:z}}}),Vs=new it({}),Xs=new ne({props:{name:"class transformers.TFLayoutLMForSequenceClassification",anchor:"transformers.TFLayoutLMForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1153"}}),Zo=new pt({props:{$$slots:{default:[vy]},$$scope:{ctx:z}}}),Js=new ne({props:{name:"call",anchor:"transformers.TFLayoutLMForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLayoutLMForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1171",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Go=new pt({props:{$$slots:{default:[My]},$$scope:{ctx:z}}}),Jo=new ft({props:{anchor:"transformers.TFLayoutLMForSequenceClassification.call.example",$$slots:{default:[$y]},$$scope:{ctx:z}}}),ea=new it({}),ta=new ne({props:{name:"class transformers.TFLayoutLMForTokenClassification",anchor:"transformers.TFLayoutLMForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1277"}}),tn=new pt({props:{$$slots:{default:[xy]},$$scope:{ctx:z}}}),aa=new ne({props:{name:"call",anchor:"transformers.TFLayoutLMForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLayoutLMForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1301",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),on=new pt({props:{$$slots:{default:[jy]},$$scope:{ctx:z}}}),nn=new ft({props:{anchor:"transformers.TFLayoutLMForTokenClassification.call.example",$$slots:{default:[Fy]},$$scope:{ctx:z}}}),ra=new it({}),ia=new ne({props:{name:"class transformers.TFLayoutLMForQuestionAnswering",anchor:"transformers.TFLayoutLMForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLayoutLMForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig">LayoutLMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1406"}}),an=new pt({props:{$$slots:{default:[qy]},$$scope:{ctx:z}}}),ua=new ne({props:{name:"call",anchor:"transformers.TFLayoutLMForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"bbox",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLayoutLMForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMTokenizer">LayoutLMTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFLayoutLMForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLayoutLMForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFLayoutLMForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/layoutlm/modeling_tf_layoutlm.py#L1427",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),rn=new pt({props:{$$slots:{default:[Ey]},$$scope:{ctx:z}}}),ln=new ft({props:{anchor:"transformers.TFLayoutLMForQuestionAnswering.call.example",$$slots:{default:[zy]},$$scope:{ctx:z}}}),{c(){d=a("meta"),k=c(),m=a("h1"),f=a("a"),b=a("span"),L(l.$$.fragment),u=c(),q=a("span"),Me=o("LayoutLM"),_e=c(),W=a("a"),ye=c(),K=a("h2"),w=a("a"),he=a("span"),L(I.$$.fragment),$e=c(),me=a("span"),Q=o("Overview"),be=c(),se=a("p"),R=o("The LayoutLM model was proposed in the paper "),ie=a("a"),xe=o(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),V=o(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei, and
Ming Zhou. It\u2019s a simple but effective pretraining method of text and layout for document image understanding and
information extraction tasks, such as form understanding and receipt understanding. It obtains state-of-the-art results
on several downstream tasks:`),ke=c(),oe=a("ul"),S=a("li"),je=o("form understanding: the "),le=a("a"),ae=o("FUNSD"),E=o(` dataset (a collection of 199 annotated
forms comprising more than 30,000 words).`),C=c(),de=a("li"),X=o("receipt understanding: the "),ce=a("a"),Fe=o("SROIE"),Y=o(` dataset (a collection of 626 receipts for
training and 347 receipts for testing).`),qe=c(),pe=a("li"),P=o("document image classification: the "),ue=a("a"),Z=o("RVL-CDIP"),Ee=o(` dataset (a collection of
400,000 images belonging to one of 16 classes).`),we=c(),B=a("p"),ze=o("The abstract from the paper is the following:"),Le=c(),O=a("p"),fe=a("em"),G=o(`Pre-training techniques have been verified successfully in a variety of NLP tasks in recent years. Despite the
widespread use of pretraining models for NLP applications, they almost exclusively focus on text-level manipulation,
while neglecting layout and style information that is vital for document image understanding. In this paper, we propose
the LayoutLM to jointly model interactions between text and layout information across scanned document images, which is
beneficial for a great number of real-world document image understanding tasks such as information extraction from
scanned documents. Furthermore, we also leverage image features to incorporate words\u2019 visual information into LayoutLM.
To the best of our knowledge, this is the first time that text and layout are jointly learned in a single framework for
document-level pretraining. It achieves new state-of-the-art results in several downstream tasks, including form
understanding (from 70.72 to 79.27), receipt understanding (from 94.02 to 95.24) and document image classification
(from 93.07 to 94.42).`),Te=c(),ee=a("p"),A=o("Tips:"),ve=c(),D=a("ul"),H=a("li"),Ce=o("In addition to "),_=a("em"),j=o("input_ids"),Ue=o(", "),te=a("a"),We=o("forward()"),Be=o(" also expects the input "),F=a("code"),He=o("bbox"),Ke=o(`, which are
the bounding boxes (i.e. 2D-positions) of the input tokens. These can be obtained using an external OCR engine such
as Google\u2019s `),Ae=a("a"),Qe=o("Tesseract"),Re=o(" (there\u2019s a "),N=a("a"),J=o("Python wrapper"),Ve=o(` available). Each bounding box should be in (x0, y0, x1, y1) format, where
(x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1) represents the
position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on a 0-1000
scale. To normalize, you can use the following function:`),Oe=c(),L(U.$$.fragment),Ie=c(),ge=a("p"),Pe=o("Here, "),Ne=a("code"),re=o("width"),Xe=o(" and "),dr=a("code"),dd=o("height"),cd=o(` correspond to the width and height of the original document in which the token
occurs. Those can be obtained using the Python Image Library (PIL) library for example, as follows:`),Ki=c(),L($n.$$.fragment),Qi=c(),ba=a("ul"),Ct=a("li"),pd=o("For a demo which shows how to fine-tune "),ka=a("a"),ud=o("LayoutLMForTokenClassification"),hd=o(" on the "),xn=a("a"),md=o("FUNSD dataset"),fd=o(" (a collection of annotated forms), see "),jn=a("a"),gd=o("this notebook"),_d=o(`.
It includes an inference part, which shows how to use Google\u2019s Tesseract on a new document.`),Ri=c(),Dt=a("p"),yd=o("This model was contributed by "),Fn=a("a"),bd=o("liminghao1630"),kd=o(`. The original code can be found
`),qn=a("a"),wd=o("here"),Ld=o("."),Vi=c(),Ht=a("h2"),ko=a("a"),cr=a("span"),L(En.$$.fragment),Td=c(),pr=a("span"),vd=o("LayoutLMConfig"),Xi=c(),ut=a("div"),L(zn.$$.fragment),Md=c(),Kt=a("p"),$d=o("This is the configuration class to store the configuration of a "),wa=a("a"),xd=o("LayoutLMModel"),jd=o(`. It is used to instantiate a
LayoutLM model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the LayoutLM
`),Cn=a("a"),Fd=o("microsoft/layoutlm-base-uncased"),qd=o(" architecture."),Ed=c(),Qt=a("p"),zd=o("Configuration objects inherit from "),La=a("a"),Cd=o("BertConfig"),Pd=o(` and can be used to control the model outputs. Read the
documentation from `),Ta=a("a"),Ad=o("BertConfig"),Dd=o(" for more information."),Nd=c(),L(wo.$$.fragment),Yi=c(),Rt=a("h2"),Lo=a("a"),ur=a("span"),L(Pn.$$.fragment),Od=c(),hr=a("span"),Id=o("LayoutLMTokenizer"),Zi=c(),Se=a("div"),L(An.$$.fragment),Sd=c(),mr=a("p"),Ud=o("Construct a LayoutLM tokenizer. Based on WordPiece."),Wd=c(),Dn=a("p"),Bd=o("This tokenizer inherits from "),va=a("a"),Hd=o("PreTrainedTokenizer"),Kd=o(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Qd=c(),Nt=a("div"),L(Nn.$$.fragment),Rd=c(),fr=a("p"),Vd=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A LayoutLM sequence has the following format:`),Xd=c(),On=a("ul"),Ma=a("li"),Yd=o("single sequence: "),gr=a("code"),Zd=o("[CLS] X [SEP]"),Gd=c(),$a=a("li"),Jd=o("pair of sequences: "),_r=a("code"),ec=o("[CLS] A [SEP] B [SEP]"),tc=c(),To=a("div"),L(In.$$.fragment),oc=c(),yr=a("p"),nc=o("Converts a sequence of tokens (string) in a single string."),sc=c(),_t=a("div"),L(Sn.$$.fragment),ac=c(),br=a("p"),rc=o("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A LayoutLM"),ic=c(),L(vo.$$.fragment),lc=c(),Vt=a("p"),dc=o("If "),kr=a("code"),cc=o("token_ids_1"),pc=o(" is "),wr=a("code"),uc=o("None"),hc=o(", this method only returns the first portion of the mask (0s)."),mc=c(),Mo=a("div"),L(Un.$$.fragment),fc=c(),Wn=a("p"),gc=o(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Lr=a("code"),_c=o("prepare_for_model"),yc=o(" method."),Gi=c(),Xt=a("h2"),$o=a("a"),Tr=a("span"),L(Bn.$$.fragment),bc=c(),vr=a("span"),kc=o("LayoutLMTokenizerFast"),Ji=c(),ot=a("div"),L(Hn.$$.fragment),wc=c(),Kn=a("p"),Lc=o("Construct a \u201Cfast\u201D LayoutLM tokenizer (backed by HuggingFace\u2019s "),Mr=a("em"),Tc=o("tokenizers"),vc=o(" library). Based on WordPiece."),Mc=c(),Qn=a("p"),$c=o("This tokenizer inherits from "),xa=a("a"),xc=o("PreTrainedTokenizerFast"),jc=o(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Fc=c(),Ot=a("div"),L(Rn.$$.fragment),qc=c(),$r=a("p"),Ec=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A LayoutLM sequence has the following format:`),zc=c(),Vn=a("ul"),ja=a("li"),Cc=o("single sequence: "),xr=a("code"),Pc=o("[CLS] X [SEP]"),Ac=c(),Fa=a("li"),Dc=o("pair of sequences: "),jr=a("code"),Nc=o("[CLS] A [SEP] B [SEP]"),Oc=c(),yt=a("div"),L(Xn.$$.fragment),Ic=c(),Fr=a("p"),Sc=o("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A LayoutLM"),Uc=c(),L(xo.$$.fragment),Wc=c(),Yt=a("p"),Bc=o("If "),qr=a("code"),Hc=o("token_ids_1"),Kc=o(" is "),Er=a("code"),Qc=o("None"),Rc=o(", this method only returns the first portion of the mask (0s)."),el=c(),Zt=a("h2"),jo=a("a"),zr=a("span"),L(Yn.$$.fragment),Vc=c(),Cr=a("span"),Xc=o("LayoutLMModel"),tl=c(),ht=a("div"),L(Zn.$$.fragment),Yc=c(),Gn=a("p"),Zc=o(`The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top.
The LayoutLM model was proposed in `),Jn=a("a"),Gc=o(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),Jc=o(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),ep=c(),es=a("p"),tp=o("This model is a PyTorch "),ts=a("a"),op=o("torch.nn.Module"),np=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),sp=c(),bt=a("div"),L(os.$$.fragment),ap=c(),Gt=a("p"),rp=o("The "),qa=a("a"),ip=o("LayoutLMModel"),lp=o(" forward method, overrides the "),Pr=a("code"),dp=o("__call__"),cp=o(" special method."),pp=c(),L(Fo.$$.fragment),up=c(),L(qo.$$.fragment),ol=c(),Jt=a("h2"),Eo=a("a"),Ar=a("span"),L(ns.$$.fragment),hp=c(),Dr=a("span"),mp=o("LayoutLMForMaskedLM"),nl=c(),mt=a("div"),L(ss.$$.fragment),fp=c(),eo=a("p"),gp=o("LayoutLM Model with a "),Nr=a("code"),_p=o("language modeling"),yp=o(` head on top.
The LayoutLM model was proposed in `),as=a("a"),bp=o(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),kp=o(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),wp=c(),rs=a("p"),Lp=o("This model is a PyTorch "),is=a("a"),Tp=o("torch.nn.Module"),vp=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Mp=c(),kt=a("div"),L(ls.$$.fragment),$p=c(),to=a("p"),xp=o("The "),Ea=a("a"),jp=o("LayoutLMForMaskedLM"),Fp=o(" forward method, overrides the "),Or=a("code"),qp=o("__call__"),Ep=o(" special method."),zp=c(),L(zo.$$.fragment),Cp=c(),L(Co.$$.fragment),sl=c(),oo=a("h2"),Po=a("a"),Ir=a("span"),L(ds.$$.fragment),Pp=c(),Sr=a("span"),Ap=o("LayoutLMForSequenceClassification"),al=c(),nt=a("div"),L(cs.$$.fragment),Dp=c(),ps=a("p"),Np=o(`LayoutLM Model with a sequence classification head on top (a linear layer on top of the pooled output) e.g. for
document image classification tasks such as the `),us=a("a"),Op=o("RVL-CDIP"),Ip=o(" dataset."),Sp=c(),hs=a("p"),Up=o("The LayoutLM model was proposed in "),ms=a("a"),Wp=o(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),Bp=o(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),Hp=c(),fs=a("p"),Kp=o("This model is a PyTorch "),gs=a("a"),Qp=o("torch.nn.Module"),Rp=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Vp=c(),wt=a("div"),L(_s.$$.fragment),Xp=c(),no=a("p"),Yp=o("The "),za=a("a"),Zp=o("LayoutLMForSequenceClassification"),Gp=o(" forward method, overrides the "),Ur=a("code"),Jp=o("__call__"),eu=o(" special method."),tu=c(),L(Ao.$$.fragment),ou=c(),L(Do.$$.fragment),rl=c(),so=a("h2"),No=a("a"),Wr=a("span"),L(ys.$$.fragment),nu=c(),Br=a("span"),su=o("LayoutLMForTokenClassification"),il=c(),st=a("div"),L(bs.$$.fragment),au=c(),ao=a("p"),ru=o(`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
sequence labeling (information extraction) tasks such as the `),ks=a("a"),iu=o("FUNSD"),lu=o(`
dataset and the `),ws=a("a"),du=o("SROIE"),cu=o(" dataset."),pu=c(),Ls=a("p"),uu=o("The LayoutLM model was proposed in "),Ts=a("a"),hu=o(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),mu=o(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),fu=c(),vs=a("p"),gu=o("This model is a PyTorch "),Ms=a("a"),_u=o("torch.nn.Module"),yu=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),bu=c(),Lt=a("div"),L($s.$$.fragment),ku=c(),ro=a("p"),wu=o("The "),Ca=a("a"),Lu=o("LayoutLMForTokenClassification"),Tu=o(" forward method, overrides the "),Hr=a("code"),vu=o("__call__"),Mu=o(" special method."),$u=c(),L(Oo.$$.fragment),xu=c(),L(Io.$$.fragment),ll=c(),io=a("h2"),So=a("a"),Kr=a("span"),L(xs.$$.fragment),ju=c(),Qr=a("span"),Fu=o("LayoutLMForQuestionAnswering"),dl=c(),at=a("div"),L(js.$$.fragment),qu=c(),Pt=a("p"),Eu=o(`LayoutLM Model with a span classification head on top for extractive question-answering tasks such as
`),Fs=a("a"),zu=o("DocVQA"),Cu=o(" (a linear layer on top of the final hidden-states output to compute "),Rr=a("code"),Pu=o("span start logits"),Au=o(" and "),Vr=a("code"),Du=o("span end logits"),Nu=o(")."),Ou=c(),qs=a("p"),Iu=o("The LayoutLM model was proposed in "),Es=a("a"),Su=o(`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),Uu=o(` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),Wu=c(),zs=a("p"),Bu=o("This model is a PyTorch "),Cs=a("a"),Hu=o("torch.nn.Module"),Ku=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Qu=c(),dt=a("div"),L(Ps.$$.fragment),Ru=c(),De=a("p"),Vu=o("start_positions ("),Xr=a("code"),Xu=o("torch.LongTensor"),Yu=o(" of shape "),Yr=a("code"),Zu=o("(batch_size,)"),Gu=o(", "),Zr=a("em"),Ju=o("optional"),eh=o(`):
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (`),Gr=a("code"),th=o("sequence_length"),oh=o(`). Position outside of the sequence
are not taken into account for computing the loss.
end_positions (`),Jr=a("code"),nh=o("torch.LongTensor"),sh=o(" of shape "),ei=a("code"),ah=o("(batch_size,)"),rh=o(", "),ti=a("em"),ih=o("optional"),lh=o(`):
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (`),oi=a("code"),dh=o("sequence_length"),ch=o(`). Position outside of the sequence
are not taken into account for computing the loss.`),ph=c(),ni=a("p"),uh=o("Example:"),hh=c(),si=a("p"),mh=o(`In the example below, we prepare a question + context pair for the LayoutLM model. It will give us a prediction
of what it thinks the answer is (the span of the answer within the texts parsed from the image).`),fh=c(),L(Uo.$$.fragment),cl=c(),lo=a("h2"),Wo=a("a"),ai=a("span"),L(As.$$.fragment),gh=c(),ri=a("span"),_h=o("TFLayoutLMModel"),pl=c(),Ze=a("div"),L(Ds.$$.fragment),yh=c(),ii=a("p"),bh=o("The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top."),kh=c(),Ns=a("p"),wh=o("This model inherits from "),Pa=a("a"),Lh=o("TFPreTrainedModel"),Th=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vh=c(),Os=a("p"),Mh=o("This model is also a "),Is=a("a"),$h=o("tf.keras.Model"),xh=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jh=c(),L(Bo.$$.fragment),Fh=c(),Tt=a("div"),L(Ss.$$.fragment),qh=c(),co=a("p"),Eh=o("The "),Aa=a("a"),zh=o("TFLayoutLMModel"),Ch=o(" forward method, overrides the "),li=a("code"),Ph=o("__call__"),Ah=o(" special method."),Dh=c(),L(Ho.$$.fragment),Nh=c(),L(Ko.$$.fragment),ul=c(),po=a("h2"),Qo=a("a"),di=a("span"),L(Us.$$.fragment),Oh=c(),ci=a("span"),Ih=o("TFLayoutLMForMaskedLM"),hl=c(),Ge=a("div"),L(Ws.$$.fragment),Sh=c(),Bs=a("p"),Uh=o("LayoutLM Model with a "),pi=a("code"),Wh=o("language modeling"),Bh=o(" head on top."),Hh=c(),Hs=a("p"),Kh=o("This model inherits from "),Da=a("a"),Qh=o("TFPreTrainedModel"),Rh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vh=c(),Ks=a("p"),Xh=o("This model is also a "),Qs=a("a"),Yh=o("tf.keras.Model"),Zh=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gh=c(),L(Ro.$$.fragment),Jh=c(),vt=a("div"),L(Rs.$$.fragment),em=c(),uo=a("p"),tm=o("The "),Na=a("a"),om=o("TFLayoutLMForMaskedLM"),nm=o(" forward method, overrides the "),ui=a("code"),sm=o("__call__"),am=o(" special method."),rm=c(),L(Vo.$$.fragment),im=c(),L(Xo.$$.fragment),ml=c(),ho=a("h2"),Yo=a("a"),hi=a("span"),L(Vs.$$.fragment),lm=c(),mi=a("span"),dm=o("TFLayoutLMForSequenceClassification"),fl=c(),Je=a("div"),L(Xs.$$.fragment),cm=c(),fi=a("p"),pm=o(`LayoutLM Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),um=c(),Ys=a("p"),hm=o("This model inherits from "),Oa=a("a"),mm=o("TFPreTrainedModel"),fm=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gm=c(),Zs=a("p"),_m=o("This model is also a "),Gs=a("a"),ym=o("tf.keras.Model"),bm=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),km=c(),L(Zo.$$.fragment),wm=c(),Mt=a("div"),L(Js.$$.fragment),Lm=c(),mo=a("p"),Tm=o("The "),Ia=a("a"),vm=o("TFLayoutLMForSequenceClassification"),Mm=o(" forward method, overrides the "),gi=a("code"),$m=o("__call__"),xm=o(" special method."),jm=c(),L(Go.$$.fragment),Fm=c(),L(Jo.$$.fragment),gl=c(),fo=a("h2"),en=a("a"),_i=a("span"),L(ea.$$.fragment),qm=c(),yi=a("span"),Em=o("TFLayoutLMForTokenClassification"),_l=c(),et=a("div"),L(ta.$$.fragment),zm=c(),bi=a("p"),Cm=o(`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Pm=c(),oa=a("p"),Am=o("This model inherits from "),Sa=a("a"),Dm=o("TFPreTrainedModel"),Nm=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Om=c(),na=a("p"),Im=o("This model is also a "),sa=a("a"),Sm=o("tf.keras.Model"),Um=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wm=c(),L(tn.$$.fragment),Bm=c(),$t=a("div"),L(aa.$$.fragment),Hm=c(),go=a("p"),Km=o("The "),Ua=a("a"),Qm=o("TFLayoutLMForTokenClassification"),Rm=o(" forward method, overrides the "),ki=a("code"),Vm=o("__call__"),Xm=o(" special method."),Ym=c(),L(on.$$.fragment),Zm=c(),L(nn.$$.fragment),yl=c(),_o=a("h2"),sn=a("a"),wi=a("span"),L(ra.$$.fragment),Gm=c(),Li=a("span"),Jm=o("TFLayoutLMForQuestionAnswering"),bl=c(),tt=a("div"),L(ia.$$.fragment),ef=c(),At=a("p"),tf=o(`LayoutLM Model with a span classification head on top for extractive question-answering tasks such as
`),la=a("a"),of=o("DocVQA"),nf=o(" (a linear layer on top of the final hidden-states output to compute "),Ti=a("code"),sf=o("span start logits"),af=o(" and "),vi=a("code"),rf=o("span end logits"),lf=o(")."),df=c(),da=a("p"),cf=o("This model inherits from "),Wa=a("a"),pf=o("TFPreTrainedModel"),uf=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hf=c(),ca=a("p"),mf=o("This model is also a "),pa=a("a"),ff=o("tf.keras.Model"),gf=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_f=c(),L(an.$$.fragment),yf=c(),xt=a("div"),L(ua.$$.fragment),bf=c(),yo=a("p"),kf=o("The "),Ba=a("a"),wf=o("TFLayoutLMForQuestionAnswering"),Lf=o(" forward method, overrides the "),Mi=a("code"),Tf=o("__call__"),vf=o(" special method."),Mf=c(),L(rn.$$.fragment),$f=c(),L(ln.$$.fragment),this.h()},l(s){const y=sy('[data-svelte="svelte-1phssyn"]',document.head);d=r(y,"META",{name:!0,content:!0}),y.forEach(t),k=p(s),m=r(s,"H1",{class:!0});var ha=i(m);f=r(ha,"A",{id:!0,class:!0,href:!0});var $i=i(f);b=r($i,"SPAN",{});var xi=i(b);T(l.$$.fragment,xi),xi.forEach(t),$i.forEach(t),u=p(ha),q=r(ha,"SPAN",{});var ji=i(q);Me=n(ji,"LayoutLM"),ji.forEach(t),ha.forEach(t),_e=p(s),W=r(s,"A",{id:!0}),i(W).forEach(t),ye=p(s),K=r(s,"H2",{class:!0});var ma=i(K);w=r(ma,"A",{id:!0,class:!0,href:!0});var Fi=i(w);he=r(Fi,"SPAN",{});var qi=i(he);T(I.$$.fragment,qi),qi.forEach(t),Fi.forEach(t),$e=p(ma),me=r(ma,"SPAN",{});var Ei=i(me);Q=n(Ei,"Overview"),Ei.forEach(t),ma.forEach(t),be=p(s),se=r(s,"P",{});var fa=i(se);R=n(fa,"The LayoutLM model was proposed in the paper "),ie=r(fa,"A",{href:!0,rel:!0});var zi=i(ie);xe=n(zi,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),zi.forEach(t),V=n(fa,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei, and
Ming Zhou. It\u2019s a simple but effective pretraining method of text and layout for document image understanding and
information extraction tasks, such as form understanding and receipt understanding. It obtains state-of-the-art results
on several downstream tasks:`),fa.forEach(t),ke=p(s),oe=r(s,"UL",{});var bo=i(oe);S=r(bo,"LI",{});var ga=i(S);je=n(ga,"form understanding: the "),le=r(ga,"A",{href:!0,rel:!0});var Ci=i(le);ae=n(Ci,"FUNSD"),Ci.forEach(t),E=n(ga,` dataset (a collection of 199 annotated
forms comprising more than 30,000 words).`),ga.forEach(t),C=p(bo),de=r(bo,"LI",{});var _a=i(de);X=n(_a,"receipt understanding: the "),ce=r(_a,"A",{href:!0,rel:!0});var Pi=i(ce);Fe=n(Pi,"SROIE"),Pi.forEach(t),Y=n(_a,` dataset (a collection of 626 receipts for
training and 347 receipts for testing).`),_a.forEach(t),qe=p(bo),pe=r(bo,"LI",{});var ya=i(pe);P=n(ya,"document image classification: the "),ue=r(ya,"A",{href:!0,rel:!0});var Ai=i(ue);Z=n(Ai,"RVL-CDIP"),Ai.forEach(t),Ee=n(ya,` dataset (a collection of
400,000 images belonging to one of 16 classes).`),ya.forEach(t),bo.forEach(t),we=p(s),B=r(s,"P",{});var Di=i(B);ze=n(Di,"The abstract from the paper is the following:"),Di.forEach(t),Le=p(s),O=r(s,"P",{});var Ni=i(O);fe=r(Ni,"EM",{});var Oi=i(fe);G=n(Oi,`Pre-training techniques have been verified successfully in a variety of NLP tasks in recent years. Despite the
widespread use of pretraining models for NLP applications, they almost exclusively focus on text-level manipulation,
while neglecting layout and style information that is vital for document image understanding. In this paper, we propose
the LayoutLM to jointly model interactions between text and layout information across scanned document images, which is
beneficial for a great number of real-world document image understanding tasks such as information extraction from
scanned documents. Furthermore, we also leverage image features to incorporate words\u2019 visual information into LayoutLM.
To the best of our knowledge, this is the first time that text and layout are jointly learned in a single framework for
document-level pretraining. It achieves new state-of-the-art results in several downstream tasks, including form
understanding (from 70.72 to 79.27), receipt understanding (from 94.02 to 95.24) and document image classification
(from 93.07 to 94.42).`),Oi.forEach(t),Ni.forEach(t),Te=p(s),ee=r(s,"P",{});var Ii=i(ee);A=n(Ii,"Tips:"),Ii.forEach(t),ve=p(s),D=r(s,"UL",{});var Si=i(D);H=r(Si,"LI",{});var rt=i(H);Ce=n(rt,"In addition to "),_=r(rt,"EM",{});var Ui=i(_);j=n(Ui,"input_ids"),Ui.forEach(t),Ue=n(rt,", "),te=r(rt,"A",{href:!0});var Wi=i(te);We=n(Wi,"forward()"),Wi.forEach(t),Be=n(rt," also expects the input "),F=r(rt,"CODE",{});var Bi=i(F);He=n(Bi,"bbox"),Bi.forEach(t),Ke=n(rt,`, which are
the bounding boxes (i.e. 2D-positions) of the input tokens. These can be obtained using an external OCR engine such
as Google\u2019s `),Ae=r(rt,"A",{href:!0,rel:!0});var Hi=i(Ae);Qe=n(Hi,"Tesseract"),Hi.forEach(t),Re=n(rt," (there\u2019s a "),N=r(rt,"A",{href:!0,rel:!0});var Ef=i(N);J=n(Ef,"Python wrapper"),Ef.forEach(t),Ve=n(rt,` available). Each bounding box should be in (x0, y0, x1, y1) format, where
(x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1) represents the
position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on a 0-1000
scale. To normalize, you can use the following function:`),rt.forEach(t),Si.forEach(t),Oe=p(s),T(U.$$.fragment,s),Ie=p(s),ge=r(s,"P",{});var Ha=i(ge);Pe=n(Ha,"Here, "),Ne=r(Ha,"CODE",{});var zf=i(Ne);re=n(zf,"width"),zf.forEach(t),Xe=n(Ha," and "),dr=r(Ha,"CODE",{});var Cf=i(dr);dd=n(Cf,"height"),Cf.forEach(t),cd=n(Ha,` correspond to the width and height of the original document in which the token
occurs. Those can be obtained using the Python Image Library (PIL) library for example, as follows:`),Ha.forEach(t),Ki=p(s),T($n.$$.fragment,s),Qi=p(s),ba=r(s,"UL",{});var Pf=i(ba);Ct=r(Pf,"LI",{});var dn=i(Ct);pd=n(dn,"For a demo which shows how to fine-tune "),ka=r(dn,"A",{href:!0});var Af=i(ka);ud=n(Af,"LayoutLMForTokenClassification"),Af.forEach(t),hd=n(dn," on the "),xn=r(dn,"A",{href:!0,rel:!0});var Df=i(xn);md=n(Df,"FUNSD dataset"),Df.forEach(t),fd=n(dn," (a collection of annotated forms), see "),jn=r(dn,"A",{href:!0,rel:!0});var Nf=i(jn);gd=n(Nf,"this notebook"),Nf.forEach(t),_d=n(dn,`.
It includes an inference part, which shows how to use Google\u2019s Tesseract on a new document.`),dn.forEach(t),Pf.forEach(t),Ri=p(s),Dt=r(s,"P",{});var Ka=i(Dt);yd=n(Ka,"This model was contributed by "),Fn=r(Ka,"A",{href:!0,rel:!0});var Of=i(Fn);bd=n(Of,"liminghao1630"),Of.forEach(t),kd=n(Ka,`. The original code can be found
`),qn=r(Ka,"A",{href:!0,rel:!0});var If=i(qn);wd=n(If,"here"),If.forEach(t),Ld=n(Ka,"."),Ka.forEach(t),Vi=p(s),Ht=r(s,"H2",{class:!0});var wl=i(Ht);ko=r(wl,"A",{id:!0,class:!0,href:!0});var Sf=i(ko);cr=r(Sf,"SPAN",{});var Uf=i(cr);T(En.$$.fragment,Uf),Uf.forEach(t),Sf.forEach(t),Td=p(wl),pr=r(wl,"SPAN",{});var Wf=i(pr);vd=n(Wf,"LayoutLMConfig"),Wf.forEach(t),wl.forEach(t),Xi=p(s),ut=r(s,"DIV",{class:!0});var cn=i(ut);T(zn.$$.fragment,cn),Md=p(cn),Kt=r(cn,"P",{});var Qa=i(Kt);$d=n(Qa,"This is the configuration class to store the configuration of a "),wa=r(Qa,"A",{href:!0});var Bf=i(wa);xd=n(Bf,"LayoutLMModel"),Bf.forEach(t),jd=n(Qa,`. It is used to instantiate a
LayoutLM model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the LayoutLM
`),Cn=r(Qa,"A",{href:!0,rel:!0});var Hf=i(Cn);Fd=n(Hf,"microsoft/layoutlm-base-uncased"),Hf.forEach(t),qd=n(Qa," architecture."),Qa.forEach(t),Ed=p(cn),Qt=r(cn,"P",{});var Ra=i(Qt);zd=n(Ra,"Configuration objects inherit from "),La=r(Ra,"A",{href:!0});var Kf=i(La);Cd=n(Kf,"BertConfig"),Kf.forEach(t),Pd=n(Ra,` and can be used to control the model outputs. Read the
documentation from `),Ta=r(Ra,"A",{href:!0});var Qf=i(Ta);Ad=n(Qf,"BertConfig"),Qf.forEach(t),Dd=n(Ra," for more information."),Ra.forEach(t),Nd=p(cn),T(wo.$$.fragment,cn),cn.forEach(t),Yi=p(s),Rt=r(s,"H2",{class:!0});var Ll=i(Rt);Lo=r(Ll,"A",{id:!0,class:!0,href:!0});var Rf=i(Lo);ur=r(Rf,"SPAN",{});var Vf=i(ur);T(Pn.$$.fragment,Vf),Vf.forEach(t),Rf.forEach(t),Od=p(Ll),hr=r(Ll,"SPAN",{});var Xf=i(hr);Id=n(Xf,"LayoutLMTokenizer"),Xf.forEach(t),Ll.forEach(t),Zi=p(s),Se=r(s,"DIV",{class:!0});var ct=i(Se);T(An.$$.fragment,ct),Sd=p(ct),mr=r(ct,"P",{});var Yf=i(mr);Ud=n(Yf,"Construct a LayoutLM tokenizer. Based on WordPiece."),Yf.forEach(t),Wd=p(ct),Dn=r(ct,"P",{});var Tl=i(Dn);Bd=n(Tl,"This tokenizer inherits from "),va=r(Tl,"A",{href:!0});var Zf=i(va);Hd=n(Zf,"PreTrainedTokenizer"),Zf.forEach(t),Kd=n(Tl,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Tl.forEach(t),Qd=p(ct),Nt=r(ct,"DIV",{class:!0});var Va=i(Nt);T(Nn.$$.fragment,Va),Rd=p(Va),fr=r(Va,"P",{});var Gf=i(fr);Vd=n(Gf,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A LayoutLM sequence has the following format:`),Gf.forEach(t),Xd=p(Va),On=r(Va,"UL",{});var vl=i(On);Ma=r(vl,"LI",{});var xf=i(Ma);Yd=n(xf,"single sequence: "),gr=r(xf,"CODE",{});var Jf=i(gr);Zd=n(Jf,"[CLS] X [SEP]"),Jf.forEach(t),xf.forEach(t),Gd=p(vl),$a=r(vl,"LI",{});var jf=i($a);Jd=n(jf,"pair of sequences: "),_r=r(jf,"CODE",{});var eg=i(_r);ec=n(eg,"[CLS] A [SEP] B [SEP]"),eg.forEach(t),jf.forEach(t),vl.forEach(t),Va.forEach(t),tc=p(ct),To=r(ct,"DIV",{class:!0});var Ml=i(To);T(In.$$.fragment,Ml),oc=p(Ml),yr=r(Ml,"P",{});var tg=i(yr);nc=n(tg,"Converts a sequence of tokens (string) in a single string."),tg.forEach(t),Ml.forEach(t),sc=p(ct),_t=r(ct,"DIV",{class:!0});var pn=i(_t);T(Sn.$$.fragment,pn),ac=p(pn),br=r(pn,"P",{});var og=i(br);rc=n(og,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A LayoutLM"),og.forEach(t),ic=p(pn),T(vo.$$.fragment,pn),lc=p(pn),Vt=r(pn,"P",{});var Xa=i(Vt);dc=n(Xa,"If "),kr=r(Xa,"CODE",{});var ng=i(kr);cc=n(ng,"token_ids_1"),ng.forEach(t),pc=n(Xa," is "),wr=r(Xa,"CODE",{});var sg=i(wr);uc=n(sg,"None"),sg.forEach(t),hc=n(Xa,", this method only returns the first portion of the mask (0s)."),Xa.forEach(t),pn.forEach(t),mc=p(ct),Mo=r(ct,"DIV",{class:!0});var $l=i(Mo);T(Un.$$.fragment,$l),fc=p($l),Wn=r($l,"P",{});var xl=i(Wn);gc=n(xl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Lr=r(xl,"CODE",{});var ag=i(Lr);_c=n(ag,"prepare_for_model"),ag.forEach(t),yc=n(xl," method."),xl.forEach(t),$l.forEach(t),ct.forEach(t),Gi=p(s),Xt=r(s,"H2",{class:!0});var jl=i(Xt);$o=r(jl,"A",{id:!0,class:!0,href:!0});var rg=i($o);Tr=r(rg,"SPAN",{});var ig=i(Tr);T(Bn.$$.fragment,ig),ig.forEach(t),rg.forEach(t),bc=p(jl),vr=r(jl,"SPAN",{});var lg=i(vr);kc=n(lg,"LayoutLMTokenizerFast"),lg.forEach(t),jl.forEach(t),Ji=p(s),ot=r(s,"DIV",{class:!0});var It=i(ot);T(Hn.$$.fragment,It),wc=p(It),Kn=r(It,"P",{});var Fl=i(Kn);Lc=n(Fl,"Construct a \u201Cfast\u201D LayoutLM tokenizer (backed by HuggingFace\u2019s "),Mr=r(Fl,"EM",{});var dg=i(Mr);Tc=n(dg,"tokenizers"),dg.forEach(t),vc=n(Fl," library). Based on WordPiece."),Fl.forEach(t),Mc=p(It),Qn=r(It,"P",{});var ql=i(Qn);$c=n(ql,"This tokenizer inherits from "),xa=r(ql,"A",{href:!0});var cg=i(xa);xc=n(cg,"PreTrainedTokenizerFast"),cg.forEach(t),jc=n(ql,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),ql.forEach(t),Fc=p(It),Ot=r(It,"DIV",{class:!0});var Ya=i(Ot);T(Rn.$$.fragment,Ya),qc=p(Ya),$r=r(Ya,"P",{});var pg=i($r);Ec=n(pg,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A LayoutLM sequence has the following format:`),pg.forEach(t),zc=p(Ya),Vn=r(Ya,"UL",{});var El=i(Vn);ja=r(El,"LI",{});var Ff=i(ja);Cc=n(Ff,"single sequence: "),xr=r(Ff,"CODE",{});var ug=i(xr);Pc=n(ug,"[CLS] X [SEP]"),ug.forEach(t),Ff.forEach(t),Ac=p(El),Fa=r(El,"LI",{});var qf=i(Fa);Dc=n(qf,"pair of sequences: "),jr=r(qf,"CODE",{});var hg=i(jr);Nc=n(hg,"[CLS] A [SEP] B [SEP]"),hg.forEach(t),qf.forEach(t),El.forEach(t),Ya.forEach(t),Oc=p(It),yt=r(It,"DIV",{class:!0});var un=i(yt);T(Xn.$$.fragment,un),Ic=p(un),Fr=r(un,"P",{});var mg=i(Fr);Sc=n(mg,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A LayoutLM"),mg.forEach(t),Uc=p(un),T(xo.$$.fragment,un),Wc=p(un),Yt=r(un,"P",{});var Za=i(Yt);Bc=n(Za,"If "),qr=r(Za,"CODE",{});var fg=i(qr);Hc=n(fg,"token_ids_1"),fg.forEach(t),Kc=n(Za," is "),Er=r(Za,"CODE",{});var gg=i(Er);Qc=n(gg,"None"),gg.forEach(t),Rc=n(Za,", this method only returns the first portion of the mask (0s)."),Za.forEach(t),un.forEach(t),It.forEach(t),el=p(s),Zt=r(s,"H2",{class:!0});var zl=i(Zt);jo=r(zl,"A",{id:!0,class:!0,href:!0});var _g=i(jo);zr=r(_g,"SPAN",{});var yg=i(zr);T(Yn.$$.fragment,yg),yg.forEach(t),_g.forEach(t),Vc=p(zl),Cr=r(zl,"SPAN",{});var bg=i(Cr);Xc=n(bg,"LayoutLMModel"),bg.forEach(t),zl.forEach(t),tl=p(s),ht=r(s,"DIV",{class:!0});var hn=i(ht);T(Zn.$$.fragment,hn),Yc=p(hn),Gn=r(hn,"P",{});var Cl=i(Gn);Zc=n(Cl,`The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top.
The LayoutLM model was proposed in `),Jn=r(Cl,"A",{href:!0,rel:!0});var kg=i(Jn);Gc=n(kg,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),kg.forEach(t),Jc=n(Cl,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),Cl.forEach(t),ep=p(hn),es=r(hn,"P",{});var Pl=i(es);tp=n(Pl,"This model is a PyTorch "),ts=r(Pl,"A",{href:!0,rel:!0});var wg=i(ts);op=n(wg,"torch.nn.Module"),wg.forEach(t),np=n(Pl,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Pl.forEach(t),sp=p(hn),bt=r(hn,"DIV",{class:!0});var mn=i(bt);T(os.$$.fragment,mn),ap=p(mn),Gt=r(mn,"P",{});var Ga=i(Gt);rp=n(Ga,"The "),qa=r(Ga,"A",{href:!0});var Lg=i(qa);ip=n(Lg,"LayoutLMModel"),Lg.forEach(t),lp=n(Ga," forward method, overrides the "),Pr=r(Ga,"CODE",{});var Tg=i(Pr);dp=n(Tg,"__call__"),Tg.forEach(t),cp=n(Ga," special method."),Ga.forEach(t),pp=p(mn),T(Fo.$$.fragment,mn),up=p(mn),T(qo.$$.fragment,mn),mn.forEach(t),hn.forEach(t),ol=p(s),Jt=r(s,"H2",{class:!0});var Al=i(Jt);Eo=r(Al,"A",{id:!0,class:!0,href:!0});var vg=i(Eo);Ar=r(vg,"SPAN",{});var Mg=i(Ar);T(ns.$$.fragment,Mg),Mg.forEach(t),vg.forEach(t),hp=p(Al),Dr=r(Al,"SPAN",{});var $g=i(Dr);mp=n($g,"LayoutLMForMaskedLM"),$g.forEach(t),Al.forEach(t),nl=p(s),mt=r(s,"DIV",{class:!0});var fn=i(mt);T(ss.$$.fragment,fn),fp=p(fn),eo=r(fn,"P",{});var Ja=i(eo);gp=n(Ja,"LayoutLM Model with a "),Nr=r(Ja,"CODE",{});var xg=i(Nr);_p=n(xg,"language modeling"),xg.forEach(t),yp=n(Ja,` head on top.
The LayoutLM model was proposed in `),as=r(Ja,"A",{href:!0,rel:!0});var jg=i(as);bp=n(jg,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),jg.forEach(t),kp=n(Ja,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),Ja.forEach(t),wp=p(fn),rs=r(fn,"P",{});var Dl=i(rs);Lp=n(Dl,"This model is a PyTorch "),is=r(Dl,"A",{href:!0,rel:!0});var Fg=i(is);Tp=n(Fg,"torch.nn.Module"),Fg.forEach(t),vp=n(Dl,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Dl.forEach(t),Mp=p(fn),kt=r(fn,"DIV",{class:!0});var gn=i(kt);T(ls.$$.fragment,gn),$p=p(gn),to=r(gn,"P",{});var er=i(to);xp=n(er,"The "),Ea=r(er,"A",{href:!0});var qg=i(Ea);jp=n(qg,"LayoutLMForMaskedLM"),qg.forEach(t),Fp=n(er," forward method, overrides the "),Or=r(er,"CODE",{});var Eg=i(Or);qp=n(Eg,"__call__"),Eg.forEach(t),Ep=n(er," special method."),er.forEach(t),zp=p(gn),T(zo.$$.fragment,gn),Cp=p(gn),T(Co.$$.fragment,gn),gn.forEach(t),fn.forEach(t),sl=p(s),oo=r(s,"H2",{class:!0});var Nl=i(oo);Po=r(Nl,"A",{id:!0,class:!0,href:!0});var zg=i(Po);Ir=r(zg,"SPAN",{});var Cg=i(Ir);T(ds.$$.fragment,Cg),Cg.forEach(t),zg.forEach(t),Pp=p(Nl),Sr=r(Nl,"SPAN",{});var Pg=i(Sr);Ap=n(Pg,"LayoutLMForSequenceClassification"),Pg.forEach(t),Nl.forEach(t),al=p(s),nt=r(s,"DIV",{class:!0});var St=i(nt);T(cs.$$.fragment,St),Dp=p(St),ps=r(St,"P",{});var Ol=i(ps);Np=n(Ol,`LayoutLM Model with a sequence classification head on top (a linear layer on top of the pooled output) e.g. for
document image classification tasks such as the `),us=r(Ol,"A",{href:!0,rel:!0});var Ag=i(us);Op=n(Ag,"RVL-CDIP"),Ag.forEach(t),Ip=n(Ol," dataset."),Ol.forEach(t),Sp=p(St),hs=r(St,"P",{});var Il=i(hs);Up=n(Il,"The LayoutLM model was proposed in "),ms=r(Il,"A",{href:!0,rel:!0});var Dg=i(ms);Wp=n(Dg,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),Dg.forEach(t),Bp=n(Il,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),Il.forEach(t),Hp=p(St),fs=r(St,"P",{});var Sl=i(fs);Kp=n(Sl,"This model is a PyTorch "),gs=r(Sl,"A",{href:!0,rel:!0});var Ng=i(gs);Qp=n(Ng,"torch.nn.Module"),Ng.forEach(t),Rp=n(Sl,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Sl.forEach(t),Vp=p(St),wt=r(St,"DIV",{class:!0});var _n=i(wt);T(_s.$$.fragment,_n),Xp=p(_n),no=r(_n,"P",{});var tr=i(no);Yp=n(tr,"The "),za=r(tr,"A",{href:!0});var Og=i(za);Zp=n(Og,"LayoutLMForSequenceClassification"),Og.forEach(t),Gp=n(tr," forward method, overrides the "),Ur=r(tr,"CODE",{});var Ig=i(Ur);Jp=n(Ig,"__call__"),Ig.forEach(t),eu=n(tr," special method."),tr.forEach(t),tu=p(_n),T(Ao.$$.fragment,_n),ou=p(_n),T(Do.$$.fragment,_n),_n.forEach(t),St.forEach(t),rl=p(s),so=r(s,"H2",{class:!0});var Ul=i(so);No=r(Ul,"A",{id:!0,class:!0,href:!0});var Sg=i(No);Wr=r(Sg,"SPAN",{});var Ug=i(Wr);T(ys.$$.fragment,Ug),Ug.forEach(t),Sg.forEach(t),nu=p(Ul),Br=r(Ul,"SPAN",{});var Wg=i(Br);su=n(Wg,"LayoutLMForTokenClassification"),Wg.forEach(t),Ul.forEach(t),il=p(s),st=r(s,"DIV",{class:!0});var Ut=i(st);T(bs.$$.fragment,Ut),au=p(Ut),ao=r(Ut,"P",{});var or=i(ao);ru=n(or,`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
sequence labeling (information extraction) tasks such as the `),ks=r(or,"A",{href:!0,rel:!0});var Bg=i(ks);iu=n(Bg,"FUNSD"),Bg.forEach(t),lu=n(or,`
dataset and the `),ws=r(or,"A",{href:!0,rel:!0});var Hg=i(ws);du=n(Hg,"SROIE"),Hg.forEach(t),cu=n(or," dataset."),or.forEach(t),pu=p(Ut),Ls=r(Ut,"P",{});var Wl=i(Ls);uu=n(Wl,"The LayoutLM model was proposed in "),Ts=r(Wl,"A",{href:!0,rel:!0});var Kg=i(Ts);hu=n(Kg,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),Kg.forEach(t),mu=n(Wl,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),Wl.forEach(t),fu=p(Ut),vs=r(Ut,"P",{});var Bl=i(vs);gu=n(Bl,"This model is a PyTorch "),Ms=r(Bl,"A",{href:!0,rel:!0});var Qg=i(Ms);_u=n(Qg,"torch.nn.Module"),Qg.forEach(t),yu=n(Bl,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Bl.forEach(t),bu=p(Ut),Lt=r(Ut,"DIV",{class:!0});var yn=i(Lt);T($s.$$.fragment,yn),ku=p(yn),ro=r(yn,"P",{});var nr=i(ro);wu=n(nr,"The "),Ca=r(nr,"A",{href:!0});var Rg=i(Ca);Lu=n(Rg,"LayoutLMForTokenClassification"),Rg.forEach(t),Tu=n(nr," forward method, overrides the "),Hr=r(nr,"CODE",{});var Vg=i(Hr);vu=n(Vg,"__call__"),Vg.forEach(t),Mu=n(nr," special method."),nr.forEach(t),$u=p(yn),T(Oo.$$.fragment,yn),xu=p(yn),T(Io.$$.fragment,yn),yn.forEach(t),Ut.forEach(t),ll=p(s),io=r(s,"H2",{class:!0});var Hl=i(io);So=r(Hl,"A",{id:!0,class:!0,href:!0});var Xg=i(So);Kr=r(Xg,"SPAN",{});var Yg=i(Kr);T(xs.$$.fragment,Yg),Yg.forEach(t),Xg.forEach(t),ju=p(Hl),Qr=r(Hl,"SPAN",{});var Zg=i(Qr);Fu=n(Zg,"LayoutLMForQuestionAnswering"),Zg.forEach(t),Hl.forEach(t),dl=p(s),at=r(s,"DIV",{class:!0});var Wt=i(at);T(js.$$.fragment,Wt),qu=p(Wt),Pt=r(Wt,"P",{});var bn=i(Pt);Eu=n(bn,`LayoutLM Model with a span classification head on top for extractive question-answering tasks such as
`),Fs=r(bn,"A",{href:!0,rel:!0});var Gg=i(Fs);zu=n(Gg,"DocVQA"),Gg.forEach(t),Cu=n(bn," (a linear layer on top of the final hidden-states output to compute "),Rr=r(bn,"CODE",{});var Jg=i(Rr);Pu=n(Jg,"span start logits"),Jg.forEach(t),Au=n(bn," and "),Vr=r(bn,"CODE",{});var e_=i(Vr);Du=n(e_,"span end logits"),e_.forEach(t),Nu=n(bn,")."),bn.forEach(t),Ou=p(Wt),qs=r(Wt,"P",{});var Kl=i(qs);Iu=n(Kl,"The LayoutLM model was proposed in "),Es=r(Kl,"A",{href:!0,rel:!0});var t_=i(Es);Su=n(t_,`LayoutLM: Pre-training of Text and Layout for Document Image
Understanding`),t_.forEach(t),Uu=n(Kl,` by Yiheng Xu, Minghao Li, Lei Cui, Shaohan Huang, Furu Wei and
Ming Zhou.`),Kl.forEach(t),Wu=p(Wt),zs=r(Wt,"P",{});var Ql=i(zs);Bu=n(Ql,"This model is a PyTorch "),Cs=r(Ql,"A",{href:!0,rel:!0});var o_=i(Cs);Hu=n(o_,"torch.nn.Module"),o_.forEach(t),Ku=n(Ql,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ql.forEach(t),Qu=p(Wt),dt=r(Wt,"DIV",{class:!0});var Bt=i(dt);T(Ps.$$.fragment,Bt),Ru=p(Bt),De=r(Bt,"P",{});var Ye=i(De);Vu=n(Ye,"start_positions ("),Xr=r(Ye,"CODE",{});var n_=i(Xr);Xu=n(n_,"torch.LongTensor"),n_.forEach(t),Yu=n(Ye," of shape "),Yr=r(Ye,"CODE",{});var s_=i(Yr);Zu=n(s_,"(batch_size,)"),s_.forEach(t),Gu=n(Ye,", "),Zr=r(Ye,"EM",{});var a_=i(Zr);Ju=n(a_,"optional"),a_.forEach(t),eh=n(Ye,`):
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (`),Gr=r(Ye,"CODE",{});var r_=i(Gr);th=n(r_,"sequence_length"),r_.forEach(t),oh=n(Ye,`). Position outside of the sequence
are not taken into account for computing the loss.
end_positions (`),Jr=r(Ye,"CODE",{});var i_=i(Jr);nh=n(i_,"torch.LongTensor"),i_.forEach(t),sh=n(Ye," of shape "),ei=r(Ye,"CODE",{});var l_=i(ei);ah=n(l_,"(batch_size,)"),l_.forEach(t),rh=n(Ye,", "),ti=r(Ye,"EM",{});var d_=i(ti);ih=n(d_,"optional"),d_.forEach(t),lh=n(Ye,`):
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (`),oi=r(Ye,"CODE",{});var c_=i(oi);dh=n(c_,"sequence_length"),c_.forEach(t),ch=n(Ye,`). Position outside of the sequence
are not taken into account for computing the loss.`),Ye.forEach(t),ph=p(Bt),ni=r(Bt,"P",{});var p_=i(ni);uh=n(p_,"Example:"),p_.forEach(t),hh=p(Bt),si=r(Bt,"P",{});var u_=i(si);mh=n(u_,`In the example below, we prepare a question + context pair for the LayoutLM model. It will give us a prediction
of what it thinks the answer is (the span of the answer within the texts parsed from the image).`),u_.forEach(t),fh=p(Bt),T(Uo.$$.fragment,Bt),Bt.forEach(t),Wt.forEach(t),cl=p(s),lo=r(s,"H2",{class:!0});var Rl=i(lo);Wo=r(Rl,"A",{id:!0,class:!0,href:!0});var h_=i(Wo);ai=r(h_,"SPAN",{});var m_=i(ai);T(As.$$.fragment,m_),m_.forEach(t),h_.forEach(t),gh=p(Rl),ri=r(Rl,"SPAN",{});var f_=i(ri);_h=n(f_,"TFLayoutLMModel"),f_.forEach(t),Rl.forEach(t),pl=p(s),Ze=r(s,"DIV",{class:!0});var jt=i(Ze);T(Ds.$$.fragment,jt),yh=p(jt),ii=r(jt,"P",{});var g_=i(ii);bh=n(g_,"The bare LayoutLM Model transformer outputting raw hidden-states without any specific head on top."),g_.forEach(t),kh=p(jt),Ns=r(jt,"P",{});var Vl=i(Ns);wh=n(Vl,"This model inherits from "),Pa=r(Vl,"A",{href:!0});var __=i(Pa);Lh=n(__,"TFPreTrainedModel"),__.forEach(t),Th=n(Vl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vl.forEach(t),vh=p(jt),Os=r(jt,"P",{});var Xl=i(Os);Mh=n(Xl,"This model is also a "),Is=r(Xl,"A",{href:!0,rel:!0});var y_=i(Is);$h=n(y_,"tf.keras.Model"),y_.forEach(t),xh=n(Xl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xl.forEach(t),jh=p(jt),T(Bo.$$.fragment,jt),Fh=p(jt),Tt=r(jt,"DIV",{class:!0});var kn=i(Tt);T(Ss.$$.fragment,kn),qh=p(kn),co=r(kn,"P",{});var sr=i(co);Eh=n(sr,"The "),Aa=r(sr,"A",{href:!0});var b_=i(Aa);zh=n(b_,"TFLayoutLMModel"),b_.forEach(t),Ch=n(sr," forward method, overrides the "),li=r(sr,"CODE",{});var k_=i(li);Ph=n(k_,"__call__"),k_.forEach(t),Ah=n(sr," special method."),sr.forEach(t),Dh=p(kn),T(Ho.$$.fragment,kn),Nh=p(kn),T(Ko.$$.fragment,kn),kn.forEach(t),jt.forEach(t),ul=p(s),po=r(s,"H2",{class:!0});var Yl=i(po);Qo=r(Yl,"A",{id:!0,class:!0,href:!0});var w_=i(Qo);di=r(w_,"SPAN",{});var L_=i(di);T(Us.$$.fragment,L_),L_.forEach(t),w_.forEach(t),Oh=p(Yl),ci=r(Yl,"SPAN",{});var T_=i(ci);Ih=n(T_,"TFLayoutLMForMaskedLM"),T_.forEach(t),Yl.forEach(t),hl=p(s),Ge=r(s,"DIV",{class:!0});var Ft=i(Ge);T(Ws.$$.fragment,Ft),Sh=p(Ft),Bs=r(Ft,"P",{});var Zl=i(Bs);Uh=n(Zl,"LayoutLM Model with a "),pi=r(Zl,"CODE",{});var v_=i(pi);Wh=n(v_,"language modeling"),v_.forEach(t),Bh=n(Zl," head on top."),Zl.forEach(t),Hh=p(Ft),Hs=r(Ft,"P",{});var Gl=i(Hs);Kh=n(Gl,"This model inherits from "),Da=r(Gl,"A",{href:!0});var M_=i(Da);Qh=n(M_,"TFPreTrainedModel"),M_.forEach(t),Rh=n(Gl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gl.forEach(t),Vh=p(Ft),Ks=r(Ft,"P",{});var Jl=i(Ks);Xh=n(Jl,"This model is also a "),Qs=r(Jl,"A",{href:!0,rel:!0});var $_=i(Qs);Yh=n($_,"tf.keras.Model"),$_.forEach(t),Zh=n(Jl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jl.forEach(t),Gh=p(Ft),T(Ro.$$.fragment,Ft),Jh=p(Ft),vt=r(Ft,"DIV",{class:!0});var wn=i(vt);T(Rs.$$.fragment,wn),em=p(wn),uo=r(wn,"P",{});var ar=i(uo);tm=n(ar,"The "),Na=r(ar,"A",{href:!0});var x_=i(Na);om=n(x_,"TFLayoutLMForMaskedLM"),x_.forEach(t),nm=n(ar," forward method, overrides the "),ui=r(ar,"CODE",{});var j_=i(ui);sm=n(j_,"__call__"),j_.forEach(t),am=n(ar," special method."),ar.forEach(t),rm=p(wn),T(Vo.$$.fragment,wn),im=p(wn),T(Xo.$$.fragment,wn),wn.forEach(t),Ft.forEach(t),ml=p(s),ho=r(s,"H2",{class:!0});var ed=i(ho);Yo=r(ed,"A",{id:!0,class:!0,href:!0});var F_=i(Yo);hi=r(F_,"SPAN",{});var q_=i(hi);T(Vs.$$.fragment,q_),q_.forEach(t),F_.forEach(t),lm=p(ed),mi=r(ed,"SPAN",{});var E_=i(mi);dm=n(E_,"TFLayoutLMForSequenceClassification"),E_.forEach(t),ed.forEach(t),fl=p(s),Je=r(s,"DIV",{class:!0});var qt=i(Je);T(Xs.$$.fragment,qt),cm=p(qt),fi=r(qt,"P",{});var z_=i(fi);pm=n(z_,`LayoutLM Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),z_.forEach(t),um=p(qt),Ys=r(qt,"P",{});var td=i(Ys);hm=n(td,"This model inherits from "),Oa=r(td,"A",{href:!0});var C_=i(Oa);mm=n(C_,"TFPreTrainedModel"),C_.forEach(t),fm=n(td,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),td.forEach(t),gm=p(qt),Zs=r(qt,"P",{});var od=i(Zs);_m=n(od,"This model is also a "),Gs=r(od,"A",{href:!0,rel:!0});var P_=i(Gs);ym=n(P_,"tf.keras.Model"),P_.forEach(t),bm=n(od,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),od.forEach(t),km=p(qt),T(Zo.$$.fragment,qt),wm=p(qt),Mt=r(qt,"DIV",{class:!0});var Ln=i(Mt);T(Js.$$.fragment,Ln),Lm=p(Ln),mo=r(Ln,"P",{});var rr=i(mo);Tm=n(rr,"The "),Ia=r(rr,"A",{href:!0});var A_=i(Ia);vm=n(A_,"TFLayoutLMForSequenceClassification"),A_.forEach(t),Mm=n(rr," forward method, overrides the "),gi=r(rr,"CODE",{});var D_=i(gi);$m=n(D_,"__call__"),D_.forEach(t),xm=n(rr," special method."),rr.forEach(t),jm=p(Ln),T(Go.$$.fragment,Ln),Fm=p(Ln),T(Jo.$$.fragment,Ln),Ln.forEach(t),qt.forEach(t),gl=p(s),fo=r(s,"H2",{class:!0});var nd=i(fo);en=r(nd,"A",{id:!0,class:!0,href:!0});var N_=i(en);_i=r(N_,"SPAN",{});var O_=i(_i);T(ea.$$.fragment,O_),O_.forEach(t),N_.forEach(t),qm=p(nd),yi=r(nd,"SPAN",{});var I_=i(yi);Em=n(I_,"TFLayoutLMForTokenClassification"),I_.forEach(t),nd.forEach(t),_l=p(s),et=r(s,"DIV",{class:!0});var Et=i(et);T(ta.$$.fragment,Et),zm=p(Et),bi=r(Et,"P",{});var S_=i(bi);Cm=n(S_,`LayoutLM Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),S_.forEach(t),Pm=p(Et),oa=r(Et,"P",{});var sd=i(oa);Am=n(sd,"This model inherits from "),Sa=r(sd,"A",{href:!0});var U_=i(Sa);Dm=n(U_,"TFPreTrainedModel"),U_.forEach(t),Nm=n(sd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sd.forEach(t),Om=p(Et),na=r(Et,"P",{});var ad=i(na);Im=n(ad,"This model is also a "),sa=r(ad,"A",{href:!0,rel:!0});var W_=i(sa);Sm=n(W_,"tf.keras.Model"),W_.forEach(t),Um=n(ad,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ad.forEach(t),Wm=p(Et),T(tn.$$.fragment,Et),Bm=p(Et),$t=r(Et,"DIV",{class:!0});var Tn=i($t);T(aa.$$.fragment,Tn),Hm=p(Tn),go=r(Tn,"P",{});var ir=i(go);Km=n(ir,"The "),Ua=r(ir,"A",{href:!0});var B_=i(Ua);Qm=n(B_,"TFLayoutLMForTokenClassification"),B_.forEach(t),Rm=n(ir," forward method, overrides the "),ki=r(ir,"CODE",{});var H_=i(ki);Vm=n(H_,"__call__"),H_.forEach(t),Xm=n(ir," special method."),ir.forEach(t),Ym=p(Tn),T(on.$$.fragment,Tn),Zm=p(Tn),T(nn.$$.fragment,Tn),Tn.forEach(t),Et.forEach(t),yl=p(s),_o=r(s,"H2",{class:!0});var rd=i(_o);sn=r(rd,"A",{id:!0,class:!0,href:!0});var K_=i(sn);wi=r(K_,"SPAN",{});var Q_=i(wi);T(ra.$$.fragment,Q_),Q_.forEach(t),K_.forEach(t),Gm=p(rd),Li=r(rd,"SPAN",{});var R_=i(Li);Jm=n(R_,"TFLayoutLMForQuestionAnswering"),R_.forEach(t),rd.forEach(t),bl=p(s),tt=r(s,"DIV",{class:!0});var zt=i(tt);T(ia.$$.fragment,zt),ef=p(zt),At=r(zt,"P",{});var vn=i(At);tf=n(vn,`LayoutLM Model with a span classification head on top for extractive question-answering tasks such as
`),la=r(vn,"A",{href:!0,rel:!0});var V_=i(la);of=n(V_,"DocVQA"),V_.forEach(t),nf=n(vn," (a linear layer on top of the final hidden-states output to compute "),Ti=r(vn,"CODE",{});var X_=i(Ti);sf=n(X_,"span start logits"),X_.forEach(t),af=n(vn," and "),vi=r(vn,"CODE",{});var Y_=i(vi);rf=n(Y_,"span end logits"),Y_.forEach(t),lf=n(vn,")."),vn.forEach(t),df=p(zt),da=r(zt,"P",{});var id=i(da);cf=n(id,"This model inherits from "),Wa=r(id,"A",{href:!0});var Z_=i(Wa);pf=n(Z_,"TFPreTrainedModel"),Z_.forEach(t),uf=n(id,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),id.forEach(t),hf=p(zt),ca=r(zt,"P",{});var ld=i(ca);mf=n(ld,"This model is also a "),pa=r(ld,"A",{href:!0,rel:!0});var G_=i(pa);ff=n(G_,"tf.keras.Model"),G_.forEach(t),gf=n(ld,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ld.forEach(t),_f=p(zt),T(an.$$.fragment,zt),yf=p(zt),xt=r(zt,"DIV",{class:!0});var Mn=i(xt);T(ua.$$.fragment,Mn),bf=p(Mn),yo=r(Mn,"P",{});var lr=i(yo);kf=n(lr,"The "),Ba=r(lr,"A",{href:!0});var J_=i(Ba);wf=n(J_,"TFLayoutLMForQuestionAnswering"),J_.forEach(t),Lf=n(lr," forward method, overrides the "),Mi=r(lr,"CODE",{});var ey=i(Mi);Tf=n(ey,"__call__"),ey.forEach(t),vf=n(lr," special method."),lr.forEach(t),Mf=p(Mn),T(rn.$$.fragment,Mn),$f=p(Mn),T(ln.$$.fragment,Mn),Mn.forEach(t),zt.forEach(t),this.h()},h(){h(d,"name","hf:doc:metadata"),h(d,"content",JSON.stringify(Py)),h(f,"id","layoutlm"),h(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(f,"href","#layoutlm"),h(m,"class","relative group"),h(W,"id","Overview"),h(w,"id","overview"),h(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(w,"href","#overview"),h(K,"class","relative group"),h(ie,"href","https://arxiv.org/abs/1912.13318"),h(ie,"rel","nofollow"),h(le,"href","https://guillaumejaume.github.io/FUNSD/"),h(le,"rel","nofollow"),h(ce,"href","https://rrc.cvc.uab.es/?ch=13"),h(ce,"rel","nofollow"),h(ue,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),h(ue,"rel","nofollow"),h(te,"href","/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMModel.forward"),h(Ae,"href","https://github.com/tesseract-ocr/tesseract"),h(Ae,"rel","nofollow"),h(N,"href","https://pypi.org/project/pytesseract/"),h(N,"rel","nofollow"),h(ka,"href","/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMForTokenClassification"),h(xn,"href","https://guillaumejaume.github.io/FUNSD/"),h(xn,"rel","nofollow"),h(jn,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/LayoutLM/Fine_tuning_LayoutLMForTokenClassification_on_FUNSD.ipynb"),h(jn,"rel","nofollow"),h(Fn,"href","https://huggingface.co/liminghao1630"),h(Fn,"rel","nofollow"),h(qn,"href","https://github.com/microsoft/unilm/tree/master/layoutlm"),h(qn,"rel","nofollow"),h(ko,"id","transformers.LayoutLMConfig"),h(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ko,"href","#transformers.LayoutLMConfig"),h(Ht,"class","relative group"),h(wa,"href","/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMModel"),h(Cn,"href","https://huggingface.co/microsoft/layoutlm-base-uncased"),h(Cn,"rel","nofollow"),h(La,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"),h(Ta,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"),h(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Lo,"id","transformers.LayoutLMTokenizer"),h(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Lo,"href","#transformers.LayoutLMTokenizer"),h(Rt,"class","relative group"),h(va,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(To,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h($o,"id","transformers.LayoutLMTokenizerFast"),h($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h($o,"href","#transformers.LayoutLMTokenizerFast"),h(Xt,"class","relative group"),h(xa,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),h(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(jo,"id","transformers.LayoutLMModel"),h(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(jo,"href","#transformers.LayoutLMModel"),h(Zt,"class","relative group"),h(Jn,"href","https://arxiv.org/abs/1912.13318"),h(Jn,"rel","nofollow"),h(ts,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(ts,"rel","nofollow"),h(qa,"href","/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMModel"),h(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Eo,"id","transformers.LayoutLMForMaskedLM"),h(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Eo,"href","#transformers.LayoutLMForMaskedLM"),h(Jt,"class","relative group"),h(as,"href","https://arxiv.org/abs/1912.13318"),h(as,"rel","nofollow"),h(is,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(is,"rel","nofollow"),h(Ea,"href","/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMForMaskedLM"),h(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Po,"id","transformers.LayoutLMForSequenceClassification"),h(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Po,"href","#transformers.LayoutLMForSequenceClassification"),h(oo,"class","relative group"),h(us,"href","https://www.cs.cmu.edu/~aharley/rvl-cdip/"),h(us,"rel","nofollow"),h(ms,"href","https://arxiv.org/abs/1912.13318"),h(ms,"rel","nofollow"),h(gs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(gs,"rel","nofollow"),h(za,"href","/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMForSequenceClassification"),h(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(No,"id","transformers.LayoutLMForTokenClassification"),h(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(No,"href","#transformers.LayoutLMForTokenClassification"),h(so,"class","relative group"),h(ks,"href","https://guillaumejaume.github.io/FUNSD/"),h(ks,"rel","nofollow"),h(ws,"href","https://rrc.cvc.uab.es/?ch=13"),h(ws,"rel","nofollow"),h(Ts,"href","https://arxiv.org/abs/1912.13318"),h(Ts,"rel","nofollow"),h(Ms,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Ms,"rel","nofollow"),h(Ca,"href","/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMForTokenClassification"),h(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(So,"id","transformers.LayoutLMForQuestionAnswering"),h(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(So,"href","#transformers.LayoutLMForQuestionAnswering"),h(io,"class","relative group"),h(Fs,"href","https://rrc.cvc.uab.es/?ch=17"),h(Fs,"rel","nofollow"),h(Es,"href","https://arxiv.org/abs/1912.13318"),h(Es,"rel","nofollow"),h(Cs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Cs,"rel","nofollow"),h(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Wo,"id","transformers.TFLayoutLMModel"),h(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Wo,"href","#transformers.TFLayoutLMModel"),h(lo,"class","relative group"),h(Pa,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Is,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Is,"rel","nofollow"),h(Aa,"href","/docs/transformers/main/en/model_doc/layoutlm#transformers.TFLayoutLMModel"),h(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Qo,"id","transformers.TFLayoutLMForMaskedLM"),h(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Qo,"href","#transformers.TFLayoutLMForMaskedLM"),h(po,"class","relative group"),h(Da,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Qs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Qs,"rel","nofollow"),h(Na,"href","/docs/transformers/main/en/model_doc/layoutlm#transformers.TFLayoutLMForMaskedLM"),h(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Yo,"id","transformers.TFLayoutLMForSequenceClassification"),h(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Yo,"href","#transformers.TFLayoutLMForSequenceClassification"),h(ho,"class","relative group"),h(Oa,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Gs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Gs,"rel","nofollow"),h(Ia,"href","/docs/transformers/main/en/model_doc/layoutlm#transformers.TFLayoutLMForSequenceClassification"),h(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(en,"id","transformers.TFLayoutLMForTokenClassification"),h(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(en,"href","#transformers.TFLayoutLMForTokenClassification"),h(fo,"class","relative group"),h(Sa,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(sa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(sa,"rel","nofollow"),h(Ua,"href","/docs/transformers/main/en/model_doc/layoutlm#transformers.TFLayoutLMForTokenClassification"),h($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(sn,"id","transformers.TFLayoutLMForQuestionAnswering"),h(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(sn,"href","#transformers.TFLayoutLMForQuestionAnswering"),h(_o,"class","relative group"),h(la,"href","https://rrc.cvc.uab.es/?ch=17"),h(la,"rel","nofollow"),h(Wa,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(pa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(pa,"rel","nofollow"),h(Ba,"href","/docs/transformers/main/en/model_doc/layoutlm#transformers.TFLayoutLMForQuestionAnswering"),h(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,y){e(document.head,d),g(s,k,y),g(s,m,y),e(m,f),e(f,b),v(l,b,null),e(m,u),e(m,q),e(q,Me),g(s,_e,y),g(s,W,y),g(s,ye,y),g(s,K,y),e(K,w),e(w,he),v(I,he,null),e(K,$e),e(K,me),e(me,Q),g(s,be,y),g(s,se,y),e(se,R),e(se,ie),e(ie,xe),e(se,V),g(s,ke,y),g(s,oe,y),e(oe,S),e(S,je),e(S,le),e(le,ae),e(S,E),e(oe,C),e(oe,de),e(de,X),e(de,ce),e(ce,Fe),e(de,Y),e(oe,qe),e(oe,pe),e(pe,P),e(pe,ue),e(ue,Z),e(pe,Ee),g(s,we,y),g(s,B,y),e(B,ze),g(s,Le,y),g(s,O,y),e(O,fe),e(fe,G),g(s,Te,y),g(s,ee,y),e(ee,A),g(s,ve,y),g(s,D,y),e(D,H),e(H,Ce),e(H,_),e(_,j),e(H,Ue),e(H,te),e(te,We),e(H,Be),e(H,F),e(F,He),e(H,Ke),e(H,Ae),e(Ae,Qe),e(H,Re),e(H,N),e(N,J),e(H,Ve),g(s,Oe,y),v(U,s,y),g(s,Ie,y),g(s,ge,y),e(ge,Pe),e(ge,Ne),e(Ne,re),e(ge,Xe),e(ge,dr),e(dr,dd),e(ge,cd),g(s,Ki,y),v($n,s,y),g(s,Qi,y),g(s,ba,y),e(ba,Ct),e(Ct,pd),e(Ct,ka),e(ka,ud),e(Ct,hd),e(Ct,xn),e(xn,md),e(Ct,fd),e(Ct,jn),e(jn,gd),e(Ct,_d),g(s,Ri,y),g(s,Dt,y),e(Dt,yd),e(Dt,Fn),e(Fn,bd),e(Dt,kd),e(Dt,qn),e(qn,wd),e(Dt,Ld),g(s,Vi,y),g(s,Ht,y),e(Ht,ko),e(ko,cr),v(En,cr,null),e(Ht,Td),e(Ht,pr),e(pr,vd),g(s,Xi,y),g(s,ut,y),v(zn,ut,null),e(ut,Md),e(ut,Kt),e(Kt,$d),e(Kt,wa),e(wa,xd),e(Kt,jd),e(Kt,Cn),e(Cn,Fd),e(Kt,qd),e(ut,Ed),e(ut,Qt),e(Qt,zd),e(Qt,La),e(La,Cd),e(Qt,Pd),e(Qt,Ta),e(Ta,Ad),e(Qt,Dd),e(ut,Nd),v(wo,ut,null),g(s,Yi,y),g(s,Rt,y),e(Rt,Lo),e(Lo,ur),v(Pn,ur,null),e(Rt,Od),e(Rt,hr),e(hr,Id),g(s,Zi,y),g(s,Se,y),v(An,Se,null),e(Se,Sd),e(Se,mr),e(mr,Ud),e(Se,Wd),e(Se,Dn),e(Dn,Bd),e(Dn,va),e(va,Hd),e(Dn,Kd),e(Se,Qd),e(Se,Nt),v(Nn,Nt,null),e(Nt,Rd),e(Nt,fr),e(fr,Vd),e(Nt,Xd),e(Nt,On),e(On,Ma),e(Ma,Yd),e(Ma,gr),e(gr,Zd),e(On,Gd),e(On,$a),e($a,Jd),e($a,_r),e(_r,ec),e(Se,tc),e(Se,To),v(In,To,null),e(To,oc),e(To,yr),e(yr,nc),e(Se,sc),e(Se,_t),v(Sn,_t,null),e(_t,ac),e(_t,br),e(br,rc),e(_t,ic),v(vo,_t,null),e(_t,lc),e(_t,Vt),e(Vt,dc),e(Vt,kr),e(kr,cc),e(Vt,pc),e(Vt,wr),e(wr,uc),e(Vt,hc),e(Se,mc),e(Se,Mo),v(Un,Mo,null),e(Mo,fc),e(Mo,Wn),e(Wn,gc),e(Wn,Lr),e(Lr,_c),e(Wn,yc),g(s,Gi,y),g(s,Xt,y),e(Xt,$o),e($o,Tr),v(Bn,Tr,null),e(Xt,bc),e(Xt,vr),e(vr,kc),g(s,Ji,y),g(s,ot,y),v(Hn,ot,null),e(ot,wc),e(ot,Kn),e(Kn,Lc),e(Kn,Mr),e(Mr,Tc),e(Kn,vc),e(ot,Mc),e(ot,Qn),e(Qn,$c),e(Qn,xa),e(xa,xc),e(Qn,jc),e(ot,Fc),e(ot,Ot),v(Rn,Ot,null),e(Ot,qc),e(Ot,$r),e($r,Ec),e(Ot,zc),e(Ot,Vn),e(Vn,ja),e(ja,Cc),e(ja,xr),e(xr,Pc),e(Vn,Ac),e(Vn,Fa),e(Fa,Dc),e(Fa,jr),e(jr,Nc),e(ot,Oc),e(ot,yt),v(Xn,yt,null),e(yt,Ic),e(yt,Fr),e(Fr,Sc),e(yt,Uc),v(xo,yt,null),e(yt,Wc),e(yt,Yt),e(Yt,Bc),e(Yt,qr),e(qr,Hc),e(Yt,Kc),e(Yt,Er),e(Er,Qc),e(Yt,Rc),g(s,el,y),g(s,Zt,y),e(Zt,jo),e(jo,zr),v(Yn,zr,null),e(Zt,Vc),e(Zt,Cr),e(Cr,Xc),g(s,tl,y),g(s,ht,y),v(Zn,ht,null),e(ht,Yc),e(ht,Gn),e(Gn,Zc),e(Gn,Jn),e(Jn,Gc),e(Gn,Jc),e(ht,ep),e(ht,es),e(es,tp),e(es,ts),e(ts,op),e(es,np),e(ht,sp),e(ht,bt),v(os,bt,null),e(bt,ap),e(bt,Gt),e(Gt,rp),e(Gt,qa),e(qa,ip),e(Gt,lp),e(Gt,Pr),e(Pr,dp),e(Gt,cp),e(bt,pp),v(Fo,bt,null),e(bt,up),v(qo,bt,null),g(s,ol,y),g(s,Jt,y),e(Jt,Eo),e(Eo,Ar),v(ns,Ar,null),e(Jt,hp),e(Jt,Dr),e(Dr,mp),g(s,nl,y),g(s,mt,y),v(ss,mt,null),e(mt,fp),e(mt,eo),e(eo,gp),e(eo,Nr),e(Nr,_p),e(eo,yp),e(eo,as),e(as,bp),e(eo,kp),e(mt,wp),e(mt,rs),e(rs,Lp),e(rs,is),e(is,Tp),e(rs,vp),e(mt,Mp),e(mt,kt),v(ls,kt,null),e(kt,$p),e(kt,to),e(to,xp),e(to,Ea),e(Ea,jp),e(to,Fp),e(to,Or),e(Or,qp),e(to,Ep),e(kt,zp),v(zo,kt,null),e(kt,Cp),v(Co,kt,null),g(s,sl,y),g(s,oo,y),e(oo,Po),e(Po,Ir),v(ds,Ir,null),e(oo,Pp),e(oo,Sr),e(Sr,Ap),g(s,al,y),g(s,nt,y),v(cs,nt,null),e(nt,Dp),e(nt,ps),e(ps,Np),e(ps,us),e(us,Op),e(ps,Ip),e(nt,Sp),e(nt,hs),e(hs,Up),e(hs,ms),e(ms,Wp),e(hs,Bp),e(nt,Hp),e(nt,fs),e(fs,Kp),e(fs,gs),e(gs,Qp),e(fs,Rp),e(nt,Vp),e(nt,wt),v(_s,wt,null),e(wt,Xp),e(wt,no),e(no,Yp),e(no,za),e(za,Zp),e(no,Gp),e(no,Ur),e(Ur,Jp),e(no,eu),e(wt,tu),v(Ao,wt,null),e(wt,ou),v(Do,wt,null),g(s,rl,y),g(s,so,y),e(so,No),e(No,Wr),v(ys,Wr,null),e(so,nu),e(so,Br),e(Br,su),g(s,il,y),g(s,st,y),v(bs,st,null),e(st,au),e(st,ao),e(ao,ru),e(ao,ks),e(ks,iu),e(ao,lu),e(ao,ws),e(ws,du),e(ao,cu),e(st,pu),e(st,Ls),e(Ls,uu),e(Ls,Ts),e(Ts,hu),e(Ls,mu),e(st,fu),e(st,vs),e(vs,gu),e(vs,Ms),e(Ms,_u),e(vs,yu),e(st,bu),e(st,Lt),v($s,Lt,null),e(Lt,ku),e(Lt,ro),e(ro,wu),e(ro,Ca),e(Ca,Lu),e(ro,Tu),e(ro,Hr),e(Hr,vu),e(ro,Mu),e(Lt,$u),v(Oo,Lt,null),e(Lt,xu),v(Io,Lt,null),g(s,ll,y),g(s,io,y),e(io,So),e(So,Kr),v(xs,Kr,null),e(io,ju),e(io,Qr),e(Qr,Fu),g(s,dl,y),g(s,at,y),v(js,at,null),e(at,qu),e(at,Pt),e(Pt,Eu),e(Pt,Fs),e(Fs,zu),e(Pt,Cu),e(Pt,Rr),e(Rr,Pu),e(Pt,Au),e(Pt,Vr),e(Vr,Du),e(Pt,Nu),e(at,Ou),e(at,qs),e(qs,Iu),e(qs,Es),e(Es,Su),e(qs,Uu),e(at,Wu),e(at,zs),e(zs,Bu),e(zs,Cs),e(Cs,Hu),e(zs,Ku),e(at,Qu),e(at,dt),v(Ps,dt,null),e(dt,Ru),e(dt,De),e(De,Vu),e(De,Xr),e(Xr,Xu),e(De,Yu),e(De,Yr),e(Yr,Zu),e(De,Gu),e(De,Zr),e(Zr,Ju),e(De,eh),e(De,Gr),e(Gr,th),e(De,oh),e(De,Jr),e(Jr,nh),e(De,sh),e(De,ei),e(ei,ah),e(De,rh),e(De,ti),e(ti,ih),e(De,lh),e(De,oi),e(oi,dh),e(De,ch),e(dt,ph),e(dt,ni),e(ni,uh),e(dt,hh),e(dt,si),e(si,mh),e(dt,fh),v(Uo,dt,null),g(s,cl,y),g(s,lo,y),e(lo,Wo),e(Wo,ai),v(As,ai,null),e(lo,gh),e(lo,ri),e(ri,_h),g(s,pl,y),g(s,Ze,y),v(Ds,Ze,null),e(Ze,yh),e(Ze,ii),e(ii,bh),e(Ze,kh),e(Ze,Ns),e(Ns,wh),e(Ns,Pa),e(Pa,Lh),e(Ns,Th),e(Ze,vh),e(Ze,Os),e(Os,Mh),e(Os,Is),e(Is,$h),e(Os,xh),e(Ze,jh),v(Bo,Ze,null),e(Ze,Fh),e(Ze,Tt),v(Ss,Tt,null),e(Tt,qh),e(Tt,co),e(co,Eh),e(co,Aa),e(Aa,zh),e(co,Ch),e(co,li),e(li,Ph),e(co,Ah),e(Tt,Dh),v(Ho,Tt,null),e(Tt,Nh),v(Ko,Tt,null),g(s,ul,y),g(s,po,y),e(po,Qo),e(Qo,di),v(Us,di,null),e(po,Oh),e(po,ci),e(ci,Ih),g(s,hl,y),g(s,Ge,y),v(Ws,Ge,null),e(Ge,Sh),e(Ge,Bs),e(Bs,Uh),e(Bs,pi),e(pi,Wh),e(Bs,Bh),e(Ge,Hh),e(Ge,Hs),e(Hs,Kh),e(Hs,Da),e(Da,Qh),e(Hs,Rh),e(Ge,Vh),e(Ge,Ks),e(Ks,Xh),e(Ks,Qs),e(Qs,Yh),e(Ks,Zh),e(Ge,Gh),v(Ro,Ge,null),e(Ge,Jh),e(Ge,vt),v(Rs,vt,null),e(vt,em),e(vt,uo),e(uo,tm),e(uo,Na),e(Na,om),e(uo,nm),e(uo,ui),e(ui,sm),e(uo,am),e(vt,rm),v(Vo,vt,null),e(vt,im),v(Xo,vt,null),g(s,ml,y),g(s,ho,y),e(ho,Yo),e(Yo,hi),v(Vs,hi,null),e(ho,lm),e(ho,mi),e(mi,dm),g(s,fl,y),g(s,Je,y),v(Xs,Je,null),e(Je,cm),e(Je,fi),e(fi,pm),e(Je,um),e(Je,Ys),e(Ys,hm),e(Ys,Oa),e(Oa,mm),e(Ys,fm),e(Je,gm),e(Je,Zs),e(Zs,_m),e(Zs,Gs),e(Gs,ym),e(Zs,bm),e(Je,km),v(Zo,Je,null),e(Je,wm),e(Je,Mt),v(Js,Mt,null),e(Mt,Lm),e(Mt,mo),e(mo,Tm),e(mo,Ia),e(Ia,vm),e(mo,Mm),e(mo,gi),e(gi,$m),e(mo,xm),e(Mt,jm),v(Go,Mt,null),e(Mt,Fm),v(Jo,Mt,null),g(s,gl,y),g(s,fo,y),e(fo,en),e(en,_i),v(ea,_i,null),e(fo,qm),e(fo,yi),e(yi,Em),g(s,_l,y),g(s,et,y),v(ta,et,null),e(et,zm),e(et,bi),e(bi,Cm),e(et,Pm),e(et,oa),e(oa,Am),e(oa,Sa),e(Sa,Dm),e(oa,Nm),e(et,Om),e(et,na),e(na,Im),e(na,sa),e(sa,Sm),e(na,Um),e(et,Wm),v(tn,et,null),e(et,Bm),e(et,$t),v(aa,$t,null),e($t,Hm),e($t,go),e(go,Km),e(go,Ua),e(Ua,Qm),e(go,Rm),e(go,ki),e(ki,Vm),e(go,Xm),e($t,Ym),v(on,$t,null),e($t,Zm),v(nn,$t,null),g(s,yl,y),g(s,_o,y),e(_o,sn),e(sn,wi),v(ra,wi,null),e(_o,Gm),e(_o,Li),e(Li,Jm),g(s,bl,y),g(s,tt,y),v(ia,tt,null),e(tt,ef),e(tt,At),e(At,tf),e(At,la),e(la,of),e(At,nf),e(At,Ti),e(Ti,sf),e(At,af),e(At,vi),e(vi,rf),e(At,lf),e(tt,df),e(tt,da),e(da,cf),e(da,Wa),e(Wa,pf),e(da,uf),e(tt,hf),e(tt,ca),e(ca,mf),e(ca,pa),e(pa,ff),e(ca,gf),e(tt,_f),v(an,tt,null),e(tt,yf),e(tt,xt),v(ua,xt,null),e(xt,bf),e(xt,yo),e(yo,kf),e(yo,Ba),e(Ba,wf),e(yo,Lf),e(yo,Mi),e(Mi,Tf),e(yo,vf),e(xt,Mf),v(rn,xt,null),e(xt,$f),v(ln,xt,null),kl=!0},p(s,[y]){const ha={};y&2&&(ha.$$scope={dirty:y,ctx:s}),wo.$set(ha);const $i={};y&2&&($i.$$scope={dirty:y,ctx:s}),vo.$set($i);const xi={};y&2&&(xi.$$scope={dirty:y,ctx:s}),xo.$set(xi);const ji={};y&2&&(ji.$$scope={dirty:y,ctx:s}),Fo.$set(ji);const ma={};y&2&&(ma.$$scope={dirty:y,ctx:s}),qo.$set(ma);const Fi={};y&2&&(Fi.$$scope={dirty:y,ctx:s}),zo.$set(Fi);const qi={};y&2&&(qi.$$scope={dirty:y,ctx:s}),Co.$set(qi);const Ei={};y&2&&(Ei.$$scope={dirty:y,ctx:s}),Ao.$set(Ei);const fa={};y&2&&(fa.$$scope={dirty:y,ctx:s}),Do.$set(fa);const zi={};y&2&&(zi.$$scope={dirty:y,ctx:s}),Oo.$set(zi);const bo={};y&2&&(bo.$$scope={dirty:y,ctx:s}),Io.$set(bo);const ga={};y&2&&(ga.$$scope={dirty:y,ctx:s}),Uo.$set(ga);const Ci={};y&2&&(Ci.$$scope={dirty:y,ctx:s}),Bo.$set(Ci);const _a={};y&2&&(_a.$$scope={dirty:y,ctx:s}),Ho.$set(_a);const Pi={};y&2&&(Pi.$$scope={dirty:y,ctx:s}),Ko.$set(Pi);const ya={};y&2&&(ya.$$scope={dirty:y,ctx:s}),Ro.$set(ya);const Ai={};y&2&&(Ai.$$scope={dirty:y,ctx:s}),Vo.$set(Ai);const Di={};y&2&&(Di.$$scope={dirty:y,ctx:s}),Xo.$set(Di);const Ni={};y&2&&(Ni.$$scope={dirty:y,ctx:s}),Zo.$set(Ni);const Oi={};y&2&&(Oi.$$scope={dirty:y,ctx:s}),Go.$set(Oi);const Ii={};y&2&&(Ii.$$scope={dirty:y,ctx:s}),Jo.$set(Ii);const Si={};y&2&&(Si.$$scope={dirty:y,ctx:s}),tn.$set(Si);const rt={};y&2&&(rt.$$scope={dirty:y,ctx:s}),on.$set(rt);const Ui={};y&2&&(Ui.$$scope={dirty:y,ctx:s}),nn.$set(Ui);const Wi={};y&2&&(Wi.$$scope={dirty:y,ctx:s}),an.$set(Wi);const Bi={};y&2&&(Bi.$$scope={dirty:y,ctx:s}),rn.$set(Bi);const Hi={};y&2&&(Hi.$$scope={dirty:y,ctx:s}),ln.$set(Hi)},i(s){kl||(M(l.$$.fragment,s),M(I.$$.fragment,s),M(U.$$.fragment,s),M($n.$$.fragment,s),M(En.$$.fragment,s),M(zn.$$.fragment,s),M(wo.$$.fragment,s),M(Pn.$$.fragment,s),M(An.$$.fragment,s),M(Nn.$$.fragment,s),M(In.$$.fragment,s),M(Sn.$$.fragment,s),M(vo.$$.fragment,s),M(Un.$$.fragment,s),M(Bn.$$.fragment,s),M(Hn.$$.fragment,s),M(Rn.$$.fragment,s),M(Xn.$$.fragment,s),M(xo.$$.fragment,s),M(Yn.$$.fragment,s),M(Zn.$$.fragment,s),M(os.$$.fragment,s),M(Fo.$$.fragment,s),M(qo.$$.fragment,s),M(ns.$$.fragment,s),M(ss.$$.fragment,s),M(ls.$$.fragment,s),M(zo.$$.fragment,s),M(Co.$$.fragment,s),M(ds.$$.fragment,s),M(cs.$$.fragment,s),M(_s.$$.fragment,s),M(Ao.$$.fragment,s),M(Do.$$.fragment,s),M(ys.$$.fragment,s),M(bs.$$.fragment,s),M($s.$$.fragment,s),M(Oo.$$.fragment,s),M(Io.$$.fragment,s),M(xs.$$.fragment,s),M(js.$$.fragment,s),M(Ps.$$.fragment,s),M(Uo.$$.fragment,s),M(As.$$.fragment,s),M(Ds.$$.fragment,s),M(Bo.$$.fragment,s),M(Ss.$$.fragment,s),M(Ho.$$.fragment,s),M(Ko.$$.fragment,s),M(Us.$$.fragment,s),M(Ws.$$.fragment,s),M(Ro.$$.fragment,s),M(Rs.$$.fragment,s),M(Vo.$$.fragment,s),M(Xo.$$.fragment,s),M(Vs.$$.fragment,s),M(Xs.$$.fragment,s),M(Zo.$$.fragment,s),M(Js.$$.fragment,s),M(Go.$$.fragment,s),M(Jo.$$.fragment,s),M(ea.$$.fragment,s),M(ta.$$.fragment,s),M(tn.$$.fragment,s),M(aa.$$.fragment,s),M(on.$$.fragment,s),M(nn.$$.fragment,s),M(ra.$$.fragment,s),M(ia.$$.fragment,s),M(an.$$.fragment,s),M(ua.$$.fragment,s),M(rn.$$.fragment,s),M(ln.$$.fragment,s),kl=!0)},o(s){$(l.$$.fragment,s),$(I.$$.fragment,s),$(U.$$.fragment,s),$($n.$$.fragment,s),$(En.$$.fragment,s),$(zn.$$.fragment,s),$(wo.$$.fragment,s),$(Pn.$$.fragment,s),$(An.$$.fragment,s),$(Nn.$$.fragment,s),$(In.$$.fragment,s),$(Sn.$$.fragment,s),$(vo.$$.fragment,s),$(Un.$$.fragment,s),$(Bn.$$.fragment,s),$(Hn.$$.fragment,s),$(Rn.$$.fragment,s),$(Xn.$$.fragment,s),$(xo.$$.fragment,s),$(Yn.$$.fragment,s),$(Zn.$$.fragment,s),$(os.$$.fragment,s),$(Fo.$$.fragment,s),$(qo.$$.fragment,s),$(ns.$$.fragment,s),$(ss.$$.fragment,s),$(ls.$$.fragment,s),$(zo.$$.fragment,s),$(Co.$$.fragment,s),$(ds.$$.fragment,s),$(cs.$$.fragment,s),$(_s.$$.fragment,s),$(Ao.$$.fragment,s),$(Do.$$.fragment,s),$(ys.$$.fragment,s),$(bs.$$.fragment,s),$($s.$$.fragment,s),$(Oo.$$.fragment,s),$(Io.$$.fragment,s),$(xs.$$.fragment,s),$(js.$$.fragment,s),$(Ps.$$.fragment,s),$(Uo.$$.fragment,s),$(As.$$.fragment,s),$(Ds.$$.fragment,s),$(Bo.$$.fragment,s),$(Ss.$$.fragment,s),$(Ho.$$.fragment,s),$(Ko.$$.fragment,s),$(Us.$$.fragment,s),$(Ws.$$.fragment,s),$(Ro.$$.fragment,s),$(Rs.$$.fragment,s),$(Vo.$$.fragment,s),$(Xo.$$.fragment,s),$(Vs.$$.fragment,s),$(Xs.$$.fragment,s),$(Zo.$$.fragment,s),$(Js.$$.fragment,s),$(Go.$$.fragment,s),$(Jo.$$.fragment,s),$(ea.$$.fragment,s),$(ta.$$.fragment,s),$(tn.$$.fragment,s),$(aa.$$.fragment,s),$(on.$$.fragment,s),$(nn.$$.fragment,s),$(ra.$$.fragment,s),$(ia.$$.fragment,s),$(an.$$.fragment,s),$(ua.$$.fragment,s),$(rn.$$.fragment,s),$(ln.$$.fragment,s),kl=!1},d(s){t(d),s&&t(k),s&&t(m),x(l),s&&t(_e),s&&t(W),s&&t(ye),s&&t(K),x(I),s&&t(be),s&&t(se),s&&t(ke),s&&t(oe),s&&t(we),s&&t(B),s&&t(Le),s&&t(O),s&&t(Te),s&&t(ee),s&&t(ve),s&&t(D),s&&t(Oe),x(U,s),s&&t(Ie),s&&t(ge),s&&t(Ki),x($n,s),s&&t(Qi),s&&t(ba),s&&t(Ri),s&&t(Dt),s&&t(Vi),s&&t(Ht),x(En),s&&t(Xi),s&&t(ut),x(zn),x(wo),s&&t(Yi),s&&t(Rt),x(Pn),s&&t(Zi),s&&t(Se),x(An),x(Nn),x(In),x(Sn),x(vo),x(Un),s&&t(Gi),s&&t(Xt),x(Bn),s&&t(Ji),s&&t(ot),x(Hn),x(Rn),x(Xn),x(xo),s&&t(el),s&&t(Zt),x(Yn),s&&t(tl),s&&t(ht),x(Zn),x(os),x(Fo),x(qo),s&&t(ol),s&&t(Jt),x(ns),s&&t(nl),s&&t(mt),x(ss),x(ls),x(zo),x(Co),s&&t(sl),s&&t(oo),x(ds),s&&t(al),s&&t(nt),x(cs),x(_s),x(Ao),x(Do),s&&t(rl),s&&t(so),x(ys),s&&t(il),s&&t(st),x(bs),x($s),x(Oo),x(Io),s&&t(ll),s&&t(io),x(xs),s&&t(dl),s&&t(at),x(js),x(Ps),x(Uo),s&&t(cl),s&&t(lo),x(As),s&&t(pl),s&&t(Ze),x(Ds),x(Bo),x(Ss),x(Ho),x(Ko),s&&t(ul),s&&t(po),x(Us),s&&t(hl),s&&t(Ge),x(Ws),x(Ro),x(Rs),x(Vo),x(Xo),s&&t(ml),s&&t(ho),x(Vs),s&&t(fl),s&&t(Je),x(Xs),x(Zo),x(Js),x(Go),x(Jo),s&&t(gl),s&&t(fo),x(ea),s&&t(_l),s&&t(et),x(ta),x(tn),x(aa),x(on),x(nn),s&&t(yl),s&&t(_o),x(ra),s&&t(bl),s&&t(tt),x(ia),x(an),x(ua),x(rn),x(ln)}}}const Py={local:"layoutlm",sections:[{local:"overview",title:"Overview"},{local:"transformers.LayoutLMConfig",title:"LayoutLMConfig"},{local:"transformers.LayoutLMTokenizer",title:"LayoutLMTokenizer"},{local:"transformers.LayoutLMTokenizerFast",title:"LayoutLMTokenizerFast"},{local:"transformers.LayoutLMModel",title:"LayoutLMModel"},{local:"transformers.LayoutLMForMaskedLM",title:"LayoutLMForMaskedLM"},{local:"transformers.LayoutLMForSequenceClassification",title:"LayoutLMForSequenceClassification"},{local:"transformers.LayoutLMForTokenClassification",title:"LayoutLMForTokenClassification"},{local:"transformers.LayoutLMForQuestionAnswering",title:"LayoutLMForQuestionAnswering"},{local:"transformers.TFLayoutLMModel",title:"TFLayoutLMModel"},{local:"transformers.TFLayoutLMForMaskedLM",title:"TFLayoutLMForMaskedLM"},{local:"transformers.TFLayoutLMForSequenceClassification",title:"TFLayoutLMForSequenceClassification"},{local:"transformers.TFLayoutLMForTokenClassification",title:"TFLayoutLMForTokenClassification"},{local:"transformers.TFLayoutLMForQuestionAnswering",title:"TFLayoutLMForQuestionAnswering"}],title:"LayoutLM"};function Ay(z){return ay(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Wy extends ty{constructor(d){super();oy(this,d,Ay,Cy,ny,{})}}export{Wy as default,Py as metadata};
