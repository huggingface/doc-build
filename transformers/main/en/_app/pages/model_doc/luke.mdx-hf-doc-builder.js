import{S as bf,i as Tf,s as wf,e as a,k as h,w as b,t as o,M as vf,c as r,d as t,m as u,a as i,x as T,h as s,b as p,G as e,g as k,y as w,q as v,o as L,B as $,v as Lf,L as G}from"../../chunks/vendor-hf-doc-builder.js";import{T as Je}from"../../chunks/Tip-hf-doc-builder.js";import{D as x}from"../../chunks/Docstring-hf-doc-builder.js";import{C as K}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Z}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Y}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function $f(z){let d,_,c,f,y;return f=new K({props:{code:`from transformers import LukeConfig, LukeModel

# Initializing a LUKE configuration
configuration = LukeConfig()

# Initializing a model from the configuration
model = LukeModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LukeConfig, LukeModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a LUKE configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = LukeConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LukeModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),_=o("Examples:"),c=h(),b(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);_=s(m,"Examples:"),m.forEach(t),c=u(l),T(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,c,m),w(f,l,m),y=!0},p:G,i(l){y||(v(f.$$.fragment,l),y=!0)},o(l){L(f.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),$(f,l)}}}function zf(z){let d,_,c,f,y;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),y=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,c),e(c,f),e(d,y)},d(l){l&&t(d)}}}function Ef(z){let d,_,c,f,y;return f=new K({props:{code:`from transformers import LukeTokenizer, LukeModel

tokenizer = LukeTokenizer.from_pretrained("studio-ousia/luke-base")
model = LukeModel.from_pretrained("studio-ousia/luke-base")

text = "Beyonc\xE9 lives in Los Angeles."
entity_spans = [(0, 7)]  # character-based entity span corresponding to "Beyonc\xE9"

encoding = tokenizer(text, entity_spans=entity_spans, add_prefix_space=True, return_tensors="pt")
outputs = model(**encoding)
word_last_hidden_state = outputs.last_hidden_state
entity_last_hidden_state = outputs.entity_last_hidden_state

text = "Beyonc\xE9 lives in Los Angeles."
entities = [
    "Beyonc\xE9",
    "Los Angeles",
]  # Wikipedia entity titles corresponding to the entity mentions "Beyonc\xE9" and "Los Angeles"
entity_spans = [
    (0, 7),
    (17, 28),
]  # character-based entity spans corresponding to "Beyonc\xE9" and "Los Angeles"

encoding = tokenizer(
    text, entities=entities, entity_spans=entity_spans, add_prefix_space=True, return_tensors="pt"
)
outputs = model(**encoding)
word_last_hidden_state = outputs.last_hidden_state
entity_last_hidden_state = outputs.entity_last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LukeTokenizer, LukeModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LukeTokenizer.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LukeModel.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-base&quot;</span>)
<span class="hljs-comment"># Compute the contextualized entity representation corresponding to the entity mention &quot;Beyonc\xE9&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;Beyonc\xE9 lives in Los Angeles.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>entity_spans = [(<span class="hljs-number">0</span>, <span class="hljs-number">7</span>)]  <span class="hljs-comment"># character-based entity span corresponding to &quot;Beyonc\xE9&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(text, entity_spans=entity_spans, add_prefix_space=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>word_last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>entity_last_hidden_state = outputs.entity_last_hidden_state
<span class="hljs-comment"># Input Wikipedia entities to obtain enriched contextualized representations of word tokens</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;Beyonc\xE9 lives in Los Angeles.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>entities = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Beyonc\xE9&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Los Angeles&quot;</span>,
<span class="hljs-meta">... </span>]  <span class="hljs-comment"># Wikipedia entity titles corresponding to the entity mentions &quot;Beyonc\xE9&quot; and &quot;Los Angeles&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>entity_spans = [
<span class="hljs-meta">... </span>    (<span class="hljs-number">0</span>, <span class="hljs-number">7</span>),
<span class="hljs-meta">... </span>    (<span class="hljs-number">17</span>, <span class="hljs-number">28</span>),
<span class="hljs-meta">... </span>]  <span class="hljs-comment"># character-based entity spans corresponding to &quot;Beyonc\xE9&quot; and &quot;Los Angeles&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(
<span class="hljs-meta">... </span>    text, entities=entities, entity_spans=entity_spans, add_prefix_space=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>word_last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>entity_last_hidden_state = outputs.entity_last_hidden_state`}}),{c(){d=a("p"),_=o("Examples:"),c=h(),b(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);_=s(m,"Examples:"),m.forEach(t),c=u(l),T(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,c,m),w(f,l,m),y=!0},p:G,i(l){y||(v(f.$$.fragment,l),y=!0)},o(l){L(f.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),$(f,l)}}}function xf(z){let d,_,c,f,y;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),y=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,c),e(c,f),e(d,y)},d(l){l&&t(d)}}}function Ff(z){let d,_,c,f,y;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),y=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,c),e(c,f),e(d,y)},d(l){l&&t(d)}}}function qf(z){let d,_,c,f,y;return f=new K({props:{code:`from transformers import LukeTokenizer, LukeForEntityClassification

tokenizer = LukeTokenizer.from_pretrained("studio-ousia/luke-large-finetuned-open-entity")
model = LukeForEntityClassification.from_pretrained("studio-ousia/luke-large-finetuned-open-entity")

text = "Beyonc\xE9 lives in Los Angeles."
entity_spans = [(0, 7)]  # character-based entity span corresponding to "Beyonc\xE9"
inputs = tokenizer(text, entity_spans=entity_spans, return_tensors="pt")
outputs = model(**inputs)
logits = outputs.logits
predicted_class_idx = logits.argmax(-1).item()
print("Predicted class:", model.config.id2label[predicted_class_idx])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LukeTokenizer, LukeForEntityClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LukeTokenizer.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-large-finetuned-open-entity&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LukeForEntityClassification.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-large-finetuned-open-entity&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;Beyonc\xE9 lives in Los Angeles.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>entity_spans = [(<span class="hljs-number">0</span>, <span class="hljs-number">7</span>)]  <span class="hljs-comment"># character-based entity span corresponding to &quot;Beyonc\xE9&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, entity_spans=entity_spans, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_idx = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx])
Predicted <span class="hljs-keyword">class</span>: person`}}),{c(){d=a("p"),_=o("Examples:"),c=h(),b(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);_=s(m,"Examples:"),m.forEach(t),c=u(l),T(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,c,m),w(f,l,m),y=!0},p:G,i(l){y||(v(f.$$.fragment,l),y=!0)},o(l){L(f.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),$(f,l)}}}function Cf(z){let d,_,c,f,y;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),y=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,c),e(c,f),e(d,y)},d(l){l&&t(d)}}}function jf(z){let d,_,c,f,y;return f=new K({props:{code:`from transformers import LukeTokenizer, LukeForEntityPairClassification

tokenizer = LukeTokenizer.from_pretrained("studio-ousia/luke-large-finetuned-tacred")
model = LukeForEntityPairClassification.from_pretrained("studio-ousia/luke-large-finetuned-tacred")

text = "Beyonc\xE9 lives in Los Angeles."
entity_spans = [
    (0, 7),
    (17, 28),
]  # character-based entity spans corresponding to "Beyonc\xE9" and "Los Angeles"
inputs = tokenizer(text, entity_spans=entity_spans, return_tensors="pt")
outputs = model(**inputs)
logits = outputs.logits
predicted_class_idx = logits.argmax(-1).item()
print("Predicted class:", model.config.id2label[predicted_class_idx])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LukeTokenizer, LukeForEntityPairClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LukeTokenizer.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-large-finetuned-tacred&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LukeForEntityPairClassification.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-large-finetuned-tacred&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;Beyonc\xE9 lives in Los Angeles.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>entity_spans = [
<span class="hljs-meta">... </span>    (<span class="hljs-number">0</span>, <span class="hljs-number">7</span>),
<span class="hljs-meta">... </span>    (<span class="hljs-number">17</span>, <span class="hljs-number">28</span>),
<span class="hljs-meta">... </span>]  <span class="hljs-comment"># character-based entity spans corresponding to &quot;Beyonc\xE9&quot; and &quot;Los Angeles&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, entity_spans=entity_spans, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_idx = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx])
Predicted <span class="hljs-keyword">class</span>: per:cities_of_residence`}}),{c(){d=a("p"),_=o("Examples:"),c=h(),b(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);_=s(m,"Examples:"),m.forEach(t),c=u(l),T(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,c,m),w(f,l,m),y=!0},p:G,i(l){y||(v(f.$$.fragment,l),y=!0)},o(l){L(f.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),$(f,l)}}}function Mf(z){let d,_,c,f,y;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),y=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,c),e(c,f),e(d,y)},d(l){l&&t(d)}}}function Pf(z){let d,_,c,f,y;return f=new K({props:{code:`from transformers import LukeTokenizer, LukeForEntitySpanClassification

tokenizer = LukeTokenizer.from_pretrained("studio-ousia/luke-large-finetuned-conll-2003")
model = LukeForEntitySpanClassification.from_pretrained("studio-ousia/luke-large-finetuned-conll-2003")

text = "Beyonc\xE9 lives in Los Angeles"

word_start_positions = [0, 8, 14, 17, 21]  # character-based start positions of word tokens
word_end_positions = [7, 13, 16, 20, 28]  # character-based end positions of word tokens
entity_spans = []
for i, start_pos in enumerate(word_start_positions):
    for end_pos in word_end_positions[i:]:
        entity_spans.append((start_pos, end_pos))

inputs = tokenizer(text, entity_spans=entity_spans, return_tensors="pt")
outputs = model(**inputs)
logits = outputs.logits
predicted_class_indices = logits.argmax(-1).squeeze().tolist()
for span, predicted_class_idx in zip(entity_spans, predicted_class_indices):
    if predicted_class_idx != 0:
        print(text[span[0] : span[1]], model.config.id2label[predicted_class_idx])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LukeTokenizer, LukeForEntitySpanClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LukeTokenizer.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-large-finetuned-conll-2003&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LukeForEntitySpanClassification.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-large-finetuned-conll-2003&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;Beyonc\xE9 lives in Los Angeles&quot;</span>
<span class="hljs-comment"># List all possible entity spans in the text</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>word_start_positions = [<span class="hljs-number">0</span>, <span class="hljs-number">8</span>, <span class="hljs-number">14</span>, <span class="hljs-number">17</span>, <span class="hljs-number">21</span>]  <span class="hljs-comment"># character-based start positions of word tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>word_end_positions = [<span class="hljs-number">7</span>, <span class="hljs-number">13</span>, <span class="hljs-number">16</span>, <span class="hljs-number">20</span>, <span class="hljs-number">28</span>]  <span class="hljs-comment"># character-based end positions of word tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>entity_spans = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> i, start_pos <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(word_start_positions):
<span class="hljs-meta">... </span>    <span class="hljs-keyword">for</span> end_pos <span class="hljs-keyword">in</span> word_end_positions[i:]:
<span class="hljs-meta">... </span>        entity_spans.append((start_pos, end_pos))

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, entity_spans=entity_spans, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_indices = logits.argmax(-<span class="hljs-number">1</span>).squeeze().tolist()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> span, predicted_class_idx <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(entity_spans, predicted_class_indices):
<span class="hljs-meta">... </span>    <span class="hljs-keyword">if</span> predicted_class_idx != <span class="hljs-number">0</span>:
<span class="hljs-meta">... </span>        <span class="hljs-built_in">print</span>(text[span[<span class="hljs-number">0</span>] : span[<span class="hljs-number">1</span>]], model.config.id2label[predicted_class_idx])
Beyonc\xE9 PER
Los Angeles LOC`}}),{c(){d=a("p"),_=o("Examples:"),c=h(),b(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);_=s(m,"Examples:"),m.forEach(t),c=u(l),T(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,c,m),w(f,l,m),y=!0},p:G,i(l){y||(v(f.$$.fragment,l),y=!0)},o(l){L(f.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),$(f,l)}}}function Af(z){let d,_,c,f,y;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),y=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,c),e(c,f),e(d,y)},d(l){l&&t(d)}}}function Sf(z){let d,_,c,f,y;return f=new K({props:{code:`import torch
from transformers import LukeTokenizer, LukeForSequenceClassification

tokenizer = LukeTokenizer.from_pretrained("studio-ousia/luke-base")
model = LukeForSequenceClassification.from_pretrained("studio-ousia/luke-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LukeTokenizer, LukeForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LukeTokenizer.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LukeForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),_=o("Example of single-label classification:"),c=h(),b(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);_=s(m,"Example of single-label classification:"),m.forEach(t),c=u(l),T(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,c,m),w(f,l,m),y=!0},p:G,i(l){y||(v(f.$$.fragment,l),y=!0)},o(l){L(f.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),$(f,l)}}}function Of(z){let d,_;return d=new K({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = LukeForSequenceClassification.from_pretrained("studio-ousia/luke-base", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LukeForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),_=!0},p:G,i(c){_||(v(d.$$.fragment,c),_=!0)},o(c){L(d.$$.fragment,c),_=!1},d(c){$(d,c)}}}function If(z){let d,_,c,f,y;return f=new K({props:{code:`import torch
from transformers import LukeTokenizer, LukeForSequenceClassification

tokenizer = LukeTokenizer.from_pretrained("studio-ousia/luke-base")
model = LukeForSequenceClassification.from_pretrained("studio-ousia/luke-base", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LukeTokenizer, LukeForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LukeTokenizer.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LukeForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),_=o("Example of multi-label classification:"),c=h(),b(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);_=s(m,"Example of multi-label classification:"),m.forEach(t),c=u(l),T(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,c,m),w(f,l,m),y=!0},p:G,i(l){y||(v(f.$$.fragment,l),y=!0)},o(l){L(f.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),$(f,l)}}}function Nf(z){let d,_;return d=new K({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = LukeForSequenceClassification.from_pretrained(
    "studio-ousia/luke-base", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LukeForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;studio-ousia/luke-base&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){b(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),_=!0},p:G,i(c){_||(v(d.$$.fragment,c),_=!0)},o(c){L(d.$$.fragment,c),_=!1},d(c){$(d,c)}}}function Df(z){let d,_,c,f,y;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),y=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,c),e(c,f),e(d,y)},d(l){l&&t(d)}}}function Wf(z){let d,_,c,f,y;return f=new K({props:{code:`from transformers import LukeTokenizer, LukeForMultipleChoice
import torch

tokenizer = LukeTokenizer.from_pretrained("studio-ousia/luke-base")
model = LukeForMultipleChoice.from_pretrained("studio-ousia/luke-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LukeTokenizer, LukeForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LukeTokenizer.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LukeForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=o("Example:"),c=h(),b(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),c=u(l),T(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,c,m),w(f,l,m),y=!0},p:G,i(l){y||(v(f.$$.fragment,l),y=!0)},o(l){L(f.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),$(f,l)}}}function Uf(z){let d,_,c,f,y;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),y=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,c),e(c,f),e(d,y)},d(l){l&&t(d)}}}function Bf(z){let d,_,c,f,y;return f=new K({props:{code:`from transformers import LukeTokenizer, LukeForTokenClassification
import torch

tokenizer = LukeTokenizer.from_pretrained("studio-ousia/luke-base")
model = LukeForTokenClassification.from_pretrained("studio-ousia/luke-base")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LukeTokenizer, LukeForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LukeTokenizer.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LukeForTokenClassification.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-base&quot;</span>)

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
`}}),{c(){d=a("p"),_=o("Example:"),c=h(),b(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),c=u(l),T(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,c,m),w(f,l,m),y=!0},p:G,i(l){y||(v(f.$$.fragment,l),y=!0)},o(l){L(f.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),$(f,l)}}}function Kf(z){let d,_;return d=new K({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),_=!0},p:G,i(c){_||(v(d.$$.fragment,c),_=!0)},o(c){L(d.$$.fragment,c),_=!1},d(c){$(d,c)}}}function Rf(z){let d,_,c,f,y;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),y=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,c),e(c,f),e(d,y)},d(l){l&&t(d)}}}function Qf(z){let d,_,c,f,y;return f=new K({props:{code:`from transformers import LukeTokenizer, LukeForQuestionAnswering
import torch

tokenizer = LukeTokenizer.from_pretrained("studio-ousia/luke-base")
model = LukeForQuestionAnswering.from_pretrained("studio-ousia/luke-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LukeTokenizer, LukeForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LukeTokenizer.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LukeForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=a("p"),_=o("Example:"),c=h(),b(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),c=u(l),T(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,c,m),w(f,l,m),y=!0},p:G,i(l){y||(v(f.$$.fragment,l),y=!0)},o(l){L(f.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),$(f,l)}}}function Hf(z){let d,_;return d=new K({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([14])
target_end_index = torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),_=!0},p:G,i(c){_||(v(d.$$.fragment,c),_=!0)},o(c){L(d.$$.fragment,c),_=!1},d(c){$(d,c)}}}function Vf(z){let d,_,c,f,y,l,m,E,li,Ga,Le,Xe,ys,Kt,di,bs,ci,Ja,Ze,pi,Rt,hi,ui,Xa,ko,mi,Za,yo,Ts,fi,er,bo,gi,tr,ee,ws,Qt,_i,To,ki,yi,bi,vs,j,Ti,Ls,wi,vi,$s,Li,$i,zs,zi,Ei,Es,xi,Fi,wo,qi,Ci,ji,Ht,te,vo,Mi,Pi,xs,Ai,Si,Fs,Oi,Ii,qs,Ni,Di,Wi,Vt,Lo,Cs,Ui,Bi,Ki,$o,js,Ri,Qi,Hi,J,Ms,Vi,Yi,$e,et,zo,Gi,Ji,Yt,Xi,Zi,el,tt,Eo,tl,nl,Gt,ol,sl,al,xo,Fo,rl,il,ll,R,qo,dl,cl,Ps,pl,hl,As,ul,ml,Ss,fl,gl,Os,_l,kl,yl,ze,bl,Co,Tl,wl,Jt,vl,Ll,$l,Xt,zl,Zt,El,xl,nr,jo,Fl,or,en,sr,ne,ql,tn,Cl,jl,nn,Ml,Pl,on,Al,Sl,ar,Ee,nt,Is,sn,Ol,Ns,Il,rr,X,an,Nl,xe,Dl,Mo,Wl,Ul,rn,Bl,Kl,Rl,Fe,Ql,Po,Hl,Vl,Ao,Yl,Gl,Jl,ot,ir,qe,st,Ds,ln,Xl,Ws,Zl,lr,M,dn,ed,Us,td,nd,F,od,So,sd,ad,Oo,rd,id,Io,ld,dd,Bs,cd,pd,Ks,hd,ud,Rs,md,fd,Qs,gd,_d,kd,at,cn,yd,Hs,bd,Td,No,pn,dr,Ce,rt,Vs,hn,wd,Ys,vd,cr,P,un,Ld,Gs,$d,zd,mn,Ed,Do,xd,Fd,qd,fn,Cd,gn,jd,Md,Pd,oe,_n,Ad,je,Sd,Wo,Od,Id,Js,Nd,Dd,Wd,it,Ud,lt,pr,Me,dt,Xs,kn,Bd,Zs,Kd,hr,A,yn,Rd,ea,Qd,Hd,bn,Vd,Uo,Yd,Gd,Jd,Tn,Xd,wn,Zd,ec,tc,ce,vn,nc,Pe,oc,Bo,sc,ac,ta,rc,ic,lc,ct,ur,Ae,pt,na,Ln,dc,oa,cc,mr,S,$n,pc,sa,hc,uc,zn,mc,Ko,fc,gc,_c,En,kc,xn,yc,bc,Tc,se,Fn,wc,Se,vc,Ro,Lc,$c,aa,zc,Ec,xc,ht,Fc,ut,fr,Oe,mt,ra,qn,qc,ia,Cc,gr,O,Cn,jc,la,Mc,Pc,jn,Ac,Qo,Sc,Oc,Ic,Mn,Nc,Pn,Dc,Wc,Uc,ae,An,Bc,Ie,Kc,Ho,Rc,Qc,da,Hc,Vc,Yc,ft,Gc,gt,_r,Ne,_t,ca,Sn,Jc,pa,Xc,kr,I,On,Zc,ha,ep,tp,In,np,Vo,op,sp,ap,Nn,rp,Dn,ip,lp,dp,re,Wn,cp,De,pp,Yo,hp,up,ua,mp,fp,gp,kt,_p,yt,yr,We,bt,ma,Un,kp,fa,yp,br,N,Bn,bp,ga,Tp,wp,Kn,vp,Go,Lp,$p,zp,Rn,Ep,Qn,xp,Fp,qp,q,Hn,Cp,Ue,jp,Jo,Mp,Pp,_a,Ap,Sp,Op,Tt,Ip,wt,Np,vt,Dp,Lt,Wp,$t,Tr,Be,zt,ka,Vn,Up,ya,Bp,wr,D,Yn,Kp,ba,Rp,Qp,Gn,Hp,Xo,Vp,Yp,Gp,Jn,Jp,Xn,Xp,Zp,eh,ie,Zn,th,Ke,nh,Zo,oh,sh,Ta,ah,rh,ih,Et,lh,xt,vr,Re,Ft,wa,eo,dh,va,ch,Lr,W,to,ph,no,hh,La,uh,mh,fh,oo,gh,es,_h,kh,yh,so,bh,ao,Th,wh,vh,Q,ro,Lh,Qe,$h,ts,zh,Eh,$a,xh,Fh,qh,qt,Ch,Ct,jh,jt,$r,He,Mt,za,io,Mh,Ea,Ph,zr,U,lo,Ah,Ve,Sh,xa,Oh,Ih,Fa,Nh,Dh,Wh,co,Uh,ns,Bh,Kh,Rh,po,Qh,ho,Hh,Vh,Yh,H,uo,Gh,Ye,Jh,os,Xh,Zh,qa,eu,tu,nu,Pt,ou,At,su,St,Er;return l=new Z({}),Kt=new Z({}),en=new K({props:{code:`from transformers import LukeTokenizer, LukeModel, LukeForEntityPairClassification

model = LukeModel.from_pretrained("studio-ousia/luke-base")
tokenizer = LukeTokenizer.from_pretrained("studio-ousia/luke-base")

text = "Beyonc\xE9 lives in Los Angeles."
entity_spans = [(0, 7)]  # character-based entity span corresponding to "Beyonc\xE9"
inputs = tokenizer(text, entity_spans=entity_spans, add_prefix_space=True, return_tensors="pt")
outputs = model(**inputs)
word_last_hidden_state = outputs.last_hidden_state
entity_last_hidden_state = outputs.entity_last_hidden_state

entities = [
    "Beyonc\xE9",
    "Los Angeles",
]  # Wikipedia entity titles corresponding to the entity mentions "Beyonc\xE9" and "Los Angeles"
entity_spans = [(0, 7), (17, 28)]  # character-based entity spans corresponding to "Beyonc\xE9" and "Los Angeles"
inputs = tokenizer(text, entities=entities, entity_spans=entity_spans, add_prefix_space=True, return_tensors="pt")
outputs = model(**inputs)
word_last_hidden_state = outputs.last_hidden_state
entity_last_hidden_state = outputs.entity_last_hidden_state

model = LukeForEntityPairClassification.from_pretrained("studio-ousia/luke-large-finetuned-tacred")
tokenizer = LukeTokenizer.from_pretrained("studio-ousia/luke-large-finetuned-tacred")
entity_spans = [(0, 7), (17, 28)]  # character-based entity spans corresponding to "Beyonc\xE9" and "Los Angeles"
inputs = tokenizer(text, entity_spans=entity_spans, return_tensors="pt")
outputs = model(**inputs)
logits = outputs.logits
predicted_class_idx = int(logits[0].argmax())
print("Predicted class:", model.config.id2label[predicted_class_idx])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LukeTokenizer, LukeModel, LukeForEntityPairClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>model = LukeModel.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LukeTokenizer.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-base&quot;</span>)
<span class="hljs-comment"># Example 1: Computing the contextualized entity representation corresponding to the entity mention &quot;Beyonc\xE9&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;Beyonc\xE9 lives in Los Angeles.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>entity_spans = [(<span class="hljs-number">0</span>, <span class="hljs-number">7</span>)]  <span class="hljs-comment"># character-based entity span corresponding to &quot;Beyonc\xE9&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, entity_spans=entity_spans, add_prefix_space=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>word_last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>entity_last_hidden_state = outputs.entity_last_hidden_state
<span class="hljs-comment"># Example 2: Inputting Wikipedia entities to obtain enriched contextualized representations</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>entities = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Beyonc\xE9&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Los Angeles&quot;</span>,
<span class="hljs-meta">... </span>]  <span class="hljs-comment"># Wikipedia entity titles corresponding to the entity mentions &quot;Beyonc\xE9&quot; and &quot;Los Angeles&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>entity_spans = [(<span class="hljs-number">0</span>, <span class="hljs-number">7</span>), (<span class="hljs-number">17</span>, <span class="hljs-number">28</span>)]  <span class="hljs-comment"># character-based entity spans corresponding to &quot;Beyonc\xE9&quot; and &quot;Los Angeles&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, entities=entities, entity_spans=entity_spans, add_prefix_space=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>word_last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>entity_last_hidden_state = outputs.entity_last_hidden_state
<span class="hljs-comment"># Example 3: Classifying the relationship between two entities using LukeForEntityPairClassification head model</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = LukeForEntityPairClassification.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-large-finetuned-tacred&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LukeTokenizer.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-large-finetuned-tacred&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>entity_spans = [(<span class="hljs-number">0</span>, <span class="hljs-number">7</span>), (<span class="hljs-number">17</span>, <span class="hljs-number">28</span>)]  <span class="hljs-comment"># character-based entity spans corresponding to &quot;Beyonc\xE9&quot; and &quot;Los Angeles&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, entity_spans=entity_spans, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_idx = <span class="hljs-built_in">int</span>(logits[<span class="hljs-number">0</span>].argmax())
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx])`}}),sn=new Z({}),an=new x({props:{name:"class transformers.LukeConfig",anchor:"transformers.LukeConfig",parameters:[{name:"vocab_size",val:" = 50267"},{name:"entity_vocab_size",val:" = 500000"},{name:"hidden_size",val:" = 768"},{name:"entity_emb_size",val:" = 256"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"use_entity_aware_attention",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LukeConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the LUKE model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeModel">LukeModel</a>.`,name:"vocab_size"},{anchor:"transformers.LukeConfig.entity_vocab_size",description:`<strong>entity_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 500000) &#x2014;
Entity vocabulary size of the LUKE model. Defines the number of different entities that can be represented
by the <code>entity_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeModel">LukeModel</a>.`,name:"entity_vocab_size"},{anchor:"transformers.LukeConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.LukeConfig.entity_emb_size",description:`<strong>entity_emb_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
The number of dimensions of the entity embedding.`,name:"entity_emb_size"},{anchor:"transformers.LukeConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.LukeConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.LukeConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.LukeConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.LukeConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.LukeConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.LukeConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.LukeConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeModel">LukeModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.LukeConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.LukeConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.LukeConfig.use_entity_aware_attention",description:`<strong>use_entity_aware_attention</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
Whether or not the model should use the entity-aware self-attention mechanism proposed in <a href="https://arxiv.org/abs/2010.01057" rel="nofollow">LUKE: Deep
Contextualized Entity Representations with Entity-aware Self-attention (Yamada et
al.)</a>.`,name:"use_entity_aware_attention"},{anchor:"transformers.LukeConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/luke/configuration_luke.py#L29"}}),ot=new Y({props:{anchor:"transformers.LukeConfig.example",$$slots:{default:[$f]},$$scope:{ctx:z}}}),ln=new Z({}),dn=new x({props:{name:"class transformers.LukeTokenizer",anchor:"transformers.LukeTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"entity_vocab_file",val:""},{name:"task",val:" = None"},{name:"max_entity_length",val:" = 32"},{name:"max_mention_length",val:" = 30"},{name:"entity_token_1",val:" = '<ent>'"},{name:"entity_token_2",val:" = '<ent2>'"},{name:"entity_unk_token",val:" = '[UNK]'"},{name:"entity_pad_token",val:" = '[PAD]'"},{name:"entity_mask_token",val:" = '[MASK]'"},{name:"entity_mask2_token",val:" = '[MASK2]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LukeTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.LukeTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.LukeTokenizer.entity_vocab_file",description:`<strong>entity_vocab_file</strong> (<code>str</code>) &#x2014;
Path to the entity vocabulary file.`,name:"entity_vocab_file"},{anchor:"transformers.LukeTokenizer.task",description:`<strong>task</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Task for which you want to prepare sequences. One of <code>&quot;entity_classification&quot;</code>,
<code>&quot;entity_pair_classification&quot;</code>, or <code>&quot;entity_span_classification&quot;</code>. If you specify this argument, the entity
sequence is automatically created based on the given entity span(s).`,name:"task"},{anchor:"transformers.LukeTokenizer.max_entity_length",description:`<strong>max_entity_length</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The maximum length of <code>entity_ids</code>.`,name:"max_entity_length"},{anchor:"transformers.LukeTokenizer.max_mention_length",description:`<strong>max_mention_length</strong> (<code>int</code>, <em>optional</em>, defaults to 30) &#x2014;
The maximum number of tokens inside an entity span.`,name:"max_mention_length"},{anchor:"transformers.LukeTokenizer.entity_token_1",description:`<strong>entity_token_1</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;ent&gt;</code>) &#x2014;
The special token used to represent an entity span in a word token sequence. This token is only used when
<code>task</code> is set to <code>&quot;entity_classification&quot;</code> or <code>&quot;entity_pair_classification&quot;</code>.`,name:"entity_token_1"},{anchor:"transformers.LukeTokenizer.entity_token_2",description:`<strong>entity_token_2</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;ent2&gt;</code>) &#x2014;
The special token used to represent an entity span in a word token sequence. This token is only used when
<code>task</code> is set to <code>&quot;entity_pair_classification&quot;</code>.`,name:"entity_token_2"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/luke/tokenization_luke.py#L152"}}),cn=new x({props:{name:"__call__",anchor:"transformers.LukeTokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str]]"},{name:"text_pair",val:": typing.Union[str, typing.List[str], NoneType] = None"},{name:"entity_spans",val:": typing.Union[typing.List[typing.Tuple[int, int]], typing.List[typing.List[typing.Tuple[int, int]]], NoneType] = None"},{name:"entity_spans_pair",val:": typing.Union[typing.List[typing.Tuple[int, int]], typing.List[typing.List[typing.Tuple[int, int]]], NoneType] = None"},{name:"entities",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"entities_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"max_entity_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": typing.Optional[bool] = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LukeTokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence must be a string. Note that this
tokenizer does not support tokenization based on pretokenized strings.`,name:"text"},{anchor:"transformers.LukeTokenizer.__call__.text_pair",description:`<strong>text_pair</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence must be a string. Note that this
tokenizer does not support tokenization based on pretokenized strings.`,name:"text_pair"},{anchor:"transformers.LukeTokenizer.__call__.entity_spans",description:`<strong>entity_spans</strong> (<code>List[Tuple[int, int]]</code>, <code>List[List[Tuple[int, int]]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences of entity spans to be encoded. Each sequence consists of tuples each
with two integers denoting character-based start and end positions of entities. If you specify
<code>&quot;entity_classification&quot;</code> or <code>&quot;entity_pair_classification&quot;</code> as the <code>task</code> argument in the constructor,
the length of each sequence must be 1 or 2, respectively. If you specify <code>entities</code>, the length of each
sequence must be equal to the length of each sequence of <code>entities</code>.`,name:"entity_spans"},{anchor:"transformers.LukeTokenizer.__call__.entity_spans_pair",description:`<strong>entity_spans_pair</strong> (<code>List[Tuple[int, int]]</code>, <code>List[List[Tuple[int, int]]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences of entity spans to be encoded. Each sequence consists of tuples each
with two integers denoting character-based start and end positions of entities. If you specify the
<code>task</code> argument in the constructor, this argument is ignored. If you specify <code>entities_pair</code>, the
length of each sequence must be equal to the length of each sequence of <code>entities_pair</code>.`,name:"entity_spans_pair"},{anchor:"transformers.LukeTokenizer.__call__.entities",description:`<strong>entities</strong> (<code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences of entities to be encoded. Each sequence consists of strings
representing entities, i.e., special entities (e.g., [MASK]) or entity titles of Wikipedia (e.g., Los
Angeles). This argument is ignored if you specify the <code>task</code> argument in the constructor. The length of
each sequence must be equal to the length of each sequence of <code>entity_spans</code>. If you specify
<code>entity_spans</code> without specifying this argument, the entity sequence or the batch of entity sequences
is automatically constructed by filling it with the [MASK] entity.`,name:"entities"},{anchor:"transformers.LukeTokenizer.__call__.entities_pair",description:`<strong>entities_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences of entities to be encoded. Each sequence consists of strings
representing entities, i.e., special entities (e.g., [MASK]) or entity titles of Wikipedia (e.g., Los
Angeles). This argument is ignored if you specify the <code>task</code> argument in the constructor. The length of
each sequence must be equal to the length of each sequence of <code>entity_spans_pair</code>. If you specify
<code>entity_spans_pair</code> without specifying this argument, the entity sequence or the batch of entity
sequences is automatically constructed by filling it with the [MASK] entity.`,name:"entities_pair"},{anchor:"transformers.LukeTokenizer.__call__.max_entity_length",description:`<strong>max_entity_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The maximum length of <code>entity_ids</code>.`,name:"max_entity_length"},{anchor:"transformers.LukeTokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LukeTokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LukeTokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or
to the maximum acceptable input length for the model if that argument is not provided. This will
truncate token by token, removing a token from the longest sequence in the pair if a pair of
sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_second&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.LukeTokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LukeTokenizer.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LukeTokenizer.__call__.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.LukeTokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LukeTokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LukeTokenizer.__call__.return_token_type_ids",description:`<strong>return_token_type_ids</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return token type IDs. If left to the default, will return the token type IDs according to
the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"return_token_type_ids"},{anchor:"transformers.LukeTokenizer.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"return_attention_mask"},{anchor:"transformers.LukeTokenizer.__call__.return_overflowing_tokens",description:`<strong>return_overflowing_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return overflowing token sequences. If a pair of sequences of input ids (or a batch
of pairs) is provided with <code>truncation_strategy = longest_first</code> or <code>True</code>, an error is raised instead
of returning overflowing tokens.`,name:"return_overflowing_tokens"},{anchor:"transformers.LukeTokenizer.__call__.return_special_tokens_mask",description:`<strong>return_special_tokens_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return special tokens mask information.`,name:"return_special_tokens_mask"},{anchor:"transformers.LukeTokenizer.__call__.return_offsets_mapping",description:`<strong>return_offsets_mapping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return <code>(char_start, char_end)</code> for each token.</p>
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.LukeTokenizer.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.LukeTokenizer.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/luke/tokenization_luke.py#L262",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a> with the following fields:</p>
<ul>
<li>
<p><strong>input_ids</strong> \u2014 List of token ids to be fed to a model.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
</li>
<li>
<p><strong>token_type_ids</strong> \u2014 List of token type ids to be fed to a model (when <code>return_token_type_ids=True</code> or
if <em>\u201Ctoken_type_ids\u201D</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a></p>
</li>
<li>
<p><strong>attention_mask</strong> \u2014 List of indices specifying which tokens should be attended to by the model (when
<code>return_attention_mask=True</code> or if <em>\u201Cattention_mask\u201D</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
</li>
<li>
<p><strong>entity_ids</strong> \u2014 List of entity ids to be fed to a model.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
</li>
<li>
<p><strong>entity_position_ids</strong> \u2014 List of entity positions in the input sequence to be fed to a model.</p>
</li>
<li>
<p><strong>entity_token_type_ids</strong> \u2014 List of entity token type ids to be fed to a model (when
<code>return_token_type_ids=True</code> or if <em>\u201Centity_token_type_ids\u201D</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a></p>
</li>
<li>
<p><strong>entity_attention_mask</strong> \u2014 List of indices specifying which entities should be attended to by the model
(when <code>return_attention_mask=True</code> or if <em>\u201Centity_attention_mask\u201D</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
</li>
<li>
<p><strong>entity_start_positions</strong> \u2014 List of the start positions of entities in the word token sequence (when
<code>task="entity_span_classification"</code>).</p>
</li>
<li>
<p><strong>entity_end_positions</strong> \u2014 List of the end positions of entities in the word token sequence (when
<code>task="entity_span_classification"</code>).</p>
</li>
<li>
<p><strong>overflowing_tokens</strong> \u2014 List of overflowing tokens sequences (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>num_truncated_tokens</strong> \u2014 Number of tokens truncated (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>special_tokens_mask</strong> \u2014 List of 0s and 1s, with 1 specifying added special tokens and 0 specifying
regular sequence tokens (when <code>add_special_tokens=True</code> and <code>return_special_tokens_mask=True</code>).</p>
</li>
<li>
<p><strong>length</strong> \u2014 The length of the inputs (when <code>return_length=True</code>)</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),pn=new x({props:{name:"save_vocabulary",anchor:"transformers.LukeTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/luke/tokenization_luke.py#L1381"}}),hn=new Z({}),un=new x({props:{name:"class transformers.LukeModel",anchor:"transformers.LukeModel",parameters:[{name:"config",val:": LukeConfig"},{name:"add_pooling_layer",val:": bool = True"}],parametersDescription:[{anchor:"transformers.LukeModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1024"}}),_n=new x({props:{name:"forward",anchor:"transformers.LukeModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"entity_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LukeModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LukeModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LukeModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LukeModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LukeModel.forward.entity_ids",description:`<strong>entity_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>) &#x2014;
Indices of entity tokens in the entity vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeModel.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding entity token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for entity tokens that are <strong>not masked</strong>,</li>
<li>0 for entity tokens that are <strong>masked</strong>.</li>
</ul>`,name:"entity_attention_mask"},{anchor:"transformers.LukeModel.forward.entity_token_type_ids",description:`<strong>entity_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the entity token inputs. Indices are
selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>portion A</em> entity token,</li>
<li>1 corresponds to a <em>portion B</em> entity token.</li>
</ul>`,name:"entity_token_type_ids"},{anchor:"transformers.LukeModel.forward.entity_position_ids",description:`<strong>entity_position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length, max_mention_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input entity in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"entity_position_ids"},{anchor:"transformers.LukeModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LukeModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LukeModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LukeModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LukeModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1056",returnDescription:`
<p>A <code>transformers.models.luke.modeling_luke.BaseLukeModelOutputWithPooling</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig"
>LukeConfig</a>) and inputs.</p>
<ul>
<li><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</li>
<li><strong>entity_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length, hidden_size)</code>) \u2014 Sequence of entity hidden-states at the output of the last layer of the model.</li>
<li><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function.</li>
<li><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer
plus the initial embedding outputs.</li>
<li><strong>entity_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, entity_length, hidden_size)</code>. Entity hidden-states of the model at the output of each
layer plus the initial entity embedding outputs.</li>
<li><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length + entity_length, sequence_length + entity_length)</code>. Attentions weights after the attention softmax, used to
compute the weighted average in the self-attention heads.</li>
</ul>
`,returnType:`
<p><code>transformers.models.luke.modeling_luke.BaseLukeModelOutputWithPooling</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),it=new Je({props:{$$slots:{default:[zf]},$$scope:{ctx:z}}}),lt=new Y({props:{anchor:"transformers.LukeModel.forward.example",$$slots:{default:[Ef]},$$scope:{ctx:z}}}),kn=new Z({}),yn=new x({props:{name:"class transformers.LukeForMaskedLM",anchor:"transformers.LukeForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1277"}}),vn=new x({props:{name:"forward",anchor:"transformers.LukeForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LukeForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LukeForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LukeForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LukeForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LukeForMaskedLM.forward.entity_ids",description:`<strong>entity_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>) &#x2014;
Indices of entity tokens in the entity vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForMaskedLM.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding entity token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for entity tokens that are <strong>not masked</strong>,</li>
<li>0 for entity tokens that are <strong>masked</strong>.</li>
</ul>`,name:"entity_attention_mask"},{anchor:"transformers.LukeForMaskedLM.forward.entity_token_type_ids",description:`<strong>entity_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the entity token inputs. Indices are
selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>portion A</em> entity token,</li>
<li>1 corresponds to a <em>portion B</em> entity token.</li>
</ul>`,name:"entity_token_type_ids"},{anchor:"transformers.LukeForMaskedLM.forward.entity_position_ids",description:`<strong>entity_position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length, max_mention_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input entity in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"entity_position_ids"},{anchor:"transformers.LukeForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LukeForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LukeForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LukeForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LukeForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LukeForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.LukeForMaskedLM.forward.entity_labels",description:`<strong>entity_labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"entity_labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1313",returnDescription:`
<p>A <code>transformers.models.luke.modeling_luke.LukeMaskedLMOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig"
>LukeConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 The sum of masked language modeling (MLM) loss and entity prediction loss.</p>
</li>
<li>
<p><strong>mlm_loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>mep_loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked entity prediction (MEP) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>entity_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the entity prediction head (scores for each entity vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>entity_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, entity_length, hidden_size)</code>. Entity hidden-states of the model at the output of each
layer plus the initial entity embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.luke.modeling_luke.LukeMaskedLMOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ct=new Je({props:{$$slots:{default:[xf]},$$scope:{ctx:z}}}),Ln=new Z({}),$n=new x({props:{name:"class transformers.LukeForEntityClassification",anchor:"transformers.LukeForEntityClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForEntityClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1420"}}),Fn=new x({props:{name:"forward",anchor:"transformers.LukeForEntityClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"entity_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LukeForEntityClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LukeForEntityClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LukeForEntityClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LukeForEntityClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LukeForEntityClassification.forward.entity_ids",description:`<strong>entity_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>) &#x2014;
Indices of entity tokens in the entity vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForEntityClassification.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding entity token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for entity tokens that are <strong>not masked</strong>,</li>
<li>0 for entity tokens that are <strong>masked</strong>.</li>
</ul>`,name:"entity_attention_mask"},{anchor:"transformers.LukeForEntityClassification.forward.entity_token_type_ids",description:`<strong>entity_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the entity token inputs. Indices are
selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>portion A</em> entity token,</li>
<li>1 corresponds to a <em>portion B</em> entity token.</li>
</ul>`,name:"entity_token_type_ids"},{anchor:"transformers.LukeForEntityClassification.forward.entity_position_ids",description:`<strong>entity_position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length, max_mention_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input entity in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"entity_position_ids"},{anchor:"transformers.LukeForEntityClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LukeForEntityClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LukeForEntityClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LukeForEntityClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LukeForEntityClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LukeForEntityClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code> or <code>(batch_size, num_labels)</code>, <em>optional</em>) &#x2014;
Labels for computing the classification loss. If the shape is <code>(batch_size,)</code>, the cross entropy loss is
used for the single-label classification. In this case, labels should contain the indices that should be in
<code>[0, ..., config.num_labels - 1]</code>. If the shape is <code>(batch_size, num_labels)</code>, the binary cross entropy
loss is used for the multi-label classification. In this case, labels should only contain <code>[0, 1]</code>, where 0
and 1 indicate false and true, respectively.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1433",returnDescription:`
<p>A <code>transformers.models.luke.modeling_luke.EntityClassificationOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig"
>LukeConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</li>
<li><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</li>
<li><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer
plus the initial embedding outputs.</li>
<li><strong>entity_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, entity_length, hidden_size)</code>. Entity hidden-states of the model at the output of each
layer plus the initial entity embedding outputs.</li>
<li><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.</li>
</ul>
`,returnType:`
<p><code>transformers.models.luke.modeling_luke.EntityClassificationOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ht=new Je({props:{$$slots:{default:[Ff]},$$scope:{ctx:z}}}),ut=new Y({props:{anchor:"transformers.LukeForEntityClassification.forward.example",$$slots:{default:[qf]},$$scope:{ctx:z}}}),qn=new Z({}),Cn=new x({props:{name:"class transformers.LukeForEntityPairClassification",anchor:"transformers.LukeForEntityPairClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForEntityPairClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1533"}}),An=new x({props:{name:"forward",anchor:"transformers.LukeForEntityPairClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"entity_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LukeForEntityPairClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LukeForEntityPairClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LukeForEntityPairClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LukeForEntityPairClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LukeForEntityPairClassification.forward.entity_ids",description:`<strong>entity_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>) &#x2014;
Indices of entity tokens in the entity vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForEntityPairClassification.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding entity token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for entity tokens that are <strong>not masked</strong>,</li>
<li>0 for entity tokens that are <strong>masked</strong>.</li>
</ul>`,name:"entity_attention_mask"},{anchor:"transformers.LukeForEntityPairClassification.forward.entity_token_type_ids",description:`<strong>entity_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the entity token inputs. Indices are
selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>portion A</em> entity token,</li>
<li>1 corresponds to a <em>portion B</em> entity token.</li>
</ul>`,name:"entity_token_type_ids"},{anchor:"transformers.LukeForEntityPairClassification.forward.entity_position_ids",description:`<strong>entity_position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length, max_mention_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input entity in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"entity_position_ids"},{anchor:"transformers.LukeForEntityPairClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LukeForEntityPairClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LukeForEntityPairClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LukeForEntityPairClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LukeForEntityPairClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LukeForEntityPairClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code> or <code>(batch_size, num_labels)</code>, <em>optional</em>) &#x2014;
Labels for computing the classification loss. If the shape is <code>(batch_size,)</code>, the cross entropy loss is
used for the single-label classification. In this case, labels should contain the indices that should be in
<code>[0, ..., config.num_labels - 1]</code>. If the shape is <code>(batch_size, num_labels)</code>, the binary cross entropy
loss is used for the multi-label classification. In this case, labels should only contain <code>[0, 1]</code>, where 0
and 1 indicate false and true, respectively.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1546",returnDescription:`
<p>A <code>transformers.models.luke.modeling_luke.EntityPairClassificationOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig"
>LukeConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</li>
<li><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</li>
<li><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer
plus the initial embedding outputs.</li>
<li><strong>entity_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, entity_length, hidden_size)</code>. Entity hidden-states of the model at the output of each
layer plus the initial entity embedding outputs.</li>
<li><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.</li>
</ul>
`,returnType:`
<p><code>transformers.models.luke.modeling_luke.EntityPairClassificationOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ft=new Je({props:{$$slots:{default:[Cf]},$$scope:{ctx:z}}}),gt=new Y({props:{anchor:"transformers.LukeForEntityPairClassification.forward.example",$$slots:{default:[jf]},$$scope:{ctx:z}}}),Sn=new Z({}),On=new x({props:{name:"class transformers.LukeForEntitySpanClassification",anchor:"transformers.LukeForEntitySpanClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForEntitySpanClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1651"}}),Wn=new x({props:{name:"forward",anchor:"transformers.LukeForEntitySpanClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LukeForEntitySpanClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LukeForEntitySpanClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LukeForEntitySpanClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LukeForEntitySpanClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LukeForEntitySpanClassification.forward.entity_ids",description:`<strong>entity_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>) &#x2014;
Indices of entity tokens in the entity vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForEntitySpanClassification.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding entity token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for entity tokens that are <strong>not masked</strong>,</li>
<li>0 for entity tokens that are <strong>masked</strong>.</li>
</ul>`,name:"entity_attention_mask"},{anchor:"transformers.LukeForEntitySpanClassification.forward.entity_token_type_ids",description:`<strong>entity_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the entity token inputs. Indices are
selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>portion A</em> entity token,</li>
<li>1 corresponds to a <em>portion B</em> entity token.</li>
</ul>`,name:"entity_token_type_ids"},{anchor:"transformers.LukeForEntitySpanClassification.forward.entity_position_ids",description:`<strong>entity_position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length, max_mention_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input entity in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"entity_position_ids"},{anchor:"transformers.LukeForEntitySpanClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LukeForEntitySpanClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LukeForEntitySpanClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LukeForEntitySpanClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LukeForEntitySpanClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LukeForEntitySpanClassification.forward.entity_start_positions",description:`<strong>entity_start_positions</strong> (<code>torch.LongTensor</code>) &#x2014;
The start positions of entities in the word token sequence.`,name:"entity_start_positions"},{anchor:"transformers.LukeForEntitySpanClassification.forward.entity_end_positions",description:`<strong>entity_end_positions</strong> (<code>torch.LongTensor</code>) &#x2014;
The end positions of entities in the word token sequence.`,name:"entity_end_positions"},{anchor:"transformers.LukeForEntitySpanClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code> or <code>(batch_size, entity_length, num_labels)</code>, <em>optional</em>) &#x2014;
Labels for computing the classification loss. If the shape is <code>(batch_size, entity_length)</code>, the cross
entropy loss is used for the single-label classification. In this case, labels should contain the indices
that should be in <code>[0, ..., config.num_labels - 1]</code>. If the shape is <code>(batch_size, entity_length, num_labels)</code>, the binary cross entropy loss is used for the multi-label classification. In this case,
labels should only contain <code>[0, 1]</code>, where 0 and 1 indicate false and true, respectively.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1664",returnDescription:`
<p>A <code>transformers.models.luke.modeling_luke.EntitySpanClassificationOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig"
>LukeConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</li>
<li><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</li>
<li><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer
plus the initial embedding outputs.</li>
<li><strong>entity_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, entity_length, hidden_size)</code>. Entity hidden-states of the model at the output of each
layer plus the initial entity embedding outputs.</li>
<li><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.</li>
</ul>
`,returnType:`
<p><code>transformers.models.luke.modeling_luke.EntitySpanClassificationOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),kt=new Je({props:{$$slots:{default:[Mf]},$$scope:{ctx:z}}}),yt=new Y({props:{anchor:"transformers.LukeForEntitySpanClassification.forward.example",$$slots:{default:[Pf]},$$scope:{ctx:z}}}),Un=new Z({}),Bn=new x({props:{name:"class transformers.LukeForSequenceClassification",anchor:"transformers.LukeForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1789"}}),Hn=new x({props:{name:"forward",anchor:"transformers.LukeForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"entity_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LukeForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LukeForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LukeForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LukeForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LukeForSequenceClassification.forward.entity_ids",description:`<strong>entity_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>) &#x2014;
Indices of entity tokens in the entity vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForSequenceClassification.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding entity token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for entity tokens that are <strong>not masked</strong>,</li>
<li>0 for entity tokens that are <strong>masked</strong>.</li>
</ul>`,name:"entity_attention_mask"},{anchor:"transformers.LukeForSequenceClassification.forward.entity_token_type_ids",description:`<strong>entity_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the entity token inputs. Indices are
selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>portion A</em> entity token,</li>
<li>1 corresponds to a <em>portion B</em> entity token.</li>
</ul>`,name:"entity_token_type_ids"},{anchor:"transformers.LukeForSequenceClassification.forward.entity_position_ids",description:`<strong>entity_position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length, max_mention_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input entity in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"entity_position_ids"},{anchor:"transformers.LukeForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LukeForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LukeForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LukeForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LukeForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LukeForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1802",returnDescription:`
<p>A <code>transformers.models.luke.modeling_luke.LukeSequenceClassifierOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig"
>LukeConfig</a>) and inputs.</p>
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
<p><strong>entity_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, entity_length, hidden_size)</code>. Entity hidden-states of the model at the output of each
layer plus the initial entity embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.luke.modeling_luke.LukeSequenceClassifierOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Tt=new Je({props:{$$slots:{default:[Af]},$$scope:{ctx:z}}}),wt=new Y({props:{anchor:"transformers.LukeForSequenceClassification.forward.example",$$slots:{default:[Sf]},$$scope:{ctx:z}}}),vt=new Y({props:{anchor:"transformers.LukeForSequenceClassification.forward.example-2",$$slots:{default:[Of]},$$scope:{ctx:z}}}),Lt=new Y({props:{anchor:"transformers.LukeForSequenceClassification.forward.example-3",$$slots:{default:[If]},$$scope:{ctx:z}}}),$t=new Y({props:{anchor:"transformers.LukeForSequenceClassification.forward.example-4",$$slots:{default:[Nf]},$$scope:{ctx:z}}}),Vn=new Z({}),Yn=new x({props:{name:"class transformers.LukeForMultipleChoice",anchor:"transformers.LukeForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L2117"}}),Zn=new x({props:{name:"forward",anchor:"transformers.LukeForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"entity_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LukeForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LukeForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LukeForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LukeForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LukeForMultipleChoice.forward.entity_ids",description:`<strong>entity_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>) &#x2014;
Indices of entity tokens in the entity vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForMultipleChoice.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding entity token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for entity tokens that are <strong>not masked</strong>,</li>
<li>0 for entity tokens that are <strong>masked</strong>.</li>
</ul>`,name:"entity_attention_mask"},{anchor:"transformers.LukeForMultipleChoice.forward.entity_token_type_ids",description:`<strong>entity_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the entity token inputs. Indices are
selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>portion A</em> entity token,</li>
<li>1 corresponds to a <em>portion B</em> entity token.</li>
</ul>`,name:"entity_token_type_ids"},{anchor:"transformers.LukeForMultipleChoice.forward.entity_position_ids",description:`<strong>entity_position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length, max_mention_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input entity in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"entity_position_ids"},{anchor:"transformers.LukeForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LukeForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LukeForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LukeForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LukeForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LukeForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L2130",returnDescription:`
<p>A <code>transformers.models.luke.modeling_luke.LukeMultipleChoiceModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig"
>LukeConfig</a>) and inputs.</p>
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
<p><strong>entity_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, entity_length, hidden_size)</code>. Entity hidden-states of the model at the output of each
layer plus the initial entity embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.luke.modeling_luke.LukeMultipleChoiceModelOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Et=new Je({props:{$$slots:{default:[Df]},$$scope:{ctx:z}}}),xt=new Y({props:{anchor:"transformers.LukeForMultipleChoice.forward.example",$$slots:{default:[Wf]},$$scope:{ctx:z}}}),eo=new Z({}),to=new x({props:{name:"class transformers.LukeForTokenClassification",anchor:"transformers.LukeForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1902"}}),ro=new x({props:{name:"forward",anchor:"transformers.LukeForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"entity_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LukeForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LukeForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LukeForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LukeForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LukeForTokenClassification.forward.entity_ids",description:`<strong>entity_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>) &#x2014;
Indices of entity tokens in the entity vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForTokenClassification.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding entity token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for entity tokens that are <strong>not masked</strong>,</li>
<li>0 for entity tokens that are <strong>masked</strong>.</li>
</ul>`,name:"entity_attention_mask"},{anchor:"transformers.LukeForTokenClassification.forward.entity_token_type_ids",description:`<strong>entity_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the entity token inputs. Indices are
selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>portion A</em> entity token,</li>
<li>1 corresponds to a <em>portion B</em> entity token.</li>
</ul>`,name:"entity_token_type_ids"},{anchor:"transformers.LukeForTokenClassification.forward.entity_position_ids",description:`<strong>entity_position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length, max_mention_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input entity in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"entity_position_ids"},{anchor:"transformers.LukeForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LukeForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LukeForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LukeForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LukeForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LukeForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1916",returnDescription:`
<p>A <code>transformers.models.luke.modeling_luke.LukeTokenClassifierOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig"
>LukeConfig</a>) and inputs.</p>
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
<p><strong>entity_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, entity_length, hidden_size)</code>. Entity hidden-states of the model at the output of each
layer plus the initial entity embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.luke.modeling_luke.LukeTokenClassifierOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qt=new Je({props:{$$slots:{default:[Uf]},$$scope:{ctx:z}}}),Ct=new Y({props:{anchor:"transformers.LukeForTokenClassification.forward.example",$$slots:{default:[Bf]},$$scope:{ctx:z}}}),jt=new Y({props:{anchor:"transformers.LukeForTokenClassification.forward.example-2",$$slots:{default:[Kf]},$$scope:{ctx:z}}}),io=new Z({}),lo=new x({props:{name:"class transformers.LukeForQuestionAnswering",anchor:"transformers.LukeForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1997"}}),uo=new x({props:{name:"forward",anchor:"transformers.LukeForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.FloatTensor] = None"},{name:"entity_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"entity_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LukeForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LukeForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LukeForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LukeForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LukeForQuestionAnswering.forward.entity_ids",description:`<strong>entity_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>) &#x2014;
Indices of entity tokens in the entity vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForQuestionAnswering.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding entity token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for entity tokens that are <strong>not masked</strong>,</li>
<li>0 for entity tokens that are <strong>masked</strong>.</li>
</ul>`,name:"entity_attention_mask"},{anchor:"transformers.LukeForQuestionAnswering.forward.entity_token_type_ids",description:`<strong>entity_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the entity token inputs. Indices are
selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>portion A</em> entity token,</li>
<li>1 corresponds to a <em>portion B</em> entity token.</li>
</ul>`,name:"entity_token_type_ids"},{anchor:"transformers.LukeForQuestionAnswering.forward.entity_position_ids",description:`<strong>entity_position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length, max_mention_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input entity in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"entity_position_ids"},{anchor:"transformers.LukeForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LukeForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LukeForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LukeForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LukeForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LukeForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LukeForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L2009",returnDescription:`
<p>A <code>transformers.models.luke.modeling_luke.LukeQuestionAnsweringModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig"
>LukeConfig</a>) and inputs.</p>
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
<p><strong>entity_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, entity_length, hidden_size)</code>. Entity hidden-states of the model at the output of each
layer plus the initial entity embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.models.luke.modeling_luke.LukeQuestionAnsweringModelOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Pt=new Je({props:{$$slots:{default:[Rf]},$$scope:{ctx:z}}}),At=new Y({props:{anchor:"transformers.LukeForQuestionAnswering.forward.example",$$slots:{default:[Qf]},$$scope:{ctx:z}}}),St=new Y({props:{anchor:"transformers.LukeForQuestionAnswering.forward.example-2",$$slots:{default:[Hf]},$$scope:{ctx:z}}}),{c(){d=a("meta"),_=h(),c=a("h1"),f=a("a"),y=a("span"),b(l.$$.fragment),m=h(),E=a("span"),li=o("LUKE"),Ga=h(),Le=a("h2"),Xe=a("a"),ys=a("span"),b(Kt.$$.fragment),di=h(),bs=a("span"),ci=o("Overview"),Ja=h(),Ze=a("p"),pi=o("The LUKE model was proposed in "),Rt=a("a"),hi=o("LUKE: Deep Contextualized Entity Representations with Entity-aware Self-attention"),ui=o(` by Ikuya Yamada, Akari Asai, Hiroyuki Shindo, Hideaki Takeda and Yuji Matsumoto.
It is based on RoBERTa and adds entity embeddings as well as an entity-aware self-attention mechanism, which helps
improve performance on various downstream tasks involving reasoning about entities such as named entity recognition,
extractive and cloze-style question answering, entity typing, and relation classification.`),Xa=h(),ko=a("p"),mi=o("The abstract from the paper is the following:"),Za=h(),yo=a("p"),Ts=a("em"),fi=o(`Entity representations are useful in natural language tasks involving entities. In this paper, we propose new
pretrained contextualized representations of words and entities based on the bidirectional transformer. The proposed
model treats words and entities in a given text as independent tokens, and outputs contextualized representations of
them. Our model is trained using a new pretraining task based on the masked language model of BERT. The task involves
predicting randomly masked words and entities in a large entity-annotated corpus retrieved from Wikipedia. We also
propose an entity-aware self-attention mechanism that is an extension of the self-attention mechanism of the
transformer, and considers the types of tokens (words or entities) when computing attention scores. The proposed model
achieves impressive empirical performance on a wide range of entity-related tasks. In particular, it obtains
state-of-the-art results on five well-known datasets: Open Entity (entity typing), TACRED (relation classification),
CoNLL-2003 (named entity recognition), ReCoRD (cloze-style question answering), and SQuAD 1.1 (extractive question
answering).`),er=h(),bo=a("p"),gi=o("Tips:"),tr=h(),ee=a("ul"),ws=a("li"),Qt=a("p"),_i=o("This implementation is the same as "),To=a("a"),ki=o("RobertaModel"),yi=o(` with the addition of entity embeddings as well
as an entity-aware self-attention mechanism, which improves performance on tasks involving reasoning about entities.`),bi=h(),vs=a("li"),j=a("p"),Ti=o("LUKE treats entities as input tokens; therefore, it takes "),Ls=a("code"),wi=o("entity_ids"),vi=o(", "),$s=a("code"),Li=o("entity_attention_mask"),$i=o(`,
`),zs=a("code"),zi=o("entity_token_type_ids"),Ei=o(" and "),Es=a("code"),xi=o("entity_position_ids"),Fi=o(` as extra input. You can obtain those using
`),wo=a("a"),qi=o("LukeTokenizer"),Ci=o("."),ji=h(),Ht=a("li"),te=a("p"),vo=a("a"),Mi=o("LukeTokenizer"),Pi=o(" takes "),xs=a("code"),Ai=o("entities"),Si=o(" and "),Fs=a("code"),Oi=o("entity_spans"),Ii=o(` (character-based start and end
positions of the entities in the input text) as extra input. `),qs=a("code"),Ni=o("entities"),Di=o(` typically consist of [MASK] entities or
Wikipedia entities. The brief description when inputting these entities are as follows:`),Wi=h(),Vt=a("ul"),Lo=a("li"),Cs=a("em"),Ui=o("Inputting [MASK] entities to compute entity representations"),Bi=o(`: The [MASK] entity is used to mask entities to be
predicted during pretraining. When LUKE receives the [MASK] entity, it tries to predict the original entity by
gathering the information about the entity from the input text. Therefore, the [MASK] entity can be used to address
downstream tasks requiring the information of entities in text such as entity typing, relation classification, and
named entity recognition.`),Ki=h(),$o=a("li"),js=a("em"),Ri=o("Inputting Wikipedia entities to compute knowledge-enhanced token representations"),Qi=o(`: LUKE learns rich information
(or knowledge) about Wikipedia entities during pretraining and stores the information in its entity embedding. By
using Wikipedia entities as input tokens, LUKE outputs token representations enriched by the information stored in
the embeddings of these entities. This is particularly effective for tasks requiring real-world knowledge, such as
question answering.`),Hi=h(),J=a("li"),Ms=a("p"),Vi=o("There are three head models for the former use case:"),Yi=h(),$e=a("ul"),et=a("li"),zo=a("a"),Gi=o("LukeForEntityClassification"),Ji=o(`, for tasks to classify a single entity in an input text such as
entity typing, e.g. the `),Yt=a("a"),Xi=o("Open Entity dataset"),Zi=o(`.
This model places a linear head on top of the output entity representation.`),el=h(),tt=a("li"),Eo=a("a"),tl=o("LukeForEntityPairClassification"),nl=o(`, for tasks to classify the relationship between two entities
such as relation classification, e.g. the `),Gt=a("a"),ol=o("TACRED dataset"),sl=o(`. This
model places a linear head on top of the concatenated output representation of the pair of given entities.`),al=h(),xo=a("li"),Fo=a("a"),rl=o("LukeForEntitySpanClassification"),il=o(`, for tasks to classify the sequence of entity spans, such as
named entity recognition (NER). This model places a linear head on top of the output entity representations. You
can address NER using this model by inputting all possible entity spans in the text to the model.`),ll=h(),R=a("p"),qo=a("a"),dl=o("LukeTokenizer"),cl=o(" has a "),Ps=a("code"),pl=o("task"),hl=o(` argument, which enables you to easily create an input to these
head models by specifying `),As=a("code"),ul=o('task="entity_classification"'),ml=o(", "),Ss=a("code"),fl=o('task="entity_pair_classification"'),gl=o(`, or
`),Os=a("code"),_l=o('task="entity_span_classification"'),kl=o(". Please refer to the example code of each head models."),yl=h(),ze=a("p"),bl=o("A demo notebook on how to fine-tune "),Co=a("a"),Tl=o("LukeForEntityPairClassification"),wl=o(` for relation
classification can be found `),Jt=a("a"),vl=o("here"),Ll=o("."),$l=h(),Xt=a("p"),zl=o(`There are also 3 notebooks available, which showcase how you can reproduce the results as reported in the paper with
the HuggingFace implementation of LUKE. They can be found `),Zt=a("a"),El=o("here"),xl=o("."),nr=h(),jo=a("p"),Fl=o("Example:"),or=h(),b(en.$$.fragment),sr=h(),ne=a("p"),ql=o("This model was contributed by "),tn=a("a"),Cl=o("ikuyamada"),jl=o(" and "),nn=a("a"),Ml=o("nielsr"),Pl=o(". The original code can be found "),on=a("a"),Al=o("here"),Sl=o("."),ar=h(),Ee=a("h2"),nt=a("a"),Is=a("span"),b(sn.$$.fragment),Ol=h(),Ns=a("span"),Il=o("LukeConfig"),rr=h(),X=a("div"),b(an.$$.fragment),Nl=h(),xe=a("p"),Dl=o("This is the configuration class to store the configuration of a "),Mo=a("a"),Wl=o("LukeModel"),Ul=o(`. It is used to instantiate a LUKE
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LUKE
`),rn=a("a"),Bl=o("studio-ousia/luke-base"),Kl=o(" architecture."),Rl=h(),Fe=a("p"),Ql=o("Configuration objects inherit from "),Po=a("a"),Hl=o("PretrainedConfig"),Vl=o(` and can be used to control the model outputs. Read the
documentation from `),Ao=a("a"),Yl=o("PretrainedConfig"),Gl=o(" for more information."),Jl=h(),b(ot.$$.fragment),ir=h(),qe=a("h2"),st=a("a"),Ds=a("span"),b(ln.$$.fragment),Xl=h(),Ws=a("span"),Zl=o("LukeTokenizer"),lr=h(),M=a("div"),b(dn.$$.fragment),ed=h(),Us=a("p"),td=o("Construct a LUKE tokenizer."),nd=h(),F=a("p"),od=o("This tokenizer inherits from "),So=a("a"),sd=o("RobertaTokenizer"),ad=o(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods. Compared to `),Oo=a("a"),rd=o("RobertaTokenizer"),id=o(", "),Io=a("a"),ld=o("LukeTokenizer"),dd=o(`
also creates entity sequences, namely `),Bs=a("code"),cd=o("entity_ids"),pd=o(", "),Ks=a("code"),hd=o("entity_attention_mask"),ud=o(", "),Rs=a("code"),md=o("entity_token_type_ids"),fd=o(`, and
`),Qs=a("code"),gd=o("entity_position_ids"),_d=o(" to be used by the LUKE model."),kd=h(),at=a("div"),b(cn.$$.fragment),yd=h(),Hs=a("p"),bd=o(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences, depending on the task you want to prepare them for.`),Td=h(),No=a("div"),b(pn.$$.fragment),dr=h(),Ce=a("h2"),rt=a("a"),Vs=a("span"),b(hn.$$.fragment),wd=h(),Ys=a("span"),vd=o("LukeModel"),cr=h(),P=a("div"),b(un.$$.fragment),Ld=h(),Gs=a("p"),$d=o("The bare LUKE model transformer outputting raw hidden-states for both word tokens and entities without any specific head on top."),zd=h(),mn=a("p"),Ed=o("This model inherits from "),Do=a("a"),xd=o("PreTrainedModel"),Fd=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qd=h(),fn=a("p"),Cd=o("This model is also a PyTorch "),gn=a("a"),jd=o("torch.nn.Module"),Md=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Pd=h(),oe=a("div"),b(_n.$$.fragment),Ad=h(),je=a("p"),Sd=o("The "),Wo=a("a"),Od=o("LukeModel"),Id=o(" forward method, overrides the "),Js=a("code"),Nd=o("__call__"),Dd=o(" special method."),Wd=h(),b(it.$$.fragment),Ud=h(),b(lt.$$.fragment),pr=h(),Me=a("h2"),dt=a("a"),Xs=a("span"),b(kn.$$.fragment),Bd=h(),Zs=a("span"),Kd=o("LukeForMaskedLM"),hr=h(),A=a("div"),b(yn.$$.fragment),Rd=h(),ea=a("p"),Qd=o(`The LUKE model with a language modeling head and entity prediction head on top for masked language modeling and
masked entity prediction.`),Hd=h(),bn=a("p"),Vd=o("This model inherits from "),Uo=a("a"),Yd=o("PreTrainedModel"),Gd=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jd=h(),Tn=a("p"),Xd=o("This model is also a PyTorch "),wn=a("a"),Zd=o("torch.nn.Module"),ec=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tc=h(),ce=a("div"),b(vn.$$.fragment),nc=h(),Pe=a("p"),oc=o("The "),Bo=a("a"),sc=o("LukeForMaskedLM"),ac=o(" forward method, overrides the "),ta=a("code"),rc=o("__call__"),ic=o(" special method."),lc=h(),b(ct.$$.fragment),ur=h(),Ae=a("h2"),pt=a("a"),na=a("span"),b(Ln.$$.fragment),dc=h(),oa=a("span"),cc=o("LukeForEntityClassification"),mr=h(),S=a("div"),b($n.$$.fragment),pc=h(),sa=a("p"),hc=o(`The LUKE model with a classification head on top (a linear layer on top of the hidden state of the first entity
token) for entity classification tasks, such as Open Entity.`),uc=h(),zn=a("p"),mc=o("This model inherits from "),Ko=a("a"),fc=o("PreTrainedModel"),gc=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_c=h(),En=a("p"),kc=o("This model is also a PyTorch "),xn=a("a"),yc=o("torch.nn.Module"),bc=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tc=h(),se=a("div"),b(Fn.$$.fragment),wc=h(),Se=a("p"),vc=o("The "),Ro=a("a"),Lc=o("LukeForEntityClassification"),$c=o(" forward method, overrides the "),aa=a("code"),zc=o("__call__"),Ec=o(" special method."),xc=h(),b(ht.$$.fragment),Fc=h(),b(ut.$$.fragment),fr=h(),Oe=a("h2"),mt=a("a"),ra=a("span"),b(qn.$$.fragment),qc=h(),ia=a("span"),Cc=o("LukeForEntityPairClassification"),gr=h(),O=a("div"),b(Cn.$$.fragment),jc=h(),la=a("p"),Mc=o(`The LUKE model with a classification head on top (a linear layer on top of the hidden states of the two entity
tokens) for entity pair classification tasks, such as TACRED.`),Pc=h(),jn=a("p"),Ac=o("This model inherits from "),Qo=a("a"),Sc=o("PreTrainedModel"),Oc=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ic=h(),Mn=a("p"),Nc=o("This model is also a PyTorch "),Pn=a("a"),Dc=o("torch.nn.Module"),Wc=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Uc=h(),ae=a("div"),b(An.$$.fragment),Bc=h(),Ie=a("p"),Kc=o("The "),Ho=a("a"),Rc=o("LukeForEntityPairClassification"),Qc=o(" forward method, overrides the "),da=a("code"),Hc=o("__call__"),Vc=o(" special method."),Yc=h(),b(ft.$$.fragment),Gc=h(),b(gt.$$.fragment),_r=h(),Ne=a("h2"),_t=a("a"),ca=a("span"),b(Sn.$$.fragment),Jc=h(),pa=a("span"),Xc=o("LukeForEntitySpanClassification"),kr=h(),I=a("div"),b(On.$$.fragment),Zc=h(),ha=a("p"),ep=o(`The LUKE model with a span classification head on top (a linear layer on top of the hidden states output) for tasks
such as named entity recognition.`),tp=h(),In=a("p"),np=o("This model inherits from "),Vo=a("a"),op=o("PreTrainedModel"),sp=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ap=h(),Nn=a("p"),rp=o("This model is also a PyTorch "),Dn=a("a"),ip=o("torch.nn.Module"),lp=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dp=h(),re=a("div"),b(Wn.$$.fragment),cp=h(),De=a("p"),pp=o("The "),Yo=a("a"),hp=o("LukeForEntitySpanClassification"),up=o(" forward method, overrides the "),ua=a("code"),mp=o("__call__"),fp=o(" special method."),gp=h(),b(kt.$$.fragment),_p=h(),b(yt.$$.fragment),yr=h(),We=a("h2"),bt=a("a"),ma=a("span"),b(Un.$$.fragment),kp=h(),fa=a("span"),yp=o("LukeForSequenceClassification"),br=h(),N=a("div"),b(Bn.$$.fragment),bp=h(),ga=a("p"),Tp=o(`The LUKE Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),wp=h(),Kn=a("p"),vp=o("This model inherits from "),Go=a("a"),Lp=o("PreTrainedModel"),$p=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zp=h(),Rn=a("p"),Ep=o("This model is also a PyTorch "),Qn=a("a"),xp=o("torch.nn.Module"),Fp=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qp=h(),q=a("div"),b(Hn.$$.fragment),Cp=h(),Ue=a("p"),jp=o("The "),Jo=a("a"),Mp=o("LukeForSequenceClassification"),Pp=o(" forward method, overrides the "),_a=a("code"),Ap=o("__call__"),Sp=o(" special method."),Op=h(),b(Tt.$$.fragment),Ip=h(),b(wt.$$.fragment),Np=h(),b(vt.$$.fragment),Dp=h(),b(Lt.$$.fragment),Wp=h(),b($t.$$.fragment),Tr=h(),Be=a("h2"),zt=a("a"),ka=a("span"),b(Vn.$$.fragment),Up=h(),ya=a("span"),Bp=o("LukeForMultipleChoice"),wr=h(),D=a("div"),b(Yn.$$.fragment),Kp=h(),ba=a("p"),Rp=o(`The LUKE Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Qp=h(),Gn=a("p"),Hp=o("This model inherits from "),Xo=a("a"),Vp=o("PreTrainedModel"),Yp=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gp=h(),Jn=a("p"),Jp=o("This model is also a PyTorch "),Xn=a("a"),Xp=o("torch.nn.Module"),Zp=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),eh=h(),ie=a("div"),b(Zn.$$.fragment),th=h(),Ke=a("p"),nh=o("The "),Zo=a("a"),oh=o("LukeForMultipleChoice"),sh=o(" forward method, overrides the "),Ta=a("code"),ah=o("__call__"),rh=o(" special method."),ih=h(),b(Et.$$.fragment),lh=h(),b(xt.$$.fragment),vr=h(),Re=a("h2"),Ft=a("a"),wa=a("span"),b(eo.$$.fragment),dh=h(),va=a("span"),ch=o("LukeForTokenClassification"),Lr=h(),W=a("div"),b(to.$$.fragment),ph=h(),no=a("p"),hh=o(`The LUKE Model with a token classification head on top (a linear layer on top of the hidden-states output). To
solve Named-Entity Recognition (NER) task using LUKE, `),La=a("code"),uh=o("LukeForEntitySpanClassification"),mh=o(` is more suitable than this
class.`),fh=h(),oo=a("p"),gh=o("This model inherits from "),es=a("a"),_h=o("PreTrainedModel"),kh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yh=h(),so=a("p"),bh=o("This model is also a PyTorch "),ao=a("a"),Th=o("torch.nn.Module"),wh=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vh=h(),Q=a("div"),b(ro.$$.fragment),Lh=h(),Qe=a("p"),$h=o("The "),ts=a("a"),zh=o("LukeForTokenClassification"),Eh=o(" forward method, overrides the "),$a=a("code"),xh=o("__call__"),Fh=o(" special method."),qh=h(),b(qt.$$.fragment),Ch=h(),b(Ct.$$.fragment),jh=h(),b(jt.$$.fragment),$r=h(),He=a("h2"),Mt=a("a"),za=a("span"),b(io.$$.fragment),Mh=h(),Ea=a("span"),Ph=o("LukeForQuestionAnswering"),zr=h(),U=a("div"),b(lo.$$.fragment),Ah=h(),Ve=a("p"),Sh=o(`The LUKE Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),xa=a("code"),Oh=o("span start logits"),Ih=o(" and "),Fa=a("code"),Nh=o("span end logits"),Dh=o(")."),Wh=h(),co=a("p"),Uh=o("This model inherits from "),ns=a("a"),Bh=o("PreTrainedModel"),Kh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rh=h(),po=a("p"),Qh=o("This model is also a PyTorch "),ho=a("a"),Hh=o("torch.nn.Module"),Vh=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yh=h(),H=a("div"),b(uo.$$.fragment),Gh=h(),Ye=a("p"),Jh=o("The "),os=a("a"),Xh=o("LukeForQuestionAnswering"),Zh=o(" forward method, overrides the "),qa=a("code"),eu=o("__call__"),tu=o(" special method."),nu=h(),b(Pt.$$.fragment),ou=h(),b(At.$$.fragment),su=h(),b(St.$$.fragment),this.h()},l(n){const g=vf('[data-svelte="svelte-1phssyn"]',document.head);d=r(g,"META",{name:!0,content:!0}),g.forEach(t),_=u(n),c=r(n,"H1",{class:!0});var mo=i(c);f=r(mo,"A",{id:!0,class:!0,href:!0});var Ca=i(f);y=r(Ca,"SPAN",{});var ja=i(y);T(l.$$.fragment,ja),ja.forEach(t),Ca.forEach(t),m=u(mo),E=r(mo,"SPAN",{});var Ma=i(E);li=s(Ma,"LUKE"),Ma.forEach(t),mo.forEach(t),Ga=u(n),Le=r(n,"H2",{class:!0});var fo=i(Le);Xe=r(fo,"A",{id:!0,class:!0,href:!0});var Pa=i(Xe);ys=r(Pa,"SPAN",{});var Aa=i(ys);T(Kt.$$.fragment,Aa),Aa.forEach(t),Pa.forEach(t),di=u(fo),bs=r(fo,"SPAN",{});var Sa=i(bs);ci=s(Sa,"Overview"),Sa.forEach(t),fo.forEach(t),Ja=u(n),Ze=r(n,"P",{});var go=i(Ze);pi=s(go,"The LUKE model was proposed in "),Rt=r(go,"A",{href:!0,rel:!0});var Oa=i(Rt);hi=s(Oa,"LUKE: Deep Contextualized Entity Representations with Entity-aware Self-attention"),Oa.forEach(t),ui=s(go,` by Ikuya Yamada, Akari Asai, Hiroyuki Shindo, Hideaki Takeda and Yuji Matsumoto.
It is based on RoBERTa and adds entity embeddings as well as an entity-aware self-attention mechanism, which helps
improve performance on various downstream tasks involving reasoning about entities such as named entity recognition,
extractive and cloze-style question answering, entity typing, and relation classification.`),go.forEach(t),Xa=u(n),ko=r(n,"P",{});var Ia=i(ko);mi=s(Ia,"The abstract from the paper is the following:"),Ia.forEach(t),Za=u(n),yo=r(n,"P",{});var Na=i(yo);Ts=r(Na,"EM",{});var Da=i(Ts);fi=s(Da,`Entity representations are useful in natural language tasks involving entities. In this paper, we propose new
pretrained contextualized representations of words and entities based on the bidirectional transformer. The proposed
model treats words and entities in a given text as independent tokens, and outputs contextualized representations of
them. Our model is trained using a new pretraining task based on the masked language model of BERT. The task involves
predicting randomly masked words and entities in a large entity-annotated corpus retrieved from Wikipedia. We also
propose an entity-aware self-attention mechanism that is an extension of the self-attention mechanism of the
transformer, and considers the types of tokens (words or entities) when computing attention scores. The proposed model
achieves impressive empirical performance on a wide range of entity-related tasks. In particular, it obtains
state-of-the-art results on five well-known datasets: Open Entity (entity typing), TACRED (relation classification),
CoNLL-2003 (named entity recognition), ReCoRD (cloze-style question answering), and SQuAD 1.1 (extractive question
answering).`),Da.forEach(t),Na.forEach(t),er=u(n),bo=r(n,"P",{});var Wa=i(bo);gi=s(Wa,"Tips:"),Wa.forEach(t),tr=u(n),ee=r(n,"UL",{});var le=i(ee);ws=r(le,"LI",{});var Ua=i(ws);Qt=r(Ua,"P",{});var _o=i(Qt);_i=s(_o,"This implementation is the same as "),To=r(_o,"A",{href:!0});var Ba=i(To);ki=s(Ba,"RobertaModel"),Ba.forEach(t),yi=s(_o,` with the addition of entity embeddings as well
as an entity-aware self-attention mechanism, which improves performance on tasks involving reasoning about entities.`),_o.forEach(t),Ua.forEach(t),bi=u(le),vs=r(le,"LI",{});var Ka=i(vs);j=r(Ka,"P",{});var B=i(j);Ti=s(B,"LUKE treats entities as input tokens; therefore, it takes "),Ls=r(B,"CODE",{});var Ra=i(Ls);wi=s(Ra,"entity_ids"),Ra.forEach(t),vi=s(B,", "),$s=r(B,"CODE",{});var Qa=i($s);Li=s(Qa,"entity_attention_mask"),Qa.forEach(t),$i=s(B,`,
`),zs=r(B,"CODE",{});var Ha=i(zs);zi=s(Ha,"entity_token_type_ids"),Ha.forEach(t),Ei=s(B," and "),Es=r(B,"CODE",{});var lu=i(Es);xi=s(lu,"entity_position_ids"),lu.forEach(t),Fi=s(B,` as extra input. You can obtain those using
`),wo=r(B,"A",{href:!0});var du=i(wo);qi=s(du,"LukeTokenizer"),du.forEach(t),Ci=s(B,"."),B.forEach(t),Ka.forEach(t),ji=u(le),Ht=r(le,"LI",{});var xr=i(Ht);te=r(xr,"P",{});var Ge=i(te);vo=r(Ge,"A",{href:!0});var cu=i(vo);Mi=s(cu,"LukeTokenizer"),cu.forEach(t),Pi=s(Ge," takes "),xs=r(Ge,"CODE",{});var pu=i(xs);Ai=s(pu,"entities"),pu.forEach(t),Si=s(Ge," and "),Fs=r(Ge,"CODE",{});var hu=i(Fs);Oi=s(hu,"entity_spans"),hu.forEach(t),Ii=s(Ge,` (character-based start and end
positions of the entities in the input text) as extra input. `),qs=r(Ge,"CODE",{});var uu=i(qs);Ni=s(uu,"entities"),uu.forEach(t),Di=s(Ge,` typically consist of [MASK] entities or
Wikipedia entities. The brief description when inputting these entities are as follows:`),Ge.forEach(t),Wi=u(xr),Vt=r(xr,"UL",{});var Fr=i(Vt);Lo=r(Fr,"LI",{});var au=i(Lo);Cs=r(au,"EM",{});var mu=i(Cs);Ui=s(mu,"Inputting [MASK] entities to compute entity representations"),mu.forEach(t),Bi=s(au,`: The [MASK] entity is used to mask entities to be
predicted during pretraining. When LUKE receives the [MASK] entity, it tries to predict the original entity by
gathering the information about the entity from the input text. Therefore, the [MASK] entity can be used to address
downstream tasks requiring the information of entities in text such as entity typing, relation classification, and
named entity recognition.`),au.forEach(t),Ki=u(Fr),$o=r(Fr,"LI",{});var ru=i($o);js=r(ru,"EM",{});var fu=i(js);Ri=s(fu,"Inputting Wikipedia entities to compute knowledge-enhanced token representations"),fu.forEach(t),Qi=s(ru,`: LUKE learns rich information
(or knowledge) about Wikipedia entities during pretraining and stores the information in its entity embedding. By
using Wikipedia entities as input tokens, LUKE outputs token representations enriched by the information stored in
the embeddings of these entities. This is particularly effective for tasks requiring real-world knowledge, such as
question answering.`),ru.forEach(t),Fr.forEach(t),xr.forEach(t),Hi=u(le),J=r(le,"LI",{});var pe=i(J);Ms=r(pe,"P",{});var gu=i(Ms);Vi=s(gu,"There are three head models for the former use case:"),gu.forEach(t),Yi=u(pe),$e=r(pe,"UL",{});var ss=i($e);et=r(ss,"LI",{});var Va=i(et);zo=r(Va,"A",{href:!0});var _u=i(zo);Gi=s(_u,"LukeForEntityClassification"),_u.forEach(t),Ji=s(Va,`, for tasks to classify a single entity in an input text such as
entity typing, e.g. the `),Yt=r(Va,"A",{href:!0,rel:!0});var ku=i(Yt);Xi=s(ku,"Open Entity dataset"),ku.forEach(t),Zi=s(Va,`.
This model places a linear head on top of the output entity representation.`),Va.forEach(t),el=u(ss),tt=r(ss,"LI",{});var Ya=i(tt);Eo=r(Ya,"A",{href:!0});var yu=i(Eo);tl=s(yu,"LukeForEntityPairClassification"),yu.forEach(t),nl=s(Ya,`, for tasks to classify the relationship between two entities
such as relation classification, e.g. the `),Gt=r(Ya,"A",{href:!0,rel:!0});var bu=i(Gt);ol=s(bu,"TACRED dataset"),bu.forEach(t),sl=s(Ya,`. This
model places a linear head on top of the concatenated output representation of the pair of given entities.`),Ya.forEach(t),al=u(ss),xo=r(ss,"LI",{});var iu=i(xo);Fo=r(iu,"A",{href:!0});var Tu=i(Fo);rl=s(Tu,"LukeForEntitySpanClassification"),Tu.forEach(t),il=s(iu,`, for tasks to classify the sequence of entity spans, such as
named entity recognition (NER). This model places a linear head on top of the output entity representations. You
can address NER using this model by inputting all possible entity spans in the text to the model.`),iu.forEach(t),ss.forEach(t),ll=u(pe),R=r(pe,"P",{});var de=i(R);qo=r(de,"A",{href:!0});var wu=i(qo);dl=s(wu,"LukeTokenizer"),wu.forEach(t),cl=s(de," has a "),Ps=r(de,"CODE",{});var vu=i(Ps);pl=s(vu,"task"),vu.forEach(t),hl=s(de,` argument, which enables you to easily create an input to these
head models by specifying `),As=r(de,"CODE",{});var Lu=i(As);ul=s(Lu,'task="entity_classification"'),Lu.forEach(t),ml=s(de,", "),Ss=r(de,"CODE",{});var $u=i(Ss);fl=s($u,'task="entity_pair_classification"'),$u.forEach(t),gl=s(de,`, or
`),Os=r(de,"CODE",{});var zu=i(Os);_l=s(zu,'task="entity_span_classification"'),zu.forEach(t),kl=s(de,". Please refer to the example code of each head models."),de.forEach(t),yl=u(pe),ze=r(pe,"P",{});var as=i(ze);bl=s(as,"A demo notebook on how to fine-tune "),Co=r(as,"A",{href:!0});var Eu=i(Co);Tl=s(Eu,"LukeForEntityPairClassification"),Eu.forEach(t),wl=s(as,` for relation
classification can be found `),Jt=r(as,"A",{href:!0,rel:!0});var xu=i(Jt);vl=s(xu,"here"),xu.forEach(t),Ll=s(as,"."),as.forEach(t),$l=u(pe),Xt=r(pe,"P",{});var qr=i(Xt);zl=s(qr,`There are also 3 notebooks available, which showcase how you can reproduce the results as reported in the paper with
the HuggingFace implementation of LUKE. They can be found `),Zt=r(qr,"A",{href:!0,rel:!0});var Fu=i(Zt);El=s(Fu,"here"),Fu.forEach(t),xl=s(qr,"."),qr.forEach(t),pe.forEach(t),le.forEach(t),nr=u(n),jo=r(n,"P",{});var qu=i(jo);Fl=s(qu,"Example:"),qu.forEach(t),or=u(n),T(en.$$.fragment,n),sr=u(n),ne=r(n,"P",{});var Ot=i(ne);ql=s(Ot,"This model was contributed by "),tn=r(Ot,"A",{href:!0,rel:!0});var Cu=i(tn);Cl=s(Cu,"ikuyamada"),Cu.forEach(t),jl=s(Ot," and "),nn=r(Ot,"A",{href:!0,rel:!0});var ju=i(nn);Ml=s(ju,"nielsr"),ju.forEach(t),Pl=s(Ot,". The original code can be found "),on=r(Ot,"A",{href:!0,rel:!0});var Mu=i(on);Al=s(Mu,"here"),Mu.forEach(t),Sl=s(Ot,"."),Ot.forEach(t),ar=u(n),Ee=r(n,"H2",{class:!0});var Cr=i(Ee);nt=r(Cr,"A",{id:!0,class:!0,href:!0});var Pu=i(nt);Is=r(Pu,"SPAN",{});var Au=i(Is);T(sn.$$.fragment,Au),Au.forEach(t),Pu.forEach(t),Ol=u(Cr),Ns=r(Cr,"SPAN",{});var Su=i(Ns);Il=s(Su,"LukeConfig"),Su.forEach(t),Cr.forEach(t),rr=u(n),X=r(n,"DIV",{class:!0});var It=i(X);T(an.$$.fragment,It),Nl=u(It),xe=r(It,"P",{});var rs=i(xe);Dl=s(rs,"This is the configuration class to store the configuration of a "),Mo=r(rs,"A",{href:!0});var Ou=i(Mo);Wl=s(Ou,"LukeModel"),Ou.forEach(t),Ul=s(rs,`. It is used to instantiate a LUKE
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LUKE
`),rn=r(rs,"A",{href:!0,rel:!0});var Iu=i(rn);Bl=s(Iu,"studio-ousia/luke-base"),Iu.forEach(t),Kl=s(rs," architecture."),rs.forEach(t),Rl=u(It),Fe=r(It,"P",{});var is=i(Fe);Ql=s(is,"Configuration objects inherit from "),Po=r(is,"A",{href:!0});var Nu=i(Po);Hl=s(Nu,"PretrainedConfig"),Nu.forEach(t),Vl=s(is,` and can be used to control the model outputs. Read the
documentation from `),Ao=r(is,"A",{href:!0});var Du=i(Ao);Yl=s(Du,"PretrainedConfig"),Du.forEach(t),Gl=s(is," for more information."),is.forEach(t),Jl=u(It),T(ot.$$.fragment,It),It.forEach(t),ir=u(n),qe=r(n,"H2",{class:!0});var jr=i(qe);st=r(jr,"A",{id:!0,class:!0,href:!0});var Wu=i(st);Ds=r(Wu,"SPAN",{});var Uu=i(Ds);T(ln.$$.fragment,Uu),Uu.forEach(t),Wu.forEach(t),Xl=u(jr),Ws=r(jr,"SPAN",{});var Bu=i(Ws);Zl=s(Bu,"LukeTokenizer"),Bu.forEach(t),jr.forEach(t),lr=u(n),M=r(n,"DIV",{class:!0});var he=i(M);T(dn.$$.fragment,he),ed=u(he),Us=r(he,"P",{});var Ku=i(Us);td=s(Ku,"Construct a LUKE tokenizer."),Ku.forEach(t),nd=u(he),F=r(he,"P",{});var C=i(F);od=s(C,"This tokenizer inherits from "),So=r(C,"A",{href:!0});var Ru=i(So);sd=s(Ru,"RobertaTokenizer"),Ru.forEach(t),ad=s(C,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods. Compared to `),Oo=r(C,"A",{href:!0});var Qu=i(Oo);rd=s(Qu,"RobertaTokenizer"),Qu.forEach(t),id=s(C,", "),Io=r(C,"A",{href:!0});var Hu=i(Io);ld=s(Hu,"LukeTokenizer"),Hu.forEach(t),dd=s(C,`
also creates entity sequences, namely `),Bs=r(C,"CODE",{});var Vu=i(Bs);cd=s(Vu,"entity_ids"),Vu.forEach(t),pd=s(C,", "),Ks=r(C,"CODE",{});var Yu=i(Ks);hd=s(Yu,"entity_attention_mask"),Yu.forEach(t),ud=s(C,", "),Rs=r(C,"CODE",{});var Gu=i(Rs);md=s(Gu,"entity_token_type_ids"),Gu.forEach(t),fd=s(C,`, and
`),Qs=r(C,"CODE",{});var Ju=i(Qs);gd=s(Ju,"entity_position_ids"),Ju.forEach(t),_d=s(C," to be used by the LUKE model."),C.forEach(t),kd=u(he),at=r(he,"DIV",{class:!0});var Mr=i(at);T(cn.$$.fragment,Mr),yd=u(Mr),Hs=r(Mr,"P",{});var Xu=i(Hs);bd=s(Xu,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences, depending on the task you want to prepare them for.`),Xu.forEach(t),Mr.forEach(t),Td=u(he),No=r(he,"DIV",{class:!0});var Zu=i(No);T(pn.$$.fragment,Zu),Zu.forEach(t),he.forEach(t),dr=u(n),Ce=r(n,"H2",{class:!0});var Pr=i(Ce);rt=r(Pr,"A",{id:!0,class:!0,href:!0});var em=i(rt);Vs=r(em,"SPAN",{});var tm=i(Vs);T(hn.$$.fragment,tm),tm.forEach(t),em.forEach(t),wd=u(Pr),Ys=r(Pr,"SPAN",{});var nm=i(Ys);vd=s(nm,"LukeModel"),nm.forEach(t),Pr.forEach(t),cr=u(n),P=r(n,"DIV",{class:!0});var ue=i(P);T(un.$$.fragment,ue),Ld=u(ue),Gs=r(ue,"P",{});var om=i(Gs);$d=s(om,"The bare LUKE model transformer outputting raw hidden-states for both word tokens and entities without any specific head on top."),om.forEach(t),zd=u(ue),mn=r(ue,"P",{});var Ar=i(mn);Ed=s(Ar,"This model inherits from "),Do=r(Ar,"A",{href:!0});var sm=i(Do);xd=s(sm,"PreTrainedModel"),sm.forEach(t),Fd=s(Ar,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ar.forEach(t),qd=u(ue),fn=r(ue,"P",{});var Sr=i(fn);Cd=s(Sr,"This model is also a PyTorch "),gn=r(Sr,"A",{href:!0,rel:!0});var am=i(gn);jd=s(am,"torch.nn.Module"),am.forEach(t),Md=s(Sr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sr.forEach(t),Pd=u(ue),oe=r(ue,"DIV",{class:!0});var Nt=i(oe);T(_n.$$.fragment,Nt),Ad=u(Nt),je=r(Nt,"P",{});var ls=i(je);Sd=s(ls,"The "),Wo=r(ls,"A",{href:!0});var rm=i(Wo);Od=s(rm,"LukeModel"),rm.forEach(t),Id=s(ls," forward method, overrides the "),Js=r(ls,"CODE",{});var im=i(Js);Nd=s(im,"__call__"),im.forEach(t),Dd=s(ls," special method."),ls.forEach(t),Wd=u(Nt),T(it.$$.fragment,Nt),Ud=u(Nt),T(lt.$$.fragment,Nt),Nt.forEach(t),ue.forEach(t),pr=u(n),Me=r(n,"H2",{class:!0});var Or=i(Me);dt=r(Or,"A",{id:!0,class:!0,href:!0});var lm=i(dt);Xs=r(lm,"SPAN",{});var dm=i(Xs);T(kn.$$.fragment,dm),dm.forEach(t),lm.forEach(t),Bd=u(Or),Zs=r(Or,"SPAN",{});var cm=i(Zs);Kd=s(cm,"LukeForMaskedLM"),cm.forEach(t),Or.forEach(t),hr=u(n),A=r(n,"DIV",{class:!0});var me=i(A);T(yn.$$.fragment,me),Rd=u(me),ea=r(me,"P",{});var pm=i(ea);Qd=s(pm,`The LUKE model with a language modeling head and entity prediction head on top for masked language modeling and
masked entity prediction.`),pm.forEach(t),Hd=u(me),bn=r(me,"P",{});var Ir=i(bn);Vd=s(Ir,"This model inherits from "),Uo=r(Ir,"A",{href:!0});var hm=i(Uo);Yd=s(hm,"PreTrainedModel"),hm.forEach(t),Gd=s(Ir,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ir.forEach(t),Jd=u(me),Tn=r(me,"P",{});var Nr=i(Tn);Xd=s(Nr,"This model is also a PyTorch "),wn=r(Nr,"A",{href:!0,rel:!0});var um=i(wn);Zd=s(um,"torch.nn.Module"),um.forEach(t),ec=s(Nr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nr.forEach(t),tc=u(me),ce=r(me,"DIV",{class:!0});var ds=i(ce);T(vn.$$.fragment,ds),nc=u(ds),Pe=r(ds,"P",{});var cs=i(Pe);oc=s(cs,"The "),Bo=r(cs,"A",{href:!0});var mm=i(Bo);sc=s(mm,"LukeForMaskedLM"),mm.forEach(t),ac=s(cs," forward method, overrides the "),ta=r(cs,"CODE",{});var fm=i(ta);rc=s(fm,"__call__"),fm.forEach(t),ic=s(cs," special method."),cs.forEach(t),lc=u(ds),T(ct.$$.fragment,ds),ds.forEach(t),me.forEach(t),ur=u(n),Ae=r(n,"H2",{class:!0});var Dr=i(Ae);pt=r(Dr,"A",{id:!0,class:!0,href:!0});var gm=i(pt);na=r(gm,"SPAN",{});var _m=i(na);T(Ln.$$.fragment,_m),_m.forEach(t),gm.forEach(t),dc=u(Dr),oa=r(Dr,"SPAN",{});var km=i(oa);cc=s(km,"LukeForEntityClassification"),km.forEach(t),Dr.forEach(t),mr=u(n),S=r(n,"DIV",{class:!0});var fe=i(S);T($n.$$.fragment,fe),pc=u(fe),sa=r(fe,"P",{});var ym=i(sa);hc=s(ym,`The LUKE model with a classification head on top (a linear layer on top of the hidden state of the first entity
token) for entity classification tasks, such as Open Entity.`),ym.forEach(t),uc=u(fe),zn=r(fe,"P",{});var Wr=i(zn);mc=s(Wr,"This model inherits from "),Ko=r(Wr,"A",{href:!0});var bm=i(Ko);fc=s(bm,"PreTrainedModel"),bm.forEach(t),gc=s(Wr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wr.forEach(t),_c=u(fe),En=r(fe,"P",{});var Ur=i(En);kc=s(Ur,"This model is also a PyTorch "),xn=r(Ur,"A",{href:!0,rel:!0});var Tm=i(xn);yc=s(Tm,"torch.nn.Module"),Tm.forEach(t),bc=s(Ur,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ur.forEach(t),Tc=u(fe),se=r(fe,"DIV",{class:!0});var Dt=i(se);T(Fn.$$.fragment,Dt),wc=u(Dt),Se=r(Dt,"P",{});var ps=i(Se);vc=s(ps,"The "),Ro=r(ps,"A",{href:!0});var wm=i(Ro);Lc=s(wm,"LukeForEntityClassification"),wm.forEach(t),$c=s(ps," forward method, overrides the "),aa=r(ps,"CODE",{});var vm=i(aa);zc=s(vm,"__call__"),vm.forEach(t),Ec=s(ps," special method."),ps.forEach(t),xc=u(Dt),T(ht.$$.fragment,Dt),Fc=u(Dt),T(ut.$$.fragment,Dt),Dt.forEach(t),fe.forEach(t),fr=u(n),Oe=r(n,"H2",{class:!0});var Br=i(Oe);mt=r(Br,"A",{id:!0,class:!0,href:!0});var Lm=i(mt);ra=r(Lm,"SPAN",{});var $m=i(ra);T(qn.$$.fragment,$m),$m.forEach(t),Lm.forEach(t),qc=u(Br),ia=r(Br,"SPAN",{});var zm=i(ia);Cc=s(zm,"LukeForEntityPairClassification"),zm.forEach(t),Br.forEach(t),gr=u(n),O=r(n,"DIV",{class:!0});var ge=i(O);T(Cn.$$.fragment,ge),jc=u(ge),la=r(ge,"P",{});var Em=i(la);Mc=s(Em,`The LUKE model with a classification head on top (a linear layer on top of the hidden states of the two entity
tokens) for entity pair classification tasks, such as TACRED.`),Em.forEach(t),Pc=u(ge),jn=r(ge,"P",{});var Kr=i(jn);Ac=s(Kr,"This model inherits from "),Qo=r(Kr,"A",{href:!0});var xm=i(Qo);Sc=s(xm,"PreTrainedModel"),xm.forEach(t),Oc=s(Kr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kr.forEach(t),Ic=u(ge),Mn=r(ge,"P",{});var Rr=i(Mn);Nc=s(Rr,"This model is also a PyTorch "),Pn=r(Rr,"A",{href:!0,rel:!0});var Fm=i(Pn);Dc=s(Fm,"torch.nn.Module"),Fm.forEach(t),Wc=s(Rr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rr.forEach(t),Uc=u(ge),ae=r(ge,"DIV",{class:!0});var Wt=i(ae);T(An.$$.fragment,Wt),Bc=u(Wt),Ie=r(Wt,"P",{});var hs=i(Ie);Kc=s(hs,"The "),Ho=r(hs,"A",{href:!0});var qm=i(Ho);Rc=s(qm,"LukeForEntityPairClassification"),qm.forEach(t),Qc=s(hs," forward method, overrides the "),da=r(hs,"CODE",{});var Cm=i(da);Hc=s(Cm,"__call__"),Cm.forEach(t),Vc=s(hs," special method."),hs.forEach(t),Yc=u(Wt),T(ft.$$.fragment,Wt),Gc=u(Wt),T(gt.$$.fragment,Wt),Wt.forEach(t),ge.forEach(t),_r=u(n),Ne=r(n,"H2",{class:!0});var Qr=i(Ne);_t=r(Qr,"A",{id:!0,class:!0,href:!0});var jm=i(_t);ca=r(jm,"SPAN",{});var Mm=i(ca);T(Sn.$$.fragment,Mm),Mm.forEach(t),jm.forEach(t),Jc=u(Qr),pa=r(Qr,"SPAN",{});var Pm=i(pa);Xc=s(Pm,"LukeForEntitySpanClassification"),Pm.forEach(t),Qr.forEach(t),kr=u(n),I=r(n,"DIV",{class:!0});var _e=i(I);T(On.$$.fragment,_e),Zc=u(_e),ha=r(_e,"P",{});var Am=i(ha);ep=s(Am,`The LUKE model with a span classification head on top (a linear layer on top of the hidden states output) for tasks
such as named entity recognition.`),Am.forEach(t),tp=u(_e),In=r(_e,"P",{});var Hr=i(In);np=s(Hr,"This model inherits from "),Vo=r(Hr,"A",{href:!0});var Sm=i(Vo);op=s(Sm,"PreTrainedModel"),Sm.forEach(t),sp=s(Hr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hr.forEach(t),ap=u(_e),Nn=r(_e,"P",{});var Vr=i(Nn);rp=s(Vr,"This model is also a PyTorch "),Dn=r(Vr,"A",{href:!0,rel:!0});var Om=i(Dn);ip=s(Om,"torch.nn.Module"),Om.forEach(t),lp=s(Vr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vr.forEach(t),dp=u(_e),re=r(_e,"DIV",{class:!0});var Ut=i(re);T(Wn.$$.fragment,Ut),cp=u(Ut),De=r(Ut,"P",{});var us=i(De);pp=s(us,"The "),Yo=r(us,"A",{href:!0});var Im=i(Yo);hp=s(Im,"LukeForEntitySpanClassification"),Im.forEach(t),up=s(us," forward method, overrides the "),ua=r(us,"CODE",{});var Nm=i(ua);mp=s(Nm,"__call__"),Nm.forEach(t),fp=s(us," special method."),us.forEach(t),gp=u(Ut),T(kt.$$.fragment,Ut),_p=u(Ut),T(yt.$$.fragment,Ut),Ut.forEach(t),_e.forEach(t),yr=u(n),We=r(n,"H2",{class:!0});var Yr=i(We);bt=r(Yr,"A",{id:!0,class:!0,href:!0});var Dm=i(bt);ma=r(Dm,"SPAN",{});var Wm=i(ma);T(Un.$$.fragment,Wm),Wm.forEach(t),Dm.forEach(t),kp=u(Yr),fa=r(Yr,"SPAN",{});var Um=i(fa);yp=s(Um,"LukeForSequenceClassification"),Um.forEach(t),Yr.forEach(t),br=u(n),N=r(n,"DIV",{class:!0});var ke=i(N);T(Bn.$$.fragment,ke),bp=u(ke),ga=r(ke,"P",{});var Bm=i(ga);Tp=s(Bm,`The LUKE Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Bm.forEach(t),wp=u(ke),Kn=r(ke,"P",{});var Gr=i(Kn);vp=s(Gr,"This model inherits from "),Go=r(Gr,"A",{href:!0});var Km=i(Go);Lp=s(Km,"PreTrainedModel"),Km.forEach(t),$p=s(Gr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gr.forEach(t),zp=u(ke),Rn=r(ke,"P",{});var Jr=i(Rn);Ep=s(Jr,"This model is also a PyTorch "),Qn=r(Jr,"A",{href:!0,rel:!0});var Rm=i(Qn);xp=s(Rm,"torch.nn.Module"),Rm.forEach(t),Fp=s(Jr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jr.forEach(t),qp=u(ke),q=r(ke,"DIV",{class:!0});var V=i(q);T(Hn.$$.fragment,V),Cp=u(V),Ue=r(V,"P",{});var ms=i(Ue);jp=s(ms,"The "),Jo=r(ms,"A",{href:!0});var Qm=i(Jo);Mp=s(Qm,"LukeForSequenceClassification"),Qm.forEach(t),Pp=s(ms," forward method, overrides the "),_a=r(ms,"CODE",{});var Hm=i(_a);Ap=s(Hm,"__call__"),Hm.forEach(t),Sp=s(ms," special method."),ms.forEach(t),Op=u(V),T(Tt.$$.fragment,V),Ip=u(V),T(wt.$$.fragment,V),Np=u(V),T(vt.$$.fragment,V),Dp=u(V),T(Lt.$$.fragment,V),Wp=u(V),T($t.$$.fragment,V),V.forEach(t),ke.forEach(t),Tr=u(n),Be=r(n,"H2",{class:!0});var Xr=i(Be);zt=r(Xr,"A",{id:!0,class:!0,href:!0});var Vm=i(zt);ka=r(Vm,"SPAN",{});var Ym=i(ka);T(Vn.$$.fragment,Ym),Ym.forEach(t),Vm.forEach(t),Up=u(Xr),ya=r(Xr,"SPAN",{});var Gm=i(ya);Bp=s(Gm,"LukeForMultipleChoice"),Gm.forEach(t),Xr.forEach(t),wr=u(n),D=r(n,"DIV",{class:!0});var ye=i(D);T(Yn.$$.fragment,ye),Kp=u(ye),ba=r(ye,"P",{});var Jm=i(ba);Rp=s(Jm,`The LUKE Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Jm.forEach(t),Qp=u(ye),Gn=r(ye,"P",{});var Zr=i(Gn);Hp=s(Zr,"This model inherits from "),Xo=r(Zr,"A",{href:!0});var Xm=i(Xo);Vp=s(Xm,"PreTrainedModel"),Xm.forEach(t),Yp=s(Zr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zr.forEach(t),Gp=u(ye),Jn=r(ye,"P",{});var ei=i(Jn);Jp=s(ei,"This model is also a PyTorch "),Xn=r(ei,"A",{href:!0,rel:!0});var Zm=i(Xn);Xp=s(Zm,"torch.nn.Module"),Zm.forEach(t),Zp=s(ei,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ei.forEach(t),eh=u(ye),ie=r(ye,"DIV",{class:!0});var Bt=i(ie);T(Zn.$$.fragment,Bt),th=u(Bt),Ke=r(Bt,"P",{});var fs=i(Ke);nh=s(fs,"The "),Zo=r(fs,"A",{href:!0});var ef=i(Zo);oh=s(ef,"LukeForMultipleChoice"),ef.forEach(t),sh=s(fs," forward method, overrides the "),Ta=r(fs,"CODE",{});var tf=i(Ta);ah=s(tf,"__call__"),tf.forEach(t),rh=s(fs," special method."),fs.forEach(t),ih=u(Bt),T(Et.$$.fragment,Bt),lh=u(Bt),T(xt.$$.fragment,Bt),Bt.forEach(t),ye.forEach(t),vr=u(n),Re=r(n,"H2",{class:!0});var ti=i(Re);Ft=r(ti,"A",{id:!0,class:!0,href:!0});var nf=i(Ft);wa=r(nf,"SPAN",{});var of=i(wa);T(eo.$$.fragment,of),of.forEach(t),nf.forEach(t),dh=u(ti),va=r(ti,"SPAN",{});var sf=i(va);ch=s(sf,"LukeForTokenClassification"),sf.forEach(t),ti.forEach(t),Lr=u(n),W=r(n,"DIV",{class:!0});var be=i(W);T(to.$$.fragment,be),ph=u(be),no=r(be,"P",{});var ni=i(no);hh=s(ni,`The LUKE Model with a token classification head on top (a linear layer on top of the hidden-states output). To
solve Named-Entity Recognition (NER) task using LUKE, `),La=r(ni,"CODE",{});var af=i(La);uh=s(af,"LukeForEntitySpanClassification"),af.forEach(t),mh=s(ni,` is more suitable than this
class.`),ni.forEach(t),fh=u(be),oo=r(be,"P",{});var oi=i(oo);gh=s(oi,"This model inherits from "),es=r(oi,"A",{href:!0});var rf=i(es);_h=s(rf,"PreTrainedModel"),rf.forEach(t),kh=s(oi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),oi.forEach(t),yh=u(be),so=r(be,"P",{});var si=i(so);bh=s(si,"This model is also a PyTorch "),ao=r(si,"A",{href:!0,rel:!0});var lf=i(ao);Th=s(lf,"torch.nn.Module"),lf.forEach(t),wh=s(si,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),si.forEach(t),vh=u(be),Q=r(be,"DIV",{class:!0});var Te=i(Q);T(ro.$$.fragment,Te),Lh=u(Te),Qe=r(Te,"P",{});var gs=i(Qe);$h=s(gs,"The "),ts=r(gs,"A",{href:!0});var df=i(ts);zh=s(df,"LukeForTokenClassification"),df.forEach(t),Eh=s(gs," forward method, overrides the "),$a=r(gs,"CODE",{});var cf=i($a);xh=s(cf,"__call__"),cf.forEach(t),Fh=s(gs," special method."),gs.forEach(t),qh=u(Te),T(qt.$$.fragment,Te),Ch=u(Te),T(Ct.$$.fragment,Te),jh=u(Te),T(jt.$$.fragment,Te),Te.forEach(t),be.forEach(t),$r=u(n),He=r(n,"H2",{class:!0});var ai=i(He);Mt=r(ai,"A",{id:!0,class:!0,href:!0});var pf=i(Mt);za=r(pf,"SPAN",{});var hf=i(za);T(io.$$.fragment,hf),hf.forEach(t),pf.forEach(t),Mh=u(ai),Ea=r(ai,"SPAN",{});var uf=i(Ea);Ph=s(uf,"LukeForQuestionAnswering"),uf.forEach(t),ai.forEach(t),zr=u(n),U=r(n,"DIV",{class:!0});var we=i(U);T(lo.$$.fragment,we),Ah=u(we),Ve=r(we,"P",{});var _s=i(Ve);Sh=s(_s,`The LUKE Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),xa=r(_s,"CODE",{});var mf=i(xa);Oh=s(mf,"span start logits"),mf.forEach(t),Ih=s(_s," and "),Fa=r(_s,"CODE",{});var ff=i(Fa);Nh=s(ff,"span end logits"),ff.forEach(t),Dh=s(_s,")."),_s.forEach(t),Wh=u(we),co=r(we,"P",{});var ri=i(co);Uh=s(ri,"This model inherits from "),ns=r(ri,"A",{href:!0});var gf=i(ns);Bh=s(gf,"PreTrainedModel"),gf.forEach(t),Kh=s(ri,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ri.forEach(t),Rh=u(we),po=r(we,"P",{});var ii=i(po);Qh=s(ii,"This model is also a PyTorch "),ho=r(ii,"A",{href:!0,rel:!0});var _f=i(ho);Hh=s(_f,"torch.nn.Module"),_f.forEach(t),Vh=s(ii,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ii.forEach(t),Yh=u(we),H=r(we,"DIV",{class:!0});var ve=i(H);T(uo.$$.fragment,ve),Gh=u(ve),Ye=r(ve,"P",{});var ks=i(Ye);Jh=s(ks,"The "),os=r(ks,"A",{href:!0});var kf=i(os);Xh=s(kf,"LukeForQuestionAnswering"),kf.forEach(t),Zh=s(ks," forward method, overrides the "),qa=r(ks,"CODE",{});var yf=i(qa);eu=s(yf,"__call__"),yf.forEach(t),tu=s(ks," special method."),ks.forEach(t),nu=u(ve),T(Pt.$$.fragment,ve),ou=u(ve),T(At.$$.fragment,ve),su=u(ve),T(St.$$.fragment,ve),ve.forEach(t),we.forEach(t),this.h()},h(){p(d,"name","hf:doc:metadata"),p(d,"content",JSON.stringify(Yf)),p(f,"id","luke"),p(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(f,"href","#luke"),p(c,"class","relative group"),p(Xe,"id","overview"),p(Xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Xe,"href","#overview"),p(Le,"class","relative group"),p(Rt,"href","https://arxiv.org/abs/2010.01057"),p(Rt,"rel","nofollow"),p(To,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaModel"),p(wo,"href","/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer"),p(vo,"href","/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer"),p(zo,"href","/docs/transformers/main/en/model_doc/luke#transformers.LukeForEntityClassification"),p(Yt,"href","https://www.cs.utexas.edu/~eunsol/html_pages/open_entity.html"),p(Yt,"rel","nofollow"),p(Eo,"href","/docs/transformers/main/en/model_doc/luke#transformers.LukeForEntityPairClassification"),p(Gt,"href","https://nlp.stanford.edu/projects/tacred/"),p(Gt,"rel","nofollow"),p(Fo,"href","/docs/transformers/main/en/model_doc/luke#transformers.LukeForEntitySpanClassification"),p(qo,"href","/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer"),p(Co,"href","/docs/transformers/main/en/model_doc/luke#transformers.LukeForEntityPairClassification"),p(Jt,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/LUKE"),p(Jt,"rel","nofollow"),p(Zt,"href","https://github.com/studio-ousia/luke/tree/master/notebooks"),p(Zt,"rel","nofollow"),p(tn,"href","https://huggingface.co/ikuyamada"),p(tn,"rel","nofollow"),p(nn,"href","https://huggingface.co/nielsr"),p(nn,"rel","nofollow"),p(on,"href","https://github.com/studio-ousia/luke"),p(on,"rel","nofollow"),p(nt,"id","transformers.LukeConfig"),p(nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(nt,"href","#transformers.LukeConfig"),p(Ee,"class","relative group"),p(Mo,"href","/docs/transformers/main/en/model_doc/luke#transformers.LukeModel"),p(rn,"href","https://huggingface.co/studio-ousia/luke-base"),p(rn,"rel","nofollow"),p(Po,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),p(Ao,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),p(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(st,"id","transformers.LukeTokenizer"),p(st,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(st,"href","#transformers.LukeTokenizer"),p(qe,"class","relative group"),p(So,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),p(Oo,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),p(Io,"href","/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer"),p(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(No,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(rt,"id","transformers.LukeModel"),p(rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(rt,"href","#transformers.LukeModel"),p(Ce,"class","relative group"),p(Do,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),p(gn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(gn,"rel","nofollow"),p(Wo,"href","/docs/transformers/main/en/model_doc/luke#transformers.LukeModel"),p(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(dt,"id","transformers.LukeForMaskedLM"),p(dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(dt,"href","#transformers.LukeForMaskedLM"),p(Me,"class","relative group"),p(Uo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),p(wn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(wn,"rel","nofollow"),p(Bo,"href","/docs/transformers/main/en/model_doc/luke#transformers.LukeForMaskedLM"),p(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(pt,"id","transformers.LukeForEntityClassification"),p(pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(pt,"href","#transformers.LukeForEntityClassification"),p(Ae,"class","relative group"),p(Ko,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),p(xn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(xn,"rel","nofollow"),p(Ro,"href","/docs/transformers/main/en/model_doc/luke#transformers.LukeForEntityClassification"),p(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(mt,"id","transformers.LukeForEntityPairClassification"),p(mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(mt,"href","#transformers.LukeForEntityPairClassification"),p(Oe,"class","relative group"),p(Qo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),p(Pn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Pn,"rel","nofollow"),p(Ho,"href","/docs/transformers/main/en/model_doc/luke#transformers.LukeForEntityPairClassification"),p(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(_t,"id","transformers.LukeForEntitySpanClassification"),p(_t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(_t,"href","#transformers.LukeForEntitySpanClassification"),p(Ne,"class","relative group"),p(Vo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),p(Dn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Dn,"rel","nofollow"),p(Yo,"href","/docs/transformers/main/en/model_doc/luke#transformers.LukeForEntitySpanClassification"),p(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(bt,"id","transformers.LukeForSequenceClassification"),p(bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(bt,"href","#transformers.LukeForSequenceClassification"),p(We,"class","relative group"),p(Go,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),p(Qn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Qn,"rel","nofollow"),p(Jo,"href","/docs/transformers/main/en/model_doc/luke#transformers.LukeForSequenceClassification"),p(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(zt,"id","transformers.LukeForMultipleChoice"),p(zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(zt,"href","#transformers.LukeForMultipleChoice"),p(Be,"class","relative group"),p(Xo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),p(Xn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Xn,"rel","nofollow"),p(Zo,"href","/docs/transformers/main/en/model_doc/luke#transformers.LukeForMultipleChoice"),p(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ft,"id","transformers.LukeForTokenClassification"),p(Ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ft,"href","#transformers.LukeForTokenClassification"),p(Re,"class","relative group"),p(es,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),p(ao,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(ao,"rel","nofollow"),p(ts,"href","/docs/transformers/main/en/model_doc/luke#transformers.LukeForTokenClassification"),p(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Mt,"id","transformers.LukeForQuestionAnswering"),p(Mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Mt,"href","#transformers.LukeForQuestionAnswering"),p(He,"class","relative group"),p(ns,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),p(ho,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(ho,"rel","nofollow"),p(os,"href","/docs/transformers/main/en/model_doc/luke#transformers.LukeForQuestionAnswering"),p(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(n,g){e(document.head,d),k(n,_,g),k(n,c,g),e(c,f),e(f,y),w(l,y,null),e(c,m),e(c,E),e(E,li),k(n,Ga,g),k(n,Le,g),e(Le,Xe),e(Xe,ys),w(Kt,ys,null),e(Le,di),e(Le,bs),e(bs,ci),k(n,Ja,g),k(n,Ze,g),e(Ze,pi),e(Ze,Rt),e(Rt,hi),e(Ze,ui),k(n,Xa,g),k(n,ko,g),e(ko,mi),k(n,Za,g),k(n,yo,g),e(yo,Ts),e(Ts,fi),k(n,er,g),k(n,bo,g),e(bo,gi),k(n,tr,g),k(n,ee,g),e(ee,ws),e(ws,Qt),e(Qt,_i),e(Qt,To),e(To,ki),e(Qt,yi),e(ee,bi),e(ee,vs),e(vs,j),e(j,Ti),e(j,Ls),e(Ls,wi),e(j,vi),e(j,$s),e($s,Li),e(j,$i),e(j,zs),e(zs,zi),e(j,Ei),e(j,Es),e(Es,xi),e(j,Fi),e(j,wo),e(wo,qi),e(j,Ci),e(ee,ji),e(ee,Ht),e(Ht,te),e(te,vo),e(vo,Mi),e(te,Pi),e(te,xs),e(xs,Ai),e(te,Si),e(te,Fs),e(Fs,Oi),e(te,Ii),e(te,qs),e(qs,Ni),e(te,Di),e(Ht,Wi),e(Ht,Vt),e(Vt,Lo),e(Lo,Cs),e(Cs,Ui),e(Lo,Bi),e(Vt,Ki),e(Vt,$o),e($o,js),e(js,Ri),e($o,Qi),e(ee,Hi),e(ee,J),e(J,Ms),e(Ms,Vi),e(J,Yi),e(J,$e),e($e,et),e(et,zo),e(zo,Gi),e(et,Ji),e(et,Yt),e(Yt,Xi),e(et,Zi),e($e,el),e($e,tt),e(tt,Eo),e(Eo,tl),e(tt,nl),e(tt,Gt),e(Gt,ol),e(tt,sl),e($e,al),e($e,xo),e(xo,Fo),e(Fo,rl),e(xo,il),e(J,ll),e(J,R),e(R,qo),e(qo,dl),e(R,cl),e(R,Ps),e(Ps,pl),e(R,hl),e(R,As),e(As,ul),e(R,ml),e(R,Ss),e(Ss,fl),e(R,gl),e(R,Os),e(Os,_l),e(R,kl),e(J,yl),e(J,ze),e(ze,bl),e(ze,Co),e(Co,Tl),e(ze,wl),e(ze,Jt),e(Jt,vl),e(ze,Ll),e(J,$l),e(J,Xt),e(Xt,zl),e(Xt,Zt),e(Zt,El),e(Xt,xl),k(n,nr,g),k(n,jo,g),e(jo,Fl),k(n,or,g),w(en,n,g),k(n,sr,g),k(n,ne,g),e(ne,ql),e(ne,tn),e(tn,Cl),e(ne,jl),e(ne,nn),e(nn,Ml),e(ne,Pl),e(ne,on),e(on,Al),e(ne,Sl),k(n,ar,g),k(n,Ee,g),e(Ee,nt),e(nt,Is),w(sn,Is,null),e(Ee,Ol),e(Ee,Ns),e(Ns,Il),k(n,rr,g),k(n,X,g),w(an,X,null),e(X,Nl),e(X,xe),e(xe,Dl),e(xe,Mo),e(Mo,Wl),e(xe,Ul),e(xe,rn),e(rn,Bl),e(xe,Kl),e(X,Rl),e(X,Fe),e(Fe,Ql),e(Fe,Po),e(Po,Hl),e(Fe,Vl),e(Fe,Ao),e(Ao,Yl),e(Fe,Gl),e(X,Jl),w(ot,X,null),k(n,ir,g),k(n,qe,g),e(qe,st),e(st,Ds),w(ln,Ds,null),e(qe,Xl),e(qe,Ws),e(Ws,Zl),k(n,lr,g),k(n,M,g),w(dn,M,null),e(M,ed),e(M,Us),e(Us,td),e(M,nd),e(M,F),e(F,od),e(F,So),e(So,sd),e(F,ad),e(F,Oo),e(Oo,rd),e(F,id),e(F,Io),e(Io,ld),e(F,dd),e(F,Bs),e(Bs,cd),e(F,pd),e(F,Ks),e(Ks,hd),e(F,ud),e(F,Rs),e(Rs,md),e(F,fd),e(F,Qs),e(Qs,gd),e(F,_d),e(M,kd),e(M,at),w(cn,at,null),e(at,yd),e(at,Hs),e(Hs,bd),e(M,Td),e(M,No),w(pn,No,null),k(n,dr,g),k(n,Ce,g),e(Ce,rt),e(rt,Vs),w(hn,Vs,null),e(Ce,wd),e(Ce,Ys),e(Ys,vd),k(n,cr,g),k(n,P,g),w(un,P,null),e(P,Ld),e(P,Gs),e(Gs,$d),e(P,zd),e(P,mn),e(mn,Ed),e(mn,Do),e(Do,xd),e(mn,Fd),e(P,qd),e(P,fn),e(fn,Cd),e(fn,gn),e(gn,jd),e(fn,Md),e(P,Pd),e(P,oe),w(_n,oe,null),e(oe,Ad),e(oe,je),e(je,Sd),e(je,Wo),e(Wo,Od),e(je,Id),e(je,Js),e(Js,Nd),e(je,Dd),e(oe,Wd),w(it,oe,null),e(oe,Ud),w(lt,oe,null),k(n,pr,g),k(n,Me,g),e(Me,dt),e(dt,Xs),w(kn,Xs,null),e(Me,Bd),e(Me,Zs),e(Zs,Kd),k(n,hr,g),k(n,A,g),w(yn,A,null),e(A,Rd),e(A,ea),e(ea,Qd),e(A,Hd),e(A,bn),e(bn,Vd),e(bn,Uo),e(Uo,Yd),e(bn,Gd),e(A,Jd),e(A,Tn),e(Tn,Xd),e(Tn,wn),e(wn,Zd),e(Tn,ec),e(A,tc),e(A,ce),w(vn,ce,null),e(ce,nc),e(ce,Pe),e(Pe,oc),e(Pe,Bo),e(Bo,sc),e(Pe,ac),e(Pe,ta),e(ta,rc),e(Pe,ic),e(ce,lc),w(ct,ce,null),k(n,ur,g),k(n,Ae,g),e(Ae,pt),e(pt,na),w(Ln,na,null),e(Ae,dc),e(Ae,oa),e(oa,cc),k(n,mr,g),k(n,S,g),w($n,S,null),e(S,pc),e(S,sa),e(sa,hc),e(S,uc),e(S,zn),e(zn,mc),e(zn,Ko),e(Ko,fc),e(zn,gc),e(S,_c),e(S,En),e(En,kc),e(En,xn),e(xn,yc),e(En,bc),e(S,Tc),e(S,se),w(Fn,se,null),e(se,wc),e(se,Se),e(Se,vc),e(Se,Ro),e(Ro,Lc),e(Se,$c),e(Se,aa),e(aa,zc),e(Se,Ec),e(se,xc),w(ht,se,null),e(se,Fc),w(ut,se,null),k(n,fr,g),k(n,Oe,g),e(Oe,mt),e(mt,ra),w(qn,ra,null),e(Oe,qc),e(Oe,ia),e(ia,Cc),k(n,gr,g),k(n,O,g),w(Cn,O,null),e(O,jc),e(O,la),e(la,Mc),e(O,Pc),e(O,jn),e(jn,Ac),e(jn,Qo),e(Qo,Sc),e(jn,Oc),e(O,Ic),e(O,Mn),e(Mn,Nc),e(Mn,Pn),e(Pn,Dc),e(Mn,Wc),e(O,Uc),e(O,ae),w(An,ae,null),e(ae,Bc),e(ae,Ie),e(Ie,Kc),e(Ie,Ho),e(Ho,Rc),e(Ie,Qc),e(Ie,da),e(da,Hc),e(Ie,Vc),e(ae,Yc),w(ft,ae,null),e(ae,Gc),w(gt,ae,null),k(n,_r,g),k(n,Ne,g),e(Ne,_t),e(_t,ca),w(Sn,ca,null),e(Ne,Jc),e(Ne,pa),e(pa,Xc),k(n,kr,g),k(n,I,g),w(On,I,null),e(I,Zc),e(I,ha),e(ha,ep),e(I,tp),e(I,In),e(In,np),e(In,Vo),e(Vo,op),e(In,sp),e(I,ap),e(I,Nn),e(Nn,rp),e(Nn,Dn),e(Dn,ip),e(Nn,lp),e(I,dp),e(I,re),w(Wn,re,null),e(re,cp),e(re,De),e(De,pp),e(De,Yo),e(Yo,hp),e(De,up),e(De,ua),e(ua,mp),e(De,fp),e(re,gp),w(kt,re,null),e(re,_p),w(yt,re,null),k(n,yr,g),k(n,We,g),e(We,bt),e(bt,ma),w(Un,ma,null),e(We,kp),e(We,fa),e(fa,yp),k(n,br,g),k(n,N,g),w(Bn,N,null),e(N,bp),e(N,ga),e(ga,Tp),e(N,wp),e(N,Kn),e(Kn,vp),e(Kn,Go),e(Go,Lp),e(Kn,$p),e(N,zp),e(N,Rn),e(Rn,Ep),e(Rn,Qn),e(Qn,xp),e(Rn,Fp),e(N,qp),e(N,q),w(Hn,q,null),e(q,Cp),e(q,Ue),e(Ue,jp),e(Ue,Jo),e(Jo,Mp),e(Ue,Pp),e(Ue,_a),e(_a,Ap),e(Ue,Sp),e(q,Op),w(Tt,q,null),e(q,Ip),w(wt,q,null),e(q,Np),w(vt,q,null),e(q,Dp),w(Lt,q,null),e(q,Wp),w($t,q,null),k(n,Tr,g),k(n,Be,g),e(Be,zt),e(zt,ka),w(Vn,ka,null),e(Be,Up),e(Be,ya),e(ya,Bp),k(n,wr,g),k(n,D,g),w(Yn,D,null),e(D,Kp),e(D,ba),e(ba,Rp),e(D,Qp),e(D,Gn),e(Gn,Hp),e(Gn,Xo),e(Xo,Vp),e(Gn,Yp),e(D,Gp),e(D,Jn),e(Jn,Jp),e(Jn,Xn),e(Xn,Xp),e(Jn,Zp),e(D,eh),e(D,ie),w(Zn,ie,null),e(ie,th),e(ie,Ke),e(Ke,nh),e(Ke,Zo),e(Zo,oh),e(Ke,sh),e(Ke,Ta),e(Ta,ah),e(Ke,rh),e(ie,ih),w(Et,ie,null),e(ie,lh),w(xt,ie,null),k(n,vr,g),k(n,Re,g),e(Re,Ft),e(Ft,wa),w(eo,wa,null),e(Re,dh),e(Re,va),e(va,ch),k(n,Lr,g),k(n,W,g),w(to,W,null),e(W,ph),e(W,no),e(no,hh),e(no,La),e(La,uh),e(no,mh),e(W,fh),e(W,oo),e(oo,gh),e(oo,es),e(es,_h),e(oo,kh),e(W,yh),e(W,so),e(so,bh),e(so,ao),e(ao,Th),e(so,wh),e(W,vh),e(W,Q),w(ro,Q,null),e(Q,Lh),e(Q,Qe),e(Qe,$h),e(Qe,ts),e(ts,zh),e(Qe,Eh),e(Qe,$a),e($a,xh),e(Qe,Fh),e(Q,qh),w(qt,Q,null),e(Q,Ch),w(Ct,Q,null),e(Q,jh),w(jt,Q,null),k(n,$r,g),k(n,He,g),e(He,Mt),e(Mt,za),w(io,za,null),e(He,Mh),e(He,Ea),e(Ea,Ph),k(n,zr,g),k(n,U,g),w(lo,U,null),e(U,Ah),e(U,Ve),e(Ve,Sh),e(Ve,xa),e(xa,Oh),e(Ve,Ih),e(Ve,Fa),e(Fa,Nh),e(Ve,Dh),e(U,Wh),e(U,co),e(co,Uh),e(co,ns),e(ns,Bh),e(co,Kh),e(U,Rh),e(U,po),e(po,Qh),e(po,ho),e(ho,Hh),e(po,Vh),e(U,Yh),e(U,H),w(uo,H,null),e(H,Gh),e(H,Ye),e(Ye,Jh),e(Ye,os),e(os,Xh),e(Ye,Zh),e(Ye,qa),e(qa,eu),e(Ye,tu),e(H,nu),w(Pt,H,null),e(H,ou),w(At,H,null),e(H,su),w(St,H,null),Er=!0},p(n,[g]){const mo={};g&2&&(mo.$$scope={dirty:g,ctx:n}),ot.$set(mo);const Ca={};g&2&&(Ca.$$scope={dirty:g,ctx:n}),it.$set(Ca);const ja={};g&2&&(ja.$$scope={dirty:g,ctx:n}),lt.$set(ja);const Ma={};g&2&&(Ma.$$scope={dirty:g,ctx:n}),ct.$set(Ma);const fo={};g&2&&(fo.$$scope={dirty:g,ctx:n}),ht.$set(fo);const Pa={};g&2&&(Pa.$$scope={dirty:g,ctx:n}),ut.$set(Pa);const Aa={};g&2&&(Aa.$$scope={dirty:g,ctx:n}),ft.$set(Aa);const Sa={};g&2&&(Sa.$$scope={dirty:g,ctx:n}),gt.$set(Sa);const go={};g&2&&(go.$$scope={dirty:g,ctx:n}),kt.$set(go);const Oa={};g&2&&(Oa.$$scope={dirty:g,ctx:n}),yt.$set(Oa);const Ia={};g&2&&(Ia.$$scope={dirty:g,ctx:n}),Tt.$set(Ia);const Na={};g&2&&(Na.$$scope={dirty:g,ctx:n}),wt.$set(Na);const Da={};g&2&&(Da.$$scope={dirty:g,ctx:n}),vt.$set(Da);const Wa={};g&2&&(Wa.$$scope={dirty:g,ctx:n}),Lt.$set(Wa);const le={};g&2&&(le.$$scope={dirty:g,ctx:n}),$t.$set(le);const Ua={};g&2&&(Ua.$$scope={dirty:g,ctx:n}),Et.$set(Ua);const _o={};g&2&&(_o.$$scope={dirty:g,ctx:n}),xt.$set(_o);const Ba={};g&2&&(Ba.$$scope={dirty:g,ctx:n}),qt.$set(Ba);const Ka={};g&2&&(Ka.$$scope={dirty:g,ctx:n}),Ct.$set(Ka);const B={};g&2&&(B.$$scope={dirty:g,ctx:n}),jt.$set(B);const Ra={};g&2&&(Ra.$$scope={dirty:g,ctx:n}),Pt.$set(Ra);const Qa={};g&2&&(Qa.$$scope={dirty:g,ctx:n}),At.$set(Qa);const Ha={};g&2&&(Ha.$$scope={dirty:g,ctx:n}),St.$set(Ha)},i(n){Er||(v(l.$$.fragment,n),v(Kt.$$.fragment,n),v(en.$$.fragment,n),v(sn.$$.fragment,n),v(an.$$.fragment,n),v(ot.$$.fragment,n),v(ln.$$.fragment,n),v(dn.$$.fragment,n),v(cn.$$.fragment,n),v(pn.$$.fragment,n),v(hn.$$.fragment,n),v(un.$$.fragment,n),v(_n.$$.fragment,n),v(it.$$.fragment,n),v(lt.$$.fragment,n),v(kn.$$.fragment,n),v(yn.$$.fragment,n),v(vn.$$.fragment,n),v(ct.$$.fragment,n),v(Ln.$$.fragment,n),v($n.$$.fragment,n),v(Fn.$$.fragment,n),v(ht.$$.fragment,n),v(ut.$$.fragment,n),v(qn.$$.fragment,n),v(Cn.$$.fragment,n),v(An.$$.fragment,n),v(ft.$$.fragment,n),v(gt.$$.fragment,n),v(Sn.$$.fragment,n),v(On.$$.fragment,n),v(Wn.$$.fragment,n),v(kt.$$.fragment,n),v(yt.$$.fragment,n),v(Un.$$.fragment,n),v(Bn.$$.fragment,n),v(Hn.$$.fragment,n),v(Tt.$$.fragment,n),v(wt.$$.fragment,n),v(vt.$$.fragment,n),v(Lt.$$.fragment,n),v($t.$$.fragment,n),v(Vn.$$.fragment,n),v(Yn.$$.fragment,n),v(Zn.$$.fragment,n),v(Et.$$.fragment,n),v(xt.$$.fragment,n),v(eo.$$.fragment,n),v(to.$$.fragment,n),v(ro.$$.fragment,n),v(qt.$$.fragment,n),v(Ct.$$.fragment,n),v(jt.$$.fragment,n),v(io.$$.fragment,n),v(lo.$$.fragment,n),v(uo.$$.fragment,n),v(Pt.$$.fragment,n),v(At.$$.fragment,n),v(St.$$.fragment,n),Er=!0)},o(n){L(l.$$.fragment,n),L(Kt.$$.fragment,n),L(en.$$.fragment,n),L(sn.$$.fragment,n),L(an.$$.fragment,n),L(ot.$$.fragment,n),L(ln.$$.fragment,n),L(dn.$$.fragment,n),L(cn.$$.fragment,n),L(pn.$$.fragment,n),L(hn.$$.fragment,n),L(un.$$.fragment,n),L(_n.$$.fragment,n),L(it.$$.fragment,n),L(lt.$$.fragment,n),L(kn.$$.fragment,n),L(yn.$$.fragment,n),L(vn.$$.fragment,n),L(ct.$$.fragment,n),L(Ln.$$.fragment,n),L($n.$$.fragment,n),L(Fn.$$.fragment,n),L(ht.$$.fragment,n),L(ut.$$.fragment,n),L(qn.$$.fragment,n),L(Cn.$$.fragment,n),L(An.$$.fragment,n),L(ft.$$.fragment,n),L(gt.$$.fragment,n),L(Sn.$$.fragment,n),L(On.$$.fragment,n),L(Wn.$$.fragment,n),L(kt.$$.fragment,n),L(yt.$$.fragment,n),L(Un.$$.fragment,n),L(Bn.$$.fragment,n),L(Hn.$$.fragment,n),L(Tt.$$.fragment,n),L(wt.$$.fragment,n),L(vt.$$.fragment,n),L(Lt.$$.fragment,n),L($t.$$.fragment,n),L(Vn.$$.fragment,n),L(Yn.$$.fragment,n),L(Zn.$$.fragment,n),L(Et.$$.fragment,n),L(xt.$$.fragment,n),L(eo.$$.fragment,n),L(to.$$.fragment,n),L(ro.$$.fragment,n),L(qt.$$.fragment,n),L(Ct.$$.fragment,n),L(jt.$$.fragment,n),L(io.$$.fragment,n),L(lo.$$.fragment,n),L(uo.$$.fragment,n),L(Pt.$$.fragment,n),L(At.$$.fragment,n),L(St.$$.fragment,n),Er=!1},d(n){t(d),n&&t(_),n&&t(c),$(l),n&&t(Ga),n&&t(Le),$(Kt),n&&t(Ja),n&&t(Ze),n&&t(Xa),n&&t(ko),n&&t(Za),n&&t(yo),n&&t(er),n&&t(bo),n&&t(tr),n&&t(ee),n&&t(nr),n&&t(jo),n&&t(or),$(en,n),n&&t(sr),n&&t(ne),n&&t(ar),n&&t(Ee),$(sn),n&&t(rr),n&&t(X),$(an),$(ot),n&&t(ir),n&&t(qe),$(ln),n&&t(lr),n&&t(M),$(dn),$(cn),$(pn),n&&t(dr),n&&t(Ce),$(hn),n&&t(cr),n&&t(P),$(un),$(_n),$(it),$(lt),n&&t(pr),n&&t(Me),$(kn),n&&t(hr),n&&t(A),$(yn),$(vn),$(ct),n&&t(ur),n&&t(Ae),$(Ln),n&&t(mr),n&&t(S),$($n),$(Fn),$(ht),$(ut),n&&t(fr),n&&t(Oe),$(qn),n&&t(gr),n&&t(O),$(Cn),$(An),$(ft),$(gt),n&&t(_r),n&&t(Ne),$(Sn),n&&t(kr),n&&t(I),$(On),$(Wn),$(kt),$(yt),n&&t(yr),n&&t(We),$(Un),n&&t(br),n&&t(N),$(Bn),$(Hn),$(Tt),$(wt),$(vt),$(Lt),$($t),n&&t(Tr),n&&t(Be),$(Vn),n&&t(wr),n&&t(D),$(Yn),$(Zn),$(Et),$(xt),n&&t(vr),n&&t(Re),$(eo),n&&t(Lr),n&&t(W),$(to),$(ro),$(qt),$(Ct),$(jt),n&&t($r),n&&t(He),$(io),n&&t(zr),n&&t(U),$(lo),$(uo),$(Pt),$(At),$(St)}}}const Yf={local:"luke",sections:[{local:"overview",title:"Overview"},{local:"transformers.LukeConfig",title:"LukeConfig"},{local:"transformers.LukeTokenizer",title:"LukeTokenizer"},{local:"transformers.LukeModel",title:"LukeModel"},{local:"transformers.LukeForMaskedLM",title:"LukeForMaskedLM"},{local:"transformers.LukeForEntityClassification",title:"LukeForEntityClassification"},{local:"transformers.LukeForEntityPairClassification",title:"LukeForEntityPairClassification"},{local:"transformers.LukeForEntitySpanClassification",title:"LukeForEntitySpanClassification"},{local:"transformers.LukeForSequenceClassification",title:"LukeForSequenceClassification"},{local:"transformers.LukeForMultipleChoice",title:"LukeForMultipleChoice"},{local:"transformers.LukeForTokenClassification",title:"LukeForTokenClassification"},{local:"transformers.LukeForQuestionAnswering",title:"LukeForQuestionAnswering"}],title:"LUKE"};function Gf(z){return Lf(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class og extends bf{constructor(d){super();Tf(this,d,Gf,Vf,wf,{})}}export{og as default,Yf as metadata};
