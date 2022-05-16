import{S as Y1,i as Z1,s as J1,e as a,k as d,w as b,t as o,M as X1,c as r,d as t,m as c,a as i,x as k,h as s,b as h,F as e,g as m,y,q as w,o as $,B as x,v as Q1,L as ge}from"../../chunks/vendor-6b77c823.js";import{T as wt}from"../../chunks/Tip-39098574.js";import{D as C}from"../../chunks/Docstring-1088f2fb.js";import{C as S}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as be}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as _e}from"../../chunks/ExampleCodeBlock-5212b321.js";function e5(j){let p,v,g,u,T;return{c(){p=a("p"),v=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var _=i(p);v=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var q=i(g);u=s(q,"Module"),q.forEach(t),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(l,_){m(l,p,_),e(p,v),e(p,g),e(g,u),e(p,T)},d(l){l&&t(p)}}}function t5(j){let p,v,g,u,T;return u=new S({props:{code:`from transformers import T5Tokenizer, T5Model

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5Model.from_pretrained("t5-small")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="pt").input_ids  # Batch size 1

# forward pass
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5Model.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=a("p"),v=o("Example:"),g=d(),b(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);v=s(_,"Example:"),_.forEach(t),g=c(l),k(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,v),m(l,g,_),y(u,l,_),T=!0},p:ge,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function n5(j){let p,v,g,u,T;return u=new S({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
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
model.parallelize(device_map)`}}),{c(){p=a("p"),v=o("Example:"),g=d(),b(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);v=s(_,"Example:"),_.forEach(t),g=c(l),k(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,v),m(l,g,_),y(u,l,_),T=!0},p:ge,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function o5(j){let p,v,g,u,T;return u=new S({props:{code:`# On a 4 GPU machine with t5-3b:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),{c(){p=a("p"),v=o("Example:"),g=d(),b(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);v=s(_,"Example:"),_.forEach(t),g=c(l),k(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,v),m(l,g,_),y(u,l,_),T=!0},p:ge,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function s5(j){let p,v,g,u,T;return{c(){p=a("p"),v=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var _=i(p);v=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var q=i(g);u=s(q,"Module"),q.forEach(t),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(l,_){m(l,p,_),e(p,v),e(p,g),e(g,u),e(p,T)},d(l){l&&t(p)}}}function a5(j){let p,v,g,u,T;return u=new S({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you.</span>`}}),{c(){p=a("p"),v=o("Examples:"),g=d(),b(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);v=s(_,"Examples:"),_.forEach(t),g=c(l),k(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,v),m(l,g,_),y(u,l,_),T=!0},p:ge,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function r5(j){let p,v,g,u,T;return u=new S({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
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
model.parallelize(device_map)`}}),{c(){p=a("p"),v=o("Example:"),g=d(),b(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);v=s(_,"Example:"),_.forEach(t),g=c(l),k(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,v),m(l,g,_),y(u,l,_),T=!0},p:ge,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function i5(j){let p,v,g,u,T;return u=new S({props:{code:`# On a 4 GPU machine with t5-3b:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),{c(){p=a("p"),v=o("Example:"),g=d(),b(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);v=s(_,"Example:"),_.forEach(t),g=c(l),k(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,v),m(l,g,_),y(u,l,_),T=!0},p:ge,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function l5(j){let p,v,g,u,T;return{c(){p=a("p"),v=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var _=i(p);v=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var q=i(g);u=s(q,"Module"),q.forEach(t),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(l,_){m(l,p,_),e(p,v),e(p,g),e(g,u),e(p,T)},d(l){l&&t(p)}}}function d5(j){let p,v,g,u,T;return u=new S({props:{code:`from transformers import T5Tokenizer, T5EncoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=a("p"),v=o("Example:"),g=d(),b(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);v=s(_,"Example:"),_.forEach(t),g=c(l),k(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,v),m(l,g,_),y(u,l,_),T=!0},p:ge,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function c5(j){let p,v,g,u,T;return u=new S({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
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
model.parallelize(device_map)`}}),{c(){p=a("p"),v=o("Example:"),g=d(),b(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);v=s(_,"Example:"),_.forEach(t),g=c(l),k(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,v),m(l,g,_),y(u,l,_),T=!0},p:ge,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function p5(j){let p,v,g,u,T;return u=new S({props:{code:`# On a 4 GPU machine with t5-3b:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),{c(){p=a("p"),v=o("Example:"),g=d(),b(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);v=s(_,"Example:"),_.forEach(t),g=c(l),k(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,v),m(l,g,_),y(u,l,_),T=!0},p:ge,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function h5(j){let p,v,g,u,T,l,_,q,qe,se,E,ee,G,ae,Ee,U,Fe,ke,W,A,re,pe,M,N,he,K,ye,ue,B,Me,we,P,Ce,H,V,Te,O,Pe,ve,I,Ne,R,Oe;return{c(){p=a("p"),v=o("TF 2.0 models accepts two formats as inputs:"),g=d(),u=a("ul"),T=a("li"),l=o("having all inputs as keyword arguments (like PyTorch models), or"),_=d(),q=a("li"),qe=o("having all inputs as a list, tuple or dict in the first positional arguments."),se=d(),E=a("p"),ee=o("This second option is useful when using "),G=a("code"),ae=o("tf.keras.Model.fit"),Ee=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),U=a("code"),Fe=o("model(inputs)"),ke=o("."),W=d(),A=a("p"),re=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=d(),M=a("ul"),N=a("li"),he=o("a single Tensor with "),K=a("code"),ye=o("input_ids"),ue=o(" only and nothing else: "),B=a("code"),Me=o("model(inputs_ids)"),we=d(),P=a("li"),Ce=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=a("code"),V=o("model([input_ids, attention_mask])"),Te=o(" or "),O=a("code"),Pe=o("model([input_ids, attention_mask, token_type_ids])"),ve=d(),I=a("li"),Ne=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a("code"),Oe=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){p=r(z,"P",{});var F=i(p);v=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=c(z),u=r(z,"UL",{});var te=i(u);T=r(te,"LI",{});var Ge=i(T);l=s(Ge,"having all inputs as keyword arguments (like PyTorch models), or"),Ge.forEach(t),_=c(te),q=r(te,"LI",{});var et=i(q);qe=s(et,"having all inputs as a list, tuple or dict in the first positional arguments."),et.forEach(t),te.forEach(t),se=c(z),E=r(z,"P",{});var D=i(E);ee=s(D,"This second option is useful when using "),G=r(D,"CODE",{});var Ue=i(G);ae=s(Ue,"tf.keras.Model.fit"),Ue.forEach(t),Ee=s(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),U=r(D,"CODE",{});var ne=i(U);Fe=s(ne,"model(inputs)"),ne.forEach(t),ke=s(D,"."),D.forEach(t),W=c(z),A=r(z,"P",{});var tt=i(A);re=s(tt,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),tt.forEach(t),pe=c(z),M=r(z,"UL",{});var L=i(M);N=r(L,"LI",{});var Y=i(N);he=s(Y,"a single Tensor with "),K=r(Y,"CODE",{});var nt=i(K);ye=s(nt,"input_ids"),nt.forEach(t),ue=s(Y," only and nothing else: "),B=r(Y,"CODE",{});var Le=i(B);Me=s(Le,"model(inputs_ids)"),Le.forEach(t),Y.forEach(t),we=c(L),P=r(L,"LI",{});var Z=i(P);Ce=s(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=r(Z,"CODE",{});var ot=i(H);V=s(ot,"model([input_ids, attention_mask])"),ot.forEach(t),Te=s(Z," or "),O=r(Z,"CODE",{});var Ae=i(O);Pe=s(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(t),Z.forEach(t),ve=c(L),I=r(L,"LI",{});var Ie=i(I);Ne=s(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(Ie,"CODE",{});var st=i(R);Oe=s(st,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),st.forEach(t),Ie.forEach(t),L.forEach(t)},m(z,F){m(z,p,F),e(p,v),m(z,g,F),m(z,u,F),e(u,T),e(T,l),e(u,_),e(u,q),e(q,qe),m(z,se,F),m(z,E,F),e(E,ee),e(E,G),e(G,ae),e(E,Ee),e(E,U),e(U,Fe),e(E,ke),m(z,W,F),m(z,A,F),e(A,re),m(z,pe,F),m(z,M,F),e(M,N),e(N,he),e(N,K),e(K,ye),e(N,ue),e(N,B),e(B,Me),e(M,we),e(M,P),e(P,Ce),e(P,H),e(H,V),e(P,Te),e(P,O),e(O,Pe),e(M,ve),e(M,I),e(I,Ne),e(I,R),e(R,Oe)},d(z){z&&t(p),z&&t(g),z&&t(u),z&&t(se),z&&t(E),z&&t(W),z&&t(A),z&&t(pe),z&&t(M)}}}function u5(j){let p,v,g,u,T;return{c(){p=a("p"),v=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var _=i(p);v=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var q=i(g);u=s(q,"Module"),q.forEach(t),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(l,_){m(l,p,_),e(p,v),e(p,g),e(g,u),e(p,T)},d(l){l&&t(p)}}}function m5(j){let p,v,g,u,T;return u=new S({props:{code:`from transformers import T5Tokenizer, TFT5Model

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = TFT5Model.from_pretrained("t5-small")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="tf"
).input_ids  # Batch size 1
decoder_input_ids = tokenizer("Studies show that", return_tensors="tf").input_ids  # Batch size 1

# forward pass
outputs = model(input_ids, decoder_input_ids=decoder_input_ids)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, TFT5Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFT5Model.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=a("p"),v=o("Examples:"),g=d(),b(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);v=s(_,"Examples:"),_.forEach(t),g=c(l),k(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,v),m(l,g,_),y(u,l,_),T=!0},p:ge,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function f5(j){let p,v,g,u,T,l,_,q,qe,se,E,ee,G,ae,Ee,U,Fe,ke,W,A,re,pe,M,N,he,K,ye,ue,B,Me,we,P,Ce,H,V,Te,O,Pe,ve,I,Ne,R,Oe;return{c(){p=a("p"),v=o("TF 2.0 models accepts two formats as inputs:"),g=d(),u=a("ul"),T=a("li"),l=o("having all inputs as keyword arguments (like PyTorch models), or"),_=d(),q=a("li"),qe=o("having all inputs as a list, tuple or dict in the first positional arguments."),se=d(),E=a("p"),ee=o("This second option is useful when using "),G=a("code"),ae=o("tf.keras.Model.fit"),Ee=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),U=a("code"),Fe=o("model(inputs)"),ke=o("."),W=d(),A=a("p"),re=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=d(),M=a("ul"),N=a("li"),he=o("a single Tensor with "),K=a("code"),ye=o("input_ids"),ue=o(" only and nothing else: "),B=a("code"),Me=o("model(inputs_ids)"),we=d(),P=a("li"),Ce=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=a("code"),V=o("model([input_ids, attention_mask])"),Te=o(" or "),O=a("code"),Pe=o("model([input_ids, attention_mask, token_type_ids])"),ve=d(),I=a("li"),Ne=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a("code"),Oe=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){p=r(z,"P",{});var F=i(p);v=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=c(z),u=r(z,"UL",{});var te=i(u);T=r(te,"LI",{});var Ge=i(T);l=s(Ge,"having all inputs as keyword arguments (like PyTorch models), or"),Ge.forEach(t),_=c(te),q=r(te,"LI",{});var et=i(q);qe=s(et,"having all inputs as a list, tuple or dict in the first positional arguments."),et.forEach(t),te.forEach(t),se=c(z),E=r(z,"P",{});var D=i(E);ee=s(D,"This second option is useful when using "),G=r(D,"CODE",{});var Ue=i(G);ae=s(Ue,"tf.keras.Model.fit"),Ue.forEach(t),Ee=s(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),U=r(D,"CODE",{});var ne=i(U);Fe=s(ne,"model(inputs)"),ne.forEach(t),ke=s(D,"."),D.forEach(t),W=c(z),A=r(z,"P",{});var tt=i(A);re=s(tt,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),tt.forEach(t),pe=c(z),M=r(z,"UL",{});var L=i(M);N=r(L,"LI",{});var Y=i(N);he=s(Y,"a single Tensor with "),K=r(Y,"CODE",{});var nt=i(K);ye=s(nt,"input_ids"),nt.forEach(t),ue=s(Y," only and nothing else: "),B=r(Y,"CODE",{});var Le=i(B);Me=s(Le,"model(inputs_ids)"),Le.forEach(t),Y.forEach(t),we=c(L),P=r(L,"LI",{});var Z=i(P);Ce=s(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=r(Z,"CODE",{});var ot=i(H);V=s(ot,"model([input_ids, attention_mask])"),ot.forEach(t),Te=s(Z," or "),O=r(Z,"CODE",{});var Ae=i(O);Pe=s(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(t),Z.forEach(t),ve=c(L),I=r(L,"LI",{});var Ie=i(I);Ne=s(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(Ie,"CODE",{});var st=i(R);Oe=s(st,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),st.forEach(t),Ie.forEach(t),L.forEach(t)},m(z,F){m(z,p,F),e(p,v),m(z,g,F),m(z,u,F),e(u,T),e(T,l),e(u,_),e(u,q),e(q,qe),m(z,se,F),m(z,E,F),e(E,ee),e(E,G),e(G,ae),e(E,Ee),e(E,U),e(U,Fe),e(E,ke),m(z,W,F),m(z,A,F),e(A,re),m(z,pe,F),m(z,M,F),e(M,N),e(N,he),e(N,K),e(K,ye),e(N,ue),e(N,B),e(B,Me),e(M,we),e(M,P),e(P,Ce),e(P,H),e(H,V),e(P,Te),e(P,O),e(O,Pe),e(M,ve),e(M,I),e(I,Ne),e(I,R),e(R,Oe)},d(z){z&&t(p),z&&t(g),z&&t(u),z&&t(se),z&&t(E),z&&t(W),z&&t(A),z&&t(pe),z&&t(M)}}}function _5(j){let p,v,g,u,T;return{c(){p=a("p"),v=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var _=i(p);v=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var q=i(g);u=s(q,"Module"),q.forEach(t),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(l,_){m(l,p,_),e(p,v),e(p,g),e(g,u),e(p,T)},d(l){l&&t(p)}}}function g5(j){let p,v,g,u,T;return u=new S({props:{code:`from transformers import T5Tokenizer, TFT5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you</span>`}}),{c(){p=a("p"),v=o("Examples:"),g=d(),b(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);v=s(_,"Examples:"),_.forEach(t),g=c(l),k(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,v),m(l,g,_),y(u,l,_),T=!0},p:ge,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function T5(j){let p,v,g,u,T,l,_,q,qe,se,E,ee,G,ae,Ee,U,Fe,ke,W,A,re,pe,M,N,he,K,ye,ue,B,Me,we,P,Ce,H,V,Te,O,Pe,ve,I,Ne,R,Oe;return{c(){p=a("p"),v=o("TF 2.0 models accepts two formats as inputs:"),g=d(),u=a("ul"),T=a("li"),l=o("having all inputs as keyword arguments (like PyTorch models), or"),_=d(),q=a("li"),qe=o("having all inputs as a list, tuple or dict in the first positional arguments."),se=d(),E=a("p"),ee=o("This second option is useful when using "),G=a("code"),ae=o("tf.keras.Model.fit"),Ee=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),U=a("code"),Fe=o("model(inputs)"),ke=o("."),W=d(),A=a("p"),re=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=d(),M=a("ul"),N=a("li"),he=o("a single Tensor with "),K=a("code"),ye=o("input_ids"),ue=o(" only and nothing else: "),B=a("code"),Me=o("model(inputs_ids)"),we=d(),P=a("li"),Ce=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=a("code"),V=o("model([input_ids, attention_mask])"),Te=o(" or "),O=a("code"),Pe=o("model([input_ids, attention_mask, token_type_ids])"),ve=d(),I=a("li"),Ne=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a("code"),Oe=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){p=r(z,"P",{});var F=i(p);v=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=c(z),u=r(z,"UL",{});var te=i(u);T=r(te,"LI",{});var Ge=i(T);l=s(Ge,"having all inputs as keyword arguments (like PyTorch models), or"),Ge.forEach(t),_=c(te),q=r(te,"LI",{});var et=i(q);qe=s(et,"having all inputs as a list, tuple or dict in the first positional arguments."),et.forEach(t),te.forEach(t),se=c(z),E=r(z,"P",{});var D=i(E);ee=s(D,"This second option is useful when using "),G=r(D,"CODE",{});var Ue=i(G);ae=s(Ue,"tf.keras.Model.fit"),Ue.forEach(t),Ee=s(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),U=r(D,"CODE",{});var ne=i(U);Fe=s(ne,"model(inputs)"),ne.forEach(t),ke=s(D,"."),D.forEach(t),W=c(z),A=r(z,"P",{});var tt=i(A);re=s(tt,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),tt.forEach(t),pe=c(z),M=r(z,"UL",{});var L=i(M);N=r(L,"LI",{});var Y=i(N);he=s(Y,"a single Tensor with "),K=r(Y,"CODE",{});var nt=i(K);ye=s(nt,"input_ids"),nt.forEach(t),ue=s(Y," only and nothing else: "),B=r(Y,"CODE",{});var Le=i(B);Me=s(Le,"model(inputs_ids)"),Le.forEach(t),Y.forEach(t),we=c(L),P=r(L,"LI",{});var Z=i(P);Ce=s(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=r(Z,"CODE",{});var ot=i(H);V=s(ot,"model([input_ids, attention_mask])"),ot.forEach(t),Te=s(Z," or "),O=r(Z,"CODE",{});var Ae=i(O);Pe=s(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(t),Z.forEach(t),ve=c(L),I=r(L,"LI",{});var Ie=i(I);Ne=s(Ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(Ie,"CODE",{});var st=i(R);Oe=s(st,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),st.forEach(t),Ie.forEach(t),L.forEach(t)},m(z,F){m(z,p,F),e(p,v),m(z,g,F),m(z,u,F),e(u,T),e(T,l),e(u,_),e(u,q),e(q,qe),m(z,se,F),m(z,E,F),e(E,ee),e(E,G),e(G,ae),e(E,Ee),e(E,U),e(U,Fe),e(E,ke),m(z,W,F),m(z,A,F),e(A,re),m(z,pe,F),m(z,M,F),e(M,N),e(N,he),e(N,K),e(K,ye),e(N,ue),e(N,B),e(B,Me),e(M,we),e(M,P),e(P,Ce),e(P,H),e(H,V),e(P,Te),e(P,O),e(O,Pe),e(M,ve),e(M,I),e(I,Ne),e(I,R),e(R,Oe)},d(z){z&&t(p),z&&t(g),z&&t(u),z&&t(se),z&&t(E),z&&t(W),z&&t(A),z&&t(pe),z&&t(M)}}}function v5(j){let p,v,g,u,T;return{c(){p=a("p"),v=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var _=i(p);v=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var q=i(g);u=s(q,"Module"),q.forEach(t),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(l,_){m(l,p,_),e(p,v),e(p,g),e(g,u),e(p,T)},d(l){l&&t(p)}}}function b5(j){let p,v,g,u,T;return u=new S({props:{code:`from transformers import T5Tokenizer, TFT5EncoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)`}}),{c(){p=a("p"),v=o("Examples:"),g=d(),b(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);v=s(_,"Examples:"),_.forEach(t),g=c(l),k(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,v),m(l,g,_),y(u,l,_),T=!0},p:ge,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function k5(j){let p,v,g,u,T;return{c(){p=a("p"),v=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var _=i(p);v=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var q=i(g);u=s(q,"Module"),q.forEach(t),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(l,_){m(l,p,_),e(p,v),e(p,g),e(g,u),e(p,T)},d(l){l&&t(p)}}}function y5(j){let p,v,g,u,T;return u=new S({props:{code:`from transformers import T5Tokenizer, FlaxT5Model

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5Model.from_pretrained("t5-small")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="np"
).input_ids
decoder_input_ids = tokenizer("Studies show that", return_tensors="np").input_ids

# forward pass
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5Model.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>
<span class="hljs-meta">... </span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=a("p"),v=o("Example:"),g=d(),b(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);v=s(_,"Example:"),_.forEach(t),g=c(l),k(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,v),m(l,g,_),y(u,l,_),T=!0},p:ge,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function w5(j){let p,v,g,u,T;return u=new S({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=a("p"),v=o("Example:"),g=d(),b(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);v=s(_,"Example:"),_.forEach(t),g=c(l),k(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,v),m(l,g,_),y(u,l,_),T=!0},p:ge,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function $5(j){let p,v,g,u,T;return u=new S({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=a("p"),v=o("Example:"),g=d(),b(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);v=s(_,"Example:"),_.forEach(t),g=c(l),k(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,v),m(l,g,_),y(u,l,_),T=!0},p:ge,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function x5(j){let p,v,g,u,T;return{c(){p=a("p"),v=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var _=i(p);v=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var q=i(g);u=s(q,"Module"),q.forEach(t),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(l,_){m(l,p,_),e(p,v),e(p,g),e(g,u),e(p,T)},d(l){l&&t(p)}}}function z5(j){let p,v,g,u,T;return u=new S({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){p=a("p"),v=o("Example:"),g=d(),b(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);v=s(_,"Example:"),_.forEach(t),g=c(l),k(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,v),m(l,g,_),y(u,l,_),T=!0},p:ge,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function j5(j){let p,v,g,u,T;return u=new S({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=a("p"),v=o("Example:"),g=d(),b(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);v=s(_,"Example:"),_.forEach(t),g=c(l),k(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,v),m(l,g,_),y(u,l,_),T=!0},p:ge,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function q5(j){let p,v,g,u,T;return u=new S({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=a("p"),v=o("Example:"),g=d(),b(u.$$.fragment)},l(l){p=r(l,"P",{});var _=i(p);v=s(_,"Example:"),_.forEach(t),g=c(l),k(u.$$.fragment,l)},m(l,_){m(l,p,_),e(p,v),m(l,g,_),y(u,l,_),T=!0},p:ge,i(l){T||(w(u.$$.fragment,l),T=!0)},o(l){$(u.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(u,l)}}}function E5(j){let p,v,g,u,T,l,_,q,qe,se,E,ee,G,ae,Ee,U,Fe,ke,W,A,re,pe,M,N,he,K,ye,ue,B,Me,we,P,Ce,H,V,Te,O,Pe,ve,I,Ne,R,Oe,z,F,te,Ge,et,D,Ue,ne,tt,L,Y,nt,Le,Z,ot,Ae,Ie,st,Ld,Ka,Hp,Ad,We,ri,ii,Po,Vp,Kp,li,di,No,Yp,Zp,ci,pi,Oo,Jp,Xp,hi,ui,Lo,Qp,eh,mi,Ya,Ao,th,nh,Id,Za,oh,Dd,$t,fi,cn,_i,sh,ah,Ja,rh,ih,lh,gi,pn,Ti,dh,ch,Xa,ph,hh,uh,vi,hn,bi,mh,fh,Qa,_h,gh,Sd,un,Th,Io,vh,bh,Gd,xt,kh,Do,yh,wh,So,$h,xh,Ud,er,Wd,Ot,mn,ki,Go,zh,yi,jh,Bd,at,qh,wi,Eh,Fh,$i,Mh,Ch,xi,Ph,Nh,Rd,fn,Oh,tr,Lh,Ah,Hd,nr,zi,Ih,Vd,me,Dh,ji,Sh,Gh,qi,Uh,Wh,Ei,Bh,Rh,Fi,Hh,Vh,Mi,Kh,Yh,or,Zh,Jh,Kd,sr,Xh,Yd,Uo,Zd,_n,Qh,Wo,eu,tu,Jd,ar,Ci,nu,Xd,rr,ou,Qd,Bo,ec,oe,su,Pi,au,ru,Ni,iu,lu,Oi,du,cu,Li,pu,hu,Ai,uu,mu,Ii,fu,_u,Di,gu,Tu,tc,zt,vu,Si,bu,ku,Gi,yu,wu,nc,fe,$u,Ui,xu,zu,Wi,ju,qu,Bi,Eu,Fu,Ri,Mu,Cu,Ro,Pu,Nu,Hi,Ou,Lu,oc,Ho,sc,ir,Au,ac,lr,Vo,Iu,Vi,Du,Su,rc,jt,Gu,Ko,Uu,Wu,Yo,Bu,Ru,ic,gn,Hu,Ki,Vu,Ku,lc,dr,dc,Lt,Tn,Yi,Zo,Yu,Zi,Zu,cc,rt,Ju,cr,Xu,Qu,Jo,em,tm,Xo,nm,om,pc,Qo,hc,Be,sm,Ji,am,rm,Xi,im,lm,pr,dm,cm,Qi,pm,hm,uc,hr,um,mc,es,fc,ur,mm,_c,ts,gc,mr,Tc,At,vn,el,ns,fm,tl,_m,vc,it,gm,os,Tm,vm,nl,bm,km,ol,ym,wm,bc,It,bn,sl,ss,$m,al,xm,kc,fr,zm,yc,kn,rl,Dt,jm,as,qm,Em,rs,Fm,Mm,Cm,il,De,Pm,is,Nm,Om,ls,Lm,Am,ds,Im,Dm,cs,Sm,Gm,ps,Um,Wm,wc,St,yn,ll,hs,Bm,dl,Rm,$c,bt,us,Hm,kt,Vm,_r,Km,Ym,gr,Zm,Jm,ms,Xm,Qm,ef,Gt,tf,Tr,nf,of,vr,sf,af,xc,Ut,wn,cl,fs,rf,pl,lf,zc,ie,_s,df,gs,cf,Ts,pf,hf,uf,vs,mf,br,ff,_f,gf,qt,bs,Tf,hl,vf,bf,ks,kr,kf,ul,yf,wf,yr,$f,ml,xf,zf,$n,ys,jf,ws,qf,fl,Ef,Ff,Mf,xn,$s,Cf,_l,Pf,Nf,wr,xs,jc,Wt,zn,gl,zs,Of,Tl,Lf,qc,Se,js,Af,Bt,If,vl,Df,Sf,qs,Gf,Uf,Wf,Es,Bf,$r,Rf,Hf,Vf,Et,Fs,Kf,bl,Yf,Zf,Ms,xr,Jf,kl,Xf,Qf,zr,e_,yl,t_,n_,jn,Cs,o_,wl,s_,Ec,Rt,qn,$l,Ps,a_,xl,r_,Fc,J,Ns,i_,zl,l_,d_,Os,c_,Ls,p_,h_,u_,As,m_,jr,f_,__,g_,Is,T_,Ds,v_,b_,k_,lt,Ss,y_,Ht,w_,qr,$_,x_,jl,z_,j_,q_,En,E_,Fn,F_,dt,Gs,M_,ql,C_,P_,El,N_,O_,Mn,L_,Ft,Us,A_,Fl,I_,D_,Cn,Mc,Vt,Pn,Ml,Ws,S_,Cl,G_,Cc,X,Bs,U_,Rs,W_,Pl,B_,R_,H_,Hs,V_,Vs,K_,Y_,Z_,Ks,J_,Er,X_,Q_,eg,Ys,tg,Zs,ng,og,sg,ct,Js,ag,Kt,rg,Fr,ig,lg,Nl,dg,cg,pg,Nn,hg,On,ug,pt,Xs,mg,Ol,fg,_g,Ll,gg,Tg,Ln,vg,Mt,Qs,bg,Al,kg,yg,An,Pc,Yt,In,Il,ea,wg,Dl,$g,Nc,Q,ta,xg,Sl,zg,jg,na,qg,oa,Eg,Fg,Mg,sa,Cg,Mr,Pg,Ng,Og,aa,Lg,ra,Ag,Ig,Dg,ht,ia,Sg,Zt,Gg,Cr,Ug,Wg,Gl,Bg,Rg,Hg,Dn,Vg,Sn,Kg,ut,la,Yg,Ul,Zg,Jg,Wl,Xg,Qg,Gn,eT,Ct,da,tT,Bl,nT,oT,Un,Oc,Jt,Wn,Rl,ca,sT,Hl,aT,Lc,le,pa,rT,Vl,iT,lT,ha,dT,ua,cT,pT,hT,ma,uT,Pr,mT,fT,_T,fa,gT,_a,TT,vT,bT,Bn,kT,mt,ga,yT,Xt,wT,Nr,$T,xT,Kl,zT,jT,qT,Rn,ET,Hn,Ac,Qt,Vn,Yl,Ta,FT,Zl,MT,Ic,de,va,CT,ba,PT,Jl,NT,OT,LT,ka,AT,ya,IT,DT,ST,wa,GT,Or,UT,WT,BT,$a,RT,xa,HT,VT,KT,Kn,YT,ft,za,ZT,en,JT,Lr,XT,QT,Xl,ev,tv,nv,Yn,ov,Zn,Dc,tn,Jn,Ql,ja,sv,ed,av,Sc,ce,qa,rv,td,iv,lv,Ea,dv,Fa,cv,pv,hv,Ma,uv,Ar,mv,fv,_v,Ca,gv,Pa,Tv,vv,bv,Xn,kv,_t,Na,yv,nn,wv,Ir,$v,xv,nd,zv,jv,qv,Qn,Ev,eo,Gc,on,to,od,Oa,Fv,sd,Mv,Uc,Je,La,Cv,gt,Aa,Pv,sn,Nv,ad,Ov,Lv,rd,Av,Iv,Dv,no,Sv,oo,Gv,so,Ia,Uv,ao,Wv,ro,Da,Bv,io,Wc,an,lo,id,Sa,Rv,ld,Hv,Bc,Xe,Ga,Vv,Tt,Ua,Kv,rn,Yv,dd,Zv,Jv,cd,Xv,Qv,eb,co,tb,po,nb,ho,Wa,ob,uo,sb,mo,Ba,ab,fo,Rc;return l=new be({}),ae=new be({}),Go=new be({}),Uo=new S({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
<span class="hljs-number">3.7837</span>`}}),Bo=new S({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
<span class="hljs-number">0.2542</span>`}}),Ho=new S({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration
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
    [output_sequence_1, output_sequence_2], padding="longest", max_length=max_target_length, truncation=True
)
labels = target_encoding.input_ids

# replace padding token id's of the labels by -100 so it's ignored by the loss
labels = torch.tensor(labels)
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
<span class="hljs-meta">... </span>    [output_sequence_1, output_sequence_2], padding=<span class="hljs-string">&quot;longest&quot;</span>, max_length=max_target_length, truncation=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = target_encoding.input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># replace padding token id&#x27;s of the labels by -100 so it&#x27;s ignored by the loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels[labels == tokenizer.pad_token_id] = -<span class="hljs-number">100</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_ids=input_ids, attention_mask=attention_mask, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.item()
<span class="hljs-number">0.188</span>`}}),Zo=new be({}),Qo=new S({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
Das Haus ist wunderbar.`}}),es=new S({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
[<span class="hljs-string">&#x27;Das Haus ist wunderbar.&#x27;</span>, <span class="hljs-string">&#x27;Ich arbeite gerne in NYC.&#x27;</span>]`}}),ts=new S({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
[<span class="hljs-string">&#x27;&lt;pad&gt; &lt;extra_id_0&gt; park offers&lt;extra_id_1&gt; the&lt;extra_id_2&gt; park.&lt;/s&gt;&#x27;</span>]`}}),ns=new be({}),ss=new be({}),hs=new be({}),us=new C({props:{name:"class transformers.T5Config",anchor:"transformers.T5Config",parameters:[{name:"vocab_size",val:" = 32128"},{name:"d_model",val:" = 512"},{name:"d_kv",val:" = 64"},{name:"d_ff",val:" = 2048"},{name:"num_layers",val:" = 6"},{name:"num_decoder_layers",val:" = None"},{name:"num_heads",val:" = 8"},{name:"relative_attention_num_buckets",val:" = 32"},{name:"relative_attention_max_distance",val:" = 128"},{name:"dropout_rate",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_factor",val:" = 1.0"},{name:"feed_forward_proj",val:" = 'relu'"},{name:"is_encoder_decoder",val:" = True"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"eos_token_id",val:" = 1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.T5Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32128) &#x2014;
Vocabulary size of the T5 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.19.2/en/model_doc/t5#transformers.T5Model">T5Model</a> or <a href="/docs/transformers/v4.19.2/en/model_doc/t5#transformers.TFT5Model">TFT5Model</a>.`,name:"vocab_size"},{anchor:"transformers.T5Config.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/t5/configuration_t5.py#L34"}}),fs=new be({}),_s=new C({props:{name:"class transformers.T5Tokenizer",anchor:"transformers.T5Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.T5Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/t5/tokenization_t5.py#L55"}}),bs=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/t5/tokenization_t5.py#L243",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ys=new C({props:{name:"get_special_tokens_mask",anchor:"transformers.T5Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/t5/tokenization_t5.py#L183",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),$s=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/t5/tokenization_t5.py#L221",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),xs=new C({props:{name:"save_vocabulary",anchor:"transformers.T5Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/t5/tokenization_t5.py#L318"}}),zs=new be({}),js=new C({props:{name:"class transformers.T5TokenizerFast",anchor:"transformers.T5TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.T5TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/t5/tokenization_t5_fast.py#L65"}}),Fs=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/t5/tokenization_t5_fast.py#L186",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Cs=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/t5/tokenization_t5_fast.py#L212",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ps=new be({}),Ns=new C({props:{name:"class transformers.T5Model",anchor:"transformers.T5Model",parameters:[{name:"config",val:": T5Config"}],parametersDescription:[{anchor:"transformers.T5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.2/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/t5/modeling_t5.py#L1269"}}),Ss=new C({props:{name:"forward",anchor:"transformers.T5Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.T5Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.2/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5Model.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.2/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/t5/modeling_t5.py#L1345",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.2/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),En=new wt({props:{$$slots:{default:[e5]},$$scope:{ctx:j}}}),Fn=new _e({props:{anchor:"transformers.T5Model.forward.example",$$slots:{default:[t5]},$$scope:{ctx:j}}}),Gs=new C({props:{name:"parallelize",anchor:"transformers.T5Model.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.T5Model.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/t5/modeling_t5.py#L1301"}}),Mn=new _e({props:{anchor:"transformers.T5Model.parallelize.example",$$slots:{default:[n5]},$$scope:{ctx:j}}}),Us=new C({props:{name:"deparallelize",anchor:"transformers.T5Model.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/t5/modeling_t5.py#L1313"}}),Cn=new _e({props:{anchor:"transformers.T5Model.deparallelize.example",$$slots:{default:[o5]},$$scope:{ctx:j}}}),Ws=new be({}),Bs=new C({props:{name:"class transformers.T5ForConditionalGeneration",anchor:"transformers.T5ForConditionalGeneration",parameters:[{name:"config",val:": T5Config"}],parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.2/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/t5/modeling_t5.py#L1458"}}),Js=new C({props:{name:"forward",anchor:"transformers.T5ForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.2/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5ForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.2/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.T5ForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[-100, 0, ..., config.vocab_size - 1]</code>. All labels set to <code>-100</code> are ignored (masked), the loss is only computed for
labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/t5/modeling_t5.py#L1539",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.2/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Nn=new wt({props:{$$slots:{default:[s5]},$$scope:{ctx:j}}}),On=new _e({props:{anchor:"transformers.T5ForConditionalGeneration.forward.example",$$slots:{default:[a5]},$$scope:{ctx:j}}}),Xs=new C({props:{name:"parallelize",anchor:"transformers.T5ForConditionalGeneration.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/t5/modeling_t5.py#L1495"}}),Ln=new _e({props:{anchor:"transformers.T5ForConditionalGeneration.parallelize.example",$$slots:{default:[r5]},$$scope:{ctx:j}}}),Qs=new C({props:{name:"deparallelize",anchor:"transformers.T5ForConditionalGeneration.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/t5/modeling_t5.py#L1508"}}),An=new _e({props:{anchor:"transformers.T5ForConditionalGeneration.deparallelize.example",$$slots:{default:[i5]},$$scope:{ctx:j}}}),ea=new be({}),ta=new C({props:{name:"class transformers.T5EncoderModel",anchor:"transformers.T5EncoderModel",parameters:[{name:"config",val:": T5Config"}],parametersDescription:[{anchor:"transformers.T5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.2/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/t5/modeling_t5.py#L1752"}}),ia=new C({props:{name:"forward",anchor:"transformers.T5EncoderModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.T5EncoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.2/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/t5/modeling_t5.py#L1810",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.2/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Dn=new wt({props:{$$slots:{default:[l5]},$$scope:{ctx:j}}}),Sn=new _e({props:{anchor:"transformers.T5EncoderModel.forward.example",$$slots:{default:[d5]},$$scope:{ctx:j}}}),la=new C({props:{name:"parallelize",anchor:"transformers.T5EncoderModel.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.T5EncoderModel.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/t5/modeling_t5.py#L1773"}}),Gn=new _e({props:{anchor:"transformers.T5EncoderModel.parallelize.example",$$slots:{default:[c5]},$$scope:{ctx:j}}}),da=new C({props:{name:"deparallelize",anchor:"transformers.T5EncoderModel.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/t5/modeling_t5.py#L1784"}}),Un=new _e({props:{anchor:"transformers.T5EncoderModel.deparallelize.example",$$slots:{default:[p5]},$$scope:{ctx:j}}}),ca=new be({}),pa=new C({props:{name:"class transformers.TFT5Model",anchor:"transformers.TFT5Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFT5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.2/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/t5/modeling_tf_t5.py#L1108"}}),Bn=new wt({props:{$$slots:{default:[h5]},$$scope:{ctx:j}}}),ga=new C({props:{name:"call",anchor:"transformers.TFT5Model.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFT5Model.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
be used by default.
head_mask &#x2014; (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>):
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>
<p>decoder_head_mask &#x2014; (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>):
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_attention_mask"},{anchor:"transformers.TFT5Model.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(tf.FloatTensor)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFT5Model.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/t5/modeling_tf_t5.py#L1134",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.19.2/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Rn=new wt({props:{$$slots:{default:[u5]},$$scope:{ctx:j}}}),Hn=new _e({props:{anchor:"transformers.TFT5Model.call.example",$$slots:{default:[m5]},$$scope:{ctx:j}}}),Ta=new be({}),va=new C({props:{name:"class transformers.TFT5ForConditionalGeneration",anchor:"transformers.TFT5ForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.2/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/t5/modeling_tf_t5.py#L1254"}}),Kn=new wt({props:{$$slots:{default:[f5]},$$scope:{ctx:j}}}),za=new C({props:{name:"call",anchor:"transformers.TFT5ForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
be used by default.
head_mask &#x2014; (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>):
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>
<p>decoder_head_mask &#x2014; (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>):
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_attention_mask"},{anchor:"transformers.TFT5ForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(tf.FloatTensor)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFT5ForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFT5ForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/t5/modeling_tf_t5.py#L1309",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.19.2/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Yn=new wt({props:{$$slots:{default:[_5]},$$scope:{ctx:j}}}),Zn=new _e({props:{anchor:"transformers.TFT5ForConditionalGeneration.call.example",$$slots:{default:[g5]},$$scope:{ctx:j}}}),ja=new be({}),qa=new C({props:{name:"class transformers.TFT5EncoderModel",anchor:"transformers.TFT5EncoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFT5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.2/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/t5/modeling_tf_t5.py#L1596"}}),Xn=new wt({props:{$$slots:{default:[T5]},$$scope:{ctx:j}}}),Na=new C({props:{name:"call",anchor:"transformers.TFT5EncoderModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFT5EncoderModel.call.inputs",description:`<strong>inputs</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.2/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p>To know more on how to prepare <code>inputs</code> for pre-training take a look at <a href="./t5#training">T5 Training</a>.`,name:"inputs"},{anchor:"transformers.TFT5EncoderModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFT5EncoderModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.
head_mask &#x2014; (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>):
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"inputs_embeds"},{anchor:"transformers.TFT5EncoderModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFT5EncoderModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFT5EncoderModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFT5EncoderModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/t5/modeling_tf_t5.py#L1618",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.19.2/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Qn=new wt({props:{$$slots:{default:[v5]},$$scope:{ctx:j}}}),eo=new _e({props:{anchor:"transformers.TFT5EncoderModel.call.example",$$slots:{default:[b5]},$$scope:{ctx:j}}}),Oa=new be({}),La=new C({props:{name:"class transformers.FlaxT5Model",anchor:"transformers.FlaxT5Model",parameters:[{name:"config",val:": T5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/t5/modeling_flax_t5.py#L1326"}}),Aa=new C({props:{name:"__call__",anchor:"transformers.FlaxT5Model.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5Model.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.2/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5Model.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5Model.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.2/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/t5/modeling_flax_t5.py#L958",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.2/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),no=new wt({props:{$$slots:{default:[k5]},$$scope:{ctx:j}}}),oo=new _e({props:{anchor:"transformers.FlaxT5Model.__call__.example",$$slots:{default:[y5]},$$scope:{ctx:j}}}),Ia=new C({props:{name:"encode",anchor:"transformers.FlaxT5Model.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5Model.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.2/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/t5/modeling_flax_t5.py#L1043",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ao=new _e({props:{anchor:"transformers.FlaxT5Model.encode.example",$$slots:{default:[w5]},$$scope:{ctx:j}}}),Da=new C({props:{name:"decode",anchor:"transformers.FlaxT5Model.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5Model.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.2/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/t5/modeling_flax_t5.py#L1101",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),io=new _e({props:{anchor:"transformers.FlaxT5Model.decode.example",$$slots:{default:[$5]},$$scope:{ctx:j}}}),Sa=new be({}),Ga=new C({props:{name:"class transformers.FlaxT5ForConditionalGeneration",anchor:"transformers.FlaxT5ForConditionalGeneration",parameters:[{name:"config",val:": T5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/t5/modeling_flax_t5.py#L1466"}}),Ua=new C({props:{name:"__call__",anchor:"transformers.FlaxT5ForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.2/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.2/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/t5/modeling_flax_t5.py#L958",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.2/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),co=new wt({props:{$$slots:{default:[x5]},$$scope:{ctx:j}}}),po=new _e({props:{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.example",$$slots:{default:[z5]},$$scope:{ctx:j}}}),Wa=new C({props:{name:"encode",anchor:"transformers.FlaxT5ForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.2/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/t5/modeling_flax_t5.py#L1043",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),uo=new _e({props:{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.example",$$slots:{default:[j5]},$$scope:{ctx:j}}}),Ba=new C({props:{name:"decode",anchor:"transformers.FlaxT5ForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.2/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/t5/modeling_flax_t5.py#L1469",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
  href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fo=new _e({props:{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.example",$$slots:{default:[q5]},$$scope:{ctx:j}}}),{c(){p=a("meta"),v=d(),g=a("h1"),u=a("a"),T=a("span"),b(l.$$.fragment),_=d(),q=a("span"),qe=o("T5"),se=d(),E=a("h2"),ee=a("a"),G=a("span"),b(ae.$$.fragment),Ee=d(),U=a("span"),Fe=o("Overview"),ke=d(),W=a("p"),A=o("The T5 model was presented in "),re=a("a"),pe=o("Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),M=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu.`),N=d(),he=a("p"),K=o("The abstract from the paper is the following:"),ye=d(),ue=a("p"),B=a("em"),Me=o(`Transfer learning, where a model is first pre-trained on a data-rich task before being fine-tuned on a downstream
task, has emerged as a powerful technique in natural language processing (NLP). The effectiveness of transfer learning
has given rise to a diversity of approaches, methodology, and practice. In this paper, we explore the landscape of
transfer learning techniques for NLP by introducing a unified framework that converts every language problem into a
text-to-text format. Our systematic study compares pretraining objectives, architectures, unlabeled datasets, transfer
approaches, and other factors on dozens of language understanding tasks. By combining the insights from our exploration
with scale and our new \u201CColossal Clean Crawled Corpus\u201D, we achieve state-of-the-art results on many benchmarks covering
summarization, question answering, text classification, and more. To facilitate future work on transfer learning for
NLP, we release our dataset, pre-trained models, and code.`),we=d(),P=a("p"),Ce=o("Tips:"),H=d(),V=a("ul"),Te=a("li"),O=a("p"),Pe=o(`T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which
each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box by prepending a
different prefix to the input corresponding to each task, e.g., for translation: `),ve=a("em"),I=o("translate English to German: \u2026"),Ne=o(`,
for summarization: `),R=a("em"),Oe=o("summarize: \u2026"),z=o("."),F=d(),te=a("li"),Ge=a("p"),et=o("T5 uses relative scalar embeddings. Encoder input padding can be done on the left and on the right."),D=d(),Ue=a("li"),ne=a("p"),tt=o("See the "),L=a("a"),Y=o("training"),nt=o(", "),Le=a("a"),Z=o("inference"),ot=o(" and "),Ae=a("a"),Ie=o("scripts"),st=o(" sections below for all details regarding usage."),Ld=d(),Ka=a("p"),Hp=o("T5 comes in different sizes:"),Ad=d(),We=a("ul"),ri=a("li"),ii=a("p"),Po=a("a"),Vp=o("t5-small"),Kp=d(),li=a("li"),di=a("p"),No=a("a"),Yp=o("t5-base"),Zp=d(),ci=a("li"),pi=a("p"),Oo=a("a"),Jp=o("t5-large"),Xp=d(),hi=a("li"),ui=a("p"),Lo=a("a"),Qp=o("t5-3b"),eh=d(),mi=a("li"),Ya=a("p"),Ao=a("a"),th=o("t5-11b"),nh=o("."),Id=d(),Za=a("p"),oh=o("Based on the original T5 model, Google has released some follow-up works:"),Dd=d(),$t=a("ul"),fi=a("li"),cn=a("p"),_i=a("strong"),sh=o("T5v1.1"),ah=o(`: T5v1.1 is an improved version of T5 with some architectural tweaks, and is pre-trained on C4 only without
mixing in the supervised tasks. Refer to the documentation of T5v1.1 which can be found `),Ja=a("a"),rh=o("here"),ih=o("."),lh=d(),gi=a("li"),pn=a("p"),Ti=a("strong"),dh=o("mT5"),ch=o(`: mT5 is a multilingual T5 model. It is pre-trained on the mC4 corpus, which includes 101 languages. Refer to
the documentation of mT5 which can be found `),Xa=a("a"),ph=o("here"),hh=o("."),uh=d(),vi=a("li"),hn=a("p"),bi=a("strong"),mh=o("byT5"),fh=o(`: byT5 is a T5 model pre-trained on byte sequences rather than SentencePiece subword token sequences. Refer
to the documentation of byT5 which can be found `),Qa=a("a"),_h=o("here"),gh=o("."),Sd=d(),un=a("p"),Th=o("All checkpoints can be found on the "),Io=a("a"),vh=o("hub"),bh=o("."),Gd=d(),xt=a("p"),kh=o("This model was contributed by "),Do=a("a"),yh=o("thomwolf"),wh=o(". The original code can be found "),So=a("a"),$h=o("here"),xh=o("."),Ud=d(),er=a("a"),Wd=d(),Ot=a("h2"),mn=a("a"),ki=a("span"),b(Go.$$.fragment),zh=d(),yi=a("span"),jh=o("Training"),Bd=d(),at=a("p"),qh=o(`T5 is an encoder-decoder model and converts all NLP problems into a text-to-text format. It is trained using teacher
forcing. This means that for training, we always need an input sequence and a corresponding target sequence. The input
sequence is fed to the model using `),wi=a("code"),Eh=o("input_ids"),Fh=o(`. The target sequence is shifted to the right, i.e., prepended by a
start-sequence token and fed to the decoder using the `),$i=a("code"),Mh=o("decoder_input_ids"),Ch=o(`. In teacher-forcing style, the target
sequence is then appended by the EOS token and corresponds to the `),xi=a("code"),Ph=o("labels"),Nh=o(`. The PAD token is hereby used as the
start-sequence token. T5 can be trained / fine-tuned both in a supervised and unsupervised fashion.`),Rd=d(),fn=a("p"),Oh=o("One can use "),tr=a("a"),Lh=o("T5ForConditionalGeneration"),Ah=o(` (or the Tensorflow/Flax variant), which includes the
language modeling head on top of the decoder.`),Hd=d(),nr=a("ul"),zi=a("li"),Ih=o("Unsupervised denoising training"),Vd=d(),me=a("p"),Dh=o("In this setup, spans of the input sequence are masked by so-called sentinel tokens ("),ji=a("em"),Sh=o("a.k.a"),Gh=o(` unique mask tokens) and
the output sequence is formed as a concatenation of the same sentinel tokens and the `),qi=a("em"),Uh=o("real"),Wh=o(` masked tokens. Each
sentinel token represents a unique mask token for this sentence and should start with `),Ei=a("code"),Bh=o("<extra_id_0>"),Rh=o(`,
`),Fi=a("code"),Hh=o("<extra_id_1>"),Vh=o(", \u2026 up to "),Mi=a("code"),Kh=o("<extra_id_99>"),Yh=o(`. As a default, 100 sentinel tokens are available in
`),or=a("a"),Zh=o("T5Tokenizer"),Jh=o("."),Kd=d(),sr=a("p"),Xh=o(`For instance, the sentence \u201CThe cute dog walks in the park\u201D with the masks put on \u201Ccute dog\u201D and \u201Cthe\u201D should be
processed as follows:`),Yd=d(),b(Uo.$$.fragment),Zd=d(),_n=a("p"),Qh=o("If you\u2019re interested in pre-training T5 on a new corpus, check out the "),Wo=a("a"),eu=o("run_t5_mlm_flax.py"),tu=o(` script in the Examples
directory.`),Jd=d(),ar=a("ul"),Ci=a("li"),nu=o("Supervised training"),Xd=d(),rr=a("p"),ou=o(`In this setup, the input sequence and output sequence are a standard sequence-to-sequence input-output mapping.
Suppose that we want to fine-tune the model for translation for example, and we have a training example: the input
sequence \u201CThe house is wonderful.\u201D and output sequence \u201CDas Haus ist wunderbar.\u201D, then they should be prepared for
the model as follows:`),Qd=d(),b(Bo.$$.fragment),ec=d(),oe=a("p"),su=o("As you can see, only 2 inputs are required for the model in order to compute a loss: "),Pi=a("code"),au=o("input_ids"),ru=o(` (which are the
`),Ni=a("code"),iu=o("input_ids"),lu=o(" of the encoded input sequence) and "),Oi=a("code"),du=o("labels"),cu=o(" (which are the "),Li=a("code"),pu=o("input_ids"),hu=o(` of the encoded
target sequence). The model will automatically create the `),Ai=a("code"),uu=o("decoder_input_ids"),mu=o(" based on the "),Ii=a("code"),fu=o("labels"),_u=o(`, by
shifting them one position to the right and prepending the `),Di=a("code"),gu=o("config.decoder_start_token_id"),Tu=o(`, which for T5 is
equal to 0 (i.e. the id of the pad token). Also note the task prefix: we prepend the input sequence with \u2018translate
English to German: \u2019 before encoding it. This will help in improving the performance, as this task prefix was used
during T5\u2019s pre-training.`),tc=d(),zt=a("p"),vu=o(`However, the example above only shows a single training example. In practice, one trains deep learning models in
batches. This entails that we must pad/truncate examples to the same length. For encoder-decoder models, one
typically defines a `),Si=a("code"),bu=o("max_source_length"),ku=o(" and "),Gi=a("code"),yu=o("max_target_length"),wu=o(`, which determine the maximum length of the
input and output sequences respectively (otherwise they are truncated). These should be carefully set depending on
the task.`),nc=d(),fe=a("p"),$u=o("In addition, we must make sure that padding token id\u2019s of the "),Ui=a("code"),xu=o("labels"),zu=o(` are not taken into account by the loss
function. In PyTorch and Tensorflow, this can be done by replacing them with -100, which is the `),Wi=a("code"),ju=o("ignore_index"),qu=o(`
of the `),Bi=a("code"),Eu=o("CrossEntropyLoss"),Fu=o(". In Flax, one can use the "),Ri=a("code"),Mu=o("decoder_attention_mask"),Cu=o(` to ignore padded tokens from
the loss (see the `),Ro=a("a"),Pu=o("Flax summarization script"),Nu=o(` for details). We also pass
`),Hi=a("code"),Ou=o("attention_mask"),Lu=o(` as additional input to the model, which makes sure that padding tokens of the inputs are
ignored. The code example below illustrates all of this.`),oc=d(),b(Ho.$$.fragment),sc=d(),ir=a("p"),Au=o("Additional training tips:"),ac=d(),lr=a("ul"),Vo=a("li"),Iu=o("T5 models need a slightly higher learning rate than the default one set in the "),Vi=a("code"),Du=o("Trainer"),Su=o(` when using the AdamW
optimizer. Typically, 1e-4 and 3e-4 work well for most problems (classification, summarization, translation, question
answering, question generation). Note that T5 was pre-trained using the AdaFactor optimizer.`),rc=d(),jt=a("p"),Gu=o("According to "),Ko=a("a"),Uu=o("this forum post"),Wu=o(`, task prefixes matter when
(1) doing multi-task training (2) your task is similar or related to one of the supervised tasks used in T5\u2019s
pre-training mixture (see Appendix D of the `),Yo=a("a"),Bu=o("paper"),Ru=o(` for the task prefixes
used).`),ic=d(),gn=a("p"),Hu=o(`If training on TPU, it is recommended to pad all examples of the dataset to the same length or make use of
`),Ki=a("em"),Vu=o("pad_to_multiple_of"),Ku=o(` to have a small number of predefined bucket sizes to fit all examples in. Dynamically padding
batches to the longest example is not recommended on TPU as it triggers a recompilation for every batch shape that is
encountered during training thus significantly slowing down the training. only padding up to the longest example in a
batch) leads to very slow training on TPU.`),lc=d(),dr=a("a"),dc=d(),Lt=a("h2"),Tn=a("a"),Yi=a("span"),b(Zo.$$.fragment),Yu=d(),Zi=a("span"),Zu=o("Inference"),cc=d(),rt=a("p"),Ju=o("At inference time, it is recommended to use "),cr=a("a"),Xu=o("generate()"),Qu=o(`. This
method takes care of encoding the input and feeding the encoded hidden states via cross-attention layers to the decoder
and auto-regressively generates the decoder output. Check out `),Jo=a("a"),em=o("this blog post"),tm=o(` to know all the details about generating text with Transformers.
There\u2019s also `),Xo=a("a"),nm=o("this blog post"),om=o(` which explains how
generation works in general in encoder-decoder models.`),pc=d(),b(Qo.$$.fragment),hc=d(),Be=a("p"),sm=o("Note that T5 uses the "),Ji=a("code"),am=o("pad_token_id"),rm=o(" as the "),Xi=a("code"),im=o("decoder_start_token_id"),lm=o(`, so when doing generation without using
`),pr=a("a"),dm=o("generate()"),cm=o(", make sure you start it with the "),Qi=a("code"),pm=o("pad_token_id"),hm=o("."),uc=d(),hr=a("p"),um=o("The example above only shows a single example. You can also do batched inference, like so:"),mc=d(),b(es.$$.fragment),fc=d(),ur=a("p"),mm=o(`Because T5 has been trained with the span-mask denoising objective,
it can be used to predict the sentinel (masked-out) tokens during inference.
The predicted tokens will then be placed between the sentinel tokens.`),_c=d(),b(ts.$$.fragment),gc=d(),mr=a("a"),Tc=d(),At=a("h2"),vn=a("a"),el=a("span"),b(ns.$$.fragment),fm=d(),tl=a("span"),_m=o("Performance"),vc=d(),it=a("p"),gm=o("If you\u2019d like a faster training and inference performance, install "),os=a("a"),Tm=o("apex"),vm=o(" and then the model will automatically use "),nl=a("code"),bm=o("apex.normalization.FusedRMSNorm"),km=o(" instead of "),ol=a("code"),ym=o("T5LayerNorm"),wm=o(". The former uses an optimized fused kernel which is several times faster than the latter."),bc=d(),It=a("h2"),bn=a("a"),sl=a("span"),b(ss.$$.fragment),$m=d(),al=a("span"),xm=o("Example scripts"),kc=d(),fr=a("p"),zm=o("T5 is supported by several example scripts, both for pre-training and fine-tuning."),yc=d(),kn=a("ul"),rl=a("li"),Dt=a("p"),jm=o("pre-training: the "),as=a("a"),qm=o("run_t5_mlm_flax.py"),Em=o(`
script allows you to further pre-train T5 or pre-train T5 from scratch on your own data. The `),rs=a("a"),Fm=o("t5_tokenizer_model.py"),Mm=o(`
script allows you to further train a T5 tokenizer or train a T5 Tokenizer from scratch on your own data. Note that
Flax (a neural network library on top of JAX) is particularly useful to train on TPU hardware.`),Cm=d(),il=a("li"),De=a("p"),Pm=o("fine-tuning: T5 is supported by the official summarization scripts ("),is=a("a"),Nm=o("PyTorch"),Om=o(", "),ls=a("a"),Lm=o("Tensorflow"),Am=o(", and "),ds=a("a"),Im=o("Flax"),Dm=o(`) and translation scripts
(`),cs=a("a"),Sm=o("PyTorch"),Gm=o(" and "),ps=a("a"),Um=o("Tensorflow"),Wm=o(`). These scripts allow
you to easily fine-tune T5 on custom data for summarization/translation.`),wc=d(),St=a("h2"),yn=a("a"),ll=a("span"),b(hs.$$.fragment),Bm=d(),dl=a("span"),Rm=o("T5Config"),$c=d(),bt=a("div"),b(us.$$.fragment),Hm=d(),kt=a("p"),Vm=o("This is the configuration class to store the configuration of a "),_r=a("a"),Km=o("T5Model"),Ym=o(" or a "),gr=a("a"),Zm=o("TFT5Model"),Jm=o(`. It is used to
instantiate a T5 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the T5
`),ms=a("a"),Xm=o("t5-small"),Qm=o(" architecture."),ef=d(),Gt=a("p"),tf=o("Configuration objects inherit from "),Tr=a("a"),nf=o("PretrainedConfig"),of=o(` and can be used to control the model outputs. Read the
documentation from `),vr=a("a"),sf=o("PretrainedConfig"),af=o(" for more information."),xc=d(),Ut=a("h2"),wn=a("a"),cl=a("span"),b(fs.$$.fragment),rf=d(),pl=a("span"),lf=o("T5Tokenizer"),zc=d(),ie=a("div"),b(_s.$$.fragment),df=d(),gs=a("p"),cf=o("Construct a T5 tokenizer. Based on "),Ts=a("a"),pf=o("SentencePiece"),hf=o("."),uf=d(),vs=a("p"),mf=o("This tokenizer inherits from "),br=a("a"),ff=o("PreTrainedTokenizer"),_f=o(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),gf=d(),qt=a("div"),b(bs.$$.fragment),Tf=d(),hl=a("p"),vf=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),bf=d(),ks=a("ul"),kr=a("li"),kf=o("single sequence: "),ul=a("code"),yf=o("X </s>"),wf=d(),yr=a("li"),$f=o("pair of sequences: "),ml=a("code"),xf=o("A </s> B </s>"),zf=d(),$n=a("div"),b(ys.$$.fragment),jf=d(),ws=a("p"),qf=o(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),fl=a("code"),Ef=o("prepare_for_model"),Ff=o(" method."),Mf=d(),xn=a("div"),b($s.$$.fragment),Cf=d(),_l=a("p"),Pf=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),Nf=d(),wr=a("div"),b(xs.$$.fragment),jc=d(),Wt=a("h2"),zn=a("a"),gl=a("span"),b(zs.$$.fragment),Of=d(),Tl=a("span"),Lf=o("T5TokenizerFast"),qc=d(),Se=a("div"),b(js.$$.fragment),Af=d(),Bt=a("p"),If=o("Construct a \u201Cfast\u201D T5 tokenizer (backed by HuggingFace\u2019s "),vl=a("em"),Df=o("tokenizers"),Sf=o(` library). Based on
`),qs=a("a"),Gf=o("Unigram"),Uf=o("."),Wf=d(),Es=a("p"),Bf=o("This tokenizer inherits from "),$r=a("a"),Rf=o("PreTrainedTokenizerFast"),Hf=o(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Vf=d(),Et=a("div"),b(Fs.$$.fragment),Kf=d(),bl=a("p"),Yf=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),Zf=d(),Ms=a("ul"),xr=a("li"),Jf=o("single sequence: "),kl=a("code"),Xf=o("X </s>"),Qf=d(),zr=a("li"),e_=o("pair of sequences: "),yl=a("code"),t_=o("A </s> B </s>"),n_=d(),jn=a("div"),b(Cs.$$.fragment),o_=d(),wl=a("p"),s_=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),Ec=d(),Rt=a("h2"),qn=a("a"),$l=a("span"),b(Ps.$$.fragment),a_=d(),xl=a("span"),r_=o("T5Model"),Fc=d(),J=a("div"),b(Ns.$$.fragment),i_=d(),zl=a("p"),l_=o("The bare T5 Model transformer outputting raw hidden-states without any specific head on top."),d_=d(),Os=a("p"),c_=o("The T5 model was proposed in "),Ls=a("a"),p_=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),h_=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),u_=d(),As=a("p"),m_=o("This model inherits from "),jr=a("a"),f_=o("PreTrainedModel"),__=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),g_=d(),Is=a("p"),T_=o("This model is also a PyTorch "),Ds=a("a"),v_=o("torch.nn.Module"),b_=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),k_=d(),lt=a("div"),b(Ss.$$.fragment),y_=d(),Ht=a("p"),w_=o("The "),qr=a("a"),$_=o("T5Model"),x_=o(" forward method, overrides the "),jl=a("code"),z_=o("__call__"),j_=o(" special method."),q_=d(),b(En.$$.fragment),E_=d(),b(Fn.$$.fragment),F_=d(),dt=a("div"),b(Gs.$$.fragment),M_=d(),ql=a("p"),C_=o("This is an experimental feature and is a subject to change at a moment\u2019s notice."),P_=d(),El=a("p"),N_=o(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),O_=d(),b(Mn.$$.fragment),L_=d(),Ft=a("div"),b(Us.$$.fragment),A_=d(),Fl=a("p"),I_=o("Moves the model to cpu from a model parallel state."),D_=d(),b(Cn.$$.fragment),Mc=d(),Vt=a("h2"),Pn=a("a"),Ml=a("span"),b(Ws.$$.fragment),S_=d(),Cl=a("span"),G_=o("T5ForConditionalGeneration"),Cc=d(),X=a("div"),b(Bs.$$.fragment),U_=d(),Rs=a("p"),W_=o("T5 Model with a "),Pl=a("code"),B_=o("language modeling"),R_=o(" head on top."),H_=d(),Hs=a("p"),V_=o("The T5 model was proposed in "),Vs=a("a"),K_=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Y_=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Z_=d(),Ks=a("p"),J_=o("This model inherits from "),Er=a("a"),X_=o("PreTrainedModel"),Q_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eg=d(),Ys=a("p"),tg=o("This model is also a PyTorch "),Zs=a("a"),ng=o("torch.nn.Module"),og=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),sg=d(),ct=a("div"),b(Js.$$.fragment),ag=d(),Kt=a("p"),rg=o("The "),Fr=a("a"),ig=o("T5ForConditionalGeneration"),lg=o(" forward method, overrides the "),Nl=a("code"),dg=o("__call__"),cg=o(" special method."),pg=d(),b(Nn.$$.fragment),hg=d(),b(On.$$.fragment),ug=d(),pt=a("div"),b(Xs.$$.fragment),mg=d(),Ol=a("p"),fg=o("This is an experimental feature and is a subject to change at a moment\u2019s notice."),_g=d(),Ll=a("p"),gg=o(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),Tg=d(),b(Ln.$$.fragment),vg=d(),Mt=a("div"),b(Qs.$$.fragment),bg=d(),Al=a("p"),kg=o("Moves the model to cpu from a model parallel state."),yg=d(),b(An.$$.fragment),Pc=d(),Yt=a("h2"),In=a("a"),Il=a("span"),b(ea.$$.fragment),wg=d(),Dl=a("span"),$g=o("T5EncoderModel"),Nc=d(),Q=a("div"),b(ta.$$.fragment),xg=d(),Sl=a("p"),zg=o("The bare T5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),jg=d(),na=a("p"),qg=o("The T5 model was proposed in "),oa=a("a"),Eg=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Fg=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Mg=d(),sa=a("p"),Cg=o("This model inherits from "),Mr=a("a"),Pg=o("PreTrainedModel"),Ng=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Og=d(),aa=a("p"),Lg=o("This model is also a PyTorch "),ra=a("a"),Ag=o("torch.nn.Module"),Ig=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dg=d(),ht=a("div"),b(ia.$$.fragment),Sg=d(),Zt=a("p"),Gg=o("The "),Cr=a("a"),Ug=o("T5EncoderModel"),Wg=o(" forward method, overrides the "),Gl=a("code"),Bg=o("__call__"),Rg=o(" special method."),Hg=d(),b(Dn.$$.fragment),Vg=d(),b(Sn.$$.fragment),Kg=d(),ut=a("div"),b(la.$$.fragment),Yg=d(),Ul=a("p"),Zg=o("This is an experimental feature and is a subject to change at a moment\u2019s notice."),Jg=d(),Wl=a("p"),Xg=o(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),Qg=d(),b(Gn.$$.fragment),eT=d(),Ct=a("div"),b(da.$$.fragment),tT=d(),Bl=a("p"),nT=o("Moves the model to cpu from a model parallel state."),oT=d(),b(Un.$$.fragment),Oc=d(),Jt=a("h2"),Wn=a("a"),Rl=a("span"),b(ca.$$.fragment),sT=d(),Hl=a("span"),aT=o("TFT5Model"),Lc=d(),le=a("div"),b(pa.$$.fragment),rT=d(),Vl=a("p"),iT=o("The bare T5 Model transformer outputting raw hidden-stateswithout any specific head on top."),lT=d(),ha=a("p"),dT=o("The T5 model was proposed in "),ua=a("a"),cT=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),pT=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),hT=d(),ma=a("p"),uT=o("This model inherits from "),Pr=a("a"),mT=o("TFPreTrainedModel"),fT=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_T=d(),fa=a("p"),gT=o("This model is also a "),_a=a("a"),TT=o("tf.keras.Model"),vT=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bT=d(),b(Bn.$$.fragment),kT=d(),mt=a("div"),b(ga.$$.fragment),yT=d(),Xt=a("p"),wT=o("The "),Nr=a("a"),$T=o("TFT5Model"),xT=o(" forward method, overrides the "),Kl=a("code"),zT=o("__call__"),jT=o(" special method."),qT=d(),b(Rn.$$.fragment),ET=d(),b(Hn.$$.fragment),Ac=d(),Qt=a("h2"),Vn=a("a"),Yl=a("span"),b(Ta.$$.fragment),FT=d(),Zl=a("span"),MT=o("TFT5ForConditionalGeneration"),Ic=d(),de=a("div"),b(va.$$.fragment),CT=d(),ba=a("p"),PT=o("T5 Model with a "),Jl=a("code"),NT=o("language modeling"),OT=o(" head on top."),LT=d(),ka=a("p"),AT=o("The T5 model was proposed in "),ya=a("a"),IT=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),DT=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),ST=d(),wa=a("p"),GT=o("This model inherits from "),Or=a("a"),UT=o("TFPreTrainedModel"),WT=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),BT=d(),$a=a("p"),RT=o("This model is also a "),xa=a("a"),HT=o("tf.keras.Model"),VT=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),KT=d(),b(Kn.$$.fragment),YT=d(),ft=a("div"),b(za.$$.fragment),ZT=d(),en=a("p"),JT=o("The "),Lr=a("a"),XT=o("TFT5ForConditionalGeneration"),QT=o(" forward method, overrides the "),Xl=a("code"),ev=o("__call__"),tv=o(" special method."),nv=d(),b(Yn.$$.fragment),ov=d(),b(Zn.$$.fragment),Dc=d(),tn=a("h2"),Jn=a("a"),Ql=a("span"),b(ja.$$.fragment),sv=d(),ed=a("span"),av=o("TFT5EncoderModel"),Sc=d(),ce=a("div"),b(qa.$$.fragment),rv=d(),td=a("p"),iv=o("The bare T5 Model transformer outputting encoder\u2019s raw hidden-stateswithout any specific head on top."),lv=d(),Ea=a("p"),dv=o("The T5 model was proposed in "),Fa=a("a"),cv=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),pv=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),hv=d(),Ma=a("p"),uv=o("This model inherits from "),Ar=a("a"),mv=o("TFPreTrainedModel"),fv=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_v=d(),Ca=a("p"),gv=o("This model is also a "),Pa=a("a"),Tv=o("tf.keras.Model"),vv=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bv=d(),b(Xn.$$.fragment),kv=d(),_t=a("div"),b(Na.$$.fragment),yv=d(),nn=a("p"),wv=o("The "),Ir=a("a"),$v=o("TFT5EncoderModel"),xv=o(" forward method, overrides the "),nd=a("code"),zv=o("__call__"),jv=o(" special method."),qv=d(),b(Qn.$$.fragment),Ev=d(),b(eo.$$.fragment),Gc=d(),on=a("h2"),to=a("a"),od=a("span"),b(Oa.$$.fragment),Fv=d(),sd=a("span"),Mv=o("FlaxT5Model"),Uc=d(),Je=a("div"),b(La.$$.fragment),Cv=d(),gt=a("div"),b(Aa.$$.fragment),Pv=d(),sn=a("p"),Nv=o("The "),ad=a("code"),Ov=o("FlaxT5PreTrainedModel"),Lv=o(" forward method, overrides the "),rd=a("code"),Av=o("__call__"),Iv=o(" special method."),Dv=d(),b(no.$$.fragment),Sv=d(),b(oo.$$.fragment),Gv=d(),so=a("div"),b(Ia.$$.fragment),Uv=d(),b(ao.$$.fragment),Wv=d(),ro=a("div"),b(Da.$$.fragment),Bv=d(),b(io.$$.fragment),Wc=d(),an=a("h2"),lo=a("a"),id=a("span"),b(Sa.$$.fragment),Rv=d(),ld=a("span"),Hv=o("FlaxT5ForConditionalGeneration"),Bc=d(),Xe=a("div"),b(Ga.$$.fragment),Vv=d(),Tt=a("div"),b(Ua.$$.fragment),Kv=d(),rn=a("p"),Yv=o("The "),dd=a("code"),Zv=o("FlaxT5PreTrainedModel"),Jv=o(" forward method, overrides the "),cd=a("code"),Xv=o("__call__"),Qv=o(" special method."),eb=d(),b(co.$$.fragment),tb=d(),b(po.$$.fragment),nb=d(),ho=a("div"),b(Wa.$$.fragment),ob=d(),b(uo.$$.fragment),sb=d(),mo=a("div"),b(Ba.$$.fragment),ab=d(),b(fo.$$.fragment),this.h()},l(n){const f=X1('[data-svelte="svelte-1phssyn"]',document.head);p=r(f,"META",{name:!0,content:!0}),f.forEach(t),v=c(n),g=r(n,"H1",{class:!0});var Ra=i(g);u=r(Ra,"A",{id:!0,class:!0,href:!0});var pd=i(u);T=r(pd,"SPAN",{});var hd=i(T);k(l.$$.fragment,hd),hd.forEach(t),pd.forEach(t),_=c(Ra),q=r(Ra,"SPAN",{});var ud=i(q);qe=s(ud,"T5"),ud.forEach(t),Ra.forEach(t),se=c(n),E=r(n,"H2",{class:!0});var Ha=i(E);ee=r(Ha,"A",{id:!0,class:!0,href:!0});var md=i(ee);G=r(md,"SPAN",{});var fd=i(G);k(ae.$$.fragment,fd),fd.forEach(t),md.forEach(t),Ee=c(Ha),U=r(Ha,"SPAN",{});var _d=i(U);Fe=s(_d,"Overview"),_d.forEach(t),Ha.forEach(t),ke=c(n),W=r(n,"P",{});var Va=i(W);A=s(Va,"The T5 model was presented in "),re=r(Va,"A",{href:!0,rel:!0});var gd=i(re);pe=s(gd,"Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),gd.forEach(t),M=s(Va,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu.`),Va.forEach(t),N=c(n),he=r(n,"P",{});var Td=i(he);K=s(Td,"The abstract from the paper is the following:"),Td.forEach(t),ye=c(n),ue=r(n,"P",{});var vd=i(ue);B=r(vd,"EM",{});var bd=i(B);Me=s(bd,`Transfer learning, where a model is first pre-trained on a data-rich task before being fine-tuned on a downstream
task, has emerged as a powerful technique in natural language processing (NLP). The effectiveness of transfer learning
has given rise to a diversity of approaches, methodology, and practice. In this paper, we explore the landscape of
transfer learning techniques for NLP by introducing a unified framework that converts every language problem into a
text-to-text format. Our systematic study compares pretraining objectives, architectures, unlabeled datasets, transfer
approaches, and other factors on dozens of language understanding tasks. By combining the insights from our exploration
with scale and our new \u201CColossal Clean Crawled Corpus\u201D, we achieve state-of-the-art results on many benchmarks covering
summarization, question answering, text classification, and more. To facilitate future work on transfer learning for
NLP, we release our dataset, pre-trained models, and code.`),bd.forEach(t),vd.forEach(t),we=c(n),P=r(n,"P",{});var kd=i(P);Ce=s(kd,"Tips:"),kd.forEach(t),H=c(n),V=r(n,"UL",{});var ln=i(V);Te=r(ln,"LI",{});var yd=i(Te);O=r(yd,"P",{});var dn=i(O);Pe=s(dn,`T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which
each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box by prepending a
different prefix to the input corresponding to each task, e.g., for translation: `),ve=r(dn,"EM",{});var wd=i(ve);I=s(wd,"translate English to German: \u2026"),wd.forEach(t),Ne=s(dn,`,
for summarization: `),R=r(dn,"EM",{});var $d=i(R);Oe=s($d,"summarize: \u2026"),$d.forEach(t),z=s(dn,"."),dn.forEach(t),yd.forEach(t),F=c(ln),te=r(ln,"LI",{});var xd=i(te);Ge=r(xd,"P",{});var zd=i(Ge);et=s(zd,"T5 uses relative scalar embeddings. Encoder input padding can be done on the left and on the right."),zd.forEach(t),xd.forEach(t),D=c(ln),Ue=r(ln,"LI",{});var jd=i(Ue);ne=r(jd,"P",{});var yt=i(ne);tt=s(yt,"See the "),L=r(yt,"A",{href:!0});var qd=i(L);Y=s(qd,"training"),qd.forEach(t),nt=s(yt,", "),Le=r(yt,"A",{href:!0});var Ed=i(Le);Z=s(Ed,"inference"),Ed.forEach(t),ot=s(yt," and "),Ae=r(yt,"A",{href:!0});var Fd=i(Ae);Ie=s(Fd,"scripts"),Fd.forEach(t),st=s(yt," sections below for all details regarding usage."),yt.forEach(t),jd.forEach(t),ln.forEach(t),Ld=c(n),Ka=r(n,"P",{});var Md=i(Ka);Hp=s(Md,"T5 comes in different sizes:"),Md.forEach(t),Ad=c(n),We=r(n,"UL",{});var Qe=i(We);ri=r(Qe,"LI",{});var Cd=i(ri);ii=r(Cd,"P",{});var pb=i(ii);Po=r(pb,"A",{href:!0,rel:!0});var hb=i(Po);Vp=s(hb,"t5-small"),hb.forEach(t),pb.forEach(t),Cd.forEach(t),Kp=c(Qe),li=r(Qe,"LI",{});var ub=i(li);di=r(ub,"P",{});var mb=i(di);No=r(mb,"A",{href:!0,rel:!0});var fb=i(No);Yp=s(fb,"t5-base"),fb.forEach(t),mb.forEach(t),ub.forEach(t),Zp=c(Qe),ci=r(Qe,"LI",{});var _b=i(ci);pi=r(_b,"P",{});var gb=i(pi);Oo=r(gb,"A",{href:!0,rel:!0});var Tb=i(Oo);Jp=s(Tb,"t5-large"),Tb.forEach(t),gb.forEach(t),_b.forEach(t),Xp=c(Qe),hi=r(Qe,"LI",{});var vb=i(hi);ui=r(vb,"P",{});var bb=i(ui);Lo=r(bb,"A",{href:!0,rel:!0});var kb=i(Lo);Qp=s(kb,"t5-3b"),kb.forEach(t),bb.forEach(t),vb.forEach(t),eh=c(Qe),mi=r(Qe,"LI",{});var yb=i(mi);Ya=r(yb,"P",{});var rb=i(Ya);Ao=r(rb,"A",{href:!0,rel:!0});var wb=i(Ao);th=s(wb,"t5-11b"),wb.forEach(t),nh=s(rb,"."),rb.forEach(t),yb.forEach(t),Qe.forEach(t),Id=c(n),Za=r(n,"P",{});var $b=i(Za);oh=s($b,"Based on the original T5 model, Google has released some follow-up works:"),$b.forEach(t),Dd=c(n),$t=r(n,"UL",{});var Dr=i($t);fi=r(Dr,"LI",{});var xb=i(fi);cn=r(xb,"P",{});var Pd=i(cn);_i=r(Pd,"STRONG",{});var zb=i(_i);sh=s(zb,"T5v1.1"),zb.forEach(t),ah=s(Pd,`: T5v1.1 is an improved version of T5 with some architectural tweaks, and is pre-trained on C4 only without
mixing in the supervised tasks. Refer to the documentation of T5v1.1 which can be found `),Ja=r(Pd,"A",{href:!0});var jb=i(Ja);rh=s(jb,"here"),jb.forEach(t),ih=s(Pd,"."),Pd.forEach(t),xb.forEach(t),lh=c(Dr),gi=r(Dr,"LI",{});var qb=i(gi);pn=r(qb,"P",{});var Nd=i(pn);Ti=r(Nd,"STRONG",{});var Eb=i(Ti);dh=s(Eb,"mT5"),Eb.forEach(t),ch=s(Nd,`: mT5 is a multilingual T5 model. It is pre-trained on the mC4 corpus, which includes 101 languages. Refer to
the documentation of mT5 which can be found `),Xa=r(Nd,"A",{href:!0});var Fb=i(Xa);ph=s(Fb,"here"),Fb.forEach(t),hh=s(Nd,"."),Nd.forEach(t),qb.forEach(t),uh=c(Dr),vi=r(Dr,"LI",{});var Mb=i(vi);hn=r(Mb,"P",{});var Od=i(hn);bi=r(Od,"STRONG",{});var Cb=i(bi);mh=s(Cb,"byT5"),Cb.forEach(t),fh=s(Od,`: byT5 is a T5 model pre-trained on byte sequences rather than SentencePiece subword token sequences. Refer
to the documentation of byT5 which can be found `),Qa=r(Od,"A",{href:!0});var Pb=i(Qa);_h=s(Pb,"here"),Pb.forEach(t),gh=s(Od,"."),Od.forEach(t),Mb.forEach(t),Dr.forEach(t),Sd=c(n),un=r(n,"P",{});var Hc=i(un);Th=s(Hc,"All checkpoints can be found on the "),Io=r(Hc,"A",{href:!0,rel:!0});var Nb=i(Io);vh=s(Nb,"hub"),Nb.forEach(t),bh=s(Hc,"."),Hc.forEach(t),Gd=c(n),xt=r(n,"P",{});var Sr=i(xt);kh=s(Sr,"This model was contributed by "),Do=r(Sr,"A",{href:!0,rel:!0});var Ob=i(Do);yh=s(Ob,"thomwolf"),Ob.forEach(t),wh=s(Sr,". The original code can be found "),So=r(Sr,"A",{href:!0,rel:!0});var Lb=i(So);$h=s(Lb,"here"),Lb.forEach(t),xh=s(Sr,"."),Sr.forEach(t),Ud=c(n),er=r(n,"A",{id:!0}),i(er).forEach(t),Wd=c(n),Ot=r(n,"H2",{class:!0});var Vc=i(Ot);mn=r(Vc,"A",{id:!0,class:!0,href:!0});var Ab=i(mn);ki=r(Ab,"SPAN",{});var Ib=i(ki);k(Go.$$.fragment,Ib),Ib.forEach(t),Ab.forEach(t),zh=c(Vc),yi=r(Vc,"SPAN",{});var Db=i(yi);jh=s(Db,"Training"),Db.forEach(t),Vc.forEach(t),Bd=c(n),at=r(n,"P",{});var _o=i(at);qh=s(_o,`T5 is an encoder-decoder model and converts all NLP problems into a text-to-text format. It is trained using teacher
forcing. This means that for training, we always need an input sequence and a corresponding target sequence. The input
sequence is fed to the model using `),wi=r(_o,"CODE",{});var Sb=i(wi);Eh=s(Sb,"input_ids"),Sb.forEach(t),Fh=s(_o,`. The target sequence is shifted to the right, i.e., prepended by a
start-sequence token and fed to the decoder using the `),$i=r(_o,"CODE",{});var Gb=i($i);Mh=s(Gb,"decoder_input_ids"),Gb.forEach(t),Ch=s(_o,`. In teacher-forcing style, the target
sequence is then appended by the EOS token and corresponds to the `),xi=r(_o,"CODE",{});var Ub=i(xi);Ph=s(Ub,"labels"),Ub.forEach(t),Nh=s(_o,`. The PAD token is hereby used as the
start-sequence token. T5 can be trained / fine-tuned both in a supervised and unsupervised fashion.`),_o.forEach(t),Rd=c(n),fn=r(n,"P",{});var Kc=i(fn);Oh=s(Kc,"One can use "),tr=r(Kc,"A",{href:!0});var Wb=i(tr);Lh=s(Wb,"T5ForConditionalGeneration"),Wb.forEach(t),Ah=s(Kc,` (or the Tensorflow/Flax variant), which includes the
language modeling head on top of the decoder.`),Kc.forEach(t),Hd=c(n),nr=r(n,"UL",{});var Bb=i(nr);zi=r(Bb,"LI",{});var Rb=i(zi);Ih=s(Rb,"Unsupervised denoising training"),Rb.forEach(t),Bb.forEach(t),Vd=c(n),me=r(n,"P",{});var Re=i(me);Dh=s(Re,"In this setup, spans of the input sequence are masked by so-called sentinel tokens ("),ji=r(Re,"EM",{});var Hb=i(ji);Sh=s(Hb,"a.k.a"),Hb.forEach(t),Gh=s(Re,` unique mask tokens) and
the output sequence is formed as a concatenation of the same sentinel tokens and the `),qi=r(Re,"EM",{});var Vb=i(qi);Uh=s(Vb,"real"),Vb.forEach(t),Wh=s(Re,` masked tokens. Each
sentinel token represents a unique mask token for this sentence and should start with `),Ei=r(Re,"CODE",{});var Kb=i(Ei);Bh=s(Kb,"<extra_id_0>"),Kb.forEach(t),Rh=s(Re,`,
`),Fi=r(Re,"CODE",{});var Yb=i(Fi);Hh=s(Yb,"<extra_id_1>"),Yb.forEach(t),Vh=s(Re,", \u2026 up to "),Mi=r(Re,"CODE",{});var Zb=i(Mi);Kh=s(Zb,"<extra_id_99>"),Zb.forEach(t),Yh=s(Re,`. As a default, 100 sentinel tokens are available in
`),or=r(Re,"A",{href:!0});var Jb=i(or);Zh=s(Jb,"T5Tokenizer"),Jb.forEach(t),Jh=s(Re,"."),Re.forEach(t),Kd=c(n),sr=r(n,"P",{});var Xb=i(sr);Xh=s(Xb,`For instance, the sentence \u201CThe cute dog walks in the park\u201D with the masks put on \u201Ccute dog\u201D and \u201Cthe\u201D should be
processed as follows:`),Xb.forEach(t),Yd=c(n),k(Uo.$$.fragment,n),Zd=c(n),_n=r(n,"P",{});var Yc=i(_n);Qh=s(Yc,"If you\u2019re interested in pre-training T5 on a new corpus, check out the "),Wo=r(Yc,"A",{href:!0,rel:!0});var Qb=i(Wo);eu=s(Qb,"run_t5_mlm_flax.py"),Qb.forEach(t),tu=s(Yc,` script in the Examples
directory.`),Yc.forEach(t),Jd=c(n),ar=r(n,"UL",{});var ek=i(ar);Ci=r(ek,"LI",{});var tk=i(Ci);nu=s(tk,"Supervised training"),tk.forEach(t),ek.forEach(t),Xd=c(n),rr=r(n,"P",{});var nk=i(rr);ou=s(nk,`In this setup, the input sequence and output sequence are a standard sequence-to-sequence input-output mapping.
Suppose that we want to fine-tune the model for translation for example, and we have a training example: the input
sequence \u201CThe house is wonderful.\u201D and output sequence \u201CDas Haus ist wunderbar.\u201D, then they should be prepared for
the model as follows:`),nk.forEach(t),Qd=c(n),k(Bo.$$.fragment,n),ec=c(n),oe=r(n,"P",{});var $e=i(oe);su=s($e,"As you can see, only 2 inputs are required for the model in order to compute a loss: "),Pi=r($e,"CODE",{});var ok=i(Pi);au=s(ok,"input_ids"),ok.forEach(t),ru=s($e,` (which are the
`),Ni=r($e,"CODE",{});var sk=i(Ni);iu=s(sk,"input_ids"),sk.forEach(t),lu=s($e," of the encoded input sequence) and "),Oi=r($e,"CODE",{});var ak=i(Oi);du=s(ak,"labels"),ak.forEach(t),cu=s($e," (which are the "),Li=r($e,"CODE",{});var rk=i(Li);pu=s(rk,"input_ids"),rk.forEach(t),hu=s($e,` of the encoded
target sequence). The model will automatically create the `),Ai=r($e,"CODE",{});var ik=i(Ai);uu=s(ik,"decoder_input_ids"),ik.forEach(t),mu=s($e," based on the "),Ii=r($e,"CODE",{});var lk=i(Ii);fu=s(lk,"labels"),lk.forEach(t),_u=s($e,`, by
shifting them one position to the right and prepending the `),Di=r($e,"CODE",{});var dk=i(Di);gu=s(dk,"config.decoder_start_token_id"),dk.forEach(t),Tu=s($e,`, which for T5 is
equal to 0 (i.e. the id of the pad token). Also note the task prefix: we prepend the input sequence with \u2018translate
English to German: \u2019 before encoding it. This will help in improving the performance, as this task prefix was used
during T5\u2019s pre-training.`),$e.forEach(t),tc=c(n),zt=r(n,"P",{});var Gr=i(zt);vu=s(Gr,`However, the example above only shows a single training example. In practice, one trains deep learning models in
batches. This entails that we must pad/truncate examples to the same length. For encoder-decoder models, one
typically defines a `),Si=r(Gr,"CODE",{});var ck=i(Si);bu=s(ck,"max_source_length"),ck.forEach(t),ku=s(Gr," and "),Gi=r(Gr,"CODE",{});var pk=i(Gi);yu=s(pk,"max_target_length"),pk.forEach(t),wu=s(Gr,`, which determine the maximum length of the
input and output sequences respectively (otherwise they are truncated). These should be carefully set depending on
the task.`),Gr.forEach(t),nc=c(n),fe=r(n,"P",{});var He=i(fe);$u=s(He,"In addition, we must make sure that padding token id\u2019s of the "),Ui=r(He,"CODE",{});var hk=i(Ui);xu=s(hk,"labels"),hk.forEach(t),zu=s(He,` are not taken into account by the loss
function. In PyTorch and Tensorflow, this can be done by replacing them with -100, which is the `),Wi=r(He,"CODE",{});var uk=i(Wi);ju=s(uk,"ignore_index"),uk.forEach(t),qu=s(He,`
of the `),Bi=r(He,"CODE",{});var mk=i(Bi);Eu=s(mk,"CrossEntropyLoss"),mk.forEach(t),Fu=s(He,". In Flax, one can use the "),Ri=r(He,"CODE",{});var fk=i(Ri);Mu=s(fk,"decoder_attention_mask"),fk.forEach(t),Cu=s(He,` to ignore padded tokens from
the loss (see the `),Ro=r(He,"A",{href:!0,rel:!0});var _k=i(Ro);Pu=s(_k,"Flax summarization script"),_k.forEach(t),Nu=s(He,` for details). We also pass
`),Hi=r(He,"CODE",{});var gk=i(Hi);Ou=s(gk,"attention_mask"),gk.forEach(t),Lu=s(He,` as additional input to the model, which makes sure that padding tokens of the inputs are
ignored. The code example below illustrates all of this.`),He.forEach(t),oc=c(n),k(Ho.$$.fragment,n),sc=c(n),ir=r(n,"P",{});var Tk=i(ir);Au=s(Tk,"Additional training tips:"),Tk.forEach(t),ac=c(n),lr=r(n,"UL",{});var vk=i(lr);Vo=r(vk,"LI",{});var Zc=i(Vo);Iu=s(Zc,"T5 models need a slightly higher learning rate than the default one set in the "),Vi=r(Zc,"CODE",{});var bk=i(Vi);Du=s(bk,"Trainer"),bk.forEach(t),Su=s(Zc,` when using the AdamW
optimizer. Typically, 1e-4 and 3e-4 work well for most problems (classification, summarization, translation, question
answering, question generation). Note that T5 was pre-trained using the AdaFactor optimizer.`),Zc.forEach(t),vk.forEach(t),rc=c(n),jt=r(n,"P",{});var Ur=i(jt);Gu=s(Ur,"According to "),Ko=r(Ur,"A",{href:!0,rel:!0});var kk=i(Ko);Uu=s(kk,"this forum post"),kk.forEach(t),Wu=s(Ur,`, task prefixes matter when
(1) doing multi-task training (2) your task is similar or related to one of the supervised tasks used in T5\u2019s
pre-training mixture (see Appendix D of the `),Yo=r(Ur,"A",{href:!0,rel:!0});var yk=i(Yo);Bu=s(yk,"paper"),yk.forEach(t),Ru=s(Ur,` for the task prefixes
used).`),Ur.forEach(t),ic=c(n),gn=r(n,"P",{});var Jc=i(gn);Hu=s(Jc,`If training on TPU, it is recommended to pad all examples of the dataset to the same length or make use of
`),Ki=r(Jc,"EM",{});var wk=i(Ki);Vu=s(wk,"pad_to_multiple_of"),wk.forEach(t),Ku=s(Jc,` to have a small number of predefined bucket sizes to fit all examples in. Dynamically padding
batches to the longest example is not recommended on TPU as it triggers a recompilation for every batch shape that is
encountered during training thus significantly slowing down the training. only padding up to the longest example in a
batch) leads to very slow training on TPU.`),Jc.forEach(t),lc=c(n),dr=r(n,"A",{id:!0}),i(dr).forEach(t),dc=c(n),Lt=r(n,"H2",{class:!0});var Xc=i(Lt);Tn=r(Xc,"A",{id:!0,class:!0,href:!0});var $k=i(Tn);Yi=r($k,"SPAN",{});var xk=i(Yi);k(Zo.$$.fragment,xk),xk.forEach(t),$k.forEach(t),Yu=c(Xc),Zi=r(Xc,"SPAN",{});var zk=i(Zi);Zu=s(zk,"Inference"),zk.forEach(t),Xc.forEach(t),cc=c(n),rt=r(n,"P",{});var go=i(rt);Ju=s(go,"At inference time, it is recommended to use "),cr=r(go,"A",{href:!0});var jk=i(cr);Xu=s(jk,"generate()"),jk.forEach(t),Qu=s(go,`. This
method takes care of encoding the input and feeding the encoded hidden states via cross-attention layers to the decoder
and auto-regressively generates the decoder output. Check out `),Jo=r(go,"A",{href:!0,rel:!0});var qk=i(Jo);em=s(qk,"this blog post"),qk.forEach(t),tm=s(go,` to know all the details about generating text with Transformers.
There\u2019s also `),Xo=r(go,"A",{href:!0,rel:!0});var Ek=i(Xo);nm=s(Ek,"this blog post"),Ek.forEach(t),om=s(go,` which explains how
generation works in general in encoder-decoder models.`),go.forEach(t),pc=c(n),k(Qo.$$.fragment,n),hc=c(n),Be=r(n,"P",{});var Pt=i(Be);sm=s(Pt,"Note that T5 uses the "),Ji=r(Pt,"CODE",{});var Fk=i(Ji);am=s(Fk,"pad_token_id"),Fk.forEach(t),rm=s(Pt," as the "),Xi=r(Pt,"CODE",{});var Mk=i(Xi);im=s(Mk,"decoder_start_token_id"),Mk.forEach(t),lm=s(Pt,`, so when doing generation without using
`),pr=r(Pt,"A",{href:!0});var Ck=i(pr);dm=s(Ck,"generate()"),Ck.forEach(t),cm=s(Pt,", make sure you start it with the "),Qi=r(Pt,"CODE",{});var Pk=i(Qi);pm=s(Pk,"pad_token_id"),Pk.forEach(t),hm=s(Pt,"."),Pt.forEach(t),uc=c(n),hr=r(n,"P",{});var Nk=i(hr);um=s(Nk,"The example above only shows a single example. You can also do batched inference, like so:"),Nk.forEach(t),mc=c(n),k(es.$$.fragment,n),fc=c(n),ur=r(n,"P",{});var Ok=i(ur);mm=s(Ok,`Because T5 has been trained with the span-mask denoising objective,
it can be used to predict the sentinel (masked-out) tokens during inference.
The predicted tokens will then be placed between the sentinel tokens.`),Ok.forEach(t),_c=c(n),k(ts.$$.fragment,n),gc=c(n),mr=r(n,"A",{id:!0}),i(mr).forEach(t),Tc=c(n),At=r(n,"H2",{class:!0});var Qc=i(At);vn=r(Qc,"A",{id:!0,class:!0,href:!0});var Lk=i(vn);el=r(Lk,"SPAN",{});var Ak=i(el);k(ns.$$.fragment,Ak),Ak.forEach(t),Lk.forEach(t),fm=c(Qc),tl=r(Qc,"SPAN",{});var Ik=i(tl);_m=s(Ik,"Performance"),Ik.forEach(t),Qc.forEach(t),vc=c(n),it=r(n,"P",{});var To=i(it);gm=s(To,"If you\u2019d like a faster training and inference performance, install "),os=r(To,"A",{href:!0,rel:!0});var Dk=i(os);Tm=s(Dk,"apex"),Dk.forEach(t),vm=s(To," and then the model will automatically use "),nl=r(To,"CODE",{});var Sk=i(nl);bm=s(Sk,"apex.normalization.FusedRMSNorm"),Sk.forEach(t),km=s(To," instead of "),ol=r(To,"CODE",{});var Gk=i(ol);ym=s(Gk,"T5LayerNorm"),Gk.forEach(t),wm=s(To,". The former uses an optimized fused kernel which is several times faster than the latter."),To.forEach(t),bc=c(n),It=r(n,"H2",{class:!0});var ep=i(It);bn=r(ep,"A",{id:!0,class:!0,href:!0});var Uk=i(bn);sl=r(Uk,"SPAN",{});var Wk=i(sl);k(ss.$$.fragment,Wk),Wk.forEach(t),Uk.forEach(t),$m=c(ep),al=r(ep,"SPAN",{});var Bk=i(al);xm=s(Bk,"Example scripts"),Bk.forEach(t),ep.forEach(t),kc=c(n),fr=r(n,"P",{});var Rk=i(fr);zm=s(Rk,"T5 is supported by several example scripts, both for pre-training and fine-tuning."),Rk.forEach(t),yc=c(n),kn=r(n,"UL",{});var tp=i(kn);rl=r(tp,"LI",{});var Hk=i(rl);Dt=r(Hk,"P",{});var Wr=i(Dt);jm=s(Wr,"pre-training: the "),as=r(Wr,"A",{href:!0,rel:!0});var Vk=i(as);qm=s(Vk,"run_t5_mlm_flax.py"),Vk.forEach(t),Em=s(Wr,`
script allows you to further pre-train T5 or pre-train T5 from scratch on your own data. The `),rs=r(Wr,"A",{href:!0,rel:!0});var Kk=i(rs);Fm=s(Kk,"t5_tokenizer_model.py"),Kk.forEach(t),Mm=s(Wr,`
script allows you to further train a T5 tokenizer or train a T5 Tokenizer from scratch on your own data. Note that
Flax (a neural network library on top of JAX) is particularly useful to train on TPU hardware.`),Wr.forEach(t),Hk.forEach(t),Cm=c(tp),il=r(tp,"LI",{});var Yk=i(il);De=r(Yk,"P",{});var vt=i(De);Pm=s(vt,"fine-tuning: T5 is supported by the official summarization scripts ("),is=r(vt,"A",{href:!0,rel:!0});var Zk=i(is);Nm=s(Zk,"PyTorch"),Zk.forEach(t),Om=s(vt,", "),ls=r(vt,"A",{href:!0,rel:!0});var Jk=i(ls);Lm=s(Jk,"Tensorflow"),Jk.forEach(t),Am=s(vt,", and "),ds=r(vt,"A",{href:!0,rel:!0});var Xk=i(ds);Im=s(Xk,"Flax"),Xk.forEach(t),Dm=s(vt,`) and translation scripts
(`),cs=r(vt,"A",{href:!0,rel:!0});var Qk=i(cs);Sm=s(Qk,"PyTorch"),Qk.forEach(t),Gm=s(vt," and "),ps=r(vt,"A",{href:!0,rel:!0});var ey=i(ps);Um=s(ey,"Tensorflow"),ey.forEach(t),Wm=s(vt,`). These scripts allow
you to easily fine-tune T5 on custom data for summarization/translation.`),vt.forEach(t),Yk.forEach(t),tp.forEach(t),wc=c(n),St=r(n,"H2",{class:!0});var np=i(St);yn=r(np,"A",{id:!0,class:!0,href:!0});var ty=i(yn);ll=r(ty,"SPAN",{});var ny=i(ll);k(hs.$$.fragment,ny),ny.forEach(t),ty.forEach(t),Bm=c(np),dl=r(np,"SPAN",{});var oy=i(dl);Rm=s(oy,"T5Config"),oy.forEach(t),np.forEach(t),$c=c(n),bt=r(n,"DIV",{class:!0});var Br=i(bt);k(us.$$.fragment,Br),Hm=c(Br),kt=r(Br,"P",{});var vo=i(kt);Vm=s(vo,"This is the configuration class to store the configuration of a "),_r=r(vo,"A",{href:!0});var sy=i(_r);Km=s(sy,"T5Model"),sy.forEach(t),Ym=s(vo," or a "),gr=r(vo,"A",{href:!0});var ay=i(gr);Zm=s(ay,"TFT5Model"),ay.forEach(t),Jm=s(vo,`. It is used to
instantiate a T5 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the T5
`),ms=r(vo,"A",{href:!0,rel:!0});var ry=i(ms);Xm=s(ry,"t5-small"),ry.forEach(t),Qm=s(vo," architecture."),vo.forEach(t),ef=c(Br),Gt=r(Br,"P",{});var Rr=i(Gt);tf=s(Rr,"Configuration objects inherit from "),Tr=r(Rr,"A",{href:!0});var iy=i(Tr);nf=s(iy,"PretrainedConfig"),iy.forEach(t),of=s(Rr,` and can be used to control the model outputs. Read the
documentation from `),vr=r(Rr,"A",{href:!0});var ly=i(vr);sf=s(ly,"PretrainedConfig"),ly.forEach(t),af=s(Rr," for more information."),Rr.forEach(t),Br.forEach(t),xc=c(n),Ut=r(n,"H2",{class:!0});var op=i(Ut);wn=r(op,"A",{id:!0,class:!0,href:!0});var dy=i(wn);cl=r(dy,"SPAN",{});var cy=i(cl);k(fs.$$.fragment,cy),cy.forEach(t),dy.forEach(t),rf=c(op),pl=r(op,"SPAN",{});var py=i(pl);lf=s(py,"T5Tokenizer"),py.forEach(t),op.forEach(t),zc=c(n),ie=r(n,"DIV",{class:!0});var Ve=i(ie);k(_s.$$.fragment,Ve),df=c(Ve),gs=r(Ve,"P",{});var sp=i(gs);cf=s(sp,"Construct a T5 tokenizer. Based on "),Ts=r(sp,"A",{href:!0,rel:!0});var hy=i(Ts);pf=s(hy,"SentencePiece"),hy.forEach(t),hf=s(sp,"."),sp.forEach(t),uf=c(Ve),vs=r(Ve,"P",{});var ap=i(vs);mf=s(ap,"This tokenizer inherits from "),br=r(ap,"A",{href:!0});var uy=i(br);ff=s(uy,"PreTrainedTokenizer"),uy.forEach(t),_f=s(ap,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ap.forEach(t),gf=c(Ve),qt=r(Ve,"DIV",{class:!0});var Hr=i(qt);k(bs.$$.fragment,Hr),Tf=c(Hr),hl=r(Hr,"P",{});var my=i(hl);vf=s(my,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),my.forEach(t),bf=c(Hr),ks=r(Hr,"UL",{});var rp=i(ks);kr=r(rp,"LI",{});var ib=i(kr);kf=s(ib,"single sequence: "),ul=r(ib,"CODE",{});var fy=i(ul);yf=s(fy,"X </s>"),fy.forEach(t),ib.forEach(t),wf=c(rp),yr=r(rp,"LI",{});var lb=i(yr);$f=s(lb,"pair of sequences: "),ml=r(lb,"CODE",{});var _y=i(ml);xf=s(_y,"A </s> B </s>"),_y.forEach(t),lb.forEach(t),rp.forEach(t),Hr.forEach(t),zf=c(Ve),$n=r(Ve,"DIV",{class:!0});var ip=i($n);k(ys.$$.fragment,ip),jf=c(ip),ws=r(ip,"P",{});var lp=i(ws);qf=s(lp,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),fl=r(lp,"CODE",{});var gy=i(fl);Ef=s(gy,"prepare_for_model"),gy.forEach(t),Ff=s(lp," method."),lp.forEach(t),ip.forEach(t),Mf=c(Ve),xn=r(Ve,"DIV",{class:!0});var dp=i(xn);k($s.$$.fragment,dp),Cf=c(dp),_l=r(dp,"P",{});var Ty=i(_l);Pf=s(Ty,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),Ty.forEach(t),dp.forEach(t),Nf=c(Ve),wr=r(Ve,"DIV",{class:!0});var vy=i(wr);k(xs.$$.fragment,vy),vy.forEach(t),Ve.forEach(t),jc=c(n),Wt=r(n,"H2",{class:!0});var cp=i(Wt);zn=r(cp,"A",{id:!0,class:!0,href:!0});var by=i(zn);gl=r(by,"SPAN",{});var ky=i(gl);k(zs.$$.fragment,ky),ky.forEach(t),by.forEach(t),Of=c(cp),Tl=r(cp,"SPAN",{});var yy=i(Tl);Lf=s(yy,"T5TokenizerFast"),yy.forEach(t),cp.forEach(t),qc=c(n),Se=r(n,"DIV",{class:!0});var Nt=i(Se);k(js.$$.fragment,Nt),Af=c(Nt),Bt=r(Nt,"P",{});var Vr=i(Bt);If=s(Vr,"Construct a \u201Cfast\u201D T5 tokenizer (backed by HuggingFace\u2019s "),vl=r(Vr,"EM",{});var wy=i(vl);Df=s(wy,"tokenizers"),wy.forEach(t),Sf=s(Vr,` library). Based on
`),qs=r(Vr,"A",{href:!0,rel:!0});var $y=i(qs);Gf=s($y,"Unigram"),$y.forEach(t),Uf=s(Vr,"."),Vr.forEach(t),Wf=c(Nt),Es=r(Nt,"P",{});var pp=i(Es);Bf=s(pp,"This tokenizer inherits from "),$r=r(pp,"A",{href:!0});var xy=i($r);Rf=s(xy,"PreTrainedTokenizerFast"),xy.forEach(t),Hf=s(pp,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),pp.forEach(t),Vf=c(Nt),Et=r(Nt,"DIV",{class:!0});var Kr=i(Et);k(Fs.$$.fragment,Kr),Kf=c(Kr),bl=r(Kr,"P",{});var zy=i(bl);Yf=s(zy,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),zy.forEach(t),Zf=c(Kr),Ms=r(Kr,"UL",{});var hp=i(Ms);xr=r(hp,"LI",{});var db=i(xr);Jf=s(db,"single sequence: "),kl=r(db,"CODE",{});var jy=i(kl);Xf=s(jy,"X </s>"),jy.forEach(t),db.forEach(t),Qf=c(hp),zr=r(hp,"LI",{});var cb=i(zr);e_=s(cb,"pair of sequences: "),yl=r(cb,"CODE",{});var qy=i(yl);t_=s(qy,"A </s> B </s>"),qy.forEach(t),cb.forEach(t),hp.forEach(t),Kr.forEach(t),n_=c(Nt),jn=r(Nt,"DIV",{class:!0});var up=i(jn);k(Cs.$$.fragment,up),o_=c(up),wl=r(up,"P",{});var Ey=i(wl);s_=s(Ey,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),Ey.forEach(t),up.forEach(t),Nt.forEach(t),Ec=c(n),Rt=r(n,"H2",{class:!0});var mp=i(Rt);qn=r(mp,"A",{id:!0,class:!0,href:!0});var Fy=i(qn);$l=r(Fy,"SPAN",{});var My=i($l);k(Ps.$$.fragment,My),My.forEach(t),Fy.forEach(t),a_=c(mp),xl=r(mp,"SPAN",{});var Cy=i(xl);r_=s(Cy,"T5Model"),Cy.forEach(t),mp.forEach(t),Fc=c(n),J=r(n,"DIV",{class:!0});var xe=i(J);k(Ns.$$.fragment,xe),i_=c(xe),zl=r(xe,"P",{});var Py=i(zl);l_=s(Py,"The bare T5 Model transformer outputting raw hidden-states without any specific head on top."),Py.forEach(t),d_=c(xe),Os=r(xe,"P",{});var fp=i(Os);c_=s(fp,"The T5 model was proposed in "),Ls=r(fp,"A",{href:!0,rel:!0});var Ny=i(Ls);p_=s(Ny,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Ny.forEach(t),h_=s(fp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),fp.forEach(t),u_=c(xe),As=r(xe,"P",{});var _p=i(As);m_=s(_p,"This model inherits from "),jr=r(_p,"A",{href:!0});var Oy=i(jr);f_=s(Oy,"PreTrainedModel"),Oy.forEach(t),__=s(_p,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_p.forEach(t),g_=c(xe),Is=r(xe,"P",{});var gp=i(Is);T_=s(gp,"This model is also a PyTorch "),Ds=r(gp,"A",{href:!0,rel:!0});var Ly=i(Ds);v_=s(Ly,"torch.nn.Module"),Ly.forEach(t),b_=s(gp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gp.forEach(t),k_=c(xe),lt=r(xe,"DIV",{class:!0});var bo=i(lt);k(Ss.$$.fragment,bo),y_=c(bo),Ht=r(bo,"P",{});var Yr=i(Ht);w_=s(Yr,"The "),qr=r(Yr,"A",{href:!0});var Ay=i(qr);$_=s(Ay,"T5Model"),Ay.forEach(t),x_=s(Yr," forward method, overrides the "),jl=r(Yr,"CODE",{});var Iy=i(jl);z_=s(Iy,"__call__"),Iy.forEach(t),j_=s(Yr," special method."),Yr.forEach(t),q_=c(bo),k(En.$$.fragment,bo),E_=c(bo),k(Fn.$$.fragment,bo),bo.forEach(t),F_=c(xe),dt=r(xe,"DIV",{class:!0});var ko=i(dt);k(Gs.$$.fragment,ko),M_=c(ko),ql=r(ko,"P",{});var Dy=i(ql);C_=s(Dy,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),Dy.forEach(t),P_=c(ko),El=r(ko,"P",{});var Sy=i(El);N_=s(Sy,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),Sy.forEach(t),O_=c(ko),k(Mn.$$.fragment,ko),ko.forEach(t),L_=c(xe),Ft=r(xe,"DIV",{class:!0});var Zr=i(Ft);k(Us.$$.fragment,Zr),A_=c(Zr),Fl=r(Zr,"P",{});var Gy=i(Fl);I_=s(Gy,"Moves the model to cpu from a model parallel state."),Gy.forEach(t),D_=c(Zr),k(Cn.$$.fragment,Zr),Zr.forEach(t),xe.forEach(t),Mc=c(n),Vt=r(n,"H2",{class:!0});var Tp=i(Vt);Pn=r(Tp,"A",{id:!0,class:!0,href:!0});var Uy=i(Pn);Ml=r(Uy,"SPAN",{});var Wy=i(Ml);k(Ws.$$.fragment,Wy),Wy.forEach(t),Uy.forEach(t),S_=c(Tp),Cl=r(Tp,"SPAN",{});var By=i(Cl);G_=s(By,"T5ForConditionalGeneration"),By.forEach(t),Tp.forEach(t),Cc=c(n),X=r(n,"DIV",{class:!0});var ze=i(X);k(Bs.$$.fragment,ze),U_=c(ze),Rs=r(ze,"P",{});var vp=i(Rs);W_=s(vp,"T5 Model with a "),Pl=r(vp,"CODE",{});var Ry=i(Pl);B_=s(Ry,"language modeling"),Ry.forEach(t),R_=s(vp," head on top."),vp.forEach(t),H_=c(ze),Hs=r(ze,"P",{});var bp=i(Hs);V_=s(bp,"The T5 model was proposed in "),Vs=r(bp,"A",{href:!0,rel:!0});var Hy=i(Vs);K_=s(Hy,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Hy.forEach(t),Y_=s(bp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),bp.forEach(t),Z_=c(ze),Ks=r(ze,"P",{});var kp=i(Ks);J_=s(kp,"This model inherits from "),Er=r(kp,"A",{href:!0});var Vy=i(Er);X_=s(Vy,"PreTrainedModel"),Vy.forEach(t),Q_=s(kp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kp.forEach(t),eg=c(ze),Ys=r(ze,"P",{});var yp=i(Ys);tg=s(yp,"This model is also a PyTorch "),Zs=r(yp,"A",{href:!0,rel:!0});var Ky=i(Zs);ng=s(Ky,"torch.nn.Module"),Ky.forEach(t),og=s(yp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yp.forEach(t),sg=c(ze),ct=r(ze,"DIV",{class:!0});var yo=i(ct);k(Js.$$.fragment,yo),ag=c(yo),Kt=r(yo,"P",{});var Jr=i(Kt);rg=s(Jr,"The "),Fr=r(Jr,"A",{href:!0});var Yy=i(Fr);ig=s(Yy,"T5ForConditionalGeneration"),Yy.forEach(t),lg=s(Jr," forward method, overrides the "),Nl=r(Jr,"CODE",{});var Zy=i(Nl);dg=s(Zy,"__call__"),Zy.forEach(t),cg=s(Jr," special method."),Jr.forEach(t),pg=c(yo),k(Nn.$$.fragment,yo),hg=c(yo),k(On.$$.fragment,yo),yo.forEach(t),ug=c(ze),pt=r(ze,"DIV",{class:!0});var wo=i(pt);k(Xs.$$.fragment,wo),mg=c(wo),Ol=r(wo,"P",{});var Jy=i(Ol);fg=s(Jy,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),Jy.forEach(t),_g=c(wo),Ll=r(wo,"P",{});var Xy=i(Ll);gg=s(Xy,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),Xy.forEach(t),Tg=c(wo),k(Ln.$$.fragment,wo),wo.forEach(t),vg=c(ze),Mt=r(ze,"DIV",{class:!0});var Xr=i(Mt);k(Qs.$$.fragment,Xr),bg=c(Xr),Al=r(Xr,"P",{});var Qy=i(Al);kg=s(Qy,"Moves the model to cpu from a model parallel state."),Qy.forEach(t),yg=c(Xr),k(An.$$.fragment,Xr),Xr.forEach(t),ze.forEach(t),Pc=c(n),Yt=r(n,"H2",{class:!0});var wp=i(Yt);In=r(wp,"A",{id:!0,class:!0,href:!0});var e1=i(In);Il=r(e1,"SPAN",{});var t1=i(Il);k(ea.$$.fragment,t1),t1.forEach(t),e1.forEach(t),wg=c(wp),Dl=r(wp,"SPAN",{});var n1=i(Dl);$g=s(n1,"T5EncoderModel"),n1.forEach(t),wp.forEach(t),Nc=c(n),Q=r(n,"DIV",{class:!0});var je=i(Q);k(ta.$$.fragment,je),xg=c(je),Sl=r(je,"P",{});var o1=i(Sl);zg=s(o1,"The bare T5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),o1.forEach(t),jg=c(je),na=r(je,"P",{});var $p=i(na);qg=s($p,"The T5 model was proposed in "),oa=r($p,"A",{href:!0,rel:!0});var s1=i(oa);Eg=s(s1,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),s1.forEach(t),Fg=s($p,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),$p.forEach(t),Mg=c(je),sa=r(je,"P",{});var xp=i(sa);Cg=s(xp,"This model inherits from "),Mr=r(xp,"A",{href:!0});var a1=i(Mr);Pg=s(a1,"PreTrainedModel"),a1.forEach(t),Ng=s(xp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xp.forEach(t),Og=c(je),aa=r(je,"P",{});var zp=i(aa);Lg=s(zp,"This model is also a PyTorch "),ra=r(zp,"A",{href:!0,rel:!0});var r1=i(ra);Ag=s(r1,"torch.nn.Module"),r1.forEach(t),Ig=s(zp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zp.forEach(t),Dg=c(je),ht=r(je,"DIV",{class:!0});var $o=i(ht);k(ia.$$.fragment,$o),Sg=c($o),Zt=r($o,"P",{});var Qr=i(Zt);Gg=s(Qr,"The "),Cr=r(Qr,"A",{href:!0});var i1=i(Cr);Ug=s(i1,"T5EncoderModel"),i1.forEach(t),Wg=s(Qr," forward method, overrides the "),Gl=r(Qr,"CODE",{});var l1=i(Gl);Bg=s(l1,"__call__"),l1.forEach(t),Rg=s(Qr," special method."),Qr.forEach(t),Hg=c($o),k(Dn.$$.fragment,$o),Vg=c($o),k(Sn.$$.fragment,$o),$o.forEach(t),Kg=c(je),ut=r(je,"DIV",{class:!0});var xo=i(ut);k(la.$$.fragment,xo),Yg=c(xo),Ul=r(xo,"P",{});var d1=i(Ul);Zg=s(d1,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),d1.forEach(t),Jg=c(xo),Wl=r(xo,"P",{});var c1=i(Wl);Xg=s(c1,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),c1.forEach(t),Qg=c(xo),k(Gn.$$.fragment,xo),xo.forEach(t),eT=c(je),Ct=r(je,"DIV",{class:!0});var ei=i(Ct);k(da.$$.fragment,ei),tT=c(ei),Bl=r(ei,"P",{});var p1=i(Bl);nT=s(p1,"Moves the model to cpu from a model parallel state."),p1.forEach(t),oT=c(ei),k(Un.$$.fragment,ei),ei.forEach(t),je.forEach(t),Oc=c(n),Jt=r(n,"H2",{class:!0});var jp=i(Jt);Wn=r(jp,"A",{id:!0,class:!0,href:!0});var h1=i(Wn);Rl=r(h1,"SPAN",{});var u1=i(Rl);k(ca.$$.fragment,u1),u1.forEach(t),h1.forEach(t),sT=c(jp),Hl=r(jp,"SPAN",{});var m1=i(Hl);aT=s(m1,"TFT5Model"),m1.forEach(t),jp.forEach(t),Lc=c(n),le=r(n,"DIV",{class:!0});var Ke=i(le);k(pa.$$.fragment,Ke),rT=c(Ke),Vl=r(Ke,"P",{});var f1=i(Vl);iT=s(f1,"The bare T5 Model transformer outputting raw hidden-stateswithout any specific head on top."),f1.forEach(t),lT=c(Ke),ha=r(Ke,"P",{});var qp=i(ha);dT=s(qp,"The T5 model was proposed in "),ua=r(qp,"A",{href:!0,rel:!0});var _1=i(ua);cT=s(_1,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),_1.forEach(t),pT=s(qp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),qp.forEach(t),hT=c(Ke),ma=r(Ke,"P",{});var Ep=i(ma);uT=s(Ep,"This model inherits from "),Pr=r(Ep,"A",{href:!0});var g1=i(Pr);mT=s(g1,"TFPreTrainedModel"),g1.forEach(t),fT=s(Ep,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ep.forEach(t),_T=c(Ke),fa=r(Ke,"P",{});var Fp=i(fa);gT=s(Fp,"This model is also a "),_a=r(Fp,"A",{href:!0,rel:!0});var T1=i(_a);TT=s(T1,"tf.keras.Model"),T1.forEach(t),vT=s(Fp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fp.forEach(t),bT=c(Ke),k(Bn.$$.fragment,Ke),kT=c(Ke),mt=r(Ke,"DIV",{class:!0});var zo=i(mt);k(ga.$$.fragment,zo),yT=c(zo),Xt=r(zo,"P",{});var ti=i(Xt);wT=s(ti,"The "),Nr=r(ti,"A",{href:!0});var v1=i(Nr);$T=s(v1,"TFT5Model"),v1.forEach(t),xT=s(ti," forward method, overrides the "),Kl=r(ti,"CODE",{});var b1=i(Kl);zT=s(b1,"__call__"),b1.forEach(t),jT=s(ti," special method."),ti.forEach(t),qT=c(zo),k(Rn.$$.fragment,zo),ET=c(zo),k(Hn.$$.fragment,zo),zo.forEach(t),Ke.forEach(t),Ac=c(n),Qt=r(n,"H2",{class:!0});var Mp=i(Qt);Vn=r(Mp,"A",{id:!0,class:!0,href:!0});var k1=i(Vn);Yl=r(k1,"SPAN",{});var y1=i(Yl);k(Ta.$$.fragment,y1),y1.forEach(t),k1.forEach(t),FT=c(Mp),Zl=r(Mp,"SPAN",{});var w1=i(Zl);MT=s(w1,"TFT5ForConditionalGeneration"),w1.forEach(t),Mp.forEach(t),Ic=c(n),de=r(n,"DIV",{class:!0});var Ye=i(de);k(va.$$.fragment,Ye),CT=c(Ye),ba=r(Ye,"P",{});var Cp=i(ba);PT=s(Cp,"T5 Model with a "),Jl=r(Cp,"CODE",{});var $1=i(Jl);NT=s($1,"language modeling"),$1.forEach(t),OT=s(Cp," head on top."),Cp.forEach(t),LT=c(Ye),ka=r(Ye,"P",{});var Pp=i(ka);AT=s(Pp,"The T5 model was proposed in "),ya=r(Pp,"A",{href:!0,rel:!0});var x1=i(ya);IT=s(x1,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),x1.forEach(t),DT=s(Pp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Pp.forEach(t),ST=c(Ye),wa=r(Ye,"P",{});var Np=i(wa);GT=s(Np,"This model inherits from "),Or=r(Np,"A",{href:!0});var z1=i(Or);UT=s(z1,"TFPreTrainedModel"),z1.forEach(t),WT=s(Np,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Np.forEach(t),BT=c(Ye),$a=r(Ye,"P",{});var Op=i($a);RT=s(Op,"This model is also a "),xa=r(Op,"A",{href:!0,rel:!0});var j1=i(xa);HT=s(j1,"tf.keras.Model"),j1.forEach(t),VT=s(Op,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Op.forEach(t),KT=c(Ye),k(Kn.$$.fragment,Ye),YT=c(Ye),ft=r(Ye,"DIV",{class:!0});var jo=i(ft);k(za.$$.fragment,jo),ZT=c(jo),en=r(jo,"P",{});var ni=i(en);JT=s(ni,"The "),Lr=r(ni,"A",{href:!0});var q1=i(Lr);XT=s(q1,"TFT5ForConditionalGeneration"),q1.forEach(t),QT=s(ni," forward method, overrides the "),Xl=r(ni,"CODE",{});var E1=i(Xl);ev=s(E1,"__call__"),E1.forEach(t),tv=s(ni," special method."),ni.forEach(t),nv=c(jo),k(Yn.$$.fragment,jo),ov=c(jo),k(Zn.$$.fragment,jo),jo.forEach(t),Ye.forEach(t),Dc=c(n),tn=r(n,"H2",{class:!0});var Lp=i(tn);Jn=r(Lp,"A",{id:!0,class:!0,href:!0});var F1=i(Jn);Ql=r(F1,"SPAN",{});var M1=i(Ql);k(ja.$$.fragment,M1),M1.forEach(t),F1.forEach(t),sv=c(Lp),ed=r(Lp,"SPAN",{});var C1=i(ed);av=s(C1,"TFT5EncoderModel"),C1.forEach(t),Lp.forEach(t),Sc=c(n),ce=r(n,"DIV",{class:!0});var Ze=i(ce);k(qa.$$.fragment,Ze),rv=c(Ze),td=r(Ze,"P",{});var P1=i(td);iv=s(P1,"The bare T5 Model transformer outputting encoder\u2019s raw hidden-stateswithout any specific head on top."),P1.forEach(t),lv=c(Ze),Ea=r(Ze,"P",{});var Ap=i(Ea);dv=s(Ap,"The T5 model was proposed in "),Fa=r(Ap,"A",{href:!0,rel:!0});var N1=i(Fa);cv=s(N1,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),N1.forEach(t),pv=s(Ap,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Ap.forEach(t),hv=c(Ze),Ma=r(Ze,"P",{});var Ip=i(Ma);uv=s(Ip,"This model inherits from "),Ar=r(Ip,"A",{href:!0});var O1=i(Ar);mv=s(O1,"TFPreTrainedModel"),O1.forEach(t),fv=s(Ip,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ip.forEach(t),_v=c(Ze),Ca=r(Ze,"P",{});var Dp=i(Ca);gv=s(Dp,"This model is also a "),Pa=r(Dp,"A",{href:!0,rel:!0});var L1=i(Pa);Tv=s(L1,"tf.keras.Model"),L1.forEach(t),vv=s(Dp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dp.forEach(t),bv=c(Ze),k(Xn.$$.fragment,Ze),kv=c(Ze),_t=r(Ze,"DIV",{class:!0});var qo=i(_t);k(Na.$$.fragment,qo),yv=c(qo),nn=r(qo,"P",{});var oi=i(nn);wv=s(oi,"The "),Ir=r(oi,"A",{href:!0});var A1=i(Ir);$v=s(A1,"TFT5EncoderModel"),A1.forEach(t),xv=s(oi," forward method, overrides the "),nd=r(oi,"CODE",{});var I1=i(nd);zv=s(I1,"__call__"),I1.forEach(t),jv=s(oi," special method."),oi.forEach(t),qv=c(qo),k(Qn.$$.fragment,qo),Ev=c(qo),k(eo.$$.fragment,qo),qo.forEach(t),Ze.forEach(t),Gc=c(n),on=r(n,"H2",{class:!0});var Sp=i(on);to=r(Sp,"A",{id:!0,class:!0,href:!0});var D1=i(to);od=r(D1,"SPAN",{});var S1=i(od);k(Oa.$$.fragment,S1),S1.forEach(t),D1.forEach(t),Fv=c(Sp),sd=r(Sp,"SPAN",{});var G1=i(sd);Mv=s(G1,"FlaxT5Model"),G1.forEach(t),Sp.forEach(t),Uc=c(n),Je=r(n,"DIV",{class:!0});var Eo=i(Je);k(La.$$.fragment,Eo),Cv=c(Eo),gt=r(Eo,"DIV",{class:!0});var Fo=i(gt);k(Aa.$$.fragment,Fo),Pv=c(Fo),sn=r(Fo,"P",{});var si=i(sn);Nv=s(si,"The "),ad=r(si,"CODE",{});var U1=i(ad);Ov=s(U1,"FlaxT5PreTrainedModel"),U1.forEach(t),Lv=s(si," forward method, overrides the "),rd=r(si,"CODE",{});var W1=i(rd);Av=s(W1,"__call__"),W1.forEach(t),Iv=s(si," special method."),si.forEach(t),Dv=c(Fo),k(no.$$.fragment,Fo),Sv=c(Fo),k(oo.$$.fragment,Fo),Fo.forEach(t),Gv=c(Eo),so=r(Eo,"DIV",{class:!0});var Gp=i(so);k(Ia.$$.fragment,Gp),Uv=c(Gp),k(ao.$$.fragment,Gp),Gp.forEach(t),Wv=c(Eo),ro=r(Eo,"DIV",{class:!0});var Up=i(ro);k(Da.$$.fragment,Up),Bv=c(Up),k(io.$$.fragment,Up),Up.forEach(t),Eo.forEach(t),Wc=c(n),an=r(n,"H2",{class:!0});var Wp=i(an);lo=r(Wp,"A",{id:!0,class:!0,href:!0});var B1=i(lo);id=r(B1,"SPAN",{});var R1=i(id);k(Sa.$$.fragment,R1),R1.forEach(t),B1.forEach(t),Rv=c(Wp),ld=r(Wp,"SPAN",{});var H1=i(ld);Hv=s(H1,"FlaxT5ForConditionalGeneration"),H1.forEach(t),Wp.forEach(t),Bc=c(n),Xe=r(n,"DIV",{class:!0});var Mo=i(Xe);k(Ga.$$.fragment,Mo),Vv=c(Mo),Tt=r(Mo,"DIV",{class:!0});var Co=i(Tt);k(Ua.$$.fragment,Co),Kv=c(Co),rn=r(Co,"P",{});var ai=i(rn);Yv=s(ai,"The "),dd=r(ai,"CODE",{});var V1=i(dd);Zv=s(V1,"FlaxT5PreTrainedModel"),V1.forEach(t),Jv=s(ai," forward method, overrides the "),cd=r(ai,"CODE",{});var K1=i(cd);Xv=s(K1,"__call__"),K1.forEach(t),Qv=s(ai," special method."),ai.forEach(t),eb=c(Co),k(co.$$.fragment,Co),tb=c(Co),k(po.$$.fragment,Co),Co.forEach(t),nb=c(Mo),ho=r(Mo,"DIV",{class:!0});var Bp=i(ho);k(Wa.$$.fragment,Bp),ob=c(Bp),k(uo.$$.fragment,Bp),Bp.forEach(t),sb=c(Mo),mo=r(Mo,"DIV",{class:!0});var Rp=i(mo);k(Ba.$$.fragment,Rp),ab=c(Rp),k(fo.$$.fragment,Rp),Rp.forEach(t),Mo.forEach(t),this.h()},h(){h(p,"name","hf:doc:metadata"),h(p,"content",JSON.stringify(F5)),h(u,"id","t5"),h(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(u,"href","#t5"),h(g,"class","relative group"),h(ee,"id","overview"),h(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ee,"href","#overview"),h(E,"class","relative group"),h(re,"href","https://arxiv.org/pdf/1910.10683.pdf"),h(re,"rel","nofollow"),h(L,"href","#training"),h(Le,"href","#inference"),h(Ae,"href","#scripts"),h(Po,"href","https://huggingface.co/t5-small"),h(Po,"rel","nofollow"),h(No,"href","https://huggingface.co/t5-base"),h(No,"rel","nofollow"),h(Oo,"href","https://huggingface.co/t5-large"),h(Oo,"rel","nofollow"),h(Lo,"href","https://huggingface.co/t5-3b"),h(Lo,"rel","nofollow"),h(Ao,"href","https://huggingface.co/t5-11b"),h(Ao,"rel","nofollow"),h(Ja,"href","t5v1.1"),h(Xa,"href","mt5"),h(Qa,"href","byt5"),h(Io,"href","https://huggingface.co/models?search=t5"),h(Io,"rel","nofollow"),h(Do,"href","https://huggingface.co/thomwolf"),h(Do,"rel","nofollow"),h(So,"href","https://github.com/google-research/text-to-text-transfer-transformer"),h(So,"rel","nofollow"),h(er,"id","training"),h(mn,"id","training"),h(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(mn,"href","#training"),h(Ot,"class","relative group"),h(tr,"href","/docs/transformers/v4.19.2/en/model_doc/t5#transformers.T5ForConditionalGeneration"),h(or,"href","/docs/transformers/v4.19.2/en/model_doc/mt5#transformers.T5Tokenizer"),h(Wo,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/language-modeling"),h(Wo,"rel","nofollow"),h(Ro,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/summarization"),h(Ro,"rel","nofollow"),h(Ko,"href","https://discuss.huggingface.co/t/t5-finetuning-tips/684"),h(Ko,"rel","nofollow"),h(Yo,"href","https://arxiv.org/pdf/1910.10683.pdf"),h(Yo,"rel","nofollow"),h(dr,"id","inference"),h(Tn,"id","inference"),h(Tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Tn,"href","#inference"),h(Lt,"class","relative group"),h(cr,"href","/docs/transformers/v4.19.2/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),h(Jo,"href","https://huggingface.co/blog/how-to-generate"),h(Jo,"rel","nofollow"),h(Xo,"href","https://huggingface.co/blog/encoder-decoder#encoder-decoder"),h(Xo,"rel","nofollow"),h(pr,"href","/docs/transformers/v4.19.2/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),h(mr,"id","scripts"),h(vn,"id","performance"),h(vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(vn,"href","#performance"),h(At,"class","relative group"),h(os,"href","https://github.com/NVIDIA/apex#quick-start"),h(os,"rel","nofollow"),h(bn,"id","example-scripts"),h(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(bn,"href","#example-scripts"),h(It,"class","relative group"),h(as,"href","https://github.com/huggingface/transformers/blob/main/examples/flax/language-modeling/run_t5_mlm_flax.py"),h(as,"rel","nofollow"),h(rs,"href","https://github.com/huggingface/transformers/blob/main/examples/flax/language-modeling/t5_tokenizer_model.py"),h(rs,"rel","nofollow"),h(is,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/summarization"),h(is,"rel","nofollow"),h(ls,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/summarization"),h(ls,"rel","nofollow"),h(ds,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/summarization"),h(ds,"rel","nofollow"),h(cs,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/translation"),h(cs,"rel","nofollow"),h(ps,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/translation"),h(ps,"rel","nofollow"),h(yn,"id","transformers.T5Config"),h(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(yn,"href","#transformers.T5Config"),h(St,"class","relative group"),h(_r,"href","/docs/transformers/v4.19.2/en/model_doc/t5#transformers.T5Model"),h(gr,"href","/docs/transformers/v4.19.2/en/model_doc/t5#transformers.TFT5Model"),h(ms,"href","https://huggingface.co/t5-small"),h(ms,"rel","nofollow"),h(Tr,"href","/docs/transformers/v4.19.2/en/main_classes/configuration#transformers.PretrainedConfig"),h(vr,"href","/docs/transformers/v4.19.2/en/main_classes/configuration#transformers.PretrainedConfig"),h(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(wn,"id","transformers.T5Tokenizer"),h(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(wn,"href","#transformers.T5Tokenizer"),h(Ut,"class","relative group"),h(Ts,"href","https://github.com/google/sentencepiece"),h(Ts,"rel","nofollow"),h(br,"href","/docs/transformers/v4.19.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h($n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(xn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(wr,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(zn,"id","transformers.T5TokenizerFast"),h(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(zn,"href","#transformers.T5TokenizerFast"),h(Wt,"class","relative group"),h(qs,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),h(qs,"rel","nofollow"),h($r,"href","/docs/transformers/v4.19.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),h(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(jn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(qn,"id","transformers.T5Model"),h(qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(qn,"href","#transformers.T5Model"),h(Rt,"class","relative group"),h(Ls,"href","https://arxiv.org/abs/1910.10683"),h(Ls,"rel","nofollow"),h(jr,"href","/docs/transformers/v4.19.2/en/main_classes/model#transformers.PreTrainedModel"),h(Ds,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Ds,"rel","nofollow"),h(qr,"href","/docs/transformers/v4.19.2/en/model_doc/t5#transformers.T5Model"),h(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Pn,"id","transformers.T5ForConditionalGeneration"),h(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Pn,"href","#transformers.T5ForConditionalGeneration"),h(Vt,"class","relative group"),h(Vs,"href","https://arxiv.org/abs/1910.10683"),h(Vs,"rel","nofollow"),h(Er,"href","/docs/transformers/v4.19.2/en/main_classes/model#transformers.PreTrainedModel"),h(Zs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Zs,"rel","nofollow"),h(Fr,"href","/docs/transformers/v4.19.2/en/model_doc/t5#transformers.T5ForConditionalGeneration"),h(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(In,"id","transformers.T5EncoderModel"),h(In,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(In,"href","#transformers.T5EncoderModel"),h(Yt,"class","relative group"),h(oa,"href","https://arxiv.org/abs/1910.10683"),h(oa,"rel","nofollow"),h(Mr,"href","/docs/transformers/v4.19.2/en/main_classes/model#transformers.PreTrainedModel"),h(ra,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(ra,"rel","nofollow"),h(Cr,"href","/docs/transformers/v4.19.2/en/model_doc/t5#transformers.T5EncoderModel"),h(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Wn,"id","transformers.TFT5Model"),h(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Wn,"href","#transformers.TFT5Model"),h(Jt,"class","relative group"),h(ua,"href","https://arxiv.org/abs/1910.10683"),h(ua,"rel","nofollow"),h(Pr,"href","/docs/transformers/v4.19.2/en/main_classes/model#transformers.TFPreTrainedModel"),h(_a,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(_a,"rel","nofollow"),h(Nr,"href","/docs/transformers/v4.19.2/en/model_doc/t5#transformers.TFT5Model"),h(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Vn,"id","transformers.TFT5ForConditionalGeneration"),h(Vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Vn,"href","#transformers.TFT5ForConditionalGeneration"),h(Qt,"class","relative group"),h(ya,"href","https://arxiv.org/abs/1910.10683"),h(ya,"rel","nofollow"),h(Or,"href","/docs/transformers/v4.19.2/en/main_classes/model#transformers.TFPreTrainedModel"),h(xa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(xa,"rel","nofollow"),h(Lr,"href","/docs/transformers/v4.19.2/en/model_doc/t5#transformers.TFT5ForConditionalGeneration"),h(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Jn,"id","transformers.TFT5EncoderModel"),h(Jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Jn,"href","#transformers.TFT5EncoderModel"),h(tn,"class","relative group"),h(Fa,"href","https://arxiv.org/abs/1910.10683"),h(Fa,"rel","nofollow"),h(Ar,"href","/docs/transformers/v4.19.2/en/main_classes/model#transformers.TFPreTrainedModel"),h(Pa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Pa,"rel","nofollow"),h(Ir,"href","/docs/transformers/v4.19.2/en/model_doc/t5#transformers.TFT5EncoderModel"),h(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(to,"id","transformers.FlaxT5Model"),h(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(to,"href","#transformers.FlaxT5Model"),h(on,"class","relative group"),h(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(lo,"id","transformers.FlaxT5ForConditionalGeneration"),h(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(lo,"href","#transformers.FlaxT5ForConditionalGeneration"),h(an,"class","relative group"),h(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(n,f){e(document.head,p),m(n,v,f),m(n,g,f),e(g,u),e(u,T),y(l,T,null),e(g,_),e(g,q),e(q,qe),m(n,se,f),m(n,E,f),e(E,ee),e(ee,G),y(ae,G,null),e(E,Ee),e(E,U),e(U,Fe),m(n,ke,f),m(n,W,f),e(W,A),e(W,re),e(re,pe),e(W,M),m(n,N,f),m(n,he,f),e(he,K),m(n,ye,f),m(n,ue,f),e(ue,B),e(B,Me),m(n,we,f),m(n,P,f),e(P,Ce),m(n,H,f),m(n,V,f),e(V,Te),e(Te,O),e(O,Pe),e(O,ve),e(ve,I),e(O,Ne),e(O,R),e(R,Oe),e(O,z),e(V,F),e(V,te),e(te,Ge),e(Ge,et),e(V,D),e(V,Ue),e(Ue,ne),e(ne,tt),e(ne,L),e(L,Y),e(ne,nt),e(ne,Le),e(Le,Z),e(ne,ot),e(ne,Ae),e(Ae,Ie),e(ne,st),m(n,Ld,f),m(n,Ka,f),e(Ka,Hp),m(n,Ad,f),m(n,We,f),e(We,ri),e(ri,ii),e(ii,Po),e(Po,Vp),e(We,Kp),e(We,li),e(li,di),e(di,No),e(No,Yp),e(We,Zp),e(We,ci),e(ci,pi),e(pi,Oo),e(Oo,Jp),e(We,Xp),e(We,hi),e(hi,ui),e(ui,Lo),e(Lo,Qp),e(We,eh),e(We,mi),e(mi,Ya),e(Ya,Ao),e(Ao,th),e(Ya,nh),m(n,Id,f),m(n,Za,f),e(Za,oh),m(n,Dd,f),m(n,$t,f),e($t,fi),e(fi,cn),e(cn,_i),e(_i,sh),e(cn,ah),e(cn,Ja),e(Ja,rh),e(cn,ih),e($t,lh),e($t,gi),e(gi,pn),e(pn,Ti),e(Ti,dh),e(pn,ch),e(pn,Xa),e(Xa,ph),e(pn,hh),e($t,uh),e($t,vi),e(vi,hn),e(hn,bi),e(bi,mh),e(hn,fh),e(hn,Qa),e(Qa,_h),e(hn,gh),m(n,Sd,f),m(n,un,f),e(un,Th),e(un,Io),e(Io,vh),e(un,bh),m(n,Gd,f),m(n,xt,f),e(xt,kh),e(xt,Do),e(Do,yh),e(xt,wh),e(xt,So),e(So,$h),e(xt,xh),m(n,Ud,f),m(n,er,f),m(n,Wd,f),m(n,Ot,f),e(Ot,mn),e(mn,ki),y(Go,ki,null),e(Ot,zh),e(Ot,yi),e(yi,jh),m(n,Bd,f),m(n,at,f),e(at,qh),e(at,wi),e(wi,Eh),e(at,Fh),e(at,$i),e($i,Mh),e(at,Ch),e(at,xi),e(xi,Ph),e(at,Nh),m(n,Rd,f),m(n,fn,f),e(fn,Oh),e(fn,tr),e(tr,Lh),e(fn,Ah),m(n,Hd,f),m(n,nr,f),e(nr,zi),e(zi,Ih),m(n,Vd,f),m(n,me,f),e(me,Dh),e(me,ji),e(ji,Sh),e(me,Gh),e(me,qi),e(qi,Uh),e(me,Wh),e(me,Ei),e(Ei,Bh),e(me,Rh),e(me,Fi),e(Fi,Hh),e(me,Vh),e(me,Mi),e(Mi,Kh),e(me,Yh),e(me,or),e(or,Zh),e(me,Jh),m(n,Kd,f),m(n,sr,f),e(sr,Xh),m(n,Yd,f),y(Uo,n,f),m(n,Zd,f),m(n,_n,f),e(_n,Qh),e(_n,Wo),e(Wo,eu),e(_n,tu),m(n,Jd,f),m(n,ar,f),e(ar,Ci),e(Ci,nu),m(n,Xd,f),m(n,rr,f),e(rr,ou),m(n,Qd,f),y(Bo,n,f),m(n,ec,f),m(n,oe,f),e(oe,su),e(oe,Pi),e(Pi,au),e(oe,ru),e(oe,Ni),e(Ni,iu),e(oe,lu),e(oe,Oi),e(Oi,du),e(oe,cu),e(oe,Li),e(Li,pu),e(oe,hu),e(oe,Ai),e(Ai,uu),e(oe,mu),e(oe,Ii),e(Ii,fu),e(oe,_u),e(oe,Di),e(Di,gu),e(oe,Tu),m(n,tc,f),m(n,zt,f),e(zt,vu),e(zt,Si),e(Si,bu),e(zt,ku),e(zt,Gi),e(Gi,yu),e(zt,wu),m(n,nc,f),m(n,fe,f),e(fe,$u),e(fe,Ui),e(Ui,xu),e(fe,zu),e(fe,Wi),e(Wi,ju),e(fe,qu),e(fe,Bi),e(Bi,Eu),e(fe,Fu),e(fe,Ri),e(Ri,Mu),e(fe,Cu),e(fe,Ro),e(Ro,Pu),e(fe,Nu),e(fe,Hi),e(Hi,Ou),e(fe,Lu),m(n,oc,f),y(Ho,n,f),m(n,sc,f),m(n,ir,f),e(ir,Au),m(n,ac,f),m(n,lr,f),e(lr,Vo),e(Vo,Iu),e(Vo,Vi),e(Vi,Du),e(Vo,Su),m(n,rc,f),m(n,jt,f),e(jt,Gu),e(jt,Ko),e(Ko,Uu),e(jt,Wu),e(jt,Yo),e(Yo,Bu),e(jt,Ru),m(n,ic,f),m(n,gn,f),e(gn,Hu),e(gn,Ki),e(Ki,Vu),e(gn,Ku),m(n,lc,f),m(n,dr,f),m(n,dc,f),m(n,Lt,f),e(Lt,Tn),e(Tn,Yi),y(Zo,Yi,null),e(Lt,Yu),e(Lt,Zi),e(Zi,Zu),m(n,cc,f),m(n,rt,f),e(rt,Ju),e(rt,cr),e(cr,Xu),e(rt,Qu),e(rt,Jo),e(Jo,em),e(rt,tm),e(rt,Xo),e(Xo,nm),e(rt,om),m(n,pc,f),y(Qo,n,f),m(n,hc,f),m(n,Be,f),e(Be,sm),e(Be,Ji),e(Ji,am),e(Be,rm),e(Be,Xi),e(Xi,im),e(Be,lm),e(Be,pr),e(pr,dm),e(Be,cm),e(Be,Qi),e(Qi,pm),e(Be,hm),m(n,uc,f),m(n,hr,f),e(hr,um),m(n,mc,f),y(es,n,f),m(n,fc,f),m(n,ur,f),e(ur,mm),m(n,_c,f),y(ts,n,f),m(n,gc,f),m(n,mr,f),m(n,Tc,f),m(n,At,f),e(At,vn),e(vn,el),y(ns,el,null),e(At,fm),e(At,tl),e(tl,_m),m(n,vc,f),m(n,it,f),e(it,gm),e(it,os),e(os,Tm),e(it,vm),e(it,nl),e(nl,bm),e(it,km),e(it,ol),e(ol,ym),e(it,wm),m(n,bc,f),m(n,It,f),e(It,bn),e(bn,sl),y(ss,sl,null),e(It,$m),e(It,al),e(al,xm),m(n,kc,f),m(n,fr,f),e(fr,zm),m(n,yc,f),m(n,kn,f),e(kn,rl),e(rl,Dt),e(Dt,jm),e(Dt,as),e(as,qm),e(Dt,Em),e(Dt,rs),e(rs,Fm),e(Dt,Mm),e(kn,Cm),e(kn,il),e(il,De),e(De,Pm),e(De,is),e(is,Nm),e(De,Om),e(De,ls),e(ls,Lm),e(De,Am),e(De,ds),e(ds,Im),e(De,Dm),e(De,cs),e(cs,Sm),e(De,Gm),e(De,ps),e(ps,Um),e(De,Wm),m(n,wc,f),m(n,St,f),e(St,yn),e(yn,ll),y(hs,ll,null),e(St,Bm),e(St,dl),e(dl,Rm),m(n,$c,f),m(n,bt,f),y(us,bt,null),e(bt,Hm),e(bt,kt),e(kt,Vm),e(kt,_r),e(_r,Km),e(kt,Ym),e(kt,gr),e(gr,Zm),e(kt,Jm),e(kt,ms),e(ms,Xm),e(kt,Qm),e(bt,ef),e(bt,Gt),e(Gt,tf),e(Gt,Tr),e(Tr,nf),e(Gt,of),e(Gt,vr),e(vr,sf),e(Gt,af),m(n,xc,f),m(n,Ut,f),e(Ut,wn),e(wn,cl),y(fs,cl,null),e(Ut,rf),e(Ut,pl),e(pl,lf),m(n,zc,f),m(n,ie,f),y(_s,ie,null),e(ie,df),e(ie,gs),e(gs,cf),e(gs,Ts),e(Ts,pf),e(gs,hf),e(ie,uf),e(ie,vs),e(vs,mf),e(vs,br),e(br,ff),e(vs,_f),e(ie,gf),e(ie,qt),y(bs,qt,null),e(qt,Tf),e(qt,hl),e(hl,vf),e(qt,bf),e(qt,ks),e(ks,kr),e(kr,kf),e(kr,ul),e(ul,yf),e(ks,wf),e(ks,yr),e(yr,$f),e(yr,ml),e(ml,xf),e(ie,zf),e(ie,$n),y(ys,$n,null),e($n,jf),e($n,ws),e(ws,qf),e(ws,fl),e(fl,Ef),e(ws,Ff),e(ie,Mf),e(ie,xn),y($s,xn,null),e(xn,Cf),e(xn,_l),e(_l,Pf),e(ie,Nf),e(ie,wr),y(xs,wr,null),m(n,jc,f),m(n,Wt,f),e(Wt,zn),e(zn,gl),y(zs,gl,null),e(Wt,Of),e(Wt,Tl),e(Tl,Lf),m(n,qc,f),m(n,Se,f),y(js,Se,null),e(Se,Af),e(Se,Bt),e(Bt,If),e(Bt,vl),e(vl,Df),e(Bt,Sf),e(Bt,qs),e(qs,Gf),e(Bt,Uf),e(Se,Wf),e(Se,Es),e(Es,Bf),e(Es,$r),e($r,Rf),e(Es,Hf),e(Se,Vf),e(Se,Et),y(Fs,Et,null),e(Et,Kf),e(Et,bl),e(bl,Yf),e(Et,Zf),e(Et,Ms),e(Ms,xr),e(xr,Jf),e(xr,kl),e(kl,Xf),e(Ms,Qf),e(Ms,zr),e(zr,e_),e(zr,yl),e(yl,t_),e(Se,n_),e(Se,jn),y(Cs,jn,null),e(jn,o_),e(jn,wl),e(wl,s_),m(n,Ec,f),m(n,Rt,f),e(Rt,qn),e(qn,$l),y(Ps,$l,null),e(Rt,a_),e(Rt,xl),e(xl,r_),m(n,Fc,f),m(n,J,f),y(Ns,J,null),e(J,i_),e(J,zl),e(zl,l_),e(J,d_),e(J,Os),e(Os,c_),e(Os,Ls),e(Ls,p_),e(Os,h_),e(J,u_),e(J,As),e(As,m_),e(As,jr),e(jr,f_),e(As,__),e(J,g_),e(J,Is),e(Is,T_),e(Is,Ds),e(Ds,v_),e(Is,b_),e(J,k_),e(J,lt),y(Ss,lt,null),e(lt,y_),e(lt,Ht),e(Ht,w_),e(Ht,qr),e(qr,$_),e(Ht,x_),e(Ht,jl),e(jl,z_),e(Ht,j_),e(lt,q_),y(En,lt,null),e(lt,E_),y(Fn,lt,null),e(J,F_),e(J,dt),y(Gs,dt,null),e(dt,M_),e(dt,ql),e(ql,C_),e(dt,P_),e(dt,El),e(El,N_),e(dt,O_),y(Mn,dt,null),e(J,L_),e(J,Ft),y(Us,Ft,null),e(Ft,A_),e(Ft,Fl),e(Fl,I_),e(Ft,D_),y(Cn,Ft,null),m(n,Mc,f),m(n,Vt,f),e(Vt,Pn),e(Pn,Ml),y(Ws,Ml,null),e(Vt,S_),e(Vt,Cl),e(Cl,G_),m(n,Cc,f),m(n,X,f),y(Bs,X,null),e(X,U_),e(X,Rs),e(Rs,W_),e(Rs,Pl),e(Pl,B_),e(Rs,R_),e(X,H_),e(X,Hs),e(Hs,V_),e(Hs,Vs),e(Vs,K_),e(Hs,Y_),e(X,Z_),e(X,Ks),e(Ks,J_),e(Ks,Er),e(Er,X_),e(Ks,Q_),e(X,eg),e(X,Ys),e(Ys,tg),e(Ys,Zs),e(Zs,ng),e(Ys,og),e(X,sg),e(X,ct),y(Js,ct,null),e(ct,ag),e(ct,Kt),e(Kt,rg),e(Kt,Fr),e(Fr,ig),e(Kt,lg),e(Kt,Nl),e(Nl,dg),e(Kt,cg),e(ct,pg),y(Nn,ct,null),e(ct,hg),y(On,ct,null),e(X,ug),e(X,pt),y(Xs,pt,null),e(pt,mg),e(pt,Ol),e(Ol,fg),e(pt,_g),e(pt,Ll),e(Ll,gg),e(pt,Tg),y(Ln,pt,null),e(X,vg),e(X,Mt),y(Qs,Mt,null),e(Mt,bg),e(Mt,Al),e(Al,kg),e(Mt,yg),y(An,Mt,null),m(n,Pc,f),m(n,Yt,f),e(Yt,In),e(In,Il),y(ea,Il,null),e(Yt,wg),e(Yt,Dl),e(Dl,$g),m(n,Nc,f),m(n,Q,f),y(ta,Q,null),e(Q,xg),e(Q,Sl),e(Sl,zg),e(Q,jg),e(Q,na),e(na,qg),e(na,oa),e(oa,Eg),e(na,Fg),e(Q,Mg),e(Q,sa),e(sa,Cg),e(sa,Mr),e(Mr,Pg),e(sa,Ng),e(Q,Og),e(Q,aa),e(aa,Lg),e(aa,ra),e(ra,Ag),e(aa,Ig),e(Q,Dg),e(Q,ht),y(ia,ht,null),e(ht,Sg),e(ht,Zt),e(Zt,Gg),e(Zt,Cr),e(Cr,Ug),e(Zt,Wg),e(Zt,Gl),e(Gl,Bg),e(Zt,Rg),e(ht,Hg),y(Dn,ht,null),e(ht,Vg),y(Sn,ht,null),e(Q,Kg),e(Q,ut),y(la,ut,null),e(ut,Yg),e(ut,Ul),e(Ul,Zg),e(ut,Jg),e(ut,Wl),e(Wl,Xg),e(ut,Qg),y(Gn,ut,null),e(Q,eT),e(Q,Ct),y(da,Ct,null),e(Ct,tT),e(Ct,Bl),e(Bl,nT),e(Ct,oT),y(Un,Ct,null),m(n,Oc,f),m(n,Jt,f),e(Jt,Wn),e(Wn,Rl),y(ca,Rl,null),e(Jt,sT),e(Jt,Hl),e(Hl,aT),m(n,Lc,f),m(n,le,f),y(pa,le,null),e(le,rT),e(le,Vl),e(Vl,iT),e(le,lT),e(le,ha),e(ha,dT),e(ha,ua),e(ua,cT),e(ha,pT),e(le,hT),e(le,ma),e(ma,uT),e(ma,Pr),e(Pr,mT),e(ma,fT),e(le,_T),e(le,fa),e(fa,gT),e(fa,_a),e(_a,TT),e(fa,vT),e(le,bT),y(Bn,le,null),e(le,kT),e(le,mt),y(ga,mt,null),e(mt,yT),e(mt,Xt),e(Xt,wT),e(Xt,Nr),e(Nr,$T),e(Xt,xT),e(Xt,Kl),e(Kl,zT),e(Xt,jT),e(mt,qT),y(Rn,mt,null),e(mt,ET),y(Hn,mt,null),m(n,Ac,f),m(n,Qt,f),e(Qt,Vn),e(Vn,Yl),y(Ta,Yl,null),e(Qt,FT),e(Qt,Zl),e(Zl,MT),m(n,Ic,f),m(n,de,f),y(va,de,null),e(de,CT),e(de,ba),e(ba,PT),e(ba,Jl),e(Jl,NT),e(ba,OT),e(de,LT),e(de,ka),e(ka,AT),e(ka,ya),e(ya,IT),e(ka,DT),e(de,ST),e(de,wa),e(wa,GT),e(wa,Or),e(Or,UT),e(wa,WT),e(de,BT),e(de,$a),e($a,RT),e($a,xa),e(xa,HT),e($a,VT),e(de,KT),y(Kn,de,null),e(de,YT),e(de,ft),y(za,ft,null),e(ft,ZT),e(ft,en),e(en,JT),e(en,Lr),e(Lr,XT),e(en,QT),e(en,Xl),e(Xl,ev),e(en,tv),e(ft,nv),y(Yn,ft,null),e(ft,ov),y(Zn,ft,null),m(n,Dc,f),m(n,tn,f),e(tn,Jn),e(Jn,Ql),y(ja,Ql,null),e(tn,sv),e(tn,ed),e(ed,av),m(n,Sc,f),m(n,ce,f),y(qa,ce,null),e(ce,rv),e(ce,td),e(td,iv),e(ce,lv),e(ce,Ea),e(Ea,dv),e(Ea,Fa),e(Fa,cv),e(Ea,pv),e(ce,hv),e(ce,Ma),e(Ma,uv),e(Ma,Ar),e(Ar,mv),e(Ma,fv),e(ce,_v),e(ce,Ca),e(Ca,gv),e(Ca,Pa),e(Pa,Tv),e(Ca,vv),e(ce,bv),y(Xn,ce,null),e(ce,kv),e(ce,_t),y(Na,_t,null),e(_t,yv),e(_t,nn),e(nn,wv),e(nn,Ir),e(Ir,$v),e(nn,xv),e(nn,nd),e(nd,zv),e(nn,jv),e(_t,qv),y(Qn,_t,null),e(_t,Ev),y(eo,_t,null),m(n,Gc,f),m(n,on,f),e(on,to),e(to,od),y(Oa,od,null),e(on,Fv),e(on,sd),e(sd,Mv),m(n,Uc,f),m(n,Je,f),y(La,Je,null),e(Je,Cv),e(Je,gt),y(Aa,gt,null),e(gt,Pv),e(gt,sn),e(sn,Nv),e(sn,ad),e(ad,Ov),e(sn,Lv),e(sn,rd),e(rd,Av),e(sn,Iv),e(gt,Dv),y(no,gt,null),e(gt,Sv),y(oo,gt,null),e(Je,Gv),e(Je,so),y(Ia,so,null),e(so,Uv),y(ao,so,null),e(Je,Wv),e(Je,ro),y(Da,ro,null),e(ro,Bv),y(io,ro,null),m(n,Wc,f),m(n,an,f),e(an,lo),e(lo,id),y(Sa,id,null),e(an,Rv),e(an,ld),e(ld,Hv),m(n,Bc,f),m(n,Xe,f),y(Ga,Xe,null),e(Xe,Vv),e(Xe,Tt),y(Ua,Tt,null),e(Tt,Kv),e(Tt,rn),e(rn,Yv),e(rn,dd),e(dd,Zv),e(rn,Jv),e(rn,cd),e(cd,Xv),e(rn,Qv),e(Tt,eb),y(co,Tt,null),e(Tt,tb),y(po,Tt,null),e(Xe,nb),e(Xe,ho),y(Wa,ho,null),e(ho,ob),y(uo,ho,null),e(Xe,sb),e(Xe,mo),y(Ba,mo,null),e(mo,ab),y(fo,mo,null),Rc=!0},p(n,[f]){const Ra={};f&2&&(Ra.$$scope={dirty:f,ctx:n}),En.$set(Ra);const pd={};f&2&&(pd.$$scope={dirty:f,ctx:n}),Fn.$set(pd);const hd={};f&2&&(hd.$$scope={dirty:f,ctx:n}),Mn.$set(hd);const ud={};f&2&&(ud.$$scope={dirty:f,ctx:n}),Cn.$set(ud);const Ha={};f&2&&(Ha.$$scope={dirty:f,ctx:n}),Nn.$set(Ha);const md={};f&2&&(md.$$scope={dirty:f,ctx:n}),On.$set(md);const fd={};f&2&&(fd.$$scope={dirty:f,ctx:n}),Ln.$set(fd);const _d={};f&2&&(_d.$$scope={dirty:f,ctx:n}),An.$set(_d);const Va={};f&2&&(Va.$$scope={dirty:f,ctx:n}),Dn.$set(Va);const gd={};f&2&&(gd.$$scope={dirty:f,ctx:n}),Sn.$set(gd);const Td={};f&2&&(Td.$$scope={dirty:f,ctx:n}),Gn.$set(Td);const vd={};f&2&&(vd.$$scope={dirty:f,ctx:n}),Un.$set(vd);const bd={};f&2&&(bd.$$scope={dirty:f,ctx:n}),Bn.$set(bd);const kd={};f&2&&(kd.$$scope={dirty:f,ctx:n}),Rn.$set(kd);const ln={};f&2&&(ln.$$scope={dirty:f,ctx:n}),Hn.$set(ln);const yd={};f&2&&(yd.$$scope={dirty:f,ctx:n}),Kn.$set(yd);const dn={};f&2&&(dn.$$scope={dirty:f,ctx:n}),Yn.$set(dn);const wd={};f&2&&(wd.$$scope={dirty:f,ctx:n}),Zn.$set(wd);const $d={};f&2&&($d.$$scope={dirty:f,ctx:n}),Xn.$set($d);const xd={};f&2&&(xd.$$scope={dirty:f,ctx:n}),Qn.$set(xd);const zd={};f&2&&(zd.$$scope={dirty:f,ctx:n}),eo.$set(zd);const jd={};f&2&&(jd.$$scope={dirty:f,ctx:n}),no.$set(jd);const yt={};f&2&&(yt.$$scope={dirty:f,ctx:n}),oo.$set(yt);const qd={};f&2&&(qd.$$scope={dirty:f,ctx:n}),ao.$set(qd);const Ed={};f&2&&(Ed.$$scope={dirty:f,ctx:n}),io.$set(Ed);const Fd={};f&2&&(Fd.$$scope={dirty:f,ctx:n}),co.$set(Fd);const Md={};f&2&&(Md.$$scope={dirty:f,ctx:n}),po.$set(Md);const Qe={};f&2&&(Qe.$$scope={dirty:f,ctx:n}),uo.$set(Qe);const Cd={};f&2&&(Cd.$$scope={dirty:f,ctx:n}),fo.$set(Cd)},i(n){Rc||(w(l.$$.fragment,n),w(ae.$$.fragment,n),w(Go.$$.fragment,n),w(Uo.$$.fragment,n),w(Bo.$$.fragment,n),w(Ho.$$.fragment,n),w(Zo.$$.fragment,n),w(Qo.$$.fragment,n),w(es.$$.fragment,n),w(ts.$$.fragment,n),w(ns.$$.fragment,n),w(ss.$$.fragment,n),w(hs.$$.fragment,n),w(us.$$.fragment,n),w(fs.$$.fragment,n),w(_s.$$.fragment,n),w(bs.$$.fragment,n),w(ys.$$.fragment,n),w($s.$$.fragment,n),w(xs.$$.fragment,n),w(zs.$$.fragment,n),w(js.$$.fragment,n),w(Fs.$$.fragment,n),w(Cs.$$.fragment,n),w(Ps.$$.fragment,n),w(Ns.$$.fragment,n),w(Ss.$$.fragment,n),w(En.$$.fragment,n),w(Fn.$$.fragment,n),w(Gs.$$.fragment,n),w(Mn.$$.fragment,n),w(Us.$$.fragment,n),w(Cn.$$.fragment,n),w(Ws.$$.fragment,n),w(Bs.$$.fragment,n),w(Js.$$.fragment,n),w(Nn.$$.fragment,n),w(On.$$.fragment,n),w(Xs.$$.fragment,n),w(Ln.$$.fragment,n),w(Qs.$$.fragment,n),w(An.$$.fragment,n),w(ea.$$.fragment,n),w(ta.$$.fragment,n),w(ia.$$.fragment,n),w(Dn.$$.fragment,n),w(Sn.$$.fragment,n),w(la.$$.fragment,n),w(Gn.$$.fragment,n),w(da.$$.fragment,n),w(Un.$$.fragment,n),w(ca.$$.fragment,n),w(pa.$$.fragment,n),w(Bn.$$.fragment,n),w(ga.$$.fragment,n),w(Rn.$$.fragment,n),w(Hn.$$.fragment,n),w(Ta.$$.fragment,n),w(va.$$.fragment,n),w(Kn.$$.fragment,n),w(za.$$.fragment,n),w(Yn.$$.fragment,n),w(Zn.$$.fragment,n),w(ja.$$.fragment,n),w(qa.$$.fragment,n),w(Xn.$$.fragment,n),w(Na.$$.fragment,n),w(Qn.$$.fragment,n),w(eo.$$.fragment,n),w(Oa.$$.fragment,n),w(La.$$.fragment,n),w(Aa.$$.fragment,n),w(no.$$.fragment,n),w(oo.$$.fragment,n),w(Ia.$$.fragment,n),w(ao.$$.fragment,n),w(Da.$$.fragment,n),w(io.$$.fragment,n),w(Sa.$$.fragment,n),w(Ga.$$.fragment,n),w(Ua.$$.fragment,n),w(co.$$.fragment,n),w(po.$$.fragment,n),w(Wa.$$.fragment,n),w(uo.$$.fragment,n),w(Ba.$$.fragment,n),w(fo.$$.fragment,n),Rc=!0)},o(n){$(l.$$.fragment,n),$(ae.$$.fragment,n),$(Go.$$.fragment,n),$(Uo.$$.fragment,n),$(Bo.$$.fragment,n),$(Ho.$$.fragment,n),$(Zo.$$.fragment,n),$(Qo.$$.fragment,n),$(es.$$.fragment,n),$(ts.$$.fragment,n),$(ns.$$.fragment,n),$(ss.$$.fragment,n),$(hs.$$.fragment,n),$(us.$$.fragment,n),$(fs.$$.fragment,n),$(_s.$$.fragment,n),$(bs.$$.fragment,n),$(ys.$$.fragment,n),$($s.$$.fragment,n),$(xs.$$.fragment,n),$(zs.$$.fragment,n),$(js.$$.fragment,n),$(Fs.$$.fragment,n),$(Cs.$$.fragment,n),$(Ps.$$.fragment,n),$(Ns.$$.fragment,n),$(Ss.$$.fragment,n),$(En.$$.fragment,n),$(Fn.$$.fragment,n),$(Gs.$$.fragment,n),$(Mn.$$.fragment,n),$(Us.$$.fragment,n),$(Cn.$$.fragment,n),$(Ws.$$.fragment,n),$(Bs.$$.fragment,n),$(Js.$$.fragment,n),$(Nn.$$.fragment,n),$(On.$$.fragment,n),$(Xs.$$.fragment,n),$(Ln.$$.fragment,n),$(Qs.$$.fragment,n),$(An.$$.fragment,n),$(ea.$$.fragment,n),$(ta.$$.fragment,n),$(ia.$$.fragment,n),$(Dn.$$.fragment,n),$(Sn.$$.fragment,n),$(la.$$.fragment,n),$(Gn.$$.fragment,n),$(da.$$.fragment,n),$(Un.$$.fragment,n),$(ca.$$.fragment,n),$(pa.$$.fragment,n),$(Bn.$$.fragment,n),$(ga.$$.fragment,n),$(Rn.$$.fragment,n),$(Hn.$$.fragment,n),$(Ta.$$.fragment,n),$(va.$$.fragment,n),$(Kn.$$.fragment,n),$(za.$$.fragment,n),$(Yn.$$.fragment,n),$(Zn.$$.fragment,n),$(ja.$$.fragment,n),$(qa.$$.fragment,n),$(Xn.$$.fragment,n),$(Na.$$.fragment,n),$(Qn.$$.fragment,n),$(eo.$$.fragment,n),$(Oa.$$.fragment,n),$(La.$$.fragment,n),$(Aa.$$.fragment,n),$(no.$$.fragment,n),$(oo.$$.fragment,n),$(Ia.$$.fragment,n),$(ao.$$.fragment,n),$(Da.$$.fragment,n),$(io.$$.fragment,n),$(Sa.$$.fragment,n),$(Ga.$$.fragment,n),$(Ua.$$.fragment,n),$(co.$$.fragment,n),$(po.$$.fragment,n),$(Wa.$$.fragment,n),$(uo.$$.fragment,n),$(Ba.$$.fragment,n),$(fo.$$.fragment,n),Rc=!1},d(n){t(p),n&&t(v),n&&t(g),x(l),n&&t(se),n&&t(E),x(ae),n&&t(ke),n&&t(W),n&&t(N),n&&t(he),n&&t(ye),n&&t(ue),n&&t(we),n&&t(P),n&&t(H),n&&t(V),n&&t(Ld),n&&t(Ka),n&&t(Ad),n&&t(We),n&&t(Id),n&&t(Za),n&&t(Dd),n&&t($t),n&&t(Sd),n&&t(un),n&&t(Gd),n&&t(xt),n&&t(Ud),n&&t(er),n&&t(Wd),n&&t(Ot),x(Go),n&&t(Bd),n&&t(at),n&&t(Rd),n&&t(fn),n&&t(Hd),n&&t(nr),n&&t(Vd),n&&t(me),n&&t(Kd),n&&t(sr),n&&t(Yd),x(Uo,n),n&&t(Zd),n&&t(_n),n&&t(Jd),n&&t(ar),n&&t(Xd),n&&t(rr),n&&t(Qd),x(Bo,n),n&&t(ec),n&&t(oe),n&&t(tc),n&&t(zt),n&&t(nc),n&&t(fe),n&&t(oc),x(Ho,n),n&&t(sc),n&&t(ir),n&&t(ac),n&&t(lr),n&&t(rc),n&&t(jt),n&&t(ic),n&&t(gn),n&&t(lc),n&&t(dr),n&&t(dc),n&&t(Lt),x(Zo),n&&t(cc),n&&t(rt),n&&t(pc),x(Qo,n),n&&t(hc),n&&t(Be),n&&t(uc),n&&t(hr),n&&t(mc),x(es,n),n&&t(fc),n&&t(ur),n&&t(_c),x(ts,n),n&&t(gc),n&&t(mr),n&&t(Tc),n&&t(At),x(ns),n&&t(vc),n&&t(it),n&&t(bc),n&&t(It),x(ss),n&&t(kc),n&&t(fr),n&&t(yc),n&&t(kn),n&&t(wc),n&&t(St),x(hs),n&&t($c),n&&t(bt),x(us),n&&t(xc),n&&t(Ut),x(fs),n&&t(zc),n&&t(ie),x(_s),x(bs),x(ys),x($s),x(xs),n&&t(jc),n&&t(Wt),x(zs),n&&t(qc),n&&t(Se),x(js),x(Fs),x(Cs),n&&t(Ec),n&&t(Rt),x(Ps),n&&t(Fc),n&&t(J),x(Ns),x(Ss),x(En),x(Fn),x(Gs),x(Mn),x(Us),x(Cn),n&&t(Mc),n&&t(Vt),x(Ws),n&&t(Cc),n&&t(X),x(Bs),x(Js),x(Nn),x(On),x(Xs),x(Ln),x(Qs),x(An),n&&t(Pc),n&&t(Yt),x(ea),n&&t(Nc),n&&t(Q),x(ta),x(ia),x(Dn),x(Sn),x(la),x(Gn),x(da),x(Un),n&&t(Oc),n&&t(Jt),x(ca),n&&t(Lc),n&&t(le),x(pa),x(Bn),x(ga),x(Rn),x(Hn),n&&t(Ac),n&&t(Qt),x(Ta),n&&t(Ic),n&&t(de),x(va),x(Kn),x(za),x(Yn),x(Zn),n&&t(Dc),n&&t(tn),x(ja),n&&t(Sc),n&&t(ce),x(qa),x(Xn),x(Na),x(Qn),x(eo),n&&t(Gc),n&&t(on),x(Oa),n&&t(Uc),n&&t(Je),x(La),x(Aa),x(no),x(oo),x(Ia),x(ao),x(Da),x(io),n&&t(Wc),n&&t(an),x(Sa),n&&t(Bc),n&&t(Xe),x(Ga),x(Ua),x(co),x(po),x(Wa),x(uo),x(Ba),x(fo)}}}const F5={local:"t5",sections:[{local:"overview",title:"Overview"},{local:"training",title:"Training"},{local:"inference",title:"Inference"},{local:"performance",title:"Performance"},{local:"example-scripts",title:"Example scripts"},{local:"transformers.T5Config",title:"T5Config"},{local:"transformers.T5Tokenizer",title:"T5Tokenizer"},{local:"transformers.T5TokenizerFast",title:"T5TokenizerFast"},{local:"transformers.T5Model",title:"T5Model"},{local:"transformers.T5ForConditionalGeneration",title:"T5ForConditionalGeneration"},{local:"transformers.T5EncoderModel",title:"T5EncoderModel"},{local:"transformers.TFT5Model",title:"TFT5Model"},{local:"transformers.TFT5ForConditionalGeneration",title:"TFT5ForConditionalGeneration"},{local:"transformers.TFT5EncoderModel",title:"TFT5EncoderModel"},{local:"transformers.FlaxT5Model",title:"FlaxT5Model"},{local:"transformers.FlaxT5ForConditionalGeneration",title:"FlaxT5ForConditionalGeneration"}],title:"T5"};function M5(j){return Q1(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class I5 extends Y1{constructor(p){super();Z1(this,p,M5,E5,J1,{})}}export{I5 as default,F5 as metadata};
