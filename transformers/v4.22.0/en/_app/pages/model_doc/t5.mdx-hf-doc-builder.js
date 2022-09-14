import{S as q5,i as F5,s as M5,e as a,k as l,w as b,t as o,M as C5,c as r,d as t,m as c,a as i,x as k,h as s,b as h,G as e,g as m,y,q as w,o as $,B as x,v as P5,L as ke}from"../../chunks/vendor-hf-doc-builder.js";import{T as Dt}from"../../chunks/Tip-hf-doc-builder.js";import{D as P}from"../../chunks/Docstring-hf-doc-builder.js";import{C as H}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ve}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as be}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function O5(j){let p,v,g,_,T;return{c(){p=a("p"),v=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),_=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=r(d,"P",{});var u=i(p);v=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var q=i(g);_=s(q,"Module"),q.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){m(d,p,u),e(p,v),e(p,g),e(g,_),e(p,T)},d(d){d&&t(p)}}}function N5(j){let p,v,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, T5Model

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=a("p"),v=o("Example:"),g=l(),b(_.$$.fragment)},l(d){p=r(d,"P",{});var u=i(p);v=s(u,"Example:"),u.forEach(t),g=c(d),k(_.$$.fragment,d)},m(d,u){m(d,p,u),e(p,v),m(d,g,u),y(_,d,u),T=!0},p:ke,i(d){T||(w(_.$$.fragment,d),T=!0)},o(d){$(_.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(_,d)}}}function A5(j){let p,v,g,_,T;return _=new H({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
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
model.parallelize(device_map)`}}),{c(){p=a("p"),v=o("Example:"),g=l(),b(_.$$.fragment)},l(d){p=r(d,"P",{});var u=i(p);v=s(u,"Example:"),u.forEach(t),g=c(d),k(_.$$.fragment,d)},m(d,u){m(d,p,u),e(p,v),m(d,g,u),y(_,d,u),T=!0},p:ke,i(d){T||(w(_.$$.fragment,d),T=!0)},o(d){$(_.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(_,d)}}}function L5(j){let p,v,g,_,T;return _=new H({props:{code:`# On a 4 GPU machine with t5-3b:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),{c(){p=a("p"),v=o("Example:"),g=l(),b(_.$$.fragment)},l(d){p=r(d,"P",{});var u=i(p);v=s(u,"Example:"),u.forEach(t),g=c(d),k(_.$$.fragment,d)},m(d,u){m(d,p,u),e(p,v),m(d,g,u),y(_,d,u),T=!0},p:ke,i(d){T||(w(_.$$.fragment,d),T=!0)},o(d){$(_.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(_,d)}}}function I5(j){let p,v,g,_,T;return{c(){p=a("p"),v=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),_=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=r(d,"P",{});var u=i(p);v=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var q=i(g);_=s(q,"Module"),q.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){m(d,p,u),e(p,v),e(p,g),e(g,_),e(p,T)},d(d){d&&t(p)}}}function D5(j){let p,v,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you.</span>`}}),{c(){p=a("p"),v=o("Examples:"),g=l(),b(_.$$.fragment)},l(d){p=r(d,"P",{});var u=i(p);v=s(u,"Examples:"),u.forEach(t),g=c(d),k(_.$$.fragment,d)},m(d,u){m(d,p,u),e(p,v),m(d,g,u),y(_,d,u),T=!0},p:ke,i(d){T||(w(_.$$.fragment,d),T=!0)},o(d){$(_.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(_,d)}}}function S5(j){let p,v,g,_,T;return _=new H({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
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
model.parallelize(device_map)`}}),{c(){p=a("p"),v=o("Example:"),g=l(),b(_.$$.fragment)},l(d){p=r(d,"P",{});var u=i(p);v=s(u,"Example:"),u.forEach(t),g=c(d),k(_.$$.fragment,d)},m(d,u){m(d,p,u),e(p,v),m(d,g,u),y(_,d,u),T=!0},p:ke,i(d){T||(w(_.$$.fragment,d),T=!0)},o(d){$(_.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(_,d)}}}function G5(j){let p,v,g,_,T;return _=new H({props:{code:`# On a 4 GPU machine with t5-3b:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),{c(){p=a("p"),v=o("Example:"),g=l(),b(_.$$.fragment)},l(d){p=r(d,"P",{});var u=i(p);v=s(u,"Example:"),u.forEach(t),g=c(d),k(_.$$.fragment,d)},m(d,u){m(d,p,u),e(p,v),m(d,g,u),y(_,d,u),T=!0},p:ke,i(d){T||(w(_.$$.fragment,d),T=!0)},o(d){$(_.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(_,d)}}}function U5(j){let p,v,g,_,T;return{c(){p=a("p"),v=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),_=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=r(d,"P",{});var u=i(p);v=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var q=i(g);_=s(q,"Module"),q.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){m(d,p,u),e(p,v),e(p,g),e(g,_),e(p,T)},d(d){d&&t(p)}}}function W5(j){let p,v,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, T5EncoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=a("p"),v=o("Example:"),g=l(),b(_.$$.fragment)},l(d){p=r(d,"P",{});var u=i(p);v=s(u,"Example:"),u.forEach(t),g=c(d),k(_.$$.fragment,d)},m(d,u){m(d,p,u),e(p,v),m(d,g,u),y(_,d,u),T=!0},p:ke,i(d){T||(w(_.$$.fragment,d),T=!0)},o(d){$(_.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(_,d)}}}function B5(j){let p,v,g,_,T;return _=new H({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
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
model.parallelize(device_map)`}}),{c(){p=a("p"),v=o("Example:"),g=l(),b(_.$$.fragment)},l(d){p=r(d,"P",{});var u=i(p);v=s(u,"Example:"),u.forEach(t),g=c(d),k(_.$$.fragment,d)},m(d,u){m(d,p,u),e(p,v),m(d,g,u),y(_,d,u),T=!0},p:ke,i(d){T||(w(_.$$.fragment,d),T=!0)},o(d){$(_.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(_,d)}}}function R5(j){let p,v,g,_,T;return _=new H({props:{code:`# On a 4 GPU machine with t5-3b:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),{c(){p=a("p"),v=o("Example:"),g=l(),b(_.$$.fragment)},l(d){p=r(d,"P",{});var u=i(p);v=s(u,"Example:"),u.forEach(t),g=c(d),k(_.$$.fragment,d)},m(d,u){m(d,p,u),e(p,v),m(d,g,u),y(_,d,u),T=!0},p:ke,i(d){T||(w(_.$$.fragment,d),T=!0)},o(d){$(_.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(_,d)}}}function H5(j){let p,v,g,_,T,d,u,q,Ge,qe,S,re,ie,E,Ue,V,We,Fe,G,Be,le,J,Re,Me,U,He,Ce,W,ye,Ve,ce,C,O,Pe,D,we,X,Q,$e,Ke,N,xe,ee,Ye,Ze,K,ze,Je,B,je,I,Xe,te,A,Qe,L,et,tt;return{c(){p=a("p"),v=o("TensorFlow models and layers in "),g=a("code"),_=o("transformers"),T=o(" accept two formats as input:"),d=l(),u=a("ul"),q=a("li"),Ge=o("having all inputs as keyword arguments (like PyTorch models), or"),qe=l(),S=a("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),ie=l(),E=a("p"),Ue=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a("code"),We=o("model.fit()"),Fe=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),G=a("code"),Be=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Re=o("fit()"),Me=o(" and "),U=a("code"),He=o("predict()"),Ce=o(`, such as when creating your own layers or models with
the Keras `),W=a("code"),ye=o("Functional"),Ve=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ce=l(),C=a("ul"),O=a("li"),Pe=o("a single Tensor with "),D=a("code"),we=o("input_ids"),X=o(" only and nothing else: "),Q=a("code"),$e=o("model(input_ids)"),Ke=l(),N=a("li"),xe=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=a("code"),Ye=o("model([input_ids, attention_mask])"),Ze=o(" or "),K=a("code"),ze=o("model([input_ids, attention_mask, token_type_ids])"),Je=l(),B=a("li"),je=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a("code"),Xe=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),te=l(),A=a("p"),Qe=o(`Note that when creating models and layers with
`),L=a("a"),et=o("subclassing"),tt=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(z){p=r(z,"P",{});var F=i(p);v=s(F,"TensorFlow models and layers in "),g=r(F,"CODE",{});var vt=i(g);_=s(vt,"transformers"),vt.forEach(t),T=s(F," accept two formats as input:"),F.forEach(t),d=c(z),u=r(z,"UL",{});var pe=i(u);q=r(pe,"LI",{});var nt=i(q);Ge=s(nt,"having all inputs as keyword arguments (like PyTorch models), or"),nt.forEach(t),qe=c(pe),S=r(pe,"LI",{});var bt=i(S);re=s(bt,"having all inputs as a list, tuple or dict in the first positional argument."),bt.forEach(t),pe.forEach(t),ie=c(z),E=r(z,"P",{});var M=i(E);Ue=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r(M,"CODE",{});var Y=i(V);We=s(Y,"model.fit()"),Y.forEach(t),Fe=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),G=r(M,"CODE",{});var at=i(G);Be=s(at,"model.fit()"),at.forEach(t),le=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(M,"CODE",{});var rt=i(J);Re=s(rt,"fit()"),rt.forEach(t),Me=s(M," and "),U=r(M,"CODE",{});var Oe=i(U);He=s(Oe,"predict()"),Oe.forEach(t),Ce=s(M,`, such as when creating your own layers or models with
the Keras `),W=r(M,"CODE",{});var kt=i(W);ye=s(kt,"Functional"),kt.forEach(t),Ve=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),ce=c(z),C=r(z,"UL",{});var R=i(C);O=r(R,"LI",{});var Z=i(O);Pe=s(Z,"a single Tensor with "),D=r(Z,"CODE",{});var it=i(D);we=s(it,"input_ids"),it.forEach(t),X=s(Z," only and nothing else: "),Q=r(Z,"CODE",{});var Ne=i(Q);$e=s(Ne,"model(input_ids)"),Ne.forEach(t),Z.forEach(t),Ke=c(R),N=r(R,"LI",{});var ne=i(N);xe=s(ne,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=r(ne,"CODE",{});var yt=i(ee);Ye=s(yt,"model([input_ids, attention_mask])"),yt.forEach(t),Ze=s(ne," or "),K=r(ne,"CODE",{});var dt=i(K);ze=s(dt,"model([input_ids, attention_mask, token_type_ids])"),dt.forEach(t),ne.forEach(t),Je=c(R),B=r(R,"LI",{});var Ee=i(B);je=s(Ee,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r(Ee,"CODE",{});var Ae=i(I);Xe=s(Ae,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ae.forEach(t),Ee.forEach(t),R.forEach(t),te=c(z),A=r(z,"P",{});var _e=i(A);Qe=s(_e,`Note that when creating models and layers with
`),L=r(_e,"A",{href:!0,rel:!0});var wt=i(L);et=s(wt,"subclassing"),wt.forEach(t),tt=s(_e,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),_e.forEach(t),this.h()},h(){h(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(L,"rel","nofollow")},m(z,F){m(z,p,F),e(p,v),e(p,g),e(g,_),e(p,T),m(z,d,F),m(z,u,F),e(u,q),e(q,Ge),e(u,qe),e(u,S),e(S,re),m(z,ie,F),m(z,E,F),e(E,Ue),e(E,V),e(V,We),e(E,Fe),e(E,G),e(G,Be),e(E,le),e(E,J),e(J,Re),e(E,Me),e(E,U),e(U,He),e(E,Ce),e(E,W),e(W,ye),e(E,Ve),m(z,ce,F),m(z,C,F),e(C,O),e(O,Pe),e(O,D),e(D,we),e(O,X),e(O,Q),e(Q,$e),e(C,Ke),e(C,N),e(N,xe),e(N,ee),e(ee,Ye),e(N,Ze),e(N,K),e(K,ze),e(C,Je),e(C,B),e(B,je),e(B,I),e(I,Xe),m(z,te,F),m(z,A,F),e(A,Qe),e(A,L),e(L,et),e(A,tt)},d(z){z&&t(p),z&&t(d),z&&t(u),z&&t(ie),z&&t(E),z&&t(ce),z&&t(C),z&&t(te),z&&t(A)}}}function V5(j){let p,v,g,_,T;return{c(){p=a("p"),v=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),_=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=r(d,"P",{});var u=i(p);v=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var q=i(g);_=s(q,"Module"),q.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){m(d,p,u),e(p,v),e(p,g),e(g,_),e(p,T)},d(d){d&&t(p)}}}function K5(j){let p,v,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, TFT5Model

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=a("p"),v=o("Examples:"),g=l(),b(_.$$.fragment)},l(d){p=r(d,"P",{});var u=i(p);v=s(u,"Examples:"),u.forEach(t),g=c(d),k(_.$$.fragment,d)},m(d,u){m(d,p,u),e(p,v),m(d,g,u),y(_,d,u),T=!0},p:ke,i(d){T||(w(_.$$.fragment,d),T=!0)},o(d){$(_.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(_,d)}}}function Y5(j){let p,v,g,_,T,d,u,q,Ge,qe,S,re,ie,E,Ue,V,We,Fe,G,Be,le,J,Re,Me,U,He,Ce,W,ye,Ve,ce,C,O,Pe,D,we,X,Q,$e,Ke,N,xe,ee,Ye,Ze,K,ze,Je,B,je,I,Xe,te,A,Qe,L,et,tt;return{c(){p=a("p"),v=o("TensorFlow models and layers in "),g=a("code"),_=o("transformers"),T=o(" accept two formats as input:"),d=l(),u=a("ul"),q=a("li"),Ge=o("having all inputs as keyword arguments (like PyTorch models), or"),qe=l(),S=a("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),ie=l(),E=a("p"),Ue=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a("code"),We=o("model.fit()"),Fe=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),G=a("code"),Be=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Re=o("fit()"),Me=o(" and "),U=a("code"),He=o("predict()"),Ce=o(`, such as when creating your own layers or models with
the Keras `),W=a("code"),ye=o("Functional"),Ve=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ce=l(),C=a("ul"),O=a("li"),Pe=o("a single Tensor with "),D=a("code"),we=o("input_ids"),X=o(" only and nothing else: "),Q=a("code"),$e=o("model(input_ids)"),Ke=l(),N=a("li"),xe=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=a("code"),Ye=o("model([input_ids, attention_mask])"),Ze=o(" or "),K=a("code"),ze=o("model([input_ids, attention_mask, token_type_ids])"),Je=l(),B=a("li"),je=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a("code"),Xe=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),te=l(),A=a("p"),Qe=o(`Note that when creating models and layers with
`),L=a("a"),et=o("subclassing"),tt=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(z){p=r(z,"P",{});var F=i(p);v=s(F,"TensorFlow models and layers in "),g=r(F,"CODE",{});var vt=i(g);_=s(vt,"transformers"),vt.forEach(t),T=s(F," accept two formats as input:"),F.forEach(t),d=c(z),u=r(z,"UL",{});var pe=i(u);q=r(pe,"LI",{});var nt=i(q);Ge=s(nt,"having all inputs as keyword arguments (like PyTorch models), or"),nt.forEach(t),qe=c(pe),S=r(pe,"LI",{});var bt=i(S);re=s(bt,"having all inputs as a list, tuple or dict in the first positional argument."),bt.forEach(t),pe.forEach(t),ie=c(z),E=r(z,"P",{});var M=i(E);Ue=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r(M,"CODE",{});var Y=i(V);We=s(Y,"model.fit()"),Y.forEach(t),Fe=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),G=r(M,"CODE",{});var at=i(G);Be=s(at,"model.fit()"),at.forEach(t),le=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(M,"CODE",{});var rt=i(J);Re=s(rt,"fit()"),rt.forEach(t),Me=s(M," and "),U=r(M,"CODE",{});var Oe=i(U);He=s(Oe,"predict()"),Oe.forEach(t),Ce=s(M,`, such as when creating your own layers or models with
the Keras `),W=r(M,"CODE",{});var kt=i(W);ye=s(kt,"Functional"),kt.forEach(t),Ve=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),ce=c(z),C=r(z,"UL",{});var R=i(C);O=r(R,"LI",{});var Z=i(O);Pe=s(Z,"a single Tensor with "),D=r(Z,"CODE",{});var it=i(D);we=s(it,"input_ids"),it.forEach(t),X=s(Z," only and nothing else: "),Q=r(Z,"CODE",{});var Ne=i(Q);$e=s(Ne,"model(input_ids)"),Ne.forEach(t),Z.forEach(t),Ke=c(R),N=r(R,"LI",{});var ne=i(N);xe=s(ne,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=r(ne,"CODE",{});var yt=i(ee);Ye=s(yt,"model([input_ids, attention_mask])"),yt.forEach(t),Ze=s(ne," or "),K=r(ne,"CODE",{});var dt=i(K);ze=s(dt,"model([input_ids, attention_mask, token_type_ids])"),dt.forEach(t),ne.forEach(t),Je=c(R),B=r(R,"LI",{});var Ee=i(B);je=s(Ee,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r(Ee,"CODE",{});var Ae=i(I);Xe=s(Ae,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ae.forEach(t),Ee.forEach(t),R.forEach(t),te=c(z),A=r(z,"P",{});var _e=i(A);Qe=s(_e,`Note that when creating models and layers with
`),L=r(_e,"A",{href:!0,rel:!0});var wt=i(L);et=s(wt,"subclassing"),wt.forEach(t),tt=s(_e,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),_e.forEach(t),this.h()},h(){h(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(L,"rel","nofollow")},m(z,F){m(z,p,F),e(p,v),e(p,g),e(g,_),e(p,T),m(z,d,F),m(z,u,F),e(u,q),e(q,Ge),e(u,qe),e(u,S),e(S,re),m(z,ie,F),m(z,E,F),e(E,Ue),e(E,V),e(V,We),e(E,Fe),e(E,G),e(G,Be),e(E,le),e(E,J),e(J,Re),e(E,Me),e(E,U),e(U,He),e(E,Ce),e(E,W),e(W,ye),e(E,Ve),m(z,ce,F),m(z,C,F),e(C,O),e(O,Pe),e(O,D),e(D,we),e(O,X),e(O,Q),e(Q,$e),e(C,Ke),e(C,N),e(N,xe),e(N,ee),e(ee,Ye),e(N,Ze),e(N,K),e(K,ze),e(C,Je),e(C,B),e(B,je),e(B,I),e(I,Xe),m(z,te,F),m(z,A,F),e(A,Qe),e(A,L),e(L,et),e(A,tt)},d(z){z&&t(p),z&&t(d),z&&t(u),z&&t(ie),z&&t(E),z&&t(ce),z&&t(C),z&&t(te),z&&t(A)}}}function Z5(j){let p,v,g,_,T;return{c(){p=a("p"),v=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),_=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=r(d,"P",{});var u=i(p);v=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var q=i(g);_=s(q,"Module"),q.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){m(d,p,u),e(p,v),e(p,g),e(g,_),e(p,T)},d(d){d&&t(p)}}}function J5(j){let p,v,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, TFT5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you</span>`}}),{c(){p=a("p"),v=o("Examples:"),g=l(),b(_.$$.fragment)},l(d){p=r(d,"P",{});var u=i(p);v=s(u,"Examples:"),u.forEach(t),g=c(d),k(_.$$.fragment,d)},m(d,u){m(d,p,u),e(p,v),m(d,g,u),y(_,d,u),T=!0},p:ke,i(d){T||(w(_.$$.fragment,d),T=!0)},o(d){$(_.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(_,d)}}}function X5(j){let p,v,g,_,T,d,u,q,Ge,qe,S,re,ie,E,Ue,V,We,Fe,G,Be,le,J,Re,Me,U,He,Ce,W,ye,Ve,ce,C,O,Pe,D,we,X,Q,$e,Ke,N,xe,ee,Ye,Ze,K,ze,Je,B,je,I,Xe,te,A,Qe,L,et,tt;return{c(){p=a("p"),v=o("TensorFlow models and layers in "),g=a("code"),_=o("transformers"),T=o(" accept two formats as input:"),d=l(),u=a("ul"),q=a("li"),Ge=o("having all inputs as keyword arguments (like PyTorch models), or"),qe=l(),S=a("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),ie=l(),E=a("p"),Ue=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a("code"),We=o("model.fit()"),Fe=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),G=a("code"),Be=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Re=o("fit()"),Me=o(" and "),U=a("code"),He=o("predict()"),Ce=o(`, such as when creating your own layers or models with
the Keras `),W=a("code"),ye=o("Functional"),Ve=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ce=l(),C=a("ul"),O=a("li"),Pe=o("a single Tensor with "),D=a("code"),we=o("input_ids"),X=o(" only and nothing else: "),Q=a("code"),$e=o("model(input_ids)"),Ke=l(),N=a("li"),xe=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=a("code"),Ye=o("model([input_ids, attention_mask])"),Ze=o(" or "),K=a("code"),ze=o("model([input_ids, attention_mask, token_type_ids])"),Je=l(),B=a("li"),je=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a("code"),Xe=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),te=l(),A=a("p"),Qe=o(`Note that when creating models and layers with
`),L=a("a"),et=o("subclassing"),tt=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(z){p=r(z,"P",{});var F=i(p);v=s(F,"TensorFlow models and layers in "),g=r(F,"CODE",{});var vt=i(g);_=s(vt,"transformers"),vt.forEach(t),T=s(F," accept two formats as input:"),F.forEach(t),d=c(z),u=r(z,"UL",{});var pe=i(u);q=r(pe,"LI",{});var nt=i(q);Ge=s(nt,"having all inputs as keyword arguments (like PyTorch models), or"),nt.forEach(t),qe=c(pe),S=r(pe,"LI",{});var bt=i(S);re=s(bt,"having all inputs as a list, tuple or dict in the first positional argument."),bt.forEach(t),pe.forEach(t),ie=c(z),E=r(z,"P",{});var M=i(E);Ue=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r(M,"CODE",{});var Y=i(V);We=s(Y,"model.fit()"),Y.forEach(t),Fe=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),G=r(M,"CODE",{});var at=i(G);Be=s(at,"model.fit()"),at.forEach(t),le=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(M,"CODE",{});var rt=i(J);Re=s(rt,"fit()"),rt.forEach(t),Me=s(M," and "),U=r(M,"CODE",{});var Oe=i(U);He=s(Oe,"predict()"),Oe.forEach(t),Ce=s(M,`, such as when creating your own layers or models with
the Keras `),W=r(M,"CODE",{});var kt=i(W);ye=s(kt,"Functional"),kt.forEach(t),Ve=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),ce=c(z),C=r(z,"UL",{});var R=i(C);O=r(R,"LI",{});var Z=i(O);Pe=s(Z,"a single Tensor with "),D=r(Z,"CODE",{});var it=i(D);we=s(it,"input_ids"),it.forEach(t),X=s(Z," only and nothing else: "),Q=r(Z,"CODE",{});var Ne=i(Q);$e=s(Ne,"model(input_ids)"),Ne.forEach(t),Z.forEach(t),Ke=c(R),N=r(R,"LI",{});var ne=i(N);xe=s(ne,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=r(ne,"CODE",{});var yt=i(ee);Ye=s(yt,"model([input_ids, attention_mask])"),yt.forEach(t),Ze=s(ne," or "),K=r(ne,"CODE",{});var dt=i(K);ze=s(dt,"model([input_ids, attention_mask, token_type_ids])"),dt.forEach(t),ne.forEach(t),Je=c(R),B=r(R,"LI",{});var Ee=i(B);je=s(Ee,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r(Ee,"CODE",{});var Ae=i(I);Xe=s(Ae,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ae.forEach(t),Ee.forEach(t),R.forEach(t),te=c(z),A=r(z,"P",{});var _e=i(A);Qe=s(_e,`Note that when creating models and layers with
`),L=r(_e,"A",{href:!0,rel:!0});var wt=i(L);et=s(wt,"subclassing"),wt.forEach(t),tt=s(_e,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),_e.forEach(t),this.h()},h(){h(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(L,"rel","nofollow")},m(z,F){m(z,p,F),e(p,v),e(p,g),e(g,_),e(p,T),m(z,d,F),m(z,u,F),e(u,q),e(q,Ge),e(u,qe),e(u,S),e(S,re),m(z,ie,F),m(z,E,F),e(E,Ue),e(E,V),e(V,We),e(E,Fe),e(E,G),e(G,Be),e(E,le),e(E,J),e(J,Re),e(E,Me),e(E,U),e(U,He),e(E,Ce),e(E,W),e(W,ye),e(E,Ve),m(z,ce,F),m(z,C,F),e(C,O),e(O,Pe),e(O,D),e(D,we),e(O,X),e(O,Q),e(Q,$e),e(C,Ke),e(C,N),e(N,xe),e(N,ee),e(ee,Ye),e(N,Ze),e(N,K),e(K,ze),e(C,Je),e(C,B),e(B,je),e(B,I),e(I,Xe),m(z,te,F),m(z,A,F),e(A,Qe),e(A,L),e(L,et),e(A,tt)},d(z){z&&t(p),z&&t(d),z&&t(u),z&&t(ie),z&&t(E),z&&t(ce),z&&t(C),z&&t(te),z&&t(A)}}}function Q5(j){let p,v,g,_,T;return{c(){p=a("p"),v=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),_=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=r(d,"P",{});var u=i(p);v=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var q=i(g);_=s(q,"Module"),q.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){m(d,p,u),e(p,v),e(p,g),e(g,_),e(p,T)},d(d){d&&t(p)}}}function ew(j){let p,v,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, TFT5EncoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)`}}),{c(){p=a("p"),v=o("Examples:"),g=l(),b(_.$$.fragment)},l(d){p=r(d,"P",{});var u=i(p);v=s(u,"Examples:"),u.forEach(t),g=c(d),k(_.$$.fragment,d)},m(d,u){m(d,p,u),e(p,v),m(d,g,u),y(_,d,u),T=!0},p:ke,i(d){T||(w(_.$$.fragment,d),T=!0)},o(d){$(_.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(_,d)}}}function tw(j){let p,v,g,_,T;return{c(){p=a("p"),v=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),_=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=r(d,"P",{});var u=i(p);v=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var q=i(g);_=s(q,"Module"),q.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){m(d,p,u),e(p,v),e(p,g),e(g,_),e(p,T)},d(d){d&&t(p)}}}function nw(j){let p,v,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, FlaxT5Model

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=a("p"),v=o("Example:"),g=l(),b(_.$$.fragment)},l(d){p=r(d,"P",{});var u=i(p);v=s(u,"Example:"),u.forEach(t),g=c(d),k(_.$$.fragment,d)},m(d,u){m(d,p,u),e(p,v),m(d,g,u),y(_,d,u),T=!0},p:ke,i(d){T||(w(_.$$.fragment,d),T=!0)},o(d){$(_.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(_,d)}}}function ow(j){let p,v,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=a("p"),v=o("Example:"),g=l(),b(_.$$.fragment)},l(d){p=r(d,"P",{});var u=i(p);v=s(u,"Example:"),u.forEach(t),g=c(d),k(_.$$.fragment,d)},m(d,u){m(d,p,u),e(p,v),m(d,g,u),y(_,d,u),T=!0},p:ke,i(d){T||(w(_.$$.fragment,d),T=!0)},o(d){$(_.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(_,d)}}}function sw(j){let p,v,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=a("p"),v=o("Example:"),g=l(),b(_.$$.fragment)},l(d){p=r(d,"P",{});var u=i(p);v=s(u,"Example:"),u.forEach(t),g=c(d),k(_.$$.fragment,d)},m(d,u){m(d,p,u),e(p,v),m(d,g,u),y(_,d,u),T=!0},p:ke,i(d){T||(w(_.$$.fragment,d),T=!0)},o(d){$(_.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(_,d)}}}function aw(j){let p,v,g,_,T;return{c(){p=a("p"),v=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),_=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=r(d,"P",{});var u=i(p);v=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var q=i(g);_=s(q,"Module"),q.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){m(d,p,u),e(p,v),e(p,g),e(g,_),e(p,T)},d(d){d&&t(p)}}}function rw(j){let p,v,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){p=a("p"),v=o("Example:"),g=l(),b(_.$$.fragment)},l(d){p=r(d,"P",{});var u=i(p);v=s(u,"Example:"),u.forEach(t),g=c(d),k(_.$$.fragment,d)},m(d,u){m(d,p,u),e(p,v),m(d,g,u),y(_,d,u),T=!0},p:ke,i(d){T||(w(_.$$.fragment,d),T=!0)},o(d){$(_.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(_,d)}}}function iw(j){let p,v,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=a("p"),v=o("Example:"),g=l(),b(_.$$.fragment)},l(d){p=r(d,"P",{});var u=i(p);v=s(u,"Example:"),u.forEach(t),g=c(d),k(_.$$.fragment,d)},m(d,u){m(d,p,u),e(p,v),m(d,g,u),y(_,d,u),T=!0},p:ke,i(d){T||(w(_.$$.fragment,d),T=!0)},o(d){$(_.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(_,d)}}}function dw(j){let p,v,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=a("p"),v=o("Example:"),g=l(),b(_.$$.fragment)},l(d){p=r(d,"P",{});var u=i(p);v=s(u,"Example:"),u.forEach(t),g=c(d),k(_.$$.fragment,d)},m(d,u){m(d,p,u),e(p,v),m(d,g,u),y(_,d,u),T=!0},p:ke,i(d){T||(w(_.$$.fragment,d),T=!0)},o(d){$(_.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(_,d)}}}function lw(j){let p,v,g,_,T;return{c(){p=a("p"),v=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),_=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=r(d,"P",{});var u=i(p);v=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var q=i(g);_=s(q,"Module"),q.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(d,u){m(d,p,u),e(p,v),e(p,g),e(g,_),e(p,T)},d(d){d&&t(p)}}}function cw(j){let p,v,g,_,T,d,u,q,Ge,qe,S,re,ie,E,Ue,V,We,Fe,G,Be,le,J,Re,Me,U,He,Ce,W,ye,Ve,ce,C,O,Pe,D,we,X,Q,$e,Ke,N,xe,ee,Ye,Ze,K,ze,Je,B,je,I,Xe,te,A,Qe,L,et,tt,z,F,vt,pe,nt,bt,M,Y,at,rt,Oe,kt,R,Z,it,Ne,ne,yt,dt,Ee,Ae,_e,wt,Pi,Oi,ss,vh,bh,Ni,vr,as,kh,yh,ic,br,wh,dc,Wt,Ai,Pn,Li,$h,xh,kr,zh,jh,Eh,Ii,On,Di,qh,Fh,yr,Mh,Ch,Ph,Si,Nn,Gi,Oh,Nh,wr,Ah,Lh,lc,An,Ih,rs,Dh,Sh,cc,Bt,Gh,is,Uh,Wh,ds,Bh,Rh,pc,$r,hc,tn,Ln,Ui,ls,Hh,Wi,Vh,uc,$t,Kh,Bi,Yh,Zh,Ri,Jh,Xh,Hi,Qh,eu,mc,In,tu,xr,nu,ou,fc,zr,Vi,su,_c,ge,au,Ki,ru,iu,Yi,du,lu,Zi,cu,pu,Ji,hu,uu,Xi,mu,fu,jr,_u,gu,gc,Er,Tu,Tc,cs,vc,Dn,vu,ps,bu,ku,bc,qr,Qi,yu,kc,Fr,wu,yc,hs,wc,de,$u,ed,xu,zu,td,ju,Eu,nd,qu,Fu,od,Mu,Cu,sd,Pu,Ou,ad,Nu,Au,rd,Lu,Iu,$c,Rt,Du,id,Su,Gu,dd,Uu,Wu,xc,Te,Bu,ld,Ru,Hu,cd,Vu,Ku,pd,Yu,Zu,hd,Ju,Xu,us,Qu,em,ud,tm,nm,zc,ms,jc,Mr,om,Ec,Cr,fs,sm,md,am,rm,qc,Ht,im,_s,dm,lm,gs,cm,pm,Fc,Sn,hm,fd,um,mm,Mc,Pr,Cc,nn,Gn,_d,Ts,fm,gd,_m,Pc,xt,gm,Or,Tm,vm,vs,bm,km,bs,ym,wm,Oc,ks,Nc,lt,$m,Td,xm,zm,vd,jm,Em,Nr,qm,Fm,bd,Mm,Cm,Ac,Ar,Pm,Lc,ys,Ic,Lr,Om,Dc,ws,Sc,Ir,Gc,on,Un,kd,$s,Nm,yd,Am,Uc,zt,Lm,xs,Im,Dm,wd,Sm,Gm,$d,Um,Wm,Wc,sn,Wn,xd,zs,Bm,zd,Rm,Bc,Dr,Hm,Rc,Bn,jd,an,Vm,js,Km,Ym,Es,Zm,Jm,Xm,Ed,ot,Qm,qs,ef,tf,Fs,nf,of,Ms,sf,af,Cs,rf,df,Ps,lf,cf,Hc,rn,Rn,qd,Os,pf,Fd,hf,Vc,St,Ns,uf,Gt,mf,Sr,ff,_f,Gr,gf,Tf,As,vf,bf,kf,dn,yf,Ur,wf,$f,Wr,xf,zf,Kc,ln,Hn,Md,Ls,jf,Cd,Ef,Yc,he,Is,qf,Ds,Ff,Ss,Mf,Cf,Pf,Gs,Of,Br,Nf,Af,Lf,Vt,Us,If,Pd,Df,Sf,Ws,Rr,Gf,Od,Uf,Wf,Hr,Bf,Nd,Rf,Hf,Vn,Bs,Vf,Rs,Kf,Ad,Yf,Zf,Jf,Kn,Hs,Xf,Ld,Qf,e_,Vr,Vs,Zc,cn,Yn,Id,Ks,t_,Dd,n_,Jc,st,Ys,o_,pn,s_,Sd,a_,r_,Zs,i_,d_,l_,Js,c_,Kr,p_,h_,u_,Kt,Xs,m_,Gd,f_,__,Qs,Yr,g_,Ud,T_,v_,Zr,b_,Wd,k_,y_,Zn,ea,w_,Bd,$_,Xc,hn,Jn,Rd,ta,x_,Hd,z_,Qc,oe,na,j_,Vd,E_,q_,oa,F_,sa,M_,C_,P_,aa,O_,Jr,N_,A_,L_,ra,I_,ia,D_,S_,G_,jt,da,U_,un,W_,Xr,B_,R_,Kd,H_,V_,K_,Xn,Y_,Qn,Z_,Et,la,J_,Yd,X_,Q_,Zd,eg,tg,eo,ng,Yt,ca,og,Jd,sg,ag,to,ep,mn,no,Xd,pa,rg,Qd,ig,tp,se,ha,dg,ua,lg,el,cg,pg,hg,ma,ug,fa,mg,fg,_g,_a,gg,Qr,Tg,vg,bg,ga,kg,Ta,yg,wg,$g,qt,va,xg,fn,zg,ei,jg,Eg,tl,qg,Fg,Mg,oo,Cg,so,Pg,Ft,ba,Og,nl,Ng,Ag,ol,Lg,Ig,ao,Dg,Zt,ka,Sg,sl,Gg,Ug,ro,np,_n,io,al,ya,Wg,rl,Bg,op,ae,wa,Rg,il,Hg,Vg,$a,Kg,xa,Yg,Zg,Jg,za,Xg,ti,Qg,eT,tT,ja,nT,Ea,oT,sT,aT,Mt,qa,rT,gn,iT,ni,dT,lT,dl,cT,pT,hT,lo,uT,co,mT,Ct,Fa,fT,ll,_T,gT,cl,TT,vT,po,bT,Jt,Ma,kT,pl,yT,wT,ho,sp,Tn,uo,hl,Ca,$T,ul,xT,ap,ue,Pa,zT,ml,jT,ET,Oa,qT,Na,FT,MT,CT,Aa,PT,oi,OT,NT,AT,La,LT,Ia,IT,DT,ST,mo,GT,Pt,Da,UT,vn,WT,si,BT,RT,fl,HT,VT,KT,fo,YT,_o,rp,bn,go,_l,Sa,ZT,gl,JT,ip,me,Ga,XT,Ua,QT,Tl,ev,tv,nv,Wa,ov,Ba,sv,av,rv,Ra,iv,ai,dv,lv,cv,Ha,pv,Va,hv,uv,mv,To,fv,Ot,Ka,_v,kn,gv,ri,Tv,vv,vl,bv,kv,yv,vo,wv,bo,dp,yn,ko,bl,Ya,$v,kl,xv,lp,fe,Za,zv,yl,jv,Ev,Ja,qv,Xa,Fv,Mv,Cv,Qa,Pv,ii,Ov,Nv,Av,er,Lv,tr,Iv,Dv,Sv,yo,Gv,Nt,nr,Uv,wn,Wv,di,Bv,Rv,wl,Hv,Vv,Kv,wo,Yv,$o,cp,$n,xo,$l,or,Zv,xl,Jv,pp,_t,sr,Xv,At,ar,Qv,xn,eb,zl,tb,nb,jl,ob,sb,ab,zo,rb,jo,ib,Eo,rr,db,qo,lb,Fo,ir,cb,Mo,hp,zn,Co,El,dr,pb,ql,hb,up,gt,lr,ub,Lt,cr,mb,jn,fb,Fl,_b,gb,Ml,Tb,vb,bb,Po,kb,Oo,yb,No,pr,wb,Ao,$b,Lo,hr,xb,Io,mp,En,Do,Cl,ur,zb,Pl,jb,fp,qn,mr,Eb,Xt,fr,qb,Fn,Fb,li,Mb,Cb,Ol,Pb,Ob,Nb,So,_p;return d=new ve({}),E=new ve({}),ls=new ve({}),cs=new H({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
<span class="hljs-number">3.7837</span>`}}),hs=new H({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
<span class="hljs-number">0.2542</span>`}}),ms=new H({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration
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
<span class="hljs-number">0.188</span>`}}),Ts=new ve({}),ks=new H({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
Das Haus ist wunderbar.`}}),ys=new H({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
[<span class="hljs-string">&#x27;Das Haus ist wunderbar.&#x27;</span>, <span class="hljs-string">&#x27;Ich arbeite gerne in NYC.&#x27;</span>]`}}),ws=new H({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
[<span class="hljs-string">&#x27;&lt;pad&gt; &lt;extra_id_0&gt; park offers&lt;extra_id_1&gt; the&lt;extra_id_2&gt; park.&lt;/s&gt;&#x27;</span>]`}}),$s=new ve({}),zs=new ve({}),Os=new ve({}),Ns=new P({props:{name:"class transformers.T5Config",anchor:"transformers.T5Config",parameters:[{name:"vocab_size",val:" = 32128"},{name:"d_model",val:" = 512"},{name:"d_kv",val:" = 64"},{name:"d_ff",val:" = 2048"},{name:"num_layers",val:" = 6"},{name:"num_decoder_layers",val:" = None"},{name:"num_heads",val:" = 8"},{name:"relative_attention_num_buckets",val:" = 32"},{name:"relative_attention_max_distance",val:" = 128"},{name:"dropout_rate",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_factor",val:" = 1.0"},{name:"feed_forward_proj",val:" = 'relu'"},{name:"is_encoder_decoder",val:" = True"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"eos_token_id",val:" = 1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.T5Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32128) &#x2014;
Vocabulary size of the T5 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5Model">T5Model</a> or <a href="/docs/transformers/v4.22.0/en/model_doc/t5#transformers.TFT5Model">TFT5Model</a>.`,name:"vocab_size"},{anchor:"transformers.T5Config.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/configuration_t5.py#L34"}}),Ls=new ve({}),Is=new P({props:{name:"class transformers.T5Tokenizer",anchor:"transformers.T5Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.T5Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/tokenization_t5.py#L55"}}),Us=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/tokenization_t5.py#L249",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Bs=new P({props:{name:"get_special_tokens_mask",anchor:"transformers.T5Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/tokenization_t5.py#L188",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Hs=new P({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/tokenization_t5.py#L227",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Vs=new P({props:{name:"save_vocabulary",anchor:"transformers.T5Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/tokenization_t5.py#L324"}}),Ks=new ve({}),Ys=new P({props:{name:"class transformers.T5TokenizerFast",anchor:"transformers.T5TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.T5TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/tokenization_t5_fast.py#L65"}}),Xs=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/tokenization_t5_fast.py#L191",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ea=new P({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/tokenization_t5_fast.py#L217",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ta=new ve({}),na=new P({props:{name:"class transformers.T5Model",anchor:"transformers.T5Model",parameters:[{name:"config",val:": T5Config"}],parametersDescription:[{anchor:"transformers.T5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/modeling_t5.py#L1274"}}),da=new P({props:{name:"forward",anchor:"transformers.T5Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.T5Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5Model.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/modeling_t5.py#L1350",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xn=new Dt({props:{$$slots:{default:[O5]},$$scope:{ctx:j}}}),Qn=new be({props:{anchor:"transformers.T5Model.forward.example",$$slots:{default:[N5]},$$scope:{ctx:j}}}),la=new P({props:{name:"parallelize",anchor:"transformers.T5Model.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.T5Model.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/modeling_t5.py#L1306"}}),eo=new be({props:{anchor:"transformers.T5Model.parallelize.example",$$slots:{default:[A5]},$$scope:{ctx:j}}}),ca=new P({props:{name:"deparallelize",anchor:"transformers.T5Model.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/modeling_t5.py#L1318"}}),to=new be({props:{anchor:"transformers.T5Model.deparallelize.example",$$slots:{default:[L5]},$$scope:{ctx:j}}}),pa=new ve({}),ha=new P({props:{name:"class transformers.T5ForConditionalGeneration",anchor:"transformers.T5ForConditionalGeneration",parameters:[{name:"config",val:": T5Config"}],parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/modeling_t5.py#L1466"}}),va=new P({props:{name:"forward",anchor:"transformers.T5ForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5ForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.T5ForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[-100, 0, ..., config.vocab_size - 1]</code>. All labels set to <code>-100</code> are ignored (masked), the loss is only computed for
labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/modeling_t5.py#L1547",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),oo=new Dt({props:{$$slots:{default:[I5]},$$scope:{ctx:j}}}),so=new be({props:{anchor:"transformers.T5ForConditionalGeneration.forward.example",$$slots:{default:[D5]},$$scope:{ctx:j}}}),ba=new P({props:{name:"parallelize",anchor:"transformers.T5ForConditionalGeneration.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/modeling_t5.py#L1503"}}),ao=new be({props:{anchor:"transformers.T5ForConditionalGeneration.parallelize.example",$$slots:{default:[S5]},$$scope:{ctx:j}}}),ka=new P({props:{name:"deparallelize",anchor:"transformers.T5ForConditionalGeneration.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/modeling_t5.py#L1516"}}),ro=new be({props:{anchor:"transformers.T5ForConditionalGeneration.deparallelize.example",$$slots:{default:[G5]},$$scope:{ctx:j}}}),ya=new ve({}),wa=new P({props:{name:"class transformers.T5EncoderModel",anchor:"transformers.T5EncoderModel",parameters:[{name:"config",val:": T5Config"}],parametersDescription:[{anchor:"transformers.T5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/modeling_t5.py#L1760"}}),qa=new P({props:{name:"forward",anchor:"transformers.T5EncoderModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.T5EncoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/modeling_t5.py#L1818",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),lo=new Dt({props:{$$slots:{default:[U5]},$$scope:{ctx:j}}}),co=new be({props:{anchor:"transformers.T5EncoderModel.forward.example",$$slots:{default:[W5]},$$scope:{ctx:j}}}),Fa=new P({props:{name:"parallelize",anchor:"transformers.T5EncoderModel.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.T5EncoderModel.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/modeling_t5.py#L1781"}}),po=new be({props:{anchor:"transformers.T5EncoderModel.parallelize.example",$$slots:{default:[B5]},$$scope:{ctx:j}}}),Ma=new P({props:{name:"deparallelize",anchor:"transformers.T5EncoderModel.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/modeling_t5.py#L1792"}}),ho=new be({props:{anchor:"transformers.T5EncoderModel.deparallelize.example",$$slots:{default:[R5]},$$scope:{ctx:j}}}),Ca=new ve({}),Pa=new P({props:{name:"class transformers.TFT5Model",anchor:"transformers.TFT5Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFT5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/modeling_tf_t5.py#L1123"}}),mo=new Dt({props:{$$slots:{default:[H5]},$$scope:{ctx:j}}}),Da=new P({props:{name:"call",anchor:"transformers.TFT5Model.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFT5Model.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFT5Model.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/modeling_tf_t5.py#L1151",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),fo=new Dt({props:{$$slots:{default:[V5]},$$scope:{ctx:j}}}),_o=new be({props:{anchor:"transformers.TFT5Model.call.example",$$slots:{default:[K5]},$$scope:{ctx:j}}}),Sa=new ve({}),Ga=new P({props:{name:"class transformers.TFT5ForConditionalGeneration",anchor:"transformers.TFT5ForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/modeling_tf_t5.py#L1275"}}),To=new Dt({props:{$$slots:{default:[Y5]},$$scope:{ctx:j}}}),Ka=new P({props:{name:"call",anchor:"transformers.TFT5ForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFT5ForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFT5ForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/modeling_tf_t5.py#L1331",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),vo=new Dt({props:{$$slots:{default:[Z5]},$$scope:{ctx:j}}}),bo=new be({props:{anchor:"transformers.TFT5ForConditionalGeneration.call.example",$$slots:{default:[J5]},$$scope:{ctx:j}}}),Ya=new ve({}),Za=new P({props:{name:"class transformers.TFT5EncoderModel",anchor:"transformers.TFT5EncoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFT5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/modeling_tf_t5.py#L1554"}}),yo=new Dt({props:{$$slots:{default:[X5]},$$scope:{ctx:j}}}),nr=new P({props:{name:"call",anchor:"transformers.TFT5EncoderModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFT5EncoderModel.call.inputs",description:`<strong>inputs</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFT5EncoderModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/modeling_tf_t5.py#L1578",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),wo=new Dt({props:{$$slots:{default:[Q5]},$$scope:{ctx:j}}}),$o=new be({props:{anchor:"transformers.TFT5EncoderModel.call.example",$$slots:{default:[ew]},$$scope:{ctx:j}}}),or=new ve({}),sr=new P({props:{name:"class transformers.FlaxT5Model",anchor:"transformers.FlaxT5Model",parameters:[{name:"config",val:": T5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/modeling_flax_t5.py#L1367"}}),ar=new P({props:{name:"__call__",anchor:"transformers.FlaxT5Model.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5Model.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5Model.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5Model.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/modeling_flax_t5.py#L987",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),zo=new Dt({props:{$$slots:{default:[tw]},$$scope:{ctx:j}}}),jo=new be({props:{anchor:"transformers.FlaxT5Model.__call__.example",$$slots:{default:[nw]},$$scope:{ctx:j}}}),rr=new P({props:{name:"encode",anchor:"transformers.FlaxT5Model.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5Model.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/modeling_flax_t5.py#L1073",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qo=new be({props:{anchor:"transformers.FlaxT5Model.encode.example",$$slots:{default:[ow]},$$scope:{ctx:j}}}),ir=new P({props:{name:"decode",anchor:"transformers.FlaxT5Model.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5Model.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/modeling_flax_t5.py#L1131",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Mo=new be({props:{anchor:"transformers.FlaxT5Model.decode.example",$$slots:{default:[sw]},$$scope:{ctx:j}}}),dr=new ve({}),lr=new P({props:{name:"class transformers.FlaxT5ForConditionalGeneration",anchor:"transformers.FlaxT5ForConditionalGeneration",parameters:[{name:"config",val:": T5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/modeling_flax_t5.py#L1606"}}),cr=new P({props:{name:"__call__",anchor:"transformers.FlaxT5ForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/modeling_flax_t5.py#L987",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Po=new Dt({props:{$$slots:{default:[aw]},$$scope:{ctx:j}}}),Oo=new be({props:{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.example",$$slots:{default:[rw]},$$scope:{ctx:j}}}),pr=new P({props:{name:"encode",anchor:"transformers.FlaxT5ForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/modeling_flax_t5.py#L1073",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ao=new be({props:{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.example",$$slots:{default:[iw]},$$scope:{ctx:j}}}),hr=new P({props:{name:"decode",anchor:"transformers.FlaxT5ForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/modeling_flax_t5.py#L1609",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Io=new be({props:{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.example",$$slots:{default:[dw]},$$scope:{ctx:j}}}),ur=new ve({}),mr=new P({props:{name:"class transformers.FlaxT5EncoderModel",anchor:"transformers.FlaxT5EncoderModel",parameters:[{name:"config",val:": T5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/modeling_flax_t5.py#L1456"}}),fr=new P({props:{name:"__call__",anchor:"transformers.FlaxT5EncoderModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5EncoderModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/t5/modeling_flax_t5.py#L1459"}}),So=new Dt({props:{$$slots:{default:[lw]},$$scope:{ctx:j}}}),{c(){p=a("meta"),v=l(),g=a("h1"),_=a("a"),T=a("span"),b(d.$$.fragment),u=l(),q=a("span"),Ge=o("T5"),qe=l(),S=a("h2"),re=a("a"),ie=a("span"),b(E.$$.fragment),Ue=l(),V=a("span"),We=o("Overview"),Fe=l(),G=a("p"),Be=o("The T5 model was presented in "),le=a("a"),J=o("Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),Re=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu.`),Me=l(),U=a("p"),He=o("The abstract from the paper is the following:"),Ce=l(),W=a("p"),ye=a("em"),Ve=o(`Transfer learning, where a model is first pre-trained on a data-rich task before being fine-tuned on a downstream
task, has emerged as a powerful technique in natural language processing (NLP). The effectiveness of transfer learning
has given rise to a diversity of approaches, methodology, and practice. In this paper, we explore the landscape of
transfer learning techniques for NLP by introducing a unified framework that converts every language problem into a
text-to-text format. Our systematic study compares pretraining objectives, architectures, unlabeled datasets, transfer
approaches, and other factors on dozens of language understanding tasks. By combining the insights from our exploration
with scale and our new \u201CColossal Clean Crawled Corpus\u201D, we achieve state-of-the-art results on many benchmarks covering
summarization, question answering, text classification, and more. To facilitate future work on transfer learning for
NLP, we release our dataset, pre-trained models, and code.`),ce=l(),C=a("p"),O=o("Tips:"),Pe=l(),D=a("ul"),we=a("li"),X=a("p"),Q=o(`T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which
each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box by prepending a
different prefix to the input corresponding to each task, e.g., for translation: `),$e=a("em"),Ke=o("translate English to German: \u2026"),N=o(`,
for summarization: `),xe=a("em"),ee=o("summarize: \u2026"),Ye=o("."),Ze=l(),K=a("li"),ze=a("p"),Je=o("T5 uses relative scalar embeddings. Encoder input padding can be done on the left and on the right."),B=l(),je=a("li"),I=a("p"),Xe=o("See the "),te=a("a"),A=o("training"),Qe=o(", "),L=a("a"),et=o("inference"),tt=o(" and "),z=a("a"),F=o("scripts"),vt=o(" sections below for all details regarding usage."),pe=l(),nt=a("p"),bt=o("T5 comes in different sizes:"),M=l(),Y=a("ul"),at=a("li"),rt=a("p"),Oe=a("a"),kt=o("t5-small"),R=l(),Z=a("li"),it=a("p"),Ne=a("a"),ne=o("t5-base"),yt=l(),dt=a("li"),Ee=a("p"),Ae=a("a"),_e=o("t5-large"),wt=l(),Pi=a("li"),Oi=a("p"),ss=a("a"),vh=o("t5-3b"),bh=l(),Ni=a("li"),vr=a("p"),as=a("a"),kh=o("t5-11b"),yh=o("."),ic=l(),br=a("p"),wh=o("Based on the original T5 model, Google has released some follow-up works:"),dc=l(),Wt=a("ul"),Ai=a("li"),Pn=a("p"),Li=a("strong"),$h=o("T5v1.1"),xh=o(`: T5v1.1 is an improved version of T5 with some architectural tweaks, and is pre-trained on C4 only without
mixing in the supervised tasks. Refer to the documentation of T5v1.1 which can be found `),kr=a("a"),zh=o("here"),jh=o("."),Eh=l(),Ii=a("li"),On=a("p"),Di=a("strong"),qh=o("mT5"),Fh=o(`: mT5 is a multilingual T5 model. It is pre-trained on the mC4 corpus, which includes 101 languages. Refer to
the documentation of mT5 which can be found `),yr=a("a"),Mh=o("here"),Ch=o("."),Ph=l(),Si=a("li"),Nn=a("p"),Gi=a("strong"),Oh=o("byT5"),Nh=o(`: byT5 is a T5 model pre-trained on byte sequences rather than SentencePiece subword token sequences. Refer
to the documentation of byT5 which can be found `),wr=a("a"),Ah=o("here"),Lh=o("."),lc=l(),An=a("p"),Ih=o("All checkpoints can be found on the "),rs=a("a"),Dh=o("hub"),Sh=o("."),cc=l(),Bt=a("p"),Gh=o("This model was contributed by "),is=a("a"),Uh=o("thomwolf"),Wh=o(". The original code can be found "),ds=a("a"),Bh=o("here"),Rh=o("."),pc=l(),$r=a("a"),hc=l(),tn=a("h2"),Ln=a("a"),Ui=a("span"),b(ls.$$.fragment),Hh=l(),Wi=a("span"),Vh=o("Training"),uc=l(),$t=a("p"),Kh=o(`T5 is an encoder-decoder model and converts all NLP problems into a text-to-text format. It is trained using teacher
forcing. This means that for training, we always need an input sequence and a corresponding target sequence. The input
sequence is fed to the model using `),Bi=a("code"),Yh=o("input_ids"),Zh=o(`. The target sequence is shifted to the right, i.e., prepended by a
start-sequence token and fed to the decoder using the `),Ri=a("code"),Jh=o("decoder_input_ids"),Xh=o(`. In teacher-forcing style, the target
sequence is then appended by the EOS token and corresponds to the `),Hi=a("code"),Qh=o("labels"),eu=o(`. The PAD token is hereby used as the
start-sequence token. T5 can be trained / fine-tuned both in a supervised and unsupervised fashion.`),mc=l(),In=a("p"),tu=o("One can use "),xr=a("a"),nu=o("T5ForConditionalGeneration"),ou=o(` (or the Tensorflow/Flax variant), which includes the
language modeling head on top of the decoder.`),fc=l(),zr=a("ul"),Vi=a("li"),su=o("Unsupervised denoising training"),_c=l(),ge=a("p"),au=o("In this setup, spans of the input sequence are masked by so-called sentinel tokens ("),Ki=a("em"),ru=o("a.k.a"),iu=o(` unique mask tokens) and
the output sequence is formed as a concatenation of the same sentinel tokens and the `),Yi=a("em"),du=o("real"),lu=o(` masked tokens. Each
sentinel token represents a unique mask token for this sentence and should start with `),Zi=a("code"),cu=o("<extra_id_0>"),pu=o(`,
`),Ji=a("code"),hu=o("<extra_id_1>"),uu=o(", \u2026 up to "),Xi=a("code"),mu=o("<extra_id_99>"),fu=o(`. As a default, 100 sentinel tokens are available in
`),jr=a("a"),_u=o("T5Tokenizer"),gu=o("."),gc=l(),Er=a("p"),Tu=o(`For instance, the sentence \u201CThe cute dog walks in the park\u201D with the masks put on \u201Ccute dog\u201D and \u201Cthe\u201D should be
processed as follows:`),Tc=l(),b(cs.$$.fragment),vc=l(),Dn=a("p"),vu=o("If you\u2019re interested in pre-training T5 on a new corpus, check out the "),ps=a("a"),bu=o("run_t5_mlm_flax.py"),ku=o(` script in the Examples
directory.`),bc=l(),qr=a("ul"),Qi=a("li"),yu=o("Supervised training"),kc=l(),Fr=a("p"),wu=o(`In this setup, the input sequence and output sequence are a standard sequence-to-sequence input-output mapping.
Suppose that we want to fine-tune the model for translation for example, and we have a training example: the input
sequence \u201CThe house is wonderful.\u201D and output sequence \u201CDas Haus ist wunderbar.\u201D, then they should be prepared for
the model as follows:`),yc=l(),b(hs.$$.fragment),wc=l(),de=a("p"),$u=o("As you can see, only 2 inputs are required for the model in order to compute a loss: "),ed=a("code"),xu=o("input_ids"),zu=o(` (which are the
`),td=a("code"),ju=o("input_ids"),Eu=o(" of the encoded input sequence) and "),nd=a("code"),qu=o("labels"),Fu=o(" (which are the "),od=a("code"),Mu=o("input_ids"),Cu=o(` of the encoded
target sequence). The model will automatically create the `),sd=a("code"),Pu=o("decoder_input_ids"),Ou=o(" based on the "),ad=a("code"),Nu=o("labels"),Au=o(`, by
shifting them one position to the right and prepending the `),rd=a("code"),Lu=o("config.decoder_start_token_id"),Iu=o(`, which for T5 is
equal to 0 (i.e. the id of the pad token). Also note the task prefix: we prepend the input sequence with \u2018translate
English to German: \u2019 before encoding it. This will help in improving the performance, as this task prefix was used
during T5\u2019s pre-training.`),$c=l(),Rt=a("p"),Du=o(`However, the example above only shows a single training example. In practice, one trains deep learning models in
batches. This entails that we must pad/truncate examples to the same length. For encoder-decoder models, one
typically defines a `),id=a("code"),Su=o("max_source_length"),Gu=o(" and "),dd=a("code"),Uu=o("max_target_length"),Wu=o(`, which determine the maximum length of the
input and output sequences respectively (otherwise they are truncated). These should be carefully set depending on
the task.`),xc=l(),Te=a("p"),Bu=o("In addition, we must make sure that padding token id\u2019s of the "),ld=a("code"),Ru=o("labels"),Hu=o(` are not taken into account by the loss
function. In PyTorch and Tensorflow, this can be done by replacing them with -100, which is the `),cd=a("code"),Vu=o("ignore_index"),Ku=o(`
of the `),pd=a("code"),Yu=o("CrossEntropyLoss"),Zu=o(". In Flax, one can use the "),hd=a("code"),Ju=o("decoder_attention_mask"),Xu=o(` to ignore padded tokens from
the loss (see the `),us=a("a"),Qu=o("Flax summarization script"),em=o(` for details). We also pass
`),ud=a("code"),tm=o("attention_mask"),nm=o(` as additional input to the model, which makes sure that padding tokens of the inputs are
ignored. The code example below illustrates all of this.`),zc=l(),b(ms.$$.fragment),jc=l(),Mr=a("p"),om=o("Additional training tips:"),Ec=l(),Cr=a("ul"),fs=a("li"),sm=o("T5 models need a slightly higher learning rate than the default one set in the "),md=a("code"),am=o("Trainer"),rm=o(` when using the AdamW
optimizer. Typically, 1e-4 and 3e-4 work well for most problems (classification, summarization, translation, question
answering, question generation). Note that T5 was pre-trained using the AdaFactor optimizer.`),qc=l(),Ht=a("p"),im=o("According to "),_s=a("a"),dm=o("this forum post"),lm=o(`, task prefixes matter when
(1) doing multi-task training (2) your task is similar or related to one of the supervised tasks used in T5\u2019s
pre-training mixture (see Appendix D of the `),gs=a("a"),cm=o("paper"),pm=o(` for the task prefixes
used).`),Fc=l(),Sn=a("p"),hm=o(`If training on TPU, it is recommended to pad all examples of the dataset to the same length or make use of
`),fd=a("em"),um=o("pad_to_multiple_of"),mm=o(` to have a small number of predefined bucket sizes to fit all examples in. Dynamically padding
batches to the longest example is not recommended on TPU as it triggers a recompilation for every batch shape that is
encountered during training thus significantly slowing down the training. only padding up to the longest example in a
batch) leads to very slow training on TPU.`),Mc=l(),Pr=a("a"),Cc=l(),nn=a("h2"),Gn=a("a"),_d=a("span"),b(Ts.$$.fragment),fm=l(),gd=a("span"),_m=o("Inference"),Pc=l(),xt=a("p"),gm=o("At inference time, it is recommended to use "),Or=a("a"),Tm=o("generate()"),vm=o(`. This
method takes care of encoding the input and feeding the encoded hidden states via cross-attention layers to the decoder
and auto-regressively generates the decoder output. Check out `),vs=a("a"),bm=o("this blog post"),km=o(` to know all the details about generating text with Transformers.
There\u2019s also `),bs=a("a"),ym=o("this blog post"),wm=o(` which explains how
generation works in general in encoder-decoder models.`),Oc=l(),b(ks.$$.fragment),Nc=l(),lt=a("p"),$m=o("Note that T5 uses the "),Td=a("code"),xm=o("pad_token_id"),zm=o(" as the "),vd=a("code"),jm=o("decoder_start_token_id"),Em=o(`, so when doing generation without using
`),Nr=a("a"),qm=o("generate()"),Fm=o(", make sure you start it with the "),bd=a("code"),Mm=o("pad_token_id"),Cm=o("."),Ac=l(),Ar=a("p"),Pm=o("The example above only shows a single example. You can also do batched inference, like so:"),Lc=l(),b(ys.$$.fragment),Ic=l(),Lr=a("p"),Om=o(`Because T5 has been trained with the span-mask denoising objective,
it can be used to predict the sentinel (masked-out) tokens during inference.
The predicted tokens will then be placed between the sentinel tokens.`),Dc=l(),b(ws.$$.fragment),Sc=l(),Ir=a("a"),Gc=l(),on=a("h2"),Un=a("a"),kd=a("span"),b($s.$$.fragment),Nm=l(),yd=a("span"),Am=o("Performance"),Uc=l(),zt=a("p"),Lm=o("If you\u2019d like a faster training and inference performance, install "),xs=a("a"),Im=o("apex"),Dm=o(" and then the model will automatically use "),wd=a("code"),Sm=o("apex.normalization.FusedRMSNorm"),Gm=o(" instead of "),$d=a("code"),Um=o("T5LayerNorm"),Wm=o(". The former uses an optimized fused kernel which is several times faster than the latter."),Wc=l(),sn=a("h2"),Wn=a("a"),xd=a("span"),b(zs.$$.fragment),Bm=l(),zd=a("span"),Rm=o("Example scripts"),Bc=l(),Dr=a("p"),Hm=o("T5 is supported by several example scripts, both for pre-training and fine-tuning."),Rc=l(),Bn=a("ul"),jd=a("li"),an=a("p"),Vm=o("pre-training: the "),js=a("a"),Km=o("run_t5_mlm_flax.py"),Ym=o(`
script allows you to further pre-train T5 or pre-train T5 from scratch on your own data. The `),Es=a("a"),Zm=o("t5_tokenizer_model.py"),Jm=o(`
script allows you to further train a T5 tokenizer or train a T5 Tokenizer from scratch on your own data. Note that
Flax (a neural network library on top of JAX) is particularly useful to train on TPU hardware.`),Xm=l(),Ed=a("li"),ot=a("p"),Qm=o("fine-tuning: T5 is supported by the official summarization scripts ("),qs=a("a"),ef=o("PyTorch"),tf=o(", "),Fs=a("a"),nf=o("Tensorflow"),of=o(", and "),Ms=a("a"),sf=o("Flax"),af=o(`) and translation scripts
(`),Cs=a("a"),rf=o("PyTorch"),df=o(" and "),Ps=a("a"),lf=o("Tensorflow"),cf=o(`). These scripts allow
you to easily fine-tune T5 on custom data for summarization/translation.`),Hc=l(),rn=a("h2"),Rn=a("a"),qd=a("span"),b(Os.$$.fragment),pf=l(),Fd=a("span"),hf=o("T5Config"),Vc=l(),St=a("div"),b(Ns.$$.fragment),uf=l(),Gt=a("p"),mf=o("This is the configuration class to store the configuration of a "),Sr=a("a"),ff=o("T5Model"),_f=o(" or a "),Gr=a("a"),gf=o("TFT5Model"),Tf=o(`. It is used to
instantiate a T5 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the T5
`),As=a("a"),vf=o("t5-small"),bf=o(" architecture."),kf=l(),dn=a("p"),yf=o("Configuration objects inherit from "),Ur=a("a"),wf=o("PretrainedConfig"),$f=o(` and can be used to control the model outputs. Read the
documentation from `),Wr=a("a"),xf=o("PretrainedConfig"),zf=o(" for more information."),Kc=l(),ln=a("h2"),Hn=a("a"),Md=a("span"),b(Ls.$$.fragment),jf=l(),Cd=a("span"),Ef=o("T5Tokenizer"),Yc=l(),he=a("div"),b(Is.$$.fragment),qf=l(),Ds=a("p"),Ff=o("Construct a T5 tokenizer. Based on "),Ss=a("a"),Mf=o("SentencePiece"),Cf=o("."),Pf=l(),Gs=a("p"),Of=o("This tokenizer inherits from "),Br=a("a"),Nf=o("PreTrainedTokenizer"),Af=o(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Lf=l(),Vt=a("div"),b(Us.$$.fragment),If=l(),Pd=a("p"),Df=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),Sf=l(),Ws=a("ul"),Rr=a("li"),Gf=o("single sequence: "),Od=a("code"),Uf=o("X </s>"),Wf=l(),Hr=a("li"),Bf=o("pair of sequences: "),Nd=a("code"),Rf=o("A </s> B </s>"),Hf=l(),Vn=a("div"),b(Bs.$$.fragment),Vf=l(),Rs=a("p"),Kf=o(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ad=a("code"),Yf=o("prepare_for_model"),Zf=o(" method."),Jf=l(),Kn=a("div"),b(Hs.$$.fragment),Xf=l(),Ld=a("p"),Qf=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),e_=l(),Vr=a("div"),b(Vs.$$.fragment),Zc=l(),cn=a("h2"),Yn=a("a"),Id=a("span"),b(Ks.$$.fragment),t_=l(),Dd=a("span"),n_=o("T5TokenizerFast"),Jc=l(),st=a("div"),b(Ys.$$.fragment),o_=l(),pn=a("p"),s_=o("Construct a \u201Cfast\u201D T5 tokenizer (backed by HuggingFace\u2019s "),Sd=a("em"),a_=o("tokenizers"),r_=o(` library). Based on
`),Zs=a("a"),i_=o("Unigram"),d_=o("."),l_=l(),Js=a("p"),c_=o("This tokenizer inherits from "),Kr=a("a"),p_=o("PreTrainedTokenizerFast"),h_=o(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),u_=l(),Kt=a("div"),b(Xs.$$.fragment),m_=l(),Gd=a("p"),f_=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),__=l(),Qs=a("ul"),Yr=a("li"),g_=o("single sequence: "),Ud=a("code"),T_=o("X </s>"),v_=l(),Zr=a("li"),b_=o("pair of sequences: "),Wd=a("code"),k_=o("A </s> B </s>"),y_=l(),Zn=a("div"),b(ea.$$.fragment),w_=l(),Bd=a("p"),$_=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),Xc=l(),hn=a("h2"),Jn=a("a"),Rd=a("span"),b(ta.$$.fragment),x_=l(),Hd=a("span"),z_=o("T5Model"),Qc=l(),oe=a("div"),b(na.$$.fragment),j_=l(),Vd=a("p"),E_=o("The bare T5 Model transformer outputting raw hidden-states without any specific head on top."),q_=l(),oa=a("p"),F_=o("The T5 model was proposed in "),sa=a("a"),M_=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),C_=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),P_=l(),aa=a("p"),O_=o("This model inherits from "),Jr=a("a"),N_=o("PreTrainedModel"),A_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),L_=l(),ra=a("p"),I_=o("This model is also a PyTorch "),ia=a("a"),D_=o("torch.nn.Module"),S_=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),G_=l(),jt=a("div"),b(da.$$.fragment),U_=l(),un=a("p"),W_=o("The "),Xr=a("a"),B_=o("T5Model"),R_=o(" forward method, overrides the "),Kd=a("code"),H_=o("__call__"),V_=o(" special method."),K_=l(),b(Xn.$$.fragment),Y_=l(),b(Qn.$$.fragment),Z_=l(),Et=a("div"),b(la.$$.fragment),J_=l(),Yd=a("p"),X_=o("This is an experimental feature and is a subject to change at a moment\u2019s notice."),Q_=l(),Zd=a("p"),eg=o(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),tg=l(),b(eo.$$.fragment),ng=l(),Yt=a("div"),b(ca.$$.fragment),og=l(),Jd=a("p"),sg=o("Moves the model to cpu from a model parallel state."),ag=l(),b(to.$$.fragment),ep=l(),mn=a("h2"),no=a("a"),Xd=a("span"),b(pa.$$.fragment),rg=l(),Qd=a("span"),ig=o("T5ForConditionalGeneration"),tp=l(),se=a("div"),b(ha.$$.fragment),dg=l(),ua=a("p"),lg=o("T5 Model with a "),el=a("code"),cg=o("language modeling"),pg=o(" head on top."),hg=l(),ma=a("p"),ug=o("The T5 model was proposed in "),fa=a("a"),mg=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),fg=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),_g=l(),_a=a("p"),gg=o("This model inherits from "),Qr=a("a"),Tg=o("PreTrainedModel"),vg=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bg=l(),ga=a("p"),kg=o("This model is also a PyTorch "),Ta=a("a"),yg=o("torch.nn.Module"),wg=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$g=l(),qt=a("div"),b(va.$$.fragment),xg=l(),fn=a("p"),zg=o("The "),ei=a("a"),jg=o("T5ForConditionalGeneration"),Eg=o(" forward method, overrides the "),tl=a("code"),qg=o("__call__"),Fg=o(" special method."),Mg=l(),b(oo.$$.fragment),Cg=l(),b(so.$$.fragment),Pg=l(),Ft=a("div"),b(ba.$$.fragment),Og=l(),nl=a("p"),Ng=o("This is an experimental feature and is a subject to change at a moment\u2019s notice."),Ag=l(),ol=a("p"),Lg=o(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),Ig=l(),b(ao.$$.fragment),Dg=l(),Zt=a("div"),b(ka.$$.fragment),Sg=l(),sl=a("p"),Gg=o("Moves the model to cpu from a model parallel state."),Ug=l(),b(ro.$$.fragment),np=l(),_n=a("h2"),io=a("a"),al=a("span"),b(ya.$$.fragment),Wg=l(),rl=a("span"),Bg=o("T5EncoderModel"),op=l(),ae=a("div"),b(wa.$$.fragment),Rg=l(),il=a("p"),Hg=o("The bare T5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),Vg=l(),$a=a("p"),Kg=o("The T5 model was proposed in "),xa=a("a"),Yg=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Zg=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Jg=l(),za=a("p"),Xg=o("This model inherits from "),ti=a("a"),Qg=o("PreTrainedModel"),eT=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tT=l(),ja=a("p"),nT=o("This model is also a PyTorch "),Ea=a("a"),oT=o("torch.nn.Module"),sT=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),aT=l(),Mt=a("div"),b(qa.$$.fragment),rT=l(),gn=a("p"),iT=o("The "),ni=a("a"),dT=o("T5EncoderModel"),lT=o(" forward method, overrides the "),dl=a("code"),cT=o("__call__"),pT=o(" special method."),hT=l(),b(lo.$$.fragment),uT=l(),b(co.$$.fragment),mT=l(),Ct=a("div"),b(Fa.$$.fragment),fT=l(),ll=a("p"),_T=o("This is an experimental feature and is a subject to change at a moment\u2019s notice."),gT=l(),cl=a("p"),TT=o(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),vT=l(),b(po.$$.fragment),bT=l(),Jt=a("div"),b(Ma.$$.fragment),kT=l(),pl=a("p"),yT=o("Moves the model to cpu from a model parallel state."),wT=l(),b(ho.$$.fragment),sp=l(),Tn=a("h2"),uo=a("a"),hl=a("span"),b(Ca.$$.fragment),$T=l(),ul=a("span"),xT=o("TFT5Model"),ap=l(),ue=a("div"),b(Pa.$$.fragment),zT=l(),ml=a("p"),jT=o("The bare T5 Model transformer outputting raw hidden-stateswithout any specific head on top."),ET=l(),Oa=a("p"),qT=o("The T5 model was proposed in "),Na=a("a"),FT=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),MT=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),CT=l(),Aa=a("p"),PT=o("This model inherits from "),oi=a("a"),OT=o("TFPreTrainedModel"),NT=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),AT=l(),La=a("p"),LT=o("This model is also a "),Ia=a("a"),IT=o("tf.keras.Model"),DT=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ST=l(),b(mo.$$.fragment),GT=l(),Pt=a("div"),b(Da.$$.fragment),UT=l(),vn=a("p"),WT=o("The "),si=a("a"),BT=o("TFT5Model"),RT=o(" forward method, overrides the "),fl=a("code"),HT=o("__call__"),VT=o(" special method."),KT=l(),b(fo.$$.fragment),YT=l(),b(_o.$$.fragment),rp=l(),bn=a("h2"),go=a("a"),_l=a("span"),b(Sa.$$.fragment),ZT=l(),gl=a("span"),JT=o("TFT5ForConditionalGeneration"),ip=l(),me=a("div"),b(Ga.$$.fragment),XT=l(),Ua=a("p"),QT=o("T5 Model with a "),Tl=a("code"),ev=o("language modeling"),tv=o(" head on top."),nv=l(),Wa=a("p"),ov=o("The T5 model was proposed in "),Ba=a("a"),sv=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),av=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),rv=l(),Ra=a("p"),iv=o("This model inherits from "),ai=a("a"),dv=o("TFPreTrainedModel"),lv=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cv=l(),Ha=a("p"),pv=o("This model is also a "),Va=a("a"),hv=o("tf.keras.Model"),uv=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mv=l(),b(To.$$.fragment),fv=l(),Ot=a("div"),b(Ka.$$.fragment),_v=l(),kn=a("p"),gv=o("The "),ri=a("a"),Tv=o("TFT5ForConditionalGeneration"),vv=o(" forward method, overrides the "),vl=a("code"),bv=o("__call__"),kv=o(" special method."),yv=l(),b(vo.$$.fragment),wv=l(),b(bo.$$.fragment),dp=l(),yn=a("h2"),ko=a("a"),bl=a("span"),b(Ya.$$.fragment),$v=l(),kl=a("span"),xv=o("TFT5EncoderModel"),lp=l(),fe=a("div"),b(Za.$$.fragment),zv=l(),yl=a("p"),jv=o("The bare T5 Model transformer outputting encoder\u2019s raw hidden-stateswithout any specific head on top."),Ev=l(),Ja=a("p"),qv=o("The T5 model was proposed in "),Xa=a("a"),Fv=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Mv=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Cv=l(),Qa=a("p"),Pv=o("This model inherits from "),ii=a("a"),Ov=o("TFPreTrainedModel"),Nv=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Av=l(),er=a("p"),Lv=o("This model is also a "),tr=a("a"),Iv=o("tf.keras.Model"),Dv=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sv=l(),b(yo.$$.fragment),Gv=l(),Nt=a("div"),b(nr.$$.fragment),Uv=l(),wn=a("p"),Wv=o("The "),di=a("a"),Bv=o("TFT5EncoderModel"),Rv=o(" forward method, overrides the "),wl=a("code"),Hv=o("__call__"),Vv=o(" special method."),Kv=l(),b(wo.$$.fragment),Yv=l(),b($o.$$.fragment),cp=l(),$n=a("h2"),xo=a("a"),$l=a("span"),b(or.$$.fragment),Zv=l(),xl=a("span"),Jv=o("FlaxT5Model"),pp=l(),_t=a("div"),b(sr.$$.fragment),Xv=l(),At=a("div"),b(ar.$$.fragment),Qv=l(),xn=a("p"),eb=o("The "),zl=a("code"),tb=o("FlaxT5PreTrainedModel"),nb=o(" forward method, overrides the "),jl=a("code"),ob=o("__call__"),sb=o(" special method."),ab=l(),b(zo.$$.fragment),rb=l(),b(jo.$$.fragment),ib=l(),Eo=a("div"),b(rr.$$.fragment),db=l(),b(qo.$$.fragment),lb=l(),Fo=a("div"),b(ir.$$.fragment),cb=l(),b(Mo.$$.fragment),hp=l(),zn=a("h2"),Co=a("a"),El=a("span"),b(dr.$$.fragment),pb=l(),ql=a("span"),hb=o("FlaxT5ForConditionalGeneration"),up=l(),gt=a("div"),b(lr.$$.fragment),ub=l(),Lt=a("div"),b(cr.$$.fragment),mb=l(),jn=a("p"),fb=o("The "),Fl=a("code"),_b=o("FlaxT5PreTrainedModel"),gb=o(" forward method, overrides the "),Ml=a("code"),Tb=o("__call__"),vb=o(" special method."),bb=l(),b(Po.$$.fragment),kb=l(),b(Oo.$$.fragment),yb=l(),No=a("div"),b(pr.$$.fragment),wb=l(),b(Ao.$$.fragment),$b=l(),Lo=a("div"),b(hr.$$.fragment),xb=l(),b(Io.$$.fragment),mp=l(),En=a("h2"),Do=a("a"),Cl=a("span"),b(ur.$$.fragment),zb=l(),Pl=a("span"),jb=o("FlaxT5EncoderModel"),fp=l(),qn=a("div"),b(mr.$$.fragment),Eb=l(),Xt=a("div"),b(fr.$$.fragment),qb=l(),Fn=a("p"),Fb=o("The "),li=a("a"),Mb=o("FlaxT5EncoderModel"),Cb=o(" forward method, overrides the "),Ol=a("code"),Pb=o("__call__"),Ob=o(" special method."),Nb=l(),b(So.$$.fragment),this.h()},l(n){const f=C5('[data-svelte="svelte-1phssyn"]',document.head);p=r(f,"META",{name:!0,content:!0}),f.forEach(t),v=c(n),g=r(n,"H1",{class:!0});var _r=i(g);_=r(_r,"A",{id:!0,class:!0,href:!0});var Nl=i(_);T=r(Nl,"SPAN",{});var Al=i(T);k(d.$$.fragment,Al),Al.forEach(t),Nl.forEach(t),u=c(_r),q=r(_r,"SPAN",{});var Ll=i(q);Ge=s(Ll,"T5"),Ll.forEach(t),_r.forEach(t),qe=c(n),S=r(n,"H2",{class:!0});var gr=i(S);re=r(gr,"A",{id:!0,class:!0,href:!0});var Il=i(re);ie=r(Il,"SPAN",{});var Dl=i(ie);k(E.$$.fragment,Dl),Dl.forEach(t),Il.forEach(t),Ue=c(gr),V=r(gr,"SPAN",{});var Sl=i(V);We=s(Sl,"Overview"),Sl.forEach(t),gr.forEach(t),Fe=c(n),G=r(n,"P",{});var Tr=i(G);Be=s(Tr,"The T5 model was presented in "),le=r(Tr,"A",{href:!0,rel:!0});var Gl=i(le);J=s(Gl,"Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),Gl.forEach(t),Re=s(Tr,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu.`),Tr.forEach(t),Me=c(n),U=r(n,"P",{});var Ul=i(U);He=s(Ul,"The abstract from the paper is the following:"),Ul.forEach(t),Ce=c(n),W=r(n,"P",{});var Wl=i(W);ye=r(Wl,"EM",{});var Bl=i(ye);Ve=s(Bl,`Transfer learning, where a model is first pre-trained on a data-rich task before being fine-tuned on a downstream
task, has emerged as a powerful technique in natural language processing (NLP). The effectiveness of transfer learning
has given rise to a diversity of approaches, methodology, and practice. In this paper, we explore the landscape of
transfer learning techniques for NLP by introducing a unified framework that converts every language problem into a
text-to-text format. Our systematic study compares pretraining objectives, architectures, unlabeled datasets, transfer
approaches, and other factors on dozens of language understanding tasks. By combining the insights from our exploration
with scale and our new \u201CColossal Clean Crawled Corpus\u201D, we achieve state-of-the-art results on many benchmarks covering
summarization, question answering, text classification, and more. To facilitate future work on transfer learning for
NLP, we release our dataset, pre-trained models, and code.`),Bl.forEach(t),Wl.forEach(t),ce=c(n),C=r(n,"P",{});var Rl=i(C);O=s(Rl,"Tips:"),Rl.forEach(t),Pe=c(n),D=r(n,"UL",{});var Mn=i(D);we=r(Mn,"LI",{});var Hl=i(we);X=r(Hl,"P",{});var Cn=i(X);Q=s(Cn,`T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which
each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box by prepending a
different prefix to the input corresponding to each task, e.g., for translation: `),$e=r(Cn,"EM",{});var Vl=i($e);Ke=s(Vl,"translate English to German: \u2026"),Vl.forEach(t),N=s(Cn,`,
for summarization: `),xe=r(Cn,"EM",{});var Kl=i(xe);ee=s(Kl,"summarize: \u2026"),Kl.forEach(t),Ye=s(Cn,"."),Cn.forEach(t),Hl.forEach(t),Ze=c(Mn),K=r(Mn,"LI",{});var Yl=i(K);ze=r(Yl,"P",{});var Zl=i(ze);Je=s(Zl,"T5 uses relative scalar embeddings. Encoder input padding can be done on the left and on the right."),Zl.forEach(t),Yl.forEach(t),B=c(Mn),je=r(Mn,"LI",{});var Jl=i(je);I=r(Jl,"P",{});var Ut=i(I);Xe=s(Ut,"See the "),te=r(Ut,"A",{href:!0});var Xl=i(te);A=s(Xl,"training"),Xl.forEach(t),Qe=s(Ut,", "),L=r(Ut,"A",{href:!0});var Ql=i(L);et=s(Ql,"inference"),Ql.forEach(t),tt=s(Ut," and "),z=r(Ut,"A",{href:!0});var ec=i(z);F=s(ec,"scripts"),ec.forEach(t),vt=s(Ut," sections below for all details regarding usage."),Ut.forEach(t),Jl.forEach(t),Mn.forEach(t),pe=c(n),nt=r(n,"P",{});var tc=i(nt);bt=s(tc,"T5 comes in different sizes:"),tc.forEach(t),M=c(n),Y=r(n,"UL",{});var Tt=i(Y);at=r(Tt,"LI",{});var nc=i(at);rt=r(nc,"P",{});var oc=i(rt);Oe=r(oc,"A",{href:!0,rel:!0});var Gb=i(Oe);kt=s(Gb,"t5-small"),Gb.forEach(t),oc.forEach(t),nc.forEach(t),R=c(Tt),Z=r(Tt,"LI",{});var Ub=i(Z);it=r(Ub,"P",{});var Wb=i(it);Ne=r(Wb,"A",{href:!0,rel:!0});var Bb=i(Ne);ne=s(Bb,"t5-base"),Bb.forEach(t),Wb.forEach(t),Ub.forEach(t),yt=c(Tt),dt=r(Tt,"LI",{});var Rb=i(dt);Ee=r(Rb,"P",{});var Hb=i(Ee);Ae=r(Hb,"A",{href:!0,rel:!0});var Vb=i(Ae);_e=s(Vb,"t5-large"),Vb.forEach(t),Hb.forEach(t),Rb.forEach(t),wt=c(Tt),Pi=r(Tt,"LI",{});var Kb=i(Pi);Oi=r(Kb,"P",{});var Yb=i(Oi);ss=r(Yb,"A",{href:!0,rel:!0});var Zb=i(ss);vh=s(Zb,"t5-3b"),Zb.forEach(t),Yb.forEach(t),Kb.forEach(t),bh=c(Tt),Ni=r(Tt,"LI",{});var Jb=i(Ni);vr=r(Jb,"P",{});var Ab=i(vr);as=r(Ab,"A",{href:!0,rel:!0});var Xb=i(as);kh=s(Xb,"t5-11b"),Xb.forEach(t),yh=s(Ab,"."),Ab.forEach(t),Jb.forEach(t),Tt.forEach(t),ic=c(n),br=r(n,"P",{});var Qb=i(br);wh=s(Qb,"Based on the original T5 model, Google has released some follow-up works:"),Qb.forEach(t),dc=c(n),Wt=r(n,"UL",{});var ci=i(Wt);Ai=r(ci,"LI",{});var ek=i(Ai);Pn=r(ek,"P",{});var sc=i(Pn);Li=r(sc,"STRONG",{});var tk=i(Li);$h=s(tk,"T5v1.1"),tk.forEach(t),xh=s(sc,`: T5v1.1 is an improved version of T5 with some architectural tweaks, and is pre-trained on C4 only without
mixing in the supervised tasks. Refer to the documentation of T5v1.1 which can be found `),kr=r(sc,"A",{href:!0});var nk=i(kr);zh=s(nk,"here"),nk.forEach(t),jh=s(sc,"."),sc.forEach(t),ek.forEach(t),Eh=c(ci),Ii=r(ci,"LI",{});var ok=i(Ii);On=r(ok,"P",{});var ac=i(On);Di=r(ac,"STRONG",{});var sk=i(Di);qh=s(sk,"mT5"),sk.forEach(t),Fh=s(ac,`: mT5 is a multilingual T5 model. It is pre-trained on the mC4 corpus, which includes 101 languages. Refer to
the documentation of mT5 which can be found `),yr=r(ac,"A",{href:!0});var ak=i(yr);Mh=s(ak,"here"),ak.forEach(t),Ch=s(ac,"."),ac.forEach(t),ok.forEach(t),Ph=c(ci),Si=r(ci,"LI",{});var rk=i(Si);Nn=r(rk,"P",{});var rc=i(Nn);Gi=r(rc,"STRONG",{});var ik=i(Gi);Oh=s(ik,"byT5"),ik.forEach(t),Nh=s(rc,`: byT5 is a T5 model pre-trained on byte sequences rather than SentencePiece subword token sequences. Refer
to the documentation of byT5 which can be found `),wr=r(rc,"A",{href:!0});var dk=i(wr);Ah=s(dk,"here"),dk.forEach(t),Lh=s(rc,"."),rc.forEach(t),rk.forEach(t),ci.forEach(t),lc=c(n),An=r(n,"P",{});var gp=i(An);Ih=s(gp,"All checkpoints can be found on the "),rs=r(gp,"A",{href:!0,rel:!0});var lk=i(rs);Dh=s(lk,"hub"),lk.forEach(t),Sh=s(gp,"."),gp.forEach(t),cc=c(n),Bt=r(n,"P",{});var pi=i(Bt);Gh=s(pi,"This model was contributed by "),is=r(pi,"A",{href:!0,rel:!0});var ck=i(is);Uh=s(ck,"thomwolf"),ck.forEach(t),Wh=s(pi,". The original code can be found "),ds=r(pi,"A",{href:!0,rel:!0});var pk=i(ds);Bh=s(pk,"here"),pk.forEach(t),Rh=s(pi,"."),pi.forEach(t),pc=c(n),$r=r(n,"A",{id:!0}),i($r).forEach(t),hc=c(n),tn=r(n,"H2",{class:!0});var Tp=i(tn);Ln=r(Tp,"A",{id:!0,class:!0,href:!0});var hk=i(Ln);Ui=r(hk,"SPAN",{});var uk=i(Ui);k(ls.$$.fragment,uk),uk.forEach(t),hk.forEach(t),Hh=c(Tp),Wi=r(Tp,"SPAN",{});var mk=i(Wi);Vh=s(mk,"Training"),mk.forEach(t),Tp.forEach(t),uc=c(n),$t=r(n,"P",{});var Go=i($t);Kh=s(Go,`T5 is an encoder-decoder model and converts all NLP problems into a text-to-text format. It is trained using teacher
forcing. This means that for training, we always need an input sequence and a corresponding target sequence. The input
sequence is fed to the model using `),Bi=r(Go,"CODE",{});var fk=i(Bi);Yh=s(fk,"input_ids"),fk.forEach(t),Zh=s(Go,`. The target sequence is shifted to the right, i.e., prepended by a
start-sequence token and fed to the decoder using the `),Ri=r(Go,"CODE",{});var _k=i(Ri);Jh=s(_k,"decoder_input_ids"),_k.forEach(t),Xh=s(Go,`. In teacher-forcing style, the target
sequence is then appended by the EOS token and corresponds to the `),Hi=r(Go,"CODE",{});var gk=i(Hi);Qh=s(gk,"labels"),gk.forEach(t),eu=s(Go,`. The PAD token is hereby used as the
start-sequence token. T5 can be trained / fine-tuned both in a supervised and unsupervised fashion.`),Go.forEach(t),mc=c(n),In=r(n,"P",{});var vp=i(In);tu=s(vp,"One can use "),xr=r(vp,"A",{href:!0});var Tk=i(xr);nu=s(Tk,"T5ForConditionalGeneration"),Tk.forEach(t),ou=s(vp,` (or the Tensorflow/Flax variant), which includes the
language modeling head on top of the decoder.`),vp.forEach(t),fc=c(n),zr=r(n,"UL",{});var vk=i(zr);Vi=r(vk,"LI",{});var bk=i(Vi);su=s(bk,"Unsupervised denoising training"),bk.forEach(t),vk.forEach(t),_c=c(n),ge=r(n,"P",{});var ct=i(ge);au=s(ct,"In this setup, spans of the input sequence are masked by so-called sentinel tokens ("),Ki=r(ct,"EM",{});var kk=i(Ki);ru=s(kk,"a.k.a"),kk.forEach(t),iu=s(ct,` unique mask tokens) and
the output sequence is formed as a concatenation of the same sentinel tokens and the `),Yi=r(ct,"EM",{});var yk=i(Yi);du=s(yk,"real"),yk.forEach(t),lu=s(ct,` masked tokens. Each
sentinel token represents a unique mask token for this sentence and should start with `),Zi=r(ct,"CODE",{});var wk=i(Zi);cu=s(wk,"<extra_id_0>"),wk.forEach(t),pu=s(ct,`,
`),Ji=r(ct,"CODE",{});var $k=i(Ji);hu=s($k,"<extra_id_1>"),$k.forEach(t),uu=s(ct,", \u2026 up to "),Xi=r(ct,"CODE",{});var xk=i(Xi);mu=s(xk,"<extra_id_99>"),xk.forEach(t),fu=s(ct,`. As a default, 100 sentinel tokens are available in
`),jr=r(ct,"A",{href:!0});var zk=i(jr);_u=s(zk,"T5Tokenizer"),zk.forEach(t),gu=s(ct,"."),ct.forEach(t),gc=c(n),Er=r(n,"P",{});var jk=i(Er);Tu=s(jk,`For instance, the sentence \u201CThe cute dog walks in the park\u201D with the masks put on \u201Ccute dog\u201D and \u201Cthe\u201D should be
processed as follows:`),jk.forEach(t),Tc=c(n),k(cs.$$.fragment,n),vc=c(n),Dn=r(n,"P",{});var bp=i(Dn);vu=s(bp,"If you\u2019re interested in pre-training T5 on a new corpus, check out the "),ps=r(bp,"A",{href:!0,rel:!0});var Ek=i(ps);bu=s(Ek,"run_t5_mlm_flax.py"),Ek.forEach(t),ku=s(bp,` script in the Examples
directory.`),bp.forEach(t),bc=c(n),qr=r(n,"UL",{});var qk=i(qr);Qi=r(qk,"LI",{});var Fk=i(Qi);yu=s(Fk,"Supervised training"),Fk.forEach(t),qk.forEach(t),kc=c(n),Fr=r(n,"P",{});var Mk=i(Fr);wu=s(Mk,`In this setup, the input sequence and output sequence are a standard sequence-to-sequence input-output mapping.
Suppose that we want to fine-tune the model for translation for example, and we have a training example: the input
sequence \u201CThe house is wonderful.\u201D and output sequence \u201CDas Haus ist wunderbar.\u201D, then they should be prepared for
the model as follows:`),Mk.forEach(t),yc=c(n),k(hs.$$.fragment,n),wc=c(n),de=r(n,"P",{});var Le=i(de);$u=s(Le,"As you can see, only 2 inputs are required for the model in order to compute a loss: "),ed=r(Le,"CODE",{});var Ck=i(ed);xu=s(Ck,"input_ids"),Ck.forEach(t),zu=s(Le,` (which are the
`),td=r(Le,"CODE",{});var Pk=i(td);ju=s(Pk,"input_ids"),Pk.forEach(t),Eu=s(Le," of the encoded input sequence) and "),nd=r(Le,"CODE",{});var Ok=i(nd);qu=s(Ok,"labels"),Ok.forEach(t),Fu=s(Le," (which are the "),od=r(Le,"CODE",{});var Nk=i(od);Mu=s(Nk,"input_ids"),Nk.forEach(t),Cu=s(Le,` of the encoded
target sequence). The model will automatically create the `),sd=r(Le,"CODE",{});var Ak=i(sd);Pu=s(Ak,"decoder_input_ids"),Ak.forEach(t),Ou=s(Le," based on the "),ad=r(Le,"CODE",{});var Lk=i(ad);Nu=s(Lk,"labels"),Lk.forEach(t),Au=s(Le,`, by
shifting them one position to the right and prepending the `),rd=r(Le,"CODE",{});var Ik=i(rd);Lu=s(Ik,"config.decoder_start_token_id"),Ik.forEach(t),Iu=s(Le,`, which for T5 is
equal to 0 (i.e. the id of the pad token). Also note the task prefix: we prepend the input sequence with \u2018translate
English to German: \u2019 before encoding it. This will help in improving the performance, as this task prefix was used
during T5\u2019s pre-training.`),Le.forEach(t),$c=c(n),Rt=r(n,"P",{});var hi=i(Rt);Du=s(hi,`However, the example above only shows a single training example. In practice, one trains deep learning models in
batches. This entails that we must pad/truncate examples to the same length. For encoder-decoder models, one
typically defines a `),id=r(hi,"CODE",{});var Dk=i(id);Su=s(Dk,"max_source_length"),Dk.forEach(t),Gu=s(hi," and "),dd=r(hi,"CODE",{});var Sk=i(dd);Uu=s(Sk,"max_target_length"),Sk.forEach(t),Wu=s(hi,`, which determine the maximum length of the
input and output sequences respectively (otherwise they are truncated). These should be carefully set depending on
the task.`),hi.forEach(t),xc=c(n),Te=r(n,"P",{});var pt=i(Te);Bu=s(pt,"In addition, we must make sure that padding token id\u2019s of the "),ld=r(pt,"CODE",{});var Gk=i(ld);Ru=s(Gk,"labels"),Gk.forEach(t),Hu=s(pt,` are not taken into account by the loss
function. In PyTorch and Tensorflow, this can be done by replacing them with -100, which is the `),cd=r(pt,"CODE",{});var Uk=i(cd);Vu=s(Uk,"ignore_index"),Uk.forEach(t),Ku=s(pt,`
of the `),pd=r(pt,"CODE",{});var Wk=i(pd);Yu=s(Wk,"CrossEntropyLoss"),Wk.forEach(t),Zu=s(pt,". In Flax, one can use the "),hd=r(pt,"CODE",{});var Bk=i(hd);Ju=s(Bk,"decoder_attention_mask"),Bk.forEach(t),Xu=s(pt,` to ignore padded tokens from
the loss (see the `),us=r(pt,"A",{href:!0,rel:!0});var Rk=i(us);Qu=s(Rk,"Flax summarization script"),Rk.forEach(t),em=s(pt,` for details). We also pass
`),ud=r(pt,"CODE",{});var Hk=i(ud);tm=s(Hk,"attention_mask"),Hk.forEach(t),nm=s(pt,` as additional input to the model, which makes sure that padding tokens of the inputs are
ignored. The code example below illustrates all of this.`),pt.forEach(t),zc=c(n),k(ms.$$.fragment,n),jc=c(n),Mr=r(n,"P",{});var Vk=i(Mr);om=s(Vk,"Additional training tips:"),Vk.forEach(t),Ec=c(n),Cr=r(n,"UL",{});var Kk=i(Cr);fs=r(Kk,"LI",{});var kp=i(fs);sm=s(kp,"T5 models need a slightly higher learning rate than the default one set in the "),md=r(kp,"CODE",{});var Yk=i(md);am=s(Yk,"Trainer"),Yk.forEach(t),rm=s(kp,` when using the AdamW
optimizer. Typically, 1e-4 and 3e-4 work well for most problems (classification, summarization, translation, question
answering, question generation). Note that T5 was pre-trained using the AdaFactor optimizer.`),kp.forEach(t),Kk.forEach(t),qc=c(n),Ht=r(n,"P",{});var ui=i(Ht);im=s(ui,"According to "),_s=r(ui,"A",{href:!0,rel:!0});var Zk=i(_s);dm=s(Zk,"this forum post"),Zk.forEach(t),lm=s(ui,`, task prefixes matter when
(1) doing multi-task training (2) your task is similar or related to one of the supervised tasks used in T5\u2019s
pre-training mixture (see Appendix D of the `),gs=r(ui,"A",{href:!0,rel:!0});var Jk=i(gs);cm=s(Jk,"paper"),Jk.forEach(t),pm=s(ui,` for the task prefixes
used).`),ui.forEach(t),Fc=c(n),Sn=r(n,"P",{});var yp=i(Sn);hm=s(yp,`If training on TPU, it is recommended to pad all examples of the dataset to the same length or make use of
`),fd=r(yp,"EM",{});var Xk=i(fd);um=s(Xk,"pad_to_multiple_of"),Xk.forEach(t),mm=s(yp,` to have a small number of predefined bucket sizes to fit all examples in. Dynamically padding
batches to the longest example is not recommended on TPU as it triggers a recompilation for every batch shape that is
encountered during training thus significantly slowing down the training. only padding up to the longest example in a
batch) leads to very slow training on TPU.`),yp.forEach(t),Mc=c(n),Pr=r(n,"A",{id:!0}),i(Pr).forEach(t),Cc=c(n),nn=r(n,"H2",{class:!0});var wp=i(nn);Gn=r(wp,"A",{id:!0,class:!0,href:!0});var Qk=i(Gn);_d=r(Qk,"SPAN",{});var ey=i(_d);k(Ts.$$.fragment,ey),ey.forEach(t),Qk.forEach(t),fm=c(wp),gd=r(wp,"SPAN",{});var ty=i(gd);_m=s(ty,"Inference"),ty.forEach(t),wp.forEach(t),Pc=c(n),xt=r(n,"P",{});var Uo=i(xt);gm=s(Uo,"At inference time, it is recommended to use "),Or=r(Uo,"A",{href:!0});var ny=i(Or);Tm=s(ny,"generate()"),ny.forEach(t),vm=s(Uo,`. This
method takes care of encoding the input and feeding the encoded hidden states via cross-attention layers to the decoder
and auto-regressively generates the decoder output. Check out `),vs=r(Uo,"A",{href:!0,rel:!0});var oy=i(vs);bm=s(oy,"this blog post"),oy.forEach(t),km=s(Uo,` to know all the details about generating text with Transformers.
There\u2019s also `),bs=r(Uo,"A",{href:!0,rel:!0});var sy=i(bs);ym=s(sy,"this blog post"),sy.forEach(t),wm=s(Uo,` which explains how
generation works in general in encoder-decoder models.`),Uo.forEach(t),Oc=c(n),k(ks.$$.fragment,n),Nc=c(n),lt=r(n,"P",{});var Qt=i(lt);$m=s(Qt,"Note that T5 uses the "),Td=r(Qt,"CODE",{});var ay=i(Td);xm=s(ay,"pad_token_id"),ay.forEach(t),zm=s(Qt," as the "),vd=r(Qt,"CODE",{});var ry=i(vd);jm=s(ry,"decoder_start_token_id"),ry.forEach(t),Em=s(Qt,`, so when doing generation without using
`),Nr=r(Qt,"A",{href:!0});var iy=i(Nr);qm=s(iy,"generate()"),iy.forEach(t),Fm=s(Qt,", make sure you start it with the "),bd=r(Qt,"CODE",{});var dy=i(bd);Mm=s(dy,"pad_token_id"),dy.forEach(t),Cm=s(Qt,"."),Qt.forEach(t),Ac=c(n),Ar=r(n,"P",{});var ly=i(Ar);Pm=s(ly,"The example above only shows a single example. You can also do batched inference, like so:"),ly.forEach(t),Lc=c(n),k(ys.$$.fragment,n),Ic=c(n),Lr=r(n,"P",{});var cy=i(Lr);Om=s(cy,`Because T5 has been trained with the span-mask denoising objective,
it can be used to predict the sentinel (masked-out) tokens during inference.
The predicted tokens will then be placed between the sentinel tokens.`),cy.forEach(t),Dc=c(n),k(ws.$$.fragment,n),Sc=c(n),Ir=r(n,"A",{id:!0}),i(Ir).forEach(t),Gc=c(n),on=r(n,"H2",{class:!0});var $p=i(on);Un=r($p,"A",{id:!0,class:!0,href:!0});var py=i(Un);kd=r(py,"SPAN",{});var hy=i(kd);k($s.$$.fragment,hy),hy.forEach(t),py.forEach(t),Nm=c($p),yd=r($p,"SPAN",{});var uy=i(yd);Am=s(uy,"Performance"),uy.forEach(t),$p.forEach(t),Uc=c(n),zt=r(n,"P",{});var Wo=i(zt);Lm=s(Wo,"If you\u2019d like a faster training and inference performance, install "),xs=r(Wo,"A",{href:!0,rel:!0});var my=i(xs);Im=s(my,"apex"),my.forEach(t),Dm=s(Wo," and then the model will automatically use "),wd=r(Wo,"CODE",{});var fy=i(wd);Sm=s(fy,"apex.normalization.FusedRMSNorm"),fy.forEach(t),Gm=s(Wo," instead of "),$d=r(Wo,"CODE",{});var _y=i($d);Um=s(_y,"T5LayerNorm"),_y.forEach(t),Wm=s(Wo,". The former uses an optimized fused kernel which is several times faster than the latter."),Wo.forEach(t),Wc=c(n),sn=r(n,"H2",{class:!0});var xp=i(sn);Wn=r(xp,"A",{id:!0,class:!0,href:!0});var gy=i(Wn);xd=r(gy,"SPAN",{});var Ty=i(xd);k(zs.$$.fragment,Ty),Ty.forEach(t),gy.forEach(t),Bm=c(xp),zd=r(xp,"SPAN",{});var vy=i(zd);Rm=s(vy,"Example scripts"),vy.forEach(t),xp.forEach(t),Bc=c(n),Dr=r(n,"P",{});var by=i(Dr);Hm=s(by,"T5 is supported by several example scripts, both for pre-training and fine-tuning."),by.forEach(t),Rc=c(n),Bn=r(n,"UL",{});var zp=i(Bn);jd=r(zp,"LI",{});var ky=i(jd);an=r(ky,"P",{});var mi=i(an);Vm=s(mi,"pre-training: the "),js=r(mi,"A",{href:!0,rel:!0});var yy=i(js);Km=s(yy,"run_t5_mlm_flax.py"),yy.forEach(t),Ym=s(mi,`
script allows you to further pre-train T5 or pre-train T5 from scratch on your own data. The `),Es=r(mi,"A",{href:!0,rel:!0});var wy=i(Es);Zm=s(wy,"t5_tokenizer_model.py"),wy.forEach(t),Jm=s(mi,`
script allows you to further train a T5 tokenizer or train a T5 Tokenizer from scratch on your own data. Note that
Flax (a neural network library on top of JAX) is particularly useful to train on TPU hardware.`),mi.forEach(t),ky.forEach(t),Xm=c(zp),Ed=r(zp,"LI",{});var $y=i(Ed);ot=r($y,"P",{});var It=i(ot);Qm=s(It,"fine-tuning: T5 is supported by the official summarization scripts ("),qs=r(It,"A",{href:!0,rel:!0});var xy=i(qs);ef=s(xy,"PyTorch"),xy.forEach(t),tf=s(It,", "),Fs=r(It,"A",{href:!0,rel:!0});var zy=i(Fs);nf=s(zy,"Tensorflow"),zy.forEach(t),of=s(It,", and "),Ms=r(It,"A",{href:!0,rel:!0});var jy=i(Ms);sf=s(jy,"Flax"),jy.forEach(t),af=s(It,`) and translation scripts
(`),Cs=r(It,"A",{href:!0,rel:!0});var Ey=i(Cs);rf=s(Ey,"PyTorch"),Ey.forEach(t),df=s(It," and "),Ps=r(It,"A",{href:!0,rel:!0});var qy=i(Ps);lf=s(qy,"Tensorflow"),qy.forEach(t),cf=s(It,`). These scripts allow
you to easily fine-tune T5 on custom data for summarization/translation.`),It.forEach(t),$y.forEach(t),zp.forEach(t),Hc=c(n),rn=r(n,"H2",{class:!0});var jp=i(rn);Rn=r(jp,"A",{id:!0,class:!0,href:!0});var Fy=i(Rn);qd=r(Fy,"SPAN",{});var My=i(qd);k(Os.$$.fragment,My),My.forEach(t),Fy.forEach(t),pf=c(jp),Fd=r(jp,"SPAN",{});var Cy=i(Fd);hf=s(Cy,"T5Config"),Cy.forEach(t),jp.forEach(t),Vc=c(n),St=r(n,"DIV",{class:!0});var fi=i(St);k(Ns.$$.fragment,fi),uf=c(fi),Gt=r(fi,"P",{});var Bo=i(Gt);mf=s(Bo,"This is the configuration class to store the configuration of a "),Sr=r(Bo,"A",{href:!0});var Py=i(Sr);ff=s(Py,"T5Model"),Py.forEach(t),_f=s(Bo," or a "),Gr=r(Bo,"A",{href:!0});var Oy=i(Gr);gf=s(Oy,"TFT5Model"),Oy.forEach(t),Tf=s(Bo,`. It is used to
instantiate a T5 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the T5
`),As=r(Bo,"A",{href:!0,rel:!0});var Ny=i(As);vf=s(Ny,"t5-small"),Ny.forEach(t),bf=s(Bo," architecture."),Bo.forEach(t),kf=c(fi),dn=r(fi,"P",{});var _i=i(dn);yf=s(_i,"Configuration objects inherit from "),Ur=r(_i,"A",{href:!0});var Ay=i(Ur);wf=s(Ay,"PretrainedConfig"),Ay.forEach(t),$f=s(_i,` and can be used to control the model outputs. Read the
documentation from `),Wr=r(_i,"A",{href:!0});var Ly=i(Wr);xf=s(Ly,"PretrainedConfig"),Ly.forEach(t),zf=s(_i," for more information."),_i.forEach(t),fi.forEach(t),Kc=c(n),ln=r(n,"H2",{class:!0});var Ep=i(ln);Hn=r(Ep,"A",{id:!0,class:!0,href:!0});var Iy=i(Hn);Md=r(Iy,"SPAN",{});var Dy=i(Md);k(Ls.$$.fragment,Dy),Dy.forEach(t),Iy.forEach(t),jf=c(Ep),Cd=r(Ep,"SPAN",{});var Sy=i(Cd);Ef=s(Sy,"T5Tokenizer"),Sy.forEach(t),Ep.forEach(t),Yc=c(n),he=r(n,"DIV",{class:!0});var ht=i(he);k(Is.$$.fragment,ht),qf=c(ht),Ds=r(ht,"P",{});var qp=i(Ds);Ff=s(qp,"Construct a T5 tokenizer. Based on "),Ss=r(qp,"A",{href:!0,rel:!0});var Gy=i(Ss);Mf=s(Gy,"SentencePiece"),Gy.forEach(t),Cf=s(qp,"."),qp.forEach(t),Pf=c(ht),Gs=r(ht,"P",{});var Fp=i(Gs);Of=s(Fp,"This tokenizer inherits from "),Br=r(Fp,"A",{href:!0});var Uy=i(Br);Nf=s(Uy,"PreTrainedTokenizer"),Uy.forEach(t),Af=s(Fp,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Fp.forEach(t),Lf=c(ht),Vt=r(ht,"DIV",{class:!0});var gi=i(Vt);k(Us.$$.fragment,gi),If=c(gi),Pd=r(gi,"P",{});var Wy=i(Pd);Df=s(Wy,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),Wy.forEach(t),Sf=c(gi),Ws=r(gi,"UL",{});var Mp=i(Ws);Rr=r(Mp,"LI",{});var Lb=i(Rr);Gf=s(Lb,"single sequence: "),Od=r(Lb,"CODE",{});var By=i(Od);Uf=s(By,"X </s>"),By.forEach(t),Lb.forEach(t),Wf=c(Mp),Hr=r(Mp,"LI",{});var Ib=i(Hr);Bf=s(Ib,"pair of sequences: "),Nd=r(Ib,"CODE",{});var Ry=i(Nd);Rf=s(Ry,"A </s> B </s>"),Ry.forEach(t),Ib.forEach(t),Mp.forEach(t),gi.forEach(t),Hf=c(ht),Vn=r(ht,"DIV",{class:!0});var Cp=i(Vn);k(Bs.$$.fragment,Cp),Vf=c(Cp),Rs=r(Cp,"P",{});var Pp=i(Rs);Kf=s(Pp,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ad=r(Pp,"CODE",{});var Hy=i(Ad);Yf=s(Hy,"prepare_for_model"),Hy.forEach(t),Zf=s(Pp," method."),Pp.forEach(t),Cp.forEach(t),Jf=c(ht),Kn=r(ht,"DIV",{class:!0});var Op=i(Kn);k(Hs.$$.fragment,Op),Xf=c(Op),Ld=r(Op,"P",{});var Vy=i(Ld);Qf=s(Vy,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),Vy.forEach(t),Op.forEach(t),e_=c(ht),Vr=r(ht,"DIV",{class:!0});var Ky=i(Vr);k(Vs.$$.fragment,Ky),Ky.forEach(t),ht.forEach(t),Zc=c(n),cn=r(n,"H2",{class:!0});var Np=i(cn);Yn=r(Np,"A",{id:!0,class:!0,href:!0});var Yy=i(Yn);Id=r(Yy,"SPAN",{});var Zy=i(Id);k(Ks.$$.fragment,Zy),Zy.forEach(t),Yy.forEach(t),t_=c(Np),Dd=r(Np,"SPAN",{});var Jy=i(Dd);n_=s(Jy,"T5TokenizerFast"),Jy.forEach(t),Np.forEach(t),Jc=c(n),st=r(n,"DIV",{class:!0});var en=i(st);k(Ys.$$.fragment,en),o_=c(en),pn=r(en,"P",{});var Ti=i(pn);s_=s(Ti,"Construct a \u201Cfast\u201D T5 tokenizer (backed by HuggingFace\u2019s "),Sd=r(Ti,"EM",{});var Xy=i(Sd);a_=s(Xy,"tokenizers"),Xy.forEach(t),r_=s(Ti,` library). Based on
`),Zs=r(Ti,"A",{href:!0,rel:!0});var Qy=i(Zs);i_=s(Qy,"Unigram"),Qy.forEach(t),d_=s(Ti,"."),Ti.forEach(t),l_=c(en),Js=r(en,"P",{});var Ap=i(Js);c_=s(Ap,"This tokenizer inherits from "),Kr=r(Ap,"A",{href:!0});var e2=i(Kr);p_=s(e2,"PreTrainedTokenizerFast"),e2.forEach(t),h_=s(Ap,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Ap.forEach(t),u_=c(en),Kt=r(en,"DIV",{class:!0});var vi=i(Kt);k(Xs.$$.fragment,vi),m_=c(vi),Gd=r(vi,"P",{});var t2=i(Gd);f_=s(t2,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),t2.forEach(t),__=c(vi),Qs=r(vi,"UL",{});var Lp=i(Qs);Yr=r(Lp,"LI",{});var Db=i(Yr);g_=s(Db,"single sequence: "),Ud=r(Db,"CODE",{});var n2=i(Ud);T_=s(n2,"X </s>"),n2.forEach(t),Db.forEach(t),v_=c(Lp),Zr=r(Lp,"LI",{});var Sb=i(Zr);b_=s(Sb,"pair of sequences: "),Wd=r(Sb,"CODE",{});var o2=i(Wd);k_=s(o2,"A </s> B </s>"),o2.forEach(t),Sb.forEach(t),Lp.forEach(t),vi.forEach(t),y_=c(en),Zn=r(en,"DIV",{class:!0});var Ip=i(Zn);k(ea.$$.fragment,Ip),w_=c(Ip),Bd=r(Ip,"P",{});var s2=i(Bd);$_=s(s2,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),s2.forEach(t),Ip.forEach(t),en.forEach(t),Xc=c(n),hn=r(n,"H2",{class:!0});var Dp=i(hn);Jn=r(Dp,"A",{id:!0,class:!0,href:!0});var a2=i(Jn);Rd=r(a2,"SPAN",{});var r2=i(Rd);k(ta.$$.fragment,r2),r2.forEach(t),a2.forEach(t),x_=c(Dp),Hd=r(Dp,"SPAN",{});var i2=i(Hd);z_=s(i2,"T5Model"),i2.forEach(t),Dp.forEach(t),Qc=c(n),oe=r(n,"DIV",{class:!0});var Ie=i(oe);k(na.$$.fragment,Ie),j_=c(Ie),Vd=r(Ie,"P",{});var d2=i(Vd);E_=s(d2,"The bare T5 Model transformer outputting raw hidden-states without any specific head on top."),d2.forEach(t),q_=c(Ie),oa=r(Ie,"P",{});var Sp=i(oa);F_=s(Sp,"The T5 model was proposed in "),sa=r(Sp,"A",{href:!0,rel:!0});var l2=i(sa);M_=s(l2,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),l2.forEach(t),C_=s(Sp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Sp.forEach(t),P_=c(Ie),aa=r(Ie,"P",{});var Gp=i(aa);O_=s(Gp,"This model inherits from "),Jr=r(Gp,"A",{href:!0});var c2=i(Jr);N_=s(c2,"PreTrainedModel"),c2.forEach(t),A_=s(Gp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gp.forEach(t),L_=c(Ie),ra=r(Ie,"P",{});var Up=i(ra);I_=s(Up,"This model is also a PyTorch "),ia=r(Up,"A",{href:!0,rel:!0});var p2=i(ia);D_=s(p2,"torch.nn.Module"),p2.forEach(t),S_=s(Up,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Up.forEach(t),G_=c(Ie),jt=r(Ie,"DIV",{class:!0});var Ro=i(jt);k(da.$$.fragment,Ro),U_=c(Ro),un=r(Ro,"P",{});var bi=i(un);W_=s(bi,"The "),Xr=r(bi,"A",{href:!0});var h2=i(Xr);B_=s(h2,"T5Model"),h2.forEach(t),R_=s(bi," forward method, overrides the "),Kd=r(bi,"CODE",{});var u2=i(Kd);H_=s(u2,"__call__"),u2.forEach(t),V_=s(bi," special method."),bi.forEach(t),K_=c(Ro),k(Xn.$$.fragment,Ro),Y_=c(Ro),k(Qn.$$.fragment,Ro),Ro.forEach(t),Z_=c(Ie),Et=r(Ie,"DIV",{class:!0});var Ho=i(Et);k(la.$$.fragment,Ho),J_=c(Ho),Yd=r(Ho,"P",{});var m2=i(Yd);X_=s(m2,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),m2.forEach(t),Q_=c(Ho),Zd=r(Ho,"P",{});var f2=i(Zd);eg=s(f2,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),f2.forEach(t),tg=c(Ho),k(eo.$$.fragment,Ho),Ho.forEach(t),ng=c(Ie),Yt=r(Ie,"DIV",{class:!0});var ki=i(Yt);k(ca.$$.fragment,ki),og=c(ki),Jd=r(ki,"P",{});var _2=i(Jd);sg=s(_2,"Moves the model to cpu from a model parallel state."),_2.forEach(t),ag=c(ki),k(to.$$.fragment,ki),ki.forEach(t),Ie.forEach(t),ep=c(n),mn=r(n,"H2",{class:!0});var Wp=i(mn);no=r(Wp,"A",{id:!0,class:!0,href:!0});var g2=i(no);Xd=r(g2,"SPAN",{});var T2=i(Xd);k(pa.$$.fragment,T2),T2.forEach(t),g2.forEach(t),rg=c(Wp),Qd=r(Wp,"SPAN",{});var v2=i(Qd);ig=s(v2,"T5ForConditionalGeneration"),v2.forEach(t),Wp.forEach(t),tp=c(n),se=r(n,"DIV",{class:!0});var De=i(se);k(ha.$$.fragment,De),dg=c(De),ua=r(De,"P",{});var Bp=i(ua);lg=s(Bp,"T5 Model with a "),el=r(Bp,"CODE",{});var b2=i(el);cg=s(b2,"language modeling"),b2.forEach(t),pg=s(Bp," head on top."),Bp.forEach(t),hg=c(De),ma=r(De,"P",{});var Rp=i(ma);ug=s(Rp,"The T5 model was proposed in "),fa=r(Rp,"A",{href:!0,rel:!0});var k2=i(fa);mg=s(k2,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),k2.forEach(t),fg=s(Rp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Rp.forEach(t),_g=c(De),_a=r(De,"P",{});var Hp=i(_a);gg=s(Hp,"This model inherits from "),Qr=r(Hp,"A",{href:!0});var y2=i(Qr);Tg=s(y2,"PreTrainedModel"),y2.forEach(t),vg=s(Hp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hp.forEach(t),bg=c(De),ga=r(De,"P",{});var Vp=i(ga);kg=s(Vp,"This model is also a PyTorch "),Ta=r(Vp,"A",{href:!0,rel:!0});var w2=i(Ta);yg=s(w2,"torch.nn.Module"),w2.forEach(t),wg=s(Vp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vp.forEach(t),$g=c(De),qt=r(De,"DIV",{class:!0});var Vo=i(qt);k(va.$$.fragment,Vo),xg=c(Vo),fn=r(Vo,"P",{});var yi=i(fn);zg=s(yi,"The "),ei=r(yi,"A",{href:!0});var $2=i(ei);jg=s($2,"T5ForConditionalGeneration"),$2.forEach(t),Eg=s(yi," forward method, overrides the "),tl=r(yi,"CODE",{});var x2=i(tl);qg=s(x2,"__call__"),x2.forEach(t),Fg=s(yi," special method."),yi.forEach(t),Mg=c(Vo),k(oo.$$.fragment,Vo),Cg=c(Vo),k(so.$$.fragment,Vo),Vo.forEach(t),Pg=c(De),Ft=r(De,"DIV",{class:!0});var Ko=i(Ft);k(ba.$$.fragment,Ko),Og=c(Ko),nl=r(Ko,"P",{});var z2=i(nl);Ng=s(z2,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),z2.forEach(t),Ag=c(Ko),ol=r(Ko,"P",{});var j2=i(ol);Lg=s(j2,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),j2.forEach(t),Ig=c(Ko),k(ao.$$.fragment,Ko),Ko.forEach(t),Dg=c(De),Zt=r(De,"DIV",{class:!0});var wi=i(Zt);k(ka.$$.fragment,wi),Sg=c(wi),sl=r(wi,"P",{});var E2=i(sl);Gg=s(E2,"Moves the model to cpu from a model parallel state."),E2.forEach(t),Ug=c(wi),k(ro.$$.fragment,wi),wi.forEach(t),De.forEach(t),np=c(n),_n=r(n,"H2",{class:!0});var Kp=i(_n);io=r(Kp,"A",{id:!0,class:!0,href:!0});var q2=i(io);al=r(q2,"SPAN",{});var F2=i(al);k(ya.$$.fragment,F2),F2.forEach(t),q2.forEach(t),Wg=c(Kp),rl=r(Kp,"SPAN",{});var M2=i(rl);Bg=s(M2,"T5EncoderModel"),M2.forEach(t),Kp.forEach(t),op=c(n),ae=r(n,"DIV",{class:!0});var Se=i(ae);k(wa.$$.fragment,Se),Rg=c(Se),il=r(Se,"P",{});var C2=i(il);Hg=s(C2,"The bare T5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),C2.forEach(t),Vg=c(Se),$a=r(Se,"P",{});var Yp=i($a);Kg=s(Yp,"The T5 model was proposed in "),xa=r(Yp,"A",{href:!0,rel:!0});var P2=i(xa);Yg=s(P2,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),P2.forEach(t),Zg=s(Yp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Yp.forEach(t),Jg=c(Se),za=r(Se,"P",{});var Zp=i(za);Xg=s(Zp,"This model inherits from "),ti=r(Zp,"A",{href:!0});var O2=i(ti);Qg=s(O2,"PreTrainedModel"),O2.forEach(t),eT=s(Zp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zp.forEach(t),tT=c(Se),ja=r(Se,"P",{});var Jp=i(ja);nT=s(Jp,"This model is also a PyTorch "),Ea=r(Jp,"A",{href:!0,rel:!0});var N2=i(Ea);oT=s(N2,"torch.nn.Module"),N2.forEach(t),sT=s(Jp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jp.forEach(t),aT=c(Se),Mt=r(Se,"DIV",{class:!0});var Yo=i(Mt);k(qa.$$.fragment,Yo),rT=c(Yo),gn=r(Yo,"P",{});var $i=i(gn);iT=s($i,"The "),ni=r($i,"A",{href:!0});var A2=i(ni);dT=s(A2,"T5EncoderModel"),A2.forEach(t),lT=s($i," forward method, overrides the "),dl=r($i,"CODE",{});var L2=i(dl);cT=s(L2,"__call__"),L2.forEach(t),pT=s($i," special method."),$i.forEach(t),hT=c(Yo),k(lo.$$.fragment,Yo),uT=c(Yo),k(co.$$.fragment,Yo),Yo.forEach(t),mT=c(Se),Ct=r(Se,"DIV",{class:!0});var Zo=i(Ct);k(Fa.$$.fragment,Zo),fT=c(Zo),ll=r(Zo,"P",{});var I2=i(ll);_T=s(I2,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),I2.forEach(t),gT=c(Zo),cl=r(Zo,"P",{});var D2=i(cl);TT=s(D2,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),D2.forEach(t),vT=c(Zo),k(po.$$.fragment,Zo),Zo.forEach(t),bT=c(Se),Jt=r(Se,"DIV",{class:!0});var xi=i(Jt);k(Ma.$$.fragment,xi),kT=c(xi),pl=r(xi,"P",{});var S2=i(pl);yT=s(S2,"Moves the model to cpu from a model parallel state."),S2.forEach(t),wT=c(xi),k(ho.$$.fragment,xi),xi.forEach(t),Se.forEach(t),sp=c(n),Tn=r(n,"H2",{class:!0});var Xp=i(Tn);uo=r(Xp,"A",{id:!0,class:!0,href:!0});var G2=i(uo);hl=r(G2,"SPAN",{});var U2=i(hl);k(Ca.$$.fragment,U2),U2.forEach(t),G2.forEach(t),$T=c(Xp),ul=r(Xp,"SPAN",{});var W2=i(ul);xT=s(W2,"TFT5Model"),W2.forEach(t),Xp.forEach(t),ap=c(n),ue=r(n,"DIV",{class:!0});var ut=i(ue);k(Pa.$$.fragment,ut),zT=c(ut),ml=r(ut,"P",{});var B2=i(ml);jT=s(B2,"The bare T5 Model transformer outputting raw hidden-stateswithout any specific head on top."),B2.forEach(t),ET=c(ut),Oa=r(ut,"P",{});var Qp=i(Oa);qT=s(Qp,"The T5 model was proposed in "),Na=r(Qp,"A",{href:!0,rel:!0});var R2=i(Na);FT=s(R2,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),R2.forEach(t),MT=s(Qp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Qp.forEach(t),CT=c(ut),Aa=r(ut,"P",{});var eh=i(Aa);PT=s(eh,"This model inherits from "),oi=r(eh,"A",{href:!0});var H2=i(oi);OT=s(H2,"TFPreTrainedModel"),H2.forEach(t),NT=s(eh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eh.forEach(t),AT=c(ut),La=r(ut,"P",{});var th=i(La);LT=s(th,"This model is also a "),Ia=r(th,"A",{href:!0,rel:!0});var V2=i(Ia);IT=s(V2,"tf.keras.Model"),V2.forEach(t),DT=s(th,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),th.forEach(t),ST=c(ut),k(mo.$$.fragment,ut),GT=c(ut),Pt=r(ut,"DIV",{class:!0});var Jo=i(Pt);k(Da.$$.fragment,Jo),UT=c(Jo),vn=r(Jo,"P",{});var zi=i(vn);WT=s(zi,"The "),si=r(zi,"A",{href:!0});var K2=i(si);BT=s(K2,"TFT5Model"),K2.forEach(t),RT=s(zi," forward method, overrides the "),fl=r(zi,"CODE",{});var Y2=i(fl);HT=s(Y2,"__call__"),Y2.forEach(t),VT=s(zi," special method."),zi.forEach(t),KT=c(Jo),k(fo.$$.fragment,Jo),YT=c(Jo),k(_o.$$.fragment,Jo),Jo.forEach(t),ut.forEach(t),rp=c(n),bn=r(n,"H2",{class:!0});var nh=i(bn);go=r(nh,"A",{id:!0,class:!0,href:!0});var Z2=i(go);_l=r(Z2,"SPAN",{});var J2=i(_l);k(Sa.$$.fragment,J2),J2.forEach(t),Z2.forEach(t),ZT=c(nh),gl=r(nh,"SPAN",{});var X2=i(gl);JT=s(X2,"TFT5ForConditionalGeneration"),X2.forEach(t),nh.forEach(t),ip=c(n),me=r(n,"DIV",{class:!0});var mt=i(me);k(Ga.$$.fragment,mt),XT=c(mt),Ua=r(mt,"P",{});var oh=i(Ua);QT=s(oh,"T5 Model with a "),Tl=r(oh,"CODE",{});var Q2=i(Tl);ev=s(Q2,"language modeling"),Q2.forEach(t),tv=s(oh," head on top."),oh.forEach(t),nv=c(mt),Wa=r(mt,"P",{});var sh=i(Wa);ov=s(sh,"The T5 model was proposed in "),Ba=r(sh,"A",{href:!0,rel:!0});var e5=i(Ba);sv=s(e5,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),e5.forEach(t),av=s(sh,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),sh.forEach(t),rv=c(mt),Ra=r(mt,"P",{});var ah=i(Ra);iv=s(ah,"This model inherits from "),ai=r(ah,"A",{href:!0});var t5=i(ai);dv=s(t5,"TFPreTrainedModel"),t5.forEach(t),lv=s(ah,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ah.forEach(t),cv=c(mt),Ha=r(mt,"P",{});var rh=i(Ha);pv=s(rh,"This model is also a "),Va=r(rh,"A",{href:!0,rel:!0});var n5=i(Va);hv=s(n5,"tf.keras.Model"),n5.forEach(t),uv=s(rh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rh.forEach(t),mv=c(mt),k(To.$$.fragment,mt),fv=c(mt),Ot=r(mt,"DIV",{class:!0});var Xo=i(Ot);k(Ka.$$.fragment,Xo),_v=c(Xo),kn=r(Xo,"P",{});var ji=i(kn);gv=s(ji,"The "),ri=r(ji,"A",{href:!0});var o5=i(ri);Tv=s(o5,"TFT5ForConditionalGeneration"),o5.forEach(t),vv=s(ji," forward method, overrides the "),vl=r(ji,"CODE",{});var s5=i(vl);bv=s(s5,"__call__"),s5.forEach(t),kv=s(ji," special method."),ji.forEach(t),yv=c(Xo),k(vo.$$.fragment,Xo),wv=c(Xo),k(bo.$$.fragment,Xo),Xo.forEach(t),mt.forEach(t),dp=c(n),yn=r(n,"H2",{class:!0});var ih=i(yn);ko=r(ih,"A",{id:!0,class:!0,href:!0});var a5=i(ko);bl=r(a5,"SPAN",{});var r5=i(bl);k(Ya.$$.fragment,r5),r5.forEach(t),a5.forEach(t),$v=c(ih),kl=r(ih,"SPAN",{});var i5=i(kl);xv=s(i5,"TFT5EncoderModel"),i5.forEach(t),ih.forEach(t),lp=c(n),fe=r(n,"DIV",{class:!0});var ft=i(fe);k(Za.$$.fragment,ft),zv=c(ft),yl=r(ft,"P",{});var d5=i(yl);jv=s(d5,"The bare T5 Model transformer outputting encoder\u2019s raw hidden-stateswithout any specific head on top."),d5.forEach(t),Ev=c(ft),Ja=r(ft,"P",{});var dh=i(Ja);qv=s(dh,"The T5 model was proposed in "),Xa=r(dh,"A",{href:!0,rel:!0});var l5=i(Xa);Fv=s(l5,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),l5.forEach(t),Mv=s(dh,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),dh.forEach(t),Cv=c(ft),Qa=r(ft,"P",{});var lh=i(Qa);Pv=s(lh,"This model inherits from "),ii=r(lh,"A",{href:!0});var c5=i(ii);Ov=s(c5,"TFPreTrainedModel"),c5.forEach(t),Nv=s(lh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lh.forEach(t),Av=c(ft),er=r(ft,"P",{});var ch=i(er);Lv=s(ch,"This model is also a "),tr=r(ch,"A",{href:!0,rel:!0});var p5=i(tr);Iv=s(p5,"tf.keras.Model"),p5.forEach(t),Dv=s(ch,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ch.forEach(t),Sv=c(ft),k(yo.$$.fragment,ft),Gv=c(ft),Nt=r(ft,"DIV",{class:!0});var Qo=i(Nt);k(nr.$$.fragment,Qo),Uv=c(Qo),wn=r(Qo,"P",{});var Ei=i(wn);Wv=s(Ei,"The "),di=r(Ei,"A",{href:!0});var h5=i(di);Bv=s(h5,"TFT5EncoderModel"),h5.forEach(t),Rv=s(Ei," forward method, overrides the "),wl=r(Ei,"CODE",{});var u5=i(wl);Hv=s(u5,"__call__"),u5.forEach(t),Vv=s(Ei," special method."),Ei.forEach(t),Kv=c(Qo),k(wo.$$.fragment,Qo),Yv=c(Qo),k($o.$$.fragment,Qo),Qo.forEach(t),ft.forEach(t),cp=c(n),$n=r(n,"H2",{class:!0});var ph=i($n);xo=r(ph,"A",{id:!0,class:!0,href:!0});var m5=i(xo);$l=r(m5,"SPAN",{});var f5=i($l);k(or.$$.fragment,f5),f5.forEach(t),m5.forEach(t),Zv=c(ph),xl=r(ph,"SPAN",{});var _5=i(xl);Jv=s(_5,"FlaxT5Model"),_5.forEach(t),ph.forEach(t),pp=c(n),_t=r(n,"DIV",{class:!0});var es=i(_t);k(sr.$$.fragment,es),Xv=c(es),At=r(es,"DIV",{class:!0});var ts=i(At);k(ar.$$.fragment,ts),Qv=c(ts),xn=r(ts,"P",{});var qi=i(xn);eb=s(qi,"The "),zl=r(qi,"CODE",{});var g5=i(zl);tb=s(g5,"FlaxT5PreTrainedModel"),g5.forEach(t),nb=s(qi," forward method, overrides the "),jl=r(qi,"CODE",{});var T5=i(jl);ob=s(T5,"__call__"),T5.forEach(t),sb=s(qi," special method."),qi.forEach(t),ab=c(ts),k(zo.$$.fragment,ts),rb=c(ts),k(jo.$$.fragment,ts),ts.forEach(t),ib=c(es),Eo=r(es,"DIV",{class:!0});var hh=i(Eo);k(rr.$$.fragment,hh),db=c(hh),k(qo.$$.fragment,hh),hh.forEach(t),lb=c(es),Fo=r(es,"DIV",{class:!0});var uh=i(Fo);k(ir.$$.fragment,uh),cb=c(uh),k(Mo.$$.fragment,uh),uh.forEach(t),es.forEach(t),hp=c(n),zn=r(n,"H2",{class:!0});var mh=i(zn);Co=r(mh,"A",{id:!0,class:!0,href:!0});var v5=i(Co);El=r(v5,"SPAN",{});var b5=i(El);k(dr.$$.fragment,b5),b5.forEach(t),v5.forEach(t),pb=c(mh),ql=r(mh,"SPAN",{});var k5=i(ql);hb=s(k5,"FlaxT5ForConditionalGeneration"),k5.forEach(t),mh.forEach(t),up=c(n),gt=r(n,"DIV",{class:!0});var ns=i(gt);k(lr.$$.fragment,ns),ub=c(ns),Lt=r(ns,"DIV",{class:!0});var os=i(Lt);k(cr.$$.fragment,os),mb=c(os),jn=r(os,"P",{});var Fi=i(jn);fb=s(Fi,"The "),Fl=r(Fi,"CODE",{});var y5=i(Fl);_b=s(y5,"FlaxT5PreTrainedModel"),y5.forEach(t),gb=s(Fi," forward method, overrides the "),Ml=r(Fi,"CODE",{});var w5=i(Ml);Tb=s(w5,"__call__"),w5.forEach(t),vb=s(Fi," special method."),Fi.forEach(t),bb=c(os),k(Po.$$.fragment,os),kb=c(os),k(Oo.$$.fragment,os),os.forEach(t),yb=c(ns),No=r(ns,"DIV",{class:!0});var fh=i(No);k(pr.$$.fragment,fh),wb=c(fh),k(Ao.$$.fragment,fh),fh.forEach(t),$b=c(ns),Lo=r(ns,"DIV",{class:!0});var _h=i(Lo);k(hr.$$.fragment,_h),xb=c(_h),k(Io.$$.fragment,_h),_h.forEach(t),ns.forEach(t),mp=c(n),En=r(n,"H2",{class:!0});var gh=i(En);Do=r(gh,"A",{id:!0,class:!0,href:!0});var $5=i(Do);Cl=r($5,"SPAN",{});var x5=i(Cl);k(ur.$$.fragment,x5),x5.forEach(t),$5.forEach(t),zb=c(gh),Pl=r(gh,"SPAN",{});var z5=i(Pl);jb=s(z5,"FlaxT5EncoderModel"),z5.forEach(t),gh.forEach(t),fp=c(n),qn=r(n,"DIV",{class:!0});var Th=i(qn);k(mr.$$.fragment,Th),Eb=c(Th),Xt=r(Th,"DIV",{class:!0});var Mi=i(Xt);k(fr.$$.fragment,Mi),qb=c(Mi),Fn=r(Mi,"P",{});var Ci=i(Fn);Fb=s(Ci,"The "),li=r(Ci,"A",{href:!0});var j5=i(li);Mb=s(j5,"FlaxT5EncoderModel"),j5.forEach(t),Cb=s(Ci," forward method, overrides the "),Ol=r(Ci,"CODE",{});var E5=i(Ol);Pb=s(E5,"__call__"),E5.forEach(t),Ob=s(Ci," special method."),Ci.forEach(t),Nb=c(Mi),k(So.$$.fragment,Mi),Mi.forEach(t),Th.forEach(t),this.h()},h(){h(p,"name","hf:doc:metadata"),h(p,"content",JSON.stringify(pw)),h(_,"id","t5"),h(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(_,"href","#t5"),h(g,"class","relative group"),h(re,"id","overview"),h(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(re,"href","#overview"),h(S,"class","relative group"),h(le,"href","https://arxiv.org/pdf/1910.10683.pdf"),h(le,"rel","nofollow"),h(te,"href","#training"),h(L,"href","#inference"),h(z,"href","#scripts"),h(Oe,"href","https://huggingface.co/t5-small"),h(Oe,"rel","nofollow"),h(Ne,"href","https://huggingface.co/t5-base"),h(Ne,"rel","nofollow"),h(Ae,"href","https://huggingface.co/t5-large"),h(Ae,"rel","nofollow"),h(ss,"href","https://huggingface.co/t5-3b"),h(ss,"rel","nofollow"),h(as,"href","https://huggingface.co/t5-11b"),h(as,"rel","nofollow"),h(kr,"href","t5v1.1"),h(yr,"href","mt5"),h(wr,"href","byt5"),h(rs,"href","https://huggingface.co/models?search=t5"),h(rs,"rel","nofollow"),h(is,"href","https://huggingface.co/thomwolf"),h(is,"rel","nofollow"),h(ds,"href","https://github.com/google-research/text-to-text-transfer-transformer"),h(ds,"rel","nofollow"),h($r,"id","training"),h(Ln,"id","training"),h(Ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ln,"href","#training"),h(tn,"class","relative group"),h(xr,"href","/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5ForConditionalGeneration"),h(jr,"href","/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5Tokenizer"),h(ps,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/language-modeling"),h(ps,"rel","nofollow"),h(us,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/summarization"),h(us,"rel","nofollow"),h(_s,"href","https://discuss.huggingface.co/t/t5-finetuning-tips/684"),h(_s,"rel","nofollow"),h(gs,"href","https://arxiv.org/pdf/1910.10683.pdf"),h(gs,"rel","nofollow"),h(Pr,"id","inference"),h(Gn,"id","inference"),h(Gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Gn,"href","#inference"),h(nn,"class","relative group"),h(Or,"href","/docs/transformers/v4.22.0/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),h(vs,"href","https://huggingface.co/blog/how-to-generate"),h(vs,"rel","nofollow"),h(bs,"href","https://huggingface.co/blog/encoder-decoder#encoder-decoder"),h(bs,"rel","nofollow"),h(Nr,"href","/docs/transformers/v4.22.0/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),h(Ir,"id","scripts"),h(Un,"id","performance"),h(Un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Un,"href","#performance"),h(on,"class","relative group"),h(xs,"href","https://github.com/NVIDIA/apex#quick-start"),h(xs,"rel","nofollow"),h(Wn,"id","example-scripts"),h(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Wn,"href","#example-scripts"),h(sn,"class","relative group"),h(js,"href","https://github.com/huggingface/transformers/blob/main/examples/flax/language-modeling/run_t5_mlm_flax.py"),h(js,"rel","nofollow"),h(Es,"href","https://github.com/huggingface/transformers/blob/main/examples/flax/language-modeling/t5_tokenizer_model.py"),h(Es,"rel","nofollow"),h(qs,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/summarization"),h(qs,"rel","nofollow"),h(Fs,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/summarization"),h(Fs,"rel","nofollow"),h(Ms,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/summarization"),h(Ms,"rel","nofollow"),h(Cs,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/translation"),h(Cs,"rel","nofollow"),h(Ps,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/translation"),h(Ps,"rel","nofollow"),h(Rn,"id","transformers.T5Config"),h(Rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Rn,"href","#transformers.T5Config"),h(rn,"class","relative group"),h(Sr,"href","/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5Model"),h(Gr,"href","/docs/transformers/v4.22.0/en/model_doc/t5#transformers.TFT5Model"),h(As,"href","https://huggingface.co/t5-small"),h(As,"rel","nofollow"),h(Ur,"href","/docs/transformers/v4.22.0/en/main_classes/configuration#transformers.PretrainedConfig"),h(Wr,"href","/docs/transformers/v4.22.0/en/main_classes/configuration#transformers.PretrainedConfig"),h(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Hn,"id","transformers.T5Tokenizer"),h(Hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Hn,"href","#transformers.T5Tokenizer"),h(ln,"class","relative group"),h(Ss,"href","https://github.com/google/sentencepiece"),h(Ss,"rel","nofollow"),h(Br,"href","/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Vn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Kn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Vr,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Yn,"id","transformers.T5TokenizerFast"),h(Yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Yn,"href","#transformers.T5TokenizerFast"),h(cn,"class","relative group"),h(Zs,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),h(Zs,"rel","nofollow"),h(Kr,"href","/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),h(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Zn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Jn,"id","transformers.T5Model"),h(Jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Jn,"href","#transformers.T5Model"),h(hn,"class","relative group"),h(sa,"href","https://arxiv.org/abs/1910.10683"),h(sa,"rel","nofollow"),h(Jr,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),h(ia,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(ia,"rel","nofollow"),h(Xr,"href","/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5Model"),h(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(no,"id","transformers.T5ForConditionalGeneration"),h(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(no,"href","#transformers.T5ForConditionalGeneration"),h(mn,"class","relative group"),h(fa,"href","https://arxiv.org/abs/1910.10683"),h(fa,"rel","nofollow"),h(Qr,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),h(Ta,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Ta,"rel","nofollow"),h(ei,"href","/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5ForConditionalGeneration"),h(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(io,"id","transformers.T5EncoderModel"),h(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(io,"href","#transformers.T5EncoderModel"),h(_n,"class","relative group"),h(xa,"href","https://arxiv.org/abs/1910.10683"),h(xa,"rel","nofollow"),h(ti,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),h(Ea,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Ea,"rel","nofollow"),h(ni,"href","/docs/transformers/v4.22.0/en/model_doc/t5#transformers.T5EncoderModel"),h(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(uo,"id","transformers.TFT5Model"),h(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(uo,"href","#transformers.TFT5Model"),h(Tn,"class","relative group"),h(Na,"href","https://arxiv.org/abs/1910.10683"),h(Na,"rel","nofollow"),h(oi,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),h(Ia,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Ia,"rel","nofollow"),h(si,"href","/docs/transformers/v4.22.0/en/model_doc/t5#transformers.TFT5Model"),h(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(go,"id","transformers.TFT5ForConditionalGeneration"),h(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(go,"href","#transformers.TFT5ForConditionalGeneration"),h(bn,"class","relative group"),h(Ba,"href","https://arxiv.org/abs/1910.10683"),h(Ba,"rel","nofollow"),h(ai,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),h(Va,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Va,"rel","nofollow"),h(ri,"href","/docs/transformers/v4.22.0/en/model_doc/t5#transformers.TFT5ForConditionalGeneration"),h(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ko,"id","transformers.TFT5EncoderModel"),h(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ko,"href","#transformers.TFT5EncoderModel"),h(yn,"class","relative group"),h(Xa,"href","https://arxiv.org/abs/1910.10683"),h(Xa,"rel","nofollow"),h(ii,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),h(tr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(tr,"rel","nofollow"),h(di,"href","/docs/transformers/v4.22.0/en/model_doc/t5#transformers.TFT5EncoderModel"),h(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(xo,"id","transformers.FlaxT5Model"),h(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(xo,"href","#transformers.FlaxT5Model"),h($n,"class","relative group"),h(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Co,"id","transformers.FlaxT5ForConditionalGeneration"),h(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Co,"href","#transformers.FlaxT5ForConditionalGeneration"),h(zn,"class","relative group"),h(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(No,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Do,"id","transformers.FlaxT5EncoderModel"),h(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Do,"href","#transformers.FlaxT5EncoderModel"),h(En,"class","relative group"),h(li,"href","/docs/transformers/v4.22.0/en/model_doc/t5#transformers.FlaxT5EncoderModel"),h(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(qn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(n,f){e(document.head,p),m(n,v,f),m(n,g,f),e(g,_),e(_,T),y(d,T,null),e(g,u),e(g,q),e(q,Ge),m(n,qe,f),m(n,S,f),e(S,re),e(re,ie),y(E,ie,null),e(S,Ue),e(S,V),e(V,We),m(n,Fe,f),m(n,G,f),e(G,Be),e(G,le),e(le,J),e(G,Re),m(n,Me,f),m(n,U,f),e(U,He),m(n,Ce,f),m(n,W,f),e(W,ye),e(ye,Ve),m(n,ce,f),m(n,C,f),e(C,O),m(n,Pe,f),m(n,D,f),e(D,we),e(we,X),e(X,Q),e(X,$e),e($e,Ke),e(X,N),e(X,xe),e(xe,ee),e(X,Ye),e(D,Ze),e(D,K),e(K,ze),e(ze,Je),e(D,B),e(D,je),e(je,I),e(I,Xe),e(I,te),e(te,A),e(I,Qe),e(I,L),e(L,et),e(I,tt),e(I,z),e(z,F),e(I,vt),m(n,pe,f),m(n,nt,f),e(nt,bt),m(n,M,f),m(n,Y,f),e(Y,at),e(at,rt),e(rt,Oe),e(Oe,kt),e(Y,R),e(Y,Z),e(Z,it),e(it,Ne),e(Ne,ne),e(Y,yt),e(Y,dt),e(dt,Ee),e(Ee,Ae),e(Ae,_e),e(Y,wt),e(Y,Pi),e(Pi,Oi),e(Oi,ss),e(ss,vh),e(Y,bh),e(Y,Ni),e(Ni,vr),e(vr,as),e(as,kh),e(vr,yh),m(n,ic,f),m(n,br,f),e(br,wh),m(n,dc,f),m(n,Wt,f),e(Wt,Ai),e(Ai,Pn),e(Pn,Li),e(Li,$h),e(Pn,xh),e(Pn,kr),e(kr,zh),e(Pn,jh),e(Wt,Eh),e(Wt,Ii),e(Ii,On),e(On,Di),e(Di,qh),e(On,Fh),e(On,yr),e(yr,Mh),e(On,Ch),e(Wt,Ph),e(Wt,Si),e(Si,Nn),e(Nn,Gi),e(Gi,Oh),e(Nn,Nh),e(Nn,wr),e(wr,Ah),e(Nn,Lh),m(n,lc,f),m(n,An,f),e(An,Ih),e(An,rs),e(rs,Dh),e(An,Sh),m(n,cc,f),m(n,Bt,f),e(Bt,Gh),e(Bt,is),e(is,Uh),e(Bt,Wh),e(Bt,ds),e(ds,Bh),e(Bt,Rh),m(n,pc,f),m(n,$r,f),m(n,hc,f),m(n,tn,f),e(tn,Ln),e(Ln,Ui),y(ls,Ui,null),e(tn,Hh),e(tn,Wi),e(Wi,Vh),m(n,uc,f),m(n,$t,f),e($t,Kh),e($t,Bi),e(Bi,Yh),e($t,Zh),e($t,Ri),e(Ri,Jh),e($t,Xh),e($t,Hi),e(Hi,Qh),e($t,eu),m(n,mc,f),m(n,In,f),e(In,tu),e(In,xr),e(xr,nu),e(In,ou),m(n,fc,f),m(n,zr,f),e(zr,Vi),e(Vi,su),m(n,_c,f),m(n,ge,f),e(ge,au),e(ge,Ki),e(Ki,ru),e(ge,iu),e(ge,Yi),e(Yi,du),e(ge,lu),e(ge,Zi),e(Zi,cu),e(ge,pu),e(ge,Ji),e(Ji,hu),e(ge,uu),e(ge,Xi),e(Xi,mu),e(ge,fu),e(ge,jr),e(jr,_u),e(ge,gu),m(n,gc,f),m(n,Er,f),e(Er,Tu),m(n,Tc,f),y(cs,n,f),m(n,vc,f),m(n,Dn,f),e(Dn,vu),e(Dn,ps),e(ps,bu),e(Dn,ku),m(n,bc,f),m(n,qr,f),e(qr,Qi),e(Qi,yu),m(n,kc,f),m(n,Fr,f),e(Fr,wu),m(n,yc,f),y(hs,n,f),m(n,wc,f),m(n,de,f),e(de,$u),e(de,ed),e(ed,xu),e(de,zu),e(de,td),e(td,ju),e(de,Eu),e(de,nd),e(nd,qu),e(de,Fu),e(de,od),e(od,Mu),e(de,Cu),e(de,sd),e(sd,Pu),e(de,Ou),e(de,ad),e(ad,Nu),e(de,Au),e(de,rd),e(rd,Lu),e(de,Iu),m(n,$c,f),m(n,Rt,f),e(Rt,Du),e(Rt,id),e(id,Su),e(Rt,Gu),e(Rt,dd),e(dd,Uu),e(Rt,Wu),m(n,xc,f),m(n,Te,f),e(Te,Bu),e(Te,ld),e(ld,Ru),e(Te,Hu),e(Te,cd),e(cd,Vu),e(Te,Ku),e(Te,pd),e(pd,Yu),e(Te,Zu),e(Te,hd),e(hd,Ju),e(Te,Xu),e(Te,us),e(us,Qu),e(Te,em),e(Te,ud),e(ud,tm),e(Te,nm),m(n,zc,f),y(ms,n,f),m(n,jc,f),m(n,Mr,f),e(Mr,om),m(n,Ec,f),m(n,Cr,f),e(Cr,fs),e(fs,sm),e(fs,md),e(md,am),e(fs,rm),m(n,qc,f),m(n,Ht,f),e(Ht,im),e(Ht,_s),e(_s,dm),e(Ht,lm),e(Ht,gs),e(gs,cm),e(Ht,pm),m(n,Fc,f),m(n,Sn,f),e(Sn,hm),e(Sn,fd),e(fd,um),e(Sn,mm),m(n,Mc,f),m(n,Pr,f),m(n,Cc,f),m(n,nn,f),e(nn,Gn),e(Gn,_d),y(Ts,_d,null),e(nn,fm),e(nn,gd),e(gd,_m),m(n,Pc,f),m(n,xt,f),e(xt,gm),e(xt,Or),e(Or,Tm),e(xt,vm),e(xt,vs),e(vs,bm),e(xt,km),e(xt,bs),e(bs,ym),e(xt,wm),m(n,Oc,f),y(ks,n,f),m(n,Nc,f),m(n,lt,f),e(lt,$m),e(lt,Td),e(Td,xm),e(lt,zm),e(lt,vd),e(vd,jm),e(lt,Em),e(lt,Nr),e(Nr,qm),e(lt,Fm),e(lt,bd),e(bd,Mm),e(lt,Cm),m(n,Ac,f),m(n,Ar,f),e(Ar,Pm),m(n,Lc,f),y(ys,n,f),m(n,Ic,f),m(n,Lr,f),e(Lr,Om),m(n,Dc,f),y(ws,n,f),m(n,Sc,f),m(n,Ir,f),m(n,Gc,f),m(n,on,f),e(on,Un),e(Un,kd),y($s,kd,null),e(on,Nm),e(on,yd),e(yd,Am),m(n,Uc,f),m(n,zt,f),e(zt,Lm),e(zt,xs),e(xs,Im),e(zt,Dm),e(zt,wd),e(wd,Sm),e(zt,Gm),e(zt,$d),e($d,Um),e(zt,Wm),m(n,Wc,f),m(n,sn,f),e(sn,Wn),e(Wn,xd),y(zs,xd,null),e(sn,Bm),e(sn,zd),e(zd,Rm),m(n,Bc,f),m(n,Dr,f),e(Dr,Hm),m(n,Rc,f),m(n,Bn,f),e(Bn,jd),e(jd,an),e(an,Vm),e(an,js),e(js,Km),e(an,Ym),e(an,Es),e(Es,Zm),e(an,Jm),e(Bn,Xm),e(Bn,Ed),e(Ed,ot),e(ot,Qm),e(ot,qs),e(qs,ef),e(ot,tf),e(ot,Fs),e(Fs,nf),e(ot,of),e(ot,Ms),e(Ms,sf),e(ot,af),e(ot,Cs),e(Cs,rf),e(ot,df),e(ot,Ps),e(Ps,lf),e(ot,cf),m(n,Hc,f),m(n,rn,f),e(rn,Rn),e(Rn,qd),y(Os,qd,null),e(rn,pf),e(rn,Fd),e(Fd,hf),m(n,Vc,f),m(n,St,f),y(Ns,St,null),e(St,uf),e(St,Gt),e(Gt,mf),e(Gt,Sr),e(Sr,ff),e(Gt,_f),e(Gt,Gr),e(Gr,gf),e(Gt,Tf),e(Gt,As),e(As,vf),e(Gt,bf),e(St,kf),e(St,dn),e(dn,yf),e(dn,Ur),e(Ur,wf),e(dn,$f),e(dn,Wr),e(Wr,xf),e(dn,zf),m(n,Kc,f),m(n,ln,f),e(ln,Hn),e(Hn,Md),y(Ls,Md,null),e(ln,jf),e(ln,Cd),e(Cd,Ef),m(n,Yc,f),m(n,he,f),y(Is,he,null),e(he,qf),e(he,Ds),e(Ds,Ff),e(Ds,Ss),e(Ss,Mf),e(Ds,Cf),e(he,Pf),e(he,Gs),e(Gs,Of),e(Gs,Br),e(Br,Nf),e(Gs,Af),e(he,Lf),e(he,Vt),y(Us,Vt,null),e(Vt,If),e(Vt,Pd),e(Pd,Df),e(Vt,Sf),e(Vt,Ws),e(Ws,Rr),e(Rr,Gf),e(Rr,Od),e(Od,Uf),e(Ws,Wf),e(Ws,Hr),e(Hr,Bf),e(Hr,Nd),e(Nd,Rf),e(he,Hf),e(he,Vn),y(Bs,Vn,null),e(Vn,Vf),e(Vn,Rs),e(Rs,Kf),e(Rs,Ad),e(Ad,Yf),e(Rs,Zf),e(he,Jf),e(he,Kn),y(Hs,Kn,null),e(Kn,Xf),e(Kn,Ld),e(Ld,Qf),e(he,e_),e(he,Vr),y(Vs,Vr,null),m(n,Zc,f),m(n,cn,f),e(cn,Yn),e(Yn,Id),y(Ks,Id,null),e(cn,t_),e(cn,Dd),e(Dd,n_),m(n,Jc,f),m(n,st,f),y(Ys,st,null),e(st,o_),e(st,pn),e(pn,s_),e(pn,Sd),e(Sd,a_),e(pn,r_),e(pn,Zs),e(Zs,i_),e(pn,d_),e(st,l_),e(st,Js),e(Js,c_),e(Js,Kr),e(Kr,p_),e(Js,h_),e(st,u_),e(st,Kt),y(Xs,Kt,null),e(Kt,m_),e(Kt,Gd),e(Gd,f_),e(Kt,__),e(Kt,Qs),e(Qs,Yr),e(Yr,g_),e(Yr,Ud),e(Ud,T_),e(Qs,v_),e(Qs,Zr),e(Zr,b_),e(Zr,Wd),e(Wd,k_),e(st,y_),e(st,Zn),y(ea,Zn,null),e(Zn,w_),e(Zn,Bd),e(Bd,$_),m(n,Xc,f),m(n,hn,f),e(hn,Jn),e(Jn,Rd),y(ta,Rd,null),e(hn,x_),e(hn,Hd),e(Hd,z_),m(n,Qc,f),m(n,oe,f),y(na,oe,null),e(oe,j_),e(oe,Vd),e(Vd,E_),e(oe,q_),e(oe,oa),e(oa,F_),e(oa,sa),e(sa,M_),e(oa,C_),e(oe,P_),e(oe,aa),e(aa,O_),e(aa,Jr),e(Jr,N_),e(aa,A_),e(oe,L_),e(oe,ra),e(ra,I_),e(ra,ia),e(ia,D_),e(ra,S_),e(oe,G_),e(oe,jt),y(da,jt,null),e(jt,U_),e(jt,un),e(un,W_),e(un,Xr),e(Xr,B_),e(un,R_),e(un,Kd),e(Kd,H_),e(un,V_),e(jt,K_),y(Xn,jt,null),e(jt,Y_),y(Qn,jt,null),e(oe,Z_),e(oe,Et),y(la,Et,null),e(Et,J_),e(Et,Yd),e(Yd,X_),e(Et,Q_),e(Et,Zd),e(Zd,eg),e(Et,tg),y(eo,Et,null),e(oe,ng),e(oe,Yt),y(ca,Yt,null),e(Yt,og),e(Yt,Jd),e(Jd,sg),e(Yt,ag),y(to,Yt,null),m(n,ep,f),m(n,mn,f),e(mn,no),e(no,Xd),y(pa,Xd,null),e(mn,rg),e(mn,Qd),e(Qd,ig),m(n,tp,f),m(n,se,f),y(ha,se,null),e(se,dg),e(se,ua),e(ua,lg),e(ua,el),e(el,cg),e(ua,pg),e(se,hg),e(se,ma),e(ma,ug),e(ma,fa),e(fa,mg),e(ma,fg),e(se,_g),e(se,_a),e(_a,gg),e(_a,Qr),e(Qr,Tg),e(_a,vg),e(se,bg),e(se,ga),e(ga,kg),e(ga,Ta),e(Ta,yg),e(ga,wg),e(se,$g),e(se,qt),y(va,qt,null),e(qt,xg),e(qt,fn),e(fn,zg),e(fn,ei),e(ei,jg),e(fn,Eg),e(fn,tl),e(tl,qg),e(fn,Fg),e(qt,Mg),y(oo,qt,null),e(qt,Cg),y(so,qt,null),e(se,Pg),e(se,Ft),y(ba,Ft,null),e(Ft,Og),e(Ft,nl),e(nl,Ng),e(Ft,Ag),e(Ft,ol),e(ol,Lg),e(Ft,Ig),y(ao,Ft,null),e(se,Dg),e(se,Zt),y(ka,Zt,null),e(Zt,Sg),e(Zt,sl),e(sl,Gg),e(Zt,Ug),y(ro,Zt,null),m(n,np,f),m(n,_n,f),e(_n,io),e(io,al),y(ya,al,null),e(_n,Wg),e(_n,rl),e(rl,Bg),m(n,op,f),m(n,ae,f),y(wa,ae,null),e(ae,Rg),e(ae,il),e(il,Hg),e(ae,Vg),e(ae,$a),e($a,Kg),e($a,xa),e(xa,Yg),e($a,Zg),e(ae,Jg),e(ae,za),e(za,Xg),e(za,ti),e(ti,Qg),e(za,eT),e(ae,tT),e(ae,ja),e(ja,nT),e(ja,Ea),e(Ea,oT),e(ja,sT),e(ae,aT),e(ae,Mt),y(qa,Mt,null),e(Mt,rT),e(Mt,gn),e(gn,iT),e(gn,ni),e(ni,dT),e(gn,lT),e(gn,dl),e(dl,cT),e(gn,pT),e(Mt,hT),y(lo,Mt,null),e(Mt,uT),y(co,Mt,null),e(ae,mT),e(ae,Ct),y(Fa,Ct,null),e(Ct,fT),e(Ct,ll),e(ll,_T),e(Ct,gT),e(Ct,cl),e(cl,TT),e(Ct,vT),y(po,Ct,null),e(ae,bT),e(ae,Jt),y(Ma,Jt,null),e(Jt,kT),e(Jt,pl),e(pl,yT),e(Jt,wT),y(ho,Jt,null),m(n,sp,f),m(n,Tn,f),e(Tn,uo),e(uo,hl),y(Ca,hl,null),e(Tn,$T),e(Tn,ul),e(ul,xT),m(n,ap,f),m(n,ue,f),y(Pa,ue,null),e(ue,zT),e(ue,ml),e(ml,jT),e(ue,ET),e(ue,Oa),e(Oa,qT),e(Oa,Na),e(Na,FT),e(Oa,MT),e(ue,CT),e(ue,Aa),e(Aa,PT),e(Aa,oi),e(oi,OT),e(Aa,NT),e(ue,AT),e(ue,La),e(La,LT),e(La,Ia),e(Ia,IT),e(La,DT),e(ue,ST),y(mo,ue,null),e(ue,GT),e(ue,Pt),y(Da,Pt,null),e(Pt,UT),e(Pt,vn),e(vn,WT),e(vn,si),e(si,BT),e(vn,RT),e(vn,fl),e(fl,HT),e(vn,VT),e(Pt,KT),y(fo,Pt,null),e(Pt,YT),y(_o,Pt,null),m(n,rp,f),m(n,bn,f),e(bn,go),e(go,_l),y(Sa,_l,null),e(bn,ZT),e(bn,gl),e(gl,JT),m(n,ip,f),m(n,me,f),y(Ga,me,null),e(me,XT),e(me,Ua),e(Ua,QT),e(Ua,Tl),e(Tl,ev),e(Ua,tv),e(me,nv),e(me,Wa),e(Wa,ov),e(Wa,Ba),e(Ba,sv),e(Wa,av),e(me,rv),e(me,Ra),e(Ra,iv),e(Ra,ai),e(ai,dv),e(Ra,lv),e(me,cv),e(me,Ha),e(Ha,pv),e(Ha,Va),e(Va,hv),e(Ha,uv),e(me,mv),y(To,me,null),e(me,fv),e(me,Ot),y(Ka,Ot,null),e(Ot,_v),e(Ot,kn),e(kn,gv),e(kn,ri),e(ri,Tv),e(kn,vv),e(kn,vl),e(vl,bv),e(kn,kv),e(Ot,yv),y(vo,Ot,null),e(Ot,wv),y(bo,Ot,null),m(n,dp,f),m(n,yn,f),e(yn,ko),e(ko,bl),y(Ya,bl,null),e(yn,$v),e(yn,kl),e(kl,xv),m(n,lp,f),m(n,fe,f),y(Za,fe,null),e(fe,zv),e(fe,yl),e(yl,jv),e(fe,Ev),e(fe,Ja),e(Ja,qv),e(Ja,Xa),e(Xa,Fv),e(Ja,Mv),e(fe,Cv),e(fe,Qa),e(Qa,Pv),e(Qa,ii),e(ii,Ov),e(Qa,Nv),e(fe,Av),e(fe,er),e(er,Lv),e(er,tr),e(tr,Iv),e(er,Dv),e(fe,Sv),y(yo,fe,null),e(fe,Gv),e(fe,Nt),y(nr,Nt,null),e(Nt,Uv),e(Nt,wn),e(wn,Wv),e(wn,di),e(di,Bv),e(wn,Rv),e(wn,wl),e(wl,Hv),e(wn,Vv),e(Nt,Kv),y(wo,Nt,null),e(Nt,Yv),y($o,Nt,null),m(n,cp,f),m(n,$n,f),e($n,xo),e(xo,$l),y(or,$l,null),e($n,Zv),e($n,xl),e(xl,Jv),m(n,pp,f),m(n,_t,f),y(sr,_t,null),e(_t,Xv),e(_t,At),y(ar,At,null),e(At,Qv),e(At,xn),e(xn,eb),e(xn,zl),e(zl,tb),e(xn,nb),e(xn,jl),e(jl,ob),e(xn,sb),e(At,ab),y(zo,At,null),e(At,rb),y(jo,At,null),e(_t,ib),e(_t,Eo),y(rr,Eo,null),e(Eo,db),y(qo,Eo,null),e(_t,lb),e(_t,Fo),y(ir,Fo,null),e(Fo,cb),y(Mo,Fo,null),m(n,hp,f),m(n,zn,f),e(zn,Co),e(Co,El),y(dr,El,null),e(zn,pb),e(zn,ql),e(ql,hb),m(n,up,f),m(n,gt,f),y(lr,gt,null),e(gt,ub),e(gt,Lt),y(cr,Lt,null),e(Lt,mb),e(Lt,jn),e(jn,fb),e(jn,Fl),e(Fl,_b),e(jn,gb),e(jn,Ml),e(Ml,Tb),e(jn,vb),e(Lt,bb),y(Po,Lt,null),e(Lt,kb),y(Oo,Lt,null),e(gt,yb),e(gt,No),y(pr,No,null),e(No,wb),y(Ao,No,null),e(gt,$b),e(gt,Lo),y(hr,Lo,null),e(Lo,xb),y(Io,Lo,null),m(n,mp,f),m(n,En,f),e(En,Do),e(Do,Cl),y(ur,Cl,null),e(En,zb),e(En,Pl),e(Pl,jb),m(n,fp,f),m(n,qn,f),y(mr,qn,null),e(qn,Eb),e(qn,Xt),y(fr,Xt,null),e(Xt,qb),e(Xt,Fn),e(Fn,Fb),e(Fn,li),e(li,Mb),e(Fn,Cb),e(Fn,Ol),e(Ol,Pb),e(Fn,Ob),e(Xt,Nb),y(So,Xt,null),_p=!0},p(n,[f]){const _r={};f&2&&(_r.$$scope={dirty:f,ctx:n}),Xn.$set(_r);const Nl={};f&2&&(Nl.$$scope={dirty:f,ctx:n}),Qn.$set(Nl);const Al={};f&2&&(Al.$$scope={dirty:f,ctx:n}),eo.$set(Al);const Ll={};f&2&&(Ll.$$scope={dirty:f,ctx:n}),to.$set(Ll);const gr={};f&2&&(gr.$$scope={dirty:f,ctx:n}),oo.$set(gr);const Il={};f&2&&(Il.$$scope={dirty:f,ctx:n}),so.$set(Il);const Dl={};f&2&&(Dl.$$scope={dirty:f,ctx:n}),ao.$set(Dl);const Sl={};f&2&&(Sl.$$scope={dirty:f,ctx:n}),ro.$set(Sl);const Tr={};f&2&&(Tr.$$scope={dirty:f,ctx:n}),lo.$set(Tr);const Gl={};f&2&&(Gl.$$scope={dirty:f,ctx:n}),co.$set(Gl);const Ul={};f&2&&(Ul.$$scope={dirty:f,ctx:n}),po.$set(Ul);const Wl={};f&2&&(Wl.$$scope={dirty:f,ctx:n}),ho.$set(Wl);const Bl={};f&2&&(Bl.$$scope={dirty:f,ctx:n}),mo.$set(Bl);const Rl={};f&2&&(Rl.$$scope={dirty:f,ctx:n}),fo.$set(Rl);const Mn={};f&2&&(Mn.$$scope={dirty:f,ctx:n}),_o.$set(Mn);const Hl={};f&2&&(Hl.$$scope={dirty:f,ctx:n}),To.$set(Hl);const Cn={};f&2&&(Cn.$$scope={dirty:f,ctx:n}),vo.$set(Cn);const Vl={};f&2&&(Vl.$$scope={dirty:f,ctx:n}),bo.$set(Vl);const Kl={};f&2&&(Kl.$$scope={dirty:f,ctx:n}),yo.$set(Kl);const Yl={};f&2&&(Yl.$$scope={dirty:f,ctx:n}),wo.$set(Yl);const Zl={};f&2&&(Zl.$$scope={dirty:f,ctx:n}),$o.$set(Zl);const Jl={};f&2&&(Jl.$$scope={dirty:f,ctx:n}),zo.$set(Jl);const Ut={};f&2&&(Ut.$$scope={dirty:f,ctx:n}),jo.$set(Ut);const Xl={};f&2&&(Xl.$$scope={dirty:f,ctx:n}),qo.$set(Xl);const Ql={};f&2&&(Ql.$$scope={dirty:f,ctx:n}),Mo.$set(Ql);const ec={};f&2&&(ec.$$scope={dirty:f,ctx:n}),Po.$set(ec);const tc={};f&2&&(tc.$$scope={dirty:f,ctx:n}),Oo.$set(tc);const Tt={};f&2&&(Tt.$$scope={dirty:f,ctx:n}),Ao.$set(Tt);const nc={};f&2&&(nc.$$scope={dirty:f,ctx:n}),Io.$set(nc);const oc={};f&2&&(oc.$$scope={dirty:f,ctx:n}),So.$set(oc)},i(n){_p||(w(d.$$.fragment,n),w(E.$$.fragment,n),w(ls.$$.fragment,n),w(cs.$$.fragment,n),w(hs.$$.fragment,n),w(ms.$$.fragment,n),w(Ts.$$.fragment,n),w(ks.$$.fragment,n),w(ys.$$.fragment,n),w(ws.$$.fragment,n),w($s.$$.fragment,n),w(zs.$$.fragment,n),w(Os.$$.fragment,n),w(Ns.$$.fragment,n),w(Ls.$$.fragment,n),w(Is.$$.fragment,n),w(Us.$$.fragment,n),w(Bs.$$.fragment,n),w(Hs.$$.fragment,n),w(Vs.$$.fragment,n),w(Ks.$$.fragment,n),w(Ys.$$.fragment,n),w(Xs.$$.fragment,n),w(ea.$$.fragment,n),w(ta.$$.fragment,n),w(na.$$.fragment,n),w(da.$$.fragment,n),w(Xn.$$.fragment,n),w(Qn.$$.fragment,n),w(la.$$.fragment,n),w(eo.$$.fragment,n),w(ca.$$.fragment,n),w(to.$$.fragment,n),w(pa.$$.fragment,n),w(ha.$$.fragment,n),w(va.$$.fragment,n),w(oo.$$.fragment,n),w(so.$$.fragment,n),w(ba.$$.fragment,n),w(ao.$$.fragment,n),w(ka.$$.fragment,n),w(ro.$$.fragment,n),w(ya.$$.fragment,n),w(wa.$$.fragment,n),w(qa.$$.fragment,n),w(lo.$$.fragment,n),w(co.$$.fragment,n),w(Fa.$$.fragment,n),w(po.$$.fragment,n),w(Ma.$$.fragment,n),w(ho.$$.fragment,n),w(Ca.$$.fragment,n),w(Pa.$$.fragment,n),w(mo.$$.fragment,n),w(Da.$$.fragment,n),w(fo.$$.fragment,n),w(_o.$$.fragment,n),w(Sa.$$.fragment,n),w(Ga.$$.fragment,n),w(To.$$.fragment,n),w(Ka.$$.fragment,n),w(vo.$$.fragment,n),w(bo.$$.fragment,n),w(Ya.$$.fragment,n),w(Za.$$.fragment,n),w(yo.$$.fragment,n),w(nr.$$.fragment,n),w(wo.$$.fragment,n),w($o.$$.fragment,n),w(or.$$.fragment,n),w(sr.$$.fragment,n),w(ar.$$.fragment,n),w(zo.$$.fragment,n),w(jo.$$.fragment,n),w(rr.$$.fragment,n),w(qo.$$.fragment,n),w(ir.$$.fragment,n),w(Mo.$$.fragment,n),w(dr.$$.fragment,n),w(lr.$$.fragment,n),w(cr.$$.fragment,n),w(Po.$$.fragment,n),w(Oo.$$.fragment,n),w(pr.$$.fragment,n),w(Ao.$$.fragment,n),w(hr.$$.fragment,n),w(Io.$$.fragment,n),w(ur.$$.fragment,n),w(mr.$$.fragment,n),w(fr.$$.fragment,n),w(So.$$.fragment,n),_p=!0)},o(n){$(d.$$.fragment,n),$(E.$$.fragment,n),$(ls.$$.fragment,n),$(cs.$$.fragment,n),$(hs.$$.fragment,n),$(ms.$$.fragment,n),$(Ts.$$.fragment,n),$(ks.$$.fragment,n),$(ys.$$.fragment,n),$(ws.$$.fragment,n),$($s.$$.fragment,n),$(zs.$$.fragment,n),$(Os.$$.fragment,n),$(Ns.$$.fragment,n),$(Ls.$$.fragment,n),$(Is.$$.fragment,n),$(Us.$$.fragment,n),$(Bs.$$.fragment,n),$(Hs.$$.fragment,n),$(Vs.$$.fragment,n),$(Ks.$$.fragment,n),$(Ys.$$.fragment,n),$(Xs.$$.fragment,n),$(ea.$$.fragment,n),$(ta.$$.fragment,n),$(na.$$.fragment,n),$(da.$$.fragment,n),$(Xn.$$.fragment,n),$(Qn.$$.fragment,n),$(la.$$.fragment,n),$(eo.$$.fragment,n),$(ca.$$.fragment,n),$(to.$$.fragment,n),$(pa.$$.fragment,n),$(ha.$$.fragment,n),$(va.$$.fragment,n),$(oo.$$.fragment,n),$(so.$$.fragment,n),$(ba.$$.fragment,n),$(ao.$$.fragment,n),$(ka.$$.fragment,n),$(ro.$$.fragment,n),$(ya.$$.fragment,n),$(wa.$$.fragment,n),$(qa.$$.fragment,n),$(lo.$$.fragment,n),$(co.$$.fragment,n),$(Fa.$$.fragment,n),$(po.$$.fragment,n),$(Ma.$$.fragment,n),$(ho.$$.fragment,n),$(Ca.$$.fragment,n),$(Pa.$$.fragment,n),$(mo.$$.fragment,n),$(Da.$$.fragment,n),$(fo.$$.fragment,n),$(_o.$$.fragment,n),$(Sa.$$.fragment,n),$(Ga.$$.fragment,n),$(To.$$.fragment,n),$(Ka.$$.fragment,n),$(vo.$$.fragment,n),$(bo.$$.fragment,n),$(Ya.$$.fragment,n),$(Za.$$.fragment,n),$(yo.$$.fragment,n),$(nr.$$.fragment,n),$(wo.$$.fragment,n),$($o.$$.fragment,n),$(or.$$.fragment,n),$(sr.$$.fragment,n),$(ar.$$.fragment,n),$(zo.$$.fragment,n),$(jo.$$.fragment,n),$(rr.$$.fragment,n),$(qo.$$.fragment,n),$(ir.$$.fragment,n),$(Mo.$$.fragment,n),$(dr.$$.fragment,n),$(lr.$$.fragment,n),$(cr.$$.fragment,n),$(Po.$$.fragment,n),$(Oo.$$.fragment,n),$(pr.$$.fragment,n),$(Ao.$$.fragment,n),$(hr.$$.fragment,n),$(Io.$$.fragment,n),$(ur.$$.fragment,n),$(mr.$$.fragment,n),$(fr.$$.fragment,n),$(So.$$.fragment,n),_p=!1},d(n){t(p),n&&t(v),n&&t(g),x(d),n&&t(qe),n&&t(S),x(E),n&&t(Fe),n&&t(G),n&&t(Me),n&&t(U),n&&t(Ce),n&&t(W),n&&t(ce),n&&t(C),n&&t(Pe),n&&t(D),n&&t(pe),n&&t(nt),n&&t(M),n&&t(Y),n&&t(ic),n&&t(br),n&&t(dc),n&&t(Wt),n&&t(lc),n&&t(An),n&&t(cc),n&&t(Bt),n&&t(pc),n&&t($r),n&&t(hc),n&&t(tn),x(ls),n&&t(uc),n&&t($t),n&&t(mc),n&&t(In),n&&t(fc),n&&t(zr),n&&t(_c),n&&t(ge),n&&t(gc),n&&t(Er),n&&t(Tc),x(cs,n),n&&t(vc),n&&t(Dn),n&&t(bc),n&&t(qr),n&&t(kc),n&&t(Fr),n&&t(yc),x(hs,n),n&&t(wc),n&&t(de),n&&t($c),n&&t(Rt),n&&t(xc),n&&t(Te),n&&t(zc),x(ms,n),n&&t(jc),n&&t(Mr),n&&t(Ec),n&&t(Cr),n&&t(qc),n&&t(Ht),n&&t(Fc),n&&t(Sn),n&&t(Mc),n&&t(Pr),n&&t(Cc),n&&t(nn),x(Ts),n&&t(Pc),n&&t(xt),n&&t(Oc),x(ks,n),n&&t(Nc),n&&t(lt),n&&t(Ac),n&&t(Ar),n&&t(Lc),x(ys,n),n&&t(Ic),n&&t(Lr),n&&t(Dc),x(ws,n),n&&t(Sc),n&&t(Ir),n&&t(Gc),n&&t(on),x($s),n&&t(Uc),n&&t(zt),n&&t(Wc),n&&t(sn),x(zs),n&&t(Bc),n&&t(Dr),n&&t(Rc),n&&t(Bn),n&&t(Hc),n&&t(rn),x(Os),n&&t(Vc),n&&t(St),x(Ns),n&&t(Kc),n&&t(ln),x(Ls),n&&t(Yc),n&&t(he),x(Is),x(Us),x(Bs),x(Hs),x(Vs),n&&t(Zc),n&&t(cn),x(Ks),n&&t(Jc),n&&t(st),x(Ys),x(Xs),x(ea),n&&t(Xc),n&&t(hn),x(ta),n&&t(Qc),n&&t(oe),x(na),x(da),x(Xn),x(Qn),x(la),x(eo),x(ca),x(to),n&&t(ep),n&&t(mn),x(pa),n&&t(tp),n&&t(se),x(ha),x(va),x(oo),x(so),x(ba),x(ao),x(ka),x(ro),n&&t(np),n&&t(_n),x(ya),n&&t(op),n&&t(ae),x(wa),x(qa),x(lo),x(co),x(Fa),x(po),x(Ma),x(ho),n&&t(sp),n&&t(Tn),x(Ca),n&&t(ap),n&&t(ue),x(Pa),x(mo),x(Da),x(fo),x(_o),n&&t(rp),n&&t(bn),x(Sa),n&&t(ip),n&&t(me),x(Ga),x(To),x(Ka),x(vo),x(bo),n&&t(dp),n&&t(yn),x(Ya),n&&t(lp),n&&t(fe),x(Za),x(yo),x(nr),x(wo),x($o),n&&t(cp),n&&t($n),x(or),n&&t(pp),n&&t(_t),x(sr),x(ar),x(zo),x(jo),x(rr),x(qo),x(ir),x(Mo),n&&t(hp),n&&t(zn),x(dr),n&&t(up),n&&t(gt),x(lr),x(cr),x(Po),x(Oo),x(pr),x(Ao),x(hr),x(Io),n&&t(mp),n&&t(En),x(ur),n&&t(fp),n&&t(qn),x(mr),x(fr),x(So)}}}const pw={local:"t5",sections:[{local:"overview",title:"Overview"},{local:"training",title:"Training"},{local:"inference",title:"Inference"},{local:"performance",title:"Performance"},{local:"example-scripts",title:"Example scripts"},{local:"transformers.T5Config",title:"T5Config"},{local:"transformers.T5Tokenizer",title:"T5Tokenizer"},{local:"transformers.T5TokenizerFast",title:"T5TokenizerFast"},{local:"transformers.T5Model",title:"T5Model"},{local:"transformers.T5ForConditionalGeneration",title:"T5ForConditionalGeneration"},{local:"transformers.T5EncoderModel",title:"T5EncoderModel"},{local:"transformers.TFT5Model",title:"TFT5Model"},{local:"transformers.TFT5ForConditionalGeneration",title:"TFT5ForConditionalGeneration"},{local:"transformers.TFT5EncoderModel",title:"TFT5EncoderModel"},{local:"transformers.FlaxT5Model",title:"FlaxT5Model"},{local:"transformers.FlaxT5ForConditionalGeneration",title:"FlaxT5ForConditionalGeneration"},{local:"transformers.FlaxT5EncoderModel",title:"FlaxT5EncoderModel"}],title:"T5"};function hw(j){return P5(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class vw extends q5{constructor(p){super();F5(this,p,hw,cw,M5,{})}}export{vw as default,pw as metadata};
