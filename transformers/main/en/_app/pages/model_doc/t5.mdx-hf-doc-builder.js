import{S as q1,i as F1,s as M1,e as a,k as d,w as k,t as o,M as C1,c as r,d as t,m as c,a as i,x as v,h as s,b as h,G as e,g as m,y,q as w,o as $,B as x,v as P1,L as Te}from"../../chunks/vendor-hf-doc-builder.js";import{T as kt}from"../../chunks/Tip-hf-doc-builder.js";import{D as M}from"../../chunks/Docstring-hf-doc-builder.js";import{C as S}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as _e}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ge}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function N1(j){let p,b,g,u,T;return{c(){p=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var _=i(p);b=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var E=i(g);u=s(E,"Module"),E.forEach(t),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(l,_){m(l,p,_),e(p,b),e(p,g),e(g,u),e(p,T)},d(l){l&&t(p)}}}function O1(j){let p,b,g,u,T;return u=new S({props:{code:`from transformers import T5Tokenizer, T5Model

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5Model.from_pretrained("t5-small")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="pt").input_ids  # Batch size 1

# preprocess: Prepend decoder_input_ids with start token which is pad token for T5Model.
# This is not needed for torch's T5ForConditionalGeneration as it does this internally using labels arg.
decoder_input_ids = model._shift_right(decoder_input_ids)

# forward pass
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5Model.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># preprocess: Prepend decoder_input_ids with start token which is pad token for T5Model.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># This is not needed for torch&#x27;s T5ForConditionalGeneration as it does this internally using labels arg.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = model._shift_right(decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=a("p"),b=o("Example:"),g=d(),k(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);b=s(_,"Example:"),_.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,b),m(l,g,_),y(u,l,_),T=!0},p:Te,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function L1(j){let p,b,g,u,T;return u=new S({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map)`,highlighted:`<span class="hljs-comment"># Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)`}}),{c(){p=a("p"),b=o("Example:"),g=d(),k(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);b=s(_,"Example:"),_.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,b),m(l,g,_),y(u,l,_),T=!0},p:Te,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function A1(j){let p,b,g,u,T;return u=new S({props:{code:`# On a 4 GPU machine with t5-3b:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map)  # Splits the model across several devices
model.deparallelize()  # Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()`,highlighted:`<span class="hljs-comment"># On a 4 GPU machine with t5-3b:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)  <span class="hljs-comment"># Splits the model across several devices</span>
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),{c(){p=a("p"),b=o("Example:"),g=d(),k(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);b=s(_,"Example:"),_.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,b),m(l,g,_),y(u,l,_),T=!0},p:Te,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function I1(j){let p,b,g,u,T;return{c(){p=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var _=i(p);b=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var E=i(g);u=s(E,"Module"),E.forEach(t),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(l,_){m(l,p,_),e(p,b),e(p,g),e(g,u),e(p,T)},d(l){l&&t(p)}}}function D1(j){let p,b,g,u,T;return u=new S({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

# training
input_ids = tokenizer("The <extra_id_0> walks in <extra_id_1> park", return_tensors="pt").input_ids
labels = tokenizer("<extra_id_0> cute dog <extra_id_1> the <extra_id_2>", return_tensors="pt").input_ids
outputs = model(input_ids=input_ids, labels=labels)
loss = outputs.loss
logits = outputs.logits

# inference
input_ids = tokenizer(
    "summarize: studies have shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
outputs = model.generate(input_ids)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))
# studies have shown that owning a dog is good for you.`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;The &lt;extra_id_0&gt; walks in &lt;extra_id_1&gt; park&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;&lt;extra_id_0&gt; cute dog &lt;extra_id_1&gt; the &lt;extra_id_2&gt;&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># inference</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;summarize: studies have shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you.</span>`}}),{c(){p=a("p"),b=o("Examples:"),g=d(),k(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);b=s(_,"Examples:"),_.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,b),m(l,g,_),y(u,l,_),T=!0},p:Te,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function S1(j){let p,b,g,u,T;return u=new S({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map)`,highlighted:`<span class="hljs-comment"># Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)`}}),{c(){p=a("p"),b=o("Example:"),g=d(),k(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);b=s(_,"Example:"),_.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,b),m(l,g,_),y(u,l,_),T=!0},p:Te,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function G1(j){let p,b,g,u,T;return u=new S({props:{code:`# On a 4 GPU machine with t5-3b:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map)  # Splits the model across several devices
model.deparallelize()  # Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()`,highlighted:`<span class="hljs-comment"># On a 4 GPU machine with t5-3b:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)  <span class="hljs-comment"># Splits the model across several devices</span>
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),{c(){p=a("p"),b=o("Example:"),g=d(),k(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);b=s(_,"Example:"),_.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,b),m(l,g,_),y(u,l,_),T=!0},p:Te,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function U1(j){let p,b,g,u,T;return{c(){p=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var _=i(p);b=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var E=i(g);u=s(E,"Module"),E.forEach(t),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(l,_){m(l,p,_),e(p,b),e(p,g),e(g,u),e(p,T)},d(l){l&&t(p)}}}function W1(j){let p,b,g,u,T;return u=new S({props:{code:`from transformers import T5Tokenizer, T5EncoderModel

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5EncoderModel.from_pretrained("t5-small")
input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
outputs = model(input_ids=input_ids)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5EncoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5EncoderModel.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=a("p"),b=o("Example:"),g=d(),k(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);b=s(_,"Example:"),_.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,b),m(l,g,_),y(u,l,_),T=!0},p:Te,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function R1(j){let p,b,g,u,T;return u=new S({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map)`,highlighted:`<span class="hljs-comment"># Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)`}}),{c(){p=a("p"),b=o("Example:"),g=d(),k(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);b=s(_,"Example:"),_.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,b),m(l,g,_),y(u,l,_),T=!0},p:Te,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function B1(j){let p,b,g,u,T;return u=new S({props:{code:`# On a 4 GPU machine with t5-3b:
model = T5ForConditionalGeneration.from_pretrained("t5-3b")
device_map = {
    0: [0, 1, 2],
    1: [3, 4, 5, 6, 7, 8, 9],
    2: [10, 11, 12, 13, 14, 15, 16],
    3: [17, 18, 19, 20, 21, 22, 23],
}
model.parallelize(device_map)  # Splits the model across several devices
model.deparallelize()  # Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()`,highlighted:`<span class="hljs-comment"># On a 4 GPU machine with t5-3b:</span>
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-3b&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)  <span class="hljs-comment"># Splits the model across several devices</span>
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),{c(){p=a("p"),b=o("Example:"),g=d(),k(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);b=s(_,"Example:"),_.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,b),m(l,g,_),y(u,l,_),T=!0},p:Te,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function H1(j){let p,b,g,u,T,l,_,E,Ee,se,q,ee,G,ae,qe,U,Fe,ve,W,A,re,pe,C,N,he,K,ye,ue,R,Me,we,P,Ce,H,V,be,O,Pe,ke,I,Ne,B,Oe;return{c(){p=a("p"),b=o("TF 2.0 models accepts two formats as inputs:"),g=d(),u=a("ul"),T=a("li"),l=o("having all inputs as keyword arguments (like PyTorch models), or"),_=d(),E=a("li"),Ee=o("having all inputs as a list, tuple or dict in the first positional arguments."),se=d(),q=a("p"),ee=o("This second option is useful when using "),G=a("code"),ae=o("tf.keras.Model.fit"),qe=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),U=a("code"),Fe=o("model(inputs)"),ve=o("."),W=d(),A=a("p"),re=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=d(),C=a("ul"),N=a("li"),he=o("a single Tensor with "),K=a("code"),ye=o("input_ids"),ue=o(" only and nothing else: "),R=a("code"),Me=o("model(inputs_ids)"),we=d(),P=a("li"),Ce=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=a("code"),V=o("model([input_ids, attention_mask])"),be=o(" or "),O=a("code"),Pe=o("model([input_ids, attention_mask, token_type_ids])"),ke=d(),I=a("li"),Ne=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a("code"),Oe=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){p=r(z,"P",{});var F=i(p);b=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=c(z),u=r(z,"UL",{});var te=i(u);T=r(te,"LI",{});var Ge=i(T);l=s(Ge,"having all inputs as keyword arguments (like PyTorch models), or"),Ge.forEach(t),_=c(te),E=r(te,"LI",{});var et=i(E);Ee=s(et,"having all inputs as a list, tuple or dict in the first positional arguments."),et.forEach(t),te.forEach(t),se=c(z),q=r(z,"P",{});var D=i(q);ee=s(D,"This second option is useful when using "),G=r(D,"CODE",{});var Ue=i(G);ae=s(Ue,"tf.keras.Model.fit"),Ue.forEach(t),qe=s(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),U=r(D,"CODE",{});var ne=i(U);Fe=s(ne,"model(inputs)"),ne.forEach(t),ve=s(D,"."),D.forEach(t),W=c(z),A=r(z,"P",{});var tt=i(A);re=s(tt,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),tt.forEach(t),pe=c(z),C=r(z,"UL",{});var L=i(C);N=r(L,"LI",{});var Y=i(N);he=s(Y,"a single Tensor with "),K=r(Y,"CODE",{});var nt=i(K);ye=s(nt,"input_ids"),nt.forEach(t),ue=s(Y," only and nothing else: "),R=r(Y,"CODE",{});var Le=i(R);Me=s(Le,"model(inputs_ids)"),Le.forEach(t),Y.forEach(t),we=c(L),P=r(L,"LI",{});var Z=i(P);Ce=s(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=r(Z,"CODE",{});var ot=i(H);V=s(ot,"model([input_ids, attention_mask])"),ot.forEach(t),be=s(Z," or "),O=r(Z,"CODE",{});var Ae=i(O);Pe=s(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(t),Z.forEach(t),ke=c(L),I=r(L,"LI",{});var Ie=i(I);Ne=s(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(Ie,"CODE",{});var st=i(B);Oe=s(st,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),st.forEach(t),Ie.forEach(t),L.forEach(t)},m(z,F){m(z,p,F),e(p,b),m(z,g,F),m(z,u,F),e(u,T),e(T,l),e(u,_),e(u,E),e(E,Ee),m(z,se,F),m(z,q,F),e(q,ee),e(q,G),e(G,ae),e(q,qe),e(q,U),e(U,Fe),e(q,ve),m(z,W,F),m(z,A,F),e(A,re),m(z,pe,F),m(z,C,F),e(C,N),e(N,he),e(N,K),e(K,ye),e(N,ue),e(N,R),e(R,Me),e(C,we),e(C,P),e(P,Ce),e(P,H),e(H,V),e(P,be),e(P,O),e(O,Pe),e(C,ke),e(C,I),e(I,Ne),e(I,B),e(B,Oe)},d(z){z&&t(p),z&&t(g),z&&t(u),z&&t(se),z&&t(q),z&&t(W),z&&t(A),z&&t(pe),z&&t(C)}}}function V1(j){let p,b,g,u,T;return{c(){p=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var _=i(p);b=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var E=i(g);u=s(E,"Module"),E.forEach(t),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(l,_){m(l,p,_),e(p,b),e(p,g),e(g,u),e(p,T)},d(l){l&&t(p)}}}function K1(j){let p,b,g,u,T;return u=new S({props:{code:`from transformers import T5Tokenizer, TFT5Model

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = TFT5Model.from_pretrained("t5-small")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="tf"
).input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="tf").input_ids  # Batch size 1

# preprocess: Prepend decoder_input_ids with start token which is pad token for T5Model.
# This is not needed for torch's T5ForConditionalGeneration as it does this internally using labels arg.
decoder_input_ids = model._shift_right(decoder_input_ids)

# forward pass
outputs = model(input_ids, decoder_input_ids=decoder_input_ids)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, TFT5Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFT5Model.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># preprocess: Prepend decoder_input_ids with start token which is pad token for T5Model.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># This is not needed for torch&#x27;s T5ForConditionalGeneration as it does this internally using labels arg.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = model._shift_right(decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=a("p"),b=o("Examples:"),g=d(),k(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);b=s(_,"Examples:"),_.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,b),m(l,g,_),y(u,l,_),T=!0},p:Te,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function Y1(j){let p,b,g,u,T,l,_,E,Ee,se,q,ee,G,ae,qe,U,Fe,ve,W,A,re,pe,C,N,he,K,ye,ue,R,Me,we,P,Ce,H,V,be,O,Pe,ke,I,Ne,B,Oe;return{c(){p=a("p"),b=o("TF 2.0 models accepts two formats as inputs:"),g=d(),u=a("ul"),T=a("li"),l=o("having all inputs as keyword arguments (like PyTorch models), or"),_=d(),E=a("li"),Ee=o("having all inputs as a list, tuple or dict in the first positional arguments."),se=d(),q=a("p"),ee=o("This second option is useful when using "),G=a("code"),ae=o("tf.keras.Model.fit"),qe=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),U=a("code"),Fe=o("model(inputs)"),ve=o("."),W=d(),A=a("p"),re=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=d(),C=a("ul"),N=a("li"),he=o("a single Tensor with "),K=a("code"),ye=o("input_ids"),ue=o(" only and nothing else: "),R=a("code"),Me=o("model(inputs_ids)"),we=d(),P=a("li"),Ce=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=a("code"),V=o("model([input_ids, attention_mask])"),be=o(" or "),O=a("code"),Pe=o("model([input_ids, attention_mask, token_type_ids])"),ke=d(),I=a("li"),Ne=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a("code"),Oe=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){p=r(z,"P",{});var F=i(p);b=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=c(z),u=r(z,"UL",{});var te=i(u);T=r(te,"LI",{});var Ge=i(T);l=s(Ge,"having all inputs as keyword arguments (like PyTorch models), or"),Ge.forEach(t),_=c(te),E=r(te,"LI",{});var et=i(E);Ee=s(et,"having all inputs as a list, tuple or dict in the first positional arguments."),et.forEach(t),te.forEach(t),se=c(z),q=r(z,"P",{});var D=i(q);ee=s(D,"This second option is useful when using "),G=r(D,"CODE",{});var Ue=i(G);ae=s(Ue,"tf.keras.Model.fit"),Ue.forEach(t),qe=s(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),U=r(D,"CODE",{});var ne=i(U);Fe=s(ne,"model(inputs)"),ne.forEach(t),ve=s(D,"."),D.forEach(t),W=c(z),A=r(z,"P",{});var tt=i(A);re=s(tt,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),tt.forEach(t),pe=c(z),C=r(z,"UL",{});var L=i(C);N=r(L,"LI",{});var Y=i(N);he=s(Y,"a single Tensor with "),K=r(Y,"CODE",{});var nt=i(K);ye=s(nt,"input_ids"),nt.forEach(t),ue=s(Y," only and nothing else: "),R=r(Y,"CODE",{});var Le=i(R);Me=s(Le,"model(inputs_ids)"),Le.forEach(t),Y.forEach(t),we=c(L),P=r(L,"LI",{});var Z=i(P);Ce=s(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=r(Z,"CODE",{});var ot=i(H);V=s(ot,"model([input_ids, attention_mask])"),ot.forEach(t),be=s(Z," or "),O=r(Z,"CODE",{});var Ae=i(O);Pe=s(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(t),Z.forEach(t),ke=c(L),I=r(L,"LI",{});var Ie=i(I);Ne=s(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(Ie,"CODE",{});var st=i(B);Oe=s(st,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),st.forEach(t),Ie.forEach(t),L.forEach(t)},m(z,F){m(z,p,F),e(p,b),m(z,g,F),m(z,u,F),e(u,T),e(T,l),e(u,_),e(u,E),e(E,Ee),m(z,se,F),m(z,q,F),e(q,ee),e(q,G),e(G,ae),e(q,qe),e(q,U),e(U,Fe),e(q,ve),m(z,W,F),m(z,A,F),e(A,re),m(z,pe,F),m(z,C,F),e(C,N),e(N,he),e(N,K),e(K,ye),e(N,ue),e(N,R),e(R,Me),e(C,we),e(C,P),e(P,Ce),e(P,H),e(H,V),e(P,be),e(P,O),e(O,Pe),e(C,ke),e(C,I),e(I,Ne),e(I,B),e(B,Oe)},d(z){z&&t(p),z&&t(g),z&&t(u),z&&t(se),z&&t(q),z&&t(W),z&&t(A),z&&t(pe),z&&t(C)}}}function Z1(j){let p,b,g,u,T;return{c(){p=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var _=i(p);b=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var E=i(g);u=s(E,"Module"),E.forEach(t),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(l,_){m(l,p,_),e(p,b),e(p,g),e(g,u),e(p,T)},d(l){l&&t(p)}}}function J1(j){let p,b,g,u,T;return u=new S({props:{code:`from transformers import T5Tokenizer, TFT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = TFT5ForConditionalGeneration.from_pretrained("t5-small")

# training
inputs = tokenizer("The <extra_id_0> walks in <extra_id_1> park", return_tensors="tf").input_ids
labels = tokenizer("<extra_id_0> cute dog <extra_id_1> the <extra_id_2>", return_tensors="tf").input_ids
outputs = model(inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits

# inference
inputs = tokenizer(
    "summarize: studies have shown that owning a dog is good for you", return_tensors="tf"
).input_ids  # Batch size 1
outputs = model.generate(inputs)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))
# studies have shown that owning a dog is good for you`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, TFT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The &lt;extra_id_0&gt; walks in &lt;extra_id_1&gt; park&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;&lt;extra_id_0&gt; cute dog &lt;extra_id_1&gt; the &lt;extra_id_2&gt;&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># inference</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;summarize: studies have shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you</span>`}}),{c(){p=a("p"),b=o("Examples:"),g=d(),k(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);b=s(_,"Examples:"),_.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,b),m(l,g,_),y(u,l,_),T=!0},p:Te,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function X1(j){let p,b,g,u,T,l,_,E,Ee,se,q,ee,G,ae,qe,U,Fe,ve,W,A,re,pe,C,N,he,K,ye,ue,R,Me,we,P,Ce,H,V,be,O,Pe,ke,I,Ne,B,Oe;return{c(){p=a("p"),b=o("TF 2.0 models accepts two formats as inputs:"),g=d(),u=a("ul"),T=a("li"),l=o("having all inputs as keyword arguments (like PyTorch models), or"),_=d(),E=a("li"),Ee=o("having all inputs as a list, tuple or dict in the first positional arguments."),se=d(),q=a("p"),ee=o("This second option is useful when using "),G=a("code"),ae=o("tf.keras.Model.fit"),qe=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),U=a("code"),Fe=o("model(inputs)"),ve=o("."),W=d(),A=a("p"),re=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=d(),C=a("ul"),N=a("li"),he=o("a single Tensor with "),K=a("code"),ye=o("input_ids"),ue=o(" only and nothing else: "),R=a("code"),Me=o("model(inputs_ids)"),we=d(),P=a("li"),Ce=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=a("code"),V=o("model([input_ids, attention_mask])"),be=o(" or "),O=a("code"),Pe=o("model([input_ids, attention_mask, token_type_ids])"),ke=d(),I=a("li"),Ne=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a("code"),Oe=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){p=r(z,"P",{});var F=i(p);b=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=c(z),u=r(z,"UL",{});var te=i(u);T=r(te,"LI",{});var Ge=i(T);l=s(Ge,"having all inputs as keyword arguments (like PyTorch models), or"),Ge.forEach(t),_=c(te),E=r(te,"LI",{});var et=i(E);Ee=s(et,"having all inputs as a list, tuple or dict in the first positional arguments."),et.forEach(t),te.forEach(t),se=c(z),q=r(z,"P",{});var D=i(q);ee=s(D,"This second option is useful when using "),G=r(D,"CODE",{});var Ue=i(G);ae=s(Ue,"tf.keras.Model.fit"),Ue.forEach(t),qe=s(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),U=r(D,"CODE",{});var ne=i(U);Fe=s(ne,"model(inputs)"),ne.forEach(t),ve=s(D,"."),D.forEach(t),W=c(z),A=r(z,"P",{});var tt=i(A);re=s(tt,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),tt.forEach(t),pe=c(z),C=r(z,"UL",{});var L=i(C);N=r(L,"LI",{});var Y=i(N);he=s(Y,"a single Tensor with "),K=r(Y,"CODE",{});var nt=i(K);ye=s(nt,"input_ids"),nt.forEach(t),ue=s(Y," only and nothing else: "),R=r(Y,"CODE",{});var Le=i(R);Me=s(Le,"model(inputs_ids)"),Le.forEach(t),Y.forEach(t),we=c(L),P=r(L,"LI",{});var Z=i(P);Ce=s(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=r(Z,"CODE",{});var ot=i(H);V=s(ot,"model([input_ids, attention_mask])"),ot.forEach(t),be=s(Z," or "),O=r(Z,"CODE",{});var Ae=i(O);Pe=s(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(t),Z.forEach(t),ke=c(L),I=r(L,"LI",{});var Ie=i(I);Ne=s(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(Ie,"CODE",{});var st=i(B);Oe=s(st,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),st.forEach(t),Ie.forEach(t),L.forEach(t)},m(z,F){m(z,p,F),e(p,b),m(z,g,F),m(z,u,F),e(u,T),e(T,l),e(u,_),e(u,E),e(E,Ee),m(z,se,F),m(z,q,F),e(q,ee),e(q,G),e(G,ae),e(q,qe),e(q,U),e(U,Fe),e(q,ve),m(z,W,F),m(z,A,F),e(A,re),m(z,pe,F),m(z,C,F),e(C,N),e(N,he),e(N,K),e(K,ye),e(N,ue),e(N,R),e(R,Me),e(C,we),e(C,P),e(P,Ce),e(P,H),e(H,V),e(P,be),e(P,O),e(O,Pe),e(C,ke),e(C,I),e(I,Ne),e(I,B),e(B,Oe)},d(z){z&&t(p),z&&t(g),z&&t(u),z&&t(se),z&&t(q),z&&t(W),z&&t(A),z&&t(pe),z&&t(C)}}}function Q1(j){let p,b,g,u,T;return{c(){p=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var _=i(p);b=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var E=i(g);u=s(E,"Module"),E.forEach(t),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(l,_){m(l,p,_),e(p,b),e(p,g),e(g,u),e(p,T)},d(l){l&&t(p)}}}function ew(j){let p,b,g,u,T;return u=new S({props:{code:`from transformers import T5Tokenizer, TFT5EncoderModel

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = TFT5EncoderModel.from_pretrained("t5-small")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="tf"
).input_ids  # Batch size 1
outputs = model(input_ids)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, TFT5EncoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFT5EncoderModel.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)`}}),{c(){p=a("p"),b=o("Examples:"),g=d(),k(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);b=s(_,"Examples:"),_.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,b),m(l,g,_),y(u,l,_),T=!0},p:Te,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function tw(j){let p,b,g,u,T;return{c(){p=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var _=i(p);b=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var E=i(g);u=s(E,"Module"),E.forEach(t),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(l,_){m(l,p,_),e(p,b),e(p,g),e(g,u),e(p,T)},d(l){l&&t(p)}}}function nw(j){let p,b,g,u,T;return u=new S({props:{code:`from transformers import T5Tokenizer, FlaxT5Model

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5Model.from_pretrained("t5-small")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="np"
).input_ids
decoder_input_ids = tokenizer("Studies show that", return_tensors="np").input_ids

# preprocess: Prepend decoder_input_ids with start token which is pad token for T5Model.
# This is not needed for torch's T5ForConditionalGeneration as it does this internally using labels arg.
decoder_input_ids = model._shift_right(decoder_input_ids)

# forward pass
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5Model.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>
<span class="hljs-meta">... </span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># preprocess: Prepend decoder_input_ids with start token which is pad token for T5Model.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># This is not needed for torch&#x27;s T5ForConditionalGeneration as it does this internally using labels arg.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = model._shift_right(decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=a("p"),b=o("Example:"),g=d(),k(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);b=s(_,"Example:"),_.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,b),m(l,g,_),y(u,l,_),T=!0},p:Te,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function ow(j){let p,b,g,u,T;return u=new S({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=a("p"),b=o("Example:"),g=d(),k(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);b=s(_,"Example:"),_.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,b),m(l,g,_),y(u,l,_),T=!0},p:Te,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function sw(j){let p,b,g,u,T;return u=new S({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration
import jax.numpy as jnp

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=a("p"),b=o("Example:"),g=d(),k(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);b=s(_,"Example:"),_.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,b),m(l,g,_),y(u,l,_),T=!0},p:Te,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function aw(j){let p,b,g,u,T;return{c(){p=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var _=i(p);b=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var E=i(g);u=s(E,"Module"),E.forEach(t),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(l,_){m(l,p,_),e(p,b),e(p,g),e(g,u),e(p,T)},d(l){l&&t(p)}}}function rw(j){let p,b,g,u,T;return u=new S({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

ARTICLE_TO_SUMMARIZE = "summarize: My friends are cool but they eat too many carbs."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], return_tensors="np")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"]).sequences
print(tokenizer.decode(summary_ids[0], skip_special_tokens=True, clean_up_tokenization_spaces=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;summarize: My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]).sequences
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){p=a("p"),b=o("Example:"),g=d(),k(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);b=s(_,"Example:"),_.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,b),m(l,g,_),y(u,l,_),T=!0},p:Te,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function iw(j){let p,b,g,u,T;return u=new S({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=a("p"),b=o("Example:"),g=d(),k(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);b=s(_,"Example:"),_.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,b),m(l,g,_),y(u,l,_),T=!0},p:Te,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function lw(j){let p,b,g,u,T;return u=new S({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration
import jax.numpy as jnp

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "summarize: My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;summarize: My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=a("p"),b=o("Example:"),g=d(),k(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);b=s(_,"Example:"),_.forEach(t),g=c(l),v(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,b),m(l,g,_),y(u,l,_),T=!0},p:Te,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function dw(j){let p,b,g,u,T;return{c(){p=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var _=i(p);b=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var E=i(g);u=s(E,"Module"),E.forEach(t),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(l,_){m(l,p,_),e(p,b),e(p,g),e(g,u),e(p,T)},d(l){l&&t(p)}}}function cw(j){let p,b,g,u,T,l,_,E,Ee,se,q,ee,G,ae,qe,U,Fe,ve,W,A,re,pe,C,N,he,K,ye,ue,R,Me,we,P,Ce,H,V,be,O,Pe,ke,I,Ne,B,Oe,z,F,te,Ge,et,D,Ue,ne,tt,L,Y,nt,Le,Z,ot,Ae,Ie,st,Xd,or,hh,Qd,We,Ti,bi,Do,uh,mh,ki,vi,So,fh,_h,yi,wi,Go,gh,Th,$i,xi,Uo,bh,kh,zi,sr,Wo,vh,yh,ec,ar,wh,tc,$t,ji,mn,Ei,$h,xh,rr,zh,jh,Eh,qi,fn,Fi,qh,Fh,ir,Mh,Ch,Ph,Mi,_n,Ci,Nh,Oh,lr,Lh,Ah,nc,gn,Ih,Ro,Dh,Sh,oc,xt,Gh,Bo,Uh,Wh,Ho,Rh,Bh,sc,dr,ac,Lt,Tn,Pi,Vo,Hh,Ni,Vh,rc,at,Kh,Oi,Yh,Zh,Li,Jh,Xh,Ai,Qh,eu,ic,bn,tu,cr,nu,ou,lc,pr,Ii,su,dc,me,au,Di,ru,iu,Si,lu,du,Gi,cu,pu,Ui,hu,uu,Wi,mu,fu,hr,_u,gu,cc,ur,Tu,pc,Ko,hc,kn,bu,Yo,ku,vu,uc,mr,Ri,yu,mc,fr,wu,fc,Zo,_c,oe,$u,Bi,xu,zu,Hi,ju,Eu,Vi,qu,Fu,Ki,Mu,Cu,Yi,Pu,Nu,Zi,Ou,Lu,Ji,Au,Iu,gc,zt,Du,Xi,Su,Gu,Qi,Uu,Wu,Tc,fe,Ru,el,Bu,Hu,tl,Vu,Ku,nl,Yu,Zu,ol,Ju,Xu,Jo,Qu,em,sl,tm,nm,bc,Xo,kc,_r,om,vc,gr,Qo,sm,al,am,rm,yc,jt,im,es,lm,dm,ts,cm,pm,wc,vn,hm,rl,um,mm,$c,Tr,xc,At,yn,il,ns,fm,ll,_m,zc,rt,gm,br,Tm,bm,os,km,vm,ss,ym,wm,jc,as,Ec,Re,$m,dl,xm,zm,cl,jm,Em,kr,qm,Fm,pl,Mm,Cm,qc,vr,Pm,Fc,rs,Mc,yr,Nm,Cc,is,Pc,wr,Nc,It,wn,hl,ls,Om,ul,Lm,Oc,it,Am,ds,Im,Dm,ml,Sm,Gm,fl,Um,Wm,Lc,Dt,$n,_l,cs,Rm,gl,Bm,Ac,$r,Hm,Ic,xn,Tl,St,Vm,ps,Km,Ym,hs,Zm,Jm,Xm,bl,De,Qm,us,ef,tf,ms,nf,of,fs,sf,af,_s,rf,lf,gs,df,cf,Dc,Gt,zn,kl,Ts,pf,vl,hf,Sc,vt,bs,uf,yt,mf,xr,ff,_f,zr,gf,Tf,ks,bf,kf,vf,Ut,yf,jr,wf,$f,Er,xf,zf,Gc,Wt,jn,yl,vs,jf,wl,Ef,Uc,ie,ys,qf,ws,Ff,$s,Mf,Cf,Pf,xs,Nf,qr,Of,Lf,Af,Et,zs,If,$l,Df,Sf,js,Fr,Gf,xl,Uf,Wf,Mr,Rf,zl,Bf,Hf,En,Es,Vf,qs,Kf,jl,Yf,Zf,Jf,qn,Fs,Xf,El,Qf,e_,Cr,Ms,Wc,Rt,Fn,ql,Cs,t_,Fl,n_,Rc,Se,Ps,o_,Bt,s_,Ml,a_,r_,Ns,i_,l_,d_,Os,c_,Pr,p_,h_,u_,qt,Ls,m_,Cl,f_,__,As,Nr,g_,Pl,T_,b_,Or,k_,Nl,v_,y_,Mn,Is,w_,Ol,$_,Bc,Ht,Cn,Ll,Ds,x_,Al,z_,Hc,J,Ss,j_,Il,E_,q_,Gs,F_,Us,M_,C_,P_,Ws,N_,Lr,O_,L_,A_,Rs,I_,Bs,D_,S_,G_,lt,Hs,U_,Vt,W_,Ar,R_,B_,Dl,H_,V_,K_,Pn,Y_,Nn,Z_,dt,Vs,J_,Sl,X_,Q_,Gl,eg,tg,On,ng,Ft,Ks,og,Ul,sg,ag,Ln,Vc,Kt,An,Wl,Ys,rg,Rl,ig,Kc,X,Zs,lg,Js,dg,Bl,cg,pg,hg,Xs,ug,Qs,mg,fg,_g,ea,gg,Ir,Tg,bg,kg,ta,vg,na,yg,wg,$g,ct,oa,xg,Yt,zg,Dr,jg,Eg,Hl,qg,Fg,Mg,In,Cg,Dn,Pg,pt,sa,Ng,Vl,Og,Lg,Kl,Ag,Ig,Sn,Dg,Mt,aa,Sg,Yl,Gg,Ug,Gn,Yc,Zt,Un,Zl,ra,Wg,Jl,Rg,Zc,Q,ia,Bg,Xl,Hg,Vg,la,Kg,da,Yg,Zg,Jg,ca,Xg,Sr,Qg,eT,tT,pa,nT,ha,oT,sT,aT,ht,ua,rT,Jt,iT,Gr,lT,dT,Ql,cT,pT,hT,Wn,uT,Rn,mT,ut,ma,fT,ed,_T,gT,td,TT,bT,Bn,kT,Ct,fa,vT,nd,yT,wT,Hn,Jc,Xt,Vn,od,_a,$T,sd,xT,Xc,le,ga,zT,ad,jT,ET,Ta,qT,ba,FT,MT,CT,ka,PT,Ur,NT,OT,LT,va,AT,ya,IT,DT,ST,Kn,GT,mt,wa,UT,Qt,WT,Wr,RT,BT,rd,HT,VT,KT,Yn,YT,Zn,Qc,en,Jn,id,$a,ZT,ld,JT,ep,de,xa,XT,za,QT,dd,eb,tb,nb,ja,ob,Ea,sb,ab,rb,qa,ib,Rr,lb,db,cb,Fa,pb,Ma,hb,ub,mb,Xn,fb,ft,Ca,_b,tn,gb,Br,Tb,bb,cd,kb,vb,yb,Qn,wb,eo,tp,nn,to,pd,Pa,$b,hd,xb,np,ce,Na,zb,ud,jb,Eb,Oa,qb,La,Fb,Mb,Cb,Aa,Pb,Hr,Nb,Ob,Lb,Ia,Ab,Da,Ib,Db,Sb,no,Gb,_t,Sa,Ub,on,Wb,Vr,Rb,Bb,md,Hb,Vb,Kb,oo,Yb,so,op,sn,ao,fd,Ga,Zb,_d,Jb,sp,Je,Ua,Xb,gt,Wa,Qb,an,ek,gd,tk,nk,Td,ok,sk,ak,ro,rk,io,ik,lo,Ra,lk,co,dk,po,Ba,ck,ho,ap,rn,uo,bd,Ha,pk,kd,hk,rp,Xe,Va,uk,Tt,Ka,mk,ln,fk,vd,_k,gk,yd,Tk,bk,kk,mo,vk,fo,yk,_o,Ya,wk,go,$k,To,Za,xk,bo,ip,dn,ko,wd,Ja,zk,$d,jk,lp,cn,Xa,Ek,Pt,Qa,qk,pn,Fk,Kr,Mk,Ck,xd,Pk,Nk,Ok,vo,dp;return l=new _e({}),ae=new _e({}),Vo=new _e({}),Ko=new S({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

input_ids = tokenizer("The <extra_id_0> walks in <extra_id_1> park", return_tensors="pt").input_ids
labels = tokenizer("<extra_id_0> cute dog <extra_id_1> the <extra_id_2>", return_tensors="pt").input_ids

# the forward function automatically creates the correct decoder_input_ids
loss = model(input_ids=input_ids, labels=labels).loss
loss.item()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;The &lt;extra_id_0&gt; walks in &lt;extra_id_1&gt; park&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;&lt;extra_id_0&gt; cute dog &lt;extra_id_1&gt; the &lt;extra_id_2&gt;&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the forward function automatically creates the correct decoder_input_ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_ids=input_ids, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.item()
<span class="hljs-number">3.7837</span>`}}),Zo=new S({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

input_ids = tokenizer("translate English to German: The house is wonderful.", return_tensors="pt").input_ids
labels = tokenizer("Das Haus ist wunderbar.", return_tensors="pt").input_ids

# the forward function automatically creates the correct decoder_input_ids
loss = model(input_ids=input_ids, labels=labels).loss
loss.item()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;translate English to German: The house is wonderful.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;Das Haus ist wunderbar.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the forward function automatically creates the correct decoder_input_ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_ids=input_ids, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.item()
<span class="hljs-number">0.2542</span>`}}),Xo=new S({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration
import torch

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

# the following 2 hyperparameters are task-specific
max_source_length = 512
max_target_length = 128

# Suppose we have the following 2 training examples:
input_sequence_1 = "Welcome to NYC"
output_sequence_1 = "Bienvenue \xE0 NYC"

input_sequence_2 = "HuggingFace is a company"
output_sequence_2 = "HuggingFace est une entreprise"

# encode the inputs
task_prefix = "translate English to French: "
input_sequences = [input_sequence_1, input_sequence_2]

encoding = tokenizer(
    [task_prefix + sequence for sequence in input_sequences],
    padding="longest",
    max_length=max_source_length,
    truncation=True,
    return_tensors="pt",
)

input_ids, attention_mask = encoding.input_ids, encoding.attention_mask

# encode the targets
target_encoding = tokenizer(
    [output_sequence_1, output_sequence_2],
    padding="longest",
    max_length=max_target_length,
    truncation=True,
    return_tensors="pt",
)
labels = target_encoding.input_ids

# replace padding token id's of the labels by -100 so it's ignored by the loss
labels[labels == tokenizer.pad_token_id] = -100

# forward pass
loss = model(input_ids=input_ids, attention_mask=attention_mask, labels=labels).loss
loss.item()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the following 2 hyperparameters are task-specific</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>max_source_length = <span class="hljs-number">512</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>max_target_length = <span class="hljs-number">128</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Suppose we have the following 2 training examples:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_sequence_1 = <span class="hljs-string">&quot;Welcome to NYC&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>output_sequence_1 = <span class="hljs-string">&quot;Bienvenue \xE0 NYC&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>input_sequence_2 = <span class="hljs-string">&quot;HuggingFace is a company&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>output_sequence_2 = <span class="hljs-string">&quot;HuggingFace est une entreprise&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># encode the inputs</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>task_prefix = <span class="hljs-string">&quot;translate English to French: &quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_sequences = [input_sequence_1, input_sequence_2]

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(
<span class="hljs-meta">... </span>    [task_prefix + sequence <span class="hljs-keyword">for</span> sequence <span class="hljs-keyword">in</span> input_sequences],
<span class="hljs-meta">... </span>    padding=<span class="hljs-string">&quot;longest&quot;</span>,
<span class="hljs-meta">... </span>    max_length=max_source_length,
<span class="hljs-meta">... </span>    truncation=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids, attention_mask = encoding.input_ids, encoding.attention_mask

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># encode the targets</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_encoding = tokenizer(
<span class="hljs-meta">... </span>    [output_sequence_1, output_sequence_2],
<span class="hljs-meta">... </span>    padding=<span class="hljs-string">&quot;longest&quot;</span>,
<span class="hljs-meta">... </span>    max_length=max_target_length,
<span class="hljs-meta">... </span>    truncation=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = target_encoding.input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># replace padding token id&#x27;s of the labels by -100 so it&#x27;s ignored by the loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels[labels == tokenizer.pad_token_id] = -<span class="hljs-number">100</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_ids=input_ids, attention_mask=attention_mask, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.item()
<span class="hljs-number">0.188</span>`}}),ns=new _e({}),as=new S({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

input_ids = tokenizer("translate English to German: The house is wonderful.", return_tensors="pt").input_ids
outputs = model.generate(input_ids)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;translate English to German: The house is wonderful.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>))
Das Haus ist wunderbar.`}}),rs=new S({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

task_prefix = "translate English to German: "
# use different length sentences to test batching
sentences = ["The house is wonderful.", "I like to work in NYC."]

inputs = tokenizer([task_prefix + sentence for sentence in sentences], return_tensors="pt", padding=True)

output_sequences = model.generate(
    input_ids=inputs["input_ids"],
    attention_mask=inputs["attention_mask"],
    do_sample=False,  # disable sampling to test if batching affects output
)

print(tokenizer.batch_decode(output_sequences, skip_special_tokens=True))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>task_prefix = <span class="hljs-string">&quot;translate English to German: &quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># use different length sentences to test batching</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>sentences = [<span class="hljs-string">&quot;The house is wonderful.&quot;</span>, <span class="hljs-string">&quot;I like to work in NYC.&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([task_prefix + sentence <span class="hljs-keyword">for</span> sentence <span class="hljs-keyword">in</span> sentences], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>output_sequences = model.generate(
<span class="hljs-meta">... </span>    input_ids=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>],
<span class="hljs-meta">... </span>    attention_mask=inputs[<span class="hljs-string">&quot;attention_mask&quot;</span>],
<span class="hljs-meta">... </span>    do_sample=<span class="hljs-literal">False</span>,  <span class="hljs-comment"># disable sampling to test if batching affects output</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(output_sequences, skip_special_tokens=<span class="hljs-literal">True</span>))
[<span class="hljs-string">&#x27;Das Haus ist wunderbar.&#x27;</span>, <span class="hljs-string">&#x27;Ich arbeite gerne in NYC.&#x27;</span>]`}}),is=new S({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

input_ids = tokenizer("The <extra_id_0> walks in <extra_id_1> park", return_tensors="pt").input_ids

sequence_ids = model.generate(input_ids)
sequences = tokenizer.batch_decode(sequence_ids)
sequences`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;The &lt;extra_id_0&gt; walks in &lt;extra_id_1&gt; park&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_ids = model.generate(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>sequences = tokenizer.batch_decode(sequence_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>sequences
[<span class="hljs-string">&#x27;&lt;pad&gt; &lt;extra_id_0&gt; park offers&lt;extra_id_1&gt; the&lt;extra_id_2&gt; park.&lt;/s&gt;&#x27;</span>]`}}),ls=new _e({}),cs=new _e({}),Ts=new _e({}),bs=new M({props:{name:"class transformers.T5Config",anchor:"transformers.T5Config",parameters:[{name:"vocab_size",val:" = 32128"},{name:"d_model",val:" = 512"},{name:"d_kv",val:" = 64"},{name:"d_ff",val:" = 2048"},{name:"num_layers",val:" = 6"},{name:"num_decoder_layers",val:" = None"},{name:"num_heads",val:" = 8"},{name:"relative_attention_num_buckets",val:" = 32"},{name:"relative_attention_max_distance",val:" = 128"},{name:"dropout_rate",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_factor",val:" = 1.0"},{name:"feed_forward_proj",val:" = 'relu'"},{name:"is_encoder_decoder",val:" = True"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"eos_token_id",val:" = 1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.T5Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32128) &#x2014;
Vocabulary size of the T5 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Model">T5Model</a> or <a href="/docs/transformers/main/en/model_doc/t5#transformers.TFT5Model">TFT5Model</a>.`,name:"vocab_size"},{anchor:"transformers.T5Config.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Size of the encoder layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.T5Config.d_kv",description:`<strong>d_kv</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Size of the key, query, value projections per attention head. <code>d_kv</code> has to be equal to <code>d_model // num_heads</code>.`,name:"d_kv"},{anchor:"transformers.T5Config.d_ff",description:`<strong>d_ff</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Size of the intermediate feed forward layer in each <code>T5Block</code>.`,name:"d_ff"},{anchor:"transformers.T5Config.num_layers",description:`<strong>num_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_layers"},{anchor:"transformers.T5Config.num_decoder_layers",description:`<strong>num_decoder_layers</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Number of hidden layers in the Transformer decoder. Will use the same value as <code>num_layers</code> if not set.`,name:"num_decoder_layers"},{anchor:"transformers.T5Config.num_heads",description:`<strong>num_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_heads"},{anchor:"transformers.T5Config.relative_attention_num_buckets",description:`<strong>relative_attention_num_buckets</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The number of buckets to use for each attention layer.`,name:"relative_attention_num_buckets"},{anchor:"transformers.T5Config.relative_attention_max_distance",description:`<strong>relative_attention_max_distance</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
The maximum distance of the longer sequences for the bucket separation.`,name:"relative_attention_max_distance"},{anchor:"transformers.T5Config.dropout_rate",description:`<strong>dropout_rate</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The ratio for all dropout layers.`,name:"dropout_rate"},{anchor:"transformers.T5Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-6) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.T5Config.initializer_factor",description:`<strong>initializer_factor</strong> (<code>float</code>, <em>optional</em>, defaults to 1) &#x2014;
A factor for initializing all weight matrices (should be kept to 1, used internally for initialization
testing).`,name:"initializer_factor"},{anchor:"transformers.T5Config.feed_forward_proj",description:`<strong>feed_forward_proj</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;relu&quot;</code>) &#x2014;
Type of feed forward layer to be used. Should be one of <code>&quot;relu&quot;</code> or <code>&quot;gated-gelu&quot;</code>. T5v1.1 uses the
<code>&quot;gated-gelu&quot;</code> feed forward projection. Original T5 uses <code>&quot;relu&quot;</code>.`,name:"feed_forward_proj"},{anchor:"transformers.T5Config.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/configuration_t5.py#L34"}}),vs=new _e({}),ys=new M({props:{name:"class transformers.T5Tokenizer",anchor:"transformers.T5Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.T5Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.T5Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.T5Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.T5Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.T5Tokenizer.extra_ids",description:`<strong>extra_ids</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
Add a number of extra ids added to the end of the vocabulary for use as sentinels. These tokens are
accessible as &#x201C;<extra<em>id{%d}&gt;&#x201D; where &#x201D;{%d}&#x201D; is a number between 0 and extra_ids-1. Extra tokens are
indexed from the end of the vocabulary up to beginning (&#x201C;<extra_id_0>&#x201D; is the last token in the vocabulary
like in T5 preprocessing see
<a href="https://github.com/google-research/text-to-text-transfer-transformer/blob/9fd7b14a769417be33bc6c850f9598764913c833/t5/data/preprocessors.py#L2117" rel="nofollow">here</a>).</extra_id_0></extra<em>`,name:"extra_ids"},{anchor:"transformers.T5Tokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.T5Tokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.T5Tokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L55"}}),zs=new M({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L249",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Es=new M({props:{name:"get_special_tokens_mask",anchor:"transformers.T5Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L188",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Fs=new M({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L227",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ms=new M({props:{name:"save_vocabulary",anchor:"transformers.T5Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L324"}}),Cs=new _e({}),Ps=new M({props:{name:"class transformers.T5TokenizerFast",anchor:"transformers.T5TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.T5TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.T5TokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.T5TokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.T5TokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.T5TokenizerFast.extra_ids",description:`<strong>extra_ids</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
Add a number of extra ids added to the end of the vocabulary for use as sentinels. These tokens are
accessible as &#x201C;<extra<em>id{%d}&gt;&#x201D; where &#x201D;{%d}&#x201D; is a number between 0 and extra_ids-1. Extra tokens are
indexed from the end of the vocabulary up to beginning (&#x201C;<extra_id_0>&#x201D; is the last token in the vocabulary
like in T5 preprocessing see
<a href="https://github.com/google-research/text-to-text-transfer-transformer/blob/9fd7b14a769417be33bc6c850f9598764913c833/t5/data/preprocessors.py#L2117" rel="nofollow">here</a>).</extra_id_0></extra<em>`,name:"extra_ids"},{anchor:"transformers.T5TokenizerFast.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5_fast.py#L65"}}),Ls=new M({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5_fast.py#L191",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Is=new M({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5_fast.py#L217",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ds=new _e({}),Ss=new M({props:{name:"class transformers.T5Model",anchor:"transformers.T5Model",parameters:[{name:"config",val:": T5Config"}],parametersDescription:[{anchor:"transformers.T5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1274"}}),Hs=new M({props:{name:"forward",anchor:"transformers.T5Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.T5Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5Model.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>T5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.T5Model.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.T5Model.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.T5Model.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.T5Model.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.T5Model.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.T5Model.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.T5Model.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.T5Model.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.T5Model.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.T5Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.T5Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.T5Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1350",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Pn=new kt({props:{$$slots:{default:[N1]},$$scope:{ctx:j}}}),Nn=new ge({props:{anchor:"transformers.T5Model.forward.example",$$slots:{default:[O1]},$$scope:{ctx:j}}}),Vs=new M({props:{name:"parallelize",anchor:"transformers.T5Model.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.T5Model.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
A dictionary that maps attention modules to devices. Note that the embedding module and LMHead are always
automatically mapped to the first device (for esoteric reasons). That means that the first device should
have fewer attention modules mapped to it than other devices. For reference, the t5 models have the
following number of attention modules:</p>
<ul>
<li>t5-small: 6</li>
<li>t5-base: 12</li>
<li>t5-large: 24</li>
<li>t5-3b: 24</li>
<li>t5-11b: 24</li>
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1306"}}),On=new ge({props:{anchor:"transformers.T5Model.parallelize.example",$$slots:{default:[L1]},$$scope:{ctx:j}}}),Ks=new M({props:{name:"deparallelize",anchor:"transformers.T5Model.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1318"}}),Ln=new ge({props:{anchor:"transformers.T5Model.deparallelize.example",$$slots:{default:[A1]},$$scope:{ctx:j}}}),Ys=new _e({}),Zs=new M({props:{name:"class transformers.T5ForConditionalGeneration",anchor:"transformers.T5ForConditionalGeneration",parameters:[{name:"config",val:": T5Config"}],parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1466"}}),oa=new M({props:{name:"forward",anchor:"transformers.T5ForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5ForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>T5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.T5ForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.T5ForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.T5ForConditionalGeneration.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.T5ForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.T5ForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.T5ForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.T5ForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.T5ForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.T5ForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[-100, 0, ..., config.vocab_size - 1]</code>. All labels set to <code>-100</code> are ignored (masked), the loss is only computed for
labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1547",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),In=new kt({props:{$$slots:{default:[I1]},$$scope:{ctx:j}}}),Dn=new ge({props:{anchor:"transformers.T5ForConditionalGeneration.forward.example",$$slots:{default:[D1]},$$scope:{ctx:j}}}),sa=new M({props:{name:"parallelize",anchor:"transformers.T5ForConditionalGeneration.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
A dictionary that maps attention modules to devices. Note that the embedding module and LMHead are always
automatically mapped to the first device (for esoteric reasons). That means that the first device should
have fewer attention modules mapped to it than other devices. For reference, the t5 models have the
following number of attention modules:</p>
<ul>
<li>t5-small: 6</li>
<li>t5-base: 12</li>
<li>t5-large: 24</li>
<li>t5-3b: 24</li>
<li>t5-11b: 24</li>
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1503"}}),Sn=new ge({props:{anchor:"transformers.T5ForConditionalGeneration.parallelize.example",$$slots:{default:[S1]},$$scope:{ctx:j}}}),aa=new M({props:{name:"deparallelize",anchor:"transformers.T5ForConditionalGeneration.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1516"}}),Gn=new ge({props:{anchor:"transformers.T5ForConditionalGeneration.deparallelize.example",$$slots:{default:[G1]},$$scope:{ctx:j}}}),ra=new _e({}),ia=new M({props:{name:"class transformers.T5EncoderModel",anchor:"transformers.T5EncoderModel",parameters:[{name:"config",val:": T5Config"}],parametersDescription:[{anchor:"transformers.T5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1760"}}),ua=new M({props:{name:"forward",anchor:"transformers.T5EncoderModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.T5EncoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5EncoderModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5EncoderModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.T5EncoderModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.T5EncoderModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.T5EncoderModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.T5EncoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1818",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wn=new kt({props:{$$slots:{default:[U1]},$$scope:{ctx:j}}}),Rn=new ge({props:{anchor:"transformers.T5EncoderModel.forward.example",$$slots:{default:[W1]},$$scope:{ctx:j}}}),ma=new M({props:{name:"parallelize",anchor:"transformers.T5EncoderModel.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.T5EncoderModel.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
A dictionary that maps attention modules to devices. Note that the embedding module and LMHead are always
automatically mapped to the first device (for esoteric reasons). That means that the first device should
have fewer attention modules mapped to it than other devices. For reference, the t5 models have the
following number of attention modules:</p>
<ul>
<li>t5-small: 6</li>
<li>t5-base: 12</li>
<li>t5-large: 24</li>
<li>t5-3b: 24</li>
<li>t5-11b: 24</li>
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1781"}}),Bn=new ge({props:{anchor:"transformers.T5EncoderModel.parallelize.example",$$slots:{default:[R1]},$$scope:{ctx:j}}}),fa=new M({props:{name:"deparallelize",anchor:"transformers.T5EncoderModel.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1792"}}),Hn=new ge({props:{anchor:"transformers.T5EncoderModel.deparallelize.example",$$slots:{default:[B1]},$$scope:{ctx:j}}}),_a=new _e({}),ga=new M({props:{name:"class transformers.TFT5Model",anchor:"transformers.TFT5Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFT5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1118"}}),Kn=new kt({props:{$$slots:{default:[H1]},$$scope:{ctx:j}}}),wa=new M({props:{name:"call",anchor:"transformers.TFT5Model.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFT5Model.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>inputs</code> for pretraining take a look at <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.TFT5Model.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for sequence to sequence training. T5 uses the <code>pad_token_id</code> as the starting token for
<code>decoder_input_ids</code> generation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code>
have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.TFT5Model.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFT5Model.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.TFT5Model.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFT5Model.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFT5Model.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(tf.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.TFT5Model.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(tf.Tensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFT5Model.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFT5Model.call.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.TFT5Model.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFT5Model.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFT5Model.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFT5Model.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFT5Model.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1146",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Yn=new kt({props:{$$slots:{default:[V1]},$$scope:{ctx:j}}}),Zn=new ge({props:{anchor:"transformers.TFT5Model.call.example",$$slots:{default:[K1]},$$scope:{ctx:j}}}),$a=new _e({}),xa=new M({props:{name:"class transformers.TFT5ForConditionalGeneration",anchor:"transformers.TFT5ForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1270"}}),Xn=new kt({props:{$$slots:{default:[Y1]},$$scope:{ctx:j}}}),Ca=new M({props:{name:"call",anchor:"transformers.TFT5ForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>inputs</code> for pretraining take a look at <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.TFT5ForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for sequence to sequence training. T5 uses the <code>pad_token_id</code> as the starting token for
<code>decoder_input_ids</code> generation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code>
have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.TFT5ForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFT5ForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.TFT5ForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFT5ForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFT5ForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(tf.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.TFT5ForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(tf.Tensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFT5ForConditionalGeneration.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFT5ForConditionalGeneration.call.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.TFT5ForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFT5ForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFT5ForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFT5ForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFT5ForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFT5ForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1326",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Qn=new kt({props:{$$slots:{default:[Z1]},$$scope:{ctx:j}}}),eo=new ge({props:{anchor:"transformers.TFT5ForConditionalGeneration.call.example",$$slots:{default:[J1]},$$scope:{ctx:j}}}),Pa=new _e({}),Na=new M({props:{name:"class transformers.TFT5EncoderModel",anchor:"transformers.TFT5EncoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFT5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1549"}}),no=new kt({props:{$$slots:{default:[X1]},$$scope:{ctx:j}}}),Sa=new M({props:{name:"call",anchor:"transformers.TFT5EncoderModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFT5EncoderModel.call.inputs",description:`<strong>inputs</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p>To know more on how to prepare <code>inputs</code> for pre-training take a look at <a href="./t5#training">T5 Training</a>.`,name:"inputs"},{anchor:"transformers.TFT5EncoderModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFT5EncoderModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFT5EncoderModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFT5EncoderModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFT5EncoderModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFT5EncoderModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFT5EncoderModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1573",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),oo=new kt({props:{$$slots:{default:[Q1]},$$scope:{ctx:j}}}),so=new ge({props:{anchor:"transformers.TFT5EncoderModel.call.example",$$slots:{default:[ew]},$$scope:{ctx:j}}}),Ga=new _e({}),Ua=new M({props:{name:"class transformers.FlaxT5Model",anchor:"transformers.FlaxT5Model",parameters:[{name:"config",val:": T5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1367"}}),Wa=new M({props:{name:"__call__",anchor:"transformers.FlaxT5Model.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5Model.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5Model.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5Model.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>T5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxT5Model.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxT5Model.__call__.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxT5Model.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L987",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ro=new kt({props:{$$slots:{default:[tw]},$$scope:{ctx:j}}}),io=new ge({props:{anchor:"transformers.FlaxT5Model.__call__.example",$$slots:{default:[nw]},$$scope:{ctx:j}}}),Ra=new M({props:{name:"encode",anchor:"transformers.FlaxT5Model.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5Model.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5Model.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5Model.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxT5Model.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxT5Model.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1073",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.t5.configuration_t5.T5Config'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),co=new ge({props:{anchor:"transformers.FlaxT5Model.encode.example",$$slots:{default:[ow]},$$scope:{ctx:j}}}),Ba=new M({props:{name:"decode",anchor:"transformers.FlaxT5Model.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5Model.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For training, <code>decoder_input_ids</code> should be provided.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxT5Model.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxT5Model.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxT5Model.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxT5Model.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxT5Model.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxT5Model.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxT5Model.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1131",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.t5.configuration_t5.T5Config'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
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
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ho=new ge({props:{anchor:"transformers.FlaxT5Model.decode.example",$$slots:{default:[sw]},$$scope:{ctx:j}}}),Ha=new _e({}),Va=new M({props:{name:"class transformers.FlaxT5ForConditionalGeneration",anchor:"transformers.FlaxT5ForConditionalGeneration",parameters:[{name:"config",val:": T5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1606"}}),Ka=new M({props:{name:"__call__",anchor:"transformers.FlaxT5ForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>T5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./t5#training">T5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L987",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config"
>T5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) \u2014 Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),mo=new kt({props:{$$slots:{default:[aw]},$$scope:{ctx:j}}}),fo=new ge({props:{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.example",$$slots:{default:[rw]},$$scope:{ctx:j}}}),Ya=new M({props:{name:"encode",anchor:"transformers.FlaxT5ForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1073",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.t5.configuration_t5.T5Config'&gt;</code>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),go=new ge({props:{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.example",$$slots:{default:[iw]},$$scope:{ctx:j}}}),Za=new M({props:{name:"decode",anchor:"transformers.FlaxT5ForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For training, <code>decoder_input_ids</code> should be provided.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1609",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.t5.configuration_t5.T5Config'&gt;</code>) and inputs.</p>
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
`}}),bo=new ge({props:{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.example",$$slots:{default:[lw]},$$scope:{ctx:j}}}),Ja=new _e({}),Xa=new M({props:{name:"class transformers.FlaxT5EncoderModel",anchor:"transformers.FlaxT5EncoderModel",parameters:[{name:"config",val:": T5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1456"}}),Qa=new M({props:{name:"__call__",anchor:"transformers.FlaxT5EncoderModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5EncoderModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5EncoderModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5EncoderModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxT5EncoderModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxT5EncoderModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1459"}}),vo=new kt({props:{$$slots:{default:[dw]},$$scope:{ctx:j}}}),{c(){p=a("meta"),b=d(),g=a("h1"),u=a("a"),T=a("span"),k(l.$$.fragment),_=d(),E=a("span"),Ee=o("T5"),se=d(),q=a("h2"),ee=a("a"),G=a("span"),k(ae.$$.fragment),qe=d(),U=a("span"),Fe=o("Overview"),ve=d(),W=a("p"),A=o("The T5 model was presented in "),re=a("a"),pe=o("Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),C=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu.`),N=d(),he=a("p"),K=o("The abstract from the paper is the following:"),ye=d(),ue=a("p"),R=a("em"),Me=o(`Transfer learning, where a model is first pre-trained on a data-rich task before being fine-tuned on a downstream
task, has emerged as a powerful technique in natural language processing (NLP). The effectiveness of transfer learning
has given rise to a diversity of approaches, methodology, and practice. In this paper, we explore the landscape of
transfer learning techniques for NLP by introducing a unified framework that converts every language problem into a
text-to-text format. Our systematic study compares pretraining objectives, architectures, unlabeled datasets, transfer
approaches, and other factors on dozens of language understanding tasks. By combining the insights from our exploration
with scale and our new \u201CColossal Clean Crawled Corpus\u201D, we achieve state-of-the-art results on many benchmarks covering
summarization, question answering, text classification, and more. To facilitate future work on transfer learning for
NLP, we release our dataset, pre-trained models, and code.`),we=d(),P=a("p"),Ce=o("Tips:"),H=d(),V=a("ul"),be=a("li"),O=a("p"),Pe=o(`T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which
each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box by prepending a
different prefix to the input corresponding to each task, e.g., for translation: `),ke=a("em"),I=o("translate English to German: \u2026"),Ne=o(`,
for summarization: `),B=a("em"),Oe=o("summarize: \u2026"),z=o("."),F=d(),te=a("li"),Ge=a("p"),et=o("T5 uses relative scalar embeddings. Encoder input padding can be done on the left and on the right."),D=d(),Ue=a("li"),ne=a("p"),tt=o("See the "),L=a("a"),Y=o("training"),nt=o(", "),Le=a("a"),Z=o("inference"),ot=o(" and "),Ae=a("a"),Ie=o("scripts"),st=o(" sections below for all details regarding usage."),Xd=d(),or=a("p"),hh=o("T5 comes in different sizes:"),Qd=d(),We=a("ul"),Ti=a("li"),bi=a("p"),Do=a("a"),uh=o("t5-small"),mh=d(),ki=a("li"),vi=a("p"),So=a("a"),fh=o("t5-base"),_h=d(),yi=a("li"),wi=a("p"),Go=a("a"),gh=o("t5-large"),Th=d(),$i=a("li"),xi=a("p"),Uo=a("a"),bh=o("t5-3b"),kh=d(),zi=a("li"),sr=a("p"),Wo=a("a"),vh=o("t5-11b"),yh=o("."),ec=d(),ar=a("p"),wh=o("Based on the original T5 model, Google has released some follow-up works:"),tc=d(),$t=a("ul"),ji=a("li"),mn=a("p"),Ei=a("strong"),$h=o("T5v1.1"),xh=o(`: T5v1.1 is an improved version of T5 with some architectural tweaks, and is pre-trained on C4 only without
mixing in the supervised tasks. Refer to the documentation of T5v1.1 which can be found `),rr=a("a"),zh=o("here"),jh=o("."),Eh=d(),qi=a("li"),fn=a("p"),Fi=a("strong"),qh=o("mT5"),Fh=o(`: mT5 is a multilingual T5 model. It is pre-trained on the mC4 corpus, which includes 101 languages. Refer to
the documentation of mT5 which can be found `),ir=a("a"),Mh=o("here"),Ch=o("."),Ph=d(),Mi=a("li"),_n=a("p"),Ci=a("strong"),Nh=o("byT5"),Oh=o(`: byT5 is a T5 model pre-trained on byte sequences rather than SentencePiece subword token sequences. Refer
to the documentation of byT5 which can be found `),lr=a("a"),Lh=o("here"),Ah=o("."),nc=d(),gn=a("p"),Ih=o("All checkpoints can be found on the "),Ro=a("a"),Dh=o("hub"),Sh=o("."),oc=d(),xt=a("p"),Gh=o("This model was contributed by "),Bo=a("a"),Uh=o("thomwolf"),Wh=o(". The original code can be found "),Ho=a("a"),Rh=o("here"),Bh=o("."),sc=d(),dr=a("a"),ac=d(),Lt=a("h2"),Tn=a("a"),Pi=a("span"),k(Vo.$$.fragment),Hh=d(),Ni=a("span"),Vh=o("Training"),rc=d(),at=a("p"),Kh=o(`T5 is an encoder-decoder model and converts all NLP problems into a text-to-text format. It is trained using teacher
forcing. This means that for training, we always need an input sequence and a corresponding target sequence. The input
sequence is fed to the model using `),Oi=a("code"),Yh=o("input_ids"),Zh=o(`. The target sequence is shifted to the right, i.e., prepended by a
start-sequence token and fed to the decoder using the `),Li=a("code"),Jh=o("decoder_input_ids"),Xh=o(`. In teacher-forcing style, the target
sequence is then appended by the EOS token and corresponds to the `),Ai=a("code"),Qh=o("labels"),eu=o(`. The PAD token is hereby used as the
start-sequence token. T5 can be trained / fine-tuned both in a supervised and unsupervised fashion.`),ic=d(),bn=a("p"),tu=o("One can use "),cr=a("a"),nu=o("T5ForConditionalGeneration"),ou=o(` (or the Tensorflow/Flax variant), which includes the
language modeling head on top of the decoder.`),lc=d(),pr=a("ul"),Ii=a("li"),su=o("Unsupervised denoising training"),dc=d(),me=a("p"),au=o("In this setup, spans of the input sequence are masked by so-called sentinel tokens ("),Di=a("em"),ru=o("a.k.a"),iu=o(` unique mask tokens) and
the output sequence is formed as a concatenation of the same sentinel tokens and the `),Si=a("em"),lu=o("real"),du=o(` masked tokens. Each
sentinel token represents a unique mask token for this sentence and should start with `),Gi=a("code"),cu=o("<extra_id_0>"),pu=o(`,
`),Ui=a("code"),hu=o("<extra_id_1>"),uu=o(", \u2026 up to "),Wi=a("code"),mu=o("<extra_id_99>"),fu=o(`. As a default, 100 sentinel tokens are available in
`),hr=a("a"),_u=o("T5Tokenizer"),gu=o("."),cc=d(),ur=a("p"),Tu=o(`For instance, the sentence \u201CThe cute dog walks in the park\u201D with the masks put on \u201Ccute dog\u201D and \u201Cthe\u201D should be
processed as follows:`),pc=d(),k(Ko.$$.fragment),hc=d(),kn=a("p"),bu=o("If you\u2019re interested in pre-training T5 on a new corpus, check out the "),Yo=a("a"),ku=o("run_t5_mlm_flax.py"),vu=o(` script in the Examples
directory.`),uc=d(),mr=a("ul"),Ri=a("li"),yu=o("Supervised training"),mc=d(),fr=a("p"),wu=o(`In this setup, the input sequence and output sequence are a standard sequence-to-sequence input-output mapping.
Suppose that we want to fine-tune the model for translation for example, and we have a training example: the input
sequence \u201CThe house is wonderful.\u201D and output sequence \u201CDas Haus ist wunderbar.\u201D, then they should be prepared for
the model as follows:`),fc=d(),k(Zo.$$.fragment),_c=d(),oe=a("p"),$u=o("As you can see, only 2 inputs are required for the model in order to compute a loss: "),Bi=a("code"),xu=o("input_ids"),zu=o(` (which are the
`),Hi=a("code"),ju=o("input_ids"),Eu=o(" of the encoded input sequence) and "),Vi=a("code"),qu=o("labels"),Fu=o(" (which are the "),Ki=a("code"),Mu=o("input_ids"),Cu=o(` of the encoded
target sequence). The model will automatically create the `),Yi=a("code"),Pu=o("decoder_input_ids"),Nu=o(" based on the "),Zi=a("code"),Ou=o("labels"),Lu=o(`, by
shifting them one position to the right and prepending the `),Ji=a("code"),Au=o("config.decoder_start_token_id"),Iu=o(`, which for T5 is
equal to 0 (i.e. the id of the pad token). Also note the task prefix: we prepend the input sequence with \u2018translate
English to German: \u2019 before encoding it. This will help in improving the performance, as this task prefix was used
during T5\u2019s pre-training.`),gc=d(),zt=a("p"),Du=o(`However, the example above only shows a single training example. In practice, one trains deep learning models in
batches. This entails that we must pad/truncate examples to the same length. For encoder-decoder models, one
typically defines a `),Xi=a("code"),Su=o("max_source_length"),Gu=o(" and "),Qi=a("code"),Uu=o("max_target_length"),Wu=o(`, which determine the maximum length of the
input and output sequences respectively (otherwise they are truncated). These should be carefully set depending on
the task.`),Tc=d(),fe=a("p"),Ru=o("In addition, we must make sure that padding token id\u2019s of the "),el=a("code"),Bu=o("labels"),Hu=o(` are not taken into account by the loss
function. In PyTorch and Tensorflow, this can be done by replacing them with -100, which is the `),tl=a("code"),Vu=o("ignore_index"),Ku=o(`
of the `),nl=a("code"),Yu=o("CrossEntropyLoss"),Zu=o(". In Flax, one can use the "),ol=a("code"),Ju=o("decoder_attention_mask"),Xu=o(` to ignore padded tokens from
the loss (see the `),Jo=a("a"),Qu=o("Flax summarization script"),em=o(` for details). We also pass
`),sl=a("code"),tm=o("attention_mask"),nm=o(` as additional input to the model, which makes sure that padding tokens of the inputs are
ignored. The code example below illustrates all of this.`),bc=d(),k(Xo.$$.fragment),kc=d(),_r=a("p"),om=o("Additional training tips:"),vc=d(),gr=a("ul"),Qo=a("li"),sm=o("T5 models need a slightly higher learning rate than the default one set in the "),al=a("code"),am=o("Trainer"),rm=o(` when using the AdamW
optimizer. Typically, 1e-4 and 3e-4 work well for most problems (classification, summarization, translation, question
answering, question generation). Note that T5 was pre-trained using the AdaFactor optimizer.`),yc=d(),jt=a("p"),im=o("According to "),es=a("a"),lm=o("this forum post"),dm=o(`, task prefixes matter when
(1) doing multi-task training (2) your task is similar or related to one of the supervised tasks used in T5\u2019s
pre-training mixture (see Appendix D of the `),ts=a("a"),cm=o("paper"),pm=o(` for the task prefixes
used).`),wc=d(),vn=a("p"),hm=o(`If training on TPU, it is recommended to pad all examples of the dataset to the same length or make use of
`),rl=a("em"),um=o("pad_to_multiple_of"),mm=o(` to have a small number of predefined bucket sizes to fit all examples in. Dynamically padding
batches to the longest example is not recommended on TPU as it triggers a recompilation for every batch shape that is
encountered during training thus significantly slowing down the training. only padding up to the longest example in a
batch) leads to very slow training on TPU.`),$c=d(),Tr=a("a"),xc=d(),At=a("h2"),yn=a("a"),il=a("span"),k(ns.$$.fragment),fm=d(),ll=a("span"),_m=o("Inference"),zc=d(),rt=a("p"),gm=o("At inference time, it is recommended to use "),br=a("a"),Tm=o("generate()"),bm=o(`. This
method takes care of encoding the input and feeding the encoded hidden states via cross-attention layers to the decoder
and auto-regressively generates the decoder output. Check out `),os=a("a"),km=o("this blog post"),vm=o(` to know all the details about generating text with Transformers.
There\u2019s also `),ss=a("a"),ym=o("this blog post"),wm=o(` which explains how
generation works in general in encoder-decoder models.`),jc=d(),k(as.$$.fragment),Ec=d(),Re=a("p"),$m=o("Note that T5 uses the "),dl=a("code"),xm=o("pad_token_id"),zm=o(" as the "),cl=a("code"),jm=o("decoder_start_token_id"),Em=o(`, so when doing generation without using
`),kr=a("a"),qm=o("generate()"),Fm=o(", make sure you start it with the "),pl=a("code"),Mm=o("pad_token_id"),Cm=o("."),qc=d(),vr=a("p"),Pm=o("The example above only shows a single example. You can also do batched inference, like so:"),Fc=d(),k(rs.$$.fragment),Mc=d(),yr=a("p"),Nm=o(`Because T5 has been trained with the span-mask denoising objective,
it can be used to predict the sentinel (masked-out) tokens during inference.
The predicted tokens will then be placed between the sentinel tokens.`),Cc=d(),k(is.$$.fragment),Pc=d(),wr=a("a"),Nc=d(),It=a("h2"),wn=a("a"),hl=a("span"),k(ls.$$.fragment),Om=d(),ul=a("span"),Lm=o("Performance"),Oc=d(),it=a("p"),Am=o("If you\u2019d like a faster training and inference performance, install "),ds=a("a"),Im=o("apex"),Dm=o(" and then the model will automatically use "),ml=a("code"),Sm=o("apex.normalization.FusedRMSNorm"),Gm=o(" instead of "),fl=a("code"),Um=o("T5LayerNorm"),Wm=o(". The former uses an optimized fused kernel which is several times faster than the latter."),Lc=d(),Dt=a("h2"),$n=a("a"),_l=a("span"),k(cs.$$.fragment),Rm=d(),gl=a("span"),Bm=o("Example scripts"),Ac=d(),$r=a("p"),Hm=o("T5 is supported by several example scripts, both for pre-training and fine-tuning."),Ic=d(),xn=a("ul"),Tl=a("li"),St=a("p"),Vm=o("pre-training: the "),ps=a("a"),Km=o("run_t5_mlm_flax.py"),Ym=o(`
script allows you to further pre-train T5 or pre-train T5 from scratch on your own data. The `),hs=a("a"),Zm=o("t5_tokenizer_model.py"),Jm=o(`
script allows you to further train a T5 tokenizer or train a T5 Tokenizer from scratch on your own data. Note that
Flax (a neural network library on top of JAX) is particularly useful to train on TPU hardware.`),Xm=d(),bl=a("li"),De=a("p"),Qm=o("fine-tuning: T5 is supported by the official summarization scripts ("),us=a("a"),ef=o("PyTorch"),tf=o(", "),ms=a("a"),nf=o("Tensorflow"),of=o(", and "),fs=a("a"),sf=o("Flax"),af=o(`) and translation scripts
(`),_s=a("a"),rf=o("PyTorch"),lf=o(" and "),gs=a("a"),df=o("Tensorflow"),cf=o(`). These scripts allow
you to easily fine-tune T5 on custom data for summarization/translation.`),Dc=d(),Gt=a("h2"),zn=a("a"),kl=a("span"),k(Ts.$$.fragment),pf=d(),vl=a("span"),hf=o("T5Config"),Sc=d(),vt=a("div"),k(bs.$$.fragment),uf=d(),yt=a("p"),mf=o("This is the configuration class to store the configuration of a "),xr=a("a"),ff=o("T5Model"),_f=o(" or a "),zr=a("a"),gf=o("TFT5Model"),Tf=o(`. It is used to
instantiate a T5 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the T5
`),ks=a("a"),bf=o("t5-small"),kf=o(" architecture."),vf=d(),Ut=a("p"),yf=o("Configuration objects inherit from "),jr=a("a"),wf=o("PretrainedConfig"),$f=o(` and can be used to control the model outputs. Read the
documentation from `),Er=a("a"),xf=o("PretrainedConfig"),zf=o(" for more information."),Gc=d(),Wt=a("h2"),jn=a("a"),yl=a("span"),k(vs.$$.fragment),jf=d(),wl=a("span"),Ef=o("T5Tokenizer"),Uc=d(),ie=a("div"),k(ys.$$.fragment),qf=d(),ws=a("p"),Ff=o("Construct a T5 tokenizer. Based on "),$s=a("a"),Mf=o("SentencePiece"),Cf=o("."),Pf=d(),xs=a("p"),Nf=o("This tokenizer inherits from "),qr=a("a"),Of=o("PreTrainedTokenizer"),Lf=o(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Af=d(),Et=a("div"),k(zs.$$.fragment),If=d(),$l=a("p"),Df=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),Sf=d(),js=a("ul"),Fr=a("li"),Gf=o("single sequence: "),xl=a("code"),Uf=o("X </s>"),Wf=d(),Mr=a("li"),Rf=o("pair of sequences: "),zl=a("code"),Bf=o("A </s> B </s>"),Hf=d(),En=a("div"),k(Es.$$.fragment),Vf=d(),qs=a("p"),Kf=o(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),jl=a("code"),Yf=o("prepare_for_model"),Zf=o(" method."),Jf=d(),qn=a("div"),k(Fs.$$.fragment),Xf=d(),El=a("p"),Qf=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),e_=d(),Cr=a("div"),k(Ms.$$.fragment),Wc=d(),Rt=a("h2"),Fn=a("a"),ql=a("span"),k(Cs.$$.fragment),t_=d(),Fl=a("span"),n_=o("T5TokenizerFast"),Rc=d(),Se=a("div"),k(Ps.$$.fragment),o_=d(),Bt=a("p"),s_=o("Construct a \u201Cfast\u201D T5 tokenizer (backed by HuggingFace\u2019s "),Ml=a("em"),a_=o("tokenizers"),r_=o(` library). Based on
`),Ns=a("a"),i_=o("Unigram"),l_=o("."),d_=d(),Os=a("p"),c_=o("This tokenizer inherits from "),Pr=a("a"),p_=o("PreTrainedTokenizerFast"),h_=o(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),u_=d(),qt=a("div"),k(Ls.$$.fragment),m_=d(),Cl=a("p"),f_=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),__=d(),As=a("ul"),Nr=a("li"),g_=o("single sequence: "),Pl=a("code"),T_=o("X </s>"),b_=d(),Or=a("li"),k_=o("pair of sequences: "),Nl=a("code"),v_=o("A </s> B </s>"),y_=d(),Mn=a("div"),k(Is.$$.fragment),w_=d(),Ol=a("p"),$_=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),Bc=d(),Ht=a("h2"),Cn=a("a"),Ll=a("span"),k(Ds.$$.fragment),x_=d(),Al=a("span"),z_=o("T5Model"),Hc=d(),J=a("div"),k(Ss.$$.fragment),j_=d(),Il=a("p"),E_=o("The bare T5 Model transformer outputting raw hidden-states without any specific head on top."),q_=d(),Gs=a("p"),F_=o("The T5 model was proposed in "),Us=a("a"),M_=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),C_=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),P_=d(),Ws=a("p"),N_=o("This model inherits from "),Lr=a("a"),O_=o("PreTrainedModel"),L_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),A_=d(),Rs=a("p"),I_=o("This model is also a PyTorch "),Bs=a("a"),D_=o("torch.nn.Module"),S_=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),G_=d(),lt=a("div"),k(Hs.$$.fragment),U_=d(),Vt=a("p"),W_=o("The "),Ar=a("a"),R_=o("T5Model"),B_=o(" forward method, overrides the "),Dl=a("code"),H_=o("__call__"),V_=o(" special method."),K_=d(),k(Pn.$$.fragment),Y_=d(),k(Nn.$$.fragment),Z_=d(),dt=a("div"),k(Vs.$$.fragment),J_=d(),Sl=a("p"),X_=o("This is an experimental feature and is a subject to change at a moment\u2019s notice."),Q_=d(),Gl=a("p"),eg=o(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),tg=d(),k(On.$$.fragment),ng=d(),Ft=a("div"),k(Ks.$$.fragment),og=d(),Ul=a("p"),sg=o("Moves the model to cpu from a model parallel state."),ag=d(),k(Ln.$$.fragment),Vc=d(),Kt=a("h2"),An=a("a"),Wl=a("span"),k(Ys.$$.fragment),rg=d(),Rl=a("span"),ig=o("T5ForConditionalGeneration"),Kc=d(),X=a("div"),k(Zs.$$.fragment),lg=d(),Js=a("p"),dg=o("T5 Model with a "),Bl=a("code"),cg=o("language modeling"),pg=o(" head on top."),hg=d(),Xs=a("p"),ug=o("The T5 model was proposed in "),Qs=a("a"),mg=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),fg=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),_g=d(),ea=a("p"),gg=o("This model inherits from "),Ir=a("a"),Tg=o("PreTrainedModel"),bg=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kg=d(),ta=a("p"),vg=o("This model is also a PyTorch "),na=a("a"),yg=o("torch.nn.Module"),wg=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$g=d(),ct=a("div"),k(oa.$$.fragment),xg=d(),Yt=a("p"),zg=o("The "),Dr=a("a"),jg=o("T5ForConditionalGeneration"),Eg=o(" forward method, overrides the "),Hl=a("code"),qg=o("__call__"),Fg=o(" special method."),Mg=d(),k(In.$$.fragment),Cg=d(),k(Dn.$$.fragment),Pg=d(),pt=a("div"),k(sa.$$.fragment),Ng=d(),Vl=a("p"),Og=o("This is an experimental feature and is a subject to change at a moment\u2019s notice."),Lg=d(),Kl=a("p"),Ag=o(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),Ig=d(),k(Sn.$$.fragment),Dg=d(),Mt=a("div"),k(aa.$$.fragment),Sg=d(),Yl=a("p"),Gg=o("Moves the model to cpu from a model parallel state."),Ug=d(),k(Gn.$$.fragment),Yc=d(),Zt=a("h2"),Un=a("a"),Zl=a("span"),k(ra.$$.fragment),Wg=d(),Jl=a("span"),Rg=o("T5EncoderModel"),Zc=d(),Q=a("div"),k(ia.$$.fragment),Bg=d(),Xl=a("p"),Hg=o("The bare T5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),Vg=d(),la=a("p"),Kg=o("The T5 model was proposed in "),da=a("a"),Yg=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Zg=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Jg=d(),ca=a("p"),Xg=o("This model inherits from "),Sr=a("a"),Qg=o("PreTrainedModel"),eT=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tT=d(),pa=a("p"),nT=o("This model is also a PyTorch "),ha=a("a"),oT=o("torch.nn.Module"),sT=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),aT=d(),ht=a("div"),k(ua.$$.fragment),rT=d(),Jt=a("p"),iT=o("The "),Gr=a("a"),lT=o("T5EncoderModel"),dT=o(" forward method, overrides the "),Ql=a("code"),cT=o("__call__"),pT=o(" special method."),hT=d(),k(Wn.$$.fragment),uT=d(),k(Rn.$$.fragment),mT=d(),ut=a("div"),k(ma.$$.fragment),fT=d(),ed=a("p"),_T=o("This is an experimental feature and is a subject to change at a moment\u2019s notice."),gT=d(),td=a("p"),TT=o(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),bT=d(),k(Bn.$$.fragment),kT=d(),Ct=a("div"),k(fa.$$.fragment),vT=d(),nd=a("p"),yT=o("Moves the model to cpu from a model parallel state."),wT=d(),k(Hn.$$.fragment),Jc=d(),Xt=a("h2"),Vn=a("a"),od=a("span"),k(_a.$$.fragment),$T=d(),sd=a("span"),xT=o("TFT5Model"),Xc=d(),le=a("div"),k(ga.$$.fragment),zT=d(),ad=a("p"),jT=o("The bare T5 Model transformer outputting raw hidden-stateswithout any specific head on top."),ET=d(),Ta=a("p"),qT=o("The T5 model was proposed in "),ba=a("a"),FT=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),MT=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),CT=d(),ka=a("p"),PT=o("This model inherits from "),Ur=a("a"),NT=o("TFPreTrainedModel"),OT=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),LT=d(),va=a("p"),AT=o("This model is also a "),ya=a("a"),IT=o("tf.keras.Model"),DT=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ST=d(),k(Kn.$$.fragment),GT=d(),mt=a("div"),k(wa.$$.fragment),UT=d(),Qt=a("p"),WT=o("The "),Wr=a("a"),RT=o("TFT5Model"),BT=o(" forward method, overrides the "),rd=a("code"),HT=o("__call__"),VT=o(" special method."),KT=d(),k(Yn.$$.fragment),YT=d(),k(Zn.$$.fragment),Qc=d(),en=a("h2"),Jn=a("a"),id=a("span"),k($a.$$.fragment),ZT=d(),ld=a("span"),JT=o("TFT5ForConditionalGeneration"),ep=d(),de=a("div"),k(xa.$$.fragment),XT=d(),za=a("p"),QT=o("T5 Model with a "),dd=a("code"),eb=o("language modeling"),tb=o(" head on top."),nb=d(),ja=a("p"),ob=o("The T5 model was proposed in "),Ea=a("a"),sb=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),ab=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),rb=d(),qa=a("p"),ib=o("This model inherits from "),Rr=a("a"),lb=o("TFPreTrainedModel"),db=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cb=d(),Fa=a("p"),pb=o("This model is also a "),Ma=a("a"),hb=o("tf.keras.Model"),ub=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mb=d(),k(Xn.$$.fragment),fb=d(),ft=a("div"),k(Ca.$$.fragment),_b=d(),tn=a("p"),gb=o("The "),Br=a("a"),Tb=o("TFT5ForConditionalGeneration"),bb=o(" forward method, overrides the "),cd=a("code"),kb=o("__call__"),vb=o(" special method."),yb=d(),k(Qn.$$.fragment),wb=d(),k(eo.$$.fragment),tp=d(),nn=a("h2"),to=a("a"),pd=a("span"),k(Pa.$$.fragment),$b=d(),hd=a("span"),xb=o("TFT5EncoderModel"),np=d(),ce=a("div"),k(Na.$$.fragment),zb=d(),ud=a("p"),jb=o("The bare T5 Model transformer outputting encoder\u2019s raw hidden-stateswithout any specific head on top."),Eb=d(),Oa=a("p"),qb=o("The T5 model was proposed in "),La=a("a"),Fb=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Mb=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Cb=d(),Aa=a("p"),Pb=o("This model inherits from "),Hr=a("a"),Nb=o("TFPreTrainedModel"),Ob=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lb=d(),Ia=a("p"),Ab=o("This model is also a "),Da=a("a"),Ib=o("tf.keras.Model"),Db=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sb=d(),k(no.$$.fragment),Gb=d(),_t=a("div"),k(Sa.$$.fragment),Ub=d(),on=a("p"),Wb=o("The "),Vr=a("a"),Rb=o("TFT5EncoderModel"),Bb=o(" forward method, overrides the "),md=a("code"),Hb=o("__call__"),Vb=o(" special method."),Kb=d(),k(oo.$$.fragment),Yb=d(),k(so.$$.fragment),op=d(),sn=a("h2"),ao=a("a"),fd=a("span"),k(Ga.$$.fragment),Zb=d(),_d=a("span"),Jb=o("FlaxT5Model"),sp=d(),Je=a("div"),k(Ua.$$.fragment),Xb=d(),gt=a("div"),k(Wa.$$.fragment),Qb=d(),an=a("p"),ek=o("The "),gd=a("code"),tk=o("FlaxT5PreTrainedModel"),nk=o(" forward method, overrides the "),Td=a("code"),ok=o("__call__"),sk=o(" special method."),ak=d(),k(ro.$$.fragment),rk=d(),k(io.$$.fragment),ik=d(),lo=a("div"),k(Ra.$$.fragment),lk=d(),k(co.$$.fragment),dk=d(),po=a("div"),k(Ba.$$.fragment),ck=d(),k(ho.$$.fragment),ap=d(),rn=a("h2"),uo=a("a"),bd=a("span"),k(Ha.$$.fragment),pk=d(),kd=a("span"),hk=o("FlaxT5ForConditionalGeneration"),rp=d(),Xe=a("div"),k(Va.$$.fragment),uk=d(),Tt=a("div"),k(Ka.$$.fragment),mk=d(),ln=a("p"),fk=o("The "),vd=a("code"),_k=o("FlaxT5PreTrainedModel"),gk=o(" forward method, overrides the "),yd=a("code"),Tk=o("__call__"),bk=o(" special method."),kk=d(),k(mo.$$.fragment),vk=d(),k(fo.$$.fragment),yk=d(),_o=a("div"),k(Ya.$$.fragment),wk=d(),k(go.$$.fragment),$k=d(),To=a("div"),k(Za.$$.fragment),xk=d(),k(bo.$$.fragment),ip=d(),dn=a("h2"),ko=a("a"),wd=a("span"),k(Ja.$$.fragment),zk=d(),$d=a("span"),jk=o("FlaxT5EncoderModel"),lp=d(),cn=a("div"),k(Xa.$$.fragment),Ek=d(),Pt=a("div"),k(Qa.$$.fragment),qk=d(),pn=a("p"),Fk=o("The "),Kr=a("a"),Mk=o("FlaxT5EncoderModel"),Ck=o(" forward method, overrides the "),xd=a("code"),Pk=o("__call__"),Nk=o(" special method."),Ok=d(),k(vo.$$.fragment),this.h()},l(n){const f=C1('[data-svelte="svelte-1phssyn"]',document.head);p=r(f,"META",{name:!0,content:!0}),f.forEach(t),b=c(n),g=r(n,"H1",{class:!0});var er=i(g);u=r(er,"A",{id:!0,class:!0,href:!0});var zd=i(u);T=r(zd,"SPAN",{});var jd=i(T);v(l.$$.fragment,jd),jd.forEach(t),zd.forEach(t),_=c(er),E=r(er,"SPAN",{});var Ed=i(E);Ee=s(Ed,"T5"),Ed.forEach(t),er.forEach(t),se=c(n),q=r(n,"H2",{class:!0});var tr=i(q);ee=r(tr,"A",{id:!0,class:!0,href:!0});var qd=i(ee);G=r(qd,"SPAN",{});var Fd=i(G);v(ae.$$.fragment,Fd),Fd.forEach(t),qd.forEach(t),qe=c(tr),U=r(tr,"SPAN",{});var Md=i(U);Fe=s(Md,"Overview"),Md.forEach(t),tr.forEach(t),ve=c(n),W=r(n,"P",{});var nr=i(W);A=s(nr,"The T5 model was presented in "),re=r(nr,"A",{href:!0,rel:!0});var Cd=i(re);pe=s(Cd,"Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),Cd.forEach(t),C=s(nr,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu.`),nr.forEach(t),N=c(n),he=r(n,"P",{});var Pd=i(he);K=s(Pd,"The abstract from the paper is the following:"),Pd.forEach(t),ye=c(n),ue=r(n,"P",{});var Nd=i(ue);R=r(Nd,"EM",{});var Od=i(R);Me=s(Od,`Transfer learning, where a model is first pre-trained on a data-rich task before being fine-tuned on a downstream
task, has emerged as a powerful technique in natural language processing (NLP). The effectiveness of transfer learning
has given rise to a diversity of approaches, methodology, and practice. In this paper, we explore the landscape of
transfer learning techniques for NLP by introducing a unified framework that converts every language problem into a
text-to-text format. Our systematic study compares pretraining objectives, architectures, unlabeled datasets, transfer
approaches, and other factors on dozens of language understanding tasks. By combining the insights from our exploration
with scale and our new \u201CColossal Clean Crawled Corpus\u201D, we achieve state-of-the-art results on many benchmarks covering
summarization, question answering, text classification, and more. To facilitate future work on transfer learning for
NLP, we release our dataset, pre-trained models, and code.`),Od.forEach(t),Nd.forEach(t),we=c(n),P=r(n,"P",{});var Ld=i(P);Ce=s(Ld,"Tips:"),Ld.forEach(t),H=c(n),V=r(n,"UL",{});var hn=i(V);be=r(hn,"LI",{});var Ad=i(be);O=r(Ad,"P",{});var un=i(O);Pe=s(un,`T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which
each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box by prepending a
different prefix to the input corresponding to each task, e.g., for translation: `),ke=r(un,"EM",{});var Id=i(ke);I=s(Id,"translate English to German: \u2026"),Id.forEach(t),Ne=s(un,`,
for summarization: `),B=r(un,"EM",{});var Dd=i(B);Oe=s(Dd,"summarize: \u2026"),Dd.forEach(t),z=s(un,"."),un.forEach(t),Ad.forEach(t),F=c(hn),te=r(hn,"LI",{});var Sd=i(te);Ge=r(Sd,"P",{});var Gd=i(Ge);et=s(Gd,"T5 uses relative scalar embeddings. Encoder input padding can be done on the left and on the right."),Gd.forEach(t),Sd.forEach(t),D=c(hn),Ue=r(hn,"LI",{});var Ud=i(Ue);ne=r(Ud,"P",{});var wt=i(ne);tt=s(wt,"See the "),L=r(wt,"A",{href:!0});var Wd=i(L);Y=s(Wd,"training"),Wd.forEach(t),nt=s(wt,", "),Le=r(wt,"A",{href:!0});var Rd=i(Le);Z=s(Rd,"inference"),Rd.forEach(t),ot=s(wt," and "),Ae=r(wt,"A",{href:!0});var Bd=i(Ae);Ie=s(Bd,"scripts"),Bd.forEach(t),st=s(wt," sections below for all details regarding usage."),wt.forEach(t),Ud.forEach(t),hn.forEach(t),Xd=c(n),or=r(n,"P",{});var Hd=i(or);hh=s(Hd,"T5 comes in different sizes:"),Hd.forEach(t),Qd=c(n),We=r(n,"UL",{});var Qe=i(We);Ti=r(Qe,"LI",{});var Vd=i(Ti);bi=r(Vd,"P",{});var Kd=i(bi);Do=r(Kd,"A",{href:!0,rel:!0});var Gk=i(Do);uh=s(Gk,"t5-small"),Gk.forEach(t),Kd.forEach(t),Vd.forEach(t),mh=c(Qe),ki=r(Qe,"LI",{});var Uk=i(ki);vi=r(Uk,"P",{});var Wk=i(vi);So=r(Wk,"A",{href:!0,rel:!0});var Rk=i(So);fh=s(Rk,"t5-base"),Rk.forEach(t),Wk.forEach(t),Uk.forEach(t),_h=c(Qe),yi=r(Qe,"LI",{});var Bk=i(yi);wi=r(Bk,"P",{});var Hk=i(wi);Go=r(Hk,"A",{href:!0,rel:!0});var Vk=i(Go);gh=s(Vk,"t5-large"),Vk.forEach(t),Hk.forEach(t),Bk.forEach(t),Th=c(Qe),$i=r(Qe,"LI",{});var Kk=i($i);xi=r(Kk,"P",{});var Yk=i(xi);Uo=r(Yk,"A",{href:!0,rel:!0});var Zk=i(Uo);bh=s(Zk,"t5-3b"),Zk.forEach(t),Yk.forEach(t),Kk.forEach(t),kh=c(Qe),zi=r(Qe,"LI",{});var Jk=i(zi);sr=r(Jk,"P",{});var Lk=i(sr);Wo=r(Lk,"A",{href:!0,rel:!0});var Xk=i(Wo);vh=s(Xk,"t5-11b"),Xk.forEach(t),yh=s(Lk,"."),Lk.forEach(t),Jk.forEach(t),Qe.forEach(t),ec=c(n),ar=r(n,"P",{});var Qk=i(ar);wh=s(Qk,"Based on the original T5 model, Google has released some follow-up works:"),Qk.forEach(t),tc=c(n),$t=r(n,"UL",{});var Yr=i($t);ji=r(Yr,"LI",{});var ev=i(ji);mn=r(ev,"P",{});var Yd=i(mn);Ei=r(Yd,"STRONG",{});var tv=i(Ei);$h=s(tv,"T5v1.1"),tv.forEach(t),xh=s(Yd,`: T5v1.1 is an improved version of T5 with some architectural tweaks, and is pre-trained on C4 only without
mixing in the supervised tasks. Refer to the documentation of T5v1.1 which can be found `),rr=r(Yd,"A",{href:!0});var nv=i(rr);zh=s(nv,"here"),nv.forEach(t),jh=s(Yd,"."),Yd.forEach(t),ev.forEach(t),Eh=c(Yr),qi=r(Yr,"LI",{});var ov=i(qi);fn=r(ov,"P",{});var Zd=i(fn);Fi=r(Zd,"STRONG",{});var sv=i(Fi);qh=s(sv,"mT5"),sv.forEach(t),Fh=s(Zd,`: mT5 is a multilingual T5 model. It is pre-trained on the mC4 corpus, which includes 101 languages. Refer to
the documentation of mT5 which can be found `),ir=r(Zd,"A",{href:!0});var av=i(ir);Mh=s(av,"here"),av.forEach(t),Ch=s(Zd,"."),Zd.forEach(t),ov.forEach(t),Ph=c(Yr),Mi=r(Yr,"LI",{});var rv=i(Mi);_n=r(rv,"P",{});var Jd=i(_n);Ci=r(Jd,"STRONG",{});var iv=i(Ci);Nh=s(iv,"byT5"),iv.forEach(t),Oh=s(Jd,`: byT5 is a T5 model pre-trained on byte sequences rather than SentencePiece subword token sequences. Refer
to the documentation of byT5 which can be found `),lr=r(Jd,"A",{href:!0});var lv=i(lr);Lh=s(lv,"here"),lv.forEach(t),Ah=s(Jd,"."),Jd.forEach(t),rv.forEach(t),Yr.forEach(t),nc=c(n),gn=r(n,"P",{});var cp=i(gn);Ih=s(cp,"All checkpoints can be found on the "),Ro=r(cp,"A",{href:!0,rel:!0});var dv=i(Ro);Dh=s(dv,"hub"),dv.forEach(t),Sh=s(cp,"."),cp.forEach(t),oc=c(n),xt=r(n,"P",{});var Zr=i(xt);Gh=s(Zr,"This model was contributed by "),Bo=r(Zr,"A",{href:!0,rel:!0});var cv=i(Bo);Uh=s(cv,"thomwolf"),cv.forEach(t),Wh=s(Zr,". The original code can be found "),Ho=r(Zr,"A",{href:!0,rel:!0});var pv=i(Ho);Rh=s(pv,"here"),pv.forEach(t),Bh=s(Zr,"."),Zr.forEach(t),sc=c(n),dr=r(n,"A",{id:!0}),i(dr).forEach(t),ac=c(n),Lt=r(n,"H2",{class:!0});var pp=i(Lt);Tn=r(pp,"A",{id:!0,class:!0,href:!0});var hv=i(Tn);Pi=r(hv,"SPAN",{});var uv=i(Pi);v(Vo.$$.fragment,uv),uv.forEach(t),hv.forEach(t),Hh=c(pp),Ni=r(pp,"SPAN",{});var mv=i(Ni);Vh=s(mv,"Training"),mv.forEach(t),pp.forEach(t),rc=c(n),at=r(n,"P",{});var yo=i(at);Kh=s(yo,`T5 is an encoder-decoder model and converts all NLP problems into a text-to-text format. It is trained using teacher
forcing. This means that for training, we always need an input sequence and a corresponding target sequence. The input
sequence is fed to the model using `),Oi=r(yo,"CODE",{});var fv=i(Oi);Yh=s(fv,"input_ids"),fv.forEach(t),Zh=s(yo,`. The target sequence is shifted to the right, i.e., prepended by a
start-sequence token and fed to the decoder using the `),Li=r(yo,"CODE",{});var _v=i(Li);Jh=s(_v,"decoder_input_ids"),_v.forEach(t),Xh=s(yo,`. In teacher-forcing style, the target
sequence is then appended by the EOS token and corresponds to the `),Ai=r(yo,"CODE",{});var gv=i(Ai);Qh=s(gv,"labels"),gv.forEach(t),eu=s(yo,`. The PAD token is hereby used as the
start-sequence token. T5 can be trained / fine-tuned both in a supervised and unsupervised fashion.`),yo.forEach(t),ic=c(n),bn=r(n,"P",{});var hp=i(bn);tu=s(hp,"One can use "),cr=r(hp,"A",{href:!0});var Tv=i(cr);nu=s(Tv,"T5ForConditionalGeneration"),Tv.forEach(t),ou=s(hp,` (or the Tensorflow/Flax variant), which includes the
language modeling head on top of the decoder.`),hp.forEach(t),lc=c(n),pr=r(n,"UL",{});var bv=i(pr);Ii=r(bv,"LI",{});var kv=i(Ii);su=s(kv,"Unsupervised denoising training"),kv.forEach(t),bv.forEach(t),dc=c(n),me=r(n,"P",{});var Be=i(me);au=s(Be,"In this setup, spans of the input sequence are masked by so-called sentinel tokens ("),Di=r(Be,"EM",{});var vv=i(Di);ru=s(vv,"a.k.a"),vv.forEach(t),iu=s(Be,` unique mask tokens) and
the output sequence is formed as a concatenation of the same sentinel tokens and the `),Si=r(Be,"EM",{});var yv=i(Si);lu=s(yv,"real"),yv.forEach(t),du=s(Be,` masked tokens. Each
sentinel token represents a unique mask token for this sentence and should start with `),Gi=r(Be,"CODE",{});var wv=i(Gi);cu=s(wv,"<extra_id_0>"),wv.forEach(t),pu=s(Be,`,
`),Ui=r(Be,"CODE",{});var $v=i(Ui);hu=s($v,"<extra_id_1>"),$v.forEach(t),uu=s(Be,", \u2026 up to "),Wi=r(Be,"CODE",{});var xv=i(Wi);mu=s(xv,"<extra_id_99>"),xv.forEach(t),fu=s(Be,`. As a default, 100 sentinel tokens are available in
`),hr=r(Be,"A",{href:!0});var zv=i(hr);_u=s(zv,"T5Tokenizer"),zv.forEach(t),gu=s(Be,"."),Be.forEach(t),cc=c(n),ur=r(n,"P",{});var jv=i(ur);Tu=s(jv,`For instance, the sentence \u201CThe cute dog walks in the park\u201D with the masks put on \u201Ccute dog\u201D and \u201Cthe\u201D should be
processed as follows:`),jv.forEach(t),pc=c(n),v(Ko.$$.fragment,n),hc=c(n),kn=r(n,"P",{});var up=i(kn);bu=s(up,"If you\u2019re interested in pre-training T5 on a new corpus, check out the "),Yo=r(up,"A",{href:!0,rel:!0});var Ev=i(Yo);ku=s(Ev,"run_t5_mlm_flax.py"),Ev.forEach(t),vu=s(up,` script in the Examples
directory.`),up.forEach(t),uc=c(n),mr=r(n,"UL",{});var qv=i(mr);Ri=r(qv,"LI",{});var Fv=i(Ri);yu=s(Fv,"Supervised training"),Fv.forEach(t),qv.forEach(t),mc=c(n),fr=r(n,"P",{});var Mv=i(fr);wu=s(Mv,`In this setup, the input sequence and output sequence are a standard sequence-to-sequence input-output mapping.
Suppose that we want to fine-tune the model for translation for example, and we have a training example: the input
sequence \u201CThe house is wonderful.\u201D and output sequence \u201CDas Haus ist wunderbar.\u201D, then they should be prepared for
the model as follows:`),Mv.forEach(t),fc=c(n),v(Zo.$$.fragment,n),_c=c(n),oe=r(n,"P",{});var $e=i(oe);$u=s($e,"As you can see, only 2 inputs are required for the model in order to compute a loss: "),Bi=r($e,"CODE",{});var Cv=i(Bi);xu=s(Cv,"input_ids"),Cv.forEach(t),zu=s($e,` (which are the
`),Hi=r($e,"CODE",{});var Pv=i(Hi);ju=s(Pv,"input_ids"),Pv.forEach(t),Eu=s($e," of the encoded input sequence) and "),Vi=r($e,"CODE",{});var Nv=i(Vi);qu=s(Nv,"labels"),Nv.forEach(t),Fu=s($e," (which are the "),Ki=r($e,"CODE",{});var Ov=i(Ki);Mu=s(Ov,"input_ids"),Ov.forEach(t),Cu=s($e,` of the encoded
target sequence). The model will automatically create the `),Yi=r($e,"CODE",{});var Lv=i(Yi);Pu=s(Lv,"decoder_input_ids"),Lv.forEach(t),Nu=s($e," based on the "),Zi=r($e,"CODE",{});var Av=i(Zi);Ou=s(Av,"labels"),Av.forEach(t),Lu=s($e,`, by
shifting them one position to the right and prepending the `),Ji=r($e,"CODE",{});var Iv=i(Ji);Au=s(Iv,"config.decoder_start_token_id"),Iv.forEach(t),Iu=s($e,`, which for T5 is
equal to 0 (i.e. the id of the pad token). Also note the task prefix: we prepend the input sequence with \u2018translate
English to German: \u2019 before encoding it. This will help in improving the performance, as this task prefix was used
during T5\u2019s pre-training.`),$e.forEach(t),gc=c(n),zt=r(n,"P",{});var Jr=i(zt);Du=s(Jr,`However, the example above only shows a single training example. In practice, one trains deep learning models in
batches. This entails that we must pad/truncate examples to the same length. For encoder-decoder models, one
typically defines a `),Xi=r(Jr,"CODE",{});var Dv=i(Xi);Su=s(Dv,"max_source_length"),Dv.forEach(t),Gu=s(Jr," and "),Qi=r(Jr,"CODE",{});var Sv=i(Qi);Uu=s(Sv,"max_target_length"),Sv.forEach(t),Wu=s(Jr,`, which determine the maximum length of the
input and output sequences respectively (otherwise they are truncated). These should be carefully set depending on
the task.`),Jr.forEach(t),Tc=c(n),fe=r(n,"P",{});var He=i(fe);Ru=s(He,"In addition, we must make sure that padding token id\u2019s of the "),el=r(He,"CODE",{});var Gv=i(el);Bu=s(Gv,"labels"),Gv.forEach(t),Hu=s(He,` are not taken into account by the loss
function. In PyTorch and Tensorflow, this can be done by replacing them with -100, which is the `),tl=r(He,"CODE",{});var Uv=i(tl);Vu=s(Uv,"ignore_index"),Uv.forEach(t),Ku=s(He,`
of the `),nl=r(He,"CODE",{});var Wv=i(nl);Yu=s(Wv,"CrossEntropyLoss"),Wv.forEach(t),Zu=s(He,". In Flax, one can use the "),ol=r(He,"CODE",{});var Rv=i(ol);Ju=s(Rv,"decoder_attention_mask"),Rv.forEach(t),Xu=s(He,` to ignore padded tokens from
the loss (see the `),Jo=r(He,"A",{href:!0,rel:!0});var Bv=i(Jo);Qu=s(Bv,"Flax summarization script"),Bv.forEach(t),em=s(He,` for details). We also pass
`),sl=r(He,"CODE",{});var Hv=i(sl);tm=s(Hv,"attention_mask"),Hv.forEach(t),nm=s(He,` as additional input to the model, which makes sure that padding tokens of the inputs are
ignored. The code example below illustrates all of this.`),He.forEach(t),bc=c(n),v(Xo.$$.fragment,n),kc=c(n),_r=r(n,"P",{});var Vv=i(_r);om=s(Vv,"Additional training tips:"),Vv.forEach(t),vc=c(n),gr=r(n,"UL",{});var Kv=i(gr);Qo=r(Kv,"LI",{});var mp=i(Qo);sm=s(mp,"T5 models need a slightly higher learning rate than the default one set in the "),al=r(mp,"CODE",{});var Yv=i(al);am=s(Yv,"Trainer"),Yv.forEach(t),rm=s(mp,` when using the AdamW
optimizer. Typically, 1e-4 and 3e-4 work well for most problems (classification, summarization, translation, question
answering, question generation). Note that T5 was pre-trained using the AdaFactor optimizer.`),mp.forEach(t),Kv.forEach(t),yc=c(n),jt=r(n,"P",{});var Xr=i(jt);im=s(Xr,"According to "),es=r(Xr,"A",{href:!0,rel:!0});var Zv=i(es);lm=s(Zv,"this forum post"),Zv.forEach(t),dm=s(Xr,`, task prefixes matter when
(1) doing multi-task training (2) your task is similar or related to one of the supervised tasks used in T5\u2019s
pre-training mixture (see Appendix D of the `),ts=r(Xr,"A",{href:!0,rel:!0});var Jv=i(ts);cm=s(Jv,"paper"),Jv.forEach(t),pm=s(Xr,` for the task prefixes
used).`),Xr.forEach(t),wc=c(n),vn=r(n,"P",{});var fp=i(vn);hm=s(fp,`If training on TPU, it is recommended to pad all examples of the dataset to the same length or make use of
`),rl=r(fp,"EM",{});var Xv=i(rl);um=s(Xv,"pad_to_multiple_of"),Xv.forEach(t),mm=s(fp,` to have a small number of predefined bucket sizes to fit all examples in. Dynamically padding
batches to the longest example is not recommended on TPU as it triggers a recompilation for every batch shape that is
encountered during training thus significantly slowing down the training. only padding up to the longest example in a
batch) leads to very slow training on TPU.`),fp.forEach(t),$c=c(n),Tr=r(n,"A",{id:!0}),i(Tr).forEach(t),xc=c(n),At=r(n,"H2",{class:!0});var _p=i(At);yn=r(_p,"A",{id:!0,class:!0,href:!0});var Qv=i(yn);il=r(Qv,"SPAN",{});var ey=i(il);v(ns.$$.fragment,ey),ey.forEach(t),Qv.forEach(t),fm=c(_p),ll=r(_p,"SPAN",{});var ty=i(ll);_m=s(ty,"Inference"),ty.forEach(t),_p.forEach(t),zc=c(n),rt=r(n,"P",{});var wo=i(rt);gm=s(wo,"At inference time, it is recommended to use "),br=r(wo,"A",{href:!0});var ny=i(br);Tm=s(ny,"generate()"),ny.forEach(t),bm=s(wo,`. This
method takes care of encoding the input and feeding the encoded hidden states via cross-attention layers to the decoder
and auto-regressively generates the decoder output. Check out `),os=r(wo,"A",{href:!0,rel:!0});var oy=i(os);km=s(oy,"this blog post"),oy.forEach(t),vm=s(wo,` to know all the details about generating text with Transformers.
There\u2019s also `),ss=r(wo,"A",{href:!0,rel:!0});var sy=i(ss);ym=s(sy,"this blog post"),sy.forEach(t),wm=s(wo,` which explains how
generation works in general in encoder-decoder models.`),wo.forEach(t),jc=c(n),v(as.$$.fragment,n),Ec=c(n),Re=r(n,"P",{});var Nt=i(Re);$m=s(Nt,"Note that T5 uses the "),dl=r(Nt,"CODE",{});var ay=i(dl);xm=s(ay,"pad_token_id"),ay.forEach(t),zm=s(Nt," as the "),cl=r(Nt,"CODE",{});var ry=i(cl);jm=s(ry,"decoder_start_token_id"),ry.forEach(t),Em=s(Nt,`, so when doing generation without using
`),kr=r(Nt,"A",{href:!0});var iy=i(kr);qm=s(iy,"generate()"),iy.forEach(t),Fm=s(Nt,", make sure you start it with the "),pl=r(Nt,"CODE",{});var ly=i(pl);Mm=s(ly,"pad_token_id"),ly.forEach(t),Cm=s(Nt,"."),Nt.forEach(t),qc=c(n),vr=r(n,"P",{});var dy=i(vr);Pm=s(dy,"The example above only shows a single example. You can also do batched inference, like so:"),dy.forEach(t),Fc=c(n),v(rs.$$.fragment,n),Mc=c(n),yr=r(n,"P",{});var cy=i(yr);Nm=s(cy,`Because T5 has been trained with the span-mask denoising objective,
it can be used to predict the sentinel (masked-out) tokens during inference.
The predicted tokens will then be placed between the sentinel tokens.`),cy.forEach(t),Cc=c(n),v(is.$$.fragment,n),Pc=c(n),wr=r(n,"A",{id:!0}),i(wr).forEach(t),Nc=c(n),It=r(n,"H2",{class:!0});var gp=i(It);wn=r(gp,"A",{id:!0,class:!0,href:!0});var py=i(wn);hl=r(py,"SPAN",{});var hy=i(hl);v(ls.$$.fragment,hy),hy.forEach(t),py.forEach(t),Om=c(gp),ul=r(gp,"SPAN",{});var uy=i(ul);Lm=s(uy,"Performance"),uy.forEach(t),gp.forEach(t),Oc=c(n),it=r(n,"P",{});var $o=i(it);Am=s($o,"If you\u2019d like a faster training and inference performance, install "),ds=r($o,"A",{href:!0,rel:!0});var my=i(ds);Im=s(my,"apex"),my.forEach(t),Dm=s($o," and then the model will automatically use "),ml=r($o,"CODE",{});var fy=i(ml);Sm=s(fy,"apex.normalization.FusedRMSNorm"),fy.forEach(t),Gm=s($o," instead of "),fl=r($o,"CODE",{});var _y=i(fl);Um=s(_y,"T5LayerNorm"),_y.forEach(t),Wm=s($o,". The former uses an optimized fused kernel which is several times faster than the latter."),$o.forEach(t),Lc=c(n),Dt=r(n,"H2",{class:!0});var Tp=i(Dt);$n=r(Tp,"A",{id:!0,class:!0,href:!0});var gy=i($n);_l=r(gy,"SPAN",{});var Ty=i(_l);v(cs.$$.fragment,Ty),Ty.forEach(t),gy.forEach(t),Rm=c(Tp),gl=r(Tp,"SPAN",{});var by=i(gl);Bm=s(by,"Example scripts"),by.forEach(t),Tp.forEach(t),Ac=c(n),$r=r(n,"P",{});var ky=i($r);Hm=s(ky,"T5 is supported by several example scripts, both for pre-training and fine-tuning."),ky.forEach(t),Ic=c(n),xn=r(n,"UL",{});var bp=i(xn);Tl=r(bp,"LI",{});var vy=i(Tl);St=r(vy,"P",{});var Qr=i(St);Vm=s(Qr,"pre-training: the "),ps=r(Qr,"A",{href:!0,rel:!0});var yy=i(ps);Km=s(yy,"run_t5_mlm_flax.py"),yy.forEach(t),Ym=s(Qr,`
script allows you to further pre-train T5 or pre-train T5 from scratch on your own data. The `),hs=r(Qr,"A",{href:!0,rel:!0});var wy=i(hs);Zm=s(wy,"t5_tokenizer_model.py"),wy.forEach(t),Jm=s(Qr,`
script allows you to further train a T5 tokenizer or train a T5 Tokenizer from scratch on your own data. Note that
Flax (a neural network library on top of JAX) is particularly useful to train on TPU hardware.`),Qr.forEach(t),vy.forEach(t),Xm=c(bp),bl=r(bp,"LI",{});var $y=i(bl);De=r($y,"P",{});var bt=i(De);Qm=s(bt,"fine-tuning: T5 is supported by the official summarization scripts ("),us=r(bt,"A",{href:!0,rel:!0});var xy=i(us);ef=s(xy,"PyTorch"),xy.forEach(t),tf=s(bt,", "),ms=r(bt,"A",{href:!0,rel:!0});var zy=i(ms);nf=s(zy,"Tensorflow"),zy.forEach(t),of=s(bt,", and "),fs=r(bt,"A",{href:!0,rel:!0});var jy=i(fs);sf=s(jy,"Flax"),jy.forEach(t),af=s(bt,`) and translation scripts
(`),_s=r(bt,"A",{href:!0,rel:!0});var Ey=i(_s);rf=s(Ey,"PyTorch"),Ey.forEach(t),lf=s(bt," and "),gs=r(bt,"A",{href:!0,rel:!0});var qy=i(gs);df=s(qy,"Tensorflow"),qy.forEach(t),cf=s(bt,`). These scripts allow
you to easily fine-tune T5 on custom data for summarization/translation.`),bt.forEach(t),$y.forEach(t),bp.forEach(t),Dc=c(n),Gt=r(n,"H2",{class:!0});var kp=i(Gt);zn=r(kp,"A",{id:!0,class:!0,href:!0});var Fy=i(zn);kl=r(Fy,"SPAN",{});var My=i(kl);v(Ts.$$.fragment,My),My.forEach(t),Fy.forEach(t),pf=c(kp),vl=r(kp,"SPAN",{});var Cy=i(vl);hf=s(Cy,"T5Config"),Cy.forEach(t),kp.forEach(t),Sc=c(n),vt=r(n,"DIV",{class:!0});var ei=i(vt);v(bs.$$.fragment,ei),uf=c(ei),yt=r(ei,"P",{});var xo=i(yt);mf=s(xo,"This is the configuration class to store the configuration of a "),xr=r(xo,"A",{href:!0});var Py=i(xr);ff=s(Py,"T5Model"),Py.forEach(t),_f=s(xo," or a "),zr=r(xo,"A",{href:!0});var Ny=i(zr);gf=s(Ny,"TFT5Model"),Ny.forEach(t),Tf=s(xo,`. It is used to
instantiate a T5 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the T5
`),ks=r(xo,"A",{href:!0,rel:!0});var Oy=i(ks);bf=s(Oy,"t5-small"),Oy.forEach(t),kf=s(xo," architecture."),xo.forEach(t),vf=c(ei),Ut=r(ei,"P",{});var ti=i(Ut);yf=s(ti,"Configuration objects inherit from "),jr=r(ti,"A",{href:!0});var Ly=i(jr);wf=s(Ly,"PretrainedConfig"),Ly.forEach(t),$f=s(ti,` and can be used to control the model outputs. Read the
documentation from `),Er=r(ti,"A",{href:!0});var Ay=i(Er);xf=s(Ay,"PretrainedConfig"),Ay.forEach(t),zf=s(ti," for more information."),ti.forEach(t),ei.forEach(t),Gc=c(n),Wt=r(n,"H2",{class:!0});var vp=i(Wt);jn=r(vp,"A",{id:!0,class:!0,href:!0});var Iy=i(jn);yl=r(Iy,"SPAN",{});var Dy=i(yl);v(vs.$$.fragment,Dy),Dy.forEach(t),Iy.forEach(t),jf=c(vp),wl=r(vp,"SPAN",{});var Sy=i(wl);Ef=s(Sy,"T5Tokenizer"),Sy.forEach(t),vp.forEach(t),Uc=c(n),ie=r(n,"DIV",{class:!0});var Ve=i(ie);v(ys.$$.fragment,Ve),qf=c(Ve),ws=r(Ve,"P",{});var yp=i(ws);Ff=s(yp,"Construct a T5 tokenizer. Based on "),$s=r(yp,"A",{href:!0,rel:!0});var Gy=i($s);Mf=s(Gy,"SentencePiece"),Gy.forEach(t),Cf=s(yp,"."),yp.forEach(t),Pf=c(Ve),xs=r(Ve,"P",{});var wp=i(xs);Nf=s(wp,"This tokenizer inherits from "),qr=r(wp,"A",{href:!0});var Uy=i(qr);Of=s(Uy,"PreTrainedTokenizer"),Uy.forEach(t),Lf=s(wp,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),wp.forEach(t),Af=c(Ve),Et=r(Ve,"DIV",{class:!0});var ni=i(Et);v(zs.$$.fragment,ni),If=c(ni),$l=r(ni,"P",{});var Wy=i($l);Df=s(Wy,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),Wy.forEach(t),Sf=c(ni),js=r(ni,"UL",{});var $p=i(js);Fr=r($p,"LI",{});var Ak=i(Fr);Gf=s(Ak,"single sequence: "),xl=r(Ak,"CODE",{});var Ry=i(xl);Uf=s(Ry,"X </s>"),Ry.forEach(t),Ak.forEach(t),Wf=c($p),Mr=r($p,"LI",{});var Ik=i(Mr);Rf=s(Ik,"pair of sequences: "),zl=r(Ik,"CODE",{});var By=i(zl);Bf=s(By,"A </s> B </s>"),By.forEach(t),Ik.forEach(t),$p.forEach(t),ni.forEach(t),Hf=c(Ve),En=r(Ve,"DIV",{class:!0});var xp=i(En);v(Es.$$.fragment,xp),Vf=c(xp),qs=r(xp,"P",{});var zp=i(qs);Kf=s(zp,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),jl=r(zp,"CODE",{});var Hy=i(jl);Yf=s(Hy,"prepare_for_model"),Hy.forEach(t),Zf=s(zp," method."),zp.forEach(t),xp.forEach(t),Jf=c(Ve),qn=r(Ve,"DIV",{class:!0});var jp=i(qn);v(Fs.$$.fragment,jp),Xf=c(jp),El=r(jp,"P",{});var Vy=i(El);Qf=s(Vy,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),Vy.forEach(t),jp.forEach(t),e_=c(Ve),Cr=r(Ve,"DIV",{class:!0});var Ky=i(Cr);v(Ms.$$.fragment,Ky),Ky.forEach(t),Ve.forEach(t),Wc=c(n),Rt=r(n,"H2",{class:!0});var Ep=i(Rt);Fn=r(Ep,"A",{id:!0,class:!0,href:!0});var Yy=i(Fn);ql=r(Yy,"SPAN",{});var Zy=i(ql);v(Cs.$$.fragment,Zy),Zy.forEach(t),Yy.forEach(t),t_=c(Ep),Fl=r(Ep,"SPAN",{});var Jy=i(Fl);n_=s(Jy,"T5TokenizerFast"),Jy.forEach(t),Ep.forEach(t),Rc=c(n),Se=r(n,"DIV",{class:!0});var Ot=i(Se);v(Ps.$$.fragment,Ot),o_=c(Ot),Bt=r(Ot,"P",{});var oi=i(Bt);s_=s(oi,"Construct a \u201Cfast\u201D T5 tokenizer (backed by HuggingFace\u2019s "),Ml=r(oi,"EM",{});var Xy=i(Ml);a_=s(Xy,"tokenizers"),Xy.forEach(t),r_=s(oi,` library). Based on
`),Ns=r(oi,"A",{href:!0,rel:!0});var Qy=i(Ns);i_=s(Qy,"Unigram"),Qy.forEach(t),l_=s(oi,"."),oi.forEach(t),d_=c(Ot),Os=r(Ot,"P",{});var qp=i(Os);c_=s(qp,"This tokenizer inherits from "),Pr=r(qp,"A",{href:!0});var e5=i(Pr);p_=s(e5,"PreTrainedTokenizerFast"),e5.forEach(t),h_=s(qp,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),qp.forEach(t),u_=c(Ot),qt=r(Ot,"DIV",{class:!0});var si=i(qt);v(Ls.$$.fragment,si),m_=c(si),Cl=r(si,"P",{});var t5=i(Cl);f_=s(t5,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),t5.forEach(t),__=c(si),As=r(si,"UL",{});var Fp=i(As);Nr=r(Fp,"LI",{});var Dk=i(Nr);g_=s(Dk,"single sequence: "),Pl=r(Dk,"CODE",{});var n5=i(Pl);T_=s(n5,"X </s>"),n5.forEach(t),Dk.forEach(t),b_=c(Fp),Or=r(Fp,"LI",{});var Sk=i(Or);k_=s(Sk,"pair of sequences: "),Nl=r(Sk,"CODE",{});var o5=i(Nl);v_=s(o5,"A </s> B </s>"),o5.forEach(t),Sk.forEach(t),Fp.forEach(t),si.forEach(t),y_=c(Ot),Mn=r(Ot,"DIV",{class:!0});var Mp=i(Mn);v(Is.$$.fragment,Mp),w_=c(Mp),Ol=r(Mp,"P",{});var s5=i(Ol);$_=s(s5,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),s5.forEach(t),Mp.forEach(t),Ot.forEach(t),Bc=c(n),Ht=r(n,"H2",{class:!0});var Cp=i(Ht);Cn=r(Cp,"A",{id:!0,class:!0,href:!0});var a5=i(Cn);Ll=r(a5,"SPAN",{});var r5=i(Ll);v(Ds.$$.fragment,r5),r5.forEach(t),a5.forEach(t),x_=c(Cp),Al=r(Cp,"SPAN",{});var i5=i(Al);z_=s(i5,"T5Model"),i5.forEach(t),Cp.forEach(t),Hc=c(n),J=r(n,"DIV",{class:!0});var xe=i(J);v(Ss.$$.fragment,xe),j_=c(xe),Il=r(xe,"P",{});var l5=i(Il);E_=s(l5,"The bare T5 Model transformer outputting raw hidden-states without any specific head on top."),l5.forEach(t),q_=c(xe),Gs=r(xe,"P",{});var Pp=i(Gs);F_=s(Pp,"The T5 model was proposed in "),Us=r(Pp,"A",{href:!0,rel:!0});var d5=i(Us);M_=s(d5,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),d5.forEach(t),C_=s(Pp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Pp.forEach(t),P_=c(xe),Ws=r(xe,"P",{});var Np=i(Ws);N_=s(Np,"This model inherits from "),Lr=r(Np,"A",{href:!0});var c5=i(Lr);O_=s(c5,"PreTrainedModel"),c5.forEach(t),L_=s(Np,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Np.forEach(t),A_=c(xe),Rs=r(xe,"P",{});var Op=i(Rs);I_=s(Op,"This model is also a PyTorch "),Bs=r(Op,"A",{href:!0,rel:!0});var p5=i(Bs);D_=s(p5,"torch.nn.Module"),p5.forEach(t),S_=s(Op,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Op.forEach(t),G_=c(xe),lt=r(xe,"DIV",{class:!0});var zo=i(lt);v(Hs.$$.fragment,zo),U_=c(zo),Vt=r(zo,"P",{});var ai=i(Vt);W_=s(ai,"The "),Ar=r(ai,"A",{href:!0});var h5=i(Ar);R_=s(h5,"T5Model"),h5.forEach(t),B_=s(ai," forward method, overrides the "),Dl=r(ai,"CODE",{});var u5=i(Dl);H_=s(u5,"__call__"),u5.forEach(t),V_=s(ai," special method."),ai.forEach(t),K_=c(zo),v(Pn.$$.fragment,zo),Y_=c(zo),v(Nn.$$.fragment,zo),zo.forEach(t),Z_=c(xe),dt=r(xe,"DIV",{class:!0});var jo=i(dt);v(Vs.$$.fragment,jo),J_=c(jo),Sl=r(jo,"P",{});var m5=i(Sl);X_=s(m5,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),m5.forEach(t),Q_=c(jo),Gl=r(jo,"P",{});var f5=i(Gl);eg=s(f5,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),f5.forEach(t),tg=c(jo),v(On.$$.fragment,jo),jo.forEach(t),ng=c(xe),Ft=r(xe,"DIV",{class:!0});var ri=i(Ft);v(Ks.$$.fragment,ri),og=c(ri),Ul=r(ri,"P",{});var _5=i(Ul);sg=s(_5,"Moves the model to cpu from a model parallel state."),_5.forEach(t),ag=c(ri),v(Ln.$$.fragment,ri),ri.forEach(t),xe.forEach(t),Vc=c(n),Kt=r(n,"H2",{class:!0});var Lp=i(Kt);An=r(Lp,"A",{id:!0,class:!0,href:!0});var g5=i(An);Wl=r(g5,"SPAN",{});var T5=i(Wl);v(Ys.$$.fragment,T5),T5.forEach(t),g5.forEach(t),rg=c(Lp),Rl=r(Lp,"SPAN",{});var b5=i(Rl);ig=s(b5,"T5ForConditionalGeneration"),b5.forEach(t),Lp.forEach(t),Kc=c(n),X=r(n,"DIV",{class:!0});var ze=i(X);v(Zs.$$.fragment,ze),lg=c(ze),Js=r(ze,"P",{});var Ap=i(Js);dg=s(Ap,"T5 Model with a "),Bl=r(Ap,"CODE",{});var k5=i(Bl);cg=s(k5,"language modeling"),k5.forEach(t),pg=s(Ap," head on top."),Ap.forEach(t),hg=c(ze),Xs=r(ze,"P",{});var Ip=i(Xs);ug=s(Ip,"The T5 model was proposed in "),Qs=r(Ip,"A",{href:!0,rel:!0});var v5=i(Qs);mg=s(v5,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),v5.forEach(t),fg=s(Ip,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Ip.forEach(t),_g=c(ze),ea=r(ze,"P",{});var Dp=i(ea);gg=s(Dp,"This model inherits from "),Ir=r(Dp,"A",{href:!0});var y5=i(Ir);Tg=s(y5,"PreTrainedModel"),y5.forEach(t),bg=s(Dp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dp.forEach(t),kg=c(ze),ta=r(ze,"P",{});var Sp=i(ta);vg=s(Sp,"This model is also a PyTorch "),na=r(Sp,"A",{href:!0,rel:!0});var w5=i(na);yg=s(w5,"torch.nn.Module"),w5.forEach(t),wg=s(Sp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sp.forEach(t),$g=c(ze),ct=r(ze,"DIV",{class:!0});var Eo=i(ct);v(oa.$$.fragment,Eo),xg=c(Eo),Yt=r(Eo,"P",{});var ii=i(Yt);zg=s(ii,"The "),Dr=r(ii,"A",{href:!0});var $5=i(Dr);jg=s($5,"T5ForConditionalGeneration"),$5.forEach(t),Eg=s(ii," forward method, overrides the "),Hl=r(ii,"CODE",{});var x5=i(Hl);qg=s(x5,"__call__"),x5.forEach(t),Fg=s(ii," special method."),ii.forEach(t),Mg=c(Eo),v(In.$$.fragment,Eo),Cg=c(Eo),v(Dn.$$.fragment,Eo),Eo.forEach(t),Pg=c(ze),pt=r(ze,"DIV",{class:!0});var qo=i(pt);v(sa.$$.fragment,qo),Ng=c(qo),Vl=r(qo,"P",{});var z5=i(Vl);Og=s(z5,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),z5.forEach(t),Lg=c(qo),Kl=r(qo,"P",{});var j5=i(Kl);Ag=s(j5,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),j5.forEach(t),Ig=c(qo),v(Sn.$$.fragment,qo),qo.forEach(t),Dg=c(ze),Mt=r(ze,"DIV",{class:!0});var li=i(Mt);v(aa.$$.fragment,li),Sg=c(li),Yl=r(li,"P",{});var E5=i(Yl);Gg=s(E5,"Moves the model to cpu from a model parallel state."),E5.forEach(t),Ug=c(li),v(Gn.$$.fragment,li),li.forEach(t),ze.forEach(t),Yc=c(n),Zt=r(n,"H2",{class:!0});var Gp=i(Zt);Un=r(Gp,"A",{id:!0,class:!0,href:!0});var q5=i(Un);Zl=r(q5,"SPAN",{});var F5=i(Zl);v(ra.$$.fragment,F5),F5.forEach(t),q5.forEach(t),Wg=c(Gp),Jl=r(Gp,"SPAN",{});var M5=i(Jl);Rg=s(M5,"T5EncoderModel"),M5.forEach(t),Gp.forEach(t),Zc=c(n),Q=r(n,"DIV",{class:!0});var je=i(Q);v(ia.$$.fragment,je),Bg=c(je),Xl=r(je,"P",{});var C5=i(Xl);Hg=s(C5,"The bare T5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),C5.forEach(t),Vg=c(je),la=r(je,"P",{});var Up=i(la);Kg=s(Up,"The T5 model was proposed in "),da=r(Up,"A",{href:!0,rel:!0});var P5=i(da);Yg=s(P5,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),P5.forEach(t),Zg=s(Up,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Up.forEach(t),Jg=c(je),ca=r(je,"P",{});var Wp=i(ca);Xg=s(Wp,"This model inherits from "),Sr=r(Wp,"A",{href:!0});var N5=i(Sr);Qg=s(N5,"PreTrainedModel"),N5.forEach(t),eT=s(Wp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wp.forEach(t),tT=c(je),pa=r(je,"P",{});var Rp=i(pa);nT=s(Rp,"This model is also a PyTorch "),ha=r(Rp,"A",{href:!0,rel:!0});var O5=i(ha);oT=s(O5,"torch.nn.Module"),O5.forEach(t),sT=s(Rp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rp.forEach(t),aT=c(je),ht=r(je,"DIV",{class:!0});var Fo=i(ht);v(ua.$$.fragment,Fo),rT=c(Fo),Jt=r(Fo,"P",{});var di=i(Jt);iT=s(di,"The "),Gr=r(di,"A",{href:!0});var L5=i(Gr);lT=s(L5,"T5EncoderModel"),L5.forEach(t),dT=s(di," forward method, overrides the "),Ql=r(di,"CODE",{});var A5=i(Ql);cT=s(A5,"__call__"),A5.forEach(t),pT=s(di," special method."),di.forEach(t),hT=c(Fo),v(Wn.$$.fragment,Fo),uT=c(Fo),v(Rn.$$.fragment,Fo),Fo.forEach(t),mT=c(je),ut=r(je,"DIV",{class:!0});var Mo=i(ut);v(ma.$$.fragment,Mo),fT=c(Mo),ed=r(Mo,"P",{});var I5=i(ed);_T=s(I5,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),I5.forEach(t),gT=c(Mo),td=r(Mo,"P",{});var D5=i(td);TT=s(D5,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),D5.forEach(t),bT=c(Mo),v(Bn.$$.fragment,Mo),Mo.forEach(t),kT=c(je),Ct=r(je,"DIV",{class:!0});var ci=i(Ct);v(fa.$$.fragment,ci),vT=c(ci),nd=r(ci,"P",{});var S5=i(nd);yT=s(S5,"Moves the model to cpu from a model parallel state."),S5.forEach(t),wT=c(ci),v(Hn.$$.fragment,ci),ci.forEach(t),je.forEach(t),Jc=c(n),Xt=r(n,"H2",{class:!0});var Bp=i(Xt);Vn=r(Bp,"A",{id:!0,class:!0,href:!0});var G5=i(Vn);od=r(G5,"SPAN",{});var U5=i(od);v(_a.$$.fragment,U5),U5.forEach(t),G5.forEach(t),$T=c(Bp),sd=r(Bp,"SPAN",{});var W5=i(sd);xT=s(W5,"TFT5Model"),W5.forEach(t),Bp.forEach(t),Xc=c(n),le=r(n,"DIV",{class:!0});var Ke=i(le);v(ga.$$.fragment,Ke),zT=c(Ke),ad=r(Ke,"P",{});var R5=i(ad);jT=s(R5,"The bare T5 Model transformer outputting raw hidden-stateswithout any specific head on top."),R5.forEach(t),ET=c(Ke),Ta=r(Ke,"P",{});var Hp=i(Ta);qT=s(Hp,"The T5 model was proposed in "),ba=r(Hp,"A",{href:!0,rel:!0});var B5=i(ba);FT=s(B5,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),B5.forEach(t),MT=s(Hp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Hp.forEach(t),CT=c(Ke),ka=r(Ke,"P",{});var Vp=i(ka);PT=s(Vp,"This model inherits from "),Ur=r(Vp,"A",{href:!0});var H5=i(Ur);NT=s(H5,"TFPreTrainedModel"),H5.forEach(t),OT=s(Vp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vp.forEach(t),LT=c(Ke),va=r(Ke,"P",{});var Kp=i(va);AT=s(Kp,"This model is also a "),ya=r(Kp,"A",{href:!0,rel:!0});var V5=i(ya);IT=s(V5,"tf.keras.Model"),V5.forEach(t),DT=s(Kp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kp.forEach(t),ST=c(Ke),v(Kn.$$.fragment,Ke),GT=c(Ke),mt=r(Ke,"DIV",{class:!0});var Co=i(mt);v(wa.$$.fragment,Co),UT=c(Co),Qt=r(Co,"P",{});var pi=i(Qt);WT=s(pi,"The "),Wr=r(pi,"A",{href:!0});var K5=i(Wr);RT=s(K5,"TFT5Model"),K5.forEach(t),BT=s(pi," forward method, overrides the "),rd=r(pi,"CODE",{});var Y5=i(rd);HT=s(Y5,"__call__"),Y5.forEach(t),VT=s(pi," special method."),pi.forEach(t),KT=c(Co),v(Yn.$$.fragment,Co),YT=c(Co),v(Zn.$$.fragment,Co),Co.forEach(t),Ke.forEach(t),Qc=c(n),en=r(n,"H2",{class:!0});var Yp=i(en);Jn=r(Yp,"A",{id:!0,class:!0,href:!0});var Z5=i(Jn);id=r(Z5,"SPAN",{});var J5=i(id);v($a.$$.fragment,J5),J5.forEach(t),Z5.forEach(t),ZT=c(Yp),ld=r(Yp,"SPAN",{});var X5=i(ld);JT=s(X5,"TFT5ForConditionalGeneration"),X5.forEach(t),Yp.forEach(t),ep=c(n),de=r(n,"DIV",{class:!0});var Ye=i(de);v(xa.$$.fragment,Ye),XT=c(Ye),za=r(Ye,"P",{});var Zp=i(za);QT=s(Zp,"T5 Model with a "),dd=r(Zp,"CODE",{});var Q5=i(dd);eb=s(Q5,"language modeling"),Q5.forEach(t),tb=s(Zp," head on top."),Zp.forEach(t),nb=c(Ye),ja=r(Ye,"P",{});var Jp=i(ja);ob=s(Jp,"The T5 model was proposed in "),Ea=r(Jp,"A",{href:!0,rel:!0});var e1=i(Ea);sb=s(e1,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),e1.forEach(t),ab=s(Jp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Jp.forEach(t),rb=c(Ye),qa=r(Ye,"P",{});var Xp=i(qa);ib=s(Xp,"This model inherits from "),Rr=r(Xp,"A",{href:!0});var t1=i(Rr);lb=s(t1,"TFPreTrainedModel"),t1.forEach(t),db=s(Xp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xp.forEach(t),cb=c(Ye),Fa=r(Ye,"P",{});var Qp=i(Fa);pb=s(Qp,"This model is also a "),Ma=r(Qp,"A",{href:!0,rel:!0});var n1=i(Ma);hb=s(n1,"tf.keras.Model"),n1.forEach(t),ub=s(Qp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qp.forEach(t),mb=c(Ye),v(Xn.$$.fragment,Ye),fb=c(Ye),ft=r(Ye,"DIV",{class:!0});var Po=i(ft);v(Ca.$$.fragment,Po),_b=c(Po),tn=r(Po,"P",{});var hi=i(tn);gb=s(hi,"The "),Br=r(hi,"A",{href:!0});var o1=i(Br);Tb=s(o1,"TFT5ForConditionalGeneration"),o1.forEach(t),bb=s(hi," forward method, overrides the "),cd=r(hi,"CODE",{});var s1=i(cd);kb=s(s1,"__call__"),s1.forEach(t),vb=s(hi," special method."),hi.forEach(t),yb=c(Po),v(Qn.$$.fragment,Po),wb=c(Po),v(eo.$$.fragment,Po),Po.forEach(t),Ye.forEach(t),tp=c(n),nn=r(n,"H2",{class:!0});var eh=i(nn);to=r(eh,"A",{id:!0,class:!0,href:!0});var a1=i(to);pd=r(a1,"SPAN",{});var r1=i(pd);v(Pa.$$.fragment,r1),r1.forEach(t),a1.forEach(t),$b=c(eh),hd=r(eh,"SPAN",{});var i1=i(hd);xb=s(i1,"TFT5EncoderModel"),i1.forEach(t),eh.forEach(t),np=c(n),ce=r(n,"DIV",{class:!0});var Ze=i(ce);v(Na.$$.fragment,Ze),zb=c(Ze),ud=r(Ze,"P",{});var l1=i(ud);jb=s(l1,"The bare T5 Model transformer outputting encoder\u2019s raw hidden-stateswithout any specific head on top."),l1.forEach(t),Eb=c(Ze),Oa=r(Ze,"P",{});var th=i(Oa);qb=s(th,"The T5 model was proposed in "),La=r(th,"A",{href:!0,rel:!0});var d1=i(La);Fb=s(d1,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),d1.forEach(t),Mb=s(th,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),th.forEach(t),Cb=c(Ze),Aa=r(Ze,"P",{});var nh=i(Aa);Pb=s(nh,"This model inherits from "),Hr=r(nh,"A",{href:!0});var c1=i(Hr);Nb=s(c1,"TFPreTrainedModel"),c1.forEach(t),Ob=s(nh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nh.forEach(t),Lb=c(Ze),Ia=r(Ze,"P",{});var oh=i(Ia);Ab=s(oh,"This model is also a "),Da=r(oh,"A",{href:!0,rel:!0});var p1=i(Da);Ib=s(p1,"tf.keras.Model"),p1.forEach(t),Db=s(oh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),oh.forEach(t),Sb=c(Ze),v(no.$$.fragment,Ze),Gb=c(Ze),_t=r(Ze,"DIV",{class:!0});var No=i(_t);v(Sa.$$.fragment,No),Ub=c(No),on=r(No,"P",{});var ui=i(on);Wb=s(ui,"The "),Vr=r(ui,"A",{href:!0});var h1=i(Vr);Rb=s(h1,"TFT5EncoderModel"),h1.forEach(t),Bb=s(ui," forward method, overrides the "),md=r(ui,"CODE",{});var u1=i(md);Hb=s(u1,"__call__"),u1.forEach(t),Vb=s(ui," special method."),ui.forEach(t),Kb=c(No),v(oo.$$.fragment,No),Yb=c(No),v(so.$$.fragment,No),No.forEach(t),Ze.forEach(t),op=c(n),sn=r(n,"H2",{class:!0});var sh=i(sn);ao=r(sh,"A",{id:!0,class:!0,href:!0});var m1=i(ao);fd=r(m1,"SPAN",{});var f1=i(fd);v(Ga.$$.fragment,f1),f1.forEach(t),m1.forEach(t),Zb=c(sh),_d=r(sh,"SPAN",{});var _1=i(_d);Jb=s(_1,"FlaxT5Model"),_1.forEach(t),sh.forEach(t),sp=c(n),Je=r(n,"DIV",{class:!0});var Oo=i(Je);v(Ua.$$.fragment,Oo),Xb=c(Oo),gt=r(Oo,"DIV",{class:!0});var Lo=i(gt);v(Wa.$$.fragment,Lo),Qb=c(Lo),an=r(Lo,"P",{});var mi=i(an);ek=s(mi,"The "),gd=r(mi,"CODE",{});var g1=i(gd);tk=s(g1,"FlaxT5PreTrainedModel"),g1.forEach(t),nk=s(mi," forward method, overrides the "),Td=r(mi,"CODE",{});var T1=i(Td);ok=s(T1,"__call__"),T1.forEach(t),sk=s(mi," special method."),mi.forEach(t),ak=c(Lo),v(ro.$$.fragment,Lo),rk=c(Lo),v(io.$$.fragment,Lo),Lo.forEach(t),ik=c(Oo),lo=r(Oo,"DIV",{class:!0});var ah=i(lo);v(Ra.$$.fragment,ah),lk=c(ah),v(co.$$.fragment,ah),ah.forEach(t),dk=c(Oo),po=r(Oo,"DIV",{class:!0});var rh=i(po);v(Ba.$$.fragment,rh),ck=c(rh),v(ho.$$.fragment,rh),rh.forEach(t),Oo.forEach(t),ap=c(n),rn=r(n,"H2",{class:!0});var ih=i(rn);uo=r(ih,"A",{id:!0,class:!0,href:!0});var b1=i(uo);bd=r(b1,"SPAN",{});var k1=i(bd);v(Ha.$$.fragment,k1),k1.forEach(t),b1.forEach(t),pk=c(ih),kd=r(ih,"SPAN",{});var v1=i(kd);hk=s(v1,"FlaxT5ForConditionalGeneration"),v1.forEach(t),ih.forEach(t),rp=c(n),Xe=r(n,"DIV",{class:!0});var Ao=i(Xe);v(Va.$$.fragment,Ao),uk=c(Ao),Tt=r(Ao,"DIV",{class:!0});var Io=i(Tt);v(Ka.$$.fragment,Io),mk=c(Io),ln=r(Io,"P",{});var fi=i(ln);fk=s(fi,"The "),vd=r(fi,"CODE",{});var y1=i(vd);_k=s(y1,"FlaxT5PreTrainedModel"),y1.forEach(t),gk=s(fi," forward method, overrides the "),yd=r(fi,"CODE",{});var w1=i(yd);Tk=s(w1,"__call__"),w1.forEach(t),bk=s(fi," special method."),fi.forEach(t),kk=c(Io),v(mo.$$.fragment,Io),vk=c(Io),v(fo.$$.fragment,Io),Io.forEach(t),yk=c(Ao),_o=r(Ao,"DIV",{class:!0});var lh=i(_o);v(Ya.$$.fragment,lh),wk=c(lh),v(go.$$.fragment,lh),lh.forEach(t),$k=c(Ao),To=r(Ao,"DIV",{class:!0});var dh=i(To);v(Za.$$.fragment,dh),xk=c(dh),v(bo.$$.fragment,dh),dh.forEach(t),Ao.forEach(t),ip=c(n),dn=r(n,"H2",{class:!0});var ch=i(dn);ko=r(ch,"A",{id:!0,class:!0,href:!0});var $1=i(ko);wd=r($1,"SPAN",{});var x1=i(wd);v(Ja.$$.fragment,x1),x1.forEach(t),$1.forEach(t),zk=c(ch),$d=r(ch,"SPAN",{});var z1=i($d);jk=s(z1,"FlaxT5EncoderModel"),z1.forEach(t),ch.forEach(t),lp=c(n),cn=r(n,"DIV",{class:!0});var ph=i(cn);v(Xa.$$.fragment,ph),Ek=c(ph),Pt=r(ph,"DIV",{class:!0});var _i=i(Pt);v(Qa.$$.fragment,_i),qk=c(_i),pn=r(_i,"P",{});var gi=i(pn);Fk=s(gi,"The "),Kr=r(gi,"A",{href:!0});var j1=i(Kr);Mk=s(j1,"FlaxT5EncoderModel"),j1.forEach(t),Ck=s(gi," forward method, overrides the "),xd=r(gi,"CODE",{});var E1=i(xd);Pk=s(E1,"__call__"),E1.forEach(t),Nk=s(gi," special method."),gi.forEach(t),Ok=c(_i),v(vo.$$.fragment,_i),_i.forEach(t),ph.forEach(t),this.h()},h(){h(p,"name","hf:doc:metadata"),h(p,"content",JSON.stringify(pw)),h(u,"id","t5"),h(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(u,"href","#t5"),h(g,"class","relative group"),h(ee,"id","overview"),h(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ee,"href","#overview"),h(q,"class","relative group"),h(re,"href","https://arxiv.org/pdf/1910.10683.pdf"),h(re,"rel","nofollow"),h(L,"href","#training"),h(Le,"href","#inference"),h(Ae,"href","#scripts"),h(Do,"href","https://huggingface.co/t5-small"),h(Do,"rel","nofollow"),h(So,"href","https://huggingface.co/t5-base"),h(So,"rel","nofollow"),h(Go,"href","https://huggingface.co/t5-large"),h(Go,"rel","nofollow"),h(Uo,"href","https://huggingface.co/t5-3b"),h(Uo,"rel","nofollow"),h(Wo,"href","https://huggingface.co/t5-11b"),h(Wo,"rel","nofollow"),h(rr,"href","t5v1.1"),h(ir,"href","mt5"),h(lr,"href","byt5"),h(Ro,"href","https://huggingface.co/models?search=t5"),h(Ro,"rel","nofollow"),h(Bo,"href","https://huggingface.co/thomwolf"),h(Bo,"rel","nofollow"),h(Ho,"href","https://github.com/google-research/text-to-text-transfer-transformer"),h(Ho,"rel","nofollow"),h(dr,"id","training"),h(Tn,"id","training"),h(Tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Tn,"href","#training"),h(Lt,"class","relative group"),h(cr,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5ForConditionalGeneration"),h(hr,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5Tokenizer"),h(Yo,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/language-modeling"),h(Yo,"rel","nofollow"),h(Jo,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/summarization"),h(Jo,"rel","nofollow"),h(es,"href","https://discuss.huggingface.co/t/t5-finetuning-tips/684"),h(es,"rel","nofollow"),h(ts,"href","https://arxiv.org/pdf/1910.10683.pdf"),h(ts,"rel","nofollow"),h(Tr,"id","inference"),h(yn,"id","inference"),h(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(yn,"href","#inference"),h(At,"class","relative group"),h(br,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),h(os,"href","https://huggingface.co/blog/how-to-generate"),h(os,"rel","nofollow"),h(ss,"href","https://huggingface.co/blog/encoder-decoder#encoder-decoder"),h(ss,"rel","nofollow"),h(kr,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),h(wr,"id","scripts"),h(wn,"id","performance"),h(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(wn,"href","#performance"),h(It,"class","relative group"),h(ds,"href","https://github.com/NVIDIA/apex#quick-start"),h(ds,"rel","nofollow"),h($n,"id","example-scripts"),h($n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h($n,"href","#example-scripts"),h(Dt,"class","relative group"),h(ps,"href","https://github.com/huggingface/transformers/blob/main/examples/flax/language-modeling/run_t5_mlm_flax.py"),h(ps,"rel","nofollow"),h(hs,"href","https://github.com/huggingface/transformers/blob/main/examples/flax/language-modeling/t5_tokenizer_model.py"),h(hs,"rel","nofollow"),h(us,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/summarization"),h(us,"rel","nofollow"),h(ms,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/summarization"),h(ms,"rel","nofollow"),h(fs,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/summarization"),h(fs,"rel","nofollow"),h(_s,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/translation"),h(_s,"rel","nofollow"),h(gs,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/translation"),h(gs,"rel","nofollow"),h(zn,"id","transformers.T5Config"),h(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(zn,"href","#transformers.T5Config"),h(Gt,"class","relative group"),h(xr,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5Model"),h(zr,"href","/docs/transformers/main/en/model_doc/t5#transformers.TFT5Model"),h(ks,"href","https://huggingface.co/t5-small"),h(ks,"rel","nofollow"),h(jr,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(Er,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(jn,"id","transformers.T5Tokenizer"),h(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(jn,"href","#transformers.T5Tokenizer"),h(Wt,"class","relative group"),h($s,"href","https://github.com/google/sentencepiece"),h($s,"rel","nofollow"),h(qr,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(En,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(qn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Cr,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Fn,"id","transformers.T5TokenizerFast"),h(Fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Fn,"href","#transformers.T5TokenizerFast"),h(Rt,"class","relative group"),h(Ns,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),h(Ns,"rel","nofollow"),h(Pr,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),h(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Mn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Cn,"id","transformers.T5Model"),h(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Cn,"href","#transformers.T5Model"),h(Ht,"class","relative group"),h(Us,"href","https://arxiv.org/abs/1910.10683"),h(Us,"rel","nofollow"),h(Lr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Bs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Bs,"rel","nofollow"),h(Ar,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5Model"),h(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(An,"id","transformers.T5ForConditionalGeneration"),h(An,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(An,"href","#transformers.T5ForConditionalGeneration"),h(Kt,"class","relative group"),h(Qs,"href","https://arxiv.org/abs/1910.10683"),h(Qs,"rel","nofollow"),h(Ir,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(na,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(na,"rel","nofollow"),h(Dr,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5ForConditionalGeneration"),h(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Un,"id","transformers.T5EncoderModel"),h(Un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Un,"href","#transformers.T5EncoderModel"),h(Zt,"class","relative group"),h(da,"href","https://arxiv.org/abs/1910.10683"),h(da,"rel","nofollow"),h(Sr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(ha,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(ha,"rel","nofollow"),h(Gr,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5EncoderModel"),h(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Vn,"id","transformers.TFT5Model"),h(Vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Vn,"href","#transformers.TFT5Model"),h(Xt,"class","relative group"),h(ba,"href","https://arxiv.org/abs/1910.10683"),h(ba,"rel","nofollow"),h(Ur,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(ya,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(ya,"rel","nofollow"),h(Wr,"href","/docs/transformers/main/en/model_doc/t5#transformers.TFT5Model"),h(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Jn,"id","transformers.TFT5ForConditionalGeneration"),h(Jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Jn,"href","#transformers.TFT5ForConditionalGeneration"),h(en,"class","relative group"),h(Ea,"href","https://arxiv.org/abs/1910.10683"),h(Ea,"rel","nofollow"),h(Rr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Ma,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Ma,"rel","nofollow"),h(Br,"href","/docs/transformers/main/en/model_doc/t5#transformers.TFT5ForConditionalGeneration"),h(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(to,"id","transformers.TFT5EncoderModel"),h(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(to,"href","#transformers.TFT5EncoderModel"),h(nn,"class","relative group"),h(La,"href","https://arxiv.org/abs/1910.10683"),h(La,"rel","nofollow"),h(Hr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Da,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Da,"rel","nofollow"),h(Vr,"href","/docs/transformers/main/en/model_doc/t5#transformers.TFT5EncoderModel"),h(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ao,"id","transformers.FlaxT5Model"),h(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ao,"href","#transformers.FlaxT5Model"),h(sn,"class","relative group"),h(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(uo,"id","transformers.FlaxT5ForConditionalGeneration"),h(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(uo,"href","#transformers.FlaxT5ForConditionalGeneration"),h(rn,"class","relative group"),h(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(_o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(To,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ko,"id","transformers.FlaxT5EncoderModel"),h(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ko,"href","#transformers.FlaxT5EncoderModel"),h(dn,"class","relative group"),h(Kr,"href","/docs/transformers/main/en/model_doc/t5#transformers.FlaxT5EncoderModel"),h(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(cn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(n,f){e(document.head,p),m(n,b,f),m(n,g,f),e(g,u),e(u,T),y(l,T,null),e(g,_),e(g,E),e(E,Ee),m(n,se,f),m(n,q,f),e(q,ee),e(ee,G),y(ae,G,null),e(q,qe),e(q,U),e(U,Fe),m(n,ve,f),m(n,W,f),e(W,A),e(W,re),e(re,pe),e(W,C),m(n,N,f),m(n,he,f),e(he,K),m(n,ye,f),m(n,ue,f),e(ue,R),e(R,Me),m(n,we,f),m(n,P,f),e(P,Ce),m(n,H,f),m(n,V,f),e(V,be),e(be,O),e(O,Pe),e(O,ke),e(ke,I),e(O,Ne),e(O,B),e(B,Oe),e(O,z),e(V,F),e(V,te),e(te,Ge),e(Ge,et),e(V,D),e(V,Ue),e(Ue,ne),e(ne,tt),e(ne,L),e(L,Y),e(ne,nt),e(ne,Le),e(Le,Z),e(ne,ot),e(ne,Ae),e(Ae,Ie),e(ne,st),m(n,Xd,f),m(n,or,f),e(or,hh),m(n,Qd,f),m(n,We,f),e(We,Ti),e(Ti,bi),e(bi,Do),e(Do,uh),e(We,mh),e(We,ki),e(ki,vi),e(vi,So),e(So,fh),e(We,_h),e(We,yi),e(yi,wi),e(wi,Go),e(Go,gh),e(We,Th),e(We,$i),e($i,xi),e(xi,Uo),e(Uo,bh),e(We,kh),e(We,zi),e(zi,sr),e(sr,Wo),e(Wo,vh),e(sr,yh),m(n,ec,f),m(n,ar,f),e(ar,wh),m(n,tc,f),m(n,$t,f),e($t,ji),e(ji,mn),e(mn,Ei),e(Ei,$h),e(mn,xh),e(mn,rr),e(rr,zh),e(mn,jh),e($t,Eh),e($t,qi),e(qi,fn),e(fn,Fi),e(Fi,qh),e(fn,Fh),e(fn,ir),e(ir,Mh),e(fn,Ch),e($t,Ph),e($t,Mi),e(Mi,_n),e(_n,Ci),e(Ci,Nh),e(_n,Oh),e(_n,lr),e(lr,Lh),e(_n,Ah),m(n,nc,f),m(n,gn,f),e(gn,Ih),e(gn,Ro),e(Ro,Dh),e(gn,Sh),m(n,oc,f),m(n,xt,f),e(xt,Gh),e(xt,Bo),e(Bo,Uh),e(xt,Wh),e(xt,Ho),e(Ho,Rh),e(xt,Bh),m(n,sc,f),m(n,dr,f),m(n,ac,f),m(n,Lt,f),e(Lt,Tn),e(Tn,Pi),y(Vo,Pi,null),e(Lt,Hh),e(Lt,Ni),e(Ni,Vh),m(n,rc,f),m(n,at,f),e(at,Kh),e(at,Oi),e(Oi,Yh),e(at,Zh),e(at,Li),e(Li,Jh),e(at,Xh),e(at,Ai),e(Ai,Qh),e(at,eu),m(n,ic,f),m(n,bn,f),e(bn,tu),e(bn,cr),e(cr,nu),e(bn,ou),m(n,lc,f),m(n,pr,f),e(pr,Ii),e(Ii,su),m(n,dc,f),m(n,me,f),e(me,au),e(me,Di),e(Di,ru),e(me,iu),e(me,Si),e(Si,lu),e(me,du),e(me,Gi),e(Gi,cu),e(me,pu),e(me,Ui),e(Ui,hu),e(me,uu),e(me,Wi),e(Wi,mu),e(me,fu),e(me,hr),e(hr,_u),e(me,gu),m(n,cc,f),m(n,ur,f),e(ur,Tu),m(n,pc,f),y(Ko,n,f),m(n,hc,f),m(n,kn,f),e(kn,bu),e(kn,Yo),e(Yo,ku),e(kn,vu),m(n,uc,f),m(n,mr,f),e(mr,Ri),e(Ri,yu),m(n,mc,f),m(n,fr,f),e(fr,wu),m(n,fc,f),y(Zo,n,f),m(n,_c,f),m(n,oe,f),e(oe,$u),e(oe,Bi),e(Bi,xu),e(oe,zu),e(oe,Hi),e(Hi,ju),e(oe,Eu),e(oe,Vi),e(Vi,qu),e(oe,Fu),e(oe,Ki),e(Ki,Mu),e(oe,Cu),e(oe,Yi),e(Yi,Pu),e(oe,Nu),e(oe,Zi),e(Zi,Ou),e(oe,Lu),e(oe,Ji),e(Ji,Au),e(oe,Iu),m(n,gc,f),m(n,zt,f),e(zt,Du),e(zt,Xi),e(Xi,Su),e(zt,Gu),e(zt,Qi),e(Qi,Uu),e(zt,Wu),m(n,Tc,f),m(n,fe,f),e(fe,Ru),e(fe,el),e(el,Bu),e(fe,Hu),e(fe,tl),e(tl,Vu),e(fe,Ku),e(fe,nl),e(nl,Yu),e(fe,Zu),e(fe,ol),e(ol,Ju),e(fe,Xu),e(fe,Jo),e(Jo,Qu),e(fe,em),e(fe,sl),e(sl,tm),e(fe,nm),m(n,bc,f),y(Xo,n,f),m(n,kc,f),m(n,_r,f),e(_r,om),m(n,vc,f),m(n,gr,f),e(gr,Qo),e(Qo,sm),e(Qo,al),e(al,am),e(Qo,rm),m(n,yc,f),m(n,jt,f),e(jt,im),e(jt,es),e(es,lm),e(jt,dm),e(jt,ts),e(ts,cm),e(jt,pm),m(n,wc,f),m(n,vn,f),e(vn,hm),e(vn,rl),e(rl,um),e(vn,mm),m(n,$c,f),m(n,Tr,f),m(n,xc,f),m(n,At,f),e(At,yn),e(yn,il),y(ns,il,null),e(At,fm),e(At,ll),e(ll,_m),m(n,zc,f),m(n,rt,f),e(rt,gm),e(rt,br),e(br,Tm),e(rt,bm),e(rt,os),e(os,km),e(rt,vm),e(rt,ss),e(ss,ym),e(rt,wm),m(n,jc,f),y(as,n,f),m(n,Ec,f),m(n,Re,f),e(Re,$m),e(Re,dl),e(dl,xm),e(Re,zm),e(Re,cl),e(cl,jm),e(Re,Em),e(Re,kr),e(kr,qm),e(Re,Fm),e(Re,pl),e(pl,Mm),e(Re,Cm),m(n,qc,f),m(n,vr,f),e(vr,Pm),m(n,Fc,f),y(rs,n,f),m(n,Mc,f),m(n,yr,f),e(yr,Nm),m(n,Cc,f),y(is,n,f),m(n,Pc,f),m(n,wr,f),m(n,Nc,f),m(n,It,f),e(It,wn),e(wn,hl),y(ls,hl,null),e(It,Om),e(It,ul),e(ul,Lm),m(n,Oc,f),m(n,it,f),e(it,Am),e(it,ds),e(ds,Im),e(it,Dm),e(it,ml),e(ml,Sm),e(it,Gm),e(it,fl),e(fl,Um),e(it,Wm),m(n,Lc,f),m(n,Dt,f),e(Dt,$n),e($n,_l),y(cs,_l,null),e(Dt,Rm),e(Dt,gl),e(gl,Bm),m(n,Ac,f),m(n,$r,f),e($r,Hm),m(n,Ic,f),m(n,xn,f),e(xn,Tl),e(Tl,St),e(St,Vm),e(St,ps),e(ps,Km),e(St,Ym),e(St,hs),e(hs,Zm),e(St,Jm),e(xn,Xm),e(xn,bl),e(bl,De),e(De,Qm),e(De,us),e(us,ef),e(De,tf),e(De,ms),e(ms,nf),e(De,of),e(De,fs),e(fs,sf),e(De,af),e(De,_s),e(_s,rf),e(De,lf),e(De,gs),e(gs,df),e(De,cf),m(n,Dc,f),m(n,Gt,f),e(Gt,zn),e(zn,kl),y(Ts,kl,null),e(Gt,pf),e(Gt,vl),e(vl,hf),m(n,Sc,f),m(n,vt,f),y(bs,vt,null),e(vt,uf),e(vt,yt),e(yt,mf),e(yt,xr),e(xr,ff),e(yt,_f),e(yt,zr),e(zr,gf),e(yt,Tf),e(yt,ks),e(ks,bf),e(yt,kf),e(vt,vf),e(vt,Ut),e(Ut,yf),e(Ut,jr),e(jr,wf),e(Ut,$f),e(Ut,Er),e(Er,xf),e(Ut,zf),m(n,Gc,f),m(n,Wt,f),e(Wt,jn),e(jn,yl),y(vs,yl,null),e(Wt,jf),e(Wt,wl),e(wl,Ef),m(n,Uc,f),m(n,ie,f),y(ys,ie,null),e(ie,qf),e(ie,ws),e(ws,Ff),e(ws,$s),e($s,Mf),e(ws,Cf),e(ie,Pf),e(ie,xs),e(xs,Nf),e(xs,qr),e(qr,Of),e(xs,Lf),e(ie,Af),e(ie,Et),y(zs,Et,null),e(Et,If),e(Et,$l),e($l,Df),e(Et,Sf),e(Et,js),e(js,Fr),e(Fr,Gf),e(Fr,xl),e(xl,Uf),e(js,Wf),e(js,Mr),e(Mr,Rf),e(Mr,zl),e(zl,Bf),e(ie,Hf),e(ie,En),y(Es,En,null),e(En,Vf),e(En,qs),e(qs,Kf),e(qs,jl),e(jl,Yf),e(qs,Zf),e(ie,Jf),e(ie,qn),y(Fs,qn,null),e(qn,Xf),e(qn,El),e(El,Qf),e(ie,e_),e(ie,Cr),y(Ms,Cr,null),m(n,Wc,f),m(n,Rt,f),e(Rt,Fn),e(Fn,ql),y(Cs,ql,null),e(Rt,t_),e(Rt,Fl),e(Fl,n_),m(n,Rc,f),m(n,Se,f),y(Ps,Se,null),e(Se,o_),e(Se,Bt),e(Bt,s_),e(Bt,Ml),e(Ml,a_),e(Bt,r_),e(Bt,Ns),e(Ns,i_),e(Bt,l_),e(Se,d_),e(Se,Os),e(Os,c_),e(Os,Pr),e(Pr,p_),e(Os,h_),e(Se,u_),e(Se,qt),y(Ls,qt,null),e(qt,m_),e(qt,Cl),e(Cl,f_),e(qt,__),e(qt,As),e(As,Nr),e(Nr,g_),e(Nr,Pl),e(Pl,T_),e(As,b_),e(As,Or),e(Or,k_),e(Or,Nl),e(Nl,v_),e(Se,y_),e(Se,Mn),y(Is,Mn,null),e(Mn,w_),e(Mn,Ol),e(Ol,$_),m(n,Bc,f),m(n,Ht,f),e(Ht,Cn),e(Cn,Ll),y(Ds,Ll,null),e(Ht,x_),e(Ht,Al),e(Al,z_),m(n,Hc,f),m(n,J,f),y(Ss,J,null),e(J,j_),e(J,Il),e(Il,E_),e(J,q_),e(J,Gs),e(Gs,F_),e(Gs,Us),e(Us,M_),e(Gs,C_),e(J,P_),e(J,Ws),e(Ws,N_),e(Ws,Lr),e(Lr,O_),e(Ws,L_),e(J,A_),e(J,Rs),e(Rs,I_),e(Rs,Bs),e(Bs,D_),e(Rs,S_),e(J,G_),e(J,lt),y(Hs,lt,null),e(lt,U_),e(lt,Vt),e(Vt,W_),e(Vt,Ar),e(Ar,R_),e(Vt,B_),e(Vt,Dl),e(Dl,H_),e(Vt,V_),e(lt,K_),y(Pn,lt,null),e(lt,Y_),y(Nn,lt,null),e(J,Z_),e(J,dt),y(Vs,dt,null),e(dt,J_),e(dt,Sl),e(Sl,X_),e(dt,Q_),e(dt,Gl),e(Gl,eg),e(dt,tg),y(On,dt,null),e(J,ng),e(J,Ft),y(Ks,Ft,null),e(Ft,og),e(Ft,Ul),e(Ul,sg),e(Ft,ag),y(Ln,Ft,null),m(n,Vc,f),m(n,Kt,f),e(Kt,An),e(An,Wl),y(Ys,Wl,null),e(Kt,rg),e(Kt,Rl),e(Rl,ig),m(n,Kc,f),m(n,X,f),y(Zs,X,null),e(X,lg),e(X,Js),e(Js,dg),e(Js,Bl),e(Bl,cg),e(Js,pg),e(X,hg),e(X,Xs),e(Xs,ug),e(Xs,Qs),e(Qs,mg),e(Xs,fg),e(X,_g),e(X,ea),e(ea,gg),e(ea,Ir),e(Ir,Tg),e(ea,bg),e(X,kg),e(X,ta),e(ta,vg),e(ta,na),e(na,yg),e(ta,wg),e(X,$g),e(X,ct),y(oa,ct,null),e(ct,xg),e(ct,Yt),e(Yt,zg),e(Yt,Dr),e(Dr,jg),e(Yt,Eg),e(Yt,Hl),e(Hl,qg),e(Yt,Fg),e(ct,Mg),y(In,ct,null),e(ct,Cg),y(Dn,ct,null),e(X,Pg),e(X,pt),y(sa,pt,null),e(pt,Ng),e(pt,Vl),e(Vl,Og),e(pt,Lg),e(pt,Kl),e(Kl,Ag),e(pt,Ig),y(Sn,pt,null),e(X,Dg),e(X,Mt),y(aa,Mt,null),e(Mt,Sg),e(Mt,Yl),e(Yl,Gg),e(Mt,Ug),y(Gn,Mt,null),m(n,Yc,f),m(n,Zt,f),e(Zt,Un),e(Un,Zl),y(ra,Zl,null),e(Zt,Wg),e(Zt,Jl),e(Jl,Rg),m(n,Zc,f),m(n,Q,f),y(ia,Q,null),e(Q,Bg),e(Q,Xl),e(Xl,Hg),e(Q,Vg),e(Q,la),e(la,Kg),e(la,da),e(da,Yg),e(la,Zg),e(Q,Jg),e(Q,ca),e(ca,Xg),e(ca,Sr),e(Sr,Qg),e(ca,eT),e(Q,tT),e(Q,pa),e(pa,nT),e(pa,ha),e(ha,oT),e(pa,sT),e(Q,aT),e(Q,ht),y(ua,ht,null),e(ht,rT),e(ht,Jt),e(Jt,iT),e(Jt,Gr),e(Gr,lT),e(Jt,dT),e(Jt,Ql),e(Ql,cT),e(Jt,pT),e(ht,hT),y(Wn,ht,null),e(ht,uT),y(Rn,ht,null),e(Q,mT),e(Q,ut),y(ma,ut,null),e(ut,fT),e(ut,ed),e(ed,_T),e(ut,gT),e(ut,td),e(td,TT),e(ut,bT),y(Bn,ut,null),e(Q,kT),e(Q,Ct),y(fa,Ct,null),e(Ct,vT),e(Ct,nd),e(nd,yT),e(Ct,wT),y(Hn,Ct,null),m(n,Jc,f),m(n,Xt,f),e(Xt,Vn),e(Vn,od),y(_a,od,null),e(Xt,$T),e(Xt,sd),e(sd,xT),m(n,Xc,f),m(n,le,f),y(ga,le,null),e(le,zT),e(le,ad),e(ad,jT),e(le,ET),e(le,Ta),e(Ta,qT),e(Ta,ba),e(ba,FT),e(Ta,MT),e(le,CT),e(le,ka),e(ka,PT),e(ka,Ur),e(Ur,NT),e(ka,OT),e(le,LT),e(le,va),e(va,AT),e(va,ya),e(ya,IT),e(va,DT),e(le,ST),y(Kn,le,null),e(le,GT),e(le,mt),y(wa,mt,null),e(mt,UT),e(mt,Qt),e(Qt,WT),e(Qt,Wr),e(Wr,RT),e(Qt,BT),e(Qt,rd),e(rd,HT),e(Qt,VT),e(mt,KT),y(Yn,mt,null),e(mt,YT),y(Zn,mt,null),m(n,Qc,f),m(n,en,f),e(en,Jn),e(Jn,id),y($a,id,null),e(en,ZT),e(en,ld),e(ld,JT),m(n,ep,f),m(n,de,f),y(xa,de,null),e(de,XT),e(de,za),e(za,QT),e(za,dd),e(dd,eb),e(za,tb),e(de,nb),e(de,ja),e(ja,ob),e(ja,Ea),e(Ea,sb),e(ja,ab),e(de,rb),e(de,qa),e(qa,ib),e(qa,Rr),e(Rr,lb),e(qa,db),e(de,cb),e(de,Fa),e(Fa,pb),e(Fa,Ma),e(Ma,hb),e(Fa,ub),e(de,mb),y(Xn,de,null),e(de,fb),e(de,ft),y(Ca,ft,null),e(ft,_b),e(ft,tn),e(tn,gb),e(tn,Br),e(Br,Tb),e(tn,bb),e(tn,cd),e(cd,kb),e(tn,vb),e(ft,yb),y(Qn,ft,null),e(ft,wb),y(eo,ft,null),m(n,tp,f),m(n,nn,f),e(nn,to),e(to,pd),y(Pa,pd,null),e(nn,$b),e(nn,hd),e(hd,xb),m(n,np,f),m(n,ce,f),y(Na,ce,null),e(ce,zb),e(ce,ud),e(ud,jb),e(ce,Eb),e(ce,Oa),e(Oa,qb),e(Oa,La),e(La,Fb),e(Oa,Mb),e(ce,Cb),e(ce,Aa),e(Aa,Pb),e(Aa,Hr),e(Hr,Nb),e(Aa,Ob),e(ce,Lb),e(ce,Ia),e(Ia,Ab),e(Ia,Da),e(Da,Ib),e(Ia,Db),e(ce,Sb),y(no,ce,null),e(ce,Gb),e(ce,_t),y(Sa,_t,null),e(_t,Ub),e(_t,on),e(on,Wb),e(on,Vr),e(Vr,Rb),e(on,Bb),e(on,md),e(md,Hb),e(on,Vb),e(_t,Kb),y(oo,_t,null),e(_t,Yb),y(so,_t,null),m(n,op,f),m(n,sn,f),e(sn,ao),e(ao,fd),y(Ga,fd,null),e(sn,Zb),e(sn,_d),e(_d,Jb),m(n,sp,f),m(n,Je,f),y(Ua,Je,null),e(Je,Xb),e(Je,gt),y(Wa,gt,null),e(gt,Qb),e(gt,an),e(an,ek),e(an,gd),e(gd,tk),e(an,nk),e(an,Td),e(Td,ok),e(an,sk),e(gt,ak),y(ro,gt,null),e(gt,rk),y(io,gt,null),e(Je,ik),e(Je,lo),y(Ra,lo,null),e(lo,lk),y(co,lo,null),e(Je,dk),e(Je,po),y(Ba,po,null),e(po,ck),y(ho,po,null),m(n,ap,f),m(n,rn,f),e(rn,uo),e(uo,bd),y(Ha,bd,null),e(rn,pk),e(rn,kd),e(kd,hk),m(n,rp,f),m(n,Xe,f),y(Va,Xe,null),e(Xe,uk),e(Xe,Tt),y(Ka,Tt,null),e(Tt,mk),e(Tt,ln),e(ln,fk),e(ln,vd),e(vd,_k),e(ln,gk),e(ln,yd),e(yd,Tk),e(ln,bk),e(Tt,kk),y(mo,Tt,null),e(Tt,vk),y(fo,Tt,null),e(Xe,yk),e(Xe,_o),y(Ya,_o,null),e(_o,wk),y(go,_o,null),e(Xe,$k),e(Xe,To),y(Za,To,null),e(To,xk),y(bo,To,null),m(n,ip,f),m(n,dn,f),e(dn,ko),e(ko,wd),y(Ja,wd,null),e(dn,zk),e(dn,$d),e($d,jk),m(n,lp,f),m(n,cn,f),y(Xa,cn,null),e(cn,Ek),e(cn,Pt),y(Qa,Pt,null),e(Pt,qk),e(Pt,pn),e(pn,Fk),e(pn,Kr),e(Kr,Mk),e(pn,Ck),e(pn,xd),e(xd,Pk),e(pn,Nk),e(Pt,Ok),y(vo,Pt,null),dp=!0},p(n,[f]){const er={};f&2&&(er.$$scope={dirty:f,ctx:n}),Pn.$set(er);const zd={};f&2&&(zd.$$scope={dirty:f,ctx:n}),Nn.$set(zd);const jd={};f&2&&(jd.$$scope={dirty:f,ctx:n}),On.$set(jd);const Ed={};f&2&&(Ed.$$scope={dirty:f,ctx:n}),Ln.$set(Ed);const tr={};f&2&&(tr.$$scope={dirty:f,ctx:n}),In.$set(tr);const qd={};f&2&&(qd.$$scope={dirty:f,ctx:n}),Dn.$set(qd);const Fd={};f&2&&(Fd.$$scope={dirty:f,ctx:n}),Sn.$set(Fd);const Md={};f&2&&(Md.$$scope={dirty:f,ctx:n}),Gn.$set(Md);const nr={};f&2&&(nr.$$scope={dirty:f,ctx:n}),Wn.$set(nr);const Cd={};f&2&&(Cd.$$scope={dirty:f,ctx:n}),Rn.$set(Cd);const Pd={};f&2&&(Pd.$$scope={dirty:f,ctx:n}),Bn.$set(Pd);const Nd={};f&2&&(Nd.$$scope={dirty:f,ctx:n}),Hn.$set(Nd);const Od={};f&2&&(Od.$$scope={dirty:f,ctx:n}),Kn.$set(Od);const Ld={};f&2&&(Ld.$$scope={dirty:f,ctx:n}),Yn.$set(Ld);const hn={};f&2&&(hn.$$scope={dirty:f,ctx:n}),Zn.$set(hn);const Ad={};f&2&&(Ad.$$scope={dirty:f,ctx:n}),Xn.$set(Ad);const un={};f&2&&(un.$$scope={dirty:f,ctx:n}),Qn.$set(un);const Id={};f&2&&(Id.$$scope={dirty:f,ctx:n}),eo.$set(Id);const Dd={};f&2&&(Dd.$$scope={dirty:f,ctx:n}),no.$set(Dd);const Sd={};f&2&&(Sd.$$scope={dirty:f,ctx:n}),oo.$set(Sd);const Gd={};f&2&&(Gd.$$scope={dirty:f,ctx:n}),so.$set(Gd);const Ud={};f&2&&(Ud.$$scope={dirty:f,ctx:n}),ro.$set(Ud);const wt={};f&2&&(wt.$$scope={dirty:f,ctx:n}),io.$set(wt);const Wd={};f&2&&(Wd.$$scope={dirty:f,ctx:n}),co.$set(Wd);const Rd={};f&2&&(Rd.$$scope={dirty:f,ctx:n}),ho.$set(Rd);const Bd={};f&2&&(Bd.$$scope={dirty:f,ctx:n}),mo.$set(Bd);const Hd={};f&2&&(Hd.$$scope={dirty:f,ctx:n}),fo.$set(Hd);const Qe={};f&2&&(Qe.$$scope={dirty:f,ctx:n}),go.$set(Qe);const Vd={};f&2&&(Vd.$$scope={dirty:f,ctx:n}),bo.$set(Vd);const Kd={};f&2&&(Kd.$$scope={dirty:f,ctx:n}),vo.$set(Kd)},i(n){dp||(w(l.$$.fragment,n),w(ae.$$.fragment,n),w(Vo.$$.fragment,n),w(Ko.$$.fragment,n),w(Zo.$$.fragment,n),w(Xo.$$.fragment,n),w(ns.$$.fragment,n),w(as.$$.fragment,n),w(rs.$$.fragment,n),w(is.$$.fragment,n),w(ls.$$.fragment,n),w(cs.$$.fragment,n),w(Ts.$$.fragment,n),w(bs.$$.fragment,n),w(vs.$$.fragment,n),w(ys.$$.fragment,n),w(zs.$$.fragment,n),w(Es.$$.fragment,n),w(Fs.$$.fragment,n),w(Ms.$$.fragment,n),w(Cs.$$.fragment,n),w(Ps.$$.fragment,n),w(Ls.$$.fragment,n),w(Is.$$.fragment,n),w(Ds.$$.fragment,n),w(Ss.$$.fragment,n),w(Hs.$$.fragment,n),w(Pn.$$.fragment,n),w(Nn.$$.fragment,n),w(Vs.$$.fragment,n),w(On.$$.fragment,n),w(Ks.$$.fragment,n),w(Ln.$$.fragment,n),w(Ys.$$.fragment,n),w(Zs.$$.fragment,n),w(oa.$$.fragment,n),w(In.$$.fragment,n),w(Dn.$$.fragment,n),w(sa.$$.fragment,n),w(Sn.$$.fragment,n),w(aa.$$.fragment,n),w(Gn.$$.fragment,n),w(ra.$$.fragment,n),w(ia.$$.fragment,n),w(ua.$$.fragment,n),w(Wn.$$.fragment,n),w(Rn.$$.fragment,n),w(ma.$$.fragment,n),w(Bn.$$.fragment,n),w(fa.$$.fragment,n),w(Hn.$$.fragment,n),w(_a.$$.fragment,n),w(ga.$$.fragment,n),w(Kn.$$.fragment,n),w(wa.$$.fragment,n),w(Yn.$$.fragment,n),w(Zn.$$.fragment,n),w($a.$$.fragment,n),w(xa.$$.fragment,n),w(Xn.$$.fragment,n),w(Ca.$$.fragment,n),w(Qn.$$.fragment,n),w(eo.$$.fragment,n),w(Pa.$$.fragment,n),w(Na.$$.fragment,n),w(no.$$.fragment,n),w(Sa.$$.fragment,n),w(oo.$$.fragment,n),w(so.$$.fragment,n),w(Ga.$$.fragment,n),w(Ua.$$.fragment,n),w(Wa.$$.fragment,n),w(ro.$$.fragment,n),w(io.$$.fragment,n),w(Ra.$$.fragment,n),w(co.$$.fragment,n),w(Ba.$$.fragment,n),w(ho.$$.fragment,n),w(Ha.$$.fragment,n),w(Va.$$.fragment,n),w(Ka.$$.fragment,n),w(mo.$$.fragment,n),w(fo.$$.fragment,n),w(Ya.$$.fragment,n),w(go.$$.fragment,n),w(Za.$$.fragment,n),w(bo.$$.fragment,n),w(Ja.$$.fragment,n),w(Xa.$$.fragment,n),w(Qa.$$.fragment,n),w(vo.$$.fragment,n),dp=!0)},o(n){$(l.$$.fragment,n),$(ae.$$.fragment,n),$(Vo.$$.fragment,n),$(Ko.$$.fragment,n),$(Zo.$$.fragment,n),$(Xo.$$.fragment,n),$(ns.$$.fragment,n),$(as.$$.fragment,n),$(rs.$$.fragment,n),$(is.$$.fragment,n),$(ls.$$.fragment,n),$(cs.$$.fragment,n),$(Ts.$$.fragment,n),$(bs.$$.fragment,n),$(vs.$$.fragment,n),$(ys.$$.fragment,n),$(zs.$$.fragment,n),$(Es.$$.fragment,n),$(Fs.$$.fragment,n),$(Ms.$$.fragment,n),$(Cs.$$.fragment,n),$(Ps.$$.fragment,n),$(Ls.$$.fragment,n),$(Is.$$.fragment,n),$(Ds.$$.fragment,n),$(Ss.$$.fragment,n),$(Hs.$$.fragment,n),$(Pn.$$.fragment,n),$(Nn.$$.fragment,n),$(Vs.$$.fragment,n),$(On.$$.fragment,n),$(Ks.$$.fragment,n),$(Ln.$$.fragment,n),$(Ys.$$.fragment,n),$(Zs.$$.fragment,n),$(oa.$$.fragment,n),$(In.$$.fragment,n),$(Dn.$$.fragment,n),$(sa.$$.fragment,n),$(Sn.$$.fragment,n),$(aa.$$.fragment,n),$(Gn.$$.fragment,n),$(ra.$$.fragment,n),$(ia.$$.fragment,n),$(ua.$$.fragment,n),$(Wn.$$.fragment,n),$(Rn.$$.fragment,n),$(ma.$$.fragment,n),$(Bn.$$.fragment,n),$(fa.$$.fragment,n),$(Hn.$$.fragment,n),$(_a.$$.fragment,n),$(ga.$$.fragment,n),$(Kn.$$.fragment,n),$(wa.$$.fragment,n),$(Yn.$$.fragment,n),$(Zn.$$.fragment,n),$($a.$$.fragment,n),$(xa.$$.fragment,n),$(Xn.$$.fragment,n),$(Ca.$$.fragment,n),$(Qn.$$.fragment,n),$(eo.$$.fragment,n),$(Pa.$$.fragment,n),$(Na.$$.fragment,n),$(no.$$.fragment,n),$(Sa.$$.fragment,n),$(oo.$$.fragment,n),$(so.$$.fragment,n),$(Ga.$$.fragment,n),$(Ua.$$.fragment,n),$(Wa.$$.fragment,n),$(ro.$$.fragment,n),$(io.$$.fragment,n),$(Ra.$$.fragment,n),$(co.$$.fragment,n),$(Ba.$$.fragment,n),$(ho.$$.fragment,n),$(Ha.$$.fragment,n),$(Va.$$.fragment,n),$(Ka.$$.fragment,n),$(mo.$$.fragment,n),$(fo.$$.fragment,n),$(Ya.$$.fragment,n),$(go.$$.fragment,n),$(Za.$$.fragment,n),$(bo.$$.fragment,n),$(Ja.$$.fragment,n),$(Xa.$$.fragment,n),$(Qa.$$.fragment,n),$(vo.$$.fragment,n),dp=!1},d(n){t(p),n&&t(b),n&&t(g),x(l),n&&t(se),n&&t(q),x(ae),n&&t(ve),n&&t(W),n&&t(N),n&&t(he),n&&t(ye),n&&t(ue),n&&t(we),n&&t(P),n&&t(H),n&&t(V),n&&t(Xd),n&&t(or),n&&t(Qd),n&&t(We),n&&t(ec),n&&t(ar),n&&t(tc),n&&t($t),n&&t(nc),n&&t(gn),n&&t(oc),n&&t(xt),n&&t(sc),n&&t(dr),n&&t(ac),n&&t(Lt),x(Vo),n&&t(rc),n&&t(at),n&&t(ic),n&&t(bn),n&&t(lc),n&&t(pr),n&&t(dc),n&&t(me),n&&t(cc),n&&t(ur),n&&t(pc),x(Ko,n),n&&t(hc),n&&t(kn),n&&t(uc),n&&t(mr),n&&t(mc),n&&t(fr),n&&t(fc),x(Zo,n),n&&t(_c),n&&t(oe),n&&t(gc),n&&t(zt),n&&t(Tc),n&&t(fe),n&&t(bc),x(Xo,n),n&&t(kc),n&&t(_r),n&&t(vc),n&&t(gr),n&&t(yc),n&&t(jt),n&&t(wc),n&&t(vn),n&&t($c),n&&t(Tr),n&&t(xc),n&&t(At),x(ns),n&&t(zc),n&&t(rt),n&&t(jc),x(as,n),n&&t(Ec),n&&t(Re),n&&t(qc),n&&t(vr),n&&t(Fc),x(rs,n),n&&t(Mc),n&&t(yr),n&&t(Cc),x(is,n),n&&t(Pc),n&&t(wr),n&&t(Nc),n&&t(It),x(ls),n&&t(Oc),n&&t(it),n&&t(Lc),n&&t(Dt),x(cs),n&&t(Ac),n&&t($r),n&&t(Ic),n&&t(xn),n&&t(Dc),n&&t(Gt),x(Ts),n&&t(Sc),n&&t(vt),x(bs),n&&t(Gc),n&&t(Wt),x(vs),n&&t(Uc),n&&t(ie),x(ys),x(zs),x(Es),x(Fs),x(Ms),n&&t(Wc),n&&t(Rt),x(Cs),n&&t(Rc),n&&t(Se),x(Ps),x(Ls),x(Is),n&&t(Bc),n&&t(Ht),x(Ds),n&&t(Hc),n&&t(J),x(Ss),x(Hs),x(Pn),x(Nn),x(Vs),x(On),x(Ks),x(Ln),n&&t(Vc),n&&t(Kt),x(Ys),n&&t(Kc),n&&t(X),x(Zs),x(oa),x(In),x(Dn),x(sa),x(Sn),x(aa),x(Gn),n&&t(Yc),n&&t(Zt),x(ra),n&&t(Zc),n&&t(Q),x(ia),x(ua),x(Wn),x(Rn),x(ma),x(Bn),x(fa),x(Hn),n&&t(Jc),n&&t(Xt),x(_a),n&&t(Xc),n&&t(le),x(ga),x(Kn),x(wa),x(Yn),x(Zn),n&&t(Qc),n&&t(en),x($a),n&&t(ep),n&&t(de),x(xa),x(Xn),x(Ca),x(Qn),x(eo),n&&t(tp),n&&t(nn),x(Pa),n&&t(np),n&&t(ce),x(Na),x(no),x(Sa),x(oo),x(so),n&&t(op),n&&t(sn),x(Ga),n&&t(sp),n&&t(Je),x(Ua),x(Wa),x(ro),x(io),x(Ra),x(co),x(Ba),x(ho),n&&t(ap),n&&t(rn),x(Ha),n&&t(rp),n&&t(Xe),x(Va),x(Ka),x(mo),x(fo),x(Ya),x(go),x(Za),x(bo),n&&t(ip),n&&t(dn),x(Ja),n&&t(lp),n&&t(cn),x(Xa),x(Qa),x(vo)}}}const pw={local:"t5",sections:[{local:"overview",title:"Overview"},{local:"training",title:"Training"},{local:"inference",title:"Inference"},{local:"performance",title:"Performance"},{local:"example-scripts",title:"Example scripts"},{local:"transformers.T5Config",title:"T5Config"},{local:"transformers.T5Tokenizer",title:"T5Tokenizer"},{local:"transformers.T5TokenizerFast",title:"T5TokenizerFast"},{local:"transformers.T5Model",title:"T5Model"},{local:"transformers.T5ForConditionalGeneration",title:"T5ForConditionalGeneration"},{local:"transformers.T5EncoderModel",title:"T5EncoderModel"},{local:"transformers.TFT5Model",title:"TFT5Model"},{local:"transformers.TFT5ForConditionalGeneration",title:"TFT5ForConditionalGeneration"},{local:"transformers.TFT5EncoderModel",title:"TFT5EncoderModel"},{local:"transformers.FlaxT5Model",title:"FlaxT5Model"},{local:"transformers.FlaxT5ForConditionalGeneration",title:"FlaxT5ForConditionalGeneration"},{local:"transformers.FlaxT5EncoderModel",title:"FlaxT5EncoderModel"}],title:"T5"};function hw(j){return P1(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class bw extends q1{constructor(p){super();F1(this,p,hw,cw,M1,{})}}export{bw as default,pw as metadata};
