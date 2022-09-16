import{S as bf,i as vf,s as Tf,e as a,k as h,w as b,t as n,M as wf,c as r,d as t,m as u,a as i,x as v,h as s,b as p,G as e,g as k,y as T,q as w,o as L,B as $,v as Lf,L as G}from"../../chunks/vendor-hf-doc-builder.js";import{T as Je}from"../../chunks/Tip-hf-doc-builder.js";import{D as x}from"../../chunks/Docstring-hf-doc-builder.js";import{C as K}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Z}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Y}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function $f(z){let d,_,c,f,y;return f=new K({props:{code:`from transformers import LukeConfig, LukeModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),_=n("Examples:"),c=h(),b(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);_=s(m,"Examples:"),m.forEach(t),c=u(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,c,m),T(f,l,m),y=!0},p:G,i(l){y||(w(f.$$.fragment,l),y=!0)},o(l){L(f.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),$(f,l)}}}function zf(z){let d,_,c,f,y;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),y=n(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>entity_last_hidden_state = outputs.entity_last_hidden_state`}}),{c(){d=a("p"),_=n("Examples:"),c=h(),b(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);_=s(m,"Examples:"),m.forEach(t),c=u(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,c,m),T(f,l,m),y=!0},p:G,i(l){y||(w(f.$$.fragment,l),y=!0)},o(l){L(f.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),$(f,l)}}}function xf(z){let d,_,c,f,y;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),y=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),y=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,c),e(c,f),e(d,y)},d(l){l&&t(d)}}}function Ff(z){let d,_,c,f,y;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),y=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),y=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,c),e(c,f),e(d,y)},d(l){l&&t(d)}}}function Cf(z){let d,_,c,f,y;return f=new K({props:{code:`from transformers import LukeTokenizer, LukeForEntityClassification

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
Predicted <span class="hljs-keyword">class</span>: person`}}),{c(){d=a("p"),_=n("Examples:"),c=h(),b(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);_=s(m,"Examples:"),m.forEach(t),c=u(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,c,m),T(f,l,m),y=!0},p:G,i(l){y||(w(f.$$.fragment,l),y=!0)},o(l){L(f.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),$(f,l)}}}function qf(z){let d,_,c,f,y;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),y=n(`
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
Predicted <span class="hljs-keyword">class</span>: per:cities_of_residence`}}),{c(){d=a("p"),_=n("Examples:"),c=h(),b(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);_=s(m,"Examples:"),m.forEach(t),c=u(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,c,m),T(f,l,m),y=!0},p:G,i(l){y||(w(f.$$.fragment,l),y=!0)},o(l){L(f.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),$(f,l)}}}function Mf(z){let d,_,c,f,y;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),y=n(`
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
Los Angeles LOC`}}),{c(){d=a("p"),_=n("Examples:"),c=h(),b(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);_=s(m,"Examples:"),m.forEach(t),c=u(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,c,m),T(f,l,m),y=!0},p:G,i(l){y||(w(f.$$.fragment,l),y=!0)},o(l){L(f.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),$(f,l)}}}function Af(z){let d,_,c,f,y;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),y=n(`
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
`}}),{c(){d=a("p"),_=n("Example of single-label classification:"),c=h(),b(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);_=s(m,"Example of single-label classification:"),m.forEach(t),c=u(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,c,m),T(f,l,m),y=!0},p:G,i(l){y||(w(f.$$.fragment,l),y=!0)},o(l){L(f.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),$(f,l)}}}function Of(z){let d,_;return d=new K({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = LukeForSequenceClassification.from_pretrained("studio-ousia/luke-base", num_labels=num_labels)

labels = torch.tensor([1])
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LukeForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,f){T(d,c,f),_=!0},p:G,i(c){_||(w(d.$$.fragment,c),_=!0)},o(c){L(d.$$.fragment,c),_=!1},d(c){$(d,c)}}}function If(z){let d,_,c,f,y;return f=new K({props:{code:`import torch
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
`}}),{c(){d=a("p"),_=n("Example of multi-label classification:"),c=h(),b(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);_=s(m,"Example of multi-label classification:"),m.forEach(t),c=u(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,c,m),T(f,l,m),y=!0},p:G,i(l){y||(w(f.$$.fragment,l),y=!0)},o(l){L(f.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),$(f,l)}}}function Nf(z){let d,_;return d=new K({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){b(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,f){T(d,c,f),_=!0},p:G,i(c){_||(w(d.$$.fragment,c),_=!0)},o(c){L(d.$$.fragment,c),_=!1},d(c){$(d,c)}}}function Df(z){let d,_,c,f,y;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),y=n(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=n("Example:"),c=h(),b(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),c=u(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,c,m),T(f,l,m),y=!0},p:G,i(l){y||(w(f.$$.fragment,l),y=!0)},o(l){L(f.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),$(f,l)}}}function Uf(z){let d,_,c,f,y;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),y=n(`
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
`}}),{c(){d=a("p"),_=n("Example:"),c=h(),b(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),c=u(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,c,m),T(f,l,m),y=!0},p:G,i(l){y||(w(f.$$.fragment,l),y=!0)},o(l){L(f.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),$(f,l)}}}function Kf(z){let d,_;return d=new K({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){b(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,f){T(d,c,f),_=!0},p:G,i(c){_||(w(d.$$.fragment,c),_=!0)},o(c){L(d.$$.fragment,c),_=!1},d(c){$(d,c)}}}function Rf(z){let d,_,c,f,y;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),y=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var m=i(d);_=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var E=i(c);f=s(E,"Module"),E.forEach(t),y=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){k(l,d,m),e(d,_),e(d,c),e(c,f),e(d,y)},d(l){l&&t(d)}}}function Vf(z){let d,_,c,f,y;return f=new K({props:{code:`from transformers import LukeTokenizer, LukeForQuestionAnswering
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
`}}),{c(){d=a("p"),_=n("Example:"),c=h(),b(f.$$.fragment)},l(l){d=r(l,"P",{});var m=i(d);_=s(m,"Example:"),m.forEach(t),c=u(l),v(f.$$.fragment,l)},m(l,m){k(l,d,m),e(d,_),k(l,c,m),T(f,l,m),y=!0},p:G,i(l){y||(w(f.$$.fragment,l),y=!0)},o(l){L(f.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),$(f,l)}}}function Qf(z){let d,_;return d=new K({props:{code:`# target is "nice puppet"
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
`}}),{c(){b(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,f){T(d,c,f),_=!0},p:G,i(c){_||(w(d.$$.fragment,c),_=!0)},o(c){L(d.$$.fragment,c),_=!1},d(c){$(d,c)}}}function Hf(z){let d,_,c,f,y,l,m,E,li,Ga,Le,Xe,ys,Kt,di,bs,ci,Ja,Ze,pi,Rt,hi,ui,Xa,kn,mi,Za,yn,vs,fi,er,bn,gi,tr,ee,Ts,Vt,_i,vn,ki,yi,bi,ws,j,vi,Ls,Ti,wi,$s,Li,$i,zs,zi,Ei,Es,xi,Fi,Tn,Ci,qi,ji,Qt,te,wn,Mi,Pi,xs,Ai,Si,Fs,Oi,Ii,Cs,Ni,Di,Wi,Ht,Ln,qs,Ui,Bi,Ki,$n,js,Ri,Vi,Qi,J,Ms,Hi,Yi,$e,et,zn,Gi,Ji,Yt,Xi,Zi,el,tt,En,tl,ol,Gt,nl,sl,al,xn,Fn,rl,il,ll,R,Cn,dl,cl,Ps,pl,hl,As,ul,ml,Ss,fl,gl,Os,_l,kl,yl,ze,bl,qn,vl,Tl,Jt,wl,Ll,$l,Xt,zl,Zt,El,xl,or,jn,Fl,nr,eo,sr,oe,Cl,to,ql,jl,oo,Ml,Pl,no,Al,Sl,ar,Ee,ot,Is,so,Ol,Ns,Il,rr,X,ao,Nl,xe,Dl,Mn,Wl,Ul,ro,Bl,Kl,Rl,Fe,Vl,Pn,Ql,Hl,An,Yl,Gl,Jl,nt,ir,Ce,st,Ds,io,Xl,Ws,Zl,lr,M,lo,ed,Us,td,od,F,nd,Sn,sd,ad,On,rd,id,In,ld,dd,Bs,cd,pd,Ks,hd,ud,Rs,md,fd,Vs,gd,_d,kd,at,co,yd,Qs,bd,vd,Nn,po,dr,qe,rt,Hs,ho,Td,Ys,wd,cr,P,uo,Ld,Gs,$d,zd,mo,Ed,Dn,xd,Fd,Cd,fo,qd,go,jd,Md,Pd,ne,_o,Ad,je,Sd,Wn,Od,Id,Js,Nd,Dd,Wd,it,Ud,lt,pr,Me,dt,Xs,ko,Bd,Zs,Kd,hr,A,yo,Rd,ea,Vd,Qd,bo,Hd,Un,Yd,Gd,Jd,vo,Xd,To,Zd,ec,tc,ce,wo,oc,Pe,nc,Bn,sc,ac,ta,rc,ic,lc,ct,ur,Ae,pt,oa,Lo,dc,na,cc,mr,S,$o,pc,sa,hc,uc,zo,mc,Kn,fc,gc,_c,Eo,kc,xo,yc,bc,vc,se,Fo,Tc,Se,wc,Rn,Lc,$c,aa,zc,Ec,xc,ht,Fc,ut,fr,Oe,mt,ra,Co,Cc,ia,qc,gr,O,qo,jc,la,Mc,Pc,jo,Ac,Vn,Sc,Oc,Ic,Mo,Nc,Po,Dc,Wc,Uc,ae,Ao,Bc,Ie,Kc,Qn,Rc,Vc,da,Qc,Hc,Yc,ft,Gc,gt,_r,Ne,_t,ca,So,Jc,pa,Xc,kr,I,Oo,Zc,ha,ep,tp,Io,op,Hn,np,sp,ap,No,rp,Do,ip,lp,dp,re,Wo,cp,De,pp,Yn,hp,up,ua,mp,fp,gp,kt,_p,yt,yr,We,bt,ma,Uo,kp,fa,yp,br,N,Bo,bp,ga,vp,Tp,Ko,wp,Gn,Lp,$p,zp,Ro,Ep,Vo,xp,Fp,Cp,C,Qo,qp,Ue,jp,Jn,Mp,Pp,_a,Ap,Sp,Op,vt,Ip,Tt,Np,wt,Dp,Lt,Wp,$t,vr,Be,zt,ka,Ho,Up,ya,Bp,Tr,D,Yo,Kp,ba,Rp,Vp,Go,Qp,Xn,Hp,Yp,Gp,Jo,Jp,Xo,Xp,Zp,eh,ie,Zo,th,Ke,oh,Zn,nh,sh,va,ah,rh,ih,Et,lh,xt,wr,Re,Ft,Ta,en,dh,wa,ch,Lr,W,tn,ph,on,hh,La,uh,mh,fh,nn,gh,es,_h,kh,yh,sn,bh,an,vh,Th,wh,V,rn,Lh,Ve,$h,ts,zh,Eh,$a,xh,Fh,Ch,Ct,qh,qt,jh,jt,$r,Qe,Mt,za,ln,Mh,Ea,Ph,zr,U,dn,Ah,He,Sh,xa,Oh,Ih,Fa,Nh,Dh,Wh,cn,Uh,os,Bh,Kh,Rh,pn,Vh,hn,Qh,Hh,Yh,Q,un,Gh,Ye,Jh,ns,Xh,Zh,Ca,eu,tu,ou,Pt,nu,At,su,St,Er;return l=new Z({}),Kt=new Z({}),eo=new K({props:{code:`from transformers import LukeTokenizer, LukeModel, LukeForEntityPairClassification

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx])`}}),so=new Z({}),ao=new x({props:{name:"class transformers.LukeConfig",anchor:"transformers.LukeConfig",parameters:[{name:"vocab_size",val:" = 50267"},{name:"entity_vocab_size",val:" = 500000"},{name:"hidden_size",val:" = 768"},{name:"entity_emb_size",val:" = 256"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"use_entity_aware_attention",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LukeConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the LUKE model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeModel">LukeModel</a>.`,name:"vocab_size"},{anchor:"transformers.LukeConfig.entity_vocab_size",description:`<strong>entity_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 500000) &#x2014;
Entity vocabulary size of the LUKE model. Defines the number of different entities that can be represented
by the <code>entity_ids</code> passed when calling <a href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeModel">LukeModel</a>.`,name:"entity_vocab_size"},{anchor:"transformers.LukeConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeModel">LukeModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.LukeConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.LukeConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.LukeConfig.use_entity_aware_attention",description:`<strong>use_entity_aware_attention</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
Whether or not the model should use the entity-aware self-attention mechanism proposed in <a href="https://arxiv.org/abs/2010.01057" rel="nofollow">LUKE: Deep
Contextualized Entity Representations with Entity-aware Self-attention (Yamada et
al.)</a>.`,name:"use_entity_aware_attention"},{anchor:"transformers.LukeConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/luke/configuration_luke.py#L29"}}),nt=new Y({props:{anchor:"transformers.LukeConfig.example",$$slots:{default:[$f]},$$scope:{ctx:z}}}),io=new Z({}),lo=new x({props:{name:"class transformers.LukeTokenizer",anchor:"transformers.LukeTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"entity_vocab_file",val:""},{name:"task",val:" = None"},{name:"max_entity_length",val:" = 32"},{name:"max_mention_length",val:" = 30"},{name:"entity_token_1",val:" = '<ent>'"},{name:"entity_token_2",val:" = '<ent2>'"},{name:"entity_unk_token",val:" = '[UNK]'"},{name:"entity_pad_token",val:" = '[PAD]'"},{name:"entity_mask_token",val:" = '[MASK]'"},{name:"entity_mask2_token",val:" = '[MASK2]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LukeTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
<code>task</code> is set to <code>&quot;entity_pair_classification&quot;</code>.`,name:"entity_token_2"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/luke/tokenization_luke.py#L152"}}),co=new x({props:{name:"__call__",anchor:"transformers.LukeTokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str]]"},{name:"text_pair",val:": typing.Union[str, typing.List[str], NoneType] = None"},{name:"entity_spans",val:": typing.Union[typing.List[typing.Tuple[int, int]], typing.List[typing.List[typing.Tuple[int, int]]], NoneType] = None"},{name:"entity_spans_pair",val:": typing.Union[typing.List[typing.Tuple[int, int]], typing.List[typing.List[typing.Tuple[int, int]]], NoneType] = None"},{name:"entities",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"entities_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"max_entity_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": typing.Optional[bool] = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LukeTokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
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
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LukeTokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.22.1/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LukeTokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.22.1/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LukeTokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.22.1/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
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
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.LukeTokenizer.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.LukeTokenizer.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/luke/tokenization_luke.py#L262",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.BatchEncoding"
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
  href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),po=new x({props:{name:"save_vocabulary",anchor:"transformers.LukeTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/luke/tokenization_luke.py#L1381"}}),ho=new Z({}),uo=new x({props:{name:"class transformers.LukeModel",anchor:"transformers.LukeModel",parameters:[{name:"config",val:": LukeConfig"},{name:"add_pooling_layer",val:": bool = True"}],parametersDescription:[{anchor:"transformers.LukeModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/luke/modeling_luke.py#L1024"}}),_o=new x({props:{name:"forward",anchor:"transformers.LukeModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"entity_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LukeModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeModel.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/luke/modeling_luke.py#L1056",returnDescription:`
<p>A <code>transformers.models.luke.modeling_luke.BaseLukeModelOutputWithPooling</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeConfig"
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
`}}),it=new Je({props:{$$slots:{default:[zf]},$$scope:{ctx:z}}}),lt=new Y({props:{anchor:"transformers.LukeModel.forward.example",$$slots:{default:[Ef]},$$scope:{ctx:z}}}),ko=new Z({}),yo=new x({props:{name:"class transformers.LukeForMaskedLM",anchor:"transformers.LukeForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/luke/modeling_luke.py#L1277"}}),wo=new x({props:{name:"forward",anchor:"transformers.LukeForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LukeForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForMaskedLM.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LukeForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.LukeForMaskedLM.forward.entity_labels",description:`<strong>entity_labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"entity_labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/luke/modeling_luke.py#L1313",returnDescription:`
<p>A <code>transformers.models.luke.modeling_luke.LukeMaskedLMOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeConfig"
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
`}}),ct=new Je({props:{$$slots:{default:[xf]},$$scope:{ctx:z}}}),Lo=new Z({}),$o=new x({props:{name:"class transformers.LukeForEntityClassification",anchor:"transformers.LukeForEntityClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForEntityClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/luke/modeling_luke.py#L1420"}}),Fo=new x({props:{name:"forward",anchor:"transformers.LukeForEntityClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"entity_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LukeForEntityClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForEntityClassification.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LukeForEntityClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code> or <code>(batch_size, num_labels)</code>, <em>optional</em>) &#x2014;
Labels for computing the classification loss. If the shape is <code>(batch_size,)</code>, the cross entropy loss is
used for the single-label classification. In this case, labels should contain the indices that should be in
<code>[0, ..., config.num_labels - 1]</code>. If the shape is <code>(batch_size, num_labels)</code>, the binary cross entropy
loss is used for the multi-label classification. In this case, labels should only contain <code>[0, 1]</code>, where 0
and 1 indicate false and true, respectively.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/luke/modeling_luke.py#L1433",returnDescription:`
<p>A <code>transformers.models.luke.modeling_luke.EntityClassificationOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeConfig"
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
`}}),ht=new Je({props:{$$slots:{default:[Ff]},$$scope:{ctx:z}}}),ut=new Y({props:{anchor:"transformers.LukeForEntityClassification.forward.example",$$slots:{default:[Cf]},$$scope:{ctx:z}}}),Co=new Z({}),qo=new x({props:{name:"class transformers.LukeForEntityPairClassification",anchor:"transformers.LukeForEntityPairClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForEntityPairClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/luke/modeling_luke.py#L1533"}}),Ao=new x({props:{name:"forward",anchor:"transformers.LukeForEntityPairClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"entity_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LukeForEntityPairClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForEntityPairClassification.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LukeForEntityPairClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code> or <code>(batch_size, num_labels)</code>, <em>optional</em>) &#x2014;
Labels for computing the classification loss. If the shape is <code>(batch_size,)</code>, the cross entropy loss is
used for the single-label classification. In this case, labels should contain the indices that should be in
<code>[0, ..., config.num_labels - 1]</code>. If the shape is <code>(batch_size, num_labels)</code>, the binary cross entropy
loss is used for the multi-label classification. In this case, labels should only contain <code>[0, 1]</code>, where 0
and 1 indicate false and true, respectively.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/luke/modeling_luke.py#L1546",returnDescription:`
<p>A <code>transformers.models.luke.modeling_luke.EntityPairClassificationOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeConfig"
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
`}}),ft=new Je({props:{$$slots:{default:[qf]},$$scope:{ctx:z}}}),gt=new Y({props:{anchor:"transformers.LukeForEntityPairClassification.forward.example",$$slots:{default:[jf]},$$scope:{ctx:z}}}),So=new Z({}),Oo=new x({props:{name:"class transformers.LukeForEntitySpanClassification",anchor:"transformers.LukeForEntitySpanClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForEntitySpanClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/luke/modeling_luke.py#L1651"}}),Wo=new x({props:{name:"forward",anchor:"transformers.LukeForEntitySpanClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LukeForEntitySpanClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForEntitySpanClassification.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LukeForEntitySpanClassification.forward.entity_start_positions",description:`<strong>entity_start_positions</strong> (<code>torch.LongTensor</code>) &#x2014;
The start positions of entities in the word token sequence.`,name:"entity_start_positions"},{anchor:"transformers.LukeForEntitySpanClassification.forward.entity_end_positions",description:`<strong>entity_end_positions</strong> (<code>torch.LongTensor</code>) &#x2014;
The end positions of entities in the word token sequence.`,name:"entity_end_positions"},{anchor:"transformers.LukeForEntitySpanClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code> or <code>(batch_size, entity_length, num_labels)</code>, <em>optional</em>) &#x2014;
Labels for computing the classification loss. If the shape is <code>(batch_size, entity_length)</code>, the cross
entropy loss is used for the single-label classification. In this case, labels should contain the indices
that should be in <code>[0, ..., config.num_labels - 1]</code>. If the shape is <code>(batch_size, entity_length, num_labels)</code>, the binary cross entropy loss is used for the multi-label classification. In this case,
labels should only contain <code>[0, 1]</code>, where 0 and 1 indicate false and true, respectively.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/luke/modeling_luke.py#L1664",returnDescription:`
<p>A <code>transformers.models.luke.modeling_luke.EntitySpanClassificationOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeConfig"
>LukeConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</li>
<li><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</li>
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
`}}),kt=new Je({props:{$$slots:{default:[Mf]},$$scope:{ctx:z}}}),yt=new Y({props:{anchor:"transformers.LukeForEntitySpanClassification.forward.example",$$slots:{default:[Pf]},$$scope:{ctx:z}}}),Uo=new Z({}),Bo=new x({props:{name:"class transformers.LukeForSequenceClassification",anchor:"transformers.LukeForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/luke/modeling_luke.py#L1789"}}),Qo=new x({props:{name:"forward",anchor:"transformers.LukeForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"entity_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LukeForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForSequenceClassification.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LukeForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/luke/modeling_luke.py#L1802",returnDescription:`
<p>A <code>transformers.models.luke.modeling_luke.LukeSequenceClassifierOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeConfig"
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
`}}),vt=new Je({props:{$$slots:{default:[Af]},$$scope:{ctx:z}}}),Tt=new Y({props:{anchor:"transformers.LukeForSequenceClassification.forward.example",$$slots:{default:[Sf]},$$scope:{ctx:z}}}),wt=new Y({props:{anchor:"transformers.LukeForSequenceClassification.forward.example-2",$$slots:{default:[Of]},$$scope:{ctx:z}}}),Lt=new Y({props:{anchor:"transformers.LukeForSequenceClassification.forward.example-3",$$slots:{default:[If]},$$scope:{ctx:z}}}),$t=new Y({props:{anchor:"transformers.LukeForSequenceClassification.forward.example-4",$$slots:{default:[Nf]},$$scope:{ctx:z}}}),Ho=new Z({}),Yo=new x({props:{name:"class transformers.LukeForMultipleChoice",anchor:"transformers.LukeForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/luke/modeling_luke.py#L2117"}}),Zo=new x({props:{name:"forward",anchor:"transformers.LukeForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"entity_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LukeForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForMultipleChoice.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LukeForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/luke/modeling_luke.py#L2130",returnDescription:`
<p>A <code>transformers.models.luke.modeling_luke.LukeMultipleChoiceModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeConfig"
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
`}}),Et=new Je({props:{$$slots:{default:[Df]},$$scope:{ctx:z}}}),xt=new Y({props:{anchor:"transformers.LukeForMultipleChoice.forward.example",$$slots:{default:[Wf]},$$scope:{ctx:z}}}),en=new Z({}),tn=new x({props:{name:"class transformers.LukeForTokenClassification",anchor:"transformers.LukeForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/luke/modeling_luke.py#L1902"}}),rn=new x({props:{name:"forward",anchor:"transformers.LukeForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"entity_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LukeForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForTokenClassification.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LukeForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/luke/modeling_luke.py#L1916",returnDescription:`
<p>A <code>transformers.models.luke.modeling_luke.LukeTokenClassifierOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeConfig"
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
`}}),Ct=new Je({props:{$$slots:{default:[Uf]},$$scope:{ctx:z}}}),qt=new Y({props:{anchor:"transformers.LukeForTokenClassification.forward.example",$$slots:{default:[Bf]},$$scope:{ctx:z}}}),jt=new Y({props:{anchor:"transformers.LukeForTokenClassification.forward.example-2",$$slots:{default:[Kf]},$$scope:{ctx:z}}}),ln=new Z({}),dn=new x({props:{name:"class transformers.LukeForQuestionAnswering",anchor:"transformers.LukeForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/luke/modeling_luke.py#L1997"}}),un=new x({props:{name:"forward",anchor:"transformers.LukeForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.FloatTensor] = None"},{name:"entity_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"entity_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LukeForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForQuestionAnswering.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LukeForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LukeForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/luke/modeling_luke.py#L2009",returnDescription:`
<p>A <code>transformers.models.luke.modeling_luke.LukeQuestionAnsweringModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeConfig"
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
`}}),Pt=new Je({props:{$$slots:{default:[Rf]},$$scope:{ctx:z}}}),At=new Y({props:{anchor:"transformers.LukeForQuestionAnswering.forward.example",$$slots:{default:[Vf]},$$scope:{ctx:z}}}),St=new Y({props:{anchor:"transformers.LukeForQuestionAnswering.forward.example-2",$$slots:{default:[Qf]},$$scope:{ctx:z}}}),{c(){d=a("meta"),_=h(),c=a("h1"),f=a("a"),y=a("span"),b(l.$$.fragment),m=h(),E=a("span"),li=n("LUKE"),Ga=h(),Le=a("h2"),Xe=a("a"),ys=a("span"),b(Kt.$$.fragment),di=h(),bs=a("span"),ci=n("Overview"),Ja=h(),Ze=a("p"),pi=n("The LUKE model was proposed in "),Rt=a("a"),hi=n("LUKE: Deep Contextualized Entity Representations with Entity-aware Self-attention"),ui=n(` by Ikuya Yamada, Akari Asai, Hiroyuki Shindo, Hideaki Takeda and Yuji Matsumoto.
It is based on RoBERTa and adds entity embeddings as well as an entity-aware self-attention mechanism, which helps
improve performance on various downstream tasks involving reasoning about entities such as named entity recognition,
extractive and cloze-style question answering, entity typing, and relation classification.`),Xa=h(),kn=a("p"),mi=n("The abstract from the paper is the following:"),Za=h(),yn=a("p"),vs=a("em"),fi=n(`Entity representations are useful in natural language tasks involving entities. In this paper, we propose new
pretrained contextualized representations of words and entities based on the bidirectional transformer. The proposed
model treats words and entities in a given text as independent tokens, and outputs contextualized representations of
them. Our model is trained using a new pretraining task based on the masked language model of BERT. The task involves
predicting randomly masked words and entities in a large entity-annotated corpus retrieved from Wikipedia. We also
propose an entity-aware self-attention mechanism that is an extension of the self-attention mechanism of the
transformer, and considers the types of tokens (words or entities) when computing attention scores. The proposed model
achieves impressive empirical performance on a wide range of entity-related tasks. In particular, it obtains
state-of-the-art results on five well-known datasets: Open Entity (entity typing), TACRED (relation classification),
CoNLL-2003 (named entity recognition), ReCoRD (cloze-style question answering), and SQuAD 1.1 (extractive question
answering).`),er=h(),bn=a("p"),gi=n("Tips:"),tr=h(),ee=a("ul"),Ts=a("li"),Vt=a("p"),_i=n("This implementation is the same as "),vn=a("a"),ki=n("RobertaModel"),yi=n(` with the addition of entity embeddings as well
as an entity-aware self-attention mechanism, which improves performance on tasks involving reasoning about entities.`),bi=h(),ws=a("li"),j=a("p"),vi=n("LUKE treats entities as input tokens; therefore, it takes "),Ls=a("code"),Ti=n("entity_ids"),wi=n(", "),$s=a("code"),Li=n("entity_attention_mask"),$i=n(`,
`),zs=a("code"),zi=n("entity_token_type_ids"),Ei=n(" and "),Es=a("code"),xi=n("entity_position_ids"),Fi=n(` as extra input. You can obtain those using
`),Tn=a("a"),Ci=n("LukeTokenizer"),qi=n("."),ji=h(),Qt=a("li"),te=a("p"),wn=a("a"),Mi=n("LukeTokenizer"),Pi=n(" takes "),xs=a("code"),Ai=n("entities"),Si=n(" and "),Fs=a("code"),Oi=n("entity_spans"),Ii=n(` (character-based start and end
positions of the entities in the input text) as extra input. `),Cs=a("code"),Ni=n("entities"),Di=n(` typically consist of [MASK] entities or
Wikipedia entities. The brief description when inputting these entities are as follows:`),Wi=h(),Ht=a("ul"),Ln=a("li"),qs=a("em"),Ui=n("Inputting [MASK] entities to compute entity representations"),Bi=n(`: The [MASK] entity is used to mask entities to be
predicted during pretraining. When LUKE receives the [MASK] entity, it tries to predict the original entity by
gathering the information about the entity from the input text. Therefore, the [MASK] entity can be used to address
downstream tasks requiring the information of entities in text such as entity typing, relation classification, and
named entity recognition.`),Ki=h(),$n=a("li"),js=a("em"),Ri=n("Inputting Wikipedia entities to compute knowledge-enhanced token representations"),Vi=n(`: LUKE learns rich information
(or knowledge) about Wikipedia entities during pretraining and stores the information in its entity embedding. By
using Wikipedia entities as input tokens, LUKE outputs token representations enriched by the information stored in
the embeddings of these entities. This is particularly effective for tasks requiring real-world knowledge, such as
question answering.`),Qi=h(),J=a("li"),Ms=a("p"),Hi=n("There are three head models for the former use case:"),Yi=h(),$e=a("ul"),et=a("li"),zn=a("a"),Gi=n("LukeForEntityClassification"),Ji=n(`, for tasks to classify a single entity in an input text such as
entity typing, e.g. the `),Yt=a("a"),Xi=n("Open Entity dataset"),Zi=n(`.
This model places a linear head on top of the output entity representation.`),el=h(),tt=a("li"),En=a("a"),tl=n("LukeForEntityPairClassification"),ol=n(`, for tasks to classify the relationship between two entities
such as relation classification, e.g. the `),Gt=a("a"),nl=n("TACRED dataset"),sl=n(`. This
model places a linear head on top of the concatenated output representation of the pair of given entities.`),al=h(),xn=a("li"),Fn=a("a"),rl=n("LukeForEntitySpanClassification"),il=n(`, for tasks to classify the sequence of entity spans, such as
named entity recognition (NER). This model places a linear head on top of the output entity representations. You
can address NER using this model by inputting all possible entity spans in the text to the model.`),ll=h(),R=a("p"),Cn=a("a"),dl=n("LukeTokenizer"),cl=n(" has a "),Ps=a("code"),pl=n("task"),hl=n(` argument, which enables you to easily create an input to these
head models by specifying `),As=a("code"),ul=n('task="entity_classification"'),ml=n(", "),Ss=a("code"),fl=n('task="entity_pair_classification"'),gl=n(`, or
`),Os=a("code"),_l=n('task="entity_span_classification"'),kl=n(". Please refer to the example code of each head models."),yl=h(),ze=a("p"),bl=n("A demo notebook on how to fine-tune "),qn=a("a"),vl=n("LukeForEntityPairClassification"),Tl=n(` for relation
classification can be found `),Jt=a("a"),wl=n("here"),Ll=n("."),$l=h(),Xt=a("p"),zl=n(`There are also 3 notebooks available, which showcase how you can reproduce the results as reported in the paper with
the HuggingFace implementation of LUKE. They can be found `),Zt=a("a"),El=n("here"),xl=n("."),or=h(),jn=a("p"),Fl=n("Example:"),nr=h(),b(eo.$$.fragment),sr=h(),oe=a("p"),Cl=n("This model was contributed by "),to=a("a"),ql=n("ikuyamada"),jl=n(" and "),oo=a("a"),Ml=n("nielsr"),Pl=n(". The original code can be found "),no=a("a"),Al=n("here"),Sl=n("."),ar=h(),Ee=a("h2"),ot=a("a"),Is=a("span"),b(so.$$.fragment),Ol=h(),Ns=a("span"),Il=n("LukeConfig"),rr=h(),X=a("div"),b(ao.$$.fragment),Nl=h(),xe=a("p"),Dl=n("This is the configuration class to store the configuration of a "),Mn=a("a"),Wl=n("LukeModel"),Ul=n(`. It is used to instantiate a LUKE
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LUKE
`),ro=a("a"),Bl=n("studio-ousia/luke-base"),Kl=n(" architecture."),Rl=h(),Fe=a("p"),Vl=n("Configuration objects inherit from "),Pn=a("a"),Ql=n("PretrainedConfig"),Hl=n(` and can be used to control the model outputs. Read the
documentation from `),An=a("a"),Yl=n("PretrainedConfig"),Gl=n(" for more information."),Jl=h(),b(nt.$$.fragment),ir=h(),Ce=a("h2"),st=a("a"),Ds=a("span"),b(io.$$.fragment),Xl=h(),Ws=a("span"),Zl=n("LukeTokenizer"),lr=h(),M=a("div"),b(lo.$$.fragment),ed=h(),Us=a("p"),td=n("Construct a LUKE tokenizer."),od=h(),F=a("p"),nd=n("This tokenizer inherits from "),Sn=a("a"),sd=n("RobertaTokenizer"),ad=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods. Compared to `),On=a("a"),rd=n("RobertaTokenizer"),id=n(", "),In=a("a"),ld=n("LukeTokenizer"),dd=n(`
also creates entity sequences, namely `),Bs=a("code"),cd=n("entity_ids"),pd=n(", "),Ks=a("code"),hd=n("entity_attention_mask"),ud=n(", "),Rs=a("code"),md=n("entity_token_type_ids"),fd=n(`, and
`),Vs=a("code"),gd=n("entity_position_ids"),_d=n(" to be used by the LUKE model."),kd=h(),at=a("div"),b(co.$$.fragment),yd=h(),Qs=a("p"),bd=n(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences, depending on the task you want to prepare them for.`),vd=h(),Nn=a("div"),b(po.$$.fragment),dr=h(),qe=a("h2"),rt=a("a"),Hs=a("span"),b(ho.$$.fragment),Td=h(),Ys=a("span"),wd=n("LukeModel"),cr=h(),P=a("div"),b(uo.$$.fragment),Ld=h(),Gs=a("p"),$d=n("The bare LUKE model transformer outputting raw hidden-states for both word tokens and entities without any specific head on top."),zd=h(),mo=a("p"),Ed=n("This model inherits from "),Dn=a("a"),xd=n("PreTrainedModel"),Fd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cd=h(),fo=a("p"),qd=n("This model is also a PyTorch "),go=a("a"),jd=n("torch.nn.Module"),Md=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Pd=h(),ne=a("div"),b(_o.$$.fragment),Ad=h(),je=a("p"),Sd=n("The "),Wn=a("a"),Od=n("LukeModel"),Id=n(" forward method, overrides the "),Js=a("code"),Nd=n("__call__"),Dd=n(" special method."),Wd=h(),b(it.$$.fragment),Ud=h(),b(lt.$$.fragment),pr=h(),Me=a("h2"),dt=a("a"),Xs=a("span"),b(ko.$$.fragment),Bd=h(),Zs=a("span"),Kd=n("LukeForMaskedLM"),hr=h(),A=a("div"),b(yo.$$.fragment),Rd=h(),ea=a("p"),Vd=n(`The LUKE model with a language modeling head and entity prediction head on top for masked language modeling and
masked entity prediction.`),Qd=h(),bo=a("p"),Hd=n("This model inherits from "),Un=a("a"),Yd=n("PreTrainedModel"),Gd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jd=h(),vo=a("p"),Xd=n("This model is also a PyTorch "),To=a("a"),Zd=n("torch.nn.Module"),ec=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tc=h(),ce=a("div"),b(wo.$$.fragment),oc=h(),Pe=a("p"),nc=n("The "),Bn=a("a"),sc=n("LukeForMaskedLM"),ac=n(" forward method, overrides the "),ta=a("code"),rc=n("__call__"),ic=n(" special method."),lc=h(),b(ct.$$.fragment),ur=h(),Ae=a("h2"),pt=a("a"),oa=a("span"),b(Lo.$$.fragment),dc=h(),na=a("span"),cc=n("LukeForEntityClassification"),mr=h(),S=a("div"),b($o.$$.fragment),pc=h(),sa=a("p"),hc=n(`The LUKE model with a classification head on top (a linear layer on top of the hidden state of the first entity
token) for entity classification tasks, such as Open Entity.`),uc=h(),zo=a("p"),mc=n("This model inherits from "),Kn=a("a"),fc=n("PreTrainedModel"),gc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_c=h(),Eo=a("p"),kc=n("This model is also a PyTorch "),xo=a("a"),yc=n("torch.nn.Module"),bc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vc=h(),se=a("div"),b(Fo.$$.fragment),Tc=h(),Se=a("p"),wc=n("The "),Rn=a("a"),Lc=n("LukeForEntityClassification"),$c=n(" forward method, overrides the "),aa=a("code"),zc=n("__call__"),Ec=n(" special method."),xc=h(),b(ht.$$.fragment),Fc=h(),b(ut.$$.fragment),fr=h(),Oe=a("h2"),mt=a("a"),ra=a("span"),b(Co.$$.fragment),Cc=h(),ia=a("span"),qc=n("LukeForEntityPairClassification"),gr=h(),O=a("div"),b(qo.$$.fragment),jc=h(),la=a("p"),Mc=n(`The LUKE model with a classification head on top (a linear layer on top of the hidden states of the two entity
tokens) for entity pair classification tasks, such as TACRED.`),Pc=h(),jo=a("p"),Ac=n("This model inherits from "),Vn=a("a"),Sc=n("PreTrainedModel"),Oc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ic=h(),Mo=a("p"),Nc=n("This model is also a PyTorch "),Po=a("a"),Dc=n("torch.nn.Module"),Wc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Uc=h(),ae=a("div"),b(Ao.$$.fragment),Bc=h(),Ie=a("p"),Kc=n("The "),Qn=a("a"),Rc=n("LukeForEntityPairClassification"),Vc=n(" forward method, overrides the "),da=a("code"),Qc=n("__call__"),Hc=n(" special method."),Yc=h(),b(ft.$$.fragment),Gc=h(),b(gt.$$.fragment),_r=h(),Ne=a("h2"),_t=a("a"),ca=a("span"),b(So.$$.fragment),Jc=h(),pa=a("span"),Xc=n("LukeForEntitySpanClassification"),kr=h(),I=a("div"),b(Oo.$$.fragment),Zc=h(),ha=a("p"),ep=n(`The LUKE model with a span classification head on top (a linear layer on top of the hidden states output) for tasks
such as named entity recognition.`),tp=h(),Io=a("p"),op=n("This model inherits from "),Hn=a("a"),np=n("PreTrainedModel"),sp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ap=h(),No=a("p"),rp=n("This model is also a PyTorch "),Do=a("a"),ip=n("torch.nn.Module"),lp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dp=h(),re=a("div"),b(Wo.$$.fragment),cp=h(),De=a("p"),pp=n("The "),Yn=a("a"),hp=n("LukeForEntitySpanClassification"),up=n(" forward method, overrides the "),ua=a("code"),mp=n("__call__"),fp=n(" special method."),gp=h(),b(kt.$$.fragment),_p=h(),b(yt.$$.fragment),yr=h(),We=a("h2"),bt=a("a"),ma=a("span"),b(Uo.$$.fragment),kp=h(),fa=a("span"),yp=n("LukeForSequenceClassification"),br=h(),N=a("div"),b(Bo.$$.fragment),bp=h(),ga=a("p"),vp=n(`The LUKE Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Tp=h(),Ko=a("p"),wp=n("This model inherits from "),Gn=a("a"),Lp=n("PreTrainedModel"),$p=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zp=h(),Ro=a("p"),Ep=n("This model is also a PyTorch "),Vo=a("a"),xp=n("torch.nn.Module"),Fp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cp=h(),C=a("div"),b(Qo.$$.fragment),qp=h(),Ue=a("p"),jp=n("The "),Jn=a("a"),Mp=n("LukeForSequenceClassification"),Pp=n(" forward method, overrides the "),_a=a("code"),Ap=n("__call__"),Sp=n(" special method."),Op=h(),b(vt.$$.fragment),Ip=h(),b(Tt.$$.fragment),Np=h(),b(wt.$$.fragment),Dp=h(),b(Lt.$$.fragment),Wp=h(),b($t.$$.fragment),vr=h(),Be=a("h2"),zt=a("a"),ka=a("span"),b(Ho.$$.fragment),Up=h(),ya=a("span"),Bp=n("LukeForMultipleChoice"),Tr=h(),D=a("div"),b(Yo.$$.fragment),Kp=h(),ba=a("p"),Rp=n(`The LUKE Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Vp=h(),Go=a("p"),Qp=n("This model inherits from "),Xn=a("a"),Hp=n("PreTrainedModel"),Yp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gp=h(),Jo=a("p"),Jp=n("This model is also a PyTorch "),Xo=a("a"),Xp=n("torch.nn.Module"),Zp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),eh=h(),ie=a("div"),b(Zo.$$.fragment),th=h(),Ke=a("p"),oh=n("The "),Zn=a("a"),nh=n("LukeForMultipleChoice"),sh=n(" forward method, overrides the "),va=a("code"),ah=n("__call__"),rh=n(" special method."),ih=h(),b(Et.$$.fragment),lh=h(),b(xt.$$.fragment),wr=h(),Re=a("h2"),Ft=a("a"),Ta=a("span"),b(en.$$.fragment),dh=h(),wa=a("span"),ch=n("LukeForTokenClassification"),Lr=h(),W=a("div"),b(tn.$$.fragment),ph=h(),on=a("p"),hh=n(`The LUKE Model with a token classification head on top (a linear layer on top of the hidden-states output). To
solve Named-Entity Recognition (NER) task using LUKE, `),La=a("code"),uh=n("LukeForEntitySpanClassification"),mh=n(` is more suitable than this
class.`),fh=h(),nn=a("p"),gh=n("This model inherits from "),es=a("a"),_h=n("PreTrainedModel"),kh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yh=h(),sn=a("p"),bh=n("This model is also a PyTorch "),an=a("a"),vh=n("torch.nn.Module"),Th=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wh=h(),V=a("div"),b(rn.$$.fragment),Lh=h(),Ve=a("p"),$h=n("The "),ts=a("a"),zh=n("LukeForTokenClassification"),Eh=n(" forward method, overrides the "),$a=a("code"),xh=n("__call__"),Fh=n(" special method."),Ch=h(),b(Ct.$$.fragment),qh=h(),b(qt.$$.fragment),jh=h(),b(jt.$$.fragment),$r=h(),Qe=a("h2"),Mt=a("a"),za=a("span"),b(ln.$$.fragment),Mh=h(),Ea=a("span"),Ph=n("LukeForQuestionAnswering"),zr=h(),U=a("div"),b(dn.$$.fragment),Ah=h(),He=a("p"),Sh=n(`The LUKE Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),xa=a("code"),Oh=n("span start logits"),Ih=n(" and "),Fa=a("code"),Nh=n("span end logits"),Dh=n(")."),Wh=h(),cn=a("p"),Uh=n("This model inherits from "),os=a("a"),Bh=n("PreTrainedModel"),Kh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rh=h(),pn=a("p"),Vh=n("This model is also a PyTorch "),hn=a("a"),Qh=n("torch.nn.Module"),Hh=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yh=h(),Q=a("div"),b(un.$$.fragment),Gh=h(),Ye=a("p"),Jh=n("The "),ns=a("a"),Xh=n("LukeForQuestionAnswering"),Zh=n(" forward method, overrides the "),Ca=a("code"),eu=n("__call__"),tu=n(" special method."),ou=h(),b(Pt.$$.fragment),nu=h(),b(At.$$.fragment),su=h(),b(St.$$.fragment),this.h()},l(o){const g=wf('[data-svelte="svelte-1phssyn"]',document.head);d=r(g,"META",{name:!0,content:!0}),g.forEach(t),_=u(o),c=r(o,"H1",{class:!0});var mn=i(c);f=r(mn,"A",{id:!0,class:!0,href:!0});var qa=i(f);y=r(qa,"SPAN",{});var ja=i(y);v(l.$$.fragment,ja),ja.forEach(t),qa.forEach(t),m=u(mn),E=r(mn,"SPAN",{});var Ma=i(E);li=s(Ma,"LUKE"),Ma.forEach(t),mn.forEach(t),Ga=u(o),Le=r(o,"H2",{class:!0});var fn=i(Le);Xe=r(fn,"A",{id:!0,class:!0,href:!0});var Pa=i(Xe);ys=r(Pa,"SPAN",{});var Aa=i(ys);v(Kt.$$.fragment,Aa),Aa.forEach(t),Pa.forEach(t),di=u(fn),bs=r(fn,"SPAN",{});var Sa=i(bs);ci=s(Sa,"Overview"),Sa.forEach(t),fn.forEach(t),Ja=u(o),Ze=r(o,"P",{});var gn=i(Ze);pi=s(gn,"The LUKE model was proposed in "),Rt=r(gn,"A",{href:!0,rel:!0});var Oa=i(Rt);hi=s(Oa,"LUKE: Deep Contextualized Entity Representations with Entity-aware Self-attention"),Oa.forEach(t),ui=s(gn,` by Ikuya Yamada, Akari Asai, Hiroyuki Shindo, Hideaki Takeda and Yuji Matsumoto.
It is based on RoBERTa and adds entity embeddings as well as an entity-aware self-attention mechanism, which helps
improve performance on various downstream tasks involving reasoning about entities such as named entity recognition,
extractive and cloze-style question answering, entity typing, and relation classification.`),gn.forEach(t),Xa=u(o),kn=r(o,"P",{});var Ia=i(kn);mi=s(Ia,"The abstract from the paper is the following:"),Ia.forEach(t),Za=u(o),yn=r(o,"P",{});var Na=i(yn);vs=r(Na,"EM",{});var Da=i(vs);fi=s(Da,`Entity representations are useful in natural language tasks involving entities. In this paper, we propose new
pretrained contextualized representations of words and entities based on the bidirectional transformer. The proposed
model treats words and entities in a given text as independent tokens, and outputs contextualized representations of
them. Our model is trained using a new pretraining task based on the masked language model of BERT. The task involves
predicting randomly masked words and entities in a large entity-annotated corpus retrieved from Wikipedia. We also
propose an entity-aware self-attention mechanism that is an extension of the self-attention mechanism of the
transformer, and considers the types of tokens (words or entities) when computing attention scores. The proposed model
achieves impressive empirical performance on a wide range of entity-related tasks. In particular, it obtains
state-of-the-art results on five well-known datasets: Open Entity (entity typing), TACRED (relation classification),
CoNLL-2003 (named entity recognition), ReCoRD (cloze-style question answering), and SQuAD 1.1 (extractive question
answering).`),Da.forEach(t),Na.forEach(t),er=u(o),bn=r(o,"P",{});var Wa=i(bn);gi=s(Wa,"Tips:"),Wa.forEach(t),tr=u(o),ee=r(o,"UL",{});var le=i(ee);Ts=r(le,"LI",{});var Ua=i(Ts);Vt=r(Ua,"P",{});var _n=i(Vt);_i=s(_n,"This implementation is the same as "),vn=r(_n,"A",{href:!0});var Ba=i(vn);ki=s(Ba,"RobertaModel"),Ba.forEach(t),yi=s(_n,` with the addition of entity embeddings as well
as an entity-aware self-attention mechanism, which improves performance on tasks involving reasoning about entities.`),_n.forEach(t),Ua.forEach(t),bi=u(le),ws=r(le,"LI",{});var Ka=i(ws);j=r(Ka,"P",{});var B=i(j);vi=s(B,"LUKE treats entities as input tokens; therefore, it takes "),Ls=r(B,"CODE",{});var Ra=i(Ls);Ti=s(Ra,"entity_ids"),Ra.forEach(t),wi=s(B,", "),$s=r(B,"CODE",{});var Va=i($s);Li=s(Va,"entity_attention_mask"),Va.forEach(t),$i=s(B,`,
`),zs=r(B,"CODE",{});var Qa=i(zs);zi=s(Qa,"entity_token_type_ids"),Qa.forEach(t),Ei=s(B," and "),Es=r(B,"CODE",{});var lu=i(Es);xi=s(lu,"entity_position_ids"),lu.forEach(t),Fi=s(B,` as extra input. You can obtain those using
`),Tn=r(B,"A",{href:!0});var du=i(Tn);Ci=s(du,"LukeTokenizer"),du.forEach(t),qi=s(B,"."),B.forEach(t),Ka.forEach(t),ji=u(le),Qt=r(le,"LI",{});var xr=i(Qt);te=r(xr,"P",{});var Ge=i(te);wn=r(Ge,"A",{href:!0});var cu=i(wn);Mi=s(cu,"LukeTokenizer"),cu.forEach(t),Pi=s(Ge," takes "),xs=r(Ge,"CODE",{});var pu=i(xs);Ai=s(pu,"entities"),pu.forEach(t),Si=s(Ge," and "),Fs=r(Ge,"CODE",{});var hu=i(Fs);Oi=s(hu,"entity_spans"),hu.forEach(t),Ii=s(Ge,` (character-based start and end
positions of the entities in the input text) as extra input. `),Cs=r(Ge,"CODE",{});var uu=i(Cs);Ni=s(uu,"entities"),uu.forEach(t),Di=s(Ge,` typically consist of [MASK] entities or
Wikipedia entities. The brief description when inputting these entities are as follows:`),Ge.forEach(t),Wi=u(xr),Ht=r(xr,"UL",{});var Fr=i(Ht);Ln=r(Fr,"LI",{});var au=i(Ln);qs=r(au,"EM",{});var mu=i(qs);Ui=s(mu,"Inputting [MASK] entities to compute entity representations"),mu.forEach(t),Bi=s(au,`: The [MASK] entity is used to mask entities to be
predicted during pretraining. When LUKE receives the [MASK] entity, it tries to predict the original entity by
gathering the information about the entity from the input text. Therefore, the [MASK] entity can be used to address
downstream tasks requiring the information of entities in text such as entity typing, relation classification, and
named entity recognition.`),au.forEach(t),Ki=u(Fr),$n=r(Fr,"LI",{});var ru=i($n);js=r(ru,"EM",{});var fu=i(js);Ri=s(fu,"Inputting Wikipedia entities to compute knowledge-enhanced token representations"),fu.forEach(t),Vi=s(ru,`: LUKE learns rich information
(or knowledge) about Wikipedia entities during pretraining and stores the information in its entity embedding. By
using Wikipedia entities as input tokens, LUKE outputs token representations enriched by the information stored in
the embeddings of these entities. This is particularly effective for tasks requiring real-world knowledge, such as
question answering.`),ru.forEach(t),Fr.forEach(t),xr.forEach(t),Qi=u(le),J=r(le,"LI",{});var pe=i(J);Ms=r(pe,"P",{});var gu=i(Ms);Hi=s(gu,"There are three head models for the former use case:"),gu.forEach(t),Yi=u(pe),$e=r(pe,"UL",{});var ss=i($e);et=r(ss,"LI",{});var Ha=i(et);zn=r(Ha,"A",{href:!0});var _u=i(zn);Gi=s(_u,"LukeForEntityClassification"),_u.forEach(t),Ji=s(Ha,`, for tasks to classify a single entity in an input text such as
entity typing, e.g. the `),Yt=r(Ha,"A",{href:!0,rel:!0});var ku=i(Yt);Xi=s(ku,"Open Entity dataset"),ku.forEach(t),Zi=s(Ha,`.
This model places a linear head on top of the output entity representation.`),Ha.forEach(t),el=u(ss),tt=r(ss,"LI",{});var Ya=i(tt);En=r(Ya,"A",{href:!0});var yu=i(En);tl=s(yu,"LukeForEntityPairClassification"),yu.forEach(t),ol=s(Ya,`, for tasks to classify the relationship between two entities
such as relation classification, e.g. the `),Gt=r(Ya,"A",{href:!0,rel:!0});var bu=i(Gt);nl=s(bu,"TACRED dataset"),bu.forEach(t),sl=s(Ya,`. This
model places a linear head on top of the concatenated output representation of the pair of given entities.`),Ya.forEach(t),al=u(ss),xn=r(ss,"LI",{});var iu=i(xn);Fn=r(iu,"A",{href:!0});var vu=i(Fn);rl=s(vu,"LukeForEntitySpanClassification"),vu.forEach(t),il=s(iu,`, for tasks to classify the sequence of entity spans, such as
named entity recognition (NER). This model places a linear head on top of the output entity representations. You
can address NER using this model by inputting all possible entity spans in the text to the model.`),iu.forEach(t),ss.forEach(t),ll=u(pe),R=r(pe,"P",{});var de=i(R);Cn=r(de,"A",{href:!0});var Tu=i(Cn);dl=s(Tu,"LukeTokenizer"),Tu.forEach(t),cl=s(de," has a "),Ps=r(de,"CODE",{});var wu=i(Ps);pl=s(wu,"task"),wu.forEach(t),hl=s(de,` argument, which enables you to easily create an input to these
head models by specifying `),As=r(de,"CODE",{});var Lu=i(As);ul=s(Lu,'task="entity_classification"'),Lu.forEach(t),ml=s(de,", "),Ss=r(de,"CODE",{});var $u=i(Ss);fl=s($u,'task="entity_pair_classification"'),$u.forEach(t),gl=s(de,`, or
`),Os=r(de,"CODE",{});var zu=i(Os);_l=s(zu,'task="entity_span_classification"'),zu.forEach(t),kl=s(de,". Please refer to the example code of each head models."),de.forEach(t),yl=u(pe),ze=r(pe,"P",{});var as=i(ze);bl=s(as,"A demo notebook on how to fine-tune "),qn=r(as,"A",{href:!0});var Eu=i(qn);vl=s(Eu,"LukeForEntityPairClassification"),Eu.forEach(t),Tl=s(as,` for relation
classification can be found `),Jt=r(as,"A",{href:!0,rel:!0});var xu=i(Jt);wl=s(xu,"here"),xu.forEach(t),Ll=s(as,"."),as.forEach(t),$l=u(pe),Xt=r(pe,"P",{});var Cr=i(Xt);zl=s(Cr,`There are also 3 notebooks available, which showcase how you can reproduce the results as reported in the paper with
the HuggingFace implementation of LUKE. They can be found `),Zt=r(Cr,"A",{href:!0,rel:!0});var Fu=i(Zt);El=s(Fu,"here"),Fu.forEach(t),xl=s(Cr,"."),Cr.forEach(t),pe.forEach(t),le.forEach(t),or=u(o),jn=r(o,"P",{});var Cu=i(jn);Fl=s(Cu,"Example:"),Cu.forEach(t),nr=u(o),v(eo.$$.fragment,o),sr=u(o),oe=r(o,"P",{});var Ot=i(oe);Cl=s(Ot,"This model was contributed by "),to=r(Ot,"A",{href:!0,rel:!0});var qu=i(to);ql=s(qu,"ikuyamada"),qu.forEach(t),jl=s(Ot," and "),oo=r(Ot,"A",{href:!0,rel:!0});var ju=i(oo);Ml=s(ju,"nielsr"),ju.forEach(t),Pl=s(Ot,". The original code can be found "),no=r(Ot,"A",{href:!0,rel:!0});var Mu=i(no);Al=s(Mu,"here"),Mu.forEach(t),Sl=s(Ot,"."),Ot.forEach(t),ar=u(o),Ee=r(o,"H2",{class:!0});var qr=i(Ee);ot=r(qr,"A",{id:!0,class:!0,href:!0});var Pu=i(ot);Is=r(Pu,"SPAN",{});var Au=i(Is);v(so.$$.fragment,Au),Au.forEach(t),Pu.forEach(t),Ol=u(qr),Ns=r(qr,"SPAN",{});var Su=i(Ns);Il=s(Su,"LukeConfig"),Su.forEach(t),qr.forEach(t),rr=u(o),X=r(o,"DIV",{class:!0});var It=i(X);v(ao.$$.fragment,It),Nl=u(It),xe=r(It,"P",{});var rs=i(xe);Dl=s(rs,"This is the configuration class to store the configuration of a "),Mn=r(rs,"A",{href:!0});var Ou=i(Mn);Wl=s(Ou,"LukeModel"),Ou.forEach(t),Ul=s(rs,`. It is used to instantiate a LUKE
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LUKE
`),ro=r(rs,"A",{href:!0,rel:!0});var Iu=i(ro);Bl=s(Iu,"studio-ousia/luke-base"),Iu.forEach(t),Kl=s(rs," architecture."),rs.forEach(t),Rl=u(It),Fe=r(It,"P",{});var is=i(Fe);Vl=s(is,"Configuration objects inherit from "),Pn=r(is,"A",{href:!0});var Nu=i(Pn);Ql=s(Nu,"PretrainedConfig"),Nu.forEach(t),Hl=s(is,` and can be used to control the model outputs. Read the
documentation from `),An=r(is,"A",{href:!0});var Du=i(An);Yl=s(Du,"PretrainedConfig"),Du.forEach(t),Gl=s(is," for more information."),is.forEach(t),Jl=u(It),v(nt.$$.fragment,It),It.forEach(t),ir=u(o),Ce=r(o,"H2",{class:!0});var jr=i(Ce);st=r(jr,"A",{id:!0,class:!0,href:!0});var Wu=i(st);Ds=r(Wu,"SPAN",{});var Uu=i(Ds);v(io.$$.fragment,Uu),Uu.forEach(t),Wu.forEach(t),Xl=u(jr),Ws=r(jr,"SPAN",{});var Bu=i(Ws);Zl=s(Bu,"LukeTokenizer"),Bu.forEach(t),jr.forEach(t),lr=u(o),M=r(o,"DIV",{class:!0});var he=i(M);v(lo.$$.fragment,he),ed=u(he),Us=r(he,"P",{});var Ku=i(Us);td=s(Ku,"Construct a LUKE tokenizer."),Ku.forEach(t),od=u(he),F=r(he,"P",{});var q=i(F);nd=s(q,"This tokenizer inherits from "),Sn=r(q,"A",{href:!0});var Ru=i(Sn);sd=s(Ru,"RobertaTokenizer"),Ru.forEach(t),ad=s(q,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods. Compared to `),On=r(q,"A",{href:!0});var Vu=i(On);rd=s(Vu,"RobertaTokenizer"),Vu.forEach(t),id=s(q,", "),In=r(q,"A",{href:!0});var Qu=i(In);ld=s(Qu,"LukeTokenizer"),Qu.forEach(t),dd=s(q,`
also creates entity sequences, namely `),Bs=r(q,"CODE",{});var Hu=i(Bs);cd=s(Hu,"entity_ids"),Hu.forEach(t),pd=s(q,", "),Ks=r(q,"CODE",{});var Yu=i(Ks);hd=s(Yu,"entity_attention_mask"),Yu.forEach(t),ud=s(q,", "),Rs=r(q,"CODE",{});var Gu=i(Rs);md=s(Gu,"entity_token_type_ids"),Gu.forEach(t),fd=s(q,`, and
`),Vs=r(q,"CODE",{});var Ju=i(Vs);gd=s(Ju,"entity_position_ids"),Ju.forEach(t),_d=s(q," to be used by the LUKE model."),q.forEach(t),kd=u(he),at=r(he,"DIV",{class:!0});var Mr=i(at);v(co.$$.fragment,Mr),yd=u(Mr),Qs=r(Mr,"P",{});var Xu=i(Qs);bd=s(Xu,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences, depending on the task you want to prepare them for.`),Xu.forEach(t),Mr.forEach(t),vd=u(he),Nn=r(he,"DIV",{class:!0});var Zu=i(Nn);v(po.$$.fragment,Zu),Zu.forEach(t),he.forEach(t),dr=u(o),qe=r(o,"H2",{class:!0});var Pr=i(qe);rt=r(Pr,"A",{id:!0,class:!0,href:!0});var em=i(rt);Hs=r(em,"SPAN",{});var tm=i(Hs);v(ho.$$.fragment,tm),tm.forEach(t),em.forEach(t),Td=u(Pr),Ys=r(Pr,"SPAN",{});var om=i(Ys);wd=s(om,"LukeModel"),om.forEach(t),Pr.forEach(t),cr=u(o),P=r(o,"DIV",{class:!0});var ue=i(P);v(uo.$$.fragment,ue),Ld=u(ue),Gs=r(ue,"P",{});var nm=i(Gs);$d=s(nm,"The bare LUKE model transformer outputting raw hidden-states for both word tokens and entities without any specific head on top."),nm.forEach(t),zd=u(ue),mo=r(ue,"P",{});var Ar=i(mo);Ed=s(Ar,"This model inherits from "),Dn=r(Ar,"A",{href:!0});var sm=i(Dn);xd=s(sm,"PreTrainedModel"),sm.forEach(t),Fd=s(Ar,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ar.forEach(t),Cd=u(ue),fo=r(ue,"P",{});var Sr=i(fo);qd=s(Sr,"This model is also a PyTorch "),go=r(Sr,"A",{href:!0,rel:!0});var am=i(go);jd=s(am,"torch.nn.Module"),am.forEach(t),Md=s(Sr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sr.forEach(t),Pd=u(ue),ne=r(ue,"DIV",{class:!0});var Nt=i(ne);v(_o.$$.fragment,Nt),Ad=u(Nt),je=r(Nt,"P",{});var ls=i(je);Sd=s(ls,"The "),Wn=r(ls,"A",{href:!0});var rm=i(Wn);Od=s(rm,"LukeModel"),rm.forEach(t),Id=s(ls," forward method, overrides the "),Js=r(ls,"CODE",{});var im=i(Js);Nd=s(im,"__call__"),im.forEach(t),Dd=s(ls," special method."),ls.forEach(t),Wd=u(Nt),v(it.$$.fragment,Nt),Ud=u(Nt),v(lt.$$.fragment,Nt),Nt.forEach(t),ue.forEach(t),pr=u(o),Me=r(o,"H2",{class:!0});var Or=i(Me);dt=r(Or,"A",{id:!0,class:!0,href:!0});var lm=i(dt);Xs=r(lm,"SPAN",{});var dm=i(Xs);v(ko.$$.fragment,dm),dm.forEach(t),lm.forEach(t),Bd=u(Or),Zs=r(Or,"SPAN",{});var cm=i(Zs);Kd=s(cm,"LukeForMaskedLM"),cm.forEach(t),Or.forEach(t),hr=u(o),A=r(o,"DIV",{class:!0});var me=i(A);v(yo.$$.fragment,me),Rd=u(me),ea=r(me,"P",{});var pm=i(ea);Vd=s(pm,`The LUKE model with a language modeling head and entity prediction head on top for masked language modeling and
masked entity prediction.`),pm.forEach(t),Qd=u(me),bo=r(me,"P",{});var Ir=i(bo);Hd=s(Ir,"This model inherits from "),Un=r(Ir,"A",{href:!0});var hm=i(Un);Yd=s(hm,"PreTrainedModel"),hm.forEach(t),Gd=s(Ir,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ir.forEach(t),Jd=u(me),vo=r(me,"P",{});var Nr=i(vo);Xd=s(Nr,"This model is also a PyTorch "),To=r(Nr,"A",{href:!0,rel:!0});var um=i(To);Zd=s(um,"torch.nn.Module"),um.forEach(t),ec=s(Nr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nr.forEach(t),tc=u(me),ce=r(me,"DIV",{class:!0});var ds=i(ce);v(wo.$$.fragment,ds),oc=u(ds),Pe=r(ds,"P",{});var cs=i(Pe);nc=s(cs,"The "),Bn=r(cs,"A",{href:!0});var mm=i(Bn);sc=s(mm,"LukeForMaskedLM"),mm.forEach(t),ac=s(cs," forward method, overrides the "),ta=r(cs,"CODE",{});var fm=i(ta);rc=s(fm,"__call__"),fm.forEach(t),ic=s(cs," special method."),cs.forEach(t),lc=u(ds),v(ct.$$.fragment,ds),ds.forEach(t),me.forEach(t),ur=u(o),Ae=r(o,"H2",{class:!0});var Dr=i(Ae);pt=r(Dr,"A",{id:!0,class:!0,href:!0});var gm=i(pt);oa=r(gm,"SPAN",{});var _m=i(oa);v(Lo.$$.fragment,_m),_m.forEach(t),gm.forEach(t),dc=u(Dr),na=r(Dr,"SPAN",{});var km=i(na);cc=s(km,"LukeForEntityClassification"),km.forEach(t),Dr.forEach(t),mr=u(o),S=r(o,"DIV",{class:!0});var fe=i(S);v($o.$$.fragment,fe),pc=u(fe),sa=r(fe,"P",{});var ym=i(sa);hc=s(ym,`The LUKE model with a classification head on top (a linear layer on top of the hidden state of the first entity
token) for entity classification tasks, such as Open Entity.`),ym.forEach(t),uc=u(fe),zo=r(fe,"P",{});var Wr=i(zo);mc=s(Wr,"This model inherits from "),Kn=r(Wr,"A",{href:!0});var bm=i(Kn);fc=s(bm,"PreTrainedModel"),bm.forEach(t),gc=s(Wr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wr.forEach(t),_c=u(fe),Eo=r(fe,"P",{});var Ur=i(Eo);kc=s(Ur,"This model is also a PyTorch "),xo=r(Ur,"A",{href:!0,rel:!0});var vm=i(xo);yc=s(vm,"torch.nn.Module"),vm.forEach(t),bc=s(Ur,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ur.forEach(t),vc=u(fe),se=r(fe,"DIV",{class:!0});var Dt=i(se);v(Fo.$$.fragment,Dt),Tc=u(Dt),Se=r(Dt,"P",{});var ps=i(Se);wc=s(ps,"The "),Rn=r(ps,"A",{href:!0});var Tm=i(Rn);Lc=s(Tm,"LukeForEntityClassification"),Tm.forEach(t),$c=s(ps," forward method, overrides the "),aa=r(ps,"CODE",{});var wm=i(aa);zc=s(wm,"__call__"),wm.forEach(t),Ec=s(ps," special method."),ps.forEach(t),xc=u(Dt),v(ht.$$.fragment,Dt),Fc=u(Dt),v(ut.$$.fragment,Dt),Dt.forEach(t),fe.forEach(t),fr=u(o),Oe=r(o,"H2",{class:!0});var Br=i(Oe);mt=r(Br,"A",{id:!0,class:!0,href:!0});var Lm=i(mt);ra=r(Lm,"SPAN",{});var $m=i(ra);v(Co.$$.fragment,$m),$m.forEach(t),Lm.forEach(t),Cc=u(Br),ia=r(Br,"SPAN",{});var zm=i(ia);qc=s(zm,"LukeForEntityPairClassification"),zm.forEach(t),Br.forEach(t),gr=u(o),O=r(o,"DIV",{class:!0});var ge=i(O);v(qo.$$.fragment,ge),jc=u(ge),la=r(ge,"P",{});var Em=i(la);Mc=s(Em,`The LUKE model with a classification head on top (a linear layer on top of the hidden states of the two entity
tokens) for entity pair classification tasks, such as TACRED.`),Em.forEach(t),Pc=u(ge),jo=r(ge,"P",{});var Kr=i(jo);Ac=s(Kr,"This model inherits from "),Vn=r(Kr,"A",{href:!0});var xm=i(Vn);Sc=s(xm,"PreTrainedModel"),xm.forEach(t),Oc=s(Kr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kr.forEach(t),Ic=u(ge),Mo=r(ge,"P",{});var Rr=i(Mo);Nc=s(Rr,"This model is also a PyTorch "),Po=r(Rr,"A",{href:!0,rel:!0});var Fm=i(Po);Dc=s(Fm,"torch.nn.Module"),Fm.forEach(t),Wc=s(Rr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rr.forEach(t),Uc=u(ge),ae=r(ge,"DIV",{class:!0});var Wt=i(ae);v(Ao.$$.fragment,Wt),Bc=u(Wt),Ie=r(Wt,"P",{});var hs=i(Ie);Kc=s(hs,"The "),Qn=r(hs,"A",{href:!0});var Cm=i(Qn);Rc=s(Cm,"LukeForEntityPairClassification"),Cm.forEach(t),Vc=s(hs," forward method, overrides the "),da=r(hs,"CODE",{});var qm=i(da);Qc=s(qm,"__call__"),qm.forEach(t),Hc=s(hs," special method."),hs.forEach(t),Yc=u(Wt),v(ft.$$.fragment,Wt),Gc=u(Wt),v(gt.$$.fragment,Wt),Wt.forEach(t),ge.forEach(t),_r=u(o),Ne=r(o,"H2",{class:!0});var Vr=i(Ne);_t=r(Vr,"A",{id:!0,class:!0,href:!0});var jm=i(_t);ca=r(jm,"SPAN",{});var Mm=i(ca);v(So.$$.fragment,Mm),Mm.forEach(t),jm.forEach(t),Jc=u(Vr),pa=r(Vr,"SPAN",{});var Pm=i(pa);Xc=s(Pm,"LukeForEntitySpanClassification"),Pm.forEach(t),Vr.forEach(t),kr=u(o),I=r(o,"DIV",{class:!0});var _e=i(I);v(Oo.$$.fragment,_e),Zc=u(_e),ha=r(_e,"P",{});var Am=i(ha);ep=s(Am,`The LUKE model with a span classification head on top (a linear layer on top of the hidden states output) for tasks
such as named entity recognition.`),Am.forEach(t),tp=u(_e),Io=r(_e,"P",{});var Qr=i(Io);op=s(Qr,"This model inherits from "),Hn=r(Qr,"A",{href:!0});var Sm=i(Hn);np=s(Sm,"PreTrainedModel"),Sm.forEach(t),sp=s(Qr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qr.forEach(t),ap=u(_e),No=r(_e,"P",{});var Hr=i(No);rp=s(Hr,"This model is also a PyTorch "),Do=r(Hr,"A",{href:!0,rel:!0});var Om=i(Do);ip=s(Om,"torch.nn.Module"),Om.forEach(t),lp=s(Hr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hr.forEach(t),dp=u(_e),re=r(_e,"DIV",{class:!0});var Ut=i(re);v(Wo.$$.fragment,Ut),cp=u(Ut),De=r(Ut,"P",{});var us=i(De);pp=s(us,"The "),Yn=r(us,"A",{href:!0});var Im=i(Yn);hp=s(Im,"LukeForEntitySpanClassification"),Im.forEach(t),up=s(us," forward method, overrides the "),ua=r(us,"CODE",{});var Nm=i(ua);mp=s(Nm,"__call__"),Nm.forEach(t),fp=s(us," special method."),us.forEach(t),gp=u(Ut),v(kt.$$.fragment,Ut),_p=u(Ut),v(yt.$$.fragment,Ut),Ut.forEach(t),_e.forEach(t),yr=u(o),We=r(o,"H2",{class:!0});var Yr=i(We);bt=r(Yr,"A",{id:!0,class:!0,href:!0});var Dm=i(bt);ma=r(Dm,"SPAN",{});var Wm=i(ma);v(Uo.$$.fragment,Wm),Wm.forEach(t),Dm.forEach(t),kp=u(Yr),fa=r(Yr,"SPAN",{});var Um=i(fa);yp=s(Um,"LukeForSequenceClassification"),Um.forEach(t),Yr.forEach(t),br=u(o),N=r(o,"DIV",{class:!0});var ke=i(N);v(Bo.$$.fragment,ke),bp=u(ke),ga=r(ke,"P",{});var Bm=i(ga);vp=s(Bm,`The LUKE Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Bm.forEach(t),Tp=u(ke),Ko=r(ke,"P",{});var Gr=i(Ko);wp=s(Gr,"This model inherits from "),Gn=r(Gr,"A",{href:!0});var Km=i(Gn);Lp=s(Km,"PreTrainedModel"),Km.forEach(t),$p=s(Gr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gr.forEach(t),zp=u(ke),Ro=r(ke,"P",{});var Jr=i(Ro);Ep=s(Jr,"This model is also a PyTorch "),Vo=r(Jr,"A",{href:!0,rel:!0});var Rm=i(Vo);xp=s(Rm,"torch.nn.Module"),Rm.forEach(t),Fp=s(Jr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jr.forEach(t),Cp=u(ke),C=r(ke,"DIV",{class:!0});var H=i(C);v(Qo.$$.fragment,H),qp=u(H),Ue=r(H,"P",{});var ms=i(Ue);jp=s(ms,"The "),Jn=r(ms,"A",{href:!0});var Vm=i(Jn);Mp=s(Vm,"LukeForSequenceClassification"),Vm.forEach(t),Pp=s(ms," forward method, overrides the "),_a=r(ms,"CODE",{});var Qm=i(_a);Ap=s(Qm,"__call__"),Qm.forEach(t),Sp=s(ms," special method."),ms.forEach(t),Op=u(H),v(vt.$$.fragment,H),Ip=u(H),v(Tt.$$.fragment,H),Np=u(H),v(wt.$$.fragment,H),Dp=u(H),v(Lt.$$.fragment,H),Wp=u(H),v($t.$$.fragment,H),H.forEach(t),ke.forEach(t),vr=u(o),Be=r(o,"H2",{class:!0});var Xr=i(Be);zt=r(Xr,"A",{id:!0,class:!0,href:!0});var Hm=i(zt);ka=r(Hm,"SPAN",{});var Ym=i(ka);v(Ho.$$.fragment,Ym),Ym.forEach(t),Hm.forEach(t),Up=u(Xr),ya=r(Xr,"SPAN",{});var Gm=i(ya);Bp=s(Gm,"LukeForMultipleChoice"),Gm.forEach(t),Xr.forEach(t),Tr=u(o),D=r(o,"DIV",{class:!0});var ye=i(D);v(Yo.$$.fragment,ye),Kp=u(ye),ba=r(ye,"P",{});var Jm=i(ba);Rp=s(Jm,`The LUKE Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Jm.forEach(t),Vp=u(ye),Go=r(ye,"P",{});var Zr=i(Go);Qp=s(Zr,"This model inherits from "),Xn=r(Zr,"A",{href:!0});var Xm=i(Xn);Hp=s(Xm,"PreTrainedModel"),Xm.forEach(t),Yp=s(Zr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zr.forEach(t),Gp=u(ye),Jo=r(ye,"P",{});var ei=i(Jo);Jp=s(ei,"This model is also a PyTorch "),Xo=r(ei,"A",{href:!0,rel:!0});var Zm=i(Xo);Xp=s(Zm,"torch.nn.Module"),Zm.forEach(t),Zp=s(ei,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ei.forEach(t),eh=u(ye),ie=r(ye,"DIV",{class:!0});var Bt=i(ie);v(Zo.$$.fragment,Bt),th=u(Bt),Ke=r(Bt,"P",{});var fs=i(Ke);oh=s(fs,"The "),Zn=r(fs,"A",{href:!0});var ef=i(Zn);nh=s(ef,"LukeForMultipleChoice"),ef.forEach(t),sh=s(fs," forward method, overrides the "),va=r(fs,"CODE",{});var tf=i(va);ah=s(tf,"__call__"),tf.forEach(t),rh=s(fs," special method."),fs.forEach(t),ih=u(Bt),v(Et.$$.fragment,Bt),lh=u(Bt),v(xt.$$.fragment,Bt),Bt.forEach(t),ye.forEach(t),wr=u(o),Re=r(o,"H2",{class:!0});var ti=i(Re);Ft=r(ti,"A",{id:!0,class:!0,href:!0});var of=i(Ft);Ta=r(of,"SPAN",{});var nf=i(Ta);v(en.$$.fragment,nf),nf.forEach(t),of.forEach(t),dh=u(ti),wa=r(ti,"SPAN",{});var sf=i(wa);ch=s(sf,"LukeForTokenClassification"),sf.forEach(t),ti.forEach(t),Lr=u(o),W=r(o,"DIV",{class:!0});var be=i(W);v(tn.$$.fragment,be),ph=u(be),on=r(be,"P",{});var oi=i(on);hh=s(oi,`The LUKE Model with a token classification head on top (a linear layer on top of the hidden-states output). To
solve Named-Entity Recognition (NER) task using LUKE, `),La=r(oi,"CODE",{});var af=i(La);uh=s(af,"LukeForEntitySpanClassification"),af.forEach(t),mh=s(oi,` is more suitable than this
class.`),oi.forEach(t),fh=u(be),nn=r(be,"P",{});var ni=i(nn);gh=s(ni,"This model inherits from "),es=r(ni,"A",{href:!0});var rf=i(es);_h=s(rf,"PreTrainedModel"),rf.forEach(t),kh=s(ni,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ni.forEach(t),yh=u(be),sn=r(be,"P",{});var si=i(sn);bh=s(si,"This model is also a PyTorch "),an=r(si,"A",{href:!0,rel:!0});var lf=i(an);vh=s(lf,"torch.nn.Module"),lf.forEach(t),Th=s(si,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),si.forEach(t),wh=u(be),V=r(be,"DIV",{class:!0});var ve=i(V);v(rn.$$.fragment,ve),Lh=u(ve),Ve=r(ve,"P",{});var gs=i(Ve);$h=s(gs,"The "),ts=r(gs,"A",{href:!0});var df=i(ts);zh=s(df,"LukeForTokenClassification"),df.forEach(t),Eh=s(gs," forward method, overrides the "),$a=r(gs,"CODE",{});var cf=i($a);xh=s(cf,"__call__"),cf.forEach(t),Fh=s(gs," special method."),gs.forEach(t),Ch=u(ve),v(Ct.$$.fragment,ve),qh=u(ve),v(qt.$$.fragment,ve),jh=u(ve),v(jt.$$.fragment,ve),ve.forEach(t),be.forEach(t),$r=u(o),Qe=r(o,"H2",{class:!0});var ai=i(Qe);Mt=r(ai,"A",{id:!0,class:!0,href:!0});var pf=i(Mt);za=r(pf,"SPAN",{});var hf=i(za);v(ln.$$.fragment,hf),hf.forEach(t),pf.forEach(t),Mh=u(ai),Ea=r(ai,"SPAN",{});var uf=i(Ea);Ph=s(uf,"LukeForQuestionAnswering"),uf.forEach(t),ai.forEach(t),zr=u(o),U=r(o,"DIV",{class:!0});var Te=i(U);v(dn.$$.fragment,Te),Ah=u(Te),He=r(Te,"P",{});var _s=i(He);Sh=s(_s,`The LUKE Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),xa=r(_s,"CODE",{});var mf=i(xa);Oh=s(mf,"span start logits"),mf.forEach(t),Ih=s(_s," and "),Fa=r(_s,"CODE",{});var ff=i(Fa);Nh=s(ff,"span end logits"),ff.forEach(t),Dh=s(_s,")."),_s.forEach(t),Wh=u(Te),cn=r(Te,"P",{});var ri=i(cn);Uh=s(ri,"This model inherits from "),os=r(ri,"A",{href:!0});var gf=i(os);Bh=s(gf,"PreTrainedModel"),gf.forEach(t),Kh=s(ri,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ri.forEach(t),Rh=u(Te),pn=r(Te,"P",{});var ii=i(pn);Vh=s(ii,"This model is also a PyTorch "),hn=r(ii,"A",{href:!0,rel:!0});var _f=i(hn);Qh=s(_f,"torch.nn.Module"),_f.forEach(t),Hh=s(ii,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ii.forEach(t),Yh=u(Te),Q=r(Te,"DIV",{class:!0});var we=i(Q);v(un.$$.fragment,we),Gh=u(we),Ye=r(we,"P",{});var ks=i(Ye);Jh=s(ks,"The "),ns=r(ks,"A",{href:!0});var kf=i(ns);Xh=s(kf,"LukeForQuestionAnswering"),kf.forEach(t),Zh=s(ks," forward method, overrides the "),Ca=r(ks,"CODE",{});var yf=i(Ca);eu=s(yf,"__call__"),yf.forEach(t),tu=s(ks," special method."),ks.forEach(t),ou=u(we),v(Pt.$$.fragment,we),nu=u(we),v(At.$$.fragment,we),su=u(we),v(St.$$.fragment,we),we.forEach(t),Te.forEach(t),this.h()},h(){p(d,"name","hf:doc:metadata"),p(d,"content",JSON.stringify(Yf)),p(f,"id","luke"),p(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(f,"href","#luke"),p(c,"class","relative group"),p(Xe,"id","overview"),p(Xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Xe,"href","#overview"),p(Le,"class","relative group"),p(Rt,"href","https://arxiv.org/abs/2010.01057"),p(Rt,"rel","nofollow"),p(vn,"href","/docs/transformers/v4.22.1/en/model_doc/roberta#transformers.RobertaModel"),p(Tn,"href","/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeTokenizer"),p(wn,"href","/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeTokenizer"),p(zn,"href","/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeForEntityClassification"),p(Yt,"href","https://www.cs.utexas.edu/~eunsol/html_pages/open_entity.html"),p(Yt,"rel","nofollow"),p(En,"href","/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeForEntityPairClassification"),p(Gt,"href","https://nlp.stanford.edu/projects/tacred/"),p(Gt,"rel","nofollow"),p(Fn,"href","/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeForEntitySpanClassification"),p(Cn,"href","/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeTokenizer"),p(qn,"href","/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeForEntityPairClassification"),p(Jt,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/LUKE"),p(Jt,"rel","nofollow"),p(Zt,"href","https://github.com/studio-ousia/luke/tree/master/notebooks"),p(Zt,"rel","nofollow"),p(to,"href","https://huggingface.co/ikuyamada"),p(to,"rel","nofollow"),p(oo,"href","https://huggingface.co/nielsr"),p(oo,"rel","nofollow"),p(no,"href","https://github.com/studio-ousia/luke"),p(no,"rel","nofollow"),p(ot,"id","transformers.LukeConfig"),p(ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ot,"href","#transformers.LukeConfig"),p(Ee,"class","relative group"),p(Mn,"href","/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeModel"),p(ro,"href","https://huggingface.co/studio-ousia/luke-base"),p(ro,"rel","nofollow"),p(Pn,"href","/docs/transformers/v4.22.1/en/main_classes/configuration#transformers.PretrainedConfig"),p(An,"href","/docs/transformers/v4.22.1/en/main_classes/configuration#transformers.PretrainedConfig"),p(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(st,"id","transformers.LukeTokenizer"),p(st,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(st,"href","#transformers.LukeTokenizer"),p(Ce,"class","relative group"),p(Sn,"href","/docs/transformers/v4.22.1/en/model_doc/roberta#transformers.RobertaTokenizer"),p(On,"href","/docs/transformers/v4.22.1/en/model_doc/roberta#transformers.RobertaTokenizer"),p(In,"href","/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeTokenizer"),p(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Nn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(rt,"id","transformers.LukeModel"),p(rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(rt,"href","#transformers.LukeModel"),p(qe,"class","relative group"),p(Dn,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),p(go,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(go,"rel","nofollow"),p(Wn,"href","/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeModel"),p(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(dt,"id","transformers.LukeForMaskedLM"),p(dt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(dt,"href","#transformers.LukeForMaskedLM"),p(Me,"class","relative group"),p(Un,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),p(To,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(To,"rel","nofollow"),p(Bn,"href","/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeForMaskedLM"),p(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(pt,"id","transformers.LukeForEntityClassification"),p(pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(pt,"href","#transformers.LukeForEntityClassification"),p(Ae,"class","relative group"),p(Kn,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),p(xo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(xo,"rel","nofollow"),p(Rn,"href","/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeForEntityClassification"),p(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(mt,"id","transformers.LukeForEntityPairClassification"),p(mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(mt,"href","#transformers.LukeForEntityPairClassification"),p(Oe,"class","relative group"),p(Vn,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),p(Po,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Po,"rel","nofollow"),p(Qn,"href","/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeForEntityPairClassification"),p(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(_t,"id","transformers.LukeForEntitySpanClassification"),p(_t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(_t,"href","#transformers.LukeForEntitySpanClassification"),p(Ne,"class","relative group"),p(Hn,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),p(Do,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Do,"rel","nofollow"),p(Yn,"href","/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeForEntitySpanClassification"),p(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(bt,"id","transformers.LukeForSequenceClassification"),p(bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(bt,"href","#transformers.LukeForSequenceClassification"),p(We,"class","relative group"),p(Gn,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),p(Vo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Vo,"rel","nofollow"),p(Jn,"href","/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeForSequenceClassification"),p(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(zt,"id","transformers.LukeForMultipleChoice"),p(zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(zt,"href","#transformers.LukeForMultipleChoice"),p(Be,"class","relative group"),p(Xn,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),p(Xo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Xo,"rel","nofollow"),p(Zn,"href","/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeForMultipleChoice"),p(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ft,"id","transformers.LukeForTokenClassification"),p(Ft,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ft,"href","#transformers.LukeForTokenClassification"),p(Re,"class","relative group"),p(es,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),p(an,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(an,"rel","nofollow"),p(ts,"href","/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeForTokenClassification"),p(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Mt,"id","transformers.LukeForQuestionAnswering"),p(Mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Mt,"href","#transformers.LukeForQuestionAnswering"),p(Qe,"class","relative group"),p(os,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),p(hn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(hn,"rel","nofollow"),p(ns,"href","/docs/transformers/v4.22.1/en/model_doc/luke#transformers.LukeForQuestionAnswering"),p(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){e(document.head,d),k(o,_,g),k(o,c,g),e(c,f),e(f,y),T(l,y,null),e(c,m),e(c,E),e(E,li),k(o,Ga,g),k(o,Le,g),e(Le,Xe),e(Xe,ys),T(Kt,ys,null),e(Le,di),e(Le,bs),e(bs,ci),k(o,Ja,g),k(o,Ze,g),e(Ze,pi),e(Ze,Rt),e(Rt,hi),e(Ze,ui),k(o,Xa,g),k(o,kn,g),e(kn,mi),k(o,Za,g),k(o,yn,g),e(yn,vs),e(vs,fi),k(o,er,g),k(o,bn,g),e(bn,gi),k(o,tr,g),k(o,ee,g),e(ee,Ts),e(Ts,Vt),e(Vt,_i),e(Vt,vn),e(vn,ki),e(Vt,yi),e(ee,bi),e(ee,ws),e(ws,j),e(j,vi),e(j,Ls),e(Ls,Ti),e(j,wi),e(j,$s),e($s,Li),e(j,$i),e(j,zs),e(zs,zi),e(j,Ei),e(j,Es),e(Es,xi),e(j,Fi),e(j,Tn),e(Tn,Ci),e(j,qi),e(ee,ji),e(ee,Qt),e(Qt,te),e(te,wn),e(wn,Mi),e(te,Pi),e(te,xs),e(xs,Ai),e(te,Si),e(te,Fs),e(Fs,Oi),e(te,Ii),e(te,Cs),e(Cs,Ni),e(te,Di),e(Qt,Wi),e(Qt,Ht),e(Ht,Ln),e(Ln,qs),e(qs,Ui),e(Ln,Bi),e(Ht,Ki),e(Ht,$n),e($n,js),e(js,Ri),e($n,Vi),e(ee,Qi),e(ee,J),e(J,Ms),e(Ms,Hi),e(J,Yi),e(J,$e),e($e,et),e(et,zn),e(zn,Gi),e(et,Ji),e(et,Yt),e(Yt,Xi),e(et,Zi),e($e,el),e($e,tt),e(tt,En),e(En,tl),e(tt,ol),e(tt,Gt),e(Gt,nl),e(tt,sl),e($e,al),e($e,xn),e(xn,Fn),e(Fn,rl),e(xn,il),e(J,ll),e(J,R),e(R,Cn),e(Cn,dl),e(R,cl),e(R,Ps),e(Ps,pl),e(R,hl),e(R,As),e(As,ul),e(R,ml),e(R,Ss),e(Ss,fl),e(R,gl),e(R,Os),e(Os,_l),e(R,kl),e(J,yl),e(J,ze),e(ze,bl),e(ze,qn),e(qn,vl),e(ze,Tl),e(ze,Jt),e(Jt,wl),e(ze,Ll),e(J,$l),e(J,Xt),e(Xt,zl),e(Xt,Zt),e(Zt,El),e(Xt,xl),k(o,or,g),k(o,jn,g),e(jn,Fl),k(o,nr,g),T(eo,o,g),k(o,sr,g),k(o,oe,g),e(oe,Cl),e(oe,to),e(to,ql),e(oe,jl),e(oe,oo),e(oo,Ml),e(oe,Pl),e(oe,no),e(no,Al),e(oe,Sl),k(o,ar,g),k(o,Ee,g),e(Ee,ot),e(ot,Is),T(so,Is,null),e(Ee,Ol),e(Ee,Ns),e(Ns,Il),k(o,rr,g),k(o,X,g),T(ao,X,null),e(X,Nl),e(X,xe),e(xe,Dl),e(xe,Mn),e(Mn,Wl),e(xe,Ul),e(xe,ro),e(ro,Bl),e(xe,Kl),e(X,Rl),e(X,Fe),e(Fe,Vl),e(Fe,Pn),e(Pn,Ql),e(Fe,Hl),e(Fe,An),e(An,Yl),e(Fe,Gl),e(X,Jl),T(nt,X,null),k(o,ir,g),k(o,Ce,g),e(Ce,st),e(st,Ds),T(io,Ds,null),e(Ce,Xl),e(Ce,Ws),e(Ws,Zl),k(o,lr,g),k(o,M,g),T(lo,M,null),e(M,ed),e(M,Us),e(Us,td),e(M,od),e(M,F),e(F,nd),e(F,Sn),e(Sn,sd),e(F,ad),e(F,On),e(On,rd),e(F,id),e(F,In),e(In,ld),e(F,dd),e(F,Bs),e(Bs,cd),e(F,pd),e(F,Ks),e(Ks,hd),e(F,ud),e(F,Rs),e(Rs,md),e(F,fd),e(F,Vs),e(Vs,gd),e(F,_d),e(M,kd),e(M,at),T(co,at,null),e(at,yd),e(at,Qs),e(Qs,bd),e(M,vd),e(M,Nn),T(po,Nn,null),k(o,dr,g),k(o,qe,g),e(qe,rt),e(rt,Hs),T(ho,Hs,null),e(qe,Td),e(qe,Ys),e(Ys,wd),k(o,cr,g),k(o,P,g),T(uo,P,null),e(P,Ld),e(P,Gs),e(Gs,$d),e(P,zd),e(P,mo),e(mo,Ed),e(mo,Dn),e(Dn,xd),e(mo,Fd),e(P,Cd),e(P,fo),e(fo,qd),e(fo,go),e(go,jd),e(fo,Md),e(P,Pd),e(P,ne),T(_o,ne,null),e(ne,Ad),e(ne,je),e(je,Sd),e(je,Wn),e(Wn,Od),e(je,Id),e(je,Js),e(Js,Nd),e(je,Dd),e(ne,Wd),T(it,ne,null),e(ne,Ud),T(lt,ne,null),k(o,pr,g),k(o,Me,g),e(Me,dt),e(dt,Xs),T(ko,Xs,null),e(Me,Bd),e(Me,Zs),e(Zs,Kd),k(o,hr,g),k(o,A,g),T(yo,A,null),e(A,Rd),e(A,ea),e(ea,Vd),e(A,Qd),e(A,bo),e(bo,Hd),e(bo,Un),e(Un,Yd),e(bo,Gd),e(A,Jd),e(A,vo),e(vo,Xd),e(vo,To),e(To,Zd),e(vo,ec),e(A,tc),e(A,ce),T(wo,ce,null),e(ce,oc),e(ce,Pe),e(Pe,nc),e(Pe,Bn),e(Bn,sc),e(Pe,ac),e(Pe,ta),e(ta,rc),e(Pe,ic),e(ce,lc),T(ct,ce,null),k(o,ur,g),k(o,Ae,g),e(Ae,pt),e(pt,oa),T(Lo,oa,null),e(Ae,dc),e(Ae,na),e(na,cc),k(o,mr,g),k(o,S,g),T($o,S,null),e(S,pc),e(S,sa),e(sa,hc),e(S,uc),e(S,zo),e(zo,mc),e(zo,Kn),e(Kn,fc),e(zo,gc),e(S,_c),e(S,Eo),e(Eo,kc),e(Eo,xo),e(xo,yc),e(Eo,bc),e(S,vc),e(S,se),T(Fo,se,null),e(se,Tc),e(se,Se),e(Se,wc),e(Se,Rn),e(Rn,Lc),e(Se,$c),e(Se,aa),e(aa,zc),e(Se,Ec),e(se,xc),T(ht,se,null),e(se,Fc),T(ut,se,null),k(o,fr,g),k(o,Oe,g),e(Oe,mt),e(mt,ra),T(Co,ra,null),e(Oe,Cc),e(Oe,ia),e(ia,qc),k(o,gr,g),k(o,O,g),T(qo,O,null),e(O,jc),e(O,la),e(la,Mc),e(O,Pc),e(O,jo),e(jo,Ac),e(jo,Vn),e(Vn,Sc),e(jo,Oc),e(O,Ic),e(O,Mo),e(Mo,Nc),e(Mo,Po),e(Po,Dc),e(Mo,Wc),e(O,Uc),e(O,ae),T(Ao,ae,null),e(ae,Bc),e(ae,Ie),e(Ie,Kc),e(Ie,Qn),e(Qn,Rc),e(Ie,Vc),e(Ie,da),e(da,Qc),e(Ie,Hc),e(ae,Yc),T(ft,ae,null),e(ae,Gc),T(gt,ae,null),k(o,_r,g),k(o,Ne,g),e(Ne,_t),e(_t,ca),T(So,ca,null),e(Ne,Jc),e(Ne,pa),e(pa,Xc),k(o,kr,g),k(o,I,g),T(Oo,I,null),e(I,Zc),e(I,ha),e(ha,ep),e(I,tp),e(I,Io),e(Io,op),e(Io,Hn),e(Hn,np),e(Io,sp),e(I,ap),e(I,No),e(No,rp),e(No,Do),e(Do,ip),e(No,lp),e(I,dp),e(I,re),T(Wo,re,null),e(re,cp),e(re,De),e(De,pp),e(De,Yn),e(Yn,hp),e(De,up),e(De,ua),e(ua,mp),e(De,fp),e(re,gp),T(kt,re,null),e(re,_p),T(yt,re,null),k(o,yr,g),k(o,We,g),e(We,bt),e(bt,ma),T(Uo,ma,null),e(We,kp),e(We,fa),e(fa,yp),k(o,br,g),k(o,N,g),T(Bo,N,null),e(N,bp),e(N,ga),e(ga,vp),e(N,Tp),e(N,Ko),e(Ko,wp),e(Ko,Gn),e(Gn,Lp),e(Ko,$p),e(N,zp),e(N,Ro),e(Ro,Ep),e(Ro,Vo),e(Vo,xp),e(Ro,Fp),e(N,Cp),e(N,C),T(Qo,C,null),e(C,qp),e(C,Ue),e(Ue,jp),e(Ue,Jn),e(Jn,Mp),e(Ue,Pp),e(Ue,_a),e(_a,Ap),e(Ue,Sp),e(C,Op),T(vt,C,null),e(C,Ip),T(Tt,C,null),e(C,Np),T(wt,C,null),e(C,Dp),T(Lt,C,null),e(C,Wp),T($t,C,null),k(o,vr,g),k(o,Be,g),e(Be,zt),e(zt,ka),T(Ho,ka,null),e(Be,Up),e(Be,ya),e(ya,Bp),k(o,Tr,g),k(o,D,g),T(Yo,D,null),e(D,Kp),e(D,ba),e(ba,Rp),e(D,Vp),e(D,Go),e(Go,Qp),e(Go,Xn),e(Xn,Hp),e(Go,Yp),e(D,Gp),e(D,Jo),e(Jo,Jp),e(Jo,Xo),e(Xo,Xp),e(Jo,Zp),e(D,eh),e(D,ie),T(Zo,ie,null),e(ie,th),e(ie,Ke),e(Ke,oh),e(Ke,Zn),e(Zn,nh),e(Ke,sh),e(Ke,va),e(va,ah),e(Ke,rh),e(ie,ih),T(Et,ie,null),e(ie,lh),T(xt,ie,null),k(o,wr,g),k(o,Re,g),e(Re,Ft),e(Ft,Ta),T(en,Ta,null),e(Re,dh),e(Re,wa),e(wa,ch),k(o,Lr,g),k(o,W,g),T(tn,W,null),e(W,ph),e(W,on),e(on,hh),e(on,La),e(La,uh),e(on,mh),e(W,fh),e(W,nn),e(nn,gh),e(nn,es),e(es,_h),e(nn,kh),e(W,yh),e(W,sn),e(sn,bh),e(sn,an),e(an,vh),e(sn,Th),e(W,wh),e(W,V),T(rn,V,null),e(V,Lh),e(V,Ve),e(Ve,$h),e(Ve,ts),e(ts,zh),e(Ve,Eh),e(Ve,$a),e($a,xh),e(Ve,Fh),e(V,Ch),T(Ct,V,null),e(V,qh),T(qt,V,null),e(V,jh),T(jt,V,null),k(o,$r,g),k(o,Qe,g),e(Qe,Mt),e(Mt,za),T(ln,za,null),e(Qe,Mh),e(Qe,Ea),e(Ea,Ph),k(o,zr,g),k(o,U,g),T(dn,U,null),e(U,Ah),e(U,He),e(He,Sh),e(He,xa),e(xa,Oh),e(He,Ih),e(He,Fa),e(Fa,Nh),e(He,Dh),e(U,Wh),e(U,cn),e(cn,Uh),e(cn,os),e(os,Bh),e(cn,Kh),e(U,Rh),e(U,pn),e(pn,Vh),e(pn,hn),e(hn,Qh),e(pn,Hh),e(U,Yh),e(U,Q),T(un,Q,null),e(Q,Gh),e(Q,Ye),e(Ye,Jh),e(Ye,ns),e(ns,Xh),e(Ye,Zh),e(Ye,Ca),e(Ca,eu),e(Ye,tu),e(Q,ou),T(Pt,Q,null),e(Q,nu),T(At,Q,null),e(Q,su),T(St,Q,null),Er=!0},p(o,[g]){const mn={};g&2&&(mn.$$scope={dirty:g,ctx:o}),nt.$set(mn);const qa={};g&2&&(qa.$$scope={dirty:g,ctx:o}),it.$set(qa);const ja={};g&2&&(ja.$$scope={dirty:g,ctx:o}),lt.$set(ja);const Ma={};g&2&&(Ma.$$scope={dirty:g,ctx:o}),ct.$set(Ma);const fn={};g&2&&(fn.$$scope={dirty:g,ctx:o}),ht.$set(fn);const Pa={};g&2&&(Pa.$$scope={dirty:g,ctx:o}),ut.$set(Pa);const Aa={};g&2&&(Aa.$$scope={dirty:g,ctx:o}),ft.$set(Aa);const Sa={};g&2&&(Sa.$$scope={dirty:g,ctx:o}),gt.$set(Sa);const gn={};g&2&&(gn.$$scope={dirty:g,ctx:o}),kt.$set(gn);const Oa={};g&2&&(Oa.$$scope={dirty:g,ctx:o}),yt.$set(Oa);const Ia={};g&2&&(Ia.$$scope={dirty:g,ctx:o}),vt.$set(Ia);const Na={};g&2&&(Na.$$scope={dirty:g,ctx:o}),Tt.$set(Na);const Da={};g&2&&(Da.$$scope={dirty:g,ctx:o}),wt.$set(Da);const Wa={};g&2&&(Wa.$$scope={dirty:g,ctx:o}),Lt.$set(Wa);const le={};g&2&&(le.$$scope={dirty:g,ctx:o}),$t.$set(le);const Ua={};g&2&&(Ua.$$scope={dirty:g,ctx:o}),Et.$set(Ua);const _n={};g&2&&(_n.$$scope={dirty:g,ctx:o}),xt.$set(_n);const Ba={};g&2&&(Ba.$$scope={dirty:g,ctx:o}),Ct.$set(Ba);const Ka={};g&2&&(Ka.$$scope={dirty:g,ctx:o}),qt.$set(Ka);const B={};g&2&&(B.$$scope={dirty:g,ctx:o}),jt.$set(B);const Ra={};g&2&&(Ra.$$scope={dirty:g,ctx:o}),Pt.$set(Ra);const Va={};g&2&&(Va.$$scope={dirty:g,ctx:o}),At.$set(Va);const Qa={};g&2&&(Qa.$$scope={dirty:g,ctx:o}),St.$set(Qa)},i(o){Er||(w(l.$$.fragment,o),w(Kt.$$.fragment,o),w(eo.$$.fragment,o),w(so.$$.fragment,o),w(ao.$$.fragment,o),w(nt.$$.fragment,o),w(io.$$.fragment,o),w(lo.$$.fragment,o),w(co.$$.fragment,o),w(po.$$.fragment,o),w(ho.$$.fragment,o),w(uo.$$.fragment,o),w(_o.$$.fragment,o),w(it.$$.fragment,o),w(lt.$$.fragment,o),w(ko.$$.fragment,o),w(yo.$$.fragment,o),w(wo.$$.fragment,o),w(ct.$$.fragment,o),w(Lo.$$.fragment,o),w($o.$$.fragment,o),w(Fo.$$.fragment,o),w(ht.$$.fragment,o),w(ut.$$.fragment,o),w(Co.$$.fragment,o),w(qo.$$.fragment,o),w(Ao.$$.fragment,o),w(ft.$$.fragment,o),w(gt.$$.fragment,o),w(So.$$.fragment,o),w(Oo.$$.fragment,o),w(Wo.$$.fragment,o),w(kt.$$.fragment,o),w(yt.$$.fragment,o),w(Uo.$$.fragment,o),w(Bo.$$.fragment,o),w(Qo.$$.fragment,o),w(vt.$$.fragment,o),w(Tt.$$.fragment,o),w(wt.$$.fragment,o),w(Lt.$$.fragment,o),w($t.$$.fragment,o),w(Ho.$$.fragment,o),w(Yo.$$.fragment,o),w(Zo.$$.fragment,o),w(Et.$$.fragment,o),w(xt.$$.fragment,o),w(en.$$.fragment,o),w(tn.$$.fragment,o),w(rn.$$.fragment,o),w(Ct.$$.fragment,o),w(qt.$$.fragment,o),w(jt.$$.fragment,o),w(ln.$$.fragment,o),w(dn.$$.fragment,o),w(un.$$.fragment,o),w(Pt.$$.fragment,o),w(At.$$.fragment,o),w(St.$$.fragment,o),Er=!0)},o(o){L(l.$$.fragment,o),L(Kt.$$.fragment,o),L(eo.$$.fragment,o),L(so.$$.fragment,o),L(ao.$$.fragment,o),L(nt.$$.fragment,o),L(io.$$.fragment,o),L(lo.$$.fragment,o),L(co.$$.fragment,o),L(po.$$.fragment,o),L(ho.$$.fragment,o),L(uo.$$.fragment,o),L(_o.$$.fragment,o),L(it.$$.fragment,o),L(lt.$$.fragment,o),L(ko.$$.fragment,o),L(yo.$$.fragment,o),L(wo.$$.fragment,o),L(ct.$$.fragment,o),L(Lo.$$.fragment,o),L($o.$$.fragment,o),L(Fo.$$.fragment,o),L(ht.$$.fragment,o),L(ut.$$.fragment,o),L(Co.$$.fragment,o),L(qo.$$.fragment,o),L(Ao.$$.fragment,o),L(ft.$$.fragment,o),L(gt.$$.fragment,o),L(So.$$.fragment,o),L(Oo.$$.fragment,o),L(Wo.$$.fragment,o),L(kt.$$.fragment,o),L(yt.$$.fragment,o),L(Uo.$$.fragment,o),L(Bo.$$.fragment,o),L(Qo.$$.fragment,o),L(vt.$$.fragment,o),L(Tt.$$.fragment,o),L(wt.$$.fragment,o),L(Lt.$$.fragment,o),L($t.$$.fragment,o),L(Ho.$$.fragment,o),L(Yo.$$.fragment,o),L(Zo.$$.fragment,o),L(Et.$$.fragment,o),L(xt.$$.fragment,o),L(en.$$.fragment,o),L(tn.$$.fragment,o),L(rn.$$.fragment,o),L(Ct.$$.fragment,o),L(qt.$$.fragment,o),L(jt.$$.fragment,o),L(ln.$$.fragment,o),L(dn.$$.fragment,o),L(un.$$.fragment,o),L(Pt.$$.fragment,o),L(At.$$.fragment,o),L(St.$$.fragment,o),Er=!1},d(o){t(d),o&&t(_),o&&t(c),$(l),o&&t(Ga),o&&t(Le),$(Kt),o&&t(Ja),o&&t(Ze),o&&t(Xa),o&&t(kn),o&&t(Za),o&&t(yn),o&&t(er),o&&t(bn),o&&t(tr),o&&t(ee),o&&t(or),o&&t(jn),o&&t(nr),$(eo,o),o&&t(sr),o&&t(oe),o&&t(ar),o&&t(Ee),$(so),o&&t(rr),o&&t(X),$(ao),$(nt),o&&t(ir),o&&t(Ce),$(io),o&&t(lr),o&&t(M),$(lo),$(co),$(po),o&&t(dr),o&&t(qe),$(ho),o&&t(cr),o&&t(P),$(uo),$(_o),$(it),$(lt),o&&t(pr),o&&t(Me),$(ko),o&&t(hr),o&&t(A),$(yo),$(wo),$(ct),o&&t(ur),o&&t(Ae),$(Lo),o&&t(mr),o&&t(S),$($o),$(Fo),$(ht),$(ut),o&&t(fr),o&&t(Oe),$(Co),o&&t(gr),o&&t(O),$(qo),$(Ao),$(ft),$(gt),o&&t(_r),o&&t(Ne),$(So),o&&t(kr),o&&t(I),$(Oo),$(Wo),$(kt),$(yt),o&&t(yr),o&&t(We),$(Uo),o&&t(br),o&&t(N),$(Bo),$(Qo),$(vt),$(Tt),$(wt),$(Lt),$($t),o&&t(vr),o&&t(Be),$(Ho),o&&t(Tr),o&&t(D),$(Yo),$(Zo),$(Et),$(xt),o&&t(wr),o&&t(Re),$(en),o&&t(Lr),o&&t(W),$(tn),$(rn),$(Ct),$(qt),$(jt),o&&t($r),o&&t(Qe),$(ln),o&&t(zr),o&&t(U),$(dn),$(un),$(Pt),$(At),$(St)}}}const Yf={local:"luke",sections:[{local:"overview",title:"Overview"},{local:"transformers.LukeConfig",title:"LukeConfig"},{local:"transformers.LukeTokenizer",title:"LukeTokenizer"},{local:"transformers.LukeModel",title:"LukeModel"},{local:"transformers.LukeForMaskedLM",title:"LukeForMaskedLM"},{local:"transformers.LukeForEntityClassification",title:"LukeForEntityClassification"},{local:"transformers.LukeForEntityPairClassification",title:"LukeForEntityPairClassification"},{local:"transformers.LukeForEntitySpanClassification",title:"LukeForEntitySpanClassification"},{local:"transformers.LukeForSequenceClassification",title:"LukeForSequenceClassification"},{local:"transformers.LukeForMultipleChoice",title:"LukeForMultipleChoice"},{local:"transformers.LukeForTokenClassification",title:"LukeForTokenClassification"},{local:"transformers.LukeForQuestionAnswering",title:"LukeForQuestionAnswering"}],title:"LUKE"};function Gf(z){return Lf(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ng extends bf{constructor(d){super();vf(this,d,Gf,Hf,Tf,{})}}export{ng as default,Yf as metadata};
